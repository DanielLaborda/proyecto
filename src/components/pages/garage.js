import React, { Component } from "react";

import * as actions from '../../actions';
import { connect } from 'react-redux';
import GarageMap from "../garage/garageMap";
import GarageInfo from "../garage/garageInfo";


class Garage extends Component{
    componentDidMount() {
        this.props.setGarageInfo();
    }
    render(){
        const { garageInfo } = this.props;
        return (
            <div className='garage'>
                {garageInfo.map(garage => {
                    return (
                        <div key={`garage${garage.name}`} className='garage__content'>
                            <GarageMap className='garage__content__map'  position={garage.position}/>
                            <GarageInfo className='garage__content__info' {...garage}/>
                        </div>
                    )
                })}
            </div>
        );
    }
}

function mapStateToProps(state){
    const{ garageInfo } = state.garage;
    return { 
        garageInfo
      }
  }
  
  Garage = connect(mapStateToProps, actions)(Garage); 
  export default Garage;