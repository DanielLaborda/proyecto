import React, { Component } from "react";
import history from '../../history';

class CarsCategories extends Component{
    render(){
        const { className, name, _id, imageCategory} = this.props;        
        return (
                <a className={`${className}__card`} onClick={() => history.push('/vehicles/'+_id)}>
                    <div className={`${className}__card__image`}>
                        <img src={require('../../../static/images/vehicles/' + imageCategory)} />
                    </div>
                    <div className={`${className}__card__title`}>
                        {name}
                    </div>
                </a>
        );
    }
}

export default CarsCategories;