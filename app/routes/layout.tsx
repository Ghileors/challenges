import { Outlet } from 'react-router';

export function meta() {
  return [{ title: 'Challenges' }, { name: 'description', content: 'Welcome to App!' }];
}

export default function Layout() {
  return (
    <div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
