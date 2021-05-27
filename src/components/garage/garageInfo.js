import React, { Component } from "react";

import imageGarage from '../../../static/images/garage/garageBackground.jpg';

class GarageInfo extends Component{
    
    render(){
        const { className, name, description, contact } = this.props;
        return (
            <div className={className}>
    
                <div className={`${className}__content`} style={{backgroundImage: `url(${imageGarage})`}}>
                    <div className={`${className}__content__name`}>
                        {name}
                    </div>
                    <div className={`${className}__content__description`}>
                        {description}
                    </div>
                    <div className={`${className}__content__contact`}>
                        Contact: {contact}
                    </div>
                </div>
            </div>
        );
    }
}
  export default GarageInfo;