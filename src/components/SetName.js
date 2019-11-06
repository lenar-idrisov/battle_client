import React from 'react';

export default function Matrix(props) {

    return (
        <div className="set-names">
            <h1>Морской бой</h1>
            <div className="set-names-body">
                <div className="input-container">
                    <label>ВВедите свое имя</label>
                    <input type="text"
                        player="human"
                        onChange={props.setName} />
                </div>
                <div className="input-container">
                    <label>ВВедите имя противника</label>
                    <input type="text"
                        player="computer"
                        onChange={props.setName} />
                </div>
            </div>
            <button onClick={props.next}>Далее</button>
        </div>)
}