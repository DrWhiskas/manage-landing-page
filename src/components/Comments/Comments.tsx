import React from "react";
import './comments.css'

import CardComments from "../CardComments/CardComments";
import P1 from '../../assets/avatar-anisha.png'
import P2 from '../../assets/avatar-ali.png'
import P3 from '../../assets/avatar-richard.png'
import P4 from '../../assets/avatar-shanai.png'

export default function Comments(){
    return (
			<div className="comments">
				<h1 className="comments__title">What they've said</h1>
				<div className="comments__container">
					<CardComments
						img={P1}
						name="Anisha Li"
						text="Manage has surcharged our team's workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated."
					/>
					<CardComments
						img={P2}
						name="Ali Bravo"
						text='"We have been able to cancel so many other suscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused."'
					/>
					<CardComments
						img={P3}
						name="Richard Watts"
						text="Manage allows us to provide structure and process. It keeps us organized and focused. I can't stop recommending them to everyone I talk to!"
					/>
					<CardComments
						img={P4}
						name="Shanai Gough"
						text="Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive."
					/>
				</div>
			</div>
		);
}