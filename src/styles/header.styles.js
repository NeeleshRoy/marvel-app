import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MarvelHeader = styled.header`
	display: grid;
	grid-template-columns: 2fr 2fr;
	background: #000;
	color: #fff;
`;
export const NavItems = styled(Link)`
  flex: 0;
  color: #fff;
  font-size: 100%;
  transition: all 0.3s
  padding: 5px;
  font-weight: 900;
  text-transform: uppercase;

  &:hover {
    background: red;
  }
`;
