import React, { Component } from "react";

export default class ConfigurationColors extends Component{ 
    
    render(){
        const { className, color, name, price} = this.props;
        return (
            <div className={`${className}`} >
                <div className={`${className}__color`} style={{background:`#${color}`}}>
                    
                </div>
                <div className={`${className}__name`}>
                    {name}
                </div>
                <div className={`${className}__price`}>
                    ${price}
                </div>
                
            </div>
        );
    }
}