import { Outlet } from 'react-router';

export function meta() {
  return [{ title: 'Vault' }, { name: 'description', content: 'UI Challenge' }];
}

export default function Layout() {
  return (
    <>
      <main className="3xl:px-[150px] h-full w-full bg-black px-5">
        <Outlet />
      </main>
    </>
  );
}
