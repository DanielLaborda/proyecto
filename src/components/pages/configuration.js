import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';
import ConfigurationForm from '../configurationCars/configurationForm';

class Configuration extends Component {
    componentDidMount(){
        this.props.setVehicle();  
        const id = this.props.match.params.id
        this.props.filterCarById(id);
            
    }
    onSubmit = (fields) => {
        console.log('fields');
    }

    render() {
        const {vehicleById} = this.props;
        console.log(this.props);
        return (
            <div className={`configuration`}>
                {vehicleById.map(vehicle => {
                    return <ConfigurationForm key={vehicle.name} className='configuration__form' {...vehicle} onSubmit={this.onSubmit}/>
                })}
                
            </div>
        );
    }
}

function mapStateToProps(state){
    const{ vehicles, vehicleById } = state.cars;
    return { 
        vehicles,
        vehicleById
      }
  }
  
  Configuration = connect(mapStateToProps, actions)(Configuration); 
  export default Configuration;