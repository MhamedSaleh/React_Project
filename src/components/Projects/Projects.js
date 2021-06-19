import React from 'react';
import { Projectsitems } from "./Projectsitems";
import './Projects.css';
import Slider from "react-slick";
class Projects extends React.Component {
    render(){
        const settings = { 
            dots: true, 
            infinite: true, 
            speed: 500, 
            slidesToShow: 3,
            slidesToScroll: 3 ,
            autoplay: true,
            autoplaySpeed: 2000,
            };
        return(
            <nav className="Projectsitems">
                <div className="title">
                    <h2>مشاريعنا</h2>
                    <p>تنظيم المعارض والمؤتمرات</p>
                </div>

                <div className="items"> 
                 <Slider {...settings}>
                    {Projectsitems.map((item,index) => (
                            <div key={index}>
                                <div className={item.cName}>
                                <div className="image">
                                    <img src={item.img} />
                                </div>
                                <div className="content">
                                    <p>
                                        {item.content}
                                    </p>
                                    <a href={item.url}>
                                        {item.title}
                                    </a>
                                </div>
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
export default Projects
