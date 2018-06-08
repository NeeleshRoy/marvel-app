import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MarvelHeader = styled.header`
	background: #000;
	width: 100%;
	max-height: 60px;
	display: grid;
	grid-template-columns: 4fr 1fr;
	grid-gap: 20px;
	align-content: center;
`;

export const Logo = styled.h1`
	margin-left: 20px;
	color: #f2f2f2;
`;

export const NavItems = styled(Link)`
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
