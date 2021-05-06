import React, { Component } from "react";



export default class ImagesVehicles extends Component{ 
    render(){
        const { className, img, id} = this.props;
        return (
            <div className={`${className}__images`} >
                <img id={id} src={img} />
                
            </div>
        );
    }
}