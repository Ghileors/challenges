import { cn } from '@/lib/utils';

import type { EventTagType } from '../_lib/types';

type Props = {
  tag: EventTagType;
};

export function EventTag({ tag }: Props) {
  return (
    <span
      className={cn('flex h-[22px] w-fit items-center gap-[10px] px-3 py-1.5', 'bg-[#8F9DA24A]')}
    >
      <p className="font-chakra-petch text-[14px] leading-none font-semibold tracking-[0.01em] uppercase">
        {tag}
      </p>
    </span>
  );
}
