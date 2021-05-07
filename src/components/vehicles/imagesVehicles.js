import React, { Component } from "react";



export default class ImagesVehicles extends Component{ 
    render(){
        const { className, img, id} = this.props;
        return (
            <div className={`${className}`} >
                <img id={id} src={img} />
                
            </div>
        );
    }
}