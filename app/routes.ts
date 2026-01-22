import { type RouteConfig, index, layout } from '@react-router/dev/routes';

export default [
  // layout('routes/layout.tsx', [
  //   index('routes/about.tsx'),
  //   route('avatar', 'features/avatar/avatar.tsx'),
  //   route('apartments', 'features/bookings/apartments.tsx'),
  //   route('/bookings/:id?', 'features/bookings/draft-bookings.tsx'),
  // ]),
  layout('features/esports-events/_components/layout.tsx', [
    index('features/esports-events/esports-events.tsx'),
  ]),
] satisfies RouteConfig;
