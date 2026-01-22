import {
  generateBackground,
  getAvatars,
  getBackgrounds,
  getSelectedAvatar,
} from '@/features/avatar/_lib/handlers';
import { getUpcomingEvents } from '@/features/esports-events/_lib/handlers';

export const handlers = [
  getAvatars,
  getSelectedAvatar,
  getBackgrounds,
  generateBackground,
  getUpcomingEvents,
];
