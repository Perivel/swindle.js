import { EventEmitterInterface } from "./event-emitter.interface";
import { Subscriber } from "../subscriber/subscriber";
import { CompositeEvent } from "../event/composite-event";
import { PriorityQueue } from "@swindle/structs";
import { EventEmitterHook } from "../types/event-emitter-hook.type";
import { EventEmitterHandlerErrorHook } from "../types/event-emitter-handler-error-hook.type";

/**
 * EventEmitter
 */

export class EventEmitter implements EventEmitterInterface{

    private subscribers: Array<Subscriber>;
    
    // hooks
    // create hook functions for onBeforeHandlersExecute(event, emitter), onAfterHandlersExecute(event, emitter), and onHandlerError(event, emitter)
    private _onBeforeHandlerExecution: EventEmitterHook;
    private _onAfterHandlersExecute: EventEmitterHook;
    private _onHandlerError: EventEmitterHandlerErrorHook;

    constructor(
        subscribers: Subscriber[] = [],
        onBeforeHandlersExecute: EventEmitterHook = async (event, emitter): Promise<void> => { },
        onAfterHandlersExecute: EventEmitterHook = async (event, emitter): Promise<void> => { },
        onHandlerError: EventEmitterHandlerErrorHook = async (event, sub, emitter): Promise<void> => { },
    ) {
        this.subscribers = subscribers;
        this._onBeforeHandlerExecution = onBeforeHandlersExecute;
        this._onAfterHandlersExecute = onAfterHandlersExecute;
        this._onHandlerError = onHandlerError;
    }

    /**
     * addSubscriber()
     * 
     * add() attempts to add a subscription to the publisher list.
     * 
     * NOTE: Duplicate subscriptions will not be added.
     * @param subscriber The subscription to be added.
     */

    public addSubscriber(subscriber: Subscriber): void {
        if (subscriber && (!this.subscriberExists(subscriber))) {
            this.subscribers.push(subscriber);
        }
    }

    /**
     * emit()
     * 
     * emit() emits an event.
     * @param event The event to emit.
     * @emits EventHandlerFailed When an event handler fails.
     */

    public async emit(event: CompositeEvent): Promise<void> {
        // execute the onBeforeHandlersExecute hook.
        await this._onBeforeHandlerExecution(event, this);

        // get the relevant events.
        const queue = this.getSubscribersForEvent(event, this.subscribers);

        // handle the events.
        await this.executeEventHandlers(queue.toArray(), event);

        // execute the onAfterHandlersExecution hook.
        await this._onAfterHandlersExecute(event, this);
    }

    /**
     * removeSubscriber()
     * 
     * remove() removes a subscription.
     * @param suspect The subscription to be removed.
     */

    public removeSubscriber(suspect: Subscriber): void {
        this.subscribers = this.subscribers.filter(subscriber => !subscriber.equals(suspect));
    }

    /**
     * subscribers()
     * 
     * gets the list of event subscribers.
     */

    public subscriberList(): Subscriber[] {
        return this.subscribers;
    }


    // ===================================
    // helpers
    // ===================================

    /**
     * getSubscribersForEvent()
     * 
     * gets the relevant subscribers for the specified event.
     * @param event the event 
     * @param handlers THe list of registered event handlers.
     * @returns A priorityQueue consisting of the subscribers to the given event.
     */

    protected getSubscribersForEvent(event: CompositeEvent, handlers: Subscriber[]): PriorityQueue<Subscriber> {
        const queue = new PriorityQueue<Subscriber>();

        // get the relevant subscribers.
        const eventName = event.eventName();
        handlers.forEach(sub => {
            if (sub.eventName() === eventName) {
                // add the subscriber to the queue.
                queue.enqueue(sub, sub.priority());
            }
        });

        return queue;
    }

    /**
     * subscriberExists()
     * 
     * subscriberExists() determines whether or not a subscription exists already.
     * @param suspect The suscpect to be found.
     */

    private subscriberExists(suspect: Subscriber): boolean {
        const foundSubscribers = this.subscribers.filter(subscription => suspect.equals(subscription));
        return foundSubscribers.length !== 0;
    }

    /**
     * executeEventHandlers()
     * 
     * executeEventHandlers() executes the event handlers for the event.
     * @param subscribersArray the list of subscribers to call.
     * @param event the event to execute upon.
     * @emits EventHandlerFailed when a subscriber fails.
     */

    private async executeEventHandlers(subscribersArray: Subscriber[], event: CompositeEvent): Promise<boolean> {
        for (let sub of subscribersArray) {
            try {
                // execute the operation.
                await sub.handleEvent(event);
                sub.resetHandleAttempts();
            }
            catch(error) {
                // The handler failed.
                sub.incrementFailedHandleAttempts();

                // emit the event handler failed event.
                await this._onHandlerError(event, sub, this);
                
                if (sub.shouldStopPropogationOnError()) {
                    return false;
                }
            }
        }
        return true;
    }
 }