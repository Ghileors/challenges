import { useQuery } from '@tanstack/react-query';

import { EventsService } from './services';

export const useGetUpcomingEvents = () =>
  useQuery({
    queryKey: ['getUpcomingEvents'],
    queryFn: () => EventsService.getUpcomingEvents(),
  });
