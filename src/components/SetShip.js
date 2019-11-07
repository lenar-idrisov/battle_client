import React from 'react';
import Matrix from './Matrix';
import Scheme from './Scheme';

export default class Settings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: 'manually', // режим расстановки кораблей (случайно/вручную)
            num: null, // уникальный номер перемещаемого корабля
            size: null, // кол-во палуб
            x: 0, // свойство left текущего передвигаемого корабля
            y: 0, // свойство top текущего передвигаемого корабля
            color: '', // класс, определяющий цвет границ текущего передвигаемого элемента
        }
        this.current = {}
        this.tempShips = [];
    }

    changeMode = (event) =>{
        let mode = event.target.value;
        this.setState({mode});
        this.props.regenerateShips(mode);
    }

    moveStart = (event) => {
        // получаем dom корабля и родителя
        // если вдруг корабль придется вернуть на старое место
        let shipNode = event.target;
        let parentNode = shipNode.closest;
        let modalNode = document.querySelector('.modal-setting');
        let num = Number(shipNode.getAttribute('num'));
        let size = Number(shipNode.getAttribute('size'));
        // смещение курсора относительно передвигаемого кораблика
        // это чтобы за какую точку взяли кораблик, за ту и переносили без прыжков
        this.shiftX = event.clientX-shipNode.getBoundingClientRect().left;
        this.shiftY = event.clientY-shipNode.getBoundingClientRect().top;
        this.current = {
            parentNode,
        }
        modalNode.append(shipNode);
        this.setState({num,size})
        this.moveXY(event.pageX,event.pageY);
        document.addEventListener('mousemove', this.move);
}
    moveXY = (pageX,pageY) =>{
        let x = pageX-this.shiftX;
        let y = pageY-this.shiftY;
        this.setState({x,y});
    }
    move = (event) =>{
        this.moveXY(event.pageX,event.pageY);
    }
    moveEnd = (event) =>{
        document.removeEventListener('mousemove', this.move);
    }

    check = (event) =>{
        let {num,size} = this.state;
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
            //console.log('не на матрице или вышел за границы')
            return false;
        } else{
            //console.log('прошел проверку',elemBelow);
            let index = this.searchShip(num);
            let oldShip;
            if(index != 1000) oldShip = this.tempShips.splice(index,1);
            let newShip = {
                num,
                size,
                dir: 'right',
                x: elemBelow.getAttribute('data-x'),
                y: elemBelow.getAttribute('data-y'),
            }
            let result = this.props.isOverlapShips(newShip,this.tempShips)
            this.tempShips.push(oldShip);
            this.current = {
                ...this.current,
                newShip,
                index
            }
            if(result) return false;
            else return true;
        }
    }

    // поиск корабля по номеру, возвращает идекс корабля в массив this.tempShips
    searchShip = (num) =>{
        let index = 1000;
        this.tempShips.some((ship,i) =>{
            if(ship.num = num) {
                index = i; return true;
            } else return false;
        })
        return index;
    }

    render = () => {
        let scale = 30;
        let {mode,x,y,color} = this.state;
        let {currentNum} = this.current;
        console.log(currentNum,x,y)
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
                            <div className="ship-container">
                            {Scheme.map(ship =>
                                <div className="ship-backface" style={{width: scale*ship.size, height:scale}}>
                                    {currentNum == ship.num ? (
                                        <div
                                            num={ship.num}
                                            size={ship.size}
                                            className="ship-draggable"
                                            style={{ width:scale*ship.size, left:x, top:y}}
                                            onMouseDown={this.moveStart}
                                            onMouseUp={this.moveEnd}
                                            onDragStart={_ =>false}>
                                        </div>) : (
                                        <div
                                            num={ship.num}
                                            size={ship.size}
                                            className="ship-draggable"
                                            style={{ width:scale*ship.size}}
                                            onMouseDown={this.moveStart}
                                            onMouseUp={this.moveEnd}
                                            onDragStart={_ =>false}>
                                        </div>)
                                    }
                                </div>
                            )}
                            </div>
                        </div>) : null
                    }
                    {/* далее этот div вставляется в div.matrix компонента matrix,
                    чтобы корабли позиционировались относительно него */}
                    <div className="draggables">
                        {this.tempShips.map(ship =>
                                currentNum == ship.num ? (
                                <div
                                    num={ship.num}
                                    size={ship.size}
                                    className="ship-draggable"
                                    style={{ width: scale * ship.size, left: x, top: y }}
                                    onMouseDown={this.moveStart}
                                    onMouseUp={this.moveEnd}
                                    onDragStart={_ => false}>
                                </div>) : (
                                <div
                                    num={ship.num}
                                    size={ship.size}
                                    className="ship-draggable"
                                    style={{ width: scale * ship.size }}
                                    onMouseDown={this.moveStart}
                                    onMouseUp={this.moveEnd}
                                    onDragStart={_ => false}>
                                </div>)
                        )}
                        </div>
                </div>
                {0 ?
                    (<button className="disable" onClick={null}>Далее</button>):
                    (<button onClick={this.props.next}>Играть</button>)
                }
            </div>
        );
    }
}