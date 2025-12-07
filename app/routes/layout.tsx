import ArrowIcon from '@/assets/icons/arrow.svg?react';
import CloseIcon from '@/assets/icons/close.svg?react';
import { Outlet } from 'react-router';

export function meta() {
  return [{ title: 'Challenges' }, { name: 'description', content: 'Welcome to App!' }];
}

export default function Layout() {
  return (
    <>
      <nav className="absolute top-0 flex h-16 w-screen items-center justify-between border-b border-[hsla(210,18%,96%,1)] px-12">
        {/* TODO: add condition rendering for icons */}
        <ArrowIcon /> <div>Header</div>
        <CloseIcon />
      </nav>
      <main className="h-full w-full bg-gray-500">
        <Outlet />
      </main>
    </>
  );
}
