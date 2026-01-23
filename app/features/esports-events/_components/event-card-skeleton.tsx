import { Background } from '../_atoms/background';
import { Separator } from '../_atoms/separator';

export function EventCardSkeleton() {
  return (
    <div className="relative h-[290px] w-full animate-pulse overflow-hidden bg-[#1E2429]">
      <Background />

      <div className="relative flex h-full flex-col px-5 pt-[46px] pb-5">
        {/* title 320 x 35 */}
        <div className="h-[35px] w-full max-w-[320px] bg-[#3d4144]" />

        {/* location 142 x 20 */}
        <div className="mt-2 mb-[18px] h-[20px] w-full max-w-[142px] bg-[#424a50]" />

        {/* tags 279 x 22 */}
        <div className="h-[22px] w-full max-w-[279px] bg-[#424a50]" />

        <div className="my-5">
          <Separator />
          <div className="py-4">
            {/* categories 186 x 20 */}
            <div className="h-[20px] w-full max-w-[186px] bg-[#424a50]" />
          </div>
          <Separator />
        </div>

        {/* bottom row */}
        <div className="mt-auto flex items-center justify-between gap-3">
          {/* date 124 x 20 */}
          <div className="h-[20px] w-full max-w-[124px] bg-[#424a50]" />

          {/* button 203 x 25 */}
          <div className="h-[25px] w-full max-w-[203px] bg-[#3d4144]" />
        </div>
      </div>
    </div>
  );
}
