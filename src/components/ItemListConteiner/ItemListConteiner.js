import React from "react";
import "./itemlistconteiner.css"

export const ItemListConteiner = (props) =>{
    return (
        <div>
            <h2 className="h2">{props.greeting}</h2>
        </div>
    )
}