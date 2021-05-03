import React, { Component } from "react";

import * as actions from '../../actions';
import { connect } from 'react-redux';


class RacingTeam extends Component{
    
    render(){
        const { className } = this.props;
        
        return (
            <div className={`${className}`}>
                Racing Team  
            </div>
        );
    }
}

function mapStateToProps(state){
    const{ vehicles } = state.cars;
    return { 
        vehicles
      }
  }
  
  RacingTeam = connect(mapStateToProps, actions)(RacingTeam); 
  export default RacingTeam;