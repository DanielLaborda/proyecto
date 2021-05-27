import React from "react";

export function ConfigurationInterior ({ className, name, complements, imageInterior, price}){ 
    return (
        <div className={`${className}`} >  
            <div className={`${className}__imageInterior`}>
                <img src={require("../../../static/images/vehicles/" + imageInterior)} />
            </div>

            <div className={`${className}__title`}>
                {name}
            </div>
            <div className={`${className}__complements`}>
                <ul>
                    {complements.map((complement, index) => {
                        return <li key={index}>{complement}</li>
                    })}
                </ul>  
            </div>
            <div className={`${className}__price`}>
                $ {price}
            </div>
            
        </div>
    );
}