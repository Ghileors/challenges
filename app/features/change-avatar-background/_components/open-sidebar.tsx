import CreativesIcon from '@/assets/icons/creatives-plus.svg?react';
import { Button } from '@/components/ui/button';

export const OpenSidebar = () => {
  return (
    <Button
      variant="ghost"
      className="box-border flex h-[34px] min-w-[153px] items-center justify-center gap-[6px] rounded-[10px] bg-[hsla(0,0%,0%,0.2)] p-2 text-white hover:bg-[hsla(0,0%,0%,0.2)] hover:text-white focus:bg-[hsla(0,0%,0%,0.2)] focus:text-white"
    >
      <CreativesIcon className="size-5" />
      <span className="font-custom-plate text-[12px] leading-[120%] font-semibold tracking-[0px]">
        Change background
      </span>
    </Button>
  );
};
