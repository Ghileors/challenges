import { Button } from '@/components/ui/button';

import { DRAFT_BOOKING_SUFFIX } from './_lib/constants';
import { mockBookings } from './_lib/mocks';
import { isDraftBooking } from './_lib/type-guards';
import type { Booking, DraftBooking } from './_lib/types';

function parseDraftBookings(value: string | null): DraftBooking[] {
  if (!value) return [];

  try {
    const parsed: unknown = JSON.parse(value);

    if (!Array.isArray(parsed)) return [];

    return parsed.filter(isDraftBooking);
  } catch {
    return [];
  }
}

export default function Apartments() {
  function saveDraftBooking(userId: string, booking: Booking) {
    const storageKey = `${userId}${DRAFT_BOOKING_SUFFIX}`;

    const drafts = parseDraftBookings(localStorage.getItem(storageKey));

    const isDuplicate = drafts.some(
      (draft) =>
        draft.apartmentId === booking.apartmentId &&
        draft.checkIn === booking.checkIn &&
        draft.checkOut === booking.checkOut &&
        draft.guests === booking.guests
    );

    if (isDuplicate) {
      return;
    }

    const newDraft: DraftBooking = {
      ...booking,
      createdAt: new Date().toISOString(),
    };

    const updatedDrafts = [newDraft, ...drafts];

    localStorage.setItem(storageKey, JSON.stringify(updatedDrafts));
  }

  return (
    <div className="w-full">
      Apartments
      <Button onClick={() => saveDraftBooking('user1', mockBookings[0])}>Add draft</Button>
    </div>
  );
}
