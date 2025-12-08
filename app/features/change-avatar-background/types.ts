import { z } from 'zod';

export const ImageItemSchema = z.object({
  id: z.string(),
  image: z.string(),
  default: z.boolean().optional(),
});

export type ImageItem = z.infer<typeof ImageItemSchema>;

export const GetBackgroundImagesResponse = z.array(ImageItemSchema);
