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

    // test setters.
    let halfAlpha = red.setA(0.5);
    expect(halfAlpha.r()).toEqual(255);
    expect(halfAlpha.g()).toEqual(0);
    expect(halfAlpha.b()).toEqual(0);
    expect(halfAlpha.a()).toEqual(0.5);
    expect(() => halfAlpha.setA(-5)).toThrow(RGBAException);
    expect(() => halfAlpha.setA(2)).toThrow(RGBAException);

    halfAlpha = red.setR(100);
    expect(halfAlpha.r()).toEqual(100);
    expect(halfAlpha.g()).toEqual(0);
    expect(halfAlpha.b()).toEqual(0);
    expect(halfAlpha.a()).toEqual(1.0);
    expect(() => halfAlpha.setR(-5)).toThrow(RGBAException);
    expect(() => halfAlpha.setR(256)).toThrow(RGBAException);

    halfAlpha = red.setG(50);
    expect(halfAlpha.r()).toEqual(255);
    expect(halfAlpha.g()).toEqual(50);
    expect(halfAlpha.b()).toEqual(0);
    expect(halfAlpha.a()).toEqual(1.0);
    expect(() => halfAlpha.setG(-1)).toThrow(RGBAException);
    expect(() => halfAlpha.setG(300)).toThrow(RGBAException);

    halfAlpha = red.setB(254);
    expect(halfAlpha.r()).toEqual(255);
    expect(halfAlpha.g()).toEqual(0);
    expect(halfAlpha.b()).toEqual(254);
    expect(halfAlpha.a()).toEqual(1.0);
    expect(() => halfAlpha.setB(-1)).toThrow(RGBAException);
    expect(() => halfAlpha.setB(666)).toThrow(RGBAException);
});