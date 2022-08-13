import sanitizeHtml from "sanitize-html";
import { HTMLSanitizerInterface } from "./html-sanitizer.interface";

export class HTMLSanitizer implements HTMLSanitizerInterface {
  constructor() {
    //
  }

  /**
   * sanitize()
   *
   * strips the HTML from a string.
   * @param dirty the string to sanitize.
   */

  public sanitize(dirty: string): string {
    return sanitizeHtml(dirty);
  }

  public toString(): string {
    return `Instance of ${HTMLSanitizer.name}`;
  }
}
