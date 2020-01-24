import React from "react";

import borderImage from '../../images/border-green.png';

class Gallery extends React.Component{
    render(){
        return(
            <div className='section-gallery'>
                <div className='border-container'>
                    <img src={borderImage} alt='Green'/>
                </div>
                <div className='section-heading'>
                    <div className = "inner-cutout"> 
			            <h1 className="knockout">Gallery</h1>
		            </div>
                </div>
                <div className='section-content'>

                </div>
            </div>
        )
    }
}

export default Gallery;