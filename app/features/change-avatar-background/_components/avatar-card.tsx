import type { ImageItem } from '../types';

export const AvatarCard = ({ image }: Pick<ImageItem, 'image'>) => {
  return (
    <div
      className="h-[198px] w-[112px] rounded-2xl bg-cover bg-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div />
    </div>
  );
};
