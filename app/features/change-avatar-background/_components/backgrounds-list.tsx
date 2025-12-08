import { Skeleton } from '@/components/ui/skeleton';

import { useGetAvatarBackgrounds } from '../queries';
import { AvatarCard } from './avatar-card';

export function BackgroundsList() {
  const { data, isLoading } = useGetAvatarBackgrounds('1');

  if (isLoading) {
    return (
      <div className="grid grid-cols-3 gap-3">
        {skeletonMock.map((item) => (
          <Skeleton
            key={`${item}`}
            className="h-[198px] w-[112px] rounded-2xl bg-neutral-400"
          />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 gap-3">
      {data?.map(({ id, image }) => (
        <AvatarCard
          key={id}
          image={image}
        />
      ))}
    </div>
  );
}

const skeletonMock = Array.from({ length: 10 }, (_, i) => i);
