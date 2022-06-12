import { IsoLanguage, IsoLanguageException } from './../../index';

test("Creating an IsoLanguage instance.", () => {
    const en = new IsoLanguage('en');
    const english = new IsoLanguage("English");
    expect(en.alpha2()).toEqual('en');
    expect(en.alpha3b()).toEqual('eng');
    expect(en.alpha3t()).toBeNull();
    expect(en.name()).toEqual("English");
    expect(() => new IsoLanguage("xob")).toThrow(IsoLanguageException);
    expect(en.equals(english));
});