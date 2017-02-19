/**
 * Created by kswook on 18/02/2017.
 */
import React from 'react';
import '../RankList.css'

export default class RankList extends React.Component {
    render() {
        var testData = {
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
                        "userName": "moominbabymoominbabymoominbabymoominbaby"
                    }, {
                        "title": "牛肉饭",
                        "image": "http://i2.douguo.net/upload/caiku/2/0/a/300_20a86e450767002fed606bf895eefb1a.jpg",
                        "userPhoto": "http://tx2.douguo.net/upload/photo/6/2/0/70_u70667821931004215053.jpg",
                        "userName": "moominbabymoominbabymoominbabymoominbaby"
                    }, {
                        "title": "牛肉饭",
                        "image": "http://i2.douguo.net/upload/caiku/2/0/a/300_20a86e450767002fed606bf895eefb1a.jpg",
                        "userPhoto": "http://tx2.douguo.net/upload/photo/6/2/0/70_u70667821931004215053.jpg",
                        "userName": "moominbabymoominbabymoominbabymoominbaby"
                    }, {
                        "title": "牛肉饭",
                        "image": "http://i2.douguo.net/upload/caiku/2/0/a/300_20a86e450767002fed606bf895eefb1a.jpg",
                        "userPhoto": "http://tx2.douguo.net/upload/photo/6/2/0/70_u70667821931004215053.jpg",
                        "userName": "moominbabymoominbabymoominbabymoominbaby"
                    }, {
                        "title": "牛肉饭",
                        "image": "http://i2.douguo.net/upload/caiku/2/0/a/300_20a86e450767002fed606bf895eefb1a.jpg",
                        "userPhoto": "http://tx2.douguo.net/upload/photo/6/2/0/70_u70667821931004215053.jpg",
                        "userName": "moominbabymoominbabymoominbabymoominbaby"
                    }]
                }, {
                    "title": "优秀新菜品",
                    "intro": "昨日发布的优秀菜单 每日8:00更新",
                    "image": "http://i2.douguo.net/upload/caiku/2/0/a/300_20a86e450767002fed606bf895eefb1a.jpg",
                    "recipes": [{
                        "title": "牛肉饭",
                        "image": "http://i2.douguo.net/upload/caiku/2/0/a/300_20a86e450767002fed606bf895eefb1a.jpg",
                        "userPhoto": "http://tx2.douguo.net/upload/photo/6/2/0/70_u70667821931004215053.jpg",
                        "userName": "moominbabymoominbabymoominbabymoominbaby"
                    }, {
                        "title": "牛肉饭",
                        "image": "http://i2.douguo.net/upload/caiku/2/0/a/300_20a86e450767002fed606bf895eefb1a.jpg",
                        "userPhoto": "http://tx2.douguo.net/upload/photo/6/2/0/70_u70667821931004215053.jpg",
                        "userName": "moominbabymoominbabymoominbabymoominbaby"
                    }, {
                        "title": "牛肉饭",
                        "image": "http://i2.douguo.net/upload/caiku/2/0/a/300_20a86e450767002fed606bf895eefb1a.jpg",
                        "userPhoto": "http://tx2.douguo.net/upload/photo/6/2/0/70_u70667821931004215053.jpg",
                        "userName": "moominbabymoominbabymoominbabymoominbaby"
                    }, {
                        "title": "牛肉饭",
                        "image": "http://i2.douguo.net/upload/caiku/2/0/a/300_20a86e450767002fed606bf895eefb1a.jpg",
                        "userPhoto": "http://tx2.douguo.net/upload/photo/6/2/0/70_u70667821931004215053.jpg",
                        "userName": "moominbabymoominbabymoominbabymoominbaby"
                    }, {
                        "title": "牛肉饭",
                        "image": "http://i2.douguo.net/upload/caiku/2/0/a/300_20a86e450767002fed606bf895eefb1a.jpg",
                        "userPhoto": "http://tx2.douguo.net/upload/photo/6/2/0/70_u70667821931004215053.jpg",
                        "userName": "moominbabymoominbabymoominbabymoominbaby"
                    }]
                }, {
                    "title": "优秀新菜品",
                    "intro": "昨日发布的优秀菜单 每日8:00更新",
                    "image": "http://i2.douguo.net/upload/caiku/2/0/a/300_20a86e450767002fed606bf895eefb1a.jpg",
                    "recipes": [{
                        "title": "牛肉饭",
                        "image": "http://i2.douguo.net/upload/caiku/2/0/a/300_20a86e450767002fed606bf895eefb1a.jpg",
                        "userPhoto": "http://tx2.douguo.net/upload/photo/6/2/0/70_u70667821931004215053.jpg",
                        "userName": "moominbabymoominbabymoominbabymoominbaby"
                    }, {
                        "title": "牛肉饭",
                        "image": "http://i2.douguo.net/upload/caiku/2/0/a/300_20a86e450767002fed606bf895eefb1a.jpg",
                        "userPhoto": "http://tx2.douguo.net/upload/photo/6/2/0/70_u70667821931004215053.jpg",
                        "userName": "moominbabymoominbabymoominbabymoominbaby"
                    }, {
                        "title": "牛肉饭",
                        "image": "http://i2.douguo.net/upload/caiku/2/0/a/300_20a86e450767002fed606bf895eefb1a.jpg",
                        "userPhoto": "http://tx2.douguo.net/upload/photo/6/2/0/70_u70667821931004215053.jpg",
                        "userName": "moominbabymoominbabymoominbabymoominbaby"
                    }, {
                        "title": "牛肉饭",
                        "image": "http://i2.douguo.net/upload/caiku/2/0/a/300_20a86e450767002fed606bf895eefb1a.jpg",
                        "userPhoto": "http://tx2.douguo.net/upload/photo/6/2/0/70_u70667821931004215053.jpg",
                        "userName": "moominbabymoominbabymoominbabymoominbaby"
                    }, {
                        "title": "牛肉饭",
                        "image": "http://i2.douguo.net/upload/caiku/2/0/a/300_20a86e450767002fed606bf895eefb1a.jpg",
                        "userPhoto": "http://tx2.douguo.net/upload/photo/6/2/0/70_u70667821931004215053.jpg",
                        "userName": "moominbabymoominbabymoominbabymoominbaby"
                    }]
                }]
            }
        };
        return (
            <div className="rankList">
                {
                    testData.result.list.map((item, index) => <RecipeLargeItem key={index} data={item}/>)
                }
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
            </div>);

    }
}

class RecipeImageLabel extends React.Component {
    constructor(props) {
        super(props)
    }

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
    constructor(props) {
        super(props)
    }

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

    constructor(props) {
        super(props)
    }

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
