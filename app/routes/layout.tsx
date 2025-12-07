import { Outlet } from 'react-router';

export function meta() {
  return [{ title: 'Challenges' }, { name: 'description', content: 'Welcome to App!' }];
}

export default function Layout() {
  return (
    <div className="h-full w-full bg-gray-500">
      <main>
        <Outlet />
      </main>
    </div>
  );
}
