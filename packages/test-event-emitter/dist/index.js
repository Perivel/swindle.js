"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@swindle/core");
const event_emitter_1 = require("@swindle/event-emitter");
class MessageSent extends event_emitter_1.CompositeEvent {
    constructor(message, occuredOn = core_1.DateTime.Now(), id = undefined) {
        super(occuredOn, id);
        this._msg = message;
    }
    static EventName() {
        return "messag-sent";
    }
    message() {
        return this._msg;
    }
    serializeData() {
        return this.eventName() + "with id: " + this.eventId().toString();
    }
}
const main = async () => {
    const emitter = new event_emitter_1.EventEmitter([], async (event, emitter) => console.log("This is before the handlers are executed."), async (event, emitter) => console.log("This is after the handlers are executed."), async (event, sub, emitter) => console.log("There was an error..."));
    emitter.addSubscriber(new event_emitter_1.Subscriber(event_emitter_1.SubscriberId.Generate(), MessageSent.EventName(), 1, "print-message", async (event) => {
        const messageSentEvent = event;
        console.log("message: " + messageSentEvent.message());
    }, false));
    emitter.addSubscriber(new event_emitter_1.Subscriber(event_emitter_1.SubscriberId.Generate(), MessageSent.EventName(), 2, "print-response", async (event) => {
        console.log("THis is the response.");
    }, false));
    console.log(emitter.subscriberList());
    await emitter.emit(new MessageSent("This is my message."));
};
main().then(() => console.log("Finished!"));
//# sourceMappingURL=index.js.map