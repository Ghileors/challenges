import { cn } from '@/lib/utils';

import ViewMoreDetails from '../_atoms/view-more-details';
import type { EventCard } from '../_lib/types';
import { formatDateRange } from '../_lib/utils';

type Props = {
  item: EventCard;
};

export function EventCardView({ item }: Props) {
  const dateLabel = formatDateRange(item.dates.startDate, item.dates.endDate);

  return (
    <article
      className={cn(
        'relative overflow-hidden',
        'h-[260px] w-full',
        'bg-[#1f262c] text-white',
        'shadow-[0_0_0_1px_rgba(255,255,255,0.04)]',
        'hover:bg-[#2a2236]'
      )}
    >
      <div
        className={cn(
          'pointer-events-none absolute inset-0',
          'bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.10),transparent_55%)]',
          'hover:bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,0.35),transparent_55%)]'
        )}
      />

      <div className="absolute top-0 left-0 h-28 w-36 opacity-40 [background:repeating-linear-gradient(135deg,rgba(255,255,255,0.18)_0,rgba(255,255,255,0.18)_8px,transparent_8px,transparent_16px)]" />

      <div className="relative flex h-full flex-col px-6 pt-4 pb-5">
        <h3 className="mt-2 text-[22px] leading-[1.05] font-extrabold tracking-[0.02em]">
          {item.title.toUpperCase()}
        </h3>

        <div className="mt-2 flex items-center gap-2 text-[14px] text-white/60">
          <span className="inline-block h-4 w-4 rounded-full border border-white/30" />
          <span>{item.location}</span>
        </div>

        <div className="mt-4 flex gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex h-8 items-center bg-white/10 px-4 text-[12px] font-semibold tracking-[0.06em] text-white/80"
            >
              {tag.toUpperCase()}
            </span>
          ))}
        </div>

        <div className="mt-4 h-px bg-white/10" />

        <div className="mt-4 flex items-center gap-3">
          <span className="inline-block h-3 w-3 bg-lime-400 [clip-path:polygon(0_0,100%_50%,0_100%)]" />
          <p className="text-[16px] font-semibold text-white/85">{item.categories.join(' / ')}</p>
        </div>

        <div className="mt-4 h-px bg-white/10" />

        <div className="mt-auto flex items-center justify-between">
          <span className="text-[14px] font-medium text-white/75">{dateLabel}</span>

          <ViewMoreDetails />
        </div>
      </div>
    </article>
  );
}
