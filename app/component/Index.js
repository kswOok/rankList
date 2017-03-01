/**
 * Created by kswook on 01/03/2017.
 */
import React from 'react';

export default class Index extends React.Component {

    getRankList() {
        window.open("recipes://www.douguo.com/web?url=http://192.168.2.227/rankList.html");
    }

    getUserList() {
        window.open("recipes://www.douguo.com/web?url=http://192.168.2.227/userList.html");
    }

    render() {
        return (
            <div>
                <div style={{height: "100px", width: "100%", backgroundColor: "black", color: "white"}}
                     onClick={this.getRankList.bind(this)}>
                    进入排行榜页面
                </div>
                <div style={{height: "20px", width: "100%", backgroundColor: "white"}}>
                    你好
                </div>
                <div style={{height: "100px", width: "100%", backgroundColor: "black", color: "white"}}
                     onClick={this.getUserList.bind(this)}>
                    进入用户排行列表页面
                </div>
            </div>
        );
    }
}