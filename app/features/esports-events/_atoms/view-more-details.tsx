import ArrowRightIcon from '@/assets/icons/arrow-right.svg?react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function ViewMoreDetails() {
  return (
    <Button
      variant="secondary"
      className={cn(
        'group-hover:bg-[#C3FF00]',
        'h-[25px] w-[203px] justify-between',
        'py-1.5',
        'bg-[#E5E9EC]',
        'hover:bg-[#C3FF00]',
        'rounded-none',
        'transition-colors duration-150',

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
