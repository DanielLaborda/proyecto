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
                    const banner = "../../../static/images/vehicles/" + vehicle.banner;

                    return (
                        <div key={vehicle._id} className='vehicles-wrapper'>
                            <div className='vehicles__banner' style={{
                                background:`url(${banner})`,
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
                                <div className='vehicles__description__text'>{vehicle.description}</div>
                                <div className='vehicles__description__warranty'>Warranty {vehicle.warranty}</div>
                            </div>


                            <div className='vehicles__images'>
                                {
                                    vehicle.images.map((image, index) => {
                                        if ((index+1)%3==0){
                                            if (alter == true) {
                                                alter = false;
                                            } else {
                                                alter = true;
                                            }
                                        }
                                        if (alter == true) {
                                            return <ImagesVehicles key={image._id} className={(index%2==1) ? 'vehicles__images__item-8': 'vehicles__images__item-4'} {...image} />
                                        } else {
                                            return <ImagesVehicles key={image._id} id={index} className={(index%2==0) ? 'vehicles__images__item-8': 'vehicles__images__item-4'} {...image} />
                                        }
                                    })
                                }
                            </div>
                            <div className='vehicles__configuration'>
                                <a onClick={() => history.push('/configuration/'+vehicle._id)} className={'vehicles__configuration__btn'}>Configuration</a>
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