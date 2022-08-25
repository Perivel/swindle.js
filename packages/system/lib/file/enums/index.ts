// file enums
import { constants } from 'fs';

export enum CopyFileMode {
    /**
     * If present, the copy operation will fail with an error if the destination path already exists.
     * COPYFILE_EXCL = constants.COPYFILE_EXCL,
    */
     EXCL = constants.COPYFILE_EXCL,

     // If present, the copy operation will attempt to create a copy-on-write reflink. If the underlying
     // platform does not support copy-on-write, then a fallback copy mechanism is used.
     FICLONE = constants.COPYFILE_FICLONE,
 
     // If present, the copy operation will attempt to create a copy-on-write reflink. If the underlying platform
     // does not support copy-on-write, then the operation will fail with an error.
     FICLONE_FORCE = constants.COPYFILE_FICLONE_FORCE,
}