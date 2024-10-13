import React, { useState } from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg';

export default function Header() {

	/* BURGER MENU */
	const [showLinks, setShowLinks] = useState(false);
	function handleShowLinks() {
		setShowLinks(!showLinks);
	}

	return (
		<header className={showLinks ? 'header show-header' : 'header'}>
			<div className="header__logo">
				<Link to="">
					<img src={Logo} alt="Manage's logo" />
				</Link>
			</div>
			<nav className="header__navigation">
				<ul>
					<li>
						<Link to="">Pricing</Link>
					</li>
					<li>
						<Link to="">Product</Link>
					</li>
					<li>
						<Link to="">About Us</Link>
					</li>
					<li>
						<Link to="">Careers</Link>
					</li>
					<li>
						<Link to="">Community</Link>
					</li>
				</ul>
			</nav>
			<button className="header__btn btn">Get Started</button>
			<button className="header__burger" onClick={handleShowLinks}>
				<span className="burger-bar"></span>
			</button>
		</header>
	);
}
