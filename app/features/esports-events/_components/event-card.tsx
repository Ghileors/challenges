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
        'group relative overflow-hidden',
        'h-[290px] w-full',
        'bg-[#1E2429] text-white'
      )}
    >
      {/* Lines layer (background + mask) */}
      <div
        className={cn(
          'pointer-events-none absolute inset-0',
          '[background:repeating-linear-gradient(30deg,rgba(229,233,236,0.30)_0,rgba(229,233,236,0.30)_10px,transparent_12px,transparent_16px)]',
          'mask-image:radial-gradient(circle_at_-10%_-10%,#000000_0%,#000000_4%,#00000000_32%)',
          'mask-repeat:no-repeat',
          'mask-size:100%_100%',
          '[-webkit-mask-image:radial-gradient(circle_at_-10%_-10%,#000000_0%,#000000_4%,#00000000_32%)]',
          '[-webkit-mask-repeat:no-repeat]',
          '[-webkit-mask-size:100%_100%]'
        )}
      />

      {/* Ellipse layer */}
      <div
        className={cn(
          'pointer-events-none absolute inset-0 opacity-70',
          'bg-[radial-gradient(circle_at_-10%_-10%,#5C96B0_0%,#4B7E94_0.5%,#3B6678_1%,#5C96B026_32%,#1E242900_62%)]',
          'group-hover:bg-[radial-gradient(circle_at_-10%_-10%,#8800FF_0%,#8800FF26_32%,#1E242900_62%)]',
          'transition-[background] duration-150'
        )}
      />

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
