import React from 'react';
import { footeritems } from "./footerlinks";
import rowaadurl from '../../assets/rowaad.png';
import logourl from '../../assets/logo.png';
import './Footer.css';
class Footer extends React.Component{
    render(){
        return(
            <nav className="footerItems">
               <div className="footer-logo">
                    <img src={logourl} />
               </div>
               <div className="title">
                   <h1>روابط</h1>
                </div>
                <div className="links">
                    <ul>
                        {footeritems.map((item,index) =>{
                            return(
                                <li key={index}>
                                    <a className={item.cName} href={item.url}>
                                        {item.title}
                                    </a>
                                </li>
                            )
                        })}   
                    </ul>
                </div>
                <div className="bottom">
                <p>
                    <span>جميع الحقوق محفوظة لـ</span> مؤسسة حكاية حُلم</p>
                    <p>الموقع يعمل على الاجهزة الكفية بدقة عالية</p>
                    <a href="http://www.rh.net.sa" target="_blank"  data-toggle="tooltip" title="" data-original-title="تصميم وتطوير">
                    <img src={rowaadurl} />
                    </a>
                </div>
            </nav>
        )
    }
}
export default Footer
