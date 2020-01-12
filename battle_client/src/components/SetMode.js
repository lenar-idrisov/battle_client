import React from 'react';

export default class Settings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: 'online', // режимы игры: онлайн в сети|оффлайн с компом
            name: '', // для онлайн-режима нужно ввести имя, чтобы в сети узнали
            name_correct: false,
        }
    }

    changeMode = (event) =>{
        let mode = event.target.value;
        this.setState({mode})
        this.props.setMode(mode);
    }

    render = ()=>{
        let {mode, name_correct} = this.state;

        return (
            <div className="set-names">
                <h1>Морской бой</h1>
                <div className="body">
                    <div className="mode-container">
                        <label htmlFor="one">играть с компьютером</label>
                        <input type="radio"
                            id="one"
                            value="offline"
                            checked={mode == 'offline'}
                            onChange={this.changeMode} />
                    </div>
                    <div className="mode-container">
                        <label htmlFor="two">играть с напарником в сети</label>
                        <input type="radio"
                            id="two"
                            value="online"
                            checked={mode == 'online'}
                            onChange={this.changeMode} />
                    </div>
                   {mode == 'online' ?
                        <div class="name-container">
                            <input type="text"
                                player="human"
                                placeholder="ВВедите свое имя"
                                onChange={this.props.setName} />
                            {!name_correct ?
                                <span class="error">это имя уже используется</span> : null}
                        </div> : null}
                </div>
                <button onClick={this.props.next}>Сохранить</button>
            </div>)
    }
}