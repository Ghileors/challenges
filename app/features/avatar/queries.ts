import { type UseQueryOptions, useQuery } from '@tanstack/react-query';

import { AvatarService } from './services';
import type { GetAvatarsListRequestParams, GetAvatarsListResponse } from './types';

export const useGetSelectedAvatar = (avatarId: string) =>
  useQuery({
    queryKey: ['getSelectedAvatar', avatarId],
    queryFn: () => AvatarService.getSelectedAvatar(avatarId),
  });

export const useGetAvatars = (
  params?: GetAvatarsListRequestParams,
  options?: Partial<UseQueryOptions<GetAvatarsListResponse>>
) =>
  useQuery<GetAvatarsListResponse>({
    queryKey: ['getAvatars', params],
    queryFn: () => AvatarService.getAvatars(params),
    ...options,
  });

export const useGetAvatarBackgrounds = (avatarId: string) =>
  useQuery({
    queryKey: ['getAvatarBackgrounds'],
    queryFn: () => AvatarService.getAvatarBackgrounds(avatarId),
  });
