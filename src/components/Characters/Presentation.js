import React from 'react';
import PropTypes from 'prop-types';

const CharacterGrid = ({ characters }) => (
  <div className="grid">
      { 
        characters.map((element, index) => {
          return (
            <div key={index}>
              { console.log(element) }
              { element.name }
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