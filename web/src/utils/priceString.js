import dinero from 'dinero.js';

export const priceString = (priceInDollar) => {
  return dinero({ amount: priceInDollar * 100 }).toFormat('$0,0');
};
