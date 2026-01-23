import { cn } from '@/lib/utils';

import CategoriesRow from '../_atoms/categories-row';
import EventLocation from '../_atoms/event-location';
import { Separator } from '../_atoms/separator';
import TagsRow from '../_atoms/tags-row';
import ViewMoreDetails from '../_atoms/view-more-details';
import type { EventCard } from '../_lib/types';
import { formatDateRange } from '../_lib/utils';

type Props = {
  event: EventCard;
};

export function EventCardView({ event }: Props) {
  const dateLabel = formatDateRange(event.dates.startDate, event.dates.endDate);

  return (
    <article
      className={cn(
        'group',
        'relative overflow-hidden',
        'h-[290px] w-full',
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

      <div className="relative flex h-full flex-col px-5 pt-[46px] pb-5">
        <h3
          className={cn(
            'max-w-80',
            'font-sporty-pro wrap-break-words text-lg leading-none font-medium tracking-[0] uppercase'
          )}
        >
          {event.title}
        </h3>

        <div className="mt-2 mb-[18px]">
          <EventLocation location={event.location} />
        </div>

        <TagsRow tags={event.tags} />

        <div className="my-5">
          <Separator />
          <div className="py-4">
            <CategoriesRow categories={event.categories} />
          </div>
          <Separator />
        </div>

        <div className="events-center flex justify-between">
          <p className="font-rajdhani text-xl leading-none font-semibold tracking-[0] text-[#E5E9EC]">
            {dateLabel}
          </p>

          <ViewMoreDetails />
        </div>
      </div>
    </article>
  );
}
