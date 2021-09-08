# Swindle Event Emitter
An event emitter implementation for TypeScript.

# Installation
To install Swindle Event Emitter, use the following command with npm:
```
npm i @swindle/event-emitter
```
or with Yarn:
```
yarn add @swindle/event-emitter
```
# Usage
## Creating the Emitter
To create our event emitter, we instanciate the `EventEmitter` class.
```ts
import { EventEmitter } from "@swindle/event-emitter";

const emitter = new EventEmitter();
```
The `EventEmitter` class takes some optional arguments to customize its behavior.
**subscribers**: The subscribers argument is an array of `Subscriber` objects that will serve as the initial event listeners.
**onBeforeHandlersExecute**: An asynchronous function to be executed before the event handlers are run.
**onAfterHandlersExcecute**: An asynchronous function to be executed after all the event handlers are executed.
**onHandlerError**: An asynchronous function to be executed when a handler encounters an error.

## Emitting an Event
To emit an event, we use the `EventEmitter` class' `emit()` method.
```ts
await emitter.emit(new SomeEvent(someArguments));
```
The `emit()` will accept an instance of an event, and execute the relevant listeners (Subscribers). 

## Defining an Event
To define an event, we extend the `CompositeEvent` class.
```ts
import { CompositeEvent } from "@swindle/event-emitter";
import { DateTime } from "@swndle/core";

export class UserCreated extends CompositeEvent {

    constructor(occuredOn: DateTime = DateTime.Now(), id: string|undefined = undefined) {
        super(occuredOn, id);
    }
}
```
The `CompositeEvent` class takes two arguments. The first is the timestamp of the event. Here, we set a default to the current datetime for when the event is instanciated. The second argument is the unique ID for every instance of the event. We can either set this to a string value. However, if we set it to `undefined`, a unique ID will be generated for us every time the event is instanciated.

Our next step is to define the event name. To do this, we override the `CompositeEvent.EventName()` static method.
```ts
import { CompositeEvent } from "@swindle/event-emitter";
import { DateTime } from "@swndle/core";

export class UserCreated extends CompositeEvent {

    constructor(occuredOn: DateTime = DateTime.Now(), id: string|undefined = undefined) {
        super(occuredOn, id);
    }

    public static EventName(): string {
        return "user-created";
    }
}
```
Here, we define an event name as `user-created`. You can name events whatever you like. However, the recommended convention is to use paramcase format (i.e. event-name). 

The last requirement is to override the `serializeData()` method to specify how we want our event data to be serialized.
```ts
import { CompositeEvent } from "@swindle/event-emitter";
import { DateTime } from "@swndle/core";

export class UserCreated extends CompositeEvent {

    constructor(occuredOn: DateTime = DateTime.Now(), id: string|undefined = undefined) {
        super(occuredOn, id);
    }

    public static EventName(): string {
        return "user-created";
    }

    public serializeData(): string {
        return JSON.stringify({
            // serialize event data here.
        });
    }
}
```
Once this is complete, we can define the event however we want. Below is a sample implementation of a UserCreated event.
```ts
import { CompositeEvent } from "@swindle/event-emitter";
import { DateTime } from "@swndle/core";
import { User } from "./path/to/user/model";

export class UserCreated extends CompositeEvent {

    private createdUser: User;

    constructor(user: User, occuredOn: DateTime = DateTime.Now(), id: string|undefined = undefined) {
        super(occuredOn, id);
        this.createdUser = user;
    }

    public static EventName(): string {
        return "user-created";
    }

    public user(): User {
        return this.createdUser;
    }

    public serializeData(): string {
        return JSON.stringify({
            user: this.user().serialize()
        });
    }
}
```
## Event Subscribers
Event Subscribers are objects that execute in response to events. To define an event subscriber, we use the `Subscriber` class.
```ts
import { Subscriber, SubscriberId } from "@swindle/event-emitter';

const sub = new Subscriber(
    SubscriberId.Generate(),
    "some-event",
    2,
    "print-event-content",
    async (event: CompositeEvent): Promise<void> => {
        constole.log(event.serialize());
    },
    false
);
```
The `Subscriber` class takes five arguments.
**subscriberId**: The unique id for the event subscriber.
**eventName**: The name of the event we want to subscribe to.
**priority**: The priority of the event subscriber. The lower the priority, the earlier the subscriber will be executed.
**handler**: The event handler function to execute.
**stopPropogationOnError**: A flag to indicate whether or not event propogation to subsequent subscribers should stop if this subscriber's handler function throws an error. By default, it is set to false.

To add a subscriber, we use the `addSubscriber()` method.
```ts
emitter.addSubscriber(subscriber);
```

To remove a subscriber, we use the `removeSubscriber()` method.
```ts
emitter.removeSubscriber(subscriber);
```