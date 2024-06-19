import React, { useEffect, useRef, useState } from "react";
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data.js'


const TitleCardes = ({title, category}) => {


  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();


  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOTlkNDZiOWNkNTU5Y2UyYjJhNzgzNThiMDJlMTFlNyIsInN1YiI6IjY2NjMzMWFlZTc1YmQ1MTQ1NTNjYTVkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sP2FAN-ZsBS5CMgXPOFzW0w_VjdegtUxvs0u_JedzaQ'
    }
  };

const handleWheel = (event)=>{
  event.preventDefault();
  cardsRef.current.scrollLeft += event.deltaY;
}

useEffect(()=>{

  fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results))
    .catch(err => console.error(err));

  cardsRef.current.addEventListener('wheel',handleWheel);
},[]) 

  return (
    <div className="titlecards">
      <h2>{title?title:"Populer on Netflix"}</h2>
      <div className="cards-list" ref={cardsRef}>
        {cards_data.map((card, index)=>{
          return <div className="card" key={index}>
            <img src={card.image} alt="" />
            <p>{card.name}</p>
          </div>
        })}
      </div>
    </div>
  )
}
export default TitleCardes