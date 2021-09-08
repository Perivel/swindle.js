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
        async (event, sub, emitter): Promise<void> => console.log("There was an error...")
    );
    emitter.addSubscriber(new Subscriber(SubscriberId.Generate(), MessageSent.EventName(), 1, "print-message", async (event) => {
        const messageSentEvent = event as MessageSent;
        console.log("message: " + messageSentEvent.message());
    }, false));

    emitter.addSubscriber(new Subscriber(SubscriberId.Generate(), MessageSent.EventName(), 2, "print-response", async (event) => {
        console.log("THis is the response.");
    }, false));

    console.log(emitter.subscriberList());

    await emitter.emit(new MessageSent("This is my message."));
}

main().then(() => console.log("Finished!"))