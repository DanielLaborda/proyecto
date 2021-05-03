import React, { Component } from "react";

import * as actions from '../../actions';
import { connect } from 'react-redux';
import PageTitle from "../pageTitle";
import CarsCategories from "../categories/carsCategories";


class Categories extends Component{
    componentDidMount() {
        this.props.setCarCategories(); 
        this.props.setVehicle();
    }
    showHide(id) {
        let categoryCar = document.getElementById(id);
        if (!categoryCar){
            return
        }
        if(categoryCar.classList.contains('car-hidden')) {
            categoryCar.classList.remove('car-hidden');
            categoryCar.classList.add('car-show');
        } else {
            categoryCar.classList.add('car-hidden');
            categoryCar.classList.remove('car-show');
        }
        this.props.filterCarsWithCategoryId(id);
    }
    render(){
        const { categories,  filteredCars } = this.props;
        
        return (
            <div className='categories'>
                <PageTitle className='categories__page-title' title='Nuestra gama'/>
                {
                    categories.map(category => {
                        return (
                            <div key={category._id} className="categories-category">
                                <div className="categories-category__content">
                                    <div className={`categories-category__content-image ${category._id%2 == 0 ? 'background-blue' : 'background-white'}`}>
                                        <img src={category.image} />
                                    </div>
                                    <div className={`categories-category__content-text ${!(category._id%2 == 0) ? 'background-blue' : 'background-white'}`}>
                                        <div className={`categories-category__content-text__title`}>{category.name}</div>
                                        <div className={`categories-category__content-text__description`} >{category.description}</div>
                                        <a onClick={() => this.showHide(category._id)} className={`categories-category__content-text__link`}>CARS</a>
                                    </div>
                                </div>
                                <div id={category._id} className="categories-category__cars car-hidden">  
                                    {
                                        filteredCars ?
                                        filteredCars.map(filteredCar=> {
                                            return <CarsCategories key={category._id} className={'categories-category__cars-list'} id={category._id} {...filteredCar}/>
                                        })
                                        : ''
                                    }  
                                
                                </div>
                            </div>
                        )
                    })
                }
                
            </div>
        );
    }
}

function mapStateToProps(state){
    const{ categories, vehicles, filteredCars } = state.cars;
    return { 
        categories,
        vehicles,
        filteredCars
      }
  }
  
  Categories = connect(mapStateToProps, actions)(Categories); 
  export default Categories;