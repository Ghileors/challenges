import { type RouteConfig, index, layout } from '@react-router/dev/routes';

export default [
  layout('routes/layout.tsx', [index('features/esports-events/esports-events.tsx')]),
] satisfies RouteConfig;
