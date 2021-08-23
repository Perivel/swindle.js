
/**
 * DurationInterface
 * 
 * DurationInterface 
 */

export interface DurationInterface {
    
    /**
     * days()
     * 
     * gets the number of days in the duration.
     */

    days(): number;

    /**
     * hours()
     * 
     * hours() gets the number of hours in the duration.
     */

    hours(): number;

    /**
     * inDays()
     * 
     * inDays() converts the duration to days.
     */

    inDays(): number;

    /**
     * inHours()
     * 
     * inHours() converts the duration to hours.
     */

    inHours(): number;

    /**
     * inMiliseconds()
     * 
     * converts the duration to miliseconds.
     */

    inMiliseconds(): number;

    /**
     * inMinutes()
     * 
     * inMinutes() converts the duration to minutes.
     */

    inMinutes(): number;

    /**
     * inMonths()
     * 
     * inMonths() converts the duration to months.
     */
    
    inMonths(): number;

    /**
     * inQuarters()
     * 
     * inQuarters() converts the duration to quarters.
     */
    
    inQuarters(): number;

    /**
     * inSeconds()
     * 
     * inSeconds() converts a duration to a second.
     */

    inSeconds(): number;

    /**
     * inWeeks()
     * 
     * inWeeks() converts the duration to weeks.
     */
    inWeeks(): number;

    /**
     * inYears()
     * 
     * inYears() converts the duration to years.
     */

    inYears(): number;

    /**
     * miliseconds()
     * 
     * miliseconds() gets the miliseconds of the duration.
     */

    miliseconds(): number;

    /**
     * minutes()
     * 
     * minutes() gets the minutes of the duration.
     */

    minutes(): number;

    /**
     * months()
     * 
     * months() gets the months of the duration.
     */

    months(): number;

    /**
     * quarters()
     * 
     * quarters() gets the quarters in the duration.
     */

    quarters(): number;

    /**
     * seconds()
     * 
     * seconds() gets the seconds of the duration.
     */
    seconds(): number;

    /**
     * weeks()
     * 
     * weeks() gets the weeks.
     */

    weeks(): number;

    /**
     * years()
     * 
     * years() gets the years in the duration.
     */
    years(): number;
}