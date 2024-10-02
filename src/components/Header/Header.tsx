import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg';

export default function Header() {
	return (
		<header className="header">
			<div className="header__logo">
				<Link to="">
					<img src={Logo} alt="Mange's logo" />
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
            <button className='header__btn btn'>Get Started</button>
		</header>
	);
}
