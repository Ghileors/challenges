import { cn } from '@/lib/utils';

import type { EventCategory } from '../_lib/types';

type Props = {
  categories: EventCategory[];
};

export default function CategoriesRow({ categories }: Props) {
  return (
    <div className="mt-4 flex items-center gap-1.5">
      <div className="relative h-[13px] w-[21px]">
        <span
          className={cn(
            'absolute left-0 inline-block h-[13px] w-2.5 bg-lime-400',
            '[--cut-tr:6.5px]',
            '[--cut-br:6.5px]',
            '[clip-path:polygon(0_0,calc(100%-var(--cut-tr))_0,100%_var(--cut-tr),100%_calc(100%-var(--cut-br)),calc(100%-var(--cut-br))_100%,0_100%)]'
          )}
        />
        <span
          className={cn(
            'absolute left-1 inline-block h-[13px] w-3 bg-lime-400 opacity-30',
            '[--cut-tr:6.5px]',
            '[--cut-br:6.5px]',
            '[clip-path:polygon(0_0,calc(100%-var(--cut-tr))_0,100%_var(--cut-tr),100%_calc(100%-var(--cut-br)),calc(100%-var(--cut-br))_100%,0_100%)]'
          )}
        />
        <span
          className={cn(
            'absolute left-px inline-block h-[13px] w-5 bg-lime-400 opacity-30',
            '[--cut-tr:6.5px]',
            '[--cut-br:6.5px]',
            '[clip-path:polygon(0_0,calc(100%-var(--cut-tr))_0,100%_var(--cut-tr),100%_calc(100%-var(--cut-br)),calc(100%-var(--cut-br))_100%,0_100%)]'
          )}
        />
      </div>
      <p className="font-rajdhani text-xl leading-none font-semibold tracking-[0] text-[#E5E9EC]">
        {categories.join(' / ')}
      </p>
    </div>
  );
}
