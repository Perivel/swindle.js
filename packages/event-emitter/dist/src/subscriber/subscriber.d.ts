import { SubscriberInterface } from "./subscriber.interface";
import { SubscriberId } from "./subscriber-id";
import { Equatable } from "@swindle/core";
import { EventHandler } from "./event-handler.type";
import { CompositeEvent } from "../event/composite-event";
/**
 * EventSubscription
 *
 * EventSubscription represents an Event Subscription.
 */
export declare class Subscriber implements SubscriberInterface, Equatable {
    private readonly _eventName;
    private readonly _id;
    private _handler;
    private _label;
    private _priority;
    private _handleAttempts;
    private _stopPropogationOnError;
    /**
     * Creates an EventSubscription instance.
     * @param id The id of the subscription.
     * @param eventName the name of the event to subscribe to.
     * @param priority The numeric priority of the subscriber. The lower the priority, the earlier the subscriber will be run.
     * @param label a string label for the subscriber. This is mainly for referencial purposes only.
     * @param handler the event handler.
     * @param stopPropogationOnError A flag indicating whether event propogation shou.d stop if this subscriber handler encounters an error.
     */
    constructor(id: SubscriberId, eventName: string, priority: number, label: string, handler: EventHandler, stopPropogationOnError?: boolean);
    /**
     * equals()
     *
     * equals() compares the instance to the suspect, to determine if they are equal.
     * @param suspect The suspect to be compared
     */
    equals(suspect: any): boolean;
    /**
     * eventName()
     *
     * eventName() gets the name of the event being subscribed to.
     */
    eventName(): string;
    /**
     * handleAttempts()
     *
     * gets the number of times the subscriber's handleEvent() function was called and failed.
     */
    handleAttempts(): number;
    /**
     * id()
     *
     * id() gets the subscription id.
     */
    id(): SubscriberId;
    /**
     * incrementFailedHandleAttempts()
     *
     * increments the number of times the handler has failed.
     */
    incrementFailedHandleAttempts(): void;
    /**
     * label()
     *
     * label() gets the subscription label.
     */
    label(): string;
    /**
     * Executes the subscriber's designated event action.
     * @param event The event object
     */
    handleEvent(event: CompositeEvent): Promise<void>;
    /**
     * priority()
     *
     * priority() gets the priority of the event.
     */
    priority(): number;
    /**
     * resetHandleAttempts()
     *
     * resets the number of handle attempts.
     */
    resetHandleAttempts(): void;
    /**
     * shouldStopPropogationOnError()
     *
     * shouldStopPropogationOnError() determines if the event propogation
     * should stop if the handler encounters an error.
     */
    shouldStopPropogationOnError(): boolean;
    serialize(): string;
}
//# sourceMappingURL=subscriber.d.ts.map