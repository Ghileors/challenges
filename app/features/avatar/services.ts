import { axiosClient } from '@/clients/axios-client';

import { BASE_URL } from './constants';
import { GetBackgroundImagesResponse, GetShallowAvatarsResponse } from './types';

const getAvatars = async () => {
  const response = await axiosClient.get(`/${BASE_URL}/list`);

  const result = GetShallowAvatarsResponse.safeParse(response.data);

  if (!result.success) {
    console.error(result.error);
  }

  return result.data;
};

const getAvatarBackgrounds = async (id: string) => {
  const response = await axiosClient.get(`/${BASE_URL}/${id}/backgrounds`);

  const result = GetBackgroundImagesResponse.safeParse(response.data);

  if (!result.success) {
    console.error(result.error);
  }

  return result.data;
};

const generateAvatarBackground = async (body: { avatarId: string; prompt: string }) => {
  const response = await axiosClient.post(`/generate/${BASE_URL}/background`, body);

  if (response.status !== 200) {
    console.error('error');
  }

  return 'Process started';
};

export const AvatarService = {
  getAvatars,
  getAvatarBackgrounds,
  generateAvatarBackground,
};
