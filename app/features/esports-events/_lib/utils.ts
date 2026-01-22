import { format, parseISO } from 'date-fns';

export function formatDateRange(startISO: string, endISO: string): string {
  const startDate = parseISO(startISO);
  const endDate = parseISO(endISO);

  const month = format(startDate, 'MMM');
  const startDay = format(startDate, 'd');
  const endDay = format(endDate, 'd');
  const year = format(startDate, 'yyyy');

  return `${month} ${startDay}\u2013${endDay}, ${year}`;
}
