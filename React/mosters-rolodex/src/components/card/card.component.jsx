import React from "react";
import './card.styles.css'

export const Card = ({monster}) => {
    return (
    <div className="card-container">
        <img src={`https://robohash.org/${monster.id}?set=set2`} alt=""/>
        <h2 key={monster.id}>
        {monster.name}
        <p>{monster.email}</p>
    </h2>
    </div>
    )
}