import { type GetCardsResponse } from './types';

export const cardsResponseMock: GetCardsResponse = {
  cards: [
    {
      image: '',
      category: 'Headset',
      title: 'Fidelity first. See more than ever before',
      description:
        "We've pushed visual, audio, and ergonomic technologies to create the best-in-class VR experience.",
      comments: 349,
      views: 49500,
    },
    {
      image: '',
      category: 'Controllers',
      title: 'Your hands, in Virtual Reality',
      description:
        'Designed from the ground up to enable natural interactions, high-fidelity hand presence, and long-term comfort.',
      comments: 349,
      views: 49500,
    },
    {
      image: '',
      category: 'Base Stations',
      title: 'Best-in-industry room-scale tracking',
      description:
        'The highest quality tracking has gotten even better with Base Station 2.0, now with improved range, field of view, and scalability.',
      comments: 349,
      views: 49500,
    },
  ],
};
