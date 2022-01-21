import { Hex, HexException } from './../../index';

test('Testing Hex class', () => {
    const redVal = '#FF0000';
    const red = new Hex(redVal);
    expect(red).toBeDefined();
    expect(red.value()).toEqual(redVal);

    // instanciate short form hex.
    const shortWhiteVal = '#fff';
    const shortWhite = new Hex(shortWhiteVal);
    expect(shortWhite).toBeDefined();

    // create an invalid hex.
    expect(() => new Hex('gggg')).toThrow(HexException);
});