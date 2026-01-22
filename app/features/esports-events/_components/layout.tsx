import { Outlet } from 'react-router';

export function meta() {
  return [{ title: 'Ragebite' }, { name: 'description', content: 'UI Challenge' }];
}

export default function Layout() {
  return (
    <>
      <main className="h-full w-full bg-black px-5">
        <Outlet />
      </main>
    </>
  );
}
