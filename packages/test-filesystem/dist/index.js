"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const filesystem_1 = require("@swindle/filesystem");
const main = async () => {
    // create directory.
    const dirPath = filesystem_1.Path.FromSegments("my-files");
    try {
        console.log("Creating Directory: " + dirPath.toString());
        filesystem_1.FileSystem.CreateDirectory(dirPath);
        console.log("Created Directory: " + dirPath.toString());
    }
    catch (e) {
        console.log(e.message);
    }
    // create a file.
    const filePath = filesystem_1.Path.FromSegments(dirPath.toString(), "test.txt");
    try {
        console.log("Creating File: " + filePath.toString());
        filesystem_1.FileSystem.CreateFile(filePath);
        console.log("Created File: " + filePath.toString());
    }
    catch (e) {
        console.log(e.message);
    }
    if (await filesystem_1.FileSystem.ContainsFile(filePath)) {
        console.log("File in the system.");
    }
    else {
        console.log("ContainsFile() screwed up...");
    }
    try {
        filesystem_1.FileSystem.Access(filePath);
        console.log("Access() is all good.");
    }
    catch (e) {
        console.log(e.message + "\n\n");
    }
    // write to the file.
    let file = null;
    try {
        console.log("Opening file " + filePath.toString());
        file = await filesystem_1.FileSystem.Open(filePath, filesystem_1.FileOpenFlag.APPEND, filesystem_1.FileOpenMode.APPEND);
        console.log("Opened file " + filePath.toString());
        console.log("Writing to file " + filePath.toString());
        await file.writeString("Hello World");
        console.log("Wrote to file " + filePath.toString());
    }
    catch (e) {
        console.log(e.message);
    }
    finally {
        if (file) {
            await file.close();
            console.log("Closed file " + filePath.toString());
        }
    }
};
main().then(() => console.log("Finished!"));
//# sourceMappingURL=index.js.map