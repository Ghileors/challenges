import { useQuery } from '@tanstack/react-query';

import { AvatarService } from './services';

export const useGetSelectedAvatar = (avatarId: string) =>
  useQuery({
    queryKey: ['getSelectedAvatar'],
    queryFn: () => AvatarService.getSelectedAvatar(avatarId),
  });

export const useGetAvatars = () =>
  useQuery({
    queryKey: ['getAvatars'],
    queryFn: () => AvatarService.getAvatars(),
  });

export const useGetAvatarBackgrounds = (avatarId: string) =>
  useQuery({
    queryKey: ['getAvatarBackgrounds'],
    queryFn: () => AvatarService.getAvatarBackgrounds(avatarId),
  });
