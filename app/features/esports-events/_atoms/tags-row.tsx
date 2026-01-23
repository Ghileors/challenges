import type { EventTagType } from '../_lib/types';
import { EventTag } from './event-tag';

type Props = {
  tags: EventTagType[];
};

export default function TagsRow({ tags }: Props) {
  return (
    <div className="flex gap-0.5">
      {tags.map((tag) => (
        <EventTag
          key={tag}
          tag={tag}
        />
      ))}
    </div>
  );
}
