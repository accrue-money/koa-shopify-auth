!(function (t, e) {
    'object' == typeof exports && 'object' == typeof module
        ? (module.exports = e())
        : 'function' == typeof define && define.amd
            ? define('app-bridge', [], e)
            : 'object' == typeof exports
                ? (exports['app-bridge'] = e())
                : (t['app-bridge'] = e());
})(window, function () {
    return (function (t) {
        var e = {};
        function r(n) {
            if (e[n])
                return e[n].exports;
            var o = (e[n] = { i: n, l: !1, exports: {} });
            return t[n].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
        }
        return ((r.m = t),
            (r.c = e),
            (r.d = function (t, e, n) {
                r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
            }),
            (r.r = function (t) {
                'undefined' != typeof Symbol &&
                    Symbol.toStringTag &&
                    Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
                    Object.defineProperty(t, '__esModule', { value: !0 });
            }),
            (r.t = function (t, e) {
                if ((1 & e && (t = r(t)), 8 & e))
                    return t;
                if (4 & e && 'object' == typeof t && t && t.__esModule)
                    return t;
                var n = Object.create(null);
                if ((r.r(n),
                    Object.defineProperty(n, 'default', { enumerable: !0, value: t }),
                    2 & e && 'string' != typeof t))
                    for (var o in t)
                        r.d(n, o, function (e) {
                            return t[e];
                        }.bind(null, o));
                return n;
            }),
            (r.n = function (t) {
                var e = t && t.__esModule
                    ? function () {
                        return t.default;
                    }
                    : function () {
                        return t;
                    };
                return r.d(e, 'a', e), e;
            }),
            (r.o = function (t, e) {
                return Object.prototype.hasOwnProperty.call(t, e);
            }),
            (r.p = ''),
            r((r.s = 24)));
    })([
        function (t, e, r) {
            'use strict';
            var n, o = (this && this.__extends) ||
                ((n = function (t, e) {
                    return (n =
                        Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (t, e) {
                                    t.__proto__ = e;
                                }) ||
                            function (t, e) {
                                for (var r in e)
                                    e.hasOwnProperty(r) && (t[r] = e[r]);
                            })(t, e);
                }),
                    function (t, e) {
                        function r() {
                            this.constructor = t;
                        }
                        n(t, e),
                            (t.prototype =
                                null === e
                                    ? Object.create(e)
                                    : ((r.prototype = e.prototype), new r()));
                    }), i = (this && this.__assign) ||
                function () {
                    return (i =
                        Object.assign ||
                            function (t) {
                                for (var e, r = 1, n = arguments.length; r < n; r++)
                                    for (var o in (e = arguments[r]))
                                        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                                return t;
                            }).apply(this, arguments);
                }, a = (this && this.__spreadArrays) ||
                function () {
                    for (var t = 0, e = 0, r = arguments.length; e < r; e++)
                        t += arguments[e].length;
                    var n = Array(t), o = 0;
                    for (e = 0; e < r; e++)
                        for (var i = arguments[e], a = 0, s = i.length; a < s; a++, o++)
                            n[o] = i[a];
                    return n;
                }, s = (this && this.__importDefault) ||
                function (t) {
                    return t && t.__esModule ? t : { default: t };
                };
            Object.defineProperty(e, '__esModule', { value: !0 }),
                (e.NonSnakeCaseGroup =
                    e.findMatchInEnum =
                        e.forEachInEnum =
                            e.getMergedProps =
                                e.updateActionFromPayload =
                                    e.ActionSetWithChildren =
                                        e.ActionSet =
                                            e.isValidOptionalString =
                                                e.isValidOptionalNumber =
                                                    e.getEventNameSpace =
                                                        e.getVersion =
                                                            e.actionWrapper =
                                                                void 0);
            var u = r(2), c = r(7), p = r(3), f = r(12), h = s(r(13)), d = r(1), l = s(r(25)), y = r(26);
            function A() {
                return y.version;
            }
            function P(t, r, n) {
                if (r.startsWith('' + f.PREFIX + f.SEPARATOR))
                    return r;
                var o = (function (t) {
                    if (e.NonSnakeCaseGroup.includes(t))
                        return t.toUpperCase();
                    return ((r = t),
                        r.replace(/([A-Z])/g, function (t, e, r) {
                            return (0 === r ? '' : '_') + t[0].toLowerCase();
                        })).toUpperCase();
                    var r;
                })(t);
                if (n) {
                    var i = n.subgroups, a = n.type;
                    i &&
                        i.length > 0 &&
                        ((o += o.length > 0 ? f.SEPARATOR : ''),
                            i.forEach(function (t, e) {
                                o += '' + t.toUpperCase() + (e < i.length - 1 ? f.SEPARATOR : '');
                            })),
                        a !== t &&
                            a &&
                            (o += '' + (o.length > 0 ? f.SEPARATOR : '') + a.toUpperCase());
                }
                return (o && (o += '' + (o.length > 0 ? f.SEPARATOR : '') + r.toUpperCase()),
                    '' + f.PREFIX + f.SEPARATOR + o);
            }
            (e.actionWrapper = function (t) {
                return i(i({}, t), {
                    version: A(),
                    clientInterface: { name: y.name, version: A() },
                });
            }),
                (e.getVersion = A),
                (e.getEventNameSpace = P),
                (e.isValidOptionalNumber = function (t) {
                    return null == t || 'number' == typeof t;
                }),
                (e.isValidOptionalString = function (t) {
                    return null == t || 'string' == typeof t;
                });
            var E = (function () {
                function t(t, e, r, n) {
                    var o = this;
                    (this.app = t),
                        (this.type = e),
                        (this.group = r),
                        (this.subgroups = []),
                        (this.subscriptions = []),
                        t ||
                            p.throwError(p.Action.INVALID_ACTION, 'Missing required `app`'),
                        (this.id = n || l.default()),
                        (this.defaultGroup = r);
                    var i = this.set;
                    this.set = function () {
                        for (var t, e = [], r = 0; r < arguments.length; r++)
                            e[r] = arguments[r];
                        return o.app.hooks
                            ? (t = o.app.hooks).run.apply(t, a([u.LifecycleHook.UpdateAction, i, o], e))
                            : i.apply(o, e);
                    };
                }
                return ((t.prototype.set = function () {
                    for (var t = [], e = 0; e < arguments.length; e++)
                        t[e] = arguments[e];
                }),
                    Object.defineProperty(t.prototype, 'component', {
                        get: function () {
                            return { id: this.id, subgroups: this.subgroups, type: this.type };
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    (t.prototype.updateSubscription = function (t, e, r) {
                        var n, o = t.eventType, i = t.callback, a = t.component;
                        return ((n = this.subscriptions.findIndex(function (e) {
                            return e === t;
                        })) >= 0
                            ? this.subscriptions[n].unsubscribe()
                            : (n = void 0),
                            (this.group = e),
                            (this.subgroups = r),
                            Object.assign(a, { subgroups: this.subgroups }),
                            this.subscribe(o, i, a, n));
                    }),
                    (t.prototype.error = function (t) {
                        var e = this, r = [];
                        return (O(p.Action, function (n) {
                            r.push(e.subscriptions.length), e.subscribe(n, t);
                        }),
                            function () {
                                r.map(function (t) {
                                    return e.subscriptions[t];
                                }).forEach(function (t) {
                                    c.removeFromCollection(e.subscriptions, t, function (t) {
                                        t.unsubscribe();
                                    });
                                });
                            });
                    }),
                    (t.prototype.subscribe = function (t, e, r, n) {
                        var o, a = this, s = r || this.component, u = t.toUpperCase(), c = 'number' == typeof n ? e : e.bind(this);
                        o = p.isErrorEventName(t)
                            ? P(d.Group.Error, t, i(i({}, s), { type: '' }))
                            : P(this.group, t, s);
                        var f = this.app.subscribe(o, c, r ? r.id : this.id), h = {
                            eventType: u,
                            unsubscribe: f,
                            callback: c,
                            component: s,
                            updateSubscribe: function (t, e) {
                                return a.updateSubscription(h, t, e);
                            },
                        };
                        return ('number' == typeof n && n >= 0 && n < this.subscriptions.length
                            ? (this.subscriptions[n] = h)
                            : this.subscriptions.push(h),
                            f);
                    }),
                    (t.prototype.unsubscribe = function (t) {
                        return (void 0 === t && (t = !1),
                            _(this.subscriptions, this.defaultGroup, t),
                            this);
                    }),
                    t);
            })();
            e.ActionSet = E;
            var v = (function (t) {
                function e() {
                    var e = (null !== t && t.apply(this, arguments)) || this;
                    return (e.children = []), e;
                }
                return (o(e, t),
                    (e.prototype.unsubscribe = function (t, r) {
                        return (void 0 === t && (t = !0),
                            void 0 === r && (r = !1),
                            _(this.subscriptions, this.defaultGroup, r),
                            this.children.forEach(function (r) {
                                r instanceof e ? r.unsubscribe(t, !t) : r.unsubscribe(!t);
                            }),
                            this);
                    }),
                    (e.prototype.getChild = function (t) {
                        var e = this.children.findIndex(function (e) {
                            return e.id === t;
                        });
                        return e >= 0 ? this.children[e] : void 0;
                    }),
                    (e.prototype.getChildIndex = function (t) {
                        return this.children.findIndex(function (e) {
                            return e.id === t;
                        });
                    }),
                    (e.prototype.getChildSubscriptions = function (t, e) {
                        return this.subscriptions.filter(function (r) {
                            return r.component.id === t && (!e || e === r.eventType);
                        });
                    }),
                    (e.prototype.addChild = function (t, r, n) {
                        var o = this, i = t.subscriptions;
                        return (this.getChild(t.id) || this.children.push(t),
                            !i ||
                                (r === t.group && n === t.subgroups) ||
                                (i.forEach(function (t) {
                                    (0, t.updateSubscribe)(r, n);
                                }),
                                    Object.assign(t, { group: r, subgroups: n }),
                                    t instanceof e &&
                                        t.children.forEach(function (t) {
                                            return o.addChild(t, r, n);
                                        })),
                            this);
                    }),
                    (e.prototype.removeChild = function (t) {
                        var e = this;
                        return (c.removeFromCollection(this.children, this.getChild(t), function () {
                            e.subscriptions
                                .filter(function (e) {
                                return e.component.id === t;
                            })
                                .forEach(function (t) {
                                c.removeFromCollection(e.subscriptions, t, function (t) {
                                    t.unsubscribe();
                                });
                            });
                        }),
                            this);
                    }),
                    (e.prototype.subscribeToChild = function (t, e, r) {
                        var n = this, o = r.bind(this);
                        if (e instanceof Array)
                            return (e.forEach(function (e) {
                                return n.subscribeToChild(t, e, r);
                            }),
                                this);
                        if ('string' != typeof e)
                            return this;
                        var i = e.toUpperCase(), a = this.getChildSubscriptions(t.id, i);
                        if (a.length > 0)
                            a.forEach(function (e) {
                                return e.updateSubscribe(n.group, t.subgroups);
                            });
                        else {
                            var s = { id: t.id, subgroups: t.subgroups, type: t.type };
                            this.subscribe(i, o, s);
                        }
                        return this;
                    }),
                    (e.prototype.getUpdatedChildActions = function (t, e) {
                        if (0 !== t.length) {
                            for (var r = t.filter(function (t, e, r) {
                                return e === r.indexOf(t);
                            }), n = r.map(function (t) {
                                return t.id;
                            }), o = e.filter(function (t) {
                                return n.indexOf(t.id) < 0;
                            }); o.length > 0;) {
                                if (!(i = o.pop()))
                                    break;
                                this.removeChild(i.id);
                            }
                            return r;
                        }
                        for (; e.length > 0;) {
                            var i;
                            if (!(i = e.pop()))
                                break;
                            this.removeChild(i.id);
                        }
                    }),
                    e);
            })(E);
            function _(t, e, r) {
                void 0 === r && (r = !1),
                    t.forEach(function (t) {
                        r ? (0, t.updateSubscribe)(e, []) : (0, t.unsubscribe)();
                    }),
                    r || (t.length = 0);
            }
            function g(t, e) {
                var r = h.default(t, e);
                return r || Object.assign(t, e);
            }
            function O(t, e) {
                Object.keys(t).forEach(function (r) {
                    e(t[r]);
                });
            }
            (e.ActionSetWithChildren = v),
                (e.updateActionFromPayload = function (t, e) {
                    return t.id === e.id && (Object.assign(t, g(t, e)), !0);
                }),
                (e.getMergedProps = g),
                (e.forEachInEnum = O),
                (e.findMatchInEnum = function (t, e) {
                    var r = Object.keys(t).find(function (r) {
                        return e === t[r];
                    });
                    return r ? t[r] : void 0;
                }),
                (e.NonSnakeCaseGroup = [
                    d.Group.AuthCode,
                    d.Group.Button,
                    d.Group.ButtonGroup,
                    d.Group.Cart,
                    d.Group.Error,
                    d.Group.Features,
                    d.Group.Fullscreen,
                    d.Group.Link,
                    d.Group.Loading,
                    d.Group.Menu,
                    d.Group.Modal,
                    d.Group.Navigation,
                    d.Group.Pos,
                    d.Group.Print,
                    d.Group.ResourcePicker,
                    d.Group.Scanner,
                    d.Group.SessionToken,
                    d.Group.Share,
                    d.Group.TitleBar,
                    d.Group.Toast,
                ]);
        },
        function (t, e, r) {
            'use strict';
            Object.defineProperty(e, '__esModule', { value: !0 }),
                (e.ComponentType = e.Group = void 0),
                (function (t) {
                    (t.AuthCode = 'AuthCode'),
                        (t.Button = 'Button'),
                        (t.ButtonGroup = 'ButtonGroup'),
                        (t.Cart = 'Cart'),
                        (t.Client = 'Client'),
                        (t.ContextualSaveBar = 'ContextualSaveBar'),
                        (t.Error = 'Error'),
                        (t.Features = 'Features'),
                        (t.FeedbackModal = 'FeedbackModal'),
                        (t.Fullscreen = 'Fullscreen'),
                        (t.LeaveConfirmation = 'LeaveConfirmation'),
                        (t.Link = 'Link'),
                        (t.Loading = 'Loading'),
                        (t.Menu = 'Menu'),
                        (t.Modal = 'Modal'),
                        (t.Navigation = 'Navigation'),
                        (t.Performance = 'Performance'),
                        (t.Pos = 'Pos'),
                        (t.Print = 'Print'),
                        (t.ResourcePicker = 'Resource_Picker'),
                        (t.Scanner = 'Scanner'),
                        (t.SessionToken = 'SessionToken'),
                        (t.Share = 'Share'),
                        (t.TitleBar = 'TitleBar'),
                        (t.Toast = 'Toast'),
                        (t.MarketingExternalActivityTopBar =
                            'MarketingExternalActivityTopBar');
                })(e.Group || (e.Group = {})),
                (function (t) {
                    (t.Button = 'Button'), (t.ButtonGroup = 'ButtonGroup');
                })(e.ComponentType || (e.ComponentType = {}));
        },
        function (t, e, r) {
            'use strict';
            Object.defineProperty(e, '__esModule', { value: !0 }),
                (e.LifecycleHook =
                    e.MessageType =
                        e.PermissionType =
                            e.isV1Config =
                                void 0),
                (e.isV1Config = function (t) {
                    return void 0 !== t.shopOrigin;
                }),
                (function (t) {
                    (t.Dispatch = 'Dispatch'), (t.Subscribe = 'Subscribe');
                })(e.PermissionType || (e.PermissionType = {})),
                (function (t) {
                    (t.GetState = 'getState'),
                        (t.Dispatch = 'dispatch'),
                        (t.Subscribe = 'subscribe'),
                        (t.Unsubscribe = 'unsubscribe');
                })(e.MessageType || (e.MessageType = {})),
                (function (t) {
                    (t.UpdateAction = 'UpdateAction'),
                        (t.DispatchAction = 'DispatchAction');
                })(e.LifecycleHook || (e.LifecycleHook = {}));
        },
        function (t, e, r) {
            'use strict';
            Object.defineProperty(e, '__esModule', { value: !0 }),
                (e.throwError =
                    e.fromAction =
                        e.AppBridgeError =
                            e.invalidOriginAction =
                                e.isErrorEventName =
                                    e.permissionAction =
                                        e.networkAction =
                                            e.persistenceAction =
                                                e.unsupportedOperationAction =
                                                    e.unexpectedAction =
                                                        e.invalidAction =
                                                            e.invalidActionType =
                                                                e.invalidPayload =
                                                                    e.Message =
                                                                        e.AppActionType =
                                                                            e.Action =
                                                                                void 0);
            var n, o = r(0), i = r(1);
            function a(t, e, r) {
                var n = e.payload;
                return o.actionWrapper({
                    type: t,
                    group: i.Group.Error,
                    payload: {
                        action: e,
                        message: r,
                        type: t,
                        id: n && n.id ? n.id : void 0,
                    },
                });
            }
            !(function (t) {
                (t.INVALID_ACTION = 'APP::ERROR::INVALID_ACTION'),
                    (t.INVALID_ACTION_TYPE = 'APP::ERROR::INVALID_ACTION_TYPE'),
                    (t.INVALID_PAYLOAD = 'APP::ERROR::INVALID_PAYLOAD'),
                    (t.INVALID_OPTIONS = 'APP::ERROR::INVALID_OPTIONS'),
                    (t.UNEXPECTED_ACTION = 'APP::ERROR::UNEXPECTED_ACTION'),
                    (t.PERSISTENCE = 'APP::ERROR::PERSISTENCE'),
                    (t.UNSUPPORTED_OPERATION = 'APP::ERROR::UNSUPPORTED_OPERATION'),
                    (t.NETWORK = 'APP::ERROR::NETWORK'),
                    (t.PERMISSION = 'APP::ERROR::PERMISSION'),
                    (t.FAILED_AUTHENTICATION = 'APP::ERROR::FAILED_AUTHENTICATION'),
                    (t.INVALID_ORIGIN = 'APP::ERROR::INVALID_ORIGIN');
            })((n = e.Action || (e.Action = {}))),
                (function (t) {
                    (t.INVALID_CONFIG = 'APP::ERROR::INVALID_CONFIG'),
                        (t.MISSING_CONFIG = 'APP::APP_ERROR::MISSING_CONFIG'),
                        (t.MISSING_APP_BRIDGE_MIDDLEWARE =
                            'APP::APP_ERROR::MISSING_APP_BRIDGE_MIDDLEWARE'),
                        (t.WINDOW_UNDEFINED = 'APP::APP_ERROR::WINDOW_UNDEFINED'),
                        (t.REDUX_REINSTANTIATED = 'APP::APP_ERROR::REDUX_REINSTANTIATED'),
                        (t.MISSING_LOCAL_ORIGIN = 'APP::APP_ERROR::MISSING_LOCAL_ORIGIN'),
                        (t.MISSING_HOST_PROVIDER = 'APP::APP_ERROR::MISSING_HOST_PROVIDER'),
                        (t.MISSING_ROUTER_CONTEXT =
                            'APP::APP_ERROR::MISSING_ROUTER_CONTEXT'),
                        (t.MISSING_HISTORY_BLOCK = 'APP::APP_ERROR::MISSING_HISTORY_BLOCK');
                })(e.AppActionType || (e.AppActionType = {})),
                (function (t) {
                    (t.MISSING_PAYLOAD = 'Missing payload'),
                        (t.INVALID_PAYLOAD_ID = 'Id in payload is missing or invalid');
                })(e.Message || (e.Message = {})),
                (e.invalidPayload = function (t, e) {
                    return a(n.INVALID_PAYLOAD, t, e ||
                        "The action's payload is missing required properties or has invalid properties");
                }),
                (e.invalidActionType = function (t, e) {
                    return o.actionWrapper({
                        group: i.Group.Error,
                        payload: {
                            action: t,
                            message: e || 'The action type is invalid or unsupported',
                            type: n.INVALID_ACTION_TYPE,
                        },
                        type: n.INVALID_ACTION_TYPE,
                    });
                }),
                (e.invalidAction = function (t, e) {
                    return o.actionWrapper({
                        group: i.Group.Error,
                        payload: {
                            action: t,
                            message: e ||
                                "The action's has missing/invalid values for `group`, `type` or `version`",
                            type: n.INVALID_ACTION,
                        },
                        type: n.INVALID_ACTION,
                    });
                }),
                (e.unexpectedAction = function (t, e) {
                    return o.actionWrapper({
                        group: i.Group.Error,
                        payload: {
                            action: t,
                            message: e || 'Action cannot be called at this time',
                            type: n.UNEXPECTED_ACTION,
                        },
                        type: n.UNEXPECTED_ACTION,
                    });
                }),
                (e.unsupportedOperationAction = function (t, e) {
                    return a(n.UNSUPPORTED_OPERATION, t, e || 'The action type is unsupported');
                }),
                (e.persistenceAction = function (t, e) {
                    return a(n.PERSISTENCE, t, e || 'Action cannot be persisted on server');
                }),
                (e.networkAction = function (t, e) {
                    return a(n.NETWORK, t, e || 'Network error');
                }),
                (e.permissionAction = function (t, e) {
                    return a(n.PERMISSION, t, e || 'Action is not permitted');
                }),
                (e.isErrorEventName = function (t) {
                    return 'string' == typeof o.findMatchInEnum(n, t);
                }),
                (e.invalidOriginAction = function (t) {
                    return o.actionWrapper({
                        group: i.Group.Error,
                        payload: { message: t, type: n.INVALID_ORIGIN },
                        type: n.INVALID_ORIGIN,
                    });
                });
            var s = function (t) {
                (this.name = 'AppBridgeError'),
                    (this.message = t),
                    'function' == typeof Error.captureStackTrace
                        ? Error.captureStackTrace(this, this.constructor)
                        : (this.stack = new Error(this.message).stack);
            };
            function u(t, e, r) {
                var n = new s(t ? e + ': ' + t : e);
                return (n.action = r), (n.type = e), n;
            }
            (e.AppBridgeError = s),
                (s.prototype = Object.create(Error.prototype)),
                (e.fromAction = u),
                (e.throwError = function () {
                    for (var t = [], e = 0; e < arguments.length; e++)
                        t[e] = arguments[e];
                    var r, n, o = t[0];
                    throw (('string' == typeof t[1]
                        ? (r = t[1])
                        : ((n = t[1]), (r = t[2] || '')),
                        u(r, o, n)));
                });
        },
        function (t, e, r) {
            'use strict';
            var n, o = (this && this.__extends) ||
                ((n = function (t, e) {
                    return (n =
                        Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (t, e) {
                                    t.__proto__ = e;
                                }) ||
                            function (t, e) {
                                for (var r in e)
                                    e.hasOwnProperty(r) && (t[r] = e[r]);
                            })(t, e);
                }),
                    function (t, e) {
                        function r() {
                            this.constructor = t;
                        }
                        n(t, e),
                            (t.prototype =
                                null === e
                                    ? Object.create(e)
                                    : ((r.prototype = e.prototype), new r()));
                    }), i = (this && this.__assign) ||
                function () {
                    return (i =
                        Object.assign ||
                            function (t) {
                                for (var e, r = 1, n = arguments.length; r < n; r++)
                                    for (var o in (e = arguments[r]))
                                        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                                return t;
                            }).apply(this, arguments);
                };
            Object.defineProperty(e, '__esModule', { value: !0 }),
                (e.create =
                    e.Button =
                        e.isValidButtonProps =
                            e.update =
                                e.clickButton =
                                    e.Style =
                                        e.Icon =
                                            e.Action =
                                                void 0);
            var a, s = r(0), u = r(1);
            function c(t, e, r) {
                var n = e.id, o = s.getEventNameSpace(t, a.CLICK, e), i = { id: n, payload: r };
                return s.actionWrapper({ type: o, group: t, payload: i });
            }
            function p(t, e, r) {
                var n = e.id, o = r.label, u = s.getEventNameSpace(t, a.UPDATE, e), c = i(i({}, r), { id: n, label: o });
                return s.actionWrapper({ type: u, group: t, payload: c });
            }
            !(function (t) {
                (t.CLICK = 'CLICK'), (t.UPDATE = 'UPDATE');
            })((a = e.Action || (e.Action = {}))),
                (function (t) {
                    t.Print = 'print';
                })(e.Icon || (e.Icon = {})),
                (function (t) {
                    t.Danger = 'danger';
                })(e.Style || (e.Style = {})),
                (e.clickButton = c),
                (e.update = p),
                (e.isValidButtonProps = function (t) {
                    return 'string' == typeof t.id && 'string' == typeof t.label;
                });
            var f = (function (t) {
                function e(e, r) {
                    var n = t.call(this, e, u.ComponentType.Button, u.Group.Button) || this;
                    return ((n.disabled = !1), (n.loading = !1), (n.plain = !1), n.set(r, !1), n);
                }
                return (o(e, t),
                    Object.defineProperty(e.prototype, 'options', {
                        get: function () {
                            return {
                                disabled: this.disabled,
                                icon: this.icon,
                                label: this.label,
                                style: this.style,
                                loading: this.loading,
                                plain: this.plain,
                            };
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, 'payload', {
                        get: function () {
                            return i(i({}, this.options), { id: this.id });
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    (e.prototype.set = function (t, e) {
                        void 0 === e && (e = !0);
                        var r = s.getMergedProps(this.options, t), n = r.label, o = r.disabled, i = r.icon, u = r.style, c = r.loading, p = r.plain;
                        return ((this.label = n),
                            (this.disabled = Boolean(o)),
                            (this.icon = i),
                            (this.style = u),
                            (this.loading = Boolean(c)),
                            (this.plain = Boolean(p)),
                            e && this.dispatch(a.UPDATE),
                            this);
                    }),
                    (e.prototype.dispatch = function (t, e) {
                        switch (t) {
                            case a.CLICK:
                                this.app.dispatch(c(this.group, this.component, e));
                                break;
                            case a.UPDATE:
                                var r = p(this.group, this.component, this.payload);
                                this.app.dispatch(r);
                        }
                        return this;
                    }),
                    e);
            })(s.ActionSet);
            (e.Button = f),
                (e.create = function (t, e) {
                    return new f(t, e);
                });
        },
        function (t, e, r) {
            'use strict';
            var n = (this && this.__createBinding) ||
                (Object.create
                    ? function (t, e, r, n) {
                        void 0 === n && (n = r),
                            Object.defineProperty(t, n, {
                                enumerable: !0,
                                get: function () {
                                    return e[r];
                                },
                            });
                    }
                    : function (t, e, r, n) {
                        void 0 === n && (n = r), (t[n] = e[r]);
                    }), o = (this && this.__exportStar) ||
                function (t, e) {
                    for (var r in t)
                        'default' === r || e.hasOwnProperty(r) || n(e, t, r);
                };
            Object.defineProperty(e, '__esModule', { value: !0 });
            var i = r(11);
            o(r(2), e), o(r(11), e), (e.default = i.createClientApp);
        },
        function (t, e, r) {
            'use strict';
            Object.defineProperty(e, '__esModule', { value: !0 }),
                (e.getSingleButton = void 0);
            var n = r(4);
            e.getSingleButton = function (t, e, r, o) {
                return (t.addChild(e, t.group, r),
                    t.subscribeToChild(e, n.Action.UPDATE, o),
                    e.payload);
            };
        },
        function (t, e, r) {
            'use strict';
            function n(t, e, r) {
                var n = t.findIndex(function (t) {
                    return t === e;
                });
                return n >= 0 && (t.splice(n, 1), r && r(e), !0);
            }
            Object.defineProperty(e, '__esModule', { value: !0 }),
                (e.removeFromCollection = e.addAndRemoveFromCollection = void 0),
                (e.addAndRemoveFromCollection = function (t, e, r) {
                    return (t.push(e),
                        function () {
                            return n(t, e, r);
                        });
                }),
                (e.removeFromCollection = n);
        },
        function (t, e, r) {
            'use strict';
            var n, o = (this && this.__extends) ||
                ((n = function (t, e) {
                    return (n =
                        Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (t, e) {
                                    t.__proto__ = e;
                                }) ||
                            function (t, e) {
                                for (var r in e)
                                    e.hasOwnProperty(r) && (t[r] = e[r]);
                            })(t, e);
                }),
                    function (t, e) {
                        function r() {
                            this.constructor = t;
                        }
                        n(t, e),
                            (t.prototype =
                                null === e
                                    ? Object.create(e)
                                    : ((r.prototype = e.prototype), new r()));
                    }), i = (this && this.__assign) ||
                function () {
                    return (i =
                        Object.assign ||
                            function (t) {
                                for (var e, r = 1, n = arguments.length; r < n; r++)
                                    for (var o in (e = arguments[r]))
                                        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                                return t;
                            }).apply(this, arguments);
                };
            Object.defineProperty(e, '__esModule', { value: !0 }),
                (e.create =
                    e.ButtonGroup =
                        e.isGroupedButtonPayload =
                            e.isGroupedButton =
                                e.update =
                                    e.Action =
                                        void 0);
            var a, s = r(6), u = r(0), c = r(1);
            function p(t, e, r) {
                return (function (t, e, r, n, o) {
                    var a = e.id, s = n.label, c = u.getEventNameSpace(t, r, e), p = i(i({}, n), { id: a, label: s, payload: o });
                    return u.actionWrapper({ type: c, group: t, payload: p });
                })(t, e, a.UPDATE, r);
            }
            !(function (t) {
                t.UPDATE = 'UPDATE';
            })((a = e.Action || (e.Action = {}))),
                (e.update = p),
                (e.isGroupedButton = function (t) {
                    var e = t;
                    return e.buttons && e.buttons.length > 0 && void 0 !== e.label;
                }),
                (e.isGroupedButtonPayload = function (t) {
                    var e = t;
                    return (Array.isArray(e.buttons) &&
                        'string' == typeof e.id &&
                        'string' == typeof e.label);
                });
            var f = (function (t) {
                function e(e, r) {
                    var n = t.call(this, e, c.ComponentType.ButtonGroup, c.Group.ButtonGroup) ||
                        this;
                    return ((n.disabled = !1),
                        (n.plain = !1),
                        (n.buttonsOptions = []),
                        (n.buttons = []),
                        n.set(r, !1),
                        n);
                }
                return (o(e, t),
                    Object.defineProperty(e.prototype, 'options', {
                        get: function () {
                            return {
                                buttons: this.buttonsOptions,
                                disabled: this.disabled,
                                label: this.label,
                                plain: this.plain,
                            };
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, 'payload', {
                        get: function () {
                            return i(i({}, this.options), {
                                buttons: this.buttons,
                                id: this.id,
                            });
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    (e.prototype.set = function (t, e) {
                        void 0 === e && (e = !0);
                        var r = u.getMergedProps(this.options, t), n = r.label, o = r.disabled, i = r.buttons, s = r.plain;
                        return ((this.label = n),
                            (this.disabled = Boolean(o)),
                            (this.buttons = this.getButtons(i)),
                            (this.plain = Boolean(s)),
                            e && this.dispatch(a.UPDATE),
                            this);
                    }),
                    (e.prototype.dispatch = function (t) {
                        switch (t) {
                            case a.UPDATE:
                                var e = p(this.group, this.component, this.payload);
                                this.app.dispatch(e);
                        }
                        return this;
                    }),
                    (e.prototype.updateButtons = function (t) {
                        if (this.buttons && 0 !== this.buttons.length) {
                            for (var e, r = 0, n = this.buttons; r < n.length; r++) {
                                var o = n[r];
                                if ((e = u.updateActionFromPayload(o, t)))
                                    break;
                            }
                            e && this.dispatch(a.UPDATE);
                        }
                    }),
                    (e.prototype.getSingleButton = function (t) {
                        return s.getSingleButton(this, t, this.subgroups, this.updateButtons);
                    }),
                    (e.prototype.getButtons = function (t) {
                        var e = this, r = [];
                        return t
                            ? (t.forEach(function (t) {
                                var n = s.getSingleButton(e, t, e.subgroups, e.updateButtons);
                                r.push(n);
                            }),
                                (this.buttonsOptions = t),
                                r)
                            : [];
                    }),
                    e);
            })(u.ActionSetWithChildren);
            (e.ButtonGroup = f),
                (e.create = function (t, e) {
                    return new f(t, e);
                });
        },
        function (t, e, r) {
            'use strict';
            var n, o = (this && this.__extends) ||
                ((n = function (t, e) {
                    return (n =
                        Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (t, e) {
                                    t.__proto__ = e;
                                }) ||
                            function (t, e) {
                                for (var r in e)
                                    e.hasOwnProperty(r) && (t[r] = e[r]);
                            })(t, e);
                }),
                    function (t, e) {
                        function r() {
                            this.constructor = t;
                        }
                        n(t, e),
                            (t.prototype =
                                null === e
                                    ? Object.create(e)
                                    : ((r.prototype = e.prototype), new r()));
                    }), i = (this && this.__assign) ||
                function () {
                    return (i =
                        Object.assign ||
                            function (t) {
                                for (var e, r = 1, n = arguments.length; r < n; r++)
                                    for (var o in (e = arguments[r]))
                                        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                                return t;
                            }).apply(this, arguments);
                };
            Object.defineProperty(e, '__esModule', { value: !0 }),
                (e.create = e.Toast = e.clear = e.show = e.Action = void 0);
            var a, s = r(0), u = r(1);
            function c(t) {
                return s.actionWrapper({
                    group: u.Group.Toast,
                    payload: t,
                    type: a.SHOW,
                });
            }
            function p(t) {
                return s.actionWrapper({
                    payload: t,
                    group: u.Group.Toast,
                    type: a.CLEAR,
                });
            }
            !(function (t) {
                (t.SHOW = 'APP::TOAST::SHOW'), (t.CLEAR = 'APP::TOAST::CLEAR');
            })((a = e.Action || (e.Action = {}))),
                (e.show = c),
                (e.clear = p);
            var f = (function (t) {
                function e(e, r) {
                    var n = t.call(this, e, u.Group.Toast, u.Group.Toast) || this;
                    return (n.message = ''), (n.duration = 5e3), n.set(r), n;
                }
                return (o(e, t),
                    Object.defineProperty(e.prototype, 'options', {
                        get: function () {
                            return {
                                duration: this.duration,
                                isError: this.isError,
                                message: this.message,
                            };
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, 'payload', {
                        get: function () {
                            return i({ id: this.id }, this.options);
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    (e.prototype.set = function (t) {
                        var e = s.getMergedProps(this.options, t), r = e.message, n = e.duration, o = e.isError;
                        return ((this.message = r), (this.duration = n), (this.isError = o), this);
                    }),
                    (e.prototype.dispatch = function (t) {
                        switch (t) {
                            case a.SHOW:
                                var e = c(this.payload);
                                this.app.dispatch(e);
                                break;
                            case a.CLEAR:
                                this.app.dispatch(p({ id: this.id }));
                        }
                        return this;
                    }),
                    e);
            })(s.ActionSet);
            (e.Toast = f),
                (e.create = function (t, e) {
                    return new f(t, e);
                });
        },
        function (t, e, r) {
            'use strict';
            var n, o = (this && this.__extends) ||
                ((n = function (t, e) {
                    return (n =
                        Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (t, e) {
                                    t.__proto__ = e;
                                }) ||
                            function (t, e) {
                                for (var r in e)
                                    e.hasOwnProperty(r) && (t[r] = e[r]);
                            })(t, e);
                }),
                    function (t, e) {
                        function r() {
                            this.constructor = t;
                        }
                        n(t, e),
                            (t.prototype =
                                null === e
                                    ? Object.create(e)
                                    : ((r.prototype = e.prototype), new r()));
                    }), i = (this && this.__assign) ||
                function () {
                    return (i =
                        Object.assign ||
                            function (t) {
                                for (var e, r = 1, n = arguments.length; r < n; r++)
                                    for (var o in (e = arguments[r]))
                                        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                                return t;
                            }).apply(this, arguments);
                };
            Object.defineProperty(e, '__esModule', { value: !0 }),
                (e.create = e.AppLink = e.update = e.Action = void 0);
            var a, s = r(0), u = r(1), c = r(22);
            function p(t, e, r) {
                var n = e.id, o = r.label, u = r.destination, c = i(i({}, r), { id: n, label: o, destination: u });
                return s.actionWrapper({
                    group: t,
                    type: s.getEventNameSpace(t, a.UPDATE, e),
                    payload: c,
                });
            }
            !(function (t) {
                t.UPDATE = 'UPDATE';
            })((a = e.Action || (e.Action = {}))),
                (e.update = p);
            var f = (function (t) {
                function e(e, r) {
                    var n = t.call(this, e, u.Group.Link, u.Group.Link) || this;
                    return (n.label = ''), (n.destination = ''), n.set(r, !1), n;
                }
                return (o(e, t),
                    Object.defineProperty(e.prototype, 'options', {
                        get: function () {
                            return {
                                label: this.label,
                                destination: this.destination,
                                redirectType: c.Action.APP,
                            };
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, 'payload', {
                        get: function () {
                            var t = this.options, e = t.label, r = t.destination, n = t.redirectType, o = r;
                            return {
                                id: this.id,
                                label: e,
                                destination: { path: o },
                                redirectType: n,
                            };
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    (e.prototype.set = function (t, e) {
                        void 0 === e && (e = !0);
                        var r = s.getMergedProps(this.options, t), n = r.label, o = r.destination;
                        return ((this.label = n),
                            (this.destination = o),
                            e && this.dispatch(a.UPDATE),
                            this);
                    }),
                    (e.prototype.dispatch = function (t) {
                        switch (t) {
                            case a.UPDATE:
                                var e = p(this.group, this.component, this.payload);
                                this.app.dispatch(e);
                        }
                        return this;
                    }),
                    e);
            })(s.ActionSet);
            (e.AppLink = f),
                (e.create = function (t, e) {
                    return new f(t, e);
                });
        },
        function (t, e, r) {
            'use strict';
            var n = (this && this.__assign) ||
                function () {
                    return (n =
                        Object.assign ||
                            function (t) {
                                for (var e, r = 1, n = arguments.length; r < n; r++)
                                    for (var o in (e = arguments[r]))
                                        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                                return t;
                            }).apply(this, arguments);
                }, o = (this && this.__importDefault) ||
                function (t) {
                    return t && t.__esModule ? t : { default: t };
                };
            Object.defineProperty(e, '__esModule', { value: !0 }),
                (e.createApp =
                    e.createAppWrapper =
                        e.createClientApp =
                            e.WINDOW_UNDEFINED_MESSAGE =
                                void 0);
            var i = r(0), a = r(14), s = r(3), u = r(15), c = r(29), p = r(17), f = r(18), h = r(30), d = r(19), l = r(2), y = o(r(31));
            function A(t, r, n) {
                if ((void 0 === n && (n = []), !t))
                    throw s.fromAction(e.WINDOW_UNDEFINED_MESSAGE, s.AppActionType.WINDOW_UNDEFINED);
                var o = d.getLocation(), i = r || (o && o.origin);
                if (!i)
                    throw s.fromAction('local origin cannot be blank', s.AppActionType.MISSING_LOCAL_ORIGIN);
                var a = u.fromWindow(t, i);
                return e.createClientApp(a, n);
            }
            function P(t) {
                var e = d.getWindow();
                return e ? A(e.top)(t) : c.serverAppBridge;
            }
            (e.WINDOW_UNDEFINED_MESSAGE =
                'window is not defined. Running an app outside a browser is not supported'),
                (e.createClientApp = function (t, e) {
                    void 0 === e && (e = []);
                    var r = [], o = u.createTransportListener();
                    return (t.subscribe(function (t) {
                        var e = t.data, n = e.type, a = e.payload;
                        switch (n) {
                            case 'getState':
                                r.splice(0).forEach(function (t) {
                                    return t(a);
                                });
                                break;
                            case 'dispatch':
                                if ((o.handleMessage(a), o.handleActionDispatch(a)))
                                    return;
                                var u = i.findMatchInEnum(s.Action, a.type);
                                u && s.throwError(u, a);
                        }
                    }),
                        function (u) {
                            if (!u.host)
                                throw s.fromAction('host must be provided', s.AppActionType.INVALID_CONFIG);
                            if (!u.apiKey)
                                throw s.fromAction('apiKey must be provided', s.AppActionType.INVALID_CONFIG);
                            var c;
                            try {
                                c = (function (t) {
                                    var e;
                                    return n(n({}, t), {
                                        host: atob(null === (e = t.host) || void 0 === e
                                            ? void 0
                                            : e.replace(/_/g, '/').replace(/-/g, '+')),
                                    });
                                })(u);
                            }
                            catch (t) {
                                throw s.fromAction('not a valid host, please use the value provided by Shopify', s.AppActionType.INVALID_CONFIG);
                            }
                            var A = (function (t, e) {
                                return function (r, n) {
                                    t.dispatch({ payload: n, source: e, type: r });
                                };
                            })(t, c), P = o.createSubscribeHandler(A);
                            function E(t) {
                                return A(l.MessageType.Dispatch, t), t;
                            }
                            A(l.MessageType.Unsubscribe),
                                (function (t, e) {
                                    var r = e.apiKey, n = e.host, o = e.forceRedirect, i = void 0 === o ? !p.isDevelopmentClient : o, a = d.getLocation();
                                    if (!p.isUnframed &&
                                        a &&
                                        r &&
                                        n &&
                                        i &&
                                        d.shouldRedirect(t)) {
                                        var s = 'https://' +
                                            n +
                                            '/apps/' +
                                            r +
                                            a.pathname +
                                            (a.search || '');
                                        d.redirect(s);
                                    }
                                })(t.hostFrame, c);
                            for (var v = new y.default(), _ = {
                                localOrigin: t.localOrigin,
                                hooks: v,
                                dispatch: function (t) {
                                    return _.hooks
                                        ? _.hooks.run(l.LifecycleHook.DispatchAction, E, _, t)
                                        : E(t);
                                },
                                featuresAvailable: function (t) {
                                    return _.getState('features').then(function (e) {
                                        return t
                                            ? t.reduce(function (t, r) {
                                                return (Object.keys(e).includes(r) && (t[r] = e[r]), t);
                                            }, {})
                                            : e;
                                    });
                                },
                                getState: function (t) {
                                    return t && 'string' != typeof t
                                        ? Promise.resolve(void 0)
                                        : new Promise(function (t) {
                                            r.push(t), A(l.MessageType.GetState);
                                        }).then(function (e) {
                                            var r = e;
                                            if (t)
                                                for (var n = 0, o = t.split('.'); n < o.length; n++) {
                                                    var i = o[n];
                                                    if (null == r ||
                                                        'object' != typeof r ||
                                                        Array.isArray(r) ||
                                                        !Object.keys(r).includes(i))
                                                        return;
                                                    r = r[i];
                                                }
                                            return r;
                                        });
                                },
                                subscribe: P,
                                error: function (t, e) {
                                    var r = [];
                                    return (i.forEachInEnum(s.Action, function (n) {
                                        r.push(P(n, t, e));
                                    }),
                                        function () {
                                            r.forEach(function (t) {
                                                return t();
                                            });
                                        });
                                },
                            }, g = 0, O = e; g < O.length; g++) {
                                (0, O[g])(v, _);
                            }
                            return ((function (t) {
                                t.subscribe(a.Action.APP, h.handleAppPrint),
                                    t.dispatch(f.initialize());
                            })(_),
                                _);
                        });
                }),
                (e.createAppWrapper = A),
                (e.createApp = P),
                (e.default = P);
        },
        function (t, e, r) {
            'use strict';
            Object.defineProperty(e, '__esModule', { value: !0 }),
                (e.SEPARATOR = e.PREFIX = void 0),
                (e.PREFIX = 'APP'),
                (e.SEPARATOR = '::');
        },
        function (t, e, r) {
            'use strict';
            Object.defineProperty(e, '__esModule', { value: !0 }),
                (e.default = function t(e, r) {
                    if (null == r)
                        return r;
                    if (void 0 === e ||
                        !Object.prototype.isPrototypeOf.call(Object.getPrototypeOf(e), r) ||
                        ('Object' !== r.constructor.name && 'Array' !== r.constructor.name))
                        return r;
                    var n = {};
                    return (Object.keys(r).forEach(function (o) {
                        Object.prototype.hasOwnProperty.call(e, o)
                            ? 'object' != typeof e[o] || Array.isArray(e[o])
                                ? (n[o] = r[o])
                                : (n[o] = t(e[o], r[o]))
                            : (n[o] = r[o]);
                    }),
                        Object.keys(e).forEach(function (t) {
                            Object.prototype.hasOwnProperty.call(r, t) || (n[t] = e[t]);
                        }),
                        Object.setPrototypeOf(n, Object.getPrototypeOf(e)),
                        n);
                });
        },
        function (t, e, r) {
            'use strict';
            Object.defineProperty(e, '__esModule', { value: !0 }),
                (e.app = e.Action = void 0);
            var n, o = r(0), i = r(1);
            !(function (t) {
                t.APP = 'APP::PRINT::APP';
            })((n = e.Action || (e.Action = {}))),
                (e.app = function () {
                    return o.actionWrapper({ group: i.Group.Print, type: n.APP });
                });
        },
        function (t, e, r) {
            'use strict';
            Object.defineProperty(e, '__esModule', { value: !0 }),
                (e.createTransportListener =
                    e.fromWindow =
                        e.fromFrame =
                            e.Context =
                                void 0);
            var n = r(3), o = r(16), i = r(2), a = r(7), s = r(17), u = r(28);
            !(function (t) {
                (t.Modal = 'Modal'), (t.Main = 'Main');
            })(e.Context || (e.Context = {})),
                (e.fromFrame = function (t, e, r) {
                    var i = [];
                    if (void 0 === t || !t.ownerDocument || !t.ownerDocument.defaultView)
                        throw n.fromAction('App frame is undefined', n.AppActionType.WINDOW_UNDEFINED);
                    var s = t.ownerDocument.defaultView;
                    return (s.addEventListener('message', function (r) {
                        if (o.isAppMessage(r))
                            if (r.origin === e)
                                for (var a = 0, s = i; a < s.length; a++) {
                                    (0, s[a])(r);
                                }
                            else {
                                var u = t.contentWindow;
                                if (u) {
                                    var c = "Message origin '" +
                                        r.origin +
                                        "' does not match app origin '" +
                                        e +
                                        "'.", p = { type: 'dispatch', payload: n.invalidOriginAction(c) };
                                    u.postMessage(p, r.origin);
                                }
                            }
                    }),
                        {
                            context: r,
                            localOrigin: e,
                            frameWindow: t.contentWindow,
                            hostFrame: s,
                            dispatch: function (r) {
                                var n = t.contentWindow;
                                n && n.postMessage(r, e);
                            },
                            subscribe: function (t) {
                                return a.addAndRemoveFromCollection(i, t);
                            },
                        });
                }),
                (e.fromWindow = function (t, e) {
                    var r = [];
                    return (void 0 !== typeof window &&
                        window.addEventListener('message', function (e) {
                            if ((window !== t || s.isUnframed) &&
                                e.source === t &&
                                (o.isAppBridgeAction(e.data.payload) || o.isAppMessage(e)))
                                for (var n = 0, i = r; n < i.length; n++) {
                                    (0, i[n])(e);
                                }
                        }),
                        {
                            localOrigin: e,
                            hostFrame: t,
                            dispatch: function (r) {
                                var n;
                                if (null === (n = r.source) || void 0 === n ? void 0 : n.host)
                                    if (s.isUnframed && window && window.MobileWebView) {
                                        var o = u.parsePayloadWithContext({
                                            id: 'unframed://fromClient',
                                            origin: e,
                                            data: r,
                                        });
                                        window.MobileWebView.postMessage(o);
                                    }
                                    else {
                                        var i = new URL('https://' + r.source.host).origin;
                                        t.postMessage(r, i);
                                    }
                            },
                            subscribe: function (t) {
                                return a.addAndRemoveFromCollection(r, t);
                            },
                        });
                }),
                (e.createTransportListener = function () {
                    var t = [], e = {};
                    return {
                        createSubscribeHandler: function (r) {
                            return function () {
                                if (arguments.length < 2)
                                    return a.addAndRemoveFromCollection(t, {
                                        callback: arguments[0],
                                    });
                                var n = Array.from(arguments), o = n[0], s = n[1], u = n[2], c = { callback: s, id: u }, p = { type: o, id: u };
                                return (Object.prototype.hasOwnProperty.call(e, o) || (e[o] = []),
                                    r && r(i.MessageType.Subscribe, p),
                                    a.addAndRemoveFromCollection(e[o], c, function () {
                                        r && r(i.MessageType.Unsubscribe, p);
                                    }));
                            };
                        },
                        handleMessage: function (e) {
                            t.forEach(function (t) {
                                return t.callback(e);
                            });
                        },
                        handleActionDispatch: function (t) {
                            var r = t.type, n = t.payload, o = !1;
                            if (Object.prototype.hasOwnProperty.call(e, r))
                                for (var i = 0, a = e[r]; i < a.length; i++) {
                                    var s = a[i], u = s.id, c = s.callback;
                                    (!(n && n.id === u) && u) || (c(n), (o = !0));
                                }
                            return o;
                        },
                    };
                });
        },
        function (t, e, r) {
            'use strict';
            Object.defineProperty(e, '__esModule', { value: !0 }),
                (e.isAppMessage =
                    e.isPermitted =
                        e.getPermissionKey =
                            e.isFromApp =
                                e.isAppBridgeAction =
                                    void 0);
            var n = r(2), o = r(12), i = r(0);
            function a(t) {
                return t.replace(new RegExp('^' + o.PREFIX + o.SEPARATOR + '\\w+' + o.SEPARATOR), '');
            }
            (e.isAppBridgeAction = function (t) {
                return (t instanceof Object &&
                    Object.prototype.hasOwnProperty.call(t, 'type') &&
                    t.type.toString().startsWith(o.PREFIX));
            }),
                (e.isFromApp = function (t) {
                    return ('object' == typeof t &&
                        'object' == typeof t.source &&
                        'string' == typeof t.source.apiKey);
                }),
                (e.getPermissionKey = a),
                (e.isPermitted = function (t, e, r) {
                    var n = e.group, o = e.type;
                    if (!n || !Object.prototype.hasOwnProperty.call(t, n))
                        return !1;
                    var i = t[n];
                    if (!i)
                        return !1;
                    var s = a(o);
                    return !!i[s] && !0 === i[s][r];
                }),
                (e.isAppMessage = function (t) {
                    if ('object' != typeof t || !t.data || 'object' != typeof t.data)
                        return !1;
                    var e = t.data;
                    return (Object.prototype.hasOwnProperty.call(e, 'type') &&
                        void 0 !== i.findMatchInEnum(n.MessageType, e.type));
                });
        },
        function (t, e, r) {
            'use strict';
            (function (t) {
                var r, n;
                Object.defineProperty(e, '__esModule', { value: !0 }),
                    (e.isUnframed =
                        e.isDevelopmentClient =
                            e.isProduction =
                                e.isDevelopment =
                                    e.isClient =
                                        e.isServer =
                                            void 0),
                    (e.isServer = 'undefined' == typeof window),
                    (e.isClient = !e.isServer),
                    (e.isDevelopment = void 0 !== t && t.env && !1),
                    (e.isProduction = !e.isDevelopment),
                    (e.isDevelopmentClient = e.isDevelopment && e.isClient),
                    (e.isUnframed =
                        e.isClient &&
                            (null ===
                                (n =
                                    null === (r = window.navigator) || void 0 === r
                                        ? void 0
                                        : r.userAgent) || void 0 === n
                                ? void 0
                                : n.indexOf('Unframed')) > 0);
            }.call(this, r(27)));
        },
        function (t, e, r) {
            'use strict';
            Object.defineProperty(e, '__esModule', { value: !0 }),
                (e.initialize = e.Action = void 0);
            var n, o = r(1), i = r(0);
            !(function (t) {
                t.INITIALIZE = 'APP::CLIENT::INITIALIZE';
            })((n = e.Action || (e.Action = {}))),
                (e.initialize = function () {
                    return i.actionWrapper({ group: o.Group.Client, type: n.INITIALIZE });
                });
        },
        function (t, e, r) {
            'use strict';
            function n() {
                return o() ? window.location : void 0;
            }
            function o() {
                return 'undefined' != typeof window;
            }
            Object.defineProperty(e, '__esModule', { value: !0 }),
                (e.getWindow = e.getLocation = e.redirect = e.shouldRedirect = void 0),
                (e.shouldRedirect = function (t) {
                    return t === window;
                }),
                (e.redirect = function (t) {
                    var e = n();
                    e && e.assign(t);
                }),
                (e.getLocation = n),
                (e.getWindow = function () {
                    return o() ? window : void 0;
                });
        },
        function (t, e, r) {
            'use strict';
            Object.defineProperty(e, '__esModule', { value: !0 }),
                (e.Action = void 0),
                (function (t) {
                    (t.UPDATE = 'APP::FEATURES::UPDATE'),
                        (t.REQUEST = 'APP::FEATURES::REQUEST'),
                        (t.REQUEST_UPDATE = 'APP::FEATURES::REQUEST::UPDATE');
                })(e.Action || (e.Action = {}));
        },
        function (t, e, r) {
            'use strict';
            var n, o = (this && this.__extends) ||
                ((n = function (t, e) {
                    return (n =
                        Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (t, e) {
                                    t.__proto__ = e;
                                }) ||
                            function (t, e) {
                                for (var r in e)
                                    e.hasOwnProperty(r) && (t[r] = e[r]);
                            })(t, e);
                }),
                    function (t, e) {
                        function r() {
                            this.constructor = t;
                        }
                        n(t, e),
                            (t.prototype =
                                null === e
                                    ? Object.create(e)
                                    : ((r.prototype = e.prototype), new r()));
                    }), i = (this && this.__assign) ||
                function () {
                    return (i =
                        Object.assign ||
                            function (t) {
                                for (var e, r = 1, n = arguments.length; r < n; r++)
                                    for (var o in (e = arguments[r]))
                                        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                                return t;
                            }).apply(this, arguments);
                };
            Object.defineProperty(e, '__esModule', { value: !0 }),
                (e.create =
                    e.ModalIframe =
                        e.ModalMessage =
                            e.Modal =
                                e.isMessageModal =
                                    e.isIframeModal =
                                        e.data =
                                            e.update =
                                                e.clickFooterButton =
                                                    e.updateModalSize =
                                                        e.closeModal =
                                                            e.openModal =
                                                                e.Size =
                                                                    e.Action =
                                                                        void 0);
            var a, s, u = r(6), c = r(0), p = r(1), f = r(4);
            !(function (t) {
                (t.OPEN = 'APP::MODAL::OPEN'),
                    (t.CLOSE = 'APP::MODAL::CLOSE'),
                    (t.UPDATE = 'APP::MODAL::UPDATE'),
                    (t.UPDATE_CONTENT = 'APP::MODAL::CONTENT::UPDATE'),
                    (t.FOOTER_BUTTON_CLICK = 'APP::MODAL::FOOTER::BUTTON::CLICK'),
                    (t.FOOTER_BUTTON_UPDATE = 'APP::MODAL::FOOTER::BUTTON::UPDATE'),
                    (t.UPDATE_SIZE = 'APP::MODAL::UPDATE_SIZE'),
                    (t.DATA = 'APP::MODAL::DATA');
            })((a = e.Action || (e.Action = {}))),
                (function (t) {
                    (t.Small = 'small'),
                        (t.Medium = 'medium'),
                        (t.Large = 'large'),
                        (t.Full = 'full'),
                        (t.Auto = 'auto');
                })((s = e.Size || (e.Size = {})));
            var h = {
                group: p.Group.Modal,
                subgroups: ['Footer'],
                type: p.ComponentType.Button,
            };
            function d(t) {
                return c.actionWrapper({
                    group: p.Group.Modal,
                    payload: t,
                    type: a.OPEN,
                });
            }
            function l(t) {
                return c.actionWrapper({
                    group: p.Group.Modal,
                    payload: t,
                    type: a.CLOSE,
                });
            }
            function y(t) {
                return c.actionWrapper({
                    payload: t,
                    group: p.Group.Modal,
                    type: a.UPDATE,
                });
            }
            function A(t) {
                return c.actionWrapper({
                    payload: t,
                    group: p.Group.Modal,
                    type: a.DATA,
                });
            }
            function P(t) {
                return 'string' == typeof t.url || 'string' == typeof t.path;
            }
            (e.openModal = d),
                (e.closeModal = l),
                (e.updateModalSize = function (t) {
                    return c.actionWrapper({
                        group: p.Group.Modal,
                        payload: t,
                        type: a.UPDATE_SIZE,
                    });
                }),
                (e.clickFooterButton = function (t, e) {
                    var r = i({ id: t }, h);
                    return f.clickButton(p.Group.Modal, r, e);
                }),
                (e.update = y),
                (e.data = A),
                (e.isIframeModal = P),
                (e.isMessageModal = function (t) {
                    return 'string' == typeof t.message;
                });
            var E = (function (t) {
                function e() {
                    var e = (null !== t && t.apply(this, arguments)) || this;
                    return (e.size = s.Small), e;
                }
                return (o(e, t),
                    Object.defineProperty(e.prototype, 'footer', {
                        get: function () {
                            if (this.footerPrimary || this.footerSecondary)
                                return {
                                    buttons: {
                                        primary: this.footerPrimary,
                                        secondary: this.footerSecondary,
                                    },
                                };
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, 'footerOptions', {
                        get: function () {
                            if (this.footerPrimaryOptions || this.footerSecondaryOptions)
                                return {
                                    buttons: {
                                        primary: this.footerPrimaryOptions,
                                        secondary: this.footerSecondaryOptions,
                                    },
                                };
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    (e.prototype.close = function () {
                        this.app.dispatch(l({ id: this.id }));
                    }),
                    (e.prototype.setFooterPrimaryButton = function (t, e) {
                        var r = this, n = h.subgroups;
                        (this.footerPrimaryOptions = this.getChildButton(t, this.footerPrimaryOptions)),
                            (this.footerPrimary = this.footerPrimaryOptions
                                ? u.getSingleButton(this, this.footerPrimaryOptions, n, function (t) {
                                    r.updatePrimaryFooterButton(t, e);
                                })
                                : void 0);
                    }),
                    (e.prototype.setFooterSecondaryButtons = function (t, e) {
                        var r = this, n = h.subgroups, o = t || [], i = (this.footerOptions && this.footerOptions.buttons.secondary) ||
                            [];
                        (this.footerSecondaryOptions = this.getUpdatedChildActions(o, i)),
                            (this.footerSecondary = this.footerSecondaryOptions
                                ? this.footerSecondaryOptions.map(function (t) {
                                    return u.getSingleButton(r, t, n, function (t) {
                                        r.updateSecondaryFooterButton(t, e);
                                    });
                                })
                                : void 0);
                    }),
                    (e.prototype.getChildButton = function (t, e) {
                        var r = t ? [t] : [], n = e ? [e] : [], o = this.getUpdatedChildActions(r, n);
                        return o ? o[0] : void 0;
                    }),
                    (e.prototype.updatePrimaryFooterButton = function (t, e) {
                        this.footer &&
                            this.footer.buttons.primary &&
                            c.updateActionFromPayload(this.footer.buttons.primary, t) &&
                            e();
                    }),
                    (e.prototype.updateSecondaryFooterButton = function (t, e) {
                        if (this.footer &&
                            this.footer.buttons &&
                            this.footer.buttons.secondary) {
                            for (var r, n = 0, o = this.footer.buttons.secondary; n < o.length; n++) {
                                var i = o[n];
                                if ((r = c.updateActionFromPayload(i, t)))
                                    break;
                            }
                            r && e();
                        }
                    }),
                    e);
            })(c.ActionSetWithChildren);
            e.Modal = E;
            var v = (function (t) {
                function e(e, r) {
                    var n = t.call(this, e, p.Group.Modal, p.Group.Modal) || this;
                    return n.set(r, !1), n;
                }
                return (o(e, t),
                    Object.defineProperty(e.prototype, 'payload', {
                        get: function () {
                            return i(i({}, this.options), { footer: this.footer, id: this.id });
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, 'options', {
                        get: function () {
                            return {
                                footer: this.footerOptions,
                                message: this.message,
                                size: this.size,
                                title: this.title,
                            };
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    (e.prototype.set = function (t, e) {
                        var r = this;
                        void 0 === e && (e = !0);
                        var n = c.getMergedProps(this.options, t), o = n.title, i = n.footer, s = n.message, u = n.size;
                        return ((this.title = o),
                            (this.message = s),
                            (this.size = u),
                            this.setFooterPrimaryButton(i ? i.buttons.primary : void 0, function () {
                                r.dispatch(a.UPDATE);
                            }),
                            this.setFooterSecondaryButtons(i ? i.buttons.secondary : void 0, function () {
                                r.dispatch(a.UPDATE);
                            }),
                            e && this.dispatch(a.UPDATE),
                            this);
                    }),
                    (e.prototype.dispatch = function (t) {
                        switch (t) {
                            case a.OPEN:
                                this.app.dispatch(d(this.payload));
                                break;
                            case a.CLOSE:
                                this.close();
                                break;
                            case a.UPDATE:
                                this.app.dispatch(y(this.payload));
                        }
                        return this;
                    }),
                    e);
            })(E);
            e.ModalMessage = v;
            var _ = (function (t) {
                function e(e, r) {
                    var n = t.call(this, e, p.Group.Modal, p.Group.Modal) || this;
                    return n.set(r, !1), n;
                }
                return (o(e, t),
                    Object.defineProperty(e.prototype, 'payload', {
                        get: function () {
                            return i(i({}, this.options), { footer: this.footer, id: this.id });
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, 'options', {
                        get: function () {
                            return {
                                footer: this.footerOptions,
                                path: this.path,
                                size: this.size,
                                title: this.title,
                                url: this.url,
                                loading: this.loading,
                            };
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    (e.prototype.set = function (t, e) {
                        var r = this;
                        void 0 === e && (e = !0);
                        var n = c.getMergedProps(this.options, t), o = n.title, i = n.footer, s = n.path, u = n.url, p = n.size, f = n.loading;
                        return ((this.title = o),
                            (this.url = u),
                            (this.path = s),
                            (this.size = p),
                            (this.loading = f),
                            this.setFooterPrimaryButton(i ? i.buttons.primary : void 0, function () {
                                r.dispatch(a.UPDATE);
                            }),
                            this.setFooterSecondaryButtons(i ? i.buttons.secondary : void 0, function () {
                                r.dispatch(a.UPDATE);
                            }),
                            e && this.dispatch(a.UPDATE),
                            this);
                    }),
                    (e.prototype.dispatch = function (t, e) {
                        switch (t) {
                            case a.OPEN:
                                this.app.dispatch(d(this.payload));
                                break;
                            case a.CLOSE:
                                this.close();
                                break;
                            case a.UPDATE:
                                this.app.dispatch(y(this.payload));
                                break;
                            case a.DATA:
                                this.app.dispatch(A(e || {}));
                        }
                        return this;
                    }),
                    e);
            })(E);
            (e.ModalIframe = _),
                (e.create = function (t, e) {
                    return P(e) ? new _(t, e) : new v(t, e);
                });
        },
        function (t, e, r) {
            'use strict';
            var n, o = (this && this.__extends) ||
                ((n = function (t, e) {
                    return (n =
                        Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (t, e) {
                                    t.__proto__ = e;
                                }) ||
                            function (t, e) {
                                for (var r in e)
                                    e.hasOwnProperty(r) && (t[r] = e[r]);
                            })(t, e);
                }),
                    function (t, e) {
                        function r() {
                            this.constructor = t;
                        }
                        n(t, e),
                            (t.prototype =
                                null === e
                                    ? Object.create(e)
                                    : ((r.prototype = e.prototype), new r()));
                    }), i = (this && this.__assign) ||
                function () {
                    return (i =
                        Object.assign ||
                            function (t) {
                                for (var e, r = 1, n = arguments.length; r < n; r++)
                                    for (var o in (e = arguments[r]))
                                        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                                return t;
                            }).apply(this, arguments);
                };
            Object.defineProperty(e, '__esModule', { value: !0 }),
                (e.create =
                    e.Redirect =
                        e.isRemotePayload =
                            e.isAdminSectionPayload =
                                e.isAdminPathPayload =
                                    e.isAppPayload =
                                        e.toDestination =
                                            e.toApp =
                                                e.toRemote =
                                                    e.toAdminSection =
                                                        e.toAdminPath =
                                                            e.isProductVariantCreateResourcePayload =
                                                                e.isProductVariantResourcePayload =
                                                                    e.isCreateResourcePayload =
                                                                        e.isResourcePayload =
                                                                            e.ResourceType =
                                                                                e.Action =
                                                                                    void 0);
            var a, s = r(0), u = r(1);
            function c(t) {
                return !0 === t.create;
            }
            function p(t) {
                var e = t;
                return void 0 !== e.id && void 0 !== e.variant;
            }
            function f(t) {
                return s.actionWrapper({
                    payload: t,
                    group: u.Group.Navigation,
                    type: a.ADMIN_PATH,
                });
            }
            function h(t) {
                return s.actionWrapper({
                    payload: t,
                    group: u.Group.Navigation,
                    type: a.ADMIN_SECTION,
                });
            }
            function d(t) {
                return s.actionWrapper({
                    payload: t,
                    group: u.Group.Navigation,
                    type: a.REMOTE,
                });
            }
            function l(t) {
                return s.actionWrapper({
                    payload: t,
                    group: u.Group.Navigation,
                    type: a.APP,
                });
            }
            function y(t, e, r) {
                switch (t) {
                    case a.APP:
                        var n = A(e) ? e : { path: e };
                        return l(i({ id: r }, n));
                    case a.ADMIN_PATH:
                        var o = P(e) ? e : { path: e };
                        return f(i({ id: r }, o));
                    case a.ADMIN_SECTION:
                        var s = E(e) ? e : { section: e };
                        return h(i({ id: r }, s));
                    case a.REMOTE:
                        var u = v(e) ? e : { url: e };
                        return d(i({ id: r }, u));
                }
            }
            function A(t) {
                return ('object' == typeof t &&
                    Object.prototype.hasOwnProperty.call(t, 'path'));
            }
            function P(t) {
                return ('object' == typeof t &&
                    Object.prototype.hasOwnProperty.call(t, 'path'));
            }
            function E(t) {
                return ('object' == typeof t &&
                    'object' == typeof t.section &&
                    Object.prototype.hasOwnProperty.call(t.section, 'name'));
            }
            function v(t) {
                return ('object' == typeof t && Object.prototype.hasOwnProperty.call(t, 'url'));
            }
            !(function (t) {
                (t.ADMIN_SECTION = 'APP::NAVIGATION::REDIRECT::ADMIN::SECTION'),
                    (t.ADMIN_PATH = 'APP::NAVIGATION::REDIRECT::ADMIN::PATH'),
                    (t.REMOTE = 'APP::NAVIGATION::REDIRECT::REMOTE'),
                    (t.APP = 'APP::NAVIGATION::REDIRECT::APP');
            })((a = e.Action || (e.Action = {}))),
                (function (t) {
                    (t.Product = 'products'),
                        (t.Collection = 'collections'),
                        (t.Order = 'orders'),
                        (t.Customer = 'customers'),
                        (t.Discount = 'discounts');
                })(e.ResourceType || (e.ResourceType = {})),
                (e.isResourcePayload = function (t) {
                    return 'string' == typeof t.id;
                }),
                (e.isCreateResourcePayload = c),
                (e.isProductVariantResourcePayload = p),
                (e.isProductVariantCreateResourcePayload = function (t) {
                    return !!p(t) && c(t.variant);
                }),
                (e.toAdminPath = f),
                (e.toAdminSection = h),
                (e.toRemote = d),
                (e.toApp = l),
                (e.toDestination = y),
                (e.isAppPayload = A),
                (e.isAdminPathPayload = P),
                (e.isAdminSectionPayload = E),
                (e.isRemotePayload = v);
            var _ = (function (t) {
                function e(e) {
                    return t.call(this, e, 'Redirect', u.Group.Navigation) || this;
                }
                return (o(e, t),
                    Object.defineProperty(e.prototype, 'payload', {
                        get: function () {
                            return { id: this.id };
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    (e.prototype.dispatch = function (t, e) {
                        var r = y(t, e, this.payload.id);
                        return this.app.dispatch(r), this;
                    }),
                    e);
            })(s.ActionSet);
            (e.Redirect = _),
                (e.create = function (t) {
                    return new _(t);
                });
        },
        function (t, e, r) {
            'use strict';
            (function (t) {
                /*!
                 * The buffer module from node.js, for the browser.
                 *
                 * @author   Feross Aboukhadijeh <http://feross.org>
                 * @license  MIT
                 */
                var n = r(62), o = r(63), i = r(64);
                function a() {
                    return u.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
                }
                function s(t, e) {
                    if (a() < e)
                        throw new RangeError('Invalid typed array length');
                    return (u.TYPED_ARRAY_SUPPORT
                        ? ((t = new Uint8Array(e)).__proto__ = u.prototype)
                        : (null === t && (t = new u(e)), (t.length = e)),
                        t);
                }
                function u(t, e, r) {
                    if (!(u.TYPED_ARRAY_SUPPORT || this instanceof u))
                        return new u(t, e, r);
                    if ('number' == typeof t) {
                        if ('string' == typeof e)
                            throw new Error('If encoding is specified then the first argument must be a string');
                        return f(this, t);
                    }
                    return c(this, t, e, r);
                }
                function c(t, e, r, n) {
                    if ('number' == typeof e)
                        throw new TypeError('"value" argument must not be a number');
                    return 'undefined' != typeof ArrayBuffer && e instanceof ArrayBuffer
                        ? (function (t, e, r, n) {
                            if ((e.byteLength, r < 0 || e.byteLength < r))
                                throw new RangeError("'offset' is out of bounds");
                            if (e.byteLength < r + (n || 0))
                                throw new RangeError("'length' is out of bounds");
                            e =
                                void 0 === r && void 0 === n
                                    ? new Uint8Array(e)
                                    : void 0 === n
                                        ? new Uint8Array(e, r)
                                        : new Uint8Array(e, r, n);
                            u.TYPED_ARRAY_SUPPORT
                                ? ((t = e).__proto__ = u.prototype)
                                : (t = h(t, e));
                            return t;
                        })(t, e, r, n)
                        : 'string' == typeof e
                            ? (function (t, e, r) {
                                ('string' == typeof r && '' !== r) || (r = 'utf8');
                                if (!u.isEncoding(r))
                                    throw new TypeError('"encoding" must be a valid string encoding');
                                var n = 0 | l(e, r), o = (t = s(t, n)).write(e, r);
                                o !== n && (t = t.slice(0, o));
                                return t;
                            })(t, e, r)
                            : (function (t, e) {
                                if (u.isBuffer(e)) {
                                    var r = 0 | d(e.length);
                                    return 0 === (t = s(t, r)).length || e.copy(t, 0, 0, r), t;
                                }
                                if (e) {
                                    if (('undefined' != typeof ArrayBuffer &&
                                        e.buffer instanceof ArrayBuffer) ||
                                        'length' in e)
                                        return 'number' != typeof e.length || (n = e.length) != n
                                            ? s(t, 0)
                                            : h(t, e);
                                    if ('Buffer' === e.type && i(e.data))
                                        return h(t, e.data);
                                }
                                var n;
                                throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.');
                            })(t, e);
                }
                function p(t) {
                    if ('number' != typeof t)
                        throw new TypeError('"size" argument must be a number');
                    if (t < 0)
                        throw new RangeError('"size" argument must not be negative');
                }
                function f(t, e) {
                    if ((p(e), (t = s(t, e < 0 ? 0 : 0 | d(e))), !u.TYPED_ARRAY_SUPPORT))
                        for (var r = 0; r < e; ++r)
                            t[r] = 0;
                    return t;
                }
                function h(t, e) {
                    var r = e.length < 0 ? 0 : 0 | d(e.length);
                    t = s(t, r);
                    for (var n = 0; n < r; n += 1)
                        t[n] = 255 & e[n];
                    return t;
                }
                function d(t) {
                    if (t >= a())
                        throw new RangeError('Attempt to allocate Buffer larger than maximum size: 0x' +
                            a().toString(16) +
                            ' bytes');
                    return 0 | t;
                }
                function l(t, e) {
                    if (u.isBuffer(t))
                        return t.length;
                    if ('undefined' != typeof ArrayBuffer &&
                        'function' == typeof ArrayBuffer.isView &&
                        (ArrayBuffer.isView(t) || t instanceof ArrayBuffer))
                        return t.byteLength;
                    'string' != typeof t && (t = '' + t);
                    var r = t.length;
                    if (0 === r)
                        return 0;
                    for (var n = !1;;)
                        switch (e) {
                            case 'ascii':
                            case 'latin1':
                            case 'binary':
                                return r;
                            case 'utf8':
                            case 'utf-8':
                            case void 0:
                                return F(t).length;
                            case 'ucs2':
                            case 'ucs-2':
                            case 'utf16le':
                            case 'utf-16le':
                                return 2 * r;
                            case 'hex':
                                return r >>> 1;
                            case 'base64':
                                return W(t).length;
                            default:
                                if (n)
                                    return F(t).length;
                                (e = ('' + e).toLowerCase()), (n = !0);
                        }
                }
                function y(t, e, r) {
                    var n = !1;
                    if (((void 0 === e || e < 0) && (e = 0), e > this.length))
                        return '';
                    if (((void 0 === r || r > this.length) && (r = this.length), r <= 0))
                        return '';
                    if ((r >>>= 0) <= (e >>>= 0))
                        return '';
                    for (t || (t = 'utf8');;)
                        switch (t) {
                            case 'hex':
                                return C(this, e, r);
                            case 'utf8':
                            case 'utf-8':
                                return S(this, e, r);
                            case 'ascii':
                                return R(this, e, r);
                            case 'latin1':
                            case 'binary':
                                return I(this, e, r);
                            case 'base64':
                                return m(this, e, r);
                            case 'ucs2':
                            case 'ucs-2':
                            case 'utf16le':
                            case 'utf-16le':
                                return w(this, e, r);
                            default:
                                if (n)
                                    throw new TypeError('Unknown encoding: ' + t);
                                (t = (t + '').toLowerCase()), (n = !0);
                        }
                }
                function A(t, e, r) {
                    var n = t[e];
                    (t[e] = t[r]), (t[r] = n);
                }
                function P(t, e, r, n, o) {
                    if (0 === t.length)
                        return -1;
                    if (('string' == typeof r
                        ? ((n = r), (r = 0))
                        : r > 2147483647
                            ? (r = 2147483647)
                            : r < -2147483648 && (r = -2147483648),
                        (r = +r),
                        isNaN(r) && (r = o ? 0 : t.length - 1),
                        r < 0 && (r = t.length + r),
                        r >= t.length)) {
                        if (o)
                            return -1;
                        r = t.length - 1;
                    }
                    else if (r < 0) {
                        if (!o)
                            return -1;
                        r = 0;
                    }
                    if (('string' == typeof e && (e = u.from(e, n)), u.isBuffer(e)))
                        return 0 === e.length ? -1 : E(t, e, r, n, o);
                    if ('number' == typeof e)
                        return ((e &= 255),
                            u.TYPED_ARRAY_SUPPORT &&
                                'function' == typeof Uint8Array.prototype.indexOf
                                ? o
                                    ? Uint8Array.prototype.indexOf.call(t, e, r)
                                    : Uint8Array.prototype.lastIndexOf.call(t, e, r)
                                : E(t, [e], r, n, o));
                    throw new TypeError('val must be string, number or Buffer');
                }
                function E(t, e, r, n, o) {
                    var i, a = 1, s = t.length, u = e.length;
                    if (void 0 !== n &&
                        ('ucs2' === (n = String(n).toLowerCase()) ||
                            'ucs-2' === n ||
                            'utf16le' === n ||
                            'utf-16le' === n)) {
                        if (t.length < 2 || e.length < 2)
                            return -1;
                        (a = 2), (s /= 2), (u /= 2), (r /= 2);
                    }
                    function c(t, e) {
                        return 1 === a ? t[e] : t.readUInt16BE(e * a);
                    }
                    if (o) {
                        var p = -1;
                        for (i = r; i < s; i++)
                            if (c(t, i) === c(e, -1 === p ? 0 : i - p)) {
                                if ((-1 === p && (p = i), i - p + 1 === u))
                                    return p * a;
                            }
                            else
                                -1 !== p && (i -= i - p), (p = -1);
                    }
                    else
                        for (r + u > s && (r = s - u), i = r; i >= 0; i--) {
                            for (var f = !0, h = 0; h < u; h++)
                                if (c(t, i + h) !== c(e, h)) {
                                    f = !1;
                                    break;
                                }
                            if (f)
                                return i;
                        }
                    return -1;
                }
                function v(t, e, r, n) {
                    r = Number(r) || 0;
                    var o = t.length - r;
                    n ? (n = Number(n)) > o && (n = o) : (n = o);
                    var i = e.length;
                    if (i % 2 != 0)
                        throw new TypeError('Invalid hex string');
                    n > i / 2 && (n = i / 2);
                    for (var a = 0; a < n; ++a) {
                        var s = parseInt(e.substr(2 * a, 2), 16);
                        if (isNaN(s))
                            return a;
                        t[r + a] = s;
                    }
                    return a;
                }
                function _(t, e, r, n) {
                    return x(F(e, t.length - r), t, r, n);
                }
                function g(t, e, r, n) {
                    return x((function (t) {
                        for (var e = [], r = 0; r < t.length; ++r)
                            e.push(255 & t.charCodeAt(r));
                        return e;
                    })(e), t, r, n);
                }
                function O(t, e, r, n) {
                    return g(t, e, r, n);
                }
                function b(t, e, r, n) {
                    return x(W(e), t, r, n);
                }
                function T(t, e, r, n) {
                    return x((function (t, e) {
                        for (var r, n, o, i = [], a = 0; a < t.length && !((e -= 2) < 0); ++a)
                            (r = t.charCodeAt(a)),
                                (n = r >> 8),
                                (o = r % 256),
                                i.push(o),
                                i.push(n);
                        return i;
                    })(e, t.length - r), t, r, n);
                }
                function m(t, e, r) {
                    return 0 === e && r === t.length
                        ? n.fromByteArray(t)
                        : n.fromByteArray(t.slice(e, r));
                }
                function S(t, e, r) {
                    r = Math.min(t.length, r);
                    for (var n = [], o = e; o < r;) {
                        var i, a, s, u, c = t[o], p = null, f = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
                        if (o + f <= r)
                            switch (f) {
                                case 1:
                                    c < 128 && (p = c);
                                    break;
                                case 2:
                                    128 == (192 & (i = t[o + 1])) &&
                                        (u = ((31 & c) << 6) | (63 & i)) > 127 &&
                                        (p = u);
                                    break;
                                case 3:
                                    (i = t[o + 1]),
                                        (a = t[o + 2]),
                                        128 == (192 & i) &&
                                            128 == (192 & a) &&
                                            (u = ((15 & c) << 12) | ((63 & i) << 6) | (63 & a)) >
                                                2047 &&
                                            (u < 55296 || u > 57343) &&
                                            (p = u);
                                    break;
                                case 4:
                                    (i = t[o + 1]),
                                        (a = t[o + 2]),
                                        (s = t[o + 3]),
                                        128 == (192 & i) &&
                                            128 == (192 & a) &&
                                            128 == (192 & s) &&
                                            (u =
                                                ((15 & c) << 18) |
                                                    ((63 & i) << 12) |
                                                    ((63 & a) << 6) |
                                                    (63 & s)) > 65535 &&
                                            u < 1114112 &&
                                            (p = u);
                            }
                        null === p
                            ? ((p = 65533), (f = 1))
                            : p > 65535 &&
                                ((p -= 65536),
                                    n.push(((p >>> 10) & 1023) | 55296),
                                    (p = 56320 | (1023 & p))),
                            n.push(p),
                            (o += f);
                    }
                    return (function (t) {
                        var e = t.length;
                        if (e <= 4096)
                            return String.fromCharCode.apply(String, t);
                        var r = '', n = 0;
                        for (; n < e;)
                            r += String.fromCharCode.apply(String, t.slice(n, (n += 4096)));
                        return r;
                    })(n);
                }
                (e.Buffer = u),
                    (e.SlowBuffer = function (t) {
                        +t != t && (t = 0);
                        return u.alloc(+t);
                    }),
                    (e.INSPECT_MAX_BYTES = 50),
                    (u.TYPED_ARRAY_SUPPORT =
                        void 0 !== t.TYPED_ARRAY_SUPPORT
                            ? t.TYPED_ARRAY_SUPPORT
                            : (function () {
                                try {
                                    var t = new Uint8Array(1);
                                    return ((t.__proto__ = {
                                        __proto__: Uint8Array.prototype,
                                        foo: function () {
                                            return 42;
                                        },
                                    }),
                                        42 === t.foo() &&
                                            'function' == typeof t.subarray &&
                                            0 === t.subarray(1, 1).byteLength);
                                }
                                catch (t) {
                                    return !1;
                                }
                            })()),
                    (e.kMaxLength = a()),
                    (u.poolSize = 8192),
                    (u._augment = function (t) {
                        return (t.__proto__ = u.prototype), t;
                    }),
                    (u.from = function (t, e, r) {
                        return c(null, t, e, r);
                    }),
                    u.TYPED_ARRAY_SUPPORT &&
                        ((u.prototype.__proto__ = Uint8Array.prototype),
                            (u.__proto__ = Uint8Array),
                            'undefined' != typeof Symbol &&
                                Symbol.species &&
                                u[Symbol.species] === u &&
                                Object.defineProperty(u, Symbol.species, {
                                    value: null,
                                    configurable: !0,
                                })),
                    (u.alloc = function (t, e, r) {
                        return (function (t, e, r, n) {
                            return (p(e),
                                e <= 0
                                    ? s(t, e)
                                    : void 0 !== r
                                        ? 'string' == typeof n
                                            ? s(t, e).fill(r, n)
                                            : s(t, e).fill(r)
                                        : s(t, e));
                        })(null, t, e, r);
                    }),
                    (u.allocUnsafe = function (t) {
                        return f(null, t);
                    }),
                    (u.allocUnsafeSlow = function (t) {
                        return f(null, t);
                    }),
                    (u.isBuffer = function (t) {
                        return !(null == t || !t._isBuffer);
                    }),
                    (u.compare = function (t, e) {
                        if (!u.isBuffer(t) || !u.isBuffer(e))
                            throw new TypeError('Arguments must be Buffers');
                        if (t === e)
                            return 0;
                        for (var r = t.length, n = e.length, o = 0, i = Math.min(r, n); o < i; ++o)
                            if (t[o] !== e[o]) {
                                (r = t[o]), (n = e[o]);
                                break;
                            }
                        return r < n ? -1 : n < r ? 1 : 0;
                    }),
                    (u.isEncoding = function (t) {
                        switch (String(t).toLowerCase()) {
                            case 'hex':
                            case 'utf8':
                            case 'utf-8':
                            case 'ascii':
                            case 'latin1':
                            case 'binary':
                            case 'base64':
                            case 'ucs2':
                            case 'ucs-2':
                            case 'utf16le':
                            case 'utf-16le':
                                return !0;
                            default:
                                return !1;
                        }
                    }),
                    (u.concat = function (t, e) {
                        if (!i(t))
                            throw new TypeError('"list" argument must be an Array of Buffers');
                        if (0 === t.length)
                            return u.alloc(0);
                        var r;
                        if (void 0 === e)
                            for (e = 0, r = 0; r < t.length; ++r)
                                e += t[r].length;
                        var n = u.allocUnsafe(e), o = 0;
                        for (r = 0; r < t.length; ++r) {
                            var a = t[r];
                            if (!u.isBuffer(a))
                                throw new TypeError('"list" argument must be an Array of Buffers');
                            a.copy(n, o), (o += a.length);
                        }
                        return n;
                    }),
                    (u.byteLength = l),
                    (u.prototype._isBuffer = !0),
                    (u.prototype.swap16 = function () {
                        var t = this.length;
                        if (t % 2 != 0)
                            throw new RangeError('Buffer size must be a multiple of 16-bits');
                        for (var e = 0; e < t; e += 2)
                            A(this, e, e + 1);
                        return this;
                    }),
                    (u.prototype.swap32 = function () {
                        var t = this.length;
                        if (t % 4 != 0)
                            throw new RangeError('Buffer size must be a multiple of 32-bits');
                        for (var e = 0; e < t; e += 4)
                            A(this, e, e + 3), A(this, e + 1, e + 2);
                        return this;
                    }),
                    (u.prototype.swap64 = function () {
                        var t = this.length;
                        if (t % 8 != 0)
                            throw new RangeError('Buffer size must be a multiple of 64-bits');
                        for (var e = 0; e < t; e += 8)
                            A(this, e, e + 7),
                                A(this, e + 1, e + 6),
                                A(this, e + 2, e + 5),
                                A(this, e + 3, e + 4);
                        return this;
                    }),
                    (u.prototype.toString = function () {
                        var t = 0 | this.length;
                        return 0 === t
                            ? ''
                            : 0 === arguments.length
                                ? S(this, 0, t)
                                : y.apply(this, arguments);
                    }),
                    (u.prototype.equals = function (t) {
                        if (!u.isBuffer(t))
                            throw new TypeError('Argument must be a Buffer');
                        return this === t || 0 === u.compare(this, t);
                    }),
                    (u.prototype.inspect = function () {
                        var t = '', r = e.INSPECT_MAX_BYTES;
                        return (this.length > 0 &&
                            ((t = this.toString('hex', 0, r).match(/.{2}/g).join(' ')),
                                this.length > r && (t += ' ... ')),
                            '<Buffer ' + t + '>');
                    }),
                    (u.prototype.compare = function (t, e, r, n, o) {
                        if (!u.isBuffer(t))
                            throw new TypeError('Argument must be a Buffer');
                        if ((void 0 === e && (e = 0),
                            void 0 === r && (r = t ? t.length : 0),
                            void 0 === n && (n = 0),
                            void 0 === o && (o = this.length),
                            e < 0 || r > t.length || n < 0 || o > this.length))
                            throw new RangeError('out of range index');
                        if (n >= o && e >= r)
                            return 0;
                        if (n >= o)
                            return -1;
                        if (e >= r)
                            return 1;
                        if (this === t)
                            return 0;
                        for (var i = (o >>>= 0) - (n >>>= 0), a = (r >>>= 0) - (e >>>= 0), s = Math.min(i, a), c = this.slice(n, o), p = t.slice(e, r), f = 0; f < s; ++f)
                            if (c[f] !== p[f]) {
                                (i = c[f]), (a = p[f]);
                                break;
                            }
                        return i < a ? -1 : a < i ? 1 : 0;
                    }),
                    (u.prototype.includes = function (t, e, r) {
                        return -1 !== this.indexOf(t, e, r);
                    }),
                    (u.prototype.indexOf = function (t, e, r) {
                        return P(this, t, e, r, !0);
                    }),
                    (u.prototype.lastIndexOf = function (t, e, r) {
                        return P(this, t, e, r, !1);
                    }),
                    (u.prototype.write = function (t, e, r, n) {
                        if (void 0 === e)
                            (n = 'utf8'), (r = this.length), (e = 0);
                        else if (void 0 === r && 'string' == typeof e)
                            (n = e), (r = this.length), (e = 0);
                        else {
                            if (!isFinite(e))
                                throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
                            (e |= 0),
                                isFinite(r)
                                    ? ((r |= 0), void 0 === n && (n = 'utf8'))
                                    : ((n = r), (r = void 0));
                        }
                        var o = this.length - e;
                        if (((void 0 === r || r > o) && (r = o),
                            (t.length > 0 && (r < 0 || e < 0)) || e > this.length))
                            throw new RangeError('Attempt to write outside buffer bounds');
                        n || (n = 'utf8');
                        for (var i = !1;;)
                            switch (n) {
                                case 'hex':
                                    return v(this, t, e, r);
                                case 'utf8':
                                case 'utf-8':
                                    return _(this, t, e, r);
                                case 'ascii':
                                    return g(this, t, e, r);
                                case 'latin1':
                                case 'binary':
                                    return O(this, t, e, r);
                                case 'base64':
                                    return b(this, t, e, r);
                                case 'ucs2':
                                case 'ucs-2':
                                case 'utf16le':
                                case 'utf-16le':
                                    return T(this, t, e, r);
                                default:
                                    if (i)
                                        throw new TypeError('Unknown encoding: ' + n);
                                    (n = ('' + n).toLowerCase()), (i = !0);
                            }
                    }),
                    (u.prototype.toJSON = function () {
                        return {
                            type: 'Buffer',
                            data: Array.prototype.slice.call(this._arr || this, 0),
                        };
                    });
                function R(t, e, r) {
                    var n = '';
                    r = Math.min(t.length, r);
                    for (var o = e; o < r; ++o)
                        n += String.fromCharCode(127 & t[o]);
                    return n;
                }
                function I(t, e, r) {
                    var n = '';
                    r = Math.min(t.length, r);
                    for (var o = e; o < r; ++o)
                        n += String.fromCharCode(t[o]);
                    return n;
                }
                function C(t, e, r) {
                    var n = t.length;
                    (!e || e < 0) && (e = 0), (!r || r < 0 || r > n) && (r = n);
                    for (var o = '', i = e; i < r; ++i)
                        o += k(t[i]);
                    return o;
                }
                function w(t, e, r) {
                    for (var n = t.slice(e, r), o = '', i = 0; i < n.length; i += 2)
                        o += String.fromCharCode(n[i] + 256 * n[i + 1]);
                    return o;
                }
                function D(t, e, r) {
                    if (t % 1 != 0 || t < 0)
                        throw new RangeError('offset is not uint');
                    if (t + e > r)
                        throw new RangeError('Trying to access beyond buffer length');
                }
                function M(t, e, r, n, o, i) {
                    if (!u.isBuffer(t))
                        throw new TypeError('"buffer" argument must be a Buffer instance');
                    if (e > o || e < i)
                        throw new RangeError('"value" argument is out of bounds');
                    if (r + n > t.length)
                        throw new RangeError('Index out of range');
                }
                function N(t, e, r, n) {
                    e < 0 && (e = 65535 + e + 1);
                    for (var o = 0, i = Math.min(t.length - r, 2); o < i; ++o)
                        t[r + o] =
                            (e & (255 << (8 * (n ? o : 1 - o)))) >>> (8 * (n ? o : 1 - o));
                }
                function U(t, e, r, n) {
                    e < 0 && (e = 4294967295 + e + 1);
                    for (var o = 0, i = Math.min(t.length - r, 4); o < i; ++o)
                        t[r + o] = (e >>> (8 * (n ? o : 3 - o))) & 255;
                }
                function L(t, e, r, n, o, i) {
                    if (r + n > t.length)
                        throw new RangeError('Index out of range');
                    if (r < 0)
                        throw new RangeError('Index out of range');
                }
                function B(t, e, r, n, i) {
                    return i || L(t, 0, r, 4), o.write(t, e, r, n, 23, 4), r + 4;
                }
                function j(t, e, r, n, i) {
                    return i || L(t, 0, r, 8), o.write(t, e, r, n, 52, 8), r + 8;
                }
                (u.prototype.slice = function (t, e) {
                    var r, n = this.length;
                    if (((t = ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n),
                        (e = void 0 === e ? n : ~~e) < 0
                            ? (e += n) < 0 && (e = 0)
                            : e > n && (e = n),
                        e < t && (e = t),
                        u.TYPED_ARRAY_SUPPORT))
                        (r = this.subarray(t, e)).__proto__ = u.prototype;
                    else {
                        var o = e - t;
                        r = new u(o, void 0);
                        for (var i = 0; i < o; ++i)
                            r[i] = this[i + t];
                    }
                    return r;
                }),
                    (u.prototype.readUIntLE = function (t, e, r) {
                        (t |= 0), (e |= 0), r || D(t, e, this.length);
                        for (var n = this[t], o = 1, i = 0; ++i < e && (o *= 256);)
                            n += this[t + i] * o;
                        return n;
                    }),
                    (u.prototype.readUIntBE = function (t, e, r) {
                        (t |= 0), (e |= 0), r || D(t, e, this.length);
                        for (var n = this[t + --e], o = 1; e > 0 && (o *= 256);)
                            n += this[t + --e] * o;
                        return n;
                    }),
                    (u.prototype.readUInt8 = function (t, e) {
                        return e || D(t, 1, this.length), this[t];
                    }),
                    (u.prototype.readUInt16LE = function (t, e) {
                        return e || D(t, 2, this.length), this[t] | (this[t + 1] << 8);
                    }),
                    (u.prototype.readUInt16BE = function (t, e) {
                        return e || D(t, 2, this.length), (this[t] << 8) | this[t + 1];
                    }),
                    (u.prototype.readUInt32LE = function (t, e) {
                        return (e || D(t, 4, this.length),
                            (this[t] | (this[t + 1] << 8) | (this[t + 2] << 16)) +
                                16777216 * this[t + 3]);
                    }),
                    (u.prototype.readUInt32BE = function (t, e) {
                        return (e || D(t, 4, this.length),
                            16777216 * this[t] +
                                ((this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3]));
                    }),
                    (u.prototype.readIntLE = function (t, e, r) {
                        (t |= 0), (e |= 0), r || D(t, e, this.length);
                        for (var n = this[t], o = 1, i = 0; ++i < e && (o *= 256);)
                            n += this[t + i] * o;
                        return n >= (o *= 128) && (n -= Math.pow(2, 8 * e)), n;
                    }),
                    (u.prototype.readIntBE = function (t, e, r) {
                        (t |= 0), (e |= 0), r || D(t, e, this.length);
                        for (var n = e, o = 1, i = this[t + --n]; n > 0 && (o *= 256);)
                            i += this[t + --n] * o;
                        return i >= (o *= 128) && (i -= Math.pow(2, 8 * e)), i;
                    }),
                    (u.prototype.readInt8 = function (t, e) {
                        return (e || D(t, 1, this.length),
                            128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]);
                    }),
                    (u.prototype.readInt16LE = function (t, e) {
                        e || D(t, 2, this.length);
                        var r = this[t] | (this[t + 1] << 8);
                        return 32768 & r ? 4294901760 | r : r;
                    }),
                    (u.prototype.readInt16BE = function (t, e) {
                        e || D(t, 2, this.length);
                        var r = this[t + 1] | (this[t] << 8);
                        return 32768 & r ? 4294901760 | r : r;
                    }),
                    (u.prototype.readInt32LE = function (t, e) {
                        return (e || D(t, 4, this.length),
                            this[t] |
                                (this[t + 1] << 8) |
                                (this[t + 2] << 16) |
                                (this[t + 3] << 24));
                    }),
                    (u.prototype.readInt32BE = function (t, e) {
                        return (e || D(t, 4, this.length),
                            (this[t] << 24) |
                                (this[t + 1] << 16) |
                                (this[t + 2] << 8) |
                                this[t + 3]);
                    }),
                    (u.prototype.readFloatLE = function (t, e) {
                        return e || D(t, 4, this.length), o.read(this, t, !0, 23, 4);
                    }),
                    (u.prototype.readFloatBE = function (t, e) {
                        return e || D(t, 4, this.length), o.read(this, t, !1, 23, 4);
                    }),
                    (u.prototype.readDoubleLE = function (t, e) {
                        return e || D(t, 8, this.length), o.read(this, t, !0, 52, 8);
                    }),
                    (u.prototype.readDoubleBE = function (t, e) {
                        return e || D(t, 8, this.length), o.read(this, t, !1, 52, 8);
                    }),
                    (u.prototype.writeUIntLE = function (t, e, r, n) {
                        ((t = +t), (e |= 0), (r |= 0), n) ||
                            M(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
                        var o = 1, i = 0;
                        for (this[e] = 255 & t; ++i < r && (o *= 256);)
                            this[e + i] = (t / o) & 255;
                        return e + r;
                    }),
                    (u.prototype.writeUIntBE = function (t, e, r, n) {
                        ((t = +t), (e |= 0), (r |= 0), n) ||
                            M(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
                        var o = r - 1, i = 1;
                        for (this[e + o] = 255 & t; --o >= 0 && (i *= 256);)
                            this[e + o] = (t / i) & 255;
                        return e + r;
                    }),
                    (u.prototype.writeUInt8 = function (t, e, r) {
                        return ((t = +t),
                            (e |= 0),
                            r || M(this, t, e, 1, 255, 0),
                            u.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)),
                            (this[e] = 255 & t),
                            e + 1);
                    }),
                    (u.prototype.writeUInt16LE = function (t, e, r) {
                        return ((t = +t),
                            (e |= 0),
                            r || M(this, t, e, 2, 65535, 0),
                            u.TYPED_ARRAY_SUPPORT
                                ? ((this[e] = 255 & t), (this[e + 1] = t >>> 8))
                                : N(this, t, e, !0),
                            e + 2);
                    }),
                    (u.prototype.writeUInt16BE = function (t, e, r) {
                        return ((t = +t),
                            (e |= 0),
                            r || M(this, t, e, 2, 65535, 0),
                            u.TYPED_ARRAY_SUPPORT
                                ? ((this[e] = t >>> 8), (this[e + 1] = 255 & t))
                                : N(this, t, e, !1),
                            e + 2);
                    }),
                    (u.prototype.writeUInt32LE = function (t, e, r) {
                        return ((t = +t),
                            (e |= 0),
                            r || M(this, t, e, 4, 4294967295, 0),
                            u.TYPED_ARRAY_SUPPORT
                                ? ((this[e + 3] = t >>> 24),
                                    (this[e + 2] = t >>> 16),
                                    (this[e + 1] = t >>> 8),
                                    (this[e] = 255 & t))
                                : U(this, t, e, !0),
                            e + 4);
                    }),
                    (u.prototype.writeUInt32BE = function (t, e, r) {
                        return ((t = +t),
                            (e |= 0),
                            r || M(this, t, e, 4, 4294967295, 0),
                            u.TYPED_ARRAY_SUPPORT
                                ? ((this[e] = t >>> 24),
                                    (this[e + 1] = t >>> 16),
                                    (this[e + 2] = t >>> 8),
                                    (this[e + 3] = 255 & t))
                                : U(this, t, e, !1),
                            e + 4);
                    }),
                    (u.prototype.writeIntLE = function (t, e, r, n) {
                        if (((t = +t), (e |= 0), !n)) {
                            var o = Math.pow(2, 8 * r - 1);
                            M(this, t, e, r, o - 1, -o);
                        }
                        var i = 0, a = 1, s = 0;
                        for (this[e] = 255 & t; ++i < r && (a *= 256);)
                            t < 0 && 0 === s && 0 !== this[e + i - 1] && (s = 1),
                                (this[e + i] = (((t / a) >> 0) - s) & 255);
                        return e + r;
                    }),
                    (u.prototype.writeIntBE = function (t, e, r, n) {
                        if (((t = +t), (e |= 0), !n)) {
                            var o = Math.pow(2, 8 * r - 1);
                            M(this, t, e, r, o - 1, -o);
                        }
                        var i = r - 1, a = 1, s = 0;
                        for (this[e + i] = 255 & t; --i >= 0 && (a *= 256);)
                            t < 0 && 0 === s && 0 !== this[e + i + 1] && (s = 1),
                                (this[e + i] = (((t / a) >> 0) - s) & 255);
                        return e + r;
                    }),
                    (u.prototype.writeInt8 = function (t, e, r) {
                        return ((t = +t),
                            (e |= 0),
                            r || M(this, t, e, 1, 127, -128),
                            u.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)),
                            t < 0 && (t = 255 + t + 1),
                            (this[e] = 255 & t),
                            e + 1);
                    }),
                    (u.prototype.writeInt16LE = function (t, e, r) {
                        return ((t = +t),
                            (e |= 0),
                            r || M(this, t, e, 2, 32767, -32768),
                            u.TYPED_ARRAY_SUPPORT
                                ? ((this[e] = 255 & t), (this[e + 1] = t >>> 8))
                                : N(this, t, e, !0),
                            e + 2);
                    }),
                    (u.prototype.writeInt16BE = function (t, e, r) {
                        return ((t = +t),
                            (e |= 0),
                            r || M(this, t, e, 2, 32767, -32768),
                            u.TYPED_ARRAY_SUPPORT
                                ? ((this[e] = t >>> 8), (this[e + 1] = 255 & t))
                                : N(this, t, e, !1),
                            e + 2);
                    }),
                    (u.prototype.writeInt32LE = function (t, e, r) {
                        return ((t = +t),
                            (e |= 0),
                            r || M(this, t, e, 4, 2147483647, -2147483648),
                            u.TYPED_ARRAY_SUPPORT
                                ? ((this[e] = 255 & t),
                                    (this[e + 1] = t >>> 8),
                                    (this[e + 2] = t >>> 16),
                                    (this[e + 3] = t >>> 24))
                                : U(this, t, e, !0),
                            e + 4);
                    }),
                    (u.prototype.writeInt32BE = function (t, e, r) {
                        return ((t = +t),
                            (e |= 0),
                            r || M(this, t, e, 4, 2147483647, -2147483648),
                            t < 0 && (t = 4294967295 + t + 1),
                            u.TYPED_ARRAY_SUPPORT
                                ? ((this[e] = t >>> 24),
                                    (this[e + 1] = t >>> 16),
                                    (this[e + 2] = t >>> 8),
                                    (this[e + 3] = 255 & t))
                                : U(this, t, e, !1),
                            e + 4);
                    }),
                    (u.prototype.writeFloatLE = function (t, e, r) {
                        return B(this, t, e, !0, r);
                    }),
                    (u.prototype.writeFloatBE = function (t, e, r) {
                        return B(this, t, e, !1, r);
                    }),
                    (u.prototype.writeDoubleLE = function (t, e, r) {
                        return j(this, t, e, !0, r);
                    }),
                    (u.prototype.writeDoubleBE = function (t, e, r) {
                        return j(this, t, e, !1, r);
                    }),
                    (u.prototype.copy = function (t, e, r, n) {
                        if ((r || (r = 0),
                            n || 0 === n || (n = this.length),
                            e >= t.length && (e = t.length),
                            e || (e = 0),
                            n > 0 && n < r && (n = r),
                            n === r))
                            return 0;
                        if (0 === t.length || 0 === this.length)
                            return 0;
                        if (e < 0)
                            throw new RangeError('targetStart out of bounds');
                        if (r < 0 || r >= this.length)
                            throw new RangeError('sourceStart out of bounds');
                        if (n < 0)
                            throw new RangeError('sourceEnd out of bounds');
                        n > this.length && (n = this.length),
                            t.length - e < n - r && (n = t.length - e + r);
                        var o, i = n - r;
                        if (this === t && r < e && e < n)
                            for (o = i - 1; o >= 0; --o)
                                t[o + e] = this[o + r];
                        else if (i < 1e3 || !u.TYPED_ARRAY_SUPPORT)
                            for (o = 0; o < i; ++o)
                                t[o + e] = this[o + r];
                        else
                            Uint8Array.prototype.set.call(t, this.subarray(r, r + i), e);
                        return i;
                    }),
                    (u.prototype.fill = function (t, e, r, n) {
                        if ('string' == typeof t) {
                            if (('string' == typeof e
                                ? ((n = e), (e = 0), (r = this.length))
                                : 'string' == typeof r && ((n = r), (r = this.length)),
                                1 === t.length)) {
                                var o = t.charCodeAt(0);
                                o < 256 && (t = o);
                            }
                            if (void 0 !== n && 'string' != typeof n)
                                throw new TypeError('encoding must be a string');
                            if ('string' == typeof n && !u.isEncoding(n))
                                throw new TypeError('Unknown encoding: ' + n);
                        }
                        else
                            'number' == typeof t && (t &= 255);
                        if (e < 0 || this.length < e || this.length < r)
                            throw new RangeError('Out of range index');
                        if (r <= e)
                            return this;
                        var i;
                        if (((e >>>= 0),
                            (r = void 0 === r ? this.length : r >>> 0),
                            t || (t = 0),
                            'number' == typeof t))
                            for (i = e; i < r; ++i)
                                this[i] = t;
                        else {
                            var a = u.isBuffer(t) ? t : F(new u(t, n).toString()), s = a.length;
                            for (i = 0; i < r - e; ++i)
                                this[i + e] = a[i % s];
                        }
                        return this;
                    });
                var G = /[^+\/0-9A-Za-z-_]/g;
                function k(t) {
                    return t < 16 ? '0' + t.toString(16) : t.toString(16);
                }
                function F(t, e) {
                    var r;
                    e = e || 1 / 0;
                    for (var n = t.length, o = null, i = [], a = 0; a < n; ++a) {
                        if ((r = t.charCodeAt(a)) > 55295 && r < 57344) {
                            if (!o) {
                                if (r > 56319) {
                                    (e -= 3) > -1 && i.push(239, 191, 189);
                                    continue;
                                }
                                if (a + 1 === n) {
                                    (e -= 3) > -1 && i.push(239, 191, 189);
                                    continue;
                                }
                                o = r;
                                continue;
                            }
                            if (r < 56320) {
                                (e -= 3) > -1 && i.push(239, 191, 189), (o = r);
                                continue;
                            }
                            r = 65536 + (((o - 55296) << 10) | (r - 56320));
                        }
                        else
                            o && (e -= 3) > -1 && i.push(239, 191, 189);
                        if (((o = null), r < 128)) {
                            if ((e -= 1) < 0)
                                break;
                            i.push(r);
                        }
                        else if (r < 2048) {
                            if ((e -= 2) < 0)
                                break;
                            i.push((r >> 6) | 192, (63 & r) | 128);
                        }
                        else if (r < 65536) {
                            if ((e -= 3) < 0)
                                break;
                            i.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (63 & r) | 128);
                        }
                        else {
                            if (!(r < 1114112))
                                throw new Error('Invalid code point');
                            if ((e -= 4) < 0)
                                break;
                            i.push((r >> 18) | 240, ((r >> 12) & 63) | 128, ((r >> 6) & 63) | 128, (63 & r) | 128);
                        }
                    }
                    return i;
                }
                function W(t) {
                    return n.toByteArray((function (t) {
                        if ((t = (function (t) {
                            return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, '');
                        })(t).replace(G, '')).length < 2)
                            return '';
                        for (; t.length % 4 != 0;)
                            t += '=';
                        return t;
                    })(t));
                }
                function x(t, e, r, n) {
                    for (var o = 0; o < n && !(o + r >= e.length || o >= t.length); ++o)
                        e[o + r] = t[o];
                    return o;
                }
            }.call(this, r(61)));
        },
        function (t, e, r) {
            'use strict';
            var n = (this && this.__createBinding) ||
                (Object.create
                    ? function (t, e, r, n) {
                        void 0 === n && (n = r),
                            Object.defineProperty(t, n, {
                                enumerable: !0,
                                get: function () {
                                    return e[r];
                                },
                            });
                    }
                    : function (t, e, r, n) {
                        void 0 === n && (n = r), (t[n] = e[r]);
                    }), o = (this && this.__exportStar) ||
                function (t, e) {
                    for (var r in t)
                        'default' === r || e.hasOwnProperty(r) || n(e, t, r);
                };
            Object.defineProperty(e, '__esModule', { value: !0 }),
                (e.createApp = e.default = e.actions = void 0);
            var i = r(5), a = r(32);
            Object.defineProperty(e, 'actions', {
                enumerable: !0,
                get: function () {
                    return a.compatibilityActions;
                },
            });
            var s = r(58);
            function u(t) {
                return s.compatibilityCreateApp(t, i.createApp);
            }
            o(r(66), e), (e.default = u), (e.createApp = u);
        },
        function (t, e, r) {
            'use strict';
            function n(t) {
                return Array.from(t)
                    .map(function (t) {
                    return ('00' + t.toString(16)).slice(-2);
                })
                    .join('');
            }
            function o(t) {
                if ('function' == typeof Uint8Array &&
                    'object' == typeof window &&
                    window.crypto) {
                    var e = new Uint8Array(t), r = window.crypto.getRandomValues(e);
                    if (r)
                        return r;
                }
                return Array.from(new Array(t), function () {
                    return (255 * Math.random()) | 0;
                });
            }
            function i() {
                var t = o(1), e = o(2);
                return ((t[0] &= 191),
                    (e[0] &= 79),
                    [
                        n(o(4)),
                        '-',
                        n(o(2)),
                        '-',
                        n(e),
                        '-',
                        n(t),
                        n(o(1)),
                        '-',
                        n(o(6)),
                    ].join(''));
            }
            Object.defineProperty(e, '__esModule', { value: !0 }),
                (e.generateUuid = void 0),
                (e.generateUuid = i),
                (e.default = i);
        },
        function (t) {
            t.exports = JSON.parse('{"name":"@shopify/app-bridge","version":"2.0.12","types":"index.d.ts","main":"index.js","unpkg":"umd/index.js","jsdelivr":"umd/index.js","files":["/actions/","/client/","/umd/","/util/","/validate/","/development.d.ts","/development.js","/index.d.ts","/index.js","/MessageTransport.d.ts","/MessageTransport.js","/production.d.ts","/production.js"],"private":false,"publishConfig":{"access":"public","@shopify:registry":"https://registry.npmjs.org"},"repository":"git@github.com:Shopify/app-bridge.git","homepage":"https://shopify.dev/tools/app-bridge","author":"Shopify Inc.","license":"MIT","scripts":{"build":"yarn build:tsc && yarn build:npm && yarn build:umd","build:tsc":"NODE_ENV=production tsc","build:umd":"NODE_ENV=production webpack -p","build:npm":"shx cp -r ./npm/index.js ./index.js","check":"tsc","clean":"cat package.json | node -pe \\"JSON.parse(require(\'fs\').readFileSync(\'/dev/stdin\').toString()).files.map(f => \'./\'+f).join(\' \')\\" | xargs rm -rf","pack":"yarn pack","size":"size-limit"},"sideEffects":false,"size-limit":[{"limit":"17 KB","path":"production.js"}],"dependencies":{"base64url":"^3.0.1"},"devDependencies":{"@types/node":"^10.12.5","shx":"^0.3.3"}}');
        },
        function (t, e) {
            var r, n, o = (t.exports = {});
            function i() {
                throw new Error('setTimeout has not been defined');
            }
            function a() {
                throw new Error('clearTimeout has not been defined');
            }
            function s(t) {
                if (r === setTimeout)
                    return setTimeout(t, 0);
                if ((r === i || !r) && setTimeout)
                    return (r = setTimeout), setTimeout(t, 0);
                try {
                    return r(t, 0);
                }
                catch (e) {
                    try {
                        return r.call(null, t, 0);
                    }
                    catch (e) {
                        return r.call(this, t, 0);
                    }
                }
            }
            !(function () {
                try {
                    r = 'function' == typeof setTimeout ? setTimeout : i;
                }
                catch (t) {
                    r = i;
                }
                try {
                    n = 'function' == typeof clearTimeout ? clearTimeout : a;
                }
                catch (t) {
                    n = a;
                }
            })();
            var u, c = [], p = !1, f = -1;
            function h() {
                p &&
                    u &&
                    ((p = !1), u.length ? (c = u.concat(c)) : (f = -1), c.length && d());
            }
            function d() {
                if (!p) {
                    var t = s(h);
                    p = !0;
                    for (var e = c.length; e;) {
                        for (u = c, c = []; ++f < e;)
                            u && u[f].run();
                        (f = -1), (e = c.length);
                    }
                    (u = null),
                        (p = !1),
                        (function (t) {
                            if (n === clearTimeout)
                                return clearTimeout(t);
                            if ((n === a || !n) && clearTimeout)
                                return (n = clearTimeout), clearTimeout(t);
                            try {
                                n(t);
                            }
                            catch (e) {
                                try {
                                    return n.call(null, t);
                                }
                                catch (e) {
                                    return n.call(this, t);
                                }
                            }
                        })(t);
                }
            }
            function l(t, e) {
                (this.fun = t), (this.array = e);
            }
            function y() { }
            (o.nextTick = function (t) {
                var e = new Array(arguments.length - 1);
                if (arguments.length > 1)
                    for (var r = 1; r < arguments.length; r++)
                        e[r - 1] = arguments[r];
                c.push(new l(t, e)), 1 !== c.length || p || s(d);
            }),
                (l.prototype.run = function () {
                    this.fun.apply(null, this.array);
                }),
                (o.title = 'browser'),
                (o.browser = !0),
                (o.env = {}),
                (o.argv = []),
                (o.version = ''),
                (o.versions = {}),
                (o.on = y),
                (o.addListener = y),
                (o.once = y),
                (o.off = y),
                (o.removeListener = y),
                (o.removeAllListeners = y),
                (o.emit = y),
                (o.prependListener = y),
                (o.prependOnceListener = y),
                (o.listeners = function (t) {
                    return [];
                }),
                (o.binding = function (t) {
                    throw new Error('process.binding is not supported');
                }),
                (o.cwd = function () {
                    return '/';
                }),
                (o.chdir = function (t) {
                    throw new Error('process.chdir is not supported');
                }),
                (o.umask = function () {
                    return 0;
                });
        },
        function (t, e, r) {
            'use strict';
            var n = (this && this.__importDefault) ||
                function (t) {
                    return t && t.__esModule ? t : { default: t };
                };
            Object.defineProperty(e, '__esModule', { value: !0 }),
                (e.parsePayloadWithContext = void 0);
            var o = n(r(13));
            e.parsePayloadWithContext = function (t) {
                var e = 'function' == typeof window.MobileWebView.context
                    ? window.MobileWebView.context()
                    : window.__context__;
                if (!e)
                    return JSON.stringify(t);
                var r = o.default(t, {
                    id: t.id,
                    context: e,
                    data: { payload: { context: e }, context: e },
                });
                return JSON.stringify(r);
            };
        },
        function (t, e, r) {
            'use strict';
            Object.defineProperty(e, '__esModule', { value: !0 }),
                (e.serverAppBridge = void 0);
            var n = r(3), o = function () { };
            e.serverAppBridge = {
                dispatch: function () {
                    return {};
                },
                error: function () {
                    return o;
                },
                featuresAvailable: function () {
                    return Promise.reject(n.fromAction('Feature detection is only available on the client side.', n.AppActionType.WINDOW_UNDEFINED));
                },
                getState: function () {
                    return Promise.reject(n.fromAction('State is only available on the client side.', n.AppActionType.WINDOW_UNDEFINED));
                },
                localOrigin: '',
                subscribe: function () {
                    return o;
                },
            };
        },
        function (t, e, r) {
            'use strict';
            Object.defineProperty(e, '__esModule', { value: !0 }),
                (e.handleAppPrint = void 0);
            var n = r(19);
            function o() {
                n.getWindow() && window.print();
            }
            function i() {
                var t = (function () {
                    var t = n.getWindow();
                    if (t && t.document && t.document.body) {
                        var e = window.document.createElement('input');
                        return ((e.style.display = 'none'), window.document.body.appendChild(e), e);
                    }
                })();
                t && (t.select(), o(), t.remove());
            }
            e.handleAppPrint = function () {
                navigator.userAgent.indexOf('iOS') >= 0 ? i() : o();
            };
        },
        function (t, e, r) {
            'use strict';
            Object.defineProperty(e, '__esModule', { value: !0 });
            var n = r(7), o = (function () {
                function t() {
                    this.map = {};
                }
                return ((t.prototype.set = function (t, e) {
                    Object.prototype.hasOwnProperty.call(this.map, t) ||
                        (this.map[t] = []);
                    var r = { handler: e, remove: function () { } }, o = n.addAndRemoveFromCollection(this.map[t], r);
                    return (r = { handler: e, remove: o }), o;
                }),
                    (t.prototype.get = function (t) {
                        var e = this.map[t];
                        return e
                            ? e.map(function (t) {
                                return t.handler;
                            })
                            : void 0;
                    }),
                    (t.prototype.run = function (t, e, r) {
                        for (var n = [], o = 3; o < arguments.length; o++)
                            n[o - 3] = arguments[o];
                        var i = 0, a = this.get(t) || [];
                        function s() {
                            for (var t = [], n = 0; n < arguments.length; n++)
                                t[n] = arguments[n];
                            var o = a[i++];
                            return o ? o(s).apply(r, t) : e.apply(r, t);
                        }
                        return s.apply(r, n);
                    }),
                    t);
            })();
            e.default = o;
        },
        function (t, e, r) {
            'use strict';
            var n = (this && this.__assign) ||
                function () {
                    return (n =
                        Object.assign ||
                            function (t) {
                                for (var e, r = 1, n = arguments.length; r < n; r++)
                                    for (var o in (e = arguments[r]))
                                        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                                return t;
                            }).apply(this, arguments);
                }, o = (this && this.__createBinding) ||
                (Object.create
                    ? function (t, e, r, n) {
                        void 0 === n && (n = r),
                            Object.defineProperty(t, n, {
                                enumerable: !0,
                                get: function () {
                                    return e[r];
                                },
                            });
                    }
                    : function (t, e, r, n) {
                        void 0 === n && (n = r), (t[n] = e[r]);
                    }), i = (this && this.__setModuleDefault) ||
                (Object.create
                    ? function (t, e) {
                        Object.defineProperty(t, 'default', { enumerable: !0, value: e });
                    }
                    : function (t, e) {
                        t.default = e;
                    }), a = (this && this.__importStar) ||
                function (t) {
                    if (t && t.__esModule)
                        return t;
                    var e = {};
                    if (null != t)
                        for (var r in t)
                            'default' !== r &&
                                Object.hasOwnProperty.call(t, r) &&
                                o(e, t, r);
                    return i(e, t), e;
                };
            Object.defineProperty(e, '__esModule', { value: !0 }),
                (e.compatibilityActions = void 0);
            var s = a(r(33));
            e.compatibilityActions = Object.entries(s).reduce(function (t, e) {
                var r, o, i = e[0], a = e[1];
                return Object.keys(s.Group).includes(i)
                    ? n(n({}, t), (((o = {})[i] = n(n({}, a), { ActionType: a.Action })), o))
                    : n(n({}, t), (((r = {})[i] = a), r));
            }, {});
        },
        function (t, e, r) {
            'use strict';
            var n = (this && this.__createBinding) ||
                (Object.create
                    ? function (t, e, r, n) {
                        void 0 === n && (n = r),
                            Object.defineProperty(t, n, {
                                enumerable: !0,
                                get: function () {
                                    return e[r];
                                },
                            });
                    }
                    : function (t, e, r, n) {
                        void 0 === n && (n = r), (t[n] = e[r]);
                    }), o = (this && this.__setModuleDefault) ||
                (Object.create
                    ? function (t, e) {
                        Object.defineProperty(t, 'default', { enumerable: !0, value: e });
                    }
                    : function (t, e) {
                        t.default = e;
                    }), i = (this && this.__importStar) ||
                function (t) {
                    if (t && t.__esModule)
                        return t;
                    var e = {};
                    if (null != t)
                        for (var r in t)
                            'default' !== r &&
                                Object.hasOwnProperty.call(t, r) &&
                                n(e, t, r);
                    return o(e, t), e;
                }, a = (this && this.__exportStar) ||
                function (t, e) {
                    for (var r in t)
                        'default' === r || e.hasOwnProperty(r) || n(e, t, r);
                };
            Object.defineProperty(e, '__esModule', { value: !0 }),
                (e.Performance =
                    e.Pos =
                        e.AppLink =
                            e.ChannelMenu =
                                e.NavigationMenu =
                                    e.Share =
                                        e.ContextualSaveBar =
                                            e.MarketingExternalActivityTopBar =
                                                e.TitleBar =
                                                    e.SessionToken =
                                                        e.ResourcePicker =
                                                            e.Redirect =
                                                                e.Print =
                                                                    e.ModalContent =
                                                                        e.Modal =
                                                                            e.Loading =
                                                                                e.LeaveConfirmation =
                                                                                    e.History =
                                                                                        e.Toast =
                                                                                            e.Fullscreen =
                                                                                                e.FeedbackModal =
                                                                                                    e.Features =
                                                                                                        e.Flash =
                                                                                                            e.Error =
                                                                                                                e.Client =
                                                                                                                    e.Cart =
                                                                                                                        e.Scanner =
                                                                                                                            e.ButtonGroup =
                                                                                                                                e.Button =
                                                                                                                                    e.AuthCode =
                                                                                                                                        void 0);
            var s = i(r(34));
            e.AuthCode = s;
            var u = i(r(4));
            e.Button = u;
            var c = i(r(8));
            e.ButtonGroup = c;
            var p = i(r(35));
            e.Cart = p;
            var f = i(r(18));
            e.Client = f;
            var h = i(r(3));
            e.Error = h;
            var d = i(r(36));
            e.Flash = d;
            var l = i(r(38));
            e.Features = l;
            var y = i(r(40));
            e.FeedbackModal = y;
            var A = i(r(41));
            e.Fullscreen = A;
            var P = i(r(42));
            e.LeaveConfirmation = P;
            var E = i(r(43));
            e.Loading = E;
            var v = i(r(21));
            e.Modal = v;
            var _ = i(r(44));
            e.ModalContent = _;
            var g = i(r(45));
            e.History = g;
            var O = i(r(22));
            e.Redirect = O;
            var b = i(r(14));
            e.Print = b;
            var T = i(r(46));
            e.ResourcePicker = T;
            var m = i(r(47));
            e.Scanner = m;
            var S = i(r(48));
            e.SessionToken = S;
            var R = i(r(49));
            e.TitleBar = R;
            var I = i(r(9));
            e.Toast = I;
            var C = i(r(51));
            e.ContextualSaveBar = C;
            var w = i(r(52));
            e.Share = w;
            var D = i(r(53));
            e.NavigationMenu = D;
            var M = i(r(54));
            e.ChannelMenu = M;
            var N = i(r(10));
            e.AppLink = N;
            var U = i(r(55));
            e.Pos = U;
            var L = i(r(56));
            e.MarketingExternalActivityTopBar = L;
            var B = i(r(57));
            e.Performance = B;
            var j = r(16);
            Object.defineProperty(e, 'isAppBridgeAction', {
                enumerable: !0,
                get: function () {
                    return j.isAppBridgeAction;
                },
            }),
                a(r(1), e);
        },
        function (t, e, r) {
            'use strict';
            Object.defineProperty(e, '__esModule', { value: !0 }),
                (e.respond = e.request = e.Action = void 0);
            var n, o = r(0), i = r(1);
            !(function (t) {
                (t.REQUEST = 'APP::AUTH_CODE::REQUEST'),
                    (t.RESPOND = 'APP::AUTH_CODE::RESPOND');
            })((n = e.Action || (e.Action = {}))),
                (e.request = function (t) {
                    return o.actionWrapper({
                        group: i.Group.AuthCode,
                        type: n.REQUEST,
                        payload: { id: t },
                    });
                }),
                (e.respond = function (t) {
                    return o.actionWrapper({
                        payload: t,
                        group: i.Group.AuthCode,
                        type: n.RESPOND,
                    });
                });
        },
        function (t, e, r) {
            'use strict';
            var n, o = (this && this.__extends) ||
                ((n = function (t, e) {
                    return (n =
                        Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (t, e) {
                                    t.__proto__ = e;
                                }) ||
                            function (t, e) {
                                for (var r in e)
                                    e.hasOwnProperty(r) && (t[r] = e[r]);
                            })(t, e);
                }),
                    function (t, e) {
                        function r() {
                            this.constructor = t;
                        }
                        n(t, e),
                            (t.prototype =
                                null === e
                                    ? Object.create(e)
                                    : ((r.prototype = e.prototype), new r()));
                    }), i = (this && this.__assign) ||
                function () {
                    return (i =
                        Object.assign ||
                            function (t) {
                                for (var e, r = 1, n = arguments.length; r < n; r++)
                                    for (var o in (e = arguments[r]))
                                        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                                return t;
                            }).apply(this, arguments);
                };
            Object.defineProperty(e, '__esModule', { value: !0 }),
                (e.create =
                    e.Cart =
                        e.setLineItemProperties =
                            e.removeLineItemDiscount =
                                e.setLineItemDiscount =
                                    e.removeLineItem =
                                        e.updateLineItem =
                                            e.addLineItem =
                                                e.removeProperties =
                                                    e.setProperties =
                                                        e.setDiscount =
                                                            e.updateCustomerAddress =
                                                                e.addCustomerAddress =
                                                                    e.setCustomer =
                                                                        e.update =
                                                                            e.fetch =
                                                                                e.Action =
                                                                                    void 0);
            var a, s = r(0), u = r(1);
            function c(t, e) {
                return (void 0 === e && (e = {}),
                    s.actionWrapper({ group: u.Group.Cart, type: t, payload: e }));
            }
            !(function (t) {
                (t.FETCH = 'APP::CART::FETCH'),
                    (t.UPDATE = 'APP::CART::UPDATE'),
                    (t.SET_CUSTOMER = 'APP::CART::SET_CUSTOMER'),
                    (t.REMOVE_CUSTOMER = 'APP::CART::REMOVE_CUSTOMER'),
                    (t.ADD_CUSTOMER_ADDRESS = 'APP::CART::ADD_CUSTOMER_ADDRESS'),
                    (t.UPDATE_CUSTOMER_ADDRESS = 'APP::CART::UPDATE_CUSTOMER_ADDRESS'),
                    (t.SET_DISCOUNT = 'APP::CART::SET_DISCOUNT'),
                    (t.REMOVE_DISCOUNT = 'APP::CART::REMOVE_DISCOUNT'),
                    (t.SET_PROPERTIES = 'APP::CART::SET_PROPERTIES'),
                    (t.REMOVE_PROPERTIES = 'APP::CART::REMOVE_PROPERTIES'),
                    (t.CLEAR = 'APP::CART::CLEAR'),
                    (t.ADD_LINE_ITEM = 'APP::CART::ADD_LINE_ITEM'),
                    (t.UPDATE_LINE_ITEM = 'APP::CART::UPDATE_LINE_ITEM'),
                    (t.REMOVE_LINE_ITEM = 'APP::CART::REMOVE_LINE_ITEM'),
                    (t.SET_LINE_ITEM_DISCOUNT = 'APP::CART::SET_LINE_ITEM_DISCOUNT'),
                    (t.REMOVE_LINE_ITEM_DISCOUNT =
                        'APP::CART::REMOVE_LINE_ITEM_DISCOUNT'),
                    (t.SET_LINE_ITEM_PROPERTIES = 'APP::CART::SET_LINE_ITEM_PROPERTIES'),
                    (t.REMOVE_LINE_ITEM_PROPERTIES =
                        'APP::CART::REMOVE_LINE_ITEM_PROPERTIES');
            })((a = e.Action || (e.Action = {}))),
                (e.fetch = function () {
                    return c(a.FETCH);
                }),
                (e.update = function (t) {
                    return c(a.UPDATE, t);
                }),
                (e.setCustomer = function (t) {
                    return c(a.SET_CUSTOMER, t);
                }),
                (e.addCustomerAddress = function (t) {
                    return c(a.ADD_CUSTOMER_ADDRESS, t);
                }),
                (e.updateCustomerAddress = function (t) {
                    return c(a.UPDATE_CUSTOMER_ADDRESS, t);
                }),
                (e.setDiscount = function (t) {
                    return c(a.SET_DISCOUNT, t);
                }),
                (e.setProperties = function (t) {
                    return c(a.SET_PROPERTIES, t);
                }),
                (e.removeProperties = function (t) {
                    return c(a.REMOVE_PROPERTIES, t);
                }),
                (e.addLineItem = function (t) {
                    return c(a.ADD_LINE_ITEM, t);
                }),
                (e.updateLineItem = function (t) {
                    return c(a.UPDATE_LINE_ITEM, t);
                }),
                (e.removeLineItem = function (t) {
                    return c(a.REMOVE_LINE_ITEM, t);
                }),
                (e.setLineItemDiscount = function (t) {
                    return c(a.SET_LINE_ITEM_DISCOUNT, t);
                }),
                (e.removeLineItemDiscount = function (t) {
                    return c(a.REMOVE_LINE_ITEM_DISCOUNT, t);
                }),
                (e.setLineItemProperties = function (t) {
                    return c(a.SET_LINE_ITEM_PROPERTIES, t);
                });
            var p = (function (t) {
                function e(e, r) {
                    return (t.call(this, e, u.Group.Cart, u.Group.Cart, r ? r.id : void 0) ||
                        this);
                }
                return (o(e, t),
                    (e.prototype.dispatch = function (t, e) {
                        switch (t) {
                            case a.FETCH:
                                this.dispatchCartAction(a.FETCH);
                                break;
                            case a.UPDATE:
                                this.dispatchCartAction(a.UPDATE, e);
                                break;
                            case a.SET_CUSTOMER:
                                this.dispatchCartAction(a.SET_CUSTOMER, e);
                                break;
                            case a.REMOVE_CUSTOMER:
                                this.dispatchCartAction(a.REMOVE_CUSTOMER, e);
                                break;
                            case a.ADD_CUSTOMER_ADDRESS:
                                this.dispatchCartAction(a.ADD_CUSTOMER_ADDRESS, e);
                                break;
                            case a.UPDATE_CUSTOMER_ADDRESS:
                                this.dispatchCartAction(a.UPDATE_CUSTOMER_ADDRESS, e);
                                break;
                            case a.SET_DISCOUNT:
                                this.dispatchCartAction(a.SET_DISCOUNT, e);
                                break;
                            case a.REMOVE_DISCOUNT:
                                this.dispatchCartAction(a.REMOVE_DISCOUNT, e);
                                break;
                            case a.SET_PROPERTIES:
                                this.dispatchCartAction(a.SET_PROPERTIES, e);
                                break;
                            case a.REMOVE_PROPERTIES:
                                this.dispatchCartAction(a.REMOVE_PROPERTIES, e);
                                break;
                            case a.CLEAR:
                                this.dispatchCartAction(a.CLEAR, e);
                                break;
                            case a.ADD_LINE_ITEM:
                                this.dispatchCartAction(a.ADD_LINE_ITEM, e);
                                break;
                            case a.UPDATE_LINE_ITEM:
                                this.dispatchCartAction(a.UPDATE_LINE_ITEM, e);
                                break;
                            case a.REMOVE_LINE_ITEM:
                                this.dispatchCartAction(a.REMOVE_LINE_ITEM, e);
                                break;
                            case a.SET_LINE_ITEM_DISCOUNT:
                                this.dispatchCartAction(a.SET_LINE_ITEM_DISCOUNT, e);
                                break;
                            case a.REMOVE_LINE_ITEM_DISCOUNT:
                                this.dispatchCartAction(a.REMOVE_LINE_ITEM_DISCOUNT, e);
                                break;
                            case a.SET_LINE_ITEM_PROPERTIES:
                                this.dispatchCartAction(a.SET_LINE_ITEM_PROPERTIES, e);
                                break;
                            case a.REMOVE_LINE_ITEM_PROPERTIES:
                                this.dispatchCartAction(a.REMOVE_LINE_ITEM_PROPERTIES, e);
                        }
                        return this;
                    }),
                    (e.prototype.dispatchCartAction = function (t, e) {
                        this.app.dispatch(c(t, i(i({}, e), { id: this.id })));
                    }),
                    e);
            })(s.ActionSet);
            (e.Cart = p),
                (e.create = function (t, e) {
                    return new p(t, e);
                });
        },
        function (t, e, r) {
            'use strict';
            var n = (this && this.__createBinding) ||
                (Object.create
                    ? function (t, e, r, n) {
                        void 0 === n && (n = r),
                            Object.defineProperty(t, n, {
                                enumerable: !0,
                                get: function () {
                                    return e[r];
                                },
                            });
                    }
                    : function (t, e, r, n) {
                        void 0 === n && (n = r), (t[n] = e[r]);
                    }), o = (this && this.__exportStar) ||
                function (t, e) {
                    for (var r in t)
                        'default' === r || e.hasOwnProperty(r) || n(e, t, r);
                };
            Object.defineProperty(e, '__esModule', { value: !0 }), o(r(37), e);
        },
        function (t, e, r) {
            'use strict';
            var n, o = (this && this.__extends) ||
                ((n = function (t, e) {
                    return (n =
                        Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (t, e) {
                                    t.__proto__ = e;
                                }) ||
                            function (t, e) {
                                for (var r in e)
                                    e.hasOwnProperty(r) && (t[r] = e[r]);
                            })(t, e);
                }),
                    function (t, e) {
                        function r() {
                            this.constructor = t;
                        }
                        n(t, e),
                            (t.prototype =
                                null === e
                                    ? Object.create(e)
                                    : ((r.prototype = e.prototype), new r()));
                    });
            Object.defineProperty(e, '__esModule', { value: !0 }),
                (e.create = e.Flash = void 0);
            var i = r(9), a = r(9);
            Object.defineProperty(e, 'ActionBase', {
                enumerable: !0,
                get: function () {
                    return a.ActionBase;
                },
            }),
                Object.defineProperty(e, 'clear', {
                    enumerable: !0,
                    get: function () {
                        return a.clear;
                    },
                }),
                Object.defineProperty(e, 'ClearAction', {
                    enumerable: !0,
                    get: function () {
                        return a.ClearAction;
                    },
                }),
                Object.defineProperty(e, 'show', {
                    enumerable: !0,
                    get: function () {
                        return a.show;
                    },
                }),
                Object.defineProperty(e, 'ShowAction', {
                    enumerable: !0,
                    get: function () {
                        return a.ShowAction;
                    },
                }),
                Object.defineProperty(e, 'FlashAction', {
                    enumerable: !0,
                    get: function () {
                        return a.ToastAction;
                    },
                });
            var s = (function (t) {
                function e() {
                    return (null !== t && t.apply(this, arguments)) || this;
                }
                return o(e, t), e;
            })(i.Toast);
            (e.Flash = s),
                (e.create = function (t, e) {
                    return new s(t, e);
                });
        },
        function (t, e, r) {
            'use strict';
            var n = (this && this.__createBinding) ||
                (Object.create
                    ? function (t, e, r, n) {
                        void 0 === n && (n = r),
                            Object.defineProperty(t, n, {
                                enumerable: !0,
                                get: function () {
                                    return e[r];
                                },
                            });
                    }
                    : function (t, e, r, n) {
                        void 0 === n && (n = r), (t[n] = e[r]);
                    }), o = (this && this.__exportStar) ||
                function (t, e) {
                    for (var r in t)
                        'default' === r || e.hasOwnProperty(r) || n(e, t, r);
                };
            Object.defineProperty(e, '__esModule', { value: !0 }),
                o(r(39), e),
                o(r(20), e);
        },
        function (t, e, r) {
            'use strict';
            var n, o = (this && this.__extends) ||
                ((n = function (t, e) {
                    return (n =
                        Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (t, e) {
                                    t.__proto__ = e;
                                }) ||
                            function (t, e) {
                                for (var r in e)
                                    e.hasOwnProperty(r) && (t[r] = e[r]);
                            })(t, e);
                }),
                    function (t, e) {
                        function r() {
                            this.constructor = t;
                        }
                        n(t, e),
                            (t.prototype =
                                null === e
                                    ? Object.create(e)
                                    : ((r.prototype = e.prototype), new r()));
                    }), i = (this && this.__assign) ||
                function () {
                    return (i =
                        Object.assign ||
                            function (t) {
                                for (var e, r = 1, n = arguments.length; r < n; r++)
                                    for (var o in (e = arguments[r]))
                                        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                                return t;
                            }).apply(this, arguments);
                };
            Object.defineProperty(e, '__esModule', { value: !0 }),
                (e.create = e.Features = void 0);
            var a = r(0), s = r(1), u = r(20), c = (function (t) {
                function e(e, r) {
                    return (t.call(this, e, s.Group.Features, s.Group.Features, r ? r.id : void 0) || this);
                }
                return (o(e, t),
                    (e.prototype.dispatch = function (t, e) {
                        switch (t) {
                            case u.Action.REQUEST:
                                this.dispatchFeaturesAction(u.Action.REQUEST, e);
                        }
                        return this;
                    }),
                    (e.prototype.dispatchFeaturesAction = function (t, e) {
                        this.app.dispatch(a.actionWrapper({
                            group: s.Group.Features,
                            type: t,
                            payload: i(i({}, e || {}), { id: this.id }),
                        }));
                    }),
                    e);
            })(a.ActionSet);
            (e.Features = c),
                (e.create = function (t, e) {
                    return new c(t, e);
                });
        },
        function (t, e, r) {
            'use strict';
            var n, o = (this && this.__extends) ||
                ((n = function (t, e) {
                    return (n =
                        Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (t, e) {
                                    t.__proto__ = e;
                                }) ||
                            function (t, e) {
                                for (var r in e)
                                    e.hasOwnProperty(r) && (t[r] = e[r]);
                            })(t, e);
                }),
                    function (t, e) {
                        function r() {
                            this.constructor = t;
                        }
                        n(t, e),
                            (t.prototype =
                                null === e
                                    ? Object.create(e)
                                    : ((r.prototype = e.prototype), new r()));
                    }), i = (this && this.__assign) ||
                function () {
                    return (i =
                        Object.assign ||
                            function (t) {
                                for (var e, r = 1, n = arguments.length; r < n; r++)
                                    for (var o in (e = arguments[r]))
                                        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                                return t;
                            }).apply(this, arguments);
                };
            Object.defineProperty(e, '__esModule', { value: !0 }),
                (e.create = e.FeedbackModal = e.close = e.open = e.Action = void 0);
            var a, s = r(0), u = r(1);
            function c(t) {
                return s.actionWrapper({
                    group: u.Group.FeedbackModal,
                    payload: t,
                    type: a.OPEN,
                });
            }
            function p(t) {
                return s.actionWrapper({
                    group: u.Group.FeedbackModal,
                    payload: t,
                    type: a.CLOSE,
                });
            }
            !(function (t) {
                (t.OPEN = 'APP::FEEDBACK_MODAL::OPEN'),
                    (t.CLOSE = 'APP::FEEDBACK_MODAL::CLOSE');
            })((a = e.Action || (e.Action = {}))),
                (e.open = c),
                (e.close = p);
            var f = (function (t) {
                function e(e, r) {
                    var n = t.call(this, e, u.Group.FeedbackModal, u.Group.FeedbackModal) ||
                        this;
                    return (n.options = r), n.set(r), n;
                }
                return (o(e, t),
                    Object.defineProperty(e.prototype, 'payload', {
                        get: function () {
                            return i({ id: this.id }, this.options);
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    (e.prototype.set = function (t) {
                        return (this.options = s.getMergedProps(this.options, t)), this;
                    }),
                    (e.prototype.dispatch = function (t) {
                        switch (t) {
                            case a.OPEN:
                                var e = c(this.payload);
                                this.app.dispatch(e);
                                break;
                            case a.CLOSE:
                                var r = p(this.payload);
                                this.app.dispatch(r);
                        }
                        return this;
                    }),
                    e);
            })(s.ActionSet);
            (e.FeedbackModal = f),
                (e.create = function (t, e) {
                    return new f(t, e);
                });
        },
        function (t, e, r) {
            'use strict';
            var n, o = (this && this.__extends) ||
                ((n = function (t, e) {
                    return (n =
                        Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (t, e) {
                                    t.__proto__ = e;
                                }) ||
                            function (t, e) {
                                for (var r in e)
                                    e.hasOwnProperty(r) && (t[r] = e[r]);
                            })(t, e);
                }),
                    function (t, e) {
                        function r() {
                            this.constructor = t;
                        }
                        n(t, e),
                            (t.prototype =
                                null === e
                                    ? Object.create(e)
                                    : ((r.prototype = e.prototype), new r()));
                    });
            Object.defineProperty(e, '__esModule', { value: !0 }),
                (e.create = e.Fullscreen = e.exit = e.enter = e.Action = void 0);
            var i, a = r(0), s = r(1);
            !(function (t) {
                (t.ENTER = 'APP::FULLSCREEN::ENTER'),
                    (t.EXIT = 'APP::FULLSCREEN::EXIT');
            })((i = e.Action || (e.Action = {}))),
                (e.enter = function () {
                    return a.actionWrapper({ group: s.Group.Fullscreen, type: i.ENTER });
                }),
                (e.exit = function () {
                    return a.actionWrapper({ group: s.Group.Fullscreen, type: i.EXIT });
                });
            var u = (function (t) {
                function e(e) {
                    return (t.call(this, e, s.Group.Fullscreen, s.Group.Fullscreen) || this);
                }
                return (o(e, t),
                    Object.defineProperty(e.prototype, 'payload', {
                        get: function () {
                            return { id: this.id };
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    (e.prototype.dispatch = function (t) {
                        return (this.app.dispatch(a.actionWrapper({
                            group: this.group,
                            type: t,
                            payload: this.payload,
                        })),
                            this);
                    }),
                    e);
            })(a.ActionSet);
            (e.Fullscreen = u),
                (e.create = function (t) {
                    return new u(t);
                });
        },
        function (t, e, r) {
            'use strict';
            var n, o = (this && this.__extends) ||
                ((n = function (t, e) {
                    return (n =
                        Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (t, e) {
                                    t.__proto__ = e;
                                }) ||
                            function (t, e) {
                                for (var r in e)
                                    e.hasOwnProperty(r) && (t[r] = e[r]);
                            })(t, e);
                }),
                    function (t, e) {
                        function r() {
                            this.constructor = t;
                        }
                        n(t, e),
                            (t.prototype =
                                null === e
                                    ? Object.create(e)
                                    : ((r.prototype = e.prototype), new r()));
                    }), i = (this && this.__assign) ||
                function () {
                    return (i =
                        Object.assign ||
                            function (t) {
                                for (var e, r = 1, n = arguments.length; r < n; r++)
                                    for (var o in (e = arguments[r]))
                                        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                                return t;
                            }).apply(this, arguments);
                };
            Object.defineProperty(e, '__esModule', { value: !0 }),
                (e.create =
                    e.LeaveConfirmation =
                        e.confirm =
                            e.disable =
                                e.enable =
                                    e.Action =
                                        void 0);
            var a, s = r(0), u = r(1);
            function c(t) {
                return (void 0 === t && (t = {}),
                    s.actionWrapper({
                        group: u.Group.LeaveConfirmation,
                        payload: t,
                        type: a.ENABLE,
                    }));
            }
            function p(t) {
                return (void 0 === t && (t = {}),
                    s.actionWrapper({
                        group: u.Group.LeaveConfirmation,
                        payload: t,
                        type: a.DISABLE,
                    }));
            }
            function f(t) {
                return (void 0 === t && (t = {}),
                    s.actionWrapper({
                        group: u.Group.LeaveConfirmation,
                        payload: t,
                        type: a.CONFIRM,
                    }));
            }
            !(function (t) {
                (t.ENABLE = 'APP::LEAVE_CONFIRMATION::ENABLE'),
                    (t.DISABLE = 'APP::LEAVE_CONFIRMATION::DISABLE'),
                    (t.CONFIRM = 'APP::LEAVE_CONFIRMATION::CONFIRM');
            })((a = e.Action || (e.Action = {}))),
                (e.enable = c),
                (e.disable = p),
                (e.confirm = f);
            var h = (function (t) {
                function e(e, r) {
                    void 0 === r && (r = {});
                    var n = t.call(this, e, u.Group.LeaveConfirmation, u.Group.LeaveConfirmation) || this;
                    return (n.options = r), n.set(r), n;
                }
                return (o(e, t),
                    Object.defineProperty(e.prototype, 'payload', {
                        get: function () {
                            return i({ id: this.id }, this.options);
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    (e.prototype.set = function (t) {
                        return (this.options = s.getMergedProps(this.options, t)), this;
                    }),
                    (e.prototype.dispatch = function (t) {
                        switch (t) {
                            case a.ENABLE:
                                var e = c(this.payload);
                                this.app.dispatch(e);
                                break;
                            case a.DISABLE:
                                var r = p(this.payload);
                                this.app.dispatch(r);
                                break;
                            case a.CONFIRM:
                                var n = f(this.payload);
                                this.app.dispatch(n);
                        }
                        return this;
                    }),
                    e);
            })(s.ActionSet);
            (e.LeaveConfirmation = h),
                (e.create = function (t, e) {
                    return void 0 === e && (e = {}), new h(t, e);
                });
        },
        function (t, e, r) {
            'use strict';
            var n, o = (this && this.__extends) ||
                ((n = function (t, e) {
                    return (n =
                        Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (t, e) {
                                    t.__proto__ = e;
                                }) ||
                            function (t, e) {
                                for (var r in e)
                                    e.hasOwnProperty(r) && (t[r] = e[r]);
                            })(t, e);
                }),
                    function (t, e) {
                        function r() {
                            this.constructor = t;
                        }
                        n(t, e),
                            (t.prototype =
                                null === e
                                    ? Object.create(e)
                                    : ((r.prototype = e.prototype), new r()));
                    });
            Object.defineProperty(e, '__esModule', { value: !0 }),
                (e.create = e.Loading = e.stop = e.start = e.Action = void 0);
            var i, a = r(0), s = r(1);
            function u(t) {
                return a.actionWrapper({
                    payload: t,
                    group: s.Group.Loading,
                    type: i.START,
                });
            }
            function c(t) {
                return a.actionWrapper({
                    payload: t,
                    group: s.Group.Loading,
                    type: i.STOP,
                });
            }
            !(function (t) {
                (t.START = 'APP::LOADING::START'), (t.STOP = 'APP::LOADING::STOP');
            })((i = e.Action || (e.Action = {}))),
                (e.start = u),
                (e.stop = c);
            var p = (function (t) {
                function e(e) {
                    return t.call(this, e, s.Group.Loading, s.Group.Loading) || this;
                }
                return (o(e, t),
                    Object.defineProperty(e.prototype, 'payload', {
                        get: function () {
                            return { id: this.id };
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    (e.prototype.dispatch = function (t) {
                        switch (t) {
                            case i.START:
                                this.app.dispatch(u(this.payload));
                                break;
                            case i.STOP:
                                this.app.dispatch(c(this.payload));
                        }
                        return this;
                    }),
                    e);
            })(a.ActionSet);
            (e.Loading = p),
                (e.create = function (t) {
                    return new p(t);
                });
        },
        function (t, e, r) {
            'use strict';
            var n, o = (this && this.__extends) ||
                ((n = function (t, e) {
                    return (n =
                        Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (t, e) {
                                    t.__proto__ = e;
                                }) ||
                            function (t, e) {
                                for (var r in e)
                                    e.hasOwnProperty(r) && (t[r] = e[r]);
                            })(t, e);
                }),
                    function (t, e) {
                        function r() {
                            this.constructor = t;
                        }
                        n(t, e),
                            (t.prototype =
                                null === e
                                    ? Object.create(e)
                                    : ((r.prototype = e.prototype), new r()));
                    }), i = (this && this.__assign) ||
                function () {
                    return (i =
                        Object.assign ||
                            function (t) {
                                for (var e, r = 1, n = arguments.length; r < n; r++)
                                    for (var o in (e = arguments[r]))
                                        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                                return t;
                            }).apply(this, arguments);
                }, a = (this && this.__awaiter) ||
                function (t, e, r, n) {
                    return new (r || (r = Promise))(function (o, i) {
                        function a(t) {
                            try {
                                u(n.next(t));
                            }
                            catch (t) {
                                i(t);
                            }
                        }
                        function s(t) {
                            try {
                                u(n.throw(t));
                            }
                            catch (t) {
                                i(t);
                            }
                        }
                        function u(t) {
                            var e;
                            t.done
                                ? o(t.value)
                                : ((e = t.value),
                                    e instanceof r
                                        ? e
                                        : new r(function (t) {
                                            t(e);
                                        })).then(a, s);
                        }
                        u((n = n.apply(t, e || [])).next());
                    });
                }, s = (this && this.__generator) ||
                function (t, e) {
                    var r, n, o, i, a = {
                        label: 0,
                        sent: function () {
                            if (1 & o[0])
                                throw o[1];
                            return o[1];
                        },
                        trys: [],
                        ops: [],
                    };
                    return ((i = { next: s(0), throw: s(1), return: s(2) }),
                        'function' == typeof Symbol &&
                            (i[Symbol.iterator] = function () {
                                return this;
                            }),
                        i);
                    function s(i) {
                        return function (s) {
                            return (function (i) {
                                if (r)
                                    throw new TypeError('Generator is already executing.');
                                for (; a;)
                                    try {
                                        if (((r = 1),
                                            n &&
                                                (o =
                                                    2 & i[0]
                                                        ? n.return
                                                        : i[0]
                                                            ? n.throw || ((o = n.return) && o.call(n), 0)
                                                            : n.next) &&
                                                !(o = o.call(n, i[1])).done))
                                            return o;
                                        switch (((n = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                                            case 0:
                                            case 1:
                                                o = i;
                                                break;
                                            case 4:
                                                return a.label++, { value: i[1], done: !1 };
                                            case 5:
                                                a.label++, (n = i[1]), (i = [0]);
                                                continue;
                                            case 7:
                                                (i = a.ops.pop()), a.trys.pop();
                                                continue;
                                            default:
                                                if (!((o = a.trys),
                                                    (o = o.length > 0 && o[o.length - 1]) ||
                                                        (6 !== i[0] && 2 !== i[0]))) {
                                                    a = 0;
                                                    continue;
                                                }
                                                if (3 === i[0] &&
                                                    (!o || (i[1] > o[0] && i[1] < o[3]))) {
                                                    a.label = i[1];
                                                    break;
                                                }
                                                if (6 === i[0] && a.label < o[1]) {
                                                    (a.label = o[1]), (o = i);
                                                    break;
                                                }
                                                if (o && a.label < o[2]) {
                                                    (a.label = o[2]), a.ops.push(i);
                                                    break;
                                                }
                                                o[2] && a.ops.pop(), a.trys.pop();
                                                continue;
                                        }
                                        i = e.call(t, a);
                                    }
                                    catch (t) {
                                        (i = [6, t]), (n = 0);
                                    }
                                    finally {
                                        r = o = 0;
                                    }
                                if (5 & i[0])
                                    throw i[1];
                                return { value: i[0] ? i[1] : void 0, done: !0 };
                            })([i, s]);
                        };
                    }
                };
            Object.defineProperty(e, '__esModule', { value: !0 }),
                (e.create = e.ModalContent = e.Action = void 0);
            var u, c = r(0), p = r(1), f = r(21);
            !(function (t) {
                (t.LOADING = 'LOADING'), (t.LOADED = 'LOADED');
            })((u = e.Action || (e.Action = {})));
            var h = (function (t) {
                function e(e, r) {
                    return (t.call(this, e, p.Group.Modal, p.Group.Modal, r ? r.id : void 0) ||
                        this);
                }
                return (o(e, t),
                    (e.prototype.loaded = function () {
                        this.dispatch(u.LOADED);
                    }),
                    (e.prototype.loading = function () {
                        this.dispatch(u.LOADING);
                    }),
                    (e.prototype.dispatch = function (t) {
                        switch (t) {
                            case u.LOADED:
                                this.dispatchModalAction(f.Action.UPDATE_CONTENT, {
                                    loading: !1,
                                });
                                break;
                            case u.LOADING:
                                this.dispatchModalAction(f.Action.UPDATE_CONTENT, {
                                    loading: !0,
                                });
                        }
                        return this;
                    }),
                    (e.prototype.dispatchModalAction = function (t, e) {
                        return a(this, void 0, void 0, function () {
                            var r;
                            return s(this, function (n) {
                                return ((r = c.actionWrapper({
                                    type: t,
                                    group: p.Group.Modal,
                                    payload: i({}, e),
                                })),
                                    this.app.dispatch(r),
                                    [2]);
                            });
                        });
                    }),
                    e);
            })(c.ActionSet);
            (e.ModalContent = h),
                (e.create = function (t, e) {
                    return new h(t, e);
                });
        },
        function (t, e, r) {
            'use strict';
            var n, o = (this && this.__extends) ||
                ((n = function (t, e) {
                    return (n =
                        Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (t, e) {
                                    t.__proto__ = e;
                                }) ||
                            function (t, e) {
                                for (var r in e)
                                    e.hasOwnProperty(r) && (t[r] = e[r]);
                            })(t, e);
                }),
                    function (t, e) {
                        function r() {
                            this.constructor = t;
                        }
                        n(t, e),
                            (t.prototype =
                                null === e
                                    ? Object.create(e)
                                    : ((r.prototype = e.prototype), new r()));
                    }), i = (this && this.__assign) ||
                function () {
                    return (i =
                        Object.assign ||
                            function (t) {
                                for (var e, r = 1, n = arguments.length; r < n; r++)
                                    for (var o in (e = arguments[r]))
                                        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                                return t;
                            }).apply(this, arguments);
                };
            Object.defineProperty(e, '__esModule', { value: !0 }),
                (e.create = e.History = e.replace = e.push = e.Action = void 0);
            var a, s = r(0), u = r(1);
            function c(t) {
                return s.actionWrapper({
                    payload: t,
                    group: u.Group.Navigation,
                    type: a.PUSH,
                });
            }
            function p(t) {
                return s.actionWrapper({
                    payload: t,
                    group: u.Group.Navigation,
                    type: a.REPLACE,
                });
            }
            !(function (t) {
                (t.PUSH = 'APP::NAVIGATION::HISTORY::PUSH'),
                    (t.REPLACE = 'APP::NAVIGATION::HISTORY::REPLACE');
            })((a = e.Action || (e.Action = {}))),
                (e.push = c),
                (e.replace = p);
            var f = (function (t) {
                function e(e) {
                    return t.call(this, e, 'History', u.Group.Navigation) || this;
                }
                return (o(e, t),
                    Object.defineProperty(e.prototype, 'payload', {
                        get: function () {
                            return { id: this.id };
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    (e.prototype.dispatch = function (t, e) {
                        var r = i(i({}, this.payload), { path: e });
                        switch (t) {
                            case a.PUSH:
                                this.app.dispatch(c(r));
                                break;
                            case a.REPLACE:
                                this.app.dispatch(p(r));
                        }
                        return this;
                    }),
                    e);
            })(s.ActionSet);
            (e.History = f),
                (e.create = function (t) {
                    return new f(t);
                });
        },
        function (t, e, r) {
            'use strict';
            var n, o = (this && this.__extends) ||
                ((n = function (t, e) {
                    return (n =
                        Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (t, e) {
                                    t.__proto__ = e;
                                }) ||
                            function (t, e) {
                                for (var r in e)
                                    e.hasOwnProperty(r) && (t[r] = e[r]);
                            })(t, e);
                }),
                    function (t, e) {
                        function r() {
                            this.constructor = t;
                        }
                        n(t, e),
                            (t.prototype =
                                null === e
                                    ? Object.create(e)
                                    : ((r.prototype = e.prototype), new r()));
                    }), i = (this && this.__assign) ||
                function () {
                    return (i =
                        Object.assign ||
                            function (t) {
                                for (var e, r = 1, n = arguments.length; r < n; r++)
                                    for (var o in (e = arguments[r]))
                                        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                                return t;
                            }).apply(this, arguments);
                };
            Object.defineProperty(e, '__esModule', { value: !0 }),
                (e.create =
                    e.ResourcePicker =
                        e.update =
                            e.close =
                                e.cancel =
                                    e.open =
                                        e.select =
                                            e.ActionVerb =
                                                e.ResourceType =
                                                    e.ProductStatus =
                                                        e.ProductVariantInventoryManagement =
                                                            e.ProductVariantInventoryPolicy =
                                                                e.WeightUnit =
                                                                    e.FulfillmentServiceType =
                                                                        e.CollectionSortOrder =
                                                                            e.Action =
                                                                                void 0);
            var a, s, u, c = r(0), p = r(1);
            function f(t) {
                return c.actionWrapper({
                    payload: t,
                    group: p.Group.ResourcePicker,
                    type: a.SELECT,
                });
            }
            function h(t) {
                return c.actionWrapper({
                    payload: t,
                    group: p.Group.ResourcePicker,
                    type: a.OPEN,
                });
            }
            function d(t) {
                return c.actionWrapper({
                    payload: t,
                    group: p.Group.ResourcePicker,
                    type: a.CANCEL,
                });
            }
            function l(t) {
                return c.actionWrapper({
                    payload: t,
                    group: p.Group.ResourcePicker,
                    type: a.UPDATE,
                });
            }
            !(function (t) {
                (t.OPEN = 'APP::RESOURCE_PICKER::OPEN'),
                    (t.SELECT = 'APP::RESOURCE_PICKER::SELECT'),
                    (t.CLOSE = 'APP::RESOURCE_PICKER::CLOSE'),
                    (t.UPDATE = 'APP::RESOURCE_PICKER::UPDATE'),
                    (t.CANCEL = 'APP::RESOURCE_PICKER::CANCEL');
            })((a = e.Action || (e.Action = {}))),
                (function (t) {
                    (t.Manual = 'MANUAL'),
                        (t.BestSelling = 'BEST_SELLING'),
                        (t.AlphaAsc = 'ALPHA_ASC'),
                        (t.AlphaDesc = 'ALPHA_DESC'),
                        (t.PriceDesc = 'PRICE_DESC'),
                        (t.PriceAsc = 'PRICE_ASC'),
                        (t.CreatedDesc = 'CREATED_DESC'),
                        (t.Created = 'CREATED');
                })(e.CollectionSortOrder || (e.CollectionSortOrder = {})),
                (function (t) {
                    (t.GiftCard = 'GIFT_CARD'),
                        (t.Manual = 'MANUAL'),
                        (t.ThirdParty = 'THIRD_PARTY');
                })(e.FulfillmentServiceType || (e.FulfillmentServiceType = {})),
                (function (t) {
                    (t.Kilograms = 'KILOGRAMS'),
                        (t.Grams = 'GRAMS'),
                        (t.Pounds = 'POUNDS'),
                        (t.Ounces = 'OUNCES');
                })(e.WeightUnit || (e.WeightUnit = {})),
                (function (t) {
                    (t.Deny = 'DENY'), (t.Continue = 'CONTINUE');
                })(e.ProductVariantInventoryPolicy ||
                    (e.ProductVariantInventoryPolicy = {})),
                (function (t) {
                    (t.Shopify = 'SHOPIFY'),
                        (t.NotManaged = 'NOT_MANAGED'),
                        (t.FulfillmentService = 'FULFILLMENT_SERVICE');
                })(e.ProductVariantInventoryManagement ||
                    (e.ProductVariantInventoryManagement = {})),
                (function (t) {
                    (t.Active = 'ACTIVE'), (t.Archived = 'ARCHIVED'), (t.Draft = 'DRAFT');
                })(e.ProductStatus || (e.ProductStatus = {})),
                (function (t) {
                    (t.Product = 'product'),
                        (t.ProductVariant = 'variant'),
                        (t.Collection = 'collection');
                })((s = e.ResourceType || (e.ResourceType = {}))),
                (function (t) {
                    (t.Add = 'add'), (t.Select = 'select');
                })((u = e.ActionVerb || (e.ActionVerb = {}))),
                (e.select = f),
                (e.open = h),
                (e.cancel = d),
                (e.close = function (t) {
                    return c.actionWrapper({
                        payload: t,
                        group: p.Group.ResourcePicker,
                        type: a.CANCEL,
                    });
                }),
                (e.update = l);
            var y = (function (t) {
                function e(e, r, n) {
                    var o = t.call(this, e, p.Group.ResourcePicker, p.Group.ResourcePicker) ||
                        this;
                    return ((o.initialSelectionIds = []),
                        (o.selection = []),
                        (o.resourceType = n),
                        o.set(r, !1),
                        o);
                }
                return (o(e, t),
                    Object.defineProperty(e.prototype, 'payload', {
                        get: function () {
                            return i(i({}, this.options), {
                                id: this.id,
                                resourceType: this.resourceType,
                            });
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, 'options', {
                        get: function () {
                            var t = {
                                initialQuery: this.initialQuery,
                                selectMultiple: this.selectMultiple,
                                initialSelectionIds: this.initialSelectionIds,
                                showHidden: this.showHidden,
                                actionVerb: this.actionVerb,
                            };
                            return this.resourceType === s.Product
                                ? i(i({}, t), {
                                    showVariants: this.showVariants,
                                    showDraft: this.showDraft,
                                    showArchived: this.showArchived,
                                    showDraftBadge: this.showDraftBadge,
                                    showArchivedBadge: this.showArchivedBadge,
                                })
                                : t;
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    (e.prototype.set = function (t, e) {
                        void 0 === e && (e = !0);
                        var r = c.getMergedProps(this.options, t), n = r.initialQuery, o = r.initialSelectionIds, i = void 0 === o ? [] : o, a = r.showHidden, s = void 0 === a || a, p = r.showVariants, f = void 0 === p || p, h = r.showDraft, d = void 0 === h || h, l = r.showArchived, y = void 0 === l || l, A = r.showDraftBadge, P = void 0 !== A && A, E = r.showArchivedBadge, v = void 0 !== E && E, _ = r.selectMultiple, g = void 0 === _ || _, O = r.actionVerb, b = void 0 === O ? u.Add : O;
                        return ((this.initialQuery = n),
                            (this.initialSelectionIds = i),
                            (this.showHidden = s),
                            (this.showVariants = f),
                            (this.showDraft = d),
                            (this.showArchived = y),
                            (this.showDraftBadge = P),
                            (this.showArchivedBadge = v),
                            (this.selectMultiple = g),
                            (this.actionVerb = b),
                            e && this.update(),
                            this);
                    }),
                    (e.prototype.dispatch = function (t, e) {
                        return (t === a.OPEN
                            ? this.open()
                            : t === a.UPDATE
                                ? this.update()
                                : t === a.CLOSE || t === a.CANCEL
                                    ? this.cancel()
                                    : t === a.SELECT &&
                                        ((this.selection = e),
                                            this.app.dispatch(f({ id: this.id, selection: this.selection }))),
                            this);
                    }),
                    (e.prototype.update = function () {
                        this.app.dispatch(l(this.payload));
                    }),
                    (e.prototype.open = function () {
                        this.app.dispatch(h(this.payload));
                    }),
                    (e.prototype.cancel = function () {
                        this.app.dispatch(d({ id: this.id }));
                    }),
                    (e.prototype.close = function () {
                        this.cancel();
                    }),
                    e);
            })(c.ActionSet);
            (e.ResourcePicker = y),
                (e.create = function (t, e) {
                    var r = e.resourceType, n = e.options;
                    return new y(t, void 0 === n ? {} : n, r);
                });
        },
        function (t, e, r) {
            'use strict';
            var n, o = (this && this.__extends) ||
                ((n = function (t, e) {
                    return (n =
                        Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (t, e) {
                                    t.__proto__ = e;
                                }) ||
                            function (t, e) {
                                for (var r in e)
                                    e.hasOwnProperty(r) && (t[r] = e[r]);
                            })(t, e);
                }),
                    function (t, e) {
                        function r() {
                            this.constructor = t;
                        }
                        n(t, e),
                            (t.prototype =
                                null === e
                                    ? Object.create(e)
                                    : ((r.prototype = e.prototype), new r()));
                    });
            Object.defineProperty(e, '__esModule', { value: !0 }),
                (e.capture = e.openCamera = e.create = e.Scanner = e.Action = void 0);
            var i, a = r(0), s = r(1);
            !(function (t) {
                (t.OPEN_CAMERA = 'APP::SCANNER::OPEN::CAMERA'),
                    (t.CAPTURE = 'APP::SCANNER::CAPTURE');
            })((i = e.Action || (e.Action = {})));
            var u = (function (t) {
                function e(e, r) {
                    return (t.call(this, e, s.Group.Scanner, s.Group.Scanner, r ? r.id : void 0) || this);
                }
                return (o(e, t),
                    (e.prototype.dispatch = function (t) {
                        switch (t) {
                            case i.OPEN_CAMERA:
                                this.dispatchScannerAction(i.OPEN_CAMERA);
                        }
                        return this;
                    }),
                    (e.prototype.dispatchScannerAction = function (t) {
                        this.app.dispatch(a.actionWrapper({
                            type: t,
                            group: s.Group.Scanner,
                            payload: { id: this.id },
                        }));
                    }),
                    e);
            })(a.ActionSet);
            (e.Scanner = u),
                (e.create = function (t, e) {
                    return new u(t, e);
                }),
                (e.openCamera = function () {
                    return a.actionWrapper({ group: s.Group.Scanner, type: i.OPEN_CAMERA });
                }),
                (e.capture = function (t) {
                    return a.actionWrapper({
                        group: s.Group.Scanner,
                        type: i.CAPTURE,
                        payload: t,
                    });
                });
        },
        function (t, e, r) {
            'use strict';
            Object.defineProperty(e, '__esModule', { value: !0 }),
                (e.respond = e.request = e.Action = void 0);
            var n, o = r(0), i = r(1);
            !(function (t) {
                (t.REQUEST = 'APP::SESSION_TOKEN::REQUEST'),
                    (t.RESPOND = 'APP::SESSION_TOKEN::RESPOND');
            })((n = e.Action || (e.Action = {}))),
                (e.request = function () {
                    return o.actionWrapper({
                        group: i.Group.SessionToken,
                        type: n.REQUEST,
                    });
                }),
                (e.respond = function (t) {
                    return o.actionWrapper({
                        payload: t,
                        group: i.Group.SessionToken,
                        type: n.RESPOND,
                    });
                });
        },
        function (t, e, r) {
            'use strict';
            var n, o = (this && this.__extends) ||
                ((n = function (t, e) {
                    return (n =
                        Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (t, e) {
                                    t.__proto__ = e;
                                }) ||
                            function (t, e) {
                                for (var r in e)
                                    e.hasOwnProperty(r) && (t[r] = e[r]);
                            })(t, e);
                }),
                    function (t, e) {
                        function r() {
                            this.constructor = t;
                        }
                        n(t, e),
                            (t.prototype =
                                null === e
                                    ? Object.create(e)
                                    : ((r.prototype = e.prototype), new r()));
                    }), i = (this && this.__assign) ||
                function () {
                    return (i =
                        Object.assign ||
                            function (t) {
                                for (var e, r = 1, n = arguments.length; r < n; r++)
                                    for (var o in (e = arguments[r]))
                                        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                                return t;
                            }).apply(this, arguments);
                };
            Object.defineProperty(e, '__esModule', { value: !0 }),
                (e.create =
                    e.TitleBar =
                        e.update =
                            e.clickBreadcrumb =
                                e.clickActionButton =
                                    e.Action =
                                        void 0);
            var a, s = r(4), u = r(8), c = r(50), p = r(6), f = r(0), h = r(1);
            !(function (t) {
                (t.UPDATE = 'APP::TITLEBAR::UPDATE'),
                    (t.BUTTON_CLICK = 'APP::TITLEBAR::BUTTONS::BUTTON::CLICK'),
                    (t.BUTTON_UPDATE = 'APP::TITLEBAR::BUTTONS::BUTTON::UPDATE'),
                    (t.BUTTON_GROUP_UPDATE =
                        'APP::TITLEBAR::BUTTONS::BUTTONGROUP::UPDATE'),
                    (t.BREADCRUMBS_CLICK = 'APP::TITLEBAR::BREADCRUMBS::BUTTON::CLICK'),
                    (t.BREADCRUMBS_UPDATE = 'APP::TITLEBAR::BREADCRUMBS::BUTTON::UPDATE');
            })((a = e.Action || (e.Action = {})));
            var d = { group: h.Group.TitleBar, subgroups: ['Buttons'] }, l = {
                group: h.Group.TitleBar,
                subgroups: ['Breadcrumbs'],
                type: h.ComponentType.Button,
            };
            function y(t) {
                return f.actionWrapper({
                    payload: t,
                    group: h.Group.TitleBar,
                    type: a.UPDATE,
                });
            }
            (e.clickActionButton = function (t, e) {
                var r = h.ComponentType.Button, n = i({ id: t, type: r }, d);
                return s.clickButton(h.Group.TitleBar, n, e);
            }),
                (e.clickBreadcrumb = function (t, e) {
                    var r = i({ id: t }, l);
                    return s.clickButton(h.Group.TitleBar, r, e);
                }),
                (e.update = y);
            var A = (function (t) {
                function e(e, r) {
                    var n = t.call(this, e, h.Group.TitleBar, h.Group.TitleBar) || this;
                    return n.set(r), n;
                }
                return (o(e, t),
                    Object.defineProperty(e.prototype, 'buttons', {
                        get: function () {
                            if (this.primary || this.secondary)
                                return { primary: this.primary, secondary: this.secondary };
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, 'buttonsOptions', {
                        get: function () {
                            if (this.primaryOptions || this.secondaryOptions)
                                return {
                                    primary: this.primaryOptions,
                                    secondary: this.secondaryOptions,
                                };
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, 'options', {
                        get: function () {
                            return {
                                breadcrumbs: this.breadcrumbsOption,
                                buttons: this.buttonsOptions,
                                title: this.title,
                            };
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, 'payload', {
                        get: function () {
                            return i(i({}, this.options), {
                                breadcrumbs: this.breadcrumb,
                                buttons: this.buttons,
                                id: this.id,
                            });
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    (e.prototype.set = function (t, e) {
                        void 0 === e && (e = !0);
                        var r = f.getMergedProps(this.options, t), n = r.title, o = r.buttons, i = r.breadcrumbs;
                        return ((this.title = n),
                            this.setBreadcrumbs(i),
                            this.setPrimaryButton(o ? o.primary : void 0),
                            this.setSecondaryButton(o ? o.secondary : void 0),
                            e && this.dispatch(a.UPDATE),
                            this);
                    }),
                    (e.prototype.dispatch = function (t) {
                        switch (t) {
                            case a.UPDATE:
                                this.app.dispatch(y(this.payload));
                        }
                        return this;
                    }),
                    (e.prototype.getButton = function (t, e, r) {
                        return t instanceof u.ButtonGroup
                            ? c.getGroupedButton(this, t, e, r)
                            : p.getSingleButton(this, t, e, r);
                    }),
                    (e.prototype.updatePrimaryButton = function (t) {
                        this.primary &&
                            f.updateActionFromPayload(this.primary, t) &&
                            this.dispatch(a.UPDATE);
                    }),
                    (e.prototype.updateSecondaryButtons = function (t) {
                        if (this.secondary) {
                            var e = this.secondary.find(function (e) {
                                return e.id === t.id;
                            });
                            if (e) {
                                (u.isGroupedButtonPayload(t),
                                    f.updateActionFromPayload(e, t)) && this.dispatch(a.UPDATE);
                            }
                        }
                    }),
                    (e.prototype.updateBreadcrumbButton = function (t) {
                        this.breadcrumb &&
                            f.updateActionFromPayload(this.breadcrumb, t) &&
                            this.dispatch(a.UPDATE);
                    }),
                    (e.prototype.setPrimaryButton = function (t) {
                        (this.primaryOptions = this.getChildButton(t, this.primaryOptions)),
                            (this.primary = this.primaryOptions
                                ? this.getButton(this.primaryOptions, d.subgroups, this.updatePrimaryButton)
                                : void 0);
                    }),
                    (e.prototype.setSecondaryButton = function (t) {
                        var e = this, r = t || [], n = this.secondaryOptions || [];
                        (this.secondaryOptions = this.getUpdatedChildActions(r, n)),
                            (this.secondary = this.secondaryOptions
                                ? this.secondaryOptions.map(function (t) {
                                    return e.getButton(t, d.subgroups, e.updateSecondaryButtons);
                                })
                                : void 0);
                    }),
                    (e.prototype.setBreadcrumbs = function (t) {
                        (this.breadcrumbsOption = this.getChildButton(t, this.breadcrumbsOption)),
                            (this.breadcrumb = this.breadcrumbsOption
                                ? this.getButton(this.breadcrumbsOption, l.subgroups, this.updateBreadcrumbButton)
                                : void 0);
                    }),
                    (e.prototype.getChildButton = function (t, e) {
                        var r = t ? [t] : [], n = e ? [e] : [], o = this.getUpdatedChildActions(r, n);
                        return o ? o[0] : void 0;
                    }),
                    e);
            })(f.ActionSetWithChildren);
            (e.TitleBar = A),
                (e.create = function (t, e) {
                    return new A(t, e);
                });
        },
        function (t, e, r) {
            'use strict';
            Object.defineProperty(e, '__esModule', { value: !0 }),
                (e.getGroupedButton = void 0);
            var n = r(8);
            e.getGroupedButton = function (t, e, r, o) {
                t.addChild(e, t.group, r);
                var i = e.id, a = e.label, s = e.disabled, u = e.buttons, c = e.plain;
                return (t.subscribeToChild(e, n.Action.UPDATE, o),
                    { id: i, label: a, buttons: u, disabled: s, plain: c });
            };
        },
        function (t, e, r) {
            'use strict';
            var n, o = (this && this.__extends) ||
                ((n = function (t, e) {
                    return (n =
                        Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (t, e) {
                                    t.__proto__ = e;
                                }) ||
                            function (t, e) {
                                for (var r in e)
                                    e.hasOwnProperty(r) && (t[r] = e[r]);
                            })(t, e);
                }),
                    function (t, e) {
                        function r() {
                            this.constructor = t;
                        }
                        n(t, e),
                            (t.prototype =
                                null === e
                                    ? Object.create(e)
                                    : ((r.prototype = e.prototype), new r()));
                    }), i = (this && this.__assign) ||
                function () {
                    return (i =
                        Object.assign ||
                            function (t) {
                                for (var e, r = 1, n = arguments.length; r < n; r++)
                                    for (var o in (e = arguments[r]))
                                        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                                return t;
                            }).apply(this, arguments);
                };
            Object.defineProperty(e, '__esModule', { value: !0 }),
                (e.create =
                    e.ContextualSaveBar =
                        e.discard =
                            e.save =
                                e.hide =
                                    e.show =
                                        e.Action =
                                            void 0);
            var a, s = r(0), u = r(1);
            function c(t, e) {
                return s.actionWrapper({
                    group: u.Group.ContextualSaveBar,
                    type: t,
                    payload: e,
                });
            }
            !(function (t) {
                (t.DISCARD = 'APP::CONTEXTUAL_SAVE_BAR::DISCARD'),
                    (t.SAVE = 'APP::CONTEXTUAL_SAVE_BAR::SAVE'),
                    (t.SHOW = 'APP::CONTEXTUAL_SAVE_BAR::SHOW'),
                    (t.HIDE = 'APP::CONTEXTUAL_SAVE_BAR::HIDE'),
                    (t.UPDATE = 'APP::CONTEXTUAL_SAVE_BAR::UPDATE');
            })((a = e.Action || (e.Action = {}))),
                (e.show = function (t) {
                    return c(a.SHOW, t);
                }),
                (e.hide = function (t) {
                    return c(a.HIDE, t);
                }),
                (e.save = function (t) {
                    return c(a.SAVE, t);
                }),
                (e.discard = function (t) {
                    return c(a.DISCARD, t);
                });
            var p = (function (t) {
                function e(e, r) {
                    void 0 === r && (r = {});
                    var n = t.call(this, e, u.Group.ContextualSaveBar, u.Group.ContextualSaveBar) || this;
                    return (n.options = r), n.set(r, !1), n;
                }
                return (o(e, t),
                    Object.defineProperty(e.prototype, 'payload', {
                        get: function () {
                            return i({ id: this.id }, this.options);
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    (e.prototype.set = function (t, e) {
                        void 0 === e && (e = !0);
                        var r = s.getMergedProps(this.options, t);
                        return (this.options = r), e && this.dispatch(a.UPDATE), this;
                    }),
                    (e.prototype.dispatch = function (t) {
                        return this.app.dispatch(c(t, this.payload)), this;
                    }),
                    e);
            })(s.ActionSet);
            (e.ContextualSaveBar = p),
                (e.create = function (t, e) {
                    return new p(t, e);
                });
        },
        function (t, e, r) {
            'use strict';
            var n, o = (this && this.__extends) ||
                ((n = function (t, e) {
                    return (n =
                        Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (t, e) {
                                    t.__proto__ = e;
                                }) ||
                            function (t, e) {
                                for (var r in e)
                                    e.hasOwnProperty(r) && (t[r] = e[r]);
                            })(t, e);
                }),
                    function (t, e) {
                        function r() {
                            this.constructor = t;
                        }
                        n(t, e),
                            (t.prototype =
                                null === e
                                    ? Object.create(e)
                                    : ((r.prototype = e.prototype), new r()));
                    }), i = (this && this.__assign) ||
                function () {
                    return (i =
                        Object.assign ||
                            function (t) {
                                for (var e, r = 1, n = arguments.length; r < n; r++)
                                    for (var o in (e = arguments[r]))
                                        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                                return t;
                            }).apply(this, arguments);
                };
            Object.defineProperty(e, '__esModule', { value: !0 }),
                (e.close = e.show = e.create = e.Share = e.Action = void 0);
            var a, s = r(1), u = r(0);
            !(function (t) {
                (t.SHOW = 'APP::SHARE::SHOW'), (t.CLOSE = 'APP::SHARE::CLOSE');
            })((a = e.Action || (e.Action = {})));
            var c = (function (t) {
                function e(e) {
                    return t.call(this, e, s.Group.Share, s.Group.Share) || this;
                }
                return (o(e, t),
                    (e.prototype.dispatch = function (t, e) {
                        switch (t) {
                            case a.SHOW:
                                this.dispatchShareAction(a.SHOW, e);
                                break;
                            default:
                                throw new Error('Action: ' + t + ' not supported');
                        }
                        return this;
                    }),
                    (e.prototype.dispatchShareAction = function (t, e) {
                        this.app.dispatch(u.actionWrapper({
                            type: t,
                            group: s.Group.Share,
                            payload: i({ id: this.id }, e),
                        }));
                    }),
                    e);
            })(u.ActionSet);
            (e.Share = c),
                (e.create = function (t) {
                    return new c(t);
                }),
                (e.show = function () {
                    return u.actionWrapper({ group: s.Group.Share, type: a.SHOW });
                }),
                (e.close = function () {
                    return u.actionWrapper({ group: s.Group.Share, type: a.CLOSE });
                });
        },
        function (t, e, r) {
            'use strict';
            var n, o = (this && this.__extends) ||
                ((n = function (t, e) {
                    return (n =
                        Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (t, e) {
                                    t.__proto__ = e;
                                }) ||
                            function (t, e) {
                                for (var r in e)
                                    e.hasOwnProperty(r) && (t[r] = e[r]);
                            })(t, e);
                }),
                    function (t, e) {
                        function r() {
                            this.constructor = t;
                        }
                        n(t, e),
                            (t.prototype =
                                null === e
                                    ? Object.create(e)
                                    : ((r.prototype = e.prototype), new r()));
                    }), i = (this && this.__assign) ||
                function () {
                    return (i =
                        Object.assign ||
                            function (t) {
                                for (var e, r = 1, n = arguments.length; r < n; r++)
                                    for (var o in (e = arguments[r]))
                                        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                                return t;
                            }).apply(this, arguments);
                };
            Object.defineProperty(e, '__esModule', { value: !0 }),
                (e.create = e.NavigationMenu = e.update = e.Action = void 0);
            var a, s = r(10), u = r(0), c = r(1), p = ['Navigation_Menu'];
            function f(t) {
                return u.actionWrapper({
                    payload: t,
                    group: c.Group.Menu,
                    type: a.UPDATE,
                });
            }
            !(function (t) {
                (t.UPDATE = 'APP::MENU::NAVIGATION_MENU::UPDATE'),
                    (t.LINK_UPDATE = 'APP::MENU::NAVIGATION_MENU::LINK::UPDATE');
            })((a = e.Action || (e.Action = {}))),
                (e.update = f);
            var h = (function (t) {
                function e(e, r) {
                    var n = t.call(this, e, 'Navigation_Menu', c.Group.Menu) || this;
                    return (n.items = []), n.set(r), n;
                }
                return (o(e, t),
                    Object.defineProperty(e.prototype, 'options', {
                        get: function () {
                            return { items: this.itemsOptions, active: this.activeOptions };
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, 'payload', {
                        get: function () {
                            return i(i({}, this.options), {
                                active: this.active,
                                items: this.items,
                                id: this.id,
                            });
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    (e.prototype.set = function (t, e) {
                        void 0 === e && (e = !0);
                        var r = u.getMergedProps(this.options, t), n = r.items, o = r.active;
                        return (this.setItems(n),
                            (this.activeOptions = o),
                            (this.active = o && o.id),
                            e && this.dispatch(a.UPDATE),
                            this);
                    }),
                    (e.prototype.dispatch = function (t) {
                        switch (t) {
                            case a.UPDATE:
                                this.app.dispatch(f(this.payload));
                        }
                        return this;
                    }),
                    (e.prototype.updateItem = function (t) {
                        if (this.items) {
                            var e = this.items.find(function (e) {
                                return e.id === t.id;
                            });
                            e && u.updateActionFromPayload(e, t) && this.dispatch(a.UPDATE);
                        }
                    }),
                    (e.prototype.setItems = function (t) {
                        var e = this, r = t || [], n = this.itemsOptions || [];
                        (this.itemsOptions = this.getUpdatedChildActions(r, n)),
                            (this.items = this.itemsOptions
                                ? this.itemsOptions.map(function (t) {
                                    return (e.addChild(t, e.group, p),
                                        e.subscribeToChild(t, s.Action.UPDATE, e.updateItem),
                                        t.payload);
                                })
                                : []);
                    }),
                    e);
            })(u.ActionSetWithChildren);
            (e.NavigationMenu = h),
                (e.create = function (t, e) {
                    return new h(t, e);
                });
        },
        function (t, e, r) {
            'use strict';
            var n, o = (this && this.__extends) ||
                ((n = function (t, e) {
                    return (n =
                        Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (t, e) {
                                    t.__proto__ = e;
                                }) ||
                            function (t, e) {
                                for (var r in e)
                                    e.hasOwnProperty(r) && (t[r] = e[r]);
                            })(t, e);
                }),
                    function (t, e) {
                        function r() {
                            this.constructor = t;
                        }
                        n(t, e),
                            (t.prototype =
                                null === e
                                    ? Object.create(e)
                                    : ((r.prototype = e.prototype), new r()));
                    }), i = (this && this.__assign) ||
                function () {
                    return (i =
                        Object.assign ||
                            function (t) {
                                for (var e, r = 1, n = arguments.length; r < n; r++)
                                    for (var o in (e = arguments[r]))
                                        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                                return t;
                            }).apply(this, arguments);
                };
            Object.defineProperty(e, '__esModule', { value: !0 }),
                (e.create = e.ChannelMenu = e.update = e.Action = void 0);
            var a, s = r(10), u = r(0), c = r(1), p = ['Channel_Menu'];
            function f(t) {
                return u.actionWrapper({
                    payload: t,
                    group: c.Group.Menu,
                    type: a.UPDATE,
                });
            }
            !(function (t) {
                (t.UPDATE = 'APP::MENU::CHANNEL_MENU::UPDATE'),
                    (t.LINK_UPDATE = 'APP::MENU::CHANNEL_MENU::LINK::UPDATE');
            })((a = e.Action || (e.Action = {}))),
                (e.update = f);
            var h = (function (t) {
                function e(e, r) {
                    var n = t.call(this, e, 'Channel_Menu', c.Group.Menu) || this;
                    return (n.items = []), n.set(r), n;
                }
                return (o(e, t),
                    Object.defineProperty(e.prototype, 'options', {
                        get: function () {
                            return { items: this.itemsOptions, active: this.activeOptions };
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, 'payload', {
                        get: function () {
                            return i(i({}, this.options), {
                                active: this.active,
                                items: this.items,
                                id: this.id,
                            });
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    (e.prototype.set = function (t, e) {
                        void 0 === e && (e = !0);
                        var r = u.getMergedProps(this.options, t), n = r.items, o = r.active;
                        return (this.setItems(n),
                            (this.activeOptions = o),
                            (this.active = o && o.id),
                            e && this.dispatch(a.UPDATE),
                            this);
                    }),
                    (e.prototype.dispatch = function (t) {
                        switch (t) {
                            case a.UPDATE:
                                this.app.dispatch(f(this.payload));
                        }
                        return this;
                    }),
                    (e.prototype.updateItem = function (t) {
                        if (this.items) {
                            var e = this.items.find(function (e) {
                                return e.id === t.id;
                            });
                            e && u.updateActionFromPayload(e, t) && this.dispatch(a.UPDATE);
                        }
                    }),
                    (e.prototype.setItems = function (t) {
                        var e = this, r = t || [], n = this.itemsOptions || [];
                        (this.itemsOptions = this.getUpdatedChildActions(r, n)),
                            (this.items = this.itemsOptions
                                ? this.itemsOptions.map(function (t) {
                                    return (e.addChild(t, e.group, p),
                                        e.subscribeToChild(t, s.Action.UPDATE, e.updateItem),
                                        t.payload);
                                })
                                : []);
                    }),
                    e);
            })(u.ActionSetWithChildren);
            (e.ChannelMenu = h),
                (e.create = function (t, e) {
                    return new h(t, e);
                });
        },
        function (t, e, r) {
            'use strict';
            var n, o = (this && this.__extends) ||
                ((n = function (t, e) {
                    return (n =
                        Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (t, e) {
                                    t.__proto__ = e;
                                }) ||
                            function (t, e) {
                                for (var r in e)
                                    e.hasOwnProperty(r) && (t[r] = e[r]);
                            })(t, e);
                }),
                    function (t, e) {
                        function r() {
                            this.constructor = t;
                        }
                        n(t, e),
                            (t.prototype =
                                null === e
                                    ? Object.create(e)
                                    : ((r.prototype = e.prototype), new r()));
                    });
            Object.defineProperty(e, '__esModule', { value: !0 }),
                (e.create = e.Pos = e.close = e.Action = void 0);
            var i, a = r(0), s = r(1);
            function u() {
                return a.actionWrapper({ group: s.Group.Pos, type: i.CLOSE });
            }
            !(function (t) {
                (t.CLOSE = 'APP::POS::CLOSE'),
                    (t.LOCATION_UPDATE = 'APP::POS::LOCATION::UPDATE'),
                    (t.USER_UPDATE = 'APP::POS::USER::UPDATE'),
                    (t.DEVICE_UPDATE = 'APP::POS::DEVICE::UPDATE');
            })((i = e.Action || (e.Action = {}))),
                (e.close = u);
            var c = (function (t) {
                function e(e) {
                    return t.call(this, e, s.Group.Pos, s.Group.Pos) || this;
                }
                return (o(e, t),
                    (e.prototype.dispatch = function (t) {
                        switch (t) {
                            case i.CLOSE:
                                this.app.dispatch(u());
                        }
                        return this;
                    }),
                    e);
            })(a.ActionSet);
            (e.Pos = c),
                (e.create = function (t) {
                    return new c(t);
                });
        },
        function (t, e, r) {
            'use strict';
            var n, o = (this && this.__extends) ||
                ((n = function (t, e) {
                    return (n =
                        Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (t, e) {
                                    t.__proto__ = e;
                                }) ||
                            function (t, e) {
                                for (var r in e)
                                    e.hasOwnProperty(r) && (t[r] = e[r]);
                            })(t, e);
                }),
                    function (t, e) {
                        function r() {
                            this.constructor = t;
                        }
                        n(t, e),
                            (t.prototype =
                                null === e
                                    ? Object.create(e)
                                    : ((r.prototype = e.prototype), new r()));
                    }), i = (this && this.__assign) ||
                function () {
                    return (i =
                        Object.assign ||
                            function (t) {
                                for (var e, r = 1, n = arguments.length; r < n; r++)
                                    for (var o in (e = arguments[r]))
                                        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                                return t;
                            }).apply(this, arguments);
                };
            Object.defineProperty(e, '__esModule', { value: !0 }),
                (e.create =
                    e.MarketingExternalActivityTopBar =
                        e.update =
                            e.clickActionButton =
                                e.MarketingActivityStatusBadgeType =
                                    e.Action =
                                        void 0);
            var a, s = r(4), u = r(6), c = r(0), p = r(1);
            !(function (t) {
                (t.UPDATE = 'APP::MARKETING_EXTERNAL_ACTIVITY_TOP_BAR::UPDATE'),
                    (t.BUTTON_CLICK =
                        'APP::MARKETING_EXTERNAL_ACTIVITY_TOP_BAR::BUTTONS::BUTTON::CLICK'),
                    (t.BUTTON_UPDATE =
                        'APP::MARKETING_EXTERNAL_ACTIVITY_TOP_BAR::BUTTONS::BUTTON::UPDATE');
            })((a = e.Action || (e.Action = {}))),
                (function (t) {
                    (t.Default = 'DEFAULT'),
                        (t.Success = 'SUCCESS'),
                        (t.Attention = 'ATTENTION'),
                        (t.Warning = 'WARNING'),
                        (t.Info = 'INFO');
                })(e.MarketingActivityStatusBadgeType ||
                    (e.MarketingActivityStatusBadgeType = {}));
            var f = {
                group: p.Group.MarketingExternalActivityTopBar,
                subgroups: ['Buttons'],
            };
            function h(t) {
                return c.actionWrapper({
                    payload: t,
                    group: p.Group.MarketingExternalActivityTopBar,
                    type: a.UPDATE,
                });
            }
            (e.clickActionButton = function (t, e) {
                var r = p.ComponentType.Button, n = i({ id: t, type: r }, f);
                return s.clickButton(p.Group.MarketingExternalActivityTopBar, n, e);
            }),
                (e.update = h);
            var d = (function (t) {
                function e(e, r) {
                    var n = t.call(this, e, p.Group.MarketingExternalActivityTopBar, p.Group.MarketingExternalActivityTopBar) || this;
                    return n.set(r), n;
                }
                return (o(e, t),
                    Object.defineProperty(e.prototype, 'buttons', {
                        get: function () {
                            if (this.primary || this.secondary)
                                return { primary: this.primary, secondary: this.secondary };
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, 'buttonsOptions', {
                        get: function () {
                            if (this.primaryOptions || this.secondaryOptions)
                                return {
                                    primary: this.primaryOptions,
                                    secondary: this.secondaryOptions,
                                };
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, 'options', {
                        get: function () {
                            return {
                                title: this.title,
                                status: this.status,
                                saving: this.saving,
                                saved: this.saved,
                                buttons: this.buttonsOptions,
                            };
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, 'payload', {
                        get: function () {
                            return i(i({}, this.options), {
                                buttons: this.buttons,
                                id: this.id,
                            });
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    (e.prototype.set = function (t, e) {
                        void 0 === e && (e = !0);
                        var r = c.getMergedProps(this.options, t), n = r.title, o = r.buttons, i = r.saved, s = r.saving, u = r.status;
                        return ((this.title = n),
                            (this.saving = s),
                            (this.saved = i),
                            (this.status = u),
                            this.setPrimaryButton(o ? o.primary : void 0),
                            this.setSecondaryButtons(o ? o.secondary : void 0),
                            e && this.dispatch(a.UPDATE),
                            this);
                    }),
                    (e.prototype.dispatch = function (t) {
                        switch (t) {
                            case a.UPDATE:
                                this.app.dispatch(h(this.payload));
                        }
                        return this;
                    }),
                    (e.prototype.getButton = function (t, e, r) {
                        return u.getSingleButton(this, t, e, r);
                    }),
                    (e.prototype.updatePrimaryButton = function (t) {
                        this.primary &&
                            c.updateActionFromPayload(this.primary, t) &&
                            this.dispatch(a.UPDATE);
                    }),
                    (e.prototype.updateSecondaryButtons = function (t) {
                        if (this.secondary) {
                            var e = this.secondary.find(function (e) {
                                return e.id === t.id;
                            });
                            if (e)
                                c.updateActionFromPayload(e, t) && this.dispatch(a.UPDATE);
                        }
                    }),
                    (e.prototype.setPrimaryButton = function (t) {
                        (this.primaryOptions = this.getChildButton(t, this.primaryOptions)),
                            (this.primary = this.primaryOptions
                                ? this.getButton(this.primaryOptions, f.subgroups, this.updatePrimaryButton)
                                : void 0);
                    }),
                    (e.prototype.setSecondaryButtons = function (t) {
                        var e = this, r = t || [], n = this.secondaryOptions || [];
                        (this.secondaryOptions = this.getUpdatedChildActions(r, n)),
                            (this.secondary = this.secondaryOptions
                                ? this.secondaryOptions.map(function (t) {
                                    return e.getButton(t, f.subgroups, e.updateSecondaryButtons);
                                })
                                : void 0);
                    }),
                    (e.prototype.updateSaving = function (t) {
                        (this.saving = t), this.dispatch(a.UPDATE);
                    }),
                    (e.prototype.updateSaved = function (t) {
                        (this.saved = t), this.dispatch(a.UPDATE);
                    }),
                    (e.prototype.updateStatus = function (t) {
                        (this.status = t), this.dispatch(a.UPDATE);
                    }),
                    (e.prototype.getChildButton = function (t, e) {
                        var r = t ? [t] : [], n = e ? [e] : [], o = this.getUpdatedChildActions(r, n);
                        return o ? o[0] : void 0;
                    }),
                    e);
            })(c.ActionSetWithChildren);
            (e.MarketingExternalActivityTopBar = d),
                (e.create = function (t, e) {
                    return new d(t, e);
                });
        },
        function (t, e, r) {
            'use strict';
            Object.defineProperty(e, '__esModule', { value: !0 }),
                (e.fullPageLoad = e.skeletonPageLoad = e.Action = void 0);
            var n, o = r(1), i = r(0);
            !(function (t) {
                (t.SKELETON_PAGE_LOAD = 'APP::PERFORMANCE::SKELETON_PAGE_LOAD'),
                    (t.FULL_PAGE_LOAD = 'APP::PERFORMANCE::FULL_PAGE_LOAD');
            })((n = e.Action || (e.Action = {}))),
                (e.skeletonPageLoad = function () {
                    return i.actionWrapper({
                        group: o.Group.Performance,
                        type: n.SKELETON_PAGE_LOAD,
                    });
                }),
                (e.fullPageLoad = function () {
                    return i.actionWrapper({
                        group: o.Group.Performance,
                        type: n.FULL_PAGE_LOAD,
                    });
                });
        },
        function (t, e, r) {
            'use strict';
            var n = (this && this.__assign) ||
                function () {
                    return (n =
                        Object.assign ||
                            function (t) {
                                for (var e, r = 1, n = arguments.length; r < n; r++)
                                    for (var o in (e = arguments[r]))
                                        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                                return t;
                            }).apply(this, arguments);
                }, o = (this && this.__importDefault) ||
                function (t) {
                    return t && t.__esModule ? t : { default: t };
                };
            Object.defineProperty(e, '__esModule', { value: !0 }),
                (e.compatibilityCreateApp = e.setClientInterfaceHook = void 0);
            var i = o(r(59)), a = r(5);
            (e.setClientInterfaceHook = function (t) {
                return function (e) {
                    return ((e.clientInterface.name =
                        '@shopify/app-bridge [CDN Compatibility]'),
                        t(e));
                };
            }),
                (e.compatibilityCreateApp = function (t, r) {
                    var o = r(a.isV1Config(t)
                        ? (function (t) {
                            var e = t.shopOrigin + '/admin', r = i.default(e), o = n(n({}, t), { host: r });
                            return delete o.shopOrigin, o;
                        })(t)
                        : t);
                    return (a.isV1Config(t) &&
                        o.hooks.set(a.LifecycleHook.DispatchAction, e.setClientInterfaceHook),
                        o);
                });
        },
        function (t, e, r) {
            (t.exports = r(60).default), (t.exports.default = t.exports);
        },
        function (t, e, r) {
            'use strict';
            (function (t) {
                Object.defineProperty(e, '__esModule', { value: !0 });
                var n = r(65);
                function o(e, r) {
                    return (void 0 === r && (r = 'utf8'),
                        t.isBuffer(e)
                            ? a(e.toString('base64'))
                            : a(t.from(e, r).toString('base64')));
                }
                function i(t) {
                    return ((t = t.toString()),
                        n.default(t).replace(/\-/g, '+').replace(/_/g, '/'));
                }
                function a(t) {
                    return t.replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
                }
                var s = o;
                (s.encode = o),
                    (s.decode = function (e, r) {
                        return (void 0 === r && (r = 'utf8'), t.from(i(e), 'base64').toString(r));
                    }),
                    (s.toBase64 = i),
                    (s.fromBase64 = a),
                    (s.toBuffer = function (e) {
                        return t.from(i(e), 'base64');
                    }),
                    (e.default = s);
            }.call(this, r(23).Buffer));
        },
        function (t, e) {
            var r;
            r = (function () {
                return this;
            })();
            try {
                r = r || new Function('return this')();
            }
            catch (t) {
                'object' == typeof window && (r = window);
            }
            t.exports = r;
        },
        function (t, e, r) {
            'use strict';
            (e.byteLength = function (t) {
                var e = c(t), r = e[0], n = e[1];
                return (3 * (r + n)) / 4 - n;
            }),
                (e.toByteArray = function (t) {
                    var e, r, n = c(t), a = n[0], s = n[1], u = new i((function (t, e, r) {
                        return (3 * (e + r)) / 4 - r;
                    })(0, a, s)), p = 0, f = s > 0 ? a - 4 : a;
                    for (r = 0; r < f; r += 4)
                        (e =
                            (o[t.charCodeAt(r)] << 18) |
                                (o[t.charCodeAt(r + 1)] << 12) |
                                (o[t.charCodeAt(r + 2)] << 6) |
                                o[t.charCodeAt(r + 3)]),
                            (u[p++] = (e >> 16) & 255),
                            (u[p++] = (e >> 8) & 255),
                            (u[p++] = 255 & e);
                    2 === s &&
                        ((e = (o[t.charCodeAt(r)] << 2) | (o[t.charCodeAt(r + 1)] >> 4)),
                            (u[p++] = 255 & e));
                    1 === s &&
                        ((e =
                            (o[t.charCodeAt(r)] << 10) |
                                (o[t.charCodeAt(r + 1)] << 4) |
                                (o[t.charCodeAt(r + 2)] >> 2)),
                            (u[p++] = (e >> 8) & 255),
                            (u[p++] = 255 & e));
                    return u;
                }),
                (e.fromByteArray = function (t) {
                    for (var e, r = t.length, o = r % 3, i = [], a = 0, s = r - o; a < s; a += 16383)
                        i.push(p(t, a, a + 16383 > s ? s : a + 16383));
                    1 === o
                        ? ((e = t[r - 1]), i.push(n[e >> 2] + n[(e << 4) & 63] + '=='))
                        : 2 === o &&
                            ((e = (t[r - 2] << 8) + t[r - 1]),
                                i.push(n[e >> 10] + n[(e >> 4) & 63] + n[(e << 2) & 63] + '='));
                    return i.join('');
                });
            for (var n = [], o = [], i = 'undefined' != typeof Uint8Array ? Uint8Array : Array, a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/', s = 0, u = a.length; s < u; ++s)
                (n[s] = a[s]), (o[a.charCodeAt(s)] = s);
            function c(t) {
                var e = t.length;
                if (e % 4 > 0)
                    throw new Error('Invalid string. Length must be a multiple of 4');
                var r = t.indexOf('=');
                return -1 === r && (r = e), [r, r === e ? 0 : 4 - (r % 4)];
            }
            function p(t, e, r) {
                for (var o, i, a = [], s = e; s < r; s += 3)
                    (o =
                        ((t[s] << 16) & 16711680) +
                            ((t[s + 1] << 8) & 65280) +
                            (255 & t[s + 2])),
                        a.push(n[((i = o) >> 18) & 63] +
                            n[(i >> 12) & 63] +
                            n[(i >> 6) & 63] +
                            n[63 & i]);
                return a.join('');
            }
            (o['-'.charCodeAt(0)] = 62), (o['_'.charCodeAt(0)] = 63);
        },
        function (t, e) {
            /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
            (e.read = function (t, e, r, n, o) {
                var i, a, s = 8 * o - n - 1, u = (1 << s) - 1, c = u >> 1, p = -7, f = r ? o - 1 : 0, h = r ? -1 : 1, d = t[e + f];
                for (f += h, i = d & ((1 << -p) - 1), d >>= -p, p += s; p > 0; i = 256 * i + t[e + f], f += h, p -= 8)
                    ;
                for (a = i & ((1 << -p) - 1), i >>= -p, p += n; p > 0; a = 256 * a + t[e + f], f += h, p -= 8)
                    ;
                if (0 === i)
                    i = 1 - c;
                else {
                    if (i === u)
                        return a ? NaN : (1 / 0) * (d ? -1 : 1);
                    (a += Math.pow(2, n)), (i -= c);
                }
                return (d ? -1 : 1) * a * Math.pow(2, i - n);
            }),
                (e.write = function (t, e, r, n, o, i) {
                    var a, s, u, c = 8 * i - o - 1, p = (1 << c) - 1, f = p >> 1, h = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0, d = n ? 0 : i - 1, l = n ? 1 : -1, y = e < 0 || (0 === e && 1 / e < 0) ? 1 : 0;
                    for (e = Math.abs(e),
                        isNaN(e) || e === 1 / 0
                            ? ((s = isNaN(e) ? 1 : 0), (a = p))
                            : ((a = Math.floor(Math.log(e) / Math.LN2)),
                                e * (u = Math.pow(2, -a)) < 1 && (a--, (u *= 2)),
                                (e += a + f >= 1 ? h / u : h * Math.pow(2, 1 - f)) * u >= 2 &&
                                    (a++, (u /= 2)),
                                a + f >= p
                                    ? ((s = 0), (a = p))
                                    : a + f >= 1
                                        ? ((s = (e * u - 1) * Math.pow(2, o)), (a += f))
                                        : ((s = e * Math.pow(2, f - 1) * Math.pow(2, o)), (a = 0))); o >= 8; t[r + d] = 255 & s, d += l, s /= 256, o -= 8)
                        ;
                    for (a = (a << o) | s, c += o; c > 0; t[r + d] = 255 & a, d += l, a /= 256, c -= 8)
                        ;
                    t[r + d - l] |= 128 * y;
                });
        },
        function (t, e) {
            var r = {}.toString;
            t.exports =
                Array.isArray ||
                    function (t) {
                        return '[object Array]' == r.call(t);
                    };
        },
        function (t, e, r) {
            'use strict';
            (function (t) {
                Object.defineProperty(e, '__esModule', { value: !0 }),
                    (e.default = function (e) {
                        var r = e.length, n = r % 4;
                        if (!n)
                            return e;
                        var o = r, i = 4 - n, a = r + i, s = t.alloc(a);
                        for (s.write(e); i--;)
                            s.write('=', o++);
                        return s.toString();
                    });
            }.call(this, r(23).Buffer));
        },
        function (t, e, r) {
            'use strict';
            var n = (this && this.__createBinding) ||
                (Object.create
                    ? function (t, e, r, n) {
                        void 0 === n && (n = r),
                            Object.defineProperty(t, n, {
                                enumerable: !0,
                                get: function () {
                                    return e[r];
                                },
                            });
                    }
                    : function (t, e, r, n) {
                        void 0 === n && (n = r), (t[n] = e[r]);
                    }), o = (this && this.__exportStar) ||
                function (t, e) {
                    for (var r in t)
                        'default' === r || e.hasOwnProperty(r) || n(e, t, r);
                };
            Object.defineProperty(e, '__esModule', { value: !0 });
            var i = r(5);
            Object.defineProperty(e, 'default', {
                enumerable: !0,
                get: function () {
                    return i.createApp;
                },
            }),
                o(r(15), e),
                o(r(5), e);
        },
    ]);
});
