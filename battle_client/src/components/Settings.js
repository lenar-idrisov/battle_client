import React from 'react';

import Welcome from './Welcome'
import SetMode from './SetMode'
import SetAvatar from './SetAvatar'
import SetShip from './SetShip'
import SetFriend from './SetFriend'

export default class Settings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 0, // текущее модальное окно
            page_count: 4, // кол-во модальных окон всего
        }
    }

    next = () => {
        let {active,page_count} = this.state;
        active++;
        this.setState({active})
        if(active > page_count) this.props.initGame();
    }

    render = () => {
        let { active } = this.state;
        return (
            <div className="settings" >
                {active == 0 ? (
                    <Welcome
                        next={this.next}
                        {...this.props} />) : null}
                {active == 1 ? (
                    <SetMode
                        next={this.next}
                        setName={this.props.setName} />) : null}
                {active == 2 ? (
                    <SetAvatar
                        next={this.next}
                        setAvatar={this.props.setAvatar} />) : null}
                {active == 3 ? (
                    <SetShip
                        next={this.next}
                        {...this.props} />) : null}
                {active == 4 ? (
                    <SetFriend
                        next={this.next}
                        {...this.props} />) : null}
            </div>
        );
    }
}