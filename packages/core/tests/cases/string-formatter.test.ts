import { StringFormatter } from './../../src/formatters/formatters.module';
import { EmailAddress } from './../../src/email/email.module';
import {
    camelCase,
    capitalCase,
    constantCase,
    dotCase,
    headerCase,
    noCase,
    paramCase,
    pascalCase,
    pathCase,
    sentenceCase,
    snakeCase,
} from "change-case";

test("StringFormatter should properly format the input data.", () => {
    const formatter = new StringFormatter();
    const primitiveInput = "I should have Used this_format for the this.method() calls.";
    const stringInstanceInput = new String(primitiveInput);
    const randomObjectInput = new EmailAddress("foo@bar.com");
    const nullInput = null;
    const undefinedInput = undefined;

    // Camel case.
    expect(formatter.camelCase(primitiveInput)).toEqual(camelCase(primitiveInput));
    expect(formatter.camelCase(stringInstanceInput)).toEqual(camelCase(primitiveInput));
    expect(formatter.camelCase(randomObjectInput)).toEqual(camelCase(randomObjectInput.toString()));
    expect(formatter.camelCase(nullInput)).toEqual(camelCase(""));
    expect(formatter.camelCase(undefinedInput)).toEqual(camelCase(""));

    // Capital case.
    expect(formatter.capitalCase(primitiveInput)).toEqual(capitalCase(primitiveInput));
    expect(formatter.capitalCase(stringInstanceInput)).toEqual(capitalCase(primitiveInput));
    expect(formatter.capitalCase(randomObjectInput)).toEqual(capitalCase(randomObjectInput.toString()));
    expect(formatter.capitalCase(nullInput)).toEqual(capitalCase(""));
    expect(formatter.capitalCase(undefinedInput)).toEqual(capitalCase(""));

    // Constant case.
    expect(formatter.constantCase(primitiveInput)).toEqual(constantCase(primitiveInput));
    expect(formatter.constantCase(stringInstanceInput)).toEqual(constantCase(primitiveInput));
    expect(formatter.constantCase(randomObjectInput)).toEqual(constantCase(randomObjectInput.toString()));
    expect(formatter.constantCase(nullInput)).toEqual(constantCase(""));
    expect(formatter.constantCase(undefinedInput)).toEqual(constantCase(""));

    // dot case.
    expect(formatter.dotCase(primitiveInput)).toEqual(dotCase(primitiveInput));
    expect(formatter.dotCase(stringInstanceInput)).toEqual(dotCase(primitiveInput));
    expect(formatter.dotCase(randomObjectInput)).toEqual(dotCase(randomObjectInput.toString()));
    expect(formatter.dotCase(nullInput)).toEqual(dotCase(""));
    expect(formatter.dotCase(undefinedInput)).toEqual(dotCase(""));

    // header case.
    expect(formatter.headerCase(primitiveInput)).toEqual(headerCase(primitiveInput));
    expect(formatter.headerCase(stringInstanceInput)).toEqual(headerCase(primitiveInput));
    expect(formatter.headerCase(randomObjectInput)).toEqual(headerCase(randomObjectInput.toString()));
    expect(formatter.headerCase(nullInput)).toEqual(headerCase(""));
    expect(formatter.headerCase(undefinedInput)).toEqual(headerCase(""));

    // no case.
    expect(formatter.noCase(primitiveInput)).toEqual(noCase(primitiveInput));
    expect(formatter.noCase(stringInstanceInput)).toEqual(noCase(primitiveInput));
    expect(formatter.noCase(randomObjectInput)).toEqual(noCase(randomObjectInput.toString()));
    expect(formatter.noCase(nullInput)).toEqual(noCase(""));
    expect(formatter.noCase(undefinedInput)).toEqual(noCase(""));

    // param case.
    expect(formatter.paramCase(primitiveInput)).toEqual(paramCase(primitiveInput));
    expect(formatter.paramCase(stringInstanceInput)).toEqual(paramCase(primitiveInput));
    expect(formatter.paramCase(randomObjectInput)).toEqual(paramCase(randomObjectInput.toString()));
    expect(formatter.paramCase(nullInput)).toEqual(paramCase(""));
    expect(formatter.paramCase(undefinedInput)).toEqual(paramCase(""));

    // pascal case.
    expect(formatter.pascalCase(primitiveInput)).toEqual(pascalCase(primitiveInput));
    expect(formatter.pascalCase(stringInstanceInput)).toEqual(pascalCase(primitiveInput));
    expect(formatter.pascalCase(randomObjectInput)).toEqual(pascalCase(randomObjectInput.toString()));
    expect(formatter.pascalCase(nullInput)).toEqual(pascalCase(""));
    expect(formatter.pascalCase(undefinedInput)).toEqual(pascalCase(""));

    // path case.
    expect(formatter.pathCase(primitiveInput)).toEqual(pathCase(primitiveInput));
    expect(formatter.pathCase(stringInstanceInput)).toEqual(pathCase(primitiveInput));
    expect(formatter.pathCase(randomObjectInput)).toEqual(pathCase(randomObjectInput.toString()));
    expect(formatter.pathCase(nullInput)).toEqual(pathCase(""));
    expect(formatter.pathCase(undefinedInput)).toEqual(pathCase(""));

    // snake case.
    expect(formatter.snakeCase(primitiveInput)).toEqual(snakeCase(primitiveInput));
    expect(formatter.snakeCase(stringInstanceInput)).toEqual(snakeCase(primitiveInput));
    expect(formatter.snakeCase(randomObjectInput)).toEqual(snakeCase(randomObjectInput.toString()));
    expect(formatter.snakeCase(nullInput)).toEqual(snakeCase(""));
    expect(formatter.snakeCase(undefinedInput)).toEqual(snakeCase(""));
});