/**
 * Created by lizhengwei on 2016/8/11.
 */
import React from 'react';
require('./css/search_all.css');
var SearchAllComponent=React.createClass({
    search:function(a){
        if(a.price) {
            window.location.href = "list.html?price=" + a.price + '&country=' + a.country;
        }else{
            window.location.href = "list.html?parent_id=" + a.parentId + '&country=' + a.country;
        }
    },
    render:function(){
        return (
            <div className={this.props.slideIn?"search_wrap slideIn":"search_wrap"} onClick={this.props.handleSearch}>
                <div className="screen_box">
                    <div className="screen_title">
                    {
                        this.props.data.map((v,i) => {
                            return <span key={i}  className={v.isSelect?'blue':''} onClick={this.props.handleSearch}>{v.name}</span>
                        })
                    }
                    </div>
                    <div className="screen_category">
                    {
                        this.props.data.map(v => {
                        return(
                            v.opts.map((v2,i2) => {
                               return (
                                   <ul key={i2} className={v2.isShow?'show':''}>
                                        {
                                            v2.options.map((v3,i3) => {
                                             return   <li key={i3} onClick={this.search.bind(this,v3)}>{v3.tag}</li>
                                            })
                                        }
                                   </ul>
                                )
                            })
                        )
                        })
                    }
                    </div>
                </div>
            </div>
        );
    }
});
export default SearchAllComponent;