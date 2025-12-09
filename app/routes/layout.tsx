import ArrowIcon from '@/assets/icons/arrow.svg?react';
import CloseIcon from '@/assets/icons/close.svg?react';
import { cn } from '@/lib/utils';
import { Link, Outlet } from 'react-router';

export function meta() {
  return [{ title: 'Challenges' }, { name: 'description', content: 'Welcome to App!' }];
}

export default function Layout() {
  return (
    <>
      <nav className="absolute top-0 flex h-16 w-screen items-center justify-between border-b border-[hsla(210,18%,96%,1)] px-12">
        {/* TODO: add condition rendering for icons */}
        <ArrowIcon />
        <div className="flex gap-1.5">
          <Link
            to="avatar"
            className={cn(
              'flex h-[42px] w-fit items-center justify-center gap-[6px] rounded-full pt-[16px] pr-[16px] pb-[14px] pl-[16px]',
              'border border-[hsla(210,18%,96%,1)] backdrop-blur-[15px]',
              'focus:border-[hsla(208,22%,83%,1)] focus:text-black'
            )}
          >
            <p className="align-bottom font-[Italian_Plate_No2_Expanded] text-[12px] leading-[100%] font-semibold tracking-[0] text-[hsla(208,6%,59%,1)] first-letter:uppercase">
              Avatar
            </p>
          </Link>
          <Link
            to="/"
            className={cn(
              'flex h-[42px] w-fit items-center justify-center gap-[6px] rounded-full pt-[16px] pr-[16px] pb-[14px] pl-[16px]',
              'border border-[hsla(210,18%,96%,1)] backdrop-blur-[15px]',
              'focus:border-[hsla(208,22%,83%,1)] focus:text-black'
            )}
          >
            <p className="align-bottom font-[Italian_Plate_No2_Expanded] text-[12px] leading-[100%] font-semibold tracking-[0] text-[hsla(208,6%,59%,1)] first-letter:uppercase">
              About
            </p>
          </Link>
        </div>

        <CloseIcon />
      </nav>
      <main className="h-full w-full pt-16">
        <Outlet />
      </main>
    </>
  );
}
