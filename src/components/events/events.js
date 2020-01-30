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
        loading: true,
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
                "Modern day men's athletics includes the following activities:",
                '100 metres',
                '200 metres',
                '400 metres',
                '800 metres',
                '1500metres',
                '4 × 100 metres Relay',
                '4 × 400 metres Relay',
                'High jump',
                'Long jump',
                'Shotput',
                'Discus throw',
                'Javelin throw'
            ],
            [
                "Modern day men's athletics includes the following activities:",
                '100 metres',
                '200 metres',
                '400 metres',
                '800 metres',
                '4 × 100 metres Relay',
                'Long jump',
                'Shotput',
                'Discus throw',
                'Javelin throw'
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
            [
                'Team must comprise of minimum 11 and maximum 15 players.',
                'Each team must have their own kits which should include the following (tshirt, shorts, football cleats, shin guard, socks).',
                'Goalkeepers from both sides should wear a kit that will distinguish them from the outfield players and the referees.',
                'Organizing institute will not be responsible for any misplaced part of the kit.'
                
            ],
            [
                "Teams will be divided into two pools Pool First' and 'Pool Second consisting of 4 tears each through lottery system.",
                'Pool First will consist of teams A B, C and D Pool Second will consist of teams E, F, G and H.',
                'Matches will be played on league basis within the pool.',
                'Top two teams from each pool will qualify for the semifinals (Pool First-Team 1 Team 2 and Pool Second - Team 3, Team 4).',
                'The top team from each pool will play the second team from the other pool on knockout basis for a spot in the finals (Team 1 vs Team 4, Team 2 vs Team 3).',
                'The two finalists will compete for the top spot.'
            ],
            [
                'There should be 10 members in each team.',
                'It is a league tournament.',
                'Each match is of 3 sets.',
                'Each set is of 21 points.',
                'Semifinals and final will be of 3 sets(25 points each).'
            ],
            [
                'Each Clash (between teams) will have 3 matches',
                'In case of tie during league stage :-',
                ' 1.  In case of tie (in number of matches won) between two teams, the winner of their match will proceed to the next round.',
                ' 2.  In case of tie between more than two teams, the difference of team score between each team will be considered (team with bigger margin would proceed to the next round).If tie still continues the difference in scoreline of each match would be considered for the decision.',
                'Maximum of 1 team per college',
                'Each team must consist of a minimum of 3 to maximum 5 players in a men’s team and a minimum of 2 to maximum of 4 players in a women’s team.',
                'Only one player can play a maximum of two matches.'
            ],
            [
                'The rules of the tournament of the International Table Tennis Federation as adopted from time to time by the Table Tennis Federation of India shall apply unless otherwise modified.',
                "Men's league consists of two singles and one double's match .",
                "Women's league consists of two singles and one double's match .",
                "Each men's team will have maximum 3 boys and minimum 2 boys .",
                "Each women's team will have maximum 3 girls and minimum 2 girls .",
                "The teams can decide who all from thier team will be playing :\
                *Singles(boys)\
                *Doubles(boys)\
                *Singles(girls)\
                *Doubles(girls)"
            ],
            [
                "The teams would be divided into two groups consisting of 3 team each",
                "Teams would play 2 match each, in the qualifying stage, among their respective groups",
                "The top teams from each group will compete in Final",
                "Each qualifier match would comprise of 2 halfes of 20 minutes each with a 5 minutes break in between",
                "While the finale match would comprise of 2 halfes of 25 minutes each with a 5 minutes break in between"
            ],
            [
                "Team should be of 4 players with atleast one girl."
            ]
        ],
        eventRules: [
            [
                'Maximum player per team is 10 .',
                'Maximum 2 players from each college can take part in each track and field event.',
                'Individual player can participate in maximum 3 events.',
                'Individual player can participate in maximum 2 track events.',
                'Each individual discipline has its own specific set of rules and competitors are expected to abide by these to ensure that the competition is fair.'
            ],
            [
                'Maximum player per team is 10 .',
                'Maximum 2 players from each college can take part in each track and field event.',
                'Individual player can participate in maximum 3 events.',
                'Individual player can participate in maximum 2 track events.',
                'Each individual discipline has its own specific set of rules and competitors are expected to abide by these to ensure that the competition is fair.'
            ],
            [
                'The tournament comprises of league matches in T20 format.',
                'Each team can have squad of 15 players.',
                'The playing 11 cannot be changed once submitted before the match.',
                'The captain needs to give a list of the players while submitting the tournament form.',
                'No player can participate from two teams. If this happen, it would lead to the disqualification of both the teams.',
                'In case of a tie, super over will decide the winner as per ICC rule.',
                'During play, umpire’s every decision is final. There will be no discussion with umpire`s decision.'
            ],
            [
                'All teams must report 30-45 Minutes before the scheduled time. Penalty will be charged by the referees if the team is late.',
                'The referee’s decision will be final in all situations.',
                'The tournament will be of league format.',
                'Teams are liable to disqualification if any of their player is found to be guilty of any misconduct on or off the pitch.'
            ],
            [
                'Each match will consist of 8 minute quarters except for the finals which willconsist of 10 minute quarters.',
                'All games will be played as per latest FIBA basketball rules.',
                'Maximum players in boys team is 12 and in girls team is 8.',
                'Remaining rules will be informed before the match.',
                'The decision of the referees will be considered final.'
            ],
            [
                'Basic Volleyball Rules will be followed.',
                'The decision of the referees will be considered final.',
                'Rest details will be given prior to each match.(if necessary).'
            ],
            [
                'All players should come in proper kits.',
                'Interchange of players between two teams will lead to serious consequences and in that case the decision of the referee will be final.',
                'All the rules apart from mentioned are according to the World Badminton Federation’s rule book.',
                'Use of abusive or foul language during the play can lead to technical fouls or expulsion depending on the referee and the organisation team.',
                'Teams must arrive at the court 20 minutes before the scheduled start time.',
                'Walkover will be given to a team if the opponent team is not able to reach the ground within 15 minutes of the scheduled time.',
                'The age limit is 24.',
                'The decision of the referee and organizing committee will be final in all case.'
            ],
            [
                "Each match will be played following a best of five games format, based with each game of 11 points.",
                "In case of tie during league stage :-",
                "In case of tie (in number of matches won) between two teams, the winner of their match will proceed to the next round.",
                "In case of tie between more than two teams, the difference of team score between each team will be considered (team with bigger margin would proceed to the next round).If tie still continues the difference in score line of each match would be considered for the decision.",
                "The decision of the referees and the umpires will be final and binding."
            ],
            [
                "Standard rules of Kabaddi will be followed",
                "The decision of the referees and the umpires will be final and binding."

            ],
            [
                "Walk over will be given after 15 minutes.",
                "Each player will be provided with 30 minutes plus 20 second increment from move 1.",
                "Tournament Rules Tournament will be conducted as per FIDE LAWS of chess."
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
                    phone: '9682650783'
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