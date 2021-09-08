import { EventInterface } from "./event.interface";
import { Serializable, DateTime } from "@swindle/core";
import { EventId } from "./event-id";
/**
 * CompositeEvent
 *
 * The base event class.
 */
export declare abstract class CompositeEvent implements EventInterface, Serializable {
    private _timestamp;
    private _id;
    private _eventName;
    /**
     * Creates a DomainEvent instance.
     * @param timestamp The timestamp of the event. If omitted, it will be set to the current DateTime timestamp.
     * @param id The unique occurence id for this specific event instance. This field is optional. It is highly recommended you do not provide this value manually.
     * @throws InvalidArgumentException if the event name is empty.
     */
    constructor(timestamp?: DateTime, id?: string);
    /**
     * EventName()
     *
     * EventName() specifies the name of the event. It is hightly recommended event names be unique and
     * descriptive.
     *
     * NOTE: This static method must be redefined for every subclass.
     */
    static EventName(): string;
    /**
     * eventId()
     *
     * eventId() gets the event id.
     */
    eventId(): EventId;
    /**
     * eventName()
     *
     * eventName() gets the name of the event.
     */
    eventName(): string;
    /**
     * occuredOn()
     *
     * occuredOn() gets the timestamp when the event occured.
     */
    occuredOn(): DateTime;
    /**
     * serialize()
     *
     * serialize() serializes the event data.
     */
    serialize(): string;
    /**
     * serializeData()
     *
     * serializes the event data.
     */
    abstract serializeData(): string;
    toString(): string;
}
//# sourceMappingURL=composite-event.d.ts.map