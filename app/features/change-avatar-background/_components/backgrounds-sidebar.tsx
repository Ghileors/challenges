import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { cn } from '@/lib/utils';

import { BgIdeaInput } from './background-idea-input';
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
          'absolute top-0 right-0 h-full w-[400px] translate-x-[-1/2] grid-rows-[auto_1fr_auto] overflow-hidden rounded-none',
          'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:slide-in-from-right data-[state=closed]:slide-out-to-right'
        )}
        aria-describedby={undefined}
      >
        <DialogHeader>
          <DialogTitle>Change background</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-y-6">
          <BgIdeaInput />
          <GenerateBackgroundButton />
        </div>
      </DialogContent>
    </Dialog>
  );
};
