import { EventCardSkeleton } from './event-card-skeleton';

const eventsMock = Array.from({ length: 8 });

export function EventsGridSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {eventsMock.map((_, index) => (
        <EventCardSkeleton key={index} />
      ))}
    </div>
  );
}
