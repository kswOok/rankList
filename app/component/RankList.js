/**
 * Created by kswook on 18/02/2017.
 */
import React from 'react';
import '../douguo.js';
import '../RankList.css';
import arrowRight from '../ic_arrow_right.png';
import userFirst from '../userFirst.png';
import userSecond from '../userSecond.png';
import userThird from '../userThird.png';

export default class RankList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            result: {
                "list": [],
                "menus": [],
                "menus_url": "",
                "users": [],
                "users_url": ""
            }
        }
    }

    componentWillMount() {
        window.DouguoJSBridge.jsApi.accessInterface
        ("http://api.douguo.net/ranking/recommend", {}, function (result) {
            this.setState({result: result.result})
        }.bind(this),function (error) {
            DouguoJSBridge.jsApi.toast(error.message);
        }.bind(this));
    }

    getRecipeList() {
        return (
            this.state.result.list.map((item, index) => <RecipeLargeItem key={index} data={item}/>)
        );
    }

    render() {
        if (this.state.result.list.length > 0) {
            return (
                <div className="rankList">
                    {this.getRecipeList()}
                    <MenuLargeItem menus={this.state.result.menus} loadMoreUrl={this.state.result.menus_url}/>
                    <UserLargeItem users={this.state.result.users} loadMoreUrl={this.state.result.users_url}/>
                </div>
            );
        } else {
            return (<div></div>);
        }

    }
}

class RecipeLargeItem extends React.Component {

    render() {
        return (
            <div>
                <RecipeImageLabel title={this.props.data.title} intro={this.props.data.intro}
                                  image={this.props.data.image} loadMoreUrl={this.props.data.more_url}/>
                <RecipeItemList recipes={this.props.data.recipes} loadMoreUrl={this.props.data.more_url}/>
                <div style={{height: "15px", backgroundColor: "#FAF9F7"}}></div>
            </div>
        );
    }
}

class RecipeImageLabel extends React.Component {
    loadMore() {
        window.open(this.props.loadMoreUrl);
    };

    render() {
        return (
            <div className="recipeItemLabel" style={{backgroundImage: "url(" + (this.props.image) + ")"}}
                 onClick={this.loadMore.bind(this)}>
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


    getRecipes() {
        if (this.props.recipes != null) {
            return (this.props.recipes).map(
                (item, index) => <RecipeItem key={index} data={item}/>)
        }
    }

    render() {
        return (
            <div className="recipeItemList">
                {this.getRecipes()}
                <div className="loadMore" onClick={this.loadMore.bind(this)}>查看<br/>更多</div>
                <div style={{width: ""}}></div>
            </div>
        );
    }
}

class RecipeItem extends React.Component {

    getRecipeInfo() {
        window.open(this.props.data.video_url);
    }

    render() {
        return (
            <div className="recipeItem" onClick={this.getRecipeInfo.bind(this)}>
                <img className="recipeImage" style={{backgroundImage: "url(" + (this.props.data.pic) + ")"}}/>
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

    getMenuInfo() {
        window.open("recipes://www.douguo.com/menu?id=" + this.props.menu.id);
    }

    render() {
        return (
            <div className="menuItem" onClick={this.getMenuInfo.bind(this)}
                 style={{backgroundImage: "url(" + (this.props.menu.b) + ")"}}>
                <div className="recipeCount">
                    <span style={{display: "block", fontSize: "6px", marginRight: "5px"}}>◆</span>
                    {this.props.menu.c}道菜谱
                    <span style={{display: "block", fontSize: "6px", marginLeft: "5px"}}>◆</span></div>
                <div className="name">{this.props.menu.t}</div>
                <div className="authorName">{this.props.menu.a.n}</div>
            </div>
        );
    }
}

class MenuLargeItem extends React.Component {

    getMenus() {
        if (this.props.menus != null) {
            return ( this.props.menus.map(
                (item, index) => <MenuItem menu={item} key={index}/>))
        }
    }

    loadMore() {
        window.open(this.props.loadMoreUrl);
    }

    render() {
        return (
            <div className="menuLargeItem">
                <div className="label" onClick={this.loadMore.bind(this)}>
                    <div className="title">精品菜单</div>
                    <div style={{WebkitBoxFlex: "1"}}></div>
                    <div className="more">查看更多</div>
                    <img className="iconArrowRight" src={arrowRight}/>
                </div>
                <div className="menuLists">
                    <div style={{width: "15px", backgroundColor: "white"}}></div>
                    {this.getMenus()}
                    <div style={{width: "5px", backgroundColor: "white"}}></div>
                </div>
                <div style={{height: "15px", backgroundColor: "#FAF9F7"}}></div>
            </div>
        );
    }
}

class UserLargeItem extends React.Component {
    loadMore() {
        window.open("recipes://www.douguo.com/web?url=" + this.props.loadMoreUrl);
    }

    getUsers() {
        return (
            <div className="userLists">
                <UserItem user={this.props.users[0]} border={userSecond} large={false}/>
                <div style={{width: "2px", backgroundColor: "#ffffff"}}></div>
                <UserItem user={this.props.users[1] } border={userFirst} large={true}/>
                <div style={{width: "2px", backgroundColor: "#ffffff"}}></div>
                <UserItem user={this.props.users[2]} border={userThird} large={false}/>
            </div>
        );
    }

    render() {
        return (
            <div>
                <div className="label" onClick={this.loadMore.bind(this)}>
                    <div className="title">本周积分榜</div>
                    <div className="titleMate">每周日11点公布</div>
                    <div style={{WebkitBoxFlex: "1"}}></div>
                    <div className="more">查看更多</div>
                    <img className="iconArrowRight" src={arrowRight}/>
                </div>
                {this.getUsers()}
            </div>
        );
    }
}

class UserItem extends React.Component {

    getUserInfo() {
        window.open("recipes://www.douguo.com/user?id=" + this.props.user.id);
    }

    render() {
        if (this.props.user == null) {
            return (<div></div>);
        } else {
            return (
                <div className="userItem" onClick={this.getUserInfo.bind(this)}>
                    <div className="userPhoto"
                         style={{
                             width: this.props.large ? "74px" : "66px",
                             height: this.props.large ? "83px" : "74px",
                             backgroundImage: `url(${this.props.border})` + "," + `url(${this.props.user.photo})`,
                             backgroundRepeat: "no-repeat,no-repeat",
                             backgroundPosition: "center ,-4px 4px",
                             backgroundSize: "cover,cover"
                         }}>
                    </div>
                    <div className="name">{this.props.user.name}</div>
                    <div className="score">{this.props.user.weekscore}</div>
                    <div className="scoreLabel">本周新增积分</div>
                    <div className="score">{this.props.user.totalscore}</div>
                    <div className="scoreLabel">总积分</div>
                    <div style={{height: "40px"}}></div>
                </div>
            );
        }

    }
}