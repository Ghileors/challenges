import { BgIdeaInput } from '@/features/change-avatar-background/_components/bg-idea-input';
import { ChangeAvatarBackgroundButton } from '@/features/change-avatar-background/_components/change-avatar-background-button';
import { GenerateBackgroundButton } from '@/features/change-avatar-background/_components/generate-background-button';

export default function ChangeAvatarBackground() {
  return (
    <div className="flex h-full w-full items-center justify-center gap-4">
      <ChangeAvatarBackgroundButton />
      <div className="flex flex-col gap-y-6">
        <BgIdeaInput />
        <GenerateBackgroundButton />
      </div>
    </div>
  );
}
