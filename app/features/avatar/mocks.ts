import AliceAvatarImage from '@/assets/images/avatars/alice-avatar.png';
import AliceImage from '@/assets/images/avatars/alice.jpg';
import AmberImage from '@/assets/images/avatars/amber.jpg';
import CatherineImage from '@/assets/images/avatars/catherine.jpg';
import EvelynImage from '@/assets/images/avatars/evelyn.jpg';
import GabrielleImage from '@/assets/images/avatars/gabrielle.jpg';
import JenniferImage from '@/assets/images/avatars/jennifer.jpg';
import LaurenImage from '@/assets/images/avatars/lauren.jpg';
import SamanthaImage from '@/assets/images/avatars/samantha.jpg';
import SylvesterImage from '@/assets/images/avatars/sylvester.jpg';
import TimImage from '@/assets/images/avatars/tim.jpg';
import BgImage from '@/assets/images/backgrounds/bg-0.jpg';
import BgImage1 from '@/assets/images/backgrounds/bg-1.jpg';
import BgImage2 from '@/assets/images/backgrounds/bg-2.jpg';
import BgImage3 from '@/assets/images/backgrounds/bg-3.jpg';
import BgImage4 from '@/assets/images/backgrounds/bg-4.jpg';

import type {
  GetAvatarResponse,
  GetAvatarsListResponse,
  GetBackgroundImagesResponse,
} from './types';

export const selectedAvatarMock: GetAvatarResponse = {
  id: 'd75e09d0-8a2f-4a32-bec0-29c0f9ea3d6f',
  image: AliceAvatarImage,
  name: 'Alice',
  age: 'young',
  gender: 'female',
  pose: 'stand',
};

export const backgroundImagesMock: GetBackgroundImagesResponse = [
  {
    id: '0f3b9e1e-8c92-4bfa-9e2e-2f6dfb71f4a1',
    image: BgImage,
  },
  {
    id: 'c7d1c4e0-b8c6-4c71-bc16-0c4a5c2d9d87',
    image: BgImage1,
  },
  {
    id: '5e0a4a3f-2bb0-4c60-af6d-1e9689b5b3c9',
    image: BgImage2,
  },
  {
    id: '8d3e4fb6-1a87-4f5c-bb6f-92d43b4f4192',
    image: BgImage3,
  },
  {
    id: 'b4c2a1e8-5e93-42f1-8ef1-ccf0f2b9a827',
    image: BgImage4,
  },
];

export const avatarsMock: GetAvatarsListResponse = [
  {
    id: 'd75e09d0-8a2f-4a32-bec0-29c0f9ea3d6f',
    image: AliceImage,
    name: 'Alice',
    age: 'young',
    gender: 'female',
    pose: 'stand',
  },
  {
    id: 'ec87cf4e-8a4e-4df2-a4a7-7e1aa2f28513',
    image: AmberImage,
    name: 'Amber',
    age: 'young',
    gender: 'female',
    pose: 'stand',
  },
  {
    id: '2de618dc-bb0d-45c1-a7b8-d401e2d2e565',
    image: CatherineImage,
    name: 'Catherine',
    age: 'young',
    gender: 'female',
    pose: 'stand',
  },
  {
    id: '77e0b1f6-ef2d-4f25-91b5-0bb3150dffb1',
    image: EvelynImage,
    name: 'Evelyn',
    age: 'young',
    gender: 'female',
    pose: 'stand',
  },
  {
    id: '9a3a764f-4c36-42ac-8f46-c1c8eacaf44c',
    image: GabrielleImage,
    name: 'Gabrielle',
    age: 'young',
    gender: 'female',
    pose: 'stand',
  },
  {
    id: '39db2c2c-4081-46e3-8582-5939c2b2cc8c',
    image: JenniferImage,
    name: 'Jennifer',
    age: 'young',
    gender: 'female',
    pose: 'stand',
  },
  {
    id: '16472c3e-94a3-4990-b358-16c4cbb01bd1',
    image: LaurenImage,
    name: 'Lauren',
    age: 'young',
    gender: 'female',
    pose: 'stand',
  },
  {
    id: 'f902bfa1-1501-4e76-a45f-daa0612e1822',
    image: SamanthaImage,
    name: 'Samantha',
    age: 'young',
    gender: 'female',
    pose: 'stand',
  },
  {
    id: '3b7e5d8e-b693-4041-a6b1-d83737c8db26',
    image: SylvesterImage,
    name: 'Sylvester',
    age: 'young',
    gender: 'male',
    pose: 'stand',
  },
  {
    id: '8d0c1c34-8801-4cc6-b5b0-0e05a9c2f118',
    image: TimImage,
    name: 'Tim',
    age: 'young',
    gender: 'male',
    pose: 'stand',
  },
];
