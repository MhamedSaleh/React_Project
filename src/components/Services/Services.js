import React from 'react';
import { Servicesitems } from "./Servicesitems";
import './Services.css';

class Services extends React.Component {
    render(){
        return(
            <nav className="ServicesItems">
                <div className="title">
                    <h2>خدمتنا</h2>
                </div>
                <div className="items">
                    {Servicesitems.map((item,index) => (
                            <div key={index}  className={item.cName}>
                                <div className="image">
                                    <img src={item.img} />
                                </div>
                                <div className="content">
                                    <a href={item.url}>
                                        {item.title}
                                    </a>
                                    <p>
                                        {item.content}
                                    </p>
                                </div>
                            </div>
                            )
                        )}   
                </div>
            </nav>
        )
    }
}
export default Services
