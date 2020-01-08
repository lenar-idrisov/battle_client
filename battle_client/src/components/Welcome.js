import React from 'react';


export default function Welcome(props) {
    return (
        <div className="welcome">
            <h1>Приглашение на игру</h1>
            <div className="body">
                <label>Игрок <b>Зайцев</b> приглашает вас на игру</label>
                <div className="buttons">
                    <button class="button-yes" onClick={props.next}>Принять</button>
                    <button class="button-no" onClick={props.next}>Отклонить</button>
                </div>
            </div>
        </div>
    )
}