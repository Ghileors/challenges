import { z } from 'zod';

export const CardResponseSchema = z.object({
  image: z.string(),
  category: z.string(),
  title: z.string(),
  description: z.string(),
  comments: z.number(),
  views: z.number(),
});

export type CardResponse = z.infer<typeof CardResponseSchema>;

// GET Cards Response
export const GetCardsResponseSchema = z.object({
  cards: z.array(CardResponseSchema),
});

export type GetCardsResponse = z.infer<typeof GetCardsResponseSchema>;
