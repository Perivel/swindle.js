# Swindle Specification
Swindle Specification provides an implementation of the [Specification](https://en.wikipedia.org/wiki/Specification_pattern)_ Design Pattern. 

# Installation
To install Swindle FileSystem with NPM,
```
npm install @swindle/specification
```
With yarn,
```
yarn add @swindle/specification
```
# Usage
Swindle Specification exposes a single `CompositeSpecification` class for you to extend to define your specifications.

```ts
import { CompositeSpecification } from "@swindle/specification";

export class UnitedStatesLegalAgeSpeciication extends CompositteSpecification {

    constructor() {
        //
    }
}
```

To define your specification, we implements the `isSatisfiedBy(suspect)` method. The `isSatisfiedBy()` method takes a single argument and returns a boolean value indicating if that argument has met the requirements specified by the specification.

```ts
import { CompositeSpecification } from "@swindle/specification";

export class UserLegalAgeSpeciication extends CompositteSpecification {

    constructor() {
        //
    }

    public isSatisfiedBy(user: User): boolean {
        return user.age() >= 18;
    }
}
```
Here, we specify that our specification determines if the user is of legal age. In our case we determine if the user is at least 18 years of age, the legal age in the US. The data type of the suspect argument can be anything that meets your needs. In most cases, it will be some model class representing some idea in your domain (a user, a post, etc...).

To use our specification, we can just do the following.

```ts
// in some part of your application.
import { User } from "...";
import { UserLegalAgeSpecification } from "...";

const bob = new User("Bob", 15);
const sally = new User("Sally", 21);
const legalAgeSpec = new UserLegalAgeSpecification();

if (legalAgeSpec.isSatisfiedBy(bob)) {
    console.log("Bob can serve in the military");
}
else {
    console.log("Bob cannot serve in the military");
}

if (legalAgeSpec.isSatisfiedBy(sally)) {
    console.log("Sally can serve in the military");
}
else {
    console.log("Sally cannot serve in the military");
}
```

You can even chain specifications to run multiple tests on a suspect.

```ts
const userRegistration = new UserRegistration(...);
const userAgeSpec = new UserAgeSpecification();
const userSpecialPermissionsSpec = new UserSpecialPermissionsSpecification();

canRegister = userAgeSpec.or(userSpecialPermissionsSpec).isSatisfiedBy(userRegistration);
```

# Tests
To run the tests, use the following command with NPM
```
npm run test
```
with Yarn
```
yarn test
```