
import { Salt } from "./../../src/crypto/crypto.module";

test("Creating a Salt", async () => {
    expect.assertions(4);
    const manualSalt = new Salt("salt");
    expect(manualSalt.toString()).toEqual('salt');
    expect(manualSalt.value()).toEqual("salt");
    expect(manualSalt.equals(new Salt("salt"))).toEqual(true);
    const generatedSalt = await Salt.Generate();
    expect(generatedSalt.equals(manualSalt)).toEqual(false);
})