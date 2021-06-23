import React from 'react';
import {Link} from 'react-router-dom';
import { IconContext } from "react-icons";
import { GrMapLocation } from "react-icons/gr";
import { FaWhatsapp } from "react-icons/fa";
import { ImMail2 }from "react-icons/im";
import './SubscriptionPage.css';
import contacturl from './../assets/contact.jpg';
import Contactform from '../components/Forms/ContactForm';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';

class ContactPage extends React.Component{
    render(){
        return(
           <><Breadcrumb />
               <div className="SubscriptionPage">
                   <div className="items">
                       <div className="item">
                            <IconContext.Provider value={{ className : "top-icons" }} >
                            <GrMapLocation />
                            </IconContext.Provider>
                            <p className="visit">قم بزيارتنا</p>
                            <Link to=''><p>الرياض المملكة العربية السعودية</p></Link>
                       </div>
                       <div className="item">
                       <IconContext.Provider value={{ className : "top-icons" }} >
                            <FaWhatsapp />
                            </IconContext.Provider>
                            <p className="visit">اتصل بنا</p>
                            <p><Link to=''>Ph : 012345678</Link></p>
                            <Link to=''>Fax : 0976543543</Link>
                       </div>
                       <div className="item">
                            <IconContext.Provider value={{ className : "top-icons" }} >
                            <ImMail2 />
                            </IconContext.Provider>
                            <p className="visit">راسلنا</p>
                            <Link to='/'>info@dream,com</Link>
                       </div>
                   </div>
                <div className="contactForms">
                    <div className="right">
                        <Contactform />
                    </div>
                    <div className="left">
                     
                            <img src={contacturl} />
                        
                    </div>
                </div>
                </div>
                </>
        )
    }
}
export default ContactPage
