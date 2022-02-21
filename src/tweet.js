import React from "react";
import './App.css';
function Tweet(props){
    return(
        <div className="tweet">
            <h3>{props.name}</h3>
            <p>{props.no}</p>
            <h3>{props.rank}</h3>
        </div>
    );

}
export default Tweet;