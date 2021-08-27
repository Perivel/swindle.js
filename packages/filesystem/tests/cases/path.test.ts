import { InvalidArgumentException } from "@swindle/core";
import { Path } from "./../../index";

test("Creating a valid path.", () => {
    expect(new Path("this/is/a/valid/file/path")).toBeInstanceOf(Path);
    expect(new Path("~")).toBeInstanceOf(Path);
    expect(new Path("../../path/to/somewhere")).toBeInstanceOf(Path);
    expect(new Path("some/path/with/extension.txt")).toBeInstanceOf(Path);
});

test("Creating an invalid path should throw an error", () => {
    expect(() => new Path("")).toThrow(InvalidArgumentException);
    expect(() => new Path("This is an invalid path")).toThrow(InvalidArgumentException);
});

test("Create a path from segments", () => {
    const path = Path.FromSegments("first", "second");
    expect(path.toString()).toEqual("first/second");
});

test("Testing getting the path segments", () => {
    const segments = ["first", "second", "third"];
    const path = Path.FromSegments(...segments);
    expect(path.toString()).toEqual(segments.join(Path.Separator()));
});