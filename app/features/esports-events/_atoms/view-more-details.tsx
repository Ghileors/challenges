import ArrowRightIcon from '@/assets/icons/arrow-right.svg?react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function ViewMoreDetails() {
  return (
    <Button
      variant="secondary"
      className={cn(
        'relative overflow-hidden',
        'h-[25px] w-[203px] justify-between rounded-none py-1.5',
        'bg-[#E5E9EC]',
        'transition-colors duration-150',
        "before:absolute before:inset-0 before:content-['']",
        'before:origin-left before:scale-x-0',
        'before:bg-[#C3FF00]',
        'before:transition-transform before:duration-200 before:ease-out',
        'group-hover:before:scale-x-100 hover:before:scale-x-100',
        'z-0 *:relative *:z-10',
        '[--cut-tr:5.21px]',
        '[clip-path:polygon(0_0,calc(100%-var(--cut-tr))_0,100%_var(--cut-tr),100%_100%,0_100%)]'
      )}
    >
      <p className="font-rajdhani text-xl leading-none font-bold tracking-[0] uppercase">
        view more details{' '}
      </p>
      <ArrowRightIcon
        width={6}
        height={12}
      />
    </Button>
  );
}
