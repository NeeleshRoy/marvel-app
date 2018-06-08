import React from 'react';
import { header } from '../../constants/static';
import { MarvelHeader, Logo, NavItems } from '../../styles/header.styles';

const getNavItems = () =>
	header.nav.map((item) => (
		<NavItems key={item.name} to={item.link}>
			{item.name}
		</NavItems>
	));

export default function Header() {
	return (
		<MarvelHeader>
			<Logo>MARVEL FANS</Logo>
			<nav>
				<ul>{getNavItems()}</ul>
			</nav>
		</MarvelHeader>
	);
}
