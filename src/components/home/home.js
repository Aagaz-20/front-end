import React from "react";

import Main from './main';
import About from './about';
import Timeline from './timeline';
import Gallery from './gallery';
import Footer from './footer';

class Home extends React.Component{
    render(){
        return(
            <div className='body-wrapper'>
                <Main />
                <About />
                <Timeline />
                <Gallery />
                <Footer />
            </div>
        )
    }
}

export default Home;