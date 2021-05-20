import React, { Component } from "react";

class GarageInfo extends Component{
    
    render(){
        const { className, name, description, contact, image } = this.props;
        console.log(this.props);
        return (
            <div className={className}>
    
                <div className={`${className}__content`} style={{backgroundImage: 'url("'+image+'")'}}>
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