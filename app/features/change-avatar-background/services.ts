import { axiosClient } from '@/clients/axios-client';

import { GetBackgroundImagesResponse } from './types';

const getAvatarBackgrounds = async (id: string) => {
  const response = await axiosClient.get(`/backgrounds/${id}`);

  const result = GetBackgroundImagesResponse.safeParse(response.data);

  if (!result.success) {
    console.error(result.error);
  }

  return result.data;
};

const generateAvatarBackground = async (body: { avatarId: string; prompt: string }) => {
  const response = await axiosClient.post('/backgrounds/generate', body);

  if (response.status !== 200) {
    console.error('error');
  }

  return 'Process started';
};

export const AvatarService = {
  getAvatarBackgrounds,
  generateAvatarBackground,
};
