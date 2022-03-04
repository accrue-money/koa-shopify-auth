'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
exports.verifyToken =
  exports.REAUTH_URL_HEADER =
  exports.REAUTH_HEADER =
    void 0;
var tslib_1 = require('tslib');
var index_1 = require('../index');
var utilities_1 = require('./utilities');
var auth_1 = require('../auth');
var error_1 = require('@shopify/shopify-api/dist/error');
exports.REAUTH_HEADER = 'X-Shopify-API-Request-Failure-Reauthorize';
exports.REAUTH_URL_HEADER = 'X-Shopify-API-Request-Failure-Reauthorize-Url';
function verifyToken(routes, accessMode, returnHeader, Shopify) {
  if (accessMode === void 0) {
    accessMode = auth_1.DEFAULT_ACCESS_MODE;
  }
  if (returnHeader === void 0) {
    returnHeader = false;
  }
  return function verifyTokenMiddleware(ctx, next) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
      var session,
        scopesChanged,
        client,
        e_1,
        shop,
        authHeader,
        matches,
        payload;
      return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [
              4 /*yield*/,
              Shopify.Utils.loadCurrentSession(
                ctx.req,
                ctx.res,
                accessMode === 'online',
              ),
            ];
          case 1:
            session = _a.sent();
            if (!session) return [3 /*break*/, 6];
            scopesChanged = !Shopify.Context.SCOPES.equals(session.scope);
            if (
              !(
                !scopesChanged &&
                session.accessToken &&
                (!session.expires || session.expires >= new Date())
              )
            )
              return [3 /*break*/, 6];
            _a.label = 2;
          case 2:
            _a.trys.push([2, 5, , 6]);
            client = new Shopify.Clients.Rest(
              session.shop,
              session.accessToken,
            );
            return [4 /*yield*/, client.get({path: 'shop'})];
          case 3:
            _a.sent();
            ctx.cookies.set(index_1.TOP_LEVEL_OAUTH_COOKIE_NAME);
            return [4 /*yield*/, next()];
          case 4:
            _a.sent();
            return [2 /*return*/];
          case 5:
            e_1 = _a.sent();
            if (e_1 instanceof error_1.HttpResponseError && e_1.code == 401) {
              // only catch 401 errors
            } else {
              throw e_1;
            }
            return [3 /*break*/, 6];
          case 6:
            ctx.cookies.set(index_1.TEST_COOKIE_NAME, '1');
            if (returnHeader) {
              ctx.response.status = 403;
              ctx.response.set(exports.REAUTH_HEADER, '1');
              shop = undefined;
              if (session) {
                shop = session.shop;
              } else if (Shopify.Context.IS_EMBEDDED_APP) {
                authHeader = ctx.req.headers.authorization;
                matches =
                  authHeader === null || authHeader === void 0
                    ? void 0
                    : authHeader.match(/Bearer (.*)/);
                if (matches) {
                  payload = Shopify.Utils.decodeSessionToken(matches[1]);
                  shop = payload.dest.replace('https://', '');
                }
              }
              if (shop) {
                ctx.response.set(
                  exports.REAUTH_URL_HEADER,
                  routes.authRoute + '?shop=' + shop,
                );
              }
              return [2 /*return*/];
            } else {
              utilities_1.redirectToAuth(routes, ctx);
            }
            return [2 /*return*/];
        }
      });
    });
  };
}
exports.verifyToken = verifyToken;
