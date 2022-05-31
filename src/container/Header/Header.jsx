import React from 'react';
import './Header.css';

import { SubHeading } from '../../components'
import { images } from '../../constants'


const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title="Chase the new flavour" />
      <h1 className='app__header-h1'>The Key to Fine Dining</h1>
      <p className='p__opensans margin-2rem' >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, labore consequatur explicabo eveniet nostrum molestiae perspiciatis minus facere? Voluptatibus quidem minus beatae recusandae numquam quasi officia odit dolore molestias voluptas?
      </p>
      <button type='button' className='custom__button'>Explore Menu</button>
    </div>

    <div className='app__wrapper_img'>
      <img src={images.welcome} alt="header" />
    </div>
  </div>
);

export default Header;
