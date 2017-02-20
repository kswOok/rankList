/**
 * Created by kswook on 18/02/2017.
 */
import React from 'react';
import '../RankList.css'
import arrowRight from '../ic_arrow_right.png';

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
                        "recipes": [{
                            "title": "牛肉饭",
                            "image": "http://i2.douguo.net/upload/caiku/2/0/a/300_20a86e450767002fed606bf895eefb1a.jpg",
                            "userPhoto": "http://tx2.douguo.net/upload/photo/6/2/0/70_u70667821931004215053.jpg",
                            "userName": "康爸爸"
                        }, {
                            "title": "牛肉饭",
                            "image": "http://i2.douguo.net/upload/caiku/2/0/a/300_20a86e450767002fed606bf895eefb1a.jpg",
                            "userPhoto": "http://tx2.douguo.net/upload/photo/6/2/0/70_u70667821931004215053.jpg",
                            "userName": "康爸爸"
                        }, {
                            "title": "牛肉饭",
                            "image": "http://i2.douguo.net/upload/caiku/2/0/a/300_20a86e450767002fed606bf895eefb1a.jpg",
                            "userPhoto": "http://tx2.douguo.net/upload/photo/6/2/0/70_u70667821931004215053.jpg",
                            "userName": "康爸爸"
                        }, {
                            "title": "牛肉饭",
                            "image": "http://i2.douguo.net/upload/caiku/2/0/a/300_20a86e450767002fed606bf895eefb1a.jpg",
                            "userPhoto": "http://tx2.douguo.net/upload/photo/6/2/0/70_u70667821931004215053.jpg",
                            "userName": "康爸爸"
                        }, {
                            "title": "牛肉饭",
                            "image": "http://i2.douguo.net/upload/caiku/2/0/a/300_20a86e450767002fed606bf895eefb1a.jpg",
                            "userPhoto": "http://tx2.douguo.net/upload/photo/6/2/0/70_u70667821931004215053.jpg",
                            "userName": "康爸爸"
                        }]
                    }, {
                        "title": "优秀新菜品",
                        "intro": "昨日发布的优秀菜单 每日8:00更新",
                        "image": "http://i2.douguo.net/upload/caiku/2/0/a/300_20a86e450767002fed606bf895eefb1a.jpg",
                        "recipes": [{
                            "title": "牛肉饭",
                            "image": "http://i2.douguo.net/upload/caiku/2/0/a/300_20a86e450767002fed606bf895eefb1a.jpg",
                            "userPhoto": "http://tx2.douguo.net/upload/photo/6/2/0/70_u70667821931004215053.jpg",
                            "userName": "康爸爸"
                        }, {
                            "title": "牛肉饭",
                            "image": "http://i2.douguo.net/upload/caiku/2/0/a/300_20a86e450767002fed606bf895eefb1a.jpg",
                            "userPhoto": "http://tx2.douguo.net/upload/photo/6/2/0/70_u70667821931004215053.jpg",
                            "userName": "康爸爸"
                        }, {
                            "title": "牛肉饭",
                            "image": "http://i2.douguo.net/upload/caiku/2/0/a/300_20a86e450767002fed606bf895eefb1a.jpg",
                            "userPhoto": "http://tx2.douguo.net/upload/photo/6/2/0/70_u70667821931004215053.jpg",
                            "userName": "康爸爸"
                        }, {
                            "title": "牛肉饭",
                            "image": "http://i2.douguo.net/upload/caiku/2/0/a/300_20a86e450767002fed606bf895eefb1a.jpg",
                            "userPhoto": "http://tx2.douguo.net/upload/photo/6/2/0/70_u70667821931004215053.jpg",
                            "userName": "康爸爸"
                        }, {
                            "title": "牛肉饭",
                            "image": "http://i2.douguo.net/upload/caiku/2/0/a/300_20a86e450767002fed606bf895eefb1a.jpg",
                            "userPhoto": "http://tx2.douguo.net/upload/photo/6/2/0/70_u70667821931004215053.jpg",
                            "userName": "康爸爸"
                        }]
                    }, {
                        "title": "优秀新菜品",
                        "intro": "昨日发布的优秀菜单 每日8:00更新",
                        "image": "http://i2.douguo.net/upload/caiku/2/0/a/300_20a86e450767002fed606bf895eefb1a.jpg",
                        "recipes": [{
                            "title": "牛肉饭",
                            "image": "http://i2.douguo.net/upload/caiku/2/0/a/300_20a86e450767002fed606bf895eefb1a.jpg",
                            "userPhoto": "http://tx2.douguo.net/upload/photo/6/2/0/70_u70667821931004215053.jpg",
                            "userName": "康爸爸"
                        }, {
                            "title": "牛肉饭",
                            "image": "http://i2.douguo.net/upload/caiku/2/0/a/300_20a86e450767002fed606bf895eefb1a.jpg",
                            "userPhoto": "http://tx2.douguo.net/upload/photo/6/2/0/70_u70667821931004215053.jpg",
                            "userName": "康爸爸"
                        }, {
                            "title": "牛肉饭",
                            "image": "http://i2.douguo.net/upload/caiku/2/0/a/300_20a86e450767002fed606bf895eefb1a.jpg",
                            "userPhoto": "http://tx2.douguo.net/upload/photo/6/2/0/70_u70667821931004215053.jpg",
                            "userName": "康爸爸"
                        }, {
                            "title": "牛肉饭",
                            "image": "http://i2.douguo.net/upload/caiku/2/0/a/300_20a86e450767002fed606bf895eefb1a.jpg",
                            "userPhoto": "http://tx2.douguo.net/upload/photo/6/2/0/70_u70667821931004215053.jpg",
                            "userName": "康爸爸"
                        }, {
                            "title": "牛肉饭",
                            "image": "http://i2.douguo.net/upload/caiku/2/0/a/300_20a86e450767002fed606bf895eefb1a.jpg",
                            "userPhoto": "http://tx2.douguo.net/upload/photo/6/2/0/70_u70667821931004215053.jpg",
                            "userName": "康爸爸"
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
                    },]
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
            </div>
        );
    }
}

class RecipeLargeItem extends React.Component {

    render() {
        return (
            <div>
                <RecipeImageLabel title={this.props.data.title} intro={this.props.data.intro}/>
                <RecipeItemList recipes={this.props.data.recipes}/>
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
            </div>);
    }
}

class RecipeItemList extends React.Component {

    render() {
        return (
            <div className="recipeItemList">
                {
                    (this.props.recipes).map(
                        (item, index) => <RecipeItem key={index} data={item}/>
                    )
                }
            </div>);
    }
}

class RecipeItem extends React.Component {

    render() {
        return (
            <div className="recipeItem">
                <img className="recipeImage" src={this.props.data.image}/>
                <span className="recipeTitle">{this.props.data.title}</span>
                <div className="recipeAuthor">
                    <img className="authorPhoto" src={this.props.data.userPhoto}/>
                    <div className="authorName">{this.props.data.userName}</div>
                </div>
            </div>);
    }
}

class MenuItem extends React.Component {
    render() {
        return (
            <div className="menuItem" style={{backgroundImage: "url("+(this.props.menu.b)+")"}}>
                <div className="recipeCount">◆ {this.props.menu.c} 道菜谱 ◆</div>
                <div className="name">{this.props.menu.t}</div>
                <div className="authorName">{this.props.menu.a.n}</div>
            </div>);
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
                    {
                        this.props.menus.map(
                            (item, index) => <MenuItem menu={item} key={index}/>)
                    }
                </div>
            </div>);
    }
}