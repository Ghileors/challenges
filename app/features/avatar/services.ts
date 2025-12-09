import { axiosClient } from '@/clients/axios-client';
import { toast } from 'sonner';

import { BASE_URL } from './constants';
import {
  AvatarItemSchema,
  GenerateAvatarRequestSchema,
  GetBackgroundImagesResponseSchema,
  GetShallowAvatarsResponseSchema,
} from './types';

const getSelectedAvatar = async (avatarId: string) => {
  const response = await axiosClient.get(`/${BASE_URL}/${avatarId}`);

  const result = AvatarItemSchema.safeParse(response.data);

  if (!result.success) {
    console.error(result.error);
  }

  return result.data;
};

const getAvatars = async () => {
  const response = await axiosClient.get(`/${BASE_URL}/list`);

  const result = GetShallowAvatarsResponseSchema.safeParse(response.data);

  if (!result.success) {
    console.error(result.error);
  }

  return result.data;
};

const getAvatarBackgrounds = async (avatarId: string) => {
  const response = await axiosClient.get(`/${BASE_URL}/backgrounds/${avatarId}`);

  const result = GetBackgroundImagesResponseSchema.safeParse(response.data);

  if (!result.success) {
    console.error(result.error);
  }

  return result.data;
};

const generateAvatarBackground = async (body: { avatarId: string; prompt: string }) => {
  const result = GenerateAvatarRequestSchema.safeParse(body);

  if (!result.success) {
    const errorMessage = JSON.parse(result.error.message)[0].message;

    toast.error(`wrong request parameters: ${errorMessage}`);
  }

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
