
import { CircularDependencyException } from '../../src/exceptions/circular-dependency.exception';
import { DuplicateModuleException } from '../../src/exceptions/duplicate-module.exception';
import { InvalidModuleException } from '../../src/exceptions/invalid-module.exception';
import { ModuleNotFoundException } from '../../src/exceptions/module-not-found.exception';
import { ModuleParser } from '../../src/module-parser/module-parser';
import { 
    Container, 
    DependencyNotFoundException, 
    DuplicateDependencyException 
} from './../../index';

// create some dummy classes
abstract class AbstractFoo {

    abstract getNumber(): number;
}
class ConcreteFoo extends AbstractFoo {
    constructor() {
        super();
    }

    public getNumber(): number {
        return 6;
    }
}

abstract class AbstractBar {
    abstract getName(): string;
}

class ConcreteBar extends AbstractBar {
    constructor() {
        super();
    }
    public getName(): string {
        return "Bar";
    }
}

class Owner {

    constructor() { }

    getName(): string {
        return "Bob";
    }
}

class Pet {
    private owner: Owner;

    constructor(owner: Owner) {
        this.owner = owner;
    }

    getOwnerName(): string {
        return this.owner.getName();
    }
}

class A {
    private readonly b: B;

    constructor(b: B) {
        this.b = b;
    }
}

class B {
    private readonly a: A;

    constructor(a: A) {
        this.a = a;
    }
}

class SubModuleClass {

    public getStr(): string {
        return "Sub module class";
    }
}


// test the classes
const container = new Container();

test("The container should be empty.", () => {
    // the container should be empty.
    expect(container.has(AbstractFoo)).toEqual(false);
    expect(() => container.get(AbstractFoo)).toThrow(DependencyNotFoundException);
});

test("Adding and removing some stuff to the container.", () => {
    // add something to the container
    container.bindInstance(AbstractFoo, new ConcreteFoo());
    expect(container.has(AbstractFoo)).toEqual(true);
    expect(container.has(ConcreteFoo)).toEqual(false);
    expect(container.get(AbstractFoo).getNumber()).toEqual(6);
    expect(container.has(AbstractBar)).toEqual(false);
    expect(() => container.get(AbstractBar)).toThrow(DependencyNotFoundException);
    expect(() => container.get(ConcreteBar)).toThrow(DependencyNotFoundException);

    // add the bar instance
    container.bindInstance(AbstractBar, new ConcreteBar());
    expect(container.has(AbstractBar)).toEqual(true);
    expect(container.get(AbstractBar).getName()).toEqual("Bar");
});

test("Adding duplicate dependencies should throw errors", () => {
    expect(() => container.bindInstance(AbstractFoo, new ConcreteFoo())).toThrow(DuplicateDependencyException);
    
});

// test the bindings.
test("Registering bindings", () => {
    container.bindFactory(Owner, (container) => {
        return new Owner();
    });

    container.bindFactory(Pet, (container) => {
        return new Pet(container.get(Owner));
    });

    expect(container.get(Pet).getOwnerName()).toEqual("Bob");
});

test("Test Circular Dependencies", () => {
    container.bindFactory(A, (container) => {
        return new A(container.get(B));
    });

    container.bindFactory(B, (container) => {
        return new B(container.get(A));
    });

    expect(() => container.get(A)).toThrow(CircularDependencyException);
});

test("Test the use of modules", () => {
    container.createModule('sub');
    expect(container.containsModule('sub')).toEqual(true);
    container.module('sub').bindFactory(ConcreteFoo, (container) => {
        return new ConcreteFoo();
    });
    expect(container.module('sub').get(ConcreteFoo).getNumber()).toEqual(6);
    expect(() => container.module('sub').get(AbstractBar)).toThrow(DependencyNotFoundException);
    expect(() => container.module('bas')).toThrow(ModuleNotFoundException);
    expect(() => container.createModule('sub')).toThrow(DuplicateModuleException);
});

test("Test the Submodules functionality.", () => {
    expect(() => container.module('sub.module')).toThrow(ModuleNotFoundException);
    
    container.createModule('sub.module');
    expect(container.module('sub.module')).toBeInstanceOf(Container);

    container.module('sub.module').bindFactory(SubModuleClass, (container) => {
        return new SubModuleClass();
    });

    expect(() => container.get(SubModuleClass).getStr()).toThrow(DependencyNotFoundException);
    expect(() => container.module('sub').get(SubModuleClass).getStr()).toThrow(DependencyNotFoundException);
    expect(() => container.module('foo').get(SubModuleClass).getStr()).toThrow(ModuleNotFoundException);
    expect(container.module('sub.module').get(SubModuleClass).getStr()).toEqual("Sub module class");

    expect(() => container.containsModule('')).toThrow(InvalidModuleException);
    expect(container.containsModule("foo")).toEqual(false);
    expect(container.containsModule('sub')).toEqual(true);
    expect(container.containsModule('sub.foo')).toEqual(false);
    expect(container.containsModule('sub.module')).toEqual(true);
});

test("Test with a custom module parser", () => {
    class MyParser extends ModuleParser {
        constructor() {
            super();
        }

        public canParse(modulePath: string): boolean {
            return new RegExp('^[A-Za-z>-]+$').test(modulePath);
        }

        public delimiter(): string {
            return '->';
        }
    }

    const customContainer = new Container(new MyParser());
    expect(() => customContainer.createModule('Foo.Bar')).toThrow(InvalidModuleException);
    customContainer.createModule('Foo->Bar');
    customContainer.module('Foo').bindFactory(ConcreteFoo, (container) => {
        return new ConcreteFoo();
    });
    customContainer.module('Foo->Bar').bindFactory(ConcreteBar, (container) => {
        return new ConcreteBar();
    });

    expect(customContainer.module('Foo').get(ConcreteFoo).getNumber()).toEqual(6);
    expect(customContainer.module('Foo->Bar').get(ConcreteBar).getName()).toEqual('Bar');
    expect(() => customContainer.module('Foo').get(ConcreteBar)).toThrow(DependencyNotFoundException);
    expect(() => customContainer.module('Bar->Foo')).toThrow(ModuleNotFoundException);
});