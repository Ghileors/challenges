import { axiosClient } from '@/clients/axios-client';
import { toast } from 'sonner';

import { BASE_URL } from './constants';
import {
  AvatarItemSchema,
  GenerateAvatarRequestSchema,
  type GetAvatarsListRequestParams,
  type GetAvatarsListResponse,
  GetAvatarsListResponseSchema,
  GetBackgroundImagesResponseSchema,
} from './types';

const getSelectedAvatar = async (avatarId: string) => {
  const response = await axiosClient.get(`/${BASE_URL}/${avatarId}`);

  const result = AvatarItemSchema.safeParse(response.data);

  if (!result.success) {
    console.error(result.error);
  }

  return result.data;
};

const getAvatars = async (
  params?: GetAvatarsListRequestParams
): Promise<GetAvatarsListResponse> => {
  const paramsValidation = GenerateAvatarRequestSchema.safeParse(params);

  if (params && !paramsValidation.success) {
    const errorMessage = paramsValidation.error.issues[0].message;
    throw new Error(errorMessage);
  }

  const response = await axiosClient.get(`/${BASE_URL}/list`, { params });

  const result = GetAvatarsListResponseSchema.safeParse(response.data);

  if (!result.success) {
    throw new Error('Invalid response from server');
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
