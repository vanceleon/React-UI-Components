import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle';


const HeaderContent = () => {
    return  <div className = "header-content"> <HeaderTitle /> <div className= "header-par">Let's learn React by building simple interfaces with components. Don't try to overthink it, just keep it simple and have fun. Once you feel comfortable using components you are well on you way to mastering React!</div></div>

};
export default HeaderContent;