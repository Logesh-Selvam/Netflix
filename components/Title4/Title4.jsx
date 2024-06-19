import React, { useEffect, useRef, useState } from "react";
import './Title4.css'
import cards_data3 from '../../assets/cards/Cards_data3.js'


const Title4Cardes = () => {

  return (
    <div className="title4-cards">
      <h2>Upcoming</h2>
      <div className="cards-list">
        {cards_data3.map((card, index)=>{
          return <div className="card" key={index}>
            <img src={card.image} alt="" />
            <p>{card.name}</p>
          </div>
        })}
      </div>
    </div>
  )
}
export default Title4Cardes