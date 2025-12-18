import { z } from 'zod';

export const ImageItemSchema = z.object({
  id: z.string().trim().min(1, 'id is required'),
  image: z.string().trim().min(1, 'image is required'),
});

export const AvatarItemSchema = ImageItemSchema.extend({
  name: z.string().trim().min(1, 'name is required'),
  age: z.number().int().positive('age must be a positive number'),
  gender: z.enum(['FEMALE', 'MALE']),
});
export type GetAvatarResponse = z.infer<typeof AvatarItemSchema>;

export const ShallowAvatarItemSchema = AvatarItemSchema.omit({ age: true, gender: true });
export type ShallowAvatarItem = z.infer<typeof ShallowAvatarItemSchema>;

export const GetShallowAvatarsResponseSchema = z.array(ShallowAvatarItemSchema);
export type GetShallowAvatarsResponse = z.infer<typeof GetShallowAvatarsResponseSchema>;

export const GetBackgroundImagesResponseSchema = z.array(ImageItemSchema);
export type GetBackgroundImagesResponse = z.infer<typeof GetBackgroundImagesResponseSchema>;

export const GenerateAvatarRequestSchema = z.object({
  avatarId: z.string().trim().min(1, 'avatarId is required'),
  prompt: z.string().trim().min(1, 'prompt is required'),
});
export type GenerateAvatarRequest = z.infer<typeof GenerateAvatarRequestSchema>;
