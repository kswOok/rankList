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
            users: [
                {
                    "id": "1021706",
                    "name": "笨丫",
                    "photo": "http://img0.imgtn.bdimg.com/it/u=2348860203,3204722635&fm=11&gp=0.jpg",
                    "weekscore": "25533",
                    "totalscore": "59768"
                },
                {
                    "id": "1251017",
                    "name": "岑",
                    "photo": "http://img0.imgtn.bdimg.com/it/u=2348860203,3204722635&fm=11&gp=0.jpg",
                    "weekscore": "13406",
                    "totalscore": "38048"
                },
                {
                    "id": "1163474",
                    "name": "奋青老朱",
                    "photo": "http://img0.imgtn.bdimg.com/it/u=2348860203,3204722635&fm=11&gp=0.jpg",
                    "weekscore": "10960",
                    "totalscore": "22217"
                },
                {
                    "id": "1252906",
                    "name": "馋嘴乐",
                    "photo": "http://img0.imgtn.bdimg.com/it/u=2348860203,3204722635&fm=11&gp=0.jpg",
                    "weekscore": "10295",
                    "totalscore": "182307"
                },
                {
                    "id": "1009254",
                    "name": "雅雅楊小廚",
                    "photo": "http://img0.imgtn.bdimg.com/it/u=2348860203,3204722635&fm=11&gp=0.jpg",
                    "weekscore": "9487",
                    "totalscore": "26608"
                },
                {
                    "id": "1012721",
                    "name": "单纯的吸引1985",
                    "photo": "http://img0.imgtn.bdimg.com/it/u=2348860203,3204722635&fm=11&gp=0.jpg",
                    "weekscore": "6932",
                    "totalscore": "6932"
                },
                {
                    "id": "1351614",
                    "name": "放纵的哭丶是我仅有的资本",
                    "photo": "http://img0.imgtn.bdimg.com/it/u=2348860203,3204722635&fm=11&gp=0.jpg",
                    "weekscore": "4518",
                    "totalscore": "5196"
                },
                {
                    "id": "1163284",
                    "name": "蘋果果",
                    "photo": "http://img0.imgtn.bdimg.com/it/u=2348860203,3204722635&fm=11&gp=0.jpg",
                    "weekscore": "3933",
                    "totalscore": "3945"
                },
                {
                    "id": "1398168",
                    "name": "小雨",
                    "photo": "http://img0.imgtn.bdimg.com/it/u=2348860203,3204722635&fm=11&gp=0.jpg",
                    "weekscore": "3350",
                    "totalscore": "4106"
                },
                {
                    "id": "1008703",
                    "name": "水妖精☆小肆",
                    "photo": "http://img0.imgtn.bdimg.com/it/u=2348860203,3204722635&fm=11&gp=0.jpg",
                    "weekscore": "2819",
                    "totalscore": "3201"
                },
                {
                    "id": "1344374",
                    "name": "sooney",
                    "photo": "http://img0.imgtn.bdimg.com/it/u=2348860203,3204722635&fm=11&gp=0.jpg",
                    "weekscore": "2258",
                    "totalscore": "2273"
                },
                {
                    "id": "1000067",
                    "name": "点点1984",
                    "photo": "http://img0.imgtn.bdimg.com/it/u=2348860203,3204722635&fm=11&gp=0.jpg",
                    "weekscore": "2252",
                    "totalscore": "2394"
                },
                {
                    "id": "1356782",
                    "name": "妖精Joanna",
                    "photo": "http://img0.imgtn.bdimg.com/it/u=2348860203,3204722635&fm=11&gp=0.jpg",
                    "weekscore": "2117",
                    "totalscore": "2117"
                },
                {
                    "id": "1356946",
                    "name": "李紫琼",
                    "photo": "http://img.qa.douguo.com/upload/photo/4/b/7/70_u37606347011224.jpg",
                    "weekscore": "2030",
                    "totalscore": "3326"
                },
                {
                    "id": "1199856",
                    "name": "吃货在人间",
                    "photo": "http://img.qa.douguo.com/upload/photo/0/f/6/70_u3611396185644309031245.jpg",
                    "weekscore": "1965",
                    "totalscore": "15321"
                },
                {
                    "id": "1361170",
                    "name": "微笑的樱桃",
                    "photo": "http://img.qa.douguo.com/upload/photo/0/2/9/70_u37781043210138.jpg",
                    "weekscore": "1936",
                    "totalscore": "2048"
                },
                {
                    "id": "1344614",
                    "name": "百分百的love",
                    "photo": "http://img.qa.douguo.com/upload/photo/f/e/4/70_u3722675279274709301317.jpg",
                    "weekscore": "1770",
                    "totalscore": "3650"
                },
                {
                    "id": "1344616",
                    "name": "想做个美食品鉴家",
                    "photo": "http://img.qa.douguo.com/upload/photo/f/b/b/70_u3722680893595309291856.jpg",
                    "weekscore": "1556",
                    "totalscore": "3156"
                },
                {
                    "id": "1333866",
                    "name": "拉面丸子酱",
                    "photo": "http://img.qa.douguo.com/upload/photo/6/b/1/70_u37143457145414.jpeg",
                    "weekscore": "1446",
                    "totalscore": "1540"
                },
                {
                    "id": "1123636",
                    "name": "朱瑛倫",
                    "photo": "http://img.qa.douguo.com/upload/photo/5/5/4/70_u35655855041605.jpg",
                    "weekscore": "1337",
                    "totalscore": "14612"
                }
            ]
        }
    }

    componentWillMount() {
        window.DouguoJSBridge.jsApi.accessInterface
        ("http://api.qa.douguo.net/ranking/user", {}, function (result) {
            this.setState({users: result.result.users})
        }.bind(this));
    }

    componentWillUnmount() {

    }

    getUserList() {
        if (this.state.users == null) {
            return (
                <div></div>
            );
        }
        return (
            this.state.users.map((item, index) => <UserItem key={index} user={item} index={index}/>)
        );
    }

    render() {
        return (
            <div className="userList">
                <div className="scoreLabel" onClick={this.getScoreRule.bind(this)}>
                    <div style={{width: "15px"}}></div>
                    <img className="iconHow" style={{height: "20px", width: "20px"}} src={iconHow}/>
                    <div className="more" style={{marginLeft: "7px"}}>如何获取积分？</div>
                    <div style={{WebkitBoxFlex: "1"}}></div>
                </div>
                {this.getUserList()}
            </div>
        );
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
            </div>);
    }

}