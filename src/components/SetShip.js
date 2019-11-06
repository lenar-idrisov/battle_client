import React from 'react';
import Matrix from './Matrix';
import Scheme from './Scheme';

export default class Settings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: 'manually', // режим расстановки кораблей (случайно/вручную)
            current_x: 0, // свойство left текущего переносимого корабля
            current_y: 0, // свойство left текущего переносимого корабля
        }
        this.current_num = null; // номер текущего переносимого корабля
        this.current_size = null; // кол-во палуб текущего переносимого корабля
    }

    changeMode = (event) =>{
        let mode = event.target.value;
        this.setState({mode});
        this.props.regenerateShips(mode);
    }
    moveStart = (event) => {
        console.log('event.which',event.which)
        this.current_num = Number(event.target.getAttribute('num'));
        this.current_size = Number(event.target.getAttribute('size'));
        let parentNode = document.querySelector('.modal-setting');
        let shipNode = event.target;
        // смещение курсора относительно переносимого кораблика
        // это чтобы за какую точку взяли кораблик, за ту и переносили без прыжков
        this.shiftX = event.clientX-shipNode.getBoundingClientRect().left;
        this.shiftY = event.clientY-shipNode.getBoundingClientRect().top;
        // сохраняем начальные координаты, чтобы если что корабль вернуть на место
        this.startX = event.pageX-this.shiftX;
        this.startY = event.pageX-this.shiftY;
        parentNode.append(shipNode);
        this.moveXY(this.startX,this.startY);

        document.addEventListener('mousemove', this.move);
}
    moveXY = (current_x,current_y) =>{
        this.setState({current_x,current_y});
    }
    move = (event) =>{
        this.moveXY(event.pageX,event.pageY);
        // прячем переносимый корабль на мгновенье, чтоб увидить какой dom-элемент под ним
        let shipX = event.clientX-this.shiftX;
        let shipY = event.clientY-this.shiftY;
        let shipNode = event.target;
        shipNode.hidden = true;
        let elemBelow = document.elementFromPoint(shipX, shipY);
        shipNode.hidden = false;
        if(!elemBelow || elemBelow.className != 'cell') {
            console.log('не на матрице или вышел за границы')
            return;
        }
        console.log('прошел проверку',elemBelow);
        let newShip = {
            num: this.current_num,
            size: this.current_size,
            dir: 'right',
            x: elemBelow.getAttribute('data-x'),
            y: elemBelow.getAttribute('data-y'),
        }
        let result = this.props.isOverlapShips(newShip,this.props.ships)
         console.log(result)
        //
    }
    moveEnd = (event) =>{
        document.removeEventListener('mousemove', this.move);
        //
    }

    render = () => {
        let ships = this.props.ships;
        let scale = 30;
        let {mode,current_x,current_y} = this.state;
        let current_num = this.current_num;
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
                                    {current_num == ship.num ? (
                                        <div
                                            num={ship.num}
                                            size={ship.size}
                                            className="ship-draggable draggable-red"
                                            style={{ width:scale*ship.size, top:current_y, left:current_x}}
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
                </div>
                {ships.length != 10 ?
                    (<button className="disable" onClick={null}>Далее</button>):
                    (<button onClick={this.props.next}>Играть</button>)
                }
            </div>
        );
    }
}