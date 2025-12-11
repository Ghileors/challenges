import { AvatarsList } from '@/features/avatar/_components/avatars-list';
import { Filters } from '@/features/avatar/_components/filters';

export function meta() {
  return [{ title: 'Avatar' }, { name: 'description', content: 'Create your avatar!' }];
}

export default function Avatar() {
  return (
    <div className="mt-11 mr-auto ml-auto w-fit">
      <h1 className="font-[Italian_Plate_No2_Expanded] text-[26px] leading-[120%] font-bold tracking-[0]">
        Choose an AI avatar
      </h1>

      <Filters />

      <AvatarsList />
    </div>
  );
}
