import PlayerImage from '@/assets/images/player.png';
import ProgressBarImage from '@/assets/images/progress-bar.png';
import { Skeleton } from '@/components/ui/skeleton';

import { useGetSelectedAvatar } from '../queries';
import { BackgroundsSidebar } from './backgrounds-sidebar';

export const AvatarPreview = () => {
  const { data, isLoading } = useGetSelectedAvatar('1');

  if (isLoading) {
    return <Skeleton className="h-[500px] w-[281px] rounded-2xl bg-neutral-400" />;
  }

  if (!data) {
    return null;
  }

  return (
    <div
      className="flex h-[500px] w-[281px] flex-col items-center justify-between rounded-2xl bg-cover bg-center pt-2 pb-3"
      style={{ backgroundImage: `url(${data.image})` }}
    >
      <BackgroundsSidebar />

      <div>
        <img src={PlayerImage} />
        <div className="px-2.5">
          <img src={ProgressBarImage} />
        </div>
      </div>
    </div>
  );
};
