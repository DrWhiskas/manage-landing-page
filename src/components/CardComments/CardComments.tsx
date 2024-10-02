import React from "react";
import './cardComments.css';


interface CardProps{
    img: string
    name: string
    text: string
}

export default function CardComments(){

    function buildCard({img, name, text}: CardProps){
        return <div className="card">
            
        </div>
    }

    return(
        <div className="card-comments">

        </div>
    )
}