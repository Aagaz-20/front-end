import React from 'react';

import EventViewer from './eventsViewer';

//images
import blobImage from '../../images/blob-shape-skyblue.svg'
import cricketImage from '../../images/eventsImages/cricket.webp';
import footballImage from '../../images/eventsImages/football.jpeg';
import volleyballImage from '../../images/eventsImages/volleyball.png';
import basketImage from '../../images/eventsImages/basketball.jpeg';
import badmintonImage from '../../images/eventsImages/badminton.jpg';
import kabaddiImage from '../../images/eventsImages/kabaddi.jpg';
import athleticsMenImage from '../../images/eventsImages/athletics-men.jpg';
import athleticsWomenImage from '../../images/eventsImages/athletics-women.jpg';
import tableTennisImage from '../../images/eventsImages/table-tennis.jpg';
import chessImage from '../../images/eventsImages/chess.jpeg';

class Events extends React.Component{
    state = {
        eventView: false,
        currentEvent: null,
        eventsName: ['Athletics Men', 'Athletics Women','Cricket','Football', 'Basketball', 'Volleyball', 'Badminton', 'Table Tennis', 'Kabaddi', 'Chess'],
        eventType: ['solo', 'solo', 'team','team','team','team', 'team', 'team','team', 'solo' ],
        eventImages: [athleticsMenImage, athleticsWomenImage,cricketImage, footballImage, basketImage, volleyballImage, badmintonImage, tableTennisImage, kabaddiImage, chessImage ],
        eventDescription: [
            'Athletics for men group includes events which are 100m, 200m, 400m, 800m, 1500m Races, 4*100m and 4*400m Relay Races, Long and High Jump, Shot Put, Discuss and Javelin Throw.',
            'Athletics for men group includes events which are 100m, 200m, 400m, 800m Races, 4*100m Relay Races, Long Jump, Shot Put, Discuss and Javelin Throw.',
            'Cricket is a bat-and-ball game played between two teams of eleven players on a field at the center of which is a 20-metre (22-yard) pitch with a wicket at each end, each comprising two bails balanced on three stumps. ',
            'Football or Soccer, is a team sport played with a spherical ball between two teams of eleven players. If you live, breathe and dream football, then this is the perfect platform for you. Come on and sweat it out for glory.',
            'Basketball is a limited contact sport played on a rectangular court. It will be played as a team sport with five players on each side.',
            'Volleyball is a team sport in which two teams of six players are separated by a net. The event will be conducted in Round Robin Format.',
            'Badminton is a racquet sport played using racquets to hit a shuttlecock across a net. The sport is played between two (“Singles Match”) or four (“Doubles Match”) people',
            'Table tennis, also known as ping-pong, is a sport in which two or four players hit a lightweight ball back and forth across a table using small rackets. The game takes place on a hard table divided by a net.',
            "In this game, a single player on offence, referred to as a 'raider' is supposed to run into the opposing team's half of a court, tag out as many of their defenders as possible, and return to their own half of the court.",
            'Its origin can be traced to the game of Shatranj in our country. HBTU is carrying the legacy of this game forward with great fervour.'
        ],
        eventDetails: [
            [

            ],
            [

            ],
            [
                'There will be 8 tentative teams participating in tournament.',
                'Each team will play 3 league matches.', 
                'There are  20 overs per side.',
                'Each bowler is restricted to maximum of 4 overs.',
                'Fielding restrictions in the 1 - 6 overs only 2 fielders allowed outside of circle.',
                'Field ristriction for 7 – 20 overs maximum 5 fielders allowed outside of circle.',
                'There will be extra run for wide ,noball,bye,legbye.',
                'There will be freehit for noball. ',
                'Each sides has 80 minutes to get through 20 overs there is 15 minutes innings break. ',
                'Rest details will be given prior to each match (if necessary).'
            ],
        ],
        eventRules: [
            [

            ],
            [

            ],
            [
                'The tournament comprises of league matches in T20 format.',
                'Each team can have squad of 15 players.',
                'The playing 11 cannot be changed once submitted before the match.',
                'The captain needs to give a list of the players while submitting the tournament form.',
                'No player can participate from two teams. If this happen, it would lead to the disqualification of both the teams.',
                'In case of a tie, super over will decide the winner as per ICC rule.',
                'During play, umpire’s every decision is final. There will be no discussion with umpire`s decision.'
            ]
        ],
        eventCoordinators: [
            [
                {
                    name: 'Rishabh Yadav',
                    phone: '7390959929'
                },
                {
                    name: 'Siddhant Singh',
                    phone: '8920902715'
                },
                {
                    name: 'Nidhi Rajput',
                    phone: '9457125075'
                },
                {
                    name: 'Kanchan Rathore',
                    phone: '8299740931'
                }
            ],
            [
                {
                    name: 'Rishabh Yadav',
                    phone: '7390959929'
                },
                {
                    name: 'Siddhant Singh',
                    phone: '8920902715'
                },
                {
                    name: 'Nidhi Rajput',
                    phone: '9457125075'
                },
                {
                    name: 'Kanchan Rathore',
                    phone: '8299740931'
                }
            ],
            [
                {
                    name: 'Anurag Verma',
                    phone: '7408339774'
                },
                {
                    name: 'Gaurav Lakhotia',
                    phone: '7908339774'
                }
            ],
            [
                {
                    name: 'Abhishek Singh',
                    phone: '7905479796'
                },{
                    name: 'Kavish Rana',
                    phone: '9599304977'
                }
            ],
            [
                {
                    name: 'Virat Verma',
                    phone: '7905273101'
                },
                {
                    name: 'Krishanveer',
                    phone: '7984421162'
                },
                {
                    name: 'Anushka Omar',
                    phone: '--'
                }
            ],
            [
                {
                    name: 'Priyansh Chaudhary',
                    phone: '7053929019'
                },
                {
                    name: 'Ankul Verma',
                    phone: '9198688901'
                }
            ],
            [
                {
                    name: 'Shashank Shukla',
                    phone: '8188867749'
                },
                {
                    name: 'Adarsh Singh',
                    phone: '8707293800'
                },
                {
                    name: 'Utkarsh Mavi',
                    phone: '9897962406'
                },
                {
                    name: 'Ritika Maurya',
                    phone: '6306618915'
                }
            ],
            [
                {
                    name: 'Shruti Raypa',
                    phone: '8318807207'
                },
                {
                    name: 'Utkarsh',
                    phone: '9634968591'
                }
            ],
            [
                {
                    name: 'Vikrant Singh',
                    phone: '8433435260'
                },
                {
                    name: 'Aryaman Gupta',
                    phonr: '9682650783'
                }
            ],
            [
                {
                    name: 'Prabhat',
                    phone: '7521013292'
                },
                {
                    name: 'Sajal Keshri',
                    phone: '9695589617'
                }
            ]
        ]
    }

    renderEvents = () => {
        return this.state.eventsName.map(( el, index) => {
            return(
                <div  key={index} className='event-box'>
                    <div className='event-image'>
                        <img src={this.state.eventImages[index]} alt='Cricket' />
                    </div>
                    <span className='event-title'>{el}</span>
                    <span className='event-description'>{this.state.eventDescription[index]}</span>
                    <button className='button type1' onClick={() => this.onEventClick(index)}>Know More</button>
                </div>
            )
        })
    }

    onEventClick = (index) => {
        this.setState({ eventView: true, currentEvent: index })
    }

    eventClose = () => {
        this.setState({ eventView: false})
    }

    render(){
        return(
        <>
        {this.state.eventView && <EventViewer 
            eventClose={this.eventClose}
            eventName ={this.state.eventsName[this.state.currentEvent] } 
            eventDetails={this.state.eventDetails[this.state.currentEvent]} 
            eventRules = {this.state.eventRules[this.state.currentEvent]} 
            contacts = {this.state.eventCoordinators[this.state.currentEvent]} 
            eventType = {this.state.eventType[this.state.currentEvent]} />}
            <div className='section-events'>
                <img className='blob' src={blobImage} alt='Blob skyblue' />
                <div className='section-events--heading'>
                    Events
                </div>
                <div className='events-container'>
                    {this.renderEvents()}
                </div>
                <div className='events-help'>
                    For any Help/Assistance, Feel free to Contact: <br />
                    <span>Divyanshu Singh 
                        <a href='tel: +91 91706 62550'>9170662550</a>
                    </span>
                    <span>
                        Somendra Tripati 
                        <a href='tel: +91 96966 19364'>9696619364</a>
                    </span>
                </div>
            </div>
        </>
        )
    }
}

export default Events;