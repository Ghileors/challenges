import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useSearchParams } from 'react-router';

export const Filters = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleFilters = (name: string, value: string) => {
    setSearchParams(() => {
      searchParams.set(name, value);
      return searchParams;
    });
  };

  return (
    <div className="mt-4 mb-8 flex gap-x-1.5">
      <Select onValueChange={(value) => handleFilters('gender', value)}>
        <SelectTrigger className="w-fit rounded-lg shadow-none focus-visible:ring-0">
          <SelectValue placeholder="Gender" />
        </SelectTrigger>
        <SelectContent className="shadow-none">
          <SelectItem value="male">Male</SelectItem>
          <SelectItem value="female">Female</SelectItem>
        </SelectContent>
      </Select>

      <Select onValueChange={(value) => handleFilters('age', value)}>
        <SelectTrigger className="w-fit rounded-lg shadow-none focus-visible:ring-0">
          <SelectValue placeholder="Age" />
        </SelectTrigger>
        <SelectContent className="shadow-none">
          <SelectItem value="young">Young</SelectItem>
          <SelectItem value="adult">Adult</SelectItem>
          <SelectItem value="senior">Senior</SelectItem>
        </SelectContent>
      </Select>

      <Select onValueChange={(value) => handleFilters('pose', value)}>
        <SelectTrigger className="w-fit rounded-lg shadow-none focus-visible:ring-0">
          <SelectValue placeholder="Pose" />
        </SelectTrigger>
        <SelectContent className="shadow-none">
          <SelectItem value="site">Sit</SelectItem>
          <SelectItem value="stand">Stand</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};
