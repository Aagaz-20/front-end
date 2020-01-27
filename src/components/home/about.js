import React from "react";

import Timer from '../utils/timer';

import borderImage from '../../images/border-blue.png';
import boardImage from '../../images/board.png';

class About extends React.Component{
    render(){
        return(
            <div className='section-about'>
                <div className='border-image'>
                    <img src={borderImage} alt='Blue' />
                </div>
                <div className='section-heading'>
                    <div className = "inner-cutout"> 
			            <h1 className="knockout">About Us</h1>
		            </div>
                </div>
                <div className='section-content'>
                    {/* <img src={blobShapeImage} alt={'BlueBlob'} /> */}
                    <p>
                        For several years, the sports sub-council
                        has been organizing tours and events
                        related to sports such as badminton,
                        table – tennis ,chess and so on…
                        The performances of all of our teams at
                        different stages throughout the state and
                        even outside has been excellent .

                        So this session it has been decided to bring all the sports events along with a fun
                        fair and cultural night under the umbrella of a mega inter college Athletic –cum-

                        Sports Fest , AAGAZ -20. We are expecting about 700 athletes from colleges and
                        universities all over the state and a minimum footfall of 5000+
                    </p>
                </div>
                <div className='timer-board'>
                    <img src={boardImage} alt='Scoreboard' />
                    <Timer />
                </div>
            </div>
        )
    }
}

export default About;