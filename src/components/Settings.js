import React from 'react';

import SetName from './SetName'
import SetShip from './SetShip'
import SetAvatar from './SetAvatar'

export default class Settings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 3, // текущее модальное окно
            page_count: 3, // кол-во модальных окон всего
        }
    }

    componentDidMount(){
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
                {active == 1 ? (
                    <SetName
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
            </div>
        );
    }
}