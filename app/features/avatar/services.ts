import { axiosClient } from '@/clients/axios-client';

import { BASE_URL } from './constants';
import {
  GetAvatarsResponse,
  GetBackgroundImagesResponse,
  GetShallowAvatarsResponse,
} from './types';

const getSelectedAvatar = async (avatarId: string) => {
  const response = await axiosClient.get(`/${BASE_URL}/${avatarId}`);

  const result = GetAvatarsResponse.safeParse(response.data);

  if (!result.success) {
    console.error(result.error);
  }

  return result.data;
};

const getAvatars = async () => {
  const response = await axiosClient.get(`/${BASE_URL}/list`);

  const result = GetShallowAvatarsResponse.safeParse(response.data);

  if (!result.success) {
    console.error(result.error);
  }

  return result.data;
};

const getAvatarBackgrounds = async (avatarId: string) => {
  const response = await axiosClient.get(`/${BASE_URL}/backgrounds/${avatarId}`);

  const result = GetBackgroundImagesResponse.safeParse(response.data);

  if (!result.success) {
    console.error(result.error);
  }

  return result.data;
};

const generateAvatarBackground = async (body: { avatarId: string; prompt: string }) => {
  const response = await axiosClient.post(`/${BASE_URL}/background`, body);

  if (response.status !== 200) {
    console.error('error');
  }

  return 'Process started';
};

export const AvatarService = {
  getAvatars,
  getSelectedAvatar,
  getAvatarBackgrounds,
  generateAvatarBackground,
};
