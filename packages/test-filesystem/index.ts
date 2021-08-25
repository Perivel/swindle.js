import { FileSystem, Path, File, FileOpenFlag, FileOpenMode } from "@swindle/filesystem";
import { clear } from "console";

const main = async (): Promise<void> => {
    // create directory.
    const dirPath = Path.FromSegments("my-files");

    try {
        console.log("Creating Directory: " + dirPath.toString());
        FileSystem.CreateDirectory(dirPath);
        console.log("Created Directory: " + dirPath.toString());
    }
    catch(e) {
        console.log((e as Error).message)
    }

    // create a file.
    const filePath = Path.FromSegments(dirPath.toString(), "test.txt");
    try {
        console.log("Creating File: " + filePath.toString());
        FileSystem.CreateFile(filePath);
        console.log("Created File: " + filePath.toString());
    }
    catch(e) {
        console.log((e as Error).message)
    }

    if (await FileSystem.ContainsFile(filePath)) {
        console.log("File in the system.");
    }
    else {
        console.log("ContainsFile() screwed up...");
    }

    try {
        FileSystem.Access(filePath);
        console.log("Access() is all good.");
    }
    catch(e) {
        console.log((e as Error).message + "\n\n");
    }

    // write to the file.
    let file: File|null = null;
    try {
        console.log("Opening file " + filePath.toString())
        file = await FileSystem.Open(filePath, FileOpenFlag.APPEND, FileOpenMode.APPEND);
        console.log("Opened file " + filePath.toString())

        console.log("Writing to file " + filePath.toString())
        await file.writeString("Hello World");
        console.log("Wrote to file " + filePath.toString())
    }
    catch(e) {
        console.log((e as Error).message)
    }
    finally {
        if (file) {
            await file.close();
            console.log("Closed file " + filePath.toString())
        }
    }
    
}

main().then(() => console.log("Finished!"))