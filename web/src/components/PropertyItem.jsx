import React from 'react';
import PropTypes from 'prop-types';

function PropertyItem({ property, favoured, onAddToFavourites, onRemoveFromFavourites }) {
  const { price, address } = property;

  return (
    <div>
      <div>{price}</div>
      <div>{address}</div>

      {favoured && (
        <button
          onClick={() => {
            onRemoveFromFavourites();
          }}
        >
          remove from favourites
        </button>
      )}
      {!favoured && (
        <button
          onClick={() => {
            onAddToFavourites();
          }}
        >
          add to favourites
        </button>
      )}
    </div>
  );
}

PropertyItem.defaultProps = {
  favoured: false,
};

PropertyItem.propTypes = {
  property: PropTypes.object.isRequired,
  favoured: PropTypes.bool,
  onAddToFavourites: PropTypes.func.isRequired,
  onRemoveFromFavourites: PropTypes.func.isRequired,
};

export default PropertyItem;
