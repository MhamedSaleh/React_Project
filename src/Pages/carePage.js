import React from 'react';
import { GalleryItems } from "../components/Gallery/GalleryItems";
import './imagesPage.css';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
class CarPage extends React.Component{
    render(){
        return(
            <><Breadcrumb />
               <div className="imagesPage">
                  <div className="items">
                      {GalleryItems.map((item,index) =>{
                            return(
                                <div key={index} className="item">
                                    <a href={item.url}>
                                        <div className="image">
                                            <img src={item.img} />
                                        </div>
                                    </a>
                                </div>
                            )
                        })} 
                      </div>
                  </div>
                  </>
        )
    }
}
export default CarPage
