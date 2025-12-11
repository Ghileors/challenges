import { Skeleton } from '@/components/ui/skeleton';
import { useSearchParams } from 'react-router';

import { useGetAvatars } from '../queries';
import { AvatarPreview } from './avatar-preview';

export function AvatarsList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { data, isLoading } = useGetAvatars();

  const id = searchParams.get('id');

  if (isLoading) {
    return (
      <div className="grid grid-cols-5 gap-3">
        {skeletonMock.map((item) => (
          <Skeleton
            key={`${item}`}
            className="h-[198px] w-[112px] rounded-2xl bg-neutral-400"
          />
        ))}
      </div>
    );
  }

  const handleSelect = (id: string) => {
    setSearchParams(() => {
      searchParams.set('id', id);
      return searchParams;
    });
  };

  return (
    <div className="flex gap-x-6">
      <div className="grid h-fit w-fit grid-cols-5 gap-2">
        {data?.map(({ id, image, name }) => (
          <div
            key={id}
            className="group relative h-[198px] w-[112px] cursor-pointer rounded-2xl bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
            onClick={() => handleSelect(id)}
          >
            <div className="hidden h-full w-full items-end rounded-2xl bg-[linear-gradient(179.79deg,rgba(0,0,0,0)_61.4%,#000_99.82%)] px-2 pb-2 group-hover:flex">
              <p className="text-base leading-[1.2] text-white">{name}</p>
            </div>
          </div>
        ))}
      </div>

      <AvatarPreview id={id} />
    </div>
  );
}

const skeletonMock = Array.from({ length: 10 }, (_, i) => i);
