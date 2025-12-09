import { z } from 'zod';

export const ImageItemSchema = z.object({
  id: z.string().nonempty(),
  image: z.string(),
});
export type ImageItem = z.infer<typeof ImageItemSchema>;

export const AvatarItemSchema = ImageItemSchema.extend({
  name: z.string().nonempty(),
  age: z.number(),
  gender: z.enum(['FEMALE', 'MALE']),
});

export const ShallowAvatarItemSchema = AvatarItemSchema.omit({ age: true, gender: true });
export type ShallowAvatarItem = z.infer<typeof ShallowAvatarItemSchema>;

export const GetAvatarsResponse = AvatarItemSchema;
export const GetShallowAvatarsResponse = z.array(ShallowAvatarItemSchema);
export const GetBackgroundImagesResponse = z.array(ImageItemSchema);
