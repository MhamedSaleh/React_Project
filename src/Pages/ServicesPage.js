import React from 'react';
import './ServicesPage.css';
import Services from '../components/Services/Services';
class ServicesPage extends React.Component{
    render(){
        return(
            <div className="ServicesPage_">
            <Services />
            </div>
        )
    }
}
export default ServicesPage
