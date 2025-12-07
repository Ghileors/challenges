import { type RouteConfig, index, layout, route } from '@react-router/dev/routes';

export default [
  layout('routes/layout.tsx', [
    index('routes/home.tsx'),
    route('about', 'routes/about.tsx'),
    route('contact', 'routes/contact.tsx'),
    route('challenges', 'routes/challenges.tsx'),
    route('avatar', 'routes/avatar.tsx'),
  ]),
] satisfies RouteConfig;
