import React, { useEffect, useRef, useState } from "react";
import './Title7.css'
import cards_data6 from '../../assets/cards/Cards_data6.js'


const Title7Cardes = () => {

  return (
    <div className="title7-cards">
      <h2>Hollywood Movies</h2>
      <div className="cards-list">
        {cards_data6.map((card, index)=>{
          return <div className="card" key={index}>
            <img src={card.image} alt="" />
            <p>{card.name}</p>
          </div>
        })}
      </div>
    </div>
  )
}
export default Title7Cardes