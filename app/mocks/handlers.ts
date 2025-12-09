import {
  generateBackground,
  getAvatars,
  getBackgrounds,
  getSelectedAvatar,
} from '@/features/avatar/handlers';

export const handlers = [getAvatars, getSelectedAvatar, getBackgrounds, generateBackground];
