import CreativesIcon from '@/assets/icons/creatives-plus.svg?react';
import SparkleIcon from '@/assets/icons/sparkle.svg?react';
import { AlertError } from '@/components/alert-error';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { useSearchParams } from 'react-router';
import { toast } from 'sonner';

import { useGenerateAvatarBackground } from '../_lib/mutations';
import { BgIdeaInput } from './background-idea-input';
import { BackgroundsList } from './backgrounds-list';

export const BackgroundsSidebar = () => {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();
  const [prompt, setPrompt] = useState('');

  const id = searchParams.get('id');

  const { mutate: generateAvatarBackground, isPending } = useGenerateAvatarBackground();

  return (
    <Dialog>
      <DialogTrigger
        asChild
        className="flex items-center justify-center gap-4"
      >
        <Button
          variant="ghost"
          className="box-border flex h-[34px] min-w-[153px] items-center justify-center gap-[6px] rounded-[10px] bg-[hsla(0,0%,0%,0.2)] p-2 text-white hover:bg-[hsla(0,0%,0%,0.2)] hover:text-white focus:bg-[hsla(0,0%,0%,0.2)] focus:text-white"
        >
          <CreativesIcon className="size-5" />
          <p className="font-custom-plate text-[12px] leading-[120%] font-semibold tracking-[0px]">
            Change background
          </p>
        </Button>
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
        <div className="flex flex-col gap-y-6 overflow-x-hidden overflow-y-auto px-5">
          <div className="space-y-3">
            <p className="font-[Italian_Plate_No2_Expanded] text-[14px] leading-[120%] font-semibold tracking-[0px]">
              Background idea
            </p>
            <BgIdeaInput
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
          </div>
          <Button
            disabled={isPending}
            onClick={() => onSubmitPrompt(prompt, id)}
            className="h-[48px] w-[360px] rotate-0 gap-[8px] rounded-full px-[28px] opacity-100"
          >
            <SparkleIcon />
            Generate BG for 1 credit
          </Button>

          <div className="space-y-2.5">
            <p className="font-[Italian_Plate_No2_Expanded] text-[14px] leading-[120%] font-semibold tracking-[0px]">
              Your backgrounds
            </p>
            <BackgroundsList />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );

  function onSubmitPrompt(prompt: string, avatarId: string | null) {
    if (!avatarId) return;

    generateAvatarBackground(
      {
        avatarId,
        prompt,
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ['getAvatarBackgrounds', avatarId] });
          setPrompt('');
        },
        onError: (error) => {
          console.log(error);

          toast.error(
            <AlertError
              title="An error occurred while generating new background."
              description="Please try again later, or contact support."
            />
          );
        },
      }
    );
  }
};
