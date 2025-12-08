import BgImage from '@/assets/images/backgrounds/bg-0.jpg';
import PlayerImage from '@/assets/images/player.png';
import ProgressBarImage from '@/assets/images/progress-bar.png';
import { Skeleton } from '@/components/ui/skeleton';

import { useGetSelectedAvatar } from '../queries';
import { BackgroundsSidebar } from './backgrounds-sidebar';

export const AvatarPreview = ({ id }: { id: string | null }) => {
  if (!id) {
    return null;
  }

  const { data, isLoading } = useGetSelectedAvatar(id);

  if (isLoading) {
    return <Skeleton className="h-[500px] w-[281px] rounded-2xl bg-neutral-400" />;
  }

  if (!data) {
    return null;
  }

  return (
    <div
      className="flex h-[500px] w-[281px] flex-col items-center justify-between rounded-2xl bg-cover bg-center pt-2 pb-3"
      style={{ backgroundImage: `url(${BgImage})` }}
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
