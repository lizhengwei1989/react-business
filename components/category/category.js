/**
 * Created by lizhengwei on 2016/8/10.
 */
import React from 'react';
require('./css/category.css');
class CategoryItemsComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={};
    }
    render(){
        return (
            <div>
            {
                this.props.data.map((v,i) => {
                    v.base64Url=require(v.iconUrl);
                    return(
                        <div className="item" key={i} onClick={this.props.handleCategory.bind(null,v)}>
                            <span style={{backgroundImage:'url('+ v.base64Url+')'}}>
                                {v.name}
                            </span>
                        </div>
                    )
                })
            }
            </div>
        );
    }
}
export default CategoryItemsComponent;