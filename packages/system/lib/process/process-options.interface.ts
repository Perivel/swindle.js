import { PathInterface } from "../path";


export interface ProcessOptions {
    cwd: PathInterface | string;
    env?: NodeJS.ProcessEnv;
}