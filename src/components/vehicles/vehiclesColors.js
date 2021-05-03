import React, { Component } from "react";



export default class VehiclesColors extends Component{ 
    
    render(){
        const { className, color, name, price} = this.props;
        return (
            <div className={`${className}__card`} >
                <div className={`${className}__card__color`}>
                    {color}
                </div>
                <div className={`${className}__card__name`}>
                    {name}
                </div>
                <div className={`${className}__card__price`}>
                    {price}
                </div>
                
            </div>
        );
    }
}