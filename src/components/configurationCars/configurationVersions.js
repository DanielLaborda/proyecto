import React, { Component } from "react";

class ConfigurationVersions extends Component{ 

    render(){
        const { className, name, urlImage, base_price, list } = this.props;
        return (
            <div className={`${className}`} >
                <div className={`${className}__image`}>
                    <img src={require("../../../static/images/vehicles/"+urlImage)} />
                </div>
                <div className={`${className}__content`}>
                    <div className={`${className}__title`}>
                        {name}
                    </div>
                    <div className={`${className}__list`}>
                        <ul>
                        {
                            list.map(item => {
                                return <li key={item}>{item}</li>
                            })
                        }
                        </ul>
                    </div>
                    <div className={`${className}__price`}>
                        {base_price}
                    </div>
                </div>
                
            </div>
        );
    }
}

export default ConfigurationVersions;