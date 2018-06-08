import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { header } from '../../constants/static';

const MarvelHeader = styled.header`
	background: #000;
	width: 100%;
	max-height: 60px;
	display: grid;
	grid-template-columns: 4fr 1fr;
	grid-gap: 20px;
	align-content: center;
`;

const Logo = styled.h1`
	margin-left: 20px;
	color: #f2f2f2;
`;

const NavItems = styled(Link)`
  color: #fff;
  margin-right: 25px;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 900;
  transition: color .2s;
  &:hover{
    color: crimson;
  }
`;

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
