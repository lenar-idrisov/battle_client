import React from 'react';
import Matrix from './Matrix';
import Scheme from './Scheme';

/*  сначала корабли представлены блоками .ship-psevdo, это сделано, чтобы
легко и красиво  разложить корабли с помощью flex-разметки
при нажатии на конкретный div.ship-psevdo срабатывает обработчик onMoveDown,
и на место клика мгновенно подставляется новый элемент div.ship-draggable(state.current)
на документ вешается обработчик onmove и корабль при перемещении мышки тоже двигается
ранее описанный блок div.ship-psevdo, теряет вид корабля и приобретает класс .ship-backface
то есть он был лишь комуфляжем корабля, реальный корабль это .ship-draggable
как только мышку отжали на .ship-draggable, срабатывает обработчик onMouseUp
и если внизу подходящая ячейка, которая не нарушает правил игры, то на эту ячейку "опускатся"
div.ship-draggable и попвдает в массив state.dragged-list
и обработчик onmove удаляется */
const colors = {
    red: '#ff0040',
    green: '#209451',
    blue: '#00f'
}

export default class Settings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: 'random',   // режим расстановки кораблей (случайно/вручную)
            current: {},      // текущий перемещаемый корабль
            dragged_list: [], // массив уже перенесенных на матрицу корабликов
        }
        this.shiftX = null;
        this.shiftY = null;
        this.oldShip = {};
        this.newShip = {};
    }

    componentDidMount(){
        let draggedNode = document.querySelector('.ships-dragged');
        let matrixNode = document.querySelector('.matrix');
        matrixNode.append(draggedNode);

    }
    changeMode = (event) =>{
        let mode = event.target.value;
        this.setState({mode});
        if(mode == 'random') this.setState({current:{},dragged_list:[]})
        this.props.regenerateShips(mode);
    }
    playStart = () =>{
        let {mode,dragged_list} = this.state;
        if(mode == 'manually') this.props.setShipsManually(dragged_list);
        this.props.next();
    }

    // поворот фигуры на 90 градусов
    transformShip = (event, ship) =>{
        // предотвращаем появление контексного меню
        event.preventDefault();
        if(ship.size == 1) return;
        //console.log('transformShip')
        let {dragged_list} = this.state;
        let index = this.getIndexOfShip(ship.num);
        this.oldShip = dragged_list.splice(index,1)[0];
        let newShip = {
            ...ship,
            dir: ship.dir == 'right' ? 'down' : 'right',
        }
        if(!this.props.isOverlapShips(newShip,dragged_list) && newShip.y+newShip.size-1 <= 9){
            this.oldShip = {};
            dragged_list.push(newShip);
            //console.log('newShip',newShip,dragged_list)
        } else{
            dragged_list.push(this.oldShip);
            this.oldShip = {};
        }
        this.setState({dragged_list})
    }
    // нажали левую кнопку для перемещения корабля
    moveStart = (event, ship) => {
        if(event.nativeEvent.which != 1) return;
        //console.log('moveStart')
        // если корабль уже был на игровом поле времненно удаляем его
        let shipNode = event.target;
        let {dragged_list} = this.state;
        let index = this.getIndexOfShip(ship.num);
        if(index !== 5000) this.oldShip = dragged_list.splice(index,1)[0];
        // смещение курсора относительно передвигаемого кораблика
        // это чтобы за какую точку взяли кораблик, за ту и переносили без прыжков
        this.shiftX = event.clientX-shipNode.getBoundingClientRect().left;
        this.shiftY = event.clientY-shipNode.getBoundingClientRect().top;
        let current = {
            ...ship,
            x: event.pageX-this.shiftX,
            y: event.pageY-this.shiftY,
            color: colors.blue,
            dir: ship.dir || 'right',
        }
        this.setState({current,dragged_list})
        document.addEventListener('mousemove', this.move);
    }
    // отслеживание координат при перемещении
    move = (event) =>{
        let ship = this.state.current;
        let color = this.check(event,ship) ? colors.green : colors.red;
        let current = {
            ...ship,
            x: event.pageX-this.shiftX,
            y: event.pageY-this.shiftY,
            color,
        }
        this.setState({current})
    }
    // отжали левую кнопку мыши
    moveEnd = (event,ship) =>{
        document.removeEventListener('mousemove', this.move);
        let {dragged_list} = this.state;
        if(this.check(event,ship)){
            this.oldShip = {};
            dragged_list.push(this.newShip);
        } else if(JSON.stringify(this.oldShip) != "{}"){
            dragged_list.push(this.oldShip);
            this.oldShip = {};
        }
        this.setState({current:{},dragged_list})
    }


    // проверяет, где корабль летит и можно ли его приземлить(не нарушая правил игры)
    check = (event,ship) =>{
        let {current,dragged_list} = this.state;
        // прячем переносимый корабль на мгновенье, чтоб увидить какой dom-элемент под ним
        let shipNode = event.target;
        shipNode.hidden = true;
        // определяем точные координаты 1 палуб корабля, чтоб узнать какая ячейка под ней
        // и можно ли туда поместить корабль
        let shipX = event.pageX-this.shiftX+15;
        let shipY = event.pageY-this.shiftY+15;
        let elemBelow = document.elementFromPoint(shipX, shipY);
        shipNode.hidden = false;
        if(!elemBelow || elemBelow.className != 'cell') {
            //console.log('не на матрице или вышел за границы',elemBelow)
            return false;
        } else{
            let newShip = {
                ...ship,
                x: Number(elemBelow.getAttribute('data-x')),
                y: Number(elemBelow.getAttribute('data-y')),
                color: colors.blue,
            }
            //console.log('подо мной клетка ',elemBelow)
            this.newShip = newShip;
			if(newShip.dir == 'right' && newShip.x+newShip.size-1 > 9) return false;
			if(newShip.dir == 'down' && newShip.y+newShip.size-1 > 9) return false;
            return !this.props.isOverlapShips(newShip,dragged_list);
        }
    }
    // поиск корабля по номеру, возвращает индекс корабля в массив this.temp_list
    getIndexOfShip = (num) =>{
        let index = 5000;
        this.state.dragged_list.some((ship,i) =>{
            if(ship.num == num) {
                index = i; return true;
            } else return false;
        })
        // если вернется 5000, значит нет этого корабля на игровом поле
        // (в массиве temp_list,dragged_list)
        return index;
    }


    render = () => {
        let scale = 30;
        let {mode, current, dragged_list} = this.state;

        //console.log('redder_dragged',dragged_list)
        //console.log('redder_current',current)
        return (
            <div className="set-ships">
                <h1>Расстановка кораблей</h1>
                <div className="set-ships-body">

                    <div className="left-part">
                        <div className="some-container">
                            <div className="input-container">
                                <label htmlFor="radio1">расставить случайно</label>
                                <input type="radio"
                                    id="radio1"
                                    value="random"
                                    checked={mode=='random'}
                                    onChange={this.changeMode} />
                            </div>
                            <div className="input-container">
                                <label htmlFor="radio2">расставить самому</label>
                                <input type="radio"
                                    id="radio2"
                                    value="manually"
                                    checked={mode=='manually'}
                                    onChange={this.changeMode} />
                            </div>
                        </div>
                        <Matrix
                            ships={this.props.ships}
                            player={this.props.player}
                            click_handler={null}
                        />
                        {/* массив уже перемещенных на игровое поле кораблей */}
                        <div class="ships-dragged">
                            {dragged_list.map(ship =>
                                (ship.dir == 'right' ? (
                                    <div
                                        num={ship.num}
                                        className="ship-draggable"
                                        style={{width:scale*ship.size, height:scale, left:ship.x*scale, top:ship.y*scale, borderColor:ship.color}}
                                        onMouseDown={e => this.moveStart(e, ship)}
                                        onContextMenu={e => this.transformShip(e, ship)}>
                                    </div>) : (
                                    <div
                                        num={ship.num}
                                        className="ship-draggable"
                                        style={{width:scale, height:scale*ship.size, left:ship.x*scale, top:ship.y*scale, borderColor:ship.color}}
                                        onMouseDown={e => this.moveStart(e, ship)}
                                        onContextMenu={e => this.transformShip(e, ship)}>
                                    </div>)
                                )
                            )}
                        </div>
                        {/* текущий перетаскиваемый элемент */}
                        <div class="ship-current">
                            {JSON.stringify(current) != "{}" ?
                                (current.dir == 'right' ? (
                                    <div
                                        className="ship-draggable"
                                        style={{width:scale*current.size, height:scale, left:current.x, top:current.y, borderColor:current.color}}
                                        onMouseUp={e => this.moveEnd(e, current)}>
                                    </div>) : (
                                    <div
                                        className="ship-draggable"
                                        style={{width:scale, height:scale*current.size, left:current.x, top:current.y, borderColor:current.color}}
                                        onMouseUp={e => this.moveEnd(e, current)}>
                                    </div>)
                                ): null
                            }
                        </div>
                    </div>
                    {mode == 'manually' ? (
                        <div className="right-part">
                            <p className="ship-hint">Нажмите и тащите мышкой корабли
                            в игровое поле до появления зеленой рамки.</p>
                            <p className="ship-hint">Для поворота корабля — после перемещения
                            нажмите правую кнопку мыши.</p>
                            {/* массив исходных кораблей до перетаскивания */}
                            <div class="ships-psevdo-draggable">
                            {Scheme.map(ship =>
                                (ship.num == current.num || this.getIndexOfShip(ship.num) != 5000 ? (
                                    <div
                                        className="ship-backface"
                                        style={{width: scale * ship.size}}>
                                    </div>) : (
                                    <div
                                        num={ship.num}
                                        className="ship-psevdo"
                                        style={{width: scale * ship.size, height: scale }}
                                        onMouseDown={e =>this.moveStart(e,ship)}>
                                    </div>)
                                )
                            )}
                            </div>
                        </div>) : null
                    }
                </div>
                {dragged_list.length == 10 || this.props.ships.length ?
                    (<button onClick={this.playStart}>Играть</button>):
                    (<button className="disable" onClick={null}>Играть</button>)
                }
            </div>
        );
    }
}