import React from 'react';

import PropertiesList from 'components/PropertiesList';
import FavouritePropertyItem from 'components/FavouritePropertyItem';

import { AppContext } from 'context';

function Favourites() {
  return (
    <AppContext.Consumer>
      {({ favouriteProperties, removePropertyFromFavourites }) => {
        console.log(favouriteProperties);
        return (
          <div>
            <PropertiesList
              properties={favouriteProperties}
              renderItem={(property) => {
                return (
                  <FavouritePropertyItem
                    key={property.id}
                    property={property}
                    onRemoveFromFavourites={() => {
                      removePropertyFromFavourites(property);
                    }}
                  />
                );
              }}
            />
          </div>
        );
      }}
    </AppContext.Consumer>
  );
}

export default Favourites;
