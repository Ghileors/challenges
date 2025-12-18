import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';

import type { Route } from './+types/draft-bookings';
import { DRAFT_BOOKING_SUFFIX } from './_lib/constants';
import type { DraftBooking } from './_lib/types';
import { parseDraftBookings } from './_lib/utils';

export function draftBookingsLoader({ params }: { params: { userId: string } }) {
  const storageKey = `${params.userId}${DRAFT_BOOKING_SUFFIX}`;
  const stored = localStorage.getItem(storageKey);

  const drafts = parseDraftBookings(stored);

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const actualDrafts = drafts.filter((draft) => {
    const checkInDate = new Date(draft.checkIn);
    checkInDate.setHours(0, 0, 0, 0);

    return checkInDate >= today;
  });

  return actualDrafts;
}

export default function DraftBookings({ loaderData }: Route.ComponentProps) {
  const [searchParams] = useSearchParams();
  const [drafts, setDrafts] = useState<DraftBooking[] | undefined>(loaderData);

  const userId = searchParams.get('userId');

  useEffect(() => {
    const storageKey = `${userId}${DRAFT_BOOKING_SUFFIX}`;
    const stored = localStorage.getItem(storageKey);
    const parsedDrafts = parseDraftBookings(stored);
    setDrafts(parsedDrafts);
  }, [userId]);

  if (!drafts?.length) {
    return <h1>You don't have draft bookings yet.</h1>;
  }

  return (
    <div>
      {drafts?.map((draft) => (
        <div key={draft.id}>
          <p>{draft.title}</p>
          <Button onClick={() => removeDraftBooking(userId, draft.id)}>Delete draft</Button>
        </div>
      ))}
    </div>
  );

  function removeDraftBooking(userId: string | null, draftId: string) {
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
