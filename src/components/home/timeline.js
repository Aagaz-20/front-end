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
        timelineData: [
            {
                time: '8:00 AM',
                event: 'Basketball League matches (Boys & Girls)',
                venue: 'West Campus',
                event2: 'Badminton League matches (Boys & Girls)',
                venue2: 'Green Park',
                event3: 'Volleyball League matches',
                venue3: 'West Campus'
                
            },
            {
                time: '8:30 AM',
                event: 'Football League matches',
                venue: 'East Campus',
                event2: 'Kabaddi League matches',
                venue2: 'West Campus',
                event3: 'Cricket League matches',
                venue3: 'West Campus'
            },
            {
                time: '10:00 AM',
                event: 'Inauguration/ opening ceremony',
                venue: 'East Campus'
            },
            {
                time: '12:00 PM',
                event: '800m(Boys) [Semi-Final] ',
                venue: 'East Campus',
                event2: 'Chess matches (Boys & Girls)',
                venue2: 'West Campus'
            },
            {
                time: '1:00 PM',
                event: '800m(Girls) [Semi-Final]',
                venue: 'East Campus',
                event2: 'Table Tennis League matches (Boys & Girls)',
                venue2: 'Green Park'
            },
            {
                time: '3:00 PM',
                event: '200m(Boys) [Semi-Final] ',
                venue: 'East Campus'
            },
            {
                time: '3:30 PM',
                event: '200m(Girls) [Semi-Final] ',
                venue: 'East Campus'
            },
            {
                time: '4:00 PM',
                event: 'Long Jump(Boys) [Final] ',
                venue: 'East Campus'
            },
            {
                time: '4:30 PM',
                event: 'Long Jump(Girls) [Final]',
                venue: 'East Campus'
            },
            {
                time: '5:00 PM',
                event: '400m(Boys) [Semi-Final] ',
                venue: 'East Campus'
            },
            {
                time: '5:30 PM',
                event: '400m(Girls) [Semi-Final]',
                venue: 'East Campus'
            },
            {
                time: '7:00 PM',
                event: 'Fun & fair / Open Mic(Informal Events)',
                venue: 'East Campus'
            }
        ]
    }

    rederTimeline = () => {
        let activeArr = new Array();
        const length = this.state.timelineData.length;
        const marginlength = 350/length -1*length;
        activeArr[this.state.activeTime] = 'active';
        return this.state.timelineData.map((el, index) => {
            return (
                <div 
                 id={index}
                 key={index} 
                 className={`timeline-container--time-container-time ${activeArr[index +1]}`} 
                 style={{marginBottom: `${marginlength }px`}} 
                 onClick={() => this.onTimeClick(index, length)}
                 >
                    {el.time}
                </div>
            )
        });
    }

    onTimeClick = (index, marginlength) => {
        this.setState({ activeTime:   index +1, marginlength: index*((360/marginlength -1*marginlength) + 18) + this.state.fixedMarginLength})
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
                timelineData: [
                    {
                        time: '8:00 AM',
                        event: 'Basketball League matches (Boys & Girls)',
                        venue: 'West Campus',
                        event2: 'Badminton League matches (Boys & Girls)',
                        venue2: 'Green Park',
                        event3: 'Volleyball League matches',
                        venue3: 'West Campus'
                        
                    },
                    {
                        time: '8:30 AM',
                        event: 'Football League matches',
                        venue: 'East Campus',
                        event2: 'Kabaddi League matches',
                        venue2: 'West Campus',
                        event3: 'Cricket League matches',
                        venue3: 'West Campus'
                    },
                    {
                        time: '10:00 AM',
                        event: 'Inauguration/ opening ceremony',
                        venue: 'East Campus'
                    },
                    {
                        time: '12:00 PM',
                        event: '800m(Boys) [Semi-Final] ',
                        venue: 'East Campus',
                        event2: 'Chess matches (Boys & Girls)',
                        venue2: 'West Campus'
                    },
                    {
                        time: '1:00 PM',
                        event: '800m(Girls) [Semi-Final]',
                        venue: 'East Campus',
                        event2: 'Table Tennis League matches (Boys & Girls)',
                        venue2: 'Green Park'
                    },
                    {
                        time: '3:00 PM',
                        event: '200m(Boys) [Semi-Final] ',
                        venue: 'East Campus'
                    },
                    {
                        time: '3:30 PM',
                        event: '200m(Girls) [Semi-Final] ',
                        venue: 'East Campus'
                    },
                    {
                        time: '4:00 PM',
                        event: 'Long Jump(Boys) [Final] ',
                        venue: 'East Campus'
                    },
                    {
                        time: '4:30 PM',
                        event: 'Long Jump(Girls) [Final]',
                        venue: 'East Campus'
                    },
                    {
                        time: '5:00 PM',
                        event: '400m(Boys) [Semi-Final] ',
                        venue: 'East Campus'
                    },
                    {
                        time: '5:30 PM',
                        event: '400m(Girls) [Semi-Final]',
                        venue: 'East Campus'
                    },
                    {
                        time: '7:00 PM',
                        event: 'Fun & fair / Open Mic(Informal Events)',
                        venue: 'East Campus'
                    },
                ]
            })
        }else if(day === 2){
            this.setState({
                dayTimeline: ['10:00 AM'],
                fixedMarginLength: 140,
                day2Position: 70,
                day3Position: 570,
                marginlength: 140,
                activeTime: 1,
                timelineData: [
                    {
                        time: '6:30 AM',
                        event: '4X100(Boys) [Semi-Final]',
                        venue: 'East Campus'
                    },
                    {
                        time: '7:15 AM',
                        event: '4X100(Girls) [Semi-Final] ',
                        venue: 'East Campus'
                    },
                    {
                        time: '8:00 AM',
                        event: 'Javlin Throw(Girls) [Final]',
                        venue: 'East Campus'
                    },
                    {
                        time: '8:30 AM',
                        event: '200m(Girls) [Final]',
                        venue: 'East Campus'
                    },
                    {
                        time: '9:00 AM',
                        event: 'Javlin Throw(Boys) [Final]',
                        venue: 'East Campus'
                    },
                    {
                        time: '9:30 AM',
                        event: 'Open Mic/Award Ceremony ',
                        venue: 'East Campus'
                    },
                    {
                        time: '11:30 AM',
                        event: '800m(Girls) [Final] ',
                        venue: 'East Campus'
                    },
                    {
                        time: '12:30 PM',
                        event: '800m(Boys) [Final]',
                        venue: 'East Campus',
                    },

                    {
                        time: '1:30 PM',
                        event: '200m(Boys) [Final] ',
                        venue: 'East Campus'
                    },
                    {
                        time: '3:00 PM',
                        event: '100m(Girls) [Final]',
                        venue: 'East Campus'
                    },
                    {
                        time: '3:30 PM',
                        event: '100m(Boys)[Final]',
                        venue: 'East Campus'
                    },
                    {
                        time: '8:00 PM',
                        event: 'Cultural night\
                        (inter college dancing and singing\
                        competition/ fashion show )',
                        venue: 'East Campus'
                    }
                ]
            })
        }else if(day === 3){
            this.setState({
                dayTimeline: ['10:00 AM'],
                fixedMarginLength: 210,
                day2Position: 70,
                day3Position: 140,
                marginlength: 210,
                activeTime: 1,
                timelineData: [
                    {
                        time: '6:00 AM',
                        event: '1500m(Boys) [final]',
                        venue: 'East Campus'
                    },
                    {
                        time: '6:30 AM',
                        event: 'Discuss(Girls) [Final] ',
                        venue: 'East Campus'
                    },
                    {
                        time: '7:00 AM',
                        event: 'Shotput(Girls) [Final] ',
                        venue: 'East Campus'
                    },
                    {
                        time: '7:30 AM',
                        event: 'Triple Jump(Boys) [Final]',
                        venue: 'East Campus'
                    },
                    {
                        time: '8:00 AM',
                        event: '4X100(Boys) [Final] ',
                        venue: 'East Campus'
                    },
                    {
                        time: '8:30 AM',
                        event: '4X100(Girls) [Final]',
                        venue: 'East Campus'
                    },
                    {
                        time: '9:00 AM',
                        event: 'Discuss(Boys) [Final] ',
                        venue: 'East Campus'
                    },
                    {
                        time: '9:30 AM',
                        event: 'High Jump(Boys) [Final]',
                        venue: 'East Campus'
                    },
                    {
                        time: '10:00 AM',
                        event: '100m(Girls) [Final] ',
                        venue: 'East Campus'
                    },
                    {
                        time: '10:30 AM',
                        event: '100m(Boys)[Final]',
                        venue: 'East Campus'
                    },
                    {
                        time: '11:30 AM',
                        event: 'Shotput(Boys) [Final] ',
                        venue: 'East Campus'
                    },
                    {
                        time: '1:00 PM',
                        event: '4X400m(Boys) [Final]',
                        venue: 'East Campus'
                    },
                    {
                        time: '5:30 PM',
                        event: 'Closing ceremony ',
                        venue: 'East Campus'
                    },
                    {
                        time: '8:00 PM',
                        event: 'Celebrity Night',
                        venue: 'East Campus'
                    }

                ]
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
                                    {this.state.timelineData[this.state.activeTime - 1].event}<br />
                                    {this.state.timelineData[this.state.activeTime - 1].venue}<br />
                                    {this.state.timelineData[this.state.activeTime - 1].event2 ? this.state.timelineData[this.state.activeTime - 1].event2 : null}<br />
                                    {this.state.timelineData[this.state.activeTime - 1].venue2 ? this.state.timelineData[this.state.activeTime - 1].venue2 : null}<br />
                                    {this.state.timelineData[this.state.activeTime - 1].event3 ? this.state.timelineData[this.state.activeTime - 1].event3 : null}<br />
                                    {this.state.timelineData[this.state.activeTime - 1].venue3 ? this.state.timelineData[this.state.activeTime - 1].venue3 : null}<br />
                                    {/* {this.state.timelineData[this.state.activeTime - 1].event4 ? this.state.timelineData[this.state.activeTime - 1].event4 : null}<br />
                                    {this.state.timelineData[this.state.activeTime - 1].venue4 ? this.state.timelineData[this.state.activeTime - 1].venue4 : null}<br />
                                    {this.state.timelineData[this.state.activeTime - 1].event5 ? this.state.timelineData[this.state.activeTime - 1].event5 : null}<br />
                                    {this.state.timelineData[this.state.activeTime - 1].venue5 ? this.state.timelineData[this.state.activeTime - 1].venue5 : null}<br />
                                    {this.state.timelineData[this.state.activeTime - 1].event6 ? this.state.timelineData[this.state.activeTime - 1].event6 : null}<br />
                                    {this.state.timelineData[this.state.activeTime - 1].venue6 ? this.state.timelineData[this.state.activeTime - 1].venue6 : null}<br /> */}
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