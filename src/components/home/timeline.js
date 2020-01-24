import React from "react";

import borderImage from '../../images/border-pink.png';

class Timeline extends React.Component{
    render(){
        return(
            <div className='section-timeline'>
                <div className='border-container'>
                    <img src={borderImage} alt='Pink' />
                </div>
                <div className='section-heading'>
                    <div className = "inner-cutout"> 
			            <h1 className="knockout">Timeline</h1>
		            </div>
                </div>
                <div className='section-content'>

                </div>
            </div>
        )
    }
}

export default Timeline;