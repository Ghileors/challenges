import ActionBackIcon from '@/assets/icons/action_back.svg?react';
import ActionNextIcon from '@/assets/icons/action_next.svg?react';
import RegenerateSparkleIcon from '@/assets/icons/regenerate-sparkle.svg?react';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export const BgIdeaInput = () => {
  return (
    <div className="relative flex flex-col items-start gap-y-3">
      <Label
        htmlFor="change-avatar-background-prompt-input"
        className="font-[Italian_Plate_No2_Expanded] text-[14px] leading-[120%] font-semibold tracking-[0px]"
      >
        Background idea
      </Label>

      <Textarea
        id="change-avatar-background-prompt-input"
        className="h-[195px] w-[360px] rotate-0 rounded-[12px] border border-[hsla(210,18%,96%,1)] pt-4 pb-16 opacity-100"
      />

      {/* TODO: change divs to buttons */}
      <div className="absolute bottom-0 left-0 flex w-full justify-between rounded-[12px] border border-[hsla(210,18%,96%,1)] bg-white px-6 py-5">
        <div className="flex items-center gap-1.5">
          <RegenerateSparkleIcon />
          <p className="font-[Italian_Plate_No2_Expanded] text-[12px] leading-[120%] font-semibold tracking-[0px]">
            Regenerate
          </p>
        </div>
        <div className="flex gap-x-[22px]">
          <ActionBackIcon />
          <ActionNextIcon />
        </div>
      </div>
    </div>
  );
};
