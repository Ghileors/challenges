import { useMutation } from '@tanstack/react-query';

import { AvatarService } from './services';

export const useGenerateAvatarBackground = () =>
  useMutation({
    mutationKey: ['generateAvatarBackground'],
    mutationFn: (params: { avatarId: string; prompt: string }) => {
      return AvatarService.generateAvatarBackground(params);
    },
  });
