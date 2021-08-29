"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const filesystem_1 = require("@swindle/filesystem");
const main = async () => {
    const testDir = filesystem_1.Path.FromSegments("my-files");
    const testDest1 = filesystem_1.Path.FromSegments(testDir, "first");
    const testDest2 = filesystem_1.Path.FromSegments(testDir, "second");
    const originFilePath = filesystem_1.Path.FromSegments(testDest1, "stats.txt");
    const copyFilePath = filesystem_1.Path.FromSegments(testDest2, "stats.txt");
    // make sure the directory does not already exist with FileSystem.Contains()
    console.log("Making sure directory is available.");
    if (await filesystem_1.FileSystem.Contains(testDir)) {
        console.log(`Directory ${testDir.toString()} exists.`);
    }
    else {
        console.log(`Directory ${testDir.toString()} does not exists.`);
    }
    // create a directory with FileSystem.CreateDirectory()
    console.log("Creating directory.");
    try {
        await filesystem_1.FileSystem.CreateDirectory(testDir);
    }
    catch (e) {
        console.log(e.message);
        return;
    }
    // make sure the directory exists with FileSystem.Contains()
    console.log("Checking if directory exists.");
    if (await filesystem_1.FileSystem.Contains(testDir)) {
        console.log(`Directory ${testDir.toString()} exists.`);
    }
    else {
        console.log(`Directory ${testDir.toString()} does not exists.`);
    }
    // create a file in testDest1 with FileSystem.CreateFile
    console.log("Creating a file in " + testDest1.toString());
    try {
        await filesystem_1.FileSystem.CreateFile(originFilePath, true);
    }
    catch (e) {
        console.log(e.message);
        return;
    }
    // Open the file with FileSystem.Open()
    let file = null;
    console.log("Creating a file in " + testDest1.toString());
    try {
        file = await filesystem_1.FileSystem.Open(originFilePath);
    }
    catch (e) {
        console.log(e.message);
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
        console.log(e.message);
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
        file = await filesystem_1.FileSystem.Open(originFilePath, filesystem_1.FileOpenFlag.APPEND, filesystem_1.FileOpenMode.APPEND);
        await file.append("This is a second line.");
    }
    catch (e) {
        console.log(e.message);
        return;
    }
    finally {
        await file.close();
    }
    // copy file from testdir1 to testDir2 with FileSystem.CreateFile()
    console.log("Copying file");
    try {
        await filesystem_1.FileSystem.CopyFile(originFilePath, copyFilePath, true);
    }
    catch (e) {
        console.log(e.message);
        return;
    }
    // read the contents of copied file file.
    console.log("Reading Copied File");
    try {
        file = await filesystem_1.FileSystem.Open(copyFilePath, filesystem_1.FileOpenFlag.READ, filesystem_1.FileOpenMode.READONLY, "utf8");
        const contents = await file.readAll();
        console.log(contents);
    }
    catch (e) {
        console.log(e.message);
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
        await filesystem_1.FileSystem.Delete(testDest2, true, true);
    }
    catch (e) {
        console.log(e.message);
        return;
    }
};
main().then(() => console.log("Finished!"));
//# sourceMappingURL=index.js.map