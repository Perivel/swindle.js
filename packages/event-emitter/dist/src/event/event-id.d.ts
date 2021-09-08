import { Id } from "@swindle/core";
import { EventIdInterface } from "./event-id.interface";
/**
 * DoainEventId
 *
 * DomainEventId represents the domain event id.
 */
export declare class EventId extends Id implements EventIdInterface {
    constructor(value: string);
    /**
     * Generate()
     *
     * generate creates a random DomainEventId.
     */
    static Generate(): EventId;
    equals(suspect: any): boolean;
    /**
     * id()
     *
     * id() gets the value of the Domain event id.
     */
    id(): string;
    serialize(): string;
}
//# sourceMappingURL=event-id.d.ts.map