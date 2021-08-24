
import { DateTime } from './../../dates/dates.module';

/**
 * TimestampedResource
 *
 * TimestampedResource interface defines functionality for timestamped resources.
 */

export interface TimestampedResource {

    /**
     * createdOn()
     *
     * createdOn() gets the timestamp when the recource was created.
     */

    createdOn(): DateTime;

    /**
     * deletedOn()
     *
     * deletedOn() gets the timestamp when the rescource was deleted.
     */

    deletedOn(): DateTime | null;

    /**
     * updatedOn()
     *
     * updatedOn() gets the timestamp when the resource was last updated.
     */

    updatedOn(): DateTime;
}