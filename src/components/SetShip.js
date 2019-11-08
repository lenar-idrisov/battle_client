import React from 'react';
import Matrix from './Matrix';
import Scheme from './Scheme';

const colors = {
    red: '#ff0040',
    green: '#8cc71f',
    blue: '#00f'
}

export default class Settings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: 'manually',   // режим расстановки кораблей (случайно/вручную)
            current: {},        // уникальный номер перемещаемого корабля
            draggable_list: [], // массив уже перенесенных на матрицу корабликов
            temp_list: [],      // массив не для визуализации а для передачи его в род. компонент
        }
        this.shiftX = null;
        this.shiftY = null;
        this.oldShipDraggable = null;
        this.oldShipTemp = null;
    }

    changeMode = (event) =>{
        let mode = event.target.value;
        this.setState({mode});
        this.props.regenerateShips(mode);
    }

    moveStart = (event,ship) => {
        let shipNode = event.target;
        // если корабль уже был на игровом поле времненно удаляем его
        let index = this.getIndexOfShip(ship.num);
        let {draggable_list,temp_list} = this.state;
        if(index !== null){
            this.oldShipDraggable = draggable_list.splice(index,1);
            this.oldShipTemp = temp_list.splice(index,1);
        }
        // смещение курсора относительно передвигаемого кораблика
        // это чтобы за какую точку взяли кораблик, за ту и переносили без прыжков
        this.shiftX = event.clientX-shipNode.getBoundingClientRect().left;
        this.shiftY = event.clientY-shipNode.getBoundingClientRect().top;
        let current = {
            ...ship,
            x: event.pageX-this.shiftX,
            y: event.pageY-this.shiftY,
            color: colors.blue,
            dir: 'right',
        }
        this.setState({current,draggable_list,temp_list})
    }
    move = (event, ship) =>{
        let color = this.check(event,ship) ? colors.green : colors.red;
        let current = {
            ...ship,
            x: event.pageX-this.shiftX,
            y: event.pageY-this.shiftY,
            color,
        }
        this.setState({current})
    }
    moveEnd = (event,ship) =>{
        let color = this.check(event,ship) ? colors.green : colors.red;
        let current = {
            ...ship,
            x: event.pageX-this.shiftX,
            y: event.pageY-this.shiftY,
            color,
        }
        this.setState({current})
    }

    // поиск корабля по номеру, возвращает идекс корабля в массив this.tempShips
    getIndexOfShip = (num) =>{
        let index = null;
        this.state.draggable_list.some((ship,i) =>{
            if(ship.num = num) {
                index = i; return true;
            } else return false;
        })
        return index;
    }

    check = (event,ship) =>{
        let {current,draggable_list,temp_list} = this.state;
        // прячем переносимый корабль на мгновенье, чтоб увидить какой dom-элемент под ним
        let shipNode = event.target;
        shipNode.hidden = true;
        // определяем точные координаты 1 палуб корабля, чтоб узнать какая ячейка под ней
        // и можно ли туда поместить корабль
        let shipX = event.pageX-this.shiftX;
        let shipY = event.pageY-this.shiftY;
        let elemBelow = document.elementFromPoint(shipX, shipY);
        shipNode.hidden = false;
        if(!elemBelow || elemBelow.className != 'cell') {
            console.log('не на матрице или вышел за границы')
            return false;
        } else{
            //console.log('прошел проверку',elemBelow)
            let newShip = {
                ...ship,
                x: Number(elemBelow.getAttribute('data-x')),
                y: Number(elemBelow.getAttribute('data-y')),
            }
			if(newShip.x+newShip.size-1 > 9 || newShip.y+newShip.size-1 > 9) return false;
            else return !this.props.isOverlapShips(newShip,temp_list);
        }
    }


    render = () => {
        let scale = 30;
        let {mode, current,draggable_list} = this.state;
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
                    </div>
                    {mode == 'manually' ? (
                        <div className="right-part">
                            <p className="ship-hint">Перетащите корабли мышкой
                            в игровое поле.<br />Для поворота фигуры после перемещения
                            нажмите правую кнопку мыши.</p>
                            {/* массив исходных кораблей до перетаскивания */}
                            <div class="ships-psevdo-draggable">
                            {Scheme.map(ship =>
                                (ship.num == current.num || 0/* this.findShip(ship.num) */ ? (
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
                            {/* текущий перетаскиваемы элемент */}
                            <div class="ship-current">
                            {JSON.stringify(current) != "{}" ? (
                                <div
                                    className="ship-draggable"
                                    style={{width: scale * current.size, left: current.x, top: current.y, borderColor: current.color}}
                                    onMouseMove={e =>this.move(e,current)}
                                    onMouseUp={e =>this.moveEnd(e,ship)}
                                    onDragStart={_ => false}>
                                </div>): null
                            }
                            </div>
                            {/* массив уже перемещенных на игровое поле кораблей */}
                            <div class="ships-dragged">
                            {draggable_list.map(ship =>
                                <div
                                    num={ship.num}
                                    className="ship-draggable"
                                    style={{width: scale * ship.size, left: ship.x, top: ship.y}}
                                    onMouseDown={e =>this.moveStart(e,ship)}
                                    onDragStart={_ => false}>
                                </div>
                            )}
                            </div>
                        </div>) : null
                    }
                </div>
                {0 ?
                    (<button className="disable" onClick={null}>Далее</button>) :
                    (<button onClick={this.props.next}>Играть</button>)
                }
            </div>
        );
    }
}