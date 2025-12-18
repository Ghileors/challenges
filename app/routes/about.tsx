import { ProjectDescription } from '@/features/about/_components/project-description';

export function meta() {
  return [{ title: 'About' }, { name: 'description', content: 'Project Description!' }];
}

export default function About() {
  return (
    <div className="h-full overflow-y-scroll p-5">
      <ProjectDescription />
    </div>
  );
}
