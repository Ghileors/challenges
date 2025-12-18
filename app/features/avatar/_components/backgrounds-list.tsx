import { Skeleton } from '@/components/ui/skeleton';
import { useSearchParams } from 'react-router';

import { useGetAvatarBackgrounds, useGetSelectedAvatar } from '../_lib/queries';

export function BackgroundsList() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');

  if (!id) {
    return null;
  }

  const { data: avatarData, isLoading: isAvatarLoading } = useGetSelectedAvatar(id);

  const { data, isLoading } = useGetAvatarBackgrounds(id);

  if (isLoading || isAvatarLoading) {
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
        >
          {avatarData && (
            <div
              className="h-full w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${avatarData.image})` }}
            />
          )}
        </div>
      ))}
    </div>
  );
}

const skeletonMock = Array.from({ length: 6 }, (_, i) => i);
