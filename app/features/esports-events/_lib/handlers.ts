import { http } from 'msw';

import { eventCardsMock } from './mocks';

const BASE_URL = 'events';

export const getUpcomingEvents = http.get(`/api/${BASE_URL}/upcoming`, async () => {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return Response.json(eventCardsMock, {
    status: 200,
  });
});
