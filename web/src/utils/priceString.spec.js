import { priceString } from './priceString';

describe('priceString', () => {
  it('should convert 0 to $0', () => {
    expect(priceString(0)).toEqual('$0');
  });

  it('should convert 100 to $100', () => {
    expect(priceString(100)).toEqual('$100');
  });

  it('should convert 2000 to $2,000', () => {
    expect(priceString(2000)).toEqual('$2,000');
  });

  it('should convert 1999999 to $1,999,999', () => {
    expect(priceString(1999999)).toEqual('$1,999,999');
  });
});
