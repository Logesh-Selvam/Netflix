import React, { useEffect, useRef, useState } from "react";
import './Title5.css'
import cards_data4 from '../../assets/cards/Cards_data4.js'


const Title5Cardes = () => {

  return (
    <div className="title5-cards">
      <h2>Top Pics for You</h2>
      <div className="cards-list">
        {cards_data4.map((card, index)=>{
          return <div className="card" key={index}>
            <img src={card.image} alt="" />
            <p>{card.name}</p>
          </div>
        })}
      </div>
    </div>
  )
}
export default Title5Cardes