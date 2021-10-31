import React from 'react';
import "./card.css";

const Card = ({ name, email, id }) => {//puvodne bylo v zavorce props a nize const { name, email, id }; jde to ale takto jeste lip
    //const { name, email, id } = props;//pokud toto nedam, tak u promennych bych musel psat props.name, props.id ...
    return (
        <div className="card">
            <img src={`https://robohash.org/${id}?size=200x200`} alt="robots" />
            <h3 style={{ margin: "20px 0px 2px 0px" }}>{name}</h3>
            <p style={{ fontSize: "90%" }}>{email}</p>
        </div>
    );
}

export default Card;