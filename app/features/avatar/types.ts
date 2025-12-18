import { z } from 'zod';

export const ImageItemSchema = z.object({
  id: z.string().trim().min(1, 'id is required'),
  image: z.string().trim().min(1, 'image is required'),
});

export const AvatarItemSchema = ImageItemSchema.extend({
  name: z.string().trim().min(1, 'name is required'),
  age: z.enum(['young', 'adult', 'senior']),
  gender: z.enum(['female', 'male']),
  pose: z.enum(['site', 'stand']),
});

export const GetAvatarsListResponseSchema = z.array(AvatarItemSchema);
export const GetBackgroundImagesResponseSchema = z.array(ImageItemSchema);

export const GenerateAvatarRequestSchema = z.object({
  avatarId: z.string().trim().min(1, 'avatarId is required'),
  prompt: z.string().trim().min(1, 'prompt is required'),
});
export const AvatarsListRequestBodySchema = AvatarItemSchema.omit({
  image: true,
  id: true,
});

export type GetAvatarResponse = z.infer<typeof AvatarItemSchema>;
export type GetAvatarsListResponse = z.infer<typeof GetAvatarsListResponseSchema>;
export type GetBackgroundImagesResponse = z.infer<typeof GetBackgroundImagesResponseSchema>;

export type GetAvatarsListRequestParams = z.infer<typeof AvatarsListRequestBodySchema>;
export type GenerateAvatarRequest = z.infer<typeof GenerateAvatarRequestSchema>;
