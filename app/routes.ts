import { type RouteConfig, index, layout, route } from '@react-router/dev/routes';

export default [
  layout('routes/create-avatar.tsx', [
    index('routes/about.tsx'),
    route('avatar', 'features/avatar/avatar.tsx'),
  ]),

  layout('routes/bookings.tsx', index('routes/bookings.tsx'), [
    route('apartments', 'features/bookings/apartments.tsx'),
  ]),
] satisfies RouteConfig;
