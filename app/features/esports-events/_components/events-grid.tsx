import { cn } from '@/lib/utils';

import type { EventCard } from '../_lib/types';
import { EventCardView } from './event-card';

type Props = {
  events: EventCard[];
};

export function EventsGrid({ events }: Props) {
  return (
    <div
      className={cn(
        'grid gap-5',
        'grid-cols-1',
        'md:grid-cols-2',
        'lg:grid-cols-3',
        'xl:grid-cols-4'
      )}
    >
      {events.map((event) => (
        <EventCardView
          key={event.id}
          event={event}
        />
      ))}
    </div>
  );
}
