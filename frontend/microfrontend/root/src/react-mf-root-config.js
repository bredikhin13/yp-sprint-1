import { registerApplication, start } from 'single-spa';

registerApplication({
  name: 'user-profile',
  app: () => import('profile/profile'),
  activeWhen: ['/']
});

registerApplication({
  name: 'places',
  app: () => import('places/places'),
  activeWhen: ['/']
});

registerApplication({
  name: 'auth',
  app: () => import('auth/auth'),
  activeWhen: ['/signup', '/signup']
});

start();