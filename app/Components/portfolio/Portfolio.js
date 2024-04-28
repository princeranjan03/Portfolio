"use client"

import React, { useState } from 'react';
import "./Portfolio.css";
import Menu from './Menu';

const Portfolio = () => {

  const [Items,setItems] = useState(Menu)

  const filterItem = (categoryItem) => {
    const updatedItems = Menu.filter((curElem) => {
      return curElem.category === categoryItem;
    })

    setItems(updatedItems);
  }
  return (
    <section className='work container section' id='work'>
      <h2 className='section__title'>Projects</h2>
      <div className='work__container grid'>

      {Items.map((elem) => {
        const{id,Image, title, category} = elem;
        return (
          <div className='work__card' key={id}>
            <div className='work__thumbnail'>
              <img src={Image} alt="" className='work__img'/>
              <div className='work__mask'></div>
            </div>

            <span className='work__category'>{category}</span>
            <h3 className='work__title'>{title}</h3>
            <a href="https://github.com/princeranjan03" className="work__button">
            <i className="fa-brands fa-github"></i>
            </a>
              <i className='icon-link work__button-icon'></i>
              {/* <i className="fa-brands fa-github"></i> */}
            </div>
        )
      })}

      </div>
    </section>
  )
}

export default Portfolio