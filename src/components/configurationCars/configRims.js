import React from "react";

export function ConfigRims({ className, img, model, size, material, price }){ 
    return (
        <div className={`${className}`} > 
            <img src={require("../../../static/images/vehicles/" + img)}/>         
            <div className={`${className}__model-size`}>
                {model} - {size}
            </div>
            <div className={`${className}__material`}>
                {material}
            </div>
            <div className={`${className}__price`}>
                $ {price}
            </div>
        </div>
    );
}