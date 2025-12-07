import SparkleIcon from '@/assets/icons/sparkle.svg?react';
import { Button } from '@/components/ui/button';

export const GenerateBackgroundButton = () => {
  return (
    <Button className="h-[48px] w-[360px] rotate-0 gap-[8px] rounded-full px-[28px] opacity-100">
      <SparkleIcon />
      Generate BG for 1 credit
    </Button>
  );
};
