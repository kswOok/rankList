/**
 * Created by kswook on 18/02/2017.
 */
import React from 'react';
import '../RankList.css'
import arrowRight from '../ic_arrow_right.png';
import userFirst from '../userFirst.png';
import userSecond from '../userSecond.png';
import userThird from '../userThird.png';

export default class RankList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            testData: {
                "state": "success",
                "result": {
                    "list": [{
                        "title": "优秀新菜品",
                        "intro": "昨日发布的优秀菜单 每日8:00更新",
                        "image": "http://i2.douguo.net/upload/caiku/2/0/a/300_20a86e450767002fed606bf895eefb1a.jpg",
                        "loadMoreUrl": "http://www.baidu.com",
                        "recipes": [{
                            "author_id": "7195201",
                            "author_name": "宝宝辅食微课堂",
                            "author_pic": "http://tx2.douguo.net/upload/photo/4/c/f/70_u1692310349721143629.jpg",
                            "name": "卡通蒸蛋糕 宝宝辅食微课堂",
                            "pic": "http://cp1.douguo.net/upload/caiku/3/3/e/500x300_3310617907f32e11a7d24c4a403968ce.jpg",
                            "video_url": "recipes://www.douguo.com/details?id=1514034"
                        }, {
                            "author_id": "7195201",
                            "author_name": "宝宝辅食微课堂",
                            "author_pic": "http://tx2.douguo.net/upload/photo/4/c/f/70_u1692310349721143629.jpg",
                            "name": "卡通蒸蛋糕 宝宝辅食微课堂",
                            "pic": "http://cp1.douguo.net/upload/caiku/3/3/e/500x300_3310617907f32e11a7d24c4a403968ce.jpg",
                            "video_url": "recipes://www.douguo.com/details?id=1514034"
                        }, {
                            "author_id": "7195201",
                            "author_name": "宝宝辅食微课堂",
                            "author_pic": "http://tx2.douguo.net/upload/photo/4/c/f/70_u1692310349721143629.jpg",
                            "name": "卡通蒸蛋糕 宝宝辅食微课堂",
                            "pic": "http://cp1.douguo.net/upload/caiku/3/3/e/500x300_3310617907f32e11a7d24c4a403968ce.jpg",
                            "video_url": "recipes://www.douguo.com/details?id=1514034"
                        }, {
                            "author_id": "7195201",
                            "author_name": "宝宝辅食微课堂",
                            "author_pic": "http://tx2.douguo.net/upload/photo/4/c/f/70_u1692310349721143629.jpg",
                            "name": "卡通蒸蛋糕 宝宝辅食微课堂",
                            "pic": "http://cp1.douguo.net/upload/caiku/3/3/e/500x300_3310617907f32e11a7d24c4a403968ce.jpg",
                            "video_url": "recipes://www.douguo.com/details?id=1514034"
                        }, {
                            "author_id": "7195201",
                            "author_name": "宝宝辅食微课堂",
                            "author_pic": "http://tx2.douguo.net/upload/photo/4/c/f/70_u1692310349721143629.jpg",
                            "name": "卡通蒸蛋糕 宝宝辅食微课堂",
                            "pic": "http://cp1.douguo.net/upload/caiku/3/3/e/500x300_3310617907f32e11a7d24c4a403968ce.jpg",
                            "video_url": "recipes://www.douguo.com/details?id=1514034"
                        }]
                    }, {
                        "title": "优秀新菜品",
                        "intro": "昨日发布的优秀菜单 每日8:00更新",
                        "image": "http://i2.douguo.net/upload/caiku/2/0/a/300_20a86e450767002fed606bf895eefb1a.jpg",
                        "loadMoreUrl": "http://www.baidu.com",
                        "recipes": [{
                            "author_id": "7195201",
                            "author_name": "宝宝辅食微课堂",
                            "author_pic": "http://tx2.douguo.net/upload/photo/4/c/f/70_u1692310349721143629.jpg",
                            "name": "卡通蒸蛋糕 宝宝辅食微课堂",
                            "pic": "http://cp1.douguo.net/upload/caiku/3/3/e/500x300_3310617907f32e11a7d24c4a403968ce.jpg",
                            "video_url": "recipes://www.douguo.com/details?id=1514034"
                        }, {
                            "author_id": "7195201",
                            "author_name": "宝宝辅食微课堂",
                            "author_pic": "http://tx2.douguo.net/upload/photo/4/c/f/70_u1692310349721143629.jpg",
                            "name": "卡通蒸蛋糕 宝宝辅食微课堂",
                            "pic": "http://cp1.douguo.net/upload/caiku/3/3/e/500x300_3310617907f32e11a7d24c4a403968ce.jpg",
                            "video_url": "recipes://www.douguo.com/details?id=1514034"
                        }, {
                            "author_id": "7195201",
                            "author_name": "宝宝辅食微课堂",
                            "author_pic": "http://tx2.douguo.net/upload/photo/4/c/f/70_u1692310349721143629.jpg",
                            "name": "卡通蒸蛋糕 宝宝辅食微课堂",
                            "pic": "http://cp1.douguo.net/upload/caiku/3/3/e/500x300_3310617907f32e11a7d24c4a403968ce.jpg",
                            "video_url": "recipes://www.douguo.com/details?id=1514034"
                        }, {
                            "author_id": "7195201",
                            "author_name": "宝宝辅食微课堂",
                            "author_pic": "http://tx2.douguo.net/upload/photo/4/c/f/70_u1692310349721143629.jpg",
                            "name": "卡通蒸蛋糕 宝宝辅食微课堂",
                            "pic": "http://cp1.douguo.net/upload/caiku/3/3/e/500x300_3310617907f32e11a7d24c4a403968ce.jpg",
                            "video_url": "recipes://www.douguo.com/details?id=1514034"
                        }, {
                            "author_id": "7195201",
                            "author_name": "宝宝辅食微课堂",
                            "author_pic": "http://tx2.douguo.net/upload/photo/4/c/f/70_u1692310349721143629.jpg",
                            "name": "卡通蒸蛋糕 宝宝辅食微课堂",
                            "pic": "http://cp1.douguo.net/upload/caiku/3/3/e/500x300_3310617907f32e11a7d24c4a403968ce.jpg",
                            "video_url": "recipes://www.douguo.com/details?id=1514034"
                        }]
                    }, {
                        "title": "优秀新菜品",
                        "intro": "昨日发布的优秀菜单 每日8:00更新",
                        "image": "http://i2.douguo.net/upload/caiku/2/0/a/300_20a86e450767002fed606bf895eefb1a.jpg",
                        "loadMoreUrl": "http://www.baidu.com",
                        "recipes": [{
                            "author_id": "7195201",
                            "author_name": "宝宝辅食微课堂",
                            "author_pic": "http://tx2.douguo.net/upload/photo/4/c/f/70_u1692310349721143629.jpg",
                            "name": "卡通蒸蛋糕 宝宝辅食微课堂",
                            "pic": "http://cp1.douguo.net/upload/caiku/3/3/e/500x300_3310617907f32e11a7d24c4a403968ce.jpg",
                            "video_url": "recipes://www.douguo.com/details?id=1514034"
                        }, {
                            "author_id": "7195201",
                            "author_name": "宝宝辅食微课堂",
                            "author_pic": "http://tx2.douguo.net/upload/photo/4/c/f/70_u1692310349721143629.jpg",
                            "name": "卡通蒸蛋糕 宝宝辅食微课堂",
                            "pic": "http://cp1.douguo.net/upload/caiku/3/3/e/500x300_3310617907f32e11a7d24c4a403968ce.jpg",
                            "video_url": "recipes://www.douguo.com/details?id=1514034"
                        }, {
                            "author_id": "7195201",
                            "author_name": "宝宝辅食微课堂",
                            "author_pic": "http://tx2.douguo.net/upload/photo/4/c/f/70_u1692310349721143629.jpg",
                            "name": "卡通蒸蛋糕 宝宝辅食微课堂",
                            "pic": "http://cp1.douguo.net/upload/caiku/3/3/e/500x300_3310617907f32e11a7d24c4a403968ce.jpg",
                            "video_url": "recipes://www.douguo.com/details?id=1514034"
                        }, {
                            "author_id": "7195201",
                            "author_name": "宝宝辅食微课堂",
                            "author_pic": "http://tx2.douguo.net/upload/photo/4/c/f/70_u1692310349721143629.jpg",
                            "name": "卡通蒸蛋糕 宝宝辅食微课堂",
                            "pic": "http://cp1.douguo.net/upload/caiku/3/3/e/500x300_3310617907f32e11a7d24c4a403968ce.jpg",
                            "video_url": "recipes://www.douguo.com/details?id=1514034"
                        }, {
                            "author_id": "7195201",
                            "author_name": "宝宝辅食微课堂",
                            "author_pic": "http://tx2.douguo.net/upload/photo/4/c/f/70_u1692310349721143629.jpg",
                            "name": "卡通蒸蛋糕 宝宝辅食微课堂",
                            "pic": "http://cp1.douguo.net/upload/caiku/3/3/e/500x300_3310617907f32e11a7d24c4a403968ce.jpg",
                            "video_url": "recipes://www.douguo.com/details?id=1514034"
                        }]
                    }],
                    "menus": [{
                        "c": 100,
                        "b": "http://i2.douguo.net/upload/caiku/2/0/a/300_20a86e450767002fed606bf895eefb1a.jpg",
                        "t": "菜单标题",
                        "a": {
                            "n": "菜单作者"
                        }
                    }, {
                        "c": 100,
                        "b": "http://i2.douguo.net/upload/caiku/2/0/a/300_20a86e450767002fed606bf895eefb1a.jpg",
                        "t": "菜单标题",
                        "a": {
                            "n": "菜单作者"
                        }
                    }, {
                        "c": 100,
                        "b": "http://i2.douguo.net/upload/caiku/2/0/a/300_20a86e450767002fed606bf895eefb1a.jpg",
                        "t": "菜单标题",
                        "a": {
                            "n": "菜单作者"
                        }
                    }, {
                        "c": 100,
                        "b": "http://i2.douguo.net/upload/caiku/2/0/a/300_20a86e450767002fed606bf895eefb1a.jpg",
                        "t": "菜单标题",
                        "a": {
                            "n": "菜单作者"
                        }
                    }, {
                        "c": 100,
                        "b": "http://i2.douguo.net/upload/caiku/2/0/a/300_20a86e450767002fed606bf895eefb1a.jpg",
                        "t": "菜单标题",
                        "a": {
                            "n": "菜单作者"
                        }
                    }, {
                        "c": 100,
                        "b": "http://i2.douguo.net/upload/caiku/2/0/a/300_20a86e450767002fed606bf895eefb1a.jpg",
                        "t": "菜单标题",
                        "a": {
                            "n": "菜单作者"
                        }
                    },],
                    "users": [
                        {
                            "nick": "康寿伟",
                            "ws": "120",
                            "cs": "240",
                            "user_id": "123456",
                            "user_photo": "http://tx2.douguo.net/upload/photo/4/c/f/70_u1692310349721143629.jpg",
                        }, {
                            "nick": "康寿伟",
                            "ws": "1207777",
                            "cs": "2407777",
                            "user_id": "123456",
                            "user_photo": "http://tx2.douguo.net/upload/photo/4/c/f/70_u1692310349721143629.jpg",
                        }, {
                            "nick": "康寿伟",
                            "ws": "120",
                            "cs": "240",
                            "user_id": "123456",
                            "user_photo": "http://tx2.douguo.net/upload/photo/4/c/f/70_u1692310349721143629.jpg",
                        }]
                }
            }
        }
    }

    render() {
        return (
            <div className="rankList">
                {
                    this.state.testData.result.list.map((item, index) => <RecipeLargeItem key={index} data={item}/>)
                }
                <MenuLargeItem menus={this.state.testData.result.menus}/>
                <UserLargeItem users={this.state.testData.result.users}/>
            </div>
        );
    }
}

class RecipeLargeItem extends React.Component {

    render() {
        return (
            <div>
                <RecipeImageLabel title={this.props.data.title} intro={this.props.data.intro}/>
                <RecipeItemList recipes={this.props.data.recipes} loadMoreUrl={this.props.data.loadMoreUrl}/>
                <div style={{height: "15px", backgroundColor: "#FAF9F7"}}></div>
            </div>
        );
    }
}

class RecipeImageLabel extends React.Component {

    render() {
        return (
            <div className="recipeItemLabel">
                <div className="recipeItemContent">
                    <span className="title">{this.props.title}</span>
                    <span className="intro">{this.props.intro}</span>
                </div>
            </div>
        );
    }
}

class RecipeItemList extends React.Component {

    loadMore() {
        window.open(this.props.loadMoreUrl);
    };

    render() {
        return (
            <div className="recipeItemList">
                {
                    (this.props.recipes).map(
                        (item, index) => <RecipeItem key={index} data={item}/>
                    )
                }
                <div className="loadMore" onClick={this.loadMore.bind(this)}>查看<br/>更多</div>
                <div style={{width: ""}}></div>
            </div>
        );
    }
}

class RecipeItem extends React.Component {

    render() {
        return (
            <div className="recipeItem">
                <img className="recipeImage" src={this.props.data.pic}/>
                <span className="recipeTitle">{this.props.data.name}</span>
                <div className="recipeAuthor">
                    <img className="authorPhoto" src={this.props.data.author_pic}/>
                    <div className="authorName">{this.props.data.author_name}</div>
                </div>
            </div>
        );
    }
}

class MenuItem extends React.Component {
    render() {
        return (
            <div className="menuItem" style={{backgroundImage: "url(" + (this.props.menu.b) + ")"}}>
                <div className="recipeCount">◆ {this.props.menu.c} 道菜谱 ◆</div>
                <div className="name">{this.props.menu.t}</div>
                <div className="authorName">{this.props.menu.a.n}</div>
            </div>
        );
    }
}

class MenuLargeItem extends React.Component {
    render() {
        return (
            <div className="menuLargeItem">
                <div className="label">
                    <div className="title">精品菜单</div>
                    <div style={{WebkitBoxFlex: "1"}}></div>
                    <div className="more">查看更多</div>
                    <img className="iconArrowRight" src={arrowRight}/>
                </div>
                <div className="menuLists">
                    <div style={{width: "15px", backgroundColor: "white"}}></div>
                    {
                        this.props.menus.map(
                            (item, index) => <MenuItem menu={item} key={index}/>)
                    }
                    <div style={{width: "5px", backgroundColor: "white"}}></div>
                </div>
                <div style={{height: "15px", backgroundColor: "#FAF9F7"}}></div>
            </div>
        );
    }
}

class UserLargeItem extends React.Component {

    render() {
        return (
            <div>
                <div className="label">
                    <div className="title">本周积分榜</div>
                    <div className="titleMate">每周日11点公布</div>
                    <div style={{WebkitBoxFlex: "1"}}></div>
                    <div className="more">查看更多</div>
                    <img className="iconArrowRight" src={arrowRight}/>
                </div>
                <div className="userLists">
                    <UserItem user={this.props.users[0]} border={userSecond} large={false}/>
                    <div style={{width: "2px", backgroundColor: "#ffffff"}}></div>
                    <UserItem user={this.props.users[1] } border={userFirst} large={true}/>
                    <div style={{width: "2px", backgroundColor: "#ffffff"}}></div>
                    <UserItem user={this.props.users[2]} border={userThird} large={false}/>
                </div>
            </div>
        );
    }
}

class UserItem extends React.Component {

    render() {
        return (
            <div className="userItem">
                <div className="userPhoto"
                     style={{
                         width: this.props.large ? "74px" : "66px",
                         height: this.props.large ? "83px" : "74px",
                         backgroundImage: `url(${this.props.border})` + "," + `url(${this.props.user.user_photo})`,
                         backgroundRepeat: "no-repeat,no-repeat",
                         backgroundPosition: "center ,-4px 4px",
                         backgroundSize: "cover,cover"
                     }}>
                </div>
                <div className="name">{this.props.user.nick}</div>
                <div className="score">{this.props.user.ws}</div>
                <div className="scoreLabel">本周新增积分</div>
                <div className="score">{this.props.user.cs}</div>
                <div className="scoreLabel">总积分</div>
                <div style={{height: "40px"}}></div>
            </div>
        );
    }
}