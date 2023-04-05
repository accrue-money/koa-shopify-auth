import ShopifyNode from '@shopify/shopify-api';
import { Context } from 'koa';
import { NextFunction } from '../types';
import { Routes } from './types';
export declare const REAUTH_HEADER = "X-Shopify-API-Request-Failure-Reauthorize";
export declare const REAUTH_URL_HEADER = "X-Shopify-API-Request-Failure-Reauthorize-Url";
export declare function verifyToken(routes: Routes, accessMode: "online" | "offline" | undefined, returnHeader: boolean | undefined, Shopify: typeof ShopifyNode): (ctx: Context, next: NextFunction) => Promise<void>;
//# sourceMappingURL=verify-token.d.ts.map