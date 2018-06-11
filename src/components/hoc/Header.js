import React from 'react';
import { header } from '../../constants/static';
import { MarvelHeader, NavItems } from '../../styles/header.styles';

const getNavItems = () =>
	header.nav.map((item) => (
		<NavItems key={item.name} to={item.link}>
			{item.name}
		</NavItems>
	));

export default function Header() {
	return (
		<MarvelHeader>
			<img src="/images/Logo.jpg" alt="Logo" className="logo" />
			<nav>
				<ul>{getNavItems()}</ul>
			</nav>
		</MarvelHeader>
	);
}
