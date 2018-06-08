import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MarvelFooter = styled.footer`
	min-height: 50px;
	width: 100%;
	position: fixed;
	bottom: 0;
	background: #000;
	display: grid;
	grid-template-columns: 4fr 2fr;
	align-content: center;
	justify-content: center;
`;

const Developer = styled.div`
	color: white;
	text-transform: uppercase;
	font-size: 12px;
	font-weight: 900;
	transition: color .2s;
	&:hover {
		color: crimson;
	}
	margin-left: 30px;
`;

const Attribution = styled(Link)`
	color: white;
	text-transform: uppercase;
	font-size: 12px;
	font-weight: 900;
	transition: color .2s;
	&:hover {
		color: crimson;
	}
`;

export default function Footer() {
	return (
		<MarvelFooter>
			<Developer>
				<Link target="_blank" to="https://github.com/NeeleshRoy/">
					Dev: Neelesh Roy
				</Link>
			</Developer>
			<Attribution target="_blank" to="http://marvel.com">
				Data provided by Marvel. © 2018 MARVEL
			</Attribution>
		</MarvelFooter>
	);
}
