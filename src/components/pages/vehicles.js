import React, { Component } from "react";

import * as actions from '../../actions';
import { connect } from 'react-redux';
import VehiclesVersions from "../vehicles/vehiclesVersions";
import ImagesVehicles from "../vehicles/imagesVehicles";

import history from '../../history';

class Vehicles extends Component{
    
    componentDidMount(){
        this.props.setVehicle();  
        const id = this.props.match.params.id
        this.props.filterCarById(id);
            
    }
    render(){
        
        const { vehicleById } = this.props;
        let alter = true;
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
                                    vehicle.images.map((image, index) => {
                                        if ((index+1)%3==0){
                                            console.log('entra', index);
                                            if (alter == true) {
                                                alter = false;
                                            } else {
                                                alter = true;
                                            }
                                        }
                                        console.log(alter);
                                        if (alter == true) {
                                            return <ImagesVehicles key={image._id} className={(index%2==1) ? 'vehicles__images__item-8': 'vehicles__images__item-4'} {...image} />
                                        } else {
                                            return <ImagesVehicles key={image._id} id={index} className={(index%2==0) ? 'vehicles__images__item-8': 'vehicles__images__item-4'} {...image} />
                                        }
                                    })
                                }
                            </div>

                            <a onClick={() => history.push('/configuration/'+vehicle._id)} className={'btn'}>Configuration</a>
                                             
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