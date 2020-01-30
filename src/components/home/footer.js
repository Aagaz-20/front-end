import React from "react";

import borderImage from '../../images/border-skyblue.svg';
import logoImage from '../../images/mainlogo-black.png';
import heartImage from '../../images/heart-icon.png';

class Footer extends React.Component{
    render(){
        return(
            <div className='section-footer'>
                <img className='border' src={borderImage} alt='Skyblue' />
                <div className='logo-image'>
                    <img src={logoImage} alt='Aagaz' />
                </div>
                <div className='map'>
                {/* <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14283.315831233478!2d80.3074236!3d26.4934515!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa632793a3bcf1b33!2sHarcourt%20Butler%20Technical%20University!5e0!3m2!1sen!2sin!4v1579990117349!5m2!1sen!2sin" 
                    width="200" 
                    height="200" 
                    frameborder="0" 
                    style={{ border: '1px solid white'}} 
                    allowfullscreen="">
                </iframe> */}
                </div>
                {/* <div className='social-media-icons'>
                    
                    <a href="https://twitter.com/hbtusports" rel="noopener noreferrer" target='_blank' className="fa fa-twitter"></a>
                    <a href="https://twitter.com/hbtusports" rel="noopener noreferrer" target='_blank' className="fa fa-youtube"></a>
                    <a href="https://instagram.com/hbtusports" rel="noopener noreferrer" target='_blank' className="fa fa-instagram"></a>
                    <a href="https://snapchat.com/hbtusports" rel="noopener noreferrer" target='_blank' className="fa fa-snapchat-ghost"></a>
                </div> */}
                <div className='contacts-container'>
                    <span className='contacts-container--heading'>Support</span>
                    <span className='contacts'>Organisers // <a href='tel: +91 91490 30038'>9149030038</a></span>
                    <span className='contacts'>Hospitality // <a href='tel: +91 8533007497'>8533007497</a> </span>
                    <span className='contacts'>Events // <a href='tel: +91 91706 62550'>9170662550</a></span>
                    <span className='contacts'>Website // <a href='tel: +91 8126560602'>8126560602</a></span>
                    <span className='contacts'>Public Relations // <a href='tel: +91 9149225028'>9149225028</a></span>
                </div>
                <div className='help-container'>
                    <span className='help-container--heading'>
                        Get Direction
                    </span>
                    <span className='help-container--content'><a href='https://goo.gl/maps/D1vKAZ3y8Ac58JkA8' target='_blank' rel="noopener noreferrer">HBTU, Kanpur</a></span>
                    <span className='help-container--heading'>For Regular Updates Follow us on </span>
                    <span className='help-container--content'><a href="https://instagram.com/hbtusports" rel="noopener noreferrer" target='_blank' className="fa fa-instagram"></a></span>
                    <span className='help-container--content'><a href="https://facebook.com/hbtusports" rel="noopener noreferrer" target='_blank' className="fa fa-facebook"></a></span>
                </div>
                <div  className='dev-credits'>
                    Made with <img src={heartImage} alt='love' /> by WEB DEVELOPMENT TEAM, AAGAZ 2020
                </div>
            </div>
        )
    }
}

export default Footer;