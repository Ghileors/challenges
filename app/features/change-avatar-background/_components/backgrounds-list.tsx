import React from 'react';

import { useGetAvatarBackgrounds } from '../queries';
import { AvatarCard } from './avatar-card';

export const BackgroundsList = () => {
  const { data } = useGetAvatarBackgrounds('1');

  return (
    <div className="space-y-2.5">
      <p className="font-[Italian_Plate_No2_Expanded] text-[14px] leading-[120%] font-semibold tracking-[0px]">
        Your backgrounds
      </p>
      <div className="grid grid-cols-3 gap-3">
        <AvatarCard />
        <AvatarCard />
        <AvatarCard />
        <AvatarCard />
        <AvatarCard />
        <AvatarCard />
        <AvatarCard />
        <AvatarCard />{' '}
      </div>
    </div>
  );
};
