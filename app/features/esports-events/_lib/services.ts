import { axiosClient } from '@/clients/axios-client';

import { eventCardsMock } from './mocks';
import { eventCardsSchema } from './types';

const BASE_URL = 'events';

const getUpcomingEvents = async () => {
  const response = await axiosClient.get(`/${BASE_URL}/upcoming`);

  const result = eventCardsSchema.safeParse(response.data);

  if (!result.success) {
    // console.error(result.error);
    return eventCardsMock;
  }

  return result.data;
};

export const EventsService = {
  getUpcomingEvents,
};
