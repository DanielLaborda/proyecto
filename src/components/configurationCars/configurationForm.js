import React, { Component } from "react";
import { reduxForm } from 'redux-form';
import { Field } from 'redux-form';

import { FormInput, FormButton } from '../formFields';
import ConfigurationColors from "./configurationColors";
import { ConfigurationInterior } from "./configurationInterior";
import { ConfigurationTitleSection } from "./configurationTitleSection";
import ConfigurationVersions from "./configurationVersions";
import {ConfigRims} from './configRims';


class ConfigurationForm extends Component{
    constructor() {
        super();

        this.state = {
            selectedVersion: '',
            selectedColor: '',
            selectedInterior: '',
            selectedRims: '',
            imagenColor: '',
        }

        this.handleOptionColor = this.handleOptionColor.bind(this);
        this.handleOptionVersion = this.handleOptionVersion.bind(this);
        this.handleOptionInterior = this.handleOptionInterior.bind(this);
        this.handleOptionInterior = this.handleOptionInterior.bind(this);
        this.handleOptionRims = this.handleOptionRims.bind(this);
    }
    componentDidMount() {
        this.setState({
            selectedColor:this.props.colors[0].name,
            imagenColor:this.props.colors[0].imageColor,
            selectedVersion:this.props.versions[0].name
        });;
    }
    handleOptionColor(e) {
        this.setState({
            selectedColor: this.props.colors[e.currentTarget.value].name,
            imagenColor: this.props.colors[e.currentTarget.value].imageColor
        });
    }
    handleOptionVersion(e) {

        let versionSelect = '';
        this.props.versions.map((version, index) => {
            if(e.currentTarget.value == version._id){
                return versionSelect = this.props.versions[index].name
            } 
            
        });
        this.setState({
            selectedVersion: versionSelect
        });
        const imgs = document.querySelectorAll('.border-version');
        imgs.forEach(img=>{
            img.classList.remove('border-version')
        });
        document.getElementById(`version${e.currentTarget.value}`).classList.add('border-version');
    }
    handleOptionInterior(e) {
        this.setState({
            selectedInterior: this.props.interiors[e.currentTarget.value].name
        });
    }
    
    handleOptionRims(e) {
        this.setState({
            selectedRims: this.props.interiors[e.currentTarget.value].name
        });
    }
    render(){
        const { className, handleSubmit, name, colors, versions, interiors, rims } = this.props;
        return (
            <form onSubmit={handleSubmit} className={`${className}`}>
               
                
                <ConfigurationTitleSection className={`${className}__name`} title={name}/>

                <ConfigurationTitleSection className={`${className}__sectionTitle__version`} title='Versions'/>

                <div className={`${className}__versions`}>
                    {
                        versions.map((version, index) => {
                            return (
                                <div key={`${version._id}`} className={`${className}__versions__card`}>
                                    <label id={`version${version._id}`} className={(index==0)? 'border-version' : ''} >
                                        <input 
                                            type="radio" value={version._id} name="version" 
                                            defaultChecked={(index==0)? true : false} 
                                            onChange={this.handleOptionVersion}
                                        />
                                        <ConfigurationVersions key={version._id} className='vehicles__versions' {...version}/>
                                    </label>
                                </div>
                            )
                        })
                    }    
                </div>
                

                <ConfigurationTitleSection className={`${className}__sectionTitle__colors`} title='Colors'/>

                <img src={this.state.imagenColor} className={`${className}__imagen`}/>   
                                              
                <div className={`${className}__colors`}>
                    {
                        colors.map((color, index) => {
                            return (
                                <div key={`${color._id}`} className={`${className}__colors__card`}>
                                    <label>
                                        <input 
                                            type="radio" value={color._id} name="color" 
                                            defaultChecked={(index==0)? true : false} 
                                            onChange={this.handleOptionColor}
                                        />
                                        <ConfigurationColors className={`${className}__colors__card__item`} {...color} />
                                    </label>
                                </div>
                            )
                        })
                    }
                </div>

                <ConfigurationTitleSection className={`${className}__sectionTitle__interior`} title='Interior'/>
                <div className={`${className}__interior`}>
                    {
                        interiors.map((interior, index) => {
                            return (
                                <div key={`${interior._id}`} className={`${className}__interior__card`}>
                                    <label>
                                        <input 
                                            type="radio" value={interior._id} name="interior" 
                                            defaultChecked={(index==0)? true : false} 
                                            onChange={this.handleOptionInterior}
                                        />
                                        <ConfigurationInterior className={`${className}__interior__card__item`} {...interior}/>
                                    </label>
                                </div>
                            )
                        })
                    }
                </div>

                <ConfigurationTitleSection className={`${className}__sectionTitle__rims`} title='Rims'/>
                <div className={`${className}__rims`}>
                    {
                        rims.map((rim, index) => {
                            return (
                                <div key={`${rim._id}`} className={`${className}__rims__card`}>
                                    <label>
                                        <input 
                                            type="radio" value={rim._id} name="rims" 
                                            defaultChecked={(index==0)? true : false} 
                                            onChange={this.handleOptionRims}
                                        />
                                        <ConfigRims className={`${className}__rims__card__item`} {...rim} />
                                    </label>
                                </div>
                            )
                        })
                    }
                </div>
                <br/>
                <br/>
                <br/>
            {/* <label>
                <input type="checkbox"
                    //defaultChecked={checked}
                    //onChange={() => setChecked(!checked)}
                />             
                <img src='http://via.placeholder.com/100x100'/>
            </label> */}
      
    
            </form>
        )
    }
}

ConfigurationForm = reduxForm({
    form: 'ConfigurationForm'
  })(ConfigurationForm);
  
export default ConfigurationForm;