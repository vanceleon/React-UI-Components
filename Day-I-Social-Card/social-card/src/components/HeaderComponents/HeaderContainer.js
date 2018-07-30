import React from 'react';
import './Header.css';

import ImageThumbnail from '../HeaderComponents/ImageThumbnail';
import HeaderTitle from '../HeaderComponents/HeaderTitle';
import HeaderContent from '../HeaderComponents/HeaderContent';


const HeaderContainer = () => {
    return <div className="header-container"> <ImageThumbnail /> <HeaderContent /> </div>

};
export default HeaderContainer;