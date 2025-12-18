import { isDraftBooking } from './type-guards';
import type { DraftBooking } from './types';

export function parseDraftBookings(value: string | null): DraftBooking[] {
  if (!value) return [];

  try {
    const parsed: unknown = JSON.parse(value);

    if (!Array.isArray(parsed)) return [];

    return parsed.filter(isDraftBooking);
  } catch {
    return [];
  }
}
