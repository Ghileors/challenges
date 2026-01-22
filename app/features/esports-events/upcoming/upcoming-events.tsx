import { EventsGrid } from '../_components/events-grid';
import { EventsGridSkeleton } from '../_components/events-grid-skeleton';
import { useGetUpcomingEvents } from '../_lib/queries';

export default function UpcomingEvents() {
  const { data, isLoading } = useGetUpcomingEvents();

  if (isLoading) {
    return <EventsGridSkeleton />;
  }

  if (!data) {
    return 'No events found';
  }

  return <EventsGrid events={data} />;
}
