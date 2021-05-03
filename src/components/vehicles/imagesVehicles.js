import React, { Component } from "react";



export default class ImagesVehicles extends Component{ 
    
    render(){
        const { className, image} = this.props;
        return (
            <div className={`${className}__images`} >
                <img src={image} />
            </div>
        );
    }
}