import React from 'react';
import { Link } from 'react-router-dom';

import mainLogoImage from '../../images/mainlogo2.png'

class MainLogo extends React.Component{
    render(){
        return(
            <div className='logo-container'>
                <Link to='/' className='link'>
                <img src={mainLogoImage} alt='Aagaz' />
                </Link>
                
            </div>
        )
    }
}

export default MainLogo;