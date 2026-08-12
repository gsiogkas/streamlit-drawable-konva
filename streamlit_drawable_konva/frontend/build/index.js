var ug = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Yu(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var cm = { exports: {} }, Xu = {}, dm = { exports: {} }, Ce = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rl = Symbol.for("react.element"), N5 = Symbol.for("react.portal"), R5 = Symbol.for("react.fragment"), F5 = Symbol.for("react.strict_mode"), M5 = Symbol.for("react.profiler"), L5 = Symbol.for("react.provider"), A5 = Symbol.for("react.context"), O5 = Symbol.for("react.forward_ref"), D5 = Symbol.for("react.suspense"), I5 = Symbol.for("react.memo"), z5 = Symbol.for("react.lazy"), cg = Symbol.iterator;
function G5(t) {
  return t === null || typeof t != "object" ? null : (t = cg && t[cg] || t["@@iterator"], typeof t == "function" ? t : null);
}
var fm = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, hm = Object.assign, pm = {};
function io(t, e, n) {
  this.props = t, this.context = e, this.refs = pm, this.updater = n || fm;
}
io.prototype.isReactComponent = {};
io.prototype.setState = function(t, e) {
  if (typeof t != "object" && typeof t != "function" && t != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, t, e, "setState");
};
io.prototype.forceUpdate = function(t) {
  this.updater.enqueueForceUpdate(this, t, "forceUpdate");
};
function gm() {
}
gm.prototype = io.prototype;
function f0(t, e, n) {
  this.props = t, this.context = e, this.refs = pm, this.updater = n || fm;
}
var h0 = f0.prototype = new gm();
h0.constructor = f0;
hm(h0, io.prototype);
h0.isPureReactComponent = !0;
var dg = Array.isArray, mm = Object.prototype.hasOwnProperty, p0 = { current: null }, ym = { key: !0, ref: !0, __self: !0, __source: !0 };
function vm(t, e, n) {
  var r, o = {}, l = null, a = null;
  if (e != null) for (r in e.ref !== void 0 && (a = e.ref), e.key !== void 0 && (l = "" + e.key), e) mm.call(e, r) && !ym.hasOwnProperty(r) && (o[r] = e[r]);
  var c = arguments.length - 2;
  if (c === 1) o.children = n;
  else if (1 < c) {
    for (var f = Array(c), g = 0; g < c; g++) f[g] = arguments[g + 2];
    o.children = f;
  }
  if (t && t.defaultProps) for (r in c = t.defaultProps, c) o[r] === void 0 && (o[r] = c[r]);
  return { $$typeof: Rl, type: t, key: l, ref: a, props: o, _owner: p0.current };
}
function U5(t, e) {
  return { $$typeof: Rl, type: t.type, key: e, ref: t.ref, props: t.props, _owner: t._owner };
}
function g0(t) {
  return typeof t == "object" && t !== null && t.$$typeof === Rl;
}
function B5(t) {
  var e = { "=": "=0", ":": "=2" };
  return "$" + t.replace(/[=:]/g, function(n) {
    return e[n];
  });
}
var fg = /\/+/g;
function Ef(t, e) {
  return typeof t == "object" && t !== null && t.key != null ? B5("" + t.key) : e.toString(36);
}
function ru(t, e, n, r, o) {
  var l = typeof t;
  (l === "undefined" || l === "boolean") && (t = null);
  var a = !1;
  if (t === null) a = !0;
  else switch (l) {
    case "string":
    case "number":
      a = !0;
      break;
    case "object":
      switch (t.$$typeof) {
        case Rl:
        case N5:
          a = !0;
      }
  }
  if (a) return a = t, o = o(a), t = r === "" ? "." + Ef(a, 0) : r, dg(o) ? (n = "", t != null && (n = t.replace(fg, "$&/") + "/"), ru(o, e, n, "", function(g) {
    return g;
  })) : o != null && (g0(o) && (o = U5(o, n + (!o.key || a && a.key === o.key ? "" : ("" + o.key).replace(fg, "$&/") + "/") + t)), e.push(o)), 1;
  if (a = 0, r = r === "" ? "." : r + ":", dg(t)) for (var c = 0; c < t.length; c++) {
    l = t[c];
    var f = r + Ef(l, c);
    a += ru(l, e, n, f, o);
  }
  else if (f = G5(t), typeof f == "function") for (t = f.call(t), c = 0; !(l = t.next()).done; ) l = l.value, f = r + Ef(l, c++), a += ru(l, e, n, f, o);
  else if (l === "object") throw e = String(t), Error("Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead.");
  return a;
}
function Aa(t, e, n) {
  if (t == null) return t;
  var r = [], o = 0;
  return ru(t, r, "", "", function(l) {
    return e.call(n, l, o++);
  }), r;
}
function V5(t) {
  if (t._status === -1) {
    var e = t._result;
    e = e(), e.then(function(n) {
      (t._status === 0 || t._status === -1) && (t._status = 1, t._result = n);
    }, function(n) {
      (t._status === 0 || t._status === -1) && (t._status = 2, t._result = n);
    }), t._status === -1 && (t._status = 0, t._result = e);
  }
  if (t._status === 1) return t._result.default;
  throw t._result;
}
var Yt = { current: null }, iu = { transition: null }, H5 = { ReactCurrentDispatcher: Yt, ReactCurrentBatchConfig: iu, ReactCurrentOwner: p0 };
function _m() {
  throw Error("act(...) is not supported in production builds of React.");
}
Ce.Children = { map: Aa, forEach: function(t, e, n) {
  Aa(t, function() {
    e.apply(this, arguments);
  }, n);
}, count: function(t) {
  var e = 0;
  return Aa(t, function() {
    e++;
  }), e;
}, toArray: function(t) {
  return Aa(t, function(e) {
    return e;
  }) || [];
}, only: function(t) {
  if (!g0(t)) throw Error("React.Children.only expected to receive a single React element child.");
  return t;
} };
Ce.Component = io;
Ce.Fragment = R5;
Ce.Profiler = M5;
Ce.PureComponent = f0;
Ce.StrictMode = F5;
Ce.Suspense = D5;
Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = H5;
Ce.act = _m;
Ce.cloneElement = function(t, e, n) {
  if (t == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + t + ".");
  var r = hm({}, t.props), o = t.key, l = t.ref, a = t._owner;
  if (e != null) {
    if (e.ref !== void 0 && (l = e.ref, a = p0.current), e.key !== void 0 && (o = "" + e.key), t.type && t.type.defaultProps) var c = t.type.defaultProps;
    for (f in e) mm.call(e, f) && !ym.hasOwnProperty(f) && (r[f] = e[f] === void 0 && c !== void 0 ? c[f] : e[f]);
  }
  var f = arguments.length - 2;
  if (f === 1) r.children = n;
  else if (1 < f) {
    c = Array(f);
    for (var g = 0; g < f; g++) c[g] = arguments[g + 2];
    r.children = c;
  }
  return { $$typeof: Rl, type: t.type, key: o, ref: l, props: r, _owner: a };
};
Ce.createContext = function(t) {
  return t = { $$typeof: A5, _currentValue: t, _currentValue2: t, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, t.Provider = { $$typeof: L5, _context: t }, t.Consumer = t;
};
Ce.createElement = vm;
Ce.createFactory = function(t) {
  var e = vm.bind(null, t);
  return e.type = t, e;
};
Ce.createRef = function() {
  return { current: null };
};
Ce.forwardRef = function(t) {
  return { $$typeof: O5, render: t };
};
Ce.isValidElement = g0;
Ce.lazy = function(t) {
  return { $$typeof: z5, _payload: { _status: -1, _result: t }, _init: V5 };
};
Ce.memo = function(t, e) {
  return { $$typeof: I5, type: t, compare: e === void 0 ? null : e };
};
Ce.startTransition = function(t) {
  var e = iu.transition;
  iu.transition = {};
  try {
    t();
  } finally {
    iu.transition = e;
  }
};
Ce.unstable_act = _m;
Ce.useCallback = function(t, e) {
  return Yt.current.useCallback(t, e);
};
Ce.useContext = function(t) {
  return Yt.current.useContext(t);
};
Ce.useDebugValue = function() {
};
Ce.useDeferredValue = function(t) {
  return Yt.current.useDeferredValue(t);
};
Ce.useEffect = function(t, e) {
  return Yt.current.useEffect(t, e);
};
Ce.useId = function() {
  return Yt.current.useId();
};
Ce.useImperativeHandle = function(t, e, n) {
  return Yt.current.useImperativeHandle(t, e, n);
};
Ce.useInsertionEffect = function(t, e) {
  return Yt.current.useInsertionEffect(t, e);
};
Ce.useLayoutEffect = function(t, e) {
  return Yt.current.useLayoutEffect(t, e);
};
Ce.useMemo = function(t, e) {
  return Yt.current.useMemo(t, e);
};
Ce.useReducer = function(t, e, n) {
  return Yt.current.useReducer(t, e, n);
};
Ce.useRef = function(t) {
  return Yt.current.useRef(t);
};
Ce.useState = function(t) {
  return Yt.current.useState(t);
};
Ce.useSyncExternalStore = function(t, e, n) {
  return Yt.current.useSyncExternalStore(t, e, n);
};
Ce.useTransition = function() {
  return Yt.current.useTransition();
};
Ce.version = "18.3.1";
dm.exports = Ce;
var ae = dm.exports;
const Wt = /* @__PURE__ */ Yu(ae);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var j5 = ae, W5 = Symbol.for("react.element"), K5 = Symbol.for("react.fragment"), Y5 = Object.prototype.hasOwnProperty, X5 = j5.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Q5 = { key: !0, ref: !0, __self: !0, __source: !0 };
function Sm(t, e, n) {
  var r, o = {}, l = null, a = null;
  n !== void 0 && (l = "" + n), e.key !== void 0 && (l = "" + e.key), e.ref !== void 0 && (a = e.ref);
  for (r in e) Y5.call(e, r) && !Q5.hasOwnProperty(r) && (o[r] = e[r]);
  if (t && t.defaultProps) for (r in e = t.defaultProps, e) o[r] === void 0 && (o[r] = e[r]);
  return { $$typeof: W5, type: t, key: l, ref: a, props: o, _owner: X5.current };
}
Xu.Fragment = K5;
Xu.jsx = Sm;
Xu.jsxs = Sm;
cm.exports = Xu;
var Ee = cm.exports, wm = { exports: {} }, hn = {}, xm = { exports: {} }, Cm = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(t) {
  function e(H, $) {
    var X = H.length;
    H.push($);
    e: for (; 0 < X; ) {
      var q = X - 1 >>> 1, re = H[q];
      if (0 < o(re, $)) H[q] = $, H[X] = re, X = q;
      else break e;
    }
  }
  function n(H) {
    return H.length === 0 ? null : H[0];
  }
  function r(H) {
    if (H.length === 0) return null;
    var $ = H[0], X = H.pop();
    if (X !== $) {
      H[0] = X;
      e: for (var q = 0, re = H.length, ve = re >>> 1; q < ve; ) {
        var ft = 2 * (q + 1) - 1, ht = H[ft], ze = ft + 1, A = H[ze];
        if (0 > o(ht, X)) ze < re && 0 > o(A, ht) ? (H[q] = A, H[ze] = X, q = ze) : (H[q] = ht, H[ft] = X, q = ft);
        else if (ze < re && 0 > o(A, X)) H[q] = A, H[ze] = X, q = ze;
        else break e;
      }
    }
    return $;
  }
  function o(H, $) {
    var X = H.sortIndex - $.sortIndex;
    return X !== 0 ? X : H.id - $.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var l = performance;
    t.unstable_now = function() {
      return l.now();
    };
  } else {
    var a = Date, c = a.now();
    t.unstable_now = function() {
      return a.now() - c;
    };
  }
  var f = [], g = [], y = 1, C = null, S = 3, x = !1, v = !1, E = !1, N = typeof setTimeout == "function" ? setTimeout : null, k = typeof clearTimeout == "function" ? clearTimeout : null, w = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(H) {
    for (var $ = n(g); $ !== null; ) {
      if ($.callback === null) r(g);
      else if ($.startTime <= H) r(g), $.sortIndex = $.expirationTime, e(f, $);
      else break;
      $ = n(g);
    }
  }
  function _(H) {
    if (E = !1, p(H), !v) if (n(f) !== null) v = !0, pe(T);
    else {
      var $ = n(g);
      $ !== null && ye(_, $.startTime - H);
    }
  }
  function T(H, $) {
    v = !1, E && (E = !1, k(R), R = -1), x = !0;
    var X = S;
    try {
      for (p($), C = n(f); C !== null && (!(C.expirationTime > $) || H && !B()); ) {
        var q = C.callback;
        if (typeof q == "function") {
          C.callback = null, S = C.priorityLevel;
          var re = q(C.expirationTime <= $);
          $ = t.unstable_now(), typeof re == "function" ? C.callback = re : C === n(f) && r(f), p($);
        } else r(f);
        C = n(f);
      }
      if (C !== null) var ve = !0;
      else {
        var ft = n(g);
        ft !== null && ye(_, ft.startTime - $), ve = !1;
      }
      return ve;
    } finally {
      C = null, S = X, x = !1;
    }
  }
  var F = !1, L = null, R = -1, G = 5, M = -1;
  function B() {
    return !(t.unstable_now() - M < G);
  }
  function j() {
    if (L !== null) {
      var H = t.unstable_now();
      M = H;
      var $ = !0;
      try {
        $ = L(!0, H);
      } finally {
        $ ? I() : (F = !1, L = null);
      }
    } else F = !1;
  }
  var I;
  if (typeof w == "function") I = function() {
    w(j);
  };
  else if (typeof MessageChannel < "u") {
    var Z = new MessageChannel(), Q = Z.port2;
    Z.port1.onmessage = j, I = function() {
      Q.postMessage(null);
    };
  } else I = function() {
    N(j, 0);
  };
  function pe(H) {
    L = H, F || (F = !0, I());
  }
  function ye(H, $) {
    R = N(function() {
      H(t.unstable_now());
    }, $);
  }
  t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(H) {
    H.callback = null;
  }, t.unstable_continueExecution = function() {
    v || x || (v = !0, pe(T));
  }, t.unstable_forceFrameRate = function(H) {
    0 > H || 125 < H ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : G = 0 < H ? Math.floor(1e3 / H) : 5;
  }, t.unstable_getCurrentPriorityLevel = function() {
    return S;
  }, t.unstable_getFirstCallbackNode = function() {
    return n(f);
  }, t.unstable_next = function(H) {
    switch (S) {
      case 1:
      case 2:
      case 3:
        var $ = 3;
        break;
      default:
        $ = S;
    }
    var X = S;
    S = $;
    try {
      return H();
    } finally {
      S = X;
    }
  }, t.unstable_pauseExecution = function() {
  }, t.unstable_requestPaint = function() {
  }, t.unstable_runWithPriority = function(H, $) {
    switch (H) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        H = 3;
    }
    var X = S;
    S = H;
    try {
      return $();
    } finally {
      S = X;
    }
  }, t.unstable_scheduleCallback = function(H, $, X) {
    var q = t.unstable_now();
    switch (typeof X == "object" && X !== null ? (X = X.delay, X = typeof X == "number" && 0 < X ? q + X : q) : X = q, H) {
      case 1:
        var re = -1;
        break;
      case 2:
        re = 250;
        break;
      case 5:
        re = 1073741823;
        break;
      case 4:
        re = 1e4;
        break;
      default:
        re = 5e3;
    }
    return re = X + re, H = { id: y++, callback: $, priorityLevel: H, startTime: X, expirationTime: re, sortIndex: -1 }, X > q ? (H.sortIndex = X, e(g, H), n(f) === null && H === n(g) && (E ? (k(R), R = -1) : E = !0, ye(_, X - q))) : (H.sortIndex = re, e(f, H), v || x || (v = !0, pe(T))), H;
  }, t.unstable_shouldYield = B, t.unstable_wrapCallback = function(H) {
    var $ = S;
    return function() {
      var X = S;
      S = $;
      try {
        return H.apply(this, arguments);
      } finally {
        S = X;
      }
    };
  };
})(Cm);
xm.exports = Cm;
var Jo = xm.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $5 = ae, fn = Jo;
function K(t) {
  for (var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, n = 1; n < arguments.length; n++) e += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var km = /* @__PURE__ */ new Set(), ul = {};
function qi(t, e) {
  Qs(t, e), Qs(t + "Capture", e);
}
function Qs(t, e) {
  for (ul[t] = e, t = 0; t < e.length; t++) km.add(e[t]);
}
var Pr = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), uh = Object.prototype.hasOwnProperty, q5 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, hg = {}, pg = {};
function Z5(t) {
  return uh.call(pg, t) ? !0 : uh.call(hg, t) ? !1 : q5.test(t) ? pg[t] = !0 : (hg[t] = !0, !1);
}
function J5(t, e, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof e) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r ? !1 : n !== null ? !n.acceptsBooleans : (t = t.toLowerCase().slice(0, 5), t !== "data-" && t !== "aria-");
    default:
      return !1;
  }
}
function b5(t, e, n, r) {
  if (e === null || typeof e > "u" || J5(t, e, n, r)) return !0;
  if (r) return !1;
  if (n !== null) switch (n.type) {
    case 3:
      return !e;
    case 4:
      return e === !1;
    case 5:
      return isNaN(e);
    case 6:
      return isNaN(e) || 1 > e;
  }
  return !1;
}
function Xt(t, e, n, r, o, l, a) {
  this.acceptsBooleans = e === 2 || e === 3 || e === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = t, this.type = e, this.sanitizeURL = l, this.removeEmptyString = a;
}
var Mt = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t) {
  Mt[t] = new Xt(t, 0, !1, t, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(t) {
  var e = t[0];
  Mt[e] = new Xt(e, 1, !1, t[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(t) {
  Mt[t] = new Xt(t, 2, !1, t.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(t) {
  Mt[t] = new Xt(t, 2, !1, t, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t) {
  Mt[t] = new Xt(t, 3, !1, t.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(t) {
  Mt[t] = new Xt(t, 3, !0, t, null, !1, !1);
});
["capture", "download"].forEach(function(t) {
  Mt[t] = new Xt(t, 4, !1, t, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(t) {
  Mt[t] = new Xt(t, 6, !1, t, null, !1, !1);
});
["rowSpan", "start"].forEach(function(t) {
  Mt[t] = new Xt(t, 5, !1, t.toLowerCase(), null, !1, !1);
});
var m0 = /[\-:]([a-z])/g;
function y0(t) {
  return t[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t) {
  var e = t.replace(
    m0,
    y0
  );
  Mt[e] = new Xt(e, 1, !1, t, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t) {
  var e = t.replace(m0, y0);
  Mt[e] = new Xt(e, 1, !1, t, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(t) {
  var e = t.replace(m0, y0);
  Mt[e] = new Xt(e, 1, !1, t, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(t) {
  Mt[t] = new Xt(t, 1, !1, t.toLowerCase(), null, !1, !1);
});
Mt.xlinkHref = new Xt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(t) {
  Mt[t] = new Xt(t, 1, !1, t.toLowerCase(), null, !0, !0);
});
function v0(t, e, n, r) {
  var o = Mt.hasOwnProperty(e) ? Mt[e] : null;
  (o !== null ? o.type !== 0 : r || !(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N") && (b5(e, n, o, r) && (n = null), r || o === null ? Z5(e) && (n === null ? t.removeAttribute(e) : t.setAttribute(e, "" + n)) : o.mustUseProperty ? t[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (e = o.attributeName, r = o.attributeNamespace, n === null ? t.removeAttribute(e) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? t.setAttributeNS(r, e, n) : t.setAttribute(e, n))));
}
var Fr = $5.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Oa = Symbol.for("react.element"), Fs = Symbol.for("react.portal"), Ms = Symbol.for("react.fragment"), _0 = Symbol.for("react.strict_mode"), ch = Symbol.for("react.profiler"), Em = Symbol.for("react.provider"), Pm = Symbol.for("react.context"), S0 = Symbol.for("react.forward_ref"), dh = Symbol.for("react.suspense"), fh = Symbol.for("react.suspense_list"), w0 = Symbol.for("react.memo"), Qr = Symbol.for("react.lazy"), Tm = Symbol.for("react.offscreen"), gg = Symbol.iterator;
function Oo(t) {
  return t === null || typeof t != "object" ? null : (t = gg && t[gg] || t["@@iterator"], typeof t == "function" ? t : null);
}
var nt = Object.assign, Pf;
function Xo(t) {
  if (Pf === void 0) try {
    throw Error();
  } catch (n) {
    var e = n.stack.trim().match(/\n( *(at )?)/);
    Pf = e && e[1] || "";
  }
  return `
` + Pf + t;
}
var Tf = !1;
function Nf(t, e) {
  if (!t || Tf) return "";
  Tf = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (e) if (e = function() {
      throw Error();
    }, Object.defineProperty(e.prototype, "props", { set: function() {
      throw Error();
    } }), typeof Reflect == "object" && Reflect.construct) {
      try {
        Reflect.construct(e, []);
      } catch (g) {
        var r = g;
      }
      Reflect.construct(t, [], e);
    } else {
      try {
        e.call();
      } catch (g) {
        r = g;
      }
      t.call(e.prototype);
    }
    else {
      try {
        throw Error();
      } catch (g) {
        r = g;
      }
      t();
    }
  } catch (g) {
    if (g && r && typeof g.stack == "string") {
      for (var o = g.stack.split(`
`), l = r.stack.split(`
`), a = o.length - 1, c = l.length - 1; 1 <= a && 0 <= c && o[a] !== l[c]; ) c--;
      for (; 1 <= a && 0 <= c; a--, c--) if (o[a] !== l[c]) {
        if (a !== 1 || c !== 1)
          do
            if (a--, c--, 0 > c || o[a] !== l[c]) {
              var f = `
` + o[a].replace(" at new ", " at ");
              return t.displayName && f.includes("<anonymous>") && (f = f.replace("<anonymous>", t.displayName)), f;
            }
          while (1 <= a && 0 <= c);
        break;
      }
    }
  } finally {
    Tf = !1, Error.prepareStackTrace = n;
  }
  return (t = t ? t.displayName || t.name : "") ? Xo(t) : "";
}
function ev(t) {
  switch (t.tag) {
    case 5:
      return Xo(t.type);
    case 16:
      return Xo("Lazy");
    case 13:
      return Xo("Suspense");
    case 19:
      return Xo("SuspenseList");
    case 0:
    case 2:
    case 15:
      return t = Nf(t.type, !1), t;
    case 11:
      return t = Nf(t.type.render, !1), t;
    case 1:
      return t = Nf(t.type, !0), t;
    default:
      return "";
  }
}
function hh(t) {
  if (t == null) return null;
  if (typeof t == "function") return t.displayName || t.name || null;
  if (typeof t == "string") return t;
  switch (t) {
    case Ms:
      return "Fragment";
    case Fs:
      return "Portal";
    case ch:
      return "Profiler";
    case _0:
      return "StrictMode";
    case dh:
      return "Suspense";
    case fh:
      return "SuspenseList";
  }
  if (typeof t == "object") switch (t.$$typeof) {
    case Pm:
      return (t.displayName || "Context") + ".Consumer";
    case Em:
      return (t._context.displayName || "Context") + ".Provider";
    case S0:
      var e = t.render;
      return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
    case w0:
      return e = t.displayName || null, e !== null ? e : hh(t.type) || "Memo";
    case Qr:
      e = t._payload, t = t._init;
      try {
        return hh(t(e));
      } catch {
      }
  }
  return null;
}
function tv(t) {
  var e = t.type;
  switch (t.tag) {
    case 24:
      return "Cache";
    case 9:
      return (e.displayName || "Context") + ".Consumer";
    case 10:
      return (e._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return t = e.render, t = t.displayName || t.name || "", e.displayName || (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return e;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return hh(e);
    case 8:
      return e === _0 ? "StrictMode" : "Mode";
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
      if (typeof e == "function") return e.displayName || e.name || null;
      if (typeof e == "string") return e;
  }
  return null;
}
function ai(t) {
  switch (typeof t) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return t;
    case "object":
      return t;
    default:
      return "";
  }
}
function Nm(t) {
  var e = t.type;
  return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
}
function nv(t) {
  var e = Nm(t) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e), r = "" + t[e];
  if (!t.hasOwnProperty(e) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var o = n.get, l = n.set;
    return Object.defineProperty(t, e, { configurable: !0, get: function() {
      return o.call(this);
    }, set: function(a) {
      r = "" + a, l.call(this, a);
    } }), Object.defineProperty(t, e, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(a) {
      r = "" + a;
    }, stopTracking: function() {
      t._valueTracker = null, delete t[e];
    } };
  }
}
function Da(t) {
  t._valueTracker || (t._valueTracker = nv(t));
}
function Rm(t) {
  if (!t) return !1;
  var e = t._valueTracker;
  if (!e) return !0;
  var n = e.getValue(), r = "";
  return t && (r = Nm(t) ? t.checked ? "true" : "false" : t.value), t = r, t !== n ? (e.setValue(t), !0) : !1;
}
function yu(t) {
  if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
  try {
    return t.activeElement || t.body;
  } catch {
    return t.body;
  }
}
function ph(t, e) {
  var n = e.checked;
  return nt({}, e, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? t._wrapperState.initialChecked });
}
function mg(t, e) {
  var n = e.defaultValue == null ? "" : e.defaultValue, r = e.checked != null ? e.checked : e.defaultChecked;
  n = ai(e.value != null ? e.value : n), t._wrapperState = { initialChecked: r, initialValue: n, controlled: e.type === "checkbox" || e.type === "radio" ? e.checked != null : e.value != null };
}
function Fm(t, e) {
  e = e.checked, e != null && v0(t, "checked", e, !1);
}
function gh(t, e) {
  Fm(t, e);
  var n = ai(e.value), r = e.type;
  if (n != null) r === "number" ? (n === 0 && t.value === "" || t.value != n) && (t.value = "" + n) : t.value !== "" + n && (t.value = "" + n);
  else if (r === "submit" || r === "reset") {
    t.removeAttribute("value");
    return;
  }
  e.hasOwnProperty("value") ? mh(t, e.type, n) : e.hasOwnProperty("defaultValue") && mh(t, e.type, ai(e.defaultValue)), e.checked == null && e.defaultChecked != null && (t.defaultChecked = !!e.defaultChecked);
}
function yg(t, e, n) {
  if (e.hasOwnProperty("value") || e.hasOwnProperty("defaultValue")) {
    var r = e.type;
    if (!(r !== "submit" && r !== "reset" || e.value !== void 0 && e.value !== null)) return;
    e = "" + t._wrapperState.initialValue, n || e === t.value || (t.value = e), t.defaultValue = e;
  }
  n = t.name, n !== "" && (t.name = ""), t.defaultChecked = !!t._wrapperState.initialChecked, n !== "" && (t.name = n);
}
function mh(t, e, n) {
  (e !== "number" || yu(t.ownerDocument) !== t) && (n == null ? t.defaultValue = "" + t._wrapperState.initialValue : t.defaultValue !== "" + n && (t.defaultValue = "" + n));
}
var Qo = Array.isArray;
function Hs(t, e, n, r) {
  if (t = t.options, e) {
    e = {};
    for (var o = 0; o < n.length; o++) e["$" + n[o]] = !0;
    for (n = 0; n < t.length; n++) o = e.hasOwnProperty("$" + t[n].value), t[n].selected !== o && (t[n].selected = o), o && r && (t[n].defaultSelected = !0);
  } else {
    for (n = "" + ai(n), e = null, o = 0; o < t.length; o++) {
      if (t[o].value === n) {
        t[o].selected = !0, r && (t[o].defaultSelected = !0);
        return;
      }
      e !== null || t[o].disabled || (e = t[o]);
    }
    e !== null && (e.selected = !0);
  }
}
function yh(t, e) {
  if (e.dangerouslySetInnerHTML != null) throw Error(K(91));
  return nt({}, e, { value: void 0, defaultValue: void 0, children: "" + t._wrapperState.initialValue });
}
function vg(t, e) {
  var n = e.value;
  if (n == null) {
    if (n = e.children, e = e.defaultValue, n != null) {
      if (e != null) throw Error(K(92));
      if (Qo(n)) {
        if (1 < n.length) throw Error(K(93));
        n = n[0];
      }
      e = n;
    }
    e == null && (e = ""), n = e;
  }
  t._wrapperState = { initialValue: ai(n) };
}
function Mm(t, e) {
  var n = ai(e.value), r = ai(e.defaultValue);
  n != null && (n = "" + n, n !== t.value && (t.value = n), e.defaultValue == null && t.defaultValue !== n && (t.defaultValue = n)), r != null && (t.defaultValue = "" + r);
}
function _g(t) {
  var e = t.textContent;
  e === t._wrapperState.initialValue && e !== "" && e !== null && (t.value = e);
}
function Lm(t) {
  switch (t) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function vh(t, e) {
  return t == null || t === "http://www.w3.org/1999/xhtml" ? Lm(e) : t === "http://www.w3.org/2000/svg" && e === "foreignObject" ? "http://www.w3.org/1999/xhtml" : t;
}
var Ia, Am = function(t) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(e, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return t(e, n, r, o);
    });
  } : t;
}(function(t, e) {
  if (t.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in t) t.innerHTML = e;
  else {
    for (Ia = Ia || document.createElement("div"), Ia.innerHTML = "<svg>" + e.valueOf().toString() + "</svg>", e = Ia.firstChild; t.firstChild; ) t.removeChild(t.firstChild);
    for (; e.firstChild; ) t.appendChild(e.firstChild);
  }
});
function cl(t, e) {
  if (e) {
    var n = t.firstChild;
    if (n && n === t.lastChild && n.nodeType === 3) {
      n.nodeValue = e;
      return;
    }
  }
  t.textContent = e;
}
var bo = {
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
}, rv = ["Webkit", "ms", "Moz", "O"];
Object.keys(bo).forEach(function(t) {
  rv.forEach(function(e) {
    e = e + t.charAt(0).toUpperCase() + t.substring(1), bo[e] = bo[t];
  });
});
function Om(t, e, n) {
  return e == null || typeof e == "boolean" || e === "" ? "" : n || typeof e != "number" || e === 0 || bo.hasOwnProperty(t) && bo[t] ? ("" + e).trim() : e + "px";
}
function Dm(t, e) {
  t = t.style;
  for (var n in e) if (e.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, o = Om(n, e[n], r);
    n === "float" && (n = "cssFloat"), r ? t.setProperty(n, o) : t[n] = o;
  }
}
var iv = nt({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function _h(t, e) {
  if (e) {
    if (iv[t] && (e.children != null || e.dangerouslySetInnerHTML != null)) throw Error(K(137, t));
    if (e.dangerouslySetInnerHTML != null) {
      if (e.children != null) throw Error(K(60));
      if (typeof e.dangerouslySetInnerHTML != "object" || !("__html" in e.dangerouslySetInnerHTML)) throw Error(K(61));
    }
    if (e.style != null && typeof e.style != "object") throw Error(K(62));
  }
}
function Sh(t, e) {
  if (t.indexOf("-") === -1) return typeof e.is == "string";
  switch (t) {
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
var wh = null;
function x0(t) {
  return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
}
var xh = null, js = null, Ws = null;
function Sg(t) {
  if (t = Ll(t)) {
    if (typeof xh != "function") throw Error(K(280));
    var e = t.stateNode;
    e && (e = Ju(e), xh(t.stateNode, t.type, e));
  }
}
function Im(t) {
  js ? Ws ? Ws.push(t) : Ws = [t] : js = t;
}
function zm() {
  if (js) {
    var t = js, e = Ws;
    if (Ws = js = null, Sg(t), e) for (t = 0; t < e.length; t++) Sg(e[t]);
  }
}
function Gm(t, e) {
  return t(e);
}
function Um() {
}
var Rf = !1;
function Bm(t, e, n) {
  if (Rf) return t(e, n);
  Rf = !0;
  try {
    return Gm(t, e, n);
  } finally {
    Rf = !1, (js !== null || Ws !== null) && (Um(), zm());
  }
}
function dl(t, e) {
  var n = t.stateNode;
  if (n === null) return null;
  var r = Ju(n);
  if (r === null) return null;
  n = r[e];
  e: switch (e) {
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
      (r = !r.disabled) || (t = t.type, r = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !r;
      break e;
    default:
      t = !1;
  }
  if (t) return null;
  if (n && typeof n != "function") throw Error(K(231, e, typeof n));
  return n;
}
var Ch = !1;
if (Pr) try {
  var Do = {};
  Object.defineProperty(Do, "passive", { get: function() {
    Ch = !0;
  } }), window.addEventListener("test", Do, Do), window.removeEventListener("test", Do, Do);
} catch {
  Ch = !1;
}
function sv(t, e, n, r, o, l, a, c, f) {
  var g = Array.prototype.slice.call(arguments, 3);
  try {
    e.apply(n, g);
  } catch (y) {
    this.onError(y);
  }
}
var el = !1, vu = null, _u = !1, kh = null, ov = { onError: function(t) {
  el = !0, vu = t;
} };
function lv(t, e, n, r, o, l, a, c, f) {
  el = !1, vu = null, sv.apply(ov, arguments);
}
function av(t, e, n, r, o, l, a, c, f) {
  if (lv.apply(this, arguments), el) {
    if (el) {
      var g = vu;
      el = !1, vu = null;
    } else throw Error(K(198));
    _u || (_u = !0, kh = g);
  }
}
function Zi(t) {
  var e = t, n = t;
  if (t.alternate) for (; e.return; ) e = e.return;
  else {
    t = e;
    do
      e = t, e.flags & 4098 && (n = e.return), t = e.return;
    while (t);
  }
  return e.tag === 3 ? n : null;
}
function Vm(t) {
  if (t.tag === 13) {
    var e = t.memoizedState;
    if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
  }
  return null;
}
function wg(t) {
  if (Zi(t) !== t) throw Error(K(188));
}
function uv(t) {
  var e = t.alternate;
  if (!e) {
    if (e = Zi(t), e === null) throw Error(K(188));
    return e !== t ? null : t;
  }
  for (var n = t, r = e; ; ) {
    var o = n.return;
    if (o === null) break;
    var l = o.alternate;
    if (l === null) {
      if (r = o.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === l.child) {
      for (l = o.child; l; ) {
        if (l === n) return wg(o), t;
        if (l === r) return wg(o), e;
        l = l.sibling;
      }
      throw Error(K(188));
    }
    if (n.return !== r.return) n = o, r = l;
    else {
      for (var a = !1, c = o.child; c; ) {
        if (c === n) {
          a = !0, n = o, r = l;
          break;
        }
        if (c === r) {
          a = !0, r = o, n = l;
          break;
        }
        c = c.sibling;
      }
      if (!a) {
        for (c = l.child; c; ) {
          if (c === n) {
            a = !0, n = l, r = o;
            break;
          }
          if (c === r) {
            a = !0, r = l, n = o;
            break;
          }
          c = c.sibling;
        }
        if (!a) throw Error(K(189));
      }
    }
    if (n.alternate !== r) throw Error(K(190));
  }
  if (n.tag !== 3) throw Error(K(188));
  return n.stateNode.current === n ? t : e;
}
function Hm(t) {
  return t = uv(t), t !== null ? jm(t) : null;
}
function jm(t) {
  if (t.tag === 5 || t.tag === 6) return t;
  for (t = t.child; t !== null; ) {
    var e = jm(t);
    if (e !== null) return e;
    t = t.sibling;
  }
  return null;
}
var Wm = fn.unstable_scheduleCallback, xg = fn.unstable_cancelCallback, cv = fn.unstable_shouldYield, dv = fn.unstable_requestPaint, at = fn.unstable_now, fv = fn.unstable_getCurrentPriorityLevel, C0 = fn.unstable_ImmediatePriority, Km = fn.unstable_UserBlockingPriority, Su = fn.unstable_NormalPriority, hv = fn.unstable_LowPriority, Ym = fn.unstable_IdlePriority, Qu = null, lr = null;
function pv(t) {
  if (lr && typeof lr.onCommitFiberRoot == "function") try {
    lr.onCommitFiberRoot(Qu, t, void 0, (t.current.flags & 128) === 128);
  } catch {
  }
}
var jn = Math.clz32 ? Math.clz32 : yv, gv = Math.log, mv = Math.LN2;
function yv(t) {
  return t >>>= 0, t === 0 ? 32 : 31 - (gv(t) / mv | 0) | 0;
}
var za = 64, Ga = 4194304;
function $o(t) {
  switch (t & -t) {
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
      return t & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return t & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return t;
  }
}
function wu(t, e) {
  var n = t.pendingLanes;
  if (n === 0) return 0;
  var r = 0, o = t.suspendedLanes, l = t.pingedLanes, a = n & 268435455;
  if (a !== 0) {
    var c = a & ~o;
    c !== 0 ? r = $o(c) : (l &= a, l !== 0 && (r = $o(l)));
  } else a = n & ~o, a !== 0 ? r = $o(a) : l !== 0 && (r = $o(l));
  if (r === 0) return 0;
  if (e !== 0 && e !== r && !(e & o) && (o = r & -r, l = e & -e, o >= l || o === 16 && (l & 4194240) !== 0)) return e;
  if (r & 4 && (r |= n & 16), e = t.entangledLanes, e !== 0) for (t = t.entanglements, e &= r; 0 < e; ) n = 31 - jn(e), o = 1 << n, r |= t[n], e &= ~o;
  return r;
}
function vv(t, e) {
  switch (t) {
    case 1:
    case 2:
    case 4:
      return e + 250;
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
      return e + 5e3;
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
function _v(t, e) {
  for (var n = t.suspendedLanes, r = t.pingedLanes, o = t.expirationTimes, l = t.pendingLanes; 0 < l; ) {
    var a = 31 - jn(l), c = 1 << a, f = o[a];
    f === -1 ? (!(c & n) || c & r) && (o[a] = vv(c, e)) : f <= e && (t.expiredLanes |= c), l &= ~c;
  }
}
function Eh(t) {
  return t = t.pendingLanes & -1073741825, t !== 0 ? t : t & 1073741824 ? 1073741824 : 0;
}
function Xm() {
  var t = za;
  return za <<= 1, !(za & 4194240) && (za = 64), t;
}
function Ff(t) {
  for (var e = [], n = 0; 31 > n; n++) e.push(t);
  return e;
}
function Fl(t, e, n) {
  t.pendingLanes |= e, e !== 536870912 && (t.suspendedLanes = 0, t.pingedLanes = 0), t = t.eventTimes, e = 31 - jn(e), t[e] = n;
}
function Sv(t, e) {
  var n = t.pendingLanes & ~e;
  t.pendingLanes = e, t.suspendedLanes = 0, t.pingedLanes = 0, t.expiredLanes &= e, t.mutableReadLanes &= e, t.entangledLanes &= e, e = t.entanglements;
  var r = t.eventTimes;
  for (t = t.expirationTimes; 0 < n; ) {
    var o = 31 - jn(n), l = 1 << o;
    e[o] = 0, r[o] = -1, t[o] = -1, n &= ~l;
  }
}
function k0(t, e) {
  var n = t.entangledLanes |= e;
  for (t = t.entanglements; n; ) {
    var r = 31 - jn(n), o = 1 << r;
    o & e | t[r] & e && (t[r] |= e), n &= ~o;
  }
}
var Oe = 0;
function Qm(t) {
  return t &= -t, 1 < t ? 4 < t ? t & 268435455 ? 16 : 536870912 : 4 : 1;
}
var $m, E0, qm, Zm, Jm, Ph = !1, Ua = [], ei = null, ti = null, ni = null, fl = /* @__PURE__ */ new Map(), hl = /* @__PURE__ */ new Map(), qr = [], wv = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Cg(t, e) {
  switch (t) {
    case "focusin":
    case "focusout":
      ei = null;
      break;
    case "dragenter":
    case "dragleave":
      ti = null;
      break;
    case "mouseover":
    case "mouseout":
      ni = null;
      break;
    case "pointerover":
    case "pointerout":
      fl.delete(e.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      hl.delete(e.pointerId);
  }
}
function Io(t, e, n, r, o, l) {
  return t === null || t.nativeEvent !== l ? (t = { blockedOn: e, domEventName: n, eventSystemFlags: r, nativeEvent: l, targetContainers: [o] }, e !== null && (e = Ll(e), e !== null && E0(e)), t) : (t.eventSystemFlags |= r, e = t.targetContainers, o !== null && e.indexOf(o) === -1 && e.push(o), t);
}
function xv(t, e, n, r, o) {
  switch (e) {
    case "focusin":
      return ei = Io(ei, t, e, n, r, o), !0;
    case "dragenter":
      return ti = Io(ti, t, e, n, r, o), !0;
    case "mouseover":
      return ni = Io(ni, t, e, n, r, o), !0;
    case "pointerover":
      var l = o.pointerId;
      return fl.set(l, Io(fl.get(l) || null, t, e, n, r, o)), !0;
    case "gotpointercapture":
      return l = o.pointerId, hl.set(l, Io(hl.get(l) || null, t, e, n, r, o)), !0;
  }
  return !1;
}
function bm(t) {
  var e = Bi(t.target);
  if (e !== null) {
    var n = Zi(e);
    if (n !== null) {
      if (e = n.tag, e === 13) {
        if (e = Vm(n), e !== null) {
          t.blockedOn = e, Jm(t.priority, function() {
            qm(n);
          });
          return;
        }
      } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  t.blockedOn = null;
}
function su(t) {
  if (t.blockedOn !== null) return !1;
  for (var e = t.targetContainers; 0 < e.length; ) {
    var n = Th(t.domEventName, t.eventSystemFlags, e[0], t.nativeEvent);
    if (n === null) {
      n = t.nativeEvent;
      var r = new n.constructor(n.type, n);
      wh = r, n.target.dispatchEvent(r), wh = null;
    } else return e = Ll(n), e !== null && E0(e), t.blockedOn = n, !1;
    e.shift();
  }
  return !0;
}
function kg(t, e, n) {
  su(t) && n.delete(e);
}
function Cv() {
  Ph = !1, ei !== null && su(ei) && (ei = null), ti !== null && su(ti) && (ti = null), ni !== null && su(ni) && (ni = null), fl.forEach(kg), hl.forEach(kg);
}
function zo(t, e) {
  t.blockedOn === e && (t.blockedOn = null, Ph || (Ph = !0, fn.unstable_scheduleCallback(fn.unstable_NormalPriority, Cv)));
}
function pl(t) {
  function e(o) {
    return zo(o, t);
  }
  if (0 < Ua.length) {
    zo(Ua[0], t);
    for (var n = 1; n < Ua.length; n++) {
      var r = Ua[n];
      r.blockedOn === t && (r.blockedOn = null);
    }
  }
  for (ei !== null && zo(ei, t), ti !== null && zo(ti, t), ni !== null && zo(ni, t), fl.forEach(e), hl.forEach(e), n = 0; n < qr.length; n++) r = qr[n], r.blockedOn === t && (r.blockedOn = null);
  for (; 0 < qr.length && (n = qr[0], n.blockedOn === null); ) bm(n), n.blockedOn === null && qr.shift();
}
var Ks = Fr.ReactCurrentBatchConfig, xu = !0;
function kv(t, e, n, r) {
  var o = Oe, l = Ks.transition;
  Ks.transition = null;
  try {
    Oe = 1, P0(t, e, n, r);
  } finally {
    Oe = o, Ks.transition = l;
  }
}
function Ev(t, e, n, r) {
  var o = Oe, l = Ks.transition;
  Ks.transition = null;
  try {
    Oe = 4, P0(t, e, n, r);
  } finally {
    Oe = o, Ks.transition = l;
  }
}
function P0(t, e, n, r) {
  if (xu) {
    var o = Th(t, e, n, r);
    if (o === null) Bf(t, e, r, Cu, n), Cg(t, r);
    else if (xv(o, t, e, n, r)) r.stopPropagation();
    else if (Cg(t, r), e & 4 && -1 < wv.indexOf(t)) {
      for (; o !== null; ) {
        var l = Ll(o);
        if (l !== null && $m(l), l = Th(t, e, n, r), l === null && Bf(t, e, r, Cu, n), l === o) break;
        o = l;
      }
      o !== null && r.stopPropagation();
    } else Bf(t, e, r, null, n);
  }
}
var Cu = null;
function Th(t, e, n, r) {
  if (Cu = null, t = x0(r), t = Bi(t), t !== null) if (e = Zi(t), e === null) t = null;
  else if (n = e.tag, n === 13) {
    if (t = Vm(e), t !== null) return t;
    t = null;
  } else if (n === 3) {
    if (e.stateNode.current.memoizedState.isDehydrated) return e.tag === 3 ? e.stateNode.containerInfo : null;
    t = null;
  } else e !== t && (t = null);
  return Cu = t, null;
}
function e3(t) {
  switch (t) {
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
      switch (fv()) {
        case C0:
          return 1;
        case Km:
          return 4;
        case Su:
        case hv:
          return 16;
        case Ym:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Jr = null, T0 = null, ou = null;
function t3() {
  if (ou) return ou;
  var t, e = T0, n = e.length, r, o = "value" in Jr ? Jr.value : Jr.textContent, l = o.length;
  for (t = 0; t < n && e[t] === o[t]; t++) ;
  var a = n - t;
  for (r = 1; r <= a && e[n - r] === o[l - r]; r++) ;
  return ou = o.slice(t, 1 < r ? 1 - r : void 0);
}
function lu(t) {
  var e = t.keyCode;
  return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
}
function Ba() {
  return !0;
}
function Eg() {
  return !1;
}
function pn(t) {
  function e(n, r, o, l, a) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = l, this.target = a, this.currentTarget = null;
    for (var c in t) t.hasOwnProperty(c) && (n = t[c], this[c] = n ? n(l) : l[c]);
    return this.isDefaultPrevented = (l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1) ? Ba : Eg, this.isPropagationStopped = Eg, this;
  }
  return nt(e.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Ba);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Ba);
  }, persist: function() {
  }, isPersistent: Ba }), e;
}
var so = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(t) {
  return t.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, N0 = pn(so), Ml = nt({}, so, { view: 0, detail: 0 }), Pv = pn(Ml), Mf, Lf, Go, $u = nt({}, Ml, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: R0, button: 0, buttons: 0, relatedTarget: function(t) {
  return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
}, movementX: function(t) {
  return "movementX" in t ? t.movementX : (t !== Go && (Go && t.type === "mousemove" ? (Mf = t.screenX - Go.screenX, Lf = t.screenY - Go.screenY) : Lf = Mf = 0, Go = t), Mf);
}, movementY: function(t) {
  return "movementY" in t ? t.movementY : Lf;
} }), Pg = pn($u), Tv = nt({}, $u, { dataTransfer: 0 }), Nv = pn(Tv), Rv = nt({}, Ml, { relatedTarget: 0 }), Af = pn(Rv), Fv = nt({}, so, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Mv = pn(Fv), Lv = nt({}, so, { clipboardData: function(t) {
  return "clipboardData" in t ? t.clipboardData : window.clipboardData;
} }), Av = pn(Lv), Ov = nt({}, so, { data: 0 }), Tg = pn(Ov), Dv = {
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
}, Iv = {
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
}, zv = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Gv(t) {
  var e = this.nativeEvent;
  return e.getModifierState ? e.getModifierState(t) : (t = zv[t]) ? !!e[t] : !1;
}
function R0() {
  return Gv;
}
var Uv = nt({}, Ml, { key: function(t) {
  if (t.key) {
    var e = Dv[t.key] || t.key;
    if (e !== "Unidentified") return e;
  }
  return t.type === "keypress" ? (t = lu(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? Iv[t.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: R0, charCode: function(t) {
  return t.type === "keypress" ? lu(t) : 0;
}, keyCode: function(t) {
  return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
}, which: function(t) {
  return t.type === "keypress" ? lu(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
} }), Bv = pn(Uv), Vv = nt({}, $u, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Ng = pn(Vv), Hv = nt({}, Ml, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: R0 }), jv = pn(Hv), Wv = nt({}, so, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Kv = pn(Wv), Yv = nt({}, $u, {
  deltaX: function(t) {
    return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
  },
  deltaY: function(t) {
    return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Xv = pn(Yv), Qv = [9, 13, 27, 32], F0 = Pr && "CompositionEvent" in window, tl = null;
Pr && "documentMode" in document && (tl = document.documentMode);
var $v = Pr && "TextEvent" in window && !tl, n3 = Pr && (!F0 || tl && 8 < tl && 11 >= tl), Rg = " ", Fg = !1;
function r3(t, e) {
  switch (t) {
    case "keyup":
      return Qv.indexOf(e.keyCode) !== -1;
    case "keydown":
      return e.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function i3(t) {
  return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
}
var Ls = !1;
function qv(t, e) {
  switch (t) {
    case "compositionend":
      return i3(e);
    case "keypress":
      return e.which !== 32 ? null : (Fg = !0, Rg);
    case "textInput":
      return t = e.data, t === Rg && Fg ? null : t;
    default:
      return null;
  }
}
function Zv(t, e) {
  if (Ls) return t === "compositionend" || !F0 && r3(t, e) ? (t = t3(), ou = T0 = Jr = null, Ls = !1, t) : null;
  switch (t) {
    case "paste":
      return null;
    case "keypress":
      if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
        if (e.char && 1 < e.char.length) return e.char;
        if (e.which) return String.fromCharCode(e.which);
      }
      return null;
    case "compositionend":
      return n3 && e.locale !== "ko" ? null : e.data;
    default:
      return null;
  }
}
var Jv = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Mg(t) {
  var e = t && t.nodeName && t.nodeName.toLowerCase();
  return e === "input" ? !!Jv[t.type] : e === "textarea";
}
function s3(t, e, n, r) {
  Im(r), e = ku(e, "onChange"), 0 < e.length && (n = new N0("onChange", "change", null, n, r), t.push({ event: n, listeners: e }));
}
var nl = null, gl = null;
function bv(t) {
  m3(t, 0);
}
function qu(t) {
  var e = Ds(t);
  if (Rm(e)) return t;
}
function e6(t, e) {
  if (t === "change") return e;
}
var o3 = !1;
if (Pr) {
  var Of;
  if (Pr) {
    var Df = "oninput" in document;
    if (!Df) {
      var Lg = document.createElement("div");
      Lg.setAttribute("oninput", "return;"), Df = typeof Lg.oninput == "function";
    }
    Of = Df;
  } else Of = !1;
  o3 = Of && (!document.documentMode || 9 < document.documentMode);
}
function Ag() {
  nl && (nl.detachEvent("onpropertychange", l3), gl = nl = null);
}
function l3(t) {
  if (t.propertyName === "value" && qu(gl)) {
    var e = [];
    s3(e, gl, t, x0(t)), Bm(bv, e);
  }
}
function t6(t, e, n) {
  t === "focusin" ? (Ag(), nl = e, gl = n, nl.attachEvent("onpropertychange", l3)) : t === "focusout" && Ag();
}
function n6(t) {
  if (t === "selectionchange" || t === "keyup" || t === "keydown") return qu(gl);
}
function r6(t, e) {
  if (t === "click") return qu(e);
}
function i6(t, e) {
  if (t === "input" || t === "change") return qu(e);
}
function s6(t, e) {
  return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
}
var Yn = typeof Object.is == "function" ? Object.is : s6;
function ml(t, e) {
  if (Yn(t, e)) return !0;
  if (typeof t != "object" || t === null || typeof e != "object" || e === null) return !1;
  var n = Object.keys(t), r = Object.keys(e);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!uh.call(e, o) || !Yn(t[o], e[o])) return !1;
  }
  return !0;
}
function Og(t) {
  for (; t && t.firstChild; ) t = t.firstChild;
  return t;
}
function Dg(t, e) {
  var n = Og(t);
  t = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (r = t + n.textContent.length, t <= e && r >= e) return { node: n, offset: e - t };
      t = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Og(n);
  }
}
function a3(t, e) {
  return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? a3(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1;
}
function u3() {
  for (var t = window, e = yu(); e instanceof t.HTMLIFrameElement; ) {
    try {
      var n = typeof e.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) t = e.contentWindow;
    else break;
    e = yu(t.document);
  }
  return e;
}
function M0(t) {
  var e = t && t.nodeName && t.nodeName.toLowerCase();
  return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
}
function o6(t) {
  var e = u3(), n = t.focusedElem, r = t.selectionRange;
  if (e !== n && n && n.ownerDocument && a3(n.ownerDocument.documentElement, n)) {
    if (r !== null && M0(n)) {
      if (e = r.start, t = r.end, t === void 0 && (t = e), "selectionStart" in n) n.selectionStart = e, n.selectionEnd = Math.min(t, n.value.length);
      else if (t = (e = n.ownerDocument || document) && e.defaultView || window, t.getSelection) {
        t = t.getSelection();
        var o = n.textContent.length, l = Math.min(r.start, o);
        r = r.end === void 0 ? l : Math.min(r.end, o), !t.extend && l > r && (o = r, r = l, l = o), o = Dg(n, l);
        var a = Dg(
          n,
          r
        );
        o && a && (t.rangeCount !== 1 || t.anchorNode !== o.node || t.anchorOffset !== o.offset || t.focusNode !== a.node || t.focusOffset !== a.offset) && (e = e.createRange(), e.setStart(o.node, o.offset), t.removeAllRanges(), l > r ? (t.addRange(e), t.extend(a.node, a.offset)) : (e.setEnd(a.node, a.offset), t.addRange(e)));
      }
    }
    for (e = [], t = n; t = t.parentNode; ) t.nodeType === 1 && e.push({ element: t, left: t.scrollLeft, top: t.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < e.length; n++) t = e[n], t.element.scrollLeft = t.left, t.element.scrollTop = t.top;
  }
}
var l6 = Pr && "documentMode" in document && 11 >= document.documentMode, As = null, Nh = null, rl = null, Rh = !1;
function Ig(t, e, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Rh || As == null || As !== yu(r) || (r = As, "selectionStart" in r && M0(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), rl && ml(rl, r) || (rl = r, r = ku(Nh, "onSelect"), 0 < r.length && (e = new N0("onSelect", "select", null, e, n), t.push({ event: e, listeners: r }), e.target = As)));
}
function Va(t, e) {
  var n = {};
  return n[t.toLowerCase()] = e.toLowerCase(), n["Webkit" + t] = "webkit" + e, n["Moz" + t] = "moz" + e, n;
}
var Os = { animationend: Va("Animation", "AnimationEnd"), animationiteration: Va("Animation", "AnimationIteration"), animationstart: Va("Animation", "AnimationStart"), transitionend: Va("Transition", "TransitionEnd") }, If = {}, c3 = {};
Pr && (c3 = document.createElement("div").style, "AnimationEvent" in window || (delete Os.animationend.animation, delete Os.animationiteration.animation, delete Os.animationstart.animation), "TransitionEvent" in window || delete Os.transitionend.transition);
function Zu(t) {
  if (If[t]) return If[t];
  if (!Os[t]) return t;
  var e = Os[t], n;
  for (n in e) if (e.hasOwnProperty(n) && n in c3) return If[t] = e[n];
  return t;
}
var d3 = Zu("animationend"), f3 = Zu("animationiteration"), h3 = Zu("animationstart"), p3 = Zu("transitionend"), g3 = /* @__PURE__ */ new Map(), zg = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function di(t, e) {
  g3.set(t, e), qi(e, [t]);
}
for (var zf = 0; zf < zg.length; zf++) {
  var Gf = zg[zf], a6 = Gf.toLowerCase(), u6 = Gf[0].toUpperCase() + Gf.slice(1);
  di(a6, "on" + u6);
}
di(d3, "onAnimationEnd");
di(f3, "onAnimationIteration");
di(h3, "onAnimationStart");
di("dblclick", "onDoubleClick");
di("focusin", "onFocus");
di("focusout", "onBlur");
di(p3, "onTransitionEnd");
Qs("onMouseEnter", ["mouseout", "mouseover"]);
Qs("onMouseLeave", ["mouseout", "mouseover"]);
Qs("onPointerEnter", ["pointerout", "pointerover"]);
Qs("onPointerLeave", ["pointerout", "pointerover"]);
qi("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
qi("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
qi("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
qi("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
qi("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
qi("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var qo = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), c6 = new Set("cancel close invalid load scroll toggle".split(" ").concat(qo));
function Gg(t, e, n) {
  var r = t.type || "unknown-event";
  t.currentTarget = n, av(r, e, void 0, t), t.currentTarget = null;
}
function m3(t, e) {
  e = (e & 4) !== 0;
  for (var n = 0; n < t.length; n++) {
    var r = t[n], o = r.event;
    r = r.listeners;
    e: {
      var l = void 0;
      if (e) for (var a = r.length - 1; 0 <= a; a--) {
        var c = r[a], f = c.instance, g = c.currentTarget;
        if (c = c.listener, f !== l && o.isPropagationStopped()) break e;
        Gg(o, c, g), l = f;
      }
      else for (a = 0; a < r.length; a++) {
        if (c = r[a], f = c.instance, g = c.currentTarget, c = c.listener, f !== l && o.isPropagationStopped()) break e;
        Gg(o, c, g), l = f;
      }
    }
  }
  if (_u) throw t = kh, _u = !1, kh = null, t;
}
function Ke(t, e) {
  var n = e[Oh];
  n === void 0 && (n = e[Oh] = /* @__PURE__ */ new Set());
  var r = t + "__bubble";
  n.has(r) || (y3(e, t, 2, !1), n.add(r));
}
function Uf(t, e, n) {
  var r = 0;
  e && (r |= 4), y3(n, t, r, e);
}
var Ha = "_reactListening" + Math.random().toString(36).slice(2);
function yl(t) {
  if (!t[Ha]) {
    t[Ha] = !0, km.forEach(function(n) {
      n !== "selectionchange" && (c6.has(n) || Uf(n, !1, t), Uf(n, !0, t));
    });
    var e = t.nodeType === 9 ? t : t.ownerDocument;
    e === null || e[Ha] || (e[Ha] = !0, Uf("selectionchange", !1, e));
  }
}
function y3(t, e, n, r) {
  switch (e3(e)) {
    case 1:
      var o = kv;
      break;
    case 4:
      o = Ev;
      break;
    default:
      o = P0;
  }
  n = o.bind(null, e, n, t), o = void 0, !Ch || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (o = !0), r ? o !== void 0 ? t.addEventListener(e, n, { capture: !0, passive: o }) : t.addEventListener(e, n, !0) : o !== void 0 ? t.addEventListener(e, n, { passive: o }) : t.addEventListener(e, n, !1);
}
function Bf(t, e, n, r, o) {
  var l = r;
  if (!(e & 1) && !(e & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var a = r.tag;
    if (a === 3 || a === 4) {
      var c = r.stateNode.containerInfo;
      if (c === o || c.nodeType === 8 && c.parentNode === o) break;
      if (a === 4) for (a = r.return; a !== null; ) {
        var f = a.tag;
        if ((f === 3 || f === 4) && (f = a.stateNode.containerInfo, f === o || f.nodeType === 8 && f.parentNode === o)) return;
        a = a.return;
      }
      for (; c !== null; ) {
        if (a = Bi(c), a === null) return;
        if (f = a.tag, f === 5 || f === 6) {
          r = l = a;
          continue e;
        }
        c = c.parentNode;
      }
    }
    r = r.return;
  }
  Bm(function() {
    var g = l, y = x0(n), C = [];
    e: {
      var S = g3.get(t);
      if (S !== void 0) {
        var x = N0, v = t;
        switch (t) {
          case "keypress":
            if (lu(n) === 0) break e;
          case "keydown":
          case "keyup":
            x = Bv;
            break;
          case "focusin":
            v = "focus", x = Af;
            break;
          case "focusout":
            v = "blur", x = Af;
            break;
          case "beforeblur":
          case "afterblur":
            x = Af;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            x = Pg;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            x = Nv;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            x = jv;
            break;
          case d3:
          case f3:
          case h3:
            x = Mv;
            break;
          case p3:
            x = Kv;
            break;
          case "scroll":
            x = Pv;
            break;
          case "wheel":
            x = Xv;
            break;
          case "copy":
          case "cut":
          case "paste":
            x = Av;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            x = Ng;
        }
        var E = (e & 4) !== 0, N = !E && t === "scroll", k = E ? S !== null ? S + "Capture" : null : S;
        E = [];
        for (var w = g, p; w !== null; ) {
          p = w;
          var _ = p.stateNode;
          if (p.tag === 5 && _ !== null && (p = _, k !== null && (_ = dl(w, k), _ != null && E.push(vl(w, _, p)))), N) break;
          w = w.return;
        }
        0 < E.length && (S = new x(S, v, null, n, y), C.push({ event: S, listeners: E }));
      }
    }
    if (!(e & 7)) {
      e: {
        if (S = t === "mouseover" || t === "pointerover", x = t === "mouseout" || t === "pointerout", S && n !== wh && (v = n.relatedTarget || n.fromElement) && (Bi(v) || v[Tr])) break e;
        if ((x || S) && (S = y.window === y ? y : (S = y.ownerDocument) ? S.defaultView || S.parentWindow : window, x ? (v = n.relatedTarget || n.toElement, x = g, v = v ? Bi(v) : null, v !== null && (N = Zi(v), v !== N || v.tag !== 5 && v.tag !== 6) && (v = null)) : (x = null, v = g), x !== v)) {
          if (E = Pg, _ = "onMouseLeave", k = "onMouseEnter", w = "mouse", (t === "pointerout" || t === "pointerover") && (E = Ng, _ = "onPointerLeave", k = "onPointerEnter", w = "pointer"), N = x == null ? S : Ds(x), p = v == null ? S : Ds(v), S = new E(_, w + "leave", x, n, y), S.target = N, S.relatedTarget = p, _ = null, Bi(y) === g && (E = new E(k, w + "enter", v, n, y), E.target = p, E.relatedTarget = N, _ = E), N = _, x && v) t: {
            for (E = x, k = v, w = 0, p = E; p; p = ks(p)) w++;
            for (p = 0, _ = k; _; _ = ks(_)) p++;
            for (; 0 < w - p; ) E = ks(E), w--;
            for (; 0 < p - w; ) k = ks(k), p--;
            for (; w--; ) {
              if (E === k || k !== null && E === k.alternate) break t;
              E = ks(E), k = ks(k);
            }
            E = null;
          }
          else E = null;
          x !== null && Ug(C, S, x, E, !1), v !== null && N !== null && Ug(C, N, v, E, !0);
        }
      }
      e: {
        if (S = g ? Ds(g) : window, x = S.nodeName && S.nodeName.toLowerCase(), x === "select" || x === "input" && S.type === "file") var T = e6;
        else if (Mg(S)) if (o3) T = i6;
        else {
          T = n6;
          var F = t6;
        }
        else (x = S.nodeName) && x.toLowerCase() === "input" && (S.type === "checkbox" || S.type === "radio") && (T = r6);
        if (T && (T = T(t, g))) {
          s3(C, T, n, y);
          break e;
        }
        F && F(t, S, g), t === "focusout" && (F = S._wrapperState) && F.controlled && S.type === "number" && mh(S, "number", S.value);
      }
      switch (F = g ? Ds(g) : window, t) {
        case "focusin":
          (Mg(F) || F.contentEditable === "true") && (As = F, Nh = g, rl = null);
          break;
        case "focusout":
          rl = Nh = As = null;
          break;
        case "mousedown":
          Rh = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Rh = !1, Ig(C, n, y);
          break;
        case "selectionchange":
          if (l6) break;
        case "keydown":
        case "keyup":
          Ig(C, n, y);
      }
      var L;
      if (F0) e: {
        switch (t) {
          case "compositionstart":
            var R = "onCompositionStart";
            break e;
          case "compositionend":
            R = "onCompositionEnd";
            break e;
          case "compositionupdate":
            R = "onCompositionUpdate";
            break e;
        }
        R = void 0;
      }
      else Ls ? r3(t, n) && (R = "onCompositionEnd") : t === "keydown" && n.keyCode === 229 && (R = "onCompositionStart");
      R && (n3 && n.locale !== "ko" && (Ls || R !== "onCompositionStart" ? R === "onCompositionEnd" && Ls && (L = t3()) : (Jr = y, T0 = "value" in Jr ? Jr.value : Jr.textContent, Ls = !0)), F = ku(g, R), 0 < F.length && (R = new Tg(R, t, null, n, y), C.push({ event: R, listeners: F }), L ? R.data = L : (L = i3(n), L !== null && (R.data = L)))), (L = $v ? qv(t, n) : Zv(t, n)) && (g = ku(g, "onBeforeInput"), 0 < g.length && (y = new Tg("onBeforeInput", "beforeinput", null, n, y), C.push({ event: y, listeners: g }), y.data = L));
    }
    m3(C, e);
  });
}
function vl(t, e, n) {
  return { instance: t, listener: e, currentTarget: n };
}
function ku(t, e) {
  for (var n = e + "Capture", r = []; t !== null; ) {
    var o = t, l = o.stateNode;
    o.tag === 5 && l !== null && (o = l, l = dl(t, n), l != null && r.unshift(vl(t, l, o)), l = dl(t, e), l != null && r.push(vl(t, l, o))), t = t.return;
  }
  return r;
}
function ks(t) {
  if (t === null) return null;
  do
    t = t.return;
  while (t && t.tag !== 5);
  return t || null;
}
function Ug(t, e, n, r, o) {
  for (var l = e._reactName, a = []; n !== null && n !== r; ) {
    var c = n, f = c.alternate, g = c.stateNode;
    if (f !== null && f === r) break;
    c.tag === 5 && g !== null && (c = g, o ? (f = dl(n, l), f != null && a.unshift(vl(n, f, c))) : o || (f = dl(n, l), f != null && a.push(vl(n, f, c)))), n = n.return;
  }
  a.length !== 0 && t.push({ event: e, listeners: a });
}
var d6 = /\r\n?/g, f6 = /\u0000|\uFFFD/g;
function Bg(t) {
  return (typeof t == "string" ? t : "" + t).replace(d6, `
`).replace(f6, "");
}
function ja(t, e, n) {
  if (e = Bg(e), Bg(t) !== e && n) throw Error(K(425));
}
function Eu() {
}
var Fh = null, Mh = null;
function Lh(t, e) {
  return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
}
var Ah = typeof setTimeout == "function" ? setTimeout : void 0, h6 = typeof clearTimeout == "function" ? clearTimeout : void 0, Vg = typeof Promise == "function" ? Promise : void 0, p6 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Vg < "u" ? function(t) {
  return Vg.resolve(null).then(t).catch(g6);
} : Ah;
function g6(t) {
  setTimeout(function() {
    throw t;
  });
}
function Vf(t, e) {
  var n = e, r = 0;
  do {
    var o = n.nextSibling;
    if (t.removeChild(n), o && o.nodeType === 8) if (n = o.data, n === "/$") {
      if (r === 0) {
        t.removeChild(o), pl(e);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
  } while (n);
  pl(e);
}
function ri(t) {
  for (; t != null; t = t.nextSibling) {
    var e = t.nodeType;
    if (e === 1 || e === 3) break;
    if (e === 8) {
      if (e = t.data, e === "$" || e === "$!" || e === "$?") break;
      if (e === "/$") return null;
    }
  }
  return t;
}
function Hg(t) {
  t = t.previousSibling;
  for (var e = 0; t; ) {
    if (t.nodeType === 8) {
      var n = t.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (e === 0) return t;
        e--;
      } else n === "/$" && e++;
    }
    t = t.previousSibling;
  }
  return null;
}
var oo = Math.random().toString(36).slice(2), sr = "__reactFiber$" + oo, _l = "__reactProps$" + oo, Tr = "__reactContainer$" + oo, Oh = "__reactEvents$" + oo, m6 = "__reactListeners$" + oo, y6 = "__reactHandles$" + oo;
function Bi(t) {
  var e = t[sr];
  if (e) return e;
  for (var n = t.parentNode; n; ) {
    if (e = n[Tr] || n[sr]) {
      if (n = e.alternate, e.child !== null || n !== null && n.child !== null) for (t = Hg(t); t !== null; ) {
        if (n = t[sr]) return n;
        t = Hg(t);
      }
      return e;
    }
    t = n, n = t.parentNode;
  }
  return null;
}
function Ll(t) {
  return t = t[sr] || t[Tr], !t || t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3 ? null : t;
}
function Ds(t) {
  if (t.tag === 5 || t.tag === 6) return t.stateNode;
  throw Error(K(33));
}
function Ju(t) {
  return t[_l] || null;
}
var Dh = [], Is = -1;
function fi(t) {
  return { current: t };
}
function Ye(t) {
  0 > Is || (t.current = Dh[Is], Dh[Is] = null, Is--);
}
function He(t, e) {
  Is++, Dh[Is] = t.current, t.current = e;
}
var ui = {}, Bt = fi(ui), nn = fi(!1), Ki = ui;
function $s(t, e) {
  var n = t.type.contextTypes;
  if (!n) return ui;
  var r = t.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === e) return r.__reactInternalMemoizedMaskedChildContext;
  var o = {}, l;
  for (l in n) o[l] = e[l];
  return r && (t = t.stateNode, t.__reactInternalMemoizedUnmaskedChildContext = e, t.__reactInternalMemoizedMaskedChildContext = o), o;
}
function rn(t) {
  return t = t.childContextTypes, t != null;
}
function Pu() {
  Ye(nn), Ye(Bt);
}
function jg(t, e, n) {
  if (Bt.current !== ui) throw Error(K(168));
  He(Bt, e), He(nn, n);
}
function v3(t, e, n) {
  var r = t.stateNode;
  if (e = e.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in e)) throw Error(K(108, tv(t) || "Unknown", o));
  return nt({}, n, r);
}
function Tu(t) {
  return t = (t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext || ui, Ki = Bt.current, He(Bt, t), He(nn, nn.current), !0;
}
function Wg(t, e, n) {
  var r = t.stateNode;
  if (!r) throw Error(K(169));
  n ? (t = v3(t, e, Ki), r.__reactInternalMemoizedMergedChildContext = t, Ye(nn), Ye(Bt), He(Bt, t)) : Ye(nn), He(nn, n);
}
var wr = null, bu = !1, Hf = !1;
function _3(t) {
  wr === null ? wr = [t] : wr.push(t);
}
function v6(t) {
  bu = !0, _3(t);
}
function hi() {
  if (!Hf && wr !== null) {
    Hf = !0;
    var t = 0, e = Oe;
    try {
      var n = wr;
      for (Oe = 1; t < n.length; t++) {
        var r = n[t];
        do
          r = r(!0);
        while (r !== null);
      }
      wr = null, bu = !1;
    } catch (o) {
      throw wr !== null && (wr = wr.slice(t + 1)), Wm(C0, hi), o;
    } finally {
      Oe = e, Hf = !1;
    }
  }
  return null;
}
var zs = [], Gs = 0, Nu = null, Ru = 0, En = [], Pn = 0, Yi = null, xr = 1, Cr = "";
function zi(t, e) {
  zs[Gs++] = Ru, zs[Gs++] = Nu, Nu = t, Ru = e;
}
function S3(t, e, n) {
  En[Pn++] = xr, En[Pn++] = Cr, En[Pn++] = Yi, Yi = t;
  var r = xr;
  t = Cr;
  var o = 32 - jn(r) - 1;
  r &= ~(1 << o), n += 1;
  var l = 32 - jn(e) + o;
  if (30 < l) {
    var a = o - o % 5;
    l = (r & (1 << a) - 1).toString(32), r >>= a, o -= a, xr = 1 << 32 - jn(e) + o | n << o | r, Cr = l + t;
  } else xr = 1 << l | n << o | r, Cr = t;
}
function L0(t) {
  t.return !== null && (zi(t, 1), S3(t, 1, 0));
}
function A0(t) {
  for (; t === Nu; ) Nu = zs[--Gs], zs[Gs] = null, Ru = zs[--Gs], zs[Gs] = null;
  for (; t === Yi; ) Yi = En[--Pn], En[Pn] = null, Cr = En[--Pn], En[Pn] = null, xr = En[--Pn], En[Pn] = null;
}
var dn = null, cn = null, qe = !1, Hn = null;
function w3(t, e) {
  var n = Tn(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = e, n.return = t, e = t.deletions, e === null ? (t.deletions = [n], t.flags |= 16) : e.push(n);
}
function Kg(t, e) {
  switch (t.tag) {
    case 5:
      var n = t.type;
      return e = e.nodeType !== 1 || n.toLowerCase() !== e.nodeName.toLowerCase() ? null : e, e !== null ? (t.stateNode = e, dn = t, cn = ri(e.firstChild), !0) : !1;
    case 6:
      return e = t.pendingProps === "" || e.nodeType !== 3 ? null : e, e !== null ? (t.stateNode = e, dn = t, cn = null, !0) : !1;
    case 13:
      return e = e.nodeType !== 8 ? null : e, e !== null ? (n = Yi !== null ? { id: xr, overflow: Cr } : null, t.memoizedState = { dehydrated: e, treeContext: n, retryLane: 1073741824 }, n = Tn(18, null, null, 0), n.stateNode = e, n.return = t, t.child = n, dn = t, cn = null, !0) : !1;
    default:
      return !1;
  }
}
function Ih(t) {
  return (t.mode & 1) !== 0 && (t.flags & 128) === 0;
}
function zh(t) {
  if (qe) {
    var e = cn;
    if (e) {
      var n = e;
      if (!Kg(t, e)) {
        if (Ih(t)) throw Error(K(418));
        e = ri(n.nextSibling);
        var r = dn;
        e && Kg(t, e) ? w3(r, n) : (t.flags = t.flags & -4097 | 2, qe = !1, dn = t);
      }
    } else {
      if (Ih(t)) throw Error(K(418));
      t.flags = t.flags & -4097 | 2, qe = !1, dn = t;
    }
  }
}
function Yg(t) {
  for (t = t.return; t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13; ) t = t.return;
  dn = t;
}
function Wa(t) {
  if (t !== dn) return !1;
  if (!qe) return Yg(t), qe = !0, !1;
  var e;
  if ((e = t.tag !== 3) && !(e = t.tag !== 5) && (e = t.type, e = e !== "head" && e !== "body" && !Lh(t.type, t.memoizedProps)), e && (e = cn)) {
    if (Ih(t)) throw x3(), Error(K(418));
    for (; e; ) w3(t, e), e = ri(e.nextSibling);
  }
  if (Yg(t), t.tag === 13) {
    if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(K(317));
    e: {
      for (t = t.nextSibling, e = 0; t; ) {
        if (t.nodeType === 8) {
          var n = t.data;
          if (n === "/$") {
            if (e === 0) {
              cn = ri(t.nextSibling);
              break e;
            }
            e--;
          } else n !== "$" && n !== "$!" && n !== "$?" || e++;
        }
        t = t.nextSibling;
      }
      cn = null;
    }
  } else cn = dn ? ri(t.stateNode.nextSibling) : null;
  return !0;
}
function x3() {
  for (var t = cn; t; ) t = ri(t.nextSibling);
}
function qs() {
  cn = dn = null, qe = !1;
}
function O0(t) {
  Hn === null ? Hn = [t] : Hn.push(t);
}
var _6 = Fr.ReactCurrentBatchConfig;
function Uo(t, e, n) {
  if (t = n.ref, t !== null && typeof t != "function" && typeof t != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(K(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(K(147, t));
      var o = r, l = "" + t;
      return e !== null && e.ref !== null && typeof e.ref == "function" && e.ref._stringRef === l ? e.ref : (e = function(a) {
        var c = o.refs;
        a === null ? delete c[l] : c[l] = a;
      }, e._stringRef = l, e);
    }
    if (typeof t != "string") throw Error(K(284));
    if (!n._owner) throw Error(K(290, t));
  }
  return t;
}
function Ka(t, e) {
  throw t = Object.prototype.toString.call(e), Error(K(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t));
}
function Xg(t) {
  var e = t._init;
  return e(t._payload);
}
function C3(t) {
  function e(k, w) {
    if (t) {
      var p = k.deletions;
      p === null ? (k.deletions = [w], k.flags |= 16) : p.push(w);
    }
  }
  function n(k, w) {
    if (!t) return null;
    for (; w !== null; ) e(k, w), w = w.sibling;
    return null;
  }
  function r(k, w) {
    for (k = /* @__PURE__ */ new Map(); w !== null; ) w.key !== null ? k.set(w.key, w) : k.set(w.index, w), w = w.sibling;
    return k;
  }
  function o(k, w) {
    return k = li(k, w), k.index = 0, k.sibling = null, k;
  }
  function l(k, w, p) {
    return k.index = p, t ? (p = k.alternate, p !== null ? (p = p.index, p < w ? (k.flags |= 2, w) : p) : (k.flags |= 2, w)) : (k.flags |= 1048576, w);
  }
  function a(k) {
    return t && k.alternate === null && (k.flags |= 2), k;
  }
  function c(k, w, p, _) {
    return w === null || w.tag !== 6 ? (w = $f(p, k.mode, _), w.return = k, w) : (w = o(w, p), w.return = k, w);
  }
  function f(k, w, p, _) {
    var T = p.type;
    return T === Ms ? y(k, w, p.props.children, _, p.key) : w !== null && (w.elementType === T || typeof T == "object" && T !== null && T.$$typeof === Qr && Xg(T) === w.type) ? (_ = o(w, p.props), _.ref = Uo(k, w, p), _.return = k, _) : (_ = pu(p.type, p.key, p.props, null, k.mode, _), _.ref = Uo(k, w, p), _.return = k, _);
  }
  function g(k, w, p, _) {
    return w === null || w.tag !== 4 || w.stateNode.containerInfo !== p.containerInfo || w.stateNode.implementation !== p.implementation ? (w = qf(p, k.mode, _), w.return = k, w) : (w = o(w, p.children || []), w.return = k, w);
  }
  function y(k, w, p, _, T) {
    return w === null || w.tag !== 7 ? (w = Wi(p, k.mode, _, T), w.return = k, w) : (w = o(w, p), w.return = k, w);
  }
  function C(k, w, p) {
    if (typeof w == "string" && w !== "" || typeof w == "number") return w = $f("" + w, k.mode, p), w.return = k, w;
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case Oa:
          return p = pu(w.type, w.key, w.props, null, k.mode, p), p.ref = Uo(k, null, w), p.return = k, p;
        case Fs:
          return w = qf(w, k.mode, p), w.return = k, w;
        case Qr:
          var _ = w._init;
          return C(k, _(w._payload), p);
      }
      if (Qo(w) || Oo(w)) return w = Wi(w, k.mode, p, null), w.return = k, w;
      Ka(k, w);
    }
    return null;
  }
  function S(k, w, p, _) {
    var T = w !== null ? w.key : null;
    if (typeof p == "string" && p !== "" || typeof p == "number") return T !== null ? null : c(k, w, "" + p, _);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Oa:
          return p.key === T ? f(k, w, p, _) : null;
        case Fs:
          return p.key === T ? g(k, w, p, _) : null;
        case Qr:
          return T = p._init, S(
            k,
            w,
            T(p._payload),
            _
          );
      }
      if (Qo(p) || Oo(p)) return T !== null ? null : y(k, w, p, _, null);
      Ka(k, p);
    }
    return null;
  }
  function x(k, w, p, _, T) {
    if (typeof _ == "string" && _ !== "" || typeof _ == "number") return k = k.get(p) || null, c(w, k, "" + _, T);
    if (typeof _ == "object" && _ !== null) {
      switch (_.$$typeof) {
        case Oa:
          return k = k.get(_.key === null ? p : _.key) || null, f(w, k, _, T);
        case Fs:
          return k = k.get(_.key === null ? p : _.key) || null, g(w, k, _, T);
        case Qr:
          var F = _._init;
          return x(k, w, p, F(_._payload), T);
      }
      if (Qo(_) || Oo(_)) return k = k.get(p) || null, y(w, k, _, T, null);
      Ka(w, _);
    }
    return null;
  }
  function v(k, w, p, _) {
    for (var T = null, F = null, L = w, R = w = 0, G = null; L !== null && R < p.length; R++) {
      L.index > R ? (G = L, L = null) : G = L.sibling;
      var M = S(k, L, p[R], _);
      if (M === null) {
        L === null && (L = G);
        break;
      }
      t && L && M.alternate === null && e(k, L), w = l(M, w, R), F === null ? T = M : F.sibling = M, F = M, L = G;
    }
    if (R === p.length) return n(k, L), qe && zi(k, R), T;
    if (L === null) {
      for (; R < p.length; R++) L = C(k, p[R], _), L !== null && (w = l(L, w, R), F === null ? T = L : F.sibling = L, F = L);
      return qe && zi(k, R), T;
    }
    for (L = r(k, L); R < p.length; R++) G = x(L, k, R, p[R], _), G !== null && (t && G.alternate !== null && L.delete(G.key === null ? R : G.key), w = l(G, w, R), F === null ? T = G : F.sibling = G, F = G);
    return t && L.forEach(function(B) {
      return e(k, B);
    }), qe && zi(k, R), T;
  }
  function E(k, w, p, _) {
    var T = Oo(p);
    if (typeof T != "function") throw Error(K(150));
    if (p = T.call(p), p == null) throw Error(K(151));
    for (var F = T = null, L = w, R = w = 0, G = null, M = p.next(); L !== null && !M.done; R++, M = p.next()) {
      L.index > R ? (G = L, L = null) : G = L.sibling;
      var B = S(k, L, M.value, _);
      if (B === null) {
        L === null && (L = G);
        break;
      }
      t && L && B.alternate === null && e(k, L), w = l(B, w, R), F === null ? T = B : F.sibling = B, F = B, L = G;
    }
    if (M.done) return n(
      k,
      L
    ), qe && zi(k, R), T;
    if (L === null) {
      for (; !M.done; R++, M = p.next()) M = C(k, M.value, _), M !== null && (w = l(M, w, R), F === null ? T = M : F.sibling = M, F = M);
      return qe && zi(k, R), T;
    }
    for (L = r(k, L); !M.done; R++, M = p.next()) M = x(L, k, R, M.value, _), M !== null && (t && M.alternate !== null && L.delete(M.key === null ? R : M.key), w = l(M, w, R), F === null ? T = M : F.sibling = M, F = M);
    return t && L.forEach(function(j) {
      return e(k, j);
    }), qe && zi(k, R), T;
  }
  function N(k, w, p, _) {
    if (typeof p == "object" && p !== null && p.type === Ms && p.key === null && (p = p.props.children), typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Oa:
          e: {
            for (var T = p.key, F = w; F !== null; ) {
              if (F.key === T) {
                if (T = p.type, T === Ms) {
                  if (F.tag === 7) {
                    n(k, F.sibling), w = o(F, p.props.children), w.return = k, k = w;
                    break e;
                  }
                } else if (F.elementType === T || typeof T == "object" && T !== null && T.$$typeof === Qr && Xg(T) === F.type) {
                  n(k, F.sibling), w = o(F, p.props), w.ref = Uo(k, F, p), w.return = k, k = w;
                  break e;
                }
                n(k, F);
                break;
              } else e(k, F);
              F = F.sibling;
            }
            p.type === Ms ? (w = Wi(p.props.children, k.mode, _, p.key), w.return = k, k = w) : (_ = pu(p.type, p.key, p.props, null, k.mode, _), _.ref = Uo(k, w, p), _.return = k, k = _);
          }
          return a(k);
        case Fs:
          e: {
            for (F = p.key; w !== null; ) {
              if (w.key === F) if (w.tag === 4 && w.stateNode.containerInfo === p.containerInfo && w.stateNode.implementation === p.implementation) {
                n(k, w.sibling), w = o(w, p.children || []), w.return = k, k = w;
                break e;
              } else {
                n(k, w);
                break;
              }
              else e(k, w);
              w = w.sibling;
            }
            w = qf(p, k.mode, _), w.return = k, k = w;
          }
          return a(k);
        case Qr:
          return F = p._init, N(k, w, F(p._payload), _);
      }
      if (Qo(p)) return v(k, w, p, _);
      if (Oo(p)) return E(k, w, p, _);
      Ka(k, p);
    }
    return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p, w !== null && w.tag === 6 ? (n(k, w.sibling), w = o(w, p), w.return = k, k = w) : (n(k, w), w = $f(p, k.mode, _), w.return = k, k = w), a(k)) : n(k, w);
  }
  return N;
}
var Zs = C3(!0), k3 = C3(!1), Fu = fi(null), Mu = null, Us = null, D0 = null;
function I0() {
  D0 = Us = Mu = null;
}
function z0(t) {
  var e = Fu.current;
  Ye(Fu), t._currentValue = e;
}
function Gh(t, e, n) {
  for (; t !== null; ) {
    var r = t.alternate;
    if ((t.childLanes & e) !== e ? (t.childLanes |= e, r !== null && (r.childLanes |= e)) : r !== null && (r.childLanes & e) !== e && (r.childLanes |= e), t === n) break;
    t = t.return;
  }
}
function Ys(t, e) {
  Mu = t, D0 = Us = null, t = t.dependencies, t !== null && t.firstContext !== null && (t.lanes & e && (tn = !0), t.firstContext = null);
}
function Rn(t) {
  var e = t._currentValue;
  if (D0 !== t) if (t = { context: t, memoizedValue: e, next: null }, Us === null) {
    if (Mu === null) throw Error(K(308));
    Us = t, Mu.dependencies = { lanes: 0, firstContext: t };
  } else Us = Us.next = t;
  return e;
}
var Vi = null;
function G0(t) {
  Vi === null ? Vi = [t] : Vi.push(t);
}
function E3(t, e, n, r) {
  var o = e.interleaved;
  return o === null ? (n.next = n, G0(e)) : (n.next = o.next, o.next = n), e.interleaved = n, Nr(t, r);
}
function Nr(t, e) {
  t.lanes |= e;
  var n = t.alternate;
  for (n !== null && (n.lanes |= e), n = t, t = t.return; t !== null; ) t.childLanes |= e, n = t.alternate, n !== null && (n.childLanes |= e), n = t, t = t.return;
  return n.tag === 3 ? n.stateNode : null;
}
var $r = !1;
function U0(t) {
  t.updateQueue = { baseState: t.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function P3(t, e) {
  t = t.updateQueue, e.updateQueue === t && (e.updateQueue = { baseState: t.baseState, firstBaseUpdate: t.firstBaseUpdate, lastBaseUpdate: t.lastBaseUpdate, shared: t.shared, effects: t.effects });
}
function kr(t, e) {
  return { eventTime: t, lane: e, tag: 0, payload: null, callback: null, next: null };
}
function ii(t, e, n) {
  var r = t.updateQueue;
  if (r === null) return null;
  if (r = r.shared, Te & 2) {
    var o = r.pending;
    return o === null ? e.next = e : (e.next = o.next, o.next = e), r.pending = e, Nr(t, n);
  }
  return o = r.interleaved, o === null ? (e.next = e, G0(r)) : (e.next = o.next, o.next = e), r.interleaved = e, Nr(t, n);
}
function au(t, e, n) {
  if (e = e.updateQueue, e !== null && (e = e.shared, (n & 4194240) !== 0)) {
    var r = e.lanes;
    r &= t.pendingLanes, n |= r, e.lanes = n, k0(t, n);
  }
}
function Qg(t, e) {
  var n = t.updateQueue, r = t.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var o = null, l = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var a = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        l === null ? o = l = a : l = l.next = a, n = n.next;
      } while (n !== null);
      l === null ? o = l = e : l = l.next = e;
    } else o = l = e;
    n = { baseState: r.baseState, firstBaseUpdate: o, lastBaseUpdate: l, shared: r.shared, effects: r.effects }, t.updateQueue = n;
    return;
  }
  t = n.lastBaseUpdate, t === null ? n.firstBaseUpdate = e : t.next = e, n.lastBaseUpdate = e;
}
function Lu(t, e, n, r) {
  var o = t.updateQueue;
  $r = !1;
  var l = o.firstBaseUpdate, a = o.lastBaseUpdate, c = o.shared.pending;
  if (c !== null) {
    o.shared.pending = null;
    var f = c, g = f.next;
    f.next = null, a === null ? l = g : a.next = g, a = f;
    var y = t.alternate;
    y !== null && (y = y.updateQueue, c = y.lastBaseUpdate, c !== a && (c === null ? y.firstBaseUpdate = g : c.next = g, y.lastBaseUpdate = f));
  }
  if (l !== null) {
    var C = o.baseState;
    a = 0, y = g = f = null, c = l;
    do {
      var S = c.lane, x = c.eventTime;
      if ((r & S) === S) {
        y !== null && (y = y.next = {
          eventTime: x,
          lane: 0,
          tag: c.tag,
          payload: c.payload,
          callback: c.callback,
          next: null
        });
        e: {
          var v = t, E = c;
          switch (S = e, x = n, E.tag) {
            case 1:
              if (v = E.payload, typeof v == "function") {
                C = v.call(x, C, S);
                break e;
              }
              C = v;
              break e;
            case 3:
              v.flags = v.flags & -65537 | 128;
            case 0:
              if (v = E.payload, S = typeof v == "function" ? v.call(x, C, S) : v, S == null) break e;
              C = nt({}, C, S);
              break e;
            case 2:
              $r = !0;
          }
        }
        c.callback !== null && c.lane !== 0 && (t.flags |= 64, S = o.effects, S === null ? o.effects = [c] : S.push(c));
      } else x = { eventTime: x, lane: S, tag: c.tag, payload: c.payload, callback: c.callback, next: null }, y === null ? (g = y = x, f = C) : y = y.next = x, a |= S;
      if (c = c.next, c === null) {
        if (c = o.shared.pending, c === null) break;
        S = c, c = S.next, S.next = null, o.lastBaseUpdate = S, o.shared.pending = null;
      }
    } while (!0);
    if (y === null && (f = C), o.baseState = f, o.firstBaseUpdate = g, o.lastBaseUpdate = y, e = o.shared.interleaved, e !== null) {
      o = e;
      do
        a |= o.lane, o = o.next;
      while (o !== e);
    } else l === null && (o.shared.lanes = 0);
    Qi |= a, t.lanes = a, t.memoizedState = C;
  }
}
function $g(t, e, n) {
  if (t = e.effects, e.effects = null, t !== null) for (e = 0; e < t.length; e++) {
    var r = t[e], o = r.callback;
    if (o !== null) {
      if (r.callback = null, r = n, typeof o != "function") throw Error(K(191, o));
      o.call(r);
    }
  }
}
var Al = {}, ar = fi(Al), Sl = fi(Al), wl = fi(Al);
function Hi(t) {
  if (t === Al) throw Error(K(174));
  return t;
}
function B0(t, e) {
  switch (He(wl, e), He(Sl, t), He(ar, Al), t = e.nodeType, t) {
    case 9:
    case 11:
      e = (e = e.documentElement) ? e.namespaceURI : vh(null, "");
      break;
    default:
      t = t === 8 ? e.parentNode : e, e = t.namespaceURI || null, t = t.tagName, e = vh(e, t);
  }
  Ye(ar), He(ar, e);
}
function Js() {
  Ye(ar), Ye(Sl), Ye(wl);
}
function T3(t) {
  Hi(wl.current);
  var e = Hi(ar.current), n = vh(e, t.type);
  e !== n && (He(Sl, t), He(ar, n));
}
function V0(t) {
  Sl.current === t && (Ye(ar), Ye(Sl));
}
var et = fi(0);
function Au(t) {
  for (var e = t; e !== null; ) {
    if (e.tag === 13) {
      var n = e.memoizedState;
      if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return e;
    } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
      if (e.flags & 128) return e;
    } else if (e.child !== null) {
      e.child.return = e, e = e.child;
      continue;
    }
    if (e === t) break;
    for (; e.sibling === null; ) {
      if (e.return === null || e.return === t) return null;
      e = e.return;
    }
    e.sibling.return = e.return, e = e.sibling;
  }
  return null;
}
var jf = [];
function H0() {
  for (var t = 0; t < jf.length; t++) jf[t]._workInProgressVersionPrimary = null;
  jf.length = 0;
}
var uu = Fr.ReactCurrentDispatcher, Wf = Fr.ReactCurrentBatchConfig, Xi = 0, tt = null, yt = null, Et = null, Ou = !1, il = !1, xl = 0, S6 = 0;
function zt() {
  throw Error(K(321));
}
function j0(t, e) {
  if (e === null) return !1;
  for (var n = 0; n < e.length && n < t.length; n++) if (!Yn(t[n], e[n])) return !1;
  return !0;
}
function W0(t, e, n, r, o, l) {
  if (Xi = l, tt = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, uu.current = t === null || t.memoizedState === null ? k6 : E6, t = n(r, o), il) {
    l = 0;
    do {
      if (il = !1, xl = 0, 25 <= l) throw Error(K(301));
      l += 1, Et = yt = null, e.updateQueue = null, uu.current = P6, t = n(r, o);
    } while (il);
  }
  if (uu.current = Du, e = yt !== null && yt.next !== null, Xi = 0, Et = yt = tt = null, Ou = !1, e) throw Error(K(300));
  return t;
}
function K0() {
  var t = xl !== 0;
  return xl = 0, t;
}
function ir() {
  var t = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Et === null ? tt.memoizedState = Et = t : Et = Et.next = t, Et;
}
function Fn() {
  if (yt === null) {
    var t = tt.alternate;
    t = t !== null ? t.memoizedState : null;
  } else t = yt.next;
  var e = Et === null ? tt.memoizedState : Et.next;
  if (e !== null) Et = e, yt = t;
  else {
    if (t === null) throw Error(K(310));
    yt = t, t = { memoizedState: yt.memoizedState, baseState: yt.baseState, baseQueue: yt.baseQueue, queue: yt.queue, next: null }, Et === null ? tt.memoizedState = Et = t : Et = Et.next = t;
  }
  return Et;
}
function Cl(t, e) {
  return typeof e == "function" ? e(t) : e;
}
function Kf(t) {
  var e = Fn(), n = e.queue;
  if (n === null) throw Error(K(311));
  n.lastRenderedReducer = t;
  var r = yt, o = r.baseQueue, l = n.pending;
  if (l !== null) {
    if (o !== null) {
      var a = o.next;
      o.next = l.next, l.next = a;
    }
    r.baseQueue = o = l, n.pending = null;
  }
  if (o !== null) {
    l = o.next, r = r.baseState;
    var c = a = null, f = null, g = l;
    do {
      var y = g.lane;
      if ((Xi & y) === y) f !== null && (f = f.next = { lane: 0, action: g.action, hasEagerState: g.hasEagerState, eagerState: g.eagerState, next: null }), r = g.hasEagerState ? g.eagerState : t(r, g.action);
      else {
        var C = {
          lane: y,
          action: g.action,
          hasEagerState: g.hasEagerState,
          eagerState: g.eagerState,
          next: null
        };
        f === null ? (c = f = C, a = r) : f = f.next = C, tt.lanes |= y, Qi |= y;
      }
      g = g.next;
    } while (g !== null && g !== l);
    f === null ? a = r : f.next = c, Yn(r, e.memoizedState) || (tn = !0), e.memoizedState = r, e.baseState = a, e.baseQueue = f, n.lastRenderedState = r;
  }
  if (t = n.interleaved, t !== null) {
    o = t;
    do
      l = o.lane, tt.lanes |= l, Qi |= l, o = o.next;
    while (o !== t);
  } else o === null && (n.lanes = 0);
  return [e.memoizedState, n.dispatch];
}
function Yf(t) {
  var e = Fn(), n = e.queue;
  if (n === null) throw Error(K(311));
  n.lastRenderedReducer = t;
  var r = n.dispatch, o = n.pending, l = e.memoizedState;
  if (o !== null) {
    n.pending = null;
    var a = o = o.next;
    do
      l = t(l, a.action), a = a.next;
    while (a !== o);
    Yn(l, e.memoizedState) || (tn = !0), e.memoizedState = l, e.baseQueue === null && (e.baseState = l), n.lastRenderedState = l;
  }
  return [l, r];
}
function N3() {
}
function R3(t, e) {
  var n = tt, r = Fn(), o = e(), l = !Yn(r.memoizedState, o);
  if (l && (r.memoizedState = o, tn = !0), r = r.queue, Y0(L3.bind(null, n, r, t), [t]), r.getSnapshot !== e || l || Et !== null && Et.memoizedState.tag & 1) {
    if (n.flags |= 2048, kl(9, M3.bind(null, n, r, o, e), void 0, null), Pt === null) throw Error(K(349));
    Xi & 30 || F3(n, e, o);
  }
  return o;
}
function F3(t, e, n) {
  t.flags |= 16384, t = { getSnapshot: e, value: n }, e = tt.updateQueue, e === null ? (e = { lastEffect: null, stores: null }, tt.updateQueue = e, e.stores = [t]) : (n = e.stores, n === null ? e.stores = [t] : n.push(t));
}
function M3(t, e, n, r) {
  e.value = n, e.getSnapshot = r, A3(e) && O3(t);
}
function L3(t, e, n) {
  return n(function() {
    A3(e) && O3(t);
  });
}
function A3(t) {
  var e = t.getSnapshot;
  t = t.value;
  try {
    var n = e();
    return !Yn(t, n);
  } catch {
    return !0;
  }
}
function O3(t) {
  var e = Nr(t, 1);
  e !== null && Wn(e, t, 1, -1);
}
function qg(t) {
  var e = ir();
  return typeof t == "function" && (t = t()), e.memoizedState = e.baseState = t, t = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Cl, lastRenderedState: t }, e.queue = t, t = t.dispatch = C6.bind(null, tt, t), [e.memoizedState, t];
}
function kl(t, e, n, r) {
  return t = { tag: t, create: e, destroy: n, deps: r, next: null }, e = tt.updateQueue, e === null ? (e = { lastEffect: null, stores: null }, tt.updateQueue = e, e.lastEffect = t.next = t) : (n = e.lastEffect, n === null ? e.lastEffect = t.next = t : (r = n.next, n.next = t, t.next = r, e.lastEffect = t)), t;
}
function D3() {
  return Fn().memoizedState;
}
function cu(t, e, n, r) {
  var o = ir();
  tt.flags |= t, o.memoizedState = kl(1 | e, n, void 0, r === void 0 ? null : r);
}
function ec(t, e, n, r) {
  var o = Fn();
  r = r === void 0 ? null : r;
  var l = void 0;
  if (yt !== null) {
    var a = yt.memoizedState;
    if (l = a.destroy, r !== null && j0(r, a.deps)) {
      o.memoizedState = kl(e, n, l, r);
      return;
    }
  }
  tt.flags |= t, o.memoizedState = kl(1 | e, n, l, r);
}
function Zg(t, e) {
  return cu(8390656, 8, t, e);
}
function Y0(t, e) {
  return ec(2048, 8, t, e);
}
function I3(t, e) {
  return ec(4, 2, t, e);
}
function z3(t, e) {
  return ec(4, 4, t, e);
}
function G3(t, e) {
  if (typeof e == "function") return t = t(), e(t), function() {
    e(null);
  };
  if (e != null) return t = t(), e.current = t, function() {
    e.current = null;
  };
}
function U3(t, e, n) {
  return n = n != null ? n.concat([t]) : null, ec(4, 4, G3.bind(null, e, t), n);
}
function X0() {
}
function B3(t, e) {
  var n = Fn();
  e = e === void 0 ? null : e;
  var r = n.memoizedState;
  return r !== null && e !== null && j0(e, r[1]) ? r[0] : (n.memoizedState = [t, e], t);
}
function V3(t, e) {
  var n = Fn();
  e = e === void 0 ? null : e;
  var r = n.memoizedState;
  return r !== null && e !== null && j0(e, r[1]) ? r[0] : (t = t(), n.memoizedState = [t, e], t);
}
function H3(t, e, n) {
  return Xi & 21 ? (Yn(n, e) || (n = Xm(), tt.lanes |= n, Qi |= n, t.baseState = !0), e) : (t.baseState && (t.baseState = !1, tn = !0), t.memoizedState = n);
}
function w6(t, e) {
  var n = Oe;
  Oe = n !== 0 && 4 > n ? n : 4, t(!0);
  var r = Wf.transition;
  Wf.transition = {};
  try {
    t(!1), e();
  } finally {
    Oe = n, Wf.transition = r;
  }
}
function j3() {
  return Fn().memoizedState;
}
function x6(t, e, n) {
  var r = oi(t);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, W3(t)) K3(e, n);
  else if (n = E3(t, e, n, r), n !== null) {
    var o = Kt();
    Wn(n, t, r, o), Y3(n, e, r);
  }
}
function C6(t, e, n) {
  var r = oi(t), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (W3(t)) K3(e, o);
  else {
    var l = t.alternate;
    if (t.lanes === 0 && (l === null || l.lanes === 0) && (l = e.lastRenderedReducer, l !== null)) try {
      var a = e.lastRenderedState, c = l(a, n);
      if (o.hasEagerState = !0, o.eagerState = c, Yn(c, a)) {
        var f = e.interleaved;
        f === null ? (o.next = o, G0(e)) : (o.next = f.next, f.next = o), e.interleaved = o;
        return;
      }
    } catch {
    } finally {
    }
    n = E3(t, e, o, r), n !== null && (o = Kt(), Wn(n, t, r, o), Y3(n, e, r));
  }
}
function W3(t) {
  var e = t.alternate;
  return t === tt || e !== null && e === tt;
}
function K3(t, e) {
  il = Ou = !0;
  var n = t.pending;
  n === null ? e.next = e : (e.next = n.next, n.next = e), t.pending = e;
}
function Y3(t, e, n) {
  if (n & 4194240) {
    var r = e.lanes;
    r &= t.pendingLanes, n |= r, e.lanes = n, k0(t, n);
  }
}
var Du = { readContext: Rn, useCallback: zt, useContext: zt, useEffect: zt, useImperativeHandle: zt, useInsertionEffect: zt, useLayoutEffect: zt, useMemo: zt, useReducer: zt, useRef: zt, useState: zt, useDebugValue: zt, useDeferredValue: zt, useTransition: zt, useMutableSource: zt, useSyncExternalStore: zt, useId: zt, unstable_isNewReconciler: !1 }, k6 = { readContext: Rn, useCallback: function(t, e) {
  return ir().memoizedState = [t, e === void 0 ? null : e], t;
}, useContext: Rn, useEffect: Zg, useImperativeHandle: function(t, e, n) {
  return n = n != null ? n.concat([t]) : null, cu(
    4194308,
    4,
    G3.bind(null, e, t),
    n
  );
}, useLayoutEffect: function(t, e) {
  return cu(4194308, 4, t, e);
}, useInsertionEffect: function(t, e) {
  return cu(4, 2, t, e);
}, useMemo: function(t, e) {
  var n = ir();
  return e = e === void 0 ? null : e, t = t(), n.memoizedState = [t, e], t;
}, useReducer: function(t, e, n) {
  var r = ir();
  return e = n !== void 0 ? n(e) : e, r.memoizedState = r.baseState = e, t = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: t, lastRenderedState: e }, r.queue = t, t = t.dispatch = x6.bind(null, tt, t), [r.memoizedState, t];
}, useRef: function(t) {
  var e = ir();
  return t = { current: t }, e.memoizedState = t;
}, useState: qg, useDebugValue: X0, useDeferredValue: function(t) {
  return ir().memoizedState = t;
}, useTransition: function() {
  var t = qg(!1), e = t[0];
  return t = w6.bind(null, t[1]), ir().memoizedState = t, [e, t];
}, useMutableSource: function() {
}, useSyncExternalStore: function(t, e, n) {
  var r = tt, o = ir();
  if (qe) {
    if (n === void 0) throw Error(K(407));
    n = n();
  } else {
    if (n = e(), Pt === null) throw Error(K(349));
    Xi & 30 || F3(r, e, n);
  }
  o.memoizedState = n;
  var l = { value: n, getSnapshot: e };
  return o.queue = l, Zg(L3.bind(
    null,
    r,
    l,
    t
  ), [t]), r.flags |= 2048, kl(9, M3.bind(null, r, l, n, e), void 0, null), n;
}, useId: function() {
  var t = ir(), e = Pt.identifierPrefix;
  if (qe) {
    var n = Cr, r = xr;
    n = (r & ~(1 << 32 - jn(r) - 1)).toString(32) + n, e = ":" + e + "R" + n, n = xl++, 0 < n && (e += "H" + n.toString(32)), e += ":";
  } else n = S6++, e = ":" + e + "r" + n.toString(32) + ":";
  return t.memoizedState = e;
}, unstable_isNewReconciler: !1 }, E6 = {
  readContext: Rn,
  useCallback: B3,
  useContext: Rn,
  useEffect: Y0,
  useImperativeHandle: U3,
  useInsertionEffect: I3,
  useLayoutEffect: z3,
  useMemo: V3,
  useReducer: Kf,
  useRef: D3,
  useState: function() {
    return Kf(Cl);
  },
  useDebugValue: X0,
  useDeferredValue: function(t) {
    var e = Fn();
    return H3(e, yt.memoizedState, t);
  },
  useTransition: function() {
    var t = Kf(Cl)[0], e = Fn().memoizedState;
    return [t, e];
  },
  useMutableSource: N3,
  useSyncExternalStore: R3,
  useId: j3,
  unstable_isNewReconciler: !1
}, P6 = { readContext: Rn, useCallback: B3, useContext: Rn, useEffect: Y0, useImperativeHandle: U3, useInsertionEffect: I3, useLayoutEffect: z3, useMemo: V3, useReducer: Yf, useRef: D3, useState: function() {
  return Yf(Cl);
}, useDebugValue: X0, useDeferredValue: function(t) {
  var e = Fn();
  return yt === null ? e.memoizedState = t : H3(e, yt.memoizedState, t);
}, useTransition: function() {
  var t = Yf(Cl)[0], e = Fn().memoizedState;
  return [t, e];
}, useMutableSource: N3, useSyncExternalStore: R3, useId: j3, unstable_isNewReconciler: !1 };
function Bn(t, e) {
  if (t && t.defaultProps) {
    e = nt({}, e), t = t.defaultProps;
    for (var n in t) e[n] === void 0 && (e[n] = t[n]);
    return e;
  }
  return e;
}
function Uh(t, e, n, r) {
  e = t.memoizedState, n = n(r, e), n = n == null ? e : nt({}, e, n), t.memoizedState = n, t.lanes === 0 && (t.updateQueue.baseState = n);
}
var tc = { isMounted: function(t) {
  return (t = t._reactInternals) ? Zi(t) === t : !1;
}, enqueueSetState: function(t, e, n) {
  t = t._reactInternals;
  var r = Kt(), o = oi(t), l = kr(r, o);
  l.payload = e, n != null && (l.callback = n), e = ii(t, l, o), e !== null && (Wn(e, t, o, r), au(e, t, o));
}, enqueueReplaceState: function(t, e, n) {
  t = t._reactInternals;
  var r = Kt(), o = oi(t), l = kr(r, o);
  l.tag = 1, l.payload = e, n != null && (l.callback = n), e = ii(t, l, o), e !== null && (Wn(e, t, o, r), au(e, t, o));
}, enqueueForceUpdate: function(t, e) {
  t = t._reactInternals;
  var n = Kt(), r = oi(t), o = kr(n, r);
  o.tag = 2, e != null && (o.callback = e), e = ii(t, o, r), e !== null && (Wn(e, t, r, n), au(e, t, r));
} };
function Jg(t, e, n, r, o, l, a) {
  return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(r, l, a) : e.prototype && e.prototype.isPureReactComponent ? !ml(n, r) || !ml(o, l) : !0;
}
function X3(t, e, n) {
  var r = !1, o = ui, l = e.contextType;
  return typeof l == "object" && l !== null ? l = Rn(l) : (o = rn(e) ? Ki : Bt.current, r = e.contextTypes, l = (r = r != null) ? $s(t, o) : ui), e = new e(n, l), t.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null, e.updater = tc, t.stateNode = e, e._reactInternals = t, r && (t = t.stateNode, t.__reactInternalMemoizedUnmaskedChildContext = o, t.__reactInternalMemoizedMaskedChildContext = l), e;
}
function bg(t, e, n, r) {
  t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(n, r), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(n, r), e.state !== t && tc.enqueueReplaceState(e, e.state, null);
}
function Bh(t, e, n, r) {
  var o = t.stateNode;
  o.props = n, o.state = t.memoizedState, o.refs = {}, U0(t);
  var l = e.contextType;
  typeof l == "object" && l !== null ? o.context = Rn(l) : (l = rn(e) ? Ki : Bt.current, o.context = $s(t, l)), o.state = t.memoizedState, l = e.getDerivedStateFromProps, typeof l == "function" && (Uh(t, e, l, n), o.state = t.memoizedState), typeof e.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (e = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), e !== o.state && tc.enqueueReplaceState(o, o.state, null), Lu(t, n, o, r), o.state = t.memoizedState), typeof o.componentDidMount == "function" && (t.flags |= 4194308);
}
function bs(t, e) {
  try {
    var n = "", r = e;
    do
      n += ev(r), r = r.return;
    while (r);
    var o = n;
  } catch (l) {
    o = `
Error generating stack: ` + l.message + `
` + l.stack;
  }
  return { value: t, source: e, stack: o, digest: null };
}
function Xf(t, e, n) {
  return { value: t, source: null, stack: n ?? null, digest: e ?? null };
}
function Vh(t, e) {
  try {
    console.error(e.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var T6 = typeof WeakMap == "function" ? WeakMap : Map;
function Q3(t, e, n) {
  n = kr(-1, n), n.tag = 3, n.payload = { element: null };
  var r = e.value;
  return n.callback = function() {
    zu || (zu = !0, Zh = r), Vh(t, e);
  }, n;
}
function $3(t, e, n) {
  n = kr(-1, n), n.tag = 3;
  var r = t.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = e.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      Vh(t, e);
    };
  }
  var l = t.stateNode;
  return l !== null && typeof l.componentDidCatch == "function" && (n.callback = function() {
    Vh(t, e), typeof r != "function" && (si === null ? si = /* @__PURE__ */ new Set([this]) : si.add(this));
    var a = e.stack;
    this.componentDidCatch(e.value, { componentStack: a !== null ? a : "" });
  }), n;
}
function e2(t, e, n) {
  var r = t.pingCache;
  if (r === null) {
    r = t.pingCache = new T6();
    var o = /* @__PURE__ */ new Set();
    r.set(e, o);
  } else o = r.get(e), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(e, o));
  o.has(n) || (o.add(n), t = V6.bind(null, t, e, n), e.then(t, t));
}
function t2(t) {
  do {
    var e;
    if ((e = t.tag === 13) && (e = t.memoizedState, e = e !== null ? e.dehydrated !== null : !0), e) return t;
    t = t.return;
  } while (t !== null);
  return null;
}
function n2(t, e, n, r, o) {
  return t.mode & 1 ? (t.flags |= 65536, t.lanes = o, t) : (t === e ? t.flags |= 65536 : (t.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (e = kr(-1, 1), e.tag = 2, ii(n, e, 1))), n.lanes |= 1), t);
}
var N6 = Fr.ReactCurrentOwner, tn = !1;
function jt(t, e, n, r) {
  e.child = t === null ? k3(e, null, n, r) : Zs(e, t.child, n, r);
}
function r2(t, e, n, r, o) {
  n = n.render;
  var l = e.ref;
  return Ys(e, o), r = W0(t, e, n, r, l, o), n = K0(), t !== null && !tn ? (e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~o, Rr(t, e, o)) : (qe && n && L0(e), e.flags |= 1, jt(t, e, r, o), e.child);
}
function i2(t, e, n, r, o) {
  if (t === null) {
    var l = n.type;
    return typeof l == "function" && !t1(l) && l.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (e.tag = 15, e.type = l, q3(t, e, l, r, o)) : (t = pu(n.type, null, r, e, e.mode, o), t.ref = e.ref, t.return = e, e.child = t);
  }
  if (l = t.child, !(t.lanes & o)) {
    var a = l.memoizedProps;
    if (n = n.compare, n = n !== null ? n : ml, n(a, r) && t.ref === e.ref) return Rr(t, e, o);
  }
  return e.flags |= 1, t = li(l, r), t.ref = e.ref, t.return = e, e.child = t;
}
function q3(t, e, n, r, o) {
  if (t !== null) {
    var l = t.memoizedProps;
    if (ml(l, r) && t.ref === e.ref) if (tn = !1, e.pendingProps = r = l, (t.lanes & o) !== 0) t.flags & 131072 && (tn = !0);
    else return e.lanes = t.lanes, Rr(t, e, o);
  }
  return Hh(t, e, n, r, o);
}
function Z3(t, e, n) {
  var r = e.pendingProps, o = r.children, l = t !== null ? t.memoizedState : null;
  if (r.mode === "hidden") if (!(e.mode & 1)) e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, He(Vs, un), un |= n;
  else {
    if (!(n & 1073741824)) return t = l !== null ? l.baseLanes | n : n, e.lanes = e.childLanes = 1073741824, e.memoizedState = { baseLanes: t, cachePool: null, transitions: null }, e.updateQueue = null, He(Vs, un), un |= t, null;
    e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = l !== null ? l.baseLanes : n, He(Vs, un), un |= r;
  }
  else l !== null ? (r = l.baseLanes | n, e.memoizedState = null) : r = n, He(Vs, un), un |= r;
  return jt(t, e, o, n), e.child;
}
function J3(t, e) {
  var n = e.ref;
  (t === null && n !== null || t !== null && t.ref !== n) && (e.flags |= 512, e.flags |= 2097152);
}
function Hh(t, e, n, r, o) {
  var l = rn(n) ? Ki : Bt.current;
  return l = $s(e, l), Ys(e, o), n = W0(t, e, n, r, l, o), r = K0(), t !== null && !tn ? (e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~o, Rr(t, e, o)) : (qe && r && L0(e), e.flags |= 1, jt(t, e, n, o), e.child);
}
function s2(t, e, n, r, o) {
  if (rn(n)) {
    var l = !0;
    Tu(e);
  } else l = !1;
  if (Ys(e, o), e.stateNode === null) du(t, e), X3(e, n, r), Bh(e, n, r, o), r = !0;
  else if (t === null) {
    var a = e.stateNode, c = e.memoizedProps;
    a.props = c;
    var f = a.context, g = n.contextType;
    typeof g == "object" && g !== null ? g = Rn(g) : (g = rn(n) ? Ki : Bt.current, g = $s(e, g));
    var y = n.getDerivedStateFromProps, C = typeof y == "function" || typeof a.getSnapshotBeforeUpdate == "function";
    C || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (c !== r || f !== g) && bg(e, a, r, g), $r = !1;
    var S = e.memoizedState;
    a.state = S, Lu(e, r, a, o), f = e.memoizedState, c !== r || S !== f || nn.current || $r ? (typeof y == "function" && (Uh(e, n, y, r), f = e.memoizedState), (c = $r || Jg(e, n, c, r, S, f, g)) ? (C || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = r, e.memoizedState = f), a.props = r, a.state = f, a.context = g, r = c) : (typeof a.componentDidMount == "function" && (e.flags |= 4194308), r = !1);
  } else {
    a = e.stateNode, P3(t, e), c = e.memoizedProps, g = e.type === e.elementType ? c : Bn(e.type, c), a.props = g, C = e.pendingProps, S = a.context, f = n.contextType, typeof f == "object" && f !== null ? f = Rn(f) : (f = rn(n) ? Ki : Bt.current, f = $s(e, f));
    var x = n.getDerivedStateFromProps;
    (y = typeof x == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (c !== C || S !== f) && bg(e, a, r, f), $r = !1, S = e.memoizedState, a.state = S, Lu(e, r, a, o);
    var v = e.memoizedState;
    c !== C || S !== v || nn.current || $r ? (typeof x == "function" && (Uh(e, n, x, r), v = e.memoizedState), (g = $r || Jg(e, n, g, r, S, v, f) || !1) ? (y || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(r, v, f), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(r, v, f)), typeof a.componentDidUpdate == "function" && (e.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || c === t.memoizedProps && S === t.memoizedState || (e.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || c === t.memoizedProps && S === t.memoizedState || (e.flags |= 1024), e.memoizedProps = r, e.memoizedState = v), a.props = r, a.state = v, a.context = f, r = g) : (typeof a.componentDidUpdate != "function" || c === t.memoizedProps && S === t.memoizedState || (e.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || c === t.memoizedProps && S === t.memoizedState || (e.flags |= 1024), r = !1);
  }
  return jh(t, e, n, r, l, o);
}
function jh(t, e, n, r, o, l) {
  J3(t, e);
  var a = (e.flags & 128) !== 0;
  if (!r && !a) return o && Wg(e, n, !1), Rr(t, e, l);
  r = e.stateNode, N6.current = e;
  var c = a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return e.flags |= 1, t !== null && a ? (e.child = Zs(e, t.child, null, l), e.child = Zs(e, null, c, l)) : jt(t, e, c, l), e.memoizedState = r.state, o && Wg(e, n, !0), e.child;
}
function b3(t) {
  var e = t.stateNode;
  e.pendingContext ? jg(t, e.pendingContext, e.pendingContext !== e.context) : e.context && jg(t, e.context, !1), B0(t, e.containerInfo);
}
function o2(t, e, n, r, o) {
  return qs(), O0(o), e.flags |= 256, jt(t, e, n, r), e.child;
}
var Wh = { dehydrated: null, treeContext: null, retryLane: 0 };
function Kh(t) {
  return { baseLanes: t, cachePool: null, transitions: null };
}
function e4(t, e, n) {
  var r = e.pendingProps, o = et.current, l = !1, a = (e.flags & 128) !== 0, c;
  if ((c = a) || (c = t !== null && t.memoizedState === null ? !1 : (o & 2) !== 0), c ? (l = !0, e.flags &= -129) : (t === null || t.memoizedState !== null) && (o |= 1), He(et, o & 1), t === null)
    return zh(e), t = e.memoizedState, t !== null && (t = t.dehydrated, t !== null) ? (e.mode & 1 ? t.data === "$!" ? e.lanes = 8 : e.lanes = 1073741824 : e.lanes = 1, null) : (a = r.children, t = r.fallback, l ? (r = e.mode, l = e.child, a = { mode: "hidden", children: a }, !(r & 1) && l !== null ? (l.childLanes = 0, l.pendingProps = a) : l = ic(a, r, 0, null), t = Wi(t, r, n, null), l.return = e, t.return = e, l.sibling = t, e.child = l, e.child.memoizedState = Kh(n), e.memoizedState = Wh, t) : Q0(e, a));
  if (o = t.memoizedState, o !== null && (c = o.dehydrated, c !== null)) return R6(t, e, a, r, c, o, n);
  if (l) {
    l = r.fallback, a = e.mode, o = t.child, c = o.sibling;
    var f = { mode: "hidden", children: r.children };
    return !(a & 1) && e.child !== o ? (r = e.child, r.childLanes = 0, r.pendingProps = f, e.deletions = null) : (r = li(o, f), r.subtreeFlags = o.subtreeFlags & 14680064), c !== null ? l = li(c, l) : (l = Wi(l, a, n, null), l.flags |= 2), l.return = e, r.return = e, r.sibling = l, e.child = r, r = l, l = e.child, a = t.child.memoizedState, a = a === null ? Kh(n) : { baseLanes: a.baseLanes | n, cachePool: null, transitions: a.transitions }, l.memoizedState = a, l.childLanes = t.childLanes & ~n, e.memoizedState = Wh, r;
  }
  return l = t.child, t = l.sibling, r = li(l, { mode: "visible", children: r.children }), !(e.mode & 1) && (r.lanes = n), r.return = e, r.sibling = null, t !== null && (n = e.deletions, n === null ? (e.deletions = [t], e.flags |= 16) : n.push(t)), e.child = r, e.memoizedState = null, r;
}
function Q0(t, e) {
  return e = ic({ mode: "visible", children: e }, t.mode, 0, null), e.return = t, t.child = e;
}
function Ya(t, e, n, r) {
  return r !== null && O0(r), Zs(e, t.child, null, n), t = Q0(e, e.pendingProps.children), t.flags |= 2, e.memoizedState = null, t;
}
function R6(t, e, n, r, o, l, a) {
  if (n)
    return e.flags & 256 ? (e.flags &= -257, r = Xf(Error(K(422))), Ya(t, e, a, r)) : e.memoizedState !== null ? (e.child = t.child, e.flags |= 128, null) : (l = r.fallback, o = e.mode, r = ic({ mode: "visible", children: r.children }, o, 0, null), l = Wi(l, o, a, null), l.flags |= 2, r.return = e, l.return = e, r.sibling = l, e.child = r, e.mode & 1 && Zs(e, t.child, null, a), e.child.memoizedState = Kh(a), e.memoizedState = Wh, l);
  if (!(e.mode & 1)) return Ya(t, e, a, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r) var c = r.dgst;
    return r = c, l = Error(K(419)), r = Xf(l, r, void 0), Ya(t, e, a, r);
  }
  if (c = (a & t.childLanes) !== 0, tn || c) {
    if (r = Pt, r !== null) {
      switch (a & -a) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
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
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      o = o & (r.suspendedLanes | a) ? 0 : o, o !== 0 && o !== l.retryLane && (l.retryLane = o, Nr(t, o), Wn(r, t, o, -1));
    }
    return e1(), r = Xf(Error(K(421))), Ya(t, e, a, r);
  }
  return o.data === "$?" ? (e.flags |= 128, e.child = t.child, e = H6.bind(null, t), o._reactRetry = e, null) : (t = l.treeContext, cn = ri(o.nextSibling), dn = e, qe = !0, Hn = null, t !== null && (En[Pn++] = xr, En[Pn++] = Cr, En[Pn++] = Yi, xr = t.id, Cr = t.overflow, Yi = e), e = Q0(e, r.children), e.flags |= 4096, e);
}
function l2(t, e, n) {
  t.lanes |= e;
  var r = t.alternate;
  r !== null && (r.lanes |= e), Gh(t.return, e, n);
}
function Qf(t, e, n, r, o) {
  var l = t.memoizedState;
  l === null ? t.memoizedState = { isBackwards: e, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (l.isBackwards = e, l.rendering = null, l.renderingStartTime = 0, l.last = r, l.tail = n, l.tailMode = o);
}
function t4(t, e, n) {
  var r = e.pendingProps, o = r.revealOrder, l = r.tail;
  if (jt(t, e, r.children, n), r = et.current, r & 2) r = r & 1 | 2, e.flags |= 128;
  else {
    if (t !== null && t.flags & 128) e: for (t = e.child; t !== null; ) {
      if (t.tag === 13) t.memoizedState !== null && l2(t, n, e);
      else if (t.tag === 19) l2(t, n, e);
      else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e) break e;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) break e;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    r &= 1;
  }
  if (He(et, r), !(e.mode & 1)) e.memoizedState = null;
  else switch (o) {
    case "forwards":
      for (n = e.child, o = null; n !== null; ) t = n.alternate, t !== null && Au(t) === null && (o = n), n = n.sibling;
      n = o, n === null ? (o = e.child, e.child = null) : (o = n.sibling, n.sibling = null), Qf(e, !1, o, n, l);
      break;
    case "backwards":
      for (n = null, o = e.child, e.child = null; o !== null; ) {
        if (t = o.alternate, t !== null && Au(t) === null) {
          e.child = o;
          break;
        }
        t = o.sibling, o.sibling = n, n = o, o = t;
      }
      Qf(e, !0, n, null, l);
      break;
    case "together":
      Qf(e, !1, null, null, void 0);
      break;
    default:
      e.memoizedState = null;
  }
  return e.child;
}
function du(t, e) {
  !(e.mode & 1) && t !== null && (t.alternate = null, e.alternate = null, e.flags |= 2);
}
function Rr(t, e, n) {
  if (t !== null && (e.dependencies = t.dependencies), Qi |= e.lanes, !(n & e.childLanes)) return null;
  if (t !== null && e.child !== t.child) throw Error(K(153));
  if (e.child !== null) {
    for (t = e.child, n = li(t, t.pendingProps), e.child = n, n.return = e; t.sibling !== null; ) t = t.sibling, n = n.sibling = li(t, t.pendingProps), n.return = e;
    n.sibling = null;
  }
  return e.child;
}
function F6(t, e, n) {
  switch (e.tag) {
    case 3:
      b3(e), qs();
      break;
    case 5:
      T3(e);
      break;
    case 1:
      rn(e.type) && Tu(e);
      break;
    case 4:
      B0(e, e.stateNode.containerInfo);
      break;
    case 10:
      var r = e.type._context, o = e.memoizedProps.value;
      He(Fu, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = e.memoizedState, r !== null)
        return r.dehydrated !== null ? (He(et, et.current & 1), e.flags |= 128, null) : n & e.child.childLanes ? e4(t, e, n) : (He(et, et.current & 1), t = Rr(t, e, n), t !== null ? t.sibling : null);
      He(et, et.current & 1);
      break;
    case 19:
      if (r = (n & e.childLanes) !== 0, t.flags & 128) {
        if (r) return t4(t, e, n);
        e.flags |= 128;
      }
      if (o = e.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), He(et, et.current), r) break;
      return null;
    case 22:
    case 23:
      return e.lanes = 0, Z3(t, e, n);
  }
  return Rr(t, e, n);
}
var n4, Yh, r4, i4;
n4 = function(t, e) {
  for (var n = e.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) t.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      n.child.return = n, n = n.child;
      continue;
    }
    if (n === e) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === e) return;
      n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
  }
};
Yh = function() {
};
r4 = function(t, e, n, r) {
  var o = t.memoizedProps;
  if (o !== r) {
    t = e.stateNode, Hi(ar.current);
    var l = null;
    switch (n) {
      case "input":
        o = ph(t, o), r = ph(t, r), l = [];
        break;
      case "select":
        o = nt({}, o, { value: void 0 }), r = nt({}, r, { value: void 0 }), l = [];
        break;
      case "textarea":
        o = yh(t, o), r = yh(t, r), l = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (t.onclick = Eu);
    }
    _h(n, r);
    var a;
    n = null;
    for (g in o) if (!r.hasOwnProperty(g) && o.hasOwnProperty(g) && o[g] != null) if (g === "style") {
      var c = o[g];
      for (a in c) c.hasOwnProperty(a) && (n || (n = {}), n[a] = "");
    } else g !== "dangerouslySetInnerHTML" && g !== "children" && g !== "suppressContentEditableWarning" && g !== "suppressHydrationWarning" && g !== "autoFocus" && (ul.hasOwnProperty(g) ? l || (l = []) : (l = l || []).push(g, null));
    for (g in r) {
      var f = r[g];
      if (c = o != null ? o[g] : void 0, r.hasOwnProperty(g) && f !== c && (f != null || c != null)) if (g === "style") if (c) {
        for (a in c) !c.hasOwnProperty(a) || f && f.hasOwnProperty(a) || (n || (n = {}), n[a] = "");
        for (a in f) f.hasOwnProperty(a) && c[a] !== f[a] && (n || (n = {}), n[a] = f[a]);
      } else n || (l || (l = []), l.push(
        g,
        n
      )), n = f;
      else g === "dangerouslySetInnerHTML" ? (f = f ? f.__html : void 0, c = c ? c.__html : void 0, f != null && c !== f && (l = l || []).push(g, f)) : g === "children" ? typeof f != "string" && typeof f != "number" || (l = l || []).push(g, "" + f) : g !== "suppressContentEditableWarning" && g !== "suppressHydrationWarning" && (ul.hasOwnProperty(g) ? (f != null && g === "onScroll" && Ke("scroll", t), l || c === f || (l = [])) : (l = l || []).push(g, f));
    }
    n && (l = l || []).push("style", n);
    var g = l;
    (e.updateQueue = g) && (e.flags |= 4);
  }
};
i4 = function(t, e, n, r) {
  n !== r && (e.flags |= 4);
};
function Bo(t, e) {
  if (!qe) switch (t.tailMode) {
    case "hidden":
      e = t.tail;
      for (var n = null; e !== null; ) e.alternate !== null && (n = e), e = e.sibling;
      n === null ? t.tail = null : n.sibling = null;
      break;
    case "collapsed":
      n = t.tail;
      for (var r = null; n !== null; ) n.alternate !== null && (r = n), n = n.sibling;
      r === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : r.sibling = null;
  }
}
function Gt(t) {
  var e = t.alternate !== null && t.alternate.child === t.child, n = 0, r = 0;
  if (e) for (var o = t.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = t, o = o.sibling;
  else for (o = t.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = t, o = o.sibling;
  return t.subtreeFlags |= r, t.childLanes = n, e;
}
function M6(t, e, n) {
  var r = e.pendingProps;
  switch (A0(e), e.tag) {
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
      return Gt(e), null;
    case 1:
      return rn(e.type) && Pu(), Gt(e), null;
    case 3:
      return r = e.stateNode, Js(), Ye(nn), Ye(Bt), H0(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (t === null || t.child === null) && (Wa(e) ? e.flags |= 4 : t === null || t.memoizedState.isDehydrated && !(e.flags & 256) || (e.flags |= 1024, Hn !== null && (e0(Hn), Hn = null))), Yh(t, e), Gt(e), null;
    case 5:
      V0(e);
      var o = Hi(wl.current);
      if (n = e.type, t !== null && e.stateNode != null) r4(t, e, n, r, o), t.ref !== e.ref && (e.flags |= 512, e.flags |= 2097152);
      else {
        if (!r) {
          if (e.stateNode === null) throw Error(K(166));
          return Gt(e), null;
        }
        if (t = Hi(ar.current), Wa(e)) {
          r = e.stateNode, n = e.type;
          var l = e.memoizedProps;
          switch (r[sr] = e, r[_l] = l, t = (e.mode & 1) !== 0, n) {
            case "dialog":
              Ke("cancel", r), Ke("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              Ke("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < qo.length; o++) Ke(qo[o], r);
              break;
            case "source":
              Ke("error", r);
              break;
            case "img":
            case "image":
            case "link":
              Ke(
                "error",
                r
              ), Ke("load", r);
              break;
            case "details":
              Ke("toggle", r);
              break;
            case "input":
              mg(r, l), Ke("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!l.multiple }, Ke("invalid", r);
              break;
            case "textarea":
              vg(r, l), Ke("invalid", r);
          }
          _h(n, l), o = null;
          for (var a in l) if (l.hasOwnProperty(a)) {
            var c = l[a];
            a === "children" ? typeof c == "string" ? r.textContent !== c && (l.suppressHydrationWarning !== !0 && ja(r.textContent, c, t), o = ["children", c]) : typeof c == "number" && r.textContent !== "" + c && (l.suppressHydrationWarning !== !0 && ja(
              r.textContent,
              c,
              t
            ), o = ["children", "" + c]) : ul.hasOwnProperty(a) && c != null && a === "onScroll" && Ke("scroll", r);
          }
          switch (n) {
            case "input":
              Da(r), yg(r, l, !0);
              break;
            case "textarea":
              Da(r), _g(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof l.onClick == "function" && (r.onclick = Eu);
          }
          r = o, e.updateQueue = r, r !== null && (e.flags |= 4);
        } else {
          a = o.nodeType === 9 ? o : o.ownerDocument, t === "http://www.w3.org/1999/xhtml" && (t = Lm(n)), t === "http://www.w3.org/1999/xhtml" ? n === "script" ? (t = a.createElement("div"), t.innerHTML = "<script><\/script>", t = t.removeChild(t.firstChild)) : typeof r.is == "string" ? t = a.createElement(n, { is: r.is }) : (t = a.createElement(n), n === "select" && (a = t, r.multiple ? a.multiple = !0 : r.size && (a.size = r.size))) : t = a.createElementNS(t, n), t[sr] = e, t[_l] = r, n4(t, e, !1, !1), e.stateNode = t;
          e: {
            switch (a = Sh(n, r), n) {
              case "dialog":
                Ke("cancel", t), Ke("close", t), o = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                Ke("load", t), o = r;
                break;
              case "video":
              case "audio":
                for (o = 0; o < qo.length; o++) Ke(qo[o], t);
                o = r;
                break;
              case "source":
                Ke("error", t), o = r;
                break;
              case "img":
              case "image":
              case "link":
                Ke(
                  "error",
                  t
                ), Ke("load", t), o = r;
                break;
              case "details":
                Ke("toggle", t), o = r;
                break;
              case "input":
                mg(t, r), o = ph(t, r), Ke("invalid", t);
                break;
              case "option":
                o = r;
                break;
              case "select":
                t._wrapperState = { wasMultiple: !!r.multiple }, o = nt({}, r, { value: void 0 }), Ke("invalid", t);
                break;
              case "textarea":
                vg(t, r), o = yh(t, r), Ke("invalid", t);
                break;
              default:
                o = r;
            }
            _h(n, o), c = o;
            for (l in c) if (c.hasOwnProperty(l)) {
              var f = c[l];
              l === "style" ? Dm(t, f) : l === "dangerouslySetInnerHTML" ? (f = f ? f.__html : void 0, f != null && Am(t, f)) : l === "children" ? typeof f == "string" ? (n !== "textarea" || f !== "") && cl(t, f) : typeof f == "number" && cl(t, "" + f) : l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && l !== "autoFocus" && (ul.hasOwnProperty(l) ? f != null && l === "onScroll" && Ke("scroll", t) : f != null && v0(t, l, f, a));
            }
            switch (n) {
              case "input":
                Da(t), yg(t, r, !1);
                break;
              case "textarea":
                Da(t), _g(t);
                break;
              case "option":
                r.value != null && t.setAttribute("value", "" + ai(r.value));
                break;
              case "select":
                t.multiple = !!r.multiple, l = r.value, l != null ? Hs(t, !!r.multiple, l, !1) : r.defaultValue != null && Hs(
                  t,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof o.onClick == "function" && (t.onclick = Eu);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (e.flags |= 4);
        }
        e.ref !== null && (e.flags |= 512, e.flags |= 2097152);
      }
      return Gt(e), null;
    case 6:
      if (t && e.stateNode != null) i4(t, e, t.memoizedProps, r);
      else {
        if (typeof r != "string" && e.stateNode === null) throw Error(K(166));
        if (n = Hi(wl.current), Hi(ar.current), Wa(e)) {
          if (r = e.stateNode, n = e.memoizedProps, r[sr] = e, (l = r.nodeValue !== n) && (t = dn, t !== null)) switch (t.tag) {
            case 3:
              ja(r.nodeValue, n, (t.mode & 1) !== 0);
              break;
            case 5:
              t.memoizedProps.suppressHydrationWarning !== !0 && ja(r.nodeValue, n, (t.mode & 1) !== 0);
          }
          l && (e.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[sr] = e, e.stateNode = r;
      }
      return Gt(e), null;
    case 13:
      if (Ye(et), r = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
        if (qe && cn !== null && e.mode & 1 && !(e.flags & 128)) x3(), qs(), e.flags |= 98560, l = !1;
        else if (l = Wa(e), r !== null && r.dehydrated !== null) {
          if (t === null) {
            if (!l) throw Error(K(318));
            if (l = e.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(K(317));
            l[sr] = e;
          } else qs(), !(e.flags & 128) && (e.memoizedState = null), e.flags |= 4;
          Gt(e), l = !1;
        } else Hn !== null && (e0(Hn), Hn = null), l = !0;
        if (!l) return e.flags & 65536 ? e : null;
      }
      return e.flags & 128 ? (e.lanes = n, e) : (r = r !== null, r !== (t !== null && t.memoizedState !== null) && r && (e.child.flags |= 8192, e.mode & 1 && (t === null || et.current & 1 ? vt === 0 && (vt = 3) : e1())), e.updateQueue !== null && (e.flags |= 4), Gt(e), null);
    case 4:
      return Js(), Yh(t, e), t === null && yl(e.stateNode.containerInfo), Gt(e), null;
    case 10:
      return z0(e.type._context), Gt(e), null;
    case 17:
      return rn(e.type) && Pu(), Gt(e), null;
    case 19:
      if (Ye(et), l = e.memoizedState, l === null) return Gt(e), null;
      if (r = (e.flags & 128) !== 0, a = l.rendering, a === null) if (r) Bo(l, !1);
      else {
        if (vt !== 0 || t !== null && t.flags & 128) for (t = e.child; t !== null; ) {
          if (a = Au(t), a !== null) {
            for (e.flags |= 128, Bo(l, !1), r = a.updateQueue, r !== null && (e.updateQueue = r, e.flags |= 4), e.subtreeFlags = 0, r = n, n = e.child; n !== null; ) l = n, t = r, l.flags &= 14680066, a = l.alternate, a === null ? (l.childLanes = 0, l.lanes = t, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = a.childLanes, l.lanes = a.lanes, l.child = a.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = a.memoizedProps, l.memoizedState = a.memoizedState, l.updateQueue = a.updateQueue, l.type = a.type, t = a.dependencies, l.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }), n = n.sibling;
            return He(et, et.current & 1 | 2), e.child;
          }
          t = t.sibling;
        }
        l.tail !== null && at() > eo && (e.flags |= 128, r = !0, Bo(l, !1), e.lanes = 4194304);
      }
      else {
        if (!r) if (t = Au(a), t !== null) {
          if (e.flags |= 128, r = !0, n = t.updateQueue, n !== null && (e.updateQueue = n, e.flags |= 4), Bo(l, !0), l.tail === null && l.tailMode === "hidden" && !a.alternate && !qe) return Gt(e), null;
        } else 2 * at() - l.renderingStartTime > eo && n !== 1073741824 && (e.flags |= 128, r = !0, Bo(l, !1), e.lanes = 4194304);
        l.isBackwards ? (a.sibling = e.child, e.child = a) : (n = l.last, n !== null ? n.sibling = a : e.child = a, l.last = a);
      }
      return l.tail !== null ? (e = l.tail, l.rendering = e, l.tail = e.sibling, l.renderingStartTime = at(), e.sibling = null, n = et.current, He(et, r ? n & 1 | 2 : n & 1), e) : (Gt(e), null);
    case 22:
    case 23:
      return b0(), r = e.memoizedState !== null, t !== null && t.memoizedState !== null !== r && (e.flags |= 8192), r && e.mode & 1 ? un & 1073741824 && (Gt(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : Gt(e), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(K(156, e.tag));
}
function L6(t, e) {
  switch (A0(e), e.tag) {
    case 1:
      return rn(e.type) && Pu(), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
    case 3:
      return Js(), Ye(nn), Ye(Bt), H0(), t = e.flags, t & 65536 && !(t & 128) ? (e.flags = t & -65537 | 128, e) : null;
    case 5:
      return V0(e), null;
    case 13:
      if (Ye(et), t = e.memoizedState, t !== null && t.dehydrated !== null) {
        if (e.alternate === null) throw Error(K(340));
        qs();
      }
      return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
    case 19:
      return Ye(et), null;
    case 4:
      return Js(), null;
    case 10:
      return z0(e.type._context), null;
    case 22:
    case 23:
      return b0(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Xa = !1, Ut = !1, A6 = typeof WeakSet == "function" ? WeakSet : Set, ne = null;
function Bs(t, e) {
  var n = t.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    it(t, e, r);
  }
  else n.current = null;
}
function Xh(t, e, n) {
  try {
    n();
  } catch (r) {
    it(t, e, r);
  }
}
var a2 = !1;
function O6(t, e) {
  if (Fh = xu, t = u3(), M0(t)) {
    if ("selectionStart" in t) var n = { start: t.selectionStart, end: t.selectionEnd };
    else e: {
      n = (n = t.ownerDocument) && n.defaultView || window;
      var r = n.getSelection && n.getSelection();
      if (r && r.rangeCount !== 0) {
        n = r.anchorNode;
        var o = r.anchorOffset, l = r.focusNode;
        r = r.focusOffset;
        try {
          n.nodeType, l.nodeType;
        } catch {
          n = null;
          break e;
        }
        var a = 0, c = -1, f = -1, g = 0, y = 0, C = t, S = null;
        t: for (; ; ) {
          for (var x; C !== n || o !== 0 && C.nodeType !== 3 || (c = a + o), C !== l || r !== 0 && C.nodeType !== 3 || (f = a + r), C.nodeType === 3 && (a += C.nodeValue.length), (x = C.firstChild) !== null; )
            S = C, C = x;
          for (; ; ) {
            if (C === t) break t;
            if (S === n && ++g === o && (c = a), S === l && ++y === r && (f = a), (x = C.nextSibling) !== null) break;
            C = S, S = C.parentNode;
          }
          C = x;
        }
        n = c === -1 || f === -1 ? null : { start: c, end: f };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Mh = { focusedElem: t, selectionRange: n }, xu = !1, ne = e; ne !== null; ) if (e = ne, t = e.child, (e.subtreeFlags & 1028) !== 0 && t !== null) t.return = e, ne = t;
  else for (; ne !== null; ) {
    e = ne;
    try {
      var v = e.alternate;
      if (e.flags & 1024) switch (e.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (v !== null) {
            var E = v.memoizedProps, N = v.memoizedState, k = e.stateNode, w = k.getSnapshotBeforeUpdate(e.elementType === e.type ? E : Bn(e.type, E), N);
            k.__reactInternalSnapshotBeforeUpdate = w;
          }
          break;
        case 3:
          var p = e.stateNode.containerInfo;
          p.nodeType === 1 ? p.textContent = "" : p.nodeType === 9 && p.documentElement && p.removeChild(p.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(K(163));
      }
    } catch (_) {
      it(e, e.return, _);
    }
    if (t = e.sibling, t !== null) {
      t.return = e.return, ne = t;
      break;
    }
    ne = e.return;
  }
  return v = a2, a2 = !1, v;
}
function sl(t, e, n) {
  var r = e.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & t) === t) {
        var l = o.destroy;
        o.destroy = void 0, l !== void 0 && Xh(e, n, l);
      }
      o = o.next;
    } while (o !== r);
  }
}
function nc(t, e) {
  if (e = e.updateQueue, e = e !== null ? e.lastEffect : null, e !== null) {
    var n = e = e.next;
    do {
      if ((n.tag & t) === t) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== e);
  }
}
function Qh(t) {
  var e = t.ref;
  if (e !== null) {
    var n = t.stateNode;
    switch (t.tag) {
      case 5:
        t = n;
        break;
      default:
        t = n;
    }
    typeof e == "function" ? e(t) : e.current = t;
  }
}
function s4(t) {
  var e = t.alternate;
  e !== null && (t.alternate = null, s4(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && (delete e[sr], delete e[_l], delete e[Oh], delete e[m6], delete e[y6])), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
}
function o4(t) {
  return t.tag === 5 || t.tag === 3 || t.tag === 4;
}
function u2(t) {
  e: for (; ; ) {
    for (; t.sibling === null; ) {
      if (t.return === null || o4(t.return)) return null;
      t = t.return;
    }
    for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
      if (t.flags & 2 || t.child === null || t.tag === 4) continue e;
      t.child.return = t, t = t.child;
    }
    if (!(t.flags & 2)) return t.stateNode;
  }
}
function $h(t, e, n) {
  var r = t.tag;
  if (r === 5 || r === 6) t = t.stateNode, e ? n.nodeType === 8 ? n.parentNode.insertBefore(t, e) : n.insertBefore(t, e) : (n.nodeType === 8 ? (e = n.parentNode, e.insertBefore(t, n)) : (e = n, e.appendChild(t)), n = n._reactRootContainer, n != null || e.onclick !== null || (e.onclick = Eu));
  else if (r !== 4 && (t = t.child, t !== null)) for ($h(t, e, n), t = t.sibling; t !== null; ) $h(t, e, n), t = t.sibling;
}
function qh(t, e, n) {
  var r = t.tag;
  if (r === 5 || r === 6) t = t.stateNode, e ? n.insertBefore(t, e) : n.appendChild(t);
  else if (r !== 4 && (t = t.child, t !== null)) for (qh(t, e, n), t = t.sibling; t !== null; ) qh(t, e, n), t = t.sibling;
}
var Rt = null, Vn = !1;
function Kr(t, e, n) {
  for (n = n.child; n !== null; ) l4(t, e, n), n = n.sibling;
}
function l4(t, e, n) {
  if (lr && typeof lr.onCommitFiberUnmount == "function") try {
    lr.onCommitFiberUnmount(Qu, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      Ut || Bs(n, e);
    case 6:
      var r = Rt, o = Vn;
      Rt = null, Kr(t, e, n), Rt = r, Vn = o, Rt !== null && (Vn ? (t = Rt, n = n.stateNode, t.nodeType === 8 ? t.parentNode.removeChild(n) : t.removeChild(n)) : Rt.removeChild(n.stateNode));
      break;
    case 18:
      Rt !== null && (Vn ? (t = Rt, n = n.stateNode, t.nodeType === 8 ? Vf(t.parentNode, n) : t.nodeType === 1 && Vf(t, n), pl(t)) : Vf(Rt, n.stateNode));
      break;
    case 4:
      r = Rt, o = Vn, Rt = n.stateNode.containerInfo, Vn = !0, Kr(t, e, n), Rt = r, Vn = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Ut && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var l = o, a = l.destroy;
          l = l.tag, a !== void 0 && (l & 2 || l & 4) && Xh(n, e, a), o = o.next;
        } while (o !== r);
      }
      Kr(t, e, n);
      break;
    case 1:
      if (!Ut && (Bs(n, e), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (c) {
        it(n, e, c);
      }
      Kr(t, e, n);
      break;
    case 21:
      Kr(t, e, n);
      break;
    case 22:
      n.mode & 1 ? (Ut = (r = Ut) || n.memoizedState !== null, Kr(t, e, n), Ut = r) : Kr(t, e, n);
      break;
    default:
      Kr(t, e, n);
  }
}
function c2(t) {
  var e = t.updateQueue;
  if (e !== null) {
    t.updateQueue = null;
    var n = t.stateNode;
    n === null && (n = t.stateNode = new A6()), e.forEach(function(r) {
      var o = j6.bind(null, t, r);
      n.has(r) || (n.add(r), r.then(o, o));
    });
  }
}
function Gn(t, e) {
  var n = e.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var o = n[r];
    try {
      var l = t, a = e, c = a;
      e: for (; c !== null; ) {
        switch (c.tag) {
          case 5:
            Rt = c.stateNode, Vn = !1;
            break e;
          case 3:
            Rt = c.stateNode.containerInfo, Vn = !0;
            break e;
          case 4:
            Rt = c.stateNode.containerInfo, Vn = !0;
            break e;
        }
        c = c.return;
      }
      if (Rt === null) throw Error(K(160));
      l4(l, a, o), Rt = null, Vn = !1;
      var f = o.alternate;
      f !== null && (f.return = null), o.return = null;
    } catch (g) {
      it(o, e, g);
    }
  }
  if (e.subtreeFlags & 12854) for (e = e.child; e !== null; ) a4(e, t), e = e.sibling;
}
function a4(t, e) {
  var n = t.alternate, r = t.flags;
  switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Gn(e, t), rr(t), r & 4) {
        try {
          sl(3, t, t.return), nc(3, t);
        } catch (E) {
          it(t, t.return, E);
        }
        try {
          sl(5, t, t.return);
        } catch (E) {
          it(t, t.return, E);
        }
      }
      break;
    case 1:
      Gn(e, t), rr(t), r & 512 && n !== null && Bs(n, n.return);
      break;
    case 5:
      if (Gn(e, t), rr(t), r & 512 && n !== null && Bs(n, n.return), t.flags & 32) {
        var o = t.stateNode;
        try {
          cl(o, "");
        } catch (E) {
          it(t, t.return, E);
        }
      }
      if (r & 4 && (o = t.stateNode, o != null)) {
        var l = t.memoizedProps, a = n !== null ? n.memoizedProps : l, c = t.type, f = t.updateQueue;
        if (t.updateQueue = null, f !== null) try {
          c === "input" && l.type === "radio" && l.name != null && Fm(o, l), Sh(c, a);
          var g = Sh(c, l);
          for (a = 0; a < f.length; a += 2) {
            var y = f[a], C = f[a + 1];
            y === "style" ? Dm(o, C) : y === "dangerouslySetInnerHTML" ? Am(o, C) : y === "children" ? cl(o, C) : v0(o, y, C, g);
          }
          switch (c) {
            case "input":
              gh(o, l);
              break;
            case "textarea":
              Mm(o, l);
              break;
            case "select":
              var S = o._wrapperState.wasMultiple;
              o._wrapperState.wasMultiple = !!l.multiple;
              var x = l.value;
              x != null ? Hs(o, !!l.multiple, x, !1) : S !== !!l.multiple && (l.defaultValue != null ? Hs(
                o,
                !!l.multiple,
                l.defaultValue,
                !0
              ) : Hs(o, !!l.multiple, l.multiple ? [] : "", !1));
          }
          o[_l] = l;
        } catch (E) {
          it(t, t.return, E);
        }
      }
      break;
    case 6:
      if (Gn(e, t), rr(t), r & 4) {
        if (t.stateNode === null) throw Error(K(162));
        o = t.stateNode, l = t.memoizedProps;
        try {
          o.nodeValue = l;
        } catch (E) {
          it(t, t.return, E);
        }
      }
      break;
    case 3:
      if (Gn(e, t), rr(t), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        pl(e.containerInfo);
      } catch (E) {
        it(t, t.return, E);
      }
      break;
    case 4:
      Gn(e, t), rr(t);
      break;
    case 13:
      Gn(e, t), rr(t), o = t.child, o.flags & 8192 && (l = o.memoizedState !== null, o.stateNode.isHidden = l, !l || o.alternate !== null && o.alternate.memoizedState !== null || (Z0 = at())), r & 4 && c2(t);
      break;
    case 22:
      if (y = n !== null && n.memoizedState !== null, t.mode & 1 ? (Ut = (g = Ut) || y, Gn(e, t), Ut = g) : Gn(e, t), rr(t), r & 8192) {
        if (g = t.memoizedState !== null, (t.stateNode.isHidden = g) && !y && t.mode & 1) for (ne = t, y = t.child; y !== null; ) {
          for (C = ne = y; ne !== null; ) {
            switch (S = ne, x = S.child, S.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                sl(4, S, S.return);
                break;
              case 1:
                Bs(S, S.return);
                var v = S.stateNode;
                if (typeof v.componentWillUnmount == "function") {
                  r = S, n = S.return;
                  try {
                    e = r, v.props = e.memoizedProps, v.state = e.memoizedState, v.componentWillUnmount();
                  } catch (E) {
                    it(r, n, E);
                  }
                }
                break;
              case 5:
                Bs(S, S.return);
                break;
              case 22:
                if (S.memoizedState !== null) {
                  f2(C);
                  continue;
                }
            }
            x !== null ? (x.return = S, ne = x) : f2(C);
          }
          y = y.sibling;
        }
        e: for (y = null, C = t; ; ) {
          if (C.tag === 5) {
            if (y === null) {
              y = C;
              try {
                o = C.stateNode, g ? (l = o.style, typeof l.setProperty == "function" ? l.setProperty("display", "none", "important") : l.display = "none") : (c = C.stateNode, f = C.memoizedProps.style, a = f != null && f.hasOwnProperty("display") ? f.display : null, c.style.display = Om("display", a));
              } catch (E) {
                it(t, t.return, E);
              }
            }
          } else if (C.tag === 6) {
            if (y === null) try {
              C.stateNode.nodeValue = g ? "" : C.memoizedProps;
            } catch (E) {
              it(t, t.return, E);
            }
          } else if ((C.tag !== 22 && C.tag !== 23 || C.memoizedState === null || C === t) && C.child !== null) {
            C.child.return = C, C = C.child;
            continue;
          }
          if (C === t) break e;
          for (; C.sibling === null; ) {
            if (C.return === null || C.return === t) break e;
            y === C && (y = null), C = C.return;
          }
          y === C && (y = null), C.sibling.return = C.return, C = C.sibling;
        }
      }
      break;
    case 19:
      Gn(e, t), rr(t), r & 4 && c2(t);
      break;
    case 21:
      break;
    default:
      Gn(
        e,
        t
      ), rr(t);
  }
}
function rr(t) {
  var e = t.flags;
  if (e & 2) {
    try {
      e: {
        for (var n = t.return; n !== null; ) {
          if (o4(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(K(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (cl(o, ""), r.flags &= -33);
          var l = u2(t);
          qh(t, l, o);
          break;
        case 3:
        case 4:
          var a = r.stateNode.containerInfo, c = u2(t);
          $h(t, c, a);
          break;
        default:
          throw Error(K(161));
      }
    } catch (f) {
      it(t, t.return, f);
    }
    t.flags &= -3;
  }
  e & 4096 && (t.flags &= -4097);
}
function D6(t, e, n) {
  ne = t, u4(t);
}
function u4(t, e, n) {
  for (var r = (t.mode & 1) !== 0; ne !== null; ) {
    var o = ne, l = o.child;
    if (o.tag === 22 && r) {
      var a = o.memoizedState !== null || Xa;
      if (!a) {
        var c = o.alternate, f = c !== null && c.memoizedState !== null || Ut;
        c = Xa;
        var g = Ut;
        if (Xa = a, (Ut = f) && !g) for (ne = o; ne !== null; ) a = ne, f = a.child, a.tag === 22 && a.memoizedState !== null ? h2(o) : f !== null ? (f.return = a, ne = f) : h2(o);
        for (; l !== null; ) ne = l, u4(l), l = l.sibling;
        ne = o, Xa = c, Ut = g;
      }
      d2(t);
    } else o.subtreeFlags & 8772 && l !== null ? (l.return = o, ne = l) : d2(t);
  }
}
function d2(t) {
  for (; ne !== null; ) {
    var e = ne;
    if (e.flags & 8772) {
      var n = e.alternate;
      try {
        if (e.flags & 8772) switch (e.tag) {
          case 0:
          case 11:
          case 15:
            Ut || nc(5, e);
            break;
          case 1:
            var r = e.stateNode;
            if (e.flags & 4 && !Ut) if (n === null) r.componentDidMount();
            else {
              var o = e.elementType === e.type ? n.memoizedProps : Bn(e.type, n.memoizedProps);
              r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var l = e.updateQueue;
            l !== null && $g(e, l, r);
            break;
          case 3:
            var a = e.updateQueue;
            if (a !== null) {
              if (n = null, e.child !== null) switch (e.child.tag) {
                case 5:
                  n = e.child.stateNode;
                  break;
                case 1:
                  n = e.child.stateNode;
              }
              $g(e, a, n);
            }
            break;
          case 5:
            var c = e.stateNode;
            if (n === null && e.flags & 4) {
              n = c;
              var f = e.memoizedProps;
              switch (e.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  f.autoFocus && n.focus();
                  break;
                case "img":
                  f.src && (n.src = f.src);
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
            if (e.memoizedState === null) {
              var g = e.alternate;
              if (g !== null) {
                var y = g.memoizedState;
                if (y !== null) {
                  var C = y.dehydrated;
                  C !== null && pl(C);
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
            throw Error(K(163));
        }
        Ut || e.flags & 512 && Qh(e);
      } catch (S) {
        it(e, e.return, S);
      }
    }
    if (e === t) {
      ne = null;
      break;
    }
    if (n = e.sibling, n !== null) {
      n.return = e.return, ne = n;
      break;
    }
    ne = e.return;
  }
}
function f2(t) {
  for (; ne !== null; ) {
    var e = ne;
    if (e === t) {
      ne = null;
      break;
    }
    var n = e.sibling;
    if (n !== null) {
      n.return = e.return, ne = n;
      break;
    }
    ne = e.return;
  }
}
function h2(t) {
  for (; ne !== null; ) {
    var e = ne;
    try {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          var n = e.return;
          try {
            nc(4, e);
          } catch (f) {
            it(e, n, f);
          }
          break;
        case 1:
          var r = e.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = e.return;
            try {
              r.componentDidMount();
            } catch (f) {
              it(e, o, f);
            }
          }
          var l = e.return;
          try {
            Qh(e);
          } catch (f) {
            it(e, l, f);
          }
          break;
        case 5:
          var a = e.return;
          try {
            Qh(e);
          } catch (f) {
            it(e, a, f);
          }
      }
    } catch (f) {
      it(e, e.return, f);
    }
    if (e === t) {
      ne = null;
      break;
    }
    var c = e.sibling;
    if (c !== null) {
      c.return = e.return, ne = c;
      break;
    }
    ne = e.return;
  }
}
var I6 = Math.ceil, Iu = Fr.ReactCurrentDispatcher, $0 = Fr.ReactCurrentOwner, Nn = Fr.ReactCurrentBatchConfig, Te = 0, Pt = null, dt = null, Ft = 0, un = 0, Vs = fi(0), vt = 0, El = null, Qi = 0, rc = 0, q0 = 0, ol = null, en = null, Z0 = 0, eo = 1 / 0, Sr = null, zu = !1, Zh = null, si = null, Qa = !1, br = null, Gu = 0, ll = 0, Jh = null, fu = -1, hu = 0;
function Kt() {
  return Te & 6 ? at() : fu !== -1 ? fu : fu = at();
}
function oi(t) {
  return t.mode & 1 ? Te & 2 && Ft !== 0 ? Ft & -Ft : _6.transition !== null ? (hu === 0 && (hu = Xm()), hu) : (t = Oe, t !== 0 || (t = window.event, t = t === void 0 ? 16 : e3(t.type)), t) : 1;
}
function Wn(t, e, n, r) {
  if (50 < ll) throw ll = 0, Jh = null, Error(K(185));
  Fl(t, n, r), (!(Te & 2) || t !== Pt) && (t === Pt && (!(Te & 2) && (rc |= n), vt === 4 && Zr(t, Ft)), sn(t, r), n === 1 && Te === 0 && !(e.mode & 1) && (eo = at() + 500, bu && hi()));
}
function sn(t, e) {
  var n = t.callbackNode;
  _v(t, e);
  var r = wu(t, t === Pt ? Ft : 0);
  if (r === 0) n !== null && xg(n), t.callbackNode = null, t.callbackPriority = 0;
  else if (e = r & -r, t.callbackPriority !== e) {
    if (n != null && xg(n), e === 1) t.tag === 0 ? v6(p2.bind(null, t)) : _3(p2.bind(null, t)), p6(function() {
      !(Te & 6) && hi();
    }), n = null;
    else {
      switch (Qm(r)) {
        case 1:
          n = C0;
          break;
        case 4:
          n = Km;
          break;
        case 16:
          n = Su;
          break;
        case 536870912:
          n = Ym;
          break;
        default:
          n = Su;
      }
      n = y4(n, c4.bind(null, t));
    }
    t.callbackPriority = e, t.callbackNode = n;
  }
}
function c4(t, e) {
  if (fu = -1, hu = 0, Te & 6) throw Error(K(327));
  var n = t.callbackNode;
  if (Xs() && t.callbackNode !== n) return null;
  var r = wu(t, t === Pt ? Ft : 0);
  if (r === 0) return null;
  if (r & 30 || r & t.expiredLanes || e) e = Uu(t, r);
  else {
    e = r;
    var o = Te;
    Te |= 2;
    var l = f4();
    (Pt !== t || Ft !== e) && (Sr = null, eo = at() + 500, ji(t, e));
    do
      try {
        U6();
        break;
      } catch (c) {
        d4(t, c);
      }
    while (!0);
    I0(), Iu.current = l, Te = o, dt !== null ? e = 0 : (Pt = null, Ft = 0, e = vt);
  }
  if (e !== 0) {
    if (e === 2 && (o = Eh(t), o !== 0 && (r = o, e = bh(t, o))), e === 1) throw n = El, ji(t, 0), Zr(t, r), sn(t, at()), n;
    if (e === 6) Zr(t, r);
    else {
      if (o = t.current.alternate, !(r & 30) && !z6(o) && (e = Uu(t, r), e === 2 && (l = Eh(t), l !== 0 && (r = l, e = bh(t, l))), e === 1)) throw n = El, ji(t, 0), Zr(t, r), sn(t, at()), n;
      switch (t.finishedWork = o, t.finishedLanes = r, e) {
        case 0:
        case 1:
          throw Error(K(345));
        case 2:
          Gi(t, en, Sr);
          break;
        case 3:
          if (Zr(t, r), (r & 130023424) === r && (e = Z0 + 500 - at(), 10 < e)) {
            if (wu(t, 0) !== 0) break;
            if (o = t.suspendedLanes, (o & r) !== r) {
              Kt(), t.pingedLanes |= t.suspendedLanes & o;
              break;
            }
            t.timeoutHandle = Ah(Gi.bind(null, t, en, Sr), e);
            break;
          }
          Gi(t, en, Sr);
          break;
        case 4:
          if (Zr(t, r), (r & 4194240) === r) break;
          for (e = t.eventTimes, o = -1; 0 < r; ) {
            var a = 31 - jn(r);
            l = 1 << a, a = e[a], a > o && (o = a), r &= ~l;
          }
          if (r = o, r = at() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * I6(r / 1960)) - r, 10 < r) {
            t.timeoutHandle = Ah(Gi.bind(null, t, en, Sr), r);
            break;
          }
          Gi(t, en, Sr);
          break;
        case 5:
          Gi(t, en, Sr);
          break;
        default:
          throw Error(K(329));
      }
    }
  }
  return sn(t, at()), t.callbackNode === n ? c4.bind(null, t) : null;
}
function bh(t, e) {
  var n = ol;
  return t.current.memoizedState.isDehydrated && (ji(t, e).flags |= 256), t = Uu(t, e), t !== 2 && (e = en, en = n, e !== null && e0(e)), t;
}
function e0(t) {
  en === null ? en = t : en.push.apply(en, t);
}
function z6(t) {
  for (var e = t; ; ) {
    if (e.flags & 16384) {
      var n = e.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var o = n[r], l = o.getSnapshot;
        o = o.value;
        try {
          if (!Yn(l(), o)) return !1;
        } catch {
          return !1;
        }
      }
    }
    if (n = e.child, e.subtreeFlags & 16384 && n !== null) n.return = e, e = n;
    else {
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return !0;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
  }
  return !0;
}
function Zr(t, e) {
  for (e &= ~q0, e &= ~rc, t.suspendedLanes |= e, t.pingedLanes &= ~e, t = t.expirationTimes; 0 < e; ) {
    var n = 31 - jn(e), r = 1 << n;
    t[n] = -1, e &= ~r;
  }
}
function p2(t) {
  if (Te & 6) throw Error(K(327));
  Xs();
  var e = wu(t, 0);
  if (!(e & 1)) return sn(t, at()), null;
  var n = Uu(t, e);
  if (t.tag !== 0 && n === 2) {
    var r = Eh(t);
    r !== 0 && (e = r, n = bh(t, r));
  }
  if (n === 1) throw n = El, ji(t, 0), Zr(t, e), sn(t, at()), n;
  if (n === 6) throw Error(K(345));
  return t.finishedWork = t.current.alternate, t.finishedLanes = e, Gi(t, en, Sr), sn(t, at()), null;
}
function J0(t, e) {
  var n = Te;
  Te |= 1;
  try {
    return t(e);
  } finally {
    Te = n, Te === 0 && (eo = at() + 500, bu && hi());
  }
}
function $i(t) {
  br !== null && br.tag === 0 && !(Te & 6) && Xs();
  var e = Te;
  Te |= 1;
  var n = Nn.transition, r = Oe;
  try {
    if (Nn.transition = null, Oe = 1, t) return t();
  } finally {
    Oe = r, Nn.transition = n, Te = e, !(Te & 6) && hi();
  }
}
function b0() {
  un = Vs.current, Ye(Vs);
}
function ji(t, e) {
  t.finishedWork = null, t.finishedLanes = 0;
  var n = t.timeoutHandle;
  if (n !== -1 && (t.timeoutHandle = -1, h6(n)), dt !== null) for (n = dt.return; n !== null; ) {
    var r = n;
    switch (A0(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Pu();
        break;
      case 3:
        Js(), Ye(nn), Ye(Bt), H0();
        break;
      case 5:
        V0(r);
        break;
      case 4:
        Js();
        break;
      case 13:
        Ye(et);
        break;
      case 19:
        Ye(et);
        break;
      case 10:
        z0(r.type._context);
        break;
      case 22:
      case 23:
        b0();
    }
    n = n.return;
  }
  if (Pt = t, dt = t = li(t.current, null), Ft = un = e, vt = 0, El = null, q0 = rc = Qi = 0, en = ol = null, Vi !== null) {
    for (e = 0; e < Vi.length; e++) if (n = Vi[e], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var o = r.next, l = n.pending;
      if (l !== null) {
        var a = l.next;
        l.next = o, r.next = a;
      }
      n.pending = r;
    }
    Vi = null;
  }
  return t;
}
function d4(t, e) {
  do {
    var n = dt;
    try {
      if (I0(), uu.current = Du, Ou) {
        for (var r = tt.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        Ou = !1;
      }
      if (Xi = 0, Et = yt = tt = null, il = !1, xl = 0, $0.current = null, n === null || n.return === null) {
        vt = 1, El = e, dt = null;
        break;
      }
      e: {
        var l = t, a = n.return, c = n, f = e;
        if (e = Ft, c.flags |= 32768, f !== null && typeof f == "object" && typeof f.then == "function") {
          var g = f, y = c, C = y.tag;
          if (!(y.mode & 1) && (C === 0 || C === 11 || C === 15)) {
            var S = y.alternate;
            S ? (y.updateQueue = S.updateQueue, y.memoizedState = S.memoizedState, y.lanes = S.lanes) : (y.updateQueue = null, y.memoizedState = null);
          }
          var x = t2(a);
          if (x !== null) {
            x.flags &= -257, n2(x, a, c, l, e), x.mode & 1 && e2(l, g, e), e = x, f = g;
            var v = e.updateQueue;
            if (v === null) {
              var E = /* @__PURE__ */ new Set();
              E.add(f), e.updateQueue = E;
            } else v.add(f);
            break e;
          } else {
            if (!(e & 1)) {
              e2(l, g, e), e1();
              break e;
            }
            f = Error(K(426));
          }
        } else if (qe && c.mode & 1) {
          var N = t2(a);
          if (N !== null) {
            !(N.flags & 65536) && (N.flags |= 256), n2(N, a, c, l, e), O0(bs(f, c));
            break e;
          }
        }
        l = f = bs(f, c), vt !== 4 && (vt = 2), ol === null ? ol = [l] : ol.push(l), l = a;
        do {
          switch (l.tag) {
            case 3:
              l.flags |= 65536, e &= -e, l.lanes |= e;
              var k = Q3(l, f, e);
              Qg(l, k);
              break e;
            case 1:
              c = f;
              var w = l.type, p = l.stateNode;
              if (!(l.flags & 128) && (typeof w.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (si === null || !si.has(p)))) {
                l.flags |= 65536, e &= -e, l.lanes |= e;
                var _ = $3(l, c, e);
                Qg(l, _);
                break e;
              }
          }
          l = l.return;
        } while (l !== null);
      }
      p4(n);
    } catch (T) {
      e = T, dt === n && n !== null && (dt = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function f4() {
  var t = Iu.current;
  return Iu.current = Du, t === null ? Du : t;
}
function e1() {
  (vt === 0 || vt === 3 || vt === 2) && (vt = 4), Pt === null || !(Qi & 268435455) && !(rc & 268435455) || Zr(Pt, Ft);
}
function Uu(t, e) {
  var n = Te;
  Te |= 2;
  var r = f4();
  (Pt !== t || Ft !== e) && (Sr = null, ji(t, e));
  do
    try {
      G6();
      break;
    } catch (o) {
      d4(t, o);
    }
  while (!0);
  if (I0(), Te = n, Iu.current = r, dt !== null) throw Error(K(261));
  return Pt = null, Ft = 0, vt;
}
function G6() {
  for (; dt !== null; ) h4(dt);
}
function U6() {
  for (; dt !== null && !cv(); ) h4(dt);
}
function h4(t) {
  var e = m4(t.alternate, t, un);
  t.memoizedProps = t.pendingProps, e === null ? p4(t) : dt = e, $0.current = null;
}
function p4(t) {
  var e = t;
  do {
    var n = e.alternate;
    if (t = e.return, e.flags & 32768) {
      if (n = L6(n, e), n !== null) {
        n.flags &= 32767, dt = n;
        return;
      }
      if (t !== null) t.flags |= 32768, t.subtreeFlags = 0, t.deletions = null;
      else {
        vt = 6, dt = null;
        return;
      }
    } else if (n = M6(n, e, un), n !== null) {
      dt = n;
      return;
    }
    if (e = e.sibling, e !== null) {
      dt = e;
      return;
    }
    dt = e = t;
  } while (e !== null);
  vt === 0 && (vt = 5);
}
function Gi(t, e, n) {
  var r = Oe, o = Nn.transition;
  try {
    Nn.transition = null, Oe = 1, B6(t, e, n, r);
  } finally {
    Nn.transition = o, Oe = r;
  }
  return null;
}
function B6(t, e, n, r) {
  do
    Xs();
  while (br !== null);
  if (Te & 6) throw Error(K(327));
  n = t.finishedWork;
  var o = t.finishedLanes;
  if (n === null) return null;
  if (t.finishedWork = null, t.finishedLanes = 0, n === t.current) throw Error(K(177));
  t.callbackNode = null, t.callbackPriority = 0;
  var l = n.lanes | n.childLanes;
  if (Sv(t, l), t === Pt && (dt = Pt = null, Ft = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Qa || (Qa = !0, y4(Su, function() {
    return Xs(), null;
  })), l = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || l) {
    l = Nn.transition, Nn.transition = null;
    var a = Oe;
    Oe = 1;
    var c = Te;
    Te |= 4, $0.current = null, O6(t, n), a4(n, t), o6(Mh), xu = !!Fh, Mh = Fh = null, t.current = n, D6(n), dv(), Te = c, Oe = a, Nn.transition = l;
  } else t.current = n;
  if (Qa && (Qa = !1, br = t, Gu = o), l = t.pendingLanes, l === 0 && (si = null), pv(n.stateNode), sn(t, at()), e !== null) for (r = t.onRecoverableError, n = 0; n < e.length; n++) o = e[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (zu) throw zu = !1, t = Zh, Zh = null, t;
  return Gu & 1 && t.tag !== 0 && Xs(), l = t.pendingLanes, l & 1 ? t === Jh ? ll++ : (ll = 0, Jh = t) : ll = 0, hi(), null;
}
function Xs() {
  if (br !== null) {
    var t = Qm(Gu), e = Nn.transition, n = Oe;
    try {
      if (Nn.transition = null, Oe = 16 > t ? 16 : t, br === null) var r = !1;
      else {
        if (t = br, br = null, Gu = 0, Te & 6) throw Error(K(331));
        var o = Te;
        for (Te |= 4, ne = t.current; ne !== null; ) {
          var l = ne, a = l.child;
          if (ne.flags & 16) {
            var c = l.deletions;
            if (c !== null) {
              for (var f = 0; f < c.length; f++) {
                var g = c[f];
                for (ne = g; ne !== null; ) {
                  var y = ne;
                  switch (y.tag) {
                    case 0:
                    case 11:
                    case 15:
                      sl(8, y, l);
                  }
                  var C = y.child;
                  if (C !== null) C.return = y, ne = C;
                  else for (; ne !== null; ) {
                    y = ne;
                    var S = y.sibling, x = y.return;
                    if (s4(y), y === g) {
                      ne = null;
                      break;
                    }
                    if (S !== null) {
                      S.return = x, ne = S;
                      break;
                    }
                    ne = x;
                  }
                }
              }
              var v = l.alternate;
              if (v !== null) {
                var E = v.child;
                if (E !== null) {
                  v.child = null;
                  do {
                    var N = E.sibling;
                    E.sibling = null, E = N;
                  } while (E !== null);
                }
              }
              ne = l;
            }
          }
          if (l.subtreeFlags & 2064 && a !== null) a.return = l, ne = a;
          else e: for (; ne !== null; ) {
            if (l = ne, l.flags & 2048) switch (l.tag) {
              case 0:
              case 11:
              case 15:
                sl(9, l, l.return);
            }
            var k = l.sibling;
            if (k !== null) {
              k.return = l.return, ne = k;
              break e;
            }
            ne = l.return;
          }
        }
        var w = t.current;
        for (ne = w; ne !== null; ) {
          a = ne;
          var p = a.child;
          if (a.subtreeFlags & 2064 && p !== null) p.return = a, ne = p;
          else e: for (a = w; ne !== null; ) {
            if (c = ne, c.flags & 2048) try {
              switch (c.tag) {
                case 0:
                case 11:
                case 15:
                  nc(9, c);
              }
            } catch (T) {
              it(c, c.return, T);
            }
            if (c === a) {
              ne = null;
              break e;
            }
            var _ = c.sibling;
            if (_ !== null) {
              _.return = c.return, ne = _;
              break e;
            }
            ne = c.return;
          }
        }
        if (Te = o, hi(), lr && typeof lr.onPostCommitFiberRoot == "function") try {
          lr.onPostCommitFiberRoot(Qu, t);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      Oe = n, Nn.transition = e;
    }
  }
  return !1;
}
function g2(t, e, n) {
  e = bs(n, e), e = Q3(t, e, 1), t = ii(t, e, 1), e = Kt(), t !== null && (Fl(t, 1, e), sn(t, e));
}
function it(t, e, n) {
  if (t.tag === 3) g2(t, t, n);
  else for (; e !== null; ) {
    if (e.tag === 3) {
      g2(e, t, n);
      break;
    } else if (e.tag === 1) {
      var r = e.stateNode;
      if (typeof e.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (si === null || !si.has(r))) {
        t = bs(n, t), t = $3(e, t, 1), e = ii(e, t, 1), t = Kt(), e !== null && (Fl(e, 1, t), sn(e, t));
        break;
      }
    }
    e = e.return;
  }
}
function V6(t, e, n) {
  var r = t.pingCache;
  r !== null && r.delete(e), e = Kt(), t.pingedLanes |= t.suspendedLanes & n, Pt === t && (Ft & n) === n && (vt === 4 || vt === 3 && (Ft & 130023424) === Ft && 500 > at() - Z0 ? ji(t, 0) : q0 |= n), sn(t, e);
}
function g4(t, e) {
  e === 0 && (t.mode & 1 ? (e = Ga, Ga <<= 1, !(Ga & 130023424) && (Ga = 4194304)) : e = 1);
  var n = Kt();
  t = Nr(t, e), t !== null && (Fl(t, e, n), sn(t, n));
}
function H6(t) {
  var e = t.memoizedState, n = 0;
  e !== null && (n = e.retryLane), g4(t, n);
}
function j6(t, e) {
  var n = 0;
  switch (t.tag) {
    case 13:
      var r = t.stateNode, o = t.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = t.stateNode;
      break;
    default:
      throw Error(K(314));
  }
  r !== null && r.delete(e), g4(t, n);
}
var m4;
m4 = function(t, e, n) {
  if (t !== null) if (t.memoizedProps !== e.pendingProps || nn.current) tn = !0;
  else {
    if (!(t.lanes & n) && !(e.flags & 128)) return tn = !1, F6(t, e, n);
    tn = !!(t.flags & 131072);
  }
  else tn = !1, qe && e.flags & 1048576 && S3(e, Ru, e.index);
  switch (e.lanes = 0, e.tag) {
    case 2:
      var r = e.type;
      du(t, e), t = e.pendingProps;
      var o = $s(e, Bt.current);
      Ys(e, n), o = W0(null, e, r, t, o, n);
      var l = K0();
      return e.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (e.tag = 1, e.memoizedState = null, e.updateQueue = null, rn(r) ? (l = !0, Tu(e)) : l = !1, e.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, U0(e), o.updater = tc, e.stateNode = o, o._reactInternals = e, Bh(e, r, t, n), e = jh(null, e, r, !0, l, n)) : (e.tag = 0, qe && l && L0(e), jt(null, e, o, n), e = e.child), e;
    case 16:
      r = e.elementType;
      e: {
        switch (du(t, e), t = e.pendingProps, o = r._init, r = o(r._payload), e.type = r, o = e.tag = K6(r), t = Bn(r, t), o) {
          case 0:
            e = Hh(null, e, r, t, n);
            break e;
          case 1:
            e = s2(null, e, r, t, n);
            break e;
          case 11:
            e = r2(null, e, r, t, n);
            break e;
          case 14:
            e = i2(null, e, r, Bn(r.type, t), n);
            break e;
        }
        throw Error(K(
          306,
          r,
          ""
        ));
      }
      return e;
    case 0:
      return r = e.type, o = e.pendingProps, o = e.elementType === r ? o : Bn(r, o), Hh(t, e, r, o, n);
    case 1:
      return r = e.type, o = e.pendingProps, o = e.elementType === r ? o : Bn(r, o), s2(t, e, r, o, n);
    case 3:
      e: {
        if (b3(e), t === null) throw Error(K(387));
        r = e.pendingProps, l = e.memoizedState, o = l.element, P3(t, e), Lu(e, r, null, n);
        var a = e.memoizedState;
        if (r = a.element, l.isDehydrated) if (l = { element: r, isDehydrated: !1, cache: a.cache, pendingSuspenseBoundaries: a.pendingSuspenseBoundaries, transitions: a.transitions }, e.updateQueue.baseState = l, e.memoizedState = l, e.flags & 256) {
          o = bs(Error(K(423)), e), e = o2(t, e, r, n, o);
          break e;
        } else if (r !== o) {
          o = bs(Error(K(424)), e), e = o2(t, e, r, n, o);
          break e;
        } else for (cn = ri(e.stateNode.containerInfo.firstChild), dn = e, qe = !0, Hn = null, n = k3(e, null, r, n), e.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (qs(), r === o) {
            e = Rr(t, e, n);
            break e;
          }
          jt(t, e, r, n);
        }
        e = e.child;
      }
      return e;
    case 5:
      return T3(e), t === null && zh(e), r = e.type, o = e.pendingProps, l = t !== null ? t.memoizedProps : null, a = o.children, Lh(r, o) ? a = null : l !== null && Lh(r, l) && (e.flags |= 32), J3(t, e), jt(t, e, a, n), e.child;
    case 6:
      return t === null && zh(e), null;
    case 13:
      return e4(t, e, n);
    case 4:
      return B0(e, e.stateNode.containerInfo), r = e.pendingProps, t === null ? e.child = Zs(e, null, r, n) : jt(t, e, r, n), e.child;
    case 11:
      return r = e.type, o = e.pendingProps, o = e.elementType === r ? o : Bn(r, o), r2(t, e, r, o, n);
    case 7:
      return jt(t, e, e.pendingProps, n), e.child;
    case 8:
      return jt(t, e, e.pendingProps.children, n), e.child;
    case 12:
      return jt(t, e, e.pendingProps.children, n), e.child;
    case 10:
      e: {
        if (r = e.type._context, o = e.pendingProps, l = e.memoizedProps, a = o.value, He(Fu, r._currentValue), r._currentValue = a, l !== null) if (Yn(l.value, a)) {
          if (l.children === o.children && !nn.current) {
            e = Rr(t, e, n);
            break e;
          }
        } else for (l = e.child, l !== null && (l.return = e); l !== null; ) {
          var c = l.dependencies;
          if (c !== null) {
            a = l.child;
            for (var f = c.firstContext; f !== null; ) {
              if (f.context === r) {
                if (l.tag === 1) {
                  f = kr(-1, n & -n), f.tag = 2;
                  var g = l.updateQueue;
                  if (g !== null) {
                    g = g.shared;
                    var y = g.pending;
                    y === null ? f.next = f : (f.next = y.next, y.next = f), g.pending = f;
                  }
                }
                l.lanes |= n, f = l.alternate, f !== null && (f.lanes |= n), Gh(
                  l.return,
                  n,
                  e
                ), c.lanes |= n;
                break;
              }
              f = f.next;
            }
          } else if (l.tag === 10) a = l.type === e.type ? null : l.child;
          else if (l.tag === 18) {
            if (a = l.return, a === null) throw Error(K(341));
            a.lanes |= n, c = a.alternate, c !== null && (c.lanes |= n), Gh(a, n, e), a = l.sibling;
          } else a = l.child;
          if (a !== null) a.return = l;
          else for (a = l; a !== null; ) {
            if (a === e) {
              a = null;
              break;
            }
            if (l = a.sibling, l !== null) {
              l.return = a.return, a = l;
              break;
            }
            a = a.return;
          }
          l = a;
        }
        jt(t, e, o.children, n), e = e.child;
      }
      return e;
    case 9:
      return o = e.type, r = e.pendingProps.children, Ys(e, n), o = Rn(o), r = r(o), e.flags |= 1, jt(t, e, r, n), e.child;
    case 14:
      return r = e.type, o = Bn(r, e.pendingProps), o = Bn(r.type, o), i2(t, e, r, o, n);
    case 15:
      return q3(t, e, e.type, e.pendingProps, n);
    case 17:
      return r = e.type, o = e.pendingProps, o = e.elementType === r ? o : Bn(r, o), du(t, e), e.tag = 1, rn(r) ? (t = !0, Tu(e)) : t = !1, Ys(e, n), X3(e, r, o), Bh(e, r, o, n), jh(null, e, r, !0, t, n);
    case 19:
      return t4(t, e, n);
    case 22:
      return Z3(t, e, n);
  }
  throw Error(K(156, e.tag));
};
function y4(t, e) {
  return Wm(t, e);
}
function W6(t, e, n, r) {
  this.tag = t, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Tn(t, e, n, r) {
  return new W6(t, e, n, r);
}
function t1(t) {
  return t = t.prototype, !(!t || !t.isReactComponent);
}
function K6(t) {
  if (typeof t == "function") return t1(t) ? 1 : 0;
  if (t != null) {
    if (t = t.$$typeof, t === S0) return 11;
    if (t === w0) return 14;
  }
  return 2;
}
function li(t, e) {
  var n = t.alternate;
  return n === null ? (n = Tn(t.tag, e, t.key, t.mode), n.elementType = t.elementType, n.type = t.type, n.stateNode = t.stateNode, n.alternate = t, t.alternate = n) : (n.pendingProps = e, n.type = t.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = t.flags & 14680064, n.childLanes = t.childLanes, n.lanes = t.lanes, n.child = t.child, n.memoizedProps = t.memoizedProps, n.memoizedState = t.memoizedState, n.updateQueue = t.updateQueue, e = t.dependencies, n.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }, n.sibling = t.sibling, n.index = t.index, n.ref = t.ref, n;
}
function pu(t, e, n, r, o, l) {
  var a = 2;
  if (r = t, typeof t == "function") t1(t) && (a = 1);
  else if (typeof t == "string") a = 5;
  else e: switch (t) {
    case Ms:
      return Wi(n.children, o, l, e);
    case _0:
      a = 8, o |= 8;
      break;
    case ch:
      return t = Tn(12, n, e, o | 2), t.elementType = ch, t.lanes = l, t;
    case dh:
      return t = Tn(13, n, e, o), t.elementType = dh, t.lanes = l, t;
    case fh:
      return t = Tn(19, n, e, o), t.elementType = fh, t.lanes = l, t;
    case Tm:
      return ic(n, o, l, e);
    default:
      if (typeof t == "object" && t !== null) switch (t.$$typeof) {
        case Em:
          a = 10;
          break e;
        case Pm:
          a = 9;
          break e;
        case S0:
          a = 11;
          break e;
        case w0:
          a = 14;
          break e;
        case Qr:
          a = 16, r = null;
          break e;
      }
      throw Error(K(130, t == null ? t : typeof t, ""));
  }
  return e = Tn(a, n, e, o), e.elementType = t, e.type = r, e.lanes = l, e;
}
function Wi(t, e, n, r) {
  return t = Tn(7, t, r, e), t.lanes = n, t;
}
function ic(t, e, n, r) {
  return t = Tn(22, t, r, e), t.elementType = Tm, t.lanes = n, t.stateNode = { isHidden: !1 }, t;
}
function $f(t, e, n) {
  return t = Tn(6, t, null, e), t.lanes = n, t;
}
function qf(t, e, n) {
  return e = Tn(4, t.children !== null ? t.children : [], t.key, e), e.lanes = n, e.stateNode = { containerInfo: t.containerInfo, pendingChildren: null, implementation: t.implementation }, e;
}
function Y6(t, e, n, r, o) {
  this.tag = e, this.containerInfo = t, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ff(0), this.expirationTimes = Ff(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ff(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function n1(t, e, n, r, o, l, a, c, f) {
  return t = new Y6(t, e, n, c, f), e === 1 ? (e = 1, l === !0 && (e |= 8)) : e = 0, l = Tn(3, null, null, e), t.current = l, l.stateNode = t, l.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, U0(l), t;
}
function X6(t, e, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Fs, key: r == null ? null : "" + r, children: t, containerInfo: e, implementation: n };
}
function v4(t) {
  if (!t) return ui;
  t = t._reactInternals;
  e: {
    if (Zi(t) !== t || t.tag !== 1) throw Error(K(170));
    var e = t;
    do {
      switch (e.tag) {
        case 3:
          e = e.stateNode.context;
          break e;
        case 1:
          if (rn(e.type)) {
            e = e.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      e = e.return;
    } while (e !== null);
    throw Error(K(171));
  }
  if (t.tag === 1) {
    var n = t.type;
    if (rn(n)) return v3(t, n, e);
  }
  return e;
}
function _4(t, e, n, r, o, l, a, c, f) {
  return t = n1(n, r, !0, t, o, l, a, c, f), t.context = v4(null), n = t.current, r = Kt(), o = oi(n), l = kr(r, o), l.callback = e ?? null, ii(n, l, o), t.current.lanes = o, Fl(t, o, r), sn(t, r), t;
}
function sc(t, e, n, r) {
  var o = e.current, l = Kt(), a = oi(o);
  return n = v4(n), e.context === null ? e.context = n : e.pendingContext = n, e = kr(l, a), e.payload = { element: t }, r = r === void 0 ? null : r, r !== null && (e.callback = r), t = ii(o, e, a), t !== null && (Wn(t, o, a, l), au(t, o, a)), a;
}
function Bu(t) {
  if (t = t.current, !t.child) return null;
  switch (t.child.tag) {
    case 5:
      return t.child.stateNode;
    default:
      return t.child.stateNode;
  }
}
function m2(t, e) {
  if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
    var n = t.retryLane;
    t.retryLane = n !== 0 && n < e ? n : e;
  }
}
function r1(t, e) {
  m2(t, e), (t = t.alternate) && m2(t, e);
}
function Q6() {
  return null;
}
var S4 = typeof reportError == "function" ? reportError : function(t) {
  console.error(t);
};
function i1(t) {
  this._internalRoot = t;
}
oc.prototype.render = i1.prototype.render = function(t) {
  var e = this._internalRoot;
  if (e === null) throw Error(K(409));
  sc(t, e, null, null);
};
oc.prototype.unmount = i1.prototype.unmount = function() {
  var t = this._internalRoot;
  if (t !== null) {
    this._internalRoot = null;
    var e = t.containerInfo;
    $i(function() {
      sc(null, t, null, null);
    }), e[Tr] = null;
  }
};
function oc(t) {
  this._internalRoot = t;
}
oc.prototype.unstable_scheduleHydration = function(t) {
  if (t) {
    var e = Zm();
    t = { blockedOn: null, target: t, priority: e };
    for (var n = 0; n < qr.length && e !== 0 && e < qr[n].priority; n++) ;
    qr.splice(n, 0, t), n === 0 && bm(t);
  }
};
function s1(t) {
  return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
}
function lc(t) {
  return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11 && (t.nodeType !== 8 || t.nodeValue !== " react-mount-point-unstable "));
}
function y2() {
}
function $6(t, e, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var l = r;
      r = function() {
        var g = Bu(a);
        l.call(g);
      };
    }
    var a = _4(e, r, t, 0, null, !1, !1, "", y2);
    return t._reactRootContainer = a, t[Tr] = a.current, yl(t.nodeType === 8 ? t.parentNode : t), $i(), a;
  }
  for (; o = t.lastChild; ) t.removeChild(o);
  if (typeof r == "function") {
    var c = r;
    r = function() {
      var g = Bu(f);
      c.call(g);
    };
  }
  var f = n1(t, 0, !1, null, null, !1, !1, "", y2);
  return t._reactRootContainer = f, t[Tr] = f.current, yl(t.nodeType === 8 ? t.parentNode : t), $i(function() {
    sc(e, f, n, r);
  }), f;
}
function ac(t, e, n, r, o) {
  var l = n._reactRootContainer;
  if (l) {
    var a = l;
    if (typeof o == "function") {
      var c = o;
      o = function() {
        var f = Bu(a);
        c.call(f);
      };
    }
    sc(e, a, t, o);
  } else a = $6(n, e, t, o, r);
  return Bu(a);
}
$m = function(t) {
  switch (t.tag) {
    case 3:
      var e = t.stateNode;
      if (e.current.memoizedState.isDehydrated) {
        var n = $o(e.pendingLanes);
        n !== 0 && (k0(e, n | 1), sn(e, at()), !(Te & 6) && (eo = at() + 500, hi()));
      }
      break;
    case 13:
      $i(function() {
        var r = Nr(t, 1);
        if (r !== null) {
          var o = Kt();
          Wn(r, t, 1, o);
        }
      }), r1(t, 1);
  }
};
E0 = function(t) {
  if (t.tag === 13) {
    var e = Nr(t, 134217728);
    if (e !== null) {
      var n = Kt();
      Wn(e, t, 134217728, n);
    }
    r1(t, 134217728);
  }
};
qm = function(t) {
  if (t.tag === 13) {
    var e = oi(t), n = Nr(t, e);
    if (n !== null) {
      var r = Kt();
      Wn(n, t, e, r);
    }
    r1(t, e);
  }
};
Zm = function() {
  return Oe;
};
Jm = function(t, e) {
  var n = Oe;
  try {
    return Oe = t, e();
  } finally {
    Oe = n;
  }
};
xh = function(t, e, n) {
  switch (e) {
    case "input":
      if (gh(t, n), e = n.name, n.type === "radio" && e != null) {
        for (n = t; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + e) + '][type="radio"]'), e = 0; e < n.length; e++) {
          var r = n[e];
          if (r !== t && r.form === t.form) {
            var o = Ju(r);
            if (!o) throw Error(K(90));
            Rm(r), gh(r, o);
          }
        }
      }
      break;
    case "textarea":
      Mm(t, n);
      break;
    case "select":
      e = n.value, e != null && Hs(t, !!n.multiple, e, !1);
  }
};
Gm = J0;
Um = $i;
var q6 = { usingClientEntryPoint: !1, Events: [Ll, Ds, Ju, Im, zm, J0] }, Vo = { findFiberByHostInstance: Bi, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Z6 = { bundleType: Vo.bundleType, version: Vo.version, rendererPackageName: Vo.rendererPackageName, rendererConfig: Vo.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Fr.ReactCurrentDispatcher, findHostInstanceByFiber: function(t) {
  return t = Hm(t), t === null ? null : t.stateNode;
}, findFiberByHostInstance: Vo.findFiberByHostInstance || Q6, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var $a = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!$a.isDisabled && $a.supportsFiber) try {
    Qu = $a.inject(Z6), lr = $a;
  } catch {
  }
}
hn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = q6;
hn.createPortal = function(t, e) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!s1(e)) throw Error(K(200));
  return X6(t, e, null, n);
};
hn.createRoot = function(t, e) {
  if (!s1(t)) throw Error(K(299));
  var n = !1, r = "", o = S4;
  return e != null && (e.unstable_strictMode === !0 && (n = !0), e.identifierPrefix !== void 0 && (r = e.identifierPrefix), e.onRecoverableError !== void 0 && (o = e.onRecoverableError)), e = n1(t, 1, !1, null, null, n, !1, r, o), t[Tr] = e.current, yl(t.nodeType === 8 ? t.parentNode : t), new i1(e);
};
hn.findDOMNode = function(t) {
  if (t == null) return null;
  if (t.nodeType === 1) return t;
  var e = t._reactInternals;
  if (e === void 0)
    throw typeof t.render == "function" ? Error(K(188)) : (t = Object.keys(t).join(","), Error(K(268, t)));
  return t = Hm(e), t = t === null ? null : t.stateNode, t;
};
hn.flushSync = function(t) {
  return $i(t);
};
hn.hydrate = function(t, e, n) {
  if (!lc(e)) throw Error(K(200));
  return ac(null, t, e, !0, n);
};
hn.hydrateRoot = function(t, e, n) {
  if (!s1(t)) throw Error(K(405));
  var r = n != null && n.hydratedSources || null, o = !1, l = "", a = S4;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (l = n.identifierPrefix), n.onRecoverableError !== void 0 && (a = n.onRecoverableError)), e = _4(e, null, t, 1, n ?? null, o, !1, l, a), t[Tr] = e.current, yl(t), r) for (t = 0; t < r.length; t++) n = r[t], o = n._getVersion, o = o(n._source), e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [n, o] : e.mutableSourceEagerHydrationData.push(
    n,
    o
  );
  return new oc(e);
};
hn.render = function(t, e, n) {
  if (!lc(e)) throw Error(K(200));
  return ac(null, t, e, !1, n);
};
hn.unmountComponentAtNode = function(t) {
  if (!lc(t)) throw Error(K(40));
  return t._reactRootContainer ? ($i(function() {
    ac(null, null, t, !1, function() {
      t._reactRootContainer = null, t[Tr] = null;
    });
  }), !0) : !1;
};
hn.unstable_batchedUpdates = J0;
hn.unstable_renderSubtreeIntoContainer = function(t, e, n, r) {
  if (!lc(n)) throw Error(K(200));
  if (t == null || t._reactInternals === void 0) throw Error(K(38));
  return ac(t, e, n, !1, r);
};
hn.version = "18.3.1-next-f1338f8080-20240426";
function w4() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(w4);
    } catch (t) {
      console.error(t);
    }
}
w4(), wm.exports = hn;
var J6 = wm.exports, x4, v2 = J6;
x4 = v2.createRoot, v2.hydrateRoot;
var C4 = { exports: {} }, uc = {}, Vu = {}, Se = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t._registerNode = t.Konva = t.glob = void 0;
  const e = Math.PI / 180;
  function n() {
    return typeof window < "u" && ({}.toString.call(window) === "[object Window]" || {}.toString.call(window) === "[object global]");
  }
  t.glob = typeof ug < "u" ? ug : typeof window < "u" ? window : typeof WorkerGlobalScope < "u" ? self : {}, t.Konva = {
    _global: t.glob,
    version: "9.3.22",
    isBrowser: n(),
    isUnminified: /param/.test((function(o) {
    }).toString()),
    dblClickWindow: 400,
    getAngle(o) {
      return t.Konva.angleDeg ? o * e : o;
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
      return t.Konva.DD.isDragging;
    },
    isTransforming() {
      var o;
      return (o = t.Konva.Transformer) === null || o === void 0 ? void 0 : o.isTransforming();
    },
    isDragReady() {
      return !!t.Konva.DD.node;
    },
    releaseCanvasOnDestroy: !0,
    document: t.glob.document,
    _injectGlobal(o) {
      t.glob.Konva = o;
    }
  };
  const r = (o) => {
    t.Konva[o.prototype.getClassName()] = o;
  };
  t._registerNode = r, t.Konva._injectGlobal(t.Konva);
})(Se);
var rt = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.Util = t.Transform = void 0;
  const e = Se;
  class n {
    constructor(_ = [1, 0, 0, 1, 0, 0]) {
      this.dirty = !1, this.m = _ && _.slice() || [1, 0, 0, 1, 0, 0];
    }
    reset() {
      this.m[0] = 1, this.m[1] = 0, this.m[2] = 0, this.m[3] = 1, this.m[4] = 0, this.m[5] = 0;
    }
    copy() {
      return new n(this.m);
    }
    copyInto(_) {
      _.m[0] = this.m[0], _.m[1] = this.m[1], _.m[2] = this.m[2], _.m[3] = this.m[3], _.m[4] = this.m[4], _.m[5] = this.m[5];
    }
    point(_) {
      const T = this.m;
      return {
        x: T[0] * _.x + T[2] * _.y + T[4],
        y: T[1] * _.x + T[3] * _.y + T[5]
      };
    }
    translate(_, T) {
      return this.m[4] += this.m[0] * _ + this.m[2] * T, this.m[5] += this.m[1] * _ + this.m[3] * T, this;
    }
    scale(_, T) {
      return this.m[0] *= _, this.m[1] *= _, this.m[2] *= T, this.m[3] *= T, this;
    }
    rotate(_) {
      const T = Math.cos(_), F = Math.sin(_), L = this.m[0] * T + this.m[2] * F, R = this.m[1] * T + this.m[3] * F, G = this.m[0] * -F + this.m[2] * T, M = this.m[1] * -F + this.m[3] * T;
      return this.m[0] = L, this.m[1] = R, this.m[2] = G, this.m[3] = M, this;
    }
    getTranslation() {
      return {
        x: this.m[4],
        y: this.m[5]
      };
    }
    skew(_, T) {
      const F = this.m[0] + this.m[2] * T, L = this.m[1] + this.m[3] * T, R = this.m[2] + this.m[0] * _, G = this.m[3] + this.m[1] * _;
      return this.m[0] = F, this.m[1] = L, this.m[2] = R, this.m[3] = G, this;
    }
    multiply(_) {
      const T = this.m[0] * _.m[0] + this.m[2] * _.m[1], F = this.m[1] * _.m[0] + this.m[3] * _.m[1], L = this.m[0] * _.m[2] + this.m[2] * _.m[3], R = this.m[1] * _.m[2] + this.m[3] * _.m[3], G = this.m[0] * _.m[4] + this.m[2] * _.m[5] + this.m[4], M = this.m[1] * _.m[4] + this.m[3] * _.m[5] + this.m[5];
      return this.m[0] = T, this.m[1] = F, this.m[2] = L, this.m[3] = R, this.m[4] = G, this.m[5] = M, this;
    }
    invert() {
      const _ = 1 / (this.m[0] * this.m[3] - this.m[1] * this.m[2]), T = this.m[3] * _, F = -this.m[1] * _, L = -this.m[2] * _, R = this.m[0] * _, G = _ * (this.m[2] * this.m[5] - this.m[3] * this.m[4]), M = _ * (this.m[1] * this.m[4] - this.m[0] * this.m[5]);
      return this.m[0] = T, this.m[1] = F, this.m[2] = L, this.m[3] = R, this.m[4] = G, this.m[5] = M, this;
    }
    getMatrix() {
      return this.m;
    }
    decompose() {
      const _ = this.m[0], T = this.m[1], F = this.m[2], L = this.m[3], R = this.m[4], G = this.m[5], M = _ * L - T * F, B = {
        x: R,
        y: G,
        rotation: 0,
        scaleX: 0,
        scaleY: 0,
        skewX: 0,
        skewY: 0
      };
      if (_ != 0 || T != 0) {
        const j = Math.sqrt(_ * _ + T * T);
        B.rotation = T > 0 ? Math.acos(_ / j) : -Math.acos(_ / j), B.scaleX = j, B.scaleY = M / j, B.skewX = (_ * F + T * L) / M, B.skewY = 0;
      } else if (F != 0 || L != 0) {
        const j = Math.sqrt(F * F + L * L);
        B.rotation = Math.PI / 2 - (L > 0 ? Math.acos(-F / j) : -Math.acos(F / j)), B.scaleX = M / j, B.scaleY = j, B.skewX = 0, B.skewY = (_ * F + T * L) / M;
      }
      return B.rotation = t.Util._getRotation(B.rotation), B;
    }
  }
  t.Transform = n;
  const r = "[object Array]", o = "[object Number]", l = "[object String]", a = "[object Boolean]", c = Math.PI / 180, f = 180 / Math.PI, g = "#", y = "", C = "0", S = "Konva warning: ", x = "Konva error: ", v = "rgb(", E = {
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
  }, N = /rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)/;
  let k = [];
  const w = typeof requestAnimationFrame < "u" && requestAnimationFrame || function(p) {
    setTimeout(p, 60);
  };
  t.Util = {
    _isElement(p) {
      return !!(p && p.nodeType == 1);
    },
    _isFunction(p) {
      return !!(p && p.constructor && p.call && p.apply);
    },
    _isPlainObject(p) {
      return !!p && p.constructor === Object;
    },
    _isArray(p) {
      return Object.prototype.toString.call(p) === r;
    },
    _isNumber(p) {
      return Object.prototype.toString.call(p) === o && !isNaN(p) && isFinite(p);
    },
    _isString(p) {
      return Object.prototype.toString.call(p) === l;
    },
    _isBoolean(p) {
      return Object.prototype.toString.call(p) === a;
    },
    isObject(p) {
      return p instanceof Object;
    },
    isValidSelector(p) {
      if (typeof p != "string")
        return !1;
      const _ = p[0];
      return _ === "#" || _ === "." || _ === _.toUpperCase();
    },
    _sign(p) {
      return p === 0 || p > 0 ? 1 : -1;
    },
    requestAnimFrame(p) {
      k.push(p), k.length === 1 && w(function() {
        const _ = k;
        k = [], _.forEach(function(T) {
          T();
        });
      });
    },
    createCanvasElement() {
      const p = document.createElement("canvas");
      try {
        p.style = p.style || {};
      } catch {
      }
      return p;
    },
    createImageElement() {
      return document.createElement("img");
    },
    _isInDocument(p) {
      for (; p = p.parentNode; )
        if (p == document)
          return !0;
      return !1;
    },
    _urlToImage(p, _) {
      const T = t.Util.createImageElement();
      T.onload = function() {
        _(T);
      }, T.src = p;
    },
    _rgbToHex(p, _, T) {
      return ((1 << 24) + (p << 16) + (_ << 8) + T).toString(16).slice(1);
    },
    _hexToRgb(p) {
      p = p.replace(g, y);
      const _ = parseInt(p, 16);
      return {
        r: _ >> 16 & 255,
        g: _ >> 8 & 255,
        b: _ & 255
      };
    },
    getRandomColor() {
      let p = (Math.random() * 16777215 << 0).toString(16);
      for (; p.length < 6; )
        p = C + p;
      return g + p;
    },
    getRGB(p) {
      let _;
      return p in E ? (_ = E[p], {
        r: _[0],
        g: _[1],
        b: _[2]
      }) : p[0] === g ? this._hexToRgb(p.substring(1)) : p.substr(0, 4) === v ? (_ = N.exec(p.replace(/ /g, "")), {
        r: parseInt(_[1], 10),
        g: parseInt(_[2], 10),
        b: parseInt(_[3], 10)
      }) : {
        r: 0,
        g: 0,
        b: 0
      };
    },
    colorToRGBA(p) {
      return p = p || "black", t.Util._namedColorToRBA(p) || t.Util._hex3ColorToRGBA(p) || t.Util._hex4ColorToRGBA(p) || t.Util._hex6ColorToRGBA(p) || t.Util._hex8ColorToRGBA(p) || t.Util._rgbColorToRGBA(p) || t.Util._rgbaColorToRGBA(p) || t.Util._hslColorToRGBA(p);
    },
    _namedColorToRBA(p) {
      const _ = E[p.toLowerCase()];
      return _ ? {
        r: _[0],
        g: _[1],
        b: _[2],
        a: 1
      } : null;
    },
    _rgbColorToRGBA(p) {
      if (p.indexOf("rgb(") === 0) {
        p = p.match(/rgb\(([^)]+)\)/)[1];
        const _ = p.split(/ *, */).map(Number);
        return {
          r: _[0],
          g: _[1],
          b: _[2],
          a: 1
        };
      }
    },
    _rgbaColorToRGBA(p) {
      if (p.indexOf("rgba(") === 0) {
        p = p.match(/rgba\(([^)]+)\)/)[1];
        const _ = p.split(/ *, */).map((T, F) => T.slice(-1) === "%" ? F === 3 ? parseInt(T) / 100 : parseInt(T) / 100 * 255 : Number(T));
        return {
          r: _[0],
          g: _[1],
          b: _[2],
          a: _[3]
        };
      }
    },
    _hex8ColorToRGBA(p) {
      if (p[0] === "#" && p.length === 9)
        return {
          r: parseInt(p.slice(1, 3), 16),
          g: parseInt(p.slice(3, 5), 16),
          b: parseInt(p.slice(5, 7), 16),
          a: parseInt(p.slice(7, 9), 16) / 255
        };
    },
    _hex6ColorToRGBA(p) {
      if (p[0] === "#" && p.length === 7)
        return {
          r: parseInt(p.slice(1, 3), 16),
          g: parseInt(p.slice(3, 5), 16),
          b: parseInt(p.slice(5, 7), 16),
          a: 1
        };
    },
    _hex4ColorToRGBA(p) {
      if (p[0] === "#" && p.length === 5)
        return {
          r: parseInt(p[1] + p[1], 16),
          g: parseInt(p[2] + p[2], 16),
          b: parseInt(p[3] + p[3], 16),
          a: parseInt(p[4] + p[4], 16) / 255
        };
    },
    _hex3ColorToRGBA(p) {
      if (p[0] === "#" && p.length === 4)
        return {
          r: parseInt(p[1] + p[1], 16),
          g: parseInt(p[2] + p[2], 16),
          b: parseInt(p[3] + p[3], 16),
          a: 1
        };
    },
    _hslColorToRGBA(p) {
      if (/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.test(p)) {
        const [_, ...T] = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(p), F = Number(T[0]) / 360, L = Number(T[1]) / 100, R = Number(T[2]) / 100;
        let G, M, B;
        if (L === 0)
          return B = R * 255, {
            r: Math.round(B),
            g: Math.round(B),
            b: Math.round(B),
            a: 1
          };
        R < 0.5 ? G = R * (1 + L) : G = R + L - R * L;
        const j = 2 * R - G, I = [0, 0, 0];
        for (let Z = 0; Z < 3; Z++)
          M = F + 1 / 3 * -(Z - 1), M < 0 && M++, M > 1 && M--, 6 * M < 1 ? B = j + (G - j) * 6 * M : 2 * M < 1 ? B = G : 3 * M < 2 ? B = j + (G - j) * (2 / 3 - M) * 6 : B = j, I[Z] = B * 255;
        return {
          r: Math.round(I[0]),
          g: Math.round(I[1]),
          b: Math.round(I[2]),
          a: 1
        };
      }
    },
    haveIntersection(p, _) {
      return !(_.x > p.x + p.width || _.x + _.width < p.x || _.y > p.y + p.height || _.y + _.height < p.y);
    },
    cloneObject(p) {
      const _ = {};
      for (const T in p)
        this._isPlainObject(p[T]) ? _[T] = this.cloneObject(p[T]) : this._isArray(p[T]) ? _[T] = this.cloneArray(p[T]) : _[T] = p[T];
      return _;
    },
    cloneArray(p) {
      return p.slice(0);
    },
    degToRad(p) {
      return p * c;
    },
    radToDeg(p) {
      return p * f;
    },
    _degToRad(p) {
      return t.Util.warn("Util._degToRad is removed. Please use public Util.degToRad instead."), t.Util.degToRad(p);
    },
    _radToDeg(p) {
      return t.Util.warn("Util._radToDeg is removed. Please use public Util.radToDeg instead."), t.Util.radToDeg(p);
    },
    _getRotation(p) {
      return e.Konva.angleDeg ? t.Util.radToDeg(p) : p;
    },
    _capitalize(p) {
      return p.charAt(0).toUpperCase() + p.slice(1);
    },
    throw(p) {
      throw new Error(x + p);
    },
    error(p) {
      console.error(x + p);
    },
    warn(p) {
      e.Konva.showWarnings && console.warn(S + p);
    },
    each(p, _) {
      for (const T in p)
        _(T, p[T]);
    },
    _inRange(p, _, T) {
      return _ <= p && p < T;
    },
    _getProjectionToSegment(p, _, T, F, L, R) {
      let G, M, B;
      const j = (p - T) * (p - T) + (_ - F) * (_ - F);
      if (j == 0)
        G = p, M = _, B = (L - T) * (L - T) + (R - F) * (R - F);
      else {
        const I = ((L - p) * (T - p) + (R - _) * (F - _)) / j;
        I < 0 ? (G = p, M = _, B = (p - L) * (p - L) + (_ - R) * (_ - R)) : I > 1 ? (G = T, M = F, B = (T - L) * (T - L) + (F - R) * (F - R)) : (G = p + I * (T - p), M = _ + I * (F - _), B = (G - L) * (G - L) + (M - R) * (M - R));
      }
      return [G, M, B];
    },
    _getProjectionToLine(p, _, T) {
      const F = t.Util.cloneObject(p);
      let L = Number.MAX_VALUE;
      return _.forEach(function(R, G) {
        if (!T && G === _.length - 1)
          return;
        const M = _[(G + 1) % _.length], B = t.Util._getProjectionToSegment(R.x, R.y, M.x, M.y, p.x, p.y), j = B[0], I = B[1], Z = B[2];
        Z < L && (F.x = j, F.y = I, L = Z);
      }), F;
    },
    _prepareArrayForTween(p, _, T) {
      const F = [], L = [];
      if (p.length > _.length) {
        const G = _;
        _ = p, p = G;
      }
      for (let G = 0; G < p.length; G += 2)
        F.push({
          x: p[G],
          y: p[G + 1]
        });
      for (let G = 0; G < _.length; G += 2)
        L.push({
          x: _[G],
          y: _[G + 1]
        });
      const R = [];
      return L.forEach(function(G) {
        const M = t.Util._getProjectionToLine(G, F, T);
        R.push(M.x), R.push(M.y);
      }), R;
    },
    _prepareToStringify(p) {
      let _;
      p.visitedByCircularReferenceRemoval = !0;
      for (const T in p)
        if (p.hasOwnProperty(T) && p[T] && typeof p[T] == "object") {
          if (_ = Object.getOwnPropertyDescriptor(p, T), p[T].visitedByCircularReferenceRemoval || t.Util._isElement(p[T]))
            if (_.configurable)
              delete p[T];
            else
              return null;
          else if (t.Util._prepareToStringify(p[T]) === null)
            if (_.configurable)
              delete p[T];
            else
              return null;
        }
      return delete p.visitedByCircularReferenceRemoval, p;
    },
    _assign(p, _) {
      for (const T in _)
        p[T] = _[T];
      return p;
    },
    _getFirstPointerId(p) {
      return p.touches ? p.changedTouches[0].identifier : p.pointerId || 999;
    },
    releaseCanvas(...p) {
      e.Konva.releaseCanvasOnDestroy && p.forEach((_) => {
        _.width = 0, _.height = 0;
      });
    },
    drawRoundedRectPath(p, _, T, F) {
      let L = 0, R = 0, G = 0, M = 0;
      typeof F == "number" ? L = R = G = M = Math.min(F, _ / 2, T / 2) : (L = Math.min(F[0] || 0, _ / 2, T / 2), R = Math.min(F[1] || 0, _ / 2, T / 2), M = Math.min(F[2] || 0, _ / 2, T / 2), G = Math.min(F[3] || 0, _ / 2, T / 2)), p.moveTo(L, 0), p.lineTo(_ - R, 0), p.arc(_ - R, R, R, Math.PI * 3 / 2, 0, !1), p.lineTo(_, T - M), p.arc(_ - M, T - M, M, 0, Math.PI / 2, !1), p.lineTo(G, T), p.arc(G, T - G, G, Math.PI / 2, Math.PI, !1), p.lineTo(0, L), p.arc(L, L, L, Math.PI, Math.PI * 3 / 2, !1);
    }
  };
})(rt);
var Ze = {}, Kn = {}, Er = {};
Object.defineProperty(Er, "__esModule", { value: !0 });
Er.HitContext = Er.SceneContext = Er.Context = void 0;
const k4 = rt, b6 = Se;
function e8(t) {
  const e = [], n = t.length, r = k4.Util;
  for (let o = 0; o < n; o++) {
    let l = t[o];
    r._isNumber(l) ? l = Math.round(l * 1e3) / 1e3 : r._isString(l) || (l = l + ""), e.push(l);
  }
  return e;
}
const _2 = ",", t8 = "(", n8 = ")", r8 = "([", i8 = "])", s8 = ";", o8 = "()", l8 = "=", S2 = [
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
], a8 = [
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
], u8 = 100;
class cc {
  constructor(e) {
    this.canvas = e, b6.Konva.enableTrace && (this.traceArr = [], this._enableTrace());
  }
  fillShape(e) {
    e.fillEnabled() && this._fill(e);
  }
  _fill(e) {
  }
  strokeShape(e) {
    e.hasStroke() && this._stroke(e);
  }
  _stroke(e) {
  }
  fillStrokeShape(e) {
    e.attrs.fillAfterStrokeEnabled ? (this.strokeShape(e), this.fillShape(e)) : (this.fillShape(e), this.strokeShape(e));
  }
  getTrace(e, n) {
    let r = this.traceArr, o = r.length, l = "", a, c, f, g;
    for (a = 0; a < o; a++)
      c = r[a], f = c.method, f ? (g = c.args, l += f, e ? l += o8 : k4.Util._isArray(g[0]) ? l += r8 + g.join(_2) + i8 : (n && (g = g.map((y) => typeof y == "number" ? Math.floor(y) : y)), l += t8 + g.join(_2) + n8)) : (l += c.property, e || (l += l8 + c.val)), l += s8;
    return l;
  }
  clearTrace() {
    this.traceArr = [];
  }
  _trace(e) {
    let n = this.traceArr, r;
    n.push(e), r = n.length, r >= u8 && n.shift();
  }
  reset() {
    const e = this.getCanvas().getPixelRatio();
    this.setTransform(1 * e, 0, 0, 1 * e, 0, 0);
  }
  getCanvas() {
    return this.canvas;
  }
  clear(e) {
    const n = this.getCanvas();
    e ? this.clearRect(e.x || 0, e.y || 0, e.width || 0, e.height || 0) : this.clearRect(0, 0, n.getWidth() / n.pixelRatio, n.getHeight() / n.pixelRatio);
  }
  _applyLineCap(e) {
    const n = e.attrs.lineCap;
    n && this.setAttr("lineCap", n);
  }
  _applyOpacity(e) {
    const n = e.getAbsoluteOpacity();
    n !== 1 && this.setAttr("globalAlpha", n);
  }
  _applyLineJoin(e) {
    const n = e.attrs.lineJoin;
    n && this.setAttr("lineJoin", n);
  }
  setAttr(e, n) {
    this._context[e] = n;
  }
  arc(e, n, r, o, l, a) {
    this._context.arc(e, n, r, o, l, a);
  }
  arcTo(e, n, r, o, l) {
    this._context.arcTo(e, n, r, o, l);
  }
  beginPath() {
    this._context.beginPath();
  }
  bezierCurveTo(e, n, r, o, l, a) {
    this._context.bezierCurveTo(e, n, r, o, l, a);
  }
  clearRect(e, n, r, o) {
    this._context.clearRect(e, n, r, o);
  }
  clip(...e) {
    this._context.clip.apply(this._context, e);
  }
  closePath() {
    this._context.closePath();
  }
  createImageData(e, n) {
    const r = arguments;
    if (r.length === 2)
      return this._context.createImageData(e, n);
    if (r.length === 1)
      return this._context.createImageData(e);
  }
  createLinearGradient(e, n, r, o) {
    return this._context.createLinearGradient(e, n, r, o);
  }
  createPattern(e, n) {
    return this._context.createPattern(e, n);
  }
  createRadialGradient(e, n, r, o, l, a) {
    return this._context.createRadialGradient(e, n, r, o, l, a);
  }
  drawImage(e, n, r, o, l, a, c, f, g) {
    const y = arguments, C = this._context;
    y.length === 3 ? C.drawImage(e, n, r) : y.length === 5 ? C.drawImage(e, n, r, o, l) : y.length === 9 && C.drawImage(e, n, r, o, l, a, c, f, g);
  }
  ellipse(e, n, r, o, l, a, c, f) {
    this._context.ellipse(e, n, r, o, l, a, c, f);
  }
  isPointInPath(e, n, r, o) {
    return r ? this._context.isPointInPath(r, e, n, o) : this._context.isPointInPath(e, n, o);
  }
  fill(...e) {
    this._context.fill.apply(this._context, e);
  }
  fillRect(e, n, r, o) {
    this._context.fillRect(e, n, r, o);
  }
  strokeRect(e, n, r, o) {
    this._context.strokeRect(e, n, r, o);
  }
  fillText(e, n, r, o) {
    o ? this._context.fillText(e, n, r, o) : this._context.fillText(e, n, r);
  }
  measureText(e) {
    return this._context.measureText(e);
  }
  getImageData(e, n, r, o) {
    return this._context.getImageData(e, n, r, o);
  }
  lineTo(e, n) {
    this._context.lineTo(e, n);
  }
  moveTo(e, n) {
    this._context.moveTo(e, n);
  }
  rect(e, n, r, o) {
    this._context.rect(e, n, r, o);
  }
  roundRect(e, n, r, o, l) {
    this._context.roundRect(e, n, r, o, l);
  }
  putImageData(e, n, r) {
    this._context.putImageData(e, n, r);
  }
  quadraticCurveTo(e, n, r, o) {
    this._context.quadraticCurveTo(e, n, r, o);
  }
  restore() {
    this._context.restore();
  }
  rotate(e) {
    this._context.rotate(e);
  }
  save() {
    this._context.save();
  }
  scale(e, n) {
    this._context.scale(e, n);
  }
  setLineDash(e) {
    this._context.setLineDash ? this._context.setLineDash(e) : "mozDash" in this._context ? this._context.mozDash = e : "webkitLineDash" in this._context && (this._context.webkitLineDash = e);
  }
  getLineDash() {
    return this._context.getLineDash();
  }
  setTransform(e, n, r, o, l, a) {
    this._context.setTransform(e, n, r, o, l, a);
  }
  stroke(e) {
    e ? this._context.stroke(e) : this._context.stroke();
  }
  strokeText(e, n, r, o) {
    this._context.strokeText(e, n, r, o);
  }
  transform(e, n, r, o, l, a) {
    this._context.transform(e, n, r, o, l, a);
  }
  translate(e, n) {
    this._context.translate(e, n);
  }
  _enableTrace() {
    let e = this, n = S2.length, r = this.setAttr, o, l;
    const a = function(c) {
      let f = e[c], g;
      e[c] = function() {
        return l = e8(Array.prototype.slice.call(arguments, 0)), g = f.apply(e, arguments), e._trace({
          method: c,
          args: l
        }), g;
      };
    };
    for (o = 0; o < n; o++)
      a(S2[o]);
    e.setAttr = function() {
      r.apply(e, arguments);
      const c = arguments[0];
      let f = arguments[1];
      (c === "shadowOffsetX" || c === "shadowOffsetY" || c === "shadowBlur") && (f = f / this.canvas.getPixelRatio()), e._trace({
        property: c,
        val: f
      });
    };
  }
  _applyGlobalCompositeOperation(e) {
    const n = e.attrs.globalCompositeOperation;
    !n || n === "source-over" || this.setAttr("globalCompositeOperation", n);
  }
}
Er.Context = cc;
a8.forEach(function(t) {
  Object.defineProperty(cc.prototype, t, {
    get() {
      return this._context[t];
    },
    set(e) {
      this._context[t] = e;
    }
  });
});
class c8 extends cc {
  constructor(e, { willReadFrequently: n = !1 } = {}) {
    super(e), this._context = e._canvas.getContext("2d", {
      willReadFrequently: n
    });
  }
  _fillColor(e) {
    const n = e.fill();
    this.setAttr("fillStyle", n), e._fillFunc(this);
  }
  _fillPattern(e) {
    this.setAttr("fillStyle", e._getFillPattern()), e._fillFunc(this);
  }
  _fillLinearGradient(e) {
    const n = e._getLinearGradient();
    n && (this.setAttr("fillStyle", n), e._fillFunc(this));
  }
  _fillRadialGradient(e) {
    const n = e._getRadialGradient();
    n && (this.setAttr("fillStyle", n), e._fillFunc(this));
  }
  _fill(e) {
    const n = e.fill(), r = e.getFillPriority();
    if (n && r === "color") {
      this._fillColor(e);
      return;
    }
    const o = e.getFillPatternImage();
    if (o && r === "pattern") {
      this._fillPattern(e);
      return;
    }
    const l = e.getFillLinearGradientColorStops();
    if (l && r === "linear-gradient") {
      this._fillLinearGradient(e);
      return;
    }
    const a = e.getFillRadialGradientColorStops();
    if (a && r === "radial-gradient") {
      this._fillRadialGradient(e);
      return;
    }
    n ? this._fillColor(e) : o ? this._fillPattern(e) : l ? this._fillLinearGradient(e) : a && this._fillRadialGradient(e);
  }
  _strokeLinearGradient(e) {
    const n = e.getStrokeLinearGradientStartPoint(), r = e.getStrokeLinearGradientEndPoint(), o = e.getStrokeLinearGradientColorStops(), l = this.createLinearGradient(n.x, n.y, r.x, r.y);
    if (o) {
      for (let a = 0; a < o.length; a += 2)
        l.addColorStop(o[a], o[a + 1]);
      this.setAttr("strokeStyle", l);
    }
  }
  _stroke(e) {
    const n = e.dash(), r = e.getStrokeScaleEnabled();
    if (e.hasStroke()) {
      if (!r) {
        this.save();
        const l = this.getCanvas().getPixelRatio();
        this.setTransform(l, 0, 0, l, 0, 0);
      }
      this._applyLineCap(e), n && e.dashEnabled() && (this.setLineDash(n), this.setAttr("lineDashOffset", e.dashOffset())), this.setAttr("lineWidth", e.strokeWidth()), e.getShadowForStrokeEnabled() || this.setAttr("shadowColor", "rgba(0,0,0,0)"), e.getStrokeLinearGradientColorStops() ? this._strokeLinearGradient(e) : this.setAttr("strokeStyle", e.stroke()), e._strokeFunc(this), r || this.restore();
    }
  }
  _applyShadow(e) {
    var n, r, o;
    const l = (n = e.getShadowRGBA()) !== null && n !== void 0 ? n : "black", a = (r = e.getShadowBlur()) !== null && r !== void 0 ? r : 5, c = (o = e.getShadowOffset()) !== null && o !== void 0 ? o : {
      x: 0,
      y: 0
    }, f = e.getAbsoluteScale(), g = this.canvas.getPixelRatio(), y = f.x * g, C = f.y * g;
    this.setAttr("shadowColor", l), this.setAttr("shadowBlur", a * Math.min(Math.abs(y), Math.abs(C))), this.setAttr("shadowOffsetX", c.x * y), this.setAttr("shadowOffsetY", c.y * C);
  }
}
Er.SceneContext = c8;
class d8 extends cc {
  constructor(e) {
    super(e), this._context = e._canvas.getContext("2d", {
      willReadFrequently: !0
    });
  }
  _fill(e) {
    this.save(), this.setAttr("fillStyle", e.colorKey), e._fillFuncHit(this), this.restore();
  }
  strokeShape(e) {
    e.hasHitStroke() && this._stroke(e);
  }
  _stroke(e) {
    if (e.hasHitStroke()) {
      const n = e.getStrokeScaleEnabled();
      if (!n) {
        this.save();
        const l = this.getCanvas().getPixelRatio();
        this.setTransform(l, 0, 0, l, 0, 0);
      }
      this._applyLineCap(e);
      const r = e.hitStrokeWidth(), o = r === "auto" ? e.strokeWidth() : r;
      this.setAttr("lineWidth", o), this.setAttr("strokeStyle", e.colorKey), e._strokeFuncHit(this), n || this.restore();
    }
  }
}
Er.HitContext = d8;
Object.defineProperty(Kn, "__esModule", { value: !0 });
Kn.HitCanvas = Kn.SceneCanvas = Kn.Canvas = void 0;
const Hu = rt, E4 = Er, P4 = Se;
let qa;
function f8() {
  if (qa)
    return qa;
  const t = Hu.Util.createCanvasElement(), e = t.getContext("2d");
  return qa = function() {
    const n = P4.Konva._global.devicePixelRatio || 1, r = e.webkitBackingStorePixelRatio || e.mozBackingStorePixelRatio || e.msBackingStorePixelRatio || e.oBackingStorePixelRatio || e.backingStorePixelRatio || 1;
    return n / r;
  }(), Hu.Util.releaseCanvas(t), qa;
}
class o1 {
  constructor(e) {
    this.pixelRatio = 1, this.width = 0, this.height = 0, this.isCache = !1;
    const r = (e || {}).pixelRatio || P4.Konva.pixelRatio || f8();
    this.pixelRatio = r, this._canvas = Hu.Util.createCanvasElement(), this._canvas.style.padding = "0", this._canvas.style.margin = "0", this._canvas.style.border = "0", this._canvas.style.background = "transparent", this._canvas.style.position = "absolute", this._canvas.style.top = "0", this._canvas.style.left = "0";
  }
  getContext() {
    return this.context;
  }
  getPixelRatio() {
    return this.pixelRatio;
  }
  setPixelRatio(e) {
    const n = this.pixelRatio;
    this.pixelRatio = e, this.setSize(this.getWidth() / n, this.getHeight() / n);
  }
  setWidth(e) {
    this.width = this._canvas.width = e * this.pixelRatio, this._canvas.style.width = e + "px";
    const n = this.pixelRatio;
    this.getContext()._context.scale(n, n);
  }
  setHeight(e) {
    this.height = this._canvas.height = e * this.pixelRatio, this._canvas.style.height = e + "px";
    const n = this.pixelRatio;
    this.getContext()._context.scale(n, n);
  }
  getWidth() {
    return this.width;
  }
  getHeight() {
    return this.height;
  }
  setSize(e, n) {
    this.setWidth(e || 0), this.setHeight(n || 0);
  }
  toDataURL(e, n) {
    try {
      return this._canvas.toDataURL(e, n);
    } catch {
      try {
        return this._canvas.toDataURL();
      } catch (o) {
        return Hu.Util.error("Unable to get data URL. " + o.message + " For more info read https://konvajs.org/docs/posts/Tainted_Canvas.html."), "";
      }
    }
  }
}
Kn.Canvas = o1;
class h8 extends o1 {
  constructor(e = { width: 0, height: 0, willReadFrequently: !1 }) {
    super(e), this.context = new E4.SceneContext(this, {
      willReadFrequently: e.willReadFrequently
    }), this.setSize(e.width, e.height);
  }
}
Kn.SceneCanvas = h8;
class p8 extends o1 {
  constructor(e = { width: 0, height: 0 }) {
    super(e), this.hitCanvas = !0, this.context = new E4.HitContext(this), this.setSize(e.width, e.height);
  }
}
Kn.HitCanvas = p8;
var dc = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.DD = void 0;
  const e = Se, n = rt;
  t.DD = {
    get isDragging() {
      let r = !1;
      return t.DD._dragElements.forEach((o) => {
        o.dragStatus === "dragging" && (r = !0);
      }), r;
    },
    justDragged: !1,
    get node() {
      let r;
      return t.DD._dragElements.forEach((o) => {
        r = o.node;
      }), r;
    },
    _dragElements: /* @__PURE__ */ new Map(),
    _drag(r) {
      const o = [];
      t.DD._dragElements.forEach((l, a) => {
        const { node: c } = l, f = c.getStage();
        f.setPointersPositions(r), l.pointerId === void 0 && (l.pointerId = n.Util._getFirstPointerId(r));
        const g = f._changedPointerPositions.find((y) => y.id === l.pointerId);
        if (g) {
          if (l.dragStatus !== "dragging") {
            const y = c.dragDistance();
            if (Math.max(Math.abs(g.x - l.startPointerPos.x), Math.abs(g.y - l.startPointerPos.y)) < y || (c.startDrag({ evt: r }), !c.isDragging()))
              return;
          }
          c._setDragPosition(r, l), o.push(c);
        }
      }), o.forEach((l) => {
        l.fire("dragmove", {
          type: "dragmove",
          target: l,
          evt: r
        }, !0);
      });
    },
    _endDragBefore(r) {
      const o = [];
      t.DD._dragElements.forEach((l) => {
        const { node: a } = l, c = a.getStage();
        if (r && c.setPointersPositions(r), !c._changedPointerPositions.find((y) => y.id === l.pointerId))
          return;
        (l.dragStatus === "dragging" || l.dragStatus === "stopped") && (t.DD.justDragged = !0, e.Konva._mouseListenClick = !1, e.Konva._touchListenClick = !1, e.Konva._pointerListenClick = !1, l.dragStatus = "stopped");
        const g = l.node.getLayer() || l.node instanceof e.Konva.Stage && l.node;
        g && o.indexOf(g) === -1 && o.push(g);
      }), o.forEach((l) => {
        l.draw();
      });
    },
    _endDragAfter(r) {
      t.DD._dragElements.forEach((o, l) => {
        o.dragStatus === "stopped" && o.node.fire("dragend", {
          type: "dragend",
          target: o.node,
          evt: r
        }, !0), o.dragStatus !== "dragging" && t.DD._dragElements.delete(l);
      });
    }
  }, e.Konva.isBrowser && (window.addEventListener("mouseup", t.DD._endDragBefore, !0), window.addEventListener("touchend", t.DD._endDragBefore, !0), window.addEventListener("touchcancel", t.DD._endDragBefore, !0), window.addEventListener("mousemove", t.DD._drag), window.addEventListener("touchmove", t.DD._drag), window.addEventListener("mouseup", t.DD._endDragAfter, !1), window.addEventListener("touchend", t.DD._endDragAfter, !1), window.addEventListener("touchcancel", t.DD._endDragAfter, !1));
})(dc);
var xe = {}, fe = {};
Object.defineProperty(fe, "__esModule", { value: !0 });
fe.RGBComponent = g8;
fe.alphaComponent = m8;
fe.getNumberValidator = y8;
fe.getNumberOrArrayOfNumbersValidator = v8;
fe.getNumberOrAutoValidator = _8;
fe.getStringValidator = S8;
fe.getStringOrGradientValidator = w8;
fe.getFunctionValidator = x8;
fe.getNumberArrayValidator = C8;
fe.getBooleanValidator = k8;
fe.getComponentValidator = E8;
const Mr = Se, st = rt;
function Lr(t) {
  return st.Util._isString(t) ? '"' + t + '"' : Object.prototype.toString.call(t) === "[object Number]" || st.Util._isBoolean(t) ? t : Object.prototype.toString.call(t);
}
function g8(t) {
  return t > 255 ? 255 : t < 0 ? 0 : Math.round(t);
}
function m8(t) {
  return t > 1 ? 1 : t < 1e-4 ? 1e-4 : t;
}
function y8() {
  if (Mr.Konva.isUnminified)
    return function(t, e) {
      return st.Util._isNumber(t) || st.Util.warn(Lr(t) + ' is a not valid value for "' + e + '" attribute. The value should be a number.'), t;
    };
}
function v8(t) {
  if (Mr.Konva.isUnminified)
    return function(e, n) {
      let r = st.Util._isNumber(e), o = st.Util._isArray(e) && e.length == t;
      return !r && !o && st.Util.warn(Lr(e) + ' is a not valid value for "' + n + '" attribute. The value should be a number or Array<number>(' + t + ")"), e;
    };
}
function _8() {
  if (Mr.Konva.isUnminified)
    return function(t, e) {
      return st.Util._isNumber(t) || t === "auto" || st.Util.warn(Lr(t) + ' is a not valid value for "' + e + '" attribute. The value should be a number or "auto".'), t;
    };
}
function S8() {
  if (Mr.Konva.isUnminified)
    return function(t, e) {
      return st.Util._isString(t) || st.Util.warn(Lr(t) + ' is a not valid value for "' + e + '" attribute. The value should be a string.'), t;
    };
}
function w8() {
  if (Mr.Konva.isUnminified)
    return function(t, e) {
      const n = st.Util._isString(t), r = Object.prototype.toString.call(t) === "[object CanvasGradient]" || t && t.addColorStop;
      return n || r || st.Util.warn(Lr(t) + ' is a not valid value for "' + e + '" attribute. The value should be a string or a native gradient.'), t;
    };
}
function x8() {
  if (Mr.Konva.isUnminified)
    return function(t, e) {
      return st.Util._isFunction(t) || st.Util.warn(Lr(t) + ' is a not valid value for "' + e + '" attribute. The value should be a function.'), t;
    };
}
function C8() {
  if (Mr.Konva.isUnminified)
    return function(t, e) {
      const n = Int8Array ? Object.getPrototypeOf(Int8Array) : null;
      return n && t instanceof n || (st.Util._isArray(t) ? t.forEach(function(r) {
        st.Util._isNumber(r) || st.Util.warn('"' + e + '" attribute has non numeric element ' + r + ". Make sure that all elements are numbers.");
      }) : st.Util.warn(Lr(t) + ' is a not valid value for "' + e + '" attribute. The value should be a array of numbers.')), t;
    };
}
function k8() {
  if (Mr.Konva.isUnminified)
    return function(t, e) {
      return t === !0 || t === !1 || st.Util.warn(Lr(t) + ' is a not valid value for "' + e + '" attribute. The value should be a boolean.'), t;
    };
}
function E8(t) {
  if (Mr.Konva.isUnminified)
    return function(e, n) {
      return e == null || st.Util.isObject(e) || st.Util.warn(Lr(e) + ' is a not valid value for "' + n + '" attribute. The value should be an object with properties ' + t), e;
    };
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.Factory = void 0;
  const e = rt, n = fe, r = "get", o = "set";
  t.Factory = {
    addGetterSetter(l, a, c, f, g) {
      t.Factory.addGetter(l, a, c), t.Factory.addSetter(l, a, f, g), t.Factory.addOverloadedGetterSetter(l, a);
    },
    addGetter(l, a, c) {
      const f = r + e.Util._capitalize(a);
      l.prototype[f] = l.prototype[f] || function() {
        const g = this.attrs[a];
        return g === void 0 ? c : g;
      };
    },
    addSetter(l, a, c, f) {
      const g = o + e.Util._capitalize(a);
      l.prototype[g] || t.Factory.overWriteSetter(l, a, c, f);
    },
    overWriteSetter(l, a, c, f) {
      const g = o + e.Util._capitalize(a);
      l.prototype[g] = function(y) {
        return c && y !== void 0 && y !== null && (y = c.call(this, y, a)), this._setAttr(a, y), f && f.call(this), this;
      };
    },
    addComponentsGetterSetter(l, a, c, f, g) {
      const y = c.length, C = e.Util._capitalize, S = r + C(a), x = o + C(a);
      l.prototype[S] = function() {
        const E = {};
        for (let N = 0; N < y; N++) {
          const k = c[N];
          E[k] = this.getAttr(a + C(k));
        }
        return E;
      };
      const v = (0, n.getComponentValidator)(c);
      l.prototype[x] = function(E) {
        const N = this.attrs[a];
        f && (E = f.call(this, E, a)), v && v.call(this, E, a);
        for (const k in E)
          E.hasOwnProperty(k) && this._setAttr(a + C(k), E[k]);
        return E || c.forEach((k) => {
          this._setAttr(a + C(k), void 0);
        }), this._fireChangeEvent(a, N, E), g && g.call(this), this;
      }, t.Factory.addOverloadedGetterSetter(l, a);
    },
    addOverloadedGetterSetter(l, a) {
      const c = e.Util._capitalize(a), f = o + c, g = r + c;
      l.prototype[a] = function() {
        return arguments.length ? (this[f](arguments[0]), this) : this[g]();
      };
    },
    addDeprecatedGetterSetter(l, a, c, f) {
      e.Util.error("Adding deprecated " + a);
      const g = r + e.Util._capitalize(a), y = a + " property is deprecated and will be removed soon. Look at Konva change log for more information.";
      l.prototype[g] = function() {
        e.Util.error(y);
        const C = this.attrs[a];
        return C === void 0 ? c : C;
      }, t.Factory.addSetter(l, a, f, function() {
        e.Util.error(y);
      }), t.Factory.addOverloadedGetterSetter(l, a);
    },
    backCompat(l, a) {
      e.Util.each(a, function(c, f) {
        const g = l.prototype[f], y = r + e.Util._capitalize(c), C = o + e.Util._capitalize(c);
        function S() {
          g.apply(this, arguments), e.Util.error('"' + c + '" method is deprecated and will be removed soon. Use ""' + f + '" instead.');
        }
        l.prototype[c] = S, l.prototype[y] = S, l.prototype[C] = S;
      });
    },
    afterSetFilter() {
      this._filterUpToDate = !1;
    }
  };
})(xe);
Object.defineProperty(Ze, "__esModule", { value: !0 });
Ze.Node = void 0;
const Es = Kn, kn = dc, Ol = xe, Yr = Se, ke = rt, ut = fe, gu = "absoluteOpacity", Za = "allEventListeners", _r = "absoluteTransform", w2 = "absoluteScale", Di = "canvas", P8 = "Change", T8 = "children", N8 = "konva", t0 = "listening", R8 = "mouseenter", F8 = "mouseleave", M8 = "pointerenter", L8 = "pointerleave", A8 = "touchenter", O8 = "touchleave", x2 = "set", C2 = "Shape", mu = " ", k2 = "stage", Xr = "transform", D8 = "Stage", n0 = "visible", I8 = [
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
].join(mu);
let z8 = 1;
class he {
  constructor(e) {
    this._id = z8++, this.eventListeners = {}, this.attrs = {}, this.index = 0, this._allEventListeners = null, this.parent = null, this._cache = /* @__PURE__ */ new Map(), this._attachedDepsListeners = /* @__PURE__ */ new Map(), this._lastPos = null, this._batchingTransformChange = !1, this._needClearTransformCache = !1, this._filterUpToDate = !1, this._isUnderCache = !1, this._dragEventId = null, this._shouldFireChangeEvents = !1, this.setAttrs(e), this._shouldFireChangeEvents = !0;
  }
  hasChildren() {
    return !1;
  }
  _clearCache(e) {
    (e === Xr || e === _r) && this._cache.get(e) ? this._cache.get(e).dirty = !0 : e ? this._cache.delete(e) : this._cache.clear();
  }
  _getCache(e, n) {
    let r = this._cache.get(e);
    return (r === void 0 || (e === Xr || e === _r) && r.dirty === !0) && (r = n.call(this), this._cache.set(e, r)), r;
  }
  _calculate(e, n, r) {
    if (!this._attachedDepsListeners.get(e)) {
      const o = n.map((l) => l + "Change.konva").join(mu);
      this.on(o, () => {
        this._clearCache(e);
      }), this._attachedDepsListeners.set(e, !0);
    }
    return this._getCache(e, r);
  }
  _getCanvasCache() {
    return this._cache.get(Di);
  }
  _clearSelfAndDescendantCache(e) {
    this._clearCache(e), e === _r && this.fire("absoluteTransformChange");
  }
  clearCache() {
    if (this._cache.has(Di)) {
      const { scene: e, filter: n, hit: r, buffer: o } = this._cache.get(Di);
      ke.Util.releaseCanvas(e, n, r, o), this._cache.delete(Di);
    }
    return this._clearSelfAndDescendantCache(), this._requestDraw(), this;
  }
  cache(e) {
    const n = e || {};
    let r = {};
    (n.x === void 0 || n.y === void 0 || n.width === void 0 || n.height === void 0) && (r = this.getClientRect({
      skipTransform: !0,
      relativeTo: this.getParent() || void 0
    }));
    let o = Math.ceil(n.width || r.width), l = Math.ceil(n.height || r.height), a = n.pixelRatio, c = n.x === void 0 ? Math.floor(r.x) : n.x, f = n.y === void 0 ? Math.floor(r.y) : n.y, g = n.offset || 0, y = n.drawBorder || !1, C = n.hitCanvasPixelRatio || 1;
    if (!o || !l) {
      ke.Util.error("Can not cache the node. Width or height of the node equals 0. Caching is skipped.");
      return;
    }
    const S = Math.abs(Math.round(r.x) - c) > 0.5 ? 1 : 0, x = Math.abs(Math.round(r.y) - f) > 0.5 ? 1 : 0;
    o += g * 2 + S, l += g * 2 + x, c -= g, f -= g;
    const v = new Es.SceneCanvas({
      pixelRatio: a,
      width: o,
      height: l
    }), E = new Es.SceneCanvas({
      pixelRatio: a,
      width: 0,
      height: 0,
      willReadFrequently: !0
    }), N = new Es.HitCanvas({
      pixelRatio: C,
      width: o,
      height: l
    }), k = v.getContext(), w = N.getContext(), p = new Es.SceneCanvas({
      width: v.width / v.pixelRatio + Math.abs(c),
      height: v.height / v.pixelRatio + Math.abs(f),
      pixelRatio: v.pixelRatio
    }), _ = p.getContext();
    return N.isCache = !0, v.isCache = !0, this._cache.delete(Di), this._filterUpToDate = !1, n.imageSmoothingEnabled === !1 && (v.getContext()._context.imageSmoothingEnabled = !1, E.getContext()._context.imageSmoothingEnabled = !1), k.save(), w.save(), _.save(), k.translate(-c, -f), w.translate(-c, -f), _.translate(-c, -f), p.x = c, p.y = f, this._isUnderCache = !0, this._clearSelfAndDescendantCache(gu), this._clearSelfAndDescendantCache(w2), this.drawScene(v, this, p), this.drawHit(N, this), this._isUnderCache = !1, k.restore(), w.restore(), y && (k.save(), k.beginPath(), k.rect(0, 0, o, l), k.closePath(), k.setAttr("strokeStyle", "red"), k.setAttr("lineWidth", 5), k.stroke(), k.restore()), this._cache.set(Di, {
      scene: v,
      filter: E,
      hit: N,
      buffer: p,
      x: c,
      y: f
    }), this._requestDraw(), this;
  }
  isCached() {
    return this._cache.has(Di);
  }
  getClientRect(e) {
    throw new Error('abstract "getClientRect" method call');
  }
  _transformedRect(e, n) {
    const r = [
      { x: e.x, y: e.y },
      { x: e.x + e.width, y: e.y },
      { x: e.x + e.width, y: e.y + e.height },
      { x: e.x, y: e.y + e.height }
    ];
    let o = 1 / 0, l = 1 / 0, a = -1 / 0, c = -1 / 0;
    const f = this.getAbsoluteTransform(n);
    return r.forEach(function(g) {
      const y = f.point(g);
      o === void 0 && (o = a = y.x, l = c = y.y), o = Math.min(o, y.x), l = Math.min(l, y.y), a = Math.max(a, y.x), c = Math.max(c, y.y);
    }), {
      x: o,
      y: l,
      width: a - o,
      height: c - l
    };
  }
  _drawCachedSceneCanvas(e) {
    e.save(), e._applyOpacity(this), e._applyGlobalCompositeOperation(this);
    const n = this._getCanvasCache();
    e.translate(n.x, n.y);
    const r = this._getCachedSceneCanvas(), o = r.pixelRatio;
    e.drawImage(r._canvas, 0, 0, r.width / o, r.height / o), e.restore();
  }
  _drawCachedHitCanvas(e) {
    const n = this._getCanvasCache(), r = n.hit;
    e.save(), e.translate(n.x, n.y), e.drawImage(r._canvas, 0, 0, r.width / r.pixelRatio, r.height / r.pixelRatio), e.restore();
  }
  _getCachedSceneCanvas() {
    let e = this.filters(), n = this._getCanvasCache(), r = n.scene, o = n.filter, l = o.getContext(), a, c, f, g;
    if (e) {
      if (!this._filterUpToDate) {
        const y = r.pixelRatio;
        o.setSize(r.width / r.pixelRatio, r.height / r.pixelRatio);
        try {
          for (a = e.length, l.clear(), l.drawImage(r._canvas, 0, 0, r.getWidth() / y, r.getHeight() / y), c = l.getImageData(0, 0, o.getWidth(), o.getHeight()), f = 0; f < a; f++) {
            if (g = e[f], typeof g != "function") {
              ke.Util.error("Filter should be type of function, but got " + typeof g + " instead. Please check correct filters");
              continue;
            }
            g.call(this, c), l.putImageData(c, 0, 0);
          }
        } catch (C) {
          ke.Util.error("Unable to apply filter. " + C.message + " This post my help you https://konvajs.org/docs/posts/Tainted_Canvas.html.");
        }
        this._filterUpToDate = !0;
      }
      return o;
    }
    return r;
  }
  on(e, n) {
    if (this._cache && this._cache.delete(Za), arguments.length === 3)
      return this._delegate.apply(this, arguments);
    const r = e.split(mu);
    for (let o = 0; o < r.length; o++) {
      const a = r[o].split("."), c = a[0], f = a[1] || "";
      this.eventListeners[c] || (this.eventListeners[c] = []), this.eventListeners[c].push({ name: f, handler: n });
    }
    return this;
  }
  off(e, n) {
    let r = (e || "").split(mu), o = r.length, l, a, c, f, g, y;
    if (this._cache && this._cache.delete(Za), !e)
      for (a in this.eventListeners)
        this._off(a);
    for (l = 0; l < o; l++)
      if (c = r[l], f = c.split("."), g = f[0], y = f[1], g)
        this.eventListeners[g] && this._off(g, y, n);
      else
        for (a in this.eventListeners)
          this._off(a, y, n);
    return this;
  }
  dispatchEvent(e) {
    const n = {
      target: this,
      type: e.type,
      evt: e
    };
    return this.fire(e.type, n), this;
  }
  addEventListener(e, n) {
    return this.on(e, function(r) {
      n.call(this, r.evt);
    }), this;
  }
  removeEventListener(e) {
    return this.off(e), this;
  }
  _delegate(e, n, r) {
    const o = this;
    this.on(e, function(l) {
      const a = l.target.findAncestors(n, !0, o);
      for (let c = 0; c < a.length; c++)
        l = ke.Util.cloneObject(l), l.currentTarget = a[c], r.call(a[c], l);
    });
  }
  remove() {
    return this.isDragging() && this.stopDrag(), kn.DD._dragElements.delete(this._id), this._remove(), this;
  }
  _clearCaches() {
    this._clearSelfAndDescendantCache(_r), this._clearSelfAndDescendantCache(gu), this._clearSelfAndDescendantCache(w2), this._clearSelfAndDescendantCache(k2), this._clearSelfAndDescendantCache(n0), this._clearSelfAndDescendantCache(t0);
  }
  _remove() {
    this._clearCaches();
    const e = this.getParent();
    e && e.children && (e.children.splice(this.index, 1), e._setChildrenIndices(), this.parent = null);
  }
  destroy() {
    return this.remove(), this.clearCache(), this;
  }
  getAttr(e) {
    const n = "get" + ke.Util._capitalize(e);
    return ke.Util._isFunction(this[n]) ? this[n]() : this.attrs[e];
  }
  getAncestors() {
    let e = this.getParent(), n = [];
    for (; e; )
      n.push(e), e = e.getParent();
    return n;
  }
  getAttrs() {
    return this.attrs || {};
  }
  setAttrs(e) {
    return this._batchTransformChanges(() => {
      let n, r;
      if (!e)
        return this;
      for (n in e)
        n !== T8 && (r = x2 + ke.Util._capitalize(n), ke.Util._isFunction(this[r]) ? this[r](e[n]) : this._setAttr(n, e[n]));
    }), this;
  }
  isListening() {
    return this._getCache(t0, this._isListening);
  }
  _isListening(e) {
    if (!this.listening())
      return !1;
    const r = this.getParent();
    return r && r !== e && this !== e ? r._isListening(e) : !0;
  }
  isVisible() {
    return this._getCache(n0, this._isVisible);
  }
  _isVisible(e) {
    if (!this.visible())
      return !1;
    const r = this.getParent();
    return r && r !== e && this !== e ? r._isVisible(e) : !0;
  }
  shouldDrawHit(e, n = !1) {
    if (e)
      return this._isVisible(e) && this._isListening(e);
    const r = this.getLayer();
    let o = !1;
    kn.DD._dragElements.forEach((a) => {
      a.dragStatus === "dragging" && (a.node.nodeType === "Stage" || a.node.getLayer() === r) && (o = !0);
    });
    const l = !n && !Yr.Konva.hitOnDragEnabled && (o || Yr.Konva.isTransforming());
    return this.isListening() && this.isVisible() && !l;
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
    let e = this.getDepth(), n = this, r = 0, o, l, a, c;
    function f(y) {
      for (o = [], l = y.length, a = 0; a < l; a++)
        c = y[a], r++, c.nodeType !== C2 && (o = o.concat(c.getChildren().slice())), c._id === n._id && (a = l);
      o.length > 0 && o[0].getDepth() <= e && f(o);
    }
    const g = this.getStage();
    return n.nodeType !== D8 && g && f(g.getChildren()), r;
  }
  getDepth() {
    let e = 0, n = this.parent;
    for (; n; )
      e++, n = n.parent;
    return e;
  }
  _batchTransformChanges(e) {
    this._batchingTransformChange = !0, e(), this._batchingTransformChange = !1, this._needClearTransformCache && (this._clearCache(Xr), this._clearSelfAndDescendantCache(_r)), this._needClearTransformCache = !1;
  }
  setPosition(e) {
    return this._batchTransformChanges(() => {
      this.x(e.x), this.y(e.y);
    }), this;
  }
  getPosition() {
    return {
      x: this.x(),
      y: this.y()
    };
  }
  getRelativePointerPosition() {
    const e = this.getStage();
    if (!e)
      return null;
    const n = e.getPointerPosition();
    if (!n)
      return null;
    const r = this.getAbsoluteTransform().copy();
    return r.invert(), r.point(n);
  }
  getAbsolutePosition(e) {
    let n = !1, r = this.parent;
    for (; r; ) {
      if (r.isCached()) {
        n = !0;
        break;
      }
      r = r.parent;
    }
    n && !e && (e = !0);
    const o = this.getAbsoluteTransform(e).getMatrix(), l = new ke.Transform(), a = this.offset();
    return l.m = o.slice(), l.translate(a.x, a.y), l.getTranslation();
  }
  setAbsolutePosition(e) {
    const { x: n, y: r, ...o } = this._clearTransform();
    this.attrs.x = n, this.attrs.y = r, this._clearCache(Xr);
    const l = this._getAbsoluteTransform().copy();
    return l.invert(), l.translate(e.x, e.y), e = {
      x: this.attrs.x + l.getTranslation().x,
      y: this.attrs.y + l.getTranslation().y
    }, this._setTransform(o), this.setPosition({ x: e.x, y: e.y }), this._clearCache(Xr), this._clearSelfAndDescendantCache(_r), this;
  }
  _setTransform(e) {
    let n;
    for (n in e)
      this.attrs[n] = e[n];
  }
  _clearTransform() {
    const e = {
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
    return this.attrs.x = 0, this.attrs.y = 0, this.attrs.rotation = 0, this.attrs.scaleX = 1, this.attrs.scaleY = 1, this.attrs.offsetX = 0, this.attrs.offsetY = 0, this.attrs.skewX = 0, this.attrs.skewY = 0, e;
  }
  move(e) {
    let n = e.x, r = e.y, o = this.x(), l = this.y();
    return n !== void 0 && (o += n), r !== void 0 && (l += r), this.setPosition({ x: o, y: l }), this;
  }
  _eachAncestorReverse(e, n) {
    let r = [], o = this.getParent(), l, a;
    if (!(n && n._id === this._id)) {
      for (r.unshift(this); o && (!n || o._id !== n._id); )
        r.unshift(o), o = o.parent;
      for (l = r.length, a = 0; a < l; a++)
        e(r[a]);
    }
  }
  rotate(e) {
    return this.rotation(this.rotation() + e), this;
  }
  moveToTop() {
    if (!this.parent)
      return ke.Util.warn("Node has no parent. moveToTop function is ignored."), !1;
    const e = this.index, n = this.parent.getChildren().length;
    return e < n - 1 ? (this.parent.children.splice(e, 1), this.parent.children.push(this), this.parent._setChildrenIndices(), !0) : !1;
  }
  moveUp() {
    if (!this.parent)
      return ke.Util.warn("Node has no parent. moveUp function is ignored."), !1;
    const e = this.index, n = this.parent.getChildren().length;
    return e < n - 1 ? (this.parent.children.splice(e, 1), this.parent.children.splice(e + 1, 0, this), this.parent._setChildrenIndices(), !0) : !1;
  }
  moveDown() {
    if (!this.parent)
      return ke.Util.warn("Node has no parent. moveDown function is ignored."), !1;
    const e = this.index;
    return e > 0 ? (this.parent.children.splice(e, 1), this.parent.children.splice(e - 1, 0, this), this.parent._setChildrenIndices(), !0) : !1;
  }
  moveToBottom() {
    if (!this.parent)
      return ke.Util.warn("Node has no parent. moveToBottom function is ignored."), !1;
    const e = this.index;
    return e > 0 ? (this.parent.children.splice(e, 1), this.parent.children.unshift(this), this.parent._setChildrenIndices(), !0) : !1;
  }
  setZIndex(e) {
    if (!this.parent)
      return ke.Util.warn("Node has no parent. zIndex parameter is ignored."), this;
    (e < 0 || e >= this.parent.children.length) && ke.Util.warn("Unexpected value " + e + " for zIndex property. zIndex is just index of a node in children of its parent. Expected value is from 0 to " + (this.parent.children.length - 1) + ".");
    const n = this.index;
    return this.parent.children.splice(n, 1), this.parent.children.splice(e, 0, this), this.parent._setChildrenIndices(), this;
  }
  getAbsoluteOpacity() {
    return this._getCache(gu, this._getAbsoluteOpacity);
  }
  _getAbsoluteOpacity() {
    let e = this.opacity();
    const n = this.getParent();
    return n && !n._isUnderCache && (e *= n.getAbsoluteOpacity()), e;
  }
  moveTo(e) {
    return this.getParent() !== e && (this._remove(), e.add(this)), this;
  }
  toObject() {
    let e = this.getAttrs(), n, r, o, l, a;
    const c = {
      attrs: {},
      className: this.getClassName()
    };
    for (n in e)
      r = e[n], a = ke.Util.isObject(r) && !ke.Util._isPlainObject(r) && !ke.Util._isArray(r), !a && (o = typeof this[n] == "function" && this[n], delete e[n], l = o ? o.call(this) : null, e[n] = r, l !== r && (c.attrs[n] = r));
    return ke.Util._prepareToStringify(c);
  }
  toJSON() {
    return JSON.stringify(this.toObject());
  }
  getParent() {
    return this.parent;
  }
  findAncestors(e, n, r) {
    const o = [];
    n && this._isMatch(e) && o.push(this);
    let l = this.parent;
    for (; l; ) {
      if (l === r)
        return o;
      l._isMatch(e) && o.push(l), l = l.parent;
    }
    return o;
  }
  isAncestorOf(e) {
    return !1;
  }
  findAncestor(e, n, r) {
    return this.findAncestors(e, n, r)[0];
  }
  _isMatch(e) {
    if (!e)
      return !1;
    if (typeof e == "function")
      return e(this);
    let n = e.replace(/ /g, "").split(","), r = n.length, o, l;
    for (o = 0; o < r; o++)
      if (l = n[o], ke.Util.isValidSelector(l) || (ke.Util.warn('Selector "' + l + '" is invalid. Allowed selectors examples are "#foo", ".bar" or "Group".'), ke.Util.warn('If you have a custom shape with such className, please change it to start with upper letter like "Triangle".'), ke.Util.warn("Konva is awesome, right?")), l.charAt(0) === "#") {
        if (this.id() === l.slice(1))
          return !0;
      } else if (l.charAt(0) === ".") {
        if (this.hasName(l.slice(1)))
          return !0;
      } else if (this.className === l || this.nodeType === l)
        return !0;
    return !1;
  }
  getLayer() {
    const e = this.getParent();
    return e ? e.getLayer() : null;
  }
  getStage() {
    return this._getCache(k2, this._getStage);
  }
  _getStage() {
    const e = this.getParent();
    return e ? e.getStage() : null;
  }
  fire(e, n = {}, r) {
    return n.target = n.target || this, r ? this._fireAndBubble(e, n) : this._fire(e, n), this;
  }
  getAbsoluteTransform(e) {
    return e ? this._getAbsoluteTransform(e) : this._getCache(_r, this._getAbsoluteTransform);
  }
  _getAbsoluteTransform(e) {
    let n;
    if (e)
      return n = new ke.Transform(), this._eachAncestorReverse(function(r) {
        const o = r.transformsEnabled();
        o === "all" ? n.multiply(r.getTransform()) : o === "position" && n.translate(r.x() - r.offsetX(), r.y() - r.offsetY());
      }, e), n;
    {
      n = this._cache.get(_r) || new ke.Transform(), this.parent ? this.parent.getAbsoluteTransform().copyInto(n) : n.reset();
      const r = this.transformsEnabled();
      if (r === "all")
        n.multiply(this.getTransform());
      else if (r === "position") {
        const o = this.attrs.x || 0, l = this.attrs.y || 0, a = this.attrs.offsetX || 0, c = this.attrs.offsetY || 0;
        n.translate(o - a, l - c);
      }
      return n.dirty = !1, n;
    }
  }
  getAbsoluteScale(e) {
    let n = this;
    for (; n; )
      n._isUnderCache && (e = n), n = n.getParent();
    const o = this.getAbsoluteTransform(e).decompose();
    return {
      x: o.scaleX,
      y: o.scaleY
    };
  }
  getAbsoluteRotation() {
    return this.getAbsoluteTransform().decompose().rotation;
  }
  getTransform() {
    return this._getCache(Xr, this._getTransform);
  }
  _getTransform() {
    var e, n;
    const r = this._cache.get(Xr) || new ke.Transform();
    r.reset();
    const o = this.x(), l = this.y(), a = Yr.Konva.getAngle(this.rotation()), c = (e = this.attrs.scaleX) !== null && e !== void 0 ? e : 1, f = (n = this.attrs.scaleY) !== null && n !== void 0 ? n : 1, g = this.attrs.skewX || 0, y = this.attrs.skewY || 0, C = this.attrs.offsetX || 0, S = this.attrs.offsetY || 0;
    return (o !== 0 || l !== 0) && r.translate(o, l), a !== 0 && r.rotate(a), (g !== 0 || y !== 0) && r.skew(g, y), (c !== 1 || f !== 1) && r.scale(c, f), (C !== 0 || S !== 0) && r.translate(-1 * C, -1 * S), r.dirty = !1, r;
  }
  clone(e) {
    let n = ke.Util.cloneObject(this.attrs), r, o, l, a, c;
    for (r in e)
      n[r] = e[r];
    const f = new this.constructor(n);
    for (r in this.eventListeners)
      for (o = this.eventListeners[r], l = o.length, a = 0; a < l; a++)
        c = o[a], c.name.indexOf(N8) < 0 && (f.eventListeners[r] || (f.eventListeners[r] = []), f.eventListeners[r].push(c));
    return f;
  }
  _toKonvaCanvas(e) {
    e = e || {};
    const n = this.getClientRect(), r = this.getStage(), o = e.x !== void 0 ? e.x : Math.floor(n.x), l = e.y !== void 0 ? e.y : Math.floor(n.y), a = e.pixelRatio || 1, c = new Es.SceneCanvas({
      width: e.width || Math.ceil(n.width) || (r ? r.width() : 0),
      height: e.height || Math.ceil(n.height) || (r ? r.height() : 0),
      pixelRatio: a
    }), f = c.getContext(), g = new Es.SceneCanvas({
      width: c.width / c.pixelRatio + Math.abs(o),
      height: c.height / c.pixelRatio + Math.abs(l),
      pixelRatio: c.pixelRatio
    });
    return e.imageSmoothingEnabled === !1 && (f._context.imageSmoothingEnabled = !1), f.save(), (o || l) && f.translate(-1 * o, -1 * l), this.drawScene(c, void 0, g), f.restore(), c;
  }
  toCanvas(e) {
    return this._toKonvaCanvas(e)._canvas;
  }
  toDataURL(e) {
    e = e || {};
    const n = e.mimeType || null, r = e.quality || null, o = this._toKonvaCanvas(e).toDataURL(n, r);
    return e.callback && e.callback(o), o;
  }
  toImage(e) {
    return new Promise((n, r) => {
      try {
        const o = e == null ? void 0 : e.callback;
        o && delete e.callback, ke.Util._urlToImage(this.toDataURL(e), function(l) {
          n(l), o == null || o(l);
        });
      } catch (o) {
        r(o);
      }
    });
  }
  toBlob(e) {
    return new Promise((n, r) => {
      try {
        const o = e == null ? void 0 : e.callback;
        o && delete e.callback, this.toCanvas(e).toBlob((l) => {
          n(l), o == null || o(l);
        }, e == null ? void 0 : e.mimeType, e == null ? void 0 : e.quality);
      } catch (o) {
        r(o);
      }
    });
  }
  setSize(e) {
    return this.width(e.width), this.height(e.height), this;
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
    return this.attrs.dragDistance !== void 0 ? this.attrs.dragDistance : this.parent ? this.parent.getDragDistance() : Yr.Konva.dragDistance;
  }
  _off(e, n, r) {
    let o = this.eventListeners[e], l, a, c;
    for (l = 0; l < o.length; l++)
      if (a = o[l].name, c = o[l].handler, (a !== "konva" || n === "konva") && (!n || a === n) && (!r || r === c)) {
        if (o.splice(l, 1), o.length === 0) {
          delete this.eventListeners[e];
          break;
        }
        l--;
      }
  }
  _fireChangeEvent(e, n, r) {
    this._fire(e + P8, {
      oldVal: n,
      newVal: r
    });
  }
  addName(e) {
    if (!this.hasName(e)) {
      const n = this.name(), r = n ? n + " " + e : e;
      this.name(r);
    }
    return this;
  }
  hasName(e) {
    if (!e)
      return !1;
    const n = this.name();
    return n ? (n || "").split(/\s/g).indexOf(e) !== -1 : !1;
  }
  removeName(e) {
    const n = (this.name() || "").split(/\s/g), r = n.indexOf(e);
    return r !== -1 && (n.splice(r, 1), this.name(n.join(" "))), this;
  }
  setAttr(e, n) {
    const r = this[x2 + ke.Util._capitalize(e)];
    return ke.Util._isFunction(r) ? r.call(this, n) : this._setAttr(e, n), this;
  }
  _requestDraw() {
    if (Yr.Konva.autoDrawEnabled) {
      const e = this.getLayer() || this.getStage();
      e == null || e.batchDraw();
    }
  }
  _setAttr(e, n) {
    const r = this.attrs[e];
    r === n && !ke.Util.isObject(n) || (n == null ? delete this.attrs[e] : this.attrs[e] = n, this._shouldFireChangeEvents && this._fireChangeEvent(e, r, n), this._requestDraw());
  }
  _setComponentAttr(e, n, r) {
    let o;
    r !== void 0 && (o = this.attrs[e], o || (this.attrs[e] = this.getAttr(e)), this.attrs[e][n] = r, this._fireChangeEvent(e, o, r));
  }
  _fireAndBubble(e, n, r) {
    n && this.nodeType === C2 && (n.target = this);
    const o = [
      R8,
      F8,
      M8,
      L8,
      A8,
      O8
    ];
    if (!(o.indexOf(e) !== -1 && (r && (this === r || this.isAncestorOf && this.isAncestorOf(r)) || this.nodeType === "Stage" && !r))) {
      this._fire(e, n);
      const a = o.indexOf(e) !== -1 && r && r.isAncestorOf && r.isAncestorOf(this) && !r.isAncestorOf(this.parent);
      (n && !n.cancelBubble || !n) && this.parent && this.parent.isListening() && !a && (r && r.parent ? this._fireAndBubble.call(this.parent, e, n, r) : this._fireAndBubble.call(this.parent, e, n));
    }
  }
  _getProtoListeners(e) {
    var n, r, o;
    const l = (n = this._cache.get(Za)) !== null && n !== void 0 ? n : {};
    let a = l == null ? void 0 : l[e];
    if (a === void 0) {
      a = [];
      let c = Object.getPrototypeOf(this);
      for (; c; ) {
        const f = (o = (r = c.eventListeners) === null || r === void 0 ? void 0 : r[e]) !== null && o !== void 0 ? o : [];
        a.push(...f), c = Object.getPrototypeOf(c);
      }
      l[e] = a, this._cache.set(Za, l);
    }
    return a;
  }
  _fire(e, n) {
    n = n || {}, n.currentTarget = this, n.type = e;
    const r = this._getProtoListeners(e);
    if (r)
      for (let l = 0; l < r.length; l++)
        r[l].handler.call(this, n);
    const o = this.eventListeners[e];
    if (o)
      for (let l = 0; l < o.length; l++)
        o[l].handler.call(this, n);
  }
  draw() {
    return this.drawScene(), this.drawHit(), this;
  }
  _createDragElement(e) {
    const n = e ? e.pointerId : void 0, r = this.getStage(), o = this.getAbsolutePosition();
    if (!r)
      return;
    const l = r._getPointerById(n) || r._changedPointerPositions[0] || o;
    kn.DD._dragElements.set(this._id, {
      node: this,
      startPointerPos: l,
      offset: {
        x: l.x - o.x,
        y: l.y - o.y
      },
      dragStatus: "ready",
      pointerId: n
    });
  }
  startDrag(e, n = !0) {
    kn.DD._dragElements.has(this._id) || this._createDragElement(e);
    const r = kn.DD._dragElements.get(this._id);
    r.dragStatus = "dragging", this.fire("dragstart", {
      type: "dragstart",
      target: this,
      evt: e && e.evt
    }, n);
  }
  _setDragPosition(e, n) {
    const r = this.getStage()._getPointerById(n.pointerId);
    if (!r)
      return;
    let o = {
      x: r.x - n.offset.x,
      y: r.y - n.offset.y
    };
    const l = this.dragBoundFunc();
    if (l !== void 0) {
      const a = l.call(this, o, e);
      a ? o = a : ke.Util.warn("dragBoundFunc did not return any value. That is unexpected behavior. You must return new absolute position from dragBoundFunc.");
    }
    (!this._lastPos || this._lastPos.x !== o.x || this._lastPos.y !== o.y) && (this.setAbsolutePosition(o), this._requestDraw()), this._lastPos = o;
  }
  stopDrag(e) {
    const n = kn.DD._dragElements.get(this._id);
    n && (n.dragStatus = "stopped"), kn.DD._endDragBefore(e), kn.DD._endDragAfter(e);
  }
  setDraggable(e) {
    this._setAttr("draggable", e), this._dragChange();
  }
  isDragging() {
    const e = kn.DD._dragElements.get(this._id);
    return e ? e.dragStatus === "dragging" : !1;
  }
  _listenDrag() {
    this._dragCleanup(), this.on("mousedown.konva touchstart.konva", function(e) {
      if (!(!(e.evt.button !== void 0) || Yr.Konva.dragButtons.indexOf(e.evt.button) >= 0) || this.isDragging())
        return;
      let o = !1;
      kn.DD._dragElements.forEach((l) => {
        this.isAncestorOf(l.node) && (o = !0);
      }), o || this._createDragElement(e);
    });
  }
  _dragChange() {
    if (this.attrs.draggable)
      this._listenDrag();
    else {
      if (this._dragCleanup(), !this.getStage())
        return;
      const n = kn.DD._dragElements.get(this._id), r = n && n.dragStatus === "dragging", o = n && n.dragStatus === "ready";
      r ? this.stopDrag() : o && kn.DD._dragElements.delete(this._id);
    }
  }
  _dragCleanup() {
    this.off("mousedown.konva"), this.off("touchstart.konva");
  }
  isClientRectOnScreen(e = { x: 0, y: 0 }) {
    const n = this.getStage();
    if (!n)
      return !1;
    const r = {
      x: -e.x,
      y: -e.y,
      width: n.width() + 2 * e.x,
      height: n.height() + 2 * e.y
    };
    return ke.Util.haveIntersection(r, this.getClientRect());
  }
  static create(e, n) {
    return ke.Util._isString(e) && (e = JSON.parse(e)), this._createNode(e, n);
  }
  static _createNode(e, n) {
    let r = he.prototype.getClassName.call(e), o = e.children, l, a, c;
    n && (e.attrs.container = n), Yr.Konva[r] || (ke.Util.warn('Can not find a node with class name "' + r + '". Fallback to "Shape".'), r = "Shape");
    const f = Yr.Konva[r];
    if (l = new f(e.attrs), o)
      for (a = o.length, c = 0; c < a; c++)
        l.add(he._createNode(o[c]));
    return l;
  }
}
Ze.Node = he;
he.prototype.nodeType = "Node";
he.prototype._attrsAffectingSize = [];
he.prototype.eventListeners = {};
he.prototype.on.call(he.prototype, I8, function() {
  if (this._batchingTransformChange) {
    this._needClearTransformCache = !0;
    return;
  }
  this._clearCache(Xr), this._clearSelfAndDescendantCache(_r);
});
he.prototype.on.call(he.prototype, "visibleChange.konva", function() {
  this._clearSelfAndDescendantCache(n0);
});
he.prototype.on.call(he.prototype, "listeningChange.konva", function() {
  this._clearSelfAndDescendantCache(t0);
});
he.prototype.on.call(he.prototype, "opacityChange.konva", function() {
  this._clearSelfAndDescendantCache(gu);
});
const Be = Ol.Factory.addGetterSetter;
Be(he, "zIndex");
Be(he, "absolutePosition");
Be(he, "position");
Be(he, "x", 0, (0, ut.getNumberValidator)());
Be(he, "y", 0, (0, ut.getNumberValidator)());
Be(he, "globalCompositeOperation", "source-over", (0, ut.getStringValidator)());
Be(he, "opacity", 1, (0, ut.getNumberValidator)());
Be(he, "name", "", (0, ut.getStringValidator)());
Be(he, "id", "", (0, ut.getStringValidator)());
Be(he, "rotation", 0, (0, ut.getNumberValidator)());
Ol.Factory.addComponentsGetterSetter(he, "scale", ["x", "y"]);
Be(he, "scaleX", 1, (0, ut.getNumberValidator)());
Be(he, "scaleY", 1, (0, ut.getNumberValidator)());
Ol.Factory.addComponentsGetterSetter(he, "skew", ["x", "y"]);
Be(he, "skewX", 0, (0, ut.getNumberValidator)());
Be(he, "skewY", 0, (0, ut.getNumberValidator)());
Ol.Factory.addComponentsGetterSetter(he, "offset", ["x", "y"]);
Be(he, "offsetX", 0, (0, ut.getNumberValidator)());
Be(he, "offsetY", 0, (0, ut.getNumberValidator)());
Be(he, "dragDistance", void 0, (0, ut.getNumberValidator)());
Be(he, "width", 0, (0, ut.getNumberValidator)());
Be(he, "height", 0, (0, ut.getNumberValidator)());
Be(he, "listening", !0, (0, ut.getBooleanValidator)());
Be(he, "preventDefault", !0, (0, ut.getBooleanValidator)());
Be(he, "filters", void 0, function(t) {
  return this._filterUpToDate = !1, t;
});
Be(he, "visible", !0, (0, ut.getBooleanValidator)());
Be(he, "transformsEnabled", "all", (0, ut.getStringValidator)());
Be(he, "size");
Be(he, "dragBoundFunc");
Be(he, "draggable", !1, (0, ut.getBooleanValidator)());
Ol.Factory.backCompat(he, {
  rotateDeg: "rotate",
  setRotationDeg: "setRotation",
  getRotationDeg: "getRotation"
});
var Ji = {};
Object.defineProperty(Ji, "__esModule", { value: !0 });
Ji.Container = void 0;
const lo = xe, Zf = Ze, fc = fe;
class bi extends Zf.Node {
  constructor() {
    super(...arguments), this.children = [];
  }
  getChildren(e) {
    const n = this.children || [];
    return e ? n.filter(e) : n;
  }
  hasChildren() {
    return this.getChildren().length > 0;
  }
  removeChildren() {
    return this.getChildren().forEach((e) => {
      e.parent = null, e.index = 0, e.remove();
    }), this.children = [], this._requestDraw(), this;
  }
  destroyChildren() {
    return this.getChildren().forEach((e) => {
      e.parent = null, e.index = 0, e.destroy();
    }), this.children = [], this._requestDraw(), this;
  }
  add(...e) {
    if (e.length === 0)
      return this;
    if (e.length > 1) {
      for (let r = 0; r < e.length; r++)
        this.add(e[r]);
      return this;
    }
    const n = e[0];
    return n.getParent() ? (n.moveTo(this), this) : (this._validateAdd(n), n.index = this.getChildren().length, n.parent = this, n._clearCaches(), this.getChildren().push(n), this._fire("add", {
      child: n
    }), this._requestDraw(), this);
  }
  destroy() {
    return this.hasChildren() && this.destroyChildren(), super.destroy(), this;
  }
  find(e) {
    return this._generalFind(e, !1);
  }
  findOne(e) {
    const n = this._generalFind(e, !0);
    return n.length > 0 ? n[0] : void 0;
  }
  _generalFind(e, n) {
    const r = [];
    return this._descendants((o) => {
      const l = o._isMatch(e);
      return l && r.push(o), !!(l && n);
    }), r;
  }
  _descendants(e) {
    let n = !1;
    const r = this.getChildren();
    for (const o of r) {
      if (n = e(o), n)
        return !0;
      if (o.hasChildren() && (n = o._descendants(e), n))
        return !0;
    }
    return !1;
  }
  toObject() {
    const e = Zf.Node.prototype.toObject.call(this);
    return e.children = [], this.getChildren().forEach((n) => {
      e.children.push(n.toObject());
    }), e;
  }
  isAncestorOf(e) {
    let n = e.getParent();
    for (; n; ) {
      if (n._id === this._id)
        return !0;
      n = n.getParent();
    }
    return !1;
  }
  clone(e) {
    const n = Zf.Node.prototype.clone.call(this, e);
    return this.getChildren().forEach(function(r) {
      n.add(r.clone());
    }), n;
  }
  getAllIntersections(e) {
    const n = [];
    return this.find("Shape").forEach((r) => {
      r.isVisible() && r.intersects(e) && n.push(r);
    }), n;
  }
  _clearSelfAndDescendantCache(e) {
    var n;
    super._clearSelfAndDescendantCache(e), !this.isCached() && ((n = this.children) === null || n === void 0 || n.forEach(function(r) {
      r._clearSelfAndDescendantCache(e);
    }));
  }
  _setChildrenIndices() {
    var e;
    (e = this.children) === null || e === void 0 || e.forEach(function(n, r) {
      n.index = r;
    }), this._requestDraw();
  }
  drawScene(e, n, r) {
    const o = this.getLayer(), l = e || o && o.getCanvas(), a = l && l.getContext(), c = this._getCanvasCache(), f = c && c.scene, g = l && l.isCache;
    if (!this.isVisible() && !g)
      return this;
    if (f) {
      a.save();
      const y = this.getAbsoluteTransform(n).getMatrix();
      a.transform(y[0], y[1], y[2], y[3], y[4], y[5]), this._drawCachedSceneCanvas(a), a.restore();
    } else
      this._drawChildren("drawScene", l, n, r);
    return this;
  }
  drawHit(e, n) {
    if (!this.shouldDrawHit(n))
      return this;
    const r = this.getLayer(), o = e || r && r.hitCanvas, l = o && o.getContext(), a = this._getCanvasCache();
    if (a && a.hit) {
      l.save();
      const f = this.getAbsoluteTransform(n).getMatrix();
      l.transform(f[0], f[1], f[2], f[3], f[4], f[5]), this._drawCachedHitCanvas(l), l.restore();
    } else
      this._drawChildren("drawHit", o, n);
    return this;
  }
  _drawChildren(e, n, r, o) {
    var l;
    const a = n && n.getContext(), c = this.clipWidth(), f = this.clipHeight(), g = this.clipFunc(), y = typeof c == "number" && typeof f == "number" || g, C = r === this;
    if (y) {
      a.save();
      const x = this.getAbsoluteTransform(r);
      let v = x.getMatrix();
      a.transform(v[0], v[1], v[2], v[3], v[4], v[5]), a.beginPath();
      let E;
      if (g)
        E = g.call(this, a, this);
      else {
        const N = this.clipX(), k = this.clipY();
        a.rect(N || 0, k || 0, c, f);
      }
      a.clip.apply(a, E), v = x.copy().invert().getMatrix(), a.transform(v[0], v[1], v[2], v[3], v[4], v[5]);
    }
    const S = !C && this.globalCompositeOperation() !== "source-over" && e === "drawScene";
    S && (a.save(), a._applyGlobalCompositeOperation(this)), (l = this.children) === null || l === void 0 || l.forEach(function(x) {
      x[e](n, r, o);
    }), S && a.restore(), y && a.restore();
  }
  getClientRect(e = {}) {
    var n;
    const r = e.skipTransform, o = e.relativeTo;
    let l, a, c, f, g = {
      x: 1 / 0,
      y: 1 / 0,
      width: 0,
      height: 0
    };
    const y = this;
    (n = this.children) === null || n === void 0 || n.forEach(function(x) {
      if (!x.visible())
        return;
      const v = x.getClientRect({
        relativeTo: y,
        skipShadow: e.skipShadow,
        skipStroke: e.skipStroke
      });
      v.width === 0 && v.height === 0 || (l === void 0 ? (l = v.x, a = v.y, c = v.x + v.width, f = v.y + v.height) : (l = Math.min(l, v.x), a = Math.min(a, v.y), c = Math.max(c, v.x + v.width), f = Math.max(f, v.y + v.height)));
    });
    const C = this.find("Shape");
    let S = !1;
    for (let x = 0; x < C.length; x++)
      if (C[x]._isVisible(this)) {
        S = !0;
        break;
      }
    return S && l !== void 0 ? g = {
      x: l,
      y: a,
      width: c - l,
      height: f - a
    } : g = {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    }, r ? g : this._transformedRect(g, o);
  }
}
Ji.Container = bi;
lo.Factory.addComponentsGetterSetter(bi, "clip", [
  "x",
  "y",
  "width",
  "height"
]);
lo.Factory.addGetterSetter(bi, "clipX", void 0, (0, fc.getNumberValidator)());
lo.Factory.addGetterSetter(bi, "clipY", void 0, (0, fc.getNumberValidator)());
lo.Factory.addGetterSetter(bi, "clipWidth", void 0, (0, fc.getNumberValidator)());
lo.Factory.addGetterSetter(bi, "clipHeight", void 0, (0, fc.getNumberValidator)());
lo.Factory.addGetterSetter(bi, "clipFunc");
var T4 = {}, pi = {};
Object.defineProperty(pi, "__esModule", { value: !0 });
pi.getCapturedShape = U8;
pi.createEvent = l1;
pi.hasPointerCapture = B8;
pi.setPointerCapture = V8;
pi.releaseCapture = R4;
const G8 = Se, Pl = /* @__PURE__ */ new Map(), N4 = G8.Konva._global.PointerEvent !== void 0;
function U8(t) {
  return Pl.get(t);
}
function l1(t) {
  return {
    evt: t,
    pointerId: t.pointerId
  };
}
function B8(t, e) {
  return Pl.get(t) === e;
}
function V8(t, e) {
  R4(t), e.getStage() && (Pl.set(t, e), N4 && e._fire("gotpointercapture", l1(new PointerEvent("gotpointercapture"))));
}
function R4(t, e) {
  const n = Pl.get(t);
  if (!n)
    return;
  const r = n.getStage();
  r && r.content, Pl.delete(t), N4 && n._fire("lostpointercapture", l1(new PointerEvent("lostpointercapture")));
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.Stage = t.stages = void 0;
  const e = rt, n = xe, r = Ji, o = Se, l = Kn, a = dc, c = Se, f = pi, g = "Stage", y = "string", C = "px", S = "mouseout", x = "mouseleave", v = "mouseover", E = "mouseenter", N = "mousemove", k = "mousedown", w = "mouseup", p = "pointermove", _ = "pointerdown", T = "pointerup", F = "pointercancel", L = "lostpointercapture", R = "pointerout", G = "pointerleave", M = "pointerover", B = "pointerenter", j = "contextmenu", I = "touchstart", Z = "touchend", Q = "touchmove", pe = "touchcancel", ye = "wheel", H = 5, $ = [
    [E, "_pointerenter"],
    [k, "_pointerdown"],
    [N, "_pointermove"],
    [w, "_pointerup"],
    [x, "_pointerleave"],
    [I, "_pointerdown"],
    [Q, "_pointermove"],
    [Z, "_pointerup"],
    [pe, "_pointercancel"],
    [v, "_pointerover"],
    [ye, "_wheel"],
    [j, "_contextmenu"],
    [_, "_pointerdown"],
    [p, "_pointermove"],
    [T, "_pointerup"],
    [F, "_pointercancel"],
    [G, "_pointerleave"],
    [L, "_lostpointercapture"]
  ], X = {
    mouse: {
      [R]: S,
      [G]: x,
      [M]: v,
      [B]: E,
      [p]: N,
      [_]: k,
      [T]: w,
      [F]: "mousecancel",
      pointerclick: "click",
      pointerdblclick: "dblclick"
    },
    touch: {
      [R]: "touchout",
      [G]: "touchleave",
      [M]: "touchover",
      [B]: "touchenter",
      [p]: Q,
      [_]: I,
      [T]: Z,
      [F]: pe,
      pointerclick: "tap",
      pointerdblclick: "dbltap"
    },
    pointer: {
      [R]: R,
      [G]: G,
      [M]: M,
      [B]: B,
      [p]: p,
      [_]: _,
      [T]: T,
      [F]: F,
      pointerclick: "pointerclick",
      pointerdblclick: "pointerdblclick"
    }
  }, q = (ze) => ze.indexOf("pointer") >= 0 ? "pointer" : ze.indexOf("touch") >= 0 ? "touch" : "mouse", re = (ze) => {
    const A = q(ze);
    if (A === "pointer")
      return o.Konva.pointerEventsEnabled && X.pointer;
    if (A === "touch")
      return X.touch;
    if (A === "mouse")
      return X.mouse;
  };
  function ve(ze = {}) {
    return (ze.clipFunc || ze.clipWidth || ze.clipHeight) && e.Util.warn("Stage does not support clipping. Please use clip for Layers or Groups."), ze;
  }
  const ft = "Pointer position is missing and not registered by the stage. Looks like it is outside of the stage container. You can set it manually from event: stage.setPointersPositions(event);";
  t.stages = [];
  class ht extends r.Container {
    constructor(A) {
      super(ve(A)), this._pointerPositions = [], this._changedPointerPositions = [], this._buildDOM(), this._bindContentEvents(), t.stages.push(this), this.on("widthChange.konva heightChange.konva", this._resizeDOM), this.on("visibleChange.konva", this._checkVisibility), this.on("clipWidthChange.konva clipHeightChange.konva clipFuncChange.konva", () => {
        ve(this.attrs);
      }), this._checkVisibility();
    }
    _validateAdd(A) {
      const W = A.getType() === "Layer", le = A.getType() === "FastLayer";
      W || le || e.Util.throw("You may only add layers to the stage.");
    }
    _checkVisibility() {
      if (!this.content)
        return;
      const A = this.visible() ? "" : "none";
      this.content.style.display = A;
    }
    setContainer(A) {
      if (typeof A === y) {
        let W;
        if (A.charAt(0) === ".") {
          const le = A.slice(1);
          A = document.getElementsByClassName(le)[0];
        } else
          A.charAt(0) !== "#" ? W = A : W = A.slice(1), A = document.getElementById(W);
        if (!A)
          throw "Can not find container in document with id " + W;
      }
      return this._setAttr("container", A), this.content && (this.content.parentElement && this.content.parentElement.removeChild(this.content), A.appendChild(this.content)), this;
    }
    shouldDrawHit() {
      return !0;
    }
    clear() {
      const A = this.children, W = A.length;
      for (let le = 0; le < W; le++)
        A[le].clear();
      return this;
    }
    clone(A) {
      return A || (A = {}), A.container = typeof document < "u" && document.createElement("div"), r.Container.prototype.clone.call(this, A);
    }
    destroy() {
      super.destroy();
      const A = this.content;
      A && e.Util._isInDocument(A) && this.container().removeChild(A);
      const W = t.stages.indexOf(this);
      return W > -1 && t.stages.splice(W, 1), e.Util.releaseCanvas(this.bufferCanvas._canvas, this.bufferHitCanvas._canvas), this;
    }
    getPointerPosition() {
      const A = this._pointerPositions[0] || this._changedPointerPositions[0];
      return A ? {
        x: A.x,
        y: A.y
      } : (e.Util.warn(ft), null);
    }
    _getPointerById(A) {
      return this._pointerPositions.find((W) => W.id === A);
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
    _toKonvaCanvas(A) {
      A = A || {}, A.x = A.x || 0, A.y = A.y || 0, A.width = A.width || this.width(), A.height = A.height || this.height();
      const W = new l.SceneCanvas({
        width: A.width,
        height: A.height,
        pixelRatio: A.pixelRatio || 1
      }), le = W.getContext()._context, Ne = this.children;
      return (A.x || A.y) && le.translate(-1 * A.x, -1 * A.y), Ne.forEach(function(de) {
        if (!de.isVisible())
          return;
        const De = de._toKonvaCanvas(A);
        le.drawImage(De._canvas, A.x, A.y, De.getWidth() / De.getPixelRatio(), De.getHeight() / De.getPixelRatio());
      }), W;
    }
    getIntersection(A) {
      if (!A)
        return null;
      const W = this.children, le = W.length, Ne = le - 1;
      for (let de = Ne; de >= 0; de--) {
        const De = W[de].getIntersection(A);
        if (De)
          return De;
      }
      return null;
    }
    _resizeDOM() {
      const A = this.width(), W = this.height();
      this.content && (this.content.style.width = A + C, this.content.style.height = W + C), this.bufferCanvas.setSize(A, W), this.bufferHitCanvas.setSize(A, W), this.children.forEach((le) => {
        le.setSize({ width: A, height: W }), le.draw();
      });
    }
    add(A, ...W) {
      if (arguments.length > 1) {
        for (let Ne = 0; Ne < arguments.length; Ne++)
          this.add(arguments[Ne]);
        return this;
      }
      super.add(A);
      const le = this.children.length;
      return le > H && e.Util.warn("The stage has " + le + " layers. Recommended maximum number of layers is 3-5. Adding more layers into the stage may drop the performance. Rethink your tree structure, you can use Konva.Group."), A.setSize({ width: this.width(), height: this.height() }), A.draw(), o.Konva.isBrowser && this.content.appendChild(A.canvas._canvas), this;
    }
    getParent() {
      return null;
    }
    getLayer() {
      return null;
    }
    hasPointerCapture(A) {
      return f.hasPointerCapture(A, this);
    }
    setPointerCapture(A) {
      f.setPointerCapture(A, this);
    }
    releaseCapture(A) {
      f.releaseCapture(A, this);
    }
    getLayers() {
      return this.children;
    }
    _bindContentEvents() {
      o.Konva.isBrowser && $.forEach(([A, W]) => {
        this.content.addEventListener(A, (le) => {
          this[W](le);
        }, { passive: !1 });
      });
    }
    _pointerenter(A) {
      this.setPointersPositions(A);
      const W = re(A.type);
      W && this._fire(W.pointerenter, {
        evt: A,
        target: this,
        currentTarget: this
      });
    }
    _pointerover(A) {
      this.setPointersPositions(A);
      const W = re(A.type);
      W && this._fire(W.pointerover, {
        evt: A,
        target: this,
        currentTarget: this
      });
    }
    _getTargetShape(A) {
      let W = this[A + "targetShape"];
      return W && !W.getStage() && (W = null), W;
    }
    _pointerleave(A) {
      const W = re(A.type), le = q(A.type);
      if (!W)
        return;
      this.setPointersPositions(A);
      const Ne = this._getTargetShape(le), de = !(o.Konva.isDragging() || o.Konva.isTransforming()) || o.Konva.hitOnDragEnabled;
      Ne && de ? (Ne._fireAndBubble(W.pointerout, { evt: A }), Ne._fireAndBubble(W.pointerleave, { evt: A }), this._fire(W.pointerleave, {
        evt: A,
        target: this,
        currentTarget: this
      }), this[le + "targetShape"] = null) : de && (this._fire(W.pointerleave, {
        evt: A,
        target: this,
        currentTarget: this
      }), this._fire(W.pointerout, {
        evt: A,
        target: this,
        currentTarget: this
      })), this.pointerPos = null, this._pointerPositions = [];
    }
    _pointerdown(A) {
      const W = re(A.type), le = q(A.type);
      if (!W)
        return;
      this.setPointersPositions(A);
      let Ne = !1;
      this._changedPointerPositions.forEach((de) => {
        const De = this.getIntersection(de);
        if (a.DD.justDragged = !1, o.Konva["_" + le + "ListenClick"] = !0, !De || !De.isListening()) {
          this[le + "ClickStartShape"] = void 0;
          return;
        }
        o.Konva.capturePointerEventsEnabled && De.setPointerCapture(de.id), this[le + "ClickStartShape"] = De, De._fireAndBubble(W.pointerdown, {
          evt: A,
          pointerId: de.id
        }), Ne = !0;
        const Ge = A.type.indexOf("touch") >= 0;
        De.preventDefault() && A.cancelable && Ge && A.preventDefault();
      }), Ne || this._fire(W.pointerdown, {
        evt: A,
        target: this,
        currentTarget: this,
        pointerId: this._pointerPositions[0].id
      });
    }
    _pointermove(A) {
      const W = re(A.type), le = q(A.type);
      if (!W || (o.Konva.isDragging() && a.DD.node.preventDefault() && A.cancelable && A.preventDefault(), this.setPointersPositions(A), !(!(o.Konva.isDragging() || o.Konva.isTransforming()) || o.Konva.hitOnDragEnabled)))
        return;
      const de = {};
      let De = !1;
      const Ge = this._getTargetShape(le);
      this._changedPointerPositions.forEach((gn) => {
        const Ae = f.getCapturedShape(gn.id) || this.getIntersection(gn), Mn = gn.id, on = { evt: A, pointerId: Mn }, Qn = Ge !== Ae;
        if (Qn && Ge && (Ge._fireAndBubble(W.pointerout, { ...on }, Ae), Ge._fireAndBubble(W.pointerleave, { ...on }, Ae)), Ae) {
          if (de[Ae._id])
            return;
          de[Ae._id] = !0;
        }
        Ae && Ae.isListening() ? (De = !0, Qn && (Ae._fireAndBubble(W.pointerover, { ...on }, Ge), Ae._fireAndBubble(W.pointerenter, { ...on }, Ge), this[le + "targetShape"] = Ae), Ae._fireAndBubble(W.pointermove, { ...on })) : Ge && (this._fire(W.pointerover, {
          evt: A,
          target: this,
          currentTarget: this,
          pointerId: Mn
        }), this[le + "targetShape"] = null);
      }), De || this._fire(W.pointermove, {
        evt: A,
        target: this,
        currentTarget: this,
        pointerId: this._changedPointerPositions[0].id
      });
    }
    _pointerup(A) {
      const W = re(A.type), le = q(A.type);
      if (!W)
        return;
      this.setPointersPositions(A);
      const Ne = this[le + "ClickStartShape"], de = this[le + "ClickEndShape"], De = {};
      let Ge = !1;
      this._changedPointerPositions.forEach((gn) => {
        const Ae = f.getCapturedShape(gn.id) || this.getIntersection(gn);
        if (Ae) {
          if (Ae.releaseCapture(gn.id), De[Ae._id])
            return;
          De[Ae._id] = !0;
        }
        const Mn = gn.id, on = { evt: A, pointerId: Mn };
        let Qn = !1;
        o.Konva["_" + le + "InDblClickWindow"] ? (Qn = !0, clearTimeout(this[le + "DblTimeout"])) : a.DD.justDragged || (o.Konva["_" + le + "InDblClickWindow"] = !0, clearTimeout(this[le + "DblTimeout"])), this[le + "DblTimeout"] = setTimeout(function() {
          o.Konva["_" + le + "InDblClickWindow"] = !1;
        }, o.Konva.dblClickWindow), Ae && Ae.isListening() ? (Ge = !0, this[le + "ClickEndShape"] = Ae, Ae._fireAndBubble(W.pointerup, { ...on }), o.Konva["_" + le + "ListenClick"] && Ne && Ne === Ae && (Ae._fireAndBubble(W.pointerclick, { ...on }), Qn && de && de === Ae && Ae._fireAndBubble(W.pointerdblclick, { ...on }))) : (this[le + "ClickEndShape"] = null, o.Konva["_" + le + "ListenClick"] && this._fire(W.pointerclick, {
          evt: A,
          target: this,
          currentTarget: this,
          pointerId: Mn
        }), Qn && this._fire(W.pointerdblclick, {
          evt: A,
          target: this,
          currentTarget: this,
          pointerId: Mn
        }));
      }), Ge || this._fire(W.pointerup, {
        evt: A,
        target: this,
        currentTarget: this,
        pointerId: this._changedPointerPositions[0].id
      }), o.Konva["_" + le + "ListenClick"] = !1, A.cancelable && le !== "touch" && le !== "pointer" && A.preventDefault();
    }
    _contextmenu(A) {
      this.setPointersPositions(A);
      const W = this.getIntersection(this.getPointerPosition());
      W && W.isListening() ? W._fireAndBubble(j, { evt: A }) : this._fire(j, {
        evt: A,
        target: this,
        currentTarget: this
      });
    }
    _wheel(A) {
      this.setPointersPositions(A);
      const W = this.getIntersection(this.getPointerPosition());
      W && W.isListening() ? W._fireAndBubble(ye, { evt: A }) : this._fire(ye, {
        evt: A,
        target: this,
        currentTarget: this
      });
    }
    _pointercancel(A) {
      this.setPointersPositions(A);
      const W = f.getCapturedShape(A.pointerId) || this.getIntersection(this.getPointerPosition());
      W && W._fireAndBubble(T, f.createEvent(A)), f.releaseCapture(A.pointerId);
    }
    _lostpointercapture(A) {
      f.releaseCapture(A.pointerId);
    }
    setPointersPositions(A) {
      const W = this._getContentPosition();
      let le = null, Ne = null;
      A = A || window.event, A.touches !== void 0 ? (this._pointerPositions = [], this._changedPointerPositions = [], Array.prototype.forEach.call(A.touches, (de) => {
        this._pointerPositions.push({
          id: de.identifier,
          x: (de.clientX - W.left) / W.scaleX,
          y: (de.clientY - W.top) / W.scaleY
        });
      }), Array.prototype.forEach.call(A.changedTouches || A.touches, (de) => {
        this._changedPointerPositions.push({
          id: de.identifier,
          x: (de.clientX - W.left) / W.scaleX,
          y: (de.clientY - W.top) / W.scaleY
        });
      })) : (le = (A.clientX - W.left) / W.scaleX, Ne = (A.clientY - W.top) / W.scaleY, this.pointerPos = {
        x: le,
        y: Ne
      }, this._pointerPositions = [{ x: le, y: Ne, id: e.Util._getFirstPointerId(A) }], this._changedPointerPositions = [
        { x: le, y: Ne, id: e.Util._getFirstPointerId(A) }
      ]);
    }
    _setPointerPosition(A) {
      e.Util.warn('Method _setPointerPosition is deprecated. Use "stage.setPointersPositions(event)" instead.'), this.setPointersPositions(A);
    }
    _getContentPosition() {
      if (!this.content || !this.content.getBoundingClientRect)
        return {
          top: 0,
          left: 0,
          scaleX: 1,
          scaleY: 1
        };
      const A = this.content.getBoundingClientRect();
      return {
        top: A.top,
        left: A.left,
        scaleX: A.width / this.content.clientWidth || 1,
        scaleY: A.height / this.content.clientHeight || 1
      };
    }
    _buildDOM() {
      if (this.bufferCanvas = new l.SceneCanvas({
        width: this.width(),
        height: this.height()
      }), this.bufferHitCanvas = new l.HitCanvas({
        pixelRatio: 1,
        width: this.width(),
        height: this.height()
      }), !o.Konva.isBrowser)
        return;
      const A = this.container();
      if (!A)
        throw "Stage has no container. A container is required.";
      A.innerHTML = "", this.content = document.createElement("div"), this.content.style.position = "relative", this.content.style.userSelect = "none", this.content.className = "konvajs-content", this.content.setAttribute("role", "presentation"), A.appendChild(this.content), this._resizeDOM();
    }
    cache() {
      return e.Util.warn("Cache function is not allowed for stage. You may use cache only for layers, groups and shapes."), this;
    }
    clearCache() {
      return this;
    }
    batchDraw() {
      return this.getChildren().forEach(function(A) {
        A.batchDraw();
      }), this;
    }
  }
  t.Stage = ht, ht.prototype.nodeType = g, (0, c._registerNode)(ht), n.Factory.addGetterSetter(ht, "container"), o.Konva.isBrowser && document.addEventListener("visibilitychange", () => {
    t.stages.forEach((ze) => {
      ze.batchDraw();
    });
  });
})(T4);
var Dl = {}, _t = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.Shape = t.shapes = void 0;
  const e = Se, n = rt, r = xe, o = Ze, l = fe, a = Se, c = pi, f = "hasShadow", g = "shadowRGBA", y = "patternImage", C = "linearGradient", S = "radialGradient";
  let x;
  function v() {
    return x || (x = n.Util.createCanvasElement().getContext("2d"), x);
  }
  t.shapes = {};
  function E(G) {
    const M = this.attrs.fillRule;
    M ? G.fill(M) : G.fill();
  }
  function N(G) {
    G.stroke();
  }
  function k(G) {
    const M = this.attrs.fillRule;
    M ? G.fill(M) : G.fill();
  }
  function w(G) {
    G.stroke();
  }
  function p() {
    this._clearCache(f);
  }
  function _() {
    this._clearCache(g);
  }
  function T() {
    this._clearCache(y);
  }
  function F() {
    this._clearCache(C);
  }
  function L() {
    this._clearCache(S);
  }
  class R extends o.Node {
    constructor(M) {
      super(M);
      let B;
      for (; B = n.Util.getRandomColor(), !(B && !(B in t.shapes)); )
        ;
      this.colorKey = B, t.shapes[B] = this;
    }
    getContext() {
      return n.Util.warn("shape.getContext() method is deprecated. Please do not use it."), this.getLayer().getContext();
    }
    getCanvas() {
      return n.Util.warn("shape.getCanvas() method is deprecated. Please do not use it."), this.getLayer().getCanvas();
    }
    getSceneFunc() {
      return this.attrs.sceneFunc || this._sceneFunc;
    }
    getHitFunc() {
      return this.attrs.hitFunc || this._hitFunc;
    }
    hasShadow() {
      return this._getCache(f, this._hasShadow);
    }
    _hasShadow() {
      return this.shadowEnabled() && this.shadowOpacity() !== 0 && !!(this.shadowColor() || this.shadowBlur() || this.shadowOffsetX() || this.shadowOffsetY());
    }
    _getFillPattern() {
      return this._getCache(y, this.__getFillPattern);
    }
    __getFillPattern() {
      if (this.fillPatternImage()) {
        const B = v().createPattern(this.fillPatternImage(), this.fillPatternRepeat() || "repeat");
        if (B && B.setTransform) {
          const j = new n.Transform();
          j.translate(this.fillPatternX(), this.fillPatternY()), j.rotate(e.Konva.getAngle(this.fillPatternRotation())), j.scale(this.fillPatternScaleX(), this.fillPatternScaleY()), j.translate(-1 * this.fillPatternOffsetX(), -1 * this.fillPatternOffsetY());
          const I = j.getMatrix(), Z = typeof DOMMatrix > "u" ? {
            a: I[0],
            b: I[1],
            c: I[2],
            d: I[3],
            e: I[4],
            f: I[5]
          } : new DOMMatrix(I);
          B.setTransform(Z);
        }
        return B;
      }
    }
    _getLinearGradient() {
      return this._getCache(C, this.__getLinearGradient);
    }
    __getLinearGradient() {
      const M = this.fillLinearGradientColorStops();
      if (M) {
        const B = v(), j = this.fillLinearGradientStartPoint(), I = this.fillLinearGradientEndPoint(), Z = B.createLinearGradient(j.x, j.y, I.x, I.y);
        for (let Q = 0; Q < M.length; Q += 2)
          Z.addColorStop(M[Q], M[Q + 1]);
        return Z;
      }
    }
    _getRadialGradient() {
      return this._getCache(S, this.__getRadialGradient);
    }
    __getRadialGradient() {
      const M = this.fillRadialGradientColorStops();
      if (M) {
        const B = v(), j = this.fillRadialGradientStartPoint(), I = this.fillRadialGradientEndPoint(), Z = B.createRadialGradient(j.x, j.y, this.fillRadialGradientStartRadius(), I.x, I.y, this.fillRadialGradientEndRadius());
        for (let Q = 0; Q < M.length; Q += 2)
          Z.addColorStop(M[Q], M[Q + 1]);
        return Z;
      }
    }
    getShadowRGBA() {
      return this._getCache(g, this._getShadowRGBA);
    }
    _getShadowRGBA() {
      if (!this.hasShadow())
        return;
      const M = n.Util.colorToRGBA(this.shadowColor());
      if (M)
        return "rgba(" + M.r + "," + M.g + "," + M.b + "," + M.a * (this.shadowOpacity() || 1) + ")";
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
      const M = this.hitStrokeWidth();
      return M === "auto" ? this.hasStroke() : this.strokeEnabled() && !!M;
    }
    intersects(M) {
      const B = this.getStage();
      if (!B)
        return !1;
      const j = B.bufferHitCanvas;
      return j.getContext().clear(), this.drawHit(j, void 0, !0), j.context.getImageData(Math.round(M.x), Math.round(M.y), 1, 1).data[3] > 0;
    }
    destroy() {
      return o.Node.prototype.destroy.call(this), delete t.shapes[this.colorKey], delete this.colorKey, this;
    }
    _useBufferCanvas(M) {
      var B;
      if (!((B = this.attrs.perfectDrawEnabled) !== null && B !== void 0 ? B : !0))
        return !1;
      const I = M || this.hasFill(), Z = this.hasStroke(), Q = this.getAbsoluteOpacity() !== 1;
      if (I && Z && Q)
        return !0;
      const pe = this.hasShadow(), ye = this.shadowForStrokeEnabled();
      return !!(I && Z && pe && ye);
    }
    setStrokeHitEnabled(M) {
      n.Util.warn("strokeHitEnabled property is deprecated. Please use hitStrokeWidth instead."), M ? this.hitStrokeWidth("auto") : this.hitStrokeWidth(0);
    }
    getStrokeHitEnabled() {
      return this.hitStrokeWidth() !== 0;
    }
    getSelfRect() {
      const M = this.size();
      return {
        x: this._centroid ? -M.width / 2 : 0,
        y: this._centroid ? -M.height / 2 : 0,
        width: M.width,
        height: M.height
      };
    }
    getClientRect(M = {}) {
      let B = !1, j = this.getParent();
      for (; j; ) {
        if (j.isCached()) {
          B = !0;
          break;
        }
        j = j.getParent();
      }
      const I = M.skipTransform, Z = M.relativeTo || B && this.getStage() || void 0, Q = this.getSelfRect(), ye = !M.skipStroke && this.hasStroke() && this.strokeWidth() || 0, H = Q.width + ye, $ = Q.height + ye, X = !M.skipShadow && this.hasShadow(), q = X ? this.shadowOffsetX() : 0, re = X ? this.shadowOffsetY() : 0, ve = H + Math.abs(q), ft = $ + Math.abs(re), ht = X && this.shadowBlur() || 0, ze = ve + ht * 2, A = ft + ht * 2, W = {
        width: ze,
        height: A,
        x: -(ye / 2 + ht) + Math.min(q, 0) + Q.x,
        y: -(ye / 2 + ht) + Math.min(re, 0) + Q.y
      };
      return I ? W : this._transformedRect(W, Z);
    }
    drawScene(M, B, j) {
      const I = this.getLayer(), Z = M || I.getCanvas(), Q = Z.getContext(), pe = this._getCanvasCache(), ye = this.getSceneFunc(), H = this.hasShadow();
      let $;
      const X = B === this;
      if (!this.isVisible() && !X)
        return this;
      if (pe) {
        Q.save();
        const q = this.getAbsoluteTransform(B).getMatrix();
        return Q.transform(q[0], q[1], q[2], q[3], q[4], q[5]), this._drawCachedSceneCanvas(Q), Q.restore(), this;
      }
      if (!ye)
        return this;
      if (Q.save(), this._useBufferCanvas()) {
        $ = this.getStage();
        const q = j || $.bufferCanvas, re = q.getContext();
        re.clear(), re.save(), re._applyLineJoin(this);
        const ve = this.getAbsoluteTransform(B).getMatrix();
        re.transform(ve[0], ve[1], ve[2], ve[3], ve[4], ve[5]), ye.call(this, re, this), re.restore();
        const ft = q.pixelRatio;
        H && Q._applyShadow(this), Q._applyOpacity(this), Q._applyGlobalCompositeOperation(this), Q.drawImage(q._canvas, q.x || 0, q.y || 0, q.width / ft, q.height / ft);
      } else {
        if (Q._applyLineJoin(this), !X) {
          const q = this.getAbsoluteTransform(B).getMatrix();
          Q.transform(q[0], q[1], q[2], q[3], q[4], q[5]), Q._applyOpacity(this), Q._applyGlobalCompositeOperation(this);
        }
        H && Q._applyShadow(this), ye.call(this, Q, this);
      }
      return Q.restore(), this;
    }
    drawHit(M, B, j = !1) {
      if (!this.shouldDrawHit(B, j))
        return this;
      const I = this.getLayer(), Z = M || I.hitCanvas, Q = Z && Z.getContext(), pe = this.hitFunc() || this.sceneFunc(), ye = this._getCanvasCache(), H = ye && ye.hit;
      if (this.colorKey || n.Util.warn("Looks like your canvas has a destroyed shape in it. Do not reuse shape after you destroyed it. If you want to reuse shape you should call remove() instead of destroy()"), H) {
        Q.save();
        const X = this.getAbsoluteTransform(B).getMatrix();
        return Q.transform(X[0], X[1], X[2], X[3], X[4], X[5]), this._drawCachedHitCanvas(Q), Q.restore(), this;
      }
      if (!pe)
        return this;
      if (Q.save(), Q._applyLineJoin(this), !(this === B)) {
        const X = this.getAbsoluteTransform(B).getMatrix();
        Q.transform(X[0], X[1], X[2], X[3], X[4], X[5]);
      }
      return pe.call(this, Q, this), Q.restore(), this;
    }
    drawHitFromCache(M = 0) {
      const B = this._getCanvasCache(), j = this._getCachedSceneCanvas(), I = B.hit, Z = I.getContext(), Q = I.getWidth(), pe = I.getHeight();
      Z.clear(), Z.drawImage(j._canvas, 0, 0, Q, pe);
      try {
        const ye = Z.getImageData(0, 0, Q, pe), H = ye.data, $ = H.length, X = n.Util._hexToRgb(this.colorKey);
        for (let q = 0; q < $; q += 4)
          H[q + 3] > M ? (H[q] = X.r, H[q + 1] = X.g, H[q + 2] = X.b, H[q + 3] = 255) : H[q + 3] = 0;
        Z.putImageData(ye, 0, 0);
      } catch (ye) {
        n.Util.error("Unable to draw hit graph from cached scene canvas. " + ye.message);
      }
      return this;
    }
    hasPointerCapture(M) {
      return c.hasPointerCapture(M, this);
    }
    setPointerCapture(M) {
      c.setPointerCapture(M, this);
    }
    releaseCapture(M) {
      c.releaseCapture(M, this);
    }
  }
  t.Shape = R, R.prototype._fillFunc = E, R.prototype._strokeFunc = N, R.prototype._fillFuncHit = k, R.prototype._strokeFuncHit = w, R.prototype._centroid = !1, R.prototype.nodeType = "Shape", (0, a._registerNode)(R), R.prototype.eventListeners = {}, R.prototype.on.call(R.prototype, "shadowColorChange.konva shadowBlurChange.konva shadowOffsetChange.konva shadowOpacityChange.konva shadowEnabledChange.konva", p), R.prototype.on.call(R.prototype, "shadowColorChange.konva shadowOpacityChange.konva shadowEnabledChange.konva", _), R.prototype.on.call(R.prototype, "fillPriorityChange.konva fillPatternImageChange.konva fillPatternRepeatChange.konva fillPatternScaleXChange.konva fillPatternScaleYChange.konva fillPatternOffsetXChange.konva fillPatternOffsetYChange.konva fillPatternXChange.konva fillPatternYChange.konva fillPatternRotationChange.konva", T), R.prototype.on.call(R.prototype, "fillPriorityChange.konva fillLinearGradientColorStopsChange.konva fillLinearGradientStartPointXChange.konva fillLinearGradientStartPointYChange.konva fillLinearGradientEndPointXChange.konva fillLinearGradientEndPointYChange.konva", F), R.prototype.on.call(R.prototype, "fillPriorityChange.konva fillRadialGradientColorStopsChange.konva fillRadialGradientStartPointXChange.konva fillRadialGradientStartPointYChange.konva fillRadialGradientEndPointXChange.konva fillRadialGradientEndPointYChange.konva fillRadialGradientStartRadiusChange.konva fillRadialGradientEndRadiusChange.konva", L), r.Factory.addGetterSetter(R, "stroke", void 0, (0, l.getStringOrGradientValidator)()), r.Factory.addGetterSetter(R, "strokeWidth", 2, (0, l.getNumberValidator)()), r.Factory.addGetterSetter(R, "fillAfterStrokeEnabled", !1), r.Factory.addGetterSetter(R, "hitStrokeWidth", "auto", (0, l.getNumberOrAutoValidator)()), r.Factory.addGetterSetter(R, "strokeHitEnabled", !0, (0, l.getBooleanValidator)()), r.Factory.addGetterSetter(R, "perfectDrawEnabled", !0, (0, l.getBooleanValidator)()), r.Factory.addGetterSetter(R, "shadowForStrokeEnabled", !0, (0, l.getBooleanValidator)()), r.Factory.addGetterSetter(R, "lineJoin"), r.Factory.addGetterSetter(R, "lineCap"), r.Factory.addGetterSetter(R, "sceneFunc"), r.Factory.addGetterSetter(R, "hitFunc"), r.Factory.addGetterSetter(R, "dash"), r.Factory.addGetterSetter(R, "dashOffset", 0, (0, l.getNumberValidator)()), r.Factory.addGetterSetter(R, "shadowColor", void 0, (0, l.getStringValidator)()), r.Factory.addGetterSetter(R, "shadowBlur", 0, (0, l.getNumberValidator)()), r.Factory.addGetterSetter(R, "shadowOpacity", 1, (0, l.getNumberValidator)()), r.Factory.addComponentsGetterSetter(R, "shadowOffset", ["x", "y"]), r.Factory.addGetterSetter(R, "shadowOffsetX", 0, (0, l.getNumberValidator)()), r.Factory.addGetterSetter(R, "shadowOffsetY", 0, (0, l.getNumberValidator)()), r.Factory.addGetterSetter(R, "fillPatternImage"), r.Factory.addGetterSetter(R, "fill", void 0, (0, l.getStringOrGradientValidator)()), r.Factory.addGetterSetter(R, "fillPatternX", 0, (0, l.getNumberValidator)()), r.Factory.addGetterSetter(R, "fillPatternY", 0, (0, l.getNumberValidator)()), r.Factory.addGetterSetter(R, "fillLinearGradientColorStops"), r.Factory.addGetterSetter(R, "strokeLinearGradientColorStops"), r.Factory.addGetterSetter(R, "fillRadialGradientStartRadius", 0), r.Factory.addGetterSetter(R, "fillRadialGradientEndRadius", 0), r.Factory.addGetterSetter(R, "fillRadialGradientColorStops"), r.Factory.addGetterSetter(R, "fillPatternRepeat", "repeat"), r.Factory.addGetterSetter(R, "fillEnabled", !0), r.Factory.addGetterSetter(R, "strokeEnabled", !0), r.Factory.addGetterSetter(R, "shadowEnabled", !0), r.Factory.addGetterSetter(R, "dashEnabled", !0), r.Factory.addGetterSetter(R, "strokeScaleEnabled", !0), r.Factory.addGetterSetter(R, "fillPriority", "color"), r.Factory.addComponentsGetterSetter(R, "fillPatternOffset", ["x", "y"]), r.Factory.addGetterSetter(R, "fillPatternOffsetX", 0, (0, l.getNumberValidator)()), r.Factory.addGetterSetter(R, "fillPatternOffsetY", 0, (0, l.getNumberValidator)()), r.Factory.addComponentsGetterSetter(R, "fillPatternScale", ["x", "y"]), r.Factory.addGetterSetter(R, "fillPatternScaleX", 1, (0, l.getNumberValidator)()), r.Factory.addGetterSetter(R, "fillPatternScaleY", 1, (0, l.getNumberValidator)()), r.Factory.addComponentsGetterSetter(R, "fillLinearGradientStartPoint", [
    "x",
    "y"
  ]), r.Factory.addComponentsGetterSetter(R, "strokeLinearGradientStartPoint", [
    "x",
    "y"
  ]), r.Factory.addGetterSetter(R, "fillLinearGradientStartPointX", 0), r.Factory.addGetterSetter(R, "strokeLinearGradientStartPointX", 0), r.Factory.addGetterSetter(R, "fillLinearGradientStartPointY", 0), r.Factory.addGetterSetter(R, "strokeLinearGradientStartPointY", 0), r.Factory.addComponentsGetterSetter(R, "fillLinearGradientEndPoint", [
    "x",
    "y"
  ]), r.Factory.addComponentsGetterSetter(R, "strokeLinearGradientEndPoint", [
    "x",
    "y"
  ]), r.Factory.addGetterSetter(R, "fillLinearGradientEndPointX", 0), r.Factory.addGetterSetter(R, "strokeLinearGradientEndPointX", 0), r.Factory.addGetterSetter(R, "fillLinearGradientEndPointY", 0), r.Factory.addGetterSetter(R, "strokeLinearGradientEndPointY", 0), r.Factory.addComponentsGetterSetter(R, "fillRadialGradientStartPoint", [
    "x",
    "y"
  ]), r.Factory.addGetterSetter(R, "fillRadialGradientStartPointX", 0), r.Factory.addGetterSetter(R, "fillRadialGradientStartPointY", 0), r.Factory.addComponentsGetterSetter(R, "fillRadialGradientEndPoint", [
    "x",
    "y"
  ]), r.Factory.addGetterSetter(R, "fillRadialGradientEndPointX", 0), r.Factory.addGetterSetter(R, "fillRadialGradientEndPointY", 0), r.Factory.addGetterSetter(R, "fillPatternRotation", 0), r.Factory.addGetterSetter(R, "fillRule", void 0, (0, l.getStringValidator)()), r.Factory.backCompat(R, {
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
})(_t);
Object.defineProperty(Dl, "__esModule", { value: !0 });
Dl.Layer = void 0;
const vr = rt, Jf = Ji, Ps = Ze, a1 = xe, E2 = Kn, H8 = fe, j8 = _t, W8 = Se, K8 = "#", Y8 = "beforeDraw", X8 = "draw", F4 = [
  { x: 0, y: 0 },
  { x: -1, y: -1 },
  { x: 1, y: -1 },
  { x: 1, y: 1 },
  { x: -1, y: 1 }
], Q8 = F4.length;
let ao = class extends Jf.Container {
  constructor(e) {
    super(e), this.canvas = new E2.SceneCanvas(), this.hitCanvas = new E2.HitCanvas({
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
  clear(e) {
    return this.getContext().clear(e), this.getHitCanvas().getContext().clear(e), this;
  }
  setZIndex(e) {
    super.setZIndex(e);
    const n = this.getStage();
    return n && n.content && (n.content.removeChild(this.getNativeCanvasElement()), e < n.children.length - 1 ? n.content.insertBefore(this.getNativeCanvasElement(), n.children[e + 1].getCanvas()._canvas) : n.content.appendChild(this.getNativeCanvasElement())), this;
  }
  moveToTop() {
    Ps.Node.prototype.moveToTop.call(this);
    const e = this.getStage();
    return e && e.content && (e.content.removeChild(this.getNativeCanvasElement()), e.content.appendChild(this.getNativeCanvasElement())), !0;
  }
  moveUp() {
    if (!Ps.Node.prototype.moveUp.call(this))
      return !1;
    const n = this.getStage();
    return !n || !n.content ? !1 : (n.content.removeChild(this.getNativeCanvasElement()), this.index < n.children.length - 1 ? n.content.insertBefore(this.getNativeCanvasElement(), n.children[this.index + 1].getCanvas()._canvas) : n.content.appendChild(this.getNativeCanvasElement()), !0);
  }
  moveDown() {
    if (Ps.Node.prototype.moveDown.call(this)) {
      const e = this.getStage();
      if (e) {
        const n = e.children;
        e.content && (e.content.removeChild(this.getNativeCanvasElement()), e.content.insertBefore(this.getNativeCanvasElement(), n[this.index + 1].getCanvas()._canvas));
      }
      return !0;
    }
    return !1;
  }
  moveToBottom() {
    if (Ps.Node.prototype.moveToBottom.call(this)) {
      const e = this.getStage();
      if (e) {
        const n = e.children;
        e.content && (e.content.removeChild(this.getNativeCanvasElement()), e.content.insertBefore(this.getNativeCanvasElement(), n[1].getCanvas()._canvas));
      }
      return !0;
    }
    return !1;
  }
  getLayer() {
    return this;
  }
  remove() {
    const e = this.getNativeCanvasElement();
    return Ps.Node.prototype.remove.call(this), e && e.parentNode && vr.Util._isInDocument(e) && e.parentNode.removeChild(e), this;
  }
  getStage() {
    return this.parent;
  }
  setSize({ width: e, height: n }) {
    return this.canvas.setSize(e, n), this.hitCanvas.setSize(e, n), this._setSmoothEnabled(), this;
  }
  _validateAdd(e) {
    const n = e.getType();
    n !== "Group" && n !== "Shape" && vr.Util.throw("You may only add groups and shapes to a layer.");
  }
  _toKonvaCanvas(e) {
    return e = e || {}, e.width = e.width || this.getWidth(), e.height = e.height || this.getHeight(), e.x = e.x !== void 0 ? e.x : this.x(), e.y = e.y !== void 0 ? e.y : this.y(), Ps.Node.prototype._toKonvaCanvas.call(this, e);
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
    vr.Util.warn('Can not change width of layer. Use "stage.width(value)" function instead.');
  }
  getHeight() {
    if (this.parent)
      return this.parent.height();
  }
  setHeight() {
    vr.Util.warn('Can not change height of layer. Use "stage.height(value)" function instead.');
  }
  batchDraw() {
    return this._waitingForDraw || (this._waitingForDraw = !0, vr.Util.requestAnimFrame(() => {
      this.draw(), this._waitingForDraw = !1;
    })), this;
  }
  getIntersection(e) {
    if (!this.isListening() || !this.isVisible())
      return null;
    let n = 1, r = !1;
    for (; ; ) {
      for (let o = 0; o < Q8; o++) {
        const l = F4[o], a = this._getIntersection({
          x: e.x + l.x * n,
          y: e.y + l.y * n
        }), c = a.shape;
        if (c)
          return c;
        if (r = !!a.antialiased, !a.antialiased)
          break;
      }
      if (r)
        n += 1;
      else
        return null;
    }
  }
  _getIntersection(e) {
    const n = this.hitCanvas.pixelRatio, r = this.hitCanvas.context.getImageData(Math.round(e.x * n), Math.round(e.y * n), 1, 1).data, o = r[3];
    if (o === 255) {
      const l = vr.Util._rgbToHex(r[0], r[1], r[2]), a = j8.shapes[K8 + l];
      return a ? {
        shape: a
      } : {
        antialiased: !0
      };
    } else if (o > 0)
      return {
        antialiased: !0
      };
    return {};
  }
  drawScene(e, n, r) {
    const o = this.getLayer(), l = e || o && o.getCanvas();
    return this._fire(Y8, {
      node: this
    }), this.clearBeforeDraw() && l.getContext().clear(), Jf.Container.prototype.drawScene.call(this, l, n, r), this._fire(X8, {
      node: this
    }), this;
  }
  drawHit(e, n) {
    const r = this.getLayer(), o = e || r && r.hitCanvas;
    return r && r.clearBeforeDraw() && r.getHitCanvas().getContext().clear(), Jf.Container.prototype.drawHit.call(this, o, n), this;
  }
  enableHitGraph() {
    return this.hitGraphEnabled(!0), this;
  }
  disableHitGraph() {
    return this.hitGraphEnabled(!1), this;
  }
  setHitGraphEnabled(e) {
    vr.Util.warn("hitGraphEnabled method is deprecated. Please use layer.listening() instead."), this.listening(e);
  }
  getHitGraphEnabled(e) {
    return vr.Util.warn("hitGraphEnabled method is deprecated. Please use layer.listening() instead."), this.listening();
  }
  toggleHitCanvas() {
    if (!this.parent || !this.parent.content)
      return;
    const e = this.parent;
    !!this.hitCanvas._canvas.parentNode ? e.content.removeChild(this.hitCanvas._canvas) : e.content.appendChild(this.hitCanvas._canvas);
  }
  destroy() {
    return vr.Util.releaseCanvas(this.getNativeCanvasElement(), this.getHitCanvas()._canvas), super.destroy();
  }
};
Dl.Layer = ao;
ao.prototype.nodeType = "Layer";
(0, W8._registerNode)(ao);
a1.Factory.addGetterSetter(ao, "imageSmoothingEnabled", !0);
a1.Factory.addGetterSetter(ao, "clearBeforeDraw", !0);
a1.Factory.addGetterSetter(ao, "hitGraphEnabled", !0, (0, H8.getBooleanValidator)());
var hc = {};
Object.defineProperty(hc, "__esModule", { value: !0 });
hc.FastLayer = void 0;
const $8 = rt, q8 = Dl, Z8 = Se;
class u1 extends q8.Layer {
  constructor(e) {
    super(e), this.listening(!1), $8.Util.warn('Konva.Fast layer is deprecated. Please use "new Konva.Layer({ listening: false })" instead.');
  }
}
hc.FastLayer = u1;
u1.prototype.nodeType = "FastLayer";
(0, Z8._registerNode)(u1);
var uo = {};
Object.defineProperty(uo, "__esModule", { value: !0 });
uo.Group = void 0;
const J8 = rt, b8 = Ji, e9 = Se;
let c1 = class extends b8.Container {
  _validateAdd(e) {
    const n = e.getType();
    n !== "Group" && n !== "Shape" && J8.Util.throw("You may only add groups and shapes to groups.");
  }
};
uo.Group = c1;
c1.prototype.nodeType = "Group";
(0, e9._registerNode)(c1);
var co = {};
Object.defineProperty(co, "__esModule", { value: !0 });
co.Animation = void 0;
const bf = Se, P2 = rt, eh = function() {
  return bf.glob.performance && bf.glob.performance.now ? function() {
    return bf.glob.performance.now();
  } : function() {
    return (/* @__PURE__ */ new Date()).getTime();
  };
}();
class or {
  constructor(e, n) {
    this.id = or.animIdCounter++, this.frame = {
      time: 0,
      timeDiff: 0,
      lastTime: eh(),
      frameRate: 0
    }, this.func = e, this.setLayers(n);
  }
  setLayers(e) {
    let n = [];
    return e && (n = Array.isArray(e) ? e : [e]), this.layers = n, this;
  }
  getLayers() {
    return this.layers;
  }
  addLayer(e) {
    const n = this.layers, r = n.length;
    for (let o = 0; o < r; o++)
      if (n[o]._id === e._id)
        return !1;
    return this.layers.push(e), !0;
  }
  isRunning() {
    const n = or.animations, r = n.length;
    for (let o = 0; o < r; o++)
      if (n[o].id === this.id)
        return !0;
    return !1;
  }
  start() {
    return this.stop(), this.frame.timeDiff = 0, this.frame.lastTime = eh(), or._addAnimation(this), this;
  }
  stop() {
    return or._removeAnimation(this), this;
  }
  _updateFrameObject(e) {
    this.frame.timeDiff = e - this.frame.lastTime, this.frame.lastTime = e, this.frame.time += this.frame.timeDiff, this.frame.frameRate = 1e3 / this.frame.timeDiff;
  }
  static _addAnimation(e) {
    this.animations.push(e), this._handleAnimation();
  }
  static _removeAnimation(e) {
    const n = e.id, r = this.animations, o = r.length;
    for (let l = 0; l < o; l++)
      if (r[l].id === n) {
        this.animations.splice(l, 1);
        break;
      }
  }
  static _runFrames() {
    const e = {}, n = this.animations;
    for (let r = 0; r < n.length; r++) {
      const o = n[r], l = o.layers, a = o.func;
      o._updateFrameObject(eh());
      const c = l.length;
      let f;
      if (a ? f = a.call(o, o.frame) !== !1 : f = !0, !!f)
        for (let g = 0; g < c; g++) {
          const y = l[g];
          y._id !== void 0 && (e[y._id] = y);
        }
    }
    for (const r in e)
      e.hasOwnProperty(r) && e[r].batchDraw();
  }
  static _animationLoop() {
    const e = or;
    e.animations.length ? (e._runFrames(), P2.Util.requestAnimFrame(e._animationLoop)) : e.animRunning = !1;
  }
  static _handleAnimation() {
    this.animRunning || (this.animRunning = !0, P2.Util.requestAnimFrame(this._animationLoop));
  }
}
co.Animation = or;
or.animations = [];
or.animIdCounter = 0;
or.animRunning = !1;
var M4 = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.Easings = t.Tween = void 0;
  const e = rt, n = co, r = Ze, o = Se, l = {
    node: 1,
    duration: 1,
    easing: 1,
    onFinish: 1,
    yoyo: 1
  }, a = 1, c = 2, f = 3, g = ["fill", "stroke", "shadowColor"];
  let y = 0;
  class C {
    constructor(v, E, N, k, w, p, _) {
      this.prop = v, this.propFunc = E, this.begin = k, this._pos = k, this.duration = p, this._change = 0, this.prevPos = 0, this.yoyo = _, this._time = 0, this._position = 0, this._startTime = 0, this._finish = 0, this.func = N, this._change = w - this.begin, this.pause();
    }
    fire(v) {
      const E = this[v];
      E && E();
    }
    setTime(v) {
      v > this.duration ? this.yoyo ? (this._time = this.duration, this.reverse()) : this.finish() : v < 0 ? this.yoyo ? (this._time = 0, this.play()) : this.reset() : (this._time = v, this.update());
    }
    getTime() {
      return this._time;
    }
    setPosition(v) {
      this.prevPos = this._pos, this.propFunc(v), this._pos = v;
    }
    getPosition(v) {
      return v === void 0 && (v = this._time), this.func(v, this.begin, this._change, this.duration);
    }
    play() {
      this.state = c, this._startTime = this.getTimer() - this._time, this.onEnterFrame(), this.fire("onPlay");
    }
    reverse() {
      this.state = f, this._time = this.duration - this._time, this._startTime = this.getTimer() - this._time, this.onEnterFrame(), this.fire("onReverse");
    }
    seek(v) {
      this.pause(), this._time = v, this.update(), this.fire("onSeek");
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
      const v = this.getTimer() - this._startTime;
      this.state === c ? this.setTime(v) : this.state === f && this.setTime(this.duration - v);
    }
    pause() {
      this.state = a, this.fire("onPause");
    }
    getTimer() {
      return (/* @__PURE__ */ new Date()).getTime();
    }
  }
  class S {
    constructor(v) {
      const E = this, N = v.node, k = N._id, w = v.easing || t.Easings.Linear, p = !!v.yoyo;
      let _, T;
      typeof v.duration > "u" ? _ = 0.3 : v.duration === 0 ? _ = 1e-3 : _ = v.duration, this.node = N, this._id = y++;
      const F = N.getLayer() || (N instanceof o.Konva.Stage ? N.getLayers() : null);
      F || e.Util.error("Tween constructor have `node` that is not in a layer. Please add node into layer first."), this.anim = new n.Animation(function() {
        E.tween.onEnterFrame();
      }, F), this.tween = new C(T, function(L) {
        E._tweenFunc(L);
      }, w, 0, 1, _ * 1e3, p), this._addListeners(), S.attrs[k] || (S.attrs[k] = {}), S.attrs[k][this._id] || (S.attrs[k][this._id] = {}), S.tweens[k] || (S.tweens[k] = {});
      for (T in v)
        l[T] === void 0 && this._addAttr(T, v[T]);
      this.reset(), this.onFinish = v.onFinish, this.onReset = v.onReset, this.onUpdate = v.onUpdate;
    }
    _addAttr(v, E) {
      const N = this.node, k = N._id;
      let w, p, _, T, F;
      const L = S.tweens[k][v];
      L && delete S.attrs[k][L][v];
      let R = N.getAttr(v);
      if (e.Util._isArray(E))
        if (w = [], p = Math.max(E.length, R.length), v === "points" && E.length !== R.length && (E.length > R.length ? (T = R, R = e.Util._prepareArrayForTween(R, E, N.closed())) : (_ = E, E = e.Util._prepareArrayForTween(E, R, N.closed()))), v.indexOf("fill") === 0)
          for (let G = 0; G < p; G++)
            if (G % 2 === 0)
              w.push(E[G] - R[G]);
            else {
              const M = e.Util.colorToRGBA(R[G]);
              F = e.Util.colorToRGBA(E[G]), R[G] = M, w.push({
                r: F.r - M.r,
                g: F.g - M.g,
                b: F.b - M.b,
                a: F.a - M.a
              });
            }
        else
          for (let G = 0; G < p; G++)
            w.push(E[G] - R[G]);
      else g.indexOf(v) !== -1 ? (R = e.Util.colorToRGBA(R), F = e.Util.colorToRGBA(E), w = {
        r: F.r - R.r,
        g: F.g - R.g,
        b: F.b - R.b,
        a: F.a - R.a
      }) : w = E - R;
      S.attrs[k][this._id][v] = {
        start: R,
        diff: w,
        end: E,
        trueEnd: _,
        trueStart: T
      }, S.tweens[k][v] = this._id;
    }
    _tweenFunc(v) {
      const E = this.node, N = S.attrs[E._id][this._id];
      let k, w, p, _, T, F, L, R;
      for (k in N) {
        if (w = N[k], p = w.start, _ = w.diff, R = w.end, e.Util._isArray(p))
          if (T = [], L = Math.max(p.length, R.length), k.indexOf("fill") === 0)
            for (F = 0; F < L; F++)
              F % 2 === 0 ? T.push((p[F] || 0) + _[F] * v) : T.push("rgba(" + Math.round(p[F].r + _[F].r * v) + "," + Math.round(p[F].g + _[F].g * v) + "," + Math.round(p[F].b + _[F].b * v) + "," + (p[F].a + _[F].a * v) + ")");
          else
            for (F = 0; F < L; F++)
              T.push((p[F] || 0) + _[F] * v);
        else g.indexOf(k) !== -1 ? T = "rgba(" + Math.round(p.r + _.r * v) + "," + Math.round(p.g + _.g * v) + "," + Math.round(p.b + _.b * v) + "," + (p.a + _.a * v) + ")" : T = p + _ * v;
        E.setAttr(k, T);
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
        const v = this.node, E = S.attrs[v._id][this._id];
        E.points && E.points.trueEnd && v.setAttr("points", E.points.trueEnd), this.onFinish && this.onFinish.call(this);
      }, this.tween.onReset = () => {
        const v = this.node, E = S.attrs[v._id][this._id];
        E.points && E.points.trueStart && v.points(E.points.trueStart), this.onReset && this.onReset();
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
    seek(v) {
      return this.tween.seek(v * 1e3), this;
    }
    pause() {
      return this.tween.pause(), this;
    }
    finish() {
      return this.tween.finish(), this;
    }
    destroy() {
      const v = this.node._id, E = this._id, N = S.tweens[v];
      this.pause(), this.anim && this.anim.stop();
      for (const k in N)
        delete S.tweens[v][k];
      delete S.attrs[v][E], S.tweens[v] && (Object.keys(S.tweens[v]).length === 0 && delete S.tweens[v], Object.keys(S.attrs[v]).length === 0 && delete S.attrs[v]);
    }
  }
  t.Tween = S, S.attrs = {}, S.tweens = {}, r.Node.prototype.to = function(x) {
    const v = x.onFinish;
    x.node = this, x.onFinish = function() {
      this.destroy(), v && v();
    }, new S(x).play();
  }, t.Easings = {
    BackEaseIn(x, v, E, N) {
      return E * (x /= N) * x * ((1.70158 + 1) * x - 1.70158) + v;
    },
    BackEaseOut(x, v, E, N) {
      return E * ((x = x / N - 1) * x * ((1.70158 + 1) * x + 1.70158) + 1) + v;
    },
    BackEaseInOut(x, v, E, N) {
      let k = 1.70158;
      return (x /= N / 2) < 1 ? E / 2 * (x * x * (((k *= 1.525) + 1) * x - k)) + v : E / 2 * ((x -= 2) * x * (((k *= 1.525) + 1) * x + k) + 2) + v;
    },
    ElasticEaseIn(x, v, E, N, k, w) {
      let p = 0;
      return x === 0 ? v : (x /= N) === 1 ? v + E : (w || (w = N * 0.3), !k || k < Math.abs(E) ? (k = E, p = w / 4) : p = w / (2 * Math.PI) * Math.asin(E / k), -(k * Math.pow(2, 10 * (x -= 1)) * Math.sin((x * N - p) * (2 * Math.PI) / w)) + v);
    },
    ElasticEaseOut(x, v, E, N, k, w) {
      let p = 0;
      return x === 0 ? v : (x /= N) === 1 ? v + E : (w || (w = N * 0.3), !k || k < Math.abs(E) ? (k = E, p = w / 4) : p = w / (2 * Math.PI) * Math.asin(E / k), k * Math.pow(2, -10 * x) * Math.sin((x * N - p) * (2 * Math.PI) / w) + E + v);
    },
    ElasticEaseInOut(x, v, E, N, k, w) {
      let p = 0;
      return x === 0 ? v : (x /= N / 2) === 2 ? v + E : (w || (w = N * (0.3 * 1.5)), !k || k < Math.abs(E) ? (k = E, p = w / 4) : p = w / (2 * Math.PI) * Math.asin(E / k), x < 1 ? -0.5 * (k * Math.pow(2, 10 * (x -= 1)) * Math.sin((x * N - p) * (2 * Math.PI) / w)) + v : k * Math.pow(2, -10 * (x -= 1)) * Math.sin((x * N - p) * (2 * Math.PI) / w) * 0.5 + E + v);
    },
    BounceEaseOut(x, v, E, N) {
      return (x /= N) < 1 / 2.75 ? E * (7.5625 * x * x) + v : x < 2 / 2.75 ? E * (7.5625 * (x -= 1.5 / 2.75) * x + 0.75) + v : x < 2.5 / 2.75 ? E * (7.5625 * (x -= 2.25 / 2.75) * x + 0.9375) + v : E * (7.5625 * (x -= 2.625 / 2.75) * x + 0.984375) + v;
    },
    BounceEaseIn(x, v, E, N) {
      return E - t.Easings.BounceEaseOut(N - x, 0, E, N) + v;
    },
    BounceEaseInOut(x, v, E, N) {
      return x < N / 2 ? t.Easings.BounceEaseIn(x * 2, 0, E, N) * 0.5 + v : t.Easings.BounceEaseOut(x * 2 - N, 0, E, N) * 0.5 + E * 0.5 + v;
    },
    EaseIn(x, v, E, N) {
      return E * (x /= N) * x + v;
    },
    EaseOut(x, v, E, N) {
      return -E * (x /= N) * (x - 2) + v;
    },
    EaseInOut(x, v, E, N) {
      return (x /= N / 2) < 1 ? E / 2 * x * x + v : -E / 2 * (--x * (x - 2) - 1) + v;
    },
    StrongEaseIn(x, v, E, N) {
      return E * (x /= N) * x * x * x * x + v;
    },
    StrongEaseOut(x, v, E, N) {
      return E * ((x = x / N - 1) * x * x * x * x + 1) + v;
    },
    StrongEaseInOut(x, v, E, N) {
      return (x /= N / 2) < 1 ? E / 2 * x * x * x * x * x + v : E / 2 * ((x -= 2) * x * x * x * x + 2) + v;
    },
    Linear(x, v, E, N) {
      return E * x / N + v;
    }
  };
})(M4);
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.Konva = void 0;
  const e = Se, n = rt, r = Ze, o = Ji, l = T4, a = Dl, c = hc, f = uo, g = dc, y = _t, C = co, S = M4, x = Er, v = Kn;
  t.Konva = n.Util._assign(e.Konva, {
    Util: n.Util,
    Transform: n.Transform,
    Node: r.Node,
    Container: o.Container,
    Stage: l.Stage,
    stages: l.stages,
    Layer: a.Layer,
    FastLayer: c.FastLayer,
    Group: f.Group,
    DD: g.DD,
    Shape: y.Shape,
    shapes: y.shapes,
    Animation: C.Animation,
    Tween: S.Tween,
    Easings: S.Easings,
    Context: x.Context,
    Canvas: v.Canvas
  }), t.default = t.Konva;
})(Vu);
var pc = {};
Object.defineProperty(pc, "__esModule", { value: !0 });
pc.Arc = void 0;
const gc = xe, t9 = _t, T2 = Se, mc = fe, n9 = Se;
class Ar extends t9.Shape {
  _sceneFunc(e) {
    const n = T2.Konva.getAngle(this.angle()), r = this.clockwise();
    e.beginPath(), e.arc(0, 0, this.outerRadius(), 0, n, r), e.arc(0, 0, this.innerRadius(), n, 0, !r), e.closePath(), e.fillStrokeShape(this);
  }
  getWidth() {
    return this.outerRadius() * 2;
  }
  getHeight() {
    return this.outerRadius() * 2;
  }
  setWidth(e) {
    this.outerRadius(e / 2);
  }
  setHeight(e) {
    this.outerRadius(e / 2);
  }
  getSelfRect() {
    const e = this.innerRadius(), n = this.outerRadius(), r = this.clockwise(), o = T2.Konva.getAngle(r ? 360 - this.angle() : this.angle()), l = Math.cos(Math.min(o, Math.PI)), a = 1, c = Math.sin(Math.min(Math.max(Math.PI, o), 3 * Math.PI / 2)), f = Math.sin(Math.min(o, Math.PI / 2)), g = l * (l > 0 ? e : n), y = a * n, C = c * (c > 0 ? e : n), S = f * (f > 0 ? n : e);
    return {
      x: g,
      y: r ? -1 * S : C,
      width: y - g,
      height: S - C
    };
  }
}
pc.Arc = Ar;
Ar.prototype._centroid = !0;
Ar.prototype.className = "Arc";
Ar.prototype._attrsAffectingSize = [
  "innerRadius",
  "outerRadius",
  "angle",
  "clockwise"
];
(0, n9._registerNode)(Ar);
gc.Factory.addGetterSetter(Ar, "innerRadius", 0, (0, mc.getNumberValidator)());
gc.Factory.addGetterSetter(Ar, "outerRadius", 0, (0, mc.getNumberValidator)());
gc.Factory.addGetterSetter(Ar, "angle", 0, (0, mc.getNumberValidator)());
gc.Factory.addGetterSetter(Ar, "clockwise", !1, (0, mc.getBooleanValidator)());
var yc = {}, Il = {};
Object.defineProperty(Il, "__esModule", { value: !0 });
Il.Line = void 0;
const vc = xe, r9 = Se, i9 = _t, L4 = fe;
function r0(t, e, n, r, o, l, a) {
  const c = Math.sqrt(Math.pow(n - t, 2) + Math.pow(r - e, 2)), f = Math.sqrt(Math.pow(o - n, 2) + Math.pow(l - r, 2)), g = a * c / (c + f), y = a * f / (c + f), C = n - g * (o - t), S = r - g * (l - e), x = n + y * (o - t), v = r + y * (l - e);
  return [C, S, x, v];
}
function N2(t, e) {
  const n = t.length, r = [];
  for (let o = 2; o < n - 2; o += 2) {
    const l = r0(t[o - 2], t[o - 1], t[o], t[o + 1], t[o + 2], t[o + 3], e);
    isNaN(l[0]) || (r.push(l[0]), r.push(l[1]), r.push(t[o]), r.push(t[o + 1]), r.push(l[2]), r.push(l[3]));
  }
  return r;
}
let gi = class extends i9.Shape {
  constructor(e) {
    super(e), this.on("pointsChange.konva tensionChange.konva closedChange.konva bezierChange.konva", function() {
      this._clearCache("tensionPoints");
    });
  }
  _sceneFunc(e) {
    const n = this.points(), r = n.length, o = this.tension(), l = this.closed(), a = this.bezier();
    if (!r)
      return;
    let c = 0;
    if (e.beginPath(), e.moveTo(n[0], n[1]), o !== 0 && r > 4) {
      const f = this.getTensionPoints(), g = f.length;
      for (c = l ? 0 : 4, l || e.quadraticCurveTo(f[0], f[1], f[2], f[3]); c < g - 2; )
        e.bezierCurveTo(f[c++], f[c++], f[c++], f[c++], f[c++], f[c++]);
      l || e.quadraticCurveTo(f[g - 2], f[g - 1], n[r - 2], n[r - 1]);
    } else if (a)
      for (c = 2; c < r; )
        e.bezierCurveTo(n[c++], n[c++], n[c++], n[c++], n[c++], n[c++]);
    else
      for (c = 2; c < r; c += 2)
        e.lineTo(n[c], n[c + 1]);
    l ? (e.closePath(), e.fillStrokeShape(this)) : e.strokeShape(this);
  }
  getTensionPoints() {
    return this._getCache("tensionPoints", this._getTensionPoints);
  }
  _getTensionPoints() {
    return this.closed() ? this._getTensionPointsClosed() : N2(this.points(), this.tension());
  }
  _getTensionPointsClosed() {
    const e = this.points(), n = e.length, r = this.tension(), o = r0(e[n - 2], e[n - 1], e[0], e[1], e[2], e[3], r), l = r0(e[n - 4], e[n - 3], e[n - 2], e[n - 1], e[0], e[1], r), a = N2(e, r);
    return [o[2], o[3]].concat(a).concat([
      l[0],
      l[1],
      e[n - 2],
      e[n - 1],
      l[2],
      l[3],
      o[0],
      o[1],
      e[0],
      e[1]
    ]);
  }
  getWidth() {
    return this.getSelfRect().width;
  }
  getHeight() {
    return this.getSelfRect().height;
  }
  getSelfRect() {
    let e = this.points();
    if (e.length < 4)
      return {
        x: e[0] || 0,
        y: e[1] || 0,
        width: 0,
        height: 0
      };
    this.tension() !== 0 ? e = [
      e[0],
      e[1],
      ...this._getTensionPoints(),
      e[e.length - 2],
      e[e.length - 1]
    ] : e = this.points();
    let n = e[0], r = e[0], o = e[1], l = e[1], a, c;
    for (let f = 0; f < e.length / 2; f++)
      a = e[f * 2], c = e[f * 2 + 1], n = Math.min(n, a), r = Math.max(r, a), o = Math.min(o, c), l = Math.max(l, c);
    return {
      x: n,
      y: o,
      width: r - n,
      height: l - o
    };
  }
};
Il.Line = gi;
gi.prototype.className = "Line";
gi.prototype._attrsAffectingSize = ["points", "bezier", "tension"];
(0, r9._registerNode)(gi);
vc.Factory.addGetterSetter(gi, "closed", !1);
vc.Factory.addGetterSetter(gi, "bezier", !1);
vc.Factory.addGetterSetter(gi, "tension", 0, (0, L4.getNumberValidator)());
vc.Factory.addGetterSetter(gi, "points", [], (0, L4.getNumberArrayValidator)());
var fo = {}, A4 = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.t2length = t.getQuadraticArcLength = t.getCubicArcLength = t.binomialCoefficients = t.cValues = t.tValues = void 0, t.tValues = [
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
  ], t.cValues = [
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
  ], t.binomialCoefficients = [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1]];
  const e = (a, c, f) => {
    let g, y;
    const S = f / 2;
    g = 0;
    for (let x = 0; x < 20; x++)
      y = S * t.tValues[20][x] + S, g += t.cValues[20][x] * r(a, c, y);
    return S * g;
  };
  t.getCubicArcLength = e;
  const n = (a, c, f) => {
    f === void 0 && (f = 1);
    const g = a[0] - 2 * a[1] + a[2], y = c[0] - 2 * c[1] + c[2], C = 2 * a[1] - 2 * a[0], S = 2 * c[1] - 2 * c[0], x = 4 * (g * g + y * y), v = 4 * (g * C + y * S), E = C * C + S * S;
    if (x === 0)
      return f * Math.sqrt(Math.pow(a[2] - a[0], 2) + Math.pow(c[2] - c[0], 2));
    const N = v / (2 * x), k = E / x, w = f + N, p = k - N * N, _ = w * w + p > 0 ? Math.sqrt(w * w + p) : 0, T = N * N + p > 0 ? Math.sqrt(N * N + p) : 0, F = N + Math.sqrt(N * N + p) !== 0 ? p * Math.log(Math.abs((w + _) / (N + T))) : 0;
    return Math.sqrt(x) / 2 * (w * _ - N * T + F);
  };
  t.getQuadraticArcLength = n;
  function r(a, c, f) {
    const g = o(1, f, a), y = o(1, f, c), C = g * g + y * y;
    return Math.sqrt(C);
  }
  const o = (a, c, f) => {
    const g = f.length - 1;
    let y, C;
    if (g === 0)
      return 0;
    if (a === 0) {
      C = 0;
      for (let S = 0; S <= g; S++)
        C += t.binomialCoefficients[g][S] * Math.pow(1 - c, g - S) * Math.pow(c, S) * f[S];
      return C;
    } else {
      y = new Array(g);
      for (let S = 0; S < g; S++)
        y[S] = g * (f[S + 1] - f[S]);
      return o(a - 1, c, y);
    }
  }, l = (a, c, f) => {
    let g = 1, y = a / c, C = (a - f(y)) / c, S = 0;
    for (; g > 1e-3; ) {
      const x = f(y + C), v = Math.abs(a - x) / c;
      if (v < g)
        g = v, y += C;
      else {
        const E = f(y - C), N = Math.abs(a - E) / c;
        N < g ? (g = N, y -= C) : C /= 2;
      }
      if (S++, S > 500)
        break;
    }
    return y;
  };
  t.t2length = l;
})(A4);
Object.defineProperty(fo, "__esModule", { value: !0 });
fo.Path = void 0;
const s9 = xe, o9 = Se, l9 = _t, Ts = A4;
class mt extends l9.Shape {
  constructor(e) {
    super(e), this.dataArray = [], this.pathLength = 0, this._readDataAttribute(), this.on("dataChange.konva", function() {
      this._readDataAttribute();
    });
  }
  _readDataAttribute() {
    this.dataArray = mt.parsePathData(this.data()), this.pathLength = mt.getPathLength(this.dataArray);
  }
  _sceneFunc(e) {
    const n = this.dataArray;
    e.beginPath();
    let r = !1;
    for (let o = 0; o < n.length; o++) {
      const l = n[o].command, a = n[o].points;
      switch (l) {
        case "L":
          e.lineTo(a[0], a[1]);
          break;
        case "M":
          e.moveTo(a[0], a[1]);
          break;
        case "C":
          e.bezierCurveTo(a[0], a[1], a[2], a[3], a[4], a[5]);
          break;
        case "Q":
          e.quadraticCurveTo(a[0], a[1], a[2], a[3]);
          break;
        case "A":
          const c = a[0], f = a[1], g = a[2], y = a[3], C = a[4], S = a[5], x = a[6], v = a[7], E = g > y ? g : y, N = g > y ? 1 : g / y, k = g > y ? y / g : 1;
          e.translate(c, f), e.rotate(x), e.scale(N, k), e.arc(0, 0, E, C, C + S, 1 - v), e.scale(1 / N, 1 / k), e.rotate(-x), e.translate(-c, -f);
          break;
        case "z":
          r = !0, e.closePath();
          break;
      }
    }
    !r && !this.hasFill() ? e.strokeShape(this) : e.fillStrokeShape(this);
  }
  getSelfRect() {
    let e = [];
    this.dataArray.forEach(function(f) {
      if (f.command === "A") {
        const g = f.points[4], y = f.points[5], C = f.points[4] + y;
        let S = Math.PI / 180;
        if (Math.abs(g - C) < S && (S = Math.abs(g - C)), y < 0)
          for (let x = g - S; x > C; x -= S) {
            const v = mt.getPointOnEllipticalArc(f.points[0], f.points[1], f.points[2], f.points[3], x, 0);
            e.push(v.x, v.y);
          }
        else
          for (let x = g + S; x < C; x += S) {
            const v = mt.getPointOnEllipticalArc(f.points[0], f.points[1], f.points[2], f.points[3], x, 0);
            e.push(v.x, v.y);
          }
      } else if (f.command === "C")
        for (let g = 0; g <= 1; g += 0.01) {
          const y = mt.getPointOnCubicBezier(g, f.start.x, f.start.y, f.points[0], f.points[1], f.points[2], f.points[3], f.points[4], f.points[5]);
          e.push(y.x, y.y);
        }
      else
        e = e.concat(f.points);
    });
    let n = e[0], r = e[0], o = e[1], l = e[1], a, c;
    for (let f = 0; f < e.length / 2; f++)
      a = e[f * 2], c = e[f * 2 + 1], isNaN(a) || (n = Math.min(n, a), r = Math.max(r, a)), isNaN(c) || (o = Math.min(o, c), l = Math.max(l, c));
    return {
      x: n,
      y: o,
      width: r - n,
      height: l - o
    };
  }
  getLength() {
    return this.pathLength;
  }
  getPointAtLength(e) {
    return mt.getPointAtLengthOfDataArray(e, this.dataArray);
  }
  static getLineLength(e, n, r, o) {
    return Math.sqrt((r - e) * (r - e) + (o - n) * (o - n));
  }
  static getPathLength(e) {
    let n = 0;
    for (let r = 0; r < e.length; ++r)
      n += e[r].pathLength;
    return n;
  }
  static getPointAtLengthOfDataArray(e, n) {
    let r, o = 0, l = n.length;
    if (!l)
      return null;
    for (; o < l && e > n[o].pathLength; )
      e -= n[o].pathLength, ++o;
    if (o === l)
      return r = n[o - 1].points.slice(-2), {
        x: r[0],
        y: r[1]
      };
    if (e < 0.01)
      return n[o].command === "M" ? (r = n[o].points.slice(0, 2), {
        x: r[0],
        y: r[1]
      }) : {
        x: n[o].start.x,
        y: n[o].start.y
      };
    const a = n[o], c = a.points;
    switch (a.command) {
      case "L":
        return mt.getPointOnLine(e, a.start.x, a.start.y, c[0], c[1]);
      case "C":
        return mt.getPointOnCubicBezier((0, Ts.t2length)(e, mt.getPathLength(n), (E) => (0, Ts.getCubicArcLength)([a.start.x, c[0], c[2], c[4]], [a.start.y, c[1], c[3], c[5]], E)), a.start.x, a.start.y, c[0], c[1], c[2], c[3], c[4], c[5]);
      case "Q":
        return mt.getPointOnQuadraticBezier((0, Ts.t2length)(e, mt.getPathLength(n), (E) => (0, Ts.getQuadraticArcLength)([a.start.x, c[0], c[2]], [a.start.y, c[1], c[3]], E)), a.start.x, a.start.y, c[0], c[1], c[2], c[3]);
      case "A":
        const f = c[0], g = c[1], y = c[2], C = c[3], S = c[5], x = c[6];
        let v = c[4];
        return v += S * e / a.pathLength, mt.getPointOnEllipticalArc(f, g, y, C, v, x);
    }
    return null;
  }
  static getPointOnLine(e, n, r, o, l, a, c) {
    a = a ?? n, c = c ?? r;
    const f = this.getLineLength(n, r, o, l);
    if (f < 1e-10)
      return { x: n, y: r };
    if (o === n)
      return { x: a, y: c + (l > r ? e : -e) };
    const g = (l - r) / (o - n), y = Math.sqrt(e * e / (1 + g * g)) * (o < n ? -1 : 1), C = g * y;
    if (Math.abs(c - r - g * (a - n)) < 1e-10)
      return { x: a + y, y: c + C };
    const S = ((a - n) * (o - n) + (c - r) * (l - r)) / (f * f), x = n + S * (o - n), v = r + S * (l - r), E = this.getLineLength(a, c, x, v), N = Math.sqrt(e * e - E * E), k = Math.sqrt(N * N / (1 + g * g)) * (o < n ? -1 : 1), w = g * k;
    return { x: x + k, y: v + w };
  }
  static getPointOnCubicBezier(e, n, r, o, l, a, c, f, g) {
    function y(N) {
      return N * N * N;
    }
    function C(N) {
      return 3 * N * N * (1 - N);
    }
    function S(N) {
      return 3 * N * (1 - N) * (1 - N);
    }
    function x(N) {
      return (1 - N) * (1 - N) * (1 - N);
    }
    const v = f * y(e) + a * C(e) + o * S(e) + n * x(e), E = g * y(e) + c * C(e) + l * S(e) + r * x(e);
    return { x: v, y: E };
  }
  static getPointOnQuadraticBezier(e, n, r, o, l, a, c) {
    function f(x) {
      return x * x;
    }
    function g(x) {
      return 2 * x * (1 - x);
    }
    function y(x) {
      return (1 - x) * (1 - x);
    }
    const C = a * f(e) + o * g(e) + n * y(e), S = c * f(e) + l * g(e) + r * y(e);
    return { x: C, y: S };
  }
  static getPointOnEllipticalArc(e, n, r, o, l, a) {
    const c = Math.cos(a), f = Math.sin(a), g = {
      x: r * Math.cos(l),
      y: o * Math.sin(l)
    };
    return {
      x: e + (g.x * c - g.y * f),
      y: n + (g.x * f + g.y * c)
    };
  }
  static parsePathData(e) {
    if (!e)
      return [];
    let n = e;
    const r = [
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
    n = n.replace(new RegExp(" ", "g"), ",");
    for (let C = 0; C < r.length; C++)
      n = n.replace(new RegExp(r[C], "g"), "|" + r[C]);
    const o = n.split("|"), l = [], a = [];
    let c = 0, f = 0;
    const g = /([-+]?((\d+\.\d+)|((\d+)|(\.\d+)))(?:e[-+]?\d+)?)/gi;
    let y;
    for (let C = 1; C < o.length; C++) {
      let S = o[C], x = S.charAt(0);
      for (S = S.slice(1), a.length = 0; y = g.exec(S); )
        a.push(y[0]);
      const v = [];
      for (let E = 0, N = a.length; E < N; E++) {
        if (a[E] === "00") {
          v.push(0, 0);
          continue;
        }
        const k = parseFloat(a[E]);
        isNaN(k) ? v.push(0) : v.push(k);
      }
      for (; v.length > 0 && !isNaN(v[0]); ) {
        let E = "", N = [];
        const k = c, w = f;
        let p, _, T, F, L, R, G, M, B, j;
        switch (x) {
          case "l":
            c += v.shift(), f += v.shift(), E = "L", N.push(c, f);
            break;
          case "L":
            c = v.shift(), f = v.shift(), N.push(c, f);
            break;
          case "m":
            const I = v.shift(), Z = v.shift();
            if (c += I, f += Z, E = "M", l.length > 2 && l[l.length - 1].command === "z") {
              for (let Q = l.length - 2; Q >= 0; Q--)
                if (l[Q].command === "M") {
                  c = l[Q].points[0] + I, f = l[Q].points[1] + Z;
                  break;
                }
            }
            N.push(c, f), x = "l";
            break;
          case "M":
            c = v.shift(), f = v.shift(), E = "M", N.push(c, f), x = "L";
            break;
          case "h":
            c += v.shift(), E = "L", N.push(c, f);
            break;
          case "H":
            c = v.shift(), E = "L", N.push(c, f);
            break;
          case "v":
            f += v.shift(), E = "L", N.push(c, f);
            break;
          case "V":
            f = v.shift(), E = "L", N.push(c, f);
            break;
          case "C":
            N.push(v.shift(), v.shift(), v.shift(), v.shift()), c = v.shift(), f = v.shift(), N.push(c, f);
            break;
          case "c":
            N.push(c + v.shift(), f + v.shift(), c + v.shift(), f + v.shift()), c += v.shift(), f += v.shift(), E = "C", N.push(c, f);
            break;
          case "S":
            _ = c, T = f, p = l[l.length - 1], p.command === "C" && (_ = c + (c - p.points[2]), T = f + (f - p.points[3])), N.push(_, T, v.shift(), v.shift()), c = v.shift(), f = v.shift(), E = "C", N.push(c, f);
            break;
          case "s":
            _ = c, T = f, p = l[l.length - 1], p.command === "C" && (_ = c + (c - p.points[2]), T = f + (f - p.points[3])), N.push(_, T, c + v.shift(), f + v.shift()), c += v.shift(), f += v.shift(), E = "C", N.push(c, f);
            break;
          case "Q":
            N.push(v.shift(), v.shift()), c = v.shift(), f = v.shift(), N.push(c, f);
            break;
          case "q":
            N.push(c + v.shift(), f + v.shift()), c += v.shift(), f += v.shift(), E = "Q", N.push(c, f);
            break;
          case "T":
            _ = c, T = f, p = l[l.length - 1], p.command === "Q" && (_ = c + (c - p.points[0]), T = f + (f - p.points[1])), c = v.shift(), f = v.shift(), E = "Q", N.push(_, T, c, f);
            break;
          case "t":
            _ = c, T = f, p = l[l.length - 1], p.command === "Q" && (_ = c + (c - p.points[0]), T = f + (f - p.points[1])), c += v.shift(), f += v.shift(), E = "Q", N.push(_, T, c, f);
            break;
          case "A":
            F = v.shift(), L = v.shift(), R = v.shift(), G = v.shift(), M = v.shift(), B = c, j = f, c = v.shift(), f = v.shift(), E = "A", N = this.convertEndpointToCenterParameterization(B, j, c, f, G, M, F, L, R);
            break;
          case "a":
            F = v.shift(), L = v.shift(), R = v.shift(), G = v.shift(), M = v.shift(), B = c, j = f, c += v.shift(), f += v.shift(), E = "A", N = this.convertEndpointToCenterParameterization(B, j, c, f, G, M, F, L, R);
            break;
        }
        l.push({
          command: E || x,
          points: N,
          start: {
            x: k,
            y: w
          },
          pathLength: this.calcLength(k, w, E || x, N)
        });
      }
      (x === "z" || x === "Z") && l.push({
        command: "z",
        points: [],
        start: void 0,
        pathLength: 0
      });
    }
    return l;
  }
  static calcLength(e, n, r, o) {
    let l, a, c, f;
    const g = mt;
    switch (r) {
      case "L":
        return g.getLineLength(e, n, o[0], o[1]);
      case "C":
        return (0, Ts.getCubicArcLength)([e, o[0], o[2], o[4]], [n, o[1], o[3], o[5]], 1);
      case "Q":
        return (0, Ts.getQuadraticArcLength)([e, o[0], o[2]], [n, o[1], o[3]], 1);
      case "A":
        l = 0;
        const y = o[4], C = o[5], S = o[4] + C;
        let x = Math.PI / 180;
        if (Math.abs(y - S) < x && (x = Math.abs(y - S)), a = g.getPointOnEllipticalArc(o[0], o[1], o[2], o[3], y, 0), C < 0)
          for (f = y - x; f > S; f -= x)
            c = g.getPointOnEllipticalArc(o[0], o[1], o[2], o[3], f, 0), l += g.getLineLength(a.x, a.y, c.x, c.y), a = c;
        else
          for (f = y + x; f < S; f += x)
            c = g.getPointOnEllipticalArc(o[0], o[1], o[2], o[3], f, 0), l += g.getLineLength(a.x, a.y, c.x, c.y), a = c;
        return c = g.getPointOnEllipticalArc(o[0], o[1], o[2], o[3], S, 0), l += g.getLineLength(a.x, a.y, c.x, c.y), l;
    }
    return 0;
  }
  static convertEndpointToCenterParameterization(e, n, r, o, l, a, c, f, g) {
    const y = g * (Math.PI / 180), C = Math.cos(y) * (e - r) / 2 + Math.sin(y) * (n - o) / 2, S = -1 * Math.sin(y) * (e - r) / 2 + Math.cos(y) * (n - o) / 2, x = C * C / (c * c) + S * S / (f * f);
    x > 1 && (c *= Math.sqrt(x), f *= Math.sqrt(x));
    let v = Math.sqrt((c * c * (f * f) - c * c * (S * S) - f * f * (C * C)) / (c * c * (S * S) + f * f * (C * C)));
    l === a && (v *= -1), isNaN(v) && (v = 0);
    const E = v * c * S / f, N = v * -f * C / c, k = (e + r) / 2 + Math.cos(y) * E - Math.sin(y) * N, w = (n + o) / 2 + Math.sin(y) * E + Math.cos(y) * N, p = function(M) {
      return Math.sqrt(M[0] * M[0] + M[1] * M[1]);
    }, _ = function(M, B) {
      return (M[0] * B[0] + M[1] * B[1]) / (p(M) * p(B));
    }, T = function(M, B) {
      return (M[0] * B[1] < M[1] * B[0] ? -1 : 1) * Math.acos(_(M, B));
    }, F = T([1, 0], [(C - E) / c, (S - N) / f]), L = [(C - E) / c, (S - N) / f], R = [(-1 * C - E) / c, (-1 * S - N) / f];
    let G = T(L, R);
    return _(L, R) <= -1 && (G = Math.PI), _(L, R) >= 1 && (G = 0), a === 0 && G > 0 && (G = G - 2 * Math.PI), a === 1 && G < 0 && (G = G + 2 * Math.PI), [k, w, c, f, F, G, y, a];
  }
}
fo.Path = mt;
mt.prototype.className = "Path";
mt.prototype._attrsAffectingSize = ["data"];
(0, o9._registerNode)(mt);
s9.Factory.addGetterSetter(mt, "data");
Object.defineProperty(yc, "__esModule", { value: !0 });
yc.Arrow = void 0;
const _c = xe, a9 = Il, O4 = fe, u9 = Se, R2 = fo;
class es extends a9.Line {
  _sceneFunc(e) {
    super._sceneFunc(e);
    const n = Math.PI * 2, r = this.points();
    let o = r;
    const l = this.tension() !== 0 && r.length > 4;
    l && (o = this.getTensionPoints());
    const a = this.pointerLength(), c = r.length;
    let f, g;
    if (l) {
      const S = [
        o[o.length - 4],
        o[o.length - 3],
        o[o.length - 2],
        o[o.length - 1],
        r[c - 2],
        r[c - 1]
      ], x = R2.Path.calcLength(o[o.length - 4], o[o.length - 3], "C", S), v = R2.Path.getPointOnQuadraticBezier(Math.min(1, 1 - a / x), S[0], S[1], S[2], S[3], S[4], S[5]);
      f = r[c - 2] - v.x, g = r[c - 1] - v.y;
    } else
      f = r[c - 2] - r[c - 4], g = r[c - 1] - r[c - 3];
    const y = (Math.atan2(g, f) + n) % n, C = this.pointerWidth();
    this.pointerAtEnding() && (e.save(), e.beginPath(), e.translate(r[c - 2], r[c - 1]), e.rotate(y), e.moveTo(0, 0), e.lineTo(-a, C / 2), e.lineTo(-a, -C / 2), e.closePath(), e.restore(), this.__fillStroke(e)), this.pointerAtBeginning() && (e.save(), e.beginPath(), e.translate(r[0], r[1]), l ? (f = (o[0] + o[2]) / 2 - r[0], g = (o[1] + o[3]) / 2 - r[1]) : (f = r[2] - r[0], g = r[3] - r[1]), e.rotate((Math.atan2(-g, -f) + n) % n), e.moveTo(0, 0), e.lineTo(-a, C / 2), e.lineTo(-a, -C / 2), e.closePath(), e.restore(), this.__fillStroke(e));
  }
  __fillStroke(e) {
    const n = this.dashEnabled();
    n && (this.attrs.dashEnabled = !1, e.setLineDash([])), e.fillStrokeShape(this), n && (this.attrs.dashEnabled = !0);
  }
  getSelfRect() {
    const e = super.getSelfRect(), n = this.pointerWidth() / 2;
    return {
      x: e.x,
      y: e.y - n,
      width: e.width,
      height: e.height + n * 2
    };
  }
}
yc.Arrow = es;
es.prototype.className = "Arrow";
(0, u9._registerNode)(es);
_c.Factory.addGetterSetter(es, "pointerLength", 10, (0, O4.getNumberValidator)());
_c.Factory.addGetterSetter(es, "pointerWidth", 10, (0, O4.getNumberValidator)());
_c.Factory.addGetterSetter(es, "pointerAtBeginning", !1);
_c.Factory.addGetterSetter(es, "pointerAtEnding", !0);
var Sc = {};
Object.defineProperty(Sc, "__esModule", { value: !0 });
Sc.Circle = void 0;
const c9 = xe, d9 = _t, f9 = fe, h9 = Se;
let ho = class extends d9.Shape {
  _sceneFunc(e) {
    e.beginPath(), e.arc(0, 0, this.attrs.radius || 0, 0, Math.PI * 2, !1), e.closePath(), e.fillStrokeShape(this);
  }
  getWidth() {
    return this.radius() * 2;
  }
  getHeight() {
    return this.radius() * 2;
  }
  setWidth(e) {
    this.radius() !== e / 2 && this.radius(e / 2);
  }
  setHeight(e) {
    this.radius() !== e / 2 && this.radius(e / 2);
  }
};
Sc.Circle = ho;
ho.prototype._centroid = !0;
ho.prototype.className = "Circle";
ho.prototype._attrsAffectingSize = ["radius"];
(0, h9._registerNode)(ho);
c9.Factory.addGetterSetter(ho, "radius", 0, (0, f9.getNumberValidator)());
var wc = {};
Object.defineProperty(wc, "__esModule", { value: !0 });
wc.Ellipse = void 0;
const d1 = xe, p9 = _t, D4 = fe, g9 = Se;
class mi extends p9.Shape {
  _sceneFunc(e) {
    const n = this.radiusX(), r = this.radiusY();
    e.beginPath(), e.save(), n !== r && e.scale(1, r / n), e.arc(0, 0, n, 0, Math.PI * 2, !1), e.restore(), e.closePath(), e.fillStrokeShape(this);
  }
  getWidth() {
    return this.radiusX() * 2;
  }
  getHeight() {
    return this.radiusY() * 2;
  }
  setWidth(e) {
    this.radiusX(e / 2);
  }
  setHeight(e) {
    this.radiusY(e / 2);
  }
}
wc.Ellipse = mi;
mi.prototype.className = "Ellipse";
mi.prototype._centroid = !0;
mi.prototype._attrsAffectingSize = ["radiusX", "radiusY"];
(0, g9._registerNode)(mi);
d1.Factory.addComponentsGetterSetter(mi, "radius", ["x", "y"]);
d1.Factory.addGetterSetter(mi, "radiusX", 0, (0, D4.getNumberValidator)());
d1.Factory.addGetterSetter(mi, "radiusY", 0, (0, D4.getNumberValidator)());
var xc = {};
Object.defineProperty(xc, "__esModule", { value: !0 });
xc.Image = void 0;
const th = rt, ts = xe, m9 = _t, y9 = Se, zl = fe;
let ur = class I4 extends m9.Shape {
  constructor(e) {
    super(e), this._loadListener = () => {
      this._requestDraw();
    }, this.on("imageChange.konva", (n) => {
      this._removeImageLoad(n.oldVal), this._setImageLoad();
    }), this._setImageLoad();
  }
  _setImageLoad() {
    const e = this.image();
    e && e.complete || e && e.readyState === 4 || e && e.addEventListener && e.addEventListener("load", this._loadListener);
  }
  _removeImageLoad(e) {
    e && e.removeEventListener && e.removeEventListener("load", this._loadListener);
  }
  destroy() {
    return this._removeImageLoad(this.image()), super.destroy(), this;
  }
  _useBufferCanvas() {
    const e = !!this.cornerRadius(), n = this.hasShadow();
    return e && n ? !0 : super._useBufferCanvas(!0);
  }
  _sceneFunc(e) {
    const n = this.getWidth(), r = this.getHeight(), o = this.cornerRadius(), l = this.attrs.image;
    let a;
    if (l) {
      const c = this.attrs.cropWidth, f = this.attrs.cropHeight;
      c && f ? a = [
        l,
        this.cropX(),
        this.cropY(),
        c,
        f,
        0,
        0,
        n,
        r
      ] : a = [l, 0, 0, n, r];
    }
    (this.hasFill() || this.hasStroke() || o) && (e.beginPath(), o ? th.Util.drawRoundedRectPath(e, n, r, o) : e.rect(0, 0, n, r), e.closePath(), e.fillStrokeShape(this)), l && (o && e.clip(), e.drawImage.apply(e, a));
  }
  _hitFunc(e) {
    const n = this.width(), r = this.height(), o = this.cornerRadius();
    e.beginPath(), o ? th.Util.drawRoundedRectPath(e, n, r, o) : e.rect(0, 0, n, r), e.closePath(), e.fillStrokeShape(this);
  }
  getWidth() {
    var e, n;
    return (e = this.attrs.width) !== null && e !== void 0 ? e : (n = this.image()) === null || n === void 0 ? void 0 : n.width;
  }
  getHeight() {
    var e, n;
    return (e = this.attrs.height) !== null && e !== void 0 ? e : (n = this.image()) === null || n === void 0 ? void 0 : n.height;
  }
  static fromURL(e, n, r = null) {
    const o = th.Util.createImageElement();
    o.onload = function() {
      const l = new I4({
        image: o
      });
      n(l);
    }, o.onerror = r, o.crossOrigin = "Anonymous", o.src = e;
  }
};
xc.Image = ur;
ur.prototype.className = "Image";
(0, y9._registerNode)(ur);
ts.Factory.addGetterSetter(ur, "cornerRadius", 0, (0, zl.getNumberOrArrayOfNumbersValidator)(4));
ts.Factory.addGetterSetter(ur, "image");
ts.Factory.addComponentsGetterSetter(ur, "crop", ["x", "y", "width", "height"]);
ts.Factory.addGetterSetter(ur, "cropX", 0, (0, zl.getNumberValidator)());
ts.Factory.addGetterSetter(ur, "cropY", 0, (0, zl.getNumberValidator)());
ts.Factory.addGetterSetter(ur, "cropWidth", 0, (0, zl.getNumberValidator)());
ts.Factory.addGetterSetter(ur, "cropHeight", 0, (0, zl.getNumberValidator)());
var to = {};
Object.defineProperty(to, "__esModule", { value: !0 });
to.Tag = to.Label = void 0;
const Cc = xe, v9 = _t, _9 = uo, f1 = fe, z4 = Se, G4 = [
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
], S9 = "Change.konva", w9 = "none", i0 = "up", s0 = "right", o0 = "down", l0 = "left", x9 = G4.length;
class h1 extends _9.Group {
  constructor(e) {
    super(e), this.on("add.konva", function(n) {
      this._addListeners(n.child), this._sync();
    });
  }
  getText() {
    return this.find("Text")[0];
  }
  getTag() {
    return this.find("Tag")[0];
  }
  _addListeners(e) {
    let n = this, r;
    const o = function() {
      n._sync();
    };
    for (r = 0; r < x9; r++)
      e.on(G4[r] + S9, o);
  }
  getWidth() {
    return this.getText().width();
  }
  getHeight() {
    return this.getText().height();
  }
  _sync() {
    let e = this.getText(), n = this.getTag(), r, o, l, a, c, f, g;
    if (e && n) {
      switch (r = e.width(), o = e.height(), l = n.pointerDirection(), a = n.pointerWidth(), g = n.pointerHeight(), c = 0, f = 0, l) {
        case i0:
          c = r / 2, f = -1 * g;
          break;
        case s0:
          c = r + a, f = o / 2;
          break;
        case o0:
          c = r / 2, f = o + g;
          break;
        case l0:
          c = -1 * a, f = o / 2;
          break;
      }
      n.setAttrs({
        x: -1 * c,
        y: -1 * f,
        width: r,
        height: o
      }), e.setAttrs({
        x: -1 * c,
        y: -1 * f
      });
    }
  }
}
to.Label = h1;
h1.prototype.className = "Label";
(0, z4._registerNode)(h1);
class ns extends v9.Shape {
  _sceneFunc(e) {
    const n = this.width(), r = this.height(), o = this.pointerDirection(), l = this.pointerWidth(), a = this.pointerHeight(), c = this.cornerRadius();
    let f = 0, g = 0, y = 0, C = 0;
    typeof c == "number" ? f = g = y = C = Math.min(c, n / 2, r / 2) : (f = Math.min(c[0] || 0, n / 2, r / 2), g = Math.min(c[1] || 0, n / 2, r / 2), C = Math.min(c[2] || 0, n / 2, r / 2), y = Math.min(c[3] || 0, n / 2, r / 2)), e.beginPath(), e.moveTo(f, 0), o === i0 && (e.lineTo((n - l) / 2, 0), e.lineTo(n / 2, -1 * a), e.lineTo((n + l) / 2, 0)), e.lineTo(n - g, 0), e.arc(n - g, g, g, Math.PI * 3 / 2, 0, !1), o === s0 && (e.lineTo(n, (r - a) / 2), e.lineTo(n + l, r / 2), e.lineTo(n, (r + a) / 2)), e.lineTo(n, r - C), e.arc(n - C, r - C, C, 0, Math.PI / 2, !1), o === o0 && (e.lineTo((n + l) / 2, r), e.lineTo(n / 2, r + a), e.lineTo((n - l) / 2, r)), e.lineTo(y, r), e.arc(y, r - y, y, Math.PI / 2, Math.PI, !1), o === l0 && (e.lineTo(0, (r + a) / 2), e.lineTo(-1 * l, r / 2), e.lineTo(0, (r - a) / 2)), e.lineTo(0, f), e.arc(f, f, f, Math.PI, Math.PI * 3 / 2, !1), e.closePath(), e.fillStrokeShape(this);
  }
  getSelfRect() {
    let e = 0, n = 0, r = this.pointerWidth(), o = this.pointerHeight(), l = this.pointerDirection(), a = this.width(), c = this.height();
    return l === i0 ? (n -= o, c += o) : l === o0 ? c += o : l === l0 ? (e -= r * 1.5, a += r) : l === s0 && (a += r * 1.5), {
      x: e,
      y: n,
      width: a,
      height: c
    };
  }
}
to.Tag = ns;
ns.prototype.className = "Tag";
(0, z4._registerNode)(ns);
Cc.Factory.addGetterSetter(ns, "pointerDirection", w9);
Cc.Factory.addGetterSetter(ns, "pointerWidth", 0, (0, f1.getNumberValidator)());
Cc.Factory.addGetterSetter(ns, "pointerHeight", 0, (0, f1.getNumberValidator)());
Cc.Factory.addGetterSetter(ns, "cornerRadius", 0, (0, f1.getNumberOrArrayOfNumbersValidator)(4));
var Gl = {};
Object.defineProperty(Gl, "__esModule", { value: !0 });
Gl.Rect = void 0;
const C9 = xe, k9 = _t, E9 = Se, P9 = rt, T9 = fe;
let kc = class extends k9.Shape {
  _sceneFunc(e) {
    const n = this.cornerRadius(), r = this.width(), o = this.height();
    e.beginPath(), n ? P9.Util.drawRoundedRectPath(e, r, o, n) : e.rect(0, 0, r, o), e.closePath(), e.fillStrokeShape(this);
  }
};
Gl.Rect = kc;
kc.prototype.className = "Rect";
(0, E9._registerNode)(kc);
C9.Factory.addGetterSetter(kc, "cornerRadius", 0, (0, T9.getNumberOrArrayOfNumbersValidator)(4));
var Ec = {};
Object.defineProperty(Ec, "__esModule", { value: !0 });
Ec.RegularPolygon = void 0;
const U4 = xe, N9 = _t, B4 = fe, R9 = Se;
class rs extends N9.Shape {
  _sceneFunc(e) {
    const n = this._getPoints();
    e.beginPath(), e.moveTo(n[0].x, n[0].y);
    for (let r = 1; r < n.length; r++)
      e.lineTo(n[r].x, n[r].y);
    e.closePath(), e.fillStrokeShape(this);
  }
  _getPoints() {
    const e = this.attrs.sides, n = this.attrs.radius || 0, r = [];
    for (let o = 0; o < e; o++)
      r.push({
        x: n * Math.sin(o * 2 * Math.PI / e),
        y: -1 * n * Math.cos(o * 2 * Math.PI / e)
      });
    return r;
  }
  getSelfRect() {
    const e = this._getPoints();
    let n = e[0].x, r = e[0].y, o = e[0].x, l = e[0].y;
    return e.forEach((a) => {
      n = Math.min(n, a.x), r = Math.max(r, a.x), o = Math.min(o, a.y), l = Math.max(l, a.y);
    }), {
      x: n,
      y: o,
      width: r - n,
      height: l - o
    };
  }
  getWidth() {
    return this.radius() * 2;
  }
  getHeight() {
    return this.radius() * 2;
  }
  setWidth(e) {
    this.radius(e / 2);
  }
  setHeight(e) {
    this.radius(e / 2);
  }
}
Ec.RegularPolygon = rs;
rs.prototype.className = "RegularPolygon";
rs.prototype._centroid = !0;
rs.prototype._attrsAffectingSize = ["radius"];
(0, R9._registerNode)(rs);
U4.Factory.addGetterSetter(rs, "radius", 0, (0, B4.getNumberValidator)());
U4.Factory.addGetterSetter(rs, "sides", 0, (0, B4.getNumberValidator)());
var Pc = {};
Object.defineProperty(Pc, "__esModule", { value: !0 });
Pc.Ring = void 0;
const V4 = xe, F9 = _t, H4 = fe, M9 = Se, F2 = Math.PI * 2;
class is extends F9.Shape {
  _sceneFunc(e) {
    e.beginPath(), e.arc(0, 0, this.innerRadius(), 0, F2, !1), e.moveTo(this.outerRadius(), 0), e.arc(0, 0, this.outerRadius(), F2, 0, !0), e.closePath(), e.fillStrokeShape(this);
  }
  getWidth() {
    return this.outerRadius() * 2;
  }
  getHeight() {
    return this.outerRadius() * 2;
  }
  setWidth(e) {
    this.outerRadius(e / 2);
  }
  setHeight(e) {
    this.outerRadius(e / 2);
  }
}
Pc.Ring = is;
is.prototype.className = "Ring";
is.prototype._centroid = !0;
is.prototype._attrsAffectingSize = ["innerRadius", "outerRadius"];
(0, M9._registerNode)(is);
V4.Factory.addGetterSetter(is, "innerRadius", 0, (0, H4.getNumberValidator)());
V4.Factory.addGetterSetter(is, "outerRadius", 0, (0, H4.getNumberValidator)());
var Tc = {};
Object.defineProperty(Tc, "__esModule", { value: !0 });
Tc.Sprite = void 0;
const ss = xe, L9 = _t, A9 = co, j4 = fe, O9 = Se;
class cr extends L9.Shape {
  constructor(e) {
    super(e), this._updated = !0, this.anim = new A9.Animation(() => {
      const n = this._updated;
      return this._updated = !1, n;
    }), this.on("animationChange.konva", function() {
      this.frameIndex(0);
    }), this.on("frameIndexChange.konva", function() {
      this._updated = !0;
    }), this.on("frameRateChange.konva", function() {
      this.anim.isRunning() && (clearInterval(this.interval), this._setInterval());
    });
  }
  _sceneFunc(e) {
    const n = this.animation(), r = this.frameIndex(), o = r * 4, l = this.animations()[n], a = this.frameOffsets(), c = l[o + 0], f = l[o + 1], g = l[o + 2], y = l[o + 3], C = this.image();
    if ((this.hasFill() || this.hasStroke()) && (e.beginPath(), e.rect(0, 0, g, y), e.closePath(), e.fillStrokeShape(this)), C)
      if (a) {
        const S = a[n], x = r * 2;
        e.drawImage(C, c, f, g, y, S[x + 0], S[x + 1], g, y);
      } else
        e.drawImage(C, c, f, g, y, 0, 0, g, y);
  }
  _hitFunc(e) {
    const n = this.animation(), r = this.frameIndex(), o = r * 4, l = this.animations()[n], a = this.frameOffsets(), c = l[o + 2], f = l[o + 3];
    if (e.beginPath(), a) {
      const g = a[n], y = r * 2;
      e.rect(g[y + 0], g[y + 1], c, f);
    } else
      e.rect(0, 0, c, f);
    e.closePath(), e.fillShape(this);
  }
  _useBufferCanvas() {
    return super._useBufferCanvas(!0);
  }
  _setInterval() {
    const e = this;
    this.interval = setInterval(function() {
      e._updateIndex();
    }, 1e3 / this.frameRate());
  }
  start() {
    if (this.isRunning())
      return;
    const e = this.getLayer();
    this.anim.setLayers(e), this._setInterval(), this.anim.start();
  }
  stop() {
    this.anim.stop(), clearInterval(this.interval);
  }
  isRunning() {
    return this.anim.isRunning();
  }
  _updateIndex() {
    const e = this.frameIndex(), n = this.animation(), r = this.animations(), o = r[n], l = o.length / 4;
    e < l - 1 ? this.frameIndex(e + 1) : this.frameIndex(0);
  }
}
Tc.Sprite = cr;
cr.prototype.className = "Sprite";
(0, O9._registerNode)(cr);
ss.Factory.addGetterSetter(cr, "animation");
ss.Factory.addGetterSetter(cr, "animations");
ss.Factory.addGetterSetter(cr, "frameOffsets");
ss.Factory.addGetterSetter(cr, "image");
ss.Factory.addGetterSetter(cr, "frameIndex", 0, (0, j4.getNumberValidator)());
ss.Factory.addGetterSetter(cr, "frameRate", 17, (0, j4.getNumberValidator)());
ss.Factory.backCompat(cr, {
  index: "frameIndex",
  getIndex: "getFrameIndex",
  setIndex: "setFrameIndex"
});
var Nc = {};
Object.defineProperty(Nc, "__esModule", { value: !0 });
Nc.Star = void 0;
const p1 = xe, D9 = _t, g1 = fe, I9 = Se;
class yi extends D9.Shape {
  _sceneFunc(e) {
    const n = this.innerRadius(), r = this.outerRadius(), o = this.numPoints();
    e.beginPath(), e.moveTo(0, 0 - r);
    for (let l = 1; l < o * 2; l++) {
      const a = l % 2 === 0 ? r : n, c = a * Math.sin(l * Math.PI / o), f = -1 * a * Math.cos(l * Math.PI / o);
      e.lineTo(c, f);
    }
    e.closePath(), e.fillStrokeShape(this);
  }
  getWidth() {
    return this.outerRadius() * 2;
  }
  getHeight() {
    return this.outerRadius() * 2;
  }
  setWidth(e) {
    this.outerRadius(e / 2);
  }
  setHeight(e) {
    this.outerRadius(e / 2);
  }
}
Nc.Star = yi;
yi.prototype.className = "Star";
yi.prototype._centroid = !0;
yi.prototype._attrsAffectingSize = ["innerRadius", "outerRadius"];
(0, I9._registerNode)(yi);
p1.Factory.addGetterSetter(yi, "numPoints", 5, (0, g1.getNumberValidator)());
p1.Factory.addGetterSetter(yi, "innerRadius", 0, (0, g1.getNumberValidator)());
p1.Factory.addGetterSetter(yi, "outerRadius", 0, (0, g1.getNumberValidator)());
var po = {};
Object.defineProperty(po, "__esModule", { value: !0 });
po.Text = void 0;
po.stringToArray = Ui;
const a0 = rt, Vt = xe, z9 = _t, nh = Se, vi = fe, G9 = Se;
function Ui(t) {
  return [...t].reduce((e, n, r, o) => {
    if (new RegExp("\\p{Emoji}", "u").test(n)) {
      const l = o[r + 1];
      l && new RegExp("\\p{Emoji_Modifier}|\\u200D", "u").test(l) ? (e.push(n + l), o[r + 1] = "") : e.push(n);
    } else new RegExp("\\p{Regional_Indicator}{2}", "u").test(n + (o[r + 1] || "")) ? e.push(n + o[r + 1]) : r > 0 && new RegExp("\\p{Mn}|\\p{Me}|\\p{Mc}", "u").test(n) ? e[e.length - 1] += n : n && e.push(n);
    return e;
  }, []);
}
const Ns = "auto", U9 = "center", W4 = "inherit", Ho = "justify", B9 = "Change.konva", V9 = "2d", M2 = "-", K4 = "left", H9 = "text", j9 = "Text", W9 = "top", K9 = "bottom", L2 = "middle", Y4 = "normal", Y9 = "px ", Ja = " ", X9 = "right", A2 = "rtl", Q9 = "word", $9 = "char", O2 = "none", rh = "…", X4 = [
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
], q9 = X4.length;
function Z9(t) {
  return t.split(",").map((e) => {
    e = e.trim();
    const n = e.indexOf(" ") >= 0, r = e.indexOf('"') >= 0 || e.indexOf("'") >= 0;
    return n && !r && (e = `"${e}"`), e;
  }).join(", ");
}
let ba;
function ih() {
  return ba || (ba = a0.Util.createCanvasElement().getContext(V9), ba);
}
function J9(t) {
  t.fillText(this._partialText, this._partialTextX, this._partialTextY);
}
function b9(t) {
  t.setAttr("miterLimit", 2), t.strokeText(this._partialText, this._partialTextX, this._partialTextY);
}
function e7(t) {
  return t = t || {}, !t.fillLinearGradientColorStops && !t.fillRadialGradientColorStops && !t.fillPatternImage && (t.fill = t.fill || "black"), t;
}
class ot extends z9.Shape {
  constructor(e) {
    super(e7(e)), this._partialTextX = 0, this._partialTextY = 0;
    for (let n = 0; n < q9; n++)
      this.on(X4[n] + B9, this._setTextData);
    this._setTextData();
  }
  _sceneFunc(e) {
    const n = this.textArr, r = n.length;
    if (!this.text())
      return;
    let o = this.padding(), l = this.fontSize(), a = this.lineHeight() * l, c = this.verticalAlign(), f = this.direction(), g = 0, y = this.align(), C = this.getWidth(), S = this.letterSpacing(), x = this.fill(), v = this.textDecoration(), E = v.indexOf("underline") !== -1, N = v.indexOf("line-through") !== -1, k;
    f = f === W4 ? e.direction : f;
    let w = a / 2, p = L2;
    if (nh.Konva._fixTextRendering) {
      const _ = this.measureSize("M");
      p = "alphabetic", w = (_.fontBoundingBoxAscent - _.fontBoundingBoxDescent) / 2 + a / 2;
    }
    for (f === A2 && e.setAttr("direction", f), e.setAttr("font", this._getContextFont()), e.setAttr("textBaseline", p), e.setAttr("textAlign", K4), c === L2 ? g = (this.getHeight() - r * a - o * 2) / 2 : c === K9 && (g = this.getHeight() - r * a - o * 2), e.translate(o, g + o), k = 0; k < r; k++) {
      let _ = 0, T = 0;
      const F = n[k], L = F.text, R = F.width, G = F.lastInParagraph;
      if (e.save(), y === X9 ? _ += C - R - o * 2 : y === U9 && (_ += (C - R - o * 2) / 2), E) {
        e.save(), e.beginPath();
        const M = nh.Konva._fixTextRendering ? Math.round(l / 4) : Math.round(l / 2), B = _, j = w + T + M;
        e.moveTo(B, j);
        const I = y === Ho && !G ? C - o * 2 : R;
        e.lineTo(B + Math.round(I), j), e.lineWidth = l / 15;
        const Z = this._getLinearGradient();
        e.strokeStyle = Z || x, e.stroke(), e.restore();
      }
      if (N) {
        e.save(), e.beginPath();
        const M = nh.Konva._fixTextRendering ? -Math.round(l / 4) : 0;
        e.moveTo(_, w + T + M);
        const B = y === Ho && !G ? C - o * 2 : R;
        e.lineTo(_ + Math.round(B), w + T + M), e.lineWidth = l / 15;
        const j = this._getLinearGradient();
        e.strokeStyle = j || x, e.stroke(), e.restore();
      }
      if (f !== A2 && (S !== 0 || y === Ho)) {
        const M = L.split(" ").length - 1, B = Ui(L);
        for (let j = 0; j < B.length; j++) {
          const I = B[j];
          I === " " && !G && y === Ho && (_ += (C - o * 2 - R) / M), this._partialTextX = _, this._partialTextY = w + T, this._partialText = I, e.fillStrokeShape(this), _ += this.measureSize(I).width + S;
        }
      } else
        S !== 0 && e.setAttr("letterSpacing", `${S}px`), this._partialTextX = _, this._partialTextY = w + T, this._partialText = L, e.fillStrokeShape(this);
      e.restore(), r > 1 && (w += a);
    }
  }
  _hitFunc(e) {
    const n = this.getWidth(), r = this.getHeight();
    e.beginPath(), e.rect(0, 0, n, r), e.closePath(), e.fillStrokeShape(this);
  }
  setText(e) {
    const n = a0.Util._isString(e) ? e : e == null ? "" : e + "";
    return this._setAttr(H9, n), this;
  }
  getWidth() {
    return this.attrs.width === Ns || this.attrs.width === void 0 ? this.getTextWidth() + this.padding() * 2 : this.attrs.width;
  }
  getHeight() {
    return this.attrs.height === Ns || this.attrs.height === void 0 ? this.fontSize() * this.textArr.length * this.lineHeight() + this.padding() * 2 : this.attrs.height;
  }
  getTextWidth() {
    return this.textWidth;
  }
  getTextHeight() {
    return a0.Util.warn("text.getTextHeight() method is deprecated. Use text.height() - for full height and text.fontSize() - for one line height."), this.textHeight;
  }
  measureSize(e) {
    var n, r, o, l, a, c, f, g, y, C, S;
    let x = ih(), v = this.fontSize(), E;
    x.save(), x.font = this._getContextFont(), E = x.measureText(e), x.restore();
    const N = v / 100;
    return {
      actualBoundingBoxAscent: (n = E.actualBoundingBoxAscent) !== null && n !== void 0 ? n : 71.58203125 * N,
      actualBoundingBoxDescent: (r = E.actualBoundingBoxDescent) !== null && r !== void 0 ? r : 0,
      actualBoundingBoxLeft: (o = E.actualBoundingBoxLeft) !== null && o !== void 0 ? o : -7.421875 * N,
      actualBoundingBoxRight: (l = E.actualBoundingBoxRight) !== null && l !== void 0 ? l : 75.732421875 * N,
      alphabeticBaseline: (a = E.alphabeticBaseline) !== null && a !== void 0 ? a : 0,
      emHeightAscent: (c = E.emHeightAscent) !== null && c !== void 0 ? c : 100 * N,
      emHeightDescent: (f = E.emHeightDescent) !== null && f !== void 0 ? f : -20 * N,
      fontBoundingBoxAscent: (g = E.fontBoundingBoxAscent) !== null && g !== void 0 ? g : 91 * N,
      fontBoundingBoxDescent: (y = E.fontBoundingBoxDescent) !== null && y !== void 0 ? y : 21 * N,
      hangingBaseline: (C = E.hangingBaseline) !== null && C !== void 0 ? C : 72.80000305175781 * N,
      ideographicBaseline: (S = E.ideographicBaseline) !== null && S !== void 0 ? S : -21 * N,
      width: E.width,
      height: v
    };
  }
  _getContextFont() {
    return this.fontStyle() + Ja + this.fontVariant() + Ja + (this.fontSize() + Y9) + Z9(this.fontFamily());
  }
  _addTextLine(e) {
    this.align() === Ho && (e = e.trim());
    const r = this._getTextWidth(e);
    return this.textArr.push({
      text: e,
      width: r,
      lastInParagraph: !1
    });
  }
  _getTextWidth(e) {
    const n = this.letterSpacing(), r = e.length;
    return ih().measureText(e).width + n * r;
  }
  _setTextData() {
    let e = this.text().split(`
`), n = +this.fontSize(), r = 0, o = this.lineHeight() * n, l = this.attrs.width, a = this.attrs.height, c = l !== Ns && l !== void 0, f = a !== Ns && a !== void 0, g = this.padding(), y = l - g * 2, C = a - g * 2, S = 0, x = this.wrap(), v = x !== O2, E = x !== $9 && v, N = this.ellipsis();
    this.textArr = [], ih().font = this._getContextFont();
    const k = N ? this._getTextWidth(rh) : 0;
    for (let w = 0, p = e.length; w < p; ++w) {
      let _ = e[w], T = this._getTextWidth(_);
      if (c && T > y)
        for (; _.length > 0; ) {
          let F = 0, L = Ui(_).length, R = "", G = 0;
          for (; F < L; ) {
            const M = F + L >>> 1, B = Ui(_), j = B.slice(0, M + 1).join(""), I = this._getTextWidth(j);
            (N && f && S + o > C ? I + k : I) <= y ? (F = M + 1, R = j, G = I) : L = M;
          }
          if (R) {
            if (E) {
              const j = Ui(_), I = Ui(R), Z = j[I.length], Q = Z === Ja || Z === M2;
              let pe;
              if (Q && G <= y)
                pe = I.length;
              else {
                const ye = I.lastIndexOf(Ja), H = I.lastIndexOf(M2);
                pe = Math.max(ye, H) + 1;
              }
              pe > 0 && (F = pe, R = j.slice(0, F).join(""), G = this._getTextWidth(R));
            }
            if (R = R.trimRight(), this._addTextLine(R), r = Math.max(r, G), S += o, this._shouldHandleEllipsis(S)) {
              this._tryToAddEllipsisToLastLine();
              break;
            }
            if (_ = Ui(_).slice(F).join("").trimLeft(), _.length > 0 && (T = this._getTextWidth(_), T <= y)) {
              this._addTextLine(_), S += o, r = Math.max(r, T);
              break;
            }
          } else
            break;
        }
      else
        this._addTextLine(_), S += o, r = Math.max(r, T), this._shouldHandleEllipsis(S) && w < p - 1 && this._tryToAddEllipsisToLastLine();
      if (this.textArr[this.textArr.length - 1] && (this.textArr[this.textArr.length - 1].lastInParagraph = !0), f && S + o > C)
        break;
    }
    this.textHeight = n, this.textWidth = r;
  }
  _shouldHandleEllipsis(e) {
    const n = +this.fontSize(), r = this.lineHeight() * n, o = this.attrs.height, l = o !== Ns && o !== void 0, a = this.padding(), c = o - a * 2;
    return !(this.wrap() !== O2) || l && e + r > c;
  }
  _tryToAddEllipsisToLastLine() {
    const e = this.attrs.width, n = e !== Ns && e !== void 0, r = this.padding(), o = e - r * 2, l = this.ellipsis(), a = this.textArr[this.textArr.length - 1];
    !a || !l || (n && (this._getTextWidth(a.text + rh) < o || (a.text = a.text.slice(0, a.text.length - 3))), this.textArr.splice(this.textArr.length - 1, 1), this._addTextLine(a.text + rh));
  }
  getStrokeScaleEnabled() {
    return !0;
  }
  _useBufferCanvas() {
    const e = this.textDecoration().indexOf("underline") !== -1 || this.textDecoration().indexOf("line-through") !== -1, n = this.hasShadow();
    return e && n ? !0 : super._useBufferCanvas();
  }
}
po.Text = ot;
ot.prototype._fillFunc = J9;
ot.prototype._strokeFunc = b9;
ot.prototype.className = j9;
ot.prototype._attrsAffectingSize = [
  "text",
  "fontSize",
  "padding",
  "wrap",
  "lineHeight",
  "letterSpacing"
];
(0, G9._registerNode)(ot);
Vt.Factory.overWriteSetter(ot, "width", (0, vi.getNumberOrAutoValidator)());
Vt.Factory.overWriteSetter(ot, "height", (0, vi.getNumberOrAutoValidator)());
Vt.Factory.addGetterSetter(ot, "direction", W4);
Vt.Factory.addGetterSetter(ot, "fontFamily", "Arial");
Vt.Factory.addGetterSetter(ot, "fontSize", 12, (0, vi.getNumberValidator)());
Vt.Factory.addGetterSetter(ot, "fontStyle", Y4);
Vt.Factory.addGetterSetter(ot, "fontVariant", Y4);
Vt.Factory.addGetterSetter(ot, "padding", 0, (0, vi.getNumberValidator)());
Vt.Factory.addGetterSetter(ot, "align", K4);
Vt.Factory.addGetterSetter(ot, "verticalAlign", W9);
Vt.Factory.addGetterSetter(ot, "lineHeight", 1, (0, vi.getNumberValidator)());
Vt.Factory.addGetterSetter(ot, "wrap", Q9);
Vt.Factory.addGetterSetter(ot, "ellipsis", !1, (0, vi.getBooleanValidator)());
Vt.Factory.addGetterSetter(ot, "letterSpacing", 0, (0, vi.getNumberValidator)());
Vt.Factory.addGetterSetter(ot, "text", "", (0, vi.getStringValidator)());
Vt.Factory.addGetterSetter(ot, "textDecoration", "");
var Rc = {};
Object.defineProperty(Rc, "__esModule", { value: !0 });
Rc.TextPath = void 0;
const sh = rt, Xn = xe, t7 = _t, jo = fo, oh = po, Q4 = fe, n7 = Se, r7 = "", $4 = "normal";
function q4(t) {
  t.fillText(this.partialText, 0, 0);
}
function Z4(t) {
  t.strokeText(this.partialText, 0, 0);
}
class St extends t7.Shape {
  constructor(e) {
    super(e), this.dummyCanvas = sh.Util.createCanvasElement(), this.dataArray = [], this._readDataAttribute(), this.on("dataChange.konva", function() {
      this._readDataAttribute(), this._setTextData();
    }), this.on("textChange.konva alignChange.konva letterSpacingChange.konva kerningFuncChange.konva fontSizeChange.konva fontFamilyChange.konva", this._setTextData), this._setTextData();
  }
  _getTextPathLength() {
    return jo.Path.getPathLength(this.dataArray);
  }
  _getPointAtLength(e) {
    if (!this.attrs.data)
      return null;
    const n = this.pathLength;
    return e - 1 > n ? null : jo.Path.getPointAtLengthOfDataArray(e, this.dataArray);
  }
  _readDataAttribute() {
    this.dataArray = jo.Path.parsePathData(this.attrs.data), this.pathLength = this._getTextPathLength();
  }
  _sceneFunc(e) {
    e.setAttr("font", this._getContextFont()), e.setAttr("textBaseline", this.textBaseline()), e.setAttr("textAlign", "left"), e.save();
    const n = this.textDecoration(), r = this.fill(), o = this.fontSize(), l = this.glyphInfo;
    n === "underline" && e.beginPath();
    for (let a = 0; a < l.length; a++) {
      e.save();
      const c = l[a].p0;
      e.translate(c.x, c.y), e.rotate(l[a].rotation), this.partialText = l[a].text, e.fillStrokeShape(this), n === "underline" && (a === 0 && e.moveTo(0, o / 2 + 1), e.lineTo(o, o / 2 + 1)), e.restore();
    }
    n === "underline" && (e.strokeStyle = r, e.lineWidth = o / 20, e.stroke()), e.restore();
  }
  _hitFunc(e) {
    e.beginPath();
    const n = this.glyphInfo;
    if (n.length >= 1) {
      const r = n[0].p0;
      e.moveTo(r.x, r.y);
    }
    for (let r = 0; r < n.length; r++) {
      const o = n[r].p1;
      e.lineTo(o.x, o.y);
    }
    e.setAttr("lineWidth", this.fontSize()), e.setAttr("strokeStyle", this.colorKey), e.stroke();
  }
  getTextWidth() {
    return this.textWidth;
  }
  getTextHeight() {
    return sh.Util.warn("text.getTextHeight() method is deprecated. Use text.height() - for full height and text.fontSize() - for one line height."), this.textHeight;
  }
  setText(e) {
    return oh.Text.prototype.setText.call(this, e);
  }
  _getContextFont() {
    return oh.Text.prototype._getContextFont.call(this);
  }
  _getTextSize(e) {
    const r = this.dummyCanvas.getContext("2d");
    r.save(), r.font = this._getContextFont();
    const o = r.measureText(e);
    return r.restore(), {
      width: o.width,
      height: parseInt(`${this.fontSize()}`, 10)
    };
  }
  _setTextData() {
    const { width: e, height: n } = this._getTextSize(this.attrs.text);
    if (this.textWidth = e, this.textHeight = n, this.glyphInfo = [], !this.attrs.data)
      return null;
    const r = this.letterSpacing(), o = this.align(), l = this.kerningFunc(), a = Math.max(this.textWidth + ((this.attrs.text || "").length - 1) * r, 0);
    let c = 0;
    o === "center" && (c = Math.max(0, this.pathLength / 2 - a / 2)), o === "right" && (c = Math.max(0, this.pathLength - a));
    const f = (0, oh.stringToArray)(this.text());
    let g = c;
    for (let y = 0; y < f.length; y++) {
      const C = this._getPointAtLength(g);
      if (!C)
        return;
      let S = this._getTextSize(f[y]).width + r;
      if (f[y] === " " && o === "justify") {
        const w = this.text().split(" ").length - 1;
        S += (this.pathLength - a) / w;
      }
      const x = this._getPointAtLength(g + S);
      if (!x)
        return;
      const v = jo.Path.getLineLength(C.x, C.y, x.x, x.y);
      let E = 0;
      if (l)
        try {
          E = l(f[y - 1], f[y]) * this.fontSize();
        } catch {
          E = 0;
        }
      C.x += E, x.x += E, this.textWidth += E;
      const N = jo.Path.getPointOnLine(E + v / 2, C.x, C.y, x.x, x.y), k = Math.atan2(x.y - C.y, x.x - C.x);
      this.glyphInfo.push({
        transposeX: N.x,
        transposeY: N.y,
        text: f[y],
        rotation: k,
        p0: C,
        p1: x
      }), g += S;
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
    const e = [];
    this.glyphInfo.forEach(function(g) {
      e.push(g.p0.x), e.push(g.p0.y), e.push(g.p1.x), e.push(g.p1.y);
    });
    let n = e[0] || 0, r = e[0] || 0, o = e[1] || 0, l = e[1] || 0, a, c;
    for (let g = 0; g < e.length / 2; g++)
      a = e[g * 2], c = e[g * 2 + 1], n = Math.min(n, a), r = Math.max(r, a), o = Math.min(o, c), l = Math.max(l, c);
    const f = this.fontSize();
    return {
      x: n - f / 2,
      y: o - f / 2,
      width: r - n + f,
      height: l - o + f
    };
  }
  destroy() {
    return sh.Util.releaseCanvas(this.dummyCanvas), super.destroy();
  }
}
Rc.TextPath = St;
St.prototype._fillFunc = q4;
St.prototype._strokeFunc = Z4;
St.prototype._fillFuncHit = q4;
St.prototype._strokeFuncHit = Z4;
St.prototype.className = "TextPath";
St.prototype._attrsAffectingSize = ["text", "fontSize", "data"];
(0, n7._registerNode)(St);
Xn.Factory.addGetterSetter(St, "data");
Xn.Factory.addGetterSetter(St, "fontFamily", "Arial");
Xn.Factory.addGetterSetter(St, "fontSize", 12, (0, Q4.getNumberValidator)());
Xn.Factory.addGetterSetter(St, "fontStyle", $4);
Xn.Factory.addGetterSetter(St, "align", "left");
Xn.Factory.addGetterSetter(St, "letterSpacing", 0, (0, Q4.getNumberValidator)());
Xn.Factory.addGetterSetter(St, "textBaseline", "middle");
Xn.Factory.addGetterSetter(St, "fontVariant", $4);
Xn.Factory.addGetterSetter(St, "text", r7);
Xn.Factory.addGetterSetter(St, "textDecoration", "");
Xn.Factory.addGetterSetter(St, "kerningFunc", void 0);
var Fc = {};
Object.defineProperty(Fc, "__esModule", { value: !0 });
Fc.Transformer = void 0;
const Ie = rt, Le = xe, D2 = Ze, i7 = _t, s7 = Gl, I2 = uo, Un = Se, _i = fe, o7 = Se, J4 = "tr-konva", l7 = [
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
].map((t) => t + `.${J4}`).join(" "), z2 = "nodesRect", a7 = [
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
], u7 = {
  "top-left": -45,
  "top-center": 0,
  "top-right": 45,
  "middle-right": -90,
  "middle-left": 90,
  "bottom-left": -135,
  "bottom-center": 180,
  "bottom-right": 135
}, c7 = "ontouchstart" in Un.Konva._global;
function d7(t, e, n) {
  if (t === "rotater")
    return n;
  e += Ie.Util.degToRad(u7[t] || 0);
  const r = (Ie.Util.radToDeg(e) % 360 + 360) % 360;
  return Ie.Util._inRange(r, 315 + 22.5, 360) || Ie.Util._inRange(r, 0, 22.5) ? "ns-resize" : Ie.Util._inRange(r, 45 - 22.5, 45 + 22.5) ? "nesw-resize" : Ie.Util._inRange(r, 90 - 22.5, 90 + 22.5) ? "ew-resize" : Ie.Util._inRange(r, 135 - 22.5, 135 + 22.5) ? "nwse-resize" : Ie.Util._inRange(r, 180 - 22.5, 180 + 22.5) ? "ns-resize" : Ie.Util._inRange(r, 225 - 22.5, 225 + 22.5) ? "nesw-resize" : Ie.Util._inRange(r, 270 - 22.5, 270 + 22.5) ? "ew-resize" : Ie.Util._inRange(r, 315 - 22.5, 315 + 22.5) ? "nwse-resize" : (Ie.Util.error("Transformer has unknown angle for cursor detection: " + r), "pointer");
}
const ju = [
  "top-left",
  "top-center",
  "top-right",
  "middle-right",
  "middle-left",
  "bottom-left",
  "bottom-center",
  "bottom-right"
];
function f7(t) {
  return {
    x: t.x + t.width / 2 * Math.cos(t.rotation) + t.height / 2 * Math.sin(-t.rotation),
    y: t.y + t.height / 2 * Math.cos(t.rotation) + t.width / 2 * Math.sin(t.rotation)
  };
}
function b4(t, e, n) {
  const r = n.x + (t.x - n.x) * Math.cos(e) - (t.y - n.y) * Math.sin(e), o = n.y + (t.x - n.x) * Math.sin(e) + (t.y - n.y) * Math.cos(e);
  return {
    ...t,
    rotation: t.rotation + e,
    x: r,
    y: o
  };
}
function h7(t, e) {
  const n = f7(t);
  return b4(t, e, n);
}
function p7(t, e, n) {
  let r = e;
  for (let o = 0; o < t.length; o++) {
    const l = Un.Konva.getAngle(t[o]), a = Math.abs(l - e) % (Math.PI * 2);
    Math.min(a, Math.PI * 2 - a) < n && (r = l);
  }
  return r;
}
let u0 = 0, Pe = class extends I2.Group {
  constructor(e) {
    super(e), this._movingAnchorName = null, this._transforming = !1, this._createElements(), this._handleMouseMove = this._handleMouseMove.bind(this), this._handleMouseUp = this._handleMouseUp.bind(this), this.update = this.update.bind(this), this.on(l7, this.update), this.getNode() && this.update();
  }
  attachTo(e) {
    return this.setNode(e), this;
  }
  setNode(e) {
    return Ie.Util.warn("tr.setNode(shape), tr.node(shape) and tr.attachTo(shape) methods are deprecated. Please use tr.nodes(nodesArray) instead."), this.setNodes([e]);
  }
  getNode() {
    return this._nodes && this._nodes[0];
  }
  _getEventNamespace() {
    return J4 + this._id;
  }
  setNodes(e = []) {
    this._nodes && this._nodes.length && this.detach();
    const n = e.filter((o) => o.isAncestorOf(this) ? (Ie.Util.error("Konva.Transformer cannot be an a child of the node you are trying to attach"), !1) : !0);
    return this._nodes = e = n, e.length === 1 && this.useSingleNodeRotation() ? this.rotation(e[0].getAbsoluteRotation()) : this.rotation(0), this._nodes.forEach((o) => {
      const l = () => {
        this.nodes().length === 1 && this.useSingleNodeRotation() && this.rotation(this.nodes()[0].getAbsoluteRotation()), this._resetTransformCache(), !this._transforming && !this.isDragging() && this.update();
      };
      if (o._attrsAffectingSize.length) {
        const a = o._attrsAffectingSize.map((c) => c + "Change." + this._getEventNamespace()).join(" ");
        o.on(a, l);
      }
      o.on(a7.map((a) => a + `.${this._getEventNamespace()}`).join(" "), l), o.on(`absoluteTransformChange.${this._getEventNamespace()}`, l), this._proxyDrag(o);
    }), this._resetTransformCache(), !!this.findOne(".top-left") && this.update(), this;
  }
  _proxyDrag(e) {
    let n;
    e.on(`dragstart.${this._getEventNamespace()}`, (r) => {
      n = e.getAbsolutePosition(), !this.isDragging() && e !== this.findOne(".back") && this.startDrag(r, !1);
    }), e.on(`dragmove.${this._getEventNamespace()}`, (r) => {
      if (!n)
        return;
      const o = e.getAbsolutePosition(), l = o.x - n.x, a = o.y - n.y;
      this.nodes().forEach((c) => {
        if (c === e || c.isDragging())
          return;
        const f = c.getAbsolutePosition();
        c.setAbsolutePosition({
          x: f.x + l,
          y: f.y + a
        }), c.startDrag(r);
      }), n = null;
    });
  }
  getNodes() {
    return this._nodes || [];
  }
  getActiveAnchor() {
    return this._movingAnchorName;
  }
  detach() {
    this._nodes && this._nodes.forEach((e) => {
      e.off("." + this._getEventNamespace());
    }), this._nodes = [], this._resetTransformCache();
  }
  _resetTransformCache() {
    this._clearCache(z2), this._clearCache("transform"), this._clearSelfAndDescendantCache("absoluteTransform");
  }
  _getNodeRect() {
    return this._getCache(z2, this.__getNodeRect);
  }
  __getNodeShape(e, n = this.rotation(), r) {
    const o = e.getClientRect({
      skipTransform: !0,
      skipShadow: !0,
      skipStroke: this.ignoreStroke()
    }), l = e.getAbsoluteScale(r), a = e.getAbsolutePosition(r), c = o.x * l.x - e.offsetX() * l.x, f = o.y * l.y - e.offsetY() * l.y, g = (Un.Konva.getAngle(e.getAbsoluteRotation()) + Math.PI * 2) % (Math.PI * 2), y = {
      x: a.x + c * Math.cos(g) + f * Math.sin(-g),
      y: a.y + f * Math.cos(g) + c * Math.sin(g),
      width: o.width * l.x,
      height: o.height * l.y,
      rotation: g
    };
    return b4(y, -Un.Konva.getAngle(n), {
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
    const n = [];
    this.nodes().map((g) => {
      const y = g.getClientRect({
        skipTransform: !0,
        skipShadow: !0,
        skipStroke: this.ignoreStroke()
      }), C = [
        { x: y.x, y: y.y },
        { x: y.x + y.width, y: y.y },
        { x: y.x + y.width, y: y.y + y.height },
        { x: y.x, y: y.y + y.height }
      ], S = g.getAbsoluteTransform();
      C.forEach(function(x) {
        const v = S.point(x);
        n.push(v);
      });
    });
    const r = new Ie.Transform();
    r.rotate(-Un.Konva.getAngle(this.rotation()));
    let o = 1 / 0, l = 1 / 0, a = -1 / 0, c = -1 / 0;
    n.forEach(function(g) {
      const y = r.point(g);
      o === void 0 && (o = a = y.x, l = c = y.y), o = Math.min(o, y.x), l = Math.min(l, y.y), a = Math.max(a, y.x), c = Math.max(c, y.y);
    }), r.invert();
    const f = r.point({ x: o, y: l });
    return {
      x: f.x,
      y: f.y,
      width: a - o,
      height: c - l,
      rotation: Un.Konva.getAngle(this.rotation())
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
    this._createBack(), ju.forEach((e) => {
      this._createAnchor(e);
    }), this._createAnchor("rotater");
  }
  _createAnchor(e) {
    const n = new s7.Rect({
      stroke: "rgb(0, 161, 255)",
      fill: "white",
      strokeWidth: 1,
      name: e + " _anchor",
      dragDistance: 0,
      draggable: !0,
      hitStrokeWidth: c7 ? 10 : "auto"
    }), r = this;
    n.on("mousedown touchstart", function(o) {
      r._handleMouseDown(o);
    }), n.on("dragstart", (o) => {
      n.stopDrag(), o.cancelBubble = !0;
    }), n.on("dragend", (o) => {
      o.cancelBubble = !0;
    }), n.on("mouseenter", () => {
      const o = Un.Konva.getAngle(this.rotation()), l = this.rotateAnchorCursor(), a = d7(e, o, l);
      n.getStage().content && (n.getStage().content.style.cursor = a), this._cursorChange = !0;
    }), n.on("mouseout", () => {
      n.getStage().content && (n.getStage().content.style.cursor = ""), this._cursorChange = !1;
    }), this.add(n);
  }
  _createBack() {
    const e = new i7.Shape({
      name: "back",
      width: 0,
      height: 0,
      draggable: !0,
      sceneFunc(n, r) {
        const o = r.getParent(), l = o.padding();
        n.beginPath(), n.rect(-l, -l, r.width() + l * 2, r.height() + l * 2), n.moveTo(r.width() / 2, -l), o.rotateEnabled() && o.rotateLineVisible() && n.lineTo(r.width() / 2, -o.rotateAnchorOffset() * Ie.Util._sign(r.height()) - l), n.fillStrokeShape(r);
      },
      hitFunc: (n, r) => {
        if (!this.shouldOverdrawWholeArea())
          return;
        const o = this.padding();
        n.beginPath(), n.rect(-o, -o, r.width() + o * 2, r.height() + o * 2), n.fillStrokeShape(r);
      }
    });
    this.add(e), this._proxyDrag(e), e.on("dragstart", (n) => {
      n.cancelBubble = !0;
    }), e.on("dragmove", (n) => {
      n.cancelBubble = !0;
    }), e.on("dragend", (n) => {
      n.cancelBubble = !0;
    }), this.on("dragmove", (n) => {
      this.update();
    });
  }
  _handleMouseDown(e) {
    if (this._transforming)
      return;
    this._movingAnchorName = e.target.name().split(" ")[0];
    const n = this._getNodeRect(), r = n.width, o = n.height, l = Math.sqrt(Math.pow(r, 2) + Math.pow(o, 2));
    this.sin = Math.abs(o / l), this.cos = Math.abs(r / l), typeof window < "u" && (window.addEventListener("mousemove", this._handleMouseMove), window.addEventListener("touchmove", this._handleMouseMove), window.addEventListener("mouseup", this._handleMouseUp, !0), window.addEventListener("touchend", this._handleMouseUp, !0)), this._transforming = !0;
    const a = e.target.getAbsolutePosition(), c = e.target.getStage().getPointerPosition();
    this._anchorDragOffset = {
      x: c.x - a.x,
      y: c.y - a.y
    }, u0++, this._fire("transformstart", { evt: e.evt, target: this.getNode() }), this._nodes.forEach((f) => {
      f._fire("transformstart", { evt: e.evt, target: f });
    });
  }
  _handleMouseMove(e) {
    let n, r, o;
    const l = this.findOne("." + this._movingAnchorName), a = l.getStage();
    a.setPointersPositions(e);
    const c = a.getPointerPosition();
    let f = {
      x: c.x - this._anchorDragOffset.x,
      y: c.y - this._anchorDragOffset.y
    };
    const g = l.getAbsolutePosition();
    this.anchorDragBoundFunc() && (f = this.anchorDragBoundFunc()(g, f, e)), l.setAbsolutePosition(f);
    const y = l.getAbsolutePosition();
    if (g.x === y.x && g.y === y.y)
      return;
    if (this._movingAnchorName === "rotater") {
      const w = this._getNodeRect();
      n = l.x() - w.width / 2, r = -l.y() + w.height / 2;
      let p = Math.atan2(-r, n) + Math.PI / 2;
      w.height < 0 && (p -= Math.PI);
      const T = Un.Konva.getAngle(this.rotation()) + p, F = Un.Konva.getAngle(this.rotationSnapTolerance()), R = p7(this.rotationSnaps(), T, F) - w.rotation, G = h7(w, R);
      this._fitNodesInto(G, e);
      return;
    }
    const C = this.shiftBehavior();
    let S;
    C === "inverted" ? S = this.keepRatio() && !e.shiftKey : C === "none" ? S = this.keepRatio() : S = this.keepRatio() || e.shiftKey;
    let x = this.centeredScaling() || e.altKey;
    if (this._movingAnchorName === "top-left") {
      if (S) {
        const w = x ? {
          x: this.width() / 2,
          y: this.height() / 2
        } : {
          x: this.findOne(".bottom-right").x(),
          y: this.findOne(".bottom-right").y()
        };
        o = Math.sqrt(Math.pow(w.x - l.x(), 2) + Math.pow(w.y - l.y(), 2));
        const p = this.findOne(".top-left").x() > w.x ? -1 : 1, _ = this.findOne(".top-left").y() > w.y ? -1 : 1;
        n = o * this.cos * p, r = o * this.sin * _, this.findOne(".top-left").x(w.x - n), this.findOne(".top-left").y(w.y - r);
      }
    } else if (this._movingAnchorName === "top-center")
      this.findOne(".top-left").y(l.y());
    else if (this._movingAnchorName === "top-right") {
      if (S) {
        const w = x ? {
          x: this.width() / 2,
          y: this.height() / 2
        } : {
          x: this.findOne(".bottom-left").x(),
          y: this.findOne(".bottom-left").y()
        };
        o = Math.sqrt(Math.pow(l.x() - w.x, 2) + Math.pow(w.y - l.y(), 2));
        const p = this.findOne(".top-right").x() < w.x ? -1 : 1, _ = this.findOne(".top-right").y() > w.y ? -1 : 1;
        n = o * this.cos * p, r = o * this.sin * _, this.findOne(".top-right").x(w.x + n), this.findOne(".top-right").y(w.y - r);
      }
      var v = l.position();
      this.findOne(".top-left").y(v.y), this.findOne(".bottom-right").x(v.x);
    } else if (this._movingAnchorName === "middle-left")
      this.findOne(".top-left").x(l.x());
    else if (this._movingAnchorName === "middle-right")
      this.findOne(".bottom-right").x(l.x());
    else if (this._movingAnchorName === "bottom-left") {
      if (S) {
        const w = x ? {
          x: this.width() / 2,
          y: this.height() / 2
        } : {
          x: this.findOne(".top-right").x(),
          y: this.findOne(".top-right").y()
        };
        o = Math.sqrt(Math.pow(w.x - l.x(), 2) + Math.pow(l.y() - w.y, 2));
        const p = w.x < l.x() ? -1 : 1, _ = l.y() < w.y ? -1 : 1;
        n = o * this.cos * p, r = o * this.sin * _, l.x(w.x - n), l.y(w.y + r);
      }
      v = l.position(), this.findOne(".top-left").x(v.x), this.findOne(".bottom-right").y(v.y);
    } else if (this._movingAnchorName === "bottom-center")
      this.findOne(".bottom-right").y(l.y());
    else if (this._movingAnchorName === "bottom-right") {
      if (S) {
        const w = x ? {
          x: this.width() / 2,
          y: this.height() / 2
        } : {
          x: this.findOne(".top-left").x(),
          y: this.findOne(".top-left").y()
        };
        o = Math.sqrt(Math.pow(l.x() - w.x, 2) + Math.pow(l.y() - w.y, 2));
        const p = this.findOne(".bottom-right").x() < w.x ? -1 : 1, _ = this.findOne(".bottom-right").y() < w.y ? -1 : 1;
        n = o * this.cos * p, r = o * this.sin * _, this.findOne(".bottom-right").x(w.x + n), this.findOne(".bottom-right").y(w.y + r);
      }
    } else
      console.error(new Error("Wrong position argument of selection resizer: " + this._movingAnchorName));
    if (x = this.centeredScaling() || e.altKey, x) {
      const w = this.findOne(".top-left"), p = this.findOne(".bottom-right"), _ = w.x(), T = w.y(), F = this.getWidth() - p.x(), L = this.getHeight() - p.y();
      p.move({
        x: -_,
        y: -T
      }), w.move({
        x: F,
        y: L
      });
    }
    const E = this.findOne(".top-left").getAbsolutePosition();
    n = E.x, r = E.y;
    const N = this.findOne(".bottom-right").x() - this.findOne(".top-left").x(), k = this.findOne(".bottom-right").y() - this.findOne(".top-left").y();
    this._fitNodesInto({
      x: n,
      y: r,
      width: N,
      height: k,
      rotation: Un.Konva.getAngle(this.rotation())
    }, e);
  }
  _handleMouseUp(e) {
    this._removeEvents(e);
  }
  getAbsoluteTransform() {
    return this.getTransform();
  }
  _removeEvents(e) {
    var n;
    if (this._transforming) {
      this._transforming = !1, typeof window < "u" && (window.removeEventListener("mousemove", this._handleMouseMove), window.removeEventListener("touchmove", this._handleMouseMove), window.removeEventListener("mouseup", this._handleMouseUp, !0), window.removeEventListener("touchend", this._handleMouseUp, !0));
      const r = this.getNode();
      u0--, this._fire("transformend", { evt: e, target: r }), (n = this.getLayer()) === null || n === void 0 || n.batchDraw(), r && this._nodes.forEach((o) => {
        var l;
        o._fire("transformend", { evt: e, target: o }), (l = o.getLayer()) === null || l === void 0 || l.batchDraw();
      }), this._movingAnchorName = null;
    }
  }
  _fitNodesInto(e, n) {
    const r = this._getNodeRect(), o = 1;
    if (Ie.Util._inRange(e.width, -this.padding() * 2 - o, o)) {
      this.update();
      return;
    }
    if (Ie.Util._inRange(e.height, -this.padding() * 2 - o, o)) {
      this.update();
      return;
    }
    const l = new Ie.Transform();
    if (l.rotate(Un.Konva.getAngle(this.rotation())), this._movingAnchorName && e.width < 0 && this._movingAnchorName.indexOf("left") >= 0) {
      const S = l.point({
        x: -this.padding() * 2,
        y: 0
      });
      e.x += S.x, e.y += S.y, e.width += this.padding() * 2, this._movingAnchorName = this._movingAnchorName.replace("left", "right"), this._anchorDragOffset.x -= S.x, this._anchorDragOffset.y -= S.y;
    } else if (this._movingAnchorName && e.width < 0 && this._movingAnchorName.indexOf("right") >= 0) {
      const S = l.point({
        x: this.padding() * 2,
        y: 0
      });
      this._movingAnchorName = this._movingAnchorName.replace("right", "left"), this._anchorDragOffset.x -= S.x, this._anchorDragOffset.y -= S.y, e.width += this.padding() * 2;
    }
    if (this._movingAnchorName && e.height < 0 && this._movingAnchorName.indexOf("top") >= 0) {
      const S = l.point({
        x: 0,
        y: -this.padding() * 2
      });
      e.x += S.x, e.y += S.y, this._movingAnchorName = this._movingAnchorName.replace("top", "bottom"), this._anchorDragOffset.x -= S.x, this._anchorDragOffset.y -= S.y, e.height += this.padding() * 2;
    } else if (this._movingAnchorName && e.height < 0 && this._movingAnchorName.indexOf("bottom") >= 0) {
      const S = l.point({
        x: 0,
        y: this.padding() * 2
      });
      this._movingAnchorName = this._movingAnchorName.replace("bottom", "top"), this._anchorDragOffset.x -= S.x, this._anchorDragOffset.y -= S.y, e.height += this.padding() * 2;
    }
    if (this.boundBoxFunc()) {
      const S = this.boundBoxFunc()(r, e);
      S ? e = S : Ie.Util.warn("boundBoxFunc returned falsy. You should return new bound rect from it!");
    }
    const a = 1e7, c = new Ie.Transform();
    c.translate(r.x, r.y), c.rotate(r.rotation), c.scale(r.width / a, r.height / a);
    const f = new Ie.Transform(), g = e.width / a, y = e.height / a;
    this.flipEnabled() === !1 ? (f.translate(e.x, e.y), f.rotate(e.rotation), f.translate(e.width < 0 ? e.width : 0, e.height < 0 ? e.height : 0), f.scale(Math.abs(g), Math.abs(y))) : (f.translate(e.x, e.y), f.rotate(e.rotation), f.scale(g, y));
    const C = f.multiply(c.invert());
    this._nodes.forEach((S) => {
      var x;
      const v = S.getParent().getAbsoluteTransform(), E = S.getTransform().copy();
      E.translate(S.offsetX(), S.offsetY());
      const N = new Ie.Transform();
      N.multiply(v.copy().invert()).multiply(C).multiply(v).multiply(E);
      const k = N.decompose();
      S.setAttrs(k), (x = S.getLayer()) === null || x === void 0 || x.batchDraw();
    }), this.rotation(Ie.Util._getRotation(e.rotation)), this._nodes.forEach((S) => {
      this._fire("transform", { evt: n, target: S }), S._fire("transform", { evt: n, target: S });
    }), this._resetTransformCache(), this.update(), this.getLayer().batchDraw();
  }
  forceUpdate() {
    this._resetTransformCache(), this.update();
  }
  _batchChangeChild(e, n) {
    this.findOne(e).setAttrs(n);
  }
  update() {
    var e;
    const n = this._getNodeRect();
    this.rotation(Ie.Util._getRotation(n.rotation));
    const r = n.width, o = n.height, l = this.enabledAnchors(), a = this.resizeEnabled(), c = this.padding(), f = this.anchorSize(), g = this.find("._anchor");
    g.forEach((C) => {
      C.setAttrs({
        width: f,
        height: f,
        offsetX: f / 2,
        offsetY: f / 2,
        stroke: this.anchorStroke(),
        strokeWidth: this.anchorStrokeWidth(),
        fill: this.anchorFill(),
        cornerRadius: this.anchorCornerRadius()
      });
    }), this._batchChangeChild(".top-left", {
      x: 0,
      y: 0,
      offsetX: f / 2 + c,
      offsetY: f / 2 + c,
      visible: a && l.indexOf("top-left") >= 0
    }), this._batchChangeChild(".top-center", {
      x: r / 2,
      y: 0,
      offsetY: f / 2 + c,
      visible: a && l.indexOf("top-center") >= 0
    }), this._batchChangeChild(".top-right", {
      x: r,
      y: 0,
      offsetX: f / 2 - c,
      offsetY: f / 2 + c,
      visible: a && l.indexOf("top-right") >= 0
    }), this._batchChangeChild(".middle-left", {
      x: 0,
      y: o / 2,
      offsetX: f / 2 + c,
      visible: a && l.indexOf("middle-left") >= 0
    }), this._batchChangeChild(".middle-right", {
      x: r,
      y: o / 2,
      offsetX: f / 2 - c,
      visible: a && l.indexOf("middle-right") >= 0
    }), this._batchChangeChild(".bottom-left", {
      x: 0,
      y: o,
      offsetX: f / 2 + c,
      offsetY: f / 2 - c,
      visible: a && l.indexOf("bottom-left") >= 0
    }), this._batchChangeChild(".bottom-center", {
      x: r / 2,
      y: o,
      offsetY: f / 2 - c,
      visible: a && l.indexOf("bottom-center") >= 0
    }), this._batchChangeChild(".bottom-right", {
      x: r,
      y: o,
      offsetX: f / 2 - c,
      offsetY: f / 2 - c,
      visible: a && l.indexOf("bottom-right") >= 0
    }), this._batchChangeChild(".rotater", {
      x: r / 2,
      y: -this.rotateAnchorOffset() * Ie.Util._sign(o) - c,
      visible: this.rotateEnabled()
    }), this._batchChangeChild(".back", {
      width: r,
      height: o,
      visible: this.borderEnabled(),
      stroke: this.borderStroke(),
      strokeWidth: this.borderStrokeWidth(),
      dash: this.borderDash(),
      x: 0,
      y: 0
    });
    const y = this.anchorStyleFunc();
    y && g.forEach((C) => {
      y(C);
    }), (e = this.getLayer()) === null || e === void 0 || e.batchDraw();
  }
  isTransforming() {
    return this._transforming;
  }
  stopTransform() {
    if (this._transforming) {
      this._removeEvents();
      const e = this.findOne("." + this._movingAnchorName);
      e && e.stopDrag();
    }
  }
  destroy() {
    return this.getStage() && this._cursorChange && this.getStage().content && (this.getStage().content.style.cursor = ""), I2.Group.prototype.destroy.call(this), this.detach(), this._removeEvents(), this;
  }
  toObject() {
    return D2.Node.prototype.toObject.call(this);
  }
  clone(e) {
    return D2.Node.prototype.clone.call(this, e);
  }
  getClientRect() {
    return this.nodes().length > 0 ? super.getClientRect() : { x: 0, y: 0, width: 0, height: 0 };
  }
};
Fc.Transformer = Pe;
Pe.isTransforming = () => u0 > 0;
function g7(t) {
  return t instanceof Array || Ie.Util.warn("enabledAnchors value should be an array"), t instanceof Array && t.forEach(function(e) {
    ju.indexOf(e) === -1 && Ie.Util.warn("Unknown anchor name: " + e + ". Available names are: " + ju.join(", "));
  }), t || [];
}
Pe.prototype.className = "Transformer";
(0, o7._registerNode)(Pe);
Le.Factory.addGetterSetter(Pe, "enabledAnchors", ju, g7);
Le.Factory.addGetterSetter(Pe, "flipEnabled", !0, (0, _i.getBooleanValidator)());
Le.Factory.addGetterSetter(Pe, "resizeEnabled", !0);
Le.Factory.addGetterSetter(Pe, "anchorSize", 10, (0, _i.getNumberValidator)());
Le.Factory.addGetterSetter(Pe, "rotateEnabled", !0);
Le.Factory.addGetterSetter(Pe, "rotateLineVisible", !0);
Le.Factory.addGetterSetter(Pe, "rotationSnaps", []);
Le.Factory.addGetterSetter(Pe, "rotateAnchorOffset", 50, (0, _i.getNumberValidator)());
Le.Factory.addGetterSetter(Pe, "rotateAnchorCursor", "crosshair");
Le.Factory.addGetterSetter(Pe, "rotationSnapTolerance", 5, (0, _i.getNumberValidator)());
Le.Factory.addGetterSetter(Pe, "borderEnabled", !0);
Le.Factory.addGetterSetter(Pe, "anchorStroke", "rgb(0, 161, 255)");
Le.Factory.addGetterSetter(Pe, "anchorStrokeWidth", 1, (0, _i.getNumberValidator)());
Le.Factory.addGetterSetter(Pe, "anchorFill", "white");
Le.Factory.addGetterSetter(Pe, "anchorCornerRadius", 0, (0, _i.getNumberValidator)());
Le.Factory.addGetterSetter(Pe, "borderStroke", "rgb(0, 161, 255)");
Le.Factory.addGetterSetter(Pe, "borderStrokeWidth", 1, (0, _i.getNumberValidator)());
Le.Factory.addGetterSetter(Pe, "borderDash");
Le.Factory.addGetterSetter(Pe, "keepRatio", !0);
Le.Factory.addGetterSetter(Pe, "shiftBehavior", "default");
Le.Factory.addGetterSetter(Pe, "centeredScaling", !1);
Le.Factory.addGetterSetter(Pe, "ignoreStroke", !1);
Le.Factory.addGetterSetter(Pe, "padding", 0, (0, _i.getNumberValidator)());
Le.Factory.addGetterSetter(Pe, "nodes");
Le.Factory.addGetterSetter(Pe, "node");
Le.Factory.addGetterSetter(Pe, "boundBoxFunc");
Le.Factory.addGetterSetter(Pe, "anchorDragBoundFunc");
Le.Factory.addGetterSetter(Pe, "anchorStyleFunc");
Le.Factory.addGetterSetter(Pe, "shouldOverdrawWholeArea", !1);
Le.Factory.addGetterSetter(Pe, "useSingleNodeRotation", !0);
Le.Factory.backCompat(Pe, {
  lineEnabled: "borderEnabled",
  rotateHandlerOffset: "rotateAnchorOffset",
  enabledHandlers: "enabledAnchors"
});
var Mc = {};
Object.defineProperty(Mc, "__esModule", { value: !0 });
Mc.Wedge = void 0;
const Lc = xe, m7 = _t, y7 = Se, ey = fe, v7 = Se;
class Or extends m7.Shape {
  _sceneFunc(e) {
    e.beginPath(), e.arc(0, 0, this.radius(), 0, y7.Konva.getAngle(this.angle()), this.clockwise()), e.lineTo(0, 0), e.closePath(), e.fillStrokeShape(this);
  }
  getWidth() {
    return this.radius() * 2;
  }
  getHeight() {
    return this.radius() * 2;
  }
  setWidth(e) {
    this.radius(e / 2);
  }
  setHeight(e) {
    this.radius(e / 2);
  }
}
Mc.Wedge = Or;
Or.prototype.className = "Wedge";
Or.prototype._centroid = !0;
Or.prototype._attrsAffectingSize = ["radius"];
(0, v7._registerNode)(Or);
Lc.Factory.addGetterSetter(Or, "radius", 0, (0, ey.getNumberValidator)());
Lc.Factory.addGetterSetter(Or, "angle", 0, (0, ey.getNumberValidator)());
Lc.Factory.addGetterSetter(Or, "clockwise", !1);
Lc.Factory.backCompat(Or, {
  angleDeg: "angle",
  getAngleDeg: "getAngle",
  setAngleDeg: "setAngle"
});
var Ac = {};
Object.defineProperty(Ac, "__esModule", { value: !0 });
Ac.Blur = void 0;
const G2 = xe, _7 = Ze, S7 = fe;
function U2() {
  this.r = 0, this.g = 0, this.b = 0, this.a = 0, this.next = null;
}
const w7 = [
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
], x7 = [
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
function C7(t, e) {
  const n = t.data, r = t.width, o = t.height;
  let l, a, c, f, g, y, C, S, x, v, E, N, k, w, p, _, T, F, L, R;
  const G = e + e + 1, M = r - 1, B = o - 1, j = e + 1, I = j * (j + 1) / 2, Z = new U2(), Q = w7[e], pe = x7[e];
  let ye = null, H = Z, $ = null, X = null;
  for (let q = 1; q < G; q++)
    H = H.next = new U2(), q === j && (ye = H);
  H.next = Z, c = a = 0;
  for (let q = 0; q < o; q++) {
    N = k = w = p = f = g = y = C = 0, S = j * (_ = n[a]), x = j * (T = n[a + 1]), v = j * (F = n[a + 2]), E = j * (L = n[a + 3]), f += I * _, g += I * T, y += I * F, C += I * L, H = Z;
    for (let re = 0; re < j; re++)
      H.r = _, H.g = T, H.b = F, H.a = L, H = H.next;
    for (let re = 1; re < j; re++)
      l = a + ((M < re ? M : re) << 2), f += (H.r = _ = n[l]) * (R = j - re), g += (H.g = T = n[l + 1]) * R, y += (H.b = F = n[l + 2]) * R, C += (H.a = L = n[l + 3]) * R, N += _, k += T, w += F, p += L, H = H.next;
    $ = Z, X = ye;
    for (let re = 0; re < r; re++)
      n[a + 3] = L = C * Q >> pe, L !== 0 ? (L = 255 / L, n[a] = (f * Q >> pe) * L, n[a + 1] = (g * Q >> pe) * L, n[a + 2] = (y * Q >> pe) * L) : n[a] = n[a + 1] = n[a + 2] = 0, f -= S, g -= x, y -= v, C -= E, S -= $.r, x -= $.g, v -= $.b, E -= $.a, l = c + ((l = re + e + 1) < M ? l : M) << 2, N += $.r = n[l], k += $.g = n[l + 1], w += $.b = n[l + 2], p += $.a = n[l + 3], f += N, g += k, y += w, C += p, $ = $.next, S += _ = X.r, x += T = X.g, v += F = X.b, E += L = X.a, N -= _, k -= T, w -= F, p -= L, X = X.next, a += 4;
    c += r;
  }
  for (let q = 0; q < r; q++) {
    k = w = p = N = g = y = C = f = 0, a = q << 2, S = j * (_ = n[a]), x = j * (T = n[a + 1]), v = j * (F = n[a + 2]), E = j * (L = n[a + 3]), f += I * _, g += I * T, y += I * F, C += I * L, H = Z;
    for (let ve = 0; ve < j; ve++)
      H.r = _, H.g = T, H.b = F, H.a = L, H = H.next;
    let re = r;
    for (let ve = 1; ve <= e; ve++)
      a = re + q << 2, f += (H.r = _ = n[a]) * (R = j - ve), g += (H.g = T = n[a + 1]) * R, y += (H.b = F = n[a + 2]) * R, C += (H.a = L = n[a + 3]) * R, N += _, k += T, w += F, p += L, H = H.next, ve < B && (re += r);
    a = q, $ = Z, X = ye;
    for (let ve = 0; ve < o; ve++)
      l = a << 2, n[l + 3] = L = C * Q >> pe, L > 0 ? (L = 255 / L, n[l] = (f * Q >> pe) * L, n[l + 1] = (g * Q >> pe) * L, n[l + 2] = (y * Q >> pe) * L) : n[l] = n[l + 1] = n[l + 2] = 0, f -= S, g -= x, y -= v, C -= E, S -= $.r, x -= $.g, v -= $.b, E -= $.a, l = q + ((l = ve + j) < B ? l : B) * r << 2, f += N += $.r = n[l], g += k += $.g = n[l + 1], y += w += $.b = n[l + 2], C += p += $.a = n[l + 3], $ = $.next, S += _ = X.r, x += T = X.g, v += F = X.b, E += L = X.a, N -= _, k -= T, w -= F, p -= L, X = X.next, a += r;
  }
}
const k7 = function(e) {
  const n = Math.round(this.blurRadius());
  n > 0 && C7(e, n);
};
Ac.Blur = k7;
G2.Factory.addGetterSetter(_7.Node, "blurRadius", 0, (0, S7.getNumberValidator)(), G2.Factory.afterSetFilter);
var Oc = {};
Object.defineProperty(Oc, "__esModule", { value: !0 });
Oc.Brighten = void 0;
const B2 = xe, E7 = Ze, P7 = fe, T7 = function(t) {
  const e = this.brightness() * 255, n = t.data, r = n.length;
  for (let o = 0; o < r; o += 4)
    n[o] += e, n[o + 1] += e, n[o + 2] += e;
};
Oc.Brighten = T7;
B2.Factory.addGetterSetter(E7.Node, "brightness", 0, (0, P7.getNumberValidator)(), B2.Factory.afterSetFilter);
var Dc = {};
Object.defineProperty(Dc, "__esModule", { value: !0 });
Dc.Contrast = void 0;
const V2 = xe, N7 = Ze, R7 = fe, F7 = function(t) {
  const e = Math.pow((this.contrast() + 100) / 100, 2), n = t.data, r = n.length;
  let o = 150, l = 150, a = 150;
  for (let c = 0; c < r; c += 4)
    o = n[c], l = n[c + 1], a = n[c + 2], o /= 255, o -= 0.5, o *= e, o += 0.5, o *= 255, l /= 255, l -= 0.5, l *= e, l += 0.5, l *= 255, a /= 255, a -= 0.5, a *= e, a += 0.5, a *= 255, o = o < 0 ? 0 : o > 255 ? 255 : o, l = l < 0 ? 0 : l > 255 ? 255 : l, a = a < 0 ? 0 : a > 255 ? 255 : a, n[c] = o, n[c + 1] = l, n[c + 2] = a;
};
Dc.Contrast = F7;
V2.Factory.addGetterSetter(N7.Node, "contrast", 0, (0, R7.getNumberValidator)(), V2.Factory.afterSetFilter);
var Ic = {};
Object.defineProperty(Ic, "__esModule", { value: !0 });
Ic.Emboss = void 0;
const ci = xe, zc = Ze, M7 = rt, ty = fe, L7 = function(t) {
  const e = this.embossStrength() * 10, n = this.embossWhiteLevel() * 255, r = this.embossDirection(), o = this.embossBlend(), l = t.data, a = t.width, c = t.height, f = a * 4;
  let g = 0, y = 0, C = c;
  switch (r) {
    case "top-left":
      g = -1, y = -1;
      break;
    case "top":
      g = -1, y = 0;
      break;
    case "top-right":
      g = -1, y = 1;
      break;
    case "right":
      g = 0, y = 1;
      break;
    case "bottom-right":
      g = 1, y = 1;
      break;
    case "bottom":
      g = 1, y = 0;
      break;
    case "bottom-left":
      g = 1, y = -1;
      break;
    case "left":
      g = 0, y = -1;
      break;
    default:
      M7.Util.error("Unknown emboss direction: " + r);
  }
  do {
    const S = (C - 1) * f;
    let x = g;
    C + x < 1 && (x = 0), C + x > c && (x = 0);
    const v = (C - 1 + x) * a * 4;
    let E = a;
    do {
      const N = S + (E - 1) * 4;
      let k = y;
      E + k < 1 && (k = 0), E + k > a && (k = 0);
      const w = v + (E - 1 + k) * 4, p = l[N] - l[w], _ = l[N + 1] - l[w + 1], T = l[N + 2] - l[w + 2];
      let F = p;
      const L = F > 0 ? F : -F, R = _ > 0 ? _ : -_, G = T > 0 ? T : -T;
      if (R > L && (F = _), G > L && (F = T), F *= e, o) {
        const M = l[N] + F, B = l[N + 1] + F, j = l[N + 2] + F;
        l[N] = M > 255 ? 255 : M < 0 ? 0 : M, l[N + 1] = B > 255 ? 255 : B < 0 ? 0 : B, l[N + 2] = j > 255 ? 255 : j < 0 ? 0 : j;
      } else {
        let M = n - F;
        M < 0 ? M = 0 : M > 255 && (M = 255), l[N] = l[N + 1] = l[N + 2] = M;
      }
    } while (--E);
  } while (--C);
};
Ic.Emboss = L7;
ci.Factory.addGetterSetter(zc.Node, "embossStrength", 0.5, (0, ty.getNumberValidator)(), ci.Factory.afterSetFilter);
ci.Factory.addGetterSetter(zc.Node, "embossWhiteLevel", 0.5, (0, ty.getNumberValidator)(), ci.Factory.afterSetFilter);
ci.Factory.addGetterSetter(zc.Node, "embossDirection", "top-left", void 0, ci.Factory.afterSetFilter);
ci.Factory.addGetterSetter(zc.Node, "embossBlend", !1, void 0, ci.Factory.afterSetFilter);
var Gc = {};
Object.defineProperty(Gc, "__esModule", { value: !0 });
Gc.Enhance = void 0;
const H2 = xe, A7 = Ze, O7 = fe;
function lh(t, e, n, r, o) {
  const l = n - e, a = o - r;
  if (l === 0)
    return r + a / 2;
  if (a === 0)
    return r;
  let c = (t - e) / l;
  return c = a * c + r, c;
}
const D7 = function(t) {
  const e = t.data, n = e.length;
  let r = e[0], o = r, l, a = e[1], c = a, f, g = e[2], y = g, C;
  const S = this.enhance();
  if (S === 0)
    return;
  for (let p = 0; p < n; p += 4)
    l = e[p + 0], l < r ? r = l : l > o && (o = l), f = e[p + 1], f < a ? a = f : f > c && (c = f), C = e[p + 2], C < g ? g = C : C > y && (y = C);
  o === r && (o = 255, r = 0), c === a && (c = 255, a = 0), y === g && (y = 255, g = 0);
  let x, v, E, N, k, w;
  if (S > 0)
    x = o + S * (255 - o), v = r - S * (r - 0), E = c + S * (255 - c), N = a - S * (a - 0), k = y + S * (255 - y), w = g - S * (g - 0);
  else {
    const p = (o + r) * 0.5;
    x = o + S * (o - p), v = r + S * (r - p);
    const _ = (c + a) * 0.5;
    E = c + S * (c - _), N = a + S * (a - _);
    const T = (y + g) * 0.5;
    k = y + S * (y - T), w = g + S * (g - T);
  }
  for (let p = 0; p < n; p += 4)
    e[p + 0] = lh(e[p + 0], r, o, v, x), e[p + 1] = lh(e[p + 1], a, c, N, E), e[p + 2] = lh(e[p + 2], g, y, w, k);
};
Gc.Enhance = D7;
H2.Factory.addGetterSetter(A7.Node, "enhance", 0, (0, O7.getNumberValidator)(), H2.Factory.afterSetFilter);
var Uc = {};
Object.defineProperty(Uc, "__esModule", { value: !0 });
Uc.Grayscale = void 0;
const I7 = function(t) {
  const e = t.data, n = e.length;
  for (let r = 0; r < n; r += 4) {
    const o = 0.34 * e[r] + 0.5 * e[r + 1] + 0.16 * e[r + 2];
    e[r] = o, e[r + 1] = o, e[r + 2] = o;
  }
};
Uc.Grayscale = I7;
var Bc = {};
Object.defineProperty(Bc, "__esModule", { value: !0 });
Bc.HSL = void 0;
const no = xe, m1 = Ze, y1 = fe;
no.Factory.addGetterSetter(m1.Node, "hue", 0, (0, y1.getNumberValidator)(), no.Factory.afterSetFilter);
no.Factory.addGetterSetter(m1.Node, "saturation", 0, (0, y1.getNumberValidator)(), no.Factory.afterSetFilter);
no.Factory.addGetterSetter(m1.Node, "luminance", 0, (0, y1.getNumberValidator)(), no.Factory.afterSetFilter);
const z7 = function(t) {
  const e = t.data, n = e.length, r = 1, o = Math.pow(2, this.saturation()), l = Math.abs(this.hue() + 360) % 360, a = this.luminance() * 127, c = r * o * Math.cos(l * Math.PI / 180), f = r * o * Math.sin(l * Math.PI / 180), g = 0.299 * r + 0.701 * c + 0.167 * f, y = 0.587 * r - 0.587 * c + 0.33 * f, C = 0.114 * r - 0.114 * c - 0.497 * f, S = 0.299 * r - 0.299 * c - 0.328 * f, x = 0.587 * r + 0.413 * c + 0.035 * f, v = 0.114 * r - 0.114 * c + 0.293 * f, E = 0.299 * r - 0.3 * c + 1.25 * f, N = 0.587 * r - 0.586 * c - 1.05 * f, k = 0.114 * r + 0.886 * c - 0.2 * f;
  let w, p, _, T;
  for (let F = 0; F < n; F += 4)
    w = e[F + 0], p = e[F + 1], _ = e[F + 2], T = e[F + 3], e[F + 0] = g * w + y * p + C * _ + a, e[F + 1] = S * w + x * p + v * _ + a, e[F + 2] = E * w + N * p + k * _ + a, e[F + 3] = T;
};
Bc.HSL = z7;
var Vc = {};
Object.defineProperty(Vc, "__esModule", { value: !0 });
Vc.HSV = void 0;
const ro = xe, v1 = Ze, _1 = fe, G7 = function(t) {
  const e = t.data, n = e.length, r = Math.pow(2, this.value()), o = Math.pow(2, this.saturation()), l = Math.abs(this.hue() + 360) % 360, a = r * o * Math.cos(l * Math.PI / 180), c = r * o * Math.sin(l * Math.PI / 180), f = 0.299 * r + 0.701 * a + 0.167 * c, g = 0.587 * r - 0.587 * a + 0.33 * c, y = 0.114 * r - 0.114 * a - 0.497 * c, C = 0.299 * r - 0.299 * a - 0.328 * c, S = 0.587 * r + 0.413 * a + 0.035 * c, x = 0.114 * r - 0.114 * a + 0.293 * c, v = 0.299 * r - 0.3 * a + 1.25 * c, E = 0.587 * r - 0.586 * a - 1.05 * c, N = 0.114 * r + 0.886 * a - 0.2 * c;
  for (let k = 0; k < n; k += 4) {
    const w = e[k + 0], p = e[k + 1], _ = e[k + 2], T = e[k + 3];
    e[k + 0] = f * w + g * p + y * _, e[k + 1] = C * w + S * p + x * _, e[k + 2] = v * w + E * p + N * _, e[k + 3] = T;
  }
};
Vc.HSV = G7;
ro.Factory.addGetterSetter(v1.Node, "hue", 0, (0, _1.getNumberValidator)(), ro.Factory.afterSetFilter);
ro.Factory.addGetterSetter(v1.Node, "saturation", 0, (0, _1.getNumberValidator)(), ro.Factory.afterSetFilter);
ro.Factory.addGetterSetter(v1.Node, "value", 0, (0, _1.getNumberValidator)(), ro.Factory.afterSetFilter);
var Hc = {};
Object.defineProperty(Hc, "__esModule", { value: !0 });
Hc.Invert = void 0;
const U7 = function(t) {
  const e = t.data, n = e.length;
  for (let r = 0; r < n; r += 4)
    e[r] = 255 - e[r], e[r + 1] = 255 - e[r + 1], e[r + 2] = 255 - e[r + 2];
};
Hc.Invert = U7;
var jc = {};
Object.defineProperty(jc, "__esModule", { value: !0 });
jc.Kaleidoscope = void 0;
const Wu = xe, ny = Ze, j2 = rt, ry = fe, B7 = function(t, e, n) {
  const r = t.data, o = e.data, l = t.width, a = t.height, c = n.polarCenterX || l / 2, f = n.polarCenterY || a / 2;
  let g = Math.sqrt(c * c + f * f), y = l - c, C = a - f;
  const S = Math.sqrt(y * y + C * C);
  g = S > g ? S : g;
  const x = a, v = l, E = 360 / v * Math.PI / 180;
  for (let N = 0; N < v; N += 1) {
    const k = Math.sin(N * E), w = Math.cos(N * E);
    for (let p = 0; p < x; p += 1) {
      y = Math.floor(c + g * p / x * w), C = Math.floor(f + g * p / x * k);
      let _ = (C * l + y) * 4;
      const T = r[_ + 0], F = r[_ + 1], L = r[_ + 2], R = r[_ + 3];
      _ = (N + p * l) * 4, o[_ + 0] = T, o[_ + 1] = F, o[_ + 2] = L, o[_ + 3] = R;
    }
  }
}, V7 = function(t, e, n) {
  const r = t.data, o = e.data, l = t.width, a = t.height, c = n.polarCenterX || l / 2, f = n.polarCenterY || a / 2;
  let g = Math.sqrt(c * c + f * f), y = l - c, C = a - f;
  const S = Math.sqrt(y * y + C * C);
  g = S > g ? S : g;
  const x = a, v = l, E = 0;
  let N, k;
  for (y = 0; y < l; y += 1)
    for (C = 0; C < a; C += 1) {
      const w = y - c, p = C - f, _ = Math.sqrt(w * w + p * p) * x / g;
      let T = (Math.atan2(p, w) * 180 / Math.PI + 360 + E) % 360;
      T = T * v / 360, N = Math.floor(T), k = Math.floor(_);
      let F = (k * l + N) * 4;
      const L = r[F + 0], R = r[F + 1], G = r[F + 2], M = r[F + 3];
      F = (C * l + y) * 4, o[F + 0] = L, o[F + 1] = R, o[F + 2] = G, o[F + 3] = M;
    }
}, H7 = function(t) {
  const e = t.width, n = t.height;
  let r, o, l, a, c, f, g, y, C, S, x = Math.round(this.kaleidoscopePower());
  const v = Math.round(this.kaleidoscopeAngle()), E = Math.floor(e * (v % 360) / 360);
  if (x < 1)
    return;
  const N = j2.Util.createCanvasElement();
  N.width = e, N.height = n;
  const k = N.getContext("2d").getImageData(0, 0, e, n);
  j2.Util.releaseCanvas(N), B7(t, k, {
    polarCenterX: e / 2,
    polarCenterY: n / 2
  });
  let w = e / Math.pow(2, x);
  for (; w <= 8; )
    w = w * 2, x -= 1;
  w = Math.ceil(w);
  let p = w, _ = 0, T = p, F = 1;
  for (E + w > e && (_ = p, T = 0, F = -1), o = 0; o < n; o += 1)
    for (r = _; r !== T; r += F)
      l = Math.round(r + E) % e, C = (e * o + l) * 4, c = k.data[C + 0], f = k.data[C + 1], g = k.data[C + 2], y = k.data[C + 3], S = (e * o + r) * 4, k.data[S + 0] = c, k.data[S + 1] = f, k.data[S + 2] = g, k.data[S + 3] = y;
  for (o = 0; o < n; o += 1)
    for (p = Math.floor(w), a = 0; a < x; a += 1) {
      for (r = 0; r < p + 1; r += 1)
        C = (e * o + r) * 4, c = k.data[C + 0], f = k.data[C + 1], g = k.data[C + 2], y = k.data[C + 3], S = (e * o + p * 2 - r - 1) * 4, k.data[S + 0] = c, k.data[S + 1] = f, k.data[S + 2] = g, k.data[S + 3] = y;
      p *= 2;
    }
  V7(k, t, {});
};
jc.Kaleidoscope = H7;
Wu.Factory.addGetterSetter(ny.Node, "kaleidoscopePower", 2, (0, ry.getNumberValidator)(), Wu.Factory.afterSetFilter);
Wu.Factory.addGetterSetter(ny.Node, "kaleidoscopeAngle", 0, (0, ry.getNumberValidator)(), Wu.Factory.afterSetFilter);
var Wc = {};
Object.defineProperty(Wc, "__esModule", { value: !0 });
Wc.Mask = void 0;
const W2 = xe, j7 = Ze, W7 = fe;
function eu(t, e, n) {
  let r = (n * t.width + e) * 4;
  const o = [];
  return o.push(t.data[r++], t.data[r++], t.data[r++], t.data[r++]), o;
}
function Wo(t, e) {
  return Math.sqrt(Math.pow(t[0] - e[0], 2) + Math.pow(t[1] - e[1], 2) + Math.pow(t[2] - e[2], 2));
}
function K7(t) {
  const e = [0, 0, 0];
  for (let n = 0; n < t.length; n++)
    e[0] += t[n][0], e[1] += t[n][1], e[2] += t[n][2];
  return e[0] /= t.length, e[1] /= t.length, e[2] /= t.length, e;
}
function Y7(t, e) {
  const n = eu(t, 0, 0), r = eu(t, t.width - 1, 0), o = eu(t, 0, t.height - 1), l = eu(t, t.width - 1, t.height - 1), a = e || 10;
  if (Wo(n, r) < a && Wo(r, l) < a && Wo(l, o) < a && Wo(o, n) < a) {
    const c = K7([r, n, l, o]), f = [];
    for (let g = 0; g < t.width * t.height; g++) {
      const y = Wo(c, [
        t.data[g * 4],
        t.data[g * 4 + 1],
        t.data[g * 4 + 2]
      ]);
      f[g] = y < a ? 0 : 255;
    }
    return f;
  }
}
function X7(t, e) {
  for (let n = 0; n < t.width * t.height; n++)
    t.data[4 * n + 3] = e[n];
}
function Q7(t, e, n) {
  const r = [1, 1, 1, 1, 0, 1, 1, 1, 1], o = Math.round(Math.sqrt(r.length)), l = Math.floor(o / 2), a = [];
  for (let c = 0; c < n; c++)
    for (let f = 0; f < e; f++) {
      const g = c * e + f;
      let y = 0;
      for (let C = 0; C < o; C++)
        for (let S = 0; S < o; S++) {
          const x = c + C - l, v = f + S - l;
          if (x >= 0 && x < n && v >= 0 && v < e) {
            const E = x * e + v, N = r[C * o + S];
            y += t[E] * N;
          }
        }
      a[g] = y === 255 * 8 ? 255 : 0;
    }
  return a;
}
function $7(t, e, n) {
  const r = [1, 1, 1, 1, 1, 1, 1, 1, 1], o = Math.round(Math.sqrt(r.length)), l = Math.floor(o / 2), a = [];
  for (let c = 0; c < n; c++)
    for (let f = 0; f < e; f++) {
      const g = c * e + f;
      let y = 0;
      for (let C = 0; C < o; C++)
        for (let S = 0; S < o; S++) {
          const x = c + C - l, v = f + S - l;
          if (x >= 0 && x < n && v >= 0 && v < e) {
            const E = x * e + v, N = r[C * o + S];
            y += t[E] * N;
          }
        }
      a[g] = y >= 255 * 4 ? 255 : 0;
    }
  return a;
}
function q7(t, e, n) {
  const r = [0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111], o = Math.round(Math.sqrt(r.length)), l = Math.floor(o / 2), a = [];
  for (let c = 0; c < n; c++)
    for (let f = 0; f < e; f++) {
      const g = c * e + f;
      let y = 0;
      for (let C = 0; C < o; C++)
        for (let S = 0; S < o; S++) {
          const x = c + C - l, v = f + S - l;
          if (x >= 0 && x < n && v >= 0 && v < e) {
            const E = x * e + v, N = r[C * o + S];
            y += t[E] * N;
          }
        }
      a[g] = y;
    }
  return a;
}
const Z7 = function(t) {
  const e = this.threshold();
  let n = Y7(t, e);
  return n && (n = Q7(n, t.width, t.height), n = $7(n, t.width, t.height), n = q7(n, t.width, t.height), X7(t, n)), t;
};
Wc.Mask = Z7;
W2.Factory.addGetterSetter(j7.Node, "threshold", 0, (0, W7.getNumberValidator)(), W2.Factory.afterSetFilter);
var Kc = {};
Object.defineProperty(Kc, "__esModule", { value: !0 });
Kc.Noise = void 0;
const K2 = xe, J7 = Ze, b7 = fe, e_ = function(t) {
  const e = this.noise() * 255, n = t.data, r = n.length, o = e / 2;
  for (let l = 0; l < r; l += 4)
    n[l + 0] += o - 2 * o * Math.random(), n[l + 1] += o - 2 * o * Math.random(), n[l + 2] += o - 2 * o * Math.random();
};
Kc.Noise = e_;
K2.Factory.addGetterSetter(J7.Node, "noise", 0.2, (0, b7.getNumberValidator)(), K2.Factory.afterSetFilter);
var Yc = {};
Object.defineProperty(Yc, "__esModule", { value: !0 });
Yc.Pixelate = void 0;
const Y2 = xe, t_ = rt, n_ = Ze, r_ = fe, i_ = function(t) {
  let e = Math.ceil(this.pixelSize()), n = t.width, r = t.height, o = Math.ceil(n / e), l = Math.ceil(r / e), a = t.data;
  if (e <= 0) {
    t_.Util.error("pixelSize value can not be <= 0");
    return;
  }
  for (let c = 0; c < o; c += 1)
    for (let f = 0; f < l; f += 1) {
      let g = 0, y = 0, C = 0, S = 0;
      const x = c * e, v = x + e, E = f * e, N = E + e;
      let k = 0;
      for (let w = x; w < v; w += 1)
        if (!(w >= n))
          for (let p = E; p < N; p += 1) {
            if (p >= r)
              continue;
            const _ = (n * p + w) * 4;
            g += a[_ + 0], y += a[_ + 1], C += a[_ + 2], S += a[_ + 3], k += 1;
          }
      g = g / k, y = y / k, C = C / k, S = S / k;
      for (let w = x; w < v; w += 1)
        if (!(w >= n))
          for (let p = E; p < N; p += 1) {
            if (p >= r)
              continue;
            const _ = (n * p + w) * 4;
            a[_ + 0] = g, a[_ + 1] = y, a[_ + 2] = C, a[_ + 3] = S;
          }
    }
};
Yc.Pixelate = i_;
Y2.Factory.addGetterSetter(n_.Node, "pixelSize", 8, (0, r_.getNumberValidator)(), Y2.Factory.afterSetFilter);
var Xc = {};
Object.defineProperty(Xc, "__esModule", { value: !0 });
Xc.Posterize = void 0;
const X2 = xe, s_ = Ze, o_ = fe, l_ = function(t) {
  const e = Math.round(this.levels() * 254) + 1, n = t.data, r = n.length, o = 255 / e;
  for (let l = 0; l < r; l += 1)
    n[l] = Math.floor(n[l] / o) * o;
};
Xc.Posterize = l_;
X2.Factory.addGetterSetter(s_.Node, "levels", 0.5, (0, o_.getNumberValidator)(), X2.Factory.afterSetFilter);
var Qc = {};
Object.defineProperty(Qc, "__esModule", { value: !0 });
Qc.RGB = void 0;
const Ku = xe, S1 = Ze, a_ = fe, u_ = function(t) {
  const e = t.data, n = e.length, r = this.red(), o = this.green(), l = this.blue();
  for (let a = 0; a < n; a += 4) {
    const c = (0.34 * e[a] + 0.5 * e[a + 1] + 0.16 * e[a + 2]) / 255;
    e[a] = c * r, e[a + 1] = c * o, e[a + 2] = c * l, e[a + 3] = e[a + 3];
  }
};
Qc.RGB = u_;
Ku.Factory.addGetterSetter(S1.Node, "red", 0, function(t) {
  return this._filterUpToDate = !1, t > 255 ? 255 : t < 0 ? 0 : Math.round(t);
});
Ku.Factory.addGetterSetter(S1.Node, "green", 0, function(t) {
  return this._filterUpToDate = !1, t > 255 ? 255 : t < 0 ? 0 : Math.round(t);
});
Ku.Factory.addGetterSetter(S1.Node, "blue", 0, a_.RGBComponent, Ku.Factory.afterSetFilter);
var $c = {};
Object.defineProperty($c, "__esModule", { value: !0 });
$c.RGBA = void 0;
const Tl = xe, qc = Ze, c_ = fe, d_ = function(t) {
  const e = t.data, n = e.length, r = this.red(), o = this.green(), l = this.blue(), a = this.alpha();
  for (let c = 0; c < n; c += 4) {
    const f = 1 - a;
    e[c] = r * a + e[c] * f, e[c + 1] = o * a + e[c + 1] * f, e[c + 2] = l * a + e[c + 2] * f;
  }
};
$c.RGBA = d_;
Tl.Factory.addGetterSetter(qc.Node, "red", 0, function(t) {
  return this._filterUpToDate = !1, t > 255 ? 255 : t < 0 ? 0 : Math.round(t);
});
Tl.Factory.addGetterSetter(qc.Node, "green", 0, function(t) {
  return this._filterUpToDate = !1, t > 255 ? 255 : t < 0 ? 0 : Math.round(t);
});
Tl.Factory.addGetterSetter(qc.Node, "blue", 0, c_.RGBComponent, Tl.Factory.afterSetFilter);
Tl.Factory.addGetterSetter(qc.Node, "alpha", 1, function(t) {
  return this._filterUpToDate = !1, t > 1 ? 1 : t < 0 ? 0 : t;
});
var Zc = {};
Object.defineProperty(Zc, "__esModule", { value: !0 });
Zc.Sepia = void 0;
const f_ = function(t) {
  const e = t.data, n = e.length;
  for (let r = 0; r < n; r += 4) {
    const o = e[r + 0], l = e[r + 1], a = e[r + 2];
    e[r + 0] = Math.min(255, o * 0.393 + l * 0.769 + a * 0.189), e[r + 1] = Math.min(255, o * 0.349 + l * 0.686 + a * 0.168), e[r + 2] = Math.min(255, o * 0.272 + l * 0.534 + a * 0.131);
  }
};
Zc.Sepia = f_;
var Jc = {};
Object.defineProperty(Jc, "__esModule", { value: !0 });
Jc.Solarize = void 0;
const h_ = function(t) {
  const e = t.data, n = t.width, r = t.height, o = n * 4;
  let l = r;
  do {
    const a = (l - 1) * o;
    let c = n;
    do {
      const f = a + (c - 1) * 4;
      let g = e[f], y = e[f + 1], C = e[f + 2];
      g > 127 && (g = 255 - g), y > 127 && (y = 255 - y), C > 127 && (C = 255 - C), e[f] = g, e[f + 1] = y, e[f + 2] = C;
    } while (--c);
  } while (--l);
};
Jc.Solarize = h_;
var bc = {};
Object.defineProperty(bc, "__esModule", { value: !0 });
bc.Threshold = void 0;
const Q2 = xe, p_ = Ze, g_ = fe, m_ = function(t) {
  const e = this.threshold() * 255, n = t.data, r = n.length;
  for (let o = 0; o < r; o += 1)
    n[o] = n[o] < e ? 0 : 255;
};
bc.Threshold = m_;
Q2.Factory.addGetterSetter(p_.Node, "threshold", 0.5, (0, g_.getNumberValidator)(), Q2.Factory.afterSetFilter);
Object.defineProperty(uc, "__esModule", { value: !0 });
uc.Konva = void 0;
const $2 = Vu, y_ = pc, v_ = yc, __ = Sc, S_ = wc, w_ = xc, q2 = to, x_ = Il, C_ = fo, k_ = Gl, E_ = Ec, P_ = Pc, T_ = Tc, N_ = Nc, R_ = po, F_ = Rc, M_ = Fc, L_ = Mc, A_ = Ac, O_ = Oc, D_ = Dc, I_ = Ic, z_ = Gc, G_ = Uc, U_ = Bc, B_ = Vc, V_ = Hc, H_ = jc, j_ = Wc, W_ = Kc, K_ = Yc, Y_ = Xc, X_ = Qc, Q_ = $c, $_ = Zc, q_ = Jc, Z_ = bc;
uc.Konva = $2.Konva.Util._assign($2.Konva, {
  Arc: y_.Arc,
  Arrow: v_.Arrow,
  Circle: __.Circle,
  Ellipse: S_.Ellipse,
  Image: w_.Image,
  Label: q2.Label,
  Tag: q2.Tag,
  Line: x_.Line,
  Path: C_.Path,
  Rect: k_.Rect,
  RegularPolygon: E_.RegularPolygon,
  Ring: P_.Ring,
  Sprite: T_.Sprite,
  Star: N_.Star,
  Text: R_.Text,
  TextPath: F_.TextPath,
  Transformer: M_.Transformer,
  Wedge: L_.Wedge,
  Filters: {
    Blur: A_.Blur,
    Brighten: O_.Brighten,
    Contrast: D_.Contrast,
    Emboss: I_.Emboss,
    Enhance: z_.Enhance,
    Grayscale: G_.Grayscale,
    HSL: U_.HSL,
    HSV: B_.HSV,
    Invert: V_.Invert,
    Kaleidoscope: H_.Kaleidoscope,
    Mask: j_.Mask,
    Noise: W_.Noise,
    Pixelate: K_.Pixelate,
    Posterize: Y_.Posterize,
    RGB: X_.RGB,
    RGBA: Q_.RGBA,
    Sepia: $_.Sepia,
    Solarize: q_.Solarize,
    Threshold: Z_.Threshold
  }
});
var J_ = C4.exports;
Object.defineProperty(J_, "__esModule", { value: !0 });
const b_ = uc;
C4.exports = b_.Konva;
var c0 = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.Konva = void 0;
  var n = Vu;
  Object.defineProperty(e, "Konva", { enumerable: !0, get: function() {
    return n.Konva;
  } });
  const r = Vu;
  t.exports = r.Konva;
})(c0, c0.exports);
var eS = c0.exports;
const Nl = /* @__PURE__ */ Yu(eS);
var iy = { exports: {} };
/**
 * @license React
 * react-reconciler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tS = function(e) {
  var n = {}, r = ae, o = Jo, l = Object.assign;
  function a(i) {
    for (var s = "https://reactjs.org/docs/error-decoder.html?invariant=" + i, u = 1; u < arguments.length; u++) s += "&args[]=" + encodeURIComponent(arguments[u]);
    return "Minified React error #" + i + "; visit " + s + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var c = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, f = Symbol.for("react.element"), g = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), C = Symbol.for("react.strict_mode"), S = Symbol.for("react.profiler"), x = Symbol.for("react.provider"), v = Symbol.for("react.context"), E = Symbol.for("react.forward_ref"), N = Symbol.for("react.suspense"), k = Symbol.for("react.suspense_list"), w = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), _ = Symbol.for("react.offscreen"), T = Symbol.iterator;
  function F(i) {
    return i === null || typeof i != "object" ? null : (i = T && i[T] || i["@@iterator"], typeof i == "function" ? i : null);
  }
  function L(i) {
    if (i == null) return null;
    if (typeof i == "function") return i.displayName || i.name || null;
    if (typeof i == "string") return i;
    switch (i) {
      case y:
        return "Fragment";
      case g:
        return "Portal";
      case S:
        return "Profiler";
      case C:
        return "StrictMode";
      case N:
        return "Suspense";
      case k:
        return "SuspenseList";
    }
    if (typeof i == "object") switch (i.$$typeof) {
      case v:
        return (i.displayName || "Context") + ".Consumer";
      case x:
        return (i._context.displayName || "Context") + ".Provider";
      case E:
        var s = i.render;
        return i = i.displayName, i || (i = s.displayName || s.name || "", i = i !== "" ? "ForwardRef(" + i + ")" : "ForwardRef"), i;
      case w:
        return s = i.displayName || null, s !== null ? s : L(i.type) || "Memo";
      case p:
        s = i._payload, i = i._init;
        try {
          return L(i(s));
        } catch {
        }
    }
    return null;
  }
  function R(i) {
    var s = i.type;
    switch (i.tag) {
      case 24:
        return "Cache";
      case 9:
        return (s.displayName || "Context") + ".Consumer";
      case 10:
        return (s._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return i = s.render, i = i.displayName || i.name || "", s.displayName || (i !== "" ? "ForwardRef(" + i + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return s;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return L(s);
      case 8:
        return s === C ? "StrictMode" : "Mode";
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
        if (typeof s == "function") return s.displayName || s.name || null;
        if (typeof s == "string") return s;
    }
    return null;
  }
  function G(i) {
    var s = i, u = i;
    if (i.alternate) for (; s.return; ) s = s.return;
    else {
      i = s;
      do
        s = i, s.flags & 4098 && (u = s.return), i = s.return;
      while (i);
    }
    return s.tag === 3 ? u : null;
  }
  function M(i) {
    if (G(i) !== i) throw Error(a(188));
  }
  function B(i) {
    var s = i.alternate;
    if (!s) {
      if (s = G(i), s === null) throw Error(a(188));
      return s !== i ? null : i;
    }
    for (var u = i, d = s; ; ) {
      var h = u.return;
      if (h === null) break;
      var m = h.alternate;
      if (m === null) {
        if (d = h.return, d !== null) {
          u = d;
          continue;
        }
        break;
      }
      if (h.child === m.child) {
        for (m = h.child; m; ) {
          if (m === u) return M(h), i;
          if (m === d) return M(h), s;
          m = m.sibling;
        }
        throw Error(a(188));
      }
      if (u.return !== d.return) u = h, d = m;
      else {
        for (var P = !1, O = h.child; O; ) {
          if (O === u) {
            P = !0, u = h, d = m;
            break;
          }
          if (O === d) {
            P = !0, d = h, u = m;
            break;
          }
          O = O.sibling;
        }
        if (!P) {
          for (O = m.child; O; ) {
            if (O === u) {
              P = !0, u = m, d = h;
              break;
            }
            if (O === d) {
              P = !0, d = m, u = h;
              break;
            }
            O = O.sibling;
          }
          if (!P) throw Error(a(189));
        }
      }
      if (u.alternate !== d) throw Error(a(190));
    }
    if (u.tag !== 3) throw Error(a(188));
    return u.stateNode.current === u ? i : s;
  }
  function j(i) {
    return i = B(i), i !== null ? I(i) : null;
  }
  function I(i) {
    if (i.tag === 5 || i.tag === 6) return i;
    for (i = i.child; i !== null; ) {
      var s = I(i);
      if (s !== null) return s;
      i = i.sibling;
    }
    return null;
  }
  function Z(i) {
    if (i.tag === 5 || i.tag === 6) return i;
    for (i = i.child; i !== null; ) {
      if (i.tag !== 4) {
        var s = Z(i);
        if (s !== null) return s;
      }
      i = i.sibling;
    }
    return null;
  }
  var Q = Array.isArray, pe = e.getPublicInstance, ye = e.getRootHostContext, H = e.getChildHostContext, $ = e.prepareForCommit, X = e.resetAfterCommit, q = e.createInstance, re = e.appendInitialChild, ve = e.finalizeInitialChildren, ft = e.prepareUpdate, ht = e.shouldSetTextContent, ze = e.createTextInstance, A = e.scheduleTimeout, W = e.cancelTimeout, le = e.noTimeout, Ne = e.isPrimaryRenderer, de = e.supportsMutation, De = e.supportsPersistence, Ge = e.supportsHydration, gn = e.getInstanceFromNode, Ae = e.preparePortalMount, Mn = e.getCurrentEventPriority, on = e.detachDeletedInstance, Qn = e.supportsMicrotasks, td = e.scheduleMicrotask, wi = e.supportsTestSelectors, nd = e.findFiberRoot, rd = e.getBoundingRect, Ul = e.getTextContent, xi = e.isHiddenSubtree, ie = e.matchAccessibilityRole, J = e.setFocusIfFocusable, ue = e.setupIntersectionObserver, oe = e.appendChild, Xe = e.appendChildToContainer, Ci = e.commitTextUpdate, Bl = e.commitMount, id = e.commitUpdate, sd = e.insertBefore, ls = e.insertInContainerBefore, as = e.removeChild, us = e.removeChildFromContainer, ki = e.resetTextContent, od = e.hideInstance, ld = e.hideTextInstance, ad = e.unhideInstance, ud = e.unhideTextInstance, py = e.clearContainer, gy = e.cloneInstance, C1 = e.createContainerChildSet, k1 = e.appendChildToContainerChildSet, my = e.finalizeContainerChildren, cd = e.replaceContainerChildren, E1 = e.cloneHiddenInstance, P1 = e.cloneHiddenTextInstance, yy = e.canHydrateInstance, vy = e.canHydrateTextInstance, _y = e.canHydrateSuspenseInstance, T1 = e.isSuspenseInstancePending, dd = e.isSuspenseInstanceFallback, Sy = e.getSuspenseInstanceFallbackErrorDetails, wy = e.registerSuspenseInstanceRetry, Vl = e.getNextHydratableSibling, xy = e.getFirstHydratableChild, Cy = e.getFirstHydratableChildWithinContainer, ky = e.getFirstHydratableChildWithinSuspenseInstance, Ey = e.hydrateInstance, Py = e.hydrateTextInstance, Ty = e.hydrateSuspenseInstance, Ny = e.getNextHydratableInstanceAfterSuspenseInstance, Ry = e.commitHydratedContainer, Fy = e.commitHydratedSuspenseInstance, My = e.clearSuspenseBoundary, Ly = e.clearSuspenseBoundaryFromContainer, Ay = e.shouldDeleteUnhydratedTailInstances, Oy = e.didNotMatchHydratedContainerTextInstance, Dy = e.didNotMatchHydratedTextInstance, fd;
  function go(i) {
    if (fd === void 0) try {
      throw Error();
    } catch (u) {
      var s = u.stack.trim().match(/\n( *(at )?)/);
      fd = s && s[1] || "";
    }
    return `
` + fd + i;
  }
  var hd = !1;
  function pd(i, s) {
    if (!i || hd) return "";
    hd = !0;
    var u = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (s) if (s = function() {
        throw Error();
      }, Object.defineProperty(s.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(s, []);
        } catch (Y) {
          var d = Y;
        }
        Reflect.construct(i, [], s);
      } else {
        try {
          s.call();
        } catch (Y) {
          d = Y;
        }
        i.call(s.prototype);
      }
      else {
        try {
          throw Error();
        } catch (Y) {
          d = Y;
        }
        i();
      }
    } catch (Y) {
      if (Y && d && typeof Y.stack == "string") {
        for (var h = Y.stack.split(`
`), m = d.stack.split(`
`), P = h.length - 1, O = m.length - 1; 1 <= P && 0 <= O && h[P] !== m[O]; ) O--;
        for (; 1 <= P && 0 <= O; P--, O--) if (h[P] !== m[O]) {
          if (P !== 1 || O !== 1)
            do
              if (P--, O--, 0 > O || h[P] !== m[O]) {
                var U = `
` + h[P].replace(" at new ", " at ");
                return i.displayName && U.includes("<anonymous>") && (U = U.replace("<anonymous>", i.displayName)), U;
              }
            while (1 <= P && 0 <= O);
          break;
        }
      }
    } finally {
      hd = !1, Error.prepareStackTrace = u;
    }
    return (i = i ? i.displayName || i.name : "") ? go(i) : "";
  }
  var Iy = Object.prototype.hasOwnProperty, gd = [], cs = -1;
  function Dr(i) {
    return { current: i };
  }
  function je(i) {
    0 > cs || (i.current = gd[cs], gd[cs] = null, cs--);
  }
  function Ve(i, s) {
    cs++, gd[cs] = i.current, i.current = s;
  }
  var Ir = {}, Lt = Dr(Ir), Qt = Dr(!1), Ei = Ir;
  function ds(i, s) {
    var u = i.type.contextTypes;
    if (!u) return Ir;
    var d = i.stateNode;
    if (d && d.__reactInternalMemoizedUnmaskedChildContext === s) return d.__reactInternalMemoizedMaskedChildContext;
    var h = {}, m;
    for (m in u) h[m] = s[m];
    return d && (i = i.stateNode, i.__reactInternalMemoizedUnmaskedChildContext = s, i.__reactInternalMemoizedMaskedChildContext = h), h;
  }
  function $t(i) {
    return i = i.childContextTypes, i != null;
  }
  function Hl() {
    je(Qt), je(Lt);
  }
  function N1(i, s, u) {
    if (Lt.current !== Ir) throw Error(a(168));
    Ve(Lt, s), Ve(Qt, u);
  }
  function R1(i, s, u) {
    var d = i.stateNode;
    if (s = s.childContextTypes, typeof d.getChildContext != "function") return u;
    d = d.getChildContext();
    for (var h in d) if (!(h in s)) throw Error(a(108, R(i) || "Unknown", h));
    return l({}, u, d);
  }
  function jl(i) {
    return i = (i = i.stateNode) && i.__reactInternalMemoizedMergedChildContext || Ir, Ei = Lt.current, Ve(Lt, i), Ve(Qt, Qt.current), !0;
  }
  function F1(i, s, u) {
    var d = i.stateNode;
    if (!d) throw Error(a(169));
    u ? (i = R1(i, s, Ei), d.__reactInternalMemoizedMergedChildContext = i, je(Qt), je(Lt), Ve(Lt, i)) : je(Qt), Ve(Qt, u);
  }
  var Ln = Math.clz32 ? Math.clz32 : Uy, zy = Math.log, Gy = Math.LN2;
  function Uy(i) {
    return i >>>= 0, i === 0 ? 32 : 31 - (zy(i) / Gy | 0) | 0;
  }
  var Wl = 64, Kl = 4194304;
  function mo(i) {
    switch (i & -i) {
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
        return i & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return i & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return i;
    }
  }
  function Yl(i, s) {
    var u = i.pendingLanes;
    if (u === 0) return 0;
    var d = 0, h = i.suspendedLanes, m = i.pingedLanes, P = u & 268435455;
    if (P !== 0) {
      var O = P & ~h;
      O !== 0 ? d = mo(O) : (m &= P, m !== 0 && (d = mo(m)));
    } else P = u & ~h, P !== 0 ? d = mo(P) : m !== 0 && (d = mo(m));
    if (d === 0) return 0;
    if (s !== 0 && s !== d && !(s & h) && (h = d & -d, m = s & -s, h >= m || h === 16 && (m & 4194240) !== 0)) return s;
    if (d & 4 && (d |= u & 16), s = i.entangledLanes, s !== 0) for (i = i.entanglements, s &= d; 0 < s; ) u = 31 - Ln(s), h = 1 << u, d |= i[u], s &= ~h;
    return d;
  }
  function By(i, s) {
    switch (i) {
      case 1:
      case 2:
      case 4:
        return s + 250;
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
        return s + 5e3;
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
  function Vy(i, s) {
    for (var u = i.suspendedLanes, d = i.pingedLanes, h = i.expirationTimes, m = i.pendingLanes; 0 < m; ) {
      var P = 31 - Ln(m), O = 1 << P, U = h[P];
      U === -1 ? (!(O & u) || O & d) && (h[P] = By(O, s)) : U <= s && (i.expiredLanes |= O), m &= ~O;
    }
  }
  function md(i) {
    return i = i.pendingLanes & -1073741825, i !== 0 ? i : i & 1073741824 ? 1073741824 : 0;
  }
  function M1() {
    var i = Wl;
    return Wl <<= 1, !(Wl & 4194240) && (Wl = 64), i;
  }
  function yd(i) {
    for (var s = [], u = 0; 31 > u; u++) s.push(i);
    return s;
  }
  function yo(i, s, u) {
    i.pendingLanes |= s, s !== 536870912 && (i.suspendedLanes = 0, i.pingedLanes = 0), i = i.eventTimes, s = 31 - Ln(s), i[s] = u;
  }
  function Hy(i, s) {
    var u = i.pendingLanes & ~s;
    i.pendingLanes = s, i.suspendedLanes = 0, i.pingedLanes = 0, i.expiredLanes &= s, i.mutableReadLanes &= s, i.entangledLanes &= s, s = i.entanglements;
    var d = i.eventTimes;
    for (i = i.expirationTimes; 0 < u; ) {
      var h = 31 - Ln(u), m = 1 << h;
      s[h] = 0, d[h] = -1, i[h] = -1, u &= ~m;
    }
  }
  function vd(i, s) {
    var u = i.entangledLanes |= s;
    for (i = i.entanglements; u; ) {
      var d = 31 - Ln(u), h = 1 << d;
      h & s | i[d] & s && (i[d] |= s), u &= ~h;
    }
  }
  var Re = 0;
  function L1(i) {
    return i &= -i, 1 < i ? 4 < i ? i & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var _d = o.unstable_scheduleCallback, A1 = o.unstable_cancelCallback, jy = o.unstable_shouldYield, Wy = o.unstable_requestPaint, wt = o.unstable_now, Sd = o.unstable_ImmediatePriority, Ky = o.unstable_UserBlockingPriority, wd = o.unstable_NormalPriority, Yy = o.unstable_IdlePriority, Xl = null, $n = null;
  function Xy(i) {
    if ($n && typeof $n.onCommitFiberRoot == "function") try {
      $n.onCommitFiberRoot(Xl, i, void 0, (i.current.flags & 128) === 128);
    } catch {
    }
  }
  function Qy(i, s) {
    return i === s && (i !== 0 || 1 / i === 1 / s) || i !== i && s !== s;
  }
  var An = typeof Object.is == "function" ? Object.is : Qy, dr = null, Ql = !1, xd = !1;
  function O1(i) {
    dr === null ? dr = [i] : dr.push(i);
  }
  function $y(i) {
    Ql = !0, O1(i);
  }
  function qn() {
    if (!xd && dr !== null) {
      xd = !0;
      var i = 0, s = Re;
      try {
        var u = dr;
        for (Re = 1; i < u.length; i++) {
          var d = u[i];
          do
            d = d(!0);
          while (d !== null);
        }
        dr = null, Ql = !1;
      } catch (h) {
        throw dr !== null && (dr = dr.slice(i + 1)), _d(Sd, qn), h;
      } finally {
        Re = s, xd = !1;
      }
    }
    return null;
  }
  var fs = [], hs = 0, $l = null, ql = 0, mn = [], yn = 0, Pi = null, fr = 1, hr = "";
  function Ti(i, s) {
    fs[hs++] = ql, fs[hs++] = $l, $l = i, ql = s;
  }
  function D1(i, s, u) {
    mn[yn++] = fr, mn[yn++] = hr, mn[yn++] = Pi, Pi = i;
    var d = fr;
    i = hr;
    var h = 32 - Ln(d) - 1;
    d &= ~(1 << h), u += 1;
    var m = 32 - Ln(s) + h;
    if (30 < m) {
      var P = h - h % 5;
      m = (d & (1 << P) - 1).toString(32), d >>= P, h -= P, fr = 1 << 32 - Ln(s) + h | u << h | d, hr = m + i;
    } else fr = 1 << m | u << h | d, hr = i;
  }
  function Cd(i) {
    i.return !== null && (Ti(i, 1), D1(i, 1, 0));
  }
  function kd(i) {
    for (; i === $l; ) $l = fs[--hs], fs[hs] = null, ql = fs[--hs], fs[hs] = null;
    for (; i === Pi; ) Pi = mn[--yn], mn[yn] = null, hr = mn[--yn], mn[yn] = null, fr = mn[--yn], mn[yn] = null;
  }
  var ln = null, vn = null, Qe = !1, vo = !1, On = null;
  function I1(i, s) {
    var u = Cn(5, null, null, 0);
    u.elementType = "DELETED", u.stateNode = s, u.return = i, s = i.deletions, s === null ? (i.deletions = [u], i.flags |= 16) : s.push(u);
  }
  function z1(i, s) {
    switch (i.tag) {
      case 5:
        return s = yy(s, i.type, i.pendingProps), s !== null ? (i.stateNode = s, ln = i, vn = xy(s), !0) : !1;
      case 6:
        return s = vy(s, i.pendingProps), s !== null ? (i.stateNode = s, ln = i, vn = null, !0) : !1;
      case 13:
        if (s = _y(s), s !== null) {
          var u = Pi !== null ? { id: fr, overflow: hr } : null;
          return i.memoizedState = { dehydrated: s, treeContext: u, retryLane: 1073741824 }, u = Cn(18, null, null, 0), u.stateNode = s, u.return = i, i.child = u, ln = i, vn = null, !0;
        }
        return !1;
      default:
        return !1;
    }
  }
  function Ed(i) {
    return (i.mode & 1) !== 0 && (i.flags & 128) === 0;
  }
  function Pd(i) {
    if (Qe) {
      var s = vn;
      if (s) {
        var u = s;
        if (!z1(i, s)) {
          if (Ed(i)) throw Error(a(418));
          s = Vl(u);
          var d = ln;
          s && z1(i, s) ? I1(d, u) : (i.flags = i.flags & -4097 | 2, Qe = !1, ln = i);
        }
      } else {
        if (Ed(i)) throw Error(a(418));
        i.flags = i.flags & -4097 | 2, Qe = !1, ln = i;
      }
    }
  }
  function G1(i) {
    for (i = i.return; i !== null && i.tag !== 5 && i.tag !== 3 && i.tag !== 13; ) i = i.return;
    ln = i;
  }
  function Zl(i) {
    if (!Ge || i !== ln) return !1;
    if (!Qe) return G1(i), Qe = !0, !1;
    if (i.tag !== 3 && (i.tag !== 5 || Ay(i.type) && !ht(i.type, i.memoizedProps))) {
      var s = vn;
      if (s) {
        if (Ed(i)) throw U1(), Error(a(418));
        for (; s; ) I1(i, s), s = Vl(s);
      }
    }
    if (G1(i), i.tag === 13) {
      if (!Ge) throw Error(a(316));
      if (i = i.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(a(317));
      vn = Ny(i);
    } else vn = ln ? Vl(i.stateNode) : null;
    return !0;
  }
  function U1() {
    for (var i = vn; i; ) i = Vl(i);
  }
  function ps() {
    Ge && (vn = ln = null, vo = Qe = !1);
  }
  function Td(i) {
    On === null ? On = [i] : On.push(i);
  }
  var qy = c.ReactCurrentBatchConfig;
  function Jl(i, s) {
    if (An(i, s)) return !0;
    if (typeof i != "object" || i === null || typeof s != "object" || s === null) return !1;
    var u = Object.keys(i), d = Object.keys(s);
    if (u.length !== d.length) return !1;
    for (d = 0; d < u.length; d++) {
      var h = u[d];
      if (!Iy.call(s, h) || !An(i[h], s[h])) return !1;
    }
    return !0;
  }
  function Zy(i) {
    switch (i.tag) {
      case 5:
        return go(i.type);
      case 16:
        return go("Lazy");
      case 13:
        return go("Suspense");
      case 19:
        return go("SuspenseList");
      case 0:
      case 2:
      case 15:
        return i = pd(i.type, !1), i;
      case 11:
        return i = pd(i.type.render, !1), i;
      case 1:
        return i = pd(i.type, !0), i;
      default:
        return "";
    }
  }
  function _o(i, s, u) {
    if (i = u.ref, i !== null && typeof i != "function" && typeof i != "object") {
      if (u._owner) {
        if (u = u._owner, u) {
          if (u.tag !== 1) throw Error(a(309));
          var d = u.stateNode;
        }
        if (!d) throw Error(a(147, i));
        var h = d, m = "" + i;
        return s !== null && s.ref !== null && typeof s.ref == "function" && s.ref._stringRef === m ? s.ref : (s = function(P) {
          var O = h.refs;
          P === null ? delete O[m] : O[m] = P;
        }, s._stringRef = m, s);
      }
      if (typeof i != "string") throw Error(a(284));
      if (!u._owner) throw Error(a(290, i));
    }
    return i;
  }
  function bl(i, s) {
    throw i = Object.prototype.toString.call(s), Error(a(31, i === "[object Object]" ? "object with keys {" + Object.keys(s).join(", ") + "}" : i));
  }
  function B1(i) {
    var s = i._init;
    return s(i._payload);
  }
  function V1(i) {
    function s(z, D) {
      if (i) {
        var V = z.deletions;
        V === null ? (z.deletions = [D], z.flags |= 16) : V.push(D);
      }
    }
    function u(z, D) {
      if (!i) return null;
      for (; D !== null; ) s(z, D), D = D.sibling;
      return null;
    }
    function d(z, D) {
      for (z = /* @__PURE__ */ new Map(); D !== null; ) D.key !== null ? z.set(D.key, D) : z.set(D.index, D), D = D.sibling;
      return z;
    }
    function h(z, D) {
      return z = jr(z, D), z.index = 0, z.sibling = null, z;
    }
    function m(z, D, V) {
      return z.index = V, i ? (V = z.alternate, V !== null ? (V = V.index, V < D ? (z.flags |= 2, D) : V) : (z.flags |= 2, D)) : (z.flags |= 1048576, D);
    }
    function P(z) {
      return i && z.alternate === null && (z.flags |= 2), z;
    }
    function O(z, D, V, ee) {
      return D === null || D.tag !== 6 ? (D = Cf(V, z.mode, ee), D.return = z, D) : (D = h(D, V), D.return = z, D);
    }
    function U(z, D, V, ee) {
      var ce = V.type;
      return ce === y ? se(z, D, V.props.children, ee, V.key) : D !== null && (D.elementType === ce || typeof ce == "object" && ce !== null && ce.$$typeof === p && B1(ce) === D.type) ? (ee = h(D, V.props), ee.ref = _o(z, D, V), ee.return = z, ee) : (ee = Fa(V.type, V.key, V.props, null, z.mode, ee), ee.ref = _o(z, D, V), ee.return = z, ee);
    }
    function Y(z, D, V, ee) {
      return D === null || D.tag !== 4 || D.stateNode.containerInfo !== V.containerInfo || D.stateNode.implementation !== V.implementation ? (D = kf(V, z.mode, ee), D.return = z, D) : (D = h(D, V.children || []), D.return = z, D);
    }
    function se(z, D, V, ee, ce) {
      return D === null || D.tag !== 7 ? (D = Oi(V, z.mode, ee, ce), D.return = z, D) : (D = h(D, V), D.return = z, D);
    }
    function ge(z, D, V) {
      if (typeof D == "string" && D !== "" || typeof D == "number") return D = Cf("" + D, z.mode, V), D.return = z, D;
      if (typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case f:
            return V = Fa(D.type, D.key, D.props, null, z.mode, V), V.ref = _o(z, null, D), V.return = z, V;
          case g:
            return D = kf(D, z.mode, V), D.return = z, D;
          case p:
            var ee = D._init;
            return ge(z, ee(D._payload), V);
        }
        if (Q(D) || F(D)) return D = Oi(D, z.mode, V, null), D.return = z, D;
        bl(z, D);
      }
      return null;
    }
    function b(z, D, V, ee) {
      var ce = D !== null ? D.key : null;
      if (typeof V == "string" && V !== "" || typeof V == "number") return ce !== null ? null : O(z, D, "" + V, ee);
      if (typeof V == "object" && V !== null) {
        switch (V.$$typeof) {
          case f:
            return V.key === ce ? U(z, D, V, ee) : null;
          case g:
            return V.key === ce ? Y(z, D, V, ee) : null;
          case p:
            return ce = V._init, b(
              z,
              D,
              ce(V._payload),
              ee
            );
        }
        if (Q(V) || F(V)) return ce !== null ? null : se(z, D, V, ee, null);
        bl(z, V);
      }
      return null;
    }
    function We(z, D, V, ee, ce) {
      if (typeof ee == "string" && ee !== "" || typeof ee == "number") return z = z.get(V) || null, O(D, z, "" + ee, ce);
      if (typeof ee == "object" && ee !== null) {
        switch (ee.$$typeof) {
          case f:
            return z = z.get(ee.key === null ? V : ee.key) || null, U(D, z, ee, ce);
          case g:
            return z = z.get(ee.key === null ? V : ee.key) || null, Y(D, z, ee, ce);
          case p:
            var _e = ee._init;
            return We(z, D, V, _e(ee._payload), ce);
        }
        if (Q(ee) || F(ee)) return z = z.get(V) || null, se(D, z, ee, ce, null);
        bl(D, ee);
      }
      return null;
    }
    function Ue(z, D, V, ee) {
      for (var ce = null, _e = null, me = D, Fe = D = 0, kt = null; me !== null && Fe < V.length; Fe++) {
        me.index > Fe ? (kt = me, me = null) : kt = me.sibling;
        var Me = b(z, me, V[Fe], ee);
        if (Me === null) {
          me === null && (me = kt);
          break;
        }
        i && me && Me.alternate === null && s(z, me), D = m(Me, D, Fe), _e === null ? ce = Me : _e.sibling = Me, _e = Me, me = kt;
      }
      if (Fe === V.length) return u(z, me), Qe && Ti(z, Fe), ce;
      if (me === null) {
        for (; Fe < V.length; Fe++) me = ge(z, V[Fe], ee), me !== null && (D = m(me, D, Fe), _e === null ? ce = me : _e.sibling = me, _e = me);
        return Qe && Ti(z, Fe), ce;
      }
      for (me = d(z, me); Fe < V.length; Fe++) kt = We(me, z, Fe, V[Fe], ee), kt !== null && (i && kt.alternate !== null && me.delete(kt.key === null ? Fe : kt.key), D = m(kt, D, Fe), _e === null ? ce = kt : _e.sibling = kt, _e = kt);
      return i && me.forEach(function(Wr) {
        return s(z, Wr);
      }), Qe && Ti(z, Fe), ce;
    }
    function bt(z, D, V, ee) {
      var ce = F(V);
      if (typeof ce != "function") throw Error(a(150));
      if (V = ce.call(V), V == null) throw Error(a(151));
      for (var _e = ce = null, me = D, Fe = D = 0, kt = null, Me = V.next(); me !== null && !Me.done; Fe++, Me = V.next()) {
        me.index > Fe ? (kt = me, me = null) : kt = me.sibling;
        var Wr = b(z, me, Me.value, ee);
        if (Wr === null) {
          me === null && (me = kt);
          break;
        }
        i && me && Wr.alternate === null && s(z, me), D = m(Wr, D, Fe), _e === null ? ce = Wr : _e.sibling = Wr, _e = Wr, me = kt;
      }
      if (Me.done) return u(
        z,
        me
      ), Qe && Ti(z, Fe), ce;
      if (me === null) {
        for (; !Me.done; Fe++, Me = V.next()) Me = ge(z, Me.value, ee), Me !== null && (D = m(Me, D, Fe), _e === null ? ce = Me : _e.sibling = Me, _e = Me);
        return Qe && Ti(z, Fe), ce;
      }
      for (me = d(z, me); !Me.done; Fe++, Me = V.next()) Me = We(me, z, Fe, Me.value, ee), Me !== null && (i && Me.alternate !== null && me.delete(Me.key === null ? Fe : Me.key), D = m(Me, D, Fe), _e === null ? ce = Me : _e.sibling = Me, _e = Me);
      return i && me.forEach(function(T5) {
        return s(z, T5);
      }), Qe && Ti(z, Fe), ce;
    }
    function yr(z, D, V, ee) {
      if (typeof V == "object" && V !== null && V.type === y && V.key === null && (V = V.props.children), typeof V == "object" && V !== null) {
        switch (V.$$typeof) {
          case f:
            e: {
              for (var ce = V.key, _e = D; _e !== null; ) {
                if (_e.key === ce) {
                  if (ce = V.type, ce === y) {
                    if (_e.tag === 7) {
                      u(z, _e.sibling), D = h(_e, V.props.children), D.return = z, z = D;
                      break e;
                    }
                  } else if (_e.elementType === ce || typeof ce == "object" && ce !== null && ce.$$typeof === p && B1(ce) === _e.type) {
                    u(z, _e.sibling), D = h(_e, V.props), D.ref = _o(z, _e, V), D.return = z, z = D;
                    break e;
                  }
                  u(z, _e);
                  break;
                } else s(z, _e);
                _e = _e.sibling;
              }
              V.type === y ? (D = Oi(V.props.children, z.mode, ee, V.key), D.return = z, z = D) : (ee = Fa(V.type, V.key, V.props, null, z.mode, ee), ee.ref = _o(z, D, V), ee.return = z, z = ee);
            }
            return P(z);
          case g:
            e: {
              for (_e = V.key; D !== null; ) {
                if (D.key === _e) if (D.tag === 4 && D.stateNode.containerInfo === V.containerInfo && D.stateNode.implementation === V.implementation) {
                  u(z, D.sibling), D = h(D, V.children || []), D.return = z, z = D;
                  break e;
                } else {
                  u(z, D);
                  break;
                }
                else s(z, D);
                D = D.sibling;
              }
              D = kf(V, z.mode, ee), D.return = z, z = D;
            }
            return P(z);
          case p:
            return _e = V._init, yr(z, D, _e(V._payload), ee);
        }
        if (Q(V)) return Ue(z, D, V, ee);
        if (F(V)) return bt(z, D, V, ee);
        bl(z, V);
      }
      return typeof V == "string" && V !== "" || typeof V == "number" ? (V = "" + V, D !== null && D.tag === 6 ? (u(z, D.sibling), D = h(D, V), D.return = z, z = D) : (u(z, D), D = Cf(V, z.mode, ee), D.return = z, z = D), P(z)) : u(z, D);
    }
    return yr;
  }
  var gs = V1(!0), H1 = V1(!1), ea = Dr(null), ta = null, ms = null, Nd = null;
  function Rd() {
    Nd = ms = ta = null;
  }
  function j1(i, s, u) {
    Ne ? (Ve(ea, s._currentValue), s._currentValue = u) : (Ve(ea, s._currentValue2), s._currentValue2 = u);
  }
  function Fd(i) {
    var s = ea.current;
    je(ea), Ne ? i._currentValue = s : i._currentValue2 = s;
  }
  function Md(i, s, u) {
    for (; i !== null; ) {
      var d = i.alternate;
      if ((i.childLanes & s) !== s ? (i.childLanes |= s, d !== null && (d.childLanes |= s)) : d !== null && (d.childLanes & s) !== s && (d.childLanes |= s), i === u) break;
      i = i.return;
    }
  }
  function ys(i, s) {
    ta = i, Nd = ms = null, i = i.dependencies, i !== null && i.firstContext !== null && (i.lanes & s && (qt = !0), i.firstContext = null);
  }
  function _n(i) {
    var s = Ne ? i._currentValue : i._currentValue2;
    if (Nd !== i) if (i = { context: i, memoizedValue: s, next: null }, ms === null) {
      if (ta === null) throw Error(a(308));
      ms = i, ta.dependencies = { lanes: 0, firstContext: i };
    } else ms = ms.next = i;
    return s;
  }
  var Ni = null;
  function Ld(i) {
    Ni === null ? Ni = [i] : Ni.push(i);
  }
  function W1(i, s, u, d) {
    var h = s.interleaved;
    return h === null ? (u.next = u, Ld(s)) : (u.next = h.next, h.next = u), s.interleaved = u, Zn(i, d);
  }
  function Zn(i, s) {
    i.lanes |= s;
    var u = i.alternate;
    for (u !== null && (u.lanes |= s), u = i, i = i.return; i !== null; ) i.childLanes |= s, u = i.alternate, u !== null && (u.childLanes |= s), u = i, i = i.return;
    return u.tag === 3 ? u.stateNode : null;
  }
  var zr = !1;
  function Ad(i) {
    i.updateQueue = { baseState: i.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function K1(i, s) {
    i = i.updateQueue, s.updateQueue === i && (s.updateQueue = { baseState: i.baseState, firstBaseUpdate: i.firstBaseUpdate, lastBaseUpdate: i.lastBaseUpdate, shared: i.shared, effects: i.effects });
  }
  function pr(i, s) {
    return { eventTime: i, lane: s, tag: 0, payload: null, callback: null, next: null };
  }
  function Gr(i, s, u) {
    var d = i.updateQueue;
    if (d === null) return null;
    if (d = d.shared, we & 2) {
      var h = d.pending;
      return h === null ? s.next = s : (s.next = h.next, h.next = s), d.pending = s, Zn(i, u);
    }
    return h = d.interleaved, h === null ? (s.next = s, Ld(d)) : (s.next = h.next, h.next = s), d.interleaved = s, Zn(i, u);
  }
  function na(i, s, u) {
    if (s = s.updateQueue, s !== null && (s = s.shared, (u & 4194240) !== 0)) {
      var d = s.lanes;
      d &= i.pendingLanes, u |= d, s.lanes = u, vd(i, u);
    }
  }
  function Y1(i, s) {
    var u = i.updateQueue, d = i.alternate;
    if (d !== null && (d = d.updateQueue, u === d)) {
      var h = null, m = null;
      if (u = u.firstBaseUpdate, u !== null) {
        do {
          var P = { eventTime: u.eventTime, lane: u.lane, tag: u.tag, payload: u.payload, callback: u.callback, next: null };
          m === null ? h = m = P : m = m.next = P, u = u.next;
        } while (u !== null);
        m === null ? h = m = s : m = m.next = s;
      } else h = m = s;
      u = { baseState: d.baseState, firstBaseUpdate: h, lastBaseUpdate: m, shared: d.shared, effects: d.effects }, i.updateQueue = u;
      return;
    }
    i = u.lastBaseUpdate, i === null ? u.firstBaseUpdate = s : i.next = s, u.lastBaseUpdate = s;
  }
  function ra(i, s, u, d) {
    var h = i.updateQueue;
    zr = !1;
    var m = h.firstBaseUpdate, P = h.lastBaseUpdate, O = h.shared.pending;
    if (O !== null) {
      h.shared.pending = null;
      var U = O, Y = U.next;
      U.next = null, P === null ? m = Y : P.next = Y, P = U;
      var se = i.alternate;
      se !== null && (se = se.updateQueue, O = se.lastBaseUpdate, O !== P && (O === null ? se.firstBaseUpdate = Y : O.next = Y, se.lastBaseUpdate = U));
    }
    if (m !== null) {
      var ge = h.baseState;
      P = 0, se = Y = U = null, O = m;
      do {
        var b = O.lane, We = O.eventTime;
        if ((d & b) === b) {
          se !== null && (se = se.next = {
            eventTime: We,
            lane: 0,
            tag: O.tag,
            payload: O.payload,
            callback: O.callback,
            next: null
          });
          e: {
            var Ue = i, bt = O;
            switch (b = s, We = u, bt.tag) {
              case 1:
                if (Ue = bt.payload, typeof Ue == "function") {
                  ge = Ue.call(We, ge, b);
                  break e;
                }
                ge = Ue;
                break e;
              case 3:
                Ue.flags = Ue.flags & -65537 | 128;
              case 0:
                if (Ue = bt.payload, b = typeof Ue == "function" ? Ue.call(We, ge, b) : Ue, b == null) break e;
                ge = l({}, ge, b);
                break e;
              case 2:
                zr = !0;
            }
          }
          O.callback !== null && O.lane !== 0 && (i.flags |= 64, b = h.effects, b === null ? h.effects = [O] : b.push(O));
        } else We = { eventTime: We, lane: b, tag: O.tag, payload: O.payload, callback: O.callback, next: null }, se === null ? (Y = se = We, U = ge) : se = se.next = We, P |= b;
        if (O = O.next, O === null) {
          if (O = h.shared.pending, O === null) break;
          b = O, O = b.next, b.next = null, h.lastBaseUpdate = b, h.shared.pending = null;
        }
      } while (!0);
      if (se === null && (U = ge), h.baseState = U, h.firstBaseUpdate = Y, h.lastBaseUpdate = se, s = h.shared.interleaved, s !== null) {
        h = s;
        do
          P |= h.lane, h = h.next;
        while (h !== s);
      } else m === null && (h.shared.lanes = 0);
      Fi |= P, i.lanes = P, i.memoizedState = ge;
    }
  }
  function X1(i, s, u) {
    if (i = s.effects, s.effects = null, i !== null) for (s = 0; s < i.length; s++) {
      var d = i[s], h = d.callback;
      if (h !== null) {
        if (d.callback = null, d = u, typeof h != "function") throw Error(a(191, h));
        h.call(d);
      }
    }
  }
  var So = {}, Sn = Dr(So), wo = Dr(So), vs = Dr(So);
  function Jn(i) {
    if (i === So) throw Error(a(174));
    return i;
  }
  function Od(i, s) {
    Ve(vs, s), Ve(wo, i), Ve(Sn, So), i = ye(s), je(Sn), Ve(Sn, i);
  }
  function _s() {
    je(Sn), je(wo), je(vs);
  }
  function Q1(i) {
    var s = Jn(vs.current), u = Jn(Sn.current);
    s = H(u, i.type, s), u !== s && (Ve(wo, i), Ve(Sn, s));
  }
  function Dd(i) {
    wo.current === i && (je(Sn), je(wo));
  }
  var Je = Dr(0);
  function ia(i) {
    for (var s = i; s !== null; ) {
      if (s.tag === 13) {
        var u = s.memoizedState;
        if (u !== null && (u = u.dehydrated, u === null || T1(u) || dd(u))) return s;
      } else if (s.tag === 19 && s.memoizedProps.revealOrder !== void 0) {
        if (s.flags & 128) return s;
      } else if (s.child !== null) {
        s.child.return = s, s = s.child;
        continue;
      }
      if (s === i) break;
      for (; s.sibling === null; ) {
        if (s.return === null || s.return === i) return null;
        s = s.return;
      }
      s.sibling.return = s.return, s = s.sibling;
    }
    return null;
  }
  var Id = [];
  function zd() {
    for (var i = 0; i < Id.length; i++) {
      var s = Id[i];
      Ne ? s._workInProgressVersionPrimary = null : s._workInProgressVersionSecondary = null;
    }
    Id.length = 0;
  }
  var sa = c.ReactCurrentDispatcher, Gd = c.ReactCurrentBatchConfig, Ri = 0, be = null, pt = null, xt = null, oa = !1, xo = !1, Co = 0, Jy = 0;
  function At() {
    throw Error(a(321));
  }
  function Ud(i, s) {
    if (s === null) return !1;
    for (var u = 0; u < s.length && u < i.length; u++) if (!An(i[u], s[u])) return !1;
    return !0;
  }
  function Bd(i, s, u, d, h, m) {
    if (Ri = m, be = s, s.memoizedState = null, s.updateQueue = null, s.lanes = 0, sa.current = i === null || i.memoizedState === null ? n5 : r5, i = u(d, h), xo) {
      m = 0;
      do {
        if (xo = !1, Co = 0, 25 <= m) throw Error(a(301));
        m += 1, xt = pt = null, s.updateQueue = null, sa.current = i5, i = u(d, h);
      } while (xo);
    }
    if (sa.current = ua, s = pt !== null && pt.next !== null, Ri = 0, xt = pt = be = null, oa = !1, s) throw Error(a(300));
    return i;
  }
  function Vd() {
    var i = Co !== 0;
    return Co = 0, i;
  }
  function bn() {
    var i = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return xt === null ? be.memoizedState = xt = i : xt = xt.next = i, xt;
  }
  function wn() {
    if (pt === null) {
      var i = be.alternate;
      i = i !== null ? i.memoizedState : null;
    } else i = pt.next;
    var s = xt === null ? be.memoizedState : xt.next;
    if (s !== null) xt = s, pt = i;
    else {
      if (i === null) throw Error(a(310));
      pt = i, i = { memoizedState: pt.memoizedState, baseState: pt.baseState, baseQueue: pt.baseQueue, queue: pt.queue, next: null }, xt === null ? be.memoizedState = xt = i : xt = xt.next = i;
    }
    return xt;
  }
  function ko(i, s) {
    return typeof s == "function" ? s(i) : s;
  }
  function Hd(i) {
    var s = wn(), u = s.queue;
    if (u === null) throw Error(a(311));
    u.lastRenderedReducer = i;
    var d = pt, h = d.baseQueue, m = u.pending;
    if (m !== null) {
      if (h !== null) {
        var P = h.next;
        h.next = m.next, m.next = P;
      }
      d.baseQueue = h = m, u.pending = null;
    }
    if (h !== null) {
      m = h.next, d = d.baseState;
      var O = P = null, U = null, Y = m;
      do {
        var se = Y.lane;
        if ((Ri & se) === se) U !== null && (U = U.next = { lane: 0, action: Y.action, hasEagerState: Y.hasEagerState, eagerState: Y.eagerState, next: null }), d = Y.hasEagerState ? Y.eagerState : i(d, Y.action);
        else {
          var ge = {
            lane: se,
            action: Y.action,
            hasEagerState: Y.hasEagerState,
            eagerState: Y.eagerState,
            next: null
          };
          U === null ? (O = U = ge, P = d) : U = U.next = ge, be.lanes |= se, Fi |= se;
        }
        Y = Y.next;
      } while (Y !== null && Y !== m);
      U === null ? P = d : U.next = O, An(d, s.memoizedState) || (qt = !0), s.memoizedState = d, s.baseState = P, s.baseQueue = U, u.lastRenderedState = d;
    }
    if (i = u.interleaved, i !== null) {
      h = i;
      do
        m = h.lane, be.lanes |= m, Fi |= m, h = h.next;
      while (h !== i);
    } else h === null && (u.lanes = 0);
    return [s.memoizedState, u.dispatch];
  }
  function jd(i) {
    var s = wn(), u = s.queue;
    if (u === null) throw Error(a(311));
    u.lastRenderedReducer = i;
    var d = u.dispatch, h = u.pending, m = s.memoizedState;
    if (h !== null) {
      u.pending = null;
      var P = h = h.next;
      do
        m = i(m, P.action), P = P.next;
      while (P !== h);
      An(m, s.memoizedState) || (qt = !0), s.memoizedState = m, s.baseQueue === null && (s.baseState = m), u.lastRenderedState = m;
    }
    return [m, d];
  }
  function $1() {
  }
  function q1(i, s) {
    var u = be, d = wn(), h = s(), m = !An(d.memoizedState, h);
    if (m && (d.memoizedState = h, qt = !0), d = d.queue, Wd(b1.bind(null, u, d, i), [i]), d.getSnapshot !== s || m || xt !== null && xt.memoizedState.tag & 1) {
      if (u.flags |= 2048, Eo(9, J1.bind(null, u, d, h, s), void 0, null), Ct === null) throw Error(a(349));
      Ri & 30 || Z1(u, s, h);
    }
    return h;
  }
  function Z1(i, s, u) {
    i.flags |= 16384, i = { getSnapshot: s, value: u }, s = be.updateQueue, s === null ? (s = { lastEffect: null, stores: null }, be.updateQueue = s, s.stores = [i]) : (u = s.stores, u === null ? s.stores = [i] : u.push(i));
  }
  function J1(i, s, u, d) {
    s.value = u, s.getSnapshot = d, ep(s) && tp(i);
  }
  function b1(i, s, u) {
    return u(function() {
      ep(s) && tp(i);
    });
  }
  function ep(i) {
    var s = i.getSnapshot;
    i = i.value;
    try {
      var u = s();
      return !An(i, u);
    } catch {
      return !0;
    }
  }
  function tp(i) {
    var s = Zn(i, 1);
    s !== null && xn(s, i, 1, -1);
  }
  function np(i) {
    var s = bn();
    return typeof i == "function" && (i = i()), s.memoizedState = s.baseState = i, i = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ko, lastRenderedState: i }, s.queue = i, i = i.dispatch = t5.bind(null, be, i), [s.memoizedState, i];
  }
  function Eo(i, s, u, d) {
    return i = { tag: i, create: s, destroy: u, deps: d, next: null }, s = be.updateQueue, s === null ? (s = { lastEffect: null, stores: null }, be.updateQueue = s, s.lastEffect = i.next = i) : (u = s.lastEffect, u === null ? s.lastEffect = i.next = i : (d = u.next, u.next = i, i.next = d, s.lastEffect = i)), i;
  }
  function rp() {
    return wn().memoizedState;
  }
  function la(i, s, u, d) {
    var h = bn();
    be.flags |= i, h.memoizedState = Eo(1 | s, u, void 0, d === void 0 ? null : d);
  }
  function aa(i, s, u, d) {
    var h = wn();
    d = d === void 0 ? null : d;
    var m = void 0;
    if (pt !== null) {
      var P = pt.memoizedState;
      if (m = P.destroy, d !== null && Ud(d, P.deps)) {
        h.memoizedState = Eo(s, u, m, d);
        return;
      }
    }
    be.flags |= i, h.memoizedState = Eo(1 | s, u, m, d);
  }
  function ip(i, s) {
    return la(8390656, 8, i, s);
  }
  function Wd(i, s) {
    return aa(2048, 8, i, s);
  }
  function sp(i, s) {
    return aa(4, 2, i, s);
  }
  function op(i, s) {
    return aa(4, 4, i, s);
  }
  function lp(i, s) {
    if (typeof s == "function") return i = i(), s(i), function() {
      s(null);
    };
    if (s != null) return i = i(), s.current = i, function() {
      s.current = null;
    };
  }
  function ap(i, s, u) {
    return u = u != null ? u.concat([i]) : null, aa(4, 4, lp.bind(null, s, i), u);
  }
  function Kd() {
  }
  function up(i, s) {
    var u = wn();
    s = s === void 0 ? null : s;
    var d = u.memoizedState;
    return d !== null && s !== null && Ud(s, d[1]) ? d[0] : (u.memoizedState = [i, s], i);
  }
  function cp(i, s) {
    var u = wn();
    s = s === void 0 ? null : s;
    var d = u.memoizedState;
    return d !== null && s !== null && Ud(s, d[1]) ? d[0] : (i = i(), u.memoizedState = [i, s], i);
  }
  function dp(i, s, u) {
    return Ri & 21 ? (An(u, s) || (u = M1(), be.lanes |= u, Fi |= u, i.baseState = !0), s) : (i.baseState && (i.baseState = !1, qt = !0), i.memoizedState = u);
  }
  function by(i, s) {
    var u = Re;
    Re = u !== 0 && 4 > u ? u : 4, i(!0);
    var d = Gd.transition;
    Gd.transition = {};
    try {
      i(!1), s();
    } finally {
      Re = u, Gd.transition = d;
    }
  }
  function fp() {
    return wn().memoizedState;
  }
  function e5(i, s, u) {
    var d = Vr(i);
    if (u = { lane: d, action: u, hasEagerState: !1, eagerState: null, next: null }, hp(i)) pp(s, u);
    else if (u = W1(i, s, u, d), u !== null) {
      var h = It();
      xn(u, i, d, h), gp(u, s, d);
    }
  }
  function t5(i, s, u) {
    var d = Vr(i), h = { lane: d, action: u, hasEagerState: !1, eagerState: null, next: null };
    if (hp(i)) pp(s, h);
    else {
      var m = i.alternate;
      if (i.lanes === 0 && (m === null || m.lanes === 0) && (m = s.lastRenderedReducer, m !== null)) try {
        var P = s.lastRenderedState, O = m(P, u);
        if (h.hasEagerState = !0, h.eagerState = O, An(O, P)) {
          var U = s.interleaved;
          U === null ? (h.next = h, Ld(s)) : (h.next = U.next, U.next = h), s.interleaved = h;
          return;
        }
      } catch {
      } finally {
      }
      u = W1(i, s, h, d), u !== null && (h = It(), xn(u, i, d, h), gp(u, s, d));
    }
  }
  function hp(i) {
    var s = i.alternate;
    return i === be || s !== null && s === be;
  }
  function pp(i, s) {
    xo = oa = !0;
    var u = i.pending;
    u === null ? s.next = s : (s.next = u.next, u.next = s), i.pending = s;
  }
  function gp(i, s, u) {
    if (u & 4194240) {
      var d = s.lanes;
      d &= i.pendingLanes, u |= d, s.lanes = u, vd(i, u);
    }
  }
  var ua = { readContext: _n, useCallback: At, useContext: At, useEffect: At, useImperativeHandle: At, useInsertionEffect: At, useLayoutEffect: At, useMemo: At, useReducer: At, useRef: At, useState: At, useDebugValue: At, useDeferredValue: At, useTransition: At, useMutableSource: At, useSyncExternalStore: At, useId: At, unstable_isNewReconciler: !1 }, n5 = { readContext: _n, useCallback: function(i, s) {
    return bn().memoizedState = [i, s === void 0 ? null : s], i;
  }, useContext: _n, useEffect: ip, useImperativeHandle: function(i, s, u) {
    return u = u != null ? u.concat([i]) : null, la(
      4194308,
      4,
      lp.bind(null, s, i),
      u
    );
  }, useLayoutEffect: function(i, s) {
    return la(4194308, 4, i, s);
  }, useInsertionEffect: function(i, s) {
    return la(4, 2, i, s);
  }, useMemo: function(i, s) {
    var u = bn();
    return s = s === void 0 ? null : s, i = i(), u.memoizedState = [i, s], i;
  }, useReducer: function(i, s, u) {
    var d = bn();
    return s = u !== void 0 ? u(s) : s, d.memoizedState = d.baseState = s, i = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: i, lastRenderedState: s }, d.queue = i, i = i.dispatch = e5.bind(null, be, i), [d.memoizedState, i];
  }, useRef: function(i) {
    var s = bn();
    return i = { current: i }, s.memoizedState = i;
  }, useState: np, useDebugValue: Kd, useDeferredValue: function(i) {
    return bn().memoizedState = i;
  }, useTransition: function() {
    var i = np(!1), s = i[0];
    return i = by.bind(null, i[1]), bn().memoizedState = i, [s, i];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(i, s, u) {
    var d = be, h = bn();
    if (Qe) {
      if (u === void 0) throw Error(a(407));
      u = u();
    } else {
      if (u = s(), Ct === null) throw Error(a(349));
      Ri & 30 || Z1(d, s, u);
    }
    h.memoizedState = u;
    var m = { value: u, getSnapshot: s };
    return h.queue = m, ip(b1.bind(
      null,
      d,
      m,
      i
    ), [i]), d.flags |= 2048, Eo(9, J1.bind(null, d, m, u, s), void 0, null), u;
  }, useId: function() {
    var i = bn(), s = Ct.identifierPrefix;
    if (Qe) {
      var u = hr, d = fr;
      u = (d & ~(1 << 32 - Ln(d) - 1)).toString(32) + u, s = ":" + s + "R" + u, u = Co++, 0 < u && (s += "H" + u.toString(32)), s += ":";
    } else u = Jy++, s = ":" + s + "r" + u.toString(32) + ":";
    return i.memoizedState = s;
  }, unstable_isNewReconciler: !1 }, r5 = {
    readContext: _n,
    useCallback: up,
    useContext: _n,
    useEffect: Wd,
    useImperativeHandle: ap,
    useInsertionEffect: sp,
    useLayoutEffect: op,
    useMemo: cp,
    useReducer: Hd,
    useRef: rp,
    useState: function() {
      return Hd(ko);
    },
    useDebugValue: Kd,
    useDeferredValue: function(i) {
      var s = wn();
      return dp(s, pt.memoizedState, i);
    },
    useTransition: function() {
      var i = Hd(ko)[0], s = wn().memoizedState;
      return [i, s];
    },
    useMutableSource: $1,
    useSyncExternalStore: q1,
    useId: fp,
    unstable_isNewReconciler: !1
  }, i5 = { readContext: _n, useCallback: up, useContext: _n, useEffect: Wd, useImperativeHandle: ap, useInsertionEffect: sp, useLayoutEffect: op, useMemo: cp, useReducer: jd, useRef: rp, useState: function() {
    return jd(ko);
  }, useDebugValue: Kd, useDeferredValue: function(i) {
    var s = wn();
    return pt === null ? s.memoizedState = i : dp(s, pt.memoizedState, i);
  }, useTransition: function() {
    var i = jd(ko)[0], s = wn().memoizedState;
    return [i, s];
  }, useMutableSource: $1, useSyncExternalStore: q1, useId: fp, unstable_isNewReconciler: !1 };
  function Dn(i, s) {
    if (i && i.defaultProps) {
      s = l({}, s), i = i.defaultProps;
      for (var u in i) s[u] === void 0 && (s[u] = i[u]);
      return s;
    }
    return s;
  }
  function Yd(i, s, u, d) {
    s = i.memoizedState, u = u(d, s), u = u == null ? s : l({}, s, u), i.memoizedState = u, i.lanes === 0 && (i.updateQueue.baseState = u);
  }
  var ca = { isMounted: function(i) {
    return (i = i._reactInternals) ? G(i) === i : !1;
  }, enqueueSetState: function(i, s, u) {
    i = i._reactInternals;
    var d = It(), h = Vr(i), m = pr(d, h);
    m.payload = s, u != null && (m.callback = u), s = Gr(i, m, h), s !== null && (xn(s, i, h, d), na(s, i, h));
  }, enqueueReplaceState: function(i, s, u) {
    i = i._reactInternals;
    var d = It(), h = Vr(i), m = pr(d, h);
    m.tag = 1, m.payload = s, u != null && (m.callback = u), s = Gr(i, m, h), s !== null && (xn(s, i, h, d), na(s, i, h));
  }, enqueueForceUpdate: function(i, s) {
    i = i._reactInternals;
    var u = It(), d = Vr(i), h = pr(u, d);
    h.tag = 2, s != null && (h.callback = s), s = Gr(i, h, d), s !== null && (xn(s, i, d, u), na(s, i, d));
  } };
  function mp(i, s, u, d, h, m, P) {
    return i = i.stateNode, typeof i.shouldComponentUpdate == "function" ? i.shouldComponentUpdate(d, m, P) : s.prototype && s.prototype.isPureReactComponent ? !Jl(u, d) || !Jl(h, m) : !0;
  }
  function yp(i, s, u) {
    var d = !1, h = Ir, m = s.contextType;
    return typeof m == "object" && m !== null ? m = _n(m) : (h = $t(s) ? Ei : Lt.current, d = s.contextTypes, m = (d = d != null) ? ds(i, h) : Ir), s = new s(u, m), i.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null, s.updater = ca, i.stateNode = s, s._reactInternals = i, d && (i = i.stateNode, i.__reactInternalMemoizedUnmaskedChildContext = h, i.__reactInternalMemoizedMaskedChildContext = m), s;
  }
  function vp(i, s, u, d) {
    i = s.state, typeof s.componentWillReceiveProps == "function" && s.componentWillReceiveProps(u, d), typeof s.UNSAFE_componentWillReceiveProps == "function" && s.UNSAFE_componentWillReceiveProps(u, d), s.state !== i && ca.enqueueReplaceState(s, s.state, null);
  }
  function Xd(i, s, u, d) {
    var h = i.stateNode;
    h.props = u, h.state = i.memoizedState, h.refs = {}, Ad(i);
    var m = s.contextType;
    typeof m == "object" && m !== null ? h.context = _n(m) : (m = $t(s) ? Ei : Lt.current, h.context = ds(i, m)), h.state = i.memoizedState, m = s.getDerivedStateFromProps, typeof m == "function" && (Yd(i, s, m, u), h.state = i.memoizedState), typeof s.getDerivedStateFromProps == "function" || typeof h.getSnapshotBeforeUpdate == "function" || typeof h.UNSAFE_componentWillMount != "function" && typeof h.componentWillMount != "function" || (s = h.state, typeof h.componentWillMount == "function" && h.componentWillMount(), typeof h.UNSAFE_componentWillMount == "function" && h.UNSAFE_componentWillMount(), s !== h.state && ca.enqueueReplaceState(h, h.state, null), ra(i, u, h, d), h.state = i.memoizedState), typeof h.componentDidMount == "function" && (i.flags |= 4194308);
  }
  function Ss(i, s) {
    try {
      var u = "", d = s;
      do
        u += Zy(d), d = d.return;
      while (d);
      var h = u;
    } catch (m) {
      h = `
Error generating stack: ` + m.message + `
` + m.stack;
    }
    return { value: i, source: s, stack: h, digest: null };
  }
  function Qd(i, s, u) {
    return { value: i, source: null, stack: u ?? null, digest: s ?? null };
  }
  function $d(i, s) {
    try {
      console.error(s.value);
    } catch (u) {
      setTimeout(function() {
        throw u;
      });
    }
  }
  var s5 = typeof WeakMap == "function" ? WeakMap : Map;
  function _p(i, s, u) {
    u = pr(-1, u), u.tag = 3, u.payload = { element: null };
    var d = s.value;
    return u.callback = function() {
      ka || (ka = !0, mf = d), $d(i, s);
    }, u;
  }
  function Sp(i, s, u) {
    u = pr(-1, u), u.tag = 3;
    var d = i.type.getDerivedStateFromError;
    if (typeof d == "function") {
      var h = s.value;
      u.payload = function() {
        return d(h);
      }, u.callback = function() {
        $d(i, s);
      };
    }
    var m = i.stateNode;
    return m !== null && typeof m.componentDidCatch == "function" && (u.callback = function() {
      $d(i, s), typeof d != "function" && (Ur === null ? Ur = /* @__PURE__ */ new Set([this]) : Ur.add(this));
      var P = s.stack;
      this.componentDidCatch(s.value, { componentStack: P !== null ? P : "" });
    }), u;
  }
  function wp(i, s, u) {
    var d = i.pingCache;
    if (d === null) {
      d = i.pingCache = new s5();
      var h = /* @__PURE__ */ new Set();
      d.set(s, h);
    } else h = d.get(s), h === void 0 && (h = /* @__PURE__ */ new Set(), d.set(s, h));
    h.has(u) || (h.add(u), i = _5.bind(null, i, s, u), s.then(i, i));
  }
  function xp(i) {
    do {
      var s;
      if ((s = i.tag === 13) && (s = i.memoizedState, s = s !== null ? s.dehydrated !== null : !0), s) return i;
      i = i.return;
    } while (i !== null);
    return null;
  }
  function Cp(i, s, u, d, h) {
    return i.mode & 1 ? (i.flags |= 65536, i.lanes = h, i) : (i === s ? i.flags |= 65536 : (i.flags |= 128, u.flags |= 131072, u.flags &= -52805, u.tag === 1 && (u.alternate === null ? u.tag = 17 : (s = pr(-1, 1), s.tag = 2, Gr(u, s, 1))), u.lanes |= 1), i);
  }
  var o5 = c.ReactCurrentOwner, qt = !1;
  function Ht(i, s, u, d) {
    s.child = i === null ? H1(s, null, u, d) : gs(s, i.child, u, d);
  }
  function kp(i, s, u, d, h) {
    u = u.render;
    var m = s.ref;
    return ys(s, h), d = Bd(i, s, u, d, m, h), u = Vd(), i !== null && !qt ? (s.updateQueue = i.updateQueue, s.flags &= -2053, i.lanes &= ~h, gr(i, s, h)) : (Qe && u && Cd(s), s.flags |= 1, Ht(i, s, d, h), s.child);
  }
  function Ep(i, s, u, d, h) {
    if (i === null) {
      var m = u.type;
      return typeof m == "function" && !xf(m) && m.defaultProps === void 0 && u.compare === null && u.defaultProps === void 0 ? (s.tag = 15, s.type = m, Pp(i, s, m, d, h)) : (i = Fa(u.type, null, d, s, s.mode, h), i.ref = s.ref, i.return = s, s.child = i);
    }
    if (m = i.child, !(i.lanes & h)) {
      var P = m.memoizedProps;
      if (u = u.compare, u = u !== null ? u : Jl, u(P, d) && i.ref === s.ref) return gr(i, s, h);
    }
    return s.flags |= 1, i = jr(m, d), i.ref = s.ref, i.return = s, s.child = i;
  }
  function Pp(i, s, u, d, h) {
    if (i !== null) {
      var m = i.memoizedProps;
      if (Jl(m, d) && i.ref === s.ref) if (qt = !1, s.pendingProps = d = m, (i.lanes & h) !== 0) i.flags & 131072 && (qt = !0);
      else return s.lanes = i.lanes, gr(i, s, h);
    }
    return qd(i, s, u, d, h);
  }
  function Tp(i, s, u) {
    var d = s.pendingProps, h = d.children, m = i !== null ? i.memoizedState : null;
    if (d.mode === "hidden") if (!(s.mode & 1)) s.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Ve(xs, an), an |= u;
    else {
      if (!(u & 1073741824)) return i = m !== null ? m.baseLanes | u : u, s.lanes = s.childLanes = 1073741824, s.memoizedState = { baseLanes: i, cachePool: null, transitions: null }, s.updateQueue = null, Ve(xs, an), an |= i, null;
      s.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, d = m !== null ? m.baseLanes : u, Ve(xs, an), an |= d;
    }
    else m !== null ? (d = m.baseLanes | u, s.memoizedState = null) : d = u, Ve(xs, an), an |= d;
    return Ht(i, s, h, u), s.child;
  }
  function Np(i, s) {
    var u = s.ref;
    (i === null && u !== null || i !== null && i.ref !== u) && (s.flags |= 512, s.flags |= 2097152);
  }
  function qd(i, s, u, d, h) {
    var m = $t(u) ? Ei : Lt.current;
    return m = ds(s, m), ys(s, h), u = Bd(i, s, u, d, m, h), d = Vd(), i !== null && !qt ? (s.updateQueue = i.updateQueue, s.flags &= -2053, i.lanes &= ~h, gr(i, s, h)) : (Qe && d && Cd(s), s.flags |= 1, Ht(i, s, u, h), s.child);
  }
  function Rp(i, s, u, d, h) {
    if ($t(u)) {
      var m = !0;
      jl(s);
    } else m = !1;
    if (ys(s, h), s.stateNode === null) fa(i, s), yp(s, u, d), Xd(s, u, d, h), d = !0;
    else if (i === null) {
      var P = s.stateNode, O = s.memoizedProps;
      P.props = O;
      var U = P.context, Y = u.contextType;
      typeof Y == "object" && Y !== null ? Y = _n(Y) : (Y = $t(u) ? Ei : Lt.current, Y = ds(s, Y));
      var se = u.getDerivedStateFromProps, ge = typeof se == "function" || typeof P.getSnapshotBeforeUpdate == "function";
      ge || typeof P.UNSAFE_componentWillReceiveProps != "function" && typeof P.componentWillReceiveProps != "function" || (O !== d || U !== Y) && vp(s, P, d, Y), zr = !1;
      var b = s.memoizedState;
      P.state = b, ra(s, d, P, h), U = s.memoizedState, O !== d || b !== U || Qt.current || zr ? (typeof se == "function" && (Yd(s, u, se, d), U = s.memoizedState), (O = zr || mp(s, u, O, d, b, U, Y)) ? (ge || typeof P.UNSAFE_componentWillMount != "function" && typeof P.componentWillMount != "function" || (typeof P.componentWillMount == "function" && P.componentWillMount(), typeof P.UNSAFE_componentWillMount == "function" && P.UNSAFE_componentWillMount()), typeof P.componentDidMount == "function" && (s.flags |= 4194308)) : (typeof P.componentDidMount == "function" && (s.flags |= 4194308), s.memoizedProps = d, s.memoizedState = U), P.props = d, P.state = U, P.context = Y, d = O) : (typeof P.componentDidMount == "function" && (s.flags |= 4194308), d = !1);
    } else {
      P = s.stateNode, K1(i, s), O = s.memoizedProps, Y = s.type === s.elementType ? O : Dn(s.type, O), P.props = Y, ge = s.pendingProps, b = P.context, U = u.contextType, typeof U == "object" && U !== null ? U = _n(U) : (U = $t(u) ? Ei : Lt.current, U = ds(s, U));
      var We = u.getDerivedStateFromProps;
      (se = typeof We == "function" || typeof P.getSnapshotBeforeUpdate == "function") || typeof P.UNSAFE_componentWillReceiveProps != "function" && typeof P.componentWillReceiveProps != "function" || (O !== ge || b !== U) && vp(s, P, d, U), zr = !1, b = s.memoizedState, P.state = b, ra(s, d, P, h);
      var Ue = s.memoizedState;
      O !== ge || b !== Ue || Qt.current || zr ? (typeof We == "function" && (Yd(s, u, We, d), Ue = s.memoizedState), (Y = zr || mp(s, u, Y, d, b, Ue, U) || !1) ? (se || typeof P.UNSAFE_componentWillUpdate != "function" && typeof P.componentWillUpdate != "function" || (typeof P.componentWillUpdate == "function" && P.componentWillUpdate(d, Ue, U), typeof P.UNSAFE_componentWillUpdate == "function" && P.UNSAFE_componentWillUpdate(d, Ue, U)), typeof P.componentDidUpdate == "function" && (s.flags |= 4), typeof P.getSnapshotBeforeUpdate == "function" && (s.flags |= 1024)) : (typeof P.componentDidUpdate != "function" || O === i.memoizedProps && b === i.memoizedState || (s.flags |= 4), typeof P.getSnapshotBeforeUpdate != "function" || O === i.memoizedProps && b === i.memoizedState || (s.flags |= 1024), s.memoizedProps = d, s.memoizedState = Ue), P.props = d, P.state = Ue, P.context = U, d = Y) : (typeof P.componentDidUpdate != "function" || O === i.memoizedProps && b === i.memoizedState || (s.flags |= 4), typeof P.getSnapshotBeforeUpdate != "function" || O === i.memoizedProps && b === i.memoizedState || (s.flags |= 1024), d = !1);
    }
    return Zd(i, s, u, d, m, h);
  }
  function Zd(i, s, u, d, h, m) {
    Np(i, s);
    var P = (s.flags & 128) !== 0;
    if (!d && !P) return h && F1(s, u, !1), gr(i, s, m);
    d = s.stateNode, o5.current = s;
    var O = P && typeof u.getDerivedStateFromError != "function" ? null : d.render();
    return s.flags |= 1, i !== null && P ? (s.child = gs(s, i.child, null, m), s.child = gs(s, null, O, m)) : Ht(i, s, O, m), s.memoizedState = d.state, h && F1(s, u, !0), s.child;
  }
  function Fp(i) {
    var s = i.stateNode;
    s.pendingContext ? N1(i, s.pendingContext, s.pendingContext !== s.context) : s.context && N1(i, s.context, !1), Od(i, s.containerInfo);
  }
  function Mp(i, s, u, d, h) {
    return ps(), Td(h), s.flags |= 256, Ht(i, s, u, d), s.child;
  }
  var Jd = { dehydrated: null, treeContext: null, retryLane: 0 };
  function bd(i) {
    return { baseLanes: i, cachePool: null, transitions: null };
  }
  function Lp(i, s, u) {
    var d = s.pendingProps, h = Je.current, m = !1, P = (s.flags & 128) !== 0, O;
    if ((O = P) || (O = i !== null && i.memoizedState === null ? !1 : (h & 2) !== 0), O ? (m = !0, s.flags &= -129) : (i === null || i.memoizedState !== null) && (h |= 1), Ve(Je, h & 1), i === null)
      return Pd(s), i = s.memoizedState, i !== null && (i = i.dehydrated, i !== null) ? (s.mode & 1 ? dd(i) ? s.lanes = 8 : s.lanes = 1073741824 : s.lanes = 1, null) : (P = d.children, i = d.fallback, m ? (d = s.mode, m = s.child, P = { mode: "hidden", children: P }, !(d & 1) && m !== null ? (m.childLanes = 0, m.pendingProps = P) : m = Ma(P, d, 0, null), i = Oi(i, d, u, null), m.return = s, i.return = s, m.sibling = i, s.child = m, s.child.memoizedState = bd(u), s.memoizedState = Jd, i) : ef(s, P));
    if (h = i.memoizedState, h !== null && (O = h.dehydrated, O !== null)) return l5(i, s, P, d, O, h, u);
    if (m) {
      m = d.fallback, P = s.mode, h = i.child, O = h.sibling;
      var U = { mode: "hidden", children: d.children };
      return !(P & 1) && s.child !== h ? (d = s.child, d.childLanes = 0, d.pendingProps = U, s.deletions = null) : (d = jr(h, U), d.subtreeFlags = h.subtreeFlags & 14680064), O !== null ? m = jr(O, m) : (m = Oi(m, P, u, null), m.flags |= 2), m.return = s, d.return = s, d.sibling = m, s.child = d, d = m, m = s.child, P = i.child.memoizedState, P = P === null ? bd(u) : { baseLanes: P.baseLanes | u, cachePool: null, transitions: P.transitions }, m.memoizedState = P, m.childLanes = i.childLanes & ~u, s.memoizedState = Jd, d;
    }
    return m = i.child, i = m.sibling, d = jr(m, { mode: "visible", children: d.children }), !(s.mode & 1) && (d.lanes = u), d.return = s, d.sibling = null, i !== null && (u = s.deletions, u === null ? (s.deletions = [i], s.flags |= 16) : u.push(i)), s.child = d, s.memoizedState = null, d;
  }
  function ef(i, s) {
    return s = Ma({ mode: "visible", children: s }, i.mode, 0, null), s.return = i, i.child = s;
  }
  function da(i, s, u, d) {
    return d !== null && Td(d), gs(s, i.child, null, u), i = ef(s, s.pendingProps.children), i.flags |= 2, s.memoizedState = null, i;
  }
  function l5(i, s, u, d, h, m, P) {
    if (u)
      return s.flags & 256 ? (s.flags &= -257, d = Qd(Error(a(422))), da(i, s, P, d)) : s.memoizedState !== null ? (s.child = i.child, s.flags |= 128, null) : (m = d.fallback, h = s.mode, d = Ma({ mode: "visible", children: d.children }, h, 0, null), m = Oi(m, h, P, null), m.flags |= 2, d.return = s, m.return = s, d.sibling = m, s.child = d, s.mode & 1 && gs(s, i.child, null, P), s.child.memoizedState = bd(P), s.memoizedState = Jd, m);
    if (!(s.mode & 1)) return da(i, s, P, null);
    if (dd(h)) return d = Sy(h).digest, m = Error(a(419)), d = Qd(
      m,
      d,
      void 0
    ), da(i, s, P, d);
    if (u = (P & i.childLanes) !== 0, qt || u) {
      if (d = Ct, d !== null) {
        switch (P & -P) {
          case 4:
            h = 2;
            break;
          case 16:
            h = 8;
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
            h = 32;
            break;
          case 536870912:
            h = 268435456;
            break;
          default:
            h = 0;
        }
        h = h & (d.suspendedLanes | P) ? 0 : h, h !== 0 && h !== m.retryLane && (m.retryLane = h, Zn(i, h), xn(
          d,
          i,
          h,
          -1
        ));
      }
      return wf(), d = Qd(Error(a(421))), da(i, s, P, d);
    }
    return T1(h) ? (s.flags |= 128, s.child = i.child, s = S5.bind(null, i), wy(h, s), null) : (i = m.treeContext, Ge && (vn = ky(h), ln = s, Qe = !0, On = null, vo = !1, i !== null && (mn[yn++] = fr, mn[yn++] = hr, mn[yn++] = Pi, fr = i.id, hr = i.overflow, Pi = s)), s = ef(s, d.children), s.flags |= 4096, s);
  }
  function Ap(i, s, u) {
    i.lanes |= s;
    var d = i.alternate;
    d !== null && (d.lanes |= s), Md(i.return, s, u);
  }
  function tf(i, s, u, d, h) {
    var m = i.memoizedState;
    m === null ? i.memoizedState = { isBackwards: s, rendering: null, renderingStartTime: 0, last: d, tail: u, tailMode: h } : (m.isBackwards = s, m.rendering = null, m.renderingStartTime = 0, m.last = d, m.tail = u, m.tailMode = h);
  }
  function Op(i, s, u) {
    var d = s.pendingProps, h = d.revealOrder, m = d.tail;
    if (Ht(i, s, d.children, u), d = Je.current, d & 2) d = d & 1 | 2, s.flags |= 128;
    else {
      if (i !== null && i.flags & 128) e: for (i = s.child; i !== null; ) {
        if (i.tag === 13) i.memoizedState !== null && Ap(i, u, s);
        else if (i.tag === 19) Ap(i, u, s);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === s) break e;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === s) break e;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
      d &= 1;
    }
    if (Ve(Je, d), !(s.mode & 1)) s.memoizedState = null;
    else switch (h) {
      case "forwards":
        for (u = s.child, h = null; u !== null; ) i = u.alternate, i !== null && ia(i) === null && (h = u), u = u.sibling;
        u = h, u === null ? (h = s.child, s.child = null) : (h = u.sibling, u.sibling = null), tf(s, !1, h, u, m);
        break;
      case "backwards":
        for (u = null, h = s.child, s.child = null; h !== null; ) {
          if (i = h.alternate, i !== null && ia(i) === null) {
            s.child = h;
            break;
          }
          i = h.sibling, h.sibling = u, u = h, h = i;
        }
        tf(s, !0, u, null, m);
        break;
      case "together":
        tf(s, !1, null, null, void 0);
        break;
      default:
        s.memoizedState = null;
    }
    return s.child;
  }
  function fa(i, s) {
    !(s.mode & 1) && i !== null && (i.alternate = null, s.alternate = null, s.flags |= 2);
  }
  function gr(i, s, u) {
    if (i !== null && (s.dependencies = i.dependencies), Fi |= s.lanes, !(u & s.childLanes)) return null;
    if (i !== null && s.child !== i.child) throw Error(a(153));
    if (s.child !== null) {
      for (i = s.child, u = jr(i, i.pendingProps), s.child = u, u.return = s; i.sibling !== null; ) i = i.sibling, u = u.sibling = jr(i, i.pendingProps), u.return = s;
      u.sibling = null;
    }
    return s.child;
  }
  function a5(i, s, u) {
    switch (s.tag) {
      case 3:
        Fp(s), ps();
        break;
      case 5:
        Q1(s);
        break;
      case 1:
        $t(s.type) && jl(s);
        break;
      case 4:
        Od(s, s.stateNode.containerInfo);
        break;
      case 10:
        j1(s, s.type._context, s.memoizedProps.value);
        break;
      case 13:
        var d = s.memoizedState;
        if (d !== null)
          return d.dehydrated !== null ? (Ve(Je, Je.current & 1), s.flags |= 128, null) : u & s.child.childLanes ? Lp(i, s, u) : (Ve(Je, Je.current & 1), i = gr(i, s, u), i !== null ? i.sibling : null);
        Ve(Je, Je.current & 1);
        break;
      case 19:
        if (d = (u & s.childLanes) !== 0, i.flags & 128) {
          if (d) return Op(
            i,
            s,
            u
          );
          s.flags |= 128;
        }
        var h = s.memoizedState;
        if (h !== null && (h.rendering = null, h.tail = null, h.lastEffect = null), Ve(Je, Je.current), d) break;
        return null;
      case 22:
      case 23:
        return s.lanes = 0, Tp(i, s, u);
    }
    return gr(i, s, u);
  }
  function er(i) {
    i.flags |= 4;
  }
  function Dp(i, s) {
    if (i !== null && i.child === s.child) return !0;
    if (s.flags & 16) return !1;
    for (i = s.child; i !== null; ) {
      if (i.flags & 12854 || i.subtreeFlags & 12854) return !1;
      i = i.sibling;
    }
    return !0;
  }
  var Po, To, ha, pa;
  if (de) Po = function(i, s) {
    for (var u = s.child; u !== null; ) {
      if (u.tag === 5 || u.tag === 6) re(i, u.stateNode);
      else if (u.tag !== 4 && u.child !== null) {
        u.child.return = u, u = u.child;
        continue;
      }
      if (u === s) break;
      for (; u.sibling === null; ) {
        if (u.return === null || u.return === s) return;
        u = u.return;
      }
      u.sibling.return = u.return, u = u.sibling;
    }
  }, To = function() {
  }, ha = function(i, s, u, d, h) {
    if (i = i.memoizedProps, i !== d) {
      var m = s.stateNode, P = Jn(Sn.current);
      u = ft(m, u, i, d, h, P), (s.updateQueue = u) && er(s);
    }
  }, pa = function(i, s, u, d) {
    u !== d && er(s);
  };
  else if (De) {
    Po = function(i, s, u, d) {
      for (var h = s.child; h !== null; ) {
        if (h.tag === 5) {
          var m = h.stateNode;
          u && d && (m = E1(m, h.type, h.memoizedProps, h)), re(i, m);
        } else if (h.tag === 6) m = h.stateNode, u && d && (m = P1(m, h.memoizedProps, h)), re(i, m);
        else if (h.tag !== 4) {
          if (h.tag === 22 && h.memoizedState !== null) m = h.child, m !== null && (m.return = h), Po(i, h, !0, !0);
          else if (h.child !== null) {
            h.child.return = h, h = h.child;
            continue;
          }
        }
        if (h === s) break;
        for (; h.sibling === null; ) {
          if (h.return === null || h.return === s) return;
          h = h.return;
        }
        h.sibling.return = h.return, h = h.sibling;
      }
    };
    var Ip = function(i, s, u, d) {
      for (var h = s.child; h !== null; ) {
        if (h.tag === 5) {
          var m = h.stateNode;
          u && d && (m = E1(m, h.type, h.memoizedProps, h)), k1(i, m);
        } else if (h.tag === 6) m = h.stateNode, u && d && (m = P1(m, h.memoizedProps, h)), k1(i, m);
        else if (h.tag !== 4) {
          if (h.tag === 22 && h.memoizedState !== null) m = h.child, m !== null && (m.return = h), Ip(i, h, !0, !0);
          else if (h.child !== null) {
            h.child.return = h, h = h.child;
            continue;
          }
        }
        if (h === s) break;
        for (; h.sibling === null; ) {
          if (h.return === null || h.return === s) return;
          h = h.return;
        }
        h.sibling.return = h.return, h = h.sibling;
      }
    };
    To = function(i, s) {
      var u = s.stateNode;
      if (!Dp(i, s)) {
        i = u.containerInfo;
        var d = C1(i);
        Ip(d, s, !1, !1), u.pendingChildren = d, er(s), my(i, d);
      }
    }, ha = function(i, s, u, d, h) {
      var m = i.stateNode, P = i.memoizedProps;
      if ((i = Dp(i, s)) && P === d) s.stateNode = m;
      else {
        var O = s.stateNode, U = Jn(Sn.current), Y = null;
        P !== d && (Y = ft(O, u, P, d, h, U)), i && Y === null ? s.stateNode = m : (m = gy(m, Y, u, P, d, s, i, O), ve(m, u, d, h, U) && er(s), s.stateNode = m, i ? er(s) : Po(m, s, !1, !1));
      }
    }, pa = function(i, s, u, d) {
      u !== d ? (i = Jn(vs.current), u = Jn(Sn.current), s.stateNode = ze(d, i, u, s), er(s)) : s.stateNode = i.stateNode;
    };
  } else To = function() {
  }, ha = function() {
  }, pa = function() {
  };
  function No(i, s) {
    if (!Qe) switch (i.tailMode) {
      case "hidden":
        s = i.tail;
        for (var u = null; s !== null; ) s.alternate !== null && (u = s), s = s.sibling;
        u === null ? i.tail = null : u.sibling = null;
        break;
      case "collapsed":
        u = i.tail;
        for (var d = null; u !== null; ) u.alternate !== null && (d = u), u = u.sibling;
        d === null ? s || i.tail === null ? i.tail = null : i.tail.sibling = null : d.sibling = null;
    }
  }
  function Ot(i) {
    var s = i.alternate !== null && i.alternate.child === i.child, u = 0, d = 0;
    if (s) for (var h = i.child; h !== null; ) u |= h.lanes | h.childLanes, d |= h.subtreeFlags & 14680064, d |= h.flags & 14680064, h.return = i, h = h.sibling;
    else for (h = i.child; h !== null; ) u |= h.lanes | h.childLanes, d |= h.subtreeFlags, d |= h.flags, h.return = i, h = h.sibling;
    return i.subtreeFlags |= d, i.childLanes = u, s;
  }
  function u5(i, s, u) {
    var d = s.pendingProps;
    switch (kd(s), s.tag) {
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
        return Ot(s), null;
      case 1:
        return $t(s.type) && Hl(), Ot(s), null;
      case 3:
        return u = s.stateNode, _s(), je(Qt), je(Lt), zd(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (i === null || i.child === null) && (Zl(s) ? er(s) : i === null || i.memoizedState.isDehydrated && !(s.flags & 256) || (s.flags |= 1024, On !== null && (_f(On), On = null))), To(i, s), Ot(s), null;
      case 5:
        Dd(s), u = Jn(vs.current);
        var h = s.type;
        if (i !== null && s.stateNode != null) ha(i, s, h, d, u), i.ref !== s.ref && (s.flags |= 512, s.flags |= 2097152);
        else {
          if (!d) {
            if (s.stateNode === null) throw Error(a(166));
            return Ot(s), null;
          }
          if (i = Jn(Sn.current), Zl(s)) {
            if (!Ge) throw Error(a(175));
            i = Ey(s.stateNode, s.type, s.memoizedProps, u, i, s, !vo), s.updateQueue = i, i !== null && er(s);
          } else {
            var m = q(h, d, u, i, s);
            Po(m, s, !1, !1), s.stateNode = m, ve(m, h, d, u, i) && er(s);
          }
          s.ref !== null && (s.flags |= 512, s.flags |= 2097152);
        }
        return Ot(s), null;
      case 6:
        if (i && s.stateNode != null) pa(i, s, i.memoizedProps, d);
        else {
          if (typeof d != "string" && s.stateNode === null) throw Error(a(166));
          if (i = Jn(vs.current), u = Jn(Sn.current), Zl(s)) {
            if (!Ge) throw Error(a(176));
            if (i = s.stateNode, u = s.memoizedProps, (d = Py(i, u, s, !vo)) && (h = ln, h !== null)) switch (h.tag) {
              case 3:
                Oy(h.stateNode.containerInfo, i, u, (h.mode & 1) !== 0);
                break;
              case 5:
                Dy(h.type, h.memoizedProps, h.stateNode, i, u, (h.mode & 1) !== 0);
            }
            d && er(s);
          } else s.stateNode = ze(d, i, u, s);
        }
        return Ot(s), null;
      case 13:
        if (je(Je), d = s.memoizedState, i === null || i.memoizedState !== null && i.memoizedState.dehydrated !== null) {
          if (Qe && vn !== null && s.mode & 1 && !(s.flags & 128)) U1(), ps(), s.flags |= 98560, h = !1;
          else if (h = Zl(s), d !== null && d.dehydrated !== null) {
            if (i === null) {
              if (!h) throw Error(a(318));
              if (!Ge) throw Error(a(344));
              if (h = s.memoizedState, h = h !== null ? h.dehydrated : null, !h) throw Error(a(317));
              Ty(h, s);
            } else ps(), !(s.flags & 128) && (s.memoizedState = null), s.flags |= 4;
            Ot(s), h = !1;
          } else On !== null && (_f(On), On = null), h = !0;
          if (!h) return s.flags & 65536 ? s : null;
        }
        return s.flags & 128 ? (s.lanes = u, s) : (u = d !== null, u !== (i !== null && i.memoizedState !== null) && u && (s.child.flags |= 8192, s.mode & 1 && (i === null || Je.current & 1 ? gt === 0 && (gt = 3) : wf())), s.updateQueue !== null && (s.flags |= 4), Ot(s), null);
      case 4:
        return _s(), To(i, s), i === null && Ae(s.stateNode.containerInfo), Ot(s), null;
      case 10:
        return Fd(s.type._context), Ot(s), null;
      case 17:
        return $t(s.type) && Hl(), Ot(s), null;
      case 19:
        if (je(Je), h = s.memoizedState, h === null) return Ot(s), null;
        if (d = (s.flags & 128) !== 0, m = h.rendering, m === null) if (d) No(h, !1);
        else {
          if (gt !== 0 || i !== null && i.flags & 128) for (i = s.child; i !== null; ) {
            if (m = ia(i), m !== null) {
              for (s.flags |= 128, No(h, !1), i = m.updateQueue, i !== null && (s.updateQueue = i, s.flags |= 4), s.subtreeFlags = 0, i = u, u = s.child; u !== null; ) d = u, h = i, d.flags &= 14680066, m = d.alternate, m === null ? (d.childLanes = 0, d.lanes = h, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = m.childLanes, d.lanes = m.lanes, d.child = m.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = m.memoizedProps, d.memoizedState = m.memoizedState, d.updateQueue = m.updateQueue, d.type = m.type, h = m.dependencies, d.dependencies = h === null ? null : { lanes: h.lanes, firstContext: h.firstContext }), u = u.sibling;
              return Ve(Je, Je.current & 1 | 2), s.child;
            }
            i = i.sibling;
          }
          h.tail !== null && wt() > gf && (s.flags |= 128, d = !0, No(h, !1), s.lanes = 4194304);
        }
        else {
          if (!d) if (i = ia(m), i !== null) {
            if (s.flags |= 128, d = !0, i = i.updateQueue, i !== null && (s.updateQueue = i, s.flags |= 4), No(h, !0), h.tail === null && h.tailMode === "hidden" && !m.alternate && !Qe) return Ot(s), null;
          } else 2 * wt() - h.renderingStartTime > gf && u !== 1073741824 && (s.flags |= 128, d = !0, No(h, !1), s.lanes = 4194304);
          h.isBackwards ? (m.sibling = s.child, s.child = m) : (i = h.last, i !== null ? i.sibling = m : s.child = m, h.last = m);
        }
        return h.tail !== null ? (s = h.tail, h.rendering = s, h.tail = s.sibling, h.renderingStartTime = wt(), s.sibling = null, i = Je.current, Ve(Je, d ? i & 1 | 2 : i & 1), s) : (Ot(s), null);
      case 22:
      case 23:
        return Sf(), u = s.memoizedState !== null, i !== null && i.memoizedState !== null !== u && (s.flags |= 8192), u && s.mode & 1 ? an & 1073741824 && (Ot(s), de && s.subtreeFlags & 6 && (s.flags |= 8192)) : Ot(s), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(a(
      156,
      s.tag
    ));
  }
  function c5(i, s) {
    switch (kd(s), s.tag) {
      case 1:
        return $t(s.type) && Hl(), i = s.flags, i & 65536 ? (s.flags = i & -65537 | 128, s) : null;
      case 3:
        return _s(), je(Qt), je(Lt), zd(), i = s.flags, i & 65536 && !(i & 128) ? (s.flags = i & -65537 | 128, s) : null;
      case 5:
        return Dd(s), null;
      case 13:
        if (je(Je), i = s.memoizedState, i !== null && i.dehydrated !== null) {
          if (s.alternate === null) throw Error(a(340));
          ps();
        }
        return i = s.flags, i & 65536 ? (s.flags = i & -65537 | 128, s) : null;
      case 19:
        return je(Je), null;
      case 4:
        return _s(), null;
      case 10:
        return Fd(s.type._context), null;
      case 22:
      case 23:
        return Sf(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var ga = !1, Dt = !1, d5 = typeof WeakSet == "function" ? WeakSet : Set, te = null;
  function ws(i, s) {
    var u = i.ref;
    if (u !== null) if (typeof u == "function") try {
      u(null);
    } catch (d) {
      $e(i, s, d);
    }
    else u.current = null;
  }
  function nf(i, s, u) {
    try {
      u();
    } catch (d) {
      $e(i, s, d);
    }
  }
  var zp = !1;
  function f5(i, s) {
    for ($(i.containerInfo), te = s; te !== null; ) if (i = te, s = i.child, (i.subtreeFlags & 1028) !== 0 && s !== null) s.return = i, te = s;
    else for (; te !== null; ) {
      i = te;
      try {
        var u = i.alternate;
        if (i.flags & 1024) switch (i.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (u !== null) {
              var d = u.memoizedProps, h = u.memoizedState, m = i.stateNode, P = m.getSnapshotBeforeUpdate(i.elementType === i.type ? d : Dn(i.type, d), h);
              m.__reactInternalSnapshotBeforeUpdate = P;
            }
            break;
          case 3:
            de && py(i.stateNode.containerInfo);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(a(163));
        }
      } catch (O) {
        $e(i, i.return, O);
      }
      if (s = i.sibling, s !== null) {
        s.return = i.return, te = s;
        break;
      }
      te = i.return;
    }
    return u = zp, zp = !1, u;
  }
  function Ro(i, s, u) {
    var d = s.updateQueue;
    if (d = d !== null ? d.lastEffect : null, d !== null) {
      var h = d = d.next;
      do {
        if ((h.tag & i) === i) {
          var m = h.destroy;
          h.destroy = void 0, m !== void 0 && nf(s, u, m);
        }
        h = h.next;
      } while (h !== d);
    }
  }
  function ma(i, s) {
    if (s = s.updateQueue, s = s !== null ? s.lastEffect : null, s !== null) {
      var u = s = s.next;
      do {
        if ((u.tag & i) === i) {
          var d = u.create;
          u.destroy = d();
        }
        u = u.next;
      } while (u !== s);
    }
  }
  function rf(i) {
    var s = i.ref;
    if (s !== null) {
      var u = i.stateNode;
      switch (i.tag) {
        case 5:
          i = pe(u);
          break;
        default:
          i = u;
      }
      typeof s == "function" ? s(i) : s.current = i;
    }
  }
  function Gp(i) {
    var s = i.alternate;
    s !== null && (i.alternate = null, Gp(s)), i.child = null, i.deletions = null, i.sibling = null, i.tag === 5 && (s = i.stateNode, s !== null && on(s)), i.stateNode = null, i.return = null, i.dependencies = null, i.memoizedProps = null, i.memoizedState = null, i.pendingProps = null, i.stateNode = null, i.updateQueue = null;
  }
  function Up(i) {
    return i.tag === 5 || i.tag === 3 || i.tag === 4;
  }
  function Bp(i) {
    e: for (; ; ) {
      for (; i.sibling === null; ) {
        if (i.return === null || Up(i.return)) return null;
        i = i.return;
      }
      for (i.sibling.return = i.return, i = i.sibling; i.tag !== 5 && i.tag !== 6 && i.tag !== 18; ) {
        if (i.flags & 2 || i.child === null || i.tag === 4) continue e;
        i.child.return = i, i = i.child;
      }
      if (!(i.flags & 2)) return i.stateNode;
    }
  }
  function sf(i, s, u) {
    var d = i.tag;
    if (d === 5 || d === 6) i = i.stateNode, s ? ls(u, i, s) : Xe(u, i);
    else if (d !== 4 && (i = i.child, i !== null)) for (sf(i, s, u), i = i.sibling; i !== null; ) sf(i, s, u), i = i.sibling;
  }
  function of(i, s, u) {
    var d = i.tag;
    if (d === 5 || d === 6) i = i.stateNode, s ? sd(u, i, s) : oe(u, i);
    else if (d !== 4 && (i = i.child, i !== null)) for (of(i, s, u), i = i.sibling; i !== null; ) of(i, s, u), i = i.sibling;
  }
  var Tt = null, In = !1;
  function tr(i, s, u) {
    for (u = u.child; u !== null; ) lf(i, s, u), u = u.sibling;
  }
  function lf(i, s, u) {
    if ($n && typeof $n.onCommitFiberUnmount == "function") try {
      $n.onCommitFiberUnmount(Xl, u);
    } catch {
    }
    switch (u.tag) {
      case 5:
        Dt || ws(u, s);
      case 6:
        if (de) {
          var d = Tt, h = In;
          Tt = null, tr(i, s, u), Tt = d, In = h, Tt !== null && (In ? us(Tt, u.stateNode) : as(Tt, u.stateNode));
        } else tr(i, s, u);
        break;
      case 18:
        de && Tt !== null && (In ? Ly(Tt, u.stateNode) : My(Tt, u.stateNode));
        break;
      case 4:
        de ? (d = Tt, h = In, Tt = u.stateNode.containerInfo, In = !0, tr(i, s, u), Tt = d, In = h) : (De && (d = u.stateNode.containerInfo, h = C1(d), cd(d, h)), tr(i, s, u));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Dt && (d = u.updateQueue, d !== null && (d = d.lastEffect, d !== null))) {
          h = d = d.next;
          do {
            var m = h, P = m.destroy;
            m = m.tag, P !== void 0 && (m & 2 || m & 4) && nf(u, s, P), h = h.next;
          } while (h !== d);
        }
        tr(i, s, u);
        break;
      case 1:
        if (!Dt && (ws(u, s), d = u.stateNode, typeof d.componentWillUnmount == "function")) try {
          d.props = u.memoizedProps, d.state = u.memoizedState, d.componentWillUnmount();
        } catch (O) {
          $e(u, s, O);
        }
        tr(i, s, u);
        break;
      case 21:
        tr(i, s, u);
        break;
      case 22:
        u.mode & 1 ? (Dt = (d = Dt) || u.memoizedState !== null, tr(i, s, u), Dt = d) : tr(i, s, u);
        break;
      default:
        tr(
          i,
          s,
          u
        );
    }
  }
  function Vp(i) {
    var s = i.updateQueue;
    if (s !== null) {
      i.updateQueue = null;
      var u = i.stateNode;
      u === null && (u = i.stateNode = new d5()), s.forEach(function(d) {
        var h = w5.bind(null, i, d);
        u.has(d) || (u.add(d), d.then(h, h));
      });
    }
  }
  function zn(i, s) {
    var u = s.deletions;
    if (u !== null) for (var d = 0; d < u.length; d++) {
      var h = u[d];
      try {
        var m = i, P = s;
        if (de) {
          var O = P;
          e: for (; O !== null; ) {
            switch (O.tag) {
              case 5:
                Tt = O.stateNode, In = !1;
                break e;
              case 3:
                Tt = O.stateNode.containerInfo, In = !0;
                break e;
              case 4:
                Tt = O.stateNode.containerInfo, In = !0;
                break e;
            }
            O = O.return;
          }
          if (Tt === null) throw Error(a(160));
          lf(m, P, h), Tt = null, In = !1;
        } else lf(m, P, h);
        var U = h.alternate;
        U !== null && (U.return = null), h.return = null;
      } catch (Y) {
        $e(h, s, Y);
      }
    }
    if (s.subtreeFlags & 12854) for (s = s.child; s !== null; ) Hp(s, i), s = s.sibling;
  }
  function Hp(i, s) {
    var u = i.alternate, d = i.flags;
    switch (i.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (zn(s, i), nr(i), d & 4) {
          try {
            Ro(3, i, i.return), ma(3, i);
          } catch (b) {
            $e(i, i.return, b);
          }
          try {
            Ro(5, i, i.return);
          } catch (b) {
            $e(i, i.return, b);
          }
        }
        break;
      case 1:
        zn(s, i), nr(i), d & 512 && u !== null && ws(u, u.return);
        break;
      case 5:
        if (zn(s, i), nr(i), d & 512 && u !== null && ws(u, u.return), de) {
          if (i.flags & 32) {
            var h = i.stateNode;
            try {
              ki(h);
            } catch (b) {
              $e(i, i.return, b);
            }
          }
          if (d & 4 && (h = i.stateNode, h != null)) {
            var m = i.memoizedProps;
            if (u = u !== null ? u.memoizedProps : m, d = i.type, s = i.updateQueue, i.updateQueue = null, s !== null) try {
              id(h, s, d, u, m, i);
            } catch (b) {
              $e(i, i.return, b);
            }
          }
        }
        break;
      case 6:
        if (zn(s, i), nr(i), d & 4 && de) {
          if (i.stateNode === null) throw Error(a(162));
          h = i.stateNode, m = i.memoizedProps, u = u !== null ? u.memoizedProps : m;
          try {
            Ci(h, u, m);
          } catch (b) {
            $e(i, i.return, b);
          }
        }
        break;
      case 3:
        if (zn(s, i), nr(i), d & 4) {
          if (de && Ge && u !== null && u.memoizedState.isDehydrated) try {
            Ry(s.containerInfo);
          } catch (b) {
            $e(i, i.return, b);
          }
          if (De) {
            h = s.containerInfo, m = s.pendingChildren;
            try {
              cd(h, m);
            } catch (b) {
              $e(i, i.return, b);
            }
          }
        }
        break;
      case 4:
        if (zn(
          s,
          i
        ), nr(i), d & 4 && De) {
          m = i.stateNode, h = m.containerInfo, m = m.pendingChildren;
          try {
            cd(h, m);
          } catch (b) {
            $e(i, i.return, b);
          }
        }
        break;
      case 13:
        zn(s, i), nr(i), h = i.child, h.flags & 8192 && (m = h.memoizedState !== null, h.stateNode.isHidden = m, !m || h.alternate !== null && h.alternate.memoizedState !== null || (pf = wt())), d & 4 && Vp(i);
        break;
      case 22:
        var P = u !== null && u.memoizedState !== null;
        if (i.mode & 1 ? (Dt = (u = Dt) || P, zn(s, i), Dt = u) : zn(s, i), nr(i), d & 8192) {
          if (u = i.memoizedState !== null, (i.stateNode.isHidden = u) && !P && i.mode & 1) for (te = i, d = i.child; d !== null; ) {
            for (s = te = d; te !== null; ) {
              P = te;
              var O = P.child;
              switch (P.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ro(4, P, P.return);
                  break;
                case 1:
                  ws(P, P.return);
                  var U = P.stateNode;
                  if (typeof U.componentWillUnmount == "function") {
                    var Y = P, se = P.return;
                    try {
                      var ge = Y;
                      U.props = ge.memoizedProps, U.state = ge.memoizedState, U.componentWillUnmount();
                    } catch (b) {
                      $e(Y, se, b);
                    }
                  }
                  break;
                case 5:
                  ws(P, P.return);
                  break;
                case 22:
                  if (P.memoizedState !== null) {
                    Kp(s);
                    continue;
                  }
              }
              O !== null ? (O.return = P, te = O) : Kp(s);
            }
            d = d.sibling;
          }
          if (de) {
            e: if (d = null, de) for (s = i; ; ) {
              if (s.tag === 5) {
                if (d === null) {
                  d = s;
                  try {
                    h = s.stateNode, u ? od(h) : ad(s.stateNode, s.memoizedProps);
                  } catch (b) {
                    $e(i, i.return, b);
                  }
                }
              } else if (s.tag === 6) {
                if (d === null) try {
                  m = s.stateNode, u ? ld(m) : ud(m, s.memoizedProps);
                } catch (b) {
                  $e(i, i.return, b);
                }
              } else if ((s.tag !== 22 && s.tag !== 23 || s.memoizedState === null || s === i) && s.child !== null) {
                s.child.return = s, s = s.child;
                continue;
              }
              if (s === i) break e;
              for (; s.sibling === null; ) {
                if (s.return === null || s.return === i) break e;
                d === s && (d = null), s = s.return;
              }
              d === s && (d = null), s.sibling.return = s.return, s = s.sibling;
            }
          }
        }
        break;
      case 19:
        zn(s, i), nr(i), d & 4 && Vp(i);
        break;
      case 21:
        break;
      default:
        zn(s, i), nr(i);
    }
  }
  function nr(i) {
    var s = i.flags;
    if (s & 2) {
      try {
        if (de) {
          e: {
            for (var u = i.return; u !== null; ) {
              if (Up(u)) {
                var d = u;
                break e;
              }
              u = u.return;
            }
            throw Error(a(160));
          }
          switch (d.tag) {
            case 5:
              var h = d.stateNode;
              d.flags & 32 && (ki(h), d.flags &= -33);
              var m = Bp(i);
              of(i, m, h);
              break;
            case 3:
            case 4:
              var P = d.stateNode.containerInfo, O = Bp(i);
              sf(i, O, P);
              break;
            default:
              throw Error(a(161));
          }
        }
      } catch (U) {
        $e(i, i.return, U);
      }
      i.flags &= -3;
    }
    s & 4096 && (i.flags &= -4097);
  }
  function h5(i, s, u) {
    te = i, jp(i);
  }
  function jp(i, s, u) {
    for (var d = (i.mode & 1) !== 0; te !== null; ) {
      var h = te, m = h.child;
      if (h.tag === 22 && d) {
        var P = h.memoizedState !== null || ga;
        if (!P) {
          var O = h.alternate, U = O !== null && O.memoizedState !== null || Dt;
          O = ga;
          var Y = Dt;
          if (ga = P, (Dt = U) && !Y) for (te = h; te !== null; ) P = te, U = P.child, P.tag === 22 && P.memoizedState !== null ? Yp(h) : U !== null ? (U.return = P, te = U) : Yp(h);
          for (; m !== null; ) te = m, jp(m), m = m.sibling;
          te = h, ga = O, Dt = Y;
        }
        Wp(i);
      } else h.subtreeFlags & 8772 && m !== null ? (m.return = h, te = m) : Wp(i);
    }
  }
  function Wp(i) {
    for (; te !== null; ) {
      var s = te;
      if (s.flags & 8772) {
        var u = s.alternate;
        try {
          if (s.flags & 8772) switch (s.tag) {
            case 0:
            case 11:
            case 15:
              Dt || ma(5, s);
              break;
            case 1:
              var d = s.stateNode;
              if (s.flags & 4 && !Dt) if (u === null) d.componentDidMount();
              else {
                var h = s.elementType === s.type ? u.memoizedProps : Dn(s.type, u.memoizedProps);
                d.componentDidUpdate(h, u.memoizedState, d.__reactInternalSnapshotBeforeUpdate);
              }
              var m = s.updateQueue;
              m !== null && X1(s, m, d);
              break;
            case 3:
              var P = s.updateQueue;
              if (P !== null) {
                if (u = null, s.child !== null) switch (s.child.tag) {
                  case 5:
                    u = pe(s.child.stateNode);
                    break;
                  case 1:
                    u = s.child.stateNode;
                }
                X1(s, P, u);
              }
              break;
            case 5:
              var O = s.stateNode;
              u === null && s.flags & 4 && Bl(O, s.type, s.memoizedProps, s);
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (Ge && s.memoizedState === null) {
                var U = s.alternate;
                if (U !== null) {
                  var Y = U.memoizedState;
                  if (Y !== null) {
                    var se = Y.dehydrated;
                    se !== null && Fy(se);
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
              throw Error(a(163));
          }
          Dt || s.flags & 512 && rf(s);
        } catch (ge) {
          $e(s, s.return, ge);
        }
      }
      if (s === i) {
        te = null;
        break;
      }
      if (u = s.sibling, u !== null) {
        u.return = s.return, te = u;
        break;
      }
      te = s.return;
    }
  }
  function Kp(i) {
    for (; te !== null; ) {
      var s = te;
      if (s === i) {
        te = null;
        break;
      }
      var u = s.sibling;
      if (u !== null) {
        u.return = s.return, te = u;
        break;
      }
      te = s.return;
    }
  }
  function Yp(i) {
    for (; te !== null; ) {
      var s = te;
      try {
        switch (s.tag) {
          case 0:
          case 11:
          case 15:
            var u = s.return;
            try {
              ma(4, s);
            } catch (U) {
              $e(s, u, U);
            }
            break;
          case 1:
            var d = s.stateNode;
            if (typeof d.componentDidMount == "function") {
              var h = s.return;
              try {
                d.componentDidMount();
              } catch (U) {
                $e(s, h, U);
              }
            }
            var m = s.return;
            try {
              rf(s);
            } catch (U) {
              $e(s, m, U);
            }
            break;
          case 5:
            var P = s.return;
            try {
              rf(s);
            } catch (U) {
              $e(s, P, U);
            }
        }
      } catch (U) {
        $e(s, s.return, U);
      }
      if (s === i) {
        te = null;
        break;
      }
      var O = s.sibling;
      if (O !== null) {
        O.return = s.return, te = O;
        break;
      }
      te = s.return;
    }
  }
  var ya = 0, va = 1, _a = 2, Sa = 3, wa = 4;
  if (typeof Symbol == "function" && Symbol.for) {
    var Fo = Symbol.for;
    ya = Fo("selector.component"), va = Fo("selector.has_pseudo_class"), _a = Fo("selector.role"), Sa = Fo("selector.test_id"), wa = Fo("selector.text");
  }
  function af(i) {
    var s = gn(i);
    if (s != null) {
      if (typeof s.memoizedProps["data-testname"] != "string") throw Error(a(364));
      return s;
    }
    if (i = nd(i), i === null) throw Error(a(362));
    return i.stateNode.current;
  }
  function uf(i, s) {
    switch (s.$$typeof) {
      case ya:
        if (i.type === s.value) return !0;
        break;
      case va:
        e: {
          s = s.value, i = [i, 0];
          for (var u = 0; u < i.length; ) {
            var d = i[u++], h = i[u++], m = s[h];
            if (d.tag !== 5 || !xi(d)) {
              for (; m != null && uf(d, m); ) h++, m = s[h];
              if (h === s.length) {
                s = !0;
                break e;
              } else for (d = d.child; d !== null; ) i.push(d, h), d = d.sibling;
            }
          }
          s = !1;
        }
        return s;
      case _a:
        if (i.tag === 5 && ie(i.stateNode, s.value)) return !0;
        break;
      case wa:
        if ((i.tag === 5 || i.tag === 6) && (i = Ul(i), i !== null && 0 <= i.indexOf(s.value))) return !0;
        break;
      case Sa:
        if (i.tag === 5 && (i = i.memoizedProps["data-testname"], typeof i == "string" && i.toLowerCase() === s.value.toLowerCase())) return !0;
        break;
      default:
        throw Error(a(365));
    }
    return !1;
  }
  function cf(i) {
    switch (i.$$typeof) {
      case ya:
        return "<" + (L(i.value) || "Unknown") + ">";
      case va:
        return ":has(" + (cf(i) || "") + ")";
      case _a:
        return '[role="' + i.value + '"]';
      case wa:
        return '"' + i.value + '"';
      case Sa:
        return '[data-testname="' + i.value + '"]';
      default:
        throw Error(a(365));
    }
  }
  function Xp(i, s) {
    var u = [];
    i = [i, 0];
    for (var d = 0; d < i.length; ) {
      var h = i[d++], m = i[d++], P = s[m];
      if (h.tag !== 5 || !xi(h)) {
        for (; P != null && uf(h, P); ) m++, P = s[m];
        if (m === s.length) u.push(h);
        else for (h = h.child; h !== null; ) i.push(h, m), h = h.sibling;
      }
    }
    return u;
  }
  function df(i, s) {
    if (!wi) throw Error(a(363));
    i = af(i), i = Xp(i, s), s = [], i = Array.from(i);
    for (var u = 0; u < i.length; ) {
      var d = i[u++];
      if (d.tag === 5) xi(d) || s.push(d.stateNode);
      else for (d = d.child; d !== null; ) i.push(d), d = d.sibling;
    }
    return s;
  }
  var p5 = Math.ceil, xa = c.ReactCurrentDispatcher, ff = c.ReactCurrentOwner, lt = c.ReactCurrentBatchConfig, we = 0, Ct = null, ct = null, Nt = 0, an = 0, xs = Dr(0), gt = 0, Mo = null, Fi = 0, Ca = 0, hf = 0, Lo = null, Zt = null, pf = 0, gf = 1 / 0, mr = null;
  function Cs() {
    gf = wt() + 500;
  }
  var ka = !1, mf = null, Ur = null, Ea = !1, Br = null, Pa = 0, Ao = 0, yf = null, Ta = -1, Na = 0;
  function It() {
    return we & 6 ? wt() : Ta !== -1 ? Ta : Ta = wt();
  }
  function Vr(i) {
    return i.mode & 1 ? we & 2 && Nt !== 0 ? Nt & -Nt : qy.transition !== null ? (Na === 0 && (Na = M1()), Na) : (i = Re, i !== 0 ? i : Mn()) : 1;
  }
  function xn(i, s, u, d) {
    if (50 < Ao) throw Ao = 0, yf = null, Error(a(185));
    yo(i, u, d), (!(we & 2) || i !== Ct) && (i === Ct && (!(we & 2) && (Ca |= u), gt === 4 && Hr(i, Nt)), Jt(i, d), u === 1 && we === 0 && !(s.mode & 1) && (Cs(), Ql && qn()));
  }
  function Jt(i, s) {
    var u = i.callbackNode;
    Vy(i, s);
    var d = Yl(i, i === Ct ? Nt : 0);
    if (d === 0) u !== null && A1(u), i.callbackNode = null, i.callbackPriority = 0;
    else if (s = d & -d, i.callbackPriority !== s) {
      if (u != null && A1(u), s === 1) i.tag === 0 ? $y($p.bind(null, i)) : O1($p.bind(null, i)), Qn ? td(function() {
        !(we & 6) && qn();
      }) : _d(Sd, qn), u = null;
      else {
        switch (L1(d)) {
          case 1:
            u = Sd;
            break;
          case 4:
            u = Ky;
            break;
          case 16:
            u = wd;
            break;
          case 536870912:
            u = Yy;
            break;
          default:
            u = wd;
        }
        u = ig(u, Qp.bind(null, i));
      }
      i.callbackPriority = s, i.callbackNode = u;
    }
  }
  function Qp(i, s) {
    if (Ta = -1, Na = 0, we & 6) throw Error(a(327));
    var u = i.callbackNode;
    if (Ai() && i.callbackNode !== u) return null;
    var d = Yl(i, i === Ct ? Nt : 0);
    if (d === 0) return null;
    if (d & 30 || d & i.expiredLanes || s) s = Ra(i, d);
    else {
      s = d;
      var h = we;
      we |= 2;
      var m = Jp();
      (Ct !== i || Nt !== s) && (mr = null, Cs(), Mi(i, s));
      do
        try {
          y5();
          break;
        } catch (O) {
          Zp(i, O);
        }
      while (!0);
      Rd(), xa.current = m, we = h, ct !== null ? s = 0 : (Ct = null, Nt = 0, s = gt);
    }
    if (s !== 0) {
      if (s === 2 && (h = md(i), h !== 0 && (d = h, s = vf(i, h))), s === 1) throw u = Mo, Mi(i, 0), Hr(i, d), Jt(i, wt()), u;
      if (s === 6) Hr(i, d);
      else {
        if (h = i.current.alternate, !(d & 30) && !g5(h) && (s = Ra(i, d), s === 2 && (m = md(i), m !== 0 && (d = m, s = vf(i, m))), s === 1)) throw u = Mo, Mi(i, 0), Hr(i, d), Jt(i, wt()), u;
        switch (i.finishedWork = h, i.finishedLanes = d, s) {
          case 0:
          case 1:
            throw Error(a(345));
          case 2:
            Li(i, Zt, mr);
            break;
          case 3:
            if (Hr(i, d), (d & 130023424) === d && (s = pf + 500 - wt(), 10 < s)) {
              if (Yl(i, 0) !== 0) break;
              if (h = i.suspendedLanes, (h & d) !== d) {
                It(), i.pingedLanes |= i.suspendedLanes & h;
                break;
              }
              i.timeoutHandle = A(Li.bind(null, i, Zt, mr), s);
              break;
            }
            Li(i, Zt, mr);
            break;
          case 4:
            if (Hr(i, d), (d & 4194240) === d) break;
            for (s = i.eventTimes, h = -1; 0 < d; ) {
              var P = 31 - Ln(d);
              m = 1 << P, P = s[P], P > h && (h = P), d &= ~m;
            }
            if (d = h, d = wt() - d, d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3e3 > d ? 3e3 : 4320 > d ? 4320 : 1960 * p5(d / 1960)) - d, 10 < d) {
              i.timeoutHandle = A(Li.bind(null, i, Zt, mr), d);
              break;
            }
            Li(i, Zt, mr);
            break;
          case 5:
            Li(i, Zt, mr);
            break;
          default:
            throw Error(a(329));
        }
      }
    }
    return Jt(i, wt()), i.callbackNode === u ? Qp.bind(null, i) : null;
  }
  function vf(i, s) {
    var u = Lo;
    return i.current.memoizedState.isDehydrated && (Mi(i, s).flags |= 256), i = Ra(i, s), i !== 2 && (s = Zt, Zt = u, s !== null && _f(s)), i;
  }
  function _f(i) {
    Zt === null ? Zt = i : Zt.push.apply(Zt, i);
  }
  function g5(i) {
    for (var s = i; ; ) {
      if (s.flags & 16384) {
        var u = s.updateQueue;
        if (u !== null && (u = u.stores, u !== null)) for (var d = 0; d < u.length; d++) {
          var h = u[d], m = h.getSnapshot;
          h = h.value;
          try {
            if (!An(m(), h)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (u = s.child, s.subtreeFlags & 16384 && u !== null) u.return = s, s = u;
      else {
        if (s === i) break;
        for (; s.sibling === null; ) {
          if (s.return === null || s.return === i) return !0;
          s = s.return;
        }
        s.sibling.return = s.return, s = s.sibling;
      }
    }
    return !0;
  }
  function Hr(i, s) {
    for (s &= ~hf, s &= ~Ca, i.suspendedLanes |= s, i.pingedLanes &= ~s, i = i.expirationTimes; 0 < s; ) {
      var u = 31 - Ln(s), d = 1 << u;
      i[u] = -1, s &= ~d;
    }
  }
  function $p(i) {
    if (we & 6) throw Error(a(327));
    Ai();
    var s = Yl(i, 0);
    if (!(s & 1)) return Jt(i, wt()), null;
    var u = Ra(i, s);
    if (i.tag !== 0 && u === 2) {
      var d = md(i);
      d !== 0 && (s = d, u = vf(i, d));
    }
    if (u === 1) throw u = Mo, Mi(i, 0), Hr(i, s), Jt(i, wt()), u;
    if (u === 6) throw Error(a(345));
    return i.finishedWork = i.current.alternate, i.finishedLanes = s, Li(i, Zt, mr), Jt(i, wt()), null;
  }
  function qp(i) {
    Br !== null && Br.tag === 0 && !(we & 6) && Ai();
    var s = we;
    we |= 1;
    var u = lt.transition, d = Re;
    try {
      if (lt.transition = null, Re = 1, i) return i();
    } finally {
      Re = d, lt.transition = u, we = s, !(we & 6) && qn();
    }
  }
  function Sf() {
    an = xs.current, je(xs);
  }
  function Mi(i, s) {
    i.finishedWork = null, i.finishedLanes = 0;
    var u = i.timeoutHandle;
    if (u !== le && (i.timeoutHandle = le, W(u)), ct !== null) for (u = ct.return; u !== null; ) {
      var d = u;
      switch (kd(d), d.tag) {
        case 1:
          d = d.type.childContextTypes, d != null && Hl();
          break;
        case 3:
          _s(), je(Qt), je(Lt), zd();
          break;
        case 5:
          Dd(d);
          break;
        case 4:
          _s();
          break;
        case 13:
          je(Je);
          break;
        case 19:
          je(Je);
          break;
        case 10:
          Fd(d.type._context);
          break;
        case 22:
        case 23:
          Sf();
      }
      u = u.return;
    }
    if (Ct = i, ct = i = jr(i.current, null), Nt = an = s, gt = 0, Mo = null, hf = Ca = Fi = 0, Zt = Lo = null, Ni !== null) {
      for (s = 0; s < Ni.length; s++) if (u = Ni[s], d = u.interleaved, d !== null) {
        u.interleaved = null;
        var h = d.next, m = u.pending;
        if (m !== null) {
          var P = m.next;
          m.next = h, d.next = P;
        }
        u.pending = d;
      }
      Ni = null;
    }
    return i;
  }
  function Zp(i, s) {
    do {
      var u = ct;
      try {
        if (Rd(), sa.current = ua, oa) {
          for (var d = be.memoizedState; d !== null; ) {
            var h = d.queue;
            h !== null && (h.pending = null), d = d.next;
          }
          oa = !1;
        }
        if (Ri = 0, xt = pt = be = null, xo = !1, Co = 0, ff.current = null, u === null || u.return === null) {
          gt = 1, Mo = s, ct = null;
          break;
        }
        e: {
          var m = i, P = u.return, O = u, U = s;
          if (s = Nt, O.flags |= 32768, U !== null && typeof U == "object" && typeof U.then == "function") {
            var Y = U, se = O, ge = se.tag;
            if (!(se.mode & 1) && (ge === 0 || ge === 11 || ge === 15)) {
              var b = se.alternate;
              b ? (se.updateQueue = b.updateQueue, se.memoizedState = b.memoizedState, se.lanes = b.lanes) : (se.updateQueue = null, se.memoizedState = null);
            }
            var We = xp(P);
            if (We !== null) {
              We.flags &= -257, Cp(We, P, O, m, s), We.mode & 1 && wp(m, Y, s), s = We, U = Y;
              var Ue = s.updateQueue;
              if (Ue === null) {
                var bt = /* @__PURE__ */ new Set();
                bt.add(U), s.updateQueue = bt;
              } else Ue.add(U);
              break e;
            } else {
              if (!(s & 1)) {
                wp(m, Y, s), wf();
                break e;
              }
              U = Error(a(426));
            }
          } else if (Qe && O.mode & 1) {
            var yr = xp(P);
            if (yr !== null) {
              !(yr.flags & 65536) && (yr.flags |= 256), Cp(yr, P, O, m, s), Td(Ss(U, O));
              break e;
            }
          }
          m = U = Ss(U, O), gt !== 4 && (gt = 2), Lo === null ? Lo = [m] : Lo.push(m), m = P;
          do {
            switch (m.tag) {
              case 3:
                m.flags |= 65536, s &= -s, m.lanes |= s;
                var z = _p(m, U, s);
                Y1(m, z);
                break e;
              case 1:
                O = U;
                var D = m.type, V = m.stateNode;
                if (!(m.flags & 128) && (typeof D.getDerivedStateFromError == "function" || V !== null && typeof V.componentDidCatch == "function" && (Ur === null || !Ur.has(V)))) {
                  m.flags |= 65536, s &= -s, m.lanes |= s;
                  var ee = Sp(m, O, s);
                  Y1(m, ee);
                  break e;
                }
            }
            m = m.return;
          } while (m !== null);
        }
        eg(u);
      } catch (ce) {
        s = ce, ct === u && u !== null && (ct = u = u.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Jp() {
    var i = xa.current;
    return xa.current = ua, i === null ? ua : i;
  }
  function wf() {
    (gt === 0 || gt === 3 || gt === 2) && (gt = 4), Ct === null || !(Fi & 268435455) && !(Ca & 268435455) || Hr(Ct, Nt);
  }
  function Ra(i, s) {
    var u = we;
    we |= 2;
    var d = Jp();
    (Ct !== i || Nt !== s) && (mr = null, Mi(i, s));
    do
      try {
        m5();
        break;
      } catch (h) {
        Zp(i, h);
      }
    while (!0);
    if (Rd(), we = u, xa.current = d, ct !== null) throw Error(a(261));
    return Ct = null, Nt = 0, gt;
  }
  function m5() {
    for (; ct !== null; ) bp(ct);
  }
  function y5() {
    for (; ct !== null && !jy(); ) bp(ct);
  }
  function bp(i) {
    var s = rg(i.alternate, i, an);
    i.memoizedProps = i.pendingProps, s === null ? eg(i) : ct = s, ff.current = null;
  }
  function eg(i) {
    var s = i;
    do {
      var u = s.alternate;
      if (i = s.return, s.flags & 32768) {
        if (u = c5(u, s), u !== null) {
          u.flags &= 32767, ct = u;
          return;
        }
        if (i !== null) i.flags |= 32768, i.subtreeFlags = 0, i.deletions = null;
        else {
          gt = 6, ct = null;
          return;
        }
      } else if (u = u5(u, s, an), u !== null) {
        ct = u;
        return;
      }
      if (s = s.sibling, s !== null) {
        ct = s;
        return;
      }
      ct = s = i;
    } while (s !== null);
    gt === 0 && (gt = 5);
  }
  function Li(i, s, u) {
    var d = Re, h = lt.transition;
    try {
      lt.transition = null, Re = 1, v5(i, s, u, d);
    } finally {
      lt.transition = h, Re = d;
    }
    return null;
  }
  function v5(i, s, u, d) {
    do
      Ai();
    while (Br !== null);
    if (we & 6) throw Error(a(327));
    u = i.finishedWork;
    var h = i.finishedLanes;
    if (u === null) return null;
    if (i.finishedWork = null, i.finishedLanes = 0, u === i.current) throw Error(a(177));
    i.callbackNode = null, i.callbackPriority = 0;
    var m = u.lanes | u.childLanes;
    if (Hy(i, m), i === Ct && (ct = Ct = null, Nt = 0), !(u.subtreeFlags & 2064) && !(u.flags & 2064) || Ea || (Ea = !0, ig(wd, function() {
      return Ai(), null;
    })), m = (u.flags & 15990) !== 0, u.subtreeFlags & 15990 || m) {
      m = lt.transition, lt.transition = null;
      var P = Re;
      Re = 1;
      var O = we;
      we |= 4, ff.current = null, f5(i, u), Hp(u, i), X(i.containerInfo), i.current = u, h5(u), Wy(), we = O, Re = P, lt.transition = m;
    } else i.current = u;
    if (Ea && (Ea = !1, Br = i, Pa = h), m = i.pendingLanes, m === 0 && (Ur = null), Xy(u.stateNode), Jt(i, wt()), s !== null) for (d = i.onRecoverableError, u = 0; u < s.length; u++) h = s[u], d(h.value, { componentStack: h.stack, digest: h.digest });
    if (ka) throw ka = !1, i = mf, mf = null, i;
    return Pa & 1 && i.tag !== 0 && Ai(), m = i.pendingLanes, m & 1 ? i === yf ? Ao++ : (Ao = 0, yf = i) : Ao = 0, qn(), null;
  }
  function Ai() {
    if (Br !== null) {
      var i = L1(Pa), s = lt.transition, u = Re;
      try {
        if (lt.transition = null, Re = 16 > i ? 16 : i, Br === null) var d = !1;
        else {
          if (i = Br, Br = null, Pa = 0, we & 6) throw Error(a(331));
          var h = we;
          for (we |= 4, te = i.current; te !== null; ) {
            var m = te, P = m.child;
            if (te.flags & 16) {
              var O = m.deletions;
              if (O !== null) {
                for (var U = 0; U < O.length; U++) {
                  var Y = O[U];
                  for (te = Y; te !== null; ) {
                    var se = te;
                    switch (se.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ro(8, se, m);
                    }
                    var ge = se.child;
                    if (ge !== null) ge.return = se, te = ge;
                    else for (; te !== null; ) {
                      se = te;
                      var b = se.sibling, We = se.return;
                      if (Gp(se), se === Y) {
                        te = null;
                        break;
                      }
                      if (b !== null) {
                        b.return = We, te = b;
                        break;
                      }
                      te = We;
                    }
                  }
                }
                var Ue = m.alternate;
                if (Ue !== null) {
                  var bt = Ue.child;
                  if (bt !== null) {
                    Ue.child = null;
                    do {
                      var yr = bt.sibling;
                      bt.sibling = null, bt = yr;
                    } while (bt !== null);
                  }
                }
                te = m;
              }
            }
            if (m.subtreeFlags & 2064 && P !== null) P.return = m, te = P;
            else e: for (; te !== null; ) {
              if (m = te, m.flags & 2048) switch (m.tag) {
                case 0:
                case 11:
                case 15:
                  Ro(9, m, m.return);
              }
              var z = m.sibling;
              if (z !== null) {
                z.return = m.return, te = z;
                break e;
              }
              te = m.return;
            }
          }
          var D = i.current;
          for (te = D; te !== null; ) {
            P = te;
            var V = P.child;
            if (P.subtreeFlags & 2064 && V !== null) V.return = P, te = V;
            else e: for (P = D; te !== null; ) {
              if (O = te, O.flags & 2048) try {
                switch (O.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ma(9, O);
                }
              } catch (ce) {
                $e(O, O.return, ce);
              }
              if (O === P) {
                te = null;
                break e;
              }
              var ee = O.sibling;
              if (ee !== null) {
                ee.return = O.return, te = ee;
                break e;
              }
              te = O.return;
            }
          }
          if (we = h, qn(), $n && typeof $n.onPostCommitFiberRoot == "function") try {
            $n.onPostCommitFiberRoot(Xl, i);
          } catch {
          }
          d = !0;
        }
        return d;
      } finally {
        Re = u, lt.transition = s;
      }
    }
    return !1;
  }
  function tg(i, s, u) {
    s = Ss(u, s), s = _p(i, s, 1), i = Gr(i, s, 1), s = It(), i !== null && (yo(i, 1, s), Jt(i, s));
  }
  function $e(i, s, u) {
    if (i.tag === 3) tg(i, i, u);
    else for (; s !== null; ) {
      if (s.tag === 3) {
        tg(s, i, u);
        break;
      } else if (s.tag === 1) {
        var d = s.stateNode;
        if (typeof s.type.getDerivedStateFromError == "function" || typeof d.componentDidCatch == "function" && (Ur === null || !Ur.has(d))) {
          i = Ss(u, i), i = Sp(s, i, 1), s = Gr(s, i, 1), i = It(), s !== null && (yo(s, 1, i), Jt(s, i));
          break;
        }
      }
      s = s.return;
    }
  }
  function _5(i, s, u) {
    var d = i.pingCache;
    d !== null && d.delete(s), s = It(), i.pingedLanes |= i.suspendedLanes & u, Ct === i && (Nt & u) === u && (gt === 4 || gt === 3 && (Nt & 130023424) === Nt && 500 > wt() - pf ? Mi(i, 0) : hf |= u), Jt(i, s);
  }
  function ng(i, s) {
    s === 0 && (i.mode & 1 ? (s = Kl, Kl <<= 1, !(Kl & 130023424) && (Kl = 4194304)) : s = 1);
    var u = It();
    i = Zn(i, s), i !== null && (yo(i, s, u), Jt(i, u));
  }
  function S5(i) {
    var s = i.memoizedState, u = 0;
    s !== null && (u = s.retryLane), ng(i, u);
  }
  function w5(i, s) {
    var u = 0;
    switch (i.tag) {
      case 13:
        var d = i.stateNode, h = i.memoizedState;
        h !== null && (u = h.retryLane);
        break;
      case 19:
        d = i.stateNode;
        break;
      default:
        throw Error(a(314));
    }
    d !== null && d.delete(s), ng(i, u);
  }
  var rg;
  rg = function(i, s, u) {
    if (i !== null) if (i.memoizedProps !== s.pendingProps || Qt.current) qt = !0;
    else {
      if (!(i.lanes & u) && !(s.flags & 128)) return qt = !1, a5(i, s, u);
      qt = !!(i.flags & 131072);
    }
    else qt = !1, Qe && s.flags & 1048576 && D1(s, ql, s.index);
    switch (s.lanes = 0, s.tag) {
      case 2:
        var d = s.type;
        fa(i, s), i = s.pendingProps;
        var h = ds(s, Lt.current);
        ys(s, u), h = Bd(null, s, d, i, h, u);
        var m = Vd();
        return s.flags |= 1, typeof h == "object" && h !== null && typeof h.render == "function" && h.$$typeof === void 0 ? (s.tag = 1, s.memoizedState = null, s.updateQueue = null, $t(d) ? (m = !0, jl(s)) : m = !1, s.memoizedState = h.state !== null && h.state !== void 0 ? h.state : null, Ad(s), h.updater = ca, s.stateNode = h, h._reactInternals = s, Xd(s, d, i, u), s = Zd(null, s, d, !0, m, u)) : (s.tag = 0, Qe && m && Cd(s), Ht(null, s, h, u), s = s.child), s;
      case 16:
        d = s.elementType;
        e: {
          switch (fa(i, s), i = s.pendingProps, h = d._init, d = h(d._payload), s.type = d, h = s.tag = C5(d), i = Dn(d, i), h) {
            case 0:
              s = qd(null, s, d, i, u);
              break e;
            case 1:
              s = Rp(null, s, d, i, u);
              break e;
            case 11:
              s = kp(null, s, d, i, u);
              break e;
            case 14:
              s = Ep(null, s, d, Dn(d.type, i), u);
              break e;
          }
          throw Error(a(
            306,
            d,
            ""
          ));
        }
        return s;
      case 0:
        return d = s.type, h = s.pendingProps, h = s.elementType === d ? h : Dn(d, h), qd(i, s, d, h, u);
      case 1:
        return d = s.type, h = s.pendingProps, h = s.elementType === d ? h : Dn(d, h), Rp(i, s, d, h, u);
      case 3:
        e: {
          if (Fp(s), i === null) throw Error(a(387));
          d = s.pendingProps, m = s.memoizedState, h = m.element, K1(i, s), ra(s, d, null, u);
          var P = s.memoizedState;
          if (d = P.element, Ge && m.isDehydrated) if (m = { element: d, isDehydrated: !1, cache: P.cache, pendingSuspenseBoundaries: P.pendingSuspenseBoundaries, transitions: P.transitions }, s.updateQueue.baseState = m, s.memoizedState = m, s.flags & 256) {
            h = Ss(Error(a(423)), s), s = Mp(i, s, d, u, h);
            break e;
          } else if (d !== h) {
            h = Ss(Error(a(424)), s), s = Mp(i, s, d, u, h);
            break e;
          } else for (Ge && (vn = Cy(s.stateNode.containerInfo), ln = s, Qe = !0, On = null, vo = !1), u = H1(s, null, d, u), s.child = u; u; ) u.flags = u.flags & -3 | 4096, u = u.sibling;
          else {
            if (ps(), d === h) {
              s = gr(i, s, u);
              break e;
            }
            Ht(i, s, d, u);
          }
          s = s.child;
        }
        return s;
      case 5:
        return Q1(s), i === null && Pd(s), d = s.type, h = s.pendingProps, m = i !== null ? i.memoizedProps : null, P = h.children, ht(d, h) ? P = null : m !== null && ht(d, m) && (s.flags |= 32), Np(i, s), Ht(i, s, P, u), s.child;
      case 6:
        return i === null && Pd(s), null;
      case 13:
        return Lp(i, s, u);
      case 4:
        return Od(s, s.stateNode.containerInfo), d = s.pendingProps, i === null ? s.child = gs(s, null, d, u) : Ht(i, s, d, u), s.child;
      case 11:
        return d = s.type, h = s.pendingProps, h = s.elementType === d ? h : Dn(d, h), kp(i, s, d, h, u);
      case 7:
        return Ht(i, s, s.pendingProps, u), s.child;
      case 8:
        return Ht(i, s, s.pendingProps.children, u), s.child;
      case 12:
        return Ht(i, s, s.pendingProps.children, u), s.child;
      case 10:
        e: {
          if (d = s.type._context, h = s.pendingProps, m = s.memoizedProps, P = h.value, j1(s, d, P), m !== null) if (An(m.value, P)) {
            if (m.children === h.children && !Qt.current) {
              s = gr(i, s, u);
              break e;
            }
          } else for (m = s.child, m !== null && (m.return = s); m !== null; ) {
            var O = m.dependencies;
            if (O !== null) {
              P = m.child;
              for (var U = O.firstContext; U !== null; ) {
                if (U.context === d) {
                  if (m.tag === 1) {
                    U = pr(-1, u & -u), U.tag = 2;
                    var Y = m.updateQueue;
                    if (Y !== null) {
                      Y = Y.shared;
                      var se = Y.pending;
                      se === null ? U.next = U : (U.next = se.next, se.next = U), Y.pending = U;
                    }
                  }
                  m.lanes |= u, U = m.alternate, U !== null && (U.lanes |= u), Md(m.return, u, s), O.lanes |= u;
                  break;
                }
                U = U.next;
              }
            } else if (m.tag === 10) P = m.type === s.type ? null : m.child;
            else if (m.tag === 18) {
              if (P = m.return, P === null) throw Error(a(341));
              P.lanes |= u, O = P.alternate, O !== null && (O.lanes |= u), Md(P, u, s), P = m.sibling;
            } else P = m.child;
            if (P !== null) P.return = m;
            else for (P = m; P !== null; ) {
              if (P === s) {
                P = null;
                break;
              }
              if (m = P.sibling, m !== null) {
                m.return = P.return, P = m;
                break;
              }
              P = P.return;
            }
            m = P;
          }
          Ht(i, s, h.children, u), s = s.child;
        }
        return s;
      case 9:
        return h = s.type, d = s.pendingProps.children, ys(s, u), h = _n(h), d = d(h), s.flags |= 1, Ht(i, s, d, u), s.child;
      case 14:
        return d = s.type, h = Dn(d, s.pendingProps), h = Dn(d.type, h), Ep(i, s, d, h, u);
      case 15:
        return Pp(i, s, s.type, s.pendingProps, u);
      case 17:
        return d = s.type, h = s.pendingProps, h = s.elementType === d ? h : Dn(d, h), fa(i, s), s.tag = 1, $t(d) ? (i = !0, jl(s)) : i = !1, ys(s, u), yp(s, d, h), Xd(s, d, h, u), Zd(null, s, d, !0, i, u);
      case 19:
        return Op(i, s, u);
      case 22:
        return Tp(i, s, u);
    }
    throw Error(a(156, s.tag));
  };
  function ig(i, s) {
    return _d(i, s);
  }
  function x5(i, s, u, d) {
    this.tag = i, this.key = u, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = s, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = d, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Cn(i, s, u, d) {
    return new x5(i, s, u, d);
  }
  function xf(i) {
    return i = i.prototype, !(!i || !i.isReactComponent);
  }
  function C5(i) {
    if (typeof i == "function") return xf(i) ? 1 : 0;
    if (i != null) {
      if (i = i.$$typeof, i === E) return 11;
      if (i === w) return 14;
    }
    return 2;
  }
  function jr(i, s) {
    var u = i.alternate;
    return u === null ? (u = Cn(i.tag, s, i.key, i.mode), u.elementType = i.elementType, u.type = i.type, u.stateNode = i.stateNode, u.alternate = i, i.alternate = u) : (u.pendingProps = s, u.type = i.type, u.flags = 0, u.subtreeFlags = 0, u.deletions = null), u.flags = i.flags & 14680064, u.childLanes = i.childLanes, u.lanes = i.lanes, u.child = i.child, u.memoizedProps = i.memoizedProps, u.memoizedState = i.memoizedState, u.updateQueue = i.updateQueue, s = i.dependencies, u.dependencies = s === null ? null : { lanes: s.lanes, firstContext: s.firstContext }, u.sibling = i.sibling, u.index = i.index, u.ref = i.ref, u;
  }
  function Fa(i, s, u, d, h, m) {
    var P = 2;
    if (d = i, typeof i == "function") xf(i) && (P = 1);
    else if (typeof i == "string") P = 5;
    else e: switch (i) {
      case y:
        return Oi(u.children, h, m, s);
      case C:
        P = 8, h |= 8;
        break;
      case S:
        return i = Cn(12, u, s, h | 2), i.elementType = S, i.lanes = m, i;
      case N:
        return i = Cn(13, u, s, h), i.elementType = N, i.lanes = m, i;
      case k:
        return i = Cn(19, u, s, h), i.elementType = k, i.lanes = m, i;
      case _:
        return Ma(u, h, m, s);
      default:
        if (typeof i == "object" && i !== null) switch (i.$$typeof) {
          case x:
            P = 10;
            break e;
          case v:
            P = 9;
            break e;
          case E:
            P = 11;
            break e;
          case w:
            P = 14;
            break e;
          case p:
            P = 16, d = null;
            break e;
        }
        throw Error(a(130, i == null ? i : typeof i, ""));
    }
    return s = Cn(P, u, s, h), s.elementType = i, s.type = d, s.lanes = m, s;
  }
  function Oi(i, s, u, d) {
    return i = Cn(7, i, d, s), i.lanes = u, i;
  }
  function Ma(i, s, u, d) {
    return i = Cn(22, i, d, s), i.elementType = _, i.lanes = u, i.stateNode = { isHidden: !1 }, i;
  }
  function Cf(i, s, u) {
    return i = Cn(6, i, null, s), i.lanes = u, i;
  }
  function kf(i, s, u) {
    return s = Cn(4, i.children !== null ? i.children : [], i.key, s), s.lanes = u, s.stateNode = { containerInfo: i.containerInfo, pendingChildren: null, implementation: i.implementation }, s;
  }
  function k5(i, s, u, d, h) {
    this.tag = s, this.containerInfo = i, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = le, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = yd(0), this.expirationTimes = yd(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = yd(0), this.identifierPrefix = d, this.onRecoverableError = h, Ge && (this.mutableSourceEagerHydrationData = null);
  }
  function sg(i, s, u, d, h, m, P, O, U) {
    return i = new k5(i, s, u, O, U), s === 1 ? (s = 1, m === !0 && (s |= 8)) : s = 0, m = Cn(3, null, null, s), i.current = m, m.stateNode = i, m.memoizedState = { element: d, isDehydrated: u, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Ad(m), i;
  }
  function og(i) {
    if (!i) return Ir;
    i = i._reactInternals;
    e: {
      if (G(i) !== i || i.tag !== 1) throw Error(a(170));
      var s = i;
      do {
        switch (s.tag) {
          case 3:
            s = s.stateNode.context;
            break e;
          case 1:
            if ($t(s.type)) {
              s = s.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        s = s.return;
      } while (s !== null);
      throw Error(a(171));
    }
    if (i.tag === 1) {
      var u = i.type;
      if ($t(u)) return R1(i, u, s);
    }
    return s;
  }
  function lg(i) {
    var s = i._reactInternals;
    if (s === void 0)
      throw typeof i.render == "function" ? Error(a(188)) : (i = Object.keys(i).join(","), Error(a(268, i)));
    return i = j(s), i === null ? null : i.stateNode;
  }
  function ag(i, s) {
    if (i = i.memoizedState, i !== null && i.dehydrated !== null) {
      var u = i.retryLane;
      i.retryLane = u !== 0 && u < s ? u : s;
    }
  }
  function La(i, s) {
    ag(i, s), (i = i.alternate) && ag(i, s);
  }
  function E5(i) {
    return i = j(i), i === null ? null : i.stateNode;
  }
  function P5() {
    return null;
  }
  return n.attemptContinuousHydration = function(i) {
    if (i.tag === 13) {
      var s = Zn(i, 134217728);
      if (s !== null) {
        var u = It();
        xn(s, i, 134217728, u);
      }
      La(i, 134217728);
    }
  }, n.attemptDiscreteHydration = function(i) {
    if (i.tag === 13) {
      var s = Zn(i, 1);
      if (s !== null) {
        var u = It();
        xn(s, i, 1, u);
      }
      La(i, 1);
    }
  }, n.attemptHydrationAtCurrentPriority = function(i) {
    if (i.tag === 13) {
      var s = Vr(i), u = Zn(i, s);
      if (u !== null) {
        var d = It();
        xn(u, i, s, d);
      }
      La(i, s);
    }
  }, n.attemptSynchronousHydration = function(i) {
    switch (i.tag) {
      case 3:
        var s = i.stateNode;
        if (s.current.memoizedState.isDehydrated) {
          var u = mo(s.pendingLanes);
          u !== 0 && (vd(s, u | 1), Jt(s, wt()), !(we & 6) && (Cs(), qn()));
        }
        break;
      case 13:
        qp(function() {
          var d = Zn(i, 1);
          if (d !== null) {
            var h = It();
            xn(d, i, 1, h);
          }
        }), La(i, 1);
    }
  }, n.batchedUpdates = function(i, s) {
    var u = we;
    we |= 1;
    try {
      return i(s);
    } finally {
      we = u, we === 0 && (Cs(), Ql && qn());
    }
  }, n.createComponentSelector = function(i) {
    return { $$typeof: ya, value: i };
  }, n.createContainer = function(i, s, u, d, h, m, P) {
    return sg(i, s, !1, null, u, d, h, m, P);
  }, n.createHasPseudoClassSelector = function(i) {
    return { $$typeof: va, value: i };
  }, n.createHydrationContainer = function(i, s, u, d, h, m, P, O, U) {
    return i = sg(u, d, !0, i, h, m, P, O, U), i.context = og(null), u = i.current, d = It(), h = Vr(u), m = pr(d, h), m.callback = s ?? null, Gr(u, m, h), i.current.lanes = h, yo(i, h, d), Jt(i, d), i;
  }, n.createPortal = function(i, s, u) {
    var d = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: g, key: d == null ? null : "" + d, children: i, containerInfo: s, implementation: u };
  }, n.createRoleSelector = function(i) {
    return { $$typeof: _a, value: i };
  }, n.createTestNameSelector = function(i) {
    return { $$typeof: Sa, value: i };
  }, n.createTextSelector = function(i) {
    return { $$typeof: wa, value: i };
  }, n.deferredUpdates = function(i) {
    var s = Re, u = lt.transition;
    try {
      return lt.transition = null, Re = 16, i();
    } finally {
      Re = s, lt.transition = u;
    }
  }, n.discreteUpdates = function(i, s, u, d, h) {
    var m = Re, P = lt.transition;
    try {
      return lt.transition = null, Re = 1, i(s, u, d, h);
    } finally {
      Re = m, lt.transition = P, we === 0 && Cs();
    }
  }, n.findAllNodes = df, n.findBoundingRects = function(i, s) {
    if (!wi) throw Error(a(363));
    s = df(i, s), i = [];
    for (var u = 0; u < s.length; u++) i.push(rd(s[u]));
    for (s = i.length - 1; 0 < s; s--) {
      u = i[s];
      for (var d = u.x, h = d + u.width, m = u.y, P = m + u.height, O = s - 1; 0 <= O; O--) if (s !== O) {
        var U = i[O], Y = U.x, se = Y + U.width, ge = U.y, b = ge + U.height;
        if (d >= Y && m >= ge && h <= se && P <= b) {
          i.splice(s, 1);
          break;
        } else if (d !== Y || u.width !== U.width || b < m || ge > P) {
          if (!(m !== ge || u.height !== U.height || se < d || Y > h)) {
            Y > d && (U.width += Y - d, U.x = d), se < h && (U.width = h - Y), i.splice(s, 1);
            break;
          }
        } else {
          ge > m && (U.height += ge - m, U.y = m), b < P && (U.height = P - ge), i.splice(s, 1);
          break;
        }
      }
    }
    return i;
  }, n.findHostInstance = lg, n.findHostInstanceWithNoPortals = function(i) {
    return i = B(i), i = i !== null ? Z(i) : null, i === null ? null : i.stateNode;
  }, n.findHostInstanceWithWarning = function(i) {
    return lg(i);
  }, n.flushControlled = function(i) {
    var s = we;
    we |= 1;
    var u = lt.transition, d = Re;
    try {
      lt.transition = null, Re = 1, i();
    } finally {
      Re = d, lt.transition = u, we = s, we === 0 && (Cs(), qn());
    }
  }, n.flushPassiveEffects = Ai, n.flushSync = qp, n.focusWithin = function(i, s) {
    if (!wi) throw Error(a(363));
    for (i = af(i), s = Xp(i, s), s = Array.from(s), i = 0; i < s.length; ) {
      var u = s[i++];
      if (!xi(u)) {
        if (u.tag === 5 && J(u.stateNode)) return !0;
        for (u = u.child; u !== null; ) s.push(u), u = u.sibling;
      }
    }
    return !1;
  }, n.getCurrentUpdatePriority = function() {
    return Re;
  }, n.getFindAllNodesFailureDescription = function(i, s) {
    if (!wi) throw Error(a(363));
    var u = 0, d = [];
    i = [af(i), 0];
    for (var h = 0; h < i.length; ) {
      var m = i[h++], P = i[h++], O = s[P];
      if ((m.tag !== 5 || !xi(m)) && (uf(m, O) && (d.push(cf(O)), P++, P > u && (u = P)), P < s.length)) for (m = m.child; m !== null; ) i.push(m, P), m = m.sibling;
    }
    if (u < s.length) {
      for (i = []; u < s.length; u++) i.push(cf(s[u]));
      return `findAllNodes was able to match part of the selector:
  ` + (d.join(" > ") + `

No matching component was found for:
  `) + i.join(" > ");
    }
    return null;
  }, n.getPublicRootInstance = function(i) {
    if (i = i.current, !i.child) return null;
    switch (i.child.tag) {
      case 5:
        return pe(i.child.stateNode);
      default:
        return i.child.stateNode;
    }
  }, n.injectIntoDevTools = function(i) {
    if (i = { bundleType: i.bundleType, version: i.version, rendererPackageName: i.rendererPackageName, rendererConfig: i.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: c.ReactCurrentDispatcher, findHostInstanceByFiber: E5, findFiberByHostInstance: i.findFiberByHostInstance || P5, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1" }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u") i = !1;
    else {
      var s = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (s.isDisabled || !s.supportsFiber) i = !0;
      else {
        try {
          Xl = s.inject(i), $n = s;
        } catch {
        }
        i = !!s.checkDCE;
      }
    }
    return i;
  }, n.isAlreadyRendering = function() {
    return !1;
  }, n.observeVisibleRects = function(i, s, u, d) {
    if (!wi) throw Error(a(363));
    i = df(i, s);
    var h = ue(i, u, d).disconnect;
    return { disconnect: function() {
      h();
    } };
  }, n.registerMutableSourceForHydration = function(i, s) {
    var u = s._getVersion;
    u = u(s._source), i.mutableSourceEagerHydrationData == null ? i.mutableSourceEagerHydrationData = [s, u] : i.mutableSourceEagerHydrationData.push(s, u);
  }, n.runWithPriority = function(i, s) {
    var u = Re;
    try {
      return Re = i, s();
    } finally {
      Re = u;
    }
  }, n.shouldError = function() {
    return null;
  }, n.shouldSuspend = function() {
    return !1;
  }, n.updateContainer = function(i, s, u, d) {
    var h = s.current, m = It(), P = Vr(h);
    return u = og(u), s.context === null ? s.context = u : s.pendingContext = u, s = pr(m, P), s.payload = { element: i }, d = d === void 0 ? null : d, d !== null && (s.callback = d), i = Gr(h, s, P), i !== null && (xn(i, h, P, m), na(i, h, P)), P;
  }, n;
};
iy.exports = tS;
var nS = iy.exports;
const rS = /* @__PURE__ */ Yu(nS);
var sy = { exports: {} }, os = {};
/**
 * @license React
 * react-reconciler-constants.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
os.ConcurrentRoot = 1;
os.ContinuousEventPriority = 4;
os.DefaultEventPriority = 16;
os.DiscreteEventPriority = 1;
os.IdleEventPriority = 536870912;
os.LegacyRoot = 0;
sy.exports = os;
var oy = sy.exports;
const Z2 = {
  children: !0,
  ref: !0,
  key: !0,
  style: !0,
  forwardedRef: !0,
  unstable_applyCache: !0,
  unstable_applyDrawHitFromCache: !0
};
let J2 = !1, b2 = !1;
const w1 = ".react-konva-event", iS = `ReactKonva: You have a Konva node with draggable = true and position defined but no onDragMove or onDragEnd events are handled.
Position of a node will be changed during drag&drop, so you should update state of the react app as well.
Consider to add onDragMove or onDragEnd events.
For more info see: https://github.com/konvajs/react-konva/issues/256
`, sS = `ReactKonva: You are using "zIndex" attribute for a Konva node.
react-konva may get confused with ordering. Just define correct order of elements in your render function of a component.
For more info see: https://github.com/konvajs/react-konva/issues/194
`, oS = {};
function ed(t, e, n = oS) {
  if (!J2 && "zIndex" in e && (console.warn(sS), J2 = !0), !b2 && e.draggable) {
    var r = e.x !== void 0 || e.y !== void 0, o = e.onDragEnd || e.onDragMove;
    r && !o && (console.warn(iS), b2 = !0);
  }
  for (var l in n)
    if (!Z2[l]) {
      var a = l.slice(0, 2) === "on", c = n[l] !== e[l];
      if (a && c) {
        var f = l.substr(2).toLowerCase();
        f.substr(0, 7) === "content" && (f = "content" + f.substr(7, 1).toUpperCase() + f.substr(8)), t.off(f, n[l]);
      }
      var g = !e.hasOwnProperty(l);
      g && t.setAttr(l, void 0);
    }
  var y = e._useStrictMode, C = {}, S = !1;
  const x = {};
  for (var l in e)
    if (!Z2[l]) {
      var a = l.slice(0, 2) === "on", v = n[l] !== e[l];
      if (a && v) {
        var f = l.substr(2).toLowerCase();
        f.substr(0, 7) === "content" && (f = "content" + f.substr(7, 1).toUpperCase() + f.substr(8)), e[l] && (x[f] = e[l]);
      }
      !a && (e[l] !== n[l] || y && e[l] !== t.getAttr(l)) && (S = !0, C[l] = e[l]);
    }
  S && (t.setAttrs(C), Si(t));
  for (var f in x)
    t.on(f + w1, x[f]);
}
function Si(t) {
  if (!Se.Konva.autoDrawEnabled) {
    var e = t.getLayer() || t.getStage();
    e && e.batchDraw();
  }
}
const ly = {}, lS = {};
Nl.Node.prototype._applyProps = ed;
function aS(t, e) {
  if (typeof e == "string") {
    console.error(`Do not use plain text as child of Konva.Node. You are using text: ${e}`);
    return;
  }
  t.add(e), Si(t);
}
function uS(t, e, n) {
  let r = Nl[t];
  r || (console.error(`Konva has no node with the type ${t}. Group will be used instead. If you use minimal version of react-konva, just import required nodes into Konva: "import "konva/lib/shapes/${t}"  If you want to render DOM elements as part of canvas tree take a look into this demo: https://konvajs.github.io/docs/react/DOM_Portal.html`), r = Nl.Group);
  const o = {}, l = {};
  for (var a in e) {
    var c = a.slice(0, 2) === "on";
    c ? l[a] = e[a] : o[a] = e[a];
  }
  const f = new r(o);
  return ed(f, l), f;
}
function cS(t, e, n) {
  console.error(`Text components are not supported for now in ReactKonva. Your text is: "${t}"`);
}
function dS(t, e, n) {
  return !1;
}
function fS(t) {
  return t;
}
function hS() {
  return null;
}
function pS() {
  return null;
}
function gS(t, e, n, r) {
  return lS;
}
function mS() {
}
function yS(t) {
}
function vS(t, e) {
  return !1;
}
function _S() {
  return ly;
}
function SS() {
  return ly;
}
const wS = setTimeout, xS = clearTimeout, CS = -1;
function kS(t, e) {
  return !1;
}
const ES = !1, PS = !0, TS = !0;
function NS(t, e) {
  e.parent === t ? e.moveToTop() : t.add(e), Si(t);
}
function RS(t, e) {
  e.parent === t ? e.moveToTop() : t.add(e), Si(t);
}
function ay(t, e, n) {
  e._remove(), t.add(e), e.setZIndex(n.getZIndex()), Si(t);
}
function FS(t, e, n) {
  ay(t, e, n);
}
function MS(t, e) {
  e.destroy(), e.off(w1), Si(t);
}
function LS(t, e) {
  e.destroy(), e.off(w1), Si(t);
}
function AS(t, e, n) {
  console.error(`Text components are not yet supported in ReactKonva. You text is: "${n}"`);
}
function OS(t, e, n) {
}
function DS(t, e, n, r, o) {
  ed(t, o, r);
}
function IS(t) {
  t.hide(), Si(t);
}
function zS(t) {
}
function GS(t, e) {
  (e.visible == null || e.visible) && t.show();
}
function US(t, e) {
}
function BS(t) {
}
function VS() {
}
const HS = () => oy.DefaultEventPriority, jS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  appendChild: NS,
  appendChildToContainer: RS,
  appendInitialChild: aS,
  cancelTimeout: xS,
  clearContainer: BS,
  commitMount: OS,
  commitTextUpdate: AS,
  commitUpdate: DS,
  createInstance: uS,
  createTextInstance: cS,
  detachDeletedInstance: VS,
  finalizeInitialChildren: dS,
  getChildHostContext: SS,
  getCurrentEventPriority: HS,
  getPublicInstance: fS,
  getRootHostContext: _S,
  hideInstance: IS,
  hideTextInstance: zS,
  idlePriority: Jo.unstable_IdlePriority,
  insertBefore: ay,
  insertInContainerBefore: FS,
  isPrimaryRenderer: ES,
  noTimeout: CS,
  now: Jo.unstable_now,
  prepareForCommit: hS,
  preparePortalMount: pS,
  prepareUpdate: gS,
  removeChild: MS,
  removeChildFromContainer: LS,
  resetAfterCommit: mS,
  resetTextContent: yS,
  run: Jo.unstable_runWithPriority,
  scheduleTimeout: wS,
  shouldDeprioritizeSubtree: vS,
  shouldSetTextContent: kS,
  supportsMutation: TS,
  unhideInstance: GS,
  unhideTextInstance: US,
  warnsIfNotActing: PS
}, Symbol.toStringTag, { value: "Module" }));
var WS = Object.defineProperty, KS = Object.defineProperties, YS = Object.getOwnPropertyDescriptors, em = Object.getOwnPropertySymbols, XS = Object.prototype.hasOwnProperty, QS = Object.prototype.propertyIsEnumerable, tm = (t, e, n) => e in t ? WS(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, nm = (t, e) => {
  for (var n in e || (e = {}))
    XS.call(e, n) && tm(t, n, e[n]);
  if (em)
    for (var n of em(e))
      QS.call(e, n) && tm(t, n, e[n]);
  return t;
}, $S = (t, e) => KS(t, YS(e)), rm, im;
typeof window < "u" && ((rm = window.document) != null && rm.createElement || ((im = window.navigator) == null ? void 0 : im.product) === "ReactNative") ? ae.useLayoutEffect : ae.useEffect;
function uy(t, e, n) {
  if (!t)
    return;
  if (n(t) === !0)
    return t;
  let r = t.child;
  for (; r; ) {
    const o = uy(r, e, n);
    if (o)
      return o;
    r = r.sibling;
  }
}
function cy(t) {
  try {
    return Object.defineProperties(t, {
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
    return t;
  }
}
const sm = console.error;
console.error = function() {
  const t = [...arguments].join("");
  if (t != null && t.startsWith("Warning:") && t.includes("useContext")) {
    console.error = sm;
    return;
  }
  return sm.apply(this, arguments);
};
const x1 = cy(ae.createContext(null));
class dy extends ae.Component {
  render() {
    return /* @__PURE__ */ ae.createElement(x1.Provider, {
      value: this._reactInternals
    }, this.props.children);
  }
}
function qS() {
  const t = ae.useContext(x1);
  if (t === null)
    throw new Error("its-fine: useFiber must be called within a <FiberProvider />!");
  const e = ae.useId();
  return ae.useMemo(() => {
    for (const r of [t, t == null ? void 0 : t.alternate]) {
      if (!r)
        continue;
      const o = uy(r, !1, (l) => {
        let a = l.memoizedState;
        for (; a; ) {
          if (a.memoizedState === e)
            return !0;
          a = a.next;
        }
      });
      if (o)
        return o;
    }
  }, [t, e]);
}
function ZS() {
  const t = qS(), [e] = ae.useState(() => /* @__PURE__ */ new Map());
  e.clear();
  let n = t;
  for (; n; ) {
    if (n.type && typeof n.type == "object") {
      const o = n.type._context === void 0 && n.type.Provider === n.type ? n.type : n.type._context;
      o && o !== x1 && !e.has(o) && e.set(o, ae.useContext(cy(o)));
    }
    n = n.return;
  }
  return e;
}
function JS() {
  const t = ZS();
  return ae.useMemo(
    () => Array.from(t.keys()).reduce(
      (e, n) => (r) => /* @__PURE__ */ ae.createElement(e, null, /* @__PURE__ */ ae.createElement(n.Provider, $S(nm({}, r), {
        value: t.get(n)
      }))),
      (e) => /* @__PURE__ */ ae.createElement(dy, nm({}, e))
    ),
    [t]
  );
}
function bS(t) {
  const e = Wt.useRef({});
  return Wt.useLayoutEffect(() => {
    e.current = t;
  }), Wt.useLayoutEffect(() => () => {
    e.current = {};
  }, []), e.current;
}
const ew = (t) => {
  const e = Wt.useRef(null), n = Wt.useRef(null), r = Wt.useRef(null), o = bS(t), l = JS(), a = (c) => {
    const { forwardedRef: f } = t;
    f && (typeof f == "function" ? f(c) : f.current = c);
  };
  return Wt.useLayoutEffect(() => (n.current = new Nl.Stage({
    width: t.width,
    height: t.height,
    container: e.current
  }), a(n.current), r.current = Zo.createContainer(n.current, oy.LegacyRoot, !1, null), Zo.updateContainer(Wt.createElement(l, {}, t.children), r.current), () => {
    Nl.isBrowser && (a(null), Zo.updateContainer(null, r.current, null), n.current.destroy());
  }), []), Wt.useLayoutEffect(() => {
    a(n.current), ed(n.current, t, o), Zo.updateContainer(Wt.createElement(l, {}, t.children), r.current, null);
  }), Wt.createElement("div", {
    ref: e,
    id: t.id,
    accessKey: t.accessKey,
    className: t.className,
    role: t.role,
    style: t.style,
    tabIndex: t.tabIndex,
    title: t.title
  });
}, om = "Layer", lm = "Group", d0 = "Rect", fy = "Circle", al = "Line", tw = "Image", nw = "Transformer", Zo = rS(jS);
Zo.injectIntoDevTools({
  // @ts-ignore
  findHostInstanceByFiber: () => null,
  bundleType: 0,
  version: Wt.version,
  rendererPackageName: "react-konva"
});
const rw = Wt.forwardRef((t, e) => Wt.createElement(dy, {}, Wt.createElement(ew, { ...t, forwardedRef: e })));
var Ii = ae, iw = function(e, n, r) {
  const o = Ii.useRef("loading"), l = Ii.useRef(), [a, c] = Ii.useState(0), f = Ii.useRef(), g = Ii.useRef(), y = Ii.useRef();
  return (f.current !== e || g.current !== n || y.current !== r) && (o.current = "loading", l.current = void 0, f.current = e, g.current = n, y.current = r), Ii.useLayoutEffect(
    function() {
      if (!e) return;
      var C = document.createElement("img");
      function S() {
        C.decode().catch(() => {
        }).finally(() => {
          o.current = "loaded", l.current = C, c(Math.random());
        });
      }
      function x() {
        o.current = "failed", l.current = void 0, c(Math.random());
      }
      return C.addEventListener("load", S), C.addEventListener("error", x), n && (C.crossOrigin = n), r && (C.referrerPolicy = r), C.src = e, function() {
        C.removeEventListener("load", S), C.removeEventListener("error", x);
      };
    },
    [e, n, r]
  ), [l.current, o.current];
};
const sw = /* @__PURE__ */ Yu(iw);
function hy(t = "") {
  return { version: "konva-1", background: t, objects: [] };
}
function Ko(t) {
  return JSON.parse(JSON.stringify(t));
}
function Rs() {
  return `obj_${Math.random().toString(36).slice(2, 10)}_${Date.now().toString(36)}`;
}
function ah(t) {
  return !t || !Array.isArray(t.objects) ? hy((t == null ? void 0 : t.background) ?? "") : {
    version: t.version || "konva-1",
    background: t.background ?? "",
    objects: t.objects.filter(Boolean)
  };
}
function Yo(t, e) {
  return {
    scale: 1,
    x: t / 2,
    y: e / 2,
    rotation: 0
  };
}
const ow = 0.25, lw = 8, tu = 1.15, am = 15;
function um(t) {
  if (!t) return null;
  const e = t.getPointerPosition();
  if (!e) return null;
  const n = t.getAbsoluteTransform().copy().invert(), r = t.findOne("#viewport-content");
  return r ? r.getAbsoluteTransform().copy().invert().point(e) : n.point(e);
}
const aw = ({
  fillColor: t,
  strokeWidth: e,
  strokeColor: n,
  backgroundColor: r,
  backgroundImageURL: o,
  realtimeUpdateStreamlit: l,
  canvasHeight: a,
  canvasWidth: c,
  drawingMode: f,
  initialDrawing: g,
  displayToolbar: y,
  displayRadius: C,
  enableViewportControls: S,
  setStateValue: x
}) => {
  const v = ae.useRef(null), E = ae.useRef(null), N = ae.useRef(null), k = ae.useRef(null), w = ae.useRef(null), p = ae.useRef(null), _ = ae.useRef(
    `${r}|${o ?? ""}`
  ), T = ae.useRef(!1), F = ae.useRef(null), [L, R] = ae.useState(
    () => ah(g)
  ), [G, M] = ae.useState([
    ah(g)
  ]), [B, j] = ae.useState(0), [I, Z] = ae.useState(null), [Q, pe] = ae.useState(null), [ye, H] = ae.useState(
    () => Yo(c, a)
  ), [$] = sw(o ?? "", "anonymous"), X = ae.useMemo(
    () => JSON.stringify((g == null ? void 0 : g.objects) ?? []),
    [g]
  );
  ae.useEffect(() => {
    H(Yo(c, a));
  }, [c, a]), ae.useEffect(() => {
    const ie = ah(g), J = `${r}|${o ?? ""}`, ue = _.current !== J;
    _.current = J, R((oe) => {
      if (!(ue || ie.objects.length > 0 || oe.objects.length === 0))
        return { ...oe, background: r };
      const Ci = {
        ...ie,
        background: r
      };
      return M([Ko(Ci)]), j(0), pe(null), Z(null), H(Yo(c, a)), Ci;
    });
  }, [
    X,
    r,
    o,
    g,
    c,
    a
  ]), ae.useEffect(() => {
    var oe, Xe;
    const ie = w.current, J = v.current;
    if (!ie || !J) return;
    if (f !== "transform" || !Q) {
      ie.nodes([]), p.current = null, (oe = ie.getLayer()) == null || oe.batchDraw();
      return;
    }
    const ue = J.findOne(`#${Q}`);
    ue && (p.current = ue, ie.nodes([ue]), (Xe = ie.getLayer()) == null || Xe.batchDraw());
  }, [Q, f, L.objects]);
  const q = ae.useCallback(
    (ie) => {
      M((J) => [...J.slice(0, B + 1), Ko(ie)]), j((J) => J + 1);
    },
    [B]
  ), re = ae.useCallback(
    (ie) => {
      const J = E.current, ue = N.current;
      !J || !ue || requestAnimationFrame(() => {
        const oe = {
          x: ue.x(),
          y: ue.y(),
          scaleX: ue.scaleX(),
          scaleY: ue.scaleY(),
          rotation: ue.rotation()
        }, Xe = Yo(c, a);
        ue.position({ x: Xe.x, y: Xe.y }), ue.scale({ x: Xe.scale, y: Xe.scale }), ue.rotation(Xe.rotation), J.batchDraw();
        const Ci = J.toDataURL({
          pixelRatio: 1,
          mimeType: "image/png",
          x: 0,
          y: 0,
          width: c,
          height: a
        });
        ue.position({ x: oe.x, y: oe.y }), ue.scale({ x: oe.scaleX, y: oe.scaleY }), ue.rotation(oe.rotation), J.batchDraw(), x("image_data_url", Ci), x("json_data", ie);
      });
    },
    [a, c, x]
  ), ve = ae.useCallback(
    (ie, J) => {
      const ue = Ko(ie);
      R(ue), q(ue), ((J == null ? void 0 : J.emit) ?? l) && re(ue);
    },
    [re, q, l]
  ), ft = ae.useCallback(() => {
    if (B <= 0) return;
    const ie = B - 1, J = Ko(G[ie]);
    j(ie), R(J), pe(null), l && re(J);
  }, [re, G, B, l]), ht = ae.useCallback(() => {
    if (B >= G.length - 1) return;
    const ie = B + 1, J = Ko(G[ie]);
    j(ie), R(J), pe(null), l && re(J);
  }, [re, G, B, l]), ze = ae.useCallback(() => {
    const ie = hy(r);
    ve(ie, { emit: !0 }), pe(null), Z(null);
  }, [r, ve]), A = ae.useCallback(() => {
    re(L);
  }, [re, L]), W = ae.useCallback(() => {
    H(Yo(c, a));
  }, [a, c]), le = ae.useCallback(
    (ie, J) => {
      H((ue) => {
        const oe = Math.min(
          lw,
          Math.max(ow, ue.scale * ie)
        );
        if (!J)
          return { ...ue, scale: oe };
        const Xe = N.current;
        if (!Xe)
          return { ...ue, scale: oe };
        const Bl = Xe.getAbsoluteTransform().copy().invert().point(J), id = c / 2, sd = a / 2, ls = Math.cos(ue.rotation * Math.PI / 180), as = Math.sin(ue.rotation * Math.PI / 180), us = Bl.x - id, ki = Bl.y - sd, od = ue.x + ue.scale * (ls * us - as * ki), ld = ue.y + ue.scale * (as * us + ls * ki), ad = od - oe * (ls * us - as * ki), ud = ld - oe * (as * us + ls * ki);
        return { ...ue, scale: oe, x: ad, y: ud };
      });
    },
    [a, c]
  ), Ne = ae.useCallback((ie) => {
    H((J) => ({
      ...J,
      rotation: J.rotation + ie
    }));
  }, []), de = ae.useCallback(
    (ie) => {
      ve({
        ...L,
        background: r,
        objects: [...L.objects, ie]
      });
    },
    [r, ve, L]
  ), De = ae.useCallback(
    (ie) => {
      if (!S) return;
      ie.evt.preventDefault();
      const J = v.current;
      if (!J) return;
      const ue = J.getPointerPosition();
      if (!ue) return;
      const oe = ie.evt.deltaY > 0 ? 1 / tu : tu;
      le(oe, ue);
    },
    [S, le]
  ), Ge = ae.useCallback(
    (ie) => {
      const J = v.current;
      if (S && (f === "pan" || ie.evt.button === 1 || ie.evt.altKey || ie.evt.buttons === 4)) {
        T.current = !0, F.current = { x: ie.evt.clientX, y: ie.evt.clientY };
        return;
      }
      const oe = um(J);
      if (oe) {
        if (f === "transform") {
          (ie.target === J || ie.target.id() === "viewport-content") && pe(null);
          return;
        }
        if (f !== "pan") {
          if (f === "point") {
            de({
              id: Rs(),
              type: "point",
              x: oe.x,
              y: oe.y,
              radius: C,
              fill: n,
              stroke: n,
              strokeWidth: 1
            });
            return;
          }
          if (f === "polygon") {
            Z((Xe) => (Xe == null ? void 0 : Xe.kind) === "polygon" ? { kind: "polygon", points: [...Xe.points, oe.x, oe.y] } : { kind: "polygon", points: [oe.x, oe.y] });
            return;
          }
          if (f === "freedraw") {
            Z({ kind: "freedraw", points: [oe.x, oe.y] });
            return;
          }
          if (f === "line") {
            Z({ kind: "line", x1: oe.x, y1: oe.y, x2: oe.x, y2: oe.y });
            return;
          }
          if (f === "rect") {
            Z({ kind: "rect", x: oe.x, y: oe.y, width: 0, height: 0 });
            return;
          }
          f === "circle" && Z({ kind: "circle", x: oe.x, y: oe.y, radius: 0 });
        }
      }
    },
    [
      de,
      C,
      f,
      S,
      n
    ]
  ), gn = ae.useCallback(
    (ie) => {
      if (T.current && F.current) {
        const ue = ie.evt.clientX - F.current.x, oe = ie.evt.clientY - F.current.y;
        F.current = { x: ie.evt.clientX, y: ie.evt.clientY }, H((Xe) => ({
          ...Xe,
          x: Xe.x + ue,
          y: Xe.y + oe
        }));
        return;
      }
      const J = um(v.current);
      if (!(!J || !I)) {
        if (I.kind === "freedraw") {
          Z({ kind: "freedraw", points: [...I.points, J.x, J.y] });
          return;
        }
        if (I.kind === "line") {
          Z({ ...I, x2: J.x, y2: J.y });
          return;
        }
        if (I.kind === "rect") {
          Z({
            ...I,
            width: J.x - I.x,
            height: J.y - I.y
          });
          return;
        }
        if (I.kind === "circle") {
          const ue = J.x - I.x, oe = J.y - I.y;
          Z({ ...I, radius: Math.sqrt(ue * ue + oe * oe) });
        }
      }
    },
    [I]
  ), Ae = ae.useCallback(() => {
    if (I) {
      if (I.kind === "freedraw" && I.points.length >= 4)
        de({
          id: Rs(),
          type: "freedraw",
          points: I.points,
          stroke: n,
          strokeWidth: e,
          fill: ""
        });
      else if (I.kind === "line")
        de({
          id: Rs(),
          type: "line",
          points: [I.x1, I.y1, I.x2, I.y2],
          stroke: n,
          strokeWidth: e
        });
      else if (I.kind === "rect") {
        const ie = Math.min(I.x, I.x + I.width), J = Math.min(I.y, I.y + I.height), ue = Math.abs(I.width), oe = Math.abs(I.height);
        ue > 1 && oe > 1 && de({
          id: Rs(),
          type: "rect",
          x: ie,
          y: J,
          width: ue,
          height: oe,
          stroke: n,
          strokeWidth: e,
          fill: t
        });
      } else I.kind === "circle" && I.radius > 1 && de({
        id: Rs(),
        type: "circle",
        x: I.x,
        y: I.y,
        radius: I.radius,
        stroke: n,
        strokeWidth: e,
        fill: t
      });
      I.kind !== "polygon" && Z(null);
    }
  }, [de, I, t, n, e]), Mn = ae.useCallback(() => {
    if (T.current) {
      T.current = !1, F.current = null;
      return;
    }
    f === "polygon" || f === "transform" || f === "pan" || Ae();
  }, [f, Ae]), on = ae.useCallback(
    (ie) => {
      if (ie.evt.preventDefault(), !(f !== "polygon" || (I == null ? void 0 : I.kind) !== "polygon")) {
        if (I.points.length < 6) {
          Z(null);
          return;
        }
        de({
          id: Rs(),
          type: "polygon",
          points: I.points,
          stroke: n,
          strokeWidth: e,
          fill: t
        }), Z(null);
      }
    },
    [de, I, f, t, n, e]
  ), Qn = ae.useCallback(() => {
    if (f === "polygon" && (I == null ? void 0 : I.kind) === "polygon") {
      I.points.length <= 2 ? Z(null) : Z({
        kind: "polygon",
        points: I.points.slice(0, -2)
      });
      return;
    }
    f === "transform" && Q && (ve({
      ...L,
      objects: L.objects.filter((ie) => ie.id !== Q)
    }), pe(null));
  }, [ve, I, f, L, Q]), td = ae.useCallback(
    (ie) => {
      f === "transform" && pe(ie);
    },
    [f]
  ), wi = ae.useCallback(
    (ie, J) => {
      const ue = L.objects.map((oe) => oe.id !== ie ? oe : {
        ...oe,
        x: J.x(),
        y: J.y(),
        rotation: J.rotation(),
        scaleX: J.scaleX(),
        scaleY: J.scaleY(),
        ...oe.type === "rect" ? {
          width: Math.max(1, (oe.width ?? 0) * J.scaleX()),
          height: Math.max(1, (oe.height ?? 0) * J.scaleY()),
          scaleX: 1,
          scaleY: 1
        } : {},
        ...oe.type === "circle" || oe.type === "point" ? {
          radius: Math.max(
            1,
            (oe.radius ?? 1) * Math.max(J.scaleX(), J.scaleY())
          ),
          scaleX: 1,
          scaleY: 1
        } : {}
      });
      (J.getClassName() === "Rect" || J.getClassName() === "Circle") && (J.scaleX(1), J.scaleY(1)), ve({ ...L, objects: ue });
    },
    [ve, L]
  ), nd = ae.useCallback(
    (ie, J) => {
      const ue = L.objects.map(
        (oe) => oe.id === ie ? { ...oe, x: J.x(), y: J.y() } : oe
      );
      ve({ ...L, objects: ue });
    },
    [ve, L]
  ), rd = {
    background: r || "transparent",
    border: "1px solid var(--st-gray-color, #ddd)",
    display: "block",
    cursor: f === "pan" || T.current ? "grab" : "crosshair"
  }, Ul = {
    id: "viewport-content",
    x: ye.x,
    y: ye.y,
    scaleX: ye.scale,
    scaleY: ye.scale,
    rotation: ye.rotation,
    offsetX: c / 2,
    offsetY: a / 2
  }, xi = Math.round(ye.scale * 100);
  return /* @__PURE__ */ Ee.jsxs(
    "div",
    {
      style: { fontFamily: "var(--st-font, sans-serif)", width: c },
      children: [
        y && /* @__PURE__ */ Ee.jsxs(
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
              /* @__PURE__ */ Ee.jsx("button", { type: "button", onClick: ft, disabled: B <= 0, children: "Undo" }),
              /* @__PURE__ */ Ee.jsx(
                "button",
                {
                  type: "button",
                  onClick: ht,
                  disabled: B >= G.length - 1,
                  children: "Redo"
                }
              ),
              /* @__PURE__ */ Ee.jsx("button", { type: "button", onClick: ze, children: "Clear" }),
              !l && /* @__PURE__ */ Ee.jsx("button", { type: "button", onClick: A, children: "Send to Streamlit" }),
              S && /* @__PURE__ */ Ee.jsxs(Ee.Fragment, { children: [
                /* @__PURE__ */ Ee.jsx("button", { type: "button", onClick: () => le(tu), children: "Zoom +" }),
                /* @__PURE__ */ Ee.jsx("button", { type: "button", onClick: () => le(1 / tu), children: "Zoom −" }),
                /* @__PURE__ */ Ee.jsx("button", { type: "button", onClick: () => Ne(-am), children: "Tilt ↶" }),
                /* @__PURE__ */ Ee.jsx("button", { type: "button", onClick: () => Ne(am), children: "Tilt ↷" }),
                /* @__PURE__ */ Ee.jsx("button", { type: "button", onClick: W, children: "Reset view" }),
                /* @__PURE__ */ Ee.jsxs("span", { style: { fontSize: 12, opacity: 0.75 }, children: [
                  xi,
                  "% · ",
                  Math.round(ye.rotation),
                  "°"
                ] })
              ] }),
              /* @__PURE__ */ Ee.jsxs("span", { style: { marginLeft: "auto", fontSize: 12, opacity: 0.7 }, children: [
                "mode: ",
                f
              ] })
            ]
          }
        ),
        /* @__PURE__ */ Ee.jsxs(
          rw,
          {
            width: c,
            height: a,
            ref: v,
            style: rd,
            onMouseDown: Ge,
            onMousemove: gn,
            onMouseup: Mn,
            onMouseLeave: Mn,
            onContextMenu: on,
            onDblClick: Qn,
            onWheel: De,
            children: [
              /* @__PURE__ */ Ee.jsx(om, { listening: !1, children: /* @__PURE__ */ Ee.jsx(lm, { ref: k, ...Ul, id: "viewport-bg", children: $ && /* @__PURE__ */ Ee.jsx(
                tw,
                {
                  image: $,
                  width: c,
                  height: a,
                  listening: !1
                }
              ) }) }),
              /* @__PURE__ */ Ee.jsx(om, { ref: E, children: /* @__PURE__ */ Ee.jsxs(lm, { ref: N, ...Ul, children: [
                !$ && !!r && /* @__PURE__ */ Ee.jsx(
                  d0,
                  {
                    x: 0,
                    y: 0,
                    width: c,
                    height: a,
                    fill: r,
                    listening: !1
                  }
                ),
                L.objects.map((ie) => /* @__PURE__ */ Ee.jsx(
                  uw,
                  {
                    obj: ie,
                    draggable: f === "transform",
                    onSelect: () => td(ie.id),
                    onDragEnd: (J) => nd(ie.id, J),
                    onTransformEnd: (J) => wi(ie.id, J)
                  },
                  ie.id
                )),
                (I == null ? void 0 : I.kind) === "freedraw" && /* @__PURE__ */ Ee.jsx(
                  al,
                  {
                    points: I.points,
                    stroke: n,
                    strokeWidth: e,
                    tension: 0.5,
                    lineCap: "round",
                    lineJoin: "round",
                    listening: !1
                  }
                ),
                (I == null ? void 0 : I.kind) === "line" && /* @__PURE__ */ Ee.jsx(
                  al,
                  {
                    points: [I.x1, I.y1, I.x2, I.y2],
                    stroke: n,
                    strokeWidth: e,
                    listening: !1
                  }
                ),
                (I == null ? void 0 : I.kind) === "rect" && /* @__PURE__ */ Ee.jsx(
                  d0,
                  {
                    x: Math.min(I.x, I.x + I.width),
                    y: Math.min(I.y, I.y + I.height),
                    width: Math.abs(I.width),
                    height: Math.abs(I.height),
                    stroke: n,
                    strokeWidth: e,
                    fill: t,
                    listening: !1
                  }
                ),
                (I == null ? void 0 : I.kind) === "circle" && /* @__PURE__ */ Ee.jsx(
                  fy,
                  {
                    x: I.x,
                    y: I.y,
                    radius: I.radius,
                    stroke: n,
                    strokeWidth: e,
                    fill: t,
                    listening: !1
                  }
                ),
                (I == null ? void 0 : I.kind) === "polygon" && I.points.length >= 2 && /* @__PURE__ */ Ee.jsx(
                  al,
                  {
                    points: I.points,
                    stroke: n,
                    strokeWidth: e,
                    fill: t,
                    closed: !1,
                    listening: !1
                  }
                ),
                f === "transform" && /* @__PURE__ */ Ee.jsx(
                  nw,
                  {
                    ref: w,
                    rotateEnabled: !0,
                    enabledAnchors: [
                      "top-left",
                      "top-right",
                      "bottom-left",
                      "bottom-right"
                    ]
                  }
                )
              ] }) })
            ]
          }
        )
      ]
    }
  );
}, uw = ({
  obj: t,
  draggable: e,
  onSelect: n,
  onDragEnd: r,
  onTransformEnd: o
}) => {
  const l = {
    id: t.id,
    draggable: e,
    rotation: t.rotation ?? 0,
    scaleX: t.scaleX ?? 1,
    scaleY: t.scaleY ?? 1,
    onClick: n,
    onTap: n,
    onDragEnd: (a) => r(a.target),
    onTransformEnd: (a) => o(a.target)
  };
  return t.type === "rect" ? /* @__PURE__ */ Ee.jsx(
    d0,
    {
      ...l,
      x: t.x ?? 0,
      y: t.y ?? 0,
      width: t.width ?? 0,
      height: t.height ?? 0,
      stroke: t.stroke,
      strokeWidth: t.strokeWidth,
      fill: t.fill
    }
  ) : t.type === "circle" || t.type === "point" ? /* @__PURE__ */ Ee.jsx(
    fy,
    {
      ...l,
      x: t.x ?? 0,
      y: t.y ?? 0,
      radius: t.radius ?? 3,
      stroke: t.stroke,
      strokeWidth: t.strokeWidth,
      fill: t.fill
    }
  ) : t.type === "line" || t.type === "freedraw" ? /* @__PURE__ */ Ee.jsx(
    al,
    {
      ...l,
      x: t.x ?? 0,
      y: t.y ?? 0,
      points: t.points ?? [],
      stroke: t.stroke,
      strokeWidth: t.strokeWidth,
      tension: t.type === "freedraw" ? 0.5 : 0,
      lineCap: "round",
      lineJoin: "round"
    }
  ) : t.type === "polygon" ? /* @__PURE__ */ Ee.jsx(
    al,
    {
      ...l,
      x: t.x ?? 0,
      y: t.y ?? 0,
      points: t.points ?? [],
      stroke: t.stroke,
      strokeWidth: t.strokeWidth,
      fill: t.fill,
      closed: !0
    }
  ) : null;
}, nu = /* @__PURE__ */ new WeakMap(), mw = (t) => {
  const { data: e, parentElement: n, setStateValue: r } = t, o = n.querySelector(".react-root");
  if (!o)
    throw new Error("Unexpected: React root element not found");
  let l = nu.get(n);
  return l || (l = x4(o), nu.set(n, l)), l.render(
    /* @__PURE__ */ Ee.jsx(ae.StrictMode, { children: /* @__PURE__ */ Ee.jsx(
      aw,
      {
        fillColor: e.fillColor ?? "#eee",
        strokeWidth: e.strokeWidth ?? 20,
        strokeColor: e.strokeColor ?? "black",
        backgroundColor: e.backgroundColor ?? "",
        backgroundImageURL: e.backgroundImageURL ?? null,
        realtimeUpdateStreamlit: e.realtimeUpdateStreamlit ?? !0,
        canvasHeight: e.canvasHeight ?? 400,
        canvasWidth: e.canvasWidth ?? 600,
        drawingMode: e.drawingMode ?? "freedraw",
        initialDrawing: e.initialDrawing,
        displayToolbar: e.displayToolbar ?? !0,
        displayRadius: e.displayRadius ?? 3,
        enableViewportControls: e.enableViewportControls ?? !0,
        setStateValue: r
      }
    ) })
  ), () => {
    const a = nu.get(n);
    a && (a.unmount(), nu.delete(n));
  };
};
export {
  mw as default
};
