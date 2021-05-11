import React from "react";

export function ConfigurationInterior ({ className, name, complements}){ 
    return (
        <div className={`${className}`} >            
            <div className={`${className}__name`}>
                {name}
            </div>
            <div className={`${className}__complements`}>
                <ul>
                    {complements.map((complement, index) => {
                        return <li key={index}>{complement}</li>
                    })}
                </ul>
                
            </div>
            
        </div>
    );
}