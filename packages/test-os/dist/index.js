"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const filesystem_1 = require("@swindle/filesystem");
const os_1 = require("@swindle/os");
const main = async () => {
    const outputPath = filesystem_1.Path.FromSegments(os_1.Process.Cwd(), "my-files");
    const contents = await os_1.Process.Spawn("ls", [], {
        shell: true,
        encoding: "utf8",
        cwd: os_1.Process.Cwd().toString(),
    });
    // make sure the path does not exist.
    if (await filesystem_1.FileSystem.Contains(outputPath)) {
        console.log(`THe path ${outputPath.toString()} exists.`);
    }
    else {
        console.log("The path does not exist.");
    }
    // these other two are just for consistency.
    if (await filesystem_1.FileSystem.Contains(outputPath)) {
        console.log(`THe path ${outputPath.toString()} exists.`);
    }
    else {
        console.log("The path does not exist.");
    }
    if (await filesystem_1.FileSystem.Contains(outputPath)) {
        console.log(`THe path ${outputPath.toString()} exists.`);
    }
    else {
        console.log("The path does not exist.");
    }
    // create the path.
    console.log("Creating output file.");
    const outputFilePath = filesystem_1.Path.FromSegments(outputPath, "output.txt");
    await filesystem_1.FileSystem.CreateFile(outputFilePath, true);
    // make sure the path exists now.
    if (await filesystem_1.FileSystem.Contains(outputFilePath)) {
        console.log(`THe path ${outputFilePath.toString()} exists.`);
    }
    else {
        console.log("The path does not exist.");
    }
    // just for consistency.
    if (await filesystem_1.FileSystem.Contains(outputFilePath)) {
        console.log(`THe path ${outputFilePath.toString()} exists.`);
    }
    else {
        console.log("The path does not exist.");
    }
    // just for consistency.
    if (await filesystem_1.FileSystem.Contains(outputFilePath)) {
        console.log(`THe path ${outputFilePath.toString()} exists.`);
    }
    else {
        console.log("The path does not exist.");
    }
    // write the contents to the file.
    const file = await filesystem_1.FileSystem.Open(outputFilePath, filesystem_1.FileOpenFlag.WRITE, filesystem_1.FileOpenMode.WRITEONLY);
    await file.writeString(contents.toString());
    await file.close();
    // create another directory
    const path = filesystem_1.Path.FromSegments(os_1.Process.Cwd(), "ANOTHER-DIR");
    if (!await filesystem_1.FileSystem.Contains(path)) {
        await filesystem_1.FileSystem.CreateDirectory(path);
    }
    // make sure the path exists now.
    if (await filesystem_1.FileSystem.Contains(path)) {
        console.log(`THe path ${path.toString()} exists.`);
    }
    else {
        console.log("The path does not exist.");
    }
};
main().then(() => console.log("Finished!"));
//# sourceMappingURL=index.js.map