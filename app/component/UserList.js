/**
 * Created by kswook on 2/26/17.
 */
import React from 'react';
import '../UserList.css';
import '../douguo.js';
import iconHow from '../how.png';
import firstIcon from '../firstIcon.png';
import secondIcon from '../secondIcon.png';
import thirdIcon from '../thirdIcon.png';


export default class UserList extends React.Component {

    getScoreRule() {
        window.open("http://m.douguo.com/creditshop/creditrule")
    }

    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }

    componentWillMount() {
        window.DouguoJSBridge.jsApi.accessInterface
        ("http://api.douguo.net/ranking/user", {}, function (result) {
            this.setState({users: result.result.users})
        }.bind(this),function (error) {
            DouguoJSBridge.jsApi.toast(error.message);
        }.bind(this));
    }

    getUserList() {
        return (
            this.state.users.map((item, index) => <UserItem key={index} user={item} index={index}/>)
        );
    }

    render() {
        if (this.state.users.length > 0) {
            return (
                <div className="userList">
                    <div className="scoreLabel" onClick={this.getScoreRule.bind(this)}>
                        <div style={{width: "15px"}}></div>
                        <img className="iconHow" style={{height: "20px", width: "20px"}} src={iconHow}/>
                        <div className="more" style={{marginLeft: "7px"}}>如何获取积分？</div>
                        <div style={{WebkitBoxFlex: "1"}}></div>
                    </div>
                    <div style={{height: "1px", width: "100%", backgroundColor: "#E5E3DF"}}></div>
                    {this.getUserList()}
                </div>
            );
        } else {
            return (<div></div>);
        }
    }

}

class UserItem extends React.Component {
    getRankNumber() {
        var iconRank;
        switch (this.props.index) {
            case 0:
                iconRank = firstIcon;
                break;
            case 1:
                iconRank = secondIcon;
                break;
            case 2:
                iconRank = thirdIcon;
                break;
        }
        if (this.props.index > 2) {
            return (
                <div className="indexUser">
                    {this.props.index + 1}
                </div>
            );
        } else {
            return (
                <div className="indexUser"
                     style={{
                         backgroundImage: iconRank != null ? `url(${iconRank})` : null,
                         backgroundSize: "23px 17px",
                         backgroundPosition: "center",
                         backgroundRepeat: "no-repeat",
                         height: "40px"
                     }}></div>
            );
        }
    }

    getUserPhoto() {
        var borderColor = "";
        switch (this.props.index) {
            case 0:
                borderColor = "#ffcc00";
                break;
            case 1:
                borderColor = "#e5e5e5";
                break;
            case 2:
                borderColor = "#efc393";
                break;
        }
        if (this.props.index > 2) {
            return (
                <img className="userPhoto" src={this.props.user.photo}/>
            );
        } else {
            return (
                <img className="userPhoto" style={{
                    border: `2px solid ${borderColor}`
                }} src={this.props.user.photo}/>
            );
        }
    }

    getUserInfo() {
        window.open("recipes://www.douguo.com/user?id=" + this.props.user.id);
    }

    render() {
        return (
            <div>
                <div className="userListItem" onClick={this.getUserInfo.bind(this)}>
                    {this.getRankNumber()}
                    {this.getUserPhoto()}
                    <div className="nickContainer">
                        <div className="userName">{this.props.user.name}</div>
                        <div style={{fontSize: "12px", color: "#999999"}}>
                            总积分 <span className="totalScore">{this.props.user.totalscore}</span>
                        </div>
                    </div>
                    <div style={{WebkitBoxFlex: "1"}}></div>
                    <div className="weekScore">{this.props.user.weekscore}</div>
                    <div style={{width: "15px"}}></div>
                </div>
                <div style={{height: "1px", width: "100%", backgroundColor: "#E5E3DF"}}></div>
            </div>);
    }

}