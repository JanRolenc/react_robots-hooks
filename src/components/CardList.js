import React from "react";
import Card from "./Card";
import "./CardList.css"

const CardList = ({ robots }) => {
    const cardArray = robots.map((user, index) => {
        return (
            <Card
                key={robots[index].id}
                id={robots[index].id}
                name={robots[index].name}
                email={robots[index].email}
            />
        );
    })
    return (
        <div className="cardList">
            {cardArray}
        </div>
    );
}
export default CardList;