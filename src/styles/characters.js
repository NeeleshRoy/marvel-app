import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
`;

export const CardInfoStyles = styled.div``;

export const Content = styled.div``;

export const Card = styled(Link)`
	@media screen and (min-width: 40em) {
		flex: 0 1 calc(50% - 1em);
		margin-top: 1em;
	}
	@media screen and (min-width: 60em) {
		flex: 0 1 calc(33% - 1em);
		margin-top: 1em;
	}

	@media screen and (min-width: 80em) {
		flex: 0 1 calc(25% - 1em);
		margin-top: 1em;
	}
`;
export const CardContent = styled.div`
	@media screen and (min-width: 40em) {
		padding: 10px;
		display: grid;
		grid-template-columns: 1fr 4fr;
		grid-gap: 1em;
		justify-items: left;
		align-items: center;
		font-size: 70%;

		box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.30);

		transition: all 0.2s ease;

		&:hover {
			transform: scale(1.05);
		}
	}
`;
