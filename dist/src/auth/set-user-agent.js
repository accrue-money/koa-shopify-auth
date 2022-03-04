'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
exports.KOA_USER_AGENT_PREFIX = void 0;
exports.KOA_USER_AGENT_PREFIX = 'Koa Shopify Auth';
function setUserAgent(Shopify) {
  if (!Shopify.Context.USER_AGENT_PREFIX) {
    Shopify.Context.USER_AGENT_PREFIX = exports.KOA_USER_AGENT_PREFIX;
  } else if (
    !Shopify.Context.USER_AGENT_PREFIX.includes(exports.KOA_USER_AGENT_PREFIX)
  ) {
    Shopify.Context.USER_AGENT_PREFIX =
      Shopify.Context.USER_AGENT_PREFIX + ' | ' + exports.KOA_USER_AGENT_PREFIX;
  }
}
exports.default = setUserAgent;
