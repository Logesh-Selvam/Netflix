import React, { useEffect, useRef, useState } from "react";
import './Title8.css'
import cards_data7 from '../../assets/cards/Cards_data7.js'


const Title8Cardes = () => {

  return (
    <div className="title8-cards">
      <h2>My List</h2>
      <div className="cards-list">
        {cards_data7.map((card, index)=>{
          return <div className="card" key={index}>
            <img src={card.image} alt="" />
            <p>{card.name}</p>
          </div>
        })}
      </div>
    </div>
  )
}
export default Title8Cardes