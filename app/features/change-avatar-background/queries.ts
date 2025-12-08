import { useQuery } from '@tanstack/react-query';

import { AvatarService } from './services';

export const useGetAvatarBackgrounds = (avatarId: string) =>
  useQuery({
    queryKey: ['getAvatarBackgrounds'],
    queryFn: () => AvatarService.getAvatarBackgrounds(avatarId),
  });
