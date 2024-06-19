import React, { useEffect, useRef, useState } from "react";
import './Title3.css'
import cards_data2 from '../../assets/cards/Cards_data2.js'


const Title3Cardes = () => {

  return (
    <div className="title3-cards">
      <h2>Only on Netflix</h2>
      <div className="cards-list">
        {cards_data2.map((card, index)=>{
          return <div className="card" key={index}>
            <img src={card.image} alt="" />
            <p>{card.name}</p>
          </div>
        })}
      </div>
    </div>
  )
}
export default Title3Cardes