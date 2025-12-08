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

export const AvatarService = {
  getAvatarBackgrounds,
};
