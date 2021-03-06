import React from 'react';
import PropTypes from 'prop-types';

import { Container, Card, CardContent, Content, CardInfoStyles } from '../styles/characters';

const defaultProps = {
	characterData: {
		count: 0,
		limit: 10,
		offset: 0,
		results: [],
		total: 0,
	},
};

const propTypes = {
	characterData: PropTypes.shape({
		count: PropTypes.number,
		limit: PropTypes.number,
		offset: PropTypes.number,
		results: PropTypes.array,
		total: PropTypes.number,
	}),
};

const renderCharactersMap = (characters) => (
	<Container>
		{characters.results.map((char) => (
			<Card to={`/characters/${char.id}`} key={char.id}>
				<CardContent>
					<img src={`${char.thumbnail.path}.${char.thumbnail.extension}`} alt={char.name} />
					<CardInfoStyles>
						<Content variant="headline" component="h2">
							{char.name}
						</Content>
						<Content component="p">Modified : {new Date(char.modified).toDateString()}</Content>
						<Content component="p">Comics : {char.comics.available}</Content>
						<Content component="p">Series : {char.series.available}</Content>
						<Content component="p">Stories : {char.stories.available}</Content>
					</CardInfoStyles>
				</CardContent>
			</Card>
		))}
	</Container>
);

export default function Characters({ characterData }) {
	return characterData.results ? renderCharactersMap(characterData) : <div>loading</div>;
}

Characters.propTypes = propTypes;
Characters.defaultProps = defaultProps;
