import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Slideritems } from "./Slideritems";
import Slider from "react-slick";
import './MainSlider.css';

class MainSlider extends React.Component{
    render(){
        const settings = { 
            dots: true, 
            infinite: true, 
            speed: 500, 
            slidesToShow: 1,
            slidesToScroll: 1 ,
            autoplay: true,
            autoplaySpeed: 2000,
            };
        return(
           <div className="slider" >
              <Slider {...settings}>
                {Slideritems.map((item,index) =>{
                            return(
                                <div key={index}>
                                    <a href={item.url}>
                                        <div className="image">
                                            <img src={item.img} />
                                        </div>
                                        <div className="content">
                                            <h2>{item.title}</h2>
                                            <p>{item.content}</p>
                                        </div>
                                    </a>
                                </div>
                            )
                        })} 
            </Slider>
            </div>
        )
    }
}
export default MainSlider
