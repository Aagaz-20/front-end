import React from "react";
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';


import borderImage from '../../images/border-green.png';
import Image from '../../images/eventsImages/athletics-men.jpg';

class Gallery extends React.Component{
    params = {
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        // spaceBetween: 30
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 2.3,
        spaceBetween: 0,
        speed: 600,
        loop: true,
        keyboard: {
      
              enabled: true,
      
            },
        // keyboardControl: true,
        // paginationClikable:true,
        // nextButton: '#banner .swiper-button-next',
        // prevButton: '#banner .swiper-button-prev',
        coverflowEffect: {
          rotate: 60,
          stretch: 0,
          depth: 700,
          modifier: 1,
          slideShadows : true,
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          }
    }

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
                    <div className='border'>
                        <div class = "inner-cutout1">
                            <Swiper {...this.params}>
                                <div className='slide'>
                                <img className='swiper-image' src={Image} alt='Gallery' />
                                </div>
                                <div className='slide'>
                                <img className='swiper-image' src={Image} alt='Gallery' />
                                </div>
                                <div className='slide'>
                                <img className='swiper-image' src={Image} alt='Gallery' />
                                </div>
                                <div className='slide'>
                                <img className='swiper-image' src={Image} alt='Gallery' />
                                </div>
                                <div className='slide'>
                                <img className='swiper-image' src={Image} alt='Gallery' />
                                </div>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Gallery;