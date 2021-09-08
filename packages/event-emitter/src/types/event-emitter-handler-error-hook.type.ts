import { EventEmitter } from "../event-emitter/event-emitter";
import { CompositeEvent } from "../event/composite-event";
import { Subscriber } from "../subscriber/subscriber";

/**
 * EentEmitterHandlerErrorHook
 * 
 * A type representing a hook function for handling when an event handler encounters an error.
 */

export type EventEmitterHandlerErrorHook = (event: CompositeEvent, error: Error, handler: Subscriber, emitter: EventEmitter) => Promise<void>;