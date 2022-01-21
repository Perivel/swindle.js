import { RGBA, RGBAException } from './../../index';

test('Creating an RGBA instance.', () => {
    const red = new RGBA(255, 0,0, 1.0);
    const blue = new RGBA(0,0,255,1.0);
    const anotherRed = new RGBA(red.r(), red.g(), red.b(), red.a());

    // make sure everything successfully.
    expect(red).toBeDefined();
    expect(blue).toBeDefined();

    // check equality.
    expect(red.equals(anotherRed)).toBeTruthy();
    expect(red.equals(blue)).toBeFalsy();

    // check value.
    expect(red.r()).toEqual(255);
    expect(red.g()).toEqual(0);
    expect(red.b()).toEqual(0);
    expect(red.a()).toEqual(1.0);
    expect(() => new RGBA(-1,0,0)).toThrow(RGBAException);
});