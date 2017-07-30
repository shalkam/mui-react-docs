import asyncComponent from './async-component';

export const Home = asyncComponent(() => import('./home'));
export const Docs = asyncComponent(() => import('./docs'));
export const TokenLaunch = asyncComponent(() => import('./token-launch'));
