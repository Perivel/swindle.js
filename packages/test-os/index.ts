import { FileSystem, Path, File, FileOpenFlag, FileOpenMode } from "@swindle/filesystem";
import { Process } from "@swindle/os";

const main = async (): Promise<void> => {
    const outputPath = Path.FromSegments(Process.Cwd(), "my-files");
    const contents = await Process.Spawn("ls", [], {
        shell: true,
        encoding: "utf8",
        cwd: Process.Cwd().toString(),
    });

    // make sure the path does not exist.

    if (await FileSystem.Contains(outputPath)) {
        console.log(`THe path ${outputPath.toString()} exists.`);
    }
    else {
        console.log("The path does not exist.");
    }

    // these other two are just for consistency.

    if (await FileSystem.Contains(outputPath)) {
        console.log(`THe path ${outputPath.toString()} exists.`);
    }
    else {
        console.log("The path does not exist.");
    }

    if (await FileSystem.Contains(outputPath)) {
        console.log(`THe path ${outputPath.toString()} exists.`);
    }
    else {
        console.log("The path does not exist.");
    }

    // create the path.
    console.log("Creating output file.");
    const outputFilePath = Path.FromSegments(outputPath, "output.txt");
    await FileSystem.CreateFile(outputFilePath, true);
    
    // make sure the path exists now.
    if (await FileSystem.Contains(outputFilePath)) {
        console.log(`THe path ${outputFilePath.toString()} exists.`);
    }
    else {
        console.log("The path does not exist.");
    }

    // just for consistency.
    if (await FileSystem.Contains(outputFilePath)) {
        console.log(`THe path ${outputFilePath.toString()} exists.`);
    }
    else {
        console.log("The path does not exist.");
    }

    // just for consistency.
    if (await FileSystem.Contains(outputFilePath)) {
        console.log(`THe path ${outputFilePath.toString()} exists.`);
    }
    else {
        console.log("The path does not exist.");
    }

    // write the contents to the file.
    const file =  await FileSystem.Open(outputFilePath, FileOpenFlag.WRITE, FileOpenMode.WRITEONLY);
    await file.writeString(contents!.toString());
    await file.close();

    // create another directory
    const path = Path.FromSegments(Process.Cwd(), "ANOTHER-DIR");
    
    if (!await FileSystem.Contains(path)) {
        await FileSystem.CreateDirectory(path);
    }

    // make sure the path exists now.
    if (await FileSystem.Contains(path)) {
        console.log(`THe path ${path.toString()} exists.`);
    }
    else {
        console.log("The path does not exist.");
    }
}

main().then(() => console.log("Finished!"))