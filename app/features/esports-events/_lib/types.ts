import { z } from 'zod';

export const eventCategoryEnum = z.enum(['Boys U14', 'Girls U16']);

const stringSchema = z.string().trim().min(1);
const dateSchema = z.string().trim().min(1); // ISO: 2025-12-17

export const eventCardSchema = z.object({
  id: z.uuid(),
  title: stringSchema,
  location: stringSchema,
  tags: z.array(stringSchema).min(1),
  categories: z.array(eventCategoryEnum).min(1),
  dates: z.object({
    startDate: dateSchema,
    endDate: dateSchema,
  }),
});

export const eventCardsSchema = z.array(eventCardSchema);

export type EventCard = z.infer<typeof eventCardSchema>;
