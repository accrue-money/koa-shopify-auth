import { Context } from 'koa';
import { OAuthStartOptions } from '../types';
import ShopifyNode from '@shopify/shopify-api';
export default function createEnableCookies({ prefix }: OAuthStartOptions, Shopify: typeof ShopifyNode): (ctx: Context) => void;
//# sourceMappingURL=create-enable-cookies.d.ts.map