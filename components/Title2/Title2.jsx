import React, { useEffect, useRef, useState } from "react";
import './Title2.css'
import cards_data1 from '../../assets/cards/Cards_data1.js'


const Title2Cardes = () => {

  return (
    <div className="title2-cards">
      <h2>Blockbuster Movies</h2>
      <div className="cards-list">
        {cards_data1.map((card, index)=>{
          return <div className="card" key={index}>
            <img src={card.image} alt="" />
            <p>{card.name}</p>
          </div>
        })}
      </div>
    </div>
  )
}
export default Title2Cardes