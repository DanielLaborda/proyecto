import React, { Component } from "react";

import * as actions from '../../actions';
import { connect } from 'react-redux';
import RacingCategories from "../racing/racingCategories";



class RacingTeam extends Component {
    componentDidMount(){
        this.props.setRacingInfo(); 
    }
    ChangeImage(image, e) {
        let activeBar = document.getElementsByClassName('activeBar');
        if (activeBar){
            [].forEach.call(activeBar, function(el) {
                el.classList.remove("activeBar");
            });
        }
        document.getElementById('imageBanner').setAttribute('src','../../../static/images/img_racing_banner/'+image);
        e.target.classList.add('activeBar');
    }
    ChangeVideo(video, id) {
        let activeCategory = document.getElementsByClassName('activeCategory');
        if (activeCategory){
            [].forEach.call(activeCategory, function(el) {
                el.classList.remove("activeCategory");
            });
        }
        let activeCategoryImg = document.getElementsByClassName('activeCategoryImg');
        if (activeCategoryImg){
            [].forEach.call(activeCategoryImg, function(el) {
                el.classList.remove("activeCategoryImg");
            });
        }
        document.getElementById('videoRacing').setAttribute('src',video);
        let element = document.getElementById('categoryName'+id);
        element.classList.add("activeCategory"); 
        let elementImage = document.getElementById('categoryImage'+id);
        elementImage.classList.add("activeCategoryImg"); 
    }
    render(){
        const { className, racingInfo } = this.props;
        return (
            <div className={`${className}`}>
                {racingInfo.map((racing,index) => {
                    return (
                        <div key={index} className='racing'>
                        
                            <div className='racing__banner'>
                                
                                 <img className='racing__banner__image' id='imageBanner' src={require(`../../../static/images/img_racing_banner/${racing.imagesBanner[0]}`)}/> 
                                <div className='racing__banner__sections'>
                                    {racing.imagesBanner.map((image, index) => {
                                        return (
                                            <a id={`bannerBtn${index}`} key={index} className={`racing__banner__sections__button ${(index==0)? 'activeBar' : ''}`} onClick={(e) => this.ChangeImage(image,e)}></a>
                                        )
                                    })}  
                                </div>

                                <div className='racing__banner__title'>
                                    {racing.name}
                                </div>
                            </div>

                            <div className='racing__description'>
                                <p>{racing.description}</p>
                            
                                <p>{racing.description2}</p>
                            </div>

                            <div className='racing__video'>
                                <iframe id='videoRacing'  
                                    src="https://www.youtube.com/embed/DVVE4CBeDvg" 
                                    title="YouTube video player" 
                                    frameBorder='0' 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" >
                                </iframe>
                            </div>
                            <div className='racing__slogan'>
                                {racing.slogan}
                            </div>
                            <div className='racing__gategories'>
                                {racing.categories.map(category => {
                                    return <RacingCategories key={`category${category._id}`} onClick={() => this.ChangeVideo(category.video, category._id)} className='racing__gategories__category' {...category} />
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        );
    }
}

function mapStateToProps(state){
    const{ racingInfo } = state.racing;
    return { 
        racingInfo
      }
  }
  
  RacingTeam = connect(mapStateToProps, actions)(RacingTeam); 
  export default RacingTeam;