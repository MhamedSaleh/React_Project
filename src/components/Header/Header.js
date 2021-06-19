import React from 'react';
import { menuitems } from "./menuitems";
import { socialsItem } from "./socialsItem"
import logourl from '../../assets/logo.png';
import './Header.css';
class Header extends React.Component{
    render(){
        return(
            <nav className="navbarItems">
                <div className="top">
                    <div className="menu_icon">
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18.018" height="14.785" viewBox="0 0 21.018 17.785">
                          <g id="menu_8_" data-name="menu (8)" transform="translate(-23.276 -26.014)">
                            <g id="Group_43" data-name="Group 43" transform="translate(23.276 34.098)">
                              <g id="Group_42" data-name="Group 42">
                                <path id="Path_20" data-name="Path 20" d="M156.21,232h-19.4a.808.808,0,1,0,0,1.617h19.4a.808.808,0,1,0,0-1.617Z" transform="translate(-136 -232)" fill="#dfb36a"/>
                              </g>
                            </g>
                            <g id="Group_45" data-name="Group 45" transform="translate(23.276 42.182)">
                              <g id="Group_44" data-name="Group 44">
                                <path id="Path_21" data-name="Path 21" d="M156.21,312h-19.4a.808.808,0,1,0,0,1.617h19.4a.808.808,0,1,0,0-1.617Z" transform="translate(-136 -312)" fill="#dfb36a"/>
                              </g>
                            </g>
                            <g id="Group_47" data-name="Group 47" transform="translate(23.276 26.014)">
                              <g id="Group_46" data-name="Group 46">
                                <path id="Path_22" data-name="Path 22" d="M156.21,152h-19.4a.808.808,0,0,0,0,1.617h19.4a.808.808,0,0,0,0-1.617Z" transform="translate(-136 -152)" fill="#dfb36a"/>
                              </g>
                            </g>
                          </g>
                        </svg></a>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14.607" height="14.607" viewBox="0 0 17.607 17.607">
                                <path id="search_5_" data-name="search (5)" d="M12.921,11.367a7.179,7.179,0,1,0-1.556,1.556l4.686,4.686,1.556-1.556Zm-5.768.74A4.952,4.952,0,1,1,12.1,7.155,4.957,4.957,0,0,1,7.153,12.107Z" transform="translate(0 -0.002)" fill="#dfb36a"/>
                            </svg>
                        </a>
                    </div>
                    <div className="nav-logo">
                        <img src={logourl} />
                    </div>
                    <div className="socials">
                        <ul>
                            {socialsItem.map((item,index) =>{
                                return(
                                    <li key={index}>
                                        <a className={item.title} href={item.url} target="_blank">
                                            {item.img}
                                        </a>
                                    </li>
                                )
                            })}   
                        </ul>
               </div>
               </div>
               <div className="menu_links">
                    <ul>
                        {menuitems.map((item,index) =>{
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
            </nav>
        )
    }
}
export default Header