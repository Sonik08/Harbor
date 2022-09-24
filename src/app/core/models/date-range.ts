import { dateOptions, localLanguage } from '../date-helpers/date-consts';

export class DateRange {
  start: string = new Date().toLocaleDateString(localLanguage, dateOptions);
  end: string = new Date().toLocaleDateString(localLanguage, dateOptions);

  /**
   *
   */
  constructor(start: Date, end: Date) {
    this.start = start.toLocaleDateString(localLanguage, dateOptions);
    this.end = end.toLocaleDateString(localLanguage, dateOptions);
  }
}
