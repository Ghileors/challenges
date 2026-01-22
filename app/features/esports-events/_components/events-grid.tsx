import { useGetUpcomingEvents } from '../_lib/queries';
import { EventCardView } from './event-card';

export function EventsGrid() {
  const { data: items, isLoading } = useGetUpcomingEvents();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {items?.map((item) => (
        <EventCardView
          key={item.id}
          item={item}
        />
      ))}
    </div>
  );
}
