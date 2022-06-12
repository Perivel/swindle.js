import { CharacterSet } from './../../index';

test("Creating a CharacterSet", () => {
    const utf8 = new CharacterSet("UTF-8");
    const other = CharacterSet.UTF8();
    const ascii = CharacterSet.ASCII();

    expect(utf8).toBeDefined();
    expect(other).toBeDefined();
    expect(ascii).toBeDefined();
    expect(utf8.equals(other)).toBeTruthy();
    expect(other.value()).toEqual("UTF-8");
})