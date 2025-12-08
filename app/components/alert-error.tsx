import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { CircleAlert, X } from 'lucide-react';

export const AlertError = ({ title, description }: { title: string; description: string }) => {
  return (
    <Alert variant="destructive">
      <div className="flex items-center gap-3">
        <CircleAlert className="h-[22px] w-[22px]" />
        <AlertTitle>{title}</AlertTitle>
        <X className="ml-auto cursor-pointer" />
      </div>
      <AlertDescription className="ml-[34px]">{description}</AlertDescription>
    </Alert>
  );
};
