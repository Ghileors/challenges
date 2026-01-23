import { cn } from '@/lib/utils';

import { Background } from '../_atoms/background';
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
        'group relative overflow-hidden',
        'h-[290px] w-full',
        'bg-[#1E2429] text-white'
      )}
    >
      <Background />

      {/* Content */}
      <div className="relative flex h-full flex-col px-5 pt-[46px] pb-5">
        <p
          className={cn(
            'font-rajdhani absolute top-4 left-5',
            'text-base font-bold text-[#C3FF00] uppercase',
            'hidden group-hover:inline'
          )}
        >
          featured
        </p>
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
        <div className="events-center flex items-center justify-between">
          <p className="font-rajdhani text-xl leading-none font-semibold tracking-[0] text-[#E5E9EC]">
            {dateLabel}
          </p>
          <ViewMoreDetails />
        </div>
      </div>
    </article>
  );
}
