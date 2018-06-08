import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MarvelFooter = styled.footer`
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

export const Developer = styled.div`
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

export const Attribution = styled(Link)`
	color: white;
	text-transform: uppercase;
	font-size: 12px;
	font-weight: 900;
	transition: color .2s;
	&:hover {
		color: crimson;
	}
`;
