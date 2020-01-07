import React from 'react';
import Matrix from './Matrix';

export default class Settings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_page: true,
            second_page: false,
        }
    }

    next = () => {
        this.props.init_game();
    }
    /* next = () => {
        if(this.state.first_page) this.setState({first_page: false,second_page: true})
        else {
            this.setState({first_page: false, second_page: false})
            this.props.init_game();
        }
    } */
    render = () => {
        return (
            <div className="settings" >
                {this.state.first_page ? (
                    <div className="set-names">
                        <h1>Морской бой</h1>
                        <div className="container">
                            <div className="input-container">
                                <label>ВВедите свое имя</label>
                                <input type="text"
                                       name="human"
                                       onChange={this.props.set_names} />
                            </div>
                            <div className="input-container">
                                <label>ВВедите имя противника</label>
                                <input type="text"
                                       name="computer"
                                       onChange={this.props.set_names} />
                            </div>
                        </div>
                        <button className="button" onClick={this.next}>Играть</button>
                    </div>) : null}

                {this.state.second_page ? (
                    <div className="set-ships">
                        <h1>Расстановка кораблей</h1>
                        <div className="container">
                            <div className="input-container">
                                <label htmlFor="radio1">расставить случайно</label>
                                <input type="radio"
                                       id="radio1"
                                       name="radio"
                                       checked={true}
                                       onChange={this.props.generate_ships} />
                            </div>
                            <div className="input-container">
                                <label htmlFor="radio2">расставить самому</label>
                                <input type="radio"
                                       id="radio2"
                                       name="radio"
                                       onChange={this.props.generate_ships}/>
                            </div>
                        </div>
                        <Matrix ships={this.props.ships} />
                        <button className="button" onClick={this.next}>Играть</button>
                    </div>) : null}
            </div>
        );
    }
}