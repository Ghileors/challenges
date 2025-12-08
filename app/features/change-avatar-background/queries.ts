import { useQuery } from '@tanstack/react-query';

import { AvatarService } from './services';

export const useGetAvatarBackgrounds = (id: string) =>
  useQuery({
    queryKey: ['getAvatarBackgrounds'],
    queryFn: () => AvatarService.getAvatarBackgrounds(id),
  });
