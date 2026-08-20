var Yf = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function $c(u) {
  return u && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default") ? u.default : u;
}
var Vd = { exports: {} }, Va = {}, Hd = { exports: {} }, rt = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kf;
function f1() {
  if (Kf) return rt;
  Kf = 1;
  var u = Symbol.for("react.element"), d = Symbol.for("react.portal"), w = Symbol.for("react.fragment"), O = Symbol.for("react.strict_mode"), M = Symbol.for("react.profiler"), x = Symbol.for("react.provider"), h = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), C = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), N = Symbol.iterator;
  function k(L) {
    return L === null || typeof L != "object" ? null : (L = N && L[N] || L["@@iterator"], typeof L == "function" ? L : null);
  }
  var _ = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, S = Object.assign, P = {};
  function I(L, X, J) {
    this.props = L, this.context = X, this.refs = P, this.updater = J || _;
  }
  I.prototype.isReactComponent = {}, I.prototype.setState = function(L, X) {
    if (typeof L != "object" && typeof L != "function" && L != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, L, X, "setState");
  }, I.prototype.forceUpdate = function(L) {
    this.updater.enqueueForceUpdate(this, L, "forceUpdate");
  };
  function H() {
  }
  H.prototype = I.prototype;
  function v(L, X, J) {
    this.props = L, this.context = X, this.refs = P, this.updater = J || _;
  }
  var f = v.prototype = new H();
  f.constructor = v, S(f, I.prototype), f.isPureReactComponent = !0;
  var R = Array.isArray, D = Object.prototype.hasOwnProperty, j = { current: null }, b = { key: !0, ref: !0, __self: !0, __source: !0 };
  function F(L, X, J) {
    var ue, ge = {}, se = null, q = null;
    if (X != null) for (ue in X.ref !== void 0 && (q = X.ref), X.key !== void 0 && (se = "" + X.key), X) D.call(X, ue) && !b.hasOwnProperty(ue) && (ge[ue] = X[ue]);
    var te = arguments.length - 2;
    if (te === 1) ge.children = J;
    else if (1 < te) {
      for (var me = Array(te), xe = 0; xe < te; xe++) me[xe] = arguments[xe + 2];
      ge.children = me;
    }
    if (L && L.defaultProps) for (ue in te = L.defaultProps, te) ge[ue] === void 0 && (ge[ue] = te[ue]);
    return { $$typeof: u, type: L, key: se, ref: q, props: ge, _owner: j.current };
  }
  function G(L, X) {
    return { $$typeof: u, type: L.type, key: X, ref: L.ref, props: L.props, _owner: L._owner };
  }
  function U(L) {
    return typeof L == "object" && L !== null && L.$$typeof === u;
  }
  function Q(L) {
    var X = { "=": "=0", ":": "=2" };
    return "$" + L.replace(/[=:]/g, function(J) {
      return X[J];
    });
  }
  var Z = /\/+/g;
  function re(L, X) {
    return typeof L == "object" && L !== null && L.key != null ? Q("" + L.key) : X.toString(36);
  }
  function Y(L, X, J, ue, ge) {
    var se = typeof L;
    (se === "undefined" || se === "boolean") && (L = null);
    var q = !1;
    if (L === null) q = !0;
    else switch (se) {
      case "string":
      case "number":
        q = !0;
        break;
      case "object":
        switch (L.$$typeof) {
          case u:
          case d:
            q = !0;
        }
    }
    if (q) return q = L, ge = ge(q), L = ue === "" ? "." + re(q, 0) : ue, R(ge) ? (J = "", L != null && (J = L.replace(Z, "$&/") + "/"), Y(ge, X, J, "", function(xe) {
      return xe;
    })) : ge != null && (U(ge) && (ge = G(ge, J + (!ge.key || q && q.key === ge.key ? "" : ("" + ge.key).replace(Z, "$&/") + "/") + L)), X.push(ge)), 1;
    if (q = 0, ue = ue === "" ? "." : ue + ":", R(L)) for (var te = 0; te < L.length; te++) {
      se = L[te];
      var me = ue + re(se, te);
      q += Y(se, X, J, me, ge);
    }
    else if (me = k(L), typeof me == "function") for (L = me.call(L), te = 0; !(se = L.next()).done; ) se = se.value, me = ue + re(se, te++), q += Y(se, X, J, me, ge);
    else if (se === "object") throw X = String(L), Error("Objects are not valid as a React child (found: " + (X === "[object Object]" ? "object with keys {" + Object.keys(L).join(", ") + "}" : X) + "). If you meant to render a collection of children, use an array instead.");
    return q;
  }
  function $(L, X, J) {
    if (L == null) return L;
    var ue = [], ge = 0;
    return Y(L, ue, "", "", function(se) {
      return X.call(J, se, ge++);
    }), ue;
  }
  function pe(L) {
    if (L._status === -1) {
      var X = L._result;
      X = X(), X.then(function(J) {
        (L._status === 0 || L._status === -1) && (L._status = 1, L._result = J);
      }, function(J) {
        (L._status === 0 || L._status === -1) && (L._status = 2, L._result = J);
      }), L._status === -1 && (L._status = 0, L._result = X);
    }
    if (L._status === 1) return L._result.default;
    throw L._result;
  }
  var T = { current: null }, z = { transition: null }, W = { ReactCurrentDispatcher: T, ReactCurrentBatchConfig: z, ReactCurrentOwner: j };
  function B() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return rt.Children = { map: $, forEach: function(L, X, J) {
    $(L, function() {
      X.apply(this, arguments);
    }, J);
  }, count: function(L) {
    var X = 0;
    return $(L, function() {
      X++;
    }), X;
  }, toArray: function(L) {
    return $(L, function(X) {
      return X;
    }) || [];
  }, only: function(L) {
    if (!U(L)) throw Error("React.Children.only expected to receive a single React element child.");
    return L;
  } }, rt.Component = I, rt.Fragment = w, rt.Profiler = M, rt.PureComponent = v, rt.StrictMode = O, rt.Suspense = g, rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W, rt.act = B, rt.cloneElement = function(L, X, J) {
    if (L == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + L + ".");
    var ue = S({}, L.props), ge = L.key, se = L.ref, q = L._owner;
    if (X != null) {
      if (X.ref !== void 0 && (se = X.ref, q = j.current), X.key !== void 0 && (ge = "" + X.key), L.type && L.type.defaultProps) var te = L.type.defaultProps;
      for (me in X) D.call(X, me) && !b.hasOwnProperty(me) && (ue[me] = X[me] === void 0 && te !== void 0 ? te[me] : X[me]);
    }
    var me = arguments.length - 2;
    if (me === 1) ue.children = J;
    else if (1 < me) {
      te = Array(me);
      for (var xe = 0; xe < me; xe++) te[xe] = arguments[xe + 2];
      ue.children = te;
    }
    return { $$typeof: u, type: L.type, key: ge, ref: se, props: ue, _owner: q };
  }, rt.createContext = function(L) {
    return L = { $$typeof: h, _currentValue: L, _currentValue2: L, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, L.Provider = { $$typeof: x, _context: L }, L.Consumer = L;
  }, rt.createElement = F, rt.createFactory = function(L) {
    var X = F.bind(null, L);
    return X.type = L, X;
  }, rt.createRef = function() {
    return { current: null };
  }, rt.forwardRef = function(L) {
    return { $$typeof: m, render: L };
  }, rt.isValidElement = U, rt.lazy = function(L) {
    return { $$typeof: E, _payload: { _status: -1, _result: L }, _init: pe };
  }, rt.memo = function(L, X) {
    return { $$typeof: C, type: L, compare: X === void 0 ? null : X };
  }, rt.startTransition = function(L) {
    var X = z.transition;
    z.transition = {};
    try {
      L();
    } finally {
      z.transition = X;
    }
  }, rt.unstable_act = B, rt.useCallback = function(L, X) {
    return T.current.useCallback(L, X);
  }, rt.useContext = function(L) {
    return T.current.useContext(L);
  }, rt.useDebugValue = function() {
  }, rt.useDeferredValue = function(L) {
    return T.current.useDeferredValue(L);
  }, rt.useEffect = function(L, X) {
    return T.current.useEffect(L, X);
  }, rt.useId = function() {
    return T.current.useId();
  }, rt.useImperativeHandle = function(L, X, J) {
    return T.current.useImperativeHandle(L, X, J);
  }, rt.useInsertionEffect = function(L, X) {
    return T.current.useInsertionEffect(L, X);
  }, rt.useLayoutEffect = function(L, X) {
    return T.current.useLayoutEffect(L, X);
  }, rt.useMemo = function(L, X) {
    return T.current.useMemo(L, X);
  }, rt.useReducer = function(L, X, J) {
    return T.current.useReducer(L, X, J);
  }, rt.useRef = function(L) {
    return T.current.useRef(L);
  }, rt.useState = function(L) {
    return T.current.useState(L);
  }, rt.useSyncExternalStore = function(L, X, J) {
    return T.current.useSyncExternalStore(L, X, J);
  }, rt.useTransition = function() {
    return T.current.useTransition();
  }, rt.version = "18.3.1", rt;
}
var Xf;
function Ou() {
  return Xf || (Xf = 1, Hd.exports = f1()), Hd.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qf;
function h1() {
  if (Qf) return Va;
  Qf = 1;
  var u = Ou(), d = Symbol.for("react.element"), w = Symbol.for("react.fragment"), O = Object.prototype.hasOwnProperty, M = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, x = { key: !0, ref: !0, __self: !0, __source: !0 };
  function h(m, g, C) {
    var E, N = {}, k = null, _ = null;
    C !== void 0 && (k = "" + C), g.key !== void 0 && (k = "" + g.key), g.ref !== void 0 && (_ = g.ref);
    for (E in g) O.call(g, E) && !x.hasOwnProperty(E) && (N[E] = g[E]);
    if (m && m.defaultProps) for (E in g = m.defaultProps, g) N[E] === void 0 && (N[E] = g[E]);
    return { $$typeof: d, type: m, key: k, ref: _, props: N, _owner: M.current };
  }
  return Va.Fragment = w, Va.jsx = h, Va.jsxs = h, Va;
}
var bf;
function p1() {
  return bf || (bf = 1, Vd.exports = h1()), Vd.exports;
}
var Ke = p1(), Ie = Ou();
const dr = /* @__PURE__ */ $c(Ie);
var Wc = {}, jd = { exports: {} }, wr = {}, Wd = { exports: {} }, qd = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jf;
function g1() {
  return Jf || (Jf = 1, (function(u) {
    function d(z, W) {
      var B = z.length;
      z.push(W);
      e: for (; 0 < B; ) {
        var L = B - 1 >>> 1, X = z[L];
        if (0 < M(X, W)) z[L] = W, z[B] = X, B = L;
        else break e;
      }
    }
    function w(z) {
      return z.length === 0 ? null : z[0];
    }
    function O(z) {
      if (z.length === 0) return null;
      var W = z[0], B = z.pop();
      if (B !== W) {
        z[0] = B;
        e: for (var L = 0, X = z.length, J = X >>> 1; L < J; ) {
          var ue = 2 * (L + 1) - 1, ge = z[ue], se = ue + 1, q = z[se];
          if (0 > M(ge, B)) se < X && 0 > M(q, ge) ? (z[L] = q, z[se] = B, L = se) : (z[L] = ge, z[ue] = B, L = ue);
          else if (se < X && 0 > M(q, B)) z[L] = q, z[se] = B, L = se;
          else break e;
        }
      }
      return W;
    }
    function M(z, W) {
      var B = z.sortIndex - W.sortIndex;
      return B !== 0 ? B : z.id - W.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var x = performance;
      u.unstable_now = function() {
        return x.now();
      };
    } else {
      var h = Date, m = h.now();
      u.unstable_now = function() {
        return h.now() - m;
      };
    }
    var g = [], C = [], E = 1, N = null, k = 3, _ = !1, S = !1, P = !1, I = typeof setTimeout == "function" ? setTimeout : null, H = typeof clearTimeout == "function" ? clearTimeout : null, v = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function f(z) {
      for (var W = w(C); W !== null; ) {
        if (W.callback === null) O(C);
        else if (W.startTime <= z) O(C), W.sortIndex = W.expirationTime, d(g, W);
        else break;
        W = w(C);
      }
    }
    function R(z) {
      if (P = !1, f(z), !S) if (w(g) !== null) S = !0, pe(D);
      else {
        var W = w(C);
        W !== null && T(R, W.startTime - z);
      }
    }
    function D(z, W) {
      S = !1, P && (P = !1, H(F), F = -1), _ = !0;
      var B = k;
      try {
        for (f(W), N = w(g); N !== null && (!(N.expirationTime > W) || z && !Q()); ) {
          var L = N.callback;
          if (typeof L == "function") {
            N.callback = null, k = N.priorityLevel;
            var X = L(N.expirationTime <= W);
            W = u.unstable_now(), typeof X == "function" ? N.callback = X : N === w(g) && O(g), f(W);
          } else O(g);
          N = w(g);
        }
        if (N !== null) var J = !0;
        else {
          var ue = w(C);
          ue !== null && T(R, ue.startTime - W), J = !1;
        }
        return J;
      } finally {
        N = null, k = B, _ = !1;
      }
    }
    var j = !1, b = null, F = -1, G = 5, U = -1;
    function Q() {
      return !(u.unstable_now() - U < G);
    }
    function Z() {
      if (b !== null) {
        var z = u.unstable_now();
        U = z;
        var W = !0;
        try {
          W = b(!0, z);
        } finally {
          W ? re() : (j = !1, b = null);
        }
      } else j = !1;
    }
    var re;
    if (typeof v == "function") re = function() {
      v(Z);
    };
    else if (typeof MessageChannel < "u") {
      var Y = new MessageChannel(), $ = Y.port2;
      Y.port1.onmessage = Z, re = function() {
        $.postMessage(null);
      };
    } else re = function() {
      I(Z, 0);
    };
    function pe(z) {
      b = z, j || (j = !0, re());
    }
    function T(z, W) {
      F = I(function() {
        z(u.unstable_now());
      }, W);
    }
    u.unstable_IdlePriority = 5, u.unstable_ImmediatePriority = 1, u.unstable_LowPriority = 4, u.unstable_NormalPriority = 3, u.unstable_Profiling = null, u.unstable_UserBlockingPriority = 2, u.unstable_cancelCallback = function(z) {
      z.callback = null;
    }, u.unstable_continueExecution = function() {
      S || _ || (S = !0, pe(D));
    }, u.unstable_forceFrameRate = function(z) {
      0 > z || 125 < z ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : G = 0 < z ? Math.floor(1e3 / z) : 5;
    }, u.unstable_getCurrentPriorityLevel = function() {
      return k;
    }, u.unstable_getFirstCallbackNode = function() {
      return w(g);
    }, u.unstable_next = function(z) {
      switch (k) {
        case 1:
        case 2:
        case 3:
          var W = 3;
          break;
        default:
          W = k;
      }
      var B = k;
      k = W;
      try {
        return z();
      } finally {
        k = B;
      }
    }, u.unstable_pauseExecution = function() {
    }, u.unstable_requestPaint = function() {
    }, u.unstable_runWithPriority = function(z, W) {
      switch (z) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          z = 3;
      }
      var B = k;
      k = z;
      try {
        return W();
      } finally {
        k = B;
      }
    }, u.unstable_scheduleCallback = function(z, W, B) {
      var L = u.unstable_now();
      switch (typeof B == "object" && B !== null ? (B = B.delay, B = typeof B == "number" && 0 < B ? L + B : L) : B = L, z) {
        case 1:
          var X = -1;
          break;
        case 2:
          X = 250;
          break;
        case 5:
          X = 1073741823;
          break;
        case 4:
          X = 1e4;
          break;
        default:
          X = 5e3;
      }
      return X = B + X, z = { id: E++, callback: W, priorityLevel: z, startTime: B, expirationTime: X, sortIndex: -1 }, B > L ? (z.sortIndex = B, d(C, z), w(g) === null && z === w(C) && (P ? (H(F), F = -1) : P = !0, T(R, B - L))) : (z.sortIndex = X, d(g, z), S || _ || (S = !0, pe(D))), z;
    }, u.unstable_shouldYield = Q, u.unstable_wrapCallback = function(z) {
      var W = k;
      return function() {
        var B = k;
        k = W;
        try {
          return z.apply(this, arguments);
        } finally {
          k = B;
        }
      };
    };
  })(qd)), qd;
}
var Zf;
function cf() {
  return Zf || (Zf = 1, Wd.exports = g1()), Wd.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $f;
function m1() {
  if ($f) return wr;
  $f = 1;
  var u = Ou(), d = cf();
  function w(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, i = 1; i < arguments.length; i++) t += "&args[]=" + encodeURIComponent(arguments[i]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var O = /* @__PURE__ */ new Set(), M = {};
  function x(e, t) {
    h(e, t), h(e + "Capture", t);
  }
  function h(e, t) {
    for (M[e] = t, e = 0; e < t.length; e++) O.add(t[e]);
  }
  var m = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), g = Object.prototype.hasOwnProperty, C = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, E = {}, N = {};
  function k(e) {
    return g.call(N, e) ? !0 : g.call(E, e) ? !1 : C.test(e) ? N[e] = !0 : (E[e] = !0, !1);
  }
  function _(e, t, i, s) {
    if (i !== null && i.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return s ? !1 : i !== null ? !i.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function S(e, t, i, s) {
    if (t === null || typeof t > "u" || _(e, t, i, s)) return !0;
    if (s) return !1;
    if (i !== null) switch (i.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
    return !1;
  }
  function P(e, t, i, s, a, p, A) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = s, this.attributeNamespace = a, this.mustUseProperty = i, this.propertyName = e, this.type = t, this.sanitizeURL = p, this.removeEmptyString = A;
  }
  var I = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    I[e] = new P(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    I[t] = new P(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    I[e] = new P(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    I[e] = new P(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    I[e] = new P(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    I[e] = new P(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    I[e] = new P(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    I[e] = new P(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    I[e] = new P(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var H = /[\-:]([a-z])/g;
  function v(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      H,
      v
    );
    I[t] = new P(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(H, v);
    I[t] = new P(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(H, v);
    I[t] = new P(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    I[e] = new P(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), I.xlinkHref = new P("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    I[e] = new P(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function f(e, t, i, s) {
    var a = I.hasOwnProperty(t) ? I[t] : null;
    (a !== null ? a.type !== 0 : s || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (S(t, i, a, s) && (i = null), s || a === null ? k(t) && (i === null ? e.removeAttribute(t) : e.setAttribute(t, "" + i)) : a.mustUseProperty ? e[a.propertyName] = i === null ? a.type === 3 ? !1 : "" : i : (t = a.attributeName, s = a.attributeNamespace, i === null ? e.removeAttribute(t) : (a = a.type, i = a === 3 || a === 4 && i === !0 ? "" : "" + i, s ? e.setAttributeNS(s, t, i) : e.setAttribute(t, i))));
  }
  var R = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, D = Symbol.for("react.element"), j = Symbol.for("react.portal"), b = Symbol.for("react.fragment"), F = Symbol.for("react.strict_mode"), G = Symbol.for("react.profiler"), U = Symbol.for("react.provider"), Q = Symbol.for("react.context"), Z = Symbol.for("react.forward_ref"), re = Symbol.for("react.suspense"), Y = Symbol.for("react.suspense_list"), $ = Symbol.for("react.memo"), pe = Symbol.for("react.lazy"), T = Symbol.for("react.offscreen"), z = Symbol.iterator;
  function W(e) {
    return e === null || typeof e != "object" ? null : (e = z && e[z] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var B = Object.assign, L;
  function X(e) {
    if (L === void 0) try {
      throw Error();
    } catch (i) {
      var t = i.stack.trim().match(/\n( *(at )?)/);
      L = t && t[1] || "";
    }
    return `
` + L + e;
  }
  var J = !1;
  function ue(e, t) {
    if (!e || J) return "";
    J = !0;
    var i = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t) if (t = function() {
        throw Error();
      }, Object.defineProperty(t.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(t, []);
        } catch (de) {
          var s = de;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (de) {
          s = de;
        }
        e.call(t.prototype);
      }
      else {
        try {
          throw Error();
        } catch (de) {
          s = de;
        }
        e();
      }
    } catch (de) {
      if (de && s && typeof de.stack == "string") {
        for (var a = de.stack.split(`
`), p = s.stack.split(`
`), A = a.length - 1, K = p.length - 1; 1 <= A && 0 <= K && a[A] !== p[K]; ) K--;
        for (; 1 <= A && 0 <= K; A--, K--) if (a[A] !== p[K]) {
          if (A !== 1 || K !== 1)
            do
              if (A--, K--, 0 > K || a[A] !== p[K]) {
                var ee = `
` + a[A].replace(" at new ", " at ");
                return e.displayName && ee.includes("<anonymous>") && (ee = ee.replace("<anonymous>", e.displayName)), ee;
              }
            while (1 <= A && 0 <= K);
          break;
        }
      }
    } finally {
      J = !1, Error.prepareStackTrace = i;
    }
    return (e = e ? e.displayName || e.name : "") ? X(e) : "";
  }
  function ge(e) {
    switch (e.tag) {
      case 5:
        return X(e.type);
      case 16:
        return X("Lazy");
      case 13:
        return X("Suspense");
      case 19:
        return X("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = ue(e.type, !1), e;
      case 11:
        return e = ue(e.type.render, !1), e;
      case 1:
        return e = ue(e.type, !0), e;
      default:
        return "";
    }
  }
  function se(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case b:
        return "Fragment";
      case j:
        return "Portal";
      case G:
        return "Profiler";
      case F:
        return "StrictMode";
      case re:
        return "Suspense";
      case Y:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case Q:
        return (e.displayName || "Context") + ".Consumer";
      case U:
        return (e._context.displayName || "Context") + ".Provider";
      case Z:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case $:
        return t = e.displayName || null, t !== null ? t : se(e.type) || "Memo";
      case pe:
        t = e._payload, e = e._init;
        try {
          return se(e(t));
        } catch {
        }
    }
    return null;
  }
  function q(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return se(t);
      case 8:
        return t === F ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function te(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function me(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function xe(e) {
    var t = me(e) ? "checked" : "value", i = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), s = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof i < "u" && typeof i.get == "function" && typeof i.set == "function") {
      var a = i.get, p = i.set;
      return Object.defineProperty(e, t, { configurable: !0, get: function() {
        return a.call(this);
      }, set: function(A) {
        s = "" + A, p.call(this, A);
      } }), Object.defineProperty(e, t, { enumerable: i.enumerable }), { getValue: function() {
        return s;
      }, setValue: function(A) {
        s = "" + A;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[t];
      } };
    }
  }
  function Pe(e) {
    e._valueTracker || (e._valueTracker = xe(e));
  }
  function Be(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var i = t.getValue(), s = "";
    return e && (s = me(e) ? e.checked ? "true" : "false" : e.value), e = s, e !== i ? (t.setValue(e), !0) : !1;
  }
  function Ge(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function be(e, t) {
    var i = t.checked;
    return B({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: i ?? e._wrapperState.initialChecked });
  }
  function je(e, t) {
    var i = t.defaultValue == null ? "" : t.defaultValue, s = t.checked != null ? t.checked : t.defaultChecked;
    i = te(t.value != null ? t.value : i), e._wrapperState = { initialChecked: s, initialValue: i, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function dt(e, t) {
    t = t.checked, t != null && f(e, "checked", t, !1);
  }
  function st(e, t) {
    dt(e, t);
    var i = te(t.value), s = t.type;
    if (i != null) s === "number" ? (i === 0 && e.value === "" || e.value != i) && (e.value = "" + i) : e.value !== "" + i && (e.value = "" + i);
    else if (s === "submit" || s === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? bn(e, t.type, i) : t.hasOwnProperty("defaultValue") && bn(e, t.type, te(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function Je(e, t, i) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var s = t.type;
      if (!(s !== "submit" && s !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, i || t === e.value || (e.value = t), e.defaultValue = t;
    }
    i = e.name, i !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, i !== "" && (e.name = i);
  }
  function bn(e, t, i) {
    (t !== "number" || Ge(e.ownerDocument) !== e) && (i == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + i && (e.defaultValue = "" + i));
  }
  var Rt = Array.isArray;
  function Hn(e, t, i, s) {
    if (e = e.options, t) {
      t = {};
      for (var a = 0; a < i.length; a++) t["$" + i[a]] = !0;
      for (i = 0; i < e.length; i++) a = t.hasOwnProperty("$" + e[i].value), e[i].selected !== a && (e[i].selected = a), a && s && (e[i].defaultSelected = !0);
    } else {
      for (i = "" + te(i), t = null, a = 0; a < e.length; a++) {
        if (e[a].value === i) {
          e[a].selected = !0, s && (e[a].defaultSelected = !0);
          return;
        }
        t !== null || e[a].disabled || (t = e[a]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function ft(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(w(91));
    return B({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function dn(e, t) {
    var i = t.value;
    if (i == null) {
      if (i = t.children, t = t.defaultValue, i != null) {
        if (t != null) throw Error(w(92));
        if (Rt(i)) {
          if (1 < i.length) throw Error(w(93));
          i = i[0];
        }
        t = i;
      }
      t == null && (t = ""), i = t;
    }
    e._wrapperState = { initialValue: te(i) };
  }
  function Vt(e, t) {
    var i = te(t.value), s = te(t.defaultValue);
    i != null && (i = "" + i, i !== e.value && (e.value = i), t.defaultValue == null && e.defaultValue !== i && (e.defaultValue = i)), s != null && (e.defaultValue = "" + s);
  }
  function fr(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function Kt(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Mn(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Kt(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var Xt, _n = (function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, i, s, a) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, i, s, a);
      });
    } : e;
  })(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (Xt = Xt || document.createElement("div"), Xt.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Xt.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function Ot(e, t) {
    if (t) {
      var i = e.firstChild;
      if (i && i === e.lastChild && i.nodeType === 3) {
        i.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Lt = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, Yr = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Lt).forEach(function(e) {
    Yr.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), Lt[t] = Lt[e];
    });
  });
  function ye(e, t, i) {
    return t == null || typeof t == "boolean" || t === "" ? "" : i || typeof t != "number" || t === 0 || Lt.hasOwnProperty(e) && Lt[e] ? ("" + t).trim() : t + "px";
  }
  function ke(e, t) {
    e = e.style;
    for (var i in t) if (t.hasOwnProperty(i)) {
      var s = i.indexOf("--") === 0, a = ye(i, t[i], s);
      i === "float" && (i = "cssFloat"), s ? e.setProperty(i, a) : e[i] = a;
    }
  }
  var Ne = B({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Re(e, t) {
    if (t) {
      if (Ne[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(w(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(w(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(w(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(w(62));
    }
  }
  function $e(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Ze = null;
  function It(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Jn = null, Sn = null, rn = null;
  function Oi(e) {
    if (e = Rs(e)) {
      if (typeof Jn != "function") throw Error(w(280));
      var t = e.stateNode;
      t && (t = an(t), Jn(e.stateNode, e.type, t));
    }
  }
  function ui(e) {
    Sn ? rn ? rn.push(e) : rn = [e] : Sn = e;
  }
  function ci() {
    if (Sn) {
      var e = Sn, t = rn;
      if (rn = Sn = null, Oi(e), t) for (e = 0; e < t.length; e++) Oi(t[e]);
    }
  }
  function qs(e, t) {
    return e(t);
  }
  function po() {
  }
  var go = !1;
  function as(e, t, i) {
    if (go) return e(t, i);
    go = !0;
    try {
      return qs(e, t, i);
    } finally {
      go = !1, (Sn !== null || rn !== null) && (po(), ci());
    }
  }
  function us(e, t) {
    var i = e.stateNode;
    if (i === null) return null;
    var s = an(i);
    if (s === null) return null;
    i = s[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (s = !s.disabled) || (e = e.type, s = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !s;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (i && typeof i != "function") throw Error(w(231, t, typeof i));
    return i;
  }
  var Xl = !1;
  if (m) try {
    var cs = {};
    Object.defineProperty(cs, "passive", { get: function() {
      Xl = !0;
    } }), window.addEventListener("test", cs, cs), window.removeEventListener("test", cs, cs);
  } catch {
    Xl = !1;
  }
  function Iu(e, t, i, s, a, p, A, K, ee) {
    var de = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(i, de);
    } catch (_e) {
      this.onError(_e);
    }
  }
  var Ii = !1, Ys = null, Ks = !1, mo = null, rd = { onError: function(e) {
    Ii = !0, Ys = e;
  } };
  function id(e, t, i, s, a, p, A, K, ee) {
    Ii = !1, Ys = null, Iu.apply(rd, arguments);
  }
  function od(e, t, i, s, a, p, A, K, ee) {
    if (id.apply(this, arguments), Ii) {
      if (Ii) {
        var de = Ys;
        Ii = !1, Ys = null;
      } else throw Error(w(198));
      Ks || (Ks = !0, mo = de);
    }
  }
  function Di(e) {
    var t = e, i = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do
        t = e, (t.flags & 4098) !== 0 && (i = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? i : null;
  }
  function Du(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function zu(e) {
    if (Di(e) !== e) throw Error(w(188));
  }
  function sd(e) {
    var t = e.alternate;
    if (!t) {
      if (t = Di(e), t === null) throw Error(w(188));
      return t !== e ? null : e;
    }
    for (var i = e, s = t; ; ) {
      var a = i.return;
      if (a === null) break;
      var p = a.alternate;
      if (p === null) {
        if (s = a.return, s !== null) {
          i = s;
          continue;
        }
        break;
      }
      if (a.child === p.child) {
        for (p = a.child; p; ) {
          if (p === i) return zu(a), e;
          if (p === s) return zu(a), t;
          p = p.sibling;
        }
        throw Error(w(188));
      }
      if (i.return !== s.return) i = a, s = p;
      else {
        for (var A = !1, K = a.child; K; ) {
          if (K === i) {
            A = !0, i = a, s = p;
            break;
          }
          if (K === s) {
            A = !0, s = a, i = p;
            break;
          }
          K = K.sibling;
        }
        if (!A) {
          for (K = p.child; K; ) {
            if (K === i) {
              A = !0, i = p, s = a;
              break;
            }
            if (K === s) {
              A = !0, s = p, i = a;
              break;
            }
            K = K.sibling;
          }
          if (!A) throw Error(w(189));
        }
      }
      if (i.alternate !== s) throw Error(w(190));
    }
    if (i.tag !== 3) throw Error(w(188));
    return i.stateNode.current === i ? e : t;
  }
  function Gu(e) {
    return e = sd(e), e !== null ? Uu(e) : null;
  }
  function Uu(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Uu(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Bu = d.unstable_scheduleCallback, Vu = d.unstable_cancelCallback, ld = d.unstable_shouldYield, ad = d.unstable_requestPaint, Gt = d.unstable_now, Ql = d.unstable_getCurrentPriorityLevel, zi = d.unstable_ImmediatePriority, Xs = d.unstable_UserBlockingPriority, yo = d.unstable_NormalPriority, ud = d.unstable_LowPriority, Qs = d.unstable_IdlePriority, Kr = null, fn = null;
  function Ct(e) {
    if (fn && typeof fn.onCommitFiberRoot == "function") try {
      fn.onCommitFiberRoot(Kr, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var tt = Math.clz32 ? Math.clz32 : jn, di = Math.log, wn = Math.LN2;
  function jn(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (di(e) / wn | 0) | 0;
  }
  var Lr = 64, Xr = 4194304;
  function on(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function Gi(e, t) {
    var i = e.pendingLanes;
    if (i === 0) return 0;
    var s = 0, a = e.suspendedLanes, p = e.pingedLanes, A = i & 268435455;
    if (A !== 0) {
      var K = A & ~a;
      K !== 0 ? s = on(K) : (p &= A, p !== 0 && (s = on(p)));
    } else A = i & ~a, A !== 0 ? s = on(A) : p !== 0 && (s = on(p));
    if (s === 0) return 0;
    if (t !== 0 && t !== s && (t & a) === 0 && (a = s & -s, p = t & -t, a >= p || a === 16 && (p & 4194240) !== 0)) return t;
    if ((s & 4) !== 0 && (s |= i & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= s; 0 < t; ) i = 31 - tt(t), a = 1 << i, s |= e[i], t &= ~a;
    return s;
  }
  function Hu(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function ju(e, t) {
    for (var i = e.suspendedLanes, s = e.pingedLanes, a = e.expirationTimes, p = e.pendingLanes; 0 < p; ) {
      var A = 31 - tt(p), K = 1 << A, ee = a[A];
      ee === -1 ? ((K & i) === 0 || (K & s) !== 0) && (a[A] = Hu(K, t)) : ee <= t && (e.expiredLanes |= K), p &= ~K;
    }
  }
  function vo(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function bl() {
    var e = Lr;
    return Lr <<= 1, (Lr & 4194240) === 0 && (Lr = 64), e;
  }
  function Zn(e) {
    for (var t = [], i = 0; 31 > i; i++) t.push(e);
    return t;
  }
  function ds(e, t, i) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - tt(t), e[t] = i;
  }
  function cd(e, t) {
    var i = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var s = e.eventTimes;
    for (e = e.expirationTimes; 0 < i; ) {
      var a = 31 - tt(i), p = 1 << a;
      t[a] = 0, s[a] = -1, e[a] = -1, i &= ~p;
    }
  }
  function Jl(e, t) {
    var i = e.entangledLanes |= t;
    for (e = e.entanglements; i; ) {
      var s = 31 - tt(i), a = 1 << s;
      a & t | e[s] & t && (e[s] |= t), i &= ~a;
    }
  }
  var ut = 0;
  function fs(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var _o, So, Wu, qu, bs, Js = !1, wo = [], hr = null, fi = null, Ar = null, nt = /* @__PURE__ */ new Map(), xo = /* @__PURE__ */ new Map(), Or = [], Yu = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Ku(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        hr = null;
        break;
      case "dragenter":
      case "dragleave":
        fi = null;
        break;
      case "mouseover":
      case "mouseout":
        Ar = null;
        break;
      case "pointerover":
      case "pointerout":
        nt.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        xo.delete(t.pointerId);
    }
  }
  function hs(e, t, i, s, a, p) {
    return e === null || e.nativeEvent !== p ? (e = { blockedOn: t, domEventName: i, eventSystemFlags: s, nativeEvent: p, targetContainers: [a] }, t !== null && (t = Rs(t), t !== null && So(t)), e) : (e.eventSystemFlags |= s, t = e.targetContainers, a !== null && t.indexOf(a) === -1 && t.push(a), e);
  }
  function sn(e, t, i, s, a) {
    switch (t) {
      case "focusin":
        return hr = hs(hr, e, t, i, s, a), !0;
      case "dragenter":
        return fi = hs(fi, e, t, i, s, a), !0;
      case "mouseover":
        return Ar = hs(Ar, e, t, i, s, a), !0;
      case "pointerover":
        var p = a.pointerId;
        return nt.set(p, hs(nt.get(p) || null, e, t, i, s, a)), !0;
      case "gotpointercapture":
        return p = a.pointerId, xo.set(p, hs(xo.get(p) || null, e, t, i, s, a)), !0;
    }
    return !1;
  }
  function Zs(e) {
    var t = xi(e.target);
    if (t !== null) {
      var i = Di(t);
      if (i !== null) {
        if (t = i.tag, t === 13) {
          if (t = Du(i), t !== null) {
            e.blockedOn = t, bs(e.priority, function() {
              Wu(i);
            });
            return;
          }
        } else if (t === 3 && i.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = i.tag === 3 ? i.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function $s(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var i = nl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (i === null) {
        i = e.nativeEvent;
        var s = new i.constructor(i.type, i);
        Ze = s, i.target.dispatchEvent(s), Ze = null;
      } else return t = Rs(i), t !== null && So(t), e.blockedOn = i, !1;
      t.shift();
    }
    return !0;
  }
  function el(e, t, i) {
    $s(e) && i.delete(t);
  }
  function dd() {
    Js = !1, hr !== null && $s(hr) && (hr = null), fi !== null && $s(fi) && (fi = null), Ar !== null && $s(Ar) && (Ar = null), nt.forEach(el), xo.forEach(el);
  }
  function hi(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Js || (Js = !0, d.unstable_scheduleCallback(d.unstable_NormalPriority, dd)));
  }
  function Wn(e) {
    function t(a) {
      return hi(a, e);
    }
    if (0 < wo.length) {
      hi(wo[0], e);
      for (var i = 1; i < wo.length; i++) {
        var s = wo[i];
        s.blockedOn === e && (s.blockedOn = null);
      }
    }
    for (hr !== null && hi(hr, e), fi !== null && hi(fi, e), Ar !== null && hi(Ar, e), nt.forEach(t), xo.forEach(t), i = 0; i < Or.length; i++) s = Or[i], s.blockedOn === e && (s.blockedOn = null);
    for (; 0 < Or.length && (i = Or[0], i.blockedOn === null); ) Zs(i), i.blockedOn === null && Or.shift();
  }
  var Co = R.ReactCurrentBatchConfig, tl = !0;
  function kr(e, t, i, s) {
    var a = ut, p = Co.transition;
    Co.transition = null;
    try {
      ut = 1, ko(e, t, i, s);
    } finally {
      ut = a, Co.transition = p;
    }
  }
  function Qr(e, t, i, s) {
    var a = ut, p = Co.transition;
    Co.transition = null;
    try {
      ut = 4, ko(e, t, i, s);
    } finally {
      ut = a, Co.transition = p;
    }
  }
  function ko(e, t, i, s) {
    if (tl) {
      var a = nl(e, t, i, s);
      if (a === null) vl(e, t, s, Eo, i), Ku(e, s);
      else if (sn(a, e, t, i, s)) s.stopPropagation();
      else if (Ku(e, s), t & 4 && -1 < Yu.indexOf(e)) {
        for (; a !== null; ) {
          var p = Rs(a);
          if (p !== null && _o(p), p = nl(e, t, i, s), p === null && vl(e, t, s, Eo, i), p === a) break;
          a = p;
        }
        a !== null && s.stopPropagation();
      } else vl(e, t, s, null, i);
    }
  }
  var Eo = null;
  function nl(e, t, i, s) {
    if (Eo = null, e = It(s), e = xi(e), e !== null) if (t = Di(e), t === null) e = null;
    else if (i = t.tag, i === 13) {
      if (e = Du(t), e !== null) return e;
      e = null;
    } else if (i === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return Eo = e, null;
  }
  function Xu(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Ql()) {
          case zi:
            return 1;
          case Xs:
            return 4;
          case yo:
          case ud:
            return 16;
          case Qs:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var hn = null, pi = null, br = null;
  function ps() {
    if (br) return br;
    var e, t = pi, i = t.length, s, a = "value" in hn ? hn.value : hn.textContent, p = a.length;
    for (e = 0; e < i && t[e] === a[e]; e++) ;
    var A = i - e;
    for (s = 1; s <= A && t[i - s] === a[p - s]; s++) ;
    return br = a.slice(e, 1 < s ? 1 - s : void 0);
  }
  function Ui(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Ln() {
    return !0;
  }
  function $n() {
    return !1;
  }
  function Qt(e) {
    function t(i, s, a, p, A) {
      this._reactName = i, this._targetInst = a, this.type = s, this.nativeEvent = p, this.target = A, this.currentTarget = null;
      for (var K in e) e.hasOwnProperty(K) && (i = e[K], this[K] = i ? i(p) : p[K]);
      return this.isDefaultPrevented = (p.defaultPrevented != null ? p.defaultPrevented : p.returnValue === !1) ? Ln : $n, this.isPropagationStopped = $n, this;
    }
    return B(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var i = this.nativeEvent;
      i && (i.preventDefault ? i.preventDefault() : typeof i.returnValue != "unknown" && (i.returnValue = !1), this.isDefaultPrevented = Ln);
    }, stopPropagation: function() {
      var i = this.nativeEvent;
      i && (i.stopPropagation ? i.stopPropagation() : typeof i.cancelBubble != "unknown" && (i.cancelBubble = !0), this.isPropagationStopped = Ln);
    }, persist: function() {
    }, isPersistent: Ln }), t;
  }
  var qn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Er = Qt(qn), Pr = B({}, qn, { view: 0, detail: 0 }), Qu = Qt(Pr), gs, ms, pn, An = B({}, Pr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Vi, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== pn && (pn && e.type === "mousemove" ? (gs = e.screenX - pn.screenX, ms = e.screenY - pn.screenY) : ms = gs = 0, pn = e), gs);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : ms;
  } }), kt = Qt(An), ys = B({}, An, { dataTransfer: 0 }), Rr = Qt(ys), bu = B({}, Pr, { relatedTarget: 0 }), rl = Qt(bu), Zl = B({}, qn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), $l = Qt(Zl), Ju = B({}, qn, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), il = Qt(Ju), Zu = B({}, qn, { data: 0 }), Bi = Qt(Zu), ea = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, fd = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, ol = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function hd(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = ol[e]) ? !!t[e] : !1;
  }
  function Vi() {
    return hd;
  }
  var sl = B({}, Pr, { key: function(e) {
    if (e.key) {
      var t = ea[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = Ui(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? fd[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Vi, charCode: function(e) {
    return e.type === "keypress" ? Ui(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Ui(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), $u = Qt(sl), ec = B({}, An, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Hi = Qt(ec), tc = B({}, Pr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Vi }), ll = Qt(tc), al = B({}, qn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Po = Qt(al), ta = B({}, An, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), na = Qt(ta), nc = [9, 13, 27, 32], vs = m && "CompositionEvent" in window, ji = null;
  m && "documentMode" in document && (ji = document.documentMode);
  var Ro = m && "TextEvent" in window && !ji, er = m && (!vs || ji && 8 < ji && 11 >= ji), gi = " ", ul = !1;
  function ra(e, t) {
    switch (e) {
      case "keyup":
        return nc.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Tr(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var tr = !1;
  function ia(e, t) {
    switch (e) {
      case "compositionend":
        return Tr(t);
      case "keypress":
        return t.which !== 32 ? null : (ul = !0, gi);
      case "textInput":
        return e = t.data, e === gi && ul ? null : e;
      default:
        return null;
    }
  }
  function rc(e, t) {
    if (tr) return e === "compositionend" || !vs && ra(e, t) ? (e = ps(), br = pi = hn = null, tr = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return er && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Jr = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Zr(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Jr[e.type] : t === "textarea";
  }
  function _s(e, t, i, s) {
    ui(s), t = _l(t, "onChange"), 0 < t.length && (i = new Er("onChange", "change", null, i, s), e.push({ event: i, listeners: t }));
  }
  var To = null, mi = null;
  function ic(e) {
    ga(e, 0);
  }
  function yi(e) {
    var t = Jt(e);
    if (Be(t)) return e;
  }
  function pr(e, t) {
    if (e === "change") return t;
  }
  var No = !1;
  if (m) {
    var vi;
    if (m) {
      var gr = "oninput" in document;
      if (!gr) {
        var cl = document.createElement("div");
        cl.setAttribute("oninput", "return;"), gr = typeof cl.oninput == "function";
      }
      vi = gr;
    } else vi = !1;
    No = vi && (!document.documentMode || 9 < document.documentMode);
  }
  function Wi() {
    To && (To.detachEvent("onpropertychange", oa), mi = To = null);
  }
  function oa(e) {
    if (e.propertyName === "value" && yi(mi)) {
      var t = [];
      _s(t, mi, e, It(e)), as(ic, t);
    }
  }
  function sa(e, t, i) {
    e === "focusin" ? (Wi(), To = t, mi = i, To.attachEvent("onpropertychange", oa)) : e === "focusout" && Wi();
  }
  function At(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return yi(mi);
  }
  function dl(e, t) {
    if (e === "click") return yi(t);
  }
  function la(e, t) {
    if (e === "input" || e === "change") return yi(t);
  }
  function aa(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Yn = typeof Object.is == "function" ? Object.is : aa;
  function qi(e, t) {
    if (Yn(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var i = Object.keys(e), s = Object.keys(t);
    if (i.length !== s.length) return !1;
    for (s = 0; s < i.length; s++) {
      var a = i[s];
      if (!g.call(t, a) || !Yn(e[a], t[a])) return !1;
    }
    return !0;
  }
  function _i(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Tt(e, t) {
    var i = _i(e);
    e = 0;
    for (var s; i; ) {
      if (i.nodeType === 3) {
        if (s = e + i.textContent.length, e <= t && s >= t) return { node: i, offset: t - e };
        e = s;
      }
      e: {
        for (; i; ) {
          if (i.nextSibling) {
            i = i.nextSibling;
            break e;
          }
          i = i.parentNode;
        }
        i = void 0;
      }
      i = _i(i);
    }
  }
  function Ht(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Ht(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function bt() {
    for (var e = window, t = Ge(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var i = typeof t.contentWindow.location.href == "string";
      } catch {
        i = !1;
      }
      if (i) e = t.contentWindow;
      else break;
      t = Ge(e.document);
    }
    return t;
  }
  function Fo(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function Ss(e) {
    var t = bt(), i = e.focusedElem, s = e.selectionRange;
    if (t !== i && i && i.ownerDocument && Ht(i.ownerDocument.documentElement, i)) {
      if (s !== null && Fo(i)) {
        if (t = s.start, e = s.end, e === void 0 && (e = t), "selectionStart" in i) i.selectionStart = t, i.selectionEnd = Math.min(e, i.value.length);
        else if (e = (t = i.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var a = i.textContent.length, p = Math.min(s.start, a);
          s = s.end === void 0 ? p : Math.min(s.end, a), !e.extend && p > s && (a = s, s = p, p = a), a = Tt(i, p);
          var A = Tt(
            i,
            s
          );
          a && A && (e.rangeCount !== 1 || e.anchorNode !== a.node || e.anchorOffset !== a.offset || e.focusNode !== A.node || e.focusOffset !== A.offset) && (t = t.createRange(), t.setStart(a.node, a.offset), e.removeAllRanges(), p > s ? (e.addRange(t), e.extend(A.node, A.offset)) : (t.setEnd(A.node, A.offset), e.addRange(t)));
        }
      }
      for (t = [], e = i; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof i.focus == "function" && i.focus(), i = 0; i < t.length; i++) e = t[i], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var ws = m && "documentMode" in document && 11 >= document.documentMode, Mo = null, ln = null, Yi = null, xs = !1;
  function fl(e, t, i) {
    var s = i.window === i ? i.document : i.nodeType === 9 ? i : i.ownerDocument;
    xs || Mo == null || Mo !== Ge(s) || (s = Mo, "selectionStart" in s && Fo(s) ? s = { start: s.selectionStart, end: s.selectionEnd } : (s = (s.ownerDocument && s.ownerDocument.defaultView || window).getSelection(), s = { anchorNode: s.anchorNode, anchorOffset: s.anchorOffset, focusNode: s.focusNode, focusOffset: s.focusOffset }), Yi && qi(Yi, s) || (Yi = s, s = _l(ln, "onSelect"), 0 < s.length && (t = new Er("onSelect", "select", null, t, i), e.push({ event: t, listeners: s }), t.target = Mo)));
  }
  function nr(e, t) {
    var i = {};
    return i[e.toLowerCase()] = t.toLowerCase(), i["Webkit" + e] = "webkit" + t, i["Moz" + e] = "moz" + t, i;
  }
  var gn = { animationend: nr("Animation", "AnimationEnd"), animationiteration: nr("Animation", "AnimationIteration"), animationstart: nr("Animation", "AnimationStart"), transitionend: nr("Transition", "TransitionEnd") }, Ki = {}, hl = {};
  m && (hl = document.createElement("div").style, "AnimationEvent" in window || (delete gn.animationend.animation, delete gn.animationiteration.animation, delete gn.animationstart.animation), "TransitionEvent" in window || delete gn.transitionend.transition);
  function Lo(e) {
    if (Ki[e]) return Ki[e];
    if (!gn[e]) return e;
    var t = gn[e], i;
    for (i in t) if (t.hasOwnProperty(i) && i in hl) return Ki[e] = t[i];
    return e;
  }
  var ua = Lo("animationend"), ca = Lo("animationiteration"), da = Lo("animationstart"), fa = Lo("transitionend"), ha = /* @__PURE__ */ new Map(), pa = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function $r(e, t) {
    ha.set(e, t), x(t, [e]);
  }
  for (var pl = 0; pl < pa.length; pl++) {
    var Xi = pa[pl], oc = Xi.toLowerCase(), gl = Xi[0].toUpperCase() + Xi.slice(1);
    $r(oc, "on" + gl);
  }
  $r(ua, "onAnimationEnd"), $r(ca, "onAnimationIteration"), $r(da, "onAnimationStart"), $r("dblclick", "onDoubleClick"), $r("focusin", "onFocus"), $r("focusout", "onBlur"), $r(fa, "onTransitionEnd"), h("onMouseEnter", ["mouseout", "mouseover"]), h("onMouseLeave", ["mouseout", "mouseover"]), h("onPointerEnter", ["pointerout", "pointerover"]), h("onPointerLeave", ["pointerout", "pointerover"]), x("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), x("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), x("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), x("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), x("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), x("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Si = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), sc = new Set("cancel close invalid load scroll toggle".split(" ").concat(Si));
  function ml(e, t, i) {
    var s = e.type || "unknown-event";
    e.currentTarget = i, od(s, t, void 0, e), e.currentTarget = null;
  }
  function ga(e, t) {
    t = (t & 4) !== 0;
    for (var i = 0; i < e.length; i++) {
      var s = e[i], a = s.event;
      s = s.listeners;
      e: {
        var p = void 0;
        if (t) for (var A = s.length - 1; 0 <= A; A--) {
          var K = s[A], ee = K.instance, de = K.currentTarget;
          if (K = K.listener, ee !== p && a.isPropagationStopped()) break e;
          ml(a, K, de), p = ee;
        }
        else for (A = 0; A < s.length; A++) {
          if (K = s[A], ee = K.instance, de = K.currentTarget, K = K.listener, ee !== p && a.isPropagationStopped()) break e;
          ml(a, K, de), p = ee;
        }
      }
    }
    if (Ks) throw e = mo, Ks = !1, mo = null, e;
  }
  function _t(e, t) {
    var i = t[wl];
    i === void 0 && (i = t[wl] = /* @__PURE__ */ new Set());
    var s = e + "__bubble";
    i.has(s) || (ma(t, e, 2, !1), i.add(s));
  }
  function yl(e, t, i) {
    var s = 0;
    t && (s |= 4), ma(i, e, s, t);
  }
  var Cs = "_reactListening" + Math.random().toString(36).slice(2);
  function Qi(e) {
    if (!e[Cs]) {
      e[Cs] = !0, O.forEach(function(i) {
        i !== "selectionchange" && (sc.has(i) || yl(i, !1, e), yl(i, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Cs] || (t[Cs] = !0, yl("selectionchange", !1, t));
    }
  }
  function ma(e, t, i, s) {
    switch (Xu(t)) {
      case 1:
        var a = kr;
        break;
      case 4:
        a = Qr;
        break;
      default:
        a = ko;
    }
    i = a.bind(null, t, i, e), a = void 0, !Xl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (a = !0), s ? a !== void 0 ? e.addEventListener(t, i, { capture: !0, passive: a }) : e.addEventListener(t, i, !0) : a !== void 0 ? e.addEventListener(t, i, { passive: a }) : e.addEventListener(t, i, !1);
  }
  function vl(e, t, i, s, a) {
    var p = s;
    if ((t & 1) === 0 && (t & 2) === 0 && s !== null) e: for (; ; ) {
      if (s === null) return;
      var A = s.tag;
      if (A === 3 || A === 4) {
        var K = s.stateNode.containerInfo;
        if (K === a || K.nodeType === 8 && K.parentNode === a) break;
        if (A === 4) for (A = s.return; A !== null; ) {
          var ee = A.tag;
          if ((ee === 3 || ee === 4) && (ee = A.stateNode.containerInfo, ee === a || ee.nodeType === 8 && ee.parentNode === a)) return;
          A = A.return;
        }
        for (; K !== null; ) {
          if (A = xi(K), A === null) return;
          if (ee = A.tag, ee === 5 || ee === 6) {
            s = p = A;
            continue e;
          }
          K = K.parentNode;
        }
      }
      s = s.return;
    }
    as(function() {
      var de = p, _e = It(i), Se = [];
      e: {
        var ve = ha.get(e);
        if (ve !== void 0) {
          var Me = Er, Oe = e;
          switch (e) {
            case "keypress":
              if (Ui(i) === 0) break e;
            case "keydown":
            case "keyup":
              Me = $u;
              break;
            case "focusin":
              Oe = "focus", Me = rl;
              break;
            case "focusout":
              Oe = "blur", Me = rl;
              break;
            case "beforeblur":
            case "afterblur":
              Me = rl;
              break;
            case "click":
              if (i.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              Me = kt;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Me = Rr;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Me = ll;
              break;
            case ua:
            case ca:
            case da:
              Me = $l;
              break;
            case fa:
              Me = Po;
              break;
            case "scroll":
              Me = Qu;
              break;
            case "wheel":
              Me = na;
              break;
            case "copy":
            case "cut":
            case "paste":
              Me = il;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Me = Hi;
          }
          var De = (t & 4) !== 0, tn = !De && e === "scroll", le = De ? ve !== null ? ve + "Capture" : null : ve;
          De = [];
          for (var ne = de, ae; ne !== null; ) {
            ae = ne;
            var Ce = ae.stateNode;
            if (ae.tag === 5 && Ce !== null && (ae = Ce, le !== null && (Ce = us(ne, le), Ce != null && De.push(Ao(ne, Ce, ae)))), tn) break;
            ne = ne.return;
          }
          0 < De.length && (ve = new Me(ve, Oe, null, i, _e), Se.push({ event: ve, listeners: De }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (ve = e === "mouseover" || e === "pointerover", Me = e === "mouseout" || e === "pointerout", ve && i !== Ze && (Oe = i.relatedTarget || i.fromElement) && (xi(Oe) || Oe[Dr])) break e;
          if ((Me || ve) && (ve = _e.window === _e ? _e : (ve = _e.ownerDocument) ? ve.defaultView || ve.parentWindow : window, Me ? (Oe = i.relatedTarget || i.toElement, Me = de, Oe = Oe ? xi(Oe) : null, Oe !== null && (tn = Di(Oe), Oe !== tn || Oe.tag !== 5 && Oe.tag !== 6) && (Oe = null)) : (Me = null, Oe = de), Me !== Oe)) {
            if (De = kt, Ce = "onMouseLeave", le = "onMouseEnter", ne = "mouse", (e === "pointerout" || e === "pointerover") && (De = Hi, Ce = "onPointerLeave", le = "onPointerEnter", ne = "pointer"), tn = Me == null ? ve : Jt(Me), ae = Oe == null ? ve : Jt(Oe), ve = new De(Ce, ne + "leave", Me, i, _e), ve.target = tn, ve.relatedTarget = ae, Ce = null, xi(_e) === de && (De = new De(le, ne + "enter", Oe, i, _e), De.target = ae, De.relatedTarget = tn, Ce = De), tn = Ce, Me && Oe) t: {
              for (De = Me, le = Oe, ne = 0, ae = De; ae; ae = bi(ae)) ne++;
              for (ae = 0, Ce = le; Ce; Ce = bi(Ce)) ae++;
              for (; 0 < ne - ae; ) De = bi(De), ne--;
              for (; 0 < ae - ne; ) le = bi(le), ae--;
              for (; ne--; ) {
                if (De === le || le !== null && De === le.alternate) break t;
                De = bi(De), le = bi(le);
              }
              De = null;
            }
            else De = null;
            Me !== null && lc(Se, ve, Me, De, !1), Oe !== null && tn !== null && lc(Se, tn, Oe, De, !0);
          }
        }
        e: {
          if (ve = de ? Jt(de) : window, Me = ve.nodeName && ve.nodeName.toLowerCase(), Me === "select" || Me === "input" && ve.type === "file") var ze = pr;
          else if (Zr(ve)) if (No) ze = la;
          else {
            ze = At;
            var Ve = sa;
          }
          else (Me = ve.nodeName) && Me.toLowerCase() === "input" && (ve.type === "checkbox" || ve.type === "radio") && (ze = dl);
          if (ze && (ze = ze(e, de))) {
            _s(Se, ze, i, _e);
            break e;
          }
          Ve && Ve(e, ve, de), e === "focusout" && (Ve = ve._wrapperState) && Ve.controlled && ve.type === "number" && bn(ve, "number", ve.value);
        }
        switch (Ve = de ? Jt(de) : window, e) {
          case "focusin":
            (Zr(Ve) || Ve.contentEditable === "true") && (Mo = Ve, ln = de, Yi = null);
            break;
          case "focusout":
            Yi = ln = Mo = null;
            break;
          case "mousedown":
            xs = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            xs = !1, fl(Se, i, _e);
            break;
          case "selectionchange":
            if (ws) break;
          case "keydown":
          case "keyup":
            fl(Se, i, _e);
        }
        var He;
        if (vs) e: {
          switch (e) {
            case "compositionstart":
              var We = "onCompositionStart";
              break e;
            case "compositionend":
              We = "onCompositionEnd";
              break e;
            case "compositionupdate":
              We = "onCompositionUpdate";
              break e;
          }
          We = void 0;
        }
        else tr ? ra(e, i) && (We = "onCompositionEnd") : e === "keydown" && i.keyCode === 229 && (We = "onCompositionStart");
        We && (er && i.locale !== "ko" && (tr || We !== "onCompositionStart" ? We === "onCompositionEnd" && tr && (He = ps()) : (hn = _e, pi = "value" in hn ? hn.value : hn.textContent, tr = !0)), Ve = _l(de, We), 0 < Ve.length && (We = new Bi(We, e, null, i, _e), Se.push({ event: We, listeners: Ve }), He ? We.data = He : (He = Tr(i), He !== null && (We.data = He)))), (He = Ro ? ia(e, i) : rc(e, i)) && (de = _l(de, "onBeforeInput"), 0 < de.length && (_e = new Bi("onBeforeInput", "beforeinput", null, i, _e), Se.push({ event: _e, listeners: de }), _e.data = He));
      }
      ga(Se, t);
    });
  }
  function Ao(e, t, i) {
    return { instance: e, listener: t, currentTarget: i };
  }
  function _l(e, t) {
    for (var i = t + "Capture", s = []; e !== null; ) {
      var a = e, p = a.stateNode;
      a.tag === 5 && p !== null && (a = p, p = us(e, i), p != null && s.unshift(Ao(e, p, a)), p = us(e, t), p != null && s.push(Ao(e, p, a))), e = e.return;
    }
    return s;
  }
  function bi(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function lc(e, t, i, s, a) {
    for (var p = t._reactName, A = []; i !== null && i !== s; ) {
      var K = i, ee = K.alternate, de = K.stateNode;
      if (ee !== null && ee === s) break;
      K.tag === 5 && de !== null && (K = de, a ? (ee = us(i, p), ee != null && A.unshift(Ao(i, ee, K))) : a || (ee = us(i, p), ee != null && A.push(Ao(i, ee, K)))), i = i.return;
    }
    A.length !== 0 && e.push({ event: t, listeners: A });
  }
  var pd = /\r\n?/g, ac = /\u0000|\uFFFD/g;
  function ya(e) {
    return (typeof e == "string" ? e : "" + e).replace(pd, `
`).replace(ac, "");
  }
  function ks(e, t, i) {
    if (t = ya(t), ya(e) !== t && i) throw Error(w(425));
  }
  function Ji() {
  }
  var va = null, _a = null;
  function Sa(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var rr = typeof setTimeout == "function" ? setTimeout : void 0, wa = typeof clearTimeout == "function" ? clearTimeout : void 0, Es = typeof Promise == "function" ? Promise : void 0, uc = typeof queueMicrotask == "function" ? queueMicrotask : typeof Es < "u" ? function(e) {
    return Es.resolve(null).then(e).catch(cc);
  } : rr;
  function cc(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Sl(e, t) {
    var i = t, s = 0;
    do {
      var a = i.nextSibling;
      if (e.removeChild(i), a && a.nodeType === 8) if (i = a.data, i === "/$") {
        if (s === 0) {
          e.removeChild(a), Wn(t);
          return;
        }
        s--;
      } else i !== "$" && i !== "$?" && i !== "$!" || s++;
      i = a;
    } while (i);
    Wn(t);
  }
  function Ir(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function Zi(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var i = e.data;
        if (i === "$" || i === "$!" || i === "$?") {
          if (t === 0) return e;
          t--;
        } else i === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var wi = Math.random().toString(36).slice(2), mr = "__reactFiber$" + wi, Ps = "__reactProps$" + wi, Dr = "__reactContainer$" + wi, wl = "__reactEvents$" + wi, dc = "__reactListeners$" + wi, fc = "__reactHandles$" + wi;
  function xi(e) {
    var t = e[mr];
    if (t) return t;
    for (var i = e.parentNode; i; ) {
      if (t = i[Dr] || i[mr]) {
        if (i = t.alternate, t.child !== null || i !== null && i.child !== null) for (e = Zi(e); e !== null; ) {
          if (i = e[mr]) return i;
          e = Zi(e);
        }
        return t;
      }
      e = i, i = e.parentNode;
    }
    return null;
  }
  function Rs(e) {
    return e = e[mr] || e[Dr], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function Jt(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(w(33));
  }
  function an(e) {
    return e[Ps] || null;
  }
  var xl = [], $i = -1;
  function ei(e) {
    return { current: e };
  }
  function St(e) {
    0 > $i || (e.current = xl[$i], xl[$i] = null, $i--);
  }
  function yt(e, t) {
    $i++, xl[$i] = e.current, e.current = t;
  }
  var zr = {}, mn = ei(zr), xn = ei(!1), Ci = zr;
  function eo(e, t) {
    var i = e.type.contextTypes;
    if (!i) return zr;
    var s = e.stateNode;
    if (s && s.__reactInternalMemoizedUnmaskedChildContext === t) return s.__reactInternalMemoizedMaskedChildContext;
    var a = {}, p;
    for (p in i) a[p] = t[p];
    return s && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = a), a;
  }
  function Cn(e) {
    return e = e.childContextTypes, e != null;
  }
  function Oo() {
    St(xn), St(mn);
  }
  function xa(e, t, i) {
    if (mn.current !== zr) throw Error(w(168));
    yt(mn, t), yt(xn, i);
  }
  function Cl(e, t, i) {
    var s = e.stateNode;
    if (t = t.childContextTypes, typeof s.getChildContext != "function") return i;
    s = s.getChildContext();
    for (var a in s) if (!(a in t)) throw Error(w(108, q(e) || "Unknown", a));
    return B({}, i, s);
  }
  function to(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || zr, Ci = mn.current, yt(mn, e), yt(xn, xn.current), !0;
  }
  function hc(e, t, i) {
    var s = e.stateNode;
    if (!s) throw Error(w(169));
    i ? (e = Cl(e, t, Ci), s.__reactInternalMemoizedMergedChildContext = e, St(xn), St(mn), yt(mn, e)) : St(xn), yt(xn, i);
  }
  var Gr = null, Io = !1, kl = !1;
  function Ts(e) {
    Gr === null ? Gr = [e] : Gr.push(e);
  }
  function ti(e) {
    Io = !0, Ts(e);
  }
  function ki() {
    if (!kl && Gr !== null) {
      kl = !0;
      var e = 0, t = ut;
      try {
        var i = Gr;
        for (ut = 1; e < i.length; e++) {
          var s = i[e];
          do
            s = s(!0);
          while (s !== null);
        }
        Gr = null, Io = !1;
      } catch (a) {
        throw Gr !== null && (Gr = Gr.slice(e + 1)), Bu(zi, ki), a;
      } finally {
        ut = t, kl = !1;
      }
    }
    return null;
  }
  var On = [], no = 0, Ei = null, Pi = 0, In = [], Dn = 0, Ri = null, ir = 1, Nt = "";
  function ro(e, t) {
    On[no++] = Pi, On[no++] = Ei, Ei = e, Pi = t;
  }
  function pc(e, t, i) {
    In[Dn++] = ir, In[Dn++] = Nt, In[Dn++] = Ri, Ri = e;
    var s = ir;
    e = Nt;
    var a = 32 - tt(s) - 1;
    s &= ~(1 << a), i += 1;
    var p = 32 - tt(t) + a;
    if (30 < p) {
      var A = a - a % 5;
      p = (s & (1 << A) - 1).toString(32), s >>= A, a -= A, ir = 1 << 32 - tt(t) + a | i << a | s, Nt = p + e;
    } else ir = 1 << p | i << a | s, Nt = e;
  }
  function Do(e) {
    e.return !== null && (ro(e, 1), pc(e, 1, 0));
  }
  function un(e) {
    for (; e === Ei; ) Ei = On[--no], On[no] = null, Pi = On[--no], On[no] = null;
    for (; e === Ri; ) Ri = In[--Dn], In[Dn] = null, Nt = In[--Dn], In[Dn] = null, ir = In[--Dn], In[Dn] = null;
  }
  var or = null, Ee = null, pt = !1, sr = null;
  function Ca(e, t) {
    var i = qr(5, null, null, 0);
    i.elementType = "DELETED", i.stateNode = t, i.return = e, t = e.deletions, t === null ? (e.deletions = [i], e.flags |= 16) : t.push(i);
  }
  function gc(e, t) {
    switch (e.tag) {
      case 5:
        var i = e.type;
        return t = t.nodeType !== 1 || i.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, or = e, Ee = Ir(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, or = e, Ee = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (i = Ri !== null ? { id: ir, overflow: Nt } : null, e.memoizedState = { dehydrated: t, treeContext: i, retryLane: 1073741824 }, i = qr(18, null, null, 0), i.stateNode = t, i.return = e, e.child = i, or = e, Ee = null, !0) : !1;
      default:
        return !1;
    }
  }
  function io(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function zo(e) {
    if (pt) {
      var t = Ee;
      if (t) {
        var i = t;
        if (!gc(e, t)) {
          if (io(e)) throw Error(w(418));
          t = Ir(i.nextSibling);
          var s = or;
          t && gc(e, t) ? Ca(s, i) : (e.flags = e.flags & -4097 | 2, pt = !1, or = e);
        }
      } else {
        if (io(e)) throw Error(w(418));
        e.flags = e.flags & -4097 | 2, pt = !1, or = e;
      }
    }
  }
  function El(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    or = e;
  }
  function Ns(e) {
    if (e !== or) return !1;
    if (!pt) return El(e), pt = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Sa(e.type, e.memoizedProps)), t && (t = Ee)) {
      if (io(e)) throw ka(), Error(w(418));
      for (; t; ) Ca(e, t), t = Ir(t.nextSibling);
    }
    if (El(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(w(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var i = e.data;
            if (i === "/$") {
              if (t === 0) {
                Ee = Ir(e.nextSibling);
                break e;
              }
              t--;
            } else i !== "$" && i !== "$!" && i !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        Ee = null;
      }
    } else Ee = or ? Ir(e.stateNode.nextSibling) : null;
    return !0;
  }
  function ka() {
    for (var e = Ee; e; ) e = Ir(e.nextSibling);
  }
  function oo() {
    Ee = or = null, pt = !1;
  }
  function Fs(e) {
    sr === null ? sr = [e] : sr.push(e);
  }
  var Ea = R.ReactCurrentBatchConfig;
  function Ut(e, t, i) {
    if (e = i.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (i._owner) {
        if (i = i._owner, i) {
          if (i.tag !== 1) throw Error(w(309));
          var s = i.stateNode;
        }
        if (!s) throw Error(w(147, e));
        var a = s, p = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === p ? t.ref : (t = function(A) {
          var K = a.refs;
          A === null ? delete K[p] : K[p] = A;
        }, t._stringRef = p, t);
      }
      if (typeof e != "string") throw Error(w(284));
      if (!i._owner) throw Error(w(290, e));
    }
    return e;
  }
  function Kn(e, t) {
    throw e = Object.prototype.toString.call(t), Error(w(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function Nr(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Pl(e) {
    function t(le, ne) {
      if (e) {
        var ae = le.deletions;
        ae === null ? (le.deletions = [ne], le.flags |= 16) : ae.push(ne);
      }
    }
    function i(le, ne) {
      if (!e) return null;
      for (; ne !== null; ) t(le, ne), ne = ne.sibling;
      return null;
    }
    function s(le, ne) {
      for (le = /* @__PURE__ */ new Map(); ne !== null; ) ne.key !== null ? le.set(ne.key, ne) : le.set(ne.index, ne), ne = ne.sibling;
      return le;
    }
    function a(le, ne) {
      return le = rs(le, ne), le.index = 0, le.sibling = null, le;
    }
    function p(le, ne, ae) {
      return le.index = ae, e ? (ae = le.alternate, ae !== null ? (ae = ae.index, ae < ne ? (le.flags |= 2, ne) : ae) : (le.flags |= 2, ne)) : (le.flags |= 1048576, ne);
    }
    function A(le) {
      return e && le.alternate === null && (le.flags |= 2), le;
    }
    function K(le, ne, ae, Ce) {
      return ne === null || ne.tag !== 6 ? (ne = Id(ae, le.mode, Ce), ne.return = le, ne) : (ne = a(ne, ae), ne.return = le, ne);
    }
    function ee(le, ne, ae, Ce) {
      var ze = ae.type;
      return ze === b ? _e(le, ne, ae.props.children, Ce, ae.key) : ne !== null && (ne.elementType === ze || typeof ze == "object" && ze !== null && ze.$$typeof === pe && Nr(ze) === ne.type) ? (Ce = a(ne, ae.props), Ce.ref = Ut(le, ne, ae), Ce.return = le, Ce) : (Ce = Dc(ae.type, ae.key, ae.props, null, le.mode, Ce), Ce.ref = Ut(le, ne, ae), Ce.return = le, Ce);
    }
    function de(le, ne, ae, Ce) {
      return ne === null || ne.tag !== 4 || ne.stateNode.containerInfo !== ae.containerInfo || ne.stateNode.implementation !== ae.implementation ? (ne = Dd(ae, le.mode, Ce), ne.return = le, ne) : (ne = a(ne, ae.children || []), ne.return = le, ne);
    }
    function _e(le, ne, ae, Ce, ze) {
      return ne === null || ne.tag !== 7 ? (ne = Vs(ae, le.mode, Ce, ze), ne.return = le, ne) : (ne = a(ne, ae), ne.return = le, ne);
    }
    function Se(le, ne, ae) {
      if (typeof ne == "string" && ne !== "" || typeof ne == "number") return ne = Id("" + ne, le.mode, ae), ne.return = le, ne;
      if (typeof ne == "object" && ne !== null) {
        switch (ne.$$typeof) {
          case D:
            return ae = Dc(ne.type, ne.key, ne.props, null, le.mode, ae), ae.ref = Ut(le, null, ne), ae.return = le, ae;
          case j:
            return ne = Dd(ne, le.mode, ae), ne.return = le, ne;
          case pe:
            var Ce = ne._init;
            return Se(le, Ce(ne._payload), ae);
        }
        if (Rt(ne) || W(ne)) return ne = Vs(ne, le.mode, ae, null), ne.return = le, ne;
        Kn(le, ne);
      }
      return null;
    }
    function ve(le, ne, ae, Ce) {
      var ze = ne !== null ? ne.key : null;
      if (typeof ae == "string" && ae !== "" || typeof ae == "number") return ze !== null ? null : K(le, ne, "" + ae, Ce);
      if (typeof ae == "object" && ae !== null) {
        switch (ae.$$typeof) {
          case D:
            return ae.key === ze ? ee(le, ne, ae, Ce) : null;
          case j:
            return ae.key === ze ? de(le, ne, ae, Ce) : null;
          case pe:
            return ze = ae._init, ve(
              le,
              ne,
              ze(ae._payload),
              Ce
            );
        }
        if (Rt(ae) || W(ae)) return ze !== null ? null : _e(le, ne, ae, Ce, null);
        Kn(le, ae);
      }
      return null;
    }
    function Me(le, ne, ae, Ce, ze) {
      if (typeof Ce == "string" && Ce !== "" || typeof Ce == "number") return le = le.get(ae) || null, K(ne, le, "" + Ce, ze);
      if (typeof Ce == "object" && Ce !== null) {
        switch (Ce.$$typeof) {
          case D:
            return le = le.get(Ce.key === null ? ae : Ce.key) || null, ee(ne, le, Ce, ze);
          case j:
            return le = le.get(Ce.key === null ? ae : Ce.key) || null, de(ne, le, Ce, ze);
          case pe:
            var Ve = Ce._init;
            return Me(le, ne, ae, Ve(Ce._payload), ze);
        }
        if (Rt(Ce) || W(Ce)) return le = le.get(ae) || null, _e(ne, le, Ce, ze, null);
        Kn(ne, Ce);
      }
      return null;
    }
    function Oe(le, ne, ae, Ce) {
      for (var ze = null, Ve = null, He = ne, We = ne = 0, Nn = null; He !== null && We < ae.length; We++) {
        He.index > We ? (Nn = He, He = null) : Nn = He.sibling;
        var ht = ve(le, He, ae[We], Ce);
        if (ht === null) {
          He === null && (He = Nn);
          break;
        }
        e && He && ht.alternate === null && t(le, He), ne = p(ht, ne, We), Ve === null ? ze = ht : Ve.sibling = ht, Ve = ht, He = Nn;
      }
      if (We === ae.length) return i(le, He), pt && ro(le, We), ze;
      if (He === null) {
        for (; We < ae.length; We++) He = Se(le, ae[We], Ce), He !== null && (ne = p(He, ne, We), Ve === null ? ze = He : Ve.sibling = He, Ve = He);
        return pt && ro(le, We), ze;
      }
      for (He = s(le, He); We < ae.length; We++) Nn = Me(He, le, We, ae[We], Ce), Nn !== null && (e && Nn.alternate !== null && He.delete(Nn.key === null ? We : Nn.key), ne = p(Nn, ne, We), Ve === null ? ze = Nn : Ve.sibling = Nn, Ve = Nn);
      return e && He.forEach(function(is) {
        return t(le, is);
      }), pt && ro(le, We), ze;
    }
    function De(le, ne, ae, Ce) {
      var ze = W(ae);
      if (typeof ze != "function") throw Error(w(150));
      if (ae = ze.call(ae), ae == null) throw Error(w(151));
      for (var Ve = ze = null, He = ne, We = ne = 0, Nn = null, ht = ae.next(); He !== null && !ht.done; We++, ht = ae.next()) {
        He.index > We ? (Nn = He, He = null) : Nn = He.sibling;
        var is = ve(le, He, ht.value, Ce);
        if (is === null) {
          He === null && (He = Nn);
          break;
        }
        e && He && is.alternate === null && t(le, He), ne = p(is, ne, We), Ve === null ? ze = is : Ve.sibling = is, Ve = is, He = Nn;
      }
      if (ht.done) return i(
        le,
        He
      ), pt && ro(le, We), ze;
      if (He === null) {
        for (; !ht.done; We++, ht = ae.next()) ht = Se(le, ht.value, Ce), ht !== null && (ne = p(ht, ne, We), Ve === null ? ze = ht : Ve.sibling = ht, Ve = ht);
        return pt && ro(le, We), ze;
      }
      for (He = s(le, He); !ht.done; We++, ht = ae.next()) ht = Me(He, le, We, ht.value, Ce), ht !== null && (e && ht.alternate !== null && He.delete(ht.key === null ? We : ht.key), ne = p(ht, ne, We), Ve === null ? ze = ht : Ve.sibling = ht, Ve = ht);
      return e && He.forEach(function(d1) {
        return t(le, d1);
      }), pt && ro(le, We), ze;
    }
    function tn(le, ne, ae, Ce) {
      if (typeof ae == "object" && ae !== null && ae.type === b && ae.key === null && (ae = ae.props.children), typeof ae == "object" && ae !== null) {
        switch (ae.$$typeof) {
          case D:
            e: {
              for (var ze = ae.key, Ve = ne; Ve !== null; ) {
                if (Ve.key === ze) {
                  if (ze = ae.type, ze === b) {
                    if (Ve.tag === 7) {
                      i(le, Ve.sibling), ne = a(Ve, ae.props.children), ne.return = le, le = ne;
                      break e;
                    }
                  } else if (Ve.elementType === ze || typeof ze == "object" && ze !== null && ze.$$typeof === pe && Nr(ze) === Ve.type) {
                    i(le, Ve.sibling), ne = a(Ve, ae.props), ne.ref = Ut(le, Ve, ae), ne.return = le, le = ne;
                    break e;
                  }
                  i(le, Ve);
                  break;
                } else t(le, Ve);
                Ve = Ve.sibling;
              }
              ae.type === b ? (ne = Vs(ae.props.children, le.mode, Ce, ae.key), ne.return = le, le = ne) : (Ce = Dc(ae.type, ae.key, ae.props, null, le.mode, Ce), Ce.ref = Ut(le, ne, ae), Ce.return = le, le = Ce);
            }
            return A(le);
          case j:
            e: {
              for (Ve = ae.key; ne !== null; ) {
                if (ne.key === Ve) if (ne.tag === 4 && ne.stateNode.containerInfo === ae.containerInfo && ne.stateNode.implementation === ae.implementation) {
                  i(le, ne.sibling), ne = a(ne, ae.children || []), ne.return = le, le = ne;
                  break e;
                } else {
                  i(le, ne);
                  break;
                }
                else t(le, ne);
                ne = ne.sibling;
              }
              ne = Dd(ae, le.mode, Ce), ne.return = le, le = ne;
            }
            return A(le);
          case pe:
            return Ve = ae._init, tn(le, ne, Ve(ae._payload), Ce);
        }
        if (Rt(ae)) return Oe(le, ne, ae, Ce);
        if (W(ae)) return De(le, ne, ae, Ce);
        Kn(le, ae);
      }
      return typeof ae == "string" && ae !== "" || typeof ae == "number" ? (ae = "" + ae, ne !== null && ne.tag === 6 ? (i(le, ne.sibling), ne = a(ne, ae), ne.return = le, le = ne) : (i(le, ne), ne = Id(ae, le.mode, Ce), ne.return = le, le = ne), A(le)) : i(le, ne);
    }
    return tn;
  }
  var so = Pl(!0), yr = Pl(!1), Ms = ei(null), lr = null, Go = null, Rl = null;
  function Tl() {
    Rl = Go = lr = null;
  }
  function Nl(e) {
    var t = Ms.current;
    St(Ms), e._currentValue = t;
  }
  function Fl(e, t, i) {
    for (; e !== null; ) {
      var s = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, s !== null && (s.childLanes |= t)) : s !== null && (s.childLanes & t) !== t && (s.childLanes |= t), e === i) break;
      e = e.return;
    }
  }
  function ni(e, t) {
    lr = e, Rl = Go = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (y = !0), e.firstContext = null);
  }
  function zn(e) {
    var t = e._currentValue;
    if (Rl !== e) if (e = { context: e, memoizedValue: t, next: null }, Go === null) {
      if (lr === null) throw Error(w(308));
      Go = e, lr.dependencies = { lanes: 0, firstContext: e };
    } else Go = Go.next = e;
    return t;
  }
  var Ur = null;
  function Uo(e) {
    Ur === null ? Ur = [e] : Ur.push(e);
  }
  function Ls(e, t, i, s) {
    var a = t.interleaved;
    return a === null ? (i.next = i, Uo(t)) : (i.next = a.next, a.next = i), t.interleaved = i, ar(e, s);
  }
  function ar(e, t) {
    e.lanes |= t;
    var i = e.alternate;
    for (i !== null && (i.lanes |= t), i = e, e = e.return; e !== null; ) e.childLanes |= t, i = e.alternate, i !== null && (i.childLanes |= t), i = e, e = e.return;
    return i.tag === 3 ? i.stateNode : null;
  }
  var Br = !1;
  function As(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Ml(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function Vr(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Hr(e, t, i) {
    var s = e.updateQueue;
    if (s === null) return null;
    if (s = s.shared, (ct & 2) !== 0) {
      var a = s.pending;
      return a === null ? t.next = t : (t.next = a.next, a.next = t), s.pending = t, ar(e, i);
    }
    return a = s.interleaved, a === null ? (t.next = t, Uo(s)) : (t.next = a.next, a.next = t), s.interleaved = t, ar(e, i);
  }
  function Ll(e, t, i) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (i & 4194240) !== 0)) {
      var s = t.lanes;
      s &= e.pendingLanes, i |= s, t.lanes = i, Jl(e, i);
    }
  }
  function Os(e, t) {
    var i = e.updateQueue, s = e.alternate;
    if (s !== null && (s = s.updateQueue, i === s)) {
      var a = null, p = null;
      if (i = i.firstBaseUpdate, i !== null) {
        do {
          var A = { eventTime: i.eventTime, lane: i.lane, tag: i.tag, payload: i.payload, callback: i.callback, next: null };
          p === null ? a = p = A : p = p.next = A, i = i.next;
        } while (i !== null);
        p === null ? a = p = t : p = p.next = t;
      } else a = p = t;
      i = { baseState: s.baseState, firstBaseUpdate: a, lastBaseUpdate: p, shared: s.shared, effects: s.effects }, e.updateQueue = i;
      return;
    }
    e = i.lastBaseUpdate, e === null ? i.firstBaseUpdate = t : e.next = t, i.lastBaseUpdate = t;
  }
  function Bo(e, t, i, s) {
    var a = e.updateQueue;
    Br = !1;
    var p = a.firstBaseUpdate, A = a.lastBaseUpdate, K = a.shared.pending;
    if (K !== null) {
      a.shared.pending = null;
      var ee = K, de = ee.next;
      ee.next = null, A === null ? p = de : A.next = de, A = ee;
      var _e = e.alternate;
      _e !== null && (_e = _e.updateQueue, K = _e.lastBaseUpdate, K !== A && (K === null ? _e.firstBaseUpdate = de : K.next = de, _e.lastBaseUpdate = ee));
    }
    if (p !== null) {
      var Se = a.baseState;
      A = 0, _e = de = ee = null, K = p;
      do {
        var ve = K.lane, Me = K.eventTime;
        if ((s & ve) === ve) {
          _e !== null && (_e = _e.next = {
            eventTime: Me,
            lane: 0,
            tag: K.tag,
            payload: K.payload,
            callback: K.callback,
            next: null
          });
          e: {
            var Oe = e, De = K;
            switch (ve = t, Me = i, De.tag) {
              case 1:
                if (Oe = De.payload, typeof Oe == "function") {
                  Se = Oe.call(Me, Se, ve);
                  break e;
                }
                Se = Oe;
                break e;
              case 3:
                Oe.flags = Oe.flags & -65537 | 128;
              case 0:
                if (Oe = De.payload, ve = typeof Oe == "function" ? Oe.call(Me, Se, ve) : Oe, ve == null) break e;
                Se = B({}, Se, ve);
                break e;
              case 2:
                Br = !0;
            }
          }
          K.callback !== null && K.lane !== 0 && (e.flags |= 64, ve = a.effects, ve === null ? a.effects = [K] : ve.push(K));
        } else Me = { eventTime: Me, lane: ve, tag: K.tag, payload: K.payload, callback: K.callback, next: null }, _e === null ? (de = _e = Me, ee = Se) : _e = _e.next = Me, A |= ve;
        if (K = K.next, K === null) {
          if (K = a.shared.pending, K === null) break;
          ve = K, K = ve.next, ve.next = null, a.lastBaseUpdate = ve, a.shared.pending = null;
        }
      } while (!0);
      if (_e === null && (ee = Se), a.baseState = ee, a.firstBaseUpdate = de, a.lastBaseUpdate = _e, t = a.shared.interleaved, t !== null) {
        a = t;
        do
          A |= a.lane, a = a.next;
        while (a !== t);
      } else p === null && (a.shared.lanes = 0);
      zs |= A, e.lanes = A, e.memoizedState = Se;
    }
  }
  function Dt(e, t, i) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var s = e[t], a = s.callback;
      if (a !== null) {
        if (s.callback = null, s = i, typeof a != "function") throw Error(w(191, a));
        a.call(s);
      }
    }
  }
  var Xe = {}, vt = ei(Xe), Ft = ei(Xe), Bt = ei(Xe);
  function Zt(e) {
    if (e === Xe) throw Error(w(174));
    return e;
  }
  function Ti(e, t) {
    switch (yt(Bt, t), yt(Ft, e), yt(vt, Xe), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Mn(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Mn(t, e);
    }
    St(vt), yt(vt, t);
  }
  function Mt() {
    St(vt), St(Ft), St(Bt);
  }
  function Vo(e) {
    Zt(Bt.current);
    var t = Zt(vt.current), i = Mn(t, e.type);
    t !== i && (yt(Ft, e), yt(vt, i));
  }
  function ri(e) {
    Ft.current === e && (St(vt), St(Ft));
  }
  var wt = ei(0);
  function Ho(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var i = t.memoizedState;
        if (i !== null && (i = i.dehydrated, i === null || i.data === "$?" || i.data === "$!")) return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var lo = [];
  function kn() {
    for (var e = 0; e < lo.length; e++) lo[e]._workInProgressVersionPrimary = null;
    lo.length = 0;
  }
  var jo = R.ReactCurrentDispatcher, Is = R.ReactCurrentBatchConfig, Gn = 0, mt = null, zt = null, jt = null, Fr = !1, Ni = !1, vr = 0, Al = 0;
  function Wt() {
    throw Error(w(321));
  }
  function Ds(e, t) {
    if (t === null) return !1;
    for (var i = 0; i < t.length && i < e.length; i++) if (!Yn(e[i], t[i])) return !1;
    return !0;
  }
  function Wo(e, t, i, s, a, p) {
    if (Gn = p, mt = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, jo.current = e === null || e.memoizedState === null ? md : Li, e = i(s, a), Ni) {
      p = 0;
      do {
        if (Ni = !1, vr = 0, 25 <= p) throw Error(w(301));
        p += 1, jt = zt = null, t.updateQueue = null, jo.current = Gl, e = i(s, a);
      } while (Ni);
    }
    if (jo.current = Xo, t = zt !== null && zt.next !== null, Gn = 0, jt = zt = mt = null, Fr = !1, t) throw Error(w(300));
    return e;
  }
  function qo() {
    var e = vr !== 0;
    return vr = 0, e;
  }
  function Et() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return jt === null ? mt.memoizedState = jt = e : jt = jt.next = e, jt;
  }
  function $t() {
    if (zt === null) {
      var e = mt.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = zt.next;
    var t = jt === null ? mt.memoizedState : jt.next;
    if (t !== null) jt = t, zt = e;
    else {
      if (e === null) throw Error(w(310));
      zt = e, e = { memoizedState: zt.memoizedState, baseState: zt.baseState, baseQueue: zt.baseQueue, queue: zt.queue, next: null }, jt === null ? mt.memoizedState = jt = e : jt = jt.next = e;
    }
    return jt;
  }
  function En(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Pn(e) {
    var t = $t(), i = t.queue;
    if (i === null) throw Error(w(311));
    i.lastRenderedReducer = e;
    var s = zt, a = s.baseQueue, p = i.pending;
    if (p !== null) {
      if (a !== null) {
        var A = a.next;
        a.next = p.next, p.next = A;
      }
      s.baseQueue = a = p, i.pending = null;
    }
    if (a !== null) {
      p = a.next, s = s.baseState;
      var K = A = null, ee = null, de = p;
      do {
        var _e = de.lane;
        if ((Gn & _e) === _e) ee !== null && (ee = ee.next = { lane: 0, action: de.action, hasEagerState: de.hasEagerState, eagerState: de.eagerState, next: null }), s = de.hasEagerState ? de.eagerState : e(s, de.action);
        else {
          var Se = {
            lane: _e,
            action: de.action,
            hasEagerState: de.hasEagerState,
            eagerState: de.eagerState,
            next: null
          };
          ee === null ? (K = ee = Se, A = s) : ee = ee.next = Se, mt.lanes |= _e, zs |= _e;
        }
        de = de.next;
      } while (de !== null && de !== p);
      ee === null ? A = s : ee.next = K, Yn(s, t.memoizedState) || (y = !0), t.memoizedState = s, t.baseState = A, t.baseQueue = ee, i.lastRenderedState = s;
    }
    if (e = i.interleaved, e !== null) {
      a = e;
      do
        p = a.lane, mt.lanes |= p, zs |= p, a = a.next;
      while (a !== e);
    } else a === null && (i.lanes = 0);
    return [t.memoizedState, i.dispatch];
  }
  function Ol(e) {
    var t = $t(), i = t.queue;
    if (i === null) throw Error(w(311));
    i.lastRenderedReducer = e;
    var s = i.dispatch, a = i.pending, p = t.memoizedState;
    if (a !== null) {
      i.pending = null;
      var A = a = a.next;
      do
        p = e(p, A.action), A = A.next;
      while (A !== a);
      Yn(p, t.memoizedState) || (y = !0), t.memoizedState = p, t.baseQueue === null && (t.baseState = p), i.lastRenderedState = p;
    }
    return [p, s];
  }
  function Il() {
  }
  function Dl(e, t) {
    var i = mt, s = $t(), a = t(), p = !Yn(s.memoizedState, a);
    if (p && (s.memoizedState = a, y = !0), s = s.queue, Na(Pa.bind(null, i, s, e), [e]), s.getSnapshot !== t || p || jt !== null && jt.memoizedState.tag & 1) {
      if (i.flags |= 2048, Yo(9, ii.bind(null, i, s, a, t), void 0, null), Tn === null) throw Error(w(349));
      (Gn & 30) !== 0 || mc(i, t, a);
    }
    return a;
  }
  function mc(e, t, i) {
    e.flags |= 16384, e = { getSnapshot: t, value: i }, t = mt.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, mt.updateQueue = t, t.stores = [e]) : (i = t.stores, i === null ? t.stores = [e] : i.push(e));
  }
  function ii(e, t, i, s) {
    t.value = i, t.getSnapshot = s, Ra(t) && zl(e);
  }
  function Pa(e, t, i) {
    return i(function() {
      Ra(t) && zl(e);
    });
  }
  function Ra(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var i = t();
      return !Yn(e, i);
    } catch {
      return !0;
    }
  }
  function zl(e) {
    var t = ar(e, 1);
    t !== null && ai(t, e, 1, -1);
  }
  function Fi(e) {
    var t = Et();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: En, lastRenderedState: e }, t.queue = e, e = e.dispatch = xc.bind(null, mt, e), [t.memoizedState, e];
  }
  function Yo(e, t, i, s) {
    return e = { tag: e, create: t, destroy: i, deps: s, next: null }, t = mt.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, mt.updateQueue = t, t.lastEffect = e.next = e) : (i = t.lastEffect, i === null ? t.lastEffect = e.next = e : (s = i.next, i.next = e, e.next = s, t.lastEffect = e)), e;
  }
  function Ta() {
    return $t().memoizedState;
  }
  function Ko(e, t, i, s) {
    var a = Et();
    mt.flags |= e, a.memoizedState = Yo(1 | t, i, void 0, s === void 0 ? null : s);
  }
  function ao(e, t, i, s) {
    var a = $t();
    s = s === void 0 ? null : s;
    var p = void 0;
    if (zt !== null) {
      var A = zt.memoizedState;
      if (p = A.destroy, s !== null && Ds(s, A.deps)) {
        a.memoizedState = Yo(t, i, p, s);
        return;
      }
    }
    mt.flags |= e, a.memoizedState = Yo(1 | t, i, p, s);
  }
  function yc(e, t) {
    return Ko(8390656, 8, e, t);
  }
  function Na(e, t) {
    return ao(2048, 8, e, t);
  }
  function Fa(e, t) {
    return ao(4, 2, e, t);
  }
  function Ma(e, t) {
    return ao(4, 4, e, t);
  }
  function Mi(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function vc(e, t, i) {
    return i = i != null ? i.concat([e]) : null, ao(4, 4, Mi.bind(null, t, e), i);
  }
  function oi() {
  }
  function La(e, t) {
    var i = $t();
    t = t === void 0 ? null : t;
    var s = i.memoizedState;
    return s !== null && t !== null && Ds(t, s[1]) ? s[0] : (i.memoizedState = [e, t], e);
  }
  function Pt(e, t) {
    var i = $t();
    t = t === void 0 ? null : t;
    var s = i.memoizedState;
    return s !== null && t !== null && Ds(t, s[1]) ? s[0] : (e = e(), i.memoizedState = [e, t], e);
  }
  function _c(e, t, i) {
    return (Gn & 21) === 0 ? (e.baseState && (e.baseState = !1, y = !0), e.memoizedState = i) : (Yn(i, t) || (i = bl(), mt.lanes |= i, zs |= i, e.baseState = !0), t);
  }
  function Sc(e, t) {
    var i = ut;
    ut = i !== 0 && 4 > i ? i : 4, e(!0);
    var s = Is.transition;
    Is.transition = {};
    try {
      e(!1), t();
    } finally {
      ut = i, Is.transition = s;
    }
  }
  function wc() {
    return $t().memoizedState;
  }
  function gd(e, t, i) {
    var s = ts(e);
    if (i = { lane: s, action: i, hasEagerState: !1, eagerState: null, next: null }, Aa(e)) Cc(t, i);
    else if (i = Ls(e, t, i, s), i !== null) {
      var a = cr();
      ai(i, e, s, a), ur(i, t, s);
    }
  }
  function xc(e, t, i) {
    var s = ts(e), a = { lane: s, action: i, hasEagerState: !1, eagerState: null, next: null };
    if (Aa(e)) Cc(t, a);
    else {
      var p = e.alternate;
      if (e.lanes === 0 && (p === null || p.lanes === 0) && (p = t.lastRenderedReducer, p !== null)) try {
        var A = t.lastRenderedState, K = p(A, i);
        if (a.hasEagerState = !0, a.eagerState = K, Yn(K, A)) {
          var ee = t.interleaved;
          ee === null ? (a.next = a, Uo(t)) : (a.next = ee.next, ee.next = a), t.interleaved = a;
          return;
        }
      } catch {
      } finally {
      }
      i = Ls(e, t, a, s), i !== null && (a = cr(), ai(i, e, s, a), ur(i, t, s));
    }
  }
  function Aa(e) {
    var t = e.alternate;
    return e === mt || t !== null && t === mt;
  }
  function Cc(e, t) {
    Ni = Fr = !0;
    var i = e.pending;
    i === null ? t.next = t : (t.next = i.next, i.next = t), e.pending = t;
  }
  function ur(e, t, i) {
    if ((i & 4194240) !== 0) {
      var s = t.lanes;
      s &= e.pendingLanes, i |= s, t.lanes = i, Jl(e, i);
    }
  }
  var Xo = { readContext: zn, useCallback: Wt, useContext: Wt, useEffect: Wt, useImperativeHandle: Wt, useInsertionEffect: Wt, useLayoutEffect: Wt, useMemo: Wt, useReducer: Wt, useRef: Wt, useState: Wt, useDebugValue: Wt, useDeferredValue: Wt, useTransition: Wt, useMutableSource: Wt, useSyncExternalStore: Wt, useId: Wt, unstable_isNewReconciler: !1 }, md = { readContext: zn, useCallback: function(e, t) {
    return Et().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: zn, useEffect: yc, useImperativeHandle: function(e, t, i) {
    return i = i != null ? i.concat([e]) : null, Ko(
      4194308,
      4,
      Mi.bind(null, t, e),
      i
    );
  }, useLayoutEffect: function(e, t) {
    return Ko(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return Ko(4, 2, e, t);
  }, useMemo: function(e, t) {
    var i = Et();
    return t = t === void 0 ? null : t, e = e(), i.memoizedState = [e, t], e;
  }, useReducer: function(e, t, i) {
    var s = Et();
    return t = i !== void 0 ? i(t) : t, s.memoizedState = s.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, s.queue = e, e = e.dispatch = gd.bind(null, mt, e), [s.memoizedState, e];
  }, useRef: function(e) {
    var t = Et();
    return e = { current: e }, t.memoizedState = e;
  }, useState: Fi, useDebugValue: oi, useDeferredValue: function(e) {
    return Et().memoizedState = e;
  }, useTransition: function() {
    var e = Fi(!1), t = e[0];
    return e = Sc.bind(null, e[1]), Et().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, i) {
    var s = mt, a = Et();
    if (pt) {
      if (i === void 0) throw Error(w(407));
      i = i();
    } else {
      if (i = t(), Tn === null) throw Error(w(349));
      (Gn & 30) !== 0 || mc(s, t, i);
    }
    a.memoizedState = i;
    var p = { value: i, getSnapshot: t };
    return a.queue = p, yc(Pa.bind(
      null,
      s,
      p,
      e
    ), [e]), s.flags |= 2048, Yo(9, ii.bind(null, s, p, i, t), void 0, null), i;
  }, useId: function() {
    var e = Et(), t = Tn.identifierPrefix;
    if (pt) {
      var i = Nt, s = ir;
      i = (s & ~(1 << 32 - tt(s) - 1)).toString(32) + i, t = ":" + t + "R" + i, i = vr++, 0 < i && (t += "H" + i.toString(32)), t += ":";
    } else i = Al++, t = ":" + t + "r" + i.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, Li = {
    readContext: zn,
    useCallback: La,
    useContext: zn,
    useEffect: Na,
    useImperativeHandle: vc,
    useInsertionEffect: Fa,
    useLayoutEffect: Ma,
    useMemo: Pt,
    useReducer: Pn,
    useRef: Ta,
    useState: function() {
      return Pn(En);
    },
    useDebugValue: oi,
    useDeferredValue: function(e) {
      var t = $t();
      return _c(t, zt.memoizedState, e);
    },
    useTransition: function() {
      var e = Pn(En)[0], t = $t().memoizedState;
      return [e, t];
    },
    useMutableSource: Il,
    useSyncExternalStore: Dl,
    useId: wc,
    unstable_isNewReconciler: !1
  }, Gl = { readContext: zn, useCallback: La, useContext: zn, useEffect: Na, useImperativeHandle: vc, useInsertionEffect: Fa, useLayoutEffect: Ma, useMemo: Pt, useReducer: Ol, useRef: Ta, useState: function() {
    return Ol(En);
  }, useDebugValue: oi, useDeferredValue: function(e) {
    var t = $t();
    return zt === null ? t.memoizedState = e : _c(t, zt.memoizedState, e);
  }, useTransition: function() {
    var e = Ol(En)[0], t = $t().memoizedState;
    return [e, t];
  }, useMutableSource: Il, useSyncExternalStore: Dl, useId: wc, unstable_isNewReconciler: !1 };
  function yn(e, t) {
    if (e && e.defaultProps) {
      t = B({}, t), e = e.defaultProps;
      for (var i in e) t[i] === void 0 && (t[i] = e[i]);
      return t;
    }
    return t;
  }
  function Qo(e, t, i, s) {
    t = e.memoizedState, i = i(s, t), i = i == null ? t : B({}, t, i), e.memoizedState = i, e.lanes === 0 && (e.updateQueue.baseState = i);
  }
  var bo = { isMounted: function(e) {
    return (e = e._reactInternals) ? Di(e) === e : !1;
  }, enqueueSetState: function(e, t, i) {
    e = e._reactInternals;
    var s = cr(), a = ts(e), p = Vr(s, a);
    p.payload = t, i != null && (p.callback = i), t = Hr(e, p, a), t !== null && (ai(t, e, a, s), Ll(t, e, a));
  }, enqueueReplaceState: function(e, t, i) {
    e = e._reactInternals;
    var s = cr(), a = ts(e), p = Vr(s, a);
    p.tag = 1, p.payload = t, i != null && (p.callback = i), t = Hr(e, p, a), t !== null && (ai(t, e, a, s), Ll(t, e, a));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var i = cr(), s = ts(e), a = Vr(i, s);
    a.tag = 2, t != null && (a.callback = t), t = Hr(e, a, s), t !== null && (ai(t, e, s, i), Ll(t, e, s));
  } };
  function Ul(e, t, i, s, a, p, A) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(s, p, A) : t.prototype && t.prototype.isPureReactComponent ? !qi(i, s) || !qi(a, p) : !0;
  }
  function kc(e, t, i) {
    var s = !1, a = zr, p = t.contextType;
    return typeof p == "object" && p !== null ? p = zn(p) : (a = Cn(t) ? Ci : mn.current, s = t.contextTypes, p = (s = s != null) ? eo(e, a) : zr), t = new t(i, p), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = bo, e.stateNode = t, t._reactInternals = e, s && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = a, e.__reactInternalMemoizedMaskedChildContext = p), t;
  }
  function Oa(e, t, i, s) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(i, s), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(i, s), t.state !== e && bo.enqueueReplaceState(t, t.state, null);
  }
  function Bl(e, t, i, s) {
    var a = e.stateNode;
    a.props = i, a.state = e.memoizedState, a.refs = {}, As(e);
    var p = t.contextType;
    typeof p == "object" && p !== null ? a.context = zn(p) : (p = Cn(t) ? Ci : mn.current, a.context = eo(e, p)), a.state = e.memoizedState, p = t.getDerivedStateFromProps, typeof p == "function" && (Qo(e, t, p, i), a.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof a.getSnapshotBeforeUpdate == "function" || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (t = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), t !== a.state && bo.enqueueReplaceState(a, a.state, null), Bo(e, i, a, s), a.state = e.memoizedState), typeof a.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function uo(e, t) {
    try {
      var i = "", s = t;
      do
        i += ge(s), s = s.return;
      while (s);
      var a = i;
    } catch (p) {
      a = `
Error generating stack: ` + p.message + `
` + p.stack;
    }
    return { value: e, source: t, stack: a, digest: null };
  }
  function Vl(e, t, i) {
    return { value: e, source: null, stack: i ?? null, digest: t ?? null };
  }
  function Jo(e, t) {
    try {
      console.error(t.value);
    } catch (i) {
      setTimeout(function() {
        throw i;
      });
    }
  }
  var yd = typeof WeakMap == "function" ? WeakMap : Map;
  function Ec(e, t, i) {
    i = Vr(-1, i), i.tag = 3, i.payload = { element: null };
    var s = t.value;
    return i.callback = function() {
      Fc || (Fc = !0, Rd = s), Jo(e, t);
    }, i;
  }
  function n(e, t, i) {
    i = Vr(-1, i), i.tag = 3;
    var s = e.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var a = t.value;
      i.payload = function() {
        return s(a);
      }, i.callback = function() {
        Jo(e, t);
      };
    }
    var p = e.stateNode;
    return p !== null && typeof p.componentDidCatch == "function" && (i.callback = function() {
      Jo(e, t), typeof s != "function" && ($o === null ? $o = /* @__PURE__ */ new Set([this]) : $o.add(this));
      var A = t.stack;
      this.componentDidCatch(t.value, { componentStack: A !== null ? A : "" });
    }), i;
  }
  function r(e, t, i) {
    var s = e.pingCache;
    if (s === null) {
      s = e.pingCache = new yd();
      var a = /* @__PURE__ */ new Set();
      s.set(t, a);
    } else a = s.get(t), a === void 0 && (a = /* @__PURE__ */ new Set(), s.set(t, a));
    a.has(i) || (a.add(i), e = e1.bind(null, e, t, i), t.then(e, e));
  }
  function o(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function l(e, t, i, s, a) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, i.flags |= 131072, i.flags &= -52805, i.tag === 1 && (i.alternate === null ? i.tag = 17 : (t = Vr(-1, 1), t.tag = 2, Hr(i, t, 1))), i.lanes |= 1), e) : (e.flags |= 65536, e.lanes = a, e);
  }
  var c = R.ReactCurrentOwner, y = !1;
  function V(e, t, i, s) {
    t.child = e === null ? yr(t, null, i, s) : so(t, e.child, i, s);
  }
  function ie(e, t, i, s, a) {
    i = i.render;
    var p = t.ref;
    return ni(t, a), s = Wo(e, t, i, s, p, a), i = qo(), e !== null && !y ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, Rn(e, t, a)) : (pt && i && Do(t), t.flags |= 1, V(e, t, s, a), t.child);
  }
  function fe(e, t, i, s, a) {
    if (e === null) {
      var p = i.type;
      return typeof p == "function" && !Od(p) && p.defaultProps === void 0 && i.compare === null && i.defaultProps === void 0 ? (t.tag = 15, t.type = p, we(e, t, p, s, a)) : (e = Dc(i.type, null, s, t, t.mode, a), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (p = e.child, (e.lanes & a) === 0) {
      var A = p.memoizedProps;
      if (i = i.compare, i = i !== null ? i : qi, i(A, s) && e.ref === t.ref) return Rn(e, t, a);
    }
    return t.flags |= 1, e = rs(p, s), e.ref = t.ref, e.return = t, t.child = e;
  }
  function we(e, t, i, s, a) {
    if (e !== null) {
      var p = e.memoizedProps;
      if (qi(p, s) && e.ref === t.ref) if (y = !1, t.pendingProps = s = p, (e.lanes & a) !== 0) (e.flags & 131072) !== 0 && (y = !0);
      else return t.lanes = e.lanes, Rn(e, t, a);
    }
    return Te(e, t, i, s, a);
  }
  function Le(e, t, i) {
    var s = t.pendingProps, a = s.children, p = e !== null ? e.memoizedState : null;
    if (s.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, yt(jl, Mr), Mr |= i;
    else {
      if ((i & 1073741824) === 0) return e = p !== null ? p.baseLanes | i : i, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, yt(jl, Mr), Mr |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, s = p !== null ? p.baseLanes : i, yt(jl, Mr), Mr |= s;
    }
    else p !== null ? (s = p.baseLanes | i, t.memoizedState = null) : s = i, yt(jl, Mr), Mr |= s;
    return V(e, t, a, i), t.child;
  }
  function qe(e, t) {
    var i = t.ref;
    (e === null && i !== null || e !== null && e.ref !== i) && (t.flags |= 512, t.flags |= 2097152);
  }
  function Te(e, t, i, s, a) {
    var p = Cn(i) ? Ci : mn.current;
    return p = eo(t, p), ni(t, a), i = Wo(e, t, i, s, p, a), s = qo(), e !== null && !y ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, Rn(e, t, a)) : (pt && s && Do(t), t.flags |= 1, V(e, t, i, a), t.child);
  }
  function xt(e, t, i, s, a) {
    if (Cn(i)) {
      var p = !0;
      to(t);
    } else p = !1;
    if (ni(t, a), t.stateNode === null) it(e, t), kc(t, i, s), Bl(t, i, s, a), s = !0;
    else if (e === null) {
      var A = t.stateNode, K = t.memoizedProps;
      A.props = K;
      var ee = A.context, de = i.contextType;
      typeof de == "object" && de !== null ? de = zn(de) : (de = Cn(i) ? Ci : mn.current, de = eo(t, de));
      var _e = i.getDerivedStateFromProps, Se = typeof _e == "function" || typeof A.getSnapshotBeforeUpdate == "function";
      Se || typeof A.UNSAFE_componentWillReceiveProps != "function" && typeof A.componentWillReceiveProps != "function" || (K !== s || ee !== de) && Oa(t, A, s, de), Br = !1;
      var ve = t.memoizedState;
      A.state = ve, Bo(t, s, A, a), ee = t.memoizedState, K !== s || ve !== ee || xn.current || Br ? (typeof _e == "function" && (Qo(t, i, _e, s), ee = t.memoizedState), (K = Br || Ul(t, i, K, s, ve, ee, de)) ? (Se || typeof A.UNSAFE_componentWillMount != "function" && typeof A.componentWillMount != "function" || (typeof A.componentWillMount == "function" && A.componentWillMount(), typeof A.UNSAFE_componentWillMount == "function" && A.UNSAFE_componentWillMount()), typeof A.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof A.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = s, t.memoizedState = ee), A.props = s, A.state = ee, A.context = de, s = K) : (typeof A.componentDidMount == "function" && (t.flags |= 4194308), s = !1);
    } else {
      A = t.stateNode, Ml(e, t), K = t.memoizedProps, de = t.type === t.elementType ? K : yn(t.type, K), A.props = de, Se = t.pendingProps, ve = A.context, ee = i.contextType, typeof ee == "object" && ee !== null ? ee = zn(ee) : (ee = Cn(i) ? Ci : mn.current, ee = eo(t, ee));
      var Me = i.getDerivedStateFromProps;
      (_e = typeof Me == "function" || typeof A.getSnapshotBeforeUpdate == "function") || typeof A.UNSAFE_componentWillReceiveProps != "function" && typeof A.componentWillReceiveProps != "function" || (K !== Se || ve !== ee) && Oa(t, A, s, ee), Br = !1, ve = t.memoizedState, A.state = ve, Bo(t, s, A, a);
      var Oe = t.memoizedState;
      K !== Se || ve !== Oe || xn.current || Br ? (typeof Me == "function" && (Qo(t, i, Me, s), Oe = t.memoizedState), (de = Br || Ul(t, i, de, s, ve, Oe, ee) || !1) ? (_e || typeof A.UNSAFE_componentWillUpdate != "function" && typeof A.componentWillUpdate != "function" || (typeof A.componentWillUpdate == "function" && A.componentWillUpdate(s, Oe, ee), typeof A.UNSAFE_componentWillUpdate == "function" && A.UNSAFE_componentWillUpdate(s, Oe, ee)), typeof A.componentDidUpdate == "function" && (t.flags |= 4), typeof A.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof A.componentDidUpdate != "function" || K === e.memoizedProps && ve === e.memoizedState || (t.flags |= 4), typeof A.getSnapshotBeforeUpdate != "function" || K === e.memoizedProps && ve === e.memoizedState || (t.flags |= 1024), t.memoizedProps = s, t.memoizedState = Oe), A.props = s, A.state = Oe, A.context = ee, s = de) : (typeof A.componentDidUpdate != "function" || K === e.memoizedProps && ve === e.memoizedState || (t.flags |= 4), typeof A.getSnapshotBeforeUpdate != "function" || K === e.memoizedProps && ve === e.memoizedState || (t.flags |= 1024), s = !1);
    }
    return gt(e, t, i, s, p, a);
  }
  function gt(e, t, i, s, a, p) {
    qe(e, t);
    var A = (t.flags & 128) !== 0;
    if (!s && !A) return a && hc(t, i, !1), Rn(e, t, p);
    s = t.stateNode, c.current = t;
    var K = A && typeof i.getDerivedStateFromError != "function" ? null : s.render();
    return t.flags |= 1, e !== null && A ? (t.child = so(t, e.child, null, p), t.child = so(t, null, K, p)) : V(e, t, K, p), t.memoizedState = s.state, a && hc(t, i, !0), t.child;
  }
  function Un(e) {
    var t = e.stateNode;
    t.pendingContext ? xa(e, t.pendingContext, t.pendingContext !== t.context) : t.context && xa(e, t.context, !1), Ti(e, t.containerInfo);
  }
  function jr(e, t, i, s, a) {
    return oo(), Fs(a), t.flags |= 256, V(e, t, i, s), t.child;
  }
  var ce = { dehydrated: null, treeContext: null, retryLane: 0 };
  function oe(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function he(e, t, i) {
    var s = t.pendingProps, a = wt.current, p = !1, A = (t.flags & 128) !== 0, K;
    if ((K = A) || (K = e !== null && e.memoizedState === null ? !1 : (a & 2) !== 0), K ? (p = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (a |= 1), yt(wt, a & 1), e === null)
      return zo(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (A = s.children, e = s.fallback, p ? (s = t.mode, p = t.child, A = { mode: "hidden", children: A }, (s & 1) === 0 && p !== null ? (p.childLanes = 0, p.pendingProps = A) : p = zc(A, s, 0, null), e = Vs(e, s, i, null), p.return = t, e.return = t, p.sibling = e, t.child = p, t.child.memoizedState = oe(i), t.memoizedState = ce, e) : Fe(t, A));
    if (a = e.memoizedState, a !== null && (K = a.dehydrated, K !== null)) return Qe(e, t, A, s, K, a, i);
    if (p) {
      p = s.fallback, A = t.mode, a = e.child, K = a.sibling;
      var ee = { mode: "hidden", children: s.children };
      return (A & 1) === 0 && t.child !== a ? (s = t.child, s.childLanes = 0, s.pendingProps = ee, t.deletions = null) : (s = rs(a, ee), s.subtreeFlags = a.subtreeFlags & 14680064), K !== null ? p = rs(K, p) : (p = Vs(p, A, i, null), p.flags |= 2), p.return = t, s.return = t, s.sibling = p, t.child = s, s = p, p = t.child, A = e.child.memoizedState, A = A === null ? oe(i) : { baseLanes: A.baseLanes | i, cachePool: null, transitions: A.transitions }, p.memoizedState = A, p.childLanes = e.childLanes & ~i, t.memoizedState = ce, s;
    }
    return p = e.child, e = p.sibling, s = rs(p, { mode: "visible", children: s.children }), (t.mode & 1) === 0 && (s.lanes = i), s.return = t, s.sibling = null, e !== null && (i = t.deletions, i === null ? (t.deletions = [e], t.flags |= 16) : i.push(e)), t.child = s, t.memoizedState = null, s;
  }
  function Fe(e, t) {
    return t = zc({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function Ue(e, t, i, s) {
    return s !== null && Fs(s), so(t, e.child, null, i), e = Fe(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function Qe(e, t, i, s, a, p, A) {
    if (i)
      return t.flags & 256 ? (t.flags &= -257, s = Vl(Error(w(422))), Ue(e, t, A, s)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (p = s.fallback, a = t.mode, s = zc({ mode: "visible", children: s.children }, a, 0, null), p = Vs(p, a, A, null), p.flags |= 2, s.return = t, p.return = t, s.sibling = p, t.child = s, (t.mode & 1) !== 0 && so(t, e.child, null, A), t.child.memoizedState = oe(A), t.memoizedState = ce, p);
    if ((t.mode & 1) === 0) return Ue(e, t, A, null);
    if (a.data === "$!") {
      if (s = a.nextSibling && a.nextSibling.dataset, s) var K = s.dgst;
      return s = K, p = Error(w(419)), s = Vl(p, s, void 0), Ue(e, t, A, s);
    }
    if (K = (A & e.childLanes) !== 0, y || K) {
      if (s = Tn, s !== null) {
        switch (A & -A) {
          case 4:
            a = 2;
            break;
          case 16:
            a = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            a = 32;
            break;
          case 536870912:
            a = 268435456;
            break;
          default:
            a = 0;
        }
        a = (a & (s.suspendedLanes | A)) !== 0 ? 0 : a, a !== 0 && a !== p.retryLane && (p.retryLane = a, ar(e, a), ai(s, e, a, -1));
      }
      return Ad(), s = Vl(Error(w(421))), Ue(e, t, A, s);
    }
    return a.data === "$?" ? (t.flags |= 128, t.child = e.child, t = t1.bind(null, e), a._reactRetry = t, null) : (e = p.treeContext, Ee = Ir(a.nextSibling), or = t, pt = !0, sr = null, e !== null && (In[Dn++] = ir, In[Dn++] = Nt, In[Dn++] = Ri, ir = e.id, Nt = e.overflow, Ri = t), t = Fe(t, s.children), t.flags |= 4096, t);
  }
  function Ye(e, t, i) {
    e.lanes |= t;
    var s = e.alternate;
    s !== null && (s.lanes |= t), Fl(e.return, t, i);
  }
  function lt(e, t, i, s, a) {
    var p = e.memoizedState;
    p === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: s, tail: i, tailMode: a } : (p.isBackwards = t, p.rendering = null, p.renderingStartTime = 0, p.last = s, p.tail = i, p.tailMode = a);
  }
  function en(e, t, i) {
    var s = t.pendingProps, a = s.revealOrder, p = s.tail;
    if (V(e, t, s.children, i), s = wt.current, (s & 2) !== 0) s = s & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Ye(e, i, t);
        else if (e.tag === 19) Ye(e, i, t);
        else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
      s &= 1;
    }
    if (yt(wt, s), (t.mode & 1) === 0) t.memoizedState = null;
    else switch (a) {
      case "forwards":
        for (i = t.child, a = null; i !== null; ) e = i.alternate, e !== null && Ho(e) === null && (a = i), i = i.sibling;
        i = a, i === null ? (a = t.child, t.child = null) : (a = i.sibling, i.sibling = null), lt(t, !1, a, i, p);
        break;
      case "backwards":
        for (i = null, a = t.child, t.child = null; a !== null; ) {
          if (e = a.alternate, e !== null && Ho(e) === null) {
            t.child = a;
            break;
          }
          e = a.sibling, a.sibling = i, i = a, a = e;
        }
        lt(t, !0, i, null, p);
        break;
      case "together":
        lt(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function it(e, t) {
    (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function Rn(e, t, i) {
    if (e !== null && (t.dependencies = e.dependencies), zs |= t.lanes, (i & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(w(153));
    if (t.child !== null) {
      for (e = t.child, i = rs(e, e.pendingProps), t.child = i, i.return = t; e.sibling !== null; ) e = e.sibling, i = i.sibling = rs(e, e.pendingProps), i.return = t;
      i.sibling = null;
    }
    return t.child;
  }
  function vd(e, t, i) {
    switch (t.tag) {
      case 3:
        Un(t), oo();
        break;
      case 5:
        Vo(t);
        break;
      case 1:
        Cn(t.type) && to(t);
        break;
      case 4:
        Ti(t, t.stateNode.containerInfo);
        break;
      case 10:
        var s = t.type._context, a = t.memoizedProps.value;
        yt(Ms, s._currentValue), s._currentValue = a;
        break;
      case 13:
        if (s = t.memoizedState, s !== null)
          return s.dehydrated !== null ? (yt(wt, wt.current & 1), t.flags |= 128, null) : (i & t.child.childLanes) !== 0 ? he(e, t, i) : (yt(wt, wt.current & 1), e = Rn(e, t, i), e !== null ? e.sibling : null);
        yt(wt, wt.current & 1);
        break;
      case 19:
        if (s = (i & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (s) return en(e, t, i);
          t.flags |= 128;
        }
        if (a = t.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), yt(wt, wt.current), s) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, Le(e, t, i);
    }
    return Rn(e, t, i);
  }
  var yf, _d, vf, _f;
  yf = function(e, t) {
    for (var i = t.child; i !== null; ) {
      if (i.tag === 5 || i.tag === 6) e.appendChild(i.stateNode);
      else if (i.tag !== 4 && i.child !== null) {
        i.child.return = i, i = i.child;
        continue;
      }
      if (i === t) break;
      for (; i.sibling === null; ) {
        if (i.return === null || i.return === t) return;
        i = i.return;
      }
      i.sibling.return = i.return, i = i.sibling;
    }
  }, _d = function() {
  }, vf = function(e, t, i, s) {
    var a = e.memoizedProps;
    if (a !== s) {
      e = t.stateNode, Zt(vt.current);
      var p = null;
      switch (i) {
        case "input":
          a = be(e, a), s = be(e, s), p = [];
          break;
        case "select":
          a = B({}, a, { value: void 0 }), s = B({}, s, { value: void 0 }), p = [];
          break;
        case "textarea":
          a = ft(e, a), s = ft(e, s), p = [];
          break;
        default:
          typeof a.onClick != "function" && typeof s.onClick == "function" && (e.onclick = Ji);
      }
      Re(i, s);
      var A;
      i = null;
      for (de in a) if (!s.hasOwnProperty(de) && a.hasOwnProperty(de) && a[de] != null) if (de === "style") {
        var K = a[de];
        for (A in K) K.hasOwnProperty(A) && (i || (i = {}), i[A] = "");
      } else de !== "dangerouslySetInnerHTML" && de !== "children" && de !== "suppressContentEditableWarning" && de !== "suppressHydrationWarning" && de !== "autoFocus" && (M.hasOwnProperty(de) ? p || (p = []) : (p = p || []).push(de, null));
      for (de in s) {
        var ee = s[de];
        if (K = a != null ? a[de] : void 0, s.hasOwnProperty(de) && ee !== K && (ee != null || K != null)) if (de === "style") if (K) {
          for (A in K) !K.hasOwnProperty(A) || ee && ee.hasOwnProperty(A) || (i || (i = {}), i[A] = "");
          for (A in ee) ee.hasOwnProperty(A) && K[A] !== ee[A] && (i || (i = {}), i[A] = ee[A]);
        } else i || (p || (p = []), p.push(
          de,
          i
        )), i = ee;
        else de === "dangerouslySetInnerHTML" ? (ee = ee ? ee.__html : void 0, K = K ? K.__html : void 0, ee != null && K !== ee && (p = p || []).push(de, ee)) : de === "children" ? typeof ee != "string" && typeof ee != "number" || (p = p || []).push(de, "" + ee) : de !== "suppressContentEditableWarning" && de !== "suppressHydrationWarning" && (M.hasOwnProperty(de) ? (ee != null && de === "onScroll" && _t("scroll", e), p || K === ee || (p = [])) : (p = p || []).push(de, ee));
      }
      i && (p = p || []).push("style", i);
      var de = p;
      (t.updateQueue = de) && (t.flags |= 4);
    }
  }, _f = function(e, t, i, s) {
    i !== s && (t.flags |= 4);
  };
  function Ia(e, t) {
    if (!pt) switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var i = null; t !== null; ) t.alternate !== null && (i = t), t = t.sibling;
        i === null ? e.tail = null : i.sibling = null;
        break;
      case "collapsed":
        i = e.tail;
        for (var s = null; i !== null; ) i.alternate !== null && (s = i), i = i.sibling;
        s === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : s.sibling = null;
    }
  }
  function Xn(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, i = 0, s = 0;
    if (t) for (var a = e.child; a !== null; ) i |= a.lanes | a.childLanes, s |= a.subtreeFlags & 14680064, s |= a.flags & 14680064, a.return = e, a = a.sibling;
    else for (a = e.child; a !== null; ) i |= a.lanes | a.childLanes, s |= a.subtreeFlags, s |= a.flags, a.return = e, a = a.sibling;
    return e.subtreeFlags |= s, e.childLanes = i, t;
  }
  function W0(e, t, i) {
    var s = t.pendingProps;
    switch (un(t), t.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Xn(t), null;
      case 1:
        return Cn(t.type) && Oo(), Xn(t), null;
      case 3:
        return s = t.stateNode, Mt(), St(xn), St(mn), kn(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), (e === null || e.child === null) && (Ns(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, sr !== null && (Fd(sr), sr = null))), _d(e, t), Xn(t), null;
      case 5:
        ri(t);
        var a = Zt(Bt.current);
        if (i = t.type, e !== null && t.stateNode != null) vf(e, t, i, s, a), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!s) {
            if (t.stateNode === null) throw Error(w(166));
            return Xn(t), null;
          }
          if (e = Zt(vt.current), Ns(t)) {
            s = t.stateNode, i = t.type;
            var p = t.memoizedProps;
            switch (s[mr] = t, s[Ps] = p, e = (t.mode & 1) !== 0, i) {
              case "dialog":
                _t("cancel", s), _t("close", s);
                break;
              case "iframe":
              case "object":
              case "embed":
                _t("load", s);
                break;
              case "video":
              case "audio":
                for (a = 0; a < Si.length; a++) _t(Si[a], s);
                break;
              case "source":
                _t("error", s);
                break;
              case "img":
              case "image":
              case "link":
                _t(
                  "error",
                  s
                ), _t("load", s);
                break;
              case "details":
                _t("toggle", s);
                break;
              case "input":
                je(s, p), _t("invalid", s);
                break;
              case "select":
                s._wrapperState = { wasMultiple: !!p.multiple }, _t("invalid", s);
                break;
              case "textarea":
                dn(s, p), _t("invalid", s);
            }
            Re(i, p), a = null;
            for (var A in p) if (p.hasOwnProperty(A)) {
              var K = p[A];
              A === "children" ? typeof K == "string" ? s.textContent !== K && (p.suppressHydrationWarning !== !0 && ks(s.textContent, K, e), a = ["children", K]) : typeof K == "number" && s.textContent !== "" + K && (p.suppressHydrationWarning !== !0 && ks(
                s.textContent,
                K,
                e
              ), a = ["children", "" + K]) : M.hasOwnProperty(A) && K != null && A === "onScroll" && _t("scroll", s);
            }
            switch (i) {
              case "input":
                Pe(s), Je(s, p, !0);
                break;
              case "textarea":
                Pe(s), fr(s);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof p.onClick == "function" && (s.onclick = Ji);
            }
            s = a, t.updateQueue = s, s !== null && (t.flags |= 4);
          } else {
            A = a.nodeType === 9 ? a : a.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Kt(i)), e === "http://www.w3.org/1999/xhtml" ? i === "script" ? (e = A.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof s.is == "string" ? e = A.createElement(i, { is: s.is }) : (e = A.createElement(i), i === "select" && (A = e, s.multiple ? A.multiple = !0 : s.size && (A.size = s.size))) : e = A.createElementNS(e, i), e[mr] = t, e[Ps] = s, yf(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (A = $e(i, s), i) {
                case "dialog":
                  _t("cancel", e), _t("close", e), a = s;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  _t("load", e), a = s;
                  break;
                case "video":
                case "audio":
                  for (a = 0; a < Si.length; a++) _t(Si[a], e);
                  a = s;
                  break;
                case "source":
                  _t("error", e), a = s;
                  break;
                case "img":
                case "image":
                case "link":
                  _t(
                    "error",
                    e
                  ), _t("load", e), a = s;
                  break;
                case "details":
                  _t("toggle", e), a = s;
                  break;
                case "input":
                  je(e, s), a = be(e, s), _t("invalid", e);
                  break;
                case "option":
                  a = s;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!s.multiple }, a = B({}, s, { value: void 0 }), _t("invalid", e);
                  break;
                case "textarea":
                  dn(e, s), a = ft(e, s), _t("invalid", e);
                  break;
                default:
                  a = s;
              }
              Re(i, a), K = a;
              for (p in K) if (K.hasOwnProperty(p)) {
                var ee = K[p];
                p === "style" ? ke(e, ee) : p === "dangerouslySetInnerHTML" ? (ee = ee ? ee.__html : void 0, ee != null && _n(e, ee)) : p === "children" ? typeof ee == "string" ? (i !== "textarea" || ee !== "") && Ot(e, ee) : typeof ee == "number" && Ot(e, "" + ee) : p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && p !== "autoFocus" && (M.hasOwnProperty(p) ? ee != null && p === "onScroll" && _t("scroll", e) : ee != null && f(e, p, ee, A));
              }
              switch (i) {
                case "input":
                  Pe(e), Je(e, s, !1);
                  break;
                case "textarea":
                  Pe(e), fr(e);
                  break;
                case "option":
                  s.value != null && e.setAttribute("value", "" + te(s.value));
                  break;
                case "select":
                  e.multiple = !!s.multiple, p = s.value, p != null ? Hn(e, !!s.multiple, p, !1) : s.defaultValue != null && Hn(
                    e,
                    !!s.multiple,
                    s.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof a.onClick == "function" && (e.onclick = Ji);
              }
              switch (i) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  s = !!s.autoFocus;
                  break e;
                case "img":
                  s = !0;
                  break e;
                default:
                  s = !1;
              }
            }
            s && (t.flags |= 4);
          }
          t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
        }
        return Xn(t), null;
      case 6:
        if (e && t.stateNode != null) _f(e, t, e.memoizedProps, s);
        else {
          if (typeof s != "string" && t.stateNode === null) throw Error(w(166));
          if (i = Zt(Bt.current), Zt(vt.current), Ns(t)) {
            if (s = t.stateNode, i = t.memoizedProps, s[mr] = t, (p = s.nodeValue !== i) && (e = or, e !== null)) switch (e.tag) {
              case 3:
                ks(s.nodeValue, i, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && ks(s.nodeValue, i, (e.mode & 1) !== 0);
            }
            p && (t.flags |= 4);
          } else s = (i.nodeType === 9 ? i : i.ownerDocument).createTextNode(s), s[mr] = t, t.stateNode = s;
        }
        return Xn(t), null;
      case 13:
        if (St(wt), s = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (pt && Ee !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) ka(), oo(), t.flags |= 98560, p = !1;
          else if (p = Ns(t), s !== null && s.dehydrated !== null) {
            if (e === null) {
              if (!p) throw Error(w(318));
              if (p = t.memoizedState, p = p !== null ? p.dehydrated : null, !p) throw Error(w(317));
              p[mr] = t;
            } else oo(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Xn(t), p = !1;
          } else sr !== null && (Fd(sr), sr = null), p = !0;
          if (!p) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = i, t) : (s = s !== null, s !== (e !== null && e.memoizedState !== null) && s && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (wt.current & 1) !== 0 ? vn === 0 && (vn = 3) : Ad())), t.updateQueue !== null && (t.flags |= 4), Xn(t), null);
      case 4:
        return Mt(), _d(e, t), e === null && Qi(t.stateNode.containerInfo), Xn(t), null;
      case 10:
        return Nl(t.type._context), Xn(t), null;
      case 17:
        return Cn(t.type) && Oo(), Xn(t), null;
      case 19:
        if (St(wt), p = t.memoizedState, p === null) return Xn(t), null;
        if (s = (t.flags & 128) !== 0, A = p.rendering, A === null) if (s) Ia(p, !1);
        else {
          if (vn !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (A = Ho(e), A !== null) {
              for (t.flags |= 128, Ia(p, !1), s = A.updateQueue, s !== null && (t.updateQueue = s, t.flags |= 4), t.subtreeFlags = 0, s = i, i = t.child; i !== null; ) p = i, e = s, p.flags &= 14680066, A = p.alternate, A === null ? (p.childLanes = 0, p.lanes = e, p.child = null, p.subtreeFlags = 0, p.memoizedProps = null, p.memoizedState = null, p.updateQueue = null, p.dependencies = null, p.stateNode = null) : (p.childLanes = A.childLanes, p.lanes = A.lanes, p.child = A.child, p.subtreeFlags = 0, p.deletions = null, p.memoizedProps = A.memoizedProps, p.memoizedState = A.memoizedState, p.updateQueue = A.updateQueue, p.type = A.type, e = A.dependencies, p.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), i = i.sibling;
              return yt(wt, wt.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          p.tail !== null && Gt() > Wl && (t.flags |= 128, s = !0, Ia(p, !1), t.lanes = 4194304);
        }
        else {
          if (!s) if (e = Ho(A), e !== null) {
            if (t.flags |= 128, s = !0, i = e.updateQueue, i !== null && (t.updateQueue = i, t.flags |= 4), Ia(p, !0), p.tail === null && p.tailMode === "hidden" && !A.alternate && !pt) return Xn(t), null;
          } else 2 * Gt() - p.renderingStartTime > Wl && i !== 1073741824 && (t.flags |= 128, s = !0, Ia(p, !1), t.lanes = 4194304);
          p.isBackwards ? (A.sibling = t.child, t.child = A) : (i = p.last, i !== null ? i.sibling = A : t.child = A, p.last = A);
        }
        return p.tail !== null ? (t = p.tail, p.rendering = t, p.tail = t.sibling, p.renderingStartTime = Gt(), t.sibling = null, i = wt.current, yt(wt, s ? i & 1 | 2 : i & 1), t) : (Xn(t), null);
      case 22:
      case 23:
        return Ld(), s = t.memoizedState !== null, e !== null && e.memoizedState !== null !== s && (t.flags |= 8192), s && (t.mode & 1) !== 0 ? (Mr & 1073741824) !== 0 && (Xn(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Xn(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(w(156, t.tag));
  }
  function q0(e, t) {
    switch (un(t), t.tag) {
      case 1:
        return Cn(t.type) && Oo(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Mt(), St(xn), St(mn), kn(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return ri(t), null;
      case 13:
        if (St(wt), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(w(340));
          oo();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return St(wt), null;
      case 4:
        return Mt(), null;
      case 10:
        return Nl(t.type._context), null;
      case 22:
      case 23:
        return Ld(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Pc = !1, Qn = !1, Y0 = typeof WeakSet == "function" ? WeakSet : Set, Ae = null;
  function Hl(e, t) {
    var i = e.ref;
    if (i !== null) if (typeof i == "function") try {
      i(null);
    } catch (s) {
      qt(e, t, s);
    }
    else i.current = null;
  }
  function Sd(e, t, i) {
    try {
      i();
    } catch (s) {
      qt(e, t, s);
    }
  }
  var Sf = !1;
  function K0(e, t) {
    if (va = tl, e = bt(), Fo(e)) {
      if ("selectionStart" in e) var i = { start: e.selectionStart, end: e.selectionEnd };
      else e: {
        i = (i = e.ownerDocument) && i.defaultView || window;
        var s = i.getSelection && i.getSelection();
        if (s && s.rangeCount !== 0) {
          i = s.anchorNode;
          var a = s.anchorOffset, p = s.focusNode;
          s = s.focusOffset;
          try {
            i.nodeType, p.nodeType;
          } catch {
            i = null;
            break e;
          }
          var A = 0, K = -1, ee = -1, de = 0, _e = 0, Se = e, ve = null;
          t: for (; ; ) {
            for (var Me; Se !== i || a !== 0 && Se.nodeType !== 3 || (K = A + a), Se !== p || s !== 0 && Se.nodeType !== 3 || (ee = A + s), Se.nodeType === 3 && (A += Se.nodeValue.length), (Me = Se.firstChild) !== null; )
              ve = Se, Se = Me;
            for (; ; ) {
              if (Se === e) break t;
              if (ve === i && ++de === a && (K = A), ve === p && ++_e === s && (ee = A), (Me = Se.nextSibling) !== null) break;
              Se = ve, ve = Se.parentNode;
            }
            Se = Me;
          }
          i = K === -1 || ee === -1 ? null : { start: K, end: ee };
        } else i = null;
      }
      i = i || { start: 0, end: 0 };
    } else i = null;
    for (_a = { focusedElem: e, selectionRange: i }, tl = !1, Ae = t; Ae !== null; ) if (t = Ae, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, Ae = e;
    else for (; Ae !== null; ) {
      t = Ae;
      try {
        var Oe = t.alternate;
        if ((t.flags & 1024) !== 0) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (Oe !== null) {
              var De = Oe.memoizedProps, tn = Oe.memoizedState, le = t.stateNode, ne = le.getSnapshotBeforeUpdate(t.elementType === t.type ? De : yn(t.type, De), tn);
              le.__reactInternalSnapshotBeforeUpdate = ne;
            }
            break;
          case 3:
            var ae = t.stateNode.containerInfo;
            ae.nodeType === 1 ? ae.textContent = "" : ae.nodeType === 9 && ae.documentElement && ae.removeChild(ae.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(w(163));
        }
      } catch (Ce) {
        qt(t, t.return, Ce);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, Ae = e;
        break;
      }
      Ae = t.return;
    }
    return Oe = Sf, Sf = !1, Oe;
  }
  function Da(e, t, i) {
    var s = t.updateQueue;
    if (s = s !== null ? s.lastEffect : null, s !== null) {
      var a = s = s.next;
      do {
        if ((a.tag & e) === e) {
          var p = a.destroy;
          a.destroy = void 0, p !== void 0 && Sd(t, i, p);
        }
        a = a.next;
      } while (a !== s);
    }
  }
  function Rc(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
      var i = t = t.next;
      do {
        if ((i.tag & e) === e) {
          var s = i.create;
          i.destroy = s();
        }
        i = i.next;
      } while (i !== t);
    }
  }
  function wd(e) {
    var t = e.ref;
    if (t !== null) {
      var i = e.stateNode;
      switch (e.tag) {
        case 5:
          e = i;
          break;
        default:
          e = i;
      }
      typeof t == "function" ? t(e) : t.current = e;
    }
  }
  function wf(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, wf(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[mr], delete t[Ps], delete t[wl], delete t[dc], delete t[fc])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function xf(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Cf(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || xf(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function xd(e, t, i) {
    var s = e.tag;
    if (s === 5 || s === 6) e = e.stateNode, t ? i.nodeType === 8 ? i.parentNode.insertBefore(e, t) : i.insertBefore(e, t) : (i.nodeType === 8 ? (t = i.parentNode, t.insertBefore(e, i)) : (t = i, t.appendChild(e)), i = i._reactRootContainer, i != null || t.onclick !== null || (t.onclick = Ji));
    else if (s !== 4 && (e = e.child, e !== null)) for (xd(e, t, i), e = e.sibling; e !== null; ) xd(e, t, i), e = e.sibling;
  }
  function Cd(e, t, i) {
    var s = e.tag;
    if (s === 5 || s === 6) e = e.stateNode, t ? i.insertBefore(e, t) : i.appendChild(e);
    else if (s !== 4 && (e = e.child, e !== null)) for (Cd(e, t, i), e = e.sibling; e !== null; ) Cd(e, t, i), e = e.sibling;
  }
  var Bn = null, si = !1;
  function Zo(e, t, i) {
    for (i = i.child; i !== null; ) kf(e, t, i), i = i.sibling;
  }
  function kf(e, t, i) {
    if (fn && typeof fn.onCommitFiberUnmount == "function") try {
      fn.onCommitFiberUnmount(Kr, i);
    } catch {
    }
    switch (i.tag) {
      case 5:
        Qn || Hl(i, t);
      case 6:
        var s = Bn, a = si;
        Bn = null, Zo(e, t, i), Bn = s, si = a, Bn !== null && (si ? (e = Bn, i = i.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(i) : e.removeChild(i)) : Bn.removeChild(i.stateNode));
        break;
      case 18:
        Bn !== null && (si ? (e = Bn, i = i.stateNode, e.nodeType === 8 ? Sl(e.parentNode, i) : e.nodeType === 1 && Sl(e, i), Wn(e)) : Sl(Bn, i.stateNode));
        break;
      case 4:
        s = Bn, a = si, Bn = i.stateNode.containerInfo, si = !0, Zo(e, t, i), Bn = s, si = a;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Qn && (s = i.updateQueue, s !== null && (s = s.lastEffect, s !== null))) {
          a = s = s.next;
          do {
            var p = a, A = p.destroy;
            p = p.tag, A !== void 0 && ((p & 2) !== 0 || (p & 4) !== 0) && Sd(i, t, A), a = a.next;
          } while (a !== s);
        }
        Zo(e, t, i);
        break;
      case 1:
        if (!Qn && (Hl(i, t), s = i.stateNode, typeof s.componentWillUnmount == "function")) try {
          s.props = i.memoizedProps, s.state = i.memoizedState, s.componentWillUnmount();
        } catch (K) {
          qt(i, t, K);
        }
        Zo(e, t, i);
        break;
      case 21:
        Zo(e, t, i);
        break;
      case 22:
        i.mode & 1 ? (Qn = (s = Qn) || i.memoizedState !== null, Zo(e, t, i), Qn = s) : Zo(e, t, i);
        break;
      default:
        Zo(e, t, i);
    }
  }
  function Ef(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var i = e.stateNode;
      i === null && (i = e.stateNode = new Y0()), t.forEach(function(s) {
        var a = n1.bind(null, e, s);
        i.has(s) || (i.add(s), s.then(a, a));
      });
    }
  }
  function li(e, t) {
    var i = t.deletions;
    if (i !== null) for (var s = 0; s < i.length; s++) {
      var a = i[s];
      try {
        var p = e, A = t, K = A;
        e: for (; K !== null; ) {
          switch (K.tag) {
            case 5:
              Bn = K.stateNode, si = !1;
              break e;
            case 3:
              Bn = K.stateNode.containerInfo, si = !0;
              break e;
            case 4:
              Bn = K.stateNode.containerInfo, si = !0;
              break e;
          }
          K = K.return;
        }
        if (Bn === null) throw Error(w(160));
        kf(p, A, a), Bn = null, si = !1;
        var ee = a.alternate;
        ee !== null && (ee.return = null), a.return = null;
      } catch (de) {
        qt(a, t, de);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Pf(t, e), t = t.sibling;
  }
  function Pf(e, t) {
    var i = e.alternate, s = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (li(t, e), Ai(e), s & 4) {
          try {
            Da(3, e, e.return), Rc(3, e);
          } catch (De) {
            qt(e, e.return, De);
          }
          try {
            Da(5, e, e.return);
          } catch (De) {
            qt(e, e.return, De);
          }
        }
        break;
      case 1:
        li(t, e), Ai(e), s & 512 && i !== null && Hl(i, i.return);
        break;
      case 5:
        if (li(t, e), Ai(e), s & 512 && i !== null && Hl(i, i.return), e.flags & 32) {
          var a = e.stateNode;
          try {
            Ot(a, "");
          } catch (De) {
            qt(e, e.return, De);
          }
        }
        if (s & 4 && (a = e.stateNode, a != null)) {
          var p = e.memoizedProps, A = i !== null ? i.memoizedProps : p, K = e.type, ee = e.updateQueue;
          if (e.updateQueue = null, ee !== null) try {
            K === "input" && p.type === "radio" && p.name != null && dt(a, p), $e(K, A);
            var de = $e(K, p);
            for (A = 0; A < ee.length; A += 2) {
              var _e = ee[A], Se = ee[A + 1];
              _e === "style" ? ke(a, Se) : _e === "dangerouslySetInnerHTML" ? _n(a, Se) : _e === "children" ? Ot(a, Se) : f(a, _e, Se, de);
            }
            switch (K) {
              case "input":
                st(a, p);
                break;
              case "textarea":
                Vt(a, p);
                break;
              case "select":
                var ve = a._wrapperState.wasMultiple;
                a._wrapperState.wasMultiple = !!p.multiple;
                var Me = p.value;
                Me != null ? Hn(a, !!p.multiple, Me, !1) : ve !== !!p.multiple && (p.defaultValue != null ? Hn(
                  a,
                  !!p.multiple,
                  p.defaultValue,
                  !0
                ) : Hn(a, !!p.multiple, p.multiple ? [] : "", !1));
            }
            a[Ps] = p;
          } catch (De) {
            qt(e, e.return, De);
          }
        }
        break;
      case 6:
        if (li(t, e), Ai(e), s & 4) {
          if (e.stateNode === null) throw Error(w(162));
          a = e.stateNode, p = e.memoizedProps;
          try {
            a.nodeValue = p;
          } catch (De) {
            qt(e, e.return, De);
          }
        }
        break;
      case 3:
        if (li(t, e), Ai(e), s & 4 && i !== null && i.memoizedState.isDehydrated) try {
          Wn(t.containerInfo);
        } catch (De) {
          qt(e, e.return, De);
        }
        break;
      case 4:
        li(t, e), Ai(e);
        break;
      case 13:
        li(t, e), Ai(e), a = e.child, a.flags & 8192 && (p = a.memoizedState !== null, a.stateNode.isHidden = p, !p || a.alternate !== null && a.alternate.memoizedState !== null || (Pd = Gt())), s & 4 && Ef(e);
        break;
      case 22:
        if (_e = i !== null && i.memoizedState !== null, e.mode & 1 ? (Qn = (de = Qn) || _e, li(t, e), Qn = de) : li(t, e), Ai(e), s & 8192) {
          if (de = e.memoizedState !== null, (e.stateNode.isHidden = de) && !_e && (e.mode & 1) !== 0) for (Ae = e, _e = e.child; _e !== null; ) {
            for (Se = Ae = _e; Ae !== null; ) {
              switch (ve = Ae, Me = ve.child, ve.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Da(4, ve, ve.return);
                  break;
                case 1:
                  Hl(ve, ve.return);
                  var Oe = ve.stateNode;
                  if (typeof Oe.componentWillUnmount == "function") {
                    s = ve, i = ve.return;
                    try {
                      t = s, Oe.props = t.memoizedProps, Oe.state = t.memoizedState, Oe.componentWillUnmount();
                    } catch (De) {
                      qt(s, i, De);
                    }
                  }
                  break;
                case 5:
                  Hl(ve, ve.return);
                  break;
                case 22:
                  if (ve.memoizedState !== null) {
                    Nf(Se);
                    continue;
                  }
              }
              Me !== null ? (Me.return = ve, Ae = Me) : Nf(Se);
            }
            _e = _e.sibling;
          }
          e: for (_e = null, Se = e; ; ) {
            if (Se.tag === 5) {
              if (_e === null) {
                _e = Se;
                try {
                  a = Se.stateNode, de ? (p = a.style, typeof p.setProperty == "function" ? p.setProperty("display", "none", "important") : p.display = "none") : (K = Se.stateNode, ee = Se.memoizedProps.style, A = ee != null && ee.hasOwnProperty("display") ? ee.display : null, K.style.display = ye("display", A));
                } catch (De) {
                  qt(e, e.return, De);
                }
              }
            } else if (Se.tag === 6) {
              if (_e === null) try {
                Se.stateNode.nodeValue = de ? "" : Se.memoizedProps;
              } catch (De) {
                qt(e, e.return, De);
              }
            } else if ((Se.tag !== 22 && Se.tag !== 23 || Se.memoizedState === null || Se === e) && Se.child !== null) {
              Se.child.return = Se, Se = Se.child;
              continue;
            }
            if (Se === e) break e;
            for (; Se.sibling === null; ) {
              if (Se.return === null || Se.return === e) break e;
              _e === Se && (_e = null), Se = Se.return;
            }
            _e === Se && (_e = null), Se.sibling.return = Se.return, Se = Se.sibling;
          }
        }
        break;
      case 19:
        li(t, e), Ai(e), s & 4 && Ef(e);
        break;
      case 21:
        break;
      default:
        li(
          t,
          e
        ), Ai(e);
    }
  }
  function Ai(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var i = e.return; i !== null; ) {
            if (xf(i)) {
              var s = i;
              break e;
            }
            i = i.return;
          }
          throw Error(w(160));
        }
        switch (s.tag) {
          case 5:
            var a = s.stateNode;
            s.flags & 32 && (Ot(a, ""), s.flags &= -33);
            var p = Cf(e);
            Cd(e, p, a);
            break;
          case 3:
          case 4:
            var A = s.stateNode.containerInfo, K = Cf(e);
            xd(e, K, A);
            break;
          default:
            throw Error(w(161));
        }
      } catch (ee) {
        qt(e, e.return, ee);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function X0(e, t, i) {
    Ae = e, Rf(e);
  }
  function Rf(e, t, i) {
    for (var s = (e.mode & 1) !== 0; Ae !== null; ) {
      var a = Ae, p = a.child;
      if (a.tag === 22 && s) {
        var A = a.memoizedState !== null || Pc;
        if (!A) {
          var K = a.alternate, ee = K !== null && K.memoizedState !== null || Qn;
          K = Pc;
          var de = Qn;
          if (Pc = A, (Qn = ee) && !de) for (Ae = a; Ae !== null; ) A = Ae, ee = A.child, A.tag === 22 && A.memoizedState !== null ? Ff(a) : ee !== null ? (ee.return = A, Ae = ee) : Ff(a);
          for (; p !== null; ) Ae = p, Rf(p), p = p.sibling;
          Ae = a, Pc = K, Qn = de;
        }
        Tf(e);
      } else (a.subtreeFlags & 8772) !== 0 && p !== null ? (p.return = a, Ae = p) : Tf(e);
    }
  }
  function Tf(e) {
    for (; Ae !== null; ) {
      var t = Ae;
      if ((t.flags & 8772) !== 0) {
        var i = t.alternate;
        try {
          if ((t.flags & 8772) !== 0) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Qn || Rc(5, t);
              break;
            case 1:
              var s = t.stateNode;
              if (t.flags & 4 && !Qn) if (i === null) s.componentDidMount();
              else {
                var a = t.elementType === t.type ? i.memoizedProps : yn(t.type, i.memoizedProps);
                s.componentDidUpdate(a, i.memoizedState, s.__reactInternalSnapshotBeforeUpdate);
              }
              var p = t.updateQueue;
              p !== null && Dt(t, p, s);
              break;
            case 3:
              var A = t.updateQueue;
              if (A !== null) {
                if (i = null, t.child !== null) switch (t.child.tag) {
                  case 5:
                    i = t.child.stateNode;
                    break;
                  case 1:
                    i = t.child.stateNode;
                }
                Dt(t, A, i);
              }
              break;
            case 5:
              var K = t.stateNode;
              if (i === null && t.flags & 4) {
                i = K;
                var ee = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    ee.autoFocus && i.focus();
                    break;
                  case "img":
                    ee.src && (i.src = ee.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var de = t.alternate;
                if (de !== null) {
                  var _e = de.memoizedState;
                  if (_e !== null) {
                    var Se = _e.dehydrated;
                    Se !== null && Wn(Se);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(w(163));
          }
          Qn || t.flags & 512 && wd(t);
        } catch (ve) {
          qt(t, t.return, ve);
        }
      }
      if (t === e) {
        Ae = null;
        break;
      }
      if (i = t.sibling, i !== null) {
        i.return = t.return, Ae = i;
        break;
      }
      Ae = t.return;
    }
  }
  function Nf(e) {
    for (; Ae !== null; ) {
      var t = Ae;
      if (t === e) {
        Ae = null;
        break;
      }
      var i = t.sibling;
      if (i !== null) {
        i.return = t.return, Ae = i;
        break;
      }
      Ae = t.return;
    }
  }
  function Ff(e) {
    for (; Ae !== null; ) {
      var t = Ae;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var i = t.return;
            try {
              Rc(4, t);
            } catch (ee) {
              qt(t, i, ee);
            }
            break;
          case 1:
            var s = t.stateNode;
            if (typeof s.componentDidMount == "function") {
              var a = t.return;
              try {
                s.componentDidMount();
              } catch (ee) {
                qt(t, a, ee);
              }
            }
            var p = t.return;
            try {
              wd(t);
            } catch (ee) {
              qt(t, p, ee);
            }
            break;
          case 5:
            var A = t.return;
            try {
              wd(t);
            } catch (ee) {
              qt(t, A, ee);
            }
        }
      } catch (ee) {
        qt(t, t.return, ee);
      }
      if (t === e) {
        Ae = null;
        break;
      }
      var K = t.sibling;
      if (K !== null) {
        K.return = t.return, Ae = K;
        break;
      }
      Ae = t.return;
    }
  }
  var Q0 = Math.ceil, Tc = R.ReactCurrentDispatcher, kd = R.ReactCurrentOwner, Wr = R.ReactCurrentBatchConfig, ct = 0, Tn = null, cn = null, Vn = 0, Mr = 0, jl = ei(0), vn = 0, za = null, zs = 0, Nc = 0, Ed = 0, Ga = null, _r = null, Pd = 0, Wl = 1 / 0, co = null, Fc = !1, Rd = null, $o = null, Mc = !1, es = null, Lc = 0, Ua = 0, Td = null, Ac = -1, Oc = 0;
  function cr() {
    return (ct & 6) !== 0 ? Gt() : Ac !== -1 ? Ac : Ac = Gt();
  }
  function ts(e) {
    return (e.mode & 1) === 0 ? 1 : (ct & 2) !== 0 && Vn !== 0 ? Vn & -Vn : Ea.transition !== null ? (Oc === 0 && (Oc = bl()), Oc) : (e = ut, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Xu(e.type)), e);
  }
  function ai(e, t, i, s) {
    if (50 < Ua) throw Ua = 0, Td = null, Error(w(185));
    ds(e, i, s), ((ct & 2) === 0 || e !== Tn) && (e === Tn && ((ct & 2) === 0 && (Nc |= i), vn === 4 && ns(e, Vn)), Sr(e, s), i === 1 && ct === 0 && (t.mode & 1) === 0 && (Wl = Gt() + 500, Io && ki()));
  }
  function Sr(e, t) {
    var i = e.callbackNode;
    ju(e, t);
    var s = Gi(e, e === Tn ? Vn : 0);
    if (s === 0) i !== null && Vu(i), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = s & -s, e.callbackPriority !== t) {
      if (i != null && Vu(i), t === 1) e.tag === 0 ? ti(Lf.bind(null, e)) : Ts(Lf.bind(null, e)), uc(function() {
        (ct & 6) === 0 && ki();
      }), i = null;
      else {
        switch (fs(s)) {
          case 1:
            i = zi;
            break;
          case 4:
            i = Xs;
            break;
          case 16:
            i = yo;
            break;
          case 536870912:
            i = Qs;
            break;
          default:
            i = yo;
        }
        i = Bf(i, Mf.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = i;
    }
  }
  function Mf(e, t) {
    if (Ac = -1, Oc = 0, (ct & 6) !== 0) throw Error(w(327));
    var i = e.callbackNode;
    if (ql() && e.callbackNode !== i) return null;
    var s = Gi(e, e === Tn ? Vn : 0);
    if (s === 0) return null;
    if ((s & 30) !== 0 || (s & e.expiredLanes) !== 0 || t) t = Ic(e, s);
    else {
      t = s;
      var a = ct;
      ct |= 2;
      var p = Of();
      (Tn !== e || Vn !== t) && (co = null, Wl = Gt() + 500, Us(e, t));
      do
        try {
          Z0();
          break;
        } catch (K) {
          Af(e, K);
        }
      while (!0);
      Tl(), Tc.current = p, ct = a, cn !== null ? t = 0 : (Tn = null, Vn = 0, t = vn);
    }
    if (t !== 0) {
      if (t === 2 && (a = vo(e), a !== 0 && (s = a, t = Nd(e, a))), t === 1) throw i = za, Us(e, 0), ns(e, s), Sr(e, Gt()), i;
      if (t === 6) ns(e, s);
      else {
        if (a = e.current.alternate, (s & 30) === 0 && !b0(a) && (t = Ic(e, s), t === 2 && (p = vo(e), p !== 0 && (s = p, t = Nd(e, p))), t === 1)) throw i = za, Us(e, 0), ns(e, s), Sr(e, Gt()), i;
        switch (e.finishedWork = a, e.finishedLanes = s, t) {
          case 0:
          case 1:
            throw Error(w(345));
          case 2:
            Bs(e, _r, co);
            break;
          case 3:
            if (ns(e, s), (s & 130023424) === s && (t = Pd + 500 - Gt(), 10 < t)) {
              if (Gi(e, 0) !== 0) break;
              if (a = e.suspendedLanes, (a & s) !== s) {
                cr(), e.pingedLanes |= e.suspendedLanes & a;
                break;
              }
              e.timeoutHandle = rr(Bs.bind(null, e, _r, co), t);
              break;
            }
            Bs(e, _r, co);
            break;
          case 4:
            if (ns(e, s), (s & 4194240) === s) break;
            for (t = e.eventTimes, a = -1; 0 < s; ) {
              var A = 31 - tt(s);
              p = 1 << A, A = t[A], A > a && (a = A), s &= ~p;
            }
            if (s = a, s = Gt() - s, s = (120 > s ? 120 : 480 > s ? 480 : 1080 > s ? 1080 : 1920 > s ? 1920 : 3e3 > s ? 3e3 : 4320 > s ? 4320 : 1960 * Q0(s / 1960)) - s, 10 < s) {
              e.timeoutHandle = rr(Bs.bind(null, e, _r, co), s);
              break;
            }
            Bs(e, _r, co);
            break;
          case 5:
            Bs(e, _r, co);
            break;
          default:
            throw Error(w(329));
        }
      }
    }
    return Sr(e, Gt()), e.callbackNode === i ? Mf.bind(null, e) : null;
  }
  function Nd(e, t) {
    var i = Ga;
    return e.current.memoizedState.isDehydrated && (Us(e, t).flags |= 256), e = Ic(e, t), e !== 2 && (t = _r, _r = i, t !== null && Fd(t)), e;
  }
  function Fd(e) {
    _r === null ? _r = e : _r.push.apply(_r, e);
  }
  function b0(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var i = t.updateQueue;
        if (i !== null && (i = i.stores, i !== null)) for (var s = 0; s < i.length; s++) {
          var a = i[s], p = a.getSnapshot;
          a = a.value;
          try {
            if (!Yn(p(), a)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (i = t.child, t.subtreeFlags & 16384 && i !== null) i.return = t, t = i;
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function ns(e, t) {
    for (t &= ~Ed, t &= ~Nc, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var i = 31 - tt(t), s = 1 << i;
      e[i] = -1, t &= ~s;
    }
  }
  function Lf(e) {
    if ((ct & 6) !== 0) throw Error(w(327));
    ql();
    var t = Gi(e, 0);
    if ((t & 1) === 0) return Sr(e, Gt()), null;
    var i = Ic(e, t);
    if (e.tag !== 0 && i === 2) {
      var s = vo(e);
      s !== 0 && (t = s, i = Nd(e, s));
    }
    if (i === 1) throw i = za, Us(e, 0), ns(e, t), Sr(e, Gt()), i;
    if (i === 6) throw Error(w(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Bs(e, _r, co), Sr(e, Gt()), null;
  }
  function Md(e, t) {
    var i = ct;
    ct |= 1;
    try {
      return e(t);
    } finally {
      ct = i, ct === 0 && (Wl = Gt() + 500, Io && ki());
    }
  }
  function Gs(e) {
    es !== null && es.tag === 0 && (ct & 6) === 0 && ql();
    var t = ct;
    ct |= 1;
    var i = Wr.transition, s = ut;
    try {
      if (Wr.transition = null, ut = 1, e) return e();
    } finally {
      ut = s, Wr.transition = i, ct = t, (ct & 6) === 0 && ki();
    }
  }
  function Ld() {
    Mr = jl.current, St(jl);
  }
  function Us(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var i = e.timeoutHandle;
    if (i !== -1 && (e.timeoutHandle = -1, wa(i)), cn !== null) for (i = cn.return; i !== null; ) {
      var s = i;
      switch (un(s), s.tag) {
        case 1:
          s = s.type.childContextTypes, s != null && Oo();
          break;
        case 3:
          Mt(), St(xn), St(mn), kn();
          break;
        case 5:
          ri(s);
          break;
        case 4:
          Mt();
          break;
        case 13:
          St(wt);
          break;
        case 19:
          St(wt);
          break;
        case 10:
          Nl(s.type._context);
          break;
        case 22:
        case 23:
          Ld();
      }
      i = i.return;
    }
    if (Tn = e, cn = e = rs(e.current, null), Vn = Mr = t, vn = 0, za = null, Ed = Nc = zs = 0, _r = Ga = null, Ur !== null) {
      for (t = 0; t < Ur.length; t++) if (i = Ur[t], s = i.interleaved, s !== null) {
        i.interleaved = null;
        var a = s.next, p = i.pending;
        if (p !== null) {
          var A = p.next;
          p.next = a, s.next = A;
        }
        i.pending = s;
      }
      Ur = null;
    }
    return e;
  }
  function Af(e, t) {
    do {
      var i = cn;
      try {
        if (Tl(), jo.current = Xo, Fr) {
          for (var s = mt.memoizedState; s !== null; ) {
            var a = s.queue;
            a !== null && (a.pending = null), s = s.next;
          }
          Fr = !1;
        }
        if (Gn = 0, jt = zt = mt = null, Ni = !1, vr = 0, kd.current = null, i === null || i.return === null) {
          vn = 1, za = t, cn = null;
          break;
        }
        e: {
          var p = e, A = i.return, K = i, ee = t;
          if (t = Vn, K.flags |= 32768, ee !== null && typeof ee == "object" && typeof ee.then == "function") {
            var de = ee, _e = K, Se = _e.tag;
            if ((_e.mode & 1) === 0 && (Se === 0 || Se === 11 || Se === 15)) {
              var ve = _e.alternate;
              ve ? (_e.updateQueue = ve.updateQueue, _e.memoizedState = ve.memoizedState, _e.lanes = ve.lanes) : (_e.updateQueue = null, _e.memoizedState = null);
            }
            var Me = o(A);
            if (Me !== null) {
              Me.flags &= -257, l(Me, A, K, p, t), Me.mode & 1 && r(p, de, t), t = Me, ee = de;
              var Oe = t.updateQueue;
              if (Oe === null) {
                var De = /* @__PURE__ */ new Set();
                De.add(ee), t.updateQueue = De;
              } else Oe.add(ee);
              break e;
            } else {
              if ((t & 1) === 0) {
                r(p, de, t), Ad();
                break e;
              }
              ee = Error(w(426));
            }
          } else if (pt && K.mode & 1) {
            var tn = o(A);
            if (tn !== null) {
              (tn.flags & 65536) === 0 && (tn.flags |= 256), l(tn, A, K, p, t), Fs(uo(ee, K));
              break e;
            }
          }
          p = ee = uo(ee, K), vn !== 4 && (vn = 2), Ga === null ? Ga = [p] : Ga.push(p), p = A;
          do {
            switch (p.tag) {
              case 3:
                p.flags |= 65536, t &= -t, p.lanes |= t;
                var le = Ec(p, ee, t);
                Os(p, le);
                break e;
              case 1:
                K = ee;
                var ne = p.type, ae = p.stateNode;
                if ((p.flags & 128) === 0 && (typeof ne.getDerivedStateFromError == "function" || ae !== null && typeof ae.componentDidCatch == "function" && ($o === null || !$o.has(ae)))) {
                  p.flags |= 65536, t &= -t, p.lanes |= t;
                  var Ce = n(p, K, t);
                  Os(p, Ce);
                  break e;
                }
            }
            p = p.return;
          } while (p !== null);
        }
        Df(i);
      } catch (ze) {
        t = ze, cn === i && i !== null && (cn = i = i.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Of() {
    var e = Tc.current;
    return Tc.current = Xo, e === null ? Xo : e;
  }
  function Ad() {
    (vn === 0 || vn === 3 || vn === 2) && (vn = 4), Tn === null || (zs & 268435455) === 0 && (Nc & 268435455) === 0 || ns(Tn, Vn);
  }
  function Ic(e, t) {
    var i = ct;
    ct |= 2;
    var s = Of();
    (Tn !== e || Vn !== t) && (co = null, Us(e, t));
    do
      try {
        J0();
        break;
      } catch (a) {
        Af(e, a);
      }
    while (!0);
    if (Tl(), ct = i, Tc.current = s, cn !== null) throw Error(w(261));
    return Tn = null, Vn = 0, vn;
  }
  function J0() {
    for (; cn !== null; ) If(cn);
  }
  function Z0() {
    for (; cn !== null && !ld(); ) If(cn);
  }
  function If(e) {
    var t = Uf(e.alternate, e, Mr);
    e.memoizedProps = e.pendingProps, t === null ? Df(e) : cn = t, kd.current = null;
  }
  function Df(e) {
    var t = e;
    do {
      var i = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (i = W0(i, t, Mr), i !== null) {
          cn = i;
          return;
        }
      } else {
        if (i = q0(i, t), i !== null) {
          i.flags &= 32767, cn = i;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          vn = 6, cn = null;
          return;
        }
      }
      if (t = t.sibling, t !== null) {
        cn = t;
        return;
      }
      cn = t = e;
    } while (t !== null);
    vn === 0 && (vn = 5);
  }
  function Bs(e, t, i) {
    var s = ut, a = Wr.transition;
    try {
      Wr.transition = null, ut = 1, $0(e, t, i, s);
    } finally {
      Wr.transition = a, ut = s;
    }
    return null;
  }
  function $0(e, t, i, s) {
    do
      ql();
    while (es !== null);
    if ((ct & 6) !== 0) throw Error(w(327));
    i = e.finishedWork;
    var a = e.finishedLanes;
    if (i === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, i === e.current) throw Error(w(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var p = i.lanes | i.childLanes;
    if (cd(e, p), e === Tn && (cn = Tn = null, Vn = 0), (i.subtreeFlags & 2064) === 0 && (i.flags & 2064) === 0 || Mc || (Mc = !0, Bf(yo, function() {
      return ql(), null;
    })), p = (i.flags & 15990) !== 0, (i.subtreeFlags & 15990) !== 0 || p) {
      p = Wr.transition, Wr.transition = null;
      var A = ut;
      ut = 1;
      var K = ct;
      ct |= 4, kd.current = null, K0(e, i), Pf(i, e), Ss(_a), tl = !!va, _a = va = null, e.current = i, X0(i), ad(), ct = K, ut = A, Wr.transition = p;
    } else e.current = i;
    if (Mc && (Mc = !1, es = e, Lc = a), p = e.pendingLanes, p === 0 && ($o = null), Ct(i.stateNode), Sr(e, Gt()), t !== null) for (s = e.onRecoverableError, i = 0; i < t.length; i++) a = t[i], s(a.value, { componentStack: a.stack, digest: a.digest });
    if (Fc) throw Fc = !1, e = Rd, Rd = null, e;
    return (Lc & 1) !== 0 && e.tag !== 0 && ql(), p = e.pendingLanes, (p & 1) !== 0 ? e === Td ? Ua++ : (Ua = 0, Td = e) : Ua = 0, ki(), null;
  }
  function ql() {
    if (es !== null) {
      var e = fs(Lc), t = Wr.transition, i = ut;
      try {
        if (Wr.transition = null, ut = 16 > e ? 16 : e, es === null) var s = !1;
        else {
          if (e = es, es = null, Lc = 0, (ct & 6) !== 0) throw Error(w(331));
          var a = ct;
          for (ct |= 4, Ae = e.current; Ae !== null; ) {
            var p = Ae, A = p.child;
            if ((Ae.flags & 16) !== 0) {
              var K = p.deletions;
              if (K !== null) {
                for (var ee = 0; ee < K.length; ee++) {
                  var de = K[ee];
                  for (Ae = de; Ae !== null; ) {
                    var _e = Ae;
                    switch (_e.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Da(8, _e, p);
                    }
                    var Se = _e.child;
                    if (Se !== null) Se.return = _e, Ae = Se;
                    else for (; Ae !== null; ) {
                      _e = Ae;
                      var ve = _e.sibling, Me = _e.return;
                      if (wf(_e), _e === de) {
                        Ae = null;
                        break;
                      }
                      if (ve !== null) {
                        ve.return = Me, Ae = ve;
                        break;
                      }
                      Ae = Me;
                    }
                  }
                }
                var Oe = p.alternate;
                if (Oe !== null) {
                  var De = Oe.child;
                  if (De !== null) {
                    Oe.child = null;
                    do {
                      var tn = De.sibling;
                      De.sibling = null, De = tn;
                    } while (De !== null);
                  }
                }
                Ae = p;
              }
            }
            if ((p.subtreeFlags & 2064) !== 0 && A !== null) A.return = p, Ae = A;
            else e: for (; Ae !== null; ) {
              if (p = Ae, (p.flags & 2048) !== 0) switch (p.tag) {
                case 0:
                case 11:
                case 15:
                  Da(9, p, p.return);
              }
              var le = p.sibling;
              if (le !== null) {
                le.return = p.return, Ae = le;
                break e;
              }
              Ae = p.return;
            }
          }
          var ne = e.current;
          for (Ae = ne; Ae !== null; ) {
            A = Ae;
            var ae = A.child;
            if ((A.subtreeFlags & 2064) !== 0 && ae !== null) ae.return = A, Ae = ae;
            else e: for (A = ne; Ae !== null; ) {
              if (K = Ae, (K.flags & 2048) !== 0) try {
                switch (K.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Rc(9, K);
                }
              } catch (ze) {
                qt(K, K.return, ze);
              }
              if (K === A) {
                Ae = null;
                break e;
              }
              var Ce = K.sibling;
              if (Ce !== null) {
                Ce.return = K.return, Ae = Ce;
                break e;
              }
              Ae = K.return;
            }
          }
          if (ct = a, ki(), fn && typeof fn.onPostCommitFiberRoot == "function") try {
            fn.onPostCommitFiberRoot(Kr, e);
          } catch {
          }
          s = !0;
        }
        return s;
      } finally {
        ut = i, Wr.transition = t;
      }
    }
    return !1;
  }
  function zf(e, t, i) {
    t = uo(i, t), t = Ec(e, t, 1), e = Hr(e, t, 1), t = cr(), e !== null && (ds(e, 1, t), Sr(e, t));
  }
  function qt(e, t, i) {
    if (e.tag === 3) zf(e, e, i);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        zf(t, e, i);
        break;
      } else if (t.tag === 1) {
        var s = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && ($o === null || !$o.has(s))) {
          e = uo(i, e), e = n(t, e, 1), t = Hr(t, e, 1), e = cr(), t !== null && (ds(t, 1, e), Sr(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function e1(e, t, i) {
    var s = e.pingCache;
    s !== null && s.delete(t), t = cr(), e.pingedLanes |= e.suspendedLanes & i, Tn === e && (Vn & i) === i && (vn === 4 || vn === 3 && (Vn & 130023424) === Vn && 500 > Gt() - Pd ? Us(e, 0) : Ed |= i), Sr(e, t);
  }
  function Gf(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = Xr, Xr <<= 1, (Xr & 130023424) === 0 && (Xr = 4194304)));
    var i = cr();
    e = ar(e, t), e !== null && (ds(e, t, i), Sr(e, i));
  }
  function t1(e) {
    var t = e.memoizedState, i = 0;
    t !== null && (i = t.retryLane), Gf(e, i);
  }
  function n1(e, t) {
    var i = 0;
    switch (e.tag) {
      case 13:
        var s = e.stateNode, a = e.memoizedState;
        a !== null && (i = a.retryLane);
        break;
      case 19:
        s = e.stateNode;
        break;
      default:
        throw Error(w(314));
    }
    s !== null && s.delete(t), Gf(e, i);
  }
  var Uf;
  Uf = function(e, t, i) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || xn.current) y = !0;
    else {
      if ((e.lanes & i) === 0 && (t.flags & 128) === 0) return y = !1, vd(e, t, i);
      y = (e.flags & 131072) !== 0;
    }
    else y = !1, pt && (t.flags & 1048576) !== 0 && pc(t, Pi, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var s = t.type;
        it(e, t), e = t.pendingProps;
        var a = eo(t, mn.current);
        ni(t, i), a = Wo(null, t, s, e, a, i);
        var p = qo();
        return t.flags |= 1, typeof a == "object" && a !== null && typeof a.render == "function" && a.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Cn(s) ? (p = !0, to(t)) : p = !1, t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, As(t), a.updater = bo, t.stateNode = a, a._reactInternals = t, Bl(t, s, e, i), t = gt(null, t, s, !0, p, i)) : (t.tag = 0, pt && p && Do(t), V(null, t, a, i), t = t.child), t;
      case 16:
        s = t.elementType;
        e: {
          switch (it(e, t), e = t.pendingProps, a = s._init, s = a(s._payload), t.type = s, a = t.tag = i1(s), e = yn(s, e), a) {
            case 0:
              t = Te(null, t, s, e, i);
              break e;
            case 1:
              t = xt(null, t, s, e, i);
              break e;
            case 11:
              t = ie(null, t, s, e, i);
              break e;
            case 14:
              t = fe(null, t, s, yn(s.type, e), i);
              break e;
          }
          throw Error(w(
            306,
            s,
            ""
          ));
        }
        return t;
      case 0:
        return s = t.type, a = t.pendingProps, a = t.elementType === s ? a : yn(s, a), Te(e, t, s, a, i);
      case 1:
        return s = t.type, a = t.pendingProps, a = t.elementType === s ? a : yn(s, a), xt(e, t, s, a, i);
      case 3:
        e: {
          if (Un(t), e === null) throw Error(w(387));
          s = t.pendingProps, p = t.memoizedState, a = p.element, Ml(e, t), Bo(t, s, null, i);
          var A = t.memoizedState;
          if (s = A.element, p.isDehydrated) if (p = { element: s, isDehydrated: !1, cache: A.cache, pendingSuspenseBoundaries: A.pendingSuspenseBoundaries, transitions: A.transitions }, t.updateQueue.baseState = p, t.memoizedState = p, t.flags & 256) {
            a = uo(Error(w(423)), t), t = jr(e, t, s, i, a);
            break e;
          } else if (s !== a) {
            a = uo(Error(w(424)), t), t = jr(e, t, s, i, a);
            break e;
          } else for (Ee = Ir(t.stateNode.containerInfo.firstChild), or = t, pt = !0, sr = null, i = yr(t, null, s, i), t.child = i; i; ) i.flags = i.flags & -3 | 4096, i = i.sibling;
          else {
            if (oo(), s === a) {
              t = Rn(e, t, i);
              break e;
            }
            V(e, t, s, i);
          }
          t = t.child;
        }
        return t;
      case 5:
        return Vo(t), e === null && zo(t), s = t.type, a = t.pendingProps, p = e !== null ? e.memoizedProps : null, A = a.children, Sa(s, a) ? A = null : p !== null && Sa(s, p) && (t.flags |= 32), qe(e, t), V(e, t, A, i), t.child;
      case 6:
        return e === null && zo(t), null;
      case 13:
        return he(e, t, i);
      case 4:
        return Ti(t, t.stateNode.containerInfo), s = t.pendingProps, e === null ? t.child = so(t, null, s, i) : V(e, t, s, i), t.child;
      case 11:
        return s = t.type, a = t.pendingProps, a = t.elementType === s ? a : yn(s, a), ie(e, t, s, a, i);
      case 7:
        return V(e, t, t.pendingProps, i), t.child;
      case 8:
        return V(e, t, t.pendingProps.children, i), t.child;
      case 12:
        return V(e, t, t.pendingProps.children, i), t.child;
      case 10:
        e: {
          if (s = t.type._context, a = t.pendingProps, p = t.memoizedProps, A = a.value, yt(Ms, s._currentValue), s._currentValue = A, p !== null) if (Yn(p.value, A)) {
            if (p.children === a.children && !xn.current) {
              t = Rn(e, t, i);
              break e;
            }
          } else for (p = t.child, p !== null && (p.return = t); p !== null; ) {
            var K = p.dependencies;
            if (K !== null) {
              A = p.child;
              for (var ee = K.firstContext; ee !== null; ) {
                if (ee.context === s) {
                  if (p.tag === 1) {
                    ee = Vr(-1, i & -i), ee.tag = 2;
                    var de = p.updateQueue;
                    if (de !== null) {
                      de = de.shared;
                      var _e = de.pending;
                      _e === null ? ee.next = ee : (ee.next = _e.next, _e.next = ee), de.pending = ee;
                    }
                  }
                  p.lanes |= i, ee = p.alternate, ee !== null && (ee.lanes |= i), Fl(
                    p.return,
                    i,
                    t
                  ), K.lanes |= i;
                  break;
                }
                ee = ee.next;
              }
            } else if (p.tag === 10) A = p.type === t.type ? null : p.child;
            else if (p.tag === 18) {
              if (A = p.return, A === null) throw Error(w(341));
              A.lanes |= i, K = A.alternate, K !== null && (K.lanes |= i), Fl(A, i, t), A = p.sibling;
            } else A = p.child;
            if (A !== null) A.return = p;
            else for (A = p; A !== null; ) {
              if (A === t) {
                A = null;
                break;
              }
              if (p = A.sibling, p !== null) {
                p.return = A.return, A = p;
                break;
              }
              A = A.return;
            }
            p = A;
          }
          V(e, t, a.children, i), t = t.child;
        }
        return t;
      case 9:
        return a = t.type, s = t.pendingProps.children, ni(t, i), a = zn(a), s = s(a), t.flags |= 1, V(e, t, s, i), t.child;
      case 14:
        return s = t.type, a = yn(s, t.pendingProps), a = yn(s.type, a), fe(e, t, s, a, i);
      case 15:
        return we(e, t, t.type, t.pendingProps, i);
      case 17:
        return s = t.type, a = t.pendingProps, a = t.elementType === s ? a : yn(s, a), it(e, t), t.tag = 1, Cn(s) ? (e = !0, to(t)) : e = !1, ni(t, i), kc(t, s, a), Bl(t, s, a, i), gt(null, t, s, !0, e, i);
      case 19:
        return en(e, t, i);
      case 22:
        return Le(e, t, i);
    }
    throw Error(w(156, t.tag));
  };
  function Bf(e, t) {
    return Bu(e, t);
  }
  function r1(e, t, i, s) {
    this.tag = e, this.key = i, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = s, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function qr(e, t, i, s) {
    return new r1(e, t, i, s);
  }
  function Od(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function i1(e) {
    if (typeof e == "function") return Od(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === Z) return 11;
      if (e === $) return 14;
    }
    return 2;
  }
  function rs(e, t) {
    var i = e.alternate;
    return i === null ? (i = qr(e.tag, t, e.key, e.mode), i.elementType = e.elementType, i.type = e.type, i.stateNode = e.stateNode, i.alternate = e, e.alternate = i) : (i.pendingProps = t, i.type = e.type, i.flags = 0, i.subtreeFlags = 0, i.deletions = null), i.flags = e.flags & 14680064, i.childLanes = e.childLanes, i.lanes = e.lanes, i.child = e.child, i.memoizedProps = e.memoizedProps, i.memoizedState = e.memoizedState, i.updateQueue = e.updateQueue, t = e.dependencies, i.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, i.sibling = e.sibling, i.index = e.index, i.ref = e.ref, i;
  }
  function Dc(e, t, i, s, a, p) {
    var A = 2;
    if (s = e, typeof e == "function") Od(e) && (A = 1);
    else if (typeof e == "string") A = 5;
    else e: switch (e) {
      case b:
        return Vs(i.children, a, p, t);
      case F:
        A = 8, a |= 8;
        break;
      case G:
        return e = qr(12, i, t, a | 2), e.elementType = G, e.lanes = p, e;
      case re:
        return e = qr(13, i, t, a), e.elementType = re, e.lanes = p, e;
      case Y:
        return e = qr(19, i, t, a), e.elementType = Y, e.lanes = p, e;
      case T:
        return zc(i, a, p, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case U:
            A = 10;
            break e;
          case Q:
            A = 9;
            break e;
          case Z:
            A = 11;
            break e;
          case $:
            A = 14;
            break e;
          case pe:
            A = 16, s = null;
            break e;
        }
        throw Error(w(130, e == null ? e : typeof e, ""));
    }
    return t = qr(A, i, t, a), t.elementType = e, t.type = s, t.lanes = p, t;
  }
  function Vs(e, t, i, s) {
    return e = qr(7, e, s, t), e.lanes = i, e;
  }
  function zc(e, t, i, s) {
    return e = qr(22, e, s, t), e.elementType = T, e.lanes = i, e.stateNode = { isHidden: !1 }, e;
  }
  function Id(e, t, i) {
    return e = qr(6, e, null, t), e.lanes = i, e;
  }
  function Dd(e, t, i) {
    return t = qr(4, e.children !== null ? e.children : [], e.key, t), t.lanes = i, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function o1(e, t, i, s, a) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Zn(0), this.expirationTimes = Zn(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Zn(0), this.identifierPrefix = s, this.onRecoverableError = a, this.mutableSourceEagerHydrationData = null;
  }
  function zd(e, t, i, s, a, p, A, K, ee) {
    return e = new o1(e, t, i, K, ee), t === 1 ? (t = 1, p === !0 && (t |= 8)) : t = 0, p = qr(3, null, null, t), e.current = p, p.stateNode = e, p.memoizedState = { element: s, isDehydrated: i, cache: null, transitions: null, pendingSuspenseBoundaries: null }, As(p), e;
  }
  function s1(e, t, i) {
    var s = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: j, key: s == null ? null : "" + s, children: e, containerInfo: t, implementation: i };
  }
  function Vf(e) {
    if (!e) return zr;
    e = e._reactInternals;
    e: {
      if (Di(e) !== e || e.tag !== 1) throw Error(w(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Cn(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(w(171));
    }
    if (e.tag === 1) {
      var i = e.type;
      if (Cn(i)) return Cl(e, i, t);
    }
    return t;
  }
  function Hf(e, t, i, s, a, p, A, K, ee) {
    return e = zd(i, s, !0, e, a, p, A, K, ee), e.context = Vf(null), i = e.current, s = cr(), a = ts(i), p = Vr(s, a), p.callback = t ?? null, Hr(i, p, a), e.current.lanes = a, ds(e, a, s), Sr(e, s), e;
  }
  function Gc(e, t, i, s) {
    var a = t.current, p = cr(), A = ts(a);
    return i = Vf(i), t.context === null ? t.context = i : t.pendingContext = i, t = Vr(p, A), t.payload = { element: e }, s = s === void 0 ? null : s, s !== null && (t.callback = s), e = Hr(a, t, A), e !== null && (ai(e, a, A, p), Ll(e, a, A)), A;
  }
  function Uc(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function jf(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var i = e.retryLane;
      e.retryLane = i !== 0 && i < t ? i : t;
    }
  }
  function Gd(e, t) {
    jf(e, t), (e = e.alternate) && jf(e, t);
  }
  function l1() {
    return null;
  }
  var Wf = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function Ud(e) {
    this._internalRoot = e;
  }
  Bc.prototype.render = Ud.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(w(409));
    Gc(e, t, null, null);
  }, Bc.prototype.unmount = Ud.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Gs(function() {
        Gc(null, e, null, null);
      }), t[Dr] = null;
    }
  };
  function Bc(e) {
    this._internalRoot = e;
  }
  Bc.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = qu();
      e = { blockedOn: null, target: e, priority: t };
      for (var i = 0; i < Or.length && t !== 0 && t < Or[i].priority; i++) ;
      Or.splice(i, 0, e), i === 0 && Zs(e);
    }
  };
  function Bd(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function Vc(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function qf() {
  }
  function a1(e, t, i, s, a) {
    if (a) {
      if (typeof s == "function") {
        var p = s;
        s = function() {
          var de = Uc(A);
          p.call(de);
        };
      }
      var A = Hf(t, s, e, 0, null, !1, !1, "", qf);
      return e._reactRootContainer = A, e[Dr] = A.current, Qi(e.nodeType === 8 ? e.parentNode : e), Gs(), A;
    }
    for (; a = e.lastChild; ) e.removeChild(a);
    if (typeof s == "function") {
      var K = s;
      s = function() {
        var de = Uc(ee);
        K.call(de);
      };
    }
    var ee = zd(e, 0, !1, null, null, !1, !1, "", qf);
    return e._reactRootContainer = ee, e[Dr] = ee.current, Qi(e.nodeType === 8 ? e.parentNode : e), Gs(function() {
      Gc(t, ee, i, s);
    }), ee;
  }
  function Hc(e, t, i, s, a) {
    var p = i._reactRootContainer;
    if (p) {
      var A = p;
      if (typeof a == "function") {
        var K = a;
        a = function() {
          var ee = Uc(A);
          K.call(ee);
        };
      }
      Gc(t, A, e, a);
    } else A = a1(i, t, e, a, s);
    return Uc(A);
  }
  _o = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var i = on(t.pendingLanes);
          i !== 0 && (Jl(t, i | 1), Sr(t, Gt()), (ct & 6) === 0 && (Wl = Gt() + 500, ki()));
        }
        break;
      case 13:
        Gs(function() {
          var s = ar(e, 1);
          if (s !== null) {
            var a = cr();
            ai(s, e, 1, a);
          }
        }), Gd(e, 1);
    }
  }, So = function(e) {
    if (e.tag === 13) {
      var t = ar(e, 134217728);
      if (t !== null) {
        var i = cr();
        ai(t, e, 134217728, i);
      }
      Gd(e, 134217728);
    }
  }, Wu = function(e) {
    if (e.tag === 13) {
      var t = ts(e), i = ar(e, t);
      if (i !== null) {
        var s = cr();
        ai(i, e, t, s);
      }
      Gd(e, t);
    }
  }, qu = function() {
    return ut;
  }, bs = function(e, t) {
    var i = ut;
    try {
      return ut = e, t();
    } finally {
      ut = i;
    }
  }, Jn = function(e, t, i) {
    switch (t) {
      case "input":
        if (st(e, i), t = i.name, i.type === "radio" && t != null) {
          for (i = e; i.parentNode; ) i = i.parentNode;
          for (i = i.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < i.length; t++) {
            var s = i[t];
            if (s !== e && s.form === e.form) {
              var a = an(s);
              if (!a) throw Error(w(90));
              Be(s), st(s, a);
            }
          }
        }
        break;
      case "textarea":
        Vt(e, i);
        break;
      case "select":
        t = i.value, t != null && Hn(e, !!i.multiple, t, !1);
    }
  }, qs = Md, po = Gs;
  var u1 = { usingClientEntryPoint: !1, Events: [Rs, Jt, an, ui, ci, Md] }, Ba = { findFiberByHostInstance: xi, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, c1 = { bundleType: Ba.bundleType, version: Ba.version, rendererPackageName: Ba.rendererPackageName, rendererConfig: Ba.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: R.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = Gu(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: Ba.findFiberByHostInstance || l1, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var jc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!jc.isDisabled && jc.supportsFiber) try {
      Kr = jc.inject(c1), fn = jc;
    } catch {
    }
  }
  return wr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = u1, wr.createPortal = function(e, t) {
    var i = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Bd(t)) throw Error(w(200));
    return s1(e, t, null, i);
  }, wr.createRoot = function(e, t) {
    if (!Bd(e)) throw Error(w(299));
    var i = !1, s = "", a = Wf;
    return t != null && (t.unstable_strictMode === !0 && (i = !0), t.identifierPrefix !== void 0 && (s = t.identifierPrefix), t.onRecoverableError !== void 0 && (a = t.onRecoverableError)), t = zd(e, 1, !1, null, null, i, !1, s, a), e[Dr] = t.current, Qi(e.nodeType === 8 ? e.parentNode : e), new Ud(t);
  }, wr.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(w(188)) : (e = Object.keys(e).join(","), Error(w(268, e)));
    return e = Gu(t), e = e === null ? null : e.stateNode, e;
  }, wr.flushSync = function(e) {
    return Gs(e);
  }, wr.hydrate = function(e, t, i) {
    if (!Vc(t)) throw Error(w(200));
    return Hc(null, e, t, !0, i);
  }, wr.hydrateRoot = function(e, t, i) {
    if (!Bd(e)) throw Error(w(405));
    var s = i != null && i.hydratedSources || null, a = !1, p = "", A = Wf;
    if (i != null && (i.unstable_strictMode === !0 && (a = !0), i.identifierPrefix !== void 0 && (p = i.identifierPrefix), i.onRecoverableError !== void 0 && (A = i.onRecoverableError)), t = Hf(t, null, e, 1, i ?? null, a, !1, p, A), e[Dr] = t.current, Qi(e), s) for (e = 0; e < s.length; e++) i = s[e], a = i._getVersion, a = a(i._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [i, a] : t.mutableSourceEagerHydrationData.push(
      i,
      a
    );
    return new Bc(t);
  }, wr.render = function(e, t, i) {
    if (!Vc(t)) throw Error(w(200));
    return Hc(null, e, t, !1, i);
  }, wr.unmountComponentAtNode = function(e) {
    if (!Vc(e)) throw Error(w(40));
    return e._reactRootContainer ? (Gs(function() {
      Hc(null, null, e, !1, function() {
        e._reactRootContainer = null, e[Dr] = null;
      });
    }), !0) : !1;
  }, wr.unstable_batchedUpdates = Md, wr.unstable_renderSubtreeIntoContainer = function(e, t, i, s) {
    if (!Vc(i)) throw Error(w(200));
    if (e == null || e._reactInternals === void 0) throw Error(w(38));
    return Hc(e, t, i, !1, s);
  }, wr.version = "18.3.1-next-f1338f8080-20240426", wr;
}
var eh;
function y1() {
  if (eh) return jd.exports;
  eh = 1;
  function u() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
      } catch (d) {
        console.error(d);
      }
  }
  return u(), jd.exports = m1(), jd.exports;
}
var th;
function v1() {
  if (th) return Wc;
  th = 1;
  var u = y1();
  return Wc.createRoot = u.createRoot, Wc.hydrateRoot = u.hydrateRoot, Wc;
}
var _1 = v1(), Jc = { exports: {} }, Ha = {}, Yd = {}, Kd = {}, nh;
function et() {
  return nh || (nh = 1, (function(u) {
    Object.defineProperty(u, "__esModule", { value: !0 }), u._registerNode = u.Konva = u.glob = void 0;
    const d = Math.PI / 180;
    function w() {
      return typeof window < "u" && ({}.toString.call(window) === "[object Window]" || {}.toString.call(window) === "[object global]");
    }
    u.glob = typeof Yf < "u" ? Yf : typeof window < "u" ? window : typeof WorkerGlobalScope < "u" ? self : {}, u.Konva = {
      _global: u.glob,
      version: "9.3.22",
      isBrowser: w(),
      isUnminified: /param/.test((function(M) {
      }).toString()),
      dblClickWindow: 400,
      getAngle(M) {
        return u.Konva.angleDeg ? M * d : M;
      },
      enableTrace: !1,
      pointerEventsEnabled: !0,
      autoDrawEnabled: !0,
      hitOnDragEnabled: !1,
      capturePointerEventsEnabled: !1,
      _mouseListenClick: !1,
      _touchListenClick: !1,
      _pointerListenClick: !1,
      _mouseInDblClickWindow: !1,
      _touchInDblClickWindow: !1,
      _pointerInDblClickWindow: !1,
      _mouseDblClickPointerId: null,
      _touchDblClickPointerId: null,
      _pointerDblClickPointerId: null,
      _fixTextRendering: !1,
      pixelRatio: typeof window < "u" && window.devicePixelRatio || 1,
      dragDistance: 3,
      angleDeg: !0,
      showWarnings: !0,
      dragButtons: [0, 1],
      isDragging() {
        return u.Konva.DD.isDragging;
      },
      isTransforming() {
        var M;
        return (M = u.Konva.Transformer) === null || M === void 0 ? void 0 : M.isTransforming();
      },
      isDragReady() {
        return !!u.Konva.DD.node;
      },
      releaseCanvasOnDestroy: !0,
      document: u.glob.document,
      _injectGlobal(M) {
        u.glob.Konva = M;
      }
    };
    const O = (M) => {
      u.Konva[M.prototype.getClassName()] = M;
    };
    u._registerNode = O, u.Konva._injectGlobal(u.Konva);
  })(Kd)), Kd;
}
var Xd = {}, rh;
function Yt() {
  return rh || (rh = 1, (function(u) {
    Object.defineProperty(u, "__esModule", { value: !0 }), u.Util = u.Transform = void 0;
    const d = et();
    class w {
      constructor(R = [1, 0, 0, 1, 0, 0]) {
        this.dirty = !1, this.m = R && R.slice() || [1, 0, 0, 1, 0, 0];
      }
      reset() {
        this.m[0] = 1, this.m[1] = 0, this.m[2] = 0, this.m[3] = 1, this.m[4] = 0, this.m[5] = 0;
      }
      copy() {
        return new w(this.m);
      }
      copyInto(R) {
        R.m[0] = this.m[0], R.m[1] = this.m[1], R.m[2] = this.m[2], R.m[3] = this.m[3], R.m[4] = this.m[4], R.m[5] = this.m[5];
      }
      point(R) {
        const D = this.m;
        return {
          x: D[0] * R.x + D[2] * R.y + D[4],
          y: D[1] * R.x + D[3] * R.y + D[5]
        };
      }
      translate(R, D) {
        return this.m[4] += this.m[0] * R + this.m[2] * D, this.m[5] += this.m[1] * R + this.m[3] * D, this;
      }
      scale(R, D) {
        return this.m[0] *= R, this.m[1] *= R, this.m[2] *= D, this.m[3] *= D, this;
      }
      rotate(R) {
        const D = Math.cos(R), j = Math.sin(R), b = this.m[0] * D + this.m[2] * j, F = this.m[1] * D + this.m[3] * j, G = this.m[0] * -j + this.m[2] * D, U = this.m[1] * -j + this.m[3] * D;
        return this.m[0] = b, this.m[1] = F, this.m[2] = G, this.m[3] = U, this;
      }
      getTranslation() {
        return {
          x: this.m[4],
          y: this.m[5]
        };
      }
      skew(R, D) {
        const j = this.m[0] + this.m[2] * D, b = this.m[1] + this.m[3] * D, F = this.m[2] + this.m[0] * R, G = this.m[3] + this.m[1] * R;
        return this.m[0] = j, this.m[1] = b, this.m[2] = F, this.m[3] = G, this;
      }
      multiply(R) {
        const D = this.m[0] * R.m[0] + this.m[2] * R.m[1], j = this.m[1] * R.m[0] + this.m[3] * R.m[1], b = this.m[0] * R.m[2] + this.m[2] * R.m[3], F = this.m[1] * R.m[2] + this.m[3] * R.m[3], G = this.m[0] * R.m[4] + this.m[2] * R.m[5] + this.m[4], U = this.m[1] * R.m[4] + this.m[3] * R.m[5] + this.m[5];
        return this.m[0] = D, this.m[1] = j, this.m[2] = b, this.m[3] = F, this.m[4] = G, this.m[5] = U, this;
      }
      invert() {
        const R = 1 / (this.m[0] * this.m[3] - this.m[1] * this.m[2]), D = this.m[3] * R, j = -this.m[1] * R, b = -this.m[2] * R, F = this.m[0] * R, G = R * (this.m[2] * this.m[5] - this.m[3] * this.m[4]), U = R * (this.m[1] * this.m[4] - this.m[0] * this.m[5]);
        return this.m[0] = D, this.m[1] = j, this.m[2] = b, this.m[3] = F, this.m[4] = G, this.m[5] = U, this;
      }
      getMatrix() {
        return this.m;
      }
      decompose() {
        const R = this.m[0], D = this.m[1], j = this.m[2], b = this.m[3], F = this.m[4], G = this.m[5], U = R * b - D * j, Q = {
          x: F,
          y: G,
          rotation: 0,
          scaleX: 0,
          scaleY: 0,
          skewX: 0,
          skewY: 0
        };
        if (R != 0 || D != 0) {
          const Z = Math.sqrt(R * R + D * D);
          Q.rotation = D > 0 ? Math.acos(R / Z) : -Math.acos(R / Z), Q.scaleX = Z, Q.scaleY = U / Z, Q.skewX = (R * j + D * b) / U, Q.skewY = 0;
        } else if (j != 0 || b != 0) {
          const Z = Math.sqrt(j * j + b * b);
          Q.rotation = Math.PI / 2 - (b > 0 ? Math.acos(-j / Z) : -Math.acos(j / Z)), Q.scaleX = U / Z, Q.scaleY = Z, Q.skewX = 0, Q.skewY = (R * j + D * b) / U;
        }
        return Q.rotation = u.Util._getRotation(Q.rotation), Q;
      }
    }
    u.Transform = w;
    const O = "[object Array]", M = "[object Number]", x = "[object String]", h = "[object Boolean]", m = Math.PI / 180, g = 180 / Math.PI, C = "#", E = "", N = "0", k = "Konva warning: ", _ = "Konva error: ", S = "rgb(", P = {
      aliceblue: [240, 248, 255],
      antiquewhite: [250, 235, 215],
      aqua: [0, 255, 255],
      aquamarine: [127, 255, 212],
      azure: [240, 255, 255],
      beige: [245, 245, 220],
      bisque: [255, 228, 196],
      black: [0, 0, 0],
      blanchedalmond: [255, 235, 205],
      blue: [0, 0, 255],
      blueviolet: [138, 43, 226],
      brown: [165, 42, 42],
      burlywood: [222, 184, 135],
      cadetblue: [95, 158, 160],
      chartreuse: [127, 255, 0],
      chocolate: [210, 105, 30],
      coral: [255, 127, 80],
      cornflowerblue: [100, 149, 237],
      cornsilk: [255, 248, 220],
      crimson: [220, 20, 60],
      cyan: [0, 255, 255],
      darkblue: [0, 0, 139],
      darkcyan: [0, 139, 139],
      darkgoldenrod: [184, 132, 11],
      darkgray: [169, 169, 169],
      darkgreen: [0, 100, 0],
      darkgrey: [169, 169, 169],
      darkkhaki: [189, 183, 107],
      darkmagenta: [139, 0, 139],
      darkolivegreen: [85, 107, 47],
      darkorange: [255, 140, 0],
      darkorchid: [153, 50, 204],
      darkred: [139, 0, 0],
      darksalmon: [233, 150, 122],
      darkseagreen: [143, 188, 143],
      darkslateblue: [72, 61, 139],
      darkslategray: [47, 79, 79],
      darkslategrey: [47, 79, 79],
      darkturquoise: [0, 206, 209],
      darkviolet: [148, 0, 211],
      deeppink: [255, 20, 147],
      deepskyblue: [0, 191, 255],
      dimgray: [105, 105, 105],
      dimgrey: [105, 105, 105],
      dodgerblue: [30, 144, 255],
      firebrick: [178, 34, 34],
      floralwhite: [255, 255, 240],
      forestgreen: [34, 139, 34],
      fuchsia: [255, 0, 255],
      gainsboro: [220, 220, 220],
      ghostwhite: [248, 248, 255],
      gold: [255, 215, 0],
      goldenrod: [218, 165, 32],
      gray: [128, 128, 128],
      green: [0, 128, 0],
      greenyellow: [173, 255, 47],
      grey: [128, 128, 128],
      honeydew: [240, 255, 240],
      hotpink: [255, 105, 180],
      indianred: [205, 92, 92],
      indigo: [75, 0, 130],
      ivory: [255, 255, 240],
      khaki: [240, 230, 140],
      lavender: [230, 230, 250],
      lavenderblush: [255, 240, 245],
      lawngreen: [124, 252, 0],
      lemonchiffon: [255, 250, 205],
      lightblue: [173, 216, 230],
      lightcoral: [240, 128, 128],
      lightcyan: [224, 255, 255],
      lightgoldenrodyellow: [250, 250, 210],
      lightgray: [211, 211, 211],
      lightgreen: [144, 238, 144],
      lightgrey: [211, 211, 211],
      lightpink: [255, 182, 193],
      lightsalmon: [255, 160, 122],
      lightseagreen: [32, 178, 170],
      lightskyblue: [135, 206, 250],
      lightslategray: [119, 136, 153],
      lightslategrey: [119, 136, 153],
      lightsteelblue: [176, 196, 222],
      lightyellow: [255, 255, 224],
      lime: [0, 255, 0],
      limegreen: [50, 205, 50],
      linen: [250, 240, 230],
      magenta: [255, 0, 255],
      maroon: [128, 0, 0],
      mediumaquamarine: [102, 205, 170],
      mediumblue: [0, 0, 205],
      mediumorchid: [186, 85, 211],
      mediumpurple: [147, 112, 219],
      mediumseagreen: [60, 179, 113],
      mediumslateblue: [123, 104, 238],
      mediumspringgreen: [0, 250, 154],
      mediumturquoise: [72, 209, 204],
      mediumvioletred: [199, 21, 133],
      midnightblue: [25, 25, 112],
      mintcream: [245, 255, 250],
      mistyrose: [255, 228, 225],
      moccasin: [255, 228, 181],
      navajowhite: [255, 222, 173],
      navy: [0, 0, 128],
      oldlace: [253, 245, 230],
      olive: [128, 128, 0],
      olivedrab: [107, 142, 35],
      orange: [255, 165, 0],
      orangered: [255, 69, 0],
      orchid: [218, 112, 214],
      palegoldenrod: [238, 232, 170],
      palegreen: [152, 251, 152],
      paleturquoise: [175, 238, 238],
      palevioletred: [219, 112, 147],
      papayawhip: [255, 239, 213],
      peachpuff: [255, 218, 185],
      peru: [205, 133, 63],
      pink: [255, 192, 203],
      plum: [221, 160, 203],
      powderblue: [176, 224, 230],
      purple: [128, 0, 128],
      rebeccapurple: [102, 51, 153],
      red: [255, 0, 0],
      rosybrown: [188, 143, 143],
      royalblue: [65, 105, 225],
      saddlebrown: [139, 69, 19],
      salmon: [250, 128, 114],
      sandybrown: [244, 164, 96],
      seagreen: [46, 139, 87],
      seashell: [255, 245, 238],
      sienna: [160, 82, 45],
      silver: [192, 192, 192],
      skyblue: [135, 206, 235],
      slateblue: [106, 90, 205],
      slategray: [119, 128, 144],
      slategrey: [119, 128, 144],
      snow: [255, 255, 250],
      springgreen: [0, 255, 127],
      steelblue: [70, 130, 180],
      tan: [210, 180, 140],
      teal: [0, 128, 128],
      thistle: [216, 191, 216],
      transparent: [255, 255, 255, 0],
      tomato: [255, 99, 71],
      turquoise: [64, 224, 208],
      violet: [238, 130, 238],
      wheat: [245, 222, 179],
      white: [255, 255, 255],
      whitesmoke: [245, 245, 245],
      yellow: [255, 255, 0],
      yellowgreen: [154, 205, 5]
    }, I = /rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)/;
    let H = [];
    const v = typeof requestAnimationFrame < "u" && requestAnimationFrame || function(f) {
      setTimeout(f, 60);
    };
    u.Util = {
      _isElement(f) {
        return !!(f && f.nodeType == 1);
      },
      _isFunction(f) {
        return !!(f && f.constructor && f.call && f.apply);
      },
      _isPlainObject(f) {
        return !!f && f.constructor === Object;
      },
      _isArray(f) {
        return Object.prototype.toString.call(f) === O;
      },
      _isNumber(f) {
        return Object.prototype.toString.call(f) === M && !isNaN(f) && isFinite(f);
      },
      _isString(f) {
        return Object.prototype.toString.call(f) === x;
      },
      _isBoolean(f) {
        return Object.prototype.toString.call(f) === h;
      },
      isObject(f) {
        return f instanceof Object;
      },
      isValidSelector(f) {
        if (typeof f != "string")
          return !1;
        const R = f[0];
        return R === "#" || R === "." || R === R.toUpperCase();
      },
      _sign(f) {
        return f === 0 || f > 0 ? 1 : -1;
      },
      requestAnimFrame(f) {
        H.push(f), H.length === 1 && v(function() {
          const R = H;
          H = [], R.forEach(function(D) {
            D();
          });
        });
      },
      createCanvasElement() {
        const f = document.createElement("canvas");
        try {
          f.style = f.style || {};
        } catch {
        }
        return f;
      },
      createImageElement() {
        return document.createElement("img");
      },
      _isInDocument(f) {
        for (; f = f.parentNode; )
          if (f == document)
            return !0;
        return !1;
      },
      _urlToImage(f, R) {
        const D = u.Util.createImageElement();
        D.onload = function() {
          R(D);
        }, D.src = f;
      },
      _rgbToHex(f, R, D) {
        return ((1 << 24) + (f << 16) + (R << 8) + D).toString(16).slice(1);
      },
      _hexToRgb(f) {
        f = f.replace(C, E);
        const R = parseInt(f, 16);
        return {
          r: R >> 16 & 255,
          g: R >> 8 & 255,
          b: R & 255
        };
      },
      getRandomColor() {
        let f = (Math.random() * 16777215 << 0).toString(16);
        for (; f.length < 6; )
          f = N + f;
        return C + f;
      },
      getRGB(f) {
        let R;
        return f in P ? (R = P[f], {
          r: R[0],
          g: R[1],
          b: R[2]
        }) : f[0] === C ? this._hexToRgb(f.substring(1)) : f.substr(0, 4) === S ? (R = I.exec(f.replace(/ /g, "")), {
          r: parseInt(R[1], 10),
          g: parseInt(R[2], 10),
          b: parseInt(R[3], 10)
        }) : {
          r: 0,
          g: 0,
          b: 0
        };
      },
      colorToRGBA(f) {
        return f = f || "black", u.Util._namedColorToRBA(f) || u.Util._hex3ColorToRGBA(f) || u.Util._hex4ColorToRGBA(f) || u.Util._hex6ColorToRGBA(f) || u.Util._hex8ColorToRGBA(f) || u.Util._rgbColorToRGBA(f) || u.Util._rgbaColorToRGBA(f) || u.Util._hslColorToRGBA(f);
      },
      _namedColorToRBA(f) {
        const R = P[f.toLowerCase()];
        return R ? {
          r: R[0],
          g: R[1],
          b: R[2],
          a: 1
        } : null;
      },
      _rgbColorToRGBA(f) {
        if (f.indexOf("rgb(") === 0) {
          f = f.match(/rgb\(([^)]+)\)/)[1];
          const R = f.split(/ *, */).map(Number);
          return {
            r: R[0],
            g: R[1],
            b: R[2],
            a: 1
          };
        }
      },
      _rgbaColorToRGBA(f) {
        if (f.indexOf("rgba(") === 0) {
          f = f.match(/rgba\(([^)]+)\)/)[1];
          const R = f.split(/ *, */).map((D, j) => D.slice(-1) === "%" ? j === 3 ? parseInt(D) / 100 : parseInt(D) / 100 * 255 : Number(D));
          return {
            r: R[0],
            g: R[1],
            b: R[2],
            a: R[3]
          };
        }
      },
      _hex8ColorToRGBA(f) {
        if (f[0] === "#" && f.length === 9)
          return {
            r: parseInt(f.slice(1, 3), 16),
            g: parseInt(f.slice(3, 5), 16),
            b: parseInt(f.slice(5, 7), 16),
            a: parseInt(f.slice(7, 9), 16) / 255
          };
      },
      _hex6ColorToRGBA(f) {
        if (f[0] === "#" && f.length === 7)
          return {
            r: parseInt(f.slice(1, 3), 16),
            g: parseInt(f.slice(3, 5), 16),
            b: parseInt(f.slice(5, 7), 16),
            a: 1
          };
      },
      _hex4ColorToRGBA(f) {
        if (f[0] === "#" && f.length === 5)
          return {
            r: parseInt(f[1] + f[1], 16),
            g: parseInt(f[2] + f[2], 16),
            b: parseInt(f[3] + f[3], 16),
            a: parseInt(f[4] + f[4], 16) / 255
          };
      },
      _hex3ColorToRGBA(f) {
        if (f[0] === "#" && f.length === 4)
          return {
            r: parseInt(f[1] + f[1], 16),
            g: parseInt(f[2] + f[2], 16),
            b: parseInt(f[3] + f[3], 16),
            a: 1
          };
      },
      _hslColorToRGBA(f) {
        if (/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.test(f)) {
          const [R, ...D] = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(f), j = Number(D[0]) / 360, b = Number(D[1]) / 100, F = Number(D[2]) / 100;
          let G, U, Q;
          if (b === 0)
            return Q = F * 255, {
              r: Math.round(Q),
              g: Math.round(Q),
              b: Math.round(Q),
              a: 1
            };
          F < 0.5 ? G = F * (1 + b) : G = F + b - F * b;
          const Z = 2 * F - G, re = [0, 0, 0];
          for (let Y = 0; Y < 3; Y++)
            U = j + 1 / 3 * -(Y - 1), U < 0 && U++, U > 1 && U--, 6 * U < 1 ? Q = Z + (G - Z) * 6 * U : 2 * U < 1 ? Q = G : 3 * U < 2 ? Q = Z + (G - Z) * (2 / 3 - U) * 6 : Q = Z, re[Y] = Q * 255;
          return {
            r: Math.round(re[0]),
            g: Math.round(re[1]),
            b: Math.round(re[2]),
            a: 1
          };
        }
      },
      haveIntersection(f, R) {
        return !(R.x > f.x + f.width || R.x + R.width < f.x || R.y > f.y + f.height || R.y + R.height < f.y);
      },
      cloneObject(f) {
        const R = {};
        for (const D in f)
          this._isPlainObject(f[D]) ? R[D] = this.cloneObject(f[D]) : this._isArray(f[D]) ? R[D] = this.cloneArray(f[D]) : R[D] = f[D];
        return R;
      },
      cloneArray(f) {
        return f.slice(0);
      },
      degToRad(f) {
        return f * m;
      },
      radToDeg(f) {
        return f * g;
      },
      _degToRad(f) {
        return u.Util.warn("Util._degToRad is removed. Please use public Util.degToRad instead."), u.Util.degToRad(f);
      },
      _radToDeg(f) {
        return u.Util.warn("Util._radToDeg is removed. Please use public Util.radToDeg instead."), u.Util.radToDeg(f);
      },
      _getRotation(f) {
        return d.Konva.angleDeg ? u.Util.radToDeg(f) : f;
      },
      _capitalize(f) {
        return f.charAt(0).toUpperCase() + f.slice(1);
      },
      throw(f) {
        throw new Error(_ + f);
      },
      error(f) {
        console.error(_ + f);
      },
      warn(f) {
        d.Konva.showWarnings && console.warn(k + f);
      },
      each(f, R) {
        for (const D in f)
          R(D, f[D]);
      },
      _inRange(f, R, D) {
        return R <= f && f < D;
      },
      _getProjectionToSegment(f, R, D, j, b, F) {
        let G, U, Q;
        const Z = (f - D) * (f - D) + (R - j) * (R - j);
        if (Z == 0)
          G = f, U = R, Q = (b - D) * (b - D) + (F - j) * (F - j);
        else {
          const re = ((b - f) * (D - f) + (F - R) * (j - R)) / Z;
          re < 0 ? (G = f, U = R, Q = (f - b) * (f - b) + (R - F) * (R - F)) : re > 1 ? (G = D, U = j, Q = (D - b) * (D - b) + (j - F) * (j - F)) : (G = f + re * (D - f), U = R + re * (j - R), Q = (G - b) * (G - b) + (U - F) * (U - F));
        }
        return [G, U, Q];
      },
      _getProjectionToLine(f, R, D) {
        const j = u.Util.cloneObject(f);
        let b = Number.MAX_VALUE;
        return R.forEach(function(F, G) {
          if (!D && G === R.length - 1)
            return;
          const U = R[(G + 1) % R.length], Q = u.Util._getProjectionToSegment(F.x, F.y, U.x, U.y, f.x, f.y), Z = Q[0], re = Q[1], Y = Q[2];
          Y < b && (j.x = Z, j.y = re, b = Y);
        }), j;
      },
      _prepareArrayForTween(f, R, D) {
        const j = [], b = [];
        if (f.length > R.length) {
          const G = R;
          R = f, f = G;
        }
        for (let G = 0; G < f.length; G += 2)
          j.push({
            x: f[G],
            y: f[G + 1]
          });
        for (let G = 0; G < R.length; G += 2)
          b.push({
            x: R[G],
            y: R[G + 1]
          });
        const F = [];
        return b.forEach(function(G) {
          const U = u.Util._getProjectionToLine(G, j, D);
          F.push(U.x), F.push(U.y);
        }), F;
      },
      _prepareToStringify(f) {
        let R;
        f.visitedByCircularReferenceRemoval = !0;
        for (const D in f)
          if (f.hasOwnProperty(D) && f[D] && typeof f[D] == "object") {
            if (R = Object.getOwnPropertyDescriptor(f, D), f[D].visitedByCircularReferenceRemoval || u.Util._isElement(f[D]))
              if (R.configurable)
                delete f[D];
              else
                return null;
            else if (u.Util._prepareToStringify(f[D]) === null)
              if (R.configurable)
                delete f[D];
              else
                return null;
          }
        return delete f.visitedByCircularReferenceRemoval, f;
      },
      _assign(f, R) {
        for (const D in R)
          f[D] = R[D];
        return f;
      },
      _getFirstPointerId(f) {
        return f.touches ? f.changedTouches[0].identifier : f.pointerId || 999;
      },
      releaseCanvas(...f) {
        d.Konva.releaseCanvasOnDestroy && f.forEach((R) => {
          R.width = 0, R.height = 0;
        });
      },
      drawRoundedRectPath(f, R, D, j) {
        let b = 0, F = 0, G = 0, U = 0;
        typeof j == "number" ? b = F = G = U = Math.min(j, R / 2, D / 2) : (b = Math.min(j[0] || 0, R / 2, D / 2), F = Math.min(j[1] || 0, R / 2, D / 2), U = Math.min(j[2] || 0, R / 2, D / 2), G = Math.min(j[3] || 0, R / 2, D / 2)), f.moveTo(b, 0), f.lineTo(R - F, 0), f.arc(R - F, F, F, Math.PI * 3 / 2, 0, !1), f.lineTo(R, D - U), f.arc(R - U, D - U, U, 0, Math.PI / 2, !1), f.lineTo(G, D), f.arc(G, D - G, G, Math.PI / 2, Math.PI, !1), f.lineTo(0, b), f.arc(b, b, b, Math.PI, Math.PI * 3 / 2, !1);
      }
    };
  })(Xd)), Xd;
}
var ja = {}, fo = {}, ho = {}, ih;
function P0() {
  if (ih) return ho;
  ih = 1, Object.defineProperty(ho, "__esModule", { value: !0 }), ho.HitContext = ho.SceneContext = ho.Context = void 0;
  const u = Yt(), d = et();
  function w(H) {
    const v = [], f = H.length, R = u.Util;
    for (let D = 0; D < f; D++) {
      let j = H[D];
      R._isNumber(j) ? j = Math.round(j * 1e3) / 1e3 : R._isString(j) || (j = j + ""), v.push(j);
    }
    return v;
  }
  const O = ",", M = "(", x = ")", h = "([", m = "])", g = ";", C = "()", E = "=", N = [
    "arc",
    "arcTo",
    "beginPath",
    "bezierCurveTo",
    "clearRect",
    "clip",
    "closePath",
    "createLinearGradient",
    "createPattern",
    "createRadialGradient",
    "drawImage",
    "ellipse",
    "fill",
    "fillText",
    "getImageData",
    "createImageData",
    "lineTo",
    "moveTo",
    "putImageData",
    "quadraticCurveTo",
    "rect",
    "roundRect",
    "restore",
    "rotate",
    "save",
    "scale",
    "setLineDash",
    "setTransform",
    "stroke",
    "strokeText",
    "transform",
    "translate"
  ], k = [
    "fillStyle",
    "strokeStyle",
    "shadowColor",
    "shadowBlur",
    "shadowOffsetX",
    "shadowOffsetY",
    "letterSpacing",
    "lineCap",
    "lineDashOffset",
    "lineJoin",
    "lineWidth",
    "miterLimit",
    "direction",
    "font",
    "textAlign",
    "textBaseline",
    "globalAlpha",
    "globalCompositeOperation",
    "imageSmoothingEnabled"
  ], _ = 100;
  let S = class {
    constructor(v) {
      this.canvas = v, d.Konva.enableTrace && (this.traceArr = [], this._enableTrace());
    }
    fillShape(v) {
      v.fillEnabled() && this._fill(v);
    }
    _fill(v) {
    }
    strokeShape(v) {
      v.hasStroke() && this._stroke(v);
    }
    _stroke(v) {
    }
    fillStrokeShape(v) {
      v.attrs.fillAfterStrokeEnabled ? (this.strokeShape(v), this.fillShape(v)) : (this.fillShape(v), this.strokeShape(v));
    }
    getTrace(v, f) {
      let R = this.traceArr, D = R.length, j = "", b, F, G, U;
      for (b = 0; b < D; b++)
        F = R[b], G = F.method, G ? (U = F.args, j += G, v ? j += C : u.Util._isArray(U[0]) ? j += h + U.join(O) + m : (f && (U = U.map((Q) => typeof Q == "number" ? Math.floor(Q) : Q)), j += M + U.join(O) + x)) : (j += F.property, v || (j += E + F.val)), j += g;
      return j;
    }
    clearTrace() {
      this.traceArr = [];
    }
    _trace(v) {
      let f = this.traceArr, R;
      f.push(v), R = f.length, R >= _ && f.shift();
    }
    reset() {
      const v = this.getCanvas().getPixelRatio();
      this.setTransform(1 * v, 0, 0, 1 * v, 0, 0);
    }
    getCanvas() {
      return this.canvas;
    }
    clear(v) {
      const f = this.getCanvas();
      v ? this.clearRect(v.x || 0, v.y || 0, v.width || 0, v.height || 0) : this.clearRect(0, 0, f.getWidth() / f.pixelRatio, f.getHeight() / f.pixelRatio);
    }
    _applyLineCap(v) {
      const f = v.attrs.lineCap;
      f && this.setAttr("lineCap", f);
    }
    _applyOpacity(v) {
      const f = v.getAbsoluteOpacity();
      f !== 1 && this.setAttr("globalAlpha", f);
    }
    _applyLineJoin(v) {
      const f = v.attrs.lineJoin;
      f && this.setAttr("lineJoin", f);
    }
    setAttr(v, f) {
      this._context[v] = f;
    }
    arc(v, f, R, D, j, b) {
      this._context.arc(v, f, R, D, j, b);
    }
    arcTo(v, f, R, D, j) {
      this._context.arcTo(v, f, R, D, j);
    }
    beginPath() {
      this._context.beginPath();
    }
    bezierCurveTo(v, f, R, D, j, b) {
      this._context.bezierCurveTo(v, f, R, D, j, b);
    }
    clearRect(v, f, R, D) {
      this._context.clearRect(v, f, R, D);
    }
    clip(...v) {
      this._context.clip.apply(this._context, v);
    }
    closePath() {
      this._context.closePath();
    }
    createImageData(v, f) {
      const R = arguments;
      if (R.length === 2)
        return this._context.createImageData(v, f);
      if (R.length === 1)
        return this._context.createImageData(v);
    }
    createLinearGradient(v, f, R, D) {
      return this._context.createLinearGradient(v, f, R, D);
    }
    createPattern(v, f) {
      return this._context.createPattern(v, f);
    }
    createRadialGradient(v, f, R, D, j, b) {
      return this._context.createRadialGradient(v, f, R, D, j, b);
    }
    drawImage(v, f, R, D, j, b, F, G, U) {
      const Q = arguments, Z = this._context;
      Q.length === 3 ? Z.drawImage(v, f, R) : Q.length === 5 ? Z.drawImage(v, f, R, D, j) : Q.length === 9 && Z.drawImage(v, f, R, D, j, b, F, G, U);
    }
    ellipse(v, f, R, D, j, b, F, G) {
      this._context.ellipse(v, f, R, D, j, b, F, G);
    }
    isPointInPath(v, f, R, D) {
      return R ? this._context.isPointInPath(R, v, f, D) : this._context.isPointInPath(v, f, D);
    }
    fill(...v) {
      this._context.fill.apply(this._context, v);
    }
    fillRect(v, f, R, D) {
      this._context.fillRect(v, f, R, D);
    }
    strokeRect(v, f, R, D) {
      this._context.strokeRect(v, f, R, D);
    }
    fillText(v, f, R, D) {
      D ? this._context.fillText(v, f, R, D) : this._context.fillText(v, f, R);
    }
    measureText(v) {
      return this._context.measureText(v);
    }
    getImageData(v, f, R, D) {
      return this._context.getImageData(v, f, R, D);
    }
    lineTo(v, f) {
      this._context.lineTo(v, f);
    }
    moveTo(v, f) {
      this._context.moveTo(v, f);
    }
    rect(v, f, R, D) {
      this._context.rect(v, f, R, D);
    }
    roundRect(v, f, R, D, j) {
      this._context.roundRect(v, f, R, D, j);
    }
    putImageData(v, f, R) {
      this._context.putImageData(v, f, R);
    }
    quadraticCurveTo(v, f, R, D) {
      this._context.quadraticCurveTo(v, f, R, D);
    }
    restore() {
      this._context.restore();
    }
    rotate(v) {
      this._context.rotate(v);
    }
    save() {
      this._context.save();
    }
    scale(v, f) {
      this._context.scale(v, f);
    }
    setLineDash(v) {
      this._context.setLineDash ? this._context.setLineDash(v) : "mozDash" in this._context ? this._context.mozDash = v : "webkitLineDash" in this._context && (this._context.webkitLineDash = v);
    }
    getLineDash() {
      return this._context.getLineDash();
    }
    setTransform(v, f, R, D, j, b) {
      this._context.setTransform(v, f, R, D, j, b);
    }
    stroke(v) {
      v ? this._context.stroke(v) : this._context.stroke();
    }
    strokeText(v, f, R, D) {
      this._context.strokeText(v, f, R, D);
    }
    transform(v, f, R, D, j, b) {
      this._context.transform(v, f, R, D, j, b);
    }
    translate(v, f) {
      this._context.translate(v, f);
    }
    _enableTrace() {
      let v = this, f = N.length, R = this.setAttr, D, j;
      const b = function(F) {
        let G = v[F], U;
        v[F] = function() {
          return j = w(Array.prototype.slice.call(arguments, 0)), U = G.apply(v, arguments), v._trace({
            method: F,
            args: j
          }), U;
        };
      };
      for (D = 0; D < f; D++)
        b(N[D]);
      v.setAttr = function() {
        R.apply(v, arguments);
        const F = arguments[0];
        let G = arguments[1];
        (F === "shadowOffsetX" || F === "shadowOffsetY" || F === "shadowBlur") && (G = G / this.canvas.getPixelRatio()), v._trace({
          property: F,
          val: G
        });
      };
    }
    _applyGlobalCompositeOperation(v) {
      const f = v.attrs.globalCompositeOperation;
      !f || f === "source-over" || this.setAttr("globalCompositeOperation", f);
    }
  };
  ho.Context = S, k.forEach(function(H) {
    Object.defineProperty(S.prototype, H, {
      get() {
        return this._context[H];
      },
      set(v) {
        this._context[H] = v;
      }
    });
  });
  class P extends S {
    constructor(v, { willReadFrequently: f = !1 } = {}) {
      super(v), this._context = v._canvas.getContext("2d", {
        willReadFrequently: f
      });
    }
    _fillColor(v) {
      const f = v.fill();
      this.setAttr("fillStyle", f), v._fillFunc(this);
    }
    _fillPattern(v) {
      this.setAttr("fillStyle", v._getFillPattern()), v._fillFunc(this);
    }
    _fillLinearGradient(v) {
      const f = v._getLinearGradient();
      f && (this.setAttr("fillStyle", f), v._fillFunc(this));
    }
    _fillRadialGradient(v) {
      const f = v._getRadialGradient();
      f && (this.setAttr("fillStyle", f), v._fillFunc(this));
    }
    _fill(v) {
      const f = v.fill(), R = v.getFillPriority();
      if (f && R === "color") {
        this._fillColor(v);
        return;
      }
      const D = v.getFillPatternImage();
      if (D && R === "pattern") {
        this._fillPattern(v);
        return;
      }
      const j = v.getFillLinearGradientColorStops();
      if (j && R === "linear-gradient") {
        this._fillLinearGradient(v);
        return;
      }
      const b = v.getFillRadialGradientColorStops();
      if (b && R === "radial-gradient") {
        this._fillRadialGradient(v);
        return;
      }
      f ? this._fillColor(v) : D ? this._fillPattern(v) : j ? this._fillLinearGradient(v) : b && this._fillRadialGradient(v);
    }
    _strokeLinearGradient(v) {
      const f = v.getStrokeLinearGradientStartPoint(), R = v.getStrokeLinearGradientEndPoint(), D = v.getStrokeLinearGradientColorStops(), j = this.createLinearGradient(f.x, f.y, R.x, R.y);
      if (D) {
        for (let b = 0; b < D.length; b += 2)
          j.addColorStop(D[b], D[b + 1]);
        this.setAttr("strokeStyle", j);
      }
    }
    _stroke(v) {
      const f = v.dash(), R = v.getStrokeScaleEnabled();
      if (v.hasStroke()) {
        if (!R) {
          this.save();
          const j = this.getCanvas().getPixelRatio();
          this.setTransform(j, 0, 0, j, 0, 0);
        }
        this._applyLineCap(v), f && v.dashEnabled() && (this.setLineDash(f), this.setAttr("lineDashOffset", v.dashOffset())), this.setAttr("lineWidth", v.strokeWidth()), v.getShadowForStrokeEnabled() || this.setAttr("shadowColor", "rgba(0,0,0,0)"), v.getStrokeLinearGradientColorStops() ? this._strokeLinearGradient(v) : this.setAttr("strokeStyle", v.stroke()), v._strokeFunc(this), R || this.restore();
      }
    }
    _applyShadow(v) {
      var f, R, D;
      const j = (f = v.getShadowRGBA()) !== null && f !== void 0 ? f : "black", b = (R = v.getShadowBlur()) !== null && R !== void 0 ? R : 5, F = (D = v.getShadowOffset()) !== null && D !== void 0 ? D : {
        x: 0,
        y: 0
      }, G = v.getAbsoluteScale(), U = this.canvas.getPixelRatio(), Q = G.x * U, Z = G.y * U;
      this.setAttr("shadowColor", j), this.setAttr("shadowBlur", b * Math.min(Math.abs(Q), Math.abs(Z))), this.setAttr("shadowOffsetX", F.x * Q), this.setAttr("shadowOffsetY", F.y * Z);
    }
  }
  ho.SceneContext = P;
  class I extends S {
    constructor(v) {
      super(v), this._context = v._canvas.getContext("2d", {
        willReadFrequently: !0
      });
    }
    _fill(v) {
      this.save(), this.setAttr("fillStyle", v.colorKey), v._fillFuncHit(this), this.restore();
    }
    strokeShape(v) {
      v.hasHitStroke() && this._stroke(v);
    }
    _stroke(v) {
      if (v.hasHitStroke()) {
        const f = v.getStrokeScaleEnabled();
        if (!f) {
          this.save();
          const j = this.getCanvas().getPixelRatio();
          this.setTransform(j, 0, 0, j, 0, 0);
        }
        this._applyLineCap(v);
        const R = v.hitStrokeWidth(), D = R === "auto" ? v.strokeWidth() : R;
        this.setAttr("lineWidth", D), this.setAttr("strokeStyle", v.colorKey), v._strokeFuncHit(this), f || this.restore();
      }
    }
  }
  return ho.HitContext = I, ho;
}
var oh;
function ed() {
  if (oh) return fo;
  oh = 1, Object.defineProperty(fo, "__esModule", { value: !0 }), fo.HitCanvas = fo.SceneCanvas = fo.Canvas = void 0;
  const u = Yt(), d = P0(), w = et();
  let O;
  function M() {
    if (O)
      return O;
    const g = u.Util.createCanvasElement(), C = g.getContext("2d");
    return O = (function() {
      const E = w.Konva._global.devicePixelRatio || 1, N = C.webkitBackingStorePixelRatio || C.mozBackingStorePixelRatio || C.msBackingStorePixelRatio || C.oBackingStorePixelRatio || C.backingStorePixelRatio || 1;
      return E / N;
    })(), u.Util.releaseCanvas(g), O;
  }
  let x = class {
    constructor(C) {
      this.pixelRatio = 1, this.width = 0, this.height = 0, this.isCache = !1;
      const N = (C || {}).pixelRatio || w.Konva.pixelRatio || M();
      this.pixelRatio = N, this._canvas = u.Util.createCanvasElement(), this._canvas.style.padding = "0", this._canvas.style.margin = "0", this._canvas.style.border = "0", this._canvas.style.background = "transparent", this._canvas.style.position = "absolute", this._canvas.style.top = "0", this._canvas.style.left = "0";
    }
    getContext() {
      return this.context;
    }
    getPixelRatio() {
      return this.pixelRatio;
    }
    setPixelRatio(C) {
      const E = this.pixelRatio;
      this.pixelRatio = C, this.setSize(this.getWidth() / E, this.getHeight() / E);
    }
    setWidth(C) {
      this.width = this._canvas.width = C * this.pixelRatio, this._canvas.style.width = C + "px";
      const E = this.pixelRatio;
      this.getContext()._context.scale(E, E);
    }
    setHeight(C) {
      this.height = this._canvas.height = C * this.pixelRatio, this._canvas.style.height = C + "px";
      const E = this.pixelRatio;
      this.getContext()._context.scale(E, E);
    }
    getWidth() {
      return this.width;
    }
    getHeight() {
      return this.height;
    }
    setSize(C, E) {
      this.setWidth(C || 0), this.setHeight(E || 0);
    }
    toDataURL(C, E) {
      try {
        return this._canvas.toDataURL(C, E);
      } catch {
        try {
          return this._canvas.toDataURL();
        } catch (k) {
          return u.Util.error("Unable to get data URL. " + k.message + " For more info read https://konvajs.org/docs/posts/Tainted_Canvas.html."), "";
        }
      }
    }
  };
  fo.Canvas = x;
  class h extends x {
    constructor(C = { width: 0, height: 0, willReadFrequently: !1 }) {
      super(C), this.context = new d.SceneContext(this, {
        willReadFrequently: C.willReadFrequently
      }), this.setSize(C.width, C.height);
    }
  }
  fo.SceneCanvas = h;
  class m extends x {
    constructor(C = { width: 0, height: 0 }) {
      super(C), this.hitCanvas = !0, this.context = new d.HitContext(this), this.setSize(C.width, C.height);
    }
  }
  return fo.HitCanvas = m, fo;
}
var Qd = {}, sh;
function df() {
  return sh || (sh = 1, (function(u) {
    Object.defineProperty(u, "__esModule", { value: !0 }), u.DD = void 0;
    const d = et(), w = Yt();
    u.DD = {
      get isDragging() {
        let O = !1;
        return u.DD._dragElements.forEach((M) => {
          M.dragStatus === "dragging" && (O = !0);
        }), O;
      },
      justDragged: !1,
      get node() {
        let O;
        return u.DD._dragElements.forEach((M) => {
          O = M.node;
        }), O;
      },
      _dragElements: /* @__PURE__ */ new Map(),
      _drag(O) {
        const M = [];
        u.DD._dragElements.forEach((x, h) => {
          const { node: m } = x, g = m.getStage();
          g.setPointersPositions(O), x.pointerId === void 0 && (x.pointerId = w.Util._getFirstPointerId(O));
          const C = g._changedPointerPositions.find((E) => E.id === x.pointerId);
          if (C) {
            if (x.dragStatus !== "dragging") {
              const E = m.dragDistance();
              if (Math.max(Math.abs(C.x - x.startPointerPos.x), Math.abs(C.y - x.startPointerPos.y)) < E || (m.startDrag({ evt: O }), !m.isDragging()))
                return;
            }
            m._setDragPosition(O, x), M.push(m);
          }
        }), M.forEach((x) => {
          x.fire("dragmove", {
            type: "dragmove",
            target: x,
            evt: O
          }, !0);
        });
      },
      _endDragBefore(O) {
        const M = [];
        u.DD._dragElements.forEach((x) => {
          const { node: h } = x, m = h.getStage();
          if (O && m.setPointersPositions(O), !m._changedPointerPositions.find((E) => E.id === x.pointerId))
            return;
          (x.dragStatus === "dragging" || x.dragStatus === "stopped") && (u.DD.justDragged = !0, d.Konva._mouseListenClick = !1, d.Konva._touchListenClick = !1, d.Konva._pointerListenClick = !1, x.dragStatus = "stopped");
          const C = x.node.getLayer() || x.node instanceof d.Konva.Stage && x.node;
          C && M.indexOf(C) === -1 && M.push(C);
        }), M.forEach((x) => {
          x.draw();
        });
      },
      _endDragAfter(O) {
        u.DD._dragElements.forEach((M, x) => {
          M.dragStatus === "stopped" && M.node.fire("dragend", {
            type: "dragend",
            target: M.node,
            evt: O
          }, !0), M.dragStatus !== "dragging" && u.DD._dragElements.delete(x);
        });
      }
    }, d.Konva.isBrowser && (window.addEventListener("mouseup", u.DD._endDragBefore, !0), window.addEventListener("touchend", u.DD._endDragBefore, !0), window.addEventListener("touchcancel", u.DD._endDragBefore, !0), window.addEventListener("mousemove", u.DD._drag), window.addEventListener("touchmove", u.DD._drag), window.addEventListener("mouseup", u.DD._endDragAfter, !1), window.addEventListener("touchend", u.DD._endDragAfter, !1), window.addEventListener("touchcancel", u.DD._endDragAfter, !1));
  })(Qd)), Qd;
}
var bd = {}, xr = {}, lh;
function at() {
  if (lh) return xr;
  lh = 1, Object.defineProperty(xr, "__esModule", { value: !0 }), xr.RGBComponent = O, xr.alphaComponent = M, xr.getNumberValidator = x, xr.getNumberOrArrayOfNumbersValidator = h, xr.getNumberOrAutoValidator = m, xr.getStringValidator = g, xr.getStringOrGradientValidator = C, xr.getFunctionValidator = E, xr.getNumberArrayValidator = N, xr.getBooleanValidator = k, xr.getComponentValidator = _;
  const u = et(), d = Yt();
  function w(S) {
    return d.Util._isString(S) ? '"' + S + '"' : Object.prototype.toString.call(S) === "[object Number]" || d.Util._isBoolean(S) ? S : Object.prototype.toString.call(S);
  }
  function O(S) {
    return S > 255 ? 255 : S < 0 ? 0 : Math.round(S);
  }
  function M(S) {
    return S > 1 ? 1 : S < 1e-4 ? 1e-4 : S;
  }
  function x() {
    if (u.Konva.isUnminified)
      return function(S, P) {
        return d.Util._isNumber(S) || d.Util.warn(w(S) + ' is a not valid value for "' + P + '" attribute. The value should be a number.'), S;
      };
  }
  function h(S) {
    if (u.Konva.isUnminified)
      return function(P, I) {
        let H = d.Util._isNumber(P), v = d.Util._isArray(P) && P.length == S;
        return !H && !v && d.Util.warn(w(P) + ' is a not valid value for "' + I + '" attribute. The value should be a number or Array<number>(' + S + ")"), P;
      };
  }
  function m() {
    if (u.Konva.isUnminified)
      return function(S, P) {
        return d.Util._isNumber(S) || S === "auto" || d.Util.warn(w(S) + ' is a not valid value for "' + P + '" attribute. The value should be a number or "auto".'), S;
      };
  }
  function g() {
    if (u.Konva.isUnminified)
      return function(S, P) {
        return d.Util._isString(S) || d.Util.warn(w(S) + ' is a not valid value for "' + P + '" attribute. The value should be a string.'), S;
      };
  }
  function C() {
    if (u.Konva.isUnminified)
      return function(S, P) {
        const I = d.Util._isString(S), H = Object.prototype.toString.call(S) === "[object CanvasGradient]" || S && S.addColorStop;
        return I || H || d.Util.warn(w(S) + ' is a not valid value for "' + P + '" attribute. The value should be a string or a native gradient.'), S;
      };
  }
  function E() {
    if (u.Konva.isUnminified)
      return function(S, P) {
        return d.Util._isFunction(S) || d.Util.warn(w(S) + ' is a not valid value for "' + P + '" attribute. The value should be a function.'), S;
      };
  }
  function N() {
    if (u.Konva.isUnminified)
      return function(S, P) {
        const I = Int8Array ? Object.getPrototypeOf(Int8Array) : null;
        return I && S instanceof I || (d.Util._isArray(S) ? S.forEach(function(H) {
          d.Util._isNumber(H) || d.Util.warn('"' + P + '" attribute has non numeric element ' + H + ". Make sure that all elements are numbers.");
        }) : d.Util.warn(w(S) + ' is a not valid value for "' + P + '" attribute. The value should be a array of numbers.')), S;
      };
  }
  function k() {
    if (u.Konva.isUnminified)
      return function(S, P) {
        return S === !0 || S === !1 || d.Util.warn(w(S) + ' is a not valid value for "' + P + '" attribute. The value should be a boolean.'), S;
      };
  }
  function _(S) {
    if (u.Konva.isUnminified)
      return function(P, I) {
        return P == null || d.Util.isObject(P) || d.Util.warn(w(P) + ' is a not valid value for "' + I + '" attribute. The value should be an object with properties ' + S), P;
      };
  }
  return xr;
}
var ah;
function ot() {
  return ah || (ah = 1, (function(u) {
    Object.defineProperty(u, "__esModule", { value: !0 }), u.Factory = void 0;
    const d = Yt(), w = at(), O = "get", M = "set";
    u.Factory = {
      addGetterSetter(x, h, m, g, C) {
        u.Factory.addGetter(x, h, m), u.Factory.addSetter(x, h, g, C), u.Factory.addOverloadedGetterSetter(x, h);
      },
      addGetter(x, h, m) {
        const g = O + d.Util._capitalize(h);
        x.prototype[g] = x.prototype[g] || function() {
          const C = this.attrs[h];
          return C === void 0 ? m : C;
        };
      },
      addSetter(x, h, m, g) {
        const C = M + d.Util._capitalize(h);
        x.prototype[C] || u.Factory.overWriteSetter(x, h, m, g);
      },
      overWriteSetter(x, h, m, g) {
        const C = M + d.Util._capitalize(h);
        x.prototype[C] = function(E) {
          return m && E !== void 0 && E !== null && (E = m.call(this, E, h)), this._setAttr(h, E), g && g.call(this), this;
        };
      },
      addComponentsGetterSetter(x, h, m, g, C) {
        const E = m.length, N = d.Util._capitalize, k = O + N(h), _ = M + N(h);
        x.prototype[k] = function() {
          const P = {};
          for (let I = 0; I < E; I++) {
            const H = m[I];
            P[H] = this.getAttr(h + N(H));
          }
          return P;
        };
        const S = (0, w.getComponentValidator)(m);
        x.prototype[_] = function(P) {
          const I = this.attrs[h];
          g && (P = g.call(this, P, h)), S && S.call(this, P, h);
          for (const H in P)
            P.hasOwnProperty(H) && this._setAttr(h + N(H), P[H]);
          return P || m.forEach((H) => {
            this._setAttr(h + N(H), void 0);
          }), this._fireChangeEvent(h, I, P), C && C.call(this), this;
        }, u.Factory.addOverloadedGetterSetter(x, h);
      },
      addOverloadedGetterSetter(x, h) {
        const m = d.Util._capitalize(h), g = M + m, C = O + m;
        x.prototype[h] = function() {
          return arguments.length ? (this[g](arguments[0]), this) : this[C]();
        };
      },
      addDeprecatedGetterSetter(x, h, m, g) {
        d.Util.error("Adding deprecated " + h);
        const C = O + d.Util._capitalize(h), E = h + " property is deprecated and will be removed soon. Look at Konva change log for more information.";
        x.prototype[C] = function() {
          d.Util.error(E);
          const N = this.attrs[h];
          return N === void 0 ? m : N;
        }, u.Factory.addSetter(x, h, g, function() {
          d.Util.error(E);
        }), u.Factory.addOverloadedGetterSetter(x, h);
      },
      backCompat(x, h) {
        d.Util.each(h, function(m, g) {
          const C = x.prototype[g], E = O + d.Util._capitalize(m), N = M + d.Util._capitalize(m);
          function k() {
            C.apply(this, arguments), d.Util.error('"' + m + '" method is deprecated and will be removed soon. Use ""' + g + '" instead.');
          }
          x.prototype[m] = k, x.prototype[E] = k, x.prototype[N] = k;
        });
      },
      afterSetFilter() {
        this._filterUpToDate = !1;
      }
    };
  })(bd)), bd;
}
var uh;
function nn() {
  if (uh) return ja;
  uh = 1, Object.defineProperty(ja, "__esModule", { value: !0 }), ja.Node = void 0;
  const u = ed(), d = df(), w = ot(), O = et(), M = Yt(), x = at(), h = "absoluteOpacity", m = "allEventListeners", g = "absoluteTransform", C = "absoluteScale", E = "canvas", N = "Change", k = "children", _ = "konva", S = "listening", P = "mouseenter", I = "mouseleave", H = "pointerenter", v = "pointerleave", f = "touchenter", R = "touchleave", D = "set", j = "Shape", b = " ", F = "stage", G = "transform", U = "Stage", Q = "visible", Z = [
    "xChange.konva",
    "yChange.konva",
    "scaleXChange.konva",
    "scaleYChange.konva",
    "skewXChange.konva",
    "skewYChange.konva",
    "rotationChange.konva",
    "offsetXChange.konva",
    "offsetYChange.konva",
    "transformsEnabledChange.konva"
  ].join(b);
  let re = 1, Y = class af {
    constructor(T) {
      this._id = re++, this.eventListeners = {}, this.attrs = {}, this.index = 0, this._allEventListeners = null, this.parent = null, this._cache = /* @__PURE__ */ new Map(), this._attachedDepsListeners = /* @__PURE__ */ new Map(), this._lastPos = null, this._batchingTransformChange = !1, this._needClearTransformCache = !1, this._filterUpToDate = !1, this._isUnderCache = !1, this._dragEventId = null, this._shouldFireChangeEvents = !1, this.setAttrs(T), this._shouldFireChangeEvents = !0;
    }
    hasChildren() {
      return !1;
    }
    _clearCache(T) {
      (T === G || T === g) && this._cache.get(T) ? this._cache.get(T).dirty = !0 : T ? this._cache.delete(T) : this._cache.clear();
    }
    _getCache(T, z) {
      let W = this._cache.get(T);
      return (W === void 0 || (T === G || T === g) && W.dirty === !0) && (W = z.call(this), this._cache.set(T, W)), W;
    }
    _calculate(T, z, W) {
      if (!this._attachedDepsListeners.get(T)) {
        const B = z.map((L) => L + "Change.konva").join(b);
        this.on(B, () => {
          this._clearCache(T);
        }), this._attachedDepsListeners.set(T, !0);
      }
      return this._getCache(T, W);
    }
    _getCanvasCache() {
      return this._cache.get(E);
    }
    _clearSelfAndDescendantCache(T) {
      this._clearCache(T), T === g && this.fire("absoluteTransformChange");
    }
    clearCache() {
      if (this._cache.has(E)) {
        const { scene: T, filter: z, hit: W, buffer: B } = this._cache.get(E);
        M.Util.releaseCanvas(T, z, W, B), this._cache.delete(E);
      }
      return this._clearSelfAndDescendantCache(), this._requestDraw(), this;
    }
    cache(T) {
      const z = T || {};
      let W = {};
      (z.x === void 0 || z.y === void 0 || z.width === void 0 || z.height === void 0) && (W = this.getClientRect({
        skipTransform: !0,
        relativeTo: this.getParent() || void 0
      }));
      let B = Math.ceil(z.width || W.width), L = Math.ceil(z.height || W.height), X = z.pixelRatio, J = z.x === void 0 ? Math.floor(W.x) : z.x, ue = z.y === void 0 ? Math.floor(W.y) : z.y, ge = z.offset || 0, se = z.drawBorder || !1, q = z.hitCanvasPixelRatio || 1;
      if (!B || !L) {
        M.Util.error("Can not cache the node. Width or height of the node equals 0. Caching is skipped.");
        return;
      }
      const te = Math.abs(Math.round(W.x) - J) > 0.5 ? 1 : 0, me = Math.abs(Math.round(W.y) - ue) > 0.5 ? 1 : 0;
      B += ge * 2 + te, L += ge * 2 + me, J -= ge, ue -= ge;
      const xe = new u.SceneCanvas({
        pixelRatio: X,
        width: B,
        height: L
      }), Pe = new u.SceneCanvas({
        pixelRatio: X,
        width: 0,
        height: 0,
        willReadFrequently: !0
      }), Be = new u.HitCanvas({
        pixelRatio: q,
        width: B,
        height: L
      }), Ge = xe.getContext(), be = Be.getContext(), je = new u.SceneCanvas({
        width: xe.width / xe.pixelRatio + Math.abs(J),
        height: xe.height / xe.pixelRatio + Math.abs(ue),
        pixelRatio: xe.pixelRatio
      }), dt = je.getContext();
      return Be.isCache = !0, xe.isCache = !0, this._cache.delete(E), this._filterUpToDate = !1, z.imageSmoothingEnabled === !1 && (xe.getContext()._context.imageSmoothingEnabled = !1, Pe.getContext()._context.imageSmoothingEnabled = !1), Ge.save(), be.save(), dt.save(), Ge.translate(-J, -ue), be.translate(-J, -ue), dt.translate(-J, -ue), je.x = J, je.y = ue, this._isUnderCache = !0, this._clearSelfAndDescendantCache(h), this._clearSelfAndDescendantCache(C), this.drawScene(xe, this, je), this.drawHit(Be, this), this._isUnderCache = !1, Ge.restore(), be.restore(), se && (Ge.save(), Ge.beginPath(), Ge.rect(0, 0, B, L), Ge.closePath(), Ge.setAttr("strokeStyle", "red"), Ge.setAttr("lineWidth", 5), Ge.stroke(), Ge.restore()), this._cache.set(E, {
        scene: xe,
        filter: Pe,
        hit: Be,
        buffer: je,
        x: J,
        y: ue
      }), this._requestDraw(), this;
    }
    isCached() {
      return this._cache.has(E);
    }
    getClientRect(T) {
      throw new Error('abstract "getClientRect" method call');
    }
    _transformedRect(T, z) {
      const W = [
        { x: T.x, y: T.y },
        { x: T.x + T.width, y: T.y },
        { x: T.x + T.width, y: T.y + T.height },
        { x: T.x, y: T.y + T.height }
      ];
      let B = 1 / 0, L = 1 / 0, X = -1 / 0, J = -1 / 0;
      const ue = this.getAbsoluteTransform(z);
      return W.forEach(function(ge) {
        const se = ue.point(ge);
        B === void 0 && (B = X = se.x, L = J = se.y), B = Math.min(B, se.x), L = Math.min(L, se.y), X = Math.max(X, se.x), J = Math.max(J, se.y);
      }), {
        x: B,
        y: L,
        width: X - B,
        height: J - L
      };
    }
    _drawCachedSceneCanvas(T) {
      T.save(), T._applyOpacity(this), T._applyGlobalCompositeOperation(this);
      const z = this._getCanvasCache();
      T.translate(z.x, z.y);
      const W = this._getCachedSceneCanvas(), B = W.pixelRatio;
      T.drawImage(W._canvas, 0, 0, W.width / B, W.height / B), T.restore();
    }
    _drawCachedHitCanvas(T) {
      const z = this._getCanvasCache(), W = z.hit;
      T.save(), T.translate(z.x, z.y), T.drawImage(W._canvas, 0, 0, W.width / W.pixelRatio, W.height / W.pixelRatio), T.restore();
    }
    _getCachedSceneCanvas() {
      let T = this.filters(), z = this._getCanvasCache(), W = z.scene, B = z.filter, L = B.getContext(), X, J, ue, ge;
      if (T) {
        if (!this._filterUpToDate) {
          const se = W.pixelRatio;
          B.setSize(W.width / W.pixelRatio, W.height / W.pixelRatio);
          try {
            for (X = T.length, L.clear(), L.drawImage(W._canvas, 0, 0, W.getWidth() / se, W.getHeight() / se), J = L.getImageData(0, 0, B.getWidth(), B.getHeight()), ue = 0; ue < X; ue++) {
              if (ge = T[ue], typeof ge != "function") {
                M.Util.error("Filter should be type of function, but got " + typeof ge + " instead. Please check correct filters");
                continue;
              }
              ge.call(this, J), L.putImageData(J, 0, 0);
            }
          } catch (q) {
            M.Util.error("Unable to apply filter. " + q.message + " This post my help you https://konvajs.org/docs/posts/Tainted_Canvas.html.");
          }
          this._filterUpToDate = !0;
        }
        return B;
      }
      return W;
    }
    on(T, z) {
      if (this._cache && this._cache.delete(m), arguments.length === 3)
        return this._delegate.apply(this, arguments);
      const W = T.split(b);
      for (let B = 0; B < W.length; B++) {
        const X = W[B].split("."), J = X[0], ue = X[1] || "";
        this.eventListeners[J] || (this.eventListeners[J] = []), this.eventListeners[J].push({ name: ue, handler: z });
      }
      return this;
    }
    off(T, z) {
      let W = (T || "").split(b), B = W.length, L, X, J, ue, ge, se;
      if (this._cache && this._cache.delete(m), !T)
        for (X in this.eventListeners)
          this._off(X);
      for (L = 0; L < B; L++)
        if (J = W[L], ue = J.split("."), ge = ue[0], se = ue[1], ge)
          this.eventListeners[ge] && this._off(ge, se, z);
        else
          for (X in this.eventListeners)
            this._off(X, se, z);
      return this;
    }
    dispatchEvent(T) {
      const z = {
        target: this,
        type: T.type,
        evt: T
      };
      return this.fire(T.type, z), this;
    }
    addEventListener(T, z) {
      return this.on(T, function(W) {
        z.call(this, W.evt);
      }), this;
    }
    removeEventListener(T) {
      return this.off(T), this;
    }
    _delegate(T, z, W) {
      const B = this;
      this.on(T, function(L) {
        const X = L.target.findAncestors(z, !0, B);
        for (let J = 0; J < X.length; J++)
          L = M.Util.cloneObject(L), L.currentTarget = X[J], W.call(X[J], L);
      });
    }
    remove() {
      return this.isDragging() && this.stopDrag(), d.DD._dragElements.delete(this._id), this._remove(), this;
    }
    _clearCaches() {
      this._clearSelfAndDescendantCache(g), this._clearSelfAndDescendantCache(h), this._clearSelfAndDescendantCache(C), this._clearSelfAndDescendantCache(F), this._clearSelfAndDescendantCache(Q), this._clearSelfAndDescendantCache(S);
    }
    _remove() {
      this._clearCaches();
      const T = this.getParent();
      T && T.children && (T.children.splice(this.index, 1), T._setChildrenIndices(), this.parent = null);
    }
    destroy() {
      return this.remove(), this.clearCache(), this;
    }
    getAttr(T) {
      const z = "get" + M.Util._capitalize(T);
      return M.Util._isFunction(this[z]) ? this[z]() : this.attrs[T];
    }
    getAncestors() {
      let T = this.getParent(), z = [];
      for (; T; )
        z.push(T), T = T.getParent();
      return z;
    }
    getAttrs() {
      return this.attrs || {};
    }
    setAttrs(T) {
      return this._batchTransformChanges(() => {
        let z, W;
        if (!T)
          return this;
        for (z in T)
          z !== k && (W = D + M.Util._capitalize(z), M.Util._isFunction(this[W]) ? this[W](T[z]) : this._setAttr(z, T[z]));
      }), this;
    }
    isListening() {
      return this._getCache(S, this._isListening);
    }
    _isListening(T) {
      if (!this.listening())
        return !1;
      const W = this.getParent();
      return W && W !== T && this !== T ? W._isListening(T) : !0;
    }
    isVisible() {
      return this._getCache(Q, this._isVisible);
    }
    _isVisible(T) {
      if (!this.visible())
        return !1;
      const W = this.getParent();
      return W && W !== T && this !== T ? W._isVisible(T) : !0;
    }
    shouldDrawHit(T, z = !1) {
      if (T)
        return this._isVisible(T) && this._isListening(T);
      const W = this.getLayer();
      let B = !1;
      d.DD._dragElements.forEach((X) => {
        X.dragStatus === "dragging" && (X.node.nodeType === "Stage" || X.node.getLayer() === W) && (B = !0);
      });
      const L = !z && !O.Konva.hitOnDragEnabled && (B || O.Konva.isTransforming());
      return this.isListening() && this.isVisible() && !L;
    }
    show() {
      return this.visible(!0), this;
    }
    hide() {
      return this.visible(!1), this;
    }
    getZIndex() {
      return this.index || 0;
    }
    getAbsoluteZIndex() {
      let T = this.getDepth(), z = this, W = 0, B, L, X, J;
      function ue(se) {
        for (B = [], L = se.length, X = 0; X < L; X++)
          J = se[X], W++, J.nodeType !== j && (B = B.concat(J.getChildren().slice())), J._id === z._id && (X = L);
        B.length > 0 && B[0].getDepth() <= T && ue(B);
      }
      const ge = this.getStage();
      return z.nodeType !== U && ge && ue(ge.getChildren()), W;
    }
    getDepth() {
      let T = 0, z = this.parent;
      for (; z; )
        T++, z = z.parent;
      return T;
    }
    _batchTransformChanges(T) {
      this._batchingTransformChange = !0, T(), this._batchingTransformChange = !1, this._needClearTransformCache && (this._clearCache(G), this._clearSelfAndDescendantCache(g)), this._needClearTransformCache = !1;
    }
    setPosition(T) {
      return this._batchTransformChanges(() => {
        this.x(T.x), this.y(T.y);
      }), this;
    }
    getPosition() {
      return {
        x: this.x(),
        y: this.y()
      };
    }
    getRelativePointerPosition() {
      const T = this.getStage();
      if (!T)
        return null;
      const z = T.getPointerPosition();
      if (!z)
        return null;
      const W = this.getAbsoluteTransform().copy();
      return W.invert(), W.point(z);
    }
    getAbsolutePosition(T) {
      let z = !1, W = this.parent;
      for (; W; ) {
        if (W.isCached()) {
          z = !0;
          break;
        }
        W = W.parent;
      }
      z && !T && (T = !0);
      const B = this.getAbsoluteTransform(T).getMatrix(), L = new M.Transform(), X = this.offset();
      return L.m = B.slice(), L.translate(X.x, X.y), L.getTranslation();
    }
    setAbsolutePosition(T) {
      const { x: z, y: W, ...B } = this._clearTransform();
      this.attrs.x = z, this.attrs.y = W, this._clearCache(G);
      const L = this._getAbsoluteTransform().copy();
      return L.invert(), L.translate(T.x, T.y), T = {
        x: this.attrs.x + L.getTranslation().x,
        y: this.attrs.y + L.getTranslation().y
      }, this._setTransform(B), this.setPosition({ x: T.x, y: T.y }), this._clearCache(G), this._clearSelfAndDescendantCache(g), this;
    }
    _setTransform(T) {
      let z;
      for (z in T)
        this.attrs[z] = T[z];
    }
    _clearTransform() {
      const T = {
        x: this.x(),
        y: this.y(),
        rotation: this.rotation(),
        scaleX: this.scaleX(),
        scaleY: this.scaleY(),
        offsetX: this.offsetX(),
        offsetY: this.offsetY(),
        skewX: this.skewX(),
        skewY: this.skewY()
      };
      return this.attrs.x = 0, this.attrs.y = 0, this.attrs.rotation = 0, this.attrs.scaleX = 1, this.attrs.scaleY = 1, this.attrs.offsetX = 0, this.attrs.offsetY = 0, this.attrs.skewX = 0, this.attrs.skewY = 0, T;
    }
    move(T) {
      let z = T.x, W = T.y, B = this.x(), L = this.y();
      return z !== void 0 && (B += z), W !== void 0 && (L += W), this.setPosition({ x: B, y: L }), this;
    }
    _eachAncestorReverse(T, z) {
      let W = [], B = this.getParent(), L, X;
      if (!(z && z._id === this._id)) {
        for (W.unshift(this); B && (!z || B._id !== z._id); )
          W.unshift(B), B = B.parent;
        for (L = W.length, X = 0; X < L; X++)
          T(W[X]);
      }
    }
    rotate(T) {
      return this.rotation(this.rotation() + T), this;
    }
    moveToTop() {
      if (!this.parent)
        return M.Util.warn("Node has no parent. moveToTop function is ignored."), !1;
      const T = this.index, z = this.parent.getChildren().length;
      return T < z - 1 ? (this.parent.children.splice(T, 1), this.parent.children.push(this), this.parent._setChildrenIndices(), !0) : !1;
    }
    moveUp() {
      if (!this.parent)
        return M.Util.warn("Node has no parent. moveUp function is ignored."), !1;
      const T = this.index, z = this.parent.getChildren().length;
      return T < z - 1 ? (this.parent.children.splice(T, 1), this.parent.children.splice(T + 1, 0, this), this.parent._setChildrenIndices(), !0) : !1;
    }
    moveDown() {
      if (!this.parent)
        return M.Util.warn("Node has no parent. moveDown function is ignored."), !1;
      const T = this.index;
      return T > 0 ? (this.parent.children.splice(T, 1), this.parent.children.splice(T - 1, 0, this), this.parent._setChildrenIndices(), !0) : !1;
    }
    moveToBottom() {
      if (!this.parent)
        return M.Util.warn("Node has no parent. moveToBottom function is ignored."), !1;
      const T = this.index;
      return T > 0 ? (this.parent.children.splice(T, 1), this.parent.children.unshift(this), this.parent._setChildrenIndices(), !0) : !1;
    }
    setZIndex(T) {
      if (!this.parent)
        return M.Util.warn("Node has no parent. zIndex parameter is ignored."), this;
      (T < 0 || T >= this.parent.children.length) && M.Util.warn("Unexpected value " + T + " for zIndex property. zIndex is just index of a node in children of its parent. Expected value is from 0 to " + (this.parent.children.length - 1) + ".");
      const z = this.index;
      return this.parent.children.splice(z, 1), this.parent.children.splice(T, 0, this), this.parent._setChildrenIndices(), this;
    }
    getAbsoluteOpacity() {
      return this._getCache(h, this._getAbsoluteOpacity);
    }
    _getAbsoluteOpacity() {
      let T = this.opacity();
      const z = this.getParent();
      return z && !z._isUnderCache && (T *= z.getAbsoluteOpacity()), T;
    }
    moveTo(T) {
      return this.getParent() !== T && (this._remove(), T.add(this)), this;
    }
    toObject() {
      let T = this.getAttrs(), z, W, B, L, X;
      const J = {
        attrs: {},
        className: this.getClassName()
      };
      for (z in T)
        W = T[z], X = M.Util.isObject(W) && !M.Util._isPlainObject(W) && !M.Util._isArray(W), !X && (B = typeof this[z] == "function" && this[z], delete T[z], L = B ? B.call(this) : null, T[z] = W, L !== W && (J.attrs[z] = W));
      return M.Util._prepareToStringify(J);
    }
    toJSON() {
      return JSON.stringify(this.toObject());
    }
    getParent() {
      return this.parent;
    }
    findAncestors(T, z, W) {
      const B = [];
      z && this._isMatch(T) && B.push(this);
      let L = this.parent;
      for (; L; ) {
        if (L === W)
          return B;
        L._isMatch(T) && B.push(L), L = L.parent;
      }
      return B;
    }
    isAncestorOf(T) {
      return !1;
    }
    findAncestor(T, z, W) {
      return this.findAncestors(T, z, W)[0];
    }
    _isMatch(T) {
      if (!T)
        return !1;
      if (typeof T == "function")
        return T(this);
      let z = T.replace(/ /g, "").split(","), W = z.length, B, L;
      for (B = 0; B < W; B++)
        if (L = z[B], M.Util.isValidSelector(L) || (M.Util.warn('Selector "' + L + '" is invalid. Allowed selectors examples are "#foo", ".bar" or "Group".'), M.Util.warn('If you have a custom shape with such className, please change it to start with upper letter like "Triangle".'), M.Util.warn("Konva is awesome, right?")), L.charAt(0) === "#") {
          if (this.id() === L.slice(1))
            return !0;
        } else if (L.charAt(0) === ".") {
          if (this.hasName(L.slice(1)))
            return !0;
        } else if (this.className === L || this.nodeType === L)
          return !0;
      return !1;
    }
    getLayer() {
      const T = this.getParent();
      return T ? T.getLayer() : null;
    }
    getStage() {
      return this._getCache(F, this._getStage);
    }
    _getStage() {
      const T = this.getParent();
      return T ? T.getStage() : null;
    }
    fire(T, z = {}, W) {
      return z.target = z.target || this, W ? this._fireAndBubble(T, z) : this._fire(T, z), this;
    }
    getAbsoluteTransform(T) {
      return T ? this._getAbsoluteTransform(T) : this._getCache(g, this._getAbsoluteTransform);
    }
    _getAbsoluteTransform(T) {
      let z;
      if (T)
        return z = new M.Transform(), this._eachAncestorReverse(function(W) {
          const B = W.transformsEnabled();
          B === "all" ? z.multiply(W.getTransform()) : B === "position" && z.translate(W.x() - W.offsetX(), W.y() - W.offsetY());
        }, T), z;
      {
        z = this._cache.get(g) || new M.Transform(), this.parent ? this.parent.getAbsoluteTransform().copyInto(z) : z.reset();
        const W = this.transformsEnabled();
        if (W === "all")
          z.multiply(this.getTransform());
        else if (W === "position") {
          const B = this.attrs.x || 0, L = this.attrs.y || 0, X = this.attrs.offsetX || 0, J = this.attrs.offsetY || 0;
          z.translate(B - X, L - J);
        }
        return z.dirty = !1, z;
      }
    }
    getAbsoluteScale(T) {
      let z = this;
      for (; z; )
        z._isUnderCache && (T = z), z = z.getParent();
      const B = this.getAbsoluteTransform(T).decompose();
      return {
        x: B.scaleX,
        y: B.scaleY
      };
    }
    getAbsoluteRotation() {
      return this.getAbsoluteTransform().decompose().rotation;
    }
    getTransform() {
      return this._getCache(G, this._getTransform);
    }
    _getTransform() {
      var T, z;
      const W = this._cache.get(G) || new M.Transform();
      W.reset();
      const B = this.x(), L = this.y(), X = O.Konva.getAngle(this.rotation()), J = (T = this.attrs.scaleX) !== null && T !== void 0 ? T : 1, ue = (z = this.attrs.scaleY) !== null && z !== void 0 ? z : 1, ge = this.attrs.skewX || 0, se = this.attrs.skewY || 0, q = this.attrs.offsetX || 0, te = this.attrs.offsetY || 0;
      return (B !== 0 || L !== 0) && W.translate(B, L), X !== 0 && W.rotate(X), (ge !== 0 || se !== 0) && W.skew(ge, se), (J !== 1 || ue !== 1) && W.scale(J, ue), (q !== 0 || te !== 0) && W.translate(-1 * q, -1 * te), W.dirty = !1, W;
    }
    clone(T) {
      let z = M.Util.cloneObject(this.attrs), W, B, L, X, J;
      for (W in T)
        z[W] = T[W];
      const ue = new this.constructor(z);
      for (W in this.eventListeners)
        for (B = this.eventListeners[W], L = B.length, X = 0; X < L; X++)
          J = B[X], J.name.indexOf(_) < 0 && (ue.eventListeners[W] || (ue.eventListeners[W] = []), ue.eventListeners[W].push(J));
      return ue;
    }
    _toKonvaCanvas(T) {
      T = T || {};
      const z = this.getClientRect(), W = this.getStage(), B = T.x !== void 0 ? T.x : Math.floor(z.x), L = T.y !== void 0 ? T.y : Math.floor(z.y), X = T.pixelRatio || 1, J = new u.SceneCanvas({
        width: T.width || Math.ceil(z.width) || (W ? W.width() : 0),
        height: T.height || Math.ceil(z.height) || (W ? W.height() : 0),
        pixelRatio: X
      }), ue = J.getContext(), ge = new u.SceneCanvas({
        width: J.width / J.pixelRatio + Math.abs(B),
        height: J.height / J.pixelRatio + Math.abs(L),
        pixelRatio: J.pixelRatio
      });
      return T.imageSmoothingEnabled === !1 && (ue._context.imageSmoothingEnabled = !1), ue.save(), (B || L) && ue.translate(-1 * B, -1 * L), this.drawScene(J, void 0, ge), ue.restore(), J;
    }
    toCanvas(T) {
      return this._toKonvaCanvas(T)._canvas;
    }
    toDataURL(T) {
      T = T || {};
      const z = T.mimeType || null, W = T.quality || null, B = this._toKonvaCanvas(T).toDataURL(z, W);
      return T.callback && T.callback(B), B;
    }
    toImage(T) {
      return new Promise((z, W) => {
        try {
          const B = T == null ? void 0 : T.callback;
          B && delete T.callback, M.Util._urlToImage(this.toDataURL(T), function(L) {
            z(L), B == null || B(L);
          });
        } catch (B) {
          W(B);
        }
      });
    }
    toBlob(T) {
      return new Promise((z, W) => {
        try {
          const B = T == null ? void 0 : T.callback;
          B && delete T.callback, this.toCanvas(T).toBlob((L) => {
            z(L), B == null || B(L);
          }, T == null ? void 0 : T.mimeType, T == null ? void 0 : T.quality);
        } catch (B) {
          W(B);
        }
      });
    }
    setSize(T) {
      return this.width(T.width), this.height(T.height), this;
    }
    getSize() {
      return {
        width: this.width(),
        height: this.height()
      };
    }
    getClassName() {
      return this.className || this.nodeType;
    }
    getType() {
      return this.nodeType;
    }
    getDragDistance() {
      return this.attrs.dragDistance !== void 0 ? this.attrs.dragDistance : this.parent ? this.parent.getDragDistance() : O.Konva.dragDistance;
    }
    _off(T, z, W) {
      let B = this.eventListeners[T], L, X, J;
      for (L = 0; L < B.length; L++)
        if (X = B[L].name, J = B[L].handler, (X !== "konva" || z === "konva") && (!z || X === z) && (!W || W === J)) {
          if (B.splice(L, 1), B.length === 0) {
            delete this.eventListeners[T];
            break;
          }
          L--;
        }
    }
    _fireChangeEvent(T, z, W) {
      this._fire(T + N, {
        oldVal: z,
        newVal: W
      });
    }
    addName(T) {
      if (!this.hasName(T)) {
        const z = this.name(), W = z ? z + " " + T : T;
        this.name(W);
      }
      return this;
    }
    hasName(T) {
      if (!T)
        return !1;
      const z = this.name();
      return z ? (z || "").split(/\s/g).indexOf(T) !== -1 : !1;
    }
    removeName(T) {
      const z = (this.name() || "").split(/\s/g), W = z.indexOf(T);
      return W !== -1 && (z.splice(W, 1), this.name(z.join(" "))), this;
    }
    setAttr(T, z) {
      const W = this[D + M.Util._capitalize(T)];
      return M.Util._isFunction(W) ? W.call(this, z) : this._setAttr(T, z), this;
    }
    _requestDraw() {
      if (O.Konva.autoDrawEnabled) {
        const T = this.getLayer() || this.getStage();
        T == null || T.batchDraw();
      }
    }
    _setAttr(T, z) {
      const W = this.attrs[T];
      W === z && !M.Util.isObject(z) || (z == null ? delete this.attrs[T] : this.attrs[T] = z, this._shouldFireChangeEvents && this._fireChangeEvent(T, W, z), this._requestDraw());
    }
    _setComponentAttr(T, z, W) {
      let B;
      W !== void 0 && (B = this.attrs[T], B || (this.attrs[T] = this.getAttr(T)), this.attrs[T][z] = W, this._fireChangeEvent(T, B, W));
    }
    _fireAndBubble(T, z, W) {
      z && this.nodeType === j && (z.target = this);
      const B = [
        P,
        I,
        H,
        v,
        f,
        R
      ];
      if (!(B.indexOf(T) !== -1 && (W && (this === W || this.isAncestorOf && this.isAncestorOf(W)) || this.nodeType === "Stage" && !W))) {
        this._fire(T, z);
        const X = B.indexOf(T) !== -1 && W && W.isAncestorOf && W.isAncestorOf(this) && !W.isAncestorOf(this.parent);
        (z && !z.cancelBubble || !z) && this.parent && this.parent.isListening() && !X && (W && W.parent ? this._fireAndBubble.call(this.parent, T, z, W) : this._fireAndBubble.call(this.parent, T, z));
      }
    }
    _getProtoListeners(T) {
      var z, W, B;
      const L = (z = this._cache.get(m)) !== null && z !== void 0 ? z : {};
      let X = L == null ? void 0 : L[T];
      if (X === void 0) {
        X = [];
        let J = Object.getPrototypeOf(this);
        for (; J; ) {
          const ue = (B = (W = J.eventListeners) === null || W === void 0 ? void 0 : W[T]) !== null && B !== void 0 ? B : [];
          X.push(...ue), J = Object.getPrototypeOf(J);
        }
        L[T] = X, this._cache.set(m, L);
      }
      return X;
    }
    _fire(T, z) {
      z = z || {}, z.currentTarget = this, z.type = T;
      const W = this._getProtoListeners(T);
      if (W)
        for (let L = 0; L < W.length; L++)
          W[L].handler.call(this, z);
      const B = this.eventListeners[T];
      if (B)
        for (let L = 0; L < B.length; L++)
          B[L].handler.call(this, z);
    }
    draw() {
      return this.drawScene(), this.drawHit(), this;
    }
    _createDragElement(T) {
      const z = T ? T.pointerId : void 0, W = this.getStage(), B = this.getAbsolutePosition();
      if (!W)
        return;
      const L = W._getPointerById(z) || W._changedPointerPositions[0] || B;
      d.DD._dragElements.set(this._id, {
        node: this,
        startPointerPos: L,
        offset: {
          x: L.x - B.x,
          y: L.y - B.y
        },
        dragStatus: "ready",
        pointerId: z
      });
    }
    startDrag(T, z = !0) {
      d.DD._dragElements.has(this._id) || this._createDragElement(T);
      const W = d.DD._dragElements.get(this._id);
      W.dragStatus = "dragging", this.fire("dragstart", {
        type: "dragstart",
        target: this,
        evt: T && T.evt
      }, z);
    }
    _setDragPosition(T, z) {
      const W = this.getStage()._getPointerById(z.pointerId);
      if (!W)
        return;
      let B = {
        x: W.x - z.offset.x,
        y: W.y - z.offset.y
      };
      const L = this.dragBoundFunc();
      if (L !== void 0) {
        const X = L.call(this, B, T);
        X ? B = X : M.Util.warn("dragBoundFunc did not return any value. That is unexpected behavior. You must return new absolute position from dragBoundFunc.");
      }
      (!this._lastPos || this._lastPos.x !== B.x || this._lastPos.y !== B.y) && (this.setAbsolutePosition(B), this._requestDraw()), this._lastPos = B;
    }
    stopDrag(T) {
      const z = d.DD._dragElements.get(this._id);
      z && (z.dragStatus = "stopped"), d.DD._endDragBefore(T), d.DD._endDragAfter(T);
    }
    setDraggable(T) {
      this._setAttr("draggable", T), this._dragChange();
    }
    isDragging() {
      const T = d.DD._dragElements.get(this._id);
      return T ? T.dragStatus === "dragging" : !1;
    }
    _listenDrag() {
      this._dragCleanup(), this.on("mousedown.konva touchstart.konva", function(T) {
        if (!(!(T.evt.button !== void 0) || O.Konva.dragButtons.indexOf(T.evt.button) >= 0) || this.isDragging())
          return;
        let B = !1;
        d.DD._dragElements.forEach((L) => {
          this.isAncestorOf(L.node) && (B = !0);
        }), B || this._createDragElement(T);
      });
    }
    _dragChange() {
      if (this.attrs.draggable)
        this._listenDrag();
      else {
        if (this._dragCleanup(), !this.getStage())
          return;
        const z = d.DD._dragElements.get(this._id), W = z && z.dragStatus === "dragging", B = z && z.dragStatus === "ready";
        W ? this.stopDrag() : B && d.DD._dragElements.delete(this._id);
      }
    }
    _dragCleanup() {
      this.off("mousedown.konva"), this.off("touchstart.konva");
    }
    isClientRectOnScreen(T = { x: 0, y: 0 }) {
      const z = this.getStage();
      if (!z)
        return !1;
      const W = {
        x: -T.x,
        y: -T.y,
        width: z.width() + 2 * T.x,
        height: z.height() + 2 * T.y
      };
      return M.Util.haveIntersection(W, this.getClientRect());
    }
    static create(T, z) {
      return M.Util._isString(T) && (T = JSON.parse(T)), this._createNode(T, z);
    }
    static _createNode(T, z) {
      let W = af.prototype.getClassName.call(T), B = T.children, L, X, J;
      z && (T.attrs.container = z), O.Konva[W] || (M.Util.warn('Can not find a node with class name "' + W + '". Fallback to "Shape".'), W = "Shape");
      const ue = O.Konva[W];
      if (L = new ue(T.attrs), B)
        for (X = B.length, J = 0; J < X; J++)
          L.add(af._createNode(B[J]));
      return L;
    }
  };
  ja.Node = Y, Y.prototype.nodeType = "Node", Y.prototype._attrsAffectingSize = [], Y.prototype.eventListeners = {}, Y.prototype.on.call(Y.prototype, Z, function() {
    if (this._batchingTransformChange) {
      this._needClearTransformCache = !0;
      return;
    }
    this._clearCache(G), this._clearSelfAndDescendantCache(g);
  }), Y.prototype.on.call(Y.prototype, "visibleChange.konva", function() {
    this._clearSelfAndDescendantCache(Q);
  }), Y.prototype.on.call(Y.prototype, "listeningChange.konva", function() {
    this._clearSelfAndDescendantCache(S);
  }), Y.prototype.on.call(Y.prototype, "opacityChange.konva", function() {
    this._clearSelfAndDescendantCache(h);
  });
  const $ = w.Factory.addGetterSetter;
  return $(Y, "zIndex"), $(Y, "absolutePosition"), $(Y, "position"), $(Y, "x", 0, (0, x.getNumberValidator)()), $(Y, "y", 0, (0, x.getNumberValidator)()), $(Y, "globalCompositeOperation", "source-over", (0, x.getStringValidator)()), $(Y, "opacity", 1, (0, x.getNumberValidator)()), $(Y, "name", "", (0, x.getStringValidator)()), $(Y, "id", "", (0, x.getStringValidator)()), $(Y, "rotation", 0, (0, x.getNumberValidator)()), w.Factory.addComponentsGetterSetter(Y, "scale", ["x", "y"]), $(Y, "scaleX", 1, (0, x.getNumberValidator)()), $(Y, "scaleY", 1, (0, x.getNumberValidator)()), w.Factory.addComponentsGetterSetter(Y, "skew", ["x", "y"]), $(Y, "skewX", 0, (0, x.getNumberValidator)()), $(Y, "skewY", 0, (0, x.getNumberValidator)()), w.Factory.addComponentsGetterSetter(Y, "offset", ["x", "y"]), $(Y, "offsetX", 0, (0, x.getNumberValidator)()), $(Y, "offsetY", 0, (0, x.getNumberValidator)()), $(Y, "dragDistance", void 0, (0, x.getNumberValidator)()), $(Y, "width", 0, (0, x.getNumberValidator)()), $(Y, "height", 0, (0, x.getNumberValidator)()), $(Y, "listening", !0, (0, x.getBooleanValidator)()), $(Y, "preventDefault", !0, (0, x.getBooleanValidator)()), $(Y, "filters", void 0, function(pe) {
    return this._filterUpToDate = !1, pe;
  }), $(Y, "visible", !0, (0, x.getBooleanValidator)()), $(Y, "transformsEnabled", "all", (0, x.getStringValidator)()), $(Y, "size"), $(Y, "dragBoundFunc"), $(Y, "draggable", !1, (0, x.getBooleanValidator)()), w.Factory.backCompat(Y, {
    rotateDeg: "rotate",
    setRotationDeg: "setRotation",
    getRotationDeg: "getRotation"
  }), ja;
}
var Wa = {}, ch;
function td() {
  if (ch) return Wa;
  ch = 1, Object.defineProperty(Wa, "__esModule", { value: !0 }), Wa.Container = void 0;
  const u = ot(), d = nn(), w = at();
  let O = class extends d.Node {
    constructor() {
      super(...arguments), this.children = [];
    }
    getChildren(x) {
      const h = this.children || [];
      return x ? h.filter(x) : h;
    }
    hasChildren() {
      return this.getChildren().length > 0;
    }
    removeChildren() {
      return this.getChildren().forEach((x) => {
        x.parent = null, x.index = 0, x.remove();
      }), this.children = [], this._requestDraw(), this;
    }
    destroyChildren() {
      return this.getChildren().forEach((x) => {
        x.parent = null, x.index = 0, x.destroy();
      }), this.children = [], this._requestDraw(), this;
    }
    add(...x) {
      if (x.length === 0)
        return this;
      if (x.length > 1) {
        for (let m = 0; m < x.length; m++)
          this.add(x[m]);
        return this;
      }
      const h = x[0];
      return h.getParent() ? (h.moveTo(this), this) : (this._validateAdd(h), h.index = this.getChildren().length, h.parent = this, h._clearCaches(), this.getChildren().push(h), this._fire("add", {
        child: h
      }), this._requestDraw(), this);
    }
    destroy() {
      return this.hasChildren() && this.destroyChildren(), super.destroy(), this;
    }
    find(x) {
      return this._generalFind(x, !1);
    }
    findOne(x) {
      const h = this._generalFind(x, !0);
      return h.length > 0 ? h[0] : void 0;
    }
    _generalFind(x, h) {
      const m = [];
      return this._descendants((g) => {
        const C = g._isMatch(x);
        return C && m.push(g), !!(C && h);
      }), m;
    }
    _descendants(x) {
      let h = !1;
      const m = this.getChildren();
      for (const g of m) {
        if (h = x(g), h)
          return !0;
        if (g.hasChildren() && (h = g._descendants(x), h))
          return !0;
      }
      return !1;
    }
    toObject() {
      const x = d.Node.prototype.toObject.call(this);
      return x.children = [], this.getChildren().forEach((h) => {
        x.children.push(h.toObject());
      }), x;
    }
    isAncestorOf(x) {
      let h = x.getParent();
      for (; h; ) {
        if (h._id === this._id)
          return !0;
        h = h.getParent();
      }
      return !1;
    }
    clone(x) {
      const h = d.Node.prototype.clone.call(this, x);
      return this.getChildren().forEach(function(m) {
        h.add(m.clone());
      }), h;
    }
    getAllIntersections(x) {
      const h = [];
      return this.find("Shape").forEach((m) => {
        m.isVisible() && m.intersects(x) && h.push(m);
      }), h;
    }
    _clearSelfAndDescendantCache(x) {
      var h;
      super._clearSelfAndDescendantCache(x), !this.isCached() && ((h = this.children) === null || h === void 0 || h.forEach(function(m) {
        m._clearSelfAndDescendantCache(x);
      }));
    }
    _setChildrenIndices() {
      var x;
      (x = this.children) === null || x === void 0 || x.forEach(function(h, m) {
        h.index = m;
      }), this._requestDraw();
    }
    drawScene(x, h, m) {
      const g = this.getLayer(), C = x || g && g.getCanvas(), E = C && C.getContext(), N = this._getCanvasCache(), k = N && N.scene, _ = C && C.isCache;
      if (!this.isVisible() && !_)
        return this;
      if (k) {
        E.save();
        const S = this.getAbsoluteTransform(h).getMatrix();
        E.transform(S[0], S[1], S[2], S[3], S[4], S[5]), this._drawCachedSceneCanvas(E), E.restore();
      } else
        this._drawChildren("drawScene", C, h, m);
      return this;
    }
    drawHit(x, h) {
      if (!this.shouldDrawHit(h))
        return this;
      const m = this.getLayer(), g = x || m && m.hitCanvas, C = g && g.getContext(), E = this._getCanvasCache();
      if (E && E.hit) {
        C.save();
        const k = this.getAbsoluteTransform(h).getMatrix();
        C.transform(k[0], k[1], k[2], k[3], k[4], k[5]), this._drawCachedHitCanvas(C), C.restore();
      } else
        this._drawChildren("drawHit", g, h);
      return this;
    }
    _drawChildren(x, h, m, g) {
      var C;
      const E = h && h.getContext(), N = this.clipWidth(), k = this.clipHeight(), _ = this.clipFunc(), S = typeof N == "number" && typeof k == "number" || _, P = m === this;
      if (S) {
        E.save();
        const H = this.getAbsoluteTransform(m);
        let v = H.getMatrix();
        E.transform(v[0], v[1], v[2], v[3], v[4], v[5]), E.beginPath();
        let f;
        if (_)
          f = _.call(this, E, this);
        else {
          const R = this.clipX(), D = this.clipY();
          E.rect(R || 0, D || 0, N, k);
        }
        E.clip.apply(E, f), v = H.copy().invert().getMatrix(), E.transform(v[0], v[1], v[2], v[3], v[4], v[5]);
      }
      const I = !P && this.globalCompositeOperation() !== "source-over" && x === "drawScene";
      I && (E.save(), E._applyGlobalCompositeOperation(this)), (C = this.children) === null || C === void 0 || C.forEach(function(H) {
        H[x](h, m, g);
      }), I && E.restore(), S && E.restore();
    }
    getClientRect(x = {}) {
      var h;
      const m = x.skipTransform, g = x.relativeTo;
      let C, E, N, k, _ = {
        x: 1 / 0,
        y: 1 / 0,
        width: 0,
        height: 0
      };
      const S = this;
      (h = this.children) === null || h === void 0 || h.forEach(function(H) {
        if (!H.visible())
          return;
        const v = H.getClientRect({
          relativeTo: S,
          skipShadow: x.skipShadow,
          skipStroke: x.skipStroke
        });
        v.width === 0 && v.height === 0 || (C === void 0 ? (C = v.x, E = v.y, N = v.x + v.width, k = v.y + v.height) : (C = Math.min(C, v.x), E = Math.min(E, v.y), N = Math.max(N, v.x + v.width), k = Math.max(k, v.y + v.height)));
      });
      const P = this.find("Shape");
      let I = !1;
      for (let H = 0; H < P.length; H++)
        if (P[H]._isVisible(this)) {
          I = !0;
          break;
        }
      return I && C !== void 0 ? _ = {
        x: C,
        y: E,
        width: N - C,
        height: k - E
      } : _ = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      }, m ? _ : this._transformedRect(_, g);
    }
  };
  return Wa.Container = O, u.Factory.addComponentsGetterSetter(O, "clip", [
    "x",
    "y",
    "width",
    "height"
  ]), u.Factory.addGetterSetter(O, "clipX", void 0, (0, w.getNumberValidator)()), u.Factory.addGetterSetter(O, "clipY", void 0, (0, w.getNumberValidator)()), u.Factory.addGetterSetter(O, "clipWidth", void 0, (0, w.getNumberValidator)()), u.Factory.addGetterSetter(O, "clipHeight", void 0, (0, w.getNumberValidator)()), u.Factory.addGetterSetter(O, "clipFunc"), Wa;
}
var Jd = {}, os = {}, dh;
function R0() {
  if (dh) return os;
  dh = 1, Object.defineProperty(os, "__esModule", { value: !0 }), os.getCapturedShape = O, os.createEvent = M, os.hasPointerCapture = x, os.setPointerCapture = h, os.releaseCapture = m;
  const u = et(), d = /* @__PURE__ */ new Map(), w = u.Konva._global.PointerEvent !== void 0;
  function O(g) {
    return d.get(g);
  }
  function M(g) {
    return {
      evt: g,
      pointerId: g.pointerId
    };
  }
  function x(g, C) {
    return d.get(g) === C;
  }
  function h(g, C) {
    m(g), C.getStage() && (d.set(g, C), w && C._fire("gotpointercapture", M(new PointerEvent("gotpointercapture"))));
  }
  function m(g, C) {
    const E = d.get(g);
    if (!E)
      return;
    const N = E.getStage();
    N && N.content, d.delete(g), w && E._fire("lostpointercapture", M(new PointerEvent("lostpointercapture")));
  }
  return os;
}
var fh;
function S1() {
  return fh || (fh = 1, (function(u) {
    Object.defineProperty(u, "__esModule", { value: !0 }), u.Stage = u.stages = void 0;
    const d = Yt(), w = ot(), O = td(), M = et(), x = ed(), h = df(), m = et(), g = R0(), C = "Stage", E = "string", N = "px", k = "mouseout", _ = "mouseleave", S = "mouseover", P = "mouseenter", I = "mousemove", H = "mousedown", v = "mouseup", f = "pointermove", R = "pointerdown", D = "pointerup", j = "pointercancel", b = "lostpointercapture", F = "pointerout", G = "pointerleave", U = "pointerover", Q = "pointerenter", Z = "contextmenu", re = "touchstart", Y = "touchend", $ = "touchmove", pe = "touchcancel", T = "wheel", z = 5, W = [
      [P, "_pointerenter"],
      [H, "_pointerdown"],
      [I, "_pointermove"],
      [v, "_pointerup"],
      [_, "_pointerleave"],
      [re, "_pointerdown"],
      [$, "_pointermove"],
      [Y, "_pointerup"],
      [pe, "_pointercancel"],
      [S, "_pointerover"],
      [T, "_wheel"],
      [Z, "_contextmenu"],
      [R, "_pointerdown"],
      [f, "_pointermove"],
      [D, "_pointerup"],
      [j, "_pointercancel"],
      [G, "_pointerleave"],
      [b, "_lostpointercapture"]
    ], B = {
      mouse: {
        [F]: k,
        [G]: _,
        [U]: S,
        [Q]: P,
        [f]: I,
        [R]: H,
        [D]: v,
        [j]: "mousecancel",
        pointerclick: "click",
        pointerdblclick: "dblclick"
      },
      touch: {
        [F]: "touchout",
        [G]: "touchleave",
        [U]: "touchover",
        [Q]: "touchenter",
        [f]: $,
        [R]: re,
        [D]: Y,
        [j]: pe,
        pointerclick: "tap",
        pointerdblclick: "dbltap"
      },
      pointer: {
        [F]: F,
        [G]: G,
        [U]: U,
        [Q]: Q,
        [f]: f,
        [R]: R,
        [D]: D,
        [j]: j,
        pointerclick: "pointerclick",
        pointerdblclick: "pointerdblclick"
      }
    }, L = (se) => se.indexOf("pointer") >= 0 ? "pointer" : se.indexOf("touch") >= 0 ? "touch" : "mouse", X = (se) => {
      const q = L(se);
      if (q === "pointer")
        return M.Konva.pointerEventsEnabled && B.pointer;
      if (q === "touch")
        return B.touch;
      if (q === "mouse")
        return B.mouse;
    };
    function J(se = {}) {
      return (se.clipFunc || se.clipWidth || se.clipHeight) && d.Util.warn("Stage does not support clipping. Please use clip for Layers or Groups."), se;
    }
    const ue = "Pointer position is missing and not registered by the stage. Looks like it is outside of the stage container. You can set it manually from event: stage.setPointersPositions(event);";
    u.stages = [];
    class ge extends O.Container {
      constructor(q) {
        super(J(q)), this._pointerPositions = [], this._changedPointerPositions = [], this._buildDOM(), this._bindContentEvents(), u.stages.push(this), this.on("widthChange.konva heightChange.konva", this._resizeDOM), this.on("visibleChange.konva", this._checkVisibility), this.on("clipWidthChange.konva clipHeightChange.konva clipFuncChange.konva", () => {
          J(this.attrs);
        }), this._checkVisibility();
      }
      _validateAdd(q) {
        const te = q.getType() === "Layer", me = q.getType() === "FastLayer";
        te || me || d.Util.throw("You may only add layers to the stage.");
      }
      _checkVisibility() {
        if (!this.content)
          return;
        const q = this.visible() ? "" : "none";
        this.content.style.display = q;
      }
      setContainer(q) {
        if (typeof q === E) {
          let te;
          if (q.charAt(0) === ".") {
            const me = q.slice(1);
            q = document.getElementsByClassName(me)[0];
          } else
            q.charAt(0) !== "#" ? te = q : te = q.slice(1), q = document.getElementById(te);
          if (!q)
            throw "Can not find container in document with id " + te;
        }
        return this._setAttr("container", q), this.content && (this.content.parentElement && this.content.parentElement.removeChild(this.content), q.appendChild(this.content)), this;
      }
      shouldDrawHit() {
        return !0;
      }
      clear() {
        const q = this.children, te = q.length;
        for (let me = 0; me < te; me++)
          q[me].clear();
        return this;
      }
      clone(q) {
        return q || (q = {}), q.container = typeof document < "u" && document.createElement("div"), O.Container.prototype.clone.call(this, q);
      }
      destroy() {
        super.destroy();
        const q = this.content;
        q && d.Util._isInDocument(q) && this.container().removeChild(q);
        const te = u.stages.indexOf(this);
        return te > -1 && u.stages.splice(te, 1), d.Util.releaseCanvas(this.bufferCanvas._canvas, this.bufferHitCanvas._canvas), this;
      }
      getPointerPosition() {
        const q = this._pointerPositions[0] || this._changedPointerPositions[0];
        return q ? {
          x: q.x,
          y: q.y
        } : (d.Util.warn(ue), null);
      }
      _getPointerById(q) {
        return this._pointerPositions.find((te) => te.id === q);
      }
      getPointersPositions() {
        return this._pointerPositions;
      }
      getStage() {
        return this;
      }
      getContent() {
        return this.content;
      }
      _toKonvaCanvas(q) {
        q = q || {}, q.x = q.x || 0, q.y = q.y || 0, q.width = q.width || this.width(), q.height = q.height || this.height();
        const te = new x.SceneCanvas({
          width: q.width,
          height: q.height,
          pixelRatio: q.pixelRatio || 1
        }), me = te.getContext()._context, xe = this.children;
        return (q.x || q.y) && me.translate(-1 * q.x, -1 * q.y), xe.forEach(function(Pe) {
          if (!Pe.isVisible())
            return;
          const Be = Pe._toKonvaCanvas(q);
          me.drawImage(Be._canvas, q.x, q.y, Be.getWidth() / Be.getPixelRatio(), Be.getHeight() / Be.getPixelRatio());
        }), te;
      }
      getIntersection(q) {
        if (!q)
          return null;
        const te = this.children, me = te.length, xe = me - 1;
        for (let Pe = xe; Pe >= 0; Pe--) {
          const Be = te[Pe].getIntersection(q);
          if (Be)
            return Be;
        }
        return null;
      }
      _resizeDOM() {
        const q = this.width(), te = this.height();
        this.content && (this.content.style.width = q + N, this.content.style.height = te + N), this.bufferCanvas.setSize(q, te), this.bufferHitCanvas.setSize(q, te), this.children.forEach((me) => {
          me.setSize({ width: q, height: te }), me.draw();
        });
      }
      add(q, ...te) {
        if (arguments.length > 1) {
          for (let xe = 0; xe < arguments.length; xe++)
            this.add(arguments[xe]);
          return this;
        }
        super.add(q);
        const me = this.children.length;
        return me > z && d.Util.warn("The stage has " + me + " layers. Recommended maximum number of layers is 3-5. Adding more layers into the stage may drop the performance. Rethink your tree structure, you can use Konva.Group."), q.setSize({ width: this.width(), height: this.height() }), q.draw(), M.Konva.isBrowser && this.content.appendChild(q.canvas._canvas), this;
      }
      getParent() {
        return null;
      }
      getLayer() {
        return null;
      }
      hasPointerCapture(q) {
        return g.hasPointerCapture(q, this);
      }
      setPointerCapture(q) {
        g.setPointerCapture(q, this);
      }
      releaseCapture(q) {
        g.releaseCapture(q, this);
      }
      getLayers() {
        return this.children;
      }
      _bindContentEvents() {
        M.Konva.isBrowser && W.forEach(([q, te]) => {
          this.content.addEventListener(q, (me) => {
            this[te](me);
          }, { passive: !1 });
        });
      }
      _pointerenter(q) {
        this.setPointersPositions(q);
        const te = X(q.type);
        te && this._fire(te.pointerenter, {
          evt: q,
          target: this,
          currentTarget: this
        });
      }
      _pointerover(q) {
        this.setPointersPositions(q);
        const te = X(q.type);
        te && this._fire(te.pointerover, {
          evt: q,
          target: this,
          currentTarget: this
        });
      }
      _getTargetShape(q) {
        let te = this[q + "targetShape"];
        return te && !te.getStage() && (te = null), te;
      }
      _pointerleave(q) {
        const te = X(q.type), me = L(q.type);
        if (!te)
          return;
        this.setPointersPositions(q);
        const xe = this._getTargetShape(me), Pe = !(M.Konva.isDragging() || M.Konva.isTransforming()) || M.Konva.hitOnDragEnabled;
        xe && Pe ? (xe._fireAndBubble(te.pointerout, { evt: q }), xe._fireAndBubble(te.pointerleave, { evt: q }), this._fire(te.pointerleave, {
          evt: q,
          target: this,
          currentTarget: this
        }), this[me + "targetShape"] = null) : Pe && (this._fire(te.pointerleave, {
          evt: q,
          target: this,
          currentTarget: this
        }), this._fire(te.pointerout, {
          evt: q,
          target: this,
          currentTarget: this
        })), this.pointerPos = null, this._pointerPositions = [];
      }
      _pointerdown(q) {
        const te = X(q.type), me = L(q.type);
        if (!te)
          return;
        this.setPointersPositions(q);
        let xe = !1;
        this._changedPointerPositions.forEach((Pe) => {
          const Be = this.getIntersection(Pe);
          if (h.DD.justDragged = !1, M.Konva["_" + me + "ListenClick"] = !0, !Be || !Be.isListening()) {
            this[me + "ClickStartShape"] = void 0;
            return;
          }
          M.Konva.capturePointerEventsEnabled && Be.setPointerCapture(Pe.id), this[me + "ClickStartShape"] = Be, Be._fireAndBubble(te.pointerdown, {
            evt: q,
            pointerId: Pe.id
          }), xe = !0;
          const Ge = q.type.indexOf("touch") >= 0;
          Be.preventDefault() && q.cancelable && Ge && q.preventDefault();
        }), xe || this._fire(te.pointerdown, {
          evt: q,
          target: this,
          currentTarget: this,
          pointerId: this._pointerPositions[0].id
        });
      }
      _pointermove(q) {
        const te = X(q.type), me = L(q.type);
        if (!te || (M.Konva.isDragging() && h.DD.node.preventDefault() && q.cancelable && q.preventDefault(), this.setPointersPositions(q), !(!(M.Konva.isDragging() || M.Konva.isTransforming()) || M.Konva.hitOnDragEnabled)))
          return;
        const Pe = {};
        let Be = !1;
        const Ge = this._getTargetShape(me);
        this._changedPointerPositions.forEach((be) => {
          const je = g.getCapturedShape(be.id) || this.getIntersection(be), dt = be.id, st = { evt: q, pointerId: dt }, Je = Ge !== je;
          if (Je && Ge && (Ge._fireAndBubble(te.pointerout, { ...st }, je), Ge._fireAndBubble(te.pointerleave, { ...st }, je)), je) {
            if (Pe[je._id])
              return;
            Pe[je._id] = !0;
          }
          je && je.isListening() ? (Be = !0, Je && (je._fireAndBubble(te.pointerover, { ...st }, Ge), je._fireAndBubble(te.pointerenter, { ...st }, Ge), this[me + "targetShape"] = je), je._fireAndBubble(te.pointermove, { ...st })) : Ge && (this._fire(te.pointerover, {
            evt: q,
            target: this,
            currentTarget: this,
            pointerId: dt
          }), this[me + "targetShape"] = null);
        }), Be || this._fire(te.pointermove, {
          evt: q,
          target: this,
          currentTarget: this,
          pointerId: this._changedPointerPositions[0].id
        });
      }
      _pointerup(q) {
        const te = X(q.type), me = L(q.type);
        if (!te)
          return;
        this.setPointersPositions(q);
        const xe = this[me + "ClickStartShape"], Pe = this[me + "ClickEndShape"], Be = {};
        let Ge = !1;
        this._changedPointerPositions.forEach((be) => {
          const je = g.getCapturedShape(be.id) || this.getIntersection(be);
          if (je) {
            if (je.releaseCapture(be.id), Be[je._id])
              return;
            Be[je._id] = !0;
          }
          const dt = be.id, st = { evt: q, pointerId: dt };
          let Je = !1;
          M.Konva["_" + me + "InDblClickWindow"] ? (Je = !0, clearTimeout(this[me + "DblTimeout"])) : h.DD.justDragged || (M.Konva["_" + me + "InDblClickWindow"] = !0, clearTimeout(this[me + "DblTimeout"])), this[me + "DblTimeout"] = setTimeout(function() {
            M.Konva["_" + me + "InDblClickWindow"] = !1;
          }, M.Konva.dblClickWindow), je && je.isListening() ? (Ge = !0, this[me + "ClickEndShape"] = je, je._fireAndBubble(te.pointerup, { ...st }), M.Konva["_" + me + "ListenClick"] && xe && xe === je && (je._fireAndBubble(te.pointerclick, { ...st }), Je && Pe && Pe === je && je._fireAndBubble(te.pointerdblclick, { ...st }))) : (this[me + "ClickEndShape"] = null, M.Konva["_" + me + "ListenClick"] && this._fire(te.pointerclick, {
            evt: q,
            target: this,
            currentTarget: this,
            pointerId: dt
          }), Je && this._fire(te.pointerdblclick, {
            evt: q,
            target: this,
            currentTarget: this,
            pointerId: dt
          }));
        }), Ge || this._fire(te.pointerup, {
          evt: q,
          target: this,
          currentTarget: this,
          pointerId: this._changedPointerPositions[0].id
        }), M.Konva["_" + me + "ListenClick"] = !1, q.cancelable && me !== "touch" && me !== "pointer" && q.preventDefault();
      }
      _contextmenu(q) {
        this.setPointersPositions(q);
        const te = this.getIntersection(this.getPointerPosition());
        te && te.isListening() ? te._fireAndBubble(Z, { evt: q }) : this._fire(Z, {
          evt: q,
          target: this,
          currentTarget: this
        });
      }
      _wheel(q) {
        this.setPointersPositions(q);
        const te = this.getIntersection(this.getPointerPosition());
        te && te.isListening() ? te._fireAndBubble(T, { evt: q }) : this._fire(T, {
          evt: q,
          target: this,
          currentTarget: this
        });
      }
      _pointercancel(q) {
        this.setPointersPositions(q);
        const te = g.getCapturedShape(q.pointerId) || this.getIntersection(this.getPointerPosition());
        te && te._fireAndBubble(D, g.createEvent(q)), g.releaseCapture(q.pointerId);
      }
      _lostpointercapture(q) {
        g.releaseCapture(q.pointerId);
      }
      setPointersPositions(q) {
        const te = this._getContentPosition();
        let me = null, xe = null;
        q = q || window.event, q.touches !== void 0 ? (this._pointerPositions = [], this._changedPointerPositions = [], Array.prototype.forEach.call(q.touches, (Pe) => {
          this._pointerPositions.push({
            id: Pe.identifier,
            x: (Pe.clientX - te.left) / te.scaleX,
            y: (Pe.clientY - te.top) / te.scaleY
          });
        }), Array.prototype.forEach.call(q.changedTouches || q.touches, (Pe) => {
          this._changedPointerPositions.push({
            id: Pe.identifier,
            x: (Pe.clientX - te.left) / te.scaleX,
            y: (Pe.clientY - te.top) / te.scaleY
          });
        })) : (me = (q.clientX - te.left) / te.scaleX, xe = (q.clientY - te.top) / te.scaleY, this.pointerPos = {
          x: me,
          y: xe
        }, this._pointerPositions = [{ x: me, y: xe, id: d.Util._getFirstPointerId(q) }], this._changedPointerPositions = [
          { x: me, y: xe, id: d.Util._getFirstPointerId(q) }
        ]);
      }
      _setPointerPosition(q) {
        d.Util.warn('Method _setPointerPosition is deprecated. Use "stage.setPointersPositions(event)" instead.'), this.setPointersPositions(q);
      }
      _getContentPosition() {
        if (!this.content || !this.content.getBoundingClientRect)
          return {
            top: 0,
            left: 0,
            scaleX: 1,
            scaleY: 1
          };
        const q = this.content.getBoundingClientRect();
        return {
          top: q.top,
          left: q.left,
          scaleX: q.width / this.content.clientWidth || 1,
          scaleY: q.height / this.content.clientHeight || 1
        };
      }
      _buildDOM() {
        if (this.bufferCanvas = new x.SceneCanvas({
          width: this.width(),
          height: this.height()
        }), this.bufferHitCanvas = new x.HitCanvas({
          pixelRatio: 1,
          width: this.width(),
          height: this.height()
        }), !M.Konva.isBrowser)
          return;
        const q = this.container();
        if (!q)
          throw "Stage has no container. A container is required.";
        q.innerHTML = "", this.content = document.createElement("div"), this.content.style.position = "relative", this.content.style.userSelect = "none", this.content.className = "konvajs-content", this.content.setAttribute("role", "presentation"), q.appendChild(this.content), this._resizeDOM();
      }
      cache() {
        return d.Util.warn("Cache function is not allowed for stage. You may use cache only for layers, groups and shapes."), this;
      }
      clearCache() {
        return this;
      }
      batchDraw() {
        return this.getChildren().forEach(function(q) {
          q.batchDraw();
        }), this;
      }
    }
    u.Stage = ge, ge.prototype.nodeType = C, (0, m._registerNode)(ge), w.Factory.addGetterSetter(ge, "container"), M.Konva.isBrowser && document.addEventListener("visibilitychange", () => {
      u.stages.forEach((se) => {
        se.batchDraw();
      });
    });
  })(Jd)), Jd;
}
var qa = {}, Zd = {}, hh;
function Fn() {
  return hh || (hh = 1, (function(u) {
    Object.defineProperty(u, "__esModule", { value: !0 }), u.Shape = u.shapes = void 0;
    const d = et(), w = Yt(), O = ot(), M = nn(), x = at(), h = et(), m = R0(), g = "hasShadow", C = "shadowRGBA", E = "patternImage", N = "linearGradient", k = "radialGradient";
    let _;
    function S() {
      return _ || (_ = w.Util.createCanvasElement().getContext("2d"), _);
    }
    u.shapes = {};
    function P(G) {
      const U = this.attrs.fillRule;
      U ? G.fill(U) : G.fill();
    }
    function I(G) {
      G.stroke();
    }
    function H(G) {
      const U = this.attrs.fillRule;
      U ? G.fill(U) : G.fill();
    }
    function v(G) {
      G.stroke();
    }
    function f() {
      this._clearCache(g);
    }
    function R() {
      this._clearCache(C);
    }
    function D() {
      this._clearCache(E);
    }
    function j() {
      this._clearCache(N);
    }
    function b() {
      this._clearCache(k);
    }
    class F extends M.Node {
      constructor(U) {
        super(U);
        let Q;
        for (; Q = w.Util.getRandomColor(), !(Q && !(Q in u.shapes)); )
          ;
        this.colorKey = Q, u.shapes[Q] = this;
      }
      getContext() {
        return w.Util.warn("shape.getContext() method is deprecated. Please do not use it."), this.getLayer().getContext();
      }
      getCanvas() {
        return w.Util.warn("shape.getCanvas() method is deprecated. Please do not use it."), this.getLayer().getCanvas();
      }
      getSceneFunc() {
        return this.attrs.sceneFunc || this._sceneFunc;
      }
      getHitFunc() {
        return this.attrs.hitFunc || this._hitFunc;
      }
      hasShadow() {
        return this._getCache(g, this._hasShadow);
      }
      _hasShadow() {
        return this.shadowEnabled() && this.shadowOpacity() !== 0 && !!(this.shadowColor() || this.shadowBlur() || this.shadowOffsetX() || this.shadowOffsetY());
      }
      _getFillPattern() {
        return this._getCache(E, this.__getFillPattern);
      }
      __getFillPattern() {
        if (this.fillPatternImage()) {
          const Q = S().createPattern(this.fillPatternImage(), this.fillPatternRepeat() || "repeat");
          if (Q && Q.setTransform) {
            const Z = new w.Transform();
            Z.translate(this.fillPatternX(), this.fillPatternY()), Z.rotate(d.Konva.getAngle(this.fillPatternRotation())), Z.scale(this.fillPatternScaleX(), this.fillPatternScaleY()), Z.translate(-1 * this.fillPatternOffsetX(), -1 * this.fillPatternOffsetY());
            const re = Z.getMatrix(), Y = typeof DOMMatrix > "u" ? {
              a: re[0],
              b: re[1],
              c: re[2],
              d: re[3],
              e: re[4],
              f: re[5]
            } : new DOMMatrix(re);
            Q.setTransform(Y);
          }
          return Q;
        }
      }
      _getLinearGradient() {
        return this._getCache(N, this.__getLinearGradient);
      }
      __getLinearGradient() {
        const U = this.fillLinearGradientColorStops();
        if (U) {
          const Q = S(), Z = this.fillLinearGradientStartPoint(), re = this.fillLinearGradientEndPoint(), Y = Q.createLinearGradient(Z.x, Z.y, re.x, re.y);
          for (let $ = 0; $ < U.length; $ += 2)
            Y.addColorStop(U[$], U[$ + 1]);
          return Y;
        }
      }
      _getRadialGradient() {
        return this._getCache(k, this.__getRadialGradient);
      }
      __getRadialGradient() {
        const U = this.fillRadialGradientColorStops();
        if (U) {
          const Q = S(), Z = this.fillRadialGradientStartPoint(), re = this.fillRadialGradientEndPoint(), Y = Q.createRadialGradient(Z.x, Z.y, this.fillRadialGradientStartRadius(), re.x, re.y, this.fillRadialGradientEndRadius());
          for (let $ = 0; $ < U.length; $ += 2)
            Y.addColorStop(U[$], U[$ + 1]);
          return Y;
        }
      }
      getShadowRGBA() {
        return this._getCache(C, this._getShadowRGBA);
      }
      _getShadowRGBA() {
        if (!this.hasShadow())
          return;
        const U = w.Util.colorToRGBA(this.shadowColor());
        if (U)
          return "rgba(" + U.r + "," + U.g + "," + U.b + "," + U.a * (this.shadowOpacity() || 1) + ")";
      }
      hasFill() {
        return this._calculate("hasFill", [
          "fillEnabled",
          "fill",
          "fillPatternImage",
          "fillLinearGradientColorStops",
          "fillRadialGradientColorStops"
        ], () => this.fillEnabled() && !!(this.fill() || this.fillPatternImage() || this.fillLinearGradientColorStops() || this.fillRadialGradientColorStops()));
      }
      hasStroke() {
        return this._calculate("hasStroke", [
          "strokeEnabled",
          "strokeWidth",
          "stroke",
          "strokeLinearGradientColorStops"
        ], () => this.strokeEnabled() && this.strokeWidth() && !!(this.stroke() || this.strokeLinearGradientColorStops()));
      }
      hasHitStroke() {
        const U = this.hitStrokeWidth();
        return U === "auto" ? this.hasStroke() : this.strokeEnabled() && !!U;
      }
      intersects(U) {
        const Q = this.getStage();
        if (!Q)
          return !1;
        const Z = Q.bufferHitCanvas;
        return Z.getContext().clear(), this.drawHit(Z, void 0, !0), Z.context.getImageData(Math.round(U.x), Math.round(U.y), 1, 1).data[3] > 0;
      }
      destroy() {
        return M.Node.prototype.destroy.call(this), delete u.shapes[this.colorKey], delete this.colorKey, this;
      }
      _useBufferCanvas(U) {
        var Q;
        if (!((Q = this.attrs.perfectDrawEnabled) !== null && Q !== void 0 ? Q : !0))
          return !1;
        const re = U || this.hasFill(), Y = this.hasStroke(), $ = this.getAbsoluteOpacity() !== 1;
        if (re && Y && $)
          return !0;
        const pe = this.hasShadow(), T = this.shadowForStrokeEnabled();
        return !!(re && Y && pe && T);
      }
      setStrokeHitEnabled(U) {
        w.Util.warn("strokeHitEnabled property is deprecated. Please use hitStrokeWidth instead."), U ? this.hitStrokeWidth("auto") : this.hitStrokeWidth(0);
      }
      getStrokeHitEnabled() {
        return this.hitStrokeWidth() !== 0;
      }
      getSelfRect() {
        const U = this.size();
        return {
          x: this._centroid ? -U.width / 2 : 0,
          y: this._centroid ? -U.height / 2 : 0,
          width: U.width,
          height: U.height
        };
      }
      getClientRect(U = {}) {
        let Q = !1, Z = this.getParent();
        for (; Z; ) {
          if (Z.isCached()) {
            Q = !0;
            break;
          }
          Z = Z.getParent();
        }
        const re = U.skipTransform, Y = U.relativeTo || Q && this.getStage() || void 0, $ = this.getSelfRect(), T = !U.skipStroke && this.hasStroke() && this.strokeWidth() || 0, z = $.width + T, W = $.height + T, B = !U.skipShadow && this.hasShadow(), L = B ? this.shadowOffsetX() : 0, X = B ? this.shadowOffsetY() : 0, J = z + Math.abs(L), ue = W + Math.abs(X), ge = B && this.shadowBlur() || 0, se = J + ge * 2, q = ue + ge * 2, te = {
          width: se,
          height: q,
          x: -(T / 2 + ge) + Math.min(L, 0) + $.x,
          y: -(T / 2 + ge) + Math.min(X, 0) + $.y
        };
        return re ? te : this._transformedRect(te, Y);
      }
      drawScene(U, Q, Z) {
        const re = this.getLayer(), Y = U || re.getCanvas(), $ = Y.getContext(), pe = this._getCanvasCache(), T = this.getSceneFunc(), z = this.hasShadow();
        let W;
        const B = Q === this;
        if (!this.isVisible() && !B)
          return this;
        if (pe) {
          $.save();
          const L = this.getAbsoluteTransform(Q).getMatrix();
          return $.transform(L[0], L[1], L[2], L[3], L[4], L[5]), this._drawCachedSceneCanvas($), $.restore(), this;
        }
        if (!T)
          return this;
        if ($.save(), this._useBufferCanvas()) {
          W = this.getStage();
          const L = Z || W.bufferCanvas, X = L.getContext();
          X.clear(), X.save(), X._applyLineJoin(this);
          const J = this.getAbsoluteTransform(Q).getMatrix();
          X.transform(J[0], J[1], J[2], J[3], J[4], J[5]), T.call(this, X, this), X.restore();
          const ue = L.pixelRatio;
          z && $._applyShadow(this), $._applyOpacity(this), $._applyGlobalCompositeOperation(this), $.drawImage(L._canvas, L.x || 0, L.y || 0, L.width / ue, L.height / ue);
        } else {
          if ($._applyLineJoin(this), !B) {
            const L = this.getAbsoluteTransform(Q).getMatrix();
            $.transform(L[0], L[1], L[2], L[3], L[4], L[5]), $._applyOpacity(this), $._applyGlobalCompositeOperation(this);
          }
          z && $._applyShadow(this), T.call(this, $, this);
        }
        return $.restore(), this;
      }
      drawHit(U, Q, Z = !1) {
        if (!this.shouldDrawHit(Q, Z))
          return this;
        const re = this.getLayer(), Y = U || re.hitCanvas, $ = Y && Y.getContext(), pe = this.hitFunc() || this.sceneFunc(), T = this._getCanvasCache(), z = T && T.hit;
        if (this.colorKey || w.Util.warn("Looks like your canvas has a destroyed shape in it. Do not reuse shape after you destroyed it. If you want to reuse shape you should call remove() instead of destroy()"), z) {
          $.save();
          const B = this.getAbsoluteTransform(Q).getMatrix();
          return $.transform(B[0], B[1], B[2], B[3], B[4], B[5]), this._drawCachedHitCanvas($), $.restore(), this;
        }
        if (!pe)
          return this;
        if ($.save(), $._applyLineJoin(this), !(this === Q)) {
          const B = this.getAbsoluteTransform(Q).getMatrix();
          $.transform(B[0], B[1], B[2], B[3], B[4], B[5]);
        }
        return pe.call(this, $, this), $.restore(), this;
      }
      drawHitFromCache(U = 0) {
        const Q = this._getCanvasCache(), Z = this._getCachedSceneCanvas(), re = Q.hit, Y = re.getContext(), $ = re.getWidth(), pe = re.getHeight();
        Y.clear(), Y.drawImage(Z._canvas, 0, 0, $, pe);
        try {
          const T = Y.getImageData(0, 0, $, pe), z = T.data, W = z.length, B = w.Util._hexToRgb(this.colorKey);
          for (let L = 0; L < W; L += 4)
            z[L + 3] > U ? (z[L] = B.r, z[L + 1] = B.g, z[L + 2] = B.b, z[L + 3] = 255) : z[L + 3] = 0;
          Y.putImageData(T, 0, 0);
        } catch (T) {
          w.Util.error("Unable to draw hit graph from cached scene canvas. " + T.message);
        }
        return this;
      }
      hasPointerCapture(U) {
        return m.hasPointerCapture(U, this);
      }
      setPointerCapture(U) {
        m.setPointerCapture(U, this);
      }
      releaseCapture(U) {
        m.releaseCapture(U, this);
      }
    }
    u.Shape = F, F.prototype._fillFunc = P, F.prototype._strokeFunc = I, F.prototype._fillFuncHit = H, F.prototype._strokeFuncHit = v, F.prototype._centroid = !1, F.prototype.nodeType = "Shape", (0, h._registerNode)(F), F.prototype.eventListeners = {}, F.prototype.on.call(F.prototype, "shadowColorChange.konva shadowBlurChange.konva shadowOffsetChange.konva shadowOpacityChange.konva shadowEnabledChange.konva", f), F.prototype.on.call(F.prototype, "shadowColorChange.konva shadowOpacityChange.konva shadowEnabledChange.konva", R), F.prototype.on.call(F.prototype, "fillPriorityChange.konva fillPatternImageChange.konva fillPatternRepeatChange.konva fillPatternScaleXChange.konva fillPatternScaleYChange.konva fillPatternOffsetXChange.konva fillPatternOffsetYChange.konva fillPatternXChange.konva fillPatternYChange.konva fillPatternRotationChange.konva", D), F.prototype.on.call(F.prototype, "fillPriorityChange.konva fillLinearGradientColorStopsChange.konva fillLinearGradientStartPointXChange.konva fillLinearGradientStartPointYChange.konva fillLinearGradientEndPointXChange.konva fillLinearGradientEndPointYChange.konva", j), F.prototype.on.call(F.prototype, "fillPriorityChange.konva fillRadialGradientColorStopsChange.konva fillRadialGradientStartPointXChange.konva fillRadialGradientStartPointYChange.konva fillRadialGradientEndPointXChange.konva fillRadialGradientEndPointYChange.konva fillRadialGradientStartRadiusChange.konva fillRadialGradientEndRadiusChange.konva", b), O.Factory.addGetterSetter(F, "stroke", void 0, (0, x.getStringOrGradientValidator)()), O.Factory.addGetterSetter(F, "strokeWidth", 2, (0, x.getNumberValidator)()), O.Factory.addGetterSetter(F, "fillAfterStrokeEnabled", !1), O.Factory.addGetterSetter(F, "hitStrokeWidth", "auto", (0, x.getNumberOrAutoValidator)()), O.Factory.addGetterSetter(F, "strokeHitEnabled", !0, (0, x.getBooleanValidator)()), O.Factory.addGetterSetter(F, "perfectDrawEnabled", !0, (0, x.getBooleanValidator)()), O.Factory.addGetterSetter(F, "shadowForStrokeEnabled", !0, (0, x.getBooleanValidator)()), O.Factory.addGetterSetter(F, "lineJoin"), O.Factory.addGetterSetter(F, "lineCap"), O.Factory.addGetterSetter(F, "sceneFunc"), O.Factory.addGetterSetter(F, "hitFunc"), O.Factory.addGetterSetter(F, "dash"), O.Factory.addGetterSetter(F, "dashOffset", 0, (0, x.getNumberValidator)()), O.Factory.addGetterSetter(F, "shadowColor", void 0, (0, x.getStringValidator)()), O.Factory.addGetterSetter(F, "shadowBlur", 0, (0, x.getNumberValidator)()), O.Factory.addGetterSetter(F, "shadowOpacity", 1, (0, x.getNumberValidator)()), O.Factory.addComponentsGetterSetter(F, "shadowOffset", ["x", "y"]), O.Factory.addGetterSetter(F, "shadowOffsetX", 0, (0, x.getNumberValidator)()), O.Factory.addGetterSetter(F, "shadowOffsetY", 0, (0, x.getNumberValidator)()), O.Factory.addGetterSetter(F, "fillPatternImage"), O.Factory.addGetterSetter(F, "fill", void 0, (0, x.getStringOrGradientValidator)()), O.Factory.addGetterSetter(F, "fillPatternX", 0, (0, x.getNumberValidator)()), O.Factory.addGetterSetter(F, "fillPatternY", 0, (0, x.getNumberValidator)()), O.Factory.addGetterSetter(F, "fillLinearGradientColorStops"), O.Factory.addGetterSetter(F, "strokeLinearGradientColorStops"), O.Factory.addGetterSetter(F, "fillRadialGradientStartRadius", 0), O.Factory.addGetterSetter(F, "fillRadialGradientEndRadius", 0), O.Factory.addGetterSetter(F, "fillRadialGradientColorStops"), O.Factory.addGetterSetter(F, "fillPatternRepeat", "repeat"), O.Factory.addGetterSetter(F, "fillEnabled", !0), O.Factory.addGetterSetter(F, "strokeEnabled", !0), O.Factory.addGetterSetter(F, "shadowEnabled", !0), O.Factory.addGetterSetter(F, "dashEnabled", !0), O.Factory.addGetterSetter(F, "strokeScaleEnabled", !0), O.Factory.addGetterSetter(F, "fillPriority", "color"), O.Factory.addComponentsGetterSetter(F, "fillPatternOffset", ["x", "y"]), O.Factory.addGetterSetter(F, "fillPatternOffsetX", 0, (0, x.getNumberValidator)()), O.Factory.addGetterSetter(F, "fillPatternOffsetY", 0, (0, x.getNumberValidator)()), O.Factory.addComponentsGetterSetter(F, "fillPatternScale", ["x", "y"]), O.Factory.addGetterSetter(F, "fillPatternScaleX", 1, (0, x.getNumberValidator)()), O.Factory.addGetterSetter(F, "fillPatternScaleY", 1, (0, x.getNumberValidator)()), O.Factory.addComponentsGetterSetter(F, "fillLinearGradientStartPoint", [
      "x",
      "y"
    ]), O.Factory.addComponentsGetterSetter(F, "strokeLinearGradientStartPoint", [
      "x",
      "y"
    ]), O.Factory.addGetterSetter(F, "fillLinearGradientStartPointX", 0), O.Factory.addGetterSetter(F, "strokeLinearGradientStartPointX", 0), O.Factory.addGetterSetter(F, "fillLinearGradientStartPointY", 0), O.Factory.addGetterSetter(F, "strokeLinearGradientStartPointY", 0), O.Factory.addComponentsGetterSetter(F, "fillLinearGradientEndPoint", [
      "x",
      "y"
    ]), O.Factory.addComponentsGetterSetter(F, "strokeLinearGradientEndPoint", [
      "x",
      "y"
    ]), O.Factory.addGetterSetter(F, "fillLinearGradientEndPointX", 0), O.Factory.addGetterSetter(F, "strokeLinearGradientEndPointX", 0), O.Factory.addGetterSetter(F, "fillLinearGradientEndPointY", 0), O.Factory.addGetterSetter(F, "strokeLinearGradientEndPointY", 0), O.Factory.addComponentsGetterSetter(F, "fillRadialGradientStartPoint", [
      "x",
      "y"
    ]), O.Factory.addGetterSetter(F, "fillRadialGradientStartPointX", 0), O.Factory.addGetterSetter(F, "fillRadialGradientStartPointY", 0), O.Factory.addComponentsGetterSetter(F, "fillRadialGradientEndPoint", [
      "x",
      "y"
    ]), O.Factory.addGetterSetter(F, "fillRadialGradientEndPointX", 0), O.Factory.addGetterSetter(F, "fillRadialGradientEndPointY", 0), O.Factory.addGetterSetter(F, "fillPatternRotation", 0), O.Factory.addGetterSetter(F, "fillRule", void 0, (0, x.getStringValidator)()), O.Factory.backCompat(F, {
      dashArray: "dash",
      getDashArray: "getDash",
      setDashArray: "getDash",
      drawFunc: "sceneFunc",
      getDrawFunc: "getSceneFunc",
      setDrawFunc: "setSceneFunc",
      drawHitFunc: "hitFunc",
      getDrawHitFunc: "getHitFunc",
      setDrawHitFunc: "setHitFunc"
    });
  })(Zd)), Zd;
}
var ph;
function T0() {
  if (ph) return qa;
  ph = 1, Object.defineProperty(qa, "__esModule", { value: !0 }), qa.Layer = void 0;
  const u = Yt(), d = td(), w = nn(), O = ot(), M = ed(), x = at(), h = Fn(), m = et(), g = "#", C = "beforeDraw", E = "draw", N = [
    { x: 0, y: 0 },
    { x: -1, y: -1 },
    { x: 1, y: -1 },
    { x: 1, y: 1 },
    { x: -1, y: 1 }
  ], k = N.length;
  class _ extends d.Container {
    constructor(P) {
      super(P), this.canvas = new M.SceneCanvas(), this.hitCanvas = new M.HitCanvas({
        pixelRatio: 1
      }), this._waitingForDraw = !1, this.on("visibleChange.konva", this._checkVisibility), this._checkVisibility(), this.on("imageSmoothingEnabledChange.konva", this._setSmoothEnabled), this._setSmoothEnabled();
    }
    createPNGStream() {
      return this.canvas._canvas.createPNGStream();
    }
    getCanvas() {
      return this.canvas;
    }
    getNativeCanvasElement() {
      return this.canvas._canvas;
    }
    getHitCanvas() {
      return this.hitCanvas;
    }
    getContext() {
      return this.getCanvas().getContext();
    }
    clear(P) {
      return this.getContext().clear(P), this.getHitCanvas().getContext().clear(P), this;
    }
    setZIndex(P) {
      super.setZIndex(P);
      const I = this.getStage();
      return I && I.content && (I.content.removeChild(this.getNativeCanvasElement()), P < I.children.length - 1 ? I.content.insertBefore(this.getNativeCanvasElement(), I.children[P + 1].getCanvas()._canvas) : I.content.appendChild(this.getNativeCanvasElement())), this;
    }
    moveToTop() {
      w.Node.prototype.moveToTop.call(this);
      const P = this.getStage();
      return P && P.content && (P.content.removeChild(this.getNativeCanvasElement()), P.content.appendChild(this.getNativeCanvasElement())), !0;
    }
    moveUp() {
      if (!w.Node.prototype.moveUp.call(this))
        return !1;
      const I = this.getStage();
      return !I || !I.content ? !1 : (I.content.removeChild(this.getNativeCanvasElement()), this.index < I.children.length - 1 ? I.content.insertBefore(this.getNativeCanvasElement(), I.children[this.index + 1].getCanvas()._canvas) : I.content.appendChild(this.getNativeCanvasElement()), !0);
    }
    moveDown() {
      if (w.Node.prototype.moveDown.call(this)) {
        const P = this.getStage();
        if (P) {
          const I = P.children;
          P.content && (P.content.removeChild(this.getNativeCanvasElement()), P.content.insertBefore(this.getNativeCanvasElement(), I[this.index + 1].getCanvas()._canvas));
        }
        return !0;
      }
      return !1;
    }
    moveToBottom() {
      if (w.Node.prototype.moveToBottom.call(this)) {
        const P = this.getStage();
        if (P) {
          const I = P.children;
          P.content && (P.content.removeChild(this.getNativeCanvasElement()), P.content.insertBefore(this.getNativeCanvasElement(), I[1].getCanvas()._canvas));
        }
        return !0;
      }
      return !1;
    }
    getLayer() {
      return this;
    }
    remove() {
      const P = this.getNativeCanvasElement();
      return w.Node.prototype.remove.call(this), P && P.parentNode && u.Util._isInDocument(P) && P.parentNode.removeChild(P), this;
    }
    getStage() {
      return this.parent;
    }
    setSize({ width: P, height: I }) {
      return this.canvas.setSize(P, I), this.hitCanvas.setSize(P, I), this._setSmoothEnabled(), this;
    }
    _validateAdd(P) {
      const I = P.getType();
      I !== "Group" && I !== "Shape" && u.Util.throw("You may only add groups and shapes to a layer.");
    }
    _toKonvaCanvas(P) {
      return P = P || {}, P.width = P.width || this.getWidth(), P.height = P.height || this.getHeight(), P.x = P.x !== void 0 ? P.x : this.x(), P.y = P.y !== void 0 ? P.y : this.y(), w.Node.prototype._toKonvaCanvas.call(this, P);
    }
    _checkVisibility() {
      this.visible() ? this.canvas._canvas.style.display = "block" : this.canvas._canvas.style.display = "none";
    }
    _setSmoothEnabled() {
      this.getContext()._context.imageSmoothingEnabled = this.imageSmoothingEnabled();
    }
    getWidth() {
      if (this.parent)
        return this.parent.width();
    }
    setWidth() {
      u.Util.warn('Can not change width of layer. Use "stage.width(value)" function instead.');
    }
    getHeight() {
      if (this.parent)
        return this.parent.height();
    }
    setHeight() {
      u.Util.warn('Can not change height of layer. Use "stage.height(value)" function instead.');
    }
    batchDraw() {
      return this._waitingForDraw || (this._waitingForDraw = !0, u.Util.requestAnimFrame(() => {
        this.draw(), this._waitingForDraw = !1;
      })), this;
    }
    getIntersection(P) {
      if (!this.isListening() || !this.isVisible())
        return null;
      let I = 1, H = !1;
      for (; ; ) {
        for (let v = 0; v < k; v++) {
          const f = N[v], R = this._getIntersection({
            x: P.x + f.x * I,
            y: P.y + f.y * I
          }), D = R.shape;
          if (D)
            return D;
          if (H = !!R.antialiased, !R.antialiased)
            break;
        }
        if (H)
          I += 1;
        else
          return null;
      }
    }
    _getIntersection(P) {
      const I = this.hitCanvas.pixelRatio, H = this.hitCanvas.context.getImageData(Math.round(P.x * I), Math.round(P.y * I), 1, 1).data, v = H[3];
      if (v === 255) {
        const f = u.Util._rgbToHex(H[0], H[1], H[2]), R = h.shapes[g + f];
        return R ? {
          shape: R
        } : {
          antialiased: !0
        };
      } else if (v > 0)
        return {
          antialiased: !0
        };
      return {};
    }
    drawScene(P, I, H) {
      const v = this.getLayer(), f = P || v && v.getCanvas();
      return this._fire(C, {
        node: this
      }), this.clearBeforeDraw() && f.getContext().clear(), d.Container.prototype.drawScene.call(this, f, I, H), this._fire(E, {
        node: this
      }), this;
    }
    drawHit(P, I) {
      const H = this.getLayer(), v = P || H && H.hitCanvas;
      return H && H.clearBeforeDraw() && H.getHitCanvas().getContext().clear(), d.Container.prototype.drawHit.call(this, v, I), this;
    }
    enableHitGraph() {
      return this.hitGraphEnabled(!0), this;
    }
    disableHitGraph() {
      return this.hitGraphEnabled(!1), this;
    }
    setHitGraphEnabled(P) {
      u.Util.warn("hitGraphEnabled method is deprecated. Please use layer.listening() instead."), this.listening(P);
    }
    getHitGraphEnabled(P) {
      return u.Util.warn("hitGraphEnabled method is deprecated. Please use layer.listening() instead."), this.listening();
    }
    toggleHitCanvas() {
      if (!this.parent || !this.parent.content)
        return;
      const P = this.parent;
      !!this.hitCanvas._canvas.parentNode ? P.content.removeChild(this.hitCanvas._canvas) : P.content.appendChild(this.hitCanvas._canvas);
    }
    destroy() {
      return u.Util.releaseCanvas(this.getNativeCanvasElement(), this.getHitCanvas()._canvas), super.destroy();
    }
  }
  return qa.Layer = _, _.prototype.nodeType = "Layer", (0, m._registerNode)(_), O.Factory.addGetterSetter(_, "imageSmoothingEnabled", !0), O.Factory.addGetterSetter(_, "clearBeforeDraw", !0), O.Factory.addGetterSetter(_, "hitGraphEnabled", !0, (0, x.getBooleanValidator)()), qa;
}
var Ya = {}, gh;
function w1() {
  if (gh) return Ya;
  gh = 1, Object.defineProperty(Ya, "__esModule", { value: !0 }), Ya.FastLayer = void 0;
  const u = Yt(), d = T0(), w = et();
  let O = class extends d.Layer {
    constructor(x) {
      super(x), this.listening(!1), u.Util.warn('Konva.Fast layer is deprecated. Please use "new Konva.Layer({ listening: false })" instead.');
    }
  };
  return Ya.FastLayer = O, O.prototype.nodeType = "FastLayer", (0, w._registerNode)(O), Ya;
}
var Ka = {}, mh;
function ff() {
  if (mh) return Ka;
  mh = 1, Object.defineProperty(Ka, "__esModule", { value: !0 }), Ka.Group = void 0;
  const u = Yt(), d = td(), w = et();
  class O extends d.Container {
    _validateAdd(x) {
      const h = x.getType();
      h !== "Group" && h !== "Shape" && u.Util.throw("You may only add groups and shapes to groups.");
    }
  }
  return Ka.Group = O, O.prototype.nodeType = "Group", (0, w._registerNode)(O), Ka;
}
var Xa = {}, yh;
function hf() {
  if (yh) return Xa;
  yh = 1, Object.defineProperty(Xa, "__esModule", { value: !0 }), Xa.Animation = void 0;
  const u = et(), d = Yt(), w = (function() {
    return u.glob.performance && u.glob.performance.now ? function() {
      return u.glob.performance.now();
    } : function() {
      return (/* @__PURE__ */ new Date()).getTime();
    };
  })();
  let O = class Kl {
    constructor(x, h) {
      this.id = Kl.animIdCounter++, this.frame = {
        time: 0,
        timeDiff: 0,
        lastTime: w(),
        frameRate: 0
      }, this.func = x, this.setLayers(h);
    }
    setLayers(x) {
      let h = [];
      return x && (h = Array.isArray(x) ? x : [x]), this.layers = h, this;
    }
    getLayers() {
      return this.layers;
    }
    addLayer(x) {
      const h = this.layers, m = h.length;
      for (let g = 0; g < m; g++)
        if (h[g]._id === x._id)
          return !1;
      return this.layers.push(x), !0;
    }
    isRunning() {
      const h = Kl.animations, m = h.length;
      for (let g = 0; g < m; g++)
        if (h[g].id === this.id)
          return !0;
      return !1;
    }
    start() {
      return this.stop(), this.frame.timeDiff = 0, this.frame.lastTime = w(), Kl._addAnimation(this), this;
    }
    stop() {
      return Kl._removeAnimation(this), this;
    }
    _updateFrameObject(x) {
      this.frame.timeDiff = x - this.frame.lastTime, this.frame.lastTime = x, this.frame.time += this.frame.timeDiff, this.frame.frameRate = 1e3 / this.frame.timeDiff;
    }
    static _addAnimation(x) {
      this.animations.push(x), this._handleAnimation();
    }
    static _removeAnimation(x) {
      const h = x.id, m = this.animations, g = m.length;
      for (let C = 0; C < g; C++)
        if (m[C].id === h) {
          this.animations.splice(C, 1);
          break;
        }
    }
    static _runFrames() {
      const x = {}, h = this.animations;
      for (let m = 0; m < h.length; m++) {
        const g = h[m], C = g.layers, E = g.func;
        g._updateFrameObject(w());
        const N = C.length;
        let k;
        if (E ? k = E.call(g, g.frame) !== !1 : k = !0, !!k)
          for (let _ = 0; _ < N; _++) {
            const S = C[_];
            S._id !== void 0 && (x[S._id] = S);
          }
      }
      for (const m in x)
        x.hasOwnProperty(m) && x[m].batchDraw();
    }
    static _animationLoop() {
      const x = Kl;
      x.animations.length ? (x._runFrames(), d.Util.requestAnimFrame(x._animationLoop)) : x.animRunning = !1;
    }
    static _handleAnimation() {
      this.animRunning || (this.animRunning = !0, d.Util.requestAnimFrame(this._animationLoop));
    }
  };
  return Xa.Animation = O, O.animations = [], O.animIdCounter = 0, O.animRunning = !1, Xa;
}
var $d = {}, vh;
function x1() {
  return vh || (vh = 1, (function(u) {
    Object.defineProperty(u, "__esModule", { value: !0 }), u.Easings = u.Tween = void 0;
    const d = Yt(), w = hf(), O = nn(), M = et(), x = {
      node: 1,
      duration: 1,
      easing: 1,
      onFinish: 1,
      yoyo: 1
    }, h = 1, m = 2, g = 3, C = ["fill", "stroke", "shadowColor"];
    let E = 0;
    class N {
      constructor(S, P, I, H, v, f, R) {
        this.prop = S, this.propFunc = P, this.begin = H, this._pos = H, this.duration = f, this._change = 0, this.prevPos = 0, this.yoyo = R, this._time = 0, this._position = 0, this._startTime = 0, this._finish = 0, this.func = I, this._change = v - this.begin, this.pause();
      }
      fire(S) {
        const P = this[S];
        P && P();
      }
      setTime(S) {
        S > this.duration ? this.yoyo ? (this._time = this.duration, this.reverse()) : this.finish() : S < 0 ? this.yoyo ? (this._time = 0, this.play()) : this.reset() : (this._time = S, this.update());
      }
      getTime() {
        return this._time;
      }
      setPosition(S) {
        this.prevPos = this._pos, this.propFunc(S), this._pos = S;
      }
      getPosition(S) {
        return S === void 0 && (S = this._time), this.func(S, this.begin, this._change, this.duration);
      }
      play() {
        this.state = m, this._startTime = this.getTimer() - this._time, this.onEnterFrame(), this.fire("onPlay");
      }
      reverse() {
        this.state = g, this._time = this.duration - this._time, this._startTime = this.getTimer() - this._time, this.onEnterFrame(), this.fire("onReverse");
      }
      seek(S) {
        this.pause(), this._time = S, this.update(), this.fire("onSeek");
      }
      reset() {
        this.pause(), this._time = 0, this.update(), this.fire("onReset");
      }
      finish() {
        this.pause(), this._time = this.duration, this.update(), this.fire("onFinish");
      }
      update() {
        this.setPosition(this.getPosition(this._time)), this.fire("onUpdate");
      }
      onEnterFrame() {
        const S = this.getTimer() - this._startTime;
        this.state === m ? this.setTime(S) : this.state === g && this.setTime(this.duration - S);
      }
      pause() {
        this.state = h, this.fire("onPause");
      }
      getTimer() {
        return (/* @__PURE__ */ new Date()).getTime();
      }
    }
    class k {
      constructor(S) {
        const P = this, I = S.node, H = I._id, v = S.easing || u.Easings.Linear, f = !!S.yoyo;
        let R, D;
        typeof S.duration > "u" ? R = 0.3 : S.duration === 0 ? R = 1e-3 : R = S.duration, this.node = I, this._id = E++;
        const j = I.getLayer() || (I instanceof M.Konva.Stage ? I.getLayers() : null);
        j || d.Util.error("Tween constructor have `node` that is not in a layer. Please add node into layer first."), this.anim = new w.Animation(function() {
          P.tween.onEnterFrame();
        }, j), this.tween = new N(D, function(b) {
          P._tweenFunc(b);
        }, v, 0, 1, R * 1e3, f), this._addListeners(), k.attrs[H] || (k.attrs[H] = {}), k.attrs[H][this._id] || (k.attrs[H][this._id] = {}), k.tweens[H] || (k.tweens[H] = {});
        for (D in S)
          x[D] === void 0 && this._addAttr(D, S[D]);
        this.reset(), this.onFinish = S.onFinish, this.onReset = S.onReset, this.onUpdate = S.onUpdate;
      }
      _addAttr(S, P) {
        const I = this.node, H = I._id;
        let v, f, R, D, j;
        const b = k.tweens[H][S];
        b && delete k.attrs[H][b][S];
        let F = I.getAttr(S);
        if (d.Util._isArray(P))
          if (v = [], f = Math.max(P.length, F.length), S === "points" && P.length !== F.length && (P.length > F.length ? (D = F, F = d.Util._prepareArrayForTween(F, P, I.closed())) : (R = P, P = d.Util._prepareArrayForTween(P, F, I.closed()))), S.indexOf("fill") === 0)
            for (let G = 0; G < f; G++)
              if (G % 2 === 0)
                v.push(P[G] - F[G]);
              else {
                const U = d.Util.colorToRGBA(F[G]);
                j = d.Util.colorToRGBA(P[G]), F[G] = U, v.push({
                  r: j.r - U.r,
                  g: j.g - U.g,
                  b: j.b - U.b,
                  a: j.a - U.a
                });
              }
          else
            for (let G = 0; G < f; G++)
              v.push(P[G] - F[G]);
        else C.indexOf(S) !== -1 ? (F = d.Util.colorToRGBA(F), j = d.Util.colorToRGBA(P), v = {
          r: j.r - F.r,
          g: j.g - F.g,
          b: j.b - F.b,
          a: j.a - F.a
        }) : v = P - F;
        k.attrs[H][this._id][S] = {
          start: F,
          diff: v,
          end: P,
          trueEnd: R,
          trueStart: D
        }, k.tweens[H][S] = this._id;
      }
      _tweenFunc(S) {
        const P = this.node, I = k.attrs[P._id][this._id];
        let H, v, f, R, D, j, b, F;
        for (H in I) {
          if (v = I[H], f = v.start, R = v.diff, F = v.end, d.Util._isArray(f))
            if (D = [], b = Math.max(f.length, F.length), H.indexOf("fill") === 0)
              for (j = 0; j < b; j++)
                j % 2 === 0 ? D.push((f[j] || 0) + R[j] * S) : D.push("rgba(" + Math.round(f[j].r + R[j].r * S) + "," + Math.round(f[j].g + R[j].g * S) + "," + Math.round(f[j].b + R[j].b * S) + "," + (f[j].a + R[j].a * S) + ")");
            else
              for (j = 0; j < b; j++)
                D.push((f[j] || 0) + R[j] * S);
          else C.indexOf(H) !== -1 ? D = "rgba(" + Math.round(f.r + R.r * S) + "," + Math.round(f.g + R.g * S) + "," + Math.round(f.b + R.b * S) + "," + (f.a + R.a * S) + ")" : D = f + R * S;
          P.setAttr(H, D);
        }
      }
      _addListeners() {
        this.tween.onPlay = () => {
          this.anim.start();
        }, this.tween.onReverse = () => {
          this.anim.start();
        }, this.tween.onPause = () => {
          this.anim.stop();
        }, this.tween.onFinish = () => {
          const S = this.node, P = k.attrs[S._id][this._id];
          P.points && P.points.trueEnd && S.setAttr("points", P.points.trueEnd), this.onFinish && this.onFinish.call(this);
        }, this.tween.onReset = () => {
          const S = this.node, P = k.attrs[S._id][this._id];
          P.points && P.points.trueStart && S.points(P.points.trueStart), this.onReset && this.onReset();
        }, this.tween.onUpdate = () => {
          this.onUpdate && this.onUpdate.call(this);
        };
      }
      play() {
        return this.tween.play(), this;
      }
      reverse() {
        return this.tween.reverse(), this;
      }
      reset() {
        return this.tween.reset(), this;
      }
      seek(S) {
        return this.tween.seek(S * 1e3), this;
      }
      pause() {
        return this.tween.pause(), this;
      }
      finish() {
        return this.tween.finish(), this;
      }
      destroy() {
        const S = this.node._id, P = this._id, I = k.tweens[S];
        this.pause(), this.anim && this.anim.stop();
        for (const H in I)
          delete k.tweens[S][H];
        delete k.attrs[S][P], k.tweens[S] && (Object.keys(k.tweens[S]).length === 0 && delete k.tweens[S], Object.keys(k.attrs[S]).length === 0 && delete k.attrs[S]);
      }
    }
    u.Tween = k, k.attrs = {}, k.tweens = {}, O.Node.prototype.to = function(_) {
      const S = _.onFinish;
      _.node = this, _.onFinish = function() {
        this.destroy(), S && S();
      }, new k(_).play();
    }, u.Easings = {
      BackEaseIn(_, S, P, I) {
        return P * (_ /= I) * _ * ((1.70158 + 1) * _ - 1.70158) + S;
      },
      BackEaseOut(_, S, P, I) {
        return P * ((_ = _ / I - 1) * _ * ((1.70158 + 1) * _ + 1.70158) + 1) + S;
      },
      BackEaseInOut(_, S, P, I) {
        let H = 1.70158;
        return (_ /= I / 2) < 1 ? P / 2 * (_ * _ * (((H *= 1.525) + 1) * _ - H)) + S : P / 2 * ((_ -= 2) * _ * (((H *= 1.525) + 1) * _ + H) + 2) + S;
      },
      ElasticEaseIn(_, S, P, I, H, v) {
        let f = 0;
        return _ === 0 ? S : (_ /= I) === 1 ? S + P : (v || (v = I * 0.3), !H || H < Math.abs(P) ? (H = P, f = v / 4) : f = v / (2 * Math.PI) * Math.asin(P / H), -(H * Math.pow(2, 10 * (_ -= 1)) * Math.sin((_ * I - f) * (2 * Math.PI) / v)) + S);
      },
      ElasticEaseOut(_, S, P, I, H, v) {
        let f = 0;
        return _ === 0 ? S : (_ /= I) === 1 ? S + P : (v || (v = I * 0.3), !H || H < Math.abs(P) ? (H = P, f = v / 4) : f = v / (2 * Math.PI) * Math.asin(P / H), H * Math.pow(2, -10 * _) * Math.sin((_ * I - f) * (2 * Math.PI) / v) + P + S);
      },
      ElasticEaseInOut(_, S, P, I, H, v) {
        let f = 0;
        return _ === 0 ? S : (_ /= I / 2) === 2 ? S + P : (v || (v = I * (0.3 * 1.5)), !H || H < Math.abs(P) ? (H = P, f = v / 4) : f = v / (2 * Math.PI) * Math.asin(P / H), _ < 1 ? -0.5 * (H * Math.pow(2, 10 * (_ -= 1)) * Math.sin((_ * I - f) * (2 * Math.PI) / v)) + S : H * Math.pow(2, -10 * (_ -= 1)) * Math.sin((_ * I - f) * (2 * Math.PI) / v) * 0.5 + P + S);
      },
      BounceEaseOut(_, S, P, I) {
        return (_ /= I) < 1 / 2.75 ? P * (7.5625 * _ * _) + S : _ < 2 / 2.75 ? P * (7.5625 * (_ -= 1.5 / 2.75) * _ + 0.75) + S : _ < 2.5 / 2.75 ? P * (7.5625 * (_ -= 2.25 / 2.75) * _ + 0.9375) + S : P * (7.5625 * (_ -= 2.625 / 2.75) * _ + 0.984375) + S;
      },
      BounceEaseIn(_, S, P, I) {
        return P - u.Easings.BounceEaseOut(I - _, 0, P, I) + S;
      },
      BounceEaseInOut(_, S, P, I) {
        return _ < I / 2 ? u.Easings.BounceEaseIn(_ * 2, 0, P, I) * 0.5 + S : u.Easings.BounceEaseOut(_ * 2 - I, 0, P, I) * 0.5 + P * 0.5 + S;
      },
      EaseIn(_, S, P, I) {
        return P * (_ /= I) * _ + S;
      },
      EaseOut(_, S, P, I) {
        return -P * (_ /= I) * (_ - 2) + S;
      },
      EaseInOut(_, S, P, I) {
        return (_ /= I / 2) < 1 ? P / 2 * _ * _ + S : -P / 2 * (--_ * (_ - 2) - 1) + S;
      },
      StrongEaseIn(_, S, P, I) {
        return P * (_ /= I) * _ * _ * _ * _ + S;
      },
      StrongEaseOut(_, S, P, I) {
        return P * ((_ = _ / I - 1) * _ * _ * _ * _ + 1) + S;
      },
      StrongEaseInOut(_, S, P, I) {
        return (_ /= I / 2) < 1 ? P / 2 * _ * _ * _ * _ * _ + S : P / 2 * ((_ -= 2) * _ * _ * _ * _ + 2) + S;
      },
      Linear(_, S, P, I) {
        return P * _ / I + S;
      }
    };
  })($d)), $d;
}
var _h;
function uf() {
  return _h || (_h = 1, (function(u) {
    Object.defineProperty(u, "__esModule", { value: !0 }), u.Konva = void 0;
    const d = et(), w = Yt(), O = nn(), M = td(), x = S1(), h = T0(), m = w1(), g = ff(), C = df(), E = Fn(), N = hf(), k = x1(), _ = P0(), S = ed();
    u.Konva = w.Util._assign(d.Konva, {
      Util: w.Util,
      Transform: w.Transform,
      Node: O.Node,
      Container: M.Container,
      Stage: x.Stage,
      stages: x.stages,
      Layer: h.Layer,
      FastLayer: m.FastLayer,
      Group: g.Group,
      DD: C.DD,
      Shape: E.Shape,
      shapes: E.shapes,
      Animation: N.Animation,
      Tween: k.Tween,
      Easings: k.Easings,
      Context: _.Context,
      Canvas: S.Canvas
    }), u.default = u.Konva;
  })(Yd)), Yd;
}
var Qa = {}, Sh;
function C1() {
  if (Sh) return Qa;
  Sh = 1, Object.defineProperty(Qa, "__esModule", { value: !0 }), Qa.Arc = void 0;
  const u = ot(), d = Fn(), w = et(), O = at(), M = et();
  let x = class extends d.Shape {
    _sceneFunc(m) {
      const g = w.Konva.getAngle(this.angle()), C = this.clockwise();
      m.beginPath(), m.arc(0, 0, this.outerRadius(), 0, g, C), m.arc(0, 0, this.innerRadius(), g, 0, !C), m.closePath(), m.fillStrokeShape(this);
    }
    getWidth() {
      return this.outerRadius() * 2;
    }
    getHeight() {
      return this.outerRadius() * 2;
    }
    setWidth(m) {
      this.outerRadius(m / 2);
    }
    setHeight(m) {
      this.outerRadius(m / 2);
    }
    getSelfRect() {
      const m = this.innerRadius(), g = this.outerRadius(), C = this.clockwise(), E = w.Konva.getAngle(C ? 360 - this.angle() : this.angle()), N = Math.cos(Math.min(E, Math.PI)), k = 1, _ = Math.sin(Math.min(Math.max(Math.PI, E), 3 * Math.PI / 2)), S = Math.sin(Math.min(E, Math.PI / 2)), P = N * (N > 0 ? m : g), I = k * g, H = _ * (_ > 0 ? m : g), v = S * (S > 0 ? g : m);
      return {
        x: P,
        y: C ? -1 * v : H,
        width: I - P,
        height: v - H
      };
    }
  };
  return Qa.Arc = x, x.prototype._centroid = !0, x.prototype.className = "Arc", x.prototype._attrsAffectingSize = [
    "innerRadius",
    "outerRadius",
    "angle",
    "clockwise"
  ], (0, M._registerNode)(x), u.Factory.addGetterSetter(x, "innerRadius", 0, (0, O.getNumberValidator)()), u.Factory.addGetterSetter(x, "outerRadius", 0, (0, O.getNumberValidator)()), u.Factory.addGetterSetter(x, "angle", 0, (0, O.getNumberValidator)()), u.Factory.addGetterSetter(x, "clockwise", !1, (0, O.getBooleanValidator)()), Qa;
}
var ba = {}, Ja = {}, wh;
function N0() {
  if (wh) return Ja;
  wh = 1, Object.defineProperty(Ja, "__esModule", { value: !0 }), Ja.Line = void 0;
  const u = ot(), d = et(), w = Fn(), O = at();
  function M(m, g, C, E, N, k, _) {
    const S = Math.sqrt(Math.pow(C - m, 2) + Math.pow(E - g, 2)), P = Math.sqrt(Math.pow(N - C, 2) + Math.pow(k - E, 2)), I = _ * S / (S + P), H = _ * P / (S + P), v = C - I * (N - m), f = E - I * (k - g), R = C + H * (N - m), D = E + H * (k - g);
    return [v, f, R, D];
  }
  function x(m, g) {
    const C = m.length, E = [];
    for (let N = 2; N < C - 2; N += 2) {
      const k = M(m[N - 2], m[N - 1], m[N], m[N + 1], m[N + 2], m[N + 3], g);
      isNaN(k[0]) || (E.push(k[0]), E.push(k[1]), E.push(m[N]), E.push(m[N + 1]), E.push(k[2]), E.push(k[3]));
    }
    return E;
  }
  class h extends w.Shape {
    constructor(g) {
      super(g), this.on("pointsChange.konva tensionChange.konva closedChange.konva bezierChange.konva", function() {
        this._clearCache("tensionPoints");
      });
    }
    _sceneFunc(g) {
      const C = this.points(), E = C.length, N = this.tension(), k = this.closed(), _ = this.bezier();
      if (!E)
        return;
      let S = 0;
      if (g.beginPath(), g.moveTo(C[0], C[1]), N !== 0 && E > 4) {
        const P = this.getTensionPoints(), I = P.length;
        for (S = k ? 0 : 4, k || g.quadraticCurveTo(P[0], P[1], P[2], P[3]); S < I - 2; )
          g.bezierCurveTo(P[S++], P[S++], P[S++], P[S++], P[S++], P[S++]);
        k || g.quadraticCurveTo(P[I - 2], P[I - 1], C[E - 2], C[E - 1]);
      } else if (_)
        for (S = 2; S < E; )
          g.bezierCurveTo(C[S++], C[S++], C[S++], C[S++], C[S++], C[S++]);
      else
        for (S = 2; S < E; S += 2)
          g.lineTo(C[S], C[S + 1]);
      k ? (g.closePath(), g.fillStrokeShape(this)) : g.strokeShape(this);
    }
    getTensionPoints() {
      return this._getCache("tensionPoints", this._getTensionPoints);
    }
    _getTensionPoints() {
      return this.closed() ? this._getTensionPointsClosed() : x(this.points(), this.tension());
    }
    _getTensionPointsClosed() {
      const g = this.points(), C = g.length, E = this.tension(), N = M(g[C - 2], g[C - 1], g[0], g[1], g[2], g[3], E), k = M(g[C - 4], g[C - 3], g[C - 2], g[C - 1], g[0], g[1], E), _ = x(g, E);
      return [N[2], N[3]].concat(_).concat([
        k[0],
        k[1],
        g[C - 2],
        g[C - 1],
        k[2],
        k[3],
        N[0],
        N[1],
        g[0],
        g[1]
      ]);
    }
    getWidth() {
      return this.getSelfRect().width;
    }
    getHeight() {
      return this.getSelfRect().height;
    }
    getSelfRect() {
      let g = this.points();
      if (g.length < 4)
        return {
          x: g[0] || 0,
          y: g[1] || 0,
          width: 0,
          height: 0
        };
      this.tension() !== 0 ? g = [
        g[0],
        g[1],
        ...this._getTensionPoints(),
        g[g.length - 2],
        g[g.length - 1]
      ] : g = this.points();
      let C = g[0], E = g[0], N = g[1], k = g[1], _, S;
      for (let P = 0; P < g.length / 2; P++)
        _ = g[P * 2], S = g[P * 2 + 1], C = Math.min(C, _), E = Math.max(E, _), N = Math.min(N, S), k = Math.max(k, S);
      return {
        x: C,
        y: N,
        width: E - C,
        height: k - N
      };
    }
  }
  return Ja.Line = h, h.prototype.className = "Line", h.prototype._attrsAffectingSize = ["points", "bezier", "tension"], (0, d._registerNode)(h), u.Factory.addGetterSetter(h, "closed", !1), u.Factory.addGetterSetter(h, "bezier", !1), u.Factory.addGetterSetter(h, "tension", 0, (0, O.getNumberValidator)()), u.Factory.addGetterSetter(h, "points", [], (0, O.getNumberArrayValidator)()), Ja;
}
var Za = {}, ef = {}, xh;
function k1() {
  return xh || (xh = 1, (function(u) {
    Object.defineProperty(u, "__esModule", { value: !0 }), u.t2length = u.getQuadraticArcLength = u.getCubicArcLength = u.binomialCoefficients = u.cValues = u.tValues = void 0, u.tValues = [
      [],
      [],
      [
        -0.5773502691896257,
        0.5773502691896257
      ],
      [
        0,
        -0.7745966692414834,
        0.7745966692414834
      ],
      [
        -0.33998104358485626,
        0.33998104358485626,
        -0.8611363115940526,
        0.8611363115940526
      ],
      [
        0,
        -0.5384693101056831,
        0.5384693101056831,
        -0.906179845938664,
        0.906179845938664
      ],
      [
        0.6612093864662645,
        -0.6612093864662645,
        -0.2386191860831969,
        0.2386191860831969,
        -0.932469514203152,
        0.932469514203152
      ],
      [
        0,
        0.4058451513773972,
        -0.4058451513773972,
        -0.7415311855993945,
        0.7415311855993945,
        -0.9491079123427585,
        0.9491079123427585
      ],
      [
        -0.1834346424956498,
        0.1834346424956498,
        -0.525532409916329,
        0.525532409916329,
        -0.7966664774136267,
        0.7966664774136267,
        -0.9602898564975363,
        0.9602898564975363
      ],
      [
        0,
        -0.8360311073266358,
        0.8360311073266358,
        -0.9681602395076261,
        0.9681602395076261,
        -0.3242534234038089,
        0.3242534234038089,
        -0.6133714327005904,
        0.6133714327005904
      ],
      [
        -0.14887433898163122,
        0.14887433898163122,
        -0.4333953941292472,
        0.4333953941292472,
        -0.6794095682990244,
        0.6794095682990244,
        -0.8650633666889845,
        0.8650633666889845,
        -0.9739065285171717,
        0.9739065285171717
      ],
      [
        0,
        -0.26954315595234496,
        0.26954315595234496,
        -0.5190961292068118,
        0.5190961292068118,
        -0.7301520055740494,
        0.7301520055740494,
        -0.8870625997680953,
        0.8870625997680953,
        -0.978228658146057,
        0.978228658146057
      ],
      [
        -0.1252334085114689,
        0.1252334085114689,
        -0.3678314989981802,
        0.3678314989981802,
        -0.5873179542866175,
        0.5873179542866175,
        -0.7699026741943047,
        0.7699026741943047,
        -0.9041172563704749,
        0.9041172563704749,
        -0.9815606342467192,
        0.9815606342467192
      ],
      [
        0,
        -0.2304583159551348,
        0.2304583159551348,
        -0.44849275103644687,
        0.44849275103644687,
        -0.6423493394403402,
        0.6423493394403402,
        -0.8015780907333099,
        0.8015780907333099,
        -0.9175983992229779,
        0.9175983992229779,
        -0.9841830547185881,
        0.9841830547185881
      ],
      [
        -0.10805494870734367,
        0.10805494870734367,
        -0.31911236892788974,
        0.31911236892788974,
        -0.5152486363581541,
        0.5152486363581541,
        -0.6872929048116855,
        0.6872929048116855,
        -0.827201315069765,
        0.827201315069765,
        -0.9284348836635735,
        0.9284348836635735,
        -0.9862838086968123,
        0.9862838086968123
      ],
      [
        0,
        -0.20119409399743451,
        0.20119409399743451,
        -0.3941513470775634,
        0.3941513470775634,
        -0.5709721726085388,
        0.5709721726085388,
        -0.7244177313601701,
        0.7244177313601701,
        -0.8482065834104272,
        0.8482065834104272,
        -0.937273392400706,
        0.937273392400706,
        -0.9879925180204854,
        0.9879925180204854
      ],
      [
        -0.09501250983763744,
        0.09501250983763744,
        -0.2816035507792589,
        0.2816035507792589,
        -0.45801677765722737,
        0.45801677765722737,
        -0.6178762444026438,
        0.6178762444026438,
        -0.755404408355003,
        0.755404408355003,
        -0.8656312023878318,
        0.8656312023878318,
        -0.9445750230732326,
        0.9445750230732326,
        -0.9894009349916499,
        0.9894009349916499
      ],
      [
        0,
        -0.17848418149584785,
        0.17848418149584785,
        -0.3512317634538763,
        0.3512317634538763,
        -0.5126905370864769,
        0.5126905370864769,
        -0.6576711592166907,
        0.6576711592166907,
        -0.7815140038968014,
        0.7815140038968014,
        -0.8802391537269859,
        0.8802391537269859,
        -0.9506755217687678,
        0.9506755217687678,
        -0.9905754753144174,
        0.9905754753144174
      ],
      [
        -0.0847750130417353,
        0.0847750130417353,
        -0.2518862256915055,
        0.2518862256915055,
        -0.41175116146284263,
        0.41175116146284263,
        -0.5597708310739475,
        0.5597708310739475,
        -0.6916870430603532,
        0.6916870430603532,
        -0.8037049589725231,
        0.8037049589725231,
        -0.8926024664975557,
        0.8926024664975557,
        -0.9558239495713977,
        0.9558239495713977,
        -0.9915651684209309,
        0.9915651684209309
      ],
      [
        0,
        -0.16035864564022537,
        0.16035864564022537,
        -0.31656409996362983,
        0.31656409996362983,
        -0.46457074137596094,
        0.46457074137596094,
        -0.600545304661681,
        0.600545304661681,
        -0.7209661773352294,
        0.7209661773352294,
        -0.8227146565371428,
        0.8227146565371428,
        -0.9031559036148179,
        0.9031559036148179,
        -0.96020815213483,
        0.96020815213483,
        -0.9924068438435844,
        0.9924068438435844
      ],
      [
        -0.07652652113349734,
        0.07652652113349734,
        -0.22778585114164507,
        0.22778585114164507,
        -0.37370608871541955,
        0.37370608871541955,
        -0.5108670019508271,
        0.5108670019508271,
        -0.636053680726515,
        0.636053680726515,
        -0.7463319064601508,
        0.7463319064601508,
        -0.8391169718222188,
        0.8391169718222188,
        -0.912234428251326,
        0.912234428251326,
        -0.9639719272779138,
        0.9639719272779138,
        -0.9931285991850949,
        0.9931285991850949
      ],
      [
        0,
        -0.1455618541608951,
        0.1455618541608951,
        -0.2880213168024011,
        0.2880213168024011,
        -0.4243421202074388,
        0.4243421202074388,
        -0.5516188358872198,
        0.5516188358872198,
        -0.6671388041974123,
        0.6671388041974123,
        -0.7684399634756779,
        0.7684399634756779,
        -0.8533633645833173,
        0.8533633645833173,
        -0.9200993341504008,
        0.9200993341504008,
        -0.9672268385663063,
        0.9672268385663063,
        -0.9937521706203895,
        0.9937521706203895
      ],
      [
        -0.06973927331972223,
        0.06973927331972223,
        -0.20786042668822127,
        0.20786042668822127,
        -0.34193582089208424,
        0.34193582089208424,
        -0.469355837986757,
        0.469355837986757,
        -0.5876404035069116,
        0.5876404035069116,
        -0.6944872631866827,
        0.6944872631866827,
        -0.7878168059792081,
        0.7878168059792081,
        -0.8658125777203002,
        0.8658125777203002,
        -0.926956772187174,
        0.926956772187174,
        -0.9700604978354287,
        0.9700604978354287,
        -0.9942945854823992,
        0.9942945854823992
      ],
      [
        0,
        -0.1332568242984661,
        0.1332568242984661,
        -0.26413568097034495,
        0.26413568097034495,
        -0.3903010380302908,
        0.3903010380302908,
        -0.5095014778460075,
        0.5095014778460075,
        -0.6196098757636461,
        0.6196098757636461,
        -0.7186613631319502,
        0.7186613631319502,
        -0.8048884016188399,
        0.8048884016188399,
        -0.8767523582704416,
        0.8767523582704416,
        -0.9329710868260161,
        0.9329710868260161,
        -0.9725424712181152,
        0.9725424712181152,
        -0.9947693349975522,
        0.9947693349975522
      ],
      [
        -0.06405689286260563,
        0.06405689286260563,
        -0.1911188674736163,
        0.1911188674736163,
        -0.3150426796961634,
        0.3150426796961634,
        -0.4337935076260451,
        0.4337935076260451,
        -0.5454214713888396,
        0.5454214713888396,
        -0.6480936519369755,
        0.6480936519369755,
        -0.7401241915785544,
        0.7401241915785544,
        -0.820001985973903,
        0.820001985973903,
        -0.8864155270044011,
        0.8864155270044011,
        -0.9382745520027328,
        0.9382745520027328,
        -0.9747285559713095,
        0.9747285559713095,
        -0.9951872199970213,
        0.9951872199970213
      ]
    ], u.cValues = [
      [],
      [],
      [1, 1],
      [
        0.8888888888888888,
        0.5555555555555556,
        0.5555555555555556
      ],
      [
        0.6521451548625461,
        0.6521451548625461,
        0.34785484513745385,
        0.34785484513745385
      ],
      [
        0.5688888888888889,
        0.47862867049936647,
        0.47862867049936647,
        0.23692688505618908,
        0.23692688505618908
      ],
      [
        0.3607615730481386,
        0.3607615730481386,
        0.46791393457269104,
        0.46791393457269104,
        0.17132449237917036,
        0.17132449237917036
      ],
      [
        0.4179591836734694,
        0.3818300505051189,
        0.3818300505051189,
        0.27970539148927664,
        0.27970539148927664,
        0.1294849661688697,
        0.1294849661688697
      ],
      [
        0.362683783378362,
        0.362683783378362,
        0.31370664587788727,
        0.31370664587788727,
        0.22238103445337448,
        0.22238103445337448,
        0.10122853629037626,
        0.10122853629037626
      ],
      [
        0.3302393550012598,
        0.1806481606948574,
        0.1806481606948574,
        0.08127438836157441,
        0.08127438836157441,
        0.31234707704000286,
        0.31234707704000286,
        0.26061069640293544,
        0.26061069640293544
      ],
      [
        0.29552422471475287,
        0.29552422471475287,
        0.26926671930999635,
        0.26926671930999635,
        0.21908636251598204,
        0.21908636251598204,
        0.1494513491505806,
        0.1494513491505806,
        0.06667134430868814,
        0.06667134430868814
      ],
      [
        0.2729250867779006,
        0.26280454451024665,
        0.26280454451024665,
        0.23319376459199048,
        0.23319376459199048,
        0.18629021092773426,
        0.18629021092773426,
        0.1255803694649046,
        0.1255803694649046,
        0.05566856711617366,
        0.05566856711617366
      ],
      [
        0.24914704581340277,
        0.24914704581340277,
        0.2334925365383548,
        0.2334925365383548,
        0.20316742672306592,
        0.20316742672306592,
        0.16007832854334622,
        0.16007832854334622,
        0.10693932599531843,
        0.10693932599531843,
        0.04717533638651183,
        0.04717533638651183
      ],
      [
        0.2325515532308739,
        0.22628318026289723,
        0.22628318026289723,
        0.2078160475368885,
        0.2078160475368885,
        0.17814598076194574,
        0.17814598076194574,
        0.13887351021978725,
        0.13887351021978725,
        0.09212149983772845,
        0.09212149983772845,
        0.04048400476531588,
        0.04048400476531588
      ],
      [
        0.2152638534631578,
        0.2152638534631578,
        0.2051984637212956,
        0.2051984637212956,
        0.18553839747793782,
        0.18553839747793782,
        0.15720316715819355,
        0.15720316715819355,
        0.12151857068790319,
        0.12151857068790319,
        0.08015808715976021,
        0.08015808715976021,
        0.03511946033175186,
        0.03511946033175186
      ],
      [
        0.2025782419255613,
        0.19843148532711158,
        0.19843148532711158,
        0.1861610000155622,
        0.1861610000155622,
        0.16626920581699392,
        0.16626920581699392,
        0.13957067792615432,
        0.13957067792615432,
        0.10715922046717194,
        0.10715922046717194,
        0.07036604748810812,
        0.07036604748810812,
        0.03075324199611727,
        0.03075324199611727
      ],
      [
        0.1894506104550685,
        0.1894506104550685,
        0.18260341504492358,
        0.18260341504492358,
        0.16915651939500254,
        0.16915651939500254,
        0.14959598881657674,
        0.14959598881657674,
        0.12462897125553388,
        0.12462897125553388,
        0.09515851168249279,
        0.09515851168249279,
        0.062253523938647894,
        0.062253523938647894,
        0.027152459411754096,
        0.027152459411754096
      ],
      [
        0.17944647035620653,
        0.17656270536699264,
        0.17656270536699264,
        0.16800410215645004,
        0.16800410215645004,
        0.15404576107681028,
        0.15404576107681028,
        0.13513636846852548,
        0.13513636846852548,
        0.11188384719340397,
        0.11188384719340397,
        0.08503614831717918,
        0.08503614831717918,
        0.0554595293739872,
        0.0554595293739872,
        0.02414830286854793,
        0.02414830286854793
      ],
      [
        0.1691423829631436,
        0.1691423829631436,
        0.16427648374583273,
        0.16427648374583273,
        0.15468467512626524,
        0.15468467512626524,
        0.14064291467065065,
        0.14064291467065065,
        0.12255520671147846,
        0.12255520671147846,
        0.10094204410628717,
        0.10094204410628717,
        0.07642573025488905,
        0.07642573025488905,
        0.0497145488949698,
        0.0497145488949698,
        0.02161601352648331,
        0.02161601352648331
      ],
      [
        0.1610544498487837,
        0.15896884339395434,
        0.15896884339395434,
        0.15276604206585967,
        0.15276604206585967,
        0.1426067021736066,
        0.1426067021736066,
        0.12875396253933621,
        0.12875396253933621,
        0.11156664554733399,
        0.11156664554733399,
        0.09149002162245,
        0.09149002162245,
        0.06904454273764123,
        0.06904454273764123,
        0.0448142267656996,
        0.0448142267656996,
        0.019461788229726478,
        0.019461788229726478
      ],
      [
        0.15275338713072584,
        0.15275338713072584,
        0.14917298647260374,
        0.14917298647260374,
        0.14209610931838204,
        0.14209610931838204,
        0.13168863844917664,
        0.13168863844917664,
        0.11819453196151841,
        0.11819453196151841,
        0.10193011981724044,
        0.10193011981724044,
        0.08327674157670475,
        0.08327674157670475,
        0.06267204833410907,
        0.06267204833410907,
        0.04060142980038694,
        0.04060142980038694,
        0.017614007139152118,
        0.017614007139152118
      ],
      [
        0.14608113364969041,
        0.14452440398997005,
        0.14452440398997005,
        0.13988739479107315,
        0.13988739479107315,
        0.13226893863333747,
        0.13226893863333747,
        0.12183141605372853,
        0.12183141605372853,
        0.10879729916714838,
        0.10879729916714838,
        0.09344442345603386,
        0.09344442345603386,
        0.0761001136283793,
        0.0761001136283793,
        0.057134425426857205,
        0.057134425426857205,
        0.036953789770852494,
        0.036953789770852494,
        0.016017228257774335,
        0.016017228257774335
      ],
      [
        0.13925187285563198,
        0.13925187285563198,
        0.13654149834601517,
        0.13654149834601517,
        0.13117350478706238,
        0.13117350478706238,
        0.12325237681051242,
        0.12325237681051242,
        0.11293229608053922,
        0.11293229608053922,
        0.10041414444288096,
        0.10041414444288096,
        0.08594160621706773,
        0.08594160621706773,
        0.06979646842452049,
        0.06979646842452049,
        0.052293335152683286,
        0.052293335152683286,
        0.03377490158481415,
        0.03377490158481415,
        0.0146279952982722,
        0.0146279952982722
      ],
      [
        0.13365457218610619,
        0.1324620394046966,
        0.1324620394046966,
        0.12890572218808216,
        0.12890572218808216,
        0.12304908430672953,
        0.12304908430672953,
        0.11499664022241136,
        0.11499664022241136,
        0.10489209146454141,
        0.10489209146454141,
        0.09291576606003515,
        0.09291576606003515,
        0.07928141177671895,
        0.07928141177671895,
        0.06423242140852585,
        0.06423242140852585,
        0.04803767173108467,
        0.04803767173108467,
        0.030988005856979445,
        0.030988005856979445,
        0.013411859487141771,
        0.013411859487141771
      ],
      [
        0.12793819534675216,
        0.12793819534675216,
        0.1258374563468283,
        0.1258374563468283,
        0.12167047292780339,
        0.12167047292780339,
        0.1155056680537256,
        0.1155056680537256,
        0.10744427011596563,
        0.10744427011596563,
        0.09761865210411388,
        0.09761865210411388,
        0.08619016153195327,
        0.08619016153195327,
        0.0733464814110803,
        0.0733464814110803,
        0.05929858491543678,
        0.05929858491543678,
        0.04427743881741981,
        0.04427743881741981,
        0.028531388628933663,
        0.028531388628933663,
        0.0123412297999872,
        0.0123412297999872
      ]
    ], u.binomialCoefficients = [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1]];
    const d = (h, m, g) => {
      let C, E;
      const k = g / 2;
      C = 0;
      for (let _ = 0; _ < 20; _++)
        E = k * u.tValues[20][_] + k, C += u.cValues[20][_] * O(h, m, E);
      return k * C;
    };
    u.getCubicArcLength = d;
    const w = (h, m, g) => {
      g === void 0 && (g = 1);
      const C = h[0] - 2 * h[1] + h[2], E = m[0] - 2 * m[1] + m[2], N = 2 * h[1] - 2 * h[0], k = 2 * m[1] - 2 * m[0], _ = 4 * (C * C + E * E), S = 4 * (C * N + E * k), P = N * N + k * k;
      if (_ === 0)
        return g * Math.sqrt(Math.pow(h[2] - h[0], 2) + Math.pow(m[2] - m[0], 2));
      const I = S / (2 * _), H = P / _, v = g + I, f = H - I * I, R = v * v + f > 0 ? Math.sqrt(v * v + f) : 0, D = I * I + f > 0 ? Math.sqrt(I * I + f) : 0, j = I + Math.sqrt(I * I + f) !== 0 ? f * Math.log(Math.abs((v + R) / (I + D))) : 0;
      return Math.sqrt(_) / 2 * (v * R - I * D + j);
    };
    u.getQuadraticArcLength = w;
    function O(h, m, g) {
      const C = M(1, g, h), E = M(1, g, m), N = C * C + E * E;
      return Math.sqrt(N);
    }
    const M = (h, m, g) => {
      const C = g.length - 1;
      let E, N;
      if (C === 0)
        return 0;
      if (h === 0) {
        N = 0;
        for (let k = 0; k <= C; k++)
          N += u.binomialCoefficients[C][k] * Math.pow(1 - m, C - k) * Math.pow(m, k) * g[k];
        return N;
      } else {
        E = new Array(C);
        for (let k = 0; k < C; k++)
          E[k] = C * (g[k + 1] - g[k]);
        return M(h - 1, m, E);
      }
    }, x = (h, m, g) => {
      let C = 1, E = h / m, N = (h - g(E)) / m, k = 0;
      for (; C > 1e-3; ) {
        const _ = g(E + N), S = Math.abs(h - _) / m;
        if (S < C)
          C = S, E += N;
        else {
          const P = g(E - N), I = Math.abs(h - P) / m;
          I < C ? (C = I, E -= N) : N /= 2;
        }
        if (k++, k > 500)
          break;
      }
      return E;
    };
    u.t2length = x;
  })(ef)), ef;
}
var Ch;
function pf() {
  if (Ch) return Za;
  Ch = 1, Object.defineProperty(Za, "__esModule", { value: !0 }), Za.Path = void 0;
  const u = ot(), d = et(), w = Fn(), O = k1();
  let M = class Cr extends w.Shape {
    constructor(h) {
      super(h), this.dataArray = [], this.pathLength = 0, this._readDataAttribute(), this.on("dataChange.konva", function() {
        this._readDataAttribute();
      });
    }
    _readDataAttribute() {
      this.dataArray = Cr.parsePathData(this.data()), this.pathLength = Cr.getPathLength(this.dataArray);
    }
    _sceneFunc(h) {
      const m = this.dataArray;
      h.beginPath();
      let g = !1;
      for (let C = 0; C < m.length; C++) {
        const E = m[C].command, N = m[C].points;
        switch (E) {
          case "L":
            h.lineTo(N[0], N[1]);
            break;
          case "M":
            h.moveTo(N[0], N[1]);
            break;
          case "C":
            h.bezierCurveTo(N[0], N[1], N[2], N[3], N[4], N[5]);
            break;
          case "Q":
            h.quadraticCurveTo(N[0], N[1], N[2], N[3]);
            break;
          case "A":
            const k = N[0], _ = N[1], S = N[2], P = N[3], I = N[4], H = N[5], v = N[6], f = N[7], R = S > P ? S : P, D = S > P ? 1 : S / P, j = S > P ? P / S : 1;
            h.translate(k, _), h.rotate(v), h.scale(D, j), h.arc(0, 0, R, I, I + H, 1 - f), h.scale(1 / D, 1 / j), h.rotate(-v), h.translate(-k, -_);
            break;
          case "z":
            g = !0, h.closePath();
            break;
        }
      }
      !g && !this.hasFill() ? h.strokeShape(this) : h.fillStrokeShape(this);
    }
    getSelfRect() {
      let h = [];
      this.dataArray.forEach(function(_) {
        if (_.command === "A") {
          const S = _.points[4], P = _.points[5], I = _.points[4] + P;
          let H = Math.PI / 180;
          if (Math.abs(S - I) < H && (H = Math.abs(S - I)), P < 0)
            for (let v = S - H; v > I; v -= H) {
              const f = Cr.getPointOnEllipticalArc(_.points[0], _.points[1], _.points[2], _.points[3], v, 0);
              h.push(f.x, f.y);
            }
          else
            for (let v = S + H; v < I; v += H) {
              const f = Cr.getPointOnEllipticalArc(_.points[0], _.points[1], _.points[2], _.points[3], v, 0);
              h.push(f.x, f.y);
            }
        } else if (_.command === "C")
          for (let S = 0; S <= 1; S += 0.01) {
            const P = Cr.getPointOnCubicBezier(S, _.start.x, _.start.y, _.points[0], _.points[1], _.points[2], _.points[3], _.points[4], _.points[5]);
            h.push(P.x, P.y);
          }
        else
          h = h.concat(_.points);
      });
      let m = h[0], g = h[0], C = h[1], E = h[1], N, k;
      for (let _ = 0; _ < h.length / 2; _++)
        N = h[_ * 2], k = h[_ * 2 + 1], isNaN(N) || (m = Math.min(m, N), g = Math.max(g, N)), isNaN(k) || (C = Math.min(C, k), E = Math.max(E, k));
      return {
        x: m,
        y: C,
        width: g - m,
        height: E - C
      };
    }
    getLength() {
      return this.pathLength;
    }
    getPointAtLength(h) {
      return Cr.getPointAtLengthOfDataArray(h, this.dataArray);
    }
    static getLineLength(h, m, g, C) {
      return Math.sqrt((g - h) * (g - h) + (C - m) * (C - m));
    }
    static getPathLength(h) {
      let m = 0;
      for (let g = 0; g < h.length; ++g)
        m += h[g].pathLength;
      return m;
    }
    static getPointAtLengthOfDataArray(h, m) {
      let g, C = 0, E = m.length;
      if (!E)
        return null;
      for (; C < E && h > m[C].pathLength; )
        h -= m[C].pathLength, ++C;
      if (C === E)
        return g = m[C - 1].points.slice(-2), {
          x: g[0],
          y: g[1]
        };
      if (h < 0.01)
        return m[C].command === "M" ? (g = m[C].points.slice(0, 2), {
          x: g[0],
          y: g[1]
        }) : {
          x: m[C].start.x,
          y: m[C].start.y
        };
      const N = m[C], k = N.points;
      switch (N.command) {
        case "L":
          return Cr.getPointOnLine(h, N.start.x, N.start.y, k[0], k[1]);
        case "C":
          return Cr.getPointOnCubicBezier((0, O.t2length)(h, Cr.getPathLength(m), (R) => (0, O.getCubicArcLength)([N.start.x, k[0], k[2], k[4]], [N.start.y, k[1], k[3], k[5]], R)), N.start.x, N.start.y, k[0], k[1], k[2], k[3], k[4], k[5]);
        case "Q":
          return Cr.getPointOnQuadraticBezier((0, O.t2length)(h, Cr.getPathLength(m), (R) => (0, O.getQuadraticArcLength)([N.start.x, k[0], k[2]], [N.start.y, k[1], k[3]], R)), N.start.x, N.start.y, k[0], k[1], k[2], k[3]);
        case "A":
          const _ = k[0], S = k[1], P = k[2], I = k[3], H = k[5], v = k[6];
          let f = k[4];
          return f += H * h / N.pathLength, Cr.getPointOnEllipticalArc(_, S, P, I, f, v);
      }
      return null;
    }
    static getPointOnLine(h, m, g, C, E, N, k) {
      N = N ?? m, k = k ?? g;
      const _ = this.getLineLength(m, g, C, E);
      if (_ < 1e-10)
        return { x: m, y: g };
      if (C === m)
        return { x: N, y: k + (E > g ? h : -h) };
      const S = (E - g) / (C - m), P = Math.sqrt(h * h / (1 + S * S)) * (C < m ? -1 : 1), I = S * P;
      if (Math.abs(k - g - S * (N - m)) < 1e-10)
        return { x: N + P, y: k + I };
      const H = ((N - m) * (C - m) + (k - g) * (E - g)) / (_ * _), v = m + H * (C - m), f = g + H * (E - g), R = this.getLineLength(N, k, v, f), D = Math.sqrt(h * h - R * R), j = Math.sqrt(D * D / (1 + S * S)) * (C < m ? -1 : 1), b = S * j;
      return { x: v + j, y: f + b };
    }
    static getPointOnCubicBezier(h, m, g, C, E, N, k, _, S) {
      function P(D) {
        return D * D * D;
      }
      function I(D) {
        return 3 * D * D * (1 - D);
      }
      function H(D) {
        return 3 * D * (1 - D) * (1 - D);
      }
      function v(D) {
        return (1 - D) * (1 - D) * (1 - D);
      }
      const f = _ * P(h) + N * I(h) + C * H(h) + m * v(h), R = S * P(h) + k * I(h) + E * H(h) + g * v(h);
      return { x: f, y: R };
    }
    static getPointOnQuadraticBezier(h, m, g, C, E, N, k) {
      function _(v) {
        return v * v;
      }
      function S(v) {
        return 2 * v * (1 - v);
      }
      function P(v) {
        return (1 - v) * (1 - v);
      }
      const I = N * _(h) + C * S(h) + m * P(h), H = k * _(h) + E * S(h) + g * P(h);
      return { x: I, y: H };
    }
    static getPointOnEllipticalArc(h, m, g, C, E, N) {
      const k = Math.cos(N), _ = Math.sin(N), S = {
        x: g * Math.cos(E),
        y: C * Math.sin(E)
      };
      return {
        x: h + (S.x * k - S.y * _),
        y: m + (S.x * _ + S.y * k)
      };
    }
    static parsePathData(h) {
      if (!h)
        return [];
      let m = h;
      const g = [
        "m",
        "M",
        "l",
        "L",
        "v",
        "V",
        "h",
        "H",
        "z",
        "Z",
        "c",
        "C",
        "q",
        "Q",
        "t",
        "T",
        "s",
        "S",
        "a",
        "A"
      ];
      m = m.replace(new RegExp(" ", "g"), ",");
      for (let I = 0; I < g.length; I++)
        m = m.replace(new RegExp(g[I], "g"), "|" + g[I]);
      const C = m.split("|"), E = [], N = [];
      let k = 0, _ = 0;
      const S = /([-+]?((\d+\.\d+)|((\d+)|(\.\d+)))(?:e[-+]?\d+)?)/gi;
      let P;
      for (let I = 1; I < C.length; I++) {
        let H = C[I], v = H.charAt(0);
        for (H = H.slice(1), N.length = 0; P = S.exec(H); )
          N.push(P[0]);
        const f = [];
        for (let R = 0, D = N.length; R < D; R++) {
          if (N[R] === "00") {
            f.push(0, 0);
            continue;
          }
          const j = parseFloat(N[R]);
          isNaN(j) ? f.push(0) : f.push(j);
        }
        for (; f.length > 0 && !isNaN(f[0]); ) {
          let R = "", D = [];
          const j = k, b = _;
          let F, G, U, Q, Z, re, Y, $, pe, T;
          switch (v) {
            case "l":
              k += f.shift(), _ += f.shift(), R = "L", D.push(k, _);
              break;
            case "L":
              k = f.shift(), _ = f.shift(), D.push(k, _);
              break;
            case "m":
              const z = f.shift(), W = f.shift();
              if (k += z, _ += W, R = "M", E.length > 2 && E[E.length - 1].command === "z") {
                for (let B = E.length - 2; B >= 0; B--)
                  if (E[B].command === "M") {
                    k = E[B].points[0] + z, _ = E[B].points[1] + W;
                    break;
                  }
              }
              D.push(k, _), v = "l";
              break;
            case "M":
              k = f.shift(), _ = f.shift(), R = "M", D.push(k, _), v = "L";
              break;
            case "h":
              k += f.shift(), R = "L", D.push(k, _);
              break;
            case "H":
              k = f.shift(), R = "L", D.push(k, _);
              break;
            case "v":
              _ += f.shift(), R = "L", D.push(k, _);
              break;
            case "V":
              _ = f.shift(), R = "L", D.push(k, _);
              break;
            case "C":
              D.push(f.shift(), f.shift(), f.shift(), f.shift()), k = f.shift(), _ = f.shift(), D.push(k, _);
              break;
            case "c":
              D.push(k + f.shift(), _ + f.shift(), k + f.shift(), _ + f.shift()), k += f.shift(), _ += f.shift(), R = "C", D.push(k, _);
              break;
            case "S":
              G = k, U = _, F = E[E.length - 1], F.command === "C" && (G = k + (k - F.points[2]), U = _ + (_ - F.points[3])), D.push(G, U, f.shift(), f.shift()), k = f.shift(), _ = f.shift(), R = "C", D.push(k, _);
              break;
            case "s":
              G = k, U = _, F = E[E.length - 1], F.command === "C" && (G = k + (k - F.points[2]), U = _ + (_ - F.points[3])), D.push(G, U, k + f.shift(), _ + f.shift()), k += f.shift(), _ += f.shift(), R = "C", D.push(k, _);
              break;
            case "Q":
              D.push(f.shift(), f.shift()), k = f.shift(), _ = f.shift(), D.push(k, _);
              break;
            case "q":
              D.push(k + f.shift(), _ + f.shift()), k += f.shift(), _ += f.shift(), R = "Q", D.push(k, _);
              break;
            case "T":
              G = k, U = _, F = E[E.length - 1], F.command === "Q" && (G = k + (k - F.points[0]), U = _ + (_ - F.points[1])), k = f.shift(), _ = f.shift(), R = "Q", D.push(G, U, k, _);
              break;
            case "t":
              G = k, U = _, F = E[E.length - 1], F.command === "Q" && (G = k + (k - F.points[0]), U = _ + (_ - F.points[1])), k += f.shift(), _ += f.shift(), R = "Q", D.push(G, U, k, _);
              break;
            case "A":
              Q = f.shift(), Z = f.shift(), re = f.shift(), Y = f.shift(), $ = f.shift(), pe = k, T = _, k = f.shift(), _ = f.shift(), R = "A", D = this.convertEndpointToCenterParameterization(pe, T, k, _, Y, $, Q, Z, re);
              break;
            case "a":
              Q = f.shift(), Z = f.shift(), re = f.shift(), Y = f.shift(), $ = f.shift(), pe = k, T = _, k += f.shift(), _ += f.shift(), R = "A", D = this.convertEndpointToCenterParameterization(pe, T, k, _, Y, $, Q, Z, re);
              break;
          }
          E.push({
            command: R || v,
            points: D,
            start: {
              x: j,
              y: b
            },
            pathLength: this.calcLength(j, b, R || v, D)
          });
        }
        (v === "z" || v === "Z") && E.push({
          command: "z",
          points: [],
          start: void 0,
          pathLength: 0
        });
      }
      return E;
    }
    static calcLength(h, m, g, C) {
      let E, N, k, _;
      const S = Cr;
      switch (g) {
        case "L":
          return S.getLineLength(h, m, C[0], C[1]);
        case "C":
          return (0, O.getCubicArcLength)([h, C[0], C[2], C[4]], [m, C[1], C[3], C[5]], 1);
        case "Q":
          return (0, O.getQuadraticArcLength)([h, C[0], C[2]], [m, C[1], C[3]], 1);
        case "A":
          E = 0;
          const P = C[4], I = C[5], H = C[4] + I;
          let v = Math.PI / 180;
          if (Math.abs(P - H) < v && (v = Math.abs(P - H)), N = S.getPointOnEllipticalArc(C[0], C[1], C[2], C[3], P, 0), I < 0)
            for (_ = P - v; _ > H; _ -= v)
              k = S.getPointOnEllipticalArc(C[0], C[1], C[2], C[3], _, 0), E += S.getLineLength(N.x, N.y, k.x, k.y), N = k;
          else
            for (_ = P + v; _ < H; _ += v)
              k = S.getPointOnEllipticalArc(C[0], C[1], C[2], C[3], _, 0), E += S.getLineLength(N.x, N.y, k.x, k.y), N = k;
          return k = S.getPointOnEllipticalArc(C[0], C[1], C[2], C[3], H, 0), E += S.getLineLength(N.x, N.y, k.x, k.y), E;
      }
      return 0;
    }
    static convertEndpointToCenterParameterization(h, m, g, C, E, N, k, _, S) {
      const P = S * (Math.PI / 180), I = Math.cos(P) * (h - g) / 2 + Math.sin(P) * (m - C) / 2, H = -1 * Math.sin(P) * (h - g) / 2 + Math.cos(P) * (m - C) / 2, v = I * I / (k * k) + H * H / (_ * _);
      v > 1 && (k *= Math.sqrt(v), _ *= Math.sqrt(v));
      let f = Math.sqrt((k * k * (_ * _) - k * k * (H * H) - _ * _ * (I * I)) / (k * k * (H * H) + _ * _ * (I * I)));
      E === N && (f *= -1), isNaN(f) && (f = 0);
      const R = f * k * H / _, D = f * -_ * I / k, j = (h + g) / 2 + Math.cos(P) * R - Math.sin(P) * D, b = (m + C) / 2 + Math.sin(P) * R + Math.cos(P) * D, F = function($) {
        return Math.sqrt($[0] * $[0] + $[1] * $[1]);
      }, G = function($, pe) {
        return ($[0] * pe[0] + $[1] * pe[1]) / (F($) * F(pe));
      }, U = function($, pe) {
        return ($[0] * pe[1] < $[1] * pe[0] ? -1 : 1) * Math.acos(G($, pe));
      }, Q = U([1, 0], [(I - R) / k, (H - D) / _]), Z = [(I - R) / k, (H - D) / _], re = [(-1 * I - R) / k, (-1 * H - D) / _];
      let Y = U(Z, re);
      return G(Z, re) <= -1 && (Y = Math.PI), G(Z, re) >= 1 && (Y = 0), N === 0 && Y > 0 && (Y = Y - 2 * Math.PI), N === 1 && Y < 0 && (Y = Y + 2 * Math.PI), [j, b, k, _, Q, Y, P, N];
    }
  };
  return Za.Path = M, M.prototype.className = "Path", M.prototype._attrsAffectingSize = ["data"], (0, d._registerNode)(M), u.Factory.addGetterSetter(M, "data"), Za;
}
var kh;
function E1() {
  if (kh) return ba;
  kh = 1, Object.defineProperty(ba, "__esModule", { value: !0 }), ba.Arrow = void 0;
  const u = ot(), d = N0(), w = at(), O = et(), M = pf();
  let x = class extends d.Line {
    _sceneFunc(m) {
      super._sceneFunc(m);
      const g = Math.PI * 2, C = this.points();
      let E = C;
      const N = this.tension() !== 0 && C.length > 4;
      N && (E = this.getTensionPoints());
      const k = this.pointerLength(), _ = C.length;
      let S, P;
      if (N) {
        const v = [
          E[E.length - 4],
          E[E.length - 3],
          E[E.length - 2],
          E[E.length - 1],
          C[_ - 2],
          C[_ - 1]
        ], f = M.Path.calcLength(E[E.length - 4], E[E.length - 3], "C", v), R = M.Path.getPointOnQuadraticBezier(Math.min(1, 1 - k / f), v[0], v[1], v[2], v[3], v[4], v[5]);
        S = C[_ - 2] - R.x, P = C[_ - 1] - R.y;
      } else
        S = C[_ - 2] - C[_ - 4], P = C[_ - 1] - C[_ - 3];
      const I = (Math.atan2(P, S) + g) % g, H = this.pointerWidth();
      this.pointerAtEnding() && (m.save(), m.beginPath(), m.translate(C[_ - 2], C[_ - 1]), m.rotate(I), m.moveTo(0, 0), m.lineTo(-k, H / 2), m.lineTo(-k, -H / 2), m.closePath(), m.restore(), this.__fillStroke(m)), this.pointerAtBeginning() && (m.save(), m.beginPath(), m.translate(C[0], C[1]), N ? (S = (E[0] + E[2]) / 2 - C[0], P = (E[1] + E[3]) / 2 - C[1]) : (S = C[2] - C[0], P = C[3] - C[1]), m.rotate((Math.atan2(-P, -S) + g) % g), m.moveTo(0, 0), m.lineTo(-k, H / 2), m.lineTo(-k, -H / 2), m.closePath(), m.restore(), this.__fillStroke(m));
    }
    __fillStroke(m) {
      const g = this.dashEnabled();
      g && (this.attrs.dashEnabled = !1, m.setLineDash([])), m.fillStrokeShape(this), g && (this.attrs.dashEnabled = !0);
    }
    getSelfRect() {
      const m = super.getSelfRect(), g = this.pointerWidth() / 2;
      return {
        x: m.x,
        y: m.y - g,
        width: m.width,
        height: m.height + g * 2
      };
    }
  };
  return ba.Arrow = x, x.prototype.className = "Arrow", (0, O._registerNode)(x), u.Factory.addGetterSetter(x, "pointerLength", 10, (0, w.getNumberValidator)()), u.Factory.addGetterSetter(x, "pointerWidth", 10, (0, w.getNumberValidator)()), u.Factory.addGetterSetter(x, "pointerAtBeginning", !1), u.Factory.addGetterSetter(x, "pointerAtEnding", !0), ba;
}
var $a = {}, Eh;
function P1() {
  if (Eh) return $a;
  Eh = 1, Object.defineProperty($a, "__esModule", { value: !0 }), $a.Circle = void 0;
  const u = ot(), d = Fn(), w = at(), O = et();
  class M extends d.Shape {
    _sceneFunc(h) {
      h.beginPath(), h.arc(0, 0, this.attrs.radius || 0, 0, Math.PI * 2, !1), h.closePath(), h.fillStrokeShape(this);
    }
    getWidth() {
      return this.radius() * 2;
    }
    getHeight() {
      return this.radius() * 2;
    }
    setWidth(h) {
      this.radius() !== h / 2 && this.radius(h / 2);
    }
    setHeight(h) {
      this.radius() !== h / 2 && this.radius(h / 2);
    }
  }
  return $a.Circle = M, M.prototype._centroid = !0, M.prototype.className = "Circle", M.prototype._attrsAffectingSize = ["radius"], (0, O._registerNode)(M), u.Factory.addGetterSetter(M, "radius", 0, (0, w.getNumberValidator)()), $a;
}
var eu = {}, Ph;
function R1() {
  if (Ph) return eu;
  Ph = 1, Object.defineProperty(eu, "__esModule", { value: !0 }), eu.Ellipse = void 0;
  const u = ot(), d = Fn(), w = at(), O = et();
  let M = class extends d.Shape {
    _sceneFunc(h) {
      const m = this.radiusX(), g = this.radiusY();
      h.beginPath(), h.save(), m !== g && h.scale(1, g / m), h.arc(0, 0, m, 0, Math.PI * 2, !1), h.restore(), h.closePath(), h.fillStrokeShape(this);
    }
    getWidth() {
      return this.radiusX() * 2;
    }
    getHeight() {
      return this.radiusY() * 2;
    }
    setWidth(h) {
      this.radiusX(h / 2);
    }
    setHeight(h) {
      this.radiusY(h / 2);
    }
  };
  return eu.Ellipse = M, M.prototype.className = "Ellipse", M.prototype._centroid = !0, M.prototype._attrsAffectingSize = ["radiusX", "radiusY"], (0, O._registerNode)(M), u.Factory.addComponentsGetterSetter(M, "radius", ["x", "y"]), u.Factory.addGetterSetter(M, "radiusX", 0, (0, w.getNumberValidator)()), u.Factory.addGetterSetter(M, "radiusY", 0, (0, w.getNumberValidator)()), eu;
}
var tu = {}, Rh;
function T1() {
  if (Rh) return tu;
  Rh = 1, Object.defineProperty(tu, "__esModule", { value: !0 }), tu.Image = void 0;
  const u = Yt(), d = ot(), w = Fn(), O = et(), M = at();
  class x extends w.Shape {
    constructor(m) {
      super(m), this._loadListener = () => {
        this._requestDraw();
      }, this.on("imageChange.konva", (g) => {
        this._removeImageLoad(g.oldVal), this._setImageLoad();
      }), this._setImageLoad();
    }
    _setImageLoad() {
      const m = this.image();
      m && m.complete || m && m.readyState === 4 || m && m.addEventListener && m.addEventListener("load", this._loadListener);
    }
    _removeImageLoad(m) {
      m && m.removeEventListener && m.removeEventListener("load", this._loadListener);
    }
    destroy() {
      return this._removeImageLoad(this.image()), super.destroy(), this;
    }
    _useBufferCanvas() {
      const m = !!this.cornerRadius(), g = this.hasShadow();
      return m && g ? !0 : super._useBufferCanvas(!0);
    }
    _sceneFunc(m) {
      const g = this.getWidth(), C = this.getHeight(), E = this.cornerRadius(), N = this.attrs.image;
      let k;
      if (N) {
        const _ = this.attrs.cropWidth, S = this.attrs.cropHeight;
        _ && S ? k = [
          N,
          this.cropX(),
          this.cropY(),
          _,
          S,
          0,
          0,
          g,
          C
        ] : k = [N, 0, 0, g, C];
      }
      (this.hasFill() || this.hasStroke() || E) && (m.beginPath(), E ? u.Util.drawRoundedRectPath(m, g, C, E) : m.rect(0, 0, g, C), m.closePath(), m.fillStrokeShape(this)), N && (E && m.clip(), m.drawImage.apply(m, k));
    }
    _hitFunc(m) {
      const g = this.width(), C = this.height(), E = this.cornerRadius();
      m.beginPath(), E ? u.Util.drawRoundedRectPath(m, g, C, E) : m.rect(0, 0, g, C), m.closePath(), m.fillStrokeShape(this);
    }
    getWidth() {
      var m, g;
      return (m = this.attrs.width) !== null && m !== void 0 ? m : (g = this.image()) === null || g === void 0 ? void 0 : g.width;
    }
    getHeight() {
      var m, g;
      return (m = this.attrs.height) !== null && m !== void 0 ? m : (g = this.image()) === null || g === void 0 ? void 0 : g.height;
    }
    static fromURL(m, g, C = null) {
      const E = u.Util.createImageElement();
      E.onload = function() {
        const N = new x({
          image: E
        });
        g(N);
      }, E.onerror = C, E.crossOrigin = "Anonymous", E.src = m;
    }
  }
  return tu.Image = x, x.prototype.className = "Image", (0, O._registerNode)(x), d.Factory.addGetterSetter(x, "cornerRadius", 0, (0, M.getNumberOrArrayOfNumbersValidator)(4)), d.Factory.addGetterSetter(x, "image"), d.Factory.addComponentsGetterSetter(x, "crop", ["x", "y", "width", "height"]), d.Factory.addGetterSetter(x, "cropX", 0, (0, M.getNumberValidator)()), d.Factory.addGetterSetter(x, "cropY", 0, (0, M.getNumberValidator)()), d.Factory.addGetterSetter(x, "cropWidth", 0, (0, M.getNumberValidator)()), d.Factory.addGetterSetter(x, "cropHeight", 0, (0, M.getNumberValidator)()), tu;
}
var Hs = {}, Th;
function N1() {
  if (Th) return Hs;
  Th = 1, Object.defineProperty(Hs, "__esModule", { value: !0 }), Hs.Tag = Hs.Label = void 0;
  const u = ot(), d = Fn(), w = ff(), O = at(), M = et(), x = [
    "fontFamily",
    "fontSize",
    "fontStyle",
    "padding",
    "lineHeight",
    "text",
    "width",
    "height",
    "pointerDirection",
    "pointerWidth",
    "pointerHeight"
  ], h = "Change.konva", m = "none", g = "up", C = "right", E = "down", N = "left", k = x.length;
  let _ = class extends w.Group {
    constructor(I) {
      super(I), this.on("add.konva", function(H) {
        this._addListeners(H.child), this._sync();
      });
    }
    getText() {
      return this.find("Text")[0];
    }
    getTag() {
      return this.find("Tag")[0];
    }
    _addListeners(I) {
      let H = this, v;
      const f = function() {
        H._sync();
      };
      for (v = 0; v < k; v++)
        I.on(x[v] + h, f);
    }
    getWidth() {
      return this.getText().width();
    }
    getHeight() {
      return this.getText().height();
    }
    _sync() {
      let I = this.getText(), H = this.getTag(), v, f, R, D, j, b, F;
      if (I && H) {
        switch (v = I.width(), f = I.height(), R = H.pointerDirection(), D = H.pointerWidth(), F = H.pointerHeight(), j = 0, b = 0, R) {
          case g:
            j = v / 2, b = -1 * F;
            break;
          case C:
            j = v + D, b = f / 2;
            break;
          case E:
            j = v / 2, b = f + F;
            break;
          case N:
            j = -1 * D, b = f / 2;
            break;
        }
        H.setAttrs({
          x: -1 * j,
          y: -1 * b,
          width: v,
          height: f
        }), I.setAttrs({
          x: -1 * j,
          y: -1 * b
        });
      }
    }
  };
  Hs.Label = _, _.prototype.className = "Label", (0, M._registerNode)(_);
  class S extends d.Shape {
    _sceneFunc(I) {
      const H = this.width(), v = this.height(), f = this.pointerDirection(), R = this.pointerWidth(), D = this.pointerHeight(), j = this.cornerRadius();
      let b = 0, F = 0, G = 0, U = 0;
      typeof j == "number" ? b = F = G = U = Math.min(j, H / 2, v / 2) : (b = Math.min(j[0] || 0, H / 2, v / 2), F = Math.min(j[1] || 0, H / 2, v / 2), U = Math.min(j[2] || 0, H / 2, v / 2), G = Math.min(j[3] || 0, H / 2, v / 2)), I.beginPath(), I.moveTo(b, 0), f === g && (I.lineTo((H - R) / 2, 0), I.lineTo(H / 2, -1 * D), I.lineTo((H + R) / 2, 0)), I.lineTo(H - F, 0), I.arc(H - F, F, F, Math.PI * 3 / 2, 0, !1), f === C && (I.lineTo(H, (v - D) / 2), I.lineTo(H + R, v / 2), I.lineTo(H, (v + D) / 2)), I.lineTo(H, v - U), I.arc(H - U, v - U, U, 0, Math.PI / 2, !1), f === E && (I.lineTo((H + R) / 2, v), I.lineTo(H / 2, v + D), I.lineTo((H - R) / 2, v)), I.lineTo(G, v), I.arc(G, v - G, G, Math.PI / 2, Math.PI, !1), f === N && (I.lineTo(0, (v + D) / 2), I.lineTo(-1 * R, v / 2), I.lineTo(0, (v - D) / 2)), I.lineTo(0, b), I.arc(b, b, b, Math.PI, Math.PI * 3 / 2, !1), I.closePath(), I.fillStrokeShape(this);
    }
    getSelfRect() {
      let I = 0, H = 0, v = this.pointerWidth(), f = this.pointerHeight(), R = this.pointerDirection(), D = this.width(), j = this.height();
      return R === g ? (H -= f, j += f) : R === E ? j += f : R === N ? (I -= v * 1.5, D += v) : R === C && (D += v * 1.5), {
        x: I,
        y: H,
        width: D,
        height: j
      };
    }
  }
  return Hs.Tag = S, S.prototype.className = "Tag", (0, M._registerNode)(S), u.Factory.addGetterSetter(S, "pointerDirection", m), u.Factory.addGetterSetter(S, "pointerWidth", 0, (0, O.getNumberValidator)()), u.Factory.addGetterSetter(S, "pointerHeight", 0, (0, O.getNumberValidator)()), u.Factory.addGetterSetter(S, "cornerRadius", 0, (0, O.getNumberOrArrayOfNumbersValidator)(4)), Hs;
}
var nu = {}, Nh;
function F0() {
  if (Nh) return nu;
  Nh = 1, Object.defineProperty(nu, "__esModule", { value: !0 }), nu.Rect = void 0;
  const u = ot(), d = Fn(), w = et(), O = Yt(), M = at();
  class x extends d.Shape {
    _sceneFunc(m) {
      const g = this.cornerRadius(), C = this.width(), E = this.height();
      m.beginPath(), g ? O.Util.drawRoundedRectPath(m, C, E, g) : m.rect(0, 0, C, E), m.closePath(), m.fillStrokeShape(this);
    }
  }
  return nu.Rect = x, x.prototype.className = "Rect", (0, w._registerNode)(x), u.Factory.addGetterSetter(x, "cornerRadius", 0, (0, M.getNumberOrArrayOfNumbersValidator)(4)), nu;
}
var ru = {}, Fh;
function F1() {
  if (Fh) return ru;
  Fh = 1, Object.defineProperty(ru, "__esModule", { value: !0 }), ru.RegularPolygon = void 0;
  const u = ot(), d = Fn(), w = at(), O = et();
  let M = class extends d.Shape {
    _sceneFunc(h) {
      const m = this._getPoints();
      h.beginPath(), h.moveTo(m[0].x, m[0].y);
      for (let g = 1; g < m.length; g++)
        h.lineTo(m[g].x, m[g].y);
      h.closePath(), h.fillStrokeShape(this);
    }
    _getPoints() {
      const h = this.attrs.sides, m = this.attrs.radius || 0, g = [];
      for (let C = 0; C < h; C++)
        g.push({
          x: m * Math.sin(C * 2 * Math.PI / h),
          y: -1 * m * Math.cos(C * 2 * Math.PI / h)
        });
      return g;
    }
    getSelfRect() {
      const h = this._getPoints();
      let m = h[0].x, g = h[0].y, C = h[0].x, E = h[0].y;
      return h.forEach((N) => {
        m = Math.min(m, N.x), g = Math.max(g, N.x), C = Math.min(C, N.y), E = Math.max(E, N.y);
      }), {
        x: m,
        y: C,
        width: g - m,
        height: E - C
      };
    }
    getWidth() {
      return this.radius() * 2;
    }
    getHeight() {
      return this.radius() * 2;
    }
    setWidth(h) {
      this.radius(h / 2);
    }
    setHeight(h) {
      this.radius(h / 2);
    }
  };
  return ru.RegularPolygon = M, M.prototype.className = "RegularPolygon", M.prototype._centroid = !0, M.prototype._attrsAffectingSize = ["radius"], (0, O._registerNode)(M), u.Factory.addGetterSetter(M, "radius", 0, (0, w.getNumberValidator)()), u.Factory.addGetterSetter(M, "sides", 0, (0, w.getNumberValidator)()), ru;
}
var iu = {}, Mh;
function M1() {
  if (Mh) return iu;
  Mh = 1, Object.defineProperty(iu, "__esModule", { value: !0 }), iu.Ring = void 0;
  const u = ot(), d = Fn(), w = at(), O = et(), M = Math.PI * 2;
  let x = class extends d.Shape {
    _sceneFunc(m) {
      m.beginPath(), m.arc(0, 0, this.innerRadius(), 0, M, !1), m.moveTo(this.outerRadius(), 0), m.arc(0, 0, this.outerRadius(), M, 0, !0), m.closePath(), m.fillStrokeShape(this);
    }
    getWidth() {
      return this.outerRadius() * 2;
    }
    getHeight() {
      return this.outerRadius() * 2;
    }
    setWidth(m) {
      this.outerRadius(m / 2);
    }
    setHeight(m) {
      this.outerRadius(m / 2);
    }
  };
  return iu.Ring = x, x.prototype.className = "Ring", x.prototype._centroid = !0, x.prototype._attrsAffectingSize = ["innerRadius", "outerRadius"], (0, O._registerNode)(x), u.Factory.addGetterSetter(x, "innerRadius", 0, (0, w.getNumberValidator)()), u.Factory.addGetterSetter(x, "outerRadius", 0, (0, w.getNumberValidator)()), iu;
}
var ou = {}, Lh;
function L1() {
  if (Lh) return ou;
  Lh = 1, Object.defineProperty(ou, "__esModule", { value: !0 }), ou.Sprite = void 0;
  const u = ot(), d = Fn(), w = hf(), O = at(), M = et();
  let x = class extends d.Shape {
    constructor(m) {
      super(m), this._updated = !0, this.anim = new w.Animation(() => {
        const g = this._updated;
        return this._updated = !1, g;
      }), this.on("animationChange.konva", function() {
        this.frameIndex(0);
      }), this.on("frameIndexChange.konva", function() {
        this._updated = !0;
      }), this.on("frameRateChange.konva", function() {
        this.anim.isRunning() && (clearInterval(this.interval), this._setInterval());
      });
    }
    _sceneFunc(m) {
      const g = this.animation(), C = this.frameIndex(), E = C * 4, N = this.animations()[g], k = this.frameOffsets(), _ = N[E + 0], S = N[E + 1], P = N[E + 2], I = N[E + 3], H = this.image();
      if ((this.hasFill() || this.hasStroke()) && (m.beginPath(), m.rect(0, 0, P, I), m.closePath(), m.fillStrokeShape(this)), H)
        if (k) {
          const v = k[g], f = C * 2;
          m.drawImage(H, _, S, P, I, v[f + 0], v[f + 1], P, I);
        } else
          m.drawImage(H, _, S, P, I, 0, 0, P, I);
    }
    _hitFunc(m) {
      const g = this.animation(), C = this.frameIndex(), E = C * 4, N = this.animations()[g], k = this.frameOffsets(), _ = N[E + 2], S = N[E + 3];
      if (m.beginPath(), k) {
        const P = k[g], I = C * 2;
        m.rect(P[I + 0], P[I + 1], _, S);
      } else
        m.rect(0, 0, _, S);
      m.closePath(), m.fillShape(this);
    }
    _useBufferCanvas() {
      return super._useBufferCanvas(!0);
    }
    _setInterval() {
      const m = this;
      this.interval = setInterval(function() {
        m._updateIndex();
      }, 1e3 / this.frameRate());
    }
    start() {
      if (this.isRunning())
        return;
      const m = this.getLayer();
      this.anim.setLayers(m), this._setInterval(), this.anim.start();
    }
    stop() {
      this.anim.stop(), clearInterval(this.interval);
    }
    isRunning() {
      return this.anim.isRunning();
    }
    _updateIndex() {
      const m = this.frameIndex(), g = this.animation(), C = this.animations(), E = C[g], N = E.length / 4;
      m < N - 1 ? this.frameIndex(m + 1) : this.frameIndex(0);
    }
  };
  return ou.Sprite = x, x.prototype.className = "Sprite", (0, M._registerNode)(x), u.Factory.addGetterSetter(x, "animation"), u.Factory.addGetterSetter(x, "animations"), u.Factory.addGetterSetter(x, "frameOffsets"), u.Factory.addGetterSetter(x, "image"), u.Factory.addGetterSetter(x, "frameIndex", 0, (0, O.getNumberValidator)()), u.Factory.addGetterSetter(x, "frameRate", 17, (0, O.getNumberValidator)()), u.Factory.backCompat(x, {
    index: "frameIndex",
    getIndex: "getFrameIndex",
    setIndex: "setFrameIndex"
  }), ou;
}
var su = {}, Ah;
function A1() {
  if (Ah) return su;
  Ah = 1, Object.defineProperty(su, "__esModule", { value: !0 }), su.Star = void 0;
  const u = ot(), d = Fn(), w = at(), O = et();
  let M = class extends d.Shape {
    _sceneFunc(h) {
      const m = this.innerRadius(), g = this.outerRadius(), C = this.numPoints();
      h.beginPath(), h.moveTo(0, 0 - g);
      for (let E = 1; E < C * 2; E++) {
        const N = E % 2 === 0 ? g : m, k = N * Math.sin(E * Math.PI / C), _ = -1 * N * Math.cos(E * Math.PI / C);
        h.lineTo(k, _);
      }
      h.closePath(), h.fillStrokeShape(this);
    }
    getWidth() {
      return this.outerRadius() * 2;
    }
    getHeight() {
      return this.outerRadius() * 2;
    }
    setWidth(h) {
      this.outerRadius(h / 2);
    }
    setHeight(h) {
      this.outerRadius(h / 2);
    }
  };
  return su.Star = M, M.prototype.className = "Star", M.prototype._centroid = !0, M.prototype._attrsAffectingSize = ["innerRadius", "outerRadius"], (0, O._registerNode)(M), u.Factory.addGetterSetter(M, "numPoints", 5, (0, w.getNumberValidator)()), u.Factory.addGetterSetter(M, "innerRadius", 0, (0, w.getNumberValidator)()), u.Factory.addGetterSetter(M, "outerRadius", 0, (0, w.getNumberValidator)()), su;
}
var Yl = {}, Oh;
function M0() {
  if (Oh) return Yl;
  Oh = 1, Object.defineProperty(Yl, "__esModule", { value: !0 }), Yl.Text = void 0, Yl.stringToArray = h;
  const u = Yt(), d = ot(), w = Fn(), O = et(), M = at(), x = et();
  function h(X) {
    return [...X].reduce((J, ue, ge, se) => {
      if (new RegExp("\\p{Emoji}", "u").test(ue)) {
        const q = se[ge + 1];
        q && new RegExp("\\p{Emoji_Modifier}|\\u200D", "u").test(q) ? (J.push(ue + q), se[ge + 1] = "") : J.push(ue);
      } else new RegExp("\\p{Regional_Indicator}{2}", "u").test(ue + (se[ge + 1] || "")) ? J.push(ue + se[ge + 1]) : ge > 0 && new RegExp("\\p{Mn}|\\p{Me}|\\p{Mc}", "u").test(ue) ? J[J.length - 1] += ue : ue && J.push(ue);
      return J;
    }, []);
  }
  const m = "auto", g = "center", C = "inherit", E = "justify", N = "Change.konva", k = "2d", _ = "-", S = "left", P = "text", I = "Text", H = "top", v = "bottom", f = "middle", R = "normal", D = "px ", j = " ", b = "right", F = "rtl", G = "word", U = "char", Q = "none", Z = "…", re = [
    "direction",
    "fontFamily",
    "fontSize",
    "fontStyle",
    "fontVariant",
    "padding",
    "align",
    "verticalAlign",
    "lineHeight",
    "text",
    "width",
    "height",
    "wrap",
    "ellipsis",
    "letterSpacing"
  ], Y = re.length;
  function $(X) {
    return X.split(",").map((J) => {
      J = J.trim();
      const ue = J.indexOf(" ") >= 0, ge = J.indexOf('"') >= 0 || J.indexOf("'") >= 0;
      return ue && !ge && (J = `"${J}"`), J;
    }).join(", ");
  }
  let pe;
  function T() {
    return pe || (pe = u.Util.createCanvasElement().getContext(k), pe);
  }
  function z(X) {
    X.fillText(this._partialText, this._partialTextX, this._partialTextY);
  }
  function W(X) {
    X.setAttr("miterLimit", 2), X.strokeText(this._partialText, this._partialTextX, this._partialTextY);
  }
  function B(X) {
    return X = X || {}, !X.fillLinearGradientColorStops && !X.fillRadialGradientColorStops && !X.fillPatternImage && (X.fill = X.fill || "black"), X;
  }
  let L = class extends w.Shape {
    constructor(J) {
      super(B(J)), this._partialTextX = 0, this._partialTextY = 0;
      for (let ue = 0; ue < Y; ue++)
        this.on(re[ue] + N, this._setTextData);
      this._setTextData();
    }
    _sceneFunc(J) {
      const ue = this.textArr, ge = ue.length;
      if (!this.text())
        return;
      let se = this.padding(), q = this.fontSize(), te = this.lineHeight() * q, me = this.verticalAlign(), xe = this.direction(), Pe = 0, Be = this.align(), Ge = this.getWidth(), be = this.letterSpacing(), je = this.fill(), dt = this.textDecoration(), st = dt.indexOf("underline") !== -1, Je = dt.indexOf("line-through") !== -1, bn;
      xe = xe === C ? J.direction : xe;
      let Rt = te / 2, Hn = f;
      if (O.Konva._fixTextRendering) {
        const ft = this.measureSize("M");
        Hn = "alphabetic", Rt = (ft.fontBoundingBoxAscent - ft.fontBoundingBoxDescent) / 2 + te / 2;
      }
      for (xe === F && J.setAttr("direction", xe), J.setAttr("font", this._getContextFont()), J.setAttr("textBaseline", Hn), J.setAttr("textAlign", S), me === f ? Pe = (this.getHeight() - ge * te - se * 2) / 2 : me === v && (Pe = this.getHeight() - ge * te - se * 2), J.translate(se, Pe + se), bn = 0; bn < ge; bn++) {
        let ft = 0, dn = 0;
        const Vt = ue[bn], fr = Vt.text, Kt = Vt.width, Mn = Vt.lastInParagraph;
        if (J.save(), Be === b ? ft += Ge - Kt - se * 2 : Be === g && (ft += (Ge - Kt - se * 2) / 2), st) {
          J.save(), J.beginPath();
          const Xt = O.Konva._fixTextRendering ? Math.round(q / 4) : Math.round(q / 2), _n = ft, Ot = Rt + dn + Xt;
          J.moveTo(_n, Ot);
          const Lt = Be === E && !Mn ? Ge - se * 2 : Kt;
          J.lineTo(_n + Math.round(Lt), Ot), J.lineWidth = q / 15;
          const Yr = this._getLinearGradient();
          J.strokeStyle = Yr || je, J.stroke(), J.restore();
        }
        if (Je) {
          J.save(), J.beginPath();
          const Xt = O.Konva._fixTextRendering ? -Math.round(q / 4) : 0;
          J.moveTo(ft, Rt + dn + Xt);
          const _n = Be === E && !Mn ? Ge - se * 2 : Kt;
          J.lineTo(ft + Math.round(_n), Rt + dn + Xt), J.lineWidth = q / 15;
          const Ot = this._getLinearGradient();
          J.strokeStyle = Ot || je, J.stroke(), J.restore();
        }
        if (xe !== F && (be !== 0 || Be === E)) {
          const Xt = fr.split(" ").length - 1, _n = h(fr);
          for (let Ot = 0; Ot < _n.length; Ot++) {
            const Lt = _n[Ot];
            Lt === " " && !Mn && Be === E && (ft += (Ge - se * 2 - Kt) / Xt), this._partialTextX = ft, this._partialTextY = Rt + dn, this._partialText = Lt, J.fillStrokeShape(this), ft += this.measureSize(Lt).width + be;
          }
        } else
          be !== 0 && J.setAttr("letterSpacing", `${be}px`), this._partialTextX = ft, this._partialTextY = Rt + dn, this._partialText = fr, J.fillStrokeShape(this);
        J.restore(), ge > 1 && (Rt += te);
      }
    }
    _hitFunc(J) {
      const ue = this.getWidth(), ge = this.getHeight();
      J.beginPath(), J.rect(0, 0, ue, ge), J.closePath(), J.fillStrokeShape(this);
    }
    setText(J) {
      const ue = u.Util._isString(J) ? J : J == null ? "" : J + "";
      return this._setAttr(P, ue), this;
    }
    getWidth() {
      return this.attrs.width === m || this.attrs.width === void 0 ? this.getTextWidth() + this.padding() * 2 : this.attrs.width;
    }
    getHeight() {
      return this.attrs.height === m || this.attrs.height === void 0 ? this.fontSize() * this.textArr.length * this.lineHeight() + this.padding() * 2 : this.attrs.height;
    }
    getTextWidth() {
      return this.textWidth;
    }
    getTextHeight() {
      return u.Util.warn("text.getTextHeight() method is deprecated. Use text.height() - for full height and text.fontSize() - for one line height."), this.textHeight;
    }
    measureSize(J) {
      var ue, ge, se, q, te, me, xe, Pe, Be, Ge, be;
      let je = T(), dt = this.fontSize(), st;
      je.save(), je.font = this._getContextFont(), st = je.measureText(J), je.restore();
      const Je = dt / 100;
      return {
        actualBoundingBoxAscent: (ue = st.actualBoundingBoxAscent) !== null && ue !== void 0 ? ue : 71.58203125 * Je,
        actualBoundingBoxDescent: (ge = st.actualBoundingBoxDescent) !== null && ge !== void 0 ? ge : 0,
        actualBoundingBoxLeft: (se = st.actualBoundingBoxLeft) !== null && se !== void 0 ? se : -7.421875 * Je,
        actualBoundingBoxRight: (q = st.actualBoundingBoxRight) !== null && q !== void 0 ? q : 75.732421875 * Je,
        alphabeticBaseline: (te = st.alphabeticBaseline) !== null && te !== void 0 ? te : 0,
        emHeightAscent: (me = st.emHeightAscent) !== null && me !== void 0 ? me : 100 * Je,
        emHeightDescent: (xe = st.emHeightDescent) !== null && xe !== void 0 ? xe : -20 * Je,
        fontBoundingBoxAscent: (Pe = st.fontBoundingBoxAscent) !== null && Pe !== void 0 ? Pe : 91 * Je,
        fontBoundingBoxDescent: (Be = st.fontBoundingBoxDescent) !== null && Be !== void 0 ? Be : 21 * Je,
        hangingBaseline: (Ge = st.hangingBaseline) !== null && Ge !== void 0 ? Ge : 72.80000305175781 * Je,
        ideographicBaseline: (be = st.ideographicBaseline) !== null && be !== void 0 ? be : -21 * Je,
        width: st.width,
        height: dt
      };
    }
    _getContextFont() {
      return this.fontStyle() + j + this.fontVariant() + j + (this.fontSize() + D) + $(this.fontFamily());
    }
    _addTextLine(J) {
      this.align() === E && (J = J.trim());
      const ge = this._getTextWidth(J);
      return this.textArr.push({
        text: J,
        width: ge,
        lastInParagraph: !1
      });
    }
    _getTextWidth(J) {
      const ue = this.letterSpacing(), ge = J.length;
      return T().measureText(J).width + ue * ge;
    }
    _setTextData() {
      let J = this.text().split(`
`), ue = +this.fontSize(), ge = 0, se = this.lineHeight() * ue, q = this.attrs.width, te = this.attrs.height, me = q !== m && q !== void 0, xe = te !== m && te !== void 0, Pe = this.padding(), Be = q - Pe * 2, Ge = te - Pe * 2, be = 0, je = this.wrap(), dt = je !== Q, st = je !== U && dt, Je = this.ellipsis();
      this.textArr = [], T().font = this._getContextFont();
      const bn = Je ? this._getTextWidth(Z) : 0;
      for (let Rt = 0, Hn = J.length; Rt < Hn; ++Rt) {
        let ft = J[Rt], dn = this._getTextWidth(ft);
        if (me && dn > Be)
          for (; ft.length > 0; ) {
            let Vt = 0, fr = h(ft).length, Kt = "", Mn = 0;
            for (; Vt < fr; ) {
              const Xt = Vt + fr >>> 1, _n = h(ft), Ot = _n.slice(0, Xt + 1).join(""), Lt = this._getTextWidth(Ot);
              (Je && xe && be + se > Ge ? Lt + bn : Lt) <= Be ? (Vt = Xt + 1, Kt = Ot, Mn = Lt) : fr = Xt;
            }
            if (Kt) {
              if (st) {
                const Ot = h(ft), Lt = h(Kt), Yr = Ot[Lt.length], ye = Yr === j || Yr === _;
                let ke;
                if (ye && Mn <= Be)
                  ke = Lt.length;
                else {
                  const Ne = Lt.lastIndexOf(j), Re = Lt.lastIndexOf(_);
                  ke = Math.max(Ne, Re) + 1;
                }
                ke > 0 && (Vt = ke, Kt = Ot.slice(0, Vt).join(""), Mn = this._getTextWidth(Kt));
              }
              if (Kt = Kt.trimRight(), this._addTextLine(Kt), ge = Math.max(ge, Mn), be += se, this._shouldHandleEllipsis(be)) {
                this._tryToAddEllipsisToLastLine();
                break;
              }
              if (ft = h(ft).slice(Vt).join("").trimLeft(), ft.length > 0 && (dn = this._getTextWidth(ft), dn <= Be)) {
                this._addTextLine(ft), be += se, ge = Math.max(ge, dn);
                break;
              }
            } else
              break;
          }
        else
          this._addTextLine(ft), be += se, ge = Math.max(ge, dn), this._shouldHandleEllipsis(be) && Rt < Hn - 1 && this._tryToAddEllipsisToLastLine();
        if (this.textArr[this.textArr.length - 1] && (this.textArr[this.textArr.length - 1].lastInParagraph = !0), xe && be + se > Ge)
          break;
      }
      this.textHeight = ue, this.textWidth = ge;
    }
    _shouldHandleEllipsis(J) {
      const ue = +this.fontSize(), ge = this.lineHeight() * ue, se = this.attrs.height, q = se !== m && se !== void 0, te = this.padding(), me = se - te * 2;
      return !(this.wrap() !== Q) || q && J + ge > me;
    }
    _tryToAddEllipsisToLastLine() {
      const J = this.attrs.width, ue = J !== m && J !== void 0, ge = this.padding(), se = J - ge * 2, q = this.ellipsis(), te = this.textArr[this.textArr.length - 1];
      !te || !q || (ue && (this._getTextWidth(te.text + Z) < se || (te.text = te.text.slice(0, te.text.length - 3))), this.textArr.splice(this.textArr.length - 1, 1), this._addTextLine(te.text + Z));
    }
    getStrokeScaleEnabled() {
      return !0;
    }
    _useBufferCanvas() {
      const J = this.textDecoration().indexOf("underline") !== -1 || this.textDecoration().indexOf("line-through") !== -1, ue = this.hasShadow();
      return J && ue ? !0 : super._useBufferCanvas();
    }
  };
  return Yl.Text = L, L.prototype._fillFunc = z, L.prototype._strokeFunc = W, L.prototype.className = I, L.prototype._attrsAffectingSize = [
    "text",
    "fontSize",
    "padding",
    "wrap",
    "lineHeight",
    "letterSpacing"
  ], (0, x._registerNode)(L), d.Factory.overWriteSetter(L, "width", (0, M.getNumberOrAutoValidator)()), d.Factory.overWriteSetter(L, "height", (0, M.getNumberOrAutoValidator)()), d.Factory.addGetterSetter(L, "direction", C), d.Factory.addGetterSetter(L, "fontFamily", "Arial"), d.Factory.addGetterSetter(L, "fontSize", 12, (0, M.getNumberValidator)()), d.Factory.addGetterSetter(L, "fontStyle", R), d.Factory.addGetterSetter(L, "fontVariant", R), d.Factory.addGetterSetter(L, "padding", 0, (0, M.getNumberValidator)()), d.Factory.addGetterSetter(L, "align", S), d.Factory.addGetterSetter(L, "verticalAlign", H), d.Factory.addGetterSetter(L, "lineHeight", 1, (0, M.getNumberValidator)()), d.Factory.addGetterSetter(L, "wrap", G), d.Factory.addGetterSetter(L, "ellipsis", !1, (0, M.getBooleanValidator)()), d.Factory.addGetterSetter(L, "letterSpacing", 0, (0, M.getNumberValidator)()), d.Factory.addGetterSetter(L, "text", "", (0, M.getStringValidator)()), d.Factory.addGetterSetter(L, "textDecoration", ""), Yl;
}
var lu = {}, Ih;
function O1() {
  if (Ih) return lu;
  Ih = 1, Object.defineProperty(lu, "__esModule", { value: !0 }), lu.TextPath = void 0;
  const u = Yt(), d = ot(), w = Fn(), O = pf(), M = M0(), x = at(), h = et(), m = "", g = "normal";
  function C(k) {
    k.fillText(this.partialText, 0, 0);
  }
  function E(k) {
    k.strokeText(this.partialText, 0, 0);
  }
  let N = class extends w.Shape {
    constructor(_) {
      super(_), this.dummyCanvas = u.Util.createCanvasElement(), this.dataArray = [], this._readDataAttribute(), this.on("dataChange.konva", function() {
        this._readDataAttribute(), this._setTextData();
      }), this.on("textChange.konva alignChange.konva letterSpacingChange.konva kerningFuncChange.konva fontSizeChange.konva fontFamilyChange.konva", this._setTextData), this._setTextData();
    }
    _getTextPathLength() {
      return O.Path.getPathLength(this.dataArray);
    }
    _getPointAtLength(_) {
      if (!this.attrs.data)
        return null;
      const S = this.pathLength;
      return _ - 1 > S ? null : O.Path.getPointAtLengthOfDataArray(_, this.dataArray);
    }
    _readDataAttribute() {
      this.dataArray = O.Path.parsePathData(this.attrs.data), this.pathLength = this._getTextPathLength();
    }
    _sceneFunc(_) {
      _.setAttr("font", this._getContextFont()), _.setAttr("textBaseline", this.textBaseline()), _.setAttr("textAlign", "left"), _.save();
      const S = this.textDecoration(), P = this.fill(), I = this.fontSize(), H = this.glyphInfo;
      S === "underline" && _.beginPath();
      for (let v = 0; v < H.length; v++) {
        _.save();
        const f = H[v].p0;
        _.translate(f.x, f.y), _.rotate(H[v].rotation), this.partialText = H[v].text, _.fillStrokeShape(this), S === "underline" && (v === 0 && _.moveTo(0, I / 2 + 1), _.lineTo(I, I / 2 + 1)), _.restore();
      }
      S === "underline" && (_.strokeStyle = P, _.lineWidth = I / 20, _.stroke()), _.restore();
    }
    _hitFunc(_) {
      _.beginPath();
      const S = this.glyphInfo;
      if (S.length >= 1) {
        const P = S[0].p0;
        _.moveTo(P.x, P.y);
      }
      for (let P = 0; P < S.length; P++) {
        const I = S[P].p1;
        _.lineTo(I.x, I.y);
      }
      _.setAttr("lineWidth", this.fontSize()), _.setAttr("strokeStyle", this.colorKey), _.stroke();
    }
    getTextWidth() {
      return this.textWidth;
    }
    getTextHeight() {
      return u.Util.warn("text.getTextHeight() method is deprecated. Use text.height() - for full height and text.fontSize() - for one line height."), this.textHeight;
    }
    setText(_) {
      return M.Text.prototype.setText.call(this, _);
    }
    _getContextFont() {
      return M.Text.prototype._getContextFont.call(this);
    }
    _getTextSize(_) {
      const P = this.dummyCanvas.getContext("2d");
      P.save(), P.font = this._getContextFont();
      const I = P.measureText(_);
      return P.restore(), {
        width: I.width,
        height: parseInt(`${this.fontSize()}`, 10)
      };
    }
    _setTextData() {
      const { width: _, height: S } = this._getTextSize(this.attrs.text);
      if (this.textWidth = _, this.textHeight = S, this.glyphInfo = [], !this.attrs.data)
        return null;
      const P = this.letterSpacing(), I = this.align(), H = this.kerningFunc(), v = Math.max(this.textWidth + ((this.attrs.text || "").length - 1) * P, 0);
      let f = 0;
      I === "center" && (f = Math.max(0, this.pathLength / 2 - v / 2)), I === "right" && (f = Math.max(0, this.pathLength - v));
      const R = (0, M.stringToArray)(this.text());
      let D = f;
      for (let j = 0; j < R.length; j++) {
        const b = this._getPointAtLength(D);
        if (!b)
          return;
        let F = this._getTextSize(R[j]).width + P;
        if (R[j] === " " && I === "justify") {
          const Y = this.text().split(" ").length - 1;
          F += (this.pathLength - v) / Y;
        }
        const G = this._getPointAtLength(D + F);
        if (!G)
          return;
        const U = O.Path.getLineLength(b.x, b.y, G.x, G.y);
        let Q = 0;
        if (H)
          try {
            Q = H(R[j - 1], R[j]) * this.fontSize();
          } catch {
            Q = 0;
          }
        b.x += Q, G.x += Q, this.textWidth += Q;
        const Z = O.Path.getPointOnLine(Q + U / 2, b.x, b.y, G.x, G.y), re = Math.atan2(G.y - b.y, G.x - b.x);
        this.glyphInfo.push({
          transposeX: Z.x,
          transposeY: Z.y,
          text: R[j],
          rotation: re,
          p0: b,
          p1: G
        }), D += F;
      }
    }
    getSelfRect() {
      if (!this.glyphInfo.length)
        return {
          x: 0,
          y: 0,
          width: 0,
          height: 0
        };
      const _ = [];
      this.glyphInfo.forEach(function(D) {
        _.push(D.p0.x), _.push(D.p0.y), _.push(D.p1.x), _.push(D.p1.y);
      });
      let S = _[0] || 0, P = _[0] || 0, I = _[1] || 0, H = _[1] || 0, v, f;
      for (let D = 0; D < _.length / 2; D++)
        v = _[D * 2], f = _[D * 2 + 1], S = Math.min(S, v), P = Math.max(P, v), I = Math.min(I, f), H = Math.max(H, f);
      const R = this.fontSize();
      return {
        x: S - R / 2,
        y: I - R / 2,
        width: P - S + R,
        height: H - I + R
      };
    }
    destroy() {
      return u.Util.releaseCanvas(this.dummyCanvas), super.destroy();
    }
  };
  return lu.TextPath = N, N.prototype._fillFunc = C, N.prototype._strokeFunc = E, N.prototype._fillFuncHit = C, N.prototype._strokeFuncHit = E, N.prototype.className = "TextPath", N.prototype._attrsAffectingSize = ["text", "fontSize", "data"], (0, h._registerNode)(N), d.Factory.addGetterSetter(N, "data"), d.Factory.addGetterSetter(N, "fontFamily", "Arial"), d.Factory.addGetterSetter(N, "fontSize", 12, (0, x.getNumberValidator)()), d.Factory.addGetterSetter(N, "fontStyle", g), d.Factory.addGetterSetter(N, "align", "left"), d.Factory.addGetterSetter(N, "letterSpacing", 0, (0, x.getNumberValidator)()), d.Factory.addGetterSetter(N, "textBaseline", "middle"), d.Factory.addGetterSetter(N, "fontVariant", g), d.Factory.addGetterSetter(N, "text", m), d.Factory.addGetterSetter(N, "textDecoration", ""), d.Factory.addGetterSetter(N, "kerningFunc", void 0), lu;
}
var au = {}, Dh;
function I1() {
  if (Dh) return au;
  Dh = 1, Object.defineProperty(au, "__esModule", { value: !0 }), au.Transformer = void 0;
  const u = Yt(), d = ot(), w = nn(), O = Fn(), M = F0(), x = ff(), h = et(), m = at(), g = et(), C = "tr-konva", E = [
    "resizeEnabledChange",
    "rotateAnchorOffsetChange",
    "rotateEnabledChange",
    "enabledAnchorsChange",
    "anchorSizeChange",
    "borderEnabledChange",
    "borderStrokeChange",
    "borderStrokeWidthChange",
    "borderDashChange",
    "anchorStrokeChange",
    "anchorStrokeWidthChange",
    "anchorFillChange",
    "anchorCornerRadiusChange",
    "ignoreStrokeChange",
    "anchorStyleFuncChange"
  ].map((F) => F + `.${C}`).join(" "), N = "nodesRect", k = [
    "widthChange",
    "heightChange",
    "scaleXChange",
    "scaleYChange",
    "skewXChange",
    "skewYChange",
    "rotationChange",
    "offsetXChange",
    "offsetYChange",
    "transformsEnabledChange",
    "strokeWidthChange"
  ], _ = {
    "top-left": -45,
    "top-center": 0,
    "top-right": 45,
    "middle-right": -90,
    "middle-left": 90,
    "bottom-left": -135,
    "bottom-center": 180,
    "bottom-right": 135
  }, S = "ontouchstart" in h.Konva._global;
  function P(F, G, U) {
    if (F === "rotater")
      return U;
    G += u.Util.degToRad(_[F] || 0);
    const Q = (u.Util.radToDeg(G) % 360 + 360) % 360;
    return u.Util._inRange(Q, 315 + 22.5, 360) || u.Util._inRange(Q, 0, 22.5) ? "ns-resize" : u.Util._inRange(Q, 45 - 22.5, 45 + 22.5) ? "nesw-resize" : u.Util._inRange(Q, 90 - 22.5, 90 + 22.5) ? "ew-resize" : u.Util._inRange(Q, 135 - 22.5, 135 + 22.5) ? "nwse-resize" : u.Util._inRange(Q, 180 - 22.5, 180 + 22.5) ? "ns-resize" : u.Util._inRange(Q, 225 - 22.5, 225 + 22.5) ? "nesw-resize" : u.Util._inRange(Q, 270 - 22.5, 270 + 22.5) ? "ew-resize" : u.Util._inRange(Q, 315 - 22.5, 315 + 22.5) ? "nwse-resize" : (u.Util.error("Transformer has unknown angle for cursor detection: " + Q), "pointer");
  }
  const I = [
    "top-left",
    "top-center",
    "top-right",
    "middle-right",
    "middle-left",
    "bottom-left",
    "bottom-center",
    "bottom-right"
  ];
  function H(F) {
    return {
      x: F.x + F.width / 2 * Math.cos(F.rotation) + F.height / 2 * Math.sin(-F.rotation),
      y: F.y + F.height / 2 * Math.cos(F.rotation) + F.width / 2 * Math.sin(F.rotation)
    };
  }
  function v(F, G, U) {
    const Q = U.x + (F.x - U.x) * Math.cos(G) - (F.y - U.y) * Math.sin(G), Z = U.y + (F.x - U.x) * Math.sin(G) + (F.y - U.y) * Math.cos(G);
    return {
      ...F,
      rotation: F.rotation + G,
      x: Q,
      y: Z
    };
  }
  function f(F, G) {
    const U = H(F);
    return v(F, G, U);
  }
  function R(F, G, U) {
    let Q = G;
    for (let Z = 0; Z < F.length; Z++) {
      const re = h.Konva.getAngle(F[Z]), Y = Math.abs(re - G) % (Math.PI * 2);
      Math.min(Y, Math.PI * 2 - Y) < U && (Q = re);
    }
    return Q;
  }
  let D = 0;
  class j extends x.Group {
    constructor(G) {
      super(G), this._movingAnchorName = null, this._transforming = !1, this._createElements(), this._handleMouseMove = this._handleMouseMove.bind(this), this._handleMouseUp = this._handleMouseUp.bind(this), this.update = this.update.bind(this), this.on(E, this.update), this.getNode() && this.update();
    }
    attachTo(G) {
      return this.setNode(G), this;
    }
    setNode(G) {
      return u.Util.warn("tr.setNode(shape), tr.node(shape) and tr.attachTo(shape) methods are deprecated. Please use tr.nodes(nodesArray) instead."), this.setNodes([G]);
    }
    getNode() {
      return this._nodes && this._nodes[0];
    }
    _getEventNamespace() {
      return C + this._id;
    }
    setNodes(G = []) {
      this._nodes && this._nodes.length && this.detach();
      const U = G.filter((Z) => Z.isAncestorOf(this) ? (u.Util.error("Konva.Transformer cannot be an a child of the node you are trying to attach"), !1) : !0);
      return this._nodes = G = U, G.length === 1 && this.useSingleNodeRotation() ? this.rotation(G[0].getAbsoluteRotation()) : this.rotation(0), this._nodes.forEach((Z) => {
        const re = () => {
          this.nodes().length === 1 && this.useSingleNodeRotation() && this.rotation(this.nodes()[0].getAbsoluteRotation()), this._resetTransformCache(), !this._transforming && !this.isDragging() && this.update();
        };
        if (Z._attrsAffectingSize.length) {
          const Y = Z._attrsAffectingSize.map(($) => $ + "Change." + this._getEventNamespace()).join(" ");
          Z.on(Y, re);
        }
        Z.on(k.map((Y) => Y + `.${this._getEventNamespace()}`).join(" "), re), Z.on(`absoluteTransformChange.${this._getEventNamespace()}`, re), this._proxyDrag(Z);
      }), this._resetTransformCache(), !!this.findOne(".top-left") && this.update(), this;
    }
    _proxyDrag(G) {
      let U;
      G.on(`dragstart.${this._getEventNamespace()}`, (Q) => {
        U = G.getAbsolutePosition(), !this.isDragging() && G !== this.findOne(".back") && this.startDrag(Q, !1);
      }), G.on(`dragmove.${this._getEventNamespace()}`, (Q) => {
        if (!U)
          return;
        const Z = G.getAbsolutePosition(), re = Z.x - U.x, Y = Z.y - U.y;
        this.nodes().forEach(($) => {
          if ($ === G || $.isDragging())
            return;
          const pe = $.getAbsolutePosition();
          $.setAbsolutePosition({
            x: pe.x + re,
            y: pe.y + Y
          }), $.startDrag(Q);
        }), U = null;
      });
    }
    getNodes() {
      return this._nodes || [];
    }
    getActiveAnchor() {
      return this._movingAnchorName;
    }
    detach() {
      this._nodes && this._nodes.forEach((G) => {
        G.off("." + this._getEventNamespace());
      }), this._nodes = [], this._resetTransformCache();
    }
    _resetTransformCache() {
      this._clearCache(N), this._clearCache("transform"), this._clearSelfAndDescendantCache("absoluteTransform");
    }
    _getNodeRect() {
      return this._getCache(N, this.__getNodeRect);
    }
    __getNodeShape(G, U = this.rotation(), Q) {
      const Z = G.getClientRect({
        skipTransform: !0,
        skipShadow: !0,
        skipStroke: this.ignoreStroke()
      }), re = G.getAbsoluteScale(Q), Y = G.getAbsolutePosition(Q), $ = Z.x * re.x - G.offsetX() * re.x, pe = Z.y * re.y - G.offsetY() * re.y, T = (h.Konva.getAngle(G.getAbsoluteRotation()) + Math.PI * 2) % (Math.PI * 2), z = {
        x: Y.x + $ * Math.cos(T) + pe * Math.sin(-T),
        y: Y.y + pe * Math.cos(T) + $ * Math.sin(T),
        width: Z.width * re.x,
        height: Z.height * re.y,
        rotation: T
      };
      return v(z, -h.Konva.getAngle(U), {
        x: 0,
        y: 0
      });
    }
    __getNodeRect() {
      if (!this.getNode())
        return {
          x: -1e8,
          y: -1e8,
          width: 0,
          height: 0,
          rotation: 0
        };
      const U = [];
      this.nodes().map((T) => {
        const z = T.getClientRect({
          skipTransform: !0,
          skipShadow: !0,
          skipStroke: this.ignoreStroke()
        }), W = [
          { x: z.x, y: z.y },
          { x: z.x + z.width, y: z.y },
          { x: z.x + z.width, y: z.y + z.height },
          { x: z.x, y: z.y + z.height }
        ], B = T.getAbsoluteTransform();
        W.forEach(function(L) {
          const X = B.point(L);
          U.push(X);
        });
      });
      const Q = new u.Transform();
      Q.rotate(-h.Konva.getAngle(this.rotation()));
      let Z = 1 / 0, re = 1 / 0, Y = -1 / 0, $ = -1 / 0;
      U.forEach(function(T) {
        const z = Q.point(T);
        Z === void 0 && (Z = Y = z.x, re = $ = z.y), Z = Math.min(Z, z.x), re = Math.min(re, z.y), Y = Math.max(Y, z.x), $ = Math.max($, z.y);
      }), Q.invert();
      const pe = Q.point({ x: Z, y: re });
      return {
        x: pe.x,
        y: pe.y,
        width: Y - Z,
        height: $ - re,
        rotation: h.Konva.getAngle(this.rotation())
      };
    }
    getX() {
      return this._getNodeRect().x;
    }
    getY() {
      return this._getNodeRect().y;
    }
    getWidth() {
      return this._getNodeRect().width;
    }
    getHeight() {
      return this._getNodeRect().height;
    }
    _createElements() {
      this._createBack(), I.forEach((G) => {
        this._createAnchor(G);
      }), this._createAnchor("rotater");
    }
    _createAnchor(G) {
      const U = new M.Rect({
        stroke: "rgb(0, 161, 255)",
        fill: "white",
        strokeWidth: 1,
        name: G + " _anchor",
        dragDistance: 0,
        draggable: !0,
        hitStrokeWidth: S ? 10 : "auto"
      }), Q = this;
      U.on("mousedown touchstart", function(Z) {
        Q._handleMouseDown(Z);
      }), U.on("dragstart", (Z) => {
        U.stopDrag(), Z.cancelBubble = !0;
      }), U.on("dragend", (Z) => {
        Z.cancelBubble = !0;
      }), U.on("mouseenter", () => {
        const Z = h.Konva.getAngle(this.rotation()), re = this.rotateAnchorCursor(), Y = P(G, Z, re);
        U.getStage().content && (U.getStage().content.style.cursor = Y), this._cursorChange = !0;
      }), U.on("mouseout", () => {
        U.getStage().content && (U.getStage().content.style.cursor = ""), this._cursorChange = !1;
      }), this.add(U);
    }
    _createBack() {
      const G = new O.Shape({
        name: "back",
        width: 0,
        height: 0,
        draggable: !0,
        sceneFunc(U, Q) {
          const Z = Q.getParent(), re = Z.padding();
          U.beginPath(), U.rect(-re, -re, Q.width() + re * 2, Q.height() + re * 2), U.moveTo(Q.width() / 2, -re), Z.rotateEnabled() && Z.rotateLineVisible() && U.lineTo(Q.width() / 2, -Z.rotateAnchorOffset() * u.Util._sign(Q.height()) - re), U.fillStrokeShape(Q);
        },
        hitFunc: (U, Q) => {
          if (!this.shouldOverdrawWholeArea())
            return;
          const Z = this.padding();
          U.beginPath(), U.rect(-Z, -Z, Q.width() + Z * 2, Q.height() + Z * 2), U.fillStrokeShape(Q);
        }
      });
      this.add(G), this._proxyDrag(G), G.on("dragstart", (U) => {
        U.cancelBubble = !0;
      }), G.on("dragmove", (U) => {
        U.cancelBubble = !0;
      }), G.on("dragend", (U) => {
        U.cancelBubble = !0;
      }), this.on("dragmove", (U) => {
        this.update();
      });
    }
    _handleMouseDown(G) {
      if (this._transforming)
        return;
      this._movingAnchorName = G.target.name().split(" ")[0];
      const U = this._getNodeRect(), Q = U.width, Z = U.height, re = Math.sqrt(Math.pow(Q, 2) + Math.pow(Z, 2));
      this.sin = Math.abs(Z / re), this.cos = Math.abs(Q / re), typeof window < "u" && (window.addEventListener("mousemove", this._handleMouseMove), window.addEventListener("touchmove", this._handleMouseMove), window.addEventListener("mouseup", this._handleMouseUp, !0), window.addEventListener("touchend", this._handleMouseUp, !0)), this._transforming = !0;
      const Y = G.target.getAbsolutePosition(), $ = G.target.getStage().getPointerPosition();
      this._anchorDragOffset = {
        x: $.x - Y.x,
        y: $.y - Y.y
      }, D++, this._fire("transformstart", { evt: G.evt, target: this.getNode() }), this._nodes.forEach((pe) => {
        pe._fire("transformstart", { evt: G.evt, target: pe });
      });
    }
    _handleMouseMove(G) {
      let U, Q, Z;
      const re = this.findOne("." + this._movingAnchorName), Y = re.getStage();
      Y.setPointersPositions(G);
      const $ = Y.getPointerPosition();
      let pe = {
        x: $.x - this._anchorDragOffset.x,
        y: $.y - this._anchorDragOffset.y
      };
      const T = re.getAbsolutePosition();
      this.anchorDragBoundFunc() && (pe = this.anchorDragBoundFunc()(T, pe, G)), re.setAbsolutePosition(pe);
      const z = re.getAbsolutePosition();
      if (T.x === z.x && T.y === z.y)
        return;
      if (this._movingAnchorName === "rotater") {
        const se = this._getNodeRect();
        U = re.x() - se.width / 2, Q = -re.y() + se.height / 2;
        let q = Math.atan2(-Q, U) + Math.PI / 2;
        se.height < 0 && (q -= Math.PI);
        const me = h.Konva.getAngle(this.rotation()) + q, xe = h.Konva.getAngle(this.rotationSnapTolerance()), Be = R(this.rotationSnaps(), me, xe) - se.rotation, Ge = f(se, Be);
        this._fitNodesInto(Ge, G);
        return;
      }
      const W = this.shiftBehavior();
      let B;
      W === "inverted" ? B = this.keepRatio() && !G.shiftKey : W === "none" ? B = this.keepRatio() : B = this.keepRatio() || G.shiftKey;
      let L = this.centeredScaling() || G.altKey;
      if (this._movingAnchorName === "top-left") {
        if (B) {
          const se = L ? {
            x: this.width() / 2,
            y: this.height() / 2
          } : {
            x: this.findOne(".bottom-right").x(),
            y: this.findOne(".bottom-right").y()
          };
          Z = Math.sqrt(Math.pow(se.x - re.x(), 2) + Math.pow(se.y - re.y(), 2));
          const q = this.findOne(".top-left").x() > se.x ? -1 : 1, te = this.findOne(".top-left").y() > se.y ? -1 : 1;
          U = Z * this.cos * q, Q = Z * this.sin * te, this.findOne(".top-left").x(se.x - U), this.findOne(".top-left").y(se.y - Q);
        }
      } else if (this._movingAnchorName === "top-center")
        this.findOne(".top-left").y(re.y());
      else if (this._movingAnchorName === "top-right") {
        if (B) {
          const se = L ? {
            x: this.width() / 2,
            y: this.height() / 2
          } : {
            x: this.findOne(".bottom-left").x(),
            y: this.findOne(".bottom-left").y()
          };
          Z = Math.sqrt(Math.pow(re.x() - se.x, 2) + Math.pow(se.y - re.y(), 2));
          const q = this.findOne(".top-right").x() < se.x ? -1 : 1, te = this.findOne(".top-right").y() > se.y ? -1 : 1;
          U = Z * this.cos * q, Q = Z * this.sin * te, this.findOne(".top-right").x(se.x + U), this.findOne(".top-right").y(se.y - Q);
        }
        var X = re.position();
        this.findOne(".top-left").y(X.y), this.findOne(".bottom-right").x(X.x);
      } else if (this._movingAnchorName === "middle-left")
        this.findOne(".top-left").x(re.x());
      else if (this._movingAnchorName === "middle-right")
        this.findOne(".bottom-right").x(re.x());
      else if (this._movingAnchorName === "bottom-left") {
        if (B) {
          const se = L ? {
            x: this.width() / 2,
            y: this.height() / 2
          } : {
            x: this.findOne(".top-right").x(),
            y: this.findOne(".top-right").y()
          };
          Z = Math.sqrt(Math.pow(se.x - re.x(), 2) + Math.pow(re.y() - se.y, 2));
          const q = se.x < re.x() ? -1 : 1, te = re.y() < se.y ? -1 : 1;
          U = Z * this.cos * q, Q = Z * this.sin * te, re.x(se.x - U), re.y(se.y + Q);
        }
        X = re.position(), this.findOne(".top-left").x(X.x), this.findOne(".bottom-right").y(X.y);
      } else if (this._movingAnchorName === "bottom-center")
        this.findOne(".bottom-right").y(re.y());
      else if (this._movingAnchorName === "bottom-right") {
        if (B) {
          const se = L ? {
            x: this.width() / 2,
            y: this.height() / 2
          } : {
            x: this.findOne(".top-left").x(),
            y: this.findOne(".top-left").y()
          };
          Z = Math.sqrt(Math.pow(re.x() - se.x, 2) + Math.pow(re.y() - se.y, 2));
          const q = this.findOne(".bottom-right").x() < se.x ? -1 : 1, te = this.findOne(".bottom-right").y() < se.y ? -1 : 1;
          U = Z * this.cos * q, Q = Z * this.sin * te, this.findOne(".bottom-right").x(se.x + U), this.findOne(".bottom-right").y(se.y + Q);
        }
      } else
        console.error(new Error("Wrong position argument of selection resizer: " + this._movingAnchorName));
      if (L = this.centeredScaling() || G.altKey, L) {
        const se = this.findOne(".top-left"), q = this.findOne(".bottom-right"), te = se.x(), me = se.y(), xe = this.getWidth() - q.x(), Pe = this.getHeight() - q.y();
        q.move({
          x: -te,
          y: -me
        }), se.move({
          x: xe,
          y: Pe
        });
      }
      const J = this.findOne(".top-left").getAbsolutePosition();
      U = J.x, Q = J.y;
      const ue = this.findOne(".bottom-right").x() - this.findOne(".top-left").x(), ge = this.findOne(".bottom-right").y() - this.findOne(".top-left").y();
      this._fitNodesInto({
        x: U,
        y: Q,
        width: ue,
        height: ge,
        rotation: h.Konva.getAngle(this.rotation())
      }, G);
    }
    _handleMouseUp(G) {
      this._removeEvents(G);
    }
    getAbsoluteTransform() {
      return this.getTransform();
    }
    _removeEvents(G) {
      var U;
      if (this._transforming) {
        this._transforming = !1, typeof window < "u" && (window.removeEventListener("mousemove", this._handleMouseMove), window.removeEventListener("touchmove", this._handleMouseMove), window.removeEventListener("mouseup", this._handleMouseUp, !0), window.removeEventListener("touchend", this._handleMouseUp, !0));
        const Q = this.getNode();
        D--, this._fire("transformend", { evt: G, target: Q }), (U = this.getLayer()) === null || U === void 0 || U.batchDraw(), Q && this._nodes.forEach((Z) => {
          var re;
          Z._fire("transformend", { evt: G, target: Z }), (re = Z.getLayer()) === null || re === void 0 || re.batchDraw();
        }), this._movingAnchorName = null;
      }
    }
    _fitNodesInto(G, U) {
      const Q = this._getNodeRect(), Z = 1;
      if (u.Util._inRange(G.width, -this.padding() * 2 - Z, Z)) {
        this.update();
        return;
      }
      if (u.Util._inRange(G.height, -this.padding() * 2 - Z, Z)) {
        this.update();
        return;
      }
      const re = new u.Transform();
      if (re.rotate(h.Konva.getAngle(this.rotation())), this._movingAnchorName && G.width < 0 && this._movingAnchorName.indexOf("left") >= 0) {
        const B = re.point({
          x: -this.padding() * 2,
          y: 0
        });
        G.x += B.x, G.y += B.y, G.width += this.padding() * 2, this._movingAnchorName = this._movingAnchorName.replace("left", "right"), this._anchorDragOffset.x -= B.x, this._anchorDragOffset.y -= B.y;
      } else if (this._movingAnchorName && G.width < 0 && this._movingAnchorName.indexOf("right") >= 0) {
        const B = re.point({
          x: this.padding() * 2,
          y: 0
        });
        this._movingAnchorName = this._movingAnchorName.replace("right", "left"), this._anchorDragOffset.x -= B.x, this._anchorDragOffset.y -= B.y, G.width += this.padding() * 2;
      }
      if (this._movingAnchorName && G.height < 0 && this._movingAnchorName.indexOf("top") >= 0) {
        const B = re.point({
          x: 0,
          y: -this.padding() * 2
        });
        G.x += B.x, G.y += B.y, this._movingAnchorName = this._movingAnchorName.replace("top", "bottom"), this._anchorDragOffset.x -= B.x, this._anchorDragOffset.y -= B.y, G.height += this.padding() * 2;
      } else if (this._movingAnchorName && G.height < 0 && this._movingAnchorName.indexOf("bottom") >= 0) {
        const B = re.point({
          x: 0,
          y: this.padding() * 2
        });
        this._movingAnchorName = this._movingAnchorName.replace("bottom", "top"), this._anchorDragOffset.x -= B.x, this._anchorDragOffset.y -= B.y, G.height += this.padding() * 2;
      }
      if (this.boundBoxFunc()) {
        const B = this.boundBoxFunc()(Q, G);
        B ? G = B : u.Util.warn("boundBoxFunc returned falsy. You should return new bound rect from it!");
      }
      const Y = 1e7, $ = new u.Transform();
      $.translate(Q.x, Q.y), $.rotate(Q.rotation), $.scale(Q.width / Y, Q.height / Y);
      const pe = new u.Transform(), T = G.width / Y, z = G.height / Y;
      this.flipEnabled() === !1 ? (pe.translate(G.x, G.y), pe.rotate(G.rotation), pe.translate(G.width < 0 ? G.width : 0, G.height < 0 ? G.height : 0), pe.scale(Math.abs(T), Math.abs(z))) : (pe.translate(G.x, G.y), pe.rotate(G.rotation), pe.scale(T, z));
      const W = pe.multiply($.invert());
      this._nodes.forEach((B) => {
        var L;
        const X = B.getParent().getAbsoluteTransform(), J = B.getTransform().copy();
        J.translate(B.offsetX(), B.offsetY());
        const ue = new u.Transform();
        ue.multiply(X.copy().invert()).multiply(W).multiply(X).multiply(J);
        const ge = ue.decompose();
        B.setAttrs(ge), (L = B.getLayer()) === null || L === void 0 || L.batchDraw();
      }), this.rotation(u.Util._getRotation(G.rotation)), this._nodes.forEach((B) => {
        this._fire("transform", { evt: U, target: B }), B._fire("transform", { evt: U, target: B });
      }), this._resetTransformCache(), this.update(), this.getLayer().batchDraw();
    }
    forceUpdate() {
      this._resetTransformCache(), this.update();
    }
    _batchChangeChild(G, U) {
      this.findOne(G).setAttrs(U);
    }
    update() {
      var G;
      const U = this._getNodeRect();
      this.rotation(u.Util._getRotation(U.rotation));
      const Q = U.width, Z = U.height, re = this.enabledAnchors(), Y = this.resizeEnabled(), $ = this.padding(), pe = this.anchorSize(), T = this.find("._anchor");
      T.forEach((W) => {
        W.setAttrs({
          width: pe,
          height: pe,
          offsetX: pe / 2,
          offsetY: pe / 2,
          stroke: this.anchorStroke(),
          strokeWidth: this.anchorStrokeWidth(),
          fill: this.anchorFill(),
          cornerRadius: this.anchorCornerRadius()
        });
      }), this._batchChangeChild(".top-left", {
        x: 0,
        y: 0,
        offsetX: pe / 2 + $,
        offsetY: pe / 2 + $,
        visible: Y && re.indexOf("top-left") >= 0
      }), this._batchChangeChild(".top-center", {
        x: Q / 2,
        y: 0,
        offsetY: pe / 2 + $,
        visible: Y && re.indexOf("top-center") >= 0
      }), this._batchChangeChild(".top-right", {
        x: Q,
        y: 0,
        offsetX: pe / 2 - $,
        offsetY: pe / 2 + $,
        visible: Y && re.indexOf("top-right") >= 0
      }), this._batchChangeChild(".middle-left", {
        x: 0,
        y: Z / 2,
        offsetX: pe / 2 + $,
        visible: Y && re.indexOf("middle-left") >= 0
      }), this._batchChangeChild(".middle-right", {
        x: Q,
        y: Z / 2,
        offsetX: pe / 2 - $,
        visible: Y && re.indexOf("middle-right") >= 0
      }), this._batchChangeChild(".bottom-left", {
        x: 0,
        y: Z,
        offsetX: pe / 2 + $,
        offsetY: pe / 2 - $,
        visible: Y && re.indexOf("bottom-left") >= 0
      }), this._batchChangeChild(".bottom-center", {
        x: Q / 2,
        y: Z,
        offsetY: pe / 2 - $,
        visible: Y && re.indexOf("bottom-center") >= 0
      }), this._batchChangeChild(".bottom-right", {
        x: Q,
        y: Z,
        offsetX: pe / 2 - $,
        offsetY: pe / 2 - $,
        visible: Y && re.indexOf("bottom-right") >= 0
      }), this._batchChangeChild(".rotater", {
        x: Q / 2,
        y: -this.rotateAnchorOffset() * u.Util._sign(Z) - $,
        visible: this.rotateEnabled()
      }), this._batchChangeChild(".back", {
        width: Q,
        height: Z,
        visible: this.borderEnabled(),
        stroke: this.borderStroke(),
        strokeWidth: this.borderStrokeWidth(),
        dash: this.borderDash(),
        x: 0,
        y: 0
      });
      const z = this.anchorStyleFunc();
      z && T.forEach((W) => {
        z(W);
      }), (G = this.getLayer()) === null || G === void 0 || G.batchDraw();
    }
    isTransforming() {
      return this._transforming;
    }
    stopTransform() {
      if (this._transforming) {
        this._removeEvents();
        const G = this.findOne("." + this._movingAnchorName);
        G && G.stopDrag();
      }
    }
    destroy() {
      return this.getStage() && this._cursorChange && this.getStage().content && (this.getStage().content.style.cursor = ""), x.Group.prototype.destroy.call(this), this.detach(), this._removeEvents(), this;
    }
    toObject() {
      return w.Node.prototype.toObject.call(this);
    }
    clone(G) {
      return w.Node.prototype.clone.call(this, G);
    }
    getClientRect() {
      return this.nodes().length > 0 ? super.getClientRect() : { x: 0, y: 0, width: 0, height: 0 };
    }
  }
  au.Transformer = j, j.isTransforming = () => D > 0;
  function b(F) {
    return F instanceof Array || u.Util.warn("enabledAnchors value should be an array"), F instanceof Array && F.forEach(function(G) {
      I.indexOf(G) === -1 && u.Util.warn("Unknown anchor name: " + G + ". Available names are: " + I.join(", "));
    }), F || [];
  }
  return j.prototype.className = "Transformer", (0, g._registerNode)(j), d.Factory.addGetterSetter(j, "enabledAnchors", I, b), d.Factory.addGetterSetter(j, "flipEnabled", !0, (0, m.getBooleanValidator)()), d.Factory.addGetterSetter(j, "resizeEnabled", !0), d.Factory.addGetterSetter(j, "anchorSize", 10, (0, m.getNumberValidator)()), d.Factory.addGetterSetter(j, "rotateEnabled", !0), d.Factory.addGetterSetter(j, "rotateLineVisible", !0), d.Factory.addGetterSetter(j, "rotationSnaps", []), d.Factory.addGetterSetter(j, "rotateAnchorOffset", 50, (0, m.getNumberValidator)()), d.Factory.addGetterSetter(j, "rotateAnchorCursor", "crosshair"), d.Factory.addGetterSetter(j, "rotationSnapTolerance", 5, (0, m.getNumberValidator)()), d.Factory.addGetterSetter(j, "borderEnabled", !0), d.Factory.addGetterSetter(j, "anchorStroke", "rgb(0, 161, 255)"), d.Factory.addGetterSetter(j, "anchorStrokeWidth", 1, (0, m.getNumberValidator)()), d.Factory.addGetterSetter(j, "anchorFill", "white"), d.Factory.addGetterSetter(j, "anchorCornerRadius", 0, (0, m.getNumberValidator)()), d.Factory.addGetterSetter(j, "borderStroke", "rgb(0, 161, 255)"), d.Factory.addGetterSetter(j, "borderStrokeWidth", 1, (0, m.getNumberValidator)()), d.Factory.addGetterSetter(j, "borderDash"), d.Factory.addGetterSetter(j, "keepRatio", !0), d.Factory.addGetterSetter(j, "shiftBehavior", "default"), d.Factory.addGetterSetter(j, "centeredScaling", !1), d.Factory.addGetterSetter(j, "ignoreStroke", !1), d.Factory.addGetterSetter(j, "padding", 0, (0, m.getNumberValidator)()), d.Factory.addGetterSetter(j, "nodes"), d.Factory.addGetterSetter(j, "node"), d.Factory.addGetterSetter(j, "boundBoxFunc"), d.Factory.addGetterSetter(j, "anchorDragBoundFunc"), d.Factory.addGetterSetter(j, "anchorStyleFunc"), d.Factory.addGetterSetter(j, "shouldOverdrawWholeArea", !1), d.Factory.addGetterSetter(j, "useSingleNodeRotation", !0), d.Factory.backCompat(j, {
    lineEnabled: "borderEnabled",
    rotateHandlerOffset: "rotateAnchorOffset",
    enabledHandlers: "enabledAnchors"
  }), au;
}
var uu = {}, zh;
function D1() {
  if (zh) return uu;
  zh = 1, Object.defineProperty(uu, "__esModule", { value: !0 }), uu.Wedge = void 0;
  const u = ot(), d = Fn(), w = et(), O = at(), M = et();
  let x = class extends d.Shape {
    _sceneFunc(m) {
      m.beginPath(), m.arc(0, 0, this.radius(), 0, w.Konva.getAngle(this.angle()), this.clockwise()), m.lineTo(0, 0), m.closePath(), m.fillStrokeShape(this);
    }
    getWidth() {
      return this.radius() * 2;
    }
    getHeight() {
      return this.radius() * 2;
    }
    setWidth(m) {
      this.radius(m / 2);
    }
    setHeight(m) {
      this.radius(m / 2);
    }
  };
  return uu.Wedge = x, x.prototype.className = "Wedge", x.prototype._centroid = !0, x.prototype._attrsAffectingSize = ["radius"], (0, M._registerNode)(x), u.Factory.addGetterSetter(x, "radius", 0, (0, O.getNumberValidator)()), u.Factory.addGetterSetter(x, "angle", 0, (0, O.getNumberValidator)()), u.Factory.addGetterSetter(x, "clockwise", !1), u.Factory.backCompat(x, {
    angleDeg: "angle",
    getAngleDeg: "getAngle",
    setAngleDeg: "setAngle"
  }), uu;
}
var cu = {}, Gh;
function z1() {
  if (Gh) return cu;
  Gh = 1, Object.defineProperty(cu, "__esModule", { value: !0 }), cu.Blur = void 0;
  const u = ot(), d = nn(), w = at();
  function O() {
    this.r = 0, this.g = 0, this.b = 0, this.a = 0, this.next = null;
  }
  const M = [
    512,
    512,
    456,
    512,
    328,
    456,
    335,
    512,
    405,
    328,
    271,
    456,
    388,
    335,
    292,
    512,
    454,
    405,
    364,
    328,
    298,
    271,
    496,
    456,
    420,
    388,
    360,
    335,
    312,
    292,
    273,
    512,
    482,
    454,
    428,
    405,
    383,
    364,
    345,
    328,
    312,
    298,
    284,
    271,
    259,
    496,
    475,
    456,
    437,
    420,
    404,
    388,
    374,
    360,
    347,
    335,
    323,
    312,
    302,
    292,
    282,
    273,
    265,
    512,
    497,
    482,
    468,
    454,
    441,
    428,
    417,
    405,
    394,
    383,
    373,
    364,
    354,
    345,
    337,
    328,
    320,
    312,
    305,
    298,
    291,
    284,
    278,
    271,
    265,
    259,
    507,
    496,
    485,
    475,
    465,
    456,
    446,
    437,
    428,
    420,
    412,
    404,
    396,
    388,
    381,
    374,
    367,
    360,
    354,
    347,
    341,
    335,
    329,
    323,
    318,
    312,
    307,
    302,
    297,
    292,
    287,
    282,
    278,
    273,
    269,
    265,
    261,
    512,
    505,
    497,
    489,
    482,
    475,
    468,
    461,
    454,
    447,
    441,
    435,
    428,
    422,
    417,
    411,
    405,
    399,
    394,
    389,
    383,
    378,
    373,
    368,
    364,
    359,
    354,
    350,
    345,
    341,
    337,
    332,
    328,
    324,
    320,
    316,
    312,
    309,
    305,
    301,
    298,
    294,
    291,
    287,
    284,
    281,
    278,
    274,
    271,
    268,
    265,
    262,
    259,
    257,
    507,
    501,
    496,
    491,
    485,
    480,
    475,
    470,
    465,
    460,
    456,
    451,
    446,
    442,
    437,
    433,
    428,
    424,
    420,
    416,
    412,
    408,
    404,
    400,
    396,
    392,
    388,
    385,
    381,
    377,
    374,
    370,
    367,
    363,
    360,
    357,
    354,
    350,
    347,
    344,
    341,
    338,
    335,
    332,
    329,
    326,
    323,
    320,
    318,
    315,
    312,
    310,
    307,
    304,
    302,
    299,
    297,
    294,
    292,
    289,
    287,
    285,
    282,
    280,
    278,
    275,
    273,
    271,
    269,
    267,
    265,
    263,
    261,
    259
  ], x = [
    9,
    11,
    12,
    13,
    13,
    14,
    14,
    15,
    15,
    15,
    15,
    16,
    16,
    16,
    16,
    17,
    17,
    17,
    17,
    17,
    17,
    17,
    18,
    18,
    18,
    18,
    18,
    18,
    18,
    18,
    18,
    19,
    19,
    19,
    19,
    19,
    19,
    19,
    19,
    19,
    19,
    19,
    19,
    19,
    19,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24
  ];
  function h(g, C) {
    const E = g.data, N = g.width, k = g.height;
    let _, S, P, I, H, v, f, R, D, j, b, F, G, U, Q, Z, re, Y, $, pe;
    const T = C + C + 1, z = N - 1, W = k - 1, B = C + 1, L = B * (B + 1) / 2, X = new O(), J = M[C], ue = x[C];
    let ge = null, se = X, q = null, te = null;
    for (let me = 1; me < T; me++)
      se = se.next = new O(), me === B && (ge = se);
    se.next = X, P = S = 0;
    for (let me = 0; me < k; me++) {
      F = G = U = Q = I = H = v = f = 0, R = B * (Z = E[S]), D = B * (re = E[S + 1]), j = B * (Y = E[S + 2]), b = B * ($ = E[S + 3]), I += L * Z, H += L * re, v += L * Y, f += L * $, se = X;
      for (let xe = 0; xe < B; xe++)
        se.r = Z, se.g = re, se.b = Y, se.a = $, se = se.next;
      for (let xe = 1; xe < B; xe++)
        _ = S + ((z < xe ? z : xe) << 2), I += (se.r = Z = E[_]) * (pe = B - xe), H += (se.g = re = E[_ + 1]) * pe, v += (se.b = Y = E[_ + 2]) * pe, f += (se.a = $ = E[_ + 3]) * pe, F += Z, G += re, U += Y, Q += $, se = se.next;
      q = X, te = ge;
      for (let xe = 0; xe < N; xe++)
        E[S + 3] = $ = f * J >> ue, $ !== 0 ? ($ = 255 / $, E[S] = (I * J >> ue) * $, E[S + 1] = (H * J >> ue) * $, E[S + 2] = (v * J >> ue) * $) : E[S] = E[S + 1] = E[S + 2] = 0, I -= R, H -= D, v -= j, f -= b, R -= q.r, D -= q.g, j -= q.b, b -= q.a, _ = P + ((_ = xe + C + 1) < z ? _ : z) << 2, F += q.r = E[_], G += q.g = E[_ + 1], U += q.b = E[_ + 2], Q += q.a = E[_ + 3], I += F, H += G, v += U, f += Q, q = q.next, R += Z = te.r, D += re = te.g, j += Y = te.b, b += $ = te.a, F -= Z, G -= re, U -= Y, Q -= $, te = te.next, S += 4;
      P += N;
    }
    for (let me = 0; me < N; me++) {
      G = U = Q = F = H = v = f = I = 0, S = me << 2, R = B * (Z = E[S]), D = B * (re = E[S + 1]), j = B * (Y = E[S + 2]), b = B * ($ = E[S + 3]), I += L * Z, H += L * re, v += L * Y, f += L * $, se = X;
      for (let Pe = 0; Pe < B; Pe++)
        se.r = Z, se.g = re, se.b = Y, se.a = $, se = se.next;
      let xe = N;
      for (let Pe = 1; Pe <= C; Pe++)
        S = xe + me << 2, I += (se.r = Z = E[S]) * (pe = B - Pe), H += (se.g = re = E[S + 1]) * pe, v += (se.b = Y = E[S + 2]) * pe, f += (se.a = $ = E[S + 3]) * pe, F += Z, G += re, U += Y, Q += $, se = se.next, Pe < W && (xe += N);
      S = me, q = X, te = ge;
      for (let Pe = 0; Pe < k; Pe++)
        _ = S << 2, E[_ + 3] = $ = f * J >> ue, $ > 0 ? ($ = 255 / $, E[_] = (I * J >> ue) * $, E[_ + 1] = (H * J >> ue) * $, E[_ + 2] = (v * J >> ue) * $) : E[_] = E[_ + 1] = E[_ + 2] = 0, I -= R, H -= D, v -= j, f -= b, R -= q.r, D -= q.g, j -= q.b, b -= q.a, _ = me + ((_ = Pe + B) < W ? _ : W) * N << 2, I += F += q.r = E[_], H += G += q.g = E[_ + 1], v += U += q.b = E[_ + 2], f += Q += q.a = E[_ + 3], q = q.next, R += Z = te.r, D += re = te.g, j += Y = te.b, b += $ = te.a, F -= Z, G -= re, U -= Y, Q -= $, te = te.next, S += N;
    }
  }
  const m = function(C) {
    const E = Math.round(this.blurRadius());
    E > 0 && h(C, E);
  };
  return cu.Blur = m, u.Factory.addGetterSetter(d.Node, "blurRadius", 0, (0, w.getNumberValidator)(), u.Factory.afterSetFilter), cu;
}
var du = {}, Uh;
function G1() {
  if (Uh) return du;
  Uh = 1, Object.defineProperty(du, "__esModule", { value: !0 }), du.Brighten = void 0;
  const u = ot(), d = nn(), w = at(), O = function(M) {
    const x = this.brightness() * 255, h = M.data, m = h.length;
    for (let g = 0; g < m; g += 4)
      h[g] += x, h[g + 1] += x, h[g + 2] += x;
  };
  return du.Brighten = O, u.Factory.addGetterSetter(d.Node, "brightness", 0, (0, w.getNumberValidator)(), u.Factory.afterSetFilter), du;
}
var fu = {}, Bh;
function U1() {
  if (Bh) return fu;
  Bh = 1, Object.defineProperty(fu, "__esModule", { value: !0 }), fu.Contrast = void 0;
  const u = ot(), d = nn(), w = at(), O = function(M) {
    const x = Math.pow((this.contrast() + 100) / 100, 2), h = M.data, m = h.length;
    let g = 150, C = 150, E = 150;
    for (let N = 0; N < m; N += 4)
      g = h[N], C = h[N + 1], E = h[N + 2], g /= 255, g -= 0.5, g *= x, g += 0.5, g *= 255, C /= 255, C -= 0.5, C *= x, C += 0.5, C *= 255, E /= 255, E -= 0.5, E *= x, E += 0.5, E *= 255, g = g < 0 ? 0 : g > 255 ? 255 : g, C = C < 0 ? 0 : C > 255 ? 255 : C, E = E < 0 ? 0 : E > 255 ? 255 : E, h[N] = g, h[N + 1] = C, h[N + 2] = E;
  };
  return fu.Contrast = O, u.Factory.addGetterSetter(d.Node, "contrast", 0, (0, w.getNumberValidator)(), u.Factory.afterSetFilter), fu;
}
var hu = {}, Vh;
function B1() {
  if (Vh) return hu;
  Vh = 1, Object.defineProperty(hu, "__esModule", { value: !0 }), hu.Emboss = void 0;
  const u = ot(), d = nn(), w = Yt(), O = at(), M = function(x) {
    const h = this.embossStrength() * 10, m = this.embossWhiteLevel() * 255, g = this.embossDirection(), C = this.embossBlend(), E = x.data, N = x.width, k = x.height, _ = N * 4;
    let S = 0, P = 0, I = k;
    switch (g) {
      case "top-left":
        S = -1, P = -1;
        break;
      case "top":
        S = -1, P = 0;
        break;
      case "top-right":
        S = -1, P = 1;
        break;
      case "right":
        S = 0, P = 1;
        break;
      case "bottom-right":
        S = 1, P = 1;
        break;
      case "bottom":
        S = 1, P = 0;
        break;
      case "bottom-left":
        S = 1, P = -1;
        break;
      case "left":
        S = 0, P = -1;
        break;
      default:
        w.Util.error("Unknown emboss direction: " + g);
    }
    do {
      const H = (I - 1) * _;
      let v = S;
      I + v < 1 && (v = 0), I + v > k && (v = 0);
      const f = (I - 1 + v) * N * 4;
      let R = N;
      do {
        const D = H + (R - 1) * 4;
        let j = P;
        R + j < 1 && (j = 0), R + j > N && (j = 0);
        const b = f + (R - 1 + j) * 4, F = E[D] - E[b], G = E[D + 1] - E[b + 1], U = E[D + 2] - E[b + 2];
        let Q = F;
        const Z = Q > 0 ? Q : -Q, re = G > 0 ? G : -G, Y = U > 0 ? U : -U;
        if (re > Z && (Q = G), Y > Z && (Q = U), Q *= h, C) {
          const $ = E[D] + Q, pe = E[D + 1] + Q, T = E[D + 2] + Q;
          E[D] = $ > 255 ? 255 : $ < 0 ? 0 : $, E[D + 1] = pe > 255 ? 255 : pe < 0 ? 0 : pe, E[D + 2] = T > 255 ? 255 : T < 0 ? 0 : T;
        } else {
          let $ = m - Q;
          $ < 0 ? $ = 0 : $ > 255 && ($ = 255), E[D] = E[D + 1] = E[D + 2] = $;
        }
      } while (--R);
    } while (--I);
  };
  return hu.Emboss = M, u.Factory.addGetterSetter(d.Node, "embossStrength", 0.5, (0, O.getNumberValidator)(), u.Factory.afterSetFilter), u.Factory.addGetterSetter(d.Node, "embossWhiteLevel", 0.5, (0, O.getNumberValidator)(), u.Factory.afterSetFilter), u.Factory.addGetterSetter(d.Node, "embossDirection", "top-left", void 0, u.Factory.afterSetFilter), u.Factory.addGetterSetter(d.Node, "embossBlend", !1, void 0, u.Factory.afterSetFilter), hu;
}
var pu = {}, Hh;
function V1() {
  if (Hh) return pu;
  Hh = 1, Object.defineProperty(pu, "__esModule", { value: !0 }), pu.Enhance = void 0;
  const u = ot(), d = nn(), w = at();
  function O(x, h, m, g, C) {
    const E = m - h, N = C - g;
    if (E === 0)
      return g + N / 2;
    if (N === 0)
      return g;
    let k = (x - h) / E;
    return k = N * k + g, k;
  }
  const M = function(x) {
    const h = x.data, m = h.length;
    let g = h[0], C = g, E, N = h[1], k = N, _, S = h[2], P = S, I;
    const H = this.enhance();
    if (H === 0)
      return;
    for (let F = 0; F < m; F += 4)
      E = h[F + 0], E < g ? g = E : E > C && (C = E), _ = h[F + 1], _ < N ? N = _ : _ > k && (k = _), I = h[F + 2], I < S ? S = I : I > P && (P = I);
    C === g && (C = 255, g = 0), k === N && (k = 255, N = 0), P === S && (P = 255, S = 0);
    let v, f, R, D, j, b;
    if (H > 0)
      v = C + H * (255 - C), f = g - H * (g - 0), R = k + H * (255 - k), D = N - H * (N - 0), j = P + H * (255 - P), b = S - H * (S - 0);
    else {
      const F = (C + g) * 0.5;
      v = C + H * (C - F), f = g + H * (g - F);
      const G = (k + N) * 0.5;
      R = k + H * (k - G), D = N + H * (N - G);
      const U = (P + S) * 0.5;
      j = P + H * (P - U), b = S + H * (S - U);
    }
    for (let F = 0; F < m; F += 4)
      h[F + 0] = O(h[F + 0], g, C, f, v), h[F + 1] = O(h[F + 1], N, k, D, R), h[F + 2] = O(h[F + 2], S, P, b, j);
  };
  return pu.Enhance = M, u.Factory.addGetterSetter(d.Node, "enhance", 0, (0, w.getNumberValidator)(), u.Factory.afterSetFilter), pu;
}
var gu = {}, jh;
function H1() {
  if (jh) return gu;
  jh = 1, Object.defineProperty(gu, "__esModule", { value: !0 }), gu.Grayscale = void 0;
  const u = function(d) {
    const w = d.data, O = w.length;
    for (let M = 0; M < O; M += 4) {
      const x = 0.34 * w[M] + 0.5 * w[M + 1] + 0.16 * w[M + 2];
      w[M] = x, w[M + 1] = x, w[M + 2] = x;
    }
  };
  return gu.Grayscale = u, gu;
}
var mu = {}, Wh;
function j1() {
  if (Wh) return mu;
  Wh = 1, Object.defineProperty(mu, "__esModule", { value: !0 }), mu.HSL = void 0;
  const u = ot(), d = nn(), w = at();
  u.Factory.addGetterSetter(d.Node, "hue", 0, (0, w.getNumberValidator)(), u.Factory.afterSetFilter), u.Factory.addGetterSetter(d.Node, "saturation", 0, (0, w.getNumberValidator)(), u.Factory.afterSetFilter), u.Factory.addGetterSetter(d.Node, "luminance", 0, (0, w.getNumberValidator)(), u.Factory.afterSetFilter);
  const O = function(M) {
    const x = M.data, h = x.length, m = 1, g = Math.pow(2, this.saturation()), C = Math.abs(this.hue() + 360) % 360, E = this.luminance() * 127, N = m * g * Math.cos(C * Math.PI / 180), k = m * g * Math.sin(C * Math.PI / 180), _ = 0.299 * m + 0.701 * N + 0.167 * k, S = 0.587 * m - 0.587 * N + 0.33 * k, P = 0.114 * m - 0.114 * N - 0.497 * k, I = 0.299 * m - 0.299 * N - 0.328 * k, H = 0.587 * m + 0.413 * N + 0.035 * k, v = 0.114 * m - 0.114 * N + 0.293 * k, f = 0.299 * m - 0.3 * N + 1.25 * k, R = 0.587 * m - 0.586 * N - 1.05 * k, D = 0.114 * m + 0.886 * N - 0.2 * k;
    let j, b, F, G;
    for (let U = 0; U < h; U += 4)
      j = x[U + 0], b = x[U + 1], F = x[U + 2], G = x[U + 3], x[U + 0] = _ * j + S * b + P * F + E, x[U + 1] = I * j + H * b + v * F + E, x[U + 2] = f * j + R * b + D * F + E, x[U + 3] = G;
  };
  return mu.HSL = O, mu;
}
var yu = {}, qh;
function W1() {
  if (qh) return yu;
  qh = 1, Object.defineProperty(yu, "__esModule", { value: !0 }), yu.HSV = void 0;
  const u = ot(), d = nn(), w = at(), O = function(M) {
    const x = M.data, h = x.length, m = Math.pow(2, this.value()), g = Math.pow(2, this.saturation()), C = Math.abs(this.hue() + 360) % 360, E = m * g * Math.cos(C * Math.PI / 180), N = m * g * Math.sin(C * Math.PI / 180), k = 0.299 * m + 0.701 * E + 0.167 * N, _ = 0.587 * m - 0.587 * E + 0.33 * N, S = 0.114 * m - 0.114 * E - 0.497 * N, P = 0.299 * m - 0.299 * E - 0.328 * N, I = 0.587 * m + 0.413 * E + 0.035 * N, H = 0.114 * m - 0.114 * E + 0.293 * N, v = 0.299 * m - 0.3 * E + 1.25 * N, f = 0.587 * m - 0.586 * E - 1.05 * N, R = 0.114 * m + 0.886 * E - 0.2 * N;
    for (let D = 0; D < h; D += 4) {
      const j = x[D + 0], b = x[D + 1], F = x[D + 2], G = x[D + 3];
      x[D + 0] = k * j + _ * b + S * F, x[D + 1] = P * j + I * b + H * F, x[D + 2] = v * j + f * b + R * F, x[D + 3] = G;
    }
  };
  return yu.HSV = O, u.Factory.addGetterSetter(d.Node, "hue", 0, (0, w.getNumberValidator)(), u.Factory.afterSetFilter), u.Factory.addGetterSetter(d.Node, "saturation", 0, (0, w.getNumberValidator)(), u.Factory.afterSetFilter), u.Factory.addGetterSetter(d.Node, "value", 0, (0, w.getNumberValidator)(), u.Factory.afterSetFilter), yu;
}
var vu = {}, Yh;
function q1() {
  if (Yh) return vu;
  Yh = 1, Object.defineProperty(vu, "__esModule", { value: !0 }), vu.Invert = void 0;
  const u = function(d) {
    const w = d.data, O = w.length;
    for (let M = 0; M < O; M += 4)
      w[M] = 255 - w[M], w[M + 1] = 255 - w[M + 1], w[M + 2] = 255 - w[M + 2];
  };
  return vu.Invert = u, vu;
}
var _u = {}, Kh;
function Y1() {
  if (Kh) return _u;
  Kh = 1, Object.defineProperty(_u, "__esModule", { value: !0 }), _u.Kaleidoscope = void 0;
  const u = ot(), d = nn(), w = Yt(), O = at(), M = function(m, g, C) {
    const E = m.data, N = g.data, k = m.width, _ = m.height, S = C.polarCenterX || k / 2, P = C.polarCenterY || _ / 2;
    let I = Math.sqrt(S * S + P * P), H = k - S, v = _ - P;
    const f = Math.sqrt(H * H + v * v);
    I = f > I ? f : I;
    const R = _, D = k, j = 360 / D * Math.PI / 180;
    for (let b = 0; b < D; b += 1) {
      const F = Math.sin(b * j), G = Math.cos(b * j);
      for (let U = 0; U < R; U += 1) {
        H = Math.floor(S + I * U / R * G), v = Math.floor(P + I * U / R * F);
        let Q = (v * k + H) * 4;
        const Z = E[Q + 0], re = E[Q + 1], Y = E[Q + 2], $ = E[Q + 3];
        Q = (b + U * k) * 4, N[Q + 0] = Z, N[Q + 1] = re, N[Q + 2] = Y, N[Q + 3] = $;
      }
    }
  }, x = function(m, g, C) {
    const E = m.data, N = g.data, k = m.width, _ = m.height, S = C.polarCenterX || k / 2, P = C.polarCenterY || _ / 2;
    let I = Math.sqrt(S * S + P * P), H = k - S, v = _ - P;
    const f = Math.sqrt(H * H + v * v);
    I = f > I ? f : I;
    const R = _, D = k, j = 0;
    let b, F;
    for (H = 0; H < k; H += 1)
      for (v = 0; v < _; v += 1) {
        const G = H - S, U = v - P, Q = Math.sqrt(G * G + U * U) * R / I;
        let Z = (Math.atan2(U, G) * 180 / Math.PI + 360 + j) % 360;
        Z = Z * D / 360, b = Math.floor(Z), F = Math.floor(Q);
        let re = (F * k + b) * 4;
        const Y = E[re + 0], $ = E[re + 1], pe = E[re + 2], T = E[re + 3];
        re = (v * k + H) * 4, N[re + 0] = Y, N[re + 1] = $, N[re + 2] = pe, N[re + 3] = T;
      }
  }, h = function(m) {
    const g = m.width, C = m.height;
    let E, N, k, _, S, P, I, H, v, f, R = Math.round(this.kaleidoscopePower());
    const D = Math.round(this.kaleidoscopeAngle()), j = Math.floor(g * (D % 360) / 360);
    if (R < 1)
      return;
    const b = w.Util.createCanvasElement();
    b.width = g, b.height = C;
    const F = b.getContext("2d").getImageData(0, 0, g, C);
    w.Util.releaseCanvas(b), M(m, F, {
      polarCenterX: g / 2,
      polarCenterY: C / 2
    });
    let G = g / Math.pow(2, R);
    for (; G <= 8; )
      G = G * 2, R -= 1;
    G = Math.ceil(G);
    let U = G, Q = 0, Z = U, re = 1;
    for (j + G > g && (Q = U, Z = 0, re = -1), N = 0; N < C; N += 1)
      for (E = Q; E !== Z; E += re)
        k = Math.round(E + j) % g, v = (g * N + k) * 4, S = F.data[v + 0], P = F.data[v + 1], I = F.data[v + 2], H = F.data[v + 3], f = (g * N + E) * 4, F.data[f + 0] = S, F.data[f + 1] = P, F.data[f + 2] = I, F.data[f + 3] = H;
    for (N = 0; N < C; N += 1)
      for (U = Math.floor(G), _ = 0; _ < R; _ += 1) {
        for (E = 0; E < U + 1; E += 1)
          v = (g * N + E) * 4, S = F.data[v + 0], P = F.data[v + 1], I = F.data[v + 2], H = F.data[v + 3], f = (g * N + U * 2 - E - 1) * 4, F.data[f + 0] = S, F.data[f + 1] = P, F.data[f + 2] = I, F.data[f + 3] = H;
        U *= 2;
      }
    x(F, m, {});
  };
  return _u.Kaleidoscope = h, u.Factory.addGetterSetter(d.Node, "kaleidoscopePower", 2, (0, O.getNumberValidator)(), u.Factory.afterSetFilter), u.Factory.addGetterSetter(d.Node, "kaleidoscopeAngle", 0, (0, O.getNumberValidator)(), u.Factory.afterSetFilter), _u;
}
var Su = {}, Xh;
function K1() {
  if (Xh) return Su;
  Xh = 1, Object.defineProperty(Su, "__esModule", { value: !0 }), Su.Mask = void 0;
  const u = ot(), d = nn(), w = at();
  function O(k, _, S) {
    let P = (S * k.width + _) * 4;
    const I = [];
    return I.push(k.data[P++], k.data[P++], k.data[P++], k.data[P++]), I;
  }
  function M(k, _) {
    return Math.sqrt(Math.pow(k[0] - _[0], 2) + Math.pow(k[1] - _[1], 2) + Math.pow(k[2] - _[2], 2));
  }
  function x(k) {
    const _ = [0, 0, 0];
    for (let S = 0; S < k.length; S++)
      _[0] += k[S][0], _[1] += k[S][1], _[2] += k[S][2];
    return _[0] /= k.length, _[1] /= k.length, _[2] /= k.length, _;
  }
  function h(k, _) {
    const S = O(k, 0, 0), P = O(k, k.width - 1, 0), I = O(k, 0, k.height - 1), H = O(k, k.width - 1, k.height - 1), v = _ || 10;
    if (M(S, P) < v && M(P, H) < v && M(H, I) < v && M(I, S) < v) {
      const f = x([P, S, H, I]), R = [];
      for (let D = 0; D < k.width * k.height; D++) {
        const j = M(f, [
          k.data[D * 4],
          k.data[D * 4 + 1],
          k.data[D * 4 + 2]
        ]);
        R[D] = j < v ? 0 : 255;
      }
      return R;
    }
  }
  function m(k, _) {
    for (let S = 0; S < k.width * k.height; S++)
      k.data[4 * S + 3] = _[S];
  }
  function g(k, _, S) {
    const P = [1, 1, 1, 1, 0, 1, 1, 1, 1], I = Math.round(Math.sqrt(P.length)), H = Math.floor(I / 2), v = [];
    for (let f = 0; f < S; f++)
      for (let R = 0; R < _; R++) {
        const D = f * _ + R;
        let j = 0;
        for (let b = 0; b < I; b++)
          for (let F = 0; F < I; F++) {
            const G = f + b - H, U = R + F - H;
            if (G >= 0 && G < S && U >= 0 && U < _) {
              const Q = G * _ + U, Z = P[b * I + F];
              j += k[Q] * Z;
            }
          }
        v[D] = j === 2040 ? 255 : 0;
      }
    return v;
  }
  function C(k, _, S) {
    const P = [1, 1, 1, 1, 1, 1, 1, 1, 1], I = Math.round(Math.sqrt(P.length)), H = Math.floor(I / 2), v = [];
    for (let f = 0; f < S; f++)
      for (let R = 0; R < _; R++) {
        const D = f * _ + R;
        let j = 0;
        for (let b = 0; b < I; b++)
          for (let F = 0; F < I; F++) {
            const G = f + b - H, U = R + F - H;
            if (G >= 0 && G < S && U >= 0 && U < _) {
              const Q = G * _ + U, Z = P[b * I + F];
              j += k[Q] * Z;
            }
          }
        v[D] = j >= 1020 ? 255 : 0;
      }
    return v;
  }
  function E(k, _, S) {
    const P = [0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111], I = Math.round(Math.sqrt(P.length)), H = Math.floor(I / 2), v = [];
    for (let f = 0; f < S; f++)
      for (let R = 0; R < _; R++) {
        const D = f * _ + R;
        let j = 0;
        for (let b = 0; b < I; b++)
          for (let F = 0; F < I; F++) {
            const G = f + b - H, U = R + F - H;
            if (G >= 0 && G < S && U >= 0 && U < _) {
              const Q = G * _ + U, Z = P[b * I + F];
              j += k[Q] * Z;
            }
          }
        v[D] = j;
      }
    return v;
  }
  const N = function(k) {
    const _ = this.threshold();
    let S = h(k, _);
    return S && (S = g(S, k.width, k.height), S = C(S, k.width, k.height), S = E(S, k.width, k.height), m(k, S)), k;
  };
  return Su.Mask = N, u.Factory.addGetterSetter(d.Node, "threshold", 0, (0, w.getNumberValidator)(), u.Factory.afterSetFilter), Su;
}
var wu = {}, Qh;
function X1() {
  if (Qh) return wu;
  Qh = 1, Object.defineProperty(wu, "__esModule", { value: !0 }), wu.Noise = void 0;
  const u = ot(), d = nn(), w = at(), O = function(M) {
    const x = this.noise() * 255, h = M.data, m = h.length, g = x / 2;
    for (let C = 0; C < m; C += 4)
      h[C + 0] += g - 2 * g * Math.random(), h[C + 1] += g - 2 * g * Math.random(), h[C + 2] += g - 2 * g * Math.random();
  };
  return wu.Noise = O, u.Factory.addGetterSetter(d.Node, "noise", 0.2, (0, w.getNumberValidator)(), u.Factory.afterSetFilter), wu;
}
var xu = {}, bh;
function Q1() {
  if (bh) return xu;
  bh = 1, Object.defineProperty(xu, "__esModule", { value: !0 }), xu.Pixelate = void 0;
  const u = ot(), d = Yt(), w = nn(), O = at(), M = function(x) {
    let h = Math.ceil(this.pixelSize()), m = x.width, g = x.height, C = Math.ceil(m / h), E = Math.ceil(g / h), N = x.data;
    if (h <= 0) {
      d.Util.error("pixelSize value can not be <= 0");
      return;
    }
    for (let k = 0; k < C; k += 1)
      for (let _ = 0; _ < E; _ += 1) {
        let S = 0, P = 0, I = 0, H = 0;
        const v = k * h, f = v + h, R = _ * h, D = R + h;
        let j = 0;
        for (let b = v; b < f; b += 1)
          if (!(b >= m))
            for (let F = R; F < D; F += 1) {
              if (F >= g)
                continue;
              const G = (m * F + b) * 4;
              S += N[G + 0], P += N[G + 1], I += N[G + 2], H += N[G + 3], j += 1;
            }
        S = S / j, P = P / j, I = I / j, H = H / j;
        for (let b = v; b < f; b += 1)
          if (!(b >= m))
            for (let F = R; F < D; F += 1) {
              if (F >= g)
                continue;
              const G = (m * F + b) * 4;
              N[G + 0] = S, N[G + 1] = P, N[G + 2] = I, N[G + 3] = H;
            }
      }
  };
  return xu.Pixelate = M, u.Factory.addGetterSetter(w.Node, "pixelSize", 8, (0, O.getNumberValidator)(), u.Factory.afterSetFilter), xu;
}
var Cu = {}, Jh;
function b1() {
  if (Jh) return Cu;
  Jh = 1, Object.defineProperty(Cu, "__esModule", { value: !0 }), Cu.Posterize = void 0;
  const u = ot(), d = nn(), w = at(), O = function(M) {
    const x = Math.round(this.levels() * 254) + 1, h = M.data, m = h.length, g = 255 / x;
    for (let C = 0; C < m; C += 1)
      h[C] = Math.floor(h[C] / g) * g;
  };
  return Cu.Posterize = O, u.Factory.addGetterSetter(d.Node, "levels", 0.5, (0, w.getNumberValidator)(), u.Factory.afterSetFilter), Cu;
}
var ku = {}, Zh;
function J1() {
  if (Zh) return ku;
  Zh = 1, Object.defineProperty(ku, "__esModule", { value: !0 }), ku.RGB = void 0;
  const u = ot(), d = nn(), w = at(), O = function(M) {
    const x = M.data, h = x.length, m = this.red(), g = this.green(), C = this.blue();
    for (let E = 0; E < h; E += 4) {
      const N = (0.34 * x[E] + 0.5 * x[E + 1] + 0.16 * x[E + 2]) / 255;
      x[E] = N * m, x[E + 1] = N * g, x[E + 2] = N * C, x[E + 3] = x[E + 3];
    }
  };
  return ku.RGB = O, u.Factory.addGetterSetter(d.Node, "red", 0, function(M) {
    return this._filterUpToDate = !1, M > 255 ? 255 : M < 0 ? 0 : Math.round(M);
  }), u.Factory.addGetterSetter(d.Node, "green", 0, function(M) {
    return this._filterUpToDate = !1, M > 255 ? 255 : M < 0 ? 0 : Math.round(M);
  }), u.Factory.addGetterSetter(d.Node, "blue", 0, w.RGBComponent, u.Factory.afterSetFilter), ku;
}
var Eu = {}, $h;
function Z1() {
  if ($h) return Eu;
  $h = 1, Object.defineProperty(Eu, "__esModule", { value: !0 }), Eu.RGBA = void 0;
  const u = ot(), d = nn(), w = at(), O = function(M) {
    const x = M.data, h = x.length, m = this.red(), g = this.green(), C = this.blue(), E = this.alpha();
    for (let N = 0; N < h; N += 4) {
      const k = 1 - E;
      x[N] = m * E + x[N] * k, x[N + 1] = g * E + x[N + 1] * k, x[N + 2] = C * E + x[N + 2] * k;
    }
  };
  return Eu.RGBA = O, u.Factory.addGetterSetter(d.Node, "red", 0, function(M) {
    return this._filterUpToDate = !1, M > 255 ? 255 : M < 0 ? 0 : Math.round(M);
  }), u.Factory.addGetterSetter(d.Node, "green", 0, function(M) {
    return this._filterUpToDate = !1, M > 255 ? 255 : M < 0 ? 0 : Math.round(M);
  }), u.Factory.addGetterSetter(d.Node, "blue", 0, w.RGBComponent, u.Factory.afterSetFilter), u.Factory.addGetterSetter(d.Node, "alpha", 1, function(M) {
    return this._filterUpToDate = !1, M > 1 ? 1 : M < 0 ? 0 : M;
  }), Eu;
}
var Pu = {}, e0;
function $1() {
  if (e0) return Pu;
  e0 = 1, Object.defineProperty(Pu, "__esModule", { value: !0 }), Pu.Sepia = void 0;
  const u = function(d) {
    const w = d.data, O = w.length;
    for (let M = 0; M < O; M += 4) {
      const x = w[M + 0], h = w[M + 1], m = w[M + 2];
      w[M + 0] = Math.min(255, x * 0.393 + h * 0.769 + m * 0.189), w[M + 1] = Math.min(255, x * 0.349 + h * 0.686 + m * 0.168), w[M + 2] = Math.min(255, x * 0.272 + h * 0.534 + m * 0.131);
    }
  };
  return Pu.Sepia = u, Pu;
}
var Ru = {}, t0;
function ep() {
  if (t0) return Ru;
  t0 = 1, Object.defineProperty(Ru, "__esModule", { value: !0 }), Ru.Solarize = void 0;
  const u = function(d) {
    const w = d.data, O = d.width, M = d.height, x = O * 4;
    let h = M;
    do {
      const m = (h - 1) * x;
      let g = O;
      do {
        const C = m + (g - 1) * 4;
        let E = w[C], N = w[C + 1], k = w[C + 2];
        E > 127 && (E = 255 - E), N > 127 && (N = 255 - N), k > 127 && (k = 255 - k), w[C] = E, w[C + 1] = N, w[C + 2] = k;
      } while (--g);
    } while (--h);
  };
  return Ru.Solarize = u, Ru;
}
var Tu = {}, n0;
function tp() {
  if (n0) return Tu;
  n0 = 1, Object.defineProperty(Tu, "__esModule", { value: !0 }), Tu.Threshold = void 0;
  const u = ot(), d = nn(), w = at(), O = function(M) {
    const x = this.threshold() * 255, h = M.data, m = h.length;
    for (let g = 0; g < m; g += 1)
      h[g] = h[g] < x ? 0 : 255;
  };
  return Tu.Threshold = O, u.Factory.addGetterSetter(d.Node, "threshold", 0.5, (0, w.getNumberValidator)(), u.Factory.afterSetFilter), Tu;
}
var r0;
function np() {
  if (r0) return Ha;
  r0 = 1, Object.defineProperty(Ha, "__esModule", { value: !0 }), Ha.Konva = void 0;
  const u = uf(), d = C1(), w = E1(), O = P1(), M = R1(), x = T1(), h = N1(), m = N0(), g = pf(), C = F0(), E = F1(), N = M1(), k = L1(), _ = A1(), S = M0(), P = O1(), I = I1(), H = D1(), v = z1(), f = G1(), R = U1(), D = B1(), j = V1(), b = H1(), F = j1(), G = W1(), U = q1(), Q = Y1(), Z = K1(), re = X1(), Y = Q1(), $ = b1(), pe = J1(), T = Z1(), z = $1(), W = ep(), B = tp();
  return Ha.Konva = u.Konva.Util._assign(u.Konva, {
    Arc: d.Arc,
    Arrow: w.Arrow,
    Circle: O.Circle,
    Ellipse: M.Ellipse,
    Image: x.Image,
    Label: h.Label,
    Tag: h.Tag,
    Line: m.Line,
    Path: g.Path,
    Rect: C.Rect,
    RegularPolygon: E.RegularPolygon,
    Ring: N.Ring,
    Sprite: k.Sprite,
    Star: _.Star,
    Text: S.Text,
    TextPath: P.TextPath,
    Transformer: I.Transformer,
    Wedge: H.Wedge,
    Filters: {
      Blur: v.Blur,
      Brighten: f.Brighten,
      Contrast: R.Contrast,
      Emboss: D.Emboss,
      Enhance: j.Enhance,
      Grayscale: b.Grayscale,
      HSL: F.HSL,
      HSV: G.HSV,
      Invert: U.Invert,
      Kaleidoscope: Q.Kaleidoscope,
      Mask: Z.Mask,
      Noise: re.Noise,
      Pixelate: Y.Pixelate,
      Posterize: $.Posterize,
      RGB: pe.RGB,
      RGBA: T.RGBA,
      Sepia: z.Sepia,
      Solarize: W.Solarize,
      Threshold: B.Threshold
    }
  }), Ha;
}
var rp = Jc.exports, i0;
function ip() {
  if (i0) return Jc.exports;
  i0 = 1, Object.defineProperty(rp, "__esModule", { value: !0 });
  const u = np();
  return Jc.exports = u.Konva, Jc.exports;
}
ip();
var qc = { exports: {} }, o0;
function op() {
  return o0 || (o0 = 1, (function(u, d) {
    Object.defineProperty(d, "__esModule", { value: !0 }), d.Konva = void 0;
    var w = uf();
    Object.defineProperty(d, "Konva", { enumerable: !0, get: function() {
      return w.Konva;
    } });
    const O = uf();
    u.exports = O.Konva;
  })(qc, qc.exports)), qc.exports;
}
var sp = op();
const Au = /* @__PURE__ */ $c(sp);
var tf = { exports: {} };
/**
 * @license React
 * react-reconciler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nf, s0;
function lp() {
  return s0 || (s0 = 1, nf = function(d) {
    var w = {}, O = Ou(), M = cf(), x = Object.assign;
    function h(n) {
      for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, o = 1; o < arguments.length; o++) r += "&args[]=" + encodeURIComponent(arguments[o]);
      return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    var m = O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, g = Symbol.for("react.element"), C = Symbol.for("react.portal"), E = Symbol.for("react.fragment"), N = Symbol.for("react.strict_mode"), k = Symbol.for("react.profiler"), _ = Symbol.for("react.provider"), S = Symbol.for("react.context"), P = Symbol.for("react.forward_ref"), I = Symbol.for("react.suspense"), H = Symbol.for("react.suspense_list"), v = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), R = Symbol.for("react.offscreen"), D = Symbol.iterator;
    function j(n) {
      return n === null || typeof n != "object" ? null : (n = D && n[D] || n["@@iterator"], typeof n == "function" ? n : null);
    }
    function b(n) {
      if (n == null) return null;
      if (typeof n == "function") return n.displayName || n.name || null;
      if (typeof n == "string") return n;
      switch (n) {
        case E:
          return "Fragment";
        case C:
          return "Portal";
        case k:
          return "Profiler";
        case N:
          return "StrictMode";
        case I:
          return "Suspense";
        case H:
          return "SuspenseList";
      }
      if (typeof n == "object") switch (n.$$typeof) {
        case S:
          return (n.displayName || "Context") + ".Consumer";
        case _:
          return (n._context.displayName || "Context") + ".Provider";
        case P:
          var r = n.render;
          return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
        case v:
          return r = n.displayName || null, r !== null ? r : b(n.type) || "Memo";
        case f:
          r = n._payload, n = n._init;
          try {
            return b(n(r));
          } catch {
          }
      }
      return null;
    }
    function F(n) {
      var r = n.type;
      switch (n.tag) {
        case 24:
          return "Cache";
        case 9:
          return (r.displayName || "Context") + ".Consumer";
        case 10:
          return (r._context.displayName || "Context") + ".Provider";
        case 18:
          return "DehydratedFragment";
        case 11:
          return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
        case 7:
          return "Fragment";
        case 5:
          return r;
        case 4:
          return "Portal";
        case 3:
          return "Root";
        case 6:
          return "Text";
        case 16:
          return b(r);
        case 8:
          return r === N ? "StrictMode" : "Mode";
        case 22:
          return "Offscreen";
        case 12:
          return "Profiler";
        case 21:
          return "Scope";
        case 13:
          return "Suspense";
        case 19:
          return "SuspenseList";
        case 25:
          return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
          if (typeof r == "function") return r.displayName || r.name || null;
          if (typeof r == "string") return r;
      }
      return null;
    }
    function G(n) {
      var r = n, o = n;
      if (n.alternate) for (; r.return; ) r = r.return;
      else {
        n = r;
        do
          r = n, (r.flags & 4098) !== 0 && (o = r.return), n = r.return;
        while (n);
      }
      return r.tag === 3 ? o : null;
    }
    function U(n) {
      if (G(n) !== n) throw Error(h(188));
    }
    function Q(n) {
      var r = n.alternate;
      if (!r) {
        if (r = G(n), r === null) throw Error(h(188));
        return r !== n ? null : n;
      }
      for (var o = n, l = r; ; ) {
        var c = o.return;
        if (c === null) break;
        var y = c.alternate;
        if (y === null) {
          if (l = c.return, l !== null) {
            o = l;
            continue;
          }
          break;
        }
        if (c.child === y.child) {
          for (y = c.child; y; ) {
            if (y === o) return U(c), n;
            if (y === l) return U(c), r;
            y = y.sibling;
          }
          throw Error(h(188));
        }
        if (o.return !== l.return) o = c, l = y;
        else {
          for (var V = !1, ie = c.child; ie; ) {
            if (ie === o) {
              V = !0, o = c, l = y;
              break;
            }
            if (ie === l) {
              V = !0, l = c, o = y;
              break;
            }
            ie = ie.sibling;
          }
          if (!V) {
            for (ie = y.child; ie; ) {
              if (ie === o) {
                V = !0, o = y, l = c;
                break;
              }
              if (ie === l) {
                V = !0, l = y, o = c;
                break;
              }
              ie = ie.sibling;
            }
            if (!V) throw Error(h(189));
          }
        }
        if (o.alternate !== l) throw Error(h(190));
      }
      if (o.tag !== 3) throw Error(h(188));
      return o.stateNode.current === o ? n : r;
    }
    function Z(n) {
      return n = Q(n), n !== null ? re(n) : null;
    }
    function re(n) {
      if (n.tag === 5 || n.tag === 6) return n;
      for (n = n.child; n !== null; ) {
        var r = re(n);
        if (r !== null) return r;
        n = n.sibling;
      }
      return null;
    }
    function Y(n) {
      if (n.tag === 5 || n.tag === 6) return n;
      for (n = n.child; n !== null; ) {
        if (n.tag !== 4) {
          var r = Y(n);
          if (r !== null) return r;
        }
        n = n.sibling;
      }
      return null;
    }
    var $ = Array.isArray, pe = d.getPublicInstance, T = d.getRootHostContext, z = d.getChildHostContext, W = d.prepareForCommit, B = d.resetAfterCommit, L = d.createInstance, X = d.appendInitialChild, J = d.finalizeInitialChildren, ue = d.prepareUpdate, ge = d.shouldSetTextContent, se = d.createTextInstance, q = d.scheduleTimeout, te = d.cancelTimeout, me = d.noTimeout, xe = d.isPrimaryRenderer, Pe = d.supportsMutation, Be = d.supportsPersistence, Ge = d.supportsHydration, be = d.getInstanceFromNode, je = d.preparePortalMount, dt = d.getCurrentEventPriority, st = d.detachDeletedInstance, Je = d.supportsMicrotasks, bn = d.scheduleMicrotask, Rt = d.supportsTestSelectors, Hn = d.findFiberRoot, ft = d.getBoundingRect, dn = d.getTextContent, Vt = d.isHiddenSubtree, fr = d.matchAccessibilityRole, Kt = d.setFocusIfFocusable, Mn = d.setupIntersectionObserver, Xt = d.appendChild, _n = d.appendChildToContainer, Ot = d.commitTextUpdate, Lt = d.commitMount, Yr = d.commitUpdate, ye = d.insertBefore, ke = d.insertInContainerBefore, Ne = d.removeChild, Re = d.removeChildFromContainer, $e = d.resetTextContent, Ze = d.hideInstance, It = d.hideTextInstance, Jn = d.unhideInstance, Sn = d.unhideTextInstance, rn = d.clearContainer, Oi = d.cloneInstance, ui = d.createContainerChildSet, ci = d.appendChildToContainerChildSet, qs = d.finalizeContainerChildren, po = d.replaceContainerChildren, go = d.cloneHiddenInstance, as = d.cloneHiddenTextInstance, us = d.canHydrateInstance, Xl = d.canHydrateTextInstance, cs = d.canHydrateSuspenseInstance, Iu = d.isSuspenseInstancePending, Ii = d.isSuspenseInstanceFallback, Ys = d.getSuspenseInstanceFallbackErrorDetails, Ks = d.registerSuspenseInstanceRetry, mo = d.getNextHydratableSibling, rd = d.getFirstHydratableChild, id = d.getFirstHydratableChildWithinContainer, od = d.getFirstHydratableChildWithinSuspenseInstance, Di = d.hydrateInstance, Du = d.hydrateTextInstance, zu = d.hydrateSuspenseInstance, sd = d.getNextHydratableInstanceAfterSuspenseInstance, Gu = d.commitHydratedContainer, Uu = d.commitHydratedSuspenseInstance, Bu = d.clearSuspenseBoundary, Vu = d.clearSuspenseBoundaryFromContainer, ld = d.shouldDeleteUnhydratedTailInstances, ad = d.didNotMatchHydratedContainerTextInstance, Gt = d.didNotMatchHydratedTextInstance, Ql;
    function zi(n) {
      if (Ql === void 0) try {
        throw Error();
      } catch (o) {
        var r = o.stack.trim().match(/\n( *(at )?)/);
        Ql = r && r[1] || "";
      }
      return `
` + Ql + n;
    }
    var Xs = !1;
    function yo(n, r) {
      if (!n || Xs) return "";
      Xs = !0;
      var o = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        if (r) if (r = function() {
          throw Error();
        }, Object.defineProperty(r.prototype, "props", { set: function() {
          throw Error();
        } }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(r, []);
          } catch (we) {
            var l = we;
          }
          Reflect.construct(n, [], r);
        } else {
          try {
            r.call();
          } catch (we) {
            l = we;
          }
          n.call(r.prototype);
        }
        else {
          try {
            throw Error();
          } catch (we) {
            l = we;
          }
          n();
        }
      } catch (we) {
        if (we && l && typeof we.stack == "string") {
          for (var c = we.stack.split(`
`), y = l.stack.split(`
`), V = c.length - 1, ie = y.length - 1; 1 <= V && 0 <= ie && c[V] !== y[ie]; ) ie--;
          for (; 1 <= V && 0 <= ie; V--, ie--) if (c[V] !== y[ie]) {
            if (V !== 1 || ie !== 1)
              do
                if (V--, ie--, 0 > ie || c[V] !== y[ie]) {
                  var fe = `
` + c[V].replace(" at new ", " at ");
                  return n.displayName && fe.includes("<anonymous>") && (fe = fe.replace("<anonymous>", n.displayName)), fe;
                }
              while (1 <= V && 0 <= ie);
            break;
          }
        }
      } finally {
        Xs = !1, Error.prepareStackTrace = o;
      }
      return (n = n ? n.displayName || n.name : "") ? zi(n) : "";
    }
    var ud = Object.prototype.hasOwnProperty, Qs = [], Kr = -1;
    function fn(n) {
      return { current: n };
    }
    function Ct(n) {
      0 > Kr || (n.current = Qs[Kr], Qs[Kr] = null, Kr--);
    }
    function tt(n, r) {
      Kr++, Qs[Kr] = n.current, n.current = r;
    }
    var di = {}, wn = fn(di), jn = fn(!1), Lr = di;
    function Xr(n, r) {
      var o = n.type.contextTypes;
      if (!o) return di;
      var l = n.stateNode;
      if (l && l.__reactInternalMemoizedUnmaskedChildContext === r) return l.__reactInternalMemoizedMaskedChildContext;
      var c = {}, y;
      for (y in o) c[y] = r[y];
      return l && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
    }
    function on(n) {
      return n = n.childContextTypes, n != null;
    }
    function Gi() {
      Ct(jn), Ct(wn);
    }
    function Hu(n, r, o) {
      if (wn.current !== di) throw Error(h(168));
      tt(wn, r), tt(jn, o);
    }
    function ju(n, r, o) {
      var l = n.stateNode;
      if (r = r.childContextTypes, typeof l.getChildContext != "function") return o;
      l = l.getChildContext();
      for (var c in l) if (!(c in r)) throw Error(h(108, F(n) || "Unknown", c));
      return x({}, o, l);
    }
    function vo(n) {
      return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || di, Lr = wn.current, tt(wn, n), tt(jn, jn.current), !0;
    }
    function bl(n, r, o) {
      var l = n.stateNode;
      if (!l) throw Error(h(169));
      o ? (n = ju(n, r, Lr), l.__reactInternalMemoizedMergedChildContext = n, Ct(jn), Ct(wn), tt(wn, n)) : Ct(jn), tt(jn, o);
    }
    var Zn = Math.clz32 ? Math.clz32 : Jl, ds = Math.log, cd = Math.LN2;
    function Jl(n) {
      return n >>>= 0, n === 0 ? 32 : 31 - (ds(n) / cd | 0) | 0;
    }
    var ut = 64, fs = 4194304;
    function _o(n) {
      switch (n & -n) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return n & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          return n & 130023424;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 1073741824;
        default:
          return n;
      }
    }
    function So(n, r) {
      var o = n.pendingLanes;
      if (o === 0) return 0;
      var l = 0, c = n.suspendedLanes, y = n.pingedLanes, V = o & 268435455;
      if (V !== 0) {
        var ie = V & ~c;
        ie !== 0 ? l = _o(ie) : (y &= V, y !== 0 && (l = _o(y)));
      } else V = o & ~c, V !== 0 ? l = _o(V) : y !== 0 && (l = _o(y));
      if (l === 0) return 0;
      if (r !== 0 && r !== l && (r & c) === 0 && (c = l & -l, y = r & -r, c >= y || c === 16 && (y & 4194240) !== 0)) return r;
      if ((l & 4) !== 0 && (l |= o & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= l; 0 < r; ) o = 31 - Zn(r), c = 1 << o, l |= n[o], r &= ~c;
      return l;
    }
    function Wu(n, r) {
      switch (n) {
        case 1:
        case 2:
        case 4:
          return r + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return r + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return -1;
      }
    }
    function qu(n, r) {
      for (var o = n.suspendedLanes, l = n.pingedLanes, c = n.expirationTimes, y = n.pendingLanes; 0 < y; ) {
        var V = 31 - Zn(y), ie = 1 << V, fe = c[V];
        fe === -1 ? ((ie & o) === 0 || (ie & l) !== 0) && (c[V] = Wu(ie, r)) : fe <= r && (n.expiredLanes |= ie), y &= ~ie;
      }
    }
    function bs(n) {
      return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
    }
    function Js() {
      var n = ut;
      return ut <<= 1, (ut & 4194240) === 0 && (ut = 64), n;
    }
    function wo(n) {
      for (var r = [], o = 0; 31 > o; o++) r.push(n);
      return r;
    }
    function hr(n, r, o) {
      n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Zn(r), n[r] = o;
    }
    function fi(n, r) {
      var o = n.pendingLanes & ~r;
      n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
      var l = n.eventTimes;
      for (n = n.expirationTimes; 0 < o; ) {
        var c = 31 - Zn(o), y = 1 << c;
        r[c] = 0, l[c] = -1, n[c] = -1, o &= ~y;
      }
    }
    function Ar(n, r) {
      var o = n.entangledLanes |= r;
      for (n = n.entanglements; o; ) {
        var l = 31 - Zn(o), c = 1 << l;
        c & r | n[l] & r && (n[l] |= r), o &= ~c;
      }
    }
    var nt = 0;
    function xo(n) {
      return n &= -n, 1 < n ? 4 < n ? (n & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
    }
    var Or = M.unstable_scheduleCallback, Yu = M.unstable_cancelCallback, Ku = M.unstable_shouldYield, hs = M.unstable_requestPaint, sn = M.unstable_now, Zs = M.unstable_ImmediatePriority, $s = M.unstable_UserBlockingPriority, el = M.unstable_NormalPriority, dd = M.unstable_IdlePriority, hi = null, Wn = null;
    function Co(n) {
      if (Wn && typeof Wn.onCommitFiberRoot == "function") try {
        Wn.onCommitFiberRoot(hi, n, void 0, (n.current.flags & 128) === 128);
      } catch {
      }
    }
    function tl(n, r) {
      return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
    }
    var kr = typeof Object.is == "function" ? Object.is : tl, Qr = null, ko = !1, Eo = !1;
    function nl(n) {
      Qr === null ? Qr = [n] : Qr.push(n);
    }
    function Xu(n) {
      ko = !0, nl(n);
    }
    function hn() {
      if (!Eo && Qr !== null) {
        Eo = !0;
        var n = 0, r = nt;
        try {
          var o = Qr;
          for (nt = 1; n < o.length; n++) {
            var l = o[n];
            do
              l = l(!0);
            while (l !== null);
          }
          Qr = null, ko = !1;
        } catch (c) {
          throw Qr !== null && (Qr = Qr.slice(n + 1)), Or(Zs, hn), c;
        } finally {
          nt = r, Eo = !1;
        }
      }
      return null;
    }
    var pi = [], br = 0, ps = null, Ui = 0, Ln = [], $n = 0, Qt = null, qn = 1, Er = "";
    function Pr(n, r) {
      pi[br++] = Ui, pi[br++] = ps, ps = n, Ui = r;
    }
    function Qu(n, r, o) {
      Ln[$n++] = qn, Ln[$n++] = Er, Ln[$n++] = Qt, Qt = n;
      var l = qn;
      n = Er;
      var c = 32 - Zn(l) - 1;
      l &= ~(1 << c), o += 1;
      var y = 32 - Zn(r) + c;
      if (30 < y) {
        var V = c - c % 5;
        y = (l & (1 << V) - 1).toString(32), l >>= V, c -= V, qn = 1 << 32 - Zn(r) + c | o << c | l, Er = y + n;
      } else qn = 1 << y | o << c | l, Er = n;
    }
    function gs(n) {
      n.return !== null && (Pr(n, 1), Qu(n, 1, 0));
    }
    function ms(n) {
      for (; n === ps; ) ps = pi[--br], pi[br] = null, Ui = pi[--br], pi[br] = null;
      for (; n === Qt; ) Qt = Ln[--$n], Ln[$n] = null, Er = Ln[--$n], Ln[$n] = null, qn = Ln[--$n], Ln[$n] = null;
    }
    var pn = null, An = null, kt = !1, ys = !1, Rr = null;
    function bu(n, r) {
      var o = ur(5, null, null, 0);
      o.elementType = "DELETED", o.stateNode = r, o.return = n, r = n.deletions, r === null ? (n.deletions = [o], n.flags |= 16) : r.push(o);
    }
    function rl(n, r) {
      switch (n.tag) {
        case 5:
          return r = us(r, n.type, n.pendingProps), r !== null ? (n.stateNode = r, pn = n, An = rd(r), !0) : !1;
        case 6:
          return r = Xl(r, n.pendingProps), r !== null ? (n.stateNode = r, pn = n, An = null, !0) : !1;
        case 13:
          if (r = cs(r), r !== null) {
            var o = Qt !== null ? { id: qn, overflow: Er } : null;
            return n.memoizedState = { dehydrated: r, treeContext: o, retryLane: 1073741824 }, o = ur(18, null, null, 0), o.stateNode = r, o.return = n, n.child = o, pn = n, An = null, !0;
          }
          return !1;
        default:
          return !1;
      }
    }
    function Zl(n) {
      return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
    }
    function $l(n) {
      if (kt) {
        var r = An;
        if (r) {
          var o = r;
          if (!rl(n, r)) {
            if (Zl(n)) throw Error(h(418));
            r = mo(o);
            var l = pn;
            r && rl(n, r) ? bu(l, o) : (n.flags = n.flags & -4097 | 2, kt = !1, pn = n);
          }
        } else {
          if (Zl(n)) throw Error(h(418));
          n.flags = n.flags & -4097 | 2, kt = !1, pn = n;
        }
      }
    }
    function Ju(n) {
      for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
      pn = n;
    }
    function il(n) {
      if (!Ge || n !== pn) return !1;
      if (!kt) return Ju(n), kt = !0, !1;
      if (n.tag !== 3 && (n.tag !== 5 || ld(n.type) && !ge(n.type, n.memoizedProps))) {
        var r = An;
        if (r) {
          if (Zl(n)) throw Zu(), Error(h(418));
          for (; r; ) bu(n, r), r = mo(r);
        }
      }
      if (Ju(n), n.tag === 13) {
        if (!Ge) throw Error(h(316));
        if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(h(317));
        An = sd(n);
      } else An = pn ? mo(n.stateNode) : null;
      return !0;
    }
    function Zu() {
      for (var n = An; n; ) n = mo(n);
    }
    function Bi() {
      Ge && (An = pn = null, ys = kt = !1);
    }
    function ea(n) {
      Rr === null ? Rr = [n] : Rr.push(n);
    }
    var fd = m.ReactCurrentBatchConfig;
    function ol(n, r) {
      if (kr(n, r)) return !0;
      if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
      var o = Object.keys(n), l = Object.keys(r);
      if (o.length !== l.length) return !1;
      for (l = 0; l < o.length; l++) {
        var c = o[l];
        if (!ud.call(r, c) || !kr(n[c], r[c])) return !1;
      }
      return !0;
    }
    function hd(n) {
      switch (n.tag) {
        case 5:
          return zi(n.type);
        case 16:
          return zi("Lazy");
        case 13:
          return zi("Suspense");
        case 19:
          return zi("SuspenseList");
        case 0:
        case 2:
        case 15:
          return n = yo(n.type, !1), n;
        case 11:
          return n = yo(n.type.render, !1), n;
        case 1:
          return n = yo(n.type, !0), n;
        default:
          return "";
      }
    }
    function Vi(n, r, o) {
      if (n = o.ref, n !== null && typeof n != "function" && typeof n != "object") {
        if (o._owner) {
          if (o = o._owner, o) {
            if (o.tag !== 1) throw Error(h(309));
            var l = o.stateNode;
          }
          if (!l) throw Error(h(147, n));
          var c = l, y = "" + n;
          return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === y ? r.ref : (r = function(V) {
            var ie = c.refs;
            V === null ? delete ie[y] : ie[y] = V;
          }, r._stringRef = y, r);
        }
        if (typeof n != "string") throw Error(h(284));
        if (!o._owner) throw Error(h(290, n));
      }
      return n;
    }
    function sl(n, r) {
      throw n = Object.prototype.toString.call(r), Error(h(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
    }
    function $u(n) {
      var r = n._init;
      return r(n._payload);
    }
    function ec(n) {
      function r(ce, oe) {
        if (n) {
          var he = ce.deletions;
          he === null ? (ce.deletions = [oe], ce.flags |= 16) : he.push(oe);
        }
      }
      function o(ce, oe) {
        if (!n) return null;
        for (; oe !== null; ) r(ce, oe), oe = oe.sibling;
        return null;
      }
      function l(ce, oe) {
        for (ce = /* @__PURE__ */ new Map(); oe !== null; ) oe.key !== null ? ce.set(oe.key, oe) : ce.set(oe.index, oe), oe = oe.sibling;
        return ce;
      }
      function c(ce, oe) {
        return ce = Li(ce, oe), ce.index = 0, ce.sibling = null, ce;
      }
      function y(ce, oe, he) {
        return ce.index = he, n ? (he = ce.alternate, he !== null ? (he = he.index, he < oe ? (ce.flags |= 2, oe) : he) : (ce.flags |= 2, oe)) : (ce.flags |= 1048576, oe);
      }
      function V(ce) {
        return n && ce.alternate === null && (ce.flags |= 2), ce;
      }
      function ie(ce, oe, he, Fe) {
        return oe === null || oe.tag !== 6 ? (oe = bo(he, ce.mode, Fe), oe.return = ce, oe) : (oe = c(oe, he), oe.return = ce, oe);
      }
      function fe(ce, oe, he, Fe) {
        var Ue = he.type;
        return Ue === E ? Le(ce, oe, he.props.children, Fe, he.key) : oe !== null && (oe.elementType === Ue || typeof Ue == "object" && Ue !== null && Ue.$$typeof === f && $u(Ue) === oe.type) ? (Fe = c(oe, he.props), Fe.ref = Vi(ce, oe, he), Fe.return = ce, Fe) : (Fe = Gl(he.type, he.key, he.props, null, ce.mode, Fe), Fe.ref = Vi(ce, oe, he), Fe.return = ce, Fe);
      }
      function we(ce, oe, he, Fe) {
        return oe === null || oe.tag !== 4 || oe.stateNode.containerInfo !== he.containerInfo || oe.stateNode.implementation !== he.implementation ? (oe = Ul(he, ce.mode, Fe), oe.return = ce, oe) : (oe = c(oe, he.children || []), oe.return = ce, oe);
      }
      function Le(ce, oe, he, Fe, Ue) {
        return oe === null || oe.tag !== 7 ? (oe = yn(he, ce.mode, Fe, Ue), oe.return = ce, oe) : (oe = c(oe, he), oe.return = ce, oe);
      }
      function qe(ce, oe, he) {
        if (typeof oe == "string" && oe !== "" || typeof oe == "number") return oe = bo("" + oe, ce.mode, he), oe.return = ce, oe;
        if (typeof oe == "object" && oe !== null) {
          switch (oe.$$typeof) {
            case g:
              return he = Gl(oe.type, oe.key, oe.props, null, ce.mode, he), he.ref = Vi(ce, null, oe), he.return = ce, he;
            case C:
              return oe = Ul(oe, ce.mode, he), oe.return = ce, oe;
            case f:
              var Fe = oe._init;
              return qe(ce, Fe(oe._payload), he);
          }
          if ($(oe) || j(oe)) return oe = yn(oe, ce.mode, he, null), oe.return = ce, oe;
          sl(ce, oe);
        }
        return null;
      }
      function Te(ce, oe, he, Fe) {
        var Ue = oe !== null ? oe.key : null;
        if (typeof he == "string" && he !== "" || typeof he == "number") return Ue !== null ? null : ie(ce, oe, "" + he, Fe);
        if (typeof he == "object" && he !== null) {
          switch (he.$$typeof) {
            case g:
              return he.key === Ue ? fe(ce, oe, he, Fe) : null;
            case C:
              return he.key === Ue ? we(ce, oe, he, Fe) : null;
            case f:
              return Ue = he._init, Te(
                ce,
                oe,
                Ue(he._payload),
                Fe
              );
          }
          if ($(he) || j(he)) return Ue !== null ? null : Le(ce, oe, he, Fe, null);
          sl(ce, he);
        }
        return null;
      }
      function xt(ce, oe, he, Fe, Ue) {
        if (typeof Fe == "string" && Fe !== "" || typeof Fe == "number") return ce = ce.get(he) || null, ie(oe, ce, "" + Fe, Ue);
        if (typeof Fe == "object" && Fe !== null) {
          switch (Fe.$$typeof) {
            case g:
              return ce = ce.get(Fe.key === null ? he : Fe.key) || null, fe(oe, ce, Fe, Ue);
            case C:
              return ce = ce.get(Fe.key === null ? he : Fe.key) || null, we(oe, ce, Fe, Ue);
            case f:
              var Qe = Fe._init;
              return xt(ce, oe, he, Qe(Fe._payload), Ue);
          }
          if ($(Fe) || j(Fe)) return ce = ce.get(he) || null, Le(oe, ce, Fe, Ue, null);
          sl(oe, Fe);
        }
        return null;
      }
      function gt(ce, oe, he, Fe) {
        for (var Ue = null, Qe = null, Ye = oe, lt = oe = 0, en = null; Ye !== null && lt < he.length; lt++) {
          Ye.index > lt ? (en = Ye, Ye = null) : en = Ye.sibling;
          var it = Te(ce, Ye, he[lt], Fe);
          if (it === null) {
            Ye === null && (Ye = en);
            break;
          }
          n && Ye && it.alternate === null && r(ce, Ye), oe = y(it, oe, lt), Qe === null ? Ue = it : Qe.sibling = it, Qe = it, Ye = en;
        }
        if (lt === he.length) return o(ce, Ye), kt && Pr(ce, lt), Ue;
        if (Ye === null) {
          for (; lt < he.length; lt++) Ye = qe(ce, he[lt], Fe), Ye !== null && (oe = y(Ye, oe, lt), Qe === null ? Ue = Ye : Qe.sibling = Ye, Qe = Ye);
          return kt && Pr(ce, lt), Ue;
        }
        for (Ye = l(ce, Ye); lt < he.length; lt++) en = xt(Ye, ce, lt, he[lt], Fe), en !== null && (n && en.alternate !== null && Ye.delete(en.key === null ? lt : en.key), oe = y(en, oe, lt), Qe === null ? Ue = en : Qe.sibling = en, Qe = en);
        return n && Ye.forEach(function(Rn) {
          return r(ce, Rn);
        }), kt && Pr(ce, lt), Ue;
      }
      function Un(ce, oe, he, Fe) {
        var Ue = j(he);
        if (typeof Ue != "function") throw Error(h(150));
        if (he = Ue.call(he), he == null) throw Error(h(151));
        for (var Qe = Ue = null, Ye = oe, lt = oe = 0, en = null, it = he.next(); Ye !== null && !it.done; lt++, it = he.next()) {
          Ye.index > lt ? (en = Ye, Ye = null) : en = Ye.sibling;
          var Rn = Te(ce, Ye, it.value, Fe);
          if (Rn === null) {
            Ye === null && (Ye = en);
            break;
          }
          n && Ye && Rn.alternate === null && r(ce, Ye), oe = y(Rn, oe, lt), Qe === null ? Ue = Rn : Qe.sibling = Rn, Qe = Rn, Ye = en;
        }
        if (it.done) return o(
          ce,
          Ye
        ), kt && Pr(ce, lt), Ue;
        if (Ye === null) {
          for (; !it.done; lt++, it = he.next()) it = qe(ce, it.value, Fe), it !== null && (oe = y(it, oe, lt), Qe === null ? Ue = it : Qe.sibling = it, Qe = it);
          return kt && Pr(ce, lt), Ue;
        }
        for (Ye = l(ce, Ye); !it.done; lt++, it = he.next()) it = xt(Ye, ce, lt, it.value, Fe), it !== null && (n && it.alternate !== null && Ye.delete(it.key === null ? lt : it.key), oe = y(it, oe, lt), Qe === null ? Ue = it : Qe.sibling = it, Qe = it);
        return n && Ye.forEach(function(vd) {
          return r(ce, vd);
        }), kt && Pr(ce, lt), Ue;
      }
      function jr(ce, oe, he, Fe) {
        if (typeof he == "object" && he !== null && he.type === E && he.key === null && (he = he.props.children), typeof he == "object" && he !== null) {
          switch (he.$$typeof) {
            case g:
              e: {
                for (var Ue = he.key, Qe = oe; Qe !== null; ) {
                  if (Qe.key === Ue) {
                    if (Ue = he.type, Ue === E) {
                      if (Qe.tag === 7) {
                        o(ce, Qe.sibling), oe = c(Qe, he.props.children), oe.return = ce, ce = oe;
                        break e;
                      }
                    } else if (Qe.elementType === Ue || typeof Ue == "object" && Ue !== null && Ue.$$typeof === f && $u(Ue) === Qe.type) {
                      o(ce, Qe.sibling), oe = c(Qe, he.props), oe.ref = Vi(ce, Qe, he), oe.return = ce, ce = oe;
                      break e;
                    }
                    o(ce, Qe);
                    break;
                  } else r(ce, Qe);
                  Qe = Qe.sibling;
                }
                he.type === E ? (oe = yn(he.props.children, ce.mode, Fe, he.key), oe.return = ce, ce = oe) : (Fe = Gl(he.type, he.key, he.props, null, ce.mode, Fe), Fe.ref = Vi(ce, oe, he), Fe.return = ce, ce = Fe);
              }
              return V(ce);
            case C:
              e: {
                for (Qe = he.key; oe !== null; ) {
                  if (oe.key === Qe) if (oe.tag === 4 && oe.stateNode.containerInfo === he.containerInfo && oe.stateNode.implementation === he.implementation) {
                    o(ce, oe.sibling), oe = c(oe, he.children || []), oe.return = ce, ce = oe;
                    break e;
                  } else {
                    o(ce, oe);
                    break;
                  }
                  else r(ce, oe);
                  oe = oe.sibling;
                }
                oe = Ul(he, ce.mode, Fe), oe.return = ce, ce = oe;
              }
              return V(ce);
            case f:
              return Qe = he._init, jr(ce, oe, Qe(he._payload), Fe);
          }
          if ($(he)) return gt(ce, oe, he, Fe);
          if (j(he)) return Un(ce, oe, he, Fe);
          sl(ce, he);
        }
        return typeof he == "string" && he !== "" || typeof he == "number" ? (he = "" + he, oe !== null && oe.tag === 6 ? (o(ce, oe.sibling), oe = c(oe, he), oe.return = ce, ce = oe) : (o(ce, oe), oe = bo(he, ce.mode, Fe), oe.return = ce, ce = oe), V(ce)) : o(ce, oe);
      }
      return jr;
    }
    var Hi = ec(!0), tc = ec(!1), ll = fn(null), al = null, Po = null, ta = null;
    function na() {
      ta = Po = al = null;
    }
    function nc(n, r, o) {
      xe ? (tt(ll, r._currentValue), r._currentValue = o) : (tt(ll, r._currentValue2), r._currentValue2 = o);
    }
    function vs(n) {
      var r = ll.current;
      Ct(ll), xe ? n._currentValue = r : n._currentValue2 = r;
    }
    function ji(n, r, o) {
      for (; n !== null; ) {
        var l = n.alternate;
        if ((n.childLanes & r) !== r ? (n.childLanes |= r, l !== null && (l.childLanes |= r)) : l !== null && (l.childLanes & r) !== r && (l.childLanes |= r), n === o) break;
        n = n.return;
      }
    }
    function Ro(n, r) {
      al = n, ta = Po = null, n = n.dependencies, n !== null && n.firstContext !== null && ((n.lanes & r) !== 0 && (Jt = !0), n.firstContext = null);
    }
    function er(n) {
      var r = xe ? n._currentValue : n._currentValue2;
      if (ta !== n) if (n = { context: n, memoizedValue: r, next: null }, Po === null) {
        if (al === null) throw Error(h(308));
        Po = n, al.dependencies = { lanes: 0, firstContext: n };
      } else Po = Po.next = n;
      return r;
    }
    var gi = null;
    function ul(n) {
      gi === null ? gi = [n] : gi.push(n);
    }
    function ra(n, r, o, l) {
      var c = r.interleaved;
      return c === null ? (o.next = o, ul(r)) : (o.next = c.next, c.next = o), r.interleaved = o, Tr(n, l);
    }
    function Tr(n, r) {
      n.lanes |= r;
      var o = n.alternate;
      for (o !== null && (o.lanes |= r), o = n, n = n.return; n !== null; ) n.childLanes |= r, o = n.alternate, o !== null && (o.childLanes |= r), o = n, n = n.return;
      return o.tag === 3 ? o.stateNode : null;
    }
    var tr = !1;
    function ia(n) {
      n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
    }
    function rc(n, r) {
      n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
    }
    function Jr(n, r) {
      return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
    }
    function Zr(n, r, o) {
      var l = n.updateQueue;
      if (l === null) return null;
      if (l = l.shared, (Xe & 2) !== 0) {
        var c = l.pending;
        return c === null ? r.next = r : (r.next = c.next, c.next = r), l.pending = r, Tr(n, o);
      }
      return c = l.interleaved, c === null ? (r.next = r, ul(l)) : (r.next = c.next, c.next = r), l.interleaved = r, Tr(n, o);
    }
    function _s(n, r, o) {
      if (r = r.updateQueue, r !== null && (r = r.shared, (o & 4194240) !== 0)) {
        var l = r.lanes;
        l &= n.pendingLanes, o |= l, r.lanes = o, Ar(n, o);
      }
    }
    function To(n, r) {
      var o = n.updateQueue, l = n.alternate;
      if (l !== null && (l = l.updateQueue, o === l)) {
        var c = null, y = null;
        if (o = o.firstBaseUpdate, o !== null) {
          do {
            var V = { eventTime: o.eventTime, lane: o.lane, tag: o.tag, payload: o.payload, callback: o.callback, next: null };
            y === null ? c = y = V : y = y.next = V, o = o.next;
          } while (o !== null);
          y === null ? c = y = r : y = y.next = r;
        } else c = y = r;
        o = { baseState: l.baseState, firstBaseUpdate: c, lastBaseUpdate: y, shared: l.shared, effects: l.effects }, n.updateQueue = o;
        return;
      }
      n = o.lastBaseUpdate, n === null ? o.firstBaseUpdate = r : n.next = r, o.lastBaseUpdate = r;
    }
    function mi(n, r, o, l) {
      var c = n.updateQueue;
      tr = !1;
      var y = c.firstBaseUpdate, V = c.lastBaseUpdate, ie = c.shared.pending;
      if (ie !== null) {
        c.shared.pending = null;
        var fe = ie, we = fe.next;
        fe.next = null, V === null ? y = we : V.next = we, V = fe;
        var Le = n.alternate;
        Le !== null && (Le = Le.updateQueue, ie = Le.lastBaseUpdate, ie !== V && (ie === null ? Le.firstBaseUpdate = we : ie.next = we, Le.lastBaseUpdate = fe));
      }
      if (y !== null) {
        var qe = c.baseState;
        V = 0, Le = we = fe = null, ie = y;
        do {
          var Te = ie.lane, xt = ie.eventTime;
          if ((l & Te) === Te) {
            Le !== null && (Le = Le.next = {
              eventTime: xt,
              lane: 0,
              tag: ie.tag,
              payload: ie.payload,
              callback: ie.callback,
              next: null
            });
            e: {
              var gt = n, Un = ie;
              switch (Te = r, xt = o, Un.tag) {
                case 1:
                  if (gt = Un.payload, typeof gt == "function") {
                    qe = gt.call(xt, qe, Te);
                    break e;
                  }
                  qe = gt;
                  break e;
                case 3:
                  gt.flags = gt.flags & -65537 | 128;
                case 0:
                  if (gt = Un.payload, Te = typeof gt == "function" ? gt.call(xt, qe, Te) : gt, Te == null) break e;
                  qe = x({}, qe, Te);
                  break e;
                case 2:
                  tr = !0;
              }
            }
            ie.callback !== null && ie.lane !== 0 && (n.flags |= 64, Te = c.effects, Te === null ? c.effects = [ie] : Te.push(ie));
          } else xt = { eventTime: xt, lane: Te, tag: ie.tag, payload: ie.payload, callback: ie.callback, next: null }, Le === null ? (we = Le = xt, fe = qe) : Le = Le.next = xt, V |= Te;
          if (ie = ie.next, ie === null) {
            if (ie = c.shared.pending, ie === null) break;
            Te = ie, ie = Te.next, Te.next = null, c.lastBaseUpdate = Te, c.shared.pending = null;
          }
        } while (!0);
        if (Le === null && (fe = qe), c.baseState = fe, c.firstBaseUpdate = we, c.lastBaseUpdate = Le, r = c.shared.interleaved, r !== null) {
          c = r;
          do
            V |= c.lane, c = c.next;
          while (c !== r);
        } else y === null && (c.shared.lanes = 0);
        ri |= V, n.lanes = V, n.memoizedState = qe;
      }
    }
    function ic(n, r, o) {
      if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
        var l = n[r], c = l.callback;
        if (c !== null) {
          if (l.callback = null, l = o, typeof c != "function") throw Error(h(191, c));
          c.call(l);
        }
      }
    }
    var yi = {}, pr = fn(yi), No = fn(yi), vi = fn(yi);
    function gr(n) {
      if (n === yi) throw Error(h(174));
      return n;
    }
    function cl(n, r) {
      tt(vi, r), tt(No, n), tt(pr, yi), n = T(r), Ct(pr), tt(pr, n);
    }
    function Wi() {
      Ct(pr), Ct(No), Ct(vi);
    }
    function oa(n) {
      var r = gr(vi.current), o = gr(pr.current);
      r = z(o, n.type, r), o !== r && (tt(No, n), tt(pr, r));
    }
    function sa(n) {
      No.current === n && (Ct(pr), Ct(No));
    }
    var At = fn(0);
    function dl(n) {
      for (var r = n; r !== null; ) {
        if (r.tag === 13) {
          var o = r.memoizedState;
          if (o !== null && (o = o.dehydrated, o === null || Iu(o) || Ii(o))) return r;
        } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
          if ((r.flags & 128) !== 0) return r;
        } else if (r.child !== null) {
          r.child.return = r, r = r.child;
          continue;
        }
        if (r === n) break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n) return null;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
      return null;
    }
    var la = [];
    function aa() {
      for (var n = 0; n < la.length; n++) {
        var r = la[n];
        xe ? r._workInProgressVersionPrimary = null : r._workInProgressVersionSecondary = null;
      }
      la.length = 0;
    }
    var Yn = m.ReactCurrentDispatcher, qi = m.ReactCurrentBatchConfig, _i = 0, Tt = null, Ht = null, bt = null, Fo = !1, Ss = !1, ws = 0, Mo = 0;
    function ln() {
      throw Error(h(321));
    }
    function Yi(n, r) {
      if (r === null) return !1;
      for (var o = 0; o < r.length && o < n.length; o++) if (!kr(n[o], r[o])) return !1;
      return !0;
    }
    function xs(n, r, o, l, c, y) {
      if (_i = y, Tt = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Yn.current = n === null || n.memoizedState === null ? va : _a, n = o(l, c), Ss) {
        y = 0;
        do {
          if (Ss = !1, ws = 0, 25 <= y) throw Error(h(301));
          y += 1, bt = Ht = null, r.updateQueue = null, Yn.current = Sa, n = o(l, c);
        } while (Ss);
      }
      if (Yn.current = Ji, r = Ht !== null && Ht.next !== null, _i = 0, bt = Ht = Tt = null, Fo = !1, r) throw Error(h(300));
      return n;
    }
    function fl() {
      var n = ws !== 0;
      return ws = 0, n;
    }
    function nr() {
      var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
      return bt === null ? Tt.memoizedState = bt = n : bt = bt.next = n, bt;
    }
    function gn() {
      if (Ht === null) {
        var n = Tt.alternate;
        n = n !== null ? n.memoizedState : null;
      } else n = Ht.next;
      var r = bt === null ? Tt.memoizedState : bt.next;
      if (r !== null) bt = r, Ht = n;
      else {
        if (n === null) throw Error(h(310));
        Ht = n, n = { memoizedState: Ht.memoizedState, baseState: Ht.baseState, baseQueue: Ht.baseQueue, queue: Ht.queue, next: null }, bt === null ? Tt.memoizedState = bt = n : bt = bt.next = n;
      }
      return bt;
    }
    function Ki(n, r) {
      return typeof r == "function" ? r(n) : r;
    }
    function hl(n) {
      var r = gn(), o = r.queue;
      if (o === null) throw Error(h(311));
      o.lastRenderedReducer = n;
      var l = Ht, c = l.baseQueue, y = o.pending;
      if (y !== null) {
        if (c !== null) {
          var V = c.next;
          c.next = y.next, y.next = V;
        }
        l.baseQueue = c = y, o.pending = null;
      }
      if (c !== null) {
        y = c.next, l = l.baseState;
        var ie = V = null, fe = null, we = y;
        do {
          var Le = we.lane;
          if ((_i & Le) === Le) fe !== null && (fe = fe.next = { lane: 0, action: we.action, hasEagerState: we.hasEagerState, eagerState: we.eagerState, next: null }), l = we.hasEagerState ? we.eagerState : n(l, we.action);
          else {
            var qe = {
              lane: Le,
              action: we.action,
              hasEagerState: we.hasEagerState,
              eagerState: we.eagerState,
              next: null
            };
            fe === null ? (ie = fe = qe, V = l) : fe = fe.next = qe, Tt.lanes |= Le, ri |= Le;
          }
          we = we.next;
        } while (we !== null && we !== y);
        fe === null ? V = l : fe.next = ie, kr(l, r.memoizedState) || (Jt = !0), r.memoizedState = l, r.baseState = V, r.baseQueue = fe, o.lastRenderedState = l;
      }
      if (n = o.interleaved, n !== null) {
        c = n;
        do
          y = c.lane, Tt.lanes |= y, ri |= y, c = c.next;
        while (c !== n);
      } else c === null && (o.lanes = 0);
      return [r.memoizedState, o.dispatch];
    }
    function Lo(n) {
      var r = gn(), o = r.queue;
      if (o === null) throw Error(h(311));
      o.lastRenderedReducer = n;
      var l = o.dispatch, c = o.pending, y = r.memoizedState;
      if (c !== null) {
        o.pending = null;
        var V = c = c.next;
        do
          y = n(y, V.action), V = V.next;
        while (V !== c);
        kr(y, r.memoizedState) || (Jt = !0), r.memoizedState = y, r.baseQueue === null && (r.baseState = y), o.lastRenderedState = y;
      }
      return [y, l];
    }
    function ua() {
    }
    function ca(n, r) {
      var o = Tt, l = gn(), c = r(), y = !kr(l.memoizedState, c);
      if (y && (l.memoizedState = c, Jt = !0), l = l.queue, ml(ha.bind(null, o, l, n), [n]), l.getSnapshot !== r || y || bt !== null && bt.memoizedState.tag & 1) {
        if (o.flags |= 2048, Xi(9, fa.bind(null, o, l, c, r), void 0, null), vt === null) throw Error(h(349));
        (_i & 30) !== 0 || da(o, r, c);
      }
      return c;
    }
    function da(n, r, o) {
      n.flags |= 16384, n = { getSnapshot: r, value: o }, r = Tt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Tt.updateQueue = r, r.stores = [n]) : (o = r.stores, o === null ? r.stores = [n] : o.push(n));
    }
    function fa(n, r, o, l) {
      r.value = o, r.getSnapshot = l, pa(r) && $r(n);
    }
    function ha(n, r, o) {
      return o(function() {
        pa(r) && $r(n);
      });
    }
    function pa(n) {
      var r = n.getSnapshot;
      n = n.value;
      try {
        var o = r();
        return !kr(n, o);
      } catch {
        return !0;
      }
    }
    function $r(n) {
      var r = Tr(n, 1);
      r !== null && En(r, n, 1, -1);
    }
    function pl(n) {
      var r = nr();
      return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ki, lastRenderedState: n }, r.queue = n, n = n.dispatch = pd.bind(null, Tt, n), [r.memoizedState, n];
    }
    function Xi(n, r, o, l) {
      return n = { tag: n, create: r, destroy: o, deps: l, next: null }, r = Tt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Tt.updateQueue = r, r.lastEffect = n.next = n) : (o = r.lastEffect, o === null ? r.lastEffect = n.next = n : (l = o.next, o.next = n, n.next = l, r.lastEffect = n)), n;
    }
    function oc() {
      return gn().memoizedState;
    }
    function gl(n, r, o, l) {
      var c = nr();
      Tt.flags |= n, c.memoizedState = Xi(1 | r, o, void 0, l === void 0 ? null : l);
    }
    function Si(n, r, o, l) {
      var c = gn();
      l = l === void 0 ? null : l;
      var y = void 0;
      if (Ht !== null) {
        var V = Ht.memoizedState;
        if (y = V.destroy, l !== null && Yi(l, V.deps)) {
          c.memoizedState = Xi(r, o, y, l);
          return;
        }
      }
      Tt.flags |= n, c.memoizedState = Xi(1 | r, o, y, l);
    }
    function sc(n, r) {
      return gl(8390656, 8, n, r);
    }
    function ml(n, r) {
      return Si(2048, 8, n, r);
    }
    function ga(n, r) {
      return Si(4, 2, n, r);
    }
    function _t(n, r) {
      return Si(4, 4, n, r);
    }
    function yl(n, r) {
      if (typeof r == "function") return n = n(), r(n), function() {
        r(null);
      };
      if (r != null) return n = n(), r.current = n, function() {
        r.current = null;
      };
    }
    function Cs(n, r, o) {
      return o = o != null ? o.concat([n]) : null, Si(4, 4, yl.bind(null, r, n), o);
    }
    function Qi() {
    }
    function ma(n, r) {
      var o = gn();
      r = r === void 0 ? null : r;
      var l = o.memoizedState;
      return l !== null && r !== null && Yi(r, l[1]) ? l[0] : (o.memoizedState = [n, r], n);
    }
    function vl(n, r) {
      var o = gn();
      r = r === void 0 ? null : r;
      var l = o.memoizedState;
      return l !== null && r !== null && Yi(r, l[1]) ? l[0] : (n = n(), o.memoizedState = [n, r], n);
    }
    function Ao(n, r, o) {
      return (_i & 21) === 0 ? (n.baseState && (n.baseState = !1, Jt = !0), n.memoizedState = o) : (kr(o, r) || (o = Js(), Tt.lanes |= o, ri |= o, n.baseState = !0), r);
    }
    function _l(n, r) {
      var o = nt;
      nt = o !== 0 && 4 > o ? o : 4, n(!0);
      var l = qi.transition;
      qi.transition = {};
      try {
        n(!1), r();
      } finally {
        nt = o, qi.transition = l;
      }
    }
    function bi() {
      return gn().memoizedState;
    }
    function lc(n, r, o) {
      var l = $t(n);
      if (o = { lane: l, action: o, hasEagerState: !1, eagerState: null, next: null }, ac(n)) ya(r, o);
      else if (o = ra(n, r, o, l), o !== null) {
        var c = Et();
        En(o, n, l, c), ks(o, r, l);
      }
    }
    function pd(n, r, o) {
      var l = $t(n), c = { lane: l, action: o, hasEagerState: !1, eagerState: null, next: null };
      if (ac(n)) ya(r, c);
      else {
        var y = n.alternate;
        if (n.lanes === 0 && (y === null || y.lanes === 0) && (y = r.lastRenderedReducer, y !== null)) try {
          var V = r.lastRenderedState, ie = y(V, o);
          if (c.hasEagerState = !0, c.eagerState = ie, kr(ie, V)) {
            var fe = r.interleaved;
            fe === null ? (c.next = c, ul(r)) : (c.next = fe.next, fe.next = c), r.interleaved = c;
            return;
          }
        } catch {
        } finally {
        }
        o = ra(n, r, c, l), o !== null && (c = Et(), En(o, n, l, c), ks(o, r, l));
      }
    }
    function ac(n) {
      var r = n.alternate;
      return n === Tt || r !== null && r === Tt;
    }
    function ya(n, r) {
      Ss = Fo = !0;
      var o = n.pending;
      o === null ? r.next = r : (r.next = o.next, o.next = r), n.pending = r;
    }
    function ks(n, r, o) {
      if ((o & 4194240) !== 0) {
        var l = r.lanes;
        l &= n.pendingLanes, o |= l, r.lanes = o, Ar(n, o);
      }
    }
    var Ji = { readContext: er, useCallback: ln, useContext: ln, useEffect: ln, useImperativeHandle: ln, useInsertionEffect: ln, useLayoutEffect: ln, useMemo: ln, useReducer: ln, useRef: ln, useState: ln, useDebugValue: ln, useDeferredValue: ln, useTransition: ln, useMutableSource: ln, useSyncExternalStore: ln, useId: ln, unstable_isNewReconciler: !1 }, va = { readContext: er, useCallback: function(n, r) {
      return nr().memoizedState = [n, r === void 0 ? null : r], n;
    }, useContext: er, useEffect: sc, useImperativeHandle: function(n, r, o) {
      return o = o != null ? o.concat([n]) : null, gl(
        4194308,
        4,
        yl.bind(null, r, n),
        o
      );
    }, useLayoutEffect: function(n, r) {
      return gl(4194308, 4, n, r);
    }, useInsertionEffect: function(n, r) {
      return gl(4, 2, n, r);
    }, useMemo: function(n, r) {
      var o = nr();
      return r = r === void 0 ? null : r, n = n(), o.memoizedState = [n, r], n;
    }, useReducer: function(n, r, o) {
      var l = nr();
      return r = o !== void 0 ? o(r) : r, l.memoizedState = l.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, l.queue = n, n = n.dispatch = lc.bind(null, Tt, n), [l.memoizedState, n];
    }, useRef: function(n) {
      var r = nr();
      return n = { current: n }, r.memoizedState = n;
    }, useState: pl, useDebugValue: Qi, useDeferredValue: function(n) {
      return nr().memoizedState = n;
    }, useTransition: function() {
      var n = pl(!1), r = n[0];
      return n = _l.bind(null, n[1]), nr().memoizedState = n, [r, n];
    }, useMutableSource: function() {
    }, useSyncExternalStore: function(n, r, o) {
      var l = Tt, c = nr();
      if (kt) {
        if (o === void 0) throw Error(h(407));
        o = o();
      } else {
        if (o = r(), vt === null) throw Error(h(349));
        (_i & 30) !== 0 || da(l, r, o);
      }
      c.memoizedState = o;
      var y = { value: o, getSnapshot: r };
      return c.queue = y, sc(ha.bind(
        null,
        l,
        y,
        n
      ), [n]), l.flags |= 2048, Xi(9, fa.bind(null, l, y, o, r), void 0, null), o;
    }, useId: function() {
      var n = nr(), r = vt.identifierPrefix;
      if (kt) {
        var o = Er, l = qn;
        o = (l & ~(1 << 32 - Zn(l) - 1)).toString(32) + o, r = ":" + r + "R" + o, o = ws++, 0 < o && (r += "H" + o.toString(32)), r += ":";
      } else o = Mo++, r = ":" + r + "r" + o.toString(32) + ":";
      return n.memoizedState = r;
    }, unstable_isNewReconciler: !1 }, _a = {
      readContext: er,
      useCallback: ma,
      useContext: er,
      useEffect: ml,
      useImperativeHandle: Cs,
      useInsertionEffect: ga,
      useLayoutEffect: _t,
      useMemo: vl,
      useReducer: hl,
      useRef: oc,
      useState: function() {
        return hl(Ki);
      },
      useDebugValue: Qi,
      useDeferredValue: function(n) {
        var r = gn();
        return Ao(r, Ht.memoizedState, n);
      },
      useTransition: function() {
        var n = hl(Ki)[0], r = gn().memoizedState;
        return [n, r];
      },
      useMutableSource: ua,
      useSyncExternalStore: ca,
      useId: bi,
      unstable_isNewReconciler: !1
    }, Sa = { readContext: er, useCallback: ma, useContext: er, useEffect: ml, useImperativeHandle: Cs, useInsertionEffect: ga, useLayoutEffect: _t, useMemo: vl, useReducer: Lo, useRef: oc, useState: function() {
      return Lo(Ki);
    }, useDebugValue: Qi, useDeferredValue: function(n) {
      var r = gn();
      return Ht === null ? r.memoizedState = n : Ao(r, Ht.memoizedState, n);
    }, useTransition: function() {
      var n = Lo(Ki)[0], r = gn().memoizedState;
      return [n, r];
    }, useMutableSource: ua, useSyncExternalStore: ca, useId: bi, unstable_isNewReconciler: !1 };
    function rr(n, r) {
      if (n && n.defaultProps) {
        r = x({}, r), n = n.defaultProps;
        for (var o in n) r[o] === void 0 && (r[o] = n[o]);
        return r;
      }
      return r;
    }
    function wa(n, r, o, l) {
      r = n.memoizedState, o = o(l, r), o = o == null ? r : x({}, r, o), n.memoizedState = o, n.lanes === 0 && (n.updateQueue.baseState = o);
    }
    var Es = { isMounted: function(n) {
      return (n = n._reactInternals) ? G(n) === n : !1;
    }, enqueueSetState: function(n, r, o) {
      n = n._reactInternals;
      var l = Et(), c = $t(n), y = Jr(l, c);
      y.payload = r, o != null && (y.callback = o), r = Zr(n, y, c), r !== null && (En(r, n, c, l), _s(r, n, c));
    }, enqueueReplaceState: function(n, r, o) {
      n = n._reactInternals;
      var l = Et(), c = $t(n), y = Jr(l, c);
      y.tag = 1, y.payload = r, o != null && (y.callback = o), r = Zr(n, y, c), r !== null && (En(r, n, c, l), _s(r, n, c));
    }, enqueueForceUpdate: function(n, r) {
      n = n._reactInternals;
      var o = Et(), l = $t(n), c = Jr(o, l);
      c.tag = 2, r != null && (c.callback = r), r = Zr(n, c, l), r !== null && (En(r, n, l, o), _s(r, n, l));
    } };
    function uc(n, r, o, l, c, y, V) {
      return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(l, y, V) : r.prototype && r.prototype.isPureReactComponent ? !ol(o, l) || !ol(c, y) : !0;
    }
    function cc(n, r, o) {
      var l = !1, c = di, y = r.contextType;
      return typeof y == "object" && y !== null ? y = er(y) : (c = on(r) ? Lr : wn.current, l = r.contextTypes, y = (l = l != null) ? Xr(n, c) : di), r = new r(o, y), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Es, n.stateNode = r, r._reactInternals = n, l && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = y), r;
    }
    function Sl(n, r, o, l) {
      n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(o, l), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(o, l), r.state !== n && Es.enqueueReplaceState(r, r.state, null);
    }
    function Ir(n, r, o, l) {
      var c = n.stateNode;
      c.props = o, c.state = n.memoizedState, c.refs = {}, ia(n);
      var y = r.contextType;
      typeof y == "object" && y !== null ? c.context = er(y) : (y = on(r) ? Lr : wn.current, c.context = Xr(n, y)), c.state = n.memoizedState, y = r.getDerivedStateFromProps, typeof y == "function" && (wa(n, r, y, o), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && Es.enqueueReplaceState(c, c.state, null), mi(n, o, c, l), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
    }
    function Zi(n, r) {
      try {
        var o = "", l = r;
        do
          o += hd(l), l = l.return;
        while (l);
        var c = o;
      } catch (y) {
        c = `
Error generating stack: ` + y.message + `
` + y.stack;
      }
      return { value: n, source: r, stack: c, digest: null };
    }
    function wi(n, r, o) {
      return { value: n, source: null, stack: o ?? null, digest: r ?? null };
    }
    function mr(n, r) {
      try {
        console.error(r.value);
      } catch (o) {
        setTimeout(function() {
          throw o;
        });
      }
    }
    var Ps = typeof WeakMap == "function" ? WeakMap : Map;
    function Dr(n, r, o) {
      o = Jr(-1, o), o.tag = 3, o.payload = { element: null };
      var l = r.value;
      return o.callback = function() {
        zt || (zt = !0, jt = l), mr(n, r);
      }, o;
    }
    function wl(n, r, o) {
      o = Jr(-1, o), o.tag = 3;
      var l = n.type.getDerivedStateFromError;
      if (typeof l == "function") {
        var c = r.value;
        o.payload = function() {
          return l(c);
        }, o.callback = function() {
          mr(n, r);
        };
      }
      var y = n.stateNode;
      return y !== null && typeof y.componentDidCatch == "function" && (o.callback = function() {
        mr(n, r), typeof l != "function" && (Fr === null ? Fr = /* @__PURE__ */ new Set([this]) : Fr.add(this));
        var V = r.stack;
        this.componentDidCatch(r.value, { componentStack: V !== null ? V : "" });
      }), o;
    }
    function dc(n, r, o) {
      var l = n.pingCache;
      if (l === null) {
        l = n.pingCache = new Ps();
        var c = /* @__PURE__ */ new Set();
        l.set(r, c);
      } else c = l.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), l.set(r, c));
      c.has(o) || (c.add(o), n = _c.bind(null, n, r, o), r.then(n, n));
    }
    function fc(n) {
      do {
        var r;
        if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return n;
        n = n.return;
      } while (n !== null);
      return null;
    }
    function xi(n, r, o, l, c) {
      return (n.mode & 1) === 0 ? (n === r ? n.flags |= 65536 : (n.flags |= 128, o.flags |= 131072, o.flags &= -52805, o.tag === 1 && (o.alternate === null ? o.tag = 17 : (r = Jr(-1, 1), r.tag = 2, Zr(o, r, 1))), o.lanes |= 1), n) : (n.flags |= 65536, n.lanes = c, n);
    }
    var Rs = m.ReactCurrentOwner, Jt = !1;
    function an(n, r, o, l) {
      r.child = n === null ? tc(r, null, o, l) : Hi(r, n.child, o, l);
    }
    function xl(n, r, o, l, c) {
      o = o.render;
      var y = r.ref;
      return Ro(r, c), l = xs(n, r, o, l, y, c), o = fl(), n !== null && !Jt ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, ti(n, r, c)) : (kt && o && gs(r), r.flags |= 1, an(n, r, l, c), r.child);
    }
    function $i(n, r, o, l, c) {
      if (n === null) {
        var y = o.type;
        return typeof y == "function" && !Xo(y) && y.defaultProps === void 0 && o.compare === null && o.defaultProps === void 0 ? (r.tag = 15, r.type = y, ei(n, r, y, l, c)) : (n = Gl(o.type, null, l, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
      }
      if (y = n.child, (n.lanes & c) === 0) {
        var V = y.memoizedProps;
        if (o = o.compare, o = o !== null ? o : ol, o(V, l) && n.ref === r.ref) return ti(n, r, c);
      }
      return r.flags |= 1, n = Li(y, l), n.ref = r.ref, n.return = r, r.child = n;
    }
    function ei(n, r, o, l, c) {
      if (n !== null) {
        var y = n.memoizedProps;
        if (ol(y, l) && n.ref === r.ref) if (Jt = !1, r.pendingProps = l = y, (n.lanes & c) !== 0) (n.flags & 131072) !== 0 && (Jt = !0);
        else return r.lanes = n.lanes, ti(n, r, c);
      }
      return zr(n, r, o, l, c);
    }
    function St(n, r, o) {
      var l = r.pendingProps, c = l.children, y = n !== null ? n.memoizedState : null;
      if (l.mode === "hidden") if ((r.mode & 1) === 0) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, tt(Ti, Zt), Zt |= o;
      else {
        if ((o & 1073741824) === 0) return n = y !== null ? y.baseLanes | o : o, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, tt(Ti, Zt), Zt |= n, null;
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, l = y !== null ? y.baseLanes : o, tt(Ti, Zt), Zt |= l;
      }
      else y !== null ? (l = y.baseLanes | o, r.memoizedState = null) : l = o, tt(Ti, Zt), Zt |= l;
      return an(n, r, c, o), r.child;
    }
    function yt(n, r) {
      var o = r.ref;
      (n === null && o !== null || n !== null && n.ref !== o) && (r.flags |= 512, r.flags |= 2097152);
    }
    function zr(n, r, o, l, c) {
      var y = on(o) ? Lr : wn.current;
      return y = Xr(r, y), Ro(r, c), o = xs(n, r, o, l, y, c), l = fl(), n !== null && !Jt ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, ti(n, r, c)) : (kt && l && gs(r), r.flags |= 1, an(n, r, o, c), r.child);
    }
    function mn(n, r, o, l, c) {
      if (on(o)) {
        var y = !0;
        vo(r);
      } else y = !1;
      if (Ro(r, c), r.stateNode === null) Ts(n, r), cc(r, o, l), Ir(r, o, l, c), l = !0;
      else if (n === null) {
        var V = r.stateNode, ie = r.memoizedProps;
        V.props = ie;
        var fe = V.context, we = o.contextType;
        typeof we == "object" && we !== null ? we = er(we) : (we = on(o) ? Lr : wn.current, we = Xr(r, we));
        var Le = o.getDerivedStateFromProps, qe = typeof Le == "function" || typeof V.getSnapshotBeforeUpdate == "function";
        qe || typeof V.UNSAFE_componentWillReceiveProps != "function" && typeof V.componentWillReceiveProps != "function" || (ie !== l || fe !== we) && Sl(r, V, l, we), tr = !1;
        var Te = r.memoizedState;
        V.state = Te, mi(r, l, V, c), fe = r.memoizedState, ie !== l || Te !== fe || jn.current || tr ? (typeof Le == "function" && (wa(r, o, Le, l), fe = r.memoizedState), (ie = tr || uc(r, o, ie, l, Te, fe, we)) ? (qe || typeof V.UNSAFE_componentWillMount != "function" && typeof V.componentWillMount != "function" || (typeof V.componentWillMount == "function" && V.componentWillMount(), typeof V.UNSAFE_componentWillMount == "function" && V.UNSAFE_componentWillMount()), typeof V.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof V.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = l, r.memoizedState = fe), V.props = l, V.state = fe, V.context = we, l = ie) : (typeof V.componentDidMount == "function" && (r.flags |= 4194308), l = !1);
      } else {
        V = r.stateNode, rc(n, r), ie = r.memoizedProps, we = r.type === r.elementType ? ie : rr(r.type, ie), V.props = we, qe = r.pendingProps, Te = V.context, fe = o.contextType, typeof fe == "object" && fe !== null ? fe = er(fe) : (fe = on(o) ? Lr : wn.current, fe = Xr(r, fe));
        var xt = o.getDerivedStateFromProps;
        (Le = typeof xt == "function" || typeof V.getSnapshotBeforeUpdate == "function") || typeof V.UNSAFE_componentWillReceiveProps != "function" && typeof V.componentWillReceiveProps != "function" || (ie !== qe || Te !== fe) && Sl(r, V, l, fe), tr = !1, Te = r.memoizedState, V.state = Te, mi(r, l, V, c);
        var gt = r.memoizedState;
        ie !== qe || Te !== gt || jn.current || tr ? (typeof xt == "function" && (wa(r, o, xt, l), gt = r.memoizedState), (we = tr || uc(r, o, we, l, Te, gt, fe) || !1) ? (Le || typeof V.UNSAFE_componentWillUpdate != "function" && typeof V.componentWillUpdate != "function" || (typeof V.componentWillUpdate == "function" && V.componentWillUpdate(l, gt, fe), typeof V.UNSAFE_componentWillUpdate == "function" && V.UNSAFE_componentWillUpdate(l, gt, fe)), typeof V.componentDidUpdate == "function" && (r.flags |= 4), typeof V.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof V.componentDidUpdate != "function" || ie === n.memoizedProps && Te === n.memoizedState || (r.flags |= 4), typeof V.getSnapshotBeforeUpdate != "function" || ie === n.memoizedProps && Te === n.memoizedState || (r.flags |= 1024), r.memoizedProps = l, r.memoizedState = gt), V.props = l, V.state = gt, V.context = fe, l = we) : (typeof V.componentDidUpdate != "function" || ie === n.memoizedProps && Te === n.memoizedState || (r.flags |= 4), typeof V.getSnapshotBeforeUpdate != "function" || ie === n.memoizedProps && Te === n.memoizedState || (r.flags |= 1024), l = !1);
      }
      return xn(n, r, o, l, y, c);
    }
    function xn(n, r, o, l, c, y) {
      yt(n, r);
      var V = (r.flags & 128) !== 0;
      if (!l && !V) return c && bl(r, o, !1), ti(n, r, y);
      l = r.stateNode, Rs.current = r;
      var ie = V && typeof o.getDerivedStateFromError != "function" ? null : l.render();
      return r.flags |= 1, n !== null && V ? (r.child = Hi(r, n.child, null, y), r.child = Hi(r, null, ie, y)) : an(n, r, ie, y), r.memoizedState = l.state, c && bl(r, o, !0), r.child;
    }
    function Ci(n) {
      var r = n.stateNode;
      r.pendingContext ? Hu(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Hu(n, r.context, !1), cl(n, r.containerInfo);
    }
    function eo(n, r, o, l, c) {
      return Bi(), ea(c), r.flags |= 256, an(n, r, o, l), r.child;
    }
    var Cn = { dehydrated: null, treeContext: null, retryLane: 0 };
    function Oo(n) {
      return { baseLanes: n, cachePool: null, transitions: null };
    }
    function xa(n, r, o) {
      var l = r.pendingProps, c = At.current, y = !1, V = (r.flags & 128) !== 0, ie;
      if ((ie = V) || (ie = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), ie ? (y = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), tt(At, c & 1), n === null)
        return $l(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? ((r.mode & 1) === 0 ? r.lanes = 1 : Ii(n) ? r.lanes = 8 : r.lanes = 1073741824, null) : (V = l.children, n = l.fallback, y ? (l = r.mode, y = r.child, V = { mode: "hidden", children: V }, (l & 1) === 0 && y !== null ? (y.childLanes = 0, y.pendingProps = V) : y = Qo(V, l, 0, null), n = yn(n, l, o, null), y.return = r, n.return = r, y.sibling = n, r.child = y, r.child.memoizedState = Oo(o), r.memoizedState = Cn, n) : Cl(r, V));
      if (c = n.memoizedState, c !== null && (ie = c.dehydrated, ie !== null)) return hc(n, r, V, l, ie, c, o);
      if (y) {
        y = l.fallback, V = r.mode, c = n.child, ie = c.sibling;
        var fe = { mode: "hidden", children: l.children };
        return (V & 1) === 0 && r.child !== c ? (l = r.child, l.childLanes = 0, l.pendingProps = fe, r.deletions = null) : (l = Li(c, fe), l.subtreeFlags = c.subtreeFlags & 14680064), ie !== null ? y = Li(ie, y) : (y = yn(y, V, o, null), y.flags |= 2), y.return = r, l.return = r, l.sibling = y, r.child = l, l = y, y = r.child, V = n.child.memoizedState, V = V === null ? Oo(o) : { baseLanes: V.baseLanes | o, cachePool: null, transitions: V.transitions }, y.memoizedState = V, y.childLanes = n.childLanes & ~o, r.memoizedState = Cn, l;
      }
      return y = n.child, n = y.sibling, l = Li(y, { mode: "visible", children: l.children }), (r.mode & 1) === 0 && (l.lanes = o), l.return = r, l.sibling = null, n !== null && (o = r.deletions, o === null ? (r.deletions = [n], r.flags |= 16) : o.push(n)), r.child = l, r.memoizedState = null, l;
    }
    function Cl(n, r) {
      return r = Qo({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
    }
    function to(n, r, o, l) {
      return l !== null && ea(l), Hi(r, n.child, null, o), n = Cl(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
    }
    function hc(n, r, o, l, c, y, V) {
      if (o)
        return r.flags & 256 ? (r.flags &= -257, l = wi(Error(h(422))), to(n, r, V, l)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (y = l.fallback, c = r.mode, l = Qo({ mode: "visible", children: l.children }, c, 0, null), y = yn(y, c, V, null), y.flags |= 2, l.return = r, y.return = r, l.sibling = y, r.child = l, (r.mode & 1) !== 0 && Hi(r, n.child, null, V), r.child.memoizedState = Oo(V), r.memoizedState = Cn, y);
      if ((r.mode & 1) === 0) return to(n, r, V, null);
      if (Ii(c)) return l = Ys(c).digest, y = Error(h(419)), l = wi(
        y,
        l,
        void 0
      ), to(n, r, V, l);
      if (o = (V & n.childLanes) !== 0, Jt || o) {
        if (l = vt, l !== null) {
          switch (V & -V) {
            case 4:
              c = 2;
              break;
            case 16:
              c = 8;
              break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              c = 32;
              break;
            case 536870912:
              c = 268435456;
              break;
            default:
              c = 0;
          }
          c = (c & (l.suspendedLanes | V)) !== 0 ? 0 : c, c !== 0 && c !== y.retryLane && (y.retryLane = c, Tr(n, c), En(
            l,
            n,
            c,
            -1
          ));
        }
        return Ko(), l = wi(Error(h(421))), to(n, r, V, l);
      }
      return Iu(c) ? (r.flags |= 128, r.child = n.child, r = wc.bind(null, n), Ks(c, r), null) : (n = y.treeContext, Ge && (An = od(c), pn = r, kt = !0, Rr = null, ys = !1, n !== null && (Ln[$n++] = qn, Ln[$n++] = Er, Ln[$n++] = Qt, qn = n.id, Er = n.overflow, Qt = r)), r = Cl(r, l.children), r.flags |= 4096, r);
    }
    function Gr(n, r, o) {
      n.lanes |= r;
      var l = n.alternate;
      l !== null && (l.lanes |= r), ji(n.return, r, o);
    }
    function Io(n, r, o, l, c) {
      var y = n.memoizedState;
      y === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: l, tail: o, tailMode: c } : (y.isBackwards = r, y.rendering = null, y.renderingStartTime = 0, y.last = l, y.tail = o, y.tailMode = c);
    }
    function kl(n, r, o) {
      var l = r.pendingProps, c = l.revealOrder, y = l.tail;
      if (an(n, r, l.children, o), l = At.current, (l & 2) !== 0) l = l & 1 | 2, r.flags |= 128;
      else {
        if (n !== null && (n.flags & 128) !== 0) e: for (n = r.child; n !== null; ) {
          if (n.tag === 13) n.memoizedState !== null && Gr(n, o, r);
          else if (n.tag === 19) Gr(n, o, r);
          else if (n.child !== null) {
            n.child.return = n, n = n.child;
            continue;
          }
          if (n === r) break e;
          for (; n.sibling === null; ) {
            if (n.return === null || n.return === r) break e;
            n = n.return;
          }
          n.sibling.return = n.return, n = n.sibling;
        }
        l &= 1;
      }
      if (tt(At, l), (r.mode & 1) === 0) r.memoizedState = null;
      else switch (c) {
        case "forwards":
          for (o = r.child, c = null; o !== null; ) n = o.alternate, n !== null && dl(n) === null && (c = o), o = o.sibling;
          o = c, o === null ? (c = r.child, r.child = null) : (c = o.sibling, o.sibling = null), Io(r, !1, c, o, y);
          break;
        case "backwards":
          for (o = null, c = r.child, r.child = null; c !== null; ) {
            if (n = c.alternate, n !== null && dl(n) === null) {
              r.child = c;
              break;
            }
            n = c.sibling, c.sibling = o, o = c, c = n;
          }
          Io(r, !0, o, null, y);
          break;
        case "together":
          Io(r, !1, null, null, void 0);
          break;
        default:
          r.memoizedState = null;
      }
      return r.child;
    }
    function Ts(n, r) {
      (r.mode & 1) === 0 && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
    }
    function ti(n, r, o) {
      if (n !== null && (r.dependencies = n.dependencies), ri |= r.lanes, (o & r.childLanes) === 0) return null;
      if (n !== null && r.child !== n.child) throw Error(h(153));
      if (r.child !== null) {
        for (n = r.child, o = Li(n, n.pendingProps), r.child = o, o.return = r; n.sibling !== null; ) n = n.sibling, o = o.sibling = Li(n, n.pendingProps), o.return = r;
        o.sibling = null;
      }
      return r.child;
    }
    function ki(n, r, o) {
      switch (r.tag) {
        case 3:
          Ci(r), Bi();
          break;
        case 5:
          oa(r);
          break;
        case 1:
          on(r.type) && vo(r);
          break;
        case 4:
          cl(r, r.stateNode.containerInfo);
          break;
        case 10:
          nc(r, r.type._context, r.memoizedProps.value);
          break;
        case 13:
          var l = r.memoizedState;
          if (l !== null)
            return l.dehydrated !== null ? (tt(At, At.current & 1), r.flags |= 128, null) : (o & r.child.childLanes) !== 0 ? xa(n, r, o) : (tt(At, At.current & 1), n = ti(n, r, o), n !== null ? n.sibling : null);
          tt(At, At.current & 1);
          break;
        case 19:
          if (l = (o & r.childLanes) !== 0, (n.flags & 128) !== 0) {
            if (l) return kl(
              n,
              r,
              o
            );
            r.flags |= 128;
          }
          var c = r.memoizedState;
          if (c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), tt(At, At.current), l) break;
          return null;
        case 22:
        case 23:
          return r.lanes = 0, St(n, r, o);
      }
      return ti(n, r, o);
    }
    function On(n) {
      n.flags |= 4;
    }
    function no(n, r) {
      if (n !== null && n.child === r.child) return !0;
      if ((r.flags & 16) !== 0) return !1;
      for (n = r.child; n !== null; ) {
        if ((n.flags & 12854) !== 0 || (n.subtreeFlags & 12854) !== 0) return !1;
        n = n.sibling;
      }
      return !0;
    }
    var Ei, Pi, In, Dn;
    if (Pe) Ei = function(n, r) {
      for (var o = r.child; o !== null; ) {
        if (o.tag === 5 || o.tag === 6) X(n, o.stateNode);
        else if (o.tag !== 4 && o.child !== null) {
          o.child.return = o, o = o.child;
          continue;
        }
        if (o === r) break;
        for (; o.sibling === null; ) {
          if (o.return === null || o.return === r) return;
          o = o.return;
        }
        o.sibling.return = o.return, o = o.sibling;
      }
    }, Pi = function() {
    }, In = function(n, r, o, l, c) {
      if (n = n.memoizedProps, n !== l) {
        var y = r.stateNode, V = gr(pr.current);
        o = ue(y, o, n, l, c, V), (r.updateQueue = o) && On(r);
      }
    }, Dn = function(n, r, o, l) {
      o !== l && On(r);
    };
    else if (Be) {
      Ei = function(n, r, o, l) {
        for (var c = r.child; c !== null; ) {
          if (c.tag === 5) {
            var y = c.stateNode;
            o && l && (y = go(y, c.type, c.memoizedProps, c)), X(n, y);
          } else if (c.tag === 6) y = c.stateNode, o && l && (y = as(y, c.memoizedProps, c)), X(n, y);
          else if (c.tag !== 4) {
            if (c.tag === 22 && c.memoizedState !== null) y = c.child, y !== null && (y.return = c), Ei(n, c, !0, !0);
            else if (c.child !== null) {
              c.child.return = c, c = c.child;
              continue;
            }
          }
          if (c === r) break;
          for (; c.sibling === null; ) {
            if (c.return === null || c.return === r) return;
            c = c.return;
          }
          c.sibling.return = c.return, c = c.sibling;
        }
      };
      var Ri = function(n, r, o, l) {
        for (var c = r.child; c !== null; ) {
          if (c.tag === 5) {
            var y = c.stateNode;
            o && l && (y = go(y, c.type, c.memoizedProps, c)), ci(n, y);
          } else if (c.tag === 6) y = c.stateNode, o && l && (y = as(y, c.memoizedProps, c)), ci(n, y);
          else if (c.tag !== 4) {
            if (c.tag === 22 && c.memoizedState !== null) y = c.child, y !== null && (y.return = c), Ri(n, c, !0, !0);
            else if (c.child !== null) {
              c.child.return = c, c = c.child;
              continue;
            }
          }
          if (c === r) break;
          for (; c.sibling === null; ) {
            if (c.return === null || c.return === r) return;
            c = c.return;
          }
          c.sibling.return = c.return, c = c.sibling;
        }
      };
      Pi = function(n, r) {
        var o = r.stateNode;
        if (!no(n, r)) {
          n = o.containerInfo;
          var l = ui(n);
          Ri(l, r, !1, !1), o.pendingChildren = l, On(r), qs(n, l);
        }
      }, In = function(n, r, o, l, c) {
        var y = n.stateNode, V = n.memoizedProps;
        if ((n = no(n, r)) && V === l) r.stateNode = y;
        else {
          var ie = r.stateNode, fe = gr(pr.current), we = null;
          V !== l && (we = ue(ie, o, V, l, c, fe)), n && we === null ? r.stateNode = y : (y = Oi(y, we, o, V, l, r, n, ie), J(y, o, l, c, fe) && On(r), r.stateNode = y, n ? On(r) : Ei(y, r, !1, !1));
        }
      }, Dn = function(n, r, o, l) {
        o !== l ? (n = gr(vi.current), o = gr(pr.current), r.stateNode = se(l, n, o, r), On(r)) : r.stateNode = n.stateNode;
      };
    } else Pi = function() {
    }, In = function() {
    }, Dn = function() {
    };
    function ir(n, r) {
      if (!kt) switch (n.tailMode) {
        case "hidden":
          r = n.tail;
          for (var o = null; r !== null; ) r.alternate !== null && (o = r), r = r.sibling;
          o === null ? n.tail = null : o.sibling = null;
          break;
        case "collapsed":
          o = n.tail;
          for (var l = null; o !== null; ) o.alternate !== null && (l = o), o = o.sibling;
          l === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : l.sibling = null;
      }
    }
    function Nt(n) {
      var r = n.alternate !== null && n.alternate.child === n.child, o = 0, l = 0;
      if (r) for (var c = n.child; c !== null; ) o |= c.lanes | c.childLanes, l |= c.subtreeFlags & 14680064, l |= c.flags & 14680064, c.return = n, c = c.sibling;
      else for (c = n.child; c !== null; ) o |= c.lanes | c.childLanes, l |= c.subtreeFlags, l |= c.flags, c.return = n, c = c.sibling;
      return n.subtreeFlags |= l, n.childLanes = o, r;
    }
    function ro(n, r, o) {
      var l = r.pendingProps;
      switch (ms(r), r.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return Nt(r), null;
        case 1:
          return on(r.type) && Gi(), Nt(r), null;
        case 3:
          return o = r.stateNode, Wi(), Ct(jn), Ct(wn), aa(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (il(r) ? On(r) : n === null || n.memoizedState.isDehydrated && (r.flags & 256) === 0 || (r.flags |= 1024, Rr !== null && (Dl(Rr), Rr = null))), Pi(n, r), Nt(r), null;
        case 5:
          sa(r), o = gr(vi.current);
          var c = r.type;
          if (n !== null && r.stateNode != null) In(n, r, c, l, o), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
          else {
            if (!l) {
              if (r.stateNode === null) throw Error(h(166));
              return Nt(r), null;
            }
            if (n = gr(pr.current), il(r)) {
              if (!Ge) throw Error(h(175));
              n = Di(r.stateNode, r.type, r.memoizedProps, o, n, r, !ys), r.updateQueue = n, n !== null && On(r);
            } else {
              var y = L(c, l, o, n, r);
              Ei(y, r, !1, !1), r.stateNode = y, J(y, c, l, o, n) && On(r);
            }
            r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
          }
          return Nt(r), null;
        case 6:
          if (n && r.stateNode != null) Dn(n, r, n.memoizedProps, l);
          else {
            if (typeof l != "string" && r.stateNode === null) throw Error(h(166));
            if (n = gr(vi.current), o = gr(pr.current), il(r)) {
              if (!Ge) throw Error(h(176));
              if (n = r.stateNode, o = r.memoizedProps, (l = Du(n, o, r, !ys)) && (c = pn, c !== null)) switch (c.tag) {
                case 3:
                  ad(c.stateNode.containerInfo, n, o, (c.mode & 1) !== 0);
                  break;
                case 5:
                  Gt(c.type, c.memoizedProps, c.stateNode, n, o, (c.mode & 1) !== 0);
              }
              l && On(r);
            } else r.stateNode = se(l, n, o, r);
          }
          return Nt(r), null;
        case 13:
          if (Ct(At), l = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
            if (kt && An !== null && (r.mode & 1) !== 0 && (r.flags & 128) === 0) Zu(), Bi(), r.flags |= 98560, c = !1;
            else if (c = il(r), l !== null && l.dehydrated !== null) {
              if (n === null) {
                if (!c) throw Error(h(318));
                if (!Ge) throw Error(h(344));
                if (c = r.memoizedState, c = c !== null ? c.dehydrated : null, !c) throw Error(h(317));
                zu(c, r);
              } else Bi(), (r.flags & 128) === 0 && (r.memoizedState = null), r.flags |= 4;
              Nt(r), c = !1;
            } else Rr !== null && (Dl(Rr), Rr = null), c = !0;
            if (!c) return r.flags & 65536 ? r : null;
          }
          return (r.flags & 128) !== 0 ? (r.lanes = o, r) : (o = l !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, (r.mode & 1) !== 0 && (n === null || (At.current & 1) !== 0 ? Mt === 0 && (Mt = 3) : Ko())), r.updateQueue !== null && (r.flags |= 4), Nt(r), null);
        case 4:
          return Wi(), Pi(n, r), n === null && je(r.stateNode.containerInfo), Nt(r), null;
        case 10:
          return vs(r.type._context), Nt(r), null;
        case 17:
          return on(r.type) && Gi(), Nt(r), null;
        case 19:
          if (Ct(At), c = r.memoizedState, c === null) return Nt(r), null;
          if (l = (r.flags & 128) !== 0, y = c.rendering, y === null) if (l) ir(c, !1);
          else {
            if (Mt !== 0 || n !== null && (n.flags & 128) !== 0) for (n = r.child; n !== null; ) {
              if (y = dl(n), y !== null) {
                for (r.flags |= 128, ir(c, !1), n = y.updateQueue, n !== null && (r.updateQueue = n, r.flags |= 4), r.subtreeFlags = 0, n = o, o = r.child; o !== null; ) l = o, c = n, l.flags &= 14680066, y = l.alternate, y === null ? (l.childLanes = 0, l.lanes = c, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = y.childLanes, l.lanes = y.lanes, l.child = y.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = y.memoizedProps, l.memoizedState = y.memoizedState, l.updateQueue = y.updateQueue, l.type = y.type, c = y.dependencies, l.dependencies = c === null ? null : { lanes: c.lanes, firstContext: c.firstContext }), o = o.sibling;
                return tt(At, At.current & 1 | 2), r.child;
              }
              n = n.sibling;
            }
            c.tail !== null && sn() > Is && (r.flags |= 128, l = !0, ir(c, !1), r.lanes = 4194304);
          }
          else {
            if (!l) if (n = dl(y), n !== null) {
              if (r.flags |= 128, l = !0, n = n.updateQueue, n !== null && (r.updateQueue = n, r.flags |= 4), ir(c, !0), c.tail === null && c.tailMode === "hidden" && !y.alternate && !kt) return Nt(r), null;
            } else 2 * sn() - c.renderingStartTime > Is && o !== 1073741824 && (r.flags |= 128, l = !0, ir(c, !1), r.lanes = 4194304);
            c.isBackwards ? (y.sibling = r.child, r.child = y) : (n = c.last, n !== null ? n.sibling = y : r.child = y, c.last = y);
          }
          return c.tail !== null ? (r = c.tail, c.rendering = r, c.tail = r.sibling, c.renderingStartTime = sn(), r.sibling = null, n = At.current, tt(At, l ? n & 1 | 2 : n & 1), r) : (Nt(r), null);
        case 22:
        case 23:
          return zl(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && (r.mode & 1) !== 0 ? (Zt & 1073741824) !== 0 && (Nt(r), Pe && r.subtreeFlags & 6 && (r.flags |= 8192)) : Nt(r), null;
        case 24:
          return null;
        case 25:
          return null;
      }
      throw Error(h(
        156,
        r.tag
      ));
    }
    function pc(n, r) {
      switch (ms(r), r.tag) {
        case 1:
          return on(r.type) && Gi(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
        case 3:
          return Wi(), Ct(jn), Ct(wn), aa(), n = r.flags, (n & 65536) !== 0 && (n & 128) === 0 ? (r.flags = n & -65537 | 128, r) : null;
        case 5:
          return sa(r), null;
        case 13:
          if (Ct(At), n = r.memoizedState, n !== null && n.dehydrated !== null) {
            if (r.alternate === null) throw Error(h(340));
            Bi();
          }
          return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
        case 19:
          return Ct(At), null;
        case 4:
          return Wi(), null;
        case 10:
          return vs(r.type._context), null;
        case 22:
        case 23:
          return zl(), null;
        case 24:
          return null;
        default:
          return null;
      }
    }
    var Do = !1, un = !1, or = typeof WeakSet == "function" ? WeakSet : Set, Ee = null;
    function pt(n, r) {
      var o = n.ref;
      if (o !== null) if (typeof o == "function") try {
        o(null);
      } catch (l) {
        Pt(n, r, l);
      }
      else o.current = null;
    }
    function sr(n, r, o) {
      try {
        o();
      } catch (l) {
        Pt(n, r, l);
      }
    }
    var Ca = !1;
    function gc(n, r) {
      for (W(n.containerInfo), Ee = r; Ee !== null; ) if (n = Ee, r = n.child, (n.subtreeFlags & 1028) !== 0 && r !== null) r.return = n, Ee = r;
      else for (; Ee !== null; ) {
        n = Ee;
        try {
          var o = n.alternate;
          if ((n.flags & 1024) !== 0) switch (n.tag) {
            case 0:
            case 11:
            case 15:
              break;
            case 1:
              if (o !== null) {
                var l = o.memoizedProps, c = o.memoizedState, y = n.stateNode, V = y.getSnapshotBeforeUpdate(n.elementType === n.type ? l : rr(n.type, l), c);
                y.__reactInternalSnapshotBeforeUpdate = V;
              }
              break;
            case 3:
              Pe && rn(n.stateNode.containerInfo);
              break;
            case 5:
            case 6:
            case 4:
            case 17:
              break;
            default:
              throw Error(h(163));
          }
        } catch (ie) {
          Pt(n, n.return, ie);
        }
        if (r = n.sibling, r !== null) {
          r.return = n.return, Ee = r;
          break;
        }
        Ee = n.return;
      }
      return o = Ca, Ca = !1, o;
    }
    function io(n, r, o) {
      var l = r.updateQueue;
      if (l = l !== null ? l.lastEffect : null, l !== null) {
        var c = l = l.next;
        do {
          if ((c.tag & n) === n) {
            var y = c.destroy;
            c.destroy = void 0, y !== void 0 && sr(r, o, y);
          }
          c = c.next;
        } while (c !== l);
      }
    }
    function zo(n, r) {
      if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
        var o = r = r.next;
        do {
          if ((o.tag & n) === n) {
            var l = o.create;
            o.destroy = l();
          }
          o = o.next;
        } while (o !== r);
      }
    }
    function El(n) {
      var r = n.ref;
      if (r !== null) {
        var o = n.stateNode;
        switch (n.tag) {
          case 5:
            n = pe(o);
            break;
          default:
            n = o;
        }
        typeof r == "function" ? r(n) : r.current = n;
      }
    }
    function Ns(n) {
      var r = n.alternate;
      r !== null && (n.alternate = null, Ns(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && st(r)), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
    }
    function ka(n) {
      return n.tag === 5 || n.tag === 3 || n.tag === 4;
    }
    function oo(n) {
      e: for (; ; ) {
        for (; n.sibling === null; ) {
          if (n.return === null || ka(n.return)) return null;
          n = n.return;
        }
        for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
          if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
          n.child.return = n, n = n.child;
        }
        if (!(n.flags & 2)) return n.stateNode;
      }
    }
    function Fs(n, r, o) {
      var l = n.tag;
      if (l === 5 || l === 6) n = n.stateNode, r ? ke(o, n, r) : _n(o, n);
      else if (l !== 4 && (n = n.child, n !== null)) for (Fs(n, r, o), n = n.sibling; n !== null; ) Fs(n, r, o), n = n.sibling;
    }
    function Ea(n, r, o) {
      var l = n.tag;
      if (l === 5 || l === 6) n = n.stateNode, r ? ye(o, n, r) : Xt(o, n);
      else if (l !== 4 && (n = n.child, n !== null)) for (Ea(n, r, o), n = n.sibling; n !== null; ) Ea(n, r, o), n = n.sibling;
    }
    var Ut = null, Kn = !1;
    function Nr(n, r, o) {
      for (o = o.child; o !== null; ) Pl(n, r, o), o = o.sibling;
    }
    function Pl(n, r, o) {
      if (Wn && typeof Wn.onCommitFiberUnmount == "function") try {
        Wn.onCommitFiberUnmount(hi, o);
      } catch {
      }
      switch (o.tag) {
        case 5:
          un || pt(o, r);
        case 6:
          if (Pe) {
            var l = Ut, c = Kn;
            Ut = null, Nr(n, r, o), Ut = l, Kn = c, Ut !== null && (Kn ? Re(Ut, o.stateNode) : Ne(Ut, o.stateNode));
          } else Nr(n, r, o);
          break;
        case 18:
          Pe && Ut !== null && (Kn ? Vu(Ut, o.stateNode) : Bu(Ut, o.stateNode));
          break;
        case 4:
          Pe ? (l = Ut, c = Kn, Ut = o.stateNode.containerInfo, Kn = !0, Nr(n, r, o), Ut = l, Kn = c) : (Be && (l = o.stateNode.containerInfo, c = ui(l), po(l, c)), Nr(n, r, o));
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          if (!un && (l = o.updateQueue, l !== null && (l = l.lastEffect, l !== null))) {
            c = l = l.next;
            do {
              var y = c, V = y.destroy;
              y = y.tag, V !== void 0 && ((y & 2) !== 0 || (y & 4) !== 0) && sr(o, r, V), c = c.next;
            } while (c !== l);
          }
          Nr(n, r, o);
          break;
        case 1:
          if (!un && (pt(o, r), l = o.stateNode, typeof l.componentWillUnmount == "function")) try {
            l.props = o.memoizedProps, l.state = o.memoizedState, l.componentWillUnmount();
          } catch (ie) {
            Pt(o, r, ie);
          }
          Nr(n, r, o);
          break;
        case 21:
          Nr(n, r, o);
          break;
        case 22:
          o.mode & 1 ? (un = (l = un) || o.memoizedState !== null, Nr(n, r, o), un = l) : Nr(n, r, o);
          break;
        default:
          Nr(
            n,
            r,
            o
          );
      }
    }
    function so(n) {
      var r = n.updateQueue;
      if (r !== null) {
        n.updateQueue = null;
        var o = n.stateNode;
        o === null && (o = n.stateNode = new or()), r.forEach(function(l) {
          var c = gd.bind(null, n, l);
          o.has(l) || (o.add(l), l.then(c, c));
        });
      }
    }
    function yr(n, r) {
      var o = r.deletions;
      if (o !== null) for (var l = 0; l < o.length; l++) {
        var c = o[l];
        try {
          var y = n, V = r;
          if (Pe) {
            var ie = V;
            e: for (; ie !== null; ) {
              switch (ie.tag) {
                case 5:
                  Ut = ie.stateNode, Kn = !1;
                  break e;
                case 3:
                  Ut = ie.stateNode.containerInfo, Kn = !0;
                  break e;
                case 4:
                  Ut = ie.stateNode.containerInfo, Kn = !0;
                  break e;
              }
              ie = ie.return;
            }
            if (Ut === null) throw Error(h(160));
            Pl(y, V, c), Ut = null, Kn = !1;
          } else Pl(y, V, c);
          var fe = c.alternate;
          fe !== null && (fe.return = null), c.return = null;
        } catch (we) {
          Pt(c, r, we);
        }
      }
      if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) Ms(r, n), r = r.sibling;
    }
    function Ms(n, r) {
      var o = n.alternate, l = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          if (yr(r, n), lr(n), l & 4) {
            try {
              io(3, n, n.return), zo(3, n);
            } catch (Te) {
              Pt(n, n.return, Te);
            }
            try {
              io(5, n, n.return);
            } catch (Te) {
              Pt(n, n.return, Te);
            }
          }
          break;
        case 1:
          yr(r, n), lr(n), l & 512 && o !== null && pt(o, o.return);
          break;
        case 5:
          if (yr(r, n), lr(n), l & 512 && o !== null && pt(o, o.return), Pe) {
            if (n.flags & 32) {
              var c = n.stateNode;
              try {
                $e(c);
              } catch (Te) {
                Pt(n, n.return, Te);
              }
            }
            if (l & 4 && (c = n.stateNode, c != null)) {
              var y = n.memoizedProps;
              if (o = o !== null ? o.memoizedProps : y, l = n.type, r = n.updateQueue, n.updateQueue = null, r !== null) try {
                Yr(c, r, l, o, y, n);
              } catch (Te) {
                Pt(n, n.return, Te);
              }
            }
          }
          break;
        case 6:
          if (yr(r, n), lr(n), l & 4 && Pe) {
            if (n.stateNode === null) throw Error(h(162));
            c = n.stateNode, y = n.memoizedProps, o = o !== null ? o.memoizedProps : y;
            try {
              Ot(c, o, y);
            } catch (Te) {
              Pt(n, n.return, Te);
            }
          }
          break;
        case 3:
          if (yr(r, n), lr(n), l & 4) {
            if (Pe && Ge && o !== null && o.memoizedState.isDehydrated) try {
              Gu(r.containerInfo);
            } catch (Te) {
              Pt(n, n.return, Te);
            }
            if (Be) {
              c = r.containerInfo, y = r.pendingChildren;
              try {
                po(c, y);
              } catch (Te) {
                Pt(n, n.return, Te);
              }
            }
          }
          break;
        case 4:
          if (yr(
            r,
            n
          ), lr(n), l & 4 && Be) {
            y = n.stateNode, c = y.containerInfo, y = y.pendingChildren;
            try {
              po(c, y);
            } catch (Te) {
              Pt(n, n.return, Te);
            }
          }
          break;
        case 13:
          yr(r, n), lr(n), c = n.child, c.flags & 8192 && (y = c.memoizedState !== null, c.stateNode.isHidden = y, !y || c.alternate !== null && c.alternate.memoizedState !== null || (jo = sn())), l & 4 && so(n);
          break;
        case 22:
          var V = o !== null && o.memoizedState !== null;
          if (n.mode & 1 ? (un = (o = un) || V, yr(r, n), un = o) : yr(r, n), lr(n), l & 8192) {
            if (o = n.memoizedState !== null, (n.stateNode.isHidden = o) && !V && (n.mode & 1) !== 0) for (Ee = n, l = n.child; l !== null; ) {
              for (r = Ee = l; Ee !== null; ) {
                V = Ee;
                var ie = V.child;
                switch (V.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    io(4, V, V.return);
                    break;
                  case 1:
                    pt(V, V.return);
                    var fe = V.stateNode;
                    if (typeof fe.componentWillUnmount == "function") {
                      var we = V, Le = V.return;
                      try {
                        var qe = we;
                        fe.props = qe.memoizedProps, fe.state = qe.memoizedState, fe.componentWillUnmount();
                      } catch (Te) {
                        Pt(we, Le, Te);
                      }
                    }
                    break;
                  case 5:
                    pt(V, V.return);
                    break;
                  case 22:
                    if (V.memoizedState !== null) {
                      Nl(r);
                      continue;
                    }
                }
                ie !== null ? (ie.return = V, Ee = ie) : Nl(r);
              }
              l = l.sibling;
            }
            if (Pe) {
              e: if (l = null, Pe) for (r = n; ; ) {
                if (r.tag === 5) {
                  if (l === null) {
                    l = r;
                    try {
                      c = r.stateNode, o ? Ze(c) : Jn(r.stateNode, r.memoizedProps);
                    } catch (Te) {
                      Pt(n, n.return, Te);
                    }
                  }
                } else if (r.tag === 6) {
                  if (l === null) try {
                    y = r.stateNode, o ? It(y) : Sn(y, r.memoizedProps);
                  } catch (Te) {
                    Pt(n, n.return, Te);
                  }
                } else if ((r.tag !== 22 && r.tag !== 23 || r.memoizedState === null || r === n) && r.child !== null) {
                  r.child.return = r, r = r.child;
                  continue;
                }
                if (r === n) break e;
                for (; r.sibling === null; ) {
                  if (r.return === null || r.return === n) break e;
                  l === r && (l = null), r = r.return;
                }
                l === r && (l = null), r.sibling.return = r.return, r = r.sibling;
              }
            }
          }
          break;
        case 19:
          yr(r, n), lr(n), l & 4 && so(n);
          break;
        case 21:
          break;
        default:
          yr(r, n), lr(n);
      }
    }
    function lr(n) {
      var r = n.flags;
      if (r & 2) {
        try {
          if (Pe) {
            e: {
              for (var o = n.return; o !== null; ) {
                if (ka(o)) {
                  var l = o;
                  break e;
                }
                o = o.return;
              }
              throw Error(h(160));
            }
            switch (l.tag) {
              case 5:
                var c = l.stateNode;
                l.flags & 32 && ($e(c), l.flags &= -33);
                var y = oo(n);
                Ea(n, y, c);
                break;
              case 3:
              case 4:
                var V = l.stateNode.containerInfo, ie = oo(n);
                Fs(n, ie, V);
                break;
              default:
                throw Error(h(161));
            }
          }
        } catch (fe) {
          Pt(n, n.return, fe);
        }
        n.flags &= -3;
      }
      r & 4096 && (n.flags &= -4097);
    }
    function Go(n, r, o) {
      Ee = n, Rl(n);
    }
    function Rl(n, r, o) {
      for (var l = (n.mode & 1) !== 0; Ee !== null; ) {
        var c = Ee, y = c.child;
        if (c.tag === 22 && l) {
          var V = c.memoizedState !== null || Do;
          if (!V) {
            var ie = c.alternate, fe = ie !== null && ie.memoizedState !== null || un;
            ie = Do;
            var we = un;
            if (Do = V, (un = fe) && !we) for (Ee = c; Ee !== null; ) V = Ee, fe = V.child, V.tag === 22 && V.memoizedState !== null ? Fl(c) : fe !== null ? (fe.return = V, Ee = fe) : Fl(c);
            for (; y !== null; ) Ee = y, Rl(y), y = y.sibling;
            Ee = c, Do = ie, un = we;
          }
          Tl(n);
        } else (c.subtreeFlags & 8772) !== 0 && y !== null ? (y.return = c, Ee = y) : Tl(n);
      }
    }
    function Tl(n) {
      for (; Ee !== null; ) {
        var r = Ee;
        if ((r.flags & 8772) !== 0) {
          var o = r.alternate;
          try {
            if ((r.flags & 8772) !== 0) switch (r.tag) {
              case 0:
              case 11:
              case 15:
                un || zo(5, r);
                break;
              case 1:
                var l = r.stateNode;
                if (r.flags & 4 && !un) if (o === null) l.componentDidMount();
                else {
                  var c = r.elementType === r.type ? o.memoizedProps : rr(r.type, o.memoizedProps);
                  l.componentDidUpdate(c, o.memoizedState, l.__reactInternalSnapshotBeforeUpdate);
                }
                var y = r.updateQueue;
                y !== null && ic(r, y, l);
                break;
              case 3:
                var V = r.updateQueue;
                if (V !== null) {
                  if (o = null, r.child !== null) switch (r.child.tag) {
                    case 5:
                      o = pe(r.child.stateNode);
                      break;
                    case 1:
                      o = r.child.stateNode;
                  }
                  ic(r, V, o);
                }
                break;
              case 5:
                var ie = r.stateNode;
                o === null && r.flags & 4 && Lt(ie, r.type, r.memoizedProps, r);
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (Ge && r.memoizedState === null) {
                  var fe = r.alternate;
                  if (fe !== null) {
                    var we = fe.memoizedState;
                    if (we !== null) {
                      var Le = we.dehydrated;
                      Le !== null && Uu(Le);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(h(163));
            }
            un || r.flags & 512 && El(r);
          } catch (qe) {
            Pt(r, r.return, qe);
          }
        }
        if (r === n) {
          Ee = null;
          break;
        }
        if (o = r.sibling, o !== null) {
          o.return = r.return, Ee = o;
          break;
        }
        Ee = r.return;
      }
    }
    function Nl(n) {
      for (; Ee !== null; ) {
        var r = Ee;
        if (r === n) {
          Ee = null;
          break;
        }
        var o = r.sibling;
        if (o !== null) {
          o.return = r.return, Ee = o;
          break;
        }
        Ee = r.return;
      }
    }
    function Fl(n) {
      for (; Ee !== null; ) {
        var r = Ee;
        try {
          switch (r.tag) {
            case 0:
            case 11:
            case 15:
              var o = r.return;
              try {
                zo(4, r);
              } catch (fe) {
                Pt(r, o, fe);
              }
              break;
            case 1:
              var l = r.stateNode;
              if (typeof l.componentDidMount == "function") {
                var c = r.return;
                try {
                  l.componentDidMount();
                } catch (fe) {
                  Pt(r, c, fe);
                }
              }
              var y = r.return;
              try {
                El(r);
              } catch (fe) {
                Pt(r, y, fe);
              }
              break;
            case 5:
              var V = r.return;
              try {
                El(r);
              } catch (fe) {
                Pt(r, V, fe);
              }
          }
        } catch (fe) {
          Pt(r, r.return, fe);
        }
        if (r === n) {
          Ee = null;
          break;
        }
        var ie = r.sibling;
        if (ie !== null) {
          ie.return = r.return, Ee = ie;
          break;
        }
        Ee = r.return;
      }
    }
    var ni = 0, zn = 1, Ur = 2, Uo = 3, Ls = 4;
    if (typeof Symbol == "function" && Symbol.for) {
      var ar = Symbol.for;
      ni = ar("selector.component"), zn = ar("selector.has_pseudo_class"), Ur = ar("selector.role"), Uo = ar("selector.test_id"), Ls = ar("selector.text");
    }
    function Br(n) {
      var r = be(n);
      if (r != null) {
        if (typeof r.memoizedProps["data-testname"] != "string") throw Error(h(364));
        return r;
      }
      if (n = Hn(n), n === null) throw Error(h(362));
      return n.stateNode.current;
    }
    function As(n, r) {
      switch (r.$$typeof) {
        case ni:
          if (n.type === r.value) return !0;
          break;
        case zn:
          e: {
            r = r.value, n = [n, 0];
            for (var o = 0; o < n.length; ) {
              var l = n[o++], c = n[o++], y = r[c];
              if (l.tag !== 5 || !Vt(l)) {
                for (; y != null && As(l, y); ) c++, y = r[c];
                if (c === r.length) {
                  r = !0;
                  break e;
                } else for (l = l.child; l !== null; ) n.push(l, c), l = l.sibling;
              }
            }
            r = !1;
          }
          return r;
        case Ur:
          if (n.tag === 5 && fr(n.stateNode, r.value)) return !0;
          break;
        case Ls:
          if ((n.tag === 5 || n.tag === 6) && (n = dn(n), n !== null && 0 <= n.indexOf(r.value))) return !0;
          break;
        case Uo:
          if (n.tag === 5 && (n = n.memoizedProps["data-testname"], typeof n == "string" && n.toLowerCase() === r.value.toLowerCase())) return !0;
          break;
        default:
          throw Error(h(365));
      }
      return !1;
    }
    function Ml(n) {
      switch (n.$$typeof) {
        case ni:
          return "<" + (b(n.value) || "Unknown") + ">";
        case zn:
          return ":has(" + (Ml(n) || "") + ")";
        case Ur:
          return '[role="' + n.value + '"]';
        case Ls:
          return '"' + n.value + '"';
        case Uo:
          return '[data-testname="' + n.value + '"]';
        default:
          throw Error(h(365));
      }
    }
    function Vr(n, r) {
      var o = [];
      n = [n, 0];
      for (var l = 0; l < n.length; ) {
        var c = n[l++], y = n[l++], V = r[y];
        if (c.tag !== 5 || !Vt(c)) {
          for (; V != null && As(c, V); ) y++, V = r[y];
          if (y === r.length) o.push(c);
          else for (c = c.child; c !== null; ) n.push(c, y), c = c.sibling;
        }
      }
      return o;
    }
    function Hr(n, r) {
      if (!Rt) throw Error(h(363));
      n = Br(n), n = Vr(n, r), r = [], n = Array.from(n);
      for (var o = 0; o < n.length; ) {
        var l = n[o++];
        if (l.tag === 5) Vt(l) || r.push(l.stateNode);
        else for (l = l.child; l !== null; ) n.push(l), l = l.sibling;
      }
      return r;
    }
    var Ll = Math.ceil, Os = m.ReactCurrentDispatcher, Bo = m.ReactCurrentOwner, Dt = m.ReactCurrentBatchConfig, Xe = 0, vt = null, Ft = null, Bt = 0, Zt = 0, Ti = fn(0), Mt = 0, Vo = null, ri = 0, wt = 0, Ho = 0, lo = null, kn = null, jo = 0, Is = 1 / 0, Gn = null;
    function mt() {
      Is = sn() + 500;
    }
    var zt = !1, jt = null, Fr = null, Ni = !1, vr = null, Al = 0, Wt = 0, Ds = null, Wo = -1, qo = 0;
    function Et() {
      return (Xe & 6) !== 0 ? sn() : Wo !== -1 ? Wo : Wo = sn();
    }
    function $t(n) {
      return (n.mode & 1) === 0 ? 1 : (Xe & 2) !== 0 && Bt !== 0 ? Bt & -Bt : fd.transition !== null ? (qo === 0 && (qo = Js()), qo) : (n = nt, n !== 0 ? n : dt());
    }
    function En(n, r, o, l) {
      if (50 < Wt) throw Wt = 0, Ds = null, Error(h(185));
      hr(n, o, l), ((Xe & 2) === 0 || n !== vt) && (n === vt && ((Xe & 2) === 0 && (wt |= o), Mt === 4 && ii(n, Bt)), Pn(n, l), o === 1 && Xe === 0 && (r.mode & 1) === 0 && (mt(), ko && hn()));
    }
    function Pn(n, r) {
      var o = n.callbackNode;
      qu(n, r);
      var l = So(n, n === vt ? Bt : 0);
      if (l === 0) o !== null && Yu(o), n.callbackNode = null, n.callbackPriority = 0;
      else if (r = l & -l, n.callbackPriority !== r) {
        if (o != null && Yu(o), r === 1) n.tag === 0 ? Xu(Pa.bind(null, n)) : nl(Pa.bind(null, n)), Je ? bn(function() {
          (Xe & 6) === 0 && hn();
        }) : Or(Zs, hn), o = null;
        else {
          switch (xo(l)) {
            case 1:
              o = Zs;
              break;
            case 4:
              o = $s;
              break;
            case 16:
              o = el;
              break;
            case 536870912:
              o = dd;
              break;
            default:
              o = el;
          }
          o = Aa(o, Ol.bind(null, n));
        }
        n.callbackPriority = r, n.callbackNode = o;
      }
    }
    function Ol(n, r) {
      if (Wo = -1, qo = 0, (Xe & 6) !== 0) throw Error(h(327));
      var o = n.callbackNode;
      if (oi() && n.callbackNode !== o) return null;
      var l = So(n, n === vt ? Bt : 0);
      if (l === 0) return null;
      if ((l & 30) !== 0 || (l & n.expiredLanes) !== 0 || r) r = ao(n, l);
      else {
        r = l;
        var c = Xe;
        Xe |= 2;
        var y = Ta();
        (vt !== n || Bt !== r) && (Gn = null, mt(), Fi(n, r));
        do
          try {
            Na();
            break;
          } catch (ie) {
            Yo(n, ie);
          }
        while (!0);
        na(), Os.current = y, Xe = c, Ft !== null ? r = 0 : (vt = null, Bt = 0, r = Mt);
      }
      if (r !== 0) {
        if (r === 2 && (c = bs(n), c !== 0 && (l = c, r = Il(n, c))), r === 1) throw o = Vo, Fi(n, 0), ii(n, l), Pn(n, sn()), o;
        if (r === 6) ii(n, l);
        else {
          if (c = n.current.alternate, (l & 30) === 0 && !mc(c) && (r = ao(n, l), r === 2 && (y = bs(n), y !== 0 && (l = y, r = Il(n, y))), r === 1)) throw o = Vo, Fi(n, 0), ii(n, l), Pn(n, sn()), o;
          switch (n.finishedWork = c, n.finishedLanes = l, r) {
            case 0:
            case 1:
              throw Error(h(345));
            case 2:
              Mi(n, kn, Gn);
              break;
            case 3:
              if (ii(n, l), (l & 130023424) === l && (r = jo + 500 - sn(), 10 < r)) {
                if (So(n, 0) !== 0) break;
                if (c = n.suspendedLanes, (c & l) !== l) {
                  Et(), n.pingedLanes |= n.suspendedLanes & c;
                  break;
                }
                n.timeoutHandle = q(Mi.bind(null, n, kn, Gn), r);
                break;
              }
              Mi(n, kn, Gn);
              break;
            case 4:
              if (ii(n, l), (l & 4194240) === l) break;
              for (r = n.eventTimes, c = -1; 0 < l; ) {
                var V = 31 - Zn(l);
                y = 1 << V, V = r[V], V > c && (c = V), l &= ~y;
              }
              if (l = c, l = sn() - l, l = (120 > l ? 120 : 480 > l ? 480 : 1080 > l ? 1080 : 1920 > l ? 1920 : 3e3 > l ? 3e3 : 4320 > l ? 4320 : 1960 * Ll(l / 1960)) - l, 10 < l) {
                n.timeoutHandle = q(Mi.bind(null, n, kn, Gn), l);
                break;
              }
              Mi(n, kn, Gn);
              break;
            case 5:
              Mi(n, kn, Gn);
              break;
            default:
              throw Error(h(329));
          }
        }
      }
      return Pn(n, sn()), n.callbackNode === o ? Ol.bind(null, n) : null;
    }
    function Il(n, r) {
      var o = lo;
      return n.current.memoizedState.isDehydrated && (Fi(n, r).flags |= 256), n = ao(n, r), n !== 2 && (r = kn, kn = o, r !== null && Dl(r)), n;
    }
    function Dl(n) {
      kn === null ? kn = n : kn.push.apply(kn, n);
    }
    function mc(n) {
      for (var r = n; ; ) {
        if (r.flags & 16384) {
          var o = r.updateQueue;
          if (o !== null && (o = o.stores, o !== null)) for (var l = 0; l < o.length; l++) {
            var c = o[l], y = c.getSnapshot;
            c = c.value;
            try {
              if (!kr(y(), c)) return !1;
            } catch {
              return !1;
            }
          }
        }
        if (o = r.child, r.subtreeFlags & 16384 && o !== null) o.return = r, r = o;
        else {
          if (r === n) break;
          for (; r.sibling === null; ) {
            if (r.return === null || r.return === n) return !0;
            r = r.return;
          }
          r.sibling.return = r.return, r = r.sibling;
        }
      }
      return !0;
    }
    function ii(n, r) {
      for (r &= ~Ho, r &= ~wt, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
        var o = 31 - Zn(r), l = 1 << o;
        n[o] = -1, r &= ~l;
      }
    }
    function Pa(n) {
      if ((Xe & 6) !== 0) throw Error(h(327));
      oi();
      var r = So(n, 0);
      if ((r & 1) === 0) return Pn(n, sn()), null;
      var o = ao(n, r);
      if (n.tag !== 0 && o === 2) {
        var l = bs(n);
        l !== 0 && (r = l, o = Il(n, l));
      }
      if (o === 1) throw o = Vo, Fi(n, 0), ii(n, r), Pn(n, sn()), o;
      if (o === 6) throw Error(h(345));
      return n.finishedWork = n.current.alternate, n.finishedLanes = r, Mi(n, kn, Gn), Pn(n, sn()), null;
    }
    function Ra(n) {
      vr !== null && vr.tag === 0 && (Xe & 6) === 0 && oi();
      var r = Xe;
      Xe |= 1;
      var o = Dt.transition, l = nt;
      try {
        if (Dt.transition = null, nt = 1, n) return n();
      } finally {
        nt = l, Dt.transition = o, Xe = r, (Xe & 6) === 0 && hn();
      }
    }
    function zl() {
      Zt = Ti.current, Ct(Ti);
    }
    function Fi(n, r) {
      n.finishedWork = null, n.finishedLanes = 0;
      var o = n.timeoutHandle;
      if (o !== me && (n.timeoutHandle = me, te(o)), Ft !== null) for (o = Ft.return; o !== null; ) {
        var l = o;
        switch (ms(l), l.tag) {
          case 1:
            l = l.type.childContextTypes, l != null && Gi();
            break;
          case 3:
            Wi(), Ct(jn), Ct(wn), aa();
            break;
          case 5:
            sa(l);
            break;
          case 4:
            Wi();
            break;
          case 13:
            Ct(At);
            break;
          case 19:
            Ct(At);
            break;
          case 10:
            vs(l.type._context);
            break;
          case 22:
          case 23:
            zl();
        }
        o = o.return;
      }
      if (vt = n, Ft = n = Li(n.current, null), Bt = Zt = r, Mt = 0, Vo = null, Ho = wt = ri = 0, kn = lo = null, gi !== null) {
        for (r = 0; r < gi.length; r++) if (o = gi[r], l = o.interleaved, l !== null) {
          o.interleaved = null;
          var c = l.next, y = o.pending;
          if (y !== null) {
            var V = y.next;
            y.next = c, l.next = V;
          }
          o.pending = l;
        }
        gi = null;
      }
      return n;
    }
    function Yo(n, r) {
      do {
        var o = Ft;
        try {
          if (na(), Yn.current = Ji, Fo) {
            for (var l = Tt.memoizedState; l !== null; ) {
              var c = l.queue;
              c !== null && (c.pending = null), l = l.next;
            }
            Fo = !1;
          }
          if (_i = 0, bt = Ht = Tt = null, Ss = !1, ws = 0, Bo.current = null, o === null || o.return === null) {
            Mt = 1, Vo = r, Ft = null;
            break;
          }
          e: {
            var y = n, V = o.return, ie = o, fe = r;
            if (r = Bt, ie.flags |= 32768, fe !== null && typeof fe == "object" && typeof fe.then == "function") {
              var we = fe, Le = ie, qe = Le.tag;
              if ((Le.mode & 1) === 0 && (qe === 0 || qe === 11 || qe === 15)) {
                var Te = Le.alternate;
                Te ? (Le.updateQueue = Te.updateQueue, Le.memoizedState = Te.memoizedState, Le.lanes = Te.lanes) : (Le.updateQueue = null, Le.memoizedState = null);
              }
              var xt = fc(V);
              if (xt !== null) {
                xt.flags &= -257, xi(xt, V, ie, y, r), xt.mode & 1 && dc(y, we, r), r = xt, fe = we;
                var gt = r.updateQueue;
                if (gt === null) {
                  var Un = /* @__PURE__ */ new Set();
                  Un.add(fe), r.updateQueue = Un;
                } else gt.add(fe);
                break e;
              } else {
                if ((r & 1) === 0) {
                  dc(y, we, r), Ko();
                  break e;
                }
                fe = Error(h(426));
              }
            } else if (kt && ie.mode & 1) {
              var jr = fc(V);
              if (jr !== null) {
                (jr.flags & 65536) === 0 && (jr.flags |= 256), xi(jr, V, ie, y, r), ea(Zi(fe, ie));
                break e;
              }
            }
            y = fe = Zi(fe, ie), Mt !== 4 && (Mt = 2), lo === null ? lo = [y] : lo.push(y), y = V;
            do {
              switch (y.tag) {
                case 3:
                  y.flags |= 65536, r &= -r, y.lanes |= r;
                  var ce = Dr(y, fe, r);
                  To(y, ce);
                  break e;
                case 1:
                  ie = fe;
                  var oe = y.type, he = y.stateNode;
                  if ((y.flags & 128) === 0 && (typeof oe.getDerivedStateFromError == "function" || he !== null && typeof he.componentDidCatch == "function" && (Fr === null || !Fr.has(he)))) {
                    y.flags |= 65536, r &= -r, y.lanes |= r;
                    var Fe = wl(y, ie, r);
                    To(y, Fe);
                    break e;
                  }
              }
              y = y.return;
            } while (y !== null);
          }
          Ma(o);
        } catch (Ue) {
          r = Ue, Ft === o && o !== null && (Ft = o = o.return);
          continue;
        }
        break;
      } while (!0);
    }
    function Ta() {
      var n = Os.current;
      return Os.current = Ji, n === null ? Ji : n;
    }
    function Ko() {
      (Mt === 0 || Mt === 3 || Mt === 2) && (Mt = 4), vt === null || (ri & 268435455) === 0 && (wt & 268435455) === 0 || ii(vt, Bt);
    }
    function ao(n, r) {
      var o = Xe;
      Xe |= 2;
      var l = Ta();
      (vt !== n || Bt !== r) && (Gn = null, Fi(n, r));
      do
        try {
          yc();
          break;
        } catch (c) {
          Yo(n, c);
        }
      while (!0);
      if (na(), Xe = o, Os.current = l, Ft !== null) throw Error(h(261));
      return vt = null, Bt = 0, Mt;
    }
    function yc() {
      for (; Ft !== null; ) Fa(Ft);
    }
    function Na() {
      for (; Ft !== null && !Ku(); ) Fa(Ft);
    }
    function Fa(n) {
      var r = xc(n.alternate, n, Zt);
      n.memoizedProps = n.pendingProps, r === null ? Ma(n) : Ft = r, Bo.current = null;
    }
    function Ma(n) {
      var r = n;
      do {
        var o = r.alternate;
        if (n = r.return, (r.flags & 32768) === 0) {
          if (o = ro(o, r, Zt), o !== null) {
            Ft = o;
            return;
          }
        } else {
          if (o = pc(o, r), o !== null) {
            o.flags &= 32767, Ft = o;
            return;
          }
          if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
          else {
            Mt = 6, Ft = null;
            return;
          }
        }
        if (r = r.sibling, r !== null) {
          Ft = r;
          return;
        }
        Ft = r = n;
      } while (r !== null);
      Mt === 0 && (Mt = 5);
    }
    function Mi(n, r, o) {
      var l = nt, c = Dt.transition;
      try {
        Dt.transition = null, nt = 1, vc(n, r, o, l);
      } finally {
        Dt.transition = c, nt = l;
      }
      return null;
    }
    function vc(n, r, o, l) {
      do
        oi();
      while (vr !== null);
      if ((Xe & 6) !== 0) throw Error(h(327));
      o = n.finishedWork;
      var c = n.finishedLanes;
      if (o === null) return null;
      if (n.finishedWork = null, n.finishedLanes = 0, o === n.current) throw Error(h(177));
      n.callbackNode = null, n.callbackPriority = 0;
      var y = o.lanes | o.childLanes;
      if (fi(n, y), n === vt && (Ft = vt = null, Bt = 0), (o.subtreeFlags & 2064) === 0 && (o.flags & 2064) === 0 || Ni || (Ni = !0, Aa(el, function() {
        return oi(), null;
      })), y = (o.flags & 15990) !== 0, (o.subtreeFlags & 15990) !== 0 || y) {
        y = Dt.transition, Dt.transition = null;
        var V = nt;
        nt = 1;
        var ie = Xe;
        Xe |= 4, Bo.current = null, gc(n, o), Ms(o, n), B(n.containerInfo), n.current = o, Go(o), hs(), Xe = ie, nt = V, Dt.transition = y;
      } else n.current = o;
      if (Ni && (Ni = !1, vr = n, Al = c), y = n.pendingLanes, y === 0 && (Fr = null), Co(o.stateNode), Pn(n, sn()), r !== null) for (l = n.onRecoverableError, o = 0; o < r.length; o++) c = r[o], l(c.value, { componentStack: c.stack, digest: c.digest });
      if (zt) throw zt = !1, n = jt, jt = null, n;
      return (Al & 1) !== 0 && n.tag !== 0 && oi(), y = n.pendingLanes, (y & 1) !== 0 ? n === Ds ? Wt++ : (Wt = 0, Ds = n) : Wt = 0, hn(), null;
    }
    function oi() {
      if (vr !== null) {
        var n = xo(Al), r = Dt.transition, o = nt;
        try {
          if (Dt.transition = null, nt = 16 > n ? 16 : n, vr === null) var l = !1;
          else {
            if (n = vr, vr = null, Al = 0, (Xe & 6) !== 0) throw Error(h(331));
            var c = Xe;
            for (Xe |= 4, Ee = n.current; Ee !== null; ) {
              var y = Ee, V = y.child;
              if ((Ee.flags & 16) !== 0) {
                var ie = y.deletions;
                if (ie !== null) {
                  for (var fe = 0; fe < ie.length; fe++) {
                    var we = ie[fe];
                    for (Ee = we; Ee !== null; ) {
                      var Le = Ee;
                      switch (Le.tag) {
                        case 0:
                        case 11:
                        case 15:
                          io(8, Le, y);
                      }
                      var qe = Le.child;
                      if (qe !== null) qe.return = Le, Ee = qe;
                      else for (; Ee !== null; ) {
                        Le = Ee;
                        var Te = Le.sibling, xt = Le.return;
                        if (Ns(Le), Le === we) {
                          Ee = null;
                          break;
                        }
                        if (Te !== null) {
                          Te.return = xt, Ee = Te;
                          break;
                        }
                        Ee = xt;
                      }
                    }
                  }
                  var gt = y.alternate;
                  if (gt !== null) {
                    var Un = gt.child;
                    if (Un !== null) {
                      gt.child = null;
                      do {
                        var jr = Un.sibling;
                        Un.sibling = null, Un = jr;
                      } while (Un !== null);
                    }
                  }
                  Ee = y;
                }
              }
              if ((y.subtreeFlags & 2064) !== 0 && V !== null) V.return = y, Ee = V;
              else e: for (; Ee !== null; ) {
                if (y = Ee, (y.flags & 2048) !== 0) switch (y.tag) {
                  case 0:
                  case 11:
                  case 15:
                    io(9, y, y.return);
                }
                var ce = y.sibling;
                if (ce !== null) {
                  ce.return = y.return, Ee = ce;
                  break e;
                }
                Ee = y.return;
              }
            }
            var oe = n.current;
            for (Ee = oe; Ee !== null; ) {
              V = Ee;
              var he = V.child;
              if ((V.subtreeFlags & 2064) !== 0 && he !== null) he.return = V, Ee = he;
              else e: for (V = oe; Ee !== null; ) {
                if (ie = Ee, (ie.flags & 2048) !== 0) try {
                  switch (ie.tag) {
                    case 0:
                    case 11:
                    case 15:
                      zo(9, ie);
                  }
                } catch (Ue) {
                  Pt(ie, ie.return, Ue);
                }
                if (ie === V) {
                  Ee = null;
                  break e;
                }
                var Fe = ie.sibling;
                if (Fe !== null) {
                  Fe.return = ie.return, Ee = Fe;
                  break e;
                }
                Ee = ie.return;
              }
            }
            if (Xe = c, hn(), Wn && typeof Wn.onPostCommitFiberRoot == "function") try {
              Wn.onPostCommitFiberRoot(hi, n);
            } catch {
            }
            l = !0;
          }
          return l;
        } finally {
          nt = o, Dt.transition = r;
        }
      }
      return !1;
    }
    function La(n, r, o) {
      r = Zi(o, r), r = Dr(n, r, 1), n = Zr(n, r, 1), r = Et(), n !== null && (hr(n, 1, r), Pn(n, r));
    }
    function Pt(n, r, o) {
      if (n.tag === 3) La(n, n, o);
      else for (; r !== null; ) {
        if (r.tag === 3) {
          La(r, n, o);
          break;
        } else if (r.tag === 1) {
          var l = r.stateNode;
          if (typeof r.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (Fr === null || !Fr.has(l))) {
            n = Zi(o, n), n = wl(r, n, 1), r = Zr(r, n, 1), n = Et(), r !== null && (hr(r, 1, n), Pn(r, n));
            break;
          }
        }
        r = r.return;
      }
    }
    function _c(n, r, o) {
      var l = n.pingCache;
      l !== null && l.delete(r), r = Et(), n.pingedLanes |= n.suspendedLanes & o, vt === n && (Bt & o) === o && (Mt === 4 || Mt === 3 && (Bt & 130023424) === Bt && 500 > sn() - jo ? Fi(n, 0) : Ho |= o), Pn(n, r);
    }
    function Sc(n, r) {
      r === 0 && ((n.mode & 1) === 0 ? r = 1 : (r = fs, fs <<= 1, (fs & 130023424) === 0 && (fs = 4194304)));
      var o = Et();
      n = Tr(n, r), n !== null && (hr(n, r, o), Pn(n, o));
    }
    function wc(n) {
      var r = n.memoizedState, o = 0;
      r !== null && (o = r.retryLane), Sc(n, o);
    }
    function gd(n, r) {
      var o = 0;
      switch (n.tag) {
        case 13:
          var l = n.stateNode, c = n.memoizedState;
          c !== null && (o = c.retryLane);
          break;
        case 19:
          l = n.stateNode;
          break;
        default:
          throw Error(h(314));
      }
      l !== null && l.delete(r), Sc(n, o);
    }
    var xc;
    xc = function(n, r, o) {
      if (n !== null) if (n.memoizedProps !== r.pendingProps || jn.current) Jt = !0;
      else {
        if ((n.lanes & o) === 0 && (r.flags & 128) === 0) return Jt = !1, ki(n, r, o);
        Jt = (n.flags & 131072) !== 0;
      }
      else Jt = !1, kt && (r.flags & 1048576) !== 0 && Qu(r, Ui, r.index);
      switch (r.lanes = 0, r.tag) {
        case 2:
          var l = r.type;
          Ts(n, r), n = r.pendingProps;
          var c = Xr(r, wn.current);
          Ro(r, o), c = xs(null, r, l, n, c, o);
          var y = fl();
          return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, on(l) ? (y = !0, vo(r)) : y = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, ia(r), c.updater = Es, r.stateNode = c, c._reactInternals = r, Ir(r, l, n, o), r = xn(null, r, l, !0, y, o)) : (r.tag = 0, kt && y && gs(r), an(null, r, c, o), r = r.child), r;
        case 16:
          l = r.elementType;
          e: {
            switch (Ts(n, r), n = r.pendingProps, c = l._init, l = c(l._payload), r.type = l, c = r.tag = md(l), n = rr(l, n), c) {
              case 0:
                r = zr(null, r, l, n, o);
                break e;
              case 1:
                r = mn(null, r, l, n, o);
                break e;
              case 11:
                r = xl(null, r, l, n, o);
                break e;
              case 14:
                r = $i(null, r, l, rr(l.type, n), o);
                break e;
            }
            throw Error(h(
              306,
              l,
              ""
            ));
          }
          return r;
        case 0:
          return l = r.type, c = r.pendingProps, c = r.elementType === l ? c : rr(l, c), zr(n, r, l, c, o);
        case 1:
          return l = r.type, c = r.pendingProps, c = r.elementType === l ? c : rr(l, c), mn(n, r, l, c, o);
        case 3:
          e: {
            if (Ci(r), n === null) throw Error(h(387));
            l = r.pendingProps, y = r.memoizedState, c = y.element, rc(n, r), mi(r, l, null, o);
            var V = r.memoizedState;
            if (l = V.element, Ge && y.isDehydrated) if (y = { element: l, isDehydrated: !1, cache: V.cache, pendingSuspenseBoundaries: V.pendingSuspenseBoundaries, transitions: V.transitions }, r.updateQueue.baseState = y, r.memoizedState = y, r.flags & 256) {
              c = Zi(Error(h(423)), r), r = eo(n, r, l, o, c);
              break e;
            } else if (l !== c) {
              c = Zi(Error(h(424)), r), r = eo(n, r, l, o, c);
              break e;
            } else for (Ge && (An = id(r.stateNode.containerInfo), pn = r, kt = !0, Rr = null, ys = !1), o = tc(r, null, l, o), r.child = o; o; ) o.flags = o.flags & -3 | 4096, o = o.sibling;
            else {
              if (Bi(), l === c) {
                r = ti(n, r, o);
                break e;
              }
              an(n, r, l, o);
            }
            r = r.child;
          }
          return r;
        case 5:
          return oa(r), n === null && $l(r), l = r.type, c = r.pendingProps, y = n !== null ? n.memoizedProps : null, V = c.children, ge(l, c) ? V = null : y !== null && ge(l, y) && (r.flags |= 32), yt(n, r), an(n, r, V, o), r.child;
        case 6:
          return n === null && $l(r), null;
        case 13:
          return xa(n, r, o);
        case 4:
          return cl(r, r.stateNode.containerInfo), l = r.pendingProps, n === null ? r.child = Hi(r, null, l, o) : an(n, r, l, o), r.child;
        case 11:
          return l = r.type, c = r.pendingProps, c = r.elementType === l ? c : rr(l, c), xl(n, r, l, c, o);
        case 7:
          return an(n, r, r.pendingProps, o), r.child;
        case 8:
          return an(n, r, r.pendingProps.children, o), r.child;
        case 12:
          return an(n, r, r.pendingProps.children, o), r.child;
        case 10:
          e: {
            if (l = r.type._context, c = r.pendingProps, y = r.memoizedProps, V = c.value, nc(r, l, V), y !== null) if (kr(y.value, V)) {
              if (y.children === c.children && !jn.current) {
                r = ti(n, r, o);
                break e;
              }
            } else for (y = r.child, y !== null && (y.return = r); y !== null; ) {
              var ie = y.dependencies;
              if (ie !== null) {
                V = y.child;
                for (var fe = ie.firstContext; fe !== null; ) {
                  if (fe.context === l) {
                    if (y.tag === 1) {
                      fe = Jr(-1, o & -o), fe.tag = 2;
                      var we = y.updateQueue;
                      if (we !== null) {
                        we = we.shared;
                        var Le = we.pending;
                        Le === null ? fe.next = fe : (fe.next = Le.next, Le.next = fe), we.pending = fe;
                      }
                    }
                    y.lanes |= o, fe = y.alternate, fe !== null && (fe.lanes |= o), ji(y.return, o, r), ie.lanes |= o;
                    break;
                  }
                  fe = fe.next;
                }
              } else if (y.tag === 10) V = y.type === r.type ? null : y.child;
              else if (y.tag === 18) {
                if (V = y.return, V === null) throw Error(h(341));
                V.lanes |= o, ie = V.alternate, ie !== null && (ie.lanes |= o), ji(V, o, r), V = y.sibling;
              } else V = y.child;
              if (V !== null) V.return = y;
              else for (V = y; V !== null; ) {
                if (V === r) {
                  V = null;
                  break;
                }
                if (y = V.sibling, y !== null) {
                  y.return = V.return, V = y;
                  break;
                }
                V = V.return;
              }
              y = V;
            }
            an(n, r, c.children, o), r = r.child;
          }
          return r;
        case 9:
          return c = r.type, l = r.pendingProps.children, Ro(r, o), c = er(c), l = l(c), r.flags |= 1, an(n, r, l, o), r.child;
        case 14:
          return l = r.type, c = rr(l, r.pendingProps), c = rr(l.type, c), $i(n, r, l, c, o);
        case 15:
          return ei(n, r, r.type, r.pendingProps, o);
        case 17:
          return l = r.type, c = r.pendingProps, c = r.elementType === l ? c : rr(l, c), Ts(n, r), r.tag = 1, on(l) ? (n = !0, vo(r)) : n = !1, Ro(r, o), cc(r, l, c), Ir(r, l, c, o), xn(null, r, l, !0, n, o);
        case 19:
          return kl(n, r, o);
        case 22:
          return St(n, r, o);
      }
      throw Error(h(156, r.tag));
    };
    function Aa(n, r) {
      return Or(n, r);
    }
    function Cc(n, r, o, l) {
      this.tag = n, this.key = o, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
    }
    function ur(n, r, o, l) {
      return new Cc(n, r, o, l);
    }
    function Xo(n) {
      return n = n.prototype, !(!n || !n.isReactComponent);
    }
    function md(n) {
      if (typeof n == "function") return Xo(n) ? 1 : 0;
      if (n != null) {
        if (n = n.$$typeof, n === P) return 11;
        if (n === v) return 14;
      }
      return 2;
    }
    function Li(n, r) {
      var o = n.alternate;
      return o === null ? (o = ur(n.tag, r, n.key, n.mode), o.elementType = n.elementType, o.type = n.type, o.stateNode = n.stateNode, o.alternate = n, n.alternate = o) : (o.pendingProps = r, o.type = n.type, o.flags = 0, o.subtreeFlags = 0, o.deletions = null), o.flags = n.flags & 14680064, o.childLanes = n.childLanes, o.lanes = n.lanes, o.child = n.child, o.memoizedProps = n.memoizedProps, o.memoizedState = n.memoizedState, o.updateQueue = n.updateQueue, r = n.dependencies, o.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, o.sibling = n.sibling, o.index = n.index, o.ref = n.ref, o;
    }
    function Gl(n, r, o, l, c, y) {
      var V = 2;
      if (l = n, typeof n == "function") Xo(n) && (V = 1);
      else if (typeof n == "string") V = 5;
      else e: switch (n) {
        case E:
          return yn(o.children, c, y, r);
        case N:
          V = 8, c |= 8;
          break;
        case k:
          return n = ur(12, o, r, c | 2), n.elementType = k, n.lanes = y, n;
        case I:
          return n = ur(13, o, r, c), n.elementType = I, n.lanes = y, n;
        case H:
          return n = ur(19, o, r, c), n.elementType = H, n.lanes = y, n;
        case R:
          return Qo(o, c, y, r);
        default:
          if (typeof n == "object" && n !== null) switch (n.$$typeof) {
            case _:
              V = 10;
              break e;
            case S:
              V = 9;
              break e;
            case P:
              V = 11;
              break e;
            case v:
              V = 14;
              break e;
            case f:
              V = 16, l = null;
              break e;
          }
          throw Error(h(130, n == null ? n : typeof n, ""));
      }
      return r = ur(V, o, r, c), r.elementType = n, r.type = l, r.lanes = y, r;
    }
    function yn(n, r, o, l) {
      return n = ur(7, n, l, r), n.lanes = o, n;
    }
    function Qo(n, r, o, l) {
      return n = ur(22, n, l, r), n.elementType = R, n.lanes = o, n.stateNode = { isHidden: !1 }, n;
    }
    function bo(n, r, o) {
      return n = ur(6, n, null, r), n.lanes = o, n;
    }
    function Ul(n, r, o) {
      return r = ur(4, n.children !== null ? n.children : [], n.key, r), r.lanes = o, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
    }
    function kc(n, r, o, l, c) {
      this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = me, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = wo(0), this.expirationTimes = wo(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = wo(0), this.identifierPrefix = l, this.onRecoverableError = c, Ge && (this.mutableSourceEagerHydrationData = null);
    }
    function Oa(n, r, o, l, c, y, V, ie, fe) {
      return n = new kc(n, r, o, ie, fe), r === 1 ? (r = 1, y === !0 && (r |= 8)) : r = 0, y = ur(3, null, null, r), n.current = y, y.stateNode = n, y.memoizedState = { element: l, isDehydrated: o, cache: null, transitions: null, pendingSuspenseBoundaries: null }, ia(y), n;
    }
    function Bl(n) {
      if (!n) return di;
      n = n._reactInternals;
      e: {
        if (G(n) !== n || n.tag !== 1) throw Error(h(170));
        var r = n;
        do {
          switch (r.tag) {
            case 3:
              r = r.stateNode.context;
              break e;
            case 1:
              if (on(r.type)) {
                r = r.stateNode.__reactInternalMemoizedMergedChildContext;
                break e;
              }
          }
          r = r.return;
        } while (r !== null);
        throw Error(h(171));
      }
      if (n.tag === 1) {
        var o = n.type;
        if (on(o)) return ju(n, o, r);
      }
      return r;
    }
    function uo(n) {
      var r = n._reactInternals;
      if (r === void 0)
        throw typeof n.render == "function" ? Error(h(188)) : (n = Object.keys(n).join(","), Error(h(268, n)));
      return n = Z(r), n === null ? null : n.stateNode;
    }
    function Vl(n, r) {
      if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
        var o = n.retryLane;
        n.retryLane = o !== 0 && o < r ? o : r;
      }
    }
    function Jo(n, r) {
      Vl(n, r), (n = n.alternate) && Vl(n, r);
    }
    function yd(n) {
      return n = Z(n), n === null ? null : n.stateNode;
    }
    function Ec() {
      return null;
    }
    return w.attemptContinuousHydration = function(n) {
      if (n.tag === 13) {
        var r = Tr(n, 134217728);
        if (r !== null) {
          var o = Et();
          En(r, n, 134217728, o);
        }
        Jo(n, 134217728);
      }
    }, w.attemptDiscreteHydration = function(n) {
      if (n.tag === 13) {
        var r = Tr(n, 1);
        if (r !== null) {
          var o = Et();
          En(r, n, 1, o);
        }
        Jo(n, 1);
      }
    }, w.attemptHydrationAtCurrentPriority = function(n) {
      if (n.tag === 13) {
        var r = $t(n), o = Tr(n, r);
        if (o !== null) {
          var l = Et();
          En(o, n, r, l);
        }
        Jo(n, r);
      }
    }, w.attemptSynchronousHydration = function(n) {
      switch (n.tag) {
        case 3:
          var r = n.stateNode;
          if (r.current.memoizedState.isDehydrated) {
            var o = _o(r.pendingLanes);
            o !== 0 && (Ar(r, o | 1), Pn(r, sn()), (Xe & 6) === 0 && (mt(), hn()));
          }
          break;
        case 13:
          Ra(function() {
            var l = Tr(n, 1);
            if (l !== null) {
              var c = Et();
              En(l, n, 1, c);
            }
          }), Jo(n, 1);
      }
    }, w.batchedUpdates = function(n, r) {
      var o = Xe;
      Xe |= 1;
      try {
        return n(r);
      } finally {
        Xe = o, Xe === 0 && (mt(), ko && hn());
      }
    }, w.createComponentSelector = function(n) {
      return { $$typeof: ni, value: n };
    }, w.createContainer = function(n, r, o, l, c, y, V) {
      return Oa(n, r, !1, null, o, l, c, y, V);
    }, w.createHasPseudoClassSelector = function(n) {
      return { $$typeof: zn, value: n };
    }, w.createHydrationContainer = function(n, r, o, l, c, y, V, ie, fe) {
      return n = Oa(o, l, !0, n, c, y, V, ie, fe), n.context = Bl(null), o = n.current, l = Et(), c = $t(o), y = Jr(l, c), y.callback = r ?? null, Zr(o, y, c), n.current.lanes = c, hr(n, c, l), Pn(n, l), n;
    }, w.createPortal = function(n, r, o) {
      var l = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return { $$typeof: C, key: l == null ? null : "" + l, children: n, containerInfo: r, implementation: o };
    }, w.createRoleSelector = function(n) {
      return { $$typeof: Ur, value: n };
    }, w.createTestNameSelector = function(n) {
      return { $$typeof: Uo, value: n };
    }, w.createTextSelector = function(n) {
      return { $$typeof: Ls, value: n };
    }, w.deferredUpdates = function(n) {
      var r = nt, o = Dt.transition;
      try {
        return Dt.transition = null, nt = 16, n();
      } finally {
        nt = r, Dt.transition = o;
      }
    }, w.discreteUpdates = function(n, r, o, l, c) {
      var y = nt, V = Dt.transition;
      try {
        return Dt.transition = null, nt = 1, n(r, o, l, c);
      } finally {
        nt = y, Dt.transition = V, Xe === 0 && mt();
      }
    }, w.findAllNodes = Hr, w.findBoundingRects = function(n, r) {
      if (!Rt) throw Error(h(363));
      r = Hr(n, r), n = [];
      for (var o = 0; o < r.length; o++) n.push(ft(r[o]));
      for (r = n.length - 1; 0 < r; r--) {
        o = n[r];
        for (var l = o.x, c = l + o.width, y = o.y, V = y + o.height, ie = r - 1; 0 <= ie; ie--) if (r !== ie) {
          var fe = n[ie], we = fe.x, Le = we + fe.width, qe = fe.y, Te = qe + fe.height;
          if (l >= we && y >= qe && c <= Le && V <= Te) {
            n.splice(r, 1);
            break;
          } else if (l !== we || o.width !== fe.width || Te < y || qe > V) {
            if (!(y !== qe || o.height !== fe.height || Le < l || we > c)) {
              we > l && (fe.width += we - l, fe.x = l), Le < c && (fe.width = c - we), n.splice(r, 1);
              break;
            }
          } else {
            qe > y && (fe.height += qe - y, fe.y = y), Te < V && (fe.height = V - qe), n.splice(r, 1);
            break;
          }
        }
      }
      return n;
    }, w.findHostInstance = uo, w.findHostInstanceWithNoPortals = function(n) {
      return n = Q(n), n = n !== null ? Y(n) : null, n === null ? null : n.stateNode;
    }, w.findHostInstanceWithWarning = function(n) {
      return uo(n);
    }, w.flushControlled = function(n) {
      var r = Xe;
      Xe |= 1;
      var o = Dt.transition, l = nt;
      try {
        Dt.transition = null, nt = 1, n();
      } finally {
        nt = l, Dt.transition = o, Xe = r, Xe === 0 && (mt(), hn());
      }
    }, w.flushPassiveEffects = oi, w.flushSync = Ra, w.focusWithin = function(n, r) {
      if (!Rt) throw Error(h(363));
      for (n = Br(n), r = Vr(n, r), r = Array.from(r), n = 0; n < r.length; ) {
        var o = r[n++];
        if (!Vt(o)) {
          if (o.tag === 5 && Kt(o.stateNode)) return !0;
          for (o = o.child; o !== null; ) r.push(o), o = o.sibling;
        }
      }
      return !1;
    }, w.getCurrentUpdatePriority = function() {
      return nt;
    }, w.getFindAllNodesFailureDescription = function(n, r) {
      if (!Rt) throw Error(h(363));
      var o = 0, l = [];
      n = [Br(n), 0];
      for (var c = 0; c < n.length; ) {
        var y = n[c++], V = n[c++], ie = r[V];
        if ((y.tag !== 5 || !Vt(y)) && (As(y, ie) && (l.push(Ml(ie)), V++, V > o && (o = V)), V < r.length)) for (y = y.child; y !== null; ) n.push(y, V), y = y.sibling;
      }
      if (o < r.length) {
        for (n = []; o < r.length; o++) n.push(Ml(r[o]));
        return `findAllNodes was able to match part of the selector:
  ` + (l.join(" > ") + `

No matching component was found for:
  `) + n.join(" > ");
      }
      return null;
    }, w.getPublicRootInstance = function(n) {
      if (n = n.current, !n.child) return null;
      switch (n.child.tag) {
        case 5:
          return pe(n.child.stateNode);
        default:
          return n.child.stateNode;
      }
    }, w.injectIntoDevTools = function(n) {
      if (n = { bundleType: n.bundleType, version: n.version, rendererPackageName: n.rendererPackageName, rendererConfig: n.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: m.ReactCurrentDispatcher, findHostInstanceByFiber: yd, findFiberByHostInstance: n.findFiberByHostInstance || Ec, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1" }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u") n = !1;
      else {
        var r = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (r.isDisabled || !r.supportsFiber) n = !0;
        else {
          try {
            hi = r.inject(n), Wn = r;
          } catch {
          }
          n = !!r.checkDCE;
        }
      }
      return n;
    }, w.isAlreadyRendering = function() {
      return !1;
    }, w.observeVisibleRects = function(n, r, o, l) {
      if (!Rt) throw Error(h(363));
      n = Hr(n, r);
      var c = Mn(n, o, l).disconnect;
      return { disconnect: function() {
        c();
      } };
    }, w.registerMutableSourceForHydration = function(n, r) {
      var o = r._getVersion;
      o = o(r._source), n.mutableSourceEagerHydrationData == null ? n.mutableSourceEagerHydrationData = [r, o] : n.mutableSourceEagerHydrationData.push(r, o);
    }, w.runWithPriority = function(n, r) {
      var o = nt;
      try {
        return nt = n, r();
      } finally {
        nt = o;
      }
    }, w.shouldError = function() {
      return null;
    }, w.shouldSuspend = function() {
      return !1;
    }, w.updateContainer = function(n, r, o, l) {
      var c = r.current, y = Et(), V = $t(c);
      return o = Bl(o), r.context === null ? r.context = o : r.pendingContext = o, r = Jr(y, V), r.payload = { element: n }, l = l === void 0 ? null : l, l !== null && (r.callback = l), n = Zr(c, r, V), n !== null && (En(n, c, V, y), _s(n, c, V)), V;
    }, w;
  }), nf;
}
var l0;
function ap() {
  return l0 || (l0 = 1, tf.exports = lp()), tf.exports;
}
var up = ap();
const cp = /* @__PURE__ */ $c(up);
var rf = { exports: {} }, ss = {};
/**
 * @license React
 * react-reconciler-constants.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var a0;
function dp() {
  return a0 || (a0 = 1, ss.ConcurrentRoot = 1, ss.ContinuousEventPriority = 4, ss.DefaultEventPriority = 16, ss.DiscreteEventPriority = 1, ss.IdleEventPriority = 536870912, ss.LegacyRoot = 0), ss;
}
var u0;
function fp() {
  return u0 || (u0 = 1, rf.exports = dp()), rf.exports;
}
var L0 = fp(), hp = et();
const c0 = {
  children: !0,
  ref: !0,
  key: !0,
  style: !0,
  forwardedRef: !0,
  unstable_applyCache: !0,
  unstable_applyDrawHitFromCache: !0
};
let d0 = !1, f0 = !1;
const gf = ".react-konva-event", pp = `ReactKonva: You have a Konva node with draggable = true and position defined but no onDragMove or onDragEnd events are handled.
Position of a node will be changed during drag&drop, so you should update state of the react app as well.
Consider to add onDragMove or onDragEnd events.
For more info see: https://github.com/konvajs/react-konva/issues/256
`, gp = `ReactKonva: You are using "zIndex" attribute for a Konva node.
react-konva may get confused with ordering. Just define correct order of elements in your render function of a component.
For more info see: https://github.com/konvajs/react-konva/issues/194
`, mp = {};
function nd(u, d, w = mp) {
  if (!d0 && "zIndex" in d && (console.warn(gp), d0 = !0), !f0 && d.draggable) {
    var O = d.x !== void 0 || d.y !== void 0, M = d.onDragEnd || d.onDragMove;
    O && !M && (console.warn(pp), f0 = !0);
  }
  for (var x in w)
    if (!c0[x]) {
      var h = x.slice(0, 2) === "on", m = w[x] !== d[x];
      if (h && m) {
        var g = x.substr(2).toLowerCase();
        g.substr(0, 7) === "content" && (g = "content" + g.substr(7, 1).toUpperCase() + g.substr(8)), u.off(g, w[x]);
      }
      var C = !d.hasOwnProperty(x);
      C && u.setAttr(x, void 0);
    }
  var E = d._useStrictMode, N = {}, k = !1;
  const _ = {};
  for (var x in d)
    if (!c0[x]) {
      var h = x.slice(0, 2) === "on", S = w[x] !== d[x];
      if (h && S) {
        var g = x.substr(2).toLowerCase();
        g.substr(0, 7) === "content" && (g = "content" + g.substr(7, 1).toUpperCase() + g.substr(8)), d[x] && (_[g] = d[x]);
      }
      !h && (d[x] !== w[x] || E && d[x] !== u.getAttr(x)) && (k = !0, N[x] = d[x]);
    }
  k && (u.setAttrs(N), ls(u));
  for (var g in _)
    u.on(g + gf, _[g]);
}
function ls(u) {
  if (!hp.Konva.autoDrawEnabled) {
    var d = u.getLayer() || u.getStage();
    d && d.batchDraw();
  }
}
var of = cf();
const A0 = {}, yp = {};
Au.Node.prototype._applyProps = nd;
function vp(u, d) {
  if (typeof d == "string") {
    console.error(`Do not use plain text as child of Konva.Node. You are using text: ${d}`);
    return;
  }
  u.add(d), ls(u);
}
function _p(u, d, w) {
  let O = Au[u];
  O || (console.error(`Konva has no node with the type ${u}. Group will be used instead. If you use minimal version of react-konva, just import required nodes into Konva: "import "konva/lib/shapes/${u}"  If you want to render DOM elements as part of canvas tree take a look into this demo: https://konvajs.github.io/docs/react/DOM_Portal.html`), O = Au.Group);
  const M = {}, x = {};
  for (var h in d) {
    var m = h.slice(0, 2) === "on";
    m ? x[h] = d[h] : M[h] = d[h];
  }
  const g = new O(M);
  return nd(g, x), g;
}
function Sp(u, d, w) {
  console.error(`Text components are not supported for now in ReactKonva. Your text is: "${u}"`);
}
function wp(u, d, w) {
  return !1;
}
function xp(u) {
  return u;
}
function Cp() {
  return null;
}
function kp() {
  return null;
}
function Ep(u, d, w, O) {
  return yp;
}
function Pp() {
}
function Rp(u) {
}
function Tp(u, d) {
  return !1;
}
function Np() {
  return A0;
}
function Fp() {
  return A0;
}
const Mp = setTimeout, Lp = clearTimeout, Ap = -1;
function Op(u, d) {
  return !1;
}
const Ip = !1, Dp = !0, zp = !0;
function Gp(u, d) {
  d.parent === u ? d.moveToTop() : u.add(d), ls(u);
}
function Up(u, d) {
  d.parent === u ? d.moveToTop() : u.add(d), ls(u);
}
function O0(u, d, w) {
  d._remove(), u.add(d), d.setZIndex(w.getZIndex()), ls(u);
}
function Bp(u, d, w) {
  O0(u, d, w);
}
function Vp(u, d) {
  d.destroy(), d.off(gf), ls(u);
}
function Hp(u, d) {
  d.destroy(), d.off(gf), ls(u);
}
function jp(u, d, w) {
  console.error(`Text components are not yet supported in ReactKonva. You text is: "${w}"`);
}
function Wp(u, d, w) {
}
function qp(u, d, w, O, M) {
  nd(u, M, O);
}
function Yp(u) {
  u.hide(), ls(u);
}
function Kp(u) {
}
function Xp(u, d) {
  (d.visible == null || d.visible) && u.show();
}
function Qp(u, d) {
}
function bp(u) {
}
function Jp() {
}
const Zp = () => L0.DefaultEventPriority, $p = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  appendChild: Gp,
  appendChildToContainer: Up,
  appendInitialChild: vp,
  cancelTimeout: Lp,
  clearContainer: bp,
  commitMount: Wp,
  commitTextUpdate: jp,
  commitUpdate: qp,
  createInstance: _p,
  createTextInstance: Sp,
  detachDeletedInstance: Jp,
  finalizeInitialChildren: wp,
  getChildHostContext: Fp,
  getCurrentEventPriority: Zp,
  getPublicInstance: xp,
  getRootHostContext: Np,
  hideInstance: Yp,
  hideTextInstance: Kp,
  idlePriority: of.unstable_IdlePriority,
  insertBefore: O0,
  insertInContainerBefore: Bp,
  isPrimaryRenderer: Ip,
  noTimeout: Ap,
  now: of.unstable_now,
  prepareForCommit: Cp,
  preparePortalMount: kp,
  prepareUpdate: Ep,
  removeChild: Vp,
  removeChildFromContainer: Hp,
  resetAfterCommit: Pp,
  resetTextContent: Rp,
  run: of.unstable_runWithPriority,
  scheduleTimeout: Mp,
  shouldDeprioritizeSubtree: Tp,
  shouldSetTextContent: Op,
  supportsMutation: zp,
  unhideInstance: Xp,
  unhideTextInstance: Qp,
  warnsIfNotActing: Dp
}, Symbol.toStringTag, { value: "Module" }));
var eg = Object.defineProperty, tg = Object.defineProperties, ng = Object.getOwnPropertyDescriptors, h0 = Object.getOwnPropertySymbols, rg = Object.prototype.hasOwnProperty, ig = Object.prototype.propertyIsEnumerable, p0 = (u, d, w) => d in u ? eg(u, d, { enumerable: !0, configurable: !0, writable: !0, value: w }) : u[d] = w, g0 = (u, d) => {
  for (var w in d || (d = {}))
    rg.call(d, w) && p0(u, w, d[w]);
  if (h0)
    for (var w of h0(d))
      ig.call(d, w) && p0(u, w, d[w]);
  return u;
}, og = (u, d) => tg(u, ng(d)), m0, y0;
typeof window < "u" && ((m0 = window.document) != null && m0.createElement || ((y0 = window.navigator) == null ? void 0 : y0.product) === "ReactNative") ? Ie.useLayoutEffect : Ie.useEffect;
function I0(u, d, w) {
  if (!u)
    return;
  if (w(u) === !0)
    return u;
  let O = u.child;
  for (; O; ) {
    const M = I0(O, d, w);
    if (M)
      return M;
    O = O.sibling;
  }
}
function D0(u) {
  try {
    return Object.defineProperties(u, {
      _currentRenderer: {
        get() {
          return null;
        },
        set() {
        }
      },
      _currentRenderer2: {
        get() {
          return null;
        },
        set() {
        }
      }
    });
  } catch {
    return u;
  }
}
const v0 = console.error;
console.error = function() {
  const u = [...arguments].join("");
  if (u != null && u.startsWith("Warning:") && u.includes("useContext")) {
    console.error = v0;
    return;
  }
  return v0.apply(this, arguments);
};
const mf = D0(Ie.createContext(null));
class z0 extends Ie.Component {
  render() {
    return /* @__PURE__ */ Ie.createElement(mf.Provider, {
      value: this._reactInternals
    }, this.props.children);
  }
}
function sg() {
  const u = Ie.useContext(mf);
  if (u === null)
    throw new Error("its-fine: useFiber must be called within a <FiberProvider />!");
  const d = Ie.useId();
  return Ie.useMemo(() => {
    for (const O of [u, u == null ? void 0 : u.alternate]) {
      if (!O)
        continue;
      const M = I0(O, !1, (x) => {
        let h = x.memoizedState;
        for (; h; ) {
          if (h.memoizedState === d)
            return !0;
          h = h.next;
        }
      });
      if (M)
        return M;
    }
  }, [u, d]);
}
function lg() {
  const u = sg(), [d] = Ie.useState(() => /* @__PURE__ */ new Map());
  d.clear();
  let w = u;
  for (; w; ) {
    if (w.type && typeof w.type == "object") {
      const M = w.type._context === void 0 && w.type.Provider === w.type ? w.type : w.type._context;
      M && M !== mf && !d.has(M) && d.set(M, Ie.useContext(D0(M)));
    }
    w = w.return;
  }
  return d;
}
function ag() {
  const u = lg();
  return Ie.useMemo(
    () => Array.from(u.keys()).reduce(
      (d, w) => (O) => /* @__PURE__ */ Ie.createElement(d, null, /* @__PURE__ */ Ie.createElement(w.Provider, og(g0({}, O), {
        value: u.get(w)
      }))),
      (d) => /* @__PURE__ */ Ie.createElement(z0, g0({}, d))
    ),
    [u]
  );
}
function ug(u) {
  const d = dr.useRef({});
  return dr.useLayoutEffect(() => {
    d.current = u;
  }), dr.useLayoutEffect(() => () => {
    d.current = {};
  }, []), d.current;
}
const cg = (u) => {
  const d = dr.useRef(null), w = dr.useRef(null), O = dr.useRef(null), M = ug(u), x = ag(), h = (m) => {
    const { forwardedRef: g } = u;
    g && (typeof g == "function" ? g(m) : g.current = m);
  };
  return dr.useLayoutEffect(() => (w.current = new Au.Stage({
    width: u.width,
    height: u.height,
    container: d.current
  }), h(w.current), O.current = Mu.createContainer(w.current, L0.LegacyRoot, !1, null), Mu.updateContainer(dr.createElement(x, {}, u.children), O.current), () => {
    Au.isBrowser && (h(null), Mu.updateContainer(null, O.current, null), w.current.destroy());
  }), []), dr.useLayoutEffect(() => {
    h(w.current), nd(w.current, u, M), Mu.updateContainer(dr.createElement(x, {}, u.children), O.current, null);
  }), dr.createElement("div", {
    ref: d,
    id: u.id,
    accessKey: u.accessKey,
    className: u.className,
    role: u.role,
    style: u.style,
    tabIndex: u.tabIndex,
    title: u.title
  });
}, _0 = "Layer", Yc = "Group", Ws = "Rect", G0 = "Circle", Lu = "Line", dg = "Image", fg = "Transformer", Mu = cp($p);
Mu.injectIntoDevTools({
  // @ts-ignore
  findHostInstanceByFiber: () => null,
  bundleType: 0,
  version: dr.version,
  rendererPackageName: "react-konva"
});
const hg = dr.forwardRef((u, d) => dr.createElement(z0, {}, dr.createElement(cg, { ...u, forwardedRef: d })));
var sf, S0;
function pg() {
  if (S0) return sf;
  S0 = 1;
  var u = Ou();
  return sf = function(w, O, M) {
    const x = u.useRef("loading"), h = u.useRef(), [m, g] = u.useState(0), C = u.useRef(), E = u.useRef(), N = u.useRef();
    return (C.current !== w || E.current !== O || N.current !== M) && (x.current = "loading", h.current = void 0, C.current = w, E.current = O, N.current = M), u.useLayoutEffect(
      function() {
        if (!w) return;
        var k = document.createElement("img");
        function _() {
          k.decode().catch(() => {
          }).finally(() => {
            x.current = "loaded", h.current = k, g(Math.random());
          });
        }
        function S() {
          x.current = "failed", h.current = void 0, g(Math.random());
        }
        return k.addEventListener("load", _), k.addEventListener("error", S), O && (k.crossOrigin = O), M && (k.referrerPolicy = M), k.src = w, function() {
          k.removeEventListener("load", _), k.removeEventListener("error", S);
        };
      },
      [w, O, M]
    ), [h.current, x.current];
  }, sf;
}
var gg = pg();
const mg = /* @__PURE__ */ $c(gg);
function U0(u = "") {
  return { version: "konva-1", background: u, objects: [] };
}
function Nu(u) {
  return JSON.parse(JSON.stringify(u));
}
function js() {
  return `obj_${Math.random().toString(36).slice(2, 10)}_${Date.now().toString(36)}`;
}
function lf(u) {
  return !u || !Array.isArray(u.objects) ? U0((u == null ? void 0 : u.background) ?? "") : {
    version: u.version || "konva-1",
    background: u.background ?? "",
    objects: u.objects.filter(Boolean),
    meta: u.meta ? { ...u.meta } : void 0
  };
}
const yg = {
  allow_select: !0,
  allow_drag: !0,
  allow_rotate: !0,
  allow_scale: !0,
  allow_delete: !0,
  respect_object_locks: !0
}, vg = [
  "top-left",
  "top-right",
  "bottom-left",
  "bottom-right",
  "middle-left",
  "middle-right",
  "top-center",
  "bottom-center"
];
function _g(u) {
  return u.objects.some(
    (d) => d.locked === !0 || d.groupId !== void 0 || d.type === "group" || d.draggable === !1 || d.selectable === !1 || d.scalable === !1 || d.rotatable === !1 || d.deletable === !1 || d.listening === !1 || d.dragConstraint !== void 0
  );
}
function Sg(u, d) {
  const w = {
    ...yg,
    ...u ?? {}
  };
  return !u && !_g(d) ? { ...w, respect_object_locks: !1 } : w;
}
function wg(u, d) {
  return u === "transform" || u === "rect_crop" && d.type === "crop";
}
function xg(u, d) {
  return u === "transform" || u === "rect_crop" && d.type === "crop";
}
function Zc(u, d, w) {
  if (u.type === "group")
    return {
      selectable: !1,
      draggable: !1,
      scalable: !1,
      rotatable: !1,
      deletable: !1,
      listening: !1
    };
  const O = w.respect_object_locks && u.locked === !0;
  let M = !O && u.selectable !== !1 && u.listening !== !1 && w.allow_select && wg(d, u);
  u.draggable === !1 && u.selectable !== !0 && (M = !1);
  const x = M && u.draggable !== !1 && w.allow_drag && xg(d, u), h = M && u.scalable !== !1 && w.allow_scale, m = M && u.rotatable !== !1 && w.allow_rotate, g = M && u.deletable !== !1 && w.allow_delete, C = u.listening !== !1 && !O;
  return {
    selectable: M,
    draggable: x,
    scalable: h,
    rotatable: m,
    deletable: g,
    listening: C
  };
}
function Cg(u) {
  const d = Math.hypot(u.x, u.y);
  return d < 1e-9 ? { x: 1, y: 0 } : { x: u.x / d, y: u.y / d };
}
function kg(u, d, w, O, M) {
  const x = Cg(w), h = u.x - d.x, m = u.y - d.y;
  let g = h * x.x + m * x.y;
  return O != null && (g = Math.max(O, g)), M != null && (g = Math.min(M, g)), {
    x: d.x + g * x.x,
    y: d.y + g * x.y
  };
}
function B0(u, d) {
  return u.type === "group" || u.dragConstraint ? null : u.groupId ? u.groupId : null;
}
function V0(u) {
  const d = /* @__PURE__ */ new Map();
  for (const O of u.objects)
    O.type === "group" && d.set(O.id, O);
  const w = /* @__PURE__ */ new Map();
  for (const O of u.objects) {
    const M = B0(O);
    if (!M) continue;
    const x = w.get(M) ?? [];
    x.push(O), w.set(M, x);
  }
  return Array.from(w.entries()).map(([O, M]) => ({
    groupId: O,
    descriptor: d.get(O),
    members: M
  }));
}
function Eg(u) {
  const d = /* @__PURE__ */ new Set();
  for (const w of V0(u))
    for (const O of w.members)
      d.add(O.id);
  return u.objects.filter(
    (w) => w.type !== "group" && !d.has(w.id)
  );
}
function w0(u, d, w) {
  const O = u.descriptor, M = {
    id: u.groupId,
    type: "rect",
    locked: O == null ? void 0 : O.locked,
    draggable: O == null ? void 0 : O.draggable,
    selectable: O == null ? void 0 : O.selectable,
    listening: O == null ? void 0 : O.listening,
    scalable: (O == null ? void 0 : O.scalable) ?? !1,
    rotatable: O == null ? void 0 : O.rotatable,
    deletable: O == null ? void 0 : O.deletable
  };
  return Zc(M, d, w);
}
function H0(u) {
  return `group-wrap-${u}`;
}
function Kc(u) {
  return u.startsWith("group-wrap-") ? u.slice(11) : null;
}
function Pg(u, d) {
  const w = B0(u);
  return w ? H0(w) : u.id;
}
function Rg(u, d) {
  return {
    ...u,
    x: d.x(),
    y: d.y(),
    rotation: d.rotation(),
    width: Math.max(1, (u.width ?? 0) * d.scaleX()),
    height: Math.max(1, (u.height ?? 0) * d.scaleY()),
    scaleX: 1,
    scaleY: 1
  };
}
function Tg(u, d) {
  return {
    ...u,
    x: d.x(),
    y: d.y(),
    rotation: d.rotation(),
    radius: Math.max(1, (u.radius ?? 1) * Math.max(d.scaleX(), d.scaleY())),
    scaleX: 1,
    scaleY: 1
  };
}
function Ng(u, d, w, O, M) {
  const x = u.x ?? 0, h = u.y ?? 0, m = u.points ?? [], g = Math.cos(O * Math.PI / 180), C = Math.sin(O * Math.PI / 180), E = [];
  for (let N = 0; N < m.length; N += 2) {
    const k = (m[N] ?? 0) + x, _ = (m[N + 1] ?? 0) + h, S = k * M, P = _ * M, I = S * g - P * C + d, H = S * C + P * g + w;
    E.push(I, H);
  }
  return {
    ...u,
    x: 0,
    y: 0,
    points: E,
    rotation: 0,
    scaleX: 1,
    scaleY: 1
  };
}
function Fg(u, d, w, O = 0, M = 1) {
  if (u.type === "rect" || u.type === "crop") {
    const x = Math.max(1, (u.width ?? 0) * M), h = Math.max(1, (u.height ?? 0) * M);
    return {
      ...u,
      x: d,
      y: w,
      width: x,
      height: h,
      rotation: (u.rotation ?? 0) + O,
      scaleX: 1,
      scaleY: 1
    };
  }
  return u.type === "circle" || u.type === "point" ? {
    ...u,
    x: d,
    y: w,
    rotation: (u.rotation ?? 0) + O,
    radius: Math.max(1, (u.radius ?? 1) * M),
    scaleX: 1,
    scaleY: 1
  } : u.type === "line" || u.type === "polygon" || u.type === "freedraw" ? Ng(u, d, w, O, M) : { ...u, x: d, y: w, rotation: (u.rotation ?? 0) + O };
}
function Mg(u, d, w) {
  return u.objects.map((O) => w.get(O.id) ?? O);
}
function Lg(u) {
  let d = u;
  for (; d; ) {
    if (d.getClassName() === "Transformer") return !0;
    d = d.getParent();
  }
  return !1;
}
const j0 = "rgba(0,0,0,0.001)";
function Ag(u) {
  return !u || u === "transparent" ? j0 : u;
}
function Fu(u, d) {
  return {
    scale: 1,
    x: u / 2,
    y: d / 2,
    rotation: 0
  };
}
const x0 = ({
  obj: u,
  interaction: d,
  onSelect: w,
  onDragEnd: O,
  onTransformEnd: M
}) => {
  const x = Ie.useRef(null);
  if (u.type === "group") return null;
  const h = {
    id: u.id,
    draggable: d.draggable,
    listening: d.listening,
    rotation: u.rotation ?? 0,
    scaleX: u.scaleX ?? 1,
    scaleY: u.scaleY ?? 1,
    onClick: d.selectable ? w : void 0,
    onTap: d.selectable ? w : void 0,
    onDragStart: (m) => {
      d.draggable && (x.current = { x: m.target.x(), y: m.target.y() });
    },
    onDragMove: (m) => {
      if (!d.draggable || !x.current) return;
      const g = u.dragConstraint;
      if (!g || g.type !== "axis" || !g.axis) return;
      const C = kg(
        { x: m.target.x(), y: m.target.y() },
        x.current,
        g.axis,
        g.min,
        g.max
      );
      m.target.position(C);
    },
    onDragEnd: (m) => {
      x.current = null, O(m.target);
    },
    onTransformEnd: (m) => M(m.target)
  };
  return u.type === "rect" || u.type === "crop" ? /* @__PURE__ */ Ke.jsx(
    Ws,
    {
      ...h,
      x: u.x ?? 0,
      y: u.y ?? 0,
      width: u.width ?? 0,
      height: u.height ?? 0,
      stroke: u.stroke,
      strokeWidth: u.strokeWidth,
      fill: u.type === "crop" ? Ag(u.fill) : u.fill,
      dash: u.type === "crop" ? [8, 4] : void 0
    }
  ) : u.type === "circle" || u.type === "point" ? /* @__PURE__ */ Ke.jsx(
    G0,
    {
      ...h,
      x: u.x ?? 0,
      y: u.y ?? 0,
      radius: u.radius ?? 3,
      stroke: u.stroke,
      strokeWidth: u.strokeWidth,
      fill: u.fill
    }
  ) : u.type === "line" || u.type === "freedraw" ? /* @__PURE__ */ Ke.jsx(
    Lu,
    {
      ...h,
      x: u.x ?? 0,
      y: u.y ?? 0,
      points: u.points ?? [],
      stroke: u.stroke,
      strokeWidth: u.strokeWidth,
      tension: u.type === "freedraw" ? 0.5 : 0,
      lineCap: "round",
      lineJoin: "round"
    }
  ) : u.type === "polygon" ? /* @__PURE__ */ Ke.jsx(
    Lu,
    {
      ...h,
      x: u.x ?? 0,
      y: u.y ?? 0,
      points: u.points ?? [],
      stroke: u.stroke,
      strokeWidth: u.strokeWidth,
      fill: u.fill,
      closed: !0
    }
  ) : null;
};
function Og(u, d) {
  if ((d == null ? void 0 : d.originX) != null && (d == null ? void 0 : d.originY) != null)
    return { x: d.originX, y: d.originY };
  let w = 1 / 0, O = 1 / 0, M = -1 / 0, x = -1 / 0;
  for (const h of u)
    if (h.type === "rect" || h.type === "crop") {
      const m = h.x ?? 0, g = h.y ?? 0;
      w = Math.min(w, m), O = Math.min(O, g), M = Math.max(M, m + (h.width ?? 0)), x = Math.max(x, g + (h.height ?? 0));
    } else if (h.type === "circle" || h.type === "point") {
      const m = h.x ?? 0, g = h.y ?? 0, C = h.radius ?? 0;
      w = Math.min(w, m - C), O = Math.min(O, g - C), M = Math.max(M, m + C), x = Math.max(x, g + C);
    } else if (h.points && h.points.length >= 2) {
      const m = h.x ?? 0, g = h.y ?? 0;
      for (let C = 0; C < h.points.length; C += 2) {
        const E = m + (h.points[C] ?? 0), N = g + (h.points[C + 1] ?? 0);
        w = Math.min(w, E), O = Math.min(O, N), M = Math.max(M, E), x = Math.max(x, N);
      }
    }
  return Number.isFinite(w) ? { x: (w + M) / 2, y: (O + x) / 2 } : { x: 0, y: 0 };
}
function C0(u, d, w, O) {
  const x = O.getAbsoluteTransform().copy().invert(), h = /* @__PURE__ */ new Map();
  for (const m of d.members) {
    const g = w.findOne(`#${m.id}`);
    if (!g) continue;
    const E = g.getAbsoluteTransform().copy().multiply(x).decompose();
    h.set(
      m.id,
      Fg(
        m,
        E.x,
        E.y,
        E.rotation,
        Math.max(E.scaleX, E.scaleY)
      )
    );
  }
  return w.position({ x: 0, y: 0 }), w.rotation(0), w.scale({ x: 1, y: 1 }), w.offset({ x: 0, y: 0 }), Mg(u, d.groupId, h);
}
function Ig(u, d) {
  if (u.type === "rect" || u.type === "crop") {
    const w = Rg(u, d);
    return d.scaleX(1), d.scaleY(1), w;
  }
  if (u.type === "circle" || u.type === "point") {
    const w = Tg(u, d);
    return d.scaleX(1), d.scaleY(1), w;
  }
  return {
    ...u,
    x: d.x(),
    y: d.y(),
    rotation: d.rotation(),
    scaleX: d.scaleX(),
    scaleY: d.scaleY()
  };
}
const Dg = 0.25, zg = 8, Xc = 1.15, k0 = 15, Qc = "rgba(0, 0, 0, 0.45)";
function Gg(u, d, w, O) {
  return {
    x: Math.min(u, u + w),
    y: Math.min(d, d + O),
    width: Math.abs(w),
    height: Math.abs(O)
  };
}
const Ug = ({
  bounds: u,
  canvasWidth: d,
  canvasHeight: w
}) => {
  const { x: O, y: M, width: x, height: h } = u;
  if (x < 1 || h < 1) return null;
  const m = O + x, g = M + h;
  return /* @__PURE__ */ Ke.jsxs(Ke.Fragment, { children: [
    /* @__PURE__ */ Ke.jsx(
      Ws,
      {
        x: 0,
        y: 0,
        width: d,
        height: M,
        fill: Qc,
        listening: !1
      }
    ),
    /* @__PURE__ */ Ke.jsx(
      Ws,
      {
        x: 0,
        y: g,
        width: d,
        height: Math.max(0, w - g),
        fill: Qc,
        listening: !1
      }
    ),
    /* @__PURE__ */ Ke.jsx(
      Ws,
      {
        x: 0,
        y: M,
        width: O,
        height: h,
        fill: Qc,
        listening: !1
      }
    ),
    /* @__PURE__ */ Ke.jsx(
      Ws,
      {
        x: m,
        y: M,
        width: Math.max(0, d - m),
        height: h,
        fill: Qc,
        listening: !1
      }
    )
  ] });
};
function E0(u) {
  if (!u) return null;
  const d = u.getPointerPosition();
  if (!d) return null;
  const w = u.getAbsoluteTransform().copy().invert(), O = u.findOne("#viewport-content");
  return O ? O.getAbsoluteTransform().copy().invert().point(d) : w.point(d);
}
const Bg = ({
  fillColor: u,
  strokeWidth: d,
  strokeColor: w,
  backgroundColor: O,
  backgroundImageURL: M,
  realtimeUpdateStreamlit: x,
  canvasHeight: h,
  canvasWidth: m,
  drawingMode: g,
  initialDrawing: C,
  displayToolbar: E,
  displayRadius: N,
  enableViewportControls: k,
  transformOptions: _,
  setStateValue: S
}) => {
  const P = Ie.useRef(null), I = Ie.useRef(null), H = Ie.useRef(null), v = Ie.useRef(null), f = Ie.useRef(null), R = Ie.useRef(null), D = Ie.useRef(
    `${O}|${M ?? ""}`
  ), j = Ie.useRef(!1), b = Ie.useRef(null), [F, G] = Ie.useState(
    () => lf(C)
  ), [U, Q] = Ie.useState([
    lf(C)
  ]), [Z, re] = Ie.useState(0), [Y, $] = Ie.useState(null), [pe, T] = Ie.useState(null), [z, W] = Ie.useState(
    () => Fu(m, h)
  ), [B] = mg(M ?? "", "anonymous"), L = Ie.useMemo(
    () => Sg(_, F),
    [_, F]
  ), X = Ie.useMemo(() => V0(F), [F.objects]), J = Ie.useMemo(() => Eg(F), [F.objects]), ue = Ie.useMemo(() => {
    if (!pe) return null;
    const ye = Kc(pe);
    if (ye) {
      const Ne = X.find((Re) => Re.groupId === ye);
      return Ne ? w0(Ne, g, L) : null;
    }
    const ke = F.objects.find((Ne) => Ne.id === pe);
    return ke ? Zc(ke, g, L) : null;
  }, [
    g,
    X,
    L,
    F.objects,
    pe
  ]), ge = Ie.useMemo(
    () => JSON.stringify((C == null ? void 0 : C.objects) ?? []),
    [C]
  );
  Ie.useEffect(() => {
    W(Fu(m, h));
  }, [m, h]), Ie.useEffect(() => {
    const ye = lf(C), ke = `${O}|${M ?? ""}`, Ne = D.current !== ke;
    D.current = ke, G((Re) => {
      if (!(Ne || ye.objects.length > 0 || Re.objects.length === 0))
        return { ...Re, background: O };
      const Ze = {
        ...ye,
        background: O
      };
      return Q([Nu(Ze)]), re(0), T(null), $(null), W(Fu(m, h)), Ze;
    });
  }, [
    ge,
    O,
    M,
    C,
    m,
    h
  ]), Ie.useEffect(() => {
    var Ze;
    const ye = f.current, ke = P.current;
    if (!ye || !ke) return;
    const Ne = (It, Jn, Sn) => {
      var rn;
      ye.rotateEnabled(Jn), ye.resizeEnabled(Sn), ye.enabledAnchors(
        Sn ? [...vg] : []
      ), R.current = It, ye.nodes([It]), (rn = ye.getLayer()) == null || rn.batchDraw();
    }, Re = F.objects.find((It) => It.type === "crop");
    if (g === "rect_crop" && Re && !Y) {
      const It = ke.findOne(`#${Re.id}`);
      It && Ne(It, !1, !0);
      return;
    }
    if (g !== "transform" || !pe || !ue) {
      ye.nodes([]), R.current = null, (Ze = ye.getLayer()) == null || Ze.batchDraw();
      return;
    }
    const $e = ke.findOne(`#${pe}`);
    $e && Ne(
      $e,
      ue.rotatable,
      ue.scalable
    );
  }, [
    pe,
    ue,
    g,
    F.objects,
    Y
  ]);
  const se = Ie.useCallback(
    (ye) => {
      Q((ke) => [...ke.slice(0, Z + 1), Nu(ye)]), re((ke) => ke + 1);
    },
    [Z]
  ), q = Ie.useCallback(
    (ye) => {
      const ke = I.current, Ne = H.current;
      !ke || !Ne || requestAnimationFrame(() => {
        const Re = {
          x: Ne.x(),
          y: Ne.y(),
          scaleX: Ne.scaleX(),
          scaleY: Ne.scaleY(),
          rotation: Ne.rotation()
        }, $e = Fu(m, h);
        Ne.position({ x: $e.x, y: $e.y }), Ne.scale({ x: $e.scale, y: $e.scale }), Ne.rotation($e.rotation);
        const Ze = Ne.findOne("#crop-chrome"), It = [];
        Ze && (It.push(Ze), Ze.visible(!1));
        for (const Sn of F.objects) {
          if (Sn.type !== "crop") continue;
          const rn = Ne.findOne(`#${Sn.id}`);
          rn && (It.push(rn), rn.visible(!1));
        }
        ke.batchDraw();
        const Jn = ke.toDataURL({
          pixelRatio: 1,
          mimeType: "image/png",
          x: 0,
          y: 0,
          width: m,
          height: h
        });
        Ne.position({ x: Re.x, y: Re.y }), Ne.scale({ x: Re.scaleX, y: Re.scaleY }), Ne.rotation(Re.rotation);
        for (const Sn of It)
          Sn.visible(!0);
        ke.batchDraw(), S("image_data_url", Jn), S("json_data", ye);
      });
    },
    [h, m, F.objects, S]
  ), te = Ie.useCallback(
    (ye, ke) => {
      const Ne = Nu(ye);
      G(Ne), se(Ne), ((ke == null ? void 0 : ke.emit) ?? x) && q(Ne);
    },
    [q, se, x]
  ), me = Ie.useCallback(() => {
    if (Z <= 0) return;
    const ye = Z - 1, ke = Nu(U[ye]);
    re(ye), G(ke), T(null), x && q(ke);
  }, [q, U, Z, x]), xe = Ie.useCallback(() => {
    if (Z >= U.length - 1) return;
    const ye = Z + 1, ke = Nu(U[ye]);
    re(ye), G(ke), T(null), x && q(ke);
  }, [q, U, Z, x]), Pe = Ie.useCallback(() => {
    const ye = U0(O);
    te(ye, { emit: !0 }), T(null), $(null);
  }, [O, te]), Be = Ie.useCallback(() => {
    q(F);
  }, [q, F]), Ge = Ie.useCallback(() => {
    W(Fu(m, h));
  }, [h, m]), be = Ie.useCallback(
    (ye, ke) => {
      W((Ne) => {
        const Re = Math.min(
          zg,
          Math.max(Dg, Ne.scale * ye)
        );
        if (!ke)
          return { ...Ne, scale: Re };
        const $e = H.current;
        if (!$e)
          return { ...Ne, scale: Re };
        const It = $e.getAbsoluteTransform().copy().invert().point(ke), Jn = m / 2, Sn = h / 2, rn = Math.cos(Ne.rotation * Math.PI / 180), Oi = Math.sin(Ne.rotation * Math.PI / 180), ui = It.x - Jn, ci = It.y - Sn, qs = Ne.x + Ne.scale * (rn * ui - Oi * ci), po = Ne.y + Ne.scale * (Oi * ui + rn * ci), go = qs - Re * (rn * ui - Oi * ci), as = po - Re * (Oi * ui + rn * ci);
        return { ...Ne, scale: Re, x: go, y: as };
      });
    },
    [h, m]
  ), je = Ie.useCallback((ye) => {
    W((ke) => ({
      ...ke,
      rotation: ke.rotation + ye
    }));
  }, []), dt = Ie.useCallback(
    (ye) => {
      te({
        ...F,
        background: O,
        objects: [...F.objects, ye]
      });
    },
    [O, te, F]
  ), st = Ie.useCallback(
    (ye) => {
      const ke = F.objects.filter((Ne) => Ne.type !== "crop");
      te({
        ...F,
        background: O,
        objects: [...ke, { ...ye, type: "crop" }]
      }), T(ye.id);
    },
    [O, te, F]
  ), Je = Ie.useMemo(
    () => F.objects.find((ye) => ye.type === "crop") ?? null,
    [F.objects]
  ), bn = Ie.useMemo(() => {
    if ((Y == null ? void 0 : Y.kind) === "rect" && g === "rect_crop") {
      const ye = Gg(
        Y.x,
        Y.y,
        Y.width,
        Y.height
      );
      return ye.width > 0 && ye.height > 0 ? ye : null;
    }
    return Je ? {
      x: Je.x ?? 0,
      y: Je.y ?? 0,
      width: Je.width ?? 0,
      height: Je.height ?? 0
    } : null;
  }, [Je, Y, g]), Rt = Ie.useCallback(
    (ye) => {
      if (!k) return;
      ye.evt.preventDefault();
      const ke = P.current;
      if (!ke) return;
      const Ne = ke.getPointerPosition();
      if (!Ne) return;
      const Re = ye.evt.deltaY > 0 ? 1 / Xc : Xc;
      be(Re, Ne);
    },
    [k, be]
  ), Hn = Ie.useCallback(
    (ye) => {
      const ke = P.current;
      if (k && (g === "pan" || ye.evt.button === 1 || ye.evt.altKey || ye.evt.buttons === 4)) {
        j.current = !0, b.current = { x: ye.evt.clientX, y: ye.evt.clientY };
        return;
      }
      const Re = E0(ke);
      if (Re) {
        if (g === "transform") {
          (ye.target === ke || ye.target.id() === "viewport-content") && T(null);
          return;
        }
        if (g !== "pan") {
          if (g === "point") {
            dt({
              id: js(),
              type: "point",
              x: Re.x,
              y: Re.y,
              radius: N,
              fill: w,
              stroke: w,
              strokeWidth: 1
            });
            return;
          }
          if (g === "polygon") {
            $(($e) => ($e == null ? void 0 : $e.kind) === "polygon" ? { kind: "polygon", points: [...$e.points, Re.x, Re.y] } : { kind: "polygon", points: [Re.x, Re.y] });
            return;
          }
          if (g === "freedraw") {
            $({ kind: "freedraw", points: [Re.x, Re.y] });
            return;
          }
          if (g === "line") {
            $({ kind: "line", x1: Re.x, y1: Re.y, x2: Re.x, y2: Re.y });
            return;
          }
          if (g === "rect") {
            $({ kind: "rect", x: Re.x, y: Re.y, width: 0, height: 0 });
            return;
          }
          if (g === "rect_crop") {
            if (Lg(ye.target))
              return;
            const $e = F.objects.find((Ze) => Ze.type === "crop");
            if ($e && ye.target.id() === $e.id) {
              T($e.id);
              return;
            }
            T(null), $({ kind: "rect", x: Re.x, y: Re.y, width: 0, height: 0 });
            return;
          }
          g === "circle" && $({ kind: "circle", x: Re.x, y: Re.y, radius: 0 });
        }
      }
    },
    [
      dt,
      N,
      g,
      k,
      F.objects,
      w
    ]
  ), ft = Ie.useCallback(
    (ye) => {
      if (j.current && b.current) {
        const Ne = ye.evt.clientX - b.current.x, Re = ye.evt.clientY - b.current.y;
        b.current = { x: ye.evt.clientX, y: ye.evt.clientY }, W(($e) => ({
          ...$e,
          x: $e.x + Ne,
          y: $e.y + Re
        }));
        return;
      }
      const ke = E0(P.current);
      if (!(!ke || !Y)) {
        if (Y.kind === "freedraw") {
          $({ kind: "freedraw", points: [...Y.points, ke.x, ke.y] });
          return;
        }
        if (Y.kind === "line") {
          $({ ...Y, x2: ke.x, y2: ke.y });
          return;
        }
        if (Y.kind === "rect") {
          $({
            ...Y,
            width: ke.x - Y.x,
            height: ke.y - Y.y
          });
          return;
        }
        if (Y.kind === "circle") {
          const Ne = ke.x - Y.x, Re = ke.y - Y.y;
          $({ ...Y, radius: Math.sqrt(Ne * Ne + Re * Re) });
        }
      }
    },
    [Y]
  ), dn = Ie.useCallback(() => {
    if (Y) {
      if (Y.kind === "freedraw" && Y.points.length >= 4)
        dt({
          id: js(),
          type: "freedraw",
          points: Y.points,
          stroke: w,
          strokeWidth: d,
          fill: ""
        });
      else if (Y.kind === "line")
        dt({
          id: js(),
          type: "line",
          points: [Y.x1, Y.y1, Y.x2, Y.y2],
          stroke: w,
          strokeWidth: d
        });
      else if (Y.kind === "rect") {
        const ye = Math.min(Y.x, Y.x + Y.width), ke = Math.min(Y.y, Y.y + Y.height), Ne = Math.abs(Y.width), Re = Math.abs(Y.height);
        Ne > 1 && Re > 1 && (g === "rect_crop" ? st({
          id: (Je == null ? void 0 : Je.id) ?? js(),
          type: "crop",
          x: ye,
          y: ke,
          width: Ne,
          height: Re,
          stroke: w,
          strokeWidth: d,
          fill: j0
        }) : dt({
          id: js(),
          type: "rect",
          x: ye,
          y: ke,
          width: Ne,
          height: Re,
          stroke: w,
          strokeWidth: d,
          fill: u
        }));
      } else Y.kind === "circle" && Y.radius > 1 && dt({
        id: js(),
        type: "circle",
        x: Y.x,
        y: Y.y,
        radius: Y.radius,
        stroke: w,
        strokeWidth: d,
        fill: u
      });
      Y.kind !== "polygon" && $(null);
    }
  }, [
    dt,
    Je,
    Y,
    g,
    u,
    st,
    w,
    d
  ]), Vt = Ie.useCallback(() => {
    if (j.current) {
      j.current = !1, b.current = null;
      return;
    }
    g === "polygon" || g === "transform" || g === "pan" || dn();
  }, [g, dn]), fr = Ie.useCallback(
    (ye) => {
      if (ye.evt.preventDefault(), !(g !== "polygon" || (Y == null ? void 0 : Y.kind) !== "polygon")) {
        if (Y.points.length < 6) {
          $(null);
          return;
        }
        dt({
          id: js(),
          type: "polygon",
          points: Y.points,
          stroke: w,
          strokeWidth: d,
          fill: u
        }), $(null);
      }
    },
    [dt, Y, g, u, w, d]
  ), Kt = Ie.useCallback(() => {
    if (g === "polygon" && (Y == null ? void 0 : Y.kind) === "polygon") {
      Y.points.length <= 2 ? $(null) : $({
        kind: "polygon",
        points: Y.points.slice(0, -2)
      });
      return;
    }
    if (g === "transform" && pe) {
      if (!(ue != null && ue.deletable)) return;
      const ye = Kc(pe);
      if (ye) {
        const ke = X.find((Re) => Re.groupId === ye);
        if (!ke) return;
        const Ne = new Set(ke.members.map((Re) => Re.id));
        te({
          ...F,
          objects: F.objects.filter(
            (Re) => Re.id !== ye && !Ne.has(Re.id)
          )
        });
      } else
        te({
          ...F,
          objects: F.objects.filter((ke) => ke.id !== pe)
        });
      T(null);
      return;
    }
    g === "rect_crop" && Je && (te({
      ...F,
      objects: F.objects.filter((ye) => ye.type !== "crop")
    }), T(null));
  }, [
    te,
    Je,
    Y,
    g,
    X,
    F,
    pe,
    ue
  ]), Mn = Ie.useCallback(
    (ye) => {
      g !== "transform" && g !== "rect_crop" || !Zc(ye, g, L).selectable || T(Pg(ye));
    },
    [g, L, F]
  ), Xt = Ie.useCallback(
    (ye, ke) => {
      const Ne = Kc(ye), Re = H.current;
      if (Ne && Re) {
        const Ze = X.find((Jn) => Jn.groupId === Ne);
        if (!Ze) return;
        const It = C0(
          F,
          Ze,
          ke,
          Re
        );
        te({ ...F, objects: It });
        return;
      }
      const $e = F.objects.map((Ze) => Ze.id !== ye ? Ze : Ig(Ze, ke));
      te({ ...F, objects: $e });
    },
    [te, X, F]
  ), _n = Ie.useCallback(
    (ye, ke) => {
      const Ne = Kc(ye), Re = H.current;
      if (Ne && Re) {
        const Ze = X.find((Jn) => Jn.groupId === Ne);
        if (!Ze) return;
        const It = C0(
          F,
          Ze,
          ke,
          Re
        );
        te({ ...F, objects: It });
        return;
      }
      const $e = F.objects.map(
        (Ze) => Ze.id === ye ? { ...Ze, x: ke.x(), y: ke.y() } : Ze
      );
      te({ ...F, objects: $e });
    },
    [te, X, F]
  ), Ot = {
    background: O || "transparent",
    border: "1px solid var(--st-gray-color, #ddd)",
    display: "block",
    cursor: g === "pan" || j.current ? "grab" : "crosshair"
  }, Lt = {
    id: "viewport-content",
    x: z.x,
    y: z.y,
    scaleX: z.scale,
    scaleY: z.scale,
    rotation: z.rotation,
    offsetX: m / 2,
    offsetY: h / 2
  }, Yr = Math.round(z.scale * 100);
  return /* @__PURE__ */ Ke.jsxs(
    "div",
    {
      style: { fontFamily: "var(--st-font, sans-serif)", width: m },
      children: [
        E && /* @__PURE__ */ Ke.jsxs(
          "div",
          {
            style: {
              display: "flex",
              flexWrap: "wrap",
              gap: 8,
              marginBottom: 8,
              alignItems: "center"
            },
            children: [
              /* @__PURE__ */ Ke.jsx("button", { type: "button", onClick: me, disabled: Z <= 0, children: "Undo" }),
              /* @__PURE__ */ Ke.jsx(
                "button",
                {
                  type: "button",
                  onClick: xe,
                  disabled: Z >= U.length - 1,
                  children: "Redo"
                }
              ),
              /* @__PURE__ */ Ke.jsx("button", { type: "button", onClick: Pe, children: "Clear" }),
              !x && /* @__PURE__ */ Ke.jsx("button", { type: "button", onClick: Be, children: "Send to Streamlit" }),
              k && /* @__PURE__ */ Ke.jsxs(Ke.Fragment, { children: [
                /* @__PURE__ */ Ke.jsx("button", { type: "button", onClick: () => be(Xc), children: "Zoom +" }),
                /* @__PURE__ */ Ke.jsx("button", { type: "button", onClick: () => be(1 / Xc), children: "Zoom −" }),
                /* @__PURE__ */ Ke.jsx("button", { type: "button", onClick: () => je(-k0), children: "Tilt ↶" }),
                /* @__PURE__ */ Ke.jsx("button", { type: "button", onClick: () => je(k0), children: "Tilt ↷" }),
                /* @__PURE__ */ Ke.jsx("button", { type: "button", onClick: Ge, children: "Reset view" }),
                /* @__PURE__ */ Ke.jsxs("span", { style: { fontSize: 12, opacity: 0.75 }, children: [
                  Yr,
                  "% · ",
                  Math.round(z.rotation),
                  "°"
                ] })
              ] }),
              /* @__PURE__ */ Ke.jsxs("span", { style: { marginLeft: "auto", fontSize: 12, opacity: 0.7 }, children: [
                "mode: ",
                g
              ] })
            ]
          }
        ),
        /* @__PURE__ */ Ke.jsxs(
          hg,
          {
            width: m,
            height: h,
            ref: P,
            style: Ot,
            onMouseDown: Hn,
            onMousemove: ft,
            onMouseup: Vt,
            onMouseLeave: Vt,
            onContextMenu: fr,
            onDblClick: Kt,
            onWheel: Rt,
            children: [
              /* @__PURE__ */ Ke.jsx(_0, { listening: !1, children: /* @__PURE__ */ Ke.jsx(Yc, { ref: v, ...Lt, id: "viewport-bg", children: B && /* @__PURE__ */ Ke.jsx(
                dg,
                {
                  image: B,
                  width: m,
                  height: h,
                  listening: !1
                }
              ) }) }),
              /* @__PURE__ */ Ke.jsx(_0, { ref: I, children: /* @__PURE__ */ Ke.jsxs(Yc, { ref: H, ...Lt, children: [
                !B && !!O && /* @__PURE__ */ Ke.jsx(
                  Ws,
                  {
                    x: 0,
                    y: 0,
                    width: m,
                    height: h,
                    fill: O,
                    listening: !1
                  }
                ),
                bn && (g === "rect_crop" || Je) && /* @__PURE__ */ Ke.jsx(Yc, { id: "crop-chrome", listening: !1, children: /* @__PURE__ */ Ke.jsx(
                  Ug,
                  {
                    bounds: bn,
                    canvasWidth: m,
                    canvasHeight: h
                  }
                ) }),
                J.map((ye) => /* @__PURE__ */ Ke.jsx(
                  x0,
                  {
                    obj: ye,
                    interaction: Zc(
                      ye,
                      g,
                      L
                    ),
                    onSelect: () => Mn(ye),
                    onDragEnd: (ke) => _n(ye.id, ke),
                    onTransformEnd: (ke) => Xt(ye.id, ke)
                  },
                  ye.id
                )),
                X.map((ye) => {
                  const ke = w0(
                    ye,
                    g,
                    L
                  ), Ne = Og(ye.members, ye.descriptor), Re = H0(ye.groupId), $e = {
                    selectable: !0,
                    draggable: !1,
                    scalable: !1,
                    rotatable: !1,
                    deletable: !1,
                    listening: !0
                  };
                  return /* @__PURE__ */ Ke.jsx(
                    Yc,
                    {
                      id: Re,
                      x: Ne.x,
                      y: Ne.y,
                      offsetX: Ne.x,
                      offsetY: Ne.y,
                      draggable: ke.draggable,
                      listening: ke.listening || ke.selectable,
                      onClick: () => {
                        ke.selectable && T(Re);
                      },
                      onTap: () => {
                        ke.selectable && T(Re);
                      },
                      onDragEnd: (Ze) => _n(Re, Ze.target),
                      onTransformEnd: (Ze) => Xt(Re, Ze.target),
                      children: ye.members.map((Ze) => /* @__PURE__ */ Ke.jsx(
                        x0,
                        {
                          obj: Ze,
                          interaction: $e,
                          onSelect: () => Mn(Ze),
                          onDragEnd: () => {
                          },
                          onTransformEnd: () => {
                          }
                        },
                        Ze.id
                      ))
                    },
                    ye.groupId
                  );
                }),
                (Y == null ? void 0 : Y.kind) === "freedraw" && /* @__PURE__ */ Ke.jsx(
                  Lu,
                  {
                    points: Y.points,
                    stroke: w,
                    strokeWidth: d,
                    tension: 0.5,
                    lineCap: "round",
                    lineJoin: "round",
                    listening: !1
                  }
                ),
                (Y == null ? void 0 : Y.kind) === "line" && /* @__PURE__ */ Ke.jsx(
                  Lu,
                  {
                    points: [Y.x1, Y.y1, Y.x2, Y.y2],
                    stroke: w,
                    strokeWidth: d,
                    listening: !1
                  }
                ),
                (Y == null ? void 0 : Y.kind) === "rect" && /* @__PURE__ */ Ke.jsx(
                  Ws,
                  {
                    x: Math.min(Y.x, Y.x + Y.width),
                    y: Math.min(Y.y, Y.y + Y.height),
                    width: Math.abs(Y.width),
                    height: Math.abs(Y.height),
                    stroke: w,
                    strokeWidth: d,
                    fill: g === "rect_crop" ? "transparent" : u,
                    dash: g === "rect_crop" ? [8, 4] : void 0,
                    listening: !1
                  }
                ),
                (Y == null ? void 0 : Y.kind) === "circle" && /* @__PURE__ */ Ke.jsx(
                  G0,
                  {
                    x: Y.x,
                    y: Y.y,
                    radius: Y.radius,
                    stroke: w,
                    strokeWidth: d,
                    fill: u,
                    listening: !1
                  }
                ),
                (Y == null ? void 0 : Y.kind) === "polygon" && Y.points.length >= 2 && /* @__PURE__ */ Ke.jsx(
                  Lu,
                  {
                    points: Y.points,
                    stroke: w,
                    strokeWidth: d,
                    fill: u,
                    closed: !1,
                    listening: !1
                  }
                ),
                (g === "transform" || g === "rect_crop") && /* @__PURE__ */ Ke.jsx(fg, { ref: f })
              ] }) })
            ]
          }
        )
      ]
    }
  );
}, bc = /* @__PURE__ */ new WeakMap(), n2 = (u) => {
  const { data: d, parentElement: w, setStateValue: O } = u, M = w.querySelector(".react-root");
  if (!M)
    throw new Error("Unexpected: React root element not found");
  let x = bc.get(w);
  return x || (x = _1.createRoot(M), bc.set(w, x)), x.render(
    /* @__PURE__ */ Ke.jsx(Ie.StrictMode, { children: /* @__PURE__ */ Ke.jsx(
      Bg,
      {
        fillColor: d.fillColor ?? "#eee",
        strokeWidth: d.strokeWidth ?? 20,
        strokeColor: d.strokeColor ?? "black",
        backgroundColor: d.backgroundColor ?? "",
        backgroundImageURL: d.backgroundImageURL ?? null,
        realtimeUpdateStreamlit: d.realtimeUpdateStreamlit ?? !0,
        canvasHeight: d.canvasHeight ?? 400,
        canvasWidth: d.canvasWidth ?? 600,
        drawingMode: d.drawingMode ?? "freedraw",
        initialDrawing: d.initialDrawing,
        displayToolbar: d.displayToolbar ?? !0,
        displayRadius: d.displayRadius ?? 3,
        enableViewportControls: d.enableViewportControls ?? !0,
        transformOptions: d.transformOptions ?? {},
        setStateValue: O
      }
    ) })
  ), () => {
    const h = bc.get(w);
    h && (h.unmount(), bc.delete(w));
  };
};
export {
  n2 as default
};
