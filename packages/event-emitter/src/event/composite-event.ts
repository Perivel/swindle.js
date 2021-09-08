import { EventInterface } from "./event.interface";
import { Serializable, DateTime } from "@swindle/core";
import { EventId } from "./event-id";

/**
 * CompositeEvent
 *
 * The base event class.
 */


export abstract class CompositeEvent implements EventInterface, Serializable {

    private _timestamp: DateTime;
    private _id: EventId;
    private _eventName: string;

    /**
     * Creates a DomainEvent instance.
     * @param timestamp The timestamp of the event. If omitted, it will be set to the current DateTime timestamp.
     * @param id The unique occurence id for this specific event instance. This field is optional. It is highly recommended you do not provide this value manually.
     * @throws InvalidArgumentException if the event name is empty.
     */

    constructor(timestamp: DateTime = DateTime.Now(), id: string = "") {
        this._timestamp = timestamp;
        this._id = (id) ? new EventId(id) : EventId.Generate();
        this._eventName = (this.constructor as any).EventName();
    }

    /**
     * EventName()
     * 
     * EventName() specifies the name of the event. It is hightly recommended event names be unique and 
     * descriptive.
     * 
     * NOTE: This static method must be redefined for every subclass.
     */

    public static EventName(): string {
        throw new Error('EventNotSpecifiedException.');
    }

    /**
     * eventId()
     * 
     * eventId() gets the event id.
     */

    public eventId(): EventId {
        return new EventId(this._id.id());
    }

    /**
     * eventName()
     * 
     * eventName() gets the name of the event.
     */

    public eventName(): string {
        return this._eventName;
    }

    /**
     * occuredOn()
     * 
     * occuredOn() gets the timestamp when the event occured.
     */

    public occuredOn(): DateTime {
        return this._timestamp;
    }

    /**
     * serialize()
     * 
     * serialize() serializes the event data.
     */

    public serialize(): string {
        return JSON.stringify({
            id: this.eventId().serialize(),
            name: this.eventName(),
            data: this.serializeData()
        });
    }

    /**
     * serializeData()
     * 
     * serializes the event data.
     */
    
    public abstract serializeData(): string;

    public toString(): string {
        return this.serialize();
    }
}