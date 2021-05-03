import React, { Component } from "react";

import * as actions from '../../actions';
import { connect } from 'react-redux';
import VehiclesVersions from "../vehicles/vehiclesVersions";
import VehiclesColors from "../vehicles/vehiclesColors";


class Vehicles extends Component{
    
    componentDidMount(){
        this.props.setVehicle();  
        const id = this.props.match.params.id
        this.props.filterCarById(id);
            
    }
    render(){
        
        const { vehicleById } = this.props;
        return (
            <div className='vehicles'>
                {vehicleById.map(vehicle => {
                    return (
                        <div key={vehicle._id} className='vehicles-wrapper'>
                            <div className='vehicles__banner' style={{
                                background:`url(${vehicle.banner})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center"
                            }}>
                                
                                
                                <div className='vehicles__banner__title'>
                                    {vehicle.name}
                                </div>
                                <div className='vehicles__banner__slogan'>
                                    {vehicle.slogan}
                                </div>
                            </div>

                            <div className='vehicles__description'>
                                <h1>{vehicle.description}</h1>
                                <h1>Warranty {vehicle.warranty}</h1>
                            </div>
                            
                            
                            <div className='vehicles__images'>
                                {
                                    vehicle.images.map(image => {
                                        return <img key={image._id} className='vehicles__images__item' src={image.img} />
                                    })
                                }
                            </div>

                       
                            
                            <div className='vehicles__versions'>
                                {
                                    vehicle.versions.map(version => {
                                        return <VehiclesVersions key={version._id} className='vehicles__versions__item' {...version}/>
                                    })
                                }                                
                            </div>
                            
                            

                            <div className='vehicles__colors'>
                                {
                                    vehicle.colors.map(color => {
                                        return <VehiclesColors key={color.name} className='vehicles__colors' {...color} />
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