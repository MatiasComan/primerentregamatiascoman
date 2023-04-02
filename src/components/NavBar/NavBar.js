import React from "react";
import "./navbar.css"
import {CartWidget} from "../CartWidget/CartWidget"

export const NavBar = () =>{
    return(
        <div className="menu">
        <p>Des Tienda</p>
        <p>Nosotros</p>
        <p>Contacto</p>
        <CartWidget/>
        </div>
    
    )
}