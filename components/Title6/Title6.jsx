import React, { useEffect, useRef, useState } from "react";
import './Title6.css'
import cards_data5 from '../../assets/cards/Cards_data5.js'


const Title6Cardes = () => {

  return (
    <div className="title6-cards">
      <h2>Movies & TV Shows Dubbed in Tamil</h2>
      <div className="cards-list">
        {cards_data5.map((card, index)=>{
          return <div className="card" key={index}>
            <img src={card.image} alt="" />
            <p>{card.name}</p>
          </div>
        })}
      </div>
    </div>
  )
}
export default Title6Cardes