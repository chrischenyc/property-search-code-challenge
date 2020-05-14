import React from 'react';
import PropTypes from 'prop-types';

import { priceString } from 'utils/priceString';

function SearchedPropertyItem({ property, favoured, onAddToFavourites, onRemoveFromFavourites }) {
  const { price, address } = property;

  return (
    <div>
      <div>{priceString(price)}</div>
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

SearchedPropertyItem.defaultProps = {
  favoured: false,
};

SearchedPropertyItem.propTypes = {
  property: PropTypes.object.isRequired,
  favoured: PropTypes.bool,
  onAddToFavourites: PropTypes.func.isRequired,
  onRemoveFromFavourites: PropTypes.func.isRequired,
};

export default SearchedPropertyItem;
