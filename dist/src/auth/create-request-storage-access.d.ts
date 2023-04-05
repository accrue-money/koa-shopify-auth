import { Context } from 'koa';
import ShopifyNode from '@shopify/shopify-api';
import { OAuthStartOptions } from '../types';
export default function createRequestStorageAccess({ prefix }: OAuthStartOptions, Shopify: typeof ShopifyNode): (ctx: Context) => void;
//# sourceMappingURL=create-request-storage-access.d.ts.map