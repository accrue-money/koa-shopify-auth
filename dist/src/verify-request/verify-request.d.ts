import compose from 'koa-compose';
import ShopifyNode from '@shopify/shopify-api';
import {Options} from './types';
export default function verifyRequest(
  givenOptions: Options | undefined,
  Shopify: typeof ShopifyNode,
): compose.Middleware<
  import('koa').ParameterizedContext<
    import('koa').DefaultState,
    import('koa').Context,
    any
  >
>;
//# sourceMappingURL=verify-request.d.ts.map
