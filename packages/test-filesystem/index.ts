import { FileSystem, Path, File, FileOpenFlag, FileOpenMode } from "@swindle/filesystem";
import { clear } from "console";
import { FILE } from "dns";

const main = async (): Promise<void> => {
    const testDir = Path.FromSegments("my-files");
    const testDest1 = Path.FromSegments(testDir, "first");
    const testDest2 = Path.FromSegments(testDir, "second");
    const originFilePath = Path.FromSegments(testDest1, "stats.txt");
    const copyFilePath = Path.FromSegments(testDest2, "stats.txt")

    // make sure the directory does not already exist with FileSystem.Contains()
    console.log("Making sure directory is available.");
    if (await FileSystem.Contains(testDir)) {
        console.log(`Directory ${testDir.toString()} exists.`);
    }
    else {
        console.log(`Directory ${testDir.toString()} does not exists.`);
    }

    // create a directory with FileSystem.CreateDirectory()
    console.log("Creating directory.");
    try {
        await FileSystem.CreateDirectory(testDir);
    }
    catch(e) {
        console.log((e as Error).message);
        return;
    }

    // make sure the directory exists with FileSystem.Contains()
    console.log("Checking if directory exists.");
    if (await FileSystem.Contains(testDir)) {
        console.log(`Directory ${testDir.toString()} exists.`);
    }
    else {
        console.log(`Directory ${testDir.toString()} does not exists.`);
    }

    // create a file in testDest1 with FileSystem.CreateFile
    console.log("Creating a file in " + testDest1.toString());
    try {
        await FileSystem.CreateFile(originFilePath, true);
    }
    catch (e) {
        console.log((e as Error).message);
        return;
    }

    // Open the file with FileSystem.Open()
    let file: File|null = null;

    console.log("Creating a file in " + testDest1.toString());
    try {
        file = await FileSystem.Open(originFilePath);
    }
    catch (e) {
        console.log((e as Error).message);
        return;
    }

    // read the file stats.
    const stats = await file.stats();

    // write the file stats to the file.
    console.log("Writing file contents.");
    try {
        await file.writeString(stats.birthtime.toString());
    }
    catch (e) {
        console.log((e as Error).message);
        return;
    }

    // close the file.
    console.log("Closing file");
    if (file) {
        await file.close();
    }

    // append the file.
    console.log("Opening file for appending.");
    try {
        file = await FileSystem.Open(originFilePath, FileOpenFlag.APPEND, FileOpenMode.APPEND);
        await file.append("This is a second line.");
    }
    catch(e) {
        console.log((e as Error).message);
        return;
    }
    finally {
        await file.close();
    }

    // copy file from testdir1 to testDir2 with FileSystem.CreateFile()
    console.log("Copying file");
    try {
        await FileSystem.CopyFile(originFilePath, copyFilePath, true);
    }
    catch (e) {
        console.log((e as Error).message);
        return;
    }

    // read the contents of copied file file.
    console.log("Reading Copied File");
    try {
        file = await FileSystem.Open(copyFilePath, FileOpenFlag.READ, FileOpenMode.READONLY, "utf8");
        const contents = await file.readAll();
        console.log(contents);
    }
    catch (e) {
        console.log((e as Error).message);
        return;
    }

    // trying to write to the file should fail.
    console.log("Attempting to write to ReadOnly file should fail...");
    try {
        await file.writeString("Some string");
    }
    catch (e) {
        console.log("It failed. That's good.");
    }

    // close the file.
    if (file) {
        await file.close();
    }

    // delete the copied file with FileSystem.Delete()
    console.log("deleting file in " + copyFilePath.toString());
    try {
        await FileSystem.Delete(testDest2, true, true);
    }
    catch (e) {
        console.log((e as Error).message);
        return;
    }
}

main().then(() => console.log("Finished!"))