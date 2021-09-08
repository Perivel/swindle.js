import { CompositeEvent } from "../event/composite-event";

/**
 * A custom type that indicates the form of an event action. 
 */

export type EventHandler = (event: CompositeEvent) => Promise<void>;