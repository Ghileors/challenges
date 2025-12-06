import { cardsResponseMock } from '@/features/sidebar/mocks';
import { http } from 'msw';

const getCards = http.get('/api/cards', async () => {
  await new Promise((resolve) => setTimeout(resolve, 600));

  return Response.json(cardsResponseMock, {
    status: 200,
  });
});

export const handlers = [getCards];
