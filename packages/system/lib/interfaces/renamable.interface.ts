

export interface Renamable {

    /**
     * rename()
     * 
     * renames the filesystem entry.
     * @param newName the new name of the directory.
     */

    rename(newName: string): Promise<Renamable>;
}