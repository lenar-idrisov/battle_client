import React from 'react';

import Avatar1 from '../img/avatar1.png';
import Avatar2 from '../img/avatar2.png';
import Avatar3 from '../img/avatar3.png';
import Avatar4 from '../img/avatar4.png';
import Avatar5 from '../img/avatar5.png';
import Avatar6 from '../img/avatar6.png';
import Avatar7 from '../img/avatar7.png';
import Avatar8 from '../img/avatar8.png';

export default class Settings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected_human: 4, // номер выбранной аватарки для человека
            selected_computer: 4, // номер выбранной аватарки для компьютера
        }
        this.img_human = [Avatar1, Avatar2, Avatar3, Avatar4];
        this.img_computer = [Avatar5, Avatar6, Avatar7, Avatar8];
    }

    set = (event) =>{
        let selected = Number(event.target.getAttribute('num'));
        let player = event.target.getAttribute('player');
        let img = event.target.src;
        if(player == 'human'){
            this.setState({selected_human:selected});
            this.props.setAvatar(img, player);
        } else{
            this.setState({selected_computer:selected});
            this.props.setAvatar(img, player);
        }
    }


    render = () => {
        let {selected_human, selected_computer } = this.state;
        return (
            <div className="set-avatar">
                <h1>Морской бой</h1>
                <div className="set-avatar-body">
                    <div className="my-avatar">
                        <label>Выберите аватарку для себя</label>
                        <div className="avatar-container">
                        {this.img_human.map((img, i) =>
                            <img
                                src={img}
                                num={i + 1}
                                player="human"
                                className={selected_human == i + 1 ? "avatar-selected" : ''}
                                onClick={this.set}
                            />
                        )}
                        </div>
                    </div>
                    <div className="enemy-avatar">
                        <label>Выберите аватарку для напарника</label>
                        <div className="avatar-container">
                        {this.img_computer.map((img, i) =>
                            <img
                                src={img}
                                num={i + 1}
                                player="computer"
                                className={selected_computer == i + 1 ? "avatar-selected" : ''}
                                onClick={this.set}
                            />
                        )}
                        </div>
                    </div>
                </div>
                <button onClick={this.props.next}>Далее</button>
            </div>)
    }
}