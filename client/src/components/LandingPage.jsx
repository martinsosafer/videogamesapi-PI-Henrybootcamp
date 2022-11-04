import React from "react";
import {Link} from 'react-router-dom'
import "./Styles/LandingPage.css"

export default function LandingPage(){
    return(
      <div id="background">
            <div>
              
            </div>
            <h1 id="texto"> Welcome to the Videogames API !</h1>
            <Link to = '/home'>
               <h1> <button id="boton">Start!🎮  </button></h1>
            </Link>
        </div>
    )
}
