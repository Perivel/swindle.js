"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompositeEvent = void 0;
const core_1 = require("@swindle/core");
const event_id_1 = require("./event-id");
/**
 * CompositeEvent
 *
 * The base event class.
 */
class CompositeEvent {
    /**
     * Creates a DomainEvent instance.
     * @param timestamp The timestamp of the event. If omitted, it will be set to the current DateTime timestamp.
     * @param id The unique occurence id for this specific event instance. This field is optional. It is highly recommended you do not provide this value manually.
     * @throws InvalidArgumentException if the event name is empty.
     */
    constructor(timestamp = core_1.DateTime.Now(), id = "") {
        this._timestamp = timestamp;
        this._id = (id) ? new event_id_1.EventId(id) : event_id_1.EventId.Generate();
        this._eventName = this.constructor.EventName();
    }
    /**
     * EventName()
     *
     * EventName() specifies the name of the event. It is hightly recommended event names be unique and
     * descriptive.
     *
     * NOTE: This static method must be redefined for every subclass.
     */
    static EventName() {
        throw new Error('EventNotSpecifiedException.');
    }
    /**
     * eventId()
     *
     * eventId() gets the event id.
     */
    eventId() {
        return new event_id_1.EventId(this._id.id());
    }
    /**
     * eventName()
     *
     * eventName() gets the name of the event.
     */
    eventName() {
        return this._eventName;
    }
    /**
     * occuredOn()
     *
     * occuredOn() gets the timestamp when the event occured.
     */
    occuredOn() {
        return this._timestamp;
    }
    /**
     * serialize()
     *
     * serialize() serializes the event data.
     */
    serialize() {
        return JSON.stringify({
            id: this.eventId().serialize(),
            name: this.eventName(),
            data: this.serializeData()
        });
    }
    toString() {
        return this.serialize();
    }
}
exports.CompositeEvent = CompositeEvent;
//# sourceMappingURL=composite-event.js.map