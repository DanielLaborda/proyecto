import React, { Component } from "react";

import * as actions from '../../actions';
import { connect } from 'react-redux';
import ImagesVehicles from '../vehicles/imagesVehicles';
import VehiclesExtras from "../vehicles/vehiclesExtras";
import VehiclesVersions from "../vehicles/vehiclesVersions";
import VehiclesColors from "../vehicles/vehiclesColors";


class Vehicles extends Component{
    
    componentDidMount(){
        this.props.setVehicle();  
        const id = this.props.match.params.id
        this.props.filterCarById(id);
            
    }
    render(){
        
        const { className, vehicleById } = this.props;
        return (
            <div className={`${className}`}>
                {vehicleById.map(vehicle => {
                    return (
                        <div key={vehicle._id} className='vehicles-wrapper'>
                            <div className='vehicles__banner'>
                                <img src={vehicle.banner}/>
                            </div>
                            <div className='vehicles__title'>
                                <h1>{vehicle.name}</h1>
                            </div>
                            <div className='vehicles__slogan'>
                                <h1>{vehicle.slogan}</h1>
                            </div>
                            <div className='vehicles__description'>
                                <h1>{vehicle.description}</h1>
                            </div>
                            <div className='vehicles__versions'>
                                {
                                    vehicle.versions.map(version => {
                                        return <VehiclesVersions key={version.name} className='vehicles__versions__item' {...version}/>
                                    })
                                }                                
                            </div>
                            <div className='vehicles__warranty'>
                                <h1>Warranty {vehicle.warranty}</h1>
                            </div>
                            

                            <div className='vehicles__colors'>
                                {
                                    vehicle.colors.map(color => {
                                        return <VehiclesColors key={color.name} className='vehicles__colors' {...color} />
                                    })
                                }
                            </div>

                            <div className='vehicles__images'>
                            
                                {
                                    vehicle.images.map(image => {
                                        return <img className='vehicles__images__item' src={image} />
                                    })
                                }
                            </div>
                            
                        </div>
                    )

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
  
  Vehicles = connect(mapStateToProps, actions)(Vehicles); 
  export default Vehicles;