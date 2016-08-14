/**
 * Created by lizhengwei on 2016/8/11.
 */
import React from 'react';
require('./css/menu.css');
class MenuItemsComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={};
    }
    handle(a){
        if(a.name=='全部') {
            this.props.handleMenu();
        }else{
            if(a.parentId) {
                window.location.href = 'list.html?parent_id='+ a.parentId+'&country='+ a.country;
            }else{
                window.location.href = 'list.html?price='+ a.price+'&country='+ a.country;
            }
        }
    }
    render(){
        return (
            <div className="menus">
            {
                this.props.data.map((v,i) => {
                    return (
                       <div key={i} className={v.isShow?"price_brand show":"price_brand"}>
                        {
                            v.subMenus.map((v2,i2)=>{
                                return(
                                    <div key={i2} className="item" onClick={this.handle.bind(this,v2)}>{v2.name}</div>
                                )
                            })
                        }
                        </div>
                    )
            })
            }
            </div>
        );
    }
}
export default MenuItemsComponent;