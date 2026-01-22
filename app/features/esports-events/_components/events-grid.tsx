import type { EventCard } from '../_lib/types';
import { EventCardView } from './event-card';
import { EventCardSkeleton } from './event-card-skeleton';

type Props = {
  events: EventCard[];
};

export function EventsGrid({ events }: Props) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {events.map((item) => (
        <EventCardView
          key={item.id}
          item={item}
        />
      ))}
    </div>
  );
}
