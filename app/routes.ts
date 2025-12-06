import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('routes/layout.tsx'),
  route('home', 'routes/home.tsx'),
  route('about', 'routes/about.tsx'),
  route('contact', 'routes/contact.tsx'),
  route('challenges', 'routes/challenges.tsx'),
] satisfies RouteConfig;
