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

        let showCategory = document.getElementsByClassName('car-show');
        if (showCategory){
            [].forEach.call(showCategory, function(el) {
                el.classList.remove("car-show");
                el.classList.add("car-hidden");
            });
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
                            <div key={`category${category._id}`} className="categories-category">
                                <div className="categories-category__content">
                                    <div className='cat-category__content-img'>
                                        <div className='categories-category__content-image'>
                                            <div className='background__back'/>
                                            <img src={category.image} />
                                        </div>
                                    </div>
                                    <div className={`categories-category__content-text `}>
                                        <div className={`categories-category__content-text__title`}>{category.name}</div>
                                        <div className={`categories-category__content-text__description`} >{category.description}</div>
                                        <a onClick={() => this.showHide(category._id)} className={`categories-category__content-text__link`}>CARS</a>
                                    </div>
                                </div>
                                <div id={category._id} className="categories-category__cars car-hidden ">  
                                    {
                                        filteredCars ?
                                        filteredCars.map(filteredCar=> {
                                            return <CarsCategories key={`vehicle${filteredCar._id}`}  className={'categories-category__cars'} id={category._id} {...filteredCar}/>
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