import React from 'react';
import PropTypes from 'prop-types';

const CharacterGrid = ({ characters }) => (
  <div className="container-fluid clearfix">
    { 
      characters.map((element, index) => {
        return (
          <div className="card" key={index}>
            <div className="card__wrapper">
              <img src={element.thumbnail.path + '.' + element.thumbnail.extension} alt={element.name} />
              <p className="card__heroName">{ element.name }</p>
              <p className="card__modified">{ element.modified.slice(0, 10) } </p>
              <p className="card__content">Comics: { element.comics.available }</p>
              <p className="card__content">Series: { element.series.available }</p>
              <p className="card__content">Stories: { element.stories.available }</p>
            </div>
          </div>
        )
      })
    }
  </div>
);

CharacterGrid.propTypes = {
  characters: PropTypes.array.isRequired
};

export default CharacterGrid;