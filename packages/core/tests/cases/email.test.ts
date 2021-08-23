import { EmailAddress, EmailAddressException } from './../../src/email/email.module';

test("Creating a Valid Email Address.", () => {

    const email = new EmailAddress("patrickaluy@gmail.com");
    expect(email).toBeDefined();
});

test("Creating an invalid email should throw an exception", () => {
    expect(() => new EmailAddress("")).toThrow(EmailAddressException);
    expect(() => new EmailAddress("Foo")).toThrow(EmailAddressException);
});