import React from "react";
import './main.css'

import Illustrations from '../../assets/illustration-intro.svg'

export default function Main(){
    return (
			<section className="main">
				<div className="main__container">
					<div className="main__container__build">
						<h1 className="main__container__build__title">
							Bring everyone together to build better products
						</h1>
						<p className="main__container__build__text">
							Manage makes it simple for software teams to plan day-to-day tasks
							while keeping the larger team goals in view.
						</p>
						<button className="btn">Get Started</button>
					</div>
                    <div className="main__container__illustrations">
                        <img src={Illustrations} alt="illustrations" />
                    </div>
				</div>
			</section>
		);
}