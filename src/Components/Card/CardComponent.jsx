import React from "react";
import './CardStyles.css'
const CardComponent = ({student}) => {
  return (
    <div className="card-container">
        <img alt="student" src={`https://robohash.org/${student.id}?set=set2&size=180x180`}/>
        <h2>{student.name}</h2>
        <p>{student.email}</p>
    </div>
  );
};

export default CardComponent;
