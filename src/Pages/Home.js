import React from 'react';
import MainSlider from '../components/MainSlider/MainSlider';
import About from '../components/About/About';
import Services from '../components/Services/Services';
import Projects from '../components/Projects/Projects';
import Testmonial from '../components/Testmonial/Testmonial';

class Home extends React.Component{
    render(){
        return(
          <div className="Home">
               <MainSlider />
                <About />
                <Services />
                <Projects />
                <Testmonial />
          </div>  
        )
    }
}
export default Home
