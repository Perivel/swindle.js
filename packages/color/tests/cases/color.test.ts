import { Color, Hex, HexException, RGBA, RGBAException } from './../../index';

test('Test Color class', () => {
    // create default colors.
    const black = Color.Black();
    const white = Color.White();
    const red = Color.Red();
    const blue = Color.Blue();
    const green = Color.Green();
    
    expect(black).toBeDefined();
    expect(white).toBeDefined();
    expect(red).toBeDefined();
    expect(blue).toBeDefined();
    expect(green).toBeDefined();

    // create a custom color.
    const lightBlue = Color.FromRGBA(0,0,255,0.4);
    expect(lightBlue).toBeDefined();

    // check hex values.
    const redHex = new Hex('#FF0000');
    expect(red.hex().equals(redHex)).toBeTruthy();
    expect(red.hex().value()).toEqual('#FF0000');
    expect(red.hex().equals(blue.hex())).toBeFalsy();

    // check RGBA values.
    const redRgba = new RGBA(255,0,0);
    expect(red.rgba().equals(redRgba)).toBeTruthy();

    // check equality.
    const customRed = new Color(redHex);
    expect(red.equals(customRed));

});