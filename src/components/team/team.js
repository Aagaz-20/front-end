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
import richa from '../../images/team/richa.jpg'
import rikki from '../../images/team/rikki.jpg'
import shashank from '../../images/team/shashank.jpg'
import shruti from '../../images/team/shruti.jpg'
import tushar from '../../images/team/tushar.jpg'
import yashveer from '../../images/team/yashveer.jpg'
import yogi from '../../images/team/yogi.jpg'
import rigved from '../../images/team/rigved.jpg'
import abhinav from '../../images/team/abhinav.jpg'
import akash from '../../images/team/akash.jpg'
import anchi from '../../images/team/anchi.jpg'
import anujv from '../../images/team/anujv.jpg'
import anupriya from '../../images/team/anupriya.jpg'
import aryaman from '../../images/team/aryaman.jpg'
import aryan from '../../images/team/aryan.jpg'
import navneet from '../../images/team/navneet.jpg'
import nikita from '../../images/team/nikita.jpg'
import shivam from '../../images/team/shivam.jpg'
import aditya from '../../images/team/aditya.jpg'
import somendra from '../../images/team/somendra.jpg'
import gaurav from '../../images/team/gaurav.jpg'
import sudhanshu from '../../images/team/sudhanshu.jpg'
import ayush from '../../images/team/ayush.jpg'
import dhruv from '../../images/team/dhruv.jpg'
import vikrant from '../../images/team/vikrant.jpg'
import utsav from '../../images/team/utsav.jpg'
import saloni from '../../images/team/saloni.jpg'
import kavish from '../../images/team/kavish.jpg'
import rahul from '../../images/team/rahul.jpg'

class Team extends React.Component{
    state={
        deptMembers: [1, 3, 2, 2, 3, 2, 4, 2, 1, 3, 2, 2, 3, 2, 3],
        departments: ['Sports Secretary', 'Fest Co-ordinators', 'Organising Heads', 'Finance', 'Events', 'Publicity', 'Sports', 'Marketing', 'Web Development', 'Public Relations', 'Management', 'Design', 'Hospitality', 'Celebrity', 'Cultural'],
        startIndex: [0, 1, 4, 6, 8, 11, 13, 17, 19, 20, 23, 25, 27, 30 , 32],
        memberName: ['Shivam Kumar', 'Arpit Shahi', 'Rikki Chauhan', 'Navneet Mishra', 'Vikrant Singh', 'Yogendra Singh', 'Abhinav Tripati', 'Anuj Singh', 'Utsav Saroha', 'Divyanshu Singh', 'Somendra ', 'Anik Gupta', 'Shruti Raypa', 'Anuj Vatsa','Anurag Yadav', 'Gaurav', 'Kavish Rana', 'Divya Mishra', 'Sudhanshu', 'Yashveer Talan', 'Anupriya Gupta', 'Rahul Gupta', 'Saloni Maurya', 'Rigved Sambyal', 'Aryaman Gupta', 'Richa', 'Aryan Bhartiya', 'Akash Singh', 'Aayush Singh', 'Anchi Rai', 'Aditya Rajput', 'Tushar Poonia', 'Dhruv Kaul', 'Shashank Ch.', 'Nikita Ch.'],
        memberImage: [shivam,arpit, rikki,navneet , vikrant, yogi,abhinav , anuj, utsav, divyanshu,somendra , anik, shruti,anujv , anurag, gaurav, kavish, divya,sudhanshu , yashveer, anupriya, rahul , saloni, rigved, aryaman, richa, aryan, akash,ayush , anchi, aditya, tushar,dhruv , shashank, nikita ],
        memberContact: ['7417770521','9161370036','7985924803','9651872526','8433435260','9149030038','8318258350','8853573935','9368175868','8707267311','9696619364','8765893504', '8318807207', '9711240310', '7388109989', '7982744114', '9599304977','9044217280', '7388054780', '8126560602' , '9149225028', '8004803548', '8840722481', '8716920004', '9682650783', '8787210503', '8447855080','8533007497', '8429995182', '8004523955', '9140539044', '9870633493', '7704901919', '7668741915' , '9412226665'],
        memberInsta: ['shivam_tomar._', 'shahi_rpit','rikki_chauhan_', 'navneet_mishra09','vikrantchaudhary680' ,'thakur.yogendra_' , , 'anujsingh', 'officialutsav_99', 'divyanshu0011','_somendra', 'mr.extinct208', 'raypa_ji', 'anujvatsa99', 'anurag_yadav18', 'lokhotia_gaurav','k_rana7' ,'divya_mishra._', 'sudhanshu_tiwari._', 'yv_official_', 'apun_anups', ,'salrya_88','rigvedsambyal', , 'richasharma447','aryan.bhartiyaa', 'akashsingh976', 'aayush__singh__', 'anchirai26', 'the_adinova_', 'tushar_poonia', 'kaulmedhruv', 'shashank_chaudhary05', '__nikitachaudhary']
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
                <div key={index + el} className='team-tile'>
                    <img src={this.state.memberImage[el]} className='member-image' alt={this.state.memberName[el]} />
                    <span className='team-tile--name'>{this.state.memberName[el]}</span>
                    <div className='circle'></div>
                    {index === 0 ? <div className='designation'>SECRETARY</div> :<div className='designation'>HEAD</div>}
                    <div className='contact'>
                        <a href={`https://instagram.com/${this.state.memberInsta[el]}`} rel="noopener noreferrer" target='_blank' className="fa fa-instagram"></a>
                        <a href={`tel: ${this.state.memberContact[el]}`}>{this.state.memberContact[el]}</a>
                    </div>
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