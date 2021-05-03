import React, { Component } from "react";
import history from '../../history';

class CarsCategories extends Component{
    
    render(){
        const { className, name, _id } = this.props;
        return (
            <div className={`${className}`}>
                <a onClick={() => history.push('/vehicles/'+_id)}>{name}</a>
            </div>
        );
    }
}

export default CarsCategories;