# Swindle Container
A minimalist dependency injection container for Typescript.

# Dependency Injection?
## What is it
Dependency Injection is a technique in which an object receives other objects that it depends on. These other objects are referred to as "dependencies". For more information about Dependency injection, refer to the Wikipedia page about the subject found [here](https://en.wikipedia.org/wiki/Dependency_injection).

## Dependency Injection Container (DIC)?
A Dependency Injection Container (or DIC for short) is an object that knows how to create other objects. In terms of Dependency Injection, the job of a Dependency injection Container is to manage the creation and configuration of objects. In order to achieve this, it must be aware about about the contructor arguments and the corresponding relationships between these objects.


# installation
To install Swindle, just use the following command with NPM
```
npm i @swindle/container
```
Similarly, run the following command with Yarn
```
yarn add @swindle/container
```

# Usage

## Creating a Container
The `Container` class is the main class you will be interacting with. It has all the functionality needed for registering bindings, registering instances, and retrieving dependnecies.

To create a contaner, we instanciate the `Container` class as follows.
```ts
import { Container } from '@swindle/container';

const container = new Container();

// ... do some more stuff here.
```

## Binding Dependencies
To bind a dependency, you can either use the `bindFactory()` method to tell Swindle how to instanciate your dependency, or use the `bindInstance()` method to bind a specific instance to the container. Once a binding is created, it can later be referenced the dependency's class name. 

### bindFactory(token, factory)
The `bindFactory()` method defines a factory function to tell Swindle how to instanciate your dependency. The `bindFactory()` method takes two arguments. The first argument is the token that will be used to refer to your dependency. This is normally the name of the class you are binding. The second argument is a factory function that tells Swindle how to instanciate your dependency when it is needed. The factory function accepts the container as a single argument. And, expects an instance of your dependency to be returned. Below is an example of how we might use the `bindFactory()` method to bind an instance of `Foo` to our container.
```ts
class Foo {
   constructor() {}
}

container.bindFactory(Foo, (container) => {
   return new Foo();
});
```

In the above example, we define a class Foo, and add a binding that maps the class Foo to our factory method. Since Foo() does not require any arguments, the factory function is pretty trivial. However, in many cases, the dependencies we register will themselves have other dependencies. So, in this next example, let's look at how we can create a binding where our dependency itself has other dependencies. Here, we will build on our previous example by defining a `Bar` class that depends on Foo.
```ts
class Bar {
   private foo: Foo;
   
   constructor(theFoo: Foo) {
      this.foo = theFoo;
   }
}

container.bindFactory(Bar, (container) => {
   return new Bar(container.get(Foo));
});
```
In the above example, you can see that we simply refer to the contianer to retrieve any additional dependencies we may need to instanciate our binding. Once our bindings are created, we can refer to them later at any time using the `get()` method, described in the next section. 

Something to note is that bindings created with the `bindFactory()` method are lazy loaded. That means, the container will not create instances of these dependencies until they are needed.

### bindInstance(token, instance)
There are times when we cannot always rely on a factory function to create our dependencies. A good example of this is with abstract classes. Since we cannot instanciate an abstract class, we need a way to tell Swindle how to link the token of an abstract class to a specific instance. It is in these situations where the `bindInstance()` method comes in handy. Unlike `bindFactory()`, `bindInstance()` binds a class to a specific instance. And, that instance will always be returned in every request for that dependency. Let's bind another dependency to our container. This time, let's use the `bindInstance()` method.
```ts
abstract class AbstractBuzz {
   constructor() {}
}
class ConcreteBuzz extends AbstractBuzz {
   constructor() {
      super();
   }
}

container.bindInstance(AbstractBuzz, new ConcreteBuzz());
```
Instead of passing a factory function, like in `bindFactory()`, we pass an instance of our dependency as the second argument to `bindInstance()`. Now, every request for the `AbstractBuzz` dependency will return the instance we provided. Since we are binding instances directly to our container, bindings created with `bindInstance()` are kept alive in the container, unlike bindings registered with the `bindFactory()` method above.

Something important to note herre is that Swindle uses the class name as the identifier for the binded dependency. That is to say, in Swindle, `container.bindInstance(AbstractBuzz, new ConcreteBuzz())` and `container.bindInstance(ConcreteBuzz, new ConcreteBuzz())` are two different dependencies. 

Swindle only allows you to register one binding for each class. Attempting to register more that one dependency of a class will throw a `DuplicateBindingException` for `bindFactory()` or a `DuplicateInstanceException` for `bindInstance()`. To check whether or not you already have a registered Dependency for a class, you can use Swindle's `has()` method, like below.

```ts
if (container.has(Foo) {...} // returns true
if (container.has(Bas) {...} // returns false
```
If you need to bind multiple instances of the same class, you can do so by binding each class to a module. This is something we will go over in a later section.

## Retrieving Dependencies
Once we have binded our dependencies, we can retrieve them using Swindle's `get()` method. The `get()` method takes the class name as its only argument, which it uses to retrieve the dependency. Following up from our earlier example, we can get the dependencies we binded earlier like so:
```ts
 const foo = container.get(Foo);
 const bar = container.get(Bar);
 const buzz = container.get(AbstractBuzz);
```

If `get()` is unable to resolve the dependency, it will throw a `DependencyNotFoundException` error.

### Dependency Resolution
When `get()` is invoked, Swindle will first check to see if there is an instance of the dependency that is available. If there is, Swindle returns that instance. If there is no instance of that dependency available, Swindle will attempt to use the dependency's registered factory to create an instance of that dependency. If there is no registered factory, Swindle throws a `DependencyNotFoundException` error.

## Circular Dependencies
Swindle automatically detects circular dependencies. Whenever Swindle detects a circular dependency, it will throw a `CircularDependencyException` error.

## Modules
When your application starts to grow, managing all your dependencies can become overwhelming. To help with this, Swindle lets you organize your dependencies into modules. Modules are like containers within your container. You can use modules to beteer compartmentalize your dependencies.

### Creating a Module
By default, Swindle stores your dependencies in the global module (or root module). To create a module, use the `createModule()` method. The `createModule()` method takes a unique module name as its only argument.
```ts
container.createModule('mymodule');
```
Module names must be unique. If you attept to create two modules of the same name, Swindle will throw a `DuplicateModuleException` error. If you want to check whether or not a module already exists, you can do so using the `containsModule()` method.
```ts
if (container.containsModule('mymodule')) ... // returns true
```

Once a module is created, we are free to register dependencies to it, just like we did before.

### Accessing a Module
To access a module, use the `module()` method. 
```ts
container.module('mymodule').bindFactory(Foo, (container) => {
   return new Foo();
});

container.module('mymodule').get(Foo);
```
Using the `module()` method, we can bind and access module dependencies just like we did for global dependencies. Dependencies binded to a module are unique to that module. For example, the below snippet would be referring to two different `Foo` dependencies. 
```ts
const globalFoo = container.get(Foo);
const moduleFoo = container.module('mymodule').get(Foo);
```
The first line is referring to the Global `Foo` dependency. The second is referring to a `Foo` dependency defined in the `mymodule` module.

### Submodules
In addition to modules, Swindle also allows you to create submodules. Submodules are created using the `createModule()` method in much the same way as you create modules.
```ts
class UserFactory {

   constructor() {...}

   public createUser(name: string): User {...}
}

container.createModule('users.factories');
container.module('users.factories').bind(UserFactory, (container) => {
   return new UserFactory();
});
```
Here, we first create a module called `users`, which itself has a sub-module called `factories`. We then bind a `UserFactory` class to the `factories` sub-module within our `users` module. Notice here we are using a dot-notation to reference our submodules. By default, we reference our submodules by using the dot-notation. If need be, this behavior can be customized, as we will see a little later. 

We can now access our `UserFactory` like so.
```ts
const user = container.module('users.factories').get(UserFactory).createUser("John");
```
Like with modules, bindings created within a submodule is only accessible within the submodule it was binded to.

### Customizing How We Access Modules and Sub-Modules
By default, Swindle lets you name your modules and submodules any combination of upper and lower case characters (A-Z, a-z), numbers (0 - 9), dashes (-), and underscores (_). For most use cases, this will work just fine. However, if you want to customize this behavior, Swindle lets you pass your own custom `ModuleParser` class for it to use.
```ts
import { Container, ModuleParser } from '@swindle/container';

class MyModuleParser extends ModuleParser {

   constructor() {
      super();
   }

   public canParse(modulePath: string): boolean {
      return new RegExp('^[A-Za-z>-]+$').test(name);
   }

   public delimiter(): string {
      return '->';
   }
}
```
Currently, there are two things we can customize. The `canParse()` method determines which sequences of characters Swindle will recognize as a valid module path. Here, we are restricting all module names to only contain capital and lower case characters, dashes, and the greater-than symbol. The second method we can customize is the `delimiter()` method. This method tells Swindle to use the `->` character to differenciate between modules and sub-modules (maybe you are just missing the old days when PHP was still cool). 

Something to keep in mind when creating your own Module Parser is that **your delimiter character(s) must be a valid character for your parser**. That is, that character returns true when checked by `canParse()`. Otherwise, Swindle will throw an `InvalidModuleException` error.

To tell Swindle to use our custom module parser, we just pass it as an argument when creating our `Container` instance.
```ts
const customContainer = new Container(new MyModuleParser());
customContainer.createModule('module->submodule');
```
Notice here we can noe use our custom delimiter to create and access modules. 

If, at any time, you want to get the instance of the Module Parser your container is currently using, you can do so with the `parser()` method.
```ts
const parser = customContainer.parser();
```

# Tests
To run the tests, use the following command with NPM
```
npm run test
```
Or, with Yarn
```
yarn test
```
# Issues and Bug Reporting
If you are facing any problems while using Swindle, feel free to open an issue, where we'd be happy to help you out.

# License
Swindle is available under the MIT license.