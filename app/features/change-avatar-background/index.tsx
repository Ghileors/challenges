import { BgIdeaInput } from '@/features/change-avatar-background/_components/background-idea-input';
import { ChangeAvatarBackgroundButton } from '@/features/change-avatar-background/_components/change-background-button';
import { GenerateBackgroundButton } from '@/features/change-avatar-background/_components/generate-background-button';

export default function ChangeAvatarBackground() {
  return (
    <div className="flex items-center justify-center gap-4">
      <ChangeAvatarBackgroundButton />
    </div>
  );
}
