import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router';

import { DRAFT_BOOKING_SUFFIX } from './_lib/constants';
import { mockBookings } from './_lib/mocks';
import type { Booking, DraftBooking } from './_lib/types';
import { parseDraftBookings } from './_lib/utils';

export default function Apartments() {
  const navigate = useNavigate();

  return (
    <div className="w-full">
      Apartments
      <Button onClick={() => saveDraftBooking('user1', mockBookings[0])}>
        Add draft for user 1
      </Button>
      <Button
        onClick={() =>
          navigate({
            pathname: '/bookings',
            search: '?userId=user1',
          })
        }
      >
        Check user 1 drafts
      </Button>
      <Button onClick={() => saveDraftBooking('user2', mockBookings[1])}>
        Add draft for user 2
      </Button>
      <Button
        onClick={() =>
          navigate({
            pathname: '/bookings',
            search: '?userId=user2',
          })
        }
      >
        Check user 2 drafts
      </Button>
    </div>
  );

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
}
