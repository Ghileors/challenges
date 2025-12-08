import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { cn } from '@/lib/utils';

import { BgIdeaInput } from './background-idea-input';
import { BackgroundsList } from './backgrounds-list';
import { ChangeAvatarBackgroundButton } from './change-background-button';
import { GenerateBackgroundButton } from './generate-background-button';

export const BackgroundsSidebar = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="flex items-center justify-center gap-4">
          <ChangeAvatarBackgroundButton />
        </div>
      </DialogTrigger>
      <DialogContent
        className={cn(
          'absolute top-0 right-0 h-full w-[400px] translate-x-[-1/2] grid-rows-[auto_1fr_auto] overflow-hidden rounded-none px-0 pt-8 pb-0',
          'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:slide-in-from-right data-[state=closed]:slide-out-to-right'
        )}
        aria-describedby={undefined}
      >
        <DialogHeader className="px-5">
          <DialogTitle>Change background</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-y-6 overflow-x-hidden overflow-y-scroll px-5">
          <BgIdeaInput />
          <GenerateBackgroundButton />
          <BackgroundsList />
        </div>
      </DialogContent>
    </Dialog>
  );
};
