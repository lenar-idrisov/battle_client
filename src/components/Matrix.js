import React from 'react';
import Cross from '../img/cross.png';
// символы на оси х и у
const xSymbols = ['А','Б','В','Г','Д','Е','Ж','З','И','К'];
const ySymbols = [1,2,3,4,5,6,7,8,9,10];

// координаты символов на оси х и у
const xCoordinates = Array.from({length:10}, (el,i) =>({x: -1, y: i}));
const yCoordinates = Array.from({length:10}, (el,i) =>({x: i, y: -1}));

// достка с клетками 10*10
let matrix = [];
for (let i=0;i<10;i++){
    for(let j=0;j<10;j++){
        matrix.push({x: i, y: j});
    }

}
export default function Matrix(props) {
    // размер 1 клетки
    let scale = 30;
    // личные корабли
    let ships = props.ships.map((ship, i) =>{
        let left = ship.x*scale;
        let top =  ship.y*scale;
        let height = ship.dir == 'down' ? scale*ship.size : scale;
        let width = ship.dir == 'right' ? scale*ship.size : scale;
        return (
            <div className="ship" style={{left,top,height,width}}></div>
        )
    })
    let wonded_ships = [];
    props.player.wonded_ships.forEach((e, i) => {
        wonded_ships.push(...e.ship_part)
    })
    let killed_ships = [];
    props.player.killed_ships.forEach((e, i) => {
        killed_ships.push(...e)
    })
    let last_point = props.player.last_point;
    return (
        <div className="matrix">
            <div className="axisX">
                {xCoordinates.map((cell, i) =>
                    <div className="cellX" style={{ left: cell.x*scale, top: cell.y * scale }}>{xSymbols[i]}</div>
                )}
            </div>
            <div className="axisY">
                {yCoordinates.map((cell, i) =>
                    <div className="cellY" style={{ left: cell.x*scale, top: cell.y * scale }}>{ySymbols[i]}</div>
                )}
            </div>
            <div className="grid">
                {matrix.map((cell, i) =>
                    <div className="cell"
                        style={{ left: cell.x * scale, top: cell.y * scale }}
                        data-x={cell.x}
                        data-y={cell.y}
                        onClick={props.click_handler}>
                    </div>
                )}
            </div>
            <div className="ship-container">
                {ships.map((ship, i) => ship)}
            </div>

            <div className="help">
                {props.player.help_points.map((cell, i) =>
                    <div className="help_point point" style={{ left: cell.x * scale, top: cell.y * scale }}>
                    </div>
                )}
            </div>
            <div className="fail">
                {props.player.fail_points.map((cell, i) =>
                    <div className="fail_point point" style={{ left: cell.x * scale, top: cell.y * scale }}>
                        <div className="fail_icon"></div>
                    </div>
                )}
            </div>
            <div className="wonded">
                {wonded_ships.map((cell, i) =>
                    <div className="wonded_point point" style={{ left: cell.x * scale, top: cell.y * scale }}>
                        <img src={Cross} alt="" className="wonded_icon" />
                    </div>
                )}
            </div>
            <div className="killed">
                {killed_ships.map((cell, i) =>
                    <div className="killed_point point" style={{ left: cell.x * scale, top: cell.y * scale }}>
                        <img src={Cross} alt="" className="killed_icon"/>
                    </div>
                )}
            </div>
            <div className="last">
                {JSON.stringify(last_point) != "{}" ?
                    (<div className="last_point point" style={{ left: last_point.x * scale, top: last_point.y * scale }}>
                    </div>) : null}
            </div>
        </div>
    );
}