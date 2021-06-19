import React from 'react';
import './About.css';
class About extends React.Component{
    render(){
        return(
            <nav className="about">
               <div className="title">
                   <h2>من نحن</h2>
                </div>
                <div className="text">
                    <p>
                    تضم مؤسسة حكاية حلم نخبة من المحترفات والخبرات ذوات الكفاءة العالية في مجال تنظيم وإدارة المؤتمرات والمعارض والفعاليات والتسويق والعلاقات العامة وتنظيم وإدارة الحدث
                    </p>
                    <a href="#">مزيد من التفاصيل</a>
                </div>
            </nav>
        )
    }
}
export default About
