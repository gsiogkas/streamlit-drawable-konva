var $f = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function id(l) {
  return l && l.__esModule && Object.prototype.hasOwnProperty.call(l, "default") ? l.default : l;
}
var jd = { exports: {} }, Ka = {}, Wd = { exports: {} }, it = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var eh;
function k1() {
  if (eh) return it;
  eh = 1;
  var l = Symbol.for("react.element"), d = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), A = Symbol.for("react.strict_mode"), F = Symbol.for("react.profiler"), C = Symbol.for("react.provider"), f = Symbol.for("react.context"), g = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), x = Symbol.for("react.memo"), k = Symbol.for("react.lazy"), M = Symbol.iterator;
  function E(L) {
    return L === null || typeof L != "object" ? null : (L = M && L[M] || L["@@iterator"], typeof L == "function" ? L : null);
  }
  var S = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, w = Object.assign, P = {};
  function O(L, K, b) {
    this.props = L, this.context = K, this.refs = P, this.updater = b || S;
  }
  O.prototype.isReactComponent = {}, O.prototype.setState = function(L, K) {
    if (typeof L != "object" && typeof L != "function" && L != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, L, K, "setState");
  }, O.prototype.forceUpdate = function(L) {
    this.updater.enqueueForceUpdate(this, L, "forceUpdate");
  };
  function j() {
  }
  j.prototype = O.prototype;
  function _(L, K, b) {
    this.props = L, this.context = K, this.refs = P, this.updater = b || S;
  }
  var h = _.prototype = new j();
  h.constructor = _, w(h, O.prototype), h.isPureReactComponent = !0;
  var R = Array.isArray, D = Object.prototype.hasOwnProperty, W = { current: null }, J = { key: !0, ref: !0, __self: !0, __source: !0 };
  function G(L, K, b) {
    var de, ge = {}, se = null, q = null;
    if (K != null) for (de in K.ref !== void 0 && (q = K.ref), K.key !== void 0 && (se = "" + K.key), K) D.call(K, de) && !J.hasOwnProperty(de) && (ge[de] = K[de]);
    var re = arguments.length - 2;
    if (re === 1) ge.children = b;
    else if (1 < re) {
      for (var ae = Array(re), Ce = 0; Ce < re; Ce++) ae[Ce] = arguments[Ce + 2];
      ge.children = ae;
    }
    if (L && L.defaultProps) for (de in re = L.defaultProps, re) ge[de] === void 0 && (ge[de] = re[de]);
    return { $$typeof: l, type: L, key: se, ref: q, props: ge, _owner: W.current };
  }
  function B(L, K) {
    return { $$typeof: l, type: L.type, key: K, ref: L.ref, props: L.props, _owner: L._owner };
  }
  function H(L) {
    return typeof L == "object" && L !== null && L.$$typeof === l;
  }
  function X(L) {
    var K = { "=": "=0", ":": "=2" };
    return "$" + L.replace(/[=:]/g, function(b) {
      return K[b];
    });
  }
  var Z = /\/+/g;
  function Q(L, K) {
    return typeof L == "object" && L !== null && L.key != null ? X("" + L.key) : K.toString(36);
  }
  function ie(L, K, b, de, ge) {
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
          case l:
          case d:
            q = !0;
        }
    }
    if (q) return q = L, ge = ge(q), L = de === "" ? "." + Q(q, 0) : de, R(ge) ? (b = "", L != null && (b = L.replace(Z, "$&/") + "/"), ie(ge, K, b, "", function(Ce) {
      return Ce;
    })) : ge != null && (H(ge) && (ge = B(ge, b + (!ge.key || q && q.key === ge.key ? "" : ("" + ge.key).replace(Z, "$&/") + "/") + L)), K.push(ge)), 1;
    if (q = 0, de = de === "" ? "." : de + ":", R(L)) for (var re = 0; re < L.length; re++) {
      se = L[re];
      var ae = de + Q(se, re);
      q += ie(se, K, b, ae, ge);
    }
    else if (ae = E(L), typeof ae == "function") for (L = ae.call(L), re = 0; !(se = L.next()).done; ) se = se.value, ae = de + Q(se, re++), q += ie(se, K, b, ae, ge);
    else if (se === "object") throw K = String(L), Error("Objects are not valid as a React child (found: " + (K === "[object Object]" ? "object with keys {" + Object.keys(L).join(", ") + "}" : K) + "). If you meant to render a collection of children, use an array instead.");
    return q;
  }
  function ee(L, K, b) {
    if (L == null) return L;
    var de = [], ge = 0;
    return ie(L, de, "", "", function(se) {
      return K.call(b, se, ge++);
    }), de;
  }
  function me(L) {
    if (L._status === -1) {
      var K = L._result;
      K = K(), K.then(function(b) {
        (L._status === 0 || L._status === -1) && (L._status = 1, L._result = b);
      }, function(b) {
        (L._status === 0 || L._status === -1) && (L._status = 2, L._result = b);
      }), L._status === -1 && (L._status = 0, L._result = K);
    }
    if (L._status === 1) return L._result.default;
    throw L._result;
  }
  var T = { current: null }, z = { transition: null }, N = { ReactCurrentDispatcher: T, ReactCurrentBatchConfig: z, ReactCurrentOwner: W };
  function U() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return it.Children = { map: ee, forEach: function(L, K, b) {
    ee(L, function() {
      K.apply(this, arguments);
    }, b);
  }, count: function(L) {
    var K = 0;
    return ee(L, function() {
      K++;
    }), K;
  }, toArray: function(L) {
    return ee(L, function(K) {
      return K;
    }) || [];
  }, only: function(L) {
    if (!H(L)) throw Error("React.Children.only expected to receive a single React element child.");
    return L;
  } }, it.Component = O, it.Fragment = v, it.Profiler = F, it.PureComponent = _, it.StrictMode = A, it.Suspense = m, it.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = N, it.act = U, it.cloneElement = function(L, K, b) {
    if (L == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + L + ".");
    var de = w({}, L.props), ge = L.key, se = L.ref, q = L._owner;
    if (K != null) {
      if (K.ref !== void 0 && (se = K.ref, q = W.current), K.key !== void 0 && (ge = "" + K.key), L.type && L.type.defaultProps) var re = L.type.defaultProps;
      for (ae in K) D.call(K, ae) && !J.hasOwnProperty(ae) && (de[ae] = K[ae] === void 0 && re !== void 0 ? re[ae] : K[ae]);
    }
    var ae = arguments.length - 2;
    if (ae === 1) de.children = b;
    else if (1 < ae) {
      re = Array(ae);
      for (var Ce = 0; Ce < ae; Ce++) re[Ce] = arguments[Ce + 2];
      de.children = re;
    }
    return { $$typeof: l, type: L.type, key: ge, ref: se, props: de, _owner: q };
  }, it.createContext = function(L) {
    return L = { $$typeof: f, _currentValue: L, _currentValue2: L, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, L.Provider = { $$typeof: C, _context: L }, L.Consumer = L;
  }, it.createElement = G, it.createFactory = function(L) {
    var K = G.bind(null, L);
    return K.type = L, K;
  }, it.createRef = function() {
    return { current: null };
  }, it.forwardRef = function(L) {
    return { $$typeof: g, render: L };
  }, it.isValidElement = H, it.lazy = function(L) {
    return { $$typeof: k, _payload: { _status: -1, _result: L }, _init: me };
  }, it.memo = function(L, K) {
    return { $$typeof: x, type: L, compare: K === void 0 ? null : K };
  }, it.startTransition = function(L) {
    var K = z.transition;
    z.transition = {};
    try {
      L();
    } finally {
      z.transition = K;
    }
  }, it.unstable_act = U, it.useCallback = function(L, K) {
    return T.current.useCallback(L, K);
  }, it.useContext = function(L) {
    return T.current.useContext(L);
  }, it.useDebugValue = function() {
  }, it.useDeferredValue = function(L) {
    return T.current.useDeferredValue(L);
  }, it.useEffect = function(L, K) {
    return T.current.useEffect(L, K);
  }, it.useId = function() {
    return T.current.useId();
  }, it.useImperativeHandle = function(L, K, b) {
    return T.current.useImperativeHandle(L, K, b);
  }, it.useInsertionEffect = function(L, K) {
    return T.current.useInsertionEffect(L, K);
  }, it.useLayoutEffect = function(L, K) {
    return T.current.useLayoutEffect(L, K);
  }, it.useMemo = function(L, K) {
    return T.current.useMemo(L, K);
  }, it.useReducer = function(L, K, b) {
    return T.current.useReducer(L, K, b);
  }, it.useRef = function(L) {
    return T.current.useRef(L);
  }, it.useState = function(L) {
    return T.current.useState(L);
  }, it.useSyncExternalStore = function(L, K, b) {
    return T.current.useSyncExternalStore(L, K, b);
  }, it.useTransition = function() {
    return T.current.useTransition();
  }, it.version = "18.3.1", it;
}
var th;
function Bu() {
  return th || (th = 1, Wd.exports = k1()), Wd.exports;
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
var nh;
function E1() {
  if (nh) return Ka;
  nh = 1;
  var l = Bu(), d = Symbol.for("react.element"), v = Symbol.for("react.fragment"), A = Object.prototype.hasOwnProperty, F = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, C = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(g, m, x) {
    var k, M = {}, E = null, S = null;
    x !== void 0 && (E = "" + x), m.key !== void 0 && (E = "" + m.key), m.ref !== void 0 && (S = m.ref);
    for (k in m) A.call(m, k) && !C.hasOwnProperty(k) && (M[k] = m[k]);
    if (g && g.defaultProps) for (k in m = g.defaultProps, m) M[k] === void 0 && (M[k] = m[k]);
    return { $$typeof: d, type: g, key: E, ref: S, props: M, _owner: F.current };
  }
  return Ka.Fragment = v, Ka.jsx = f, Ka.jsxs = f, Ka;
}
var rh;
function P1() {
  return rh || (rh = 1, jd.exports = E1()), jd.exports;
}
var Be = P1(), Le = Bu();
const fr = /* @__PURE__ */ id(Le);
var Qc = {}, qd = { exports: {} }, xr = {}, Kd = { exports: {} }, Yd = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ih;
function R1() {
  return ih || (ih = 1, (function(l) {
    function d(z, N) {
      var U = z.length;
      z.push(N);
      e: for (; 0 < U; ) {
        var L = U - 1 >>> 1, K = z[L];
        if (0 < F(K, N)) z[L] = N, z[U] = K, U = L;
        else break e;
      }
    }
    function v(z) {
      return z.length === 0 ? null : z[0];
    }
    function A(z) {
      if (z.length === 0) return null;
      var N = z[0], U = z.pop();
      if (U !== N) {
        z[0] = U;
        e: for (var L = 0, K = z.length, b = K >>> 1; L < b; ) {
          var de = 2 * (L + 1) - 1, ge = z[de], se = de + 1, q = z[se];
          if (0 > F(ge, U)) se < K && 0 > F(q, ge) ? (z[L] = q, z[se] = U, L = se) : (z[L] = ge, z[de] = U, L = de);
          else if (se < K && 0 > F(q, U)) z[L] = q, z[se] = U, L = se;
          else break e;
        }
      }
      return N;
    }
    function F(z, N) {
      var U = z.sortIndex - N.sortIndex;
      return U !== 0 ? U : z.id - N.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var C = performance;
      l.unstable_now = function() {
        return C.now();
      };
    } else {
      var f = Date, g = f.now();
      l.unstable_now = function() {
        return f.now() - g;
      };
    }
    var m = [], x = [], k = 1, M = null, E = 3, S = !1, w = !1, P = !1, O = typeof setTimeout == "function" ? setTimeout : null, j = typeof clearTimeout == "function" ? clearTimeout : null, _ = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function h(z) {
      for (var N = v(x); N !== null; ) {
        if (N.callback === null) A(x);
        else if (N.startTime <= z) A(x), N.sortIndex = N.expirationTime, d(m, N);
        else break;
        N = v(x);
      }
    }
    function R(z) {
      if (P = !1, h(z), !w) if (v(m) !== null) w = !0, me(D);
      else {
        var N = v(x);
        N !== null && T(R, N.startTime - z);
      }
    }
    function D(z, N) {
      w = !1, P && (P = !1, j(G), G = -1), S = !0;
      var U = E;
      try {
        for (h(N), M = v(m); M !== null && (!(M.expirationTime > N) || z && !X()); ) {
          var L = M.callback;
          if (typeof L == "function") {
            M.callback = null, E = M.priorityLevel;
            var K = L(M.expirationTime <= N);
            N = l.unstable_now(), typeof K == "function" ? M.callback = K : M === v(m) && A(m), h(N);
          } else A(m);
          M = v(m);
        }
        if (M !== null) var b = !0;
        else {
          var de = v(x);
          de !== null && T(R, de.startTime - N), b = !1;
        }
        return b;
      } finally {
        M = null, E = U, S = !1;
      }
    }
    var W = !1, J = null, G = -1, B = 5, H = -1;
    function X() {
      return !(l.unstable_now() - H < B);
    }
    function Z() {
      if (J !== null) {
        var z = l.unstable_now();
        H = z;
        var N = !0;
        try {
          N = J(!0, z);
        } finally {
          N ? Q() : (W = !1, J = null);
        }
      } else W = !1;
    }
    var Q;
    if (typeof _ == "function") Q = function() {
      _(Z);
    };
    else if (typeof MessageChannel < "u") {
      var ie = new MessageChannel(), ee = ie.port2;
      ie.port1.onmessage = Z, Q = function() {
        ee.postMessage(null);
      };
    } else Q = function() {
      O(Z, 0);
    };
    function me(z) {
      J = z, W || (W = !0, Q());
    }
    function T(z, N) {
      G = O(function() {
        z(l.unstable_now());
      }, N);
    }
    l.unstable_IdlePriority = 5, l.unstable_ImmediatePriority = 1, l.unstable_LowPriority = 4, l.unstable_NormalPriority = 3, l.unstable_Profiling = null, l.unstable_UserBlockingPriority = 2, l.unstable_cancelCallback = function(z) {
      z.callback = null;
    }, l.unstable_continueExecution = function() {
      w || S || (w = !0, me(D));
    }, l.unstable_forceFrameRate = function(z) {
      0 > z || 125 < z ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : B = 0 < z ? Math.floor(1e3 / z) : 5;
    }, l.unstable_getCurrentPriorityLevel = function() {
      return E;
    }, l.unstable_getFirstCallbackNode = function() {
      return v(m);
    }, l.unstable_next = function(z) {
      switch (E) {
        case 1:
        case 2:
        case 3:
          var N = 3;
          break;
        default:
          N = E;
      }
      var U = E;
      E = N;
      try {
        return z();
      } finally {
        E = U;
      }
    }, l.unstable_pauseExecution = function() {
    }, l.unstable_requestPaint = function() {
    }, l.unstable_runWithPriority = function(z, N) {
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
      var U = E;
      E = z;
      try {
        return N();
      } finally {
        E = U;
      }
    }, l.unstable_scheduleCallback = function(z, N, U) {
      var L = l.unstable_now();
      switch (typeof U == "object" && U !== null ? (U = U.delay, U = typeof U == "number" && 0 < U ? L + U : L) : U = L, z) {
        case 1:
          var K = -1;
          break;
        case 2:
          K = 250;
          break;
        case 5:
          K = 1073741823;
          break;
        case 4:
          K = 1e4;
          break;
        default:
          K = 5e3;
      }
      return K = U + K, z = { id: k++, callback: N, priorityLevel: z, startTime: U, expirationTime: K, sortIndex: -1 }, U > L ? (z.sortIndex = U, d(x, z), v(m) === null && z === v(x) && (P ? (j(G), G = -1) : P = !0, T(R, U - L))) : (z.sortIndex = K, d(m, z), w || S || (w = !0, me(D))), z;
    }, l.unstable_shouldYield = X, l.unstable_wrapCallback = function(z) {
      var N = E;
      return function() {
        var U = E;
        E = N;
        try {
          return z.apply(this, arguments);
        } finally {
          E = U;
        }
      };
    };
  })(Yd)), Yd;
}
var oh;
function gf() {
  return oh || (oh = 1, Kd.exports = R1()), Kd.exports;
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
var sh;
function T1() {
  if (sh) return xr;
  sh = 1;
  var l = Bu(), d = gf();
  function v(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, i = 1; i < arguments.length; i++) t += "&args[]=" + encodeURIComponent(arguments[i]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var A = /* @__PURE__ */ new Set(), F = {};
  function C(e, t) {
    f(e, t), f(e + "Capture", t);
  }
  function f(e, t) {
    for (F[e] = t, e = 0; e < t.length; e++) A.add(t[e]);
  }
  var g = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), m = Object.prototype.hasOwnProperty, x = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, k = {}, M = {};
  function E(e) {
    return m.call(M, e) ? !0 : m.call(k, e) ? !1 : x.test(e) ? M[e] = !0 : (k[e] = !0, !1);
  }
  function S(e, t, i, s) {
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
  function w(e, t, i, s) {
    if (t === null || typeof t > "u" || S(e, t, i, s)) return !0;
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
  function P(e, t, i, s, u, p, I) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = s, this.attributeNamespace = u, this.mustUseProperty = i, this.propertyName = e, this.type = t, this.sanitizeURL = p, this.removeEmptyString = I;
  }
  var O = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    O[e] = new P(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    O[t] = new P(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    O[e] = new P(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    O[e] = new P(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    O[e] = new P(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    O[e] = new P(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    O[e] = new P(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    O[e] = new P(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    O[e] = new P(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var j = /[\-:]([a-z])/g;
  function _(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      j,
      _
    );
    O[t] = new P(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(j, _);
    O[t] = new P(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(j, _);
    O[t] = new P(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    O[e] = new P(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), O.xlinkHref = new P("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    O[e] = new P(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function h(e, t, i, s) {
    var u = O.hasOwnProperty(t) ? O[t] : null;
    (u !== null ? u.type !== 0 : s || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (w(t, i, u, s) && (i = null), s || u === null ? E(t) && (i === null ? e.removeAttribute(t) : e.setAttribute(t, "" + i)) : u.mustUseProperty ? e[u.propertyName] = i === null ? u.type === 3 ? !1 : "" : i : (t = u.attributeName, s = u.attributeNamespace, i === null ? e.removeAttribute(t) : (u = u.type, i = u === 3 || u === 4 && i === !0 ? "" : "" + i, s ? e.setAttributeNS(s, t, i) : e.setAttribute(t, i))));
  }
  var R = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, D = Symbol.for("react.element"), W = Symbol.for("react.portal"), J = Symbol.for("react.fragment"), G = Symbol.for("react.strict_mode"), B = Symbol.for("react.profiler"), H = Symbol.for("react.provider"), X = Symbol.for("react.context"), Z = Symbol.for("react.forward_ref"), Q = Symbol.for("react.suspense"), ie = Symbol.for("react.suspense_list"), ee = Symbol.for("react.memo"), me = Symbol.for("react.lazy"), T = Symbol.for("react.offscreen"), z = Symbol.iterator;
  function N(e) {
    return e === null || typeof e != "object" ? null : (e = z && e[z] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var U = Object.assign, L;
  function K(e) {
    if (L === void 0) try {
      throw Error();
    } catch (i) {
      var t = i.stack.trim().match(/\n( *(at )?)/);
      L = t && t[1] || "";
    }
    return `
` + L + e;
  }
  var b = !1;
  function de(e, t) {
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
          var s = fe;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (fe) {
          s = fe;
        }
        e.call(t.prototype);
      }
      else {
        try {
          throw Error();
        } catch (fe) {
          s = fe;
        }
        e();
      }
    } catch (fe) {
      if (fe && s && typeof fe.stack == "string") {
        for (var u = fe.stack.split(`
`), p = s.stack.split(`
`), I = u.length - 1, Y = p.length - 1; 1 <= I && 0 <= Y && u[I] !== p[Y]; ) Y--;
        for (; 1 <= I && 0 <= Y; I--, Y--) if (u[I] !== p[Y]) {
          if (I !== 1 || Y !== 1)
            do
              if (I--, Y--, 0 > Y || u[I] !== p[Y]) {
                var $ = `
` + u[I].replace(" at new ", " at ");
                return e.displayName && $.includes("<anonymous>") && ($ = $.replace("<anonymous>", e.displayName)), $;
              }
            while (1 <= I && 0 <= Y);
          break;
        }
      }
    } finally {
      b = !1, Error.prepareStackTrace = i;
    }
    return (e = e ? e.displayName || e.name : "") ? K(e) : "";
  }
  function ge(e) {
    switch (e.tag) {
      case 5:
        return K(e.type);
      case 16:
        return K("Lazy");
      case 13:
        return K("Suspense");
      case 19:
        return K("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = de(e.type, !1), e;
      case 11:
        return e = de(e.type.render, !1), e;
      case 1:
        return e = de(e.type, !0), e;
      default:
        return "";
    }
  }
  function se(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case J:
        return "Fragment";
      case W:
        return "Portal";
      case B:
        return "Profiler";
      case G:
        return "StrictMode";
      case Q:
        return "Suspense";
      case ie:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case X:
        return (e.displayName || "Context") + ".Consumer";
      case H:
        return (e._context.displayName || "Context") + ".Provider";
      case Z:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case ee:
        return t = e.displayName || null, t !== null ? t : se(e.type) || "Memo";
      case me:
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
        return t === G ? "StrictMode" : "Mode";
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
  function re(e) {
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
  function ae(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Ce(e) {
    var t = ae(e) ? "checked" : "value", i = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), s = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof i < "u" && typeof i.get == "function" && typeof i.set == "function") {
      var u = i.get, p = i.set;
      return Object.defineProperty(e, t, { configurable: !0, get: function() {
        return u.call(this);
      }, set: function(I) {
        s = "" + I, p.call(this, I);
      } }), Object.defineProperty(e, t, { enumerable: i.enumerable }), { getValue: function() {
        return s;
      }, setValue: function(I) {
        s = "" + I;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[t];
      } };
    }
  }
  function Ee(e) {
    e._valueTracker || (e._valueTracker = Ce(e));
  }
  function De(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var i = t.getValue(), s = "";
    return e && (s = ae(e) ? e.checked ? "true" : "false" : e.value), e = s, e !== i ? (t.setValue(e), !0) : !1;
  }
  function Ue(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Qe(e, t) {
    var i = t.checked;
    return U({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: i ?? e._wrapperState.initialChecked });
  }
  function We(e, t) {
    var i = t.defaultValue == null ? "" : t.defaultValue, s = t.checked != null ? t.checked : t.defaultChecked;
    i = re(t.value != null ? t.value : i), e._wrapperState = { initialChecked: s, initialValue: i, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function At(e, t) {
    t = t.checked, t != null && h(e, "checked", t, !1);
  }
  function Ze(e, t) {
    At(e, t);
    var i = re(t.value), s = t.type;
    if (i != null) s === "number" ? (i === 0 && e.value === "" || e.value != i) && (e.value = "" + i) : e.value !== "" + i && (e.value = "" + i);
    else if (s === "submit" || s === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? Zn(e, t.type, i) : t.hasOwnProperty("defaultValue") && Zn(e, t.type, re(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function Je(e, t, i) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var s = t.type;
      if (!(s !== "submit" && s !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, i || t === e.value || (e.value = t), e.defaultValue = t;
    }
    i = e.name, i !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, i !== "" && (e.name = i);
  }
  function Zn(e, t, i) {
    (t !== "number" || Ue(e.ownerDocument) !== e) && (i == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + i && (e.defaultValue = "" + i));
  }
  var St = Array.isArray;
  function Wn(e, t, i, s) {
    if (e = e.options, t) {
      t = {};
      for (var u = 0; u < i.length; u++) t["$" + i[u]] = !0;
      for (i = 0; i < e.length; i++) u = t.hasOwnProperty("$" + e[i].value), e[i].selected !== u && (e[i].selected = u), u && s && (e[i].defaultSelected = !0);
    } else {
      for (i = "" + re(i), t = null, u = 0; u < e.length; u++) {
        if (e[u].value === i) {
          e[u].selected = !0, s && (e[u].defaultSelected = !0);
          return;
        }
        t !== null || e[u].disabled || (t = e[u]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function dt(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(v(91));
    return U({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function wn(e, t) {
    var i = t.value;
    if (i == null) {
      if (i = t.children, t = t.defaultValue, i != null) {
        if (t != null) throw Error(v(92));
        if (St(i)) {
          if (1 < i.length) throw Error(v(93));
          i = i[0];
        }
        t = i;
      }
      t == null && (t = ""), i = t;
    }
    e._wrapperState = { initialValue: re(i) };
  }
  function bt(e, t) {
    var i = re(t.value), s = re(t.defaultValue);
    i != null && (i = "" + i, i !== e.value && (e.value = i), t.defaultValue == null && e.defaultValue !== i && (e.defaultValue = i)), s != null && (e.defaultValue = "" + s);
  }
  function Ln(e) {
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
  function Ot(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? jt(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var Jt, yt = (function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, i, s, u) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, i, s, u);
      });
    } : e;
  })(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (Jt = Jt || document.createElement("div"), Jt.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Jt.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function It(e, t) {
    if (t) {
      var i = e.firstChild;
      if (i && i === e.lastChild && i.nodeType === 3) {
        i.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var zt = {
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
  }, Xr = ["Webkit", "ms", "Moz", "O"];
  Object.keys(zt).forEach(function(e) {
    Xr.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), zt[t] = zt[e];
    });
  });
  function Ui(e, t, i) {
    return t == null || typeof t == "boolean" || t === "" ? "" : i || typeof t != "number" || t === 0 || zt.hasOwnProperty(e) && zt[e] ? ("" + t).trim() : t + "px";
  }
  function Ar(e, t) {
    e = e.style;
    for (var i in t) if (t.hasOwnProperty(i)) {
      var s = i.indexOf("--") === 0, u = Ui(i, t[i], s);
      i === "float" && (i = "cssFloat"), s ? e.setProperty(i, u) : e[i] = u;
    }
  }
  var _o = U({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Bi(e, t) {
    if (t) {
      if (_o[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(v(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(v(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(v(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(v(62));
    }
  }
  function So(e, t) {
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
  var wo = null;
  function xo(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Co = null, pi = null, Qr = null;
  function bs(e) {
    if (e = Ls(e)) {
      if (typeof Co != "function") throw Error(v(280));
      var t = e.stateNode;
      t && (t = dn(t), Co(e.stateNode, e.type, t));
    }
  }
  function ye(e) {
    pi ? Qr ? Qr.push(e) : Qr = [e] : pi = e;
  }
  function Se() {
    if (pi) {
      var e = pi, t = Qr;
      if (Qr = pi = null, bs(e), t) for (e = 0; e < t.length; e++) bs(t[e]);
    }
  }
  function Te(e, t) {
    return e(t);
  }
  function Pe() {
  }
  var Xe = !1;
  function tt(e, t, i) {
    if (Xe) return e(t, i);
    Xe = !0;
    try {
      return Te(e, t, i);
    } finally {
      Xe = !1, (pi !== null || Qr !== null) && (Pe(), Se());
    }
  }
  function ht(e, t) {
    var i = e.stateNode;
    if (i === null) return null;
    var s = dn(i);
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
    if (i && typeof i != "function") throw Error(v(231, t, typeof i));
    return i;
  }
  var An = !1;
  if (g) try {
    var hr = {};
    Object.defineProperty(hr, "passive", { get: function() {
      An = !0;
    } }), window.addEventListener("test", hr, hr), window.removeEventListener("test", hr, hr);
  } catch {
    An = !1;
  }
  function ln(e, t, i, s, u, p, I, Y, $) {
    var fe = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(i, fe);
    } catch (_e) {
      this.onError(_e);
    }
  }
  var Wt = !1, br = null, Jr = !1, gi = null, Jl = { onError: function(e) {
    Wt = !0, br = e;
  } };
  function Zl(e, t, i, s, u, p, I, Y, $) {
    Wt = !1, br = null, ln.apply(Jl, arguments);
  }
  function $l(e, t, i, s, u, p, I, Y, $) {
    if (Zl.apply(this, arguments), Wt) {
      if (Wt) {
        var fe = br;
        Wt = !1, br = null;
      } else throw Error(v(198));
      Jr || (Jr = !0, gi = fe);
    }
  }
  function Vi(e) {
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
  function Vu(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function Hu(e) {
    if (Vi(e) !== e) throw Error(v(188));
  }
  function ad(e) {
    var t = e.alternate;
    if (!t) {
      if (t = Vi(e), t === null) throw Error(v(188));
      return t !== e ? null : e;
    }
    for (var i = e, s = t; ; ) {
      var u = i.return;
      if (u === null) break;
      var p = u.alternate;
      if (p === null) {
        if (s = u.return, s !== null) {
          i = s;
          continue;
        }
        break;
      }
      if (u.child === p.child) {
        for (p = u.child; p; ) {
          if (p === i) return Hu(u), e;
          if (p === s) return Hu(u), t;
          p = p.sibling;
        }
        throw Error(v(188));
      }
      if (i.return !== s.return) i = u, s = p;
      else {
        for (var I = !1, Y = u.child; Y; ) {
          if (Y === i) {
            I = !0, i = u, s = p;
            break;
          }
          if (Y === s) {
            I = !0, s = u, i = p;
            break;
          }
          Y = Y.sibling;
        }
        if (!I) {
          for (Y = p.child; Y; ) {
            if (Y === i) {
              I = !0, i = p, s = u;
              break;
            }
            if (Y === s) {
              I = !0, s = p, i = u;
              break;
            }
            Y = Y.sibling;
          }
          if (!I) throw Error(v(189));
        }
      }
      if (i.alternate !== s) throw Error(v(190));
    }
    if (i.tag !== 3) throw Error(v(188));
    return i.stateNode.current === i ? e : t;
  }
  function ju(e) {
    return e = ad(e), e !== null ? Wu(e) : null;
  }
  function Wu(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Wu(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var qu = d.unstable_scheduleCallback, Ku = d.unstable_cancelCallback, ud = d.unstable_shouldYield, cd = d.unstable_requestPaint, Bt = d.unstable_now, ea = d.unstable_getCurrentPriorityLevel, Hi = d.unstable_ImmediatePriority, Js = d.unstable_UserBlockingPriority, ko = d.unstable_NormalPriority, dd = d.unstable_LowPriority, Zs = d.unstable_IdlePriority, Zr = null, pn = null;
  function Et(e) {
    if (pn && typeof pn.onCommitFiberRoot == "function") try {
      pn.onCommitFiberRoot(Zr, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var nt = Math.clz32 ? Math.clz32 : qn, mi = Math.log, xn = Math.LN2;
  function qn(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (mi(e) / xn | 0) | 0;
  }
  var Or = 64, $r = 4194304;
  function an(e) {
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
  function ji(e, t) {
    var i = e.pendingLanes;
    if (i === 0) return 0;
    var s = 0, u = e.suspendedLanes, p = e.pingedLanes, I = i & 268435455;
    if (I !== 0) {
      var Y = I & ~u;
      Y !== 0 ? s = an(Y) : (p &= I, p !== 0 && (s = an(p)));
    } else I = i & ~u, I !== 0 ? s = an(I) : p !== 0 && (s = an(p));
    if (s === 0) return 0;
    if (t !== 0 && t !== s && (t & u) === 0 && (u = s & -s, p = t & -t, u >= p || u === 16 && (p & 4194240) !== 0)) return t;
    if ((s & 4) !== 0 && (s |= i & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= s; 0 < t; ) i = 31 - nt(t), u = 1 << i, s |= e[i], t &= ~u;
    return s;
  }
  function Yu(e, t) {
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
  function Xu(e, t) {
    for (var i = e.suspendedLanes, s = e.pingedLanes, u = e.expirationTimes, p = e.pendingLanes; 0 < p; ) {
      var I = 31 - nt(p), Y = 1 << I, $ = u[I];
      $ === -1 ? ((Y & i) === 0 || (Y & s) !== 0) && (u[I] = Yu(Y, t)) : $ <= t && (e.expiredLanes |= Y), p &= ~Y;
    }
  }
  function Eo(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function ta() {
    var e = Or;
    return Or <<= 1, (Or & 4194240) === 0 && (Or = 64), e;
  }
  function $n(e) {
    for (var t = [], i = 0; 31 > i; i++) t.push(e);
    return t;
  }
  function ms(e, t, i) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - nt(t), e[t] = i;
  }
  function fd(e, t) {
    var i = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var s = e.eventTimes;
    for (e = e.expirationTimes; 0 < i; ) {
      var u = 31 - nt(i), p = 1 << u;
      t[u] = 0, s[u] = -1, e[u] = -1, i &= ~p;
    }
  }
  function na(e, t) {
    var i = e.entangledLanes |= t;
    for (e = e.entanglements; i; ) {
      var s = 31 - nt(i), u = 1 << s;
      u & t | e[s] & t && (e[s] |= t), i &= ~u;
    }
  }
  var ut = 0;
  function ys(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var Po, Ro, Qu, bu, $s, el = !1, To = [], pr = null, yi = null, Ir = null, rt = /* @__PURE__ */ new Map(), No = /* @__PURE__ */ new Map(), Dr = [], Ju = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Zu(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        pr = null;
        break;
      case "dragenter":
      case "dragleave":
        yi = null;
        break;
      case "mouseover":
      case "mouseout":
        Ir = null;
        break;
      case "pointerover":
      case "pointerout":
        rt.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        No.delete(t.pointerId);
    }
  }
  function vs(e, t, i, s, u, p) {
    return e === null || e.nativeEvent !== p ? (e = { blockedOn: t, domEventName: i, eventSystemFlags: s, nativeEvent: p, targetContainers: [u] }, t !== null && (t = Ls(t), t !== null && Ro(t)), e) : (e.eventSystemFlags |= s, t = e.targetContainers, u !== null && t.indexOf(u) === -1 && t.push(u), e);
  }
  function un(e, t, i, s, u) {
    switch (t) {
      case "focusin":
        return pr = vs(pr, e, t, i, s, u), !0;
      case "dragenter":
        return yi = vs(yi, e, t, i, s, u), !0;
      case "mouseover":
        return Ir = vs(Ir, e, t, i, s, u), !0;
      case "pointerover":
        var p = u.pointerId;
        return rt.set(p, vs(rt.get(p) || null, e, t, i, s, u)), !0;
      case "gotpointercapture":
        return p = u.pointerId, No.set(p, vs(No.get(p) || null, e, t, i, s, u)), !0;
    }
    return !1;
  }
  function tl(e) {
    var t = Ri(e.target);
    if (t !== null) {
      var i = Vi(t);
      if (i !== null) {
        if (t = i.tag, t === 13) {
          if (t = Vu(i), t !== null) {
            e.blockedOn = t, $s(e.priority, function() {
              Qu(i);
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
  function nl(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var i = ol(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (i === null) {
        i = e.nativeEvent;
        var s = new i.constructor(i.type, i);
        wo = s, i.target.dispatchEvent(s), wo = null;
      } else return t = Ls(i), t !== null && Ro(t), e.blockedOn = i, !1;
      t.shift();
    }
    return !0;
  }
  function rl(e, t, i) {
    nl(e) && i.delete(t);
  }
  function hd() {
    el = !1, pr !== null && nl(pr) && (pr = null), yi !== null && nl(yi) && (yi = null), Ir !== null && nl(Ir) && (Ir = null), rt.forEach(rl), No.forEach(rl);
  }
  function vi(e, t) {
    e.blockedOn === t && (e.blockedOn = null, el || (el = !0, d.unstable_scheduleCallback(d.unstable_NormalPriority, hd)));
  }
  function Kn(e) {
    function t(u) {
      return vi(u, e);
    }
    if (0 < To.length) {
      vi(To[0], e);
      for (var i = 1; i < To.length; i++) {
        var s = To[i];
        s.blockedOn === e && (s.blockedOn = null);
      }
    }
    for (pr !== null && vi(pr, e), yi !== null && vi(yi, e), Ir !== null && vi(Ir, e), rt.forEach(t), No.forEach(t), i = 0; i < Dr.length; i++) s = Dr[i], s.blockedOn === e && (s.blockedOn = null);
    for (; 0 < Dr.length && (i = Dr[0], i.blockedOn === null); ) tl(i), i.blockedOn === null && Dr.shift();
  }
  var Mo = R.ReactCurrentBatchConfig, il = !0;
  function Er(e, t, i, s) {
    var u = ut, p = Mo.transition;
    Mo.transition = null;
    try {
      ut = 1, Fo(e, t, i, s);
    } finally {
      ut = u, Mo.transition = p;
    }
  }
  function ei(e, t, i, s) {
    var u = ut, p = Mo.transition;
    Mo.transition = null;
    try {
      ut = 4, Fo(e, t, i, s);
    } finally {
      ut = u, Mo.transition = p;
    }
  }
  function Fo(e, t, i, s) {
    if (il) {
      var u = ol(e, t, i, s);
      if (u === null) wl(e, t, s, Lo, i), Zu(e, s);
      else if (un(u, e, t, i, s)) s.stopPropagation();
      else if (Zu(e, s), t & 4 && -1 < Ju.indexOf(e)) {
        for (; u !== null; ) {
          var p = Ls(u);
          if (p !== null && Po(p), p = ol(e, t, i, s), p === null && wl(e, t, s, Lo, i), p === u) break;
          u = p;
        }
        u !== null && s.stopPropagation();
      } else wl(e, t, s, null, i);
    }
  }
  var Lo = null;
  function ol(e, t, i, s) {
    if (Lo = null, e = xo(s), e = Ri(e), e !== null) if (t = Vi(e), t === null) e = null;
    else if (i = t.tag, i === 13) {
      if (e = Vu(t), e !== null) return e;
      e = null;
    } else if (i === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return Lo = e, null;
  }
  function $u(e) {
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
        switch (ea()) {
          case Hi:
            return 1;
          case Js:
            return 4;
          case ko:
          case dd:
            return 16;
          case Zs:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var gn = null, _i = null, ti = null;
  function _s() {
    if (ti) return ti;
    var e, t = _i, i = t.length, s, u = "value" in gn ? gn.value : gn.textContent, p = u.length;
    for (e = 0; e < i && t[e] === u[e]; e++) ;
    var I = i - e;
    for (s = 1; s <= I && t[i - s] === u[p - s]; s++) ;
    return ti = u.slice(e, 1 < s ? 1 - s : void 0);
  }
  function Wi(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function On() {
    return !0;
  }
  function er() {
    return !1;
  }
  function Zt(e) {
    function t(i, s, u, p, I) {
      this._reactName = i, this._targetInst = u, this.type = s, this.nativeEvent = p, this.target = I, this.currentTarget = null;
      for (var Y in e) e.hasOwnProperty(Y) && (i = e[Y], this[Y] = i ? i(p) : p[Y]);
      return this.isDefaultPrevented = (p.defaultPrevented != null ? p.defaultPrevented : p.returnValue === !1) ? On : er, this.isPropagationStopped = er, this;
    }
    return U(t.prototype, { preventDefault: function() {
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
  }, defaultPrevented: 0, isTrusted: 0 }, Pr = Zt(Yn), Rr = U({}, Yn, { view: 0, detail: 0 }), ec = Zt(Rr), Ss, ws, mn, In = U({}, Rr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Ki, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== mn && (mn && e.type === "mousemove" ? (Ss = e.screenX - mn.screenX, ws = e.screenY - mn.screenY) : ws = Ss = 0, mn = e), Ss);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : ws;
  } }), Pt = Zt(In), xs = U({}, In, { dataTransfer: 0 }), Tr = Zt(xs), tc = U({}, Rr, { relatedTarget: 0 }), sl = Zt(tc), ra = U({}, Yn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), ia = Zt(ra), nc = U({}, Yn, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), ll = Zt(nc), rc = U({}, Yn, { data: 0 }), qi = Zt(rc), oa = {
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
  }, pd = {
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
  }, al = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function gd(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = al[e]) ? !!t[e] : !1;
  }
  function Ki() {
    return gd;
  }
  var ul = U({}, Rr, { key: function(e) {
    if (e.key) {
      var t = oa[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = Wi(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? pd[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Ki, charCode: function(e) {
    return e.type === "keypress" ? Wi(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Wi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), ic = Zt(ul), oc = U({}, In, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Yi = Zt(oc), sc = U({}, Rr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Ki }), cl = Zt(sc), dl = U({}, Yn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Ao = Zt(dl), sa = U({}, In, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), la = Zt(sa), lc = [9, 13, 27, 32], Cs = g && "CompositionEvent" in window, Xi = null;
  g && "documentMode" in document && (Xi = document.documentMode);
  var Oo = g && "TextEvent" in window && !Xi, tr = g && (!Cs || Xi && 8 < Xi && 11 >= Xi), Si = " ", fl = !1;
  function aa(e, t) {
    switch (e) {
      case "keyup":
        return lc.indexOf(t.keyCode) !== -1;
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
  function Nr(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var nr = !1;
  function ua(e, t) {
    switch (e) {
      case "compositionend":
        return Nr(t);
      case "keypress":
        return t.which !== 32 ? null : (fl = !0, Si);
      case "textInput":
        return e = t.data, e === Si && fl ? null : e;
      default:
        return null;
    }
  }
  function ac(e, t) {
    if (nr) return e === "compositionend" || !Cs && aa(e, t) ? (e = _s(), ti = _i = gn = null, nr = !1, e) : null;
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
        return tr && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var ni = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function ri(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!ni[e.type] : t === "textarea";
  }
  function ks(e, t, i, s) {
    ye(s), t = xl(t, "onChange"), 0 < t.length && (i = new Pr("onChange", "change", null, i, s), e.push({ event: i, listeners: t }));
  }
  var Io = null, wi = null;
  function uc(e) {
    Sa(e, 0);
  }
  function xi(e) {
    var t = en(e);
    if (De(t)) return e;
  }
  function gr(e, t) {
    if (e === "change") return t;
  }
  var Do = !1;
  if (g) {
    var Ci;
    if (g) {
      var mr = "oninput" in document;
      if (!mr) {
        var hl = document.createElement("div");
        hl.setAttribute("oninput", "return;"), mr = typeof hl.oninput == "function";
      }
      Ci = mr;
    } else Ci = !1;
    Do = Ci && (!document.documentMode || 9 < document.documentMode);
  }
  function Qi() {
    Io && (Io.detachEvent("onpropertychange", ca), wi = Io = null);
  }
  function ca(e) {
    if (e.propertyName === "value" && xi(wi)) {
      var t = [];
      ks(t, wi, e, xo(e)), tt(uc, t);
    }
  }
  function da(e, t, i) {
    e === "focusin" ? (Qi(), Io = t, wi = i, Io.attachEvent("onpropertychange", ca)) : e === "focusout" && Qi();
  }
  function Dt(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return xi(wi);
  }
  function pl(e, t) {
    if (e === "click") return xi(t);
  }
  function fa(e, t) {
    if (e === "input" || e === "change") return xi(t);
  }
  function ha(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Xn = typeof Object.is == "function" ? Object.is : ha;
  function bi(e, t) {
    if (Xn(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var i = Object.keys(e), s = Object.keys(t);
    if (i.length !== s.length) return !1;
    for (s = 0; s < i.length; s++) {
      var u = i[s];
      if (!m.call(t, u) || !Xn(e[u], t[u])) return !1;
    }
    return !0;
  }
  function ki(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Nt(e, t) {
    var i = ki(e);
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
      i = ki(i);
    }
  }
  function qt(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? qt(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function $t() {
    for (var e = window, t = Ue(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var i = typeof t.contentWindow.location.href == "string";
      } catch {
        i = !1;
      }
      if (i) e = t.contentWindow;
      else break;
      t = Ue(e.document);
    }
    return t;
  }
  function zo(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function Es(e) {
    var t = $t(), i = e.focusedElem, s = e.selectionRange;
    if (t !== i && i && i.ownerDocument && qt(i.ownerDocument.documentElement, i)) {
      if (s !== null && zo(i)) {
        if (t = s.start, e = s.end, e === void 0 && (e = t), "selectionStart" in i) i.selectionStart = t, i.selectionEnd = Math.min(e, i.value.length);
        else if (e = (t = i.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var u = i.textContent.length, p = Math.min(s.start, u);
          s = s.end === void 0 ? p : Math.min(s.end, u), !e.extend && p > s && (u = s, s = p, p = u), u = Nt(i, p);
          var I = Nt(
            i,
            s
          );
          u && I && (e.rangeCount !== 1 || e.anchorNode !== u.node || e.anchorOffset !== u.offset || e.focusNode !== I.node || e.focusOffset !== I.offset) && (t = t.createRange(), t.setStart(u.node, u.offset), e.removeAllRanges(), p > s ? (e.addRange(t), e.extend(I.node, I.offset)) : (t.setEnd(I.node, I.offset), e.addRange(t)));
        }
      }
      for (t = [], e = i; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof i.focus == "function" && i.focus(), i = 0; i < t.length; i++) e = t[i], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var Ps = g && "documentMode" in document && 11 >= document.documentMode, Go = null, cn = null, Ji = null, Rs = !1;
  function gl(e, t, i) {
    var s = i.window === i ? i.document : i.nodeType === 9 ? i : i.ownerDocument;
    Rs || Go == null || Go !== Ue(s) || (s = Go, "selectionStart" in s && zo(s) ? s = { start: s.selectionStart, end: s.selectionEnd } : (s = (s.ownerDocument && s.ownerDocument.defaultView || window).getSelection(), s = { anchorNode: s.anchorNode, anchorOffset: s.anchorOffset, focusNode: s.focusNode, focusOffset: s.focusOffset }), Ji && bi(Ji, s) || (Ji = s, s = xl(cn, "onSelect"), 0 < s.length && (t = new Pr("onSelect", "select", null, t, i), e.push({ event: t, listeners: s }), t.target = Go)));
  }
  function rr(e, t) {
    var i = {};
    return i[e.toLowerCase()] = t.toLowerCase(), i["Webkit" + e] = "webkit" + t, i["Moz" + e] = "moz" + t, i;
  }
  var yn = { animationend: rr("Animation", "AnimationEnd"), animationiteration: rr("Animation", "AnimationIteration"), animationstart: rr("Animation", "AnimationStart"), transitionend: rr("Transition", "TransitionEnd") }, Zi = {}, ml = {};
  g && (ml = document.createElement("div").style, "AnimationEvent" in window || (delete yn.animationend.animation, delete yn.animationiteration.animation, delete yn.animationstart.animation), "TransitionEvent" in window || delete yn.transitionend.transition);
  function Uo(e) {
    if (Zi[e]) return Zi[e];
    if (!yn[e]) return e;
    var t = yn[e], i;
    for (i in t) if (t.hasOwnProperty(i) && i in ml) return Zi[e] = t[i];
    return e;
  }
  var pa = Uo("animationend"), ga = Uo("animationiteration"), ma = Uo("animationstart"), ya = Uo("transitionend"), va = /* @__PURE__ */ new Map(), _a = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function ii(e, t) {
    va.set(e, t), C(t, [e]);
  }
  for (var yl = 0; yl < _a.length; yl++) {
    var $i = _a[yl], cc = $i.toLowerCase(), vl = $i[0].toUpperCase() + $i.slice(1);
    ii(cc, "on" + vl);
  }
  ii(pa, "onAnimationEnd"), ii(ga, "onAnimationIteration"), ii(ma, "onAnimationStart"), ii("dblclick", "onDoubleClick"), ii("focusin", "onFocus"), ii("focusout", "onBlur"), ii(ya, "onTransitionEnd"), f("onMouseEnter", ["mouseout", "mouseover"]), f("onMouseLeave", ["mouseout", "mouseover"]), f("onPointerEnter", ["pointerout", "pointerover"]), f("onPointerLeave", ["pointerout", "pointerover"]), C("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), C("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), C("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), C("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), C("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), C("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Ei = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), dc = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ei));
  function _l(e, t, i) {
    var s = e.type || "unknown-event";
    e.currentTarget = i, $l(s, t, void 0, e), e.currentTarget = null;
  }
  function Sa(e, t) {
    t = (t & 4) !== 0;
    for (var i = 0; i < e.length; i++) {
      var s = e[i], u = s.event;
      s = s.listeners;
      e: {
        var p = void 0;
        if (t) for (var I = s.length - 1; 0 <= I; I--) {
          var Y = s[I], $ = Y.instance, fe = Y.currentTarget;
          if (Y = Y.listener, $ !== p && u.isPropagationStopped()) break e;
          _l(u, Y, fe), p = $;
        }
        else for (I = 0; I < s.length; I++) {
          if (Y = s[I], $ = Y.instance, fe = Y.currentTarget, Y = Y.listener, $ !== p && u.isPropagationStopped()) break e;
          _l(u, Y, fe), p = $;
        }
      }
    }
    if (Jr) throw e = gi, Jr = !1, gi = null, e;
  }
  function wt(e, t) {
    var i = t[kl];
    i === void 0 && (i = t[kl] = /* @__PURE__ */ new Set());
    var s = e + "__bubble";
    i.has(s) || (wa(t, e, 2, !1), i.add(s));
  }
  function Sl(e, t, i) {
    var s = 0;
    t && (s |= 4), wa(i, e, s, t);
  }
  var Ts = "_reactListening" + Math.random().toString(36).slice(2);
  function eo(e) {
    if (!e[Ts]) {
      e[Ts] = !0, A.forEach(function(i) {
        i !== "selectionchange" && (dc.has(i) || Sl(i, !1, e), Sl(i, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Ts] || (t[Ts] = !0, Sl("selectionchange", !1, t));
    }
  }
  function wa(e, t, i, s) {
    switch ($u(t)) {
      case 1:
        var u = Er;
        break;
      case 4:
        u = ei;
        break;
      default:
        u = Fo;
    }
    i = u.bind(null, t, i, e), u = void 0, !An || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (u = !0), s ? u !== void 0 ? e.addEventListener(t, i, { capture: !0, passive: u }) : e.addEventListener(t, i, !0) : u !== void 0 ? e.addEventListener(t, i, { passive: u }) : e.addEventListener(t, i, !1);
  }
  function wl(e, t, i, s, u) {
    var p = s;
    if ((t & 1) === 0 && (t & 2) === 0 && s !== null) e: for (; ; ) {
      if (s === null) return;
      var I = s.tag;
      if (I === 3 || I === 4) {
        var Y = s.stateNode.containerInfo;
        if (Y === u || Y.nodeType === 8 && Y.parentNode === u) break;
        if (I === 4) for (I = s.return; I !== null; ) {
          var $ = I.tag;
          if (($ === 3 || $ === 4) && ($ = I.stateNode.containerInfo, $ === u || $.nodeType === 8 && $.parentNode === u)) return;
          I = I.return;
        }
        for (; Y !== null; ) {
          if (I = Ri(Y), I === null) return;
          if ($ = I.tag, $ === 5 || $ === 6) {
            s = p = I;
            continue e;
          }
          Y = Y.parentNode;
        }
      }
      s = s.return;
    }
    tt(function() {
      var fe = p, _e = xo(i), we = [];
      e: {
        var ve = va.get(e);
        if (ve !== void 0) {
          var Fe = Pr, Ie = e;
          switch (e) {
            case "keypress":
              if (Wi(i) === 0) break e;
            case "keydown":
            case "keyup":
              Fe = ic;
              break;
            case "focusin":
              Ie = "focus", Fe = sl;
              break;
            case "focusout":
              Ie = "blur", Fe = sl;
              break;
            case "beforeblur":
            case "afterblur":
              Fe = sl;
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
              Fe = Pt;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Fe = Tr;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Fe = cl;
              break;
            case pa:
            case ga:
            case ma:
              Fe = ia;
              break;
            case ya:
              Fe = Ao;
              break;
            case "scroll":
              Fe = ec;
              break;
            case "wheel":
              Fe = la;
              break;
            case "copy":
            case "cut":
            case "paste":
              Fe = ll;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Fe = Yi;
          }
          var ze = (t & 4) !== 0, on = !ze && e === "scroll", le = ze ? ve !== null ? ve + "Capture" : null : ve;
          ze = [];
          for (var te = fe, ue; te !== null; ) {
            ue = te;
            var ke = ue.stateNode;
            if (ue.tag === 5 && ke !== null && (ue = ke, le !== null && (ke = ht(te, le), ke != null && ze.push(Bo(te, ke, ue)))), on) break;
            te = te.return;
          }
          0 < ze.length && (ve = new Fe(ve, Ie, null, i, _e), we.push({ event: ve, listeners: ze }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (ve = e === "mouseover" || e === "pointerover", Fe = e === "mouseout" || e === "pointerout", ve && i !== wo && (Ie = i.relatedTarget || i.fromElement) && (Ri(Ie) || Ie[Gr])) break e;
          if ((Fe || ve) && (ve = _e.window === _e ? _e : (ve = _e.ownerDocument) ? ve.defaultView || ve.parentWindow : window, Fe ? (Ie = i.relatedTarget || i.toElement, Fe = fe, Ie = Ie ? Ri(Ie) : null, Ie !== null && (on = Vi(Ie), Ie !== on || Ie.tag !== 5 && Ie.tag !== 6) && (Ie = null)) : (Fe = null, Ie = fe), Fe !== Ie)) {
            if (ze = Pt, ke = "onMouseLeave", le = "onMouseEnter", te = "mouse", (e === "pointerout" || e === "pointerover") && (ze = Yi, ke = "onPointerLeave", le = "onPointerEnter", te = "pointer"), on = Fe == null ? ve : en(Fe), ue = Ie == null ? ve : en(Ie), ve = new ze(ke, te + "leave", Fe, i, _e), ve.target = on, ve.relatedTarget = ue, ke = null, Ri(_e) === fe && (ze = new ze(le, te + "enter", Ie, i, _e), ze.target = ue, ze.relatedTarget = on, ke = ze), on = ke, Fe && Ie) t: {
              for (ze = Fe, le = Ie, te = 0, ue = ze; ue; ue = to(ue)) te++;
              for (ue = 0, ke = le; ke; ke = to(ke)) ue++;
              for (; 0 < te - ue; ) ze = to(ze), te--;
              for (; 0 < ue - te; ) le = to(le), ue--;
              for (; te--; ) {
                if (ze === le || le !== null && ze === le.alternate) break t;
                ze = to(ze), le = to(le);
              }
              ze = null;
            }
            else ze = null;
            Fe !== null && fc(we, ve, Fe, ze, !1), Ie !== null && on !== null && fc(we, on, Ie, ze, !0);
          }
        }
        e: {
          if (ve = fe ? en(fe) : window, Fe = ve.nodeName && ve.nodeName.toLowerCase(), Fe === "select" || Fe === "input" && ve.type === "file") var Ge = gr;
          else if (ri(ve)) if (Do) Ge = fa;
          else {
            Ge = Dt;
            var He = da;
          }
          else (Fe = ve.nodeName) && Fe.toLowerCase() === "input" && (ve.type === "checkbox" || ve.type === "radio") && (Ge = pl);
          if (Ge && (Ge = Ge(e, fe))) {
            ks(we, Ge, i, _e);
            break e;
          }
          He && He(e, ve, fe), e === "focusout" && (He = ve._wrapperState) && He.controlled && ve.type === "number" && Zn(ve, "number", ve.value);
        }
        switch (He = fe ? en(fe) : window, e) {
          case "focusin":
            (ri(He) || He.contentEditable === "true") && (Go = He, cn = fe, Ji = null);
            break;
          case "focusout":
            Ji = cn = Go = null;
            break;
          case "mousedown":
            Rs = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Rs = !1, gl(we, i, _e);
            break;
          case "selectionchange":
            if (Ps) break;
          case "keydown":
          case "keyup":
            gl(we, i, _e);
        }
        var je;
        if (Cs) e: {
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
        else nr ? aa(e, i) && (qe = "onCompositionEnd") : e === "keydown" && i.keyCode === 229 && (qe = "onCompositionStart");
        qe && (tr && i.locale !== "ko" && (nr || qe !== "onCompositionStart" ? qe === "onCompositionEnd" && nr && (je = _s()) : (gn = _e, _i = "value" in gn ? gn.value : gn.textContent, nr = !0)), He = xl(fe, qe), 0 < He.length && (qe = new qi(qe, e, null, i, _e), we.push({ event: qe, listeners: He }), je ? qe.data = je : (je = Nr(i), je !== null && (qe.data = je)))), (je = Oo ? ua(e, i) : ac(e, i)) && (fe = xl(fe, "onBeforeInput"), 0 < fe.length && (_e = new qi("onBeforeInput", "beforeinput", null, i, _e), we.push({ event: _e, listeners: fe }), _e.data = je));
      }
      Sa(we, t);
    });
  }
  function Bo(e, t, i) {
    return { instance: e, listener: t, currentTarget: i };
  }
  function xl(e, t) {
    for (var i = t + "Capture", s = []; e !== null; ) {
      var u = e, p = u.stateNode;
      u.tag === 5 && p !== null && (u = p, p = ht(e, i), p != null && s.unshift(Bo(e, p, u)), p = ht(e, t), p != null && s.push(Bo(e, p, u))), e = e.return;
    }
    return s;
  }
  function to(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function fc(e, t, i, s, u) {
    for (var p = t._reactName, I = []; i !== null && i !== s; ) {
      var Y = i, $ = Y.alternate, fe = Y.stateNode;
      if ($ !== null && $ === s) break;
      Y.tag === 5 && fe !== null && (Y = fe, u ? ($ = ht(i, p), $ != null && I.unshift(Bo(i, $, Y))) : u || ($ = ht(i, p), $ != null && I.push(Bo(i, $, Y)))), i = i.return;
    }
    I.length !== 0 && e.push({ event: t, listeners: I });
  }
  var md = /\r\n?/g, hc = /\u0000|\uFFFD/g;
  function xa(e) {
    return (typeof e == "string" ? e : "" + e).replace(md, `
`).replace(hc, "");
  }
  function Ns(e, t, i) {
    if (t = xa(t), xa(e) !== t && i) throw Error(v(425));
  }
  function no() {
  }
  var Ca = null, ka = null;
  function Ea(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var ir = typeof setTimeout == "function" ? setTimeout : void 0, Pa = typeof clearTimeout == "function" ? clearTimeout : void 0, Ms = typeof Promise == "function" ? Promise : void 0, pc = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ms < "u" ? function(e) {
    return Ms.resolve(null).then(e).catch(gc);
  } : ir;
  function gc(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Cl(e, t) {
    var i = t, s = 0;
    do {
      var u = i.nextSibling;
      if (e.removeChild(i), u && u.nodeType === 8) if (i = u.data, i === "/$") {
        if (s === 0) {
          e.removeChild(u), Kn(t);
          return;
        }
        s--;
      } else i !== "$" && i !== "$?" && i !== "$!" || s++;
      i = u;
    } while (i);
    Kn(t);
  }
  function zr(e) {
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
  function ro(e) {
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
  var Pi = Math.random().toString(36).slice(2), yr = "__reactFiber$" + Pi, Fs = "__reactProps$" + Pi, Gr = "__reactContainer$" + Pi, kl = "__reactEvents$" + Pi, mc = "__reactListeners$" + Pi, yc = "__reactHandles$" + Pi;
  function Ri(e) {
    var t = e[yr];
    if (t) return t;
    for (var i = e.parentNode; i; ) {
      if (t = i[Gr] || i[yr]) {
        if (i = t.alternate, t.child !== null || i !== null && i.child !== null) for (e = ro(e); e !== null; ) {
          if (i = e[yr]) return i;
          e = ro(e);
        }
        return t;
      }
      e = i, i = e.parentNode;
    }
    return null;
  }
  function Ls(e) {
    return e = e[yr] || e[Gr], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function en(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(v(33));
  }
  function dn(e) {
    return e[Fs] || null;
  }
  var El = [], io = -1;
  function oi(e) {
    return { current: e };
  }
  function xt(e) {
    0 > io || (e.current = El[io], El[io] = null, io--);
  }
  function vt(e, t) {
    io++, El[io] = e.current, e.current = t;
  }
  var Ur = {}, vn = oi(Ur), Cn = oi(!1), Ti = Ur;
  function oo(e, t) {
    var i = e.type.contextTypes;
    if (!i) return Ur;
    var s = e.stateNode;
    if (s && s.__reactInternalMemoizedUnmaskedChildContext === t) return s.__reactInternalMemoizedMaskedChildContext;
    var u = {}, p;
    for (p in i) u[p] = t[p];
    return s && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = u), u;
  }
  function kn(e) {
    return e = e.childContextTypes, e != null;
  }
  function Vo() {
    xt(Cn), xt(vn);
  }
  function Ra(e, t, i) {
    if (vn.current !== Ur) throw Error(v(168));
    vt(vn, t), vt(Cn, i);
  }
  function Pl(e, t, i) {
    var s = e.stateNode;
    if (t = t.childContextTypes, typeof s.getChildContext != "function") return i;
    s = s.getChildContext();
    for (var u in s) if (!(u in t)) throw Error(v(108, q(e) || "Unknown", u));
    return U({}, i, s);
  }
  function so(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Ur, Ti = vn.current, vt(vn, e), vt(Cn, Cn.current), !0;
  }
  function vc(e, t, i) {
    var s = e.stateNode;
    if (!s) throw Error(v(169));
    i ? (e = Pl(e, t, Ti), s.__reactInternalMemoizedMergedChildContext = e, xt(Cn), xt(vn), vt(vn, e)) : xt(Cn), vt(Cn, i);
  }
  var Br = null, Ho = !1, Rl = !1;
  function As(e) {
    Br === null ? Br = [e] : Br.push(e);
  }
  function si(e) {
    Ho = !0, As(e);
  }
  function Ni() {
    if (!Rl && Br !== null) {
      Rl = !0;
      var e = 0, t = ut;
      try {
        var i = Br;
        for (ut = 1; e < i.length; e++) {
          var s = i[e];
          do
            s = s(!0);
          while (s !== null);
        }
        Br = null, Ho = !1;
      } catch (u) {
        throw Br !== null && (Br = Br.slice(e + 1)), qu(Hi, Ni), u;
      } finally {
        ut = t, Rl = !1;
      }
    }
    return null;
  }
  var Dn = [], lo = 0, Mi = null, Fi = 0, zn = [], Gn = 0, Li = null, or = 1, Mt = "";
  function ao(e, t) {
    Dn[lo++] = Fi, Dn[lo++] = Mi, Mi = e, Fi = t;
  }
  function _c(e, t, i) {
    zn[Gn++] = or, zn[Gn++] = Mt, zn[Gn++] = Li, Li = e;
    var s = or;
    e = Mt;
    var u = 32 - nt(s) - 1;
    s &= ~(1 << u), i += 1;
    var p = 32 - nt(t) + u;
    if (30 < p) {
      var I = u - u % 5;
      p = (s & (1 << I) - 1).toString(32), s >>= I, u -= I, or = 1 << 32 - nt(t) + u | i << u | s, Mt = p + e;
    } else or = 1 << p | i << u | s, Mt = e;
  }
  function jo(e) {
    e.return !== null && (ao(e, 1), _c(e, 1, 0));
  }
  function fn(e) {
    for (; e === Mi; ) Mi = Dn[--lo], Dn[lo] = null, Fi = Dn[--lo], Dn[lo] = null;
    for (; e === Li; ) Li = zn[--Gn], zn[Gn] = null, Mt = zn[--Gn], zn[Gn] = null, or = zn[--Gn], zn[Gn] = null;
  }
  var sr = null, Re = null, pt = !1, lr = null;
  function Ta(e, t) {
    var i = Yr(5, null, null, 0);
    i.elementType = "DELETED", i.stateNode = t, i.return = e, t = e.deletions, t === null ? (e.deletions = [i], e.flags |= 16) : t.push(i);
  }
  function Sc(e, t) {
    switch (e.tag) {
      case 5:
        var i = e.type;
        return t = t.nodeType !== 1 || i.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, sr = e, Re = zr(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, sr = e, Re = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (i = Li !== null ? { id: or, overflow: Mt } : null, e.memoizedState = { dehydrated: t, treeContext: i, retryLane: 1073741824 }, i = Yr(18, null, null, 0), i.stateNode = t, i.return = e, e.child = i, sr = e, Re = null, !0) : !1;
      default:
        return !1;
    }
  }
  function uo(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Wo(e) {
    if (pt) {
      var t = Re;
      if (t) {
        var i = t;
        if (!Sc(e, t)) {
          if (uo(e)) throw Error(v(418));
          t = zr(i.nextSibling);
          var s = sr;
          t && Sc(e, t) ? Ta(s, i) : (e.flags = e.flags & -4097 | 2, pt = !1, sr = e);
        }
      } else {
        if (uo(e)) throw Error(v(418));
        e.flags = e.flags & -4097 | 2, pt = !1, sr = e;
      }
    }
  }
  function Tl(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    sr = e;
  }
  function Os(e) {
    if (e !== sr) return !1;
    if (!pt) return Tl(e), pt = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Ea(e.type, e.memoizedProps)), t && (t = Re)) {
      if (uo(e)) throw Na(), Error(v(418));
      for (; t; ) Ta(e, t), t = zr(t.nextSibling);
    }
    if (Tl(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(v(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var i = e.data;
            if (i === "/$") {
              if (t === 0) {
                Re = zr(e.nextSibling);
                break e;
              }
              t--;
            } else i !== "$" && i !== "$!" && i !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        Re = null;
      }
    } else Re = sr ? zr(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Na() {
    for (var e = Re; e; ) e = zr(e.nextSibling);
  }
  function co() {
    Re = sr = null, pt = !1;
  }
  function Is(e) {
    lr === null ? lr = [e] : lr.push(e);
  }
  var Ma = R.ReactCurrentBatchConfig;
  function Vt(e, t, i) {
    if (e = i.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (i._owner) {
        if (i = i._owner, i) {
          if (i.tag !== 1) throw Error(v(309));
          var s = i.stateNode;
        }
        if (!s) throw Error(v(147, e));
        var u = s, p = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === p ? t.ref : (t = function(I) {
          var Y = u.refs;
          I === null ? delete Y[p] : Y[p] = I;
        }, t._stringRef = p, t);
      }
      if (typeof e != "string") throw Error(v(284));
      if (!i._owner) throw Error(v(290, e));
    }
    return e;
  }
  function Qn(e, t) {
    throw e = Object.prototype.toString.call(t), Error(v(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function Mr(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Nl(e) {
    function t(le, te) {
      if (e) {
        var ue = le.deletions;
        ue === null ? (le.deletions = [te], le.flags |= 16) : ue.push(te);
      }
    }
    function i(le, te) {
      if (!e) return null;
      for (; te !== null; ) t(le, te), te = te.sibling;
      return null;
    }
    function s(le, te) {
      for (le = /* @__PURE__ */ new Map(); te !== null; ) te.key !== null ? le.set(te.key, te) : le.set(te.index, te), te = te.sibling;
      return le;
    }
    function u(le, te) {
      return le = cs(le, te), le.index = 0, le.sibling = null, le;
    }
    function p(le, te, ue) {
      return le.index = ue, e ? (ue = le.alternate, ue !== null ? (ue = ue.index, ue < te ? (le.flags |= 2, te) : ue) : (le.flags |= 2, te)) : (le.flags |= 1048576, te);
    }
    function I(le) {
      return e && le.alternate === null && (le.flags |= 2), le;
    }
    function Y(le, te, ue, ke) {
      return te === null || te.tag !== 6 ? (te = zd(ue, le.mode, ke), te.return = le, te) : (te = u(te, ue), te.return = le, te);
    }
    function $(le, te, ue, ke) {
      var Ge = ue.type;
      return Ge === J ? _e(le, te, ue.props.children, ke, ue.key) : te !== null && (te.elementType === Ge || typeof Ge == "object" && Ge !== null && Ge.$$typeof === me && Mr(Ge) === te.type) ? (ke = u(te, ue.props), ke.ref = Vt(le, te, ue), ke.return = le, ke) : (ke = Vc(ue.type, ue.key, ue.props, null, le.mode, ke), ke.ref = Vt(le, te, ue), ke.return = le, ke);
    }
    function fe(le, te, ue, ke) {
      return te === null || te.tag !== 4 || te.stateNode.containerInfo !== ue.containerInfo || te.stateNode.implementation !== ue.implementation ? (te = Gd(ue, le.mode, ke), te.return = le, te) : (te = u(te, ue.children || []), te.return = le, te);
    }
    function _e(le, te, ue, ke, Ge) {
      return te === null || te.tag !== 7 ? (te = Ks(ue, le.mode, ke, Ge), te.return = le, te) : (te = u(te, ue), te.return = le, te);
    }
    function we(le, te, ue) {
      if (typeof te == "string" && te !== "" || typeof te == "number") return te = zd("" + te, le.mode, ue), te.return = le, te;
      if (typeof te == "object" && te !== null) {
        switch (te.$$typeof) {
          case D:
            return ue = Vc(te.type, te.key, te.props, null, le.mode, ue), ue.ref = Vt(le, null, te), ue.return = le, ue;
          case W:
            return te = Gd(te, le.mode, ue), te.return = le, te;
          case me:
            var ke = te._init;
            return we(le, ke(te._payload), ue);
        }
        if (St(te) || N(te)) return te = Ks(te, le.mode, ue, null), te.return = le, te;
        Qn(le, te);
      }
      return null;
    }
    function ve(le, te, ue, ke) {
      var Ge = te !== null ? te.key : null;
      if (typeof ue == "string" && ue !== "" || typeof ue == "number") return Ge !== null ? null : Y(le, te, "" + ue, ke);
      if (typeof ue == "object" && ue !== null) {
        switch (ue.$$typeof) {
          case D:
            return ue.key === Ge ? $(le, te, ue, ke) : null;
          case W:
            return ue.key === Ge ? fe(le, te, ue, ke) : null;
          case me:
            return Ge = ue._init, ve(
              le,
              te,
              Ge(ue._payload),
              ke
            );
        }
        if (St(ue) || N(ue)) return Ge !== null ? null : _e(le, te, ue, ke, null);
        Qn(le, ue);
      }
      return null;
    }
    function Fe(le, te, ue, ke, Ge) {
      if (typeof ke == "string" && ke !== "" || typeof ke == "number") return le = le.get(ue) || null, Y(te, le, "" + ke, Ge);
      if (typeof ke == "object" && ke !== null) {
        switch (ke.$$typeof) {
          case D:
            return le = le.get(ke.key === null ? ue : ke.key) || null, $(te, le, ke, Ge);
          case W:
            return le = le.get(ke.key === null ? ue : ke.key) || null, fe(te, le, ke, Ge);
          case me:
            var He = ke._init;
            return Fe(le, te, ue, He(ke._payload), Ge);
        }
        if (St(ke) || N(ke)) return le = le.get(ue) || null, _e(te, le, ke, Ge, null);
        Qn(te, ke);
      }
      return null;
    }
    function Ie(le, te, ue, ke) {
      for (var Ge = null, He = null, je = te, qe = te = 0, Mn = null; je !== null && qe < ue.length; qe++) {
        je.index > qe ? (Mn = je, je = null) : Mn = je.sibling;
        var ft = ve(le, je, ue[qe], ke);
        if (ft === null) {
          je === null && (je = Mn);
          break;
        }
        e && je && ft.alternate === null && t(le, je), te = p(ft, te, qe), He === null ? Ge = ft : He.sibling = ft, He = ft, je = Mn;
      }
      if (qe === ue.length) return i(le, je), pt && ao(le, qe), Ge;
      if (je === null) {
        for (; qe < ue.length; qe++) je = we(le, ue[qe], ke), je !== null && (te = p(je, te, qe), He === null ? Ge = je : He.sibling = je, He = je);
        return pt && ao(le, qe), Ge;
      }
      for (je = s(le, je); qe < ue.length; qe++) Mn = Fe(je, le, qe, ue[qe], ke), Mn !== null && (e && Mn.alternate !== null && je.delete(Mn.key === null ? qe : Mn.key), te = p(Mn, te, qe), He === null ? Ge = Mn : He.sibling = Mn, He = Mn);
      return e && je.forEach(function(ds) {
        return t(le, ds);
      }), pt && ao(le, qe), Ge;
    }
    function ze(le, te, ue, ke) {
      var Ge = N(ue);
      if (typeof Ge != "function") throw Error(v(150));
      if (ue = Ge.call(ue), ue == null) throw Error(v(151));
      for (var He = Ge = null, je = te, qe = te = 0, Mn = null, ft = ue.next(); je !== null && !ft.done; qe++, ft = ue.next()) {
        je.index > qe ? (Mn = je, je = null) : Mn = je.sibling;
        var ds = ve(le, je, ft.value, ke);
        if (ds === null) {
          je === null && (je = Mn);
          break;
        }
        e && je && ds.alternate === null && t(le, je), te = p(ds, te, qe), He === null ? Ge = ds : He.sibling = ds, He = ds, je = Mn;
      }
      if (ft.done) return i(
        le,
        je
      ), pt && ao(le, qe), Ge;
      if (je === null) {
        for (; !ft.done; qe++, ft = ue.next()) ft = we(le, ft.value, ke), ft !== null && (te = p(ft, te, qe), He === null ? Ge = ft : He.sibling = ft, He = ft);
        return pt && ao(le, qe), Ge;
      }
      for (je = s(le, je); !ft.done; qe++, ft = ue.next()) ft = Fe(je, le, qe, ft.value, ke), ft !== null && (e && ft.alternate !== null && je.delete(ft.key === null ? qe : ft.key), te = p(ft, te, qe), He === null ? Ge = ft : He.sibling = ft, He = ft);
      return e && je.forEach(function(C1) {
        return t(le, C1);
      }), pt && ao(le, qe), Ge;
    }
    function on(le, te, ue, ke) {
      if (typeof ue == "object" && ue !== null && ue.type === J && ue.key === null && (ue = ue.props.children), typeof ue == "object" && ue !== null) {
        switch (ue.$$typeof) {
          case D:
            e: {
              for (var Ge = ue.key, He = te; He !== null; ) {
                if (He.key === Ge) {
                  if (Ge = ue.type, Ge === J) {
                    if (He.tag === 7) {
                      i(le, He.sibling), te = u(He, ue.props.children), te.return = le, le = te;
                      break e;
                    }
                  } else if (He.elementType === Ge || typeof Ge == "object" && Ge !== null && Ge.$$typeof === me && Mr(Ge) === He.type) {
                    i(le, He.sibling), te = u(He, ue.props), te.ref = Vt(le, He, ue), te.return = le, le = te;
                    break e;
                  }
                  i(le, He);
                  break;
                } else t(le, He);
                He = He.sibling;
              }
              ue.type === J ? (te = Ks(ue.props.children, le.mode, ke, ue.key), te.return = le, le = te) : (ke = Vc(ue.type, ue.key, ue.props, null, le.mode, ke), ke.ref = Vt(le, te, ue), ke.return = le, le = ke);
            }
            return I(le);
          case W:
            e: {
              for (He = ue.key; te !== null; ) {
                if (te.key === He) if (te.tag === 4 && te.stateNode.containerInfo === ue.containerInfo && te.stateNode.implementation === ue.implementation) {
                  i(le, te.sibling), te = u(te, ue.children || []), te.return = le, le = te;
                  break e;
                } else {
                  i(le, te);
                  break;
                }
                else t(le, te);
                te = te.sibling;
              }
              te = Gd(ue, le.mode, ke), te.return = le, le = te;
            }
            return I(le);
          case me:
            return He = ue._init, on(le, te, He(ue._payload), ke);
        }
        if (St(ue)) return Ie(le, te, ue, ke);
        if (N(ue)) return ze(le, te, ue, ke);
        Qn(le, ue);
      }
      return typeof ue == "string" && ue !== "" || typeof ue == "number" ? (ue = "" + ue, te !== null && te.tag === 6 ? (i(le, te.sibling), te = u(te, ue), te.return = le, le = te) : (i(le, te), te = zd(ue, le.mode, ke), te.return = le, le = te), I(le)) : i(le, te);
    }
    return on;
  }
  var fo = Nl(!0), vr = Nl(!1), Ds = oi(null), ar = null, qo = null, Ml = null;
  function Fl() {
    Ml = qo = ar = null;
  }
  function Ll(e) {
    var t = Ds.current;
    xt(Ds), e._currentValue = t;
  }
  function Al(e, t, i) {
    for (; e !== null; ) {
      var s = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, s !== null && (s.childLanes |= t)) : s !== null && (s.childLanes & t) !== t && (s.childLanes |= t), e === i) break;
      e = e.return;
    }
  }
  function li(e, t) {
    ar = e, Ml = qo = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (y = !0), e.firstContext = null);
  }
  function Un(e) {
    var t = e._currentValue;
    if (Ml !== e) if (e = { context: e, memoizedValue: t, next: null }, qo === null) {
      if (ar === null) throw Error(v(308));
      qo = e, ar.dependencies = { lanes: 0, firstContext: e };
    } else qo = qo.next = e;
    return t;
  }
  var Vr = null;
  function Ko(e) {
    Vr === null ? Vr = [e] : Vr.push(e);
  }
  function zs(e, t, i, s) {
    var u = t.interleaved;
    return u === null ? (i.next = i, Ko(t)) : (i.next = u.next, u.next = i), t.interleaved = i, ur(e, s);
  }
  function ur(e, t) {
    e.lanes |= t;
    var i = e.alternate;
    for (i !== null && (i.lanes |= t), i = e, e = e.return; e !== null; ) e.childLanes |= t, i = e.alternate, i !== null && (i.childLanes |= t), i = e, e = e.return;
    return i.tag === 3 ? i.stateNode : null;
  }
  var Hr = !1;
  function Gs(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Ol(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function jr(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Wr(e, t, i) {
    var s = e.updateQueue;
    if (s === null) return null;
    if (s = s.shared, (ct & 2) !== 0) {
      var u = s.pending;
      return u === null ? t.next = t : (t.next = u.next, u.next = t), s.pending = t, ur(e, i);
    }
    return u = s.interleaved, u === null ? (t.next = t, Ko(s)) : (t.next = u.next, u.next = t), s.interleaved = t, ur(e, i);
  }
  function Il(e, t, i) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (i & 4194240) !== 0)) {
      var s = t.lanes;
      s &= e.pendingLanes, i |= s, t.lanes = i, na(e, i);
    }
  }
  function Us(e, t) {
    var i = e.updateQueue, s = e.alternate;
    if (s !== null && (s = s.updateQueue, i === s)) {
      var u = null, p = null;
      if (i = i.firstBaseUpdate, i !== null) {
        do {
          var I = { eventTime: i.eventTime, lane: i.lane, tag: i.tag, payload: i.payload, callback: i.callback, next: null };
          p === null ? u = p = I : p = p.next = I, i = i.next;
        } while (i !== null);
        p === null ? u = p = t : p = p.next = t;
      } else u = p = t;
      i = { baseState: s.baseState, firstBaseUpdate: u, lastBaseUpdate: p, shared: s.shared, effects: s.effects }, e.updateQueue = i;
      return;
    }
    e = i.lastBaseUpdate, e === null ? i.firstBaseUpdate = t : e.next = t, i.lastBaseUpdate = t;
  }
  function Yo(e, t, i, s) {
    var u = e.updateQueue;
    Hr = !1;
    var p = u.firstBaseUpdate, I = u.lastBaseUpdate, Y = u.shared.pending;
    if (Y !== null) {
      u.shared.pending = null;
      var $ = Y, fe = $.next;
      $.next = null, I === null ? p = fe : I.next = fe, I = $;
      var _e = e.alternate;
      _e !== null && (_e = _e.updateQueue, Y = _e.lastBaseUpdate, Y !== I && (Y === null ? _e.firstBaseUpdate = fe : Y.next = fe, _e.lastBaseUpdate = $));
    }
    if (p !== null) {
      var we = u.baseState;
      I = 0, _e = fe = $ = null, Y = p;
      do {
        var ve = Y.lane, Fe = Y.eventTime;
        if ((s & ve) === ve) {
          _e !== null && (_e = _e.next = {
            eventTime: Fe,
            lane: 0,
            tag: Y.tag,
            payload: Y.payload,
            callback: Y.callback,
            next: null
          });
          e: {
            var Ie = e, ze = Y;
            switch (ve = t, Fe = i, ze.tag) {
              case 1:
                if (Ie = ze.payload, typeof Ie == "function") {
                  we = Ie.call(Fe, we, ve);
                  break e;
                }
                we = Ie;
                break e;
              case 3:
                Ie.flags = Ie.flags & -65537 | 128;
              case 0:
                if (Ie = ze.payload, ve = typeof Ie == "function" ? Ie.call(Fe, we, ve) : Ie, ve == null) break e;
                we = U({}, we, ve);
                break e;
              case 2:
                Hr = !0;
            }
          }
          Y.callback !== null && Y.lane !== 0 && (e.flags |= 64, ve = u.effects, ve === null ? u.effects = [Y] : ve.push(Y));
        } else Fe = { eventTime: Fe, lane: ve, tag: Y.tag, payload: Y.payload, callback: Y.callback, next: null }, _e === null ? (fe = _e = Fe, $ = we) : _e = _e.next = Fe, I |= ve;
        if (Y = Y.next, Y === null) {
          if (Y = u.shared.pending, Y === null) break;
          ve = Y, Y = ve.next, ve.next = null, u.lastBaseUpdate = ve, u.shared.pending = null;
        }
      } while (!0);
      if (_e === null && ($ = we), u.baseState = $, u.firstBaseUpdate = fe, u.lastBaseUpdate = _e, t = u.shared.interleaved, t !== null) {
        u = t;
        do
          I |= u.lane, u = u.next;
        while (u !== t);
      } else p === null && (u.shared.lanes = 0);
      Hs |= I, e.lanes = I, e.memoizedState = we;
    }
  }
  function Gt(e, t, i) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var s = e[t], u = s.callback;
      if (u !== null) {
        if (s.callback = null, s = i, typeof u != "function") throw Error(v(191, u));
        u.call(s);
      }
    }
  }
  var be = {}, _t = oi(be), Ft = oi(be), Ht = oi(be);
  function tn(e) {
    if (e === be) throw Error(v(174));
    return e;
  }
  function Ai(e, t) {
    switch (vt(Ht, t), vt(Ft, e), vt(_t, be), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Ot(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Ot(t, e);
    }
    xt(_t), vt(_t, t);
  }
  function Lt() {
    xt(_t), xt(Ft), xt(Ht);
  }
  function Xo(e) {
    tn(Ht.current);
    var t = tn(_t.current), i = Ot(t, e.type);
    t !== i && (vt(Ft, e), vt(_t, i));
  }
  function ai(e) {
    Ft.current === e && (xt(_t), xt(Ft));
  }
  var Ct = oi(0);
  function Qo(e) {
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
  var ho = [];
  function En() {
    for (var e = 0; e < ho.length; e++) ho[e]._workInProgressVersionPrimary = null;
    ho.length = 0;
  }
  var bo = R.ReactCurrentDispatcher, Bs = R.ReactCurrentBatchConfig, Bn = 0, mt = null, Ut = null, Kt = null, Fr = !1, Oi = !1, _r = 0, Dl = 0;
  function Yt() {
    throw Error(v(321));
  }
  function Vs(e, t) {
    if (t === null) return !1;
    for (var i = 0; i < t.length && i < e.length; i++) if (!Xn(e[i], t[i])) return !1;
    return !0;
  }
  function Jo(e, t, i, s, u, p) {
    if (Bn = p, mt = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, bo.current = e === null || e.memoizedState === null ? vd : zi, e = i(s, u), Oi) {
      p = 0;
      do {
        if (Oi = !1, _r = 0, 25 <= p) throw Error(v(301));
        p += 1, Kt = Ut = null, t.updateQueue = null, bo.current = Vl, e = i(s, u);
      } while (Oi);
    }
    if (bo.current = ts, t = Ut !== null && Ut.next !== null, Bn = 0, Kt = Ut = mt = null, Fr = !1, t) throw Error(v(300));
    return e;
  }
  function Zo() {
    var e = _r !== 0;
    return _r = 0, e;
  }
  function Rt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Kt === null ? mt.memoizedState = Kt = e : Kt = Kt.next = e, Kt;
  }
  function nn() {
    if (Ut === null) {
      var e = mt.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ut.next;
    var t = Kt === null ? mt.memoizedState : Kt.next;
    if (t !== null) Kt = t, Ut = e;
    else {
      if (e === null) throw Error(v(310));
      Ut = e, e = { memoizedState: Ut.memoizedState, baseState: Ut.baseState, baseQueue: Ut.baseQueue, queue: Ut.queue, next: null }, Kt === null ? mt.memoizedState = Kt = e : Kt = Kt.next = e;
    }
    return Kt;
  }
  function Pn(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Rn(e) {
    var t = nn(), i = t.queue;
    if (i === null) throw Error(v(311));
    i.lastRenderedReducer = e;
    var s = Ut, u = s.baseQueue, p = i.pending;
    if (p !== null) {
      if (u !== null) {
        var I = u.next;
        u.next = p.next, p.next = I;
      }
      s.baseQueue = u = p, i.pending = null;
    }
    if (u !== null) {
      p = u.next, s = s.baseState;
      var Y = I = null, $ = null, fe = p;
      do {
        var _e = fe.lane;
        if ((Bn & _e) === _e) $ !== null && ($ = $.next = { lane: 0, action: fe.action, hasEagerState: fe.hasEagerState, eagerState: fe.eagerState, next: null }), s = fe.hasEagerState ? fe.eagerState : e(s, fe.action);
        else {
          var we = {
            lane: _e,
            action: fe.action,
            hasEagerState: fe.hasEagerState,
            eagerState: fe.eagerState,
            next: null
          };
          $ === null ? (Y = $ = we, I = s) : $ = $.next = we, mt.lanes |= _e, Hs |= _e;
        }
        fe = fe.next;
      } while (fe !== null && fe !== p);
      $ === null ? I = s : $.next = Y, Xn(s, t.memoizedState) || (y = !0), t.memoizedState = s, t.baseState = I, t.baseQueue = $, i.lastRenderedState = s;
    }
    if (e = i.interleaved, e !== null) {
      u = e;
      do
        p = u.lane, mt.lanes |= p, Hs |= p, u = u.next;
      while (u !== e);
    } else u === null && (i.lanes = 0);
    return [t.memoizedState, i.dispatch];
  }
  function zl(e) {
    var t = nn(), i = t.queue;
    if (i === null) throw Error(v(311));
    i.lastRenderedReducer = e;
    var s = i.dispatch, u = i.pending, p = t.memoizedState;
    if (u !== null) {
      i.pending = null;
      var I = u = u.next;
      do
        p = e(p, I.action), I = I.next;
      while (I !== u);
      Xn(p, t.memoizedState) || (y = !0), t.memoizedState = p, t.baseQueue === null && (t.baseState = p), i.lastRenderedState = p;
    }
    return [p, s];
  }
  function Gl() {
  }
  function Ul(e, t) {
    var i = mt, s = nn(), u = t(), p = !Xn(s.memoizedState, u);
    if (p && (s.memoizedState = u, y = !0), s = s.queue, Oa(Fa.bind(null, i, s, e), [e]), s.getSnapshot !== t || p || Kt !== null && Kt.memoizedState.tag & 1) {
      if (i.flags |= 2048, $o(9, ui.bind(null, i, s, u, t), void 0, null), Nn === null) throw Error(v(349));
      (Bn & 30) !== 0 || wc(i, t, u);
    }
    return u;
  }
  function wc(e, t, i) {
    e.flags |= 16384, e = { getSnapshot: t, value: i }, t = mt.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, mt.updateQueue = t, t.stores = [e]) : (i = t.stores, i === null ? t.stores = [e] : i.push(e));
  }
  function ui(e, t, i, s) {
    t.value = i, t.getSnapshot = s, La(t) && Bl(e);
  }
  function Fa(e, t, i) {
    return i(function() {
      La(t) && Bl(e);
    });
  }
  function La(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var i = t();
      return !Xn(e, i);
    } catch {
      return !0;
    }
  }
  function Bl(e) {
    var t = ur(e, 1);
    t !== null && hi(t, e, 1, -1);
  }
  function Ii(e) {
    var t = Rt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Pn, lastRenderedState: e }, t.queue = e, e = e.dispatch = Rc.bind(null, mt, e), [t.memoizedState, e];
  }
  function $o(e, t, i, s) {
    return e = { tag: e, create: t, destroy: i, deps: s, next: null }, t = mt.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, mt.updateQueue = t, t.lastEffect = e.next = e) : (i = t.lastEffect, i === null ? t.lastEffect = e.next = e : (s = i.next, i.next = e, e.next = s, t.lastEffect = e)), e;
  }
  function Aa() {
    return nn().memoizedState;
  }
  function es(e, t, i, s) {
    var u = Rt();
    mt.flags |= e, u.memoizedState = $o(1 | t, i, void 0, s === void 0 ? null : s);
  }
  function po(e, t, i, s) {
    var u = nn();
    s = s === void 0 ? null : s;
    var p = void 0;
    if (Ut !== null) {
      var I = Ut.memoizedState;
      if (p = I.destroy, s !== null && Vs(s, I.deps)) {
        u.memoizedState = $o(t, i, p, s);
        return;
      }
    }
    mt.flags |= e, u.memoizedState = $o(1 | t, i, p, s);
  }
  function xc(e, t) {
    return es(8390656, 8, e, t);
  }
  function Oa(e, t) {
    return po(2048, 8, e, t);
  }
  function Ia(e, t) {
    return po(4, 2, e, t);
  }
  function Da(e, t) {
    return po(4, 4, e, t);
  }
  function Di(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function Cc(e, t, i) {
    return i = i != null ? i.concat([e]) : null, po(4, 4, Di.bind(null, t, e), i);
  }
  function ci() {
  }
  function za(e, t) {
    var i = nn();
    t = t === void 0 ? null : t;
    var s = i.memoizedState;
    return s !== null && t !== null && Vs(t, s[1]) ? s[0] : (i.memoizedState = [e, t], e);
  }
  function Tt(e, t) {
    var i = nn();
    t = t === void 0 ? null : t;
    var s = i.memoizedState;
    return s !== null && t !== null && Vs(t, s[1]) ? s[0] : (e = e(), i.memoizedState = [e, t], e);
  }
  function kc(e, t, i) {
    return (Bn & 21) === 0 ? (e.baseState && (e.baseState = !1, y = !0), e.memoizedState = i) : (Xn(i, t) || (i = ta(), mt.lanes |= i, Hs |= i, e.baseState = !0), t);
  }
  function Ec(e, t) {
    var i = ut;
    ut = i !== 0 && 4 > i ? i : 4, e(!0);
    var s = Bs.transition;
    Bs.transition = {};
    try {
      e(!1), t();
    } finally {
      ut = i, Bs.transition = s;
    }
  }
  function Pc() {
    return nn().memoizedState;
  }
  function yd(e, t, i) {
    var s = as(e);
    if (i = { lane: s, action: i, hasEagerState: !1, eagerState: null, next: null }, Ga(e)) Tc(t, i);
    else if (i = zs(e, t, i, s), i !== null) {
      var u = dr();
      hi(i, e, s, u), cr(i, t, s);
    }
  }
  function Rc(e, t, i) {
    var s = as(e), u = { lane: s, action: i, hasEagerState: !1, eagerState: null, next: null };
    if (Ga(e)) Tc(t, u);
    else {
      var p = e.alternate;
      if (e.lanes === 0 && (p === null || p.lanes === 0) && (p = t.lastRenderedReducer, p !== null)) try {
        var I = t.lastRenderedState, Y = p(I, i);
        if (u.hasEagerState = !0, u.eagerState = Y, Xn(Y, I)) {
          var $ = t.interleaved;
          $ === null ? (u.next = u, Ko(t)) : (u.next = $.next, $.next = u), t.interleaved = u;
          return;
        }
      } catch {
      } finally {
      }
      i = zs(e, t, u, s), i !== null && (u = dr(), hi(i, e, s, u), cr(i, t, s));
    }
  }
  function Ga(e) {
    var t = e.alternate;
    return e === mt || t !== null && t === mt;
  }
  function Tc(e, t) {
    Oi = Fr = !0;
    var i = e.pending;
    i === null ? t.next = t : (t.next = i.next, i.next = t), e.pending = t;
  }
  function cr(e, t, i) {
    if ((i & 4194240) !== 0) {
      var s = t.lanes;
      s &= e.pendingLanes, i |= s, t.lanes = i, na(e, i);
    }
  }
  var ts = { readContext: Un, useCallback: Yt, useContext: Yt, useEffect: Yt, useImperativeHandle: Yt, useInsertionEffect: Yt, useLayoutEffect: Yt, useMemo: Yt, useReducer: Yt, useRef: Yt, useState: Yt, useDebugValue: Yt, useDeferredValue: Yt, useTransition: Yt, useMutableSource: Yt, useSyncExternalStore: Yt, useId: Yt, unstable_isNewReconciler: !1 }, vd = { readContext: Un, useCallback: function(e, t) {
    return Rt().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: Un, useEffect: xc, useImperativeHandle: function(e, t, i) {
    return i = i != null ? i.concat([e]) : null, es(
      4194308,
      4,
      Di.bind(null, t, e),
      i
    );
  }, useLayoutEffect: function(e, t) {
    return es(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return es(4, 2, e, t);
  }, useMemo: function(e, t) {
    var i = Rt();
    return t = t === void 0 ? null : t, e = e(), i.memoizedState = [e, t], e;
  }, useReducer: function(e, t, i) {
    var s = Rt();
    return t = i !== void 0 ? i(t) : t, s.memoizedState = s.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, s.queue = e, e = e.dispatch = yd.bind(null, mt, e), [s.memoizedState, e];
  }, useRef: function(e) {
    var t = Rt();
    return e = { current: e }, t.memoizedState = e;
  }, useState: Ii, useDebugValue: ci, useDeferredValue: function(e) {
    return Rt().memoizedState = e;
  }, useTransition: function() {
    var e = Ii(!1), t = e[0];
    return e = Ec.bind(null, e[1]), Rt().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, i) {
    var s = mt, u = Rt();
    if (pt) {
      if (i === void 0) throw Error(v(407));
      i = i();
    } else {
      if (i = t(), Nn === null) throw Error(v(349));
      (Bn & 30) !== 0 || wc(s, t, i);
    }
    u.memoizedState = i;
    var p = { value: i, getSnapshot: t };
    return u.queue = p, xc(Fa.bind(
      null,
      s,
      p,
      e
    ), [e]), s.flags |= 2048, $o(9, ui.bind(null, s, p, i, t), void 0, null), i;
  }, useId: function() {
    var e = Rt(), t = Nn.identifierPrefix;
    if (pt) {
      var i = Mt, s = or;
      i = (s & ~(1 << 32 - nt(s) - 1)).toString(32) + i, t = ":" + t + "R" + i, i = _r++, 0 < i && (t += "H" + i.toString(32)), t += ":";
    } else i = Dl++, t = ":" + t + "r" + i.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, zi = {
    readContext: Un,
    useCallback: za,
    useContext: Un,
    useEffect: Oa,
    useImperativeHandle: Cc,
    useInsertionEffect: Ia,
    useLayoutEffect: Da,
    useMemo: Tt,
    useReducer: Rn,
    useRef: Aa,
    useState: function() {
      return Rn(Pn);
    },
    useDebugValue: ci,
    useDeferredValue: function(e) {
      var t = nn();
      return kc(t, Ut.memoizedState, e);
    },
    useTransition: function() {
      var e = Rn(Pn)[0], t = nn().memoizedState;
      return [e, t];
    },
    useMutableSource: Gl,
    useSyncExternalStore: Ul,
    useId: Pc,
    unstable_isNewReconciler: !1
  }, Vl = { readContext: Un, useCallback: za, useContext: Un, useEffect: Oa, useImperativeHandle: Cc, useInsertionEffect: Ia, useLayoutEffect: Da, useMemo: Tt, useReducer: zl, useRef: Aa, useState: function() {
    return zl(Pn);
  }, useDebugValue: ci, useDeferredValue: function(e) {
    var t = nn();
    return Ut === null ? t.memoizedState = e : kc(t, Ut.memoizedState, e);
  }, useTransition: function() {
    var e = zl(Pn)[0], t = nn().memoizedState;
    return [e, t];
  }, useMutableSource: Gl, useSyncExternalStore: Ul, useId: Pc, unstable_isNewReconciler: !1 };
  function _n(e, t) {
    if (e && e.defaultProps) {
      t = U({}, t), e = e.defaultProps;
      for (var i in e) t[i] === void 0 && (t[i] = e[i]);
      return t;
    }
    return t;
  }
  function ns(e, t, i, s) {
    t = e.memoizedState, i = i(s, t), i = i == null ? t : U({}, t, i), e.memoizedState = i, e.lanes === 0 && (e.updateQueue.baseState = i);
  }
  var rs = { isMounted: function(e) {
    return (e = e._reactInternals) ? Vi(e) === e : !1;
  }, enqueueSetState: function(e, t, i) {
    e = e._reactInternals;
    var s = dr(), u = as(e), p = jr(s, u);
    p.payload = t, i != null && (p.callback = i), t = Wr(e, p, u), t !== null && (hi(t, e, u, s), Il(t, e, u));
  }, enqueueReplaceState: function(e, t, i) {
    e = e._reactInternals;
    var s = dr(), u = as(e), p = jr(s, u);
    p.tag = 1, p.payload = t, i != null && (p.callback = i), t = Wr(e, p, u), t !== null && (hi(t, e, u, s), Il(t, e, u));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var i = dr(), s = as(e), u = jr(i, s);
    u.tag = 2, t != null && (u.callback = t), t = Wr(e, u, s), t !== null && (hi(t, e, s, i), Il(t, e, s));
  } };
  function Hl(e, t, i, s, u, p, I) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(s, p, I) : t.prototype && t.prototype.isPureReactComponent ? !bi(i, s) || !bi(u, p) : !0;
  }
  function Nc(e, t, i) {
    var s = !1, u = Ur, p = t.contextType;
    return typeof p == "object" && p !== null ? p = Un(p) : (u = kn(t) ? Ti : vn.current, s = t.contextTypes, p = (s = s != null) ? oo(e, u) : Ur), t = new t(i, p), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = rs, e.stateNode = t, t._reactInternals = e, s && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = u, e.__reactInternalMemoizedMaskedChildContext = p), t;
  }
  function Ua(e, t, i, s) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(i, s), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(i, s), t.state !== e && rs.enqueueReplaceState(t, t.state, null);
  }
  function jl(e, t, i, s) {
    var u = e.stateNode;
    u.props = i, u.state = e.memoizedState, u.refs = {}, Gs(e);
    var p = t.contextType;
    typeof p == "object" && p !== null ? u.context = Un(p) : (p = kn(t) ? Ti : vn.current, u.context = oo(e, p)), u.state = e.memoizedState, p = t.getDerivedStateFromProps, typeof p == "function" && (ns(e, t, p, i), u.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (t = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), t !== u.state && rs.enqueueReplaceState(u, u.state, null), Yo(e, i, u, s), u.state = e.memoizedState), typeof u.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function go(e, t) {
    try {
      var i = "", s = t;
      do
        i += ge(s), s = s.return;
      while (s);
      var u = i;
    } catch (p) {
      u = `
Error generating stack: ` + p.message + `
` + p.stack;
    }
    return { value: e, source: t, stack: u, digest: null };
  }
  function Wl(e, t, i) {
    return { value: e, source: null, stack: i ?? null, digest: t ?? null };
  }
  function is(e, t) {
    try {
      console.error(t.value);
    } catch (i) {
      setTimeout(function() {
        throw i;
      });
    }
  }
  var _d = typeof WeakMap == "function" ? WeakMap : Map;
  function Mc(e, t, i) {
    i = jr(-1, i), i.tag = 3, i.payload = { element: null };
    var s = t.value;
    return i.callback = function() {
      Ic || (Ic = !0, Nd = s), is(e, t);
    }, i;
  }
  function n(e, t, i) {
    i = jr(-1, i), i.tag = 3;
    var s = e.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var u = t.value;
      i.payload = function() {
        return s(u);
      }, i.callback = function() {
        is(e, t);
      };
    }
    var p = e.stateNode;
    return p !== null && typeof p.componentDidCatch == "function" && (i.callback = function() {
      is(e, t), typeof s != "function" && (ss === null ? ss = /* @__PURE__ */ new Set([this]) : ss.add(this));
      var I = t.stack;
      this.componentDidCatch(t.value, { componentStack: I !== null ? I : "" });
    }), i;
  }
  function r(e, t, i) {
    var s = e.pingCache;
    if (s === null) {
      s = e.pingCache = new _d();
      var u = /* @__PURE__ */ new Set();
      s.set(t, u);
    } else u = s.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), s.set(t, u));
    u.has(i) || (u.add(i), e = f1.bind(null, e, t, i), t.then(e, e));
  }
  function o(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function a(e, t, i, s, u) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, i.flags |= 131072, i.flags &= -52805, i.tag === 1 && (i.alternate === null ? i.tag = 17 : (t = jr(-1, 1), t.tag = 2, Wr(i, t, 1))), i.lanes |= 1), e) : (e.flags |= 65536, e.lanes = u, e);
  }
  var c = R.ReactCurrentOwner, y = !1;
  function V(e, t, i, s) {
    t.child = e === null ? vr(t, null, i, s) : fo(t, e.child, i, s);
  }
  function ne(e, t, i, s, u) {
    i = i.render;
    var p = t.ref;
    return li(t, u), s = Jo(e, t, i, s, p, u), i = Zo(), e !== null && !y ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~u, Tn(e, t, u)) : (pt && i && jo(t), t.flags |= 1, V(e, t, s, u), t.child);
  }
  function he(e, t, i, s, u) {
    if (e === null) {
      var p = i.type;
      return typeof p == "function" && !Dd(p) && p.defaultProps === void 0 && i.compare === null && i.defaultProps === void 0 ? (t.tag = 15, t.type = p, xe(e, t, p, s, u)) : (e = Vc(i.type, null, s, t, t.mode, u), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (p = e.child, (e.lanes & u) === 0) {
      var I = p.memoizedProps;
      if (i = i.compare, i = i !== null ? i : bi, i(I, s) && e.ref === t.ref) return Tn(e, t, u);
    }
    return t.flags |= 1, e = cs(p, s), e.ref = t.ref, e.return = t, t.child = e;
  }
  function xe(e, t, i, s, u) {
    if (e !== null) {
      var p = e.memoizedProps;
      if (bi(p, s) && e.ref === t.ref) if (y = !1, t.pendingProps = s = p, (e.lanes & u) !== 0) (e.flags & 131072) !== 0 && (y = !0);
      else return t.lanes = e.lanes, Tn(e, t, u);
    }
    return Ne(e, t, i, s, u);
  }
  function Ae(e, t, i) {
    var s = t.pendingProps, u = s.children, p = e !== null ? e.memoizedState : null;
    if (s.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, vt(Kl, Lr), Lr |= i;
    else {
      if ((i & 1073741824) === 0) return e = p !== null ? p.baseLanes | i : i, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, vt(Kl, Lr), Lr |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, s = p !== null ? p.baseLanes : i, vt(Kl, Lr), Lr |= s;
    }
    else p !== null ? (s = p.baseLanes | i, t.memoizedState = null) : s = i, vt(Kl, Lr), Lr |= s;
    return V(e, t, u, i), t.child;
  }
  function Ke(e, t) {
    var i = t.ref;
    (e === null && i !== null || e !== null && e.ref !== i) && (t.flags |= 512, t.flags |= 2097152);
  }
  function Ne(e, t, i, s, u) {
    var p = kn(i) ? Ti : vn.current;
    return p = oo(t, p), li(t, u), i = Jo(e, t, i, s, p, u), s = Zo(), e !== null && !y ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~u, Tn(e, t, u)) : (pt && s && jo(t), t.flags |= 1, V(e, t, i, u), t.child);
  }
  function kt(e, t, i, s, u) {
    if (kn(i)) {
      var p = !0;
      so(t);
    } else p = !1;
    if (li(t, u), t.stateNode === null) ot(e, t), Nc(t, i, s), jl(t, i, s, u), s = !0;
    else if (e === null) {
      var I = t.stateNode, Y = t.memoizedProps;
      I.props = Y;
      var $ = I.context, fe = i.contextType;
      typeof fe == "object" && fe !== null ? fe = Un(fe) : (fe = kn(i) ? Ti : vn.current, fe = oo(t, fe));
      var _e = i.getDerivedStateFromProps, we = typeof _e == "function" || typeof I.getSnapshotBeforeUpdate == "function";
      we || typeof I.UNSAFE_componentWillReceiveProps != "function" && typeof I.componentWillReceiveProps != "function" || (Y !== s || $ !== fe) && Ua(t, I, s, fe), Hr = !1;
      var ve = t.memoizedState;
      I.state = ve, Yo(t, s, I, u), $ = t.memoizedState, Y !== s || ve !== $ || Cn.current || Hr ? (typeof _e == "function" && (ns(t, i, _e, s), $ = t.memoizedState), (Y = Hr || Hl(t, i, Y, s, ve, $, fe)) ? (we || typeof I.UNSAFE_componentWillMount != "function" && typeof I.componentWillMount != "function" || (typeof I.componentWillMount == "function" && I.componentWillMount(), typeof I.UNSAFE_componentWillMount == "function" && I.UNSAFE_componentWillMount()), typeof I.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof I.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = s, t.memoizedState = $), I.props = s, I.state = $, I.context = fe, s = Y) : (typeof I.componentDidMount == "function" && (t.flags |= 4194308), s = !1);
    } else {
      I = t.stateNode, Ol(e, t), Y = t.memoizedProps, fe = t.type === t.elementType ? Y : _n(t.type, Y), I.props = fe, we = t.pendingProps, ve = I.context, $ = i.contextType, typeof $ == "object" && $ !== null ? $ = Un($) : ($ = kn(i) ? Ti : vn.current, $ = oo(t, $));
      var Fe = i.getDerivedStateFromProps;
      (_e = typeof Fe == "function" || typeof I.getSnapshotBeforeUpdate == "function") || typeof I.UNSAFE_componentWillReceiveProps != "function" && typeof I.componentWillReceiveProps != "function" || (Y !== we || ve !== $) && Ua(t, I, s, $), Hr = !1, ve = t.memoizedState, I.state = ve, Yo(t, s, I, u);
      var Ie = t.memoizedState;
      Y !== we || ve !== Ie || Cn.current || Hr ? (typeof Fe == "function" && (ns(t, i, Fe, s), Ie = t.memoizedState), (fe = Hr || Hl(t, i, fe, s, ve, Ie, $) || !1) ? (_e || typeof I.UNSAFE_componentWillUpdate != "function" && typeof I.componentWillUpdate != "function" || (typeof I.componentWillUpdate == "function" && I.componentWillUpdate(s, Ie, $), typeof I.UNSAFE_componentWillUpdate == "function" && I.UNSAFE_componentWillUpdate(s, Ie, $)), typeof I.componentDidUpdate == "function" && (t.flags |= 4), typeof I.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof I.componentDidUpdate != "function" || Y === e.memoizedProps && ve === e.memoizedState || (t.flags |= 4), typeof I.getSnapshotBeforeUpdate != "function" || Y === e.memoizedProps && ve === e.memoizedState || (t.flags |= 1024), t.memoizedProps = s, t.memoizedState = Ie), I.props = s, I.state = Ie, I.context = $, s = fe) : (typeof I.componentDidUpdate != "function" || Y === e.memoizedProps && ve === e.memoizedState || (t.flags |= 4), typeof I.getSnapshotBeforeUpdate != "function" || Y === e.memoizedProps && ve === e.memoizedState || (t.flags |= 1024), s = !1);
    }
    return gt(e, t, i, s, p, u);
  }
  function gt(e, t, i, s, u, p) {
    Ke(e, t);
    var I = (t.flags & 128) !== 0;
    if (!s && !I) return u && vc(t, i, !1), Tn(e, t, p);
    s = t.stateNode, c.current = t;
    var Y = I && typeof i.getDerivedStateFromError != "function" ? null : s.render();
    return t.flags |= 1, e !== null && I ? (t.child = fo(t, e.child, null, p), t.child = fo(t, null, Y, p)) : V(e, t, Y, p), t.memoizedState = s.state, u && vc(t, i, !0), t.child;
  }
  function Vn(e) {
    var t = e.stateNode;
    t.pendingContext ? Ra(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Ra(e, t.context, !1), Ai(e, t.containerInfo);
  }
  function qr(e, t, i, s, u) {
    return co(), Is(u), t.flags |= 256, V(e, t, i, s), t.child;
  }
  var ce = { dehydrated: null, treeContext: null, retryLane: 0 };
  function oe(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function pe(e, t, i) {
    var s = t.pendingProps, u = Ct.current, p = !1, I = (t.flags & 128) !== 0, Y;
    if ((Y = I) || (Y = e !== null && e.memoizedState === null ? !1 : (u & 2) !== 0), Y ? (p = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (u |= 1), vt(Ct, u & 1), e === null)
      return Wo(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (I = s.children, e = s.fallback, p ? (s = t.mode, p = t.child, I = { mode: "hidden", children: I }, (s & 1) === 0 && p !== null ? (p.childLanes = 0, p.pendingProps = I) : p = Hc(I, s, 0, null), e = Ks(e, s, i, null), p.return = t, e.return = t, p.sibling = e, t.child = p, t.child.memoizedState = oe(i), t.memoizedState = ce, e) : Me(t, I));
    if (u = e.memoizedState, u !== null && (Y = u.dehydrated, Y !== null)) return $e(e, t, I, s, Y, u, i);
    if (p) {
      p = s.fallback, I = t.mode, u = e.child, Y = u.sibling;
      var $ = { mode: "hidden", children: s.children };
      return (I & 1) === 0 && t.child !== u ? (s = t.child, s.childLanes = 0, s.pendingProps = $, t.deletions = null) : (s = cs(u, $), s.subtreeFlags = u.subtreeFlags & 14680064), Y !== null ? p = cs(Y, p) : (p = Ks(p, I, i, null), p.flags |= 2), p.return = t, s.return = t, s.sibling = p, t.child = s, s = p, p = t.child, I = e.child.memoizedState, I = I === null ? oe(i) : { baseLanes: I.baseLanes | i, cachePool: null, transitions: I.transitions }, p.memoizedState = I, p.childLanes = e.childLanes & ~i, t.memoizedState = ce, s;
    }
    return p = e.child, e = p.sibling, s = cs(p, { mode: "visible", children: s.children }), (t.mode & 1) === 0 && (s.lanes = i), s.return = t, s.sibling = null, e !== null && (i = t.deletions, i === null ? (t.deletions = [e], t.flags |= 16) : i.push(e)), t.child = s, t.memoizedState = null, s;
  }
  function Me(e, t) {
    return t = Hc({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function Ve(e, t, i, s) {
    return s !== null && Is(s), fo(t, e.child, null, i), e = Me(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function $e(e, t, i, s, u, p, I) {
    if (i)
      return t.flags & 256 ? (t.flags &= -257, s = Wl(Error(v(422))), Ve(e, t, I, s)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (p = s.fallback, u = t.mode, s = Hc({ mode: "visible", children: s.children }, u, 0, null), p = Ks(p, u, I, null), p.flags |= 2, s.return = t, p.return = t, s.sibling = p, t.child = s, (t.mode & 1) !== 0 && fo(t, e.child, null, I), t.child.memoizedState = oe(I), t.memoizedState = ce, p);
    if ((t.mode & 1) === 0) return Ve(e, t, I, null);
    if (u.data === "$!") {
      if (s = u.nextSibling && u.nextSibling.dataset, s) var Y = s.dgst;
      return s = Y, p = Error(v(419)), s = Wl(p, s, void 0), Ve(e, t, I, s);
    }
    if (Y = (I & e.childLanes) !== 0, y || Y) {
      if (s = Nn, s !== null) {
        switch (I & -I) {
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
        u = (u & (s.suspendedLanes | I)) !== 0 ? 0 : u, u !== 0 && u !== p.retryLane && (p.retryLane = u, ur(e, u), hi(s, e, u, -1));
      }
      return Id(), s = Wl(Error(v(421))), Ve(e, t, I, s);
    }
    return u.data === "$?" ? (t.flags |= 128, t.child = e.child, t = h1.bind(null, e), u._reactRetry = t, null) : (e = p.treeContext, Re = zr(u.nextSibling), sr = t, pt = !0, lr = null, e !== null && (zn[Gn++] = or, zn[Gn++] = Mt, zn[Gn++] = Li, or = e.id, Mt = e.overflow, Li = t), t = Me(t, s.children), t.flags |= 4096, t);
  }
  function Ye(e, t, i) {
    e.lanes |= t;
    var s = e.alternate;
    s !== null && (s.lanes |= t), Al(e.return, t, i);
  }
  function lt(e, t, i, s, u) {
    var p = e.memoizedState;
    p === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: s, tail: i, tailMode: u } : (p.isBackwards = t, p.rendering = null, p.renderingStartTime = 0, p.last = s, p.tail = i, p.tailMode = u);
  }
  function rn(e, t, i) {
    var s = t.pendingProps, u = s.revealOrder, p = s.tail;
    if (V(e, t, s.children, i), s = Ct.current, (s & 2) !== 0) s = s & 1 | 2, t.flags |= 128;
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
    if (vt(Ct, s), (t.mode & 1) === 0) t.memoizedState = null;
    else switch (u) {
      case "forwards":
        for (i = t.child, u = null; i !== null; ) e = i.alternate, e !== null && Qo(e) === null && (u = i), i = i.sibling;
        i = u, i === null ? (u = t.child, t.child = null) : (u = i.sibling, i.sibling = null), lt(t, !1, u, i, p);
        break;
      case "backwards":
        for (i = null, u = t.child, t.child = null; u !== null; ) {
          if (e = u.alternate, e !== null && Qo(e) === null) {
            t.child = u;
            break;
          }
          e = u.sibling, u.sibling = i, i = u, u = e;
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
  function ot(e, t) {
    (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function Tn(e, t, i) {
    if (e !== null && (t.dependencies = e.dependencies), Hs |= t.lanes, (i & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(v(153));
    if (t.child !== null) {
      for (e = t.child, i = cs(e, e.pendingProps), t.child = i, i.return = t; e.sibling !== null; ) e = e.sibling, i = i.sibling = cs(e, e.pendingProps), i.return = t;
      i.sibling = null;
    }
    return t.child;
  }
  function Sd(e, t, i) {
    switch (t.tag) {
      case 3:
        Vn(t), co();
        break;
      case 5:
        Xo(t);
        break;
      case 1:
        kn(t.type) && so(t);
        break;
      case 4:
        Ai(t, t.stateNode.containerInfo);
        break;
      case 10:
        var s = t.type._context, u = t.memoizedProps.value;
        vt(Ds, s._currentValue), s._currentValue = u;
        break;
      case 13:
        if (s = t.memoizedState, s !== null)
          return s.dehydrated !== null ? (vt(Ct, Ct.current & 1), t.flags |= 128, null) : (i & t.child.childLanes) !== 0 ? pe(e, t, i) : (vt(Ct, Ct.current & 1), e = Tn(e, t, i), e !== null ? e.sibling : null);
        vt(Ct, Ct.current & 1);
        break;
      case 19:
        if (s = (i & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (s) return rn(e, t, i);
          t.flags |= 128;
        }
        if (u = t.memoizedState, u !== null && (u.rendering = null, u.tail = null, u.lastEffect = null), vt(Ct, Ct.current), s) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, Ae(e, t, i);
    }
    return Tn(e, t, i);
  }
  var kf, wd, Ef, Pf;
  kf = function(e, t) {
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
  }, wd = function() {
  }, Ef = function(e, t, i, s) {
    var u = e.memoizedProps;
    if (u !== s) {
      e = t.stateNode, tn(_t.current);
      var p = null;
      switch (i) {
        case "input":
          u = Qe(e, u), s = Qe(e, s), p = [];
          break;
        case "select":
          u = U({}, u, { value: void 0 }), s = U({}, s, { value: void 0 }), p = [];
          break;
        case "textarea":
          u = dt(e, u), s = dt(e, s), p = [];
          break;
        default:
          typeof u.onClick != "function" && typeof s.onClick == "function" && (e.onclick = no);
      }
      Bi(i, s);
      var I;
      i = null;
      for (fe in u) if (!s.hasOwnProperty(fe) && u.hasOwnProperty(fe) && u[fe] != null) if (fe === "style") {
        var Y = u[fe];
        for (I in Y) Y.hasOwnProperty(I) && (i || (i = {}), i[I] = "");
      } else fe !== "dangerouslySetInnerHTML" && fe !== "children" && fe !== "suppressContentEditableWarning" && fe !== "suppressHydrationWarning" && fe !== "autoFocus" && (F.hasOwnProperty(fe) ? p || (p = []) : (p = p || []).push(fe, null));
      for (fe in s) {
        var $ = s[fe];
        if (Y = u != null ? u[fe] : void 0, s.hasOwnProperty(fe) && $ !== Y && ($ != null || Y != null)) if (fe === "style") if (Y) {
          for (I in Y) !Y.hasOwnProperty(I) || $ && $.hasOwnProperty(I) || (i || (i = {}), i[I] = "");
          for (I in $) $.hasOwnProperty(I) && Y[I] !== $[I] && (i || (i = {}), i[I] = $[I]);
        } else i || (p || (p = []), p.push(
          fe,
          i
        )), i = $;
        else fe === "dangerouslySetInnerHTML" ? ($ = $ ? $.__html : void 0, Y = Y ? Y.__html : void 0, $ != null && Y !== $ && (p = p || []).push(fe, $)) : fe === "children" ? typeof $ != "string" && typeof $ != "number" || (p = p || []).push(fe, "" + $) : fe !== "suppressContentEditableWarning" && fe !== "suppressHydrationWarning" && (F.hasOwnProperty(fe) ? ($ != null && fe === "onScroll" && wt("scroll", e), p || Y === $ || (p = [])) : (p = p || []).push(fe, $));
      }
      i && (p = p || []).push("style", i);
      var fe = p;
      (t.updateQueue = fe) && (t.flags |= 4);
    }
  }, Pf = function(e, t, i, s) {
    i !== s && (t.flags |= 4);
  };
  function Ba(e, t) {
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
  function bn(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, i = 0, s = 0;
    if (t) for (var u = e.child; u !== null; ) i |= u.lanes | u.childLanes, s |= u.subtreeFlags & 14680064, s |= u.flags & 14680064, u.return = e, u = u.sibling;
    else for (u = e.child; u !== null; ) i |= u.lanes | u.childLanes, s |= u.subtreeFlags, s |= u.flags, u.return = e, u = u.sibling;
    return e.subtreeFlags |= s, e.childLanes = i, t;
  }
  function n1(e, t, i) {
    var s = t.pendingProps;
    switch (fn(t), t.tag) {
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
        return kn(t.type) && Vo(), bn(t), null;
      case 3:
        return s = t.stateNode, Lt(), xt(Cn), xt(vn), En(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), (e === null || e.child === null) && (Os(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, lr !== null && (Ld(lr), lr = null))), wd(e, t), bn(t), null;
      case 5:
        ai(t);
        var u = tn(Ht.current);
        if (i = t.type, e !== null && t.stateNode != null) Ef(e, t, i, s, u), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!s) {
            if (t.stateNode === null) throw Error(v(166));
            return bn(t), null;
          }
          if (e = tn(_t.current), Os(t)) {
            s = t.stateNode, i = t.type;
            var p = t.memoizedProps;
            switch (s[yr] = t, s[Fs] = p, e = (t.mode & 1) !== 0, i) {
              case "dialog":
                wt("cancel", s), wt("close", s);
                break;
              case "iframe":
              case "object":
              case "embed":
                wt("load", s);
                break;
              case "video":
              case "audio":
                for (u = 0; u < Ei.length; u++) wt(Ei[u], s);
                break;
              case "source":
                wt("error", s);
                break;
              case "img":
              case "image":
              case "link":
                wt(
                  "error",
                  s
                ), wt("load", s);
                break;
              case "details":
                wt("toggle", s);
                break;
              case "input":
                We(s, p), wt("invalid", s);
                break;
              case "select":
                s._wrapperState = { wasMultiple: !!p.multiple }, wt("invalid", s);
                break;
              case "textarea":
                wn(s, p), wt("invalid", s);
            }
            Bi(i, p), u = null;
            for (var I in p) if (p.hasOwnProperty(I)) {
              var Y = p[I];
              I === "children" ? typeof Y == "string" ? s.textContent !== Y && (p.suppressHydrationWarning !== !0 && Ns(s.textContent, Y, e), u = ["children", Y]) : typeof Y == "number" && s.textContent !== "" + Y && (p.suppressHydrationWarning !== !0 && Ns(
                s.textContent,
                Y,
                e
              ), u = ["children", "" + Y]) : F.hasOwnProperty(I) && Y != null && I === "onScroll" && wt("scroll", s);
            }
            switch (i) {
              case "input":
                Ee(s), Je(s, p, !0);
                break;
              case "textarea":
                Ee(s), Ln(s);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof p.onClick == "function" && (s.onclick = no);
            }
            s = u, t.updateQueue = s, s !== null && (t.flags |= 4);
          } else {
            I = u.nodeType === 9 ? u : u.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = jt(i)), e === "http://www.w3.org/1999/xhtml" ? i === "script" ? (e = I.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof s.is == "string" ? e = I.createElement(i, { is: s.is }) : (e = I.createElement(i), i === "select" && (I = e, s.multiple ? I.multiple = !0 : s.size && (I.size = s.size))) : e = I.createElementNS(e, i), e[yr] = t, e[Fs] = s, kf(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (I = So(i, s), i) {
                case "dialog":
                  wt("cancel", e), wt("close", e), u = s;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  wt("load", e), u = s;
                  break;
                case "video":
                case "audio":
                  for (u = 0; u < Ei.length; u++) wt(Ei[u], e);
                  u = s;
                  break;
                case "source":
                  wt("error", e), u = s;
                  break;
                case "img":
                case "image":
                case "link":
                  wt(
                    "error",
                    e
                  ), wt("load", e), u = s;
                  break;
                case "details":
                  wt("toggle", e), u = s;
                  break;
                case "input":
                  We(e, s), u = Qe(e, s), wt("invalid", e);
                  break;
                case "option":
                  u = s;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!s.multiple }, u = U({}, s, { value: void 0 }), wt("invalid", e);
                  break;
                case "textarea":
                  wn(e, s), u = dt(e, s), wt("invalid", e);
                  break;
                default:
                  u = s;
              }
              Bi(i, u), Y = u;
              for (p in Y) if (Y.hasOwnProperty(p)) {
                var $ = Y[p];
                p === "style" ? Ar(e, $) : p === "dangerouslySetInnerHTML" ? ($ = $ ? $.__html : void 0, $ != null && yt(e, $)) : p === "children" ? typeof $ == "string" ? (i !== "textarea" || $ !== "") && It(e, $) : typeof $ == "number" && It(e, "" + $) : p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && p !== "autoFocus" && (F.hasOwnProperty(p) ? $ != null && p === "onScroll" && wt("scroll", e) : $ != null && h(e, p, $, I));
              }
              switch (i) {
                case "input":
                  Ee(e), Je(e, s, !1);
                  break;
                case "textarea":
                  Ee(e), Ln(e);
                  break;
                case "option":
                  s.value != null && e.setAttribute("value", "" + re(s.value));
                  break;
                case "select":
                  e.multiple = !!s.multiple, p = s.value, p != null ? Wn(e, !!s.multiple, p, !1) : s.defaultValue != null && Wn(
                    e,
                    !!s.multiple,
                    s.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof u.onClick == "function" && (e.onclick = no);
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
        return bn(t), null;
      case 6:
        if (e && t.stateNode != null) Pf(e, t, e.memoizedProps, s);
        else {
          if (typeof s != "string" && t.stateNode === null) throw Error(v(166));
          if (i = tn(Ht.current), tn(_t.current), Os(t)) {
            if (s = t.stateNode, i = t.memoizedProps, s[yr] = t, (p = s.nodeValue !== i) && (e = sr, e !== null)) switch (e.tag) {
              case 3:
                Ns(s.nodeValue, i, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Ns(s.nodeValue, i, (e.mode & 1) !== 0);
            }
            p && (t.flags |= 4);
          } else s = (i.nodeType === 9 ? i : i.ownerDocument).createTextNode(s), s[yr] = t, t.stateNode = s;
        }
        return bn(t), null;
      case 13:
        if (xt(Ct), s = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (pt && Re !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) Na(), co(), t.flags |= 98560, p = !1;
          else if (p = Os(t), s !== null && s.dehydrated !== null) {
            if (e === null) {
              if (!p) throw Error(v(318));
              if (p = t.memoizedState, p = p !== null ? p.dehydrated : null, !p) throw Error(v(317));
              p[yr] = t;
            } else co(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            bn(t), p = !1;
          } else lr !== null && (Ld(lr), lr = null), p = !0;
          if (!p) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = i, t) : (s = s !== null, s !== (e !== null && e.memoizedState !== null) && s && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (Ct.current & 1) !== 0 ? Sn === 0 && (Sn = 3) : Id())), t.updateQueue !== null && (t.flags |= 4), bn(t), null);
      case 4:
        return Lt(), wd(e, t), e === null && eo(t.stateNode.containerInfo), bn(t), null;
      case 10:
        return Ll(t.type._context), bn(t), null;
      case 17:
        return kn(t.type) && Vo(), bn(t), null;
      case 19:
        if (xt(Ct), p = t.memoizedState, p === null) return bn(t), null;
        if (s = (t.flags & 128) !== 0, I = p.rendering, I === null) if (s) Ba(p, !1);
        else {
          if (Sn !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (I = Qo(e), I !== null) {
              for (t.flags |= 128, Ba(p, !1), s = I.updateQueue, s !== null && (t.updateQueue = s, t.flags |= 4), t.subtreeFlags = 0, s = i, i = t.child; i !== null; ) p = i, e = s, p.flags &= 14680066, I = p.alternate, I === null ? (p.childLanes = 0, p.lanes = e, p.child = null, p.subtreeFlags = 0, p.memoizedProps = null, p.memoizedState = null, p.updateQueue = null, p.dependencies = null, p.stateNode = null) : (p.childLanes = I.childLanes, p.lanes = I.lanes, p.child = I.child, p.subtreeFlags = 0, p.deletions = null, p.memoizedProps = I.memoizedProps, p.memoizedState = I.memoizedState, p.updateQueue = I.updateQueue, p.type = I.type, e = I.dependencies, p.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), i = i.sibling;
              return vt(Ct, Ct.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          p.tail !== null && Bt() > Yl && (t.flags |= 128, s = !0, Ba(p, !1), t.lanes = 4194304);
        }
        else {
          if (!s) if (e = Qo(I), e !== null) {
            if (t.flags |= 128, s = !0, i = e.updateQueue, i !== null && (t.updateQueue = i, t.flags |= 4), Ba(p, !0), p.tail === null && p.tailMode === "hidden" && !I.alternate && !pt) return bn(t), null;
          } else 2 * Bt() - p.renderingStartTime > Yl && i !== 1073741824 && (t.flags |= 128, s = !0, Ba(p, !1), t.lanes = 4194304);
          p.isBackwards ? (I.sibling = t.child, t.child = I) : (i = p.last, i !== null ? i.sibling = I : t.child = I, p.last = I);
        }
        return p.tail !== null ? (t = p.tail, p.rendering = t, p.tail = t.sibling, p.renderingStartTime = Bt(), t.sibling = null, i = Ct.current, vt(Ct, s ? i & 1 | 2 : i & 1), t) : (bn(t), null);
      case 22:
      case 23:
        return Od(), s = t.memoizedState !== null, e !== null && e.memoizedState !== null !== s && (t.flags |= 8192), s && (t.mode & 1) !== 0 ? (Lr & 1073741824) !== 0 && (bn(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : bn(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(v(156, t.tag));
  }
  function r1(e, t) {
    switch (fn(t), t.tag) {
      case 1:
        return kn(t.type) && Vo(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Lt(), xt(Cn), xt(vn), En(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return ai(t), null;
      case 13:
        if (xt(Ct), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(v(340));
          co();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return xt(Ct), null;
      case 4:
        return Lt(), null;
      case 10:
        return Ll(t.type._context), null;
      case 22:
      case 23:
        return Od(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Fc = !1, Jn = !1, i1 = typeof WeakSet == "function" ? WeakSet : Set, Oe = null;
  function ql(e, t) {
    var i = e.ref;
    if (i !== null) if (typeof i == "function") try {
      i(null);
    } catch (s) {
      Xt(e, t, s);
    }
    else i.current = null;
  }
  function xd(e, t, i) {
    try {
      i();
    } catch (s) {
      Xt(e, t, s);
    }
  }
  var Rf = !1;
  function o1(e, t) {
    if (Ca = il, e = $t(), zo(e)) {
      if ("selectionStart" in e) var i = { start: e.selectionStart, end: e.selectionEnd };
      else e: {
        i = (i = e.ownerDocument) && i.defaultView || window;
        var s = i.getSelection && i.getSelection();
        if (s && s.rangeCount !== 0) {
          i = s.anchorNode;
          var u = s.anchorOffset, p = s.focusNode;
          s = s.focusOffset;
          try {
            i.nodeType, p.nodeType;
          } catch {
            i = null;
            break e;
          }
          var I = 0, Y = -1, $ = -1, fe = 0, _e = 0, we = e, ve = null;
          t: for (; ; ) {
            for (var Fe; we !== i || u !== 0 && we.nodeType !== 3 || (Y = I + u), we !== p || s !== 0 && we.nodeType !== 3 || ($ = I + s), we.nodeType === 3 && (I += we.nodeValue.length), (Fe = we.firstChild) !== null; )
              ve = we, we = Fe;
            for (; ; ) {
              if (we === e) break t;
              if (ve === i && ++fe === u && (Y = I), ve === p && ++_e === s && ($ = I), (Fe = we.nextSibling) !== null) break;
              we = ve, ve = we.parentNode;
            }
            we = Fe;
          }
          i = Y === -1 || $ === -1 ? null : { start: Y, end: $ };
        } else i = null;
      }
      i = i || { start: 0, end: 0 };
    } else i = null;
    for (ka = { focusedElem: e, selectionRange: i }, il = !1, Oe = t; Oe !== null; ) if (t = Oe, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, Oe = e;
    else for (; Oe !== null; ) {
      t = Oe;
      try {
        var Ie = t.alternate;
        if ((t.flags & 1024) !== 0) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (Ie !== null) {
              var ze = Ie.memoizedProps, on = Ie.memoizedState, le = t.stateNode, te = le.getSnapshotBeforeUpdate(t.elementType === t.type ? ze : _n(t.type, ze), on);
              le.__reactInternalSnapshotBeforeUpdate = te;
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
            throw Error(v(163));
        }
      } catch (ke) {
        Xt(t, t.return, ke);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, Oe = e;
        break;
      }
      Oe = t.return;
    }
    return Ie = Rf, Rf = !1, Ie;
  }
  function Va(e, t, i) {
    var s = t.updateQueue;
    if (s = s !== null ? s.lastEffect : null, s !== null) {
      var u = s = s.next;
      do {
        if ((u.tag & e) === e) {
          var p = u.destroy;
          u.destroy = void 0, p !== void 0 && xd(t, i, p);
        }
        u = u.next;
      } while (u !== s);
    }
  }
  function Lc(e, t) {
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
  function Cd(e) {
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
  function Tf(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Tf(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[yr], delete t[Fs], delete t[kl], delete t[mc], delete t[yc])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function Nf(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Mf(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Nf(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function kd(e, t, i) {
    var s = e.tag;
    if (s === 5 || s === 6) e = e.stateNode, t ? i.nodeType === 8 ? i.parentNode.insertBefore(e, t) : i.insertBefore(e, t) : (i.nodeType === 8 ? (t = i.parentNode, t.insertBefore(e, i)) : (t = i, t.appendChild(e)), i = i._reactRootContainer, i != null || t.onclick !== null || (t.onclick = no));
    else if (s !== 4 && (e = e.child, e !== null)) for (kd(e, t, i), e = e.sibling; e !== null; ) kd(e, t, i), e = e.sibling;
  }
  function Ed(e, t, i) {
    var s = e.tag;
    if (s === 5 || s === 6) e = e.stateNode, t ? i.insertBefore(e, t) : i.appendChild(e);
    else if (s !== 4 && (e = e.child, e !== null)) for (Ed(e, t, i), e = e.sibling; e !== null; ) Ed(e, t, i), e = e.sibling;
  }
  var Hn = null, di = !1;
  function os(e, t, i) {
    for (i = i.child; i !== null; ) Ff(e, t, i), i = i.sibling;
  }
  function Ff(e, t, i) {
    if (pn && typeof pn.onCommitFiberUnmount == "function") try {
      pn.onCommitFiberUnmount(Zr, i);
    } catch {
    }
    switch (i.tag) {
      case 5:
        Jn || ql(i, t);
      case 6:
        var s = Hn, u = di;
        Hn = null, os(e, t, i), Hn = s, di = u, Hn !== null && (di ? (e = Hn, i = i.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(i) : e.removeChild(i)) : Hn.removeChild(i.stateNode));
        break;
      case 18:
        Hn !== null && (di ? (e = Hn, i = i.stateNode, e.nodeType === 8 ? Cl(e.parentNode, i) : e.nodeType === 1 && Cl(e, i), Kn(e)) : Cl(Hn, i.stateNode));
        break;
      case 4:
        s = Hn, u = di, Hn = i.stateNode.containerInfo, di = !0, os(e, t, i), Hn = s, di = u;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Jn && (s = i.updateQueue, s !== null && (s = s.lastEffect, s !== null))) {
          u = s = s.next;
          do {
            var p = u, I = p.destroy;
            p = p.tag, I !== void 0 && ((p & 2) !== 0 || (p & 4) !== 0) && xd(i, t, I), u = u.next;
          } while (u !== s);
        }
        os(e, t, i);
        break;
      case 1:
        if (!Jn && (ql(i, t), s = i.stateNode, typeof s.componentWillUnmount == "function")) try {
          s.props = i.memoizedProps, s.state = i.memoizedState, s.componentWillUnmount();
        } catch (Y) {
          Xt(i, t, Y);
        }
        os(e, t, i);
        break;
      case 21:
        os(e, t, i);
        break;
      case 22:
        i.mode & 1 ? (Jn = (s = Jn) || i.memoizedState !== null, os(e, t, i), Jn = s) : os(e, t, i);
        break;
      default:
        os(e, t, i);
    }
  }
  function Lf(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var i = e.stateNode;
      i === null && (i = e.stateNode = new i1()), t.forEach(function(s) {
        var u = p1.bind(null, e, s);
        i.has(s) || (i.add(s), s.then(u, u));
      });
    }
  }
  function fi(e, t) {
    var i = t.deletions;
    if (i !== null) for (var s = 0; s < i.length; s++) {
      var u = i[s];
      try {
        var p = e, I = t, Y = I;
        e: for (; Y !== null; ) {
          switch (Y.tag) {
            case 5:
              Hn = Y.stateNode, di = !1;
              break e;
            case 3:
              Hn = Y.stateNode.containerInfo, di = !0;
              break e;
            case 4:
              Hn = Y.stateNode.containerInfo, di = !0;
              break e;
          }
          Y = Y.return;
        }
        if (Hn === null) throw Error(v(160));
        Ff(p, I, u), Hn = null, di = !1;
        var $ = u.alternate;
        $ !== null && ($.return = null), u.return = null;
      } catch (fe) {
        Xt(u, t, fe);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Af(t, e), t = t.sibling;
  }
  function Af(e, t) {
    var i = e.alternate, s = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (fi(t, e), Gi(e), s & 4) {
          try {
            Va(3, e, e.return), Lc(3, e);
          } catch (ze) {
            Xt(e, e.return, ze);
          }
          try {
            Va(5, e, e.return);
          } catch (ze) {
            Xt(e, e.return, ze);
          }
        }
        break;
      case 1:
        fi(t, e), Gi(e), s & 512 && i !== null && ql(i, i.return);
        break;
      case 5:
        if (fi(t, e), Gi(e), s & 512 && i !== null && ql(i, i.return), e.flags & 32) {
          var u = e.stateNode;
          try {
            It(u, "");
          } catch (ze) {
            Xt(e, e.return, ze);
          }
        }
        if (s & 4 && (u = e.stateNode, u != null)) {
          var p = e.memoizedProps, I = i !== null ? i.memoizedProps : p, Y = e.type, $ = e.updateQueue;
          if (e.updateQueue = null, $ !== null) try {
            Y === "input" && p.type === "radio" && p.name != null && At(u, p), So(Y, I);
            var fe = So(Y, p);
            for (I = 0; I < $.length; I += 2) {
              var _e = $[I], we = $[I + 1];
              _e === "style" ? Ar(u, we) : _e === "dangerouslySetInnerHTML" ? yt(u, we) : _e === "children" ? It(u, we) : h(u, _e, we, fe);
            }
            switch (Y) {
              case "input":
                Ze(u, p);
                break;
              case "textarea":
                bt(u, p);
                break;
              case "select":
                var ve = u._wrapperState.wasMultiple;
                u._wrapperState.wasMultiple = !!p.multiple;
                var Fe = p.value;
                Fe != null ? Wn(u, !!p.multiple, Fe, !1) : ve !== !!p.multiple && (p.defaultValue != null ? Wn(
                  u,
                  !!p.multiple,
                  p.defaultValue,
                  !0
                ) : Wn(u, !!p.multiple, p.multiple ? [] : "", !1));
            }
            u[Fs] = p;
          } catch (ze) {
            Xt(e, e.return, ze);
          }
        }
        break;
      case 6:
        if (fi(t, e), Gi(e), s & 4) {
          if (e.stateNode === null) throw Error(v(162));
          u = e.stateNode, p = e.memoizedProps;
          try {
            u.nodeValue = p;
          } catch (ze) {
            Xt(e, e.return, ze);
          }
        }
        break;
      case 3:
        if (fi(t, e), Gi(e), s & 4 && i !== null && i.memoizedState.isDehydrated) try {
          Kn(t.containerInfo);
        } catch (ze) {
          Xt(e, e.return, ze);
        }
        break;
      case 4:
        fi(t, e), Gi(e);
        break;
      case 13:
        fi(t, e), Gi(e), u = e.child, u.flags & 8192 && (p = u.memoizedState !== null, u.stateNode.isHidden = p, !p || u.alternate !== null && u.alternate.memoizedState !== null || (Td = Bt())), s & 4 && Lf(e);
        break;
      case 22:
        if (_e = i !== null && i.memoizedState !== null, e.mode & 1 ? (Jn = (fe = Jn) || _e, fi(t, e), Jn = fe) : fi(t, e), Gi(e), s & 8192) {
          if (fe = e.memoizedState !== null, (e.stateNode.isHidden = fe) && !_e && (e.mode & 1) !== 0) for (Oe = e, _e = e.child; _e !== null; ) {
            for (we = Oe = _e; Oe !== null; ) {
              switch (ve = Oe, Fe = ve.child, ve.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Va(4, ve, ve.return);
                  break;
                case 1:
                  ql(ve, ve.return);
                  var Ie = ve.stateNode;
                  if (typeof Ie.componentWillUnmount == "function") {
                    s = ve, i = ve.return;
                    try {
                      t = s, Ie.props = t.memoizedProps, Ie.state = t.memoizedState, Ie.componentWillUnmount();
                    } catch (ze) {
                      Xt(s, i, ze);
                    }
                  }
                  break;
                case 5:
                  ql(ve, ve.return);
                  break;
                case 22:
                  if (ve.memoizedState !== null) {
                    Df(we);
                    continue;
                  }
              }
              Fe !== null ? (Fe.return = ve, Oe = Fe) : Df(we);
            }
            _e = _e.sibling;
          }
          e: for (_e = null, we = e; ; ) {
            if (we.tag === 5) {
              if (_e === null) {
                _e = we;
                try {
                  u = we.stateNode, fe ? (p = u.style, typeof p.setProperty == "function" ? p.setProperty("display", "none", "important") : p.display = "none") : (Y = we.stateNode, $ = we.memoizedProps.style, I = $ != null && $.hasOwnProperty("display") ? $.display : null, Y.style.display = Ui("display", I));
                } catch (ze) {
                  Xt(e, e.return, ze);
                }
              }
            } else if (we.tag === 6) {
              if (_e === null) try {
                we.stateNode.nodeValue = fe ? "" : we.memoizedProps;
              } catch (ze) {
                Xt(e, e.return, ze);
              }
            } else if ((we.tag !== 22 && we.tag !== 23 || we.memoizedState === null || we === e) && we.child !== null) {
              we.child.return = we, we = we.child;
              continue;
            }
            if (we === e) break e;
            for (; we.sibling === null; ) {
              if (we.return === null || we.return === e) break e;
              _e === we && (_e = null), we = we.return;
            }
            _e === we && (_e = null), we.sibling.return = we.return, we = we.sibling;
          }
        }
        break;
      case 19:
        fi(t, e), Gi(e), s & 4 && Lf(e);
        break;
      case 21:
        break;
      default:
        fi(
          t,
          e
        ), Gi(e);
    }
  }
  function Gi(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var i = e.return; i !== null; ) {
            if (Nf(i)) {
              var s = i;
              break e;
            }
            i = i.return;
          }
          throw Error(v(160));
        }
        switch (s.tag) {
          case 5:
            var u = s.stateNode;
            s.flags & 32 && (It(u, ""), s.flags &= -33);
            var p = Mf(e);
            Ed(e, p, u);
            break;
          case 3:
          case 4:
            var I = s.stateNode.containerInfo, Y = Mf(e);
            kd(e, Y, I);
            break;
          default:
            throw Error(v(161));
        }
      } catch ($) {
        Xt(e, e.return, $);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function s1(e, t, i) {
    Oe = e, Of(e);
  }
  function Of(e, t, i) {
    for (var s = (e.mode & 1) !== 0; Oe !== null; ) {
      var u = Oe, p = u.child;
      if (u.tag === 22 && s) {
        var I = u.memoizedState !== null || Fc;
        if (!I) {
          var Y = u.alternate, $ = Y !== null && Y.memoizedState !== null || Jn;
          Y = Fc;
          var fe = Jn;
          if (Fc = I, (Jn = $) && !fe) for (Oe = u; Oe !== null; ) I = Oe, $ = I.child, I.tag === 22 && I.memoizedState !== null ? zf(u) : $ !== null ? ($.return = I, Oe = $) : zf(u);
          for (; p !== null; ) Oe = p, Of(p), p = p.sibling;
          Oe = u, Fc = Y, Jn = fe;
        }
        If(e);
      } else (u.subtreeFlags & 8772) !== 0 && p !== null ? (p.return = u, Oe = p) : If(e);
    }
  }
  function If(e) {
    for (; Oe !== null; ) {
      var t = Oe;
      if ((t.flags & 8772) !== 0) {
        var i = t.alternate;
        try {
          if ((t.flags & 8772) !== 0) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Jn || Lc(5, t);
              break;
            case 1:
              var s = t.stateNode;
              if (t.flags & 4 && !Jn) if (i === null) s.componentDidMount();
              else {
                var u = t.elementType === t.type ? i.memoizedProps : _n(t.type, i.memoizedProps);
                s.componentDidUpdate(u, i.memoizedState, s.__reactInternalSnapshotBeforeUpdate);
              }
              var p = t.updateQueue;
              p !== null && Gt(t, p, s);
              break;
            case 3:
              var I = t.updateQueue;
              if (I !== null) {
                if (i = null, t.child !== null) switch (t.child.tag) {
                  case 5:
                    i = t.child.stateNode;
                    break;
                  case 1:
                    i = t.child.stateNode;
                }
                Gt(t, I, i);
              }
              break;
            case 5:
              var Y = t.stateNode;
              if (i === null && t.flags & 4) {
                i = Y;
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
                  var _e = fe.memoizedState;
                  if (_e !== null) {
                    var we = _e.dehydrated;
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
              throw Error(v(163));
          }
          Jn || t.flags & 512 && Cd(t);
        } catch (ve) {
          Xt(t, t.return, ve);
        }
      }
      if (t === e) {
        Oe = null;
        break;
      }
      if (i = t.sibling, i !== null) {
        i.return = t.return, Oe = i;
        break;
      }
      Oe = t.return;
    }
  }
  function Df(e) {
    for (; Oe !== null; ) {
      var t = Oe;
      if (t === e) {
        Oe = null;
        break;
      }
      var i = t.sibling;
      if (i !== null) {
        i.return = t.return, Oe = i;
        break;
      }
      Oe = t.return;
    }
  }
  function zf(e) {
    for (; Oe !== null; ) {
      var t = Oe;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var i = t.return;
            try {
              Lc(4, t);
            } catch ($) {
              Xt(t, i, $);
            }
            break;
          case 1:
            var s = t.stateNode;
            if (typeof s.componentDidMount == "function") {
              var u = t.return;
              try {
                s.componentDidMount();
              } catch ($) {
                Xt(t, u, $);
              }
            }
            var p = t.return;
            try {
              Cd(t);
            } catch ($) {
              Xt(t, p, $);
            }
            break;
          case 5:
            var I = t.return;
            try {
              Cd(t);
            } catch ($) {
              Xt(t, I, $);
            }
        }
      } catch ($) {
        Xt(t, t.return, $);
      }
      if (t === e) {
        Oe = null;
        break;
      }
      var Y = t.sibling;
      if (Y !== null) {
        Y.return = t.return, Oe = Y;
        break;
      }
      Oe = t.return;
    }
  }
  var l1 = Math.ceil, Ac = R.ReactCurrentDispatcher, Pd = R.ReactCurrentOwner, Kr = R.ReactCurrentBatchConfig, ct = 0, Nn = null, hn = null, jn = 0, Lr = 0, Kl = oi(0), Sn = 0, Ha = null, Hs = 0, Oc = 0, Rd = 0, ja = null, Sr = null, Td = 0, Yl = 1 / 0, mo = null, Ic = !1, Nd = null, ss = null, Dc = !1, ls = null, zc = 0, Wa = 0, Md = null, Gc = -1, Uc = 0;
  function dr() {
    return (ct & 6) !== 0 ? Bt() : Gc !== -1 ? Gc : Gc = Bt();
  }
  function as(e) {
    return (e.mode & 1) === 0 ? 1 : (ct & 2) !== 0 && jn !== 0 ? jn & -jn : Ma.transition !== null ? (Uc === 0 && (Uc = ta()), Uc) : (e = ut, e !== 0 || (e = window.event, e = e === void 0 ? 16 : $u(e.type)), e);
  }
  function hi(e, t, i, s) {
    if (50 < Wa) throw Wa = 0, Md = null, Error(v(185));
    ms(e, i, s), ((ct & 2) === 0 || e !== Nn) && (e === Nn && ((ct & 2) === 0 && (Oc |= i), Sn === 4 && us(e, jn)), wr(e, s), i === 1 && ct === 0 && (t.mode & 1) === 0 && (Yl = Bt() + 500, Ho && Ni()));
  }
  function wr(e, t) {
    var i = e.callbackNode;
    Xu(e, t);
    var s = ji(e, e === Nn ? jn : 0);
    if (s === 0) i !== null && Ku(i), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = s & -s, e.callbackPriority !== t) {
      if (i != null && Ku(i), t === 1) e.tag === 0 ? si(Uf.bind(null, e)) : As(Uf.bind(null, e)), pc(function() {
        (ct & 6) === 0 && Ni();
      }), i = null;
      else {
        switch (ys(s)) {
          case 1:
            i = Hi;
            break;
          case 4:
            i = Js;
            break;
          case 16:
            i = ko;
            break;
          case 536870912:
            i = Zs;
            break;
          default:
            i = ko;
        }
        i = Yf(i, Gf.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = i;
    }
  }
  function Gf(e, t) {
    if (Gc = -1, Uc = 0, (ct & 6) !== 0) throw Error(v(327));
    var i = e.callbackNode;
    if (Xl() && e.callbackNode !== i) return null;
    var s = ji(e, e === Nn ? jn : 0);
    if (s === 0) return null;
    if ((s & 30) !== 0 || (s & e.expiredLanes) !== 0 || t) t = Bc(e, s);
    else {
      t = s;
      var u = ct;
      ct |= 2;
      var p = Vf();
      (Nn !== e || jn !== t) && (mo = null, Yl = Bt() + 500, Ws(e, t));
      do
        try {
          c1();
          break;
        } catch (Y) {
          Bf(e, Y);
        }
      while (!0);
      Fl(), Ac.current = p, ct = u, hn !== null ? t = 0 : (Nn = null, jn = 0, t = Sn);
    }
    if (t !== 0) {
      if (t === 2 && (u = Eo(e), u !== 0 && (s = u, t = Fd(e, u))), t === 1) throw i = Ha, Ws(e, 0), us(e, s), wr(e, Bt()), i;
      if (t === 6) us(e, s);
      else {
        if (u = e.current.alternate, (s & 30) === 0 && !a1(u) && (t = Bc(e, s), t === 2 && (p = Eo(e), p !== 0 && (s = p, t = Fd(e, p))), t === 1)) throw i = Ha, Ws(e, 0), us(e, s), wr(e, Bt()), i;
        switch (e.finishedWork = u, e.finishedLanes = s, t) {
          case 0:
          case 1:
            throw Error(v(345));
          case 2:
            qs(e, Sr, mo);
            break;
          case 3:
            if (us(e, s), (s & 130023424) === s && (t = Td + 500 - Bt(), 10 < t)) {
              if (ji(e, 0) !== 0) break;
              if (u = e.suspendedLanes, (u & s) !== s) {
                dr(), e.pingedLanes |= e.suspendedLanes & u;
                break;
              }
              e.timeoutHandle = ir(qs.bind(null, e, Sr, mo), t);
              break;
            }
            qs(e, Sr, mo);
            break;
          case 4:
            if (us(e, s), (s & 4194240) === s) break;
            for (t = e.eventTimes, u = -1; 0 < s; ) {
              var I = 31 - nt(s);
              p = 1 << I, I = t[I], I > u && (u = I), s &= ~p;
            }
            if (s = u, s = Bt() - s, s = (120 > s ? 120 : 480 > s ? 480 : 1080 > s ? 1080 : 1920 > s ? 1920 : 3e3 > s ? 3e3 : 4320 > s ? 4320 : 1960 * l1(s / 1960)) - s, 10 < s) {
              e.timeoutHandle = ir(qs.bind(null, e, Sr, mo), s);
              break;
            }
            qs(e, Sr, mo);
            break;
          case 5:
            qs(e, Sr, mo);
            break;
          default:
            throw Error(v(329));
        }
      }
    }
    return wr(e, Bt()), e.callbackNode === i ? Gf.bind(null, e) : null;
  }
  function Fd(e, t) {
    var i = ja;
    return e.current.memoizedState.isDehydrated && (Ws(e, t).flags |= 256), e = Bc(e, t), e !== 2 && (t = Sr, Sr = i, t !== null && Ld(t)), e;
  }
  function Ld(e) {
    Sr === null ? Sr = e : Sr.push.apply(Sr, e);
  }
  function a1(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var i = t.updateQueue;
        if (i !== null && (i = i.stores, i !== null)) for (var s = 0; s < i.length; s++) {
          var u = i[s], p = u.getSnapshot;
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
  function us(e, t) {
    for (t &= ~Rd, t &= ~Oc, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var i = 31 - nt(t), s = 1 << i;
      e[i] = -1, t &= ~s;
    }
  }
  function Uf(e) {
    if ((ct & 6) !== 0) throw Error(v(327));
    Xl();
    var t = ji(e, 0);
    if ((t & 1) === 0) return wr(e, Bt()), null;
    var i = Bc(e, t);
    if (e.tag !== 0 && i === 2) {
      var s = Eo(e);
      s !== 0 && (t = s, i = Fd(e, s));
    }
    if (i === 1) throw i = Ha, Ws(e, 0), us(e, t), wr(e, Bt()), i;
    if (i === 6) throw Error(v(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, qs(e, Sr, mo), wr(e, Bt()), null;
  }
  function Ad(e, t) {
    var i = ct;
    ct |= 1;
    try {
      return e(t);
    } finally {
      ct = i, ct === 0 && (Yl = Bt() + 500, Ho && Ni());
    }
  }
  function js(e) {
    ls !== null && ls.tag === 0 && (ct & 6) === 0 && Xl();
    var t = ct;
    ct |= 1;
    var i = Kr.transition, s = ut;
    try {
      if (Kr.transition = null, ut = 1, e) return e();
    } finally {
      ut = s, Kr.transition = i, ct = t, (ct & 6) === 0 && Ni();
    }
  }
  function Od() {
    Lr = Kl.current, xt(Kl);
  }
  function Ws(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var i = e.timeoutHandle;
    if (i !== -1 && (e.timeoutHandle = -1, Pa(i)), hn !== null) for (i = hn.return; i !== null; ) {
      var s = i;
      switch (fn(s), s.tag) {
        case 1:
          s = s.type.childContextTypes, s != null && Vo();
          break;
        case 3:
          Lt(), xt(Cn), xt(vn), En();
          break;
        case 5:
          ai(s);
          break;
        case 4:
          Lt();
          break;
        case 13:
          xt(Ct);
          break;
        case 19:
          xt(Ct);
          break;
        case 10:
          Ll(s.type._context);
          break;
        case 22:
        case 23:
          Od();
      }
      i = i.return;
    }
    if (Nn = e, hn = e = cs(e.current, null), jn = Lr = t, Sn = 0, Ha = null, Rd = Oc = Hs = 0, Sr = ja = null, Vr !== null) {
      for (t = 0; t < Vr.length; t++) if (i = Vr[t], s = i.interleaved, s !== null) {
        i.interleaved = null;
        var u = s.next, p = i.pending;
        if (p !== null) {
          var I = p.next;
          p.next = u, s.next = I;
        }
        i.pending = s;
      }
      Vr = null;
    }
    return e;
  }
  function Bf(e, t) {
    do {
      var i = hn;
      try {
        if (Fl(), bo.current = ts, Fr) {
          for (var s = mt.memoizedState; s !== null; ) {
            var u = s.queue;
            u !== null && (u.pending = null), s = s.next;
          }
          Fr = !1;
        }
        if (Bn = 0, Kt = Ut = mt = null, Oi = !1, _r = 0, Pd.current = null, i === null || i.return === null) {
          Sn = 1, Ha = t, hn = null;
          break;
        }
        e: {
          var p = e, I = i.return, Y = i, $ = t;
          if (t = jn, Y.flags |= 32768, $ !== null && typeof $ == "object" && typeof $.then == "function") {
            var fe = $, _e = Y, we = _e.tag;
            if ((_e.mode & 1) === 0 && (we === 0 || we === 11 || we === 15)) {
              var ve = _e.alternate;
              ve ? (_e.updateQueue = ve.updateQueue, _e.memoizedState = ve.memoizedState, _e.lanes = ve.lanes) : (_e.updateQueue = null, _e.memoizedState = null);
            }
            var Fe = o(I);
            if (Fe !== null) {
              Fe.flags &= -257, a(Fe, I, Y, p, t), Fe.mode & 1 && r(p, fe, t), t = Fe, $ = fe;
              var Ie = t.updateQueue;
              if (Ie === null) {
                var ze = /* @__PURE__ */ new Set();
                ze.add($), t.updateQueue = ze;
              } else Ie.add($);
              break e;
            } else {
              if ((t & 1) === 0) {
                r(p, fe, t), Id();
                break e;
              }
              $ = Error(v(426));
            }
          } else if (pt && Y.mode & 1) {
            var on = o(I);
            if (on !== null) {
              (on.flags & 65536) === 0 && (on.flags |= 256), a(on, I, Y, p, t), Is(go($, Y));
              break e;
            }
          }
          p = $ = go($, Y), Sn !== 4 && (Sn = 2), ja === null ? ja = [p] : ja.push(p), p = I;
          do {
            switch (p.tag) {
              case 3:
                p.flags |= 65536, t &= -t, p.lanes |= t;
                var le = Mc(p, $, t);
                Us(p, le);
                break e;
              case 1:
                Y = $;
                var te = p.type, ue = p.stateNode;
                if ((p.flags & 128) === 0 && (typeof te.getDerivedStateFromError == "function" || ue !== null && typeof ue.componentDidCatch == "function" && (ss === null || !ss.has(ue)))) {
                  p.flags |= 65536, t &= -t, p.lanes |= t;
                  var ke = n(p, Y, t);
                  Us(p, ke);
                  break e;
                }
            }
            p = p.return;
          } while (p !== null);
        }
        jf(i);
      } catch (Ge) {
        t = Ge, hn === i && i !== null && (hn = i = i.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Vf() {
    var e = Ac.current;
    return Ac.current = ts, e === null ? ts : e;
  }
  function Id() {
    (Sn === 0 || Sn === 3 || Sn === 2) && (Sn = 4), Nn === null || (Hs & 268435455) === 0 && (Oc & 268435455) === 0 || us(Nn, jn);
  }
  function Bc(e, t) {
    var i = ct;
    ct |= 2;
    var s = Vf();
    (Nn !== e || jn !== t) && (mo = null, Ws(e, t));
    do
      try {
        u1();
        break;
      } catch (u) {
        Bf(e, u);
      }
    while (!0);
    if (Fl(), ct = i, Ac.current = s, hn !== null) throw Error(v(261));
    return Nn = null, jn = 0, Sn;
  }
  function u1() {
    for (; hn !== null; ) Hf(hn);
  }
  function c1() {
    for (; hn !== null && !ud(); ) Hf(hn);
  }
  function Hf(e) {
    var t = Kf(e.alternate, e, Lr);
    e.memoizedProps = e.pendingProps, t === null ? jf(e) : hn = t, Pd.current = null;
  }
  function jf(e) {
    var t = e;
    do {
      var i = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (i = n1(i, t, Lr), i !== null) {
          hn = i;
          return;
        }
      } else {
        if (i = r1(i, t), i !== null) {
          i.flags &= 32767, hn = i;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          Sn = 6, hn = null;
          return;
        }
      }
      if (t = t.sibling, t !== null) {
        hn = t;
        return;
      }
      hn = t = e;
    } while (t !== null);
    Sn === 0 && (Sn = 5);
  }
  function qs(e, t, i) {
    var s = ut, u = Kr.transition;
    try {
      Kr.transition = null, ut = 1, d1(e, t, i, s);
    } finally {
      Kr.transition = u, ut = s;
    }
    return null;
  }
  function d1(e, t, i, s) {
    do
      Xl();
    while (ls !== null);
    if ((ct & 6) !== 0) throw Error(v(327));
    i = e.finishedWork;
    var u = e.finishedLanes;
    if (i === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, i === e.current) throw Error(v(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var p = i.lanes | i.childLanes;
    if (fd(e, p), e === Nn && (hn = Nn = null, jn = 0), (i.subtreeFlags & 2064) === 0 && (i.flags & 2064) === 0 || Dc || (Dc = !0, Yf(ko, function() {
      return Xl(), null;
    })), p = (i.flags & 15990) !== 0, (i.subtreeFlags & 15990) !== 0 || p) {
      p = Kr.transition, Kr.transition = null;
      var I = ut;
      ut = 1;
      var Y = ct;
      ct |= 4, Pd.current = null, o1(e, i), Af(i, e), Es(ka), il = !!Ca, ka = Ca = null, e.current = i, s1(i), cd(), ct = Y, ut = I, Kr.transition = p;
    } else e.current = i;
    if (Dc && (Dc = !1, ls = e, zc = u), p = e.pendingLanes, p === 0 && (ss = null), Et(i.stateNode), wr(e, Bt()), t !== null) for (s = e.onRecoverableError, i = 0; i < t.length; i++) u = t[i], s(u.value, { componentStack: u.stack, digest: u.digest });
    if (Ic) throw Ic = !1, e = Nd, Nd = null, e;
    return (zc & 1) !== 0 && e.tag !== 0 && Xl(), p = e.pendingLanes, (p & 1) !== 0 ? e === Md ? Wa++ : (Wa = 0, Md = e) : Wa = 0, Ni(), null;
  }
  function Xl() {
    if (ls !== null) {
      var e = ys(zc), t = Kr.transition, i = ut;
      try {
        if (Kr.transition = null, ut = 16 > e ? 16 : e, ls === null) var s = !1;
        else {
          if (e = ls, ls = null, zc = 0, (ct & 6) !== 0) throw Error(v(331));
          var u = ct;
          for (ct |= 4, Oe = e.current; Oe !== null; ) {
            var p = Oe, I = p.child;
            if ((Oe.flags & 16) !== 0) {
              var Y = p.deletions;
              if (Y !== null) {
                for (var $ = 0; $ < Y.length; $++) {
                  var fe = Y[$];
                  for (Oe = fe; Oe !== null; ) {
                    var _e = Oe;
                    switch (_e.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Va(8, _e, p);
                    }
                    var we = _e.child;
                    if (we !== null) we.return = _e, Oe = we;
                    else for (; Oe !== null; ) {
                      _e = Oe;
                      var ve = _e.sibling, Fe = _e.return;
                      if (Tf(_e), _e === fe) {
                        Oe = null;
                        break;
                      }
                      if (ve !== null) {
                        ve.return = Fe, Oe = ve;
                        break;
                      }
                      Oe = Fe;
                    }
                  }
                }
                var Ie = p.alternate;
                if (Ie !== null) {
                  var ze = Ie.child;
                  if (ze !== null) {
                    Ie.child = null;
                    do {
                      var on = ze.sibling;
                      ze.sibling = null, ze = on;
                    } while (ze !== null);
                  }
                }
                Oe = p;
              }
            }
            if ((p.subtreeFlags & 2064) !== 0 && I !== null) I.return = p, Oe = I;
            else e: for (; Oe !== null; ) {
              if (p = Oe, (p.flags & 2048) !== 0) switch (p.tag) {
                case 0:
                case 11:
                case 15:
                  Va(9, p, p.return);
              }
              var le = p.sibling;
              if (le !== null) {
                le.return = p.return, Oe = le;
                break e;
              }
              Oe = p.return;
            }
          }
          var te = e.current;
          for (Oe = te; Oe !== null; ) {
            I = Oe;
            var ue = I.child;
            if ((I.subtreeFlags & 2064) !== 0 && ue !== null) ue.return = I, Oe = ue;
            else e: for (I = te; Oe !== null; ) {
              if (Y = Oe, (Y.flags & 2048) !== 0) try {
                switch (Y.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Lc(9, Y);
                }
              } catch (Ge) {
                Xt(Y, Y.return, Ge);
              }
              if (Y === I) {
                Oe = null;
                break e;
              }
              var ke = Y.sibling;
              if (ke !== null) {
                ke.return = Y.return, Oe = ke;
                break e;
              }
              Oe = Y.return;
            }
          }
          if (ct = u, Ni(), pn && typeof pn.onPostCommitFiberRoot == "function") try {
            pn.onPostCommitFiberRoot(Zr, e);
          } catch {
          }
          s = !0;
        }
        return s;
      } finally {
        ut = i, Kr.transition = t;
      }
    }
    return !1;
  }
  function Wf(e, t, i) {
    t = go(i, t), t = Mc(e, t, 1), e = Wr(e, t, 1), t = dr(), e !== null && (ms(e, 1, t), wr(e, t));
  }
  function Xt(e, t, i) {
    if (e.tag === 3) Wf(e, e, i);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        Wf(t, e, i);
        break;
      } else if (t.tag === 1) {
        var s = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && (ss === null || !ss.has(s))) {
          e = go(i, e), e = n(t, e, 1), t = Wr(t, e, 1), e = dr(), t !== null && (ms(t, 1, e), wr(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function f1(e, t, i) {
    var s = e.pingCache;
    s !== null && s.delete(t), t = dr(), e.pingedLanes |= e.suspendedLanes & i, Nn === e && (jn & i) === i && (Sn === 4 || Sn === 3 && (jn & 130023424) === jn && 500 > Bt() - Td ? Ws(e, 0) : Rd |= i), wr(e, t);
  }
  function qf(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = $r, $r <<= 1, ($r & 130023424) === 0 && ($r = 4194304)));
    var i = dr();
    e = ur(e, t), e !== null && (ms(e, t, i), wr(e, i));
  }
  function h1(e) {
    var t = e.memoizedState, i = 0;
    t !== null && (i = t.retryLane), qf(e, i);
  }
  function p1(e, t) {
    var i = 0;
    switch (e.tag) {
      case 13:
        var s = e.stateNode, u = e.memoizedState;
        u !== null && (i = u.retryLane);
        break;
      case 19:
        s = e.stateNode;
        break;
      default:
        throw Error(v(314));
    }
    s !== null && s.delete(t), qf(e, i);
  }
  var Kf;
  Kf = function(e, t, i) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || Cn.current) y = !0;
    else {
      if ((e.lanes & i) === 0 && (t.flags & 128) === 0) return y = !1, Sd(e, t, i);
      y = (e.flags & 131072) !== 0;
    }
    else y = !1, pt && (t.flags & 1048576) !== 0 && _c(t, Fi, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var s = t.type;
        ot(e, t), e = t.pendingProps;
        var u = oo(t, vn.current);
        li(t, i), u = Jo(null, t, s, e, u, i);
        var p = Zo();
        return t.flags |= 1, typeof u == "object" && u !== null && typeof u.render == "function" && u.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, kn(s) ? (p = !0, so(t)) : p = !1, t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, Gs(t), u.updater = rs, t.stateNode = u, u._reactInternals = t, jl(t, s, e, i), t = gt(null, t, s, !0, p, i)) : (t.tag = 0, pt && p && jo(t), V(null, t, u, i), t = t.child), t;
      case 16:
        s = t.elementType;
        e: {
          switch (ot(e, t), e = t.pendingProps, u = s._init, s = u(s._payload), t.type = s, u = t.tag = m1(s), e = _n(s, e), u) {
            case 0:
              t = Ne(null, t, s, e, i);
              break e;
            case 1:
              t = kt(null, t, s, e, i);
              break e;
            case 11:
              t = ne(null, t, s, e, i);
              break e;
            case 14:
              t = he(null, t, s, _n(s.type, e), i);
              break e;
          }
          throw Error(v(
            306,
            s,
            ""
          ));
        }
        return t;
      case 0:
        return s = t.type, u = t.pendingProps, u = t.elementType === s ? u : _n(s, u), Ne(e, t, s, u, i);
      case 1:
        return s = t.type, u = t.pendingProps, u = t.elementType === s ? u : _n(s, u), kt(e, t, s, u, i);
      case 3:
        e: {
          if (Vn(t), e === null) throw Error(v(387));
          s = t.pendingProps, p = t.memoizedState, u = p.element, Ol(e, t), Yo(t, s, null, i);
          var I = t.memoizedState;
          if (s = I.element, p.isDehydrated) if (p = { element: s, isDehydrated: !1, cache: I.cache, pendingSuspenseBoundaries: I.pendingSuspenseBoundaries, transitions: I.transitions }, t.updateQueue.baseState = p, t.memoizedState = p, t.flags & 256) {
            u = go(Error(v(423)), t), t = qr(e, t, s, i, u);
            break e;
          } else if (s !== u) {
            u = go(Error(v(424)), t), t = qr(e, t, s, i, u);
            break e;
          } else for (Re = zr(t.stateNode.containerInfo.firstChild), sr = t, pt = !0, lr = null, i = vr(t, null, s, i), t.child = i; i; ) i.flags = i.flags & -3 | 4096, i = i.sibling;
          else {
            if (co(), s === u) {
              t = Tn(e, t, i);
              break e;
            }
            V(e, t, s, i);
          }
          t = t.child;
        }
        return t;
      case 5:
        return Xo(t), e === null && Wo(t), s = t.type, u = t.pendingProps, p = e !== null ? e.memoizedProps : null, I = u.children, Ea(s, u) ? I = null : p !== null && Ea(s, p) && (t.flags |= 32), Ke(e, t), V(e, t, I, i), t.child;
      case 6:
        return e === null && Wo(t), null;
      case 13:
        return pe(e, t, i);
      case 4:
        return Ai(t, t.stateNode.containerInfo), s = t.pendingProps, e === null ? t.child = fo(t, null, s, i) : V(e, t, s, i), t.child;
      case 11:
        return s = t.type, u = t.pendingProps, u = t.elementType === s ? u : _n(s, u), ne(e, t, s, u, i);
      case 7:
        return V(e, t, t.pendingProps, i), t.child;
      case 8:
        return V(e, t, t.pendingProps.children, i), t.child;
      case 12:
        return V(e, t, t.pendingProps.children, i), t.child;
      case 10:
        e: {
          if (s = t.type._context, u = t.pendingProps, p = t.memoizedProps, I = u.value, vt(Ds, s._currentValue), s._currentValue = I, p !== null) if (Xn(p.value, I)) {
            if (p.children === u.children && !Cn.current) {
              t = Tn(e, t, i);
              break e;
            }
          } else for (p = t.child, p !== null && (p.return = t); p !== null; ) {
            var Y = p.dependencies;
            if (Y !== null) {
              I = p.child;
              for (var $ = Y.firstContext; $ !== null; ) {
                if ($.context === s) {
                  if (p.tag === 1) {
                    $ = jr(-1, i & -i), $.tag = 2;
                    var fe = p.updateQueue;
                    if (fe !== null) {
                      fe = fe.shared;
                      var _e = fe.pending;
                      _e === null ? $.next = $ : ($.next = _e.next, _e.next = $), fe.pending = $;
                    }
                  }
                  p.lanes |= i, $ = p.alternate, $ !== null && ($.lanes |= i), Al(
                    p.return,
                    i,
                    t
                  ), Y.lanes |= i;
                  break;
                }
                $ = $.next;
              }
            } else if (p.tag === 10) I = p.type === t.type ? null : p.child;
            else if (p.tag === 18) {
              if (I = p.return, I === null) throw Error(v(341));
              I.lanes |= i, Y = I.alternate, Y !== null && (Y.lanes |= i), Al(I, i, t), I = p.sibling;
            } else I = p.child;
            if (I !== null) I.return = p;
            else for (I = p; I !== null; ) {
              if (I === t) {
                I = null;
                break;
              }
              if (p = I.sibling, p !== null) {
                p.return = I.return, I = p;
                break;
              }
              I = I.return;
            }
            p = I;
          }
          V(e, t, u.children, i), t = t.child;
        }
        return t;
      case 9:
        return u = t.type, s = t.pendingProps.children, li(t, i), u = Un(u), s = s(u), t.flags |= 1, V(e, t, s, i), t.child;
      case 14:
        return s = t.type, u = _n(s, t.pendingProps), u = _n(s.type, u), he(e, t, s, u, i);
      case 15:
        return xe(e, t, t.type, t.pendingProps, i);
      case 17:
        return s = t.type, u = t.pendingProps, u = t.elementType === s ? u : _n(s, u), ot(e, t), t.tag = 1, kn(s) ? (e = !0, so(t)) : e = !1, li(t, i), Nc(t, s, u), jl(t, s, u, i), gt(null, t, s, !0, e, i);
      case 19:
        return rn(e, t, i);
      case 22:
        return Ae(e, t, i);
    }
    throw Error(v(156, t.tag));
  };
  function Yf(e, t) {
    return qu(e, t);
  }
  function g1(e, t, i, s) {
    this.tag = e, this.key = i, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = s, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Yr(e, t, i, s) {
    return new g1(e, t, i, s);
  }
  function Dd(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function m1(e) {
    if (typeof e == "function") return Dd(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === Z) return 11;
      if (e === ee) return 14;
    }
    return 2;
  }
  function cs(e, t) {
    var i = e.alternate;
    return i === null ? (i = Yr(e.tag, t, e.key, e.mode), i.elementType = e.elementType, i.type = e.type, i.stateNode = e.stateNode, i.alternate = e, e.alternate = i) : (i.pendingProps = t, i.type = e.type, i.flags = 0, i.subtreeFlags = 0, i.deletions = null), i.flags = e.flags & 14680064, i.childLanes = e.childLanes, i.lanes = e.lanes, i.child = e.child, i.memoizedProps = e.memoizedProps, i.memoizedState = e.memoizedState, i.updateQueue = e.updateQueue, t = e.dependencies, i.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, i.sibling = e.sibling, i.index = e.index, i.ref = e.ref, i;
  }
  function Vc(e, t, i, s, u, p) {
    var I = 2;
    if (s = e, typeof e == "function") Dd(e) && (I = 1);
    else if (typeof e == "string") I = 5;
    else e: switch (e) {
      case J:
        return Ks(i.children, u, p, t);
      case G:
        I = 8, u |= 8;
        break;
      case B:
        return e = Yr(12, i, t, u | 2), e.elementType = B, e.lanes = p, e;
      case Q:
        return e = Yr(13, i, t, u), e.elementType = Q, e.lanes = p, e;
      case ie:
        return e = Yr(19, i, t, u), e.elementType = ie, e.lanes = p, e;
      case T:
        return Hc(i, u, p, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case H:
            I = 10;
            break e;
          case X:
            I = 9;
            break e;
          case Z:
            I = 11;
            break e;
          case ee:
            I = 14;
            break e;
          case me:
            I = 16, s = null;
            break e;
        }
        throw Error(v(130, e == null ? e : typeof e, ""));
    }
    return t = Yr(I, i, t, u), t.elementType = e, t.type = s, t.lanes = p, t;
  }
  function Ks(e, t, i, s) {
    return e = Yr(7, e, s, t), e.lanes = i, e;
  }
  function Hc(e, t, i, s) {
    return e = Yr(22, e, s, t), e.elementType = T, e.lanes = i, e.stateNode = { isHidden: !1 }, e;
  }
  function zd(e, t, i) {
    return e = Yr(6, e, null, t), e.lanes = i, e;
  }
  function Gd(e, t, i) {
    return t = Yr(4, e.children !== null ? e.children : [], e.key, t), t.lanes = i, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function y1(e, t, i, s, u) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = $n(0), this.expirationTimes = $n(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = $n(0), this.identifierPrefix = s, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null;
  }
  function Ud(e, t, i, s, u, p, I, Y, $) {
    return e = new y1(e, t, i, Y, $), t === 1 ? (t = 1, p === !0 && (t |= 8)) : t = 0, p = Yr(3, null, null, t), e.current = p, p.stateNode = e, p.memoizedState = { element: s, isDehydrated: i, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Gs(p), e;
  }
  function v1(e, t, i) {
    var s = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: W, key: s == null ? null : "" + s, children: e, containerInfo: t, implementation: i };
  }
  function Xf(e) {
    if (!e) return Ur;
    e = e._reactInternals;
    e: {
      if (Vi(e) !== e || e.tag !== 1) throw Error(v(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (kn(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(v(171));
    }
    if (e.tag === 1) {
      var i = e.type;
      if (kn(i)) return Pl(e, i, t);
    }
    return t;
  }
  function Qf(e, t, i, s, u, p, I, Y, $) {
    return e = Ud(i, s, !0, e, u, p, I, Y, $), e.context = Xf(null), i = e.current, s = dr(), u = as(i), p = jr(s, u), p.callback = t ?? null, Wr(i, p, u), e.current.lanes = u, ms(e, u, s), wr(e, s), e;
  }
  function jc(e, t, i, s) {
    var u = t.current, p = dr(), I = as(u);
    return i = Xf(i), t.context === null ? t.context = i : t.pendingContext = i, t = jr(p, I), t.payload = { element: e }, s = s === void 0 ? null : s, s !== null && (t.callback = s), e = Wr(u, t, I), e !== null && (hi(e, u, I, p), Il(e, u, I)), I;
  }
  function Wc(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function bf(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var i = e.retryLane;
      e.retryLane = i !== 0 && i < t ? i : t;
    }
  }
  function Bd(e, t) {
    bf(e, t), (e = e.alternate) && bf(e, t);
  }
  function _1() {
    return null;
  }
  var Jf = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function Vd(e) {
    this._internalRoot = e;
  }
  qc.prototype.render = Vd.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(v(409));
    jc(e, t, null, null);
  }, qc.prototype.unmount = Vd.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      js(function() {
        jc(null, e, null, null);
      }), t[Gr] = null;
    }
  };
  function qc(e) {
    this._internalRoot = e;
  }
  qc.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = bu();
      e = { blockedOn: null, target: e, priority: t };
      for (var i = 0; i < Dr.length && t !== 0 && t < Dr[i].priority; i++) ;
      Dr.splice(i, 0, e), i === 0 && tl(e);
    }
  };
  function Hd(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function Kc(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function Zf() {
  }
  function S1(e, t, i, s, u) {
    if (u) {
      if (typeof s == "function") {
        var p = s;
        s = function() {
          var fe = Wc(I);
          p.call(fe);
        };
      }
      var I = Qf(t, s, e, 0, null, !1, !1, "", Zf);
      return e._reactRootContainer = I, e[Gr] = I.current, eo(e.nodeType === 8 ? e.parentNode : e), js(), I;
    }
    for (; u = e.lastChild; ) e.removeChild(u);
    if (typeof s == "function") {
      var Y = s;
      s = function() {
        var fe = Wc($);
        Y.call(fe);
      };
    }
    var $ = Ud(e, 0, !1, null, null, !1, !1, "", Zf);
    return e._reactRootContainer = $, e[Gr] = $.current, eo(e.nodeType === 8 ? e.parentNode : e), js(function() {
      jc(t, $, i, s);
    }), $;
  }
  function Yc(e, t, i, s, u) {
    var p = i._reactRootContainer;
    if (p) {
      var I = p;
      if (typeof u == "function") {
        var Y = u;
        u = function() {
          var $ = Wc(I);
          Y.call($);
        };
      }
      jc(t, I, e, u);
    } else I = S1(i, t, e, u, s);
    return Wc(I);
  }
  Po = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var i = an(t.pendingLanes);
          i !== 0 && (na(t, i | 1), wr(t, Bt()), (ct & 6) === 0 && (Yl = Bt() + 500, Ni()));
        }
        break;
      case 13:
        js(function() {
          var s = ur(e, 1);
          if (s !== null) {
            var u = dr();
            hi(s, e, 1, u);
          }
        }), Bd(e, 1);
    }
  }, Ro = function(e) {
    if (e.tag === 13) {
      var t = ur(e, 134217728);
      if (t !== null) {
        var i = dr();
        hi(t, e, 134217728, i);
      }
      Bd(e, 134217728);
    }
  }, Qu = function(e) {
    if (e.tag === 13) {
      var t = as(e), i = ur(e, t);
      if (i !== null) {
        var s = dr();
        hi(i, e, t, s);
      }
      Bd(e, t);
    }
  }, bu = function() {
    return ut;
  }, $s = function(e, t) {
    var i = ut;
    try {
      return ut = e, t();
    } finally {
      ut = i;
    }
  }, Co = function(e, t, i) {
    switch (t) {
      case "input":
        if (Ze(e, i), t = i.name, i.type === "radio" && t != null) {
          for (i = e; i.parentNode; ) i = i.parentNode;
          for (i = i.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < i.length; t++) {
            var s = i[t];
            if (s !== e && s.form === e.form) {
              var u = dn(s);
              if (!u) throw Error(v(90));
              De(s), Ze(s, u);
            }
          }
        }
        break;
      case "textarea":
        bt(e, i);
        break;
      case "select":
        t = i.value, t != null && Wn(e, !!i.multiple, t, !1);
    }
  }, Te = Ad, Pe = js;
  var w1 = { usingClientEntryPoint: !1, Events: [Ls, en, dn, ye, Se, Ad] }, qa = { findFiberByHostInstance: Ri, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, x1 = { bundleType: qa.bundleType, version: qa.version, rendererPackageName: qa.rendererPackageName, rendererConfig: qa.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: R.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = ju(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: qa.findFiberByHostInstance || _1, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Xc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Xc.isDisabled && Xc.supportsFiber) try {
      Zr = Xc.inject(x1), pn = Xc;
    } catch {
    }
  }
  return xr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = w1, xr.createPortal = function(e, t) {
    var i = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Hd(t)) throw Error(v(200));
    return v1(e, t, null, i);
  }, xr.createRoot = function(e, t) {
    if (!Hd(e)) throw Error(v(299));
    var i = !1, s = "", u = Jf;
    return t != null && (t.unstable_strictMode === !0 && (i = !0), t.identifierPrefix !== void 0 && (s = t.identifierPrefix), t.onRecoverableError !== void 0 && (u = t.onRecoverableError)), t = Ud(e, 1, !1, null, null, i, !1, s, u), e[Gr] = t.current, eo(e.nodeType === 8 ? e.parentNode : e), new Vd(t);
  }, xr.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(v(188)) : (e = Object.keys(e).join(","), Error(v(268, e)));
    return e = ju(t), e = e === null ? null : e.stateNode, e;
  }, xr.flushSync = function(e) {
    return js(e);
  }, xr.hydrate = function(e, t, i) {
    if (!Kc(t)) throw Error(v(200));
    return Yc(null, e, t, !0, i);
  }, xr.hydrateRoot = function(e, t, i) {
    if (!Hd(e)) throw Error(v(405));
    var s = i != null && i.hydratedSources || null, u = !1, p = "", I = Jf;
    if (i != null && (i.unstable_strictMode === !0 && (u = !0), i.identifierPrefix !== void 0 && (p = i.identifierPrefix), i.onRecoverableError !== void 0 && (I = i.onRecoverableError)), t = Qf(t, null, e, 1, i ?? null, u, !1, p, I), e[Gr] = t.current, eo(e), s) for (e = 0; e < s.length; e++) i = s[e], u = i._getVersion, u = u(i._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [i, u] : t.mutableSourceEagerHydrationData.push(
      i,
      u
    );
    return new qc(t);
  }, xr.render = function(e, t, i) {
    if (!Kc(t)) throw Error(v(200));
    return Yc(null, e, t, !1, i);
  }, xr.unmountComponentAtNode = function(e) {
    if (!Kc(e)) throw Error(v(40));
    return e._reactRootContainer ? (js(function() {
      Yc(null, null, e, !1, function() {
        e._reactRootContainer = null, e[Gr] = null;
      });
    }), !0) : !1;
  }, xr.unstable_batchedUpdates = Ad, xr.unstable_renderSubtreeIntoContainer = function(e, t, i, s) {
    if (!Kc(i)) throw Error(v(200));
    if (e == null || e._reactInternals === void 0) throw Error(v(38));
    return Yc(e, t, i, !1, s);
  }, xr.version = "18.3.1-next-f1338f8080-20240426", xr;
}
var lh;
function N1() {
  if (lh) return qd.exports;
  lh = 1;
  function l() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
      } catch (d) {
        console.error(d);
      }
  }
  return l(), qd.exports = T1(), qd.exports;
}
var ah;
function M1() {
  if (ah) return Qc;
  ah = 1;
  var l = N1();
  return Qc.createRoot = l.createRoot, Qc.hydrateRoot = l.hydrateRoot, Qc;
}
var F1 = M1(), nd = { exports: {} }, Ya = {}, Xd = {}, Qd = {}, uh;
function et() {
  return uh || (uh = 1, (function(l) {
    Object.defineProperty(l, "__esModule", { value: !0 }), l._registerNode = l.Konva = l.glob = void 0;
    const d = Math.PI / 180;
    function v() {
      return typeof window < "u" && ({}.toString.call(window) === "[object Window]" || {}.toString.call(window) === "[object global]");
    }
    l.glob = typeof $f < "u" ? $f : typeof window < "u" ? window : typeof WorkerGlobalScope < "u" ? self : {}, l.Konva = {
      _global: l.glob,
      version: "9.3.22",
      isBrowser: v(),
      isUnminified: /param/.test((function(F) {
      }).toString()),
      dblClickWindow: 400,
      getAngle(F) {
        return l.Konva.angleDeg ? F * d : F;
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
        var F;
        return (F = l.Konva.Transformer) === null || F === void 0 ? void 0 : F.isTransforming();
      },
      isDragReady() {
        return !!l.Konva.DD.node;
      },
      releaseCanvasOnDestroy: !0,
      document: l.glob.document,
      _injectGlobal(F) {
        l.glob.Konva = F;
      }
    };
    const A = (F) => {
      l.Konva[F.prototype.getClassName()] = F;
    };
    l._registerNode = A, l.Konva._injectGlobal(l.Konva);
  })(Qd)), Qd;
}
var bd = {}, ch;
function Qt() {
  return ch || (ch = 1, (function(l) {
    Object.defineProperty(l, "__esModule", { value: !0 }), l.Util = l.Transform = void 0;
    const d = et();
    class v {
      constructor(R = [1, 0, 0, 1, 0, 0]) {
        this.dirty = !1, this.m = R && R.slice() || [1, 0, 0, 1, 0, 0];
      }
      reset() {
        this.m[0] = 1, this.m[1] = 0, this.m[2] = 0, this.m[3] = 1, this.m[4] = 0, this.m[5] = 0;
      }
      copy() {
        return new v(this.m);
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
        const D = Math.cos(R), W = Math.sin(R), J = this.m[0] * D + this.m[2] * W, G = this.m[1] * D + this.m[3] * W, B = this.m[0] * -W + this.m[2] * D, H = this.m[1] * -W + this.m[3] * D;
        return this.m[0] = J, this.m[1] = G, this.m[2] = B, this.m[3] = H, this;
      }
      getTranslation() {
        return {
          x: this.m[4],
          y: this.m[5]
        };
      }
      skew(R, D) {
        const W = this.m[0] + this.m[2] * D, J = this.m[1] + this.m[3] * D, G = this.m[2] + this.m[0] * R, B = this.m[3] + this.m[1] * R;
        return this.m[0] = W, this.m[1] = J, this.m[2] = G, this.m[3] = B, this;
      }
      multiply(R) {
        const D = this.m[0] * R.m[0] + this.m[2] * R.m[1], W = this.m[1] * R.m[0] + this.m[3] * R.m[1], J = this.m[0] * R.m[2] + this.m[2] * R.m[3], G = this.m[1] * R.m[2] + this.m[3] * R.m[3], B = this.m[0] * R.m[4] + this.m[2] * R.m[5] + this.m[4], H = this.m[1] * R.m[4] + this.m[3] * R.m[5] + this.m[5];
        return this.m[0] = D, this.m[1] = W, this.m[2] = J, this.m[3] = G, this.m[4] = B, this.m[5] = H, this;
      }
      invert() {
        const R = 1 / (this.m[0] * this.m[3] - this.m[1] * this.m[2]), D = this.m[3] * R, W = -this.m[1] * R, J = -this.m[2] * R, G = this.m[0] * R, B = R * (this.m[2] * this.m[5] - this.m[3] * this.m[4]), H = R * (this.m[1] * this.m[4] - this.m[0] * this.m[5]);
        return this.m[0] = D, this.m[1] = W, this.m[2] = J, this.m[3] = G, this.m[4] = B, this.m[5] = H, this;
      }
      getMatrix() {
        return this.m;
      }
      decompose() {
        const R = this.m[0], D = this.m[1], W = this.m[2], J = this.m[3], G = this.m[4], B = this.m[5], H = R * J - D * W, X = {
          x: G,
          y: B,
          rotation: 0,
          scaleX: 0,
          scaleY: 0,
          skewX: 0,
          skewY: 0
        };
        if (R != 0 || D != 0) {
          const Z = Math.sqrt(R * R + D * D);
          X.rotation = D > 0 ? Math.acos(R / Z) : -Math.acos(R / Z), X.scaleX = Z, X.scaleY = H / Z, X.skewX = (R * W + D * J) / H, X.skewY = 0;
        } else if (W != 0 || J != 0) {
          const Z = Math.sqrt(W * W + J * J);
          X.rotation = Math.PI / 2 - (J > 0 ? Math.acos(-W / Z) : -Math.acos(W / Z)), X.scaleX = H / Z, X.scaleY = Z, X.skewX = 0, X.skewY = (R * W + D * J) / H;
        }
        return X.rotation = l.Util._getRotation(X.rotation), X;
      }
    }
    l.Transform = v;
    const A = "[object Array]", F = "[object Number]", C = "[object String]", f = "[object Boolean]", g = Math.PI / 180, m = 180 / Math.PI, x = "#", k = "", M = "0", E = "Konva warning: ", S = "Konva error: ", w = "rgb(", P = {
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
    let j = [];
    const _ = typeof requestAnimationFrame < "u" && requestAnimationFrame || function(h) {
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
        return Object.prototype.toString.call(h) === A;
      },
      _isNumber(h) {
        return Object.prototype.toString.call(h) === F && !isNaN(h) && isFinite(h);
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
        const R = h[0];
        return R === "#" || R === "." || R === R.toUpperCase();
      },
      _sign(h) {
        return h === 0 || h > 0 ? 1 : -1;
      },
      requestAnimFrame(h) {
        j.push(h), j.length === 1 && _(function() {
          const R = j;
          j = [], R.forEach(function(D) {
            D();
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
      _urlToImage(h, R) {
        const D = l.Util.createImageElement();
        D.onload = function() {
          R(D);
        }, D.src = h;
      },
      _rgbToHex(h, R, D) {
        return ((1 << 24) + (h << 16) + (R << 8) + D).toString(16).slice(1);
      },
      _hexToRgb(h) {
        h = h.replace(x, k);
        const R = parseInt(h, 16);
        return {
          r: R >> 16 & 255,
          g: R >> 8 & 255,
          b: R & 255
        };
      },
      getRandomColor() {
        let h = (Math.random() * 16777215 << 0).toString(16);
        for (; h.length < 6; )
          h = M + h;
        return x + h;
      },
      getRGB(h) {
        let R;
        return h in P ? (R = P[h], {
          r: R[0],
          g: R[1],
          b: R[2]
        }) : h[0] === x ? this._hexToRgb(h.substring(1)) : h.substr(0, 4) === w ? (R = O.exec(h.replace(/ /g, "")), {
          r: parseInt(R[1], 10),
          g: parseInt(R[2], 10),
          b: parseInt(R[3], 10)
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
        const R = P[h.toLowerCase()];
        return R ? {
          r: R[0],
          g: R[1],
          b: R[2],
          a: 1
        } : null;
      },
      _rgbColorToRGBA(h) {
        if (h.indexOf("rgb(") === 0) {
          h = h.match(/rgb\(([^)]+)\)/)[1];
          const R = h.split(/ *, */).map(Number);
          return {
            r: R[0],
            g: R[1],
            b: R[2],
            a: 1
          };
        }
      },
      _rgbaColorToRGBA(h) {
        if (h.indexOf("rgba(") === 0) {
          h = h.match(/rgba\(([^)]+)\)/)[1];
          const R = h.split(/ *, */).map((D, W) => D.slice(-1) === "%" ? W === 3 ? parseInt(D) / 100 : parseInt(D) / 100 * 255 : Number(D));
          return {
            r: R[0],
            g: R[1],
            b: R[2],
            a: R[3]
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
          const [R, ...D] = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(h), W = Number(D[0]) / 360, J = Number(D[1]) / 100, G = Number(D[2]) / 100;
          let B, H, X;
          if (J === 0)
            return X = G * 255, {
              r: Math.round(X),
              g: Math.round(X),
              b: Math.round(X),
              a: 1
            };
          G < 0.5 ? B = G * (1 + J) : B = G + J - G * J;
          const Z = 2 * G - B, Q = [0, 0, 0];
          for (let ie = 0; ie < 3; ie++)
            H = W + 1 / 3 * -(ie - 1), H < 0 && H++, H > 1 && H--, 6 * H < 1 ? X = Z + (B - Z) * 6 * H : 2 * H < 1 ? X = B : 3 * H < 2 ? X = Z + (B - Z) * (2 / 3 - H) * 6 : X = Z, Q[ie] = X * 255;
          return {
            r: Math.round(Q[0]),
            g: Math.round(Q[1]),
            b: Math.round(Q[2]),
            a: 1
          };
        }
      },
      haveIntersection(h, R) {
        return !(R.x > h.x + h.width || R.x + R.width < h.x || R.y > h.y + h.height || R.y + R.height < h.y);
      },
      cloneObject(h) {
        const R = {};
        for (const D in h)
          this._isPlainObject(h[D]) ? R[D] = this.cloneObject(h[D]) : this._isArray(h[D]) ? R[D] = this.cloneArray(h[D]) : R[D] = h[D];
        return R;
      },
      cloneArray(h) {
        return h.slice(0);
      },
      degToRad(h) {
        return h * g;
      },
      radToDeg(h) {
        return h * m;
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
      each(h, R) {
        for (const D in h)
          R(D, h[D]);
      },
      _inRange(h, R, D) {
        return R <= h && h < D;
      },
      _getProjectionToSegment(h, R, D, W, J, G) {
        let B, H, X;
        const Z = (h - D) * (h - D) + (R - W) * (R - W);
        if (Z == 0)
          B = h, H = R, X = (J - D) * (J - D) + (G - W) * (G - W);
        else {
          const Q = ((J - h) * (D - h) + (G - R) * (W - R)) / Z;
          Q < 0 ? (B = h, H = R, X = (h - J) * (h - J) + (R - G) * (R - G)) : Q > 1 ? (B = D, H = W, X = (D - J) * (D - J) + (W - G) * (W - G)) : (B = h + Q * (D - h), H = R + Q * (W - R), X = (B - J) * (B - J) + (H - G) * (H - G));
        }
        return [B, H, X];
      },
      _getProjectionToLine(h, R, D) {
        const W = l.Util.cloneObject(h);
        let J = Number.MAX_VALUE;
        return R.forEach(function(G, B) {
          if (!D && B === R.length - 1)
            return;
          const H = R[(B + 1) % R.length], X = l.Util._getProjectionToSegment(G.x, G.y, H.x, H.y, h.x, h.y), Z = X[0], Q = X[1], ie = X[2];
          ie < J && (W.x = Z, W.y = Q, J = ie);
        }), W;
      },
      _prepareArrayForTween(h, R, D) {
        const W = [], J = [];
        if (h.length > R.length) {
          const B = R;
          R = h, h = B;
        }
        for (let B = 0; B < h.length; B += 2)
          W.push({
            x: h[B],
            y: h[B + 1]
          });
        for (let B = 0; B < R.length; B += 2)
          J.push({
            x: R[B],
            y: R[B + 1]
          });
        const G = [];
        return J.forEach(function(B) {
          const H = l.Util._getProjectionToLine(B, W, D);
          G.push(H.x), G.push(H.y);
        }), G;
      },
      _prepareToStringify(h) {
        let R;
        h.visitedByCircularReferenceRemoval = !0;
        for (const D in h)
          if (h.hasOwnProperty(D) && h[D] && typeof h[D] == "object") {
            if (R = Object.getOwnPropertyDescriptor(h, D), h[D].visitedByCircularReferenceRemoval || l.Util._isElement(h[D]))
              if (R.configurable)
                delete h[D];
              else
                return null;
            else if (l.Util._prepareToStringify(h[D]) === null)
              if (R.configurable)
                delete h[D];
              else
                return null;
          }
        return delete h.visitedByCircularReferenceRemoval, h;
      },
      _assign(h, R) {
        for (const D in R)
          h[D] = R[D];
        return h;
      },
      _getFirstPointerId(h) {
        return h.touches ? h.changedTouches[0].identifier : h.pointerId || 999;
      },
      releaseCanvas(...h) {
        d.Konva.releaseCanvasOnDestroy && h.forEach((R) => {
          R.width = 0, R.height = 0;
        });
      },
      drawRoundedRectPath(h, R, D, W) {
        let J = 0, G = 0, B = 0, H = 0;
        typeof W == "number" ? J = G = B = H = Math.min(W, R / 2, D / 2) : (J = Math.min(W[0] || 0, R / 2, D / 2), G = Math.min(W[1] || 0, R / 2, D / 2), H = Math.min(W[2] || 0, R / 2, D / 2), B = Math.min(W[3] || 0, R / 2, D / 2)), h.moveTo(J, 0), h.lineTo(R - G, 0), h.arc(R - G, G, G, Math.PI * 3 / 2, 0, !1), h.lineTo(R, D - H), h.arc(R - H, D - H, H, 0, Math.PI / 2, !1), h.lineTo(B, D), h.arc(B, D - B, B, Math.PI / 2, Math.PI, !1), h.lineTo(0, J), h.arc(J, J, J, Math.PI, Math.PI * 3 / 2, !1);
      }
    };
  })(bd)), bd;
}
var Xa = {}, yo = {}, vo = {}, dh;
function z0() {
  if (dh) return vo;
  dh = 1, Object.defineProperty(vo, "__esModule", { value: !0 }), vo.HitContext = vo.SceneContext = vo.Context = void 0;
  const l = Qt(), d = et();
  function v(j) {
    const _ = [], h = j.length, R = l.Util;
    for (let D = 0; D < h; D++) {
      let W = j[D];
      R._isNumber(W) ? W = Math.round(W * 1e3) / 1e3 : R._isString(W) || (W = W + ""), _.push(W);
    }
    return _;
  }
  const A = ",", F = "(", C = ")", f = "([", g = "])", m = ";", x = "()", k = "=", M = [
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
    constructor(_) {
      this.canvas = _, d.Konva.enableTrace && (this.traceArr = [], this._enableTrace());
    }
    fillShape(_) {
      _.fillEnabled() && this._fill(_);
    }
    _fill(_) {
    }
    strokeShape(_) {
      _.hasStroke() && this._stroke(_);
    }
    _stroke(_) {
    }
    fillStrokeShape(_) {
      _.attrs.fillAfterStrokeEnabled ? (this.strokeShape(_), this.fillShape(_)) : (this.fillShape(_), this.strokeShape(_));
    }
    getTrace(_, h) {
      let R = this.traceArr, D = R.length, W = "", J, G, B, H;
      for (J = 0; J < D; J++)
        G = R[J], B = G.method, B ? (H = G.args, W += B, _ ? W += x : l.Util._isArray(H[0]) ? W += f + H.join(A) + g : (h && (H = H.map((X) => typeof X == "number" ? Math.floor(X) : X)), W += F + H.join(A) + C)) : (W += G.property, _ || (W += k + G.val)), W += m;
      return W;
    }
    clearTrace() {
      this.traceArr = [];
    }
    _trace(_) {
      let h = this.traceArr, R;
      h.push(_), R = h.length, R >= S && h.shift();
    }
    reset() {
      const _ = this.getCanvas().getPixelRatio();
      this.setTransform(1 * _, 0, 0, 1 * _, 0, 0);
    }
    getCanvas() {
      return this.canvas;
    }
    clear(_) {
      const h = this.getCanvas();
      _ ? this.clearRect(_.x || 0, _.y || 0, _.width || 0, _.height || 0) : this.clearRect(0, 0, h.getWidth() / h.pixelRatio, h.getHeight() / h.pixelRatio);
    }
    _applyLineCap(_) {
      const h = _.attrs.lineCap;
      h && this.setAttr("lineCap", h);
    }
    _applyOpacity(_) {
      const h = _.getAbsoluteOpacity();
      h !== 1 && this.setAttr("globalAlpha", h);
    }
    _applyLineJoin(_) {
      const h = _.attrs.lineJoin;
      h && this.setAttr("lineJoin", h);
    }
    setAttr(_, h) {
      this._context[_] = h;
    }
    arc(_, h, R, D, W, J) {
      this._context.arc(_, h, R, D, W, J);
    }
    arcTo(_, h, R, D, W) {
      this._context.arcTo(_, h, R, D, W);
    }
    beginPath() {
      this._context.beginPath();
    }
    bezierCurveTo(_, h, R, D, W, J) {
      this._context.bezierCurveTo(_, h, R, D, W, J);
    }
    clearRect(_, h, R, D) {
      this._context.clearRect(_, h, R, D);
    }
    clip(..._) {
      this._context.clip.apply(this._context, _);
    }
    closePath() {
      this._context.closePath();
    }
    createImageData(_, h) {
      const R = arguments;
      if (R.length === 2)
        return this._context.createImageData(_, h);
      if (R.length === 1)
        return this._context.createImageData(_);
    }
    createLinearGradient(_, h, R, D) {
      return this._context.createLinearGradient(_, h, R, D);
    }
    createPattern(_, h) {
      return this._context.createPattern(_, h);
    }
    createRadialGradient(_, h, R, D, W, J) {
      return this._context.createRadialGradient(_, h, R, D, W, J);
    }
    drawImage(_, h, R, D, W, J, G, B, H) {
      const X = arguments, Z = this._context;
      X.length === 3 ? Z.drawImage(_, h, R) : X.length === 5 ? Z.drawImage(_, h, R, D, W) : X.length === 9 && Z.drawImage(_, h, R, D, W, J, G, B, H);
    }
    ellipse(_, h, R, D, W, J, G, B) {
      this._context.ellipse(_, h, R, D, W, J, G, B);
    }
    isPointInPath(_, h, R, D) {
      return R ? this._context.isPointInPath(R, _, h, D) : this._context.isPointInPath(_, h, D);
    }
    fill(..._) {
      this._context.fill.apply(this._context, _);
    }
    fillRect(_, h, R, D) {
      this._context.fillRect(_, h, R, D);
    }
    strokeRect(_, h, R, D) {
      this._context.strokeRect(_, h, R, D);
    }
    fillText(_, h, R, D) {
      D ? this._context.fillText(_, h, R, D) : this._context.fillText(_, h, R);
    }
    measureText(_) {
      return this._context.measureText(_);
    }
    getImageData(_, h, R, D) {
      return this._context.getImageData(_, h, R, D);
    }
    lineTo(_, h) {
      this._context.lineTo(_, h);
    }
    moveTo(_, h) {
      this._context.moveTo(_, h);
    }
    rect(_, h, R, D) {
      this._context.rect(_, h, R, D);
    }
    roundRect(_, h, R, D, W) {
      this._context.roundRect(_, h, R, D, W);
    }
    putImageData(_, h, R) {
      this._context.putImageData(_, h, R);
    }
    quadraticCurveTo(_, h, R, D) {
      this._context.quadraticCurveTo(_, h, R, D);
    }
    restore() {
      this._context.restore();
    }
    rotate(_) {
      this._context.rotate(_);
    }
    save() {
      this._context.save();
    }
    scale(_, h) {
      this._context.scale(_, h);
    }
    setLineDash(_) {
      this._context.setLineDash ? this._context.setLineDash(_) : "mozDash" in this._context ? this._context.mozDash = _ : "webkitLineDash" in this._context && (this._context.webkitLineDash = _);
    }
    getLineDash() {
      return this._context.getLineDash();
    }
    setTransform(_, h, R, D, W, J) {
      this._context.setTransform(_, h, R, D, W, J);
    }
    stroke(_) {
      _ ? this._context.stroke(_) : this._context.stroke();
    }
    strokeText(_, h, R, D) {
      this._context.strokeText(_, h, R, D);
    }
    transform(_, h, R, D, W, J) {
      this._context.transform(_, h, R, D, W, J);
    }
    translate(_, h) {
      this._context.translate(_, h);
    }
    _enableTrace() {
      let _ = this, h = M.length, R = this.setAttr, D, W;
      const J = function(G) {
        let B = _[G], H;
        _[G] = function() {
          return W = v(Array.prototype.slice.call(arguments, 0)), H = B.apply(_, arguments), _._trace({
            method: G,
            args: W
          }), H;
        };
      };
      for (D = 0; D < h; D++)
        J(M[D]);
      _.setAttr = function() {
        R.apply(_, arguments);
        const G = arguments[0];
        let B = arguments[1];
        (G === "shadowOffsetX" || G === "shadowOffsetY" || G === "shadowBlur") && (B = B / this.canvas.getPixelRatio()), _._trace({
          property: G,
          val: B
        });
      };
    }
    _applyGlobalCompositeOperation(_) {
      const h = _.attrs.globalCompositeOperation;
      !h || h === "source-over" || this.setAttr("globalCompositeOperation", h);
    }
  };
  vo.Context = w, E.forEach(function(j) {
    Object.defineProperty(w.prototype, j, {
      get() {
        return this._context[j];
      },
      set(_) {
        this._context[j] = _;
      }
    });
  });
  class P extends w {
    constructor(_, { willReadFrequently: h = !1 } = {}) {
      super(_), this._context = _._canvas.getContext("2d", {
        willReadFrequently: h
      });
    }
    _fillColor(_) {
      const h = _.fill();
      this.setAttr("fillStyle", h), _._fillFunc(this);
    }
    _fillPattern(_) {
      this.setAttr("fillStyle", _._getFillPattern()), _._fillFunc(this);
    }
    _fillLinearGradient(_) {
      const h = _._getLinearGradient();
      h && (this.setAttr("fillStyle", h), _._fillFunc(this));
    }
    _fillRadialGradient(_) {
      const h = _._getRadialGradient();
      h && (this.setAttr("fillStyle", h), _._fillFunc(this));
    }
    _fill(_) {
      const h = _.fill(), R = _.getFillPriority();
      if (h && R === "color") {
        this._fillColor(_);
        return;
      }
      const D = _.getFillPatternImage();
      if (D && R === "pattern") {
        this._fillPattern(_);
        return;
      }
      const W = _.getFillLinearGradientColorStops();
      if (W && R === "linear-gradient") {
        this._fillLinearGradient(_);
        return;
      }
      const J = _.getFillRadialGradientColorStops();
      if (J && R === "radial-gradient") {
        this._fillRadialGradient(_);
        return;
      }
      h ? this._fillColor(_) : D ? this._fillPattern(_) : W ? this._fillLinearGradient(_) : J && this._fillRadialGradient(_);
    }
    _strokeLinearGradient(_) {
      const h = _.getStrokeLinearGradientStartPoint(), R = _.getStrokeLinearGradientEndPoint(), D = _.getStrokeLinearGradientColorStops(), W = this.createLinearGradient(h.x, h.y, R.x, R.y);
      if (D) {
        for (let J = 0; J < D.length; J += 2)
          W.addColorStop(D[J], D[J + 1]);
        this.setAttr("strokeStyle", W);
      }
    }
    _stroke(_) {
      const h = _.dash(), R = _.getStrokeScaleEnabled();
      if (_.hasStroke()) {
        if (!R) {
          this.save();
          const W = this.getCanvas().getPixelRatio();
          this.setTransform(W, 0, 0, W, 0, 0);
        }
        this._applyLineCap(_), h && _.dashEnabled() && (this.setLineDash(h), this.setAttr("lineDashOffset", _.dashOffset())), this.setAttr("lineWidth", _.strokeWidth()), _.getShadowForStrokeEnabled() || this.setAttr("shadowColor", "rgba(0,0,0,0)"), _.getStrokeLinearGradientColorStops() ? this._strokeLinearGradient(_) : this.setAttr("strokeStyle", _.stroke()), _._strokeFunc(this), R || this.restore();
      }
    }
    _applyShadow(_) {
      var h, R, D;
      const W = (h = _.getShadowRGBA()) !== null && h !== void 0 ? h : "black", J = (R = _.getShadowBlur()) !== null && R !== void 0 ? R : 5, G = (D = _.getShadowOffset()) !== null && D !== void 0 ? D : {
        x: 0,
        y: 0
      }, B = _.getAbsoluteScale(), H = this.canvas.getPixelRatio(), X = B.x * H, Z = B.y * H;
      this.setAttr("shadowColor", W), this.setAttr("shadowBlur", J * Math.min(Math.abs(X), Math.abs(Z))), this.setAttr("shadowOffsetX", G.x * X), this.setAttr("shadowOffsetY", G.y * Z);
    }
  }
  vo.SceneContext = P;
  class O extends w {
    constructor(_) {
      super(_), this._context = _._canvas.getContext("2d", {
        willReadFrequently: !0
      });
    }
    _fill(_) {
      this.save(), this.setAttr("fillStyle", _.colorKey), _._fillFuncHit(this), this.restore();
    }
    strokeShape(_) {
      _.hasHitStroke() && this._stroke(_);
    }
    _stroke(_) {
      if (_.hasHitStroke()) {
        const h = _.getStrokeScaleEnabled();
        if (!h) {
          this.save();
          const W = this.getCanvas().getPixelRatio();
          this.setTransform(W, 0, 0, W, 0, 0);
        }
        this._applyLineCap(_);
        const R = _.hitStrokeWidth(), D = R === "auto" ? _.strokeWidth() : R;
        this.setAttr("lineWidth", D), this.setAttr("strokeStyle", _.colorKey), _._strokeFuncHit(this), h || this.restore();
      }
    }
  }
  return vo.HitContext = O, vo;
}
var fh;
function od() {
  if (fh) return yo;
  fh = 1, Object.defineProperty(yo, "__esModule", { value: !0 }), yo.HitCanvas = yo.SceneCanvas = yo.Canvas = void 0;
  const l = Qt(), d = z0(), v = et();
  let A;
  function F() {
    if (A)
      return A;
    const m = l.Util.createCanvasElement(), x = m.getContext("2d");
    return A = (function() {
      const k = v.Konva._global.devicePixelRatio || 1, M = x.webkitBackingStorePixelRatio || x.mozBackingStorePixelRatio || x.msBackingStorePixelRatio || x.oBackingStorePixelRatio || x.backingStorePixelRatio || 1;
      return k / M;
    })(), l.Util.releaseCanvas(m), A;
  }
  let C = class {
    constructor(x) {
      this.pixelRatio = 1, this.width = 0, this.height = 0, this.isCache = !1;
      const M = (x || {}).pixelRatio || v.Konva.pixelRatio || F();
      this.pixelRatio = M, this._canvas = l.Util.createCanvasElement(), this._canvas.style.padding = "0", this._canvas.style.margin = "0", this._canvas.style.border = "0", this._canvas.style.background = "transparent", this._canvas.style.position = "absolute", this._canvas.style.top = "0", this._canvas.style.left = "0";
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
  yo.Canvas = C;
  class f extends C {
    constructor(x = { width: 0, height: 0, willReadFrequently: !1 }) {
      super(x), this.context = new d.SceneContext(this, {
        willReadFrequently: x.willReadFrequently
      }), this.setSize(x.width, x.height);
    }
  }
  yo.SceneCanvas = f;
  class g extends C {
    constructor(x = { width: 0, height: 0 }) {
      super(x), this.hitCanvas = !0, this.context = new d.HitContext(this), this.setSize(x.width, x.height);
    }
  }
  return yo.HitCanvas = g, yo;
}
var Jd = {}, hh;
function mf() {
  return hh || (hh = 1, (function(l) {
    Object.defineProperty(l, "__esModule", { value: !0 }), l.DD = void 0;
    const d = et(), v = Qt();
    l.DD = {
      get isDragging() {
        let A = !1;
        return l.DD._dragElements.forEach((F) => {
          F.dragStatus === "dragging" && (A = !0);
        }), A;
      },
      justDragged: !1,
      get node() {
        let A;
        return l.DD._dragElements.forEach((F) => {
          A = F.node;
        }), A;
      },
      _dragElements: /* @__PURE__ */ new Map(),
      _drag(A) {
        const F = [];
        l.DD._dragElements.forEach((C, f) => {
          const { node: g } = C, m = g.getStage();
          m.setPointersPositions(A), C.pointerId === void 0 && (C.pointerId = v.Util._getFirstPointerId(A));
          const x = m._changedPointerPositions.find((k) => k.id === C.pointerId);
          if (x) {
            if (C.dragStatus !== "dragging") {
              const k = g.dragDistance();
              if (Math.max(Math.abs(x.x - C.startPointerPos.x), Math.abs(x.y - C.startPointerPos.y)) < k || (g.startDrag({ evt: A }), !g.isDragging()))
                return;
            }
            g._setDragPosition(A, C), F.push(g);
          }
        }), F.forEach((C) => {
          C.fire("dragmove", {
            type: "dragmove",
            target: C,
            evt: A
          }, !0);
        });
      },
      _endDragBefore(A) {
        const F = [];
        l.DD._dragElements.forEach((C) => {
          const { node: f } = C, g = f.getStage();
          if (A && g.setPointersPositions(A), !g._changedPointerPositions.find((k) => k.id === C.pointerId))
            return;
          (C.dragStatus === "dragging" || C.dragStatus === "stopped") && (l.DD.justDragged = !0, d.Konva._mouseListenClick = !1, d.Konva._touchListenClick = !1, d.Konva._pointerListenClick = !1, C.dragStatus = "stopped");
          const x = C.node.getLayer() || C.node instanceof d.Konva.Stage && C.node;
          x && F.indexOf(x) === -1 && F.push(x);
        }), F.forEach((C) => {
          C.draw();
        });
      },
      _endDragAfter(A) {
        l.DD._dragElements.forEach((F, C) => {
          F.dragStatus === "stopped" && F.node.fire("dragend", {
            type: "dragend",
            target: F.node,
            evt: A
          }, !0), F.dragStatus !== "dragging" && l.DD._dragElements.delete(C);
        });
      }
    }, d.Konva.isBrowser && (window.addEventListener("mouseup", l.DD._endDragBefore, !0), window.addEventListener("touchend", l.DD._endDragBefore, !0), window.addEventListener("touchcancel", l.DD._endDragBefore, !0), window.addEventListener("mousemove", l.DD._drag), window.addEventListener("touchmove", l.DD._drag), window.addEventListener("mouseup", l.DD._endDragAfter, !1), window.addEventListener("touchend", l.DD._endDragAfter, !1), window.addEventListener("touchcancel", l.DD._endDragAfter, !1));
  })(Jd)), Jd;
}
var Zd = {}, Cr = {}, ph;
function at() {
  if (ph) return Cr;
  ph = 1, Object.defineProperty(Cr, "__esModule", { value: !0 }), Cr.RGBComponent = A, Cr.alphaComponent = F, Cr.getNumberValidator = C, Cr.getNumberOrArrayOfNumbersValidator = f, Cr.getNumberOrAutoValidator = g, Cr.getStringValidator = m, Cr.getStringOrGradientValidator = x, Cr.getFunctionValidator = k, Cr.getNumberArrayValidator = M, Cr.getBooleanValidator = E, Cr.getComponentValidator = S;
  const l = et(), d = Qt();
  function v(w) {
    return d.Util._isString(w) ? '"' + w + '"' : Object.prototype.toString.call(w) === "[object Number]" || d.Util._isBoolean(w) ? w : Object.prototype.toString.call(w);
  }
  function A(w) {
    return w > 255 ? 255 : w < 0 ? 0 : Math.round(w);
  }
  function F(w) {
    return w > 1 ? 1 : w < 1e-4 ? 1e-4 : w;
  }
  function C() {
    if (l.Konva.isUnminified)
      return function(w, P) {
        return d.Util._isNumber(w) || d.Util.warn(v(w) + ' is a not valid value for "' + P + '" attribute. The value should be a number.'), w;
      };
  }
  function f(w) {
    if (l.Konva.isUnminified)
      return function(P, O) {
        let j = d.Util._isNumber(P), _ = d.Util._isArray(P) && P.length == w;
        return !j && !_ && d.Util.warn(v(P) + ' is a not valid value for "' + O + '" attribute. The value should be a number or Array<number>(' + w + ")"), P;
      };
  }
  function g() {
    if (l.Konva.isUnminified)
      return function(w, P) {
        return d.Util._isNumber(w) || w === "auto" || d.Util.warn(v(w) + ' is a not valid value for "' + P + '" attribute. The value should be a number or "auto".'), w;
      };
  }
  function m() {
    if (l.Konva.isUnminified)
      return function(w, P) {
        return d.Util._isString(w) || d.Util.warn(v(w) + ' is a not valid value for "' + P + '" attribute. The value should be a string.'), w;
      };
  }
  function x() {
    if (l.Konva.isUnminified)
      return function(w, P) {
        const O = d.Util._isString(w), j = Object.prototype.toString.call(w) === "[object CanvasGradient]" || w && w.addColorStop;
        return O || j || d.Util.warn(v(w) + ' is a not valid value for "' + P + '" attribute. The value should be a string or a native gradient.'), w;
      };
  }
  function k() {
    if (l.Konva.isUnminified)
      return function(w, P) {
        return d.Util._isFunction(w) || d.Util.warn(v(w) + ' is a not valid value for "' + P + '" attribute. The value should be a function.'), w;
      };
  }
  function M() {
    if (l.Konva.isUnminified)
      return function(w, P) {
        const O = Int8Array ? Object.getPrototypeOf(Int8Array) : null;
        return O && w instanceof O || (d.Util._isArray(w) ? w.forEach(function(j) {
          d.Util._isNumber(j) || d.Util.warn('"' + P + '" attribute has non numeric element ' + j + ". Make sure that all elements are numbers.");
        }) : d.Util.warn(v(w) + ' is a not valid value for "' + P + '" attribute. The value should be a array of numbers.')), w;
      };
  }
  function E() {
    if (l.Konva.isUnminified)
      return function(w, P) {
        return w === !0 || w === !1 || d.Util.warn(v(w) + ' is a not valid value for "' + P + '" attribute. The value should be a boolean.'), w;
      };
  }
  function S(w) {
    if (l.Konva.isUnminified)
      return function(P, O) {
        return P == null || d.Util.isObject(P) || d.Util.warn(v(P) + ' is a not valid value for "' + O + '" attribute. The value should be an object with properties ' + w), P;
      };
  }
  return Cr;
}
var gh;
function st() {
  return gh || (gh = 1, (function(l) {
    Object.defineProperty(l, "__esModule", { value: !0 }), l.Factory = void 0;
    const d = Qt(), v = at(), A = "get", F = "set";
    l.Factory = {
      addGetterSetter(C, f, g, m, x) {
        l.Factory.addGetter(C, f, g), l.Factory.addSetter(C, f, m, x), l.Factory.addOverloadedGetterSetter(C, f);
      },
      addGetter(C, f, g) {
        const m = A + d.Util._capitalize(f);
        C.prototype[m] = C.prototype[m] || function() {
          const x = this.attrs[f];
          return x === void 0 ? g : x;
        };
      },
      addSetter(C, f, g, m) {
        const x = F + d.Util._capitalize(f);
        C.prototype[x] || l.Factory.overWriteSetter(C, f, g, m);
      },
      overWriteSetter(C, f, g, m) {
        const x = F + d.Util._capitalize(f);
        C.prototype[x] = function(k) {
          return g && k !== void 0 && k !== null && (k = g.call(this, k, f)), this._setAttr(f, k), m && m.call(this), this;
        };
      },
      addComponentsGetterSetter(C, f, g, m, x) {
        const k = g.length, M = d.Util._capitalize, E = A + M(f), S = F + M(f);
        C.prototype[E] = function() {
          const P = {};
          for (let O = 0; O < k; O++) {
            const j = g[O];
            P[j] = this.getAttr(f + M(j));
          }
          return P;
        };
        const w = (0, v.getComponentValidator)(g);
        C.prototype[S] = function(P) {
          const O = this.attrs[f];
          m && (P = m.call(this, P, f)), w && w.call(this, P, f);
          for (const j in P)
            P.hasOwnProperty(j) && this._setAttr(f + M(j), P[j]);
          return P || g.forEach((j) => {
            this._setAttr(f + M(j), void 0);
          }), this._fireChangeEvent(f, O, P), x && x.call(this), this;
        }, l.Factory.addOverloadedGetterSetter(C, f);
      },
      addOverloadedGetterSetter(C, f) {
        const g = d.Util._capitalize(f), m = F + g, x = A + g;
        C.prototype[f] = function() {
          return arguments.length ? (this[m](arguments[0]), this) : this[x]();
        };
      },
      addDeprecatedGetterSetter(C, f, g, m) {
        d.Util.error("Adding deprecated " + f);
        const x = A + d.Util._capitalize(f), k = f + " property is deprecated and will be removed soon. Look at Konva change log for more information.";
        C.prototype[x] = function() {
          d.Util.error(k);
          const M = this.attrs[f];
          return M === void 0 ? g : M;
        }, l.Factory.addSetter(C, f, m, function() {
          d.Util.error(k);
        }), l.Factory.addOverloadedGetterSetter(C, f);
      },
      backCompat(C, f) {
        d.Util.each(f, function(g, m) {
          const x = C.prototype[m], k = A + d.Util._capitalize(g), M = F + d.Util._capitalize(g);
          function E() {
            x.apply(this, arguments), d.Util.error('"' + g + '" method is deprecated and will be removed soon. Use ""' + m + '" instead.');
          }
          C.prototype[g] = E, C.prototype[k] = E, C.prototype[M] = E;
        });
      },
      afterSetFilter() {
        this._filterUpToDate = !1;
      }
    };
  })(Zd)), Zd;
}
var mh;
function sn() {
  if (mh) return Xa;
  mh = 1, Object.defineProperty(Xa, "__esModule", { value: !0 }), Xa.Node = void 0;
  const l = od(), d = mf(), v = st(), A = et(), F = Qt(), C = at(), f = "absoluteOpacity", g = "allEventListeners", m = "absoluteTransform", x = "absoluteScale", k = "canvas", M = "Change", E = "children", S = "konva", w = "listening", P = "mouseenter", O = "mouseleave", j = "pointerenter", _ = "pointerleave", h = "touchenter", R = "touchleave", D = "set", W = "Shape", J = " ", G = "stage", B = "transform", H = "Stage", X = "visible", Z = [
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
  let Q = 1, ie = class cf {
    constructor(T) {
      this._id = Q++, this.eventListeners = {}, this.attrs = {}, this.index = 0, this._allEventListeners = null, this.parent = null, this._cache = /* @__PURE__ */ new Map(), this._attachedDepsListeners = /* @__PURE__ */ new Map(), this._lastPos = null, this._batchingTransformChange = !1, this._needClearTransformCache = !1, this._filterUpToDate = !1, this._isUnderCache = !1, this._dragEventId = null, this._shouldFireChangeEvents = !1, this.setAttrs(T), this._shouldFireChangeEvents = !0;
    }
    hasChildren() {
      return !1;
    }
    _clearCache(T) {
      (T === B || T === m) && this._cache.get(T) ? this._cache.get(T).dirty = !0 : T ? this._cache.delete(T) : this._cache.clear();
    }
    _getCache(T, z) {
      let N = this._cache.get(T);
      return (N === void 0 || (T === B || T === m) && N.dirty === !0) && (N = z.call(this), this._cache.set(T, N)), N;
    }
    _calculate(T, z, N) {
      if (!this._attachedDepsListeners.get(T)) {
        const U = z.map((L) => L + "Change.konva").join(J);
        this.on(U, () => {
          this._clearCache(T);
        }), this._attachedDepsListeners.set(T, !0);
      }
      return this._getCache(T, N);
    }
    _getCanvasCache() {
      return this._cache.get(k);
    }
    _clearSelfAndDescendantCache(T) {
      this._clearCache(T), T === m && this.fire("absoluteTransformChange");
    }
    clearCache() {
      if (this._cache.has(k)) {
        const { scene: T, filter: z, hit: N, buffer: U } = this._cache.get(k);
        F.Util.releaseCanvas(T, z, N, U), this._cache.delete(k);
      }
      return this._clearSelfAndDescendantCache(), this._requestDraw(), this;
    }
    cache(T) {
      const z = T || {};
      let N = {};
      (z.x === void 0 || z.y === void 0 || z.width === void 0 || z.height === void 0) && (N = this.getClientRect({
        skipTransform: !0,
        relativeTo: this.getParent() || void 0
      }));
      let U = Math.ceil(z.width || N.width), L = Math.ceil(z.height || N.height), K = z.pixelRatio, b = z.x === void 0 ? Math.floor(N.x) : z.x, de = z.y === void 0 ? Math.floor(N.y) : z.y, ge = z.offset || 0, se = z.drawBorder || !1, q = z.hitCanvasPixelRatio || 1;
      if (!U || !L) {
        F.Util.error("Can not cache the node. Width or height of the node equals 0. Caching is skipped.");
        return;
      }
      const re = Math.abs(Math.round(N.x) - b) > 0.5 ? 1 : 0, ae = Math.abs(Math.round(N.y) - de) > 0.5 ? 1 : 0;
      U += ge * 2 + re, L += ge * 2 + ae, b -= ge, de -= ge;
      const Ce = new l.SceneCanvas({
        pixelRatio: K,
        width: U,
        height: L
      }), Ee = new l.SceneCanvas({
        pixelRatio: K,
        width: 0,
        height: 0,
        willReadFrequently: !0
      }), De = new l.HitCanvas({
        pixelRatio: q,
        width: U,
        height: L
      }), Ue = Ce.getContext(), Qe = De.getContext(), We = new l.SceneCanvas({
        width: Ce.width / Ce.pixelRatio + Math.abs(b),
        height: Ce.height / Ce.pixelRatio + Math.abs(de),
        pixelRatio: Ce.pixelRatio
      }), At = We.getContext();
      return De.isCache = !0, Ce.isCache = !0, this._cache.delete(k), this._filterUpToDate = !1, z.imageSmoothingEnabled === !1 && (Ce.getContext()._context.imageSmoothingEnabled = !1, Ee.getContext()._context.imageSmoothingEnabled = !1), Ue.save(), Qe.save(), At.save(), Ue.translate(-b, -de), Qe.translate(-b, -de), At.translate(-b, -de), We.x = b, We.y = de, this._isUnderCache = !0, this._clearSelfAndDescendantCache(f), this._clearSelfAndDescendantCache(x), this.drawScene(Ce, this, We), this.drawHit(De, this), this._isUnderCache = !1, Ue.restore(), Qe.restore(), se && (Ue.save(), Ue.beginPath(), Ue.rect(0, 0, U, L), Ue.closePath(), Ue.setAttr("strokeStyle", "red"), Ue.setAttr("lineWidth", 5), Ue.stroke(), Ue.restore()), this._cache.set(k, {
        scene: Ce,
        filter: Ee,
        hit: De,
        buffer: We,
        x: b,
        y: de
      }), this._requestDraw(), this;
    }
    isCached() {
      return this._cache.has(k);
    }
    getClientRect(T) {
      throw new Error('abstract "getClientRect" method call');
    }
    _transformedRect(T, z) {
      const N = [
        { x: T.x, y: T.y },
        { x: T.x + T.width, y: T.y },
        { x: T.x + T.width, y: T.y + T.height },
        { x: T.x, y: T.y + T.height }
      ];
      let U = 1 / 0, L = 1 / 0, K = -1 / 0, b = -1 / 0;
      const de = this.getAbsoluteTransform(z);
      return N.forEach(function(ge) {
        const se = de.point(ge);
        U === void 0 && (U = K = se.x, L = b = se.y), U = Math.min(U, se.x), L = Math.min(L, se.y), K = Math.max(K, se.x), b = Math.max(b, se.y);
      }), {
        x: U,
        y: L,
        width: K - U,
        height: b - L
      };
    }
    _drawCachedSceneCanvas(T) {
      T.save(), T._applyOpacity(this), T._applyGlobalCompositeOperation(this);
      const z = this._getCanvasCache();
      T.translate(z.x, z.y);
      const N = this._getCachedSceneCanvas(), U = N.pixelRatio;
      T.drawImage(N._canvas, 0, 0, N.width / U, N.height / U), T.restore();
    }
    _drawCachedHitCanvas(T) {
      const z = this._getCanvasCache(), N = z.hit;
      T.save(), T.translate(z.x, z.y), T.drawImage(N._canvas, 0, 0, N.width / N.pixelRatio, N.height / N.pixelRatio), T.restore();
    }
    _getCachedSceneCanvas() {
      let T = this.filters(), z = this._getCanvasCache(), N = z.scene, U = z.filter, L = U.getContext(), K, b, de, ge;
      if (T) {
        if (!this._filterUpToDate) {
          const se = N.pixelRatio;
          U.setSize(N.width / N.pixelRatio, N.height / N.pixelRatio);
          try {
            for (K = T.length, L.clear(), L.drawImage(N._canvas, 0, 0, N.getWidth() / se, N.getHeight() / se), b = L.getImageData(0, 0, U.getWidth(), U.getHeight()), de = 0; de < K; de++) {
              if (ge = T[de], typeof ge != "function") {
                F.Util.error("Filter should be type of function, but got " + typeof ge + " instead. Please check correct filters");
                continue;
              }
              ge.call(this, b), L.putImageData(b, 0, 0);
            }
          } catch (q) {
            F.Util.error("Unable to apply filter. " + q.message + " This post my help you https://konvajs.org/docs/posts/Tainted_Canvas.html.");
          }
          this._filterUpToDate = !0;
        }
        return U;
      }
      return N;
    }
    on(T, z) {
      if (this._cache && this._cache.delete(g), arguments.length === 3)
        return this._delegate.apply(this, arguments);
      const N = T.split(J);
      for (let U = 0; U < N.length; U++) {
        const K = N[U].split("."), b = K[0], de = K[1] || "";
        this.eventListeners[b] || (this.eventListeners[b] = []), this.eventListeners[b].push({ name: de, handler: z });
      }
      return this;
    }
    off(T, z) {
      let N = (T || "").split(J), U = N.length, L, K, b, de, ge, se;
      if (this._cache && this._cache.delete(g), !T)
        for (K in this.eventListeners)
          this._off(K);
      for (L = 0; L < U; L++)
        if (b = N[L], de = b.split("."), ge = de[0], se = de[1], ge)
          this.eventListeners[ge] && this._off(ge, se, z);
        else
          for (K in this.eventListeners)
            this._off(K, se, z);
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
      return this.on(T, function(N) {
        z.call(this, N.evt);
      }), this;
    }
    removeEventListener(T) {
      return this.off(T), this;
    }
    _delegate(T, z, N) {
      const U = this;
      this.on(T, function(L) {
        const K = L.target.findAncestors(z, !0, U);
        for (let b = 0; b < K.length; b++)
          L = F.Util.cloneObject(L), L.currentTarget = K[b], N.call(K[b], L);
      });
    }
    remove() {
      return this.isDragging() && this.stopDrag(), d.DD._dragElements.delete(this._id), this._remove(), this;
    }
    _clearCaches() {
      this._clearSelfAndDescendantCache(m), this._clearSelfAndDescendantCache(f), this._clearSelfAndDescendantCache(x), this._clearSelfAndDescendantCache(G), this._clearSelfAndDescendantCache(X), this._clearSelfAndDescendantCache(w);
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
      const z = "get" + F.Util._capitalize(T);
      return F.Util._isFunction(this[z]) ? this[z]() : this.attrs[T];
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
        let z, N;
        if (!T)
          return this;
        for (z in T)
          z !== E && (N = D + F.Util._capitalize(z), F.Util._isFunction(this[N]) ? this[N](T[z]) : this._setAttr(z, T[z]));
      }), this;
    }
    isListening() {
      return this._getCache(w, this._isListening);
    }
    _isListening(T) {
      if (!this.listening())
        return !1;
      const N = this.getParent();
      return N && N !== T && this !== T ? N._isListening(T) : !0;
    }
    isVisible() {
      return this._getCache(X, this._isVisible);
    }
    _isVisible(T) {
      if (!this.visible())
        return !1;
      const N = this.getParent();
      return N && N !== T && this !== T ? N._isVisible(T) : !0;
    }
    shouldDrawHit(T, z = !1) {
      if (T)
        return this._isVisible(T) && this._isListening(T);
      const N = this.getLayer();
      let U = !1;
      d.DD._dragElements.forEach((K) => {
        K.dragStatus === "dragging" && (K.node.nodeType === "Stage" || K.node.getLayer() === N) && (U = !0);
      });
      const L = !z && !A.Konva.hitOnDragEnabled && (U || A.Konva.isTransforming());
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
      let T = this.getDepth(), z = this, N = 0, U, L, K, b;
      function de(se) {
        for (U = [], L = se.length, K = 0; K < L; K++)
          b = se[K], N++, b.nodeType !== W && (U = U.concat(b.getChildren().slice())), b._id === z._id && (K = L);
        U.length > 0 && U[0].getDepth() <= T && de(U);
      }
      const ge = this.getStage();
      return z.nodeType !== H && ge && de(ge.getChildren()), N;
    }
    getDepth() {
      let T = 0, z = this.parent;
      for (; z; )
        T++, z = z.parent;
      return T;
    }
    _batchTransformChanges(T) {
      this._batchingTransformChange = !0, T(), this._batchingTransformChange = !1, this._needClearTransformCache && (this._clearCache(B), this._clearSelfAndDescendantCache(m)), this._needClearTransformCache = !1;
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
      const N = this.getAbsoluteTransform().copy();
      return N.invert(), N.point(z);
    }
    getAbsolutePosition(T) {
      let z = !1, N = this.parent;
      for (; N; ) {
        if (N.isCached()) {
          z = !0;
          break;
        }
        N = N.parent;
      }
      z && !T && (T = !0);
      const U = this.getAbsoluteTransform(T).getMatrix(), L = new F.Transform(), K = this.offset();
      return L.m = U.slice(), L.translate(K.x, K.y), L.getTranslation();
    }
    setAbsolutePosition(T) {
      const { x: z, y: N, ...U } = this._clearTransform();
      this.attrs.x = z, this.attrs.y = N, this._clearCache(B);
      const L = this._getAbsoluteTransform().copy();
      return L.invert(), L.translate(T.x, T.y), T = {
        x: this.attrs.x + L.getTranslation().x,
        y: this.attrs.y + L.getTranslation().y
      }, this._setTransform(U), this.setPosition({ x: T.x, y: T.y }), this._clearCache(B), this._clearSelfAndDescendantCache(m), this;
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
      let z = T.x, N = T.y, U = this.x(), L = this.y();
      return z !== void 0 && (U += z), N !== void 0 && (L += N), this.setPosition({ x: U, y: L }), this;
    }
    _eachAncestorReverse(T, z) {
      let N = [], U = this.getParent(), L, K;
      if (!(z && z._id === this._id)) {
        for (N.unshift(this); U && (!z || U._id !== z._id); )
          N.unshift(U), U = U.parent;
        for (L = N.length, K = 0; K < L; K++)
          T(N[K]);
      }
    }
    rotate(T) {
      return this.rotation(this.rotation() + T), this;
    }
    moveToTop() {
      if (!this.parent)
        return F.Util.warn("Node has no parent. moveToTop function is ignored."), !1;
      const T = this.index, z = this.parent.getChildren().length;
      return T < z - 1 ? (this.parent.children.splice(T, 1), this.parent.children.push(this), this.parent._setChildrenIndices(), !0) : !1;
    }
    moveUp() {
      if (!this.parent)
        return F.Util.warn("Node has no parent. moveUp function is ignored."), !1;
      const T = this.index, z = this.parent.getChildren().length;
      return T < z - 1 ? (this.parent.children.splice(T, 1), this.parent.children.splice(T + 1, 0, this), this.parent._setChildrenIndices(), !0) : !1;
    }
    moveDown() {
      if (!this.parent)
        return F.Util.warn("Node has no parent. moveDown function is ignored."), !1;
      const T = this.index;
      return T > 0 ? (this.parent.children.splice(T, 1), this.parent.children.splice(T - 1, 0, this), this.parent._setChildrenIndices(), !0) : !1;
    }
    moveToBottom() {
      if (!this.parent)
        return F.Util.warn("Node has no parent. moveToBottom function is ignored."), !1;
      const T = this.index;
      return T > 0 ? (this.parent.children.splice(T, 1), this.parent.children.unshift(this), this.parent._setChildrenIndices(), !0) : !1;
    }
    setZIndex(T) {
      if (!this.parent)
        return F.Util.warn("Node has no parent. zIndex parameter is ignored."), this;
      (T < 0 || T >= this.parent.children.length) && F.Util.warn("Unexpected value " + T + " for zIndex property. zIndex is just index of a node in children of its parent. Expected value is from 0 to " + (this.parent.children.length - 1) + ".");
      const z = this.index;
      return this.parent.children.splice(z, 1), this.parent.children.splice(T, 0, this), this.parent._setChildrenIndices(), this;
    }
    getAbsoluteOpacity() {
      return this._getCache(f, this._getAbsoluteOpacity);
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
      let T = this.getAttrs(), z, N, U, L, K;
      const b = {
        attrs: {},
        className: this.getClassName()
      };
      for (z in T)
        N = T[z], K = F.Util.isObject(N) && !F.Util._isPlainObject(N) && !F.Util._isArray(N), !K && (U = typeof this[z] == "function" && this[z], delete T[z], L = U ? U.call(this) : null, T[z] = N, L !== N && (b.attrs[z] = N));
      return F.Util._prepareToStringify(b);
    }
    toJSON() {
      return JSON.stringify(this.toObject());
    }
    getParent() {
      return this.parent;
    }
    findAncestors(T, z, N) {
      const U = [];
      z && this._isMatch(T) && U.push(this);
      let L = this.parent;
      for (; L; ) {
        if (L === N)
          return U;
        L._isMatch(T) && U.push(L), L = L.parent;
      }
      return U;
    }
    isAncestorOf(T) {
      return !1;
    }
    findAncestor(T, z, N) {
      return this.findAncestors(T, z, N)[0];
    }
    _isMatch(T) {
      if (!T)
        return !1;
      if (typeof T == "function")
        return T(this);
      let z = T.replace(/ /g, "").split(","), N = z.length, U, L;
      for (U = 0; U < N; U++)
        if (L = z[U], F.Util.isValidSelector(L) || (F.Util.warn('Selector "' + L + '" is invalid. Allowed selectors examples are "#foo", ".bar" or "Group".'), F.Util.warn('If you have a custom shape with such className, please change it to start with upper letter like "Triangle".'), F.Util.warn("Konva is awesome, right?")), L.charAt(0) === "#") {
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
      return this._getCache(G, this._getStage);
    }
    _getStage() {
      const T = this.getParent();
      return T ? T.getStage() : null;
    }
    fire(T, z = {}, N) {
      return z.target = z.target || this, N ? this._fireAndBubble(T, z) : this._fire(T, z), this;
    }
    getAbsoluteTransform(T) {
      return T ? this._getAbsoluteTransform(T) : this._getCache(m, this._getAbsoluteTransform);
    }
    _getAbsoluteTransform(T) {
      let z;
      if (T)
        return z = new F.Transform(), this._eachAncestorReverse(function(N) {
          const U = N.transformsEnabled();
          U === "all" ? z.multiply(N.getTransform()) : U === "position" && z.translate(N.x() - N.offsetX(), N.y() - N.offsetY());
        }, T), z;
      {
        z = this._cache.get(m) || new F.Transform(), this.parent ? this.parent.getAbsoluteTransform().copyInto(z) : z.reset();
        const N = this.transformsEnabled();
        if (N === "all")
          z.multiply(this.getTransform());
        else if (N === "position") {
          const U = this.attrs.x || 0, L = this.attrs.y || 0, K = this.attrs.offsetX || 0, b = this.attrs.offsetY || 0;
          z.translate(U - K, L - b);
        }
        return z.dirty = !1, z;
      }
    }
    getAbsoluteScale(T) {
      let z = this;
      for (; z; )
        z._isUnderCache && (T = z), z = z.getParent();
      const U = this.getAbsoluteTransform(T).decompose();
      return {
        x: U.scaleX,
        y: U.scaleY
      };
    }
    getAbsoluteRotation() {
      return this.getAbsoluteTransform().decompose().rotation;
    }
    getTransform() {
      return this._getCache(B, this._getTransform);
    }
    _getTransform() {
      var T, z;
      const N = this._cache.get(B) || new F.Transform();
      N.reset();
      const U = this.x(), L = this.y(), K = A.Konva.getAngle(this.rotation()), b = (T = this.attrs.scaleX) !== null && T !== void 0 ? T : 1, de = (z = this.attrs.scaleY) !== null && z !== void 0 ? z : 1, ge = this.attrs.skewX || 0, se = this.attrs.skewY || 0, q = this.attrs.offsetX || 0, re = this.attrs.offsetY || 0;
      return (U !== 0 || L !== 0) && N.translate(U, L), K !== 0 && N.rotate(K), (ge !== 0 || se !== 0) && N.skew(ge, se), (b !== 1 || de !== 1) && N.scale(b, de), (q !== 0 || re !== 0) && N.translate(-1 * q, -1 * re), N.dirty = !1, N;
    }
    clone(T) {
      let z = F.Util.cloneObject(this.attrs), N, U, L, K, b;
      for (N in T)
        z[N] = T[N];
      const de = new this.constructor(z);
      for (N in this.eventListeners)
        for (U = this.eventListeners[N], L = U.length, K = 0; K < L; K++)
          b = U[K], b.name.indexOf(S) < 0 && (de.eventListeners[N] || (de.eventListeners[N] = []), de.eventListeners[N].push(b));
      return de;
    }
    _toKonvaCanvas(T) {
      T = T || {};
      const z = this.getClientRect(), N = this.getStage(), U = T.x !== void 0 ? T.x : Math.floor(z.x), L = T.y !== void 0 ? T.y : Math.floor(z.y), K = T.pixelRatio || 1, b = new l.SceneCanvas({
        width: T.width || Math.ceil(z.width) || (N ? N.width() : 0),
        height: T.height || Math.ceil(z.height) || (N ? N.height() : 0),
        pixelRatio: K
      }), de = b.getContext(), ge = new l.SceneCanvas({
        width: b.width / b.pixelRatio + Math.abs(U),
        height: b.height / b.pixelRatio + Math.abs(L),
        pixelRatio: b.pixelRatio
      });
      return T.imageSmoothingEnabled === !1 && (de._context.imageSmoothingEnabled = !1), de.save(), (U || L) && de.translate(-1 * U, -1 * L), this.drawScene(b, void 0, ge), de.restore(), b;
    }
    toCanvas(T) {
      return this._toKonvaCanvas(T)._canvas;
    }
    toDataURL(T) {
      T = T || {};
      const z = T.mimeType || null, N = T.quality || null, U = this._toKonvaCanvas(T).toDataURL(z, N);
      return T.callback && T.callback(U), U;
    }
    toImage(T) {
      return new Promise((z, N) => {
        try {
          const U = T == null ? void 0 : T.callback;
          U && delete T.callback, F.Util._urlToImage(this.toDataURL(T), function(L) {
            z(L), U == null || U(L);
          });
        } catch (U) {
          N(U);
        }
      });
    }
    toBlob(T) {
      return new Promise((z, N) => {
        try {
          const U = T == null ? void 0 : T.callback;
          U && delete T.callback, this.toCanvas(T).toBlob((L) => {
            z(L), U == null || U(L);
          }, T == null ? void 0 : T.mimeType, T == null ? void 0 : T.quality);
        } catch (U) {
          N(U);
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
      return this.attrs.dragDistance !== void 0 ? this.attrs.dragDistance : this.parent ? this.parent.getDragDistance() : A.Konva.dragDistance;
    }
    _off(T, z, N) {
      let U = this.eventListeners[T], L, K, b;
      for (L = 0; L < U.length; L++)
        if (K = U[L].name, b = U[L].handler, (K !== "konva" || z === "konva") && (!z || K === z) && (!N || N === b)) {
          if (U.splice(L, 1), U.length === 0) {
            delete this.eventListeners[T];
            break;
          }
          L--;
        }
    }
    _fireChangeEvent(T, z, N) {
      this._fire(T + M, {
        oldVal: z,
        newVal: N
      });
    }
    addName(T) {
      if (!this.hasName(T)) {
        const z = this.name(), N = z ? z + " " + T : T;
        this.name(N);
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
      const z = (this.name() || "").split(/\s/g), N = z.indexOf(T);
      return N !== -1 && (z.splice(N, 1), this.name(z.join(" "))), this;
    }
    setAttr(T, z) {
      const N = this[D + F.Util._capitalize(T)];
      return F.Util._isFunction(N) ? N.call(this, z) : this._setAttr(T, z), this;
    }
    _requestDraw() {
      if (A.Konva.autoDrawEnabled) {
        const T = this.getLayer() || this.getStage();
        T == null || T.batchDraw();
      }
    }
    _setAttr(T, z) {
      const N = this.attrs[T];
      N === z && !F.Util.isObject(z) || (z == null ? delete this.attrs[T] : this.attrs[T] = z, this._shouldFireChangeEvents && this._fireChangeEvent(T, N, z), this._requestDraw());
    }
    _setComponentAttr(T, z, N) {
      let U;
      N !== void 0 && (U = this.attrs[T], U || (this.attrs[T] = this.getAttr(T)), this.attrs[T][z] = N, this._fireChangeEvent(T, U, N));
    }
    _fireAndBubble(T, z, N) {
      z && this.nodeType === W && (z.target = this);
      const U = [
        P,
        O,
        j,
        _,
        h,
        R
      ];
      if (!(U.indexOf(T) !== -1 && (N && (this === N || this.isAncestorOf && this.isAncestorOf(N)) || this.nodeType === "Stage" && !N))) {
        this._fire(T, z);
        const K = U.indexOf(T) !== -1 && N && N.isAncestorOf && N.isAncestorOf(this) && !N.isAncestorOf(this.parent);
        (z && !z.cancelBubble || !z) && this.parent && this.parent.isListening() && !K && (N && N.parent ? this._fireAndBubble.call(this.parent, T, z, N) : this._fireAndBubble.call(this.parent, T, z));
      }
    }
    _getProtoListeners(T) {
      var z, N, U;
      const L = (z = this._cache.get(g)) !== null && z !== void 0 ? z : {};
      let K = L == null ? void 0 : L[T];
      if (K === void 0) {
        K = [];
        let b = Object.getPrototypeOf(this);
        for (; b; ) {
          const de = (U = (N = b.eventListeners) === null || N === void 0 ? void 0 : N[T]) !== null && U !== void 0 ? U : [];
          K.push(...de), b = Object.getPrototypeOf(b);
        }
        L[T] = K, this._cache.set(g, L);
      }
      return K;
    }
    _fire(T, z) {
      z = z || {}, z.currentTarget = this, z.type = T;
      const N = this._getProtoListeners(T);
      if (N)
        for (let L = 0; L < N.length; L++)
          N[L].handler.call(this, z);
      const U = this.eventListeners[T];
      if (U)
        for (let L = 0; L < U.length; L++)
          U[L].handler.call(this, z);
    }
    draw() {
      return this.drawScene(), this.drawHit(), this;
    }
    _createDragElement(T) {
      const z = T ? T.pointerId : void 0, N = this.getStage(), U = this.getAbsolutePosition();
      if (!N)
        return;
      const L = N._getPointerById(z) || N._changedPointerPositions[0] || U;
      d.DD._dragElements.set(this._id, {
        node: this,
        startPointerPos: L,
        offset: {
          x: L.x - U.x,
          y: L.y - U.y
        },
        dragStatus: "ready",
        pointerId: z
      });
    }
    startDrag(T, z = !0) {
      d.DD._dragElements.has(this._id) || this._createDragElement(T);
      const N = d.DD._dragElements.get(this._id);
      N.dragStatus = "dragging", this.fire("dragstart", {
        type: "dragstart",
        target: this,
        evt: T && T.evt
      }, z);
    }
    _setDragPosition(T, z) {
      const N = this.getStage()._getPointerById(z.pointerId);
      if (!N)
        return;
      let U = {
        x: N.x - z.offset.x,
        y: N.y - z.offset.y
      };
      const L = this.dragBoundFunc();
      if (L !== void 0) {
        const K = L.call(this, U, T);
        K ? U = K : F.Util.warn("dragBoundFunc did not return any value. That is unexpected behavior. You must return new absolute position from dragBoundFunc.");
      }
      (!this._lastPos || this._lastPos.x !== U.x || this._lastPos.y !== U.y) && (this.setAbsolutePosition(U), this._requestDraw()), this._lastPos = U;
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
        if (!(!(T.evt.button !== void 0) || A.Konva.dragButtons.indexOf(T.evt.button) >= 0) || this.isDragging())
          return;
        let U = !1;
        d.DD._dragElements.forEach((L) => {
          this.isAncestorOf(L.node) && (U = !0);
        }), U || this._createDragElement(T);
      });
    }
    _dragChange() {
      if (this.attrs.draggable)
        this._listenDrag();
      else {
        if (this._dragCleanup(), !this.getStage())
          return;
        const z = d.DD._dragElements.get(this._id), N = z && z.dragStatus === "dragging", U = z && z.dragStatus === "ready";
        N ? this.stopDrag() : U && d.DD._dragElements.delete(this._id);
      }
    }
    _dragCleanup() {
      this.off("mousedown.konva"), this.off("touchstart.konva");
    }
    isClientRectOnScreen(T = { x: 0, y: 0 }) {
      const z = this.getStage();
      if (!z)
        return !1;
      const N = {
        x: -T.x,
        y: -T.y,
        width: z.width() + 2 * T.x,
        height: z.height() + 2 * T.y
      };
      return F.Util.haveIntersection(N, this.getClientRect());
    }
    static create(T, z) {
      return F.Util._isString(T) && (T = JSON.parse(T)), this._createNode(T, z);
    }
    static _createNode(T, z) {
      let N = cf.prototype.getClassName.call(T), U = T.children, L, K, b;
      z && (T.attrs.container = z), A.Konva[N] || (F.Util.warn('Can not find a node with class name "' + N + '". Fallback to "Shape".'), N = "Shape");
      const de = A.Konva[N];
      if (L = new de(T.attrs), U)
        for (K = U.length, b = 0; b < K; b++)
          L.add(cf._createNode(U[b]));
      return L;
    }
  };
  Xa.Node = ie, ie.prototype.nodeType = "Node", ie.prototype._attrsAffectingSize = [], ie.prototype.eventListeners = {}, ie.prototype.on.call(ie.prototype, Z, function() {
    if (this._batchingTransformChange) {
      this._needClearTransformCache = !0;
      return;
    }
    this._clearCache(B), this._clearSelfAndDescendantCache(m);
  }), ie.prototype.on.call(ie.prototype, "visibleChange.konva", function() {
    this._clearSelfAndDescendantCache(X);
  }), ie.prototype.on.call(ie.prototype, "listeningChange.konva", function() {
    this._clearSelfAndDescendantCache(w);
  }), ie.prototype.on.call(ie.prototype, "opacityChange.konva", function() {
    this._clearSelfAndDescendantCache(f);
  });
  const ee = v.Factory.addGetterSetter;
  return ee(ie, "zIndex"), ee(ie, "absolutePosition"), ee(ie, "position"), ee(ie, "x", 0, (0, C.getNumberValidator)()), ee(ie, "y", 0, (0, C.getNumberValidator)()), ee(ie, "globalCompositeOperation", "source-over", (0, C.getStringValidator)()), ee(ie, "opacity", 1, (0, C.getNumberValidator)()), ee(ie, "name", "", (0, C.getStringValidator)()), ee(ie, "id", "", (0, C.getStringValidator)()), ee(ie, "rotation", 0, (0, C.getNumberValidator)()), v.Factory.addComponentsGetterSetter(ie, "scale", ["x", "y"]), ee(ie, "scaleX", 1, (0, C.getNumberValidator)()), ee(ie, "scaleY", 1, (0, C.getNumberValidator)()), v.Factory.addComponentsGetterSetter(ie, "skew", ["x", "y"]), ee(ie, "skewX", 0, (0, C.getNumberValidator)()), ee(ie, "skewY", 0, (0, C.getNumberValidator)()), v.Factory.addComponentsGetterSetter(ie, "offset", ["x", "y"]), ee(ie, "offsetX", 0, (0, C.getNumberValidator)()), ee(ie, "offsetY", 0, (0, C.getNumberValidator)()), ee(ie, "dragDistance", void 0, (0, C.getNumberValidator)()), ee(ie, "width", 0, (0, C.getNumberValidator)()), ee(ie, "height", 0, (0, C.getNumberValidator)()), ee(ie, "listening", !0, (0, C.getBooleanValidator)()), ee(ie, "preventDefault", !0, (0, C.getBooleanValidator)()), ee(ie, "filters", void 0, function(me) {
    return this._filterUpToDate = !1, me;
  }), ee(ie, "visible", !0, (0, C.getBooleanValidator)()), ee(ie, "transformsEnabled", "all", (0, C.getStringValidator)()), ee(ie, "size"), ee(ie, "dragBoundFunc"), ee(ie, "draggable", !1, (0, C.getBooleanValidator)()), v.Factory.backCompat(ie, {
    rotateDeg: "rotate",
    setRotationDeg: "setRotation",
    getRotationDeg: "getRotation"
  }), Xa;
}
var Qa = {}, yh;
function sd() {
  if (yh) return Qa;
  yh = 1, Object.defineProperty(Qa, "__esModule", { value: !0 }), Qa.Container = void 0;
  const l = st(), d = sn(), v = at();
  let A = class extends d.Node {
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
        for (let g = 0; g < C.length; g++)
          this.add(C[g]);
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
      const g = [];
      return this._descendants((m) => {
        const x = m._isMatch(C);
        return x && g.push(m), !!(x && f);
      }), g;
    }
    _descendants(C) {
      let f = !1;
      const g = this.getChildren();
      for (const m of g) {
        if (f = C(m), f)
          return !0;
        if (m.hasChildren() && (f = m._descendants(C), f))
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
      return this.getChildren().forEach(function(g) {
        f.add(g.clone());
      }), f;
    }
    getAllIntersections(C) {
      const f = [];
      return this.find("Shape").forEach((g) => {
        g.isVisible() && g.intersects(C) && f.push(g);
      }), f;
    }
    _clearSelfAndDescendantCache(C) {
      var f;
      super._clearSelfAndDescendantCache(C), !this.isCached() && ((f = this.children) === null || f === void 0 || f.forEach(function(g) {
        g._clearSelfAndDescendantCache(C);
      }));
    }
    _setChildrenIndices() {
      var C;
      (C = this.children) === null || C === void 0 || C.forEach(function(f, g) {
        f.index = g;
      }), this._requestDraw();
    }
    drawScene(C, f, g) {
      const m = this.getLayer(), x = C || m && m.getCanvas(), k = x && x.getContext(), M = this._getCanvasCache(), E = M && M.scene, S = x && x.isCache;
      if (!this.isVisible() && !S)
        return this;
      if (E) {
        k.save();
        const w = this.getAbsoluteTransform(f).getMatrix();
        k.transform(w[0], w[1], w[2], w[3], w[4], w[5]), this._drawCachedSceneCanvas(k), k.restore();
      } else
        this._drawChildren("drawScene", x, f, g);
      return this;
    }
    drawHit(C, f) {
      if (!this.shouldDrawHit(f))
        return this;
      const g = this.getLayer(), m = C || g && g.hitCanvas, x = m && m.getContext(), k = this._getCanvasCache();
      if (k && k.hit) {
        x.save();
        const E = this.getAbsoluteTransform(f).getMatrix();
        x.transform(E[0], E[1], E[2], E[3], E[4], E[5]), this._drawCachedHitCanvas(x), x.restore();
      } else
        this._drawChildren("drawHit", m, f);
      return this;
    }
    _drawChildren(C, f, g, m) {
      var x;
      const k = f && f.getContext(), M = this.clipWidth(), E = this.clipHeight(), S = this.clipFunc(), w = typeof M == "number" && typeof E == "number" || S, P = g === this;
      if (w) {
        k.save();
        const j = this.getAbsoluteTransform(g);
        let _ = j.getMatrix();
        k.transform(_[0], _[1], _[2], _[3], _[4], _[5]), k.beginPath();
        let h;
        if (S)
          h = S.call(this, k, this);
        else {
          const R = this.clipX(), D = this.clipY();
          k.rect(R || 0, D || 0, M, E);
        }
        k.clip.apply(k, h), _ = j.copy().invert().getMatrix(), k.transform(_[0], _[1], _[2], _[3], _[4], _[5]);
      }
      const O = !P && this.globalCompositeOperation() !== "source-over" && C === "drawScene";
      O && (k.save(), k._applyGlobalCompositeOperation(this)), (x = this.children) === null || x === void 0 || x.forEach(function(j) {
        j[C](f, g, m);
      }), O && k.restore(), w && k.restore();
    }
    getClientRect(C = {}) {
      var f;
      const g = C.skipTransform, m = C.relativeTo;
      let x, k, M, E, S = {
        x: 1 / 0,
        y: 1 / 0,
        width: 0,
        height: 0
      };
      const w = this;
      (f = this.children) === null || f === void 0 || f.forEach(function(j) {
        if (!j.visible())
          return;
        const _ = j.getClientRect({
          relativeTo: w,
          skipShadow: C.skipShadow,
          skipStroke: C.skipStroke
        });
        _.width === 0 && _.height === 0 || (x === void 0 ? (x = _.x, k = _.y, M = _.x + _.width, E = _.y + _.height) : (x = Math.min(x, _.x), k = Math.min(k, _.y), M = Math.max(M, _.x + _.width), E = Math.max(E, _.y + _.height)));
      });
      const P = this.find("Shape");
      let O = !1;
      for (let j = 0; j < P.length; j++)
        if (P[j]._isVisible(this)) {
          O = !0;
          break;
        }
      return O && x !== void 0 ? S = {
        x,
        y: k,
        width: M - x,
        height: E - k
      } : S = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      }, g ? S : this._transformedRect(S, m);
    }
  };
  return Qa.Container = A, l.Factory.addComponentsGetterSetter(A, "clip", [
    "x",
    "y",
    "width",
    "height"
  ]), l.Factory.addGetterSetter(A, "clipX", void 0, (0, v.getNumberValidator)()), l.Factory.addGetterSetter(A, "clipY", void 0, (0, v.getNumberValidator)()), l.Factory.addGetterSetter(A, "clipWidth", void 0, (0, v.getNumberValidator)()), l.Factory.addGetterSetter(A, "clipHeight", void 0, (0, v.getNumberValidator)()), l.Factory.addGetterSetter(A, "clipFunc"), Qa;
}
var $d = {}, fs = {}, vh;
function G0() {
  if (vh) return fs;
  vh = 1, Object.defineProperty(fs, "__esModule", { value: !0 }), fs.getCapturedShape = A, fs.createEvent = F, fs.hasPointerCapture = C, fs.setPointerCapture = f, fs.releaseCapture = g;
  const l = et(), d = /* @__PURE__ */ new Map(), v = l.Konva._global.PointerEvent !== void 0;
  function A(m) {
    return d.get(m);
  }
  function F(m) {
    return {
      evt: m,
      pointerId: m.pointerId
    };
  }
  function C(m, x) {
    return d.get(m) === x;
  }
  function f(m, x) {
    g(m), x.getStage() && (d.set(m, x), v && x._fire("gotpointercapture", F(new PointerEvent("gotpointercapture"))));
  }
  function g(m, x) {
    const k = d.get(m);
    if (!k)
      return;
    const M = k.getStage();
    M && M.content, d.delete(m), v && k._fire("lostpointercapture", F(new PointerEvent("lostpointercapture")));
  }
  return fs;
}
var _h;
function L1() {
  return _h || (_h = 1, (function(l) {
    Object.defineProperty(l, "__esModule", { value: !0 }), l.Stage = l.stages = void 0;
    const d = Qt(), v = st(), A = sd(), F = et(), C = od(), f = mf(), g = et(), m = G0(), x = "Stage", k = "string", M = "px", E = "mouseout", S = "mouseleave", w = "mouseover", P = "mouseenter", O = "mousemove", j = "mousedown", _ = "mouseup", h = "pointermove", R = "pointerdown", D = "pointerup", W = "pointercancel", J = "lostpointercapture", G = "pointerout", B = "pointerleave", H = "pointerover", X = "pointerenter", Z = "contextmenu", Q = "touchstart", ie = "touchend", ee = "touchmove", me = "touchcancel", T = "wheel", z = 5, N = [
      [P, "_pointerenter"],
      [j, "_pointerdown"],
      [O, "_pointermove"],
      [_, "_pointerup"],
      [S, "_pointerleave"],
      [Q, "_pointerdown"],
      [ee, "_pointermove"],
      [ie, "_pointerup"],
      [me, "_pointercancel"],
      [w, "_pointerover"],
      [T, "_wheel"],
      [Z, "_contextmenu"],
      [R, "_pointerdown"],
      [h, "_pointermove"],
      [D, "_pointerup"],
      [W, "_pointercancel"],
      [B, "_pointerleave"],
      [J, "_lostpointercapture"]
    ], U = {
      mouse: {
        [G]: E,
        [B]: S,
        [H]: w,
        [X]: P,
        [h]: O,
        [R]: j,
        [D]: _,
        [W]: "mousecancel",
        pointerclick: "click",
        pointerdblclick: "dblclick"
      },
      touch: {
        [G]: "touchout",
        [B]: "touchleave",
        [H]: "touchover",
        [X]: "touchenter",
        [h]: ee,
        [R]: Q,
        [D]: ie,
        [W]: me,
        pointerclick: "tap",
        pointerdblclick: "dbltap"
      },
      pointer: {
        [G]: G,
        [B]: B,
        [H]: H,
        [X]: X,
        [h]: h,
        [R]: R,
        [D]: D,
        [W]: W,
        pointerclick: "pointerclick",
        pointerdblclick: "pointerdblclick"
      }
    }, L = (se) => se.indexOf("pointer") >= 0 ? "pointer" : se.indexOf("touch") >= 0 ? "touch" : "mouse", K = (se) => {
      const q = L(se);
      if (q === "pointer")
        return F.Konva.pointerEventsEnabled && U.pointer;
      if (q === "touch")
        return U.touch;
      if (q === "mouse")
        return U.mouse;
    };
    function b(se = {}) {
      return (se.clipFunc || se.clipWidth || se.clipHeight) && d.Util.warn("Stage does not support clipping. Please use clip for Layers or Groups."), se;
    }
    const de = "Pointer position is missing and not registered by the stage. Looks like it is outside of the stage container. You can set it manually from event: stage.setPointersPositions(event);";
    l.stages = [];
    class ge extends A.Container {
      constructor(q) {
        super(b(q)), this._pointerPositions = [], this._changedPointerPositions = [], this._buildDOM(), this._bindContentEvents(), l.stages.push(this), this.on("widthChange.konva heightChange.konva", this._resizeDOM), this.on("visibleChange.konva", this._checkVisibility), this.on("clipWidthChange.konva clipHeightChange.konva clipFuncChange.konva", () => {
          b(this.attrs);
        }), this._checkVisibility();
      }
      _validateAdd(q) {
        const re = q.getType() === "Layer", ae = q.getType() === "FastLayer";
        re || ae || d.Util.throw("You may only add layers to the stage.");
      }
      _checkVisibility() {
        if (!this.content)
          return;
        const q = this.visible() ? "" : "none";
        this.content.style.display = q;
      }
      setContainer(q) {
        if (typeof q === k) {
          let re;
          if (q.charAt(0) === ".") {
            const ae = q.slice(1);
            q = document.getElementsByClassName(ae)[0];
          } else
            q.charAt(0) !== "#" ? re = q : re = q.slice(1), q = document.getElementById(re);
          if (!q)
            throw "Can not find container in document with id " + re;
        }
        return this._setAttr("container", q), this.content && (this.content.parentElement && this.content.parentElement.removeChild(this.content), q.appendChild(this.content)), this;
      }
      shouldDrawHit() {
        return !0;
      }
      clear() {
        const q = this.children, re = q.length;
        for (let ae = 0; ae < re; ae++)
          q[ae].clear();
        return this;
      }
      clone(q) {
        return q || (q = {}), q.container = typeof document < "u" && document.createElement("div"), A.Container.prototype.clone.call(this, q);
      }
      destroy() {
        super.destroy();
        const q = this.content;
        q && d.Util._isInDocument(q) && this.container().removeChild(q);
        const re = l.stages.indexOf(this);
        return re > -1 && l.stages.splice(re, 1), d.Util.releaseCanvas(this.bufferCanvas._canvas, this.bufferHitCanvas._canvas), this;
      }
      getPointerPosition() {
        const q = this._pointerPositions[0] || this._changedPointerPositions[0];
        return q ? {
          x: q.x,
          y: q.y
        } : (d.Util.warn(de), null);
      }
      _getPointerById(q) {
        return this._pointerPositions.find((re) => re.id === q);
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
        const re = new C.SceneCanvas({
          width: q.width,
          height: q.height,
          pixelRatio: q.pixelRatio || 1
        }), ae = re.getContext()._context, Ce = this.children;
        return (q.x || q.y) && ae.translate(-1 * q.x, -1 * q.y), Ce.forEach(function(Ee) {
          if (!Ee.isVisible())
            return;
          const De = Ee._toKonvaCanvas(q);
          ae.drawImage(De._canvas, q.x, q.y, De.getWidth() / De.getPixelRatio(), De.getHeight() / De.getPixelRatio());
        }), re;
      }
      getIntersection(q) {
        if (!q)
          return null;
        const re = this.children, ae = re.length, Ce = ae - 1;
        for (let Ee = Ce; Ee >= 0; Ee--) {
          const De = re[Ee].getIntersection(q);
          if (De)
            return De;
        }
        return null;
      }
      _resizeDOM() {
        const q = this.width(), re = this.height();
        this.content && (this.content.style.width = q + M, this.content.style.height = re + M), this.bufferCanvas.setSize(q, re), this.bufferHitCanvas.setSize(q, re), this.children.forEach((ae) => {
          ae.setSize({ width: q, height: re }), ae.draw();
        });
      }
      add(q, ...re) {
        if (arguments.length > 1) {
          for (let Ce = 0; Ce < arguments.length; Ce++)
            this.add(arguments[Ce]);
          return this;
        }
        super.add(q);
        const ae = this.children.length;
        return ae > z && d.Util.warn("The stage has " + ae + " layers. Recommended maximum number of layers is 3-5. Adding more layers into the stage may drop the performance. Rethink your tree structure, you can use Konva.Group."), q.setSize({ width: this.width(), height: this.height() }), q.draw(), F.Konva.isBrowser && this.content.appendChild(q.canvas._canvas), this;
      }
      getParent() {
        return null;
      }
      getLayer() {
        return null;
      }
      hasPointerCapture(q) {
        return m.hasPointerCapture(q, this);
      }
      setPointerCapture(q) {
        m.setPointerCapture(q, this);
      }
      releaseCapture(q) {
        m.releaseCapture(q, this);
      }
      getLayers() {
        return this.children;
      }
      _bindContentEvents() {
        F.Konva.isBrowser && N.forEach(([q, re]) => {
          this.content.addEventListener(q, (ae) => {
            this[re](ae);
          }, { passive: !1 });
        });
      }
      _pointerenter(q) {
        this.setPointersPositions(q);
        const re = K(q.type);
        re && this._fire(re.pointerenter, {
          evt: q,
          target: this,
          currentTarget: this
        });
      }
      _pointerover(q) {
        this.setPointersPositions(q);
        const re = K(q.type);
        re && this._fire(re.pointerover, {
          evt: q,
          target: this,
          currentTarget: this
        });
      }
      _getTargetShape(q) {
        let re = this[q + "targetShape"];
        return re && !re.getStage() && (re = null), re;
      }
      _pointerleave(q) {
        const re = K(q.type), ae = L(q.type);
        if (!re)
          return;
        this.setPointersPositions(q);
        const Ce = this._getTargetShape(ae), Ee = !(F.Konva.isDragging() || F.Konva.isTransforming()) || F.Konva.hitOnDragEnabled;
        Ce && Ee ? (Ce._fireAndBubble(re.pointerout, { evt: q }), Ce._fireAndBubble(re.pointerleave, { evt: q }), this._fire(re.pointerleave, {
          evt: q,
          target: this,
          currentTarget: this
        }), this[ae + "targetShape"] = null) : Ee && (this._fire(re.pointerleave, {
          evt: q,
          target: this,
          currentTarget: this
        }), this._fire(re.pointerout, {
          evt: q,
          target: this,
          currentTarget: this
        })), this.pointerPos = null, this._pointerPositions = [];
      }
      _pointerdown(q) {
        const re = K(q.type), ae = L(q.type);
        if (!re)
          return;
        this.setPointersPositions(q);
        let Ce = !1;
        this._changedPointerPositions.forEach((Ee) => {
          const De = this.getIntersection(Ee);
          if (f.DD.justDragged = !1, F.Konva["_" + ae + "ListenClick"] = !0, !De || !De.isListening()) {
            this[ae + "ClickStartShape"] = void 0;
            return;
          }
          F.Konva.capturePointerEventsEnabled && De.setPointerCapture(Ee.id), this[ae + "ClickStartShape"] = De, De._fireAndBubble(re.pointerdown, {
            evt: q,
            pointerId: Ee.id
          }), Ce = !0;
          const Ue = q.type.indexOf("touch") >= 0;
          De.preventDefault() && q.cancelable && Ue && q.preventDefault();
        }), Ce || this._fire(re.pointerdown, {
          evt: q,
          target: this,
          currentTarget: this,
          pointerId: this._pointerPositions[0].id
        });
      }
      _pointermove(q) {
        const re = K(q.type), ae = L(q.type);
        if (!re || (F.Konva.isDragging() && f.DD.node.preventDefault() && q.cancelable && q.preventDefault(), this.setPointersPositions(q), !(!(F.Konva.isDragging() || F.Konva.isTransforming()) || F.Konva.hitOnDragEnabled)))
          return;
        const Ee = {};
        let De = !1;
        const Ue = this._getTargetShape(ae);
        this._changedPointerPositions.forEach((Qe) => {
          const We = m.getCapturedShape(Qe.id) || this.getIntersection(Qe), At = Qe.id, Ze = { evt: q, pointerId: At }, Je = Ue !== We;
          if (Je && Ue && (Ue._fireAndBubble(re.pointerout, { ...Ze }, We), Ue._fireAndBubble(re.pointerleave, { ...Ze }, We)), We) {
            if (Ee[We._id])
              return;
            Ee[We._id] = !0;
          }
          We && We.isListening() ? (De = !0, Je && (We._fireAndBubble(re.pointerover, { ...Ze }, Ue), We._fireAndBubble(re.pointerenter, { ...Ze }, Ue), this[ae + "targetShape"] = We), We._fireAndBubble(re.pointermove, { ...Ze })) : Ue && (this._fire(re.pointerover, {
            evt: q,
            target: this,
            currentTarget: this,
            pointerId: At
          }), this[ae + "targetShape"] = null);
        }), De || this._fire(re.pointermove, {
          evt: q,
          target: this,
          currentTarget: this,
          pointerId: this._changedPointerPositions[0].id
        });
      }
      _pointerup(q) {
        const re = K(q.type), ae = L(q.type);
        if (!re)
          return;
        this.setPointersPositions(q);
        const Ce = this[ae + "ClickStartShape"], Ee = this[ae + "ClickEndShape"], De = {};
        let Ue = !1;
        this._changedPointerPositions.forEach((Qe) => {
          const We = m.getCapturedShape(Qe.id) || this.getIntersection(Qe);
          if (We) {
            if (We.releaseCapture(Qe.id), De[We._id])
              return;
            De[We._id] = !0;
          }
          const At = Qe.id, Ze = { evt: q, pointerId: At };
          let Je = !1;
          F.Konva["_" + ae + "InDblClickWindow"] ? (Je = !0, clearTimeout(this[ae + "DblTimeout"])) : f.DD.justDragged || (F.Konva["_" + ae + "InDblClickWindow"] = !0, clearTimeout(this[ae + "DblTimeout"])), this[ae + "DblTimeout"] = setTimeout(function() {
            F.Konva["_" + ae + "InDblClickWindow"] = !1;
          }, F.Konva.dblClickWindow), We && We.isListening() ? (Ue = !0, this[ae + "ClickEndShape"] = We, We._fireAndBubble(re.pointerup, { ...Ze }), F.Konva["_" + ae + "ListenClick"] && Ce && Ce === We && (We._fireAndBubble(re.pointerclick, { ...Ze }), Je && Ee && Ee === We && We._fireAndBubble(re.pointerdblclick, { ...Ze }))) : (this[ae + "ClickEndShape"] = null, F.Konva["_" + ae + "ListenClick"] && this._fire(re.pointerclick, {
            evt: q,
            target: this,
            currentTarget: this,
            pointerId: At
          }), Je && this._fire(re.pointerdblclick, {
            evt: q,
            target: this,
            currentTarget: this,
            pointerId: At
          }));
        }), Ue || this._fire(re.pointerup, {
          evt: q,
          target: this,
          currentTarget: this,
          pointerId: this._changedPointerPositions[0].id
        }), F.Konva["_" + ae + "ListenClick"] = !1, q.cancelable && ae !== "touch" && ae !== "pointer" && q.preventDefault();
      }
      _contextmenu(q) {
        this.setPointersPositions(q);
        const re = this.getIntersection(this.getPointerPosition());
        re && re.isListening() ? re._fireAndBubble(Z, { evt: q }) : this._fire(Z, {
          evt: q,
          target: this,
          currentTarget: this
        });
      }
      _wheel(q) {
        this.setPointersPositions(q);
        const re = this.getIntersection(this.getPointerPosition());
        re && re.isListening() ? re._fireAndBubble(T, { evt: q }) : this._fire(T, {
          evt: q,
          target: this,
          currentTarget: this
        });
      }
      _pointercancel(q) {
        this.setPointersPositions(q);
        const re = m.getCapturedShape(q.pointerId) || this.getIntersection(this.getPointerPosition());
        re && re._fireAndBubble(D, m.createEvent(q)), m.releaseCapture(q.pointerId);
      }
      _lostpointercapture(q) {
        m.releaseCapture(q.pointerId);
      }
      setPointersPositions(q) {
        const re = this._getContentPosition();
        let ae = null, Ce = null;
        q = q || window.event, q.touches !== void 0 ? (this._pointerPositions = [], this._changedPointerPositions = [], Array.prototype.forEach.call(q.touches, (Ee) => {
          this._pointerPositions.push({
            id: Ee.identifier,
            x: (Ee.clientX - re.left) / re.scaleX,
            y: (Ee.clientY - re.top) / re.scaleY
          });
        }), Array.prototype.forEach.call(q.changedTouches || q.touches, (Ee) => {
          this._changedPointerPositions.push({
            id: Ee.identifier,
            x: (Ee.clientX - re.left) / re.scaleX,
            y: (Ee.clientY - re.top) / re.scaleY
          });
        })) : (ae = (q.clientX - re.left) / re.scaleX, Ce = (q.clientY - re.top) / re.scaleY, this.pointerPos = {
          x: ae,
          y: Ce
        }, this._pointerPositions = [{ x: ae, y: Ce, id: d.Util._getFirstPointerId(q) }], this._changedPointerPositions = [
          { x: ae, y: Ce, id: d.Util._getFirstPointerId(q) }
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
        }), !F.Konva.isBrowser)
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
    l.Stage = ge, ge.prototype.nodeType = x, (0, g._registerNode)(ge), v.Factory.addGetterSetter(ge, "container"), F.Konva.isBrowser && document.addEventListener("visibilitychange", () => {
      l.stages.forEach((se) => {
        se.batchDraw();
      });
    });
  })($d)), $d;
}
var ba = {}, ef = {}, Sh;
function Fn() {
  return Sh || (Sh = 1, (function(l) {
    Object.defineProperty(l, "__esModule", { value: !0 }), l.Shape = l.shapes = void 0;
    const d = et(), v = Qt(), A = st(), F = sn(), C = at(), f = et(), g = G0(), m = "hasShadow", x = "shadowRGBA", k = "patternImage", M = "linearGradient", E = "radialGradient";
    let S;
    function w() {
      return S || (S = v.Util.createCanvasElement().getContext("2d"), S);
    }
    l.shapes = {};
    function P(B) {
      const H = this.attrs.fillRule;
      H ? B.fill(H) : B.fill();
    }
    function O(B) {
      B.stroke();
    }
    function j(B) {
      const H = this.attrs.fillRule;
      H ? B.fill(H) : B.fill();
    }
    function _(B) {
      B.stroke();
    }
    function h() {
      this._clearCache(m);
    }
    function R() {
      this._clearCache(x);
    }
    function D() {
      this._clearCache(k);
    }
    function W() {
      this._clearCache(M);
    }
    function J() {
      this._clearCache(E);
    }
    class G extends F.Node {
      constructor(H) {
        super(H);
        let X;
        for (; X = v.Util.getRandomColor(), !(X && !(X in l.shapes)); )
          ;
        this.colorKey = X, l.shapes[X] = this;
      }
      getContext() {
        return v.Util.warn("shape.getContext() method is deprecated. Please do not use it."), this.getLayer().getContext();
      }
      getCanvas() {
        return v.Util.warn("shape.getCanvas() method is deprecated. Please do not use it."), this.getLayer().getCanvas();
      }
      getSceneFunc() {
        return this.attrs.sceneFunc || this._sceneFunc;
      }
      getHitFunc() {
        return this.attrs.hitFunc || this._hitFunc;
      }
      hasShadow() {
        return this._getCache(m, this._hasShadow);
      }
      _hasShadow() {
        return this.shadowEnabled() && this.shadowOpacity() !== 0 && !!(this.shadowColor() || this.shadowBlur() || this.shadowOffsetX() || this.shadowOffsetY());
      }
      _getFillPattern() {
        return this._getCache(k, this.__getFillPattern);
      }
      __getFillPattern() {
        if (this.fillPatternImage()) {
          const X = w().createPattern(this.fillPatternImage(), this.fillPatternRepeat() || "repeat");
          if (X && X.setTransform) {
            const Z = new v.Transform();
            Z.translate(this.fillPatternX(), this.fillPatternY()), Z.rotate(d.Konva.getAngle(this.fillPatternRotation())), Z.scale(this.fillPatternScaleX(), this.fillPatternScaleY()), Z.translate(-1 * this.fillPatternOffsetX(), -1 * this.fillPatternOffsetY());
            const Q = Z.getMatrix(), ie = typeof DOMMatrix > "u" ? {
              a: Q[0],
              b: Q[1],
              c: Q[2],
              d: Q[3],
              e: Q[4],
              f: Q[5]
            } : new DOMMatrix(Q);
            X.setTransform(ie);
          }
          return X;
        }
      }
      _getLinearGradient() {
        return this._getCache(M, this.__getLinearGradient);
      }
      __getLinearGradient() {
        const H = this.fillLinearGradientColorStops();
        if (H) {
          const X = w(), Z = this.fillLinearGradientStartPoint(), Q = this.fillLinearGradientEndPoint(), ie = X.createLinearGradient(Z.x, Z.y, Q.x, Q.y);
          for (let ee = 0; ee < H.length; ee += 2)
            ie.addColorStop(H[ee], H[ee + 1]);
          return ie;
        }
      }
      _getRadialGradient() {
        return this._getCache(E, this.__getRadialGradient);
      }
      __getRadialGradient() {
        const H = this.fillRadialGradientColorStops();
        if (H) {
          const X = w(), Z = this.fillRadialGradientStartPoint(), Q = this.fillRadialGradientEndPoint(), ie = X.createRadialGradient(Z.x, Z.y, this.fillRadialGradientStartRadius(), Q.x, Q.y, this.fillRadialGradientEndRadius());
          for (let ee = 0; ee < H.length; ee += 2)
            ie.addColorStop(H[ee], H[ee + 1]);
          return ie;
        }
      }
      getShadowRGBA() {
        return this._getCache(x, this._getShadowRGBA);
      }
      _getShadowRGBA() {
        if (!this.hasShadow())
          return;
        const H = v.Util.colorToRGBA(this.shadowColor());
        if (H)
          return "rgba(" + H.r + "," + H.g + "," + H.b + "," + H.a * (this.shadowOpacity() || 1) + ")";
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
        const H = this.hitStrokeWidth();
        return H === "auto" ? this.hasStroke() : this.strokeEnabled() && !!H;
      }
      intersects(H) {
        const X = this.getStage();
        if (!X)
          return !1;
        const Z = X.bufferHitCanvas;
        return Z.getContext().clear(), this.drawHit(Z, void 0, !0), Z.context.getImageData(Math.round(H.x), Math.round(H.y), 1, 1).data[3] > 0;
      }
      destroy() {
        return F.Node.prototype.destroy.call(this), delete l.shapes[this.colorKey], delete this.colorKey, this;
      }
      _useBufferCanvas(H) {
        var X;
        if (!((X = this.attrs.perfectDrawEnabled) !== null && X !== void 0 ? X : !0))
          return !1;
        const Q = H || this.hasFill(), ie = this.hasStroke(), ee = this.getAbsoluteOpacity() !== 1;
        if (Q && ie && ee)
          return !0;
        const me = this.hasShadow(), T = this.shadowForStrokeEnabled();
        return !!(Q && ie && me && T);
      }
      setStrokeHitEnabled(H) {
        v.Util.warn("strokeHitEnabled property is deprecated. Please use hitStrokeWidth instead."), H ? this.hitStrokeWidth("auto") : this.hitStrokeWidth(0);
      }
      getStrokeHitEnabled() {
        return this.hitStrokeWidth() !== 0;
      }
      getSelfRect() {
        const H = this.size();
        return {
          x: this._centroid ? -H.width / 2 : 0,
          y: this._centroid ? -H.height / 2 : 0,
          width: H.width,
          height: H.height
        };
      }
      getClientRect(H = {}) {
        let X = !1, Z = this.getParent();
        for (; Z; ) {
          if (Z.isCached()) {
            X = !0;
            break;
          }
          Z = Z.getParent();
        }
        const Q = H.skipTransform, ie = H.relativeTo || X && this.getStage() || void 0, ee = this.getSelfRect(), T = !H.skipStroke && this.hasStroke() && this.strokeWidth() || 0, z = ee.width + T, N = ee.height + T, U = !H.skipShadow && this.hasShadow(), L = U ? this.shadowOffsetX() : 0, K = U ? this.shadowOffsetY() : 0, b = z + Math.abs(L), de = N + Math.abs(K), ge = U && this.shadowBlur() || 0, se = b + ge * 2, q = de + ge * 2, re = {
          width: se,
          height: q,
          x: -(T / 2 + ge) + Math.min(L, 0) + ee.x,
          y: -(T / 2 + ge) + Math.min(K, 0) + ee.y
        };
        return Q ? re : this._transformedRect(re, ie);
      }
      drawScene(H, X, Z) {
        const Q = this.getLayer(), ie = H || Q.getCanvas(), ee = ie.getContext(), me = this._getCanvasCache(), T = this.getSceneFunc(), z = this.hasShadow();
        let N;
        const U = X === this;
        if (!this.isVisible() && !U)
          return this;
        if (me) {
          ee.save();
          const L = this.getAbsoluteTransform(X).getMatrix();
          return ee.transform(L[0], L[1], L[2], L[3], L[4], L[5]), this._drawCachedSceneCanvas(ee), ee.restore(), this;
        }
        if (!T)
          return this;
        if (ee.save(), this._useBufferCanvas()) {
          N = this.getStage();
          const L = Z || N.bufferCanvas, K = L.getContext();
          K.clear(), K.save(), K._applyLineJoin(this);
          const b = this.getAbsoluteTransform(X).getMatrix();
          K.transform(b[0], b[1], b[2], b[3], b[4], b[5]), T.call(this, K, this), K.restore();
          const de = L.pixelRatio;
          z && ee._applyShadow(this), ee._applyOpacity(this), ee._applyGlobalCompositeOperation(this), ee.drawImage(L._canvas, L.x || 0, L.y || 0, L.width / de, L.height / de);
        } else {
          if (ee._applyLineJoin(this), !U) {
            const L = this.getAbsoluteTransform(X).getMatrix();
            ee.transform(L[0], L[1], L[2], L[3], L[4], L[5]), ee._applyOpacity(this), ee._applyGlobalCompositeOperation(this);
          }
          z && ee._applyShadow(this), T.call(this, ee, this);
        }
        return ee.restore(), this;
      }
      drawHit(H, X, Z = !1) {
        if (!this.shouldDrawHit(X, Z))
          return this;
        const Q = this.getLayer(), ie = H || Q.hitCanvas, ee = ie && ie.getContext(), me = this.hitFunc() || this.sceneFunc(), T = this._getCanvasCache(), z = T && T.hit;
        if (this.colorKey || v.Util.warn("Looks like your canvas has a destroyed shape in it. Do not reuse shape after you destroyed it. If you want to reuse shape you should call remove() instead of destroy()"), z) {
          ee.save();
          const U = this.getAbsoluteTransform(X).getMatrix();
          return ee.transform(U[0], U[1], U[2], U[3], U[4], U[5]), this._drawCachedHitCanvas(ee), ee.restore(), this;
        }
        if (!me)
          return this;
        if (ee.save(), ee._applyLineJoin(this), !(this === X)) {
          const U = this.getAbsoluteTransform(X).getMatrix();
          ee.transform(U[0], U[1], U[2], U[3], U[4], U[5]);
        }
        return me.call(this, ee, this), ee.restore(), this;
      }
      drawHitFromCache(H = 0) {
        const X = this._getCanvasCache(), Z = this._getCachedSceneCanvas(), Q = X.hit, ie = Q.getContext(), ee = Q.getWidth(), me = Q.getHeight();
        ie.clear(), ie.drawImage(Z._canvas, 0, 0, ee, me);
        try {
          const T = ie.getImageData(0, 0, ee, me), z = T.data, N = z.length, U = v.Util._hexToRgb(this.colorKey);
          for (let L = 0; L < N; L += 4)
            z[L + 3] > H ? (z[L] = U.r, z[L + 1] = U.g, z[L + 2] = U.b, z[L + 3] = 255) : z[L + 3] = 0;
          ie.putImageData(T, 0, 0);
        } catch (T) {
          v.Util.error("Unable to draw hit graph from cached scene canvas. " + T.message);
        }
        return this;
      }
      hasPointerCapture(H) {
        return g.hasPointerCapture(H, this);
      }
      setPointerCapture(H) {
        g.setPointerCapture(H, this);
      }
      releaseCapture(H) {
        g.releaseCapture(H, this);
      }
    }
    l.Shape = G, G.prototype._fillFunc = P, G.prototype._strokeFunc = O, G.prototype._fillFuncHit = j, G.prototype._strokeFuncHit = _, G.prototype._centroid = !1, G.prototype.nodeType = "Shape", (0, f._registerNode)(G), G.prototype.eventListeners = {}, G.prototype.on.call(G.prototype, "shadowColorChange.konva shadowBlurChange.konva shadowOffsetChange.konva shadowOpacityChange.konva shadowEnabledChange.konva", h), G.prototype.on.call(G.prototype, "shadowColorChange.konva shadowOpacityChange.konva shadowEnabledChange.konva", R), G.prototype.on.call(G.prototype, "fillPriorityChange.konva fillPatternImageChange.konva fillPatternRepeatChange.konva fillPatternScaleXChange.konva fillPatternScaleYChange.konva fillPatternOffsetXChange.konva fillPatternOffsetYChange.konva fillPatternXChange.konva fillPatternYChange.konva fillPatternRotationChange.konva", D), G.prototype.on.call(G.prototype, "fillPriorityChange.konva fillLinearGradientColorStopsChange.konva fillLinearGradientStartPointXChange.konva fillLinearGradientStartPointYChange.konva fillLinearGradientEndPointXChange.konva fillLinearGradientEndPointYChange.konva", W), G.prototype.on.call(G.prototype, "fillPriorityChange.konva fillRadialGradientColorStopsChange.konva fillRadialGradientStartPointXChange.konva fillRadialGradientStartPointYChange.konva fillRadialGradientEndPointXChange.konva fillRadialGradientEndPointYChange.konva fillRadialGradientStartRadiusChange.konva fillRadialGradientEndRadiusChange.konva", J), A.Factory.addGetterSetter(G, "stroke", void 0, (0, C.getStringOrGradientValidator)()), A.Factory.addGetterSetter(G, "strokeWidth", 2, (0, C.getNumberValidator)()), A.Factory.addGetterSetter(G, "fillAfterStrokeEnabled", !1), A.Factory.addGetterSetter(G, "hitStrokeWidth", "auto", (0, C.getNumberOrAutoValidator)()), A.Factory.addGetterSetter(G, "strokeHitEnabled", !0, (0, C.getBooleanValidator)()), A.Factory.addGetterSetter(G, "perfectDrawEnabled", !0, (0, C.getBooleanValidator)()), A.Factory.addGetterSetter(G, "shadowForStrokeEnabled", !0, (0, C.getBooleanValidator)()), A.Factory.addGetterSetter(G, "lineJoin"), A.Factory.addGetterSetter(G, "lineCap"), A.Factory.addGetterSetter(G, "sceneFunc"), A.Factory.addGetterSetter(G, "hitFunc"), A.Factory.addGetterSetter(G, "dash"), A.Factory.addGetterSetter(G, "dashOffset", 0, (0, C.getNumberValidator)()), A.Factory.addGetterSetter(G, "shadowColor", void 0, (0, C.getStringValidator)()), A.Factory.addGetterSetter(G, "shadowBlur", 0, (0, C.getNumberValidator)()), A.Factory.addGetterSetter(G, "shadowOpacity", 1, (0, C.getNumberValidator)()), A.Factory.addComponentsGetterSetter(G, "shadowOffset", ["x", "y"]), A.Factory.addGetterSetter(G, "shadowOffsetX", 0, (0, C.getNumberValidator)()), A.Factory.addGetterSetter(G, "shadowOffsetY", 0, (0, C.getNumberValidator)()), A.Factory.addGetterSetter(G, "fillPatternImage"), A.Factory.addGetterSetter(G, "fill", void 0, (0, C.getStringOrGradientValidator)()), A.Factory.addGetterSetter(G, "fillPatternX", 0, (0, C.getNumberValidator)()), A.Factory.addGetterSetter(G, "fillPatternY", 0, (0, C.getNumberValidator)()), A.Factory.addGetterSetter(G, "fillLinearGradientColorStops"), A.Factory.addGetterSetter(G, "strokeLinearGradientColorStops"), A.Factory.addGetterSetter(G, "fillRadialGradientStartRadius", 0), A.Factory.addGetterSetter(G, "fillRadialGradientEndRadius", 0), A.Factory.addGetterSetter(G, "fillRadialGradientColorStops"), A.Factory.addGetterSetter(G, "fillPatternRepeat", "repeat"), A.Factory.addGetterSetter(G, "fillEnabled", !0), A.Factory.addGetterSetter(G, "strokeEnabled", !0), A.Factory.addGetterSetter(G, "shadowEnabled", !0), A.Factory.addGetterSetter(G, "dashEnabled", !0), A.Factory.addGetterSetter(G, "strokeScaleEnabled", !0), A.Factory.addGetterSetter(G, "fillPriority", "color"), A.Factory.addComponentsGetterSetter(G, "fillPatternOffset", ["x", "y"]), A.Factory.addGetterSetter(G, "fillPatternOffsetX", 0, (0, C.getNumberValidator)()), A.Factory.addGetterSetter(G, "fillPatternOffsetY", 0, (0, C.getNumberValidator)()), A.Factory.addComponentsGetterSetter(G, "fillPatternScale", ["x", "y"]), A.Factory.addGetterSetter(G, "fillPatternScaleX", 1, (0, C.getNumberValidator)()), A.Factory.addGetterSetter(G, "fillPatternScaleY", 1, (0, C.getNumberValidator)()), A.Factory.addComponentsGetterSetter(G, "fillLinearGradientStartPoint", [
      "x",
      "y"
    ]), A.Factory.addComponentsGetterSetter(G, "strokeLinearGradientStartPoint", [
      "x",
      "y"
    ]), A.Factory.addGetterSetter(G, "fillLinearGradientStartPointX", 0), A.Factory.addGetterSetter(G, "strokeLinearGradientStartPointX", 0), A.Factory.addGetterSetter(G, "fillLinearGradientStartPointY", 0), A.Factory.addGetterSetter(G, "strokeLinearGradientStartPointY", 0), A.Factory.addComponentsGetterSetter(G, "fillLinearGradientEndPoint", [
      "x",
      "y"
    ]), A.Factory.addComponentsGetterSetter(G, "strokeLinearGradientEndPoint", [
      "x",
      "y"
    ]), A.Factory.addGetterSetter(G, "fillLinearGradientEndPointX", 0), A.Factory.addGetterSetter(G, "strokeLinearGradientEndPointX", 0), A.Factory.addGetterSetter(G, "fillLinearGradientEndPointY", 0), A.Factory.addGetterSetter(G, "strokeLinearGradientEndPointY", 0), A.Factory.addComponentsGetterSetter(G, "fillRadialGradientStartPoint", [
      "x",
      "y"
    ]), A.Factory.addGetterSetter(G, "fillRadialGradientStartPointX", 0), A.Factory.addGetterSetter(G, "fillRadialGradientStartPointY", 0), A.Factory.addComponentsGetterSetter(G, "fillRadialGradientEndPoint", [
      "x",
      "y"
    ]), A.Factory.addGetterSetter(G, "fillRadialGradientEndPointX", 0), A.Factory.addGetterSetter(G, "fillRadialGradientEndPointY", 0), A.Factory.addGetterSetter(G, "fillPatternRotation", 0), A.Factory.addGetterSetter(G, "fillRule", void 0, (0, C.getStringValidator)()), A.Factory.backCompat(G, {
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
  })(ef)), ef;
}
var wh;
function U0() {
  if (wh) return ba;
  wh = 1, Object.defineProperty(ba, "__esModule", { value: !0 }), ba.Layer = void 0;
  const l = Qt(), d = sd(), v = sn(), A = st(), F = od(), C = at(), f = Fn(), g = et(), m = "#", x = "beforeDraw", k = "draw", M = [
    { x: 0, y: 0 },
    { x: -1, y: -1 },
    { x: 1, y: -1 },
    { x: 1, y: 1 },
    { x: -1, y: 1 }
  ], E = M.length;
  class S extends d.Container {
    constructor(P) {
      super(P), this.canvas = new F.SceneCanvas(), this.hitCanvas = new F.HitCanvas({
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
      const O = this.getStage();
      return O && O.content && (O.content.removeChild(this.getNativeCanvasElement()), P < O.children.length - 1 ? O.content.insertBefore(this.getNativeCanvasElement(), O.children[P + 1].getCanvas()._canvas) : O.content.appendChild(this.getNativeCanvasElement())), this;
    }
    moveToTop() {
      v.Node.prototype.moveToTop.call(this);
      const P = this.getStage();
      return P && P.content && (P.content.removeChild(this.getNativeCanvasElement()), P.content.appendChild(this.getNativeCanvasElement())), !0;
    }
    moveUp() {
      if (!v.Node.prototype.moveUp.call(this))
        return !1;
      const O = this.getStage();
      return !O || !O.content ? !1 : (O.content.removeChild(this.getNativeCanvasElement()), this.index < O.children.length - 1 ? O.content.insertBefore(this.getNativeCanvasElement(), O.children[this.index + 1].getCanvas()._canvas) : O.content.appendChild(this.getNativeCanvasElement()), !0);
    }
    moveDown() {
      if (v.Node.prototype.moveDown.call(this)) {
        const P = this.getStage();
        if (P) {
          const O = P.children;
          P.content && (P.content.removeChild(this.getNativeCanvasElement()), P.content.insertBefore(this.getNativeCanvasElement(), O[this.index + 1].getCanvas()._canvas));
        }
        return !0;
      }
      return !1;
    }
    moveToBottom() {
      if (v.Node.prototype.moveToBottom.call(this)) {
        const P = this.getStage();
        if (P) {
          const O = P.children;
          P.content && (P.content.removeChild(this.getNativeCanvasElement()), P.content.insertBefore(this.getNativeCanvasElement(), O[1].getCanvas()._canvas));
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
      return v.Node.prototype.remove.call(this), P && P.parentNode && l.Util._isInDocument(P) && P.parentNode.removeChild(P), this;
    }
    getStage() {
      return this.parent;
    }
    setSize({ width: P, height: O }) {
      return this.canvas.setSize(P, O), this.hitCanvas.setSize(P, O), this._setSmoothEnabled(), this;
    }
    _validateAdd(P) {
      const O = P.getType();
      O !== "Group" && O !== "Shape" && l.Util.throw("You may only add groups and shapes to a layer.");
    }
    _toKonvaCanvas(P) {
      return P = P || {}, P.width = P.width || this.getWidth(), P.height = P.height || this.getHeight(), P.x = P.x !== void 0 ? P.x : this.x(), P.y = P.y !== void 0 ? P.y : this.y(), v.Node.prototype._toKonvaCanvas.call(this, P);
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
    getIntersection(P) {
      if (!this.isListening() || !this.isVisible())
        return null;
      let O = 1, j = !1;
      for (; ; ) {
        for (let _ = 0; _ < E; _++) {
          const h = M[_], R = this._getIntersection({
            x: P.x + h.x * O,
            y: P.y + h.y * O
          }), D = R.shape;
          if (D)
            return D;
          if (j = !!R.antialiased, !R.antialiased)
            break;
        }
        if (j)
          O += 1;
        else
          return null;
      }
    }
    _getIntersection(P) {
      const O = this.hitCanvas.pixelRatio, j = this.hitCanvas.context.getImageData(Math.round(P.x * O), Math.round(P.y * O), 1, 1).data, _ = j[3];
      if (_ === 255) {
        const h = l.Util._rgbToHex(j[0], j[1], j[2]), R = f.shapes[m + h];
        return R ? {
          shape: R
        } : {
          antialiased: !0
        };
      } else if (_ > 0)
        return {
          antialiased: !0
        };
      return {};
    }
    drawScene(P, O, j) {
      const _ = this.getLayer(), h = P || _ && _.getCanvas();
      return this._fire(x, {
        node: this
      }), this.clearBeforeDraw() && h.getContext().clear(), d.Container.prototype.drawScene.call(this, h, O, j), this._fire(k, {
        node: this
      }), this;
    }
    drawHit(P, O) {
      const j = this.getLayer(), _ = P || j && j.hitCanvas;
      return j && j.clearBeforeDraw() && j.getHitCanvas().getContext().clear(), d.Container.prototype.drawHit.call(this, _, O), this;
    }
    enableHitGraph() {
      return this.hitGraphEnabled(!0), this;
    }
    disableHitGraph() {
      return this.hitGraphEnabled(!1), this;
    }
    setHitGraphEnabled(P) {
      l.Util.warn("hitGraphEnabled method is deprecated. Please use layer.listening() instead."), this.listening(P);
    }
    getHitGraphEnabled(P) {
      return l.Util.warn("hitGraphEnabled method is deprecated. Please use layer.listening() instead."), this.listening();
    }
    toggleHitCanvas() {
      if (!this.parent || !this.parent.content)
        return;
      const P = this.parent;
      !!this.hitCanvas._canvas.parentNode ? P.content.removeChild(this.hitCanvas._canvas) : P.content.appendChild(this.hitCanvas._canvas);
    }
    destroy() {
      return l.Util.releaseCanvas(this.getNativeCanvasElement(), this.getHitCanvas()._canvas), super.destroy();
    }
  }
  return ba.Layer = S, S.prototype.nodeType = "Layer", (0, g._registerNode)(S), A.Factory.addGetterSetter(S, "imageSmoothingEnabled", !0), A.Factory.addGetterSetter(S, "clearBeforeDraw", !0), A.Factory.addGetterSetter(S, "hitGraphEnabled", !0, (0, C.getBooleanValidator)()), ba;
}
var Ja = {}, xh;
function A1() {
  if (xh) return Ja;
  xh = 1, Object.defineProperty(Ja, "__esModule", { value: !0 }), Ja.FastLayer = void 0;
  const l = Qt(), d = U0(), v = et();
  let A = class extends d.Layer {
    constructor(C) {
      super(C), this.listening(!1), l.Util.warn('Konva.Fast layer is deprecated. Please use "new Konva.Layer({ listening: false })" instead.');
    }
  };
  return Ja.FastLayer = A, A.prototype.nodeType = "FastLayer", (0, v._registerNode)(A), Ja;
}
var Za = {}, Ch;
function yf() {
  if (Ch) return Za;
  Ch = 1, Object.defineProperty(Za, "__esModule", { value: !0 }), Za.Group = void 0;
  const l = Qt(), d = sd(), v = et();
  class A extends d.Container {
    _validateAdd(C) {
      const f = C.getType();
      f !== "Group" && f !== "Shape" && l.Util.throw("You may only add groups and shapes to groups.");
    }
  }
  return Za.Group = A, A.prototype.nodeType = "Group", (0, v._registerNode)(A), Za;
}
var $a = {}, kh;
function vf() {
  if (kh) return $a;
  kh = 1, Object.defineProperty($a, "__esModule", { value: !0 }), $a.Animation = void 0;
  const l = et(), d = Qt(), v = (function() {
    return l.glob.performance && l.glob.performance.now ? function() {
      return l.glob.performance.now();
    } : function() {
      return (/* @__PURE__ */ new Date()).getTime();
    };
  })();
  let A = class bl {
    constructor(C, f) {
      this.id = bl.animIdCounter++, this.frame = {
        time: 0,
        timeDiff: 0,
        lastTime: v(),
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
      const f = this.layers, g = f.length;
      for (let m = 0; m < g; m++)
        if (f[m]._id === C._id)
          return !1;
      return this.layers.push(C), !0;
    }
    isRunning() {
      const f = bl.animations, g = f.length;
      for (let m = 0; m < g; m++)
        if (f[m].id === this.id)
          return !0;
      return !1;
    }
    start() {
      return this.stop(), this.frame.timeDiff = 0, this.frame.lastTime = v(), bl._addAnimation(this), this;
    }
    stop() {
      return bl._removeAnimation(this), this;
    }
    _updateFrameObject(C) {
      this.frame.timeDiff = C - this.frame.lastTime, this.frame.lastTime = C, this.frame.time += this.frame.timeDiff, this.frame.frameRate = 1e3 / this.frame.timeDiff;
    }
    static _addAnimation(C) {
      this.animations.push(C), this._handleAnimation();
    }
    static _removeAnimation(C) {
      const f = C.id, g = this.animations, m = g.length;
      for (let x = 0; x < m; x++)
        if (g[x].id === f) {
          this.animations.splice(x, 1);
          break;
        }
    }
    static _runFrames() {
      const C = {}, f = this.animations;
      for (let g = 0; g < f.length; g++) {
        const m = f[g], x = m.layers, k = m.func;
        m._updateFrameObject(v());
        const M = x.length;
        let E;
        if (k ? E = k.call(m, m.frame) !== !1 : E = !0, !!E)
          for (let S = 0; S < M; S++) {
            const w = x[S];
            w._id !== void 0 && (C[w._id] = w);
          }
      }
      for (const g in C)
        C.hasOwnProperty(g) && C[g].batchDraw();
    }
    static _animationLoop() {
      const C = bl;
      C.animations.length ? (C._runFrames(), d.Util.requestAnimFrame(C._animationLoop)) : C.animRunning = !1;
    }
    static _handleAnimation() {
      this.animRunning || (this.animRunning = !0, d.Util.requestAnimFrame(this._animationLoop));
    }
  };
  return $a.Animation = A, A.animations = [], A.animIdCounter = 0, A.animRunning = !1, $a;
}
var tf = {}, Eh;
function O1() {
  return Eh || (Eh = 1, (function(l) {
    Object.defineProperty(l, "__esModule", { value: !0 }), l.Easings = l.Tween = void 0;
    const d = Qt(), v = vf(), A = sn(), F = et(), C = {
      node: 1,
      duration: 1,
      easing: 1,
      onFinish: 1,
      yoyo: 1
    }, f = 1, g = 2, m = 3, x = ["fill", "stroke", "shadowColor"];
    let k = 0;
    class M {
      constructor(w, P, O, j, _, h, R) {
        this.prop = w, this.propFunc = P, this.begin = j, this._pos = j, this.duration = h, this._change = 0, this.prevPos = 0, this.yoyo = R, this._time = 0, this._position = 0, this._startTime = 0, this._finish = 0, this.func = O, this._change = _ - this.begin, this.pause();
      }
      fire(w) {
        const P = this[w];
        P && P();
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
        this.state = g, this._startTime = this.getTimer() - this._time, this.onEnterFrame(), this.fire("onPlay");
      }
      reverse() {
        this.state = m, this._time = this.duration - this._time, this._startTime = this.getTimer() - this._time, this.onEnterFrame(), this.fire("onReverse");
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
        this.state === g ? this.setTime(w) : this.state === m && this.setTime(this.duration - w);
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
        const P = this, O = w.node, j = O._id, _ = w.easing || l.Easings.Linear, h = !!w.yoyo;
        let R, D;
        typeof w.duration > "u" ? R = 0.3 : w.duration === 0 ? R = 1e-3 : R = w.duration, this.node = O, this._id = k++;
        const W = O.getLayer() || (O instanceof F.Konva.Stage ? O.getLayers() : null);
        W || d.Util.error("Tween constructor have `node` that is not in a layer. Please add node into layer first."), this.anim = new v.Animation(function() {
          P.tween.onEnterFrame();
        }, W), this.tween = new M(D, function(J) {
          P._tweenFunc(J);
        }, _, 0, 1, R * 1e3, h), this._addListeners(), E.attrs[j] || (E.attrs[j] = {}), E.attrs[j][this._id] || (E.attrs[j][this._id] = {}), E.tweens[j] || (E.tweens[j] = {});
        for (D in w)
          C[D] === void 0 && this._addAttr(D, w[D]);
        this.reset(), this.onFinish = w.onFinish, this.onReset = w.onReset, this.onUpdate = w.onUpdate;
      }
      _addAttr(w, P) {
        const O = this.node, j = O._id;
        let _, h, R, D, W;
        const J = E.tweens[j][w];
        J && delete E.attrs[j][J][w];
        let G = O.getAttr(w);
        if (d.Util._isArray(P))
          if (_ = [], h = Math.max(P.length, G.length), w === "points" && P.length !== G.length && (P.length > G.length ? (D = G, G = d.Util._prepareArrayForTween(G, P, O.closed())) : (R = P, P = d.Util._prepareArrayForTween(P, G, O.closed()))), w.indexOf("fill") === 0)
            for (let B = 0; B < h; B++)
              if (B % 2 === 0)
                _.push(P[B] - G[B]);
              else {
                const H = d.Util.colorToRGBA(G[B]);
                W = d.Util.colorToRGBA(P[B]), G[B] = H, _.push({
                  r: W.r - H.r,
                  g: W.g - H.g,
                  b: W.b - H.b,
                  a: W.a - H.a
                });
              }
          else
            for (let B = 0; B < h; B++)
              _.push(P[B] - G[B]);
        else x.indexOf(w) !== -1 ? (G = d.Util.colorToRGBA(G), W = d.Util.colorToRGBA(P), _ = {
          r: W.r - G.r,
          g: W.g - G.g,
          b: W.b - G.b,
          a: W.a - G.a
        }) : _ = P - G;
        E.attrs[j][this._id][w] = {
          start: G,
          diff: _,
          end: P,
          trueEnd: R,
          trueStart: D
        }, E.tweens[j][w] = this._id;
      }
      _tweenFunc(w) {
        const P = this.node, O = E.attrs[P._id][this._id];
        let j, _, h, R, D, W, J, G;
        for (j in O) {
          if (_ = O[j], h = _.start, R = _.diff, G = _.end, d.Util._isArray(h))
            if (D = [], J = Math.max(h.length, G.length), j.indexOf("fill") === 0)
              for (W = 0; W < J; W++)
                W % 2 === 0 ? D.push((h[W] || 0) + R[W] * w) : D.push("rgba(" + Math.round(h[W].r + R[W].r * w) + "," + Math.round(h[W].g + R[W].g * w) + "," + Math.round(h[W].b + R[W].b * w) + "," + (h[W].a + R[W].a * w) + ")");
            else
              for (W = 0; W < J; W++)
                D.push((h[W] || 0) + R[W] * w);
          else x.indexOf(j) !== -1 ? D = "rgba(" + Math.round(h.r + R.r * w) + "," + Math.round(h.g + R.g * w) + "," + Math.round(h.b + R.b * w) + "," + (h.a + R.a * w) + ")" : D = h + R * w;
          P.setAttr(j, D);
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
          const w = this.node, P = E.attrs[w._id][this._id];
          P.points && P.points.trueEnd && w.setAttr("points", P.points.trueEnd), this.onFinish && this.onFinish.call(this);
        }, this.tween.onReset = () => {
          const w = this.node, P = E.attrs[w._id][this._id];
          P.points && P.points.trueStart && w.points(P.points.trueStart), this.onReset && this.onReset();
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
        const w = this.node._id, P = this._id, O = E.tweens[w];
        this.pause(), this.anim && this.anim.stop();
        for (const j in O)
          delete E.tweens[w][j];
        delete E.attrs[w][P], E.tweens[w] && (Object.keys(E.tweens[w]).length === 0 && delete E.tweens[w], Object.keys(E.attrs[w]).length === 0 && delete E.attrs[w]);
      }
    }
    l.Tween = E, E.attrs = {}, E.tweens = {}, A.Node.prototype.to = function(S) {
      const w = S.onFinish;
      S.node = this, S.onFinish = function() {
        this.destroy(), w && w();
      }, new E(S).play();
    }, l.Easings = {
      BackEaseIn(S, w, P, O) {
        return P * (S /= O) * S * ((1.70158 + 1) * S - 1.70158) + w;
      },
      BackEaseOut(S, w, P, O) {
        return P * ((S = S / O - 1) * S * ((1.70158 + 1) * S + 1.70158) + 1) + w;
      },
      BackEaseInOut(S, w, P, O) {
        let j = 1.70158;
        return (S /= O / 2) < 1 ? P / 2 * (S * S * (((j *= 1.525) + 1) * S - j)) + w : P / 2 * ((S -= 2) * S * (((j *= 1.525) + 1) * S + j) + 2) + w;
      },
      ElasticEaseIn(S, w, P, O, j, _) {
        let h = 0;
        return S === 0 ? w : (S /= O) === 1 ? w + P : (_ || (_ = O * 0.3), !j || j < Math.abs(P) ? (j = P, h = _ / 4) : h = _ / (2 * Math.PI) * Math.asin(P / j), -(j * Math.pow(2, 10 * (S -= 1)) * Math.sin((S * O - h) * (2 * Math.PI) / _)) + w);
      },
      ElasticEaseOut(S, w, P, O, j, _) {
        let h = 0;
        return S === 0 ? w : (S /= O) === 1 ? w + P : (_ || (_ = O * 0.3), !j || j < Math.abs(P) ? (j = P, h = _ / 4) : h = _ / (2 * Math.PI) * Math.asin(P / j), j * Math.pow(2, -10 * S) * Math.sin((S * O - h) * (2 * Math.PI) / _) + P + w);
      },
      ElasticEaseInOut(S, w, P, O, j, _) {
        let h = 0;
        return S === 0 ? w : (S /= O / 2) === 2 ? w + P : (_ || (_ = O * (0.3 * 1.5)), !j || j < Math.abs(P) ? (j = P, h = _ / 4) : h = _ / (2 * Math.PI) * Math.asin(P / j), S < 1 ? -0.5 * (j * Math.pow(2, 10 * (S -= 1)) * Math.sin((S * O - h) * (2 * Math.PI) / _)) + w : j * Math.pow(2, -10 * (S -= 1)) * Math.sin((S * O - h) * (2 * Math.PI) / _) * 0.5 + P + w);
      },
      BounceEaseOut(S, w, P, O) {
        return (S /= O) < 1 / 2.75 ? P * (7.5625 * S * S) + w : S < 2 / 2.75 ? P * (7.5625 * (S -= 1.5 / 2.75) * S + 0.75) + w : S < 2.5 / 2.75 ? P * (7.5625 * (S -= 2.25 / 2.75) * S + 0.9375) + w : P * (7.5625 * (S -= 2.625 / 2.75) * S + 0.984375) + w;
      },
      BounceEaseIn(S, w, P, O) {
        return P - l.Easings.BounceEaseOut(O - S, 0, P, O) + w;
      },
      BounceEaseInOut(S, w, P, O) {
        return S < O / 2 ? l.Easings.BounceEaseIn(S * 2, 0, P, O) * 0.5 + w : l.Easings.BounceEaseOut(S * 2 - O, 0, P, O) * 0.5 + P * 0.5 + w;
      },
      EaseIn(S, w, P, O) {
        return P * (S /= O) * S + w;
      },
      EaseOut(S, w, P, O) {
        return -P * (S /= O) * (S - 2) + w;
      },
      EaseInOut(S, w, P, O) {
        return (S /= O / 2) < 1 ? P / 2 * S * S + w : -P / 2 * (--S * (S - 2) - 1) + w;
      },
      StrongEaseIn(S, w, P, O) {
        return P * (S /= O) * S * S * S * S + w;
      },
      StrongEaseOut(S, w, P, O) {
        return P * ((S = S / O - 1) * S * S * S * S + 1) + w;
      },
      StrongEaseInOut(S, w, P, O) {
        return (S /= O / 2) < 1 ? P / 2 * S * S * S * S * S + w : P / 2 * ((S -= 2) * S * S * S * S + 2) + w;
      },
      Linear(S, w, P, O) {
        return P * S / O + w;
      }
    };
  })(tf)), tf;
}
var Ph;
function df() {
  return Ph || (Ph = 1, (function(l) {
    Object.defineProperty(l, "__esModule", { value: !0 }), l.Konva = void 0;
    const d = et(), v = Qt(), A = sn(), F = sd(), C = L1(), f = U0(), g = A1(), m = yf(), x = mf(), k = Fn(), M = vf(), E = O1(), S = z0(), w = od();
    l.Konva = v.Util._assign(d.Konva, {
      Util: v.Util,
      Transform: v.Transform,
      Node: A.Node,
      Container: F.Container,
      Stage: C.Stage,
      stages: C.stages,
      Layer: f.Layer,
      FastLayer: g.FastLayer,
      Group: m.Group,
      DD: x.DD,
      Shape: k.Shape,
      shapes: k.shapes,
      Animation: M.Animation,
      Tween: E.Tween,
      Easings: E.Easings,
      Context: S.Context,
      Canvas: w.Canvas
    }), l.default = l.Konva;
  })(Xd)), Xd;
}
var eu = {}, Rh;
function I1() {
  if (Rh) return eu;
  Rh = 1, Object.defineProperty(eu, "__esModule", { value: !0 }), eu.Arc = void 0;
  const l = st(), d = Fn(), v = et(), A = at(), F = et();
  let C = class extends d.Shape {
    _sceneFunc(g) {
      const m = v.Konva.getAngle(this.angle()), x = this.clockwise();
      g.beginPath(), g.arc(0, 0, this.outerRadius(), 0, m, x), g.arc(0, 0, this.innerRadius(), m, 0, !x), g.closePath(), g.fillStrokeShape(this);
    }
    getWidth() {
      return this.outerRadius() * 2;
    }
    getHeight() {
      return this.outerRadius() * 2;
    }
    setWidth(g) {
      this.outerRadius(g / 2);
    }
    setHeight(g) {
      this.outerRadius(g / 2);
    }
    getSelfRect() {
      const g = this.innerRadius(), m = this.outerRadius(), x = this.clockwise(), k = v.Konva.getAngle(x ? 360 - this.angle() : this.angle()), M = Math.cos(Math.min(k, Math.PI)), E = 1, S = Math.sin(Math.min(Math.max(Math.PI, k), 3 * Math.PI / 2)), w = Math.sin(Math.min(k, Math.PI / 2)), P = M * (M > 0 ? g : m), O = E * m, j = S * (S > 0 ? g : m), _ = w * (w > 0 ? m : g);
      return {
        x: P,
        y: x ? -1 * _ : j,
        width: O - P,
        height: _ - j
      };
    }
  };
  return eu.Arc = C, C.prototype._centroid = !0, C.prototype.className = "Arc", C.prototype._attrsAffectingSize = [
    "innerRadius",
    "outerRadius",
    "angle",
    "clockwise"
  ], (0, F._registerNode)(C), l.Factory.addGetterSetter(C, "innerRadius", 0, (0, A.getNumberValidator)()), l.Factory.addGetterSetter(C, "outerRadius", 0, (0, A.getNumberValidator)()), l.Factory.addGetterSetter(C, "angle", 0, (0, A.getNumberValidator)()), l.Factory.addGetterSetter(C, "clockwise", !1, (0, A.getBooleanValidator)()), eu;
}
var tu = {}, nu = {}, Th;
function B0() {
  if (Th) return nu;
  Th = 1, Object.defineProperty(nu, "__esModule", { value: !0 }), nu.Line = void 0;
  const l = st(), d = et(), v = Fn(), A = at();
  function F(g, m, x, k, M, E, S) {
    const w = Math.sqrt(Math.pow(x - g, 2) + Math.pow(k - m, 2)), P = Math.sqrt(Math.pow(M - x, 2) + Math.pow(E - k, 2)), O = S * w / (w + P), j = S * P / (w + P), _ = x - O * (M - g), h = k - O * (E - m), R = x + j * (M - g), D = k + j * (E - m);
    return [_, h, R, D];
  }
  function C(g, m) {
    const x = g.length, k = [];
    for (let M = 2; M < x - 2; M += 2) {
      const E = F(g[M - 2], g[M - 1], g[M], g[M + 1], g[M + 2], g[M + 3], m);
      isNaN(E[0]) || (k.push(E[0]), k.push(E[1]), k.push(g[M]), k.push(g[M + 1]), k.push(E[2]), k.push(E[3]));
    }
    return k;
  }
  class f extends v.Shape {
    constructor(m) {
      super(m), this.on("pointsChange.konva tensionChange.konva closedChange.konva bezierChange.konva", function() {
        this._clearCache("tensionPoints");
      });
    }
    _sceneFunc(m) {
      const x = this.points(), k = x.length, M = this.tension(), E = this.closed(), S = this.bezier();
      if (!k)
        return;
      let w = 0;
      if (m.beginPath(), m.moveTo(x[0], x[1]), M !== 0 && k > 4) {
        const P = this.getTensionPoints(), O = P.length;
        for (w = E ? 0 : 4, E || m.quadraticCurveTo(P[0], P[1], P[2], P[3]); w < O - 2; )
          m.bezierCurveTo(P[w++], P[w++], P[w++], P[w++], P[w++], P[w++]);
        E || m.quadraticCurveTo(P[O - 2], P[O - 1], x[k - 2], x[k - 1]);
      } else if (S)
        for (w = 2; w < k; )
          m.bezierCurveTo(x[w++], x[w++], x[w++], x[w++], x[w++], x[w++]);
      else
        for (w = 2; w < k; w += 2)
          m.lineTo(x[w], x[w + 1]);
      E ? (m.closePath(), m.fillStrokeShape(this)) : m.strokeShape(this);
    }
    getTensionPoints() {
      return this._getCache("tensionPoints", this._getTensionPoints);
    }
    _getTensionPoints() {
      return this.closed() ? this._getTensionPointsClosed() : C(this.points(), this.tension());
    }
    _getTensionPointsClosed() {
      const m = this.points(), x = m.length, k = this.tension(), M = F(m[x - 2], m[x - 1], m[0], m[1], m[2], m[3], k), E = F(m[x - 4], m[x - 3], m[x - 2], m[x - 1], m[0], m[1], k), S = C(m, k);
      return [M[2], M[3]].concat(S).concat([
        E[0],
        E[1],
        m[x - 2],
        m[x - 1],
        E[2],
        E[3],
        M[0],
        M[1],
        m[0],
        m[1]
      ]);
    }
    getWidth() {
      return this.getSelfRect().width;
    }
    getHeight() {
      return this.getSelfRect().height;
    }
    getSelfRect() {
      let m = this.points();
      if (m.length < 4)
        return {
          x: m[0] || 0,
          y: m[1] || 0,
          width: 0,
          height: 0
        };
      this.tension() !== 0 ? m = [
        m[0],
        m[1],
        ...this._getTensionPoints(),
        m[m.length - 2],
        m[m.length - 1]
      ] : m = this.points();
      let x = m[0], k = m[0], M = m[1], E = m[1], S, w;
      for (let P = 0; P < m.length / 2; P++)
        S = m[P * 2], w = m[P * 2 + 1], x = Math.min(x, S), k = Math.max(k, S), M = Math.min(M, w), E = Math.max(E, w);
      return {
        x,
        y: M,
        width: k - x,
        height: E - M
      };
    }
  }
  return nu.Line = f, f.prototype.className = "Line", f.prototype._attrsAffectingSize = ["points", "bezier", "tension"], (0, d._registerNode)(f), l.Factory.addGetterSetter(f, "closed", !1), l.Factory.addGetterSetter(f, "bezier", !1), l.Factory.addGetterSetter(f, "tension", 0, (0, A.getNumberValidator)()), l.Factory.addGetterSetter(f, "points", [], (0, A.getNumberArrayValidator)()), nu;
}
var ru = {}, nf = {}, Nh;
function D1() {
  return Nh || (Nh = 1, (function(l) {
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
    const d = (f, g, m) => {
      let x, k;
      const E = m / 2;
      x = 0;
      for (let S = 0; S < 20; S++)
        k = E * l.tValues[20][S] + E, x += l.cValues[20][S] * A(f, g, k);
      return E * x;
    };
    l.getCubicArcLength = d;
    const v = (f, g, m) => {
      m === void 0 && (m = 1);
      const x = f[0] - 2 * f[1] + f[2], k = g[0] - 2 * g[1] + g[2], M = 2 * f[1] - 2 * f[0], E = 2 * g[1] - 2 * g[0], S = 4 * (x * x + k * k), w = 4 * (x * M + k * E), P = M * M + E * E;
      if (S === 0)
        return m * Math.sqrt(Math.pow(f[2] - f[0], 2) + Math.pow(g[2] - g[0], 2));
      const O = w / (2 * S), j = P / S, _ = m + O, h = j - O * O, R = _ * _ + h > 0 ? Math.sqrt(_ * _ + h) : 0, D = O * O + h > 0 ? Math.sqrt(O * O + h) : 0, W = O + Math.sqrt(O * O + h) !== 0 ? h * Math.log(Math.abs((_ + R) / (O + D))) : 0;
      return Math.sqrt(S) / 2 * (_ * R - O * D + W);
    };
    l.getQuadraticArcLength = v;
    function A(f, g, m) {
      const x = F(1, m, f), k = F(1, m, g), M = x * x + k * k;
      return Math.sqrt(M);
    }
    const F = (f, g, m) => {
      const x = m.length - 1;
      let k, M;
      if (x === 0)
        return 0;
      if (f === 0) {
        M = 0;
        for (let E = 0; E <= x; E++)
          M += l.binomialCoefficients[x][E] * Math.pow(1 - g, x - E) * Math.pow(g, E) * m[E];
        return M;
      } else {
        k = new Array(x);
        for (let E = 0; E < x; E++)
          k[E] = x * (m[E + 1] - m[E]);
        return F(f - 1, g, k);
      }
    }, C = (f, g, m) => {
      let x = 1, k = f / g, M = (f - m(k)) / g, E = 0;
      for (; x > 1e-3; ) {
        const S = m(k + M), w = Math.abs(f - S) / g;
        if (w < x)
          x = w, k += M;
        else {
          const P = m(k - M), O = Math.abs(f - P) / g;
          O < x ? (x = O, k -= M) : M /= 2;
        }
        if (E++, E > 500)
          break;
      }
      return k;
    };
    l.t2length = C;
  })(nf)), nf;
}
var Mh;
function _f() {
  if (Mh) return ru;
  Mh = 1, Object.defineProperty(ru, "__esModule", { value: !0 }), ru.Path = void 0;
  const l = st(), d = et(), v = Fn(), A = D1();
  let F = class kr extends v.Shape {
    constructor(f) {
      super(f), this.dataArray = [], this.pathLength = 0, this._readDataAttribute(), this.on("dataChange.konva", function() {
        this._readDataAttribute();
      });
    }
    _readDataAttribute() {
      this.dataArray = kr.parsePathData(this.data()), this.pathLength = kr.getPathLength(this.dataArray);
    }
    _sceneFunc(f) {
      const g = this.dataArray;
      f.beginPath();
      let m = !1;
      for (let x = 0; x < g.length; x++) {
        const k = g[x].command, M = g[x].points;
        switch (k) {
          case "L":
            f.lineTo(M[0], M[1]);
            break;
          case "M":
            f.moveTo(M[0], M[1]);
            break;
          case "C":
            f.bezierCurveTo(M[0], M[1], M[2], M[3], M[4], M[5]);
            break;
          case "Q":
            f.quadraticCurveTo(M[0], M[1], M[2], M[3]);
            break;
          case "A":
            const E = M[0], S = M[1], w = M[2], P = M[3], O = M[4], j = M[5], _ = M[6], h = M[7], R = w > P ? w : P, D = w > P ? 1 : w / P, W = w > P ? P / w : 1;
            f.translate(E, S), f.rotate(_), f.scale(D, W), f.arc(0, 0, R, O, O + j, 1 - h), f.scale(1 / D, 1 / W), f.rotate(-_), f.translate(-E, -S);
            break;
          case "z":
            m = !0, f.closePath();
            break;
        }
      }
      !m && !this.hasFill() ? f.strokeShape(this) : f.fillStrokeShape(this);
    }
    getSelfRect() {
      let f = [];
      this.dataArray.forEach(function(S) {
        if (S.command === "A") {
          const w = S.points[4], P = S.points[5], O = S.points[4] + P;
          let j = Math.PI / 180;
          if (Math.abs(w - O) < j && (j = Math.abs(w - O)), P < 0)
            for (let _ = w - j; _ > O; _ -= j) {
              const h = kr.getPointOnEllipticalArc(S.points[0], S.points[1], S.points[2], S.points[3], _, 0);
              f.push(h.x, h.y);
            }
          else
            for (let _ = w + j; _ < O; _ += j) {
              const h = kr.getPointOnEllipticalArc(S.points[0], S.points[1], S.points[2], S.points[3], _, 0);
              f.push(h.x, h.y);
            }
        } else if (S.command === "C")
          for (let w = 0; w <= 1; w += 0.01) {
            const P = kr.getPointOnCubicBezier(w, S.start.x, S.start.y, S.points[0], S.points[1], S.points[2], S.points[3], S.points[4], S.points[5]);
            f.push(P.x, P.y);
          }
        else
          f = f.concat(S.points);
      });
      let g = f[0], m = f[0], x = f[1], k = f[1], M, E;
      for (let S = 0; S < f.length / 2; S++)
        M = f[S * 2], E = f[S * 2 + 1], isNaN(M) || (g = Math.min(g, M), m = Math.max(m, M)), isNaN(E) || (x = Math.min(x, E), k = Math.max(k, E));
      return {
        x: g,
        y: x,
        width: m - g,
        height: k - x
      };
    }
    getLength() {
      return this.pathLength;
    }
    getPointAtLength(f) {
      return kr.getPointAtLengthOfDataArray(f, this.dataArray);
    }
    static getLineLength(f, g, m, x) {
      return Math.sqrt((m - f) * (m - f) + (x - g) * (x - g));
    }
    static getPathLength(f) {
      let g = 0;
      for (let m = 0; m < f.length; ++m)
        g += f[m].pathLength;
      return g;
    }
    static getPointAtLengthOfDataArray(f, g) {
      let m, x = 0, k = g.length;
      if (!k)
        return null;
      for (; x < k && f > g[x].pathLength; )
        f -= g[x].pathLength, ++x;
      if (x === k)
        return m = g[x - 1].points.slice(-2), {
          x: m[0],
          y: m[1]
        };
      if (f < 0.01)
        return g[x].command === "M" ? (m = g[x].points.slice(0, 2), {
          x: m[0],
          y: m[1]
        }) : {
          x: g[x].start.x,
          y: g[x].start.y
        };
      const M = g[x], E = M.points;
      switch (M.command) {
        case "L":
          return kr.getPointOnLine(f, M.start.x, M.start.y, E[0], E[1]);
        case "C":
          return kr.getPointOnCubicBezier((0, A.t2length)(f, kr.getPathLength(g), (R) => (0, A.getCubicArcLength)([M.start.x, E[0], E[2], E[4]], [M.start.y, E[1], E[3], E[5]], R)), M.start.x, M.start.y, E[0], E[1], E[2], E[3], E[4], E[5]);
        case "Q":
          return kr.getPointOnQuadraticBezier((0, A.t2length)(f, kr.getPathLength(g), (R) => (0, A.getQuadraticArcLength)([M.start.x, E[0], E[2]], [M.start.y, E[1], E[3]], R)), M.start.x, M.start.y, E[0], E[1], E[2], E[3]);
        case "A":
          const S = E[0], w = E[1], P = E[2], O = E[3], j = E[5], _ = E[6];
          let h = E[4];
          return h += j * f / M.pathLength, kr.getPointOnEllipticalArc(S, w, P, O, h, _);
      }
      return null;
    }
    static getPointOnLine(f, g, m, x, k, M, E) {
      M = M ?? g, E = E ?? m;
      const S = this.getLineLength(g, m, x, k);
      if (S < 1e-10)
        return { x: g, y: m };
      if (x === g)
        return { x: M, y: E + (k > m ? f : -f) };
      const w = (k - m) / (x - g), P = Math.sqrt(f * f / (1 + w * w)) * (x < g ? -1 : 1), O = w * P;
      if (Math.abs(E - m - w * (M - g)) < 1e-10)
        return { x: M + P, y: E + O };
      const j = ((M - g) * (x - g) + (E - m) * (k - m)) / (S * S), _ = g + j * (x - g), h = m + j * (k - m), R = this.getLineLength(M, E, _, h), D = Math.sqrt(f * f - R * R), W = Math.sqrt(D * D / (1 + w * w)) * (x < g ? -1 : 1), J = w * W;
      return { x: _ + W, y: h + J };
    }
    static getPointOnCubicBezier(f, g, m, x, k, M, E, S, w) {
      function P(D) {
        return D * D * D;
      }
      function O(D) {
        return 3 * D * D * (1 - D);
      }
      function j(D) {
        return 3 * D * (1 - D) * (1 - D);
      }
      function _(D) {
        return (1 - D) * (1 - D) * (1 - D);
      }
      const h = S * P(f) + M * O(f) + x * j(f) + g * _(f), R = w * P(f) + E * O(f) + k * j(f) + m * _(f);
      return { x: h, y: R };
    }
    static getPointOnQuadraticBezier(f, g, m, x, k, M, E) {
      function S(_) {
        return _ * _;
      }
      function w(_) {
        return 2 * _ * (1 - _);
      }
      function P(_) {
        return (1 - _) * (1 - _);
      }
      const O = M * S(f) + x * w(f) + g * P(f), j = E * S(f) + k * w(f) + m * P(f);
      return { x: O, y: j };
    }
    static getPointOnEllipticalArc(f, g, m, x, k, M) {
      const E = Math.cos(M), S = Math.sin(M), w = {
        x: m * Math.cos(k),
        y: x * Math.sin(k)
      };
      return {
        x: f + (w.x * E - w.y * S),
        y: g + (w.x * S + w.y * E)
      };
    }
    static parsePathData(f) {
      if (!f)
        return [];
      let g = f;
      const m = [
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
      g = g.replace(new RegExp(" ", "g"), ",");
      for (let O = 0; O < m.length; O++)
        g = g.replace(new RegExp(m[O], "g"), "|" + m[O]);
      const x = g.split("|"), k = [], M = [];
      let E = 0, S = 0;
      const w = /([-+]?((\d+\.\d+)|((\d+)|(\.\d+)))(?:e[-+]?\d+)?)/gi;
      let P;
      for (let O = 1; O < x.length; O++) {
        let j = x[O], _ = j.charAt(0);
        for (j = j.slice(1), M.length = 0; P = w.exec(j); )
          M.push(P[0]);
        const h = [];
        for (let R = 0, D = M.length; R < D; R++) {
          if (M[R] === "00") {
            h.push(0, 0);
            continue;
          }
          const W = parseFloat(M[R]);
          isNaN(W) ? h.push(0) : h.push(W);
        }
        for (; h.length > 0 && !isNaN(h[0]); ) {
          let R = "", D = [];
          const W = E, J = S;
          let G, B, H, X, Z, Q, ie, ee, me, T;
          switch (_) {
            case "l":
              E += h.shift(), S += h.shift(), R = "L", D.push(E, S);
              break;
            case "L":
              E = h.shift(), S = h.shift(), D.push(E, S);
              break;
            case "m":
              const z = h.shift(), N = h.shift();
              if (E += z, S += N, R = "M", k.length > 2 && k[k.length - 1].command === "z") {
                for (let U = k.length - 2; U >= 0; U--)
                  if (k[U].command === "M") {
                    E = k[U].points[0] + z, S = k[U].points[1] + N;
                    break;
                  }
              }
              D.push(E, S), _ = "l";
              break;
            case "M":
              E = h.shift(), S = h.shift(), R = "M", D.push(E, S), _ = "L";
              break;
            case "h":
              E += h.shift(), R = "L", D.push(E, S);
              break;
            case "H":
              E = h.shift(), R = "L", D.push(E, S);
              break;
            case "v":
              S += h.shift(), R = "L", D.push(E, S);
              break;
            case "V":
              S = h.shift(), R = "L", D.push(E, S);
              break;
            case "C":
              D.push(h.shift(), h.shift(), h.shift(), h.shift()), E = h.shift(), S = h.shift(), D.push(E, S);
              break;
            case "c":
              D.push(E + h.shift(), S + h.shift(), E + h.shift(), S + h.shift()), E += h.shift(), S += h.shift(), R = "C", D.push(E, S);
              break;
            case "S":
              B = E, H = S, G = k[k.length - 1], G.command === "C" && (B = E + (E - G.points[2]), H = S + (S - G.points[3])), D.push(B, H, h.shift(), h.shift()), E = h.shift(), S = h.shift(), R = "C", D.push(E, S);
              break;
            case "s":
              B = E, H = S, G = k[k.length - 1], G.command === "C" && (B = E + (E - G.points[2]), H = S + (S - G.points[3])), D.push(B, H, E + h.shift(), S + h.shift()), E += h.shift(), S += h.shift(), R = "C", D.push(E, S);
              break;
            case "Q":
              D.push(h.shift(), h.shift()), E = h.shift(), S = h.shift(), D.push(E, S);
              break;
            case "q":
              D.push(E + h.shift(), S + h.shift()), E += h.shift(), S += h.shift(), R = "Q", D.push(E, S);
              break;
            case "T":
              B = E, H = S, G = k[k.length - 1], G.command === "Q" && (B = E + (E - G.points[0]), H = S + (S - G.points[1])), E = h.shift(), S = h.shift(), R = "Q", D.push(B, H, E, S);
              break;
            case "t":
              B = E, H = S, G = k[k.length - 1], G.command === "Q" && (B = E + (E - G.points[0]), H = S + (S - G.points[1])), E += h.shift(), S += h.shift(), R = "Q", D.push(B, H, E, S);
              break;
            case "A":
              X = h.shift(), Z = h.shift(), Q = h.shift(), ie = h.shift(), ee = h.shift(), me = E, T = S, E = h.shift(), S = h.shift(), R = "A", D = this.convertEndpointToCenterParameterization(me, T, E, S, ie, ee, X, Z, Q);
              break;
            case "a":
              X = h.shift(), Z = h.shift(), Q = h.shift(), ie = h.shift(), ee = h.shift(), me = E, T = S, E += h.shift(), S += h.shift(), R = "A", D = this.convertEndpointToCenterParameterization(me, T, E, S, ie, ee, X, Z, Q);
              break;
          }
          k.push({
            command: R || _,
            points: D,
            start: {
              x: W,
              y: J
            },
            pathLength: this.calcLength(W, J, R || _, D)
          });
        }
        (_ === "z" || _ === "Z") && k.push({
          command: "z",
          points: [],
          start: void 0,
          pathLength: 0
        });
      }
      return k;
    }
    static calcLength(f, g, m, x) {
      let k, M, E, S;
      const w = kr;
      switch (m) {
        case "L":
          return w.getLineLength(f, g, x[0], x[1]);
        case "C":
          return (0, A.getCubicArcLength)([f, x[0], x[2], x[4]], [g, x[1], x[3], x[5]], 1);
        case "Q":
          return (0, A.getQuadraticArcLength)([f, x[0], x[2]], [g, x[1], x[3]], 1);
        case "A":
          k = 0;
          const P = x[4], O = x[5], j = x[4] + O;
          let _ = Math.PI / 180;
          if (Math.abs(P - j) < _ && (_ = Math.abs(P - j)), M = w.getPointOnEllipticalArc(x[0], x[1], x[2], x[3], P, 0), O < 0)
            for (S = P - _; S > j; S -= _)
              E = w.getPointOnEllipticalArc(x[0], x[1], x[2], x[3], S, 0), k += w.getLineLength(M.x, M.y, E.x, E.y), M = E;
          else
            for (S = P + _; S < j; S += _)
              E = w.getPointOnEllipticalArc(x[0], x[1], x[2], x[3], S, 0), k += w.getLineLength(M.x, M.y, E.x, E.y), M = E;
          return E = w.getPointOnEllipticalArc(x[0], x[1], x[2], x[3], j, 0), k += w.getLineLength(M.x, M.y, E.x, E.y), k;
      }
      return 0;
    }
    static convertEndpointToCenterParameterization(f, g, m, x, k, M, E, S, w) {
      const P = w * (Math.PI / 180), O = Math.cos(P) * (f - m) / 2 + Math.sin(P) * (g - x) / 2, j = -1 * Math.sin(P) * (f - m) / 2 + Math.cos(P) * (g - x) / 2, _ = O * O / (E * E) + j * j / (S * S);
      _ > 1 && (E *= Math.sqrt(_), S *= Math.sqrt(_));
      let h = Math.sqrt((E * E * (S * S) - E * E * (j * j) - S * S * (O * O)) / (E * E * (j * j) + S * S * (O * O)));
      k === M && (h *= -1), isNaN(h) && (h = 0);
      const R = h * E * j / S, D = h * -S * O / E, W = (f + m) / 2 + Math.cos(P) * R - Math.sin(P) * D, J = (g + x) / 2 + Math.sin(P) * R + Math.cos(P) * D, G = function(ee) {
        return Math.sqrt(ee[0] * ee[0] + ee[1] * ee[1]);
      }, B = function(ee, me) {
        return (ee[0] * me[0] + ee[1] * me[1]) / (G(ee) * G(me));
      }, H = function(ee, me) {
        return (ee[0] * me[1] < ee[1] * me[0] ? -1 : 1) * Math.acos(B(ee, me));
      }, X = H([1, 0], [(O - R) / E, (j - D) / S]), Z = [(O - R) / E, (j - D) / S], Q = [(-1 * O - R) / E, (-1 * j - D) / S];
      let ie = H(Z, Q);
      return B(Z, Q) <= -1 && (ie = Math.PI), B(Z, Q) >= 1 && (ie = 0), M === 0 && ie > 0 && (ie = ie - 2 * Math.PI), M === 1 && ie < 0 && (ie = ie + 2 * Math.PI), [W, J, E, S, X, ie, P, M];
    }
  };
  return ru.Path = F, F.prototype.className = "Path", F.prototype._attrsAffectingSize = ["data"], (0, d._registerNode)(F), l.Factory.addGetterSetter(F, "data"), ru;
}
var Fh;
function z1() {
  if (Fh) return tu;
  Fh = 1, Object.defineProperty(tu, "__esModule", { value: !0 }), tu.Arrow = void 0;
  const l = st(), d = B0(), v = at(), A = et(), F = _f();
  let C = class extends d.Line {
    _sceneFunc(g) {
      super._sceneFunc(g);
      const m = Math.PI * 2, x = this.points();
      let k = x;
      const M = this.tension() !== 0 && x.length > 4;
      M && (k = this.getTensionPoints());
      const E = this.pointerLength(), S = x.length;
      let w, P;
      if (M) {
        const _ = [
          k[k.length - 4],
          k[k.length - 3],
          k[k.length - 2],
          k[k.length - 1],
          x[S - 2],
          x[S - 1]
        ], h = F.Path.calcLength(k[k.length - 4], k[k.length - 3], "C", _), R = F.Path.getPointOnQuadraticBezier(Math.min(1, 1 - E / h), _[0], _[1], _[2], _[3], _[4], _[5]);
        w = x[S - 2] - R.x, P = x[S - 1] - R.y;
      } else
        w = x[S - 2] - x[S - 4], P = x[S - 1] - x[S - 3];
      const O = (Math.atan2(P, w) + m) % m, j = this.pointerWidth();
      this.pointerAtEnding() && (g.save(), g.beginPath(), g.translate(x[S - 2], x[S - 1]), g.rotate(O), g.moveTo(0, 0), g.lineTo(-E, j / 2), g.lineTo(-E, -j / 2), g.closePath(), g.restore(), this.__fillStroke(g)), this.pointerAtBeginning() && (g.save(), g.beginPath(), g.translate(x[0], x[1]), M ? (w = (k[0] + k[2]) / 2 - x[0], P = (k[1] + k[3]) / 2 - x[1]) : (w = x[2] - x[0], P = x[3] - x[1]), g.rotate((Math.atan2(-P, -w) + m) % m), g.moveTo(0, 0), g.lineTo(-E, j / 2), g.lineTo(-E, -j / 2), g.closePath(), g.restore(), this.__fillStroke(g));
    }
    __fillStroke(g) {
      const m = this.dashEnabled();
      m && (this.attrs.dashEnabled = !1, g.setLineDash([])), g.fillStrokeShape(this), m && (this.attrs.dashEnabled = !0);
    }
    getSelfRect() {
      const g = super.getSelfRect(), m = this.pointerWidth() / 2;
      return {
        x: g.x,
        y: g.y - m,
        width: g.width,
        height: g.height + m * 2
      };
    }
  };
  return tu.Arrow = C, C.prototype.className = "Arrow", (0, A._registerNode)(C), l.Factory.addGetterSetter(C, "pointerLength", 10, (0, v.getNumberValidator)()), l.Factory.addGetterSetter(C, "pointerWidth", 10, (0, v.getNumberValidator)()), l.Factory.addGetterSetter(C, "pointerAtBeginning", !1), l.Factory.addGetterSetter(C, "pointerAtEnding", !0), tu;
}
var iu = {}, Lh;
function G1() {
  if (Lh) return iu;
  Lh = 1, Object.defineProperty(iu, "__esModule", { value: !0 }), iu.Circle = void 0;
  const l = st(), d = Fn(), v = at(), A = et();
  class F extends d.Shape {
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
  return iu.Circle = F, F.prototype._centroid = !0, F.prototype.className = "Circle", F.prototype._attrsAffectingSize = ["radius"], (0, A._registerNode)(F), l.Factory.addGetterSetter(F, "radius", 0, (0, v.getNumberValidator)()), iu;
}
var ou = {}, Ah;
function U1() {
  if (Ah) return ou;
  Ah = 1, Object.defineProperty(ou, "__esModule", { value: !0 }), ou.Ellipse = void 0;
  const l = st(), d = Fn(), v = at(), A = et();
  let F = class extends d.Shape {
    _sceneFunc(f) {
      const g = this.radiusX(), m = this.radiusY();
      f.beginPath(), f.save(), g !== m && f.scale(1, m / g), f.arc(0, 0, g, 0, Math.PI * 2, !1), f.restore(), f.closePath(), f.fillStrokeShape(this);
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
  return ou.Ellipse = F, F.prototype.className = "Ellipse", F.prototype._centroid = !0, F.prototype._attrsAffectingSize = ["radiusX", "radiusY"], (0, A._registerNode)(F), l.Factory.addComponentsGetterSetter(F, "radius", ["x", "y"]), l.Factory.addGetterSetter(F, "radiusX", 0, (0, v.getNumberValidator)()), l.Factory.addGetterSetter(F, "radiusY", 0, (0, v.getNumberValidator)()), ou;
}
var su = {}, Oh;
function B1() {
  if (Oh) return su;
  Oh = 1, Object.defineProperty(su, "__esModule", { value: !0 }), su.Image = void 0;
  const l = Qt(), d = st(), v = Fn(), A = et(), F = at();
  class C extends v.Shape {
    constructor(g) {
      super(g), this._loadListener = () => {
        this._requestDraw();
      }, this.on("imageChange.konva", (m) => {
        this._removeImageLoad(m.oldVal), this._setImageLoad();
      }), this._setImageLoad();
    }
    _setImageLoad() {
      const g = this.image();
      g && g.complete || g && g.readyState === 4 || g && g.addEventListener && g.addEventListener("load", this._loadListener);
    }
    _removeImageLoad(g) {
      g && g.removeEventListener && g.removeEventListener("load", this._loadListener);
    }
    destroy() {
      return this._removeImageLoad(this.image()), super.destroy(), this;
    }
    _useBufferCanvas() {
      const g = !!this.cornerRadius(), m = this.hasShadow();
      return g && m ? !0 : super._useBufferCanvas(!0);
    }
    _sceneFunc(g) {
      const m = this.getWidth(), x = this.getHeight(), k = this.cornerRadius(), M = this.attrs.image;
      let E;
      if (M) {
        const S = this.attrs.cropWidth, w = this.attrs.cropHeight;
        S && w ? E = [
          M,
          this.cropX(),
          this.cropY(),
          S,
          w,
          0,
          0,
          m,
          x
        ] : E = [M, 0, 0, m, x];
      }
      (this.hasFill() || this.hasStroke() || k) && (g.beginPath(), k ? l.Util.drawRoundedRectPath(g, m, x, k) : g.rect(0, 0, m, x), g.closePath(), g.fillStrokeShape(this)), M && (k && g.clip(), g.drawImage.apply(g, E));
    }
    _hitFunc(g) {
      const m = this.width(), x = this.height(), k = this.cornerRadius();
      g.beginPath(), k ? l.Util.drawRoundedRectPath(g, m, x, k) : g.rect(0, 0, m, x), g.closePath(), g.fillStrokeShape(this);
    }
    getWidth() {
      var g, m;
      return (g = this.attrs.width) !== null && g !== void 0 ? g : (m = this.image()) === null || m === void 0 ? void 0 : m.width;
    }
    getHeight() {
      var g, m;
      return (g = this.attrs.height) !== null && g !== void 0 ? g : (m = this.image()) === null || m === void 0 ? void 0 : m.height;
    }
    static fromURL(g, m, x = null) {
      const k = l.Util.createImageElement();
      k.onload = function() {
        const M = new C({
          image: k
        });
        m(M);
      }, k.onerror = x, k.crossOrigin = "Anonymous", k.src = g;
    }
  }
  return su.Image = C, C.prototype.className = "Image", (0, A._registerNode)(C), d.Factory.addGetterSetter(C, "cornerRadius", 0, (0, F.getNumberOrArrayOfNumbersValidator)(4)), d.Factory.addGetterSetter(C, "image"), d.Factory.addComponentsGetterSetter(C, "crop", ["x", "y", "width", "height"]), d.Factory.addGetterSetter(C, "cropX", 0, (0, F.getNumberValidator)()), d.Factory.addGetterSetter(C, "cropY", 0, (0, F.getNumberValidator)()), d.Factory.addGetterSetter(C, "cropWidth", 0, (0, F.getNumberValidator)()), d.Factory.addGetterSetter(C, "cropHeight", 0, (0, F.getNumberValidator)()), su;
}
var Ys = {}, Ih;
function V1() {
  if (Ih) return Ys;
  Ih = 1, Object.defineProperty(Ys, "__esModule", { value: !0 }), Ys.Tag = Ys.Label = void 0;
  const l = st(), d = Fn(), v = yf(), A = at(), F = et(), C = [
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
  ], f = "Change.konva", g = "none", m = "up", x = "right", k = "down", M = "left", E = C.length;
  let S = class extends v.Group {
    constructor(O) {
      super(O), this.on("add.konva", function(j) {
        this._addListeners(j.child), this._sync();
      });
    }
    getText() {
      return this.find("Text")[0];
    }
    getTag() {
      return this.find("Tag")[0];
    }
    _addListeners(O) {
      let j = this, _;
      const h = function() {
        j._sync();
      };
      for (_ = 0; _ < E; _++)
        O.on(C[_] + f, h);
    }
    getWidth() {
      return this.getText().width();
    }
    getHeight() {
      return this.getText().height();
    }
    _sync() {
      let O = this.getText(), j = this.getTag(), _, h, R, D, W, J, G;
      if (O && j) {
        switch (_ = O.width(), h = O.height(), R = j.pointerDirection(), D = j.pointerWidth(), G = j.pointerHeight(), W = 0, J = 0, R) {
          case m:
            W = _ / 2, J = -1 * G;
            break;
          case x:
            W = _ + D, J = h / 2;
            break;
          case k:
            W = _ / 2, J = h + G;
            break;
          case M:
            W = -1 * D, J = h / 2;
            break;
        }
        j.setAttrs({
          x: -1 * W,
          y: -1 * J,
          width: _,
          height: h
        }), O.setAttrs({
          x: -1 * W,
          y: -1 * J
        });
      }
    }
  };
  Ys.Label = S, S.prototype.className = "Label", (0, F._registerNode)(S);
  class w extends d.Shape {
    _sceneFunc(O) {
      const j = this.width(), _ = this.height(), h = this.pointerDirection(), R = this.pointerWidth(), D = this.pointerHeight(), W = this.cornerRadius();
      let J = 0, G = 0, B = 0, H = 0;
      typeof W == "number" ? J = G = B = H = Math.min(W, j / 2, _ / 2) : (J = Math.min(W[0] || 0, j / 2, _ / 2), G = Math.min(W[1] || 0, j / 2, _ / 2), H = Math.min(W[2] || 0, j / 2, _ / 2), B = Math.min(W[3] || 0, j / 2, _ / 2)), O.beginPath(), O.moveTo(J, 0), h === m && (O.lineTo((j - R) / 2, 0), O.lineTo(j / 2, -1 * D), O.lineTo((j + R) / 2, 0)), O.lineTo(j - G, 0), O.arc(j - G, G, G, Math.PI * 3 / 2, 0, !1), h === x && (O.lineTo(j, (_ - D) / 2), O.lineTo(j + R, _ / 2), O.lineTo(j, (_ + D) / 2)), O.lineTo(j, _ - H), O.arc(j - H, _ - H, H, 0, Math.PI / 2, !1), h === k && (O.lineTo((j + R) / 2, _), O.lineTo(j / 2, _ + D), O.lineTo((j - R) / 2, _)), O.lineTo(B, _), O.arc(B, _ - B, B, Math.PI / 2, Math.PI, !1), h === M && (O.lineTo(0, (_ + D) / 2), O.lineTo(-1 * R, _ / 2), O.lineTo(0, (_ - D) / 2)), O.lineTo(0, J), O.arc(J, J, J, Math.PI, Math.PI * 3 / 2, !1), O.closePath(), O.fillStrokeShape(this);
    }
    getSelfRect() {
      let O = 0, j = 0, _ = this.pointerWidth(), h = this.pointerHeight(), R = this.pointerDirection(), D = this.width(), W = this.height();
      return R === m ? (j -= h, W += h) : R === k ? W += h : R === M ? (O -= _ * 1.5, D += _) : R === x && (D += _ * 1.5), {
        x: O,
        y: j,
        width: D,
        height: W
      };
    }
  }
  return Ys.Tag = w, w.prototype.className = "Tag", (0, F._registerNode)(w), l.Factory.addGetterSetter(w, "pointerDirection", g), l.Factory.addGetterSetter(w, "pointerWidth", 0, (0, A.getNumberValidator)()), l.Factory.addGetterSetter(w, "pointerHeight", 0, (0, A.getNumberValidator)()), l.Factory.addGetterSetter(w, "cornerRadius", 0, (0, A.getNumberOrArrayOfNumbersValidator)(4)), Ys;
}
var lu = {}, Dh;
function V0() {
  if (Dh) return lu;
  Dh = 1, Object.defineProperty(lu, "__esModule", { value: !0 }), lu.Rect = void 0;
  const l = st(), d = Fn(), v = et(), A = Qt(), F = at();
  class C extends d.Shape {
    _sceneFunc(g) {
      const m = this.cornerRadius(), x = this.width(), k = this.height();
      g.beginPath(), m ? A.Util.drawRoundedRectPath(g, x, k, m) : g.rect(0, 0, x, k), g.closePath(), g.fillStrokeShape(this);
    }
  }
  return lu.Rect = C, C.prototype.className = "Rect", (0, v._registerNode)(C), l.Factory.addGetterSetter(C, "cornerRadius", 0, (0, F.getNumberOrArrayOfNumbersValidator)(4)), lu;
}
var au = {}, zh;
function H1() {
  if (zh) return au;
  zh = 1, Object.defineProperty(au, "__esModule", { value: !0 }), au.RegularPolygon = void 0;
  const l = st(), d = Fn(), v = at(), A = et();
  let F = class extends d.Shape {
    _sceneFunc(f) {
      const g = this._getPoints();
      f.beginPath(), f.moveTo(g[0].x, g[0].y);
      for (let m = 1; m < g.length; m++)
        f.lineTo(g[m].x, g[m].y);
      f.closePath(), f.fillStrokeShape(this);
    }
    _getPoints() {
      const f = this.attrs.sides, g = this.attrs.radius || 0, m = [];
      for (let x = 0; x < f; x++)
        m.push({
          x: g * Math.sin(x * 2 * Math.PI / f),
          y: -1 * g * Math.cos(x * 2 * Math.PI / f)
        });
      return m;
    }
    getSelfRect() {
      const f = this._getPoints();
      let g = f[0].x, m = f[0].y, x = f[0].x, k = f[0].y;
      return f.forEach((M) => {
        g = Math.min(g, M.x), m = Math.max(m, M.x), x = Math.min(x, M.y), k = Math.max(k, M.y);
      }), {
        x: g,
        y: x,
        width: m - g,
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
  return au.RegularPolygon = F, F.prototype.className = "RegularPolygon", F.prototype._centroid = !0, F.prototype._attrsAffectingSize = ["radius"], (0, A._registerNode)(F), l.Factory.addGetterSetter(F, "radius", 0, (0, v.getNumberValidator)()), l.Factory.addGetterSetter(F, "sides", 0, (0, v.getNumberValidator)()), au;
}
var uu = {}, Gh;
function j1() {
  if (Gh) return uu;
  Gh = 1, Object.defineProperty(uu, "__esModule", { value: !0 }), uu.Ring = void 0;
  const l = st(), d = Fn(), v = at(), A = et(), F = Math.PI * 2;
  let C = class extends d.Shape {
    _sceneFunc(g) {
      g.beginPath(), g.arc(0, 0, this.innerRadius(), 0, F, !1), g.moveTo(this.outerRadius(), 0), g.arc(0, 0, this.outerRadius(), F, 0, !0), g.closePath(), g.fillStrokeShape(this);
    }
    getWidth() {
      return this.outerRadius() * 2;
    }
    getHeight() {
      return this.outerRadius() * 2;
    }
    setWidth(g) {
      this.outerRadius(g / 2);
    }
    setHeight(g) {
      this.outerRadius(g / 2);
    }
  };
  return uu.Ring = C, C.prototype.className = "Ring", C.prototype._centroid = !0, C.prototype._attrsAffectingSize = ["innerRadius", "outerRadius"], (0, A._registerNode)(C), l.Factory.addGetterSetter(C, "innerRadius", 0, (0, v.getNumberValidator)()), l.Factory.addGetterSetter(C, "outerRadius", 0, (0, v.getNumberValidator)()), uu;
}
var cu = {}, Uh;
function W1() {
  if (Uh) return cu;
  Uh = 1, Object.defineProperty(cu, "__esModule", { value: !0 }), cu.Sprite = void 0;
  const l = st(), d = Fn(), v = vf(), A = at(), F = et();
  let C = class extends d.Shape {
    constructor(g) {
      super(g), this._updated = !0, this.anim = new v.Animation(() => {
        const m = this._updated;
        return this._updated = !1, m;
      }), this.on("animationChange.konva", function() {
        this.frameIndex(0);
      }), this.on("frameIndexChange.konva", function() {
        this._updated = !0;
      }), this.on("frameRateChange.konva", function() {
        this.anim.isRunning() && (clearInterval(this.interval), this._setInterval());
      });
    }
    _sceneFunc(g) {
      const m = this.animation(), x = this.frameIndex(), k = x * 4, M = this.animations()[m], E = this.frameOffsets(), S = M[k + 0], w = M[k + 1], P = M[k + 2], O = M[k + 3], j = this.image();
      if ((this.hasFill() || this.hasStroke()) && (g.beginPath(), g.rect(0, 0, P, O), g.closePath(), g.fillStrokeShape(this)), j)
        if (E) {
          const _ = E[m], h = x * 2;
          g.drawImage(j, S, w, P, O, _[h + 0], _[h + 1], P, O);
        } else
          g.drawImage(j, S, w, P, O, 0, 0, P, O);
    }
    _hitFunc(g) {
      const m = this.animation(), x = this.frameIndex(), k = x * 4, M = this.animations()[m], E = this.frameOffsets(), S = M[k + 2], w = M[k + 3];
      if (g.beginPath(), E) {
        const P = E[m], O = x * 2;
        g.rect(P[O + 0], P[O + 1], S, w);
      } else
        g.rect(0, 0, S, w);
      g.closePath(), g.fillShape(this);
    }
    _useBufferCanvas() {
      return super._useBufferCanvas(!0);
    }
    _setInterval() {
      const g = this;
      this.interval = setInterval(function() {
        g._updateIndex();
      }, 1e3 / this.frameRate());
    }
    start() {
      if (this.isRunning())
        return;
      const g = this.getLayer();
      this.anim.setLayers(g), this._setInterval(), this.anim.start();
    }
    stop() {
      this.anim.stop(), clearInterval(this.interval);
    }
    isRunning() {
      return this.anim.isRunning();
    }
    _updateIndex() {
      const g = this.frameIndex(), m = this.animation(), x = this.animations(), k = x[m], M = k.length / 4;
      g < M - 1 ? this.frameIndex(g + 1) : this.frameIndex(0);
    }
  };
  return cu.Sprite = C, C.prototype.className = "Sprite", (0, F._registerNode)(C), l.Factory.addGetterSetter(C, "animation"), l.Factory.addGetterSetter(C, "animations"), l.Factory.addGetterSetter(C, "frameOffsets"), l.Factory.addGetterSetter(C, "image"), l.Factory.addGetterSetter(C, "frameIndex", 0, (0, A.getNumberValidator)()), l.Factory.addGetterSetter(C, "frameRate", 17, (0, A.getNumberValidator)()), l.Factory.backCompat(C, {
    index: "frameIndex",
    getIndex: "getFrameIndex",
    setIndex: "setFrameIndex"
  }), cu;
}
var du = {}, Bh;
function q1() {
  if (Bh) return du;
  Bh = 1, Object.defineProperty(du, "__esModule", { value: !0 }), du.Star = void 0;
  const l = st(), d = Fn(), v = at(), A = et();
  let F = class extends d.Shape {
    _sceneFunc(f) {
      const g = this.innerRadius(), m = this.outerRadius(), x = this.numPoints();
      f.beginPath(), f.moveTo(0, 0 - m);
      for (let k = 1; k < x * 2; k++) {
        const M = k % 2 === 0 ? m : g, E = M * Math.sin(k * Math.PI / x), S = -1 * M * Math.cos(k * Math.PI / x);
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
  return du.Star = F, F.prototype.className = "Star", F.prototype._centroid = !0, F.prototype._attrsAffectingSize = ["innerRadius", "outerRadius"], (0, A._registerNode)(F), l.Factory.addGetterSetter(F, "numPoints", 5, (0, v.getNumberValidator)()), l.Factory.addGetterSetter(F, "innerRadius", 0, (0, v.getNumberValidator)()), l.Factory.addGetterSetter(F, "outerRadius", 0, (0, v.getNumberValidator)()), du;
}
var Ql = {}, Vh;
function H0() {
  if (Vh) return Ql;
  Vh = 1, Object.defineProperty(Ql, "__esModule", { value: !0 }), Ql.Text = void 0, Ql.stringToArray = f;
  const l = Qt(), d = st(), v = Fn(), A = et(), F = at(), C = et();
  function f(K) {
    return [...K].reduce((b, de, ge, se) => {
      if (new RegExp("\\p{Emoji}", "u").test(de)) {
        const q = se[ge + 1];
        q && new RegExp("\\p{Emoji_Modifier}|\\u200D", "u").test(q) ? (b.push(de + q), se[ge + 1] = "") : b.push(de);
      } else new RegExp("\\p{Regional_Indicator}{2}", "u").test(de + (se[ge + 1] || "")) ? b.push(de + se[ge + 1]) : ge > 0 && new RegExp("\\p{Mn}|\\p{Me}|\\p{Mc}", "u").test(de) ? b[b.length - 1] += de : de && b.push(de);
      return b;
    }, []);
  }
  const g = "auto", m = "center", x = "inherit", k = "justify", M = "Change.konva", E = "2d", S = "-", w = "left", P = "text", O = "Text", j = "top", _ = "bottom", h = "middle", R = "normal", D = "px ", W = " ", J = "right", G = "rtl", B = "word", H = "char", X = "none", Z = "…", Q = [
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
  ], ie = Q.length;
  function ee(K) {
    return K.split(",").map((b) => {
      b = b.trim();
      const de = b.indexOf(" ") >= 0, ge = b.indexOf('"') >= 0 || b.indexOf("'") >= 0;
      return de && !ge && (b = `"${b}"`), b;
    }).join(", ");
  }
  let me;
  function T() {
    return me || (me = l.Util.createCanvasElement().getContext(E), me);
  }
  function z(K) {
    K.fillText(this._partialText, this._partialTextX, this._partialTextY);
  }
  function N(K) {
    K.setAttr("miterLimit", 2), K.strokeText(this._partialText, this._partialTextX, this._partialTextY);
  }
  function U(K) {
    return K = K || {}, !K.fillLinearGradientColorStops && !K.fillRadialGradientColorStops && !K.fillPatternImage && (K.fill = K.fill || "black"), K;
  }
  let L = class extends v.Shape {
    constructor(b) {
      super(U(b)), this._partialTextX = 0, this._partialTextY = 0;
      for (let de = 0; de < ie; de++)
        this.on(Q[de] + M, this._setTextData);
      this._setTextData();
    }
    _sceneFunc(b) {
      const de = this.textArr, ge = de.length;
      if (!this.text())
        return;
      let se = this.padding(), q = this.fontSize(), re = this.lineHeight() * q, ae = this.verticalAlign(), Ce = this.direction(), Ee = 0, De = this.align(), Ue = this.getWidth(), Qe = this.letterSpacing(), We = this.fill(), At = this.textDecoration(), Ze = At.indexOf("underline") !== -1, Je = At.indexOf("line-through") !== -1, Zn;
      Ce = Ce === x ? b.direction : Ce;
      let St = re / 2, Wn = h;
      if (A.Konva._fixTextRendering) {
        const dt = this.measureSize("M");
        Wn = "alphabetic", St = (dt.fontBoundingBoxAscent - dt.fontBoundingBoxDescent) / 2 + re / 2;
      }
      for (Ce === G && b.setAttr("direction", Ce), b.setAttr("font", this._getContextFont()), b.setAttr("textBaseline", Wn), b.setAttr("textAlign", w), ae === h ? Ee = (this.getHeight() - ge * re - se * 2) / 2 : ae === _ && (Ee = this.getHeight() - ge * re - se * 2), b.translate(se, Ee + se), Zn = 0; Zn < ge; Zn++) {
        let dt = 0, wn = 0;
        const bt = de[Zn], Ln = bt.text, jt = bt.width, Ot = bt.lastInParagraph;
        if (b.save(), De === J ? dt += Ue - jt - se * 2 : De === m && (dt += (Ue - jt - se * 2) / 2), Ze) {
          b.save(), b.beginPath();
          const Jt = A.Konva._fixTextRendering ? Math.round(q / 4) : Math.round(q / 2), yt = dt, It = St + wn + Jt;
          b.moveTo(yt, It);
          const zt = De === k && !Ot ? Ue - se * 2 : jt;
          b.lineTo(yt + Math.round(zt), It), b.lineWidth = q / 15;
          const Xr = this._getLinearGradient();
          b.strokeStyle = Xr || We, b.stroke(), b.restore();
        }
        if (Je) {
          b.save(), b.beginPath();
          const Jt = A.Konva._fixTextRendering ? -Math.round(q / 4) : 0;
          b.moveTo(dt, St + wn + Jt);
          const yt = De === k && !Ot ? Ue - se * 2 : jt;
          b.lineTo(dt + Math.round(yt), St + wn + Jt), b.lineWidth = q / 15;
          const It = this._getLinearGradient();
          b.strokeStyle = It || We, b.stroke(), b.restore();
        }
        if (Ce !== G && (Qe !== 0 || De === k)) {
          const Jt = Ln.split(" ").length - 1, yt = f(Ln);
          for (let It = 0; It < yt.length; It++) {
            const zt = yt[It];
            zt === " " && !Ot && De === k && (dt += (Ue - se * 2 - jt) / Jt), this._partialTextX = dt, this._partialTextY = St + wn, this._partialText = zt, b.fillStrokeShape(this), dt += this.measureSize(zt).width + Qe;
          }
        } else
          Qe !== 0 && b.setAttr("letterSpacing", `${Qe}px`), this._partialTextX = dt, this._partialTextY = St + wn, this._partialText = Ln, b.fillStrokeShape(this);
        b.restore(), ge > 1 && (St += re);
      }
    }
    _hitFunc(b) {
      const de = this.getWidth(), ge = this.getHeight();
      b.beginPath(), b.rect(0, 0, de, ge), b.closePath(), b.fillStrokeShape(this);
    }
    setText(b) {
      const de = l.Util._isString(b) ? b : b == null ? "" : b + "";
      return this._setAttr(P, de), this;
    }
    getWidth() {
      return this.attrs.width === g || this.attrs.width === void 0 ? this.getTextWidth() + this.padding() * 2 : this.attrs.width;
    }
    getHeight() {
      return this.attrs.height === g || this.attrs.height === void 0 ? this.fontSize() * this.textArr.length * this.lineHeight() + this.padding() * 2 : this.attrs.height;
    }
    getTextWidth() {
      return this.textWidth;
    }
    getTextHeight() {
      return l.Util.warn("text.getTextHeight() method is deprecated. Use text.height() - for full height and text.fontSize() - for one line height."), this.textHeight;
    }
    measureSize(b) {
      var de, ge, se, q, re, ae, Ce, Ee, De, Ue, Qe;
      let We = T(), At = this.fontSize(), Ze;
      We.save(), We.font = this._getContextFont(), Ze = We.measureText(b), We.restore();
      const Je = At / 100;
      return {
        actualBoundingBoxAscent: (de = Ze.actualBoundingBoxAscent) !== null && de !== void 0 ? de : 71.58203125 * Je,
        actualBoundingBoxDescent: (ge = Ze.actualBoundingBoxDescent) !== null && ge !== void 0 ? ge : 0,
        actualBoundingBoxLeft: (se = Ze.actualBoundingBoxLeft) !== null && se !== void 0 ? se : -7.421875 * Je,
        actualBoundingBoxRight: (q = Ze.actualBoundingBoxRight) !== null && q !== void 0 ? q : 75.732421875 * Je,
        alphabeticBaseline: (re = Ze.alphabeticBaseline) !== null && re !== void 0 ? re : 0,
        emHeightAscent: (ae = Ze.emHeightAscent) !== null && ae !== void 0 ? ae : 100 * Je,
        emHeightDescent: (Ce = Ze.emHeightDescent) !== null && Ce !== void 0 ? Ce : -20 * Je,
        fontBoundingBoxAscent: (Ee = Ze.fontBoundingBoxAscent) !== null && Ee !== void 0 ? Ee : 91 * Je,
        fontBoundingBoxDescent: (De = Ze.fontBoundingBoxDescent) !== null && De !== void 0 ? De : 21 * Je,
        hangingBaseline: (Ue = Ze.hangingBaseline) !== null && Ue !== void 0 ? Ue : 72.80000305175781 * Je,
        ideographicBaseline: (Qe = Ze.ideographicBaseline) !== null && Qe !== void 0 ? Qe : -21 * Je,
        width: Ze.width,
        height: At
      };
    }
    _getContextFont() {
      return this.fontStyle() + W + this.fontVariant() + W + (this.fontSize() + D) + ee(this.fontFamily());
    }
    _addTextLine(b) {
      this.align() === k && (b = b.trim());
      const ge = this._getTextWidth(b);
      return this.textArr.push({
        text: b,
        width: ge,
        lastInParagraph: !1
      });
    }
    _getTextWidth(b) {
      const de = this.letterSpacing(), ge = b.length;
      return T().measureText(b).width + de * ge;
    }
    _setTextData() {
      let b = this.text().split(`
`), de = +this.fontSize(), ge = 0, se = this.lineHeight() * de, q = this.attrs.width, re = this.attrs.height, ae = q !== g && q !== void 0, Ce = re !== g && re !== void 0, Ee = this.padding(), De = q - Ee * 2, Ue = re - Ee * 2, Qe = 0, We = this.wrap(), At = We !== X, Ze = We !== H && At, Je = this.ellipsis();
      this.textArr = [], T().font = this._getContextFont();
      const Zn = Je ? this._getTextWidth(Z) : 0;
      for (let St = 0, Wn = b.length; St < Wn; ++St) {
        let dt = b[St], wn = this._getTextWidth(dt);
        if (ae && wn > De)
          for (; dt.length > 0; ) {
            let bt = 0, Ln = f(dt).length, jt = "", Ot = 0;
            for (; bt < Ln; ) {
              const Jt = bt + Ln >>> 1, yt = f(dt), It = yt.slice(0, Jt + 1).join(""), zt = this._getTextWidth(It);
              (Je && Ce && Qe + se > Ue ? zt + Zn : zt) <= De ? (bt = Jt + 1, jt = It, Ot = zt) : Ln = Jt;
            }
            if (jt) {
              if (Ze) {
                const It = f(dt), zt = f(jt), Xr = It[zt.length], Ui = Xr === W || Xr === S;
                let Ar;
                if (Ui && Ot <= De)
                  Ar = zt.length;
                else {
                  const _o = zt.lastIndexOf(W), Bi = zt.lastIndexOf(S);
                  Ar = Math.max(_o, Bi) + 1;
                }
                Ar > 0 && (bt = Ar, jt = It.slice(0, bt).join(""), Ot = this._getTextWidth(jt));
              }
              if (jt = jt.trimRight(), this._addTextLine(jt), ge = Math.max(ge, Ot), Qe += se, this._shouldHandleEllipsis(Qe)) {
                this._tryToAddEllipsisToLastLine();
                break;
              }
              if (dt = f(dt).slice(bt).join("").trimLeft(), dt.length > 0 && (wn = this._getTextWidth(dt), wn <= De)) {
                this._addTextLine(dt), Qe += se, ge = Math.max(ge, wn);
                break;
              }
            } else
              break;
          }
        else
          this._addTextLine(dt), Qe += se, ge = Math.max(ge, wn), this._shouldHandleEllipsis(Qe) && St < Wn - 1 && this._tryToAddEllipsisToLastLine();
        if (this.textArr[this.textArr.length - 1] && (this.textArr[this.textArr.length - 1].lastInParagraph = !0), Ce && Qe + se > Ue)
          break;
      }
      this.textHeight = de, this.textWidth = ge;
    }
    _shouldHandleEllipsis(b) {
      const de = +this.fontSize(), ge = this.lineHeight() * de, se = this.attrs.height, q = se !== g && se !== void 0, re = this.padding(), ae = se - re * 2;
      return !(this.wrap() !== X) || q && b + ge > ae;
    }
    _tryToAddEllipsisToLastLine() {
      const b = this.attrs.width, de = b !== g && b !== void 0, ge = this.padding(), se = b - ge * 2, q = this.ellipsis(), re = this.textArr[this.textArr.length - 1];
      !re || !q || (de && (this._getTextWidth(re.text + Z) < se || (re.text = re.text.slice(0, re.text.length - 3))), this.textArr.splice(this.textArr.length - 1, 1), this._addTextLine(re.text + Z));
    }
    getStrokeScaleEnabled() {
      return !0;
    }
    _useBufferCanvas() {
      const b = this.textDecoration().indexOf("underline") !== -1 || this.textDecoration().indexOf("line-through") !== -1, de = this.hasShadow();
      return b && de ? !0 : super._useBufferCanvas();
    }
  };
  return Ql.Text = L, L.prototype._fillFunc = z, L.prototype._strokeFunc = N, L.prototype.className = O, L.prototype._attrsAffectingSize = [
    "text",
    "fontSize",
    "padding",
    "wrap",
    "lineHeight",
    "letterSpacing"
  ], (0, C._registerNode)(L), d.Factory.overWriteSetter(L, "width", (0, F.getNumberOrAutoValidator)()), d.Factory.overWriteSetter(L, "height", (0, F.getNumberOrAutoValidator)()), d.Factory.addGetterSetter(L, "direction", x), d.Factory.addGetterSetter(L, "fontFamily", "Arial"), d.Factory.addGetterSetter(L, "fontSize", 12, (0, F.getNumberValidator)()), d.Factory.addGetterSetter(L, "fontStyle", R), d.Factory.addGetterSetter(L, "fontVariant", R), d.Factory.addGetterSetter(L, "padding", 0, (0, F.getNumberValidator)()), d.Factory.addGetterSetter(L, "align", w), d.Factory.addGetterSetter(L, "verticalAlign", j), d.Factory.addGetterSetter(L, "lineHeight", 1, (0, F.getNumberValidator)()), d.Factory.addGetterSetter(L, "wrap", B), d.Factory.addGetterSetter(L, "ellipsis", !1, (0, F.getBooleanValidator)()), d.Factory.addGetterSetter(L, "letterSpacing", 0, (0, F.getNumberValidator)()), d.Factory.addGetterSetter(L, "text", "", (0, F.getStringValidator)()), d.Factory.addGetterSetter(L, "textDecoration", ""), Ql;
}
var fu = {}, Hh;
function K1() {
  if (Hh) return fu;
  Hh = 1, Object.defineProperty(fu, "__esModule", { value: !0 }), fu.TextPath = void 0;
  const l = Qt(), d = st(), v = Fn(), A = _f(), F = H0(), C = at(), f = et(), g = "", m = "normal";
  function x(E) {
    E.fillText(this.partialText, 0, 0);
  }
  function k(E) {
    E.strokeText(this.partialText, 0, 0);
  }
  let M = class extends v.Shape {
    constructor(S) {
      super(S), this.dummyCanvas = l.Util.createCanvasElement(), this.dataArray = [], this._readDataAttribute(), this.on("dataChange.konva", function() {
        this._readDataAttribute(), this._setTextData();
      }), this.on("textChange.konva alignChange.konva letterSpacingChange.konva kerningFuncChange.konva fontSizeChange.konva fontFamilyChange.konva", this._setTextData), this._setTextData();
    }
    _getTextPathLength() {
      return A.Path.getPathLength(this.dataArray);
    }
    _getPointAtLength(S) {
      if (!this.attrs.data)
        return null;
      const w = this.pathLength;
      return S - 1 > w ? null : A.Path.getPointAtLengthOfDataArray(S, this.dataArray);
    }
    _readDataAttribute() {
      this.dataArray = A.Path.parsePathData(this.attrs.data), this.pathLength = this._getTextPathLength();
    }
    _sceneFunc(S) {
      S.setAttr("font", this._getContextFont()), S.setAttr("textBaseline", this.textBaseline()), S.setAttr("textAlign", "left"), S.save();
      const w = this.textDecoration(), P = this.fill(), O = this.fontSize(), j = this.glyphInfo;
      w === "underline" && S.beginPath();
      for (let _ = 0; _ < j.length; _++) {
        S.save();
        const h = j[_].p0;
        S.translate(h.x, h.y), S.rotate(j[_].rotation), this.partialText = j[_].text, S.fillStrokeShape(this), w === "underline" && (_ === 0 && S.moveTo(0, O / 2 + 1), S.lineTo(O, O / 2 + 1)), S.restore();
      }
      w === "underline" && (S.strokeStyle = P, S.lineWidth = O / 20, S.stroke()), S.restore();
    }
    _hitFunc(S) {
      S.beginPath();
      const w = this.glyphInfo;
      if (w.length >= 1) {
        const P = w[0].p0;
        S.moveTo(P.x, P.y);
      }
      for (let P = 0; P < w.length; P++) {
        const O = w[P].p1;
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
      return F.Text.prototype.setText.call(this, S);
    }
    _getContextFont() {
      return F.Text.prototype._getContextFont.call(this);
    }
    _getTextSize(S) {
      const P = this.dummyCanvas.getContext("2d");
      P.save(), P.font = this._getContextFont();
      const O = P.measureText(S);
      return P.restore(), {
        width: O.width,
        height: parseInt(`${this.fontSize()}`, 10)
      };
    }
    _setTextData() {
      const { width: S, height: w } = this._getTextSize(this.attrs.text);
      if (this.textWidth = S, this.textHeight = w, this.glyphInfo = [], !this.attrs.data)
        return null;
      const P = this.letterSpacing(), O = this.align(), j = this.kerningFunc(), _ = Math.max(this.textWidth + ((this.attrs.text || "").length - 1) * P, 0);
      let h = 0;
      O === "center" && (h = Math.max(0, this.pathLength / 2 - _ / 2)), O === "right" && (h = Math.max(0, this.pathLength - _));
      const R = (0, F.stringToArray)(this.text());
      let D = h;
      for (let W = 0; W < R.length; W++) {
        const J = this._getPointAtLength(D);
        if (!J)
          return;
        let G = this._getTextSize(R[W]).width + P;
        if (R[W] === " " && O === "justify") {
          const ie = this.text().split(" ").length - 1;
          G += (this.pathLength - _) / ie;
        }
        const B = this._getPointAtLength(D + G);
        if (!B)
          return;
        const H = A.Path.getLineLength(J.x, J.y, B.x, B.y);
        let X = 0;
        if (j)
          try {
            X = j(R[W - 1], R[W]) * this.fontSize();
          } catch {
            X = 0;
          }
        J.x += X, B.x += X, this.textWidth += X;
        const Z = A.Path.getPointOnLine(X + H / 2, J.x, J.y, B.x, B.y), Q = Math.atan2(B.y - J.y, B.x - J.x);
        this.glyphInfo.push({
          transposeX: Z.x,
          transposeY: Z.y,
          text: R[W],
          rotation: Q,
          p0: J,
          p1: B
        }), D += G;
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
      this.glyphInfo.forEach(function(D) {
        S.push(D.p0.x), S.push(D.p0.y), S.push(D.p1.x), S.push(D.p1.y);
      });
      let w = S[0] || 0, P = S[0] || 0, O = S[1] || 0, j = S[1] || 0, _, h;
      for (let D = 0; D < S.length / 2; D++)
        _ = S[D * 2], h = S[D * 2 + 1], w = Math.min(w, _), P = Math.max(P, _), O = Math.min(O, h), j = Math.max(j, h);
      const R = this.fontSize();
      return {
        x: w - R / 2,
        y: O - R / 2,
        width: P - w + R,
        height: j - O + R
      };
    }
    destroy() {
      return l.Util.releaseCanvas(this.dummyCanvas), super.destroy();
    }
  };
  return fu.TextPath = M, M.prototype._fillFunc = x, M.prototype._strokeFunc = k, M.prototype._fillFuncHit = x, M.prototype._strokeFuncHit = k, M.prototype.className = "TextPath", M.prototype._attrsAffectingSize = ["text", "fontSize", "data"], (0, f._registerNode)(M), d.Factory.addGetterSetter(M, "data"), d.Factory.addGetterSetter(M, "fontFamily", "Arial"), d.Factory.addGetterSetter(M, "fontSize", 12, (0, C.getNumberValidator)()), d.Factory.addGetterSetter(M, "fontStyle", m), d.Factory.addGetterSetter(M, "align", "left"), d.Factory.addGetterSetter(M, "letterSpacing", 0, (0, C.getNumberValidator)()), d.Factory.addGetterSetter(M, "textBaseline", "middle"), d.Factory.addGetterSetter(M, "fontVariant", m), d.Factory.addGetterSetter(M, "text", g), d.Factory.addGetterSetter(M, "textDecoration", ""), d.Factory.addGetterSetter(M, "kerningFunc", void 0), fu;
}
var hu = {}, jh;
function Y1() {
  if (jh) return hu;
  jh = 1, Object.defineProperty(hu, "__esModule", { value: !0 }), hu.Transformer = void 0;
  const l = Qt(), d = st(), v = sn(), A = Fn(), F = V0(), C = yf(), f = et(), g = at(), m = et(), x = "tr-konva", k = [
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
  ].map((G) => G + `.${x}`).join(" "), M = "nodesRect", E = [
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
  function P(G, B, H) {
    if (G === "rotater")
      return H;
    B += l.Util.degToRad(S[G] || 0);
    const X = (l.Util.radToDeg(B) % 360 + 360) % 360;
    return l.Util._inRange(X, 315 + 22.5, 360) || l.Util._inRange(X, 0, 22.5) ? "ns-resize" : l.Util._inRange(X, 45 - 22.5, 45 + 22.5) ? "nesw-resize" : l.Util._inRange(X, 90 - 22.5, 90 + 22.5) ? "ew-resize" : l.Util._inRange(X, 135 - 22.5, 135 + 22.5) ? "nwse-resize" : l.Util._inRange(X, 180 - 22.5, 180 + 22.5) ? "ns-resize" : l.Util._inRange(X, 225 - 22.5, 225 + 22.5) ? "nesw-resize" : l.Util._inRange(X, 270 - 22.5, 270 + 22.5) ? "ew-resize" : l.Util._inRange(X, 315 - 22.5, 315 + 22.5) ? "nwse-resize" : (l.Util.error("Transformer has unknown angle for cursor detection: " + X), "pointer");
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
  function j(G) {
    return {
      x: G.x + G.width / 2 * Math.cos(G.rotation) + G.height / 2 * Math.sin(-G.rotation),
      y: G.y + G.height / 2 * Math.cos(G.rotation) + G.width / 2 * Math.sin(G.rotation)
    };
  }
  function _(G, B, H) {
    const X = H.x + (G.x - H.x) * Math.cos(B) - (G.y - H.y) * Math.sin(B), Z = H.y + (G.x - H.x) * Math.sin(B) + (G.y - H.y) * Math.cos(B);
    return {
      ...G,
      rotation: G.rotation + B,
      x: X,
      y: Z
    };
  }
  function h(G, B) {
    const H = j(G);
    return _(G, B, H);
  }
  function R(G, B, H) {
    let X = B;
    for (let Z = 0; Z < G.length; Z++) {
      const Q = f.Konva.getAngle(G[Z]), ie = Math.abs(Q - B) % (Math.PI * 2);
      Math.min(ie, Math.PI * 2 - ie) < H && (X = Q);
    }
    return X;
  }
  let D = 0;
  class W extends C.Group {
    constructor(B) {
      super(B), this._movingAnchorName = null, this._transforming = !1, this._createElements(), this._handleMouseMove = this._handleMouseMove.bind(this), this._handleMouseUp = this._handleMouseUp.bind(this), this.update = this.update.bind(this), this.on(k, this.update), this.getNode() && this.update();
    }
    attachTo(B) {
      return this.setNode(B), this;
    }
    setNode(B) {
      return l.Util.warn("tr.setNode(shape), tr.node(shape) and tr.attachTo(shape) methods are deprecated. Please use tr.nodes(nodesArray) instead."), this.setNodes([B]);
    }
    getNode() {
      return this._nodes && this._nodes[0];
    }
    _getEventNamespace() {
      return x + this._id;
    }
    setNodes(B = []) {
      this._nodes && this._nodes.length && this.detach();
      const H = B.filter((Z) => Z.isAncestorOf(this) ? (l.Util.error("Konva.Transformer cannot be an a child of the node you are trying to attach"), !1) : !0);
      return this._nodes = B = H, B.length === 1 && this.useSingleNodeRotation() ? this.rotation(B[0].getAbsoluteRotation()) : this.rotation(0), this._nodes.forEach((Z) => {
        const Q = () => {
          this.nodes().length === 1 && this.useSingleNodeRotation() && this.rotation(this.nodes()[0].getAbsoluteRotation()), this._resetTransformCache(), !this._transforming && !this.isDragging() && this.update();
        };
        if (Z._attrsAffectingSize.length) {
          const ie = Z._attrsAffectingSize.map((ee) => ee + "Change." + this._getEventNamespace()).join(" ");
          Z.on(ie, Q);
        }
        Z.on(E.map((ie) => ie + `.${this._getEventNamespace()}`).join(" "), Q), Z.on(`absoluteTransformChange.${this._getEventNamespace()}`, Q), this._proxyDrag(Z);
      }), this._resetTransformCache(), !!this.findOne(".top-left") && this.update(), this;
    }
    _proxyDrag(B) {
      let H;
      B.on(`dragstart.${this._getEventNamespace()}`, (X) => {
        H = B.getAbsolutePosition(), !this.isDragging() && B !== this.findOne(".back") && this.startDrag(X, !1);
      }), B.on(`dragmove.${this._getEventNamespace()}`, (X) => {
        if (!H)
          return;
        const Z = B.getAbsolutePosition(), Q = Z.x - H.x, ie = Z.y - H.y;
        this.nodes().forEach((ee) => {
          if (ee === B || ee.isDragging())
            return;
          const me = ee.getAbsolutePosition();
          ee.setAbsolutePosition({
            x: me.x + Q,
            y: me.y + ie
          }), ee.startDrag(X);
        }), H = null;
      });
    }
    getNodes() {
      return this._nodes || [];
    }
    getActiveAnchor() {
      return this._movingAnchorName;
    }
    detach() {
      this._nodes && this._nodes.forEach((B) => {
        B.off("." + this._getEventNamespace());
      }), this._nodes = [], this._resetTransformCache();
    }
    _resetTransformCache() {
      this._clearCache(M), this._clearCache("transform"), this._clearSelfAndDescendantCache("absoluteTransform");
    }
    _getNodeRect() {
      return this._getCache(M, this.__getNodeRect);
    }
    __getNodeShape(B, H = this.rotation(), X) {
      const Z = B.getClientRect({
        skipTransform: !0,
        skipShadow: !0,
        skipStroke: this.ignoreStroke()
      }), Q = B.getAbsoluteScale(X), ie = B.getAbsolutePosition(X), ee = Z.x * Q.x - B.offsetX() * Q.x, me = Z.y * Q.y - B.offsetY() * Q.y, T = (f.Konva.getAngle(B.getAbsoluteRotation()) + Math.PI * 2) % (Math.PI * 2), z = {
        x: ie.x + ee * Math.cos(T) + me * Math.sin(-T),
        y: ie.y + me * Math.cos(T) + ee * Math.sin(T),
        width: Z.width * Q.x,
        height: Z.height * Q.y,
        rotation: T
      };
      return _(z, -f.Konva.getAngle(H), {
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
      const H = [];
      this.nodes().map((T) => {
        const z = T.getClientRect({
          skipTransform: !0,
          skipShadow: !0,
          skipStroke: this.ignoreStroke()
        }), N = [
          { x: z.x, y: z.y },
          { x: z.x + z.width, y: z.y },
          { x: z.x + z.width, y: z.y + z.height },
          { x: z.x, y: z.y + z.height }
        ], U = T.getAbsoluteTransform();
        N.forEach(function(L) {
          const K = U.point(L);
          H.push(K);
        });
      });
      const X = new l.Transform();
      X.rotate(-f.Konva.getAngle(this.rotation()));
      let Z = 1 / 0, Q = 1 / 0, ie = -1 / 0, ee = -1 / 0;
      H.forEach(function(T) {
        const z = X.point(T);
        Z === void 0 && (Z = ie = z.x, Q = ee = z.y), Z = Math.min(Z, z.x), Q = Math.min(Q, z.y), ie = Math.max(ie, z.x), ee = Math.max(ee, z.y);
      }), X.invert();
      const me = X.point({ x: Z, y: Q });
      return {
        x: me.x,
        y: me.y,
        width: ie - Z,
        height: ee - Q,
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
      this._createBack(), O.forEach((B) => {
        this._createAnchor(B);
      }), this._createAnchor("rotater");
    }
    _createAnchor(B) {
      const H = new F.Rect({
        stroke: "rgb(0, 161, 255)",
        fill: "white",
        strokeWidth: 1,
        name: B + " _anchor",
        dragDistance: 0,
        draggable: !0,
        hitStrokeWidth: w ? 10 : "auto"
      }), X = this;
      H.on("mousedown touchstart", function(Z) {
        X._handleMouseDown(Z);
      }), H.on("dragstart", (Z) => {
        H.stopDrag(), Z.cancelBubble = !0;
      }), H.on("dragend", (Z) => {
        Z.cancelBubble = !0;
      }), H.on("mouseenter", () => {
        const Z = f.Konva.getAngle(this.rotation()), Q = this.rotateAnchorCursor(), ie = P(B, Z, Q);
        H.getStage().content && (H.getStage().content.style.cursor = ie), this._cursorChange = !0;
      }), H.on("mouseout", () => {
        H.getStage().content && (H.getStage().content.style.cursor = ""), this._cursorChange = !1;
      }), this.add(H);
    }
    _createBack() {
      const B = new A.Shape({
        name: "back",
        width: 0,
        height: 0,
        draggable: !0,
        sceneFunc(H, X) {
          const Z = X.getParent(), Q = Z.padding();
          H.beginPath(), H.rect(-Q, -Q, X.width() + Q * 2, X.height() + Q * 2), H.moveTo(X.width() / 2, -Q), Z.rotateEnabled() && Z.rotateLineVisible() && H.lineTo(X.width() / 2, -Z.rotateAnchorOffset() * l.Util._sign(X.height()) - Q), H.fillStrokeShape(X);
        },
        hitFunc: (H, X) => {
          if (!this.shouldOverdrawWholeArea())
            return;
          const Z = this.padding();
          H.beginPath(), H.rect(-Z, -Z, X.width() + Z * 2, X.height() + Z * 2), H.fillStrokeShape(X);
        }
      });
      this.add(B), this._proxyDrag(B), B.on("dragstart", (H) => {
        H.cancelBubble = !0;
      }), B.on("dragmove", (H) => {
        H.cancelBubble = !0;
      }), B.on("dragend", (H) => {
        H.cancelBubble = !0;
      }), this.on("dragmove", (H) => {
        this.update();
      });
    }
    _handleMouseDown(B) {
      if (this._transforming)
        return;
      this._movingAnchorName = B.target.name().split(" ")[0];
      const H = this._getNodeRect(), X = H.width, Z = H.height, Q = Math.sqrt(Math.pow(X, 2) + Math.pow(Z, 2));
      this.sin = Math.abs(Z / Q), this.cos = Math.abs(X / Q), typeof window < "u" && (window.addEventListener("mousemove", this._handleMouseMove), window.addEventListener("touchmove", this._handleMouseMove), window.addEventListener("mouseup", this._handleMouseUp, !0), window.addEventListener("touchend", this._handleMouseUp, !0)), this._transforming = !0;
      const ie = B.target.getAbsolutePosition(), ee = B.target.getStage().getPointerPosition();
      this._anchorDragOffset = {
        x: ee.x - ie.x,
        y: ee.y - ie.y
      }, D++, this._fire("transformstart", { evt: B.evt, target: this.getNode() }), this._nodes.forEach((me) => {
        me._fire("transformstart", { evt: B.evt, target: me });
      });
    }
    _handleMouseMove(B) {
      let H, X, Z;
      const Q = this.findOne("." + this._movingAnchorName), ie = Q.getStage();
      ie.setPointersPositions(B);
      const ee = ie.getPointerPosition();
      let me = {
        x: ee.x - this._anchorDragOffset.x,
        y: ee.y - this._anchorDragOffset.y
      };
      const T = Q.getAbsolutePosition();
      this.anchorDragBoundFunc() && (me = this.anchorDragBoundFunc()(T, me, B)), Q.setAbsolutePosition(me);
      const z = Q.getAbsolutePosition();
      if (T.x === z.x && T.y === z.y)
        return;
      if (this._movingAnchorName === "rotater") {
        const se = this._getNodeRect();
        H = Q.x() - se.width / 2, X = -Q.y() + se.height / 2;
        let q = Math.atan2(-X, H) + Math.PI / 2;
        se.height < 0 && (q -= Math.PI);
        const ae = f.Konva.getAngle(this.rotation()) + q, Ce = f.Konva.getAngle(this.rotationSnapTolerance()), De = R(this.rotationSnaps(), ae, Ce) - se.rotation, Ue = h(se, De);
        this._fitNodesInto(Ue, B);
        return;
      }
      const N = this.shiftBehavior();
      let U;
      N === "inverted" ? U = this.keepRatio() && !B.shiftKey : N === "none" ? U = this.keepRatio() : U = this.keepRatio() || B.shiftKey;
      let L = this.centeredScaling() || B.altKey;
      if (this._movingAnchorName === "top-left") {
        if (U) {
          const se = L ? {
            x: this.width() / 2,
            y: this.height() / 2
          } : {
            x: this.findOne(".bottom-right").x(),
            y: this.findOne(".bottom-right").y()
          };
          Z = Math.sqrt(Math.pow(se.x - Q.x(), 2) + Math.pow(se.y - Q.y(), 2));
          const q = this.findOne(".top-left").x() > se.x ? -1 : 1, re = this.findOne(".top-left").y() > se.y ? -1 : 1;
          H = Z * this.cos * q, X = Z * this.sin * re, this.findOne(".top-left").x(se.x - H), this.findOne(".top-left").y(se.y - X);
        }
      } else if (this._movingAnchorName === "top-center")
        this.findOne(".top-left").y(Q.y());
      else if (this._movingAnchorName === "top-right") {
        if (U) {
          const se = L ? {
            x: this.width() / 2,
            y: this.height() / 2
          } : {
            x: this.findOne(".bottom-left").x(),
            y: this.findOne(".bottom-left").y()
          };
          Z = Math.sqrt(Math.pow(Q.x() - se.x, 2) + Math.pow(se.y - Q.y(), 2));
          const q = this.findOne(".top-right").x() < se.x ? -1 : 1, re = this.findOne(".top-right").y() > se.y ? -1 : 1;
          H = Z * this.cos * q, X = Z * this.sin * re, this.findOne(".top-right").x(se.x + H), this.findOne(".top-right").y(se.y - X);
        }
        var K = Q.position();
        this.findOne(".top-left").y(K.y), this.findOne(".bottom-right").x(K.x);
      } else if (this._movingAnchorName === "middle-left")
        this.findOne(".top-left").x(Q.x());
      else if (this._movingAnchorName === "middle-right")
        this.findOne(".bottom-right").x(Q.x());
      else if (this._movingAnchorName === "bottom-left") {
        if (U) {
          const se = L ? {
            x: this.width() / 2,
            y: this.height() / 2
          } : {
            x: this.findOne(".top-right").x(),
            y: this.findOne(".top-right").y()
          };
          Z = Math.sqrt(Math.pow(se.x - Q.x(), 2) + Math.pow(Q.y() - se.y, 2));
          const q = se.x < Q.x() ? -1 : 1, re = Q.y() < se.y ? -1 : 1;
          H = Z * this.cos * q, X = Z * this.sin * re, Q.x(se.x - H), Q.y(se.y + X);
        }
        K = Q.position(), this.findOne(".top-left").x(K.x), this.findOne(".bottom-right").y(K.y);
      } else if (this._movingAnchorName === "bottom-center")
        this.findOne(".bottom-right").y(Q.y());
      else if (this._movingAnchorName === "bottom-right") {
        if (U) {
          const se = L ? {
            x: this.width() / 2,
            y: this.height() / 2
          } : {
            x: this.findOne(".top-left").x(),
            y: this.findOne(".top-left").y()
          };
          Z = Math.sqrt(Math.pow(Q.x() - se.x, 2) + Math.pow(Q.y() - se.y, 2));
          const q = this.findOne(".bottom-right").x() < se.x ? -1 : 1, re = this.findOne(".bottom-right").y() < se.y ? -1 : 1;
          H = Z * this.cos * q, X = Z * this.sin * re, this.findOne(".bottom-right").x(se.x + H), this.findOne(".bottom-right").y(se.y + X);
        }
      } else
        console.error(new Error("Wrong position argument of selection resizer: " + this._movingAnchorName));
      if (L = this.centeredScaling() || B.altKey, L) {
        const se = this.findOne(".top-left"), q = this.findOne(".bottom-right"), re = se.x(), ae = se.y(), Ce = this.getWidth() - q.x(), Ee = this.getHeight() - q.y();
        q.move({
          x: -re,
          y: -ae
        }), se.move({
          x: Ce,
          y: Ee
        });
      }
      const b = this.findOne(".top-left").getAbsolutePosition();
      H = b.x, X = b.y;
      const de = this.findOne(".bottom-right").x() - this.findOne(".top-left").x(), ge = this.findOne(".bottom-right").y() - this.findOne(".top-left").y();
      this._fitNodesInto({
        x: H,
        y: X,
        width: de,
        height: ge,
        rotation: f.Konva.getAngle(this.rotation())
      }, B);
    }
    _handleMouseUp(B) {
      this._removeEvents(B);
    }
    getAbsoluteTransform() {
      return this.getTransform();
    }
    _removeEvents(B) {
      var H;
      if (this._transforming) {
        this._transforming = !1, typeof window < "u" && (window.removeEventListener("mousemove", this._handleMouseMove), window.removeEventListener("touchmove", this._handleMouseMove), window.removeEventListener("mouseup", this._handleMouseUp, !0), window.removeEventListener("touchend", this._handleMouseUp, !0));
        const X = this.getNode();
        D--, this._fire("transformend", { evt: B, target: X }), (H = this.getLayer()) === null || H === void 0 || H.batchDraw(), X && this._nodes.forEach((Z) => {
          var Q;
          Z._fire("transformend", { evt: B, target: Z }), (Q = Z.getLayer()) === null || Q === void 0 || Q.batchDraw();
        }), this._movingAnchorName = null;
      }
    }
    _fitNodesInto(B, H) {
      const X = this._getNodeRect(), Z = 1;
      if (l.Util._inRange(B.width, -this.padding() * 2 - Z, Z)) {
        this.update();
        return;
      }
      if (l.Util._inRange(B.height, -this.padding() * 2 - Z, Z)) {
        this.update();
        return;
      }
      const Q = new l.Transform();
      if (Q.rotate(f.Konva.getAngle(this.rotation())), this._movingAnchorName && B.width < 0 && this._movingAnchorName.indexOf("left") >= 0) {
        const U = Q.point({
          x: -this.padding() * 2,
          y: 0
        });
        B.x += U.x, B.y += U.y, B.width += this.padding() * 2, this._movingAnchorName = this._movingAnchorName.replace("left", "right"), this._anchorDragOffset.x -= U.x, this._anchorDragOffset.y -= U.y;
      } else if (this._movingAnchorName && B.width < 0 && this._movingAnchorName.indexOf("right") >= 0) {
        const U = Q.point({
          x: this.padding() * 2,
          y: 0
        });
        this._movingAnchorName = this._movingAnchorName.replace("right", "left"), this._anchorDragOffset.x -= U.x, this._anchorDragOffset.y -= U.y, B.width += this.padding() * 2;
      }
      if (this._movingAnchorName && B.height < 0 && this._movingAnchorName.indexOf("top") >= 0) {
        const U = Q.point({
          x: 0,
          y: -this.padding() * 2
        });
        B.x += U.x, B.y += U.y, this._movingAnchorName = this._movingAnchorName.replace("top", "bottom"), this._anchorDragOffset.x -= U.x, this._anchorDragOffset.y -= U.y, B.height += this.padding() * 2;
      } else if (this._movingAnchorName && B.height < 0 && this._movingAnchorName.indexOf("bottom") >= 0) {
        const U = Q.point({
          x: 0,
          y: this.padding() * 2
        });
        this._movingAnchorName = this._movingAnchorName.replace("bottom", "top"), this._anchorDragOffset.x -= U.x, this._anchorDragOffset.y -= U.y, B.height += this.padding() * 2;
      }
      if (this.boundBoxFunc()) {
        const U = this.boundBoxFunc()(X, B);
        U ? B = U : l.Util.warn("boundBoxFunc returned falsy. You should return new bound rect from it!");
      }
      const ie = 1e7, ee = new l.Transform();
      ee.translate(X.x, X.y), ee.rotate(X.rotation), ee.scale(X.width / ie, X.height / ie);
      const me = new l.Transform(), T = B.width / ie, z = B.height / ie;
      this.flipEnabled() === !1 ? (me.translate(B.x, B.y), me.rotate(B.rotation), me.translate(B.width < 0 ? B.width : 0, B.height < 0 ? B.height : 0), me.scale(Math.abs(T), Math.abs(z))) : (me.translate(B.x, B.y), me.rotate(B.rotation), me.scale(T, z));
      const N = me.multiply(ee.invert());
      this._nodes.forEach((U) => {
        var L;
        const K = U.getParent().getAbsoluteTransform(), b = U.getTransform().copy();
        b.translate(U.offsetX(), U.offsetY());
        const de = new l.Transform();
        de.multiply(K.copy().invert()).multiply(N).multiply(K).multiply(b);
        const ge = de.decompose();
        U.setAttrs(ge), (L = U.getLayer()) === null || L === void 0 || L.batchDraw();
      }), this.rotation(l.Util._getRotation(B.rotation)), this._nodes.forEach((U) => {
        this._fire("transform", { evt: H, target: U }), U._fire("transform", { evt: H, target: U });
      }), this._resetTransformCache(), this.update(), this.getLayer().batchDraw();
    }
    forceUpdate() {
      this._resetTransformCache(), this.update();
    }
    _batchChangeChild(B, H) {
      this.findOne(B).setAttrs(H);
    }
    update() {
      var B;
      const H = this._getNodeRect();
      this.rotation(l.Util._getRotation(H.rotation));
      const X = H.width, Z = H.height, Q = this.enabledAnchors(), ie = this.resizeEnabled(), ee = this.padding(), me = this.anchorSize(), T = this.find("._anchor");
      T.forEach((N) => {
        N.setAttrs({
          width: me,
          height: me,
          offsetX: me / 2,
          offsetY: me / 2,
          stroke: this.anchorStroke(),
          strokeWidth: this.anchorStrokeWidth(),
          fill: this.anchorFill(),
          cornerRadius: this.anchorCornerRadius()
        });
      }), this._batchChangeChild(".top-left", {
        x: 0,
        y: 0,
        offsetX: me / 2 + ee,
        offsetY: me / 2 + ee,
        visible: ie && Q.indexOf("top-left") >= 0
      }), this._batchChangeChild(".top-center", {
        x: X / 2,
        y: 0,
        offsetY: me / 2 + ee,
        visible: ie && Q.indexOf("top-center") >= 0
      }), this._batchChangeChild(".top-right", {
        x: X,
        y: 0,
        offsetX: me / 2 - ee,
        offsetY: me / 2 + ee,
        visible: ie && Q.indexOf("top-right") >= 0
      }), this._batchChangeChild(".middle-left", {
        x: 0,
        y: Z / 2,
        offsetX: me / 2 + ee,
        visible: ie && Q.indexOf("middle-left") >= 0
      }), this._batchChangeChild(".middle-right", {
        x: X,
        y: Z / 2,
        offsetX: me / 2 - ee,
        visible: ie && Q.indexOf("middle-right") >= 0
      }), this._batchChangeChild(".bottom-left", {
        x: 0,
        y: Z,
        offsetX: me / 2 + ee,
        offsetY: me / 2 - ee,
        visible: ie && Q.indexOf("bottom-left") >= 0
      }), this._batchChangeChild(".bottom-center", {
        x: X / 2,
        y: Z,
        offsetY: me / 2 - ee,
        visible: ie && Q.indexOf("bottom-center") >= 0
      }), this._batchChangeChild(".bottom-right", {
        x: X,
        y: Z,
        offsetX: me / 2 - ee,
        offsetY: me / 2 - ee,
        visible: ie && Q.indexOf("bottom-right") >= 0
      }), this._batchChangeChild(".rotater", {
        x: X / 2,
        y: -this.rotateAnchorOffset() * l.Util._sign(Z) - ee,
        visible: this.rotateEnabled()
      }), this._batchChangeChild(".back", {
        width: X,
        height: Z,
        visible: this.borderEnabled(),
        stroke: this.borderStroke(),
        strokeWidth: this.borderStrokeWidth(),
        dash: this.borderDash(),
        x: 0,
        y: 0
      });
      const z = this.anchorStyleFunc();
      z && T.forEach((N) => {
        z(N);
      }), (B = this.getLayer()) === null || B === void 0 || B.batchDraw();
    }
    isTransforming() {
      return this._transforming;
    }
    stopTransform() {
      if (this._transforming) {
        this._removeEvents();
        const B = this.findOne("." + this._movingAnchorName);
        B && B.stopDrag();
      }
    }
    destroy() {
      return this.getStage() && this._cursorChange && this.getStage().content && (this.getStage().content.style.cursor = ""), C.Group.prototype.destroy.call(this), this.detach(), this._removeEvents(), this;
    }
    toObject() {
      return v.Node.prototype.toObject.call(this);
    }
    clone(B) {
      return v.Node.prototype.clone.call(this, B);
    }
    getClientRect() {
      return this.nodes().length > 0 ? super.getClientRect() : { x: 0, y: 0, width: 0, height: 0 };
    }
  }
  hu.Transformer = W, W.isTransforming = () => D > 0;
  function J(G) {
    return G instanceof Array || l.Util.warn("enabledAnchors value should be an array"), G instanceof Array && G.forEach(function(B) {
      O.indexOf(B) === -1 && l.Util.warn("Unknown anchor name: " + B + ". Available names are: " + O.join(", "));
    }), G || [];
  }
  return W.prototype.className = "Transformer", (0, m._registerNode)(W), d.Factory.addGetterSetter(W, "enabledAnchors", O, J), d.Factory.addGetterSetter(W, "flipEnabled", !0, (0, g.getBooleanValidator)()), d.Factory.addGetterSetter(W, "resizeEnabled", !0), d.Factory.addGetterSetter(W, "anchorSize", 10, (0, g.getNumberValidator)()), d.Factory.addGetterSetter(W, "rotateEnabled", !0), d.Factory.addGetterSetter(W, "rotateLineVisible", !0), d.Factory.addGetterSetter(W, "rotationSnaps", []), d.Factory.addGetterSetter(W, "rotateAnchorOffset", 50, (0, g.getNumberValidator)()), d.Factory.addGetterSetter(W, "rotateAnchorCursor", "crosshair"), d.Factory.addGetterSetter(W, "rotationSnapTolerance", 5, (0, g.getNumberValidator)()), d.Factory.addGetterSetter(W, "borderEnabled", !0), d.Factory.addGetterSetter(W, "anchorStroke", "rgb(0, 161, 255)"), d.Factory.addGetterSetter(W, "anchorStrokeWidth", 1, (0, g.getNumberValidator)()), d.Factory.addGetterSetter(W, "anchorFill", "white"), d.Factory.addGetterSetter(W, "anchorCornerRadius", 0, (0, g.getNumberValidator)()), d.Factory.addGetterSetter(W, "borderStroke", "rgb(0, 161, 255)"), d.Factory.addGetterSetter(W, "borderStrokeWidth", 1, (0, g.getNumberValidator)()), d.Factory.addGetterSetter(W, "borderDash"), d.Factory.addGetterSetter(W, "keepRatio", !0), d.Factory.addGetterSetter(W, "shiftBehavior", "default"), d.Factory.addGetterSetter(W, "centeredScaling", !1), d.Factory.addGetterSetter(W, "ignoreStroke", !1), d.Factory.addGetterSetter(W, "padding", 0, (0, g.getNumberValidator)()), d.Factory.addGetterSetter(W, "nodes"), d.Factory.addGetterSetter(W, "node"), d.Factory.addGetterSetter(W, "boundBoxFunc"), d.Factory.addGetterSetter(W, "anchorDragBoundFunc"), d.Factory.addGetterSetter(W, "anchorStyleFunc"), d.Factory.addGetterSetter(W, "shouldOverdrawWholeArea", !1), d.Factory.addGetterSetter(W, "useSingleNodeRotation", !0), d.Factory.backCompat(W, {
    lineEnabled: "borderEnabled",
    rotateHandlerOffset: "rotateAnchorOffset",
    enabledHandlers: "enabledAnchors"
  }), hu;
}
var pu = {}, Wh;
function X1() {
  if (Wh) return pu;
  Wh = 1, Object.defineProperty(pu, "__esModule", { value: !0 }), pu.Wedge = void 0;
  const l = st(), d = Fn(), v = et(), A = at(), F = et();
  let C = class extends d.Shape {
    _sceneFunc(g) {
      g.beginPath(), g.arc(0, 0, this.radius(), 0, v.Konva.getAngle(this.angle()), this.clockwise()), g.lineTo(0, 0), g.closePath(), g.fillStrokeShape(this);
    }
    getWidth() {
      return this.radius() * 2;
    }
    getHeight() {
      return this.radius() * 2;
    }
    setWidth(g) {
      this.radius(g / 2);
    }
    setHeight(g) {
      this.radius(g / 2);
    }
  };
  return pu.Wedge = C, C.prototype.className = "Wedge", C.prototype._centroid = !0, C.prototype._attrsAffectingSize = ["radius"], (0, F._registerNode)(C), l.Factory.addGetterSetter(C, "radius", 0, (0, A.getNumberValidator)()), l.Factory.addGetterSetter(C, "angle", 0, (0, A.getNumberValidator)()), l.Factory.addGetterSetter(C, "clockwise", !1), l.Factory.backCompat(C, {
    angleDeg: "angle",
    getAngleDeg: "getAngle",
    setAngleDeg: "setAngle"
  }), pu;
}
var gu = {}, qh;
function Q1() {
  if (qh) return gu;
  qh = 1, Object.defineProperty(gu, "__esModule", { value: !0 }), gu.Blur = void 0;
  const l = st(), d = sn(), v = at();
  function A() {
    this.r = 0, this.g = 0, this.b = 0, this.a = 0, this.next = null;
  }
  const F = [
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
  function f(m, x) {
    const k = m.data, M = m.width, E = m.height;
    let S, w, P, O, j, _, h, R, D, W, J, G, B, H, X, Z, Q, ie, ee, me;
    const T = x + x + 1, z = M - 1, N = E - 1, U = x + 1, L = U * (U + 1) / 2, K = new A(), b = F[x], de = C[x];
    let ge = null, se = K, q = null, re = null;
    for (let ae = 1; ae < T; ae++)
      se = se.next = new A(), ae === U && (ge = se);
    se.next = K, P = w = 0;
    for (let ae = 0; ae < E; ae++) {
      G = B = H = X = O = j = _ = h = 0, R = U * (Z = k[w]), D = U * (Q = k[w + 1]), W = U * (ie = k[w + 2]), J = U * (ee = k[w + 3]), O += L * Z, j += L * Q, _ += L * ie, h += L * ee, se = K;
      for (let Ce = 0; Ce < U; Ce++)
        se.r = Z, se.g = Q, se.b = ie, se.a = ee, se = se.next;
      for (let Ce = 1; Ce < U; Ce++)
        S = w + ((z < Ce ? z : Ce) << 2), O += (se.r = Z = k[S]) * (me = U - Ce), j += (se.g = Q = k[S + 1]) * me, _ += (se.b = ie = k[S + 2]) * me, h += (se.a = ee = k[S + 3]) * me, G += Z, B += Q, H += ie, X += ee, se = se.next;
      q = K, re = ge;
      for (let Ce = 0; Ce < M; Ce++)
        k[w + 3] = ee = h * b >> de, ee !== 0 ? (ee = 255 / ee, k[w] = (O * b >> de) * ee, k[w + 1] = (j * b >> de) * ee, k[w + 2] = (_ * b >> de) * ee) : k[w] = k[w + 1] = k[w + 2] = 0, O -= R, j -= D, _ -= W, h -= J, R -= q.r, D -= q.g, W -= q.b, J -= q.a, S = P + ((S = Ce + x + 1) < z ? S : z) << 2, G += q.r = k[S], B += q.g = k[S + 1], H += q.b = k[S + 2], X += q.a = k[S + 3], O += G, j += B, _ += H, h += X, q = q.next, R += Z = re.r, D += Q = re.g, W += ie = re.b, J += ee = re.a, G -= Z, B -= Q, H -= ie, X -= ee, re = re.next, w += 4;
      P += M;
    }
    for (let ae = 0; ae < M; ae++) {
      B = H = X = G = j = _ = h = O = 0, w = ae << 2, R = U * (Z = k[w]), D = U * (Q = k[w + 1]), W = U * (ie = k[w + 2]), J = U * (ee = k[w + 3]), O += L * Z, j += L * Q, _ += L * ie, h += L * ee, se = K;
      for (let Ee = 0; Ee < U; Ee++)
        se.r = Z, se.g = Q, se.b = ie, se.a = ee, se = se.next;
      let Ce = M;
      for (let Ee = 1; Ee <= x; Ee++)
        w = Ce + ae << 2, O += (se.r = Z = k[w]) * (me = U - Ee), j += (se.g = Q = k[w + 1]) * me, _ += (se.b = ie = k[w + 2]) * me, h += (se.a = ee = k[w + 3]) * me, G += Z, B += Q, H += ie, X += ee, se = se.next, Ee < N && (Ce += M);
      w = ae, q = K, re = ge;
      for (let Ee = 0; Ee < E; Ee++)
        S = w << 2, k[S + 3] = ee = h * b >> de, ee > 0 ? (ee = 255 / ee, k[S] = (O * b >> de) * ee, k[S + 1] = (j * b >> de) * ee, k[S + 2] = (_ * b >> de) * ee) : k[S] = k[S + 1] = k[S + 2] = 0, O -= R, j -= D, _ -= W, h -= J, R -= q.r, D -= q.g, W -= q.b, J -= q.a, S = ae + ((S = Ee + U) < N ? S : N) * M << 2, O += G += q.r = k[S], j += B += q.g = k[S + 1], _ += H += q.b = k[S + 2], h += X += q.a = k[S + 3], q = q.next, R += Z = re.r, D += Q = re.g, W += ie = re.b, J += ee = re.a, G -= Z, B -= Q, H -= ie, X -= ee, re = re.next, w += M;
    }
  }
  const g = function(x) {
    const k = Math.round(this.blurRadius());
    k > 0 && f(x, k);
  };
  return gu.Blur = g, l.Factory.addGetterSetter(d.Node, "blurRadius", 0, (0, v.getNumberValidator)(), l.Factory.afterSetFilter), gu;
}
var mu = {}, Kh;
function b1() {
  if (Kh) return mu;
  Kh = 1, Object.defineProperty(mu, "__esModule", { value: !0 }), mu.Brighten = void 0;
  const l = st(), d = sn(), v = at(), A = function(F) {
    const C = this.brightness() * 255, f = F.data, g = f.length;
    for (let m = 0; m < g; m += 4)
      f[m] += C, f[m + 1] += C, f[m + 2] += C;
  };
  return mu.Brighten = A, l.Factory.addGetterSetter(d.Node, "brightness", 0, (0, v.getNumberValidator)(), l.Factory.afterSetFilter), mu;
}
var yu = {}, Yh;
function J1() {
  if (Yh) return yu;
  Yh = 1, Object.defineProperty(yu, "__esModule", { value: !0 }), yu.Contrast = void 0;
  const l = st(), d = sn(), v = at(), A = function(F) {
    const C = Math.pow((this.contrast() + 100) / 100, 2), f = F.data, g = f.length;
    let m = 150, x = 150, k = 150;
    for (let M = 0; M < g; M += 4)
      m = f[M], x = f[M + 1], k = f[M + 2], m /= 255, m -= 0.5, m *= C, m += 0.5, m *= 255, x /= 255, x -= 0.5, x *= C, x += 0.5, x *= 255, k /= 255, k -= 0.5, k *= C, k += 0.5, k *= 255, m = m < 0 ? 0 : m > 255 ? 255 : m, x = x < 0 ? 0 : x > 255 ? 255 : x, k = k < 0 ? 0 : k > 255 ? 255 : k, f[M] = m, f[M + 1] = x, f[M + 2] = k;
  };
  return yu.Contrast = A, l.Factory.addGetterSetter(d.Node, "contrast", 0, (0, v.getNumberValidator)(), l.Factory.afterSetFilter), yu;
}
var vu = {}, Xh;
function Z1() {
  if (Xh) return vu;
  Xh = 1, Object.defineProperty(vu, "__esModule", { value: !0 }), vu.Emboss = void 0;
  const l = st(), d = sn(), v = Qt(), A = at(), F = function(C) {
    const f = this.embossStrength() * 10, g = this.embossWhiteLevel() * 255, m = this.embossDirection(), x = this.embossBlend(), k = C.data, M = C.width, E = C.height, S = M * 4;
    let w = 0, P = 0, O = E;
    switch (m) {
      case "top-left":
        w = -1, P = -1;
        break;
      case "top":
        w = -1, P = 0;
        break;
      case "top-right":
        w = -1, P = 1;
        break;
      case "right":
        w = 0, P = 1;
        break;
      case "bottom-right":
        w = 1, P = 1;
        break;
      case "bottom":
        w = 1, P = 0;
        break;
      case "bottom-left":
        w = 1, P = -1;
        break;
      case "left":
        w = 0, P = -1;
        break;
      default:
        v.Util.error("Unknown emboss direction: " + m);
    }
    do {
      const j = (O - 1) * S;
      let _ = w;
      O + _ < 1 && (_ = 0), O + _ > E && (_ = 0);
      const h = (O - 1 + _) * M * 4;
      let R = M;
      do {
        const D = j + (R - 1) * 4;
        let W = P;
        R + W < 1 && (W = 0), R + W > M && (W = 0);
        const J = h + (R - 1 + W) * 4, G = k[D] - k[J], B = k[D + 1] - k[J + 1], H = k[D + 2] - k[J + 2];
        let X = G;
        const Z = X > 0 ? X : -X, Q = B > 0 ? B : -B, ie = H > 0 ? H : -H;
        if (Q > Z && (X = B), ie > Z && (X = H), X *= f, x) {
          const ee = k[D] + X, me = k[D + 1] + X, T = k[D + 2] + X;
          k[D] = ee > 255 ? 255 : ee < 0 ? 0 : ee, k[D + 1] = me > 255 ? 255 : me < 0 ? 0 : me, k[D + 2] = T > 255 ? 255 : T < 0 ? 0 : T;
        } else {
          let ee = g - X;
          ee < 0 ? ee = 0 : ee > 255 && (ee = 255), k[D] = k[D + 1] = k[D + 2] = ee;
        }
      } while (--R);
    } while (--O);
  };
  return vu.Emboss = F, l.Factory.addGetterSetter(d.Node, "embossStrength", 0.5, (0, A.getNumberValidator)(), l.Factory.afterSetFilter), l.Factory.addGetterSetter(d.Node, "embossWhiteLevel", 0.5, (0, A.getNumberValidator)(), l.Factory.afterSetFilter), l.Factory.addGetterSetter(d.Node, "embossDirection", "top-left", void 0, l.Factory.afterSetFilter), l.Factory.addGetterSetter(d.Node, "embossBlend", !1, void 0, l.Factory.afterSetFilter), vu;
}
var _u = {}, Qh;
function $1() {
  if (Qh) return _u;
  Qh = 1, Object.defineProperty(_u, "__esModule", { value: !0 }), _u.Enhance = void 0;
  const l = st(), d = sn(), v = at();
  function A(C, f, g, m, x) {
    const k = g - f, M = x - m;
    if (k === 0)
      return m + M / 2;
    if (M === 0)
      return m;
    let E = (C - f) / k;
    return E = M * E + m, E;
  }
  const F = function(C) {
    const f = C.data, g = f.length;
    let m = f[0], x = m, k, M = f[1], E = M, S, w = f[2], P = w, O;
    const j = this.enhance();
    if (j === 0)
      return;
    for (let G = 0; G < g; G += 4)
      k = f[G + 0], k < m ? m = k : k > x && (x = k), S = f[G + 1], S < M ? M = S : S > E && (E = S), O = f[G + 2], O < w ? w = O : O > P && (P = O);
    x === m && (x = 255, m = 0), E === M && (E = 255, M = 0), P === w && (P = 255, w = 0);
    let _, h, R, D, W, J;
    if (j > 0)
      _ = x + j * (255 - x), h = m - j * (m - 0), R = E + j * (255 - E), D = M - j * (M - 0), W = P + j * (255 - P), J = w - j * (w - 0);
    else {
      const G = (x + m) * 0.5;
      _ = x + j * (x - G), h = m + j * (m - G);
      const B = (E + M) * 0.5;
      R = E + j * (E - B), D = M + j * (M - B);
      const H = (P + w) * 0.5;
      W = P + j * (P - H), J = w + j * (w - H);
    }
    for (let G = 0; G < g; G += 4)
      f[G + 0] = A(f[G + 0], m, x, h, _), f[G + 1] = A(f[G + 1], M, E, D, R), f[G + 2] = A(f[G + 2], w, P, J, W);
  };
  return _u.Enhance = F, l.Factory.addGetterSetter(d.Node, "enhance", 0, (0, v.getNumberValidator)(), l.Factory.afterSetFilter), _u;
}
var Su = {}, bh;
function ep() {
  if (bh) return Su;
  bh = 1, Object.defineProperty(Su, "__esModule", { value: !0 }), Su.Grayscale = void 0;
  const l = function(d) {
    const v = d.data, A = v.length;
    for (let F = 0; F < A; F += 4) {
      const C = 0.34 * v[F] + 0.5 * v[F + 1] + 0.16 * v[F + 2];
      v[F] = C, v[F + 1] = C, v[F + 2] = C;
    }
  };
  return Su.Grayscale = l, Su;
}
var wu = {}, Jh;
function tp() {
  if (Jh) return wu;
  Jh = 1, Object.defineProperty(wu, "__esModule", { value: !0 }), wu.HSL = void 0;
  const l = st(), d = sn(), v = at();
  l.Factory.addGetterSetter(d.Node, "hue", 0, (0, v.getNumberValidator)(), l.Factory.afterSetFilter), l.Factory.addGetterSetter(d.Node, "saturation", 0, (0, v.getNumberValidator)(), l.Factory.afterSetFilter), l.Factory.addGetterSetter(d.Node, "luminance", 0, (0, v.getNumberValidator)(), l.Factory.afterSetFilter);
  const A = function(F) {
    const C = F.data, f = C.length, g = 1, m = Math.pow(2, this.saturation()), x = Math.abs(this.hue() + 360) % 360, k = this.luminance() * 127, M = g * m * Math.cos(x * Math.PI / 180), E = g * m * Math.sin(x * Math.PI / 180), S = 0.299 * g + 0.701 * M + 0.167 * E, w = 0.587 * g - 0.587 * M + 0.33 * E, P = 0.114 * g - 0.114 * M - 0.497 * E, O = 0.299 * g - 0.299 * M - 0.328 * E, j = 0.587 * g + 0.413 * M + 0.035 * E, _ = 0.114 * g - 0.114 * M + 0.293 * E, h = 0.299 * g - 0.3 * M + 1.25 * E, R = 0.587 * g - 0.586 * M - 1.05 * E, D = 0.114 * g + 0.886 * M - 0.2 * E;
    let W, J, G, B;
    for (let H = 0; H < f; H += 4)
      W = C[H + 0], J = C[H + 1], G = C[H + 2], B = C[H + 3], C[H + 0] = S * W + w * J + P * G + k, C[H + 1] = O * W + j * J + _ * G + k, C[H + 2] = h * W + R * J + D * G + k, C[H + 3] = B;
  };
  return wu.HSL = A, wu;
}
var xu = {}, Zh;
function np() {
  if (Zh) return xu;
  Zh = 1, Object.defineProperty(xu, "__esModule", { value: !0 }), xu.HSV = void 0;
  const l = st(), d = sn(), v = at(), A = function(F) {
    const C = F.data, f = C.length, g = Math.pow(2, this.value()), m = Math.pow(2, this.saturation()), x = Math.abs(this.hue() + 360) % 360, k = g * m * Math.cos(x * Math.PI / 180), M = g * m * Math.sin(x * Math.PI / 180), E = 0.299 * g + 0.701 * k + 0.167 * M, S = 0.587 * g - 0.587 * k + 0.33 * M, w = 0.114 * g - 0.114 * k - 0.497 * M, P = 0.299 * g - 0.299 * k - 0.328 * M, O = 0.587 * g + 0.413 * k + 0.035 * M, j = 0.114 * g - 0.114 * k + 0.293 * M, _ = 0.299 * g - 0.3 * k + 1.25 * M, h = 0.587 * g - 0.586 * k - 1.05 * M, R = 0.114 * g + 0.886 * k - 0.2 * M;
    for (let D = 0; D < f; D += 4) {
      const W = C[D + 0], J = C[D + 1], G = C[D + 2], B = C[D + 3];
      C[D + 0] = E * W + S * J + w * G, C[D + 1] = P * W + O * J + j * G, C[D + 2] = _ * W + h * J + R * G, C[D + 3] = B;
    }
  };
  return xu.HSV = A, l.Factory.addGetterSetter(d.Node, "hue", 0, (0, v.getNumberValidator)(), l.Factory.afterSetFilter), l.Factory.addGetterSetter(d.Node, "saturation", 0, (0, v.getNumberValidator)(), l.Factory.afterSetFilter), l.Factory.addGetterSetter(d.Node, "value", 0, (0, v.getNumberValidator)(), l.Factory.afterSetFilter), xu;
}
var Cu = {}, $h;
function rp() {
  if ($h) return Cu;
  $h = 1, Object.defineProperty(Cu, "__esModule", { value: !0 }), Cu.Invert = void 0;
  const l = function(d) {
    const v = d.data, A = v.length;
    for (let F = 0; F < A; F += 4)
      v[F] = 255 - v[F], v[F + 1] = 255 - v[F + 1], v[F + 2] = 255 - v[F + 2];
  };
  return Cu.Invert = l, Cu;
}
var ku = {}, e0;
function ip() {
  if (e0) return ku;
  e0 = 1, Object.defineProperty(ku, "__esModule", { value: !0 }), ku.Kaleidoscope = void 0;
  const l = st(), d = sn(), v = Qt(), A = at(), F = function(g, m, x) {
    const k = g.data, M = m.data, E = g.width, S = g.height, w = x.polarCenterX || E / 2, P = x.polarCenterY || S / 2;
    let O = Math.sqrt(w * w + P * P), j = E - w, _ = S - P;
    const h = Math.sqrt(j * j + _ * _);
    O = h > O ? h : O;
    const R = S, D = E, W = 360 / D * Math.PI / 180;
    for (let J = 0; J < D; J += 1) {
      const G = Math.sin(J * W), B = Math.cos(J * W);
      for (let H = 0; H < R; H += 1) {
        j = Math.floor(w + O * H / R * B), _ = Math.floor(P + O * H / R * G);
        let X = (_ * E + j) * 4;
        const Z = k[X + 0], Q = k[X + 1], ie = k[X + 2], ee = k[X + 3];
        X = (J + H * E) * 4, M[X + 0] = Z, M[X + 1] = Q, M[X + 2] = ie, M[X + 3] = ee;
      }
    }
  }, C = function(g, m, x) {
    const k = g.data, M = m.data, E = g.width, S = g.height, w = x.polarCenterX || E / 2, P = x.polarCenterY || S / 2;
    let O = Math.sqrt(w * w + P * P), j = E - w, _ = S - P;
    const h = Math.sqrt(j * j + _ * _);
    O = h > O ? h : O;
    const R = S, D = E, W = 0;
    let J, G;
    for (j = 0; j < E; j += 1)
      for (_ = 0; _ < S; _ += 1) {
        const B = j - w, H = _ - P, X = Math.sqrt(B * B + H * H) * R / O;
        let Z = (Math.atan2(H, B) * 180 / Math.PI + 360 + W) % 360;
        Z = Z * D / 360, J = Math.floor(Z), G = Math.floor(X);
        let Q = (G * E + J) * 4;
        const ie = k[Q + 0], ee = k[Q + 1], me = k[Q + 2], T = k[Q + 3];
        Q = (_ * E + j) * 4, M[Q + 0] = ie, M[Q + 1] = ee, M[Q + 2] = me, M[Q + 3] = T;
      }
  }, f = function(g) {
    const m = g.width, x = g.height;
    let k, M, E, S, w, P, O, j, _, h, R = Math.round(this.kaleidoscopePower());
    const D = Math.round(this.kaleidoscopeAngle()), W = Math.floor(m * (D % 360) / 360);
    if (R < 1)
      return;
    const J = v.Util.createCanvasElement();
    J.width = m, J.height = x;
    const G = J.getContext("2d").getImageData(0, 0, m, x);
    v.Util.releaseCanvas(J), F(g, G, {
      polarCenterX: m / 2,
      polarCenterY: x / 2
    });
    let B = m / Math.pow(2, R);
    for (; B <= 8; )
      B = B * 2, R -= 1;
    B = Math.ceil(B);
    let H = B, X = 0, Z = H, Q = 1;
    for (W + B > m && (X = H, Z = 0, Q = -1), M = 0; M < x; M += 1)
      for (k = X; k !== Z; k += Q)
        E = Math.round(k + W) % m, _ = (m * M + E) * 4, w = G.data[_ + 0], P = G.data[_ + 1], O = G.data[_ + 2], j = G.data[_ + 3], h = (m * M + k) * 4, G.data[h + 0] = w, G.data[h + 1] = P, G.data[h + 2] = O, G.data[h + 3] = j;
    for (M = 0; M < x; M += 1)
      for (H = Math.floor(B), S = 0; S < R; S += 1) {
        for (k = 0; k < H + 1; k += 1)
          _ = (m * M + k) * 4, w = G.data[_ + 0], P = G.data[_ + 1], O = G.data[_ + 2], j = G.data[_ + 3], h = (m * M + H * 2 - k - 1) * 4, G.data[h + 0] = w, G.data[h + 1] = P, G.data[h + 2] = O, G.data[h + 3] = j;
        H *= 2;
      }
    C(G, g, {});
  };
  return ku.Kaleidoscope = f, l.Factory.addGetterSetter(d.Node, "kaleidoscopePower", 2, (0, A.getNumberValidator)(), l.Factory.afterSetFilter), l.Factory.addGetterSetter(d.Node, "kaleidoscopeAngle", 0, (0, A.getNumberValidator)(), l.Factory.afterSetFilter), ku;
}
var Eu = {}, t0;
function op() {
  if (t0) return Eu;
  t0 = 1, Object.defineProperty(Eu, "__esModule", { value: !0 }), Eu.Mask = void 0;
  const l = st(), d = sn(), v = at();
  function A(E, S, w) {
    let P = (w * E.width + S) * 4;
    const O = [];
    return O.push(E.data[P++], E.data[P++], E.data[P++], E.data[P++]), O;
  }
  function F(E, S) {
    return Math.sqrt(Math.pow(E[0] - S[0], 2) + Math.pow(E[1] - S[1], 2) + Math.pow(E[2] - S[2], 2));
  }
  function C(E) {
    const S = [0, 0, 0];
    for (let w = 0; w < E.length; w++)
      S[0] += E[w][0], S[1] += E[w][1], S[2] += E[w][2];
    return S[0] /= E.length, S[1] /= E.length, S[2] /= E.length, S;
  }
  function f(E, S) {
    const w = A(E, 0, 0), P = A(E, E.width - 1, 0), O = A(E, 0, E.height - 1), j = A(E, E.width - 1, E.height - 1), _ = S || 10;
    if (F(w, P) < _ && F(P, j) < _ && F(j, O) < _ && F(O, w) < _) {
      const h = C([P, w, j, O]), R = [];
      for (let D = 0; D < E.width * E.height; D++) {
        const W = F(h, [
          E.data[D * 4],
          E.data[D * 4 + 1],
          E.data[D * 4 + 2]
        ]);
        R[D] = W < _ ? 0 : 255;
      }
      return R;
    }
  }
  function g(E, S) {
    for (let w = 0; w < E.width * E.height; w++)
      E.data[4 * w + 3] = S[w];
  }
  function m(E, S, w) {
    const P = [1, 1, 1, 1, 0, 1, 1, 1, 1], O = Math.round(Math.sqrt(P.length)), j = Math.floor(O / 2), _ = [];
    for (let h = 0; h < w; h++)
      for (let R = 0; R < S; R++) {
        const D = h * S + R;
        let W = 0;
        for (let J = 0; J < O; J++)
          for (let G = 0; G < O; G++) {
            const B = h + J - j, H = R + G - j;
            if (B >= 0 && B < w && H >= 0 && H < S) {
              const X = B * S + H, Z = P[J * O + G];
              W += E[X] * Z;
            }
          }
        _[D] = W === 2040 ? 255 : 0;
      }
    return _;
  }
  function x(E, S, w) {
    const P = [1, 1, 1, 1, 1, 1, 1, 1, 1], O = Math.round(Math.sqrt(P.length)), j = Math.floor(O / 2), _ = [];
    for (let h = 0; h < w; h++)
      for (let R = 0; R < S; R++) {
        const D = h * S + R;
        let W = 0;
        for (let J = 0; J < O; J++)
          for (let G = 0; G < O; G++) {
            const B = h + J - j, H = R + G - j;
            if (B >= 0 && B < w && H >= 0 && H < S) {
              const X = B * S + H, Z = P[J * O + G];
              W += E[X] * Z;
            }
          }
        _[D] = W >= 1020 ? 255 : 0;
      }
    return _;
  }
  function k(E, S, w) {
    const P = [0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111], O = Math.round(Math.sqrt(P.length)), j = Math.floor(O / 2), _ = [];
    for (let h = 0; h < w; h++)
      for (let R = 0; R < S; R++) {
        const D = h * S + R;
        let W = 0;
        for (let J = 0; J < O; J++)
          for (let G = 0; G < O; G++) {
            const B = h + J - j, H = R + G - j;
            if (B >= 0 && B < w && H >= 0 && H < S) {
              const X = B * S + H, Z = P[J * O + G];
              W += E[X] * Z;
            }
          }
        _[D] = W;
      }
    return _;
  }
  const M = function(E) {
    const S = this.threshold();
    let w = f(E, S);
    return w && (w = m(w, E.width, E.height), w = x(w, E.width, E.height), w = k(w, E.width, E.height), g(E, w)), E;
  };
  return Eu.Mask = M, l.Factory.addGetterSetter(d.Node, "threshold", 0, (0, v.getNumberValidator)(), l.Factory.afterSetFilter), Eu;
}
var Pu = {}, n0;
function sp() {
  if (n0) return Pu;
  n0 = 1, Object.defineProperty(Pu, "__esModule", { value: !0 }), Pu.Noise = void 0;
  const l = st(), d = sn(), v = at(), A = function(F) {
    const C = this.noise() * 255, f = F.data, g = f.length, m = C / 2;
    for (let x = 0; x < g; x += 4)
      f[x + 0] += m - 2 * m * Math.random(), f[x + 1] += m - 2 * m * Math.random(), f[x + 2] += m - 2 * m * Math.random();
  };
  return Pu.Noise = A, l.Factory.addGetterSetter(d.Node, "noise", 0.2, (0, v.getNumberValidator)(), l.Factory.afterSetFilter), Pu;
}
var Ru = {}, r0;
function lp() {
  if (r0) return Ru;
  r0 = 1, Object.defineProperty(Ru, "__esModule", { value: !0 }), Ru.Pixelate = void 0;
  const l = st(), d = Qt(), v = sn(), A = at(), F = function(C) {
    let f = Math.ceil(this.pixelSize()), g = C.width, m = C.height, x = Math.ceil(g / f), k = Math.ceil(m / f), M = C.data;
    if (f <= 0) {
      d.Util.error("pixelSize value can not be <= 0");
      return;
    }
    for (let E = 0; E < x; E += 1)
      for (let S = 0; S < k; S += 1) {
        let w = 0, P = 0, O = 0, j = 0;
        const _ = E * f, h = _ + f, R = S * f, D = R + f;
        let W = 0;
        for (let J = _; J < h; J += 1)
          if (!(J >= g))
            for (let G = R; G < D; G += 1) {
              if (G >= m)
                continue;
              const B = (g * G + J) * 4;
              w += M[B + 0], P += M[B + 1], O += M[B + 2], j += M[B + 3], W += 1;
            }
        w = w / W, P = P / W, O = O / W, j = j / W;
        for (let J = _; J < h; J += 1)
          if (!(J >= g))
            for (let G = R; G < D; G += 1) {
              if (G >= m)
                continue;
              const B = (g * G + J) * 4;
              M[B + 0] = w, M[B + 1] = P, M[B + 2] = O, M[B + 3] = j;
            }
      }
  };
  return Ru.Pixelate = F, l.Factory.addGetterSetter(v.Node, "pixelSize", 8, (0, A.getNumberValidator)(), l.Factory.afterSetFilter), Ru;
}
var Tu = {}, i0;
function ap() {
  if (i0) return Tu;
  i0 = 1, Object.defineProperty(Tu, "__esModule", { value: !0 }), Tu.Posterize = void 0;
  const l = st(), d = sn(), v = at(), A = function(F) {
    const C = Math.round(this.levels() * 254) + 1, f = F.data, g = f.length, m = 255 / C;
    for (let x = 0; x < g; x += 1)
      f[x] = Math.floor(f[x] / m) * m;
  };
  return Tu.Posterize = A, l.Factory.addGetterSetter(d.Node, "levels", 0.5, (0, v.getNumberValidator)(), l.Factory.afterSetFilter), Tu;
}
var Nu = {}, o0;
function up() {
  if (o0) return Nu;
  o0 = 1, Object.defineProperty(Nu, "__esModule", { value: !0 }), Nu.RGB = void 0;
  const l = st(), d = sn(), v = at(), A = function(F) {
    const C = F.data, f = C.length, g = this.red(), m = this.green(), x = this.blue();
    for (let k = 0; k < f; k += 4) {
      const M = (0.34 * C[k] + 0.5 * C[k + 1] + 0.16 * C[k + 2]) / 255;
      C[k] = M * g, C[k + 1] = M * m, C[k + 2] = M * x, C[k + 3] = C[k + 3];
    }
  };
  return Nu.RGB = A, l.Factory.addGetterSetter(d.Node, "red", 0, function(F) {
    return this._filterUpToDate = !1, F > 255 ? 255 : F < 0 ? 0 : Math.round(F);
  }), l.Factory.addGetterSetter(d.Node, "green", 0, function(F) {
    return this._filterUpToDate = !1, F > 255 ? 255 : F < 0 ? 0 : Math.round(F);
  }), l.Factory.addGetterSetter(d.Node, "blue", 0, v.RGBComponent, l.Factory.afterSetFilter), Nu;
}
var Mu = {}, s0;
function cp() {
  if (s0) return Mu;
  s0 = 1, Object.defineProperty(Mu, "__esModule", { value: !0 }), Mu.RGBA = void 0;
  const l = st(), d = sn(), v = at(), A = function(F) {
    const C = F.data, f = C.length, g = this.red(), m = this.green(), x = this.blue(), k = this.alpha();
    for (let M = 0; M < f; M += 4) {
      const E = 1 - k;
      C[M] = g * k + C[M] * E, C[M + 1] = m * k + C[M + 1] * E, C[M + 2] = x * k + C[M + 2] * E;
    }
  };
  return Mu.RGBA = A, l.Factory.addGetterSetter(d.Node, "red", 0, function(F) {
    return this._filterUpToDate = !1, F > 255 ? 255 : F < 0 ? 0 : Math.round(F);
  }), l.Factory.addGetterSetter(d.Node, "green", 0, function(F) {
    return this._filterUpToDate = !1, F > 255 ? 255 : F < 0 ? 0 : Math.round(F);
  }), l.Factory.addGetterSetter(d.Node, "blue", 0, v.RGBComponent, l.Factory.afterSetFilter), l.Factory.addGetterSetter(d.Node, "alpha", 1, function(F) {
    return this._filterUpToDate = !1, F > 1 ? 1 : F < 0 ? 0 : F;
  }), Mu;
}
var Fu = {}, l0;
function dp() {
  if (l0) return Fu;
  l0 = 1, Object.defineProperty(Fu, "__esModule", { value: !0 }), Fu.Sepia = void 0;
  const l = function(d) {
    const v = d.data, A = v.length;
    for (let F = 0; F < A; F += 4) {
      const C = v[F + 0], f = v[F + 1], g = v[F + 2];
      v[F + 0] = Math.min(255, C * 0.393 + f * 0.769 + g * 0.189), v[F + 1] = Math.min(255, C * 0.349 + f * 0.686 + g * 0.168), v[F + 2] = Math.min(255, C * 0.272 + f * 0.534 + g * 0.131);
    }
  };
  return Fu.Sepia = l, Fu;
}
var Lu = {}, a0;
function fp() {
  if (a0) return Lu;
  a0 = 1, Object.defineProperty(Lu, "__esModule", { value: !0 }), Lu.Solarize = void 0;
  const l = function(d) {
    const v = d.data, A = d.width, F = d.height, C = A * 4;
    let f = F;
    do {
      const g = (f - 1) * C;
      let m = A;
      do {
        const x = g + (m - 1) * 4;
        let k = v[x], M = v[x + 1], E = v[x + 2];
        k > 127 && (k = 255 - k), M > 127 && (M = 255 - M), E > 127 && (E = 255 - E), v[x] = k, v[x + 1] = M, v[x + 2] = E;
      } while (--m);
    } while (--f);
  };
  return Lu.Solarize = l, Lu;
}
var Au = {}, u0;
function hp() {
  if (u0) return Au;
  u0 = 1, Object.defineProperty(Au, "__esModule", { value: !0 }), Au.Threshold = void 0;
  const l = st(), d = sn(), v = at(), A = function(F) {
    const C = this.threshold() * 255, f = F.data, g = f.length;
    for (let m = 0; m < g; m += 1)
      f[m] = f[m] < C ? 0 : 255;
  };
  return Au.Threshold = A, l.Factory.addGetterSetter(d.Node, "threshold", 0.5, (0, v.getNumberValidator)(), l.Factory.afterSetFilter), Au;
}
var c0;
function pp() {
  if (c0) return Ya;
  c0 = 1, Object.defineProperty(Ya, "__esModule", { value: !0 }), Ya.Konva = void 0;
  const l = df(), d = I1(), v = z1(), A = G1(), F = U1(), C = B1(), f = V1(), g = B0(), m = _f(), x = V0(), k = H1(), M = j1(), E = W1(), S = q1(), w = H0(), P = K1(), O = Y1(), j = X1(), _ = Q1(), h = b1(), R = J1(), D = Z1(), W = $1(), J = ep(), G = tp(), B = np(), H = rp(), X = ip(), Z = op(), Q = sp(), ie = lp(), ee = ap(), me = up(), T = cp(), z = dp(), N = fp(), U = hp();
  return Ya.Konva = l.Konva.Util._assign(l.Konva, {
    Arc: d.Arc,
    Arrow: v.Arrow,
    Circle: A.Circle,
    Ellipse: F.Ellipse,
    Image: C.Image,
    Label: f.Label,
    Tag: f.Tag,
    Line: g.Line,
    Path: m.Path,
    Rect: x.Rect,
    RegularPolygon: k.RegularPolygon,
    Ring: M.Ring,
    Sprite: E.Sprite,
    Star: S.Star,
    Text: w.Text,
    TextPath: P.TextPath,
    Transformer: O.Transformer,
    Wedge: j.Wedge,
    Filters: {
      Blur: _.Blur,
      Brighten: h.Brighten,
      Contrast: R.Contrast,
      Emboss: D.Emboss,
      Enhance: W.Enhance,
      Grayscale: J.Grayscale,
      HSL: G.HSL,
      HSV: B.HSV,
      Invert: H.Invert,
      Kaleidoscope: X.Kaleidoscope,
      Mask: Z.Mask,
      Noise: Q.Noise,
      Pixelate: ie.Pixelate,
      Posterize: ee.Posterize,
      RGB: me.RGB,
      RGBA: T.RGBA,
      Sepia: z.Sepia,
      Solarize: N.Solarize,
      Threshold: U.Threshold
    }
  }), Ya;
}
var gp = nd.exports, d0;
function mp() {
  if (d0) return nd.exports;
  d0 = 1, Object.defineProperty(gp, "__esModule", { value: !0 });
  const l = pp();
  return nd.exports = l.Konva, nd.exports;
}
mp();
var bc = { exports: {} }, f0;
function yp() {
  return f0 || (f0 = 1, (function(l, d) {
    Object.defineProperty(d, "__esModule", { value: !0 }), d.Konva = void 0;
    var v = df();
    Object.defineProperty(d, "Konva", { enumerable: !0, get: function() {
      return v.Konva;
    } });
    const A = df();
    l.exports = A.Konva;
  })(bc, bc.exports)), bc.exports;
}
var vp = yp();
const Uu = /* @__PURE__ */ id(vp);
var rf = { exports: {} };
/**
 * @license React
 * react-reconciler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var of, h0;
function _p() {
  return h0 || (h0 = 1, of = function(d) {
    var v = {}, A = Bu(), F = gf(), C = Object.assign;
    function f(n) {
      for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, o = 1; o < arguments.length; o++) r += "&args[]=" + encodeURIComponent(arguments[o]);
      return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    var g = A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, m = Symbol.for("react.element"), x = Symbol.for("react.portal"), k = Symbol.for("react.fragment"), M = Symbol.for("react.strict_mode"), E = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), w = Symbol.for("react.context"), P = Symbol.for("react.forward_ref"), O = Symbol.for("react.suspense"), j = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), R = Symbol.for("react.offscreen"), D = Symbol.iterator;
    function W(n) {
      return n === null || typeof n != "object" ? null : (n = D && n[D] || n["@@iterator"], typeof n == "function" ? n : null);
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
        case M:
          return "StrictMode";
        case O:
          return "Suspense";
        case j:
          return "SuspenseList";
      }
      if (typeof n == "object") switch (n.$$typeof) {
        case w:
          return (n.displayName || "Context") + ".Consumer";
        case S:
          return (n._context.displayName || "Context") + ".Provider";
        case P:
          var r = n.render;
          return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
        case _:
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
    function G(n) {
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
          return r === M ? "StrictMode" : "Mode";
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
    function B(n) {
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
    function H(n) {
      if (B(n) !== n) throw Error(f(188));
    }
    function X(n) {
      var r = n.alternate;
      if (!r) {
        if (r = B(n), r === null) throw Error(f(188));
        return r !== n ? null : n;
      }
      for (var o = n, a = r; ; ) {
        var c = o.return;
        if (c === null) break;
        var y = c.alternate;
        if (y === null) {
          if (a = c.return, a !== null) {
            o = a;
            continue;
          }
          break;
        }
        if (c.child === y.child) {
          for (y = c.child; y; ) {
            if (y === o) return H(c), n;
            if (y === a) return H(c), r;
            y = y.sibling;
          }
          throw Error(f(188));
        }
        if (o.return !== a.return) o = c, a = y;
        else {
          for (var V = !1, ne = c.child; ne; ) {
            if (ne === o) {
              V = !0, o = c, a = y;
              break;
            }
            if (ne === a) {
              V = !0, a = c, o = y;
              break;
            }
            ne = ne.sibling;
          }
          if (!V) {
            for (ne = y.child; ne; ) {
              if (ne === o) {
                V = !0, o = y, a = c;
                break;
              }
              if (ne === a) {
                V = !0, a = y, o = c;
                break;
              }
              ne = ne.sibling;
            }
            if (!V) throw Error(f(189));
          }
        }
        if (o.alternate !== a) throw Error(f(190));
      }
      if (o.tag !== 3) throw Error(f(188));
      return o.stateNode.current === o ? n : r;
    }
    function Z(n) {
      return n = X(n), n !== null ? Q(n) : null;
    }
    function Q(n) {
      if (n.tag === 5 || n.tag === 6) return n;
      for (n = n.child; n !== null; ) {
        var r = Q(n);
        if (r !== null) return r;
        n = n.sibling;
      }
      return null;
    }
    function ie(n) {
      if (n.tag === 5 || n.tag === 6) return n;
      for (n = n.child; n !== null; ) {
        if (n.tag !== 4) {
          var r = ie(n);
          if (r !== null) return r;
        }
        n = n.sibling;
      }
      return null;
    }
    var ee = Array.isArray, me = d.getPublicInstance, T = d.getRootHostContext, z = d.getChildHostContext, N = d.prepareForCommit, U = d.resetAfterCommit, L = d.createInstance, K = d.appendInitialChild, b = d.finalizeInitialChildren, de = d.prepareUpdate, ge = d.shouldSetTextContent, se = d.createTextInstance, q = d.scheduleTimeout, re = d.cancelTimeout, ae = d.noTimeout, Ce = d.isPrimaryRenderer, Ee = d.supportsMutation, De = d.supportsPersistence, Ue = d.supportsHydration, Qe = d.getInstanceFromNode, We = d.preparePortalMount, At = d.getCurrentEventPriority, Ze = d.detachDeletedInstance, Je = d.supportsMicrotasks, Zn = d.scheduleMicrotask, St = d.supportsTestSelectors, Wn = d.findFiberRoot, dt = d.getBoundingRect, wn = d.getTextContent, bt = d.isHiddenSubtree, Ln = d.matchAccessibilityRole, jt = d.setFocusIfFocusable, Ot = d.setupIntersectionObserver, Jt = d.appendChild, yt = d.appendChildToContainer, It = d.commitTextUpdate, zt = d.commitMount, Xr = d.commitUpdate, Ui = d.insertBefore, Ar = d.insertInContainerBefore, _o = d.removeChild, Bi = d.removeChildFromContainer, So = d.resetTextContent, wo = d.hideInstance, xo = d.hideTextInstance, Co = d.unhideInstance, pi = d.unhideTextInstance, Qr = d.clearContainer, bs = d.cloneInstance, ye = d.createContainerChildSet, Se = d.appendChildToContainerChildSet, Te = d.finalizeContainerChildren, Pe = d.replaceContainerChildren, Xe = d.cloneHiddenInstance, tt = d.cloneHiddenTextInstance, ht = d.canHydrateInstance, An = d.canHydrateTextInstance, hr = d.canHydrateSuspenseInstance, ln = d.isSuspenseInstancePending, Wt = d.isSuspenseInstanceFallback, br = d.getSuspenseInstanceFallbackErrorDetails, Jr = d.registerSuspenseInstanceRetry, gi = d.getNextHydratableSibling, Jl = d.getFirstHydratableChild, Zl = d.getFirstHydratableChildWithinContainer, $l = d.getFirstHydratableChildWithinSuspenseInstance, Vi = d.hydrateInstance, Vu = d.hydrateTextInstance, Hu = d.hydrateSuspenseInstance, ad = d.getNextHydratableInstanceAfterSuspenseInstance, ju = d.commitHydratedContainer, Wu = d.commitHydratedSuspenseInstance, qu = d.clearSuspenseBoundary, Ku = d.clearSuspenseBoundaryFromContainer, ud = d.shouldDeleteUnhydratedTailInstances, cd = d.didNotMatchHydratedContainerTextInstance, Bt = d.didNotMatchHydratedTextInstance, ea;
    function Hi(n) {
      if (ea === void 0) try {
        throw Error();
      } catch (o) {
        var r = o.stack.trim().match(/\n( *(at )?)/);
        ea = r && r[1] || "";
      }
      return `
` + ea + n;
    }
    var Js = !1;
    function ko(n, r) {
      if (!n || Js) return "";
      Js = !0;
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
          } catch (xe) {
            var a = xe;
          }
          Reflect.construct(n, [], r);
        } else {
          try {
            r.call();
          } catch (xe) {
            a = xe;
          }
          n.call(r.prototype);
        }
        else {
          try {
            throw Error();
          } catch (xe) {
            a = xe;
          }
          n();
        }
      } catch (xe) {
        if (xe && a && typeof xe.stack == "string") {
          for (var c = xe.stack.split(`
`), y = a.stack.split(`
`), V = c.length - 1, ne = y.length - 1; 1 <= V && 0 <= ne && c[V] !== y[ne]; ) ne--;
          for (; 1 <= V && 0 <= ne; V--, ne--) if (c[V] !== y[ne]) {
            if (V !== 1 || ne !== 1)
              do
                if (V--, ne--, 0 > ne || c[V] !== y[ne]) {
                  var he = `
` + c[V].replace(" at new ", " at ");
                  return n.displayName && he.includes("<anonymous>") && (he = he.replace("<anonymous>", n.displayName)), he;
                }
              while (1 <= V && 0 <= ne);
            break;
          }
        }
      } finally {
        Js = !1, Error.prepareStackTrace = o;
      }
      return (n = n ? n.displayName || n.name : "") ? Hi(n) : "";
    }
    var dd = Object.prototype.hasOwnProperty, Zs = [], Zr = -1;
    function pn(n) {
      return { current: n };
    }
    function Et(n) {
      0 > Zr || (n.current = Zs[Zr], Zs[Zr] = null, Zr--);
    }
    function nt(n, r) {
      Zr++, Zs[Zr] = n.current, n.current = r;
    }
    var mi = {}, xn = pn(mi), qn = pn(!1), Or = mi;
    function $r(n, r) {
      var o = n.type.contextTypes;
      if (!o) return mi;
      var a = n.stateNode;
      if (a && a.__reactInternalMemoizedUnmaskedChildContext === r) return a.__reactInternalMemoizedMaskedChildContext;
      var c = {}, y;
      for (y in o) c[y] = r[y];
      return a && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
    }
    function an(n) {
      return n = n.childContextTypes, n != null;
    }
    function ji() {
      Et(qn), Et(xn);
    }
    function Yu(n, r, o) {
      if (xn.current !== mi) throw Error(f(168));
      nt(xn, r), nt(qn, o);
    }
    function Xu(n, r, o) {
      var a = n.stateNode;
      if (r = r.childContextTypes, typeof a.getChildContext != "function") return o;
      a = a.getChildContext();
      for (var c in a) if (!(c in r)) throw Error(f(108, G(n) || "Unknown", c));
      return C({}, o, a);
    }
    function Eo(n) {
      return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || mi, Or = xn.current, nt(xn, n), nt(qn, qn.current), !0;
    }
    function ta(n, r, o) {
      var a = n.stateNode;
      if (!a) throw Error(f(169));
      o ? (n = Xu(n, r, Or), a.__reactInternalMemoizedMergedChildContext = n, Et(qn), Et(xn), nt(xn, n)) : Et(qn), nt(qn, o);
    }
    var $n = Math.clz32 ? Math.clz32 : na, ms = Math.log, fd = Math.LN2;
    function na(n) {
      return n >>>= 0, n === 0 ? 32 : 31 - (ms(n) / fd | 0) | 0;
    }
    var ut = 64, ys = 4194304;
    function Po(n) {
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
    function Ro(n, r) {
      var o = n.pendingLanes;
      if (o === 0) return 0;
      var a = 0, c = n.suspendedLanes, y = n.pingedLanes, V = o & 268435455;
      if (V !== 0) {
        var ne = V & ~c;
        ne !== 0 ? a = Po(ne) : (y &= V, y !== 0 && (a = Po(y)));
      } else V = o & ~c, V !== 0 ? a = Po(V) : y !== 0 && (a = Po(y));
      if (a === 0) return 0;
      if (r !== 0 && r !== a && (r & c) === 0 && (c = a & -a, y = r & -r, c >= y || c === 16 && (y & 4194240) !== 0)) return r;
      if ((a & 4) !== 0 && (a |= o & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= a; 0 < r; ) o = 31 - $n(r), c = 1 << o, a |= n[o], r &= ~c;
      return a;
    }
    function Qu(n, r) {
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
    function bu(n, r) {
      for (var o = n.suspendedLanes, a = n.pingedLanes, c = n.expirationTimes, y = n.pendingLanes; 0 < y; ) {
        var V = 31 - $n(y), ne = 1 << V, he = c[V];
        he === -1 ? ((ne & o) === 0 || (ne & a) !== 0) && (c[V] = Qu(ne, r)) : he <= r && (n.expiredLanes |= ne), y &= ~ne;
      }
    }
    function $s(n) {
      return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
    }
    function el() {
      var n = ut;
      return ut <<= 1, (ut & 4194240) === 0 && (ut = 64), n;
    }
    function To(n) {
      for (var r = [], o = 0; 31 > o; o++) r.push(n);
      return r;
    }
    function pr(n, r, o) {
      n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - $n(r), n[r] = o;
    }
    function yi(n, r) {
      var o = n.pendingLanes & ~r;
      n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
      var a = n.eventTimes;
      for (n = n.expirationTimes; 0 < o; ) {
        var c = 31 - $n(o), y = 1 << c;
        r[c] = 0, a[c] = -1, n[c] = -1, o &= ~y;
      }
    }
    function Ir(n, r) {
      var o = n.entangledLanes |= r;
      for (n = n.entanglements; o; ) {
        var a = 31 - $n(o), c = 1 << a;
        c & r | n[a] & r && (n[a] |= r), o &= ~c;
      }
    }
    var rt = 0;
    function No(n) {
      return n &= -n, 1 < n ? 4 < n ? (n & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
    }
    var Dr = F.unstable_scheduleCallback, Ju = F.unstable_cancelCallback, Zu = F.unstable_shouldYield, vs = F.unstable_requestPaint, un = F.unstable_now, tl = F.unstable_ImmediatePriority, nl = F.unstable_UserBlockingPriority, rl = F.unstable_NormalPriority, hd = F.unstable_IdlePriority, vi = null, Kn = null;
    function Mo(n) {
      if (Kn && typeof Kn.onCommitFiberRoot == "function") try {
        Kn.onCommitFiberRoot(vi, n, void 0, (n.current.flags & 128) === 128);
      } catch {
      }
    }
    function il(n, r) {
      return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
    }
    var Er = typeof Object.is == "function" ? Object.is : il, ei = null, Fo = !1, Lo = !1;
    function ol(n) {
      ei === null ? ei = [n] : ei.push(n);
    }
    function $u(n) {
      Fo = !0, ol(n);
    }
    function gn() {
      if (!Lo && ei !== null) {
        Lo = !0;
        var n = 0, r = rt;
        try {
          var o = ei;
          for (rt = 1; n < o.length; n++) {
            var a = o[n];
            do
              a = a(!0);
            while (a !== null);
          }
          ei = null, Fo = !1;
        } catch (c) {
          throw ei !== null && (ei = ei.slice(n + 1)), Dr(tl, gn), c;
        } finally {
          rt = r, Lo = !1;
        }
      }
      return null;
    }
    var _i = [], ti = 0, _s = null, Wi = 0, On = [], er = 0, Zt = null, Yn = 1, Pr = "";
    function Rr(n, r) {
      _i[ti++] = Wi, _i[ti++] = _s, _s = n, Wi = r;
    }
    function ec(n, r, o) {
      On[er++] = Yn, On[er++] = Pr, On[er++] = Zt, Zt = n;
      var a = Yn;
      n = Pr;
      var c = 32 - $n(a) - 1;
      a &= ~(1 << c), o += 1;
      var y = 32 - $n(r) + c;
      if (30 < y) {
        var V = c - c % 5;
        y = (a & (1 << V) - 1).toString(32), a >>= V, c -= V, Yn = 1 << 32 - $n(r) + c | o << c | a, Pr = y + n;
      } else Yn = 1 << y | o << c | a, Pr = n;
    }
    function Ss(n) {
      n.return !== null && (Rr(n, 1), ec(n, 1, 0));
    }
    function ws(n) {
      for (; n === _s; ) _s = _i[--ti], _i[ti] = null, Wi = _i[--ti], _i[ti] = null;
      for (; n === Zt; ) Zt = On[--er], On[er] = null, Pr = On[--er], On[er] = null, Yn = On[--er], On[er] = null;
    }
    var mn = null, In = null, Pt = !1, xs = !1, Tr = null;
    function tc(n, r) {
      var o = cr(5, null, null, 0);
      o.elementType = "DELETED", o.stateNode = r, o.return = n, r = n.deletions, r === null ? (n.deletions = [o], n.flags |= 16) : r.push(o);
    }
    function sl(n, r) {
      switch (n.tag) {
        case 5:
          return r = ht(r, n.type, n.pendingProps), r !== null ? (n.stateNode = r, mn = n, In = Jl(r), !0) : !1;
        case 6:
          return r = An(r, n.pendingProps), r !== null ? (n.stateNode = r, mn = n, In = null, !0) : !1;
        case 13:
          if (r = hr(r), r !== null) {
            var o = Zt !== null ? { id: Yn, overflow: Pr } : null;
            return n.memoizedState = { dehydrated: r, treeContext: o, retryLane: 1073741824 }, o = cr(18, null, null, 0), o.stateNode = r, o.return = n, n.child = o, mn = n, In = null, !0;
          }
          return !1;
        default:
          return !1;
      }
    }
    function ra(n) {
      return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
    }
    function ia(n) {
      if (Pt) {
        var r = In;
        if (r) {
          var o = r;
          if (!sl(n, r)) {
            if (ra(n)) throw Error(f(418));
            r = gi(o);
            var a = mn;
            r && sl(n, r) ? tc(a, o) : (n.flags = n.flags & -4097 | 2, Pt = !1, mn = n);
          }
        } else {
          if (ra(n)) throw Error(f(418));
          n.flags = n.flags & -4097 | 2, Pt = !1, mn = n;
        }
      }
    }
    function nc(n) {
      for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
      mn = n;
    }
    function ll(n) {
      if (!Ue || n !== mn) return !1;
      if (!Pt) return nc(n), Pt = !0, !1;
      if (n.tag !== 3 && (n.tag !== 5 || ud(n.type) && !ge(n.type, n.memoizedProps))) {
        var r = In;
        if (r) {
          if (ra(n)) throw rc(), Error(f(418));
          for (; r; ) tc(n, r), r = gi(r);
        }
      }
      if (nc(n), n.tag === 13) {
        if (!Ue) throw Error(f(316));
        if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(f(317));
        In = ad(n);
      } else In = mn ? gi(n.stateNode) : null;
      return !0;
    }
    function rc() {
      for (var n = In; n; ) n = gi(n);
    }
    function qi() {
      Ue && (In = mn = null, xs = Pt = !1);
    }
    function oa(n) {
      Tr === null ? Tr = [n] : Tr.push(n);
    }
    var pd = g.ReactCurrentBatchConfig;
    function al(n, r) {
      if (Er(n, r)) return !0;
      if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
      var o = Object.keys(n), a = Object.keys(r);
      if (o.length !== a.length) return !1;
      for (a = 0; a < o.length; a++) {
        var c = o[a];
        if (!dd.call(r, c) || !Er(n[c], r[c])) return !1;
      }
      return !0;
    }
    function gd(n) {
      switch (n.tag) {
        case 5:
          return Hi(n.type);
        case 16:
          return Hi("Lazy");
        case 13:
          return Hi("Suspense");
        case 19:
          return Hi("SuspenseList");
        case 0:
        case 2:
        case 15:
          return n = ko(n.type, !1), n;
        case 11:
          return n = ko(n.type.render, !1), n;
        case 1:
          return n = ko(n.type, !0), n;
        default:
          return "";
      }
    }
    function Ki(n, r, o) {
      if (n = o.ref, n !== null && typeof n != "function" && typeof n != "object") {
        if (o._owner) {
          if (o = o._owner, o) {
            if (o.tag !== 1) throw Error(f(309));
            var a = o.stateNode;
          }
          if (!a) throw Error(f(147, n));
          var c = a, y = "" + n;
          return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === y ? r.ref : (r = function(V) {
            var ne = c.refs;
            V === null ? delete ne[y] : ne[y] = V;
          }, r._stringRef = y, r);
        }
        if (typeof n != "string") throw Error(f(284));
        if (!o._owner) throw Error(f(290, n));
      }
      return n;
    }
    function ul(n, r) {
      throw n = Object.prototype.toString.call(r), Error(f(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
    }
    function ic(n) {
      var r = n._init;
      return r(n._payload);
    }
    function oc(n) {
      function r(ce, oe) {
        if (n) {
          var pe = ce.deletions;
          pe === null ? (ce.deletions = [oe], ce.flags |= 16) : pe.push(oe);
        }
      }
      function o(ce, oe) {
        if (!n) return null;
        for (; oe !== null; ) r(ce, oe), oe = oe.sibling;
        return null;
      }
      function a(ce, oe) {
        for (ce = /* @__PURE__ */ new Map(); oe !== null; ) oe.key !== null ? ce.set(oe.key, oe) : ce.set(oe.index, oe), oe = oe.sibling;
        return ce;
      }
      function c(ce, oe) {
        return ce = zi(ce, oe), ce.index = 0, ce.sibling = null, ce;
      }
      function y(ce, oe, pe) {
        return ce.index = pe, n ? (pe = ce.alternate, pe !== null ? (pe = pe.index, pe < oe ? (ce.flags |= 2, oe) : pe) : (ce.flags |= 2, oe)) : (ce.flags |= 1048576, oe);
      }
      function V(ce) {
        return n && ce.alternate === null && (ce.flags |= 2), ce;
      }
      function ne(ce, oe, pe, Me) {
        return oe === null || oe.tag !== 6 ? (oe = rs(pe, ce.mode, Me), oe.return = ce, oe) : (oe = c(oe, pe), oe.return = ce, oe);
      }
      function he(ce, oe, pe, Me) {
        var Ve = pe.type;
        return Ve === k ? Ae(ce, oe, pe.props.children, Me, pe.key) : oe !== null && (oe.elementType === Ve || typeof Ve == "object" && Ve !== null && Ve.$$typeof === h && ic(Ve) === oe.type) ? (Me = c(oe, pe.props), Me.ref = Ki(ce, oe, pe), Me.return = ce, Me) : (Me = Vl(pe.type, pe.key, pe.props, null, ce.mode, Me), Me.ref = Ki(ce, oe, pe), Me.return = ce, Me);
      }
      function xe(ce, oe, pe, Me) {
        return oe === null || oe.tag !== 4 || oe.stateNode.containerInfo !== pe.containerInfo || oe.stateNode.implementation !== pe.implementation ? (oe = Hl(pe, ce.mode, Me), oe.return = ce, oe) : (oe = c(oe, pe.children || []), oe.return = ce, oe);
      }
      function Ae(ce, oe, pe, Me, Ve) {
        return oe === null || oe.tag !== 7 ? (oe = _n(pe, ce.mode, Me, Ve), oe.return = ce, oe) : (oe = c(oe, pe), oe.return = ce, oe);
      }
      function Ke(ce, oe, pe) {
        if (typeof oe == "string" && oe !== "" || typeof oe == "number") return oe = rs("" + oe, ce.mode, pe), oe.return = ce, oe;
        if (typeof oe == "object" && oe !== null) {
          switch (oe.$$typeof) {
            case m:
              return pe = Vl(oe.type, oe.key, oe.props, null, ce.mode, pe), pe.ref = Ki(ce, null, oe), pe.return = ce, pe;
            case x:
              return oe = Hl(oe, ce.mode, pe), oe.return = ce, oe;
            case h:
              var Me = oe._init;
              return Ke(ce, Me(oe._payload), pe);
          }
          if (ee(oe) || W(oe)) return oe = _n(oe, ce.mode, pe, null), oe.return = ce, oe;
          ul(ce, oe);
        }
        return null;
      }
      function Ne(ce, oe, pe, Me) {
        var Ve = oe !== null ? oe.key : null;
        if (typeof pe == "string" && pe !== "" || typeof pe == "number") return Ve !== null ? null : ne(ce, oe, "" + pe, Me);
        if (typeof pe == "object" && pe !== null) {
          switch (pe.$$typeof) {
            case m:
              return pe.key === Ve ? he(ce, oe, pe, Me) : null;
            case x:
              return pe.key === Ve ? xe(ce, oe, pe, Me) : null;
            case h:
              return Ve = pe._init, Ne(
                ce,
                oe,
                Ve(pe._payload),
                Me
              );
          }
          if (ee(pe) || W(pe)) return Ve !== null ? null : Ae(ce, oe, pe, Me, null);
          ul(ce, pe);
        }
        return null;
      }
      function kt(ce, oe, pe, Me, Ve) {
        if (typeof Me == "string" && Me !== "" || typeof Me == "number") return ce = ce.get(pe) || null, ne(oe, ce, "" + Me, Ve);
        if (typeof Me == "object" && Me !== null) {
          switch (Me.$$typeof) {
            case m:
              return ce = ce.get(Me.key === null ? pe : Me.key) || null, he(oe, ce, Me, Ve);
            case x:
              return ce = ce.get(Me.key === null ? pe : Me.key) || null, xe(oe, ce, Me, Ve);
            case h:
              var $e = Me._init;
              return kt(ce, oe, pe, $e(Me._payload), Ve);
          }
          if (ee(Me) || W(Me)) return ce = ce.get(pe) || null, Ae(oe, ce, Me, Ve, null);
          ul(oe, Me);
        }
        return null;
      }
      function gt(ce, oe, pe, Me) {
        for (var Ve = null, $e = null, Ye = oe, lt = oe = 0, rn = null; Ye !== null && lt < pe.length; lt++) {
          Ye.index > lt ? (rn = Ye, Ye = null) : rn = Ye.sibling;
          var ot = Ne(ce, Ye, pe[lt], Me);
          if (ot === null) {
            Ye === null && (Ye = rn);
            break;
          }
          n && Ye && ot.alternate === null && r(ce, Ye), oe = y(ot, oe, lt), $e === null ? Ve = ot : $e.sibling = ot, $e = ot, Ye = rn;
        }
        if (lt === pe.length) return o(ce, Ye), Pt && Rr(ce, lt), Ve;
        if (Ye === null) {
          for (; lt < pe.length; lt++) Ye = Ke(ce, pe[lt], Me), Ye !== null && (oe = y(Ye, oe, lt), $e === null ? Ve = Ye : $e.sibling = Ye, $e = Ye);
          return Pt && Rr(ce, lt), Ve;
        }
        for (Ye = a(ce, Ye); lt < pe.length; lt++) rn = kt(Ye, ce, lt, pe[lt], Me), rn !== null && (n && rn.alternate !== null && Ye.delete(rn.key === null ? lt : rn.key), oe = y(rn, oe, lt), $e === null ? Ve = rn : $e.sibling = rn, $e = rn);
        return n && Ye.forEach(function(Tn) {
          return r(ce, Tn);
        }), Pt && Rr(ce, lt), Ve;
      }
      function Vn(ce, oe, pe, Me) {
        var Ve = W(pe);
        if (typeof Ve != "function") throw Error(f(150));
        if (pe = Ve.call(pe), pe == null) throw Error(f(151));
        for (var $e = Ve = null, Ye = oe, lt = oe = 0, rn = null, ot = pe.next(); Ye !== null && !ot.done; lt++, ot = pe.next()) {
          Ye.index > lt ? (rn = Ye, Ye = null) : rn = Ye.sibling;
          var Tn = Ne(ce, Ye, ot.value, Me);
          if (Tn === null) {
            Ye === null && (Ye = rn);
            break;
          }
          n && Ye && Tn.alternate === null && r(ce, Ye), oe = y(Tn, oe, lt), $e === null ? Ve = Tn : $e.sibling = Tn, $e = Tn, Ye = rn;
        }
        if (ot.done) return o(
          ce,
          Ye
        ), Pt && Rr(ce, lt), Ve;
        if (Ye === null) {
          for (; !ot.done; lt++, ot = pe.next()) ot = Ke(ce, ot.value, Me), ot !== null && (oe = y(ot, oe, lt), $e === null ? Ve = ot : $e.sibling = ot, $e = ot);
          return Pt && Rr(ce, lt), Ve;
        }
        for (Ye = a(ce, Ye); !ot.done; lt++, ot = pe.next()) ot = kt(Ye, ce, lt, ot.value, Me), ot !== null && (n && ot.alternate !== null && Ye.delete(ot.key === null ? lt : ot.key), oe = y(ot, oe, lt), $e === null ? Ve = ot : $e.sibling = ot, $e = ot);
        return n && Ye.forEach(function(Sd) {
          return r(ce, Sd);
        }), Pt && Rr(ce, lt), Ve;
      }
      function qr(ce, oe, pe, Me) {
        if (typeof pe == "object" && pe !== null && pe.type === k && pe.key === null && (pe = pe.props.children), typeof pe == "object" && pe !== null) {
          switch (pe.$$typeof) {
            case m:
              e: {
                for (var Ve = pe.key, $e = oe; $e !== null; ) {
                  if ($e.key === Ve) {
                    if (Ve = pe.type, Ve === k) {
                      if ($e.tag === 7) {
                        o(ce, $e.sibling), oe = c($e, pe.props.children), oe.return = ce, ce = oe;
                        break e;
                      }
                    } else if ($e.elementType === Ve || typeof Ve == "object" && Ve !== null && Ve.$$typeof === h && ic(Ve) === $e.type) {
                      o(ce, $e.sibling), oe = c($e, pe.props), oe.ref = Ki(ce, $e, pe), oe.return = ce, ce = oe;
                      break e;
                    }
                    o(ce, $e);
                    break;
                  } else r(ce, $e);
                  $e = $e.sibling;
                }
                pe.type === k ? (oe = _n(pe.props.children, ce.mode, Me, pe.key), oe.return = ce, ce = oe) : (Me = Vl(pe.type, pe.key, pe.props, null, ce.mode, Me), Me.ref = Ki(ce, oe, pe), Me.return = ce, ce = Me);
              }
              return V(ce);
            case x:
              e: {
                for ($e = pe.key; oe !== null; ) {
                  if (oe.key === $e) if (oe.tag === 4 && oe.stateNode.containerInfo === pe.containerInfo && oe.stateNode.implementation === pe.implementation) {
                    o(ce, oe.sibling), oe = c(oe, pe.children || []), oe.return = ce, ce = oe;
                    break e;
                  } else {
                    o(ce, oe);
                    break;
                  }
                  else r(ce, oe);
                  oe = oe.sibling;
                }
                oe = Hl(pe, ce.mode, Me), oe.return = ce, ce = oe;
              }
              return V(ce);
            case h:
              return $e = pe._init, qr(ce, oe, $e(pe._payload), Me);
          }
          if (ee(pe)) return gt(ce, oe, pe, Me);
          if (W(pe)) return Vn(ce, oe, pe, Me);
          ul(ce, pe);
        }
        return typeof pe == "string" && pe !== "" || typeof pe == "number" ? (pe = "" + pe, oe !== null && oe.tag === 6 ? (o(ce, oe.sibling), oe = c(oe, pe), oe.return = ce, ce = oe) : (o(ce, oe), oe = rs(pe, ce.mode, Me), oe.return = ce, ce = oe), V(ce)) : o(ce, oe);
      }
      return qr;
    }
    var Yi = oc(!0), sc = oc(!1), cl = pn(null), dl = null, Ao = null, sa = null;
    function la() {
      sa = Ao = dl = null;
    }
    function lc(n, r, o) {
      Ce ? (nt(cl, r._currentValue), r._currentValue = o) : (nt(cl, r._currentValue2), r._currentValue2 = o);
    }
    function Cs(n) {
      var r = cl.current;
      Et(cl), Ce ? n._currentValue = r : n._currentValue2 = r;
    }
    function Xi(n, r, o) {
      for (; n !== null; ) {
        var a = n.alternate;
        if ((n.childLanes & r) !== r ? (n.childLanes |= r, a !== null && (a.childLanes |= r)) : a !== null && (a.childLanes & r) !== r && (a.childLanes |= r), n === o) break;
        n = n.return;
      }
    }
    function Oo(n, r) {
      dl = n, sa = Ao = null, n = n.dependencies, n !== null && n.firstContext !== null && ((n.lanes & r) !== 0 && (en = !0), n.firstContext = null);
    }
    function tr(n) {
      var r = Ce ? n._currentValue : n._currentValue2;
      if (sa !== n) if (n = { context: n, memoizedValue: r, next: null }, Ao === null) {
        if (dl === null) throw Error(f(308));
        Ao = n, dl.dependencies = { lanes: 0, firstContext: n };
      } else Ao = Ao.next = n;
      return r;
    }
    var Si = null;
    function fl(n) {
      Si === null ? Si = [n] : Si.push(n);
    }
    function aa(n, r, o, a) {
      var c = r.interleaved;
      return c === null ? (o.next = o, fl(r)) : (o.next = c.next, c.next = o), r.interleaved = o, Nr(n, a);
    }
    function Nr(n, r) {
      n.lanes |= r;
      var o = n.alternate;
      for (o !== null && (o.lanes |= r), o = n, n = n.return; n !== null; ) n.childLanes |= r, o = n.alternate, o !== null && (o.childLanes |= r), o = n, n = n.return;
      return o.tag === 3 ? o.stateNode : null;
    }
    var nr = !1;
    function ua(n) {
      n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
    }
    function ac(n, r) {
      n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
    }
    function ni(n, r) {
      return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
    }
    function ri(n, r, o) {
      var a = n.updateQueue;
      if (a === null) return null;
      if (a = a.shared, (be & 2) !== 0) {
        var c = a.pending;
        return c === null ? r.next = r : (r.next = c.next, c.next = r), a.pending = r, Nr(n, o);
      }
      return c = a.interleaved, c === null ? (r.next = r, fl(a)) : (r.next = c.next, c.next = r), a.interleaved = r, Nr(n, o);
    }
    function ks(n, r, o) {
      if (r = r.updateQueue, r !== null && (r = r.shared, (o & 4194240) !== 0)) {
        var a = r.lanes;
        a &= n.pendingLanes, o |= a, r.lanes = o, Ir(n, o);
      }
    }
    function Io(n, r) {
      var o = n.updateQueue, a = n.alternate;
      if (a !== null && (a = a.updateQueue, o === a)) {
        var c = null, y = null;
        if (o = o.firstBaseUpdate, o !== null) {
          do {
            var V = { eventTime: o.eventTime, lane: o.lane, tag: o.tag, payload: o.payload, callback: o.callback, next: null };
            y === null ? c = y = V : y = y.next = V, o = o.next;
          } while (o !== null);
          y === null ? c = y = r : y = y.next = r;
        } else c = y = r;
        o = { baseState: a.baseState, firstBaseUpdate: c, lastBaseUpdate: y, shared: a.shared, effects: a.effects }, n.updateQueue = o;
        return;
      }
      n = o.lastBaseUpdate, n === null ? o.firstBaseUpdate = r : n.next = r, o.lastBaseUpdate = r;
    }
    function wi(n, r, o, a) {
      var c = n.updateQueue;
      nr = !1;
      var y = c.firstBaseUpdate, V = c.lastBaseUpdate, ne = c.shared.pending;
      if (ne !== null) {
        c.shared.pending = null;
        var he = ne, xe = he.next;
        he.next = null, V === null ? y = xe : V.next = xe, V = he;
        var Ae = n.alternate;
        Ae !== null && (Ae = Ae.updateQueue, ne = Ae.lastBaseUpdate, ne !== V && (ne === null ? Ae.firstBaseUpdate = xe : ne.next = xe, Ae.lastBaseUpdate = he));
      }
      if (y !== null) {
        var Ke = c.baseState;
        V = 0, Ae = xe = he = null, ne = y;
        do {
          var Ne = ne.lane, kt = ne.eventTime;
          if ((a & Ne) === Ne) {
            Ae !== null && (Ae = Ae.next = {
              eventTime: kt,
              lane: 0,
              tag: ne.tag,
              payload: ne.payload,
              callback: ne.callback,
              next: null
            });
            e: {
              var gt = n, Vn = ne;
              switch (Ne = r, kt = o, Vn.tag) {
                case 1:
                  if (gt = Vn.payload, typeof gt == "function") {
                    Ke = gt.call(kt, Ke, Ne);
                    break e;
                  }
                  Ke = gt;
                  break e;
                case 3:
                  gt.flags = gt.flags & -65537 | 128;
                case 0:
                  if (gt = Vn.payload, Ne = typeof gt == "function" ? gt.call(kt, Ke, Ne) : gt, Ne == null) break e;
                  Ke = C({}, Ke, Ne);
                  break e;
                case 2:
                  nr = !0;
              }
            }
            ne.callback !== null && ne.lane !== 0 && (n.flags |= 64, Ne = c.effects, Ne === null ? c.effects = [ne] : Ne.push(ne));
          } else kt = { eventTime: kt, lane: Ne, tag: ne.tag, payload: ne.payload, callback: ne.callback, next: null }, Ae === null ? (xe = Ae = kt, he = Ke) : Ae = Ae.next = kt, V |= Ne;
          if (ne = ne.next, ne === null) {
            if (ne = c.shared.pending, ne === null) break;
            Ne = ne, ne = Ne.next, Ne.next = null, c.lastBaseUpdate = Ne, c.shared.pending = null;
          }
        } while (!0);
        if (Ae === null && (he = Ke), c.baseState = he, c.firstBaseUpdate = xe, c.lastBaseUpdate = Ae, r = c.shared.interleaved, r !== null) {
          c = r;
          do
            V |= c.lane, c = c.next;
          while (c !== r);
        } else y === null && (c.shared.lanes = 0);
        ai |= V, n.lanes = V, n.memoizedState = Ke;
      }
    }
    function uc(n, r, o) {
      if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
        var a = n[r], c = a.callback;
        if (c !== null) {
          if (a.callback = null, a = o, typeof c != "function") throw Error(f(191, c));
          c.call(a);
        }
      }
    }
    var xi = {}, gr = pn(xi), Do = pn(xi), Ci = pn(xi);
    function mr(n) {
      if (n === xi) throw Error(f(174));
      return n;
    }
    function hl(n, r) {
      nt(Ci, r), nt(Do, n), nt(gr, xi), n = T(r), Et(gr), nt(gr, n);
    }
    function Qi() {
      Et(gr), Et(Do), Et(Ci);
    }
    function ca(n) {
      var r = mr(Ci.current), o = mr(gr.current);
      r = z(o, n.type, r), o !== r && (nt(Do, n), nt(gr, r));
    }
    function da(n) {
      Do.current === n && (Et(gr), Et(Do));
    }
    var Dt = pn(0);
    function pl(n) {
      for (var r = n; r !== null; ) {
        if (r.tag === 13) {
          var o = r.memoizedState;
          if (o !== null && (o = o.dehydrated, o === null || ln(o) || Wt(o))) return r;
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
    var fa = [];
    function ha() {
      for (var n = 0; n < fa.length; n++) {
        var r = fa[n];
        Ce ? r._workInProgressVersionPrimary = null : r._workInProgressVersionSecondary = null;
      }
      fa.length = 0;
    }
    var Xn = g.ReactCurrentDispatcher, bi = g.ReactCurrentBatchConfig, ki = 0, Nt = null, qt = null, $t = null, zo = !1, Es = !1, Ps = 0, Go = 0;
    function cn() {
      throw Error(f(321));
    }
    function Ji(n, r) {
      if (r === null) return !1;
      for (var o = 0; o < r.length && o < n.length; o++) if (!Er(n[o], r[o])) return !1;
      return !0;
    }
    function Rs(n, r, o, a, c, y) {
      if (ki = y, Nt = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Xn.current = n === null || n.memoizedState === null ? Ca : ka, n = o(a, c), Es) {
        y = 0;
        do {
          if (Es = !1, Ps = 0, 25 <= y) throw Error(f(301));
          y += 1, $t = qt = null, r.updateQueue = null, Xn.current = Ea, n = o(a, c);
        } while (Es);
      }
      if (Xn.current = no, r = qt !== null && qt.next !== null, ki = 0, $t = qt = Nt = null, zo = !1, r) throw Error(f(300));
      return n;
    }
    function gl() {
      var n = Ps !== 0;
      return Ps = 0, n;
    }
    function rr() {
      var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
      return $t === null ? Nt.memoizedState = $t = n : $t = $t.next = n, $t;
    }
    function yn() {
      if (qt === null) {
        var n = Nt.alternate;
        n = n !== null ? n.memoizedState : null;
      } else n = qt.next;
      var r = $t === null ? Nt.memoizedState : $t.next;
      if (r !== null) $t = r, qt = n;
      else {
        if (n === null) throw Error(f(310));
        qt = n, n = { memoizedState: qt.memoizedState, baseState: qt.baseState, baseQueue: qt.baseQueue, queue: qt.queue, next: null }, $t === null ? Nt.memoizedState = $t = n : $t = $t.next = n;
      }
      return $t;
    }
    function Zi(n, r) {
      return typeof r == "function" ? r(n) : r;
    }
    function ml(n) {
      var r = yn(), o = r.queue;
      if (o === null) throw Error(f(311));
      o.lastRenderedReducer = n;
      var a = qt, c = a.baseQueue, y = o.pending;
      if (y !== null) {
        if (c !== null) {
          var V = c.next;
          c.next = y.next, y.next = V;
        }
        a.baseQueue = c = y, o.pending = null;
      }
      if (c !== null) {
        y = c.next, a = a.baseState;
        var ne = V = null, he = null, xe = y;
        do {
          var Ae = xe.lane;
          if ((ki & Ae) === Ae) he !== null && (he = he.next = { lane: 0, action: xe.action, hasEagerState: xe.hasEagerState, eagerState: xe.eagerState, next: null }), a = xe.hasEagerState ? xe.eagerState : n(a, xe.action);
          else {
            var Ke = {
              lane: Ae,
              action: xe.action,
              hasEagerState: xe.hasEagerState,
              eagerState: xe.eagerState,
              next: null
            };
            he === null ? (ne = he = Ke, V = a) : he = he.next = Ke, Nt.lanes |= Ae, ai |= Ae;
          }
          xe = xe.next;
        } while (xe !== null && xe !== y);
        he === null ? V = a : he.next = ne, Er(a, r.memoizedState) || (en = !0), r.memoizedState = a, r.baseState = V, r.baseQueue = he, o.lastRenderedState = a;
      }
      if (n = o.interleaved, n !== null) {
        c = n;
        do
          y = c.lane, Nt.lanes |= y, ai |= y, c = c.next;
        while (c !== n);
      } else c === null && (o.lanes = 0);
      return [r.memoizedState, o.dispatch];
    }
    function Uo(n) {
      var r = yn(), o = r.queue;
      if (o === null) throw Error(f(311));
      o.lastRenderedReducer = n;
      var a = o.dispatch, c = o.pending, y = r.memoizedState;
      if (c !== null) {
        o.pending = null;
        var V = c = c.next;
        do
          y = n(y, V.action), V = V.next;
        while (V !== c);
        Er(y, r.memoizedState) || (en = !0), r.memoizedState = y, r.baseQueue === null && (r.baseState = y), o.lastRenderedState = y;
      }
      return [y, a];
    }
    function pa() {
    }
    function ga(n, r) {
      var o = Nt, a = yn(), c = r(), y = !Er(a.memoizedState, c);
      if (y && (a.memoizedState = c, en = !0), a = a.queue, _l(va.bind(null, o, a, n), [n]), a.getSnapshot !== r || y || $t !== null && $t.memoizedState.tag & 1) {
        if (o.flags |= 2048, $i(9, ya.bind(null, o, a, c, r), void 0, null), _t === null) throw Error(f(349));
        (ki & 30) !== 0 || ma(o, r, c);
      }
      return c;
    }
    function ma(n, r, o) {
      n.flags |= 16384, n = { getSnapshot: r, value: o }, r = Nt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Nt.updateQueue = r, r.stores = [n]) : (o = r.stores, o === null ? r.stores = [n] : o.push(n));
    }
    function ya(n, r, o, a) {
      r.value = o, r.getSnapshot = a, _a(r) && ii(n);
    }
    function va(n, r, o) {
      return o(function() {
        _a(r) && ii(n);
      });
    }
    function _a(n) {
      var r = n.getSnapshot;
      n = n.value;
      try {
        var o = r();
        return !Er(n, o);
      } catch {
        return !0;
      }
    }
    function ii(n) {
      var r = Nr(n, 1);
      r !== null && Pn(r, n, 1, -1);
    }
    function yl(n) {
      var r = rr();
      return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Zi, lastRenderedState: n }, r.queue = n, n = n.dispatch = md.bind(null, Nt, n), [r.memoizedState, n];
    }
    function $i(n, r, o, a) {
      return n = { tag: n, create: r, destroy: o, deps: a, next: null }, r = Nt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Nt.updateQueue = r, r.lastEffect = n.next = n) : (o = r.lastEffect, o === null ? r.lastEffect = n.next = n : (a = o.next, o.next = n, n.next = a, r.lastEffect = n)), n;
    }
    function cc() {
      return yn().memoizedState;
    }
    function vl(n, r, o, a) {
      var c = rr();
      Nt.flags |= n, c.memoizedState = $i(1 | r, o, void 0, a === void 0 ? null : a);
    }
    function Ei(n, r, o, a) {
      var c = yn();
      a = a === void 0 ? null : a;
      var y = void 0;
      if (qt !== null) {
        var V = qt.memoizedState;
        if (y = V.destroy, a !== null && Ji(a, V.deps)) {
          c.memoizedState = $i(r, o, y, a);
          return;
        }
      }
      Nt.flags |= n, c.memoizedState = $i(1 | r, o, y, a);
    }
    function dc(n, r) {
      return vl(8390656, 8, n, r);
    }
    function _l(n, r) {
      return Ei(2048, 8, n, r);
    }
    function Sa(n, r) {
      return Ei(4, 2, n, r);
    }
    function wt(n, r) {
      return Ei(4, 4, n, r);
    }
    function Sl(n, r) {
      if (typeof r == "function") return n = n(), r(n), function() {
        r(null);
      };
      if (r != null) return n = n(), r.current = n, function() {
        r.current = null;
      };
    }
    function Ts(n, r, o) {
      return o = o != null ? o.concat([n]) : null, Ei(4, 4, Sl.bind(null, r, n), o);
    }
    function eo() {
    }
    function wa(n, r) {
      var o = yn();
      r = r === void 0 ? null : r;
      var a = o.memoizedState;
      return a !== null && r !== null && Ji(r, a[1]) ? a[0] : (o.memoizedState = [n, r], n);
    }
    function wl(n, r) {
      var o = yn();
      r = r === void 0 ? null : r;
      var a = o.memoizedState;
      return a !== null && r !== null && Ji(r, a[1]) ? a[0] : (n = n(), o.memoizedState = [n, r], n);
    }
    function Bo(n, r, o) {
      return (ki & 21) === 0 ? (n.baseState && (n.baseState = !1, en = !0), n.memoizedState = o) : (Er(o, r) || (o = el(), Nt.lanes |= o, ai |= o, n.baseState = !0), r);
    }
    function xl(n, r) {
      var o = rt;
      rt = o !== 0 && 4 > o ? o : 4, n(!0);
      var a = bi.transition;
      bi.transition = {};
      try {
        n(!1), r();
      } finally {
        rt = o, bi.transition = a;
      }
    }
    function to() {
      return yn().memoizedState;
    }
    function fc(n, r, o) {
      var a = nn(n);
      if (o = { lane: a, action: o, hasEagerState: !1, eagerState: null, next: null }, hc(n)) xa(r, o);
      else if (o = aa(n, r, o, a), o !== null) {
        var c = Rt();
        Pn(o, n, a, c), Ns(o, r, a);
      }
    }
    function md(n, r, o) {
      var a = nn(n), c = { lane: a, action: o, hasEagerState: !1, eagerState: null, next: null };
      if (hc(n)) xa(r, c);
      else {
        var y = n.alternate;
        if (n.lanes === 0 && (y === null || y.lanes === 0) && (y = r.lastRenderedReducer, y !== null)) try {
          var V = r.lastRenderedState, ne = y(V, o);
          if (c.hasEagerState = !0, c.eagerState = ne, Er(ne, V)) {
            var he = r.interleaved;
            he === null ? (c.next = c, fl(r)) : (c.next = he.next, he.next = c), r.interleaved = c;
            return;
          }
        } catch {
        } finally {
        }
        o = aa(n, r, c, a), o !== null && (c = Rt(), Pn(o, n, a, c), Ns(o, r, a));
      }
    }
    function hc(n) {
      var r = n.alternate;
      return n === Nt || r !== null && r === Nt;
    }
    function xa(n, r) {
      Es = zo = !0;
      var o = n.pending;
      o === null ? r.next = r : (r.next = o.next, o.next = r), n.pending = r;
    }
    function Ns(n, r, o) {
      if ((o & 4194240) !== 0) {
        var a = r.lanes;
        a &= n.pendingLanes, o |= a, r.lanes = o, Ir(n, o);
      }
    }
    var no = { readContext: tr, useCallback: cn, useContext: cn, useEffect: cn, useImperativeHandle: cn, useInsertionEffect: cn, useLayoutEffect: cn, useMemo: cn, useReducer: cn, useRef: cn, useState: cn, useDebugValue: cn, useDeferredValue: cn, useTransition: cn, useMutableSource: cn, useSyncExternalStore: cn, useId: cn, unstable_isNewReconciler: !1 }, Ca = { readContext: tr, useCallback: function(n, r) {
      return rr().memoizedState = [n, r === void 0 ? null : r], n;
    }, useContext: tr, useEffect: dc, useImperativeHandle: function(n, r, o) {
      return o = o != null ? o.concat([n]) : null, vl(
        4194308,
        4,
        Sl.bind(null, r, n),
        o
      );
    }, useLayoutEffect: function(n, r) {
      return vl(4194308, 4, n, r);
    }, useInsertionEffect: function(n, r) {
      return vl(4, 2, n, r);
    }, useMemo: function(n, r) {
      var o = rr();
      return r = r === void 0 ? null : r, n = n(), o.memoizedState = [n, r], n;
    }, useReducer: function(n, r, o) {
      var a = rr();
      return r = o !== void 0 ? o(r) : r, a.memoizedState = a.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, a.queue = n, n = n.dispatch = fc.bind(null, Nt, n), [a.memoizedState, n];
    }, useRef: function(n) {
      var r = rr();
      return n = { current: n }, r.memoizedState = n;
    }, useState: yl, useDebugValue: eo, useDeferredValue: function(n) {
      return rr().memoizedState = n;
    }, useTransition: function() {
      var n = yl(!1), r = n[0];
      return n = xl.bind(null, n[1]), rr().memoizedState = n, [r, n];
    }, useMutableSource: function() {
    }, useSyncExternalStore: function(n, r, o) {
      var a = Nt, c = rr();
      if (Pt) {
        if (o === void 0) throw Error(f(407));
        o = o();
      } else {
        if (o = r(), _t === null) throw Error(f(349));
        (ki & 30) !== 0 || ma(a, r, o);
      }
      c.memoizedState = o;
      var y = { value: o, getSnapshot: r };
      return c.queue = y, dc(va.bind(
        null,
        a,
        y,
        n
      ), [n]), a.flags |= 2048, $i(9, ya.bind(null, a, y, o, r), void 0, null), o;
    }, useId: function() {
      var n = rr(), r = _t.identifierPrefix;
      if (Pt) {
        var o = Pr, a = Yn;
        o = (a & ~(1 << 32 - $n(a) - 1)).toString(32) + o, r = ":" + r + "R" + o, o = Ps++, 0 < o && (r += "H" + o.toString(32)), r += ":";
      } else o = Go++, r = ":" + r + "r" + o.toString(32) + ":";
      return n.memoizedState = r;
    }, unstable_isNewReconciler: !1 }, ka = {
      readContext: tr,
      useCallback: wa,
      useContext: tr,
      useEffect: _l,
      useImperativeHandle: Ts,
      useInsertionEffect: Sa,
      useLayoutEffect: wt,
      useMemo: wl,
      useReducer: ml,
      useRef: cc,
      useState: function() {
        return ml(Zi);
      },
      useDebugValue: eo,
      useDeferredValue: function(n) {
        var r = yn();
        return Bo(r, qt.memoizedState, n);
      },
      useTransition: function() {
        var n = ml(Zi)[0], r = yn().memoizedState;
        return [n, r];
      },
      useMutableSource: pa,
      useSyncExternalStore: ga,
      useId: to,
      unstable_isNewReconciler: !1
    }, Ea = { readContext: tr, useCallback: wa, useContext: tr, useEffect: _l, useImperativeHandle: Ts, useInsertionEffect: Sa, useLayoutEffect: wt, useMemo: wl, useReducer: Uo, useRef: cc, useState: function() {
      return Uo(Zi);
    }, useDebugValue: eo, useDeferredValue: function(n) {
      var r = yn();
      return qt === null ? r.memoizedState = n : Bo(r, qt.memoizedState, n);
    }, useTransition: function() {
      var n = Uo(Zi)[0], r = yn().memoizedState;
      return [n, r];
    }, useMutableSource: pa, useSyncExternalStore: ga, useId: to, unstable_isNewReconciler: !1 };
    function ir(n, r) {
      if (n && n.defaultProps) {
        r = C({}, r), n = n.defaultProps;
        for (var o in n) r[o] === void 0 && (r[o] = n[o]);
        return r;
      }
      return r;
    }
    function Pa(n, r, o, a) {
      r = n.memoizedState, o = o(a, r), o = o == null ? r : C({}, r, o), n.memoizedState = o, n.lanes === 0 && (n.updateQueue.baseState = o);
    }
    var Ms = { isMounted: function(n) {
      return (n = n._reactInternals) ? B(n) === n : !1;
    }, enqueueSetState: function(n, r, o) {
      n = n._reactInternals;
      var a = Rt(), c = nn(n), y = ni(a, c);
      y.payload = r, o != null && (y.callback = o), r = ri(n, y, c), r !== null && (Pn(r, n, c, a), ks(r, n, c));
    }, enqueueReplaceState: function(n, r, o) {
      n = n._reactInternals;
      var a = Rt(), c = nn(n), y = ni(a, c);
      y.tag = 1, y.payload = r, o != null && (y.callback = o), r = ri(n, y, c), r !== null && (Pn(r, n, c, a), ks(r, n, c));
    }, enqueueForceUpdate: function(n, r) {
      n = n._reactInternals;
      var o = Rt(), a = nn(n), c = ni(o, a);
      c.tag = 2, r != null && (c.callback = r), r = ri(n, c, a), r !== null && (Pn(r, n, a, o), ks(r, n, a));
    } };
    function pc(n, r, o, a, c, y, V) {
      return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(a, y, V) : r.prototype && r.prototype.isPureReactComponent ? !al(o, a) || !al(c, y) : !0;
    }
    function gc(n, r, o) {
      var a = !1, c = mi, y = r.contextType;
      return typeof y == "object" && y !== null ? y = tr(y) : (c = an(r) ? Or : xn.current, a = r.contextTypes, y = (a = a != null) ? $r(n, c) : mi), r = new r(o, y), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Ms, n.stateNode = r, r._reactInternals = n, a && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = y), r;
    }
    function Cl(n, r, o, a) {
      n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(o, a), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(o, a), r.state !== n && Ms.enqueueReplaceState(r, r.state, null);
    }
    function zr(n, r, o, a) {
      var c = n.stateNode;
      c.props = o, c.state = n.memoizedState, c.refs = {}, ua(n);
      var y = r.contextType;
      typeof y == "object" && y !== null ? c.context = tr(y) : (y = an(r) ? Or : xn.current, c.context = $r(n, y)), c.state = n.memoizedState, y = r.getDerivedStateFromProps, typeof y == "function" && (Pa(n, r, y, o), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && Ms.enqueueReplaceState(c, c.state, null), wi(n, o, c, a), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
    }
    function ro(n, r) {
      try {
        var o = "", a = r;
        do
          o += gd(a), a = a.return;
        while (a);
        var c = o;
      } catch (y) {
        c = `
Error generating stack: ` + y.message + `
` + y.stack;
      }
      return { value: n, source: r, stack: c, digest: null };
    }
    function Pi(n, r, o) {
      return { value: n, source: null, stack: o ?? null, digest: r ?? null };
    }
    function yr(n, r) {
      try {
        console.error(r.value);
      } catch (o) {
        setTimeout(function() {
          throw o;
        });
      }
    }
    var Fs = typeof WeakMap == "function" ? WeakMap : Map;
    function Gr(n, r, o) {
      o = ni(-1, o), o.tag = 3, o.payload = { element: null };
      var a = r.value;
      return o.callback = function() {
        Ut || (Ut = !0, Kt = a), yr(n, r);
      }, o;
    }
    function kl(n, r, o) {
      o = ni(-1, o), o.tag = 3;
      var a = n.type.getDerivedStateFromError;
      if (typeof a == "function") {
        var c = r.value;
        o.payload = function() {
          return a(c);
        }, o.callback = function() {
          yr(n, r);
        };
      }
      var y = n.stateNode;
      return y !== null && typeof y.componentDidCatch == "function" && (o.callback = function() {
        yr(n, r), typeof a != "function" && (Fr === null ? Fr = /* @__PURE__ */ new Set([this]) : Fr.add(this));
        var V = r.stack;
        this.componentDidCatch(r.value, { componentStack: V !== null ? V : "" });
      }), o;
    }
    function mc(n, r, o) {
      var a = n.pingCache;
      if (a === null) {
        a = n.pingCache = new Fs();
        var c = /* @__PURE__ */ new Set();
        a.set(r, c);
      } else c = a.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), a.set(r, c));
      c.has(o) || (c.add(o), n = kc.bind(null, n, r, o), r.then(n, n));
    }
    function yc(n) {
      do {
        var r;
        if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return n;
        n = n.return;
      } while (n !== null);
      return null;
    }
    function Ri(n, r, o, a, c) {
      return (n.mode & 1) === 0 ? (n === r ? n.flags |= 65536 : (n.flags |= 128, o.flags |= 131072, o.flags &= -52805, o.tag === 1 && (o.alternate === null ? o.tag = 17 : (r = ni(-1, 1), r.tag = 2, ri(o, r, 1))), o.lanes |= 1), n) : (n.flags |= 65536, n.lanes = c, n);
    }
    var Ls = g.ReactCurrentOwner, en = !1;
    function dn(n, r, o, a) {
      r.child = n === null ? sc(r, null, o, a) : Yi(r, n.child, o, a);
    }
    function El(n, r, o, a, c) {
      o = o.render;
      var y = r.ref;
      return Oo(r, c), a = Rs(n, r, o, a, y, c), o = gl(), n !== null && !en ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, si(n, r, c)) : (Pt && o && Ss(r), r.flags |= 1, dn(n, r, a, c), r.child);
    }
    function io(n, r, o, a, c) {
      if (n === null) {
        var y = o.type;
        return typeof y == "function" && !ts(y) && y.defaultProps === void 0 && o.compare === null && o.defaultProps === void 0 ? (r.tag = 15, r.type = y, oi(n, r, y, a, c)) : (n = Vl(o.type, null, a, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
      }
      if (y = n.child, (n.lanes & c) === 0) {
        var V = y.memoizedProps;
        if (o = o.compare, o = o !== null ? o : al, o(V, a) && n.ref === r.ref) return si(n, r, c);
      }
      return r.flags |= 1, n = zi(y, a), n.ref = r.ref, n.return = r, r.child = n;
    }
    function oi(n, r, o, a, c) {
      if (n !== null) {
        var y = n.memoizedProps;
        if (al(y, a) && n.ref === r.ref) if (en = !1, r.pendingProps = a = y, (n.lanes & c) !== 0) (n.flags & 131072) !== 0 && (en = !0);
        else return r.lanes = n.lanes, si(n, r, c);
      }
      return Ur(n, r, o, a, c);
    }
    function xt(n, r, o) {
      var a = r.pendingProps, c = a.children, y = n !== null ? n.memoizedState : null;
      if (a.mode === "hidden") if ((r.mode & 1) === 0) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, nt(Ai, tn), tn |= o;
      else {
        if ((o & 1073741824) === 0) return n = y !== null ? y.baseLanes | o : o, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, nt(Ai, tn), tn |= n, null;
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, a = y !== null ? y.baseLanes : o, nt(Ai, tn), tn |= a;
      }
      else y !== null ? (a = y.baseLanes | o, r.memoizedState = null) : a = o, nt(Ai, tn), tn |= a;
      return dn(n, r, c, o), r.child;
    }
    function vt(n, r) {
      var o = r.ref;
      (n === null && o !== null || n !== null && n.ref !== o) && (r.flags |= 512, r.flags |= 2097152);
    }
    function Ur(n, r, o, a, c) {
      var y = an(o) ? Or : xn.current;
      return y = $r(r, y), Oo(r, c), o = Rs(n, r, o, a, y, c), a = gl(), n !== null && !en ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, si(n, r, c)) : (Pt && a && Ss(r), r.flags |= 1, dn(n, r, o, c), r.child);
    }
    function vn(n, r, o, a, c) {
      if (an(o)) {
        var y = !0;
        Eo(r);
      } else y = !1;
      if (Oo(r, c), r.stateNode === null) As(n, r), gc(r, o, a), zr(r, o, a, c), a = !0;
      else if (n === null) {
        var V = r.stateNode, ne = r.memoizedProps;
        V.props = ne;
        var he = V.context, xe = o.contextType;
        typeof xe == "object" && xe !== null ? xe = tr(xe) : (xe = an(o) ? Or : xn.current, xe = $r(r, xe));
        var Ae = o.getDerivedStateFromProps, Ke = typeof Ae == "function" || typeof V.getSnapshotBeforeUpdate == "function";
        Ke || typeof V.UNSAFE_componentWillReceiveProps != "function" && typeof V.componentWillReceiveProps != "function" || (ne !== a || he !== xe) && Cl(r, V, a, xe), nr = !1;
        var Ne = r.memoizedState;
        V.state = Ne, wi(r, a, V, c), he = r.memoizedState, ne !== a || Ne !== he || qn.current || nr ? (typeof Ae == "function" && (Pa(r, o, Ae, a), he = r.memoizedState), (ne = nr || pc(r, o, ne, a, Ne, he, xe)) ? (Ke || typeof V.UNSAFE_componentWillMount != "function" && typeof V.componentWillMount != "function" || (typeof V.componentWillMount == "function" && V.componentWillMount(), typeof V.UNSAFE_componentWillMount == "function" && V.UNSAFE_componentWillMount()), typeof V.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof V.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = a, r.memoizedState = he), V.props = a, V.state = he, V.context = xe, a = ne) : (typeof V.componentDidMount == "function" && (r.flags |= 4194308), a = !1);
      } else {
        V = r.stateNode, ac(n, r), ne = r.memoizedProps, xe = r.type === r.elementType ? ne : ir(r.type, ne), V.props = xe, Ke = r.pendingProps, Ne = V.context, he = o.contextType, typeof he == "object" && he !== null ? he = tr(he) : (he = an(o) ? Or : xn.current, he = $r(r, he));
        var kt = o.getDerivedStateFromProps;
        (Ae = typeof kt == "function" || typeof V.getSnapshotBeforeUpdate == "function") || typeof V.UNSAFE_componentWillReceiveProps != "function" && typeof V.componentWillReceiveProps != "function" || (ne !== Ke || Ne !== he) && Cl(r, V, a, he), nr = !1, Ne = r.memoizedState, V.state = Ne, wi(r, a, V, c);
        var gt = r.memoizedState;
        ne !== Ke || Ne !== gt || qn.current || nr ? (typeof kt == "function" && (Pa(r, o, kt, a), gt = r.memoizedState), (xe = nr || pc(r, o, xe, a, Ne, gt, he) || !1) ? (Ae || typeof V.UNSAFE_componentWillUpdate != "function" && typeof V.componentWillUpdate != "function" || (typeof V.componentWillUpdate == "function" && V.componentWillUpdate(a, gt, he), typeof V.UNSAFE_componentWillUpdate == "function" && V.UNSAFE_componentWillUpdate(a, gt, he)), typeof V.componentDidUpdate == "function" && (r.flags |= 4), typeof V.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof V.componentDidUpdate != "function" || ne === n.memoizedProps && Ne === n.memoizedState || (r.flags |= 4), typeof V.getSnapshotBeforeUpdate != "function" || ne === n.memoizedProps && Ne === n.memoizedState || (r.flags |= 1024), r.memoizedProps = a, r.memoizedState = gt), V.props = a, V.state = gt, V.context = he, a = xe) : (typeof V.componentDidUpdate != "function" || ne === n.memoizedProps && Ne === n.memoizedState || (r.flags |= 4), typeof V.getSnapshotBeforeUpdate != "function" || ne === n.memoizedProps && Ne === n.memoizedState || (r.flags |= 1024), a = !1);
      }
      return Cn(n, r, o, a, y, c);
    }
    function Cn(n, r, o, a, c, y) {
      vt(n, r);
      var V = (r.flags & 128) !== 0;
      if (!a && !V) return c && ta(r, o, !1), si(n, r, y);
      a = r.stateNode, Ls.current = r;
      var ne = V && typeof o.getDerivedStateFromError != "function" ? null : a.render();
      return r.flags |= 1, n !== null && V ? (r.child = Yi(r, n.child, null, y), r.child = Yi(r, null, ne, y)) : dn(n, r, ne, y), r.memoizedState = a.state, c && ta(r, o, !0), r.child;
    }
    function Ti(n) {
      var r = n.stateNode;
      r.pendingContext ? Yu(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Yu(n, r.context, !1), hl(n, r.containerInfo);
    }
    function oo(n, r, o, a, c) {
      return qi(), oa(c), r.flags |= 256, dn(n, r, o, a), r.child;
    }
    var kn = { dehydrated: null, treeContext: null, retryLane: 0 };
    function Vo(n) {
      return { baseLanes: n, cachePool: null, transitions: null };
    }
    function Ra(n, r, o) {
      var a = r.pendingProps, c = Dt.current, y = !1, V = (r.flags & 128) !== 0, ne;
      if ((ne = V) || (ne = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), ne ? (y = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), nt(Dt, c & 1), n === null)
        return ia(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? ((r.mode & 1) === 0 ? r.lanes = 1 : Wt(n) ? r.lanes = 8 : r.lanes = 1073741824, null) : (V = a.children, n = a.fallback, y ? (a = r.mode, y = r.child, V = { mode: "hidden", children: V }, (a & 1) === 0 && y !== null ? (y.childLanes = 0, y.pendingProps = V) : y = ns(V, a, 0, null), n = _n(n, a, o, null), y.return = r, n.return = r, y.sibling = n, r.child = y, r.child.memoizedState = Vo(o), r.memoizedState = kn, n) : Pl(r, V));
      if (c = n.memoizedState, c !== null && (ne = c.dehydrated, ne !== null)) return vc(n, r, V, a, ne, c, o);
      if (y) {
        y = a.fallback, V = r.mode, c = n.child, ne = c.sibling;
        var he = { mode: "hidden", children: a.children };
        return (V & 1) === 0 && r.child !== c ? (a = r.child, a.childLanes = 0, a.pendingProps = he, r.deletions = null) : (a = zi(c, he), a.subtreeFlags = c.subtreeFlags & 14680064), ne !== null ? y = zi(ne, y) : (y = _n(y, V, o, null), y.flags |= 2), y.return = r, a.return = r, a.sibling = y, r.child = a, a = y, y = r.child, V = n.child.memoizedState, V = V === null ? Vo(o) : { baseLanes: V.baseLanes | o, cachePool: null, transitions: V.transitions }, y.memoizedState = V, y.childLanes = n.childLanes & ~o, r.memoizedState = kn, a;
      }
      return y = n.child, n = y.sibling, a = zi(y, { mode: "visible", children: a.children }), (r.mode & 1) === 0 && (a.lanes = o), a.return = r, a.sibling = null, n !== null && (o = r.deletions, o === null ? (r.deletions = [n], r.flags |= 16) : o.push(n)), r.child = a, r.memoizedState = null, a;
    }
    function Pl(n, r) {
      return r = ns({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
    }
    function so(n, r, o, a) {
      return a !== null && oa(a), Yi(r, n.child, null, o), n = Pl(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
    }
    function vc(n, r, o, a, c, y, V) {
      if (o)
        return r.flags & 256 ? (r.flags &= -257, a = Pi(Error(f(422))), so(n, r, V, a)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (y = a.fallback, c = r.mode, a = ns({ mode: "visible", children: a.children }, c, 0, null), y = _n(y, c, V, null), y.flags |= 2, a.return = r, y.return = r, a.sibling = y, r.child = a, (r.mode & 1) !== 0 && Yi(r, n.child, null, V), r.child.memoizedState = Vo(V), r.memoizedState = kn, y);
      if ((r.mode & 1) === 0) return so(n, r, V, null);
      if (Wt(c)) return a = br(c).digest, y = Error(f(419)), a = Pi(
        y,
        a,
        void 0
      ), so(n, r, V, a);
      if (o = (V & n.childLanes) !== 0, en || o) {
        if (a = _t, a !== null) {
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
          c = (c & (a.suspendedLanes | V)) !== 0 ? 0 : c, c !== 0 && c !== y.retryLane && (y.retryLane = c, Nr(n, c), Pn(
            a,
            n,
            c,
            -1
          ));
        }
        return es(), a = Pi(Error(f(421))), so(n, r, V, a);
      }
      return ln(c) ? (r.flags |= 128, r.child = n.child, r = Pc.bind(null, n), Jr(c, r), null) : (n = y.treeContext, Ue && (In = $l(c), mn = r, Pt = !0, Tr = null, xs = !1, n !== null && (On[er++] = Yn, On[er++] = Pr, On[er++] = Zt, Yn = n.id, Pr = n.overflow, Zt = r)), r = Pl(r, a.children), r.flags |= 4096, r);
    }
    function Br(n, r, o) {
      n.lanes |= r;
      var a = n.alternate;
      a !== null && (a.lanes |= r), Xi(n.return, r, o);
    }
    function Ho(n, r, o, a, c) {
      var y = n.memoizedState;
      y === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: a, tail: o, tailMode: c } : (y.isBackwards = r, y.rendering = null, y.renderingStartTime = 0, y.last = a, y.tail = o, y.tailMode = c);
    }
    function Rl(n, r, o) {
      var a = r.pendingProps, c = a.revealOrder, y = a.tail;
      if (dn(n, r, a.children, o), a = Dt.current, (a & 2) !== 0) a = a & 1 | 2, r.flags |= 128;
      else {
        if (n !== null && (n.flags & 128) !== 0) e: for (n = r.child; n !== null; ) {
          if (n.tag === 13) n.memoizedState !== null && Br(n, o, r);
          else if (n.tag === 19) Br(n, o, r);
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
      if (nt(Dt, a), (r.mode & 1) === 0) r.memoizedState = null;
      else switch (c) {
        case "forwards":
          for (o = r.child, c = null; o !== null; ) n = o.alternate, n !== null && pl(n) === null && (c = o), o = o.sibling;
          o = c, o === null ? (c = r.child, r.child = null) : (c = o.sibling, o.sibling = null), Ho(r, !1, c, o, y);
          break;
        case "backwards":
          for (o = null, c = r.child, r.child = null; c !== null; ) {
            if (n = c.alternate, n !== null && pl(n) === null) {
              r.child = c;
              break;
            }
            n = c.sibling, c.sibling = o, o = c, c = n;
          }
          Ho(r, !0, o, null, y);
          break;
        case "together":
          Ho(r, !1, null, null, void 0);
          break;
        default:
          r.memoizedState = null;
      }
      return r.child;
    }
    function As(n, r) {
      (r.mode & 1) === 0 && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
    }
    function si(n, r, o) {
      if (n !== null && (r.dependencies = n.dependencies), ai |= r.lanes, (o & r.childLanes) === 0) return null;
      if (n !== null && r.child !== n.child) throw Error(f(153));
      if (r.child !== null) {
        for (n = r.child, o = zi(n, n.pendingProps), r.child = o, o.return = r; n.sibling !== null; ) n = n.sibling, o = o.sibling = zi(n, n.pendingProps), o.return = r;
        o.sibling = null;
      }
      return r.child;
    }
    function Ni(n, r, o) {
      switch (r.tag) {
        case 3:
          Ti(r), qi();
          break;
        case 5:
          ca(r);
          break;
        case 1:
          an(r.type) && Eo(r);
          break;
        case 4:
          hl(r, r.stateNode.containerInfo);
          break;
        case 10:
          lc(r, r.type._context, r.memoizedProps.value);
          break;
        case 13:
          var a = r.memoizedState;
          if (a !== null)
            return a.dehydrated !== null ? (nt(Dt, Dt.current & 1), r.flags |= 128, null) : (o & r.child.childLanes) !== 0 ? Ra(n, r, o) : (nt(Dt, Dt.current & 1), n = si(n, r, o), n !== null ? n.sibling : null);
          nt(Dt, Dt.current & 1);
          break;
        case 19:
          if (a = (o & r.childLanes) !== 0, (n.flags & 128) !== 0) {
            if (a) return Rl(
              n,
              r,
              o
            );
            r.flags |= 128;
          }
          var c = r.memoizedState;
          if (c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), nt(Dt, Dt.current), a) break;
          return null;
        case 22:
        case 23:
          return r.lanes = 0, xt(n, r, o);
      }
      return si(n, r, o);
    }
    function Dn(n) {
      n.flags |= 4;
    }
    function lo(n, r) {
      if (n !== null && n.child === r.child) return !0;
      if ((r.flags & 16) !== 0) return !1;
      for (n = r.child; n !== null; ) {
        if ((n.flags & 12854) !== 0 || (n.subtreeFlags & 12854) !== 0) return !1;
        n = n.sibling;
      }
      return !0;
    }
    var Mi, Fi, zn, Gn;
    if (Ee) Mi = function(n, r) {
      for (var o = r.child; o !== null; ) {
        if (o.tag === 5 || o.tag === 6) K(n, o.stateNode);
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
    }, Fi = function() {
    }, zn = function(n, r, o, a, c) {
      if (n = n.memoizedProps, n !== a) {
        var y = r.stateNode, V = mr(gr.current);
        o = de(y, o, n, a, c, V), (r.updateQueue = o) && Dn(r);
      }
    }, Gn = function(n, r, o, a) {
      o !== a && Dn(r);
    };
    else if (De) {
      Mi = function(n, r, o, a) {
        for (var c = r.child; c !== null; ) {
          if (c.tag === 5) {
            var y = c.stateNode;
            o && a && (y = Xe(y, c.type, c.memoizedProps, c)), K(n, y);
          } else if (c.tag === 6) y = c.stateNode, o && a && (y = tt(y, c.memoizedProps, c)), K(n, y);
          else if (c.tag !== 4) {
            if (c.tag === 22 && c.memoizedState !== null) y = c.child, y !== null && (y.return = c), Mi(n, c, !0, !0);
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
      var Li = function(n, r, o, a) {
        for (var c = r.child; c !== null; ) {
          if (c.tag === 5) {
            var y = c.stateNode;
            o && a && (y = Xe(y, c.type, c.memoizedProps, c)), Se(n, y);
          } else if (c.tag === 6) y = c.stateNode, o && a && (y = tt(y, c.memoizedProps, c)), Se(n, y);
          else if (c.tag !== 4) {
            if (c.tag === 22 && c.memoizedState !== null) y = c.child, y !== null && (y.return = c), Li(n, c, !0, !0);
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
      Fi = function(n, r) {
        var o = r.stateNode;
        if (!lo(n, r)) {
          n = o.containerInfo;
          var a = ye(n);
          Li(a, r, !1, !1), o.pendingChildren = a, Dn(r), Te(n, a);
        }
      }, zn = function(n, r, o, a, c) {
        var y = n.stateNode, V = n.memoizedProps;
        if ((n = lo(n, r)) && V === a) r.stateNode = y;
        else {
          var ne = r.stateNode, he = mr(gr.current), xe = null;
          V !== a && (xe = de(ne, o, V, a, c, he)), n && xe === null ? r.stateNode = y : (y = bs(y, xe, o, V, a, r, n, ne), b(y, o, a, c, he) && Dn(r), r.stateNode = y, n ? Dn(r) : Mi(y, r, !1, !1));
        }
      }, Gn = function(n, r, o, a) {
        o !== a ? (n = mr(Ci.current), o = mr(gr.current), r.stateNode = se(a, n, o, r), Dn(r)) : r.stateNode = n.stateNode;
      };
    } else Fi = function() {
    }, zn = function() {
    }, Gn = function() {
    };
    function or(n, r) {
      if (!Pt) switch (n.tailMode) {
        case "hidden":
          r = n.tail;
          for (var o = null; r !== null; ) r.alternate !== null && (o = r), r = r.sibling;
          o === null ? n.tail = null : o.sibling = null;
          break;
        case "collapsed":
          o = n.tail;
          for (var a = null; o !== null; ) o.alternate !== null && (a = o), o = o.sibling;
          a === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : a.sibling = null;
      }
    }
    function Mt(n) {
      var r = n.alternate !== null && n.alternate.child === n.child, o = 0, a = 0;
      if (r) for (var c = n.child; c !== null; ) o |= c.lanes | c.childLanes, a |= c.subtreeFlags & 14680064, a |= c.flags & 14680064, c.return = n, c = c.sibling;
      else for (c = n.child; c !== null; ) o |= c.lanes | c.childLanes, a |= c.subtreeFlags, a |= c.flags, c.return = n, c = c.sibling;
      return n.subtreeFlags |= a, n.childLanes = o, r;
    }
    function ao(n, r, o) {
      var a = r.pendingProps;
      switch (ws(r), r.tag) {
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
          return Mt(r), null;
        case 1:
          return an(r.type) && ji(), Mt(r), null;
        case 3:
          return o = r.stateNode, Qi(), Et(qn), Et(xn), ha(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (ll(r) ? Dn(r) : n === null || n.memoizedState.isDehydrated && (r.flags & 256) === 0 || (r.flags |= 1024, Tr !== null && (Ul(Tr), Tr = null))), Fi(n, r), Mt(r), null;
        case 5:
          da(r), o = mr(Ci.current);
          var c = r.type;
          if (n !== null && r.stateNode != null) zn(n, r, c, a, o), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
          else {
            if (!a) {
              if (r.stateNode === null) throw Error(f(166));
              return Mt(r), null;
            }
            if (n = mr(gr.current), ll(r)) {
              if (!Ue) throw Error(f(175));
              n = Vi(r.stateNode, r.type, r.memoizedProps, o, n, r, !xs), r.updateQueue = n, n !== null && Dn(r);
            } else {
              var y = L(c, a, o, n, r);
              Mi(y, r, !1, !1), r.stateNode = y, b(y, c, a, o, n) && Dn(r);
            }
            r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
          }
          return Mt(r), null;
        case 6:
          if (n && r.stateNode != null) Gn(n, r, n.memoizedProps, a);
          else {
            if (typeof a != "string" && r.stateNode === null) throw Error(f(166));
            if (n = mr(Ci.current), o = mr(gr.current), ll(r)) {
              if (!Ue) throw Error(f(176));
              if (n = r.stateNode, o = r.memoizedProps, (a = Vu(n, o, r, !xs)) && (c = mn, c !== null)) switch (c.tag) {
                case 3:
                  cd(c.stateNode.containerInfo, n, o, (c.mode & 1) !== 0);
                  break;
                case 5:
                  Bt(c.type, c.memoizedProps, c.stateNode, n, o, (c.mode & 1) !== 0);
              }
              a && Dn(r);
            } else r.stateNode = se(a, n, o, r);
          }
          return Mt(r), null;
        case 13:
          if (Et(Dt), a = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
            if (Pt && In !== null && (r.mode & 1) !== 0 && (r.flags & 128) === 0) rc(), qi(), r.flags |= 98560, c = !1;
            else if (c = ll(r), a !== null && a.dehydrated !== null) {
              if (n === null) {
                if (!c) throw Error(f(318));
                if (!Ue) throw Error(f(344));
                if (c = r.memoizedState, c = c !== null ? c.dehydrated : null, !c) throw Error(f(317));
                Hu(c, r);
              } else qi(), (r.flags & 128) === 0 && (r.memoizedState = null), r.flags |= 4;
              Mt(r), c = !1;
            } else Tr !== null && (Ul(Tr), Tr = null), c = !0;
            if (!c) return r.flags & 65536 ? r : null;
          }
          return (r.flags & 128) !== 0 ? (r.lanes = o, r) : (o = a !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, (r.mode & 1) !== 0 && (n === null || (Dt.current & 1) !== 0 ? Lt === 0 && (Lt = 3) : es())), r.updateQueue !== null && (r.flags |= 4), Mt(r), null);
        case 4:
          return Qi(), Fi(n, r), n === null && We(r.stateNode.containerInfo), Mt(r), null;
        case 10:
          return Cs(r.type._context), Mt(r), null;
        case 17:
          return an(r.type) && ji(), Mt(r), null;
        case 19:
          if (Et(Dt), c = r.memoizedState, c === null) return Mt(r), null;
          if (a = (r.flags & 128) !== 0, y = c.rendering, y === null) if (a) or(c, !1);
          else {
            if (Lt !== 0 || n !== null && (n.flags & 128) !== 0) for (n = r.child; n !== null; ) {
              if (y = pl(n), y !== null) {
                for (r.flags |= 128, or(c, !1), n = y.updateQueue, n !== null && (r.updateQueue = n, r.flags |= 4), r.subtreeFlags = 0, n = o, o = r.child; o !== null; ) a = o, c = n, a.flags &= 14680066, y = a.alternate, y === null ? (a.childLanes = 0, a.lanes = c, a.child = null, a.subtreeFlags = 0, a.memoizedProps = null, a.memoizedState = null, a.updateQueue = null, a.dependencies = null, a.stateNode = null) : (a.childLanes = y.childLanes, a.lanes = y.lanes, a.child = y.child, a.subtreeFlags = 0, a.deletions = null, a.memoizedProps = y.memoizedProps, a.memoizedState = y.memoizedState, a.updateQueue = y.updateQueue, a.type = y.type, c = y.dependencies, a.dependencies = c === null ? null : { lanes: c.lanes, firstContext: c.firstContext }), o = o.sibling;
                return nt(Dt, Dt.current & 1 | 2), r.child;
              }
              n = n.sibling;
            }
            c.tail !== null && un() > Bs && (r.flags |= 128, a = !0, or(c, !1), r.lanes = 4194304);
          }
          else {
            if (!a) if (n = pl(y), n !== null) {
              if (r.flags |= 128, a = !0, n = n.updateQueue, n !== null && (r.updateQueue = n, r.flags |= 4), or(c, !0), c.tail === null && c.tailMode === "hidden" && !y.alternate && !Pt) return Mt(r), null;
            } else 2 * un() - c.renderingStartTime > Bs && o !== 1073741824 && (r.flags |= 128, a = !0, or(c, !1), r.lanes = 4194304);
            c.isBackwards ? (y.sibling = r.child, r.child = y) : (n = c.last, n !== null ? n.sibling = y : r.child = y, c.last = y);
          }
          return c.tail !== null ? (r = c.tail, c.rendering = r, c.tail = r.sibling, c.renderingStartTime = un(), r.sibling = null, n = Dt.current, nt(Dt, a ? n & 1 | 2 : n & 1), r) : (Mt(r), null);
        case 22:
        case 23:
          return Bl(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && (r.mode & 1) !== 0 ? (tn & 1073741824) !== 0 && (Mt(r), Ee && r.subtreeFlags & 6 && (r.flags |= 8192)) : Mt(r), null;
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
    function _c(n, r) {
      switch (ws(r), r.tag) {
        case 1:
          return an(r.type) && ji(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
        case 3:
          return Qi(), Et(qn), Et(xn), ha(), n = r.flags, (n & 65536) !== 0 && (n & 128) === 0 ? (r.flags = n & -65537 | 128, r) : null;
        case 5:
          return da(r), null;
        case 13:
          if (Et(Dt), n = r.memoizedState, n !== null && n.dehydrated !== null) {
            if (r.alternate === null) throw Error(f(340));
            qi();
          }
          return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
        case 19:
          return Et(Dt), null;
        case 4:
          return Qi(), null;
        case 10:
          return Cs(r.type._context), null;
        case 22:
        case 23:
          return Bl(), null;
        case 24:
          return null;
        default:
          return null;
      }
    }
    var jo = !1, fn = !1, sr = typeof WeakSet == "function" ? WeakSet : Set, Re = null;
    function pt(n, r) {
      var o = n.ref;
      if (o !== null) if (typeof o == "function") try {
        o(null);
      } catch (a) {
        Tt(n, r, a);
      }
      else o.current = null;
    }
    function lr(n, r, o) {
      try {
        o();
      } catch (a) {
        Tt(n, r, a);
      }
    }
    var Ta = !1;
    function Sc(n, r) {
      for (N(n.containerInfo), Re = r; Re !== null; ) if (n = Re, r = n.child, (n.subtreeFlags & 1028) !== 0 && r !== null) r.return = n, Re = r;
      else for (; Re !== null; ) {
        n = Re;
        try {
          var o = n.alternate;
          if ((n.flags & 1024) !== 0) switch (n.tag) {
            case 0:
            case 11:
            case 15:
              break;
            case 1:
              if (o !== null) {
                var a = o.memoizedProps, c = o.memoizedState, y = n.stateNode, V = y.getSnapshotBeforeUpdate(n.elementType === n.type ? a : ir(n.type, a), c);
                y.__reactInternalSnapshotBeforeUpdate = V;
              }
              break;
            case 3:
              Ee && Qr(n.stateNode.containerInfo);
              break;
            case 5:
            case 6:
            case 4:
            case 17:
              break;
            default:
              throw Error(f(163));
          }
        } catch (ne) {
          Tt(n, n.return, ne);
        }
        if (r = n.sibling, r !== null) {
          r.return = n.return, Re = r;
          break;
        }
        Re = n.return;
      }
      return o = Ta, Ta = !1, o;
    }
    function uo(n, r, o) {
      var a = r.updateQueue;
      if (a = a !== null ? a.lastEffect : null, a !== null) {
        var c = a = a.next;
        do {
          if ((c.tag & n) === n) {
            var y = c.destroy;
            c.destroy = void 0, y !== void 0 && lr(r, o, y);
          }
          c = c.next;
        } while (c !== a);
      }
    }
    function Wo(n, r) {
      if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
        var o = r = r.next;
        do {
          if ((o.tag & n) === n) {
            var a = o.create;
            o.destroy = a();
          }
          o = o.next;
        } while (o !== r);
      }
    }
    function Tl(n) {
      var r = n.ref;
      if (r !== null) {
        var o = n.stateNode;
        switch (n.tag) {
          case 5:
            n = me(o);
            break;
          default:
            n = o;
        }
        typeof r == "function" ? r(n) : r.current = n;
      }
    }
    function Os(n) {
      var r = n.alternate;
      r !== null && (n.alternate = null, Os(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && Ze(r)), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
    }
    function Na(n) {
      return n.tag === 5 || n.tag === 3 || n.tag === 4;
    }
    function co(n) {
      e: for (; ; ) {
        for (; n.sibling === null; ) {
          if (n.return === null || Na(n.return)) return null;
          n = n.return;
        }
        for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
          if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
          n.child.return = n, n = n.child;
        }
        if (!(n.flags & 2)) return n.stateNode;
      }
    }
    function Is(n, r, o) {
      var a = n.tag;
      if (a === 5 || a === 6) n = n.stateNode, r ? Ar(o, n, r) : yt(o, n);
      else if (a !== 4 && (n = n.child, n !== null)) for (Is(n, r, o), n = n.sibling; n !== null; ) Is(n, r, o), n = n.sibling;
    }
    function Ma(n, r, o) {
      var a = n.tag;
      if (a === 5 || a === 6) n = n.stateNode, r ? Ui(o, n, r) : Jt(o, n);
      else if (a !== 4 && (n = n.child, n !== null)) for (Ma(n, r, o), n = n.sibling; n !== null; ) Ma(n, r, o), n = n.sibling;
    }
    var Vt = null, Qn = !1;
    function Mr(n, r, o) {
      for (o = o.child; o !== null; ) Nl(n, r, o), o = o.sibling;
    }
    function Nl(n, r, o) {
      if (Kn && typeof Kn.onCommitFiberUnmount == "function") try {
        Kn.onCommitFiberUnmount(vi, o);
      } catch {
      }
      switch (o.tag) {
        case 5:
          fn || pt(o, r);
        case 6:
          if (Ee) {
            var a = Vt, c = Qn;
            Vt = null, Mr(n, r, o), Vt = a, Qn = c, Vt !== null && (Qn ? Bi(Vt, o.stateNode) : _o(Vt, o.stateNode));
          } else Mr(n, r, o);
          break;
        case 18:
          Ee && Vt !== null && (Qn ? Ku(Vt, o.stateNode) : qu(Vt, o.stateNode));
          break;
        case 4:
          Ee ? (a = Vt, c = Qn, Vt = o.stateNode.containerInfo, Qn = !0, Mr(n, r, o), Vt = a, Qn = c) : (De && (a = o.stateNode.containerInfo, c = ye(a), Pe(a, c)), Mr(n, r, o));
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          if (!fn && (a = o.updateQueue, a !== null && (a = a.lastEffect, a !== null))) {
            c = a = a.next;
            do {
              var y = c, V = y.destroy;
              y = y.tag, V !== void 0 && ((y & 2) !== 0 || (y & 4) !== 0) && lr(o, r, V), c = c.next;
            } while (c !== a);
          }
          Mr(n, r, o);
          break;
        case 1:
          if (!fn && (pt(o, r), a = o.stateNode, typeof a.componentWillUnmount == "function")) try {
            a.props = o.memoizedProps, a.state = o.memoizedState, a.componentWillUnmount();
          } catch (ne) {
            Tt(o, r, ne);
          }
          Mr(n, r, o);
          break;
        case 21:
          Mr(n, r, o);
          break;
        case 22:
          o.mode & 1 ? (fn = (a = fn) || o.memoizedState !== null, Mr(n, r, o), fn = a) : Mr(n, r, o);
          break;
        default:
          Mr(
            n,
            r,
            o
          );
      }
    }
    function fo(n) {
      var r = n.updateQueue;
      if (r !== null) {
        n.updateQueue = null;
        var o = n.stateNode;
        o === null && (o = n.stateNode = new sr()), r.forEach(function(a) {
          var c = yd.bind(null, n, a);
          o.has(a) || (o.add(a), a.then(c, c));
        });
      }
    }
    function vr(n, r) {
      var o = r.deletions;
      if (o !== null) for (var a = 0; a < o.length; a++) {
        var c = o[a];
        try {
          var y = n, V = r;
          if (Ee) {
            var ne = V;
            e: for (; ne !== null; ) {
              switch (ne.tag) {
                case 5:
                  Vt = ne.stateNode, Qn = !1;
                  break e;
                case 3:
                  Vt = ne.stateNode.containerInfo, Qn = !0;
                  break e;
                case 4:
                  Vt = ne.stateNode.containerInfo, Qn = !0;
                  break e;
              }
              ne = ne.return;
            }
            if (Vt === null) throw Error(f(160));
            Nl(y, V, c), Vt = null, Qn = !1;
          } else Nl(y, V, c);
          var he = c.alternate;
          he !== null && (he.return = null), c.return = null;
        } catch (xe) {
          Tt(c, r, xe);
        }
      }
      if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) Ds(r, n), r = r.sibling;
    }
    function Ds(n, r) {
      var o = n.alternate, a = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          if (vr(r, n), ar(n), a & 4) {
            try {
              uo(3, n, n.return), Wo(3, n);
            } catch (Ne) {
              Tt(n, n.return, Ne);
            }
            try {
              uo(5, n, n.return);
            } catch (Ne) {
              Tt(n, n.return, Ne);
            }
          }
          break;
        case 1:
          vr(r, n), ar(n), a & 512 && o !== null && pt(o, o.return);
          break;
        case 5:
          if (vr(r, n), ar(n), a & 512 && o !== null && pt(o, o.return), Ee) {
            if (n.flags & 32) {
              var c = n.stateNode;
              try {
                So(c);
              } catch (Ne) {
                Tt(n, n.return, Ne);
              }
            }
            if (a & 4 && (c = n.stateNode, c != null)) {
              var y = n.memoizedProps;
              if (o = o !== null ? o.memoizedProps : y, a = n.type, r = n.updateQueue, n.updateQueue = null, r !== null) try {
                Xr(c, r, a, o, y, n);
              } catch (Ne) {
                Tt(n, n.return, Ne);
              }
            }
          }
          break;
        case 6:
          if (vr(r, n), ar(n), a & 4 && Ee) {
            if (n.stateNode === null) throw Error(f(162));
            c = n.stateNode, y = n.memoizedProps, o = o !== null ? o.memoizedProps : y;
            try {
              It(c, o, y);
            } catch (Ne) {
              Tt(n, n.return, Ne);
            }
          }
          break;
        case 3:
          if (vr(r, n), ar(n), a & 4) {
            if (Ee && Ue && o !== null && o.memoizedState.isDehydrated) try {
              ju(r.containerInfo);
            } catch (Ne) {
              Tt(n, n.return, Ne);
            }
            if (De) {
              c = r.containerInfo, y = r.pendingChildren;
              try {
                Pe(c, y);
              } catch (Ne) {
                Tt(n, n.return, Ne);
              }
            }
          }
          break;
        case 4:
          if (vr(
            r,
            n
          ), ar(n), a & 4 && De) {
            y = n.stateNode, c = y.containerInfo, y = y.pendingChildren;
            try {
              Pe(c, y);
            } catch (Ne) {
              Tt(n, n.return, Ne);
            }
          }
          break;
        case 13:
          vr(r, n), ar(n), c = n.child, c.flags & 8192 && (y = c.memoizedState !== null, c.stateNode.isHidden = y, !y || c.alternate !== null && c.alternate.memoizedState !== null || (bo = un())), a & 4 && fo(n);
          break;
        case 22:
          var V = o !== null && o.memoizedState !== null;
          if (n.mode & 1 ? (fn = (o = fn) || V, vr(r, n), fn = o) : vr(r, n), ar(n), a & 8192) {
            if (o = n.memoizedState !== null, (n.stateNode.isHidden = o) && !V && (n.mode & 1) !== 0) for (Re = n, a = n.child; a !== null; ) {
              for (r = Re = a; Re !== null; ) {
                V = Re;
                var ne = V.child;
                switch (V.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    uo(4, V, V.return);
                    break;
                  case 1:
                    pt(V, V.return);
                    var he = V.stateNode;
                    if (typeof he.componentWillUnmount == "function") {
                      var xe = V, Ae = V.return;
                      try {
                        var Ke = xe;
                        he.props = Ke.memoizedProps, he.state = Ke.memoizedState, he.componentWillUnmount();
                      } catch (Ne) {
                        Tt(xe, Ae, Ne);
                      }
                    }
                    break;
                  case 5:
                    pt(V, V.return);
                    break;
                  case 22:
                    if (V.memoizedState !== null) {
                      Ll(r);
                      continue;
                    }
                }
                ne !== null ? (ne.return = V, Re = ne) : Ll(r);
              }
              a = a.sibling;
            }
            if (Ee) {
              e: if (a = null, Ee) for (r = n; ; ) {
                if (r.tag === 5) {
                  if (a === null) {
                    a = r;
                    try {
                      c = r.stateNode, o ? wo(c) : Co(r.stateNode, r.memoizedProps);
                    } catch (Ne) {
                      Tt(n, n.return, Ne);
                    }
                  }
                } else if (r.tag === 6) {
                  if (a === null) try {
                    y = r.stateNode, o ? xo(y) : pi(y, r.memoizedProps);
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
          vr(r, n), ar(n), a & 4 && fo(n);
          break;
        case 21:
          break;
        default:
          vr(r, n), ar(n);
      }
    }
    function ar(n) {
      var r = n.flags;
      if (r & 2) {
        try {
          if (Ee) {
            e: {
              for (var o = n.return; o !== null; ) {
                if (Na(o)) {
                  var a = o;
                  break e;
                }
                o = o.return;
              }
              throw Error(f(160));
            }
            switch (a.tag) {
              case 5:
                var c = a.stateNode;
                a.flags & 32 && (So(c), a.flags &= -33);
                var y = co(n);
                Ma(n, y, c);
                break;
              case 3:
              case 4:
                var V = a.stateNode.containerInfo, ne = co(n);
                Is(n, ne, V);
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
    function qo(n, r, o) {
      Re = n, Ml(n);
    }
    function Ml(n, r, o) {
      for (var a = (n.mode & 1) !== 0; Re !== null; ) {
        var c = Re, y = c.child;
        if (c.tag === 22 && a) {
          var V = c.memoizedState !== null || jo;
          if (!V) {
            var ne = c.alternate, he = ne !== null && ne.memoizedState !== null || fn;
            ne = jo;
            var xe = fn;
            if (jo = V, (fn = he) && !xe) for (Re = c; Re !== null; ) V = Re, he = V.child, V.tag === 22 && V.memoizedState !== null ? Al(c) : he !== null ? (he.return = V, Re = he) : Al(c);
            for (; y !== null; ) Re = y, Ml(y), y = y.sibling;
            Re = c, jo = ne, fn = xe;
          }
          Fl(n);
        } else (c.subtreeFlags & 8772) !== 0 && y !== null ? (y.return = c, Re = y) : Fl(n);
      }
    }
    function Fl(n) {
      for (; Re !== null; ) {
        var r = Re;
        if ((r.flags & 8772) !== 0) {
          var o = r.alternate;
          try {
            if ((r.flags & 8772) !== 0) switch (r.tag) {
              case 0:
              case 11:
              case 15:
                fn || Wo(5, r);
                break;
              case 1:
                var a = r.stateNode;
                if (r.flags & 4 && !fn) if (o === null) a.componentDidMount();
                else {
                  var c = r.elementType === r.type ? o.memoizedProps : ir(r.type, o.memoizedProps);
                  a.componentDidUpdate(c, o.memoizedState, a.__reactInternalSnapshotBeforeUpdate);
                }
                var y = r.updateQueue;
                y !== null && uc(r, y, a);
                break;
              case 3:
                var V = r.updateQueue;
                if (V !== null) {
                  if (o = null, r.child !== null) switch (r.child.tag) {
                    case 5:
                      o = me(r.child.stateNode);
                      break;
                    case 1:
                      o = r.child.stateNode;
                  }
                  uc(r, V, o);
                }
                break;
              case 5:
                var ne = r.stateNode;
                o === null && r.flags & 4 && zt(ne, r.type, r.memoizedProps, r);
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (Ue && r.memoizedState === null) {
                  var he = r.alternate;
                  if (he !== null) {
                    var xe = he.memoizedState;
                    if (xe !== null) {
                      var Ae = xe.dehydrated;
                      Ae !== null && Wu(Ae);
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
            fn || r.flags & 512 && Tl(r);
          } catch (Ke) {
            Tt(r, r.return, Ke);
          }
        }
        if (r === n) {
          Re = null;
          break;
        }
        if (o = r.sibling, o !== null) {
          o.return = r.return, Re = o;
          break;
        }
        Re = r.return;
      }
    }
    function Ll(n) {
      for (; Re !== null; ) {
        var r = Re;
        if (r === n) {
          Re = null;
          break;
        }
        var o = r.sibling;
        if (o !== null) {
          o.return = r.return, Re = o;
          break;
        }
        Re = r.return;
      }
    }
    function Al(n) {
      for (; Re !== null; ) {
        var r = Re;
        try {
          switch (r.tag) {
            case 0:
            case 11:
            case 15:
              var o = r.return;
              try {
                Wo(4, r);
              } catch (he) {
                Tt(r, o, he);
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
                Tl(r);
              } catch (he) {
                Tt(r, y, he);
              }
              break;
            case 5:
              var V = r.return;
              try {
                Tl(r);
              } catch (he) {
                Tt(r, V, he);
              }
          }
        } catch (he) {
          Tt(r, r.return, he);
        }
        if (r === n) {
          Re = null;
          break;
        }
        var ne = r.sibling;
        if (ne !== null) {
          ne.return = r.return, Re = ne;
          break;
        }
        Re = r.return;
      }
    }
    var li = 0, Un = 1, Vr = 2, Ko = 3, zs = 4;
    if (typeof Symbol == "function" && Symbol.for) {
      var ur = Symbol.for;
      li = ur("selector.component"), Un = ur("selector.has_pseudo_class"), Vr = ur("selector.role"), Ko = ur("selector.test_id"), zs = ur("selector.text");
    }
    function Hr(n) {
      var r = Qe(n);
      if (r != null) {
        if (typeof r.memoizedProps["data-testname"] != "string") throw Error(f(364));
        return r;
      }
      if (n = Wn(n), n === null) throw Error(f(362));
      return n.stateNode.current;
    }
    function Gs(n, r) {
      switch (r.$$typeof) {
        case li:
          if (n.type === r.value) return !0;
          break;
        case Un:
          e: {
            r = r.value, n = [n, 0];
            for (var o = 0; o < n.length; ) {
              var a = n[o++], c = n[o++], y = r[c];
              if (a.tag !== 5 || !bt(a)) {
                for (; y != null && Gs(a, y); ) c++, y = r[c];
                if (c === r.length) {
                  r = !0;
                  break e;
                } else for (a = a.child; a !== null; ) n.push(a, c), a = a.sibling;
              }
            }
            r = !1;
          }
          return r;
        case Vr:
          if (n.tag === 5 && Ln(n.stateNode, r.value)) return !0;
          break;
        case zs:
          if ((n.tag === 5 || n.tag === 6) && (n = wn(n), n !== null && 0 <= n.indexOf(r.value))) return !0;
          break;
        case Ko:
          if (n.tag === 5 && (n = n.memoizedProps["data-testname"], typeof n == "string" && n.toLowerCase() === r.value.toLowerCase())) return !0;
          break;
        default:
          throw Error(f(365));
      }
      return !1;
    }
    function Ol(n) {
      switch (n.$$typeof) {
        case li:
          return "<" + (J(n.value) || "Unknown") + ">";
        case Un:
          return ":has(" + (Ol(n) || "") + ")";
        case Vr:
          return '[role="' + n.value + '"]';
        case zs:
          return '"' + n.value + '"';
        case Ko:
          return '[data-testname="' + n.value + '"]';
        default:
          throw Error(f(365));
      }
    }
    function jr(n, r) {
      var o = [];
      n = [n, 0];
      for (var a = 0; a < n.length; ) {
        var c = n[a++], y = n[a++], V = r[y];
        if (c.tag !== 5 || !bt(c)) {
          for (; V != null && Gs(c, V); ) y++, V = r[y];
          if (y === r.length) o.push(c);
          else for (c = c.child; c !== null; ) n.push(c, y), c = c.sibling;
        }
      }
      return o;
    }
    function Wr(n, r) {
      if (!St) throw Error(f(363));
      n = Hr(n), n = jr(n, r), r = [], n = Array.from(n);
      for (var o = 0; o < n.length; ) {
        var a = n[o++];
        if (a.tag === 5) bt(a) || r.push(a.stateNode);
        else for (a = a.child; a !== null; ) n.push(a), a = a.sibling;
      }
      return r;
    }
    var Il = Math.ceil, Us = g.ReactCurrentDispatcher, Yo = g.ReactCurrentOwner, Gt = g.ReactCurrentBatchConfig, be = 0, _t = null, Ft = null, Ht = 0, tn = 0, Ai = pn(0), Lt = 0, Xo = null, ai = 0, Ct = 0, Qo = 0, ho = null, En = null, bo = 0, Bs = 1 / 0, Bn = null;
    function mt() {
      Bs = un() + 500;
    }
    var Ut = !1, Kt = null, Fr = null, Oi = !1, _r = null, Dl = 0, Yt = 0, Vs = null, Jo = -1, Zo = 0;
    function Rt() {
      return (be & 6) !== 0 ? un() : Jo !== -1 ? Jo : Jo = un();
    }
    function nn(n) {
      return (n.mode & 1) === 0 ? 1 : (be & 2) !== 0 && Ht !== 0 ? Ht & -Ht : pd.transition !== null ? (Zo === 0 && (Zo = el()), Zo) : (n = rt, n !== 0 ? n : At());
    }
    function Pn(n, r, o, a) {
      if (50 < Yt) throw Yt = 0, Vs = null, Error(f(185));
      pr(n, o, a), ((be & 2) === 0 || n !== _t) && (n === _t && ((be & 2) === 0 && (Ct |= o), Lt === 4 && ui(n, Ht)), Rn(n, a), o === 1 && be === 0 && (r.mode & 1) === 0 && (mt(), Fo && gn()));
    }
    function Rn(n, r) {
      var o = n.callbackNode;
      bu(n, r);
      var a = Ro(n, n === _t ? Ht : 0);
      if (a === 0) o !== null && Ju(o), n.callbackNode = null, n.callbackPriority = 0;
      else if (r = a & -a, n.callbackPriority !== r) {
        if (o != null && Ju(o), r === 1) n.tag === 0 ? $u(Fa.bind(null, n)) : ol(Fa.bind(null, n)), Je ? Zn(function() {
          (be & 6) === 0 && gn();
        }) : Dr(tl, gn), o = null;
        else {
          switch (No(a)) {
            case 1:
              o = tl;
              break;
            case 4:
              o = nl;
              break;
            case 16:
              o = rl;
              break;
            case 536870912:
              o = hd;
              break;
            default:
              o = rl;
          }
          o = Ga(o, zl.bind(null, n));
        }
        n.callbackPriority = r, n.callbackNode = o;
      }
    }
    function zl(n, r) {
      if (Jo = -1, Zo = 0, (be & 6) !== 0) throw Error(f(327));
      var o = n.callbackNode;
      if (ci() && n.callbackNode !== o) return null;
      var a = Ro(n, n === _t ? Ht : 0);
      if (a === 0) return null;
      if ((a & 30) !== 0 || (a & n.expiredLanes) !== 0 || r) r = po(n, a);
      else {
        r = a;
        var c = be;
        be |= 2;
        var y = Aa();
        (_t !== n || Ht !== r) && (Bn = null, mt(), Ii(n, r));
        do
          try {
            Oa();
            break;
          } catch (ne) {
            $o(n, ne);
          }
        while (!0);
        la(), Us.current = y, be = c, Ft !== null ? r = 0 : (_t = null, Ht = 0, r = Lt);
      }
      if (r !== 0) {
        if (r === 2 && (c = $s(n), c !== 0 && (a = c, r = Gl(n, c))), r === 1) throw o = Xo, Ii(n, 0), ui(n, a), Rn(n, un()), o;
        if (r === 6) ui(n, a);
        else {
          if (c = n.current.alternate, (a & 30) === 0 && !wc(c) && (r = po(n, a), r === 2 && (y = $s(n), y !== 0 && (a = y, r = Gl(n, y))), r === 1)) throw o = Xo, Ii(n, 0), ui(n, a), Rn(n, un()), o;
          switch (n.finishedWork = c, n.finishedLanes = a, r) {
            case 0:
            case 1:
              throw Error(f(345));
            case 2:
              Di(n, En, Bn);
              break;
            case 3:
              if (ui(n, a), (a & 130023424) === a && (r = bo + 500 - un(), 10 < r)) {
                if (Ro(n, 0) !== 0) break;
                if (c = n.suspendedLanes, (c & a) !== a) {
                  Rt(), n.pingedLanes |= n.suspendedLanes & c;
                  break;
                }
                n.timeoutHandle = q(Di.bind(null, n, En, Bn), r);
                break;
              }
              Di(n, En, Bn);
              break;
            case 4:
              if (ui(n, a), (a & 4194240) === a) break;
              for (r = n.eventTimes, c = -1; 0 < a; ) {
                var V = 31 - $n(a);
                y = 1 << V, V = r[V], V > c && (c = V), a &= ~y;
              }
              if (a = c, a = un() - a, a = (120 > a ? 120 : 480 > a ? 480 : 1080 > a ? 1080 : 1920 > a ? 1920 : 3e3 > a ? 3e3 : 4320 > a ? 4320 : 1960 * Il(a / 1960)) - a, 10 < a) {
                n.timeoutHandle = q(Di.bind(null, n, En, Bn), a);
                break;
              }
              Di(n, En, Bn);
              break;
            case 5:
              Di(n, En, Bn);
              break;
            default:
              throw Error(f(329));
          }
        }
      }
      return Rn(n, un()), n.callbackNode === o ? zl.bind(null, n) : null;
    }
    function Gl(n, r) {
      var o = ho;
      return n.current.memoizedState.isDehydrated && (Ii(n, r).flags |= 256), n = po(n, r), n !== 2 && (r = En, En = o, r !== null && Ul(r)), n;
    }
    function Ul(n) {
      En === null ? En = n : En.push.apply(En, n);
    }
    function wc(n) {
      for (var r = n; ; ) {
        if (r.flags & 16384) {
          var o = r.updateQueue;
          if (o !== null && (o = o.stores, o !== null)) for (var a = 0; a < o.length; a++) {
            var c = o[a], y = c.getSnapshot;
            c = c.value;
            try {
              if (!Er(y(), c)) return !1;
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
    function ui(n, r) {
      for (r &= ~Qo, r &= ~Ct, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
        var o = 31 - $n(r), a = 1 << o;
        n[o] = -1, r &= ~a;
      }
    }
    function Fa(n) {
      if ((be & 6) !== 0) throw Error(f(327));
      ci();
      var r = Ro(n, 0);
      if ((r & 1) === 0) return Rn(n, un()), null;
      var o = po(n, r);
      if (n.tag !== 0 && o === 2) {
        var a = $s(n);
        a !== 0 && (r = a, o = Gl(n, a));
      }
      if (o === 1) throw o = Xo, Ii(n, 0), ui(n, r), Rn(n, un()), o;
      if (o === 6) throw Error(f(345));
      return n.finishedWork = n.current.alternate, n.finishedLanes = r, Di(n, En, Bn), Rn(n, un()), null;
    }
    function La(n) {
      _r !== null && _r.tag === 0 && (be & 6) === 0 && ci();
      var r = be;
      be |= 1;
      var o = Gt.transition, a = rt;
      try {
        if (Gt.transition = null, rt = 1, n) return n();
      } finally {
        rt = a, Gt.transition = o, be = r, (be & 6) === 0 && gn();
      }
    }
    function Bl() {
      tn = Ai.current, Et(Ai);
    }
    function Ii(n, r) {
      n.finishedWork = null, n.finishedLanes = 0;
      var o = n.timeoutHandle;
      if (o !== ae && (n.timeoutHandle = ae, re(o)), Ft !== null) for (o = Ft.return; o !== null; ) {
        var a = o;
        switch (ws(a), a.tag) {
          case 1:
            a = a.type.childContextTypes, a != null && ji();
            break;
          case 3:
            Qi(), Et(qn), Et(xn), ha();
            break;
          case 5:
            da(a);
            break;
          case 4:
            Qi();
            break;
          case 13:
            Et(Dt);
            break;
          case 19:
            Et(Dt);
            break;
          case 10:
            Cs(a.type._context);
            break;
          case 22:
          case 23:
            Bl();
        }
        o = o.return;
      }
      if (_t = n, Ft = n = zi(n.current, null), Ht = tn = r, Lt = 0, Xo = null, Qo = Ct = ai = 0, En = ho = null, Si !== null) {
        for (r = 0; r < Si.length; r++) if (o = Si[r], a = o.interleaved, a !== null) {
          o.interleaved = null;
          var c = a.next, y = o.pending;
          if (y !== null) {
            var V = y.next;
            y.next = c, a.next = V;
          }
          o.pending = a;
        }
        Si = null;
      }
      return n;
    }
    function $o(n, r) {
      do {
        var o = Ft;
        try {
          if (la(), Xn.current = no, zo) {
            for (var a = Nt.memoizedState; a !== null; ) {
              var c = a.queue;
              c !== null && (c.pending = null), a = a.next;
            }
            zo = !1;
          }
          if (ki = 0, $t = qt = Nt = null, Es = !1, Ps = 0, Yo.current = null, o === null || o.return === null) {
            Lt = 1, Xo = r, Ft = null;
            break;
          }
          e: {
            var y = n, V = o.return, ne = o, he = r;
            if (r = Ht, ne.flags |= 32768, he !== null && typeof he == "object" && typeof he.then == "function") {
              var xe = he, Ae = ne, Ke = Ae.tag;
              if ((Ae.mode & 1) === 0 && (Ke === 0 || Ke === 11 || Ke === 15)) {
                var Ne = Ae.alternate;
                Ne ? (Ae.updateQueue = Ne.updateQueue, Ae.memoizedState = Ne.memoizedState, Ae.lanes = Ne.lanes) : (Ae.updateQueue = null, Ae.memoizedState = null);
              }
              var kt = yc(V);
              if (kt !== null) {
                kt.flags &= -257, Ri(kt, V, ne, y, r), kt.mode & 1 && mc(y, xe, r), r = kt, he = xe;
                var gt = r.updateQueue;
                if (gt === null) {
                  var Vn = /* @__PURE__ */ new Set();
                  Vn.add(he), r.updateQueue = Vn;
                } else gt.add(he);
                break e;
              } else {
                if ((r & 1) === 0) {
                  mc(y, xe, r), es();
                  break e;
                }
                he = Error(f(426));
              }
            } else if (Pt && ne.mode & 1) {
              var qr = yc(V);
              if (qr !== null) {
                (qr.flags & 65536) === 0 && (qr.flags |= 256), Ri(qr, V, ne, y, r), oa(ro(he, ne));
                break e;
              }
            }
            y = he = ro(he, ne), Lt !== 4 && (Lt = 2), ho === null ? ho = [y] : ho.push(y), y = V;
            do {
              switch (y.tag) {
                case 3:
                  y.flags |= 65536, r &= -r, y.lanes |= r;
                  var ce = Gr(y, he, r);
                  Io(y, ce);
                  break e;
                case 1:
                  ne = he;
                  var oe = y.type, pe = y.stateNode;
                  if ((y.flags & 128) === 0 && (typeof oe.getDerivedStateFromError == "function" || pe !== null && typeof pe.componentDidCatch == "function" && (Fr === null || !Fr.has(pe)))) {
                    y.flags |= 65536, r &= -r, y.lanes |= r;
                    var Me = kl(y, ne, r);
                    Io(y, Me);
                    break e;
                  }
              }
              y = y.return;
            } while (y !== null);
          }
          Da(o);
        } catch (Ve) {
          r = Ve, Ft === o && o !== null && (Ft = o = o.return);
          continue;
        }
        break;
      } while (!0);
    }
    function Aa() {
      var n = Us.current;
      return Us.current = no, n === null ? no : n;
    }
    function es() {
      (Lt === 0 || Lt === 3 || Lt === 2) && (Lt = 4), _t === null || (ai & 268435455) === 0 && (Ct & 268435455) === 0 || ui(_t, Ht);
    }
    function po(n, r) {
      var o = be;
      be |= 2;
      var a = Aa();
      (_t !== n || Ht !== r) && (Bn = null, Ii(n, r));
      do
        try {
          xc();
          break;
        } catch (c) {
          $o(n, c);
        }
      while (!0);
      if (la(), be = o, Us.current = a, Ft !== null) throw Error(f(261));
      return _t = null, Ht = 0, Lt;
    }
    function xc() {
      for (; Ft !== null; ) Ia(Ft);
    }
    function Oa() {
      for (; Ft !== null && !Zu(); ) Ia(Ft);
    }
    function Ia(n) {
      var r = Rc(n.alternate, n, tn);
      n.memoizedProps = n.pendingProps, r === null ? Da(n) : Ft = r, Yo.current = null;
    }
    function Da(n) {
      var r = n;
      do {
        var o = r.alternate;
        if (n = r.return, (r.flags & 32768) === 0) {
          if (o = ao(o, r, tn), o !== null) {
            Ft = o;
            return;
          }
        } else {
          if (o = _c(o, r), o !== null) {
            o.flags &= 32767, Ft = o;
            return;
          }
          if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
          else {
            Lt = 6, Ft = null;
            return;
          }
        }
        if (r = r.sibling, r !== null) {
          Ft = r;
          return;
        }
        Ft = r = n;
      } while (r !== null);
      Lt === 0 && (Lt = 5);
    }
    function Di(n, r, o) {
      var a = rt, c = Gt.transition;
      try {
        Gt.transition = null, rt = 1, Cc(n, r, o, a);
      } finally {
        Gt.transition = c, rt = a;
      }
      return null;
    }
    function Cc(n, r, o, a) {
      do
        ci();
      while (_r !== null);
      if ((be & 6) !== 0) throw Error(f(327));
      o = n.finishedWork;
      var c = n.finishedLanes;
      if (o === null) return null;
      if (n.finishedWork = null, n.finishedLanes = 0, o === n.current) throw Error(f(177));
      n.callbackNode = null, n.callbackPriority = 0;
      var y = o.lanes | o.childLanes;
      if (yi(n, y), n === _t && (Ft = _t = null, Ht = 0), (o.subtreeFlags & 2064) === 0 && (o.flags & 2064) === 0 || Oi || (Oi = !0, Ga(rl, function() {
        return ci(), null;
      })), y = (o.flags & 15990) !== 0, (o.subtreeFlags & 15990) !== 0 || y) {
        y = Gt.transition, Gt.transition = null;
        var V = rt;
        rt = 1;
        var ne = be;
        be |= 4, Yo.current = null, Sc(n, o), Ds(o, n), U(n.containerInfo), n.current = o, qo(o), vs(), be = ne, rt = V, Gt.transition = y;
      } else n.current = o;
      if (Oi && (Oi = !1, _r = n, Dl = c), y = n.pendingLanes, y === 0 && (Fr = null), Mo(o.stateNode), Rn(n, un()), r !== null) for (a = n.onRecoverableError, o = 0; o < r.length; o++) c = r[o], a(c.value, { componentStack: c.stack, digest: c.digest });
      if (Ut) throw Ut = !1, n = Kt, Kt = null, n;
      return (Dl & 1) !== 0 && n.tag !== 0 && ci(), y = n.pendingLanes, (y & 1) !== 0 ? n === Vs ? Yt++ : (Yt = 0, Vs = n) : Yt = 0, gn(), null;
    }
    function ci() {
      if (_r !== null) {
        var n = No(Dl), r = Gt.transition, o = rt;
        try {
          if (Gt.transition = null, rt = 16 > n ? 16 : n, _r === null) var a = !1;
          else {
            if (n = _r, _r = null, Dl = 0, (be & 6) !== 0) throw Error(f(331));
            var c = be;
            for (be |= 4, Re = n.current; Re !== null; ) {
              var y = Re, V = y.child;
              if ((Re.flags & 16) !== 0) {
                var ne = y.deletions;
                if (ne !== null) {
                  for (var he = 0; he < ne.length; he++) {
                    var xe = ne[he];
                    for (Re = xe; Re !== null; ) {
                      var Ae = Re;
                      switch (Ae.tag) {
                        case 0:
                        case 11:
                        case 15:
                          uo(8, Ae, y);
                      }
                      var Ke = Ae.child;
                      if (Ke !== null) Ke.return = Ae, Re = Ke;
                      else for (; Re !== null; ) {
                        Ae = Re;
                        var Ne = Ae.sibling, kt = Ae.return;
                        if (Os(Ae), Ae === xe) {
                          Re = null;
                          break;
                        }
                        if (Ne !== null) {
                          Ne.return = kt, Re = Ne;
                          break;
                        }
                        Re = kt;
                      }
                    }
                  }
                  var gt = y.alternate;
                  if (gt !== null) {
                    var Vn = gt.child;
                    if (Vn !== null) {
                      gt.child = null;
                      do {
                        var qr = Vn.sibling;
                        Vn.sibling = null, Vn = qr;
                      } while (Vn !== null);
                    }
                  }
                  Re = y;
                }
              }
              if ((y.subtreeFlags & 2064) !== 0 && V !== null) V.return = y, Re = V;
              else e: for (; Re !== null; ) {
                if (y = Re, (y.flags & 2048) !== 0) switch (y.tag) {
                  case 0:
                  case 11:
                  case 15:
                    uo(9, y, y.return);
                }
                var ce = y.sibling;
                if (ce !== null) {
                  ce.return = y.return, Re = ce;
                  break e;
                }
                Re = y.return;
              }
            }
            var oe = n.current;
            for (Re = oe; Re !== null; ) {
              V = Re;
              var pe = V.child;
              if ((V.subtreeFlags & 2064) !== 0 && pe !== null) pe.return = V, Re = pe;
              else e: for (V = oe; Re !== null; ) {
                if (ne = Re, (ne.flags & 2048) !== 0) try {
                  switch (ne.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Wo(9, ne);
                  }
                } catch (Ve) {
                  Tt(ne, ne.return, Ve);
                }
                if (ne === V) {
                  Re = null;
                  break e;
                }
                var Me = ne.sibling;
                if (Me !== null) {
                  Me.return = ne.return, Re = Me;
                  break e;
                }
                Re = ne.return;
              }
            }
            if (be = c, gn(), Kn && typeof Kn.onPostCommitFiberRoot == "function") try {
              Kn.onPostCommitFiberRoot(vi, n);
            } catch {
            }
            a = !0;
          }
          return a;
        } finally {
          rt = o, Gt.transition = r;
        }
      }
      return !1;
    }
    function za(n, r, o) {
      r = ro(o, r), r = Gr(n, r, 1), n = ri(n, r, 1), r = Rt(), n !== null && (pr(n, 1, r), Rn(n, r));
    }
    function Tt(n, r, o) {
      if (n.tag === 3) za(n, n, o);
      else for (; r !== null; ) {
        if (r.tag === 3) {
          za(r, n, o);
          break;
        } else if (r.tag === 1) {
          var a = r.stateNode;
          if (typeof r.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (Fr === null || !Fr.has(a))) {
            n = ro(o, n), n = kl(r, n, 1), r = ri(r, n, 1), n = Rt(), r !== null && (pr(r, 1, n), Rn(r, n));
            break;
          }
        }
        r = r.return;
      }
    }
    function kc(n, r, o) {
      var a = n.pingCache;
      a !== null && a.delete(r), r = Rt(), n.pingedLanes |= n.suspendedLanes & o, _t === n && (Ht & o) === o && (Lt === 4 || Lt === 3 && (Ht & 130023424) === Ht && 500 > un() - bo ? Ii(n, 0) : Qo |= o), Rn(n, r);
    }
    function Ec(n, r) {
      r === 0 && ((n.mode & 1) === 0 ? r = 1 : (r = ys, ys <<= 1, (ys & 130023424) === 0 && (ys = 4194304)));
      var o = Rt();
      n = Nr(n, r), n !== null && (pr(n, r, o), Rn(n, o));
    }
    function Pc(n) {
      var r = n.memoizedState, o = 0;
      r !== null && (o = r.retryLane), Ec(n, o);
    }
    function yd(n, r) {
      var o = 0;
      switch (n.tag) {
        case 13:
          var a = n.stateNode, c = n.memoizedState;
          c !== null && (o = c.retryLane);
          break;
        case 19:
          a = n.stateNode;
          break;
        default:
          throw Error(f(314));
      }
      a !== null && a.delete(r), Ec(n, o);
    }
    var Rc;
    Rc = function(n, r, o) {
      if (n !== null) if (n.memoizedProps !== r.pendingProps || qn.current) en = !0;
      else {
        if ((n.lanes & o) === 0 && (r.flags & 128) === 0) return en = !1, Ni(n, r, o);
        en = (n.flags & 131072) !== 0;
      }
      else en = !1, Pt && (r.flags & 1048576) !== 0 && ec(r, Wi, r.index);
      switch (r.lanes = 0, r.tag) {
        case 2:
          var a = r.type;
          As(n, r), n = r.pendingProps;
          var c = $r(r, xn.current);
          Oo(r, o), c = Rs(null, r, a, n, c, o);
          var y = gl();
          return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, an(a) ? (y = !0, Eo(r)) : y = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, ua(r), c.updater = Ms, r.stateNode = c, c._reactInternals = r, zr(r, a, n, o), r = Cn(null, r, a, !0, y, o)) : (r.tag = 0, Pt && y && Ss(r), dn(null, r, c, o), r = r.child), r;
        case 16:
          a = r.elementType;
          e: {
            switch (As(n, r), n = r.pendingProps, c = a._init, a = c(a._payload), r.type = a, c = r.tag = vd(a), n = ir(a, n), c) {
              case 0:
                r = Ur(null, r, a, n, o);
                break e;
              case 1:
                r = vn(null, r, a, n, o);
                break e;
              case 11:
                r = El(null, r, a, n, o);
                break e;
              case 14:
                r = io(null, r, a, ir(a.type, n), o);
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
          return a = r.type, c = r.pendingProps, c = r.elementType === a ? c : ir(a, c), Ur(n, r, a, c, o);
        case 1:
          return a = r.type, c = r.pendingProps, c = r.elementType === a ? c : ir(a, c), vn(n, r, a, c, o);
        case 3:
          e: {
            if (Ti(r), n === null) throw Error(f(387));
            a = r.pendingProps, y = r.memoizedState, c = y.element, ac(n, r), wi(r, a, null, o);
            var V = r.memoizedState;
            if (a = V.element, Ue && y.isDehydrated) if (y = { element: a, isDehydrated: !1, cache: V.cache, pendingSuspenseBoundaries: V.pendingSuspenseBoundaries, transitions: V.transitions }, r.updateQueue.baseState = y, r.memoizedState = y, r.flags & 256) {
              c = ro(Error(f(423)), r), r = oo(n, r, a, o, c);
              break e;
            } else if (a !== c) {
              c = ro(Error(f(424)), r), r = oo(n, r, a, o, c);
              break e;
            } else for (Ue && (In = Zl(r.stateNode.containerInfo), mn = r, Pt = !0, Tr = null, xs = !1), o = sc(r, null, a, o), r.child = o; o; ) o.flags = o.flags & -3 | 4096, o = o.sibling;
            else {
              if (qi(), a === c) {
                r = si(n, r, o);
                break e;
              }
              dn(n, r, a, o);
            }
            r = r.child;
          }
          return r;
        case 5:
          return ca(r), n === null && ia(r), a = r.type, c = r.pendingProps, y = n !== null ? n.memoizedProps : null, V = c.children, ge(a, c) ? V = null : y !== null && ge(a, y) && (r.flags |= 32), vt(n, r), dn(n, r, V, o), r.child;
        case 6:
          return n === null && ia(r), null;
        case 13:
          return Ra(n, r, o);
        case 4:
          return hl(r, r.stateNode.containerInfo), a = r.pendingProps, n === null ? r.child = Yi(r, null, a, o) : dn(n, r, a, o), r.child;
        case 11:
          return a = r.type, c = r.pendingProps, c = r.elementType === a ? c : ir(a, c), El(n, r, a, c, o);
        case 7:
          return dn(n, r, r.pendingProps, o), r.child;
        case 8:
          return dn(n, r, r.pendingProps.children, o), r.child;
        case 12:
          return dn(n, r, r.pendingProps.children, o), r.child;
        case 10:
          e: {
            if (a = r.type._context, c = r.pendingProps, y = r.memoizedProps, V = c.value, lc(r, a, V), y !== null) if (Er(y.value, V)) {
              if (y.children === c.children && !qn.current) {
                r = si(n, r, o);
                break e;
              }
            } else for (y = r.child, y !== null && (y.return = r); y !== null; ) {
              var ne = y.dependencies;
              if (ne !== null) {
                V = y.child;
                for (var he = ne.firstContext; he !== null; ) {
                  if (he.context === a) {
                    if (y.tag === 1) {
                      he = ni(-1, o & -o), he.tag = 2;
                      var xe = y.updateQueue;
                      if (xe !== null) {
                        xe = xe.shared;
                        var Ae = xe.pending;
                        Ae === null ? he.next = he : (he.next = Ae.next, Ae.next = he), xe.pending = he;
                      }
                    }
                    y.lanes |= o, he = y.alternate, he !== null && (he.lanes |= o), Xi(y.return, o, r), ne.lanes |= o;
                    break;
                  }
                  he = he.next;
                }
              } else if (y.tag === 10) V = y.type === r.type ? null : y.child;
              else if (y.tag === 18) {
                if (V = y.return, V === null) throw Error(f(341));
                V.lanes |= o, ne = V.alternate, ne !== null && (ne.lanes |= o), Xi(V, o, r), V = y.sibling;
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
            dn(n, r, c.children, o), r = r.child;
          }
          return r;
        case 9:
          return c = r.type, a = r.pendingProps.children, Oo(r, o), c = tr(c), a = a(c), r.flags |= 1, dn(n, r, a, o), r.child;
        case 14:
          return a = r.type, c = ir(a, r.pendingProps), c = ir(a.type, c), io(n, r, a, c, o);
        case 15:
          return oi(n, r, r.type, r.pendingProps, o);
        case 17:
          return a = r.type, c = r.pendingProps, c = r.elementType === a ? c : ir(a, c), As(n, r), r.tag = 1, an(a) ? (n = !0, Eo(r)) : n = !1, Oo(r, o), gc(r, a, c), zr(r, a, c, o), Cn(null, r, a, !0, n, o);
        case 19:
          return Rl(n, r, o);
        case 22:
          return xt(n, r, o);
      }
      throw Error(f(156, r.tag));
    };
    function Ga(n, r) {
      return Dr(n, r);
    }
    function Tc(n, r, o, a) {
      this.tag = n, this.key = o, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
    }
    function cr(n, r, o, a) {
      return new Tc(n, r, o, a);
    }
    function ts(n) {
      return n = n.prototype, !(!n || !n.isReactComponent);
    }
    function vd(n) {
      if (typeof n == "function") return ts(n) ? 1 : 0;
      if (n != null) {
        if (n = n.$$typeof, n === P) return 11;
        if (n === _) return 14;
      }
      return 2;
    }
    function zi(n, r) {
      var o = n.alternate;
      return o === null ? (o = cr(n.tag, r, n.key, n.mode), o.elementType = n.elementType, o.type = n.type, o.stateNode = n.stateNode, o.alternate = n, n.alternate = o) : (o.pendingProps = r, o.type = n.type, o.flags = 0, o.subtreeFlags = 0, o.deletions = null), o.flags = n.flags & 14680064, o.childLanes = n.childLanes, o.lanes = n.lanes, o.child = n.child, o.memoizedProps = n.memoizedProps, o.memoizedState = n.memoizedState, o.updateQueue = n.updateQueue, r = n.dependencies, o.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, o.sibling = n.sibling, o.index = n.index, o.ref = n.ref, o;
    }
    function Vl(n, r, o, a, c, y) {
      var V = 2;
      if (a = n, typeof n == "function") ts(n) && (V = 1);
      else if (typeof n == "string") V = 5;
      else e: switch (n) {
        case k:
          return _n(o.children, c, y, r);
        case M:
          V = 8, c |= 8;
          break;
        case E:
          return n = cr(12, o, r, c | 2), n.elementType = E, n.lanes = y, n;
        case O:
          return n = cr(13, o, r, c), n.elementType = O, n.lanes = y, n;
        case j:
          return n = cr(19, o, r, c), n.elementType = j, n.lanes = y, n;
        case R:
          return ns(o, c, y, r);
        default:
          if (typeof n == "object" && n !== null) switch (n.$$typeof) {
            case S:
              V = 10;
              break e;
            case w:
              V = 9;
              break e;
            case P:
              V = 11;
              break e;
            case _:
              V = 14;
              break e;
            case h:
              V = 16, a = null;
              break e;
          }
          throw Error(f(130, n == null ? n : typeof n, ""));
      }
      return r = cr(V, o, r, c), r.elementType = n, r.type = a, r.lanes = y, r;
    }
    function _n(n, r, o, a) {
      return n = cr(7, n, a, r), n.lanes = o, n;
    }
    function ns(n, r, o, a) {
      return n = cr(22, n, a, r), n.elementType = R, n.lanes = o, n.stateNode = { isHidden: !1 }, n;
    }
    function rs(n, r, o) {
      return n = cr(6, n, null, r), n.lanes = o, n;
    }
    function Hl(n, r, o) {
      return r = cr(4, n.children !== null ? n.children : [], n.key, r), r.lanes = o, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
    }
    function Nc(n, r, o, a, c) {
      this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = ae, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = To(0), this.expirationTimes = To(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = To(0), this.identifierPrefix = a, this.onRecoverableError = c, Ue && (this.mutableSourceEagerHydrationData = null);
    }
    function Ua(n, r, o, a, c, y, V, ne, he) {
      return n = new Nc(n, r, o, ne, he), r === 1 ? (r = 1, y === !0 && (r |= 8)) : r = 0, y = cr(3, null, null, r), n.current = y, y.stateNode = n, y.memoizedState = { element: a, isDehydrated: o, cache: null, transitions: null, pendingSuspenseBoundaries: null }, ua(y), n;
    }
    function jl(n) {
      if (!n) return mi;
      n = n._reactInternals;
      e: {
        if (B(n) !== n || n.tag !== 1) throw Error(f(170));
        var r = n;
        do {
          switch (r.tag) {
            case 3:
              r = r.stateNode.context;
              break e;
            case 1:
              if (an(r.type)) {
                r = r.stateNode.__reactInternalMemoizedMergedChildContext;
                break e;
              }
          }
          r = r.return;
        } while (r !== null);
        throw Error(f(171));
      }
      if (n.tag === 1) {
        var o = n.type;
        if (an(o)) return Xu(n, o, r);
      }
      return r;
    }
    function go(n) {
      var r = n._reactInternals;
      if (r === void 0)
        throw typeof n.render == "function" ? Error(f(188)) : (n = Object.keys(n).join(","), Error(f(268, n)));
      return n = Z(r), n === null ? null : n.stateNode;
    }
    function Wl(n, r) {
      if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
        var o = n.retryLane;
        n.retryLane = o !== 0 && o < r ? o : r;
      }
    }
    function is(n, r) {
      Wl(n, r), (n = n.alternate) && Wl(n, r);
    }
    function _d(n) {
      return n = Z(n), n === null ? null : n.stateNode;
    }
    function Mc() {
      return null;
    }
    return v.attemptContinuousHydration = function(n) {
      if (n.tag === 13) {
        var r = Nr(n, 134217728);
        if (r !== null) {
          var o = Rt();
          Pn(r, n, 134217728, o);
        }
        is(n, 134217728);
      }
    }, v.attemptDiscreteHydration = function(n) {
      if (n.tag === 13) {
        var r = Nr(n, 1);
        if (r !== null) {
          var o = Rt();
          Pn(r, n, 1, o);
        }
        is(n, 1);
      }
    }, v.attemptHydrationAtCurrentPriority = function(n) {
      if (n.tag === 13) {
        var r = nn(n), o = Nr(n, r);
        if (o !== null) {
          var a = Rt();
          Pn(o, n, r, a);
        }
        is(n, r);
      }
    }, v.attemptSynchronousHydration = function(n) {
      switch (n.tag) {
        case 3:
          var r = n.stateNode;
          if (r.current.memoizedState.isDehydrated) {
            var o = Po(r.pendingLanes);
            o !== 0 && (Ir(r, o | 1), Rn(r, un()), (be & 6) === 0 && (mt(), gn()));
          }
          break;
        case 13:
          La(function() {
            var a = Nr(n, 1);
            if (a !== null) {
              var c = Rt();
              Pn(a, n, 1, c);
            }
          }), is(n, 1);
      }
    }, v.batchedUpdates = function(n, r) {
      var o = be;
      be |= 1;
      try {
        return n(r);
      } finally {
        be = o, be === 0 && (mt(), Fo && gn());
      }
    }, v.createComponentSelector = function(n) {
      return { $$typeof: li, value: n };
    }, v.createContainer = function(n, r, o, a, c, y, V) {
      return Ua(n, r, !1, null, o, a, c, y, V);
    }, v.createHasPseudoClassSelector = function(n) {
      return { $$typeof: Un, value: n };
    }, v.createHydrationContainer = function(n, r, o, a, c, y, V, ne, he) {
      return n = Ua(o, a, !0, n, c, y, V, ne, he), n.context = jl(null), o = n.current, a = Rt(), c = nn(o), y = ni(a, c), y.callback = r ?? null, ri(o, y, c), n.current.lanes = c, pr(n, c, a), Rn(n, a), n;
    }, v.createPortal = function(n, r, o) {
      var a = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return { $$typeof: x, key: a == null ? null : "" + a, children: n, containerInfo: r, implementation: o };
    }, v.createRoleSelector = function(n) {
      return { $$typeof: Vr, value: n };
    }, v.createTestNameSelector = function(n) {
      return { $$typeof: Ko, value: n };
    }, v.createTextSelector = function(n) {
      return { $$typeof: zs, value: n };
    }, v.deferredUpdates = function(n) {
      var r = rt, o = Gt.transition;
      try {
        return Gt.transition = null, rt = 16, n();
      } finally {
        rt = r, Gt.transition = o;
      }
    }, v.discreteUpdates = function(n, r, o, a, c) {
      var y = rt, V = Gt.transition;
      try {
        return Gt.transition = null, rt = 1, n(r, o, a, c);
      } finally {
        rt = y, Gt.transition = V, be === 0 && mt();
      }
    }, v.findAllNodes = Wr, v.findBoundingRects = function(n, r) {
      if (!St) throw Error(f(363));
      r = Wr(n, r), n = [];
      for (var o = 0; o < r.length; o++) n.push(dt(r[o]));
      for (r = n.length - 1; 0 < r; r--) {
        o = n[r];
        for (var a = o.x, c = a + o.width, y = o.y, V = y + o.height, ne = r - 1; 0 <= ne; ne--) if (r !== ne) {
          var he = n[ne], xe = he.x, Ae = xe + he.width, Ke = he.y, Ne = Ke + he.height;
          if (a >= xe && y >= Ke && c <= Ae && V <= Ne) {
            n.splice(r, 1);
            break;
          } else if (a !== xe || o.width !== he.width || Ne < y || Ke > V) {
            if (!(y !== Ke || o.height !== he.height || Ae < a || xe > c)) {
              xe > a && (he.width += xe - a, he.x = a), Ae < c && (he.width = c - xe), n.splice(r, 1);
              break;
            }
          } else {
            Ke > y && (he.height += Ke - y, he.y = y), Ne < V && (he.height = V - Ke), n.splice(r, 1);
            break;
          }
        }
      }
      return n;
    }, v.findHostInstance = go, v.findHostInstanceWithNoPortals = function(n) {
      return n = X(n), n = n !== null ? ie(n) : null, n === null ? null : n.stateNode;
    }, v.findHostInstanceWithWarning = function(n) {
      return go(n);
    }, v.flushControlled = function(n) {
      var r = be;
      be |= 1;
      var o = Gt.transition, a = rt;
      try {
        Gt.transition = null, rt = 1, n();
      } finally {
        rt = a, Gt.transition = o, be = r, be === 0 && (mt(), gn());
      }
    }, v.flushPassiveEffects = ci, v.flushSync = La, v.focusWithin = function(n, r) {
      if (!St) throw Error(f(363));
      for (n = Hr(n), r = jr(n, r), r = Array.from(r), n = 0; n < r.length; ) {
        var o = r[n++];
        if (!bt(o)) {
          if (o.tag === 5 && jt(o.stateNode)) return !0;
          for (o = o.child; o !== null; ) r.push(o), o = o.sibling;
        }
      }
      return !1;
    }, v.getCurrentUpdatePriority = function() {
      return rt;
    }, v.getFindAllNodesFailureDescription = function(n, r) {
      if (!St) throw Error(f(363));
      var o = 0, a = [];
      n = [Hr(n), 0];
      for (var c = 0; c < n.length; ) {
        var y = n[c++], V = n[c++], ne = r[V];
        if ((y.tag !== 5 || !bt(y)) && (Gs(y, ne) && (a.push(Ol(ne)), V++, V > o && (o = V)), V < r.length)) for (y = y.child; y !== null; ) n.push(y, V), y = y.sibling;
      }
      if (o < r.length) {
        for (n = []; o < r.length; o++) n.push(Ol(r[o]));
        return `findAllNodes was able to match part of the selector:
  ` + (a.join(" > ") + `

No matching component was found for:
  `) + n.join(" > ");
      }
      return null;
    }, v.getPublicRootInstance = function(n) {
      if (n = n.current, !n.child) return null;
      switch (n.child.tag) {
        case 5:
          return me(n.child.stateNode);
        default:
          return n.child.stateNode;
      }
    }, v.injectIntoDevTools = function(n) {
      if (n = { bundleType: n.bundleType, version: n.version, rendererPackageName: n.rendererPackageName, rendererConfig: n.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: g.ReactCurrentDispatcher, findHostInstanceByFiber: _d, findFiberByHostInstance: n.findFiberByHostInstance || Mc, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1" }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u") n = !1;
      else {
        var r = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (r.isDisabled || !r.supportsFiber) n = !0;
        else {
          try {
            vi = r.inject(n), Kn = r;
          } catch {
          }
          n = !!r.checkDCE;
        }
      }
      return n;
    }, v.isAlreadyRendering = function() {
      return !1;
    }, v.observeVisibleRects = function(n, r, o, a) {
      if (!St) throw Error(f(363));
      n = Wr(n, r);
      var c = Ot(n, o, a).disconnect;
      return { disconnect: function() {
        c();
      } };
    }, v.registerMutableSourceForHydration = function(n, r) {
      var o = r._getVersion;
      o = o(r._source), n.mutableSourceEagerHydrationData == null ? n.mutableSourceEagerHydrationData = [r, o] : n.mutableSourceEagerHydrationData.push(r, o);
    }, v.runWithPriority = function(n, r) {
      var o = rt;
      try {
        return rt = n, r();
      } finally {
        rt = o;
      }
    }, v.shouldError = function() {
      return null;
    }, v.shouldSuspend = function() {
      return !1;
    }, v.updateContainer = function(n, r, o, a) {
      var c = r.current, y = Rt(), V = nn(c);
      return o = jl(o), r.context === null ? r.context = o : r.pendingContext = o, r = ni(y, V), r.payload = { element: n }, a = a === void 0 ? null : a, a !== null && (r.callback = a), n = ri(c, r, V), n !== null && (Pn(n, c, V, y), ks(n, c, V)), V;
    }, v;
  }), of;
}
var p0;
function Sp() {
  return p0 || (p0 = 1, rf.exports = _p()), rf.exports;
}
var wp = Sp();
const xp = /* @__PURE__ */ id(wp);
var sf = { exports: {} }, hs = {};
/**
 * @license React
 * react-reconciler-constants.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var g0;
function Cp() {
  return g0 || (g0 = 1, hs.ConcurrentRoot = 1, hs.ContinuousEventPriority = 4, hs.DefaultEventPriority = 16, hs.DiscreteEventPriority = 1, hs.IdleEventPriority = 536870912, hs.LegacyRoot = 0), hs;
}
var m0;
function kp() {
  return m0 || (m0 = 1, sf.exports = Cp()), sf.exports;
}
var j0 = kp(), Ep = et();
const y0 = {
  children: !0,
  ref: !0,
  key: !0,
  style: !0,
  forwardedRef: !0,
  unstable_applyCache: !0,
  unstable_applyDrawHitFromCache: !0
};
let v0 = !1, _0 = !1;
const Sf = ".react-konva-event", Pp = `ReactKonva: You have a Konva node with draggable = true and position defined but no onDragMove or onDragEnd events are handled.
Position of a node will be changed during drag&drop, so you should update state of the react app as well.
Consider to add onDragMove or onDragEnd events.
For more info see: https://github.com/konvajs/react-konva/issues/256
`, Rp = `ReactKonva: You are using "zIndex" attribute for a Konva node.
react-konva may get confused with ordering. Just define correct order of elements in your render function of a component.
For more info see: https://github.com/konvajs/react-konva/issues/194
`, Tp = {};
function ld(l, d, v = Tp) {
  if (!v0 && "zIndex" in d && (console.warn(Rp), v0 = !0), !_0 && d.draggable) {
    var A = d.x !== void 0 || d.y !== void 0, F = d.onDragEnd || d.onDragMove;
    A && !F && (console.warn(Pp), _0 = !0);
  }
  for (var C in v)
    if (!y0[C]) {
      var f = C.slice(0, 2) === "on", g = v[C] !== d[C];
      if (f && g) {
        var m = C.substr(2).toLowerCase();
        m.substr(0, 7) === "content" && (m = "content" + m.substr(7, 1).toUpperCase() + m.substr(8)), l.off(m, v[C]);
      }
      var x = !d.hasOwnProperty(C);
      x && l.setAttr(C, void 0);
    }
  var k = d._useStrictMode, M = {}, E = !1;
  const S = {};
  for (var C in d)
    if (!y0[C]) {
      var f = C.slice(0, 2) === "on", w = v[C] !== d[C];
      if (f && w) {
        var m = C.substr(2).toLowerCase();
        m.substr(0, 7) === "content" && (m = "content" + m.substr(7, 1).toUpperCase() + m.substr(8)), d[C] && (S[m] = d[C]);
      }
      !f && (d[C] !== v[C] || k && d[C] !== l.getAttr(C)) && (E = !0, M[C] = d[C]);
    }
  E && (l.setAttrs(M), gs(l));
  for (var m in S)
    l.on(m + Sf, S[m]);
}
function gs(l) {
  if (!Ep.Konva.autoDrawEnabled) {
    var d = l.getLayer() || l.getStage();
    d && d.batchDraw();
  }
}
var lf = gf();
const W0 = {}, Np = {};
Uu.Node.prototype._applyProps = ld;
function Mp(l, d) {
  if (typeof d == "string") {
    console.error(`Do not use plain text as child of Konva.Node. You are using text: ${d}`);
    return;
  }
  l.add(d), gs(l);
}
function Fp(l, d, v) {
  let A = Uu[l];
  A || (console.error(`Konva has no node with the type ${l}. Group will be used instead. If you use minimal version of react-konva, just import required nodes into Konva: "import "konva/lib/shapes/${l}"  If you want to render DOM elements as part of canvas tree take a look into this demo: https://konvajs.github.io/docs/react/DOM_Portal.html`), A = Uu.Group);
  const F = {}, C = {};
  for (var f in d) {
    var g = f.slice(0, 2) === "on";
    g ? C[f] = d[f] : F[f] = d[f];
  }
  const m = new A(F);
  return ld(m, C), m;
}
function Lp(l, d, v) {
  console.error(`Text components are not supported for now in ReactKonva. Your text is: "${l}"`);
}
function Ap(l, d, v) {
  return !1;
}
function Op(l) {
  return l;
}
function Ip() {
  return null;
}
function Dp() {
  return null;
}
function zp(l, d, v, A) {
  return Np;
}
function Gp() {
}
function Up(l) {
}
function Bp(l, d) {
  return !1;
}
function Vp() {
  return W0;
}
function Hp() {
  return W0;
}
const jp = setTimeout, Wp = clearTimeout, qp = -1;
function Kp(l, d) {
  return !1;
}
const Yp = !1, Xp = !0, Qp = !0;
function bp(l, d) {
  d.parent === l ? d.moveToTop() : l.add(d), gs(l);
}
function Jp(l, d) {
  d.parent === l ? d.moveToTop() : l.add(d), gs(l);
}
function q0(l, d, v) {
  d._remove(), l.add(d), d.setZIndex(v.getZIndex()), gs(l);
}
function Zp(l, d, v) {
  q0(l, d, v);
}
function $p(l, d) {
  d.destroy(), d.off(Sf), gs(l);
}
function eg(l, d) {
  d.destroy(), d.off(Sf), gs(l);
}
function tg(l, d, v) {
  console.error(`Text components are not yet supported in ReactKonva. You text is: "${v}"`);
}
function ng(l, d, v) {
}
function rg(l, d, v, A, F) {
  ld(l, F, A);
}
function ig(l) {
  l.hide(), gs(l);
}
function og(l) {
}
function sg(l, d) {
  (d.visible == null || d.visible) && l.show();
}
function lg(l, d) {
}
function ag(l) {
}
function ug() {
}
const cg = () => j0.DefaultEventPriority, dg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  appendChild: bp,
  appendChildToContainer: Jp,
  appendInitialChild: Mp,
  cancelTimeout: Wp,
  clearContainer: ag,
  commitMount: ng,
  commitTextUpdate: tg,
  commitUpdate: rg,
  createInstance: Fp,
  createTextInstance: Lp,
  detachDeletedInstance: ug,
  finalizeInitialChildren: Ap,
  getChildHostContext: Hp,
  getCurrentEventPriority: cg,
  getPublicInstance: Op,
  getRootHostContext: Vp,
  hideInstance: ig,
  hideTextInstance: og,
  idlePriority: lf.unstable_IdlePriority,
  insertBefore: q0,
  insertInContainerBefore: Zp,
  isPrimaryRenderer: Yp,
  noTimeout: qp,
  now: lf.unstable_now,
  prepareForCommit: Ip,
  preparePortalMount: Dp,
  prepareUpdate: zp,
  removeChild: $p,
  removeChildFromContainer: eg,
  resetAfterCommit: Gp,
  resetTextContent: Up,
  run: lf.unstable_runWithPriority,
  scheduleTimeout: jp,
  shouldDeprioritizeSubtree: Bp,
  shouldSetTextContent: Kp,
  supportsMutation: Qp,
  unhideInstance: sg,
  unhideTextInstance: lg,
  warnsIfNotActing: Xp
}, Symbol.toStringTag, { value: "Module" }));
var fg = Object.defineProperty, hg = Object.defineProperties, pg = Object.getOwnPropertyDescriptors, S0 = Object.getOwnPropertySymbols, gg = Object.prototype.hasOwnProperty, mg = Object.prototype.propertyIsEnumerable, w0 = (l, d, v) => d in l ? fg(l, d, { enumerable: !0, configurable: !0, writable: !0, value: v }) : l[d] = v, x0 = (l, d) => {
  for (var v in d || (d = {}))
    gg.call(d, v) && w0(l, v, d[v]);
  if (S0)
    for (var v of S0(d))
      mg.call(d, v) && w0(l, v, d[v]);
  return l;
}, yg = (l, d) => hg(l, pg(d)), C0, k0;
typeof window < "u" && ((C0 = window.document) != null && C0.createElement || ((k0 = window.navigator) == null ? void 0 : k0.product) === "ReactNative") ? Le.useLayoutEffect : Le.useEffect;
function K0(l, d, v) {
  if (!l)
    return;
  if (v(l) === !0)
    return l;
  let A = l.child;
  for (; A; ) {
    const F = K0(A, d, v);
    if (F)
      return F;
    A = A.sibling;
  }
}
function Y0(l) {
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
const E0 = console.error;
console.error = function() {
  const l = [...arguments].join("");
  if (l != null && l.startsWith("Warning:") && l.includes("useContext")) {
    console.error = E0;
    return;
  }
  return E0.apply(this, arguments);
};
const wf = Y0(Le.createContext(null));
class X0 extends Le.Component {
  render() {
    return /* @__PURE__ */ Le.createElement(wf.Provider, {
      value: this._reactInternals
    }, this.props.children);
  }
}
function vg() {
  const l = Le.useContext(wf);
  if (l === null)
    throw new Error("its-fine: useFiber must be called within a <FiberProvider />!");
  const d = Le.useId();
  return Le.useMemo(() => {
    for (const A of [l, l == null ? void 0 : l.alternate]) {
      if (!A)
        continue;
      const F = K0(A, !1, (C) => {
        let f = C.memoizedState;
        for (; f; ) {
          if (f.memoizedState === d)
            return !0;
          f = f.next;
        }
      });
      if (F)
        return F;
    }
  }, [l, d]);
}
function _g() {
  const l = vg(), [d] = Le.useState(() => /* @__PURE__ */ new Map());
  d.clear();
  let v = l;
  for (; v; ) {
    if (v.type && typeof v.type == "object") {
      const F = v.type._context === void 0 && v.type.Provider === v.type ? v.type : v.type._context;
      F && F !== wf && !d.has(F) && d.set(F, Le.useContext(Y0(F)));
    }
    v = v.return;
  }
  return d;
}
function Sg() {
  const l = _g();
  return Le.useMemo(
    () => Array.from(l.keys()).reduce(
      (d, v) => (A) => /* @__PURE__ */ Le.createElement(d, null, /* @__PURE__ */ Le.createElement(v.Provider, yg(x0({}, A), {
        value: l.get(v)
      }))),
      (d) => /* @__PURE__ */ Le.createElement(X0, x0({}, d))
    ),
    [l]
  );
}
function wg(l) {
  const d = fr.useRef({});
  return fr.useLayoutEffect(() => {
    d.current = l;
  }), fr.useLayoutEffect(() => () => {
    d.current = {};
  }, []), d.current;
}
const xg = (l) => {
  const d = fr.useRef(null), v = fr.useRef(null), A = fr.useRef(null), F = wg(l), C = Sg(), f = (g) => {
    const { forwardedRef: m } = l;
    m && (typeof m == "function" ? m(g) : m.current = g);
  };
  return fr.useLayoutEffect(() => (v.current = new Uu.Stage({
    width: l.width,
    height: l.height,
    container: d.current
  }), f(v.current), A.current = zu.createContainer(v.current, j0.LegacyRoot, !1, null), zu.updateContainer(fr.createElement(C, {}, l.children), A.current), () => {
    Uu.isBrowser && (f(null), zu.updateContainer(null, A.current, null), v.current.destroy());
  }), []), fr.useLayoutEffect(() => {
    f(v.current), ld(v.current, l, F), zu.updateContainer(fr.createElement(C, {}, l.children), A.current, null);
  }), fr.createElement("div", {
    ref: d,
    id: l.id,
    accessKey: l.accessKey,
    className: l.className,
    role: l.role,
    style: l.style,
    tabIndex: l.tabIndex,
    title: l.title
  });
}, P0 = "Layer", Du = "Group", Xs = "Rect", xf = "Circle", Qs = "Line", Cg = "Image", kg = "Transformer", zu = xp(dg);
zu.injectIntoDevTools({
  // @ts-ignore
  findHostInstanceByFiber: () => null,
  bundleType: 0,
  version: fr.version,
  rendererPackageName: "react-konva"
});
const Eg = fr.forwardRef((l, d) => fr.createElement(X0, {}, fr.createElement(xg, { ...l, forwardedRef: d })));
var af, R0;
function Pg() {
  if (R0) return af;
  R0 = 1;
  var l = Bu();
  return af = function(v, A, F) {
    const C = l.useRef("loading"), f = l.useRef(), [g, m] = l.useState(0), x = l.useRef(), k = l.useRef(), M = l.useRef();
    return (x.current !== v || k.current !== A || M.current !== F) && (C.current = "loading", f.current = void 0, x.current = v, k.current = A, M.current = F), l.useLayoutEffect(
      function() {
        if (!v) return;
        var E = document.createElement("img");
        function S() {
          E.decode().catch(() => {
          }).finally(() => {
            C.current = "loaded", f.current = E, m(Math.random());
          });
        }
        function w() {
          C.current = "failed", f.current = void 0, m(Math.random());
        }
        return E.addEventListener("load", S), E.addEventListener("error", w), A && (E.crossOrigin = A), F && (E.referrerPolicy = F), E.src = v, function() {
          E.removeEventListener("load", S), E.removeEventListener("error", w);
        };
      },
      [v, A, F]
    ), [f.current, C.current];
  }, af;
}
var Rg = Pg();
const Tg = /* @__PURE__ */ id(Rg);
function Cf(l = "") {
  return { version: "konva-1", background: l, objects: [] };
}
function Ou(l) {
  return JSON.parse(JSON.stringify(l));
}
function ps() {
  return `obj_${Math.random().toString(36).slice(2, 10)}_${Date.now().toString(36)}`;
}
function uf(l) {
  return !l || !Array.isArray(l.objects) ? Cf((l == null ? void 0 : l.background) ?? "") : {
    version: l.version || "konva-1",
    background: l.background ?? "",
    objects: l.objects.filter(Boolean),
    meta: l.meta ? { ...l.meta } : void 0
  };
}
const Ng = {
  allow_select: !0,
  allow_drag: !0,
  allow_rotate: !0,
  allow_scale: !0,
  allow_delete: !0,
  respect_object_locks: !0
}, Mg = [
  "top-left",
  "top-right",
  "bottom-left",
  "bottom-right",
  "middle-left",
  "middle-right",
  "top-center",
  "bottom-center"
];
function Fg(l) {
  return l.objects.some(
    (d) => d.locked === !0 || d.groupId !== void 0 || d.type === "group" || d.draggable === !1 || d.selectable === !1 || d.scalable === !1 || d.rotatable === !1 || d.deletable === !1 || d.listening === !1 || d.dragConstraint !== void 0
  );
}
function Lg(l, d) {
  const v = {
    ...Ng,
    ...l ?? {}
  };
  return !l && !Fg(d) ? { ...v, respect_object_locks: !1 } : v;
}
function Ag(l, d) {
  return l === "transform" || l === "rect_crop" && d.type === "crop";
}
function Og(l, d) {
  return l === "transform" || l === "rect_crop" && d.type === "crop";
}
function rd(l, d, v) {
  if (l.type === "group")
    return {
      selectable: !1,
      draggable: !1,
      scalable: !1,
      rotatable: !1,
      deletable: !1,
      listening: !1
    };
  const A = v.respect_object_locks && l.locked === !0;
  let F = !A && l.selectable !== !1 && l.listening !== !1 && v.allow_select && Ag(d, l);
  l.draggable === !1 && l.selectable !== !0 && (F = !1);
  const C = F && l.draggable !== !1 && v.allow_drag && Og(d, l), f = F && l.scalable !== !1 && v.allow_scale, g = F && l.rotatable !== !1 && v.allow_rotate, m = F && l.deletable !== !1 && v.allow_delete, x = l.listening !== !1 && !A;
  return {
    selectable: F,
    draggable: C,
    scalable: f,
    rotatable: g,
    deletable: m,
    listening: x
  };
}
function Ig(l) {
  const d = Math.hypot(l.x, l.y);
  return d < 1e-9 ? { x: 1, y: 0 } : { x: l.x / d, y: l.y / d };
}
function Dg(l, d, v, A, F) {
  const C = Ig(v), f = l.x - d.x, g = l.y - d.y;
  let m = f * C.x + g * C.y;
  return A != null && (m = Math.max(A, m)), F != null && (m = Math.min(F, m)), {
    x: d.x + m * C.x,
    y: d.y + m * C.y
  };
}
function Q0(l, d) {
  return l.type === "group" || l.dragConstraint ? null : l.groupId ? l.groupId : null;
}
function b0(l) {
  const d = /* @__PURE__ */ new Map();
  for (const A of l.objects)
    A.type === "group" && d.set(A.id, A);
  const v = /* @__PURE__ */ new Map();
  for (const A of l.objects) {
    const F = Q0(A);
    if (!F) continue;
    const C = v.get(F) ?? [];
    C.push(A), v.set(F, C);
  }
  return Array.from(v.entries()).map(([A, F]) => ({
    groupId: A,
    descriptor: d.get(A),
    members: F
  }));
}
function zg(l) {
  const d = /* @__PURE__ */ new Set();
  for (const v of b0(l))
    for (const A of v.members)
      d.add(A.id);
  return l.objects.filter(
    (v) => v.type !== "group" && !d.has(v.id)
  );
}
function T0(l, d, v) {
  const A = l.descriptor, F = {
    id: l.groupId,
    type: "rect",
    locked: A == null ? void 0 : A.locked,
    draggable: A == null ? void 0 : A.draggable,
    selectable: A == null ? void 0 : A.selectable,
    listening: A == null ? void 0 : A.listening,
    scalable: (A == null ? void 0 : A.scalable) ?? !1,
    rotatable: A == null ? void 0 : A.rotatable,
    deletable: A == null ? void 0 : A.deletable
  };
  return rd(F, d, v);
}
function J0(l) {
  return `group-wrap-${l}`;
}
function Jc(l) {
  return l.startsWith("group-wrap-") ? l.slice(11) : null;
}
function Gg(l, d) {
  const v = Q0(l);
  return v ? J0(v) : l.id;
}
function Ug(l, d) {
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
function Bg(l, d) {
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
function Vg(l, d, v, A, F) {
  const C = l.x ?? 0, f = l.y ?? 0, g = l.points ?? [], m = Math.cos(A * Math.PI / 180), x = Math.sin(A * Math.PI / 180), k = [];
  for (let M = 0; M < g.length; M += 2) {
    const E = (g[M] ?? 0) + C, S = (g[M + 1] ?? 0) + f, w = E * F, P = S * F, O = w * m - P * x + d, j = w * x + P * m + v;
    k.push(O, j);
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
function Hg(l, d, v, A = 0, F = 1) {
  if (l.type === "rect" || l.type === "crop") {
    const C = Math.max(1, (l.width ?? 0) * F), f = Math.max(1, (l.height ?? 0) * F);
    return {
      ...l,
      x: d,
      y: v,
      width: C,
      height: f,
      rotation: (l.rotation ?? 0) + A,
      scaleX: 1,
      scaleY: 1
    };
  }
  return l.type === "circle" || l.type === "point" ? {
    ...l,
    x: d,
    y: v,
    rotation: (l.rotation ?? 0) + A,
    radius: Math.max(1, (l.radius ?? 1) * F),
    scaleX: 1,
    scaleY: 1
  } : l.type === "line" || l.type === "polygon" || l.type === "freedraw" || l.type === "spline" ? Vg(l, d, v, A, F) : { ...l, x: d, y: v, rotation: (l.rotation ?? 0) + A };
}
function jg(l, d, v) {
  return l.objects.map((A) => v.get(A.id) ?? A);
}
function Wg(l) {
  let d = l;
  for (; d; ) {
    if (d.getClassName() === "Transformer") return !0;
    d = d.getParent();
  }
  return !1;
}
const ff = 0.5, qg = 2;
function Kg(l) {
  return Math.floor(l.length / 2);
}
function Yg(l) {
  const d = [];
  for (let v = 0; v + 1 < l.length; v += 2)
    d.push([l[v] ?? 0, l[v + 1] ?? 0]);
  return d;
}
function Xg(l) {
  return Kg(l) >= qg;
}
function hf(l) {
  return (l == null ? void 0 : l.kind) === "polygon" || (l == null ? void 0 : l.kind) === "spline";
}
function N0(l) {
  var d;
  return hf(l) && (((d = l.points) == null ? void 0 : d.length) ?? 0) > 0;
}
function M0(l) {
  return l.points.length <= 2 ? null : { ...l, points: l.points.slice(0, -2) };
}
function Qg(l, d) {
  return d.type !== "spline" ? !1 : l || d.showControlPoints === !0;
}
function bg(l) {
  return `${l}__control-points`;
}
function F0(l) {
  return l.type === "freedraw" ? 0.5 : l.type === "spline" ? l.tension ?? ff : 0;
}
const Z0 = ({
  points: l,
  offsetX: d = 0,
  offsetY: v = 0,
  stroke: A,
  radius: F,
  groupId: C
}) => {
  const f = Yg(l);
  return /* @__PURE__ */ Be.jsx(Du, { id: C, listening: !1, children: f.map(([g, m], x) => /* @__PURE__ */ Be.jsx(
    xf,
    {
      x: d + g,
      y: v + m,
      radius: F,
      stroke: A,
      strokeWidth: 2,
      fill: "white",
      listening: !1
    },
    x
  )) });
}, $0 = "rgba(0,0,0,0.001)";
function Jg(l) {
  return !l || l === "transparent" ? $0 : l;
}
function Iu(l, d) {
  return {
    scale: 1,
    x: l / 2,
    y: d / 2,
    rotation: 0
  };
}
const L0 = ({
  obj: l,
  interaction: d,
  splineShowControlPoints: v,
  splineControlPointRadius: A,
  onSelect: F,
  onDragEnd: C,
  onTransformEnd: f
}) => {
  const g = Le.useRef(null);
  if (l.type === "group") return null;
  const m = {
    id: l.id,
    draggable: d.draggable,
    listening: d.listening,
    rotation: l.rotation ?? 0,
    scaleX: l.scaleX ?? 1,
    scaleY: l.scaleY ?? 1,
    onClick: d.selectable ? F : void 0,
    onTap: d.selectable ? F : void 0,
    onDragStart: (x) => {
      d.draggable && (g.current = { x: x.target.x(), y: x.target.y() });
    },
    onDragMove: (x) => {
      if (!d.draggable || !g.current) return;
      const k = l.dragConstraint;
      if (!k || k.type !== "axis" || !k.axis) return;
      const M = Dg(
        { x: x.target.x(), y: x.target.y() },
        g.current,
        k.axis,
        k.min,
        k.max
      );
      x.target.position(M);
    },
    onDragEnd: (x) => {
      g.current = null, C(x.target);
    },
    onTransformEnd: (x) => f(x.target)
  };
  if (l.type === "rect" || l.type === "crop")
    return /* @__PURE__ */ Be.jsx(
      Xs,
      {
        ...m,
        x: l.x ?? 0,
        y: l.y ?? 0,
        width: l.width ?? 0,
        height: l.height ?? 0,
        stroke: l.stroke,
        strokeWidth: l.strokeWidth,
        fill: l.type === "crop" ? Jg(l.fill) : l.fill,
        dash: l.type === "crop" ? [8, 4] : void 0
      }
    );
  if (l.type === "circle" || l.type === "point")
    return /* @__PURE__ */ Be.jsx(
      xf,
      {
        ...m,
        x: l.x ?? 0,
        y: l.y ?? 0,
        radius: l.radius ?? 3,
        stroke: l.stroke,
        strokeWidth: l.strokeWidth,
        fill: l.fill
      }
    );
  if (l.type === "spline") {
    const x = Qg(v, l);
    return /* @__PURE__ */ Be.jsxs(Be.Fragment, { children: [
      /* @__PURE__ */ Be.jsx(
        Qs,
        {
          ...m,
          x: l.x ?? 0,
          y: l.y ?? 0,
          points: l.points ?? [],
          stroke: l.stroke,
          strokeWidth: l.strokeWidth,
          tension: F0(l),
          lineCap: "round",
          lineJoin: "round"
        }
      ),
      x && /* @__PURE__ */ Be.jsx(
        Z0,
        {
          points: l.points ?? [],
          offsetX: l.x ?? 0,
          offsetY: l.y ?? 0,
          stroke: l.stroke ?? "#000",
          radius: A,
          groupId: bg(l.id)
        }
      )
    ] });
  }
  return l.type === "line" || l.type === "freedraw" ? /* @__PURE__ */ Be.jsx(
    Qs,
    {
      ...m,
      x: l.x ?? 0,
      y: l.y ?? 0,
      points: l.points ?? [],
      stroke: l.stroke,
      strokeWidth: l.strokeWidth,
      tension: F0(l),
      lineCap: "round",
      lineJoin: "round"
    }
  ) : l.type === "polygon" ? /* @__PURE__ */ Be.jsx(
    Qs,
    {
      ...m,
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
function Zg(l, d) {
  if ((d == null ? void 0 : d.originX) != null && (d == null ? void 0 : d.originY) != null)
    return { x: d.originX, y: d.originY };
  let v = 1 / 0, A = 1 / 0, F = -1 / 0, C = -1 / 0;
  for (const f of l)
    if (f.type === "rect" || f.type === "crop") {
      const g = f.x ?? 0, m = f.y ?? 0;
      v = Math.min(v, g), A = Math.min(A, m), F = Math.max(F, g + (f.width ?? 0)), C = Math.max(C, m + (f.height ?? 0));
    } else if (f.type === "circle" || f.type === "point") {
      const g = f.x ?? 0, m = f.y ?? 0, x = f.radius ?? 0;
      v = Math.min(v, g - x), A = Math.min(A, m - x), F = Math.max(F, g + x), C = Math.max(C, m + x);
    } else if (f.points && f.points.length >= 2) {
      const g = f.x ?? 0, m = f.y ?? 0;
      for (let x = 0; x < f.points.length; x += 2) {
        const k = g + (f.points[x] ?? 0), M = m + (f.points[x + 1] ?? 0);
        v = Math.min(v, k), A = Math.min(A, M), F = Math.max(F, k), C = Math.max(C, M);
      }
    }
  return Number.isFinite(v) ? { x: (v + F) / 2, y: (A + C) / 2 } : { x: 0, y: 0 };
}
function A0(l, d, v, A) {
  const C = A.getAbsoluteTransform().copy().invert(), f = /* @__PURE__ */ new Map();
  for (const g of d.members) {
    const m = v.findOne(`#${g.id}`);
    if (!m) continue;
    const k = m.getAbsoluteTransform().copy().multiply(C).decompose();
    f.set(
      g.id,
      Hg(
        g,
        k.x,
        k.y,
        k.rotation,
        Math.max(k.scaleX, k.scaleY)
      )
    );
  }
  return v.position({ x: 0, y: 0 }), v.rotation(0), v.scale({ x: 1, y: 1 }), v.offset({ x: 0, y: 0 }), jg(l, d.groupId, f);
}
function $g(l, d) {
  if (l.type === "rect" || l.type === "crop") {
    const v = Ug(l, d);
    return d.scaleX(1), d.scaleY(1), v;
  }
  if (l.type === "circle" || l.type === "point") {
    const v = Bg(l, d);
    return d.scaleX(1), d.scaleY(1), v;
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
const pf = [
  "freedraw",
  "line",
  "rect",
  "rect_crop",
  "circle",
  "point",
  "polygon",
  "spline",
  "transform",
  "pan"
], e2 = new Set(pf), t2 = {
  freedraw: "Draw",
  line: "Line",
  rect: "Rect",
  rect_crop: "Crop",
  circle: "Circle",
  point: "Point",
  polygon: "Poly",
  spline: "Spline",
  transform: "Move",
  pan: "Pan"
};
function e1(l) {
  return typeof l == "string" && e2.has(l);
}
function t1(l) {
  if (!l || l.length === 0)
    return [...pf];
  const d = l.filter(e1);
  return d.length > 0 ? d : [...pf];
}
function Gu(l, d) {
  const v = t1(d);
  return e1(l) && v.includes(l) ? l : v[0] ?? "freedraw";
}
const n2 = 0.25, r2 = 8, Zc = 1.15, O0 = 15, $c = "rgba(0, 0, 0, 0.45)";
function i2(l, d, v, A) {
  return {
    x: Math.min(l, l + v),
    y: Math.min(d, d + A),
    width: Math.abs(v),
    height: Math.abs(A)
  };
}
const o2 = ({
  bounds: l,
  canvasWidth: d,
  canvasHeight: v
}) => {
  const { x: A, y: F, width: C, height: f } = l;
  if (C < 1 || f < 1) return null;
  const g = A + C, m = F + f;
  return /* @__PURE__ */ Be.jsxs(Be.Fragment, { children: [
    /* @__PURE__ */ Be.jsx(
      Xs,
      {
        x: 0,
        y: 0,
        width: d,
        height: F,
        fill: $c,
        listening: !1
      }
    ),
    /* @__PURE__ */ Be.jsx(
      Xs,
      {
        x: 0,
        y: m,
        width: d,
        height: Math.max(0, v - m),
        fill: $c,
        listening: !1
      }
    ),
    /* @__PURE__ */ Be.jsx(
      Xs,
      {
        x: 0,
        y: F,
        width: A,
        height: f,
        fill: $c,
        listening: !1
      }
    ),
    /* @__PURE__ */ Be.jsx(
      Xs,
      {
        x: g,
        y: F,
        width: Math.max(0, d - g),
        height: f,
        fill: $c,
        listening: !1
      }
    )
  ] });
};
function I0(l) {
  if (!l) return null;
  const d = l.getPointerPosition();
  if (!d) return null;
  const v = l.getAbsoluteTransform().copy().invert(), A = l.findOne("#viewport-content");
  return A ? A.getAbsoluteTransform().copy().invert().point(d) : v.point(d);
}
const s2 = ({
  fillColor: l,
  strokeWidth: d,
  strokeColor: v,
  backgroundColor: A,
  backgroundImageURL: F,
  realtimeUpdateStreamlit: C,
  canvasHeight: f,
  canvasWidth: g,
  drawingMode: m,
  tools: x,
  displayToolPicker: k,
  initialDrawing: M,
  displayToolbar: E,
  displayRadius: S,
  enableViewportControls: w,
  transformOptions: P,
  splineShowControlPoints: O,
  splineControlPointRadius: j,
  setStateValue: _
}) => {
  const h = Le.useRef(null), R = Le.useRef(null), D = Le.useRef(null), W = Le.useRef(null), J = Le.useRef(null), G = Le.useRef(null), B = Le.useRef(
    `${A}|${F ?? ""}`
  ), H = Le.useRef(null), X = Le.useRef(!1), Z = Le.useRef(null), [Q, ie] = Le.useState(
    () => uf(M)
  ), [ee, me] = Le.useState([
    uf(M)
  ]), [T, z] = Le.useState(0), [N, U] = Le.useState(null), [L, K] = Le.useState(null), [b, de] = Le.useState(
    () => Iu(g, f)
  ), [ge] = Tg(F ?? "", "anonymous"), [se, q] = Le.useState(
    () => Gu(m, x)
  ), re = x.join(",");
  Le.useEffect(() => {
    q(Gu(m, x));
  }, [m, re]);
  const ae = k ? se : Gu(m, x), Ce = Le.useCallback(
    (ye) => {
      q(Gu(ye, x)), U(null), K(null);
    },
    [x]
  ), Ee = Le.useMemo(
    () => Lg(P, Q),
    [P, Q]
  ), De = Le.useMemo(() => b0(Q), [Q.objects]), Ue = Le.useMemo(() => zg(Q), [Q.objects]), Qe = Le.useMemo(() => {
    if (!L) return null;
    const ye = Jc(L);
    if (ye) {
      const Te = De.find((Pe) => Pe.groupId === ye);
      return Te ? T0(Te, ae, Ee) : null;
    }
    const Se = Q.objects.find((Te) => Te.id === L);
    return Se ? rd(Se, ae, Ee) : null;
  }, [
    ae,
    De,
    Ee,
    Q.objects,
    L
  ]), We = Le.useMemo(
    () => JSON.stringify((M == null ? void 0 : M.objects) ?? []),
    [M]
  );
  Le.useEffect(() => {
    de(Iu(g, f));
  }, [g, f]), Le.useEffect(() => {
    const ye = uf(M), Se = `${A}|${F ?? ""}`, Te = B.current !== Se;
    B.current = Se;
    const Pe = H.current === null || H.current !== We;
    H.current = We, ie((Xe) => {
      if (!(Te || Pe))
        return { ...Xe, background: A };
      const ht = {
        ...ye,
        background: A
      };
      return me([Ou(ht)]), z(0), K(null), U(null), de(Iu(g, f)), ht;
    });
  }, [
    We,
    A,
    F,
    M,
    g,
    f
  ]), Le.useEffect(() => {
    var tt;
    const ye = J.current, Se = h.current;
    if (!ye || !Se) return;
    const Te = (ht, An, hr) => {
      var ln;
      ye.rotateEnabled(An), ye.resizeEnabled(hr), ye.enabledAnchors(
        hr ? [...Mg] : []
      ), G.current = ht, ye.nodes([ht]), (ln = ye.getLayer()) == null || ln.batchDraw();
    }, Pe = Q.objects.find((ht) => ht.type === "crop");
    if (ae === "rect_crop" && Pe && !N) {
      const ht = Se.findOne(`#${Pe.id}`);
      ht && Te(ht, !1, !0);
      return;
    }
    if (ae !== "transform" || !L || !Qe) {
      ye.nodes([]), G.current = null, (tt = ye.getLayer()) == null || tt.batchDraw();
      return;
    }
    const Xe = Se.findOne(`#${L}`);
    Xe && Te(
      Xe,
      Qe.rotatable,
      Qe.scalable
    );
  }, [
    L,
    Qe,
    ae,
    Q.objects,
    N
  ]);
  const At = Le.useCallback(
    (ye) => {
      me((Se) => [...Se.slice(0, T + 1), Ou(ye)]), z((Se) => Se + 1);
    },
    [T]
  ), Ze = Le.useCallback(
    (ye) => {
      const Se = R.current, Te = D.current;
      !Se || !Te || requestAnimationFrame(() => {
        const Pe = {
          x: Te.x(),
          y: Te.y(),
          scaleX: Te.scaleX(),
          scaleY: Te.scaleY(),
          rotation: Te.rotation()
        }, Xe = Iu(g, f);
        Te.position({ x: Xe.x, y: Xe.y }), Te.scale({ x: Xe.scale, y: Xe.scale }), Te.rotation(Xe.rotation);
        const tt = Te.findOne("#crop-chrome"), ht = [];
        tt && (ht.push(tt), tt.visible(!1));
        for (const ln of Q.objects) {
          if (ln.type !== "crop") continue;
          const Wt = Te.findOne(`#${ln.id}`);
          Wt && (ht.push(Wt), Wt.visible(!1));
        }
        for (const ln of Q.objects) {
          if (ln.type !== "spline") continue;
          const Wt = Te.findOne(`#${ln.id}__control-points`);
          Wt && (ht.push(Wt), Wt.visible(!1));
        }
        const An = Te.findOne("#draft-spline-control-points");
        An && (ht.push(An), An.visible(!1)), Se.batchDraw();
        const hr = Se.toDataURL({
          pixelRatio: 1,
          mimeType: "image/png",
          x: 0,
          y: 0,
          width: g,
          height: f
        });
        Te.position({ x: Pe.x, y: Pe.y }), Te.scale({ x: Pe.scaleX, y: Pe.scaleY }), Te.rotation(Pe.rotation);
        for (const ln of ht)
          ln.visible(!0);
        Se.batchDraw(), _("image_data_url", hr), _("json_data", ye);
      });
    },
    [f, g, Q.objects, _]
  ), Je = Le.useCallback(
    (ye, Se) => {
      const Te = Ou(ye);
      ie(Te), At(Te), ((Se == null ? void 0 : Se.emit) ?? C) && Ze(Te);
    },
    [Ze, At, C]
  ), Zn = Le.useCallback(() => hf(N) ? (U(M0(N)), !0) : !1, [N]), St = Le.useCallback(() => {
    if (Zn() || T <= 0) return;
    const ye = T - 1, Se = Ou(ee[ye]);
    z(ye), ie(Se), K(null), C && Ze(Se);
  }, [Ze, ee, T, C, Zn]), Wn = Le.useCallback(() => {
    if (T >= ee.length - 1) return;
    const ye = T + 1, Se = Ou(ee[ye]);
    z(ye), ie(Se), K(null), C && Ze(Se);
  }, [Ze, ee, T, C]), dt = Le.useCallback(() => {
    const ye = Cf(A);
    Je(ye, { emit: !0 }), K(null), U(null);
  }, [A, Je]), wn = Le.useCallback(() => {
    Ze(Q);
  }, [Ze, Q]), bt = Le.useCallback(() => {
    de(Iu(g, f));
  }, [f, g]);
  Le.useEffect(() => {
    const ye = (Se) => {
      const Te = Se.target;
      if (!(Te.tagName === "INPUT" || Te.tagName === "TEXTAREA")) {
        if (Se.key === "Backspace" && N0(N)) {
          Se.preventDefault(), hf(N) && U(M0(N));
          return;
        }
        Se.key === "z" && (Se.ctrlKey || Se.metaKey) && !Se.shiftKey && (Se.preventDefault(), St());
      }
    };
    return window.addEventListener("keydown", ye), () => window.removeEventListener("keydown", ye);
  }, [N, St]);
  const Ln = Le.useCallback(
    (ye, Se) => {
      de((Te) => {
        const Pe = Math.min(
          r2,
          Math.max(n2, Te.scale * ye)
        );
        if (!Se)
          return { ...Te, scale: Pe };
        const Xe = D.current;
        if (!Xe)
          return { ...Te, scale: Pe };
        const ht = Xe.getAbsoluteTransform().copy().invert().point(Se), An = g / 2, hr = f / 2, ln = Math.cos(Te.rotation * Math.PI / 180), Wt = Math.sin(Te.rotation * Math.PI / 180), br = ht.x - An, Jr = ht.y - hr, gi = Te.x + Te.scale * (ln * br - Wt * Jr), Jl = Te.y + Te.scale * (Wt * br + ln * Jr), Zl = gi - Pe * (ln * br - Wt * Jr), $l = Jl - Pe * (Wt * br + ln * Jr);
        return { ...Te, scale: Pe, x: Zl, y: $l };
      });
    },
    [f, g]
  ), jt = Le.useCallback((ye) => {
    de((Se) => ({
      ...Se,
      rotation: Se.rotation + ye
    }));
  }, []), Ot = Le.useCallback(
    (ye) => {
      Je(
        {
          ...Q,
          background: A,
          objects: [...Q.objects, ye]
        },
        { emit: !0 }
      );
    },
    [A, Je, Q]
  ), Jt = Le.useCallback(
    (ye) => {
      const Se = Q.objects.filter((Te) => Te.type !== "crop");
      Je({
        ...Q,
        background: A,
        objects: [...Se, { ...ye, type: "crop" }]
      }), K(ye.id);
    },
    [A, Je, Q]
  ), yt = Le.useMemo(
    () => Q.objects.find((ye) => ye.type === "crop") ?? null,
    [Q.objects]
  ), It = Le.useMemo(() => {
    if ((N == null ? void 0 : N.kind) === "rect" && ae === "rect_crop") {
      const ye = i2(
        N.x,
        N.y,
        N.width,
        N.height
      );
      return ye.width > 0 && ye.height > 0 ? ye : null;
    }
    return yt ? {
      x: yt.x ?? 0,
      y: yt.y ?? 0,
      width: yt.width ?? 0,
      height: yt.height ?? 0
    } : null;
  }, [yt, N, ae]), zt = Le.useCallback(
    (ye) => {
      if (!w) return;
      ye.evt.preventDefault();
      const Se = h.current;
      if (!Se) return;
      const Te = Se.getPointerPosition();
      if (!Te) return;
      const Pe = ye.evt.deltaY > 0 ? 1 / Zc : Zc;
      Ln(Pe, Te);
    },
    [w, Ln]
  ), Xr = Le.useCallback(
    (ye) => {
      const Se = h.current;
      if (w && (ae === "pan" || ye.evt.button === 1 || ye.evt.altKey || ye.evt.buttons === 4)) {
        X.current = !0, Z.current = { x: ye.evt.clientX, y: ye.evt.clientY };
        return;
      }
      const Pe = I0(Se);
      if (Pe) {
        if (ae === "transform") {
          (ye.target === Se || ye.target.id() === "viewport-content") && K(null);
          return;
        }
        if (ae !== "pan") {
          if (ae === "point") {
            Ot({
              id: ps(),
              type: "point",
              x: Pe.x,
              y: Pe.y,
              radius: S,
              fill: v,
              stroke: v,
              strokeWidth: 1
            });
            return;
          }
          if (ae === "polygon") {
            U((Xe) => (Xe == null ? void 0 : Xe.kind) === "polygon" ? { kind: "polygon", points: [...Xe.points, Pe.x, Pe.y] } : { kind: "polygon", points: [Pe.x, Pe.y] });
            return;
          }
          if (ae === "spline") {
            U((Xe) => (Xe == null ? void 0 : Xe.kind) === "spline" ? { kind: "spline", points: [...Xe.points, Pe.x, Pe.y] } : { kind: "spline", points: [Pe.x, Pe.y] });
            return;
          }
          if (ae === "freedraw") {
            U({ kind: "freedraw", points: [Pe.x, Pe.y] });
            return;
          }
          if (ae === "line") {
            U({ kind: "line", x1: Pe.x, y1: Pe.y, x2: Pe.x, y2: Pe.y });
            return;
          }
          if (ae === "rect") {
            U({ kind: "rect", x: Pe.x, y: Pe.y, width: 0, height: 0 });
            return;
          }
          if (ae === "rect_crop") {
            if (Wg(ye.target))
              return;
            const Xe = Q.objects.find((tt) => tt.type === "crop");
            if (Xe && ye.target.id() === Xe.id) {
              K(Xe.id);
              return;
            }
            K(null), U({ kind: "rect", x: Pe.x, y: Pe.y, width: 0, height: 0 });
            return;
          }
          ae === "circle" && U({ kind: "circle", x: Pe.x, y: Pe.y, radius: 0 });
        }
      }
    },
    [
      Ot,
      S,
      ae,
      w,
      Q.objects,
      v
    ]
  ), Ui = Le.useCallback(
    (ye) => {
      if (X.current && Z.current) {
        const Te = ye.evt.clientX - Z.current.x, Pe = ye.evt.clientY - Z.current.y;
        Z.current = { x: ye.evt.clientX, y: ye.evt.clientY }, de((Xe) => ({
          ...Xe,
          x: Xe.x + Te,
          y: Xe.y + Pe
        }));
        return;
      }
      const Se = I0(h.current);
      if (!(!Se || !N)) {
        if (N.kind === "freedraw") {
          U({ kind: "freedraw", points: [...N.points, Se.x, Se.y] });
          return;
        }
        if (N.kind === "line") {
          U({ ...N, x2: Se.x, y2: Se.y });
          return;
        }
        if (N.kind === "rect") {
          U({
            ...N,
            width: Se.x - N.x,
            height: Se.y - N.y
          });
          return;
        }
        if (N.kind === "circle") {
          const Te = Se.x - N.x, Pe = Se.y - N.y;
          U({ ...N, radius: Math.sqrt(Te * Te + Pe * Pe) });
        }
      }
    },
    [N]
  ), Ar = Le.useCallback(() => {
    if (N) {
      if (N.kind === "freedraw" && N.points.length >= 4)
        Ot({
          id: ps(),
          type: "freedraw",
          points: N.points,
          stroke: v,
          strokeWidth: d,
          fill: ""
        });
      else if (N.kind === "line")
        Ot({
          id: ps(),
          type: "line",
          points: [N.x1, N.y1, N.x2, N.y2],
          stroke: v,
          strokeWidth: d
        });
      else if (N.kind === "rect") {
        const ye = Math.min(N.x, N.x + N.width), Se = Math.min(N.y, N.y + N.height), Te = Math.abs(N.width), Pe = Math.abs(N.height);
        Te > 1 && Pe > 1 && (ae === "rect_crop" ? Jt({
          id: (yt == null ? void 0 : yt.id) ?? ps(),
          type: "crop",
          x: ye,
          y: Se,
          width: Te,
          height: Pe,
          stroke: v,
          strokeWidth: d,
          fill: $0
        }) : Ot({
          id: ps(),
          type: "rect",
          x: ye,
          y: Se,
          width: Te,
          height: Pe,
          stroke: v,
          strokeWidth: d,
          fill: l
        }));
      } else N.kind === "circle" && N.radius > 1 && Ot({
        id: ps(),
        type: "circle",
        x: N.x,
        y: N.y,
        radius: N.radius,
        stroke: v,
        strokeWidth: d,
        fill: l
      });
      N.kind !== "polygon" && N.kind !== "spline" && U(null);
    }
  }, [
    Ot,
    yt,
    N,
    ae,
    l,
    Jt,
    v,
    d
  ]), _o = Le.useCallback(() => {
    if (X.current) {
      X.current = !1, Z.current = null;
      return;
    }
    ae === "polygon" || ae === "spline" || ae === "transform" || ae === "pan" || Ar();
  }, [ae, Ar]), Bi = Le.useCallback(
    (ye) => {
      if (ye.evt.preventDefault(), ae === "polygon" && (N == null ? void 0 : N.kind) === "polygon") {
        if (N.points.length < 6) {
          U(null);
          return;
        }
        Ot({
          id: ps(),
          type: "polygon",
          points: N.points,
          stroke: v,
          strokeWidth: d,
          fill: l
        }), U(null);
        return;
      }
      if (ae === "spline" && (N == null ? void 0 : N.kind) === "spline") {
        if (!Xg(N.points)) {
          U(null);
          return;
        }
        Ot({
          id: ps(),
          type: "spline",
          points: N.points,
          tension: ff,
          stroke: v,
          strokeWidth: d,
          fill: "",
          showControlPoints: O
        }), U(null);
      }
    },
    [Ot, N, ae, l, O, v, d]
  ), So = Le.useCallback(() => {
    if (ae === "polygon" && (N == null ? void 0 : N.kind) === "polygon") {
      N.points.length <= 2 ? U(null) : U({
        kind: "polygon",
        points: N.points.slice(0, -2)
      });
      return;
    }
    if (ae === "spline" && (N == null ? void 0 : N.kind) === "spline") {
      N.points.length <= 2 ? U(null) : U({
        kind: "spline",
        points: N.points.slice(0, -2)
      });
      return;
    }
    if (ae === "transform" && L) {
      if (!(Qe != null && Qe.deletable)) return;
      const ye = Jc(L);
      if (ye) {
        const Se = De.find((Pe) => Pe.groupId === ye);
        if (!Se) return;
        const Te = new Set(Se.members.map((Pe) => Pe.id));
        Je({
          ...Q,
          objects: Q.objects.filter(
            (Pe) => Pe.id !== ye && !Te.has(Pe.id)
          )
        });
      } else
        Je({
          ...Q,
          objects: Q.objects.filter((Se) => Se.id !== L)
        });
      K(null);
      return;
    }
    ae === "rect_crop" && yt && (Je({
      ...Q,
      objects: Q.objects.filter((ye) => ye.type !== "crop")
    }), K(null));
  }, [
    Je,
    yt,
    N,
    ae,
    De,
    Q,
    L,
    Qe
  ]), wo = Le.useCallback(
    (ye) => {
      ae !== "transform" && ae !== "rect_crop" || !rd(ye, ae, Ee).selectable || K(Gg(ye));
    },
    [ae, Ee, Q]
  ), xo = Le.useCallback(
    (ye, Se) => {
      const Te = Jc(ye), Pe = D.current;
      if (Te && Pe) {
        const tt = De.find((An) => An.groupId === Te);
        if (!tt) return;
        const ht = A0(
          Q,
          tt,
          Se,
          Pe
        );
        Je({ ...Q, objects: ht });
        return;
      }
      const Xe = Q.objects.map((tt) => tt.id !== ye ? tt : $g(tt, Se));
      Je({ ...Q, objects: Xe });
    },
    [Je, De, Q]
  ), Co = Le.useCallback(
    (ye, Se) => {
      const Te = Jc(ye), Pe = D.current;
      if (Te && Pe) {
        const tt = De.find((An) => An.groupId === Te);
        if (!tt) return;
        const ht = A0(
          Q,
          tt,
          Se,
          Pe
        );
        Je({ ...Q, objects: ht });
        return;
      }
      const Xe = Q.objects.map(
        (tt) => tt.id === ye ? { ...tt, x: Se.x(), y: Se.y() } : tt
      );
      Je({ ...Q, objects: Xe });
    },
    [Je, De, Q]
  ), pi = {
    background: A || "transparent",
    border: "1px solid var(--st-gray-color, #ddd)",
    display: "block",
    cursor: ae === "pan" || X.current ? "grab" : "crosshair"
  }, Qr = {
    id: "viewport-content",
    x: b.x,
    y: b.y,
    scaleX: b.scale,
    scaleY: b.scale,
    rotation: b.rotation,
    offsetX: g / 2,
    offsetY: f / 2
  }, bs = Math.round(b.scale * 100);
  return /* @__PURE__ */ Be.jsxs(
    "div",
    {
      style: { fontFamily: "var(--st-font, sans-serif)", width: g },
      children: [
        (E || k) && /* @__PURE__ */ Be.jsxs(
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
              k && x.map((ye) => {
                const Se = ye === ae;
                return /* @__PURE__ */ Be.jsx(
                  "button",
                  {
                    type: "button",
                    title: ye,
                    onClick: () => Ce(ye),
                    style: {
                      fontWeight: Se ? 700 : 400,
                      outline: Se ? "2px solid currentColor" : void 0,
                      outlineOffset: 1
                    },
                    children: t2[ye]
                  },
                  ye
                );
              }),
              E && /* @__PURE__ */ Be.jsxs(Be.Fragment, { children: [
                /* @__PURE__ */ Be.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: St,
                    disabled: T <= 0 && !N0(N),
                    children: "Undo"
                  }
                ),
                /* @__PURE__ */ Be.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: Wn,
                    disabled: T >= ee.length - 1,
                    children: "Redo"
                  }
                ),
                /* @__PURE__ */ Be.jsx("button", { type: "button", onClick: dt, children: "Clear" }),
                !C && /* @__PURE__ */ Be.jsx("button", { type: "button", onClick: wn, children: "Send to Streamlit" }),
                w && /* @__PURE__ */ Be.jsxs(Be.Fragment, { children: [
                  /* @__PURE__ */ Be.jsx("button", { type: "button", onClick: () => Ln(Zc), children: "Zoom +" }),
                  /* @__PURE__ */ Be.jsx("button", { type: "button", onClick: () => Ln(1 / Zc), children: "Zoom −" }),
                  /* @__PURE__ */ Be.jsx("button", { type: "button", onClick: () => jt(-O0), children: "Tilt ↶" }),
                  /* @__PURE__ */ Be.jsx("button", { type: "button", onClick: () => jt(O0), children: "Tilt ↷" }),
                  /* @__PURE__ */ Be.jsx("button", { type: "button", onClick: bt, children: "Reset view" }),
                  /* @__PURE__ */ Be.jsxs("span", { style: { fontSize: 12, opacity: 0.75 }, children: [
                    bs,
                    "% · ",
                    Math.round(b.rotation),
                    "°"
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ Be.jsxs("span", { style: { marginLeft: "auto", fontSize: 12, opacity: 0.7 }, children: [
                "mode: ",
                ae
              ] })
            ]
          }
        ),
        /* @__PURE__ */ Be.jsxs(
          Eg,
          {
            width: g,
            height: f,
            ref: h,
            style: pi,
            onMouseDown: Xr,
            onMousemove: Ui,
            onMouseup: _o,
            onMouseLeave: _o,
            onContextMenu: Bi,
            onDblClick: So,
            onWheel: zt,
            children: [
              /* @__PURE__ */ Be.jsx(P0, { listening: !1, children: /* @__PURE__ */ Be.jsx(Du, { ref: W, ...Qr, id: "viewport-bg", children: ge && /* @__PURE__ */ Be.jsx(
                Cg,
                {
                  image: ge,
                  width: g,
                  height: f,
                  listening: !1
                }
              ) }) }),
              /* @__PURE__ */ Be.jsx(P0, { ref: R, children: /* @__PURE__ */ Be.jsxs(Du, { ref: D, ...Qr, children: [
                !ge && !!A && /* @__PURE__ */ Be.jsx(
                  Xs,
                  {
                    x: 0,
                    y: 0,
                    width: g,
                    height: f,
                    fill: A,
                    listening: !1
                  }
                ),
                It && (ae === "rect_crop" || yt) && /* @__PURE__ */ Be.jsx(Du, { id: "crop-chrome", listening: !1, children: /* @__PURE__ */ Be.jsx(
                  o2,
                  {
                    bounds: It,
                    canvasWidth: g,
                    canvasHeight: f
                  }
                ) }),
                Ue.map((ye) => /* @__PURE__ */ Be.jsx(
                  L0,
                  {
                    obj: ye,
                    interaction: rd(
                      ye,
                      ae,
                      Ee
                    ),
                    splineShowControlPoints: O,
                    splineControlPointRadius: j,
                    onSelect: () => wo(ye),
                    onDragEnd: (Se) => Co(ye.id, Se),
                    onTransformEnd: (Se) => xo(ye.id, Se)
                  },
                  ye.id
                )),
                De.map((ye) => {
                  const Se = T0(
                    ye,
                    ae,
                    Ee
                  ), Te = Zg(ye.members, ye.descriptor), Pe = J0(ye.groupId), Xe = {
                    selectable: !0,
                    draggable: !1,
                    scalable: !1,
                    rotatable: !1,
                    deletable: !1,
                    listening: !0
                  };
                  return /* @__PURE__ */ Be.jsx(
                    Du,
                    {
                      id: Pe,
                      x: Te.x,
                      y: Te.y,
                      offsetX: Te.x,
                      offsetY: Te.y,
                      draggable: Se.draggable,
                      listening: Se.listening || Se.selectable,
                      onClick: () => {
                        Se.selectable && K(Pe);
                      },
                      onTap: () => {
                        Se.selectable && K(Pe);
                      },
                      onDragEnd: (tt) => Co(Pe, tt.target),
                      onTransformEnd: (tt) => xo(Pe, tt.target),
                      children: ye.members.map((tt) => /* @__PURE__ */ Be.jsx(
                        L0,
                        {
                          obj: tt,
                          interaction: Xe,
                          splineShowControlPoints: O,
                          splineControlPointRadius: j,
                          onSelect: () => wo(tt),
                          onDragEnd: () => {
                          },
                          onTransformEnd: () => {
                          }
                        },
                        tt.id
                      ))
                    },
                    ye.groupId
                  );
                }),
                (N == null ? void 0 : N.kind) === "freedraw" && /* @__PURE__ */ Be.jsx(
                  Qs,
                  {
                    points: N.points,
                    stroke: v,
                    strokeWidth: d,
                    tension: 0.5,
                    lineCap: "round",
                    lineJoin: "round",
                    listening: !1
                  }
                ),
                (N == null ? void 0 : N.kind) === "line" && /* @__PURE__ */ Be.jsx(
                  Qs,
                  {
                    points: [N.x1, N.y1, N.x2, N.y2],
                    stroke: v,
                    strokeWidth: d,
                    listening: !1
                  }
                ),
                (N == null ? void 0 : N.kind) === "rect" && /* @__PURE__ */ Be.jsx(
                  Xs,
                  {
                    x: Math.min(N.x, N.x + N.width),
                    y: Math.min(N.y, N.y + N.height),
                    width: Math.abs(N.width),
                    height: Math.abs(N.height),
                    stroke: v,
                    strokeWidth: d,
                    fill: ae === "rect_crop" ? "transparent" : l,
                    dash: ae === "rect_crop" ? [8, 4] : void 0,
                    listening: !1
                  }
                ),
                (N == null ? void 0 : N.kind) === "circle" && /* @__PURE__ */ Be.jsx(
                  xf,
                  {
                    x: N.x,
                    y: N.y,
                    radius: N.radius,
                    stroke: v,
                    strokeWidth: d,
                    fill: l,
                    listening: !1
                  }
                ),
                (N == null ? void 0 : N.kind) === "polygon" && N.points.length >= 2 && /* @__PURE__ */ Be.jsx(
                  Qs,
                  {
                    points: N.points,
                    stroke: v,
                    strokeWidth: d,
                    fill: l,
                    closed: !1,
                    listening: !1
                  }
                ),
                (N == null ? void 0 : N.kind) === "spline" && /* @__PURE__ */ Be.jsxs(Be.Fragment, { children: [
                  N.points.length >= 4 && /* @__PURE__ */ Be.jsx(
                    Qs,
                    {
                      points: N.points,
                      stroke: v,
                      strokeWidth: d,
                      tension: ff,
                      lineCap: "round",
                      lineJoin: "round",
                      listening: !1
                    }
                  ),
                  O && N.points.length >= 2 && /* @__PURE__ */ Be.jsx(
                    Z0,
                    {
                      points: N.points,
                      stroke: v,
                      radius: j,
                      groupId: "draft-spline-control-points"
                    }
                  )
                ] }),
                (ae === "transform" || ae === "rect_crop") && /* @__PURE__ */ Be.jsx(kg, { ref: J })
              ] }) })
            ]
          }
        )
      ]
    }
  );
};
function D0(l) {
  const d = t1(l == null ? void 0 : l.tools);
  return {
    fillColor: (l == null ? void 0 : l.fillColor) ?? "#eee",
    strokeWidth: (l == null ? void 0 : l.strokeWidth) ?? 20,
    strokeColor: (l == null ? void 0 : l.strokeColor) ?? "black",
    backgroundColor: (l == null ? void 0 : l.backgroundColor) ?? "",
    backgroundImageURL: (l == null ? void 0 : l.backgroundImageURL) ?? null,
    realtimeUpdateStreamlit: (l == null ? void 0 : l.realtimeUpdateStreamlit) ?? !0,
    canvasHeight: (l == null ? void 0 : l.canvasHeight) ?? 400,
    canvasWidth: (l == null ? void 0 : l.canvasWidth) ?? 600,
    drawingMode: Gu((l == null ? void 0 : l.drawingMode) ?? "freedraw", d),
    tools: d,
    displayToolPicker: (l == null ? void 0 : l.displayToolPicker) ?? !1,
    initialDrawing: (l == null ? void 0 : l.initialDrawing) ?? Cf(),
    displayToolbar: (l == null ? void 0 : l.displayToolbar) ?? !0,
    displayRadius: (l == null ? void 0 : l.displayRadius) ?? 3,
    enableViewportControls: (l == null ? void 0 : l.enableViewportControls) ?? !0,
    transformOptions: (l == null ? void 0 : l.transformOptions) ?? {},
    splineShowControlPoints: (l == null ? void 0 : l.splineShowControlPoints) ?? !1,
    splineControlPointRadius: (l == null ? void 0 : l.splineControlPointRadius) ?? 5
  };
}
const ed = /* @__PURE__ */ new WeakMap();
function l2(l, d, v) {
  let A = D0(d), F = {
    image_data_url: null,
    json_data: null
  };
  const C = (g, m) => {
    g === "image_data_url" ? F = {
      ...F,
      image_data_url: typeof m == "string" ? m : null
    } : F = {
      ...F,
      json_data: m ?? null
    }, v == null || v(F);
  }, f = () => {
    let g = ed.get(l);
    g || (g = F1.createRoot(l), ed.set(l, g)), g.render(
      /* @__PURE__ */ Be.jsx(Le.StrictMode, { children: /* @__PURE__ */ Be.jsx(s2, { ...A, setStateValue: C }) })
    );
  };
  return f(), {
    update(g) {
      A = D0({ ...A, ...g }), f();
    },
    destroy() {
      const g = ed.get(l);
      g && (g.unmount(), ed.delete(l)), l instanceof HTMLElement && l.replaceChildren();
    }
  };
}
const td = /* @__PURE__ */ new WeakMap(), C2 = (l) => {
  const { data: d, parentElement: v, setStateValue: A } = l, F = v.querySelector(".react-root");
  if (!F)
    throw new Error("Unexpected: React root element not found");
  let C = td.get(v);
  if (C)
    C.setStateValue = A, C.controller.update(d);
  else {
    const f = {
      setStateValue: A,
      controller: null
    };
    f.controller = l2(F, d, (g) => {
      f.setStateValue("image_data_url", g.image_data_url), f.setStateValue("json_data", g.json_data);
    }), td.set(v, f), C = f;
  }
  return () => {
    const f = td.get(v);
    f && (f.controller.destroy(), td.delete(v));
  };
};
export {
  C2 as default
};
