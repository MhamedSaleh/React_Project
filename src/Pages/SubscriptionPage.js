import React from 'react';
import {Link} from 'react-router-dom';
import * as IconContext_ from "react-icons/gr";
import * as IconContext__ from "react-icons/fa";
import * as IconContext___ from "react-icons/im";
import './SubscriptionPage.css';
import contacturl from './../assets/contact.jpg';
import Contactform from '../components/Forms/ContactForm';

class SubscriptionPage extends React.Component{
    render(){
        return(
               <div className="SubscriptionPage">
                   <div className="items">
                       <div className="item">
                            <IconContext_.GrMapLocation value={ { style: { color: '#394269', size: '50px' } } }/>
                            <p>قم بزيارتنا</p>
                            <Link to=''><p>الرياض المملكة العربية السعودية</p></Link>
                       </div>
                       <div className="item">
                            <IconContext__.FaWhatsapp value={{ color: '#394269', size: '50px' }}/>
                            <p>اتصل بنا</p>
                            <p><Link to=''>Ph : 012345678</Link></p>
                            <Link to=''>Fax : 0976543543</Link>
                       </div>
                       <div className="item">
                            <IconContext___.ImMail2 value={{ color: '#394269', size: '50px' }}/>
                            <p>راسلنا</p>
                            <Link to='/'>info@dream,com</Link>
                       </div>
                   </div>
                <div className="contactForms">
                    <div className="right">
                        <Contactform />
                    </div>
                    <div className="left">
                        <Link to="/">
                            <img src={contacturl} />
                        </Link>
                    </div>
                </div>
                </div>
        )
    }
}
export default SubscriptionPage
