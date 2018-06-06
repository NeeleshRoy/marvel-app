import styled from 'styled-components';

export const Container = styled.div`
	margin: 20px 20px 0 20px;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
	grid-gap: 100px;

	@media (max-width: 1024px) {
		grid-template-columns: 1fr 1fr 1fr 1fr;
	}

	@media (max-width: 768px) {
		grid-template-columns: 1fr 1fr;
	}

	@media (max-width: 480px) {
		grid-template-columns: 1fr;
	}
`;

export const CardInfoStyles = `
	font-size: 8px;
	text-transform: uppercase;
	background: crimson;
	color: white;
	font-weight: 900;
	padding: 2px;
	display: table;
	margin-top: 5px;
`;

export const Content = styled.div`
	font-family: 'Montserrat';
	font-size: ${(props) => (props.variant === 'headline' ? '16px' : '14px')}
	font-weight: ${(props) => (props.variant === 'headline' ? '900' : '300')}
	background: ${(props) => (props.variant === 'headline' ? '#f3f3f3' : 'none')}
	opacity: ${(props) => (props.variant !== 'headline' ? '0' : '1')}
	padding: 10px;
	transition: all .2s ease-in-out;

	${(props) => (props.variant !== 'headline' ? `${CardInfoStyles}` : '')}
`;

export const Card = styled.div`
	height: 250px;
	border: 1px solid grey
	background: url(${(props) => props.src}) 0 0 no-repeat;
	background-size: cover;
	-webkit-box-shadow: 3px 3px 0px 0px rgba(190, 190, 190, 1);
	-moz-box-shadow: 3px 3px 0px 0px rgba(190, 190, 190, 1);
	box-shadow: 3px 3px 0px 0px rgba(190, 190, 190, 1);

	box-sizing: border-box;
	-moz-box-sizing: border-box;
	-webkit-box-sizing: border-box;

	transition: all .3s ease-in-out;

	&:hover {
		border: 4px solid #000;
		-webkit-box-shadow: 3px 3px 5px 0px rgba(70, 70, 70, 1);
		-moz-box-shadow: 3px 3px 5px 0px rgba(70, 70, 70, 1);
		box-shadow: 3px 3px 5px 0px rgba(70, 70, 70, 1);
	}

	&:hover ${Content} {
		opacity: 1;
	}
`;
export const CardContent = styled.div``;
