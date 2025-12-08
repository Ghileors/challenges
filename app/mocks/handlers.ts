import { backgroundImagesMock } from '@/features/change-avatar-background/mocks';
import { http } from 'msw';

const getBackgrounds = http.get('/api/backgrounds/:id', async () => {
  await new Promise((resolve) => setTimeout(resolve, 600));

  return Response.json(backgroundImagesMock, {
    status: 200,
  });
});

export const handlers = [getBackgrounds];
