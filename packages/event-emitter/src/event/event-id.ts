import { Id, UUID } from "@swindle/core";
import { EventIdInterface } from "./event-id.interface";

/**
 * DoainEventId
 * 
 * DomainEventId represents the domain event id.
 */

export class EventId extends Id implements EventIdInterface {

    constructor(value: string) {
        super(value);
    }

    /**
     * Generate()
     * 
     * generate creates a random DomainEventId.
     */

    public static Generate(): EventId {
        return new EventId(UUID.V4().id());
    }

    public equals(suspect: any): boolean {

        let isEqual = false;

        if (suspect instanceof EventId) {
            const other = suspect as EventId;
            return this.id() === other.id();
        }

        return isEqual;
    }

    /**
     * id()
     * 
     * id() gets the value of the Domain event id.
     */

    public id(): string {
        return super.id() as string;
    }

    public serialize(): string {
        return this.id();
    }
}