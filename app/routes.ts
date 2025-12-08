import { type RouteConfig, index, layout, route } from '@react-router/dev/routes';

import { routesMap } from './lib/constants';

export default [
  layout('routes/layout.tsx', [
    index('routes/home.tsx'),
    ...routesMap.map(({ url, pagePath }) => route(url, pagePath)),
  ]),
] satisfies RouteConfig;
