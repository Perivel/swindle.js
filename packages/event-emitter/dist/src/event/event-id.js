"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventId = void 0;
const core_1 = require("@swindle/core");
/**
 * DoainEventId
 *
 * DomainEventId represents the domain event id.
 */
class EventId extends core_1.Id {
    constructor(value) {
        super(value);
    }
    /**
     * Generate()
     *
     * generate creates a random DomainEventId.
     */
    static Generate() {
        return new EventId(core_1.UUID.V4().id());
    }
    equals(suspect) {
        let isEqual = false;
        if (suspect instanceof EventId) {
            const other = suspect;
            return this.id() === other.id();
        }
        return isEqual;
    }
    /**
     * id()
     *
     * id() gets the value of the Domain event id.
     */
    id() {
        return super.id();
    }
    serialize() {
        return this.id();
    }
}
exports.EventId = EventId;
//# sourceMappingURL=event-id.js.map