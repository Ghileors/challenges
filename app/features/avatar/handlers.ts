import { http } from 'msw';

import { BASE_URL } from './constants';
import { avatarsMock, backgroundImagesMock, selectedAvatarMock } from './mocks';

export const getSelectedAvatar = http.get(`/api/${BASE_URL}/:id`, async () => {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return Response.json(selectedAvatarMock, {
    status: 200,
  });
});

export const getAvatars = http.get(`/api/${BASE_URL}/list`, async () => {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return Response.json(avatarsMock, {
    status: 200,
  });
});

export const getBackgrounds = http.get(`/api/${BASE_URL}/:id/backgrounds`, async () => {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return Response.json(backgroundImagesMock, {
    status: 200,
  });
});

export const generateBackground = http.post(`/api/generate/${BASE_URL}/background`, async () => {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return Response.json(
    {},
    {
      status: 200,
    }
  );
});
