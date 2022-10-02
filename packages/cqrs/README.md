# @swindle/cqrs
A Command Query Responsibility Segregation (CQRS) module for NodeJS

# Installation
To install @Swindle/CQRS, use the following command with npm
```
npm install @swindle/cqrs
```
With Yarn,
```
yarn add @swindle/cqrs
```

# Usage
## Defining a Command
To define a Command, we extend the `Command` class.
```ts
import { Command } from '@swindle/cqrs`;

export class CreateUserCommand extends Command {

    constructor() {
        super();
    }

    public async execute(data: UserData): Promise<void> {
        // definition here.
    }
}
```
All commands extends the `Command` class. Every `Command` class defines an `execute()` method, wheich defines the body of the command. The `execute()` method is very flexible and 
allows you to pass in however many parameters you need.

We can use our command as follows.
```ts
import { CreateUserCommand } from './command.class';
import { UserData } from 'path/to/user/data';

const data: UserData = {
    id: 'some-id',
    name: 'John'
}

const createUser = new CreateUserCommand();
await createUser.execute(data);
```

## Defining a Query
To define a query, we extend the `Query` class.
```ts
import { Query } from '@swindle/cqrs`;

export class GetUserByIdQuery extends Query {

    constructor() {
        super();
    }

    public async execute(id: string): Promise<UserData> {
        // definition here...
        return data;
    }
}
```
All queries extend the `Query` class. Every `Query` class defines an `execute()` method, wheich defines the body of the command. The `execute()` method is very flexible and 
allows you to pass in however many parameters you need.

We can use our query as follows.
```ts
import { GetUserByIdQuery } from './query.class';

const getUserById = new GetUserByIdQuery();
const user = await getUserById.execute('foo');
console.log(user);
```