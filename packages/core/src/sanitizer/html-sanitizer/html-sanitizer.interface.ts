
/**
 * HTMLSanitizerInterface
 * 
 * The HTMLSantitizer interface specifies the API of a String Sanitizer.
 */

export interface HTMLSanitizerInterface {

    /**
     * sanitize()
     * 
     * strips the HTML from a string.
     * @param dirty the string to sanitize.
     */

    sanitize(dirty: string): string;
}