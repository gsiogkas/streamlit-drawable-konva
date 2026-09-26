var Jf = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ed(l) {
  return l && l.__esModule && Object.prototype.hasOwnProperty.call(l, "default") ? l.default : l;
}
var Hd = { exports: {} }, Ha = {}, jd = { exports: {} }, nt = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zf;
function S1() {
  if (Zf) return nt;
  Zf = 1;
  var l = Symbol.for("react.element"), d = Symbol.for("react.portal"), _ = Symbol.for("react.fragment"), L = Symbol.for("react.strict_mode"), N = Symbol.for("react.profiler"), C = Symbol.for("react.provider"), f = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), x = Symbol.for("react.memo"), k = Symbol.for("react.lazy"), F = Symbol.iterator;
  function E(M) {
    return M === null || typeof M != "object" ? null : (M = F && M[F] || M["@@iterator"], typeof M == "function" ? M : null);
  }
  var S = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, w = Object.assign, R = {};
  function O(M, X, b) {
    this.props = M, this.context = X, this.refs = R, this.updater = b || S;
  }
  O.prototype.isReactComponent = {}, O.prototype.setState = function(M, X) {
    if (typeof M != "object" && typeof M != "function" && M != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, M, X, "setState");
  }, O.prototype.forceUpdate = function(M) {
    this.updater.enqueueForceUpdate(this, M, "forceUpdate");
  };
  function H() {
  }
  H.prototype = O.prototype;
  function v(M, X, b) {
    this.props = M, this.context = X, this.refs = R, this.updater = b || S;
  }
  var h = v.prototype = new H();
  h.constructor = v, w(h, O.prototype), h.isPureReactComponent = !0;
  var T = Array.isArray, I = Object.prototype.hasOwnProperty, j = { current: null }, J = { key: !0, ref: !0, __self: !0, __source: !0 };
  function z(M, X, b) {
    var ce, me = {}, oe = null, q = null;
    if (X != null) for (ce in X.ref !== void 0 && (q = X.ref), X.key !== void 0 && (oe = "" + X.key), X) I.call(X, ce) && !J.hasOwnProperty(ce) && (me[ce] = X[ce]);
    var se = arguments.length - 2;
    if (se === 1) me.children = b;
    else if (1 < se) {
      for (var ge = Array(se), ye = 0; ye < se; ye++) ge[ye] = arguments[ye + 2];
      me.children = ge;
    }
    if (M && M.defaultProps) for (ce in se = M.defaultProps, se) me[ce] === void 0 && (me[ce] = se[ce]);
    return { $$typeof: l, type: M, key: oe, ref: q, props: me, _owner: j.current };
  }
  function U(M, X) {
    return { $$typeof: l, type: M.type, key: X, ref: M.ref, props: M.props, _owner: M._owner };
  }
  function G(M) {
    return typeof M == "object" && M !== null && M.$$typeof === l;
  }
  function Y(M) {
    var X = { "=": "=0", ":": "=2" };
    return "$" + M.replace(/[=:]/g, function(b) {
      return X[b];
    });
  }
  var Z = /\/+/g;
  function ne(M, X) {
    return typeof M == "object" && M !== null && M.key != null ? Y("" + M.key) : X.toString(36);
  }
  function re(M, X, b, ce, me) {
    var oe = typeof M;
    (oe === "undefined" || oe === "boolean") && (M = null);
    var q = !1;
    if (M === null) q = !0;
    else switch (oe) {
      case "string":
      case "number":
        q = !0;
        break;
      case "object":
        switch (M.$$typeof) {
          case l:
          case d:
            q = !0;
        }
    }
    if (q) return q = M, me = me(q), M = ce === "" ? "." + ne(q, 0) : ce, T(me) ? (b = "", M != null && (b = M.replace(Z, "$&/") + "/"), re(me, X, b, "", function(ye) {
      return ye;
    })) : me != null && (G(me) && (me = U(me, b + (!me.key || q && q.key === me.key ? "" : ("" + me.key).replace(Z, "$&/") + "/") + M)), X.push(me)), 1;
    if (q = 0, ce = ce === "" ? "." : ce + ":", T(M)) for (var se = 0; se < M.length; se++) {
      oe = M[se];
      var ge = ce + ne(oe, se);
      q += re(oe, X, b, ge, me);
    }
    else if (ge = E(M), typeof ge == "function") for (M = ge.call(M), se = 0; !(oe = M.next()).done; ) oe = oe.value, ge = ce + ne(oe, se++), q += re(oe, X, b, ge, me);
    else if (oe === "object") throw X = String(M), Error("Objects are not valid as a React child (found: " + (X === "[object Object]" ? "object with keys {" + Object.keys(M).join(", ") + "}" : X) + "). If you meant to render a collection of children, use an array instead.");
    return q;
  }
  function ee(M, X, b) {
    if (M == null) return M;
    var ce = [], me = 0;
    return re(M, ce, "", "", function(oe) {
      return X.call(b, oe, me++);
    }), ce;
  }
  function Q(M) {
    if (M._status === -1) {
      var X = M._result;
      X = X(), X.then(function(b) {
        (M._status === 0 || M._status === -1) && (M._status = 1, M._result = b);
      }, function(b) {
        (M._status === 0 || M._status === -1) && (M._status = 2, M._result = b);
      }), M._status === -1 && (M._status = 0, M._result = X);
    }
    if (M._status === 1) return M._result.default;
    throw M._result;
  }
  var P = { current: null }, D = { transition: null }, W = { ReactCurrentDispatcher: P, ReactCurrentBatchConfig: D, ReactCurrentOwner: j };
  function B() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return nt.Children = { map: ee, forEach: function(M, X, b) {
    ee(M, function() {
      X.apply(this, arguments);
    }, b);
  }, count: function(M) {
    var X = 0;
    return ee(M, function() {
      X++;
    }), X;
  }, toArray: function(M) {
    return ee(M, function(X) {
      return X;
    }) || [];
  }, only: function(M) {
    if (!G(M)) throw Error("React.Children.only expected to receive a single React element child.");
    return M;
  } }, nt.Component = O, nt.Fragment = _, nt.Profiler = N, nt.PureComponent = v, nt.StrictMode = L, nt.Suspense = g, nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W, nt.act = B, nt.cloneElement = function(M, X, b) {
    if (M == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + M + ".");
    var ce = w({}, M.props), me = M.key, oe = M.ref, q = M._owner;
    if (X != null) {
      if (X.ref !== void 0 && (oe = X.ref, q = j.current), X.key !== void 0 && (me = "" + X.key), M.type && M.type.defaultProps) var se = M.type.defaultProps;
      for (ge in X) I.call(X, ge) && !J.hasOwnProperty(ge) && (ce[ge] = X[ge] === void 0 && se !== void 0 ? se[ge] : X[ge]);
    }
    var ge = arguments.length - 2;
    if (ge === 1) ce.children = b;
    else if (1 < ge) {
      se = Array(ge);
      for (var ye = 0; ye < ge; ye++) se[ye] = arguments[ye + 2];
      ce.children = se;
    }
    return { $$typeof: l, type: M.type, key: me, ref: oe, props: ce, _owner: q };
  }, nt.createContext = function(M) {
    return M = { $$typeof: f, _currentValue: M, _currentValue2: M, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, M.Provider = { $$typeof: C, _context: M }, M.Consumer = M;
  }, nt.createElement = z, nt.createFactory = function(M) {
    var X = z.bind(null, M);
    return X.type = M, X;
  }, nt.createRef = function() {
    return { current: null };
  }, nt.forwardRef = function(M) {
    return { $$typeof: m, render: M };
  }, nt.isValidElement = G, nt.lazy = function(M) {
    return { $$typeof: k, _payload: { _status: -1, _result: M }, _init: Q };
  }, nt.memo = function(M, X) {
    return { $$typeof: x, type: M, compare: X === void 0 ? null : X };
  }, nt.startTransition = function(M) {
    var X = D.transition;
    D.transition = {};
    try {
      M();
    } finally {
      D.transition = X;
    }
  }, nt.unstable_act = B, nt.useCallback = function(M, X) {
    return P.current.useCallback(M, X);
  }, nt.useContext = function(M) {
    return P.current.useContext(M);
  }, nt.useDebugValue = function() {
  }, nt.useDeferredValue = function(M) {
    return P.current.useDeferredValue(M);
  }, nt.useEffect = function(M, X) {
    return P.current.useEffect(M, X);
  }, nt.useId = function() {
    return P.current.useId();
  }, nt.useImperativeHandle = function(M, X, b) {
    return P.current.useImperativeHandle(M, X, b);
  }, nt.useInsertionEffect = function(M, X) {
    return P.current.useInsertionEffect(M, X);
  }, nt.useLayoutEffect = function(M, X) {
    return P.current.useLayoutEffect(M, X);
  }, nt.useMemo = function(M, X) {
    return P.current.useMemo(M, X);
  }, nt.useReducer = function(M, X, b) {
    return P.current.useReducer(M, X, b);
  }, nt.useRef = function(M) {
    return P.current.useRef(M);
  }, nt.useState = function(M) {
    return P.current.useState(M);
  }, nt.useSyncExternalStore = function(M, X, b) {
    return P.current.useSyncExternalStore(M, X, b);
  }, nt.useTransition = function() {
    return P.current.useTransition();
  }, nt.version = "18.3.1", nt;
}
var $f;
function Iu() {
  return $f || ($f = 1, jd.exports = S1()), jd.exports;
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
var eh;
function w1() {
  if (eh) return Ha;
  eh = 1;
  var l = Iu(), d = Symbol.for("react.element"), _ = Symbol.for("react.fragment"), L = Object.prototype.hasOwnProperty, N = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, C = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(m, g, x) {
    var k, F = {}, E = null, S = null;
    x !== void 0 && (E = "" + x), g.key !== void 0 && (E = "" + g.key), g.ref !== void 0 && (S = g.ref);
    for (k in g) L.call(g, k) && !C.hasOwnProperty(k) && (F[k] = g[k]);
    if (m && m.defaultProps) for (k in g = m.defaultProps, g) F[k] === void 0 && (F[k] = g[k]);
    return { $$typeof: d, type: m, key: E, ref: S, props: F, _owner: N.current };
  }
  return Ha.Fragment = _, Ha.jsx = f, Ha.jsxs = f, Ha;
}
var th;
function x1() {
  return th || (th = 1, Hd.exports = w1()), Hd.exports;
}
var Ve = x1(), Oe = Iu();
const dr = /* @__PURE__ */ ed(Oe);
var qc = {}, Wd = { exports: {} }, wr = {}, qd = { exports: {} }, Kd = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nh;
function C1() {
  return nh || (nh = 1, (function(l) {
    function d(D, W) {
      var B = D.length;
      D.push(W);
      e: for (; 0 < B; ) {
        var M = B - 1 >>> 1, X = D[M];
        if (0 < N(X, W)) D[M] = W, D[B] = X, B = M;
        else break e;
      }
    }
    function _(D) {
      return D.length === 0 ? null : D[0];
    }
    function L(D) {
      if (D.length === 0) return null;
      var W = D[0], B = D.pop();
      if (B !== W) {
        D[0] = B;
        e: for (var M = 0, X = D.length, b = X >>> 1; M < b; ) {
          var ce = 2 * (M + 1) - 1, me = D[ce], oe = ce + 1, q = D[oe];
          if (0 > N(me, B)) oe < X && 0 > N(q, me) ? (D[M] = q, D[oe] = B, M = oe) : (D[M] = me, D[ce] = B, M = ce);
          else if (oe < X && 0 > N(q, B)) D[M] = q, D[oe] = B, M = oe;
          else break e;
        }
      }
      return W;
    }
    function N(D, W) {
      var B = D.sortIndex - W.sortIndex;
      return B !== 0 ? B : D.id - W.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var C = performance;
      l.unstable_now = function() {
        return C.now();
      };
    } else {
      var f = Date, m = f.now();
      l.unstable_now = function() {
        return f.now() - m;
      };
    }
    var g = [], x = [], k = 1, F = null, E = 3, S = !1, w = !1, R = !1, O = typeof setTimeout == "function" ? setTimeout : null, H = typeof clearTimeout == "function" ? clearTimeout : null, v = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function h(D) {
      for (var W = _(x); W !== null; ) {
        if (W.callback === null) L(x);
        else if (W.startTime <= D) L(x), W.sortIndex = W.expirationTime, d(g, W);
        else break;
        W = _(x);
      }
    }
    function T(D) {
      if (R = !1, h(D), !w) if (_(g) !== null) w = !0, Q(I);
      else {
        var W = _(x);
        W !== null && P(T, W.startTime - D);
      }
    }
    function I(D, W) {
      w = !1, R && (R = !1, H(z), z = -1), S = !0;
      var B = E;
      try {
        for (h(W), F = _(g); F !== null && (!(F.expirationTime > W) || D && !Y()); ) {
          var M = F.callback;
          if (typeof M == "function") {
            F.callback = null, E = F.priorityLevel;
            var X = M(F.expirationTime <= W);
            W = l.unstable_now(), typeof X == "function" ? F.callback = X : F === _(g) && L(g), h(W);
          } else L(g);
          F = _(g);
        }
        if (F !== null) var b = !0;
        else {
          var ce = _(x);
          ce !== null && P(T, ce.startTime - W), b = !1;
        }
        return b;
      } finally {
        F = null, E = B, S = !1;
      }
    }
    var j = !1, J = null, z = -1, U = 5, G = -1;
    function Y() {
      return !(l.unstable_now() - G < U);
    }
    function Z() {
      if (J !== null) {
        var D = l.unstable_now();
        G = D;
        var W = !0;
        try {
          W = J(!0, D);
        } finally {
          W ? ne() : (j = !1, J = null);
        }
      } else j = !1;
    }
    var ne;
    if (typeof v == "function") ne = function() {
      v(Z);
    };
    else if (typeof MessageChannel < "u") {
      var re = new MessageChannel(), ee = re.port2;
      re.port1.onmessage = Z, ne = function() {
        ee.postMessage(null);
      };
    } else ne = function() {
      O(Z, 0);
    };
    function Q(D) {
      J = D, j || (j = !0, ne());
    }
    function P(D, W) {
      z = O(function() {
        D(l.unstable_now());
      }, W);
    }
    l.unstable_IdlePriority = 5, l.unstable_ImmediatePriority = 1, l.unstable_LowPriority = 4, l.unstable_NormalPriority = 3, l.unstable_Profiling = null, l.unstable_UserBlockingPriority = 2, l.unstable_cancelCallback = function(D) {
      D.callback = null;
    }, l.unstable_continueExecution = function() {
      w || S || (w = !0, Q(I));
    }, l.unstable_forceFrameRate = function(D) {
      0 > D || 125 < D ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : U = 0 < D ? Math.floor(1e3 / D) : 5;
    }, l.unstable_getCurrentPriorityLevel = function() {
      return E;
    }, l.unstable_getFirstCallbackNode = function() {
      return _(g);
    }, l.unstable_next = function(D) {
      switch (E) {
        case 1:
        case 2:
        case 3:
          var W = 3;
          break;
        default:
          W = E;
      }
      var B = E;
      E = W;
      try {
        return D();
      } finally {
        E = B;
      }
    }, l.unstable_pauseExecution = function() {
    }, l.unstable_requestPaint = function() {
    }, l.unstable_runWithPriority = function(D, W) {
      switch (D) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          D = 3;
      }
      var B = E;
      E = D;
      try {
        return W();
      } finally {
        E = B;
      }
    }, l.unstable_scheduleCallback = function(D, W, B) {
      var M = l.unstable_now();
      switch (typeof B == "object" && B !== null ? (B = B.delay, B = typeof B == "number" && 0 < B ? M + B : M) : B = M, D) {
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
      return X = B + X, D = { id: k++, callback: W, priorityLevel: D, startTime: B, expirationTime: X, sortIndex: -1 }, B > M ? (D.sortIndex = B, d(x, D), _(g) === null && D === _(x) && (R ? (H(z), z = -1) : R = !0, P(T, B - M))) : (D.sortIndex = X, d(g, D), w || S || (w = !0, Q(I))), D;
    }, l.unstable_shouldYield = Y, l.unstable_wrapCallback = function(D) {
      var W = E;
      return function() {
        var B = E;
        E = W;
        try {
          return D.apply(this, arguments);
        } finally {
          E = B;
        }
      };
    };
  })(Kd)), Kd;
}
var rh;
function hf() {
  return rh || (rh = 1, qd.exports = C1()), qd.exports;
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
var ih;
function k1() {
  if (ih) return wr;
  ih = 1;
  var l = Iu(), d = hf();
  function _(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, i = 1; i < arguments.length; i++) t += "&args[]=" + encodeURIComponent(arguments[i]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var L = /* @__PURE__ */ new Set(), N = {};
  function C(e, t) {
    f(e, t), f(e + "Capture", t);
  }
  function f(e, t) {
    for (N[e] = t, e = 0; e < t.length; e++) L.add(t[e]);
  }
  var m = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), g = Object.prototype.hasOwnProperty, x = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, k = {}, F = {};
  function E(e) {
    return g.call(F, e) ? !0 : g.call(k, e) ? !1 : x.test(e) ? F[e] = !0 : (k[e] = !0, !1);
  }
  function S(e, t, i, o) {
    if (i !== null && i.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return o ? !1 : i !== null ? !i.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function w(e, t, i, o) {
    if (t === null || typeof t > "u" || S(e, t, i, o)) return !0;
    if (o) return !1;
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
  function R(e, t, i, o, u, p, A) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = o, this.attributeNamespace = u, this.mustUseProperty = i, this.propertyName = e, this.type = t, this.sanitizeURL = p, this.removeEmptyString = A;
  }
  var O = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    O[e] = new R(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    O[t] = new R(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    O[e] = new R(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    O[e] = new R(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    O[e] = new R(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    O[e] = new R(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    O[e] = new R(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    O[e] = new R(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    O[e] = new R(e, 5, !1, e.toLowerCase(), null, !1, !1);
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
    O[t] = new R(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(H, v);
    O[t] = new R(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(H, v);
    O[t] = new R(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    O[e] = new R(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), O.xlinkHref = new R("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    O[e] = new R(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function h(e, t, i, o) {
    var u = O.hasOwnProperty(t) ? O[t] : null;
    (u !== null ? u.type !== 0 : o || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (w(t, i, u, o) && (i = null), o || u === null ? E(t) && (i === null ? e.removeAttribute(t) : e.setAttribute(t, "" + i)) : u.mustUseProperty ? e[u.propertyName] = i === null ? u.type === 3 ? !1 : "" : i : (t = u.attributeName, o = u.attributeNamespace, i === null ? e.removeAttribute(t) : (u = u.type, i = u === 3 || u === 4 && i === !0 ? "" : "" + i, o ? e.setAttributeNS(o, t, i) : e.setAttribute(t, i))));
  }
  var T = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, I = Symbol.for("react.element"), j = Symbol.for("react.portal"), J = Symbol.for("react.fragment"), z = Symbol.for("react.strict_mode"), U = Symbol.for("react.profiler"), G = Symbol.for("react.provider"), Y = Symbol.for("react.context"), Z = Symbol.for("react.forward_ref"), ne = Symbol.for("react.suspense"), re = Symbol.for("react.suspense_list"), ee = Symbol.for("react.memo"), Q = Symbol.for("react.lazy"), P = Symbol.for("react.offscreen"), D = Symbol.iterator;
  function W(e) {
    return e === null || typeof e != "object" ? null : (e = D && e[D] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var B = Object.assign, M;
  function X(e) {
    if (M === void 0) try {
      throw Error();
    } catch (i) {
      var t = i.stack.trim().match(/\n( *(at )?)/);
      M = t && t[1] || "";
    }
    return `
` + M + e;
  }
  var b = !1;
  function ce(e, t) {
    if (!e || b) return "";
    b = !0;
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
        } catch (fe) {
          var o = fe;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (fe) {
          o = fe;
        }
        e.call(t.prototype);
      }
      else {
        try {
          throw Error();
        } catch (fe) {
          o = fe;
        }
        e();
      }
    } catch (fe) {
      if (fe && o && typeof fe.stack == "string") {
        for (var u = fe.stack.split(`
`), p = o.stack.split(`
`), A = u.length - 1, K = p.length - 1; 1 <= A && 0 <= K && u[A] !== p[K]; ) K--;
        for (; 1 <= A && 0 <= K; A--, K--) if (u[A] !== p[K]) {
          if (A !== 1 || K !== 1)
            do
              if (A--, K--, 0 > K || u[A] !== p[K]) {
                var $ = `
` + u[A].replace(" at new ", " at ");
                return e.displayName && $.includes("<anonymous>") && ($ = $.replace("<anonymous>", e.displayName)), $;
              }
            while (1 <= A && 0 <= K);
          break;
        }
      }
    } finally {
      b = !1, Error.prepareStackTrace = i;
    }
    return (e = e ? e.displayName || e.name : "") ? X(e) : "";
  }
  function me(e) {
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
        return e = ce(e.type, !1), e;
      case 11:
        return e = ce(e.type.render, !1), e;
      case 1:
        return e = ce(e.type, !0), e;
      default:
        return "";
    }
  }
  function oe(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case J:
        return "Fragment";
      case j:
        return "Portal";
      case U:
        return "Profiler";
      case z:
        return "StrictMode";
      case ne:
        return "Suspense";
      case re:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case Y:
        return (e.displayName || "Context") + ".Consumer";
      case G:
        return (e._context.displayName || "Context") + ".Provider";
      case Z:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case ee:
        return t = e.displayName || null, t !== null ? t : oe(e.type) || "Memo";
      case Q:
        t = e._payload, e = e._init;
        try {
          return oe(e(t));
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
        return oe(t);
      case 8:
        return t === z ? "StrictMode" : "Mode";
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
  function se(e) {
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
  function ge(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function ye(e) {
    var t = ge(e) ? "checked" : "value", i = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), o = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof i < "u" && typeof i.get == "function" && typeof i.set == "function") {
      var u = i.get, p = i.set;
      return Object.defineProperty(e, t, { configurable: !0, get: function() {
        return u.call(this);
      }, set: function(A) {
        o = "" + A, p.call(this, A);
      } }), Object.defineProperty(e, t, { enumerable: i.enumerable }), { getValue: function() {
        return o;
      }, setValue: function(A) {
        o = "" + A;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[t];
      } };
    }
  }
  function Re(e) {
    e._valueTracker || (e._valueTracker = ye(e));
  }
  function Be(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var i = t.getValue(), o = "";
    return e && (o = ge(e) ? e.checked ? "true" : "false" : e.value), e = o, e !== i ? (t.setValue(e), !0) : !1;
  }
  function Ge(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function rt(e, t) {
    var i = t.checked;
    return B({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: i ?? e._wrapperState.initialChecked });
  }
  function We(e, t) {
    var i = t.defaultValue == null ? "" : t.defaultValue, o = t.checked != null ? t.checked : t.defaultChecked;
    i = se(t.value != null ? t.value : i), e._wrapperState = { initialChecked: o, initialValue: i, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function Dt(e, t) {
    t = t.checked, t != null && h(e, "checked", t, !1);
  }
  function $e(e, t) {
    Dt(e, t);
    var i = se(t.value), o = t.type;
    if (i != null) o === "number" ? (i === 0 && e.value === "" || e.value != i) && (e.value = "" + i) : e.value !== "" + i && (e.value = "" + i);
    else if (o === "submit" || o === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? Ut(e, t.type, i) : t.hasOwnProperty("defaultValue") && Ut(e, t.type, se(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function gt(e, t, i) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var o = t.type;
      if (!(o !== "submit" && o !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, i || t === e.value || (e.value = t), e.defaultValue = t;
    }
    i = e.name, i !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, i !== "" && (e.name = i);
  }
  function Ut(e, t, i) {
    (t !== "number" || Ge(e.ownerDocument) !== e) && (i == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + i && (e.defaultValue = "" + i));
  }
  var kt = Array.isArray;
  function _t(e, t, i, o) {
    if (e = e.options, t) {
      t = {};
      for (var u = 0; u < i.length; u++) t["$" + i[u]] = !0;
      for (i = 0; i < e.length; i++) u = t.hasOwnProperty("$" + e[i].value), e[i].selected !== u && (e[i].selected = u), u && o && (e[i].defaultSelected = !0);
    } else {
      for (i = "" + se(i), t = null, u = 0; u < e.length; u++) {
        if (e[u].value === i) {
          e[u].selected = !0, o && (e[u].defaultSelected = !0);
          return;
        }
        t !== null || e[u].disabled || (t = e[u]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function ut(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(_(91));
    return B({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function Sn(e, t) {
    var i = t.value;
    if (i == null) {
      if (i = t.children, t = t.defaultValue, i != null) {
        if (t != null) throw Error(_(92));
        if (kt(i)) {
          if (1 < i.length) throw Error(_(93));
          i = i[0];
        }
        t = i;
      }
      t == null && (t = ""), i = t;
    }
    e._wrapperState = { initialValue: se(i) };
  }
  function Qt(e, t) {
    var i = se(t.value), o = se(t.defaultValue);
    i != null && (i = "" + i, i !== e.value && (e.value = i), t.defaultValue == null && e.defaultValue !== i && (e.defaultValue = i)), o != null && (e.defaultValue = "" + o);
  }
  function fr(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function jt(e) {
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
    return e == null || e === "http://www.w3.org/1999/xhtml" ? jt(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var on, Ln = (function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, i, o, u) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, i, o, u);
      });
    } : e;
  })(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (on = on || document.createElement("div"), on.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = on.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function At(e, t) {
    if (t) {
      var i = e.firstChild;
      if (i && i === e.lastChild && i.nodeType === 3) {
        i.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Ot = {
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
  }, Lr = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Ot).forEach(function(e) {
    Lr.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), Ot[t] = Ot[e];
    });
  });
  function Di(e, t, i) {
    return t == null || typeof t == "boolean" || t === "" ? "" : i || typeof t != "number" || t === 0 || Ot.hasOwnProperty(e) && Ot[e] ? ("" + t).trim() : t + "px";
  }
  function Ar(e, t) {
    e = e.style;
    for (var i in t) if (t.hasOwnProperty(i)) {
      var o = i.indexOf("--") === 0, u = Di(i, t[i], o);
      i === "float" && (i = "cssFloat"), o ? e.setProperty(i, u) : e[i] = u;
    }
  }
  var co = B({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function ve(e, t) {
    if (t) {
      if (co[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(_(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(_(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(_(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(_(62));
    }
  }
  function xe(e, t) {
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
  var Te = null;
  function Ee(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Qe = null, be = null, mt = null;
  function Wn(e) {
    if (e = Fo(e)) {
      if (typeof Qe != "function") throw Error(_(280));
      var t = e.stateNode;
      t && (t = cn(t), Qe(e.stateNode, e.type, t));
    }
  }
  function Or(e) {
    be ? mt ? mt.push(e) : mt = [e] : be = e;
  }
  function bt() {
    if (be) {
      var e = be, t = mt;
      if (mt = be = null, Wn(e), t) for (e = 0; e < t.length; e++) Wn(t[e]);
    }
  }
  function An(e, t) {
    return e(t);
  }
  function Qr() {
  }
  var br = !1;
  function fo(e, t, i) {
    if (br) return e(t, i);
    br = !0;
    try {
      return An(e, t, i);
    } finally {
      br = !1, (be !== null || mt !== null) && (Qr(), bt());
    }
  }
  function zi(e, t) {
    var i = e.stateNode;
    if (i === null) return null;
    var o = cn(i);
    if (o === null) return null;
    i = o[t];
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
        (o = !o.disabled) || (e = e.type, o = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !o;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (i && typeof i != "function") throw Error(_(231, t, typeof i));
    return i;
  }
  var ho = !1;
  if (m) try {
    var Gi = {};
    Object.defineProperty(Gi, "passive", { get: function() {
      ho = !0;
    } }), window.addEventListener("test", Gi, Gi), window.removeEventListener("test", Gi, Gi);
  } catch {
    ho = !1;
  }
  function Du(e, t, i, o, u, p, A, K, $) {
    var fe = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(i, fe);
    } catch (Se) {
      this.onError(Se);
    }
  }
  var Ui = !1, Xo = null, Qo = !1, ys = null, id = { onError: function(e) {
    Ui = !0, Xo = e;
  } };
  function sd(e, t, i, o, u, p, A, K, $) {
    Ui = !1, Xo = null, Du.apply(id, arguments);
  }
  function od(e, t, i, o, u, p, A, K, $) {
    if (sd.apply(this, arguments), Ui) {
      if (Ui) {
        var fe = Xo;
        Ui = !1, Xo = null;
      } else throw Error(_(198));
      Qo || (Qo = !0, ys = fe);
    }
  }
  function Bi(e) {
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
  function zu(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function Gu(e) {
    if (Bi(e) !== e) throw Error(_(188));
  }
  function ld(e) {
    var t = e.alternate;
    if (!t) {
      if (t = Bi(e), t === null) throw Error(_(188));
      return t !== e ? null : e;
    }
    for (var i = e, o = t; ; ) {
      var u = i.return;
      if (u === null) break;
      var p = u.alternate;
      if (p === null) {
        if (o = u.return, o !== null) {
          i = o;
          continue;
        }
        break;
      }
      if (u.child === p.child) {
        for (p = u.child; p; ) {
          if (p === i) return Gu(u), e;
          if (p === o) return Gu(u), t;
          p = p.sibling;
        }
        throw Error(_(188));
      }
      if (i.return !== o.return) i = u, o = p;
      else {
        for (var A = !1, K = u.child; K; ) {
          if (K === i) {
            A = !0, i = u, o = p;
            break;
          }
          if (K === o) {
            A = !0, o = u, i = p;
            break;
          }
          K = K.sibling;
        }
        if (!A) {
          for (K = p.child; K; ) {
            if (K === i) {
              A = !0, i = p, o = u;
              break;
            }
            if (K === o) {
              A = !0, o = p, i = u;
              break;
            }
            K = K.sibling;
          }
          if (!A) throw Error(_(189));
        }
      }
      if (i.alternate !== o) throw Error(_(190));
    }
    if (i.tag !== 3) throw Error(_(188));
    return i.stateNode.current === i ? e : t;
  }
  function Uu(e) {
    return e = ld(e), e !== null ? Bu(e) : null;
  }
  function Bu(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Bu(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Vu = d.unstable_scheduleCallback, Hu = d.unstable_cancelCallback, ad = d.unstable_shouldYield, ud = d.unstable_requestPaint, Bt = d.unstable_now, bl = d.unstable_getCurrentPriorityLevel, Vi = d.unstable_ImmediatePriority, bo = d.unstable_UserBlockingPriority, vs = d.unstable_NormalPriority, cd = d.unstable_LowPriority, Jo = d.unstable_IdlePriority, Jr = null, hn = null;
  function Et(e) {
    if (hn && typeof hn.onCommitFiberRoot == "function") try {
      hn.onCommitFiberRoot(Jr, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var et = Math.clz32 ? Math.clz32 : qn, hi = Math.log, wn = Math.LN2;
  function qn(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (hi(e) / wn | 0) | 0;
  }
  var Ir = 64, Zr = 4194304;
  function ln(e) {
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
  function Hi(e, t) {
    var i = e.pendingLanes;
    if (i === 0) return 0;
    var o = 0, u = e.suspendedLanes, p = e.pingedLanes, A = i & 268435455;
    if (A !== 0) {
      var K = A & ~u;
      K !== 0 ? o = ln(K) : (p &= A, p !== 0 && (o = ln(p)));
    } else A = i & ~u, A !== 0 ? o = ln(A) : p !== 0 && (o = ln(p));
    if (o === 0) return 0;
    if (t !== 0 && t !== o && (t & u) === 0 && (u = o & -o, p = t & -t, u >= p || u === 16 && (p & 4194240) !== 0)) return t;
    if ((o & 4) !== 0 && (o |= i & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= o; 0 < t; ) i = 31 - et(t), u = 1 << i, o |= e[i], t &= ~u;
    return o;
  }
  function ju(e, t) {
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
  function Wu(e, t) {
    for (var i = e.suspendedLanes, o = e.pingedLanes, u = e.expirationTimes, p = e.pendingLanes; 0 < p; ) {
      var A = 31 - et(p), K = 1 << A, $ = u[A];
      $ === -1 ? ((K & i) === 0 || (K & o) !== 0) && (u[A] = ju(K, t)) : $ <= t && (e.expiredLanes |= K), p &= ~K;
    }
  }
  function _s(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function Jl() {
    var e = Ir;
    return Ir <<= 1, (Ir & 4194240) === 0 && (Ir = 64), e;
  }
  function Zn(e) {
    for (var t = [], i = 0; 31 > i; i++) t.push(e);
    return t;
  }
  function po(e, t, i) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - et(t), e[t] = i;
  }
  function dd(e, t) {
    var i = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var o = e.eventTimes;
    for (e = e.expirationTimes; 0 < i; ) {
      var u = 31 - et(i), p = 1 << u;
      t[u] = 0, o[u] = -1, e[u] = -1, i &= ~p;
    }
  }
  function Zl(e, t) {
    var i = e.entangledLanes |= t;
    for (e = e.entanglements; i; ) {
      var o = 31 - et(i), u = 1 << o;
      u & t | e[o] & t && (e[o] |= t), i &= ~u;
    }
  }
  var at = 0;
  function go(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var Ss, ws, qu, Ku, Zo, $o = !1, xs = [], hr = null, pi = null, Dr = null, tt = /* @__PURE__ */ new Map(), Cs = /* @__PURE__ */ new Map(), zr = [], Yu = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Xu(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        hr = null;
        break;
      case "dragenter":
      case "dragleave":
        pi = null;
        break;
      case "mouseover":
      case "mouseout":
        Dr = null;
        break;
      case "pointerover":
      case "pointerout":
        tt.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Cs.delete(t.pointerId);
    }
  }
  function mo(e, t, i, o, u, p) {
    return e === null || e.nativeEvent !== p ? (e = { blockedOn: t, domEventName: i, eventSystemFlags: o, nativeEvent: p, targetContainers: [u] }, t !== null && (t = Fo(t), t !== null && ws(t)), e) : (e.eventSystemFlags |= o, t = e.targetContainers, u !== null && t.indexOf(u) === -1 && t.push(u), e);
  }
  function an(e, t, i, o, u) {
    switch (t) {
      case "focusin":
        return hr = mo(hr, e, t, i, o, u), !0;
      case "dragenter":
        return pi = mo(pi, e, t, i, o, u), !0;
      case "mouseover":
        return Dr = mo(Dr, e, t, i, o, u), !0;
      case "pointerover":
        var p = u.pointerId;
        return tt.set(p, mo(tt.get(p) || null, e, t, i, o, u)), !0;
      case "gotpointercapture":
        return p = u.pointerId, Cs.set(p, mo(Cs.get(p) || null, e, t, i, o, u)), !0;
    }
    return !1;
  }
  function el(e) {
    var t = ki(e.target);
    if (t !== null) {
      var i = Bi(t);
      if (i !== null) {
        if (t = i.tag, t === 13) {
          if (t = zu(i), t !== null) {
            e.blockedOn = t, Zo(e.priority, function() {
              qu(i);
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
  function tl(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var i = il(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (i === null) {
        i = e.nativeEvent;
        var o = new i.constructor(i.type, i);
        Te = o, i.target.dispatchEvent(o), Te = null;
      } else return t = Fo(i), t !== null && ws(t), e.blockedOn = i, !1;
      t.shift();
    }
    return !0;
  }
  function nl(e, t, i) {
    tl(e) && i.delete(t);
  }
  function fd() {
    $o = !1, hr !== null && tl(hr) && (hr = null), pi !== null && tl(pi) && (pi = null), Dr !== null && tl(Dr) && (Dr = null), tt.forEach(nl), Cs.forEach(nl);
  }
  function gi(e, t) {
    e.blockedOn === t && (e.blockedOn = null, $o || ($o = !0, d.unstable_scheduleCallback(d.unstable_NormalPriority, fd)));
  }
  function Kn(e) {
    function t(u) {
      return gi(u, e);
    }
    if (0 < xs.length) {
      gi(xs[0], e);
      for (var i = 1; i < xs.length; i++) {
        var o = xs[i];
        o.blockedOn === e && (o.blockedOn = null);
      }
    }
    for (hr !== null && gi(hr, e), pi !== null && gi(pi, e), Dr !== null && gi(Dr, e), tt.forEach(t), Cs.forEach(t), i = 0; i < zr.length; i++) o = zr[i], o.blockedOn === e && (o.blockedOn = null);
    for (; 0 < zr.length && (i = zr[0], i.blockedOn === null); ) el(i), i.blockedOn === null && zr.shift();
  }
  var ks = T.ReactCurrentBatchConfig, rl = !0;
  function kr(e, t, i, o) {
    var u = at, p = ks.transition;
    ks.transition = null;
    try {
      at = 1, Es(e, t, i, o);
    } finally {
      at = u, ks.transition = p;
    }
  }
  function $r(e, t, i, o) {
    var u = at, p = ks.transition;
    ks.transition = null;
    try {
      at = 4, Es(e, t, i, o);
    } finally {
      at = u, ks.transition = p;
    }
  }
  function Es(e, t, i, o) {
    if (rl) {
      var u = il(e, t, i, o);
      if (u === null) Sl(e, t, o, Ps, i), Xu(e, o);
      else if (an(u, e, t, i, o)) o.stopPropagation();
      else if (Xu(e, o), t & 4 && -1 < Yu.indexOf(e)) {
        for (; u !== null; ) {
          var p = Fo(u);
          if (p !== null && Ss(p), p = il(e, t, i, o), p === null && Sl(e, t, o, Ps, i), p === u) break;
          u = p;
        }
        u !== null && o.stopPropagation();
      } else Sl(e, t, o, null, i);
    }
  }
  var Ps = null;
  function il(e, t, i, o) {
    if (Ps = null, e = Ee(o), e = ki(e), e !== null) if (t = Bi(e), t === null) e = null;
    else if (i = t.tag, i === 13) {
      if (e = zu(t), e !== null) return e;
      e = null;
    } else if (i === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return Ps = e, null;
  }
  function Qu(e) {
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
        switch (bl()) {
          case Vi:
            return 1;
          case bo:
            return 4;
          case vs:
          case cd:
            return 16;
          case Jo:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var pn = null, mi = null, ei = null;
  function yo() {
    if (ei) return ei;
    var e, t = mi, i = t.length, o, u = "value" in pn ? pn.value : pn.textContent, p = u.length;
    for (e = 0; e < i && t[e] === u[e]; e++) ;
    var A = i - e;
    for (o = 1; o <= A && t[i - o] === u[p - o]; o++) ;
    return ei = u.slice(e, 1 < o ? 1 - o : void 0);
  }
  function ji(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function On() {
    return !0;
  }
  function $n() {
    return !1;
  }
  function Jt(e) {
    function t(i, o, u, p, A) {
      this._reactName = i, this._targetInst = u, this.type = o, this.nativeEvent = p, this.target = A, this.currentTarget = null;
      for (var K in e) e.hasOwnProperty(K) && (i = e[K], this[K] = i ? i(p) : p[K]);
      return this.isDefaultPrevented = (p.defaultPrevented != null ? p.defaultPrevented : p.returnValue === !1) ? On : $n, this.isPropagationStopped = $n, this;
    }
    return B(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var i = this.nativeEvent;
      i && (i.preventDefault ? i.preventDefault() : typeof i.returnValue != "unknown" && (i.returnValue = !1), this.isDefaultPrevented = On);
    }, stopPropagation: function() {
      var i = this.nativeEvent;
      i && (i.stopPropagation ? i.stopPropagation() : typeof i.cancelBubble != "unknown" && (i.cancelBubble = !0), this.isPropagationStopped = On);
    }, persist: function() {
    }, isPersistent: On }), t;
  }
  var Yn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Er = Jt(Yn), Pr = B({}, Yn, { view: 0, detail: 0 }), bu = Jt(Pr), vo, _o, gn, In = B({}, Pr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: qi, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== gn && (gn && e.type === "mousemove" ? (vo = e.screenX - gn.screenX, _o = e.screenY - gn.screenY) : _o = vo = 0, gn = e), vo);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : _o;
  } }), Pt = Jt(In), So = B({}, In, { dataTransfer: 0 }), Rr = Jt(So), Ju = B({}, Pr, { relatedTarget: 0 }), sl = Jt(Ju), $l = B({}, Yn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), ea = Jt($l), Zu = B({}, Yn, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), ol = Jt(Zu), $u = B({}, Yn, { data: 0 }), Wi = Jt($u), ta = {
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
  }, hd = {
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
  }, ll = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function pd(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = ll[e]) ? !!t[e] : !1;
  }
  function qi() {
    return pd;
  }
  var al = B({}, Pr, { key: function(e) {
    if (e.key) {
      var t = ta[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = ji(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? hd[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: qi, charCode: function(e) {
    return e.type === "keypress" ? ji(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? ji(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), ec = Jt(al), tc = B({}, In, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Ki = Jt(tc), nc = B({}, Pr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: qi }), ul = Jt(nc), cl = B({}, Yn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Rs = Jt(cl), na = B({}, In, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), ra = Jt(na), rc = [9, 13, 27, 32], wo = m && "CompositionEvent" in window, Yi = null;
  m && "documentMode" in document && (Yi = document.documentMode);
  var Ts = m && "TextEvent" in window && !Yi, er = m && (!wo || Yi && 8 < Yi && 11 >= Yi), yi = " ", dl = !1;
  function ia(e, t) {
    switch (e) {
      case "keyup":
        return rc.indexOf(t.keyCode) !== -1;
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
  function sa(e, t) {
    switch (e) {
      case "compositionend":
        return Tr(t);
      case "keypress":
        return t.which !== 32 ? null : (dl = !0, yi);
      case "textInput":
        return e = t.data, e === yi && dl ? null : e;
      default:
        return null;
    }
  }
  function ic(e, t) {
    if (tr) return e === "compositionend" || !wo && ia(e, t) ? (e = yo(), ei = mi = pn = null, tr = !1, e) : null;
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
  var ti = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function ni(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!ti[e.type] : t === "textarea";
  }
  function xo(e, t, i, o) {
    Or(o), t = wl(t, "onChange"), 0 < t.length && (i = new Er("onChange", "change", null, i, o), e.push({ event: i, listeners: t }));
  }
  var Ns = null, vi = null;
  function sc(e) {
    ma(e, 0);
  }
  function _i(e) {
    var t = $t(e);
    if (Be(t)) return e;
  }
  function pr(e, t) {
    if (e === "change") return t;
  }
  var Fs = !1;
  if (m) {
    var Si;
    if (m) {
      var gr = "oninput" in document;
      if (!gr) {
        var fl = document.createElement("div");
        fl.setAttribute("oninput", "return;"), gr = typeof fl.oninput == "function";
      }
      Si = gr;
    } else Si = !1;
    Fs = Si && (!document.documentMode || 9 < document.documentMode);
  }
  function Xi() {
    Ns && (Ns.detachEvent("onpropertychange", oa), vi = Ns = null);
  }
  function oa(e) {
    if (e.propertyName === "value" && _i(vi)) {
      var t = [];
      xo(t, vi, e, Ee(e)), fo(sc, t);
    }
  }
  function la(e, t, i) {
    e === "focusin" ? (Xi(), Ns = t, vi = i, Ns.attachEvent("onpropertychange", oa)) : e === "focusout" && Xi();
  }
  function It(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return _i(vi);
  }
  function hl(e, t) {
    if (e === "click") return _i(t);
  }
  function aa(e, t) {
    if (e === "input" || e === "change") return _i(t);
  }
  function ua(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Xn = typeof Object.is == "function" ? Object.is : ua;
  function Qi(e, t) {
    if (Xn(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var i = Object.keys(e), o = Object.keys(t);
    if (i.length !== o.length) return !1;
    for (o = 0; o < i.length; o++) {
      var u = i[o];
      if (!g.call(t, u) || !Xn(e[u], t[u])) return !1;
    }
    return !0;
  }
  function wi(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Nt(e, t) {
    var i = wi(e);
    e = 0;
    for (var o; i; ) {
      if (i.nodeType === 3) {
        if (o = e + i.textContent.length, e <= t && o >= t) return { node: i, offset: t - e };
        e = o;
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
      i = wi(i);
    }
  }
  function Wt(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Wt(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Zt() {
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
  function Ms(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function Co(e) {
    var t = Zt(), i = e.focusedElem, o = e.selectionRange;
    if (t !== i && i && i.ownerDocument && Wt(i.ownerDocument.documentElement, i)) {
      if (o !== null && Ms(i)) {
        if (t = o.start, e = o.end, e === void 0 && (e = t), "selectionStart" in i) i.selectionStart = t, i.selectionEnd = Math.min(e, i.value.length);
        else if (e = (t = i.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var u = i.textContent.length, p = Math.min(o.start, u);
          o = o.end === void 0 ? p : Math.min(o.end, u), !e.extend && p > o && (u = o, o = p, p = u), u = Nt(i, p);
          var A = Nt(
            i,
            o
          );
          u && A && (e.rangeCount !== 1 || e.anchorNode !== u.node || e.anchorOffset !== u.offset || e.focusNode !== A.node || e.focusOffset !== A.offset) && (t = t.createRange(), t.setStart(u.node, u.offset), e.removeAllRanges(), p > o ? (e.addRange(t), e.extend(A.node, A.offset)) : (t.setEnd(A.node, A.offset), e.addRange(t)));
        }
      }
      for (t = [], e = i; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof i.focus == "function" && i.focus(), i = 0; i < t.length; i++) e = t[i], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var ko = m && "documentMode" in document && 11 >= document.documentMode, Ls = null, un = null, bi = null, Eo = !1;
  function pl(e, t, i) {
    var o = i.window === i ? i.document : i.nodeType === 9 ? i : i.ownerDocument;
    Eo || Ls == null || Ls !== Ge(o) || (o = Ls, "selectionStart" in o && Ms(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), bi && Qi(bi, o) || (bi = o, o = wl(un, "onSelect"), 0 < o.length && (t = new Er("onSelect", "select", null, t, i), e.push({ event: t, listeners: o }), t.target = Ls)));
  }
  function nr(e, t) {
    var i = {};
    return i[e.toLowerCase()] = t.toLowerCase(), i["Webkit" + e] = "webkit" + t, i["Moz" + e] = "moz" + t, i;
  }
  var mn = { animationend: nr("Animation", "AnimationEnd"), animationiteration: nr("Animation", "AnimationIteration"), animationstart: nr("Animation", "AnimationStart"), transitionend: nr("Transition", "TransitionEnd") }, Ji = {}, gl = {};
  m && (gl = document.createElement("div").style, "AnimationEvent" in window || (delete mn.animationend.animation, delete mn.animationiteration.animation, delete mn.animationstart.animation), "TransitionEvent" in window || delete mn.transitionend.transition);
  function As(e) {
    if (Ji[e]) return Ji[e];
    if (!mn[e]) return e;
    var t = mn[e], i;
    for (i in t) if (t.hasOwnProperty(i) && i in gl) return Ji[e] = t[i];
    return e;
  }
  var ca = As("animationend"), da = As("animationiteration"), fa = As("animationstart"), ha = As("transitionend"), pa = /* @__PURE__ */ new Map(), ga = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function ri(e, t) {
    pa.set(e, t), C(t, [e]);
  }
  for (var ml = 0; ml < ga.length; ml++) {
    var Zi = ga[ml], oc = Zi.toLowerCase(), yl = Zi[0].toUpperCase() + Zi.slice(1);
    ri(oc, "on" + yl);
  }
  ri(ca, "onAnimationEnd"), ri(da, "onAnimationIteration"), ri(fa, "onAnimationStart"), ri("dblclick", "onDoubleClick"), ri("focusin", "onFocus"), ri("focusout", "onBlur"), ri(ha, "onTransitionEnd"), f("onMouseEnter", ["mouseout", "mouseover"]), f("onMouseLeave", ["mouseout", "mouseover"]), f("onPointerEnter", ["pointerout", "pointerover"]), f("onPointerLeave", ["pointerout", "pointerover"]), C("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), C("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), C("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), C("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), C("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), C("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var xi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), lc = new Set("cancel close invalid load scroll toggle".split(" ").concat(xi));
  function vl(e, t, i) {
    var o = e.type || "unknown-event";
    e.currentTarget = i, od(o, t, void 0, e), e.currentTarget = null;
  }
  function ma(e, t) {
    t = (t & 4) !== 0;
    for (var i = 0; i < e.length; i++) {
      var o = e[i], u = o.event;
      o = o.listeners;
      e: {
        var p = void 0;
        if (t) for (var A = o.length - 1; 0 <= A; A--) {
          var K = o[A], $ = K.instance, fe = K.currentTarget;
          if (K = K.listener, $ !== p && u.isPropagationStopped()) break e;
          vl(u, K, fe), p = $;
        }
        else for (A = 0; A < o.length; A++) {
          if (K = o[A], $ = K.instance, fe = K.currentTarget, K = K.listener, $ !== p && u.isPropagationStopped()) break e;
          vl(u, K, fe), p = $;
        }
      }
    }
    if (Qo) throw e = ys, Qo = !1, ys = null, e;
  }
  function St(e, t) {
    var i = t[Cl];
    i === void 0 && (i = t[Cl] = /* @__PURE__ */ new Set());
    var o = e + "__bubble";
    i.has(o) || (ya(t, e, 2, !1), i.add(o));
  }
  function _l(e, t, i) {
    var o = 0;
    t && (o |= 4), ya(i, e, o, t);
  }
  var Po = "_reactListening" + Math.random().toString(36).slice(2);
  function $i(e) {
    if (!e[Po]) {
      e[Po] = !0, L.forEach(function(i) {
        i !== "selectionchange" && (lc.has(i) || _l(i, !1, e), _l(i, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Po] || (t[Po] = !0, _l("selectionchange", !1, t));
    }
  }
  function ya(e, t, i, o) {
    switch (Qu(t)) {
      case 1:
        var u = kr;
        break;
      case 4:
        u = $r;
        break;
      default:
        u = Es;
    }
    i = u.bind(null, t, i, e), u = void 0, !ho || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (u = !0), o ? u !== void 0 ? e.addEventListener(t, i, { capture: !0, passive: u }) : e.addEventListener(t, i, !0) : u !== void 0 ? e.addEventListener(t, i, { passive: u }) : e.addEventListener(t, i, !1);
  }
  function Sl(e, t, i, o, u) {
    var p = o;
    if ((t & 1) === 0 && (t & 2) === 0 && o !== null) e: for (; ; ) {
      if (o === null) return;
      var A = o.tag;
      if (A === 3 || A === 4) {
        var K = o.stateNode.containerInfo;
        if (K === u || K.nodeType === 8 && K.parentNode === u) break;
        if (A === 4) for (A = o.return; A !== null; ) {
          var $ = A.tag;
          if (($ === 3 || $ === 4) && ($ = A.stateNode.containerInfo, $ === u || $.nodeType === 8 && $.parentNode === u)) return;
          A = A.return;
        }
        for (; K !== null; ) {
          if (A = ki(K), A === null) return;
          if ($ = A.tag, $ === 5 || $ === 6) {
            o = p = A;
            continue e;
          }
          K = K.parentNode;
        }
      }
      o = o.return;
    }
    fo(function() {
      var fe = p, Se = Ee(i), we = [];
      e: {
        var _e = pa.get(e);
        if (_e !== void 0) {
          var Me = Er, Ie = e;
          switch (e) {
            case "keypress":
              if (ji(i) === 0) break e;
            case "keydown":
            case "keyup":
              Me = ec;
              break;
            case "focusin":
              Ie = "focus", Me = sl;
              break;
            case "focusout":
              Ie = "blur", Me = sl;
              break;
            case "beforeblur":
            case "afterblur":
              Me = sl;
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
              Me = Pt;
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
              Me = ul;
              break;
            case ca:
            case da:
            case fa:
              Me = ea;
              break;
            case ha:
              Me = Rs;
              break;
            case "scroll":
              Me = bu;
              break;
            case "wheel":
              Me = ra;
              break;
            case "copy":
            case "cut":
            case "paste":
              Me = ol;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Me = Ki;
          }
          var De = (t & 4) !== 0, rn = !De && e === "scroll", ae = De ? _e !== null ? _e + "Capture" : null : _e;
          De = [];
          for (var te = fe, ue; te !== null; ) {
            ue = te;
            var ke = ue.stateNode;
            if (ue.tag === 5 && ke !== null && (ue = ke, ae !== null && (ke = zi(te, ae), ke != null && De.push(Os(te, ke, ue)))), rn) break;
            te = te.return;
          }
          0 < De.length && (_e = new Me(_e, Ie, null, i, Se), we.push({ event: _e, listeners: De }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (_e = e === "mouseover" || e === "pointerover", Me = e === "mouseout" || e === "pointerout", _e && i !== Te && (Ie = i.relatedTarget || i.fromElement) && (ki(Ie) || Ie[Ur])) break e;
          if ((Me || _e) && (_e = Se.window === Se ? Se : (_e = Se.ownerDocument) ? _e.defaultView || _e.parentWindow : window, Me ? (Ie = i.relatedTarget || i.toElement, Me = fe, Ie = Ie ? ki(Ie) : null, Ie !== null && (rn = Bi(Ie), Ie !== rn || Ie.tag !== 5 && Ie.tag !== 6) && (Ie = null)) : (Me = null, Ie = fe), Me !== Ie)) {
            if (De = Pt, ke = "onMouseLeave", ae = "onMouseEnter", te = "mouse", (e === "pointerout" || e === "pointerover") && (De = Ki, ke = "onPointerLeave", ae = "onPointerEnter", te = "pointer"), rn = Me == null ? _e : $t(Me), ue = Ie == null ? _e : $t(Ie), _e = new De(ke, te + "leave", Me, i, Se), _e.target = rn, _e.relatedTarget = ue, ke = null, ki(Se) === fe && (De = new De(ae, te + "enter", Ie, i, Se), De.target = ue, De.relatedTarget = rn, ke = De), rn = ke, Me && Ie) t: {
              for (De = Me, ae = Ie, te = 0, ue = De; ue; ue = es(ue)) te++;
              for (ue = 0, ke = ae; ke; ke = es(ke)) ue++;
              for (; 0 < te - ue; ) De = es(De), te--;
              for (; 0 < ue - te; ) ae = es(ae), ue--;
              for (; te--; ) {
                if (De === ae || ae !== null && De === ae.alternate) break t;
                De = es(De), ae = es(ae);
              }
              De = null;
            }
            else De = null;
            Me !== null && ac(we, _e, Me, De, !1), Ie !== null && rn !== null && ac(we, rn, Ie, De, !0);
          }
        }
        e: {
          if (_e = fe ? $t(fe) : window, Me = _e.nodeName && _e.nodeName.toLowerCase(), Me === "select" || Me === "input" && _e.type === "file") var ze = pr;
          else if (ni(_e)) if (Fs) ze = aa;
          else {
            ze = It;
            var He = la;
          }
          else (Me = _e.nodeName) && Me.toLowerCase() === "input" && (_e.type === "checkbox" || _e.type === "radio") && (ze = hl);
          if (ze && (ze = ze(e, fe))) {
            xo(we, ze, i, Se);
            break e;
          }
          He && He(e, _e, fe), e === "focusout" && (He = _e._wrapperState) && He.controlled && _e.type === "number" && Ut(_e, "number", _e.value);
        }
        switch (He = fe ? $t(fe) : window, e) {
          case "focusin":
            (ni(He) || He.contentEditable === "true") && (Ls = He, un = fe, bi = null);
            break;
          case "focusout":
            bi = un = Ls = null;
            break;
          case "mousedown":
            Eo = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Eo = !1, pl(we, i, Se);
            break;
          case "selectionchange":
            if (ko) break;
          case "keydown":
          case "keyup":
            pl(we, i, Se);
        }
        var je;
        if (wo) e: {
          switch (e) {
            case "compositionstart":
              var qe = "onCompositionStart";
              break e;
            case "compositionend":
              qe = "onCompositionEnd";
              break e;
            case "compositionupdate":
              qe = "onCompositionUpdate";
              break e;
          }
          qe = void 0;
        }
        else tr ? ia(e, i) && (qe = "onCompositionEnd") : e === "keydown" && i.keyCode === 229 && (qe = "onCompositionStart");
        qe && (er && i.locale !== "ko" && (tr || qe !== "onCompositionStart" ? qe === "onCompositionEnd" && tr && (je = yo()) : (pn = Se, mi = "value" in pn ? pn.value : pn.textContent, tr = !0)), He = wl(fe, qe), 0 < He.length && (qe = new Wi(qe, e, null, i, Se), we.push({ event: qe, listeners: He }), je ? qe.data = je : (je = Tr(i), je !== null && (qe.data = je)))), (je = Ts ? sa(e, i) : ic(e, i)) && (fe = wl(fe, "onBeforeInput"), 0 < fe.length && (Se = new Wi("onBeforeInput", "beforeinput", null, i, Se), we.push({ event: Se, listeners: fe }), Se.data = je));
      }
      ma(we, t);
    });
  }
  function Os(e, t, i) {
    return { instance: e, listener: t, currentTarget: i };
  }
  function wl(e, t) {
    for (var i = t + "Capture", o = []; e !== null; ) {
      var u = e, p = u.stateNode;
      u.tag === 5 && p !== null && (u = p, p = zi(e, i), p != null && o.unshift(Os(e, p, u)), p = zi(e, t), p != null && o.push(Os(e, p, u))), e = e.return;
    }
    return o;
  }
  function es(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function ac(e, t, i, o, u) {
    for (var p = t._reactName, A = []; i !== null && i !== o; ) {
      var K = i, $ = K.alternate, fe = K.stateNode;
      if ($ !== null && $ === o) break;
      K.tag === 5 && fe !== null && (K = fe, u ? ($ = zi(i, p), $ != null && A.unshift(Os(i, $, K))) : u || ($ = zi(i, p), $ != null && A.push(Os(i, $, K)))), i = i.return;
    }
    A.length !== 0 && e.push({ event: t, listeners: A });
  }
  var gd = /\r\n?/g, uc = /\u0000|\uFFFD/g;
  function va(e) {
    return (typeof e == "string" ? e : "" + e).replace(gd, `
`).replace(uc, "");
  }
  function Ro(e, t, i) {
    if (t = va(t), va(e) !== t && i) throw Error(_(425));
  }
  function ts() {
  }
  var _a = null, Sa = null;
  function wa(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var rr = typeof setTimeout == "function" ? setTimeout : void 0, xa = typeof clearTimeout == "function" ? clearTimeout : void 0, To = typeof Promise == "function" ? Promise : void 0, cc = typeof queueMicrotask == "function" ? queueMicrotask : typeof To < "u" ? function(e) {
    return To.resolve(null).then(e).catch(dc);
  } : rr;
  function dc(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function xl(e, t) {
    var i = t, o = 0;
    do {
      var u = i.nextSibling;
      if (e.removeChild(i), u && u.nodeType === 8) if (i = u.data, i === "/$") {
        if (o === 0) {
          e.removeChild(u), Kn(t);
          return;
        }
        o--;
      } else i !== "$" && i !== "$?" && i !== "$!" || o++;
      i = u;
    } while (i);
    Kn(t);
  }
  function Gr(e) {
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
  function ns(e) {
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
  var Ci = Math.random().toString(36).slice(2), mr = "__reactFiber$" + Ci, No = "__reactProps$" + Ci, Ur = "__reactContainer$" + Ci, Cl = "__reactEvents$" + Ci, fc = "__reactListeners$" + Ci, hc = "__reactHandles$" + Ci;
  function ki(e) {
    var t = e[mr];
    if (t) return t;
    for (var i = e.parentNode; i; ) {
      if (t = i[Ur] || i[mr]) {
        if (i = t.alternate, t.child !== null || i !== null && i.child !== null) for (e = ns(e); e !== null; ) {
          if (i = e[mr]) return i;
          e = ns(e);
        }
        return t;
      }
      e = i, i = e.parentNode;
    }
    return null;
  }
  function Fo(e) {
    return e = e[mr] || e[Ur], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function $t(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(_(33));
  }
  function cn(e) {
    return e[No] || null;
  }
  var kl = [], rs = -1;
  function ii(e) {
    return { current: e };
  }
  function wt(e) {
    0 > rs || (e.current = kl[rs], kl[rs] = null, rs--);
  }
  function yt(e, t) {
    rs++, kl[rs] = e.current, e.current = t;
  }
  var Br = {}, yn = ii(Br), xn = ii(!1), Ei = Br;
  function is(e, t) {
    var i = e.type.contextTypes;
    if (!i) return Br;
    var o = e.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === t) return o.__reactInternalMemoizedMaskedChildContext;
    var u = {}, p;
    for (p in i) u[p] = t[p];
    return o && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = u), u;
  }
  function Cn(e) {
    return e = e.childContextTypes, e != null;
  }
  function Is() {
    wt(xn), wt(yn);
  }
  function Ca(e, t, i) {
    if (yn.current !== Br) throw Error(_(168));
    yt(yn, t), yt(xn, i);
  }
  function El(e, t, i) {
    var o = e.stateNode;
    if (t = t.childContextTypes, typeof o.getChildContext != "function") return i;
    o = o.getChildContext();
    for (var u in o) if (!(u in t)) throw Error(_(108, q(e) || "Unknown", u));
    return B({}, i, o);
  }
  function ss(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Br, Ei = yn.current, yt(yn, e), yt(xn, xn.current), !0;
  }
  function pc(e, t, i) {
    var o = e.stateNode;
    if (!o) throw Error(_(169));
    i ? (e = El(e, t, Ei), o.__reactInternalMemoizedMergedChildContext = e, wt(xn), wt(yn), yt(yn, e)) : wt(xn), yt(xn, i);
  }
  var Vr = null, Ds = !1, Pl = !1;
  function Mo(e) {
    Vr === null ? Vr = [e] : Vr.push(e);
  }
  function si(e) {
    Ds = !0, Mo(e);
  }
  function Pi() {
    if (!Pl && Vr !== null) {
      Pl = !0;
      var e = 0, t = at;
      try {
        var i = Vr;
        for (at = 1; e < i.length; e++) {
          var o = i[e];
          do
            o = o(!0);
          while (o !== null);
        }
        Vr = null, Ds = !1;
      } catch (u) {
        throw Vr !== null && (Vr = Vr.slice(e + 1)), Vu(Vi, Pi), u;
      } finally {
        at = t, Pl = !1;
      }
    }
    return null;
  }
  var Dn = [], os = 0, Ri = null, Ti = 0, zn = [], Gn = 0, Ni = null, ir = 1, Ft = "";
  function ls(e, t) {
    Dn[os++] = Ti, Dn[os++] = Ri, Ri = e, Ti = t;
  }
  function gc(e, t, i) {
    zn[Gn++] = ir, zn[Gn++] = Ft, zn[Gn++] = Ni, Ni = e;
    var o = ir;
    e = Ft;
    var u = 32 - et(o) - 1;
    o &= ~(1 << u), i += 1;
    var p = 32 - et(t) + u;
    if (30 < p) {
      var A = u - u % 5;
      p = (o & (1 << A) - 1).toString(32), o >>= A, u -= A, ir = 1 << 32 - et(t) + u | i << u | o, Ft = p + e;
    } else ir = 1 << p | i << u | o, Ft = e;
  }
  function zs(e) {
    e.return !== null && (ls(e, 1), gc(e, 1, 0));
  }
  function dn(e) {
    for (; e === Ri; ) Ri = Dn[--os], Dn[os] = null, Ti = Dn[--os], Dn[os] = null;
    for (; e === Ni; ) Ni = zn[--Gn], zn[Gn] = null, Ft = zn[--Gn], zn[Gn] = null, ir = zn[--Gn], zn[Gn] = null;
  }
  var sr = null, Pe = null, ft = !1, or = null;
  function ka(e, t) {
    var i = Xr(5, null, null, 0);
    i.elementType = "DELETED", i.stateNode = t, i.return = e, t = e.deletions, t === null ? (e.deletions = [i], e.flags |= 16) : t.push(i);
  }
  function mc(e, t) {
    switch (e.tag) {
      case 5:
        var i = e.type;
        return t = t.nodeType !== 1 || i.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, sr = e, Pe = Gr(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, sr = e, Pe = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (i = Ni !== null ? { id: ir, overflow: Ft } : null, e.memoizedState = { dehydrated: t, treeContext: i, retryLane: 1073741824 }, i = Xr(18, null, null, 0), i.stateNode = t, i.return = e, e.child = i, sr = e, Pe = null, !0) : !1;
      default:
        return !1;
    }
  }
  function as(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Gs(e) {
    if (ft) {
      var t = Pe;
      if (t) {
        var i = t;
        if (!mc(e, t)) {
          if (as(e)) throw Error(_(418));
          t = Gr(i.nextSibling);
          var o = sr;
          t && mc(e, t) ? ka(o, i) : (e.flags = e.flags & -4097 | 2, ft = !1, sr = e);
        }
      } else {
        if (as(e)) throw Error(_(418));
        e.flags = e.flags & -4097 | 2, ft = !1, sr = e;
      }
    }
  }
  function Rl(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    sr = e;
  }
  function Lo(e) {
    if (e !== sr) return !1;
    if (!ft) return Rl(e), ft = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !wa(e.type, e.memoizedProps)), t && (t = Pe)) {
      if (as(e)) throw Ea(), Error(_(418));
      for (; t; ) ka(e, t), t = Gr(t.nextSibling);
    }
    if (Rl(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(_(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var i = e.data;
            if (i === "/$") {
              if (t === 0) {
                Pe = Gr(e.nextSibling);
                break e;
              }
              t--;
            } else i !== "$" && i !== "$!" && i !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        Pe = null;
      }
    } else Pe = sr ? Gr(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Ea() {
    for (var e = Pe; e; ) e = Gr(e.nextSibling);
  }
  function us() {
    Pe = sr = null, ft = !1;
  }
  function Ao(e) {
    or === null ? or = [e] : or.push(e);
  }
  var Pa = T.ReactCurrentBatchConfig;
  function Vt(e, t, i) {
    if (e = i.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (i._owner) {
        if (i = i._owner, i) {
          if (i.tag !== 1) throw Error(_(309));
          var o = i.stateNode;
        }
        if (!o) throw Error(_(147, e));
        var u = o, p = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === p ? t.ref : (t = function(A) {
          var K = u.refs;
          A === null ? delete K[p] : K[p] = A;
        }, t._stringRef = p, t);
      }
      if (typeof e != "string") throw Error(_(284));
      if (!i._owner) throw Error(_(290, e));
    }
    return e;
  }
  function Qn(e, t) {
    throw e = Object.prototype.toString.call(t), Error(_(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function Nr(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Tl(e) {
    function t(ae, te) {
      if (e) {
        var ue = ae.deletions;
        ue === null ? (ae.deletions = [te], ae.flags |= 16) : ue.push(te);
      }
    }
    function i(ae, te) {
      if (!e) return null;
      for (; te !== null; ) t(ae, te), te = te.sibling;
      return null;
    }
    function o(ae, te) {
      for (ae = /* @__PURE__ */ new Map(); te !== null; ) te.key !== null ? ae.set(te.key, te) : ae.set(te.index, te), te = te.sibling;
      return ae;
    }
    function u(ae, te) {
      return ae = io(ae, te), ae.index = 0, ae.sibling = null, ae;
    }
    function p(ae, te, ue) {
      return ae.index = ue, e ? (ue = ae.alternate, ue !== null ? (ue = ue.index, ue < te ? (ae.flags |= 2, te) : ue) : (ae.flags |= 2, te)) : (ae.flags |= 1048576, te);
    }
    function A(ae) {
      return e && ae.alternate === null && (ae.flags |= 2), ae;
    }
    function K(ae, te, ue, ke) {
      return te === null || te.tag !== 6 ? (te = Dd(ue, ae.mode, ke), te.return = ae, te) : (te = u(te, ue), te.return = ae, te);
    }
    function $(ae, te, ue, ke) {
      var ze = ue.type;
      return ze === J ? Se(ae, te, ue.props.children, ke, ue.key) : te !== null && (te.elementType === ze || typeof ze == "object" && ze !== null && ze.$$typeof === Q && Nr(ze) === te.type) ? (ke = u(te, ue.props), ke.ref = Vt(ae, te, ue), ke.return = ae, ke) : (ke = zc(ue.type, ue.key, ue.props, null, ae.mode, ke), ke.ref = Vt(ae, te, ue), ke.return = ae, ke);
    }
    function fe(ae, te, ue, ke) {
      return te === null || te.tag !== 4 || te.stateNode.containerInfo !== ue.containerInfo || te.stateNode.implementation !== ue.implementation ? (te = zd(ue, ae.mode, ke), te.return = ae, te) : (te = u(te, ue.children || []), te.return = ae, te);
    }
    function Se(ae, te, ue, ke, ze) {
      return te === null || te.tag !== 7 ? (te = Wo(ue, ae.mode, ke, ze), te.return = ae, te) : (te = u(te, ue), te.return = ae, te);
    }
    function we(ae, te, ue) {
      if (typeof te == "string" && te !== "" || typeof te == "number") return te = Dd("" + te, ae.mode, ue), te.return = ae, te;
      if (typeof te == "object" && te !== null) {
        switch (te.$$typeof) {
          case I:
            return ue = zc(te.type, te.key, te.props, null, ae.mode, ue), ue.ref = Vt(ae, null, te), ue.return = ae, ue;
          case j:
            return te = zd(te, ae.mode, ue), te.return = ae, te;
          case Q:
            var ke = te._init;
            return we(ae, ke(te._payload), ue);
        }
        if (kt(te) || W(te)) return te = Wo(te, ae.mode, ue, null), te.return = ae, te;
        Qn(ae, te);
      }
      return null;
    }
    function _e(ae, te, ue, ke) {
      var ze = te !== null ? te.key : null;
      if (typeof ue == "string" && ue !== "" || typeof ue == "number") return ze !== null ? null : K(ae, te, "" + ue, ke);
      if (typeof ue == "object" && ue !== null) {
        switch (ue.$$typeof) {
          case I:
            return ue.key === ze ? $(ae, te, ue, ke) : null;
          case j:
            return ue.key === ze ? fe(ae, te, ue, ke) : null;
          case Q:
            return ze = ue._init, _e(
              ae,
              te,
              ze(ue._payload),
              ke
            );
        }
        if (kt(ue) || W(ue)) return ze !== null ? null : Se(ae, te, ue, ke, null);
        Qn(ae, ue);
      }
      return null;
    }
    function Me(ae, te, ue, ke, ze) {
      if (typeof ke == "string" && ke !== "" || typeof ke == "number") return ae = ae.get(ue) || null, K(te, ae, "" + ke, ze);
      if (typeof ke == "object" && ke !== null) {
        switch (ke.$$typeof) {
          case I:
            return ae = ae.get(ke.key === null ? ue : ke.key) || null, $(te, ae, ke, ze);
          case j:
            return ae = ae.get(ke.key === null ? ue : ke.key) || null, fe(te, ae, ke, ze);
          case Q:
            var He = ke._init;
            return Me(ae, te, ue, He(ke._payload), ze);
        }
        if (kt(ke) || W(ke)) return ae = ae.get(ue) || null, Se(te, ae, ke, ze, null);
        Qn(te, ke);
      }
      return null;
    }
    function Ie(ae, te, ue, ke) {
      for (var ze = null, He = null, je = te, qe = te = 0, Nn = null; je !== null && qe < ue.length; qe++) {
        je.index > qe ? (Nn = je, je = null) : Nn = je.sibling;
        var dt = _e(ae, je, ue[qe], ke);
        if (dt === null) {
          je === null && (je = Nn);
          break;
        }
        e && je && dt.alternate === null && t(ae, je), te = p(dt, te, qe), He === null ? ze = dt : He.sibling = dt, He = dt, je = Nn;
      }
      if (qe === ue.length) return i(ae, je), ft && ls(ae, qe), ze;
      if (je === null) {
        for (; qe < ue.length; qe++) je = we(ae, ue[qe], ke), je !== null && (te = p(je, te, qe), He === null ? ze = je : He.sibling = je, He = je);
        return ft && ls(ae, qe), ze;
      }
      for (je = o(ae, je); qe < ue.length; qe++) Nn = Me(je, ae, qe, ue[qe], ke), Nn !== null && (e && Nn.alternate !== null && je.delete(Nn.key === null ? qe : Nn.key), te = p(Nn, te, qe), He === null ? ze = Nn : He.sibling = Nn, He = Nn);
      return e && je.forEach(function(so) {
        return t(ae, so);
      }), ft && ls(ae, qe), ze;
    }
    function De(ae, te, ue, ke) {
      var ze = W(ue);
      if (typeof ze != "function") throw Error(_(150));
      if (ue = ze.call(ue), ue == null) throw Error(_(151));
      for (var He = ze = null, je = te, qe = te = 0, Nn = null, dt = ue.next(); je !== null && !dt.done; qe++, dt = ue.next()) {
        je.index > qe ? (Nn = je, je = null) : Nn = je.sibling;
        var so = _e(ae, je, dt.value, ke);
        if (so === null) {
          je === null && (je = Nn);
          break;
        }
        e && je && so.alternate === null && t(ae, je), te = p(so, te, qe), He === null ? ze = so : He.sibling = so, He = so, je = Nn;
      }
      if (dt.done) return i(
        ae,
        je
      ), ft && ls(ae, qe), ze;
      if (je === null) {
        for (; !dt.done; qe++, dt = ue.next()) dt = we(ae, dt.value, ke), dt !== null && (te = p(dt, te, qe), He === null ? ze = dt : He.sibling = dt, He = dt);
        return ft && ls(ae, qe), ze;
      }
      for (je = o(ae, je); !dt.done; qe++, dt = ue.next()) dt = Me(je, ae, qe, dt.value, ke), dt !== null && (e && dt.alternate !== null && je.delete(dt.key === null ? qe : dt.key), te = p(dt, te, qe), He === null ? ze = dt : He.sibling = dt, He = dt);
      return e && je.forEach(function(_1) {
        return t(ae, _1);
      }), ft && ls(ae, qe), ze;
    }
    function rn(ae, te, ue, ke) {
      if (typeof ue == "object" && ue !== null && ue.type === J && ue.key === null && (ue = ue.props.children), typeof ue == "object" && ue !== null) {
        switch (ue.$$typeof) {
          case I:
            e: {
              for (var ze = ue.key, He = te; He !== null; ) {
                if (He.key === ze) {
                  if (ze = ue.type, ze === J) {
                    if (He.tag === 7) {
                      i(ae, He.sibling), te = u(He, ue.props.children), te.return = ae, ae = te;
                      break e;
                    }
                  } else if (He.elementType === ze || typeof ze == "object" && ze !== null && ze.$$typeof === Q && Nr(ze) === He.type) {
                    i(ae, He.sibling), te = u(He, ue.props), te.ref = Vt(ae, He, ue), te.return = ae, ae = te;
                    break e;
                  }
                  i(ae, He);
                  break;
                } else t(ae, He);
                He = He.sibling;
              }
              ue.type === J ? (te = Wo(ue.props.children, ae.mode, ke, ue.key), te.return = ae, ae = te) : (ke = zc(ue.type, ue.key, ue.props, null, ae.mode, ke), ke.ref = Vt(ae, te, ue), ke.return = ae, ae = ke);
            }
            return A(ae);
          case j:
            e: {
              for (He = ue.key; te !== null; ) {
                if (te.key === He) if (te.tag === 4 && te.stateNode.containerInfo === ue.containerInfo && te.stateNode.implementation === ue.implementation) {
                  i(ae, te.sibling), te = u(te, ue.children || []), te.return = ae, ae = te;
                  break e;
                } else {
                  i(ae, te);
                  break;
                }
                else t(ae, te);
                te = te.sibling;
              }
              te = zd(ue, ae.mode, ke), te.return = ae, ae = te;
            }
            return A(ae);
          case Q:
            return He = ue._init, rn(ae, te, He(ue._payload), ke);
        }
        if (kt(ue)) return Ie(ae, te, ue, ke);
        if (W(ue)) return De(ae, te, ue, ke);
        Qn(ae, ue);
      }
      return typeof ue == "string" && ue !== "" || typeof ue == "number" ? (ue = "" + ue, te !== null && te.tag === 6 ? (i(ae, te.sibling), te = u(te, ue), te.return = ae, ae = te) : (i(ae, te), te = Dd(ue, ae.mode, ke), te.return = ae, ae = te), A(ae)) : i(ae, te);
    }
    return rn;
  }
  var cs = Tl(!0), yr = Tl(!1), Oo = ii(null), lr = null, Us = null, Nl = null;
  function Fl() {
    Nl = Us = lr = null;
  }
  function Ml(e) {
    var t = Oo.current;
    wt(Oo), e._currentValue = t;
  }
  function Ll(e, t, i) {
    for (; e !== null; ) {
      var o = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, o !== null && (o.childLanes |= t)) : o !== null && (o.childLanes & t) !== t && (o.childLanes |= t), e === i) break;
      e = e.return;
    }
  }
  function oi(e, t) {
    lr = e, Nl = Us = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (y = !0), e.firstContext = null);
  }
  function Un(e) {
    var t = e._currentValue;
    if (Nl !== e) if (e = { context: e, memoizedValue: t, next: null }, Us === null) {
      if (lr === null) throw Error(_(308));
      Us = e, lr.dependencies = { lanes: 0, firstContext: e };
    } else Us = Us.next = e;
    return t;
  }
  var Hr = null;
  function Bs(e) {
    Hr === null ? Hr = [e] : Hr.push(e);
  }
  function Io(e, t, i, o) {
    var u = t.interleaved;
    return u === null ? (i.next = i, Bs(t)) : (i.next = u.next, u.next = i), t.interleaved = i, ar(e, o);
  }
  function ar(e, t) {
    e.lanes |= t;
    var i = e.alternate;
    for (i !== null && (i.lanes |= t), i = e, e = e.return; e !== null; ) e.childLanes |= t, i = e.alternate, i !== null && (i.childLanes |= t), i = e, e = e.return;
    return i.tag === 3 ? i.stateNode : null;
  }
  var jr = !1;
  function Do(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Al(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function Wr(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function qr(e, t, i) {
    var o = e.updateQueue;
    if (o === null) return null;
    if (o = o.shared, (ct & 2) !== 0) {
      var u = o.pending;
      return u === null ? t.next = t : (t.next = u.next, u.next = t), o.pending = t, ar(e, i);
    }
    return u = o.interleaved, u === null ? (t.next = t, Bs(o)) : (t.next = u.next, u.next = t), o.interleaved = t, ar(e, i);
  }
  function Ol(e, t, i) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (i & 4194240) !== 0)) {
      var o = t.lanes;
      o &= e.pendingLanes, i |= o, t.lanes = i, Zl(e, i);
    }
  }
  function zo(e, t) {
    var i = e.updateQueue, o = e.alternate;
    if (o !== null && (o = o.updateQueue, i === o)) {
      var u = null, p = null;
      if (i = i.firstBaseUpdate, i !== null) {
        do {
          var A = { eventTime: i.eventTime, lane: i.lane, tag: i.tag, payload: i.payload, callback: i.callback, next: null };
          p === null ? u = p = A : p = p.next = A, i = i.next;
        } while (i !== null);
        p === null ? u = p = t : p = p.next = t;
      } else u = p = t;
      i = { baseState: o.baseState, firstBaseUpdate: u, lastBaseUpdate: p, shared: o.shared, effects: o.effects }, e.updateQueue = i;
      return;
    }
    e = i.lastBaseUpdate, e === null ? i.firstBaseUpdate = t : e.next = t, i.lastBaseUpdate = t;
  }
  function Vs(e, t, i, o) {
    var u = e.updateQueue;
    jr = !1;
    var p = u.firstBaseUpdate, A = u.lastBaseUpdate, K = u.shared.pending;
    if (K !== null) {
      u.shared.pending = null;
      var $ = K, fe = $.next;
      $.next = null, A === null ? p = fe : A.next = fe, A = $;
      var Se = e.alternate;
      Se !== null && (Se = Se.updateQueue, K = Se.lastBaseUpdate, K !== A && (K === null ? Se.firstBaseUpdate = fe : K.next = fe, Se.lastBaseUpdate = $));
    }
    if (p !== null) {
      var we = u.baseState;
      A = 0, Se = fe = $ = null, K = p;
      do {
        var _e = K.lane, Me = K.eventTime;
        if ((o & _e) === _e) {
          Se !== null && (Se = Se.next = {
            eventTime: Me,
            lane: 0,
            tag: K.tag,
            payload: K.payload,
            callback: K.callback,
            next: null
          });
          e: {
            var Ie = e, De = K;
            switch (_e = t, Me = i, De.tag) {
              case 1:
                if (Ie = De.payload, typeof Ie == "function") {
                  we = Ie.call(Me, we, _e);
                  break e;
                }
                we = Ie;
                break e;
              case 3:
                Ie.flags = Ie.flags & -65537 | 128;
              case 0:
                if (Ie = De.payload, _e = typeof Ie == "function" ? Ie.call(Me, we, _e) : Ie, _e == null) break e;
                we = B({}, we, _e);
                break e;
              case 2:
                jr = !0;
            }
          }
          K.callback !== null && K.lane !== 0 && (e.flags |= 64, _e = u.effects, _e === null ? u.effects = [K] : _e.push(K));
        } else Me = { eventTime: Me, lane: _e, tag: K.tag, payload: K.payload, callback: K.callback, next: null }, Se === null ? (fe = Se = Me, $ = we) : Se = Se.next = Me, A |= _e;
        if (K = K.next, K === null) {
          if (K = u.shared.pending, K === null) break;
          _e = K, K = _e.next, _e.next = null, u.lastBaseUpdate = _e, u.shared.pending = null;
        }
      } while (!0);
      if (Se === null && ($ = we), u.baseState = $, u.firstBaseUpdate = fe, u.lastBaseUpdate = Se, t = u.shared.interleaved, t !== null) {
        u = t;
        do
          A |= u.lane, u = u.next;
        while (u !== t);
      } else p === null && (u.shared.lanes = 0);
      Bo |= A, e.lanes = A, e.memoizedState = we;
    }
  }
  function zt(e, t, i) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var o = e[t], u = o.callback;
      if (u !== null) {
        if (o.callback = null, o = i, typeof u != "function") throw Error(_(191, u));
        u.call(o);
      }
    }
  }
  var Xe = {}, vt = ii(Xe), Mt = ii(Xe), Ht = ii(Xe);
  function en(e) {
    if (e === Xe) throw Error(_(174));
    return e;
  }
  function Fi(e, t) {
    switch (yt(Ht, t), yt(Mt, e), yt(vt, Xe), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Mn(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Mn(t, e);
    }
    wt(vt), yt(vt, t);
  }
  function Lt() {
    wt(vt), wt(Mt), wt(Ht);
  }
  function Hs(e) {
    en(Ht.current);
    var t = en(vt.current), i = Mn(t, e.type);
    t !== i && (yt(Mt, e), yt(vt, i));
  }
  function li(e) {
    Mt.current === e && (wt(vt), wt(Mt));
  }
  var xt = ii(0);
  function js(e) {
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
  var ds = [];
  function kn() {
    for (var e = 0; e < ds.length; e++) ds[e]._workInProgressVersionPrimary = null;
    ds.length = 0;
  }
  var Ws = T.ReactCurrentDispatcher, Go = T.ReactCurrentBatchConfig, Bn = 0, pt = null, Gt = null, qt = null, Fr = !1, Mi = !1, vr = 0, Il = 0;
  function Kt() {
    throw Error(_(321));
  }
  function Uo(e, t) {
    if (t === null) return !1;
    for (var i = 0; i < t.length && i < e.length; i++) if (!Xn(e[i], t[i])) return !1;
    return !0;
  }
  function qs(e, t, i, o, u, p) {
    if (Bn = p, pt = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Ws.current = e === null || e.memoizedState === null ? yd : Oi, e = i(o, u), Mi) {
      p = 0;
      do {
        if (Mi = !1, vr = 0, 25 <= p) throw Error(_(301));
        p += 1, qt = Gt = null, t.updateQueue = null, Ws.current = Bl, e = i(o, u);
      } while (Mi);
    }
    if (Ws.current = Qs, t = Gt !== null && Gt.next !== null, Bn = 0, qt = Gt = pt = null, Fr = !1, t) throw Error(_(300));
    return e;
  }
  function Ks() {
    var e = vr !== 0;
    return vr = 0, e;
  }
  function Rt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return qt === null ? pt.memoizedState = qt = e : qt = qt.next = e, qt;
  }
  function tn() {
    if (Gt === null) {
      var e = pt.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Gt.next;
    var t = qt === null ? pt.memoizedState : qt.next;
    if (t !== null) qt = t, Gt = e;
    else {
      if (e === null) throw Error(_(310));
      Gt = e, e = { memoizedState: Gt.memoizedState, baseState: Gt.baseState, baseQueue: Gt.baseQueue, queue: Gt.queue, next: null }, qt === null ? pt.memoizedState = qt = e : qt = qt.next = e;
    }
    return qt;
  }
  function En(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Pn(e) {
    var t = tn(), i = t.queue;
    if (i === null) throw Error(_(311));
    i.lastRenderedReducer = e;
    var o = Gt, u = o.baseQueue, p = i.pending;
    if (p !== null) {
      if (u !== null) {
        var A = u.next;
        u.next = p.next, p.next = A;
      }
      o.baseQueue = u = p, i.pending = null;
    }
    if (u !== null) {
      p = u.next, o = o.baseState;
      var K = A = null, $ = null, fe = p;
      do {
        var Se = fe.lane;
        if ((Bn & Se) === Se) $ !== null && ($ = $.next = { lane: 0, action: fe.action, hasEagerState: fe.hasEagerState, eagerState: fe.eagerState, next: null }), o = fe.hasEagerState ? fe.eagerState : e(o, fe.action);
        else {
          var we = {
            lane: Se,
            action: fe.action,
            hasEagerState: fe.hasEagerState,
            eagerState: fe.eagerState,
            next: null
          };
          $ === null ? (K = $ = we, A = o) : $ = $.next = we, pt.lanes |= Se, Bo |= Se;
        }
        fe = fe.next;
      } while (fe !== null && fe !== p);
      $ === null ? A = o : $.next = K, Xn(o, t.memoizedState) || (y = !0), t.memoizedState = o, t.baseState = A, t.baseQueue = $, i.lastRenderedState = o;
    }
    if (e = i.interleaved, e !== null) {
      u = e;
      do
        p = u.lane, pt.lanes |= p, Bo |= p, u = u.next;
      while (u !== e);
    } else u === null && (i.lanes = 0);
    return [t.memoizedState, i.dispatch];
  }
  function Dl(e) {
    var t = tn(), i = t.queue;
    if (i === null) throw Error(_(311));
    i.lastRenderedReducer = e;
    var o = i.dispatch, u = i.pending, p = t.memoizedState;
    if (u !== null) {
      i.pending = null;
      var A = u = u.next;
      do
        p = e(p, A.action), A = A.next;
      while (A !== u);
      Xn(p, t.memoizedState) || (y = !0), t.memoizedState = p, t.baseQueue === null && (t.baseState = p), i.lastRenderedState = p;
    }
    return [p, o];
  }
  function zl() {
  }
  function Gl(e, t) {
    var i = pt, o = tn(), u = t(), p = !Xn(o.memoizedState, u);
    if (p && (o.memoizedState = u, y = !0), o = o.queue, Fa(Ra.bind(null, i, o, e), [e]), o.getSnapshot !== t || p || qt !== null && qt.memoizedState.tag & 1) {
      if (i.flags |= 2048, Ys(9, ai.bind(null, i, o, u, t), void 0, null), Tn === null) throw Error(_(349));
      (Bn & 30) !== 0 || yc(i, t, u);
    }
    return u;
  }
  function yc(e, t, i) {
    e.flags |= 16384, e = { getSnapshot: t, value: i }, t = pt.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, pt.updateQueue = t, t.stores = [e]) : (i = t.stores, i === null ? t.stores = [e] : i.push(e));
  }
  function ai(e, t, i, o) {
    t.value = i, t.getSnapshot = o, Ta(t) && Ul(e);
  }
  function Ra(e, t, i) {
    return i(function() {
      Ta(t) && Ul(e);
    });
  }
  function Ta(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var i = t();
      return !Xn(e, i);
    } catch {
      return !0;
    }
  }
  function Ul(e) {
    var t = ar(e, 1);
    t !== null && fi(t, e, 1, -1);
  }
  function Li(e) {
    var t = Rt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: En, lastRenderedState: e }, t.queue = e, e = e.dispatch = Cc.bind(null, pt, e), [t.memoizedState, e];
  }
  function Ys(e, t, i, o) {
    return e = { tag: e, create: t, destroy: i, deps: o, next: null }, t = pt.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, pt.updateQueue = t, t.lastEffect = e.next = e) : (i = t.lastEffect, i === null ? t.lastEffect = e.next = e : (o = i.next, i.next = e, e.next = o, t.lastEffect = e)), e;
  }
  function Na() {
    return tn().memoizedState;
  }
  function Xs(e, t, i, o) {
    var u = Rt();
    pt.flags |= e, u.memoizedState = Ys(1 | t, i, void 0, o === void 0 ? null : o);
  }
  function fs(e, t, i, o) {
    var u = tn();
    o = o === void 0 ? null : o;
    var p = void 0;
    if (Gt !== null) {
      var A = Gt.memoizedState;
      if (p = A.destroy, o !== null && Uo(o, A.deps)) {
        u.memoizedState = Ys(t, i, p, o);
        return;
      }
    }
    pt.flags |= e, u.memoizedState = Ys(1 | t, i, p, o);
  }
  function vc(e, t) {
    return Xs(8390656, 8, e, t);
  }
  function Fa(e, t) {
    return fs(2048, 8, e, t);
  }
  function Ma(e, t) {
    return fs(4, 2, e, t);
  }
  function La(e, t) {
    return fs(4, 4, e, t);
  }
  function Ai(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function _c(e, t, i) {
    return i = i != null ? i.concat([e]) : null, fs(4, 4, Ai.bind(null, t, e), i);
  }
  function ui() {
  }
  function Aa(e, t) {
    var i = tn();
    t = t === void 0 ? null : t;
    var o = i.memoizedState;
    return o !== null && t !== null && Uo(t, o[1]) ? o[0] : (i.memoizedState = [e, t], e);
  }
  function Tt(e, t) {
    var i = tn();
    t = t === void 0 ? null : t;
    var o = i.memoizedState;
    return o !== null && t !== null && Uo(t, o[1]) ? o[0] : (e = e(), i.memoizedState = [e, t], e);
  }
  function Sc(e, t, i) {
    return (Bn & 21) === 0 ? (e.baseState && (e.baseState = !1, y = !0), e.memoizedState = i) : (Xn(i, t) || (i = Jl(), pt.lanes |= i, Bo |= i, e.baseState = !0), t);
  }
  function wc(e, t) {
    var i = at;
    at = i !== 0 && 4 > i ? i : 4, e(!0);
    var o = Go.transition;
    Go.transition = {};
    try {
      e(!1), t();
    } finally {
      at = i, Go.transition = o;
    }
  }
  function xc() {
    return tn().memoizedState;
  }
  function md(e, t, i) {
    var o = no(e);
    if (i = { lane: o, action: i, hasEagerState: !1, eagerState: null, next: null }, Oa(e)) kc(t, i);
    else if (i = Io(e, t, i, o), i !== null) {
      var u = cr();
      fi(i, e, o, u), ur(i, t, o);
    }
  }
  function Cc(e, t, i) {
    var o = no(e), u = { lane: o, action: i, hasEagerState: !1, eagerState: null, next: null };
    if (Oa(e)) kc(t, u);
    else {
      var p = e.alternate;
      if (e.lanes === 0 && (p === null || p.lanes === 0) && (p = t.lastRenderedReducer, p !== null)) try {
        var A = t.lastRenderedState, K = p(A, i);
        if (u.hasEagerState = !0, u.eagerState = K, Xn(K, A)) {
          var $ = t.interleaved;
          $ === null ? (u.next = u, Bs(t)) : (u.next = $.next, $.next = u), t.interleaved = u;
          return;
        }
      } catch {
      } finally {
      }
      i = Io(e, t, u, o), i !== null && (u = cr(), fi(i, e, o, u), ur(i, t, o));
    }
  }
  function Oa(e) {
    var t = e.alternate;
    return e === pt || t !== null && t === pt;
  }
  function kc(e, t) {
    Mi = Fr = !0;
    var i = e.pending;
    i === null ? t.next = t : (t.next = i.next, i.next = t), e.pending = t;
  }
  function ur(e, t, i) {
    if ((i & 4194240) !== 0) {
      var o = t.lanes;
      o &= e.pendingLanes, i |= o, t.lanes = i, Zl(e, i);
    }
  }
  var Qs = { readContext: Un, useCallback: Kt, useContext: Kt, useEffect: Kt, useImperativeHandle: Kt, useInsertionEffect: Kt, useLayoutEffect: Kt, useMemo: Kt, useReducer: Kt, useRef: Kt, useState: Kt, useDebugValue: Kt, useDeferredValue: Kt, useTransition: Kt, useMutableSource: Kt, useSyncExternalStore: Kt, useId: Kt, unstable_isNewReconciler: !1 }, yd = { readContext: Un, useCallback: function(e, t) {
    return Rt().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: Un, useEffect: vc, useImperativeHandle: function(e, t, i) {
    return i = i != null ? i.concat([e]) : null, Xs(
      4194308,
      4,
      Ai.bind(null, t, e),
      i
    );
  }, useLayoutEffect: function(e, t) {
    return Xs(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return Xs(4, 2, e, t);
  }, useMemo: function(e, t) {
    var i = Rt();
    return t = t === void 0 ? null : t, e = e(), i.memoizedState = [e, t], e;
  }, useReducer: function(e, t, i) {
    var o = Rt();
    return t = i !== void 0 ? i(t) : t, o.memoizedState = o.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, o.queue = e, e = e.dispatch = md.bind(null, pt, e), [o.memoizedState, e];
  }, useRef: function(e) {
    var t = Rt();
    return e = { current: e }, t.memoizedState = e;
  }, useState: Li, useDebugValue: ui, useDeferredValue: function(e) {
    return Rt().memoizedState = e;
  }, useTransition: function() {
    var e = Li(!1), t = e[0];
    return e = wc.bind(null, e[1]), Rt().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, i) {
    var o = pt, u = Rt();
    if (ft) {
      if (i === void 0) throw Error(_(407));
      i = i();
    } else {
      if (i = t(), Tn === null) throw Error(_(349));
      (Bn & 30) !== 0 || yc(o, t, i);
    }
    u.memoizedState = i;
    var p = { value: i, getSnapshot: t };
    return u.queue = p, vc(Ra.bind(
      null,
      o,
      p,
      e
    ), [e]), o.flags |= 2048, Ys(9, ai.bind(null, o, p, i, t), void 0, null), i;
  }, useId: function() {
    var e = Rt(), t = Tn.identifierPrefix;
    if (ft) {
      var i = Ft, o = ir;
      i = (o & ~(1 << 32 - et(o) - 1)).toString(32) + i, t = ":" + t + "R" + i, i = vr++, 0 < i && (t += "H" + i.toString(32)), t += ":";
    } else i = Il++, t = ":" + t + "r" + i.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, Oi = {
    readContext: Un,
    useCallback: Aa,
    useContext: Un,
    useEffect: Fa,
    useImperativeHandle: _c,
    useInsertionEffect: Ma,
    useLayoutEffect: La,
    useMemo: Tt,
    useReducer: Pn,
    useRef: Na,
    useState: function() {
      return Pn(En);
    },
    useDebugValue: ui,
    useDeferredValue: function(e) {
      var t = tn();
      return Sc(t, Gt.memoizedState, e);
    },
    useTransition: function() {
      var e = Pn(En)[0], t = tn().memoizedState;
      return [e, t];
    },
    useMutableSource: zl,
    useSyncExternalStore: Gl,
    useId: xc,
    unstable_isNewReconciler: !1
  }, Bl = { readContext: Un, useCallback: Aa, useContext: Un, useEffect: Fa, useImperativeHandle: _c, useInsertionEffect: Ma, useLayoutEffect: La, useMemo: Tt, useReducer: Dl, useRef: Na, useState: function() {
    return Dl(En);
  }, useDebugValue: ui, useDeferredValue: function(e) {
    var t = tn();
    return Gt === null ? t.memoizedState = e : Sc(t, Gt.memoizedState, e);
  }, useTransition: function() {
    var e = Dl(En)[0], t = tn().memoizedState;
    return [e, t];
  }, useMutableSource: zl, useSyncExternalStore: Gl, useId: xc, unstable_isNewReconciler: !1 };
  function vn(e, t) {
    if (e && e.defaultProps) {
      t = B({}, t), e = e.defaultProps;
      for (var i in e) t[i] === void 0 && (t[i] = e[i]);
      return t;
    }
    return t;
  }
  function bs(e, t, i, o) {
    t = e.memoizedState, i = i(o, t), i = i == null ? t : B({}, t, i), e.memoizedState = i, e.lanes === 0 && (e.updateQueue.baseState = i);
  }
  var Js = { isMounted: function(e) {
    return (e = e._reactInternals) ? Bi(e) === e : !1;
  }, enqueueSetState: function(e, t, i) {
    e = e._reactInternals;
    var o = cr(), u = no(e), p = Wr(o, u);
    p.payload = t, i != null && (p.callback = i), t = qr(e, p, u), t !== null && (fi(t, e, u, o), Ol(t, e, u));
  }, enqueueReplaceState: function(e, t, i) {
    e = e._reactInternals;
    var o = cr(), u = no(e), p = Wr(o, u);
    p.tag = 1, p.payload = t, i != null && (p.callback = i), t = qr(e, p, u), t !== null && (fi(t, e, u, o), Ol(t, e, u));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var i = cr(), o = no(e), u = Wr(i, o);
    u.tag = 2, t != null && (u.callback = t), t = qr(e, u, o), t !== null && (fi(t, e, o, i), Ol(t, e, o));
  } };
  function Vl(e, t, i, o, u, p, A) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(o, p, A) : t.prototype && t.prototype.isPureReactComponent ? !Qi(i, o) || !Qi(u, p) : !0;
  }
  function Ec(e, t, i) {
    var o = !1, u = Br, p = t.contextType;
    return typeof p == "object" && p !== null ? p = Un(p) : (u = Cn(t) ? Ei : yn.current, o = t.contextTypes, p = (o = o != null) ? is(e, u) : Br), t = new t(i, p), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Js, e.stateNode = t, t._reactInternals = e, o && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = u, e.__reactInternalMemoizedMaskedChildContext = p), t;
  }
  function Ia(e, t, i, o) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(i, o), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(i, o), t.state !== e && Js.enqueueReplaceState(t, t.state, null);
  }
  function Hl(e, t, i, o) {
    var u = e.stateNode;
    u.props = i, u.state = e.memoizedState, u.refs = {}, Do(e);
    var p = t.contextType;
    typeof p == "object" && p !== null ? u.context = Un(p) : (p = Cn(t) ? Ei : yn.current, u.context = is(e, p)), u.state = e.memoizedState, p = t.getDerivedStateFromProps, typeof p == "function" && (bs(e, t, p, i), u.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (t = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), t !== u.state && Js.enqueueReplaceState(u, u.state, null), Vs(e, i, u, o), u.state = e.memoizedState), typeof u.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function hs(e, t) {
    try {
      var i = "", o = t;
      do
        i += me(o), o = o.return;
      while (o);
      var u = i;
    } catch (p) {
      u = `
Error generating stack: ` + p.message + `
` + p.stack;
    }
    return { value: e, source: t, stack: u, digest: null };
  }
  function jl(e, t, i) {
    return { value: e, source: null, stack: i ?? null, digest: t ?? null };
  }
  function Zs(e, t) {
    try {
      console.error(t.value);
    } catch (i) {
      setTimeout(function() {
        throw i;
      });
    }
  }
  var vd = typeof WeakMap == "function" ? WeakMap : Map;
  function Pc(e, t, i) {
    i = Wr(-1, i), i.tag = 3, i.payload = { element: null };
    var o = t.value;
    return i.callback = function() {
      Mc || (Mc = !0, Td = o), Zs(e, t);
    }, i;
  }
  function n(e, t, i) {
    i = Wr(-1, i), i.tag = 3;
    var o = e.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var u = t.value;
      i.payload = function() {
        return o(u);
      }, i.callback = function() {
        Zs(e, t);
      };
    }
    var p = e.stateNode;
    return p !== null && typeof p.componentDidCatch == "function" && (i.callback = function() {
      Zs(e, t), typeof o != "function" && (eo === null ? eo = /* @__PURE__ */ new Set([this]) : eo.add(this));
      var A = t.stack;
      this.componentDidCatch(t.value, { componentStack: A !== null ? A : "" });
    }), i;
  }
  function r(e, t, i) {
    var o = e.pingCache;
    if (o === null) {
      o = e.pingCache = new vd();
      var u = /* @__PURE__ */ new Set();
      o.set(t, u);
    } else u = o.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), o.set(t, u));
    u.has(i) || (u.add(i), e = a1.bind(null, e, t, i), t.then(e, e));
  }
  function s(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function a(e, t, i, o, u) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, i.flags |= 131072, i.flags &= -52805, i.tag === 1 && (i.alternate === null ? i.tag = 17 : (t = Wr(-1, 1), t.tag = 2, qr(i, t, 1))), i.lanes |= 1), e) : (e.flags |= 65536, e.lanes = u, e);
  }
  var c = T.ReactCurrentOwner, y = !1;
  function V(e, t, i, o) {
    t.child = e === null ? yr(t, null, i, o) : cs(t, e.child, i, o);
  }
  function ie(e, t, i, o, u) {
    i = i.render;
    var p = t.ref;
    return oi(t, u), o = qs(e, t, i, o, p, u), i = Ks(), e !== null && !y ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~u, Rn(e, t, u)) : (ft && i && zs(t), t.flags |= 1, V(e, t, o, u), t.child);
  }
  function he(e, t, i, o, u) {
    if (e === null) {
      var p = i.type;
      return typeof p == "function" && !Id(p) && p.defaultProps === void 0 && i.compare === null && i.defaultProps === void 0 ? (t.tag = 15, t.type = p, Ce(e, t, p, o, u)) : (e = zc(i.type, null, o, t, t.mode, u), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (p = e.child, (e.lanes & u) === 0) {
      var A = p.memoizedProps;
      if (i = i.compare, i = i !== null ? i : Qi, i(A, o) && e.ref === t.ref) return Rn(e, t, u);
    }
    return t.flags |= 1, e = io(p, o), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Ce(e, t, i, o, u) {
    if (e !== null) {
      var p = e.memoizedProps;
      if (Qi(p, o) && e.ref === t.ref) if (y = !1, t.pendingProps = o = p, (e.lanes & u) !== 0) (e.flags & 131072) !== 0 && (y = !0);
      else return t.lanes = e.lanes, Rn(e, t, u);
    }
    return Ne(e, t, i, o, u);
  }
  function Le(e, t, i) {
    var o = t.pendingProps, u = o.children, p = e !== null ? e.memoizedState : null;
    if (o.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, yt(ql, Mr), Mr |= i;
    else {
      if ((i & 1073741824) === 0) return e = p !== null ? p.baseLanes | i : i, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, yt(ql, Mr), Mr |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = p !== null ? p.baseLanes : i, yt(ql, Mr), Mr |= o;
    }
    else p !== null ? (o = p.baseLanes | i, t.memoizedState = null) : o = i, yt(ql, Mr), Mr |= o;
    return V(e, t, u, i), t.child;
  }
  function Ke(e, t) {
    var i = t.ref;
    (e === null && i !== null || e !== null && e.ref !== i) && (t.flags |= 512, t.flags |= 2097152);
  }
  function Ne(e, t, i, o, u) {
    var p = Cn(i) ? Ei : yn.current;
    return p = is(t, p), oi(t, u), i = qs(e, t, i, o, p, u), o = Ks(), e !== null && !y ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~u, Rn(e, t, u)) : (ft && o && zs(t), t.flags |= 1, V(e, t, i, u), t.child);
  }
  function Ct(e, t, i, o, u) {
    if (Cn(i)) {
      var p = !0;
      ss(t);
    } else p = !1;
    if (oi(t, u), t.stateNode === null) it(e, t), Ec(t, i, o), Hl(t, i, o, u), o = !0;
    else if (e === null) {
      var A = t.stateNode, K = t.memoizedProps;
      A.props = K;
      var $ = A.context, fe = i.contextType;
      typeof fe == "object" && fe !== null ? fe = Un(fe) : (fe = Cn(i) ? Ei : yn.current, fe = is(t, fe));
      var Se = i.getDerivedStateFromProps, we = typeof Se == "function" || typeof A.getSnapshotBeforeUpdate == "function";
      we || typeof A.UNSAFE_componentWillReceiveProps != "function" && typeof A.componentWillReceiveProps != "function" || (K !== o || $ !== fe) && Ia(t, A, o, fe), jr = !1;
      var _e = t.memoizedState;
      A.state = _e, Vs(t, o, A, u), $ = t.memoizedState, K !== o || _e !== $ || xn.current || jr ? (typeof Se == "function" && (bs(t, i, Se, o), $ = t.memoizedState), (K = jr || Vl(t, i, K, o, _e, $, fe)) ? (we || typeof A.UNSAFE_componentWillMount != "function" && typeof A.componentWillMount != "function" || (typeof A.componentWillMount == "function" && A.componentWillMount(), typeof A.UNSAFE_componentWillMount == "function" && A.UNSAFE_componentWillMount()), typeof A.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof A.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = o, t.memoizedState = $), A.props = o, A.state = $, A.context = fe, o = K) : (typeof A.componentDidMount == "function" && (t.flags |= 4194308), o = !1);
    } else {
      A = t.stateNode, Al(e, t), K = t.memoizedProps, fe = t.type === t.elementType ? K : vn(t.type, K), A.props = fe, we = t.pendingProps, _e = A.context, $ = i.contextType, typeof $ == "object" && $ !== null ? $ = Un($) : ($ = Cn(i) ? Ei : yn.current, $ = is(t, $));
      var Me = i.getDerivedStateFromProps;
      (Se = typeof Me == "function" || typeof A.getSnapshotBeforeUpdate == "function") || typeof A.UNSAFE_componentWillReceiveProps != "function" && typeof A.componentWillReceiveProps != "function" || (K !== we || _e !== $) && Ia(t, A, o, $), jr = !1, _e = t.memoizedState, A.state = _e, Vs(t, o, A, u);
      var Ie = t.memoizedState;
      K !== we || _e !== Ie || xn.current || jr ? (typeof Me == "function" && (bs(t, i, Me, o), Ie = t.memoizedState), (fe = jr || Vl(t, i, fe, o, _e, Ie, $) || !1) ? (Se || typeof A.UNSAFE_componentWillUpdate != "function" && typeof A.componentWillUpdate != "function" || (typeof A.componentWillUpdate == "function" && A.componentWillUpdate(o, Ie, $), typeof A.UNSAFE_componentWillUpdate == "function" && A.UNSAFE_componentWillUpdate(o, Ie, $)), typeof A.componentDidUpdate == "function" && (t.flags |= 4), typeof A.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof A.componentDidUpdate != "function" || K === e.memoizedProps && _e === e.memoizedState || (t.flags |= 4), typeof A.getSnapshotBeforeUpdate != "function" || K === e.memoizedProps && _e === e.memoizedState || (t.flags |= 1024), t.memoizedProps = o, t.memoizedState = Ie), A.props = o, A.state = Ie, A.context = $, o = fe) : (typeof A.componentDidUpdate != "function" || K === e.memoizedProps && _e === e.memoizedState || (t.flags |= 4), typeof A.getSnapshotBeforeUpdate != "function" || K === e.memoizedProps && _e === e.memoizedState || (t.flags |= 1024), o = !1);
    }
    return ht(e, t, i, o, p, u);
  }
  function ht(e, t, i, o, u, p) {
    Ke(e, t);
    var A = (t.flags & 128) !== 0;
    if (!o && !A) return u && pc(t, i, !1), Rn(e, t, p);
    o = t.stateNode, c.current = t;
    var K = A && typeof i.getDerivedStateFromError != "function" ? null : o.render();
    return t.flags |= 1, e !== null && A ? (t.child = cs(t, e.child, null, p), t.child = cs(t, null, K, p)) : V(e, t, K, p), t.memoizedState = o.state, u && pc(t, i, !0), t.child;
  }
  function Vn(e) {
    var t = e.stateNode;
    t.pendingContext ? Ca(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Ca(e, t.context, !1), Fi(e, t.containerInfo);
  }
  function Kr(e, t, i, o, u) {
    return us(), Ao(u), t.flags |= 256, V(e, t, i, o), t.child;
  }
  var de = { dehydrated: null, treeContext: null, retryLane: 0 };
  function le(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function pe(e, t, i) {
    var o = t.pendingProps, u = xt.current, p = !1, A = (t.flags & 128) !== 0, K;
    if ((K = A) || (K = e !== null && e.memoizedState === null ? !1 : (u & 2) !== 0), K ? (p = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (u |= 1), yt(xt, u & 1), e === null)
      return Gs(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (A = o.children, e = o.fallback, p ? (o = t.mode, p = t.child, A = { mode: "hidden", children: A }, (o & 1) === 0 && p !== null ? (p.childLanes = 0, p.pendingProps = A) : p = Gc(A, o, 0, null), e = Wo(e, o, i, null), p.return = t, e.return = t, p.sibling = e, t.child = p, t.child.memoizedState = le(i), t.memoizedState = de, e) : Fe(t, A));
    if (u = e.memoizedState, u !== null && (K = u.dehydrated, K !== null)) return Je(e, t, A, o, K, u, i);
    if (p) {
      p = o.fallback, A = t.mode, u = e.child, K = u.sibling;
      var $ = { mode: "hidden", children: o.children };
      return (A & 1) === 0 && t.child !== u ? (o = t.child, o.childLanes = 0, o.pendingProps = $, t.deletions = null) : (o = io(u, $), o.subtreeFlags = u.subtreeFlags & 14680064), K !== null ? p = io(K, p) : (p = Wo(p, A, i, null), p.flags |= 2), p.return = t, o.return = t, o.sibling = p, t.child = o, o = p, p = t.child, A = e.child.memoizedState, A = A === null ? le(i) : { baseLanes: A.baseLanes | i, cachePool: null, transitions: A.transitions }, p.memoizedState = A, p.childLanes = e.childLanes & ~i, t.memoizedState = de, o;
    }
    return p = e.child, e = p.sibling, o = io(p, { mode: "visible", children: o.children }), (t.mode & 1) === 0 && (o.lanes = i), o.return = t, o.sibling = null, e !== null && (i = t.deletions, i === null ? (t.deletions = [e], t.flags |= 16) : i.push(e)), t.child = o, t.memoizedState = null, o;
  }
  function Fe(e, t) {
    return t = Gc({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function Ue(e, t, i, o) {
    return o !== null && Ao(o), cs(t, e.child, null, i), e = Fe(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function Je(e, t, i, o, u, p, A) {
    if (i)
      return t.flags & 256 ? (t.flags &= -257, o = jl(Error(_(422))), Ue(e, t, A, o)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (p = o.fallback, u = t.mode, o = Gc({ mode: "visible", children: o.children }, u, 0, null), p = Wo(p, u, A, null), p.flags |= 2, o.return = t, p.return = t, o.sibling = p, t.child = o, (t.mode & 1) !== 0 && cs(t, e.child, null, A), t.child.memoizedState = le(A), t.memoizedState = de, p);
    if ((t.mode & 1) === 0) return Ue(e, t, A, null);
    if (u.data === "$!") {
      if (o = u.nextSibling && u.nextSibling.dataset, o) var K = o.dgst;
      return o = K, p = Error(_(419)), o = jl(p, o, void 0), Ue(e, t, A, o);
    }
    if (K = (A & e.childLanes) !== 0, y || K) {
      if (o = Tn, o !== null) {
        switch (A & -A) {
          case 4:
            u = 2;
            break;
          case 16:
            u = 8;
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
            u = 32;
            break;
          case 536870912:
            u = 268435456;
            break;
          default:
            u = 0;
        }
        u = (u & (o.suspendedLanes | A)) !== 0 ? 0 : u, u !== 0 && u !== p.retryLane && (p.retryLane = u, ar(e, u), fi(o, e, u, -1));
      }
      return Od(), o = jl(Error(_(421))), Ue(e, t, A, o);
    }
    return u.data === "$?" ? (t.flags |= 128, t.child = e.child, t = u1.bind(null, e), u._reactRetry = t, null) : (e = p.treeContext, Pe = Gr(u.nextSibling), sr = t, ft = !0, or = null, e !== null && (zn[Gn++] = ir, zn[Gn++] = Ft, zn[Gn++] = Ni, ir = e.id, Ft = e.overflow, Ni = t), t = Fe(t, o.children), t.flags |= 4096, t);
  }
  function Ye(e, t, i) {
    e.lanes |= t;
    var o = e.alternate;
    o !== null && (o.lanes |= t), Ll(e.return, t, i);
  }
  function ot(e, t, i, o, u) {
    var p = e.memoizedState;
    p === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: o, tail: i, tailMode: u } : (p.isBackwards = t, p.rendering = null, p.renderingStartTime = 0, p.last = o, p.tail = i, p.tailMode = u);
  }
  function nn(e, t, i) {
    var o = t.pendingProps, u = o.revealOrder, p = o.tail;
    if (V(e, t, o.children, i), o = xt.current, (o & 2) !== 0) o = o & 1 | 2, t.flags |= 128;
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
      o &= 1;
    }
    if (yt(xt, o), (t.mode & 1) === 0) t.memoizedState = null;
    else switch (u) {
      case "forwards":
        for (i = t.child, u = null; i !== null; ) e = i.alternate, e !== null && js(e) === null && (u = i), i = i.sibling;
        i = u, i === null ? (u = t.child, t.child = null) : (u = i.sibling, i.sibling = null), ot(t, !1, u, i, p);
        break;
      case "backwards":
        for (i = null, u = t.child, t.child = null; u !== null; ) {
          if (e = u.alternate, e !== null && js(e) === null) {
            t.child = u;
            break;
          }
          e = u.sibling, u.sibling = i, i = u, u = e;
        }
        ot(t, !0, i, null, p);
        break;
      case "together":
        ot(t, !1, null, null, void 0);
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
    if (e !== null && (t.dependencies = e.dependencies), Bo |= t.lanes, (i & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(_(153));
    if (t.child !== null) {
      for (e = t.child, i = io(e, e.pendingProps), t.child = i, i.return = t; e.sibling !== null; ) e = e.sibling, i = i.sibling = io(e, e.pendingProps), i.return = t;
      i.sibling = null;
    }
    return t.child;
  }
  function _d(e, t, i) {
    switch (t.tag) {
      case 3:
        Vn(t), us();
        break;
      case 5:
        Hs(t);
        break;
      case 1:
        Cn(t.type) && ss(t);
        break;
      case 4:
        Fi(t, t.stateNode.containerInfo);
        break;
      case 10:
        var o = t.type._context, u = t.memoizedProps.value;
        yt(Oo, o._currentValue), o._currentValue = u;
        break;
      case 13:
        if (o = t.memoizedState, o !== null)
          return o.dehydrated !== null ? (yt(xt, xt.current & 1), t.flags |= 128, null) : (i & t.child.childLanes) !== 0 ? pe(e, t, i) : (yt(xt, xt.current & 1), e = Rn(e, t, i), e !== null ? e.sibling : null);
        yt(xt, xt.current & 1);
        break;
      case 19:
        if (o = (i & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (o) return nn(e, t, i);
          t.flags |= 128;
        }
        if (u = t.memoizedState, u !== null && (u.rendering = null, u.tail = null, u.lastEffect = null), yt(xt, xt.current), o) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, Le(e, t, i);
    }
    return Rn(e, t, i);
  }
  var xf, Sd, Cf, kf;
  xf = function(e, t) {
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
  }, Sd = function() {
  }, Cf = function(e, t, i, o) {
    var u = e.memoizedProps;
    if (u !== o) {
      e = t.stateNode, en(vt.current);
      var p = null;
      switch (i) {
        case "input":
          u = rt(e, u), o = rt(e, o), p = [];
          break;
        case "select":
          u = B({}, u, { value: void 0 }), o = B({}, o, { value: void 0 }), p = [];
          break;
        case "textarea":
          u = ut(e, u), o = ut(e, o), p = [];
          break;
        default:
          typeof u.onClick != "function" && typeof o.onClick == "function" && (e.onclick = ts);
      }
      ve(i, o);
      var A;
      i = null;
      for (fe in u) if (!o.hasOwnProperty(fe) && u.hasOwnProperty(fe) && u[fe] != null) if (fe === "style") {
        var K = u[fe];
        for (A in K) K.hasOwnProperty(A) && (i || (i = {}), i[A] = "");
      } else fe !== "dangerouslySetInnerHTML" && fe !== "children" && fe !== "suppressContentEditableWarning" && fe !== "suppressHydrationWarning" && fe !== "autoFocus" && (N.hasOwnProperty(fe) ? p || (p = []) : (p = p || []).push(fe, null));
      for (fe in o) {
        var $ = o[fe];
        if (K = u != null ? u[fe] : void 0, o.hasOwnProperty(fe) && $ !== K && ($ != null || K != null)) if (fe === "style") if (K) {
          for (A in K) !K.hasOwnProperty(A) || $ && $.hasOwnProperty(A) || (i || (i = {}), i[A] = "");
          for (A in $) $.hasOwnProperty(A) && K[A] !== $[A] && (i || (i = {}), i[A] = $[A]);
        } else i || (p || (p = []), p.push(
          fe,
          i
        )), i = $;
        else fe === "dangerouslySetInnerHTML" ? ($ = $ ? $.__html : void 0, K = K ? K.__html : void 0, $ != null && K !== $ && (p = p || []).push(fe, $)) : fe === "children" ? typeof $ != "string" && typeof $ != "number" || (p = p || []).push(fe, "" + $) : fe !== "suppressContentEditableWarning" && fe !== "suppressHydrationWarning" && (N.hasOwnProperty(fe) ? ($ != null && fe === "onScroll" && St("scroll", e), p || K === $ || (p = [])) : (p = p || []).push(fe, $));
      }
      i && (p = p || []).push("style", i);
      var fe = p;
      (t.updateQueue = fe) && (t.flags |= 4);
    }
  }, kf = function(e, t, i, o) {
    i !== o && (t.flags |= 4);
  };
  function Da(e, t) {
    if (!ft) switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var i = null; t !== null; ) t.alternate !== null && (i = t), t = t.sibling;
        i === null ? e.tail = null : i.sibling = null;
        break;
      case "collapsed":
        i = e.tail;
        for (var o = null; i !== null; ) i.alternate !== null && (o = i), i = i.sibling;
        o === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : o.sibling = null;
    }
  }
  function bn(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, i = 0, o = 0;
    if (t) for (var u = e.child; u !== null; ) i |= u.lanes | u.childLanes, o |= u.subtreeFlags & 14680064, o |= u.flags & 14680064, u.return = e, u = u.sibling;
    else for (u = e.child; u !== null; ) i |= u.lanes | u.childLanes, o |= u.subtreeFlags, o |= u.flags, u.return = e, u = u.sibling;
    return e.subtreeFlags |= o, e.childLanes = i, t;
  }
  function Z0(e, t, i) {
    var o = t.pendingProps;
    switch (dn(t), t.tag) {
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
        return bn(t), null;
      case 1:
        return Cn(t.type) && Is(), bn(t), null;
      case 3:
        return o = t.stateNode, Lt(), wt(xn), wt(yn), kn(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (e === null || e.child === null) && (Lo(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, or !== null && (Md(or), or = null))), Sd(e, t), bn(t), null;
      case 5:
        li(t);
        var u = en(Ht.current);
        if (i = t.type, e !== null && t.stateNode != null) Cf(e, t, i, o, u), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!o) {
            if (t.stateNode === null) throw Error(_(166));
            return bn(t), null;
          }
          if (e = en(vt.current), Lo(t)) {
            o = t.stateNode, i = t.type;
            var p = t.memoizedProps;
            switch (o[mr] = t, o[No] = p, e = (t.mode & 1) !== 0, i) {
              case "dialog":
                St("cancel", o), St("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                St("load", o);
                break;
              case "video":
              case "audio":
                for (u = 0; u < xi.length; u++) St(xi[u], o);
                break;
              case "source":
                St("error", o);
                break;
              case "img":
              case "image":
              case "link":
                St(
                  "error",
                  o
                ), St("load", o);
                break;
              case "details":
                St("toggle", o);
                break;
              case "input":
                We(o, p), St("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!p.multiple }, St("invalid", o);
                break;
              case "textarea":
                Sn(o, p), St("invalid", o);
            }
            ve(i, p), u = null;
            for (var A in p) if (p.hasOwnProperty(A)) {
              var K = p[A];
              A === "children" ? typeof K == "string" ? o.textContent !== K && (p.suppressHydrationWarning !== !0 && Ro(o.textContent, K, e), u = ["children", K]) : typeof K == "number" && o.textContent !== "" + K && (p.suppressHydrationWarning !== !0 && Ro(
                o.textContent,
                K,
                e
              ), u = ["children", "" + K]) : N.hasOwnProperty(A) && K != null && A === "onScroll" && St("scroll", o);
            }
            switch (i) {
              case "input":
                Re(o), gt(o, p, !0);
                break;
              case "textarea":
                Re(o), fr(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof p.onClick == "function" && (o.onclick = ts);
            }
            o = u, t.updateQueue = o, o !== null && (t.flags |= 4);
          } else {
            A = u.nodeType === 9 ? u : u.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = jt(i)), e === "http://www.w3.org/1999/xhtml" ? i === "script" ? (e = A.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof o.is == "string" ? e = A.createElement(i, { is: o.is }) : (e = A.createElement(i), i === "select" && (A = e, o.multiple ? A.multiple = !0 : o.size && (A.size = o.size))) : e = A.createElementNS(e, i), e[mr] = t, e[No] = o, xf(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (A = xe(i, o), i) {
                case "dialog":
                  St("cancel", e), St("close", e), u = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  St("load", e), u = o;
                  break;
                case "video":
                case "audio":
                  for (u = 0; u < xi.length; u++) St(xi[u], e);
                  u = o;
                  break;
                case "source":
                  St("error", e), u = o;
                  break;
                case "img":
                case "image":
                case "link":
                  St(
                    "error",
                    e
                  ), St("load", e), u = o;
                  break;
                case "details":
                  St("toggle", e), u = o;
                  break;
                case "input":
                  We(e, o), u = rt(e, o), St("invalid", e);
                  break;
                case "option":
                  u = o;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!o.multiple }, u = B({}, o, { value: void 0 }), St("invalid", e);
                  break;
                case "textarea":
                  Sn(e, o), u = ut(e, o), St("invalid", e);
                  break;
                default:
                  u = o;
              }
              ve(i, u), K = u;
              for (p in K) if (K.hasOwnProperty(p)) {
                var $ = K[p];
                p === "style" ? Ar(e, $) : p === "dangerouslySetInnerHTML" ? ($ = $ ? $.__html : void 0, $ != null && Ln(e, $)) : p === "children" ? typeof $ == "string" ? (i !== "textarea" || $ !== "") && At(e, $) : typeof $ == "number" && At(e, "" + $) : p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && p !== "autoFocus" && (N.hasOwnProperty(p) ? $ != null && p === "onScroll" && St("scroll", e) : $ != null && h(e, p, $, A));
              }
              switch (i) {
                case "input":
                  Re(e), gt(e, o, !1);
                  break;
                case "textarea":
                  Re(e), fr(e);
                  break;
                case "option":
                  o.value != null && e.setAttribute("value", "" + se(o.value));
                  break;
                case "select":
                  e.multiple = !!o.multiple, p = o.value, p != null ? _t(e, !!o.multiple, p, !1) : o.defaultValue != null && _t(
                    e,
                    !!o.multiple,
                    o.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof u.onClick == "function" && (e.onclick = ts);
              }
              switch (i) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  o = !!o.autoFocus;
                  break e;
                case "img":
                  o = !0;
                  break e;
                default:
                  o = !1;
              }
            }
            o && (t.flags |= 4);
          }
          t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
        }
        return bn(t), null;
      case 6:
        if (e && t.stateNode != null) kf(e, t, e.memoizedProps, o);
        else {
          if (typeof o != "string" && t.stateNode === null) throw Error(_(166));
          if (i = en(Ht.current), en(vt.current), Lo(t)) {
            if (o = t.stateNode, i = t.memoizedProps, o[mr] = t, (p = o.nodeValue !== i) && (e = sr, e !== null)) switch (e.tag) {
              case 3:
                Ro(o.nodeValue, i, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Ro(o.nodeValue, i, (e.mode & 1) !== 0);
            }
            p && (t.flags |= 4);
          } else o = (i.nodeType === 9 ? i : i.ownerDocument).createTextNode(o), o[mr] = t, t.stateNode = o;
        }
        return bn(t), null;
      case 13:
        if (wt(xt), o = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (ft && Pe !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) Ea(), us(), t.flags |= 98560, p = !1;
          else if (p = Lo(t), o !== null && o.dehydrated !== null) {
            if (e === null) {
              if (!p) throw Error(_(318));
              if (p = t.memoizedState, p = p !== null ? p.dehydrated : null, !p) throw Error(_(317));
              p[mr] = t;
            } else us(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            bn(t), p = !1;
          } else or !== null && (Md(or), or = null), p = !0;
          if (!p) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = i, t) : (o = o !== null, o !== (e !== null && e.memoizedState !== null) && o && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (xt.current & 1) !== 0 ? _n === 0 && (_n = 3) : Od())), t.updateQueue !== null && (t.flags |= 4), bn(t), null);
      case 4:
        return Lt(), Sd(e, t), e === null && $i(t.stateNode.containerInfo), bn(t), null;
      case 10:
        return Ml(t.type._context), bn(t), null;
      case 17:
        return Cn(t.type) && Is(), bn(t), null;
      case 19:
        if (wt(xt), p = t.memoizedState, p === null) return bn(t), null;
        if (o = (t.flags & 128) !== 0, A = p.rendering, A === null) if (o) Da(p, !1);
        else {
          if (_n !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (A = js(e), A !== null) {
              for (t.flags |= 128, Da(p, !1), o = A.updateQueue, o !== null && (t.updateQueue = o, t.flags |= 4), t.subtreeFlags = 0, o = i, i = t.child; i !== null; ) p = i, e = o, p.flags &= 14680066, A = p.alternate, A === null ? (p.childLanes = 0, p.lanes = e, p.child = null, p.subtreeFlags = 0, p.memoizedProps = null, p.memoizedState = null, p.updateQueue = null, p.dependencies = null, p.stateNode = null) : (p.childLanes = A.childLanes, p.lanes = A.lanes, p.child = A.child, p.subtreeFlags = 0, p.deletions = null, p.memoizedProps = A.memoizedProps, p.memoizedState = A.memoizedState, p.updateQueue = A.updateQueue, p.type = A.type, e = A.dependencies, p.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), i = i.sibling;
              return yt(xt, xt.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          p.tail !== null && Bt() > Kl && (t.flags |= 128, o = !0, Da(p, !1), t.lanes = 4194304);
        }
        else {
          if (!o) if (e = js(A), e !== null) {
            if (t.flags |= 128, o = !0, i = e.updateQueue, i !== null && (t.updateQueue = i, t.flags |= 4), Da(p, !0), p.tail === null && p.tailMode === "hidden" && !A.alternate && !ft) return bn(t), null;
          } else 2 * Bt() - p.renderingStartTime > Kl && i !== 1073741824 && (t.flags |= 128, o = !0, Da(p, !1), t.lanes = 4194304);
          p.isBackwards ? (A.sibling = t.child, t.child = A) : (i = p.last, i !== null ? i.sibling = A : t.child = A, p.last = A);
        }
        return p.tail !== null ? (t = p.tail, p.rendering = t, p.tail = t.sibling, p.renderingStartTime = Bt(), t.sibling = null, i = xt.current, yt(xt, o ? i & 1 | 2 : i & 1), t) : (bn(t), null);
      case 22:
      case 23:
        return Ad(), o = t.memoizedState !== null, e !== null && e.memoizedState !== null !== o && (t.flags |= 8192), o && (t.mode & 1) !== 0 ? (Mr & 1073741824) !== 0 && (bn(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : bn(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(_(156, t.tag));
  }
  function $0(e, t) {
    switch (dn(t), t.tag) {
      case 1:
        return Cn(t.type) && Is(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Lt(), wt(xn), wt(yn), kn(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return li(t), null;
      case 13:
        if (wt(xt), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(_(340));
          us();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return wt(xt), null;
      case 4:
        return Lt(), null;
      case 10:
        return Ml(t.type._context), null;
      case 22:
      case 23:
        return Ad(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Rc = !1, Jn = !1, e1 = typeof WeakSet == "function" ? WeakSet : Set, Ae = null;
  function Wl(e, t) {
    var i = e.ref;
    if (i !== null) if (typeof i == "function") try {
      i(null);
    } catch (o) {
      Yt(e, t, o);
    }
    else i.current = null;
  }
  function wd(e, t, i) {
    try {
      i();
    } catch (o) {
      Yt(e, t, o);
    }
  }
  var Ef = !1;
  function t1(e, t) {
    if (_a = rl, e = Zt(), Ms(e)) {
      if ("selectionStart" in e) var i = { start: e.selectionStart, end: e.selectionEnd };
      else e: {
        i = (i = e.ownerDocument) && i.defaultView || window;
        var o = i.getSelection && i.getSelection();
        if (o && o.rangeCount !== 0) {
          i = o.anchorNode;
          var u = o.anchorOffset, p = o.focusNode;
          o = o.focusOffset;
          try {
            i.nodeType, p.nodeType;
          } catch {
            i = null;
            break e;
          }
          var A = 0, K = -1, $ = -1, fe = 0, Se = 0, we = e, _e = null;
          t: for (; ; ) {
            for (var Me; we !== i || u !== 0 && we.nodeType !== 3 || (K = A + u), we !== p || o !== 0 && we.nodeType !== 3 || ($ = A + o), we.nodeType === 3 && (A += we.nodeValue.length), (Me = we.firstChild) !== null; )
              _e = we, we = Me;
            for (; ; ) {
              if (we === e) break t;
              if (_e === i && ++fe === u && (K = A), _e === p && ++Se === o && ($ = A), (Me = we.nextSibling) !== null) break;
              we = _e, _e = we.parentNode;
            }
            we = Me;
          }
          i = K === -1 || $ === -1 ? null : { start: K, end: $ };
        } else i = null;
      }
      i = i || { start: 0, end: 0 };
    } else i = null;
    for (Sa = { focusedElem: e, selectionRange: i }, rl = !1, Ae = t; Ae !== null; ) if (t = Ae, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, Ae = e;
    else for (; Ae !== null; ) {
      t = Ae;
      try {
        var Ie = t.alternate;
        if ((t.flags & 1024) !== 0) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (Ie !== null) {
              var De = Ie.memoizedProps, rn = Ie.memoizedState, ae = t.stateNode, te = ae.getSnapshotBeforeUpdate(t.elementType === t.type ? De : vn(t.type, De), rn);
              ae.__reactInternalSnapshotBeforeUpdate = te;
            }
            break;
          case 3:
            var ue = t.stateNode.containerInfo;
            ue.nodeType === 1 ? ue.textContent = "" : ue.nodeType === 9 && ue.documentElement && ue.removeChild(ue.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(_(163));
        }
      } catch (ke) {
        Yt(t, t.return, ke);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, Ae = e;
        break;
      }
      Ae = t.return;
    }
    return Ie = Ef, Ef = !1, Ie;
  }
  function za(e, t, i) {
    var o = t.updateQueue;
    if (o = o !== null ? o.lastEffect : null, o !== null) {
      var u = o = o.next;
      do {
        if ((u.tag & e) === e) {
          var p = u.destroy;
          u.destroy = void 0, p !== void 0 && wd(t, i, p);
        }
        u = u.next;
      } while (u !== o);
    }
  }
  function Tc(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
      var i = t = t.next;
      do {
        if ((i.tag & e) === e) {
          var o = i.create;
          i.destroy = o();
        }
        i = i.next;
      } while (i !== t);
    }
  }
  function xd(e) {
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
  function Pf(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Pf(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[mr], delete t[No], delete t[Cl], delete t[fc], delete t[hc])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function Rf(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Tf(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Rf(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Cd(e, t, i) {
    var o = e.tag;
    if (o === 5 || o === 6) e = e.stateNode, t ? i.nodeType === 8 ? i.parentNode.insertBefore(e, t) : i.insertBefore(e, t) : (i.nodeType === 8 ? (t = i.parentNode, t.insertBefore(e, i)) : (t = i, t.appendChild(e)), i = i._reactRootContainer, i != null || t.onclick !== null || (t.onclick = ts));
    else if (o !== 4 && (e = e.child, e !== null)) for (Cd(e, t, i), e = e.sibling; e !== null; ) Cd(e, t, i), e = e.sibling;
  }
  function kd(e, t, i) {
    var o = e.tag;
    if (o === 5 || o === 6) e = e.stateNode, t ? i.insertBefore(e, t) : i.appendChild(e);
    else if (o !== 4 && (e = e.child, e !== null)) for (kd(e, t, i), e = e.sibling; e !== null; ) kd(e, t, i), e = e.sibling;
  }
  var Hn = null, ci = !1;
  function $s(e, t, i) {
    for (i = i.child; i !== null; ) Nf(e, t, i), i = i.sibling;
  }
  function Nf(e, t, i) {
    if (hn && typeof hn.onCommitFiberUnmount == "function") try {
      hn.onCommitFiberUnmount(Jr, i);
    } catch {
    }
    switch (i.tag) {
      case 5:
        Jn || Wl(i, t);
      case 6:
        var o = Hn, u = ci;
        Hn = null, $s(e, t, i), Hn = o, ci = u, Hn !== null && (ci ? (e = Hn, i = i.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(i) : e.removeChild(i)) : Hn.removeChild(i.stateNode));
        break;
      case 18:
        Hn !== null && (ci ? (e = Hn, i = i.stateNode, e.nodeType === 8 ? xl(e.parentNode, i) : e.nodeType === 1 && xl(e, i), Kn(e)) : xl(Hn, i.stateNode));
        break;
      case 4:
        o = Hn, u = ci, Hn = i.stateNode.containerInfo, ci = !0, $s(e, t, i), Hn = o, ci = u;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Jn && (o = i.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
          u = o = o.next;
          do {
            var p = u, A = p.destroy;
            p = p.tag, A !== void 0 && ((p & 2) !== 0 || (p & 4) !== 0) && wd(i, t, A), u = u.next;
          } while (u !== o);
        }
        $s(e, t, i);
        break;
      case 1:
        if (!Jn && (Wl(i, t), o = i.stateNode, typeof o.componentWillUnmount == "function")) try {
          o.props = i.memoizedProps, o.state = i.memoizedState, o.componentWillUnmount();
        } catch (K) {
          Yt(i, t, K);
        }
        $s(e, t, i);
        break;
      case 21:
        $s(e, t, i);
        break;
      case 22:
        i.mode & 1 ? (Jn = (o = Jn) || i.memoizedState !== null, $s(e, t, i), Jn = o) : $s(e, t, i);
        break;
      default:
        $s(e, t, i);
    }
  }
  function Ff(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var i = e.stateNode;
      i === null && (i = e.stateNode = new e1()), t.forEach(function(o) {
        var u = c1.bind(null, e, o);
        i.has(o) || (i.add(o), o.then(u, u));
      });
    }
  }
  function di(e, t) {
    var i = t.deletions;
    if (i !== null) for (var o = 0; o < i.length; o++) {
      var u = i[o];
      try {
        var p = e, A = t, K = A;
        e: for (; K !== null; ) {
          switch (K.tag) {
            case 5:
              Hn = K.stateNode, ci = !1;
              break e;
            case 3:
              Hn = K.stateNode.containerInfo, ci = !0;
              break e;
            case 4:
              Hn = K.stateNode.containerInfo, ci = !0;
              break e;
          }
          K = K.return;
        }
        if (Hn === null) throw Error(_(160));
        Nf(p, A, u), Hn = null, ci = !1;
        var $ = u.alternate;
        $ !== null && ($.return = null), u.return = null;
      } catch (fe) {
        Yt(u, t, fe);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Mf(t, e), t = t.sibling;
  }
  function Mf(e, t) {
    var i = e.alternate, o = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (di(t, e), Ii(e), o & 4) {
          try {
            za(3, e, e.return), Tc(3, e);
          } catch (De) {
            Yt(e, e.return, De);
          }
          try {
            za(5, e, e.return);
          } catch (De) {
            Yt(e, e.return, De);
          }
        }
        break;
      case 1:
        di(t, e), Ii(e), o & 512 && i !== null && Wl(i, i.return);
        break;
      case 5:
        if (di(t, e), Ii(e), o & 512 && i !== null && Wl(i, i.return), e.flags & 32) {
          var u = e.stateNode;
          try {
            At(u, "");
          } catch (De) {
            Yt(e, e.return, De);
          }
        }
        if (o & 4 && (u = e.stateNode, u != null)) {
          var p = e.memoizedProps, A = i !== null ? i.memoizedProps : p, K = e.type, $ = e.updateQueue;
          if (e.updateQueue = null, $ !== null) try {
            K === "input" && p.type === "radio" && p.name != null && Dt(u, p), xe(K, A);
            var fe = xe(K, p);
            for (A = 0; A < $.length; A += 2) {
              var Se = $[A], we = $[A + 1];
              Se === "style" ? Ar(u, we) : Se === "dangerouslySetInnerHTML" ? Ln(u, we) : Se === "children" ? At(u, we) : h(u, Se, we, fe);
            }
            switch (K) {
              case "input":
                $e(u, p);
                break;
              case "textarea":
                Qt(u, p);
                break;
              case "select":
                var _e = u._wrapperState.wasMultiple;
                u._wrapperState.wasMultiple = !!p.multiple;
                var Me = p.value;
                Me != null ? _t(u, !!p.multiple, Me, !1) : _e !== !!p.multiple && (p.defaultValue != null ? _t(
                  u,
                  !!p.multiple,
                  p.defaultValue,
                  !0
                ) : _t(u, !!p.multiple, p.multiple ? [] : "", !1));
            }
            u[No] = p;
          } catch (De) {
            Yt(e, e.return, De);
          }
        }
        break;
      case 6:
        if (di(t, e), Ii(e), o & 4) {
          if (e.stateNode === null) throw Error(_(162));
          u = e.stateNode, p = e.memoizedProps;
          try {
            u.nodeValue = p;
          } catch (De) {
            Yt(e, e.return, De);
          }
        }
        break;
      case 3:
        if (di(t, e), Ii(e), o & 4 && i !== null && i.memoizedState.isDehydrated) try {
          Kn(t.containerInfo);
        } catch (De) {
          Yt(e, e.return, De);
        }
        break;
      case 4:
        di(t, e), Ii(e);
        break;
      case 13:
        di(t, e), Ii(e), u = e.child, u.flags & 8192 && (p = u.memoizedState !== null, u.stateNode.isHidden = p, !p || u.alternate !== null && u.alternate.memoizedState !== null || (Rd = Bt())), o & 4 && Ff(e);
        break;
      case 22:
        if (Se = i !== null && i.memoizedState !== null, e.mode & 1 ? (Jn = (fe = Jn) || Se, di(t, e), Jn = fe) : di(t, e), Ii(e), o & 8192) {
          if (fe = e.memoizedState !== null, (e.stateNode.isHidden = fe) && !Se && (e.mode & 1) !== 0) for (Ae = e, Se = e.child; Se !== null; ) {
            for (we = Ae = Se; Ae !== null; ) {
              switch (_e = Ae, Me = _e.child, _e.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  za(4, _e, _e.return);
                  break;
                case 1:
                  Wl(_e, _e.return);
                  var Ie = _e.stateNode;
                  if (typeof Ie.componentWillUnmount == "function") {
                    o = _e, i = _e.return;
                    try {
                      t = o, Ie.props = t.memoizedProps, Ie.state = t.memoizedState, Ie.componentWillUnmount();
                    } catch (De) {
                      Yt(o, i, De);
                    }
                  }
                  break;
                case 5:
                  Wl(_e, _e.return);
                  break;
                case 22:
                  if (_e.memoizedState !== null) {
                    Of(we);
                    continue;
                  }
              }
              Me !== null ? (Me.return = _e, Ae = Me) : Of(we);
            }
            Se = Se.sibling;
          }
          e: for (Se = null, we = e; ; ) {
            if (we.tag === 5) {
              if (Se === null) {
                Se = we;
                try {
                  u = we.stateNode, fe ? (p = u.style, typeof p.setProperty == "function" ? p.setProperty("display", "none", "important") : p.display = "none") : (K = we.stateNode, $ = we.memoizedProps.style, A = $ != null && $.hasOwnProperty("display") ? $.display : null, K.style.display = Di("display", A));
                } catch (De) {
                  Yt(e, e.return, De);
                }
              }
            } else if (we.tag === 6) {
              if (Se === null) try {
                we.stateNode.nodeValue = fe ? "" : we.memoizedProps;
              } catch (De) {
                Yt(e, e.return, De);
              }
            } else if ((we.tag !== 22 && we.tag !== 23 || we.memoizedState === null || we === e) && we.child !== null) {
              we.child.return = we, we = we.child;
              continue;
            }
            if (we === e) break e;
            for (; we.sibling === null; ) {
              if (we.return === null || we.return === e) break e;
              Se === we && (Se = null), we = we.return;
            }
            Se === we && (Se = null), we.sibling.return = we.return, we = we.sibling;
          }
        }
        break;
      case 19:
        di(t, e), Ii(e), o & 4 && Ff(e);
        break;
      case 21:
        break;
      default:
        di(
          t,
          e
        ), Ii(e);
    }
  }
  function Ii(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var i = e.return; i !== null; ) {
            if (Rf(i)) {
              var o = i;
              break e;
            }
            i = i.return;
          }
          throw Error(_(160));
        }
        switch (o.tag) {
          case 5:
            var u = o.stateNode;
            o.flags & 32 && (At(u, ""), o.flags &= -33);
            var p = Tf(e);
            kd(e, p, u);
            break;
          case 3:
          case 4:
            var A = o.stateNode.containerInfo, K = Tf(e);
            Cd(e, K, A);
            break;
          default:
            throw Error(_(161));
        }
      } catch ($) {
        Yt(e, e.return, $);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function n1(e, t, i) {
    Ae = e, Lf(e);
  }
  function Lf(e, t, i) {
    for (var o = (e.mode & 1) !== 0; Ae !== null; ) {
      var u = Ae, p = u.child;
      if (u.tag === 22 && o) {
        var A = u.memoizedState !== null || Rc;
        if (!A) {
          var K = u.alternate, $ = K !== null && K.memoizedState !== null || Jn;
          K = Rc;
          var fe = Jn;
          if (Rc = A, (Jn = $) && !fe) for (Ae = u; Ae !== null; ) A = Ae, $ = A.child, A.tag === 22 && A.memoizedState !== null ? If(u) : $ !== null ? ($.return = A, Ae = $) : If(u);
          for (; p !== null; ) Ae = p, Lf(p), p = p.sibling;
          Ae = u, Rc = K, Jn = fe;
        }
        Af(e);
      } else (u.subtreeFlags & 8772) !== 0 && p !== null ? (p.return = u, Ae = p) : Af(e);
    }
  }
  function Af(e) {
    for (; Ae !== null; ) {
      var t = Ae;
      if ((t.flags & 8772) !== 0) {
        var i = t.alternate;
        try {
          if ((t.flags & 8772) !== 0) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Jn || Tc(5, t);
              break;
            case 1:
              var o = t.stateNode;
              if (t.flags & 4 && !Jn) if (i === null) o.componentDidMount();
              else {
                var u = t.elementType === t.type ? i.memoizedProps : vn(t.type, i.memoizedProps);
                o.componentDidUpdate(u, i.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
              }
              var p = t.updateQueue;
              p !== null && zt(t, p, o);
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
                zt(t, A, i);
              }
              break;
            case 5:
              var K = t.stateNode;
              if (i === null && t.flags & 4) {
                i = K;
                var $ = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    $.autoFocus && i.focus();
                    break;
                  case "img":
                    $.src && (i.src = $.src);
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
                var fe = t.alternate;
                if (fe !== null) {
                  var Se = fe.memoizedState;
                  if (Se !== null) {
                    var we = Se.dehydrated;
                    we !== null && Kn(we);
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
              throw Error(_(163));
          }
          Jn || t.flags & 512 && xd(t);
        } catch (_e) {
          Yt(t, t.return, _e);
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
  function Of(e) {
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
  function If(e) {
    for (; Ae !== null; ) {
      var t = Ae;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var i = t.return;
            try {
              Tc(4, t);
            } catch ($) {
              Yt(t, i, $);
            }
            break;
          case 1:
            var o = t.stateNode;
            if (typeof o.componentDidMount == "function") {
              var u = t.return;
              try {
                o.componentDidMount();
              } catch ($) {
                Yt(t, u, $);
              }
            }
            var p = t.return;
            try {
              xd(t);
            } catch ($) {
              Yt(t, p, $);
            }
            break;
          case 5:
            var A = t.return;
            try {
              xd(t);
            } catch ($) {
              Yt(t, A, $);
            }
        }
      } catch ($) {
        Yt(t, t.return, $);
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
  var r1 = Math.ceil, Nc = T.ReactCurrentDispatcher, Ed = T.ReactCurrentOwner, Yr = T.ReactCurrentBatchConfig, ct = 0, Tn = null, fn = null, jn = 0, Mr = 0, ql = ii(0), _n = 0, Ga = null, Bo = 0, Fc = 0, Pd = 0, Ua = null, _r = null, Rd = 0, Kl = 1 / 0, ps = null, Mc = !1, Td = null, eo = null, Lc = !1, to = null, Ac = 0, Ba = 0, Nd = null, Oc = -1, Ic = 0;
  function cr() {
    return (ct & 6) !== 0 ? Bt() : Oc !== -1 ? Oc : Oc = Bt();
  }
  function no(e) {
    return (e.mode & 1) === 0 ? 1 : (ct & 2) !== 0 && jn !== 0 ? jn & -jn : Pa.transition !== null ? (Ic === 0 && (Ic = Jl()), Ic) : (e = at, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Qu(e.type)), e);
  }
  function fi(e, t, i, o) {
    if (50 < Ba) throw Ba = 0, Nd = null, Error(_(185));
    po(e, i, o), ((ct & 2) === 0 || e !== Tn) && (e === Tn && ((ct & 2) === 0 && (Fc |= i), _n === 4 && ro(e, jn)), Sr(e, o), i === 1 && ct === 0 && (t.mode & 1) === 0 && (Kl = Bt() + 500, Ds && Pi()));
  }
  function Sr(e, t) {
    var i = e.callbackNode;
    Wu(e, t);
    var o = Hi(e, e === Tn ? jn : 0);
    if (o === 0) i !== null && Hu(i), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = o & -o, e.callbackPriority !== t) {
      if (i != null && Hu(i), t === 1) e.tag === 0 ? si(zf.bind(null, e)) : Mo(zf.bind(null, e)), cc(function() {
        (ct & 6) === 0 && Pi();
      }), i = null;
      else {
        switch (go(o)) {
          case 1:
            i = Vi;
            break;
          case 4:
            i = bo;
            break;
          case 16:
            i = vs;
            break;
          case 536870912:
            i = Jo;
            break;
          default:
            i = vs;
        }
        i = qf(i, Df.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = i;
    }
  }
  function Df(e, t) {
    if (Oc = -1, Ic = 0, (ct & 6) !== 0) throw Error(_(327));
    var i = e.callbackNode;
    if (Yl() && e.callbackNode !== i) return null;
    var o = Hi(e, e === Tn ? jn : 0);
    if (o === 0) return null;
    if ((o & 30) !== 0 || (o & e.expiredLanes) !== 0 || t) t = Dc(e, o);
    else {
      t = o;
      var u = ct;
      ct |= 2;
      var p = Uf();
      (Tn !== e || jn !== t) && (ps = null, Kl = Bt() + 500, Ho(e, t));
      do
        try {
          o1();
          break;
        } catch (K) {
          Gf(e, K);
        }
      while (!0);
      Fl(), Nc.current = p, ct = u, fn !== null ? t = 0 : (Tn = null, jn = 0, t = _n);
    }
    if (t !== 0) {
      if (t === 2 && (u = _s(e), u !== 0 && (o = u, t = Fd(e, u))), t === 1) throw i = Ga, Ho(e, 0), ro(e, o), Sr(e, Bt()), i;
      if (t === 6) ro(e, o);
      else {
        if (u = e.current.alternate, (o & 30) === 0 && !i1(u) && (t = Dc(e, o), t === 2 && (p = _s(e), p !== 0 && (o = p, t = Fd(e, p))), t === 1)) throw i = Ga, Ho(e, 0), ro(e, o), Sr(e, Bt()), i;
        switch (e.finishedWork = u, e.finishedLanes = o, t) {
          case 0:
          case 1:
            throw Error(_(345));
          case 2:
            jo(e, _r, ps);
            break;
          case 3:
            if (ro(e, o), (o & 130023424) === o && (t = Rd + 500 - Bt(), 10 < t)) {
              if (Hi(e, 0) !== 0) break;
              if (u = e.suspendedLanes, (u & o) !== o) {
                cr(), e.pingedLanes |= e.suspendedLanes & u;
                break;
              }
              e.timeoutHandle = rr(jo.bind(null, e, _r, ps), t);
              break;
            }
            jo(e, _r, ps);
            break;
          case 4:
            if (ro(e, o), (o & 4194240) === o) break;
            for (t = e.eventTimes, u = -1; 0 < o; ) {
              var A = 31 - et(o);
              p = 1 << A, A = t[A], A > u && (u = A), o &= ~p;
            }
            if (o = u, o = Bt() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * r1(o / 1960)) - o, 10 < o) {
              e.timeoutHandle = rr(jo.bind(null, e, _r, ps), o);
              break;
            }
            jo(e, _r, ps);
            break;
          case 5:
            jo(e, _r, ps);
            break;
          default:
            throw Error(_(329));
        }
      }
    }
    return Sr(e, Bt()), e.callbackNode === i ? Df.bind(null, e) : null;
  }
  function Fd(e, t) {
    var i = Ua;
    return e.current.memoizedState.isDehydrated && (Ho(e, t).flags |= 256), e = Dc(e, t), e !== 2 && (t = _r, _r = i, t !== null && Md(t)), e;
  }
  function Md(e) {
    _r === null ? _r = e : _r.push.apply(_r, e);
  }
  function i1(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var i = t.updateQueue;
        if (i !== null && (i = i.stores, i !== null)) for (var o = 0; o < i.length; o++) {
          var u = i[o], p = u.getSnapshot;
          u = u.value;
          try {
            if (!Xn(p(), u)) return !1;
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
  function ro(e, t) {
    for (t &= ~Pd, t &= ~Fc, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var i = 31 - et(t), o = 1 << i;
      e[i] = -1, t &= ~o;
    }
  }
  function zf(e) {
    if ((ct & 6) !== 0) throw Error(_(327));
    Yl();
    var t = Hi(e, 0);
    if ((t & 1) === 0) return Sr(e, Bt()), null;
    var i = Dc(e, t);
    if (e.tag !== 0 && i === 2) {
      var o = _s(e);
      o !== 0 && (t = o, i = Fd(e, o));
    }
    if (i === 1) throw i = Ga, Ho(e, 0), ro(e, t), Sr(e, Bt()), i;
    if (i === 6) throw Error(_(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, jo(e, _r, ps), Sr(e, Bt()), null;
  }
  function Ld(e, t) {
    var i = ct;
    ct |= 1;
    try {
      return e(t);
    } finally {
      ct = i, ct === 0 && (Kl = Bt() + 500, Ds && Pi());
    }
  }
  function Vo(e) {
    to !== null && to.tag === 0 && (ct & 6) === 0 && Yl();
    var t = ct;
    ct |= 1;
    var i = Yr.transition, o = at;
    try {
      if (Yr.transition = null, at = 1, e) return e();
    } finally {
      at = o, Yr.transition = i, ct = t, (ct & 6) === 0 && Pi();
    }
  }
  function Ad() {
    Mr = ql.current, wt(ql);
  }
  function Ho(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var i = e.timeoutHandle;
    if (i !== -1 && (e.timeoutHandle = -1, xa(i)), fn !== null) for (i = fn.return; i !== null; ) {
      var o = i;
      switch (dn(o), o.tag) {
        case 1:
          o = o.type.childContextTypes, o != null && Is();
          break;
        case 3:
          Lt(), wt(xn), wt(yn), kn();
          break;
        case 5:
          li(o);
          break;
        case 4:
          Lt();
          break;
        case 13:
          wt(xt);
          break;
        case 19:
          wt(xt);
          break;
        case 10:
          Ml(o.type._context);
          break;
        case 22:
        case 23:
          Ad();
      }
      i = i.return;
    }
    if (Tn = e, fn = e = io(e.current, null), jn = Mr = t, _n = 0, Ga = null, Pd = Fc = Bo = 0, _r = Ua = null, Hr !== null) {
      for (t = 0; t < Hr.length; t++) if (i = Hr[t], o = i.interleaved, o !== null) {
        i.interleaved = null;
        var u = o.next, p = i.pending;
        if (p !== null) {
          var A = p.next;
          p.next = u, o.next = A;
        }
        i.pending = o;
      }
      Hr = null;
    }
    return e;
  }
  function Gf(e, t) {
    do {
      var i = fn;
      try {
        if (Fl(), Ws.current = Qs, Fr) {
          for (var o = pt.memoizedState; o !== null; ) {
            var u = o.queue;
            u !== null && (u.pending = null), o = o.next;
          }
          Fr = !1;
        }
        if (Bn = 0, qt = Gt = pt = null, Mi = !1, vr = 0, Ed.current = null, i === null || i.return === null) {
          _n = 1, Ga = t, fn = null;
          break;
        }
        e: {
          var p = e, A = i.return, K = i, $ = t;
          if (t = jn, K.flags |= 32768, $ !== null && typeof $ == "object" && typeof $.then == "function") {
            var fe = $, Se = K, we = Se.tag;
            if ((Se.mode & 1) === 0 && (we === 0 || we === 11 || we === 15)) {
              var _e = Se.alternate;
              _e ? (Se.updateQueue = _e.updateQueue, Se.memoizedState = _e.memoizedState, Se.lanes = _e.lanes) : (Se.updateQueue = null, Se.memoizedState = null);
            }
            var Me = s(A);
            if (Me !== null) {
              Me.flags &= -257, a(Me, A, K, p, t), Me.mode & 1 && r(p, fe, t), t = Me, $ = fe;
              var Ie = t.updateQueue;
              if (Ie === null) {
                var De = /* @__PURE__ */ new Set();
                De.add($), t.updateQueue = De;
              } else Ie.add($);
              break e;
            } else {
              if ((t & 1) === 0) {
                r(p, fe, t), Od();
                break e;
              }
              $ = Error(_(426));
            }
          } else if (ft && K.mode & 1) {
            var rn = s(A);
            if (rn !== null) {
              (rn.flags & 65536) === 0 && (rn.flags |= 256), a(rn, A, K, p, t), Ao(hs($, K));
              break e;
            }
          }
          p = $ = hs($, K), _n !== 4 && (_n = 2), Ua === null ? Ua = [p] : Ua.push(p), p = A;
          do {
            switch (p.tag) {
              case 3:
                p.flags |= 65536, t &= -t, p.lanes |= t;
                var ae = Pc(p, $, t);
                zo(p, ae);
                break e;
              case 1:
                K = $;
                var te = p.type, ue = p.stateNode;
                if ((p.flags & 128) === 0 && (typeof te.getDerivedStateFromError == "function" || ue !== null && typeof ue.componentDidCatch == "function" && (eo === null || !eo.has(ue)))) {
                  p.flags |= 65536, t &= -t, p.lanes |= t;
                  var ke = n(p, K, t);
                  zo(p, ke);
                  break e;
                }
            }
            p = p.return;
          } while (p !== null);
        }
        Vf(i);
      } catch (ze) {
        t = ze, fn === i && i !== null && (fn = i = i.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Uf() {
    var e = Nc.current;
    return Nc.current = Qs, e === null ? Qs : e;
  }
  function Od() {
    (_n === 0 || _n === 3 || _n === 2) && (_n = 4), Tn === null || (Bo & 268435455) === 0 && (Fc & 268435455) === 0 || ro(Tn, jn);
  }
  function Dc(e, t) {
    var i = ct;
    ct |= 2;
    var o = Uf();
    (Tn !== e || jn !== t) && (ps = null, Ho(e, t));
    do
      try {
        s1();
        break;
      } catch (u) {
        Gf(e, u);
      }
    while (!0);
    if (Fl(), ct = i, Nc.current = o, fn !== null) throw Error(_(261));
    return Tn = null, jn = 0, _n;
  }
  function s1() {
    for (; fn !== null; ) Bf(fn);
  }
  function o1() {
    for (; fn !== null && !ad(); ) Bf(fn);
  }
  function Bf(e) {
    var t = Wf(e.alternate, e, Mr);
    e.memoizedProps = e.pendingProps, t === null ? Vf(e) : fn = t, Ed.current = null;
  }
  function Vf(e) {
    var t = e;
    do {
      var i = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (i = Z0(i, t, Mr), i !== null) {
          fn = i;
          return;
        }
      } else {
        if (i = $0(i, t), i !== null) {
          i.flags &= 32767, fn = i;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          _n = 6, fn = null;
          return;
        }
      }
      if (t = t.sibling, t !== null) {
        fn = t;
        return;
      }
      fn = t = e;
    } while (t !== null);
    _n === 0 && (_n = 5);
  }
  function jo(e, t, i) {
    var o = at, u = Yr.transition;
    try {
      Yr.transition = null, at = 1, l1(e, t, i, o);
    } finally {
      Yr.transition = u, at = o;
    }
    return null;
  }
  function l1(e, t, i, o) {
    do
      Yl();
    while (to !== null);
    if ((ct & 6) !== 0) throw Error(_(327));
    i = e.finishedWork;
    var u = e.finishedLanes;
    if (i === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, i === e.current) throw Error(_(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var p = i.lanes | i.childLanes;
    if (dd(e, p), e === Tn && (fn = Tn = null, jn = 0), (i.subtreeFlags & 2064) === 0 && (i.flags & 2064) === 0 || Lc || (Lc = !0, qf(vs, function() {
      return Yl(), null;
    })), p = (i.flags & 15990) !== 0, (i.subtreeFlags & 15990) !== 0 || p) {
      p = Yr.transition, Yr.transition = null;
      var A = at;
      at = 1;
      var K = ct;
      ct |= 4, Ed.current = null, t1(e, i), Mf(i, e), Co(Sa), rl = !!_a, Sa = _a = null, e.current = i, n1(i), ud(), ct = K, at = A, Yr.transition = p;
    } else e.current = i;
    if (Lc && (Lc = !1, to = e, Ac = u), p = e.pendingLanes, p === 0 && (eo = null), Et(i.stateNode), Sr(e, Bt()), t !== null) for (o = e.onRecoverableError, i = 0; i < t.length; i++) u = t[i], o(u.value, { componentStack: u.stack, digest: u.digest });
    if (Mc) throw Mc = !1, e = Td, Td = null, e;
    return (Ac & 1) !== 0 && e.tag !== 0 && Yl(), p = e.pendingLanes, (p & 1) !== 0 ? e === Nd ? Ba++ : (Ba = 0, Nd = e) : Ba = 0, Pi(), null;
  }
  function Yl() {
    if (to !== null) {
      var e = go(Ac), t = Yr.transition, i = at;
      try {
        if (Yr.transition = null, at = 16 > e ? 16 : e, to === null) var o = !1;
        else {
          if (e = to, to = null, Ac = 0, (ct & 6) !== 0) throw Error(_(331));
          var u = ct;
          for (ct |= 4, Ae = e.current; Ae !== null; ) {
            var p = Ae, A = p.child;
            if ((Ae.flags & 16) !== 0) {
              var K = p.deletions;
              if (K !== null) {
                for (var $ = 0; $ < K.length; $++) {
                  var fe = K[$];
                  for (Ae = fe; Ae !== null; ) {
                    var Se = Ae;
                    switch (Se.tag) {
                      case 0:
                      case 11:
                      case 15:
                        za(8, Se, p);
                    }
                    var we = Se.child;
                    if (we !== null) we.return = Se, Ae = we;
                    else for (; Ae !== null; ) {
                      Se = Ae;
                      var _e = Se.sibling, Me = Se.return;
                      if (Pf(Se), Se === fe) {
                        Ae = null;
                        break;
                      }
                      if (_e !== null) {
                        _e.return = Me, Ae = _e;
                        break;
                      }
                      Ae = Me;
                    }
                  }
                }
                var Ie = p.alternate;
                if (Ie !== null) {
                  var De = Ie.child;
                  if (De !== null) {
                    Ie.child = null;
                    do {
                      var rn = De.sibling;
                      De.sibling = null, De = rn;
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
                  za(9, p, p.return);
              }
              var ae = p.sibling;
              if (ae !== null) {
                ae.return = p.return, Ae = ae;
                break e;
              }
              Ae = p.return;
            }
          }
          var te = e.current;
          for (Ae = te; Ae !== null; ) {
            A = Ae;
            var ue = A.child;
            if ((A.subtreeFlags & 2064) !== 0 && ue !== null) ue.return = A, Ae = ue;
            else e: for (A = te; Ae !== null; ) {
              if (K = Ae, (K.flags & 2048) !== 0) try {
                switch (K.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Tc(9, K);
                }
              } catch (ze) {
                Yt(K, K.return, ze);
              }
              if (K === A) {
                Ae = null;
                break e;
              }
              var ke = K.sibling;
              if (ke !== null) {
                ke.return = K.return, Ae = ke;
                break e;
              }
              Ae = K.return;
            }
          }
          if (ct = u, Pi(), hn && typeof hn.onPostCommitFiberRoot == "function") try {
            hn.onPostCommitFiberRoot(Jr, e);
          } catch {
          }
          o = !0;
        }
        return o;
      } finally {
        at = i, Yr.transition = t;
      }
    }
    return !1;
  }
  function Hf(e, t, i) {
    t = hs(i, t), t = Pc(e, t, 1), e = qr(e, t, 1), t = cr(), e !== null && (po(e, 1, t), Sr(e, t));
  }
  function Yt(e, t, i) {
    if (e.tag === 3) Hf(e, e, i);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        Hf(t, e, i);
        break;
      } else if (t.tag === 1) {
        var o = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (eo === null || !eo.has(o))) {
          e = hs(i, e), e = n(t, e, 1), t = qr(t, e, 1), e = cr(), t !== null && (po(t, 1, e), Sr(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function a1(e, t, i) {
    var o = e.pingCache;
    o !== null && o.delete(t), t = cr(), e.pingedLanes |= e.suspendedLanes & i, Tn === e && (jn & i) === i && (_n === 4 || _n === 3 && (jn & 130023424) === jn && 500 > Bt() - Rd ? Ho(e, 0) : Pd |= i), Sr(e, t);
  }
  function jf(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = Zr, Zr <<= 1, (Zr & 130023424) === 0 && (Zr = 4194304)));
    var i = cr();
    e = ar(e, t), e !== null && (po(e, t, i), Sr(e, i));
  }
  function u1(e) {
    var t = e.memoizedState, i = 0;
    t !== null && (i = t.retryLane), jf(e, i);
  }
  function c1(e, t) {
    var i = 0;
    switch (e.tag) {
      case 13:
        var o = e.stateNode, u = e.memoizedState;
        u !== null && (i = u.retryLane);
        break;
      case 19:
        o = e.stateNode;
        break;
      default:
        throw Error(_(314));
    }
    o !== null && o.delete(t), jf(e, i);
  }
  var Wf;
  Wf = function(e, t, i) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || xn.current) y = !0;
    else {
      if ((e.lanes & i) === 0 && (t.flags & 128) === 0) return y = !1, _d(e, t, i);
      y = (e.flags & 131072) !== 0;
    }
    else y = !1, ft && (t.flags & 1048576) !== 0 && gc(t, Ti, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var o = t.type;
        it(e, t), e = t.pendingProps;
        var u = is(t, yn.current);
        oi(t, i), u = qs(null, t, o, e, u, i);
        var p = Ks();
        return t.flags |= 1, typeof u == "object" && u !== null && typeof u.render == "function" && u.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Cn(o) ? (p = !0, ss(t)) : p = !1, t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, Do(t), u.updater = Js, t.stateNode = u, u._reactInternals = t, Hl(t, o, e, i), t = ht(null, t, o, !0, p, i)) : (t.tag = 0, ft && p && zs(t), V(null, t, u, i), t = t.child), t;
      case 16:
        o = t.elementType;
        e: {
          switch (it(e, t), e = t.pendingProps, u = o._init, o = u(o._payload), t.type = o, u = t.tag = f1(o), e = vn(o, e), u) {
            case 0:
              t = Ne(null, t, o, e, i);
              break e;
            case 1:
              t = Ct(null, t, o, e, i);
              break e;
            case 11:
              t = ie(null, t, o, e, i);
              break e;
            case 14:
              t = he(null, t, o, vn(o.type, e), i);
              break e;
          }
          throw Error(_(
            306,
            o,
            ""
          ));
        }
        return t;
      case 0:
        return o = t.type, u = t.pendingProps, u = t.elementType === o ? u : vn(o, u), Ne(e, t, o, u, i);
      case 1:
        return o = t.type, u = t.pendingProps, u = t.elementType === o ? u : vn(o, u), Ct(e, t, o, u, i);
      case 3:
        e: {
          if (Vn(t), e === null) throw Error(_(387));
          o = t.pendingProps, p = t.memoizedState, u = p.element, Al(e, t), Vs(t, o, null, i);
          var A = t.memoizedState;
          if (o = A.element, p.isDehydrated) if (p = { element: o, isDehydrated: !1, cache: A.cache, pendingSuspenseBoundaries: A.pendingSuspenseBoundaries, transitions: A.transitions }, t.updateQueue.baseState = p, t.memoizedState = p, t.flags & 256) {
            u = hs(Error(_(423)), t), t = Kr(e, t, o, i, u);
            break e;
          } else if (o !== u) {
            u = hs(Error(_(424)), t), t = Kr(e, t, o, i, u);
            break e;
          } else for (Pe = Gr(t.stateNode.containerInfo.firstChild), sr = t, ft = !0, or = null, i = yr(t, null, o, i), t.child = i; i; ) i.flags = i.flags & -3 | 4096, i = i.sibling;
          else {
            if (us(), o === u) {
              t = Rn(e, t, i);
              break e;
            }
            V(e, t, o, i);
          }
          t = t.child;
        }
        return t;
      case 5:
        return Hs(t), e === null && Gs(t), o = t.type, u = t.pendingProps, p = e !== null ? e.memoizedProps : null, A = u.children, wa(o, u) ? A = null : p !== null && wa(o, p) && (t.flags |= 32), Ke(e, t), V(e, t, A, i), t.child;
      case 6:
        return e === null && Gs(t), null;
      case 13:
        return pe(e, t, i);
      case 4:
        return Fi(t, t.stateNode.containerInfo), o = t.pendingProps, e === null ? t.child = cs(t, null, o, i) : V(e, t, o, i), t.child;
      case 11:
        return o = t.type, u = t.pendingProps, u = t.elementType === o ? u : vn(o, u), ie(e, t, o, u, i);
      case 7:
        return V(e, t, t.pendingProps, i), t.child;
      case 8:
        return V(e, t, t.pendingProps.children, i), t.child;
      case 12:
        return V(e, t, t.pendingProps.children, i), t.child;
      case 10:
        e: {
          if (o = t.type._context, u = t.pendingProps, p = t.memoizedProps, A = u.value, yt(Oo, o._currentValue), o._currentValue = A, p !== null) if (Xn(p.value, A)) {
            if (p.children === u.children && !xn.current) {
              t = Rn(e, t, i);
              break e;
            }
          } else for (p = t.child, p !== null && (p.return = t); p !== null; ) {
            var K = p.dependencies;
            if (K !== null) {
              A = p.child;
              for (var $ = K.firstContext; $ !== null; ) {
                if ($.context === o) {
                  if (p.tag === 1) {
                    $ = Wr(-1, i & -i), $.tag = 2;
                    var fe = p.updateQueue;
                    if (fe !== null) {
                      fe = fe.shared;
                      var Se = fe.pending;
                      Se === null ? $.next = $ : ($.next = Se.next, Se.next = $), fe.pending = $;
                    }
                  }
                  p.lanes |= i, $ = p.alternate, $ !== null && ($.lanes |= i), Ll(
                    p.return,
                    i,
                    t
                  ), K.lanes |= i;
                  break;
                }
                $ = $.next;
              }
            } else if (p.tag === 10) A = p.type === t.type ? null : p.child;
            else if (p.tag === 18) {
              if (A = p.return, A === null) throw Error(_(341));
              A.lanes |= i, K = A.alternate, K !== null && (K.lanes |= i), Ll(A, i, t), A = p.sibling;
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
          V(e, t, u.children, i), t = t.child;
        }
        return t;
      case 9:
        return u = t.type, o = t.pendingProps.children, oi(t, i), u = Un(u), o = o(u), t.flags |= 1, V(e, t, o, i), t.child;
      case 14:
        return o = t.type, u = vn(o, t.pendingProps), u = vn(o.type, u), he(e, t, o, u, i);
      case 15:
        return Ce(e, t, t.type, t.pendingProps, i);
      case 17:
        return o = t.type, u = t.pendingProps, u = t.elementType === o ? u : vn(o, u), it(e, t), t.tag = 1, Cn(o) ? (e = !0, ss(t)) : e = !1, oi(t, i), Ec(t, o, u), Hl(t, o, u, i), ht(null, t, o, !0, e, i);
      case 19:
        return nn(e, t, i);
      case 22:
        return Le(e, t, i);
    }
    throw Error(_(156, t.tag));
  };
  function qf(e, t) {
    return Vu(e, t);
  }
  function d1(e, t, i, o) {
    this.tag = e, this.key = i, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Xr(e, t, i, o) {
    return new d1(e, t, i, o);
  }
  function Id(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function f1(e) {
    if (typeof e == "function") return Id(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === Z) return 11;
      if (e === ee) return 14;
    }
    return 2;
  }
  function io(e, t) {
    var i = e.alternate;
    return i === null ? (i = Xr(e.tag, t, e.key, e.mode), i.elementType = e.elementType, i.type = e.type, i.stateNode = e.stateNode, i.alternate = e, e.alternate = i) : (i.pendingProps = t, i.type = e.type, i.flags = 0, i.subtreeFlags = 0, i.deletions = null), i.flags = e.flags & 14680064, i.childLanes = e.childLanes, i.lanes = e.lanes, i.child = e.child, i.memoizedProps = e.memoizedProps, i.memoizedState = e.memoizedState, i.updateQueue = e.updateQueue, t = e.dependencies, i.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, i.sibling = e.sibling, i.index = e.index, i.ref = e.ref, i;
  }
  function zc(e, t, i, o, u, p) {
    var A = 2;
    if (o = e, typeof e == "function") Id(e) && (A = 1);
    else if (typeof e == "string") A = 5;
    else e: switch (e) {
      case J:
        return Wo(i.children, u, p, t);
      case z:
        A = 8, u |= 8;
        break;
      case U:
        return e = Xr(12, i, t, u | 2), e.elementType = U, e.lanes = p, e;
      case ne:
        return e = Xr(13, i, t, u), e.elementType = ne, e.lanes = p, e;
      case re:
        return e = Xr(19, i, t, u), e.elementType = re, e.lanes = p, e;
      case P:
        return Gc(i, u, p, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case G:
            A = 10;
            break e;
          case Y:
            A = 9;
            break e;
          case Z:
            A = 11;
            break e;
          case ee:
            A = 14;
            break e;
          case Q:
            A = 16, o = null;
            break e;
        }
        throw Error(_(130, e == null ? e : typeof e, ""));
    }
    return t = Xr(A, i, t, u), t.elementType = e, t.type = o, t.lanes = p, t;
  }
  function Wo(e, t, i, o) {
    return e = Xr(7, e, o, t), e.lanes = i, e;
  }
  function Gc(e, t, i, o) {
    return e = Xr(22, e, o, t), e.elementType = P, e.lanes = i, e.stateNode = { isHidden: !1 }, e;
  }
  function Dd(e, t, i) {
    return e = Xr(6, e, null, t), e.lanes = i, e;
  }
  function zd(e, t, i) {
    return t = Xr(4, e.children !== null ? e.children : [], e.key, t), t.lanes = i, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function h1(e, t, i, o, u) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Zn(0), this.expirationTimes = Zn(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Zn(0), this.identifierPrefix = o, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null;
  }
  function Gd(e, t, i, o, u, p, A, K, $) {
    return e = new h1(e, t, i, K, $), t === 1 ? (t = 1, p === !0 && (t |= 8)) : t = 0, p = Xr(3, null, null, t), e.current = p, p.stateNode = e, p.memoizedState = { element: o, isDehydrated: i, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Do(p), e;
  }
  function p1(e, t, i) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: j, key: o == null ? null : "" + o, children: e, containerInfo: t, implementation: i };
  }
  function Kf(e) {
    if (!e) return Br;
    e = e._reactInternals;
    e: {
      if (Bi(e) !== e || e.tag !== 1) throw Error(_(170));
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
      throw Error(_(171));
    }
    if (e.tag === 1) {
      var i = e.type;
      if (Cn(i)) return El(e, i, t);
    }
    return t;
  }
  function Yf(e, t, i, o, u, p, A, K, $) {
    return e = Gd(i, o, !0, e, u, p, A, K, $), e.context = Kf(null), i = e.current, o = cr(), u = no(i), p = Wr(o, u), p.callback = t ?? null, qr(i, p, u), e.current.lanes = u, po(e, u, o), Sr(e, o), e;
  }
  function Uc(e, t, i, o) {
    var u = t.current, p = cr(), A = no(u);
    return i = Kf(i), t.context === null ? t.context = i : t.pendingContext = i, t = Wr(p, A), t.payload = { element: e }, o = o === void 0 ? null : o, o !== null && (t.callback = o), e = qr(u, t, A), e !== null && (fi(e, u, A, p), Ol(e, u, A)), A;
  }
  function Bc(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Xf(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var i = e.retryLane;
      e.retryLane = i !== 0 && i < t ? i : t;
    }
  }
  function Ud(e, t) {
    Xf(e, t), (e = e.alternate) && Xf(e, t);
  }
  function g1() {
    return null;
  }
  var Qf = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function Bd(e) {
    this._internalRoot = e;
  }
  Vc.prototype.render = Bd.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(_(409));
    Uc(e, t, null, null);
  }, Vc.prototype.unmount = Bd.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Vo(function() {
        Uc(null, e, null, null);
      }), t[Ur] = null;
    }
  };
  function Vc(e) {
    this._internalRoot = e;
  }
  Vc.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Ku();
      e = { blockedOn: null, target: e, priority: t };
      for (var i = 0; i < zr.length && t !== 0 && t < zr[i].priority; i++) ;
      zr.splice(i, 0, e), i === 0 && el(e);
    }
  };
  function Vd(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function Hc(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function bf() {
  }
  function m1(e, t, i, o, u) {
    if (u) {
      if (typeof o == "function") {
        var p = o;
        o = function() {
          var fe = Bc(A);
          p.call(fe);
        };
      }
      var A = Yf(t, o, e, 0, null, !1, !1, "", bf);
      return e._reactRootContainer = A, e[Ur] = A.current, $i(e.nodeType === 8 ? e.parentNode : e), Vo(), A;
    }
    for (; u = e.lastChild; ) e.removeChild(u);
    if (typeof o == "function") {
      var K = o;
      o = function() {
        var fe = Bc($);
        K.call(fe);
      };
    }
    var $ = Gd(e, 0, !1, null, null, !1, !1, "", bf);
    return e._reactRootContainer = $, e[Ur] = $.current, $i(e.nodeType === 8 ? e.parentNode : e), Vo(function() {
      Uc(t, $, i, o);
    }), $;
  }
  function jc(e, t, i, o, u) {
    var p = i._reactRootContainer;
    if (p) {
      var A = p;
      if (typeof u == "function") {
        var K = u;
        u = function() {
          var $ = Bc(A);
          K.call($);
        };
      }
      Uc(t, A, e, u);
    } else A = m1(i, t, e, u, o);
    return Bc(A);
  }
  Ss = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var i = ln(t.pendingLanes);
          i !== 0 && (Zl(t, i | 1), Sr(t, Bt()), (ct & 6) === 0 && (Kl = Bt() + 500, Pi()));
        }
        break;
      case 13:
        Vo(function() {
          var o = ar(e, 1);
          if (o !== null) {
            var u = cr();
            fi(o, e, 1, u);
          }
        }), Ud(e, 1);
    }
  }, ws = function(e) {
    if (e.tag === 13) {
      var t = ar(e, 134217728);
      if (t !== null) {
        var i = cr();
        fi(t, e, 134217728, i);
      }
      Ud(e, 134217728);
    }
  }, qu = function(e) {
    if (e.tag === 13) {
      var t = no(e), i = ar(e, t);
      if (i !== null) {
        var o = cr();
        fi(i, e, t, o);
      }
      Ud(e, t);
    }
  }, Ku = function() {
    return at;
  }, Zo = function(e, t) {
    var i = at;
    try {
      return at = e, t();
    } finally {
      at = i;
    }
  }, Qe = function(e, t, i) {
    switch (t) {
      case "input":
        if ($e(e, i), t = i.name, i.type === "radio" && t != null) {
          for (i = e; i.parentNode; ) i = i.parentNode;
          for (i = i.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < i.length; t++) {
            var o = i[t];
            if (o !== e && o.form === e.form) {
              var u = cn(o);
              if (!u) throw Error(_(90));
              Be(o), $e(o, u);
            }
          }
        }
        break;
      case "textarea":
        Qt(e, i);
        break;
      case "select":
        t = i.value, t != null && _t(e, !!i.multiple, t, !1);
    }
  }, An = Ld, Qr = Vo;
  var y1 = { usingClientEntryPoint: !1, Events: [Fo, $t, cn, Or, bt, Ld] }, Va = { findFiberByHostInstance: ki, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, v1 = { bundleType: Va.bundleType, version: Va.version, rendererPackageName: Va.rendererPackageName, rendererConfig: Va.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: T.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = Uu(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: Va.findFiberByHostInstance || g1, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Wc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Wc.isDisabled && Wc.supportsFiber) try {
      Jr = Wc.inject(v1), hn = Wc;
    } catch {
    }
  }
  return wr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = y1, wr.createPortal = function(e, t) {
    var i = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Vd(t)) throw Error(_(200));
    return p1(e, t, null, i);
  }, wr.createRoot = function(e, t) {
    if (!Vd(e)) throw Error(_(299));
    var i = !1, o = "", u = Qf;
    return t != null && (t.unstable_strictMode === !0 && (i = !0), t.identifierPrefix !== void 0 && (o = t.identifierPrefix), t.onRecoverableError !== void 0 && (u = t.onRecoverableError)), t = Gd(e, 1, !1, null, null, i, !1, o, u), e[Ur] = t.current, $i(e.nodeType === 8 ? e.parentNode : e), new Bd(t);
  }, wr.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(_(188)) : (e = Object.keys(e).join(","), Error(_(268, e)));
    return e = Uu(t), e = e === null ? null : e.stateNode, e;
  }, wr.flushSync = function(e) {
    return Vo(e);
  }, wr.hydrate = function(e, t, i) {
    if (!Hc(t)) throw Error(_(200));
    return jc(null, e, t, !0, i);
  }, wr.hydrateRoot = function(e, t, i) {
    if (!Vd(e)) throw Error(_(405));
    var o = i != null && i.hydratedSources || null, u = !1, p = "", A = Qf;
    if (i != null && (i.unstable_strictMode === !0 && (u = !0), i.identifierPrefix !== void 0 && (p = i.identifierPrefix), i.onRecoverableError !== void 0 && (A = i.onRecoverableError)), t = Yf(t, null, e, 1, i ?? null, u, !1, p, A), e[Ur] = t.current, $i(e), o) for (e = 0; e < o.length; e++) i = o[e], u = i._getVersion, u = u(i._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [i, u] : t.mutableSourceEagerHydrationData.push(
      i,
      u
    );
    return new Vc(t);
  }, wr.render = function(e, t, i) {
    if (!Hc(t)) throw Error(_(200));
    return jc(null, e, t, !1, i);
  }, wr.unmountComponentAtNode = function(e) {
    if (!Hc(e)) throw Error(_(40));
    return e._reactRootContainer ? (Vo(function() {
      jc(null, null, e, !1, function() {
        e._reactRootContainer = null, e[Ur] = null;
      });
    }), !0) : !1;
  }, wr.unstable_batchedUpdates = Ld, wr.unstable_renderSubtreeIntoContainer = function(e, t, i, o) {
    if (!Hc(i)) throw Error(_(200));
    if (e == null || e._reactInternals === void 0) throw Error(_(38));
    return jc(e, t, i, !1, o);
  }, wr.version = "18.3.1-next-f1338f8080-20240426", wr;
}
var sh;
function E1() {
  if (sh) return Wd.exports;
  sh = 1;
  function l() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
      } catch (d) {
        console.error(d);
      }
  }
  return l(), Wd.exports = k1(), Wd.exports;
}
var oh;
function P1() {
  if (oh) return qc;
  oh = 1;
  var l = E1();
  return qc.createRoot = l.createRoot, qc.hydrateRoot = l.hydrateRoot, qc;
}
var R1 = P1(), Zc = { exports: {} }, ja = {}, Yd = {}, Xd = {}, lh;
function Ze() {
  return lh || (lh = 1, (function(l) {
    Object.defineProperty(l, "__esModule", { value: !0 }), l._registerNode = l.Konva = l.glob = void 0;
    const d = Math.PI / 180;
    function _() {
      return typeof window < "u" && ({}.toString.call(window) === "[object Window]" || {}.toString.call(window) === "[object global]");
    }
    l.glob = typeof Jf < "u" ? Jf : typeof window < "u" ? window : typeof WorkerGlobalScope < "u" ? self : {}, l.Konva = {
      _global: l.glob,
      version: "9.3.22",
      isBrowser: _(),
      isUnminified: /param/.test((function(N) {
      }).toString()),
      dblClickWindow: 400,
      getAngle(N) {
        return l.Konva.angleDeg ? N * d : N;
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
        return l.Konva.DD.isDragging;
      },
      isTransforming() {
        var N;
        return (N = l.Konva.Transformer) === null || N === void 0 ? void 0 : N.isTransforming();
      },
      isDragReady() {
        return !!l.Konva.DD.node;
      },
      releaseCanvasOnDestroy: !0,
      document: l.glob.document,
      _injectGlobal(N) {
        l.glob.Konva = N;
      }
    };
    const L = (N) => {
      l.Konva[N.prototype.getClassName()] = N;
    };
    l._registerNode = L, l.Konva._injectGlobal(l.Konva);
  })(Xd)), Xd;
}
var Qd = {}, ah;
function Xt() {
  return ah || (ah = 1, (function(l) {
    Object.defineProperty(l, "__esModule", { value: !0 }), l.Util = l.Transform = void 0;
    const d = Ze();
    class _ {
      constructor(T = [1, 0, 0, 1, 0, 0]) {
        this.dirty = !1, this.m = T && T.slice() || [1, 0, 0, 1, 0, 0];
      }
      reset() {
        this.m[0] = 1, this.m[1] = 0, this.m[2] = 0, this.m[3] = 1, this.m[4] = 0, this.m[5] = 0;
      }
      copy() {
        return new _(this.m);
      }
      copyInto(T) {
        T.m[0] = this.m[0], T.m[1] = this.m[1], T.m[2] = this.m[2], T.m[3] = this.m[3], T.m[4] = this.m[4], T.m[5] = this.m[5];
      }
      point(T) {
        const I = this.m;
        return {
          x: I[0] * T.x + I[2] * T.y + I[4],
          y: I[1] * T.x + I[3] * T.y + I[5]
        };
      }
      translate(T, I) {
        return this.m[4] += this.m[0] * T + this.m[2] * I, this.m[5] += this.m[1] * T + this.m[3] * I, this;
      }
      scale(T, I) {
        return this.m[0] *= T, this.m[1] *= T, this.m[2] *= I, this.m[3] *= I, this;
      }
      rotate(T) {
        const I = Math.cos(T), j = Math.sin(T), J = this.m[0] * I + this.m[2] * j, z = this.m[1] * I + this.m[3] * j, U = this.m[0] * -j + this.m[2] * I, G = this.m[1] * -j + this.m[3] * I;
        return this.m[0] = J, this.m[1] = z, this.m[2] = U, this.m[3] = G, this;
      }
      getTranslation() {
        return {
          x: this.m[4],
          y: this.m[5]
        };
      }
      skew(T, I) {
        const j = this.m[0] + this.m[2] * I, J = this.m[1] + this.m[3] * I, z = this.m[2] + this.m[0] * T, U = this.m[3] + this.m[1] * T;
        return this.m[0] = j, this.m[1] = J, this.m[2] = z, this.m[3] = U, this;
      }
      multiply(T) {
        const I = this.m[0] * T.m[0] + this.m[2] * T.m[1], j = this.m[1] * T.m[0] + this.m[3] * T.m[1], J = this.m[0] * T.m[2] + this.m[2] * T.m[3], z = this.m[1] * T.m[2] + this.m[3] * T.m[3], U = this.m[0] * T.m[4] + this.m[2] * T.m[5] + this.m[4], G = this.m[1] * T.m[4] + this.m[3] * T.m[5] + this.m[5];
        return this.m[0] = I, this.m[1] = j, this.m[2] = J, this.m[3] = z, this.m[4] = U, this.m[5] = G, this;
      }
      invert() {
        const T = 1 / (this.m[0] * this.m[3] - this.m[1] * this.m[2]), I = this.m[3] * T, j = -this.m[1] * T, J = -this.m[2] * T, z = this.m[0] * T, U = T * (this.m[2] * this.m[5] - this.m[3] * this.m[4]), G = T * (this.m[1] * this.m[4] - this.m[0] * this.m[5]);
        return this.m[0] = I, this.m[1] = j, this.m[2] = J, this.m[3] = z, this.m[4] = U, this.m[5] = G, this;
      }
      getMatrix() {
        return this.m;
      }
      decompose() {
        const T = this.m[0], I = this.m[1], j = this.m[2], J = this.m[3], z = this.m[4], U = this.m[5], G = T * J - I * j, Y = {
          x: z,
          y: U,
          rotation: 0,
          scaleX: 0,
          scaleY: 0,
          skewX: 0,
          skewY: 0
        };
        if (T != 0 || I != 0) {
          const Z = Math.sqrt(T * T + I * I);
          Y.rotation = I > 0 ? Math.acos(T / Z) : -Math.acos(T / Z), Y.scaleX = Z, Y.scaleY = G / Z, Y.skewX = (T * j + I * J) / G, Y.skewY = 0;
        } else if (j != 0 || J != 0) {
          const Z = Math.sqrt(j * j + J * J);
          Y.rotation = Math.PI / 2 - (J > 0 ? Math.acos(-j / Z) : -Math.acos(j / Z)), Y.scaleX = G / Z, Y.scaleY = Z, Y.skewX = 0, Y.skewY = (T * j + I * J) / G;
        }
        return Y.rotation = l.Util._getRotation(Y.rotation), Y;
      }
    }
    l.Transform = _;
    const L = "[object Array]", N = "[object Number]", C = "[object String]", f = "[object Boolean]", m = Math.PI / 180, g = 180 / Math.PI, x = "#", k = "", F = "0", E = "Konva warning: ", S = "Konva error: ", w = "rgb(", R = {
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
    }, O = /rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)/;
    let H = [];
    const v = typeof requestAnimationFrame < "u" && requestAnimationFrame || function(h) {
      setTimeout(h, 60);
    };
    l.Util = {
      _isElement(h) {
        return !!(h && h.nodeType == 1);
      },
      _isFunction(h) {
        return !!(h && h.constructor && h.call && h.apply);
      },
      _isPlainObject(h) {
        return !!h && h.constructor === Object;
      },
      _isArray(h) {
        return Object.prototype.toString.call(h) === L;
      },
      _isNumber(h) {
        return Object.prototype.toString.call(h) === N && !isNaN(h) && isFinite(h);
      },
      _isString(h) {
        return Object.prototype.toString.call(h) === C;
      },
      _isBoolean(h) {
        return Object.prototype.toString.call(h) === f;
      },
      isObject(h) {
        return h instanceof Object;
      },
      isValidSelector(h) {
        if (typeof h != "string")
          return !1;
        const T = h[0];
        return T === "#" || T === "." || T === T.toUpperCase();
      },
      _sign(h) {
        return h === 0 || h > 0 ? 1 : -1;
      },
      requestAnimFrame(h) {
        H.push(h), H.length === 1 && v(function() {
          const T = H;
          H = [], T.forEach(function(I) {
            I();
          });
        });
      },
      createCanvasElement() {
        const h = document.createElement("canvas");
        try {
          h.style = h.style || {};
        } catch {
        }
        return h;
      },
      createImageElement() {
        return document.createElement("img");
      },
      _isInDocument(h) {
        for (; h = h.parentNode; )
          if (h == document)
            return !0;
        return !1;
      },
      _urlToImage(h, T) {
        const I = l.Util.createImageElement();
        I.onload = function() {
          T(I);
        }, I.src = h;
      },
      _rgbToHex(h, T, I) {
        return ((1 << 24) + (h << 16) + (T << 8) + I).toString(16).slice(1);
      },
      _hexToRgb(h) {
        h = h.replace(x, k);
        const T = parseInt(h, 16);
        return {
          r: T >> 16 & 255,
          g: T >> 8 & 255,
          b: T & 255
        };
      },
      getRandomColor() {
        let h = (Math.random() * 16777215 << 0).toString(16);
        for (; h.length < 6; )
          h = F + h;
        return x + h;
      },
      getRGB(h) {
        let T;
        return h in R ? (T = R[h], {
          r: T[0],
          g: T[1],
          b: T[2]
        }) : h[0] === x ? this._hexToRgb(h.substring(1)) : h.substr(0, 4) === w ? (T = O.exec(h.replace(/ /g, "")), {
          r: parseInt(T[1], 10),
          g: parseInt(T[2], 10),
          b: parseInt(T[3], 10)
        }) : {
          r: 0,
          g: 0,
          b: 0
        };
      },
      colorToRGBA(h) {
        return h = h || "black", l.Util._namedColorToRBA(h) || l.Util._hex3ColorToRGBA(h) || l.Util._hex4ColorToRGBA(h) || l.Util._hex6ColorToRGBA(h) || l.Util._hex8ColorToRGBA(h) || l.Util._rgbColorToRGBA(h) || l.Util._rgbaColorToRGBA(h) || l.Util._hslColorToRGBA(h);
      },
      _namedColorToRBA(h) {
        const T = R[h.toLowerCase()];
        return T ? {
          r: T[0],
          g: T[1],
          b: T[2],
          a: 1
        } : null;
      },
      _rgbColorToRGBA(h) {
        if (h.indexOf("rgb(") === 0) {
          h = h.match(/rgb\(([^)]+)\)/)[1];
          const T = h.split(/ *, */).map(Number);
          return {
            r: T[0],
            g: T[1],
            b: T[2],
            a: 1
          };
        }
      },
      _rgbaColorToRGBA(h) {
        if (h.indexOf("rgba(") === 0) {
          h = h.match(/rgba\(([^)]+)\)/)[1];
          const T = h.split(/ *, */).map((I, j) => I.slice(-1) === "%" ? j === 3 ? parseInt(I) / 100 : parseInt(I) / 100 * 255 : Number(I));
          return {
            r: T[0],
            g: T[1],
            b: T[2],
            a: T[3]
          };
        }
      },
      _hex8ColorToRGBA(h) {
        if (h[0] === "#" && h.length === 9)
          return {
            r: parseInt(h.slice(1, 3), 16),
            g: parseInt(h.slice(3, 5), 16),
            b: parseInt(h.slice(5, 7), 16),
            a: parseInt(h.slice(7, 9), 16) / 255
          };
      },
      _hex6ColorToRGBA(h) {
        if (h[0] === "#" && h.length === 7)
          return {
            r: parseInt(h.slice(1, 3), 16),
            g: parseInt(h.slice(3, 5), 16),
            b: parseInt(h.slice(5, 7), 16),
            a: 1
          };
      },
      _hex4ColorToRGBA(h) {
        if (h[0] === "#" && h.length === 5)
          return {
            r: parseInt(h[1] + h[1], 16),
            g: parseInt(h[2] + h[2], 16),
            b: parseInt(h[3] + h[3], 16),
            a: parseInt(h[4] + h[4], 16) / 255
          };
      },
      _hex3ColorToRGBA(h) {
        if (h[0] === "#" && h.length === 4)
          return {
            r: parseInt(h[1] + h[1], 16),
            g: parseInt(h[2] + h[2], 16),
            b: parseInt(h[3] + h[3], 16),
            a: 1
          };
      },
      _hslColorToRGBA(h) {
        if (/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.test(h)) {
          const [T, ...I] = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(h), j = Number(I[0]) / 360, J = Number(I[1]) / 100, z = Number(I[2]) / 100;
          let U, G, Y;
          if (J === 0)
            return Y = z * 255, {
              r: Math.round(Y),
              g: Math.round(Y),
              b: Math.round(Y),
              a: 1
            };
          z < 0.5 ? U = z * (1 + J) : U = z + J - z * J;
          const Z = 2 * z - U, ne = [0, 0, 0];
          for (let re = 0; re < 3; re++)
            G = j + 1 / 3 * -(re - 1), G < 0 && G++, G > 1 && G--, 6 * G < 1 ? Y = Z + (U - Z) * 6 * G : 2 * G < 1 ? Y = U : 3 * G < 2 ? Y = Z + (U - Z) * (2 / 3 - G) * 6 : Y = Z, ne[re] = Y * 255;
          return {
            r: Math.round(ne[0]),
            g: Math.round(ne[1]),
            b: Math.round(ne[2]),
            a: 1
          };
        }
      },
      haveIntersection(h, T) {
        return !(T.x > h.x + h.width || T.x + T.width < h.x || T.y > h.y + h.height || T.y + T.height < h.y);
      },
      cloneObject(h) {
        const T = {};
        for (const I in h)
          this._isPlainObject(h[I]) ? T[I] = this.cloneObject(h[I]) : this._isArray(h[I]) ? T[I] = this.cloneArray(h[I]) : T[I] = h[I];
        return T;
      },
      cloneArray(h) {
        return h.slice(0);
      },
      degToRad(h) {
        return h * m;
      },
      radToDeg(h) {
        return h * g;
      },
      _degToRad(h) {
        return l.Util.warn("Util._degToRad is removed. Please use public Util.degToRad instead."), l.Util.degToRad(h);
      },
      _radToDeg(h) {
        return l.Util.warn("Util._radToDeg is removed. Please use public Util.radToDeg instead."), l.Util.radToDeg(h);
      },
      _getRotation(h) {
        return d.Konva.angleDeg ? l.Util.radToDeg(h) : h;
      },
      _capitalize(h) {
        return h.charAt(0).toUpperCase() + h.slice(1);
      },
      throw(h) {
        throw new Error(S + h);
      },
      error(h) {
        console.error(S + h);
      },
      warn(h) {
        d.Konva.showWarnings && console.warn(E + h);
      },
      each(h, T) {
        for (const I in h)
          T(I, h[I]);
      },
      _inRange(h, T, I) {
        return T <= h && h < I;
      },
      _getProjectionToSegment(h, T, I, j, J, z) {
        let U, G, Y;
        const Z = (h - I) * (h - I) + (T - j) * (T - j);
        if (Z == 0)
          U = h, G = T, Y = (J - I) * (J - I) + (z - j) * (z - j);
        else {
          const ne = ((J - h) * (I - h) + (z - T) * (j - T)) / Z;
          ne < 0 ? (U = h, G = T, Y = (h - J) * (h - J) + (T - z) * (T - z)) : ne > 1 ? (U = I, G = j, Y = (I - J) * (I - J) + (j - z) * (j - z)) : (U = h + ne * (I - h), G = T + ne * (j - T), Y = (U - J) * (U - J) + (G - z) * (G - z));
        }
        return [U, G, Y];
      },
      _getProjectionToLine(h, T, I) {
        const j = l.Util.cloneObject(h);
        let J = Number.MAX_VALUE;
        return T.forEach(function(z, U) {
          if (!I && U === T.length - 1)
            return;
          const G = T[(U + 1) % T.length], Y = l.Util._getProjectionToSegment(z.x, z.y, G.x, G.y, h.x, h.y), Z = Y[0], ne = Y[1], re = Y[2];
          re < J && (j.x = Z, j.y = ne, J = re);
        }), j;
      },
      _prepareArrayForTween(h, T, I) {
        const j = [], J = [];
        if (h.length > T.length) {
          const U = T;
          T = h, h = U;
        }
        for (let U = 0; U < h.length; U += 2)
          j.push({
            x: h[U],
            y: h[U + 1]
          });
        for (let U = 0; U < T.length; U += 2)
          J.push({
            x: T[U],
            y: T[U + 1]
          });
        const z = [];
        return J.forEach(function(U) {
          const G = l.Util._getProjectionToLine(U, j, I);
          z.push(G.x), z.push(G.y);
        }), z;
      },
      _prepareToStringify(h) {
        let T;
        h.visitedByCircularReferenceRemoval = !0;
        for (const I in h)
          if (h.hasOwnProperty(I) && h[I] && typeof h[I] == "object") {
            if (T = Object.getOwnPropertyDescriptor(h, I), h[I].visitedByCircularReferenceRemoval || l.Util._isElement(h[I]))
              if (T.configurable)
                delete h[I];
              else
                return null;
            else if (l.Util._prepareToStringify(h[I]) === null)
              if (T.configurable)
                delete h[I];
              else
                return null;
          }
        return delete h.visitedByCircularReferenceRemoval, h;
      },
      _assign(h, T) {
        for (const I in T)
          h[I] = T[I];
        return h;
      },
      _getFirstPointerId(h) {
        return h.touches ? h.changedTouches[0].identifier : h.pointerId || 999;
      },
      releaseCanvas(...h) {
        d.Konva.releaseCanvasOnDestroy && h.forEach((T) => {
          T.width = 0, T.height = 0;
        });
      },
      drawRoundedRectPath(h, T, I, j) {
        let J = 0, z = 0, U = 0, G = 0;
        typeof j == "number" ? J = z = U = G = Math.min(j, T / 2, I / 2) : (J = Math.min(j[0] || 0, T / 2, I / 2), z = Math.min(j[1] || 0, T / 2, I / 2), G = Math.min(j[2] || 0, T / 2, I / 2), U = Math.min(j[3] || 0, T / 2, I / 2)), h.moveTo(J, 0), h.lineTo(T - z, 0), h.arc(T - z, z, z, Math.PI * 3 / 2, 0, !1), h.lineTo(T, I - G), h.arc(T - G, I - G, G, 0, Math.PI / 2, !1), h.lineTo(U, I), h.arc(U, I - U, U, Math.PI / 2, Math.PI, !1), h.lineTo(0, J), h.arc(J, J, J, Math.PI, Math.PI * 3 / 2, !1);
      }
    };
  })(Qd)), Qd;
}
var Wa = {}, gs = {}, ms = {}, uh;
function I0() {
  if (uh) return ms;
  uh = 1, Object.defineProperty(ms, "__esModule", { value: !0 }), ms.HitContext = ms.SceneContext = ms.Context = void 0;
  const l = Xt(), d = Ze();
  function _(H) {
    const v = [], h = H.length, T = l.Util;
    for (let I = 0; I < h; I++) {
      let j = H[I];
      T._isNumber(j) ? j = Math.round(j * 1e3) / 1e3 : T._isString(j) || (j = j + ""), v.push(j);
    }
    return v;
  }
  const L = ",", N = "(", C = ")", f = "([", m = "])", g = ";", x = "()", k = "=", F = [
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
  ], E = [
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
  ], S = 100;
  let w = class {
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
    getTrace(v, h) {
      let T = this.traceArr, I = T.length, j = "", J, z, U, G;
      for (J = 0; J < I; J++)
        z = T[J], U = z.method, U ? (G = z.args, j += U, v ? j += x : l.Util._isArray(G[0]) ? j += f + G.join(L) + m : (h && (G = G.map((Y) => typeof Y == "number" ? Math.floor(Y) : Y)), j += N + G.join(L) + C)) : (j += z.property, v || (j += k + z.val)), j += g;
      return j;
    }
    clearTrace() {
      this.traceArr = [];
    }
    _trace(v) {
      let h = this.traceArr, T;
      h.push(v), T = h.length, T >= S && h.shift();
    }
    reset() {
      const v = this.getCanvas().getPixelRatio();
      this.setTransform(1 * v, 0, 0, 1 * v, 0, 0);
    }
    getCanvas() {
      return this.canvas;
    }
    clear(v) {
      const h = this.getCanvas();
      v ? this.clearRect(v.x || 0, v.y || 0, v.width || 0, v.height || 0) : this.clearRect(0, 0, h.getWidth() / h.pixelRatio, h.getHeight() / h.pixelRatio);
    }
    _applyLineCap(v) {
      const h = v.attrs.lineCap;
      h && this.setAttr("lineCap", h);
    }
    _applyOpacity(v) {
      const h = v.getAbsoluteOpacity();
      h !== 1 && this.setAttr("globalAlpha", h);
    }
    _applyLineJoin(v) {
      const h = v.attrs.lineJoin;
      h && this.setAttr("lineJoin", h);
    }
    setAttr(v, h) {
      this._context[v] = h;
    }
    arc(v, h, T, I, j, J) {
      this._context.arc(v, h, T, I, j, J);
    }
    arcTo(v, h, T, I, j) {
      this._context.arcTo(v, h, T, I, j);
    }
    beginPath() {
      this._context.beginPath();
    }
    bezierCurveTo(v, h, T, I, j, J) {
      this._context.bezierCurveTo(v, h, T, I, j, J);
    }
    clearRect(v, h, T, I) {
      this._context.clearRect(v, h, T, I);
    }
    clip(...v) {
      this._context.clip.apply(this._context, v);
    }
    closePath() {
      this._context.closePath();
    }
    createImageData(v, h) {
      const T = arguments;
      if (T.length === 2)
        return this._context.createImageData(v, h);
      if (T.length === 1)
        return this._context.createImageData(v);
    }
    createLinearGradient(v, h, T, I) {
      return this._context.createLinearGradient(v, h, T, I);
    }
    createPattern(v, h) {
      return this._context.createPattern(v, h);
    }
    createRadialGradient(v, h, T, I, j, J) {
      return this._context.createRadialGradient(v, h, T, I, j, J);
    }
    drawImage(v, h, T, I, j, J, z, U, G) {
      const Y = arguments, Z = this._context;
      Y.length === 3 ? Z.drawImage(v, h, T) : Y.length === 5 ? Z.drawImage(v, h, T, I, j) : Y.length === 9 && Z.drawImage(v, h, T, I, j, J, z, U, G);
    }
    ellipse(v, h, T, I, j, J, z, U) {
      this._context.ellipse(v, h, T, I, j, J, z, U);
    }
    isPointInPath(v, h, T, I) {
      return T ? this._context.isPointInPath(T, v, h, I) : this._context.isPointInPath(v, h, I);
    }
    fill(...v) {
      this._context.fill.apply(this._context, v);
    }
    fillRect(v, h, T, I) {
      this._context.fillRect(v, h, T, I);
    }
    strokeRect(v, h, T, I) {
      this._context.strokeRect(v, h, T, I);
    }
    fillText(v, h, T, I) {
      I ? this._context.fillText(v, h, T, I) : this._context.fillText(v, h, T);
    }
    measureText(v) {
      return this._context.measureText(v);
    }
    getImageData(v, h, T, I) {
      return this._context.getImageData(v, h, T, I);
    }
    lineTo(v, h) {
      this._context.lineTo(v, h);
    }
    moveTo(v, h) {
      this._context.moveTo(v, h);
    }
    rect(v, h, T, I) {
      this._context.rect(v, h, T, I);
    }
    roundRect(v, h, T, I, j) {
      this._context.roundRect(v, h, T, I, j);
    }
    putImageData(v, h, T) {
      this._context.putImageData(v, h, T);
    }
    quadraticCurveTo(v, h, T, I) {
      this._context.quadraticCurveTo(v, h, T, I);
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
    scale(v, h) {
      this._context.scale(v, h);
    }
    setLineDash(v) {
      this._context.setLineDash ? this._context.setLineDash(v) : "mozDash" in this._context ? this._context.mozDash = v : "webkitLineDash" in this._context && (this._context.webkitLineDash = v);
    }
    getLineDash() {
      return this._context.getLineDash();
    }
    setTransform(v, h, T, I, j, J) {
      this._context.setTransform(v, h, T, I, j, J);
    }
    stroke(v) {
      v ? this._context.stroke(v) : this._context.stroke();
    }
    strokeText(v, h, T, I) {
      this._context.strokeText(v, h, T, I);
    }
    transform(v, h, T, I, j, J) {
      this._context.transform(v, h, T, I, j, J);
    }
    translate(v, h) {
      this._context.translate(v, h);
    }
    _enableTrace() {
      let v = this, h = F.length, T = this.setAttr, I, j;
      const J = function(z) {
        let U = v[z], G;
        v[z] = function() {
          return j = _(Array.prototype.slice.call(arguments, 0)), G = U.apply(v, arguments), v._trace({
            method: z,
            args: j
          }), G;
        };
      };
      for (I = 0; I < h; I++)
        J(F[I]);
      v.setAttr = function() {
        T.apply(v, arguments);
        const z = arguments[0];
        let U = arguments[1];
        (z === "shadowOffsetX" || z === "shadowOffsetY" || z === "shadowBlur") && (U = U / this.canvas.getPixelRatio()), v._trace({
          property: z,
          val: U
        });
      };
    }
    _applyGlobalCompositeOperation(v) {
      const h = v.attrs.globalCompositeOperation;
      !h || h === "source-over" || this.setAttr("globalCompositeOperation", h);
    }
  };
  ms.Context = w, E.forEach(function(H) {
    Object.defineProperty(w.prototype, H, {
      get() {
        return this._context[H];
      },
      set(v) {
        this._context[H] = v;
      }
    });
  });
  class R extends w {
    constructor(v, { willReadFrequently: h = !1 } = {}) {
      super(v), this._context = v._canvas.getContext("2d", {
        willReadFrequently: h
      });
    }
    _fillColor(v) {
      const h = v.fill();
      this.setAttr("fillStyle", h), v._fillFunc(this);
    }
    _fillPattern(v) {
      this.setAttr("fillStyle", v._getFillPattern()), v._fillFunc(this);
    }
    _fillLinearGradient(v) {
      const h = v._getLinearGradient();
      h && (this.setAttr("fillStyle", h), v._fillFunc(this));
    }
    _fillRadialGradient(v) {
      const h = v._getRadialGradient();
      h && (this.setAttr("fillStyle", h), v._fillFunc(this));
    }
    _fill(v) {
      const h = v.fill(), T = v.getFillPriority();
      if (h && T === "color") {
        this._fillColor(v);
        return;
      }
      const I = v.getFillPatternImage();
      if (I && T === "pattern") {
        this._fillPattern(v);
        return;
      }
      const j = v.getFillLinearGradientColorStops();
      if (j && T === "linear-gradient") {
        this._fillLinearGradient(v);
        return;
      }
      const J = v.getFillRadialGradientColorStops();
      if (J && T === "radial-gradient") {
        this._fillRadialGradient(v);
        return;
      }
      h ? this._fillColor(v) : I ? this._fillPattern(v) : j ? this._fillLinearGradient(v) : J && this._fillRadialGradient(v);
    }
    _strokeLinearGradient(v) {
      const h = v.getStrokeLinearGradientStartPoint(), T = v.getStrokeLinearGradientEndPoint(), I = v.getStrokeLinearGradientColorStops(), j = this.createLinearGradient(h.x, h.y, T.x, T.y);
      if (I) {
        for (let J = 0; J < I.length; J += 2)
          j.addColorStop(I[J], I[J + 1]);
        this.setAttr("strokeStyle", j);
      }
    }
    _stroke(v) {
      const h = v.dash(), T = v.getStrokeScaleEnabled();
      if (v.hasStroke()) {
        if (!T) {
          this.save();
          const j = this.getCanvas().getPixelRatio();
          this.setTransform(j, 0, 0, j, 0, 0);
        }
        this._applyLineCap(v), h && v.dashEnabled() && (this.setLineDash(h), this.setAttr("lineDashOffset", v.dashOffset())), this.setAttr("lineWidth", v.strokeWidth()), v.getShadowForStrokeEnabled() || this.setAttr("shadowColor", "rgba(0,0,0,0)"), v.getStrokeLinearGradientColorStops() ? this._strokeLinearGradient(v) : this.setAttr("strokeStyle", v.stroke()), v._strokeFunc(this), T || this.restore();
      }
    }
    _applyShadow(v) {
      var h, T, I;
      const j = (h = v.getShadowRGBA()) !== null && h !== void 0 ? h : "black", J = (T = v.getShadowBlur()) !== null && T !== void 0 ? T : 5, z = (I = v.getShadowOffset()) !== null && I !== void 0 ? I : {
        x: 0,
        y: 0
      }, U = v.getAbsoluteScale(), G = this.canvas.getPixelRatio(), Y = U.x * G, Z = U.y * G;
      this.setAttr("shadowColor", j), this.setAttr("shadowBlur", J * Math.min(Math.abs(Y), Math.abs(Z))), this.setAttr("shadowOffsetX", z.x * Y), this.setAttr("shadowOffsetY", z.y * Z);
    }
  }
  ms.SceneContext = R;
  class O extends w {
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
        const h = v.getStrokeScaleEnabled();
        if (!h) {
          this.save();
          const j = this.getCanvas().getPixelRatio();
          this.setTransform(j, 0, 0, j, 0, 0);
        }
        this._applyLineCap(v);
        const T = v.hitStrokeWidth(), I = T === "auto" ? v.strokeWidth() : T;
        this.setAttr("lineWidth", I), this.setAttr("strokeStyle", v.colorKey), v._strokeFuncHit(this), h || this.restore();
      }
    }
  }
  return ms.HitContext = O, ms;
}
var ch;
function td() {
  if (ch) return gs;
  ch = 1, Object.defineProperty(gs, "__esModule", { value: !0 }), gs.HitCanvas = gs.SceneCanvas = gs.Canvas = void 0;
  const l = Xt(), d = I0(), _ = Ze();
  let L;
  function N() {
    if (L)
      return L;
    const g = l.Util.createCanvasElement(), x = g.getContext("2d");
    return L = (function() {
      const k = _.Konva._global.devicePixelRatio || 1, F = x.webkitBackingStorePixelRatio || x.mozBackingStorePixelRatio || x.msBackingStorePixelRatio || x.oBackingStorePixelRatio || x.backingStorePixelRatio || 1;
      return k / F;
    })(), l.Util.releaseCanvas(g), L;
  }
  let C = class {
    constructor(x) {
      this.pixelRatio = 1, this.width = 0, this.height = 0, this.isCache = !1;
      const F = (x || {}).pixelRatio || _.Konva.pixelRatio || N();
      this.pixelRatio = F, this._canvas = l.Util.createCanvasElement(), this._canvas.style.padding = "0", this._canvas.style.margin = "0", this._canvas.style.border = "0", this._canvas.style.background = "transparent", this._canvas.style.position = "absolute", this._canvas.style.top = "0", this._canvas.style.left = "0";
    }
    getContext() {
      return this.context;
    }
    getPixelRatio() {
      return this.pixelRatio;
    }
    setPixelRatio(x) {
      const k = this.pixelRatio;
      this.pixelRatio = x, this.setSize(this.getWidth() / k, this.getHeight() / k);
    }
    setWidth(x) {
      this.width = this._canvas.width = x * this.pixelRatio, this._canvas.style.width = x + "px";
      const k = this.pixelRatio;
      this.getContext()._context.scale(k, k);
    }
    setHeight(x) {
      this.height = this._canvas.height = x * this.pixelRatio, this._canvas.style.height = x + "px";
      const k = this.pixelRatio;
      this.getContext()._context.scale(k, k);
    }
    getWidth() {
      return this.width;
    }
    getHeight() {
      return this.height;
    }
    setSize(x, k) {
      this.setWidth(x || 0), this.setHeight(k || 0);
    }
    toDataURL(x, k) {
      try {
        return this._canvas.toDataURL(x, k);
      } catch {
        try {
          return this._canvas.toDataURL();
        } catch (E) {
          return l.Util.error("Unable to get data URL. " + E.message + " For more info read https://konvajs.org/docs/posts/Tainted_Canvas.html."), "";
        }
      }
    }
  };
  gs.Canvas = C;
  class f extends C {
    constructor(x = { width: 0, height: 0, willReadFrequently: !1 }) {
      super(x), this.context = new d.SceneContext(this, {
        willReadFrequently: x.willReadFrequently
      }), this.setSize(x.width, x.height);
    }
  }
  gs.SceneCanvas = f;
  class m extends C {
    constructor(x = { width: 0, height: 0 }) {
      super(x), this.hitCanvas = !0, this.context = new d.HitContext(this), this.setSize(x.width, x.height);
    }
  }
  return gs.HitCanvas = m, gs;
}
var bd = {}, dh;
function pf() {
  return dh || (dh = 1, (function(l) {
    Object.defineProperty(l, "__esModule", { value: !0 }), l.DD = void 0;
    const d = Ze(), _ = Xt();
    l.DD = {
      get isDragging() {
        let L = !1;
        return l.DD._dragElements.forEach((N) => {
          N.dragStatus === "dragging" && (L = !0);
        }), L;
      },
      justDragged: !1,
      get node() {
        let L;
        return l.DD._dragElements.forEach((N) => {
          L = N.node;
        }), L;
      },
      _dragElements: /* @__PURE__ */ new Map(),
      _drag(L) {
        const N = [];
        l.DD._dragElements.forEach((C, f) => {
          const { node: m } = C, g = m.getStage();
          g.setPointersPositions(L), C.pointerId === void 0 && (C.pointerId = _.Util._getFirstPointerId(L));
          const x = g._changedPointerPositions.find((k) => k.id === C.pointerId);
          if (x) {
            if (C.dragStatus !== "dragging") {
              const k = m.dragDistance();
              if (Math.max(Math.abs(x.x - C.startPointerPos.x), Math.abs(x.y - C.startPointerPos.y)) < k || (m.startDrag({ evt: L }), !m.isDragging()))
                return;
            }
            m._setDragPosition(L, C), N.push(m);
          }
        }), N.forEach((C) => {
          C.fire("dragmove", {
            type: "dragmove",
            target: C,
            evt: L
          }, !0);
        });
      },
      _endDragBefore(L) {
        const N = [];
        l.DD._dragElements.forEach((C) => {
          const { node: f } = C, m = f.getStage();
          if (L && m.setPointersPositions(L), !m._changedPointerPositions.find((k) => k.id === C.pointerId))
            return;
          (C.dragStatus === "dragging" || C.dragStatus === "stopped") && (l.DD.justDragged = !0, d.Konva._mouseListenClick = !1, d.Konva._touchListenClick = !1, d.Konva._pointerListenClick = !1, C.dragStatus = "stopped");
          const x = C.node.getLayer() || C.node instanceof d.Konva.Stage && C.node;
          x && N.indexOf(x) === -1 && N.push(x);
        }), N.forEach((C) => {
          C.draw();
        });
      },
      _endDragAfter(L) {
        l.DD._dragElements.forEach((N, C) => {
          N.dragStatus === "stopped" && N.node.fire("dragend", {
            type: "dragend",
            target: N.node,
            evt: L
          }, !0), N.dragStatus !== "dragging" && l.DD._dragElements.delete(C);
        });
      }
    }, d.Konva.isBrowser && (window.addEventListener("mouseup", l.DD._endDragBefore, !0), window.addEventListener("touchend", l.DD._endDragBefore, !0), window.addEventListener("touchcancel", l.DD._endDragBefore, !0), window.addEventListener("mousemove", l.DD._drag), window.addEventListener("touchmove", l.DD._drag), window.addEventListener("mouseup", l.DD._endDragAfter, !1), window.addEventListener("touchend", l.DD._endDragAfter, !1), window.addEventListener("touchcancel", l.DD._endDragAfter, !1));
  })(bd)), bd;
}
var Jd = {}, xr = {}, fh;
function lt() {
  if (fh) return xr;
  fh = 1, Object.defineProperty(xr, "__esModule", { value: !0 }), xr.RGBComponent = L, xr.alphaComponent = N, xr.getNumberValidator = C, xr.getNumberOrArrayOfNumbersValidator = f, xr.getNumberOrAutoValidator = m, xr.getStringValidator = g, xr.getStringOrGradientValidator = x, xr.getFunctionValidator = k, xr.getNumberArrayValidator = F, xr.getBooleanValidator = E, xr.getComponentValidator = S;
  const l = Ze(), d = Xt();
  function _(w) {
    return d.Util._isString(w) ? '"' + w + '"' : Object.prototype.toString.call(w) === "[object Number]" || d.Util._isBoolean(w) ? w : Object.prototype.toString.call(w);
  }
  function L(w) {
    return w > 255 ? 255 : w < 0 ? 0 : Math.round(w);
  }
  function N(w) {
    return w > 1 ? 1 : w < 1e-4 ? 1e-4 : w;
  }
  function C() {
    if (l.Konva.isUnminified)
      return function(w, R) {
        return d.Util._isNumber(w) || d.Util.warn(_(w) + ' is a not valid value for "' + R + '" attribute. The value should be a number.'), w;
      };
  }
  function f(w) {
    if (l.Konva.isUnminified)
      return function(R, O) {
        let H = d.Util._isNumber(R), v = d.Util._isArray(R) && R.length == w;
        return !H && !v && d.Util.warn(_(R) + ' is a not valid value for "' + O + '" attribute. The value should be a number or Array<number>(' + w + ")"), R;
      };
  }
  function m() {
    if (l.Konva.isUnminified)
      return function(w, R) {
        return d.Util._isNumber(w) || w === "auto" || d.Util.warn(_(w) + ' is a not valid value for "' + R + '" attribute. The value should be a number or "auto".'), w;
      };
  }
  function g() {
    if (l.Konva.isUnminified)
      return function(w, R) {
        return d.Util._isString(w) || d.Util.warn(_(w) + ' is a not valid value for "' + R + '" attribute. The value should be a string.'), w;
      };
  }
  function x() {
    if (l.Konva.isUnminified)
      return function(w, R) {
        const O = d.Util._isString(w), H = Object.prototype.toString.call(w) === "[object CanvasGradient]" || w && w.addColorStop;
        return O || H || d.Util.warn(_(w) + ' is a not valid value for "' + R + '" attribute. The value should be a string or a native gradient.'), w;
      };
  }
  function k() {
    if (l.Konva.isUnminified)
      return function(w, R) {
        return d.Util._isFunction(w) || d.Util.warn(_(w) + ' is a not valid value for "' + R + '" attribute. The value should be a function.'), w;
      };
  }
  function F() {
    if (l.Konva.isUnminified)
      return function(w, R) {
        const O = Int8Array ? Object.getPrototypeOf(Int8Array) : null;
        return O && w instanceof O || (d.Util._isArray(w) ? w.forEach(function(H) {
          d.Util._isNumber(H) || d.Util.warn('"' + R + '" attribute has non numeric element ' + H + ". Make sure that all elements are numbers.");
        }) : d.Util.warn(_(w) + ' is a not valid value for "' + R + '" attribute. The value should be a array of numbers.')), w;
      };
  }
  function E() {
    if (l.Konva.isUnminified)
      return function(w, R) {
        return w === !0 || w === !1 || d.Util.warn(_(w) + ' is a not valid value for "' + R + '" attribute. The value should be a boolean.'), w;
      };
  }
  function S(w) {
    if (l.Konva.isUnminified)
      return function(R, O) {
        return R == null || d.Util.isObject(R) || d.Util.warn(_(R) + ' is a not valid value for "' + O + '" attribute. The value should be an object with properties ' + w), R;
      };
  }
  return xr;
}
var hh;
function st() {
  return hh || (hh = 1, (function(l) {
    Object.defineProperty(l, "__esModule", { value: !0 }), l.Factory = void 0;
    const d = Xt(), _ = lt(), L = "get", N = "set";
    l.Factory = {
      addGetterSetter(C, f, m, g, x) {
        l.Factory.addGetter(C, f, m), l.Factory.addSetter(C, f, g, x), l.Factory.addOverloadedGetterSetter(C, f);
      },
      addGetter(C, f, m) {
        const g = L + d.Util._capitalize(f);
        C.prototype[g] = C.prototype[g] || function() {
          const x = this.attrs[f];
          return x === void 0 ? m : x;
        };
      },
      addSetter(C, f, m, g) {
        const x = N + d.Util._capitalize(f);
        C.prototype[x] || l.Factory.overWriteSetter(C, f, m, g);
      },
      overWriteSetter(C, f, m, g) {
        const x = N + d.Util._capitalize(f);
        C.prototype[x] = function(k) {
          return m && k !== void 0 && k !== null && (k = m.call(this, k, f)), this._setAttr(f, k), g && g.call(this), this;
        };
      },
      addComponentsGetterSetter(C, f, m, g, x) {
        const k = m.length, F = d.Util._capitalize, E = L + F(f), S = N + F(f);
        C.prototype[E] = function() {
          const R = {};
          for (let O = 0; O < k; O++) {
            const H = m[O];
            R[H] = this.getAttr(f + F(H));
          }
          return R;
        };
        const w = (0, _.getComponentValidator)(m);
        C.prototype[S] = function(R) {
          const O = this.attrs[f];
          g && (R = g.call(this, R, f)), w && w.call(this, R, f);
          for (const H in R)
            R.hasOwnProperty(H) && this._setAttr(f + F(H), R[H]);
          return R || m.forEach((H) => {
            this._setAttr(f + F(H), void 0);
          }), this._fireChangeEvent(f, O, R), x && x.call(this), this;
        }, l.Factory.addOverloadedGetterSetter(C, f);
      },
      addOverloadedGetterSetter(C, f) {
        const m = d.Util._capitalize(f), g = N + m, x = L + m;
        C.prototype[f] = function() {
          return arguments.length ? (this[g](arguments[0]), this) : this[x]();
        };
      },
      addDeprecatedGetterSetter(C, f, m, g) {
        d.Util.error("Adding deprecated " + f);
        const x = L + d.Util._capitalize(f), k = f + " property is deprecated and will be removed soon. Look at Konva change log for more information.";
        C.prototype[x] = function() {
          d.Util.error(k);
          const F = this.attrs[f];
          return F === void 0 ? m : F;
        }, l.Factory.addSetter(C, f, g, function() {
          d.Util.error(k);
        }), l.Factory.addOverloadedGetterSetter(C, f);
      },
      backCompat(C, f) {
        d.Util.each(f, function(m, g) {
          const x = C.prototype[g], k = L + d.Util._capitalize(m), F = N + d.Util._capitalize(m);
          function E() {
            x.apply(this, arguments), d.Util.error('"' + m + '" method is deprecated and will be removed soon. Use ""' + g + '" instead.');
          }
          C.prototype[m] = E, C.prototype[k] = E, C.prototype[F] = E;
        });
      },
      afterSetFilter() {
        this._filterUpToDate = !1;
      }
    };
  })(Jd)), Jd;
}
var ph;
function sn() {
  if (ph) return Wa;
  ph = 1, Object.defineProperty(Wa, "__esModule", { value: !0 }), Wa.Node = void 0;
  const l = td(), d = pf(), _ = st(), L = Ze(), N = Xt(), C = lt(), f = "absoluteOpacity", m = "allEventListeners", g = "absoluteTransform", x = "absoluteScale", k = "canvas", F = "Change", E = "children", S = "konva", w = "listening", R = "mouseenter", O = "mouseleave", H = "pointerenter", v = "pointerleave", h = "touchenter", T = "touchleave", I = "set", j = "Shape", J = " ", z = "stage", U = "transform", G = "Stage", Y = "visible", Z = [
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
  ].join(J);
  let ne = 1, re = class uf {
    constructor(P) {
      this._id = ne++, this.eventListeners = {}, this.attrs = {}, this.index = 0, this._allEventListeners = null, this.parent = null, this._cache = /* @__PURE__ */ new Map(), this._attachedDepsListeners = /* @__PURE__ */ new Map(), this._lastPos = null, this._batchingTransformChange = !1, this._needClearTransformCache = !1, this._filterUpToDate = !1, this._isUnderCache = !1, this._dragEventId = null, this._shouldFireChangeEvents = !1, this.setAttrs(P), this._shouldFireChangeEvents = !0;
    }
    hasChildren() {
      return !1;
    }
    _clearCache(P) {
      (P === U || P === g) && this._cache.get(P) ? this._cache.get(P).dirty = !0 : P ? this._cache.delete(P) : this._cache.clear();
    }
    _getCache(P, D) {
      let W = this._cache.get(P);
      return (W === void 0 || (P === U || P === g) && W.dirty === !0) && (W = D.call(this), this._cache.set(P, W)), W;
    }
    _calculate(P, D, W) {
      if (!this._attachedDepsListeners.get(P)) {
        const B = D.map((M) => M + "Change.konva").join(J);
        this.on(B, () => {
          this._clearCache(P);
        }), this._attachedDepsListeners.set(P, !0);
      }
      return this._getCache(P, W);
    }
    _getCanvasCache() {
      return this._cache.get(k);
    }
    _clearSelfAndDescendantCache(P) {
      this._clearCache(P), P === g && this.fire("absoluteTransformChange");
    }
    clearCache() {
      if (this._cache.has(k)) {
        const { scene: P, filter: D, hit: W, buffer: B } = this._cache.get(k);
        N.Util.releaseCanvas(P, D, W, B), this._cache.delete(k);
      }
      return this._clearSelfAndDescendantCache(), this._requestDraw(), this;
    }
    cache(P) {
      const D = P || {};
      let W = {};
      (D.x === void 0 || D.y === void 0 || D.width === void 0 || D.height === void 0) && (W = this.getClientRect({
        skipTransform: !0,
        relativeTo: this.getParent() || void 0
      }));
      let B = Math.ceil(D.width || W.width), M = Math.ceil(D.height || W.height), X = D.pixelRatio, b = D.x === void 0 ? Math.floor(W.x) : D.x, ce = D.y === void 0 ? Math.floor(W.y) : D.y, me = D.offset || 0, oe = D.drawBorder || !1, q = D.hitCanvasPixelRatio || 1;
      if (!B || !M) {
        N.Util.error("Can not cache the node. Width or height of the node equals 0. Caching is skipped.");
        return;
      }
      const se = Math.abs(Math.round(W.x) - b) > 0.5 ? 1 : 0, ge = Math.abs(Math.round(W.y) - ce) > 0.5 ? 1 : 0;
      B += me * 2 + se, M += me * 2 + ge, b -= me, ce -= me;
      const ye = new l.SceneCanvas({
        pixelRatio: X,
        width: B,
        height: M
      }), Re = new l.SceneCanvas({
        pixelRatio: X,
        width: 0,
        height: 0,
        willReadFrequently: !0
      }), Be = new l.HitCanvas({
        pixelRatio: q,
        width: B,
        height: M
      }), Ge = ye.getContext(), rt = Be.getContext(), We = new l.SceneCanvas({
        width: ye.width / ye.pixelRatio + Math.abs(b),
        height: ye.height / ye.pixelRatio + Math.abs(ce),
        pixelRatio: ye.pixelRatio
      }), Dt = We.getContext();
      return Be.isCache = !0, ye.isCache = !0, this._cache.delete(k), this._filterUpToDate = !1, D.imageSmoothingEnabled === !1 && (ye.getContext()._context.imageSmoothingEnabled = !1, Re.getContext()._context.imageSmoothingEnabled = !1), Ge.save(), rt.save(), Dt.save(), Ge.translate(-b, -ce), rt.translate(-b, -ce), Dt.translate(-b, -ce), We.x = b, We.y = ce, this._isUnderCache = !0, this._clearSelfAndDescendantCache(f), this._clearSelfAndDescendantCache(x), this.drawScene(ye, this, We), this.drawHit(Be, this), this._isUnderCache = !1, Ge.restore(), rt.restore(), oe && (Ge.save(), Ge.beginPath(), Ge.rect(0, 0, B, M), Ge.closePath(), Ge.setAttr("strokeStyle", "red"), Ge.setAttr("lineWidth", 5), Ge.stroke(), Ge.restore()), this._cache.set(k, {
        scene: ye,
        filter: Re,
        hit: Be,
        buffer: We,
        x: b,
        y: ce
      }), this._requestDraw(), this;
    }
    isCached() {
      return this._cache.has(k);
    }
    getClientRect(P) {
      throw new Error('abstract "getClientRect" method call');
    }
    _transformedRect(P, D) {
      const W = [
        { x: P.x, y: P.y },
        { x: P.x + P.width, y: P.y },
        { x: P.x + P.width, y: P.y + P.height },
        { x: P.x, y: P.y + P.height }
      ];
      let B = 1 / 0, M = 1 / 0, X = -1 / 0, b = -1 / 0;
      const ce = this.getAbsoluteTransform(D);
      return W.forEach(function(me) {
        const oe = ce.point(me);
        B === void 0 && (B = X = oe.x, M = b = oe.y), B = Math.min(B, oe.x), M = Math.min(M, oe.y), X = Math.max(X, oe.x), b = Math.max(b, oe.y);
      }), {
        x: B,
        y: M,
        width: X - B,
        height: b - M
      };
    }
    _drawCachedSceneCanvas(P) {
      P.save(), P._applyOpacity(this), P._applyGlobalCompositeOperation(this);
      const D = this._getCanvasCache();
      P.translate(D.x, D.y);
      const W = this._getCachedSceneCanvas(), B = W.pixelRatio;
      P.drawImage(W._canvas, 0, 0, W.width / B, W.height / B), P.restore();
    }
    _drawCachedHitCanvas(P) {
      const D = this._getCanvasCache(), W = D.hit;
      P.save(), P.translate(D.x, D.y), P.drawImage(W._canvas, 0, 0, W.width / W.pixelRatio, W.height / W.pixelRatio), P.restore();
    }
    _getCachedSceneCanvas() {
      let P = this.filters(), D = this._getCanvasCache(), W = D.scene, B = D.filter, M = B.getContext(), X, b, ce, me;
      if (P) {
        if (!this._filterUpToDate) {
          const oe = W.pixelRatio;
          B.setSize(W.width / W.pixelRatio, W.height / W.pixelRatio);
          try {
            for (X = P.length, M.clear(), M.drawImage(W._canvas, 0, 0, W.getWidth() / oe, W.getHeight() / oe), b = M.getImageData(0, 0, B.getWidth(), B.getHeight()), ce = 0; ce < X; ce++) {
              if (me = P[ce], typeof me != "function") {
                N.Util.error("Filter should be type of function, but got " + typeof me + " instead. Please check correct filters");
                continue;
              }
              me.call(this, b), M.putImageData(b, 0, 0);
            }
          } catch (q) {
            N.Util.error("Unable to apply filter. " + q.message + " This post my help you https://konvajs.org/docs/posts/Tainted_Canvas.html.");
          }
          this._filterUpToDate = !0;
        }
        return B;
      }
      return W;
    }
    on(P, D) {
      if (this._cache && this._cache.delete(m), arguments.length === 3)
        return this._delegate.apply(this, arguments);
      const W = P.split(J);
      for (let B = 0; B < W.length; B++) {
        const X = W[B].split("."), b = X[0], ce = X[1] || "";
        this.eventListeners[b] || (this.eventListeners[b] = []), this.eventListeners[b].push({ name: ce, handler: D });
      }
      return this;
    }
    off(P, D) {
      let W = (P || "").split(J), B = W.length, M, X, b, ce, me, oe;
      if (this._cache && this._cache.delete(m), !P)
        for (X in this.eventListeners)
          this._off(X);
      for (M = 0; M < B; M++)
        if (b = W[M], ce = b.split("."), me = ce[0], oe = ce[1], me)
          this.eventListeners[me] && this._off(me, oe, D);
        else
          for (X in this.eventListeners)
            this._off(X, oe, D);
      return this;
    }
    dispatchEvent(P) {
      const D = {
        target: this,
        type: P.type,
        evt: P
      };
      return this.fire(P.type, D), this;
    }
    addEventListener(P, D) {
      return this.on(P, function(W) {
        D.call(this, W.evt);
      }), this;
    }
    removeEventListener(P) {
      return this.off(P), this;
    }
    _delegate(P, D, W) {
      const B = this;
      this.on(P, function(M) {
        const X = M.target.findAncestors(D, !0, B);
        for (let b = 0; b < X.length; b++)
          M = N.Util.cloneObject(M), M.currentTarget = X[b], W.call(X[b], M);
      });
    }
    remove() {
      return this.isDragging() && this.stopDrag(), d.DD._dragElements.delete(this._id), this._remove(), this;
    }
    _clearCaches() {
      this._clearSelfAndDescendantCache(g), this._clearSelfAndDescendantCache(f), this._clearSelfAndDescendantCache(x), this._clearSelfAndDescendantCache(z), this._clearSelfAndDescendantCache(Y), this._clearSelfAndDescendantCache(w);
    }
    _remove() {
      this._clearCaches();
      const P = this.getParent();
      P && P.children && (P.children.splice(this.index, 1), P._setChildrenIndices(), this.parent = null);
    }
    destroy() {
      return this.remove(), this.clearCache(), this;
    }
    getAttr(P) {
      const D = "get" + N.Util._capitalize(P);
      return N.Util._isFunction(this[D]) ? this[D]() : this.attrs[P];
    }
    getAncestors() {
      let P = this.getParent(), D = [];
      for (; P; )
        D.push(P), P = P.getParent();
      return D;
    }
    getAttrs() {
      return this.attrs || {};
    }
    setAttrs(P) {
      return this._batchTransformChanges(() => {
        let D, W;
        if (!P)
          return this;
        for (D in P)
          D !== E && (W = I + N.Util._capitalize(D), N.Util._isFunction(this[W]) ? this[W](P[D]) : this._setAttr(D, P[D]));
      }), this;
    }
    isListening() {
      return this._getCache(w, this._isListening);
    }
    _isListening(P) {
      if (!this.listening())
        return !1;
      const W = this.getParent();
      return W && W !== P && this !== P ? W._isListening(P) : !0;
    }
    isVisible() {
      return this._getCache(Y, this._isVisible);
    }
    _isVisible(P) {
      if (!this.visible())
        return !1;
      const W = this.getParent();
      return W && W !== P && this !== P ? W._isVisible(P) : !0;
    }
    shouldDrawHit(P, D = !1) {
      if (P)
        return this._isVisible(P) && this._isListening(P);
      const W = this.getLayer();
      let B = !1;
      d.DD._dragElements.forEach((X) => {
        X.dragStatus === "dragging" && (X.node.nodeType === "Stage" || X.node.getLayer() === W) && (B = !0);
      });
      const M = !D && !L.Konva.hitOnDragEnabled && (B || L.Konva.isTransforming());
      return this.isListening() && this.isVisible() && !M;
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
      let P = this.getDepth(), D = this, W = 0, B, M, X, b;
      function ce(oe) {
        for (B = [], M = oe.length, X = 0; X < M; X++)
          b = oe[X], W++, b.nodeType !== j && (B = B.concat(b.getChildren().slice())), b._id === D._id && (X = M);
        B.length > 0 && B[0].getDepth() <= P && ce(B);
      }
      const me = this.getStage();
      return D.nodeType !== G && me && ce(me.getChildren()), W;
    }
    getDepth() {
      let P = 0, D = this.parent;
      for (; D; )
        P++, D = D.parent;
      return P;
    }
    _batchTransformChanges(P) {
      this._batchingTransformChange = !0, P(), this._batchingTransformChange = !1, this._needClearTransformCache && (this._clearCache(U), this._clearSelfAndDescendantCache(g)), this._needClearTransformCache = !1;
    }
    setPosition(P) {
      return this._batchTransformChanges(() => {
        this.x(P.x), this.y(P.y);
      }), this;
    }
    getPosition() {
      return {
        x: this.x(),
        y: this.y()
      };
    }
    getRelativePointerPosition() {
      const P = this.getStage();
      if (!P)
        return null;
      const D = P.getPointerPosition();
      if (!D)
        return null;
      const W = this.getAbsoluteTransform().copy();
      return W.invert(), W.point(D);
    }
    getAbsolutePosition(P) {
      let D = !1, W = this.parent;
      for (; W; ) {
        if (W.isCached()) {
          D = !0;
          break;
        }
        W = W.parent;
      }
      D && !P && (P = !0);
      const B = this.getAbsoluteTransform(P).getMatrix(), M = new N.Transform(), X = this.offset();
      return M.m = B.slice(), M.translate(X.x, X.y), M.getTranslation();
    }
    setAbsolutePosition(P) {
      const { x: D, y: W, ...B } = this._clearTransform();
      this.attrs.x = D, this.attrs.y = W, this._clearCache(U);
      const M = this._getAbsoluteTransform().copy();
      return M.invert(), M.translate(P.x, P.y), P = {
        x: this.attrs.x + M.getTranslation().x,
        y: this.attrs.y + M.getTranslation().y
      }, this._setTransform(B), this.setPosition({ x: P.x, y: P.y }), this._clearCache(U), this._clearSelfAndDescendantCache(g), this;
    }
    _setTransform(P) {
      let D;
      for (D in P)
        this.attrs[D] = P[D];
    }
    _clearTransform() {
      const P = {
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
      return this.attrs.x = 0, this.attrs.y = 0, this.attrs.rotation = 0, this.attrs.scaleX = 1, this.attrs.scaleY = 1, this.attrs.offsetX = 0, this.attrs.offsetY = 0, this.attrs.skewX = 0, this.attrs.skewY = 0, P;
    }
    move(P) {
      let D = P.x, W = P.y, B = this.x(), M = this.y();
      return D !== void 0 && (B += D), W !== void 0 && (M += W), this.setPosition({ x: B, y: M }), this;
    }
    _eachAncestorReverse(P, D) {
      let W = [], B = this.getParent(), M, X;
      if (!(D && D._id === this._id)) {
        for (W.unshift(this); B && (!D || B._id !== D._id); )
          W.unshift(B), B = B.parent;
        for (M = W.length, X = 0; X < M; X++)
          P(W[X]);
      }
    }
    rotate(P) {
      return this.rotation(this.rotation() + P), this;
    }
    moveToTop() {
      if (!this.parent)
        return N.Util.warn("Node has no parent. moveToTop function is ignored."), !1;
      const P = this.index, D = this.parent.getChildren().length;
      return P < D - 1 ? (this.parent.children.splice(P, 1), this.parent.children.push(this), this.parent._setChildrenIndices(), !0) : !1;
    }
    moveUp() {
      if (!this.parent)
        return N.Util.warn("Node has no parent. moveUp function is ignored."), !1;
      const P = this.index, D = this.parent.getChildren().length;
      return P < D - 1 ? (this.parent.children.splice(P, 1), this.parent.children.splice(P + 1, 0, this), this.parent._setChildrenIndices(), !0) : !1;
    }
    moveDown() {
      if (!this.parent)
        return N.Util.warn("Node has no parent. moveDown function is ignored."), !1;
      const P = this.index;
      return P > 0 ? (this.parent.children.splice(P, 1), this.parent.children.splice(P - 1, 0, this), this.parent._setChildrenIndices(), !0) : !1;
    }
    moveToBottom() {
      if (!this.parent)
        return N.Util.warn("Node has no parent. moveToBottom function is ignored."), !1;
      const P = this.index;
      return P > 0 ? (this.parent.children.splice(P, 1), this.parent.children.unshift(this), this.parent._setChildrenIndices(), !0) : !1;
    }
    setZIndex(P) {
      if (!this.parent)
        return N.Util.warn("Node has no parent. zIndex parameter is ignored."), this;
      (P < 0 || P >= this.parent.children.length) && N.Util.warn("Unexpected value " + P + " for zIndex property. zIndex is just index of a node in children of its parent. Expected value is from 0 to " + (this.parent.children.length - 1) + ".");
      const D = this.index;
      return this.parent.children.splice(D, 1), this.parent.children.splice(P, 0, this), this.parent._setChildrenIndices(), this;
    }
    getAbsoluteOpacity() {
      return this._getCache(f, this._getAbsoluteOpacity);
    }
    _getAbsoluteOpacity() {
      let P = this.opacity();
      const D = this.getParent();
      return D && !D._isUnderCache && (P *= D.getAbsoluteOpacity()), P;
    }
    moveTo(P) {
      return this.getParent() !== P && (this._remove(), P.add(this)), this;
    }
    toObject() {
      let P = this.getAttrs(), D, W, B, M, X;
      const b = {
        attrs: {},
        className: this.getClassName()
      };
      for (D in P)
        W = P[D], X = N.Util.isObject(W) && !N.Util._isPlainObject(W) && !N.Util._isArray(W), !X && (B = typeof this[D] == "function" && this[D], delete P[D], M = B ? B.call(this) : null, P[D] = W, M !== W && (b.attrs[D] = W));
      return N.Util._prepareToStringify(b);
    }
    toJSON() {
      return JSON.stringify(this.toObject());
    }
    getParent() {
      return this.parent;
    }
    findAncestors(P, D, W) {
      const B = [];
      D && this._isMatch(P) && B.push(this);
      let M = this.parent;
      for (; M; ) {
        if (M === W)
          return B;
        M._isMatch(P) && B.push(M), M = M.parent;
      }
      return B;
    }
    isAncestorOf(P) {
      return !1;
    }
    findAncestor(P, D, W) {
      return this.findAncestors(P, D, W)[0];
    }
    _isMatch(P) {
      if (!P)
        return !1;
      if (typeof P == "function")
        return P(this);
      let D = P.replace(/ /g, "").split(","), W = D.length, B, M;
      for (B = 0; B < W; B++)
        if (M = D[B], N.Util.isValidSelector(M) || (N.Util.warn('Selector "' + M + '" is invalid. Allowed selectors examples are "#foo", ".bar" or "Group".'), N.Util.warn('If you have a custom shape with such className, please change it to start with upper letter like "Triangle".'), N.Util.warn("Konva is awesome, right?")), M.charAt(0) === "#") {
          if (this.id() === M.slice(1))
            return !0;
        } else if (M.charAt(0) === ".") {
          if (this.hasName(M.slice(1)))
            return !0;
        } else if (this.className === M || this.nodeType === M)
          return !0;
      return !1;
    }
    getLayer() {
      const P = this.getParent();
      return P ? P.getLayer() : null;
    }
    getStage() {
      return this._getCache(z, this._getStage);
    }
    _getStage() {
      const P = this.getParent();
      return P ? P.getStage() : null;
    }
    fire(P, D = {}, W) {
      return D.target = D.target || this, W ? this._fireAndBubble(P, D) : this._fire(P, D), this;
    }
    getAbsoluteTransform(P) {
      return P ? this._getAbsoluteTransform(P) : this._getCache(g, this._getAbsoluteTransform);
    }
    _getAbsoluteTransform(P) {
      let D;
      if (P)
        return D = new N.Transform(), this._eachAncestorReverse(function(W) {
          const B = W.transformsEnabled();
          B === "all" ? D.multiply(W.getTransform()) : B === "position" && D.translate(W.x() - W.offsetX(), W.y() - W.offsetY());
        }, P), D;
      {
        D = this._cache.get(g) || new N.Transform(), this.parent ? this.parent.getAbsoluteTransform().copyInto(D) : D.reset();
        const W = this.transformsEnabled();
        if (W === "all")
          D.multiply(this.getTransform());
        else if (W === "position") {
          const B = this.attrs.x || 0, M = this.attrs.y || 0, X = this.attrs.offsetX || 0, b = this.attrs.offsetY || 0;
          D.translate(B - X, M - b);
        }
        return D.dirty = !1, D;
      }
    }
    getAbsoluteScale(P) {
      let D = this;
      for (; D; )
        D._isUnderCache && (P = D), D = D.getParent();
      const B = this.getAbsoluteTransform(P).decompose();
      return {
        x: B.scaleX,
        y: B.scaleY
      };
    }
    getAbsoluteRotation() {
      return this.getAbsoluteTransform().decompose().rotation;
    }
    getTransform() {
      return this._getCache(U, this._getTransform);
    }
    _getTransform() {
      var P, D;
      const W = this._cache.get(U) || new N.Transform();
      W.reset();
      const B = this.x(), M = this.y(), X = L.Konva.getAngle(this.rotation()), b = (P = this.attrs.scaleX) !== null && P !== void 0 ? P : 1, ce = (D = this.attrs.scaleY) !== null && D !== void 0 ? D : 1, me = this.attrs.skewX || 0, oe = this.attrs.skewY || 0, q = this.attrs.offsetX || 0, se = this.attrs.offsetY || 0;
      return (B !== 0 || M !== 0) && W.translate(B, M), X !== 0 && W.rotate(X), (me !== 0 || oe !== 0) && W.skew(me, oe), (b !== 1 || ce !== 1) && W.scale(b, ce), (q !== 0 || se !== 0) && W.translate(-1 * q, -1 * se), W.dirty = !1, W;
    }
    clone(P) {
      let D = N.Util.cloneObject(this.attrs), W, B, M, X, b;
      for (W in P)
        D[W] = P[W];
      const ce = new this.constructor(D);
      for (W in this.eventListeners)
        for (B = this.eventListeners[W], M = B.length, X = 0; X < M; X++)
          b = B[X], b.name.indexOf(S) < 0 && (ce.eventListeners[W] || (ce.eventListeners[W] = []), ce.eventListeners[W].push(b));
      return ce;
    }
    _toKonvaCanvas(P) {
      P = P || {};
      const D = this.getClientRect(), W = this.getStage(), B = P.x !== void 0 ? P.x : Math.floor(D.x), M = P.y !== void 0 ? P.y : Math.floor(D.y), X = P.pixelRatio || 1, b = new l.SceneCanvas({
        width: P.width || Math.ceil(D.width) || (W ? W.width() : 0),
        height: P.height || Math.ceil(D.height) || (W ? W.height() : 0),
        pixelRatio: X
      }), ce = b.getContext(), me = new l.SceneCanvas({
        width: b.width / b.pixelRatio + Math.abs(B),
        height: b.height / b.pixelRatio + Math.abs(M),
        pixelRatio: b.pixelRatio
      });
      return P.imageSmoothingEnabled === !1 && (ce._context.imageSmoothingEnabled = !1), ce.save(), (B || M) && ce.translate(-1 * B, -1 * M), this.drawScene(b, void 0, me), ce.restore(), b;
    }
    toCanvas(P) {
      return this._toKonvaCanvas(P)._canvas;
    }
    toDataURL(P) {
      P = P || {};
      const D = P.mimeType || null, W = P.quality || null, B = this._toKonvaCanvas(P).toDataURL(D, W);
      return P.callback && P.callback(B), B;
    }
    toImage(P) {
      return new Promise((D, W) => {
        try {
          const B = P == null ? void 0 : P.callback;
          B && delete P.callback, N.Util._urlToImage(this.toDataURL(P), function(M) {
            D(M), B == null || B(M);
          });
        } catch (B) {
          W(B);
        }
      });
    }
    toBlob(P) {
      return new Promise((D, W) => {
        try {
          const B = P == null ? void 0 : P.callback;
          B && delete P.callback, this.toCanvas(P).toBlob((M) => {
            D(M), B == null || B(M);
          }, P == null ? void 0 : P.mimeType, P == null ? void 0 : P.quality);
        } catch (B) {
          W(B);
        }
      });
    }
    setSize(P) {
      return this.width(P.width), this.height(P.height), this;
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
      return this.attrs.dragDistance !== void 0 ? this.attrs.dragDistance : this.parent ? this.parent.getDragDistance() : L.Konva.dragDistance;
    }
    _off(P, D, W) {
      let B = this.eventListeners[P], M, X, b;
      for (M = 0; M < B.length; M++)
        if (X = B[M].name, b = B[M].handler, (X !== "konva" || D === "konva") && (!D || X === D) && (!W || W === b)) {
          if (B.splice(M, 1), B.length === 0) {
            delete this.eventListeners[P];
            break;
          }
          M--;
        }
    }
    _fireChangeEvent(P, D, W) {
      this._fire(P + F, {
        oldVal: D,
        newVal: W
      });
    }
    addName(P) {
      if (!this.hasName(P)) {
        const D = this.name(), W = D ? D + " " + P : P;
        this.name(W);
      }
      return this;
    }
    hasName(P) {
      if (!P)
        return !1;
      const D = this.name();
      return D ? (D || "").split(/\s/g).indexOf(P) !== -1 : !1;
    }
    removeName(P) {
      const D = (this.name() || "").split(/\s/g), W = D.indexOf(P);
      return W !== -1 && (D.splice(W, 1), this.name(D.join(" "))), this;
    }
    setAttr(P, D) {
      const W = this[I + N.Util._capitalize(P)];
      return N.Util._isFunction(W) ? W.call(this, D) : this._setAttr(P, D), this;
    }
    _requestDraw() {
      if (L.Konva.autoDrawEnabled) {
        const P = this.getLayer() || this.getStage();
        P == null || P.batchDraw();
      }
    }
    _setAttr(P, D) {
      const W = this.attrs[P];
      W === D && !N.Util.isObject(D) || (D == null ? delete this.attrs[P] : this.attrs[P] = D, this._shouldFireChangeEvents && this._fireChangeEvent(P, W, D), this._requestDraw());
    }
    _setComponentAttr(P, D, W) {
      let B;
      W !== void 0 && (B = this.attrs[P], B || (this.attrs[P] = this.getAttr(P)), this.attrs[P][D] = W, this._fireChangeEvent(P, B, W));
    }
    _fireAndBubble(P, D, W) {
      D && this.nodeType === j && (D.target = this);
      const B = [
        R,
        O,
        H,
        v,
        h,
        T
      ];
      if (!(B.indexOf(P) !== -1 && (W && (this === W || this.isAncestorOf && this.isAncestorOf(W)) || this.nodeType === "Stage" && !W))) {
        this._fire(P, D);
        const X = B.indexOf(P) !== -1 && W && W.isAncestorOf && W.isAncestorOf(this) && !W.isAncestorOf(this.parent);
        (D && !D.cancelBubble || !D) && this.parent && this.parent.isListening() && !X && (W && W.parent ? this._fireAndBubble.call(this.parent, P, D, W) : this._fireAndBubble.call(this.parent, P, D));
      }
    }
    _getProtoListeners(P) {
      var D, W, B;
      const M = (D = this._cache.get(m)) !== null && D !== void 0 ? D : {};
      let X = M == null ? void 0 : M[P];
      if (X === void 0) {
        X = [];
        let b = Object.getPrototypeOf(this);
        for (; b; ) {
          const ce = (B = (W = b.eventListeners) === null || W === void 0 ? void 0 : W[P]) !== null && B !== void 0 ? B : [];
          X.push(...ce), b = Object.getPrototypeOf(b);
        }
        M[P] = X, this._cache.set(m, M);
      }
      return X;
    }
    _fire(P, D) {
      D = D || {}, D.currentTarget = this, D.type = P;
      const W = this._getProtoListeners(P);
      if (W)
        for (let M = 0; M < W.length; M++)
          W[M].handler.call(this, D);
      const B = this.eventListeners[P];
      if (B)
        for (let M = 0; M < B.length; M++)
          B[M].handler.call(this, D);
    }
    draw() {
      return this.drawScene(), this.drawHit(), this;
    }
    _createDragElement(P) {
      const D = P ? P.pointerId : void 0, W = this.getStage(), B = this.getAbsolutePosition();
      if (!W)
        return;
      const M = W._getPointerById(D) || W._changedPointerPositions[0] || B;
      d.DD._dragElements.set(this._id, {
        node: this,
        startPointerPos: M,
        offset: {
          x: M.x - B.x,
          y: M.y - B.y
        },
        dragStatus: "ready",
        pointerId: D
      });
    }
    startDrag(P, D = !0) {
      d.DD._dragElements.has(this._id) || this._createDragElement(P);
      const W = d.DD._dragElements.get(this._id);
      W.dragStatus = "dragging", this.fire("dragstart", {
        type: "dragstart",
        target: this,
        evt: P && P.evt
      }, D);
    }
    _setDragPosition(P, D) {
      const W = this.getStage()._getPointerById(D.pointerId);
      if (!W)
        return;
      let B = {
        x: W.x - D.offset.x,
        y: W.y - D.offset.y
      };
      const M = this.dragBoundFunc();
      if (M !== void 0) {
        const X = M.call(this, B, P);
        X ? B = X : N.Util.warn("dragBoundFunc did not return any value. That is unexpected behavior. You must return new absolute position from dragBoundFunc.");
      }
      (!this._lastPos || this._lastPos.x !== B.x || this._lastPos.y !== B.y) && (this.setAbsolutePosition(B), this._requestDraw()), this._lastPos = B;
    }
    stopDrag(P) {
      const D = d.DD._dragElements.get(this._id);
      D && (D.dragStatus = "stopped"), d.DD._endDragBefore(P), d.DD._endDragAfter(P);
    }
    setDraggable(P) {
      this._setAttr("draggable", P), this._dragChange();
    }
    isDragging() {
      const P = d.DD._dragElements.get(this._id);
      return P ? P.dragStatus === "dragging" : !1;
    }
    _listenDrag() {
      this._dragCleanup(), this.on("mousedown.konva touchstart.konva", function(P) {
        if (!(!(P.evt.button !== void 0) || L.Konva.dragButtons.indexOf(P.evt.button) >= 0) || this.isDragging())
          return;
        let B = !1;
        d.DD._dragElements.forEach((M) => {
          this.isAncestorOf(M.node) && (B = !0);
        }), B || this._createDragElement(P);
      });
    }
    _dragChange() {
      if (this.attrs.draggable)
        this._listenDrag();
      else {
        if (this._dragCleanup(), !this.getStage())
          return;
        const D = d.DD._dragElements.get(this._id), W = D && D.dragStatus === "dragging", B = D && D.dragStatus === "ready";
        W ? this.stopDrag() : B && d.DD._dragElements.delete(this._id);
      }
    }
    _dragCleanup() {
      this.off("mousedown.konva"), this.off("touchstart.konva");
    }
    isClientRectOnScreen(P = { x: 0, y: 0 }) {
      const D = this.getStage();
      if (!D)
        return !1;
      const W = {
        x: -P.x,
        y: -P.y,
        width: D.width() + 2 * P.x,
        height: D.height() + 2 * P.y
      };
      return N.Util.haveIntersection(W, this.getClientRect());
    }
    static create(P, D) {
      return N.Util._isString(P) && (P = JSON.parse(P)), this._createNode(P, D);
    }
    static _createNode(P, D) {
      let W = uf.prototype.getClassName.call(P), B = P.children, M, X, b;
      D && (P.attrs.container = D), L.Konva[W] || (N.Util.warn('Can not find a node with class name "' + W + '". Fallback to "Shape".'), W = "Shape");
      const ce = L.Konva[W];
      if (M = new ce(P.attrs), B)
        for (X = B.length, b = 0; b < X; b++)
          M.add(uf._createNode(B[b]));
      return M;
    }
  };
  Wa.Node = re, re.prototype.nodeType = "Node", re.prototype._attrsAffectingSize = [], re.prototype.eventListeners = {}, re.prototype.on.call(re.prototype, Z, function() {
    if (this._batchingTransformChange) {
      this._needClearTransformCache = !0;
      return;
    }
    this._clearCache(U), this._clearSelfAndDescendantCache(g);
  }), re.prototype.on.call(re.prototype, "visibleChange.konva", function() {
    this._clearSelfAndDescendantCache(Y);
  }), re.prototype.on.call(re.prototype, "listeningChange.konva", function() {
    this._clearSelfAndDescendantCache(w);
  }), re.prototype.on.call(re.prototype, "opacityChange.konva", function() {
    this._clearSelfAndDescendantCache(f);
  });
  const ee = _.Factory.addGetterSetter;
  return ee(re, "zIndex"), ee(re, "absolutePosition"), ee(re, "position"), ee(re, "x", 0, (0, C.getNumberValidator)()), ee(re, "y", 0, (0, C.getNumberValidator)()), ee(re, "globalCompositeOperation", "source-over", (0, C.getStringValidator)()), ee(re, "opacity", 1, (0, C.getNumberValidator)()), ee(re, "name", "", (0, C.getStringValidator)()), ee(re, "id", "", (0, C.getStringValidator)()), ee(re, "rotation", 0, (0, C.getNumberValidator)()), _.Factory.addComponentsGetterSetter(re, "scale", ["x", "y"]), ee(re, "scaleX", 1, (0, C.getNumberValidator)()), ee(re, "scaleY", 1, (0, C.getNumberValidator)()), _.Factory.addComponentsGetterSetter(re, "skew", ["x", "y"]), ee(re, "skewX", 0, (0, C.getNumberValidator)()), ee(re, "skewY", 0, (0, C.getNumberValidator)()), _.Factory.addComponentsGetterSetter(re, "offset", ["x", "y"]), ee(re, "offsetX", 0, (0, C.getNumberValidator)()), ee(re, "offsetY", 0, (0, C.getNumberValidator)()), ee(re, "dragDistance", void 0, (0, C.getNumberValidator)()), ee(re, "width", 0, (0, C.getNumberValidator)()), ee(re, "height", 0, (0, C.getNumberValidator)()), ee(re, "listening", !0, (0, C.getBooleanValidator)()), ee(re, "preventDefault", !0, (0, C.getBooleanValidator)()), ee(re, "filters", void 0, function(Q) {
    return this._filterUpToDate = !1, Q;
  }), ee(re, "visible", !0, (0, C.getBooleanValidator)()), ee(re, "transformsEnabled", "all", (0, C.getStringValidator)()), ee(re, "size"), ee(re, "dragBoundFunc"), ee(re, "draggable", !1, (0, C.getBooleanValidator)()), _.Factory.backCompat(re, {
    rotateDeg: "rotate",
    setRotationDeg: "setRotation",
    getRotationDeg: "getRotation"
  }), Wa;
}
var qa = {}, gh;
function nd() {
  if (gh) return qa;
  gh = 1, Object.defineProperty(qa, "__esModule", { value: !0 }), qa.Container = void 0;
  const l = st(), d = sn(), _ = lt();
  let L = class extends d.Node {
    constructor() {
      super(...arguments), this.children = [];
    }
    getChildren(C) {
      const f = this.children || [];
      return C ? f.filter(C) : f;
    }
    hasChildren() {
      return this.getChildren().length > 0;
    }
    removeChildren() {
      return this.getChildren().forEach((C) => {
        C.parent = null, C.index = 0, C.remove();
      }), this.children = [], this._requestDraw(), this;
    }
    destroyChildren() {
      return this.getChildren().forEach((C) => {
        C.parent = null, C.index = 0, C.destroy();
      }), this.children = [], this._requestDraw(), this;
    }
    add(...C) {
      if (C.length === 0)
        return this;
      if (C.length > 1) {
        for (let m = 0; m < C.length; m++)
          this.add(C[m]);
        return this;
      }
      const f = C[0];
      return f.getParent() ? (f.moveTo(this), this) : (this._validateAdd(f), f.index = this.getChildren().length, f.parent = this, f._clearCaches(), this.getChildren().push(f), this._fire("add", {
        child: f
      }), this._requestDraw(), this);
    }
    destroy() {
      return this.hasChildren() && this.destroyChildren(), super.destroy(), this;
    }
    find(C) {
      return this._generalFind(C, !1);
    }
    findOne(C) {
      const f = this._generalFind(C, !0);
      return f.length > 0 ? f[0] : void 0;
    }
    _generalFind(C, f) {
      const m = [];
      return this._descendants((g) => {
        const x = g._isMatch(C);
        return x && m.push(g), !!(x && f);
      }), m;
    }
    _descendants(C) {
      let f = !1;
      const m = this.getChildren();
      for (const g of m) {
        if (f = C(g), f)
          return !0;
        if (g.hasChildren() && (f = g._descendants(C), f))
          return !0;
      }
      return !1;
    }
    toObject() {
      const C = d.Node.prototype.toObject.call(this);
      return C.children = [], this.getChildren().forEach((f) => {
        C.children.push(f.toObject());
      }), C;
    }
    isAncestorOf(C) {
      let f = C.getParent();
      for (; f; ) {
        if (f._id === this._id)
          return !0;
        f = f.getParent();
      }
      return !1;
    }
    clone(C) {
      const f = d.Node.prototype.clone.call(this, C);
      return this.getChildren().forEach(function(m) {
        f.add(m.clone());
      }), f;
    }
    getAllIntersections(C) {
      const f = [];
      return this.find("Shape").forEach((m) => {
        m.isVisible() && m.intersects(C) && f.push(m);
      }), f;
    }
    _clearSelfAndDescendantCache(C) {
      var f;
      super._clearSelfAndDescendantCache(C), !this.isCached() && ((f = this.children) === null || f === void 0 || f.forEach(function(m) {
        m._clearSelfAndDescendantCache(C);
      }));
    }
    _setChildrenIndices() {
      var C;
      (C = this.children) === null || C === void 0 || C.forEach(function(f, m) {
        f.index = m;
      }), this._requestDraw();
    }
    drawScene(C, f, m) {
      const g = this.getLayer(), x = C || g && g.getCanvas(), k = x && x.getContext(), F = this._getCanvasCache(), E = F && F.scene, S = x && x.isCache;
      if (!this.isVisible() && !S)
        return this;
      if (E) {
        k.save();
        const w = this.getAbsoluteTransform(f).getMatrix();
        k.transform(w[0], w[1], w[2], w[3], w[4], w[5]), this._drawCachedSceneCanvas(k), k.restore();
      } else
        this._drawChildren("drawScene", x, f, m);
      return this;
    }
    drawHit(C, f) {
      if (!this.shouldDrawHit(f))
        return this;
      const m = this.getLayer(), g = C || m && m.hitCanvas, x = g && g.getContext(), k = this._getCanvasCache();
      if (k && k.hit) {
        x.save();
        const E = this.getAbsoluteTransform(f).getMatrix();
        x.transform(E[0], E[1], E[2], E[3], E[4], E[5]), this._drawCachedHitCanvas(x), x.restore();
      } else
        this._drawChildren("drawHit", g, f);
      return this;
    }
    _drawChildren(C, f, m, g) {
      var x;
      const k = f && f.getContext(), F = this.clipWidth(), E = this.clipHeight(), S = this.clipFunc(), w = typeof F == "number" && typeof E == "number" || S, R = m === this;
      if (w) {
        k.save();
        const H = this.getAbsoluteTransform(m);
        let v = H.getMatrix();
        k.transform(v[0], v[1], v[2], v[3], v[4], v[5]), k.beginPath();
        let h;
        if (S)
          h = S.call(this, k, this);
        else {
          const T = this.clipX(), I = this.clipY();
          k.rect(T || 0, I || 0, F, E);
        }
        k.clip.apply(k, h), v = H.copy().invert().getMatrix(), k.transform(v[0], v[1], v[2], v[3], v[4], v[5]);
      }
      const O = !R && this.globalCompositeOperation() !== "source-over" && C === "drawScene";
      O && (k.save(), k._applyGlobalCompositeOperation(this)), (x = this.children) === null || x === void 0 || x.forEach(function(H) {
        H[C](f, m, g);
      }), O && k.restore(), w && k.restore();
    }
    getClientRect(C = {}) {
      var f;
      const m = C.skipTransform, g = C.relativeTo;
      let x, k, F, E, S = {
        x: 1 / 0,
        y: 1 / 0,
        width: 0,
        height: 0
      };
      const w = this;
      (f = this.children) === null || f === void 0 || f.forEach(function(H) {
        if (!H.visible())
          return;
        const v = H.getClientRect({
          relativeTo: w,
          skipShadow: C.skipShadow,
          skipStroke: C.skipStroke
        });
        v.width === 0 && v.height === 0 || (x === void 0 ? (x = v.x, k = v.y, F = v.x + v.width, E = v.y + v.height) : (x = Math.min(x, v.x), k = Math.min(k, v.y), F = Math.max(F, v.x + v.width), E = Math.max(E, v.y + v.height)));
      });
      const R = this.find("Shape");
      let O = !1;
      for (let H = 0; H < R.length; H++)
        if (R[H]._isVisible(this)) {
          O = !0;
          break;
        }
      return O && x !== void 0 ? S = {
        x,
        y: k,
        width: F - x,
        height: E - k
      } : S = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      }, m ? S : this._transformedRect(S, g);
    }
  };
  return qa.Container = L, l.Factory.addComponentsGetterSetter(L, "clip", [
    "x",
    "y",
    "width",
    "height"
  ]), l.Factory.addGetterSetter(L, "clipX", void 0, (0, _.getNumberValidator)()), l.Factory.addGetterSetter(L, "clipY", void 0, (0, _.getNumberValidator)()), l.Factory.addGetterSetter(L, "clipWidth", void 0, (0, _.getNumberValidator)()), l.Factory.addGetterSetter(L, "clipHeight", void 0, (0, _.getNumberValidator)()), l.Factory.addGetterSetter(L, "clipFunc"), qa;
}
var Zd = {}, oo = {}, mh;
function D0() {
  if (mh) return oo;
  mh = 1, Object.defineProperty(oo, "__esModule", { value: !0 }), oo.getCapturedShape = L, oo.createEvent = N, oo.hasPointerCapture = C, oo.setPointerCapture = f, oo.releaseCapture = m;
  const l = Ze(), d = /* @__PURE__ */ new Map(), _ = l.Konva._global.PointerEvent !== void 0;
  function L(g) {
    return d.get(g);
  }
  function N(g) {
    return {
      evt: g,
      pointerId: g.pointerId
    };
  }
  function C(g, x) {
    return d.get(g) === x;
  }
  function f(g, x) {
    m(g), x.getStage() && (d.set(g, x), _ && x._fire("gotpointercapture", N(new PointerEvent("gotpointercapture"))));
  }
  function m(g, x) {
    const k = d.get(g);
    if (!k)
      return;
    const F = k.getStage();
    F && F.content, d.delete(g), _ && k._fire("lostpointercapture", N(new PointerEvent("lostpointercapture")));
  }
  return oo;
}
var yh;
function T1() {
  return yh || (yh = 1, (function(l) {
    Object.defineProperty(l, "__esModule", { value: !0 }), l.Stage = l.stages = void 0;
    const d = Xt(), _ = st(), L = nd(), N = Ze(), C = td(), f = pf(), m = Ze(), g = D0(), x = "Stage", k = "string", F = "px", E = "mouseout", S = "mouseleave", w = "mouseover", R = "mouseenter", O = "mousemove", H = "mousedown", v = "mouseup", h = "pointermove", T = "pointerdown", I = "pointerup", j = "pointercancel", J = "lostpointercapture", z = "pointerout", U = "pointerleave", G = "pointerover", Y = "pointerenter", Z = "contextmenu", ne = "touchstart", re = "touchend", ee = "touchmove", Q = "touchcancel", P = "wheel", D = 5, W = [
      [R, "_pointerenter"],
      [H, "_pointerdown"],
      [O, "_pointermove"],
      [v, "_pointerup"],
      [S, "_pointerleave"],
      [ne, "_pointerdown"],
      [ee, "_pointermove"],
      [re, "_pointerup"],
      [Q, "_pointercancel"],
      [w, "_pointerover"],
      [P, "_wheel"],
      [Z, "_contextmenu"],
      [T, "_pointerdown"],
      [h, "_pointermove"],
      [I, "_pointerup"],
      [j, "_pointercancel"],
      [U, "_pointerleave"],
      [J, "_lostpointercapture"]
    ], B = {
      mouse: {
        [z]: E,
        [U]: S,
        [G]: w,
        [Y]: R,
        [h]: O,
        [T]: H,
        [I]: v,
        [j]: "mousecancel",
        pointerclick: "click",
        pointerdblclick: "dblclick"
      },
      touch: {
        [z]: "touchout",
        [U]: "touchleave",
        [G]: "touchover",
        [Y]: "touchenter",
        [h]: ee,
        [T]: ne,
        [I]: re,
        [j]: Q,
        pointerclick: "tap",
        pointerdblclick: "dbltap"
      },
      pointer: {
        [z]: z,
        [U]: U,
        [G]: G,
        [Y]: Y,
        [h]: h,
        [T]: T,
        [I]: I,
        [j]: j,
        pointerclick: "pointerclick",
        pointerdblclick: "pointerdblclick"
      }
    }, M = (oe) => oe.indexOf("pointer") >= 0 ? "pointer" : oe.indexOf("touch") >= 0 ? "touch" : "mouse", X = (oe) => {
      const q = M(oe);
      if (q === "pointer")
        return N.Konva.pointerEventsEnabled && B.pointer;
      if (q === "touch")
        return B.touch;
      if (q === "mouse")
        return B.mouse;
    };
    function b(oe = {}) {
      return (oe.clipFunc || oe.clipWidth || oe.clipHeight) && d.Util.warn("Stage does not support clipping. Please use clip for Layers or Groups."), oe;
    }
    const ce = "Pointer position is missing and not registered by the stage. Looks like it is outside of the stage container. You can set it manually from event: stage.setPointersPositions(event);";
    l.stages = [];
    class me extends L.Container {
      constructor(q) {
        super(b(q)), this._pointerPositions = [], this._changedPointerPositions = [], this._buildDOM(), this._bindContentEvents(), l.stages.push(this), this.on("widthChange.konva heightChange.konva", this._resizeDOM), this.on("visibleChange.konva", this._checkVisibility), this.on("clipWidthChange.konva clipHeightChange.konva clipFuncChange.konva", () => {
          b(this.attrs);
        }), this._checkVisibility();
      }
      _validateAdd(q) {
        const se = q.getType() === "Layer", ge = q.getType() === "FastLayer";
        se || ge || d.Util.throw("You may only add layers to the stage.");
      }
      _checkVisibility() {
        if (!this.content)
          return;
        const q = this.visible() ? "" : "none";
        this.content.style.display = q;
      }
      setContainer(q) {
        if (typeof q === k) {
          let se;
          if (q.charAt(0) === ".") {
            const ge = q.slice(1);
            q = document.getElementsByClassName(ge)[0];
          } else
            q.charAt(0) !== "#" ? se = q : se = q.slice(1), q = document.getElementById(se);
          if (!q)
            throw "Can not find container in document with id " + se;
        }
        return this._setAttr("container", q), this.content && (this.content.parentElement && this.content.parentElement.removeChild(this.content), q.appendChild(this.content)), this;
      }
      shouldDrawHit() {
        return !0;
      }
      clear() {
        const q = this.children, se = q.length;
        for (let ge = 0; ge < se; ge++)
          q[ge].clear();
        return this;
      }
      clone(q) {
        return q || (q = {}), q.container = typeof document < "u" && document.createElement("div"), L.Container.prototype.clone.call(this, q);
      }
      destroy() {
        super.destroy();
        const q = this.content;
        q && d.Util._isInDocument(q) && this.container().removeChild(q);
        const se = l.stages.indexOf(this);
        return se > -1 && l.stages.splice(se, 1), d.Util.releaseCanvas(this.bufferCanvas._canvas, this.bufferHitCanvas._canvas), this;
      }
      getPointerPosition() {
        const q = this._pointerPositions[0] || this._changedPointerPositions[0];
        return q ? {
          x: q.x,
          y: q.y
        } : (d.Util.warn(ce), null);
      }
      _getPointerById(q) {
        return this._pointerPositions.find((se) => se.id === q);
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
        const se = new C.SceneCanvas({
          width: q.width,
          height: q.height,
          pixelRatio: q.pixelRatio || 1
        }), ge = se.getContext()._context, ye = this.children;
        return (q.x || q.y) && ge.translate(-1 * q.x, -1 * q.y), ye.forEach(function(Re) {
          if (!Re.isVisible())
            return;
          const Be = Re._toKonvaCanvas(q);
          ge.drawImage(Be._canvas, q.x, q.y, Be.getWidth() / Be.getPixelRatio(), Be.getHeight() / Be.getPixelRatio());
        }), se;
      }
      getIntersection(q) {
        if (!q)
          return null;
        const se = this.children, ge = se.length, ye = ge - 1;
        for (let Re = ye; Re >= 0; Re--) {
          const Be = se[Re].getIntersection(q);
          if (Be)
            return Be;
        }
        return null;
      }
      _resizeDOM() {
        const q = this.width(), se = this.height();
        this.content && (this.content.style.width = q + F, this.content.style.height = se + F), this.bufferCanvas.setSize(q, se), this.bufferHitCanvas.setSize(q, se), this.children.forEach((ge) => {
          ge.setSize({ width: q, height: se }), ge.draw();
        });
      }
      add(q, ...se) {
        if (arguments.length > 1) {
          for (let ye = 0; ye < arguments.length; ye++)
            this.add(arguments[ye]);
          return this;
        }
        super.add(q);
        const ge = this.children.length;
        return ge > D && d.Util.warn("The stage has " + ge + " layers. Recommended maximum number of layers is 3-5. Adding more layers into the stage may drop the performance. Rethink your tree structure, you can use Konva.Group."), q.setSize({ width: this.width(), height: this.height() }), q.draw(), N.Konva.isBrowser && this.content.appendChild(q.canvas._canvas), this;
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
        N.Konva.isBrowser && W.forEach(([q, se]) => {
          this.content.addEventListener(q, (ge) => {
            this[se](ge);
          }, { passive: !1 });
        });
      }
      _pointerenter(q) {
        this.setPointersPositions(q);
        const se = X(q.type);
        se && this._fire(se.pointerenter, {
          evt: q,
          target: this,
          currentTarget: this
        });
      }
      _pointerover(q) {
        this.setPointersPositions(q);
        const se = X(q.type);
        se && this._fire(se.pointerover, {
          evt: q,
          target: this,
          currentTarget: this
        });
      }
      _getTargetShape(q) {
        let se = this[q + "targetShape"];
        return se && !se.getStage() && (se = null), se;
      }
      _pointerleave(q) {
        const se = X(q.type), ge = M(q.type);
        if (!se)
          return;
        this.setPointersPositions(q);
        const ye = this._getTargetShape(ge), Re = !(N.Konva.isDragging() || N.Konva.isTransforming()) || N.Konva.hitOnDragEnabled;
        ye && Re ? (ye._fireAndBubble(se.pointerout, { evt: q }), ye._fireAndBubble(se.pointerleave, { evt: q }), this._fire(se.pointerleave, {
          evt: q,
          target: this,
          currentTarget: this
        }), this[ge + "targetShape"] = null) : Re && (this._fire(se.pointerleave, {
          evt: q,
          target: this,
          currentTarget: this
        }), this._fire(se.pointerout, {
          evt: q,
          target: this,
          currentTarget: this
        })), this.pointerPos = null, this._pointerPositions = [];
      }
      _pointerdown(q) {
        const se = X(q.type), ge = M(q.type);
        if (!se)
          return;
        this.setPointersPositions(q);
        let ye = !1;
        this._changedPointerPositions.forEach((Re) => {
          const Be = this.getIntersection(Re);
          if (f.DD.justDragged = !1, N.Konva["_" + ge + "ListenClick"] = !0, !Be || !Be.isListening()) {
            this[ge + "ClickStartShape"] = void 0;
            return;
          }
          N.Konva.capturePointerEventsEnabled && Be.setPointerCapture(Re.id), this[ge + "ClickStartShape"] = Be, Be._fireAndBubble(se.pointerdown, {
            evt: q,
            pointerId: Re.id
          }), ye = !0;
          const Ge = q.type.indexOf("touch") >= 0;
          Be.preventDefault() && q.cancelable && Ge && q.preventDefault();
        }), ye || this._fire(se.pointerdown, {
          evt: q,
          target: this,
          currentTarget: this,
          pointerId: this._pointerPositions[0].id
        });
      }
      _pointermove(q) {
        const se = X(q.type), ge = M(q.type);
        if (!se || (N.Konva.isDragging() && f.DD.node.preventDefault() && q.cancelable && q.preventDefault(), this.setPointersPositions(q), !(!(N.Konva.isDragging() || N.Konva.isTransforming()) || N.Konva.hitOnDragEnabled)))
          return;
        const Re = {};
        let Be = !1;
        const Ge = this._getTargetShape(ge);
        this._changedPointerPositions.forEach((rt) => {
          const We = g.getCapturedShape(rt.id) || this.getIntersection(rt), Dt = rt.id, $e = { evt: q, pointerId: Dt }, gt = Ge !== We;
          if (gt && Ge && (Ge._fireAndBubble(se.pointerout, { ...$e }, We), Ge._fireAndBubble(se.pointerleave, { ...$e }, We)), We) {
            if (Re[We._id])
              return;
            Re[We._id] = !0;
          }
          We && We.isListening() ? (Be = !0, gt && (We._fireAndBubble(se.pointerover, { ...$e }, Ge), We._fireAndBubble(se.pointerenter, { ...$e }, Ge), this[ge + "targetShape"] = We), We._fireAndBubble(se.pointermove, { ...$e })) : Ge && (this._fire(se.pointerover, {
            evt: q,
            target: this,
            currentTarget: this,
            pointerId: Dt
          }), this[ge + "targetShape"] = null);
        }), Be || this._fire(se.pointermove, {
          evt: q,
          target: this,
          currentTarget: this,
          pointerId: this._changedPointerPositions[0].id
        });
      }
      _pointerup(q) {
        const se = X(q.type), ge = M(q.type);
        if (!se)
          return;
        this.setPointersPositions(q);
        const ye = this[ge + "ClickStartShape"], Re = this[ge + "ClickEndShape"], Be = {};
        let Ge = !1;
        this._changedPointerPositions.forEach((rt) => {
          const We = g.getCapturedShape(rt.id) || this.getIntersection(rt);
          if (We) {
            if (We.releaseCapture(rt.id), Be[We._id])
              return;
            Be[We._id] = !0;
          }
          const Dt = rt.id, $e = { evt: q, pointerId: Dt };
          let gt = !1;
          N.Konva["_" + ge + "InDblClickWindow"] ? (gt = !0, clearTimeout(this[ge + "DblTimeout"])) : f.DD.justDragged || (N.Konva["_" + ge + "InDblClickWindow"] = !0, clearTimeout(this[ge + "DblTimeout"])), this[ge + "DblTimeout"] = setTimeout(function() {
            N.Konva["_" + ge + "InDblClickWindow"] = !1;
          }, N.Konva.dblClickWindow), We && We.isListening() ? (Ge = !0, this[ge + "ClickEndShape"] = We, We._fireAndBubble(se.pointerup, { ...$e }), N.Konva["_" + ge + "ListenClick"] && ye && ye === We && (We._fireAndBubble(se.pointerclick, { ...$e }), gt && Re && Re === We && We._fireAndBubble(se.pointerdblclick, { ...$e }))) : (this[ge + "ClickEndShape"] = null, N.Konva["_" + ge + "ListenClick"] && this._fire(se.pointerclick, {
            evt: q,
            target: this,
            currentTarget: this,
            pointerId: Dt
          }), gt && this._fire(se.pointerdblclick, {
            evt: q,
            target: this,
            currentTarget: this,
            pointerId: Dt
          }));
        }), Ge || this._fire(se.pointerup, {
          evt: q,
          target: this,
          currentTarget: this,
          pointerId: this._changedPointerPositions[0].id
        }), N.Konva["_" + ge + "ListenClick"] = !1, q.cancelable && ge !== "touch" && ge !== "pointer" && q.preventDefault();
      }
      _contextmenu(q) {
        this.setPointersPositions(q);
        const se = this.getIntersection(this.getPointerPosition());
        se && se.isListening() ? se._fireAndBubble(Z, { evt: q }) : this._fire(Z, {
          evt: q,
          target: this,
          currentTarget: this
        });
      }
      _wheel(q) {
        this.setPointersPositions(q);
        const se = this.getIntersection(this.getPointerPosition());
        se && se.isListening() ? se._fireAndBubble(P, { evt: q }) : this._fire(P, {
          evt: q,
          target: this,
          currentTarget: this
        });
      }
      _pointercancel(q) {
        this.setPointersPositions(q);
        const se = g.getCapturedShape(q.pointerId) || this.getIntersection(this.getPointerPosition());
        se && se._fireAndBubble(I, g.createEvent(q)), g.releaseCapture(q.pointerId);
      }
      _lostpointercapture(q) {
        g.releaseCapture(q.pointerId);
      }
      setPointersPositions(q) {
        const se = this._getContentPosition();
        let ge = null, ye = null;
        q = q || window.event, q.touches !== void 0 ? (this._pointerPositions = [], this._changedPointerPositions = [], Array.prototype.forEach.call(q.touches, (Re) => {
          this._pointerPositions.push({
            id: Re.identifier,
            x: (Re.clientX - se.left) / se.scaleX,
            y: (Re.clientY - se.top) / se.scaleY
          });
        }), Array.prototype.forEach.call(q.changedTouches || q.touches, (Re) => {
          this._changedPointerPositions.push({
            id: Re.identifier,
            x: (Re.clientX - se.left) / se.scaleX,
            y: (Re.clientY - se.top) / se.scaleY
          });
        })) : (ge = (q.clientX - se.left) / se.scaleX, ye = (q.clientY - se.top) / se.scaleY, this.pointerPos = {
          x: ge,
          y: ye
        }, this._pointerPositions = [{ x: ge, y: ye, id: d.Util._getFirstPointerId(q) }], this._changedPointerPositions = [
          { x: ge, y: ye, id: d.Util._getFirstPointerId(q) }
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
        if (this.bufferCanvas = new C.SceneCanvas({
          width: this.width(),
          height: this.height()
        }), this.bufferHitCanvas = new C.HitCanvas({
          pixelRatio: 1,
          width: this.width(),
          height: this.height()
        }), !N.Konva.isBrowser)
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
    l.Stage = me, me.prototype.nodeType = x, (0, m._registerNode)(me), _.Factory.addGetterSetter(me, "container"), N.Konva.isBrowser && document.addEventListener("visibilitychange", () => {
      l.stages.forEach((oe) => {
        oe.batchDraw();
      });
    });
  })(Zd)), Zd;
}
var Ka = {}, $d = {}, vh;
function Fn() {
  return vh || (vh = 1, (function(l) {
    Object.defineProperty(l, "__esModule", { value: !0 }), l.Shape = l.shapes = void 0;
    const d = Ze(), _ = Xt(), L = st(), N = sn(), C = lt(), f = Ze(), m = D0(), g = "hasShadow", x = "shadowRGBA", k = "patternImage", F = "linearGradient", E = "radialGradient";
    let S;
    function w() {
      return S || (S = _.Util.createCanvasElement().getContext("2d"), S);
    }
    l.shapes = {};
    function R(U) {
      const G = this.attrs.fillRule;
      G ? U.fill(G) : U.fill();
    }
    function O(U) {
      U.stroke();
    }
    function H(U) {
      const G = this.attrs.fillRule;
      G ? U.fill(G) : U.fill();
    }
    function v(U) {
      U.stroke();
    }
    function h() {
      this._clearCache(g);
    }
    function T() {
      this._clearCache(x);
    }
    function I() {
      this._clearCache(k);
    }
    function j() {
      this._clearCache(F);
    }
    function J() {
      this._clearCache(E);
    }
    class z extends N.Node {
      constructor(G) {
        super(G);
        let Y;
        for (; Y = _.Util.getRandomColor(), !(Y && !(Y in l.shapes)); )
          ;
        this.colorKey = Y, l.shapes[Y] = this;
      }
      getContext() {
        return _.Util.warn("shape.getContext() method is deprecated. Please do not use it."), this.getLayer().getContext();
      }
      getCanvas() {
        return _.Util.warn("shape.getCanvas() method is deprecated. Please do not use it."), this.getLayer().getCanvas();
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
        return this._getCache(k, this.__getFillPattern);
      }
      __getFillPattern() {
        if (this.fillPatternImage()) {
          const Y = w().createPattern(this.fillPatternImage(), this.fillPatternRepeat() || "repeat");
          if (Y && Y.setTransform) {
            const Z = new _.Transform();
            Z.translate(this.fillPatternX(), this.fillPatternY()), Z.rotate(d.Konva.getAngle(this.fillPatternRotation())), Z.scale(this.fillPatternScaleX(), this.fillPatternScaleY()), Z.translate(-1 * this.fillPatternOffsetX(), -1 * this.fillPatternOffsetY());
            const ne = Z.getMatrix(), re = typeof DOMMatrix > "u" ? {
              a: ne[0],
              b: ne[1],
              c: ne[2],
              d: ne[3],
              e: ne[4],
              f: ne[5]
            } : new DOMMatrix(ne);
            Y.setTransform(re);
          }
          return Y;
        }
      }
      _getLinearGradient() {
        return this._getCache(F, this.__getLinearGradient);
      }
      __getLinearGradient() {
        const G = this.fillLinearGradientColorStops();
        if (G) {
          const Y = w(), Z = this.fillLinearGradientStartPoint(), ne = this.fillLinearGradientEndPoint(), re = Y.createLinearGradient(Z.x, Z.y, ne.x, ne.y);
          for (let ee = 0; ee < G.length; ee += 2)
            re.addColorStop(G[ee], G[ee + 1]);
          return re;
        }
      }
      _getRadialGradient() {
        return this._getCache(E, this.__getRadialGradient);
      }
      __getRadialGradient() {
        const G = this.fillRadialGradientColorStops();
        if (G) {
          const Y = w(), Z = this.fillRadialGradientStartPoint(), ne = this.fillRadialGradientEndPoint(), re = Y.createRadialGradient(Z.x, Z.y, this.fillRadialGradientStartRadius(), ne.x, ne.y, this.fillRadialGradientEndRadius());
          for (let ee = 0; ee < G.length; ee += 2)
            re.addColorStop(G[ee], G[ee + 1]);
          return re;
        }
      }
      getShadowRGBA() {
        return this._getCache(x, this._getShadowRGBA);
      }
      _getShadowRGBA() {
        if (!this.hasShadow())
          return;
        const G = _.Util.colorToRGBA(this.shadowColor());
        if (G)
          return "rgba(" + G.r + "," + G.g + "," + G.b + "," + G.a * (this.shadowOpacity() || 1) + ")";
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
        const G = this.hitStrokeWidth();
        return G === "auto" ? this.hasStroke() : this.strokeEnabled() && !!G;
      }
      intersects(G) {
        const Y = this.getStage();
        if (!Y)
          return !1;
        const Z = Y.bufferHitCanvas;
        return Z.getContext().clear(), this.drawHit(Z, void 0, !0), Z.context.getImageData(Math.round(G.x), Math.round(G.y), 1, 1).data[3] > 0;
      }
      destroy() {
        return N.Node.prototype.destroy.call(this), delete l.shapes[this.colorKey], delete this.colorKey, this;
      }
      _useBufferCanvas(G) {
        var Y;
        if (!((Y = this.attrs.perfectDrawEnabled) !== null && Y !== void 0 ? Y : !0))
          return !1;
        const ne = G || this.hasFill(), re = this.hasStroke(), ee = this.getAbsoluteOpacity() !== 1;
        if (ne && re && ee)
          return !0;
        const Q = this.hasShadow(), P = this.shadowForStrokeEnabled();
        return !!(ne && re && Q && P);
      }
      setStrokeHitEnabled(G) {
        _.Util.warn("strokeHitEnabled property is deprecated. Please use hitStrokeWidth instead."), G ? this.hitStrokeWidth("auto") : this.hitStrokeWidth(0);
      }
      getStrokeHitEnabled() {
        return this.hitStrokeWidth() !== 0;
      }
      getSelfRect() {
        const G = this.size();
        return {
          x: this._centroid ? -G.width / 2 : 0,
          y: this._centroid ? -G.height / 2 : 0,
          width: G.width,
          height: G.height
        };
      }
      getClientRect(G = {}) {
        let Y = !1, Z = this.getParent();
        for (; Z; ) {
          if (Z.isCached()) {
            Y = !0;
            break;
          }
          Z = Z.getParent();
        }
        const ne = G.skipTransform, re = G.relativeTo || Y && this.getStage() || void 0, ee = this.getSelfRect(), P = !G.skipStroke && this.hasStroke() && this.strokeWidth() || 0, D = ee.width + P, W = ee.height + P, B = !G.skipShadow && this.hasShadow(), M = B ? this.shadowOffsetX() : 0, X = B ? this.shadowOffsetY() : 0, b = D + Math.abs(M), ce = W + Math.abs(X), me = B && this.shadowBlur() || 0, oe = b + me * 2, q = ce + me * 2, se = {
          width: oe,
          height: q,
          x: -(P / 2 + me) + Math.min(M, 0) + ee.x,
          y: -(P / 2 + me) + Math.min(X, 0) + ee.y
        };
        return ne ? se : this._transformedRect(se, re);
      }
      drawScene(G, Y, Z) {
        const ne = this.getLayer(), re = G || ne.getCanvas(), ee = re.getContext(), Q = this._getCanvasCache(), P = this.getSceneFunc(), D = this.hasShadow();
        let W;
        const B = Y === this;
        if (!this.isVisible() && !B)
          return this;
        if (Q) {
          ee.save();
          const M = this.getAbsoluteTransform(Y).getMatrix();
          return ee.transform(M[0], M[1], M[2], M[3], M[4], M[5]), this._drawCachedSceneCanvas(ee), ee.restore(), this;
        }
        if (!P)
          return this;
        if (ee.save(), this._useBufferCanvas()) {
          W = this.getStage();
          const M = Z || W.bufferCanvas, X = M.getContext();
          X.clear(), X.save(), X._applyLineJoin(this);
          const b = this.getAbsoluteTransform(Y).getMatrix();
          X.transform(b[0], b[1], b[2], b[3], b[4], b[5]), P.call(this, X, this), X.restore();
          const ce = M.pixelRatio;
          D && ee._applyShadow(this), ee._applyOpacity(this), ee._applyGlobalCompositeOperation(this), ee.drawImage(M._canvas, M.x || 0, M.y || 0, M.width / ce, M.height / ce);
        } else {
          if (ee._applyLineJoin(this), !B) {
            const M = this.getAbsoluteTransform(Y).getMatrix();
            ee.transform(M[0], M[1], M[2], M[3], M[4], M[5]), ee._applyOpacity(this), ee._applyGlobalCompositeOperation(this);
          }
          D && ee._applyShadow(this), P.call(this, ee, this);
        }
        return ee.restore(), this;
      }
      drawHit(G, Y, Z = !1) {
        if (!this.shouldDrawHit(Y, Z))
          return this;
        const ne = this.getLayer(), re = G || ne.hitCanvas, ee = re && re.getContext(), Q = this.hitFunc() || this.sceneFunc(), P = this._getCanvasCache(), D = P && P.hit;
        if (this.colorKey || _.Util.warn("Looks like your canvas has a destroyed shape in it. Do not reuse shape after you destroyed it. If you want to reuse shape you should call remove() instead of destroy()"), D) {
          ee.save();
          const B = this.getAbsoluteTransform(Y).getMatrix();
          return ee.transform(B[0], B[1], B[2], B[3], B[4], B[5]), this._drawCachedHitCanvas(ee), ee.restore(), this;
        }
        if (!Q)
          return this;
        if (ee.save(), ee._applyLineJoin(this), !(this === Y)) {
          const B = this.getAbsoluteTransform(Y).getMatrix();
          ee.transform(B[0], B[1], B[2], B[3], B[4], B[5]);
        }
        return Q.call(this, ee, this), ee.restore(), this;
      }
      drawHitFromCache(G = 0) {
        const Y = this._getCanvasCache(), Z = this._getCachedSceneCanvas(), ne = Y.hit, re = ne.getContext(), ee = ne.getWidth(), Q = ne.getHeight();
        re.clear(), re.drawImage(Z._canvas, 0, 0, ee, Q);
        try {
          const P = re.getImageData(0, 0, ee, Q), D = P.data, W = D.length, B = _.Util._hexToRgb(this.colorKey);
          for (let M = 0; M < W; M += 4)
            D[M + 3] > G ? (D[M] = B.r, D[M + 1] = B.g, D[M + 2] = B.b, D[M + 3] = 255) : D[M + 3] = 0;
          re.putImageData(P, 0, 0);
        } catch (P) {
          _.Util.error("Unable to draw hit graph from cached scene canvas. " + P.message);
        }
        return this;
      }
      hasPointerCapture(G) {
        return m.hasPointerCapture(G, this);
      }
      setPointerCapture(G) {
        m.setPointerCapture(G, this);
      }
      releaseCapture(G) {
        m.releaseCapture(G, this);
      }
    }
    l.Shape = z, z.prototype._fillFunc = R, z.prototype._strokeFunc = O, z.prototype._fillFuncHit = H, z.prototype._strokeFuncHit = v, z.prototype._centroid = !1, z.prototype.nodeType = "Shape", (0, f._registerNode)(z), z.prototype.eventListeners = {}, z.prototype.on.call(z.prototype, "shadowColorChange.konva shadowBlurChange.konva shadowOffsetChange.konva shadowOpacityChange.konva shadowEnabledChange.konva", h), z.prototype.on.call(z.prototype, "shadowColorChange.konva shadowOpacityChange.konva shadowEnabledChange.konva", T), z.prototype.on.call(z.prototype, "fillPriorityChange.konva fillPatternImageChange.konva fillPatternRepeatChange.konva fillPatternScaleXChange.konva fillPatternScaleYChange.konva fillPatternOffsetXChange.konva fillPatternOffsetYChange.konva fillPatternXChange.konva fillPatternYChange.konva fillPatternRotationChange.konva", I), z.prototype.on.call(z.prototype, "fillPriorityChange.konva fillLinearGradientColorStopsChange.konva fillLinearGradientStartPointXChange.konva fillLinearGradientStartPointYChange.konva fillLinearGradientEndPointXChange.konva fillLinearGradientEndPointYChange.konva", j), z.prototype.on.call(z.prototype, "fillPriorityChange.konva fillRadialGradientColorStopsChange.konva fillRadialGradientStartPointXChange.konva fillRadialGradientStartPointYChange.konva fillRadialGradientEndPointXChange.konva fillRadialGradientEndPointYChange.konva fillRadialGradientStartRadiusChange.konva fillRadialGradientEndRadiusChange.konva", J), L.Factory.addGetterSetter(z, "stroke", void 0, (0, C.getStringOrGradientValidator)()), L.Factory.addGetterSetter(z, "strokeWidth", 2, (0, C.getNumberValidator)()), L.Factory.addGetterSetter(z, "fillAfterStrokeEnabled", !1), L.Factory.addGetterSetter(z, "hitStrokeWidth", "auto", (0, C.getNumberOrAutoValidator)()), L.Factory.addGetterSetter(z, "strokeHitEnabled", !0, (0, C.getBooleanValidator)()), L.Factory.addGetterSetter(z, "perfectDrawEnabled", !0, (0, C.getBooleanValidator)()), L.Factory.addGetterSetter(z, "shadowForStrokeEnabled", !0, (0, C.getBooleanValidator)()), L.Factory.addGetterSetter(z, "lineJoin"), L.Factory.addGetterSetter(z, "lineCap"), L.Factory.addGetterSetter(z, "sceneFunc"), L.Factory.addGetterSetter(z, "hitFunc"), L.Factory.addGetterSetter(z, "dash"), L.Factory.addGetterSetter(z, "dashOffset", 0, (0, C.getNumberValidator)()), L.Factory.addGetterSetter(z, "shadowColor", void 0, (0, C.getStringValidator)()), L.Factory.addGetterSetter(z, "shadowBlur", 0, (0, C.getNumberValidator)()), L.Factory.addGetterSetter(z, "shadowOpacity", 1, (0, C.getNumberValidator)()), L.Factory.addComponentsGetterSetter(z, "shadowOffset", ["x", "y"]), L.Factory.addGetterSetter(z, "shadowOffsetX", 0, (0, C.getNumberValidator)()), L.Factory.addGetterSetter(z, "shadowOffsetY", 0, (0, C.getNumberValidator)()), L.Factory.addGetterSetter(z, "fillPatternImage"), L.Factory.addGetterSetter(z, "fill", void 0, (0, C.getStringOrGradientValidator)()), L.Factory.addGetterSetter(z, "fillPatternX", 0, (0, C.getNumberValidator)()), L.Factory.addGetterSetter(z, "fillPatternY", 0, (0, C.getNumberValidator)()), L.Factory.addGetterSetter(z, "fillLinearGradientColorStops"), L.Factory.addGetterSetter(z, "strokeLinearGradientColorStops"), L.Factory.addGetterSetter(z, "fillRadialGradientStartRadius", 0), L.Factory.addGetterSetter(z, "fillRadialGradientEndRadius", 0), L.Factory.addGetterSetter(z, "fillRadialGradientColorStops"), L.Factory.addGetterSetter(z, "fillPatternRepeat", "repeat"), L.Factory.addGetterSetter(z, "fillEnabled", !0), L.Factory.addGetterSetter(z, "strokeEnabled", !0), L.Factory.addGetterSetter(z, "shadowEnabled", !0), L.Factory.addGetterSetter(z, "dashEnabled", !0), L.Factory.addGetterSetter(z, "strokeScaleEnabled", !0), L.Factory.addGetterSetter(z, "fillPriority", "color"), L.Factory.addComponentsGetterSetter(z, "fillPatternOffset", ["x", "y"]), L.Factory.addGetterSetter(z, "fillPatternOffsetX", 0, (0, C.getNumberValidator)()), L.Factory.addGetterSetter(z, "fillPatternOffsetY", 0, (0, C.getNumberValidator)()), L.Factory.addComponentsGetterSetter(z, "fillPatternScale", ["x", "y"]), L.Factory.addGetterSetter(z, "fillPatternScaleX", 1, (0, C.getNumberValidator)()), L.Factory.addGetterSetter(z, "fillPatternScaleY", 1, (0, C.getNumberValidator)()), L.Factory.addComponentsGetterSetter(z, "fillLinearGradientStartPoint", [
      "x",
      "y"
    ]), L.Factory.addComponentsGetterSetter(z, "strokeLinearGradientStartPoint", [
      "x",
      "y"
    ]), L.Factory.addGetterSetter(z, "fillLinearGradientStartPointX", 0), L.Factory.addGetterSetter(z, "strokeLinearGradientStartPointX", 0), L.Factory.addGetterSetter(z, "fillLinearGradientStartPointY", 0), L.Factory.addGetterSetter(z, "strokeLinearGradientStartPointY", 0), L.Factory.addComponentsGetterSetter(z, "fillLinearGradientEndPoint", [
      "x",
      "y"
    ]), L.Factory.addComponentsGetterSetter(z, "strokeLinearGradientEndPoint", [
      "x",
      "y"
    ]), L.Factory.addGetterSetter(z, "fillLinearGradientEndPointX", 0), L.Factory.addGetterSetter(z, "strokeLinearGradientEndPointX", 0), L.Factory.addGetterSetter(z, "fillLinearGradientEndPointY", 0), L.Factory.addGetterSetter(z, "strokeLinearGradientEndPointY", 0), L.Factory.addComponentsGetterSetter(z, "fillRadialGradientStartPoint", [
      "x",
      "y"
    ]), L.Factory.addGetterSetter(z, "fillRadialGradientStartPointX", 0), L.Factory.addGetterSetter(z, "fillRadialGradientStartPointY", 0), L.Factory.addComponentsGetterSetter(z, "fillRadialGradientEndPoint", [
      "x",
      "y"
    ]), L.Factory.addGetterSetter(z, "fillRadialGradientEndPointX", 0), L.Factory.addGetterSetter(z, "fillRadialGradientEndPointY", 0), L.Factory.addGetterSetter(z, "fillPatternRotation", 0), L.Factory.addGetterSetter(z, "fillRule", void 0, (0, C.getStringValidator)()), L.Factory.backCompat(z, {
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
  })($d)), $d;
}
var _h;
function z0() {
  if (_h) return Ka;
  _h = 1, Object.defineProperty(Ka, "__esModule", { value: !0 }), Ka.Layer = void 0;
  const l = Xt(), d = nd(), _ = sn(), L = st(), N = td(), C = lt(), f = Fn(), m = Ze(), g = "#", x = "beforeDraw", k = "draw", F = [
    { x: 0, y: 0 },
    { x: -1, y: -1 },
    { x: 1, y: -1 },
    { x: 1, y: 1 },
    { x: -1, y: 1 }
  ], E = F.length;
  class S extends d.Container {
    constructor(R) {
      super(R), this.canvas = new N.SceneCanvas(), this.hitCanvas = new N.HitCanvas({
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
    clear(R) {
      return this.getContext().clear(R), this.getHitCanvas().getContext().clear(R), this;
    }
    setZIndex(R) {
      super.setZIndex(R);
      const O = this.getStage();
      return O && O.content && (O.content.removeChild(this.getNativeCanvasElement()), R < O.children.length - 1 ? O.content.insertBefore(this.getNativeCanvasElement(), O.children[R + 1].getCanvas()._canvas) : O.content.appendChild(this.getNativeCanvasElement())), this;
    }
    moveToTop() {
      _.Node.prototype.moveToTop.call(this);
      const R = this.getStage();
      return R && R.content && (R.content.removeChild(this.getNativeCanvasElement()), R.content.appendChild(this.getNativeCanvasElement())), !0;
    }
    moveUp() {
      if (!_.Node.prototype.moveUp.call(this))
        return !1;
      const O = this.getStage();
      return !O || !O.content ? !1 : (O.content.removeChild(this.getNativeCanvasElement()), this.index < O.children.length - 1 ? O.content.insertBefore(this.getNativeCanvasElement(), O.children[this.index + 1].getCanvas()._canvas) : O.content.appendChild(this.getNativeCanvasElement()), !0);
    }
    moveDown() {
      if (_.Node.prototype.moveDown.call(this)) {
        const R = this.getStage();
        if (R) {
          const O = R.children;
          R.content && (R.content.removeChild(this.getNativeCanvasElement()), R.content.insertBefore(this.getNativeCanvasElement(), O[this.index + 1].getCanvas()._canvas));
        }
        return !0;
      }
      return !1;
    }
    moveToBottom() {
      if (_.Node.prototype.moveToBottom.call(this)) {
        const R = this.getStage();
        if (R) {
          const O = R.children;
          R.content && (R.content.removeChild(this.getNativeCanvasElement()), R.content.insertBefore(this.getNativeCanvasElement(), O[1].getCanvas()._canvas));
        }
        return !0;
      }
      return !1;
    }
    getLayer() {
      return this;
    }
    remove() {
      const R = this.getNativeCanvasElement();
      return _.Node.prototype.remove.call(this), R && R.parentNode && l.Util._isInDocument(R) && R.parentNode.removeChild(R), this;
    }
    getStage() {
      return this.parent;
    }
    setSize({ width: R, height: O }) {
      return this.canvas.setSize(R, O), this.hitCanvas.setSize(R, O), this._setSmoothEnabled(), this;
    }
    _validateAdd(R) {
      const O = R.getType();
      O !== "Group" && O !== "Shape" && l.Util.throw("You may only add groups and shapes to a layer.");
    }
    _toKonvaCanvas(R) {
      return R = R || {}, R.width = R.width || this.getWidth(), R.height = R.height || this.getHeight(), R.x = R.x !== void 0 ? R.x : this.x(), R.y = R.y !== void 0 ? R.y : this.y(), _.Node.prototype._toKonvaCanvas.call(this, R);
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
      l.Util.warn('Can not change width of layer. Use "stage.width(value)" function instead.');
    }
    getHeight() {
      if (this.parent)
        return this.parent.height();
    }
    setHeight() {
      l.Util.warn('Can not change height of layer. Use "stage.height(value)" function instead.');
    }
    batchDraw() {
      return this._waitingForDraw || (this._waitingForDraw = !0, l.Util.requestAnimFrame(() => {
        this.draw(), this._waitingForDraw = !1;
      })), this;
    }
    getIntersection(R) {
      if (!this.isListening() || !this.isVisible())
        return null;
      let O = 1, H = !1;
      for (; ; ) {
        for (let v = 0; v < E; v++) {
          const h = F[v], T = this._getIntersection({
            x: R.x + h.x * O,
            y: R.y + h.y * O
          }), I = T.shape;
          if (I)
            return I;
          if (H = !!T.antialiased, !T.antialiased)
            break;
        }
        if (H)
          O += 1;
        else
          return null;
      }
    }
    _getIntersection(R) {
      const O = this.hitCanvas.pixelRatio, H = this.hitCanvas.context.getImageData(Math.round(R.x * O), Math.round(R.y * O), 1, 1).data, v = H[3];
      if (v === 255) {
        const h = l.Util._rgbToHex(H[0], H[1], H[2]), T = f.shapes[g + h];
        return T ? {
          shape: T
        } : {
          antialiased: !0
        };
      } else if (v > 0)
        return {
          antialiased: !0
        };
      return {};
    }
    drawScene(R, O, H) {
      const v = this.getLayer(), h = R || v && v.getCanvas();
      return this._fire(x, {
        node: this
      }), this.clearBeforeDraw() && h.getContext().clear(), d.Container.prototype.drawScene.call(this, h, O, H), this._fire(k, {
        node: this
      }), this;
    }
    drawHit(R, O) {
      const H = this.getLayer(), v = R || H && H.hitCanvas;
      return H && H.clearBeforeDraw() && H.getHitCanvas().getContext().clear(), d.Container.prototype.drawHit.call(this, v, O), this;
    }
    enableHitGraph() {
      return this.hitGraphEnabled(!0), this;
    }
    disableHitGraph() {
      return this.hitGraphEnabled(!1), this;
    }
    setHitGraphEnabled(R) {
      l.Util.warn("hitGraphEnabled method is deprecated. Please use layer.listening() instead."), this.listening(R);
    }
    getHitGraphEnabled(R) {
      return l.Util.warn("hitGraphEnabled method is deprecated. Please use layer.listening() instead."), this.listening();
    }
    toggleHitCanvas() {
      if (!this.parent || !this.parent.content)
        return;
      const R = this.parent;
      !!this.hitCanvas._canvas.parentNode ? R.content.removeChild(this.hitCanvas._canvas) : R.content.appendChild(this.hitCanvas._canvas);
    }
    destroy() {
      return l.Util.releaseCanvas(this.getNativeCanvasElement(), this.getHitCanvas()._canvas), super.destroy();
    }
  }
  return Ka.Layer = S, S.prototype.nodeType = "Layer", (0, m._registerNode)(S), L.Factory.addGetterSetter(S, "imageSmoothingEnabled", !0), L.Factory.addGetterSetter(S, "clearBeforeDraw", !0), L.Factory.addGetterSetter(S, "hitGraphEnabled", !0, (0, C.getBooleanValidator)()), Ka;
}
var Ya = {}, Sh;
function N1() {
  if (Sh) return Ya;
  Sh = 1, Object.defineProperty(Ya, "__esModule", { value: !0 }), Ya.FastLayer = void 0;
  const l = Xt(), d = z0(), _ = Ze();
  let L = class extends d.Layer {
    constructor(C) {
      super(C), this.listening(!1), l.Util.warn('Konva.Fast layer is deprecated. Please use "new Konva.Layer({ listening: false })" instead.');
    }
  };
  return Ya.FastLayer = L, L.prototype.nodeType = "FastLayer", (0, _._registerNode)(L), Ya;
}
var Xa = {}, wh;
function gf() {
  if (wh) return Xa;
  wh = 1, Object.defineProperty(Xa, "__esModule", { value: !0 }), Xa.Group = void 0;
  const l = Xt(), d = nd(), _ = Ze();
  class L extends d.Container {
    _validateAdd(C) {
      const f = C.getType();
      f !== "Group" && f !== "Shape" && l.Util.throw("You may only add groups and shapes to groups.");
    }
  }
  return Xa.Group = L, L.prototype.nodeType = "Group", (0, _._registerNode)(L), Xa;
}
var Qa = {}, xh;
function mf() {
  if (xh) return Qa;
  xh = 1, Object.defineProperty(Qa, "__esModule", { value: !0 }), Qa.Animation = void 0;
  const l = Ze(), d = Xt(), _ = (function() {
    return l.glob.performance && l.glob.performance.now ? function() {
      return l.glob.performance.now();
    } : function() {
      return (/* @__PURE__ */ new Date()).getTime();
    };
  })();
  let L = class Ql {
    constructor(C, f) {
      this.id = Ql.animIdCounter++, this.frame = {
        time: 0,
        timeDiff: 0,
        lastTime: _(),
        frameRate: 0
      }, this.func = C, this.setLayers(f);
    }
    setLayers(C) {
      let f = [];
      return C && (f = Array.isArray(C) ? C : [C]), this.layers = f, this;
    }
    getLayers() {
      return this.layers;
    }
    addLayer(C) {
      const f = this.layers, m = f.length;
      for (let g = 0; g < m; g++)
        if (f[g]._id === C._id)
          return !1;
      return this.layers.push(C), !0;
    }
    isRunning() {
      const f = Ql.animations, m = f.length;
      for (let g = 0; g < m; g++)
        if (f[g].id === this.id)
          return !0;
      return !1;
    }
    start() {
      return this.stop(), this.frame.timeDiff = 0, this.frame.lastTime = _(), Ql._addAnimation(this), this;
    }
    stop() {
      return Ql._removeAnimation(this), this;
    }
    _updateFrameObject(C) {
      this.frame.timeDiff = C - this.frame.lastTime, this.frame.lastTime = C, this.frame.time += this.frame.timeDiff, this.frame.frameRate = 1e3 / this.frame.timeDiff;
    }
    static _addAnimation(C) {
      this.animations.push(C), this._handleAnimation();
    }
    static _removeAnimation(C) {
      const f = C.id, m = this.animations, g = m.length;
      for (let x = 0; x < g; x++)
        if (m[x].id === f) {
          this.animations.splice(x, 1);
          break;
        }
    }
    static _runFrames() {
      const C = {}, f = this.animations;
      for (let m = 0; m < f.length; m++) {
        const g = f[m], x = g.layers, k = g.func;
        g._updateFrameObject(_());
        const F = x.length;
        let E;
        if (k ? E = k.call(g, g.frame) !== !1 : E = !0, !!E)
          for (let S = 0; S < F; S++) {
            const w = x[S];
            w._id !== void 0 && (C[w._id] = w);
          }
      }
      for (const m in C)
        C.hasOwnProperty(m) && C[m].batchDraw();
    }
    static _animationLoop() {
      const C = Ql;
      C.animations.length ? (C._runFrames(), d.Util.requestAnimFrame(C._animationLoop)) : C.animRunning = !1;
    }
    static _handleAnimation() {
      this.animRunning || (this.animRunning = !0, d.Util.requestAnimFrame(this._animationLoop));
    }
  };
  return Qa.Animation = L, L.animations = [], L.animIdCounter = 0, L.animRunning = !1, Qa;
}
var ef = {}, Ch;
function F1() {
  return Ch || (Ch = 1, (function(l) {
    Object.defineProperty(l, "__esModule", { value: !0 }), l.Easings = l.Tween = void 0;
    const d = Xt(), _ = mf(), L = sn(), N = Ze(), C = {
      node: 1,
      duration: 1,
      easing: 1,
      onFinish: 1,
      yoyo: 1
    }, f = 1, m = 2, g = 3, x = ["fill", "stroke", "shadowColor"];
    let k = 0;
    class F {
      constructor(w, R, O, H, v, h, T) {
        this.prop = w, this.propFunc = R, this.begin = H, this._pos = H, this.duration = h, this._change = 0, this.prevPos = 0, this.yoyo = T, this._time = 0, this._position = 0, this._startTime = 0, this._finish = 0, this.func = O, this._change = v - this.begin, this.pause();
      }
      fire(w) {
        const R = this[w];
        R && R();
      }
      setTime(w) {
        w > this.duration ? this.yoyo ? (this._time = this.duration, this.reverse()) : this.finish() : w < 0 ? this.yoyo ? (this._time = 0, this.play()) : this.reset() : (this._time = w, this.update());
      }
      getTime() {
        return this._time;
      }
      setPosition(w) {
        this.prevPos = this._pos, this.propFunc(w), this._pos = w;
      }
      getPosition(w) {
        return w === void 0 && (w = this._time), this.func(w, this.begin, this._change, this.duration);
      }
      play() {
        this.state = m, this._startTime = this.getTimer() - this._time, this.onEnterFrame(), this.fire("onPlay");
      }
      reverse() {
        this.state = g, this._time = this.duration - this._time, this._startTime = this.getTimer() - this._time, this.onEnterFrame(), this.fire("onReverse");
      }
      seek(w) {
        this.pause(), this._time = w, this.update(), this.fire("onSeek");
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
        const w = this.getTimer() - this._startTime;
        this.state === m ? this.setTime(w) : this.state === g && this.setTime(this.duration - w);
      }
      pause() {
        this.state = f, this.fire("onPause");
      }
      getTimer() {
        return (/* @__PURE__ */ new Date()).getTime();
      }
    }
    class E {
      constructor(w) {
        const R = this, O = w.node, H = O._id, v = w.easing || l.Easings.Linear, h = !!w.yoyo;
        let T, I;
        typeof w.duration > "u" ? T = 0.3 : w.duration === 0 ? T = 1e-3 : T = w.duration, this.node = O, this._id = k++;
        const j = O.getLayer() || (O instanceof N.Konva.Stage ? O.getLayers() : null);
        j || d.Util.error("Tween constructor have `node` that is not in a layer. Please add node into layer first."), this.anim = new _.Animation(function() {
          R.tween.onEnterFrame();
        }, j), this.tween = new F(I, function(J) {
          R._tweenFunc(J);
        }, v, 0, 1, T * 1e3, h), this._addListeners(), E.attrs[H] || (E.attrs[H] = {}), E.attrs[H][this._id] || (E.attrs[H][this._id] = {}), E.tweens[H] || (E.tweens[H] = {});
        for (I in w)
          C[I] === void 0 && this._addAttr(I, w[I]);
        this.reset(), this.onFinish = w.onFinish, this.onReset = w.onReset, this.onUpdate = w.onUpdate;
      }
      _addAttr(w, R) {
        const O = this.node, H = O._id;
        let v, h, T, I, j;
        const J = E.tweens[H][w];
        J && delete E.attrs[H][J][w];
        let z = O.getAttr(w);
        if (d.Util._isArray(R))
          if (v = [], h = Math.max(R.length, z.length), w === "points" && R.length !== z.length && (R.length > z.length ? (I = z, z = d.Util._prepareArrayForTween(z, R, O.closed())) : (T = R, R = d.Util._prepareArrayForTween(R, z, O.closed()))), w.indexOf("fill") === 0)
            for (let U = 0; U < h; U++)
              if (U % 2 === 0)
                v.push(R[U] - z[U]);
              else {
                const G = d.Util.colorToRGBA(z[U]);
                j = d.Util.colorToRGBA(R[U]), z[U] = G, v.push({
                  r: j.r - G.r,
                  g: j.g - G.g,
                  b: j.b - G.b,
                  a: j.a - G.a
                });
              }
          else
            for (let U = 0; U < h; U++)
              v.push(R[U] - z[U]);
        else x.indexOf(w) !== -1 ? (z = d.Util.colorToRGBA(z), j = d.Util.colorToRGBA(R), v = {
          r: j.r - z.r,
          g: j.g - z.g,
          b: j.b - z.b,
          a: j.a - z.a
        }) : v = R - z;
        E.attrs[H][this._id][w] = {
          start: z,
          diff: v,
          end: R,
          trueEnd: T,
          trueStart: I
        }, E.tweens[H][w] = this._id;
      }
      _tweenFunc(w) {
        const R = this.node, O = E.attrs[R._id][this._id];
        let H, v, h, T, I, j, J, z;
        for (H in O) {
          if (v = O[H], h = v.start, T = v.diff, z = v.end, d.Util._isArray(h))
            if (I = [], J = Math.max(h.length, z.length), H.indexOf("fill") === 0)
              for (j = 0; j < J; j++)
                j % 2 === 0 ? I.push((h[j] || 0) + T[j] * w) : I.push("rgba(" + Math.round(h[j].r + T[j].r * w) + "," + Math.round(h[j].g + T[j].g * w) + "," + Math.round(h[j].b + T[j].b * w) + "," + (h[j].a + T[j].a * w) + ")");
            else
              for (j = 0; j < J; j++)
                I.push((h[j] || 0) + T[j] * w);
          else x.indexOf(H) !== -1 ? I = "rgba(" + Math.round(h.r + T.r * w) + "," + Math.round(h.g + T.g * w) + "," + Math.round(h.b + T.b * w) + "," + (h.a + T.a * w) + ")" : I = h + T * w;
          R.setAttr(H, I);
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
          const w = this.node, R = E.attrs[w._id][this._id];
          R.points && R.points.trueEnd && w.setAttr("points", R.points.trueEnd), this.onFinish && this.onFinish.call(this);
        }, this.tween.onReset = () => {
          const w = this.node, R = E.attrs[w._id][this._id];
          R.points && R.points.trueStart && w.points(R.points.trueStart), this.onReset && this.onReset();
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
      seek(w) {
        return this.tween.seek(w * 1e3), this;
      }
      pause() {
        return this.tween.pause(), this;
      }
      finish() {
        return this.tween.finish(), this;
      }
      destroy() {
        const w = this.node._id, R = this._id, O = E.tweens[w];
        this.pause(), this.anim && this.anim.stop();
        for (const H in O)
          delete E.tweens[w][H];
        delete E.attrs[w][R], E.tweens[w] && (Object.keys(E.tweens[w]).length === 0 && delete E.tweens[w], Object.keys(E.attrs[w]).length === 0 && delete E.attrs[w]);
      }
    }
    l.Tween = E, E.attrs = {}, E.tweens = {}, L.Node.prototype.to = function(S) {
      const w = S.onFinish;
      S.node = this, S.onFinish = function() {
        this.destroy(), w && w();
      }, new E(S).play();
    }, l.Easings = {
      BackEaseIn(S, w, R, O) {
        return R * (S /= O) * S * ((1.70158 + 1) * S - 1.70158) + w;
      },
      BackEaseOut(S, w, R, O) {
        return R * ((S = S / O - 1) * S * ((1.70158 + 1) * S + 1.70158) + 1) + w;
      },
      BackEaseInOut(S, w, R, O) {
        let H = 1.70158;
        return (S /= O / 2) < 1 ? R / 2 * (S * S * (((H *= 1.525) + 1) * S - H)) + w : R / 2 * ((S -= 2) * S * (((H *= 1.525) + 1) * S + H) + 2) + w;
      },
      ElasticEaseIn(S, w, R, O, H, v) {
        let h = 0;
        return S === 0 ? w : (S /= O) === 1 ? w + R : (v || (v = O * 0.3), !H || H < Math.abs(R) ? (H = R, h = v / 4) : h = v / (2 * Math.PI) * Math.asin(R / H), -(H * Math.pow(2, 10 * (S -= 1)) * Math.sin((S * O - h) * (2 * Math.PI) / v)) + w);
      },
      ElasticEaseOut(S, w, R, O, H, v) {
        let h = 0;
        return S === 0 ? w : (S /= O) === 1 ? w + R : (v || (v = O * 0.3), !H || H < Math.abs(R) ? (H = R, h = v / 4) : h = v / (2 * Math.PI) * Math.asin(R / H), H * Math.pow(2, -10 * S) * Math.sin((S * O - h) * (2 * Math.PI) / v) + R + w);
      },
      ElasticEaseInOut(S, w, R, O, H, v) {
        let h = 0;
        return S === 0 ? w : (S /= O / 2) === 2 ? w + R : (v || (v = O * (0.3 * 1.5)), !H || H < Math.abs(R) ? (H = R, h = v / 4) : h = v / (2 * Math.PI) * Math.asin(R / H), S < 1 ? -0.5 * (H * Math.pow(2, 10 * (S -= 1)) * Math.sin((S * O - h) * (2 * Math.PI) / v)) + w : H * Math.pow(2, -10 * (S -= 1)) * Math.sin((S * O - h) * (2 * Math.PI) / v) * 0.5 + R + w);
      },
      BounceEaseOut(S, w, R, O) {
        return (S /= O) < 1 / 2.75 ? R * (7.5625 * S * S) + w : S < 2 / 2.75 ? R * (7.5625 * (S -= 1.5 / 2.75) * S + 0.75) + w : S < 2.5 / 2.75 ? R * (7.5625 * (S -= 2.25 / 2.75) * S + 0.9375) + w : R * (7.5625 * (S -= 2.625 / 2.75) * S + 0.984375) + w;
      },
      BounceEaseIn(S, w, R, O) {
        return R - l.Easings.BounceEaseOut(O - S, 0, R, O) + w;
      },
      BounceEaseInOut(S, w, R, O) {
        return S < O / 2 ? l.Easings.BounceEaseIn(S * 2, 0, R, O) * 0.5 + w : l.Easings.BounceEaseOut(S * 2 - O, 0, R, O) * 0.5 + R * 0.5 + w;
      },
      EaseIn(S, w, R, O) {
        return R * (S /= O) * S + w;
      },
      EaseOut(S, w, R, O) {
        return -R * (S /= O) * (S - 2) + w;
      },
      EaseInOut(S, w, R, O) {
        return (S /= O / 2) < 1 ? R / 2 * S * S + w : -R / 2 * (--S * (S - 2) - 1) + w;
      },
      StrongEaseIn(S, w, R, O) {
        return R * (S /= O) * S * S * S * S + w;
      },
      StrongEaseOut(S, w, R, O) {
        return R * ((S = S / O - 1) * S * S * S * S + 1) + w;
      },
      StrongEaseInOut(S, w, R, O) {
        return (S /= O / 2) < 1 ? R / 2 * S * S * S * S * S + w : R / 2 * ((S -= 2) * S * S * S * S + 2) + w;
      },
      Linear(S, w, R, O) {
        return R * S / O + w;
      }
    };
  })(ef)), ef;
}
var kh;
function cf() {
  return kh || (kh = 1, (function(l) {
    Object.defineProperty(l, "__esModule", { value: !0 }), l.Konva = void 0;
    const d = Ze(), _ = Xt(), L = sn(), N = nd(), C = T1(), f = z0(), m = N1(), g = gf(), x = pf(), k = Fn(), F = mf(), E = F1(), S = I0(), w = td();
    l.Konva = _.Util._assign(d.Konva, {
      Util: _.Util,
      Transform: _.Transform,
      Node: L.Node,
      Container: N.Container,
      Stage: C.Stage,
      stages: C.stages,
      Layer: f.Layer,
      FastLayer: m.FastLayer,
      Group: g.Group,
      DD: x.DD,
      Shape: k.Shape,
      shapes: k.shapes,
      Animation: F.Animation,
      Tween: E.Tween,
      Easings: E.Easings,
      Context: S.Context,
      Canvas: w.Canvas
    }), l.default = l.Konva;
  })(Yd)), Yd;
}
var ba = {}, Eh;
function M1() {
  if (Eh) return ba;
  Eh = 1, Object.defineProperty(ba, "__esModule", { value: !0 }), ba.Arc = void 0;
  const l = st(), d = Fn(), _ = Ze(), L = lt(), N = Ze();
  let C = class extends d.Shape {
    _sceneFunc(m) {
      const g = _.Konva.getAngle(this.angle()), x = this.clockwise();
      m.beginPath(), m.arc(0, 0, this.outerRadius(), 0, g, x), m.arc(0, 0, this.innerRadius(), g, 0, !x), m.closePath(), m.fillStrokeShape(this);
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
      const m = this.innerRadius(), g = this.outerRadius(), x = this.clockwise(), k = _.Konva.getAngle(x ? 360 - this.angle() : this.angle()), F = Math.cos(Math.min(k, Math.PI)), E = 1, S = Math.sin(Math.min(Math.max(Math.PI, k), 3 * Math.PI / 2)), w = Math.sin(Math.min(k, Math.PI / 2)), R = F * (F > 0 ? m : g), O = E * g, H = S * (S > 0 ? m : g), v = w * (w > 0 ? g : m);
      return {
        x: R,
        y: x ? -1 * v : H,
        width: O - R,
        height: v - H
      };
    }
  };
  return ba.Arc = C, C.prototype._centroid = !0, C.prototype.className = "Arc", C.prototype._attrsAffectingSize = [
    "innerRadius",
    "outerRadius",
    "angle",
    "clockwise"
  ], (0, N._registerNode)(C), l.Factory.addGetterSetter(C, "innerRadius", 0, (0, L.getNumberValidator)()), l.Factory.addGetterSetter(C, "outerRadius", 0, (0, L.getNumberValidator)()), l.Factory.addGetterSetter(C, "angle", 0, (0, L.getNumberValidator)()), l.Factory.addGetterSetter(C, "clockwise", !1, (0, L.getBooleanValidator)()), ba;
}
var Ja = {}, Za = {}, Ph;
function G0() {
  if (Ph) return Za;
  Ph = 1, Object.defineProperty(Za, "__esModule", { value: !0 }), Za.Line = void 0;
  const l = st(), d = Ze(), _ = Fn(), L = lt();
  function N(m, g, x, k, F, E, S) {
    const w = Math.sqrt(Math.pow(x - m, 2) + Math.pow(k - g, 2)), R = Math.sqrt(Math.pow(F - x, 2) + Math.pow(E - k, 2)), O = S * w / (w + R), H = S * R / (w + R), v = x - O * (F - m), h = k - O * (E - g), T = x + H * (F - m), I = k + H * (E - g);
    return [v, h, T, I];
  }
  function C(m, g) {
    const x = m.length, k = [];
    for (let F = 2; F < x - 2; F += 2) {
      const E = N(m[F - 2], m[F - 1], m[F], m[F + 1], m[F + 2], m[F + 3], g);
      isNaN(E[0]) || (k.push(E[0]), k.push(E[1]), k.push(m[F]), k.push(m[F + 1]), k.push(E[2]), k.push(E[3]));
    }
    return k;
  }
  class f extends _.Shape {
    constructor(g) {
      super(g), this.on("pointsChange.konva tensionChange.konva closedChange.konva bezierChange.konva", function() {
        this._clearCache("tensionPoints");
      });
    }
    _sceneFunc(g) {
      const x = this.points(), k = x.length, F = this.tension(), E = this.closed(), S = this.bezier();
      if (!k)
        return;
      let w = 0;
      if (g.beginPath(), g.moveTo(x[0], x[1]), F !== 0 && k > 4) {
        const R = this.getTensionPoints(), O = R.length;
        for (w = E ? 0 : 4, E || g.quadraticCurveTo(R[0], R[1], R[2], R[3]); w < O - 2; )
          g.bezierCurveTo(R[w++], R[w++], R[w++], R[w++], R[w++], R[w++]);
        E || g.quadraticCurveTo(R[O - 2], R[O - 1], x[k - 2], x[k - 1]);
      } else if (S)
        for (w = 2; w < k; )
          g.bezierCurveTo(x[w++], x[w++], x[w++], x[w++], x[w++], x[w++]);
      else
        for (w = 2; w < k; w += 2)
          g.lineTo(x[w], x[w + 1]);
      E ? (g.closePath(), g.fillStrokeShape(this)) : g.strokeShape(this);
    }
    getTensionPoints() {
      return this._getCache("tensionPoints", this._getTensionPoints);
    }
    _getTensionPoints() {
      return this.closed() ? this._getTensionPointsClosed() : C(this.points(), this.tension());
    }
    _getTensionPointsClosed() {
      const g = this.points(), x = g.length, k = this.tension(), F = N(g[x - 2], g[x - 1], g[0], g[1], g[2], g[3], k), E = N(g[x - 4], g[x - 3], g[x - 2], g[x - 1], g[0], g[1], k), S = C(g, k);
      return [F[2], F[3]].concat(S).concat([
        E[0],
        E[1],
        g[x - 2],
        g[x - 1],
        E[2],
        E[3],
        F[0],
        F[1],
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
      let x = g[0], k = g[0], F = g[1], E = g[1], S, w;
      for (let R = 0; R < g.length / 2; R++)
        S = g[R * 2], w = g[R * 2 + 1], x = Math.min(x, S), k = Math.max(k, S), F = Math.min(F, w), E = Math.max(E, w);
      return {
        x,
        y: F,
        width: k - x,
        height: E - F
      };
    }
  }
  return Za.Line = f, f.prototype.className = "Line", f.prototype._attrsAffectingSize = ["points", "bezier", "tension"], (0, d._registerNode)(f), l.Factory.addGetterSetter(f, "closed", !1), l.Factory.addGetterSetter(f, "bezier", !1), l.Factory.addGetterSetter(f, "tension", 0, (0, L.getNumberValidator)()), l.Factory.addGetterSetter(f, "points", [], (0, L.getNumberArrayValidator)()), Za;
}
var $a = {}, tf = {}, Rh;
function L1() {
  return Rh || (Rh = 1, (function(l) {
    Object.defineProperty(l, "__esModule", { value: !0 }), l.t2length = l.getQuadraticArcLength = l.getCubicArcLength = l.binomialCoefficients = l.cValues = l.tValues = void 0, l.tValues = [
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
    ], l.cValues = [
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
    ], l.binomialCoefficients = [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1]];
    const d = (f, m, g) => {
      let x, k;
      const E = g / 2;
      x = 0;
      for (let S = 0; S < 20; S++)
        k = E * l.tValues[20][S] + E, x += l.cValues[20][S] * L(f, m, k);
      return E * x;
    };
    l.getCubicArcLength = d;
    const _ = (f, m, g) => {
      g === void 0 && (g = 1);
      const x = f[0] - 2 * f[1] + f[2], k = m[0] - 2 * m[1] + m[2], F = 2 * f[1] - 2 * f[0], E = 2 * m[1] - 2 * m[0], S = 4 * (x * x + k * k), w = 4 * (x * F + k * E), R = F * F + E * E;
      if (S === 0)
        return g * Math.sqrt(Math.pow(f[2] - f[0], 2) + Math.pow(m[2] - m[0], 2));
      const O = w / (2 * S), H = R / S, v = g + O, h = H - O * O, T = v * v + h > 0 ? Math.sqrt(v * v + h) : 0, I = O * O + h > 0 ? Math.sqrt(O * O + h) : 0, j = O + Math.sqrt(O * O + h) !== 0 ? h * Math.log(Math.abs((v + T) / (O + I))) : 0;
      return Math.sqrt(S) / 2 * (v * T - O * I + j);
    };
    l.getQuadraticArcLength = _;
    function L(f, m, g) {
      const x = N(1, g, f), k = N(1, g, m), F = x * x + k * k;
      return Math.sqrt(F);
    }
    const N = (f, m, g) => {
      const x = g.length - 1;
      let k, F;
      if (x === 0)
        return 0;
      if (f === 0) {
        F = 0;
        for (let E = 0; E <= x; E++)
          F += l.binomialCoefficients[x][E] * Math.pow(1 - m, x - E) * Math.pow(m, E) * g[E];
        return F;
      } else {
        k = new Array(x);
        for (let E = 0; E < x; E++)
          k[E] = x * (g[E + 1] - g[E]);
        return N(f - 1, m, k);
      }
    }, C = (f, m, g) => {
      let x = 1, k = f / m, F = (f - g(k)) / m, E = 0;
      for (; x > 1e-3; ) {
        const S = g(k + F), w = Math.abs(f - S) / m;
        if (w < x)
          x = w, k += F;
        else {
          const R = g(k - F), O = Math.abs(f - R) / m;
          O < x ? (x = O, k -= F) : F /= 2;
        }
        if (E++, E > 500)
          break;
      }
      return k;
    };
    l.t2length = C;
  })(tf)), tf;
}
var Th;
function yf() {
  if (Th) return $a;
  Th = 1, Object.defineProperty($a, "__esModule", { value: !0 }), $a.Path = void 0;
  const l = st(), d = Ze(), _ = Fn(), L = L1();
  let N = class Cr extends _.Shape {
    constructor(f) {
      super(f), this.dataArray = [], this.pathLength = 0, this._readDataAttribute(), this.on("dataChange.konva", function() {
        this._readDataAttribute();
      });
    }
    _readDataAttribute() {
      this.dataArray = Cr.parsePathData(this.data()), this.pathLength = Cr.getPathLength(this.dataArray);
    }
    _sceneFunc(f) {
      const m = this.dataArray;
      f.beginPath();
      let g = !1;
      for (let x = 0; x < m.length; x++) {
        const k = m[x].command, F = m[x].points;
        switch (k) {
          case "L":
            f.lineTo(F[0], F[1]);
            break;
          case "M":
            f.moveTo(F[0], F[1]);
            break;
          case "C":
            f.bezierCurveTo(F[0], F[1], F[2], F[3], F[4], F[5]);
            break;
          case "Q":
            f.quadraticCurveTo(F[0], F[1], F[2], F[3]);
            break;
          case "A":
            const E = F[0], S = F[1], w = F[2], R = F[3], O = F[4], H = F[5], v = F[6], h = F[7], T = w > R ? w : R, I = w > R ? 1 : w / R, j = w > R ? R / w : 1;
            f.translate(E, S), f.rotate(v), f.scale(I, j), f.arc(0, 0, T, O, O + H, 1 - h), f.scale(1 / I, 1 / j), f.rotate(-v), f.translate(-E, -S);
            break;
          case "z":
            g = !0, f.closePath();
            break;
        }
      }
      !g && !this.hasFill() ? f.strokeShape(this) : f.fillStrokeShape(this);
    }
    getSelfRect() {
      let f = [];
      this.dataArray.forEach(function(S) {
        if (S.command === "A") {
          const w = S.points[4], R = S.points[5], O = S.points[4] + R;
          let H = Math.PI / 180;
          if (Math.abs(w - O) < H && (H = Math.abs(w - O)), R < 0)
            for (let v = w - H; v > O; v -= H) {
              const h = Cr.getPointOnEllipticalArc(S.points[0], S.points[1], S.points[2], S.points[3], v, 0);
              f.push(h.x, h.y);
            }
          else
            for (let v = w + H; v < O; v += H) {
              const h = Cr.getPointOnEllipticalArc(S.points[0], S.points[1], S.points[2], S.points[3], v, 0);
              f.push(h.x, h.y);
            }
        } else if (S.command === "C")
          for (let w = 0; w <= 1; w += 0.01) {
            const R = Cr.getPointOnCubicBezier(w, S.start.x, S.start.y, S.points[0], S.points[1], S.points[2], S.points[3], S.points[4], S.points[5]);
            f.push(R.x, R.y);
          }
        else
          f = f.concat(S.points);
      });
      let m = f[0], g = f[0], x = f[1], k = f[1], F, E;
      for (let S = 0; S < f.length / 2; S++)
        F = f[S * 2], E = f[S * 2 + 1], isNaN(F) || (m = Math.min(m, F), g = Math.max(g, F)), isNaN(E) || (x = Math.min(x, E), k = Math.max(k, E));
      return {
        x: m,
        y: x,
        width: g - m,
        height: k - x
      };
    }
    getLength() {
      return this.pathLength;
    }
    getPointAtLength(f) {
      return Cr.getPointAtLengthOfDataArray(f, this.dataArray);
    }
    static getLineLength(f, m, g, x) {
      return Math.sqrt((g - f) * (g - f) + (x - m) * (x - m));
    }
    static getPathLength(f) {
      let m = 0;
      for (let g = 0; g < f.length; ++g)
        m += f[g].pathLength;
      return m;
    }
    static getPointAtLengthOfDataArray(f, m) {
      let g, x = 0, k = m.length;
      if (!k)
        return null;
      for (; x < k && f > m[x].pathLength; )
        f -= m[x].pathLength, ++x;
      if (x === k)
        return g = m[x - 1].points.slice(-2), {
          x: g[0],
          y: g[1]
        };
      if (f < 0.01)
        return m[x].command === "M" ? (g = m[x].points.slice(0, 2), {
          x: g[0],
          y: g[1]
        }) : {
          x: m[x].start.x,
          y: m[x].start.y
        };
      const F = m[x], E = F.points;
      switch (F.command) {
        case "L":
          return Cr.getPointOnLine(f, F.start.x, F.start.y, E[0], E[1]);
        case "C":
          return Cr.getPointOnCubicBezier((0, L.t2length)(f, Cr.getPathLength(m), (T) => (0, L.getCubicArcLength)([F.start.x, E[0], E[2], E[4]], [F.start.y, E[1], E[3], E[5]], T)), F.start.x, F.start.y, E[0], E[1], E[2], E[3], E[4], E[5]);
        case "Q":
          return Cr.getPointOnQuadraticBezier((0, L.t2length)(f, Cr.getPathLength(m), (T) => (0, L.getQuadraticArcLength)([F.start.x, E[0], E[2]], [F.start.y, E[1], E[3]], T)), F.start.x, F.start.y, E[0], E[1], E[2], E[3]);
        case "A":
          const S = E[0], w = E[1], R = E[2], O = E[3], H = E[5], v = E[6];
          let h = E[4];
          return h += H * f / F.pathLength, Cr.getPointOnEllipticalArc(S, w, R, O, h, v);
      }
      return null;
    }
    static getPointOnLine(f, m, g, x, k, F, E) {
      F = F ?? m, E = E ?? g;
      const S = this.getLineLength(m, g, x, k);
      if (S < 1e-10)
        return { x: m, y: g };
      if (x === m)
        return { x: F, y: E + (k > g ? f : -f) };
      const w = (k - g) / (x - m), R = Math.sqrt(f * f / (1 + w * w)) * (x < m ? -1 : 1), O = w * R;
      if (Math.abs(E - g - w * (F - m)) < 1e-10)
        return { x: F + R, y: E + O };
      const H = ((F - m) * (x - m) + (E - g) * (k - g)) / (S * S), v = m + H * (x - m), h = g + H * (k - g), T = this.getLineLength(F, E, v, h), I = Math.sqrt(f * f - T * T), j = Math.sqrt(I * I / (1 + w * w)) * (x < m ? -1 : 1), J = w * j;
      return { x: v + j, y: h + J };
    }
    static getPointOnCubicBezier(f, m, g, x, k, F, E, S, w) {
      function R(I) {
        return I * I * I;
      }
      function O(I) {
        return 3 * I * I * (1 - I);
      }
      function H(I) {
        return 3 * I * (1 - I) * (1 - I);
      }
      function v(I) {
        return (1 - I) * (1 - I) * (1 - I);
      }
      const h = S * R(f) + F * O(f) + x * H(f) + m * v(f), T = w * R(f) + E * O(f) + k * H(f) + g * v(f);
      return { x: h, y: T };
    }
    static getPointOnQuadraticBezier(f, m, g, x, k, F, E) {
      function S(v) {
        return v * v;
      }
      function w(v) {
        return 2 * v * (1 - v);
      }
      function R(v) {
        return (1 - v) * (1 - v);
      }
      const O = F * S(f) + x * w(f) + m * R(f), H = E * S(f) + k * w(f) + g * R(f);
      return { x: O, y: H };
    }
    static getPointOnEllipticalArc(f, m, g, x, k, F) {
      const E = Math.cos(F), S = Math.sin(F), w = {
        x: g * Math.cos(k),
        y: x * Math.sin(k)
      };
      return {
        x: f + (w.x * E - w.y * S),
        y: m + (w.x * S + w.y * E)
      };
    }
    static parsePathData(f) {
      if (!f)
        return [];
      let m = f;
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
      for (let O = 0; O < g.length; O++)
        m = m.replace(new RegExp(g[O], "g"), "|" + g[O]);
      const x = m.split("|"), k = [], F = [];
      let E = 0, S = 0;
      const w = /([-+]?((\d+\.\d+)|((\d+)|(\.\d+)))(?:e[-+]?\d+)?)/gi;
      let R;
      for (let O = 1; O < x.length; O++) {
        let H = x[O], v = H.charAt(0);
        for (H = H.slice(1), F.length = 0; R = w.exec(H); )
          F.push(R[0]);
        const h = [];
        for (let T = 0, I = F.length; T < I; T++) {
          if (F[T] === "00") {
            h.push(0, 0);
            continue;
          }
          const j = parseFloat(F[T]);
          isNaN(j) ? h.push(0) : h.push(j);
        }
        for (; h.length > 0 && !isNaN(h[0]); ) {
          let T = "", I = [];
          const j = E, J = S;
          let z, U, G, Y, Z, ne, re, ee, Q, P;
          switch (v) {
            case "l":
              E += h.shift(), S += h.shift(), T = "L", I.push(E, S);
              break;
            case "L":
              E = h.shift(), S = h.shift(), I.push(E, S);
              break;
            case "m":
              const D = h.shift(), W = h.shift();
              if (E += D, S += W, T = "M", k.length > 2 && k[k.length - 1].command === "z") {
                for (let B = k.length - 2; B >= 0; B--)
                  if (k[B].command === "M") {
                    E = k[B].points[0] + D, S = k[B].points[1] + W;
                    break;
                  }
              }
              I.push(E, S), v = "l";
              break;
            case "M":
              E = h.shift(), S = h.shift(), T = "M", I.push(E, S), v = "L";
              break;
            case "h":
              E += h.shift(), T = "L", I.push(E, S);
              break;
            case "H":
              E = h.shift(), T = "L", I.push(E, S);
              break;
            case "v":
              S += h.shift(), T = "L", I.push(E, S);
              break;
            case "V":
              S = h.shift(), T = "L", I.push(E, S);
              break;
            case "C":
              I.push(h.shift(), h.shift(), h.shift(), h.shift()), E = h.shift(), S = h.shift(), I.push(E, S);
              break;
            case "c":
              I.push(E + h.shift(), S + h.shift(), E + h.shift(), S + h.shift()), E += h.shift(), S += h.shift(), T = "C", I.push(E, S);
              break;
            case "S":
              U = E, G = S, z = k[k.length - 1], z.command === "C" && (U = E + (E - z.points[2]), G = S + (S - z.points[3])), I.push(U, G, h.shift(), h.shift()), E = h.shift(), S = h.shift(), T = "C", I.push(E, S);
              break;
            case "s":
              U = E, G = S, z = k[k.length - 1], z.command === "C" && (U = E + (E - z.points[2]), G = S + (S - z.points[3])), I.push(U, G, E + h.shift(), S + h.shift()), E += h.shift(), S += h.shift(), T = "C", I.push(E, S);
              break;
            case "Q":
              I.push(h.shift(), h.shift()), E = h.shift(), S = h.shift(), I.push(E, S);
              break;
            case "q":
              I.push(E + h.shift(), S + h.shift()), E += h.shift(), S += h.shift(), T = "Q", I.push(E, S);
              break;
            case "T":
              U = E, G = S, z = k[k.length - 1], z.command === "Q" && (U = E + (E - z.points[0]), G = S + (S - z.points[1])), E = h.shift(), S = h.shift(), T = "Q", I.push(U, G, E, S);
              break;
            case "t":
              U = E, G = S, z = k[k.length - 1], z.command === "Q" && (U = E + (E - z.points[0]), G = S + (S - z.points[1])), E += h.shift(), S += h.shift(), T = "Q", I.push(U, G, E, S);
              break;
            case "A":
              Y = h.shift(), Z = h.shift(), ne = h.shift(), re = h.shift(), ee = h.shift(), Q = E, P = S, E = h.shift(), S = h.shift(), T = "A", I = this.convertEndpointToCenterParameterization(Q, P, E, S, re, ee, Y, Z, ne);
              break;
            case "a":
              Y = h.shift(), Z = h.shift(), ne = h.shift(), re = h.shift(), ee = h.shift(), Q = E, P = S, E += h.shift(), S += h.shift(), T = "A", I = this.convertEndpointToCenterParameterization(Q, P, E, S, re, ee, Y, Z, ne);
              break;
          }
          k.push({
            command: T || v,
            points: I,
            start: {
              x: j,
              y: J
            },
            pathLength: this.calcLength(j, J, T || v, I)
          });
        }
        (v === "z" || v === "Z") && k.push({
          command: "z",
          points: [],
          start: void 0,
          pathLength: 0
        });
      }
      return k;
    }
    static calcLength(f, m, g, x) {
      let k, F, E, S;
      const w = Cr;
      switch (g) {
        case "L":
          return w.getLineLength(f, m, x[0], x[1]);
        case "C":
          return (0, L.getCubicArcLength)([f, x[0], x[2], x[4]], [m, x[1], x[3], x[5]], 1);
        case "Q":
          return (0, L.getQuadraticArcLength)([f, x[0], x[2]], [m, x[1], x[3]], 1);
        case "A":
          k = 0;
          const R = x[4], O = x[5], H = x[4] + O;
          let v = Math.PI / 180;
          if (Math.abs(R - H) < v && (v = Math.abs(R - H)), F = w.getPointOnEllipticalArc(x[0], x[1], x[2], x[3], R, 0), O < 0)
            for (S = R - v; S > H; S -= v)
              E = w.getPointOnEllipticalArc(x[0], x[1], x[2], x[3], S, 0), k += w.getLineLength(F.x, F.y, E.x, E.y), F = E;
          else
            for (S = R + v; S < H; S += v)
              E = w.getPointOnEllipticalArc(x[0], x[1], x[2], x[3], S, 0), k += w.getLineLength(F.x, F.y, E.x, E.y), F = E;
          return E = w.getPointOnEllipticalArc(x[0], x[1], x[2], x[3], H, 0), k += w.getLineLength(F.x, F.y, E.x, E.y), k;
      }
      return 0;
    }
    static convertEndpointToCenterParameterization(f, m, g, x, k, F, E, S, w) {
      const R = w * (Math.PI / 180), O = Math.cos(R) * (f - g) / 2 + Math.sin(R) * (m - x) / 2, H = -1 * Math.sin(R) * (f - g) / 2 + Math.cos(R) * (m - x) / 2, v = O * O / (E * E) + H * H / (S * S);
      v > 1 && (E *= Math.sqrt(v), S *= Math.sqrt(v));
      let h = Math.sqrt((E * E * (S * S) - E * E * (H * H) - S * S * (O * O)) / (E * E * (H * H) + S * S * (O * O)));
      k === F && (h *= -1), isNaN(h) && (h = 0);
      const T = h * E * H / S, I = h * -S * O / E, j = (f + g) / 2 + Math.cos(R) * T - Math.sin(R) * I, J = (m + x) / 2 + Math.sin(R) * T + Math.cos(R) * I, z = function(ee) {
        return Math.sqrt(ee[0] * ee[0] + ee[1] * ee[1]);
      }, U = function(ee, Q) {
        return (ee[0] * Q[0] + ee[1] * Q[1]) / (z(ee) * z(Q));
      }, G = function(ee, Q) {
        return (ee[0] * Q[1] < ee[1] * Q[0] ? -1 : 1) * Math.acos(U(ee, Q));
      }, Y = G([1, 0], [(O - T) / E, (H - I) / S]), Z = [(O - T) / E, (H - I) / S], ne = [(-1 * O - T) / E, (-1 * H - I) / S];
      let re = G(Z, ne);
      return U(Z, ne) <= -1 && (re = Math.PI), U(Z, ne) >= 1 && (re = 0), F === 0 && re > 0 && (re = re - 2 * Math.PI), F === 1 && re < 0 && (re = re + 2 * Math.PI), [j, J, E, S, Y, re, R, F];
    }
  };
  return $a.Path = N, N.prototype.className = "Path", N.prototype._attrsAffectingSize = ["data"], (0, d._registerNode)(N), l.Factory.addGetterSetter(N, "data"), $a;
}
var Nh;
function A1() {
  if (Nh) return Ja;
  Nh = 1, Object.defineProperty(Ja, "__esModule", { value: !0 }), Ja.Arrow = void 0;
  const l = st(), d = G0(), _ = lt(), L = Ze(), N = yf();
  let C = class extends d.Line {
    _sceneFunc(m) {
      super._sceneFunc(m);
      const g = Math.PI * 2, x = this.points();
      let k = x;
      const F = this.tension() !== 0 && x.length > 4;
      F && (k = this.getTensionPoints());
      const E = this.pointerLength(), S = x.length;
      let w, R;
      if (F) {
        const v = [
          k[k.length - 4],
          k[k.length - 3],
          k[k.length - 2],
          k[k.length - 1],
          x[S - 2],
          x[S - 1]
        ], h = N.Path.calcLength(k[k.length - 4], k[k.length - 3], "C", v), T = N.Path.getPointOnQuadraticBezier(Math.min(1, 1 - E / h), v[0], v[1], v[2], v[3], v[4], v[5]);
        w = x[S - 2] - T.x, R = x[S - 1] - T.y;
      } else
        w = x[S - 2] - x[S - 4], R = x[S - 1] - x[S - 3];
      const O = (Math.atan2(R, w) + g) % g, H = this.pointerWidth();
      this.pointerAtEnding() && (m.save(), m.beginPath(), m.translate(x[S - 2], x[S - 1]), m.rotate(O), m.moveTo(0, 0), m.lineTo(-E, H / 2), m.lineTo(-E, -H / 2), m.closePath(), m.restore(), this.__fillStroke(m)), this.pointerAtBeginning() && (m.save(), m.beginPath(), m.translate(x[0], x[1]), F ? (w = (k[0] + k[2]) / 2 - x[0], R = (k[1] + k[3]) / 2 - x[1]) : (w = x[2] - x[0], R = x[3] - x[1]), m.rotate((Math.atan2(-R, -w) + g) % g), m.moveTo(0, 0), m.lineTo(-E, H / 2), m.lineTo(-E, -H / 2), m.closePath(), m.restore(), this.__fillStroke(m));
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
  return Ja.Arrow = C, C.prototype.className = "Arrow", (0, L._registerNode)(C), l.Factory.addGetterSetter(C, "pointerLength", 10, (0, _.getNumberValidator)()), l.Factory.addGetterSetter(C, "pointerWidth", 10, (0, _.getNumberValidator)()), l.Factory.addGetterSetter(C, "pointerAtBeginning", !1), l.Factory.addGetterSetter(C, "pointerAtEnding", !0), Ja;
}
var eu = {}, Fh;
function O1() {
  if (Fh) return eu;
  Fh = 1, Object.defineProperty(eu, "__esModule", { value: !0 }), eu.Circle = void 0;
  const l = st(), d = Fn(), _ = lt(), L = Ze();
  class N extends d.Shape {
    _sceneFunc(f) {
      f.beginPath(), f.arc(0, 0, this.attrs.radius || 0, 0, Math.PI * 2, !1), f.closePath(), f.fillStrokeShape(this);
    }
    getWidth() {
      return this.radius() * 2;
    }
    getHeight() {
      return this.radius() * 2;
    }
    setWidth(f) {
      this.radius() !== f / 2 && this.radius(f / 2);
    }
    setHeight(f) {
      this.radius() !== f / 2 && this.radius(f / 2);
    }
  }
  return eu.Circle = N, N.prototype._centroid = !0, N.prototype.className = "Circle", N.prototype._attrsAffectingSize = ["radius"], (0, L._registerNode)(N), l.Factory.addGetterSetter(N, "radius", 0, (0, _.getNumberValidator)()), eu;
}
var tu = {}, Mh;
function I1() {
  if (Mh) return tu;
  Mh = 1, Object.defineProperty(tu, "__esModule", { value: !0 }), tu.Ellipse = void 0;
  const l = st(), d = Fn(), _ = lt(), L = Ze();
  let N = class extends d.Shape {
    _sceneFunc(f) {
      const m = this.radiusX(), g = this.radiusY();
      f.beginPath(), f.save(), m !== g && f.scale(1, g / m), f.arc(0, 0, m, 0, Math.PI * 2, !1), f.restore(), f.closePath(), f.fillStrokeShape(this);
    }
    getWidth() {
      return this.radiusX() * 2;
    }
    getHeight() {
      return this.radiusY() * 2;
    }
    setWidth(f) {
      this.radiusX(f / 2);
    }
    setHeight(f) {
      this.radiusY(f / 2);
    }
  };
  return tu.Ellipse = N, N.prototype.className = "Ellipse", N.prototype._centroid = !0, N.prototype._attrsAffectingSize = ["radiusX", "radiusY"], (0, L._registerNode)(N), l.Factory.addComponentsGetterSetter(N, "radius", ["x", "y"]), l.Factory.addGetterSetter(N, "radiusX", 0, (0, _.getNumberValidator)()), l.Factory.addGetterSetter(N, "radiusY", 0, (0, _.getNumberValidator)()), tu;
}
var nu = {}, Lh;
function D1() {
  if (Lh) return nu;
  Lh = 1, Object.defineProperty(nu, "__esModule", { value: !0 }), nu.Image = void 0;
  const l = Xt(), d = st(), _ = Fn(), L = Ze(), N = lt();
  class C extends _.Shape {
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
      const g = this.getWidth(), x = this.getHeight(), k = this.cornerRadius(), F = this.attrs.image;
      let E;
      if (F) {
        const S = this.attrs.cropWidth, w = this.attrs.cropHeight;
        S && w ? E = [
          F,
          this.cropX(),
          this.cropY(),
          S,
          w,
          0,
          0,
          g,
          x
        ] : E = [F, 0, 0, g, x];
      }
      (this.hasFill() || this.hasStroke() || k) && (m.beginPath(), k ? l.Util.drawRoundedRectPath(m, g, x, k) : m.rect(0, 0, g, x), m.closePath(), m.fillStrokeShape(this)), F && (k && m.clip(), m.drawImage.apply(m, E));
    }
    _hitFunc(m) {
      const g = this.width(), x = this.height(), k = this.cornerRadius();
      m.beginPath(), k ? l.Util.drawRoundedRectPath(m, g, x, k) : m.rect(0, 0, g, x), m.closePath(), m.fillStrokeShape(this);
    }
    getWidth() {
      var m, g;
      return (m = this.attrs.width) !== null && m !== void 0 ? m : (g = this.image()) === null || g === void 0 ? void 0 : g.width;
    }
    getHeight() {
      var m, g;
      return (m = this.attrs.height) !== null && m !== void 0 ? m : (g = this.image()) === null || g === void 0 ? void 0 : g.height;
    }
    static fromURL(m, g, x = null) {
      const k = l.Util.createImageElement();
      k.onload = function() {
        const F = new C({
          image: k
        });
        g(F);
      }, k.onerror = x, k.crossOrigin = "Anonymous", k.src = m;
    }
  }
  return nu.Image = C, C.prototype.className = "Image", (0, L._registerNode)(C), d.Factory.addGetterSetter(C, "cornerRadius", 0, (0, N.getNumberOrArrayOfNumbersValidator)(4)), d.Factory.addGetterSetter(C, "image"), d.Factory.addComponentsGetterSetter(C, "crop", ["x", "y", "width", "height"]), d.Factory.addGetterSetter(C, "cropX", 0, (0, N.getNumberValidator)()), d.Factory.addGetterSetter(C, "cropY", 0, (0, N.getNumberValidator)()), d.Factory.addGetterSetter(C, "cropWidth", 0, (0, N.getNumberValidator)()), d.Factory.addGetterSetter(C, "cropHeight", 0, (0, N.getNumberValidator)()), nu;
}
var qo = {}, Ah;
function z1() {
  if (Ah) return qo;
  Ah = 1, Object.defineProperty(qo, "__esModule", { value: !0 }), qo.Tag = qo.Label = void 0;
  const l = st(), d = Fn(), _ = gf(), L = lt(), N = Ze(), C = [
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
  ], f = "Change.konva", m = "none", g = "up", x = "right", k = "down", F = "left", E = C.length;
  let S = class extends _.Group {
    constructor(O) {
      super(O), this.on("add.konva", function(H) {
        this._addListeners(H.child), this._sync();
      });
    }
    getText() {
      return this.find("Text")[0];
    }
    getTag() {
      return this.find("Tag")[0];
    }
    _addListeners(O) {
      let H = this, v;
      const h = function() {
        H._sync();
      };
      for (v = 0; v < E; v++)
        O.on(C[v] + f, h);
    }
    getWidth() {
      return this.getText().width();
    }
    getHeight() {
      return this.getText().height();
    }
    _sync() {
      let O = this.getText(), H = this.getTag(), v, h, T, I, j, J, z;
      if (O && H) {
        switch (v = O.width(), h = O.height(), T = H.pointerDirection(), I = H.pointerWidth(), z = H.pointerHeight(), j = 0, J = 0, T) {
          case g:
            j = v / 2, J = -1 * z;
            break;
          case x:
            j = v + I, J = h / 2;
            break;
          case k:
            j = v / 2, J = h + z;
            break;
          case F:
            j = -1 * I, J = h / 2;
            break;
        }
        H.setAttrs({
          x: -1 * j,
          y: -1 * J,
          width: v,
          height: h
        }), O.setAttrs({
          x: -1 * j,
          y: -1 * J
        });
      }
    }
  };
  qo.Label = S, S.prototype.className = "Label", (0, N._registerNode)(S);
  class w extends d.Shape {
    _sceneFunc(O) {
      const H = this.width(), v = this.height(), h = this.pointerDirection(), T = this.pointerWidth(), I = this.pointerHeight(), j = this.cornerRadius();
      let J = 0, z = 0, U = 0, G = 0;
      typeof j == "number" ? J = z = U = G = Math.min(j, H / 2, v / 2) : (J = Math.min(j[0] || 0, H / 2, v / 2), z = Math.min(j[1] || 0, H / 2, v / 2), G = Math.min(j[2] || 0, H / 2, v / 2), U = Math.min(j[3] || 0, H / 2, v / 2)), O.beginPath(), O.moveTo(J, 0), h === g && (O.lineTo((H - T) / 2, 0), O.lineTo(H / 2, -1 * I), O.lineTo((H + T) / 2, 0)), O.lineTo(H - z, 0), O.arc(H - z, z, z, Math.PI * 3 / 2, 0, !1), h === x && (O.lineTo(H, (v - I) / 2), O.lineTo(H + T, v / 2), O.lineTo(H, (v + I) / 2)), O.lineTo(H, v - G), O.arc(H - G, v - G, G, 0, Math.PI / 2, !1), h === k && (O.lineTo((H + T) / 2, v), O.lineTo(H / 2, v + I), O.lineTo((H - T) / 2, v)), O.lineTo(U, v), O.arc(U, v - U, U, Math.PI / 2, Math.PI, !1), h === F && (O.lineTo(0, (v + I) / 2), O.lineTo(-1 * T, v / 2), O.lineTo(0, (v - I) / 2)), O.lineTo(0, J), O.arc(J, J, J, Math.PI, Math.PI * 3 / 2, !1), O.closePath(), O.fillStrokeShape(this);
    }
    getSelfRect() {
      let O = 0, H = 0, v = this.pointerWidth(), h = this.pointerHeight(), T = this.pointerDirection(), I = this.width(), j = this.height();
      return T === g ? (H -= h, j += h) : T === k ? j += h : T === F ? (O -= v * 1.5, I += v) : T === x && (I += v * 1.5), {
        x: O,
        y: H,
        width: I,
        height: j
      };
    }
  }
  return qo.Tag = w, w.prototype.className = "Tag", (0, N._registerNode)(w), l.Factory.addGetterSetter(w, "pointerDirection", m), l.Factory.addGetterSetter(w, "pointerWidth", 0, (0, L.getNumberValidator)()), l.Factory.addGetterSetter(w, "pointerHeight", 0, (0, L.getNumberValidator)()), l.Factory.addGetterSetter(w, "cornerRadius", 0, (0, L.getNumberOrArrayOfNumbersValidator)(4)), qo;
}
var ru = {}, Oh;
function U0() {
  if (Oh) return ru;
  Oh = 1, Object.defineProperty(ru, "__esModule", { value: !0 }), ru.Rect = void 0;
  const l = st(), d = Fn(), _ = Ze(), L = Xt(), N = lt();
  class C extends d.Shape {
    _sceneFunc(m) {
      const g = this.cornerRadius(), x = this.width(), k = this.height();
      m.beginPath(), g ? L.Util.drawRoundedRectPath(m, x, k, g) : m.rect(0, 0, x, k), m.closePath(), m.fillStrokeShape(this);
    }
  }
  return ru.Rect = C, C.prototype.className = "Rect", (0, _._registerNode)(C), l.Factory.addGetterSetter(C, "cornerRadius", 0, (0, N.getNumberOrArrayOfNumbersValidator)(4)), ru;
}
var iu = {}, Ih;
function G1() {
  if (Ih) return iu;
  Ih = 1, Object.defineProperty(iu, "__esModule", { value: !0 }), iu.RegularPolygon = void 0;
  const l = st(), d = Fn(), _ = lt(), L = Ze();
  let N = class extends d.Shape {
    _sceneFunc(f) {
      const m = this._getPoints();
      f.beginPath(), f.moveTo(m[0].x, m[0].y);
      for (let g = 1; g < m.length; g++)
        f.lineTo(m[g].x, m[g].y);
      f.closePath(), f.fillStrokeShape(this);
    }
    _getPoints() {
      const f = this.attrs.sides, m = this.attrs.radius || 0, g = [];
      for (let x = 0; x < f; x++)
        g.push({
          x: m * Math.sin(x * 2 * Math.PI / f),
          y: -1 * m * Math.cos(x * 2 * Math.PI / f)
        });
      return g;
    }
    getSelfRect() {
      const f = this._getPoints();
      let m = f[0].x, g = f[0].y, x = f[0].x, k = f[0].y;
      return f.forEach((F) => {
        m = Math.min(m, F.x), g = Math.max(g, F.x), x = Math.min(x, F.y), k = Math.max(k, F.y);
      }), {
        x: m,
        y: x,
        width: g - m,
        height: k - x
      };
    }
    getWidth() {
      return this.radius() * 2;
    }
    getHeight() {
      return this.radius() * 2;
    }
    setWidth(f) {
      this.radius(f / 2);
    }
    setHeight(f) {
      this.radius(f / 2);
    }
  };
  return iu.RegularPolygon = N, N.prototype.className = "RegularPolygon", N.prototype._centroid = !0, N.prototype._attrsAffectingSize = ["radius"], (0, L._registerNode)(N), l.Factory.addGetterSetter(N, "radius", 0, (0, _.getNumberValidator)()), l.Factory.addGetterSetter(N, "sides", 0, (0, _.getNumberValidator)()), iu;
}
var su = {}, Dh;
function U1() {
  if (Dh) return su;
  Dh = 1, Object.defineProperty(su, "__esModule", { value: !0 }), su.Ring = void 0;
  const l = st(), d = Fn(), _ = lt(), L = Ze(), N = Math.PI * 2;
  let C = class extends d.Shape {
    _sceneFunc(m) {
      m.beginPath(), m.arc(0, 0, this.innerRadius(), 0, N, !1), m.moveTo(this.outerRadius(), 0), m.arc(0, 0, this.outerRadius(), N, 0, !0), m.closePath(), m.fillStrokeShape(this);
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
  return su.Ring = C, C.prototype.className = "Ring", C.prototype._centroid = !0, C.prototype._attrsAffectingSize = ["innerRadius", "outerRadius"], (0, L._registerNode)(C), l.Factory.addGetterSetter(C, "innerRadius", 0, (0, _.getNumberValidator)()), l.Factory.addGetterSetter(C, "outerRadius", 0, (0, _.getNumberValidator)()), su;
}
var ou = {}, zh;
function B1() {
  if (zh) return ou;
  zh = 1, Object.defineProperty(ou, "__esModule", { value: !0 }), ou.Sprite = void 0;
  const l = st(), d = Fn(), _ = mf(), L = lt(), N = Ze();
  let C = class extends d.Shape {
    constructor(m) {
      super(m), this._updated = !0, this.anim = new _.Animation(() => {
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
      const g = this.animation(), x = this.frameIndex(), k = x * 4, F = this.animations()[g], E = this.frameOffsets(), S = F[k + 0], w = F[k + 1], R = F[k + 2], O = F[k + 3], H = this.image();
      if ((this.hasFill() || this.hasStroke()) && (m.beginPath(), m.rect(0, 0, R, O), m.closePath(), m.fillStrokeShape(this)), H)
        if (E) {
          const v = E[g], h = x * 2;
          m.drawImage(H, S, w, R, O, v[h + 0], v[h + 1], R, O);
        } else
          m.drawImage(H, S, w, R, O, 0, 0, R, O);
    }
    _hitFunc(m) {
      const g = this.animation(), x = this.frameIndex(), k = x * 4, F = this.animations()[g], E = this.frameOffsets(), S = F[k + 2], w = F[k + 3];
      if (m.beginPath(), E) {
        const R = E[g], O = x * 2;
        m.rect(R[O + 0], R[O + 1], S, w);
      } else
        m.rect(0, 0, S, w);
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
      const m = this.frameIndex(), g = this.animation(), x = this.animations(), k = x[g], F = k.length / 4;
      m < F - 1 ? this.frameIndex(m + 1) : this.frameIndex(0);
    }
  };
  return ou.Sprite = C, C.prototype.className = "Sprite", (0, N._registerNode)(C), l.Factory.addGetterSetter(C, "animation"), l.Factory.addGetterSetter(C, "animations"), l.Factory.addGetterSetter(C, "frameOffsets"), l.Factory.addGetterSetter(C, "image"), l.Factory.addGetterSetter(C, "frameIndex", 0, (0, L.getNumberValidator)()), l.Factory.addGetterSetter(C, "frameRate", 17, (0, L.getNumberValidator)()), l.Factory.backCompat(C, {
    index: "frameIndex",
    getIndex: "getFrameIndex",
    setIndex: "setFrameIndex"
  }), ou;
}
var lu = {}, Gh;
function V1() {
  if (Gh) return lu;
  Gh = 1, Object.defineProperty(lu, "__esModule", { value: !0 }), lu.Star = void 0;
  const l = st(), d = Fn(), _ = lt(), L = Ze();
  let N = class extends d.Shape {
    _sceneFunc(f) {
      const m = this.innerRadius(), g = this.outerRadius(), x = this.numPoints();
      f.beginPath(), f.moveTo(0, 0 - g);
      for (let k = 1; k < x * 2; k++) {
        const F = k % 2 === 0 ? g : m, E = F * Math.sin(k * Math.PI / x), S = -1 * F * Math.cos(k * Math.PI / x);
        f.lineTo(E, S);
      }
      f.closePath(), f.fillStrokeShape(this);
    }
    getWidth() {
      return this.outerRadius() * 2;
    }
    getHeight() {
      return this.outerRadius() * 2;
    }
    setWidth(f) {
      this.outerRadius(f / 2);
    }
    setHeight(f) {
      this.outerRadius(f / 2);
    }
  };
  return lu.Star = N, N.prototype.className = "Star", N.prototype._centroid = !0, N.prototype._attrsAffectingSize = ["innerRadius", "outerRadius"], (0, L._registerNode)(N), l.Factory.addGetterSetter(N, "numPoints", 5, (0, _.getNumberValidator)()), l.Factory.addGetterSetter(N, "innerRadius", 0, (0, _.getNumberValidator)()), l.Factory.addGetterSetter(N, "outerRadius", 0, (0, _.getNumberValidator)()), lu;
}
var Xl = {}, Uh;
function B0() {
  if (Uh) return Xl;
  Uh = 1, Object.defineProperty(Xl, "__esModule", { value: !0 }), Xl.Text = void 0, Xl.stringToArray = f;
  const l = Xt(), d = st(), _ = Fn(), L = Ze(), N = lt(), C = Ze();
  function f(X) {
    return [...X].reduce((b, ce, me, oe) => {
      if (new RegExp("\\p{Emoji}", "u").test(ce)) {
        const q = oe[me + 1];
        q && new RegExp("\\p{Emoji_Modifier}|\\u200D", "u").test(q) ? (b.push(ce + q), oe[me + 1] = "") : b.push(ce);
      } else new RegExp("\\p{Regional_Indicator}{2}", "u").test(ce + (oe[me + 1] || "")) ? b.push(ce + oe[me + 1]) : me > 0 && new RegExp("\\p{Mn}|\\p{Me}|\\p{Mc}", "u").test(ce) ? b[b.length - 1] += ce : ce && b.push(ce);
      return b;
    }, []);
  }
  const m = "auto", g = "center", x = "inherit", k = "justify", F = "Change.konva", E = "2d", S = "-", w = "left", R = "text", O = "Text", H = "top", v = "bottom", h = "middle", T = "normal", I = "px ", j = " ", J = "right", z = "rtl", U = "word", G = "char", Y = "none", Z = "…", ne = [
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
  ], re = ne.length;
  function ee(X) {
    return X.split(",").map((b) => {
      b = b.trim();
      const ce = b.indexOf(" ") >= 0, me = b.indexOf('"') >= 0 || b.indexOf("'") >= 0;
      return ce && !me && (b = `"${b}"`), b;
    }).join(", ");
  }
  let Q;
  function P() {
    return Q || (Q = l.Util.createCanvasElement().getContext(E), Q);
  }
  function D(X) {
    X.fillText(this._partialText, this._partialTextX, this._partialTextY);
  }
  function W(X) {
    X.setAttr("miterLimit", 2), X.strokeText(this._partialText, this._partialTextX, this._partialTextY);
  }
  function B(X) {
    return X = X || {}, !X.fillLinearGradientColorStops && !X.fillRadialGradientColorStops && !X.fillPatternImage && (X.fill = X.fill || "black"), X;
  }
  let M = class extends _.Shape {
    constructor(b) {
      super(B(b)), this._partialTextX = 0, this._partialTextY = 0;
      for (let ce = 0; ce < re; ce++)
        this.on(ne[ce] + F, this._setTextData);
      this._setTextData();
    }
    _sceneFunc(b) {
      const ce = this.textArr, me = ce.length;
      if (!this.text())
        return;
      let oe = this.padding(), q = this.fontSize(), se = this.lineHeight() * q, ge = this.verticalAlign(), ye = this.direction(), Re = 0, Be = this.align(), Ge = this.getWidth(), rt = this.letterSpacing(), We = this.fill(), Dt = this.textDecoration(), $e = Dt.indexOf("underline") !== -1, gt = Dt.indexOf("line-through") !== -1, Ut;
      ye = ye === x ? b.direction : ye;
      let kt = se / 2, _t = h;
      if (L.Konva._fixTextRendering) {
        const ut = this.measureSize("M");
        _t = "alphabetic", kt = (ut.fontBoundingBoxAscent - ut.fontBoundingBoxDescent) / 2 + se / 2;
      }
      for (ye === z && b.setAttr("direction", ye), b.setAttr("font", this._getContextFont()), b.setAttr("textBaseline", _t), b.setAttr("textAlign", w), ge === h ? Re = (this.getHeight() - me * se - oe * 2) / 2 : ge === v && (Re = this.getHeight() - me * se - oe * 2), b.translate(oe, Re + oe), Ut = 0; Ut < me; Ut++) {
        let ut = 0, Sn = 0;
        const Qt = ce[Ut], fr = Qt.text, jt = Qt.width, Mn = Qt.lastInParagraph;
        if (b.save(), Be === J ? ut += Ge - jt - oe * 2 : Be === g && (ut += (Ge - jt - oe * 2) / 2), $e) {
          b.save(), b.beginPath();
          const on = L.Konva._fixTextRendering ? Math.round(q / 4) : Math.round(q / 2), Ln = ut, At = kt + Sn + on;
          b.moveTo(Ln, At);
          const Ot = Be === k && !Mn ? Ge - oe * 2 : jt;
          b.lineTo(Ln + Math.round(Ot), At), b.lineWidth = q / 15;
          const Lr = this._getLinearGradient();
          b.strokeStyle = Lr || We, b.stroke(), b.restore();
        }
        if (gt) {
          b.save(), b.beginPath();
          const on = L.Konva._fixTextRendering ? -Math.round(q / 4) : 0;
          b.moveTo(ut, kt + Sn + on);
          const Ln = Be === k && !Mn ? Ge - oe * 2 : jt;
          b.lineTo(ut + Math.round(Ln), kt + Sn + on), b.lineWidth = q / 15;
          const At = this._getLinearGradient();
          b.strokeStyle = At || We, b.stroke(), b.restore();
        }
        if (ye !== z && (rt !== 0 || Be === k)) {
          const on = fr.split(" ").length - 1, Ln = f(fr);
          for (let At = 0; At < Ln.length; At++) {
            const Ot = Ln[At];
            Ot === " " && !Mn && Be === k && (ut += (Ge - oe * 2 - jt) / on), this._partialTextX = ut, this._partialTextY = kt + Sn, this._partialText = Ot, b.fillStrokeShape(this), ut += this.measureSize(Ot).width + rt;
          }
        } else
          rt !== 0 && b.setAttr("letterSpacing", `${rt}px`), this._partialTextX = ut, this._partialTextY = kt + Sn, this._partialText = fr, b.fillStrokeShape(this);
        b.restore(), me > 1 && (kt += se);
      }
    }
    _hitFunc(b) {
      const ce = this.getWidth(), me = this.getHeight();
      b.beginPath(), b.rect(0, 0, ce, me), b.closePath(), b.fillStrokeShape(this);
    }
    setText(b) {
      const ce = l.Util._isString(b) ? b : b == null ? "" : b + "";
      return this._setAttr(R, ce), this;
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
      return l.Util.warn("text.getTextHeight() method is deprecated. Use text.height() - for full height and text.fontSize() - for one line height."), this.textHeight;
    }
    measureSize(b) {
      var ce, me, oe, q, se, ge, ye, Re, Be, Ge, rt;
      let We = P(), Dt = this.fontSize(), $e;
      We.save(), We.font = this._getContextFont(), $e = We.measureText(b), We.restore();
      const gt = Dt / 100;
      return {
        actualBoundingBoxAscent: (ce = $e.actualBoundingBoxAscent) !== null && ce !== void 0 ? ce : 71.58203125 * gt,
        actualBoundingBoxDescent: (me = $e.actualBoundingBoxDescent) !== null && me !== void 0 ? me : 0,
        actualBoundingBoxLeft: (oe = $e.actualBoundingBoxLeft) !== null && oe !== void 0 ? oe : -7.421875 * gt,
        actualBoundingBoxRight: (q = $e.actualBoundingBoxRight) !== null && q !== void 0 ? q : 75.732421875 * gt,
        alphabeticBaseline: (se = $e.alphabeticBaseline) !== null && se !== void 0 ? se : 0,
        emHeightAscent: (ge = $e.emHeightAscent) !== null && ge !== void 0 ? ge : 100 * gt,
        emHeightDescent: (ye = $e.emHeightDescent) !== null && ye !== void 0 ? ye : -20 * gt,
        fontBoundingBoxAscent: (Re = $e.fontBoundingBoxAscent) !== null && Re !== void 0 ? Re : 91 * gt,
        fontBoundingBoxDescent: (Be = $e.fontBoundingBoxDescent) !== null && Be !== void 0 ? Be : 21 * gt,
        hangingBaseline: (Ge = $e.hangingBaseline) !== null && Ge !== void 0 ? Ge : 72.80000305175781 * gt,
        ideographicBaseline: (rt = $e.ideographicBaseline) !== null && rt !== void 0 ? rt : -21 * gt,
        width: $e.width,
        height: Dt
      };
    }
    _getContextFont() {
      return this.fontStyle() + j + this.fontVariant() + j + (this.fontSize() + I) + ee(this.fontFamily());
    }
    _addTextLine(b) {
      this.align() === k && (b = b.trim());
      const me = this._getTextWidth(b);
      return this.textArr.push({
        text: b,
        width: me,
        lastInParagraph: !1
      });
    }
    _getTextWidth(b) {
      const ce = this.letterSpacing(), me = b.length;
      return P().measureText(b).width + ce * me;
    }
    _setTextData() {
      let b = this.text().split(`
`), ce = +this.fontSize(), me = 0, oe = this.lineHeight() * ce, q = this.attrs.width, se = this.attrs.height, ge = q !== m && q !== void 0, ye = se !== m && se !== void 0, Re = this.padding(), Be = q - Re * 2, Ge = se - Re * 2, rt = 0, We = this.wrap(), Dt = We !== Y, $e = We !== G && Dt, gt = this.ellipsis();
      this.textArr = [], P().font = this._getContextFont();
      const Ut = gt ? this._getTextWidth(Z) : 0;
      for (let kt = 0, _t = b.length; kt < _t; ++kt) {
        let ut = b[kt], Sn = this._getTextWidth(ut);
        if (ge && Sn > Be)
          for (; ut.length > 0; ) {
            let Qt = 0, fr = f(ut).length, jt = "", Mn = 0;
            for (; Qt < fr; ) {
              const on = Qt + fr >>> 1, Ln = f(ut), At = Ln.slice(0, on + 1).join(""), Ot = this._getTextWidth(At);
              (gt && ye && rt + oe > Ge ? Ot + Ut : Ot) <= Be ? (Qt = on + 1, jt = At, Mn = Ot) : fr = on;
            }
            if (jt) {
              if ($e) {
                const At = f(ut), Ot = f(jt), Lr = At[Ot.length], Di = Lr === j || Lr === S;
                let Ar;
                if (Di && Mn <= Be)
                  Ar = Ot.length;
                else {
                  const co = Ot.lastIndexOf(j), ve = Ot.lastIndexOf(S);
                  Ar = Math.max(co, ve) + 1;
                }
                Ar > 0 && (Qt = Ar, jt = At.slice(0, Qt).join(""), Mn = this._getTextWidth(jt));
              }
              if (jt = jt.trimRight(), this._addTextLine(jt), me = Math.max(me, Mn), rt += oe, this._shouldHandleEllipsis(rt)) {
                this._tryToAddEllipsisToLastLine();
                break;
              }
              if (ut = f(ut).slice(Qt).join("").trimLeft(), ut.length > 0 && (Sn = this._getTextWidth(ut), Sn <= Be)) {
                this._addTextLine(ut), rt += oe, me = Math.max(me, Sn);
                break;
              }
            } else
              break;
          }
        else
          this._addTextLine(ut), rt += oe, me = Math.max(me, Sn), this._shouldHandleEllipsis(rt) && kt < _t - 1 && this._tryToAddEllipsisToLastLine();
        if (this.textArr[this.textArr.length - 1] && (this.textArr[this.textArr.length - 1].lastInParagraph = !0), ye && rt + oe > Ge)
          break;
      }
      this.textHeight = ce, this.textWidth = me;
    }
    _shouldHandleEllipsis(b) {
      const ce = +this.fontSize(), me = this.lineHeight() * ce, oe = this.attrs.height, q = oe !== m && oe !== void 0, se = this.padding(), ge = oe - se * 2;
      return !(this.wrap() !== Y) || q && b + me > ge;
    }
    _tryToAddEllipsisToLastLine() {
      const b = this.attrs.width, ce = b !== m && b !== void 0, me = this.padding(), oe = b - me * 2, q = this.ellipsis(), se = this.textArr[this.textArr.length - 1];
      !se || !q || (ce && (this._getTextWidth(se.text + Z) < oe || (se.text = se.text.slice(0, se.text.length - 3))), this.textArr.splice(this.textArr.length - 1, 1), this._addTextLine(se.text + Z));
    }
    getStrokeScaleEnabled() {
      return !0;
    }
    _useBufferCanvas() {
      const b = this.textDecoration().indexOf("underline") !== -1 || this.textDecoration().indexOf("line-through") !== -1, ce = this.hasShadow();
      return b && ce ? !0 : super._useBufferCanvas();
    }
  };
  return Xl.Text = M, M.prototype._fillFunc = D, M.prototype._strokeFunc = W, M.prototype.className = O, M.prototype._attrsAffectingSize = [
    "text",
    "fontSize",
    "padding",
    "wrap",
    "lineHeight",
    "letterSpacing"
  ], (0, C._registerNode)(M), d.Factory.overWriteSetter(M, "width", (0, N.getNumberOrAutoValidator)()), d.Factory.overWriteSetter(M, "height", (0, N.getNumberOrAutoValidator)()), d.Factory.addGetterSetter(M, "direction", x), d.Factory.addGetterSetter(M, "fontFamily", "Arial"), d.Factory.addGetterSetter(M, "fontSize", 12, (0, N.getNumberValidator)()), d.Factory.addGetterSetter(M, "fontStyle", T), d.Factory.addGetterSetter(M, "fontVariant", T), d.Factory.addGetterSetter(M, "padding", 0, (0, N.getNumberValidator)()), d.Factory.addGetterSetter(M, "align", w), d.Factory.addGetterSetter(M, "verticalAlign", H), d.Factory.addGetterSetter(M, "lineHeight", 1, (0, N.getNumberValidator)()), d.Factory.addGetterSetter(M, "wrap", U), d.Factory.addGetterSetter(M, "ellipsis", !1, (0, N.getBooleanValidator)()), d.Factory.addGetterSetter(M, "letterSpacing", 0, (0, N.getNumberValidator)()), d.Factory.addGetterSetter(M, "text", "", (0, N.getStringValidator)()), d.Factory.addGetterSetter(M, "textDecoration", ""), Xl;
}
var au = {}, Bh;
function H1() {
  if (Bh) return au;
  Bh = 1, Object.defineProperty(au, "__esModule", { value: !0 }), au.TextPath = void 0;
  const l = Xt(), d = st(), _ = Fn(), L = yf(), N = B0(), C = lt(), f = Ze(), m = "", g = "normal";
  function x(E) {
    E.fillText(this.partialText, 0, 0);
  }
  function k(E) {
    E.strokeText(this.partialText, 0, 0);
  }
  let F = class extends _.Shape {
    constructor(S) {
      super(S), this.dummyCanvas = l.Util.createCanvasElement(), this.dataArray = [], this._readDataAttribute(), this.on("dataChange.konva", function() {
        this._readDataAttribute(), this._setTextData();
      }), this.on("textChange.konva alignChange.konva letterSpacingChange.konva kerningFuncChange.konva fontSizeChange.konva fontFamilyChange.konva", this._setTextData), this._setTextData();
    }
    _getTextPathLength() {
      return L.Path.getPathLength(this.dataArray);
    }
    _getPointAtLength(S) {
      if (!this.attrs.data)
        return null;
      const w = this.pathLength;
      return S - 1 > w ? null : L.Path.getPointAtLengthOfDataArray(S, this.dataArray);
    }
    _readDataAttribute() {
      this.dataArray = L.Path.parsePathData(this.attrs.data), this.pathLength = this._getTextPathLength();
    }
    _sceneFunc(S) {
      S.setAttr("font", this._getContextFont()), S.setAttr("textBaseline", this.textBaseline()), S.setAttr("textAlign", "left"), S.save();
      const w = this.textDecoration(), R = this.fill(), O = this.fontSize(), H = this.glyphInfo;
      w === "underline" && S.beginPath();
      for (let v = 0; v < H.length; v++) {
        S.save();
        const h = H[v].p0;
        S.translate(h.x, h.y), S.rotate(H[v].rotation), this.partialText = H[v].text, S.fillStrokeShape(this), w === "underline" && (v === 0 && S.moveTo(0, O / 2 + 1), S.lineTo(O, O / 2 + 1)), S.restore();
      }
      w === "underline" && (S.strokeStyle = R, S.lineWidth = O / 20, S.stroke()), S.restore();
    }
    _hitFunc(S) {
      S.beginPath();
      const w = this.glyphInfo;
      if (w.length >= 1) {
        const R = w[0].p0;
        S.moveTo(R.x, R.y);
      }
      for (let R = 0; R < w.length; R++) {
        const O = w[R].p1;
        S.lineTo(O.x, O.y);
      }
      S.setAttr("lineWidth", this.fontSize()), S.setAttr("strokeStyle", this.colorKey), S.stroke();
    }
    getTextWidth() {
      return this.textWidth;
    }
    getTextHeight() {
      return l.Util.warn("text.getTextHeight() method is deprecated. Use text.height() - for full height and text.fontSize() - for one line height."), this.textHeight;
    }
    setText(S) {
      return N.Text.prototype.setText.call(this, S);
    }
    _getContextFont() {
      return N.Text.prototype._getContextFont.call(this);
    }
    _getTextSize(S) {
      const R = this.dummyCanvas.getContext("2d");
      R.save(), R.font = this._getContextFont();
      const O = R.measureText(S);
      return R.restore(), {
        width: O.width,
        height: parseInt(`${this.fontSize()}`, 10)
      };
    }
    _setTextData() {
      const { width: S, height: w } = this._getTextSize(this.attrs.text);
      if (this.textWidth = S, this.textHeight = w, this.glyphInfo = [], !this.attrs.data)
        return null;
      const R = this.letterSpacing(), O = this.align(), H = this.kerningFunc(), v = Math.max(this.textWidth + ((this.attrs.text || "").length - 1) * R, 0);
      let h = 0;
      O === "center" && (h = Math.max(0, this.pathLength / 2 - v / 2)), O === "right" && (h = Math.max(0, this.pathLength - v));
      const T = (0, N.stringToArray)(this.text());
      let I = h;
      for (let j = 0; j < T.length; j++) {
        const J = this._getPointAtLength(I);
        if (!J)
          return;
        let z = this._getTextSize(T[j]).width + R;
        if (T[j] === " " && O === "justify") {
          const re = this.text().split(" ").length - 1;
          z += (this.pathLength - v) / re;
        }
        const U = this._getPointAtLength(I + z);
        if (!U)
          return;
        const G = L.Path.getLineLength(J.x, J.y, U.x, U.y);
        let Y = 0;
        if (H)
          try {
            Y = H(T[j - 1], T[j]) * this.fontSize();
          } catch {
            Y = 0;
          }
        J.x += Y, U.x += Y, this.textWidth += Y;
        const Z = L.Path.getPointOnLine(Y + G / 2, J.x, J.y, U.x, U.y), ne = Math.atan2(U.y - J.y, U.x - J.x);
        this.glyphInfo.push({
          transposeX: Z.x,
          transposeY: Z.y,
          text: T[j],
          rotation: ne,
          p0: J,
          p1: U
        }), I += z;
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
      const S = [];
      this.glyphInfo.forEach(function(I) {
        S.push(I.p0.x), S.push(I.p0.y), S.push(I.p1.x), S.push(I.p1.y);
      });
      let w = S[0] || 0, R = S[0] || 0, O = S[1] || 0, H = S[1] || 0, v, h;
      for (let I = 0; I < S.length / 2; I++)
        v = S[I * 2], h = S[I * 2 + 1], w = Math.min(w, v), R = Math.max(R, v), O = Math.min(O, h), H = Math.max(H, h);
      const T = this.fontSize();
      return {
        x: w - T / 2,
        y: O - T / 2,
        width: R - w + T,
        height: H - O + T
      };
    }
    destroy() {
      return l.Util.releaseCanvas(this.dummyCanvas), super.destroy();
    }
  };
  return au.TextPath = F, F.prototype._fillFunc = x, F.prototype._strokeFunc = k, F.prototype._fillFuncHit = x, F.prototype._strokeFuncHit = k, F.prototype.className = "TextPath", F.prototype._attrsAffectingSize = ["text", "fontSize", "data"], (0, f._registerNode)(F), d.Factory.addGetterSetter(F, "data"), d.Factory.addGetterSetter(F, "fontFamily", "Arial"), d.Factory.addGetterSetter(F, "fontSize", 12, (0, C.getNumberValidator)()), d.Factory.addGetterSetter(F, "fontStyle", g), d.Factory.addGetterSetter(F, "align", "left"), d.Factory.addGetterSetter(F, "letterSpacing", 0, (0, C.getNumberValidator)()), d.Factory.addGetterSetter(F, "textBaseline", "middle"), d.Factory.addGetterSetter(F, "fontVariant", g), d.Factory.addGetterSetter(F, "text", m), d.Factory.addGetterSetter(F, "textDecoration", ""), d.Factory.addGetterSetter(F, "kerningFunc", void 0), au;
}
var uu = {}, Vh;
function j1() {
  if (Vh) return uu;
  Vh = 1, Object.defineProperty(uu, "__esModule", { value: !0 }), uu.Transformer = void 0;
  const l = Xt(), d = st(), _ = sn(), L = Fn(), N = U0(), C = gf(), f = Ze(), m = lt(), g = Ze(), x = "tr-konva", k = [
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
  ].map((z) => z + `.${x}`).join(" "), F = "nodesRect", E = [
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
  ], S = {
    "top-left": -45,
    "top-center": 0,
    "top-right": 45,
    "middle-right": -90,
    "middle-left": 90,
    "bottom-left": -135,
    "bottom-center": 180,
    "bottom-right": 135
  }, w = "ontouchstart" in f.Konva._global;
  function R(z, U, G) {
    if (z === "rotater")
      return G;
    U += l.Util.degToRad(S[z] || 0);
    const Y = (l.Util.radToDeg(U) % 360 + 360) % 360;
    return l.Util._inRange(Y, 315 + 22.5, 360) || l.Util._inRange(Y, 0, 22.5) ? "ns-resize" : l.Util._inRange(Y, 45 - 22.5, 45 + 22.5) ? "nesw-resize" : l.Util._inRange(Y, 90 - 22.5, 90 + 22.5) ? "ew-resize" : l.Util._inRange(Y, 135 - 22.5, 135 + 22.5) ? "nwse-resize" : l.Util._inRange(Y, 180 - 22.5, 180 + 22.5) ? "ns-resize" : l.Util._inRange(Y, 225 - 22.5, 225 + 22.5) ? "nesw-resize" : l.Util._inRange(Y, 270 - 22.5, 270 + 22.5) ? "ew-resize" : l.Util._inRange(Y, 315 - 22.5, 315 + 22.5) ? "nwse-resize" : (l.Util.error("Transformer has unknown angle for cursor detection: " + Y), "pointer");
  }
  const O = [
    "top-left",
    "top-center",
    "top-right",
    "middle-right",
    "middle-left",
    "bottom-left",
    "bottom-center",
    "bottom-right"
  ];
  function H(z) {
    return {
      x: z.x + z.width / 2 * Math.cos(z.rotation) + z.height / 2 * Math.sin(-z.rotation),
      y: z.y + z.height / 2 * Math.cos(z.rotation) + z.width / 2 * Math.sin(z.rotation)
    };
  }
  function v(z, U, G) {
    const Y = G.x + (z.x - G.x) * Math.cos(U) - (z.y - G.y) * Math.sin(U), Z = G.y + (z.x - G.x) * Math.sin(U) + (z.y - G.y) * Math.cos(U);
    return {
      ...z,
      rotation: z.rotation + U,
      x: Y,
      y: Z
    };
  }
  function h(z, U) {
    const G = H(z);
    return v(z, U, G);
  }
  function T(z, U, G) {
    let Y = U;
    for (let Z = 0; Z < z.length; Z++) {
      const ne = f.Konva.getAngle(z[Z]), re = Math.abs(ne - U) % (Math.PI * 2);
      Math.min(re, Math.PI * 2 - re) < G && (Y = ne);
    }
    return Y;
  }
  let I = 0;
  class j extends C.Group {
    constructor(U) {
      super(U), this._movingAnchorName = null, this._transforming = !1, this._createElements(), this._handleMouseMove = this._handleMouseMove.bind(this), this._handleMouseUp = this._handleMouseUp.bind(this), this.update = this.update.bind(this), this.on(k, this.update), this.getNode() && this.update();
    }
    attachTo(U) {
      return this.setNode(U), this;
    }
    setNode(U) {
      return l.Util.warn("tr.setNode(shape), tr.node(shape) and tr.attachTo(shape) methods are deprecated. Please use tr.nodes(nodesArray) instead."), this.setNodes([U]);
    }
    getNode() {
      return this._nodes && this._nodes[0];
    }
    _getEventNamespace() {
      return x + this._id;
    }
    setNodes(U = []) {
      this._nodes && this._nodes.length && this.detach();
      const G = U.filter((Z) => Z.isAncestorOf(this) ? (l.Util.error("Konva.Transformer cannot be an a child of the node you are trying to attach"), !1) : !0);
      return this._nodes = U = G, U.length === 1 && this.useSingleNodeRotation() ? this.rotation(U[0].getAbsoluteRotation()) : this.rotation(0), this._nodes.forEach((Z) => {
        const ne = () => {
          this.nodes().length === 1 && this.useSingleNodeRotation() && this.rotation(this.nodes()[0].getAbsoluteRotation()), this._resetTransformCache(), !this._transforming && !this.isDragging() && this.update();
        };
        if (Z._attrsAffectingSize.length) {
          const re = Z._attrsAffectingSize.map((ee) => ee + "Change." + this._getEventNamespace()).join(" ");
          Z.on(re, ne);
        }
        Z.on(E.map((re) => re + `.${this._getEventNamespace()}`).join(" "), ne), Z.on(`absoluteTransformChange.${this._getEventNamespace()}`, ne), this._proxyDrag(Z);
      }), this._resetTransformCache(), !!this.findOne(".top-left") && this.update(), this;
    }
    _proxyDrag(U) {
      let G;
      U.on(`dragstart.${this._getEventNamespace()}`, (Y) => {
        G = U.getAbsolutePosition(), !this.isDragging() && U !== this.findOne(".back") && this.startDrag(Y, !1);
      }), U.on(`dragmove.${this._getEventNamespace()}`, (Y) => {
        if (!G)
          return;
        const Z = U.getAbsolutePosition(), ne = Z.x - G.x, re = Z.y - G.y;
        this.nodes().forEach((ee) => {
          if (ee === U || ee.isDragging())
            return;
          const Q = ee.getAbsolutePosition();
          ee.setAbsolutePosition({
            x: Q.x + ne,
            y: Q.y + re
          }), ee.startDrag(Y);
        }), G = null;
      });
    }
    getNodes() {
      return this._nodes || [];
    }
    getActiveAnchor() {
      return this._movingAnchorName;
    }
    detach() {
      this._nodes && this._nodes.forEach((U) => {
        U.off("." + this._getEventNamespace());
      }), this._nodes = [], this._resetTransformCache();
    }
    _resetTransformCache() {
      this._clearCache(F), this._clearCache("transform"), this._clearSelfAndDescendantCache("absoluteTransform");
    }
    _getNodeRect() {
      return this._getCache(F, this.__getNodeRect);
    }
    __getNodeShape(U, G = this.rotation(), Y) {
      const Z = U.getClientRect({
        skipTransform: !0,
        skipShadow: !0,
        skipStroke: this.ignoreStroke()
      }), ne = U.getAbsoluteScale(Y), re = U.getAbsolutePosition(Y), ee = Z.x * ne.x - U.offsetX() * ne.x, Q = Z.y * ne.y - U.offsetY() * ne.y, P = (f.Konva.getAngle(U.getAbsoluteRotation()) + Math.PI * 2) % (Math.PI * 2), D = {
        x: re.x + ee * Math.cos(P) + Q * Math.sin(-P),
        y: re.y + Q * Math.cos(P) + ee * Math.sin(P),
        width: Z.width * ne.x,
        height: Z.height * ne.y,
        rotation: P
      };
      return v(D, -f.Konva.getAngle(G), {
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
      const G = [];
      this.nodes().map((P) => {
        const D = P.getClientRect({
          skipTransform: !0,
          skipShadow: !0,
          skipStroke: this.ignoreStroke()
        }), W = [
          { x: D.x, y: D.y },
          { x: D.x + D.width, y: D.y },
          { x: D.x + D.width, y: D.y + D.height },
          { x: D.x, y: D.y + D.height }
        ], B = P.getAbsoluteTransform();
        W.forEach(function(M) {
          const X = B.point(M);
          G.push(X);
        });
      });
      const Y = new l.Transform();
      Y.rotate(-f.Konva.getAngle(this.rotation()));
      let Z = 1 / 0, ne = 1 / 0, re = -1 / 0, ee = -1 / 0;
      G.forEach(function(P) {
        const D = Y.point(P);
        Z === void 0 && (Z = re = D.x, ne = ee = D.y), Z = Math.min(Z, D.x), ne = Math.min(ne, D.y), re = Math.max(re, D.x), ee = Math.max(ee, D.y);
      }), Y.invert();
      const Q = Y.point({ x: Z, y: ne });
      return {
        x: Q.x,
        y: Q.y,
        width: re - Z,
        height: ee - ne,
        rotation: f.Konva.getAngle(this.rotation())
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
      this._createBack(), O.forEach((U) => {
        this._createAnchor(U);
      }), this._createAnchor("rotater");
    }
    _createAnchor(U) {
      const G = new N.Rect({
        stroke: "rgb(0, 161, 255)",
        fill: "white",
        strokeWidth: 1,
        name: U + " _anchor",
        dragDistance: 0,
        draggable: !0,
        hitStrokeWidth: w ? 10 : "auto"
      }), Y = this;
      G.on("mousedown touchstart", function(Z) {
        Y._handleMouseDown(Z);
      }), G.on("dragstart", (Z) => {
        G.stopDrag(), Z.cancelBubble = !0;
      }), G.on("dragend", (Z) => {
        Z.cancelBubble = !0;
      }), G.on("mouseenter", () => {
        const Z = f.Konva.getAngle(this.rotation()), ne = this.rotateAnchorCursor(), re = R(U, Z, ne);
        G.getStage().content && (G.getStage().content.style.cursor = re), this._cursorChange = !0;
      }), G.on("mouseout", () => {
        G.getStage().content && (G.getStage().content.style.cursor = ""), this._cursorChange = !1;
      }), this.add(G);
    }
    _createBack() {
      const U = new L.Shape({
        name: "back",
        width: 0,
        height: 0,
        draggable: !0,
        sceneFunc(G, Y) {
          const Z = Y.getParent(), ne = Z.padding();
          G.beginPath(), G.rect(-ne, -ne, Y.width() + ne * 2, Y.height() + ne * 2), G.moveTo(Y.width() / 2, -ne), Z.rotateEnabled() && Z.rotateLineVisible() && G.lineTo(Y.width() / 2, -Z.rotateAnchorOffset() * l.Util._sign(Y.height()) - ne), G.fillStrokeShape(Y);
        },
        hitFunc: (G, Y) => {
          if (!this.shouldOverdrawWholeArea())
            return;
          const Z = this.padding();
          G.beginPath(), G.rect(-Z, -Z, Y.width() + Z * 2, Y.height() + Z * 2), G.fillStrokeShape(Y);
        }
      });
      this.add(U), this._proxyDrag(U), U.on("dragstart", (G) => {
        G.cancelBubble = !0;
      }), U.on("dragmove", (G) => {
        G.cancelBubble = !0;
      }), U.on("dragend", (G) => {
        G.cancelBubble = !0;
      }), this.on("dragmove", (G) => {
        this.update();
      });
    }
    _handleMouseDown(U) {
      if (this._transforming)
        return;
      this._movingAnchorName = U.target.name().split(" ")[0];
      const G = this._getNodeRect(), Y = G.width, Z = G.height, ne = Math.sqrt(Math.pow(Y, 2) + Math.pow(Z, 2));
      this.sin = Math.abs(Z / ne), this.cos = Math.abs(Y / ne), typeof window < "u" && (window.addEventListener("mousemove", this._handleMouseMove), window.addEventListener("touchmove", this._handleMouseMove), window.addEventListener("mouseup", this._handleMouseUp, !0), window.addEventListener("touchend", this._handleMouseUp, !0)), this._transforming = !0;
      const re = U.target.getAbsolutePosition(), ee = U.target.getStage().getPointerPosition();
      this._anchorDragOffset = {
        x: ee.x - re.x,
        y: ee.y - re.y
      }, I++, this._fire("transformstart", { evt: U.evt, target: this.getNode() }), this._nodes.forEach((Q) => {
        Q._fire("transformstart", { evt: U.evt, target: Q });
      });
    }
    _handleMouseMove(U) {
      let G, Y, Z;
      const ne = this.findOne("." + this._movingAnchorName), re = ne.getStage();
      re.setPointersPositions(U);
      const ee = re.getPointerPosition();
      let Q = {
        x: ee.x - this._anchorDragOffset.x,
        y: ee.y - this._anchorDragOffset.y
      };
      const P = ne.getAbsolutePosition();
      this.anchorDragBoundFunc() && (Q = this.anchorDragBoundFunc()(P, Q, U)), ne.setAbsolutePosition(Q);
      const D = ne.getAbsolutePosition();
      if (P.x === D.x && P.y === D.y)
        return;
      if (this._movingAnchorName === "rotater") {
        const oe = this._getNodeRect();
        G = ne.x() - oe.width / 2, Y = -ne.y() + oe.height / 2;
        let q = Math.atan2(-Y, G) + Math.PI / 2;
        oe.height < 0 && (q -= Math.PI);
        const ge = f.Konva.getAngle(this.rotation()) + q, ye = f.Konva.getAngle(this.rotationSnapTolerance()), Be = T(this.rotationSnaps(), ge, ye) - oe.rotation, Ge = h(oe, Be);
        this._fitNodesInto(Ge, U);
        return;
      }
      const W = this.shiftBehavior();
      let B;
      W === "inverted" ? B = this.keepRatio() && !U.shiftKey : W === "none" ? B = this.keepRatio() : B = this.keepRatio() || U.shiftKey;
      let M = this.centeredScaling() || U.altKey;
      if (this._movingAnchorName === "top-left") {
        if (B) {
          const oe = M ? {
            x: this.width() / 2,
            y: this.height() / 2
          } : {
            x: this.findOne(".bottom-right").x(),
            y: this.findOne(".bottom-right").y()
          };
          Z = Math.sqrt(Math.pow(oe.x - ne.x(), 2) + Math.pow(oe.y - ne.y(), 2));
          const q = this.findOne(".top-left").x() > oe.x ? -1 : 1, se = this.findOne(".top-left").y() > oe.y ? -1 : 1;
          G = Z * this.cos * q, Y = Z * this.sin * se, this.findOne(".top-left").x(oe.x - G), this.findOne(".top-left").y(oe.y - Y);
        }
      } else if (this._movingAnchorName === "top-center")
        this.findOne(".top-left").y(ne.y());
      else if (this._movingAnchorName === "top-right") {
        if (B) {
          const oe = M ? {
            x: this.width() / 2,
            y: this.height() / 2
          } : {
            x: this.findOne(".bottom-left").x(),
            y: this.findOne(".bottom-left").y()
          };
          Z = Math.sqrt(Math.pow(ne.x() - oe.x, 2) + Math.pow(oe.y - ne.y(), 2));
          const q = this.findOne(".top-right").x() < oe.x ? -1 : 1, se = this.findOne(".top-right").y() > oe.y ? -1 : 1;
          G = Z * this.cos * q, Y = Z * this.sin * se, this.findOne(".top-right").x(oe.x + G), this.findOne(".top-right").y(oe.y - Y);
        }
        var X = ne.position();
        this.findOne(".top-left").y(X.y), this.findOne(".bottom-right").x(X.x);
      } else if (this._movingAnchorName === "middle-left")
        this.findOne(".top-left").x(ne.x());
      else if (this._movingAnchorName === "middle-right")
        this.findOne(".bottom-right").x(ne.x());
      else if (this._movingAnchorName === "bottom-left") {
        if (B) {
          const oe = M ? {
            x: this.width() / 2,
            y: this.height() / 2
          } : {
            x: this.findOne(".top-right").x(),
            y: this.findOne(".top-right").y()
          };
          Z = Math.sqrt(Math.pow(oe.x - ne.x(), 2) + Math.pow(ne.y() - oe.y, 2));
          const q = oe.x < ne.x() ? -1 : 1, se = ne.y() < oe.y ? -1 : 1;
          G = Z * this.cos * q, Y = Z * this.sin * se, ne.x(oe.x - G), ne.y(oe.y + Y);
        }
        X = ne.position(), this.findOne(".top-left").x(X.x), this.findOne(".bottom-right").y(X.y);
      } else if (this._movingAnchorName === "bottom-center")
        this.findOne(".bottom-right").y(ne.y());
      else if (this._movingAnchorName === "bottom-right") {
        if (B) {
          const oe = M ? {
            x: this.width() / 2,
            y: this.height() / 2
          } : {
            x: this.findOne(".top-left").x(),
            y: this.findOne(".top-left").y()
          };
          Z = Math.sqrt(Math.pow(ne.x() - oe.x, 2) + Math.pow(ne.y() - oe.y, 2));
          const q = this.findOne(".bottom-right").x() < oe.x ? -1 : 1, se = this.findOne(".bottom-right").y() < oe.y ? -1 : 1;
          G = Z * this.cos * q, Y = Z * this.sin * se, this.findOne(".bottom-right").x(oe.x + G), this.findOne(".bottom-right").y(oe.y + Y);
        }
      } else
        console.error(new Error("Wrong position argument of selection resizer: " + this._movingAnchorName));
      if (M = this.centeredScaling() || U.altKey, M) {
        const oe = this.findOne(".top-left"), q = this.findOne(".bottom-right"), se = oe.x(), ge = oe.y(), ye = this.getWidth() - q.x(), Re = this.getHeight() - q.y();
        q.move({
          x: -se,
          y: -ge
        }), oe.move({
          x: ye,
          y: Re
        });
      }
      const b = this.findOne(".top-left").getAbsolutePosition();
      G = b.x, Y = b.y;
      const ce = this.findOne(".bottom-right").x() - this.findOne(".top-left").x(), me = this.findOne(".bottom-right").y() - this.findOne(".top-left").y();
      this._fitNodesInto({
        x: G,
        y: Y,
        width: ce,
        height: me,
        rotation: f.Konva.getAngle(this.rotation())
      }, U);
    }
    _handleMouseUp(U) {
      this._removeEvents(U);
    }
    getAbsoluteTransform() {
      return this.getTransform();
    }
    _removeEvents(U) {
      var G;
      if (this._transforming) {
        this._transforming = !1, typeof window < "u" && (window.removeEventListener("mousemove", this._handleMouseMove), window.removeEventListener("touchmove", this._handleMouseMove), window.removeEventListener("mouseup", this._handleMouseUp, !0), window.removeEventListener("touchend", this._handleMouseUp, !0));
        const Y = this.getNode();
        I--, this._fire("transformend", { evt: U, target: Y }), (G = this.getLayer()) === null || G === void 0 || G.batchDraw(), Y && this._nodes.forEach((Z) => {
          var ne;
          Z._fire("transformend", { evt: U, target: Z }), (ne = Z.getLayer()) === null || ne === void 0 || ne.batchDraw();
        }), this._movingAnchorName = null;
      }
    }
    _fitNodesInto(U, G) {
      const Y = this._getNodeRect(), Z = 1;
      if (l.Util._inRange(U.width, -this.padding() * 2 - Z, Z)) {
        this.update();
        return;
      }
      if (l.Util._inRange(U.height, -this.padding() * 2 - Z, Z)) {
        this.update();
        return;
      }
      const ne = new l.Transform();
      if (ne.rotate(f.Konva.getAngle(this.rotation())), this._movingAnchorName && U.width < 0 && this._movingAnchorName.indexOf("left") >= 0) {
        const B = ne.point({
          x: -this.padding() * 2,
          y: 0
        });
        U.x += B.x, U.y += B.y, U.width += this.padding() * 2, this._movingAnchorName = this._movingAnchorName.replace("left", "right"), this._anchorDragOffset.x -= B.x, this._anchorDragOffset.y -= B.y;
      } else if (this._movingAnchorName && U.width < 0 && this._movingAnchorName.indexOf("right") >= 0) {
        const B = ne.point({
          x: this.padding() * 2,
          y: 0
        });
        this._movingAnchorName = this._movingAnchorName.replace("right", "left"), this._anchorDragOffset.x -= B.x, this._anchorDragOffset.y -= B.y, U.width += this.padding() * 2;
      }
      if (this._movingAnchorName && U.height < 0 && this._movingAnchorName.indexOf("top") >= 0) {
        const B = ne.point({
          x: 0,
          y: -this.padding() * 2
        });
        U.x += B.x, U.y += B.y, this._movingAnchorName = this._movingAnchorName.replace("top", "bottom"), this._anchorDragOffset.x -= B.x, this._anchorDragOffset.y -= B.y, U.height += this.padding() * 2;
      } else if (this._movingAnchorName && U.height < 0 && this._movingAnchorName.indexOf("bottom") >= 0) {
        const B = ne.point({
          x: 0,
          y: this.padding() * 2
        });
        this._movingAnchorName = this._movingAnchorName.replace("bottom", "top"), this._anchorDragOffset.x -= B.x, this._anchorDragOffset.y -= B.y, U.height += this.padding() * 2;
      }
      if (this.boundBoxFunc()) {
        const B = this.boundBoxFunc()(Y, U);
        B ? U = B : l.Util.warn("boundBoxFunc returned falsy. You should return new bound rect from it!");
      }
      const re = 1e7, ee = new l.Transform();
      ee.translate(Y.x, Y.y), ee.rotate(Y.rotation), ee.scale(Y.width / re, Y.height / re);
      const Q = new l.Transform(), P = U.width / re, D = U.height / re;
      this.flipEnabled() === !1 ? (Q.translate(U.x, U.y), Q.rotate(U.rotation), Q.translate(U.width < 0 ? U.width : 0, U.height < 0 ? U.height : 0), Q.scale(Math.abs(P), Math.abs(D))) : (Q.translate(U.x, U.y), Q.rotate(U.rotation), Q.scale(P, D));
      const W = Q.multiply(ee.invert());
      this._nodes.forEach((B) => {
        var M;
        const X = B.getParent().getAbsoluteTransform(), b = B.getTransform().copy();
        b.translate(B.offsetX(), B.offsetY());
        const ce = new l.Transform();
        ce.multiply(X.copy().invert()).multiply(W).multiply(X).multiply(b);
        const me = ce.decompose();
        B.setAttrs(me), (M = B.getLayer()) === null || M === void 0 || M.batchDraw();
      }), this.rotation(l.Util._getRotation(U.rotation)), this._nodes.forEach((B) => {
        this._fire("transform", { evt: G, target: B }), B._fire("transform", { evt: G, target: B });
      }), this._resetTransformCache(), this.update(), this.getLayer().batchDraw();
    }
    forceUpdate() {
      this._resetTransformCache(), this.update();
    }
    _batchChangeChild(U, G) {
      this.findOne(U).setAttrs(G);
    }
    update() {
      var U;
      const G = this._getNodeRect();
      this.rotation(l.Util._getRotation(G.rotation));
      const Y = G.width, Z = G.height, ne = this.enabledAnchors(), re = this.resizeEnabled(), ee = this.padding(), Q = this.anchorSize(), P = this.find("._anchor");
      P.forEach((W) => {
        W.setAttrs({
          width: Q,
          height: Q,
          offsetX: Q / 2,
          offsetY: Q / 2,
          stroke: this.anchorStroke(),
          strokeWidth: this.anchorStrokeWidth(),
          fill: this.anchorFill(),
          cornerRadius: this.anchorCornerRadius()
        });
      }), this._batchChangeChild(".top-left", {
        x: 0,
        y: 0,
        offsetX: Q / 2 + ee,
        offsetY: Q / 2 + ee,
        visible: re && ne.indexOf("top-left") >= 0
      }), this._batchChangeChild(".top-center", {
        x: Y / 2,
        y: 0,
        offsetY: Q / 2 + ee,
        visible: re && ne.indexOf("top-center") >= 0
      }), this._batchChangeChild(".top-right", {
        x: Y,
        y: 0,
        offsetX: Q / 2 - ee,
        offsetY: Q / 2 + ee,
        visible: re && ne.indexOf("top-right") >= 0
      }), this._batchChangeChild(".middle-left", {
        x: 0,
        y: Z / 2,
        offsetX: Q / 2 + ee,
        visible: re && ne.indexOf("middle-left") >= 0
      }), this._batchChangeChild(".middle-right", {
        x: Y,
        y: Z / 2,
        offsetX: Q / 2 - ee,
        visible: re && ne.indexOf("middle-right") >= 0
      }), this._batchChangeChild(".bottom-left", {
        x: 0,
        y: Z,
        offsetX: Q / 2 + ee,
        offsetY: Q / 2 - ee,
        visible: re && ne.indexOf("bottom-left") >= 0
      }), this._batchChangeChild(".bottom-center", {
        x: Y / 2,
        y: Z,
        offsetY: Q / 2 - ee,
        visible: re && ne.indexOf("bottom-center") >= 0
      }), this._batchChangeChild(".bottom-right", {
        x: Y,
        y: Z,
        offsetX: Q / 2 - ee,
        offsetY: Q / 2 - ee,
        visible: re && ne.indexOf("bottom-right") >= 0
      }), this._batchChangeChild(".rotater", {
        x: Y / 2,
        y: -this.rotateAnchorOffset() * l.Util._sign(Z) - ee,
        visible: this.rotateEnabled()
      }), this._batchChangeChild(".back", {
        width: Y,
        height: Z,
        visible: this.borderEnabled(),
        stroke: this.borderStroke(),
        strokeWidth: this.borderStrokeWidth(),
        dash: this.borderDash(),
        x: 0,
        y: 0
      });
      const D = this.anchorStyleFunc();
      D && P.forEach((W) => {
        D(W);
      }), (U = this.getLayer()) === null || U === void 0 || U.batchDraw();
    }
    isTransforming() {
      return this._transforming;
    }
    stopTransform() {
      if (this._transforming) {
        this._removeEvents();
        const U = this.findOne("." + this._movingAnchorName);
        U && U.stopDrag();
      }
    }
    destroy() {
      return this.getStage() && this._cursorChange && this.getStage().content && (this.getStage().content.style.cursor = ""), C.Group.prototype.destroy.call(this), this.detach(), this._removeEvents(), this;
    }
    toObject() {
      return _.Node.prototype.toObject.call(this);
    }
    clone(U) {
      return _.Node.prototype.clone.call(this, U);
    }
    getClientRect() {
      return this.nodes().length > 0 ? super.getClientRect() : { x: 0, y: 0, width: 0, height: 0 };
    }
  }
  uu.Transformer = j, j.isTransforming = () => I > 0;
  function J(z) {
    return z instanceof Array || l.Util.warn("enabledAnchors value should be an array"), z instanceof Array && z.forEach(function(U) {
      O.indexOf(U) === -1 && l.Util.warn("Unknown anchor name: " + U + ". Available names are: " + O.join(", "));
    }), z || [];
  }
  return j.prototype.className = "Transformer", (0, g._registerNode)(j), d.Factory.addGetterSetter(j, "enabledAnchors", O, J), d.Factory.addGetterSetter(j, "flipEnabled", !0, (0, m.getBooleanValidator)()), d.Factory.addGetterSetter(j, "resizeEnabled", !0), d.Factory.addGetterSetter(j, "anchorSize", 10, (0, m.getNumberValidator)()), d.Factory.addGetterSetter(j, "rotateEnabled", !0), d.Factory.addGetterSetter(j, "rotateLineVisible", !0), d.Factory.addGetterSetter(j, "rotationSnaps", []), d.Factory.addGetterSetter(j, "rotateAnchorOffset", 50, (0, m.getNumberValidator)()), d.Factory.addGetterSetter(j, "rotateAnchorCursor", "crosshair"), d.Factory.addGetterSetter(j, "rotationSnapTolerance", 5, (0, m.getNumberValidator)()), d.Factory.addGetterSetter(j, "borderEnabled", !0), d.Factory.addGetterSetter(j, "anchorStroke", "rgb(0, 161, 255)"), d.Factory.addGetterSetter(j, "anchorStrokeWidth", 1, (0, m.getNumberValidator)()), d.Factory.addGetterSetter(j, "anchorFill", "white"), d.Factory.addGetterSetter(j, "anchorCornerRadius", 0, (0, m.getNumberValidator)()), d.Factory.addGetterSetter(j, "borderStroke", "rgb(0, 161, 255)"), d.Factory.addGetterSetter(j, "borderStrokeWidth", 1, (0, m.getNumberValidator)()), d.Factory.addGetterSetter(j, "borderDash"), d.Factory.addGetterSetter(j, "keepRatio", !0), d.Factory.addGetterSetter(j, "shiftBehavior", "default"), d.Factory.addGetterSetter(j, "centeredScaling", !1), d.Factory.addGetterSetter(j, "ignoreStroke", !1), d.Factory.addGetterSetter(j, "padding", 0, (0, m.getNumberValidator)()), d.Factory.addGetterSetter(j, "nodes"), d.Factory.addGetterSetter(j, "node"), d.Factory.addGetterSetter(j, "boundBoxFunc"), d.Factory.addGetterSetter(j, "anchorDragBoundFunc"), d.Factory.addGetterSetter(j, "anchorStyleFunc"), d.Factory.addGetterSetter(j, "shouldOverdrawWholeArea", !1), d.Factory.addGetterSetter(j, "useSingleNodeRotation", !0), d.Factory.backCompat(j, {
    lineEnabled: "borderEnabled",
    rotateHandlerOffset: "rotateAnchorOffset",
    enabledHandlers: "enabledAnchors"
  }), uu;
}
var cu = {}, Hh;
function W1() {
  if (Hh) return cu;
  Hh = 1, Object.defineProperty(cu, "__esModule", { value: !0 }), cu.Wedge = void 0;
  const l = st(), d = Fn(), _ = Ze(), L = lt(), N = Ze();
  let C = class extends d.Shape {
    _sceneFunc(m) {
      m.beginPath(), m.arc(0, 0, this.radius(), 0, _.Konva.getAngle(this.angle()), this.clockwise()), m.lineTo(0, 0), m.closePath(), m.fillStrokeShape(this);
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
  return cu.Wedge = C, C.prototype.className = "Wedge", C.prototype._centroid = !0, C.prototype._attrsAffectingSize = ["radius"], (0, N._registerNode)(C), l.Factory.addGetterSetter(C, "radius", 0, (0, L.getNumberValidator)()), l.Factory.addGetterSetter(C, "angle", 0, (0, L.getNumberValidator)()), l.Factory.addGetterSetter(C, "clockwise", !1), l.Factory.backCompat(C, {
    angleDeg: "angle",
    getAngleDeg: "getAngle",
    setAngleDeg: "setAngle"
  }), cu;
}
var du = {}, jh;
function q1() {
  if (jh) return du;
  jh = 1, Object.defineProperty(du, "__esModule", { value: !0 }), du.Blur = void 0;
  const l = st(), d = sn(), _ = lt();
  function L() {
    this.r = 0, this.g = 0, this.b = 0, this.a = 0, this.next = null;
  }
  const N = [
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
  ], C = [
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
  function f(g, x) {
    const k = g.data, F = g.width, E = g.height;
    let S, w, R, O, H, v, h, T, I, j, J, z, U, G, Y, Z, ne, re, ee, Q;
    const P = x + x + 1, D = F - 1, W = E - 1, B = x + 1, M = B * (B + 1) / 2, X = new L(), b = N[x], ce = C[x];
    let me = null, oe = X, q = null, se = null;
    for (let ge = 1; ge < P; ge++)
      oe = oe.next = new L(), ge === B && (me = oe);
    oe.next = X, R = w = 0;
    for (let ge = 0; ge < E; ge++) {
      z = U = G = Y = O = H = v = h = 0, T = B * (Z = k[w]), I = B * (ne = k[w + 1]), j = B * (re = k[w + 2]), J = B * (ee = k[w + 3]), O += M * Z, H += M * ne, v += M * re, h += M * ee, oe = X;
      for (let ye = 0; ye < B; ye++)
        oe.r = Z, oe.g = ne, oe.b = re, oe.a = ee, oe = oe.next;
      for (let ye = 1; ye < B; ye++)
        S = w + ((D < ye ? D : ye) << 2), O += (oe.r = Z = k[S]) * (Q = B - ye), H += (oe.g = ne = k[S + 1]) * Q, v += (oe.b = re = k[S + 2]) * Q, h += (oe.a = ee = k[S + 3]) * Q, z += Z, U += ne, G += re, Y += ee, oe = oe.next;
      q = X, se = me;
      for (let ye = 0; ye < F; ye++)
        k[w + 3] = ee = h * b >> ce, ee !== 0 ? (ee = 255 / ee, k[w] = (O * b >> ce) * ee, k[w + 1] = (H * b >> ce) * ee, k[w + 2] = (v * b >> ce) * ee) : k[w] = k[w + 1] = k[w + 2] = 0, O -= T, H -= I, v -= j, h -= J, T -= q.r, I -= q.g, j -= q.b, J -= q.a, S = R + ((S = ye + x + 1) < D ? S : D) << 2, z += q.r = k[S], U += q.g = k[S + 1], G += q.b = k[S + 2], Y += q.a = k[S + 3], O += z, H += U, v += G, h += Y, q = q.next, T += Z = se.r, I += ne = se.g, j += re = se.b, J += ee = se.a, z -= Z, U -= ne, G -= re, Y -= ee, se = se.next, w += 4;
      R += F;
    }
    for (let ge = 0; ge < F; ge++) {
      U = G = Y = z = H = v = h = O = 0, w = ge << 2, T = B * (Z = k[w]), I = B * (ne = k[w + 1]), j = B * (re = k[w + 2]), J = B * (ee = k[w + 3]), O += M * Z, H += M * ne, v += M * re, h += M * ee, oe = X;
      for (let Re = 0; Re < B; Re++)
        oe.r = Z, oe.g = ne, oe.b = re, oe.a = ee, oe = oe.next;
      let ye = F;
      for (let Re = 1; Re <= x; Re++)
        w = ye + ge << 2, O += (oe.r = Z = k[w]) * (Q = B - Re), H += (oe.g = ne = k[w + 1]) * Q, v += (oe.b = re = k[w + 2]) * Q, h += (oe.a = ee = k[w + 3]) * Q, z += Z, U += ne, G += re, Y += ee, oe = oe.next, Re < W && (ye += F);
      w = ge, q = X, se = me;
      for (let Re = 0; Re < E; Re++)
        S = w << 2, k[S + 3] = ee = h * b >> ce, ee > 0 ? (ee = 255 / ee, k[S] = (O * b >> ce) * ee, k[S + 1] = (H * b >> ce) * ee, k[S + 2] = (v * b >> ce) * ee) : k[S] = k[S + 1] = k[S + 2] = 0, O -= T, H -= I, v -= j, h -= J, T -= q.r, I -= q.g, j -= q.b, J -= q.a, S = ge + ((S = Re + B) < W ? S : W) * F << 2, O += z += q.r = k[S], H += U += q.g = k[S + 1], v += G += q.b = k[S + 2], h += Y += q.a = k[S + 3], q = q.next, T += Z = se.r, I += ne = se.g, j += re = se.b, J += ee = se.a, z -= Z, U -= ne, G -= re, Y -= ee, se = se.next, w += F;
    }
  }
  const m = function(x) {
    const k = Math.round(this.blurRadius());
    k > 0 && f(x, k);
  };
  return du.Blur = m, l.Factory.addGetterSetter(d.Node, "blurRadius", 0, (0, _.getNumberValidator)(), l.Factory.afterSetFilter), du;
}
var fu = {}, Wh;
function K1() {
  if (Wh) return fu;
  Wh = 1, Object.defineProperty(fu, "__esModule", { value: !0 }), fu.Brighten = void 0;
  const l = st(), d = sn(), _ = lt(), L = function(N) {
    const C = this.brightness() * 255, f = N.data, m = f.length;
    for (let g = 0; g < m; g += 4)
      f[g] += C, f[g + 1] += C, f[g + 2] += C;
  };
  return fu.Brighten = L, l.Factory.addGetterSetter(d.Node, "brightness", 0, (0, _.getNumberValidator)(), l.Factory.afterSetFilter), fu;
}
var hu = {}, qh;
function Y1() {
  if (qh) return hu;
  qh = 1, Object.defineProperty(hu, "__esModule", { value: !0 }), hu.Contrast = void 0;
  const l = st(), d = sn(), _ = lt(), L = function(N) {
    const C = Math.pow((this.contrast() + 100) / 100, 2), f = N.data, m = f.length;
    let g = 150, x = 150, k = 150;
    for (let F = 0; F < m; F += 4)
      g = f[F], x = f[F + 1], k = f[F + 2], g /= 255, g -= 0.5, g *= C, g += 0.5, g *= 255, x /= 255, x -= 0.5, x *= C, x += 0.5, x *= 255, k /= 255, k -= 0.5, k *= C, k += 0.5, k *= 255, g = g < 0 ? 0 : g > 255 ? 255 : g, x = x < 0 ? 0 : x > 255 ? 255 : x, k = k < 0 ? 0 : k > 255 ? 255 : k, f[F] = g, f[F + 1] = x, f[F + 2] = k;
  };
  return hu.Contrast = L, l.Factory.addGetterSetter(d.Node, "contrast", 0, (0, _.getNumberValidator)(), l.Factory.afterSetFilter), hu;
}
var pu = {}, Kh;
function X1() {
  if (Kh) return pu;
  Kh = 1, Object.defineProperty(pu, "__esModule", { value: !0 }), pu.Emboss = void 0;
  const l = st(), d = sn(), _ = Xt(), L = lt(), N = function(C) {
    const f = this.embossStrength() * 10, m = this.embossWhiteLevel() * 255, g = this.embossDirection(), x = this.embossBlend(), k = C.data, F = C.width, E = C.height, S = F * 4;
    let w = 0, R = 0, O = E;
    switch (g) {
      case "top-left":
        w = -1, R = -1;
        break;
      case "top":
        w = -1, R = 0;
        break;
      case "top-right":
        w = -1, R = 1;
        break;
      case "right":
        w = 0, R = 1;
        break;
      case "bottom-right":
        w = 1, R = 1;
        break;
      case "bottom":
        w = 1, R = 0;
        break;
      case "bottom-left":
        w = 1, R = -1;
        break;
      case "left":
        w = 0, R = -1;
        break;
      default:
        _.Util.error("Unknown emboss direction: " + g);
    }
    do {
      const H = (O - 1) * S;
      let v = w;
      O + v < 1 && (v = 0), O + v > E && (v = 0);
      const h = (O - 1 + v) * F * 4;
      let T = F;
      do {
        const I = H + (T - 1) * 4;
        let j = R;
        T + j < 1 && (j = 0), T + j > F && (j = 0);
        const J = h + (T - 1 + j) * 4, z = k[I] - k[J], U = k[I + 1] - k[J + 1], G = k[I + 2] - k[J + 2];
        let Y = z;
        const Z = Y > 0 ? Y : -Y, ne = U > 0 ? U : -U, re = G > 0 ? G : -G;
        if (ne > Z && (Y = U), re > Z && (Y = G), Y *= f, x) {
          const ee = k[I] + Y, Q = k[I + 1] + Y, P = k[I + 2] + Y;
          k[I] = ee > 255 ? 255 : ee < 0 ? 0 : ee, k[I + 1] = Q > 255 ? 255 : Q < 0 ? 0 : Q, k[I + 2] = P > 255 ? 255 : P < 0 ? 0 : P;
        } else {
          let ee = m - Y;
          ee < 0 ? ee = 0 : ee > 255 && (ee = 255), k[I] = k[I + 1] = k[I + 2] = ee;
        }
      } while (--T);
    } while (--O);
  };
  return pu.Emboss = N, l.Factory.addGetterSetter(d.Node, "embossStrength", 0.5, (0, L.getNumberValidator)(), l.Factory.afterSetFilter), l.Factory.addGetterSetter(d.Node, "embossWhiteLevel", 0.5, (0, L.getNumberValidator)(), l.Factory.afterSetFilter), l.Factory.addGetterSetter(d.Node, "embossDirection", "top-left", void 0, l.Factory.afterSetFilter), l.Factory.addGetterSetter(d.Node, "embossBlend", !1, void 0, l.Factory.afterSetFilter), pu;
}
var gu = {}, Yh;
function Q1() {
  if (Yh) return gu;
  Yh = 1, Object.defineProperty(gu, "__esModule", { value: !0 }), gu.Enhance = void 0;
  const l = st(), d = sn(), _ = lt();
  function L(C, f, m, g, x) {
    const k = m - f, F = x - g;
    if (k === 0)
      return g + F / 2;
    if (F === 0)
      return g;
    let E = (C - f) / k;
    return E = F * E + g, E;
  }
  const N = function(C) {
    const f = C.data, m = f.length;
    let g = f[0], x = g, k, F = f[1], E = F, S, w = f[2], R = w, O;
    const H = this.enhance();
    if (H === 0)
      return;
    for (let z = 0; z < m; z += 4)
      k = f[z + 0], k < g ? g = k : k > x && (x = k), S = f[z + 1], S < F ? F = S : S > E && (E = S), O = f[z + 2], O < w ? w = O : O > R && (R = O);
    x === g && (x = 255, g = 0), E === F && (E = 255, F = 0), R === w && (R = 255, w = 0);
    let v, h, T, I, j, J;
    if (H > 0)
      v = x + H * (255 - x), h = g - H * (g - 0), T = E + H * (255 - E), I = F - H * (F - 0), j = R + H * (255 - R), J = w - H * (w - 0);
    else {
      const z = (x + g) * 0.5;
      v = x + H * (x - z), h = g + H * (g - z);
      const U = (E + F) * 0.5;
      T = E + H * (E - U), I = F + H * (F - U);
      const G = (R + w) * 0.5;
      j = R + H * (R - G), J = w + H * (w - G);
    }
    for (let z = 0; z < m; z += 4)
      f[z + 0] = L(f[z + 0], g, x, h, v), f[z + 1] = L(f[z + 1], F, E, I, T), f[z + 2] = L(f[z + 2], w, R, J, j);
  };
  return gu.Enhance = N, l.Factory.addGetterSetter(d.Node, "enhance", 0, (0, _.getNumberValidator)(), l.Factory.afterSetFilter), gu;
}
var mu = {}, Xh;
function b1() {
  if (Xh) return mu;
  Xh = 1, Object.defineProperty(mu, "__esModule", { value: !0 }), mu.Grayscale = void 0;
  const l = function(d) {
    const _ = d.data, L = _.length;
    for (let N = 0; N < L; N += 4) {
      const C = 0.34 * _[N] + 0.5 * _[N + 1] + 0.16 * _[N + 2];
      _[N] = C, _[N + 1] = C, _[N + 2] = C;
    }
  };
  return mu.Grayscale = l, mu;
}
var yu = {}, Qh;
function J1() {
  if (Qh) return yu;
  Qh = 1, Object.defineProperty(yu, "__esModule", { value: !0 }), yu.HSL = void 0;
  const l = st(), d = sn(), _ = lt();
  l.Factory.addGetterSetter(d.Node, "hue", 0, (0, _.getNumberValidator)(), l.Factory.afterSetFilter), l.Factory.addGetterSetter(d.Node, "saturation", 0, (0, _.getNumberValidator)(), l.Factory.afterSetFilter), l.Factory.addGetterSetter(d.Node, "luminance", 0, (0, _.getNumberValidator)(), l.Factory.afterSetFilter);
  const L = function(N) {
    const C = N.data, f = C.length, m = 1, g = Math.pow(2, this.saturation()), x = Math.abs(this.hue() + 360) % 360, k = this.luminance() * 127, F = m * g * Math.cos(x * Math.PI / 180), E = m * g * Math.sin(x * Math.PI / 180), S = 0.299 * m + 0.701 * F + 0.167 * E, w = 0.587 * m - 0.587 * F + 0.33 * E, R = 0.114 * m - 0.114 * F - 0.497 * E, O = 0.299 * m - 0.299 * F - 0.328 * E, H = 0.587 * m + 0.413 * F + 0.035 * E, v = 0.114 * m - 0.114 * F + 0.293 * E, h = 0.299 * m - 0.3 * F + 1.25 * E, T = 0.587 * m - 0.586 * F - 1.05 * E, I = 0.114 * m + 0.886 * F - 0.2 * E;
    let j, J, z, U;
    for (let G = 0; G < f; G += 4)
      j = C[G + 0], J = C[G + 1], z = C[G + 2], U = C[G + 3], C[G + 0] = S * j + w * J + R * z + k, C[G + 1] = O * j + H * J + v * z + k, C[G + 2] = h * j + T * J + I * z + k, C[G + 3] = U;
  };
  return yu.HSL = L, yu;
}
var vu = {}, bh;
function Z1() {
  if (bh) return vu;
  bh = 1, Object.defineProperty(vu, "__esModule", { value: !0 }), vu.HSV = void 0;
  const l = st(), d = sn(), _ = lt(), L = function(N) {
    const C = N.data, f = C.length, m = Math.pow(2, this.value()), g = Math.pow(2, this.saturation()), x = Math.abs(this.hue() + 360) % 360, k = m * g * Math.cos(x * Math.PI / 180), F = m * g * Math.sin(x * Math.PI / 180), E = 0.299 * m + 0.701 * k + 0.167 * F, S = 0.587 * m - 0.587 * k + 0.33 * F, w = 0.114 * m - 0.114 * k - 0.497 * F, R = 0.299 * m - 0.299 * k - 0.328 * F, O = 0.587 * m + 0.413 * k + 0.035 * F, H = 0.114 * m - 0.114 * k + 0.293 * F, v = 0.299 * m - 0.3 * k + 1.25 * F, h = 0.587 * m - 0.586 * k - 1.05 * F, T = 0.114 * m + 0.886 * k - 0.2 * F;
    for (let I = 0; I < f; I += 4) {
      const j = C[I + 0], J = C[I + 1], z = C[I + 2], U = C[I + 3];
      C[I + 0] = E * j + S * J + w * z, C[I + 1] = R * j + O * J + H * z, C[I + 2] = v * j + h * J + T * z, C[I + 3] = U;
    }
  };
  return vu.HSV = L, l.Factory.addGetterSetter(d.Node, "hue", 0, (0, _.getNumberValidator)(), l.Factory.afterSetFilter), l.Factory.addGetterSetter(d.Node, "saturation", 0, (0, _.getNumberValidator)(), l.Factory.afterSetFilter), l.Factory.addGetterSetter(d.Node, "value", 0, (0, _.getNumberValidator)(), l.Factory.afterSetFilter), vu;
}
var _u = {}, Jh;
function $1() {
  if (Jh) return _u;
  Jh = 1, Object.defineProperty(_u, "__esModule", { value: !0 }), _u.Invert = void 0;
  const l = function(d) {
    const _ = d.data, L = _.length;
    for (let N = 0; N < L; N += 4)
      _[N] = 255 - _[N], _[N + 1] = 255 - _[N + 1], _[N + 2] = 255 - _[N + 2];
  };
  return _u.Invert = l, _u;
}
var Su = {}, Zh;
function ep() {
  if (Zh) return Su;
  Zh = 1, Object.defineProperty(Su, "__esModule", { value: !0 }), Su.Kaleidoscope = void 0;
  const l = st(), d = sn(), _ = Xt(), L = lt(), N = function(m, g, x) {
    const k = m.data, F = g.data, E = m.width, S = m.height, w = x.polarCenterX || E / 2, R = x.polarCenterY || S / 2;
    let O = Math.sqrt(w * w + R * R), H = E - w, v = S - R;
    const h = Math.sqrt(H * H + v * v);
    O = h > O ? h : O;
    const T = S, I = E, j = 360 / I * Math.PI / 180;
    for (let J = 0; J < I; J += 1) {
      const z = Math.sin(J * j), U = Math.cos(J * j);
      for (let G = 0; G < T; G += 1) {
        H = Math.floor(w + O * G / T * U), v = Math.floor(R + O * G / T * z);
        let Y = (v * E + H) * 4;
        const Z = k[Y + 0], ne = k[Y + 1], re = k[Y + 2], ee = k[Y + 3];
        Y = (J + G * E) * 4, F[Y + 0] = Z, F[Y + 1] = ne, F[Y + 2] = re, F[Y + 3] = ee;
      }
    }
  }, C = function(m, g, x) {
    const k = m.data, F = g.data, E = m.width, S = m.height, w = x.polarCenterX || E / 2, R = x.polarCenterY || S / 2;
    let O = Math.sqrt(w * w + R * R), H = E - w, v = S - R;
    const h = Math.sqrt(H * H + v * v);
    O = h > O ? h : O;
    const T = S, I = E, j = 0;
    let J, z;
    for (H = 0; H < E; H += 1)
      for (v = 0; v < S; v += 1) {
        const U = H - w, G = v - R, Y = Math.sqrt(U * U + G * G) * T / O;
        let Z = (Math.atan2(G, U) * 180 / Math.PI + 360 + j) % 360;
        Z = Z * I / 360, J = Math.floor(Z), z = Math.floor(Y);
        let ne = (z * E + J) * 4;
        const re = k[ne + 0], ee = k[ne + 1], Q = k[ne + 2], P = k[ne + 3];
        ne = (v * E + H) * 4, F[ne + 0] = re, F[ne + 1] = ee, F[ne + 2] = Q, F[ne + 3] = P;
      }
  }, f = function(m) {
    const g = m.width, x = m.height;
    let k, F, E, S, w, R, O, H, v, h, T = Math.round(this.kaleidoscopePower());
    const I = Math.round(this.kaleidoscopeAngle()), j = Math.floor(g * (I % 360) / 360);
    if (T < 1)
      return;
    const J = _.Util.createCanvasElement();
    J.width = g, J.height = x;
    const z = J.getContext("2d").getImageData(0, 0, g, x);
    _.Util.releaseCanvas(J), N(m, z, {
      polarCenterX: g / 2,
      polarCenterY: x / 2
    });
    let U = g / Math.pow(2, T);
    for (; U <= 8; )
      U = U * 2, T -= 1;
    U = Math.ceil(U);
    let G = U, Y = 0, Z = G, ne = 1;
    for (j + U > g && (Y = G, Z = 0, ne = -1), F = 0; F < x; F += 1)
      for (k = Y; k !== Z; k += ne)
        E = Math.round(k + j) % g, v = (g * F + E) * 4, w = z.data[v + 0], R = z.data[v + 1], O = z.data[v + 2], H = z.data[v + 3], h = (g * F + k) * 4, z.data[h + 0] = w, z.data[h + 1] = R, z.data[h + 2] = O, z.data[h + 3] = H;
    for (F = 0; F < x; F += 1)
      for (G = Math.floor(U), S = 0; S < T; S += 1) {
        for (k = 0; k < G + 1; k += 1)
          v = (g * F + k) * 4, w = z.data[v + 0], R = z.data[v + 1], O = z.data[v + 2], H = z.data[v + 3], h = (g * F + G * 2 - k - 1) * 4, z.data[h + 0] = w, z.data[h + 1] = R, z.data[h + 2] = O, z.data[h + 3] = H;
        G *= 2;
      }
    C(z, m, {});
  };
  return Su.Kaleidoscope = f, l.Factory.addGetterSetter(d.Node, "kaleidoscopePower", 2, (0, L.getNumberValidator)(), l.Factory.afterSetFilter), l.Factory.addGetterSetter(d.Node, "kaleidoscopeAngle", 0, (0, L.getNumberValidator)(), l.Factory.afterSetFilter), Su;
}
var wu = {}, $h;
function tp() {
  if ($h) return wu;
  $h = 1, Object.defineProperty(wu, "__esModule", { value: !0 }), wu.Mask = void 0;
  const l = st(), d = sn(), _ = lt();
  function L(E, S, w) {
    let R = (w * E.width + S) * 4;
    const O = [];
    return O.push(E.data[R++], E.data[R++], E.data[R++], E.data[R++]), O;
  }
  function N(E, S) {
    return Math.sqrt(Math.pow(E[0] - S[0], 2) + Math.pow(E[1] - S[1], 2) + Math.pow(E[2] - S[2], 2));
  }
  function C(E) {
    const S = [0, 0, 0];
    for (let w = 0; w < E.length; w++)
      S[0] += E[w][0], S[1] += E[w][1], S[2] += E[w][2];
    return S[0] /= E.length, S[1] /= E.length, S[2] /= E.length, S;
  }
  function f(E, S) {
    const w = L(E, 0, 0), R = L(E, E.width - 1, 0), O = L(E, 0, E.height - 1), H = L(E, E.width - 1, E.height - 1), v = S || 10;
    if (N(w, R) < v && N(R, H) < v && N(H, O) < v && N(O, w) < v) {
      const h = C([R, w, H, O]), T = [];
      for (let I = 0; I < E.width * E.height; I++) {
        const j = N(h, [
          E.data[I * 4],
          E.data[I * 4 + 1],
          E.data[I * 4 + 2]
        ]);
        T[I] = j < v ? 0 : 255;
      }
      return T;
    }
  }
  function m(E, S) {
    for (let w = 0; w < E.width * E.height; w++)
      E.data[4 * w + 3] = S[w];
  }
  function g(E, S, w) {
    const R = [1, 1, 1, 1, 0, 1, 1, 1, 1], O = Math.round(Math.sqrt(R.length)), H = Math.floor(O / 2), v = [];
    for (let h = 0; h < w; h++)
      for (let T = 0; T < S; T++) {
        const I = h * S + T;
        let j = 0;
        for (let J = 0; J < O; J++)
          for (let z = 0; z < O; z++) {
            const U = h + J - H, G = T + z - H;
            if (U >= 0 && U < w && G >= 0 && G < S) {
              const Y = U * S + G, Z = R[J * O + z];
              j += E[Y] * Z;
            }
          }
        v[I] = j === 2040 ? 255 : 0;
      }
    return v;
  }
  function x(E, S, w) {
    const R = [1, 1, 1, 1, 1, 1, 1, 1, 1], O = Math.round(Math.sqrt(R.length)), H = Math.floor(O / 2), v = [];
    for (let h = 0; h < w; h++)
      for (let T = 0; T < S; T++) {
        const I = h * S + T;
        let j = 0;
        for (let J = 0; J < O; J++)
          for (let z = 0; z < O; z++) {
            const U = h + J - H, G = T + z - H;
            if (U >= 0 && U < w && G >= 0 && G < S) {
              const Y = U * S + G, Z = R[J * O + z];
              j += E[Y] * Z;
            }
          }
        v[I] = j >= 1020 ? 255 : 0;
      }
    return v;
  }
  function k(E, S, w) {
    const R = [0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111], O = Math.round(Math.sqrt(R.length)), H = Math.floor(O / 2), v = [];
    for (let h = 0; h < w; h++)
      for (let T = 0; T < S; T++) {
        const I = h * S + T;
        let j = 0;
        for (let J = 0; J < O; J++)
          for (let z = 0; z < O; z++) {
            const U = h + J - H, G = T + z - H;
            if (U >= 0 && U < w && G >= 0 && G < S) {
              const Y = U * S + G, Z = R[J * O + z];
              j += E[Y] * Z;
            }
          }
        v[I] = j;
      }
    return v;
  }
  const F = function(E) {
    const S = this.threshold();
    let w = f(E, S);
    return w && (w = g(w, E.width, E.height), w = x(w, E.width, E.height), w = k(w, E.width, E.height), m(E, w)), E;
  };
  return wu.Mask = F, l.Factory.addGetterSetter(d.Node, "threshold", 0, (0, _.getNumberValidator)(), l.Factory.afterSetFilter), wu;
}
var xu = {}, e0;
function np() {
  if (e0) return xu;
  e0 = 1, Object.defineProperty(xu, "__esModule", { value: !0 }), xu.Noise = void 0;
  const l = st(), d = sn(), _ = lt(), L = function(N) {
    const C = this.noise() * 255, f = N.data, m = f.length, g = C / 2;
    for (let x = 0; x < m; x += 4)
      f[x + 0] += g - 2 * g * Math.random(), f[x + 1] += g - 2 * g * Math.random(), f[x + 2] += g - 2 * g * Math.random();
  };
  return xu.Noise = L, l.Factory.addGetterSetter(d.Node, "noise", 0.2, (0, _.getNumberValidator)(), l.Factory.afterSetFilter), xu;
}
var Cu = {}, t0;
function rp() {
  if (t0) return Cu;
  t0 = 1, Object.defineProperty(Cu, "__esModule", { value: !0 }), Cu.Pixelate = void 0;
  const l = st(), d = Xt(), _ = sn(), L = lt(), N = function(C) {
    let f = Math.ceil(this.pixelSize()), m = C.width, g = C.height, x = Math.ceil(m / f), k = Math.ceil(g / f), F = C.data;
    if (f <= 0) {
      d.Util.error("pixelSize value can not be <= 0");
      return;
    }
    for (let E = 0; E < x; E += 1)
      for (let S = 0; S < k; S += 1) {
        let w = 0, R = 0, O = 0, H = 0;
        const v = E * f, h = v + f, T = S * f, I = T + f;
        let j = 0;
        for (let J = v; J < h; J += 1)
          if (!(J >= m))
            for (let z = T; z < I; z += 1) {
              if (z >= g)
                continue;
              const U = (m * z + J) * 4;
              w += F[U + 0], R += F[U + 1], O += F[U + 2], H += F[U + 3], j += 1;
            }
        w = w / j, R = R / j, O = O / j, H = H / j;
        for (let J = v; J < h; J += 1)
          if (!(J >= m))
            for (let z = T; z < I; z += 1) {
              if (z >= g)
                continue;
              const U = (m * z + J) * 4;
              F[U + 0] = w, F[U + 1] = R, F[U + 2] = O, F[U + 3] = H;
            }
      }
  };
  return Cu.Pixelate = N, l.Factory.addGetterSetter(_.Node, "pixelSize", 8, (0, L.getNumberValidator)(), l.Factory.afterSetFilter), Cu;
}
var ku = {}, n0;
function ip() {
  if (n0) return ku;
  n0 = 1, Object.defineProperty(ku, "__esModule", { value: !0 }), ku.Posterize = void 0;
  const l = st(), d = sn(), _ = lt(), L = function(N) {
    const C = Math.round(this.levels() * 254) + 1, f = N.data, m = f.length, g = 255 / C;
    for (let x = 0; x < m; x += 1)
      f[x] = Math.floor(f[x] / g) * g;
  };
  return ku.Posterize = L, l.Factory.addGetterSetter(d.Node, "levels", 0.5, (0, _.getNumberValidator)(), l.Factory.afterSetFilter), ku;
}
var Eu = {}, r0;
function sp() {
  if (r0) return Eu;
  r0 = 1, Object.defineProperty(Eu, "__esModule", { value: !0 }), Eu.RGB = void 0;
  const l = st(), d = sn(), _ = lt(), L = function(N) {
    const C = N.data, f = C.length, m = this.red(), g = this.green(), x = this.blue();
    for (let k = 0; k < f; k += 4) {
      const F = (0.34 * C[k] + 0.5 * C[k + 1] + 0.16 * C[k + 2]) / 255;
      C[k] = F * m, C[k + 1] = F * g, C[k + 2] = F * x, C[k + 3] = C[k + 3];
    }
  };
  return Eu.RGB = L, l.Factory.addGetterSetter(d.Node, "red", 0, function(N) {
    return this._filterUpToDate = !1, N > 255 ? 255 : N < 0 ? 0 : Math.round(N);
  }), l.Factory.addGetterSetter(d.Node, "green", 0, function(N) {
    return this._filterUpToDate = !1, N > 255 ? 255 : N < 0 ? 0 : Math.round(N);
  }), l.Factory.addGetterSetter(d.Node, "blue", 0, _.RGBComponent, l.Factory.afterSetFilter), Eu;
}
var Pu = {}, i0;
function op() {
  if (i0) return Pu;
  i0 = 1, Object.defineProperty(Pu, "__esModule", { value: !0 }), Pu.RGBA = void 0;
  const l = st(), d = sn(), _ = lt(), L = function(N) {
    const C = N.data, f = C.length, m = this.red(), g = this.green(), x = this.blue(), k = this.alpha();
    for (let F = 0; F < f; F += 4) {
      const E = 1 - k;
      C[F] = m * k + C[F] * E, C[F + 1] = g * k + C[F + 1] * E, C[F + 2] = x * k + C[F + 2] * E;
    }
  };
  return Pu.RGBA = L, l.Factory.addGetterSetter(d.Node, "red", 0, function(N) {
    return this._filterUpToDate = !1, N > 255 ? 255 : N < 0 ? 0 : Math.round(N);
  }), l.Factory.addGetterSetter(d.Node, "green", 0, function(N) {
    return this._filterUpToDate = !1, N > 255 ? 255 : N < 0 ? 0 : Math.round(N);
  }), l.Factory.addGetterSetter(d.Node, "blue", 0, _.RGBComponent, l.Factory.afterSetFilter), l.Factory.addGetterSetter(d.Node, "alpha", 1, function(N) {
    return this._filterUpToDate = !1, N > 1 ? 1 : N < 0 ? 0 : N;
  }), Pu;
}
var Ru = {}, s0;
function lp() {
  if (s0) return Ru;
  s0 = 1, Object.defineProperty(Ru, "__esModule", { value: !0 }), Ru.Sepia = void 0;
  const l = function(d) {
    const _ = d.data, L = _.length;
    for (let N = 0; N < L; N += 4) {
      const C = _[N + 0], f = _[N + 1], m = _[N + 2];
      _[N + 0] = Math.min(255, C * 0.393 + f * 0.769 + m * 0.189), _[N + 1] = Math.min(255, C * 0.349 + f * 0.686 + m * 0.168), _[N + 2] = Math.min(255, C * 0.272 + f * 0.534 + m * 0.131);
    }
  };
  return Ru.Sepia = l, Ru;
}
var Tu = {}, o0;
function ap() {
  if (o0) return Tu;
  o0 = 1, Object.defineProperty(Tu, "__esModule", { value: !0 }), Tu.Solarize = void 0;
  const l = function(d) {
    const _ = d.data, L = d.width, N = d.height, C = L * 4;
    let f = N;
    do {
      const m = (f - 1) * C;
      let g = L;
      do {
        const x = m + (g - 1) * 4;
        let k = _[x], F = _[x + 1], E = _[x + 2];
        k > 127 && (k = 255 - k), F > 127 && (F = 255 - F), E > 127 && (E = 255 - E), _[x] = k, _[x + 1] = F, _[x + 2] = E;
      } while (--g);
    } while (--f);
  };
  return Tu.Solarize = l, Tu;
}
var Nu = {}, l0;
function up() {
  if (l0) return Nu;
  l0 = 1, Object.defineProperty(Nu, "__esModule", { value: !0 }), Nu.Threshold = void 0;
  const l = st(), d = sn(), _ = lt(), L = function(N) {
    const C = this.threshold() * 255, f = N.data, m = f.length;
    for (let g = 0; g < m; g += 1)
      f[g] = f[g] < C ? 0 : 255;
  };
  return Nu.Threshold = L, l.Factory.addGetterSetter(d.Node, "threshold", 0.5, (0, _.getNumberValidator)(), l.Factory.afterSetFilter), Nu;
}
var a0;
function cp() {
  if (a0) return ja;
  a0 = 1, Object.defineProperty(ja, "__esModule", { value: !0 }), ja.Konva = void 0;
  const l = cf(), d = M1(), _ = A1(), L = O1(), N = I1(), C = D1(), f = z1(), m = G0(), g = yf(), x = U0(), k = G1(), F = U1(), E = B1(), S = V1(), w = B0(), R = H1(), O = j1(), H = W1(), v = q1(), h = K1(), T = Y1(), I = X1(), j = Q1(), J = b1(), z = J1(), U = Z1(), G = $1(), Y = ep(), Z = tp(), ne = np(), re = rp(), ee = ip(), Q = sp(), P = op(), D = lp(), W = ap(), B = up();
  return ja.Konva = l.Konva.Util._assign(l.Konva, {
    Arc: d.Arc,
    Arrow: _.Arrow,
    Circle: L.Circle,
    Ellipse: N.Ellipse,
    Image: C.Image,
    Label: f.Label,
    Tag: f.Tag,
    Line: m.Line,
    Path: g.Path,
    Rect: x.Rect,
    RegularPolygon: k.RegularPolygon,
    Ring: F.Ring,
    Sprite: E.Sprite,
    Star: S.Star,
    Text: w.Text,
    TextPath: R.TextPath,
    Transformer: O.Transformer,
    Wedge: H.Wedge,
    Filters: {
      Blur: v.Blur,
      Brighten: h.Brighten,
      Contrast: T.Contrast,
      Emboss: I.Emboss,
      Enhance: j.Enhance,
      Grayscale: J.Grayscale,
      HSL: z.HSL,
      HSV: U.HSV,
      Invert: G.Invert,
      Kaleidoscope: Y.Kaleidoscope,
      Mask: Z.Mask,
      Noise: ne.Noise,
      Pixelate: re.Pixelate,
      Posterize: ee.Posterize,
      RGB: Q.RGB,
      RGBA: P.RGBA,
      Sepia: D.Sepia,
      Solarize: W.Solarize,
      Threshold: B.Threshold
    }
  }), ja;
}
var dp = Zc.exports, u0;
function fp() {
  if (u0) return Zc.exports;
  u0 = 1, Object.defineProperty(dp, "__esModule", { value: !0 });
  const l = cp();
  return Zc.exports = l.Konva, Zc.exports;
}
fp();
var Kc = { exports: {} }, c0;
function hp() {
  return c0 || (c0 = 1, (function(l, d) {
    Object.defineProperty(d, "__esModule", { value: !0 }), d.Konva = void 0;
    var _ = cf();
    Object.defineProperty(d, "Konva", { enumerable: !0, get: function() {
      return _.Konva;
    } });
    const L = cf();
    l.exports = L.Konva;
  })(Kc, Kc.exports)), Kc.exports;
}
var pp = hp();
const Ou = /* @__PURE__ */ ed(pp);
var nf = { exports: {} };
/**
 * @license React
 * react-reconciler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rf, d0;
function gp() {
  return d0 || (d0 = 1, rf = function(d) {
    var _ = {}, L = Iu(), N = hf(), C = Object.assign;
    function f(n) {
      for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, s = 1; s < arguments.length; s++) r += "&args[]=" + encodeURIComponent(arguments[s]);
      return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    var m = L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, g = Symbol.for("react.element"), x = Symbol.for("react.portal"), k = Symbol.for("react.fragment"), F = Symbol.for("react.strict_mode"), E = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), w = Symbol.for("react.context"), R = Symbol.for("react.forward_ref"), O = Symbol.for("react.suspense"), H = Symbol.for("react.suspense_list"), v = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), T = Symbol.for("react.offscreen"), I = Symbol.iterator;
    function j(n) {
      return n === null || typeof n != "object" ? null : (n = I && n[I] || n["@@iterator"], typeof n == "function" ? n : null);
    }
    function J(n) {
      if (n == null) return null;
      if (typeof n == "function") return n.displayName || n.name || null;
      if (typeof n == "string") return n;
      switch (n) {
        case k:
          return "Fragment";
        case x:
          return "Portal";
        case E:
          return "Profiler";
        case F:
          return "StrictMode";
        case O:
          return "Suspense";
        case H:
          return "SuspenseList";
      }
      if (typeof n == "object") switch (n.$$typeof) {
        case w:
          return (n.displayName || "Context") + ".Consumer";
        case S:
          return (n._context.displayName || "Context") + ".Provider";
        case R:
          var r = n.render;
          return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
        case v:
          return r = n.displayName || null, r !== null ? r : J(n.type) || "Memo";
        case h:
          r = n._payload, n = n._init;
          try {
            return J(n(r));
          } catch {
          }
      }
      return null;
    }
    function z(n) {
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
          return J(r);
        case 8:
          return r === F ? "StrictMode" : "Mode";
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
    function U(n) {
      var r = n, s = n;
      if (n.alternate) for (; r.return; ) r = r.return;
      else {
        n = r;
        do
          r = n, (r.flags & 4098) !== 0 && (s = r.return), n = r.return;
        while (n);
      }
      return r.tag === 3 ? s : null;
    }
    function G(n) {
      if (U(n) !== n) throw Error(f(188));
    }
    function Y(n) {
      var r = n.alternate;
      if (!r) {
        if (r = U(n), r === null) throw Error(f(188));
        return r !== n ? null : n;
      }
      for (var s = n, a = r; ; ) {
        var c = s.return;
        if (c === null) break;
        var y = c.alternate;
        if (y === null) {
          if (a = c.return, a !== null) {
            s = a;
            continue;
          }
          break;
        }
        if (c.child === y.child) {
          for (y = c.child; y; ) {
            if (y === s) return G(c), n;
            if (y === a) return G(c), r;
            y = y.sibling;
          }
          throw Error(f(188));
        }
        if (s.return !== a.return) s = c, a = y;
        else {
          for (var V = !1, ie = c.child; ie; ) {
            if (ie === s) {
              V = !0, s = c, a = y;
              break;
            }
            if (ie === a) {
              V = !0, a = c, s = y;
              break;
            }
            ie = ie.sibling;
          }
          if (!V) {
            for (ie = y.child; ie; ) {
              if (ie === s) {
                V = !0, s = y, a = c;
                break;
              }
              if (ie === a) {
                V = !0, a = y, s = c;
                break;
              }
              ie = ie.sibling;
            }
            if (!V) throw Error(f(189));
          }
        }
        if (s.alternate !== a) throw Error(f(190));
      }
      if (s.tag !== 3) throw Error(f(188));
      return s.stateNode.current === s ? n : r;
    }
    function Z(n) {
      return n = Y(n), n !== null ? ne(n) : null;
    }
    function ne(n) {
      if (n.tag === 5 || n.tag === 6) return n;
      for (n = n.child; n !== null; ) {
        var r = ne(n);
        if (r !== null) return r;
        n = n.sibling;
      }
      return null;
    }
    function re(n) {
      if (n.tag === 5 || n.tag === 6) return n;
      for (n = n.child; n !== null; ) {
        if (n.tag !== 4) {
          var r = re(n);
          if (r !== null) return r;
        }
        n = n.sibling;
      }
      return null;
    }
    var ee = Array.isArray, Q = d.getPublicInstance, P = d.getRootHostContext, D = d.getChildHostContext, W = d.prepareForCommit, B = d.resetAfterCommit, M = d.createInstance, X = d.appendInitialChild, b = d.finalizeInitialChildren, ce = d.prepareUpdate, me = d.shouldSetTextContent, oe = d.createTextInstance, q = d.scheduleTimeout, se = d.cancelTimeout, ge = d.noTimeout, ye = d.isPrimaryRenderer, Re = d.supportsMutation, Be = d.supportsPersistence, Ge = d.supportsHydration, rt = d.getInstanceFromNode, We = d.preparePortalMount, Dt = d.getCurrentEventPriority, $e = d.detachDeletedInstance, gt = d.supportsMicrotasks, Ut = d.scheduleMicrotask, kt = d.supportsTestSelectors, _t = d.findFiberRoot, ut = d.getBoundingRect, Sn = d.getTextContent, Qt = d.isHiddenSubtree, fr = d.matchAccessibilityRole, jt = d.setFocusIfFocusable, Mn = d.setupIntersectionObserver, on = d.appendChild, Ln = d.appendChildToContainer, At = d.commitTextUpdate, Ot = d.commitMount, Lr = d.commitUpdate, Di = d.insertBefore, Ar = d.insertInContainerBefore, co = d.removeChild, ve = d.removeChildFromContainer, xe = d.resetTextContent, Te = d.hideInstance, Ee = d.hideTextInstance, Qe = d.unhideInstance, be = d.unhideTextInstance, mt = d.clearContainer, Wn = d.cloneInstance, Or = d.createContainerChildSet, bt = d.appendChildToContainerChildSet, An = d.finalizeContainerChildren, Qr = d.replaceContainerChildren, br = d.cloneHiddenInstance, fo = d.cloneHiddenTextInstance, zi = d.canHydrateInstance, ho = d.canHydrateTextInstance, Gi = d.canHydrateSuspenseInstance, Du = d.isSuspenseInstancePending, Ui = d.isSuspenseInstanceFallback, Xo = d.getSuspenseInstanceFallbackErrorDetails, Qo = d.registerSuspenseInstanceRetry, ys = d.getNextHydratableSibling, id = d.getFirstHydratableChild, sd = d.getFirstHydratableChildWithinContainer, od = d.getFirstHydratableChildWithinSuspenseInstance, Bi = d.hydrateInstance, zu = d.hydrateTextInstance, Gu = d.hydrateSuspenseInstance, ld = d.getNextHydratableInstanceAfterSuspenseInstance, Uu = d.commitHydratedContainer, Bu = d.commitHydratedSuspenseInstance, Vu = d.clearSuspenseBoundary, Hu = d.clearSuspenseBoundaryFromContainer, ad = d.shouldDeleteUnhydratedTailInstances, ud = d.didNotMatchHydratedContainerTextInstance, Bt = d.didNotMatchHydratedTextInstance, bl;
    function Vi(n) {
      if (bl === void 0) try {
        throw Error();
      } catch (s) {
        var r = s.stack.trim().match(/\n( *(at )?)/);
        bl = r && r[1] || "";
      }
      return `
` + bl + n;
    }
    var bo = !1;
    function vs(n, r) {
      if (!n || bo) return "";
      bo = !0;
      var s = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        if (r) if (r = function() {
          throw Error();
        }, Object.defineProperty(r.prototype, "props", { set: function() {
          throw Error();
        } }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(r, []);
          } catch (Ce) {
            var a = Ce;
          }
          Reflect.construct(n, [], r);
        } else {
          try {
            r.call();
          } catch (Ce) {
            a = Ce;
          }
          n.call(r.prototype);
        }
        else {
          try {
            throw Error();
          } catch (Ce) {
            a = Ce;
          }
          n();
        }
      } catch (Ce) {
        if (Ce && a && typeof Ce.stack == "string") {
          for (var c = Ce.stack.split(`
`), y = a.stack.split(`
`), V = c.length - 1, ie = y.length - 1; 1 <= V && 0 <= ie && c[V] !== y[ie]; ) ie--;
          for (; 1 <= V && 0 <= ie; V--, ie--) if (c[V] !== y[ie]) {
            if (V !== 1 || ie !== 1)
              do
                if (V--, ie--, 0 > ie || c[V] !== y[ie]) {
                  var he = `
` + c[V].replace(" at new ", " at ");
                  return n.displayName && he.includes("<anonymous>") && (he = he.replace("<anonymous>", n.displayName)), he;
                }
              while (1 <= V && 0 <= ie);
            break;
          }
        }
      } finally {
        bo = !1, Error.prepareStackTrace = s;
      }
      return (n = n ? n.displayName || n.name : "") ? Vi(n) : "";
    }
    var cd = Object.prototype.hasOwnProperty, Jo = [], Jr = -1;
    function hn(n) {
      return { current: n };
    }
    function Et(n) {
      0 > Jr || (n.current = Jo[Jr], Jo[Jr] = null, Jr--);
    }
    function et(n, r) {
      Jr++, Jo[Jr] = n.current, n.current = r;
    }
    var hi = {}, wn = hn(hi), qn = hn(!1), Ir = hi;
    function Zr(n, r) {
      var s = n.type.contextTypes;
      if (!s) return hi;
      var a = n.stateNode;
      if (a && a.__reactInternalMemoizedUnmaskedChildContext === r) return a.__reactInternalMemoizedMaskedChildContext;
      var c = {}, y;
      for (y in s) c[y] = r[y];
      return a && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
    }
    function ln(n) {
      return n = n.childContextTypes, n != null;
    }
    function Hi() {
      Et(qn), Et(wn);
    }
    function ju(n, r, s) {
      if (wn.current !== hi) throw Error(f(168));
      et(wn, r), et(qn, s);
    }
    function Wu(n, r, s) {
      var a = n.stateNode;
      if (r = r.childContextTypes, typeof a.getChildContext != "function") return s;
      a = a.getChildContext();
      for (var c in a) if (!(c in r)) throw Error(f(108, z(n) || "Unknown", c));
      return C({}, s, a);
    }
    function _s(n) {
      return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || hi, Ir = wn.current, et(wn, n), et(qn, qn.current), !0;
    }
    function Jl(n, r, s) {
      var a = n.stateNode;
      if (!a) throw Error(f(169));
      s ? (n = Wu(n, r, Ir), a.__reactInternalMemoizedMergedChildContext = n, Et(qn), Et(wn), et(wn, n)) : Et(qn), et(qn, s);
    }
    var Zn = Math.clz32 ? Math.clz32 : Zl, po = Math.log, dd = Math.LN2;
    function Zl(n) {
      return n >>>= 0, n === 0 ? 32 : 31 - (po(n) / dd | 0) | 0;
    }
    var at = 64, go = 4194304;
    function Ss(n) {
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
    function ws(n, r) {
      var s = n.pendingLanes;
      if (s === 0) return 0;
      var a = 0, c = n.suspendedLanes, y = n.pingedLanes, V = s & 268435455;
      if (V !== 0) {
        var ie = V & ~c;
        ie !== 0 ? a = Ss(ie) : (y &= V, y !== 0 && (a = Ss(y)));
      } else V = s & ~c, V !== 0 ? a = Ss(V) : y !== 0 && (a = Ss(y));
      if (a === 0) return 0;
      if (r !== 0 && r !== a && (r & c) === 0 && (c = a & -a, y = r & -r, c >= y || c === 16 && (y & 4194240) !== 0)) return r;
      if ((a & 4) !== 0 && (a |= s & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= a; 0 < r; ) s = 31 - Zn(r), c = 1 << s, a |= n[s], r &= ~c;
      return a;
    }
    function qu(n, r) {
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
    function Ku(n, r) {
      for (var s = n.suspendedLanes, a = n.pingedLanes, c = n.expirationTimes, y = n.pendingLanes; 0 < y; ) {
        var V = 31 - Zn(y), ie = 1 << V, he = c[V];
        he === -1 ? ((ie & s) === 0 || (ie & a) !== 0) && (c[V] = qu(ie, r)) : he <= r && (n.expiredLanes |= ie), y &= ~ie;
      }
    }
    function Zo(n) {
      return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
    }
    function $o() {
      var n = at;
      return at <<= 1, (at & 4194240) === 0 && (at = 64), n;
    }
    function xs(n) {
      for (var r = [], s = 0; 31 > s; s++) r.push(n);
      return r;
    }
    function hr(n, r, s) {
      n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Zn(r), n[r] = s;
    }
    function pi(n, r) {
      var s = n.pendingLanes & ~r;
      n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
      var a = n.eventTimes;
      for (n = n.expirationTimes; 0 < s; ) {
        var c = 31 - Zn(s), y = 1 << c;
        r[c] = 0, a[c] = -1, n[c] = -1, s &= ~y;
      }
    }
    function Dr(n, r) {
      var s = n.entangledLanes |= r;
      for (n = n.entanglements; s; ) {
        var a = 31 - Zn(s), c = 1 << a;
        c & r | n[a] & r && (n[a] |= r), s &= ~c;
      }
    }
    var tt = 0;
    function Cs(n) {
      return n &= -n, 1 < n ? 4 < n ? (n & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
    }
    var zr = N.unstable_scheduleCallback, Yu = N.unstable_cancelCallback, Xu = N.unstable_shouldYield, mo = N.unstable_requestPaint, an = N.unstable_now, el = N.unstable_ImmediatePriority, tl = N.unstable_UserBlockingPriority, nl = N.unstable_NormalPriority, fd = N.unstable_IdlePriority, gi = null, Kn = null;
    function ks(n) {
      if (Kn && typeof Kn.onCommitFiberRoot == "function") try {
        Kn.onCommitFiberRoot(gi, n, void 0, (n.current.flags & 128) === 128);
      } catch {
      }
    }
    function rl(n, r) {
      return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
    }
    var kr = typeof Object.is == "function" ? Object.is : rl, $r = null, Es = !1, Ps = !1;
    function il(n) {
      $r === null ? $r = [n] : $r.push(n);
    }
    function Qu(n) {
      Es = !0, il(n);
    }
    function pn() {
      if (!Ps && $r !== null) {
        Ps = !0;
        var n = 0, r = tt;
        try {
          var s = $r;
          for (tt = 1; n < s.length; n++) {
            var a = s[n];
            do
              a = a(!0);
            while (a !== null);
          }
          $r = null, Es = !1;
        } catch (c) {
          throw $r !== null && ($r = $r.slice(n + 1)), zr(el, pn), c;
        } finally {
          tt = r, Ps = !1;
        }
      }
      return null;
    }
    var mi = [], ei = 0, yo = null, ji = 0, On = [], $n = 0, Jt = null, Yn = 1, Er = "";
    function Pr(n, r) {
      mi[ei++] = ji, mi[ei++] = yo, yo = n, ji = r;
    }
    function bu(n, r, s) {
      On[$n++] = Yn, On[$n++] = Er, On[$n++] = Jt, Jt = n;
      var a = Yn;
      n = Er;
      var c = 32 - Zn(a) - 1;
      a &= ~(1 << c), s += 1;
      var y = 32 - Zn(r) + c;
      if (30 < y) {
        var V = c - c % 5;
        y = (a & (1 << V) - 1).toString(32), a >>= V, c -= V, Yn = 1 << 32 - Zn(r) + c | s << c | a, Er = y + n;
      } else Yn = 1 << y | s << c | a, Er = n;
    }
    function vo(n) {
      n.return !== null && (Pr(n, 1), bu(n, 1, 0));
    }
    function _o(n) {
      for (; n === yo; ) yo = mi[--ei], mi[ei] = null, ji = mi[--ei], mi[ei] = null;
      for (; n === Jt; ) Jt = On[--$n], On[$n] = null, Er = On[--$n], On[$n] = null, Yn = On[--$n], On[$n] = null;
    }
    var gn = null, In = null, Pt = !1, So = !1, Rr = null;
    function Ju(n, r) {
      var s = ur(5, null, null, 0);
      s.elementType = "DELETED", s.stateNode = r, s.return = n, r = n.deletions, r === null ? (n.deletions = [s], n.flags |= 16) : r.push(s);
    }
    function sl(n, r) {
      switch (n.tag) {
        case 5:
          return r = zi(r, n.type, n.pendingProps), r !== null ? (n.stateNode = r, gn = n, In = id(r), !0) : !1;
        case 6:
          return r = ho(r, n.pendingProps), r !== null ? (n.stateNode = r, gn = n, In = null, !0) : !1;
        case 13:
          if (r = Gi(r), r !== null) {
            var s = Jt !== null ? { id: Yn, overflow: Er } : null;
            return n.memoizedState = { dehydrated: r, treeContext: s, retryLane: 1073741824 }, s = ur(18, null, null, 0), s.stateNode = r, s.return = n, n.child = s, gn = n, In = null, !0;
          }
          return !1;
        default:
          return !1;
      }
    }
    function $l(n) {
      return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
    }
    function ea(n) {
      if (Pt) {
        var r = In;
        if (r) {
          var s = r;
          if (!sl(n, r)) {
            if ($l(n)) throw Error(f(418));
            r = ys(s);
            var a = gn;
            r && sl(n, r) ? Ju(a, s) : (n.flags = n.flags & -4097 | 2, Pt = !1, gn = n);
          }
        } else {
          if ($l(n)) throw Error(f(418));
          n.flags = n.flags & -4097 | 2, Pt = !1, gn = n;
        }
      }
    }
    function Zu(n) {
      for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
      gn = n;
    }
    function ol(n) {
      if (!Ge || n !== gn) return !1;
      if (!Pt) return Zu(n), Pt = !0, !1;
      if (n.tag !== 3 && (n.tag !== 5 || ad(n.type) && !me(n.type, n.memoizedProps))) {
        var r = In;
        if (r) {
          if ($l(n)) throw $u(), Error(f(418));
          for (; r; ) Ju(n, r), r = ys(r);
        }
      }
      if (Zu(n), n.tag === 13) {
        if (!Ge) throw Error(f(316));
        if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(f(317));
        In = ld(n);
      } else In = gn ? ys(n.stateNode) : null;
      return !0;
    }
    function $u() {
      for (var n = In; n; ) n = ys(n);
    }
    function Wi() {
      Ge && (In = gn = null, So = Pt = !1);
    }
    function ta(n) {
      Rr === null ? Rr = [n] : Rr.push(n);
    }
    var hd = m.ReactCurrentBatchConfig;
    function ll(n, r) {
      if (kr(n, r)) return !0;
      if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
      var s = Object.keys(n), a = Object.keys(r);
      if (s.length !== a.length) return !1;
      for (a = 0; a < s.length; a++) {
        var c = s[a];
        if (!cd.call(r, c) || !kr(n[c], r[c])) return !1;
      }
      return !0;
    }
    function pd(n) {
      switch (n.tag) {
        case 5:
          return Vi(n.type);
        case 16:
          return Vi("Lazy");
        case 13:
          return Vi("Suspense");
        case 19:
          return Vi("SuspenseList");
        case 0:
        case 2:
        case 15:
          return n = vs(n.type, !1), n;
        case 11:
          return n = vs(n.type.render, !1), n;
        case 1:
          return n = vs(n.type, !0), n;
        default:
          return "";
      }
    }
    function qi(n, r, s) {
      if (n = s.ref, n !== null && typeof n != "function" && typeof n != "object") {
        if (s._owner) {
          if (s = s._owner, s) {
            if (s.tag !== 1) throw Error(f(309));
            var a = s.stateNode;
          }
          if (!a) throw Error(f(147, n));
          var c = a, y = "" + n;
          return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === y ? r.ref : (r = function(V) {
            var ie = c.refs;
            V === null ? delete ie[y] : ie[y] = V;
          }, r._stringRef = y, r);
        }
        if (typeof n != "string") throw Error(f(284));
        if (!s._owner) throw Error(f(290, n));
      }
      return n;
    }
    function al(n, r) {
      throw n = Object.prototype.toString.call(r), Error(f(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
    }
    function ec(n) {
      var r = n._init;
      return r(n._payload);
    }
    function tc(n) {
      function r(de, le) {
        if (n) {
          var pe = de.deletions;
          pe === null ? (de.deletions = [le], de.flags |= 16) : pe.push(le);
        }
      }
      function s(de, le) {
        if (!n) return null;
        for (; le !== null; ) r(de, le), le = le.sibling;
        return null;
      }
      function a(de, le) {
        for (de = /* @__PURE__ */ new Map(); le !== null; ) le.key !== null ? de.set(le.key, le) : de.set(le.index, le), le = le.sibling;
        return de;
      }
      function c(de, le) {
        return de = Oi(de, le), de.index = 0, de.sibling = null, de;
      }
      function y(de, le, pe) {
        return de.index = pe, n ? (pe = de.alternate, pe !== null ? (pe = pe.index, pe < le ? (de.flags |= 2, le) : pe) : (de.flags |= 2, le)) : (de.flags |= 1048576, le);
      }
      function V(de) {
        return n && de.alternate === null && (de.flags |= 2), de;
      }
      function ie(de, le, pe, Fe) {
        return le === null || le.tag !== 6 ? (le = Js(pe, de.mode, Fe), le.return = de, le) : (le = c(le, pe), le.return = de, le);
      }
      function he(de, le, pe, Fe) {
        var Ue = pe.type;
        return Ue === k ? Le(de, le, pe.props.children, Fe, pe.key) : le !== null && (le.elementType === Ue || typeof Ue == "object" && Ue !== null && Ue.$$typeof === h && ec(Ue) === le.type) ? (Fe = c(le, pe.props), Fe.ref = qi(de, le, pe), Fe.return = de, Fe) : (Fe = Bl(pe.type, pe.key, pe.props, null, de.mode, Fe), Fe.ref = qi(de, le, pe), Fe.return = de, Fe);
      }
      function Ce(de, le, pe, Fe) {
        return le === null || le.tag !== 4 || le.stateNode.containerInfo !== pe.containerInfo || le.stateNode.implementation !== pe.implementation ? (le = Vl(pe, de.mode, Fe), le.return = de, le) : (le = c(le, pe.children || []), le.return = de, le);
      }
      function Le(de, le, pe, Fe, Ue) {
        return le === null || le.tag !== 7 ? (le = vn(pe, de.mode, Fe, Ue), le.return = de, le) : (le = c(le, pe), le.return = de, le);
      }
      function Ke(de, le, pe) {
        if (typeof le == "string" && le !== "" || typeof le == "number") return le = Js("" + le, de.mode, pe), le.return = de, le;
        if (typeof le == "object" && le !== null) {
          switch (le.$$typeof) {
            case g:
              return pe = Bl(le.type, le.key, le.props, null, de.mode, pe), pe.ref = qi(de, null, le), pe.return = de, pe;
            case x:
              return le = Vl(le, de.mode, pe), le.return = de, le;
            case h:
              var Fe = le._init;
              return Ke(de, Fe(le._payload), pe);
          }
          if (ee(le) || j(le)) return le = vn(le, de.mode, pe, null), le.return = de, le;
          al(de, le);
        }
        return null;
      }
      function Ne(de, le, pe, Fe) {
        var Ue = le !== null ? le.key : null;
        if (typeof pe == "string" && pe !== "" || typeof pe == "number") return Ue !== null ? null : ie(de, le, "" + pe, Fe);
        if (typeof pe == "object" && pe !== null) {
          switch (pe.$$typeof) {
            case g:
              return pe.key === Ue ? he(de, le, pe, Fe) : null;
            case x:
              return pe.key === Ue ? Ce(de, le, pe, Fe) : null;
            case h:
              return Ue = pe._init, Ne(
                de,
                le,
                Ue(pe._payload),
                Fe
              );
          }
          if (ee(pe) || j(pe)) return Ue !== null ? null : Le(de, le, pe, Fe, null);
          al(de, pe);
        }
        return null;
      }
      function Ct(de, le, pe, Fe, Ue) {
        if (typeof Fe == "string" && Fe !== "" || typeof Fe == "number") return de = de.get(pe) || null, ie(le, de, "" + Fe, Ue);
        if (typeof Fe == "object" && Fe !== null) {
          switch (Fe.$$typeof) {
            case g:
              return de = de.get(Fe.key === null ? pe : Fe.key) || null, he(le, de, Fe, Ue);
            case x:
              return de = de.get(Fe.key === null ? pe : Fe.key) || null, Ce(le, de, Fe, Ue);
            case h:
              var Je = Fe._init;
              return Ct(de, le, pe, Je(Fe._payload), Ue);
          }
          if (ee(Fe) || j(Fe)) return de = de.get(pe) || null, Le(le, de, Fe, Ue, null);
          al(le, Fe);
        }
        return null;
      }
      function ht(de, le, pe, Fe) {
        for (var Ue = null, Je = null, Ye = le, ot = le = 0, nn = null; Ye !== null && ot < pe.length; ot++) {
          Ye.index > ot ? (nn = Ye, Ye = null) : nn = Ye.sibling;
          var it = Ne(de, Ye, pe[ot], Fe);
          if (it === null) {
            Ye === null && (Ye = nn);
            break;
          }
          n && Ye && it.alternate === null && r(de, Ye), le = y(it, le, ot), Je === null ? Ue = it : Je.sibling = it, Je = it, Ye = nn;
        }
        if (ot === pe.length) return s(de, Ye), Pt && Pr(de, ot), Ue;
        if (Ye === null) {
          for (; ot < pe.length; ot++) Ye = Ke(de, pe[ot], Fe), Ye !== null && (le = y(Ye, le, ot), Je === null ? Ue = Ye : Je.sibling = Ye, Je = Ye);
          return Pt && Pr(de, ot), Ue;
        }
        for (Ye = a(de, Ye); ot < pe.length; ot++) nn = Ct(Ye, de, ot, pe[ot], Fe), nn !== null && (n && nn.alternate !== null && Ye.delete(nn.key === null ? ot : nn.key), le = y(nn, le, ot), Je === null ? Ue = nn : Je.sibling = nn, Je = nn);
        return n && Ye.forEach(function(Rn) {
          return r(de, Rn);
        }), Pt && Pr(de, ot), Ue;
      }
      function Vn(de, le, pe, Fe) {
        var Ue = j(pe);
        if (typeof Ue != "function") throw Error(f(150));
        if (pe = Ue.call(pe), pe == null) throw Error(f(151));
        for (var Je = Ue = null, Ye = le, ot = le = 0, nn = null, it = pe.next(); Ye !== null && !it.done; ot++, it = pe.next()) {
          Ye.index > ot ? (nn = Ye, Ye = null) : nn = Ye.sibling;
          var Rn = Ne(de, Ye, it.value, Fe);
          if (Rn === null) {
            Ye === null && (Ye = nn);
            break;
          }
          n && Ye && Rn.alternate === null && r(de, Ye), le = y(Rn, le, ot), Je === null ? Ue = Rn : Je.sibling = Rn, Je = Rn, Ye = nn;
        }
        if (it.done) return s(
          de,
          Ye
        ), Pt && Pr(de, ot), Ue;
        if (Ye === null) {
          for (; !it.done; ot++, it = pe.next()) it = Ke(de, it.value, Fe), it !== null && (le = y(it, le, ot), Je === null ? Ue = it : Je.sibling = it, Je = it);
          return Pt && Pr(de, ot), Ue;
        }
        for (Ye = a(de, Ye); !it.done; ot++, it = pe.next()) it = Ct(Ye, de, ot, it.value, Fe), it !== null && (n && it.alternate !== null && Ye.delete(it.key === null ? ot : it.key), le = y(it, le, ot), Je === null ? Ue = it : Je.sibling = it, Je = it);
        return n && Ye.forEach(function(_d) {
          return r(de, _d);
        }), Pt && Pr(de, ot), Ue;
      }
      function Kr(de, le, pe, Fe) {
        if (typeof pe == "object" && pe !== null && pe.type === k && pe.key === null && (pe = pe.props.children), typeof pe == "object" && pe !== null) {
          switch (pe.$$typeof) {
            case g:
              e: {
                for (var Ue = pe.key, Je = le; Je !== null; ) {
                  if (Je.key === Ue) {
                    if (Ue = pe.type, Ue === k) {
                      if (Je.tag === 7) {
                        s(de, Je.sibling), le = c(Je, pe.props.children), le.return = de, de = le;
                        break e;
                      }
                    } else if (Je.elementType === Ue || typeof Ue == "object" && Ue !== null && Ue.$$typeof === h && ec(Ue) === Je.type) {
                      s(de, Je.sibling), le = c(Je, pe.props), le.ref = qi(de, Je, pe), le.return = de, de = le;
                      break e;
                    }
                    s(de, Je);
                    break;
                  } else r(de, Je);
                  Je = Je.sibling;
                }
                pe.type === k ? (le = vn(pe.props.children, de.mode, Fe, pe.key), le.return = de, de = le) : (Fe = Bl(pe.type, pe.key, pe.props, null, de.mode, Fe), Fe.ref = qi(de, le, pe), Fe.return = de, de = Fe);
              }
              return V(de);
            case x:
              e: {
                for (Je = pe.key; le !== null; ) {
                  if (le.key === Je) if (le.tag === 4 && le.stateNode.containerInfo === pe.containerInfo && le.stateNode.implementation === pe.implementation) {
                    s(de, le.sibling), le = c(le, pe.children || []), le.return = de, de = le;
                    break e;
                  } else {
                    s(de, le);
                    break;
                  }
                  else r(de, le);
                  le = le.sibling;
                }
                le = Vl(pe, de.mode, Fe), le.return = de, de = le;
              }
              return V(de);
            case h:
              return Je = pe._init, Kr(de, le, Je(pe._payload), Fe);
          }
          if (ee(pe)) return ht(de, le, pe, Fe);
          if (j(pe)) return Vn(de, le, pe, Fe);
          al(de, pe);
        }
        return typeof pe == "string" && pe !== "" || typeof pe == "number" ? (pe = "" + pe, le !== null && le.tag === 6 ? (s(de, le.sibling), le = c(le, pe), le.return = de, de = le) : (s(de, le), le = Js(pe, de.mode, Fe), le.return = de, de = le), V(de)) : s(de, le);
      }
      return Kr;
    }
    var Ki = tc(!0), nc = tc(!1), ul = hn(null), cl = null, Rs = null, na = null;
    function ra() {
      na = Rs = cl = null;
    }
    function rc(n, r, s) {
      ye ? (et(ul, r._currentValue), r._currentValue = s) : (et(ul, r._currentValue2), r._currentValue2 = s);
    }
    function wo(n) {
      var r = ul.current;
      Et(ul), ye ? n._currentValue = r : n._currentValue2 = r;
    }
    function Yi(n, r, s) {
      for (; n !== null; ) {
        var a = n.alternate;
        if ((n.childLanes & r) !== r ? (n.childLanes |= r, a !== null && (a.childLanes |= r)) : a !== null && (a.childLanes & r) !== r && (a.childLanes |= r), n === s) break;
        n = n.return;
      }
    }
    function Ts(n, r) {
      cl = n, na = Rs = null, n = n.dependencies, n !== null && n.firstContext !== null && ((n.lanes & r) !== 0 && ($t = !0), n.firstContext = null);
    }
    function er(n) {
      var r = ye ? n._currentValue : n._currentValue2;
      if (na !== n) if (n = { context: n, memoizedValue: r, next: null }, Rs === null) {
        if (cl === null) throw Error(f(308));
        Rs = n, cl.dependencies = { lanes: 0, firstContext: n };
      } else Rs = Rs.next = n;
      return r;
    }
    var yi = null;
    function dl(n) {
      yi === null ? yi = [n] : yi.push(n);
    }
    function ia(n, r, s, a) {
      var c = r.interleaved;
      return c === null ? (s.next = s, dl(r)) : (s.next = c.next, c.next = s), r.interleaved = s, Tr(n, a);
    }
    function Tr(n, r) {
      n.lanes |= r;
      var s = n.alternate;
      for (s !== null && (s.lanes |= r), s = n, n = n.return; n !== null; ) n.childLanes |= r, s = n.alternate, s !== null && (s.childLanes |= r), s = n, n = n.return;
      return s.tag === 3 ? s.stateNode : null;
    }
    var tr = !1;
    function sa(n) {
      n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
    }
    function ic(n, r) {
      n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
    }
    function ti(n, r) {
      return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
    }
    function ni(n, r, s) {
      var a = n.updateQueue;
      if (a === null) return null;
      if (a = a.shared, (Xe & 2) !== 0) {
        var c = a.pending;
        return c === null ? r.next = r : (r.next = c.next, c.next = r), a.pending = r, Tr(n, s);
      }
      return c = a.interleaved, c === null ? (r.next = r, dl(a)) : (r.next = c.next, c.next = r), a.interleaved = r, Tr(n, s);
    }
    function xo(n, r, s) {
      if (r = r.updateQueue, r !== null && (r = r.shared, (s & 4194240) !== 0)) {
        var a = r.lanes;
        a &= n.pendingLanes, s |= a, r.lanes = s, Dr(n, s);
      }
    }
    function Ns(n, r) {
      var s = n.updateQueue, a = n.alternate;
      if (a !== null && (a = a.updateQueue, s === a)) {
        var c = null, y = null;
        if (s = s.firstBaseUpdate, s !== null) {
          do {
            var V = { eventTime: s.eventTime, lane: s.lane, tag: s.tag, payload: s.payload, callback: s.callback, next: null };
            y === null ? c = y = V : y = y.next = V, s = s.next;
          } while (s !== null);
          y === null ? c = y = r : y = y.next = r;
        } else c = y = r;
        s = { baseState: a.baseState, firstBaseUpdate: c, lastBaseUpdate: y, shared: a.shared, effects: a.effects }, n.updateQueue = s;
        return;
      }
      n = s.lastBaseUpdate, n === null ? s.firstBaseUpdate = r : n.next = r, s.lastBaseUpdate = r;
    }
    function vi(n, r, s, a) {
      var c = n.updateQueue;
      tr = !1;
      var y = c.firstBaseUpdate, V = c.lastBaseUpdate, ie = c.shared.pending;
      if (ie !== null) {
        c.shared.pending = null;
        var he = ie, Ce = he.next;
        he.next = null, V === null ? y = Ce : V.next = Ce, V = he;
        var Le = n.alternate;
        Le !== null && (Le = Le.updateQueue, ie = Le.lastBaseUpdate, ie !== V && (ie === null ? Le.firstBaseUpdate = Ce : ie.next = Ce, Le.lastBaseUpdate = he));
      }
      if (y !== null) {
        var Ke = c.baseState;
        V = 0, Le = Ce = he = null, ie = y;
        do {
          var Ne = ie.lane, Ct = ie.eventTime;
          if ((a & Ne) === Ne) {
            Le !== null && (Le = Le.next = {
              eventTime: Ct,
              lane: 0,
              tag: ie.tag,
              payload: ie.payload,
              callback: ie.callback,
              next: null
            });
            e: {
              var ht = n, Vn = ie;
              switch (Ne = r, Ct = s, Vn.tag) {
                case 1:
                  if (ht = Vn.payload, typeof ht == "function") {
                    Ke = ht.call(Ct, Ke, Ne);
                    break e;
                  }
                  Ke = ht;
                  break e;
                case 3:
                  ht.flags = ht.flags & -65537 | 128;
                case 0:
                  if (ht = Vn.payload, Ne = typeof ht == "function" ? ht.call(Ct, Ke, Ne) : ht, Ne == null) break e;
                  Ke = C({}, Ke, Ne);
                  break e;
                case 2:
                  tr = !0;
              }
            }
            ie.callback !== null && ie.lane !== 0 && (n.flags |= 64, Ne = c.effects, Ne === null ? c.effects = [ie] : Ne.push(ie));
          } else Ct = { eventTime: Ct, lane: Ne, tag: ie.tag, payload: ie.payload, callback: ie.callback, next: null }, Le === null ? (Ce = Le = Ct, he = Ke) : Le = Le.next = Ct, V |= Ne;
          if (ie = ie.next, ie === null) {
            if (ie = c.shared.pending, ie === null) break;
            Ne = ie, ie = Ne.next, Ne.next = null, c.lastBaseUpdate = Ne, c.shared.pending = null;
          }
        } while (!0);
        if (Le === null && (he = Ke), c.baseState = he, c.firstBaseUpdate = Ce, c.lastBaseUpdate = Le, r = c.shared.interleaved, r !== null) {
          c = r;
          do
            V |= c.lane, c = c.next;
          while (c !== r);
        } else y === null && (c.shared.lanes = 0);
        li |= V, n.lanes = V, n.memoizedState = Ke;
      }
    }
    function sc(n, r, s) {
      if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
        var a = n[r], c = a.callback;
        if (c !== null) {
          if (a.callback = null, a = s, typeof c != "function") throw Error(f(191, c));
          c.call(a);
        }
      }
    }
    var _i = {}, pr = hn(_i), Fs = hn(_i), Si = hn(_i);
    function gr(n) {
      if (n === _i) throw Error(f(174));
      return n;
    }
    function fl(n, r) {
      et(Si, r), et(Fs, n), et(pr, _i), n = P(r), Et(pr), et(pr, n);
    }
    function Xi() {
      Et(pr), Et(Fs), Et(Si);
    }
    function oa(n) {
      var r = gr(Si.current), s = gr(pr.current);
      r = D(s, n.type, r), s !== r && (et(Fs, n), et(pr, r));
    }
    function la(n) {
      Fs.current === n && (Et(pr), Et(Fs));
    }
    var It = hn(0);
    function hl(n) {
      for (var r = n; r !== null; ) {
        if (r.tag === 13) {
          var s = r.memoizedState;
          if (s !== null && (s = s.dehydrated, s === null || Du(s) || Ui(s))) return r;
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
    var aa = [];
    function ua() {
      for (var n = 0; n < aa.length; n++) {
        var r = aa[n];
        ye ? r._workInProgressVersionPrimary = null : r._workInProgressVersionSecondary = null;
      }
      aa.length = 0;
    }
    var Xn = m.ReactCurrentDispatcher, Qi = m.ReactCurrentBatchConfig, wi = 0, Nt = null, Wt = null, Zt = null, Ms = !1, Co = !1, ko = 0, Ls = 0;
    function un() {
      throw Error(f(321));
    }
    function bi(n, r) {
      if (r === null) return !1;
      for (var s = 0; s < r.length && s < n.length; s++) if (!kr(n[s], r[s])) return !1;
      return !0;
    }
    function Eo(n, r, s, a, c, y) {
      if (wi = y, Nt = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Xn.current = n === null || n.memoizedState === null ? _a : Sa, n = s(a, c), Co) {
        y = 0;
        do {
          if (Co = !1, ko = 0, 25 <= y) throw Error(f(301));
          y += 1, Zt = Wt = null, r.updateQueue = null, Xn.current = wa, n = s(a, c);
        } while (Co);
      }
      if (Xn.current = ts, r = Wt !== null && Wt.next !== null, wi = 0, Zt = Wt = Nt = null, Ms = !1, r) throw Error(f(300));
      return n;
    }
    function pl() {
      var n = ko !== 0;
      return ko = 0, n;
    }
    function nr() {
      var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
      return Zt === null ? Nt.memoizedState = Zt = n : Zt = Zt.next = n, Zt;
    }
    function mn() {
      if (Wt === null) {
        var n = Nt.alternate;
        n = n !== null ? n.memoizedState : null;
      } else n = Wt.next;
      var r = Zt === null ? Nt.memoizedState : Zt.next;
      if (r !== null) Zt = r, Wt = n;
      else {
        if (n === null) throw Error(f(310));
        Wt = n, n = { memoizedState: Wt.memoizedState, baseState: Wt.baseState, baseQueue: Wt.baseQueue, queue: Wt.queue, next: null }, Zt === null ? Nt.memoizedState = Zt = n : Zt = Zt.next = n;
      }
      return Zt;
    }
    function Ji(n, r) {
      return typeof r == "function" ? r(n) : r;
    }
    function gl(n) {
      var r = mn(), s = r.queue;
      if (s === null) throw Error(f(311));
      s.lastRenderedReducer = n;
      var a = Wt, c = a.baseQueue, y = s.pending;
      if (y !== null) {
        if (c !== null) {
          var V = c.next;
          c.next = y.next, y.next = V;
        }
        a.baseQueue = c = y, s.pending = null;
      }
      if (c !== null) {
        y = c.next, a = a.baseState;
        var ie = V = null, he = null, Ce = y;
        do {
          var Le = Ce.lane;
          if ((wi & Le) === Le) he !== null && (he = he.next = { lane: 0, action: Ce.action, hasEagerState: Ce.hasEagerState, eagerState: Ce.eagerState, next: null }), a = Ce.hasEagerState ? Ce.eagerState : n(a, Ce.action);
          else {
            var Ke = {
              lane: Le,
              action: Ce.action,
              hasEagerState: Ce.hasEagerState,
              eagerState: Ce.eagerState,
              next: null
            };
            he === null ? (ie = he = Ke, V = a) : he = he.next = Ke, Nt.lanes |= Le, li |= Le;
          }
          Ce = Ce.next;
        } while (Ce !== null && Ce !== y);
        he === null ? V = a : he.next = ie, kr(a, r.memoizedState) || ($t = !0), r.memoizedState = a, r.baseState = V, r.baseQueue = he, s.lastRenderedState = a;
      }
      if (n = s.interleaved, n !== null) {
        c = n;
        do
          y = c.lane, Nt.lanes |= y, li |= y, c = c.next;
        while (c !== n);
      } else c === null && (s.lanes = 0);
      return [r.memoizedState, s.dispatch];
    }
    function As(n) {
      var r = mn(), s = r.queue;
      if (s === null) throw Error(f(311));
      s.lastRenderedReducer = n;
      var a = s.dispatch, c = s.pending, y = r.memoizedState;
      if (c !== null) {
        s.pending = null;
        var V = c = c.next;
        do
          y = n(y, V.action), V = V.next;
        while (V !== c);
        kr(y, r.memoizedState) || ($t = !0), r.memoizedState = y, r.baseQueue === null && (r.baseState = y), s.lastRenderedState = y;
      }
      return [y, a];
    }
    function ca() {
    }
    function da(n, r) {
      var s = Nt, a = mn(), c = r(), y = !kr(a.memoizedState, c);
      if (y && (a.memoizedState = c, $t = !0), a = a.queue, vl(pa.bind(null, s, a, n), [n]), a.getSnapshot !== r || y || Zt !== null && Zt.memoizedState.tag & 1) {
        if (s.flags |= 2048, Zi(9, ha.bind(null, s, a, c, r), void 0, null), vt === null) throw Error(f(349));
        (wi & 30) !== 0 || fa(s, r, c);
      }
      return c;
    }
    function fa(n, r, s) {
      n.flags |= 16384, n = { getSnapshot: r, value: s }, r = Nt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Nt.updateQueue = r, r.stores = [n]) : (s = r.stores, s === null ? r.stores = [n] : s.push(n));
    }
    function ha(n, r, s, a) {
      r.value = s, r.getSnapshot = a, ga(r) && ri(n);
    }
    function pa(n, r, s) {
      return s(function() {
        ga(r) && ri(n);
      });
    }
    function ga(n) {
      var r = n.getSnapshot;
      n = n.value;
      try {
        var s = r();
        return !kr(n, s);
      } catch {
        return !0;
      }
    }
    function ri(n) {
      var r = Tr(n, 1);
      r !== null && En(r, n, 1, -1);
    }
    function ml(n) {
      var r = nr();
      return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ji, lastRenderedState: n }, r.queue = n, n = n.dispatch = gd.bind(null, Nt, n), [r.memoizedState, n];
    }
    function Zi(n, r, s, a) {
      return n = { tag: n, create: r, destroy: s, deps: a, next: null }, r = Nt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Nt.updateQueue = r, r.lastEffect = n.next = n) : (s = r.lastEffect, s === null ? r.lastEffect = n.next = n : (a = s.next, s.next = n, n.next = a, r.lastEffect = n)), n;
    }
    function oc() {
      return mn().memoizedState;
    }
    function yl(n, r, s, a) {
      var c = nr();
      Nt.flags |= n, c.memoizedState = Zi(1 | r, s, void 0, a === void 0 ? null : a);
    }
    function xi(n, r, s, a) {
      var c = mn();
      a = a === void 0 ? null : a;
      var y = void 0;
      if (Wt !== null) {
        var V = Wt.memoizedState;
        if (y = V.destroy, a !== null && bi(a, V.deps)) {
          c.memoizedState = Zi(r, s, y, a);
          return;
        }
      }
      Nt.flags |= n, c.memoizedState = Zi(1 | r, s, y, a);
    }
    function lc(n, r) {
      return yl(8390656, 8, n, r);
    }
    function vl(n, r) {
      return xi(2048, 8, n, r);
    }
    function ma(n, r) {
      return xi(4, 2, n, r);
    }
    function St(n, r) {
      return xi(4, 4, n, r);
    }
    function _l(n, r) {
      if (typeof r == "function") return n = n(), r(n), function() {
        r(null);
      };
      if (r != null) return n = n(), r.current = n, function() {
        r.current = null;
      };
    }
    function Po(n, r, s) {
      return s = s != null ? s.concat([n]) : null, xi(4, 4, _l.bind(null, r, n), s);
    }
    function $i() {
    }
    function ya(n, r) {
      var s = mn();
      r = r === void 0 ? null : r;
      var a = s.memoizedState;
      return a !== null && r !== null && bi(r, a[1]) ? a[0] : (s.memoizedState = [n, r], n);
    }
    function Sl(n, r) {
      var s = mn();
      r = r === void 0 ? null : r;
      var a = s.memoizedState;
      return a !== null && r !== null && bi(r, a[1]) ? a[0] : (n = n(), s.memoizedState = [n, r], n);
    }
    function Os(n, r, s) {
      return (wi & 21) === 0 ? (n.baseState && (n.baseState = !1, $t = !0), n.memoizedState = s) : (kr(s, r) || (s = $o(), Nt.lanes |= s, li |= s, n.baseState = !0), r);
    }
    function wl(n, r) {
      var s = tt;
      tt = s !== 0 && 4 > s ? s : 4, n(!0);
      var a = Qi.transition;
      Qi.transition = {};
      try {
        n(!1), r();
      } finally {
        tt = s, Qi.transition = a;
      }
    }
    function es() {
      return mn().memoizedState;
    }
    function ac(n, r, s) {
      var a = tn(n);
      if (s = { lane: a, action: s, hasEagerState: !1, eagerState: null, next: null }, uc(n)) va(r, s);
      else if (s = ia(n, r, s, a), s !== null) {
        var c = Rt();
        En(s, n, a, c), Ro(s, r, a);
      }
    }
    function gd(n, r, s) {
      var a = tn(n), c = { lane: a, action: s, hasEagerState: !1, eagerState: null, next: null };
      if (uc(n)) va(r, c);
      else {
        var y = n.alternate;
        if (n.lanes === 0 && (y === null || y.lanes === 0) && (y = r.lastRenderedReducer, y !== null)) try {
          var V = r.lastRenderedState, ie = y(V, s);
          if (c.hasEagerState = !0, c.eagerState = ie, kr(ie, V)) {
            var he = r.interleaved;
            he === null ? (c.next = c, dl(r)) : (c.next = he.next, he.next = c), r.interleaved = c;
            return;
          }
        } catch {
        } finally {
        }
        s = ia(n, r, c, a), s !== null && (c = Rt(), En(s, n, a, c), Ro(s, r, a));
      }
    }
    function uc(n) {
      var r = n.alternate;
      return n === Nt || r !== null && r === Nt;
    }
    function va(n, r) {
      Co = Ms = !0;
      var s = n.pending;
      s === null ? r.next = r : (r.next = s.next, s.next = r), n.pending = r;
    }
    function Ro(n, r, s) {
      if ((s & 4194240) !== 0) {
        var a = r.lanes;
        a &= n.pendingLanes, s |= a, r.lanes = s, Dr(n, s);
      }
    }
    var ts = { readContext: er, useCallback: un, useContext: un, useEffect: un, useImperativeHandle: un, useInsertionEffect: un, useLayoutEffect: un, useMemo: un, useReducer: un, useRef: un, useState: un, useDebugValue: un, useDeferredValue: un, useTransition: un, useMutableSource: un, useSyncExternalStore: un, useId: un, unstable_isNewReconciler: !1 }, _a = { readContext: er, useCallback: function(n, r) {
      return nr().memoizedState = [n, r === void 0 ? null : r], n;
    }, useContext: er, useEffect: lc, useImperativeHandle: function(n, r, s) {
      return s = s != null ? s.concat([n]) : null, yl(
        4194308,
        4,
        _l.bind(null, r, n),
        s
      );
    }, useLayoutEffect: function(n, r) {
      return yl(4194308, 4, n, r);
    }, useInsertionEffect: function(n, r) {
      return yl(4, 2, n, r);
    }, useMemo: function(n, r) {
      var s = nr();
      return r = r === void 0 ? null : r, n = n(), s.memoizedState = [n, r], n;
    }, useReducer: function(n, r, s) {
      var a = nr();
      return r = s !== void 0 ? s(r) : r, a.memoizedState = a.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, a.queue = n, n = n.dispatch = ac.bind(null, Nt, n), [a.memoizedState, n];
    }, useRef: function(n) {
      var r = nr();
      return n = { current: n }, r.memoizedState = n;
    }, useState: ml, useDebugValue: $i, useDeferredValue: function(n) {
      return nr().memoizedState = n;
    }, useTransition: function() {
      var n = ml(!1), r = n[0];
      return n = wl.bind(null, n[1]), nr().memoizedState = n, [r, n];
    }, useMutableSource: function() {
    }, useSyncExternalStore: function(n, r, s) {
      var a = Nt, c = nr();
      if (Pt) {
        if (s === void 0) throw Error(f(407));
        s = s();
      } else {
        if (s = r(), vt === null) throw Error(f(349));
        (wi & 30) !== 0 || fa(a, r, s);
      }
      c.memoizedState = s;
      var y = { value: s, getSnapshot: r };
      return c.queue = y, lc(pa.bind(
        null,
        a,
        y,
        n
      ), [n]), a.flags |= 2048, Zi(9, ha.bind(null, a, y, s, r), void 0, null), s;
    }, useId: function() {
      var n = nr(), r = vt.identifierPrefix;
      if (Pt) {
        var s = Er, a = Yn;
        s = (a & ~(1 << 32 - Zn(a) - 1)).toString(32) + s, r = ":" + r + "R" + s, s = ko++, 0 < s && (r += "H" + s.toString(32)), r += ":";
      } else s = Ls++, r = ":" + r + "r" + s.toString(32) + ":";
      return n.memoizedState = r;
    }, unstable_isNewReconciler: !1 }, Sa = {
      readContext: er,
      useCallback: ya,
      useContext: er,
      useEffect: vl,
      useImperativeHandle: Po,
      useInsertionEffect: ma,
      useLayoutEffect: St,
      useMemo: Sl,
      useReducer: gl,
      useRef: oc,
      useState: function() {
        return gl(Ji);
      },
      useDebugValue: $i,
      useDeferredValue: function(n) {
        var r = mn();
        return Os(r, Wt.memoizedState, n);
      },
      useTransition: function() {
        var n = gl(Ji)[0], r = mn().memoizedState;
        return [n, r];
      },
      useMutableSource: ca,
      useSyncExternalStore: da,
      useId: es,
      unstable_isNewReconciler: !1
    }, wa = { readContext: er, useCallback: ya, useContext: er, useEffect: vl, useImperativeHandle: Po, useInsertionEffect: ma, useLayoutEffect: St, useMemo: Sl, useReducer: As, useRef: oc, useState: function() {
      return As(Ji);
    }, useDebugValue: $i, useDeferredValue: function(n) {
      var r = mn();
      return Wt === null ? r.memoizedState = n : Os(r, Wt.memoizedState, n);
    }, useTransition: function() {
      var n = As(Ji)[0], r = mn().memoizedState;
      return [n, r];
    }, useMutableSource: ca, useSyncExternalStore: da, useId: es, unstable_isNewReconciler: !1 };
    function rr(n, r) {
      if (n && n.defaultProps) {
        r = C({}, r), n = n.defaultProps;
        for (var s in n) r[s] === void 0 && (r[s] = n[s]);
        return r;
      }
      return r;
    }
    function xa(n, r, s, a) {
      r = n.memoizedState, s = s(a, r), s = s == null ? r : C({}, r, s), n.memoizedState = s, n.lanes === 0 && (n.updateQueue.baseState = s);
    }
    var To = { isMounted: function(n) {
      return (n = n._reactInternals) ? U(n) === n : !1;
    }, enqueueSetState: function(n, r, s) {
      n = n._reactInternals;
      var a = Rt(), c = tn(n), y = ti(a, c);
      y.payload = r, s != null && (y.callback = s), r = ni(n, y, c), r !== null && (En(r, n, c, a), xo(r, n, c));
    }, enqueueReplaceState: function(n, r, s) {
      n = n._reactInternals;
      var a = Rt(), c = tn(n), y = ti(a, c);
      y.tag = 1, y.payload = r, s != null && (y.callback = s), r = ni(n, y, c), r !== null && (En(r, n, c, a), xo(r, n, c));
    }, enqueueForceUpdate: function(n, r) {
      n = n._reactInternals;
      var s = Rt(), a = tn(n), c = ti(s, a);
      c.tag = 2, r != null && (c.callback = r), r = ni(n, c, a), r !== null && (En(r, n, a, s), xo(r, n, a));
    } };
    function cc(n, r, s, a, c, y, V) {
      return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(a, y, V) : r.prototype && r.prototype.isPureReactComponent ? !ll(s, a) || !ll(c, y) : !0;
    }
    function dc(n, r, s) {
      var a = !1, c = hi, y = r.contextType;
      return typeof y == "object" && y !== null ? y = er(y) : (c = ln(r) ? Ir : wn.current, a = r.contextTypes, y = (a = a != null) ? Zr(n, c) : hi), r = new r(s, y), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = To, n.stateNode = r, r._reactInternals = n, a && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = y), r;
    }
    function xl(n, r, s, a) {
      n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(s, a), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(s, a), r.state !== n && To.enqueueReplaceState(r, r.state, null);
    }
    function Gr(n, r, s, a) {
      var c = n.stateNode;
      c.props = s, c.state = n.memoizedState, c.refs = {}, sa(n);
      var y = r.contextType;
      typeof y == "object" && y !== null ? c.context = er(y) : (y = ln(r) ? Ir : wn.current, c.context = Zr(n, y)), c.state = n.memoizedState, y = r.getDerivedStateFromProps, typeof y == "function" && (xa(n, r, y, s), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && To.enqueueReplaceState(c, c.state, null), vi(n, s, c, a), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
    }
    function ns(n, r) {
      try {
        var s = "", a = r;
        do
          s += pd(a), a = a.return;
        while (a);
        var c = s;
      } catch (y) {
        c = `
Error generating stack: ` + y.message + `
` + y.stack;
      }
      return { value: n, source: r, stack: c, digest: null };
    }
    function Ci(n, r, s) {
      return { value: n, source: null, stack: s ?? null, digest: r ?? null };
    }
    function mr(n, r) {
      try {
        console.error(r.value);
      } catch (s) {
        setTimeout(function() {
          throw s;
        });
      }
    }
    var No = typeof WeakMap == "function" ? WeakMap : Map;
    function Ur(n, r, s) {
      s = ti(-1, s), s.tag = 3, s.payload = { element: null };
      var a = r.value;
      return s.callback = function() {
        Gt || (Gt = !0, qt = a), mr(n, r);
      }, s;
    }
    function Cl(n, r, s) {
      s = ti(-1, s), s.tag = 3;
      var a = n.type.getDerivedStateFromError;
      if (typeof a == "function") {
        var c = r.value;
        s.payload = function() {
          return a(c);
        }, s.callback = function() {
          mr(n, r);
        };
      }
      var y = n.stateNode;
      return y !== null && typeof y.componentDidCatch == "function" && (s.callback = function() {
        mr(n, r), typeof a != "function" && (Fr === null ? Fr = /* @__PURE__ */ new Set([this]) : Fr.add(this));
        var V = r.stack;
        this.componentDidCatch(r.value, { componentStack: V !== null ? V : "" });
      }), s;
    }
    function fc(n, r, s) {
      var a = n.pingCache;
      if (a === null) {
        a = n.pingCache = new No();
        var c = /* @__PURE__ */ new Set();
        a.set(r, c);
      } else c = a.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), a.set(r, c));
      c.has(s) || (c.add(s), n = Sc.bind(null, n, r, s), r.then(n, n));
    }
    function hc(n) {
      do {
        var r;
        if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return n;
        n = n.return;
      } while (n !== null);
      return null;
    }
    function ki(n, r, s, a, c) {
      return (n.mode & 1) === 0 ? (n === r ? n.flags |= 65536 : (n.flags |= 128, s.flags |= 131072, s.flags &= -52805, s.tag === 1 && (s.alternate === null ? s.tag = 17 : (r = ti(-1, 1), r.tag = 2, ni(s, r, 1))), s.lanes |= 1), n) : (n.flags |= 65536, n.lanes = c, n);
    }
    var Fo = m.ReactCurrentOwner, $t = !1;
    function cn(n, r, s, a) {
      r.child = n === null ? nc(r, null, s, a) : Ki(r, n.child, s, a);
    }
    function kl(n, r, s, a, c) {
      s = s.render;
      var y = r.ref;
      return Ts(r, c), a = Eo(n, r, s, a, y, c), s = pl(), n !== null && !$t ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, si(n, r, c)) : (Pt && s && vo(r), r.flags |= 1, cn(n, r, a, c), r.child);
    }
    function rs(n, r, s, a, c) {
      if (n === null) {
        var y = s.type;
        return typeof y == "function" && !Qs(y) && y.defaultProps === void 0 && s.compare === null && s.defaultProps === void 0 ? (r.tag = 15, r.type = y, ii(n, r, y, a, c)) : (n = Bl(s.type, null, a, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
      }
      if (y = n.child, (n.lanes & c) === 0) {
        var V = y.memoizedProps;
        if (s = s.compare, s = s !== null ? s : ll, s(V, a) && n.ref === r.ref) return si(n, r, c);
      }
      return r.flags |= 1, n = Oi(y, a), n.ref = r.ref, n.return = r, r.child = n;
    }
    function ii(n, r, s, a, c) {
      if (n !== null) {
        var y = n.memoizedProps;
        if (ll(y, a) && n.ref === r.ref) if ($t = !1, r.pendingProps = a = y, (n.lanes & c) !== 0) (n.flags & 131072) !== 0 && ($t = !0);
        else return r.lanes = n.lanes, si(n, r, c);
      }
      return Br(n, r, s, a, c);
    }
    function wt(n, r, s) {
      var a = r.pendingProps, c = a.children, y = n !== null ? n.memoizedState : null;
      if (a.mode === "hidden") if ((r.mode & 1) === 0) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, et(Fi, en), en |= s;
      else {
        if ((s & 1073741824) === 0) return n = y !== null ? y.baseLanes | s : s, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, et(Fi, en), en |= n, null;
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, a = y !== null ? y.baseLanes : s, et(Fi, en), en |= a;
      }
      else y !== null ? (a = y.baseLanes | s, r.memoizedState = null) : a = s, et(Fi, en), en |= a;
      return cn(n, r, c, s), r.child;
    }
    function yt(n, r) {
      var s = r.ref;
      (n === null && s !== null || n !== null && n.ref !== s) && (r.flags |= 512, r.flags |= 2097152);
    }
    function Br(n, r, s, a, c) {
      var y = ln(s) ? Ir : wn.current;
      return y = Zr(r, y), Ts(r, c), s = Eo(n, r, s, a, y, c), a = pl(), n !== null && !$t ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, si(n, r, c)) : (Pt && a && vo(r), r.flags |= 1, cn(n, r, s, c), r.child);
    }
    function yn(n, r, s, a, c) {
      if (ln(s)) {
        var y = !0;
        _s(r);
      } else y = !1;
      if (Ts(r, c), r.stateNode === null) Mo(n, r), dc(r, s, a), Gr(r, s, a, c), a = !0;
      else if (n === null) {
        var V = r.stateNode, ie = r.memoizedProps;
        V.props = ie;
        var he = V.context, Ce = s.contextType;
        typeof Ce == "object" && Ce !== null ? Ce = er(Ce) : (Ce = ln(s) ? Ir : wn.current, Ce = Zr(r, Ce));
        var Le = s.getDerivedStateFromProps, Ke = typeof Le == "function" || typeof V.getSnapshotBeforeUpdate == "function";
        Ke || typeof V.UNSAFE_componentWillReceiveProps != "function" && typeof V.componentWillReceiveProps != "function" || (ie !== a || he !== Ce) && xl(r, V, a, Ce), tr = !1;
        var Ne = r.memoizedState;
        V.state = Ne, vi(r, a, V, c), he = r.memoizedState, ie !== a || Ne !== he || qn.current || tr ? (typeof Le == "function" && (xa(r, s, Le, a), he = r.memoizedState), (ie = tr || cc(r, s, ie, a, Ne, he, Ce)) ? (Ke || typeof V.UNSAFE_componentWillMount != "function" && typeof V.componentWillMount != "function" || (typeof V.componentWillMount == "function" && V.componentWillMount(), typeof V.UNSAFE_componentWillMount == "function" && V.UNSAFE_componentWillMount()), typeof V.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof V.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = a, r.memoizedState = he), V.props = a, V.state = he, V.context = Ce, a = ie) : (typeof V.componentDidMount == "function" && (r.flags |= 4194308), a = !1);
      } else {
        V = r.stateNode, ic(n, r), ie = r.memoizedProps, Ce = r.type === r.elementType ? ie : rr(r.type, ie), V.props = Ce, Ke = r.pendingProps, Ne = V.context, he = s.contextType, typeof he == "object" && he !== null ? he = er(he) : (he = ln(s) ? Ir : wn.current, he = Zr(r, he));
        var Ct = s.getDerivedStateFromProps;
        (Le = typeof Ct == "function" || typeof V.getSnapshotBeforeUpdate == "function") || typeof V.UNSAFE_componentWillReceiveProps != "function" && typeof V.componentWillReceiveProps != "function" || (ie !== Ke || Ne !== he) && xl(r, V, a, he), tr = !1, Ne = r.memoizedState, V.state = Ne, vi(r, a, V, c);
        var ht = r.memoizedState;
        ie !== Ke || Ne !== ht || qn.current || tr ? (typeof Ct == "function" && (xa(r, s, Ct, a), ht = r.memoizedState), (Ce = tr || cc(r, s, Ce, a, Ne, ht, he) || !1) ? (Le || typeof V.UNSAFE_componentWillUpdate != "function" && typeof V.componentWillUpdate != "function" || (typeof V.componentWillUpdate == "function" && V.componentWillUpdate(a, ht, he), typeof V.UNSAFE_componentWillUpdate == "function" && V.UNSAFE_componentWillUpdate(a, ht, he)), typeof V.componentDidUpdate == "function" && (r.flags |= 4), typeof V.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof V.componentDidUpdate != "function" || ie === n.memoizedProps && Ne === n.memoizedState || (r.flags |= 4), typeof V.getSnapshotBeforeUpdate != "function" || ie === n.memoizedProps && Ne === n.memoizedState || (r.flags |= 1024), r.memoizedProps = a, r.memoizedState = ht), V.props = a, V.state = ht, V.context = he, a = Ce) : (typeof V.componentDidUpdate != "function" || ie === n.memoizedProps && Ne === n.memoizedState || (r.flags |= 4), typeof V.getSnapshotBeforeUpdate != "function" || ie === n.memoizedProps && Ne === n.memoizedState || (r.flags |= 1024), a = !1);
      }
      return xn(n, r, s, a, y, c);
    }
    function xn(n, r, s, a, c, y) {
      yt(n, r);
      var V = (r.flags & 128) !== 0;
      if (!a && !V) return c && Jl(r, s, !1), si(n, r, y);
      a = r.stateNode, Fo.current = r;
      var ie = V && typeof s.getDerivedStateFromError != "function" ? null : a.render();
      return r.flags |= 1, n !== null && V ? (r.child = Ki(r, n.child, null, y), r.child = Ki(r, null, ie, y)) : cn(n, r, ie, y), r.memoizedState = a.state, c && Jl(r, s, !0), r.child;
    }
    function Ei(n) {
      var r = n.stateNode;
      r.pendingContext ? ju(n, r.pendingContext, r.pendingContext !== r.context) : r.context && ju(n, r.context, !1), fl(n, r.containerInfo);
    }
    function is(n, r, s, a, c) {
      return Wi(), ta(c), r.flags |= 256, cn(n, r, s, a), r.child;
    }
    var Cn = { dehydrated: null, treeContext: null, retryLane: 0 };
    function Is(n) {
      return { baseLanes: n, cachePool: null, transitions: null };
    }
    function Ca(n, r, s) {
      var a = r.pendingProps, c = It.current, y = !1, V = (r.flags & 128) !== 0, ie;
      if ((ie = V) || (ie = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), ie ? (y = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), et(It, c & 1), n === null)
        return ea(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? ((r.mode & 1) === 0 ? r.lanes = 1 : Ui(n) ? r.lanes = 8 : r.lanes = 1073741824, null) : (V = a.children, n = a.fallback, y ? (a = r.mode, y = r.child, V = { mode: "hidden", children: V }, (a & 1) === 0 && y !== null ? (y.childLanes = 0, y.pendingProps = V) : y = bs(V, a, 0, null), n = vn(n, a, s, null), y.return = r, n.return = r, y.sibling = n, r.child = y, r.child.memoizedState = Is(s), r.memoizedState = Cn, n) : El(r, V));
      if (c = n.memoizedState, c !== null && (ie = c.dehydrated, ie !== null)) return pc(n, r, V, a, ie, c, s);
      if (y) {
        y = a.fallback, V = r.mode, c = n.child, ie = c.sibling;
        var he = { mode: "hidden", children: a.children };
        return (V & 1) === 0 && r.child !== c ? (a = r.child, a.childLanes = 0, a.pendingProps = he, r.deletions = null) : (a = Oi(c, he), a.subtreeFlags = c.subtreeFlags & 14680064), ie !== null ? y = Oi(ie, y) : (y = vn(y, V, s, null), y.flags |= 2), y.return = r, a.return = r, a.sibling = y, r.child = a, a = y, y = r.child, V = n.child.memoizedState, V = V === null ? Is(s) : { baseLanes: V.baseLanes | s, cachePool: null, transitions: V.transitions }, y.memoizedState = V, y.childLanes = n.childLanes & ~s, r.memoizedState = Cn, a;
      }
      return y = n.child, n = y.sibling, a = Oi(y, { mode: "visible", children: a.children }), (r.mode & 1) === 0 && (a.lanes = s), a.return = r, a.sibling = null, n !== null && (s = r.deletions, s === null ? (r.deletions = [n], r.flags |= 16) : s.push(n)), r.child = a, r.memoizedState = null, a;
    }
    function El(n, r) {
      return r = bs({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
    }
    function ss(n, r, s, a) {
      return a !== null && ta(a), Ki(r, n.child, null, s), n = El(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
    }
    function pc(n, r, s, a, c, y, V) {
      if (s)
        return r.flags & 256 ? (r.flags &= -257, a = Ci(Error(f(422))), ss(n, r, V, a)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (y = a.fallback, c = r.mode, a = bs({ mode: "visible", children: a.children }, c, 0, null), y = vn(y, c, V, null), y.flags |= 2, a.return = r, y.return = r, a.sibling = y, r.child = a, (r.mode & 1) !== 0 && Ki(r, n.child, null, V), r.child.memoizedState = Is(V), r.memoizedState = Cn, y);
      if ((r.mode & 1) === 0) return ss(n, r, V, null);
      if (Ui(c)) return a = Xo(c).digest, y = Error(f(419)), a = Ci(
        y,
        a,
        void 0
      ), ss(n, r, V, a);
      if (s = (V & n.childLanes) !== 0, $t || s) {
        if (a = vt, a !== null) {
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
          c = (c & (a.suspendedLanes | V)) !== 0 ? 0 : c, c !== 0 && c !== y.retryLane && (y.retryLane = c, Tr(n, c), En(
            a,
            n,
            c,
            -1
          ));
        }
        return Xs(), a = Ci(Error(f(421))), ss(n, r, V, a);
      }
      return Du(c) ? (r.flags |= 128, r.child = n.child, r = xc.bind(null, n), Qo(c, r), null) : (n = y.treeContext, Ge && (In = od(c), gn = r, Pt = !0, Rr = null, So = !1, n !== null && (On[$n++] = Yn, On[$n++] = Er, On[$n++] = Jt, Yn = n.id, Er = n.overflow, Jt = r)), r = El(r, a.children), r.flags |= 4096, r);
    }
    function Vr(n, r, s) {
      n.lanes |= r;
      var a = n.alternate;
      a !== null && (a.lanes |= r), Yi(n.return, r, s);
    }
    function Ds(n, r, s, a, c) {
      var y = n.memoizedState;
      y === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: a, tail: s, tailMode: c } : (y.isBackwards = r, y.rendering = null, y.renderingStartTime = 0, y.last = a, y.tail = s, y.tailMode = c);
    }
    function Pl(n, r, s) {
      var a = r.pendingProps, c = a.revealOrder, y = a.tail;
      if (cn(n, r, a.children, s), a = It.current, (a & 2) !== 0) a = a & 1 | 2, r.flags |= 128;
      else {
        if (n !== null && (n.flags & 128) !== 0) e: for (n = r.child; n !== null; ) {
          if (n.tag === 13) n.memoizedState !== null && Vr(n, s, r);
          else if (n.tag === 19) Vr(n, s, r);
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
        a &= 1;
      }
      if (et(It, a), (r.mode & 1) === 0) r.memoizedState = null;
      else switch (c) {
        case "forwards":
          for (s = r.child, c = null; s !== null; ) n = s.alternate, n !== null && hl(n) === null && (c = s), s = s.sibling;
          s = c, s === null ? (c = r.child, r.child = null) : (c = s.sibling, s.sibling = null), Ds(r, !1, c, s, y);
          break;
        case "backwards":
          for (s = null, c = r.child, r.child = null; c !== null; ) {
            if (n = c.alternate, n !== null && hl(n) === null) {
              r.child = c;
              break;
            }
            n = c.sibling, c.sibling = s, s = c, c = n;
          }
          Ds(r, !0, s, null, y);
          break;
        case "together":
          Ds(r, !1, null, null, void 0);
          break;
        default:
          r.memoizedState = null;
      }
      return r.child;
    }
    function Mo(n, r) {
      (r.mode & 1) === 0 && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
    }
    function si(n, r, s) {
      if (n !== null && (r.dependencies = n.dependencies), li |= r.lanes, (s & r.childLanes) === 0) return null;
      if (n !== null && r.child !== n.child) throw Error(f(153));
      if (r.child !== null) {
        for (n = r.child, s = Oi(n, n.pendingProps), r.child = s, s.return = r; n.sibling !== null; ) n = n.sibling, s = s.sibling = Oi(n, n.pendingProps), s.return = r;
        s.sibling = null;
      }
      return r.child;
    }
    function Pi(n, r, s) {
      switch (r.tag) {
        case 3:
          Ei(r), Wi();
          break;
        case 5:
          oa(r);
          break;
        case 1:
          ln(r.type) && _s(r);
          break;
        case 4:
          fl(r, r.stateNode.containerInfo);
          break;
        case 10:
          rc(r, r.type._context, r.memoizedProps.value);
          break;
        case 13:
          var a = r.memoizedState;
          if (a !== null)
            return a.dehydrated !== null ? (et(It, It.current & 1), r.flags |= 128, null) : (s & r.child.childLanes) !== 0 ? Ca(n, r, s) : (et(It, It.current & 1), n = si(n, r, s), n !== null ? n.sibling : null);
          et(It, It.current & 1);
          break;
        case 19:
          if (a = (s & r.childLanes) !== 0, (n.flags & 128) !== 0) {
            if (a) return Pl(
              n,
              r,
              s
            );
            r.flags |= 128;
          }
          var c = r.memoizedState;
          if (c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), et(It, It.current), a) break;
          return null;
        case 22:
        case 23:
          return r.lanes = 0, wt(n, r, s);
      }
      return si(n, r, s);
    }
    function Dn(n) {
      n.flags |= 4;
    }
    function os(n, r) {
      if (n !== null && n.child === r.child) return !0;
      if ((r.flags & 16) !== 0) return !1;
      for (n = r.child; n !== null; ) {
        if ((n.flags & 12854) !== 0 || (n.subtreeFlags & 12854) !== 0) return !1;
        n = n.sibling;
      }
      return !0;
    }
    var Ri, Ti, zn, Gn;
    if (Re) Ri = function(n, r) {
      for (var s = r.child; s !== null; ) {
        if (s.tag === 5 || s.tag === 6) X(n, s.stateNode);
        else if (s.tag !== 4 && s.child !== null) {
          s.child.return = s, s = s.child;
          continue;
        }
        if (s === r) break;
        for (; s.sibling === null; ) {
          if (s.return === null || s.return === r) return;
          s = s.return;
        }
        s.sibling.return = s.return, s = s.sibling;
      }
    }, Ti = function() {
    }, zn = function(n, r, s, a, c) {
      if (n = n.memoizedProps, n !== a) {
        var y = r.stateNode, V = gr(pr.current);
        s = ce(y, s, n, a, c, V), (r.updateQueue = s) && Dn(r);
      }
    }, Gn = function(n, r, s, a) {
      s !== a && Dn(r);
    };
    else if (Be) {
      Ri = function(n, r, s, a) {
        for (var c = r.child; c !== null; ) {
          if (c.tag === 5) {
            var y = c.stateNode;
            s && a && (y = br(y, c.type, c.memoizedProps, c)), X(n, y);
          } else if (c.tag === 6) y = c.stateNode, s && a && (y = fo(y, c.memoizedProps, c)), X(n, y);
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
      var Ni = function(n, r, s, a) {
        for (var c = r.child; c !== null; ) {
          if (c.tag === 5) {
            var y = c.stateNode;
            s && a && (y = br(y, c.type, c.memoizedProps, c)), bt(n, y);
          } else if (c.tag === 6) y = c.stateNode, s && a && (y = fo(y, c.memoizedProps, c)), bt(n, y);
          else if (c.tag !== 4) {
            if (c.tag === 22 && c.memoizedState !== null) y = c.child, y !== null && (y.return = c), Ni(n, c, !0, !0);
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
      Ti = function(n, r) {
        var s = r.stateNode;
        if (!os(n, r)) {
          n = s.containerInfo;
          var a = Or(n);
          Ni(a, r, !1, !1), s.pendingChildren = a, Dn(r), An(n, a);
        }
      }, zn = function(n, r, s, a, c) {
        var y = n.stateNode, V = n.memoizedProps;
        if ((n = os(n, r)) && V === a) r.stateNode = y;
        else {
          var ie = r.stateNode, he = gr(pr.current), Ce = null;
          V !== a && (Ce = ce(ie, s, V, a, c, he)), n && Ce === null ? r.stateNode = y : (y = Wn(y, Ce, s, V, a, r, n, ie), b(y, s, a, c, he) && Dn(r), r.stateNode = y, n ? Dn(r) : Ri(y, r, !1, !1));
        }
      }, Gn = function(n, r, s, a) {
        s !== a ? (n = gr(Si.current), s = gr(pr.current), r.stateNode = oe(a, n, s, r), Dn(r)) : r.stateNode = n.stateNode;
      };
    } else Ti = function() {
    }, zn = function() {
    }, Gn = function() {
    };
    function ir(n, r) {
      if (!Pt) switch (n.tailMode) {
        case "hidden":
          r = n.tail;
          for (var s = null; r !== null; ) r.alternate !== null && (s = r), r = r.sibling;
          s === null ? n.tail = null : s.sibling = null;
          break;
        case "collapsed":
          s = n.tail;
          for (var a = null; s !== null; ) s.alternate !== null && (a = s), s = s.sibling;
          a === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : a.sibling = null;
      }
    }
    function Ft(n) {
      var r = n.alternate !== null && n.alternate.child === n.child, s = 0, a = 0;
      if (r) for (var c = n.child; c !== null; ) s |= c.lanes | c.childLanes, a |= c.subtreeFlags & 14680064, a |= c.flags & 14680064, c.return = n, c = c.sibling;
      else for (c = n.child; c !== null; ) s |= c.lanes | c.childLanes, a |= c.subtreeFlags, a |= c.flags, c.return = n, c = c.sibling;
      return n.subtreeFlags |= a, n.childLanes = s, r;
    }
    function ls(n, r, s) {
      var a = r.pendingProps;
      switch (_o(r), r.tag) {
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
          return Ft(r), null;
        case 1:
          return ln(r.type) && Hi(), Ft(r), null;
        case 3:
          return s = r.stateNode, Xi(), Et(qn), Et(wn), ua(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), (n === null || n.child === null) && (ol(r) ? Dn(r) : n === null || n.memoizedState.isDehydrated && (r.flags & 256) === 0 || (r.flags |= 1024, Rr !== null && (Gl(Rr), Rr = null))), Ti(n, r), Ft(r), null;
        case 5:
          la(r), s = gr(Si.current);
          var c = r.type;
          if (n !== null && r.stateNode != null) zn(n, r, c, a, s), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
          else {
            if (!a) {
              if (r.stateNode === null) throw Error(f(166));
              return Ft(r), null;
            }
            if (n = gr(pr.current), ol(r)) {
              if (!Ge) throw Error(f(175));
              n = Bi(r.stateNode, r.type, r.memoizedProps, s, n, r, !So), r.updateQueue = n, n !== null && Dn(r);
            } else {
              var y = M(c, a, s, n, r);
              Ri(y, r, !1, !1), r.stateNode = y, b(y, c, a, s, n) && Dn(r);
            }
            r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
          }
          return Ft(r), null;
        case 6:
          if (n && r.stateNode != null) Gn(n, r, n.memoizedProps, a);
          else {
            if (typeof a != "string" && r.stateNode === null) throw Error(f(166));
            if (n = gr(Si.current), s = gr(pr.current), ol(r)) {
              if (!Ge) throw Error(f(176));
              if (n = r.stateNode, s = r.memoizedProps, (a = zu(n, s, r, !So)) && (c = gn, c !== null)) switch (c.tag) {
                case 3:
                  ud(c.stateNode.containerInfo, n, s, (c.mode & 1) !== 0);
                  break;
                case 5:
                  Bt(c.type, c.memoizedProps, c.stateNode, n, s, (c.mode & 1) !== 0);
              }
              a && Dn(r);
            } else r.stateNode = oe(a, n, s, r);
          }
          return Ft(r), null;
        case 13:
          if (Et(It), a = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
            if (Pt && In !== null && (r.mode & 1) !== 0 && (r.flags & 128) === 0) $u(), Wi(), r.flags |= 98560, c = !1;
            else if (c = ol(r), a !== null && a.dehydrated !== null) {
              if (n === null) {
                if (!c) throw Error(f(318));
                if (!Ge) throw Error(f(344));
                if (c = r.memoizedState, c = c !== null ? c.dehydrated : null, !c) throw Error(f(317));
                Gu(c, r);
              } else Wi(), (r.flags & 128) === 0 && (r.memoizedState = null), r.flags |= 4;
              Ft(r), c = !1;
            } else Rr !== null && (Gl(Rr), Rr = null), c = !0;
            if (!c) return r.flags & 65536 ? r : null;
          }
          return (r.flags & 128) !== 0 ? (r.lanes = s, r) : (s = a !== null, s !== (n !== null && n.memoizedState !== null) && s && (r.child.flags |= 8192, (r.mode & 1) !== 0 && (n === null || (It.current & 1) !== 0 ? Lt === 0 && (Lt = 3) : Xs())), r.updateQueue !== null && (r.flags |= 4), Ft(r), null);
        case 4:
          return Xi(), Ti(n, r), n === null && We(r.stateNode.containerInfo), Ft(r), null;
        case 10:
          return wo(r.type._context), Ft(r), null;
        case 17:
          return ln(r.type) && Hi(), Ft(r), null;
        case 19:
          if (Et(It), c = r.memoizedState, c === null) return Ft(r), null;
          if (a = (r.flags & 128) !== 0, y = c.rendering, y === null) if (a) ir(c, !1);
          else {
            if (Lt !== 0 || n !== null && (n.flags & 128) !== 0) for (n = r.child; n !== null; ) {
              if (y = hl(n), y !== null) {
                for (r.flags |= 128, ir(c, !1), n = y.updateQueue, n !== null && (r.updateQueue = n, r.flags |= 4), r.subtreeFlags = 0, n = s, s = r.child; s !== null; ) a = s, c = n, a.flags &= 14680066, y = a.alternate, y === null ? (a.childLanes = 0, a.lanes = c, a.child = null, a.subtreeFlags = 0, a.memoizedProps = null, a.memoizedState = null, a.updateQueue = null, a.dependencies = null, a.stateNode = null) : (a.childLanes = y.childLanes, a.lanes = y.lanes, a.child = y.child, a.subtreeFlags = 0, a.deletions = null, a.memoizedProps = y.memoizedProps, a.memoizedState = y.memoizedState, a.updateQueue = y.updateQueue, a.type = y.type, c = y.dependencies, a.dependencies = c === null ? null : { lanes: c.lanes, firstContext: c.firstContext }), s = s.sibling;
                return et(It, It.current & 1 | 2), r.child;
              }
              n = n.sibling;
            }
            c.tail !== null && an() > Go && (r.flags |= 128, a = !0, ir(c, !1), r.lanes = 4194304);
          }
          else {
            if (!a) if (n = hl(y), n !== null) {
              if (r.flags |= 128, a = !0, n = n.updateQueue, n !== null && (r.updateQueue = n, r.flags |= 4), ir(c, !0), c.tail === null && c.tailMode === "hidden" && !y.alternate && !Pt) return Ft(r), null;
            } else 2 * an() - c.renderingStartTime > Go && s !== 1073741824 && (r.flags |= 128, a = !0, ir(c, !1), r.lanes = 4194304);
            c.isBackwards ? (y.sibling = r.child, r.child = y) : (n = c.last, n !== null ? n.sibling = y : r.child = y, c.last = y);
          }
          return c.tail !== null ? (r = c.tail, c.rendering = r, c.tail = r.sibling, c.renderingStartTime = an(), r.sibling = null, n = It.current, et(It, a ? n & 1 | 2 : n & 1), r) : (Ft(r), null);
        case 22:
        case 23:
          return Ul(), s = r.memoizedState !== null, n !== null && n.memoizedState !== null !== s && (r.flags |= 8192), s && (r.mode & 1) !== 0 ? (en & 1073741824) !== 0 && (Ft(r), Re && r.subtreeFlags & 6 && (r.flags |= 8192)) : Ft(r), null;
        case 24:
          return null;
        case 25:
          return null;
      }
      throw Error(f(
        156,
        r.tag
      ));
    }
    function gc(n, r) {
      switch (_o(r), r.tag) {
        case 1:
          return ln(r.type) && Hi(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
        case 3:
          return Xi(), Et(qn), Et(wn), ua(), n = r.flags, (n & 65536) !== 0 && (n & 128) === 0 ? (r.flags = n & -65537 | 128, r) : null;
        case 5:
          return la(r), null;
        case 13:
          if (Et(It), n = r.memoizedState, n !== null && n.dehydrated !== null) {
            if (r.alternate === null) throw Error(f(340));
            Wi();
          }
          return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
        case 19:
          return Et(It), null;
        case 4:
          return Xi(), null;
        case 10:
          return wo(r.type._context), null;
        case 22:
        case 23:
          return Ul(), null;
        case 24:
          return null;
        default:
          return null;
      }
    }
    var zs = !1, dn = !1, sr = typeof WeakSet == "function" ? WeakSet : Set, Pe = null;
    function ft(n, r) {
      var s = n.ref;
      if (s !== null) if (typeof s == "function") try {
        s(null);
      } catch (a) {
        Tt(n, r, a);
      }
      else s.current = null;
    }
    function or(n, r, s) {
      try {
        s();
      } catch (a) {
        Tt(n, r, a);
      }
    }
    var ka = !1;
    function mc(n, r) {
      for (W(n.containerInfo), Pe = r; Pe !== null; ) if (n = Pe, r = n.child, (n.subtreeFlags & 1028) !== 0 && r !== null) r.return = n, Pe = r;
      else for (; Pe !== null; ) {
        n = Pe;
        try {
          var s = n.alternate;
          if ((n.flags & 1024) !== 0) switch (n.tag) {
            case 0:
            case 11:
            case 15:
              break;
            case 1:
              if (s !== null) {
                var a = s.memoizedProps, c = s.memoizedState, y = n.stateNode, V = y.getSnapshotBeforeUpdate(n.elementType === n.type ? a : rr(n.type, a), c);
                y.__reactInternalSnapshotBeforeUpdate = V;
              }
              break;
            case 3:
              Re && mt(n.stateNode.containerInfo);
              break;
            case 5:
            case 6:
            case 4:
            case 17:
              break;
            default:
              throw Error(f(163));
          }
        } catch (ie) {
          Tt(n, n.return, ie);
        }
        if (r = n.sibling, r !== null) {
          r.return = n.return, Pe = r;
          break;
        }
        Pe = n.return;
      }
      return s = ka, ka = !1, s;
    }
    function as(n, r, s) {
      var a = r.updateQueue;
      if (a = a !== null ? a.lastEffect : null, a !== null) {
        var c = a = a.next;
        do {
          if ((c.tag & n) === n) {
            var y = c.destroy;
            c.destroy = void 0, y !== void 0 && or(r, s, y);
          }
          c = c.next;
        } while (c !== a);
      }
    }
    function Gs(n, r) {
      if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
        var s = r = r.next;
        do {
          if ((s.tag & n) === n) {
            var a = s.create;
            s.destroy = a();
          }
          s = s.next;
        } while (s !== r);
      }
    }
    function Rl(n) {
      var r = n.ref;
      if (r !== null) {
        var s = n.stateNode;
        switch (n.tag) {
          case 5:
            n = Q(s);
            break;
          default:
            n = s;
        }
        typeof r == "function" ? r(n) : r.current = n;
      }
    }
    function Lo(n) {
      var r = n.alternate;
      r !== null && (n.alternate = null, Lo(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && $e(r)), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
    }
    function Ea(n) {
      return n.tag === 5 || n.tag === 3 || n.tag === 4;
    }
    function us(n) {
      e: for (; ; ) {
        for (; n.sibling === null; ) {
          if (n.return === null || Ea(n.return)) return null;
          n = n.return;
        }
        for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
          if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
          n.child.return = n, n = n.child;
        }
        if (!(n.flags & 2)) return n.stateNode;
      }
    }
    function Ao(n, r, s) {
      var a = n.tag;
      if (a === 5 || a === 6) n = n.stateNode, r ? Ar(s, n, r) : Ln(s, n);
      else if (a !== 4 && (n = n.child, n !== null)) for (Ao(n, r, s), n = n.sibling; n !== null; ) Ao(n, r, s), n = n.sibling;
    }
    function Pa(n, r, s) {
      var a = n.tag;
      if (a === 5 || a === 6) n = n.stateNode, r ? Di(s, n, r) : on(s, n);
      else if (a !== 4 && (n = n.child, n !== null)) for (Pa(n, r, s), n = n.sibling; n !== null; ) Pa(n, r, s), n = n.sibling;
    }
    var Vt = null, Qn = !1;
    function Nr(n, r, s) {
      for (s = s.child; s !== null; ) Tl(n, r, s), s = s.sibling;
    }
    function Tl(n, r, s) {
      if (Kn && typeof Kn.onCommitFiberUnmount == "function") try {
        Kn.onCommitFiberUnmount(gi, s);
      } catch {
      }
      switch (s.tag) {
        case 5:
          dn || ft(s, r);
        case 6:
          if (Re) {
            var a = Vt, c = Qn;
            Vt = null, Nr(n, r, s), Vt = a, Qn = c, Vt !== null && (Qn ? ve(Vt, s.stateNode) : co(Vt, s.stateNode));
          } else Nr(n, r, s);
          break;
        case 18:
          Re && Vt !== null && (Qn ? Hu(Vt, s.stateNode) : Vu(Vt, s.stateNode));
          break;
        case 4:
          Re ? (a = Vt, c = Qn, Vt = s.stateNode.containerInfo, Qn = !0, Nr(n, r, s), Vt = a, Qn = c) : (Be && (a = s.stateNode.containerInfo, c = Or(a), Qr(a, c)), Nr(n, r, s));
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          if (!dn && (a = s.updateQueue, a !== null && (a = a.lastEffect, a !== null))) {
            c = a = a.next;
            do {
              var y = c, V = y.destroy;
              y = y.tag, V !== void 0 && ((y & 2) !== 0 || (y & 4) !== 0) && or(s, r, V), c = c.next;
            } while (c !== a);
          }
          Nr(n, r, s);
          break;
        case 1:
          if (!dn && (ft(s, r), a = s.stateNode, typeof a.componentWillUnmount == "function")) try {
            a.props = s.memoizedProps, a.state = s.memoizedState, a.componentWillUnmount();
          } catch (ie) {
            Tt(s, r, ie);
          }
          Nr(n, r, s);
          break;
        case 21:
          Nr(n, r, s);
          break;
        case 22:
          s.mode & 1 ? (dn = (a = dn) || s.memoizedState !== null, Nr(n, r, s), dn = a) : Nr(n, r, s);
          break;
        default:
          Nr(
            n,
            r,
            s
          );
      }
    }
    function cs(n) {
      var r = n.updateQueue;
      if (r !== null) {
        n.updateQueue = null;
        var s = n.stateNode;
        s === null && (s = n.stateNode = new sr()), r.forEach(function(a) {
          var c = md.bind(null, n, a);
          s.has(a) || (s.add(a), a.then(c, c));
        });
      }
    }
    function yr(n, r) {
      var s = r.deletions;
      if (s !== null) for (var a = 0; a < s.length; a++) {
        var c = s[a];
        try {
          var y = n, V = r;
          if (Re) {
            var ie = V;
            e: for (; ie !== null; ) {
              switch (ie.tag) {
                case 5:
                  Vt = ie.stateNode, Qn = !1;
                  break e;
                case 3:
                  Vt = ie.stateNode.containerInfo, Qn = !0;
                  break e;
                case 4:
                  Vt = ie.stateNode.containerInfo, Qn = !0;
                  break e;
              }
              ie = ie.return;
            }
            if (Vt === null) throw Error(f(160));
            Tl(y, V, c), Vt = null, Qn = !1;
          } else Tl(y, V, c);
          var he = c.alternate;
          he !== null && (he.return = null), c.return = null;
        } catch (Ce) {
          Tt(c, r, Ce);
        }
      }
      if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) Oo(r, n), r = r.sibling;
    }
    function Oo(n, r) {
      var s = n.alternate, a = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          if (yr(r, n), lr(n), a & 4) {
            try {
              as(3, n, n.return), Gs(3, n);
            } catch (Ne) {
              Tt(n, n.return, Ne);
            }
            try {
              as(5, n, n.return);
            } catch (Ne) {
              Tt(n, n.return, Ne);
            }
          }
          break;
        case 1:
          yr(r, n), lr(n), a & 512 && s !== null && ft(s, s.return);
          break;
        case 5:
          if (yr(r, n), lr(n), a & 512 && s !== null && ft(s, s.return), Re) {
            if (n.flags & 32) {
              var c = n.stateNode;
              try {
                xe(c);
              } catch (Ne) {
                Tt(n, n.return, Ne);
              }
            }
            if (a & 4 && (c = n.stateNode, c != null)) {
              var y = n.memoizedProps;
              if (s = s !== null ? s.memoizedProps : y, a = n.type, r = n.updateQueue, n.updateQueue = null, r !== null) try {
                Lr(c, r, a, s, y, n);
              } catch (Ne) {
                Tt(n, n.return, Ne);
              }
            }
          }
          break;
        case 6:
          if (yr(r, n), lr(n), a & 4 && Re) {
            if (n.stateNode === null) throw Error(f(162));
            c = n.stateNode, y = n.memoizedProps, s = s !== null ? s.memoizedProps : y;
            try {
              At(c, s, y);
            } catch (Ne) {
              Tt(n, n.return, Ne);
            }
          }
          break;
        case 3:
          if (yr(r, n), lr(n), a & 4) {
            if (Re && Ge && s !== null && s.memoizedState.isDehydrated) try {
              Uu(r.containerInfo);
            } catch (Ne) {
              Tt(n, n.return, Ne);
            }
            if (Be) {
              c = r.containerInfo, y = r.pendingChildren;
              try {
                Qr(c, y);
              } catch (Ne) {
                Tt(n, n.return, Ne);
              }
            }
          }
          break;
        case 4:
          if (yr(
            r,
            n
          ), lr(n), a & 4 && Be) {
            y = n.stateNode, c = y.containerInfo, y = y.pendingChildren;
            try {
              Qr(c, y);
            } catch (Ne) {
              Tt(n, n.return, Ne);
            }
          }
          break;
        case 13:
          yr(r, n), lr(n), c = n.child, c.flags & 8192 && (y = c.memoizedState !== null, c.stateNode.isHidden = y, !y || c.alternate !== null && c.alternate.memoizedState !== null || (Ws = an())), a & 4 && cs(n);
          break;
        case 22:
          var V = s !== null && s.memoizedState !== null;
          if (n.mode & 1 ? (dn = (s = dn) || V, yr(r, n), dn = s) : yr(r, n), lr(n), a & 8192) {
            if (s = n.memoizedState !== null, (n.stateNode.isHidden = s) && !V && (n.mode & 1) !== 0) for (Pe = n, a = n.child; a !== null; ) {
              for (r = Pe = a; Pe !== null; ) {
                V = Pe;
                var ie = V.child;
                switch (V.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    as(4, V, V.return);
                    break;
                  case 1:
                    ft(V, V.return);
                    var he = V.stateNode;
                    if (typeof he.componentWillUnmount == "function") {
                      var Ce = V, Le = V.return;
                      try {
                        var Ke = Ce;
                        he.props = Ke.memoizedProps, he.state = Ke.memoizedState, he.componentWillUnmount();
                      } catch (Ne) {
                        Tt(Ce, Le, Ne);
                      }
                    }
                    break;
                  case 5:
                    ft(V, V.return);
                    break;
                  case 22:
                    if (V.memoizedState !== null) {
                      Ml(r);
                      continue;
                    }
                }
                ie !== null ? (ie.return = V, Pe = ie) : Ml(r);
              }
              a = a.sibling;
            }
            if (Re) {
              e: if (a = null, Re) for (r = n; ; ) {
                if (r.tag === 5) {
                  if (a === null) {
                    a = r;
                    try {
                      c = r.stateNode, s ? Te(c) : Qe(r.stateNode, r.memoizedProps);
                    } catch (Ne) {
                      Tt(n, n.return, Ne);
                    }
                  }
                } else if (r.tag === 6) {
                  if (a === null) try {
                    y = r.stateNode, s ? Ee(y) : be(y, r.memoizedProps);
                  } catch (Ne) {
                    Tt(n, n.return, Ne);
                  }
                } else if ((r.tag !== 22 && r.tag !== 23 || r.memoizedState === null || r === n) && r.child !== null) {
                  r.child.return = r, r = r.child;
                  continue;
                }
                if (r === n) break e;
                for (; r.sibling === null; ) {
                  if (r.return === null || r.return === n) break e;
                  a === r && (a = null), r = r.return;
                }
                a === r && (a = null), r.sibling.return = r.return, r = r.sibling;
              }
            }
          }
          break;
        case 19:
          yr(r, n), lr(n), a & 4 && cs(n);
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
          if (Re) {
            e: {
              for (var s = n.return; s !== null; ) {
                if (Ea(s)) {
                  var a = s;
                  break e;
                }
                s = s.return;
              }
              throw Error(f(160));
            }
            switch (a.tag) {
              case 5:
                var c = a.stateNode;
                a.flags & 32 && (xe(c), a.flags &= -33);
                var y = us(n);
                Pa(n, y, c);
                break;
              case 3:
              case 4:
                var V = a.stateNode.containerInfo, ie = us(n);
                Ao(n, ie, V);
                break;
              default:
                throw Error(f(161));
            }
          }
        } catch (he) {
          Tt(n, n.return, he);
        }
        n.flags &= -3;
      }
      r & 4096 && (n.flags &= -4097);
    }
    function Us(n, r, s) {
      Pe = n, Nl(n);
    }
    function Nl(n, r, s) {
      for (var a = (n.mode & 1) !== 0; Pe !== null; ) {
        var c = Pe, y = c.child;
        if (c.tag === 22 && a) {
          var V = c.memoizedState !== null || zs;
          if (!V) {
            var ie = c.alternate, he = ie !== null && ie.memoizedState !== null || dn;
            ie = zs;
            var Ce = dn;
            if (zs = V, (dn = he) && !Ce) for (Pe = c; Pe !== null; ) V = Pe, he = V.child, V.tag === 22 && V.memoizedState !== null ? Ll(c) : he !== null ? (he.return = V, Pe = he) : Ll(c);
            for (; y !== null; ) Pe = y, Nl(y), y = y.sibling;
            Pe = c, zs = ie, dn = Ce;
          }
          Fl(n);
        } else (c.subtreeFlags & 8772) !== 0 && y !== null ? (y.return = c, Pe = y) : Fl(n);
      }
    }
    function Fl(n) {
      for (; Pe !== null; ) {
        var r = Pe;
        if ((r.flags & 8772) !== 0) {
          var s = r.alternate;
          try {
            if ((r.flags & 8772) !== 0) switch (r.tag) {
              case 0:
              case 11:
              case 15:
                dn || Gs(5, r);
                break;
              case 1:
                var a = r.stateNode;
                if (r.flags & 4 && !dn) if (s === null) a.componentDidMount();
                else {
                  var c = r.elementType === r.type ? s.memoizedProps : rr(r.type, s.memoizedProps);
                  a.componentDidUpdate(c, s.memoizedState, a.__reactInternalSnapshotBeforeUpdate);
                }
                var y = r.updateQueue;
                y !== null && sc(r, y, a);
                break;
              case 3:
                var V = r.updateQueue;
                if (V !== null) {
                  if (s = null, r.child !== null) switch (r.child.tag) {
                    case 5:
                      s = Q(r.child.stateNode);
                      break;
                    case 1:
                      s = r.child.stateNode;
                  }
                  sc(r, V, s);
                }
                break;
              case 5:
                var ie = r.stateNode;
                s === null && r.flags & 4 && Ot(ie, r.type, r.memoizedProps, r);
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (Ge && r.memoizedState === null) {
                  var he = r.alternate;
                  if (he !== null) {
                    var Ce = he.memoizedState;
                    if (Ce !== null) {
                      var Le = Ce.dehydrated;
                      Le !== null && Bu(Le);
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
                throw Error(f(163));
            }
            dn || r.flags & 512 && Rl(r);
          } catch (Ke) {
            Tt(r, r.return, Ke);
          }
        }
        if (r === n) {
          Pe = null;
          break;
        }
        if (s = r.sibling, s !== null) {
          s.return = r.return, Pe = s;
          break;
        }
        Pe = r.return;
      }
    }
    function Ml(n) {
      for (; Pe !== null; ) {
        var r = Pe;
        if (r === n) {
          Pe = null;
          break;
        }
        var s = r.sibling;
        if (s !== null) {
          s.return = r.return, Pe = s;
          break;
        }
        Pe = r.return;
      }
    }
    function Ll(n) {
      for (; Pe !== null; ) {
        var r = Pe;
        try {
          switch (r.tag) {
            case 0:
            case 11:
            case 15:
              var s = r.return;
              try {
                Gs(4, r);
              } catch (he) {
                Tt(r, s, he);
              }
              break;
            case 1:
              var a = r.stateNode;
              if (typeof a.componentDidMount == "function") {
                var c = r.return;
                try {
                  a.componentDidMount();
                } catch (he) {
                  Tt(r, c, he);
                }
              }
              var y = r.return;
              try {
                Rl(r);
              } catch (he) {
                Tt(r, y, he);
              }
              break;
            case 5:
              var V = r.return;
              try {
                Rl(r);
              } catch (he) {
                Tt(r, V, he);
              }
          }
        } catch (he) {
          Tt(r, r.return, he);
        }
        if (r === n) {
          Pe = null;
          break;
        }
        var ie = r.sibling;
        if (ie !== null) {
          ie.return = r.return, Pe = ie;
          break;
        }
        Pe = r.return;
      }
    }
    var oi = 0, Un = 1, Hr = 2, Bs = 3, Io = 4;
    if (typeof Symbol == "function" && Symbol.for) {
      var ar = Symbol.for;
      oi = ar("selector.component"), Un = ar("selector.has_pseudo_class"), Hr = ar("selector.role"), Bs = ar("selector.test_id"), Io = ar("selector.text");
    }
    function jr(n) {
      var r = rt(n);
      if (r != null) {
        if (typeof r.memoizedProps["data-testname"] != "string") throw Error(f(364));
        return r;
      }
      if (n = _t(n), n === null) throw Error(f(362));
      return n.stateNode.current;
    }
    function Do(n, r) {
      switch (r.$$typeof) {
        case oi:
          if (n.type === r.value) return !0;
          break;
        case Un:
          e: {
            r = r.value, n = [n, 0];
            for (var s = 0; s < n.length; ) {
              var a = n[s++], c = n[s++], y = r[c];
              if (a.tag !== 5 || !Qt(a)) {
                for (; y != null && Do(a, y); ) c++, y = r[c];
                if (c === r.length) {
                  r = !0;
                  break e;
                } else for (a = a.child; a !== null; ) n.push(a, c), a = a.sibling;
              }
            }
            r = !1;
          }
          return r;
        case Hr:
          if (n.tag === 5 && fr(n.stateNode, r.value)) return !0;
          break;
        case Io:
          if ((n.tag === 5 || n.tag === 6) && (n = Sn(n), n !== null && 0 <= n.indexOf(r.value))) return !0;
          break;
        case Bs:
          if (n.tag === 5 && (n = n.memoizedProps["data-testname"], typeof n == "string" && n.toLowerCase() === r.value.toLowerCase())) return !0;
          break;
        default:
          throw Error(f(365));
      }
      return !1;
    }
    function Al(n) {
      switch (n.$$typeof) {
        case oi:
          return "<" + (J(n.value) || "Unknown") + ">";
        case Un:
          return ":has(" + (Al(n) || "") + ")";
        case Hr:
          return '[role="' + n.value + '"]';
        case Io:
          return '"' + n.value + '"';
        case Bs:
          return '[data-testname="' + n.value + '"]';
        default:
          throw Error(f(365));
      }
    }
    function Wr(n, r) {
      var s = [];
      n = [n, 0];
      for (var a = 0; a < n.length; ) {
        var c = n[a++], y = n[a++], V = r[y];
        if (c.tag !== 5 || !Qt(c)) {
          for (; V != null && Do(c, V); ) y++, V = r[y];
          if (y === r.length) s.push(c);
          else for (c = c.child; c !== null; ) n.push(c, y), c = c.sibling;
        }
      }
      return s;
    }
    function qr(n, r) {
      if (!kt) throw Error(f(363));
      n = jr(n), n = Wr(n, r), r = [], n = Array.from(n);
      for (var s = 0; s < n.length; ) {
        var a = n[s++];
        if (a.tag === 5) Qt(a) || r.push(a.stateNode);
        else for (a = a.child; a !== null; ) n.push(a), a = a.sibling;
      }
      return r;
    }
    var Ol = Math.ceil, zo = m.ReactCurrentDispatcher, Vs = m.ReactCurrentOwner, zt = m.ReactCurrentBatchConfig, Xe = 0, vt = null, Mt = null, Ht = 0, en = 0, Fi = hn(0), Lt = 0, Hs = null, li = 0, xt = 0, js = 0, ds = null, kn = null, Ws = 0, Go = 1 / 0, Bn = null;
    function pt() {
      Go = an() + 500;
    }
    var Gt = !1, qt = null, Fr = null, Mi = !1, vr = null, Il = 0, Kt = 0, Uo = null, qs = -1, Ks = 0;
    function Rt() {
      return (Xe & 6) !== 0 ? an() : qs !== -1 ? qs : qs = an();
    }
    function tn(n) {
      return (n.mode & 1) === 0 ? 1 : (Xe & 2) !== 0 && Ht !== 0 ? Ht & -Ht : hd.transition !== null ? (Ks === 0 && (Ks = $o()), Ks) : (n = tt, n !== 0 ? n : Dt());
    }
    function En(n, r, s, a) {
      if (50 < Kt) throw Kt = 0, Uo = null, Error(f(185));
      hr(n, s, a), ((Xe & 2) === 0 || n !== vt) && (n === vt && ((Xe & 2) === 0 && (xt |= s), Lt === 4 && ai(n, Ht)), Pn(n, a), s === 1 && Xe === 0 && (r.mode & 1) === 0 && (pt(), Es && pn()));
    }
    function Pn(n, r) {
      var s = n.callbackNode;
      Ku(n, r);
      var a = ws(n, n === vt ? Ht : 0);
      if (a === 0) s !== null && Yu(s), n.callbackNode = null, n.callbackPriority = 0;
      else if (r = a & -a, n.callbackPriority !== r) {
        if (s != null && Yu(s), r === 1) n.tag === 0 ? Qu(Ra.bind(null, n)) : il(Ra.bind(null, n)), gt ? Ut(function() {
          (Xe & 6) === 0 && pn();
        }) : zr(el, pn), s = null;
        else {
          switch (Cs(a)) {
            case 1:
              s = el;
              break;
            case 4:
              s = tl;
              break;
            case 16:
              s = nl;
              break;
            case 536870912:
              s = fd;
              break;
            default:
              s = nl;
          }
          s = Oa(s, Dl.bind(null, n));
        }
        n.callbackPriority = r, n.callbackNode = s;
      }
    }
    function Dl(n, r) {
      if (qs = -1, Ks = 0, (Xe & 6) !== 0) throw Error(f(327));
      var s = n.callbackNode;
      if (ui() && n.callbackNode !== s) return null;
      var a = ws(n, n === vt ? Ht : 0);
      if (a === 0) return null;
      if ((a & 30) !== 0 || (a & n.expiredLanes) !== 0 || r) r = fs(n, a);
      else {
        r = a;
        var c = Xe;
        Xe |= 2;
        var y = Na();
        (vt !== n || Ht !== r) && (Bn = null, pt(), Li(n, r));
        do
          try {
            Fa();
            break;
          } catch (ie) {
            Ys(n, ie);
          }
        while (!0);
        ra(), zo.current = y, Xe = c, Mt !== null ? r = 0 : (vt = null, Ht = 0, r = Lt);
      }
      if (r !== 0) {
        if (r === 2 && (c = Zo(n), c !== 0 && (a = c, r = zl(n, c))), r === 1) throw s = Hs, Li(n, 0), ai(n, a), Pn(n, an()), s;
        if (r === 6) ai(n, a);
        else {
          if (c = n.current.alternate, (a & 30) === 0 && !yc(c) && (r = fs(n, a), r === 2 && (y = Zo(n), y !== 0 && (a = y, r = zl(n, y))), r === 1)) throw s = Hs, Li(n, 0), ai(n, a), Pn(n, an()), s;
          switch (n.finishedWork = c, n.finishedLanes = a, r) {
            case 0:
            case 1:
              throw Error(f(345));
            case 2:
              Ai(n, kn, Bn);
              break;
            case 3:
              if (ai(n, a), (a & 130023424) === a && (r = Ws + 500 - an(), 10 < r)) {
                if (ws(n, 0) !== 0) break;
                if (c = n.suspendedLanes, (c & a) !== a) {
                  Rt(), n.pingedLanes |= n.suspendedLanes & c;
                  break;
                }
                n.timeoutHandle = q(Ai.bind(null, n, kn, Bn), r);
                break;
              }
              Ai(n, kn, Bn);
              break;
            case 4:
              if (ai(n, a), (a & 4194240) === a) break;
              for (r = n.eventTimes, c = -1; 0 < a; ) {
                var V = 31 - Zn(a);
                y = 1 << V, V = r[V], V > c && (c = V), a &= ~y;
              }
              if (a = c, a = an() - a, a = (120 > a ? 120 : 480 > a ? 480 : 1080 > a ? 1080 : 1920 > a ? 1920 : 3e3 > a ? 3e3 : 4320 > a ? 4320 : 1960 * Ol(a / 1960)) - a, 10 < a) {
                n.timeoutHandle = q(Ai.bind(null, n, kn, Bn), a);
                break;
              }
              Ai(n, kn, Bn);
              break;
            case 5:
              Ai(n, kn, Bn);
              break;
            default:
              throw Error(f(329));
          }
        }
      }
      return Pn(n, an()), n.callbackNode === s ? Dl.bind(null, n) : null;
    }
    function zl(n, r) {
      var s = ds;
      return n.current.memoizedState.isDehydrated && (Li(n, r).flags |= 256), n = fs(n, r), n !== 2 && (r = kn, kn = s, r !== null && Gl(r)), n;
    }
    function Gl(n) {
      kn === null ? kn = n : kn.push.apply(kn, n);
    }
    function yc(n) {
      for (var r = n; ; ) {
        if (r.flags & 16384) {
          var s = r.updateQueue;
          if (s !== null && (s = s.stores, s !== null)) for (var a = 0; a < s.length; a++) {
            var c = s[a], y = c.getSnapshot;
            c = c.value;
            try {
              if (!kr(y(), c)) return !1;
            } catch {
              return !1;
            }
          }
        }
        if (s = r.child, r.subtreeFlags & 16384 && s !== null) s.return = r, r = s;
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
    function ai(n, r) {
      for (r &= ~js, r &= ~xt, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
        var s = 31 - Zn(r), a = 1 << s;
        n[s] = -1, r &= ~a;
      }
    }
    function Ra(n) {
      if ((Xe & 6) !== 0) throw Error(f(327));
      ui();
      var r = ws(n, 0);
      if ((r & 1) === 0) return Pn(n, an()), null;
      var s = fs(n, r);
      if (n.tag !== 0 && s === 2) {
        var a = Zo(n);
        a !== 0 && (r = a, s = zl(n, a));
      }
      if (s === 1) throw s = Hs, Li(n, 0), ai(n, r), Pn(n, an()), s;
      if (s === 6) throw Error(f(345));
      return n.finishedWork = n.current.alternate, n.finishedLanes = r, Ai(n, kn, Bn), Pn(n, an()), null;
    }
    function Ta(n) {
      vr !== null && vr.tag === 0 && (Xe & 6) === 0 && ui();
      var r = Xe;
      Xe |= 1;
      var s = zt.transition, a = tt;
      try {
        if (zt.transition = null, tt = 1, n) return n();
      } finally {
        tt = a, zt.transition = s, Xe = r, (Xe & 6) === 0 && pn();
      }
    }
    function Ul() {
      en = Fi.current, Et(Fi);
    }
    function Li(n, r) {
      n.finishedWork = null, n.finishedLanes = 0;
      var s = n.timeoutHandle;
      if (s !== ge && (n.timeoutHandle = ge, se(s)), Mt !== null) for (s = Mt.return; s !== null; ) {
        var a = s;
        switch (_o(a), a.tag) {
          case 1:
            a = a.type.childContextTypes, a != null && Hi();
            break;
          case 3:
            Xi(), Et(qn), Et(wn), ua();
            break;
          case 5:
            la(a);
            break;
          case 4:
            Xi();
            break;
          case 13:
            Et(It);
            break;
          case 19:
            Et(It);
            break;
          case 10:
            wo(a.type._context);
            break;
          case 22:
          case 23:
            Ul();
        }
        s = s.return;
      }
      if (vt = n, Mt = n = Oi(n.current, null), Ht = en = r, Lt = 0, Hs = null, js = xt = li = 0, kn = ds = null, yi !== null) {
        for (r = 0; r < yi.length; r++) if (s = yi[r], a = s.interleaved, a !== null) {
          s.interleaved = null;
          var c = a.next, y = s.pending;
          if (y !== null) {
            var V = y.next;
            y.next = c, a.next = V;
          }
          s.pending = a;
        }
        yi = null;
      }
      return n;
    }
    function Ys(n, r) {
      do {
        var s = Mt;
        try {
          if (ra(), Xn.current = ts, Ms) {
            for (var a = Nt.memoizedState; a !== null; ) {
              var c = a.queue;
              c !== null && (c.pending = null), a = a.next;
            }
            Ms = !1;
          }
          if (wi = 0, Zt = Wt = Nt = null, Co = !1, ko = 0, Vs.current = null, s === null || s.return === null) {
            Lt = 1, Hs = r, Mt = null;
            break;
          }
          e: {
            var y = n, V = s.return, ie = s, he = r;
            if (r = Ht, ie.flags |= 32768, he !== null && typeof he == "object" && typeof he.then == "function") {
              var Ce = he, Le = ie, Ke = Le.tag;
              if ((Le.mode & 1) === 0 && (Ke === 0 || Ke === 11 || Ke === 15)) {
                var Ne = Le.alternate;
                Ne ? (Le.updateQueue = Ne.updateQueue, Le.memoizedState = Ne.memoizedState, Le.lanes = Ne.lanes) : (Le.updateQueue = null, Le.memoizedState = null);
              }
              var Ct = hc(V);
              if (Ct !== null) {
                Ct.flags &= -257, ki(Ct, V, ie, y, r), Ct.mode & 1 && fc(y, Ce, r), r = Ct, he = Ce;
                var ht = r.updateQueue;
                if (ht === null) {
                  var Vn = /* @__PURE__ */ new Set();
                  Vn.add(he), r.updateQueue = Vn;
                } else ht.add(he);
                break e;
              } else {
                if ((r & 1) === 0) {
                  fc(y, Ce, r), Xs();
                  break e;
                }
                he = Error(f(426));
              }
            } else if (Pt && ie.mode & 1) {
              var Kr = hc(V);
              if (Kr !== null) {
                (Kr.flags & 65536) === 0 && (Kr.flags |= 256), ki(Kr, V, ie, y, r), ta(ns(he, ie));
                break e;
              }
            }
            y = he = ns(he, ie), Lt !== 4 && (Lt = 2), ds === null ? ds = [y] : ds.push(y), y = V;
            do {
              switch (y.tag) {
                case 3:
                  y.flags |= 65536, r &= -r, y.lanes |= r;
                  var de = Ur(y, he, r);
                  Ns(y, de);
                  break e;
                case 1:
                  ie = he;
                  var le = y.type, pe = y.stateNode;
                  if ((y.flags & 128) === 0 && (typeof le.getDerivedStateFromError == "function" || pe !== null && typeof pe.componentDidCatch == "function" && (Fr === null || !Fr.has(pe)))) {
                    y.flags |= 65536, r &= -r, y.lanes |= r;
                    var Fe = Cl(y, ie, r);
                    Ns(y, Fe);
                    break e;
                  }
              }
              y = y.return;
            } while (y !== null);
          }
          La(s);
        } catch (Ue) {
          r = Ue, Mt === s && s !== null && (Mt = s = s.return);
          continue;
        }
        break;
      } while (!0);
    }
    function Na() {
      var n = zo.current;
      return zo.current = ts, n === null ? ts : n;
    }
    function Xs() {
      (Lt === 0 || Lt === 3 || Lt === 2) && (Lt = 4), vt === null || (li & 268435455) === 0 && (xt & 268435455) === 0 || ai(vt, Ht);
    }
    function fs(n, r) {
      var s = Xe;
      Xe |= 2;
      var a = Na();
      (vt !== n || Ht !== r) && (Bn = null, Li(n, r));
      do
        try {
          vc();
          break;
        } catch (c) {
          Ys(n, c);
        }
      while (!0);
      if (ra(), Xe = s, zo.current = a, Mt !== null) throw Error(f(261));
      return vt = null, Ht = 0, Lt;
    }
    function vc() {
      for (; Mt !== null; ) Ma(Mt);
    }
    function Fa() {
      for (; Mt !== null && !Xu(); ) Ma(Mt);
    }
    function Ma(n) {
      var r = Cc(n.alternate, n, en);
      n.memoizedProps = n.pendingProps, r === null ? La(n) : Mt = r, Vs.current = null;
    }
    function La(n) {
      var r = n;
      do {
        var s = r.alternate;
        if (n = r.return, (r.flags & 32768) === 0) {
          if (s = ls(s, r, en), s !== null) {
            Mt = s;
            return;
          }
        } else {
          if (s = gc(s, r), s !== null) {
            s.flags &= 32767, Mt = s;
            return;
          }
          if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
          else {
            Lt = 6, Mt = null;
            return;
          }
        }
        if (r = r.sibling, r !== null) {
          Mt = r;
          return;
        }
        Mt = r = n;
      } while (r !== null);
      Lt === 0 && (Lt = 5);
    }
    function Ai(n, r, s) {
      var a = tt, c = zt.transition;
      try {
        zt.transition = null, tt = 1, _c(n, r, s, a);
      } finally {
        zt.transition = c, tt = a;
      }
      return null;
    }
    function _c(n, r, s, a) {
      do
        ui();
      while (vr !== null);
      if ((Xe & 6) !== 0) throw Error(f(327));
      s = n.finishedWork;
      var c = n.finishedLanes;
      if (s === null) return null;
      if (n.finishedWork = null, n.finishedLanes = 0, s === n.current) throw Error(f(177));
      n.callbackNode = null, n.callbackPriority = 0;
      var y = s.lanes | s.childLanes;
      if (pi(n, y), n === vt && (Mt = vt = null, Ht = 0), (s.subtreeFlags & 2064) === 0 && (s.flags & 2064) === 0 || Mi || (Mi = !0, Oa(nl, function() {
        return ui(), null;
      })), y = (s.flags & 15990) !== 0, (s.subtreeFlags & 15990) !== 0 || y) {
        y = zt.transition, zt.transition = null;
        var V = tt;
        tt = 1;
        var ie = Xe;
        Xe |= 4, Vs.current = null, mc(n, s), Oo(s, n), B(n.containerInfo), n.current = s, Us(s), mo(), Xe = ie, tt = V, zt.transition = y;
      } else n.current = s;
      if (Mi && (Mi = !1, vr = n, Il = c), y = n.pendingLanes, y === 0 && (Fr = null), ks(s.stateNode), Pn(n, an()), r !== null) for (a = n.onRecoverableError, s = 0; s < r.length; s++) c = r[s], a(c.value, { componentStack: c.stack, digest: c.digest });
      if (Gt) throw Gt = !1, n = qt, qt = null, n;
      return (Il & 1) !== 0 && n.tag !== 0 && ui(), y = n.pendingLanes, (y & 1) !== 0 ? n === Uo ? Kt++ : (Kt = 0, Uo = n) : Kt = 0, pn(), null;
    }
    function ui() {
      if (vr !== null) {
        var n = Cs(Il), r = zt.transition, s = tt;
        try {
          if (zt.transition = null, tt = 16 > n ? 16 : n, vr === null) var a = !1;
          else {
            if (n = vr, vr = null, Il = 0, (Xe & 6) !== 0) throw Error(f(331));
            var c = Xe;
            for (Xe |= 4, Pe = n.current; Pe !== null; ) {
              var y = Pe, V = y.child;
              if ((Pe.flags & 16) !== 0) {
                var ie = y.deletions;
                if (ie !== null) {
                  for (var he = 0; he < ie.length; he++) {
                    var Ce = ie[he];
                    for (Pe = Ce; Pe !== null; ) {
                      var Le = Pe;
                      switch (Le.tag) {
                        case 0:
                        case 11:
                        case 15:
                          as(8, Le, y);
                      }
                      var Ke = Le.child;
                      if (Ke !== null) Ke.return = Le, Pe = Ke;
                      else for (; Pe !== null; ) {
                        Le = Pe;
                        var Ne = Le.sibling, Ct = Le.return;
                        if (Lo(Le), Le === Ce) {
                          Pe = null;
                          break;
                        }
                        if (Ne !== null) {
                          Ne.return = Ct, Pe = Ne;
                          break;
                        }
                        Pe = Ct;
                      }
                    }
                  }
                  var ht = y.alternate;
                  if (ht !== null) {
                    var Vn = ht.child;
                    if (Vn !== null) {
                      ht.child = null;
                      do {
                        var Kr = Vn.sibling;
                        Vn.sibling = null, Vn = Kr;
                      } while (Vn !== null);
                    }
                  }
                  Pe = y;
                }
              }
              if ((y.subtreeFlags & 2064) !== 0 && V !== null) V.return = y, Pe = V;
              else e: for (; Pe !== null; ) {
                if (y = Pe, (y.flags & 2048) !== 0) switch (y.tag) {
                  case 0:
                  case 11:
                  case 15:
                    as(9, y, y.return);
                }
                var de = y.sibling;
                if (de !== null) {
                  de.return = y.return, Pe = de;
                  break e;
                }
                Pe = y.return;
              }
            }
            var le = n.current;
            for (Pe = le; Pe !== null; ) {
              V = Pe;
              var pe = V.child;
              if ((V.subtreeFlags & 2064) !== 0 && pe !== null) pe.return = V, Pe = pe;
              else e: for (V = le; Pe !== null; ) {
                if (ie = Pe, (ie.flags & 2048) !== 0) try {
                  switch (ie.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Gs(9, ie);
                  }
                } catch (Ue) {
                  Tt(ie, ie.return, Ue);
                }
                if (ie === V) {
                  Pe = null;
                  break e;
                }
                var Fe = ie.sibling;
                if (Fe !== null) {
                  Fe.return = ie.return, Pe = Fe;
                  break e;
                }
                Pe = ie.return;
              }
            }
            if (Xe = c, pn(), Kn && typeof Kn.onPostCommitFiberRoot == "function") try {
              Kn.onPostCommitFiberRoot(gi, n);
            } catch {
            }
            a = !0;
          }
          return a;
        } finally {
          tt = s, zt.transition = r;
        }
      }
      return !1;
    }
    function Aa(n, r, s) {
      r = ns(s, r), r = Ur(n, r, 1), n = ni(n, r, 1), r = Rt(), n !== null && (hr(n, 1, r), Pn(n, r));
    }
    function Tt(n, r, s) {
      if (n.tag === 3) Aa(n, n, s);
      else for (; r !== null; ) {
        if (r.tag === 3) {
          Aa(r, n, s);
          break;
        } else if (r.tag === 1) {
          var a = r.stateNode;
          if (typeof r.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (Fr === null || !Fr.has(a))) {
            n = ns(s, n), n = Cl(r, n, 1), r = ni(r, n, 1), n = Rt(), r !== null && (hr(r, 1, n), Pn(r, n));
            break;
          }
        }
        r = r.return;
      }
    }
    function Sc(n, r, s) {
      var a = n.pingCache;
      a !== null && a.delete(r), r = Rt(), n.pingedLanes |= n.suspendedLanes & s, vt === n && (Ht & s) === s && (Lt === 4 || Lt === 3 && (Ht & 130023424) === Ht && 500 > an() - Ws ? Li(n, 0) : js |= s), Pn(n, r);
    }
    function wc(n, r) {
      r === 0 && ((n.mode & 1) === 0 ? r = 1 : (r = go, go <<= 1, (go & 130023424) === 0 && (go = 4194304)));
      var s = Rt();
      n = Tr(n, r), n !== null && (hr(n, r, s), Pn(n, s));
    }
    function xc(n) {
      var r = n.memoizedState, s = 0;
      r !== null && (s = r.retryLane), wc(n, s);
    }
    function md(n, r) {
      var s = 0;
      switch (n.tag) {
        case 13:
          var a = n.stateNode, c = n.memoizedState;
          c !== null && (s = c.retryLane);
          break;
        case 19:
          a = n.stateNode;
          break;
        default:
          throw Error(f(314));
      }
      a !== null && a.delete(r), wc(n, s);
    }
    var Cc;
    Cc = function(n, r, s) {
      if (n !== null) if (n.memoizedProps !== r.pendingProps || qn.current) $t = !0;
      else {
        if ((n.lanes & s) === 0 && (r.flags & 128) === 0) return $t = !1, Pi(n, r, s);
        $t = (n.flags & 131072) !== 0;
      }
      else $t = !1, Pt && (r.flags & 1048576) !== 0 && bu(r, ji, r.index);
      switch (r.lanes = 0, r.tag) {
        case 2:
          var a = r.type;
          Mo(n, r), n = r.pendingProps;
          var c = Zr(r, wn.current);
          Ts(r, s), c = Eo(null, r, a, n, c, s);
          var y = pl();
          return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, ln(a) ? (y = !0, _s(r)) : y = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, sa(r), c.updater = To, r.stateNode = c, c._reactInternals = r, Gr(r, a, n, s), r = xn(null, r, a, !0, y, s)) : (r.tag = 0, Pt && y && vo(r), cn(null, r, c, s), r = r.child), r;
        case 16:
          a = r.elementType;
          e: {
            switch (Mo(n, r), n = r.pendingProps, c = a._init, a = c(a._payload), r.type = a, c = r.tag = yd(a), n = rr(a, n), c) {
              case 0:
                r = Br(null, r, a, n, s);
                break e;
              case 1:
                r = yn(null, r, a, n, s);
                break e;
              case 11:
                r = kl(null, r, a, n, s);
                break e;
              case 14:
                r = rs(null, r, a, rr(a.type, n), s);
                break e;
            }
            throw Error(f(
              306,
              a,
              ""
            ));
          }
          return r;
        case 0:
          return a = r.type, c = r.pendingProps, c = r.elementType === a ? c : rr(a, c), Br(n, r, a, c, s);
        case 1:
          return a = r.type, c = r.pendingProps, c = r.elementType === a ? c : rr(a, c), yn(n, r, a, c, s);
        case 3:
          e: {
            if (Ei(r), n === null) throw Error(f(387));
            a = r.pendingProps, y = r.memoizedState, c = y.element, ic(n, r), vi(r, a, null, s);
            var V = r.memoizedState;
            if (a = V.element, Ge && y.isDehydrated) if (y = { element: a, isDehydrated: !1, cache: V.cache, pendingSuspenseBoundaries: V.pendingSuspenseBoundaries, transitions: V.transitions }, r.updateQueue.baseState = y, r.memoizedState = y, r.flags & 256) {
              c = ns(Error(f(423)), r), r = is(n, r, a, s, c);
              break e;
            } else if (a !== c) {
              c = ns(Error(f(424)), r), r = is(n, r, a, s, c);
              break e;
            } else for (Ge && (In = sd(r.stateNode.containerInfo), gn = r, Pt = !0, Rr = null, So = !1), s = nc(r, null, a, s), r.child = s; s; ) s.flags = s.flags & -3 | 4096, s = s.sibling;
            else {
              if (Wi(), a === c) {
                r = si(n, r, s);
                break e;
              }
              cn(n, r, a, s);
            }
            r = r.child;
          }
          return r;
        case 5:
          return oa(r), n === null && ea(r), a = r.type, c = r.pendingProps, y = n !== null ? n.memoizedProps : null, V = c.children, me(a, c) ? V = null : y !== null && me(a, y) && (r.flags |= 32), yt(n, r), cn(n, r, V, s), r.child;
        case 6:
          return n === null && ea(r), null;
        case 13:
          return Ca(n, r, s);
        case 4:
          return fl(r, r.stateNode.containerInfo), a = r.pendingProps, n === null ? r.child = Ki(r, null, a, s) : cn(n, r, a, s), r.child;
        case 11:
          return a = r.type, c = r.pendingProps, c = r.elementType === a ? c : rr(a, c), kl(n, r, a, c, s);
        case 7:
          return cn(n, r, r.pendingProps, s), r.child;
        case 8:
          return cn(n, r, r.pendingProps.children, s), r.child;
        case 12:
          return cn(n, r, r.pendingProps.children, s), r.child;
        case 10:
          e: {
            if (a = r.type._context, c = r.pendingProps, y = r.memoizedProps, V = c.value, rc(r, a, V), y !== null) if (kr(y.value, V)) {
              if (y.children === c.children && !qn.current) {
                r = si(n, r, s);
                break e;
              }
            } else for (y = r.child, y !== null && (y.return = r); y !== null; ) {
              var ie = y.dependencies;
              if (ie !== null) {
                V = y.child;
                for (var he = ie.firstContext; he !== null; ) {
                  if (he.context === a) {
                    if (y.tag === 1) {
                      he = ti(-1, s & -s), he.tag = 2;
                      var Ce = y.updateQueue;
                      if (Ce !== null) {
                        Ce = Ce.shared;
                        var Le = Ce.pending;
                        Le === null ? he.next = he : (he.next = Le.next, Le.next = he), Ce.pending = he;
                      }
                    }
                    y.lanes |= s, he = y.alternate, he !== null && (he.lanes |= s), Yi(y.return, s, r), ie.lanes |= s;
                    break;
                  }
                  he = he.next;
                }
              } else if (y.tag === 10) V = y.type === r.type ? null : y.child;
              else if (y.tag === 18) {
                if (V = y.return, V === null) throw Error(f(341));
                V.lanes |= s, ie = V.alternate, ie !== null && (ie.lanes |= s), Yi(V, s, r), V = y.sibling;
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
            cn(n, r, c.children, s), r = r.child;
          }
          return r;
        case 9:
          return c = r.type, a = r.pendingProps.children, Ts(r, s), c = er(c), a = a(c), r.flags |= 1, cn(n, r, a, s), r.child;
        case 14:
          return a = r.type, c = rr(a, r.pendingProps), c = rr(a.type, c), rs(n, r, a, c, s);
        case 15:
          return ii(n, r, r.type, r.pendingProps, s);
        case 17:
          return a = r.type, c = r.pendingProps, c = r.elementType === a ? c : rr(a, c), Mo(n, r), r.tag = 1, ln(a) ? (n = !0, _s(r)) : n = !1, Ts(r, s), dc(r, a, c), Gr(r, a, c, s), xn(null, r, a, !0, n, s);
        case 19:
          return Pl(n, r, s);
        case 22:
          return wt(n, r, s);
      }
      throw Error(f(156, r.tag));
    };
    function Oa(n, r) {
      return zr(n, r);
    }
    function kc(n, r, s, a) {
      this.tag = n, this.key = s, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
    }
    function ur(n, r, s, a) {
      return new kc(n, r, s, a);
    }
    function Qs(n) {
      return n = n.prototype, !(!n || !n.isReactComponent);
    }
    function yd(n) {
      if (typeof n == "function") return Qs(n) ? 1 : 0;
      if (n != null) {
        if (n = n.$$typeof, n === R) return 11;
        if (n === v) return 14;
      }
      return 2;
    }
    function Oi(n, r) {
      var s = n.alternate;
      return s === null ? (s = ur(n.tag, r, n.key, n.mode), s.elementType = n.elementType, s.type = n.type, s.stateNode = n.stateNode, s.alternate = n, n.alternate = s) : (s.pendingProps = r, s.type = n.type, s.flags = 0, s.subtreeFlags = 0, s.deletions = null), s.flags = n.flags & 14680064, s.childLanes = n.childLanes, s.lanes = n.lanes, s.child = n.child, s.memoizedProps = n.memoizedProps, s.memoizedState = n.memoizedState, s.updateQueue = n.updateQueue, r = n.dependencies, s.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, s.sibling = n.sibling, s.index = n.index, s.ref = n.ref, s;
    }
    function Bl(n, r, s, a, c, y) {
      var V = 2;
      if (a = n, typeof n == "function") Qs(n) && (V = 1);
      else if (typeof n == "string") V = 5;
      else e: switch (n) {
        case k:
          return vn(s.children, c, y, r);
        case F:
          V = 8, c |= 8;
          break;
        case E:
          return n = ur(12, s, r, c | 2), n.elementType = E, n.lanes = y, n;
        case O:
          return n = ur(13, s, r, c), n.elementType = O, n.lanes = y, n;
        case H:
          return n = ur(19, s, r, c), n.elementType = H, n.lanes = y, n;
        case T:
          return bs(s, c, y, r);
        default:
          if (typeof n == "object" && n !== null) switch (n.$$typeof) {
            case S:
              V = 10;
              break e;
            case w:
              V = 9;
              break e;
            case R:
              V = 11;
              break e;
            case v:
              V = 14;
              break e;
            case h:
              V = 16, a = null;
              break e;
          }
          throw Error(f(130, n == null ? n : typeof n, ""));
      }
      return r = ur(V, s, r, c), r.elementType = n, r.type = a, r.lanes = y, r;
    }
    function vn(n, r, s, a) {
      return n = ur(7, n, a, r), n.lanes = s, n;
    }
    function bs(n, r, s, a) {
      return n = ur(22, n, a, r), n.elementType = T, n.lanes = s, n.stateNode = { isHidden: !1 }, n;
    }
    function Js(n, r, s) {
      return n = ur(6, n, null, r), n.lanes = s, n;
    }
    function Vl(n, r, s) {
      return r = ur(4, n.children !== null ? n.children : [], n.key, r), r.lanes = s, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
    }
    function Ec(n, r, s, a, c) {
      this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = ge, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = xs(0), this.expirationTimes = xs(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = xs(0), this.identifierPrefix = a, this.onRecoverableError = c, Ge && (this.mutableSourceEagerHydrationData = null);
    }
    function Ia(n, r, s, a, c, y, V, ie, he) {
      return n = new Ec(n, r, s, ie, he), r === 1 ? (r = 1, y === !0 && (r |= 8)) : r = 0, y = ur(3, null, null, r), n.current = y, y.stateNode = n, y.memoizedState = { element: a, isDehydrated: s, cache: null, transitions: null, pendingSuspenseBoundaries: null }, sa(y), n;
    }
    function Hl(n) {
      if (!n) return hi;
      n = n._reactInternals;
      e: {
        if (U(n) !== n || n.tag !== 1) throw Error(f(170));
        var r = n;
        do {
          switch (r.tag) {
            case 3:
              r = r.stateNode.context;
              break e;
            case 1:
              if (ln(r.type)) {
                r = r.stateNode.__reactInternalMemoizedMergedChildContext;
                break e;
              }
          }
          r = r.return;
        } while (r !== null);
        throw Error(f(171));
      }
      if (n.tag === 1) {
        var s = n.type;
        if (ln(s)) return Wu(n, s, r);
      }
      return r;
    }
    function hs(n) {
      var r = n._reactInternals;
      if (r === void 0)
        throw typeof n.render == "function" ? Error(f(188)) : (n = Object.keys(n).join(","), Error(f(268, n)));
      return n = Z(r), n === null ? null : n.stateNode;
    }
    function jl(n, r) {
      if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
        var s = n.retryLane;
        n.retryLane = s !== 0 && s < r ? s : r;
      }
    }
    function Zs(n, r) {
      jl(n, r), (n = n.alternate) && jl(n, r);
    }
    function vd(n) {
      return n = Z(n), n === null ? null : n.stateNode;
    }
    function Pc() {
      return null;
    }
    return _.attemptContinuousHydration = function(n) {
      if (n.tag === 13) {
        var r = Tr(n, 134217728);
        if (r !== null) {
          var s = Rt();
          En(r, n, 134217728, s);
        }
        Zs(n, 134217728);
      }
    }, _.attemptDiscreteHydration = function(n) {
      if (n.tag === 13) {
        var r = Tr(n, 1);
        if (r !== null) {
          var s = Rt();
          En(r, n, 1, s);
        }
        Zs(n, 1);
      }
    }, _.attemptHydrationAtCurrentPriority = function(n) {
      if (n.tag === 13) {
        var r = tn(n), s = Tr(n, r);
        if (s !== null) {
          var a = Rt();
          En(s, n, r, a);
        }
        Zs(n, r);
      }
    }, _.attemptSynchronousHydration = function(n) {
      switch (n.tag) {
        case 3:
          var r = n.stateNode;
          if (r.current.memoizedState.isDehydrated) {
            var s = Ss(r.pendingLanes);
            s !== 0 && (Dr(r, s | 1), Pn(r, an()), (Xe & 6) === 0 && (pt(), pn()));
          }
          break;
        case 13:
          Ta(function() {
            var a = Tr(n, 1);
            if (a !== null) {
              var c = Rt();
              En(a, n, 1, c);
            }
          }), Zs(n, 1);
      }
    }, _.batchedUpdates = function(n, r) {
      var s = Xe;
      Xe |= 1;
      try {
        return n(r);
      } finally {
        Xe = s, Xe === 0 && (pt(), Es && pn());
      }
    }, _.createComponentSelector = function(n) {
      return { $$typeof: oi, value: n };
    }, _.createContainer = function(n, r, s, a, c, y, V) {
      return Ia(n, r, !1, null, s, a, c, y, V);
    }, _.createHasPseudoClassSelector = function(n) {
      return { $$typeof: Un, value: n };
    }, _.createHydrationContainer = function(n, r, s, a, c, y, V, ie, he) {
      return n = Ia(s, a, !0, n, c, y, V, ie, he), n.context = Hl(null), s = n.current, a = Rt(), c = tn(s), y = ti(a, c), y.callback = r ?? null, ni(s, y, c), n.current.lanes = c, hr(n, c, a), Pn(n, a), n;
    }, _.createPortal = function(n, r, s) {
      var a = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return { $$typeof: x, key: a == null ? null : "" + a, children: n, containerInfo: r, implementation: s };
    }, _.createRoleSelector = function(n) {
      return { $$typeof: Hr, value: n };
    }, _.createTestNameSelector = function(n) {
      return { $$typeof: Bs, value: n };
    }, _.createTextSelector = function(n) {
      return { $$typeof: Io, value: n };
    }, _.deferredUpdates = function(n) {
      var r = tt, s = zt.transition;
      try {
        return zt.transition = null, tt = 16, n();
      } finally {
        tt = r, zt.transition = s;
      }
    }, _.discreteUpdates = function(n, r, s, a, c) {
      var y = tt, V = zt.transition;
      try {
        return zt.transition = null, tt = 1, n(r, s, a, c);
      } finally {
        tt = y, zt.transition = V, Xe === 0 && pt();
      }
    }, _.findAllNodes = qr, _.findBoundingRects = function(n, r) {
      if (!kt) throw Error(f(363));
      r = qr(n, r), n = [];
      for (var s = 0; s < r.length; s++) n.push(ut(r[s]));
      for (r = n.length - 1; 0 < r; r--) {
        s = n[r];
        for (var a = s.x, c = a + s.width, y = s.y, V = y + s.height, ie = r - 1; 0 <= ie; ie--) if (r !== ie) {
          var he = n[ie], Ce = he.x, Le = Ce + he.width, Ke = he.y, Ne = Ke + he.height;
          if (a >= Ce && y >= Ke && c <= Le && V <= Ne) {
            n.splice(r, 1);
            break;
          } else if (a !== Ce || s.width !== he.width || Ne < y || Ke > V) {
            if (!(y !== Ke || s.height !== he.height || Le < a || Ce > c)) {
              Ce > a && (he.width += Ce - a, he.x = a), Le < c && (he.width = c - Ce), n.splice(r, 1);
              break;
            }
          } else {
            Ke > y && (he.height += Ke - y, he.y = y), Ne < V && (he.height = V - Ke), n.splice(r, 1);
            break;
          }
        }
      }
      return n;
    }, _.findHostInstance = hs, _.findHostInstanceWithNoPortals = function(n) {
      return n = Y(n), n = n !== null ? re(n) : null, n === null ? null : n.stateNode;
    }, _.findHostInstanceWithWarning = function(n) {
      return hs(n);
    }, _.flushControlled = function(n) {
      var r = Xe;
      Xe |= 1;
      var s = zt.transition, a = tt;
      try {
        zt.transition = null, tt = 1, n();
      } finally {
        tt = a, zt.transition = s, Xe = r, Xe === 0 && (pt(), pn());
      }
    }, _.flushPassiveEffects = ui, _.flushSync = Ta, _.focusWithin = function(n, r) {
      if (!kt) throw Error(f(363));
      for (n = jr(n), r = Wr(n, r), r = Array.from(r), n = 0; n < r.length; ) {
        var s = r[n++];
        if (!Qt(s)) {
          if (s.tag === 5 && jt(s.stateNode)) return !0;
          for (s = s.child; s !== null; ) r.push(s), s = s.sibling;
        }
      }
      return !1;
    }, _.getCurrentUpdatePriority = function() {
      return tt;
    }, _.getFindAllNodesFailureDescription = function(n, r) {
      if (!kt) throw Error(f(363));
      var s = 0, a = [];
      n = [jr(n), 0];
      for (var c = 0; c < n.length; ) {
        var y = n[c++], V = n[c++], ie = r[V];
        if ((y.tag !== 5 || !Qt(y)) && (Do(y, ie) && (a.push(Al(ie)), V++, V > s && (s = V)), V < r.length)) for (y = y.child; y !== null; ) n.push(y, V), y = y.sibling;
      }
      if (s < r.length) {
        for (n = []; s < r.length; s++) n.push(Al(r[s]));
        return `findAllNodes was able to match part of the selector:
  ` + (a.join(" > ") + `

No matching component was found for:
  `) + n.join(" > ");
      }
      return null;
    }, _.getPublicRootInstance = function(n) {
      if (n = n.current, !n.child) return null;
      switch (n.child.tag) {
        case 5:
          return Q(n.child.stateNode);
        default:
          return n.child.stateNode;
      }
    }, _.injectIntoDevTools = function(n) {
      if (n = { bundleType: n.bundleType, version: n.version, rendererPackageName: n.rendererPackageName, rendererConfig: n.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: m.ReactCurrentDispatcher, findHostInstanceByFiber: vd, findFiberByHostInstance: n.findFiberByHostInstance || Pc, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1" }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u") n = !1;
      else {
        var r = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (r.isDisabled || !r.supportsFiber) n = !0;
        else {
          try {
            gi = r.inject(n), Kn = r;
          } catch {
          }
          n = !!r.checkDCE;
        }
      }
      return n;
    }, _.isAlreadyRendering = function() {
      return !1;
    }, _.observeVisibleRects = function(n, r, s, a) {
      if (!kt) throw Error(f(363));
      n = qr(n, r);
      var c = Mn(n, s, a).disconnect;
      return { disconnect: function() {
        c();
      } };
    }, _.registerMutableSourceForHydration = function(n, r) {
      var s = r._getVersion;
      s = s(r._source), n.mutableSourceEagerHydrationData == null ? n.mutableSourceEagerHydrationData = [r, s] : n.mutableSourceEagerHydrationData.push(r, s);
    }, _.runWithPriority = function(n, r) {
      var s = tt;
      try {
        return tt = n, r();
      } finally {
        tt = s;
      }
    }, _.shouldError = function() {
      return null;
    }, _.shouldSuspend = function() {
      return !1;
    }, _.updateContainer = function(n, r, s, a) {
      var c = r.current, y = Rt(), V = tn(c);
      return s = Hl(s), r.context === null ? r.context = s : r.pendingContext = s, r = ti(y, V), r.payload = { element: n }, a = a === void 0 ? null : a, a !== null && (r.callback = a), n = ni(c, r, V), n !== null && (En(n, c, V, y), xo(n, c, V)), V;
    }, _;
  }), rf;
}
var f0;
function mp() {
  return f0 || (f0 = 1, nf.exports = gp()), nf.exports;
}
var yp = mp();
const vp = /* @__PURE__ */ ed(yp);
var sf = { exports: {} }, lo = {};
/**
 * @license React
 * react-reconciler-constants.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var h0;
function _p() {
  return h0 || (h0 = 1, lo.ConcurrentRoot = 1, lo.ContinuousEventPriority = 4, lo.DefaultEventPriority = 16, lo.DiscreteEventPriority = 1, lo.IdleEventPriority = 536870912, lo.LegacyRoot = 0), lo;
}
var p0;
function Sp() {
  return p0 || (p0 = 1, sf.exports = _p()), sf.exports;
}
var V0 = Sp(), wp = Ze();
const g0 = {
  children: !0,
  ref: !0,
  key: !0,
  style: !0,
  forwardedRef: !0,
  unstable_applyCache: !0,
  unstable_applyDrawHitFromCache: !0
};
let m0 = !1, y0 = !1;
const vf = ".react-konva-event", xp = `ReactKonva: You have a Konva node with draggable = true and position defined but no onDragMove or onDragEnd events are handled.
Position of a node will be changed during drag&drop, so you should update state of the react app as well.
Consider to add onDragMove or onDragEnd events.
For more info see: https://github.com/konvajs/react-konva/issues/256
`, Cp = `ReactKonva: You are using "zIndex" attribute for a Konva node.
react-konva may get confused with ordering. Just define correct order of elements in your render function of a component.
For more info see: https://github.com/konvajs/react-konva/issues/194
`, kp = {};
function rd(l, d, _ = kp) {
  if (!m0 && "zIndex" in d && (console.warn(Cp), m0 = !0), !y0 && d.draggable) {
    var L = d.x !== void 0 || d.y !== void 0, N = d.onDragEnd || d.onDragMove;
    L && !N && (console.warn(xp), y0 = !0);
  }
  for (var C in _)
    if (!g0[C]) {
      var f = C.slice(0, 2) === "on", m = _[C] !== d[C];
      if (f && m) {
        var g = C.substr(2).toLowerCase();
        g.substr(0, 7) === "content" && (g = "content" + g.substr(7, 1).toUpperCase() + g.substr(8)), l.off(g, _[C]);
      }
      var x = !d.hasOwnProperty(C);
      x && l.setAttr(C, void 0);
    }
  var k = d._useStrictMode, F = {}, E = !1;
  const S = {};
  for (var C in d)
    if (!g0[C]) {
      var f = C.slice(0, 2) === "on", w = _[C] !== d[C];
      if (f && w) {
        var g = C.substr(2).toLowerCase();
        g.substr(0, 7) === "content" && (g = "content" + g.substr(7, 1).toUpperCase() + g.substr(8)), d[C] && (S[g] = d[C]);
      }
      !f && (d[C] !== _[C] || k && d[C] !== l.getAttr(C)) && (E = !0, F[C] = d[C]);
    }
  E && (l.setAttrs(F), uo(l));
  for (var g in S)
    l.on(g + vf, S[g]);
}
function uo(l) {
  if (!wp.Konva.autoDrawEnabled) {
    var d = l.getLayer() || l.getStage();
    d && d.batchDraw();
  }
}
var of = hf();
const H0 = {}, Ep = {};
Ou.Node.prototype._applyProps = rd;
function Pp(l, d) {
  if (typeof d == "string") {
    console.error(`Do not use plain text as child of Konva.Node. You are using text: ${d}`);
    return;
  }
  l.add(d), uo(l);
}
function Rp(l, d, _) {
  let L = Ou[l];
  L || (console.error(`Konva has no node with the type ${l}. Group will be used instead. If you use minimal version of react-konva, just import required nodes into Konva: "import "konva/lib/shapes/${l}"  If you want to render DOM elements as part of canvas tree take a look into this demo: https://konvajs.github.io/docs/react/DOM_Portal.html`), L = Ou.Group);
  const N = {}, C = {};
  for (var f in d) {
    var m = f.slice(0, 2) === "on";
    m ? C[f] = d[f] : N[f] = d[f];
  }
  const g = new L(N);
  return rd(g, C), g;
}
function Tp(l, d, _) {
  console.error(`Text components are not supported for now in ReactKonva. Your text is: "${l}"`);
}
function Np(l, d, _) {
  return !1;
}
function Fp(l) {
  return l;
}
function Mp() {
  return null;
}
function Lp() {
  return null;
}
function Ap(l, d, _, L) {
  return Ep;
}
function Op() {
}
function Ip(l) {
}
function Dp(l, d) {
  return !1;
}
function zp() {
  return H0;
}
function Gp() {
  return H0;
}
const Up = setTimeout, Bp = clearTimeout, Vp = -1;
function Hp(l, d) {
  return !1;
}
const jp = !1, Wp = !0, qp = !0;
function Kp(l, d) {
  d.parent === l ? d.moveToTop() : l.add(d), uo(l);
}
function Yp(l, d) {
  d.parent === l ? d.moveToTop() : l.add(d), uo(l);
}
function j0(l, d, _) {
  d._remove(), l.add(d), d.setZIndex(_.getZIndex()), uo(l);
}
function Xp(l, d, _) {
  j0(l, d, _);
}
function Qp(l, d) {
  d.destroy(), d.off(vf), uo(l);
}
function bp(l, d) {
  d.destroy(), d.off(vf), uo(l);
}
function Jp(l, d, _) {
  console.error(`Text components are not yet supported in ReactKonva. You text is: "${_}"`);
}
function Zp(l, d, _) {
}
function $p(l, d, _, L, N) {
  rd(l, N, L);
}
function eg(l) {
  l.hide(), uo(l);
}
function tg(l) {
}
function ng(l, d) {
  (d.visible == null || d.visible) && l.show();
}
function rg(l, d) {
}
function ig(l) {
}
function sg() {
}
const og = () => V0.DefaultEventPriority, lg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  appendChild: Kp,
  appendChildToContainer: Yp,
  appendInitialChild: Pp,
  cancelTimeout: Bp,
  clearContainer: ig,
  commitMount: Zp,
  commitTextUpdate: Jp,
  commitUpdate: $p,
  createInstance: Rp,
  createTextInstance: Tp,
  detachDeletedInstance: sg,
  finalizeInitialChildren: Np,
  getChildHostContext: Gp,
  getCurrentEventPriority: og,
  getPublicInstance: Fp,
  getRootHostContext: zp,
  hideInstance: eg,
  hideTextInstance: tg,
  idlePriority: of.unstable_IdlePriority,
  insertBefore: j0,
  insertInContainerBefore: Xp,
  isPrimaryRenderer: jp,
  noTimeout: Vp,
  now: of.unstable_now,
  prepareForCommit: Mp,
  preparePortalMount: Lp,
  prepareUpdate: Ap,
  removeChild: Qp,
  removeChildFromContainer: bp,
  resetAfterCommit: Op,
  resetTextContent: Ip,
  run: of.unstable_runWithPriority,
  scheduleTimeout: Up,
  shouldDeprioritizeSubtree: Dp,
  shouldSetTextContent: Hp,
  supportsMutation: qp,
  unhideInstance: ng,
  unhideTextInstance: rg,
  warnsIfNotActing: Wp
}, Symbol.toStringTag, { value: "Module" }));
var ag = Object.defineProperty, ug = Object.defineProperties, cg = Object.getOwnPropertyDescriptors, v0 = Object.getOwnPropertySymbols, dg = Object.prototype.hasOwnProperty, fg = Object.prototype.propertyIsEnumerable, _0 = (l, d, _) => d in l ? ag(l, d, { enumerable: !0, configurable: !0, writable: !0, value: _ }) : l[d] = _, S0 = (l, d) => {
  for (var _ in d || (d = {}))
    dg.call(d, _) && _0(l, _, d[_]);
  if (v0)
    for (var _ of v0(d))
      fg.call(d, _) && _0(l, _, d[_]);
  return l;
}, hg = (l, d) => ug(l, cg(d)), w0, x0;
typeof window < "u" && ((w0 = window.document) != null && w0.createElement || ((x0 = window.navigator) == null ? void 0 : x0.product) === "ReactNative") ? Oe.useLayoutEffect : Oe.useEffect;
function W0(l, d, _) {
  if (!l)
    return;
  if (_(l) === !0)
    return l;
  let L = l.child;
  for (; L; ) {
    const N = W0(L, d, _);
    if (N)
      return N;
    L = L.sibling;
  }
}
function q0(l) {
  try {
    return Object.defineProperties(l, {
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
    return l;
  }
}
const C0 = console.error;
console.error = function() {
  const l = [...arguments].join("");
  if (l != null && l.startsWith("Warning:") && l.includes("useContext")) {
    console.error = C0;
    return;
  }
  return C0.apply(this, arguments);
};
const _f = q0(Oe.createContext(null));
class K0 extends Oe.Component {
  render() {
    return /* @__PURE__ */ Oe.createElement(_f.Provider, {
      value: this._reactInternals
    }, this.props.children);
  }
}
function pg() {
  const l = Oe.useContext(_f);
  if (l === null)
    throw new Error("its-fine: useFiber must be called within a <FiberProvider />!");
  const d = Oe.useId();
  return Oe.useMemo(() => {
    for (const L of [l, l == null ? void 0 : l.alternate]) {
      if (!L)
        continue;
      const N = W0(L, !1, (C) => {
        let f = C.memoizedState;
        for (; f; ) {
          if (f.memoizedState === d)
            return !0;
          f = f.next;
        }
      });
      if (N)
        return N;
    }
  }, [l, d]);
}
function gg() {
  const l = pg(), [d] = Oe.useState(() => /* @__PURE__ */ new Map());
  d.clear();
  let _ = l;
  for (; _; ) {
    if (_.type && typeof _.type == "object") {
      const N = _.type._context === void 0 && _.type.Provider === _.type ? _.type : _.type._context;
      N && N !== _f && !d.has(N) && d.set(N, Oe.useContext(q0(N)));
    }
    _ = _.return;
  }
  return d;
}
function mg() {
  const l = gg();
  return Oe.useMemo(
    () => Array.from(l.keys()).reduce(
      (d, _) => (L) => /* @__PURE__ */ Oe.createElement(d, null, /* @__PURE__ */ Oe.createElement(_.Provider, hg(S0({}, L), {
        value: l.get(_)
      }))),
      (d) => /* @__PURE__ */ Oe.createElement(K0, S0({}, d))
    ),
    [l]
  );
}
function yg(l) {
  const d = dr.useRef({});
  return dr.useLayoutEffect(() => {
    d.current = l;
  }), dr.useLayoutEffect(() => () => {
    d.current = {};
  }, []), d.current;
}
const vg = (l) => {
  const d = dr.useRef(null), _ = dr.useRef(null), L = dr.useRef(null), N = yg(l), C = mg(), f = (m) => {
    const { forwardedRef: g } = l;
    g && (typeof g == "function" ? g(m) : g.current = m);
  };
  return dr.useLayoutEffect(() => (_.current = new Ou.Stage({
    width: l.width,
    height: l.height,
    container: d.current
  }), f(_.current), L.current = Au.createContainer(_.current, V0.LegacyRoot, !1, null), Au.updateContainer(dr.createElement(C, {}, l.children), L.current), () => {
    Ou.isBrowser && (f(null), Au.updateContainer(null, L.current, null), _.current.destroy());
  }), []), dr.useLayoutEffect(() => {
    f(_.current), rd(_.current, l, N), Au.updateContainer(dr.createElement(C, {}, l.children), L.current, null);
  }), dr.createElement("div", {
    ref: d,
    id: l.id,
    accessKey: l.accessKey,
    className: l.className,
    role: l.role,
    style: l.style,
    tabIndex: l.tabIndex,
    title: l.title
  });
}, k0 = "Layer", Lu = "Group", Ko = "Rect", Sf = "Circle", Yo = "Line", _g = "Image", Sg = "Transformer", Au = vp(lg);
Au.injectIntoDevTools({
  // @ts-ignore
  findHostInstanceByFiber: () => null,
  bundleType: 0,
  version: dr.version,
  rendererPackageName: "react-konva"
});
const wg = dr.forwardRef((l, d) => dr.createElement(K0, {}, dr.createElement(vg, { ...l, forwardedRef: d })));
var lf, E0;
function xg() {
  if (E0) return lf;
  E0 = 1;
  var l = Iu();
  return lf = function(_, L, N) {
    const C = l.useRef("loading"), f = l.useRef(), [m, g] = l.useState(0), x = l.useRef(), k = l.useRef(), F = l.useRef();
    return (x.current !== _ || k.current !== L || F.current !== N) && (C.current = "loading", f.current = void 0, x.current = _, k.current = L, F.current = N), l.useLayoutEffect(
      function() {
        if (!_) return;
        var E = document.createElement("img");
        function S() {
          E.decode().catch(() => {
          }).finally(() => {
            C.current = "loaded", f.current = E, g(Math.random());
          });
        }
        function w() {
          C.current = "failed", f.current = void 0, g(Math.random());
        }
        return E.addEventListener("load", S), E.addEventListener("error", w), L && (E.crossOrigin = L), N && (E.referrerPolicy = N), E.src = _, function() {
          E.removeEventListener("load", S), E.removeEventListener("error", w);
        };
      },
      [_, L, N]
    ), [f.current, C.current];
  }, lf;
}
var Cg = xg();
const kg = /* @__PURE__ */ ed(Cg);
function wf(l = "") {
  return { version: "konva-1", background: l, objects: [] };
}
function Fu(l) {
  return JSON.parse(JSON.stringify(l));
}
function ao() {
  return `obj_${Math.random().toString(36).slice(2, 10)}_${Date.now().toString(36)}`;
}
function af(l) {
  return !l || !Array.isArray(l.objects) ? wf((l == null ? void 0 : l.background) ?? "") : {
    version: l.version || "konva-1",
    background: l.background ?? "",
    objects: l.objects.filter(Boolean),
    meta: l.meta ? { ...l.meta } : void 0
  };
}
const Eg = {
  allow_select: !0,
  allow_drag: !0,
  allow_rotate: !0,
  allow_scale: !0,
  allow_delete: !0,
  respect_object_locks: !0
}, Pg = [
  "top-left",
  "top-right",
  "bottom-left",
  "bottom-right",
  "middle-left",
  "middle-right",
  "top-center",
  "bottom-center"
];
function Rg(l) {
  return l.objects.some(
    (d) => d.locked === !0 || d.groupId !== void 0 || d.type === "group" || d.draggable === !1 || d.selectable === !1 || d.scalable === !1 || d.rotatable === !1 || d.deletable === !1 || d.listening === !1 || d.dragConstraint !== void 0
  );
}
function Tg(l, d) {
  const _ = {
    ...Eg,
    ...l ?? {}
  };
  return !l && !Rg(d) ? { ..._, respect_object_locks: !1 } : _;
}
function Ng(l, d) {
  return l === "transform" || l === "rect_crop" && d.type === "crop";
}
function Fg(l, d) {
  return l === "transform" || l === "rect_crop" && d.type === "crop";
}
function $c(l, d, _) {
  if (l.type === "group")
    return {
      selectable: !1,
      draggable: !1,
      scalable: !1,
      rotatable: !1,
      deletable: !1,
      listening: !1
    };
  const L = _.respect_object_locks && l.locked === !0;
  let N = !L && l.selectable !== !1 && l.listening !== !1 && _.allow_select && Ng(d, l);
  l.draggable === !1 && l.selectable !== !0 && (N = !1);
  const C = N && l.draggable !== !1 && _.allow_drag && Fg(d, l), f = N && l.scalable !== !1 && _.allow_scale, m = N && l.rotatable !== !1 && _.allow_rotate, g = N && l.deletable !== !1 && _.allow_delete, x = l.listening !== !1 && !L;
  return {
    selectable: N,
    draggable: C,
    scalable: f,
    rotatable: m,
    deletable: g,
    listening: x
  };
}
function Mg(l) {
  const d = Math.hypot(l.x, l.y);
  return d < 1e-9 ? { x: 1, y: 0 } : { x: l.x / d, y: l.y / d };
}
function Lg(l, d, _, L, N) {
  const C = Mg(_), f = l.x - d.x, m = l.y - d.y;
  let g = f * C.x + m * C.y;
  return L != null && (g = Math.max(L, g)), N != null && (g = Math.min(N, g)), {
    x: d.x + g * C.x,
    y: d.y + g * C.y
  };
}
function Y0(l, d) {
  return l.type === "group" || l.dragConstraint ? null : l.groupId ? l.groupId : null;
}
function X0(l) {
  const d = /* @__PURE__ */ new Map();
  for (const L of l.objects)
    L.type === "group" && d.set(L.id, L);
  const _ = /* @__PURE__ */ new Map();
  for (const L of l.objects) {
    const N = Y0(L);
    if (!N) continue;
    const C = _.get(N) ?? [];
    C.push(L), _.set(N, C);
  }
  return Array.from(_.entries()).map(([L, N]) => ({
    groupId: L,
    descriptor: d.get(L),
    members: N
  }));
}
function Ag(l) {
  const d = /* @__PURE__ */ new Set();
  for (const _ of X0(l))
    for (const L of _.members)
      d.add(L.id);
  return l.objects.filter(
    (_) => _.type !== "group" && !d.has(_.id)
  );
}
function P0(l, d, _) {
  const L = l.descriptor, N = {
    id: l.groupId,
    type: "rect",
    locked: L == null ? void 0 : L.locked,
    draggable: L == null ? void 0 : L.draggable,
    selectable: L == null ? void 0 : L.selectable,
    listening: L == null ? void 0 : L.listening,
    scalable: (L == null ? void 0 : L.scalable) ?? !1,
    rotatable: L == null ? void 0 : L.rotatable,
    deletable: L == null ? void 0 : L.deletable
  };
  return $c(N, d, _);
}
function Q0(l) {
  return `group-wrap-${l}`;
}
function Yc(l) {
  return l.startsWith("group-wrap-") ? l.slice(11) : null;
}
function Og(l, d) {
  const _ = Y0(l);
  return _ ? Q0(_) : l.id;
}
function Ig(l, d) {
  return {
    ...l,
    x: d.x(),
    y: d.y(),
    rotation: d.rotation(),
    width: Math.max(1, (l.width ?? 0) * d.scaleX()),
    height: Math.max(1, (l.height ?? 0) * d.scaleY()),
    scaleX: 1,
    scaleY: 1
  };
}
function Dg(l, d) {
  return {
    ...l,
    x: d.x(),
    y: d.y(),
    rotation: d.rotation(),
    radius: Math.max(1, (l.radius ?? 1) * Math.max(d.scaleX(), d.scaleY())),
    scaleX: 1,
    scaleY: 1
  };
}
function zg(l, d, _, L, N) {
  const C = l.x ?? 0, f = l.y ?? 0, m = l.points ?? [], g = Math.cos(L * Math.PI / 180), x = Math.sin(L * Math.PI / 180), k = [];
  for (let F = 0; F < m.length; F += 2) {
    const E = (m[F] ?? 0) + C, S = (m[F + 1] ?? 0) + f, w = E * N, R = S * N, O = w * g - R * x + d, H = w * x + R * g + _;
    k.push(O, H);
  }
  return {
    ...l,
    x: 0,
    y: 0,
    points: k,
    rotation: 0,
    scaleX: 1,
    scaleY: 1
  };
}
function Gg(l, d, _, L = 0, N = 1) {
  if (l.type === "rect" || l.type === "crop") {
    const C = Math.max(1, (l.width ?? 0) * N), f = Math.max(1, (l.height ?? 0) * N);
    return {
      ...l,
      x: d,
      y: _,
      width: C,
      height: f,
      rotation: (l.rotation ?? 0) + L,
      scaleX: 1,
      scaleY: 1
    };
  }
  return l.type === "circle" || l.type === "point" ? {
    ...l,
    x: d,
    y: _,
    rotation: (l.rotation ?? 0) + L,
    radius: Math.max(1, (l.radius ?? 1) * N),
    scaleX: 1,
    scaleY: 1
  } : l.type === "line" || l.type === "polygon" || l.type === "freedraw" || l.type === "spline" ? zg(l, d, _, L, N) : { ...l, x: d, y: _, rotation: (l.rotation ?? 0) + L };
}
function Ug(l, d, _) {
  return l.objects.map((L) => _.get(L.id) ?? L);
}
function Bg(l) {
  let d = l;
  for (; d; ) {
    if (d.getClassName() === "Transformer") return !0;
    d = d.getParent();
  }
  return !1;
}
const df = 0.5, Vg = 2;
function Hg(l) {
  return Math.floor(l.length / 2);
}
function jg(l) {
  const d = [];
  for (let _ = 0; _ + 1 < l.length; _ += 2)
    d.push([l[_] ?? 0, l[_ + 1] ?? 0]);
  return d;
}
function Wg(l) {
  return Hg(l) >= Vg;
}
function ff(l) {
  return (l == null ? void 0 : l.kind) === "polygon" || (l == null ? void 0 : l.kind) === "spline";
}
function R0(l) {
  var d;
  return ff(l) && (((d = l.points) == null ? void 0 : d.length) ?? 0) > 0;
}
function T0(l) {
  return l.points.length <= 2 ? null : { ...l, points: l.points.slice(0, -2) };
}
function qg(l, d) {
  return d.type !== "spline" ? !1 : l || d.showControlPoints === !0;
}
function Kg(l) {
  return `${l}__control-points`;
}
function N0(l) {
  return l.type === "freedraw" ? 0.5 : l.type === "spline" ? l.tension ?? df : 0;
}
const b0 = ({
  points: l,
  offsetX: d = 0,
  offsetY: _ = 0,
  stroke: L,
  radius: N,
  groupId: C
}) => {
  const f = jg(l);
  return /* @__PURE__ */ Ve.jsx(Lu, { id: C, listening: !1, children: f.map(([m, g], x) => /* @__PURE__ */ Ve.jsx(
    Sf,
    {
      x: d + m,
      y: _ + g,
      radius: N,
      stroke: L,
      strokeWidth: 2,
      fill: "white",
      listening: !1
    },
    x
  )) });
}, J0 = "rgba(0,0,0,0.001)";
function Yg(l) {
  return !l || l === "transparent" ? J0 : l;
}
function Mu(l, d) {
  return {
    scale: 1,
    x: l / 2,
    y: d / 2,
    rotation: 0
  };
}
const F0 = ({
  obj: l,
  interaction: d,
  splineShowControlPoints: _,
  splineControlPointRadius: L,
  onSelect: N,
  onDragEnd: C,
  onTransformEnd: f
}) => {
  const m = Oe.useRef(null);
  if (l.type === "group") return null;
  const g = {
    id: l.id,
    draggable: d.draggable,
    listening: d.listening,
    rotation: l.rotation ?? 0,
    scaleX: l.scaleX ?? 1,
    scaleY: l.scaleY ?? 1,
    onClick: d.selectable ? N : void 0,
    onTap: d.selectable ? N : void 0,
    onDragStart: (x) => {
      d.draggable && (m.current = { x: x.target.x(), y: x.target.y() });
    },
    onDragMove: (x) => {
      if (!d.draggable || !m.current) return;
      const k = l.dragConstraint;
      if (!k || k.type !== "axis" || !k.axis) return;
      const F = Lg(
        { x: x.target.x(), y: x.target.y() },
        m.current,
        k.axis,
        k.min,
        k.max
      );
      x.target.position(F);
    },
    onDragEnd: (x) => {
      m.current = null, C(x.target);
    },
    onTransformEnd: (x) => f(x.target)
  };
  if (l.type === "rect" || l.type === "crop")
    return /* @__PURE__ */ Ve.jsx(
      Ko,
      {
        ...g,
        x: l.x ?? 0,
        y: l.y ?? 0,
        width: l.width ?? 0,
        height: l.height ?? 0,
        stroke: l.stroke,
        strokeWidth: l.strokeWidth,
        fill: l.type === "crop" ? Yg(l.fill) : l.fill,
        dash: l.type === "crop" ? [8, 4] : void 0
      }
    );
  if (l.type === "circle" || l.type === "point")
    return /* @__PURE__ */ Ve.jsx(
      Sf,
      {
        ...g,
        x: l.x ?? 0,
        y: l.y ?? 0,
        radius: l.radius ?? 3,
        stroke: l.stroke,
        strokeWidth: l.strokeWidth,
        fill: l.fill
      }
    );
  if (l.type === "spline") {
    const x = qg(_, l);
    return /* @__PURE__ */ Ve.jsxs(Ve.Fragment, { children: [
      /* @__PURE__ */ Ve.jsx(
        Yo,
        {
          ...g,
          x: l.x ?? 0,
          y: l.y ?? 0,
          points: l.points ?? [],
          stroke: l.stroke,
          strokeWidth: l.strokeWidth,
          tension: N0(l),
          lineCap: "round",
          lineJoin: "round"
        }
      ),
      x && /* @__PURE__ */ Ve.jsx(
        b0,
        {
          points: l.points ?? [],
          offsetX: l.x ?? 0,
          offsetY: l.y ?? 0,
          stroke: l.stroke ?? "#000",
          radius: L,
          groupId: Kg(l.id)
        }
      )
    ] });
  }
  return l.type === "line" || l.type === "freedraw" ? /* @__PURE__ */ Ve.jsx(
    Yo,
    {
      ...g,
      x: l.x ?? 0,
      y: l.y ?? 0,
      points: l.points ?? [],
      stroke: l.stroke,
      strokeWidth: l.strokeWidth,
      tension: N0(l),
      lineCap: "round",
      lineJoin: "round"
    }
  ) : l.type === "polygon" ? /* @__PURE__ */ Ve.jsx(
    Yo,
    {
      ...g,
      x: l.x ?? 0,
      y: l.y ?? 0,
      points: l.points ?? [],
      stroke: l.stroke,
      strokeWidth: l.strokeWidth,
      fill: l.fill,
      closed: !0
    }
  ) : null;
};
function Xg(l, d) {
  if ((d == null ? void 0 : d.originX) != null && (d == null ? void 0 : d.originY) != null)
    return { x: d.originX, y: d.originY };
  let _ = 1 / 0, L = 1 / 0, N = -1 / 0, C = -1 / 0;
  for (const f of l)
    if (f.type === "rect" || f.type === "crop") {
      const m = f.x ?? 0, g = f.y ?? 0;
      _ = Math.min(_, m), L = Math.min(L, g), N = Math.max(N, m + (f.width ?? 0)), C = Math.max(C, g + (f.height ?? 0));
    } else if (f.type === "circle" || f.type === "point") {
      const m = f.x ?? 0, g = f.y ?? 0, x = f.radius ?? 0;
      _ = Math.min(_, m - x), L = Math.min(L, g - x), N = Math.max(N, m + x), C = Math.max(C, g + x);
    } else if (f.points && f.points.length >= 2) {
      const m = f.x ?? 0, g = f.y ?? 0;
      for (let x = 0; x < f.points.length; x += 2) {
        const k = m + (f.points[x] ?? 0), F = g + (f.points[x + 1] ?? 0);
        _ = Math.min(_, k), L = Math.min(L, F), N = Math.max(N, k), C = Math.max(C, F);
      }
    }
  return Number.isFinite(_) ? { x: (_ + N) / 2, y: (L + C) / 2 } : { x: 0, y: 0 };
}
function M0(l, d, _, L) {
  const C = L.getAbsoluteTransform().copy().invert(), f = /* @__PURE__ */ new Map();
  for (const m of d.members) {
    const g = _.findOne(`#${m.id}`);
    if (!g) continue;
    const k = g.getAbsoluteTransform().copy().multiply(C).decompose();
    f.set(
      m.id,
      Gg(
        m,
        k.x,
        k.y,
        k.rotation,
        Math.max(k.scaleX, k.scaleY)
      )
    );
  }
  return _.position({ x: 0, y: 0 }), _.rotation(0), _.scale({ x: 1, y: 1 }), _.offset({ x: 0, y: 0 }), Ug(l, d.groupId, f);
}
function Qg(l, d) {
  if (l.type === "rect" || l.type === "crop") {
    const _ = Ig(l, d);
    return d.scaleX(1), d.scaleY(1), _;
  }
  if (l.type === "circle" || l.type === "point") {
    const _ = Dg(l, d);
    return d.scaleX(1), d.scaleY(1), _;
  }
  return {
    ...l,
    x: d.x(),
    y: d.y(),
    rotation: d.rotation(),
    scaleX: d.scaleX(),
    scaleY: d.scaleY()
  };
}
const bg = 0.25, Jg = 8, Xc = 1.15, L0 = 15, Qc = "rgba(0, 0, 0, 0.45)";
function Zg(l, d, _, L) {
  return {
    x: Math.min(l, l + _),
    y: Math.min(d, d + L),
    width: Math.abs(_),
    height: Math.abs(L)
  };
}
const $g = ({
  bounds: l,
  canvasWidth: d,
  canvasHeight: _
}) => {
  const { x: L, y: N, width: C, height: f } = l;
  if (C < 1 || f < 1) return null;
  const m = L + C, g = N + f;
  return /* @__PURE__ */ Ve.jsxs(Ve.Fragment, { children: [
    /* @__PURE__ */ Ve.jsx(
      Ko,
      {
        x: 0,
        y: 0,
        width: d,
        height: N,
        fill: Qc,
        listening: !1
      }
    ),
    /* @__PURE__ */ Ve.jsx(
      Ko,
      {
        x: 0,
        y: g,
        width: d,
        height: Math.max(0, _ - g),
        fill: Qc,
        listening: !1
      }
    ),
    /* @__PURE__ */ Ve.jsx(
      Ko,
      {
        x: 0,
        y: N,
        width: L,
        height: f,
        fill: Qc,
        listening: !1
      }
    ),
    /* @__PURE__ */ Ve.jsx(
      Ko,
      {
        x: m,
        y: N,
        width: Math.max(0, d - m),
        height: f,
        fill: Qc,
        listening: !1
      }
    )
  ] });
};
function A0(l) {
  if (!l) return null;
  const d = l.getPointerPosition();
  if (!d) return null;
  const _ = l.getAbsoluteTransform().copy().invert(), L = l.findOne("#viewport-content");
  return L ? L.getAbsoluteTransform().copy().invert().point(d) : _.point(d);
}
const e2 = ({
  fillColor: l,
  strokeWidth: d,
  strokeColor: _,
  backgroundColor: L,
  backgroundImageURL: N,
  realtimeUpdateStreamlit: C,
  canvasHeight: f,
  canvasWidth: m,
  drawingMode: g,
  initialDrawing: x,
  displayToolbar: k,
  displayRadius: F,
  enableViewportControls: E,
  transformOptions: S,
  splineShowControlPoints: w,
  splineControlPointRadius: R,
  setStateValue: O
}) => {
  const H = Oe.useRef(null), v = Oe.useRef(null), h = Oe.useRef(null), T = Oe.useRef(null), I = Oe.useRef(null), j = Oe.useRef(null), J = Oe.useRef(
    `${L}|${N ?? ""}`
  ), z = Oe.useRef(!1), U = Oe.useRef(null), [G, Y] = Oe.useState(
    () => af(x)
  ), [Z, ne] = Oe.useState([
    af(x)
  ]), [re, ee] = Oe.useState(0), [Q, P] = Oe.useState(null), [D, W] = Oe.useState(null), [B, M] = Oe.useState(
    () => Mu(m, f)
  ), [X] = kg(N ?? "", "anonymous"), b = Oe.useMemo(
    () => Tg(S, G),
    [S, G]
  ), ce = Oe.useMemo(() => X0(G), [G.objects]), me = Oe.useMemo(() => Ag(G), [G.objects]), oe = Oe.useMemo(() => {
    if (!D) return null;
    const ve = Yc(D);
    if (ve) {
      const Te = ce.find((Ee) => Ee.groupId === ve);
      return Te ? P0(Te, g, b) : null;
    }
    const xe = G.objects.find((Te) => Te.id === D);
    return xe ? $c(xe, g, b) : null;
  }, [
    g,
    ce,
    b,
    G.objects,
    D
  ]), q = Oe.useMemo(
    () => JSON.stringify((x == null ? void 0 : x.objects) ?? []),
    [x]
  );
  Oe.useEffect(() => {
    M(Mu(m, f));
  }, [m, f]), Oe.useEffect(() => {
    const ve = af(x), xe = `${L}|${N ?? ""}`, Te = J.current !== xe;
    J.current = xe, Y((Ee) => {
      if (!(Te || ve.objects.length > 0 || Ee.objects.length === 0))
        return { ...Ee, background: L };
      const be = {
        ...ve,
        background: L
      };
      return ne([Fu(be)]), ee(0), W(null), P(null), M(Mu(m, f)), be;
    });
  }, [
    q,
    L,
    N,
    x,
    m,
    f
  ]), Oe.useEffect(() => {
    var be;
    const ve = I.current, xe = H.current;
    if (!ve || !xe) return;
    const Te = (mt, Wn, Or) => {
      var bt;
      ve.rotateEnabled(Wn), ve.resizeEnabled(Or), ve.enabledAnchors(
        Or ? [...Pg] : []
      ), j.current = mt, ve.nodes([mt]), (bt = ve.getLayer()) == null || bt.batchDraw();
    }, Ee = G.objects.find((mt) => mt.type === "crop");
    if (g === "rect_crop" && Ee && !Q) {
      const mt = xe.findOne(`#${Ee.id}`);
      mt && Te(mt, !1, !0);
      return;
    }
    if (g !== "transform" || !D || !oe) {
      ve.nodes([]), j.current = null, (be = ve.getLayer()) == null || be.batchDraw();
      return;
    }
    const Qe = xe.findOne(`#${D}`);
    Qe && Te(
      Qe,
      oe.rotatable,
      oe.scalable
    );
  }, [
    D,
    oe,
    g,
    G.objects,
    Q
  ]);
  const se = Oe.useCallback(
    (ve) => {
      ne((xe) => [...xe.slice(0, re + 1), Fu(ve)]), ee((xe) => xe + 1);
    },
    [re]
  ), ge = Oe.useCallback(
    (ve) => {
      const xe = v.current, Te = h.current;
      !xe || !Te || requestAnimationFrame(() => {
        const Ee = {
          x: Te.x(),
          y: Te.y(),
          scaleX: Te.scaleX(),
          scaleY: Te.scaleY(),
          rotation: Te.rotation()
        }, Qe = Mu(m, f);
        Te.position({ x: Qe.x, y: Qe.y }), Te.scale({ x: Qe.scale, y: Qe.scale }), Te.rotation(Qe.rotation);
        const be = Te.findOne("#crop-chrome"), mt = [];
        be && (mt.push(be), be.visible(!1));
        for (const bt of G.objects) {
          if (bt.type !== "crop") continue;
          const An = Te.findOne(`#${bt.id}`);
          An && (mt.push(An), An.visible(!1));
        }
        for (const bt of G.objects) {
          if (bt.type !== "spline") continue;
          const An = Te.findOne(`#${bt.id}__control-points`);
          An && (mt.push(An), An.visible(!1));
        }
        const Wn = Te.findOne("#draft-spline-control-points");
        Wn && (mt.push(Wn), Wn.visible(!1)), xe.batchDraw();
        const Or = xe.toDataURL({
          pixelRatio: 1,
          mimeType: "image/png",
          x: 0,
          y: 0,
          width: m,
          height: f
        });
        Te.position({ x: Ee.x, y: Ee.y }), Te.scale({ x: Ee.scaleX, y: Ee.scaleY }), Te.rotation(Ee.rotation);
        for (const bt of mt)
          bt.visible(!0);
        xe.batchDraw(), O("image_data_url", Or), O("json_data", ve);
      });
    },
    [f, m, G.objects, O]
  ), ye = Oe.useCallback(
    (ve, xe) => {
      const Te = Fu(ve);
      Y(Te), se(Te), ((xe == null ? void 0 : xe.emit) ?? C) && ge(Te);
    },
    [ge, se, C]
  ), Re = Oe.useCallback(() => ff(Q) ? (P(T0(Q)), !0) : !1, [Q]), Be = Oe.useCallback(() => {
    if (Re() || re <= 0) return;
    const ve = re - 1, xe = Fu(Z[ve]);
    ee(ve), Y(xe), W(null), C && ge(xe);
  }, [ge, Z, re, C, Re]), Ge = Oe.useCallback(() => {
    if (re >= Z.length - 1) return;
    const ve = re + 1, xe = Fu(Z[ve]);
    ee(ve), Y(xe), W(null), C && ge(xe);
  }, [ge, Z, re, C]), rt = Oe.useCallback(() => {
    const ve = wf(L);
    ye(ve, { emit: !0 }), W(null), P(null);
  }, [L, ye]), We = Oe.useCallback(() => {
    ge(G);
  }, [ge, G]), Dt = Oe.useCallback(() => {
    M(Mu(m, f));
  }, [f, m]);
  Oe.useEffect(() => {
    const ve = (xe) => {
      const Te = xe.target;
      if (!(Te.tagName === "INPUT" || Te.tagName === "TEXTAREA")) {
        if (xe.key === "Backspace" && R0(Q)) {
          xe.preventDefault(), ff(Q) && P(T0(Q));
          return;
        }
        xe.key === "z" && (xe.ctrlKey || xe.metaKey) && !xe.shiftKey && (xe.preventDefault(), Be());
      }
    };
    return window.addEventListener("keydown", ve), () => window.removeEventListener("keydown", ve);
  }, [Q, Be]);
  const $e = Oe.useCallback(
    (ve, xe) => {
      M((Te) => {
        const Ee = Math.min(
          Jg,
          Math.max(bg, Te.scale * ve)
        );
        if (!xe)
          return { ...Te, scale: Ee };
        const Qe = h.current;
        if (!Qe)
          return { ...Te, scale: Ee };
        const mt = Qe.getAbsoluteTransform().copy().invert().point(xe), Wn = m / 2, Or = f / 2, bt = Math.cos(Te.rotation * Math.PI / 180), An = Math.sin(Te.rotation * Math.PI / 180), Qr = mt.x - Wn, br = mt.y - Or, fo = Te.x + Te.scale * (bt * Qr - An * br), zi = Te.y + Te.scale * (An * Qr + bt * br), ho = fo - Ee * (bt * Qr - An * br), Gi = zi - Ee * (An * Qr + bt * br);
        return { ...Te, scale: Ee, x: ho, y: Gi };
      });
    },
    [f, m]
  ), gt = Oe.useCallback((ve) => {
    M((xe) => ({
      ...xe,
      rotation: xe.rotation + ve
    }));
  }, []), Ut = Oe.useCallback(
    (ve) => {
      ye(
        {
          ...G,
          background: L,
          objects: [...G.objects, ve]
        },
        { emit: !0 }
      );
    },
    [L, ye, G]
  ), kt = Oe.useCallback(
    (ve) => {
      const xe = G.objects.filter((Te) => Te.type !== "crop");
      ye({
        ...G,
        background: L,
        objects: [...xe, { ...ve, type: "crop" }]
      }), W(ve.id);
    },
    [L, ye, G]
  ), _t = Oe.useMemo(
    () => G.objects.find((ve) => ve.type === "crop") ?? null,
    [G.objects]
  ), ut = Oe.useMemo(() => {
    if ((Q == null ? void 0 : Q.kind) === "rect" && g === "rect_crop") {
      const ve = Zg(
        Q.x,
        Q.y,
        Q.width,
        Q.height
      );
      return ve.width > 0 && ve.height > 0 ? ve : null;
    }
    return _t ? {
      x: _t.x ?? 0,
      y: _t.y ?? 0,
      width: _t.width ?? 0,
      height: _t.height ?? 0
    } : null;
  }, [_t, Q, g]), Sn = Oe.useCallback(
    (ve) => {
      if (!E) return;
      ve.evt.preventDefault();
      const xe = H.current;
      if (!xe) return;
      const Te = xe.getPointerPosition();
      if (!Te) return;
      const Ee = ve.evt.deltaY > 0 ? 1 / Xc : Xc;
      $e(Ee, Te);
    },
    [E, $e]
  ), Qt = Oe.useCallback(
    (ve) => {
      const xe = H.current;
      if (E && (g === "pan" || ve.evt.button === 1 || ve.evt.altKey || ve.evt.buttons === 4)) {
        z.current = !0, U.current = { x: ve.evt.clientX, y: ve.evt.clientY };
        return;
      }
      const Ee = A0(xe);
      if (Ee) {
        if (g === "transform") {
          (ve.target === xe || ve.target.id() === "viewport-content") && W(null);
          return;
        }
        if (g !== "pan") {
          if (g === "point") {
            Ut({
              id: ao(),
              type: "point",
              x: Ee.x,
              y: Ee.y,
              radius: F,
              fill: _,
              stroke: _,
              strokeWidth: 1
            });
            return;
          }
          if (g === "polygon") {
            P((Qe) => (Qe == null ? void 0 : Qe.kind) === "polygon" ? { kind: "polygon", points: [...Qe.points, Ee.x, Ee.y] } : { kind: "polygon", points: [Ee.x, Ee.y] });
            return;
          }
          if (g === "spline") {
            P((Qe) => (Qe == null ? void 0 : Qe.kind) === "spline" ? { kind: "spline", points: [...Qe.points, Ee.x, Ee.y] } : { kind: "spline", points: [Ee.x, Ee.y] });
            return;
          }
          if (g === "freedraw") {
            P({ kind: "freedraw", points: [Ee.x, Ee.y] });
            return;
          }
          if (g === "line") {
            P({ kind: "line", x1: Ee.x, y1: Ee.y, x2: Ee.x, y2: Ee.y });
            return;
          }
          if (g === "rect") {
            P({ kind: "rect", x: Ee.x, y: Ee.y, width: 0, height: 0 });
            return;
          }
          if (g === "rect_crop") {
            if (Bg(ve.target))
              return;
            const Qe = G.objects.find((be) => be.type === "crop");
            if (Qe && ve.target.id() === Qe.id) {
              W(Qe.id);
              return;
            }
            W(null), P({ kind: "rect", x: Ee.x, y: Ee.y, width: 0, height: 0 });
            return;
          }
          g === "circle" && P({ kind: "circle", x: Ee.x, y: Ee.y, radius: 0 });
        }
      }
    },
    [
      Ut,
      F,
      g,
      E,
      G.objects,
      _
    ]
  ), fr = Oe.useCallback(
    (ve) => {
      if (z.current && U.current) {
        const Te = ve.evt.clientX - U.current.x, Ee = ve.evt.clientY - U.current.y;
        U.current = { x: ve.evt.clientX, y: ve.evt.clientY }, M((Qe) => ({
          ...Qe,
          x: Qe.x + Te,
          y: Qe.y + Ee
        }));
        return;
      }
      const xe = A0(H.current);
      if (!(!xe || !Q)) {
        if (Q.kind === "freedraw") {
          P({ kind: "freedraw", points: [...Q.points, xe.x, xe.y] });
          return;
        }
        if (Q.kind === "line") {
          P({ ...Q, x2: xe.x, y2: xe.y });
          return;
        }
        if (Q.kind === "rect") {
          P({
            ...Q,
            width: xe.x - Q.x,
            height: xe.y - Q.y
          });
          return;
        }
        if (Q.kind === "circle") {
          const Te = xe.x - Q.x, Ee = xe.y - Q.y;
          P({ ...Q, radius: Math.sqrt(Te * Te + Ee * Ee) });
        }
      }
    },
    [Q]
  ), jt = Oe.useCallback(() => {
    if (Q) {
      if (Q.kind === "freedraw" && Q.points.length >= 4)
        Ut({
          id: ao(),
          type: "freedraw",
          points: Q.points,
          stroke: _,
          strokeWidth: d,
          fill: ""
        });
      else if (Q.kind === "line")
        Ut({
          id: ao(),
          type: "line",
          points: [Q.x1, Q.y1, Q.x2, Q.y2],
          stroke: _,
          strokeWidth: d
        });
      else if (Q.kind === "rect") {
        const ve = Math.min(Q.x, Q.x + Q.width), xe = Math.min(Q.y, Q.y + Q.height), Te = Math.abs(Q.width), Ee = Math.abs(Q.height);
        Te > 1 && Ee > 1 && (g === "rect_crop" ? kt({
          id: (_t == null ? void 0 : _t.id) ?? ao(),
          type: "crop",
          x: ve,
          y: xe,
          width: Te,
          height: Ee,
          stroke: _,
          strokeWidth: d,
          fill: J0
        }) : Ut({
          id: ao(),
          type: "rect",
          x: ve,
          y: xe,
          width: Te,
          height: Ee,
          stroke: _,
          strokeWidth: d,
          fill: l
        }));
      } else Q.kind === "circle" && Q.radius > 1 && Ut({
        id: ao(),
        type: "circle",
        x: Q.x,
        y: Q.y,
        radius: Q.radius,
        stroke: _,
        strokeWidth: d,
        fill: l
      });
      Q.kind !== "polygon" && Q.kind !== "spline" && P(null);
    }
  }, [
    Ut,
    _t,
    Q,
    g,
    l,
    kt,
    _,
    d
  ]), Mn = Oe.useCallback(() => {
    if (z.current) {
      z.current = !1, U.current = null;
      return;
    }
    g === "polygon" || g === "spline" || g === "transform" || g === "pan" || jt();
  }, [g, jt]), on = Oe.useCallback(
    (ve) => {
      if (ve.evt.preventDefault(), g === "polygon" && (Q == null ? void 0 : Q.kind) === "polygon") {
        if (Q.points.length < 6) {
          P(null);
          return;
        }
        Ut({
          id: ao(),
          type: "polygon",
          points: Q.points,
          stroke: _,
          strokeWidth: d,
          fill: l
        }), P(null);
        return;
      }
      if (g === "spline" && (Q == null ? void 0 : Q.kind) === "spline") {
        if (!Wg(Q.points)) {
          P(null);
          return;
        }
        Ut({
          id: ao(),
          type: "spline",
          points: Q.points,
          tension: df,
          stroke: _,
          strokeWidth: d,
          fill: "",
          showControlPoints: w
        }), P(null);
      }
    },
    [Ut, Q, g, l, w, _, d]
  ), Ln = Oe.useCallback(() => {
    if (g === "polygon" && (Q == null ? void 0 : Q.kind) === "polygon") {
      Q.points.length <= 2 ? P(null) : P({
        kind: "polygon",
        points: Q.points.slice(0, -2)
      });
      return;
    }
    if (g === "spline" && (Q == null ? void 0 : Q.kind) === "spline") {
      Q.points.length <= 2 ? P(null) : P({
        kind: "spline",
        points: Q.points.slice(0, -2)
      });
      return;
    }
    if (g === "transform" && D) {
      if (!(oe != null && oe.deletable)) return;
      const ve = Yc(D);
      if (ve) {
        const xe = ce.find((Ee) => Ee.groupId === ve);
        if (!xe) return;
        const Te = new Set(xe.members.map((Ee) => Ee.id));
        ye({
          ...G,
          objects: G.objects.filter(
            (Ee) => Ee.id !== ve && !Te.has(Ee.id)
          )
        });
      } else
        ye({
          ...G,
          objects: G.objects.filter((xe) => xe.id !== D)
        });
      W(null);
      return;
    }
    g === "rect_crop" && _t && (ye({
      ...G,
      objects: G.objects.filter((ve) => ve.type !== "crop")
    }), W(null));
  }, [
    ye,
    _t,
    Q,
    g,
    ce,
    G,
    D,
    oe
  ]), At = Oe.useCallback(
    (ve) => {
      g !== "transform" && g !== "rect_crop" || !$c(ve, g, b).selectable || W(Og(ve));
    },
    [g, b, G]
  ), Ot = Oe.useCallback(
    (ve, xe) => {
      const Te = Yc(ve), Ee = h.current;
      if (Te && Ee) {
        const be = ce.find((Wn) => Wn.groupId === Te);
        if (!be) return;
        const mt = M0(
          G,
          be,
          xe,
          Ee
        );
        ye({ ...G, objects: mt });
        return;
      }
      const Qe = G.objects.map((be) => be.id !== ve ? be : Qg(be, xe));
      ye({ ...G, objects: Qe });
    },
    [ye, ce, G]
  ), Lr = Oe.useCallback(
    (ve, xe) => {
      const Te = Yc(ve), Ee = h.current;
      if (Te && Ee) {
        const be = ce.find((Wn) => Wn.groupId === Te);
        if (!be) return;
        const mt = M0(
          G,
          be,
          xe,
          Ee
        );
        ye({ ...G, objects: mt });
        return;
      }
      const Qe = G.objects.map(
        (be) => be.id === ve ? { ...be, x: xe.x(), y: xe.y() } : be
      );
      ye({ ...G, objects: Qe });
    },
    [ye, ce, G]
  ), Di = {
    background: L || "transparent",
    border: "1px solid var(--st-gray-color, #ddd)",
    display: "block",
    cursor: g === "pan" || z.current ? "grab" : "crosshair"
  }, Ar = {
    id: "viewport-content",
    x: B.x,
    y: B.y,
    scaleX: B.scale,
    scaleY: B.scale,
    rotation: B.rotation,
    offsetX: m / 2,
    offsetY: f / 2
  }, co = Math.round(B.scale * 100);
  return /* @__PURE__ */ Ve.jsxs(
    "div",
    {
      style: { fontFamily: "var(--st-font, sans-serif)", width: m },
      children: [
        k && /* @__PURE__ */ Ve.jsxs(
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
              /* @__PURE__ */ Ve.jsx(
                "button",
                {
                  type: "button",
                  onClick: Be,
                  disabled: re <= 0 && !R0(Q),
                  children: "Undo"
                }
              ),
              /* @__PURE__ */ Ve.jsx(
                "button",
                {
                  type: "button",
                  onClick: Ge,
                  disabled: re >= Z.length - 1,
                  children: "Redo"
                }
              ),
              /* @__PURE__ */ Ve.jsx("button", { type: "button", onClick: rt, children: "Clear" }),
              !C && /* @__PURE__ */ Ve.jsx("button", { type: "button", onClick: We, children: "Send to Streamlit" }),
              E && /* @__PURE__ */ Ve.jsxs(Ve.Fragment, { children: [
                /* @__PURE__ */ Ve.jsx("button", { type: "button", onClick: () => $e(Xc), children: "Zoom +" }),
                /* @__PURE__ */ Ve.jsx("button", { type: "button", onClick: () => $e(1 / Xc), children: "Zoom −" }),
                /* @__PURE__ */ Ve.jsx("button", { type: "button", onClick: () => gt(-L0), children: "Tilt ↶" }),
                /* @__PURE__ */ Ve.jsx("button", { type: "button", onClick: () => gt(L0), children: "Tilt ↷" }),
                /* @__PURE__ */ Ve.jsx("button", { type: "button", onClick: Dt, children: "Reset view" }),
                /* @__PURE__ */ Ve.jsxs("span", { style: { fontSize: 12, opacity: 0.75 }, children: [
                  co,
                  "% · ",
                  Math.round(B.rotation),
                  "°"
                ] })
              ] }),
              /* @__PURE__ */ Ve.jsxs("span", { style: { marginLeft: "auto", fontSize: 12, opacity: 0.7 }, children: [
                "mode: ",
                g
              ] })
            ]
          }
        ),
        /* @__PURE__ */ Ve.jsxs(
          wg,
          {
            width: m,
            height: f,
            ref: H,
            style: Di,
            onMouseDown: Qt,
            onMousemove: fr,
            onMouseup: Mn,
            onMouseLeave: Mn,
            onContextMenu: on,
            onDblClick: Ln,
            onWheel: Sn,
            children: [
              /* @__PURE__ */ Ve.jsx(k0, { listening: !1, children: /* @__PURE__ */ Ve.jsx(Lu, { ref: T, ...Ar, id: "viewport-bg", children: X && /* @__PURE__ */ Ve.jsx(
                _g,
                {
                  image: X,
                  width: m,
                  height: f,
                  listening: !1
                }
              ) }) }),
              /* @__PURE__ */ Ve.jsx(k0, { ref: v, children: /* @__PURE__ */ Ve.jsxs(Lu, { ref: h, ...Ar, children: [
                !X && !!L && /* @__PURE__ */ Ve.jsx(
                  Ko,
                  {
                    x: 0,
                    y: 0,
                    width: m,
                    height: f,
                    fill: L,
                    listening: !1
                  }
                ),
                ut && (g === "rect_crop" || _t) && /* @__PURE__ */ Ve.jsx(Lu, { id: "crop-chrome", listening: !1, children: /* @__PURE__ */ Ve.jsx(
                  $g,
                  {
                    bounds: ut,
                    canvasWidth: m,
                    canvasHeight: f
                  }
                ) }),
                me.map((ve) => /* @__PURE__ */ Ve.jsx(
                  F0,
                  {
                    obj: ve,
                    interaction: $c(
                      ve,
                      g,
                      b
                    ),
                    splineShowControlPoints: w,
                    splineControlPointRadius: R,
                    onSelect: () => At(ve),
                    onDragEnd: (xe) => Lr(ve.id, xe),
                    onTransformEnd: (xe) => Ot(ve.id, xe)
                  },
                  ve.id
                )),
                ce.map((ve) => {
                  const xe = P0(
                    ve,
                    g,
                    b
                  ), Te = Xg(ve.members, ve.descriptor), Ee = Q0(ve.groupId), Qe = {
                    selectable: !0,
                    draggable: !1,
                    scalable: !1,
                    rotatable: !1,
                    deletable: !1,
                    listening: !0
                  };
                  return /* @__PURE__ */ Ve.jsx(
                    Lu,
                    {
                      id: Ee,
                      x: Te.x,
                      y: Te.y,
                      offsetX: Te.x,
                      offsetY: Te.y,
                      draggable: xe.draggable,
                      listening: xe.listening || xe.selectable,
                      onClick: () => {
                        xe.selectable && W(Ee);
                      },
                      onTap: () => {
                        xe.selectable && W(Ee);
                      },
                      onDragEnd: (be) => Lr(Ee, be.target),
                      onTransformEnd: (be) => Ot(Ee, be.target),
                      children: ve.members.map((be) => /* @__PURE__ */ Ve.jsx(
                        F0,
                        {
                          obj: be,
                          interaction: Qe,
                          splineShowControlPoints: w,
                          splineControlPointRadius: R,
                          onSelect: () => At(be),
                          onDragEnd: () => {
                          },
                          onTransformEnd: () => {
                          }
                        },
                        be.id
                      ))
                    },
                    ve.groupId
                  );
                }),
                (Q == null ? void 0 : Q.kind) === "freedraw" && /* @__PURE__ */ Ve.jsx(
                  Yo,
                  {
                    points: Q.points,
                    stroke: _,
                    strokeWidth: d,
                    tension: 0.5,
                    lineCap: "round",
                    lineJoin: "round",
                    listening: !1
                  }
                ),
                (Q == null ? void 0 : Q.kind) === "line" && /* @__PURE__ */ Ve.jsx(
                  Yo,
                  {
                    points: [Q.x1, Q.y1, Q.x2, Q.y2],
                    stroke: _,
                    strokeWidth: d,
                    listening: !1
                  }
                ),
                (Q == null ? void 0 : Q.kind) === "rect" && /* @__PURE__ */ Ve.jsx(
                  Ko,
                  {
                    x: Math.min(Q.x, Q.x + Q.width),
                    y: Math.min(Q.y, Q.y + Q.height),
                    width: Math.abs(Q.width),
                    height: Math.abs(Q.height),
                    stroke: _,
                    strokeWidth: d,
                    fill: g === "rect_crop" ? "transparent" : l,
                    dash: g === "rect_crop" ? [8, 4] : void 0,
                    listening: !1
                  }
                ),
                (Q == null ? void 0 : Q.kind) === "circle" && /* @__PURE__ */ Ve.jsx(
                  Sf,
                  {
                    x: Q.x,
                    y: Q.y,
                    radius: Q.radius,
                    stroke: _,
                    strokeWidth: d,
                    fill: l,
                    listening: !1
                  }
                ),
                (Q == null ? void 0 : Q.kind) === "polygon" && Q.points.length >= 2 && /* @__PURE__ */ Ve.jsx(
                  Yo,
                  {
                    points: Q.points,
                    stroke: _,
                    strokeWidth: d,
                    fill: l,
                    closed: !1,
                    listening: !1
                  }
                ),
                (Q == null ? void 0 : Q.kind) === "spline" && /* @__PURE__ */ Ve.jsxs(Ve.Fragment, { children: [
                  Q.points.length >= 4 && /* @__PURE__ */ Ve.jsx(
                    Yo,
                    {
                      points: Q.points,
                      stroke: _,
                      strokeWidth: d,
                      tension: df,
                      lineCap: "round",
                      lineJoin: "round",
                      listening: !1
                    }
                  ),
                  w && Q.points.length >= 2 && /* @__PURE__ */ Ve.jsx(
                    b0,
                    {
                      points: Q.points,
                      stroke: _,
                      radius: R,
                      groupId: "draft-spline-control-points"
                    }
                  )
                ] }),
                (g === "transform" || g === "rect_crop") && /* @__PURE__ */ Ve.jsx(Sg, { ref: I })
              ] }) })
            ]
          }
        )
      ]
    }
  );
};
function O0(l) {
  return {
    fillColor: (l == null ? void 0 : l.fillColor) ?? "#eee",
    strokeWidth: (l == null ? void 0 : l.strokeWidth) ?? 20,
    strokeColor: (l == null ? void 0 : l.strokeColor) ?? "black",
    backgroundColor: (l == null ? void 0 : l.backgroundColor) ?? "",
    backgroundImageURL: (l == null ? void 0 : l.backgroundImageURL) ?? null,
    realtimeUpdateStreamlit: (l == null ? void 0 : l.realtimeUpdateStreamlit) ?? !0,
    canvasHeight: (l == null ? void 0 : l.canvasHeight) ?? 400,
    canvasWidth: (l == null ? void 0 : l.canvasWidth) ?? 600,
    drawingMode: (l == null ? void 0 : l.drawingMode) ?? "freedraw",
    initialDrawing: (l == null ? void 0 : l.initialDrawing) ?? wf(),
    displayToolbar: (l == null ? void 0 : l.displayToolbar) ?? !0,
    displayRadius: (l == null ? void 0 : l.displayRadius) ?? 3,
    enableViewportControls: (l == null ? void 0 : l.enableViewportControls) ?? !0,
    transformOptions: (l == null ? void 0 : l.transformOptions) ?? {},
    splineShowControlPoints: (l == null ? void 0 : l.splineShowControlPoints) ?? !1,
    splineControlPointRadius: (l == null ? void 0 : l.splineControlPointRadius) ?? 5
  };
}
const bc = /* @__PURE__ */ new WeakMap();
function t2(l, d, _) {
  let L = O0(d), N = {
    image_data_url: null,
    json_data: null
  };
  const C = (m, g) => {
    m === "image_data_url" ? N = {
      ...N,
      image_data_url: typeof g == "string" ? g : null
    } : N = {
      ...N,
      json_data: g ?? null
    }, _ == null || _(N);
  }, f = () => {
    let m = bc.get(l);
    m || (m = R1.createRoot(l), bc.set(l, m)), m.render(
      /* @__PURE__ */ Ve.jsx(Oe.StrictMode, { children: /* @__PURE__ */ Ve.jsx(e2, { ...L, setStateValue: C }) })
    );
  };
  return f(), {
    update(m) {
      L = O0({ ...L, ...m }), f();
    },
    destroy() {
      const m = bc.get(l);
      m && (m.unmount(), bc.delete(l)), l instanceof HTMLElement && l.replaceChildren();
    }
  };
}
const Jc = /* @__PURE__ */ new WeakMap(), y2 = (l) => {
  const { data: d, parentElement: _, setStateValue: L } = l, N = _.querySelector(".react-root");
  if (!N)
    throw new Error("Unexpected: React root element not found");
  let C = Jc.get(_);
  if (C)
    C.setStateValue = L, C.controller.update(d);
  else {
    const f = {
      setStateValue: L,
      controller: null
    };
    f.controller = t2(N, d, (m) => {
      f.setStateValue("image_data_url", m.image_data_url), f.setStateValue("json_data", m.json_data);
    }), Jc.set(_, f), C = f;
  }
  return () => {
    const f = Jc.get(_);
    f && (f.controller.destroy(), Jc.delete(_));
  };
};
export {
  y2 as default
};
