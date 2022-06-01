import React from 'react';

import { SubHeading, MenuItem } from '../../components'
import { images, data } from '../../constants'

import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding' id='menu'>
    <div className='app__specialMenu-title'>
      <SubHeading title="Menu that fits your Palatte" />
      <h1 className='headtext__cormorant'>Today's Special</h1>
    </div>

    <div className='app__specialMenu-menu'>
      <div className='app__specialMenu-menu_wine flex__center'>
        <p className='app__specialMenu-menu_header'>Wine & Beer</p>
        <div className='app__specialMenu-menu_items'>
          {data.wines.map((wine, index) => (
            <MenuItem key={index} title={wine.title} price={wine.price} tags={wine.tags} />
          ))}
        </div>
      </div>

      <div className='app__specialMenu-menu_img'>
        <img src={images.menu} alt='menu' />
      </div>

      <div className='app__specialMenu-menu_cocktails flex__center'>
        <p className='app__specialMenu-menu_header'>Cocktails</p>
        <div className='app__specialMenu-menu_items'>
          {data.cocktails.map((cocktail, index) => (
            <MenuItem key={index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
          ))}
        </div>
      </div>

    </div>
    <div className='app__margin-t15px'>
      <button type='button' className='custom__button'> View more </button>
    </div>
  </div>
);

export default SpecialMenu;
