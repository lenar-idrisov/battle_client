import React from 'react';

const message = {
    welcome: 'Пригласить напарника',
    connect: 'Соединяемся с напарником',
    wait: 'Напарник расставляет корабли',
    reject: 'Напарник отклонил приглашение',
}

export default class Settings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
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


    render = () => {
        let scale = 30;
        let {mode, current, dragged_list} = this.state;

        return (
            <div className="set-friend">
                <h1>Выбор напарника</h1>
                <div className="body">
                    <div className="left-part">
                        <div className="input-container">
                            <input type="radio"
                                id="r1"
                                value="random"
                                checked={mode=='random'}
                                onChange={this.changeMode} />
                            <label htmlFor="r1">афанасии00000000000000000</label>
                        </div>
                        <div className="input-container">
                            <input type="radio"
                                id="r2"
                                value="manually"
                                checked={mode=='manually'}
                                onChange={this.changeMode} />
                            <label htmlFor="r2">зая</label>
                        </div>
                        <div className="input-container">
                            <input type="radio"
                                id="r3"
                                value="manually"
                                checked={mode=='п'}
                                onChange={this.changeMode} />
                            <label htmlFor="r3">Ленар Идрисов</label>
                        </div>
                    </div>
                    <div className="right-part">
                        <p className="hint">
                            Чтобы знакомый напарник стал доступен, он должен:<br />
                            1) зайти на сайт, выбрав режим "играть с напарником в сети"<br />
                            2) ввести свое имя<br />
                            3) сохранить настройки.<br />
                        </p>
                        <p className="hint">Также вы можете отправить напарнику ссылку для
                            быстрого доступа: https://lenar-reactjs.000webhostapp.com/id100233.</p>
                    </div>
                </div>
                {1 ?
                    (<button onClick={this.playStart}>Играть</button>):
                    (<button className="disable" onClick={null}>Играть</button>)
                }
            </div>
        );
    }
}