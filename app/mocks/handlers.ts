import {
  generateBackground,
  getAvatars,
  getBackgrounds,
  getSelectedAvatar,
} from '@/features/avatar/_lib/handlers';

export const handlers = [getAvatars, getSelectedAvatar, getBackgrounds, generateBackground];
