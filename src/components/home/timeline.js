import React from "react";

import borderImage from '../../images/border-pink.png';

class Timeline extends React.Component{
    state ={
        dayTimeline : ['10:00 AM', '10:30 AM', '5:30 PM'],
        activeTime: 1,
        activeDay: 1,
        marginlength: 70,
        fixedMarginLength: 70,
        day2Position: 500,
        day3Position: 570,
        timelineData: ['Inauguration of Fest with the Starting Speech from Vice Chancellor of HBTU', 'Sports Events start', 'Entries will Start for Pronite ']
    }

    rederTimeline = () => {
        let activeArr = new Array();
        const length = this.state.dayTimeline.length;
        const marginlength = 380/length -3*length;
        activeArr[this.state.activeTime] = 'active';
        return this.state.dayTimeline.map((el, index) => {
            return (
                <div 
                 id={index}
                 key={index} 
                 className={`timeline-container--time-container-time ${activeArr[index +1]}`} 
                 style={{marginBottom: `${marginlength }px`}} 
                 onClick={() => this.onTimeClick(index, marginlength)}
                 >
                    {el}
                </div>
            )
        });
    }

    onTimeClick = (index, marginlength) => {
        this.setState({ activeTime:   index +1, marginlength: index*(marginlength + 18) + this.state.fixedMarginLength})
    }

    onDayClick = (day) => {
        this.setState({ activeDay: day})
        if(day === 1){
            this.setState({
                dayTimeline: ['10:00 AM', '10:30 AM', '5:30 PM'],
                fixedMarginLength: 70,
                marginlength: 70,
                day2Position: 500,
                day3Position: 570,
                activeTime: 1,
                timelineData: ['Inauguration of Fest with the Starting Speech from Vice Chancellor of HBTU', 'Sports Events start', 'Entries will Start for Pronite ']
            })
        }else if(day === 2){
            this.setState({
                dayTimeline: ['10:00 AM'],
                fixedMarginLength: 140,
                day2Position: 70,
                day3Position: 570,
                marginlength: 140,
                activeTime: 1,
                timelineData: ['Timeline will be Updated Soon']
            })
        }else if(day === 3){
            this.setState({
                dayTimeline: ['10:00 AM'],
                fixedMarginLength: 210,
                day2Position: 70,
                day3Position: 140,
                marginlength: 210,
                activeTime: 1,
                timelineData: ['Timeline will be Updated Soon']
            })
        }
    }

    render(){
        return(
            <div className='section-timeline'>
                <div className='border-container'>
                    <img src={borderImage} alt='Pink' />
                </div>
                <div className='section-heading'>
                    <div className = "inner-cutout timeline-heading"> 
			            <h1 className="knockout">Timeline</h1>
		            </div>
                </div>
                <div className='section-content'>
                    <div className='timeline-container'>
                        <div id='1' className='timeline-container--day' onClick={() => this.onDayClick(1)}>
                            Day 1
                        </div>
                        <div id='2' className='timeline-container--day' style={{ top: this.state.day2Position }} onClick={() => this.onDayClick(2)}>
                            Day 2
                        </div>
                        <div id='3' className='timeline-container--day' style={{ top: this.state.day3Position }} onClick={() => this.onDayClick(3)}>
                            Day 3
                        </div>
                        <div className='timeline-container--line'>
                            <div className='timeline-container--line-dot' style={{ top: this.state.marginlength}}></div>
                        </div>
                        <div className='timeline-container--time-container' style={{ top: this.state.fixedMarginLength}}>
                            {this.rederTimeline()}
                        </div>
                    </div>
                    <div className='timeline-content'>
                        {/* <div class = "border"> */}
                            {/* <div class = "inner-cutout timeline-data"> 
                                <h1 class="knockout"> */}
                                    {this.state.timelineData[this.state.activeTime - 1]}
                                {/* </h1>
                            </div> */}
                        {/* </div> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default Timeline;