import React from 'react';
import { Testmonialitems } from "./Testmonialitems";
import './Testmonial.css';
import Slider from "react-slick";
class Testmonial extends React.Component {
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
            <nav className="Testmonialitems">
                <div className="title">
                    <h2>آراء العملاء</h2>
                </div>
                <div className="item">
                    <Slider {...settings}>
                        {Testmonialitems.map((item,index) => (
                                <div key={index}  className={item.cName}>
                                    <div className="content">
                                        <p className="words">
                                            {item.content}
                                        </p>
                                        <p className="auther">
                                            {item.title}
                                        </p>
                                    </div>
                                </div>
                                )
                            )} 
                    </Slider>  
                </div>
            </nav>
        )
    }
}
export default Testmonial
