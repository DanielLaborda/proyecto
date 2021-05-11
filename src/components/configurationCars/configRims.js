import React from "react";

export function ConfigRims({ className, img, model, size, material }){ 
    return (
        <div className={`${className}`} > 
            <img src={img}/>         
            <div className={`${className}__model-size`}>
                {model} - {size}
            </div>
            <div className={`${className}__material`}>
                {material}
            </div>
            
        </div>
    );
}