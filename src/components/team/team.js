import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';

import blobImage from '../../images/blob-shape-yellow.svg';
import arpit from '../../images/team/arpit.jpg';
import anik from '../../images/team/anik.jpg'
import anuj from '../../images/team/anuj.jpg'
import anurag from '../../images/team/anurag.jpg'
import divya from '../../images/team/divya.jpg'
import divyanshu from '../../images/team/divyanshu.jpg'
import hardik from '../../images/team/hardik.jpg'
import richa from '../../images/team/richa.jpg'
import rikki from '../../images/team/rikki.jpg'
import shashank from '../../images/team/shashank.jpg'
import shruti from '../../images/team/shruti.jpg'
import tushar from '../../images/team/tushar.jpg'
import yashveer from '../../images/team/yashveer.jpg'
import yogi from '../../images/team/yogi.jpg'
import rigved from '../../images/team/rigved.jpg'
import vikrant from '../../images/team/vikrant.jpg'


class Team extends React.Component{
    state={
        deptMembers: [1, 3, 2, 2, 3, 2, 4, 2, 1, 3, 2, 2, 3, 2, 3],
        departments: ['Sports Secretary', 'Fest Co-ordinators', 'Organising Heads', 'Finance', 'Events', 'Publicity', 'Sports', 'Marketing', 'Web Development', 'Public Relations', 'Management', 'Design', 'Hospitality', 'Celebrity', 'Cultural'],
        startIndex: [0, 1, 4, 6, 8, 11, 13, 17, 19, 20, 23, 25, 27, 30 , 32],
        memberName: ['Shivam Kumar', 'Arpit Shahi', 'Rikki Chauhan', 'Navneet Mishra', 'Vikrant Singh', 'Yogendra Singh', 'Abhinav Tripati', 'Anuj Singh', 'Utsav Saroha', 'Divyanshu Singh', 'Somendra Tripati', 'Anik Gupta', 'Shruti Raypa', 'Anuj Vatsa','Anurag Yadav', 'Gaurav Lakhotia', 'Kavish Rana', 'Divya Mishra', 'Sudhanshu Tiwari', 'Yashveer Talan', 'Anupriya Gupta', 'Rahul Gupta', 'Saloni Maurya', 'Rigved Sambyal', 'Aryaman Gupta', 'Richa', 'Aryan Bhartiya', 'Akash Singh', 'Aayush Singh', 'Anchi Rai', 'Hardik Chauhan', 'Tushar Poonia', 'Dhruv Kaul', 'Shashank Chaudhary', 'Nikita Chaudhary'],
        memberImage: [,arpit, rikki, , vikrant, yogi, , anuj, , divyanshu, , anik, shruti, , anurag, , , divya, , yashveer, , , , rigved, , richa, , , , , hardik, tushar, , shashank ]
    }

    params={
        direction: 'vertical',
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: (index, className) => {
                return( '<span class="' + className + '">' + this.state.departments[index] + '</span>');
              }
      },
      
    }

    renderTeamTile = (index) => {
        const arr = new Array();
        for(let i = 0; i< this.state.deptMembers[index]; i++){
            arr[i] = i + this.state.startIndex[index]
        }
        
        // for(let i = startIndex[index]; i< endIndex[index]; i++){
        //     console.log(i)
        return arr.map( (el) => {
            return(
                <div key={index} className='team-tile'>
                    <img src={this.state.memberImage[el]} className='member-image' alt={this.state.memberName[el]} />
                    <span className='team-tile--name'>{this.state.memberName[el]}</span>
                    <div className='circle'></div>
                    {index === 0 ? <div className='designation'>SECRETARY</div> :<div className='designation'>HEAD</div>}
                </div>
            )
        })
        
        // }
    }

    renderDepartment = () => {
        return this.state.departments.map((el, index) => {
                // this.changeState(index);
                return(
                    <div key={index} className='team-department'>
                        <div className='department-members'>
                            {this.renderTeamTile(index)}
                            
                        </div>
                    </div>
                )
        })
    }

    changeState = (index) =>{
        this.setState({ startIndex: this.state.deptMembers[index] - 1, endIndex: this.state.departments[index] + (this.state.deptMembers[index] - 1)})
    }

    render(){
        return(
            <div className='page-team'>
                <div className='page-heading'>Contact Us</div>
                <div className='page-content'>
                    <img src={blobImage} className='blob-image' alt='Blob' />
                    <div className='team-content'>
                    <Swiper {...this.params}>
                    {this.renderDepartment()}
                    </Swiper>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Team;