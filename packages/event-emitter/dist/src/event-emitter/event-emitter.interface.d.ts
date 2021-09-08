import { EventInterface } from "../event/event.well";
import { SubscriberInterface } from "./../subscriber/subscribers.well";
/**
 * EventEmitterInterface
 *
 * EventEmitterInterface specifies the event functions.
 */
export interface EventEmitterInterface {
    /**
     * addListener()
     *
     * addListener() adds a listener.
     * @param subscriber The subscriber to add.
     */
    addSubscriber(subscriber: SubscriberInterface): void;
    /**
     * emit()
     *
     * emit() emits an event.
     * @param event The event to emit.
     */
    emit(event: EventInterface): Promise<void>;
    /**
     * removeListener()
     *
     * removeListener() removes a listener.
     */
    removeSubscriber(subscriber: SubscriberInterface): void;
}
//# sourceMappingURL=event-emitter.interface.d.ts.map