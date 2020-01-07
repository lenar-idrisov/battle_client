import React from 'react';

export default class Settings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: 'friend',  // режим игры: с компом/ в сети с напарником
            name: '',
            name_correct: false,
        }
    }

    changeMode = (event) =>{
        let mode = event.target.value;
        this.setState({mode})
    }

    render = ()=>{
        let {mode,name,name_correct} = this.state;

        return (
            <div className="set-names">
                <h1>Морской бой</h1>
                <div className="body">
                    <div className="mode-container">
                        <label htmlFor="one">играть с компьютером</label>
                        <input type="radio"
                            id="one"
                            value="computer"
                            checked={mode == 'computer'}
                            onChange={this.changeMode} />
                    </div>
                    <div className="mode-container">
                        <label htmlFor="two">играть с напарником в сети</label>
                        <input type="radio"
                            id="two"
                            value="friend"
                            checked={mode == 'friend'}
                            onChange={this.changeMode} />
                    </div>
                   {mode == 'friend' ?
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