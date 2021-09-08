"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventEmitter = void 0;
const structs_1 = require("@swindle/structs");
/**
 * EventEmitter
 */
class EventEmitter {
    constructor(subscribers = [], onBeforeHandlersExecute = async (event, emitter) => { }, onAfterHandlersExecute = async (event, emitter) => { }, onHandlerError = async (event, sub, emitter) => { }) {
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
    addSubscriber(subscriber) {
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
    async emit(event) {
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
    removeSubscriber(suspect) {
        this.subscribers = this.subscribers.filter(subscriber => !subscriber.equals(suspect));
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
    getSubscribersForEvent(event, handlers) {
        const queue = new structs_1.PriorityQueue();
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
    subscriberExists(suspect) {
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
    async executeEventHandlers(subscribersArray, event) {
        for (let sub of subscribersArray) {
            try {
                // execute the operation.
                await sub.handleEvent(event);
                sub.resetHandleAttempts();
            }
            catch (error) {
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
exports.EventEmitter = EventEmitter;
//# sourceMappingURL=event-emitter.js.map