import { type RouteConfig, index, layout, route } from '@react-router/dev/routes';

export default [
  layout('routes/layout.tsx', [
    index('routes/about.tsx'),
    route('avatar', 'features/avatar/avatar.tsx'),
    route('apartments', 'features/bookings/apartments.tsx'),
    route('/bookings/:id?', 'features/bookings/draft-bookings.tsx'),
  ]),
] satisfies RouteConfig;
