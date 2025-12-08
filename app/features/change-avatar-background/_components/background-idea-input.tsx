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

      <div className="rounded-[12px] border border-[#070a0e]">
        <Textarea
          id="change-avatar-background-prompt-input"
          className="h-[116px] w-[360px] resize-none border-none pt-4 shadow-none focus-visible:border-none focus-visible:ring-0"
        />

        {/* TODO: change divs to buttons */}
        <div className="flex w-full justify-between px-6 py-5">
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
    </div>
  );
};
