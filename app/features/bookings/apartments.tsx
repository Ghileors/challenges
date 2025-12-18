import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

import type { Route } from './+types/apartments';
import { DRAFT_BOOKING_SUFFIX } from './_lib/constants';
import { mockBookings } from './_lib/mocks';
import type { Booking, DraftBooking } from './_lib/types';
import { parseDraftBookings } from './_lib/utils';

export function draftBookingsLoader({ params }: { params: { userId: string } }) {
  const storageKey = `${params.userId}${DRAFT_BOOKING_SUFFIX}`;
  const stored = localStorage.getItem(storageKey);

  const drafts = parseDraftBookings(stored);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const actualDrafts = drafts
    .filter((draft) => {
      const checkInDate = new Date(draft.checkIn);
      checkInDate.setHours(0, 0, 0, 0);

      return checkInDate >= today;
    })
    .sort((a, b) => {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });

  return actualDrafts;
}

export default function Apartments({ loaderData }: Route.ComponentProps) {
  const [drafts, setDrafts] = useState<DraftBooking[] | undefined>(loaderData);

  const userId = 'user1';

  useEffect(() => {
    const storageKey = `${userId}${DRAFT_BOOKING_SUFFIX}`;
    const stored = localStorage.getItem(storageKey);
    const parsedDrafts = parseDraftBookings(stored);
    setDrafts(parsedDrafts);
  }, [userId]);

  return (
    <div className="w-full">
      Apartments
      <Button onClick={() => saveDraftBooking('user1', mockBookings[0])}>Add draft</Button>
      {drafts?.map((draft) => (
        <div>
          <p>{draft.title}</p>
          <Button onClick={() => removeDraftBooking(userId, draft.id)}>Delete draft</Button>
        </div>
      ))}
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

    setDrafts(updatedDrafts);
  }

  function removeDraftBooking(userId: string, draftId: string) {
    const storageKey = `${userId}${DRAFT_BOOKING_SUFFIX}`;

    const stored = localStorage.getItem(storageKey);
    if (!stored) return;

    const drafts = parseDraftBookings(stored);
    if (drafts.length === 0) return;

    const filteredDrafts = drafts.filter((draft) => draft.id !== draftId);

    localStorage.setItem(storageKey, JSON.stringify(filteredDrafts));

    setDrafts(filteredDrafts);
  }
}
