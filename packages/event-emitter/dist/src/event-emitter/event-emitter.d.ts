import { EventEmitterInterface } from "./event-emitter.interface";
import { Subscriber } from "../subscriber/subscriber";
import { CompositeEvent } from "../event/composite-event";
import { PriorityQueue } from "@swindle/structs";
import { EventEmitterHook } from "../types/event-emitter-hook.type";
import { EventEmitterHandlerErrorHook } from "../types/event-emitter-handler-error-hook.type";
/**
 * EventEmitter
 */
export declare class EventEmitter implements EventEmitterInterface {
    private subscribers;
    private _onBeforeHandlerExecution;
    private _onAfterHandlersExecute;
    private _onHandlerError;
    constructor(subscribers?: Subscriber[], onBeforeHandlersExecute?: EventEmitterHook, onAfterHandlersExecute?: EventEmitterHook, onHandlerError?: EventEmitterHandlerErrorHook);
    /**
     * addSubscriber()
     *
     * add() attempts to add a subscription to the publisher list.
     *
     * NOTE: Duplicate subscriptions will not be added.
     * @param subscriber The subscription to be added.
     */
    addSubscriber(subscriber: Subscriber): void;
    /**
     * emit()
     *
     * emit() emits an event.
     * @param event The event to emit.
     * @emits EventHandlerFailed When an event handler fails.
     */
    emit(event: CompositeEvent): Promise<void>;
    /**
     * removeSubscriber()
     *
     * remove() removes a subscription.
     * @param suspect The subscription to be removed.
     */
    removeSubscriber(suspect: Subscriber): void;
    /**
     * getSubscribersForEvent()
     *
     * gets the relevant subscribers for the specified event.
     * @param event the event
     * @param handlers THe list of registered event handlers.
     * @returns A priorityQueue consisting of the subscribers to the given event.
     */
    protected getSubscribersForEvent(event: CompositeEvent, handlers: Subscriber[]): PriorityQueue<Subscriber>;
    /**
     * subscriberExists()
     *
     * subscriberExists() determines whether or not a subscription exists already.
     * @param suspect The suscpect to be found.
     */
    private subscriberExists;
    /**
     * executeEventHandlers()
     *
     * executeEventHandlers() executes the event handlers for the event.
     * @param subscribersArray the list of subscribers to call.
     * @param event the event to execute upon.
     * @emits EventHandlerFailed when a subscriber fails.
     */
    private executeEventHandlers;
}
//# sourceMappingURL=event-emitter.d.ts.map