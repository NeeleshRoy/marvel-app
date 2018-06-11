import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MarvelFooter = styled.footer`
	position: fixed;
	bottom: -1px;
	background: crimson;
	display: flex;
	flex-wrap: wrap;
	padding: 5px;
	font-size: 60%;
	width: 100%;
`;

export const Attribution = styled(Link)`
	color: white;
	font-weight: 900;
`;
