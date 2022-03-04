import {Context} from 'koa';
import ShopifyNode from '@shopify/shopify-api';
import {Routes} from './types';
export declare function redirectToAuth(
  {fallbackRoute, authRoute}: Routes,
  ctx: Context,
): void;
export declare function clearSession(
  ctx: Context,
  accessMode: 'online' | 'offline' | undefined,
  Shopify: typeof ShopifyNode,
): Promise<void>;
//# sourceMappingURL=utilities.d.ts.map
