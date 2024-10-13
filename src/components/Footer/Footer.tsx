import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg';

import facebook from '../../assets/icon-facebook.svg'
import youtube from '../../assets/icon-youtube.svg';
import X from '../../assets/icon-twitter.svg';
import pinterest from '../../assets/icon-pinterest.svg';
import instagram from '../../assets/icon-instagram.svg';

import './footer.css';


interface NavLinksProps {
	name?: string;
	link: string;
	img?: string
}
export default function Footer() {

	 function buildLinks({ name, link, img }: NavLinksProps) {
			if (!img) {
				return (
					<li key={name}>
						<Link to={link}>{name}</Link>
					</li>
				);
			} else {
				return (
					<li key={name}>
						<Link to={link}>
							<img src={img} alt={name} />
						</Link>
					</li>
				);
			}
		}
	return (
		<div className="footer">
			<div className="footer__container">
				<div className="footer__container__logo-section">
					<Link to="">
						<img src={Logo} alt="Manage's logo" />
					</Link>
					<ul>
						{buildLinks({
							name: 'Facebook',
							link: 'https://facebook.com',
							img: facebook,
						})}
						{buildLinks({
							name: 'YouTube',
							link: 'https://youtube.com',
							img: youtube,
						})}
						{buildLinks({
							name: 'Twitter',
							link: 'https://twitter.com',
							img: X,
						})}
						{buildLinks({
							name: 'Pinterest',
							link: 'https://pinterest.com',
							img: pinterest,
						})}
						{buildLinks({
							name: 'Instagram',
							link: 'https://instagram.com',
							img: instagram,
						})}
					</ul>
				</div>
				<nav className="footer__container__nav">
					<ul>
						{buildLinks({ name: 'Home', link: '/' })}
						{buildLinks({ name: 'Pricing', link: '/' })}
						{buildLinks({ name: 'Products', link: '/' })}
						{buildLinks({ name: 'About Us', link: '/' })}
					</ul>
					<ul>
						{buildLinks({ name: 'Careers', link: '/' })}
						{buildLinks({ name: 'Community', link: '/' })}
						{buildLinks({ name: 'Privacy Policy', link: '/' })}
					</ul>
				</nav>
				<form>
					<input className="footer__container__input" type="text" />
					<button className="btn footer__container__input__btn">Go</button>
				</form>
			</div>
		</div>
	);
}
