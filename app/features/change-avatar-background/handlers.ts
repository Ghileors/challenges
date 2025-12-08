import { backgroundImagesMock } from '@/features/change-avatar-background/mocks';
import { http } from 'msw';

export const getBackgrounds = http.get('/api/backgrounds/:id', async () => {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return Response.json(backgroundImagesMock, {
    status: 200,
  });
});

export const generateBackground = http.post('/api/backgrounds/generate', async () => {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return Response.json(
    {},
    {
      status: 200,
    }
  );
});
