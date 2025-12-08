import { Skeleton } from '@/components/ui/skeleton';
import { useSearchParams } from 'react-router';

import { useGetAvatarBackgrounds } from '../queries';

export function BackgroundsList() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');

  if (!id) {
    return null;
  }

  const { data, isLoading } = useGetAvatarBackgrounds(id);

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
        <div
          key={id}
          className="h-[198px] w-[112px] rounded-2xl bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
    </div>
  );
}

const skeletonMock = Array.from({ length: 6 }, (_, i) => i);
