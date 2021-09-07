import { CompositeSpecification } from "./../../../index";


export class DrinkingAgeSpecification extends CompositeSpecification {


    constructor() {
        super();
    }

    public isSatisfiedBy(age: number): boolean {
        return age >= 21;
    }
}