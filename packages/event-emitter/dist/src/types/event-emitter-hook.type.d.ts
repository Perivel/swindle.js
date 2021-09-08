import { EventEmitter } from "../event-emitter/event-emitter";
import { CompositeEvent } from "../event/composite-event";
/**
 * EentEmitterHook
 *
 * A type representing a hook function for an event emitter.
 */
export declare type EventEmitterHook = (event: CompositeEvent, emitter: EventEmitter) => Promise<void>;
//# sourceMappingURL=event-emitter-hook.type.d.ts.map