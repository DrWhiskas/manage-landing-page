import React from "react";
import './about.css'

export default function About(){
    return (
			<section className="about">
				<div className="about__container">
					<div className="about__container__main">
						<h1 className="about__container__title">
							What's different about Manage?
						</h1>
						<p className="about__container__text">
							Manage provides all the functionality your team needs, without the
							complexity. Our software is tailor-made for digital product teams.
						</p>
					</div>
					<ul className="about__container__list">
						<li>
							<div className="about__container__list__header">
								<div className="about__container__list__number">01</div>
								<h4 className="about__container__list__title">
									Track company-wide progress
								</h4>
							</div>
							<p>
								See how your day-to-day tasks fit into the wider vision. Go from
								tracking progress at the milestone level all the way done to the
								smallest of details. Never lose sight of the bigger picture
								again.
							</p>
						</li>
						<li>
							<div className="about__container__list__header">
								<div className="about__container__list__number">02</div>
								<h4 className="about__container__list__title">
									Advanced built-in reports
								</h4>
							</div>
							<p>
								Set internal delivery estimates and track progress toward
								company gaols. Our customisable dashboard helps you build out
								the reports you need to keep key stackholders informed.
							</p>
						</li>
						<li>
							<div className="about__container__list__header">
								<div className="about__container__list__number">03</div>
								<h4 className="about__container__list__title">
									Everything you need in one place
								</h4>
							</div>
							<p>
								Stop jumping from one service to another to
                                communicate, store files, track tasks and share
                                documents. Manage offers an all-in-one 
                                productivity solution.
							</p>
						</li>
					</ul>
				</div>
			</section>
		);
}