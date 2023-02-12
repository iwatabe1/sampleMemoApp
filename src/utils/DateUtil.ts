import { format } from 'date-fns';

export function dateToString(date: Date) {
  if (!date) {
    return '';
  } else {
    return format(date, 'yyyy/M/d/ HH:mm');
  }
}
