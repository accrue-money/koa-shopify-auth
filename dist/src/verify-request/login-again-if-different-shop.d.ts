import { Context } from 'koa';
import ShopifyNode from '@shopify/shopify-api';
import { NextFunction } from '../types';
import { Routes } from './types';
export declare function loginAgainIfDifferentShop(routes: Routes, accessMode: "online" | "offline" | undefined, Shopify: typeof ShopifyNode): (ctx: Context, next: NextFunction) => Promise<void>;
//# sourceMappingURL=login-again-if-different-shop.d.ts.map