/**
 * Created by lizhengwei on 2016/8/10.
 */
"use strict";
import React from 'react';
import ReactDOM from 'react-dom';
import CategoryItemsComponent from './category/category.js';
import MenuItemsComponent from './category/menu.js';
import SearchAllComponent from './search/search_all.js';

class AppComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
                categorys:[{
                    name:'旧车置换',
                    iconUrl:'./images/oldCar_replace.png',
                    jumpUrl:'saleOldCar.html',
                    base64Url:''
                },{
                    name:'邀约顾问',
                    iconUrl:'./images/agent.png',
                    jumpUrl:'carAppDownload.html',
                    base64Url:''
                },{
                    name:'国产&合资',
                    iconUrl:'./images/inner.png',
                    jumpUrl:'',
                    base64Url:''
                },{
                    name:'进口汽车',
                    iconUrl:'./images/import.png',
                    jumpUrl:'',
                    base64Url:''
                }],
                searchMethod:'国产&合资',
                isShowSearch:false,
                menus:[{
                    category:'国产&合资',
                    isShow:true,
                    subMenus:[{
                        name:'中华',
                        parentId:9,
                        country:8
                    },{
                        name:'上海大众',
                        parentId:229,
                        country:8
                    },{
                        name:'一汽大众',
                        parentId:236,
                        country:8
                    },{
                        name:'北京现代',
                        parentId:243,
                        country:8
                    },{
                        name:'长安福特',
                        parentId:247,
                        country:8
                    },{
                        name:'东风日产',
                        parentId:251,
                        country:8
                    },{
                        name:'一汽奥迪',
                        parentId:255,
                        country:8
                    },{
                        name:'全部',
                        parentId:0,
                        country:0
                    }]
                },{
                    category:'进口汽车',
                    isShow:false,
                    subMenus:[{
                        name:'宝马',
                        parentId:132,
                        country:8
                    },{
                        name:'奔驰',
                        parentId:133,
                        country:8
                    },{
                        name:'路虎',
                        parentId:134,
                        country:8
                    },{
                        name:'保时捷',
                        parentId:135,
                        country:8
                    },{
                        name:'70-90万',
                        price:'70_90',
                        country:130
                    },{
                        name:'90-100万',
                        price:'90_100',
                        country:130
                    },{
                        name:'100万以上',
                        price:'100_0',
                        country:130
                    },{
                        name:'全部',
                        parentId:0,
                        country:0
                    }]
                }],
                select:[{
                    name:'按价格',
                    isSelect:true,
                    opts:[{
                        isShow:true,method:'国产&合资',options:[{
                            tag:'7万以下',
                            country:8,
                            price:'0_7'
                        },{
                            tag:'7-10万',
                            country:8,
                            price:'7_10'
                        },{
                            tag:'10-15万',
                            country:8,
                            price:'10_15'
                        },{
                            tag:'15-20万',
                            country:8,
                            price:'15_20'
                        },{
                            tag:'20万以上',
                            country:8,
                            price:'20_0'
                        }]
                    },{
                        isShow:false,method:'进口汽车', options:[{
                            tag:'50万以下',
                            country:130,
                            price:'0_50'
                        },{
                            tag:'50-70万',
                            country:130,
                            price:'50_70'
                        },{
                            tag:'70-90万',
                            country:130,
                            price:'70_90'
                        },{
                            tag:'90-100万',
                            country:130,
                            price:'90_100'
                        },{
                            tag:'100万以上',
                            country:130,
                            price:'100_0'
                        }]
                    }]
                },{
                    name:'按品牌',
                    isSelect:false,
                    opts:[{
                        isShow:false,
                        method:'国产&合资',
                        options:[{
                            tag:'中华',
                            country:8,
                            parentId:9
                        },{
                            tag:'华颂',
                            country:8,
                            parentId:13
                        },{
                            tag:'金杯',
                            country:8,
                            parentId:14
                        },{
                            tag:'上海大众',
                            country:8,
                            parentId:229
                        },{
                            tag:'一汽大众',
                            country:8,
                            parentId:236
                        }]
                    },{
                        isShow:false,
                        method:'进口汽车',
                        options:[{
                            tag:'奥迪',
                            country:130,
                            parentId:131
                        },{
                            tag:'宝马',
                            country:130,
                            parentId:132
                        },{
                            tag:'奔驰',
                            country:130,
                            parentId:133
                        },{
                            tag:'路虎',
                            country:130,
                            parentId:134
                        },{
                            tag:'保时捷',
                            country:130,
                            parentId:135
                        }]
                    }]
                }]
        };
    }
    componentDidMount(){
        //console.log(this.state);
    }
    handleCategory(a){
        if(a.jumpUrl){
            window.location.href= a.jumpUrl;
        }else{
            this.state.searchMethod= a.name;
            this.state.menus.forEach(v => {
                v.isShow=(v.category== a.name)?true:false;
            });
            this.state.select.forEach(v => {
                 v.opts.forEach(v2 =>{
                     v2.isShow=(v.isSelect&&v2.method==this.state.searchMethod)?true:false;
                 })
            })
        }
        this.setState({menus:this.state.menus,searchMethod:this.state.searchMethod,select:this.state.select});
    }
    handleMenu(){
       this.state.isShowSearch=!this.state.isShowSearch;
        this.setState({isShowSearch:this.state.isShowSearch});
    }
    handleSearch(e){
        if(e.target.className.indexOf('search_wrap')!=-1){
            this.state.isShowSearch=!this.state.isShowSearch;
            this.setState({isShowSearch:this.state.isShowSearch});
            return;
        }
        if(e.target.tagName.toLowerCase()=='span') {
            let name = e.target.innerHTML;
            this.state.select.forEach(v => {
                v.isSelect = (v.name == name) ? true : false;
                v.opts.forEach(v2 => {
                    v2.isShow = (v2.method == this.state.searchMethod && v.name == name) ? true : false;
                });
            });
            this.setState({select: this.state.select});
            return;
        }
    }
    render(){
        return (
            <section className="stage" ref="stage">
                <section className="categorys">
                     <CategoryItemsComponent handleCategory={this.handleCategory.bind(this)}  data={this.state.categorys}   />
                </section>
                <section className="menus">
                        <MenuItemsComponent handleMenu={this.handleMenu.bind(this)}  data={this.state.menus}  />
                </section>
                <section className="search_floor">
                        <SearchAllComponent handleSearch={this.handleSearch.bind(this)} data={this.state.select} slideIn={this.state.isShowSearch}  ref="searchCondition" />
                </section>
            </section>
        );
    }
}
export default AppComponent;