/**
 * Created by kswook on 2/26/17.
 */
import React from 'react';
import '../UserList.css';
import '../douguo.js';


export default class UserList extends React.Component {

    getScoreRule() {
        window.open("http://m.douguo.com/creditshop/creditrule")
    }

    constructor(props) {
        super(props)
    }

    componentWillMount() {

    }

    componentWillUnmount() {

    }

    getUserList() {

    }


    render() {
        return (
            <div className="userList">
                <div className="scoreLabel" onClick={this.getScoreRule.bind(this)}>
                    <div className="more">如何获取积分？</div>
                    <div style={{WebkitBoxFlex: "1"}}></div>
                    <img className="iconArrowRight" src={arrowRight}/>
                </div>
            </div>
        );
    }

}

class UserItem extends React.Component {


    render() {
        return (
            <div className="userListItem">
                <div> {this.props.index}</div>
                <img className="userPhoto" src={this.props.user.photo}/>
                <div className="nickContainer">
                    <div className="userName">{this.props.user.name}</div>
                    <div >
                        总积分<span className="totalScore">{this.props.user.totalscore}</span>
                    </div>
                </div>
                <div style={{WebkitBoxFlex: "1"}}></div>
                <div className="weekScore">{this.props.user.weekscore}</div>
            </div>);
    }

}