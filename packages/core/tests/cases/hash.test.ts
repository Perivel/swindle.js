import { Hash, Salt } from './../../src/crypto/crypto.module';

test("Creatng a hash", async () => {
    expect.assertions(3);

    const data = "Some Data to Hash";
    const salt = await Salt.Generate();
    const hash = await Hash.Create(data, salt);
    expect(hash).toBeDefined();

    const sameHash = new Hash(hash.value());
    const differentHash = Hash.Create("abc", salt);

    expect(hash.equals(sameHash)).toEqual(true);
    expect(hash.equals(differentHash)).toEqual(false);

});