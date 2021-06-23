import React from 'react';
import './ServicesPage.css';
import Services from '../components/Services/Services';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
class ServicesPage extends React.Component{
    render(){
        return(
            <><Breadcrumb />
            <div className="ServicesPage_">
            <Services />
            </div>
            </>
        )
    }
}
export default ServicesPage
