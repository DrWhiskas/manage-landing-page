import React from "react";
import './cardComments.css';


interface CardProps{
    img: string
    name: string
    text: string
}

export default function CardComments({ img, name, text }: CardProps) {

	return (
		<div className="card">
			<img className="card__img" src={img} alt="" />
			<div className="card__container">
				<h3 className="card__container__name">{name}</h3>
				<p className="card__container__text">{text}</p>
			</div>
		</div>
	);
}