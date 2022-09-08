import { SerializationType } from "child_process";
import { ProcessOptions } from "./process-options.interface";


export interface StartProcessOptions extends ProcessOptions {
    arguments?: Array<string>;
    fork?: boolean;
    serializationType?: SerializationType
}