import React from "react";
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';


import borderImage from '../../images/border-green.png';
import gallery1 from '../../images/gallery/gallery1.jpg';
import gallery2 from '../../images/gallery/gallery2.jpg';
import gallery3 from '../../images/gallery/gallery3.jpg';
import gallery4 from '../../images/gallery/gallery4.jpg';
import gallery5 from '../../images/gallery/gallery5.jpg';
import gallery6 from '../../images/gallery/gallery6.jpg';
import gallery7 from '../../images/gallery/gallery7.jpg';
import gallery8 from '../../images/gallery/gallery8.jpg';
import gallery9 from '../../images/gallery/gallery9.jpg';

class Gallery extends React.Component{
    params = {
        pagination: {
          el: '.swiper-pagination-gallery',
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
        slidesPerView: window.innerWidth < 600 ? 1.3 : 2.3,
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
                        <div className = "inner-cutout1">
                            <Swiper {...this.params} style={window.innerWidth < 600 ? {height: '200px'}: {}}>
                                <div className='slide'>
                                <img className='swiper-image' src={gallery2} alt='Gallery' />
                                </div>
                                <div className='slide'>
                                <img className='swiper-image' src={gallery1} alt='Gallery' />
                                </div>
                                <div className='slide'>
                                <img className='swiper-image' src={gallery3} alt='Gallery' />
                                </div>
                                <div className='slide'>
                                <img className='swiper-image' src={gallery4} alt='Gallery' />
                                </div>
                                <div className='slide'>
                                <img className='swiper-image' src={gallery5} alt='Gallery' />
                                </div>
                                <div className='slide'>
                                <img className='swiper-image' src={gallery6} alt='Gallery' />
                                </div>
                                <div className='slide'>
                                <img className='swiper-image' src={gallery7} alt='Gallery' />
                                </div>
                                <div className='slide'>
                                <img className='swiper-image' src={gallery8} alt='Gallery' />
                                </div>
                                <div className='slide'>
                                <img className='swiper-image' src={gallery9} alt='Gallery' />
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