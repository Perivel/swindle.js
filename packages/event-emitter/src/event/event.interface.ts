import { DateTime } from "@swindle/core";
import { EventIdInterface } from "./event-id.interface";



export interface EventInterface {

    /**
     * eventId()
     *
     * eventId() gets the event id. The event id is the unique identifier for a specific
     * event instance that took place at a given moment in time.
     */

    eventId(): EventIdInterface;

    /**
     * eventName()
     *
     * eventName() gets the name of the event.
     */

    eventName(): string;


    /**
     * occuredOn()
     * 
     * occuredOn() gets the timestamp the event occured on.
     */

    occuredOn(): DateTime;
}