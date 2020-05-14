import React from 'react';
import PropTypes from 'prop-types';

import { priceString } from 'utils/priceString';

function FavouritePropertyItem({ property, onRemoveFromFavourites }) {
  const { price, address } = property;

  return (
    <div>
      <div>{priceString(price)}</div>
      <div>{address}</div>

      <button
        onClick={() => {
          onRemoveFromFavourites();
        }}
      >
        remove from favourites
      </button>
    </div>
  );
}

FavouritePropertyItem.propTypes = {
  property: PropTypes.object.isRequired,
  onRemoveFromFavourites: PropTypes.func.isRequired,
};

export default FavouritePropertyItem;
