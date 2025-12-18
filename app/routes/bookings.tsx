import { Link, Outlet } from 'react-router';

export function meta() {
  return [{ title: 'Bookings' }, { name: 'description', content: 'Welcome to the Bookings!' }];
}

export default function Bookings() {
  return (
    <>
      <nav className="absolute top-0 flex h-16 w-screen items-center justify-center gap-1.5 border-b border-[hsla(210,18%,96%,1)] px-12">
        <Link to="apartments">Apartments</Link>
      </nav>
      <main className="h-full w-full pt-16">
        <Outlet />
      </main>
    </>
  );
}
