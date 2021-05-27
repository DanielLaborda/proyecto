import React, { Component } from "react";



export default class RacingCategories extends Component{ 
    render(){
        const { onClick, className, image, name, _id} = this.props;
        return (
            <a className={`${className}`}  onClick={onClick} >
                <div id={`categoryImage${_id}`}  className={`${className}__image`}>
                    <img src={require('../../../static/images/img_racing_categories/'+ image)} />
                </div>
                <div id={`categoryName${_id}`} className={`${className}__name`}>
                    {name}
                </div>
            </a>
        );
    }
}