import { Skeleton } from '@/components/ui/skeleton';
import { useNavigate, useSearchParams } from 'react-router';

import { useGetAvatars } from '../queries';
import { AvatarCard } from './avatar-card';
import { AvatarPreview } from './avatar-preview';

export function AvatarsList() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { data, isLoading } = useGetAvatars();

  const id = searchParams.get('id');

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
    <div className="flex gap-x-6">
      <div className="grid w-fit grid-cols-4 gap-2">
        {data?.map(({ id, image, name }) => (
          <div
            key={id}
            className="group relative"
            onClick={() => onSelectAvatar(id)}
          >
            <AvatarCard image={image} />
            <div className="absolute bottom-0 z-1 hidden h-full w-full items-end rounded-2xl px-2 pb-2 group-hover:flex group-hover:bg-[linear-gradient(179.79deg,rgba(0,0,0,0)_61.4%,#000_99.82%)]">
              <p className="text-base leading-[1.2] text-white">{name}</p>
            </div>
          </div>
        ))}
      </div>

      <AvatarPreview id={id} />
    </div>
  );

  function onSelectAvatar(avatarId: string) {
    searchParams.set('id', avatarId);
    navigate(`?${searchParams.toString()}`);
  }
}

const skeletonMock = Array.from({ length: 10 }, (_, i) => i);
