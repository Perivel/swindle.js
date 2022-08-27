import { PathInterface } from "../path";
import { MoveOptions } from "./move-options.interface";

/**
 * Movable
 * 
 * An interface indicating an entry can be moved.
 */

export interface Movable {

    /**
     * move()
     * 
     * moves the filesystem entry to the specified path.
     * @param to the destination to move the filesystem entry to.
     * @param options move options.
     * @returns the copied movable object.
     */

    move(to: PathInterface | string, options?: MoveOptions): Promise<Movable>;
}