import { EmailAddress, EmailAddressException } from './../../src/email/email.module';

test("Creating a Valid Email Address.", () => {
    const email = new EmailAddress("example@gmail.com");
    expect(email).toBeDefined();
    expect(email.domainName()).toEqual("gmail.com");
    expect(email.username()).toEqual('example');
    expect(email.email()).toEqual('example@gmail.com');
});

test("Creating an invalid email should throw an exception", () => {
    expect(() => new EmailAddress("")).toThrow(EmailAddressException);
    expect(() => new EmailAddress("Foo")).toThrow(EmailAddressException);
});

test("Email address equality.", () => {
    const firstEmail = new EmailAddress("example@example.com");
    const sameEmail = new EmailAddress("example@example.com");
    const sameInstance = firstEmail;
    const secondEmail = new EmailAddress("foo@bar.com");

    expect(firstEmail.equals(sameEmail)).toBeTruthy();
    expect(firstEmail.equals(sameInstance)).toBeTruthy();
    expect(firstEmail.equals(secondEmail)).toBeFalsy();
});