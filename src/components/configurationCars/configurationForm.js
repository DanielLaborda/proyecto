import React, { Component, version } from "react";
import { reduxForm } from 'redux-form';
import { Field } from 'redux-form';
import { withRouter } from 'react-router-dom';

import { FormInput, FormButton, FormInputRadioButton } from '../formFields';


import ConfigurationColors from "./configurationColors";
import { ConfigurationInterior } from "./configurationInterior";
import { ConfigurationTitleSection } from "./configurationTitleSection";
import ConfigurationVersions from "./configurationVersions";
import {ConfigRims} from './configRims';


class ConfigurationForm extends Component{
    constructor() {
        super();

        this.state = {
            imagenColor: '',
        }

        this.handleOptionColor = this.handleOptionColor.bind(this);
    }
   
    componentDidMount() {
        this.setState({
            imagenColor:this.props.colors[0].imageColor
        });;
    }
    handleOptionColor(e) {
        console.log(this.props.colors[e.currentTarget.id].imageColor);
        this.setState({
            imagenColor: this.props.colors[e.currentTarget.id].imageColor
        });
    }
    render(){
        const { className, handleSubmit, name, colors, versions, interiors, rims } = this.props;
        return (
            <form onSubmit={handleSubmit} className={`${className}`}>

                <div className className={`${className}__name`}>
                    {name}
                </div>

                <ConfigurationTitleSection className={`${className}__sectionTitle__version sectionTitle`} title='Versions'/>
                <div className={`${className}__versions`}>
                    {
                        versions.map((version, index) => {
                            return (
                                <label key={`version${version._id}`} className={`${className}__versions__label`}>
                                    <Field name="vesion" component="input" type="radio" value={version.name}/> 
                                    <ConfigurationVersions key={version._id} className={`${className}__versions__card`} {...version}/>
                                </label>
                            )
                        })
                    }    
                </div>

                <ConfigurationTitleSection className={`${className}__sectionTitle__colors sectionTitle`} title='Colors'/>

                <div className={`${className}__imagen`}>
                   
                    {(this.state.imagenColor)? <img src={require("../../../static/images/vehicles/" + this.state.imagenColor)} className={`${className}__imagen__img`}/> : ''}
                

                </div>  
                                              
                <div className={`${className}__colors`}>
                    {
                        colors.map((color, index) => {
                            return (
                                <label key={`color${index}`}>
                                    <Field name="color" component="input" type="radio" value={color.name}
                                        onChange={this.handleOptionColor}
                                        id={index}
                                    /> 
                                    <ConfigurationColors className={`${className}__colors__card`} {...color} />
                                </label>
                            )
                        })
                    }
                </div>


                <ConfigurationTitleSection className={`${className}__sectionTitle__interior sectionTitle`} title='Interior'/>
                <div className={`${className}__interior`}>
                    {
                        interiors.map((interior, index) => {
                            return (

                                <label key={`interior${index}`}>
                                    <Field name="interior" component="input" type="radio" value={interior.name}/> 
                                    <ConfigurationInterior className={`${className}__interior__card`} {...interior}/>
                                </label>
                                
                            )
                        })
                    }
                </div>

                <ConfigurationTitleSection className={`${className}__sectionTitle__rims sectionTitle`} title='Rims'/>
                <div className={`${className}__rims`}>
                    {
                        rims.map((rim, index) => {
                            return (
                                <label key={`rims${index}`}>
                                    <Field name="rims" component="input" type="radio" value={`${rim.model} - ${rim.size}`}/> 
                                    <ConfigRims className={`${className}__rims__card`} {...rim} />
                                </label>        
                            )
                        })
                    }
                </div>



                
        
                <Field className={`${className}__submit`}
                type='submit'
                title='Get a quote'
                name='quote'
                component={FormButton}/>



            </form>
        )
    }
}

ConfigurationForm = reduxForm({
    form: 'ConfigurationForm'
})(ConfigurationForm);
  

ConfigurationForm = withRouter(ConfigurationForm);
export default ConfigurationForm;