import { Skeleton } from '@/components/ui/skeleton';

import { useGetAvatars } from '../queries';
import { AvatarCard } from './avatar-card';
import { BackgroundsSidebar } from './backgrounds-sidebar';

export function AvatarsList() {
  const { data, isLoading } = useGetAvatars();

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
    <div className="flex">
      <div className="grid max-w-[calc(100%-300px)] grid-cols-4 gap-2">
        {data?.map(({ id, image }) => (
          <div className="relative">
            <AvatarCard
              key={id}
              image={image}
            />
            <BackgroundsSidebar />
          </div>
        ))}
      </div>

      <div className="ml-4 h-[500px] w-[281px]"></div>
    </div>
  );
}

const skeletonMock = Array.from({ length: 10 }, (_, i) => i);
