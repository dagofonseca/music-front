import React from "react";
import "./styles/slide.css"

function Slide({image}){
    const divStyles = {
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    }
    return(
        <div className="carrouselSlide"
             style={divStyles}>                
        </div>
    );
}

export default Slide;