import React, { useState } from 'react';

import PropertySearchForm from 'components/PropertySearchForm';
import PropertiesList from 'components/PropertiesList';
import PropertyItem from 'components/PropertyItem';

function Search() {
  const [matchedProperties, setMatchedProperties] = useState([]);

  const handleSearch = (values, { setSubmitting }) => {
    setTimeout(() => {
      const { keyword } = values;

      // TODO: search query with keyword

      setMatchedProperties([
        { id: 'sdj23', price: 1200000, address: '12 York Street' },
        { id: 'sdj24', price: 750000, address: '668 Inkerman Road' },
      ]);

      setSubmitting(false);
    }, 400);
  };

  return (
    <div>
      <PropertySearchForm onSearch={handleSearch} />
      <PropertiesList
        properties={matchedProperties}
        renderItem={(property) => {
          return (
            <PropertyItem
              key={property.id}
              property={property}
              onAddToFavourites={() => {
                console.log(`add property ${property.address} to favourites`);
              }}
              onRemoveFromFavourites={() => {
                console.log(`remove property ${property.address} from favourites`);
              }}
            />
          );
        }}
      />
    </div>
  );
}

export default Search;
