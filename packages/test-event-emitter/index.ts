import { DateTime } from "@swindle/core";
import { EventEmitter, CompositeEvent, Subscriber, SubscriberId } from "@swindle/event-emitter";

class MessageSent extends CompositeEvent {

    private readonly _msg: string;

    public static EventName(): string {
        return "messag-sent";
    }

    constructor(message: string, occuredOn: DateTime = DateTime.Now(), id: string|undefined = undefined) {
        super(occuredOn, id);
        this._msg = message;
    }

    public message(): string {
        return this._msg;
    }

    public serializeData(): string {
        return this.eventName() + "with id: " + this.eventId().toString();
    }
}

const main = async (): Promise<void> => {
    const emitter = new EventEmitter(
        [],
        async (event, emitter): Promise<void> => console.log("This is before the handlers are executed."),
        async (event, emitter): Promise<void> => console.log("This is after the handlers are executed."),
        async (event, error, sub, emitter): Promise<void> => console.log(error.message)
    );
    emitter.addSubscriber(new Subscriber(SubscriberId.Generate(), MessageSent.EventName(), 1, "print-message", async (event) => {
        const messageSentEvent = event as MessageSent;
        
        setTimeout(() => {
            console.log("message: " + messageSentEvent.message());
        }, 3000);

    }, false));

    emitter.addSubscriber(new Subscriber(SubscriberId.Generate(), MessageSent.EventName(), 2, "print-response", async (event) => {
        console.log("THis is the response.");
    }, false));

    emitter.addSubscriber(new Subscriber(SubscriberId.Generate(), MessageSent.EventName(), 3, "throw-error", async (event) => {
        throw new Error("Something went wrong.")
    }, false));

    emitter.addSubscriber(new Subscriber(SubscriberId.Generate(), MessageSent.EventName(), 4, "extra-processing", async (event) => {
        console.log("Some more extra processing.");
    }, false));

    emitter.addSubscriber(new Subscriber(SubscriberId.Generate(), MessageSent.EventName(), 5, "throw-error", async (event) => {
        throw new Error("Another error")
    }, true));

    emitter.addSubscriber(new Subscriber(SubscriberId.Generate(), MessageSent.EventName(), 6, "extra-processing", async (event) => {
        console.log("This should not execute.");
    }, false));

    console.log(emitter.subscriberList());

    await emitter.emit(new MessageSent("This is my message."));
}

main().then(() => console.log("Finished!"))