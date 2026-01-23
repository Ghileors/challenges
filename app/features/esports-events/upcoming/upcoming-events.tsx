import { EventsGrid } from '../_components/events-grid';
import { EventsGridSkeleton } from '../_components/events-grid-skeleton';
import { useGetUpcomingEvents } from '../_lib/queries';

export default function UpcomingEvents() {
  const { data: events, isLoading } = useGetUpcomingEvents();

  if (isLoading) {
    return <EventsGridSkeleton />;
  }

  if (!events) {
    return (
      <h1 className="font-rajdhani text-2xl font-bold text-white">
        No events found!
        <br />
        Please reload the page.
      </h1>
    );
  }

  return <EventsGrid events={events} />;
}
