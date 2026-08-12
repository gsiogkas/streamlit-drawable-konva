var hg = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Zu(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var hm = { exports: {} }, Ju = {}, pm = { exports: {} }, Ee = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Al = Symbol.for("react.element"), R5 = Symbol.for("react.portal"), F5 = Symbol.for("react.fragment"), M5 = Symbol.for("react.strict_mode"), L5 = Symbol.for("react.profiler"), A5 = Symbol.for("react.provider"), O5 = Symbol.for("react.context"), D5 = Symbol.for("react.forward_ref"), I5 = Symbol.for("react.suspense"), z5 = Symbol.for("react.memo"), G5 = Symbol.for("react.lazy"), pg = Symbol.iterator;
function U5(t) {
  return t === null || typeof t != "object" ? null : (t = pg && t[pg] || t["@@iterator"], typeof t == "function" ? t : null);
}
var gm = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, mm = Object.assign, ym = {};
function ao(t, e, n) {
  this.props = t, this.context = e, this.refs = ym, this.updater = n || gm;
}
ao.prototype.isReactComponent = {};
ao.prototype.setState = function(t, e) {
  if (typeof t != "object" && typeof t != "function" && t != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, t, e, "setState");
};
ao.prototype.forceUpdate = function(t) {
  this.updater.enqueueForceUpdate(this, t, "forceUpdate");
};
function vm() {
}
vm.prototype = ao.prototype;
function y0(t, e, n) {
  this.props = t, this.context = e, this.refs = ym, this.updater = n || gm;
}
var v0 = y0.prototype = new vm();
v0.constructor = y0;
mm(v0, ao.prototype);
v0.isPureReactComponent = !0;
var gg = Array.isArray, _m = Object.prototype.hasOwnProperty, _0 = { current: null }, Sm = { key: !0, ref: !0, __self: !0, __source: !0 };
function wm(t, e, n) {
  var r, o = {}, l = null, a = null;
  if (e != null) for (r in e.ref !== void 0 && (a = e.ref), e.key !== void 0 && (l = "" + e.key), e) _m.call(e, r) && !Sm.hasOwnProperty(r) && (o[r] = e[r]);
  var c = arguments.length - 2;
  if (c === 1) o.children = n;
  else if (1 < c) {
    for (var d = Array(c), g = 0; g < c; g++) d[g] = arguments[g + 2];
    o.children = d;
  }
  if (t && t.defaultProps) for (r in c = t.defaultProps, c) o[r] === void 0 && (o[r] = c[r]);
  return { $$typeof: Al, type: t, key: l, ref: a, props: o, _owner: _0.current };
}
function B5(t, e) {
  return { $$typeof: Al, type: t.type, key: e, ref: t.ref, props: t.props, _owner: t._owner };
}
function S0(t) {
  return typeof t == "object" && t !== null && t.$$typeof === Al;
}
function V5(t) {
  var e = { "=": "=0", ":": "=2" };
  return "$" + t.replace(/[=:]/g, function(n) {
    return e[n];
  });
}
var mg = /\/+/g;
function Ff(t, e) {
  return typeof t == "object" && t !== null && t.key != null ? V5("" + t.key) : e.toString(36);
}
function uu(t, e, n, r, o) {
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
        case Al:
        case R5:
          a = !0;
      }
  }
  if (a) return a = t, o = o(a), t = r === "" ? "." + Ff(a, 0) : r, gg(o) ? (n = "", t != null && (n = t.replace(mg, "$&/") + "/"), uu(o, e, n, "", function(g) {
    return g;
  })) : o != null && (S0(o) && (o = B5(o, n + (!o.key || a && a.key === o.key ? "" : ("" + o.key).replace(mg, "$&/") + "/") + t)), e.push(o)), 1;
  if (a = 0, r = r === "" ? "." : r + ":", gg(t)) for (var c = 0; c < t.length; c++) {
    l = t[c];
    var d = r + Ff(l, c);
    a += uu(l, e, n, d, o);
  }
  else if (d = U5(t), typeof d == "function") for (t = d.call(t), c = 0; !(l = t.next()).done; ) l = l.value, d = r + Ff(l, c++), a += uu(l, e, n, d, o);
  else if (l === "object") throw e = String(t), Error("Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead.");
  return a;
}
function Ga(t, e, n) {
  if (t == null) return t;
  var r = [], o = 0;
  return uu(t, r, "", "", function(l) {
    return e.call(n, l, o++);
  }), r;
}
function j5(t) {
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
var Yt = { current: null }, cu = { transition: null }, H5 = { ReactCurrentDispatcher: Yt, ReactCurrentBatchConfig: cu, ReactCurrentOwner: _0 };
function xm() {
  throw Error("act(...) is not supported in production builds of React.");
}
Ee.Children = { map: Ga, forEach: function(t, e, n) {
  Ga(t, function() {
    e.apply(this, arguments);
  }, n);
}, count: function(t) {
  var e = 0;
  return Ga(t, function() {
    e++;
  }), e;
}, toArray: function(t) {
  return Ga(t, function(e) {
    return e;
  }) || [];
}, only: function(t) {
  if (!S0(t)) throw Error("React.Children.only expected to receive a single React element child.");
  return t;
} };
Ee.Component = ao;
Ee.Fragment = F5;
Ee.Profiler = L5;
Ee.PureComponent = y0;
Ee.StrictMode = M5;
Ee.Suspense = I5;
Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = H5;
Ee.act = xm;
Ee.cloneElement = function(t, e, n) {
  if (t == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + t + ".");
  var r = mm({}, t.props), o = t.key, l = t.ref, a = t._owner;
  if (e != null) {
    if (e.ref !== void 0 && (l = e.ref, a = _0.current), e.key !== void 0 && (o = "" + e.key), t.type && t.type.defaultProps) var c = t.type.defaultProps;
    for (d in e) _m.call(e, d) && !Sm.hasOwnProperty(d) && (r[d] = e[d] === void 0 && c !== void 0 ? c[d] : e[d]);
  }
  var d = arguments.length - 2;
  if (d === 1) r.children = n;
  else if (1 < d) {
    c = Array(d);
    for (var g = 0; g < d; g++) c[g] = arguments[g + 2];
    r.children = c;
  }
  return { $$typeof: Al, type: t.type, key: o, ref: l, props: r, _owner: a };
};
Ee.createContext = function(t) {
  return t = { $$typeof: O5, _currentValue: t, _currentValue2: t, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, t.Provider = { $$typeof: A5, _context: t }, t.Consumer = t;
};
Ee.createElement = wm;
Ee.createFactory = function(t) {
  var e = wm.bind(null, t);
  return e.type = t, e;
};
Ee.createRef = function() {
  return { current: null };
};
Ee.forwardRef = function(t) {
  return { $$typeof: D5, render: t };
};
Ee.isValidElement = S0;
Ee.lazy = function(t) {
  return { $$typeof: G5, _payload: { _status: -1, _result: t }, _init: j5 };
};
Ee.memo = function(t, e) {
  return { $$typeof: z5, type: t, compare: e === void 0 ? null : e };
};
Ee.startTransition = function(t) {
  var e = cu.transition;
  cu.transition = {};
  try {
    t();
  } finally {
    cu.transition = e;
  }
};
Ee.unstable_act = xm;
Ee.useCallback = function(t, e) {
  return Yt.current.useCallback(t, e);
};
Ee.useContext = function(t) {
  return Yt.current.useContext(t);
};
Ee.useDebugValue = function() {
};
Ee.useDeferredValue = function(t) {
  return Yt.current.useDeferredValue(t);
};
Ee.useEffect = function(t, e) {
  return Yt.current.useEffect(t, e);
};
Ee.useId = function() {
  return Yt.current.useId();
};
Ee.useImperativeHandle = function(t, e, n) {
  return Yt.current.useImperativeHandle(t, e, n);
};
Ee.useInsertionEffect = function(t, e) {
  return Yt.current.useInsertionEffect(t, e);
};
Ee.useLayoutEffect = function(t, e) {
  return Yt.current.useLayoutEffect(t, e);
};
Ee.useMemo = function(t, e) {
  return Yt.current.useMemo(t, e);
};
Ee.useReducer = function(t, e, n) {
  return Yt.current.useReducer(t, e, n);
};
Ee.useRef = function(t) {
  return Yt.current.useRef(t);
};
Ee.useState = function(t) {
  return Yt.current.useState(t);
};
Ee.useSyncExternalStore = function(t, e, n) {
  return Yt.current.useSyncExternalStore(t, e, n);
};
Ee.useTransition = function() {
  return Yt.current.useTransition();
};
Ee.version = "18.3.1";
pm.exports = Ee;
var le = pm.exports;
const Wt = /* @__PURE__ */ Zu(le);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var W5 = le, K5 = Symbol.for("react.element"), Y5 = Symbol.for("react.fragment"), X5 = Object.prototype.hasOwnProperty, $5 = W5.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Q5 = { key: !0, ref: !0, __self: !0, __source: !0 };
function Cm(t, e, n) {
  var r, o = {}, l = null, a = null;
  n !== void 0 && (l = "" + n), e.key !== void 0 && (l = "" + e.key), e.ref !== void 0 && (a = e.ref);
  for (r in e) X5.call(e, r) && !Q5.hasOwnProperty(r) && (o[r] = e[r]);
  if (t && t.defaultProps) for (r in e = t.defaultProps, e) o[r] === void 0 && (o[r] = e[r]);
  return { $$typeof: K5, type: t, key: l, ref: a, props: o, _owner: $5.current };
}
Ju.Fragment = Y5;
Ju.jsx = Cm;
Ju.jsxs = Cm;
hm.exports = Ju;
var ve = hm.exports, km = { exports: {} }, gn = {}, Em = { exports: {} }, Pm = {};
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
  function e(j, Q) {
    var X = j.length;
    j.push(Q);
    e: for (; 0 < X; ) {
      var q = X - 1 >>> 1, se = j[q];
      if (0 < o(se, Q)) j[q] = Q, j[X] = se, X = q;
      else break e;
    }
  }
  function n(j) {
    return j.length === 0 ? null : j[0];
  }
  function r(j) {
    if (j.length === 0) return null;
    var Q = j[0], X = j.pop();
    if (X !== Q) {
      j[0] = X;
      e: for (var q = 0, se = j.length, ge = se >>> 1; q < ge; ) {
        var ft = 2 * (q + 1) - 1, ht = j[ft], Ue = ft + 1, A = j[Ue];
        if (0 > o(ht, X)) Ue < se && 0 > o(A, ht) ? (j[q] = A, j[Ue] = X, q = Ue) : (j[q] = ht, j[ft] = X, q = ft);
        else if (Ue < se && 0 > o(A, X)) j[q] = A, j[Ue] = X, q = Ue;
        else break e;
      }
    }
    return Q;
  }
  function o(j, Q) {
    var X = j.sortIndex - Q.sortIndex;
    return X !== 0 ? X : j.id - Q.id;
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
  var d = [], g = [], y = 1, C = null, S = 3, x = !1, v = !1, E = !1, N = typeof setTimeout == "function" ? setTimeout : null, k = typeof clearTimeout == "function" ? clearTimeout : null, w = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(j) {
    for (var Q = n(g); Q !== null; ) {
      if (Q.callback === null) r(g);
      else if (Q.startTime <= j) r(g), Q.sortIndex = Q.expirationTime, e(d, Q);
      else break;
      Q = n(g);
    }
  }
  function _(j) {
    if (E = !1, p(j), !v) if (n(d) !== null) v = !0, he(T);
    else {
      var Q = n(g);
      Q !== null && _e(_, Q.startTime - j);
    }
  }
  function T(j, Q) {
    v = !1, E && (E = !1, k(R), R = -1), x = !0;
    var X = S;
    try {
      for (p(Q), C = n(d); C !== null && (!(C.expirationTime > Q) || j && !B()); ) {
        var q = C.callback;
        if (typeof q == "function") {
          C.callback = null, S = C.priorityLevel;
          var se = q(C.expirationTime <= Q);
          Q = t.unstable_now(), typeof se == "function" ? C.callback = se : C === n(d) && r(d), p(Q);
        } else r(d);
        C = n(d);
      }
      if (C !== null) var ge = !0;
      else {
        var ft = n(g);
        ft !== null && _e(_, ft.startTime - Q), ge = !1;
      }
      return ge;
    } finally {
      C = null, S = X, x = !1;
    }
  }
  var F = !1, M = null, R = -1, G = 5, L = -1;
  function B() {
    return !(t.unstable_now() - L < G);
  }
  function H() {
    if (M !== null) {
      var j = t.unstable_now();
      L = j;
      var Q = !0;
      try {
        Q = M(!0, j);
      } finally {
        Q ? I() : (F = !1, M = null);
      }
    } else F = !1;
  }
  var I;
  if (typeof w == "function") I = function() {
    w(H);
  };
  else if (typeof MessageChannel < "u") {
    var J = new MessageChannel(), $ = J.port2;
    J.port1.onmessage = H, I = function() {
      $.postMessage(null);
    };
  } else I = function() {
    N(H, 0);
  };
  function he(j) {
    M = j, F || (F = !0, I());
  }
  function _e(j, Q) {
    R = N(function() {
      j(t.unstable_now());
    }, Q);
  }
  t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(j) {
    j.callback = null;
  }, t.unstable_continueExecution = function() {
    v || x || (v = !0, he(T));
  }, t.unstable_forceFrameRate = function(j) {
    0 > j || 125 < j ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : G = 0 < j ? Math.floor(1e3 / j) : 5;
  }, t.unstable_getCurrentPriorityLevel = function() {
    return S;
  }, t.unstable_getFirstCallbackNode = function() {
    return n(d);
  }, t.unstable_next = function(j) {
    switch (S) {
      case 1:
      case 2:
      case 3:
        var Q = 3;
        break;
      default:
        Q = S;
    }
    var X = S;
    S = Q;
    try {
      return j();
    } finally {
      S = X;
    }
  }, t.unstable_pauseExecution = function() {
  }, t.unstable_requestPaint = function() {
  }, t.unstable_runWithPriority = function(j, Q) {
    switch (j) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        j = 3;
    }
    var X = S;
    S = j;
    try {
      return Q();
    } finally {
      S = X;
    }
  }, t.unstable_scheduleCallback = function(j, Q, X) {
    var q = t.unstable_now();
    switch (typeof X == "object" && X !== null ? (X = X.delay, X = typeof X == "number" && 0 < X ? q + X : q) : X = q, j) {
      case 1:
        var se = -1;
        break;
      case 2:
        se = 250;
        break;
      case 5:
        se = 1073741823;
        break;
      case 4:
        se = 1e4;
        break;
      default:
        se = 5e3;
    }
    return se = X + se, j = { id: y++, callback: Q, priorityLevel: j, startTime: X, expirationTime: se, sortIndex: -1 }, X > q ? (j.sortIndex = X, e(g, j), n(d) === null && j === n(g) && (E ? (k(R), R = -1) : E = !0, _e(_, X - q))) : (j.sortIndex = se, e(d, j), v || x || (v = !0, he(T))), j;
  }, t.unstable_shouldYield = B, t.unstable_wrapCallback = function(j) {
    var Q = S;
    return function() {
      var X = S;
      S = Q;
      try {
        return j.apply(this, arguments);
      } finally {
        S = X;
      }
    };
  };
})(Pm);
Em.exports = Pm;
var nl = Em.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var q5 = le, pn = nl;
function K(t) {
  for (var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, n = 1; n < arguments.length; n++) e += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Tm = /* @__PURE__ */ new Set(), hl = {};
function ts(t, e) {
  Zs(t, e), Zs(t + "Capture", e);
}
function Zs(t, e) {
  for (hl[t] = e, t = 0; t < e.length; t++) Tm.add(e[t]);
}
var Fr = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), gh = Object.prototype.hasOwnProperty, b5 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, yg = {}, vg = {};
function Z5(t) {
  return gh.call(vg, t) ? !0 : gh.call(yg, t) ? !1 : b5.test(t) ? vg[t] = !0 : (yg[t] = !0, !1);
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
function ev(t, e, n, r) {
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
var w0 = /[\-:]([a-z])/g;
function x0(t) {
  return t[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t) {
  var e = t.replace(
    w0,
    x0
  );
  Mt[e] = new Xt(e, 1, !1, t, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t) {
  var e = t.replace(w0, x0);
  Mt[e] = new Xt(e, 1, !1, t, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(t) {
  var e = t.replace(w0, x0);
  Mt[e] = new Xt(e, 1, !1, t, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(t) {
  Mt[t] = new Xt(t, 1, !1, t.toLowerCase(), null, !1, !1);
});
Mt.xlinkHref = new Xt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(t) {
  Mt[t] = new Xt(t, 1, !1, t.toLowerCase(), null, !0, !0);
});
function C0(t, e, n, r) {
  var o = Mt.hasOwnProperty(e) ? Mt[e] : null;
  (o !== null ? o.type !== 0 : r || !(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N") && (ev(e, n, o, r) && (n = null), r || o === null ? Z5(e) && (n === null ? t.removeAttribute(e) : t.setAttribute(e, "" + n)) : o.mustUseProperty ? t[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (e = o.attributeName, r = o.attributeNamespace, n === null ? t.removeAttribute(e) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? t.setAttributeNS(r, e, n) : t.setAttribute(e, n))));
}
var Or = q5.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Ua = Symbol.for("react.element"), Os = Symbol.for("react.portal"), Ds = Symbol.for("react.fragment"), k0 = Symbol.for("react.strict_mode"), mh = Symbol.for("react.profiler"), Nm = Symbol.for("react.provider"), Rm = Symbol.for("react.context"), E0 = Symbol.for("react.forward_ref"), yh = Symbol.for("react.suspense"), vh = Symbol.for("react.suspense_list"), P0 = Symbol.for("react.memo"), Jr = Symbol.for("react.lazy"), Fm = Symbol.for("react.offscreen"), _g = Symbol.iterator;
function Go(t) {
  return t === null || typeof t != "object" ? null : (t = _g && t[_g] || t["@@iterator"], typeof t == "function" ? t : null);
}
var nt = Object.assign, Mf;
function bo(t) {
  if (Mf === void 0) try {
    throw Error();
  } catch (n) {
    var e = n.stack.trim().match(/\n( *(at )?)/);
    Mf = e && e[1] || "";
  }
  return `
` + Mf + t;
}
var Lf = !1;
function Af(t, e) {
  if (!t || Lf) return "";
  Lf = !0;
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
              var d = `
` + o[a].replace(" at new ", " at ");
              return t.displayName && d.includes("<anonymous>") && (d = d.replace("<anonymous>", t.displayName)), d;
            }
          while (1 <= a && 0 <= c);
        break;
      }
    }
  } finally {
    Lf = !1, Error.prepareStackTrace = n;
  }
  return (t = t ? t.displayName || t.name : "") ? bo(t) : "";
}
function tv(t) {
  switch (t.tag) {
    case 5:
      return bo(t.type);
    case 16:
      return bo("Lazy");
    case 13:
      return bo("Suspense");
    case 19:
      return bo("SuspenseList");
    case 0:
    case 2:
    case 15:
      return t = Af(t.type, !1), t;
    case 11:
      return t = Af(t.type.render, !1), t;
    case 1:
      return t = Af(t.type, !0), t;
    default:
      return "";
  }
}
function _h(t) {
  if (t == null) return null;
  if (typeof t == "function") return t.displayName || t.name || null;
  if (typeof t == "string") return t;
  switch (t) {
    case Ds:
      return "Fragment";
    case Os:
      return "Portal";
    case mh:
      return "Profiler";
    case k0:
      return "StrictMode";
    case yh:
      return "Suspense";
    case vh:
      return "SuspenseList";
  }
  if (typeof t == "object") switch (t.$$typeof) {
    case Rm:
      return (t.displayName || "Context") + ".Consumer";
    case Nm:
      return (t._context.displayName || "Context") + ".Provider";
    case E0:
      var e = t.render;
      return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
    case P0:
      return e = t.displayName || null, e !== null ? e : _h(t.type) || "Memo";
    case Jr:
      e = t._payload, t = t._init;
      try {
        return _h(t(e));
      } catch {
      }
  }
  return null;
}
function nv(t) {
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
      return _h(e);
    case 8:
      return e === k0 ? "StrictMode" : "Mode";
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
function hi(t) {
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
function Mm(t) {
  var e = t.type;
  return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
}
function rv(t) {
  var e = Mm(t) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e), r = "" + t[e];
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
function Ba(t) {
  t._valueTracker || (t._valueTracker = rv(t));
}
function Lm(t) {
  if (!t) return !1;
  var e = t._valueTracker;
  if (!e) return !0;
  var n = e.getValue(), r = "";
  return t && (r = Mm(t) ? t.checked ? "true" : "false" : t.value), t = r, t !== n ? (e.setValue(t), !0) : !1;
}
function Cu(t) {
  if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
  try {
    return t.activeElement || t.body;
  } catch {
    return t.body;
  }
}
function Sh(t, e) {
  var n = e.checked;
  return nt({}, e, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? t._wrapperState.initialChecked });
}
function Sg(t, e) {
  var n = e.defaultValue == null ? "" : e.defaultValue, r = e.checked != null ? e.checked : e.defaultChecked;
  n = hi(e.value != null ? e.value : n), t._wrapperState = { initialChecked: r, initialValue: n, controlled: e.type === "checkbox" || e.type === "radio" ? e.checked != null : e.value != null };
}
function Am(t, e) {
  e = e.checked, e != null && C0(t, "checked", e, !1);
}
function wh(t, e) {
  Am(t, e);
  var n = hi(e.value), r = e.type;
  if (n != null) r === "number" ? (n === 0 && t.value === "" || t.value != n) && (t.value = "" + n) : t.value !== "" + n && (t.value = "" + n);
  else if (r === "submit" || r === "reset") {
    t.removeAttribute("value");
    return;
  }
  e.hasOwnProperty("value") ? xh(t, e.type, n) : e.hasOwnProperty("defaultValue") && xh(t, e.type, hi(e.defaultValue)), e.checked == null && e.defaultChecked != null && (t.defaultChecked = !!e.defaultChecked);
}
function wg(t, e, n) {
  if (e.hasOwnProperty("value") || e.hasOwnProperty("defaultValue")) {
    var r = e.type;
    if (!(r !== "submit" && r !== "reset" || e.value !== void 0 && e.value !== null)) return;
    e = "" + t._wrapperState.initialValue, n || e === t.value || (t.value = e), t.defaultValue = e;
  }
  n = t.name, n !== "" && (t.name = ""), t.defaultChecked = !!t._wrapperState.initialChecked, n !== "" && (t.name = n);
}
function xh(t, e, n) {
  (e !== "number" || Cu(t.ownerDocument) !== t) && (n == null ? t.defaultValue = "" + t._wrapperState.initialValue : t.defaultValue !== "" + n && (t.defaultValue = "" + n));
}
var Zo = Array.isArray;
function Ys(t, e, n, r) {
  if (t = t.options, e) {
    e = {};
    for (var o = 0; o < n.length; o++) e["$" + n[o]] = !0;
    for (n = 0; n < t.length; n++) o = e.hasOwnProperty("$" + t[n].value), t[n].selected !== o && (t[n].selected = o), o && r && (t[n].defaultSelected = !0);
  } else {
    for (n = "" + hi(n), e = null, o = 0; o < t.length; o++) {
      if (t[o].value === n) {
        t[o].selected = !0, r && (t[o].defaultSelected = !0);
        return;
      }
      e !== null || t[o].disabled || (e = t[o]);
    }
    e !== null && (e.selected = !0);
  }
}
function Ch(t, e) {
  if (e.dangerouslySetInnerHTML != null) throw Error(K(91));
  return nt({}, e, { value: void 0, defaultValue: void 0, children: "" + t._wrapperState.initialValue });
}
function xg(t, e) {
  var n = e.value;
  if (n == null) {
    if (n = e.children, e = e.defaultValue, n != null) {
      if (e != null) throw Error(K(92));
      if (Zo(n)) {
        if (1 < n.length) throw Error(K(93));
        n = n[0];
      }
      e = n;
    }
    e == null && (e = ""), n = e;
  }
  t._wrapperState = { initialValue: hi(n) };
}
function Om(t, e) {
  var n = hi(e.value), r = hi(e.defaultValue);
  n != null && (n = "" + n, n !== t.value && (t.value = n), e.defaultValue == null && t.defaultValue !== n && (t.defaultValue = n)), r != null && (t.defaultValue = "" + r);
}
function Cg(t) {
  var e = t.textContent;
  e === t._wrapperState.initialValue && e !== "" && e !== null && (t.value = e);
}
function Dm(t) {
  switch (t) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function kh(t, e) {
  return t == null || t === "http://www.w3.org/1999/xhtml" ? Dm(e) : t === "http://www.w3.org/2000/svg" && e === "foreignObject" ? "http://www.w3.org/1999/xhtml" : t;
}
var Va, Im = function(t) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(e, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return t(e, n, r, o);
    });
  } : t;
}(function(t, e) {
  if (t.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in t) t.innerHTML = e;
  else {
    for (Va = Va || document.createElement("div"), Va.innerHTML = "<svg>" + e.valueOf().toString() + "</svg>", e = Va.firstChild; t.firstChild; ) t.removeChild(t.firstChild);
    for (; e.firstChild; ) t.appendChild(e.firstChild);
  }
});
function pl(t, e) {
  if (e) {
    var n = t.firstChild;
    if (n && n === t.lastChild && n.nodeType === 3) {
      n.nodeValue = e;
      return;
    }
  }
  t.textContent = e;
}
var rl = {
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
}, iv = ["Webkit", "ms", "Moz", "O"];
Object.keys(rl).forEach(function(t) {
  iv.forEach(function(e) {
    e = e + t.charAt(0).toUpperCase() + t.substring(1), rl[e] = rl[t];
  });
});
function zm(t, e, n) {
  return e == null || typeof e == "boolean" || e === "" ? "" : n || typeof e != "number" || e === 0 || rl.hasOwnProperty(t) && rl[t] ? ("" + e).trim() : e + "px";
}
function Gm(t, e) {
  t = t.style;
  for (var n in e) if (e.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, o = zm(n, e[n], r);
    n === "float" && (n = "cssFloat"), r ? t.setProperty(n, o) : t[n] = o;
  }
}
var sv = nt({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Eh(t, e) {
  if (e) {
    if (sv[t] && (e.children != null || e.dangerouslySetInnerHTML != null)) throw Error(K(137, t));
    if (e.dangerouslySetInnerHTML != null) {
      if (e.children != null) throw Error(K(60));
      if (typeof e.dangerouslySetInnerHTML != "object" || !("__html" in e.dangerouslySetInnerHTML)) throw Error(K(61));
    }
    if (e.style != null && typeof e.style != "object") throw Error(K(62));
  }
}
function Ph(t, e) {
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
var Th = null;
function T0(t) {
  return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
}
var Nh = null, Xs = null, $s = null;
function kg(t) {
  if (t = Il(t)) {
    if (typeof Nh != "function") throw Error(K(280));
    var e = t.stateNode;
    e && (e = ic(e), Nh(t.stateNode, t.type, e));
  }
}
function Um(t) {
  Xs ? $s ? $s.push(t) : $s = [t] : Xs = t;
}
function Bm() {
  if (Xs) {
    var t = Xs, e = $s;
    if ($s = Xs = null, kg(t), e) for (t = 0; t < e.length; t++) kg(e[t]);
  }
}
function Vm(t, e) {
  return t(e);
}
function jm() {
}
var Of = !1;
function Hm(t, e, n) {
  if (Of) return t(e, n);
  Of = !0;
  try {
    return Vm(t, e, n);
  } finally {
    Of = !1, (Xs !== null || $s !== null) && (jm(), Bm());
  }
}
function gl(t, e) {
  var n = t.stateNode;
  if (n === null) return null;
  var r = ic(n);
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
var Rh = !1;
if (Fr) try {
  var Uo = {};
  Object.defineProperty(Uo, "passive", { get: function() {
    Rh = !0;
  } }), window.addEventListener("test", Uo, Uo), window.removeEventListener("test", Uo, Uo);
} catch {
  Rh = !1;
}
function ov(t, e, n, r, o, l, a, c, d) {
  var g = Array.prototype.slice.call(arguments, 3);
  try {
    e.apply(n, g);
  } catch (y) {
    this.onError(y);
  }
}
var il = !1, ku = null, Eu = !1, Fh = null, lv = { onError: function(t) {
  il = !0, ku = t;
} };
function av(t, e, n, r, o, l, a, c, d) {
  il = !1, ku = null, ov.apply(lv, arguments);
}
function uv(t, e, n, r, o, l, a, c, d) {
  if (av.apply(this, arguments), il) {
    if (il) {
      var g = ku;
      il = !1, ku = null;
    } else throw Error(K(198));
    Eu || (Eu = !0, Fh = g);
  }
}
function ns(t) {
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
function Wm(t) {
  if (t.tag === 13) {
    var e = t.memoizedState;
    if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
  }
  return null;
}
function Eg(t) {
  if (ns(t) !== t) throw Error(K(188));
}
function cv(t) {
  var e = t.alternate;
  if (!e) {
    if (e = ns(t), e === null) throw Error(K(188));
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
        if (l === n) return Eg(o), t;
        if (l === r) return Eg(o), e;
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
function Km(t) {
  return t = cv(t), t !== null ? Ym(t) : null;
}
function Ym(t) {
  if (t.tag === 5 || t.tag === 6) return t;
  for (t = t.child; t !== null; ) {
    var e = Ym(t);
    if (e !== null) return e;
    t = t.sibling;
  }
  return null;
}
var Xm = pn.unstable_scheduleCallback, Pg = pn.unstable_cancelCallback, dv = pn.unstable_shouldYield, fv = pn.unstable_requestPaint, at = pn.unstable_now, hv = pn.unstable_getCurrentPriorityLevel, N0 = pn.unstable_ImmediatePriority, $m = pn.unstable_UserBlockingPriority, Pu = pn.unstable_NormalPriority, pv = pn.unstable_LowPriority, Qm = pn.unstable_IdlePriority, ec = null, dr = null;
function gv(t) {
  if (dr && typeof dr.onCommitFiberRoot == "function") try {
    dr.onCommitFiberRoot(ec, t, void 0, (t.current.flags & 128) === 128);
  } catch {
  }
}
var Xn = Math.clz32 ? Math.clz32 : vv, mv = Math.log, yv = Math.LN2;
function vv(t) {
  return t >>>= 0, t === 0 ? 32 : 31 - (mv(t) / yv | 0) | 0;
}
var ja = 64, Ha = 4194304;
function Jo(t) {
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
function Tu(t, e) {
  var n = t.pendingLanes;
  if (n === 0) return 0;
  var r = 0, o = t.suspendedLanes, l = t.pingedLanes, a = n & 268435455;
  if (a !== 0) {
    var c = a & ~o;
    c !== 0 ? r = Jo(c) : (l &= a, l !== 0 && (r = Jo(l)));
  } else a = n & ~o, a !== 0 ? r = Jo(a) : l !== 0 && (r = Jo(l));
  if (r === 0) return 0;
  if (e !== 0 && e !== r && !(e & o) && (o = r & -r, l = e & -e, o >= l || o === 16 && (l & 4194240) !== 0)) return e;
  if (r & 4 && (r |= n & 16), e = t.entangledLanes, e !== 0) for (t = t.entanglements, e &= r; 0 < e; ) n = 31 - Xn(e), o = 1 << n, r |= t[n], e &= ~o;
  return r;
}
function _v(t, e) {
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
function Sv(t, e) {
  for (var n = t.suspendedLanes, r = t.pingedLanes, o = t.expirationTimes, l = t.pendingLanes; 0 < l; ) {
    var a = 31 - Xn(l), c = 1 << a, d = o[a];
    d === -1 ? (!(c & n) || c & r) && (o[a] = _v(c, e)) : d <= e && (t.expiredLanes |= c), l &= ~c;
  }
}
function Mh(t) {
  return t = t.pendingLanes & -1073741825, t !== 0 ? t : t & 1073741824 ? 1073741824 : 0;
}
function qm() {
  var t = ja;
  return ja <<= 1, !(ja & 4194240) && (ja = 64), t;
}
function Df(t) {
  for (var e = [], n = 0; 31 > n; n++) e.push(t);
  return e;
}
function Ol(t, e, n) {
  t.pendingLanes |= e, e !== 536870912 && (t.suspendedLanes = 0, t.pingedLanes = 0), t = t.eventTimes, e = 31 - Xn(e), t[e] = n;
}
function wv(t, e) {
  var n = t.pendingLanes & ~e;
  t.pendingLanes = e, t.suspendedLanes = 0, t.pingedLanes = 0, t.expiredLanes &= e, t.mutableReadLanes &= e, t.entangledLanes &= e, e = t.entanglements;
  var r = t.eventTimes;
  for (t = t.expirationTimes; 0 < n; ) {
    var o = 31 - Xn(n), l = 1 << o;
    e[o] = 0, r[o] = -1, t[o] = -1, n &= ~l;
  }
}
function R0(t, e) {
  var n = t.entangledLanes |= e;
  for (t = t.entanglements; n; ) {
    var r = 31 - Xn(n), o = 1 << r;
    o & e | t[r] & e && (t[r] |= e), n &= ~o;
  }
}
var Ie = 0;
function bm(t) {
  return t &= -t, 1 < t ? 4 < t ? t & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Zm, F0, Jm, e3, t3, Lh = !1, Wa = [], si = null, oi = null, li = null, ml = /* @__PURE__ */ new Map(), yl = /* @__PURE__ */ new Map(), ti = [], xv = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Tg(t, e) {
  switch (t) {
    case "focusin":
    case "focusout":
      si = null;
      break;
    case "dragenter":
    case "dragleave":
      oi = null;
      break;
    case "mouseover":
    case "mouseout":
      li = null;
      break;
    case "pointerover":
    case "pointerout":
      ml.delete(e.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      yl.delete(e.pointerId);
  }
}
function Bo(t, e, n, r, o, l) {
  return t === null || t.nativeEvent !== l ? (t = { blockedOn: e, domEventName: n, eventSystemFlags: r, nativeEvent: l, targetContainers: [o] }, e !== null && (e = Il(e), e !== null && F0(e)), t) : (t.eventSystemFlags |= r, e = t.targetContainers, o !== null && e.indexOf(o) === -1 && e.push(o), t);
}
function Cv(t, e, n, r, o) {
  switch (e) {
    case "focusin":
      return si = Bo(si, t, e, n, r, o), !0;
    case "dragenter":
      return oi = Bo(oi, t, e, n, r, o), !0;
    case "mouseover":
      return li = Bo(li, t, e, n, r, o), !0;
    case "pointerover":
      var l = o.pointerId;
      return ml.set(l, Bo(ml.get(l) || null, t, e, n, r, o)), !0;
    case "gotpointercapture":
      return l = o.pointerId, yl.set(l, Bo(yl.get(l) || null, t, e, n, r, o)), !0;
  }
  return !1;
}
function n3(t) {
  var e = Wi(t.target);
  if (e !== null) {
    var n = ns(e);
    if (n !== null) {
      if (e = n.tag, e === 13) {
        if (e = Wm(n), e !== null) {
          t.blockedOn = e, t3(t.priority, function() {
            Jm(n);
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
function du(t) {
  if (t.blockedOn !== null) return !1;
  for (var e = t.targetContainers; 0 < e.length; ) {
    var n = Ah(t.domEventName, t.eventSystemFlags, e[0], t.nativeEvent);
    if (n === null) {
      n = t.nativeEvent;
      var r = new n.constructor(n.type, n);
      Th = r, n.target.dispatchEvent(r), Th = null;
    } else return e = Il(n), e !== null && F0(e), t.blockedOn = n, !1;
    e.shift();
  }
  return !0;
}
function Ng(t, e, n) {
  du(t) && n.delete(e);
}
function kv() {
  Lh = !1, si !== null && du(si) && (si = null), oi !== null && du(oi) && (oi = null), li !== null && du(li) && (li = null), ml.forEach(Ng), yl.forEach(Ng);
}
function Vo(t, e) {
  t.blockedOn === e && (t.blockedOn = null, Lh || (Lh = !0, pn.unstable_scheduleCallback(pn.unstable_NormalPriority, kv)));
}
function vl(t) {
  function e(o) {
    return Vo(o, t);
  }
  if (0 < Wa.length) {
    Vo(Wa[0], t);
    for (var n = 1; n < Wa.length; n++) {
      var r = Wa[n];
      r.blockedOn === t && (r.blockedOn = null);
    }
  }
  for (si !== null && Vo(si, t), oi !== null && Vo(oi, t), li !== null && Vo(li, t), ml.forEach(e), yl.forEach(e), n = 0; n < ti.length; n++) r = ti[n], r.blockedOn === t && (r.blockedOn = null);
  for (; 0 < ti.length && (n = ti[0], n.blockedOn === null); ) n3(n), n.blockedOn === null && ti.shift();
}
var Qs = Or.ReactCurrentBatchConfig, Nu = !0;
function Ev(t, e, n, r) {
  var o = Ie, l = Qs.transition;
  Qs.transition = null;
  try {
    Ie = 1, M0(t, e, n, r);
  } finally {
    Ie = o, Qs.transition = l;
  }
}
function Pv(t, e, n, r) {
  var o = Ie, l = Qs.transition;
  Qs.transition = null;
  try {
    Ie = 4, M0(t, e, n, r);
  } finally {
    Ie = o, Qs.transition = l;
  }
}
function M0(t, e, n, r) {
  if (Nu) {
    var o = Ah(t, e, n, r);
    if (o === null) Kf(t, e, r, Ru, n), Tg(t, r);
    else if (Cv(o, t, e, n, r)) r.stopPropagation();
    else if (Tg(t, r), e & 4 && -1 < xv.indexOf(t)) {
      for (; o !== null; ) {
        var l = Il(o);
        if (l !== null && Zm(l), l = Ah(t, e, n, r), l === null && Kf(t, e, r, Ru, n), l === o) break;
        o = l;
      }
      o !== null && r.stopPropagation();
    } else Kf(t, e, r, null, n);
  }
}
var Ru = null;
function Ah(t, e, n, r) {
  if (Ru = null, t = T0(r), t = Wi(t), t !== null) if (e = ns(t), e === null) t = null;
  else if (n = e.tag, n === 13) {
    if (t = Wm(e), t !== null) return t;
    t = null;
  } else if (n === 3) {
    if (e.stateNode.current.memoizedState.isDehydrated) return e.tag === 3 ? e.stateNode.containerInfo : null;
    t = null;
  } else e !== t && (t = null);
  return Ru = t, null;
}
function r3(t) {
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
      switch (hv()) {
        case N0:
          return 1;
        case $m:
          return 4;
        case Pu:
        case pv:
          return 16;
        case Qm:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var ri = null, L0 = null, fu = null;
function i3() {
  if (fu) return fu;
  var t, e = L0, n = e.length, r, o = "value" in ri ? ri.value : ri.textContent, l = o.length;
  for (t = 0; t < n && e[t] === o[t]; t++) ;
  var a = n - t;
  for (r = 1; r <= a && e[n - r] === o[l - r]; r++) ;
  return fu = o.slice(t, 1 < r ? 1 - r : void 0);
}
function hu(t) {
  var e = t.keyCode;
  return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
}
function Ka() {
  return !0;
}
function Rg() {
  return !1;
}
function mn(t) {
  function e(n, r, o, l, a) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = l, this.target = a, this.currentTarget = null;
    for (var c in t) t.hasOwnProperty(c) && (n = t[c], this[c] = n ? n(l) : l[c]);
    return this.isDefaultPrevented = (l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1) ? Ka : Rg, this.isPropagationStopped = Rg, this;
  }
  return nt(e.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Ka);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Ka);
  }, persist: function() {
  }, isPersistent: Ka }), e;
}
var uo = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(t) {
  return t.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, A0 = mn(uo), Dl = nt({}, uo, { view: 0, detail: 0 }), Tv = mn(Dl), If, zf, jo, tc = nt({}, Dl, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: O0, button: 0, buttons: 0, relatedTarget: function(t) {
  return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
}, movementX: function(t) {
  return "movementX" in t ? t.movementX : (t !== jo && (jo && t.type === "mousemove" ? (If = t.screenX - jo.screenX, zf = t.screenY - jo.screenY) : zf = If = 0, jo = t), If);
}, movementY: function(t) {
  return "movementY" in t ? t.movementY : zf;
} }), Fg = mn(tc), Nv = nt({}, tc, { dataTransfer: 0 }), Rv = mn(Nv), Fv = nt({}, Dl, { relatedTarget: 0 }), Gf = mn(Fv), Mv = nt({}, uo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Lv = mn(Mv), Av = nt({}, uo, { clipboardData: function(t) {
  return "clipboardData" in t ? t.clipboardData : window.clipboardData;
} }), Ov = mn(Av), Dv = nt({}, uo, { data: 0 }), Mg = mn(Dv), Iv = {
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
}, zv = {
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
}, Gv = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Uv(t) {
  var e = this.nativeEvent;
  return e.getModifierState ? e.getModifierState(t) : (t = Gv[t]) ? !!e[t] : !1;
}
function O0() {
  return Uv;
}
var Bv = nt({}, Dl, { key: function(t) {
  if (t.key) {
    var e = Iv[t.key] || t.key;
    if (e !== "Unidentified") return e;
  }
  return t.type === "keypress" ? (t = hu(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? zv[t.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: O0, charCode: function(t) {
  return t.type === "keypress" ? hu(t) : 0;
}, keyCode: function(t) {
  return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
}, which: function(t) {
  return t.type === "keypress" ? hu(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
} }), Vv = mn(Bv), jv = nt({}, tc, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Lg = mn(jv), Hv = nt({}, Dl, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: O0 }), Wv = mn(Hv), Kv = nt({}, uo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Yv = mn(Kv), Xv = nt({}, tc, {
  deltaX: function(t) {
    return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
  },
  deltaY: function(t) {
    return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), $v = mn(Xv), Qv = [9, 13, 27, 32], D0 = Fr && "CompositionEvent" in window, sl = null;
Fr && "documentMode" in document && (sl = document.documentMode);
var qv = Fr && "TextEvent" in window && !sl, s3 = Fr && (!D0 || sl && 8 < sl && 11 >= sl), Ag = " ", Og = !1;
function o3(t, e) {
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
function l3(t) {
  return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
}
var Is = !1;
function bv(t, e) {
  switch (t) {
    case "compositionend":
      return l3(e);
    case "keypress":
      return e.which !== 32 ? null : (Og = !0, Ag);
    case "textInput":
      return t = e.data, t === Ag && Og ? null : t;
    default:
      return null;
  }
}
function Zv(t, e) {
  if (Is) return t === "compositionend" || !D0 && o3(t, e) ? (t = i3(), fu = L0 = ri = null, Is = !1, t) : null;
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
      return s3 && e.locale !== "ko" ? null : e.data;
    default:
      return null;
  }
}
var Jv = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Dg(t) {
  var e = t && t.nodeName && t.nodeName.toLowerCase();
  return e === "input" ? !!Jv[t.type] : e === "textarea";
}
function a3(t, e, n, r) {
  Um(r), e = Fu(e, "onChange"), 0 < e.length && (n = new A0("onChange", "change", null, n, r), t.push({ event: n, listeners: e }));
}
var ol = null, _l = null;
function e6(t) {
  _3(t, 0);
}
function nc(t) {
  var e = Us(t);
  if (Lm(e)) return t;
}
function t6(t, e) {
  if (t === "change") return e;
}
var u3 = !1;
if (Fr) {
  var Uf;
  if (Fr) {
    var Bf = "oninput" in document;
    if (!Bf) {
      var Ig = document.createElement("div");
      Ig.setAttribute("oninput", "return;"), Bf = typeof Ig.oninput == "function";
    }
    Uf = Bf;
  } else Uf = !1;
  u3 = Uf && (!document.documentMode || 9 < document.documentMode);
}
function zg() {
  ol && (ol.detachEvent("onpropertychange", c3), _l = ol = null);
}
function c3(t) {
  if (t.propertyName === "value" && nc(_l)) {
    var e = [];
    a3(e, _l, t, T0(t)), Hm(e6, e);
  }
}
function n6(t, e, n) {
  t === "focusin" ? (zg(), ol = e, _l = n, ol.attachEvent("onpropertychange", c3)) : t === "focusout" && zg();
}
function r6(t) {
  if (t === "selectionchange" || t === "keyup" || t === "keydown") return nc(_l);
}
function i6(t, e) {
  if (t === "click") return nc(e);
}
function s6(t, e) {
  if (t === "input" || t === "change") return nc(e);
}
function o6(t, e) {
  return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
}
var qn = typeof Object.is == "function" ? Object.is : o6;
function Sl(t, e) {
  if (qn(t, e)) return !0;
  if (typeof t != "object" || t === null || typeof e != "object" || e === null) return !1;
  var n = Object.keys(t), r = Object.keys(e);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!gh.call(e, o) || !qn(t[o], e[o])) return !1;
  }
  return !0;
}
function Gg(t) {
  for (; t && t.firstChild; ) t = t.firstChild;
  return t;
}
function Ug(t, e) {
  var n = Gg(t);
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
    n = Gg(n);
  }
}
function d3(t, e) {
  return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? d3(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1;
}
function f3() {
  for (var t = window, e = Cu(); e instanceof t.HTMLIFrameElement; ) {
    try {
      var n = typeof e.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) t = e.contentWindow;
    else break;
    e = Cu(t.document);
  }
  return e;
}
function I0(t) {
  var e = t && t.nodeName && t.nodeName.toLowerCase();
  return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
}
function l6(t) {
  var e = f3(), n = t.focusedElem, r = t.selectionRange;
  if (e !== n && n && n.ownerDocument && d3(n.ownerDocument.documentElement, n)) {
    if (r !== null && I0(n)) {
      if (e = r.start, t = r.end, t === void 0 && (t = e), "selectionStart" in n) n.selectionStart = e, n.selectionEnd = Math.min(t, n.value.length);
      else if (t = (e = n.ownerDocument || document) && e.defaultView || window, t.getSelection) {
        t = t.getSelection();
        var o = n.textContent.length, l = Math.min(r.start, o);
        r = r.end === void 0 ? l : Math.min(r.end, o), !t.extend && l > r && (o = r, r = l, l = o), o = Ug(n, l);
        var a = Ug(
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
var a6 = Fr && "documentMode" in document && 11 >= document.documentMode, zs = null, Oh = null, ll = null, Dh = !1;
function Bg(t, e, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Dh || zs == null || zs !== Cu(r) || (r = zs, "selectionStart" in r && I0(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), ll && Sl(ll, r) || (ll = r, r = Fu(Oh, "onSelect"), 0 < r.length && (e = new A0("onSelect", "select", null, e, n), t.push({ event: e, listeners: r }), e.target = zs)));
}
function Ya(t, e) {
  var n = {};
  return n[t.toLowerCase()] = e.toLowerCase(), n["Webkit" + t] = "webkit" + e, n["Moz" + t] = "moz" + e, n;
}
var Gs = { animationend: Ya("Animation", "AnimationEnd"), animationiteration: Ya("Animation", "AnimationIteration"), animationstart: Ya("Animation", "AnimationStart"), transitionend: Ya("Transition", "TransitionEnd") }, Vf = {}, h3 = {};
Fr && (h3 = document.createElement("div").style, "AnimationEvent" in window || (delete Gs.animationend.animation, delete Gs.animationiteration.animation, delete Gs.animationstart.animation), "TransitionEvent" in window || delete Gs.transitionend.transition);
function rc(t) {
  if (Vf[t]) return Vf[t];
  if (!Gs[t]) return t;
  var e = Gs[t], n;
  for (n in e) if (e.hasOwnProperty(n) && n in h3) return Vf[t] = e[n];
  return t;
}
var p3 = rc("animationend"), g3 = rc("animationiteration"), m3 = rc("animationstart"), y3 = rc("transitionend"), v3 = /* @__PURE__ */ new Map(), Vg = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function mi(t, e) {
  v3.set(t, e), ts(e, [t]);
}
for (var jf = 0; jf < Vg.length; jf++) {
  var Hf = Vg[jf], u6 = Hf.toLowerCase(), c6 = Hf[0].toUpperCase() + Hf.slice(1);
  mi(u6, "on" + c6);
}
mi(p3, "onAnimationEnd");
mi(g3, "onAnimationIteration");
mi(m3, "onAnimationStart");
mi("dblclick", "onDoubleClick");
mi("focusin", "onFocus");
mi("focusout", "onBlur");
mi(y3, "onTransitionEnd");
Zs("onMouseEnter", ["mouseout", "mouseover"]);
Zs("onMouseLeave", ["mouseout", "mouseover"]);
Zs("onPointerEnter", ["pointerout", "pointerover"]);
Zs("onPointerLeave", ["pointerout", "pointerover"]);
ts("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
ts("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
ts("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
ts("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
ts("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
ts("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var el = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), d6 = new Set("cancel close invalid load scroll toggle".split(" ").concat(el));
function jg(t, e, n) {
  var r = t.type || "unknown-event";
  t.currentTarget = n, uv(r, e, void 0, t), t.currentTarget = null;
}
function _3(t, e) {
  e = (e & 4) !== 0;
  for (var n = 0; n < t.length; n++) {
    var r = t[n], o = r.event;
    r = r.listeners;
    e: {
      var l = void 0;
      if (e) for (var a = r.length - 1; 0 <= a; a--) {
        var c = r[a], d = c.instance, g = c.currentTarget;
        if (c = c.listener, d !== l && o.isPropagationStopped()) break e;
        jg(o, c, g), l = d;
      }
      else for (a = 0; a < r.length; a++) {
        if (c = r[a], d = c.instance, g = c.currentTarget, c = c.listener, d !== l && o.isPropagationStopped()) break e;
        jg(o, c, g), l = d;
      }
    }
  }
  if (Eu) throw t = Fh, Eu = !1, Fh = null, t;
}
function Ye(t, e) {
  var n = e[Bh];
  n === void 0 && (n = e[Bh] = /* @__PURE__ */ new Set());
  var r = t + "__bubble";
  n.has(r) || (S3(e, t, 2, !1), n.add(r));
}
function Wf(t, e, n) {
  var r = 0;
  e && (r |= 4), S3(n, t, r, e);
}
var Xa = "_reactListening" + Math.random().toString(36).slice(2);
function wl(t) {
  if (!t[Xa]) {
    t[Xa] = !0, Tm.forEach(function(n) {
      n !== "selectionchange" && (d6.has(n) || Wf(n, !1, t), Wf(n, !0, t));
    });
    var e = t.nodeType === 9 ? t : t.ownerDocument;
    e === null || e[Xa] || (e[Xa] = !0, Wf("selectionchange", !1, e));
  }
}
function S3(t, e, n, r) {
  switch (r3(e)) {
    case 1:
      var o = Ev;
      break;
    case 4:
      o = Pv;
      break;
    default:
      o = M0;
  }
  n = o.bind(null, e, n, t), o = void 0, !Rh || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (o = !0), r ? o !== void 0 ? t.addEventListener(e, n, { capture: !0, passive: o }) : t.addEventListener(e, n, !0) : o !== void 0 ? t.addEventListener(e, n, { passive: o }) : t.addEventListener(e, n, !1);
}
function Kf(t, e, n, r, o) {
  var l = r;
  if (!(e & 1) && !(e & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var a = r.tag;
    if (a === 3 || a === 4) {
      var c = r.stateNode.containerInfo;
      if (c === o || c.nodeType === 8 && c.parentNode === o) break;
      if (a === 4) for (a = r.return; a !== null; ) {
        var d = a.tag;
        if ((d === 3 || d === 4) && (d = a.stateNode.containerInfo, d === o || d.nodeType === 8 && d.parentNode === o)) return;
        a = a.return;
      }
      for (; c !== null; ) {
        if (a = Wi(c), a === null) return;
        if (d = a.tag, d === 5 || d === 6) {
          r = l = a;
          continue e;
        }
        c = c.parentNode;
      }
    }
    r = r.return;
  }
  Hm(function() {
    var g = l, y = T0(n), C = [];
    e: {
      var S = v3.get(t);
      if (S !== void 0) {
        var x = A0, v = t;
        switch (t) {
          case "keypress":
            if (hu(n) === 0) break e;
          case "keydown":
          case "keyup":
            x = Vv;
            break;
          case "focusin":
            v = "focus", x = Gf;
            break;
          case "focusout":
            v = "blur", x = Gf;
            break;
          case "beforeblur":
          case "afterblur":
            x = Gf;
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
            x = Fg;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            x = Rv;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            x = Wv;
            break;
          case p3:
          case g3:
          case m3:
            x = Lv;
            break;
          case y3:
            x = Yv;
            break;
          case "scroll":
            x = Tv;
            break;
          case "wheel":
            x = $v;
            break;
          case "copy":
          case "cut":
          case "paste":
            x = Ov;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            x = Lg;
        }
        var E = (e & 4) !== 0, N = !E && t === "scroll", k = E ? S !== null ? S + "Capture" : null : S;
        E = [];
        for (var w = g, p; w !== null; ) {
          p = w;
          var _ = p.stateNode;
          if (p.tag === 5 && _ !== null && (p = _, k !== null && (_ = gl(w, k), _ != null && E.push(xl(w, _, p)))), N) break;
          w = w.return;
        }
        0 < E.length && (S = new x(S, v, null, n, y), C.push({ event: S, listeners: E }));
      }
    }
    if (!(e & 7)) {
      e: {
        if (S = t === "mouseover" || t === "pointerover", x = t === "mouseout" || t === "pointerout", S && n !== Th && (v = n.relatedTarget || n.fromElement) && (Wi(v) || v[Mr])) break e;
        if ((x || S) && (S = y.window === y ? y : (S = y.ownerDocument) ? S.defaultView || S.parentWindow : window, x ? (v = n.relatedTarget || n.toElement, x = g, v = v ? Wi(v) : null, v !== null && (N = ns(v), v !== N || v.tag !== 5 && v.tag !== 6) && (v = null)) : (x = null, v = g), x !== v)) {
          if (E = Fg, _ = "onMouseLeave", k = "onMouseEnter", w = "mouse", (t === "pointerout" || t === "pointerover") && (E = Lg, _ = "onPointerLeave", k = "onPointerEnter", w = "pointer"), N = x == null ? S : Us(x), p = v == null ? S : Us(v), S = new E(_, w + "leave", x, n, y), S.target = N, S.relatedTarget = p, _ = null, Wi(y) === g && (E = new E(k, w + "enter", v, n, y), E.target = p, E.relatedTarget = N, _ = E), N = _, x && v) t: {
            for (E = x, k = v, w = 0, p = E; p; p = Rs(p)) w++;
            for (p = 0, _ = k; _; _ = Rs(_)) p++;
            for (; 0 < w - p; ) E = Rs(E), w--;
            for (; 0 < p - w; ) k = Rs(k), p--;
            for (; w--; ) {
              if (E === k || k !== null && E === k.alternate) break t;
              E = Rs(E), k = Rs(k);
            }
            E = null;
          }
          else E = null;
          x !== null && Hg(C, S, x, E, !1), v !== null && N !== null && Hg(C, N, v, E, !0);
        }
      }
      e: {
        if (S = g ? Us(g) : window, x = S.nodeName && S.nodeName.toLowerCase(), x === "select" || x === "input" && S.type === "file") var T = t6;
        else if (Dg(S)) if (u3) T = s6;
        else {
          T = r6;
          var F = n6;
        }
        else (x = S.nodeName) && x.toLowerCase() === "input" && (S.type === "checkbox" || S.type === "radio") && (T = i6);
        if (T && (T = T(t, g))) {
          a3(C, T, n, y);
          break e;
        }
        F && F(t, S, g), t === "focusout" && (F = S._wrapperState) && F.controlled && S.type === "number" && xh(S, "number", S.value);
      }
      switch (F = g ? Us(g) : window, t) {
        case "focusin":
          (Dg(F) || F.contentEditable === "true") && (zs = F, Oh = g, ll = null);
          break;
        case "focusout":
          ll = Oh = zs = null;
          break;
        case "mousedown":
          Dh = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Dh = !1, Bg(C, n, y);
          break;
        case "selectionchange":
          if (a6) break;
        case "keydown":
        case "keyup":
          Bg(C, n, y);
      }
      var M;
      if (D0) e: {
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
      else Is ? o3(t, n) && (R = "onCompositionEnd") : t === "keydown" && n.keyCode === 229 && (R = "onCompositionStart");
      R && (s3 && n.locale !== "ko" && (Is || R !== "onCompositionStart" ? R === "onCompositionEnd" && Is && (M = i3()) : (ri = y, L0 = "value" in ri ? ri.value : ri.textContent, Is = !0)), F = Fu(g, R), 0 < F.length && (R = new Mg(R, t, null, n, y), C.push({ event: R, listeners: F }), M ? R.data = M : (M = l3(n), M !== null && (R.data = M)))), (M = qv ? bv(t, n) : Zv(t, n)) && (g = Fu(g, "onBeforeInput"), 0 < g.length && (y = new Mg("onBeforeInput", "beforeinput", null, n, y), C.push({ event: y, listeners: g }), y.data = M));
    }
    _3(C, e);
  });
}
function xl(t, e, n) {
  return { instance: t, listener: e, currentTarget: n };
}
function Fu(t, e) {
  for (var n = e + "Capture", r = []; t !== null; ) {
    var o = t, l = o.stateNode;
    o.tag === 5 && l !== null && (o = l, l = gl(t, n), l != null && r.unshift(xl(t, l, o)), l = gl(t, e), l != null && r.push(xl(t, l, o))), t = t.return;
  }
  return r;
}
function Rs(t) {
  if (t === null) return null;
  do
    t = t.return;
  while (t && t.tag !== 5);
  return t || null;
}
function Hg(t, e, n, r, o) {
  for (var l = e._reactName, a = []; n !== null && n !== r; ) {
    var c = n, d = c.alternate, g = c.stateNode;
    if (d !== null && d === r) break;
    c.tag === 5 && g !== null && (c = g, o ? (d = gl(n, l), d != null && a.unshift(xl(n, d, c))) : o || (d = gl(n, l), d != null && a.push(xl(n, d, c)))), n = n.return;
  }
  a.length !== 0 && t.push({ event: e, listeners: a });
}
var f6 = /\r\n?/g, h6 = /\u0000|\uFFFD/g;
function Wg(t) {
  return (typeof t == "string" ? t : "" + t).replace(f6, `
`).replace(h6, "");
}
function $a(t, e, n) {
  if (e = Wg(e), Wg(t) !== e && n) throw Error(K(425));
}
function Mu() {
}
var Ih = null, zh = null;
function Gh(t, e) {
  return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
}
var Uh = typeof setTimeout == "function" ? setTimeout : void 0, p6 = typeof clearTimeout == "function" ? clearTimeout : void 0, Kg = typeof Promise == "function" ? Promise : void 0, g6 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Kg < "u" ? function(t) {
  return Kg.resolve(null).then(t).catch(m6);
} : Uh;
function m6(t) {
  setTimeout(function() {
    throw t;
  });
}
function Yf(t, e) {
  var n = e, r = 0;
  do {
    var o = n.nextSibling;
    if (t.removeChild(n), o && o.nodeType === 8) if (n = o.data, n === "/$") {
      if (r === 0) {
        t.removeChild(o), vl(e);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
  } while (n);
  vl(e);
}
function ai(t) {
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
function Yg(t) {
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
var co = Math.random().toString(36).slice(2), ur = "__reactFiber$" + co, Cl = "__reactProps$" + co, Mr = "__reactContainer$" + co, Bh = "__reactEvents$" + co, y6 = "__reactListeners$" + co, v6 = "__reactHandles$" + co;
function Wi(t) {
  var e = t[ur];
  if (e) return e;
  for (var n = t.parentNode; n; ) {
    if (e = n[Mr] || n[ur]) {
      if (n = e.alternate, e.child !== null || n !== null && n.child !== null) for (t = Yg(t); t !== null; ) {
        if (n = t[ur]) return n;
        t = Yg(t);
      }
      return e;
    }
    t = n, n = t.parentNode;
  }
  return null;
}
function Il(t) {
  return t = t[ur] || t[Mr], !t || t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3 ? null : t;
}
function Us(t) {
  if (t.tag === 5 || t.tag === 6) return t.stateNode;
  throw Error(K(33));
}
function ic(t) {
  return t[Cl] || null;
}
var Vh = [], Bs = -1;
function yi(t) {
  return { current: t };
}
function Xe(t) {
  0 > Bs || (t.current = Vh[Bs], Vh[Bs] = null, Bs--);
}
function He(t, e) {
  Bs++, Vh[Bs] = t.current, t.current = e;
}
var pi = {}, Bt = yi(pi), rn = yi(!1), qi = pi;
function Js(t, e) {
  var n = t.type.contextTypes;
  if (!n) return pi;
  var r = t.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === e) return r.__reactInternalMemoizedMaskedChildContext;
  var o = {}, l;
  for (l in n) o[l] = e[l];
  return r && (t = t.stateNode, t.__reactInternalMemoizedUnmaskedChildContext = e, t.__reactInternalMemoizedMaskedChildContext = o), o;
}
function sn(t) {
  return t = t.childContextTypes, t != null;
}
function Lu() {
  Xe(rn), Xe(Bt);
}
function Xg(t, e, n) {
  if (Bt.current !== pi) throw Error(K(168));
  He(Bt, e), He(rn, n);
}
function w3(t, e, n) {
  var r = t.stateNode;
  if (e = e.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in e)) throw Error(K(108, nv(t) || "Unknown", o));
  return nt({}, n, r);
}
function Au(t) {
  return t = (t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext || pi, qi = Bt.current, He(Bt, t), He(rn, rn.current), !0;
}
function $g(t, e, n) {
  var r = t.stateNode;
  if (!r) throw Error(K(169));
  n ? (t = w3(t, e, qi), r.__reactInternalMemoizedMergedChildContext = t, Xe(rn), Xe(Bt), He(Bt, t)) : Xe(rn), He(rn, n);
}
var Er = null, sc = !1, Xf = !1;
function x3(t) {
  Er === null ? Er = [t] : Er.push(t);
}
function _6(t) {
  sc = !0, x3(t);
}
function vi() {
  if (!Xf && Er !== null) {
    Xf = !0;
    var t = 0, e = Ie;
    try {
      var n = Er;
      for (Ie = 1; t < n.length; t++) {
        var r = n[t];
        do
          r = r(!0);
        while (r !== null);
      }
      Er = null, sc = !1;
    } catch (o) {
      throw Er !== null && (Er = Er.slice(t + 1)), Xm(N0, vi), o;
    } finally {
      Ie = e, Xf = !1;
    }
  }
  return null;
}
var Vs = [], js = 0, Ou = null, Du = 0, Pn = [], Tn = 0, bi = null, Pr = 1, Tr = "";
function Vi(t, e) {
  Vs[js++] = Du, Vs[js++] = Ou, Ou = t, Du = e;
}
function C3(t, e, n) {
  Pn[Tn++] = Pr, Pn[Tn++] = Tr, Pn[Tn++] = bi, bi = t;
  var r = Pr;
  t = Tr;
  var o = 32 - Xn(r) - 1;
  r &= ~(1 << o), n += 1;
  var l = 32 - Xn(e) + o;
  if (30 < l) {
    var a = o - o % 5;
    l = (r & (1 << a) - 1).toString(32), r >>= a, o -= a, Pr = 1 << 32 - Xn(e) + o | n << o | r, Tr = l + t;
  } else Pr = 1 << l | n << o | r, Tr = t;
}
function z0(t) {
  t.return !== null && (Vi(t, 1), C3(t, 1, 0));
}
function G0(t) {
  for (; t === Ou; ) Ou = Vs[--js], Vs[js] = null, Du = Vs[--js], Vs[js] = null;
  for (; t === bi; ) bi = Pn[--Tn], Pn[Tn] = null, Tr = Pn[--Tn], Pn[Tn] = null, Pr = Pn[--Tn], Pn[Tn] = null;
}
var hn = null, fn = null, qe = !1, Yn = null;
function k3(t, e) {
  var n = Nn(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = e, n.return = t, e = t.deletions, e === null ? (t.deletions = [n], t.flags |= 16) : e.push(n);
}
function Qg(t, e) {
  switch (t.tag) {
    case 5:
      var n = t.type;
      return e = e.nodeType !== 1 || n.toLowerCase() !== e.nodeName.toLowerCase() ? null : e, e !== null ? (t.stateNode = e, hn = t, fn = ai(e.firstChild), !0) : !1;
    case 6:
      return e = t.pendingProps === "" || e.nodeType !== 3 ? null : e, e !== null ? (t.stateNode = e, hn = t, fn = null, !0) : !1;
    case 13:
      return e = e.nodeType !== 8 ? null : e, e !== null ? (n = bi !== null ? { id: Pr, overflow: Tr } : null, t.memoizedState = { dehydrated: e, treeContext: n, retryLane: 1073741824 }, n = Nn(18, null, null, 0), n.stateNode = e, n.return = t, t.child = n, hn = t, fn = null, !0) : !1;
    default:
      return !1;
  }
}
function jh(t) {
  return (t.mode & 1) !== 0 && (t.flags & 128) === 0;
}
function Hh(t) {
  if (qe) {
    var e = fn;
    if (e) {
      var n = e;
      if (!Qg(t, e)) {
        if (jh(t)) throw Error(K(418));
        e = ai(n.nextSibling);
        var r = hn;
        e && Qg(t, e) ? k3(r, n) : (t.flags = t.flags & -4097 | 2, qe = !1, hn = t);
      }
    } else {
      if (jh(t)) throw Error(K(418));
      t.flags = t.flags & -4097 | 2, qe = !1, hn = t;
    }
  }
}
function qg(t) {
  for (t = t.return; t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13; ) t = t.return;
  hn = t;
}
function Qa(t) {
  if (t !== hn) return !1;
  if (!qe) return qg(t), qe = !0, !1;
  var e;
  if ((e = t.tag !== 3) && !(e = t.tag !== 5) && (e = t.type, e = e !== "head" && e !== "body" && !Gh(t.type, t.memoizedProps)), e && (e = fn)) {
    if (jh(t)) throw E3(), Error(K(418));
    for (; e; ) k3(t, e), e = ai(e.nextSibling);
  }
  if (qg(t), t.tag === 13) {
    if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(K(317));
    e: {
      for (t = t.nextSibling, e = 0; t; ) {
        if (t.nodeType === 8) {
          var n = t.data;
          if (n === "/$") {
            if (e === 0) {
              fn = ai(t.nextSibling);
              break e;
            }
            e--;
          } else n !== "$" && n !== "$!" && n !== "$?" || e++;
        }
        t = t.nextSibling;
      }
      fn = null;
    }
  } else fn = hn ? ai(t.stateNode.nextSibling) : null;
  return !0;
}
function E3() {
  for (var t = fn; t; ) t = ai(t.nextSibling);
}
function eo() {
  fn = hn = null, qe = !1;
}
function U0(t) {
  Yn === null ? Yn = [t] : Yn.push(t);
}
var S6 = Or.ReactCurrentBatchConfig;
function Ho(t, e, n) {
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
function qa(t, e) {
  throw t = Object.prototype.toString.call(e), Error(K(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t));
}
function bg(t) {
  var e = t._init;
  return e(t._payload);
}
function P3(t) {
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
    return k = fi(k, w), k.index = 0, k.sibling = null, k;
  }
  function l(k, w, p) {
    return k.index = p, t ? (p = k.alternate, p !== null ? (p = p.index, p < w ? (k.flags |= 2, w) : p) : (k.flags |= 2, w)) : (k.flags |= 1048576, w);
  }
  function a(k) {
    return t && k.alternate === null && (k.flags |= 2), k;
  }
  function c(k, w, p, _) {
    return w === null || w.tag !== 6 ? (w = eh(p, k.mode, _), w.return = k, w) : (w = o(w, p), w.return = k, w);
  }
  function d(k, w, p, _) {
    var T = p.type;
    return T === Ds ? y(k, w, p.props.children, _, p.key) : w !== null && (w.elementType === T || typeof T == "object" && T !== null && T.$$typeof === Jr && bg(T) === w.type) ? (_ = o(w, p.props), _.ref = Ho(k, w, p), _.return = k, _) : (_ = Su(p.type, p.key, p.props, null, k.mode, _), _.ref = Ho(k, w, p), _.return = k, _);
  }
  function g(k, w, p, _) {
    return w === null || w.tag !== 4 || w.stateNode.containerInfo !== p.containerInfo || w.stateNode.implementation !== p.implementation ? (w = th(p, k.mode, _), w.return = k, w) : (w = o(w, p.children || []), w.return = k, w);
  }
  function y(k, w, p, _, T) {
    return w === null || w.tag !== 7 ? (w = Qi(p, k.mode, _, T), w.return = k, w) : (w = o(w, p), w.return = k, w);
  }
  function C(k, w, p) {
    if (typeof w == "string" && w !== "" || typeof w == "number") return w = eh("" + w, k.mode, p), w.return = k, w;
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case Ua:
          return p = Su(w.type, w.key, w.props, null, k.mode, p), p.ref = Ho(k, null, w), p.return = k, p;
        case Os:
          return w = th(w, k.mode, p), w.return = k, w;
        case Jr:
          var _ = w._init;
          return C(k, _(w._payload), p);
      }
      if (Zo(w) || Go(w)) return w = Qi(w, k.mode, p, null), w.return = k, w;
      qa(k, w);
    }
    return null;
  }
  function S(k, w, p, _) {
    var T = w !== null ? w.key : null;
    if (typeof p == "string" && p !== "" || typeof p == "number") return T !== null ? null : c(k, w, "" + p, _);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Ua:
          return p.key === T ? d(k, w, p, _) : null;
        case Os:
          return p.key === T ? g(k, w, p, _) : null;
        case Jr:
          return T = p._init, S(
            k,
            w,
            T(p._payload),
            _
          );
      }
      if (Zo(p) || Go(p)) return T !== null ? null : y(k, w, p, _, null);
      qa(k, p);
    }
    return null;
  }
  function x(k, w, p, _, T) {
    if (typeof _ == "string" && _ !== "" || typeof _ == "number") return k = k.get(p) || null, c(w, k, "" + _, T);
    if (typeof _ == "object" && _ !== null) {
      switch (_.$$typeof) {
        case Ua:
          return k = k.get(_.key === null ? p : _.key) || null, d(w, k, _, T);
        case Os:
          return k = k.get(_.key === null ? p : _.key) || null, g(w, k, _, T);
        case Jr:
          var F = _._init;
          return x(k, w, p, F(_._payload), T);
      }
      if (Zo(_) || Go(_)) return k = k.get(p) || null, y(w, k, _, T, null);
      qa(w, _);
    }
    return null;
  }
  function v(k, w, p, _) {
    for (var T = null, F = null, M = w, R = w = 0, G = null; M !== null && R < p.length; R++) {
      M.index > R ? (G = M, M = null) : G = M.sibling;
      var L = S(k, M, p[R], _);
      if (L === null) {
        M === null && (M = G);
        break;
      }
      t && M && L.alternate === null && e(k, M), w = l(L, w, R), F === null ? T = L : F.sibling = L, F = L, M = G;
    }
    if (R === p.length) return n(k, M), qe && Vi(k, R), T;
    if (M === null) {
      for (; R < p.length; R++) M = C(k, p[R], _), M !== null && (w = l(M, w, R), F === null ? T = M : F.sibling = M, F = M);
      return qe && Vi(k, R), T;
    }
    for (M = r(k, M); R < p.length; R++) G = x(M, k, R, p[R], _), G !== null && (t && G.alternate !== null && M.delete(G.key === null ? R : G.key), w = l(G, w, R), F === null ? T = G : F.sibling = G, F = G);
    return t && M.forEach(function(B) {
      return e(k, B);
    }), qe && Vi(k, R), T;
  }
  function E(k, w, p, _) {
    var T = Go(p);
    if (typeof T != "function") throw Error(K(150));
    if (p = T.call(p), p == null) throw Error(K(151));
    for (var F = T = null, M = w, R = w = 0, G = null, L = p.next(); M !== null && !L.done; R++, L = p.next()) {
      M.index > R ? (G = M, M = null) : G = M.sibling;
      var B = S(k, M, L.value, _);
      if (B === null) {
        M === null && (M = G);
        break;
      }
      t && M && B.alternate === null && e(k, M), w = l(B, w, R), F === null ? T = B : F.sibling = B, F = B, M = G;
    }
    if (L.done) return n(
      k,
      M
    ), qe && Vi(k, R), T;
    if (M === null) {
      for (; !L.done; R++, L = p.next()) L = C(k, L.value, _), L !== null && (w = l(L, w, R), F === null ? T = L : F.sibling = L, F = L);
      return qe && Vi(k, R), T;
    }
    for (M = r(k, M); !L.done; R++, L = p.next()) L = x(M, k, R, L.value, _), L !== null && (t && L.alternate !== null && M.delete(L.key === null ? R : L.key), w = l(L, w, R), F === null ? T = L : F.sibling = L, F = L);
    return t && M.forEach(function(H) {
      return e(k, H);
    }), qe && Vi(k, R), T;
  }
  function N(k, w, p, _) {
    if (typeof p == "object" && p !== null && p.type === Ds && p.key === null && (p = p.props.children), typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Ua:
          e: {
            for (var T = p.key, F = w; F !== null; ) {
              if (F.key === T) {
                if (T = p.type, T === Ds) {
                  if (F.tag === 7) {
                    n(k, F.sibling), w = o(F, p.props.children), w.return = k, k = w;
                    break e;
                  }
                } else if (F.elementType === T || typeof T == "object" && T !== null && T.$$typeof === Jr && bg(T) === F.type) {
                  n(k, F.sibling), w = o(F, p.props), w.ref = Ho(k, F, p), w.return = k, k = w;
                  break e;
                }
                n(k, F);
                break;
              } else e(k, F);
              F = F.sibling;
            }
            p.type === Ds ? (w = Qi(p.props.children, k.mode, _, p.key), w.return = k, k = w) : (_ = Su(p.type, p.key, p.props, null, k.mode, _), _.ref = Ho(k, w, p), _.return = k, k = _);
          }
          return a(k);
        case Os:
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
            w = th(p, k.mode, _), w.return = k, k = w;
          }
          return a(k);
        case Jr:
          return F = p._init, N(k, w, F(p._payload), _);
      }
      if (Zo(p)) return v(k, w, p, _);
      if (Go(p)) return E(k, w, p, _);
      qa(k, p);
    }
    return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p, w !== null && w.tag === 6 ? (n(k, w.sibling), w = o(w, p), w.return = k, k = w) : (n(k, w), w = eh(p, k.mode, _), w.return = k, k = w), a(k)) : n(k, w);
  }
  return N;
}
var to = P3(!0), T3 = P3(!1), Iu = yi(null), zu = null, Hs = null, B0 = null;
function V0() {
  B0 = Hs = zu = null;
}
function j0(t) {
  var e = Iu.current;
  Xe(Iu), t._currentValue = e;
}
function Wh(t, e, n) {
  for (; t !== null; ) {
    var r = t.alternate;
    if ((t.childLanes & e) !== e ? (t.childLanes |= e, r !== null && (r.childLanes |= e)) : r !== null && (r.childLanes & e) !== e && (r.childLanes |= e), t === n) break;
    t = t.return;
  }
}
function qs(t, e) {
  zu = t, B0 = Hs = null, t = t.dependencies, t !== null && t.firstContext !== null && (t.lanes & e && (nn = !0), t.firstContext = null);
}
function Fn(t) {
  var e = t._currentValue;
  if (B0 !== t) if (t = { context: t, memoizedValue: e, next: null }, Hs === null) {
    if (zu === null) throw Error(K(308));
    Hs = t, zu.dependencies = { lanes: 0, firstContext: t };
  } else Hs = Hs.next = t;
  return e;
}
var Ki = null;
function H0(t) {
  Ki === null ? Ki = [t] : Ki.push(t);
}
function N3(t, e, n, r) {
  var o = e.interleaved;
  return o === null ? (n.next = n, H0(e)) : (n.next = o.next, o.next = n), e.interleaved = n, Lr(t, r);
}
function Lr(t, e) {
  t.lanes |= e;
  var n = t.alternate;
  for (n !== null && (n.lanes |= e), n = t, t = t.return; t !== null; ) t.childLanes |= e, n = t.alternate, n !== null && (n.childLanes |= e), n = t, t = t.return;
  return n.tag === 3 ? n.stateNode : null;
}
var ei = !1;
function W0(t) {
  t.updateQueue = { baseState: t.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function R3(t, e) {
  t = t.updateQueue, e.updateQueue === t && (e.updateQueue = { baseState: t.baseState, firstBaseUpdate: t.firstBaseUpdate, lastBaseUpdate: t.lastBaseUpdate, shared: t.shared, effects: t.effects });
}
function Nr(t, e) {
  return { eventTime: t, lane: e, tag: 0, payload: null, callback: null, next: null };
}
function ui(t, e, n) {
  var r = t.updateQueue;
  if (r === null) return null;
  if (r = r.shared, Ne & 2) {
    var o = r.pending;
    return o === null ? e.next = e : (e.next = o.next, o.next = e), r.pending = e, Lr(t, n);
  }
  return o = r.interleaved, o === null ? (e.next = e, H0(r)) : (e.next = o.next, o.next = e), r.interleaved = e, Lr(t, n);
}
function pu(t, e, n) {
  if (e = e.updateQueue, e !== null && (e = e.shared, (n & 4194240) !== 0)) {
    var r = e.lanes;
    r &= t.pendingLanes, n |= r, e.lanes = n, R0(t, n);
  }
}
function Zg(t, e) {
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
function Gu(t, e, n, r) {
  var o = t.updateQueue;
  ei = !1;
  var l = o.firstBaseUpdate, a = o.lastBaseUpdate, c = o.shared.pending;
  if (c !== null) {
    o.shared.pending = null;
    var d = c, g = d.next;
    d.next = null, a === null ? l = g : a.next = g, a = d;
    var y = t.alternate;
    y !== null && (y = y.updateQueue, c = y.lastBaseUpdate, c !== a && (c === null ? y.firstBaseUpdate = g : c.next = g, y.lastBaseUpdate = d));
  }
  if (l !== null) {
    var C = o.baseState;
    a = 0, y = g = d = null, c = l;
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
              ei = !0;
          }
        }
        c.callback !== null && c.lane !== 0 && (t.flags |= 64, S = o.effects, S === null ? o.effects = [c] : S.push(c));
      } else x = { eventTime: x, lane: S, tag: c.tag, payload: c.payload, callback: c.callback, next: null }, y === null ? (g = y = x, d = C) : y = y.next = x, a |= S;
      if (c = c.next, c === null) {
        if (c = o.shared.pending, c === null) break;
        S = c, c = S.next, S.next = null, o.lastBaseUpdate = S, o.shared.pending = null;
      }
    } while (!0);
    if (y === null && (d = C), o.baseState = d, o.firstBaseUpdate = g, o.lastBaseUpdate = y, e = o.shared.interleaved, e !== null) {
      o = e;
      do
        a |= o.lane, o = o.next;
      while (o !== e);
    } else l === null && (o.shared.lanes = 0);
    Ji |= a, t.lanes = a, t.memoizedState = C;
  }
}
function Jg(t, e, n) {
  if (t = e.effects, e.effects = null, t !== null) for (e = 0; e < t.length; e++) {
    var r = t[e], o = r.callback;
    if (o !== null) {
      if (r.callback = null, r = n, typeof o != "function") throw Error(K(191, o));
      o.call(r);
    }
  }
}
var zl = {}, fr = yi(zl), kl = yi(zl), El = yi(zl);
function Yi(t) {
  if (t === zl) throw Error(K(174));
  return t;
}
function K0(t, e) {
  switch (He(El, e), He(kl, t), He(fr, zl), t = e.nodeType, t) {
    case 9:
    case 11:
      e = (e = e.documentElement) ? e.namespaceURI : kh(null, "");
      break;
    default:
      t = t === 8 ? e.parentNode : e, e = t.namespaceURI || null, t = t.tagName, e = kh(e, t);
  }
  Xe(fr), He(fr, e);
}
function no() {
  Xe(fr), Xe(kl), Xe(El);
}
function F3(t) {
  Yi(El.current);
  var e = Yi(fr.current), n = kh(e, t.type);
  e !== n && (He(kl, t), He(fr, n));
}
function Y0(t) {
  kl.current === t && (Xe(fr), Xe(kl));
}
var et = yi(0);
function Uu(t) {
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
var $f = [];
function X0() {
  for (var t = 0; t < $f.length; t++) $f[t]._workInProgressVersionPrimary = null;
  $f.length = 0;
}
var gu = Or.ReactCurrentDispatcher, Qf = Or.ReactCurrentBatchConfig, Zi = 0, tt = null, yt = null, Et = null, Bu = !1, al = !1, Pl = 0, w6 = 0;
function zt() {
  throw Error(K(321));
}
function $0(t, e) {
  if (e === null) return !1;
  for (var n = 0; n < e.length && n < t.length; n++) if (!qn(t[n], e[n])) return !1;
  return !0;
}
function Q0(t, e, n, r, o, l) {
  if (Zi = l, tt = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, gu.current = t === null || t.memoizedState === null ? E6 : P6, t = n(r, o), al) {
    l = 0;
    do {
      if (al = !1, Pl = 0, 25 <= l) throw Error(K(301));
      l += 1, Et = yt = null, e.updateQueue = null, gu.current = T6, t = n(r, o);
    } while (al);
  }
  if (gu.current = Vu, e = yt !== null && yt.next !== null, Zi = 0, Et = yt = tt = null, Bu = !1, e) throw Error(K(300));
  return t;
}
function q0() {
  var t = Pl !== 0;
  return Pl = 0, t;
}
function ar() {
  var t = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Et === null ? tt.memoizedState = Et = t : Et = Et.next = t, Et;
}
function Mn() {
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
function Tl(t, e) {
  return typeof e == "function" ? e(t) : e;
}
function qf(t) {
  var e = Mn(), n = e.queue;
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
    var c = a = null, d = null, g = l;
    do {
      var y = g.lane;
      if ((Zi & y) === y) d !== null && (d = d.next = { lane: 0, action: g.action, hasEagerState: g.hasEagerState, eagerState: g.eagerState, next: null }), r = g.hasEagerState ? g.eagerState : t(r, g.action);
      else {
        var C = {
          lane: y,
          action: g.action,
          hasEagerState: g.hasEagerState,
          eagerState: g.eagerState,
          next: null
        };
        d === null ? (c = d = C, a = r) : d = d.next = C, tt.lanes |= y, Ji |= y;
      }
      g = g.next;
    } while (g !== null && g !== l);
    d === null ? a = r : d.next = c, qn(r, e.memoizedState) || (nn = !0), e.memoizedState = r, e.baseState = a, e.baseQueue = d, n.lastRenderedState = r;
  }
  if (t = n.interleaved, t !== null) {
    o = t;
    do
      l = o.lane, tt.lanes |= l, Ji |= l, o = o.next;
    while (o !== t);
  } else o === null && (n.lanes = 0);
  return [e.memoizedState, n.dispatch];
}
function bf(t) {
  var e = Mn(), n = e.queue;
  if (n === null) throw Error(K(311));
  n.lastRenderedReducer = t;
  var r = n.dispatch, o = n.pending, l = e.memoizedState;
  if (o !== null) {
    n.pending = null;
    var a = o = o.next;
    do
      l = t(l, a.action), a = a.next;
    while (a !== o);
    qn(l, e.memoizedState) || (nn = !0), e.memoizedState = l, e.baseQueue === null && (e.baseState = l), n.lastRenderedState = l;
  }
  return [l, r];
}
function M3() {
}
function L3(t, e) {
  var n = tt, r = Mn(), o = e(), l = !qn(r.memoizedState, o);
  if (l && (r.memoizedState = o, nn = !0), r = r.queue, b0(D3.bind(null, n, r, t), [t]), r.getSnapshot !== e || l || Et !== null && Et.memoizedState.tag & 1) {
    if (n.flags |= 2048, Nl(9, O3.bind(null, n, r, o, e), void 0, null), Pt === null) throw Error(K(349));
    Zi & 30 || A3(n, e, o);
  }
  return o;
}
function A3(t, e, n) {
  t.flags |= 16384, t = { getSnapshot: e, value: n }, e = tt.updateQueue, e === null ? (e = { lastEffect: null, stores: null }, tt.updateQueue = e, e.stores = [t]) : (n = e.stores, n === null ? e.stores = [t] : n.push(t));
}
function O3(t, e, n, r) {
  e.value = n, e.getSnapshot = r, I3(e) && z3(t);
}
function D3(t, e, n) {
  return n(function() {
    I3(e) && z3(t);
  });
}
function I3(t) {
  var e = t.getSnapshot;
  t = t.value;
  try {
    var n = e();
    return !qn(t, n);
  } catch {
    return !0;
  }
}
function z3(t) {
  var e = Lr(t, 1);
  e !== null && $n(e, t, 1, -1);
}
function e2(t) {
  var e = ar();
  return typeof t == "function" && (t = t()), e.memoizedState = e.baseState = t, t = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Tl, lastRenderedState: t }, e.queue = t, t = t.dispatch = k6.bind(null, tt, t), [e.memoizedState, t];
}
function Nl(t, e, n, r) {
  return t = { tag: t, create: e, destroy: n, deps: r, next: null }, e = tt.updateQueue, e === null ? (e = { lastEffect: null, stores: null }, tt.updateQueue = e, e.lastEffect = t.next = t) : (n = e.lastEffect, n === null ? e.lastEffect = t.next = t : (r = n.next, n.next = t, t.next = r, e.lastEffect = t)), t;
}
function G3() {
  return Mn().memoizedState;
}
function mu(t, e, n, r) {
  var o = ar();
  tt.flags |= t, o.memoizedState = Nl(1 | e, n, void 0, r === void 0 ? null : r);
}
function oc(t, e, n, r) {
  var o = Mn();
  r = r === void 0 ? null : r;
  var l = void 0;
  if (yt !== null) {
    var a = yt.memoizedState;
    if (l = a.destroy, r !== null && $0(r, a.deps)) {
      o.memoizedState = Nl(e, n, l, r);
      return;
    }
  }
  tt.flags |= t, o.memoizedState = Nl(1 | e, n, l, r);
}
function t2(t, e) {
  return mu(8390656, 8, t, e);
}
function b0(t, e) {
  return oc(2048, 8, t, e);
}
function U3(t, e) {
  return oc(4, 2, t, e);
}
function B3(t, e) {
  return oc(4, 4, t, e);
}
function V3(t, e) {
  if (typeof e == "function") return t = t(), e(t), function() {
    e(null);
  };
  if (e != null) return t = t(), e.current = t, function() {
    e.current = null;
  };
}
function j3(t, e, n) {
  return n = n != null ? n.concat([t]) : null, oc(4, 4, V3.bind(null, e, t), n);
}
function Z0() {
}
function H3(t, e) {
  var n = Mn();
  e = e === void 0 ? null : e;
  var r = n.memoizedState;
  return r !== null && e !== null && $0(e, r[1]) ? r[0] : (n.memoizedState = [t, e], t);
}
function W3(t, e) {
  var n = Mn();
  e = e === void 0 ? null : e;
  var r = n.memoizedState;
  return r !== null && e !== null && $0(e, r[1]) ? r[0] : (t = t(), n.memoizedState = [t, e], t);
}
function K3(t, e, n) {
  return Zi & 21 ? (qn(n, e) || (n = qm(), tt.lanes |= n, Ji |= n, t.baseState = !0), e) : (t.baseState && (t.baseState = !1, nn = !0), t.memoizedState = n);
}
function x6(t, e) {
  var n = Ie;
  Ie = n !== 0 && 4 > n ? n : 4, t(!0);
  var r = Qf.transition;
  Qf.transition = {};
  try {
    t(!1), e();
  } finally {
    Ie = n, Qf.transition = r;
  }
}
function Y3() {
  return Mn().memoizedState;
}
function C6(t, e, n) {
  var r = di(t);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, X3(t)) $3(e, n);
  else if (n = N3(t, e, n, r), n !== null) {
    var o = Kt();
    $n(n, t, r, o), Q3(n, e, r);
  }
}
function k6(t, e, n) {
  var r = di(t), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (X3(t)) $3(e, o);
  else {
    var l = t.alternate;
    if (t.lanes === 0 && (l === null || l.lanes === 0) && (l = e.lastRenderedReducer, l !== null)) try {
      var a = e.lastRenderedState, c = l(a, n);
      if (o.hasEagerState = !0, o.eagerState = c, qn(c, a)) {
        var d = e.interleaved;
        d === null ? (o.next = o, H0(e)) : (o.next = d.next, d.next = o), e.interleaved = o;
        return;
      }
    } catch {
    } finally {
    }
    n = N3(t, e, o, r), n !== null && (o = Kt(), $n(n, t, r, o), Q3(n, e, r));
  }
}
function X3(t) {
  var e = t.alternate;
  return t === tt || e !== null && e === tt;
}
function $3(t, e) {
  al = Bu = !0;
  var n = t.pending;
  n === null ? e.next = e : (e.next = n.next, n.next = e), t.pending = e;
}
function Q3(t, e, n) {
  if (n & 4194240) {
    var r = e.lanes;
    r &= t.pendingLanes, n |= r, e.lanes = n, R0(t, n);
  }
}
var Vu = { readContext: Fn, useCallback: zt, useContext: zt, useEffect: zt, useImperativeHandle: zt, useInsertionEffect: zt, useLayoutEffect: zt, useMemo: zt, useReducer: zt, useRef: zt, useState: zt, useDebugValue: zt, useDeferredValue: zt, useTransition: zt, useMutableSource: zt, useSyncExternalStore: zt, useId: zt, unstable_isNewReconciler: !1 }, E6 = { readContext: Fn, useCallback: function(t, e) {
  return ar().memoizedState = [t, e === void 0 ? null : e], t;
}, useContext: Fn, useEffect: t2, useImperativeHandle: function(t, e, n) {
  return n = n != null ? n.concat([t]) : null, mu(
    4194308,
    4,
    V3.bind(null, e, t),
    n
  );
}, useLayoutEffect: function(t, e) {
  return mu(4194308, 4, t, e);
}, useInsertionEffect: function(t, e) {
  return mu(4, 2, t, e);
}, useMemo: function(t, e) {
  var n = ar();
  return e = e === void 0 ? null : e, t = t(), n.memoizedState = [t, e], t;
}, useReducer: function(t, e, n) {
  var r = ar();
  return e = n !== void 0 ? n(e) : e, r.memoizedState = r.baseState = e, t = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: t, lastRenderedState: e }, r.queue = t, t = t.dispatch = C6.bind(null, tt, t), [r.memoizedState, t];
}, useRef: function(t) {
  var e = ar();
  return t = { current: t }, e.memoizedState = t;
}, useState: e2, useDebugValue: Z0, useDeferredValue: function(t) {
  return ar().memoizedState = t;
}, useTransition: function() {
  var t = e2(!1), e = t[0];
  return t = x6.bind(null, t[1]), ar().memoizedState = t, [e, t];
}, useMutableSource: function() {
}, useSyncExternalStore: function(t, e, n) {
  var r = tt, o = ar();
  if (qe) {
    if (n === void 0) throw Error(K(407));
    n = n();
  } else {
    if (n = e(), Pt === null) throw Error(K(349));
    Zi & 30 || A3(r, e, n);
  }
  o.memoizedState = n;
  var l = { value: n, getSnapshot: e };
  return o.queue = l, t2(D3.bind(
    null,
    r,
    l,
    t
  ), [t]), r.flags |= 2048, Nl(9, O3.bind(null, r, l, n, e), void 0, null), n;
}, useId: function() {
  var t = ar(), e = Pt.identifierPrefix;
  if (qe) {
    var n = Tr, r = Pr;
    n = (r & ~(1 << 32 - Xn(r) - 1)).toString(32) + n, e = ":" + e + "R" + n, n = Pl++, 0 < n && (e += "H" + n.toString(32)), e += ":";
  } else n = w6++, e = ":" + e + "r" + n.toString(32) + ":";
  return t.memoizedState = e;
}, unstable_isNewReconciler: !1 }, P6 = {
  readContext: Fn,
  useCallback: H3,
  useContext: Fn,
  useEffect: b0,
  useImperativeHandle: j3,
  useInsertionEffect: U3,
  useLayoutEffect: B3,
  useMemo: W3,
  useReducer: qf,
  useRef: G3,
  useState: function() {
    return qf(Tl);
  },
  useDebugValue: Z0,
  useDeferredValue: function(t) {
    var e = Mn();
    return K3(e, yt.memoizedState, t);
  },
  useTransition: function() {
    var t = qf(Tl)[0], e = Mn().memoizedState;
    return [t, e];
  },
  useMutableSource: M3,
  useSyncExternalStore: L3,
  useId: Y3,
  unstable_isNewReconciler: !1
}, T6 = { readContext: Fn, useCallback: H3, useContext: Fn, useEffect: b0, useImperativeHandle: j3, useInsertionEffect: U3, useLayoutEffect: B3, useMemo: W3, useReducer: bf, useRef: G3, useState: function() {
  return bf(Tl);
}, useDebugValue: Z0, useDeferredValue: function(t) {
  var e = Mn();
  return yt === null ? e.memoizedState = t : K3(e, yt.memoizedState, t);
}, useTransition: function() {
  var t = bf(Tl)[0], e = Mn().memoizedState;
  return [t, e];
}, useMutableSource: M3, useSyncExternalStore: L3, useId: Y3, unstable_isNewReconciler: !1 };
function Wn(t, e) {
  if (t && t.defaultProps) {
    e = nt({}, e), t = t.defaultProps;
    for (var n in t) e[n] === void 0 && (e[n] = t[n]);
    return e;
  }
  return e;
}
function Kh(t, e, n, r) {
  e = t.memoizedState, n = n(r, e), n = n == null ? e : nt({}, e, n), t.memoizedState = n, t.lanes === 0 && (t.updateQueue.baseState = n);
}
var lc = { isMounted: function(t) {
  return (t = t._reactInternals) ? ns(t) === t : !1;
}, enqueueSetState: function(t, e, n) {
  t = t._reactInternals;
  var r = Kt(), o = di(t), l = Nr(r, o);
  l.payload = e, n != null && (l.callback = n), e = ui(t, l, o), e !== null && ($n(e, t, o, r), pu(e, t, o));
}, enqueueReplaceState: function(t, e, n) {
  t = t._reactInternals;
  var r = Kt(), o = di(t), l = Nr(r, o);
  l.tag = 1, l.payload = e, n != null && (l.callback = n), e = ui(t, l, o), e !== null && ($n(e, t, o, r), pu(e, t, o));
}, enqueueForceUpdate: function(t, e) {
  t = t._reactInternals;
  var n = Kt(), r = di(t), o = Nr(n, r);
  o.tag = 2, e != null && (o.callback = e), e = ui(t, o, r), e !== null && ($n(e, t, r, n), pu(e, t, r));
} };
function n2(t, e, n, r, o, l, a) {
  return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(r, l, a) : e.prototype && e.prototype.isPureReactComponent ? !Sl(n, r) || !Sl(o, l) : !0;
}
function q3(t, e, n) {
  var r = !1, o = pi, l = e.contextType;
  return typeof l == "object" && l !== null ? l = Fn(l) : (o = sn(e) ? qi : Bt.current, r = e.contextTypes, l = (r = r != null) ? Js(t, o) : pi), e = new e(n, l), t.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null, e.updater = lc, t.stateNode = e, e._reactInternals = t, r && (t = t.stateNode, t.__reactInternalMemoizedUnmaskedChildContext = o, t.__reactInternalMemoizedMaskedChildContext = l), e;
}
function r2(t, e, n, r) {
  t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(n, r), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(n, r), e.state !== t && lc.enqueueReplaceState(e, e.state, null);
}
function Yh(t, e, n, r) {
  var o = t.stateNode;
  o.props = n, o.state = t.memoizedState, o.refs = {}, W0(t);
  var l = e.contextType;
  typeof l == "object" && l !== null ? o.context = Fn(l) : (l = sn(e) ? qi : Bt.current, o.context = Js(t, l)), o.state = t.memoizedState, l = e.getDerivedStateFromProps, typeof l == "function" && (Kh(t, e, l, n), o.state = t.memoizedState), typeof e.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (e = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), e !== o.state && lc.enqueueReplaceState(o, o.state, null), Gu(t, n, o, r), o.state = t.memoizedState), typeof o.componentDidMount == "function" && (t.flags |= 4194308);
}
function ro(t, e) {
  try {
    var n = "", r = e;
    do
      n += tv(r), r = r.return;
    while (r);
    var o = n;
  } catch (l) {
    o = `
Error generating stack: ` + l.message + `
` + l.stack;
  }
  return { value: t, source: e, stack: o, digest: null };
}
function Zf(t, e, n) {
  return { value: t, source: null, stack: n ?? null, digest: e ?? null };
}
function Xh(t, e) {
  try {
    console.error(e.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var N6 = typeof WeakMap == "function" ? WeakMap : Map;
function b3(t, e, n) {
  n = Nr(-1, n), n.tag = 3, n.payload = { element: null };
  var r = e.value;
  return n.callback = function() {
    Hu || (Hu = !0, r0 = r), Xh(t, e);
  }, n;
}
function Z3(t, e, n) {
  n = Nr(-1, n), n.tag = 3;
  var r = t.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = e.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      Xh(t, e);
    };
  }
  var l = t.stateNode;
  return l !== null && typeof l.componentDidCatch == "function" && (n.callback = function() {
    Xh(t, e), typeof r != "function" && (ci === null ? ci = /* @__PURE__ */ new Set([this]) : ci.add(this));
    var a = e.stack;
    this.componentDidCatch(e.value, { componentStack: a !== null ? a : "" });
  }), n;
}
function i2(t, e, n) {
  var r = t.pingCache;
  if (r === null) {
    r = t.pingCache = new N6();
    var o = /* @__PURE__ */ new Set();
    r.set(e, o);
  } else o = r.get(e), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(e, o));
  o.has(n) || (o.add(n), t = j6.bind(null, t, e, n), e.then(t, t));
}
function s2(t) {
  do {
    var e;
    if ((e = t.tag === 13) && (e = t.memoizedState, e = e !== null ? e.dehydrated !== null : !0), e) return t;
    t = t.return;
  } while (t !== null);
  return null;
}
function o2(t, e, n, r, o) {
  return t.mode & 1 ? (t.flags |= 65536, t.lanes = o, t) : (t === e ? t.flags |= 65536 : (t.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (e = Nr(-1, 1), e.tag = 2, ui(n, e, 1))), n.lanes |= 1), t);
}
var R6 = Or.ReactCurrentOwner, nn = !1;
function Ht(t, e, n, r) {
  e.child = t === null ? T3(e, null, n, r) : to(e, t.child, n, r);
}
function l2(t, e, n, r, o) {
  n = n.render;
  var l = e.ref;
  return qs(e, o), r = Q0(t, e, n, r, l, o), n = q0(), t !== null && !nn ? (e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~o, Ar(t, e, o)) : (qe && n && z0(e), e.flags |= 1, Ht(t, e, r, o), e.child);
}
function a2(t, e, n, r, o) {
  if (t === null) {
    var l = n.type;
    return typeof l == "function" && !o1(l) && l.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (e.tag = 15, e.type = l, J3(t, e, l, r, o)) : (t = Su(n.type, null, r, e, e.mode, o), t.ref = e.ref, t.return = e, e.child = t);
  }
  if (l = t.child, !(t.lanes & o)) {
    var a = l.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Sl, n(a, r) && t.ref === e.ref) return Ar(t, e, o);
  }
  return e.flags |= 1, t = fi(l, r), t.ref = e.ref, t.return = e, e.child = t;
}
function J3(t, e, n, r, o) {
  if (t !== null) {
    var l = t.memoizedProps;
    if (Sl(l, r) && t.ref === e.ref) if (nn = !1, e.pendingProps = r = l, (t.lanes & o) !== 0) t.flags & 131072 && (nn = !0);
    else return e.lanes = t.lanes, Ar(t, e, o);
  }
  return $h(t, e, n, r, o);
}
function e4(t, e, n) {
  var r = e.pendingProps, o = r.children, l = t !== null ? t.memoizedState : null;
  if (r.mode === "hidden") if (!(e.mode & 1)) e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, He(Ks, dn), dn |= n;
  else {
    if (!(n & 1073741824)) return t = l !== null ? l.baseLanes | n : n, e.lanes = e.childLanes = 1073741824, e.memoizedState = { baseLanes: t, cachePool: null, transitions: null }, e.updateQueue = null, He(Ks, dn), dn |= t, null;
    e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = l !== null ? l.baseLanes : n, He(Ks, dn), dn |= r;
  }
  else l !== null ? (r = l.baseLanes | n, e.memoizedState = null) : r = n, He(Ks, dn), dn |= r;
  return Ht(t, e, o, n), e.child;
}
function t4(t, e) {
  var n = e.ref;
  (t === null && n !== null || t !== null && t.ref !== n) && (e.flags |= 512, e.flags |= 2097152);
}
function $h(t, e, n, r, o) {
  var l = sn(n) ? qi : Bt.current;
  return l = Js(e, l), qs(e, o), n = Q0(t, e, n, r, l, o), r = q0(), t !== null && !nn ? (e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~o, Ar(t, e, o)) : (qe && r && z0(e), e.flags |= 1, Ht(t, e, n, o), e.child);
}
function u2(t, e, n, r, o) {
  if (sn(n)) {
    var l = !0;
    Au(e);
  } else l = !1;
  if (qs(e, o), e.stateNode === null) yu(t, e), q3(e, n, r), Yh(e, n, r, o), r = !0;
  else if (t === null) {
    var a = e.stateNode, c = e.memoizedProps;
    a.props = c;
    var d = a.context, g = n.contextType;
    typeof g == "object" && g !== null ? g = Fn(g) : (g = sn(n) ? qi : Bt.current, g = Js(e, g));
    var y = n.getDerivedStateFromProps, C = typeof y == "function" || typeof a.getSnapshotBeforeUpdate == "function";
    C || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (c !== r || d !== g) && r2(e, a, r, g), ei = !1;
    var S = e.memoizedState;
    a.state = S, Gu(e, r, a, o), d = e.memoizedState, c !== r || S !== d || rn.current || ei ? (typeof y == "function" && (Kh(e, n, y, r), d = e.memoizedState), (c = ei || n2(e, n, c, r, S, d, g)) ? (C || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = r, e.memoizedState = d), a.props = r, a.state = d, a.context = g, r = c) : (typeof a.componentDidMount == "function" && (e.flags |= 4194308), r = !1);
  } else {
    a = e.stateNode, R3(t, e), c = e.memoizedProps, g = e.type === e.elementType ? c : Wn(e.type, c), a.props = g, C = e.pendingProps, S = a.context, d = n.contextType, typeof d == "object" && d !== null ? d = Fn(d) : (d = sn(n) ? qi : Bt.current, d = Js(e, d));
    var x = n.getDerivedStateFromProps;
    (y = typeof x == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (c !== C || S !== d) && r2(e, a, r, d), ei = !1, S = e.memoizedState, a.state = S, Gu(e, r, a, o);
    var v = e.memoizedState;
    c !== C || S !== v || rn.current || ei ? (typeof x == "function" && (Kh(e, n, x, r), v = e.memoizedState), (g = ei || n2(e, n, g, r, S, v, d) || !1) ? (y || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(r, v, d), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(r, v, d)), typeof a.componentDidUpdate == "function" && (e.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || c === t.memoizedProps && S === t.memoizedState || (e.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || c === t.memoizedProps && S === t.memoizedState || (e.flags |= 1024), e.memoizedProps = r, e.memoizedState = v), a.props = r, a.state = v, a.context = d, r = g) : (typeof a.componentDidUpdate != "function" || c === t.memoizedProps && S === t.memoizedState || (e.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || c === t.memoizedProps && S === t.memoizedState || (e.flags |= 1024), r = !1);
  }
  return Qh(t, e, n, r, l, o);
}
function Qh(t, e, n, r, o, l) {
  t4(t, e);
  var a = (e.flags & 128) !== 0;
  if (!r && !a) return o && $g(e, n, !1), Ar(t, e, l);
  r = e.stateNode, R6.current = e;
  var c = a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return e.flags |= 1, t !== null && a ? (e.child = to(e, t.child, null, l), e.child = to(e, null, c, l)) : Ht(t, e, c, l), e.memoizedState = r.state, o && $g(e, n, !0), e.child;
}
function n4(t) {
  var e = t.stateNode;
  e.pendingContext ? Xg(t, e.pendingContext, e.pendingContext !== e.context) : e.context && Xg(t, e.context, !1), K0(t, e.containerInfo);
}
function c2(t, e, n, r, o) {
  return eo(), U0(o), e.flags |= 256, Ht(t, e, n, r), e.child;
}
var qh = { dehydrated: null, treeContext: null, retryLane: 0 };
function bh(t) {
  return { baseLanes: t, cachePool: null, transitions: null };
}
function r4(t, e, n) {
  var r = e.pendingProps, o = et.current, l = !1, a = (e.flags & 128) !== 0, c;
  if ((c = a) || (c = t !== null && t.memoizedState === null ? !1 : (o & 2) !== 0), c ? (l = !0, e.flags &= -129) : (t === null || t.memoizedState !== null) && (o |= 1), He(et, o & 1), t === null)
    return Hh(e), t = e.memoizedState, t !== null && (t = t.dehydrated, t !== null) ? (e.mode & 1 ? t.data === "$!" ? e.lanes = 8 : e.lanes = 1073741824 : e.lanes = 1, null) : (a = r.children, t = r.fallback, l ? (r = e.mode, l = e.child, a = { mode: "hidden", children: a }, !(r & 1) && l !== null ? (l.childLanes = 0, l.pendingProps = a) : l = cc(a, r, 0, null), t = Qi(t, r, n, null), l.return = e, t.return = e, l.sibling = t, e.child = l, e.child.memoizedState = bh(n), e.memoizedState = qh, t) : J0(e, a));
  if (o = t.memoizedState, o !== null && (c = o.dehydrated, c !== null)) return F6(t, e, a, r, c, o, n);
  if (l) {
    l = r.fallback, a = e.mode, o = t.child, c = o.sibling;
    var d = { mode: "hidden", children: r.children };
    return !(a & 1) && e.child !== o ? (r = e.child, r.childLanes = 0, r.pendingProps = d, e.deletions = null) : (r = fi(o, d), r.subtreeFlags = o.subtreeFlags & 14680064), c !== null ? l = fi(c, l) : (l = Qi(l, a, n, null), l.flags |= 2), l.return = e, r.return = e, r.sibling = l, e.child = r, r = l, l = e.child, a = t.child.memoizedState, a = a === null ? bh(n) : { baseLanes: a.baseLanes | n, cachePool: null, transitions: a.transitions }, l.memoizedState = a, l.childLanes = t.childLanes & ~n, e.memoizedState = qh, r;
  }
  return l = t.child, t = l.sibling, r = fi(l, { mode: "visible", children: r.children }), !(e.mode & 1) && (r.lanes = n), r.return = e, r.sibling = null, t !== null && (n = e.deletions, n === null ? (e.deletions = [t], e.flags |= 16) : n.push(t)), e.child = r, e.memoizedState = null, r;
}
function J0(t, e) {
  return e = cc({ mode: "visible", children: e }, t.mode, 0, null), e.return = t, t.child = e;
}
function ba(t, e, n, r) {
  return r !== null && U0(r), to(e, t.child, null, n), t = J0(e, e.pendingProps.children), t.flags |= 2, e.memoizedState = null, t;
}
function F6(t, e, n, r, o, l, a) {
  if (n)
    return e.flags & 256 ? (e.flags &= -257, r = Zf(Error(K(422))), ba(t, e, a, r)) : e.memoizedState !== null ? (e.child = t.child, e.flags |= 128, null) : (l = r.fallback, o = e.mode, r = cc({ mode: "visible", children: r.children }, o, 0, null), l = Qi(l, o, a, null), l.flags |= 2, r.return = e, l.return = e, r.sibling = l, e.child = r, e.mode & 1 && to(e, t.child, null, a), e.child.memoizedState = bh(a), e.memoizedState = qh, l);
  if (!(e.mode & 1)) return ba(t, e, a, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r) var c = r.dgst;
    return r = c, l = Error(K(419)), r = Zf(l, r, void 0), ba(t, e, a, r);
  }
  if (c = (a & t.childLanes) !== 0, nn || c) {
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
      o = o & (r.suspendedLanes | a) ? 0 : o, o !== 0 && o !== l.retryLane && (l.retryLane = o, Lr(t, o), $n(r, t, o, -1));
    }
    return s1(), r = Zf(Error(K(421))), ba(t, e, a, r);
  }
  return o.data === "$?" ? (e.flags |= 128, e.child = t.child, e = H6.bind(null, t), o._reactRetry = e, null) : (t = l.treeContext, fn = ai(o.nextSibling), hn = e, qe = !0, Yn = null, t !== null && (Pn[Tn++] = Pr, Pn[Tn++] = Tr, Pn[Tn++] = bi, Pr = t.id, Tr = t.overflow, bi = e), e = J0(e, r.children), e.flags |= 4096, e);
}
function d2(t, e, n) {
  t.lanes |= e;
  var r = t.alternate;
  r !== null && (r.lanes |= e), Wh(t.return, e, n);
}
function Jf(t, e, n, r, o) {
  var l = t.memoizedState;
  l === null ? t.memoizedState = { isBackwards: e, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (l.isBackwards = e, l.rendering = null, l.renderingStartTime = 0, l.last = r, l.tail = n, l.tailMode = o);
}
function i4(t, e, n) {
  var r = e.pendingProps, o = r.revealOrder, l = r.tail;
  if (Ht(t, e, r.children, n), r = et.current, r & 2) r = r & 1 | 2, e.flags |= 128;
  else {
    if (t !== null && t.flags & 128) e: for (t = e.child; t !== null; ) {
      if (t.tag === 13) t.memoizedState !== null && d2(t, n, e);
      else if (t.tag === 19) d2(t, n, e);
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
      for (n = e.child, o = null; n !== null; ) t = n.alternate, t !== null && Uu(t) === null && (o = n), n = n.sibling;
      n = o, n === null ? (o = e.child, e.child = null) : (o = n.sibling, n.sibling = null), Jf(e, !1, o, n, l);
      break;
    case "backwards":
      for (n = null, o = e.child, e.child = null; o !== null; ) {
        if (t = o.alternate, t !== null && Uu(t) === null) {
          e.child = o;
          break;
        }
        t = o.sibling, o.sibling = n, n = o, o = t;
      }
      Jf(e, !0, n, null, l);
      break;
    case "together":
      Jf(e, !1, null, null, void 0);
      break;
    default:
      e.memoizedState = null;
  }
  return e.child;
}
function yu(t, e) {
  !(e.mode & 1) && t !== null && (t.alternate = null, e.alternate = null, e.flags |= 2);
}
function Ar(t, e, n) {
  if (t !== null && (e.dependencies = t.dependencies), Ji |= e.lanes, !(n & e.childLanes)) return null;
  if (t !== null && e.child !== t.child) throw Error(K(153));
  if (e.child !== null) {
    for (t = e.child, n = fi(t, t.pendingProps), e.child = n, n.return = e; t.sibling !== null; ) t = t.sibling, n = n.sibling = fi(t, t.pendingProps), n.return = e;
    n.sibling = null;
  }
  return e.child;
}
function M6(t, e, n) {
  switch (e.tag) {
    case 3:
      n4(e), eo();
      break;
    case 5:
      F3(e);
      break;
    case 1:
      sn(e.type) && Au(e);
      break;
    case 4:
      K0(e, e.stateNode.containerInfo);
      break;
    case 10:
      var r = e.type._context, o = e.memoizedProps.value;
      He(Iu, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = e.memoizedState, r !== null)
        return r.dehydrated !== null ? (He(et, et.current & 1), e.flags |= 128, null) : n & e.child.childLanes ? r4(t, e, n) : (He(et, et.current & 1), t = Ar(t, e, n), t !== null ? t.sibling : null);
      He(et, et.current & 1);
      break;
    case 19:
      if (r = (n & e.childLanes) !== 0, t.flags & 128) {
        if (r) return i4(t, e, n);
        e.flags |= 128;
      }
      if (o = e.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), He(et, et.current), r) break;
      return null;
    case 22:
    case 23:
      return e.lanes = 0, e4(t, e, n);
  }
  return Ar(t, e, n);
}
var s4, Zh, o4, l4;
s4 = function(t, e) {
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
Zh = function() {
};
o4 = function(t, e, n, r) {
  var o = t.memoizedProps;
  if (o !== r) {
    t = e.stateNode, Yi(fr.current);
    var l = null;
    switch (n) {
      case "input":
        o = Sh(t, o), r = Sh(t, r), l = [];
        break;
      case "select":
        o = nt({}, o, { value: void 0 }), r = nt({}, r, { value: void 0 }), l = [];
        break;
      case "textarea":
        o = Ch(t, o), r = Ch(t, r), l = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (t.onclick = Mu);
    }
    Eh(n, r);
    var a;
    n = null;
    for (g in o) if (!r.hasOwnProperty(g) && o.hasOwnProperty(g) && o[g] != null) if (g === "style") {
      var c = o[g];
      for (a in c) c.hasOwnProperty(a) && (n || (n = {}), n[a] = "");
    } else g !== "dangerouslySetInnerHTML" && g !== "children" && g !== "suppressContentEditableWarning" && g !== "suppressHydrationWarning" && g !== "autoFocus" && (hl.hasOwnProperty(g) ? l || (l = []) : (l = l || []).push(g, null));
    for (g in r) {
      var d = r[g];
      if (c = o != null ? o[g] : void 0, r.hasOwnProperty(g) && d !== c && (d != null || c != null)) if (g === "style") if (c) {
        for (a in c) !c.hasOwnProperty(a) || d && d.hasOwnProperty(a) || (n || (n = {}), n[a] = "");
        for (a in d) d.hasOwnProperty(a) && c[a] !== d[a] && (n || (n = {}), n[a] = d[a]);
      } else n || (l || (l = []), l.push(
        g,
        n
      )), n = d;
      else g === "dangerouslySetInnerHTML" ? (d = d ? d.__html : void 0, c = c ? c.__html : void 0, d != null && c !== d && (l = l || []).push(g, d)) : g === "children" ? typeof d != "string" && typeof d != "number" || (l = l || []).push(g, "" + d) : g !== "suppressContentEditableWarning" && g !== "suppressHydrationWarning" && (hl.hasOwnProperty(g) ? (d != null && g === "onScroll" && Ye("scroll", t), l || c === d || (l = [])) : (l = l || []).push(g, d));
    }
    n && (l = l || []).push("style", n);
    var g = l;
    (e.updateQueue = g) && (e.flags |= 4);
  }
};
l4 = function(t, e, n, r) {
  n !== r && (e.flags |= 4);
};
function Wo(t, e) {
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
function L6(t, e, n) {
  var r = e.pendingProps;
  switch (G0(e), e.tag) {
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
      return sn(e.type) && Lu(), Gt(e), null;
    case 3:
      return r = e.stateNode, no(), Xe(rn), Xe(Bt), X0(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (t === null || t.child === null) && (Qa(e) ? e.flags |= 4 : t === null || t.memoizedState.isDehydrated && !(e.flags & 256) || (e.flags |= 1024, Yn !== null && (o0(Yn), Yn = null))), Zh(t, e), Gt(e), null;
    case 5:
      Y0(e);
      var o = Yi(El.current);
      if (n = e.type, t !== null && e.stateNode != null) o4(t, e, n, r, o), t.ref !== e.ref && (e.flags |= 512, e.flags |= 2097152);
      else {
        if (!r) {
          if (e.stateNode === null) throw Error(K(166));
          return Gt(e), null;
        }
        if (t = Yi(fr.current), Qa(e)) {
          r = e.stateNode, n = e.type;
          var l = e.memoizedProps;
          switch (r[ur] = e, r[Cl] = l, t = (e.mode & 1) !== 0, n) {
            case "dialog":
              Ye("cancel", r), Ye("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              Ye("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < el.length; o++) Ye(el[o], r);
              break;
            case "source":
              Ye("error", r);
              break;
            case "img":
            case "image":
            case "link":
              Ye(
                "error",
                r
              ), Ye("load", r);
              break;
            case "details":
              Ye("toggle", r);
              break;
            case "input":
              Sg(r, l), Ye("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!l.multiple }, Ye("invalid", r);
              break;
            case "textarea":
              xg(r, l), Ye("invalid", r);
          }
          Eh(n, l), o = null;
          for (var a in l) if (l.hasOwnProperty(a)) {
            var c = l[a];
            a === "children" ? typeof c == "string" ? r.textContent !== c && (l.suppressHydrationWarning !== !0 && $a(r.textContent, c, t), o = ["children", c]) : typeof c == "number" && r.textContent !== "" + c && (l.suppressHydrationWarning !== !0 && $a(
              r.textContent,
              c,
              t
            ), o = ["children", "" + c]) : hl.hasOwnProperty(a) && c != null && a === "onScroll" && Ye("scroll", r);
          }
          switch (n) {
            case "input":
              Ba(r), wg(r, l, !0);
              break;
            case "textarea":
              Ba(r), Cg(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof l.onClick == "function" && (r.onclick = Mu);
          }
          r = o, e.updateQueue = r, r !== null && (e.flags |= 4);
        } else {
          a = o.nodeType === 9 ? o : o.ownerDocument, t === "http://www.w3.org/1999/xhtml" && (t = Dm(n)), t === "http://www.w3.org/1999/xhtml" ? n === "script" ? (t = a.createElement("div"), t.innerHTML = "<script><\/script>", t = t.removeChild(t.firstChild)) : typeof r.is == "string" ? t = a.createElement(n, { is: r.is }) : (t = a.createElement(n), n === "select" && (a = t, r.multiple ? a.multiple = !0 : r.size && (a.size = r.size))) : t = a.createElementNS(t, n), t[ur] = e, t[Cl] = r, s4(t, e, !1, !1), e.stateNode = t;
          e: {
            switch (a = Ph(n, r), n) {
              case "dialog":
                Ye("cancel", t), Ye("close", t), o = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                Ye("load", t), o = r;
                break;
              case "video":
              case "audio":
                for (o = 0; o < el.length; o++) Ye(el[o], t);
                o = r;
                break;
              case "source":
                Ye("error", t), o = r;
                break;
              case "img":
              case "image":
              case "link":
                Ye(
                  "error",
                  t
                ), Ye("load", t), o = r;
                break;
              case "details":
                Ye("toggle", t), o = r;
                break;
              case "input":
                Sg(t, r), o = Sh(t, r), Ye("invalid", t);
                break;
              case "option":
                o = r;
                break;
              case "select":
                t._wrapperState = { wasMultiple: !!r.multiple }, o = nt({}, r, { value: void 0 }), Ye("invalid", t);
                break;
              case "textarea":
                xg(t, r), o = Ch(t, r), Ye("invalid", t);
                break;
              default:
                o = r;
            }
            Eh(n, o), c = o;
            for (l in c) if (c.hasOwnProperty(l)) {
              var d = c[l];
              l === "style" ? Gm(t, d) : l === "dangerouslySetInnerHTML" ? (d = d ? d.__html : void 0, d != null && Im(t, d)) : l === "children" ? typeof d == "string" ? (n !== "textarea" || d !== "") && pl(t, d) : typeof d == "number" && pl(t, "" + d) : l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && l !== "autoFocus" && (hl.hasOwnProperty(l) ? d != null && l === "onScroll" && Ye("scroll", t) : d != null && C0(t, l, d, a));
            }
            switch (n) {
              case "input":
                Ba(t), wg(t, r, !1);
                break;
              case "textarea":
                Ba(t), Cg(t);
                break;
              case "option":
                r.value != null && t.setAttribute("value", "" + hi(r.value));
                break;
              case "select":
                t.multiple = !!r.multiple, l = r.value, l != null ? Ys(t, !!r.multiple, l, !1) : r.defaultValue != null && Ys(
                  t,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof o.onClick == "function" && (t.onclick = Mu);
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
      if (t && e.stateNode != null) l4(t, e, t.memoizedProps, r);
      else {
        if (typeof r != "string" && e.stateNode === null) throw Error(K(166));
        if (n = Yi(El.current), Yi(fr.current), Qa(e)) {
          if (r = e.stateNode, n = e.memoizedProps, r[ur] = e, (l = r.nodeValue !== n) && (t = hn, t !== null)) switch (t.tag) {
            case 3:
              $a(r.nodeValue, n, (t.mode & 1) !== 0);
              break;
            case 5:
              t.memoizedProps.suppressHydrationWarning !== !0 && $a(r.nodeValue, n, (t.mode & 1) !== 0);
          }
          l && (e.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[ur] = e, e.stateNode = r;
      }
      return Gt(e), null;
    case 13:
      if (Xe(et), r = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
        if (qe && fn !== null && e.mode & 1 && !(e.flags & 128)) E3(), eo(), e.flags |= 98560, l = !1;
        else if (l = Qa(e), r !== null && r.dehydrated !== null) {
          if (t === null) {
            if (!l) throw Error(K(318));
            if (l = e.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(K(317));
            l[ur] = e;
          } else eo(), !(e.flags & 128) && (e.memoizedState = null), e.flags |= 4;
          Gt(e), l = !1;
        } else Yn !== null && (o0(Yn), Yn = null), l = !0;
        if (!l) return e.flags & 65536 ? e : null;
      }
      return e.flags & 128 ? (e.lanes = n, e) : (r = r !== null, r !== (t !== null && t.memoizedState !== null) && r && (e.child.flags |= 8192, e.mode & 1 && (t === null || et.current & 1 ? vt === 0 && (vt = 3) : s1())), e.updateQueue !== null && (e.flags |= 4), Gt(e), null);
    case 4:
      return no(), Zh(t, e), t === null && wl(e.stateNode.containerInfo), Gt(e), null;
    case 10:
      return j0(e.type._context), Gt(e), null;
    case 17:
      return sn(e.type) && Lu(), Gt(e), null;
    case 19:
      if (Xe(et), l = e.memoizedState, l === null) return Gt(e), null;
      if (r = (e.flags & 128) !== 0, a = l.rendering, a === null) if (r) Wo(l, !1);
      else {
        if (vt !== 0 || t !== null && t.flags & 128) for (t = e.child; t !== null; ) {
          if (a = Uu(t), a !== null) {
            for (e.flags |= 128, Wo(l, !1), r = a.updateQueue, r !== null && (e.updateQueue = r, e.flags |= 4), e.subtreeFlags = 0, r = n, n = e.child; n !== null; ) l = n, t = r, l.flags &= 14680066, a = l.alternate, a === null ? (l.childLanes = 0, l.lanes = t, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = a.childLanes, l.lanes = a.lanes, l.child = a.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = a.memoizedProps, l.memoizedState = a.memoizedState, l.updateQueue = a.updateQueue, l.type = a.type, t = a.dependencies, l.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }), n = n.sibling;
            return He(et, et.current & 1 | 2), e.child;
          }
          t = t.sibling;
        }
        l.tail !== null && at() > io && (e.flags |= 128, r = !0, Wo(l, !1), e.lanes = 4194304);
      }
      else {
        if (!r) if (t = Uu(a), t !== null) {
          if (e.flags |= 128, r = !0, n = t.updateQueue, n !== null && (e.updateQueue = n, e.flags |= 4), Wo(l, !0), l.tail === null && l.tailMode === "hidden" && !a.alternate && !qe) return Gt(e), null;
        } else 2 * at() - l.renderingStartTime > io && n !== 1073741824 && (e.flags |= 128, r = !0, Wo(l, !1), e.lanes = 4194304);
        l.isBackwards ? (a.sibling = e.child, e.child = a) : (n = l.last, n !== null ? n.sibling = a : e.child = a, l.last = a);
      }
      return l.tail !== null ? (e = l.tail, l.rendering = e, l.tail = e.sibling, l.renderingStartTime = at(), e.sibling = null, n = et.current, He(et, r ? n & 1 | 2 : n & 1), e) : (Gt(e), null);
    case 22:
    case 23:
      return i1(), r = e.memoizedState !== null, t !== null && t.memoizedState !== null !== r && (e.flags |= 8192), r && e.mode & 1 ? dn & 1073741824 && (Gt(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : Gt(e), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(K(156, e.tag));
}
function A6(t, e) {
  switch (G0(e), e.tag) {
    case 1:
      return sn(e.type) && Lu(), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
    case 3:
      return no(), Xe(rn), Xe(Bt), X0(), t = e.flags, t & 65536 && !(t & 128) ? (e.flags = t & -65537 | 128, e) : null;
    case 5:
      return Y0(e), null;
    case 13:
      if (Xe(et), t = e.memoizedState, t !== null && t.dehydrated !== null) {
        if (e.alternate === null) throw Error(K(340));
        eo();
      }
      return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
    case 19:
      return Xe(et), null;
    case 4:
      return no(), null;
    case 10:
      return j0(e.type._context), null;
    case 22:
    case 23:
      return i1(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Za = !1, Ut = !1, O6 = typeof WeakSet == "function" ? WeakSet : Set, ie = null;
function Ws(t, e) {
  var n = t.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    it(t, e, r);
  }
  else n.current = null;
}
function Jh(t, e, n) {
  try {
    n();
  } catch (r) {
    it(t, e, r);
  }
}
var f2 = !1;
function D6(t, e) {
  if (Ih = Nu, t = f3(), I0(t)) {
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
        var a = 0, c = -1, d = -1, g = 0, y = 0, C = t, S = null;
        t: for (; ; ) {
          for (var x; C !== n || o !== 0 && C.nodeType !== 3 || (c = a + o), C !== l || r !== 0 && C.nodeType !== 3 || (d = a + r), C.nodeType === 3 && (a += C.nodeValue.length), (x = C.firstChild) !== null; )
            S = C, C = x;
          for (; ; ) {
            if (C === t) break t;
            if (S === n && ++g === o && (c = a), S === l && ++y === r && (d = a), (x = C.nextSibling) !== null) break;
            C = S, S = C.parentNode;
          }
          C = x;
        }
        n = c === -1 || d === -1 ? null : { start: c, end: d };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (zh = { focusedElem: t, selectionRange: n }, Nu = !1, ie = e; ie !== null; ) if (e = ie, t = e.child, (e.subtreeFlags & 1028) !== 0 && t !== null) t.return = e, ie = t;
  else for (; ie !== null; ) {
    e = ie;
    try {
      var v = e.alternate;
      if (e.flags & 1024) switch (e.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (v !== null) {
            var E = v.memoizedProps, N = v.memoizedState, k = e.stateNode, w = k.getSnapshotBeforeUpdate(e.elementType === e.type ? E : Wn(e.type, E), N);
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
      t.return = e.return, ie = t;
      break;
    }
    ie = e.return;
  }
  return v = f2, f2 = !1, v;
}
function ul(t, e, n) {
  var r = e.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & t) === t) {
        var l = o.destroy;
        o.destroy = void 0, l !== void 0 && Jh(e, n, l);
      }
      o = o.next;
    } while (o !== r);
  }
}
function ac(t, e) {
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
function e0(t) {
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
function a4(t) {
  var e = t.alternate;
  e !== null && (t.alternate = null, a4(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && (delete e[ur], delete e[Cl], delete e[Bh], delete e[y6], delete e[v6])), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
}
function u4(t) {
  return t.tag === 5 || t.tag === 3 || t.tag === 4;
}
function h2(t) {
  e: for (; ; ) {
    for (; t.sibling === null; ) {
      if (t.return === null || u4(t.return)) return null;
      t = t.return;
    }
    for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
      if (t.flags & 2 || t.child === null || t.tag === 4) continue e;
      t.child.return = t, t = t.child;
    }
    if (!(t.flags & 2)) return t.stateNode;
  }
}
function t0(t, e, n) {
  var r = t.tag;
  if (r === 5 || r === 6) t = t.stateNode, e ? n.nodeType === 8 ? n.parentNode.insertBefore(t, e) : n.insertBefore(t, e) : (n.nodeType === 8 ? (e = n.parentNode, e.insertBefore(t, n)) : (e = n, e.appendChild(t)), n = n._reactRootContainer, n != null || e.onclick !== null || (e.onclick = Mu));
  else if (r !== 4 && (t = t.child, t !== null)) for (t0(t, e, n), t = t.sibling; t !== null; ) t0(t, e, n), t = t.sibling;
}
function n0(t, e, n) {
  var r = t.tag;
  if (r === 5 || r === 6) t = t.stateNode, e ? n.insertBefore(t, e) : n.appendChild(t);
  else if (r !== 4 && (t = t.child, t !== null)) for (n0(t, e, n), t = t.sibling; t !== null; ) n0(t, e, n), t = t.sibling;
}
var Rt = null, Kn = !1;
function qr(t, e, n) {
  for (n = n.child; n !== null; ) c4(t, e, n), n = n.sibling;
}
function c4(t, e, n) {
  if (dr && typeof dr.onCommitFiberUnmount == "function") try {
    dr.onCommitFiberUnmount(ec, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      Ut || Ws(n, e);
    case 6:
      var r = Rt, o = Kn;
      Rt = null, qr(t, e, n), Rt = r, Kn = o, Rt !== null && (Kn ? (t = Rt, n = n.stateNode, t.nodeType === 8 ? t.parentNode.removeChild(n) : t.removeChild(n)) : Rt.removeChild(n.stateNode));
      break;
    case 18:
      Rt !== null && (Kn ? (t = Rt, n = n.stateNode, t.nodeType === 8 ? Yf(t.parentNode, n) : t.nodeType === 1 && Yf(t, n), vl(t)) : Yf(Rt, n.stateNode));
      break;
    case 4:
      r = Rt, o = Kn, Rt = n.stateNode.containerInfo, Kn = !0, qr(t, e, n), Rt = r, Kn = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Ut && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var l = o, a = l.destroy;
          l = l.tag, a !== void 0 && (l & 2 || l & 4) && Jh(n, e, a), o = o.next;
        } while (o !== r);
      }
      qr(t, e, n);
      break;
    case 1:
      if (!Ut && (Ws(n, e), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (c) {
        it(n, e, c);
      }
      qr(t, e, n);
      break;
    case 21:
      qr(t, e, n);
      break;
    case 22:
      n.mode & 1 ? (Ut = (r = Ut) || n.memoizedState !== null, qr(t, e, n), Ut = r) : qr(t, e, n);
      break;
    default:
      qr(t, e, n);
  }
}
function p2(t) {
  var e = t.updateQueue;
  if (e !== null) {
    t.updateQueue = null;
    var n = t.stateNode;
    n === null && (n = t.stateNode = new O6()), e.forEach(function(r) {
      var o = W6.bind(null, t, r);
      n.has(r) || (n.add(r), r.then(o, o));
    });
  }
}
function jn(t, e) {
  var n = e.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var o = n[r];
    try {
      var l = t, a = e, c = a;
      e: for (; c !== null; ) {
        switch (c.tag) {
          case 5:
            Rt = c.stateNode, Kn = !1;
            break e;
          case 3:
            Rt = c.stateNode.containerInfo, Kn = !0;
            break e;
          case 4:
            Rt = c.stateNode.containerInfo, Kn = !0;
            break e;
        }
        c = c.return;
      }
      if (Rt === null) throw Error(K(160));
      c4(l, a, o), Rt = null, Kn = !1;
      var d = o.alternate;
      d !== null && (d.return = null), o.return = null;
    } catch (g) {
      it(o, e, g);
    }
  }
  if (e.subtreeFlags & 12854) for (e = e.child; e !== null; ) d4(e, t), e = e.sibling;
}
function d4(t, e) {
  var n = t.alternate, r = t.flags;
  switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (jn(e, t), lr(t), r & 4) {
        try {
          ul(3, t, t.return), ac(3, t);
        } catch (E) {
          it(t, t.return, E);
        }
        try {
          ul(5, t, t.return);
        } catch (E) {
          it(t, t.return, E);
        }
      }
      break;
    case 1:
      jn(e, t), lr(t), r & 512 && n !== null && Ws(n, n.return);
      break;
    case 5:
      if (jn(e, t), lr(t), r & 512 && n !== null && Ws(n, n.return), t.flags & 32) {
        var o = t.stateNode;
        try {
          pl(o, "");
        } catch (E) {
          it(t, t.return, E);
        }
      }
      if (r & 4 && (o = t.stateNode, o != null)) {
        var l = t.memoizedProps, a = n !== null ? n.memoizedProps : l, c = t.type, d = t.updateQueue;
        if (t.updateQueue = null, d !== null) try {
          c === "input" && l.type === "radio" && l.name != null && Am(o, l), Ph(c, a);
          var g = Ph(c, l);
          for (a = 0; a < d.length; a += 2) {
            var y = d[a], C = d[a + 1];
            y === "style" ? Gm(o, C) : y === "dangerouslySetInnerHTML" ? Im(o, C) : y === "children" ? pl(o, C) : C0(o, y, C, g);
          }
          switch (c) {
            case "input":
              wh(o, l);
              break;
            case "textarea":
              Om(o, l);
              break;
            case "select":
              var S = o._wrapperState.wasMultiple;
              o._wrapperState.wasMultiple = !!l.multiple;
              var x = l.value;
              x != null ? Ys(o, !!l.multiple, x, !1) : S !== !!l.multiple && (l.defaultValue != null ? Ys(
                o,
                !!l.multiple,
                l.defaultValue,
                !0
              ) : Ys(o, !!l.multiple, l.multiple ? [] : "", !1));
          }
          o[Cl] = l;
        } catch (E) {
          it(t, t.return, E);
        }
      }
      break;
    case 6:
      if (jn(e, t), lr(t), r & 4) {
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
      if (jn(e, t), lr(t), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        vl(e.containerInfo);
      } catch (E) {
        it(t, t.return, E);
      }
      break;
    case 4:
      jn(e, t), lr(t);
      break;
    case 13:
      jn(e, t), lr(t), o = t.child, o.flags & 8192 && (l = o.memoizedState !== null, o.stateNode.isHidden = l, !l || o.alternate !== null && o.alternate.memoizedState !== null || (n1 = at())), r & 4 && p2(t);
      break;
    case 22:
      if (y = n !== null && n.memoizedState !== null, t.mode & 1 ? (Ut = (g = Ut) || y, jn(e, t), Ut = g) : jn(e, t), lr(t), r & 8192) {
        if (g = t.memoizedState !== null, (t.stateNode.isHidden = g) && !y && t.mode & 1) for (ie = t, y = t.child; y !== null; ) {
          for (C = ie = y; ie !== null; ) {
            switch (S = ie, x = S.child, S.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                ul(4, S, S.return);
                break;
              case 1:
                Ws(S, S.return);
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
                Ws(S, S.return);
                break;
              case 22:
                if (S.memoizedState !== null) {
                  m2(C);
                  continue;
                }
            }
            x !== null ? (x.return = S, ie = x) : m2(C);
          }
          y = y.sibling;
        }
        e: for (y = null, C = t; ; ) {
          if (C.tag === 5) {
            if (y === null) {
              y = C;
              try {
                o = C.stateNode, g ? (l = o.style, typeof l.setProperty == "function" ? l.setProperty("display", "none", "important") : l.display = "none") : (c = C.stateNode, d = C.memoizedProps.style, a = d != null && d.hasOwnProperty("display") ? d.display : null, c.style.display = zm("display", a));
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
      jn(e, t), lr(t), r & 4 && p2(t);
      break;
    case 21:
      break;
    default:
      jn(
        e,
        t
      ), lr(t);
  }
}
function lr(t) {
  var e = t.flags;
  if (e & 2) {
    try {
      e: {
        for (var n = t.return; n !== null; ) {
          if (u4(n)) {
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
          r.flags & 32 && (pl(o, ""), r.flags &= -33);
          var l = h2(t);
          n0(t, l, o);
          break;
        case 3:
        case 4:
          var a = r.stateNode.containerInfo, c = h2(t);
          t0(t, c, a);
          break;
        default:
          throw Error(K(161));
      }
    } catch (d) {
      it(t, t.return, d);
    }
    t.flags &= -3;
  }
  e & 4096 && (t.flags &= -4097);
}
function I6(t, e, n) {
  ie = t, f4(t);
}
function f4(t, e, n) {
  for (var r = (t.mode & 1) !== 0; ie !== null; ) {
    var o = ie, l = o.child;
    if (o.tag === 22 && r) {
      var a = o.memoizedState !== null || Za;
      if (!a) {
        var c = o.alternate, d = c !== null && c.memoizedState !== null || Ut;
        c = Za;
        var g = Ut;
        if (Za = a, (Ut = d) && !g) for (ie = o; ie !== null; ) a = ie, d = a.child, a.tag === 22 && a.memoizedState !== null ? y2(o) : d !== null ? (d.return = a, ie = d) : y2(o);
        for (; l !== null; ) ie = l, f4(l), l = l.sibling;
        ie = o, Za = c, Ut = g;
      }
      g2(t);
    } else o.subtreeFlags & 8772 && l !== null ? (l.return = o, ie = l) : g2(t);
  }
}
function g2(t) {
  for (; ie !== null; ) {
    var e = ie;
    if (e.flags & 8772) {
      var n = e.alternate;
      try {
        if (e.flags & 8772) switch (e.tag) {
          case 0:
          case 11:
          case 15:
            Ut || ac(5, e);
            break;
          case 1:
            var r = e.stateNode;
            if (e.flags & 4 && !Ut) if (n === null) r.componentDidMount();
            else {
              var o = e.elementType === e.type ? n.memoizedProps : Wn(e.type, n.memoizedProps);
              r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var l = e.updateQueue;
            l !== null && Jg(e, l, r);
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
              Jg(e, a, n);
            }
            break;
          case 5:
            var c = e.stateNode;
            if (n === null && e.flags & 4) {
              n = c;
              var d = e.memoizedProps;
              switch (e.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  d.autoFocus && n.focus();
                  break;
                case "img":
                  d.src && (n.src = d.src);
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
                  C !== null && vl(C);
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
        Ut || e.flags & 512 && e0(e);
      } catch (S) {
        it(e, e.return, S);
      }
    }
    if (e === t) {
      ie = null;
      break;
    }
    if (n = e.sibling, n !== null) {
      n.return = e.return, ie = n;
      break;
    }
    ie = e.return;
  }
}
function m2(t) {
  for (; ie !== null; ) {
    var e = ie;
    if (e === t) {
      ie = null;
      break;
    }
    var n = e.sibling;
    if (n !== null) {
      n.return = e.return, ie = n;
      break;
    }
    ie = e.return;
  }
}
function y2(t) {
  for (; ie !== null; ) {
    var e = ie;
    try {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          var n = e.return;
          try {
            ac(4, e);
          } catch (d) {
            it(e, n, d);
          }
          break;
        case 1:
          var r = e.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = e.return;
            try {
              r.componentDidMount();
            } catch (d) {
              it(e, o, d);
            }
          }
          var l = e.return;
          try {
            e0(e);
          } catch (d) {
            it(e, l, d);
          }
          break;
        case 5:
          var a = e.return;
          try {
            e0(e);
          } catch (d) {
            it(e, a, d);
          }
      }
    } catch (d) {
      it(e, e.return, d);
    }
    if (e === t) {
      ie = null;
      break;
    }
    var c = e.sibling;
    if (c !== null) {
      c.return = e.return, ie = c;
      break;
    }
    ie = e.return;
  }
}
var z6 = Math.ceil, ju = Or.ReactCurrentDispatcher, e1 = Or.ReactCurrentOwner, Rn = Or.ReactCurrentBatchConfig, Ne = 0, Pt = null, dt = null, Ft = 0, dn = 0, Ks = yi(0), vt = 0, Rl = null, Ji = 0, uc = 0, t1 = 0, cl = null, tn = null, n1 = 0, io = 1 / 0, kr = null, Hu = !1, r0 = null, ci = null, Ja = !1, ii = null, Wu = 0, dl = 0, i0 = null, vu = -1, _u = 0;
function Kt() {
  return Ne & 6 ? at() : vu !== -1 ? vu : vu = at();
}
function di(t) {
  return t.mode & 1 ? Ne & 2 && Ft !== 0 ? Ft & -Ft : S6.transition !== null ? (_u === 0 && (_u = qm()), _u) : (t = Ie, t !== 0 || (t = window.event, t = t === void 0 ? 16 : r3(t.type)), t) : 1;
}
function $n(t, e, n, r) {
  if (50 < dl) throw dl = 0, i0 = null, Error(K(185));
  Ol(t, n, r), (!(Ne & 2) || t !== Pt) && (t === Pt && (!(Ne & 2) && (uc |= n), vt === 4 && ni(t, Ft)), on(t, r), n === 1 && Ne === 0 && !(e.mode & 1) && (io = at() + 500, sc && vi()));
}
function on(t, e) {
  var n = t.callbackNode;
  Sv(t, e);
  var r = Tu(t, t === Pt ? Ft : 0);
  if (r === 0) n !== null && Pg(n), t.callbackNode = null, t.callbackPriority = 0;
  else if (e = r & -r, t.callbackPriority !== e) {
    if (n != null && Pg(n), e === 1) t.tag === 0 ? _6(v2.bind(null, t)) : x3(v2.bind(null, t)), g6(function() {
      !(Ne & 6) && vi();
    }), n = null;
    else {
      switch (bm(r)) {
        case 1:
          n = N0;
          break;
        case 4:
          n = $m;
          break;
        case 16:
          n = Pu;
          break;
        case 536870912:
          n = Qm;
          break;
        default:
          n = Pu;
      }
      n = S4(n, h4.bind(null, t));
    }
    t.callbackPriority = e, t.callbackNode = n;
  }
}
function h4(t, e) {
  if (vu = -1, _u = 0, Ne & 6) throw Error(K(327));
  var n = t.callbackNode;
  if (bs() && t.callbackNode !== n) return null;
  var r = Tu(t, t === Pt ? Ft : 0);
  if (r === 0) return null;
  if (r & 30 || r & t.expiredLanes || e) e = Ku(t, r);
  else {
    e = r;
    var o = Ne;
    Ne |= 2;
    var l = g4();
    (Pt !== t || Ft !== e) && (kr = null, io = at() + 500, $i(t, e));
    do
      try {
        B6();
        break;
      } catch (c) {
        p4(t, c);
      }
    while (!0);
    V0(), ju.current = l, Ne = o, dt !== null ? e = 0 : (Pt = null, Ft = 0, e = vt);
  }
  if (e !== 0) {
    if (e === 2 && (o = Mh(t), o !== 0 && (r = o, e = s0(t, o))), e === 1) throw n = Rl, $i(t, 0), ni(t, r), on(t, at()), n;
    if (e === 6) ni(t, r);
    else {
      if (o = t.current.alternate, !(r & 30) && !G6(o) && (e = Ku(t, r), e === 2 && (l = Mh(t), l !== 0 && (r = l, e = s0(t, l))), e === 1)) throw n = Rl, $i(t, 0), ni(t, r), on(t, at()), n;
      switch (t.finishedWork = o, t.finishedLanes = r, e) {
        case 0:
        case 1:
          throw Error(K(345));
        case 2:
          ji(t, tn, kr);
          break;
        case 3:
          if (ni(t, r), (r & 130023424) === r && (e = n1 + 500 - at(), 10 < e)) {
            if (Tu(t, 0) !== 0) break;
            if (o = t.suspendedLanes, (o & r) !== r) {
              Kt(), t.pingedLanes |= t.suspendedLanes & o;
              break;
            }
            t.timeoutHandle = Uh(ji.bind(null, t, tn, kr), e);
            break;
          }
          ji(t, tn, kr);
          break;
        case 4:
          if (ni(t, r), (r & 4194240) === r) break;
          for (e = t.eventTimes, o = -1; 0 < r; ) {
            var a = 31 - Xn(r);
            l = 1 << a, a = e[a], a > o && (o = a), r &= ~l;
          }
          if (r = o, r = at() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * z6(r / 1960)) - r, 10 < r) {
            t.timeoutHandle = Uh(ji.bind(null, t, tn, kr), r);
            break;
          }
          ji(t, tn, kr);
          break;
        case 5:
          ji(t, tn, kr);
          break;
        default:
          throw Error(K(329));
      }
    }
  }
  return on(t, at()), t.callbackNode === n ? h4.bind(null, t) : null;
}
function s0(t, e) {
  var n = cl;
  return t.current.memoizedState.isDehydrated && ($i(t, e).flags |= 256), t = Ku(t, e), t !== 2 && (e = tn, tn = n, e !== null && o0(e)), t;
}
function o0(t) {
  tn === null ? tn = t : tn.push.apply(tn, t);
}
function G6(t) {
  for (var e = t; ; ) {
    if (e.flags & 16384) {
      var n = e.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var o = n[r], l = o.getSnapshot;
        o = o.value;
        try {
          if (!qn(l(), o)) return !1;
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
function ni(t, e) {
  for (e &= ~t1, e &= ~uc, t.suspendedLanes |= e, t.pingedLanes &= ~e, t = t.expirationTimes; 0 < e; ) {
    var n = 31 - Xn(e), r = 1 << n;
    t[n] = -1, e &= ~r;
  }
}
function v2(t) {
  if (Ne & 6) throw Error(K(327));
  bs();
  var e = Tu(t, 0);
  if (!(e & 1)) return on(t, at()), null;
  var n = Ku(t, e);
  if (t.tag !== 0 && n === 2) {
    var r = Mh(t);
    r !== 0 && (e = r, n = s0(t, r));
  }
  if (n === 1) throw n = Rl, $i(t, 0), ni(t, e), on(t, at()), n;
  if (n === 6) throw Error(K(345));
  return t.finishedWork = t.current.alternate, t.finishedLanes = e, ji(t, tn, kr), on(t, at()), null;
}
function r1(t, e) {
  var n = Ne;
  Ne |= 1;
  try {
    return t(e);
  } finally {
    Ne = n, Ne === 0 && (io = at() + 500, sc && vi());
  }
}
function es(t) {
  ii !== null && ii.tag === 0 && !(Ne & 6) && bs();
  var e = Ne;
  Ne |= 1;
  var n = Rn.transition, r = Ie;
  try {
    if (Rn.transition = null, Ie = 1, t) return t();
  } finally {
    Ie = r, Rn.transition = n, Ne = e, !(Ne & 6) && vi();
  }
}
function i1() {
  dn = Ks.current, Xe(Ks);
}
function $i(t, e) {
  t.finishedWork = null, t.finishedLanes = 0;
  var n = t.timeoutHandle;
  if (n !== -1 && (t.timeoutHandle = -1, p6(n)), dt !== null) for (n = dt.return; n !== null; ) {
    var r = n;
    switch (G0(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Lu();
        break;
      case 3:
        no(), Xe(rn), Xe(Bt), X0();
        break;
      case 5:
        Y0(r);
        break;
      case 4:
        no();
        break;
      case 13:
        Xe(et);
        break;
      case 19:
        Xe(et);
        break;
      case 10:
        j0(r.type._context);
        break;
      case 22:
      case 23:
        i1();
    }
    n = n.return;
  }
  if (Pt = t, dt = t = fi(t.current, null), Ft = dn = e, vt = 0, Rl = null, t1 = uc = Ji = 0, tn = cl = null, Ki !== null) {
    for (e = 0; e < Ki.length; e++) if (n = Ki[e], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var o = r.next, l = n.pending;
      if (l !== null) {
        var a = l.next;
        l.next = o, r.next = a;
      }
      n.pending = r;
    }
    Ki = null;
  }
  return t;
}
function p4(t, e) {
  do {
    var n = dt;
    try {
      if (V0(), gu.current = Vu, Bu) {
        for (var r = tt.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        Bu = !1;
      }
      if (Zi = 0, Et = yt = tt = null, al = !1, Pl = 0, e1.current = null, n === null || n.return === null) {
        vt = 1, Rl = e, dt = null;
        break;
      }
      e: {
        var l = t, a = n.return, c = n, d = e;
        if (e = Ft, c.flags |= 32768, d !== null && typeof d == "object" && typeof d.then == "function") {
          var g = d, y = c, C = y.tag;
          if (!(y.mode & 1) && (C === 0 || C === 11 || C === 15)) {
            var S = y.alternate;
            S ? (y.updateQueue = S.updateQueue, y.memoizedState = S.memoizedState, y.lanes = S.lanes) : (y.updateQueue = null, y.memoizedState = null);
          }
          var x = s2(a);
          if (x !== null) {
            x.flags &= -257, o2(x, a, c, l, e), x.mode & 1 && i2(l, g, e), e = x, d = g;
            var v = e.updateQueue;
            if (v === null) {
              var E = /* @__PURE__ */ new Set();
              E.add(d), e.updateQueue = E;
            } else v.add(d);
            break e;
          } else {
            if (!(e & 1)) {
              i2(l, g, e), s1();
              break e;
            }
            d = Error(K(426));
          }
        } else if (qe && c.mode & 1) {
          var N = s2(a);
          if (N !== null) {
            !(N.flags & 65536) && (N.flags |= 256), o2(N, a, c, l, e), U0(ro(d, c));
            break e;
          }
        }
        l = d = ro(d, c), vt !== 4 && (vt = 2), cl === null ? cl = [l] : cl.push(l), l = a;
        do {
          switch (l.tag) {
            case 3:
              l.flags |= 65536, e &= -e, l.lanes |= e;
              var k = b3(l, d, e);
              Zg(l, k);
              break e;
            case 1:
              c = d;
              var w = l.type, p = l.stateNode;
              if (!(l.flags & 128) && (typeof w.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (ci === null || !ci.has(p)))) {
                l.flags |= 65536, e &= -e, l.lanes |= e;
                var _ = Z3(l, c, e);
                Zg(l, _);
                break e;
              }
          }
          l = l.return;
        } while (l !== null);
      }
      y4(n);
    } catch (T) {
      e = T, dt === n && n !== null && (dt = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function g4() {
  var t = ju.current;
  return ju.current = Vu, t === null ? Vu : t;
}
function s1() {
  (vt === 0 || vt === 3 || vt === 2) && (vt = 4), Pt === null || !(Ji & 268435455) && !(uc & 268435455) || ni(Pt, Ft);
}
function Ku(t, e) {
  var n = Ne;
  Ne |= 2;
  var r = g4();
  (Pt !== t || Ft !== e) && (kr = null, $i(t, e));
  do
    try {
      U6();
      break;
    } catch (o) {
      p4(t, o);
    }
  while (!0);
  if (V0(), Ne = n, ju.current = r, dt !== null) throw Error(K(261));
  return Pt = null, Ft = 0, vt;
}
function U6() {
  for (; dt !== null; ) m4(dt);
}
function B6() {
  for (; dt !== null && !dv(); ) m4(dt);
}
function m4(t) {
  var e = _4(t.alternate, t, dn);
  t.memoizedProps = t.pendingProps, e === null ? y4(t) : dt = e, e1.current = null;
}
function y4(t) {
  var e = t;
  do {
    var n = e.alternate;
    if (t = e.return, e.flags & 32768) {
      if (n = A6(n, e), n !== null) {
        n.flags &= 32767, dt = n;
        return;
      }
      if (t !== null) t.flags |= 32768, t.subtreeFlags = 0, t.deletions = null;
      else {
        vt = 6, dt = null;
        return;
      }
    } else if (n = L6(n, e, dn), n !== null) {
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
function ji(t, e, n) {
  var r = Ie, o = Rn.transition;
  try {
    Rn.transition = null, Ie = 1, V6(t, e, n, r);
  } finally {
    Rn.transition = o, Ie = r;
  }
  return null;
}
function V6(t, e, n, r) {
  do
    bs();
  while (ii !== null);
  if (Ne & 6) throw Error(K(327));
  n = t.finishedWork;
  var o = t.finishedLanes;
  if (n === null) return null;
  if (t.finishedWork = null, t.finishedLanes = 0, n === t.current) throw Error(K(177));
  t.callbackNode = null, t.callbackPriority = 0;
  var l = n.lanes | n.childLanes;
  if (wv(t, l), t === Pt && (dt = Pt = null, Ft = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Ja || (Ja = !0, S4(Pu, function() {
    return bs(), null;
  })), l = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || l) {
    l = Rn.transition, Rn.transition = null;
    var a = Ie;
    Ie = 1;
    var c = Ne;
    Ne |= 4, e1.current = null, D6(t, n), d4(n, t), l6(zh), Nu = !!Ih, zh = Ih = null, t.current = n, I6(n), fv(), Ne = c, Ie = a, Rn.transition = l;
  } else t.current = n;
  if (Ja && (Ja = !1, ii = t, Wu = o), l = t.pendingLanes, l === 0 && (ci = null), gv(n.stateNode), on(t, at()), e !== null) for (r = t.onRecoverableError, n = 0; n < e.length; n++) o = e[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Hu) throw Hu = !1, t = r0, r0 = null, t;
  return Wu & 1 && t.tag !== 0 && bs(), l = t.pendingLanes, l & 1 ? t === i0 ? dl++ : (dl = 0, i0 = t) : dl = 0, vi(), null;
}
function bs() {
  if (ii !== null) {
    var t = bm(Wu), e = Rn.transition, n = Ie;
    try {
      if (Rn.transition = null, Ie = 16 > t ? 16 : t, ii === null) var r = !1;
      else {
        if (t = ii, ii = null, Wu = 0, Ne & 6) throw Error(K(331));
        var o = Ne;
        for (Ne |= 4, ie = t.current; ie !== null; ) {
          var l = ie, a = l.child;
          if (ie.flags & 16) {
            var c = l.deletions;
            if (c !== null) {
              for (var d = 0; d < c.length; d++) {
                var g = c[d];
                for (ie = g; ie !== null; ) {
                  var y = ie;
                  switch (y.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ul(8, y, l);
                  }
                  var C = y.child;
                  if (C !== null) C.return = y, ie = C;
                  else for (; ie !== null; ) {
                    y = ie;
                    var S = y.sibling, x = y.return;
                    if (a4(y), y === g) {
                      ie = null;
                      break;
                    }
                    if (S !== null) {
                      S.return = x, ie = S;
                      break;
                    }
                    ie = x;
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
              ie = l;
            }
          }
          if (l.subtreeFlags & 2064 && a !== null) a.return = l, ie = a;
          else e: for (; ie !== null; ) {
            if (l = ie, l.flags & 2048) switch (l.tag) {
              case 0:
              case 11:
              case 15:
                ul(9, l, l.return);
            }
            var k = l.sibling;
            if (k !== null) {
              k.return = l.return, ie = k;
              break e;
            }
            ie = l.return;
          }
        }
        var w = t.current;
        for (ie = w; ie !== null; ) {
          a = ie;
          var p = a.child;
          if (a.subtreeFlags & 2064 && p !== null) p.return = a, ie = p;
          else e: for (a = w; ie !== null; ) {
            if (c = ie, c.flags & 2048) try {
              switch (c.tag) {
                case 0:
                case 11:
                case 15:
                  ac(9, c);
              }
            } catch (T) {
              it(c, c.return, T);
            }
            if (c === a) {
              ie = null;
              break e;
            }
            var _ = c.sibling;
            if (_ !== null) {
              _.return = c.return, ie = _;
              break e;
            }
            ie = c.return;
          }
        }
        if (Ne = o, vi(), dr && typeof dr.onPostCommitFiberRoot == "function") try {
          dr.onPostCommitFiberRoot(ec, t);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      Ie = n, Rn.transition = e;
    }
  }
  return !1;
}
function _2(t, e, n) {
  e = ro(n, e), e = b3(t, e, 1), t = ui(t, e, 1), e = Kt(), t !== null && (Ol(t, 1, e), on(t, e));
}
function it(t, e, n) {
  if (t.tag === 3) _2(t, t, n);
  else for (; e !== null; ) {
    if (e.tag === 3) {
      _2(e, t, n);
      break;
    } else if (e.tag === 1) {
      var r = e.stateNode;
      if (typeof e.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (ci === null || !ci.has(r))) {
        t = ro(n, t), t = Z3(e, t, 1), e = ui(e, t, 1), t = Kt(), e !== null && (Ol(e, 1, t), on(e, t));
        break;
      }
    }
    e = e.return;
  }
}
function j6(t, e, n) {
  var r = t.pingCache;
  r !== null && r.delete(e), e = Kt(), t.pingedLanes |= t.suspendedLanes & n, Pt === t && (Ft & n) === n && (vt === 4 || vt === 3 && (Ft & 130023424) === Ft && 500 > at() - n1 ? $i(t, 0) : t1 |= n), on(t, e);
}
function v4(t, e) {
  e === 0 && (t.mode & 1 ? (e = Ha, Ha <<= 1, !(Ha & 130023424) && (Ha = 4194304)) : e = 1);
  var n = Kt();
  t = Lr(t, e), t !== null && (Ol(t, e, n), on(t, n));
}
function H6(t) {
  var e = t.memoizedState, n = 0;
  e !== null && (n = e.retryLane), v4(t, n);
}
function W6(t, e) {
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
  r !== null && r.delete(e), v4(t, n);
}
var _4;
_4 = function(t, e, n) {
  if (t !== null) if (t.memoizedProps !== e.pendingProps || rn.current) nn = !0;
  else {
    if (!(t.lanes & n) && !(e.flags & 128)) return nn = !1, M6(t, e, n);
    nn = !!(t.flags & 131072);
  }
  else nn = !1, qe && e.flags & 1048576 && C3(e, Du, e.index);
  switch (e.lanes = 0, e.tag) {
    case 2:
      var r = e.type;
      yu(t, e), t = e.pendingProps;
      var o = Js(e, Bt.current);
      qs(e, n), o = Q0(null, e, r, t, o, n);
      var l = q0();
      return e.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (e.tag = 1, e.memoizedState = null, e.updateQueue = null, sn(r) ? (l = !0, Au(e)) : l = !1, e.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, W0(e), o.updater = lc, e.stateNode = o, o._reactInternals = e, Yh(e, r, t, n), e = Qh(null, e, r, !0, l, n)) : (e.tag = 0, qe && l && z0(e), Ht(null, e, o, n), e = e.child), e;
    case 16:
      r = e.elementType;
      e: {
        switch (yu(t, e), t = e.pendingProps, o = r._init, r = o(r._payload), e.type = r, o = e.tag = Y6(r), t = Wn(r, t), o) {
          case 0:
            e = $h(null, e, r, t, n);
            break e;
          case 1:
            e = u2(null, e, r, t, n);
            break e;
          case 11:
            e = l2(null, e, r, t, n);
            break e;
          case 14:
            e = a2(null, e, r, Wn(r.type, t), n);
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
      return r = e.type, o = e.pendingProps, o = e.elementType === r ? o : Wn(r, o), $h(t, e, r, o, n);
    case 1:
      return r = e.type, o = e.pendingProps, o = e.elementType === r ? o : Wn(r, o), u2(t, e, r, o, n);
    case 3:
      e: {
        if (n4(e), t === null) throw Error(K(387));
        r = e.pendingProps, l = e.memoizedState, o = l.element, R3(t, e), Gu(e, r, null, n);
        var a = e.memoizedState;
        if (r = a.element, l.isDehydrated) if (l = { element: r, isDehydrated: !1, cache: a.cache, pendingSuspenseBoundaries: a.pendingSuspenseBoundaries, transitions: a.transitions }, e.updateQueue.baseState = l, e.memoizedState = l, e.flags & 256) {
          o = ro(Error(K(423)), e), e = c2(t, e, r, n, o);
          break e;
        } else if (r !== o) {
          o = ro(Error(K(424)), e), e = c2(t, e, r, n, o);
          break e;
        } else for (fn = ai(e.stateNode.containerInfo.firstChild), hn = e, qe = !0, Yn = null, n = T3(e, null, r, n), e.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (eo(), r === o) {
            e = Ar(t, e, n);
            break e;
          }
          Ht(t, e, r, n);
        }
        e = e.child;
      }
      return e;
    case 5:
      return F3(e), t === null && Hh(e), r = e.type, o = e.pendingProps, l = t !== null ? t.memoizedProps : null, a = o.children, Gh(r, o) ? a = null : l !== null && Gh(r, l) && (e.flags |= 32), t4(t, e), Ht(t, e, a, n), e.child;
    case 6:
      return t === null && Hh(e), null;
    case 13:
      return r4(t, e, n);
    case 4:
      return K0(e, e.stateNode.containerInfo), r = e.pendingProps, t === null ? e.child = to(e, null, r, n) : Ht(t, e, r, n), e.child;
    case 11:
      return r = e.type, o = e.pendingProps, o = e.elementType === r ? o : Wn(r, o), l2(t, e, r, o, n);
    case 7:
      return Ht(t, e, e.pendingProps, n), e.child;
    case 8:
      return Ht(t, e, e.pendingProps.children, n), e.child;
    case 12:
      return Ht(t, e, e.pendingProps.children, n), e.child;
    case 10:
      e: {
        if (r = e.type._context, o = e.pendingProps, l = e.memoizedProps, a = o.value, He(Iu, r._currentValue), r._currentValue = a, l !== null) if (qn(l.value, a)) {
          if (l.children === o.children && !rn.current) {
            e = Ar(t, e, n);
            break e;
          }
        } else for (l = e.child, l !== null && (l.return = e); l !== null; ) {
          var c = l.dependencies;
          if (c !== null) {
            a = l.child;
            for (var d = c.firstContext; d !== null; ) {
              if (d.context === r) {
                if (l.tag === 1) {
                  d = Nr(-1, n & -n), d.tag = 2;
                  var g = l.updateQueue;
                  if (g !== null) {
                    g = g.shared;
                    var y = g.pending;
                    y === null ? d.next = d : (d.next = y.next, y.next = d), g.pending = d;
                  }
                }
                l.lanes |= n, d = l.alternate, d !== null && (d.lanes |= n), Wh(
                  l.return,
                  n,
                  e
                ), c.lanes |= n;
                break;
              }
              d = d.next;
            }
          } else if (l.tag === 10) a = l.type === e.type ? null : l.child;
          else if (l.tag === 18) {
            if (a = l.return, a === null) throw Error(K(341));
            a.lanes |= n, c = a.alternate, c !== null && (c.lanes |= n), Wh(a, n, e), a = l.sibling;
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
        Ht(t, e, o.children, n), e = e.child;
      }
      return e;
    case 9:
      return o = e.type, r = e.pendingProps.children, qs(e, n), o = Fn(o), r = r(o), e.flags |= 1, Ht(t, e, r, n), e.child;
    case 14:
      return r = e.type, o = Wn(r, e.pendingProps), o = Wn(r.type, o), a2(t, e, r, o, n);
    case 15:
      return J3(t, e, e.type, e.pendingProps, n);
    case 17:
      return r = e.type, o = e.pendingProps, o = e.elementType === r ? o : Wn(r, o), yu(t, e), e.tag = 1, sn(r) ? (t = !0, Au(e)) : t = !1, qs(e, n), q3(e, r, o), Yh(e, r, o, n), Qh(null, e, r, !0, t, n);
    case 19:
      return i4(t, e, n);
    case 22:
      return e4(t, e, n);
  }
  throw Error(K(156, e.tag));
};
function S4(t, e) {
  return Xm(t, e);
}
function K6(t, e, n, r) {
  this.tag = t, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Nn(t, e, n, r) {
  return new K6(t, e, n, r);
}
function o1(t) {
  return t = t.prototype, !(!t || !t.isReactComponent);
}
function Y6(t) {
  if (typeof t == "function") return o1(t) ? 1 : 0;
  if (t != null) {
    if (t = t.$$typeof, t === E0) return 11;
    if (t === P0) return 14;
  }
  return 2;
}
function fi(t, e) {
  var n = t.alternate;
  return n === null ? (n = Nn(t.tag, e, t.key, t.mode), n.elementType = t.elementType, n.type = t.type, n.stateNode = t.stateNode, n.alternate = t, t.alternate = n) : (n.pendingProps = e, n.type = t.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = t.flags & 14680064, n.childLanes = t.childLanes, n.lanes = t.lanes, n.child = t.child, n.memoizedProps = t.memoizedProps, n.memoizedState = t.memoizedState, n.updateQueue = t.updateQueue, e = t.dependencies, n.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }, n.sibling = t.sibling, n.index = t.index, n.ref = t.ref, n;
}
function Su(t, e, n, r, o, l) {
  var a = 2;
  if (r = t, typeof t == "function") o1(t) && (a = 1);
  else if (typeof t == "string") a = 5;
  else e: switch (t) {
    case Ds:
      return Qi(n.children, o, l, e);
    case k0:
      a = 8, o |= 8;
      break;
    case mh:
      return t = Nn(12, n, e, o | 2), t.elementType = mh, t.lanes = l, t;
    case yh:
      return t = Nn(13, n, e, o), t.elementType = yh, t.lanes = l, t;
    case vh:
      return t = Nn(19, n, e, o), t.elementType = vh, t.lanes = l, t;
    case Fm:
      return cc(n, o, l, e);
    default:
      if (typeof t == "object" && t !== null) switch (t.$$typeof) {
        case Nm:
          a = 10;
          break e;
        case Rm:
          a = 9;
          break e;
        case E0:
          a = 11;
          break e;
        case P0:
          a = 14;
          break e;
        case Jr:
          a = 16, r = null;
          break e;
      }
      throw Error(K(130, t == null ? t : typeof t, ""));
  }
  return e = Nn(a, n, e, o), e.elementType = t, e.type = r, e.lanes = l, e;
}
function Qi(t, e, n, r) {
  return t = Nn(7, t, r, e), t.lanes = n, t;
}
function cc(t, e, n, r) {
  return t = Nn(22, t, r, e), t.elementType = Fm, t.lanes = n, t.stateNode = { isHidden: !1 }, t;
}
function eh(t, e, n) {
  return t = Nn(6, t, null, e), t.lanes = n, t;
}
function th(t, e, n) {
  return e = Nn(4, t.children !== null ? t.children : [], t.key, e), e.lanes = n, e.stateNode = { containerInfo: t.containerInfo, pendingChildren: null, implementation: t.implementation }, e;
}
function X6(t, e, n, r, o) {
  this.tag = e, this.containerInfo = t, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Df(0), this.expirationTimes = Df(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Df(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function l1(t, e, n, r, o, l, a, c, d) {
  return t = new X6(t, e, n, c, d), e === 1 ? (e = 1, l === !0 && (e |= 8)) : e = 0, l = Nn(3, null, null, e), t.current = l, l.stateNode = t, l.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, W0(l), t;
}
function $6(t, e, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Os, key: r == null ? null : "" + r, children: t, containerInfo: e, implementation: n };
}
function w4(t) {
  if (!t) return pi;
  t = t._reactInternals;
  e: {
    if (ns(t) !== t || t.tag !== 1) throw Error(K(170));
    var e = t;
    do {
      switch (e.tag) {
        case 3:
          e = e.stateNode.context;
          break e;
        case 1:
          if (sn(e.type)) {
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
    if (sn(n)) return w3(t, n, e);
  }
  return e;
}
function x4(t, e, n, r, o, l, a, c, d) {
  return t = l1(n, r, !0, t, o, l, a, c, d), t.context = w4(null), n = t.current, r = Kt(), o = di(n), l = Nr(r, o), l.callback = e ?? null, ui(n, l, o), t.current.lanes = o, Ol(t, o, r), on(t, r), t;
}
function dc(t, e, n, r) {
  var o = e.current, l = Kt(), a = di(o);
  return n = w4(n), e.context === null ? e.context = n : e.pendingContext = n, e = Nr(l, a), e.payload = { element: t }, r = r === void 0 ? null : r, r !== null && (e.callback = r), t = ui(o, e, a), t !== null && ($n(t, o, a, l), pu(t, o, a)), a;
}
function Yu(t) {
  if (t = t.current, !t.child) return null;
  switch (t.child.tag) {
    case 5:
      return t.child.stateNode;
    default:
      return t.child.stateNode;
  }
}
function S2(t, e) {
  if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
    var n = t.retryLane;
    t.retryLane = n !== 0 && n < e ? n : e;
  }
}
function a1(t, e) {
  S2(t, e), (t = t.alternate) && S2(t, e);
}
function Q6() {
  return null;
}
var C4 = typeof reportError == "function" ? reportError : function(t) {
  console.error(t);
};
function u1(t) {
  this._internalRoot = t;
}
fc.prototype.render = u1.prototype.render = function(t) {
  var e = this._internalRoot;
  if (e === null) throw Error(K(409));
  dc(t, e, null, null);
};
fc.prototype.unmount = u1.prototype.unmount = function() {
  var t = this._internalRoot;
  if (t !== null) {
    this._internalRoot = null;
    var e = t.containerInfo;
    es(function() {
      dc(null, t, null, null);
    }), e[Mr] = null;
  }
};
function fc(t) {
  this._internalRoot = t;
}
fc.prototype.unstable_scheduleHydration = function(t) {
  if (t) {
    var e = e3();
    t = { blockedOn: null, target: t, priority: e };
    for (var n = 0; n < ti.length && e !== 0 && e < ti[n].priority; n++) ;
    ti.splice(n, 0, t), n === 0 && n3(t);
  }
};
function c1(t) {
  return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
}
function hc(t) {
  return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11 && (t.nodeType !== 8 || t.nodeValue !== " react-mount-point-unstable "));
}
function w2() {
}
function q6(t, e, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var l = r;
      r = function() {
        var g = Yu(a);
        l.call(g);
      };
    }
    var a = x4(e, r, t, 0, null, !1, !1, "", w2);
    return t._reactRootContainer = a, t[Mr] = a.current, wl(t.nodeType === 8 ? t.parentNode : t), es(), a;
  }
  for (; o = t.lastChild; ) t.removeChild(o);
  if (typeof r == "function") {
    var c = r;
    r = function() {
      var g = Yu(d);
      c.call(g);
    };
  }
  var d = l1(t, 0, !1, null, null, !1, !1, "", w2);
  return t._reactRootContainer = d, t[Mr] = d.current, wl(t.nodeType === 8 ? t.parentNode : t), es(function() {
    dc(e, d, n, r);
  }), d;
}
function pc(t, e, n, r, o) {
  var l = n._reactRootContainer;
  if (l) {
    var a = l;
    if (typeof o == "function") {
      var c = o;
      o = function() {
        var d = Yu(a);
        c.call(d);
      };
    }
    dc(e, a, t, o);
  } else a = q6(n, e, t, o, r);
  return Yu(a);
}
Zm = function(t) {
  switch (t.tag) {
    case 3:
      var e = t.stateNode;
      if (e.current.memoizedState.isDehydrated) {
        var n = Jo(e.pendingLanes);
        n !== 0 && (R0(e, n | 1), on(e, at()), !(Ne & 6) && (io = at() + 500, vi()));
      }
      break;
    case 13:
      es(function() {
        var r = Lr(t, 1);
        if (r !== null) {
          var o = Kt();
          $n(r, t, 1, o);
        }
      }), a1(t, 1);
  }
};
F0 = function(t) {
  if (t.tag === 13) {
    var e = Lr(t, 134217728);
    if (e !== null) {
      var n = Kt();
      $n(e, t, 134217728, n);
    }
    a1(t, 134217728);
  }
};
Jm = function(t) {
  if (t.tag === 13) {
    var e = di(t), n = Lr(t, e);
    if (n !== null) {
      var r = Kt();
      $n(n, t, e, r);
    }
    a1(t, e);
  }
};
e3 = function() {
  return Ie;
};
t3 = function(t, e) {
  var n = Ie;
  try {
    return Ie = t, e();
  } finally {
    Ie = n;
  }
};
Nh = function(t, e, n) {
  switch (e) {
    case "input":
      if (wh(t, n), e = n.name, n.type === "radio" && e != null) {
        for (n = t; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + e) + '][type="radio"]'), e = 0; e < n.length; e++) {
          var r = n[e];
          if (r !== t && r.form === t.form) {
            var o = ic(r);
            if (!o) throw Error(K(90));
            Lm(r), wh(r, o);
          }
        }
      }
      break;
    case "textarea":
      Om(t, n);
      break;
    case "select":
      e = n.value, e != null && Ys(t, !!n.multiple, e, !1);
  }
};
Vm = r1;
jm = es;
var b6 = { usingClientEntryPoint: !1, Events: [Il, Us, ic, Um, Bm, r1] }, Ko = { findFiberByHostInstance: Wi, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Z6 = { bundleType: Ko.bundleType, version: Ko.version, rendererPackageName: Ko.rendererPackageName, rendererConfig: Ko.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Or.ReactCurrentDispatcher, findHostInstanceByFiber: function(t) {
  return t = Km(t), t === null ? null : t.stateNode;
}, findFiberByHostInstance: Ko.findFiberByHostInstance || Q6, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var eu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!eu.isDisabled && eu.supportsFiber) try {
    ec = eu.inject(Z6), dr = eu;
  } catch {
  }
}
gn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = b6;
gn.createPortal = function(t, e) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!c1(e)) throw Error(K(200));
  return $6(t, e, null, n);
};
gn.createRoot = function(t, e) {
  if (!c1(t)) throw Error(K(299));
  var n = !1, r = "", o = C4;
  return e != null && (e.unstable_strictMode === !0 && (n = !0), e.identifierPrefix !== void 0 && (r = e.identifierPrefix), e.onRecoverableError !== void 0 && (o = e.onRecoverableError)), e = l1(t, 1, !1, null, null, n, !1, r, o), t[Mr] = e.current, wl(t.nodeType === 8 ? t.parentNode : t), new u1(e);
};
gn.findDOMNode = function(t) {
  if (t == null) return null;
  if (t.nodeType === 1) return t;
  var e = t._reactInternals;
  if (e === void 0)
    throw typeof t.render == "function" ? Error(K(188)) : (t = Object.keys(t).join(","), Error(K(268, t)));
  return t = Km(e), t = t === null ? null : t.stateNode, t;
};
gn.flushSync = function(t) {
  return es(t);
};
gn.hydrate = function(t, e, n) {
  if (!hc(e)) throw Error(K(200));
  return pc(null, t, e, !0, n);
};
gn.hydrateRoot = function(t, e, n) {
  if (!c1(t)) throw Error(K(405));
  var r = n != null && n.hydratedSources || null, o = !1, l = "", a = C4;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (l = n.identifierPrefix), n.onRecoverableError !== void 0 && (a = n.onRecoverableError)), e = x4(e, null, t, 1, n ?? null, o, !1, l, a), t[Mr] = e.current, wl(t), r) for (t = 0; t < r.length; t++) n = r[t], o = n._getVersion, o = o(n._source), e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [n, o] : e.mutableSourceEagerHydrationData.push(
    n,
    o
  );
  return new fc(e);
};
gn.render = function(t, e, n) {
  if (!hc(e)) throw Error(K(200));
  return pc(null, t, e, !1, n);
};
gn.unmountComponentAtNode = function(t) {
  if (!hc(t)) throw Error(K(40));
  return t._reactRootContainer ? (es(function() {
    pc(null, null, t, !1, function() {
      t._reactRootContainer = null, t[Mr] = null;
    });
  }), !0) : !1;
};
gn.unstable_batchedUpdates = r1;
gn.unstable_renderSubtreeIntoContainer = function(t, e, n, r) {
  if (!hc(n)) throw Error(K(200));
  if (t == null || t._reactInternals === void 0) throw Error(K(38));
  return pc(t, e, n, !1, r);
};
gn.version = "18.3.1-next-f1338f8080-20240426";
function k4() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(k4);
    } catch (t) {
      console.error(t);
    }
}
k4(), km.exports = gn;
var J6 = km.exports, E4, x2 = J6;
E4 = x2.createRoot, x2.hydrateRoot;
var P4 = { exports: {} }, gc = {}, Xu = {}, we = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t._registerNode = t.Konva = t.glob = void 0;
  const e = Math.PI / 180;
  function n() {
    return typeof window < "u" && ({}.toString.call(window) === "[object Window]" || {}.toString.call(window) === "[object global]");
  }
  t.glob = typeof hg < "u" ? hg : typeof window < "u" ? window : typeof WorkerGlobalScope < "u" ? self : {}, t.Konva = {
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
})(we);
var rt = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.Util = t.Transform = void 0;
  const e = we;
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
      const T = Math.cos(_), F = Math.sin(_), M = this.m[0] * T + this.m[2] * F, R = this.m[1] * T + this.m[3] * F, G = this.m[0] * -F + this.m[2] * T, L = this.m[1] * -F + this.m[3] * T;
      return this.m[0] = M, this.m[1] = R, this.m[2] = G, this.m[3] = L, this;
    }
    getTranslation() {
      return {
        x: this.m[4],
        y: this.m[5]
      };
    }
    skew(_, T) {
      const F = this.m[0] + this.m[2] * T, M = this.m[1] + this.m[3] * T, R = this.m[2] + this.m[0] * _, G = this.m[3] + this.m[1] * _;
      return this.m[0] = F, this.m[1] = M, this.m[2] = R, this.m[3] = G, this;
    }
    multiply(_) {
      const T = this.m[0] * _.m[0] + this.m[2] * _.m[1], F = this.m[1] * _.m[0] + this.m[3] * _.m[1], M = this.m[0] * _.m[2] + this.m[2] * _.m[3], R = this.m[1] * _.m[2] + this.m[3] * _.m[3], G = this.m[0] * _.m[4] + this.m[2] * _.m[5] + this.m[4], L = this.m[1] * _.m[4] + this.m[3] * _.m[5] + this.m[5];
      return this.m[0] = T, this.m[1] = F, this.m[2] = M, this.m[3] = R, this.m[4] = G, this.m[5] = L, this;
    }
    invert() {
      const _ = 1 / (this.m[0] * this.m[3] - this.m[1] * this.m[2]), T = this.m[3] * _, F = -this.m[1] * _, M = -this.m[2] * _, R = this.m[0] * _, G = _ * (this.m[2] * this.m[5] - this.m[3] * this.m[4]), L = _ * (this.m[1] * this.m[4] - this.m[0] * this.m[5]);
      return this.m[0] = T, this.m[1] = F, this.m[2] = M, this.m[3] = R, this.m[4] = G, this.m[5] = L, this;
    }
    getMatrix() {
      return this.m;
    }
    decompose() {
      const _ = this.m[0], T = this.m[1], F = this.m[2], M = this.m[3], R = this.m[4], G = this.m[5], L = _ * M - T * F, B = {
        x: R,
        y: G,
        rotation: 0,
        scaleX: 0,
        scaleY: 0,
        skewX: 0,
        skewY: 0
      };
      if (_ != 0 || T != 0) {
        const H = Math.sqrt(_ * _ + T * T);
        B.rotation = T > 0 ? Math.acos(_ / H) : -Math.acos(_ / H), B.scaleX = H, B.scaleY = L / H, B.skewX = (_ * F + T * M) / L, B.skewY = 0;
      } else if (F != 0 || M != 0) {
        const H = Math.sqrt(F * F + M * M);
        B.rotation = Math.PI / 2 - (M > 0 ? Math.acos(-F / H) : -Math.acos(F / H)), B.scaleX = L / H, B.scaleY = H, B.skewX = 0, B.skewY = (_ * F + T * M) / L;
      }
      return B.rotation = t.Util._getRotation(B.rotation), B;
    }
  }
  t.Transform = n;
  const r = "[object Array]", o = "[object Number]", l = "[object String]", a = "[object Boolean]", c = Math.PI / 180, d = 180 / Math.PI, g = "#", y = "", C = "0", S = "Konva warning: ", x = "Konva error: ", v = "rgb(", E = {
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
        const [_, ...T] = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(p), F = Number(T[0]) / 360, M = Number(T[1]) / 100, R = Number(T[2]) / 100;
        let G, L, B;
        if (M === 0)
          return B = R * 255, {
            r: Math.round(B),
            g: Math.round(B),
            b: Math.round(B),
            a: 1
          };
        R < 0.5 ? G = R * (1 + M) : G = R + M - R * M;
        const H = 2 * R - G, I = [0, 0, 0];
        for (let J = 0; J < 3; J++)
          L = F + 1 / 3 * -(J - 1), L < 0 && L++, L > 1 && L--, 6 * L < 1 ? B = H + (G - H) * 6 * L : 2 * L < 1 ? B = G : 3 * L < 2 ? B = H + (G - H) * (2 / 3 - L) * 6 : B = H, I[J] = B * 255;
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
      return p * d;
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
    _getProjectionToSegment(p, _, T, F, M, R) {
      let G, L, B;
      const H = (p - T) * (p - T) + (_ - F) * (_ - F);
      if (H == 0)
        G = p, L = _, B = (M - T) * (M - T) + (R - F) * (R - F);
      else {
        const I = ((M - p) * (T - p) + (R - _) * (F - _)) / H;
        I < 0 ? (G = p, L = _, B = (p - M) * (p - M) + (_ - R) * (_ - R)) : I > 1 ? (G = T, L = F, B = (T - M) * (T - M) + (F - R) * (F - R)) : (G = p + I * (T - p), L = _ + I * (F - _), B = (G - M) * (G - M) + (L - R) * (L - R));
      }
      return [G, L, B];
    },
    _getProjectionToLine(p, _, T) {
      const F = t.Util.cloneObject(p);
      let M = Number.MAX_VALUE;
      return _.forEach(function(R, G) {
        if (!T && G === _.length - 1)
          return;
        const L = _[(G + 1) % _.length], B = t.Util._getProjectionToSegment(R.x, R.y, L.x, L.y, p.x, p.y), H = B[0], I = B[1], J = B[2];
        J < M && (F.x = H, F.y = I, M = J);
      }), F;
    },
    _prepareArrayForTween(p, _, T) {
      const F = [], M = [];
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
        M.push({
          x: _[G],
          y: _[G + 1]
        });
      const R = [];
      return M.forEach(function(G) {
        const L = t.Util._getProjectionToLine(G, F, T);
        R.push(L.x), R.push(L.y);
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
      let M = 0, R = 0, G = 0, L = 0;
      typeof F == "number" ? M = R = G = L = Math.min(F, _ / 2, T / 2) : (M = Math.min(F[0] || 0, _ / 2, T / 2), R = Math.min(F[1] || 0, _ / 2, T / 2), L = Math.min(F[2] || 0, _ / 2, T / 2), G = Math.min(F[3] || 0, _ / 2, T / 2)), p.moveTo(M, 0), p.lineTo(_ - R, 0), p.arc(_ - R, R, R, Math.PI * 3 / 2, 0, !1), p.lineTo(_, T - L), p.arc(_ - L, T - L, L, 0, Math.PI / 2, !1), p.lineTo(G, T), p.arc(G, T - G, G, Math.PI / 2, Math.PI, !1), p.lineTo(0, M), p.arc(M, M, M, Math.PI, Math.PI * 3 / 2, !1);
    }
  };
})(rt);
var be = {}, Qn = {}, Rr = {};
Object.defineProperty(Rr, "__esModule", { value: !0 });
Rr.HitContext = Rr.SceneContext = Rr.Context = void 0;
const T4 = rt, e8 = we;
function t8(t) {
  const e = [], n = t.length, r = T4.Util;
  for (let o = 0; o < n; o++) {
    let l = t[o];
    r._isNumber(l) ? l = Math.round(l * 1e3) / 1e3 : r._isString(l) || (l = l + ""), e.push(l);
  }
  return e;
}
const C2 = ",", n8 = "(", r8 = ")", i8 = "([", s8 = "])", o8 = ";", l8 = "()", a8 = "=", k2 = [
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
], u8 = [
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
], c8 = 100;
class mc {
  constructor(e) {
    this.canvas = e, e8.Konva.enableTrace && (this.traceArr = [], this._enableTrace());
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
    let r = this.traceArr, o = r.length, l = "", a, c, d, g;
    for (a = 0; a < o; a++)
      c = r[a], d = c.method, d ? (g = c.args, l += d, e ? l += l8 : T4.Util._isArray(g[0]) ? l += i8 + g.join(C2) + s8 : (n && (g = g.map((y) => typeof y == "number" ? Math.floor(y) : y)), l += n8 + g.join(C2) + r8)) : (l += c.property, e || (l += a8 + c.val)), l += o8;
    return l;
  }
  clearTrace() {
    this.traceArr = [];
  }
  _trace(e) {
    let n = this.traceArr, r;
    n.push(e), r = n.length, r >= c8 && n.shift();
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
  drawImage(e, n, r, o, l, a, c, d, g) {
    const y = arguments, C = this._context;
    y.length === 3 ? C.drawImage(e, n, r) : y.length === 5 ? C.drawImage(e, n, r, o, l) : y.length === 9 && C.drawImage(e, n, r, o, l, a, c, d, g);
  }
  ellipse(e, n, r, o, l, a, c, d) {
    this._context.ellipse(e, n, r, o, l, a, c, d);
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
    let e = this, n = k2.length, r = this.setAttr, o, l;
    const a = function(c) {
      let d = e[c], g;
      e[c] = function() {
        return l = t8(Array.prototype.slice.call(arguments, 0)), g = d.apply(e, arguments), e._trace({
          method: c,
          args: l
        }), g;
      };
    };
    for (o = 0; o < n; o++)
      a(k2[o]);
    e.setAttr = function() {
      r.apply(e, arguments);
      const c = arguments[0];
      let d = arguments[1];
      (c === "shadowOffsetX" || c === "shadowOffsetY" || c === "shadowBlur") && (d = d / this.canvas.getPixelRatio()), e._trace({
        property: c,
        val: d
      });
    };
  }
  _applyGlobalCompositeOperation(e) {
    const n = e.attrs.globalCompositeOperation;
    !n || n === "source-over" || this.setAttr("globalCompositeOperation", n);
  }
}
Rr.Context = mc;
u8.forEach(function(t) {
  Object.defineProperty(mc.prototype, t, {
    get() {
      return this._context[t];
    },
    set(e) {
      this._context[t] = e;
    }
  });
});
class d8 extends mc {
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
    }, d = e.getAbsoluteScale(), g = this.canvas.getPixelRatio(), y = d.x * g, C = d.y * g;
    this.setAttr("shadowColor", l), this.setAttr("shadowBlur", a * Math.min(Math.abs(y), Math.abs(C))), this.setAttr("shadowOffsetX", c.x * y), this.setAttr("shadowOffsetY", c.y * C);
  }
}
Rr.SceneContext = d8;
class f8 extends mc {
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
Rr.HitContext = f8;
Object.defineProperty(Qn, "__esModule", { value: !0 });
Qn.HitCanvas = Qn.SceneCanvas = Qn.Canvas = void 0;
const $u = rt, N4 = Rr, R4 = we;
let tu;
function h8() {
  if (tu)
    return tu;
  const t = $u.Util.createCanvasElement(), e = t.getContext("2d");
  return tu = function() {
    const n = R4.Konva._global.devicePixelRatio || 1, r = e.webkitBackingStorePixelRatio || e.mozBackingStorePixelRatio || e.msBackingStorePixelRatio || e.oBackingStorePixelRatio || e.backingStorePixelRatio || 1;
    return n / r;
  }(), $u.Util.releaseCanvas(t), tu;
}
class d1 {
  constructor(e) {
    this.pixelRatio = 1, this.width = 0, this.height = 0, this.isCache = !1;
    const r = (e || {}).pixelRatio || R4.Konva.pixelRatio || h8();
    this.pixelRatio = r, this._canvas = $u.Util.createCanvasElement(), this._canvas.style.padding = "0", this._canvas.style.margin = "0", this._canvas.style.border = "0", this._canvas.style.background = "transparent", this._canvas.style.position = "absolute", this._canvas.style.top = "0", this._canvas.style.left = "0";
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
        return $u.Util.error("Unable to get data URL. " + o.message + " For more info read https://konvajs.org/docs/posts/Tainted_Canvas.html."), "";
      }
    }
  }
}
Qn.Canvas = d1;
class p8 extends d1 {
  constructor(e = { width: 0, height: 0, willReadFrequently: !1 }) {
    super(e), this.context = new N4.SceneContext(this, {
      willReadFrequently: e.willReadFrequently
    }), this.setSize(e.width, e.height);
  }
}
Qn.SceneCanvas = p8;
class g8 extends d1 {
  constructor(e = { width: 0, height: 0 }) {
    super(e), this.hitCanvas = !0, this.context = new N4.HitContext(this), this.setSize(e.width, e.height);
  }
}
Qn.HitCanvas = g8;
var yc = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.DD = void 0;
  const e = we, n = rt;
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
        const { node: c } = l, d = c.getStage();
        d.setPointersPositions(r), l.pointerId === void 0 && (l.pointerId = n.Util._getFirstPointerId(r));
        const g = d._changedPointerPositions.find((y) => y.id === l.pointerId);
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
})(yc);
var ke = {}, fe = {};
Object.defineProperty(fe, "__esModule", { value: !0 });
fe.RGBComponent = m8;
fe.alphaComponent = y8;
fe.getNumberValidator = v8;
fe.getNumberOrArrayOfNumbersValidator = _8;
fe.getNumberOrAutoValidator = S8;
fe.getStringValidator = w8;
fe.getStringOrGradientValidator = x8;
fe.getFunctionValidator = C8;
fe.getNumberArrayValidator = k8;
fe.getBooleanValidator = E8;
fe.getComponentValidator = P8;
const Dr = we, st = rt;
function Ir(t) {
  return st.Util._isString(t) ? '"' + t + '"' : Object.prototype.toString.call(t) === "[object Number]" || st.Util._isBoolean(t) ? t : Object.prototype.toString.call(t);
}
function m8(t) {
  return t > 255 ? 255 : t < 0 ? 0 : Math.round(t);
}
function y8(t) {
  return t > 1 ? 1 : t < 1e-4 ? 1e-4 : t;
}
function v8() {
  if (Dr.Konva.isUnminified)
    return function(t, e) {
      return st.Util._isNumber(t) || st.Util.warn(Ir(t) + ' is a not valid value for "' + e + '" attribute. The value should be a number.'), t;
    };
}
function _8(t) {
  if (Dr.Konva.isUnminified)
    return function(e, n) {
      let r = st.Util._isNumber(e), o = st.Util._isArray(e) && e.length == t;
      return !r && !o && st.Util.warn(Ir(e) + ' is a not valid value for "' + n + '" attribute. The value should be a number or Array<number>(' + t + ")"), e;
    };
}
function S8() {
  if (Dr.Konva.isUnminified)
    return function(t, e) {
      return st.Util._isNumber(t) || t === "auto" || st.Util.warn(Ir(t) + ' is a not valid value for "' + e + '" attribute. The value should be a number or "auto".'), t;
    };
}
function w8() {
  if (Dr.Konva.isUnminified)
    return function(t, e) {
      return st.Util._isString(t) || st.Util.warn(Ir(t) + ' is a not valid value for "' + e + '" attribute. The value should be a string.'), t;
    };
}
function x8() {
  if (Dr.Konva.isUnminified)
    return function(t, e) {
      const n = st.Util._isString(t), r = Object.prototype.toString.call(t) === "[object CanvasGradient]" || t && t.addColorStop;
      return n || r || st.Util.warn(Ir(t) + ' is a not valid value for "' + e + '" attribute. The value should be a string or a native gradient.'), t;
    };
}
function C8() {
  if (Dr.Konva.isUnminified)
    return function(t, e) {
      return st.Util._isFunction(t) || st.Util.warn(Ir(t) + ' is a not valid value for "' + e + '" attribute. The value should be a function.'), t;
    };
}
function k8() {
  if (Dr.Konva.isUnminified)
    return function(t, e) {
      const n = Int8Array ? Object.getPrototypeOf(Int8Array) : null;
      return n && t instanceof n || (st.Util._isArray(t) ? t.forEach(function(r) {
        st.Util._isNumber(r) || st.Util.warn('"' + e + '" attribute has non numeric element ' + r + ". Make sure that all elements are numbers.");
      }) : st.Util.warn(Ir(t) + ' is a not valid value for "' + e + '" attribute. The value should be a array of numbers.')), t;
    };
}
function E8() {
  if (Dr.Konva.isUnminified)
    return function(t, e) {
      return t === !0 || t === !1 || st.Util.warn(Ir(t) + ' is a not valid value for "' + e + '" attribute. The value should be a boolean.'), t;
    };
}
function P8(t) {
  if (Dr.Konva.isUnminified)
    return function(e, n) {
      return e == null || st.Util.isObject(e) || st.Util.warn(Ir(e) + ' is a not valid value for "' + n + '" attribute. The value should be an object with properties ' + t), e;
    };
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.Factory = void 0;
  const e = rt, n = fe, r = "get", o = "set";
  t.Factory = {
    addGetterSetter(l, a, c, d, g) {
      t.Factory.addGetter(l, a, c), t.Factory.addSetter(l, a, d, g), t.Factory.addOverloadedGetterSetter(l, a);
    },
    addGetter(l, a, c) {
      const d = r + e.Util._capitalize(a);
      l.prototype[d] = l.prototype[d] || function() {
        const g = this.attrs[a];
        return g === void 0 ? c : g;
      };
    },
    addSetter(l, a, c, d) {
      const g = o + e.Util._capitalize(a);
      l.prototype[g] || t.Factory.overWriteSetter(l, a, c, d);
    },
    overWriteSetter(l, a, c, d) {
      const g = o + e.Util._capitalize(a);
      l.prototype[g] = function(y) {
        return c && y !== void 0 && y !== null && (y = c.call(this, y, a)), this._setAttr(a, y), d && d.call(this), this;
      };
    },
    addComponentsGetterSetter(l, a, c, d, g) {
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
        d && (E = d.call(this, E, a)), v && v.call(this, E, a);
        for (const k in E)
          E.hasOwnProperty(k) && this._setAttr(a + C(k), E[k]);
        return E || c.forEach((k) => {
          this._setAttr(a + C(k), void 0);
        }), this._fireChangeEvent(a, N, E), g && g.call(this), this;
      }, t.Factory.addOverloadedGetterSetter(l, a);
    },
    addOverloadedGetterSetter(l, a) {
      const c = e.Util._capitalize(a), d = o + c, g = r + c;
      l.prototype[a] = function() {
        return arguments.length ? (this[d](arguments[0]), this) : this[g]();
      };
    },
    addDeprecatedGetterSetter(l, a, c, d) {
      e.Util.error("Adding deprecated " + a);
      const g = r + e.Util._capitalize(a), y = a + " property is deprecated and will be removed soon. Look at Konva change log for more information.";
      l.prototype[g] = function() {
        e.Util.error(y);
        const C = this.attrs[a];
        return C === void 0 ? c : C;
      }, t.Factory.addSetter(l, a, d, function() {
        e.Util.error(y);
      }), t.Factory.addOverloadedGetterSetter(l, a);
    },
    backCompat(l, a) {
      e.Util.each(a, function(c, d) {
        const g = l.prototype[d], y = r + e.Util._capitalize(c), C = o + e.Util._capitalize(c);
        function S() {
          g.apply(this, arguments), e.Util.error('"' + c + '" method is deprecated and will be removed soon. Use ""' + d + '" instead.');
        }
        l.prototype[c] = S, l.prototype[y] = S, l.prototype[C] = S;
      });
    },
    afterSetFilter() {
      this._filterUpToDate = !1;
    }
  };
})(ke);
Object.defineProperty(be, "__esModule", { value: !0 });
be.Node = void 0;
const Fs = Qn, En = yc, Gl = ke, br = we, Pe = rt, ut = fe, wu = "absoluteOpacity", nu = "allEventListeners", Cr = "absoluteTransform", E2 = "absoluteScale", Gi = "canvas", T8 = "Change", N8 = "children", R8 = "konva", l0 = "listening", F8 = "mouseenter", M8 = "mouseleave", L8 = "pointerenter", A8 = "pointerleave", O8 = "touchenter", D8 = "touchleave", P2 = "set", T2 = "Shape", xu = " ", N2 = "stage", Zr = "transform", I8 = "Stage", a0 = "visible", z8 = [
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
].join(xu);
let G8 = 1;
class pe {
  constructor(e) {
    this._id = G8++, this.eventListeners = {}, this.attrs = {}, this.index = 0, this._allEventListeners = null, this.parent = null, this._cache = /* @__PURE__ */ new Map(), this._attachedDepsListeners = /* @__PURE__ */ new Map(), this._lastPos = null, this._batchingTransformChange = !1, this._needClearTransformCache = !1, this._filterUpToDate = !1, this._isUnderCache = !1, this._dragEventId = null, this._shouldFireChangeEvents = !1, this.setAttrs(e), this._shouldFireChangeEvents = !0;
  }
  hasChildren() {
    return !1;
  }
  _clearCache(e) {
    (e === Zr || e === Cr) && this._cache.get(e) ? this._cache.get(e).dirty = !0 : e ? this._cache.delete(e) : this._cache.clear();
  }
  _getCache(e, n) {
    let r = this._cache.get(e);
    return (r === void 0 || (e === Zr || e === Cr) && r.dirty === !0) && (r = n.call(this), this._cache.set(e, r)), r;
  }
  _calculate(e, n, r) {
    if (!this._attachedDepsListeners.get(e)) {
      const o = n.map((l) => l + "Change.konva").join(xu);
      this.on(o, () => {
        this._clearCache(e);
      }), this._attachedDepsListeners.set(e, !0);
    }
    return this._getCache(e, r);
  }
  _getCanvasCache() {
    return this._cache.get(Gi);
  }
  _clearSelfAndDescendantCache(e) {
    this._clearCache(e), e === Cr && this.fire("absoluteTransformChange");
  }
  clearCache() {
    if (this._cache.has(Gi)) {
      const { scene: e, filter: n, hit: r, buffer: o } = this._cache.get(Gi);
      Pe.Util.releaseCanvas(e, n, r, o), this._cache.delete(Gi);
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
    let o = Math.ceil(n.width || r.width), l = Math.ceil(n.height || r.height), a = n.pixelRatio, c = n.x === void 0 ? Math.floor(r.x) : n.x, d = n.y === void 0 ? Math.floor(r.y) : n.y, g = n.offset || 0, y = n.drawBorder || !1, C = n.hitCanvasPixelRatio || 1;
    if (!o || !l) {
      Pe.Util.error("Can not cache the node. Width or height of the node equals 0. Caching is skipped.");
      return;
    }
    const S = Math.abs(Math.round(r.x) - c) > 0.5 ? 1 : 0, x = Math.abs(Math.round(r.y) - d) > 0.5 ? 1 : 0;
    o += g * 2 + S, l += g * 2 + x, c -= g, d -= g;
    const v = new Fs.SceneCanvas({
      pixelRatio: a,
      width: o,
      height: l
    }), E = new Fs.SceneCanvas({
      pixelRatio: a,
      width: 0,
      height: 0,
      willReadFrequently: !0
    }), N = new Fs.HitCanvas({
      pixelRatio: C,
      width: o,
      height: l
    }), k = v.getContext(), w = N.getContext(), p = new Fs.SceneCanvas({
      width: v.width / v.pixelRatio + Math.abs(c),
      height: v.height / v.pixelRatio + Math.abs(d),
      pixelRatio: v.pixelRatio
    }), _ = p.getContext();
    return N.isCache = !0, v.isCache = !0, this._cache.delete(Gi), this._filterUpToDate = !1, n.imageSmoothingEnabled === !1 && (v.getContext()._context.imageSmoothingEnabled = !1, E.getContext()._context.imageSmoothingEnabled = !1), k.save(), w.save(), _.save(), k.translate(-c, -d), w.translate(-c, -d), _.translate(-c, -d), p.x = c, p.y = d, this._isUnderCache = !0, this._clearSelfAndDescendantCache(wu), this._clearSelfAndDescendantCache(E2), this.drawScene(v, this, p), this.drawHit(N, this), this._isUnderCache = !1, k.restore(), w.restore(), y && (k.save(), k.beginPath(), k.rect(0, 0, o, l), k.closePath(), k.setAttr("strokeStyle", "red"), k.setAttr("lineWidth", 5), k.stroke(), k.restore()), this._cache.set(Gi, {
      scene: v,
      filter: E,
      hit: N,
      buffer: p,
      x: c,
      y: d
    }), this._requestDraw(), this;
  }
  isCached() {
    return this._cache.has(Gi);
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
    const d = this.getAbsoluteTransform(n);
    return r.forEach(function(g) {
      const y = d.point(g);
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
    let e = this.filters(), n = this._getCanvasCache(), r = n.scene, o = n.filter, l = o.getContext(), a, c, d, g;
    if (e) {
      if (!this._filterUpToDate) {
        const y = r.pixelRatio;
        o.setSize(r.width / r.pixelRatio, r.height / r.pixelRatio);
        try {
          for (a = e.length, l.clear(), l.drawImage(r._canvas, 0, 0, r.getWidth() / y, r.getHeight() / y), c = l.getImageData(0, 0, o.getWidth(), o.getHeight()), d = 0; d < a; d++) {
            if (g = e[d], typeof g != "function") {
              Pe.Util.error("Filter should be type of function, but got " + typeof g + " instead. Please check correct filters");
              continue;
            }
            g.call(this, c), l.putImageData(c, 0, 0);
          }
        } catch (C) {
          Pe.Util.error("Unable to apply filter. " + C.message + " This post my help you https://konvajs.org/docs/posts/Tainted_Canvas.html.");
        }
        this._filterUpToDate = !0;
      }
      return o;
    }
    return r;
  }
  on(e, n) {
    if (this._cache && this._cache.delete(nu), arguments.length === 3)
      return this._delegate.apply(this, arguments);
    const r = e.split(xu);
    for (let o = 0; o < r.length; o++) {
      const a = r[o].split("."), c = a[0], d = a[1] || "";
      this.eventListeners[c] || (this.eventListeners[c] = []), this.eventListeners[c].push({ name: d, handler: n });
    }
    return this;
  }
  off(e, n) {
    let r = (e || "").split(xu), o = r.length, l, a, c, d, g, y;
    if (this._cache && this._cache.delete(nu), !e)
      for (a in this.eventListeners)
        this._off(a);
    for (l = 0; l < o; l++)
      if (c = r[l], d = c.split("."), g = d[0], y = d[1], g)
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
        l = Pe.Util.cloneObject(l), l.currentTarget = a[c], r.call(a[c], l);
    });
  }
  remove() {
    return this.isDragging() && this.stopDrag(), En.DD._dragElements.delete(this._id), this._remove(), this;
  }
  _clearCaches() {
    this._clearSelfAndDescendantCache(Cr), this._clearSelfAndDescendantCache(wu), this._clearSelfAndDescendantCache(E2), this._clearSelfAndDescendantCache(N2), this._clearSelfAndDescendantCache(a0), this._clearSelfAndDescendantCache(l0);
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
    const n = "get" + Pe.Util._capitalize(e);
    return Pe.Util._isFunction(this[n]) ? this[n]() : this.attrs[e];
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
        n !== N8 && (r = P2 + Pe.Util._capitalize(n), Pe.Util._isFunction(this[r]) ? this[r](e[n]) : this._setAttr(n, e[n]));
    }), this;
  }
  isListening() {
    return this._getCache(l0, this._isListening);
  }
  _isListening(e) {
    if (!this.listening())
      return !1;
    const r = this.getParent();
    return r && r !== e && this !== e ? r._isListening(e) : !0;
  }
  isVisible() {
    return this._getCache(a0, this._isVisible);
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
    En.DD._dragElements.forEach((a) => {
      a.dragStatus === "dragging" && (a.node.nodeType === "Stage" || a.node.getLayer() === r) && (o = !0);
    });
    const l = !n && !br.Konva.hitOnDragEnabled && (o || br.Konva.isTransforming());
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
    function d(y) {
      for (o = [], l = y.length, a = 0; a < l; a++)
        c = y[a], r++, c.nodeType !== T2 && (o = o.concat(c.getChildren().slice())), c._id === n._id && (a = l);
      o.length > 0 && o[0].getDepth() <= e && d(o);
    }
    const g = this.getStage();
    return n.nodeType !== I8 && g && d(g.getChildren()), r;
  }
  getDepth() {
    let e = 0, n = this.parent;
    for (; n; )
      e++, n = n.parent;
    return e;
  }
  _batchTransformChanges(e) {
    this._batchingTransformChange = !0, e(), this._batchingTransformChange = !1, this._needClearTransformCache && (this._clearCache(Zr), this._clearSelfAndDescendantCache(Cr)), this._needClearTransformCache = !1;
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
    const o = this.getAbsoluteTransform(e).getMatrix(), l = new Pe.Transform(), a = this.offset();
    return l.m = o.slice(), l.translate(a.x, a.y), l.getTranslation();
  }
  setAbsolutePosition(e) {
    const { x: n, y: r, ...o } = this._clearTransform();
    this.attrs.x = n, this.attrs.y = r, this._clearCache(Zr);
    const l = this._getAbsoluteTransform().copy();
    return l.invert(), l.translate(e.x, e.y), e = {
      x: this.attrs.x + l.getTranslation().x,
      y: this.attrs.y + l.getTranslation().y
    }, this._setTransform(o), this.setPosition({ x: e.x, y: e.y }), this._clearCache(Zr), this._clearSelfAndDescendantCache(Cr), this;
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
      return Pe.Util.warn("Node has no parent. moveToTop function is ignored."), !1;
    const e = this.index, n = this.parent.getChildren().length;
    return e < n - 1 ? (this.parent.children.splice(e, 1), this.parent.children.push(this), this.parent._setChildrenIndices(), !0) : !1;
  }
  moveUp() {
    if (!this.parent)
      return Pe.Util.warn("Node has no parent. moveUp function is ignored."), !1;
    const e = this.index, n = this.parent.getChildren().length;
    return e < n - 1 ? (this.parent.children.splice(e, 1), this.parent.children.splice(e + 1, 0, this), this.parent._setChildrenIndices(), !0) : !1;
  }
  moveDown() {
    if (!this.parent)
      return Pe.Util.warn("Node has no parent. moveDown function is ignored."), !1;
    const e = this.index;
    return e > 0 ? (this.parent.children.splice(e, 1), this.parent.children.splice(e - 1, 0, this), this.parent._setChildrenIndices(), !0) : !1;
  }
  moveToBottom() {
    if (!this.parent)
      return Pe.Util.warn("Node has no parent. moveToBottom function is ignored."), !1;
    const e = this.index;
    return e > 0 ? (this.parent.children.splice(e, 1), this.parent.children.unshift(this), this.parent._setChildrenIndices(), !0) : !1;
  }
  setZIndex(e) {
    if (!this.parent)
      return Pe.Util.warn("Node has no parent. zIndex parameter is ignored."), this;
    (e < 0 || e >= this.parent.children.length) && Pe.Util.warn("Unexpected value " + e + " for zIndex property. zIndex is just index of a node in children of its parent. Expected value is from 0 to " + (this.parent.children.length - 1) + ".");
    const n = this.index;
    return this.parent.children.splice(n, 1), this.parent.children.splice(e, 0, this), this.parent._setChildrenIndices(), this;
  }
  getAbsoluteOpacity() {
    return this._getCache(wu, this._getAbsoluteOpacity);
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
      r = e[n], a = Pe.Util.isObject(r) && !Pe.Util._isPlainObject(r) && !Pe.Util._isArray(r), !a && (o = typeof this[n] == "function" && this[n], delete e[n], l = o ? o.call(this) : null, e[n] = r, l !== r && (c.attrs[n] = r));
    return Pe.Util._prepareToStringify(c);
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
      if (l = n[o], Pe.Util.isValidSelector(l) || (Pe.Util.warn('Selector "' + l + '" is invalid. Allowed selectors examples are "#foo", ".bar" or "Group".'), Pe.Util.warn('If you have a custom shape with such className, please change it to start with upper letter like "Triangle".'), Pe.Util.warn("Konva is awesome, right?")), l.charAt(0) === "#") {
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
    return this._getCache(N2, this._getStage);
  }
  _getStage() {
    const e = this.getParent();
    return e ? e.getStage() : null;
  }
  fire(e, n = {}, r) {
    return n.target = n.target || this, r ? this._fireAndBubble(e, n) : this._fire(e, n), this;
  }
  getAbsoluteTransform(e) {
    return e ? this._getAbsoluteTransform(e) : this._getCache(Cr, this._getAbsoluteTransform);
  }
  _getAbsoluteTransform(e) {
    let n;
    if (e)
      return n = new Pe.Transform(), this._eachAncestorReverse(function(r) {
        const o = r.transformsEnabled();
        o === "all" ? n.multiply(r.getTransform()) : o === "position" && n.translate(r.x() - r.offsetX(), r.y() - r.offsetY());
      }, e), n;
    {
      n = this._cache.get(Cr) || new Pe.Transform(), this.parent ? this.parent.getAbsoluteTransform().copyInto(n) : n.reset();
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
    return this._getCache(Zr, this._getTransform);
  }
  _getTransform() {
    var e, n;
    const r = this._cache.get(Zr) || new Pe.Transform();
    r.reset();
    const o = this.x(), l = this.y(), a = br.Konva.getAngle(this.rotation()), c = (e = this.attrs.scaleX) !== null && e !== void 0 ? e : 1, d = (n = this.attrs.scaleY) !== null && n !== void 0 ? n : 1, g = this.attrs.skewX || 0, y = this.attrs.skewY || 0, C = this.attrs.offsetX || 0, S = this.attrs.offsetY || 0;
    return (o !== 0 || l !== 0) && r.translate(o, l), a !== 0 && r.rotate(a), (g !== 0 || y !== 0) && r.skew(g, y), (c !== 1 || d !== 1) && r.scale(c, d), (C !== 0 || S !== 0) && r.translate(-1 * C, -1 * S), r.dirty = !1, r;
  }
  clone(e) {
    let n = Pe.Util.cloneObject(this.attrs), r, o, l, a, c;
    for (r in e)
      n[r] = e[r];
    const d = new this.constructor(n);
    for (r in this.eventListeners)
      for (o = this.eventListeners[r], l = o.length, a = 0; a < l; a++)
        c = o[a], c.name.indexOf(R8) < 0 && (d.eventListeners[r] || (d.eventListeners[r] = []), d.eventListeners[r].push(c));
    return d;
  }
  _toKonvaCanvas(e) {
    e = e || {};
    const n = this.getClientRect(), r = this.getStage(), o = e.x !== void 0 ? e.x : Math.floor(n.x), l = e.y !== void 0 ? e.y : Math.floor(n.y), a = e.pixelRatio || 1, c = new Fs.SceneCanvas({
      width: e.width || Math.ceil(n.width) || (r ? r.width() : 0),
      height: e.height || Math.ceil(n.height) || (r ? r.height() : 0),
      pixelRatio: a
    }), d = c.getContext(), g = new Fs.SceneCanvas({
      width: c.width / c.pixelRatio + Math.abs(o),
      height: c.height / c.pixelRatio + Math.abs(l),
      pixelRatio: c.pixelRatio
    });
    return e.imageSmoothingEnabled === !1 && (d._context.imageSmoothingEnabled = !1), d.save(), (o || l) && d.translate(-1 * o, -1 * l), this.drawScene(c, void 0, g), d.restore(), c;
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
        o && delete e.callback, Pe.Util._urlToImage(this.toDataURL(e), function(l) {
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
    return this.attrs.dragDistance !== void 0 ? this.attrs.dragDistance : this.parent ? this.parent.getDragDistance() : br.Konva.dragDistance;
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
    this._fire(e + T8, {
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
    const r = this[P2 + Pe.Util._capitalize(e)];
    return Pe.Util._isFunction(r) ? r.call(this, n) : this._setAttr(e, n), this;
  }
  _requestDraw() {
    if (br.Konva.autoDrawEnabled) {
      const e = this.getLayer() || this.getStage();
      e == null || e.batchDraw();
    }
  }
  _setAttr(e, n) {
    const r = this.attrs[e];
    r === n && !Pe.Util.isObject(n) || (n == null ? delete this.attrs[e] : this.attrs[e] = n, this._shouldFireChangeEvents && this._fireChangeEvent(e, r, n), this._requestDraw());
  }
  _setComponentAttr(e, n, r) {
    let o;
    r !== void 0 && (o = this.attrs[e], o || (this.attrs[e] = this.getAttr(e)), this.attrs[e][n] = r, this._fireChangeEvent(e, o, r));
  }
  _fireAndBubble(e, n, r) {
    n && this.nodeType === T2 && (n.target = this);
    const o = [
      F8,
      M8,
      L8,
      A8,
      O8,
      D8
    ];
    if (!(o.indexOf(e) !== -1 && (r && (this === r || this.isAncestorOf && this.isAncestorOf(r)) || this.nodeType === "Stage" && !r))) {
      this._fire(e, n);
      const a = o.indexOf(e) !== -1 && r && r.isAncestorOf && r.isAncestorOf(this) && !r.isAncestorOf(this.parent);
      (n && !n.cancelBubble || !n) && this.parent && this.parent.isListening() && !a && (r && r.parent ? this._fireAndBubble.call(this.parent, e, n, r) : this._fireAndBubble.call(this.parent, e, n));
    }
  }
  _getProtoListeners(e) {
    var n, r, o;
    const l = (n = this._cache.get(nu)) !== null && n !== void 0 ? n : {};
    let a = l == null ? void 0 : l[e];
    if (a === void 0) {
      a = [];
      let c = Object.getPrototypeOf(this);
      for (; c; ) {
        const d = (o = (r = c.eventListeners) === null || r === void 0 ? void 0 : r[e]) !== null && o !== void 0 ? o : [];
        a.push(...d), c = Object.getPrototypeOf(c);
      }
      l[e] = a, this._cache.set(nu, l);
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
    En.DD._dragElements.set(this._id, {
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
    En.DD._dragElements.has(this._id) || this._createDragElement(e);
    const r = En.DD._dragElements.get(this._id);
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
      a ? o = a : Pe.Util.warn("dragBoundFunc did not return any value. That is unexpected behavior. You must return new absolute position from dragBoundFunc.");
    }
    (!this._lastPos || this._lastPos.x !== o.x || this._lastPos.y !== o.y) && (this.setAbsolutePosition(o), this._requestDraw()), this._lastPos = o;
  }
  stopDrag(e) {
    const n = En.DD._dragElements.get(this._id);
    n && (n.dragStatus = "stopped"), En.DD._endDragBefore(e), En.DD._endDragAfter(e);
  }
  setDraggable(e) {
    this._setAttr("draggable", e), this._dragChange();
  }
  isDragging() {
    const e = En.DD._dragElements.get(this._id);
    return e ? e.dragStatus === "dragging" : !1;
  }
  _listenDrag() {
    this._dragCleanup(), this.on("mousedown.konva touchstart.konva", function(e) {
      if (!(!(e.evt.button !== void 0) || br.Konva.dragButtons.indexOf(e.evt.button) >= 0) || this.isDragging())
        return;
      let o = !1;
      En.DD._dragElements.forEach((l) => {
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
      const n = En.DD._dragElements.get(this._id), r = n && n.dragStatus === "dragging", o = n && n.dragStatus === "ready";
      r ? this.stopDrag() : o && En.DD._dragElements.delete(this._id);
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
    return Pe.Util.haveIntersection(r, this.getClientRect());
  }
  static create(e, n) {
    return Pe.Util._isString(e) && (e = JSON.parse(e)), this._createNode(e, n);
  }
  static _createNode(e, n) {
    let r = pe.prototype.getClassName.call(e), o = e.children, l, a, c;
    n && (e.attrs.container = n), br.Konva[r] || (Pe.Util.warn('Can not find a node with class name "' + r + '". Fallback to "Shape".'), r = "Shape");
    const d = br.Konva[r];
    if (l = new d(e.attrs), o)
      for (a = o.length, c = 0; c < a; c++)
        l.add(pe._createNode(o[c]));
    return l;
  }
}
be.Node = pe;
pe.prototype.nodeType = "Node";
pe.prototype._attrsAffectingSize = [];
pe.prototype.eventListeners = {};
pe.prototype.on.call(pe.prototype, z8, function() {
  if (this._batchingTransformChange) {
    this._needClearTransformCache = !0;
    return;
  }
  this._clearCache(Zr), this._clearSelfAndDescendantCache(Cr);
});
pe.prototype.on.call(pe.prototype, "visibleChange.konva", function() {
  this._clearSelfAndDescendantCache(a0);
});
pe.prototype.on.call(pe.prototype, "listeningChange.konva", function() {
  this._clearSelfAndDescendantCache(l0);
});
pe.prototype.on.call(pe.prototype, "opacityChange.konva", function() {
  this._clearSelfAndDescendantCache(wu);
});
const Ve = Gl.Factory.addGetterSetter;
Ve(pe, "zIndex");
Ve(pe, "absolutePosition");
Ve(pe, "position");
Ve(pe, "x", 0, (0, ut.getNumberValidator)());
Ve(pe, "y", 0, (0, ut.getNumberValidator)());
Ve(pe, "globalCompositeOperation", "source-over", (0, ut.getStringValidator)());
Ve(pe, "opacity", 1, (0, ut.getNumberValidator)());
Ve(pe, "name", "", (0, ut.getStringValidator)());
Ve(pe, "id", "", (0, ut.getStringValidator)());
Ve(pe, "rotation", 0, (0, ut.getNumberValidator)());
Gl.Factory.addComponentsGetterSetter(pe, "scale", ["x", "y"]);
Ve(pe, "scaleX", 1, (0, ut.getNumberValidator)());
Ve(pe, "scaleY", 1, (0, ut.getNumberValidator)());
Gl.Factory.addComponentsGetterSetter(pe, "skew", ["x", "y"]);
Ve(pe, "skewX", 0, (0, ut.getNumberValidator)());
Ve(pe, "skewY", 0, (0, ut.getNumberValidator)());
Gl.Factory.addComponentsGetterSetter(pe, "offset", ["x", "y"]);
Ve(pe, "offsetX", 0, (0, ut.getNumberValidator)());
Ve(pe, "offsetY", 0, (0, ut.getNumberValidator)());
Ve(pe, "dragDistance", void 0, (0, ut.getNumberValidator)());
Ve(pe, "width", 0, (0, ut.getNumberValidator)());
Ve(pe, "height", 0, (0, ut.getNumberValidator)());
Ve(pe, "listening", !0, (0, ut.getBooleanValidator)());
Ve(pe, "preventDefault", !0, (0, ut.getBooleanValidator)());
Ve(pe, "filters", void 0, function(t) {
  return this._filterUpToDate = !1, t;
});
Ve(pe, "visible", !0, (0, ut.getBooleanValidator)());
Ve(pe, "transformsEnabled", "all", (0, ut.getStringValidator)());
Ve(pe, "size");
Ve(pe, "dragBoundFunc");
Ve(pe, "draggable", !1, (0, ut.getBooleanValidator)());
Gl.Factory.backCompat(pe, {
  rotateDeg: "rotate",
  setRotationDeg: "setRotation",
  getRotationDeg: "getRotation"
});
var rs = {};
Object.defineProperty(rs, "__esModule", { value: !0 });
rs.Container = void 0;
const fo = ke, nh = be, vc = fe;
class is extends nh.Node {
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
    const e = nh.Node.prototype.toObject.call(this);
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
    const n = nh.Node.prototype.clone.call(this, e);
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
    const o = this.getLayer(), l = e || o && o.getCanvas(), a = l && l.getContext(), c = this._getCanvasCache(), d = c && c.scene, g = l && l.isCache;
    if (!this.isVisible() && !g)
      return this;
    if (d) {
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
      const d = this.getAbsoluteTransform(n).getMatrix();
      l.transform(d[0], d[1], d[2], d[3], d[4], d[5]), this._drawCachedHitCanvas(l), l.restore();
    } else
      this._drawChildren("drawHit", o, n);
    return this;
  }
  _drawChildren(e, n, r, o) {
    var l;
    const a = n && n.getContext(), c = this.clipWidth(), d = this.clipHeight(), g = this.clipFunc(), y = typeof c == "number" && typeof d == "number" || g, C = r === this;
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
        a.rect(N || 0, k || 0, c, d);
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
    let l, a, c, d, g = {
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
      v.width === 0 && v.height === 0 || (l === void 0 ? (l = v.x, a = v.y, c = v.x + v.width, d = v.y + v.height) : (l = Math.min(l, v.x), a = Math.min(a, v.y), c = Math.max(c, v.x + v.width), d = Math.max(d, v.y + v.height)));
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
      height: d - a
    } : g = {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    }, r ? g : this._transformedRect(g, o);
  }
}
rs.Container = is;
fo.Factory.addComponentsGetterSetter(is, "clip", [
  "x",
  "y",
  "width",
  "height"
]);
fo.Factory.addGetterSetter(is, "clipX", void 0, (0, vc.getNumberValidator)());
fo.Factory.addGetterSetter(is, "clipY", void 0, (0, vc.getNumberValidator)());
fo.Factory.addGetterSetter(is, "clipWidth", void 0, (0, vc.getNumberValidator)());
fo.Factory.addGetterSetter(is, "clipHeight", void 0, (0, vc.getNumberValidator)());
fo.Factory.addGetterSetter(is, "clipFunc");
var F4 = {}, _i = {};
Object.defineProperty(_i, "__esModule", { value: !0 });
_i.getCapturedShape = B8;
_i.createEvent = f1;
_i.hasPointerCapture = V8;
_i.setPointerCapture = j8;
_i.releaseCapture = L4;
const U8 = we, Fl = /* @__PURE__ */ new Map(), M4 = U8.Konva._global.PointerEvent !== void 0;
function B8(t) {
  return Fl.get(t);
}
function f1(t) {
  return {
    evt: t,
    pointerId: t.pointerId
  };
}
function V8(t, e) {
  return Fl.get(t) === e;
}
function j8(t, e) {
  L4(t), e.getStage() && (Fl.set(t, e), M4 && e._fire("gotpointercapture", f1(new PointerEvent("gotpointercapture"))));
}
function L4(t, e) {
  const n = Fl.get(t);
  if (!n)
    return;
  const r = n.getStage();
  r && r.content, Fl.delete(t), M4 && n._fire("lostpointercapture", f1(new PointerEvent("lostpointercapture")));
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.Stage = t.stages = void 0;
  const e = rt, n = ke, r = rs, o = we, l = Qn, a = yc, c = we, d = _i, g = "Stage", y = "string", C = "px", S = "mouseout", x = "mouseleave", v = "mouseover", E = "mouseenter", N = "mousemove", k = "mousedown", w = "mouseup", p = "pointermove", _ = "pointerdown", T = "pointerup", F = "pointercancel", M = "lostpointercapture", R = "pointerout", G = "pointerleave", L = "pointerover", B = "pointerenter", H = "contextmenu", I = "touchstart", J = "touchend", $ = "touchmove", he = "touchcancel", _e = "wheel", j = 5, Q = [
    [E, "_pointerenter"],
    [k, "_pointerdown"],
    [N, "_pointermove"],
    [w, "_pointerup"],
    [x, "_pointerleave"],
    [I, "_pointerdown"],
    [$, "_pointermove"],
    [J, "_pointerup"],
    [he, "_pointercancel"],
    [v, "_pointerover"],
    [_e, "_wheel"],
    [H, "_contextmenu"],
    [_, "_pointerdown"],
    [p, "_pointermove"],
    [T, "_pointerup"],
    [F, "_pointercancel"],
    [G, "_pointerleave"],
    [M, "_lostpointercapture"]
  ], X = {
    mouse: {
      [R]: S,
      [G]: x,
      [L]: v,
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
      [L]: "touchover",
      [B]: "touchenter",
      [p]: $,
      [_]: I,
      [T]: J,
      [F]: he,
      pointerclick: "tap",
      pointerdblclick: "dbltap"
    },
    pointer: {
      [R]: R,
      [G]: G,
      [L]: L,
      [B]: B,
      [p]: p,
      [_]: _,
      [T]: T,
      [F]: F,
      pointerclick: "pointerclick",
      pointerdblclick: "pointerdblclick"
    }
  }, q = (Ue) => Ue.indexOf("pointer") >= 0 ? "pointer" : Ue.indexOf("touch") >= 0 ? "touch" : "mouse", se = (Ue) => {
    const A = q(Ue);
    if (A === "pointer")
      return o.Konva.pointerEventsEnabled && X.pointer;
    if (A === "touch")
      return X.touch;
    if (A === "mouse")
      return X.mouse;
  };
  function ge(Ue = {}) {
    return (Ue.clipFunc || Ue.clipWidth || Ue.clipHeight) && e.Util.warn("Stage does not support clipping. Please use clip for Layers or Groups."), Ue;
  }
  const ft = "Pointer position is missing and not registered by the stage. Looks like it is outside of the stage container. You can set it manually from event: stage.setPointersPositions(event);";
  t.stages = [];
  class ht extends r.Container {
    constructor(A) {
      super(ge(A)), this._pointerPositions = [], this._changedPointerPositions = [], this._buildDOM(), this._bindContentEvents(), t.stages.push(this), this.on("widthChange.konva heightChange.konva", this._resizeDOM), this.on("visibleChange.konva", this._checkVisibility), this.on("clipWidthChange.konva clipHeightChange.konva clipFuncChange.konva", () => {
        ge(this.attrs);
      }), this._checkVisibility();
    }
    _validateAdd(A) {
      const W = A.getType() === "Layer", ae = A.getType() === "FastLayer";
      W || ae || e.Util.throw("You may only add layers to the stage.");
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
          const ae = A.slice(1);
          A = document.getElementsByClassName(ae)[0];
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
      for (let ae = 0; ae < W; ae++)
        A[ae].clear();
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
      }), ae = W.getContext()._context, Re = this.children;
      return (A.x || A.y) && ae.translate(-1 * A.x, -1 * A.y), Re.forEach(function(de) {
        if (!de.isVisible())
          return;
        const Oe = de._toKonvaCanvas(A);
        ae.drawImage(Oe._canvas, A.x, A.y, Oe.getWidth() / Oe.getPixelRatio(), Oe.getHeight() / Oe.getPixelRatio());
      }), W;
    }
    getIntersection(A) {
      if (!A)
        return null;
      const W = this.children, ae = W.length, Re = ae - 1;
      for (let de = Re; de >= 0; de--) {
        const Oe = W[de].getIntersection(A);
        if (Oe)
          return Oe;
      }
      return null;
    }
    _resizeDOM() {
      const A = this.width(), W = this.height();
      this.content && (this.content.style.width = A + C, this.content.style.height = W + C), this.bufferCanvas.setSize(A, W), this.bufferHitCanvas.setSize(A, W), this.children.forEach((ae) => {
        ae.setSize({ width: A, height: W }), ae.draw();
      });
    }
    add(A, ...W) {
      if (arguments.length > 1) {
        for (let Re = 0; Re < arguments.length; Re++)
          this.add(arguments[Re]);
        return this;
      }
      super.add(A);
      const ae = this.children.length;
      return ae > j && e.Util.warn("The stage has " + ae + " layers. Recommended maximum number of layers is 3-5. Adding more layers into the stage may drop the performance. Rethink your tree structure, you can use Konva.Group."), A.setSize({ width: this.width(), height: this.height() }), A.draw(), o.Konva.isBrowser && this.content.appendChild(A.canvas._canvas), this;
    }
    getParent() {
      return null;
    }
    getLayer() {
      return null;
    }
    hasPointerCapture(A) {
      return d.hasPointerCapture(A, this);
    }
    setPointerCapture(A) {
      d.setPointerCapture(A, this);
    }
    releaseCapture(A) {
      d.releaseCapture(A, this);
    }
    getLayers() {
      return this.children;
    }
    _bindContentEvents() {
      o.Konva.isBrowser && Q.forEach(([A, W]) => {
        this.content.addEventListener(A, (ae) => {
          this[W](ae);
        }, { passive: !1 });
      });
    }
    _pointerenter(A) {
      this.setPointersPositions(A);
      const W = se(A.type);
      W && this._fire(W.pointerenter, {
        evt: A,
        target: this,
        currentTarget: this
      });
    }
    _pointerover(A) {
      this.setPointersPositions(A);
      const W = se(A.type);
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
      const W = se(A.type), ae = q(A.type);
      if (!W)
        return;
      this.setPointersPositions(A);
      const Re = this._getTargetShape(ae), de = !(o.Konva.isDragging() || o.Konva.isTransforming()) || o.Konva.hitOnDragEnabled;
      Re && de ? (Re._fireAndBubble(W.pointerout, { evt: A }), Re._fireAndBubble(W.pointerleave, { evt: A }), this._fire(W.pointerleave, {
        evt: A,
        target: this,
        currentTarget: this
      }), this[ae + "targetShape"] = null) : de && (this._fire(W.pointerleave, {
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
      const W = se(A.type), ae = q(A.type);
      if (!W)
        return;
      this.setPointersPositions(A);
      let Re = !1;
      this._changedPointerPositions.forEach((de) => {
        const Oe = this.getIntersection(de);
        if (a.DD.justDragged = !1, o.Konva["_" + ae + "ListenClick"] = !0, !Oe || !Oe.isListening()) {
          this[ae + "ClickStartShape"] = void 0;
          return;
        }
        o.Konva.capturePointerEventsEnabled && Oe.setPointerCapture(de.id), this[ae + "ClickStartShape"] = Oe, Oe._fireAndBubble(W.pointerdown, {
          evt: A,
          pointerId: de.id
        }), Re = !0;
        const xe = A.type.indexOf("touch") >= 0;
        Oe.preventDefault() && A.cancelable && xe && A.preventDefault();
      }), Re || this._fire(W.pointerdown, {
        evt: A,
        target: this,
        currentTarget: this,
        pointerId: this._pointerPositions[0].id
      });
    }
    _pointermove(A) {
      const W = se(A.type), ae = q(A.type);
      if (!W || (o.Konva.isDragging() && a.DD.node.preventDefault() && A.cancelable && A.preventDefault(), this.setPointersPositions(A), !(!(o.Konva.isDragging() || o.Konva.isTransforming()) || o.Konva.hitOnDragEnabled)))
        return;
      const de = {};
      let Oe = !1;
      const xe = this._getTargetShape(ae);
      this._changedPointerPositions.forEach((ln) => {
        const De = d.getCapturedShape(ln.id) || this.getIntersection(ln), Zn = ln.id, an = { evt: A, pointerId: Zn }, Ln = xe !== De;
        if (Ln && xe && (xe._fireAndBubble(W.pointerout, { ...an }, De), xe._fireAndBubble(W.pointerleave, { ...an }, De)), De) {
          if (de[De._id])
            return;
          de[De._id] = !0;
        }
        De && De.isListening() ? (Oe = !0, Ln && (De._fireAndBubble(W.pointerover, { ...an }, xe), De._fireAndBubble(W.pointerenter, { ...an }, xe), this[ae + "targetShape"] = De), De._fireAndBubble(W.pointermove, { ...an })) : xe && (this._fire(W.pointerover, {
          evt: A,
          target: this,
          currentTarget: this,
          pointerId: Zn
        }), this[ae + "targetShape"] = null);
      }), Oe || this._fire(W.pointermove, {
        evt: A,
        target: this,
        currentTarget: this,
        pointerId: this._changedPointerPositions[0].id
      });
    }
    _pointerup(A) {
      const W = se(A.type), ae = q(A.type);
      if (!W)
        return;
      this.setPointersPositions(A);
      const Re = this[ae + "ClickStartShape"], de = this[ae + "ClickEndShape"], Oe = {};
      let xe = !1;
      this._changedPointerPositions.forEach((ln) => {
        const De = d.getCapturedShape(ln.id) || this.getIntersection(ln);
        if (De) {
          if (De.releaseCapture(ln.id), Oe[De._id])
            return;
          Oe[De._id] = !0;
        }
        const Zn = ln.id, an = { evt: A, pointerId: Zn };
        let Ln = !1;
        o.Konva["_" + ae + "InDblClickWindow"] ? (Ln = !0, clearTimeout(this[ae + "DblTimeout"])) : a.DD.justDragged || (o.Konva["_" + ae + "InDblClickWindow"] = !0, clearTimeout(this[ae + "DblTimeout"])), this[ae + "DblTimeout"] = setTimeout(function() {
          o.Konva["_" + ae + "InDblClickWindow"] = !1;
        }, o.Konva.dblClickWindow), De && De.isListening() ? (xe = !0, this[ae + "ClickEndShape"] = De, De._fireAndBubble(W.pointerup, { ...an }), o.Konva["_" + ae + "ListenClick"] && Re && Re === De && (De._fireAndBubble(W.pointerclick, { ...an }), Ln && de && de === De && De._fireAndBubble(W.pointerdblclick, { ...an }))) : (this[ae + "ClickEndShape"] = null, o.Konva["_" + ae + "ListenClick"] && this._fire(W.pointerclick, {
          evt: A,
          target: this,
          currentTarget: this,
          pointerId: Zn
        }), Ln && this._fire(W.pointerdblclick, {
          evt: A,
          target: this,
          currentTarget: this,
          pointerId: Zn
        }));
      }), xe || this._fire(W.pointerup, {
        evt: A,
        target: this,
        currentTarget: this,
        pointerId: this._changedPointerPositions[0].id
      }), o.Konva["_" + ae + "ListenClick"] = !1, A.cancelable && ae !== "touch" && ae !== "pointer" && A.preventDefault();
    }
    _contextmenu(A) {
      this.setPointersPositions(A);
      const W = this.getIntersection(this.getPointerPosition());
      W && W.isListening() ? W._fireAndBubble(H, { evt: A }) : this._fire(H, {
        evt: A,
        target: this,
        currentTarget: this
      });
    }
    _wheel(A) {
      this.setPointersPositions(A);
      const W = this.getIntersection(this.getPointerPosition());
      W && W.isListening() ? W._fireAndBubble(_e, { evt: A }) : this._fire(_e, {
        evt: A,
        target: this,
        currentTarget: this
      });
    }
    _pointercancel(A) {
      this.setPointersPositions(A);
      const W = d.getCapturedShape(A.pointerId) || this.getIntersection(this.getPointerPosition());
      W && W._fireAndBubble(T, d.createEvent(A)), d.releaseCapture(A.pointerId);
    }
    _lostpointercapture(A) {
      d.releaseCapture(A.pointerId);
    }
    setPointersPositions(A) {
      const W = this._getContentPosition();
      let ae = null, Re = null;
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
      })) : (ae = (A.clientX - W.left) / W.scaleX, Re = (A.clientY - W.top) / W.scaleY, this.pointerPos = {
        x: ae,
        y: Re
      }, this._pointerPositions = [{ x: ae, y: Re, id: e.Util._getFirstPointerId(A) }], this._changedPointerPositions = [
        { x: ae, y: Re, id: e.Util._getFirstPointerId(A) }
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
    t.stages.forEach((Ue) => {
      Ue.batchDraw();
    });
  });
})(F4);
var Ul = {}, _t = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.Shape = t.shapes = void 0;
  const e = we, n = rt, r = ke, o = be, l = fe, a = we, c = _i, d = "hasShadow", g = "shadowRGBA", y = "patternImage", C = "linearGradient", S = "radialGradient";
  let x;
  function v() {
    return x || (x = n.Util.createCanvasElement().getContext("2d"), x);
  }
  t.shapes = {};
  function E(G) {
    const L = this.attrs.fillRule;
    L ? G.fill(L) : G.fill();
  }
  function N(G) {
    G.stroke();
  }
  function k(G) {
    const L = this.attrs.fillRule;
    L ? G.fill(L) : G.fill();
  }
  function w(G) {
    G.stroke();
  }
  function p() {
    this._clearCache(d);
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
  function M() {
    this._clearCache(S);
  }
  class R extends o.Node {
    constructor(L) {
      super(L);
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
      return this._getCache(d, this._hasShadow);
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
          const H = new n.Transform();
          H.translate(this.fillPatternX(), this.fillPatternY()), H.rotate(e.Konva.getAngle(this.fillPatternRotation())), H.scale(this.fillPatternScaleX(), this.fillPatternScaleY()), H.translate(-1 * this.fillPatternOffsetX(), -1 * this.fillPatternOffsetY());
          const I = H.getMatrix(), J = typeof DOMMatrix > "u" ? {
            a: I[0],
            b: I[1],
            c: I[2],
            d: I[3],
            e: I[4],
            f: I[5]
          } : new DOMMatrix(I);
          B.setTransform(J);
        }
        return B;
      }
    }
    _getLinearGradient() {
      return this._getCache(C, this.__getLinearGradient);
    }
    __getLinearGradient() {
      const L = this.fillLinearGradientColorStops();
      if (L) {
        const B = v(), H = this.fillLinearGradientStartPoint(), I = this.fillLinearGradientEndPoint(), J = B.createLinearGradient(H.x, H.y, I.x, I.y);
        for (let $ = 0; $ < L.length; $ += 2)
          J.addColorStop(L[$], L[$ + 1]);
        return J;
      }
    }
    _getRadialGradient() {
      return this._getCache(S, this.__getRadialGradient);
    }
    __getRadialGradient() {
      const L = this.fillRadialGradientColorStops();
      if (L) {
        const B = v(), H = this.fillRadialGradientStartPoint(), I = this.fillRadialGradientEndPoint(), J = B.createRadialGradient(H.x, H.y, this.fillRadialGradientStartRadius(), I.x, I.y, this.fillRadialGradientEndRadius());
        for (let $ = 0; $ < L.length; $ += 2)
          J.addColorStop(L[$], L[$ + 1]);
        return J;
      }
    }
    getShadowRGBA() {
      return this._getCache(g, this._getShadowRGBA);
    }
    _getShadowRGBA() {
      if (!this.hasShadow())
        return;
      const L = n.Util.colorToRGBA(this.shadowColor());
      if (L)
        return "rgba(" + L.r + "," + L.g + "," + L.b + "," + L.a * (this.shadowOpacity() || 1) + ")";
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
      const L = this.hitStrokeWidth();
      return L === "auto" ? this.hasStroke() : this.strokeEnabled() && !!L;
    }
    intersects(L) {
      const B = this.getStage();
      if (!B)
        return !1;
      const H = B.bufferHitCanvas;
      return H.getContext().clear(), this.drawHit(H, void 0, !0), H.context.getImageData(Math.round(L.x), Math.round(L.y), 1, 1).data[3] > 0;
    }
    destroy() {
      return o.Node.prototype.destroy.call(this), delete t.shapes[this.colorKey], delete this.colorKey, this;
    }
    _useBufferCanvas(L) {
      var B;
      if (!((B = this.attrs.perfectDrawEnabled) !== null && B !== void 0 ? B : !0))
        return !1;
      const I = L || this.hasFill(), J = this.hasStroke(), $ = this.getAbsoluteOpacity() !== 1;
      if (I && J && $)
        return !0;
      const he = this.hasShadow(), _e = this.shadowForStrokeEnabled();
      return !!(I && J && he && _e);
    }
    setStrokeHitEnabled(L) {
      n.Util.warn("strokeHitEnabled property is deprecated. Please use hitStrokeWidth instead."), L ? this.hitStrokeWidth("auto") : this.hitStrokeWidth(0);
    }
    getStrokeHitEnabled() {
      return this.hitStrokeWidth() !== 0;
    }
    getSelfRect() {
      const L = this.size();
      return {
        x: this._centroid ? -L.width / 2 : 0,
        y: this._centroid ? -L.height / 2 : 0,
        width: L.width,
        height: L.height
      };
    }
    getClientRect(L = {}) {
      let B = !1, H = this.getParent();
      for (; H; ) {
        if (H.isCached()) {
          B = !0;
          break;
        }
        H = H.getParent();
      }
      const I = L.skipTransform, J = L.relativeTo || B && this.getStage() || void 0, $ = this.getSelfRect(), _e = !L.skipStroke && this.hasStroke() && this.strokeWidth() || 0, j = $.width + _e, Q = $.height + _e, X = !L.skipShadow && this.hasShadow(), q = X ? this.shadowOffsetX() : 0, se = X ? this.shadowOffsetY() : 0, ge = j + Math.abs(q), ft = Q + Math.abs(se), ht = X && this.shadowBlur() || 0, Ue = ge + ht * 2, A = ft + ht * 2, W = {
        width: Ue,
        height: A,
        x: -(_e / 2 + ht) + Math.min(q, 0) + $.x,
        y: -(_e / 2 + ht) + Math.min(se, 0) + $.y
      };
      return I ? W : this._transformedRect(W, J);
    }
    drawScene(L, B, H) {
      const I = this.getLayer(), J = L || I.getCanvas(), $ = J.getContext(), he = this._getCanvasCache(), _e = this.getSceneFunc(), j = this.hasShadow();
      let Q;
      const X = B === this;
      if (!this.isVisible() && !X)
        return this;
      if (he) {
        $.save();
        const q = this.getAbsoluteTransform(B).getMatrix();
        return $.transform(q[0], q[1], q[2], q[3], q[4], q[5]), this._drawCachedSceneCanvas($), $.restore(), this;
      }
      if (!_e)
        return this;
      if ($.save(), this._useBufferCanvas()) {
        Q = this.getStage();
        const q = H || Q.bufferCanvas, se = q.getContext();
        se.clear(), se.save(), se._applyLineJoin(this);
        const ge = this.getAbsoluteTransform(B).getMatrix();
        se.transform(ge[0], ge[1], ge[2], ge[3], ge[4], ge[5]), _e.call(this, se, this), se.restore();
        const ft = q.pixelRatio;
        j && $._applyShadow(this), $._applyOpacity(this), $._applyGlobalCompositeOperation(this), $.drawImage(q._canvas, q.x || 0, q.y || 0, q.width / ft, q.height / ft);
      } else {
        if ($._applyLineJoin(this), !X) {
          const q = this.getAbsoluteTransform(B).getMatrix();
          $.transform(q[0], q[1], q[2], q[3], q[4], q[5]), $._applyOpacity(this), $._applyGlobalCompositeOperation(this);
        }
        j && $._applyShadow(this), _e.call(this, $, this);
      }
      return $.restore(), this;
    }
    drawHit(L, B, H = !1) {
      if (!this.shouldDrawHit(B, H))
        return this;
      const I = this.getLayer(), J = L || I.hitCanvas, $ = J && J.getContext(), he = this.hitFunc() || this.sceneFunc(), _e = this._getCanvasCache(), j = _e && _e.hit;
      if (this.colorKey || n.Util.warn("Looks like your canvas has a destroyed shape in it. Do not reuse shape after you destroyed it. If you want to reuse shape you should call remove() instead of destroy()"), j) {
        $.save();
        const X = this.getAbsoluteTransform(B).getMatrix();
        return $.transform(X[0], X[1], X[2], X[3], X[4], X[5]), this._drawCachedHitCanvas($), $.restore(), this;
      }
      if (!he)
        return this;
      if ($.save(), $._applyLineJoin(this), !(this === B)) {
        const X = this.getAbsoluteTransform(B).getMatrix();
        $.transform(X[0], X[1], X[2], X[3], X[4], X[5]);
      }
      return he.call(this, $, this), $.restore(), this;
    }
    drawHitFromCache(L = 0) {
      const B = this._getCanvasCache(), H = this._getCachedSceneCanvas(), I = B.hit, J = I.getContext(), $ = I.getWidth(), he = I.getHeight();
      J.clear(), J.drawImage(H._canvas, 0, 0, $, he);
      try {
        const _e = J.getImageData(0, 0, $, he), j = _e.data, Q = j.length, X = n.Util._hexToRgb(this.colorKey);
        for (let q = 0; q < Q; q += 4)
          j[q + 3] > L ? (j[q] = X.r, j[q + 1] = X.g, j[q + 2] = X.b, j[q + 3] = 255) : j[q + 3] = 0;
        J.putImageData(_e, 0, 0);
      } catch (_e) {
        n.Util.error("Unable to draw hit graph from cached scene canvas. " + _e.message);
      }
      return this;
    }
    hasPointerCapture(L) {
      return c.hasPointerCapture(L, this);
    }
    setPointerCapture(L) {
      c.setPointerCapture(L, this);
    }
    releaseCapture(L) {
      c.releaseCapture(L, this);
    }
  }
  t.Shape = R, R.prototype._fillFunc = E, R.prototype._strokeFunc = N, R.prototype._fillFuncHit = k, R.prototype._strokeFuncHit = w, R.prototype._centroid = !1, R.prototype.nodeType = "Shape", (0, a._registerNode)(R), R.prototype.eventListeners = {}, R.prototype.on.call(R.prototype, "shadowColorChange.konva shadowBlurChange.konva shadowOffsetChange.konva shadowOpacityChange.konva shadowEnabledChange.konva", p), R.prototype.on.call(R.prototype, "shadowColorChange.konva shadowOpacityChange.konva shadowEnabledChange.konva", _), R.prototype.on.call(R.prototype, "fillPriorityChange.konva fillPatternImageChange.konva fillPatternRepeatChange.konva fillPatternScaleXChange.konva fillPatternScaleYChange.konva fillPatternOffsetXChange.konva fillPatternOffsetYChange.konva fillPatternXChange.konva fillPatternYChange.konva fillPatternRotationChange.konva", T), R.prototype.on.call(R.prototype, "fillPriorityChange.konva fillLinearGradientColorStopsChange.konva fillLinearGradientStartPointXChange.konva fillLinearGradientStartPointYChange.konva fillLinearGradientEndPointXChange.konva fillLinearGradientEndPointYChange.konva", F), R.prototype.on.call(R.prototype, "fillPriorityChange.konva fillRadialGradientColorStopsChange.konva fillRadialGradientStartPointXChange.konva fillRadialGradientStartPointYChange.konva fillRadialGradientEndPointXChange.konva fillRadialGradientEndPointYChange.konva fillRadialGradientStartRadiusChange.konva fillRadialGradientEndRadiusChange.konva", M), r.Factory.addGetterSetter(R, "stroke", void 0, (0, l.getStringOrGradientValidator)()), r.Factory.addGetterSetter(R, "strokeWidth", 2, (0, l.getNumberValidator)()), r.Factory.addGetterSetter(R, "fillAfterStrokeEnabled", !1), r.Factory.addGetterSetter(R, "hitStrokeWidth", "auto", (0, l.getNumberOrAutoValidator)()), r.Factory.addGetterSetter(R, "strokeHitEnabled", !0, (0, l.getBooleanValidator)()), r.Factory.addGetterSetter(R, "perfectDrawEnabled", !0, (0, l.getBooleanValidator)()), r.Factory.addGetterSetter(R, "shadowForStrokeEnabled", !0, (0, l.getBooleanValidator)()), r.Factory.addGetterSetter(R, "lineJoin"), r.Factory.addGetterSetter(R, "lineCap"), r.Factory.addGetterSetter(R, "sceneFunc"), r.Factory.addGetterSetter(R, "hitFunc"), r.Factory.addGetterSetter(R, "dash"), r.Factory.addGetterSetter(R, "dashOffset", 0, (0, l.getNumberValidator)()), r.Factory.addGetterSetter(R, "shadowColor", void 0, (0, l.getStringValidator)()), r.Factory.addGetterSetter(R, "shadowBlur", 0, (0, l.getNumberValidator)()), r.Factory.addGetterSetter(R, "shadowOpacity", 1, (0, l.getNumberValidator)()), r.Factory.addComponentsGetterSetter(R, "shadowOffset", ["x", "y"]), r.Factory.addGetterSetter(R, "shadowOffsetX", 0, (0, l.getNumberValidator)()), r.Factory.addGetterSetter(R, "shadowOffsetY", 0, (0, l.getNumberValidator)()), r.Factory.addGetterSetter(R, "fillPatternImage"), r.Factory.addGetterSetter(R, "fill", void 0, (0, l.getStringOrGradientValidator)()), r.Factory.addGetterSetter(R, "fillPatternX", 0, (0, l.getNumberValidator)()), r.Factory.addGetterSetter(R, "fillPatternY", 0, (0, l.getNumberValidator)()), r.Factory.addGetterSetter(R, "fillLinearGradientColorStops"), r.Factory.addGetterSetter(R, "strokeLinearGradientColorStops"), r.Factory.addGetterSetter(R, "fillRadialGradientStartRadius", 0), r.Factory.addGetterSetter(R, "fillRadialGradientEndRadius", 0), r.Factory.addGetterSetter(R, "fillRadialGradientColorStops"), r.Factory.addGetterSetter(R, "fillPatternRepeat", "repeat"), r.Factory.addGetterSetter(R, "fillEnabled", !0), r.Factory.addGetterSetter(R, "strokeEnabled", !0), r.Factory.addGetterSetter(R, "shadowEnabled", !0), r.Factory.addGetterSetter(R, "dashEnabled", !0), r.Factory.addGetterSetter(R, "strokeScaleEnabled", !0), r.Factory.addGetterSetter(R, "fillPriority", "color"), r.Factory.addComponentsGetterSetter(R, "fillPatternOffset", ["x", "y"]), r.Factory.addGetterSetter(R, "fillPatternOffsetX", 0, (0, l.getNumberValidator)()), r.Factory.addGetterSetter(R, "fillPatternOffsetY", 0, (0, l.getNumberValidator)()), r.Factory.addComponentsGetterSetter(R, "fillPatternScale", ["x", "y"]), r.Factory.addGetterSetter(R, "fillPatternScaleX", 1, (0, l.getNumberValidator)()), r.Factory.addGetterSetter(R, "fillPatternScaleY", 1, (0, l.getNumberValidator)()), r.Factory.addComponentsGetterSetter(R, "fillLinearGradientStartPoint", [
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
Object.defineProperty(Ul, "__esModule", { value: !0 });
Ul.Layer = void 0;
const xr = rt, rh = rs, Ms = be, h1 = ke, R2 = Qn, H8 = fe, W8 = _t, K8 = we, Y8 = "#", X8 = "beforeDraw", $8 = "draw", A4 = [
  { x: 0, y: 0 },
  { x: -1, y: -1 },
  { x: 1, y: -1 },
  { x: 1, y: 1 },
  { x: -1, y: 1 }
], Q8 = A4.length;
let ho = class extends rh.Container {
  constructor(e) {
    super(e), this.canvas = new R2.SceneCanvas(), this.hitCanvas = new R2.HitCanvas({
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
    Ms.Node.prototype.moveToTop.call(this);
    const e = this.getStage();
    return e && e.content && (e.content.removeChild(this.getNativeCanvasElement()), e.content.appendChild(this.getNativeCanvasElement())), !0;
  }
  moveUp() {
    if (!Ms.Node.prototype.moveUp.call(this))
      return !1;
    const n = this.getStage();
    return !n || !n.content ? !1 : (n.content.removeChild(this.getNativeCanvasElement()), this.index < n.children.length - 1 ? n.content.insertBefore(this.getNativeCanvasElement(), n.children[this.index + 1].getCanvas()._canvas) : n.content.appendChild(this.getNativeCanvasElement()), !0);
  }
  moveDown() {
    if (Ms.Node.prototype.moveDown.call(this)) {
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
    if (Ms.Node.prototype.moveToBottom.call(this)) {
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
    return Ms.Node.prototype.remove.call(this), e && e.parentNode && xr.Util._isInDocument(e) && e.parentNode.removeChild(e), this;
  }
  getStage() {
    return this.parent;
  }
  setSize({ width: e, height: n }) {
    return this.canvas.setSize(e, n), this.hitCanvas.setSize(e, n), this._setSmoothEnabled(), this;
  }
  _validateAdd(e) {
    const n = e.getType();
    n !== "Group" && n !== "Shape" && xr.Util.throw("You may only add groups and shapes to a layer.");
  }
  _toKonvaCanvas(e) {
    return e = e || {}, e.width = e.width || this.getWidth(), e.height = e.height || this.getHeight(), e.x = e.x !== void 0 ? e.x : this.x(), e.y = e.y !== void 0 ? e.y : this.y(), Ms.Node.prototype._toKonvaCanvas.call(this, e);
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
    xr.Util.warn('Can not change width of layer. Use "stage.width(value)" function instead.');
  }
  getHeight() {
    if (this.parent)
      return this.parent.height();
  }
  setHeight() {
    xr.Util.warn('Can not change height of layer. Use "stage.height(value)" function instead.');
  }
  batchDraw() {
    return this._waitingForDraw || (this._waitingForDraw = !0, xr.Util.requestAnimFrame(() => {
      this.draw(), this._waitingForDraw = !1;
    })), this;
  }
  getIntersection(e) {
    if (!this.isListening() || !this.isVisible())
      return null;
    let n = 1, r = !1;
    for (; ; ) {
      for (let o = 0; o < Q8; o++) {
        const l = A4[o], a = this._getIntersection({
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
      const l = xr.Util._rgbToHex(r[0], r[1], r[2]), a = W8.shapes[Y8 + l];
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
    return this._fire(X8, {
      node: this
    }), this.clearBeforeDraw() && l.getContext().clear(), rh.Container.prototype.drawScene.call(this, l, n, r), this._fire($8, {
      node: this
    }), this;
  }
  drawHit(e, n) {
    const r = this.getLayer(), o = e || r && r.hitCanvas;
    return r && r.clearBeforeDraw() && r.getHitCanvas().getContext().clear(), rh.Container.prototype.drawHit.call(this, o, n), this;
  }
  enableHitGraph() {
    return this.hitGraphEnabled(!0), this;
  }
  disableHitGraph() {
    return this.hitGraphEnabled(!1), this;
  }
  setHitGraphEnabled(e) {
    xr.Util.warn("hitGraphEnabled method is deprecated. Please use layer.listening() instead."), this.listening(e);
  }
  getHitGraphEnabled(e) {
    return xr.Util.warn("hitGraphEnabled method is deprecated. Please use layer.listening() instead."), this.listening();
  }
  toggleHitCanvas() {
    if (!this.parent || !this.parent.content)
      return;
    const e = this.parent;
    !!this.hitCanvas._canvas.parentNode ? e.content.removeChild(this.hitCanvas._canvas) : e.content.appendChild(this.hitCanvas._canvas);
  }
  destroy() {
    return xr.Util.releaseCanvas(this.getNativeCanvasElement(), this.getHitCanvas()._canvas), super.destroy();
  }
};
Ul.Layer = ho;
ho.prototype.nodeType = "Layer";
(0, K8._registerNode)(ho);
h1.Factory.addGetterSetter(ho, "imageSmoothingEnabled", !0);
h1.Factory.addGetterSetter(ho, "clearBeforeDraw", !0);
h1.Factory.addGetterSetter(ho, "hitGraphEnabled", !0, (0, H8.getBooleanValidator)());
var _c = {};
Object.defineProperty(_c, "__esModule", { value: !0 });
_c.FastLayer = void 0;
const q8 = rt, b8 = Ul, Z8 = we;
class p1 extends b8.Layer {
  constructor(e) {
    super(e), this.listening(!1), q8.Util.warn('Konva.Fast layer is deprecated. Please use "new Konva.Layer({ listening: false })" instead.');
  }
}
_c.FastLayer = p1;
p1.prototype.nodeType = "FastLayer";
(0, Z8._registerNode)(p1);
var po = {};
Object.defineProperty(po, "__esModule", { value: !0 });
po.Group = void 0;
const J8 = rt, e9 = rs, t9 = we;
let g1 = class extends e9.Container {
  _validateAdd(e) {
    const n = e.getType();
    n !== "Group" && n !== "Shape" && J8.Util.throw("You may only add groups and shapes to groups.");
  }
};
po.Group = g1;
g1.prototype.nodeType = "Group";
(0, t9._registerNode)(g1);
var go = {};
Object.defineProperty(go, "__esModule", { value: !0 });
go.Animation = void 0;
const ih = we, F2 = rt, sh = function() {
  return ih.glob.performance && ih.glob.performance.now ? function() {
    return ih.glob.performance.now();
  } : function() {
    return (/* @__PURE__ */ new Date()).getTime();
  };
}();
class cr {
  constructor(e, n) {
    this.id = cr.animIdCounter++, this.frame = {
      time: 0,
      timeDiff: 0,
      lastTime: sh(),
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
    const n = cr.animations, r = n.length;
    for (let o = 0; o < r; o++)
      if (n[o].id === this.id)
        return !0;
    return !1;
  }
  start() {
    return this.stop(), this.frame.timeDiff = 0, this.frame.lastTime = sh(), cr._addAnimation(this), this;
  }
  stop() {
    return cr._removeAnimation(this), this;
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
      o._updateFrameObject(sh());
      const c = l.length;
      let d;
      if (a ? d = a.call(o, o.frame) !== !1 : d = !0, !!d)
        for (let g = 0; g < c; g++) {
          const y = l[g];
          y._id !== void 0 && (e[y._id] = y);
        }
    }
    for (const r in e)
      e.hasOwnProperty(r) && e[r].batchDraw();
  }
  static _animationLoop() {
    const e = cr;
    e.animations.length ? (e._runFrames(), F2.Util.requestAnimFrame(e._animationLoop)) : e.animRunning = !1;
  }
  static _handleAnimation() {
    this.animRunning || (this.animRunning = !0, F2.Util.requestAnimFrame(this._animationLoop));
  }
}
go.Animation = cr;
cr.animations = [];
cr.animIdCounter = 0;
cr.animRunning = !1;
var O4 = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.Easings = t.Tween = void 0;
  const e = rt, n = go, r = be, o = we, l = {
    node: 1,
    duration: 1,
    easing: 1,
    onFinish: 1,
    yoyo: 1
  }, a = 1, c = 2, d = 3, g = ["fill", "stroke", "shadowColor"];
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
      this.state = d, this._time = this.duration - this._time, this._startTime = this.getTimer() - this._time, this.onEnterFrame(), this.fire("onReverse");
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
      this.state === c ? this.setTime(v) : this.state === d && this.setTime(this.duration - v);
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
      }, F), this.tween = new C(T, function(M) {
        E._tweenFunc(M);
      }, w, 0, 1, _ * 1e3, p), this._addListeners(), S.attrs[k] || (S.attrs[k] = {}), S.attrs[k][this._id] || (S.attrs[k][this._id] = {}), S.tweens[k] || (S.tweens[k] = {});
      for (T in v)
        l[T] === void 0 && this._addAttr(T, v[T]);
      this.reset(), this.onFinish = v.onFinish, this.onReset = v.onReset, this.onUpdate = v.onUpdate;
    }
    _addAttr(v, E) {
      const N = this.node, k = N._id;
      let w, p, _, T, F;
      const M = S.tweens[k][v];
      M && delete S.attrs[k][M][v];
      let R = N.getAttr(v);
      if (e.Util._isArray(E))
        if (w = [], p = Math.max(E.length, R.length), v === "points" && E.length !== R.length && (E.length > R.length ? (T = R, R = e.Util._prepareArrayForTween(R, E, N.closed())) : (_ = E, E = e.Util._prepareArrayForTween(E, R, N.closed()))), v.indexOf("fill") === 0)
          for (let G = 0; G < p; G++)
            if (G % 2 === 0)
              w.push(E[G] - R[G]);
            else {
              const L = e.Util.colorToRGBA(R[G]);
              F = e.Util.colorToRGBA(E[G]), R[G] = L, w.push({
                r: F.r - L.r,
                g: F.g - L.g,
                b: F.b - L.b,
                a: F.a - L.a
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
      let k, w, p, _, T, F, M, R;
      for (k in N) {
        if (w = N[k], p = w.start, _ = w.diff, R = w.end, e.Util._isArray(p))
          if (T = [], M = Math.max(p.length, R.length), k.indexOf("fill") === 0)
            for (F = 0; F < M; F++)
              F % 2 === 0 ? T.push((p[F] || 0) + _[F] * v) : T.push("rgba(" + Math.round(p[F].r + _[F].r * v) + "," + Math.round(p[F].g + _[F].g * v) + "," + Math.round(p[F].b + _[F].b * v) + "," + (p[F].a + _[F].a * v) + ")");
          else
            for (F = 0; F < M; F++)
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
})(O4);
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.Konva = void 0;
  const e = we, n = rt, r = be, o = rs, l = F4, a = Ul, c = _c, d = po, g = yc, y = _t, C = go, S = O4, x = Rr, v = Qn;
  t.Konva = n.Util._assign(e.Konva, {
    Util: n.Util,
    Transform: n.Transform,
    Node: r.Node,
    Container: o.Container,
    Stage: l.Stage,
    stages: l.stages,
    Layer: a.Layer,
    FastLayer: c.FastLayer,
    Group: d.Group,
    DD: g.DD,
    Shape: y.Shape,
    shapes: y.shapes,
    Animation: C.Animation,
    Tween: S.Tween,
    Easings: S.Easings,
    Context: x.Context,
    Canvas: v.Canvas
  }), t.default = t.Konva;
})(Xu);
var Sc = {};
Object.defineProperty(Sc, "__esModule", { value: !0 });
Sc.Arc = void 0;
const wc = ke, n9 = _t, M2 = we, xc = fe, r9 = we;
class zr extends n9.Shape {
  _sceneFunc(e) {
    const n = M2.Konva.getAngle(this.angle()), r = this.clockwise();
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
    const e = this.innerRadius(), n = this.outerRadius(), r = this.clockwise(), o = M2.Konva.getAngle(r ? 360 - this.angle() : this.angle()), l = Math.cos(Math.min(o, Math.PI)), a = 1, c = Math.sin(Math.min(Math.max(Math.PI, o), 3 * Math.PI / 2)), d = Math.sin(Math.min(o, Math.PI / 2)), g = l * (l > 0 ? e : n), y = a * n, C = c * (c > 0 ? e : n), S = d * (d > 0 ? n : e);
    return {
      x: g,
      y: r ? -1 * S : C,
      width: y - g,
      height: S - C
    };
  }
}
Sc.Arc = zr;
zr.prototype._centroid = !0;
zr.prototype.className = "Arc";
zr.prototype._attrsAffectingSize = [
  "innerRadius",
  "outerRadius",
  "angle",
  "clockwise"
];
(0, r9._registerNode)(zr);
wc.Factory.addGetterSetter(zr, "innerRadius", 0, (0, xc.getNumberValidator)());
wc.Factory.addGetterSetter(zr, "outerRadius", 0, (0, xc.getNumberValidator)());
wc.Factory.addGetterSetter(zr, "angle", 0, (0, xc.getNumberValidator)());
wc.Factory.addGetterSetter(zr, "clockwise", !1, (0, xc.getBooleanValidator)());
var Cc = {}, Bl = {};
Object.defineProperty(Bl, "__esModule", { value: !0 });
Bl.Line = void 0;
const kc = ke, i9 = we, s9 = _t, D4 = fe;
function u0(t, e, n, r, o, l, a) {
  const c = Math.sqrt(Math.pow(n - t, 2) + Math.pow(r - e, 2)), d = Math.sqrt(Math.pow(o - n, 2) + Math.pow(l - r, 2)), g = a * c / (c + d), y = a * d / (c + d), C = n - g * (o - t), S = r - g * (l - e), x = n + y * (o - t), v = r + y * (l - e);
  return [C, S, x, v];
}
function L2(t, e) {
  const n = t.length, r = [];
  for (let o = 2; o < n - 2; o += 2) {
    const l = u0(t[o - 2], t[o - 1], t[o], t[o + 1], t[o + 2], t[o + 3], e);
    isNaN(l[0]) || (r.push(l[0]), r.push(l[1]), r.push(t[o]), r.push(t[o + 1]), r.push(l[2]), r.push(l[3]));
  }
  return r;
}
let Si = class extends s9.Shape {
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
      const d = this.getTensionPoints(), g = d.length;
      for (c = l ? 0 : 4, l || e.quadraticCurveTo(d[0], d[1], d[2], d[3]); c < g - 2; )
        e.bezierCurveTo(d[c++], d[c++], d[c++], d[c++], d[c++], d[c++]);
      l || e.quadraticCurveTo(d[g - 2], d[g - 1], n[r - 2], n[r - 1]);
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
    return this.closed() ? this._getTensionPointsClosed() : L2(this.points(), this.tension());
  }
  _getTensionPointsClosed() {
    const e = this.points(), n = e.length, r = this.tension(), o = u0(e[n - 2], e[n - 1], e[0], e[1], e[2], e[3], r), l = u0(e[n - 4], e[n - 3], e[n - 2], e[n - 1], e[0], e[1], r), a = L2(e, r);
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
    for (let d = 0; d < e.length / 2; d++)
      a = e[d * 2], c = e[d * 2 + 1], n = Math.min(n, a), r = Math.max(r, a), o = Math.min(o, c), l = Math.max(l, c);
    return {
      x: n,
      y: o,
      width: r - n,
      height: l - o
    };
  }
};
Bl.Line = Si;
Si.prototype.className = "Line";
Si.prototype._attrsAffectingSize = ["points", "bezier", "tension"];
(0, i9._registerNode)(Si);
kc.Factory.addGetterSetter(Si, "closed", !1);
kc.Factory.addGetterSetter(Si, "bezier", !1);
kc.Factory.addGetterSetter(Si, "tension", 0, (0, D4.getNumberValidator)());
kc.Factory.addGetterSetter(Si, "points", [], (0, D4.getNumberArrayValidator)());
var mo = {}, I4 = {};
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
  const e = (a, c, d) => {
    let g, y;
    const S = d / 2;
    g = 0;
    for (let x = 0; x < 20; x++)
      y = S * t.tValues[20][x] + S, g += t.cValues[20][x] * r(a, c, y);
    return S * g;
  };
  t.getCubicArcLength = e;
  const n = (a, c, d) => {
    d === void 0 && (d = 1);
    const g = a[0] - 2 * a[1] + a[2], y = c[0] - 2 * c[1] + c[2], C = 2 * a[1] - 2 * a[0], S = 2 * c[1] - 2 * c[0], x = 4 * (g * g + y * y), v = 4 * (g * C + y * S), E = C * C + S * S;
    if (x === 0)
      return d * Math.sqrt(Math.pow(a[2] - a[0], 2) + Math.pow(c[2] - c[0], 2));
    const N = v / (2 * x), k = E / x, w = d + N, p = k - N * N, _ = w * w + p > 0 ? Math.sqrt(w * w + p) : 0, T = N * N + p > 0 ? Math.sqrt(N * N + p) : 0, F = N + Math.sqrt(N * N + p) !== 0 ? p * Math.log(Math.abs((w + _) / (N + T))) : 0;
    return Math.sqrt(x) / 2 * (w * _ - N * T + F);
  };
  t.getQuadraticArcLength = n;
  function r(a, c, d) {
    const g = o(1, d, a), y = o(1, d, c), C = g * g + y * y;
    return Math.sqrt(C);
  }
  const o = (a, c, d) => {
    const g = d.length - 1;
    let y, C;
    if (g === 0)
      return 0;
    if (a === 0) {
      C = 0;
      for (let S = 0; S <= g; S++)
        C += t.binomialCoefficients[g][S] * Math.pow(1 - c, g - S) * Math.pow(c, S) * d[S];
      return C;
    } else {
      y = new Array(g);
      for (let S = 0; S < g; S++)
        y[S] = g * (d[S + 1] - d[S]);
      return o(a - 1, c, y);
    }
  }, l = (a, c, d) => {
    let g = 1, y = a / c, C = (a - d(y)) / c, S = 0;
    for (; g > 1e-3; ) {
      const x = d(y + C), v = Math.abs(a - x) / c;
      if (v < g)
        g = v, y += C;
      else {
        const E = d(y - C), N = Math.abs(a - E) / c;
        N < g ? (g = N, y -= C) : C /= 2;
      }
      if (S++, S > 500)
        break;
    }
    return y;
  };
  t.t2length = l;
})(I4);
Object.defineProperty(mo, "__esModule", { value: !0 });
mo.Path = void 0;
const o9 = ke, l9 = we, a9 = _t, Ls = I4;
class mt extends a9.Shape {
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
          const c = a[0], d = a[1], g = a[2], y = a[3], C = a[4], S = a[5], x = a[6], v = a[7], E = g > y ? g : y, N = g > y ? 1 : g / y, k = g > y ? y / g : 1;
          e.translate(c, d), e.rotate(x), e.scale(N, k), e.arc(0, 0, E, C, C + S, 1 - v), e.scale(1 / N, 1 / k), e.rotate(-x), e.translate(-c, -d);
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
    this.dataArray.forEach(function(d) {
      if (d.command === "A") {
        const g = d.points[4], y = d.points[5], C = d.points[4] + y;
        let S = Math.PI / 180;
        if (Math.abs(g - C) < S && (S = Math.abs(g - C)), y < 0)
          for (let x = g - S; x > C; x -= S) {
            const v = mt.getPointOnEllipticalArc(d.points[0], d.points[1], d.points[2], d.points[3], x, 0);
            e.push(v.x, v.y);
          }
        else
          for (let x = g + S; x < C; x += S) {
            const v = mt.getPointOnEllipticalArc(d.points[0], d.points[1], d.points[2], d.points[3], x, 0);
            e.push(v.x, v.y);
          }
      } else if (d.command === "C")
        for (let g = 0; g <= 1; g += 0.01) {
          const y = mt.getPointOnCubicBezier(g, d.start.x, d.start.y, d.points[0], d.points[1], d.points[2], d.points[3], d.points[4], d.points[5]);
          e.push(y.x, y.y);
        }
      else
        e = e.concat(d.points);
    });
    let n = e[0], r = e[0], o = e[1], l = e[1], a, c;
    for (let d = 0; d < e.length / 2; d++)
      a = e[d * 2], c = e[d * 2 + 1], isNaN(a) || (n = Math.min(n, a), r = Math.max(r, a)), isNaN(c) || (o = Math.min(o, c), l = Math.max(l, c));
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
        return mt.getPointOnCubicBezier((0, Ls.t2length)(e, mt.getPathLength(n), (E) => (0, Ls.getCubicArcLength)([a.start.x, c[0], c[2], c[4]], [a.start.y, c[1], c[3], c[5]], E)), a.start.x, a.start.y, c[0], c[1], c[2], c[3], c[4], c[5]);
      case "Q":
        return mt.getPointOnQuadraticBezier((0, Ls.t2length)(e, mt.getPathLength(n), (E) => (0, Ls.getQuadraticArcLength)([a.start.x, c[0], c[2]], [a.start.y, c[1], c[3]], E)), a.start.x, a.start.y, c[0], c[1], c[2], c[3]);
      case "A":
        const d = c[0], g = c[1], y = c[2], C = c[3], S = c[5], x = c[6];
        let v = c[4];
        return v += S * e / a.pathLength, mt.getPointOnEllipticalArc(d, g, y, C, v, x);
    }
    return null;
  }
  static getPointOnLine(e, n, r, o, l, a, c) {
    a = a ?? n, c = c ?? r;
    const d = this.getLineLength(n, r, o, l);
    if (d < 1e-10)
      return { x: n, y: r };
    if (o === n)
      return { x: a, y: c + (l > r ? e : -e) };
    const g = (l - r) / (o - n), y = Math.sqrt(e * e / (1 + g * g)) * (o < n ? -1 : 1), C = g * y;
    if (Math.abs(c - r - g * (a - n)) < 1e-10)
      return { x: a + y, y: c + C };
    const S = ((a - n) * (o - n) + (c - r) * (l - r)) / (d * d), x = n + S * (o - n), v = r + S * (l - r), E = this.getLineLength(a, c, x, v), N = Math.sqrt(e * e - E * E), k = Math.sqrt(N * N / (1 + g * g)) * (o < n ? -1 : 1), w = g * k;
    return { x: x + k, y: v + w };
  }
  static getPointOnCubicBezier(e, n, r, o, l, a, c, d, g) {
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
    const v = d * y(e) + a * C(e) + o * S(e) + n * x(e), E = g * y(e) + c * C(e) + l * S(e) + r * x(e);
    return { x: v, y: E };
  }
  static getPointOnQuadraticBezier(e, n, r, o, l, a, c) {
    function d(x) {
      return x * x;
    }
    function g(x) {
      return 2 * x * (1 - x);
    }
    function y(x) {
      return (1 - x) * (1 - x);
    }
    const C = a * d(e) + o * g(e) + n * y(e), S = c * d(e) + l * g(e) + r * y(e);
    return { x: C, y: S };
  }
  static getPointOnEllipticalArc(e, n, r, o, l, a) {
    const c = Math.cos(a), d = Math.sin(a), g = {
      x: r * Math.cos(l),
      y: o * Math.sin(l)
    };
    return {
      x: e + (g.x * c - g.y * d),
      y: n + (g.x * d + g.y * c)
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
    let c = 0, d = 0;
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
        const k = c, w = d;
        let p, _, T, F, M, R, G, L, B, H;
        switch (x) {
          case "l":
            c += v.shift(), d += v.shift(), E = "L", N.push(c, d);
            break;
          case "L":
            c = v.shift(), d = v.shift(), N.push(c, d);
            break;
          case "m":
            const I = v.shift(), J = v.shift();
            if (c += I, d += J, E = "M", l.length > 2 && l[l.length - 1].command === "z") {
              for (let $ = l.length - 2; $ >= 0; $--)
                if (l[$].command === "M") {
                  c = l[$].points[0] + I, d = l[$].points[1] + J;
                  break;
                }
            }
            N.push(c, d), x = "l";
            break;
          case "M":
            c = v.shift(), d = v.shift(), E = "M", N.push(c, d), x = "L";
            break;
          case "h":
            c += v.shift(), E = "L", N.push(c, d);
            break;
          case "H":
            c = v.shift(), E = "L", N.push(c, d);
            break;
          case "v":
            d += v.shift(), E = "L", N.push(c, d);
            break;
          case "V":
            d = v.shift(), E = "L", N.push(c, d);
            break;
          case "C":
            N.push(v.shift(), v.shift(), v.shift(), v.shift()), c = v.shift(), d = v.shift(), N.push(c, d);
            break;
          case "c":
            N.push(c + v.shift(), d + v.shift(), c + v.shift(), d + v.shift()), c += v.shift(), d += v.shift(), E = "C", N.push(c, d);
            break;
          case "S":
            _ = c, T = d, p = l[l.length - 1], p.command === "C" && (_ = c + (c - p.points[2]), T = d + (d - p.points[3])), N.push(_, T, v.shift(), v.shift()), c = v.shift(), d = v.shift(), E = "C", N.push(c, d);
            break;
          case "s":
            _ = c, T = d, p = l[l.length - 1], p.command === "C" && (_ = c + (c - p.points[2]), T = d + (d - p.points[3])), N.push(_, T, c + v.shift(), d + v.shift()), c += v.shift(), d += v.shift(), E = "C", N.push(c, d);
            break;
          case "Q":
            N.push(v.shift(), v.shift()), c = v.shift(), d = v.shift(), N.push(c, d);
            break;
          case "q":
            N.push(c + v.shift(), d + v.shift()), c += v.shift(), d += v.shift(), E = "Q", N.push(c, d);
            break;
          case "T":
            _ = c, T = d, p = l[l.length - 1], p.command === "Q" && (_ = c + (c - p.points[0]), T = d + (d - p.points[1])), c = v.shift(), d = v.shift(), E = "Q", N.push(_, T, c, d);
            break;
          case "t":
            _ = c, T = d, p = l[l.length - 1], p.command === "Q" && (_ = c + (c - p.points[0]), T = d + (d - p.points[1])), c += v.shift(), d += v.shift(), E = "Q", N.push(_, T, c, d);
            break;
          case "A":
            F = v.shift(), M = v.shift(), R = v.shift(), G = v.shift(), L = v.shift(), B = c, H = d, c = v.shift(), d = v.shift(), E = "A", N = this.convertEndpointToCenterParameterization(B, H, c, d, G, L, F, M, R);
            break;
          case "a":
            F = v.shift(), M = v.shift(), R = v.shift(), G = v.shift(), L = v.shift(), B = c, H = d, c += v.shift(), d += v.shift(), E = "A", N = this.convertEndpointToCenterParameterization(B, H, c, d, G, L, F, M, R);
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
    let l, a, c, d;
    const g = mt;
    switch (r) {
      case "L":
        return g.getLineLength(e, n, o[0], o[1]);
      case "C":
        return (0, Ls.getCubicArcLength)([e, o[0], o[2], o[4]], [n, o[1], o[3], o[5]], 1);
      case "Q":
        return (0, Ls.getQuadraticArcLength)([e, o[0], o[2]], [n, o[1], o[3]], 1);
      case "A":
        l = 0;
        const y = o[4], C = o[5], S = o[4] + C;
        let x = Math.PI / 180;
        if (Math.abs(y - S) < x && (x = Math.abs(y - S)), a = g.getPointOnEllipticalArc(o[0], o[1], o[2], o[3], y, 0), C < 0)
          for (d = y - x; d > S; d -= x)
            c = g.getPointOnEllipticalArc(o[0], o[1], o[2], o[3], d, 0), l += g.getLineLength(a.x, a.y, c.x, c.y), a = c;
        else
          for (d = y + x; d < S; d += x)
            c = g.getPointOnEllipticalArc(o[0], o[1], o[2], o[3], d, 0), l += g.getLineLength(a.x, a.y, c.x, c.y), a = c;
        return c = g.getPointOnEllipticalArc(o[0], o[1], o[2], o[3], S, 0), l += g.getLineLength(a.x, a.y, c.x, c.y), l;
    }
    return 0;
  }
  static convertEndpointToCenterParameterization(e, n, r, o, l, a, c, d, g) {
    const y = g * (Math.PI / 180), C = Math.cos(y) * (e - r) / 2 + Math.sin(y) * (n - o) / 2, S = -1 * Math.sin(y) * (e - r) / 2 + Math.cos(y) * (n - o) / 2, x = C * C / (c * c) + S * S / (d * d);
    x > 1 && (c *= Math.sqrt(x), d *= Math.sqrt(x));
    let v = Math.sqrt((c * c * (d * d) - c * c * (S * S) - d * d * (C * C)) / (c * c * (S * S) + d * d * (C * C)));
    l === a && (v *= -1), isNaN(v) && (v = 0);
    const E = v * c * S / d, N = v * -d * C / c, k = (e + r) / 2 + Math.cos(y) * E - Math.sin(y) * N, w = (n + o) / 2 + Math.sin(y) * E + Math.cos(y) * N, p = function(L) {
      return Math.sqrt(L[0] * L[0] + L[1] * L[1]);
    }, _ = function(L, B) {
      return (L[0] * B[0] + L[1] * B[1]) / (p(L) * p(B));
    }, T = function(L, B) {
      return (L[0] * B[1] < L[1] * B[0] ? -1 : 1) * Math.acos(_(L, B));
    }, F = T([1, 0], [(C - E) / c, (S - N) / d]), M = [(C - E) / c, (S - N) / d], R = [(-1 * C - E) / c, (-1 * S - N) / d];
    let G = T(M, R);
    return _(M, R) <= -1 && (G = Math.PI), _(M, R) >= 1 && (G = 0), a === 0 && G > 0 && (G = G - 2 * Math.PI), a === 1 && G < 0 && (G = G + 2 * Math.PI), [k, w, c, d, F, G, y, a];
  }
}
mo.Path = mt;
mt.prototype.className = "Path";
mt.prototype._attrsAffectingSize = ["data"];
(0, l9._registerNode)(mt);
o9.Factory.addGetterSetter(mt, "data");
Object.defineProperty(Cc, "__esModule", { value: !0 });
Cc.Arrow = void 0;
const Ec = ke, u9 = Bl, z4 = fe, c9 = we, A2 = mo;
class ss extends u9.Line {
  _sceneFunc(e) {
    super._sceneFunc(e);
    const n = Math.PI * 2, r = this.points();
    let o = r;
    const l = this.tension() !== 0 && r.length > 4;
    l && (o = this.getTensionPoints());
    const a = this.pointerLength(), c = r.length;
    let d, g;
    if (l) {
      const S = [
        o[o.length - 4],
        o[o.length - 3],
        o[o.length - 2],
        o[o.length - 1],
        r[c - 2],
        r[c - 1]
      ], x = A2.Path.calcLength(o[o.length - 4], o[o.length - 3], "C", S), v = A2.Path.getPointOnQuadraticBezier(Math.min(1, 1 - a / x), S[0], S[1], S[2], S[3], S[4], S[5]);
      d = r[c - 2] - v.x, g = r[c - 1] - v.y;
    } else
      d = r[c - 2] - r[c - 4], g = r[c - 1] - r[c - 3];
    const y = (Math.atan2(g, d) + n) % n, C = this.pointerWidth();
    this.pointerAtEnding() && (e.save(), e.beginPath(), e.translate(r[c - 2], r[c - 1]), e.rotate(y), e.moveTo(0, 0), e.lineTo(-a, C / 2), e.lineTo(-a, -C / 2), e.closePath(), e.restore(), this.__fillStroke(e)), this.pointerAtBeginning() && (e.save(), e.beginPath(), e.translate(r[0], r[1]), l ? (d = (o[0] + o[2]) / 2 - r[0], g = (o[1] + o[3]) / 2 - r[1]) : (d = r[2] - r[0], g = r[3] - r[1]), e.rotate((Math.atan2(-g, -d) + n) % n), e.moveTo(0, 0), e.lineTo(-a, C / 2), e.lineTo(-a, -C / 2), e.closePath(), e.restore(), this.__fillStroke(e));
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
Cc.Arrow = ss;
ss.prototype.className = "Arrow";
(0, c9._registerNode)(ss);
Ec.Factory.addGetterSetter(ss, "pointerLength", 10, (0, z4.getNumberValidator)());
Ec.Factory.addGetterSetter(ss, "pointerWidth", 10, (0, z4.getNumberValidator)());
Ec.Factory.addGetterSetter(ss, "pointerAtBeginning", !1);
Ec.Factory.addGetterSetter(ss, "pointerAtEnding", !0);
var Pc = {};
Object.defineProperty(Pc, "__esModule", { value: !0 });
Pc.Circle = void 0;
const d9 = ke, f9 = _t, h9 = fe, p9 = we;
let yo = class extends f9.Shape {
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
Pc.Circle = yo;
yo.prototype._centroid = !0;
yo.prototype.className = "Circle";
yo.prototype._attrsAffectingSize = ["radius"];
(0, p9._registerNode)(yo);
d9.Factory.addGetterSetter(yo, "radius", 0, (0, h9.getNumberValidator)());
var Tc = {};
Object.defineProperty(Tc, "__esModule", { value: !0 });
Tc.Ellipse = void 0;
const m1 = ke, g9 = _t, G4 = fe, m9 = we;
class wi extends g9.Shape {
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
Tc.Ellipse = wi;
wi.prototype.className = "Ellipse";
wi.prototype._centroid = !0;
wi.prototype._attrsAffectingSize = ["radiusX", "radiusY"];
(0, m9._registerNode)(wi);
m1.Factory.addComponentsGetterSetter(wi, "radius", ["x", "y"]);
m1.Factory.addGetterSetter(wi, "radiusX", 0, (0, G4.getNumberValidator)());
m1.Factory.addGetterSetter(wi, "radiusY", 0, (0, G4.getNumberValidator)());
var Nc = {};
Object.defineProperty(Nc, "__esModule", { value: !0 });
Nc.Image = void 0;
const oh = rt, os = ke, y9 = _t, v9 = we, Vl = fe;
let hr = class U4 extends y9.Shape {
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
      const c = this.attrs.cropWidth, d = this.attrs.cropHeight;
      c && d ? a = [
        l,
        this.cropX(),
        this.cropY(),
        c,
        d,
        0,
        0,
        n,
        r
      ] : a = [l, 0, 0, n, r];
    }
    (this.hasFill() || this.hasStroke() || o) && (e.beginPath(), o ? oh.Util.drawRoundedRectPath(e, n, r, o) : e.rect(0, 0, n, r), e.closePath(), e.fillStrokeShape(this)), l && (o && e.clip(), e.drawImage.apply(e, a));
  }
  _hitFunc(e) {
    const n = this.width(), r = this.height(), o = this.cornerRadius();
    e.beginPath(), o ? oh.Util.drawRoundedRectPath(e, n, r, o) : e.rect(0, 0, n, r), e.closePath(), e.fillStrokeShape(this);
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
    const o = oh.Util.createImageElement();
    o.onload = function() {
      const l = new U4({
        image: o
      });
      n(l);
    }, o.onerror = r, o.crossOrigin = "Anonymous", o.src = e;
  }
};
Nc.Image = hr;
hr.prototype.className = "Image";
(0, v9._registerNode)(hr);
os.Factory.addGetterSetter(hr, "cornerRadius", 0, (0, Vl.getNumberOrArrayOfNumbersValidator)(4));
os.Factory.addGetterSetter(hr, "image");
os.Factory.addComponentsGetterSetter(hr, "crop", ["x", "y", "width", "height"]);
os.Factory.addGetterSetter(hr, "cropX", 0, (0, Vl.getNumberValidator)());
os.Factory.addGetterSetter(hr, "cropY", 0, (0, Vl.getNumberValidator)());
os.Factory.addGetterSetter(hr, "cropWidth", 0, (0, Vl.getNumberValidator)());
os.Factory.addGetterSetter(hr, "cropHeight", 0, (0, Vl.getNumberValidator)());
var so = {};
Object.defineProperty(so, "__esModule", { value: !0 });
so.Tag = so.Label = void 0;
const Rc = ke, _9 = _t, S9 = po, y1 = fe, B4 = we, V4 = [
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
], w9 = "Change.konva", x9 = "none", c0 = "up", d0 = "right", f0 = "down", h0 = "left", C9 = V4.length;
class v1 extends S9.Group {
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
    for (r = 0; r < C9; r++)
      e.on(V4[r] + w9, o);
  }
  getWidth() {
    return this.getText().width();
  }
  getHeight() {
    return this.getText().height();
  }
  _sync() {
    let e = this.getText(), n = this.getTag(), r, o, l, a, c, d, g;
    if (e && n) {
      switch (r = e.width(), o = e.height(), l = n.pointerDirection(), a = n.pointerWidth(), g = n.pointerHeight(), c = 0, d = 0, l) {
        case c0:
          c = r / 2, d = -1 * g;
          break;
        case d0:
          c = r + a, d = o / 2;
          break;
        case f0:
          c = r / 2, d = o + g;
          break;
        case h0:
          c = -1 * a, d = o / 2;
          break;
      }
      n.setAttrs({
        x: -1 * c,
        y: -1 * d,
        width: r,
        height: o
      }), e.setAttrs({
        x: -1 * c,
        y: -1 * d
      });
    }
  }
}
so.Label = v1;
v1.prototype.className = "Label";
(0, B4._registerNode)(v1);
class ls extends _9.Shape {
  _sceneFunc(e) {
    const n = this.width(), r = this.height(), o = this.pointerDirection(), l = this.pointerWidth(), a = this.pointerHeight(), c = this.cornerRadius();
    let d = 0, g = 0, y = 0, C = 0;
    typeof c == "number" ? d = g = y = C = Math.min(c, n / 2, r / 2) : (d = Math.min(c[0] || 0, n / 2, r / 2), g = Math.min(c[1] || 0, n / 2, r / 2), C = Math.min(c[2] || 0, n / 2, r / 2), y = Math.min(c[3] || 0, n / 2, r / 2)), e.beginPath(), e.moveTo(d, 0), o === c0 && (e.lineTo((n - l) / 2, 0), e.lineTo(n / 2, -1 * a), e.lineTo((n + l) / 2, 0)), e.lineTo(n - g, 0), e.arc(n - g, g, g, Math.PI * 3 / 2, 0, !1), o === d0 && (e.lineTo(n, (r - a) / 2), e.lineTo(n + l, r / 2), e.lineTo(n, (r + a) / 2)), e.lineTo(n, r - C), e.arc(n - C, r - C, C, 0, Math.PI / 2, !1), o === f0 && (e.lineTo((n + l) / 2, r), e.lineTo(n / 2, r + a), e.lineTo((n - l) / 2, r)), e.lineTo(y, r), e.arc(y, r - y, y, Math.PI / 2, Math.PI, !1), o === h0 && (e.lineTo(0, (r + a) / 2), e.lineTo(-1 * l, r / 2), e.lineTo(0, (r - a) / 2)), e.lineTo(0, d), e.arc(d, d, d, Math.PI, Math.PI * 3 / 2, !1), e.closePath(), e.fillStrokeShape(this);
  }
  getSelfRect() {
    let e = 0, n = 0, r = this.pointerWidth(), o = this.pointerHeight(), l = this.pointerDirection(), a = this.width(), c = this.height();
    return l === c0 ? (n -= o, c += o) : l === f0 ? c += o : l === h0 ? (e -= r * 1.5, a += r) : l === d0 && (a += r * 1.5), {
      x: e,
      y: n,
      width: a,
      height: c
    };
  }
}
so.Tag = ls;
ls.prototype.className = "Tag";
(0, B4._registerNode)(ls);
Rc.Factory.addGetterSetter(ls, "pointerDirection", x9);
Rc.Factory.addGetterSetter(ls, "pointerWidth", 0, (0, y1.getNumberValidator)());
Rc.Factory.addGetterSetter(ls, "pointerHeight", 0, (0, y1.getNumberValidator)());
Rc.Factory.addGetterSetter(ls, "cornerRadius", 0, (0, y1.getNumberOrArrayOfNumbersValidator)(4));
var jl = {};
Object.defineProperty(jl, "__esModule", { value: !0 });
jl.Rect = void 0;
const k9 = ke, E9 = _t, P9 = we, T9 = rt, N9 = fe;
let Fc = class extends E9.Shape {
  _sceneFunc(e) {
    const n = this.cornerRadius(), r = this.width(), o = this.height();
    e.beginPath(), n ? T9.Util.drawRoundedRectPath(e, r, o, n) : e.rect(0, 0, r, o), e.closePath(), e.fillStrokeShape(this);
  }
};
jl.Rect = Fc;
Fc.prototype.className = "Rect";
(0, P9._registerNode)(Fc);
k9.Factory.addGetterSetter(Fc, "cornerRadius", 0, (0, N9.getNumberOrArrayOfNumbersValidator)(4));
var Mc = {};
Object.defineProperty(Mc, "__esModule", { value: !0 });
Mc.RegularPolygon = void 0;
const j4 = ke, R9 = _t, H4 = fe, F9 = we;
class as extends R9.Shape {
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
Mc.RegularPolygon = as;
as.prototype.className = "RegularPolygon";
as.prototype._centroid = !0;
as.prototype._attrsAffectingSize = ["radius"];
(0, F9._registerNode)(as);
j4.Factory.addGetterSetter(as, "radius", 0, (0, H4.getNumberValidator)());
j4.Factory.addGetterSetter(as, "sides", 0, (0, H4.getNumberValidator)());
var Lc = {};
Object.defineProperty(Lc, "__esModule", { value: !0 });
Lc.Ring = void 0;
const W4 = ke, M9 = _t, K4 = fe, L9 = we, O2 = Math.PI * 2;
class us extends M9.Shape {
  _sceneFunc(e) {
    e.beginPath(), e.arc(0, 0, this.innerRadius(), 0, O2, !1), e.moveTo(this.outerRadius(), 0), e.arc(0, 0, this.outerRadius(), O2, 0, !0), e.closePath(), e.fillStrokeShape(this);
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
Lc.Ring = us;
us.prototype.className = "Ring";
us.prototype._centroid = !0;
us.prototype._attrsAffectingSize = ["innerRadius", "outerRadius"];
(0, L9._registerNode)(us);
W4.Factory.addGetterSetter(us, "innerRadius", 0, (0, K4.getNumberValidator)());
W4.Factory.addGetterSetter(us, "outerRadius", 0, (0, K4.getNumberValidator)());
var Ac = {};
Object.defineProperty(Ac, "__esModule", { value: !0 });
Ac.Sprite = void 0;
const cs = ke, A9 = _t, O9 = go, Y4 = fe, D9 = we;
class pr extends A9.Shape {
  constructor(e) {
    super(e), this._updated = !0, this.anim = new O9.Animation(() => {
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
    const n = this.animation(), r = this.frameIndex(), o = r * 4, l = this.animations()[n], a = this.frameOffsets(), c = l[o + 0], d = l[o + 1], g = l[o + 2], y = l[o + 3], C = this.image();
    if ((this.hasFill() || this.hasStroke()) && (e.beginPath(), e.rect(0, 0, g, y), e.closePath(), e.fillStrokeShape(this)), C)
      if (a) {
        const S = a[n], x = r * 2;
        e.drawImage(C, c, d, g, y, S[x + 0], S[x + 1], g, y);
      } else
        e.drawImage(C, c, d, g, y, 0, 0, g, y);
  }
  _hitFunc(e) {
    const n = this.animation(), r = this.frameIndex(), o = r * 4, l = this.animations()[n], a = this.frameOffsets(), c = l[o + 2], d = l[o + 3];
    if (e.beginPath(), a) {
      const g = a[n], y = r * 2;
      e.rect(g[y + 0], g[y + 1], c, d);
    } else
      e.rect(0, 0, c, d);
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
Ac.Sprite = pr;
pr.prototype.className = "Sprite";
(0, D9._registerNode)(pr);
cs.Factory.addGetterSetter(pr, "animation");
cs.Factory.addGetterSetter(pr, "animations");
cs.Factory.addGetterSetter(pr, "frameOffsets");
cs.Factory.addGetterSetter(pr, "image");
cs.Factory.addGetterSetter(pr, "frameIndex", 0, (0, Y4.getNumberValidator)());
cs.Factory.addGetterSetter(pr, "frameRate", 17, (0, Y4.getNumberValidator)());
cs.Factory.backCompat(pr, {
  index: "frameIndex",
  getIndex: "getFrameIndex",
  setIndex: "setFrameIndex"
});
var Oc = {};
Object.defineProperty(Oc, "__esModule", { value: !0 });
Oc.Star = void 0;
const _1 = ke, I9 = _t, S1 = fe, z9 = we;
class xi extends I9.Shape {
  _sceneFunc(e) {
    const n = this.innerRadius(), r = this.outerRadius(), o = this.numPoints();
    e.beginPath(), e.moveTo(0, 0 - r);
    for (let l = 1; l < o * 2; l++) {
      const a = l % 2 === 0 ? r : n, c = a * Math.sin(l * Math.PI / o), d = -1 * a * Math.cos(l * Math.PI / o);
      e.lineTo(c, d);
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
Oc.Star = xi;
xi.prototype.className = "Star";
xi.prototype._centroid = !0;
xi.prototype._attrsAffectingSize = ["innerRadius", "outerRadius"];
(0, z9._registerNode)(xi);
_1.Factory.addGetterSetter(xi, "numPoints", 5, (0, S1.getNumberValidator)());
_1.Factory.addGetterSetter(xi, "innerRadius", 0, (0, S1.getNumberValidator)());
_1.Factory.addGetterSetter(xi, "outerRadius", 0, (0, S1.getNumberValidator)());
var vo = {};
Object.defineProperty(vo, "__esModule", { value: !0 });
vo.Text = void 0;
vo.stringToArray = Hi;
const p0 = rt, Vt = ke, G9 = _t, lh = we, Ci = fe, U9 = we;
function Hi(t) {
  return [...t].reduce((e, n, r, o) => {
    if (new RegExp("\\p{Emoji}", "u").test(n)) {
      const l = o[r + 1];
      l && new RegExp("\\p{Emoji_Modifier}|\\u200D", "u").test(l) ? (e.push(n + l), o[r + 1] = "") : e.push(n);
    } else new RegExp("\\p{Regional_Indicator}{2}", "u").test(n + (o[r + 1] || "")) ? e.push(n + o[r + 1]) : r > 0 && new RegExp("\\p{Mn}|\\p{Me}|\\p{Mc}", "u").test(n) ? e[e.length - 1] += n : n && e.push(n);
    return e;
  }, []);
}
const As = "auto", B9 = "center", X4 = "inherit", Yo = "justify", V9 = "Change.konva", j9 = "2d", D2 = "-", $4 = "left", H9 = "text", W9 = "Text", K9 = "top", Y9 = "bottom", I2 = "middle", Q4 = "normal", X9 = "px ", ru = " ", $9 = "right", z2 = "rtl", Q9 = "word", q9 = "char", G2 = "none", ah = "…", q4 = [
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
], b9 = q4.length;
function Z9(t) {
  return t.split(",").map((e) => {
    e = e.trim();
    const n = e.indexOf(" ") >= 0, r = e.indexOf('"') >= 0 || e.indexOf("'") >= 0;
    return n && !r && (e = `"${e}"`), e;
  }).join(", ");
}
let iu;
function uh() {
  return iu || (iu = p0.Util.createCanvasElement().getContext(j9), iu);
}
function J9(t) {
  t.fillText(this._partialText, this._partialTextX, this._partialTextY);
}
function e7(t) {
  t.setAttr("miterLimit", 2), t.strokeText(this._partialText, this._partialTextX, this._partialTextY);
}
function t7(t) {
  return t = t || {}, !t.fillLinearGradientColorStops && !t.fillRadialGradientColorStops && !t.fillPatternImage && (t.fill = t.fill || "black"), t;
}
class ot extends G9.Shape {
  constructor(e) {
    super(t7(e)), this._partialTextX = 0, this._partialTextY = 0;
    for (let n = 0; n < b9; n++)
      this.on(q4[n] + V9, this._setTextData);
    this._setTextData();
  }
  _sceneFunc(e) {
    const n = this.textArr, r = n.length;
    if (!this.text())
      return;
    let o = this.padding(), l = this.fontSize(), a = this.lineHeight() * l, c = this.verticalAlign(), d = this.direction(), g = 0, y = this.align(), C = this.getWidth(), S = this.letterSpacing(), x = this.fill(), v = this.textDecoration(), E = v.indexOf("underline") !== -1, N = v.indexOf("line-through") !== -1, k;
    d = d === X4 ? e.direction : d;
    let w = a / 2, p = I2;
    if (lh.Konva._fixTextRendering) {
      const _ = this.measureSize("M");
      p = "alphabetic", w = (_.fontBoundingBoxAscent - _.fontBoundingBoxDescent) / 2 + a / 2;
    }
    for (d === z2 && e.setAttr("direction", d), e.setAttr("font", this._getContextFont()), e.setAttr("textBaseline", p), e.setAttr("textAlign", $4), c === I2 ? g = (this.getHeight() - r * a - o * 2) / 2 : c === Y9 && (g = this.getHeight() - r * a - o * 2), e.translate(o, g + o), k = 0; k < r; k++) {
      let _ = 0, T = 0;
      const F = n[k], M = F.text, R = F.width, G = F.lastInParagraph;
      if (e.save(), y === $9 ? _ += C - R - o * 2 : y === B9 && (_ += (C - R - o * 2) / 2), E) {
        e.save(), e.beginPath();
        const L = lh.Konva._fixTextRendering ? Math.round(l / 4) : Math.round(l / 2), B = _, H = w + T + L;
        e.moveTo(B, H);
        const I = y === Yo && !G ? C - o * 2 : R;
        e.lineTo(B + Math.round(I), H), e.lineWidth = l / 15;
        const J = this._getLinearGradient();
        e.strokeStyle = J || x, e.stroke(), e.restore();
      }
      if (N) {
        e.save(), e.beginPath();
        const L = lh.Konva._fixTextRendering ? -Math.round(l / 4) : 0;
        e.moveTo(_, w + T + L);
        const B = y === Yo && !G ? C - o * 2 : R;
        e.lineTo(_ + Math.round(B), w + T + L), e.lineWidth = l / 15;
        const H = this._getLinearGradient();
        e.strokeStyle = H || x, e.stroke(), e.restore();
      }
      if (d !== z2 && (S !== 0 || y === Yo)) {
        const L = M.split(" ").length - 1, B = Hi(M);
        for (let H = 0; H < B.length; H++) {
          const I = B[H];
          I === " " && !G && y === Yo && (_ += (C - o * 2 - R) / L), this._partialTextX = _, this._partialTextY = w + T, this._partialText = I, e.fillStrokeShape(this), _ += this.measureSize(I).width + S;
        }
      } else
        S !== 0 && e.setAttr("letterSpacing", `${S}px`), this._partialTextX = _, this._partialTextY = w + T, this._partialText = M, e.fillStrokeShape(this);
      e.restore(), r > 1 && (w += a);
    }
  }
  _hitFunc(e) {
    const n = this.getWidth(), r = this.getHeight();
    e.beginPath(), e.rect(0, 0, n, r), e.closePath(), e.fillStrokeShape(this);
  }
  setText(e) {
    const n = p0.Util._isString(e) ? e : e == null ? "" : e + "";
    return this._setAttr(H9, n), this;
  }
  getWidth() {
    return this.attrs.width === As || this.attrs.width === void 0 ? this.getTextWidth() + this.padding() * 2 : this.attrs.width;
  }
  getHeight() {
    return this.attrs.height === As || this.attrs.height === void 0 ? this.fontSize() * this.textArr.length * this.lineHeight() + this.padding() * 2 : this.attrs.height;
  }
  getTextWidth() {
    return this.textWidth;
  }
  getTextHeight() {
    return p0.Util.warn("text.getTextHeight() method is deprecated. Use text.height() - for full height and text.fontSize() - for one line height."), this.textHeight;
  }
  measureSize(e) {
    var n, r, o, l, a, c, d, g, y, C, S;
    let x = uh(), v = this.fontSize(), E;
    x.save(), x.font = this._getContextFont(), E = x.measureText(e), x.restore();
    const N = v / 100;
    return {
      actualBoundingBoxAscent: (n = E.actualBoundingBoxAscent) !== null && n !== void 0 ? n : 71.58203125 * N,
      actualBoundingBoxDescent: (r = E.actualBoundingBoxDescent) !== null && r !== void 0 ? r : 0,
      actualBoundingBoxLeft: (o = E.actualBoundingBoxLeft) !== null && o !== void 0 ? o : -7.421875 * N,
      actualBoundingBoxRight: (l = E.actualBoundingBoxRight) !== null && l !== void 0 ? l : 75.732421875 * N,
      alphabeticBaseline: (a = E.alphabeticBaseline) !== null && a !== void 0 ? a : 0,
      emHeightAscent: (c = E.emHeightAscent) !== null && c !== void 0 ? c : 100 * N,
      emHeightDescent: (d = E.emHeightDescent) !== null && d !== void 0 ? d : -20 * N,
      fontBoundingBoxAscent: (g = E.fontBoundingBoxAscent) !== null && g !== void 0 ? g : 91 * N,
      fontBoundingBoxDescent: (y = E.fontBoundingBoxDescent) !== null && y !== void 0 ? y : 21 * N,
      hangingBaseline: (C = E.hangingBaseline) !== null && C !== void 0 ? C : 72.80000305175781 * N,
      ideographicBaseline: (S = E.ideographicBaseline) !== null && S !== void 0 ? S : -21 * N,
      width: E.width,
      height: v
    };
  }
  _getContextFont() {
    return this.fontStyle() + ru + this.fontVariant() + ru + (this.fontSize() + X9) + Z9(this.fontFamily());
  }
  _addTextLine(e) {
    this.align() === Yo && (e = e.trim());
    const r = this._getTextWidth(e);
    return this.textArr.push({
      text: e,
      width: r,
      lastInParagraph: !1
    });
  }
  _getTextWidth(e) {
    const n = this.letterSpacing(), r = e.length;
    return uh().measureText(e).width + n * r;
  }
  _setTextData() {
    let e = this.text().split(`
`), n = +this.fontSize(), r = 0, o = this.lineHeight() * n, l = this.attrs.width, a = this.attrs.height, c = l !== As && l !== void 0, d = a !== As && a !== void 0, g = this.padding(), y = l - g * 2, C = a - g * 2, S = 0, x = this.wrap(), v = x !== G2, E = x !== q9 && v, N = this.ellipsis();
    this.textArr = [], uh().font = this._getContextFont();
    const k = N ? this._getTextWidth(ah) : 0;
    for (let w = 0, p = e.length; w < p; ++w) {
      let _ = e[w], T = this._getTextWidth(_);
      if (c && T > y)
        for (; _.length > 0; ) {
          let F = 0, M = Hi(_).length, R = "", G = 0;
          for (; F < M; ) {
            const L = F + M >>> 1, B = Hi(_), H = B.slice(0, L + 1).join(""), I = this._getTextWidth(H);
            (N && d && S + o > C ? I + k : I) <= y ? (F = L + 1, R = H, G = I) : M = L;
          }
          if (R) {
            if (E) {
              const H = Hi(_), I = Hi(R), J = H[I.length], $ = J === ru || J === D2;
              let he;
              if ($ && G <= y)
                he = I.length;
              else {
                const _e = I.lastIndexOf(ru), j = I.lastIndexOf(D2);
                he = Math.max(_e, j) + 1;
              }
              he > 0 && (F = he, R = H.slice(0, F).join(""), G = this._getTextWidth(R));
            }
            if (R = R.trimRight(), this._addTextLine(R), r = Math.max(r, G), S += o, this._shouldHandleEllipsis(S)) {
              this._tryToAddEllipsisToLastLine();
              break;
            }
            if (_ = Hi(_).slice(F).join("").trimLeft(), _.length > 0 && (T = this._getTextWidth(_), T <= y)) {
              this._addTextLine(_), S += o, r = Math.max(r, T);
              break;
            }
          } else
            break;
        }
      else
        this._addTextLine(_), S += o, r = Math.max(r, T), this._shouldHandleEllipsis(S) && w < p - 1 && this._tryToAddEllipsisToLastLine();
      if (this.textArr[this.textArr.length - 1] && (this.textArr[this.textArr.length - 1].lastInParagraph = !0), d && S + o > C)
        break;
    }
    this.textHeight = n, this.textWidth = r;
  }
  _shouldHandleEllipsis(e) {
    const n = +this.fontSize(), r = this.lineHeight() * n, o = this.attrs.height, l = o !== As && o !== void 0, a = this.padding(), c = o - a * 2;
    return !(this.wrap() !== G2) || l && e + r > c;
  }
  _tryToAddEllipsisToLastLine() {
    const e = this.attrs.width, n = e !== As && e !== void 0, r = this.padding(), o = e - r * 2, l = this.ellipsis(), a = this.textArr[this.textArr.length - 1];
    !a || !l || (n && (this._getTextWidth(a.text + ah) < o || (a.text = a.text.slice(0, a.text.length - 3))), this.textArr.splice(this.textArr.length - 1, 1), this._addTextLine(a.text + ah));
  }
  getStrokeScaleEnabled() {
    return !0;
  }
  _useBufferCanvas() {
    const e = this.textDecoration().indexOf("underline") !== -1 || this.textDecoration().indexOf("line-through") !== -1, n = this.hasShadow();
    return e && n ? !0 : super._useBufferCanvas();
  }
}
vo.Text = ot;
ot.prototype._fillFunc = J9;
ot.prototype._strokeFunc = e7;
ot.prototype.className = W9;
ot.prototype._attrsAffectingSize = [
  "text",
  "fontSize",
  "padding",
  "wrap",
  "lineHeight",
  "letterSpacing"
];
(0, U9._registerNode)(ot);
Vt.Factory.overWriteSetter(ot, "width", (0, Ci.getNumberOrAutoValidator)());
Vt.Factory.overWriteSetter(ot, "height", (0, Ci.getNumberOrAutoValidator)());
Vt.Factory.addGetterSetter(ot, "direction", X4);
Vt.Factory.addGetterSetter(ot, "fontFamily", "Arial");
Vt.Factory.addGetterSetter(ot, "fontSize", 12, (0, Ci.getNumberValidator)());
Vt.Factory.addGetterSetter(ot, "fontStyle", Q4);
Vt.Factory.addGetterSetter(ot, "fontVariant", Q4);
Vt.Factory.addGetterSetter(ot, "padding", 0, (0, Ci.getNumberValidator)());
Vt.Factory.addGetterSetter(ot, "align", $4);
Vt.Factory.addGetterSetter(ot, "verticalAlign", K9);
Vt.Factory.addGetterSetter(ot, "lineHeight", 1, (0, Ci.getNumberValidator)());
Vt.Factory.addGetterSetter(ot, "wrap", Q9);
Vt.Factory.addGetterSetter(ot, "ellipsis", !1, (0, Ci.getBooleanValidator)());
Vt.Factory.addGetterSetter(ot, "letterSpacing", 0, (0, Ci.getNumberValidator)());
Vt.Factory.addGetterSetter(ot, "text", "", (0, Ci.getStringValidator)());
Vt.Factory.addGetterSetter(ot, "textDecoration", "");
var Dc = {};
Object.defineProperty(Dc, "__esModule", { value: !0 });
Dc.TextPath = void 0;
const ch = rt, bn = ke, n7 = _t, Xo = mo, dh = vo, b4 = fe, r7 = we, i7 = "", Z4 = "normal";
function J4(t) {
  t.fillText(this.partialText, 0, 0);
}
function ey(t) {
  t.strokeText(this.partialText, 0, 0);
}
class St extends n7.Shape {
  constructor(e) {
    super(e), this.dummyCanvas = ch.Util.createCanvasElement(), this.dataArray = [], this._readDataAttribute(), this.on("dataChange.konva", function() {
      this._readDataAttribute(), this._setTextData();
    }), this.on("textChange.konva alignChange.konva letterSpacingChange.konva kerningFuncChange.konva fontSizeChange.konva fontFamilyChange.konva", this._setTextData), this._setTextData();
  }
  _getTextPathLength() {
    return Xo.Path.getPathLength(this.dataArray);
  }
  _getPointAtLength(e) {
    if (!this.attrs.data)
      return null;
    const n = this.pathLength;
    return e - 1 > n ? null : Xo.Path.getPointAtLengthOfDataArray(e, this.dataArray);
  }
  _readDataAttribute() {
    this.dataArray = Xo.Path.parsePathData(this.attrs.data), this.pathLength = this._getTextPathLength();
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
    return ch.Util.warn("text.getTextHeight() method is deprecated. Use text.height() - for full height and text.fontSize() - for one line height."), this.textHeight;
  }
  setText(e) {
    return dh.Text.prototype.setText.call(this, e);
  }
  _getContextFont() {
    return dh.Text.prototype._getContextFont.call(this);
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
    const d = (0, dh.stringToArray)(this.text());
    let g = c;
    for (let y = 0; y < d.length; y++) {
      const C = this._getPointAtLength(g);
      if (!C)
        return;
      let S = this._getTextSize(d[y]).width + r;
      if (d[y] === " " && o === "justify") {
        const w = this.text().split(" ").length - 1;
        S += (this.pathLength - a) / w;
      }
      const x = this._getPointAtLength(g + S);
      if (!x)
        return;
      const v = Xo.Path.getLineLength(C.x, C.y, x.x, x.y);
      let E = 0;
      if (l)
        try {
          E = l(d[y - 1], d[y]) * this.fontSize();
        } catch {
          E = 0;
        }
      C.x += E, x.x += E, this.textWidth += E;
      const N = Xo.Path.getPointOnLine(E + v / 2, C.x, C.y, x.x, x.y), k = Math.atan2(x.y - C.y, x.x - C.x);
      this.glyphInfo.push({
        transposeX: N.x,
        transposeY: N.y,
        text: d[y],
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
    const d = this.fontSize();
    return {
      x: n - d / 2,
      y: o - d / 2,
      width: r - n + d,
      height: l - o + d
    };
  }
  destroy() {
    return ch.Util.releaseCanvas(this.dummyCanvas), super.destroy();
  }
}
Dc.TextPath = St;
St.prototype._fillFunc = J4;
St.prototype._strokeFunc = ey;
St.prototype._fillFuncHit = J4;
St.prototype._strokeFuncHit = ey;
St.prototype.className = "TextPath";
St.prototype._attrsAffectingSize = ["text", "fontSize", "data"];
(0, r7._registerNode)(St);
bn.Factory.addGetterSetter(St, "data");
bn.Factory.addGetterSetter(St, "fontFamily", "Arial");
bn.Factory.addGetterSetter(St, "fontSize", 12, (0, b4.getNumberValidator)());
bn.Factory.addGetterSetter(St, "fontStyle", Z4);
bn.Factory.addGetterSetter(St, "align", "left");
bn.Factory.addGetterSetter(St, "letterSpacing", 0, (0, b4.getNumberValidator)());
bn.Factory.addGetterSetter(St, "textBaseline", "middle");
bn.Factory.addGetterSetter(St, "fontVariant", Z4);
bn.Factory.addGetterSetter(St, "text", i7);
bn.Factory.addGetterSetter(St, "textDecoration", "");
bn.Factory.addGetterSetter(St, "kerningFunc", void 0);
var Ic = {};
Object.defineProperty(Ic, "__esModule", { value: !0 });
Ic.Transformer = void 0;
const Ge = rt, Ae = ke, U2 = be, s7 = _t, o7 = jl, B2 = po, Hn = we, ki = fe, l7 = we, ty = "tr-konva", a7 = [
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
].map((t) => t + `.${ty}`).join(" "), V2 = "nodesRect", u7 = [
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
], c7 = {
  "top-left": -45,
  "top-center": 0,
  "top-right": 45,
  "middle-right": -90,
  "middle-left": 90,
  "bottom-left": -135,
  "bottom-center": 180,
  "bottom-right": 135
}, d7 = "ontouchstart" in Hn.Konva._global;
function f7(t, e, n) {
  if (t === "rotater")
    return n;
  e += Ge.Util.degToRad(c7[t] || 0);
  const r = (Ge.Util.radToDeg(e) % 360 + 360) % 360;
  return Ge.Util._inRange(r, 315 + 22.5, 360) || Ge.Util._inRange(r, 0, 22.5) ? "ns-resize" : Ge.Util._inRange(r, 45 - 22.5, 45 + 22.5) ? "nesw-resize" : Ge.Util._inRange(r, 90 - 22.5, 90 + 22.5) ? "ew-resize" : Ge.Util._inRange(r, 135 - 22.5, 135 + 22.5) ? "nwse-resize" : Ge.Util._inRange(r, 180 - 22.5, 180 + 22.5) ? "ns-resize" : Ge.Util._inRange(r, 225 - 22.5, 225 + 22.5) ? "nesw-resize" : Ge.Util._inRange(r, 270 - 22.5, 270 + 22.5) ? "ew-resize" : Ge.Util._inRange(r, 315 - 22.5, 315 + 22.5) ? "nwse-resize" : (Ge.Util.error("Transformer has unknown angle for cursor detection: " + r), "pointer");
}
const Qu = [
  "top-left",
  "top-center",
  "top-right",
  "middle-right",
  "middle-left",
  "bottom-left",
  "bottom-center",
  "bottom-right"
];
function h7(t) {
  return {
    x: t.x + t.width / 2 * Math.cos(t.rotation) + t.height / 2 * Math.sin(-t.rotation),
    y: t.y + t.height / 2 * Math.cos(t.rotation) + t.width / 2 * Math.sin(t.rotation)
  };
}
function ny(t, e, n) {
  const r = n.x + (t.x - n.x) * Math.cos(e) - (t.y - n.y) * Math.sin(e), o = n.y + (t.x - n.x) * Math.sin(e) + (t.y - n.y) * Math.cos(e);
  return {
    ...t,
    rotation: t.rotation + e,
    x: r,
    y: o
  };
}
function p7(t, e) {
  const n = h7(t);
  return ny(t, e, n);
}
function g7(t, e, n) {
  let r = e;
  for (let o = 0; o < t.length; o++) {
    const l = Hn.Konva.getAngle(t[o]), a = Math.abs(l - e) % (Math.PI * 2);
    Math.min(a, Math.PI * 2 - a) < n && (r = l);
  }
  return r;
}
let g0 = 0, Te = class extends B2.Group {
  constructor(e) {
    super(e), this._movingAnchorName = null, this._transforming = !1, this._createElements(), this._handleMouseMove = this._handleMouseMove.bind(this), this._handleMouseUp = this._handleMouseUp.bind(this), this.update = this.update.bind(this), this.on(a7, this.update), this.getNode() && this.update();
  }
  attachTo(e) {
    return this.setNode(e), this;
  }
  setNode(e) {
    return Ge.Util.warn("tr.setNode(shape), tr.node(shape) and tr.attachTo(shape) methods are deprecated. Please use tr.nodes(nodesArray) instead."), this.setNodes([e]);
  }
  getNode() {
    return this._nodes && this._nodes[0];
  }
  _getEventNamespace() {
    return ty + this._id;
  }
  setNodes(e = []) {
    this._nodes && this._nodes.length && this.detach();
    const n = e.filter((o) => o.isAncestorOf(this) ? (Ge.Util.error("Konva.Transformer cannot be an a child of the node you are trying to attach"), !1) : !0);
    return this._nodes = e = n, e.length === 1 && this.useSingleNodeRotation() ? this.rotation(e[0].getAbsoluteRotation()) : this.rotation(0), this._nodes.forEach((o) => {
      const l = () => {
        this.nodes().length === 1 && this.useSingleNodeRotation() && this.rotation(this.nodes()[0].getAbsoluteRotation()), this._resetTransformCache(), !this._transforming && !this.isDragging() && this.update();
      };
      if (o._attrsAffectingSize.length) {
        const a = o._attrsAffectingSize.map((c) => c + "Change." + this._getEventNamespace()).join(" ");
        o.on(a, l);
      }
      o.on(u7.map((a) => a + `.${this._getEventNamespace()}`).join(" "), l), o.on(`absoluteTransformChange.${this._getEventNamespace()}`, l), this._proxyDrag(o);
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
        const d = c.getAbsolutePosition();
        c.setAbsolutePosition({
          x: d.x + l,
          y: d.y + a
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
    this._clearCache(V2), this._clearCache("transform"), this._clearSelfAndDescendantCache("absoluteTransform");
  }
  _getNodeRect() {
    return this._getCache(V2, this.__getNodeRect);
  }
  __getNodeShape(e, n = this.rotation(), r) {
    const o = e.getClientRect({
      skipTransform: !0,
      skipShadow: !0,
      skipStroke: this.ignoreStroke()
    }), l = e.getAbsoluteScale(r), a = e.getAbsolutePosition(r), c = o.x * l.x - e.offsetX() * l.x, d = o.y * l.y - e.offsetY() * l.y, g = (Hn.Konva.getAngle(e.getAbsoluteRotation()) + Math.PI * 2) % (Math.PI * 2), y = {
      x: a.x + c * Math.cos(g) + d * Math.sin(-g),
      y: a.y + d * Math.cos(g) + c * Math.sin(g),
      width: o.width * l.x,
      height: o.height * l.y,
      rotation: g
    };
    return ny(y, -Hn.Konva.getAngle(n), {
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
    const r = new Ge.Transform();
    r.rotate(-Hn.Konva.getAngle(this.rotation()));
    let o = 1 / 0, l = 1 / 0, a = -1 / 0, c = -1 / 0;
    n.forEach(function(g) {
      const y = r.point(g);
      o === void 0 && (o = a = y.x, l = c = y.y), o = Math.min(o, y.x), l = Math.min(l, y.y), a = Math.max(a, y.x), c = Math.max(c, y.y);
    }), r.invert();
    const d = r.point({ x: o, y: l });
    return {
      x: d.x,
      y: d.y,
      width: a - o,
      height: c - l,
      rotation: Hn.Konva.getAngle(this.rotation())
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
    this._createBack(), Qu.forEach((e) => {
      this._createAnchor(e);
    }), this._createAnchor("rotater");
  }
  _createAnchor(e) {
    const n = new o7.Rect({
      stroke: "rgb(0, 161, 255)",
      fill: "white",
      strokeWidth: 1,
      name: e + " _anchor",
      dragDistance: 0,
      draggable: !0,
      hitStrokeWidth: d7 ? 10 : "auto"
    }), r = this;
    n.on("mousedown touchstart", function(o) {
      r._handleMouseDown(o);
    }), n.on("dragstart", (o) => {
      n.stopDrag(), o.cancelBubble = !0;
    }), n.on("dragend", (o) => {
      o.cancelBubble = !0;
    }), n.on("mouseenter", () => {
      const o = Hn.Konva.getAngle(this.rotation()), l = this.rotateAnchorCursor(), a = f7(e, o, l);
      n.getStage().content && (n.getStage().content.style.cursor = a), this._cursorChange = !0;
    }), n.on("mouseout", () => {
      n.getStage().content && (n.getStage().content.style.cursor = ""), this._cursorChange = !1;
    }), this.add(n);
  }
  _createBack() {
    const e = new s7.Shape({
      name: "back",
      width: 0,
      height: 0,
      draggable: !0,
      sceneFunc(n, r) {
        const o = r.getParent(), l = o.padding();
        n.beginPath(), n.rect(-l, -l, r.width() + l * 2, r.height() + l * 2), n.moveTo(r.width() / 2, -l), o.rotateEnabled() && o.rotateLineVisible() && n.lineTo(r.width() / 2, -o.rotateAnchorOffset() * Ge.Util._sign(r.height()) - l), n.fillStrokeShape(r);
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
    }, g0++, this._fire("transformstart", { evt: e.evt, target: this.getNode() }), this._nodes.forEach((d) => {
      d._fire("transformstart", { evt: e.evt, target: d });
    });
  }
  _handleMouseMove(e) {
    let n, r, o;
    const l = this.findOne("." + this._movingAnchorName), a = l.getStage();
    a.setPointersPositions(e);
    const c = a.getPointerPosition();
    let d = {
      x: c.x - this._anchorDragOffset.x,
      y: c.y - this._anchorDragOffset.y
    };
    const g = l.getAbsolutePosition();
    this.anchorDragBoundFunc() && (d = this.anchorDragBoundFunc()(g, d, e)), l.setAbsolutePosition(d);
    const y = l.getAbsolutePosition();
    if (g.x === y.x && g.y === y.y)
      return;
    if (this._movingAnchorName === "rotater") {
      const w = this._getNodeRect();
      n = l.x() - w.width / 2, r = -l.y() + w.height / 2;
      let p = Math.atan2(-r, n) + Math.PI / 2;
      w.height < 0 && (p -= Math.PI);
      const T = Hn.Konva.getAngle(this.rotation()) + p, F = Hn.Konva.getAngle(this.rotationSnapTolerance()), R = g7(this.rotationSnaps(), T, F) - w.rotation, G = p7(w, R);
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
      const w = this.findOne(".top-left"), p = this.findOne(".bottom-right"), _ = w.x(), T = w.y(), F = this.getWidth() - p.x(), M = this.getHeight() - p.y();
      p.move({
        x: -_,
        y: -T
      }), w.move({
        x: F,
        y: M
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
      rotation: Hn.Konva.getAngle(this.rotation())
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
      g0--, this._fire("transformend", { evt: e, target: r }), (n = this.getLayer()) === null || n === void 0 || n.batchDraw(), r && this._nodes.forEach((o) => {
        var l;
        o._fire("transformend", { evt: e, target: o }), (l = o.getLayer()) === null || l === void 0 || l.batchDraw();
      }), this._movingAnchorName = null;
    }
  }
  _fitNodesInto(e, n) {
    const r = this._getNodeRect(), o = 1;
    if (Ge.Util._inRange(e.width, -this.padding() * 2 - o, o)) {
      this.update();
      return;
    }
    if (Ge.Util._inRange(e.height, -this.padding() * 2 - o, o)) {
      this.update();
      return;
    }
    const l = new Ge.Transform();
    if (l.rotate(Hn.Konva.getAngle(this.rotation())), this._movingAnchorName && e.width < 0 && this._movingAnchorName.indexOf("left") >= 0) {
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
      S ? e = S : Ge.Util.warn("boundBoxFunc returned falsy. You should return new bound rect from it!");
    }
    const a = 1e7, c = new Ge.Transform();
    c.translate(r.x, r.y), c.rotate(r.rotation), c.scale(r.width / a, r.height / a);
    const d = new Ge.Transform(), g = e.width / a, y = e.height / a;
    this.flipEnabled() === !1 ? (d.translate(e.x, e.y), d.rotate(e.rotation), d.translate(e.width < 0 ? e.width : 0, e.height < 0 ? e.height : 0), d.scale(Math.abs(g), Math.abs(y))) : (d.translate(e.x, e.y), d.rotate(e.rotation), d.scale(g, y));
    const C = d.multiply(c.invert());
    this._nodes.forEach((S) => {
      var x;
      const v = S.getParent().getAbsoluteTransform(), E = S.getTransform().copy();
      E.translate(S.offsetX(), S.offsetY());
      const N = new Ge.Transform();
      N.multiply(v.copy().invert()).multiply(C).multiply(v).multiply(E);
      const k = N.decompose();
      S.setAttrs(k), (x = S.getLayer()) === null || x === void 0 || x.batchDraw();
    }), this.rotation(Ge.Util._getRotation(e.rotation)), this._nodes.forEach((S) => {
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
    this.rotation(Ge.Util._getRotation(n.rotation));
    const r = n.width, o = n.height, l = this.enabledAnchors(), a = this.resizeEnabled(), c = this.padding(), d = this.anchorSize(), g = this.find("._anchor");
    g.forEach((C) => {
      C.setAttrs({
        width: d,
        height: d,
        offsetX: d / 2,
        offsetY: d / 2,
        stroke: this.anchorStroke(),
        strokeWidth: this.anchorStrokeWidth(),
        fill: this.anchorFill(),
        cornerRadius: this.anchorCornerRadius()
      });
    }), this._batchChangeChild(".top-left", {
      x: 0,
      y: 0,
      offsetX: d / 2 + c,
      offsetY: d / 2 + c,
      visible: a && l.indexOf("top-left") >= 0
    }), this._batchChangeChild(".top-center", {
      x: r / 2,
      y: 0,
      offsetY: d / 2 + c,
      visible: a && l.indexOf("top-center") >= 0
    }), this._batchChangeChild(".top-right", {
      x: r,
      y: 0,
      offsetX: d / 2 - c,
      offsetY: d / 2 + c,
      visible: a && l.indexOf("top-right") >= 0
    }), this._batchChangeChild(".middle-left", {
      x: 0,
      y: o / 2,
      offsetX: d / 2 + c,
      visible: a && l.indexOf("middle-left") >= 0
    }), this._batchChangeChild(".middle-right", {
      x: r,
      y: o / 2,
      offsetX: d / 2 - c,
      visible: a && l.indexOf("middle-right") >= 0
    }), this._batchChangeChild(".bottom-left", {
      x: 0,
      y: o,
      offsetX: d / 2 + c,
      offsetY: d / 2 - c,
      visible: a && l.indexOf("bottom-left") >= 0
    }), this._batchChangeChild(".bottom-center", {
      x: r / 2,
      y: o,
      offsetY: d / 2 - c,
      visible: a && l.indexOf("bottom-center") >= 0
    }), this._batchChangeChild(".bottom-right", {
      x: r,
      y: o,
      offsetX: d / 2 - c,
      offsetY: d / 2 - c,
      visible: a && l.indexOf("bottom-right") >= 0
    }), this._batchChangeChild(".rotater", {
      x: r / 2,
      y: -this.rotateAnchorOffset() * Ge.Util._sign(o) - c,
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
    return this.getStage() && this._cursorChange && this.getStage().content && (this.getStage().content.style.cursor = ""), B2.Group.prototype.destroy.call(this), this.detach(), this._removeEvents(), this;
  }
  toObject() {
    return U2.Node.prototype.toObject.call(this);
  }
  clone(e) {
    return U2.Node.prototype.clone.call(this, e);
  }
  getClientRect() {
    return this.nodes().length > 0 ? super.getClientRect() : { x: 0, y: 0, width: 0, height: 0 };
  }
};
Ic.Transformer = Te;
Te.isTransforming = () => g0 > 0;
function m7(t) {
  return t instanceof Array || Ge.Util.warn("enabledAnchors value should be an array"), t instanceof Array && t.forEach(function(e) {
    Qu.indexOf(e) === -1 && Ge.Util.warn("Unknown anchor name: " + e + ". Available names are: " + Qu.join(", "));
  }), t || [];
}
Te.prototype.className = "Transformer";
(0, l7._registerNode)(Te);
Ae.Factory.addGetterSetter(Te, "enabledAnchors", Qu, m7);
Ae.Factory.addGetterSetter(Te, "flipEnabled", !0, (0, ki.getBooleanValidator)());
Ae.Factory.addGetterSetter(Te, "resizeEnabled", !0);
Ae.Factory.addGetterSetter(Te, "anchorSize", 10, (0, ki.getNumberValidator)());
Ae.Factory.addGetterSetter(Te, "rotateEnabled", !0);
Ae.Factory.addGetterSetter(Te, "rotateLineVisible", !0);
Ae.Factory.addGetterSetter(Te, "rotationSnaps", []);
Ae.Factory.addGetterSetter(Te, "rotateAnchorOffset", 50, (0, ki.getNumberValidator)());
Ae.Factory.addGetterSetter(Te, "rotateAnchorCursor", "crosshair");
Ae.Factory.addGetterSetter(Te, "rotationSnapTolerance", 5, (0, ki.getNumberValidator)());
Ae.Factory.addGetterSetter(Te, "borderEnabled", !0);
Ae.Factory.addGetterSetter(Te, "anchorStroke", "rgb(0, 161, 255)");
Ae.Factory.addGetterSetter(Te, "anchorStrokeWidth", 1, (0, ki.getNumberValidator)());
Ae.Factory.addGetterSetter(Te, "anchorFill", "white");
Ae.Factory.addGetterSetter(Te, "anchorCornerRadius", 0, (0, ki.getNumberValidator)());
Ae.Factory.addGetterSetter(Te, "borderStroke", "rgb(0, 161, 255)");
Ae.Factory.addGetterSetter(Te, "borderStrokeWidth", 1, (0, ki.getNumberValidator)());
Ae.Factory.addGetterSetter(Te, "borderDash");
Ae.Factory.addGetterSetter(Te, "keepRatio", !0);
Ae.Factory.addGetterSetter(Te, "shiftBehavior", "default");
Ae.Factory.addGetterSetter(Te, "centeredScaling", !1);
Ae.Factory.addGetterSetter(Te, "ignoreStroke", !1);
Ae.Factory.addGetterSetter(Te, "padding", 0, (0, ki.getNumberValidator)());
Ae.Factory.addGetterSetter(Te, "nodes");
Ae.Factory.addGetterSetter(Te, "node");
Ae.Factory.addGetterSetter(Te, "boundBoxFunc");
Ae.Factory.addGetterSetter(Te, "anchorDragBoundFunc");
Ae.Factory.addGetterSetter(Te, "anchorStyleFunc");
Ae.Factory.addGetterSetter(Te, "shouldOverdrawWholeArea", !1);
Ae.Factory.addGetterSetter(Te, "useSingleNodeRotation", !0);
Ae.Factory.backCompat(Te, {
  lineEnabled: "borderEnabled",
  rotateHandlerOffset: "rotateAnchorOffset",
  enabledHandlers: "enabledAnchors"
});
var zc = {};
Object.defineProperty(zc, "__esModule", { value: !0 });
zc.Wedge = void 0;
const Gc = ke, y7 = _t, v7 = we, ry = fe, _7 = we;
class Gr extends y7.Shape {
  _sceneFunc(e) {
    e.beginPath(), e.arc(0, 0, this.radius(), 0, v7.Konva.getAngle(this.angle()), this.clockwise()), e.lineTo(0, 0), e.closePath(), e.fillStrokeShape(this);
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
zc.Wedge = Gr;
Gr.prototype.className = "Wedge";
Gr.prototype._centroid = !0;
Gr.prototype._attrsAffectingSize = ["radius"];
(0, _7._registerNode)(Gr);
Gc.Factory.addGetterSetter(Gr, "radius", 0, (0, ry.getNumberValidator)());
Gc.Factory.addGetterSetter(Gr, "angle", 0, (0, ry.getNumberValidator)());
Gc.Factory.addGetterSetter(Gr, "clockwise", !1);
Gc.Factory.backCompat(Gr, {
  angleDeg: "angle",
  getAngleDeg: "getAngle",
  setAngleDeg: "setAngle"
});
var Uc = {};
Object.defineProperty(Uc, "__esModule", { value: !0 });
Uc.Blur = void 0;
const j2 = ke, S7 = be, w7 = fe;
function H2() {
  this.r = 0, this.g = 0, this.b = 0, this.a = 0, this.next = null;
}
const x7 = [
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
], C7 = [
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
function k7(t, e) {
  const n = t.data, r = t.width, o = t.height;
  let l, a, c, d, g, y, C, S, x, v, E, N, k, w, p, _, T, F, M, R;
  const G = e + e + 1, L = r - 1, B = o - 1, H = e + 1, I = H * (H + 1) / 2, J = new H2(), $ = x7[e], he = C7[e];
  let _e = null, j = J, Q = null, X = null;
  for (let q = 1; q < G; q++)
    j = j.next = new H2(), q === H && (_e = j);
  j.next = J, c = a = 0;
  for (let q = 0; q < o; q++) {
    N = k = w = p = d = g = y = C = 0, S = H * (_ = n[a]), x = H * (T = n[a + 1]), v = H * (F = n[a + 2]), E = H * (M = n[a + 3]), d += I * _, g += I * T, y += I * F, C += I * M, j = J;
    for (let se = 0; se < H; se++)
      j.r = _, j.g = T, j.b = F, j.a = M, j = j.next;
    for (let se = 1; se < H; se++)
      l = a + ((L < se ? L : se) << 2), d += (j.r = _ = n[l]) * (R = H - se), g += (j.g = T = n[l + 1]) * R, y += (j.b = F = n[l + 2]) * R, C += (j.a = M = n[l + 3]) * R, N += _, k += T, w += F, p += M, j = j.next;
    Q = J, X = _e;
    for (let se = 0; se < r; se++)
      n[a + 3] = M = C * $ >> he, M !== 0 ? (M = 255 / M, n[a] = (d * $ >> he) * M, n[a + 1] = (g * $ >> he) * M, n[a + 2] = (y * $ >> he) * M) : n[a] = n[a + 1] = n[a + 2] = 0, d -= S, g -= x, y -= v, C -= E, S -= Q.r, x -= Q.g, v -= Q.b, E -= Q.a, l = c + ((l = se + e + 1) < L ? l : L) << 2, N += Q.r = n[l], k += Q.g = n[l + 1], w += Q.b = n[l + 2], p += Q.a = n[l + 3], d += N, g += k, y += w, C += p, Q = Q.next, S += _ = X.r, x += T = X.g, v += F = X.b, E += M = X.a, N -= _, k -= T, w -= F, p -= M, X = X.next, a += 4;
    c += r;
  }
  for (let q = 0; q < r; q++) {
    k = w = p = N = g = y = C = d = 0, a = q << 2, S = H * (_ = n[a]), x = H * (T = n[a + 1]), v = H * (F = n[a + 2]), E = H * (M = n[a + 3]), d += I * _, g += I * T, y += I * F, C += I * M, j = J;
    for (let ge = 0; ge < H; ge++)
      j.r = _, j.g = T, j.b = F, j.a = M, j = j.next;
    let se = r;
    for (let ge = 1; ge <= e; ge++)
      a = se + q << 2, d += (j.r = _ = n[a]) * (R = H - ge), g += (j.g = T = n[a + 1]) * R, y += (j.b = F = n[a + 2]) * R, C += (j.a = M = n[a + 3]) * R, N += _, k += T, w += F, p += M, j = j.next, ge < B && (se += r);
    a = q, Q = J, X = _e;
    for (let ge = 0; ge < o; ge++)
      l = a << 2, n[l + 3] = M = C * $ >> he, M > 0 ? (M = 255 / M, n[l] = (d * $ >> he) * M, n[l + 1] = (g * $ >> he) * M, n[l + 2] = (y * $ >> he) * M) : n[l] = n[l + 1] = n[l + 2] = 0, d -= S, g -= x, y -= v, C -= E, S -= Q.r, x -= Q.g, v -= Q.b, E -= Q.a, l = q + ((l = ge + H) < B ? l : B) * r << 2, d += N += Q.r = n[l], g += k += Q.g = n[l + 1], y += w += Q.b = n[l + 2], C += p += Q.a = n[l + 3], Q = Q.next, S += _ = X.r, x += T = X.g, v += F = X.b, E += M = X.a, N -= _, k -= T, w -= F, p -= M, X = X.next, a += r;
  }
}
const E7 = function(e) {
  const n = Math.round(this.blurRadius());
  n > 0 && k7(e, n);
};
Uc.Blur = E7;
j2.Factory.addGetterSetter(S7.Node, "blurRadius", 0, (0, w7.getNumberValidator)(), j2.Factory.afterSetFilter);
var Bc = {};
Object.defineProperty(Bc, "__esModule", { value: !0 });
Bc.Brighten = void 0;
const W2 = ke, P7 = be, T7 = fe, N7 = function(t) {
  const e = this.brightness() * 255, n = t.data, r = n.length;
  for (let o = 0; o < r; o += 4)
    n[o] += e, n[o + 1] += e, n[o + 2] += e;
};
Bc.Brighten = N7;
W2.Factory.addGetterSetter(P7.Node, "brightness", 0, (0, T7.getNumberValidator)(), W2.Factory.afterSetFilter);
var Vc = {};
Object.defineProperty(Vc, "__esModule", { value: !0 });
Vc.Contrast = void 0;
const K2 = ke, R7 = be, F7 = fe, M7 = function(t) {
  const e = Math.pow((this.contrast() + 100) / 100, 2), n = t.data, r = n.length;
  let o = 150, l = 150, a = 150;
  for (let c = 0; c < r; c += 4)
    o = n[c], l = n[c + 1], a = n[c + 2], o /= 255, o -= 0.5, o *= e, o += 0.5, o *= 255, l /= 255, l -= 0.5, l *= e, l += 0.5, l *= 255, a /= 255, a -= 0.5, a *= e, a += 0.5, a *= 255, o = o < 0 ? 0 : o > 255 ? 255 : o, l = l < 0 ? 0 : l > 255 ? 255 : l, a = a < 0 ? 0 : a > 255 ? 255 : a, n[c] = o, n[c + 1] = l, n[c + 2] = a;
};
Vc.Contrast = M7;
K2.Factory.addGetterSetter(R7.Node, "contrast", 0, (0, F7.getNumberValidator)(), K2.Factory.afterSetFilter);
var jc = {};
Object.defineProperty(jc, "__esModule", { value: !0 });
jc.Emboss = void 0;
const gi = ke, Hc = be, L7 = rt, iy = fe, A7 = function(t) {
  const e = this.embossStrength() * 10, n = this.embossWhiteLevel() * 255, r = this.embossDirection(), o = this.embossBlend(), l = t.data, a = t.width, c = t.height, d = a * 4;
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
      L7.Util.error("Unknown emboss direction: " + r);
  }
  do {
    const S = (C - 1) * d;
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
      const M = F > 0 ? F : -F, R = _ > 0 ? _ : -_, G = T > 0 ? T : -T;
      if (R > M && (F = _), G > M && (F = T), F *= e, o) {
        const L = l[N] + F, B = l[N + 1] + F, H = l[N + 2] + F;
        l[N] = L > 255 ? 255 : L < 0 ? 0 : L, l[N + 1] = B > 255 ? 255 : B < 0 ? 0 : B, l[N + 2] = H > 255 ? 255 : H < 0 ? 0 : H;
      } else {
        let L = n - F;
        L < 0 ? L = 0 : L > 255 && (L = 255), l[N] = l[N + 1] = l[N + 2] = L;
      }
    } while (--E);
  } while (--C);
};
jc.Emboss = A7;
gi.Factory.addGetterSetter(Hc.Node, "embossStrength", 0.5, (0, iy.getNumberValidator)(), gi.Factory.afterSetFilter);
gi.Factory.addGetterSetter(Hc.Node, "embossWhiteLevel", 0.5, (0, iy.getNumberValidator)(), gi.Factory.afterSetFilter);
gi.Factory.addGetterSetter(Hc.Node, "embossDirection", "top-left", void 0, gi.Factory.afterSetFilter);
gi.Factory.addGetterSetter(Hc.Node, "embossBlend", !1, void 0, gi.Factory.afterSetFilter);
var Wc = {};
Object.defineProperty(Wc, "__esModule", { value: !0 });
Wc.Enhance = void 0;
const Y2 = ke, O7 = be, D7 = fe;
function fh(t, e, n, r, o) {
  const l = n - e, a = o - r;
  if (l === 0)
    return r + a / 2;
  if (a === 0)
    return r;
  let c = (t - e) / l;
  return c = a * c + r, c;
}
const I7 = function(t) {
  const e = t.data, n = e.length;
  let r = e[0], o = r, l, a = e[1], c = a, d, g = e[2], y = g, C;
  const S = this.enhance();
  if (S === 0)
    return;
  for (let p = 0; p < n; p += 4)
    l = e[p + 0], l < r ? r = l : l > o && (o = l), d = e[p + 1], d < a ? a = d : d > c && (c = d), C = e[p + 2], C < g ? g = C : C > y && (y = C);
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
    e[p + 0] = fh(e[p + 0], r, o, v, x), e[p + 1] = fh(e[p + 1], a, c, N, E), e[p + 2] = fh(e[p + 2], g, y, w, k);
};
Wc.Enhance = I7;
Y2.Factory.addGetterSetter(O7.Node, "enhance", 0, (0, D7.getNumberValidator)(), Y2.Factory.afterSetFilter);
var Kc = {};
Object.defineProperty(Kc, "__esModule", { value: !0 });
Kc.Grayscale = void 0;
const z7 = function(t) {
  const e = t.data, n = e.length;
  for (let r = 0; r < n; r += 4) {
    const o = 0.34 * e[r] + 0.5 * e[r + 1] + 0.16 * e[r + 2];
    e[r] = o, e[r + 1] = o, e[r + 2] = o;
  }
};
Kc.Grayscale = z7;
var Yc = {};
Object.defineProperty(Yc, "__esModule", { value: !0 });
Yc.HSL = void 0;
const oo = ke, w1 = be, x1 = fe;
oo.Factory.addGetterSetter(w1.Node, "hue", 0, (0, x1.getNumberValidator)(), oo.Factory.afterSetFilter);
oo.Factory.addGetterSetter(w1.Node, "saturation", 0, (0, x1.getNumberValidator)(), oo.Factory.afterSetFilter);
oo.Factory.addGetterSetter(w1.Node, "luminance", 0, (0, x1.getNumberValidator)(), oo.Factory.afterSetFilter);
const G7 = function(t) {
  const e = t.data, n = e.length, r = 1, o = Math.pow(2, this.saturation()), l = Math.abs(this.hue() + 360) % 360, a = this.luminance() * 127, c = r * o * Math.cos(l * Math.PI / 180), d = r * o * Math.sin(l * Math.PI / 180), g = 0.299 * r + 0.701 * c + 0.167 * d, y = 0.587 * r - 0.587 * c + 0.33 * d, C = 0.114 * r - 0.114 * c - 0.497 * d, S = 0.299 * r - 0.299 * c - 0.328 * d, x = 0.587 * r + 0.413 * c + 0.035 * d, v = 0.114 * r - 0.114 * c + 0.293 * d, E = 0.299 * r - 0.3 * c + 1.25 * d, N = 0.587 * r - 0.586 * c - 1.05 * d, k = 0.114 * r + 0.886 * c - 0.2 * d;
  let w, p, _, T;
  for (let F = 0; F < n; F += 4)
    w = e[F + 0], p = e[F + 1], _ = e[F + 2], T = e[F + 3], e[F + 0] = g * w + y * p + C * _ + a, e[F + 1] = S * w + x * p + v * _ + a, e[F + 2] = E * w + N * p + k * _ + a, e[F + 3] = T;
};
Yc.HSL = G7;
var Xc = {};
Object.defineProperty(Xc, "__esModule", { value: !0 });
Xc.HSV = void 0;
const lo = ke, C1 = be, k1 = fe, U7 = function(t) {
  const e = t.data, n = e.length, r = Math.pow(2, this.value()), o = Math.pow(2, this.saturation()), l = Math.abs(this.hue() + 360) % 360, a = r * o * Math.cos(l * Math.PI / 180), c = r * o * Math.sin(l * Math.PI / 180), d = 0.299 * r + 0.701 * a + 0.167 * c, g = 0.587 * r - 0.587 * a + 0.33 * c, y = 0.114 * r - 0.114 * a - 0.497 * c, C = 0.299 * r - 0.299 * a - 0.328 * c, S = 0.587 * r + 0.413 * a + 0.035 * c, x = 0.114 * r - 0.114 * a + 0.293 * c, v = 0.299 * r - 0.3 * a + 1.25 * c, E = 0.587 * r - 0.586 * a - 1.05 * c, N = 0.114 * r + 0.886 * a - 0.2 * c;
  for (let k = 0; k < n; k += 4) {
    const w = e[k + 0], p = e[k + 1], _ = e[k + 2], T = e[k + 3];
    e[k + 0] = d * w + g * p + y * _, e[k + 1] = C * w + S * p + x * _, e[k + 2] = v * w + E * p + N * _, e[k + 3] = T;
  }
};
Xc.HSV = U7;
lo.Factory.addGetterSetter(C1.Node, "hue", 0, (0, k1.getNumberValidator)(), lo.Factory.afterSetFilter);
lo.Factory.addGetterSetter(C1.Node, "saturation", 0, (0, k1.getNumberValidator)(), lo.Factory.afterSetFilter);
lo.Factory.addGetterSetter(C1.Node, "value", 0, (0, k1.getNumberValidator)(), lo.Factory.afterSetFilter);
var $c = {};
Object.defineProperty($c, "__esModule", { value: !0 });
$c.Invert = void 0;
const B7 = function(t) {
  const e = t.data, n = e.length;
  for (let r = 0; r < n; r += 4)
    e[r] = 255 - e[r], e[r + 1] = 255 - e[r + 1], e[r + 2] = 255 - e[r + 2];
};
$c.Invert = B7;
var Qc = {};
Object.defineProperty(Qc, "__esModule", { value: !0 });
Qc.Kaleidoscope = void 0;
const qu = ke, sy = be, X2 = rt, oy = fe, V7 = function(t, e, n) {
  const r = t.data, o = e.data, l = t.width, a = t.height, c = n.polarCenterX || l / 2, d = n.polarCenterY || a / 2;
  let g = Math.sqrt(c * c + d * d), y = l - c, C = a - d;
  const S = Math.sqrt(y * y + C * C);
  g = S > g ? S : g;
  const x = a, v = l, E = 360 / v * Math.PI / 180;
  for (let N = 0; N < v; N += 1) {
    const k = Math.sin(N * E), w = Math.cos(N * E);
    for (let p = 0; p < x; p += 1) {
      y = Math.floor(c + g * p / x * w), C = Math.floor(d + g * p / x * k);
      let _ = (C * l + y) * 4;
      const T = r[_ + 0], F = r[_ + 1], M = r[_ + 2], R = r[_ + 3];
      _ = (N + p * l) * 4, o[_ + 0] = T, o[_ + 1] = F, o[_ + 2] = M, o[_ + 3] = R;
    }
  }
}, j7 = function(t, e, n) {
  const r = t.data, o = e.data, l = t.width, a = t.height, c = n.polarCenterX || l / 2, d = n.polarCenterY || a / 2;
  let g = Math.sqrt(c * c + d * d), y = l - c, C = a - d;
  const S = Math.sqrt(y * y + C * C);
  g = S > g ? S : g;
  const x = a, v = l, E = 0;
  let N, k;
  for (y = 0; y < l; y += 1)
    for (C = 0; C < a; C += 1) {
      const w = y - c, p = C - d, _ = Math.sqrt(w * w + p * p) * x / g;
      let T = (Math.atan2(p, w) * 180 / Math.PI + 360 + E) % 360;
      T = T * v / 360, N = Math.floor(T), k = Math.floor(_);
      let F = (k * l + N) * 4;
      const M = r[F + 0], R = r[F + 1], G = r[F + 2], L = r[F + 3];
      F = (C * l + y) * 4, o[F + 0] = M, o[F + 1] = R, o[F + 2] = G, o[F + 3] = L;
    }
}, H7 = function(t) {
  const e = t.width, n = t.height;
  let r, o, l, a, c, d, g, y, C, S, x = Math.round(this.kaleidoscopePower());
  const v = Math.round(this.kaleidoscopeAngle()), E = Math.floor(e * (v % 360) / 360);
  if (x < 1)
    return;
  const N = X2.Util.createCanvasElement();
  N.width = e, N.height = n;
  const k = N.getContext("2d").getImageData(0, 0, e, n);
  X2.Util.releaseCanvas(N), V7(t, k, {
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
      l = Math.round(r + E) % e, C = (e * o + l) * 4, c = k.data[C + 0], d = k.data[C + 1], g = k.data[C + 2], y = k.data[C + 3], S = (e * o + r) * 4, k.data[S + 0] = c, k.data[S + 1] = d, k.data[S + 2] = g, k.data[S + 3] = y;
  for (o = 0; o < n; o += 1)
    for (p = Math.floor(w), a = 0; a < x; a += 1) {
      for (r = 0; r < p + 1; r += 1)
        C = (e * o + r) * 4, c = k.data[C + 0], d = k.data[C + 1], g = k.data[C + 2], y = k.data[C + 3], S = (e * o + p * 2 - r - 1) * 4, k.data[S + 0] = c, k.data[S + 1] = d, k.data[S + 2] = g, k.data[S + 3] = y;
      p *= 2;
    }
  j7(k, t, {});
};
Qc.Kaleidoscope = H7;
qu.Factory.addGetterSetter(sy.Node, "kaleidoscopePower", 2, (0, oy.getNumberValidator)(), qu.Factory.afterSetFilter);
qu.Factory.addGetterSetter(sy.Node, "kaleidoscopeAngle", 0, (0, oy.getNumberValidator)(), qu.Factory.afterSetFilter);
var qc = {};
Object.defineProperty(qc, "__esModule", { value: !0 });
qc.Mask = void 0;
const $2 = ke, W7 = be, K7 = fe;
function su(t, e, n) {
  let r = (n * t.width + e) * 4;
  const o = [];
  return o.push(t.data[r++], t.data[r++], t.data[r++], t.data[r++]), o;
}
function $o(t, e) {
  return Math.sqrt(Math.pow(t[0] - e[0], 2) + Math.pow(t[1] - e[1], 2) + Math.pow(t[2] - e[2], 2));
}
function Y7(t) {
  const e = [0, 0, 0];
  for (let n = 0; n < t.length; n++)
    e[0] += t[n][0], e[1] += t[n][1], e[2] += t[n][2];
  return e[0] /= t.length, e[1] /= t.length, e[2] /= t.length, e;
}
function X7(t, e) {
  const n = su(t, 0, 0), r = su(t, t.width - 1, 0), o = su(t, 0, t.height - 1), l = su(t, t.width - 1, t.height - 1), a = e || 10;
  if ($o(n, r) < a && $o(r, l) < a && $o(l, o) < a && $o(o, n) < a) {
    const c = Y7([r, n, l, o]), d = [];
    for (let g = 0; g < t.width * t.height; g++) {
      const y = $o(c, [
        t.data[g * 4],
        t.data[g * 4 + 1],
        t.data[g * 4 + 2]
      ]);
      d[g] = y < a ? 0 : 255;
    }
    return d;
  }
}
function $7(t, e) {
  for (let n = 0; n < t.width * t.height; n++)
    t.data[4 * n + 3] = e[n];
}
function Q7(t, e, n) {
  const r = [1, 1, 1, 1, 0, 1, 1, 1, 1], o = Math.round(Math.sqrt(r.length)), l = Math.floor(o / 2), a = [];
  for (let c = 0; c < n; c++)
    for (let d = 0; d < e; d++) {
      const g = c * e + d;
      let y = 0;
      for (let C = 0; C < o; C++)
        for (let S = 0; S < o; S++) {
          const x = c + C - l, v = d + S - l;
          if (x >= 0 && x < n && v >= 0 && v < e) {
            const E = x * e + v, N = r[C * o + S];
            y += t[E] * N;
          }
        }
      a[g] = y === 255 * 8 ? 255 : 0;
    }
  return a;
}
function q7(t, e, n) {
  const r = [1, 1, 1, 1, 1, 1, 1, 1, 1], o = Math.round(Math.sqrt(r.length)), l = Math.floor(o / 2), a = [];
  for (let c = 0; c < n; c++)
    for (let d = 0; d < e; d++) {
      const g = c * e + d;
      let y = 0;
      for (let C = 0; C < o; C++)
        for (let S = 0; S < o; S++) {
          const x = c + C - l, v = d + S - l;
          if (x >= 0 && x < n && v >= 0 && v < e) {
            const E = x * e + v, N = r[C * o + S];
            y += t[E] * N;
          }
        }
      a[g] = y >= 255 * 4 ? 255 : 0;
    }
  return a;
}
function b7(t, e, n) {
  const r = [0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111], o = Math.round(Math.sqrt(r.length)), l = Math.floor(o / 2), a = [];
  for (let c = 0; c < n; c++)
    for (let d = 0; d < e; d++) {
      const g = c * e + d;
      let y = 0;
      for (let C = 0; C < o; C++)
        for (let S = 0; S < o; S++) {
          const x = c + C - l, v = d + S - l;
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
  let n = X7(t, e);
  return n && (n = Q7(n, t.width, t.height), n = q7(n, t.width, t.height), n = b7(n, t.width, t.height), $7(t, n)), t;
};
qc.Mask = Z7;
$2.Factory.addGetterSetter(W7.Node, "threshold", 0, (0, K7.getNumberValidator)(), $2.Factory.afterSetFilter);
var bc = {};
Object.defineProperty(bc, "__esModule", { value: !0 });
bc.Noise = void 0;
const Q2 = ke, J7 = be, e_ = fe, t_ = function(t) {
  const e = this.noise() * 255, n = t.data, r = n.length, o = e / 2;
  for (let l = 0; l < r; l += 4)
    n[l + 0] += o - 2 * o * Math.random(), n[l + 1] += o - 2 * o * Math.random(), n[l + 2] += o - 2 * o * Math.random();
};
bc.Noise = t_;
Q2.Factory.addGetterSetter(J7.Node, "noise", 0.2, (0, e_.getNumberValidator)(), Q2.Factory.afterSetFilter);
var Zc = {};
Object.defineProperty(Zc, "__esModule", { value: !0 });
Zc.Pixelate = void 0;
const q2 = ke, n_ = rt, r_ = be, i_ = fe, s_ = function(t) {
  let e = Math.ceil(this.pixelSize()), n = t.width, r = t.height, o = Math.ceil(n / e), l = Math.ceil(r / e), a = t.data;
  if (e <= 0) {
    n_.Util.error("pixelSize value can not be <= 0");
    return;
  }
  for (let c = 0; c < o; c += 1)
    for (let d = 0; d < l; d += 1) {
      let g = 0, y = 0, C = 0, S = 0;
      const x = c * e, v = x + e, E = d * e, N = E + e;
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
Zc.Pixelate = s_;
q2.Factory.addGetterSetter(r_.Node, "pixelSize", 8, (0, i_.getNumberValidator)(), q2.Factory.afterSetFilter);
var Jc = {};
Object.defineProperty(Jc, "__esModule", { value: !0 });
Jc.Posterize = void 0;
const b2 = ke, o_ = be, l_ = fe, a_ = function(t) {
  const e = Math.round(this.levels() * 254) + 1, n = t.data, r = n.length, o = 255 / e;
  for (let l = 0; l < r; l += 1)
    n[l] = Math.floor(n[l] / o) * o;
};
Jc.Posterize = a_;
b2.Factory.addGetterSetter(o_.Node, "levels", 0.5, (0, l_.getNumberValidator)(), b2.Factory.afterSetFilter);
var ed = {};
Object.defineProperty(ed, "__esModule", { value: !0 });
ed.RGB = void 0;
const bu = ke, E1 = be, u_ = fe, c_ = function(t) {
  const e = t.data, n = e.length, r = this.red(), o = this.green(), l = this.blue();
  for (let a = 0; a < n; a += 4) {
    const c = (0.34 * e[a] + 0.5 * e[a + 1] + 0.16 * e[a + 2]) / 255;
    e[a] = c * r, e[a + 1] = c * o, e[a + 2] = c * l, e[a + 3] = e[a + 3];
  }
};
ed.RGB = c_;
bu.Factory.addGetterSetter(E1.Node, "red", 0, function(t) {
  return this._filterUpToDate = !1, t > 255 ? 255 : t < 0 ? 0 : Math.round(t);
});
bu.Factory.addGetterSetter(E1.Node, "green", 0, function(t) {
  return this._filterUpToDate = !1, t > 255 ? 255 : t < 0 ? 0 : Math.round(t);
});
bu.Factory.addGetterSetter(E1.Node, "blue", 0, u_.RGBComponent, bu.Factory.afterSetFilter);
var td = {};
Object.defineProperty(td, "__esModule", { value: !0 });
td.RGBA = void 0;
const Ml = ke, nd = be, d_ = fe, f_ = function(t) {
  const e = t.data, n = e.length, r = this.red(), o = this.green(), l = this.blue(), a = this.alpha();
  for (let c = 0; c < n; c += 4) {
    const d = 1 - a;
    e[c] = r * a + e[c] * d, e[c + 1] = o * a + e[c + 1] * d, e[c + 2] = l * a + e[c + 2] * d;
  }
};
td.RGBA = f_;
Ml.Factory.addGetterSetter(nd.Node, "red", 0, function(t) {
  return this._filterUpToDate = !1, t > 255 ? 255 : t < 0 ? 0 : Math.round(t);
});
Ml.Factory.addGetterSetter(nd.Node, "green", 0, function(t) {
  return this._filterUpToDate = !1, t > 255 ? 255 : t < 0 ? 0 : Math.round(t);
});
Ml.Factory.addGetterSetter(nd.Node, "blue", 0, d_.RGBComponent, Ml.Factory.afterSetFilter);
Ml.Factory.addGetterSetter(nd.Node, "alpha", 1, function(t) {
  return this._filterUpToDate = !1, t > 1 ? 1 : t < 0 ? 0 : t;
});
var rd = {};
Object.defineProperty(rd, "__esModule", { value: !0 });
rd.Sepia = void 0;
const h_ = function(t) {
  const e = t.data, n = e.length;
  for (let r = 0; r < n; r += 4) {
    const o = e[r + 0], l = e[r + 1], a = e[r + 2];
    e[r + 0] = Math.min(255, o * 0.393 + l * 0.769 + a * 0.189), e[r + 1] = Math.min(255, o * 0.349 + l * 0.686 + a * 0.168), e[r + 2] = Math.min(255, o * 0.272 + l * 0.534 + a * 0.131);
  }
};
rd.Sepia = h_;
var id = {};
Object.defineProperty(id, "__esModule", { value: !0 });
id.Solarize = void 0;
const p_ = function(t) {
  const e = t.data, n = t.width, r = t.height, o = n * 4;
  let l = r;
  do {
    const a = (l - 1) * o;
    let c = n;
    do {
      const d = a + (c - 1) * 4;
      let g = e[d], y = e[d + 1], C = e[d + 2];
      g > 127 && (g = 255 - g), y > 127 && (y = 255 - y), C > 127 && (C = 255 - C), e[d] = g, e[d + 1] = y, e[d + 2] = C;
    } while (--c);
  } while (--l);
};
id.Solarize = p_;
var sd = {};
Object.defineProperty(sd, "__esModule", { value: !0 });
sd.Threshold = void 0;
const Z2 = ke, g_ = be, m_ = fe, y_ = function(t) {
  const e = this.threshold() * 255, n = t.data, r = n.length;
  for (let o = 0; o < r; o += 1)
    n[o] = n[o] < e ? 0 : 255;
};
sd.Threshold = y_;
Z2.Factory.addGetterSetter(g_.Node, "threshold", 0.5, (0, m_.getNumberValidator)(), Z2.Factory.afterSetFilter);
Object.defineProperty(gc, "__esModule", { value: !0 });
gc.Konva = void 0;
const J2 = Xu, v_ = Sc, __ = Cc, S_ = Pc, w_ = Tc, x_ = Nc, em = so, C_ = Bl, k_ = mo, E_ = jl, P_ = Mc, T_ = Lc, N_ = Ac, R_ = Oc, F_ = vo, M_ = Dc, L_ = Ic, A_ = zc, O_ = Uc, D_ = Bc, I_ = Vc, z_ = jc, G_ = Wc, U_ = Kc, B_ = Yc, V_ = Xc, j_ = $c, H_ = Qc, W_ = qc, K_ = bc, Y_ = Zc, X_ = Jc, $_ = ed, Q_ = td, q_ = rd, b_ = id, Z_ = sd;
gc.Konva = J2.Konva.Util._assign(J2.Konva, {
  Arc: v_.Arc,
  Arrow: __.Arrow,
  Circle: S_.Circle,
  Ellipse: w_.Ellipse,
  Image: x_.Image,
  Label: em.Label,
  Tag: em.Tag,
  Line: C_.Line,
  Path: k_.Path,
  Rect: E_.Rect,
  RegularPolygon: P_.RegularPolygon,
  Ring: T_.Ring,
  Sprite: N_.Sprite,
  Star: R_.Star,
  Text: F_.Text,
  TextPath: M_.TextPath,
  Transformer: L_.Transformer,
  Wedge: A_.Wedge,
  Filters: {
    Blur: O_.Blur,
    Brighten: D_.Brighten,
    Contrast: I_.Contrast,
    Emboss: z_.Emboss,
    Enhance: G_.Enhance,
    Grayscale: U_.Grayscale,
    HSL: B_.HSL,
    HSV: V_.HSV,
    Invert: j_.Invert,
    Kaleidoscope: H_.Kaleidoscope,
    Mask: W_.Mask,
    Noise: K_.Noise,
    Pixelate: Y_.Pixelate,
    Posterize: X_.Posterize,
    RGB: $_.RGB,
    RGBA: Q_.RGBA,
    Sepia: q_.Sepia,
    Solarize: b_.Solarize,
    Threshold: Z_.Threshold
  }
});
var J_ = P4.exports;
Object.defineProperty(J_, "__esModule", { value: !0 });
const eS = gc;
P4.exports = eS.Konva;
var m0 = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.Konva = void 0;
  var n = Xu;
  Object.defineProperty(e, "Konva", { enumerable: !0, get: function() {
    return n.Konva;
  } });
  const r = Xu;
  t.exports = r.Konva;
})(m0, m0.exports);
var tS = m0.exports;
const Ll = /* @__PURE__ */ Zu(tS);
var ly = { exports: {} };
/**
 * @license React
 * react-reconciler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nS = function(e) {
  var n = {}, r = le, o = nl, l = Object.assign;
  function a(i) {
    for (var s = "https://reactjs.org/docs/error-decoder.html?invariant=" + i, u = 1; u < arguments.length; u++) s += "&args[]=" + encodeURIComponent(arguments[u]);
    return "Minified React error #" + i + "; visit " + s + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var c = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, d = Symbol.for("react.element"), g = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), C = Symbol.for("react.strict_mode"), S = Symbol.for("react.profiler"), x = Symbol.for("react.provider"), v = Symbol.for("react.context"), E = Symbol.for("react.forward_ref"), N = Symbol.for("react.suspense"), k = Symbol.for("react.suspense_list"), w = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), _ = Symbol.for("react.offscreen"), T = Symbol.iterator;
  function F(i) {
    return i === null || typeof i != "object" ? null : (i = T && i[T] || i["@@iterator"], typeof i == "function" ? i : null);
  }
  function M(i) {
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
        return s = i.displayName || null, s !== null ? s : M(i.type) || "Memo";
      case p:
        s = i._payload, i = i._init;
        try {
          return M(i(s));
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
        return M(s);
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
  function L(i) {
    if (G(i) !== i) throw Error(a(188));
  }
  function B(i) {
    var s = i.alternate;
    if (!s) {
      if (s = G(i), s === null) throw Error(a(188));
      return s !== i ? null : i;
    }
    for (var u = i, f = s; ; ) {
      var h = u.return;
      if (h === null) break;
      var m = h.alternate;
      if (m === null) {
        if (f = h.return, f !== null) {
          u = f;
          continue;
        }
        break;
      }
      if (h.child === m.child) {
        for (m = h.child; m; ) {
          if (m === u) return L(h), i;
          if (m === f) return L(h), s;
          m = m.sibling;
        }
        throw Error(a(188));
      }
      if (u.return !== f.return) u = h, f = m;
      else {
        for (var P = !1, O = h.child; O; ) {
          if (O === u) {
            P = !0, u = h, f = m;
            break;
          }
          if (O === f) {
            P = !0, f = h, u = m;
            break;
          }
          O = O.sibling;
        }
        if (!P) {
          for (O = m.child; O; ) {
            if (O === u) {
              P = !0, u = m, f = h;
              break;
            }
            if (O === f) {
              P = !0, f = m, u = h;
              break;
            }
            O = O.sibling;
          }
          if (!P) throw Error(a(189));
        }
      }
      if (u.alternate !== f) throw Error(a(190));
    }
    if (u.tag !== 3) throw Error(a(188));
    return u.stateNode.current === u ? i : s;
  }
  function H(i) {
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
  function J(i) {
    if (i.tag === 5 || i.tag === 6) return i;
    for (i = i.child; i !== null; ) {
      if (i.tag !== 4) {
        var s = J(i);
        if (s !== null) return s;
      }
      i = i.sibling;
    }
    return null;
  }
  var $ = Array.isArray, he = e.getPublicInstance, _e = e.getRootHostContext, j = e.getChildHostContext, Q = e.prepareForCommit, X = e.resetAfterCommit, q = e.createInstance, se = e.appendInitialChild, ge = e.finalizeInitialChildren, ft = e.prepareUpdate, ht = e.shouldSetTextContent, Ue = e.createTextInstance, A = e.scheduleTimeout, W = e.cancelTimeout, ae = e.noTimeout, Re = e.isPrimaryRenderer, de = e.supportsMutation, Oe = e.supportsPersistence, xe = e.supportsHydration, ln = e.getInstanceFromNode, De = e.preparePortalMount, Zn = e.getCurrentEventPriority, an = e.detachDeletedInstance, Ln = e.supportsMicrotasks, Hl = e.scheduleMicrotask, Pi = e.supportsTestSelectors, ld = e.findFiberRoot, ad = e.getBoundingRect, ud = e.getTextContent, Ti = e.isHiddenSubtree, cd = e.matchAccessibilityRole, Wl = e.setFocusIfFocusable, dd = e.setupIntersectionObserver, b = e.appendChild, Z = e.appendChildToContainer, ue = e.commitTextUpdate, ne = e.commitMount, ze = e.commitUpdate, $t = e.insertBefore, An = e.insertInContainerBefore, On = e.removeChild, Ur = e.removeChildFromContainer, Dn = e.resetTextContent, fs = e.hideInstance, hs = e.hideTextInstance, ps = e.unhideInstance, fd = e.unhideTextInstance, hd = e.clearContainer, pd = e.cloneInstance, Kl = e.createContainerChildSet, N1 = e.appendChildToContainerChildSet, yy = e.finalizeContainerChildren, gd = e.replaceContainerChildren, R1 = e.cloneHiddenInstance, F1 = e.cloneHiddenTextInstance, vy = e.canHydrateInstance, _y = e.canHydrateTextInstance, Sy = e.canHydrateSuspenseInstance, M1 = e.isSuspenseInstancePending, md = e.isSuspenseInstanceFallback, wy = e.getSuspenseInstanceFallbackErrorDetails, xy = e.registerSuspenseInstanceRetry, Yl = e.getNextHydratableSibling, Cy = e.getFirstHydratableChild, ky = e.getFirstHydratableChildWithinContainer, Ey = e.getFirstHydratableChildWithinSuspenseInstance, Py = e.hydrateInstance, Ty = e.hydrateTextInstance, Ny = e.hydrateSuspenseInstance, Ry = e.getNextHydratableInstanceAfterSuspenseInstance, Fy = e.commitHydratedContainer, My = e.commitHydratedSuspenseInstance, Ly = e.clearSuspenseBoundary, Ay = e.clearSuspenseBoundaryFromContainer, Oy = e.shouldDeleteUnhydratedTailInstances, Dy = e.didNotMatchHydratedContainerTextInstance, Iy = e.didNotMatchHydratedTextInstance, yd;
  function _o(i) {
    if (yd === void 0) try {
      throw Error();
    } catch (u) {
      var s = u.stack.trim().match(/\n( *(at )?)/);
      yd = s && s[1] || "";
    }
    return `
` + yd + i;
  }
  var vd = !1;
  function _d(i, s) {
    if (!i || vd) return "";
    vd = !0;
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
          var f = Y;
        }
        Reflect.construct(i, [], s);
      } else {
        try {
          s.call();
        } catch (Y) {
          f = Y;
        }
        i.call(s.prototype);
      }
      else {
        try {
          throw Error();
        } catch (Y) {
          f = Y;
        }
        i();
      }
    } catch (Y) {
      if (Y && f && typeof Y.stack == "string") {
        for (var h = Y.stack.split(`
`), m = f.stack.split(`
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
      vd = !1, Error.prepareStackTrace = u;
    }
    return (i = i ? i.displayName || i.name : "") ? _o(i) : "";
  }
  var zy = Object.prototype.hasOwnProperty, Sd = [], gs = -1;
  function Br(i) {
    return { current: i };
  }
  function We(i) {
    0 > gs || (i.current = Sd[gs], Sd[gs] = null, gs--);
  }
  function je(i, s) {
    gs++, Sd[gs] = i.current, i.current = s;
  }
  var Vr = {}, Lt = Br(Vr), Qt = Br(!1), Ni = Vr;
  function ms(i, s) {
    var u = i.type.contextTypes;
    if (!u) return Vr;
    var f = i.stateNode;
    if (f && f.__reactInternalMemoizedUnmaskedChildContext === s) return f.__reactInternalMemoizedMaskedChildContext;
    var h = {}, m;
    for (m in u) h[m] = s[m];
    return f && (i = i.stateNode, i.__reactInternalMemoizedUnmaskedChildContext = s, i.__reactInternalMemoizedMaskedChildContext = h), h;
  }
  function qt(i) {
    return i = i.childContextTypes, i != null;
  }
  function Xl() {
    We(Qt), We(Lt);
  }
  function L1(i, s, u) {
    if (Lt.current !== Vr) throw Error(a(168));
    je(Lt, s), je(Qt, u);
  }
  function A1(i, s, u) {
    var f = i.stateNode;
    if (s = s.childContextTypes, typeof f.getChildContext != "function") return u;
    f = f.getChildContext();
    for (var h in f) if (!(h in s)) throw Error(a(108, R(i) || "Unknown", h));
    return l({}, u, f);
  }
  function $l(i) {
    return i = (i = i.stateNode) && i.__reactInternalMemoizedMergedChildContext || Vr, Ni = Lt.current, je(Lt, i), je(Qt, Qt.current), !0;
  }
  function O1(i, s, u) {
    var f = i.stateNode;
    if (!f) throw Error(a(169));
    u ? (i = A1(i, s, Ni), f.__reactInternalMemoizedMergedChildContext = i, We(Qt), We(Lt), je(Lt, i)) : We(Qt), je(Qt, u);
  }
  var In = Math.clz32 ? Math.clz32 : By, Gy = Math.log, Uy = Math.LN2;
  function By(i) {
    return i >>>= 0, i === 0 ? 32 : 31 - (Gy(i) / Uy | 0) | 0;
  }
  var Ql = 64, ql = 4194304;
  function So(i) {
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
  function bl(i, s) {
    var u = i.pendingLanes;
    if (u === 0) return 0;
    var f = 0, h = i.suspendedLanes, m = i.pingedLanes, P = u & 268435455;
    if (P !== 0) {
      var O = P & ~h;
      O !== 0 ? f = So(O) : (m &= P, m !== 0 && (f = So(m)));
    } else P = u & ~h, P !== 0 ? f = So(P) : m !== 0 && (f = So(m));
    if (f === 0) return 0;
    if (s !== 0 && s !== f && !(s & h) && (h = f & -f, m = s & -s, h >= m || h === 16 && (m & 4194240) !== 0)) return s;
    if (f & 4 && (f |= u & 16), s = i.entangledLanes, s !== 0) for (i = i.entanglements, s &= f; 0 < s; ) u = 31 - In(s), h = 1 << u, f |= i[u], s &= ~h;
    return f;
  }
  function Vy(i, s) {
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
  function jy(i, s) {
    for (var u = i.suspendedLanes, f = i.pingedLanes, h = i.expirationTimes, m = i.pendingLanes; 0 < m; ) {
      var P = 31 - In(m), O = 1 << P, U = h[P];
      U === -1 ? (!(O & u) || O & f) && (h[P] = Vy(O, s)) : U <= s && (i.expiredLanes |= O), m &= ~O;
    }
  }
  function wd(i) {
    return i = i.pendingLanes & -1073741825, i !== 0 ? i : i & 1073741824 ? 1073741824 : 0;
  }
  function D1() {
    var i = Ql;
    return Ql <<= 1, !(Ql & 4194240) && (Ql = 64), i;
  }
  function xd(i) {
    for (var s = [], u = 0; 31 > u; u++) s.push(i);
    return s;
  }
  function wo(i, s, u) {
    i.pendingLanes |= s, s !== 536870912 && (i.suspendedLanes = 0, i.pingedLanes = 0), i = i.eventTimes, s = 31 - In(s), i[s] = u;
  }
  function Hy(i, s) {
    var u = i.pendingLanes & ~s;
    i.pendingLanes = s, i.suspendedLanes = 0, i.pingedLanes = 0, i.expiredLanes &= s, i.mutableReadLanes &= s, i.entangledLanes &= s, s = i.entanglements;
    var f = i.eventTimes;
    for (i = i.expirationTimes; 0 < u; ) {
      var h = 31 - In(u), m = 1 << h;
      s[h] = 0, f[h] = -1, i[h] = -1, u &= ~m;
    }
  }
  function Cd(i, s) {
    var u = i.entangledLanes |= s;
    for (i = i.entanglements; u; ) {
      var f = 31 - In(u), h = 1 << f;
      h & s | i[f] & s && (i[f] |= s), u &= ~h;
    }
  }
  var Fe = 0;
  function I1(i) {
    return i &= -i, 1 < i ? 4 < i ? i & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var kd = o.unstable_scheduleCallback, z1 = o.unstable_cancelCallback, Wy = o.unstable_shouldYield, Ky = o.unstable_requestPaint, wt = o.unstable_now, Ed = o.unstable_ImmediatePriority, Yy = o.unstable_UserBlockingPriority, Pd = o.unstable_NormalPriority, Xy = o.unstable_IdlePriority, Zl = null, Jn = null;
  function $y(i) {
    if (Jn && typeof Jn.onCommitFiberRoot == "function") try {
      Jn.onCommitFiberRoot(Zl, i, void 0, (i.current.flags & 128) === 128);
    } catch {
    }
  }
  function Qy(i, s) {
    return i === s && (i !== 0 || 1 / i === 1 / s) || i !== i && s !== s;
  }
  var zn = typeof Object.is == "function" ? Object.is : Qy, gr = null, Jl = !1, Td = !1;
  function G1(i) {
    gr === null ? gr = [i] : gr.push(i);
  }
  function qy(i) {
    Jl = !0, G1(i);
  }
  function er() {
    if (!Td && gr !== null) {
      Td = !0;
      var i = 0, s = Fe;
      try {
        var u = gr;
        for (Fe = 1; i < u.length; i++) {
          var f = u[i];
          do
            f = f(!0);
          while (f !== null);
        }
        gr = null, Jl = !1;
      } catch (h) {
        throw gr !== null && (gr = gr.slice(i + 1)), kd(Ed, er), h;
      } finally {
        Fe = s, Td = !1;
      }
    }
    return null;
  }
  var ys = [], vs = 0, ea = null, ta = 0, yn = [], vn = 0, Ri = null, mr = 1, yr = "";
  function Fi(i, s) {
    ys[vs++] = ta, ys[vs++] = ea, ea = i, ta = s;
  }
  function U1(i, s, u) {
    yn[vn++] = mr, yn[vn++] = yr, yn[vn++] = Ri, Ri = i;
    var f = mr;
    i = yr;
    var h = 32 - In(f) - 1;
    f &= ~(1 << h), u += 1;
    var m = 32 - In(s) + h;
    if (30 < m) {
      var P = h - h % 5;
      m = (f & (1 << P) - 1).toString(32), f >>= P, h -= P, mr = 1 << 32 - In(s) + h | u << h | f, yr = m + i;
    } else mr = 1 << m | u << h | f, yr = i;
  }
  function Nd(i) {
    i.return !== null && (Fi(i, 1), U1(i, 1, 0));
  }
  function Rd(i) {
    for (; i === ea; ) ea = ys[--vs], ys[vs] = null, ta = ys[--vs], ys[vs] = null;
    for (; i === Ri; ) Ri = yn[--vn], yn[vn] = null, yr = yn[--vn], yn[vn] = null, mr = yn[--vn], yn[vn] = null;
  }
  var un = null, _n = null, $e = !1, xo = !1, Gn = null;
  function B1(i, s) {
    var u = kn(5, null, null, 0);
    u.elementType = "DELETED", u.stateNode = s, u.return = i, s = i.deletions, s === null ? (i.deletions = [u], i.flags |= 16) : s.push(u);
  }
  function V1(i, s) {
    switch (i.tag) {
      case 5:
        return s = vy(s, i.type, i.pendingProps), s !== null ? (i.stateNode = s, un = i, _n = Cy(s), !0) : !1;
      case 6:
        return s = _y(s, i.pendingProps), s !== null ? (i.stateNode = s, un = i, _n = null, !0) : !1;
      case 13:
        if (s = Sy(s), s !== null) {
          var u = Ri !== null ? { id: mr, overflow: yr } : null;
          return i.memoizedState = { dehydrated: s, treeContext: u, retryLane: 1073741824 }, u = kn(18, null, null, 0), u.stateNode = s, u.return = i, i.child = u, un = i, _n = null, !0;
        }
        return !1;
      default:
        return !1;
    }
  }
  function Fd(i) {
    return (i.mode & 1) !== 0 && (i.flags & 128) === 0;
  }
  function Md(i) {
    if ($e) {
      var s = _n;
      if (s) {
        var u = s;
        if (!V1(i, s)) {
          if (Fd(i)) throw Error(a(418));
          s = Yl(u);
          var f = un;
          s && V1(i, s) ? B1(f, u) : (i.flags = i.flags & -4097 | 2, $e = !1, un = i);
        }
      } else {
        if (Fd(i)) throw Error(a(418));
        i.flags = i.flags & -4097 | 2, $e = !1, un = i;
      }
    }
  }
  function j1(i) {
    for (i = i.return; i !== null && i.tag !== 5 && i.tag !== 3 && i.tag !== 13; ) i = i.return;
    un = i;
  }
  function na(i) {
    if (!xe || i !== un) return !1;
    if (!$e) return j1(i), $e = !0, !1;
    if (i.tag !== 3 && (i.tag !== 5 || Oy(i.type) && !ht(i.type, i.memoizedProps))) {
      var s = _n;
      if (s) {
        if (Fd(i)) throw H1(), Error(a(418));
        for (; s; ) B1(i, s), s = Yl(s);
      }
    }
    if (j1(i), i.tag === 13) {
      if (!xe) throw Error(a(316));
      if (i = i.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(a(317));
      _n = Ry(i);
    } else _n = un ? Yl(i.stateNode) : null;
    return !0;
  }
  function H1() {
    for (var i = _n; i; ) i = Yl(i);
  }
  function _s() {
    xe && (_n = un = null, xo = $e = !1);
  }
  function Ld(i) {
    Gn === null ? Gn = [i] : Gn.push(i);
  }
  var by = c.ReactCurrentBatchConfig;
  function ra(i, s) {
    if (zn(i, s)) return !0;
    if (typeof i != "object" || i === null || typeof s != "object" || s === null) return !1;
    var u = Object.keys(i), f = Object.keys(s);
    if (u.length !== f.length) return !1;
    for (f = 0; f < u.length; f++) {
      var h = u[f];
      if (!zy.call(s, h) || !zn(i[h], s[h])) return !1;
    }
    return !0;
  }
  function Zy(i) {
    switch (i.tag) {
      case 5:
        return _o(i.type);
      case 16:
        return _o("Lazy");
      case 13:
        return _o("Suspense");
      case 19:
        return _o("SuspenseList");
      case 0:
      case 2:
      case 15:
        return i = _d(i.type, !1), i;
      case 11:
        return i = _d(i.type.render, !1), i;
      case 1:
        return i = _d(i.type, !0), i;
      default:
        return "";
    }
  }
  function Co(i, s, u) {
    if (i = u.ref, i !== null && typeof i != "function" && typeof i != "object") {
      if (u._owner) {
        if (u = u._owner, u) {
          if (u.tag !== 1) throw Error(a(309));
          var f = u.stateNode;
        }
        if (!f) throw Error(a(147, i));
        var h = f, m = "" + i;
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
  function ia(i, s) {
    throw i = Object.prototype.toString.call(s), Error(a(31, i === "[object Object]" ? "object with keys {" + Object.keys(s).join(", ") + "}" : i));
  }
  function W1(i) {
    var s = i._init;
    return s(i._payload);
  }
  function K1(i) {
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
    function f(z, D) {
      for (z = /* @__PURE__ */ new Map(); D !== null; ) D.key !== null ? z.set(D.key, D) : z.set(D.index, D), D = D.sibling;
      return z;
    }
    function h(z, D) {
      return z = $r(z, D), z.index = 0, z.sibling = null, z;
    }
    function m(z, D, V) {
      return z.index = V, i ? (V = z.alternate, V !== null ? (V = V.index, V < D ? (z.flags |= 2, D) : V) : (z.flags |= 2, D)) : (z.flags |= 1048576, D);
    }
    function P(z) {
      return i && z.alternate === null && (z.flags |= 2), z;
    }
    function O(z, D, V, te) {
      return D === null || D.tag !== 6 ? (D = Nf(V, z.mode, te), D.return = z, D) : (D = h(D, V), D.return = z, D);
    }
    function U(z, D, V, te) {
      var ce = V.type;
      return ce === y ? oe(z, D, V.props.children, te, V.key) : D !== null && (D.elementType === ce || typeof ce == "object" && ce !== null && ce.$$typeof === p && W1(ce) === D.type) ? (te = h(D, V.props), te.ref = Co(z, D, V), te.return = z, te) : (te = Da(V.type, V.key, V.props, null, z.mode, te), te.ref = Co(z, D, V), te.return = z, te);
    }
    function Y(z, D, V, te) {
      return D === null || D.tag !== 4 || D.stateNode.containerInfo !== V.containerInfo || D.stateNode.implementation !== V.implementation ? (D = Rf(V, z.mode, te), D.return = z, D) : (D = h(D, V.children || []), D.return = z, D);
    }
    function oe(z, D, V, te, ce) {
      return D === null || D.tag !== 7 ? (D = zi(V, z.mode, te, ce), D.return = z, D) : (D = h(D, V), D.return = z, D);
    }
    function me(z, D, V) {
      if (typeof D == "string" && D !== "" || typeof D == "number") return D = Nf("" + D, z.mode, V), D.return = z, D;
      if (typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case d:
            return V = Da(D.type, D.key, D.props, null, z.mode, V), V.ref = Co(z, null, D), V.return = z, V;
          case g:
            return D = Rf(D, z.mode, V), D.return = z, D;
          case p:
            var te = D._init;
            return me(z, te(D._payload), V);
        }
        if ($(D) || F(D)) return D = zi(D, z.mode, V, null), D.return = z, D;
        ia(z, D);
      }
      return null;
    }
    function ee(z, D, V, te) {
      var ce = D !== null ? D.key : null;
      if (typeof V == "string" && V !== "" || typeof V == "number") return ce !== null ? null : O(z, D, "" + V, te);
      if (typeof V == "object" && V !== null) {
        switch (V.$$typeof) {
          case d:
            return V.key === ce ? U(z, D, V, te) : null;
          case g:
            return V.key === ce ? Y(z, D, V, te) : null;
          case p:
            return ce = V._init, ee(
              z,
              D,
              ce(V._payload),
              te
            );
        }
        if ($(V) || F(V)) return ce !== null ? null : oe(z, D, V, te, null);
        ia(z, V);
      }
      return null;
    }
    function Ke(z, D, V, te, ce) {
      if (typeof te == "string" && te !== "" || typeof te == "number") return z = z.get(V) || null, O(D, z, "" + te, ce);
      if (typeof te == "object" && te !== null) {
        switch (te.$$typeof) {
          case d:
            return z = z.get(te.key === null ? V : te.key) || null, U(D, z, te, ce);
          case g:
            return z = z.get(te.key === null ? V : te.key) || null, Y(D, z, te, ce);
          case p:
            var Se = te._init;
            return Ke(z, D, V, Se(te._payload), ce);
        }
        if ($(te) || F(te)) return z = z.get(V) || null, oe(D, z, te, ce, null);
        ia(D, te);
      }
      return null;
    }
    function Be(z, D, V, te) {
      for (var ce = null, Se = null, ye = D, Me = D = 0, kt = null; ye !== null && Me < V.length; Me++) {
        ye.index > Me ? (kt = ye, ye = null) : kt = ye.sibling;
        var Le = ee(z, ye, V[Me], te);
        if (Le === null) {
          ye === null && (ye = kt);
          break;
        }
        i && ye && Le.alternate === null && s(z, ye), D = m(Le, D, Me), Se === null ? ce = Le : Se.sibling = Le, Se = Le, ye = kt;
      }
      if (Me === V.length) return u(z, ye), $e && Fi(z, Me), ce;
      if (ye === null) {
        for (; Me < V.length; Me++) ye = me(z, V[Me], te), ye !== null && (D = m(ye, D, Me), Se === null ? ce = ye : Se.sibling = ye, Se = ye);
        return $e && Fi(z, Me), ce;
      }
      for (ye = f(z, ye); Me < V.length; Me++) kt = Ke(ye, z, Me, V[Me], te), kt !== null && (i && kt.alternate !== null && ye.delete(kt.key === null ? Me : kt.key), D = m(kt, D, Me), Se === null ? ce = kt : Se.sibling = kt, Se = kt);
      return i && ye.forEach(function(Qr) {
        return s(z, Qr);
      }), $e && Fi(z, Me), ce;
    }
    function en(z, D, V, te) {
      var ce = F(V);
      if (typeof ce != "function") throw Error(a(150));
      if (V = ce.call(V), V == null) throw Error(a(151));
      for (var Se = ce = null, ye = D, Me = D = 0, kt = null, Le = V.next(); ye !== null && !Le.done; Me++, Le = V.next()) {
        ye.index > Me ? (kt = ye, ye = null) : kt = ye.sibling;
        var Qr = ee(z, ye, Le.value, te);
        if (Qr === null) {
          ye === null && (ye = kt);
          break;
        }
        i && ye && Qr.alternate === null && s(z, ye), D = m(Qr, D, Me), Se === null ? ce = Qr : Se.sibling = Qr, Se = Qr, ye = kt;
      }
      if (Le.done) return u(
        z,
        ye
      ), $e && Fi(z, Me), ce;
      if (ye === null) {
        for (; !Le.done; Me++, Le = V.next()) Le = me(z, Le.value, te), Le !== null && (D = m(Le, D, Me), Se === null ? ce = Le : Se.sibling = Le, Se = Le);
        return $e && Fi(z, Me), ce;
      }
      for (ye = f(z, ye); !Le.done; Me++, Le = V.next()) Le = Ke(ye, z, Me, Le.value, te), Le !== null && (i && Le.alternate !== null && ye.delete(Le.key === null ? Me : Le.key), D = m(Le, D, Me), Se === null ? ce = Le : Se.sibling = Le, Se = Le);
      return i && ye.forEach(function(N5) {
        return s(z, N5);
      }), $e && Fi(z, Me), ce;
    }
    function wr(z, D, V, te) {
      if (typeof V == "object" && V !== null && V.type === y && V.key === null && (V = V.props.children), typeof V == "object" && V !== null) {
        switch (V.$$typeof) {
          case d:
            e: {
              for (var ce = V.key, Se = D; Se !== null; ) {
                if (Se.key === ce) {
                  if (ce = V.type, ce === y) {
                    if (Se.tag === 7) {
                      u(z, Se.sibling), D = h(Se, V.props.children), D.return = z, z = D;
                      break e;
                    }
                  } else if (Se.elementType === ce || typeof ce == "object" && ce !== null && ce.$$typeof === p && W1(ce) === Se.type) {
                    u(z, Se.sibling), D = h(Se, V.props), D.ref = Co(z, Se, V), D.return = z, z = D;
                    break e;
                  }
                  u(z, Se);
                  break;
                } else s(z, Se);
                Se = Se.sibling;
              }
              V.type === y ? (D = zi(V.props.children, z.mode, te, V.key), D.return = z, z = D) : (te = Da(V.type, V.key, V.props, null, z.mode, te), te.ref = Co(z, D, V), te.return = z, z = te);
            }
            return P(z);
          case g:
            e: {
              for (Se = V.key; D !== null; ) {
                if (D.key === Se) if (D.tag === 4 && D.stateNode.containerInfo === V.containerInfo && D.stateNode.implementation === V.implementation) {
                  u(z, D.sibling), D = h(D, V.children || []), D.return = z, z = D;
                  break e;
                } else {
                  u(z, D);
                  break;
                }
                else s(z, D);
                D = D.sibling;
              }
              D = Rf(V, z.mode, te), D.return = z, z = D;
            }
            return P(z);
          case p:
            return Se = V._init, wr(z, D, Se(V._payload), te);
        }
        if ($(V)) return Be(z, D, V, te);
        if (F(V)) return en(z, D, V, te);
        ia(z, V);
      }
      return typeof V == "string" && V !== "" || typeof V == "number" ? (V = "" + V, D !== null && D.tag === 6 ? (u(z, D.sibling), D = h(D, V), D.return = z, z = D) : (u(z, D), D = Nf(V, z.mode, te), D.return = z, z = D), P(z)) : u(z, D);
    }
    return wr;
  }
  var Ss = K1(!0), Y1 = K1(!1), sa = Br(null), oa = null, ws = null, Ad = null;
  function Od() {
    Ad = ws = oa = null;
  }
  function X1(i, s, u) {
    Re ? (je(sa, s._currentValue), s._currentValue = u) : (je(sa, s._currentValue2), s._currentValue2 = u);
  }
  function Dd(i) {
    var s = sa.current;
    We(sa), Re ? i._currentValue = s : i._currentValue2 = s;
  }
  function Id(i, s, u) {
    for (; i !== null; ) {
      var f = i.alternate;
      if ((i.childLanes & s) !== s ? (i.childLanes |= s, f !== null && (f.childLanes |= s)) : f !== null && (f.childLanes & s) !== s && (f.childLanes |= s), i === u) break;
      i = i.return;
    }
  }
  function xs(i, s) {
    oa = i, Ad = ws = null, i = i.dependencies, i !== null && i.firstContext !== null && (i.lanes & s && (bt = !0), i.firstContext = null);
  }
  function Sn(i) {
    var s = Re ? i._currentValue : i._currentValue2;
    if (Ad !== i) if (i = { context: i, memoizedValue: s, next: null }, ws === null) {
      if (oa === null) throw Error(a(308));
      ws = i, oa.dependencies = { lanes: 0, firstContext: i };
    } else ws = ws.next = i;
    return s;
  }
  var Mi = null;
  function zd(i) {
    Mi === null ? Mi = [i] : Mi.push(i);
  }
  function $1(i, s, u, f) {
    var h = s.interleaved;
    return h === null ? (u.next = u, zd(s)) : (u.next = h.next, h.next = u), s.interleaved = u, tr(i, f);
  }
  function tr(i, s) {
    i.lanes |= s;
    var u = i.alternate;
    for (u !== null && (u.lanes |= s), u = i, i = i.return; i !== null; ) i.childLanes |= s, u = i.alternate, u !== null && (u.childLanes |= s), u = i, i = i.return;
    return u.tag === 3 ? u.stateNode : null;
  }
  var jr = !1;
  function Gd(i) {
    i.updateQueue = { baseState: i.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Q1(i, s) {
    i = i.updateQueue, s.updateQueue === i && (s.updateQueue = { baseState: i.baseState, firstBaseUpdate: i.firstBaseUpdate, lastBaseUpdate: i.lastBaseUpdate, shared: i.shared, effects: i.effects });
  }
  function vr(i, s) {
    return { eventTime: i, lane: s, tag: 0, payload: null, callback: null, next: null };
  }
  function Hr(i, s, u) {
    var f = i.updateQueue;
    if (f === null) return null;
    if (f = f.shared, Ce & 2) {
      var h = f.pending;
      return h === null ? s.next = s : (s.next = h.next, h.next = s), f.pending = s, tr(i, u);
    }
    return h = f.interleaved, h === null ? (s.next = s, zd(f)) : (s.next = h.next, h.next = s), f.interleaved = s, tr(i, u);
  }
  function la(i, s, u) {
    if (s = s.updateQueue, s !== null && (s = s.shared, (u & 4194240) !== 0)) {
      var f = s.lanes;
      f &= i.pendingLanes, u |= f, s.lanes = u, Cd(i, u);
    }
  }
  function q1(i, s) {
    var u = i.updateQueue, f = i.alternate;
    if (f !== null && (f = f.updateQueue, u === f)) {
      var h = null, m = null;
      if (u = u.firstBaseUpdate, u !== null) {
        do {
          var P = { eventTime: u.eventTime, lane: u.lane, tag: u.tag, payload: u.payload, callback: u.callback, next: null };
          m === null ? h = m = P : m = m.next = P, u = u.next;
        } while (u !== null);
        m === null ? h = m = s : m = m.next = s;
      } else h = m = s;
      u = { baseState: f.baseState, firstBaseUpdate: h, lastBaseUpdate: m, shared: f.shared, effects: f.effects }, i.updateQueue = u;
      return;
    }
    i = u.lastBaseUpdate, i === null ? u.firstBaseUpdate = s : i.next = s, u.lastBaseUpdate = s;
  }
  function aa(i, s, u, f) {
    var h = i.updateQueue;
    jr = !1;
    var m = h.firstBaseUpdate, P = h.lastBaseUpdate, O = h.shared.pending;
    if (O !== null) {
      h.shared.pending = null;
      var U = O, Y = U.next;
      U.next = null, P === null ? m = Y : P.next = Y, P = U;
      var oe = i.alternate;
      oe !== null && (oe = oe.updateQueue, O = oe.lastBaseUpdate, O !== P && (O === null ? oe.firstBaseUpdate = Y : O.next = Y, oe.lastBaseUpdate = U));
    }
    if (m !== null) {
      var me = h.baseState;
      P = 0, oe = Y = U = null, O = m;
      do {
        var ee = O.lane, Ke = O.eventTime;
        if ((f & ee) === ee) {
          oe !== null && (oe = oe.next = {
            eventTime: Ke,
            lane: 0,
            tag: O.tag,
            payload: O.payload,
            callback: O.callback,
            next: null
          });
          e: {
            var Be = i, en = O;
            switch (ee = s, Ke = u, en.tag) {
              case 1:
                if (Be = en.payload, typeof Be == "function") {
                  me = Be.call(Ke, me, ee);
                  break e;
                }
                me = Be;
                break e;
              case 3:
                Be.flags = Be.flags & -65537 | 128;
              case 0:
                if (Be = en.payload, ee = typeof Be == "function" ? Be.call(Ke, me, ee) : Be, ee == null) break e;
                me = l({}, me, ee);
                break e;
              case 2:
                jr = !0;
            }
          }
          O.callback !== null && O.lane !== 0 && (i.flags |= 64, ee = h.effects, ee === null ? h.effects = [O] : ee.push(O));
        } else Ke = { eventTime: Ke, lane: ee, tag: O.tag, payload: O.payload, callback: O.callback, next: null }, oe === null ? (Y = oe = Ke, U = me) : oe = oe.next = Ke, P |= ee;
        if (O = O.next, O === null) {
          if (O = h.shared.pending, O === null) break;
          ee = O, O = ee.next, ee.next = null, h.lastBaseUpdate = ee, h.shared.pending = null;
        }
      } while (!0);
      if (oe === null && (U = me), h.baseState = U, h.firstBaseUpdate = Y, h.lastBaseUpdate = oe, s = h.shared.interleaved, s !== null) {
        h = s;
        do
          P |= h.lane, h = h.next;
        while (h !== s);
      } else m === null && (h.shared.lanes = 0);
      Ai |= P, i.lanes = P, i.memoizedState = me;
    }
  }
  function b1(i, s, u) {
    if (i = s.effects, s.effects = null, i !== null) for (s = 0; s < i.length; s++) {
      var f = i[s], h = f.callback;
      if (h !== null) {
        if (f.callback = null, f = u, typeof h != "function") throw Error(a(191, h));
        h.call(f);
      }
    }
  }
  var ko = {}, wn = Br(ko), Eo = Br(ko), Cs = Br(ko);
  function nr(i) {
    if (i === ko) throw Error(a(174));
    return i;
  }
  function Ud(i, s) {
    je(Cs, s), je(Eo, i), je(wn, ko), i = _e(s), We(wn), je(wn, i);
  }
  function ks() {
    We(wn), We(Eo), We(Cs);
  }
  function Z1(i) {
    var s = nr(Cs.current), u = nr(wn.current);
    s = j(u, i.type, s), u !== s && (je(Eo, i), je(wn, s));
  }
  function Bd(i) {
    Eo.current === i && (We(wn), We(Eo));
  }
  var Ze = Br(0);
  function ua(i) {
    for (var s = i; s !== null; ) {
      if (s.tag === 13) {
        var u = s.memoizedState;
        if (u !== null && (u = u.dehydrated, u === null || M1(u) || md(u))) return s;
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
  var Vd = [];
  function jd() {
    for (var i = 0; i < Vd.length; i++) {
      var s = Vd[i];
      Re ? s._workInProgressVersionPrimary = null : s._workInProgressVersionSecondary = null;
    }
    Vd.length = 0;
  }
  var ca = c.ReactCurrentDispatcher, Hd = c.ReactCurrentBatchConfig, Li = 0, Je = null, pt = null, xt = null, da = !1, Po = !1, To = 0, Jy = 0;
  function At() {
    throw Error(a(321));
  }
  function Wd(i, s) {
    if (s === null) return !1;
    for (var u = 0; u < s.length && u < i.length; u++) if (!zn(i[u], s[u])) return !1;
    return !0;
  }
  function Kd(i, s, u, f, h, m) {
    if (Li = m, Je = s, s.memoizedState = null, s.updateQueue = null, s.lanes = 0, ca.current = i === null || i.memoizedState === null ? r5 : i5, i = u(f, h), Po) {
      m = 0;
      do {
        if (Po = !1, To = 0, 25 <= m) throw Error(a(301));
        m += 1, xt = pt = null, s.updateQueue = null, ca.current = s5, i = u(f, h);
      } while (Po);
    }
    if (ca.current = pa, s = pt !== null && pt.next !== null, Li = 0, xt = pt = Je = null, da = !1, s) throw Error(a(300));
    return i;
  }
  function Yd() {
    var i = To !== 0;
    return To = 0, i;
  }
  function rr() {
    var i = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return xt === null ? Je.memoizedState = xt = i : xt = xt.next = i, xt;
  }
  function xn() {
    if (pt === null) {
      var i = Je.alternate;
      i = i !== null ? i.memoizedState : null;
    } else i = pt.next;
    var s = xt === null ? Je.memoizedState : xt.next;
    if (s !== null) xt = s, pt = i;
    else {
      if (i === null) throw Error(a(310));
      pt = i, i = { memoizedState: pt.memoizedState, baseState: pt.baseState, baseQueue: pt.baseQueue, queue: pt.queue, next: null }, xt === null ? Je.memoizedState = xt = i : xt = xt.next = i;
    }
    return xt;
  }
  function No(i, s) {
    return typeof s == "function" ? s(i) : s;
  }
  function Xd(i) {
    var s = xn(), u = s.queue;
    if (u === null) throw Error(a(311));
    u.lastRenderedReducer = i;
    var f = pt, h = f.baseQueue, m = u.pending;
    if (m !== null) {
      if (h !== null) {
        var P = h.next;
        h.next = m.next, m.next = P;
      }
      f.baseQueue = h = m, u.pending = null;
    }
    if (h !== null) {
      m = h.next, f = f.baseState;
      var O = P = null, U = null, Y = m;
      do {
        var oe = Y.lane;
        if ((Li & oe) === oe) U !== null && (U = U.next = { lane: 0, action: Y.action, hasEagerState: Y.hasEagerState, eagerState: Y.eagerState, next: null }), f = Y.hasEagerState ? Y.eagerState : i(f, Y.action);
        else {
          var me = {
            lane: oe,
            action: Y.action,
            hasEagerState: Y.hasEagerState,
            eagerState: Y.eagerState,
            next: null
          };
          U === null ? (O = U = me, P = f) : U = U.next = me, Je.lanes |= oe, Ai |= oe;
        }
        Y = Y.next;
      } while (Y !== null && Y !== m);
      U === null ? P = f : U.next = O, zn(f, s.memoizedState) || (bt = !0), s.memoizedState = f, s.baseState = P, s.baseQueue = U, u.lastRenderedState = f;
    }
    if (i = u.interleaved, i !== null) {
      h = i;
      do
        m = h.lane, Je.lanes |= m, Ai |= m, h = h.next;
      while (h !== i);
    } else h === null && (u.lanes = 0);
    return [s.memoizedState, u.dispatch];
  }
  function $d(i) {
    var s = xn(), u = s.queue;
    if (u === null) throw Error(a(311));
    u.lastRenderedReducer = i;
    var f = u.dispatch, h = u.pending, m = s.memoizedState;
    if (h !== null) {
      u.pending = null;
      var P = h = h.next;
      do
        m = i(m, P.action), P = P.next;
      while (P !== h);
      zn(m, s.memoizedState) || (bt = !0), s.memoizedState = m, s.baseQueue === null && (s.baseState = m), u.lastRenderedState = m;
    }
    return [m, f];
  }
  function J1() {
  }
  function ep(i, s) {
    var u = Je, f = xn(), h = s(), m = !zn(f.memoizedState, h);
    if (m && (f.memoizedState = h, bt = !0), f = f.queue, Qd(rp.bind(null, u, f, i), [i]), f.getSnapshot !== s || m || xt !== null && xt.memoizedState.tag & 1) {
      if (u.flags |= 2048, Ro(9, np.bind(null, u, f, h, s), void 0, null), Ct === null) throw Error(a(349));
      Li & 30 || tp(u, s, h);
    }
    return h;
  }
  function tp(i, s, u) {
    i.flags |= 16384, i = { getSnapshot: s, value: u }, s = Je.updateQueue, s === null ? (s = { lastEffect: null, stores: null }, Je.updateQueue = s, s.stores = [i]) : (u = s.stores, u === null ? s.stores = [i] : u.push(i));
  }
  function np(i, s, u, f) {
    s.value = u, s.getSnapshot = f, ip(s) && sp(i);
  }
  function rp(i, s, u) {
    return u(function() {
      ip(s) && sp(i);
    });
  }
  function ip(i) {
    var s = i.getSnapshot;
    i = i.value;
    try {
      var u = s();
      return !zn(i, u);
    } catch {
      return !0;
    }
  }
  function sp(i) {
    var s = tr(i, 1);
    s !== null && Cn(s, i, 1, -1);
  }
  function op(i) {
    var s = rr();
    return typeof i == "function" && (i = i()), s.memoizedState = s.baseState = i, i = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: No, lastRenderedState: i }, s.queue = i, i = i.dispatch = n5.bind(null, Je, i), [s.memoizedState, i];
  }
  function Ro(i, s, u, f) {
    return i = { tag: i, create: s, destroy: u, deps: f, next: null }, s = Je.updateQueue, s === null ? (s = { lastEffect: null, stores: null }, Je.updateQueue = s, s.lastEffect = i.next = i) : (u = s.lastEffect, u === null ? s.lastEffect = i.next = i : (f = u.next, u.next = i, i.next = f, s.lastEffect = i)), i;
  }
  function lp() {
    return xn().memoizedState;
  }
  function fa(i, s, u, f) {
    var h = rr();
    Je.flags |= i, h.memoizedState = Ro(1 | s, u, void 0, f === void 0 ? null : f);
  }
  function ha(i, s, u, f) {
    var h = xn();
    f = f === void 0 ? null : f;
    var m = void 0;
    if (pt !== null) {
      var P = pt.memoizedState;
      if (m = P.destroy, f !== null && Wd(f, P.deps)) {
        h.memoizedState = Ro(s, u, m, f);
        return;
      }
    }
    Je.flags |= i, h.memoizedState = Ro(1 | s, u, m, f);
  }
  function ap(i, s) {
    return fa(8390656, 8, i, s);
  }
  function Qd(i, s) {
    return ha(2048, 8, i, s);
  }
  function up(i, s) {
    return ha(4, 2, i, s);
  }
  function cp(i, s) {
    return ha(4, 4, i, s);
  }
  function dp(i, s) {
    if (typeof s == "function") return i = i(), s(i), function() {
      s(null);
    };
    if (s != null) return i = i(), s.current = i, function() {
      s.current = null;
    };
  }
  function fp(i, s, u) {
    return u = u != null ? u.concat([i]) : null, ha(4, 4, dp.bind(null, s, i), u);
  }
  function qd() {
  }
  function hp(i, s) {
    var u = xn();
    s = s === void 0 ? null : s;
    var f = u.memoizedState;
    return f !== null && s !== null && Wd(s, f[1]) ? f[0] : (u.memoizedState = [i, s], i);
  }
  function pp(i, s) {
    var u = xn();
    s = s === void 0 ? null : s;
    var f = u.memoizedState;
    return f !== null && s !== null && Wd(s, f[1]) ? f[0] : (i = i(), u.memoizedState = [i, s], i);
  }
  function gp(i, s, u) {
    return Li & 21 ? (zn(u, s) || (u = D1(), Je.lanes |= u, Ai |= u, i.baseState = !0), s) : (i.baseState && (i.baseState = !1, bt = !0), i.memoizedState = u);
  }
  function e5(i, s) {
    var u = Fe;
    Fe = u !== 0 && 4 > u ? u : 4, i(!0);
    var f = Hd.transition;
    Hd.transition = {};
    try {
      i(!1), s();
    } finally {
      Fe = u, Hd.transition = f;
    }
  }
  function mp() {
    return xn().memoizedState;
  }
  function t5(i, s, u) {
    var f = Yr(i);
    if (u = { lane: f, action: u, hasEagerState: !1, eagerState: null, next: null }, yp(i)) vp(s, u);
    else if (u = $1(i, s, u, f), u !== null) {
      var h = It();
      Cn(u, i, f, h), _p(u, s, f);
    }
  }
  function n5(i, s, u) {
    var f = Yr(i), h = { lane: f, action: u, hasEagerState: !1, eagerState: null, next: null };
    if (yp(i)) vp(s, h);
    else {
      var m = i.alternate;
      if (i.lanes === 0 && (m === null || m.lanes === 0) && (m = s.lastRenderedReducer, m !== null)) try {
        var P = s.lastRenderedState, O = m(P, u);
        if (h.hasEagerState = !0, h.eagerState = O, zn(O, P)) {
          var U = s.interleaved;
          U === null ? (h.next = h, zd(s)) : (h.next = U.next, U.next = h), s.interleaved = h;
          return;
        }
      } catch {
      } finally {
      }
      u = $1(i, s, h, f), u !== null && (h = It(), Cn(u, i, f, h), _p(u, s, f));
    }
  }
  function yp(i) {
    var s = i.alternate;
    return i === Je || s !== null && s === Je;
  }
  function vp(i, s) {
    Po = da = !0;
    var u = i.pending;
    u === null ? s.next = s : (s.next = u.next, u.next = s), i.pending = s;
  }
  function _p(i, s, u) {
    if (u & 4194240) {
      var f = s.lanes;
      f &= i.pendingLanes, u |= f, s.lanes = u, Cd(i, u);
    }
  }
  var pa = { readContext: Sn, useCallback: At, useContext: At, useEffect: At, useImperativeHandle: At, useInsertionEffect: At, useLayoutEffect: At, useMemo: At, useReducer: At, useRef: At, useState: At, useDebugValue: At, useDeferredValue: At, useTransition: At, useMutableSource: At, useSyncExternalStore: At, useId: At, unstable_isNewReconciler: !1 }, r5 = { readContext: Sn, useCallback: function(i, s) {
    return rr().memoizedState = [i, s === void 0 ? null : s], i;
  }, useContext: Sn, useEffect: ap, useImperativeHandle: function(i, s, u) {
    return u = u != null ? u.concat([i]) : null, fa(
      4194308,
      4,
      dp.bind(null, s, i),
      u
    );
  }, useLayoutEffect: function(i, s) {
    return fa(4194308, 4, i, s);
  }, useInsertionEffect: function(i, s) {
    return fa(4, 2, i, s);
  }, useMemo: function(i, s) {
    var u = rr();
    return s = s === void 0 ? null : s, i = i(), u.memoizedState = [i, s], i;
  }, useReducer: function(i, s, u) {
    var f = rr();
    return s = u !== void 0 ? u(s) : s, f.memoizedState = f.baseState = s, i = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: i, lastRenderedState: s }, f.queue = i, i = i.dispatch = t5.bind(null, Je, i), [f.memoizedState, i];
  }, useRef: function(i) {
    var s = rr();
    return i = { current: i }, s.memoizedState = i;
  }, useState: op, useDebugValue: qd, useDeferredValue: function(i) {
    return rr().memoizedState = i;
  }, useTransition: function() {
    var i = op(!1), s = i[0];
    return i = e5.bind(null, i[1]), rr().memoizedState = i, [s, i];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(i, s, u) {
    var f = Je, h = rr();
    if ($e) {
      if (u === void 0) throw Error(a(407));
      u = u();
    } else {
      if (u = s(), Ct === null) throw Error(a(349));
      Li & 30 || tp(f, s, u);
    }
    h.memoizedState = u;
    var m = { value: u, getSnapshot: s };
    return h.queue = m, ap(rp.bind(
      null,
      f,
      m,
      i
    ), [i]), f.flags |= 2048, Ro(9, np.bind(null, f, m, u, s), void 0, null), u;
  }, useId: function() {
    var i = rr(), s = Ct.identifierPrefix;
    if ($e) {
      var u = yr, f = mr;
      u = (f & ~(1 << 32 - In(f) - 1)).toString(32) + u, s = ":" + s + "R" + u, u = To++, 0 < u && (s += "H" + u.toString(32)), s += ":";
    } else u = Jy++, s = ":" + s + "r" + u.toString(32) + ":";
    return i.memoizedState = s;
  }, unstable_isNewReconciler: !1 }, i5 = {
    readContext: Sn,
    useCallback: hp,
    useContext: Sn,
    useEffect: Qd,
    useImperativeHandle: fp,
    useInsertionEffect: up,
    useLayoutEffect: cp,
    useMemo: pp,
    useReducer: Xd,
    useRef: lp,
    useState: function() {
      return Xd(No);
    },
    useDebugValue: qd,
    useDeferredValue: function(i) {
      var s = xn();
      return gp(s, pt.memoizedState, i);
    },
    useTransition: function() {
      var i = Xd(No)[0], s = xn().memoizedState;
      return [i, s];
    },
    useMutableSource: J1,
    useSyncExternalStore: ep,
    useId: mp,
    unstable_isNewReconciler: !1
  }, s5 = { readContext: Sn, useCallback: hp, useContext: Sn, useEffect: Qd, useImperativeHandle: fp, useInsertionEffect: up, useLayoutEffect: cp, useMemo: pp, useReducer: $d, useRef: lp, useState: function() {
    return $d(No);
  }, useDebugValue: qd, useDeferredValue: function(i) {
    var s = xn();
    return pt === null ? s.memoizedState = i : gp(s, pt.memoizedState, i);
  }, useTransition: function() {
    var i = $d(No)[0], s = xn().memoizedState;
    return [i, s];
  }, useMutableSource: J1, useSyncExternalStore: ep, useId: mp, unstable_isNewReconciler: !1 };
  function Un(i, s) {
    if (i && i.defaultProps) {
      s = l({}, s), i = i.defaultProps;
      for (var u in i) s[u] === void 0 && (s[u] = i[u]);
      return s;
    }
    return s;
  }
  function bd(i, s, u, f) {
    s = i.memoizedState, u = u(f, s), u = u == null ? s : l({}, s, u), i.memoizedState = u, i.lanes === 0 && (i.updateQueue.baseState = u);
  }
  var ga = { isMounted: function(i) {
    return (i = i._reactInternals) ? G(i) === i : !1;
  }, enqueueSetState: function(i, s, u) {
    i = i._reactInternals;
    var f = It(), h = Yr(i), m = vr(f, h);
    m.payload = s, u != null && (m.callback = u), s = Hr(i, m, h), s !== null && (Cn(s, i, h, f), la(s, i, h));
  }, enqueueReplaceState: function(i, s, u) {
    i = i._reactInternals;
    var f = It(), h = Yr(i), m = vr(f, h);
    m.tag = 1, m.payload = s, u != null && (m.callback = u), s = Hr(i, m, h), s !== null && (Cn(s, i, h, f), la(s, i, h));
  }, enqueueForceUpdate: function(i, s) {
    i = i._reactInternals;
    var u = It(), f = Yr(i), h = vr(u, f);
    h.tag = 2, s != null && (h.callback = s), s = Hr(i, h, f), s !== null && (Cn(s, i, f, u), la(s, i, f));
  } };
  function Sp(i, s, u, f, h, m, P) {
    return i = i.stateNode, typeof i.shouldComponentUpdate == "function" ? i.shouldComponentUpdate(f, m, P) : s.prototype && s.prototype.isPureReactComponent ? !ra(u, f) || !ra(h, m) : !0;
  }
  function wp(i, s, u) {
    var f = !1, h = Vr, m = s.contextType;
    return typeof m == "object" && m !== null ? m = Sn(m) : (h = qt(s) ? Ni : Lt.current, f = s.contextTypes, m = (f = f != null) ? ms(i, h) : Vr), s = new s(u, m), i.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null, s.updater = ga, i.stateNode = s, s._reactInternals = i, f && (i = i.stateNode, i.__reactInternalMemoizedUnmaskedChildContext = h, i.__reactInternalMemoizedMaskedChildContext = m), s;
  }
  function xp(i, s, u, f) {
    i = s.state, typeof s.componentWillReceiveProps == "function" && s.componentWillReceiveProps(u, f), typeof s.UNSAFE_componentWillReceiveProps == "function" && s.UNSAFE_componentWillReceiveProps(u, f), s.state !== i && ga.enqueueReplaceState(s, s.state, null);
  }
  function Zd(i, s, u, f) {
    var h = i.stateNode;
    h.props = u, h.state = i.memoizedState, h.refs = {}, Gd(i);
    var m = s.contextType;
    typeof m == "object" && m !== null ? h.context = Sn(m) : (m = qt(s) ? Ni : Lt.current, h.context = ms(i, m)), h.state = i.memoizedState, m = s.getDerivedStateFromProps, typeof m == "function" && (bd(i, s, m, u), h.state = i.memoizedState), typeof s.getDerivedStateFromProps == "function" || typeof h.getSnapshotBeforeUpdate == "function" || typeof h.UNSAFE_componentWillMount != "function" && typeof h.componentWillMount != "function" || (s = h.state, typeof h.componentWillMount == "function" && h.componentWillMount(), typeof h.UNSAFE_componentWillMount == "function" && h.UNSAFE_componentWillMount(), s !== h.state && ga.enqueueReplaceState(h, h.state, null), aa(i, u, h, f), h.state = i.memoizedState), typeof h.componentDidMount == "function" && (i.flags |= 4194308);
  }
  function Es(i, s) {
    try {
      var u = "", f = s;
      do
        u += Zy(f), f = f.return;
      while (f);
      var h = u;
    } catch (m) {
      h = `
Error generating stack: ` + m.message + `
` + m.stack;
    }
    return { value: i, source: s, stack: h, digest: null };
  }
  function Jd(i, s, u) {
    return { value: i, source: null, stack: u ?? null, digest: s ?? null };
  }
  function ef(i, s) {
    try {
      console.error(s.value);
    } catch (u) {
      setTimeout(function() {
        throw u;
      });
    }
  }
  var o5 = typeof WeakMap == "function" ? WeakMap : Map;
  function Cp(i, s, u) {
    u = vr(-1, u), u.tag = 3, u.payload = { element: null };
    var f = s.value;
    return u.callback = function() {
      Ra || (Ra = !0, wf = f), ef(i, s);
    }, u;
  }
  function kp(i, s, u) {
    u = vr(-1, u), u.tag = 3;
    var f = i.type.getDerivedStateFromError;
    if (typeof f == "function") {
      var h = s.value;
      u.payload = function() {
        return f(h);
      }, u.callback = function() {
        ef(i, s);
      };
    }
    var m = i.stateNode;
    return m !== null && typeof m.componentDidCatch == "function" && (u.callback = function() {
      ef(i, s), typeof f != "function" && (Wr === null ? Wr = /* @__PURE__ */ new Set([this]) : Wr.add(this));
      var P = s.stack;
      this.componentDidCatch(s.value, { componentStack: P !== null ? P : "" });
    }), u;
  }
  function Ep(i, s, u) {
    var f = i.pingCache;
    if (f === null) {
      f = i.pingCache = new o5();
      var h = /* @__PURE__ */ new Set();
      f.set(s, h);
    } else h = f.get(s), h === void 0 && (h = /* @__PURE__ */ new Set(), f.set(s, h));
    h.has(u) || (h.add(u), i = S5.bind(null, i, s, u), s.then(i, i));
  }
  function Pp(i) {
    do {
      var s;
      if ((s = i.tag === 13) && (s = i.memoizedState, s = s !== null ? s.dehydrated !== null : !0), s) return i;
      i = i.return;
    } while (i !== null);
    return null;
  }
  function Tp(i, s, u, f, h) {
    return i.mode & 1 ? (i.flags |= 65536, i.lanes = h, i) : (i === s ? i.flags |= 65536 : (i.flags |= 128, u.flags |= 131072, u.flags &= -52805, u.tag === 1 && (u.alternate === null ? u.tag = 17 : (s = vr(-1, 1), s.tag = 2, Hr(u, s, 1))), u.lanes |= 1), i);
  }
  var l5 = c.ReactCurrentOwner, bt = !1;
  function jt(i, s, u, f) {
    s.child = i === null ? Y1(s, null, u, f) : Ss(s, i.child, u, f);
  }
  function Np(i, s, u, f, h) {
    u = u.render;
    var m = s.ref;
    return xs(s, h), f = Kd(i, s, u, f, m, h), u = Yd(), i !== null && !bt ? (s.updateQueue = i.updateQueue, s.flags &= -2053, i.lanes &= ~h, _r(i, s, h)) : ($e && u && Nd(s), s.flags |= 1, jt(i, s, f, h), s.child);
  }
  function Rp(i, s, u, f, h) {
    if (i === null) {
      var m = u.type;
      return typeof m == "function" && !Tf(m) && m.defaultProps === void 0 && u.compare === null && u.defaultProps === void 0 ? (s.tag = 15, s.type = m, Fp(i, s, m, f, h)) : (i = Da(u.type, null, f, s, s.mode, h), i.ref = s.ref, i.return = s, s.child = i);
    }
    if (m = i.child, !(i.lanes & h)) {
      var P = m.memoizedProps;
      if (u = u.compare, u = u !== null ? u : ra, u(P, f) && i.ref === s.ref) return _r(i, s, h);
    }
    return s.flags |= 1, i = $r(m, f), i.ref = s.ref, i.return = s, s.child = i;
  }
  function Fp(i, s, u, f, h) {
    if (i !== null) {
      var m = i.memoizedProps;
      if (ra(m, f) && i.ref === s.ref) if (bt = !1, s.pendingProps = f = m, (i.lanes & h) !== 0) i.flags & 131072 && (bt = !0);
      else return s.lanes = i.lanes, _r(i, s, h);
    }
    return tf(i, s, u, f, h);
  }
  function Mp(i, s, u) {
    var f = s.pendingProps, h = f.children, m = i !== null ? i.memoizedState : null;
    if (f.mode === "hidden") if (!(s.mode & 1)) s.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, je(Ts, cn), cn |= u;
    else {
      if (!(u & 1073741824)) return i = m !== null ? m.baseLanes | u : u, s.lanes = s.childLanes = 1073741824, s.memoizedState = { baseLanes: i, cachePool: null, transitions: null }, s.updateQueue = null, je(Ts, cn), cn |= i, null;
      s.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, f = m !== null ? m.baseLanes : u, je(Ts, cn), cn |= f;
    }
    else m !== null ? (f = m.baseLanes | u, s.memoizedState = null) : f = u, je(Ts, cn), cn |= f;
    return jt(i, s, h, u), s.child;
  }
  function Lp(i, s) {
    var u = s.ref;
    (i === null && u !== null || i !== null && i.ref !== u) && (s.flags |= 512, s.flags |= 2097152);
  }
  function tf(i, s, u, f, h) {
    var m = qt(u) ? Ni : Lt.current;
    return m = ms(s, m), xs(s, h), u = Kd(i, s, u, f, m, h), f = Yd(), i !== null && !bt ? (s.updateQueue = i.updateQueue, s.flags &= -2053, i.lanes &= ~h, _r(i, s, h)) : ($e && f && Nd(s), s.flags |= 1, jt(i, s, u, h), s.child);
  }
  function Ap(i, s, u, f, h) {
    if (qt(u)) {
      var m = !0;
      $l(s);
    } else m = !1;
    if (xs(s, h), s.stateNode === null) ya(i, s), wp(s, u, f), Zd(s, u, f, h), f = !0;
    else if (i === null) {
      var P = s.stateNode, O = s.memoizedProps;
      P.props = O;
      var U = P.context, Y = u.contextType;
      typeof Y == "object" && Y !== null ? Y = Sn(Y) : (Y = qt(u) ? Ni : Lt.current, Y = ms(s, Y));
      var oe = u.getDerivedStateFromProps, me = typeof oe == "function" || typeof P.getSnapshotBeforeUpdate == "function";
      me || typeof P.UNSAFE_componentWillReceiveProps != "function" && typeof P.componentWillReceiveProps != "function" || (O !== f || U !== Y) && xp(s, P, f, Y), jr = !1;
      var ee = s.memoizedState;
      P.state = ee, aa(s, f, P, h), U = s.memoizedState, O !== f || ee !== U || Qt.current || jr ? (typeof oe == "function" && (bd(s, u, oe, f), U = s.memoizedState), (O = jr || Sp(s, u, O, f, ee, U, Y)) ? (me || typeof P.UNSAFE_componentWillMount != "function" && typeof P.componentWillMount != "function" || (typeof P.componentWillMount == "function" && P.componentWillMount(), typeof P.UNSAFE_componentWillMount == "function" && P.UNSAFE_componentWillMount()), typeof P.componentDidMount == "function" && (s.flags |= 4194308)) : (typeof P.componentDidMount == "function" && (s.flags |= 4194308), s.memoizedProps = f, s.memoizedState = U), P.props = f, P.state = U, P.context = Y, f = O) : (typeof P.componentDidMount == "function" && (s.flags |= 4194308), f = !1);
    } else {
      P = s.stateNode, Q1(i, s), O = s.memoizedProps, Y = s.type === s.elementType ? O : Un(s.type, O), P.props = Y, me = s.pendingProps, ee = P.context, U = u.contextType, typeof U == "object" && U !== null ? U = Sn(U) : (U = qt(u) ? Ni : Lt.current, U = ms(s, U));
      var Ke = u.getDerivedStateFromProps;
      (oe = typeof Ke == "function" || typeof P.getSnapshotBeforeUpdate == "function") || typeof P.UNSAFE_componentWillReceiveProps != "function" && typeof P.componentWillReceiveProps != "function" || (O !== me || ee !== U) && xp(s, P, f, U), jr = !1, ee = s.memoizedState, P.state = ee, aa(s, f, P, h);
      var Be = s.memoizedState;
      O !== me || ee !== Be || Qt.current || jr ? (typeof Ke == "function" && (bd(s, u, Ke, f), Be = s.memoizedState), (Y = jr || Sp(s, u, Y, f, ee, Be, U) || !1) ? (oe || typeof P.UNSAFE_componentWillUpdate != "function" && typeof P.componentWillUpdate != "function" || (typeof P.componentWillUpdate == "function" && P.componentWillUpdate(f, Be, U), typeof P.UNSAFE_componentWillUpdate == "function" && P.UNSAFE_componentWillUpdate(f, Be, U)), typeof P.componentDidUpdate == "function" && (s.flags |= 4), typeof P.getSnapshotBeforeUpdate == "function" && (s.flags |= 1024)) : (typeof P.componentDidUpdate != "function" || O === i.memoizedProps && ee === i.memoizedState || (s.flags |= 4), typeof P.getSnapshotBeforeUpdate != "function" || O === i.memoizedProps && ee === i.memoizedState || (s.flags |= 1024), s.memoizedProps = f, s.memoizedState = Be), P.props = f, P.state = Be, P.context = U, f = Y) : (typeof P.componentDidUpdate != "function" || O === i.memoizedProps && ee === i.memoizedState || (s.flags |= 4), typeof P.getSnapshotBeforeUpdate != "function" || O === i.memoizedProps && ee === i.memoizedState || (s.flags |= 1024), f = !1);
    }
    return nf(i, s, u, f, m, h);
  }
  function nf(i, s, u, f, h, m) {
    Lp(i, s);
    var P = (s.flags & 128) !== 0;
    if (!f && !P) return h && O1(s, u, !1), _r(i, s, m);
    f = s.stateNode, l5.current = s;
    var O = P && typeof u.getDerivedStateFromError != "function" ? null : f.render();
    return s.flags |= 1, i !== null && P ? (s.child = Ss(s, i.child, null, m), s.child = Ss(s, null, O, m)) : jt(i, s, O, m), s.memoizedState = f.state, h && O1(s, u, !0), s.child;
  }
  function Op(i) {
    var s = i.stateNode;
    s.pendingContext ? L1(i, s.pendingContext, s.pendingContext !== s.context) : s.context && L1(i, s.context, !1), Ud(i, s.containerInfo);
  }
  function Dp(i, s, u, f, h) {
    return _s(), Ld(h), s.flags |= 256, jt(i, s, u, f), s.child;
  }
  var rf = { dehydrated: null, treeContext: null, retryLane: 0 };
  function sf(i) {
    return { baseLanes: i, cachePool: null, transitions: null };
  }
  function Ip(i, s, u) {
    var f = s.pendingProps, h = Ze.current, m = !1, P = (s.flags & 128) !== 0, O;
    if ((O = P) || (O = i !== null && i.memoizedState === null ? !1 : (h & 2) !== 0), O ? (m = !0, s.flags &= -129) : (i === null || i.memoizedState !== null) && (h |= 1), je(Ze, h & 1), i === null)
      return Md(s), i = s.memoizedState, i !== null && (i = i.dehydrated, i !== null) ? (s.mode & 1 ? md(i) ? s.lanes = 8 : s.lanes = 1073741824 : s.lanes = 1, null) : (P = f.children, i = f.fallback, m ? (f = s.mode, m = s.child, P = { mode: "hidden", children: P }, !(f & 1) && m !== null ? (m.childLanes = 0, m.pendingProps = P) : m = Ia(P, f, 0, null), i = zi(i, f, u, null), m.return = s, i.return = s, m.sibling = i, s.child = m, s.child.memoizedState = sf(u), s.memoizedState = rf, i) : of(s, P));
    if (h = i.memoizedState, h !== null && (O = h.dehydrated, O !== null)) return a5(i, s, P, f, O, h, u);
    if (m) {
      m = f.fallback, P = s.mode, h = i.child, O = h.sibling;
      var U = { mode: "hidden", children: f.children };
      return !(P & 1) && s.child !== h ? (f = s.child, f.childLanes = 0, f.pendingProps = U, s.deletions = null) : (f = $r(h, U), f.subtreeFlags = h.subtreeFlags & 14680064), O !== null ? m = $r(O, m) : (m = zi(m, P, u, null), m.flags |= 2), m.return = s, f.return = s, f.sibling = m, s.child = f, f = m, m = s.child, P = i.child.memoizedState, P = P === null ? sf(u) : { baseLanes: P.baseLanes | u, cachePool: null, transitions: P.transitions }, m.memoizedState = P, m.childLanes = i.childLanes & ~u, s.memoizedState = rf, f;
    }
    return m = i.child, i = m.sibling, f = $r(m, { mode: "visible", children: f.children }), !(s.mode & 1) && (f.lanes = u), f.return = s, f.sibling = null, i !== null && (u = s.deletions, u === null ? (s.deletions = [i], s.flags |= 16) : u.push(i)), s.child = f, s.memoizedState = null, f;
  }
  function of(i, s) {
    return s = Ia({ mode: "visible", children: s }, i.mode, 0, null), s.return = i, i.child = s;
  }
  function ma(i, s, u, f) {
    return f !== null && Ld(f), Ss(s, i.child, null, u), i = of(s, s.pendingProps.children), i.flags |= 2, s.memoizedState = null, i;
  }
  function a5(i, s, u, f, h, m, P) {
    if (u)
      return s.flags & 256 ? (s.flags &= -257, f = Jd(Error(a(422))), ma(i, s, P, f)) : s.memoizedState !== null ? (s.child = i.child, s.flags |= 128, null) : (m = f.fallback, h = s.mode, f = Ia({ mode: "visible", children: f.children }, h, 0, null), m = zi(m, h, P, null), m.flags |= 2, f.return = s, m.return = s, f.sibling = m, s.child = f, s.mode & 1 && Ss(s, i.child, null, P), s.child.memoizedState = sf(P), s.memoizedState = rf, m);
    if (!(s.mode & 1)) return ma(i, s, P, null);
    if (md(h)) return f = wy(h).digest, m = Error(a(419)), f = Jd(
      m,
      f,
      void 0
    ), ma(i, s, P, f);
    if (u = (P & i.childLanes) !== 0, bt || u) {
      if (f = Ct, f !== null) {
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
        h = h & (f.suspendedLanes | P) ? 0 : h, h !== 0 && h !== m.retryLane && (m.retryLane = h, tr(i, h), Cn(
          f,
          i,
          h,
          -1
        ));
      }
      return Pf(), f = Jd(Error(a(421))), ma(i, s, P, f);
    }
    return M1(h) ? (s.flags |= 128, s.child = i.child, s = w5.bind(null, i), xy(h, s), null) : (i = m.treeContext, xe && (_n = Ey(h), un = s, $e = !0, Gn = null, xo = !1, i !== null && (yn[vn++] = mr, yn[vn++] = yr, yn[vn++] = Ri, mr = i.id, yr = i.overflow, Ri = s)), s = of(s, f.children), s.flags |= 4096, s);
  }
  function zp(i, s, u) {
    i.lanes |= s;
    var f = i.alternate;
    f !== null && (f.lanes |= s), Id(i.return, s, u);
  }
  function lf(i, s, u, f, h) {
    var m = i.memoizedState;
    m === null ? i.memoizedState = { isBackwards: s, rendering: null, renderingStartTime: 0, last: f, tail: u, tailMode: h } : (m.isBackwards = s, m.rendering = null, m.renderingStartTime = 0, m.last = f, m.tail = u, m.tailMode = h);
  }
  function Gp(i, s, u) {
    var f = s.pendingProps, h = f.revealOrder, m = f.tail;
    if (jt(i, s, f.children, u), f = Ze.current, f & 2) f = f & 1 | 2, s.flags |= 128;
    else {
      if (i !== null && i.flags & 128) e: for (i = s.child; i !== null; ) {
        if (i.tag === 13) i.memoizedState !== null && zp(i, u, s);
        else if (i.tag === 19) zp(i, u, s);
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
      f &= 1;
    }
    if (je(Ze, f), !(s.mode & 1)) s.memoizedState = null;
    else switch (h) {
      case "forwards":
        for (u = s.child, h = null; u !== null; ) i = u.alternate, i !== null && ua(i) === null && (h = u), u = u.sibling;
        u = h, u === null ? (h = s.child, s.child = null) : (h = u.sibling, u.sibling = null), lf(s, !1, h, u, m);
        break;
      case "backwards":
        for (u = null, h = s.child, s.child = null; h !== null; ) {
          if (i = h.alternate, i !== null && ua(i) === null) {
            s.child = h;
            break;
          }
          i = h.sibling, h.sibling = u, u = h, h = i;
        }
        lf(s, !0, u, null, m);
        break;
      case "together":
        lf(s, !1, null, null, void 0);
        break;
      default:
        s.memoizedState = null;
    }
    return s.child;
  }
  function ya(i, s) {
    !(s.mode & 1) && i !== null && (i.alternate = null, s.alternate = null, s.flags |= 2);
  }
  function _r(i, s, u) {
    if (i !== null && (s.dependencies = i.dependencies), Ai |= s.lanes, !(u & s.childLanes)) return null;
    if (i !== null && s.child !== i.child) throw Error(a(153));
    if (s.child !== null) {
      for (i = s.child, u = $r(i, i.pendingProps), s.child = u, u.return = s; i.sibling !== null; ) i = i.sibling, u = u.sibling = $r(i, i.pendingProps), u.return = s;
      u.sibling = null;
    }
    return s.child;
  }
  function u5(i, s, u) {
    switch (s.tag) {
      case 3:
        Op(s), _s();
        break;
      case 5:
        Z1(s);
        break;
      case 1:
        qt(s.type) && $l(s);
        break;
      case 4:
        Ud(s, s.stateNode.containerInfo);
        break;
      case 10:
        X1(s, s.type._context, s.memoizedProps.value);
        break;
      case 13:
        var f = s.memoizedState;
        if (f !== null)
          return f.dehydrated !== null ? (je(Ze, Ze.current & 1), s.flags |= 128, null) : u & s.child.childLanes ? Ip(i, s, u) : (je(Ze, Ze.current & 1), i = _r(i, s, u), i !== null ? i.sibling : null);
        je(Ze, Ze.current & 1);
        break;
      case 19:
        if (f = (u & s.childLanes) !== 0, i.flags & 128) {
          if (f) return Gp(
            i,
            s,
            u
          );
          s.flags |= 128;
        }
        var h = s.memoizedState;
        if (h !== null && (h.rendering = null, h.tail = null, h.lastEffect = null), je(Ze, Ze.current), f) break;
        return null;
      case 22:
      case 23:
        return s.lanes = 0, Mp(i, s, u);
    }
    return _r(i, s, u);
  }
  function ir(i) {
    i.flags |= 4;
  }
  function Up(i, s) {
    if (i !== null && i.child === s.child) return !0;
    if (s.flags & 16) return !1;
    for (i = s.child; i !== null; ) {
      if (i.flags & 12854 || i.subtreeFlags & 12854) return !1;
      i = i.sibling;
    }
    return !0;
  }
  var Fo, Mo, va, _a;
  if (de) Fo = function(i, s) {
    for (var u = s.child; u !== null; ) {
      if (u.tag === 5 || u.tag === 6) se(i, u.stateNode);
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
  }, Mo = function() {
  }, va = function(i, s, u, f, h) {
    if (i = i.memoizedProps, i !== f) {
      var m = s.stateNode, P = nr(wn.current);
      u = ft(m, u, i, f, h, P), (s.updateQueue = u) && ir(s);
    }
  }, _a = function(i, s, u, f) {
    u !== f && ir(s);
  };
  else if (Oe) {
    Fo = function(i, s, u, f) {
      for (var h = s.child; h !== null; ) {
        if (h.tag === 5) {
          var m = h.stateNode;
          u && f && (m = R1(m, h.type, h.memoizedProps, h)), se(i, m);
        } else if (h.tag === 6) m = h.stateNode, u && f && (m = F1(m, h.memoizedProps, h)), se(i, m);
        else if (h.tag !== 4) {
          if (h.tag === 22 && h.memoizedState !== null) m = h.child, m !== null && (m.return = h), Fo(i, h, !0, !0);
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
    var Bp = function(i, s, u, f) {
      for (var h = s.child; h !== null; ) {
        if (h.tag === 5) {
          var m = h.stateNode;
          u && f && (m = R1(m, h.type, h.memoizedProps, h)), N1(i, m);
        } else if (h.tag === 6) m = h.stateNode, u && f && (m = F1(m, h.memoizedProps, h)), N1(i, m);
        else if (h.tag !== 4) {
          if (h.tag === 22 && h.memoizedState !== null) m = h.child, m !== null && (m.return = h), Bp(i, h, !0, !0);
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
    Mo = function(i, s) {
      var u = s.stateNode;
      if (!Up(i, s)) {
        i = u.containerInfo;
        var f = Kl(i);
        Bp(f, s, !1, !1), u.pendingChildren = f, ir(s), yy(i, f);
      }
    }, va = function(i, s, u, f, h) {
      var m = i.stateNode, P = i.memoizedProps;
      if ((i = Up(i, s)) && P === f) s.stateNode = m;
      else {
        var O = s.stateNode, U = nr(wn.current), Y = null;
        P !== f && (Y = ft(O, u, P, f, h, U)), i && Y === null ? s.stateNode = m : (m = pd(m, Y, u, P, f, s, i, O), ge(m, u, f, h, U) && ir(s), s.stateNode = m, i ? ir(s) : Fo(m, s, !1, !1));
      }
    }, _a = function(i, s, u, f) {
      u !== f ? (i = nr(Cs.current), u = nr(wn.current), s.stateNode = Ue(f, i, u, s), ir(s)) : s.stateNode = i.stateNode;
    };
  } else Mo = function() {
  }, va = function() {
  }, _a = function() {
  };
  function Lo(i, s) {
    if (!$e) switch (i.tailMode) {
      case "hidden":
        s = i.tail;
        for (var u = null; s !== null; ) s.alternate !== null && (u = s), s = s.sibling;
        u === null ? i.tail = null : u.sibling = null;
        break;
      case "collapsed":
        u = i.tail;
        for (var f = null; u !== null; ) u.alternate !== null && (f = u), u = u.sibling;
        f === null ? s || i.tail === null ? i.tail = null : i.tail.sibling = null : f.sibling = null;
    }
  }
  function Ot(i) {
    var s = i.alternate !== null && i.alternate.child === i.child, u = 0, f = 0;
    if (s) for (var h = i.child; h !== null; ) u |= h.lanes | h.childLanes, f |= h.subtreeFlags & 14680064, f |= h.flags & 14680064, h.return = i, h = h.sibling;
    else for (h = i.child; h !== null; ) u |= h.lanes | h.childLanes, f |= h.subtreeFlags, f |= h.flags, h.return = i, h = h.sibling;
    return i.subtreeFlags |= f, i.childLanes = u, s;
  }
  function c5(i, s, u) {
    var f = s.pendingProps;
    switch (Rd(s), s.tag) {
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
        return qt(s.type) && Xl(), Ot(s), null;
      case 3:
        return u = s.stateNode, ks(), We(Qt), We(Lt), jd(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (i === null || i.child === null) && (na(s) ? ir(s) : i === null || i.memoizedState.isDehydrated && !(s.flags & 256) || (s.flags |= 1024, Gn !== null && (kf(Gn), Gn = null))), Mo(i, s), Ot(s), null;
      case 5:
        Bd(s), u = nr(Cs.current);
        var h = s.type;
        if (i !== null && s.stateNode != null) va(i, s, h, f, u), i.ref !== s.ref && (s.flags |= 512, s.flags |= 2097152);
        else {
          if (!f) {
            if (s.stateNode === null) throw Error(a(166));
            return Ot(s), null;
          }
          if (i = nr(wn.current), na(s)) {
            if (!xe) throw Error(a(175));
            i = Py(s.stateNode, s.type, s.memoizedProps, u, i, s, !xo), s.updateQueue = i, i !== null && ir(s);
          } else {
            var m = q(h, f, u, i, s);
            Fo(m, s, !1, !1), s.stateNode = m, ge(m, h, f, u, i) && ir(s);
          }
          s.ref !== null && (s.flags |= 512, s.flags |= 2097152);
        }
        return Ot(s), null;
      case 6:
        if (i && s.stateNode != null) _a(i, s, i.memoizedProps, f);
        else {
          if (typeof f != "string" && s.stateNode === null) throw Error(a(166));
          if (i = nr(Cs.current), u = nr(wn.current), na(s)) {
            if (!xe) throw Error(a(176));
            if (i = s.stateNode, u = s.memoizedProps, (f = Ty(i, u, s, !xo)) && (h = un, h !== null)) switch (h.tag) {
              case 3:
                Dy(h.stateNode.containerInfo, i, u, (h.mode & 1) !== 0);
                break;
              case 5:
                Iy(h.type, h.memoizedProps, h.stateNode, i, u, (h.mode & 1) !== 0);
            }
            f && ir(s);
          } else s.stateNode = Ue(f, i, u, s);
        }
        return Ot(s), null;
      case 13:
        if (We(Ze), f = s.memoizedState, i === null || i.memoizedState !== null && i.memoizedState.dehydrated !== null) {
          if ($e && _n !== null && s.mode & 1 && !(s.flags & 128)) H1(), _s(), s.flags |= 98560, h = !1;
          else if (h = na(s), f !== null && f.dehydrated !== null) {
            if (i === null) {
              if (!h) throw Error(a(318));
              if (!xe) throw Error(a(344));
              if (h = s.memoizedState, h = h !== null ? h.dehydrated : null, !h) throw Error(a(317));
              Ny(h, s);
            } else _s(), !(s.flags & 128) && (s.memoizedState = null), s.flags |= 4;
            Ot(s), h = !1;
          } else Gn !== null && (kf(Gn), Gn = null), h = !0;
          if (!h) return s.flags & 65536 ? s : null;
        }
        return s.flags & 128 ? (s.lanes = u, s) : (u = f !== null, u !== (i !== null && i.memoizedState !== null) && u && (s.child.flags |= 8192, s.mode & 1 && (i === null || Ze.current & 1 ? gt === 0 && (gt = 3) : Pf())), s.updateQueue !== null && (s.flags |= 4), Ot(s), null);
      case 4:
        return ks(), Mo(i, s), i === null && De(s.stateNode.containerInfo), Ot(s), null;
      case 10:
        return Dd(s.type._context), Ot(s), null;
      case 17:
        return qt(s.type) && Xl(), Ot(s), null;
      case 19:
        if (We(Ze), h = s.memoizedState, h === null) return Ot(s), null;
        if (f = (s.flags & 128) !== 0, m = h.rendering, m === null) if (f) Lo(h, !1);
        else {
          if (gt !== 0 || i !== null && i.flags & 128) for (i = s.child; i !== null; ) {
            if (m = ua(i), m !== null) {
              for (s.flags |= 128, Lo(h, !1), i = m.updateQueue, i !== null && (s.updateQueue = i, s.flags |= 4), s.subtreeFlags = 0, i = u, u = s.child; u !== null; ) f = u, h = i, f.flags &= 14680066, m = f.alternate, m === null ? (f.childLanes = 0, f.lanes = h, f.child = null, f.subtreeFlags = 0, f.memoizedProps = null, f.memoizedState = null, f.updateQueue = null, f.dependencies = null, f.stateNode = null) : (f.childLanes = m.childLanes, f.lanes = m.lanes, f.child = m.child, f.subtreeFlags = 0, f.deletions = null, f.memoizedProps = m.memoizedProps, f.memoizedState = m.memoizedState, f.updateQueue = m.updateQueue, f.type = m.type, h = m.dependencies, f.dependencies = h === null ? null : { lanes: h.lanes, firstContext: h.firstContext }), u = u.sibling;
              return je(Ze, Ze.current & 1 | 2), s.child;
            }
            i = i.sibling;
          }
          h.tail !== null && wt() > Sf && (s.flags |= 128, f = !0, Lo(h, !1), s.lanes = 4194304);
        }
        else {
          if (!f) if (i = ua(m), i !== null) {
            if (s.flags |= 128, f = !0, i = i.updateQueue, i !== null && (s.updateQueue = i, s.flags |= 4), Lo(h, !0), h.tail === null && h.tailMode === "hidden" && !m.alternate && !$e) return Ot(s), null;
          } else 2 * wt() - h.renderingStartTime > Sf && u !== 1073741824 && (s.flags |= 128, f = !0, Lo(h, !1), s.lanes = 4194304);
          h.isBackwards ? (m.sibling = s.child, s.child = m) : (i = h.last, i !== null ? i.sibling = m : s.child = m, h.last = m);
        }
        return h.tail !== null ? (s = h.tail, h.rendering = s, h.tail = s.sibling, h.renderingStartTime = wt(), s.sibling = null, i = Ze.current, je(Ze, f ? i & 1 | 2 : i & 1), s) : (Ot(s), null);
      case 22:
      case 23:
        return Ef(), u = s.memoizedState !== null, i !== null && i.memoizedState !== null !== u && (s.flags |= 8192), u && s.mode & 1 ? cn & 1073741824 && (Ot(s), de && s.subtreeFlags & 6 && (s.flags |= 8192)) : Ot(s), null;
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
  function d5(i, s) {
    switch (Rd(s), s.tag) {
      case 1:
        return qt(s.type) && Xl(), i = s.flags, i & 65536 ? (s.flags = i & -65537 | 128, s) : null;
      case 3:
        return ks(), We(Qt), We(Lt), jd(), i = s.flags, i & 65536 && !(i & 128) ? (s.flags = i & -65537 | 128, s) : null;
      case 5:
        return Bd(s), null;
      case 13:
        if (We(Ze), i = s.memoizedState, i !== null && i.dehydrated !== null) {
          if (s.alternate === null) throw Error(a(340));
          _s();
        }
        return i = s.flags, i & 65536 ? (s.flags = i & -65537 | 128, s) : null;
      case 19:
        return We(Ze), null;
      case 4:
        return ks(), null;
      case 10:
        return Dd(s.type._context), null;
      case 22:
      case 23:
        return Ef(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Sa = !1, Dt = !1, f5 = typeof WeakSet == "function" ? WeakSet : Set, re = null;
  function Ps(i, s) {
    var u = i.ref;
    if (u !== null) if (typeof u == "function") try {
      u(null);
    } catch (f) {
      Qe(i, s, f);
    }
    else u.current = null;
  }
  function af(i, s, u) {
    try {
      u();
    } catch (f) {
      Qe(i, s, f);
    }
  }
  var Vp = !1;
  function h5(i, s) {
    for (Q(i.containerInfo), re = s; re !== null; ) if (i = re, s = i.child, (i.subtreeFlags & 1028) !== 0 && s !== null) s.return = i, re = s;
    else for (; re !== null; ) {
      i = re;
      try {
        var u = i.alternate;
        if (i.flags & 1024) switch (i.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (u !== null) {
              var f = u.memoizedProps, h = u.memoizedState, m = i.stateNode, P = m.getSnapshotBeforeUpdate(i.elementType === i.type ? f : Un(i.type, f), h);
              m.__reactInternalSnapshotBeforeUpdate = P;
            }
            break;
          case 3:
            de && hd(i.stateNode.containerInfo);
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
        Qe(i, i.return, O);
      }
      if (s = i.sibling, s !== null) {
        s.return = i.return, re = s;
        break;
      }
      re = i.return;
    }
    return u = Vp, Vp = !1, u;
  }
  function Ao(i, s, u) {
    var f = s.updateQueue;
    if (f = f !== null ? f.lastEffect : null, f !== null) {
      var h = f = f.next;
      do {
        if ((h.tag & i) === i) {
          var m = h.destroy;
          h.destroy = void 0, m !== void 0 && af(s, u, m);
        }
        h = h.next;
      } while (h !== f);
    }
  }
  function wa(i, s) {
    if (s = s.updateQueue, s = s !== null ? s.lastEffect : null, s !== null) {
      var u = s = s.next;
      do {
        if ((u.tag & i) === i) {
          var f = u.create;
          u.destroy = f();
        }
        u = u.next;
      } while (u !== s);
    }
  }
  function uf(i) {
    var s = i.ref;
    if (s !== null) {
      var u = i.stateNode;
      switch (i.tag) {
        case 5:
          i = he(u);
          break;
        default:
          i = u;
      }
      typeof s == "function" ? s(i) : s.current = i;
    }
  }
  function jp(i) {
    var s = i.alternate;
    s !== null && (i.alternate = null, jp(s)), i.child = null, i.deletions = null, i.sibling = null, i.tag === 5 && (s = i.stateNode, s !== null && an(s)), i.stateNode = null, i.return = null, i.dependencies = null, i.memoizedProps = null, i.memoizedState = null, i.pendingProps = null, i.stateNode = null, i.updateQueue = null;
  }
  function Hp(i) {
    return i.tag === 5 || i.tag === 3 || i.tag === 4;
  }
  function Wp(i) {
    e: for (; ; ) {
      for (; i.sibling === null; ) {
        if (i.return === null || Hp(i.return)) return null;
        i = i.return;
      }
      for (i.sibling.return = i.return, i = i.sibling; i.tag !== 5 && i.tag !== 6 && i.tag !== 18; ) {
        if (i.flags & 2 || i.child === null || i.tag === 4) continue e;
        i.child.return = i, i = i.child;
      }
      if (!(i.flags & 2)) return i.stateNode;
    }
  }
  function cf(i, s, u) {
    var f = i.tag;
    if (f === 5 || f === 6) i = i.stateNode, s ? An(u, i, s) : Z(u, i);
    else if (f !== 4 && (i = i.child, i !== null)) for (cf(i, s, u), i = i.sibling; i !== null; ) cf(i, s, u), i = i.sibling;
  }
  function df(i, s, u) {
    var f = i.tag;
    if (f === 5 || f === 6) i = i.stateNode, s ? $t(u, i, s) : b(u, i);
    else if (f !== 4 && (i = i.child, i !== null)) for (df(i, s, u), i = i.sibling; i !== null; ) df(i, s, u), i = i.sibling;
  }
  var Tt = null, Bn = !1;
  function sr(i, s, u) {
    for (u = u.child; u !== null; ) ff(i, s, u), u = u.sibling;
  }
  function ff(i, s, u) {
    if (Jn && typeof Jn.onCommitFiberUnmount == "function") try {
      Jn.onCommitFiberUnmount(Zl, u);
    } catch {
    }
    switch (u.tag) {
      case 5:
        Dt || Ps(u, s);
      case 6:
        if (de) {
          var f = Tt, h = Bn;
          Tt = null, sr(i, s, u), Tt = f, Bn = h, Tt !== null && (Bn ? Ur(Tt, u.stateNode) : On(Tt, u.stateNode));
        } else sr(i, s, u);
        break;
      case 18:
        de && Tt !== null && (Bn ? Ay(Tt, u.stateNode) : Ly(Tt, u.stateNode));
        break;
      case 4:
        de ? (f = Tt, h = Bn, Tt = u.stateNode.containerInfo, Bn = !0, sr(i, s, u), Tt = f, Bn = h) : (Oe && (f = u.stateNode.containerInfo, h = Kl(f), gd(f, h)), sr(i, s, u));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Dt && (f = u.updateQueue, f !== null && (f = f.lastEffect, f !== null))) {
          h = f = f.next;
          do {
            var m = h, P = m.destroy;
            m = m.tag, P !== void 0 && (m & 2 || m & 4) && af(u, s, P), h = h.next;
          } while (h !== f);
        }
        sr(i, s, u);
        break;
      case 1:
        if (!Dt && (Ps(u, s), f = u.stateNode, typeof f.componentWillUnmount == "function")) try {
          f.props = u.memoizedProps, f.state = u.memoizedState, f.componentWillUnmount();
        } catch (O) {
          Qe(u, s, O);
        }
        sr(i, s, u);
        break;
      case 21:
        sr(i, s, u);
        break;
      case 22:
        u.mode & 1 ? (Dt = (f = Dt) || u.memoizedState !== null, sr(i, s, u), Dt = f) : sr(i, s, u);
        break;
      default:
        sr(
          i,
          s,
          u
        );
    }
  }
  function Kp(i) {
    var s = i.updateQueue;
    if (s !== null) {
      i.updateQueue = null;
      var u = i.stateNode;
      u === null && (u = i.stateNode = new f5()), s.forEach(function(f) {
        var h = x5.bind(null, i, f);
        u.has(f) || (u.add(f), f.then(h, h));
      });
    }
  }
  function Vn(i, s) {
    var u = s.deletions;
    if (u !== null) for (var f = 0; f < u.length; f++) {
      var h = u[f];
      try {
        var m = i, P = s;
        if (de) {
          var O = P;
          e: for (; O !== null; ) {
            switch (O.tag) {
              case 5:
                Tt = O.stateNode, Bn = !1;
                break e;
              case 3:
                Tt = O.stateNode.containerInfo, Bn = !0;
                break e;
              case 4:
                Tt = O.stateNode.containerInfo, Bn = !0;
                break e;
            }
            O = O.return;
          }
          if (Tt === null) throw Error(a(160));
          ff(m, P, h), Tt = null, Bn = !1;
        } else ff(m, P, h);
        var U = h.alternate;
        U !== null && (U.return = null), h.return = null;
      } catch (Y) {
        Qe(h, s, Y);
      }
    }
    if (s.subtreeFlags & 12854) for (s = s.child; s !== null; ) Yp(s, i), s = s.sibling;
  }
  function Yp(i, s) {
    var u = i.alternate, f = i.flags;
    switch (i.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (Vn(s, i), or(i), f & 4) {
          try {
            Ao(3, i, i.return), wa(3, i);
          } catch (ee) {
            Qe(i, i.return, ee);
          }
          try {
            Ao(5, i, i.return);
          } catch (ee) {
            Qe(i, i.return, ee);
          }
        }
        break;
      case 1:
        Vn(s, i), or(i), f & 512 && u !== null && Ps(u, u.return);
        break;
      case 5:
        if (Vn(s, i), or(i), f & 512 && u !== null && Ps(u, u.return), de) {
          if (i.flags & 32) {
            var h = i.stateNode;
            try {
              Dn(h);
            } catch (ee) {
              Qe(i, i.return, ee);
            }
          }
          if (f & 4 && (h = i.stateNode, h != null)) {
            var m = i.memoizedProps;
            if (u = u !== null ? u.memoizedProps : m, f = i.type, s = i.updateQueue, i.updateQueue = null, s !== null) try {
              ze(h, s, f, u, m, i);
            } catch (ee) {
              Qe(i, i.return, ee);
            }
          }
        }
        break;
      case 6:
        if (Vn(s, i), or(i), f & 4 && de) {
          if (i.stateNode === null) throw Error(a(162));
          h = i.stateNode, m = i.memoizedProps, u = u !== null ? u.memoizedProps : m;
          try {
            ue(h, u, m);
          } catch (ee) {
            Qe(i, i.return, ee);
          }
        }
        break;
      case 3:
        if (Vn(s, i), or(i), f & 4) {
          if (de && xe && u !== null && u.memoizedState.isDehydrated) try {
            Fy(s.containerInfo);
          } catch (ee) {
            Qe(i, i.return, ee);
          }
          if (Oe) {
            h = s.containerInfo, m = s.pendingChildren;
            try {
              gd(h, m);
            } catch (ee) {
              Qe(i, i.return, ee);
            }
          }
        }
        break;
      case 4:
        if (Vn(
          s,
          i
        ), or(i), f & 4 && Oe) {
          m = i.stateNode, h = m.containerInfo, m = m.pendingChildren;
          try {
            gd(h, m);
          } catch (ee) {
            Qe(i, i.return, ee);
          }
        }
        break;
      case 13:
        Vn(s, i), or(i), h = i.child, h.flags & 8192 && (m = h.memoizedState !== null, h.stateNode.isHidden = m, !m || h.alternate !== null && h.alternate.memoizedState !== null || (_f = wt())), f & 4 && Kp(i);
        break;
      case 22:
        var P = u !== null && u.memoizedState !== null;
        if (i.mode & 1 ? (Dt = (u = Dt) || P, Vn(s, i), Dt = u) : Vn(s, i), or(i), f & 8192) {
          if (u = i.memoizedState !== null, (i.stateNode.isHidden = u) && !P && i.mode & 1) for (re = i, f = i.child; f !== null; ) {
            for (s = re = f; re !== null; ) {
              P = re;
              var O = P.child;
              switch (P.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ao(4, P, P.return);
                  break;
                case 1:
                  Ps(P, P.return);
                  var U = P.stateNode;
                  if (typeof U.componentWillUnmount == "function") {
                    var Y = P, oe = P.return;
                    try {
                      var me = Y;
                      U.props = me.memoizedProps, U.state = me.memoizedState, U.componentWillUnmount();
                    } catch (ee) {
                      Qe(Y, oe, ee);
                    }
                  }
                  break;
                case 5:
                  Ps(P, P.return);
                  break;
                case 22:
                  if (P.memoizedState !== null) {
                    Qp(s);
                    continue;
                  }
              }
              O !== null ? (O.return = P, re = O) : Qp(s);
            }
            f = f.sibling;
          }
          if (de) {
            e: if (f = null, de) for (s = i; ; ) {
              if (s.tag === 5) {
                if (f === null) {
                  f = s;
                  try {
                    h = s.stateNode, u ? fs(h) : ps(s.stateNode, s.memoizedProps);
                  } catch (ee) {
                    Qe(i, i.return, ee);
                  }
                }
              } else if (s.tag === 6) {
                if (f === null) try {
                  m = s.stateNode, u ? hs(m) : fd(m, s.memoizedProps);
                } catch (ee) {
                  Qe(i, i.return, ee);
                }
              } else if ((s.tag !== 22 && s.tag !== 23 || s.memoizedState === null || s === i) && s.child !== null) {
                s.child.return = s, s = s.child;
                continue;
              }
              if (s === i) break e;
              for (; s.sibling === null; ) {
                if (s.return === null || s.return === i) break e;
                f === s && (f = null), s = s.return;
              }
              f === s && (f = null), s.sibling.return = s.return, s = s.sibling;
            }
          }
        }
        break;
      case 19:
        Vn(s, i), or(i), f & 4 && Kp(i);
        break;
      case 21:
        break;
      default:
        Vn(s, i), or(i);
    }
  }
  function or(i) {
    var s = i.flags;
    if (s & 2) {
      try {
        if (de) {
          e: {
            for (var u = i.return; u !== null; ) {
              if (Hp(u)) {
                var f = u;
                break e;
              }
              u = u.return;
            }
            throw Error(a(160));
          }
          switch (f.tag) {
            case 5:
              var h = f.stateNode;
              f.flags & 32 && (Dn(h), f.flags &= -33);
              var m = Wp(i);
              df(i, m, h);
              break;
            case 3:
            case 4:
              var P = f.stateNode.containerInfo, O = Wp(i);
              cf(i, O, P);
              break;
            default:
              throw Error(a(161));
          }
        }
      } catch (U) {
        Qe(i, i.return, U);
      }
      i.flags &= -3;
    }
    s & 4096 && (i.flags &= -4097);
  }
  function p5(i, s, u) {
    re = i, Xp(i);
  }
  function Xp(i, s, u) {
    for (var f = (i.mode & 1) !== 0; re !== null; ) {
      var h = re, m = h.child;
      if (h.tag === 22 && f) {
        var P = h.memoizedState !== null || Sa;
        if (!P) {
          var O = h.alternate, U = O !== null && O.memoizedState !== null || Dt;
          O = Sa;
          var Y = Dt;
          if (Sa = P, (Dt = U) && !Y) for (re = h; re !== null; ) P = re, U = P.child, P.tag === 22 && P.memoizedState !== null ? qp(h) : U !== null ? (U.return = P, re = U) : qp(h);
          for (; m !== null; ) re = m, Xp(m), m = m.sibling;
          re = h, Sa = O, Dt = Y;
        }
        $p(i);
      } else h.subtreeFlags & 8772 && m !== null ? (m.return = h, re = m) : $p(i);
    }
  }
  function $p(i) {
    for (; re !== null; ) {
      var s = re;
      if (s.flags & 8772) {
        var u = s.alternate;
        try {
          if (s.flags & 8772) switch (s.tag) {
            case 0:
            case 11:
            case 15:
              Dt || wa(5, s);
              break;
            case 1:
              var f = s.stateNode;
              if (s.flags & 4 && !Dt) if (u === null) f.componentDidMount();
              else {
                var h = s.elementType === s.type ? u.memoizedProps : Un(s.type, u.memoizedProps);
                f.componentDidUpdate(h, u.memoizedState, f.__reactInternalSnapshotBeforeUpdate);
              }
              var m = s.updateQueue;
              m !== null && b1(s, m, f);
              break;
            case 3:
              var P = s.updateQueue;
              if (P !== null) {
                if (u = null, s.child !== null) switch (s.child.tag) {
                  case 5:
                    u = he(s.child.stateNode);
                    break;
                  case 1:
                    u = s.child.stateNode;
                }
                b1(s, P, u);
              }
              break;
            case 5:
              var O = s.stateNode;
              u === null && s.flags & 4 && ne(O, s.type, s.memoizedProps, s);
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (xe && s.memoizedState === null) {
                var U = s.alternate;
                if (U !== null) {
                  var Y = U.memoizedState;
                  if (Y !== null) {
                    var oe = Y.dehydrated;
                    oe !== null && My(oe);
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
          Dt || s.flags & 512 && uf(s);
        } catch (me) {
          Qe(s, s.return, me);
        }
      }
      if (s === i) {
        re = null;
        break;
      }
      if (u = s.sibling, u !== null) {
        u.return = s.return, re = u;
        break;
      }
      re = s.return;
    }
  }
  function Qp(i) {
    for (; re !== null; ) {
      var s = re;
      if (s === i) {
        re = null;
        break;
      }
      var u = s.sibling;
      if (u !== null) {
        u.return = s.return, re = u;
        break;
      }
      re = s.return;
    }
  }
  function qp(i) {
    for (; re !== null; ) {
      var s = re;
      try {
        switch (s.tag) {
          case 0:
          case 11:
          case 15:
            var u = s.return;
            try {
              wa(4, s);
            } catch (U) {
              Qe(s, u, U);
            }
            break;
          case 1:
            var f = s.stateNode;
            if (typeof f.componentDidMount == "function") {
              var h = s.return;
              try {
                f.componentDidMount();
              } catch (U) {
                Qe(s, h, U);
              }
            }
            var m = s.return;
            try {
              uf(s);
            } catch (U) {
              Qe(s, m, U);
            }
            break;
          case 5:
            var P = s.return;
            try {
              uf(s);
            } catch (U) {
              Qe(s, P, U);
            }
        }
      } catch (U) {
        Qe(s, s.return, U);
      }
      if (s === i) {
        re = null;
        break;
      }
      var O = s.sibling;
      if (O !== null) {
        O.return = s.return, re = O;
        break;
      }
      re = s.return;
    }
  }
  var xa = 0, Ca = 1, ka = 2, Ea = 3, Pa = 4;
  if (typeof Symbol == "function" && Symbol.for) {
    var Oo = Symbol.for;
    xa = Oo("selector.component"), Ca = Oo("selector.has_pseudo_class"), ka = Oo("selector.role"), Ea = Oo("selector.test_id"), Pa = Oo("selector.text");
  }
  function hf(i) {
    var s = ln(i);
    if (s != null) {
      if (typeof s.memoizedProps["data-testname"] != "string") throw Error(a(364));
      return s;
    }
    if (i = ld(i), i === null) throw Error(a(362));
    return i.stateNode.current;
  }
  function pf(i, s) {
    switch (s.$$typeof) {
      case xa:
        if (i.type === s.value) return !0;
        break;
      case Ca:
        e: {
          s = s.value, i = [i, 0];
          for (var u = 0; u < i.length; ) {
            var f = i[u++], h = i[u++], m = s[h];
            if (f.tag !== 5 || !Ti(f)) {
              for (; m != null && pf(f, m); ) h++, m = s[h];
              if (h === s.length) {
                s = !0;
                break e;
              } else for (f = f.child; f !== null; ) i.push(f, h), f = f.sibling;
            }
          }
          s = !1;
        }
        return s;
      case ka:
        if (i.tag === 5 && cd(i.stateNode, s.value)) return !0;
        break;
      case Pa:
        if ((i.tag === 5 || i.tag === 6) && (i = ud(i), i !== null && 0 <= i.indexOf(s.value))) return !0;
        break;
      case Ea:
        if (i.tag === 5 && (i = i.memoizedProps["data-testname"], typeof i == "string" && i.toLowerCase() === s.value.toLowerCase())) return !0;
        break;
      default:
        throw Error(a(365));
    }
    return !1;
  }
  function gf(i) {
    switch (i.$$typeof) {
      case xa:
        return "<" + (M(i.value) || "Unknown") + ">";
      case Ca:
        return ":has(" + (gf(i) || "") + ")";
      case ka:
        return '[role="' + i.value + '"]';
      case Pa:
        return '"' + i.value + '"';
      case Ea:
        return '[data-testname="' + i.value + '"]';
      default:
        throw Error(a(365));
    }
  }
  function bp(i, s) {
    var u = [];
    i = [i, 0];
    for (var f = 0; f < i.length; ) {
      var h = i[f++], m = i[f++], P = s[m];
      if (h.tag !== 5 || !Ti(h)) {
        for (; P != null && pf(h, P); ) m++, P = s[m];
        if (m === s.length) u.push(h);
        else for (h = h.child; h !== null; ) i.push(h, m), h = h.sibling;
      }
    }
    return u;
  }
  function mf(i, s) {
    if (!Pi) throw Error(a(363));
    i = hf(i), i = bp(i, s), s = [], i = Array.from(i);
    for (var u = 0; u < i.length; ) {
      var f = i[u++];
      if (f.tag === 5) Ti(f) || s.push(f.stateNode);
      else for (f = f.child; f !== null; ) i.push(f), f = f.sibling;
    }
    return s;
  }
  var g5 = Math.ceil, Ta = c.ReactCurrentDispatcher, yf = c.ReactCurrentOwner, lt = c.ReactCurrentBatchConfig, Ce = 0, Ct = null, ct = null, Nt = 0, cn = 0, Ts = Br(0), gt = 0, Do = null, Ai = 0, Na = 0, vf = 0, Io = null, Zt = null, _f = 0, Sf = 1 / 0, Sr = null;
  function Ns() {
    Sf = wt() + 500;
  }
  var Ra = !1, wf = null, Wr = null, Fa = !1, Kr = null, Ma = 0, zo = 0, xf = null, La = -1, Aa = 0;
  function It() {
    return Ce & 6 ? wt() : La !== -1 ? La : La = wt();
  }
  function Yr(i) {
    return i.mode & 1 ? Ce & 2 && Nt !== 0 ? Nt & -Nt : by.transition !== null ? (Aa === 0 && (Aa = D1()), Aa) : (i = Fe, i !== 0 ? i : Zn()) : 1;
  }
  function Cn(i, s, u, f) {
    if (50 < zo) throw zo = 0, xf = null, Error(a(185));
    wo(i, u, f), (!(Ce & 2) || i !== Ct) && (i === Ct && (!(Ce & 2) && (Na |= u), gt === 4 && Xr(i, Nt)), Jt(i, f), u === 1 && Ce === 0 && !(s.mode & 1) && (Ns(), Jl && er()));
  }
  function Jt(i, s) {
    var u = i.callbackNode;
    jy(i, s);
    var f = bl(i, i === Ct ? Nt : 0);
    if (f === 0) u !== null && z1(u), i.callbackNode = null, i.callbackPriority = 0;
    else if (s = f & -f, i.callbackPriority !== s) {
      if (u != null && z1(u), s === 1) i.tag === 0 ? qy(Jp.bind(null, i)) : G1(Jp.bind(null, i)), Ln ? Hl(function() {
        !(Ce & 6) && er();
      }) : kd(Ed, er), u = null;
      else {
        switch (I1(f)) {
          case 1:
            u = Ed;
            break;
          case 4:
            u = Yy;
            break;
          case 16:
            u = Pd;
            break;
          case 536870912:
            u = Xy;
            break;
          default:
            u = Pd;
        }
        u = ag(u, Zp.bind(null, i));
      }
      i.callbackPriority = s, i.callbackNode = u;
    }
  }
  function Zp(i, s) {
    if (La = -1, Aa = 0, Ce & 6) throw Error(a(327));
    var u = i.callbackNode;
    if (Ii() && i.callbackNode !== u) return null;
    var f = bl(i, i === Ct ? Nt : 0);
    if (f === 0) return null;
    if (f & 30 || f & i.expiredLanes || s) s = Oa(i, f);
    else {
      s = f;
      var h = Ce;
      Ce |= 2;
      var m = ng();
      (Ct !== i || Nt !== s) && (Sr = null, Ns(), Oi(i, s));
      do
        try {
          v5();
          break;
        } catch (O) {
          tg(i, O);
        }
      while (!0);
      Od(), Ta.current = m, Ce = h, ct !== null ? s = 0 : (Ct = null, Nt = 0, s = gt);
    }
    if (s !== 0) {
      if (s === 2 && (h = wd(i), h !== 0 && (f = h, s = Cf(i, h))), s === 1) throw u = Do, Oi(i, 0), Xr(i, f), Jt(i, wt()), u;
      if (s === 6) Xr(i, f);
      else {
        if (h = i.current.alternate, !(f & 30) && !m5(h) && (s = Oa(i, f), s === 2 && (m = wd(i), m !== 0 && (f = m, s = Cf(i, m))), s === 1)) throw u = Do, Oi(i, 0), Xr(i, f), Jt(i, wt()), u;
        switch (i.finishedWork = h, i.finishedLanes = f, s) {
          case 0:
          case 1:
            throw Error(a(345));
          case 2:
            Di(i, Zt, Sr);
            break;
          case 3:
            if (Xr(i, f), (f & 130023424) === f && (s = _f + 500 - wt(), 10 < s)) {
              if (bl(i, 0) !== 0) break;
              if (h = i.suspendedLanes, (h & f) !== f) {
                It(), i.pingedLanes |= i.suspendedLanes & h;
                break;
              }
              i.timeoutHandle = A(Di.bind(null, i, Zt, Sr), s);
              break;
            }
            Di(i, Zt, Sr);
            break;
          case 4:
            if (Xr(i, f), (f & 4194240) === f) break;
            for (s = i.eventTimes, h = -1; 0 < f; ) {
              var P = 31 - In(f);
              m = 1 << P, P = s[P], P > h && (h = P), f &= ~m;
            }
            if (f = h, f = wt() - f, f = (120 > f ? 120 : 480 > f ? 480 : 1080 > f ? 1080 : 1920 > f ? 1920 : 3e3 > f ? 3e3 : 4320 > f ? 4320 : 1960 * g5(f / 1960)) - f, 10 < f) {
              i.timeoutHandle = A(Di.bind(null, i, Zt, Sr), f);
              break;
            }
            Di(i, Zt, Sr);
            break;
          case 5:
            Di(i, Zt, Sr);
            break;
          default:
            throw Error(a(329));
        }
      }
    }
    return Jt(i, wt()), i.callbackNode === u ? Zp.bind(null, i) : null;
  }
  function Cf(i, s) {
    var u = Io;
    return i.current.memoizedState.isDehydrated && (Oi(i, s).flags |= 256), i = Oa(i, s), i !== 2 && (s = Zt, Zt = u, s !== null && kf(s)), i;
  }
  function kf(i) {
    Zt === null ? Zt = i : Zt.push.apply(Zt, i);
  }
  function m5(i) {
    for (var s = i; ; ) {
      if (s.flags & 16384) {
        var u = s.updateQueue;
        if (u !== null && (u = u.stores, u !== null)) for (var f = 0; f < u.length; f++) {
          var h = u[f], m = h.getSnapshot;
          h = h.value;
          try {
            if (!zn(m(), h)) return !1;
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
  function Xr(i, s) {
    for (s &= ~vf, s &= ~Na, i.suspendedLanes |= s, i.pingedLanes &= ~s, i = i.expirationTimes; 0 < s; ) {
      var u = 31 - In(s), f = 1 << u;
      i[u] = -1, s &= ~f;
    }
  }
  function Jp(i) {
    if (Ce & 6) throw Error(a(327));
    Ii();
    var s = bl(i, 0);
    if (!(s & 1)) return Jt(i, wt()), null;
    var u = Oa(i, s);
    if (i.tag !== 0 && u === 2) {
      var f = wd(i);
      f !== 0 && (s = f, u = Cf(i, f));
    }
    if (u === 1) throw u = Do, Oi(i, 0), Xr(i, s), Jt(i, wt()), u;
    if (u === 6) throw Error(a(345));
    return i.finishedWork = i.current.alternate, i.finishedLanes = s, Di(i, Zt, Sr), Jt(i, wt()), null;
  }
  function eg(i) {
    Kr !== null && Kr.tag === 0 && !(Ce & 6) && Ii();
    var s = Ce;
    Ce |= 1;
    var u = lt.transition, f = Fe;
    try {
      if (lt.transition = null, Fe = 1, i) return i();
    } finally {
      Fe = f, lt.transition = u, Ce = s, !(Ce & 6) && er();
    }
  }
  function Ef() {
    cn = Ts.current, We(Ts);
  }
  function Oi(i, s) {
    i.finishedWork = null, i.finishedLanes = 0;
    var u = i.timeoutHandle;
    if (u !== ae && (i.timeoutHandle = ae, W(u)), ct !== null) for (u = ct.return; u !== null; ) {
      var f = u;
      switch (Rd(f), f.tag) {
        case 1:
          f = f.type.childContextTypes, f != null && Xl();
          break;
        case 3:
          ks(), We(Qt), We(Lt), jd();
          break;
        case 5:
          Bd(f);
          break;
        case 4:
          ks();
          break;
        case 13:
          We(Ze);
          break;
        case 19:
          We(Ze);
          break;
        case 10:
          Dd(f.type._context);
          break;
        case 22:
        case 23:
          Ef();
      }
      u = u.return;
    }
    if (Ct = i, ct = i = $r(i.current, null), Nt = cn = s, gt = 0, Do = null, vf = Na = Ai = 0, Zt = Io = null, Mi !== null) {
      for (s = 0; s < Mi.length; s++) if (u = Mi[s], f = u.interleaved, f !== null) {
        u.interleaved = null;
        var h = f.next, m = u.pending;
        if (m !== null) {
          var P = m.next;
          m.next = h, f.next = P;
        }
        u.pending = f;
      }
      Mi = null;
    }
    return i;
  }
  function tg(i, s) {
    do {
      var u = ct;
      try {
        if (Od(), ca.current = pa, da) {
          for (var f = Je.memoizedState; f !== null; ) {
            var h = f.queue;
            h !== null && (h.pending = null), f = f.next;
          }
          da = !1;
        }
        if (Li = 0, xt = pt = Je = null, Po = !1, To = 0, yf.current = null, u === null || u.return === null) {
          gt = 1, Do = s, ct = null;
          break;
        }
        e: {
          var m = i, P = u.return, O = u, U = s;
          if (s = Nt, O.flags |= 32768, U !== null && typeof U == "object" && typeof U.then == "function") {
            var Y = U, oe = O, me = oe.tag;
            if (!(oe.mode & 1) && (me === 0 || me === 11 || me === 15)) {
              var ee = oe.alternate;
              ee ? (oe.updateQueue = ee.updateQueue, oe.memoizedState = ee.memoizedState, oe.lanes = ee.lanes) : (oe.updateQueue = null, oe.memoizedState = null);
            }
            var Ke = Pp(P);
            if (Ke !== null) {
              Ke.flags &= -257, Tp(Ke, P, O, m, s), Ke.mode & 1 && Ep(m, Y, s), s = Ke, U = Y;
              var Be = s.updateQueue;
              if (Be === null) {
                var en = /* @__PURE__ */ new Set();
                en.add(U), s.updateQueue = en;
              } else Be.add(U);
              break e;
            } else {
              if (!(s & 1)) {
                Ep(m, Y, s), Pf();
                break e;
              }
              U = Error(a(426));
            }
          } else if ($e && O.mode & 1) {
            var wr = Pp(P);
            if (wr !== null) {
              !(wr.flags & 65536) && (wr.flags |= 256), Tp(wr, P, O, m, s), Ld(Es(U, O));
              break e;
            }
          }
          m = U = Es(U, O), gt !== 4 && (gt = 2), Io === null ? Io = [m] : Io.push(m), m = P;
          do {
            switch (m.tag) {
              case 3:
                m.flags |= 65536, s &= -s, m.lanes |= s;
                var z = Cp(m, U, s);
                q1(m, z);
                break e;
              case 1:
                O = U;
                var D = m.type, V = m.stateNode;
                if (!(m.flags & 128) && (typeof D.getDerivedStateFromError == "function" || V !== null && typeof V.componentDidCatch == "function" && (Wr === null || !Wr.has(V)))) {
                  m.flags |= 65536, s &= -s, m.lanes |= s;
                  var te = kp(m, O, s);
                  q1(m, te);
                  break e;
                }
            }
            m = m.return;
          } while (m !== null);
        }
        ig(u);
      } catch (ce) {
        s = ce, ct === u && u !== null && (ct = u = u.return);
        continue;
      }
      break;
    } while (!0);
  }
  function ng() {
    var i = Ta.current;
    return Ta.current = pa, i === null ? pa : i;
  }
  function Pf() {
    (gt === 0 || gt === 3 || gt === 2) && (gt = 4), Ct === null || !(Ai & 268435455) && !(Na & 268435455) || Xr(Ct, Nt);
  }
  function Oa(i, s) {
    var u = Ce;
    Ce |= 2;
    var f = ng();
    (Ct !== i || Nt !== s) && (Sr = null, Oi(i, s));
    do
      try {
        y5();
        break;
      } catch (h) {
        tg(i, h);
      }
    while (!0);
    if (Od(), Ce = u, Ta.current = f, ct !== null) throw Error(a(261));
    return Ct = null, Nt = 0, gt;
  }
  function y5() {
    for (; ct !== null; ) rg(ct);
  }
  function v5() {
    for (; ct !== null && !Wy(); ) rg(ct);
  }
  function rg(i) {
    var s = lg(i.alternate, i, cn);
    i.memoizedProps = i.pendingProps, s === null ? ig(i) : ct = s, yf.current = null;
  }
  function ig(i) {
    var s = i;
    do {
      var u = s.alternate;
      if (i = s.return, s.flags & 32768) {
        if (u = d5(u, s), u !== null) {
          u.flags &= 32767, ct = u;
          return;
        }
        if (i !== null) i.flags |= 32768, i.subtreeFlags = 0, i.deletions = null;
        else {
          gt = 6, ct = null;
          return;
        }
      } else if (u = c5(u, s, cn), u !== null) {
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
  function Di(i, s, u) {
    var f = Fe, h = lt.transition;
    try {
      lt.transition = null, Fe = 1, _5(i, s, u, f);
    } finally {
      lt.transition = h, Fe = f;
    }
    return null;
  }
  function _5(i, s, u, f) {
    do
      Ii();
    while (Kr !== null);
    if (Ce & 6) throw Error(a(327));
    u = i.finishedWork;
    var h = i.finishedLanes;
    if (u === null) return null;
    if (i.finishedWork = null, i.finishedLanes = 0, u === i.current) throw Error(a(177));
    i.callbackNode = null, i.callbackPriority = 0;
    var m = u.lanes | u.childLanes;
    if (Hy(i, m), i === Ct && (ct = Ct = null, Nt = 0), !(u.subtreeFlags & 2064) && !(u.flags & 2064) || Fa || (Fa = !0, ag(Pd, function() {
      return Ii(), null;
    })), m = (u.flags & 15990) !== 0, u.subtreeFlags & 15990 || m) {
      m = lt.transition, lt.transition = null;
      var P = Fe;
      Fe = 1;
      var O = Ce;
      Ce |= 4, yf.current = null, h5(i, u), Yp(u, i), X(i.containerInfo), i.current = u, p5(u), Ky(), Ce = O, Fe = P, lt.transition = m;
    } else i.current = u;
    if (Fa && (Fa = !1, Kr = i, Ma = h), m = i.pendingLanes, m === 0 && (Wr = null), $y(u.stateNode), Jt(i, wt()), s !== null) for (f = i.onRecoverableError, u = 0; u < s.length; u++) h = s[u], f(h.value, { componentStack: h.stack, digest: h.digest });
    if (Ra) throw Ra = !1, i = wf, wf = null, i;
    return Ma & 1 && i.tag !== 0 && Ii(), m = i.pendingLanes, m & 1 ? i === xf ? zo++ : (zo = 0, xf = i) : zo = 0, er(), null;
  }
  function Ii() {
    if (Kr !== null) {
      var i = I1(Ma), s = lt.transition, u = Fe;
      try {
        if (lt.transition = null, Fe = 16 > i ? 16 : i, Kr === null) var f = !1;
        else {
          if (i = Kr, Kr = null, Ma = 0, Ce & 6) throw Error(a(331));
          var h = Ce;
          for (Ce |= 4, re = i.current; re !== null; ) {
            var m = re, P = m.child;
            if (re.flags & 16) {
              var O = m.deletions;
              if (O !== null) {
                for (var U = 0; U < O.length; U++) {
                  var Y = O[U];
                  for (re = Y; re !== null; ) {
                    var oe = re;
                    switch (oe.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ao(8, oe, m);
                    }
                    var me = oe.child;
                    if (me !== null) me.return = oe, re = me;
                    else for (; re !== null; ) {
                      oe = re;
                      var ee = oe.sibling, Ke = oe.return;
                      if (jp(oe), oe === Y) {
                        re = null;
                        break;
                      }
                      if (ee !== null) {
                        ee.return = Ke, re = ee;
                        break;
                      }
                      re = Ke;
                    }
                  }
                }
                var Be = m.alternate;
                if (Be !== null) {
                  var en = Be.child;
                  if (en !== null) {
                    Be.child = null;
                    do {
                      var wr = en.sibling;
                      en.sibling = null, en = wr;
                    } while (en !== null);
                  }
                }
                re = m;
              }
            }
            if (m.subtreeFlags & 2064 && P !== null) P.return = m, re = P;
            else e: for (; re !== null; ) {
              if (m = re, m.flags & 2048) switch (m.tag) {
                case 0:
                case 11:
                case 15:
                  Ao(9, m, m.return);
              }
              var z = m.sibling;
              if (z !== null) {
                z.return = m.return, re = z;
                break e;
              }
              re = m.return;
            }
          }
          var D = i.current;
          for (re = D; re !== null; ) {
            P = re;
            var V = P.child;
            if (P.subtreeFlags & 2064 && V !== null) V.return = P, re = V;
            else e: for (P = D; re !== null; ) {
              if (O = re, O.flags & 2048) try {
                switch (O.tag) {
                  case 0:
                  case 11:
                  case 15:
                    wa(9, O);
                }
              } catch (ce) {
                Qe(O, O.return, ce);
              }
              if (O === P) {
                re = null;
                break e;
              }
              var te = O.sibling;
              if (te !== null) {
                te.return = O.return, re = te;
                break e;
              }
              re = O.return;
            }
          }
          if (Ce = h, er(), Jn && typeof Jn.onPostCommitFiberRoot == "function") try {
            Jn.onPostCommitFiberRoot(Zl, i);
          } catch {
          }
          f = !0;
        }
        return f;
      } finally {
        Fe = u, lt.transition = s;
      }
    }
    return !1;
  }
  function sg(i, s, u) {
    s = Es(u, s), s = Cp(i, s, 1), i = Hr(i, s, 1), s = It(), i !== null && (wo(i, 1, s), Jt(i, s));
  }
  function Qe(i, s, u) {
    if (i.tag === 3) sg(i, i, u);
    else for (; s !== null; ) {
      if (s.tag === 3) {
        sg(s, i, u);
        break;
      } else if (s.tag === 1) {
        var f = s.stateNode;
        if (typeof s.type.getDerivedStateFromError == "function" || typeof f.componentDidCatch == "function" && (Wr === null || !Wr.has(f))) {
          i = Es(u, i), i = kp(s, i, 1), s = Hr(s, i, 1), i = It(), s !== null && (wo(s, 1, i), Jt(s, i));
          break;
        }
      }
      s = s.return;
    }
  }
  function S5(i, s, u) {
    var f = i.pingCache;
    f !== null && f.delete(s), s = It(), i.pingedLanes |= i.suspendedLanes & u, Ct === i && (Nt & u) === u && (gt === 4 || gt === 3 && (Nt & 130023424) === Nt && 500 > wt() - _f ? Oi(i, 0) : vf |= u), Jt(i, s);
  }
  function og(i, s) {
    s === 0 && (i.mode & 1 ? (s = ql, ql <<= 1, !(ql & 130023424) && (ql = 4194304)) : s = 1);
    var u = It();
    i = tr(i, s), i !== null && (wo(i, s, u), Jt(i, u));
  }
  function w5(i) {
    var s = i.memoizedState, u = 0;
    s !== null && (u = s.retryLane), og(i, u);
  }
  function x5(i, s) {
    var u = 0;
    switch (i.tag) {
      case 13:
        var f = i.stateNode, h = i.memoizedState;
        h !== null && (u = h.retryLane);
        break;
      case 19:
        f = i.stateNode;
        break;
      default:
        throw Error(a(314));
    }
    f !== null && f.delete(s), og(i, u);
  }
  var lg;
  lg = function(i, s, u) {
    if (i !== null) if (i.memoizedProps !== s.pendingProps || Qt.current) bt = !0;
    else {
      if (!(i.lanes & u) && !(s.flags & 128)) return bt = !1, u5(i, s, u);
      bt = !!(i.flags & 131072);
    }
    else bt = !1, $e && s.flags & 1048576 && U1(s, ta, s.index);
    switch (s.lanes = 0, s.tag) {
      case 2:
        var f = s.type;
        ya(i, s), i = s.pendingProps;
        var h = ms(s, Lt.current);
        xs(s, u), h = Kd(null, s, f, i, h, u);
        var m = Yd();
        return s.flags |= 1, typeof h == "object" && h !== null && typeof h.render == "function" && h.$$typeof === void 0 ? (s.tag = 1, s.memoizedState = null, s.updateQueue = null, qt(f) ? (m = !0, $l(s)) : m = !1, s.memoizedState = h.state !== null && h.state !== void 0 ? h.state : null, Gd(s), h.updater = ga, s.stateNode = h, h._reactInternals = s, Zd(s, f, i, u), s = nf(null, s, f, !0, m, u)) : (s.tag = 0, $e && m && Nd(s), jt(null, s, h, u), s = s.child), s;
      case 16:
        f = s.elementType;
        e: {
          switch (ya(i, s), i = s.pendingProps, h = f._init, f = h(f._payload), s.type = f, h = s.tag = k5(f), i = Un(f, i), h) {
            case 0:
              s = tf(null, s, f, i, u);
              break e;
            case 1:
              s = Ap(null, s, f, i, u);
              break e;
            case 11:
              s = Np(null, s, f, i, u);
              break e;
            case 14:
              s = Rp(null, s, f, Un(f.type, i), u);
              break e;
          }
          throw Error(a(
            306,
            f,
            ""
          ));
        }
        return s;
      case 0:
        return f = s.type, h = s.pendingProps, h = s.elementType === f ? h : Un(f, h), tf(i, s, f, h, u);
      case 1:
        return f = s.type, h = s.pendingProps, h = s.elementType === f ? h : Un(f, h), Ap(i, s, f, h, u);
      case 3:
        e: {
          if (Op(s), i === null) throw Error(a(387));
          f = s.pendingProps, m = s.memoizedState, h = m.element, Q1(i, s), aa(s, f, null, u);
          var P = s.memoizedState;
          if (f = P.element, xe && m.isDehydrated) if (m = { element: f, isDehydrated: !1, cache: P.cache, pendingSuspenseBoundaries: P.pendingSuspenseBoundaries, transitions: P.transitions }, s.updateQueue.baseState = m, s.memoizedState = m, s.flags & 256) {
            h = Es(Error(a(423)), s), s = Dp(i, s, f, u, h);
            break e;
          } else if (f !== h) {
            h = Es(Error(a(424)), s), s = Dp(i, s, f, u, h);
            break e;
          } else for (xe && (_n = ky(s.stateNode.containerInfo), un = s, $e = !0, Gn = null, xo = !1), u = Y1(s, null, f, u), s.child = u; u; ) u.flags = u.flags & -3 | 4096, u = u.sibling;
          else {
            if (_s(), f === h) {
              s = _r(i, s, u);
              break e;
            }
            jt(i, s, f, u);
          }
          s = s.child;
        }
        return s;
      case 5:
        return Z1(s), i === null && Md(s), f = s.type, h = s.pendingProps, m = i !== null ? i.memoizedProps : null, P = h.children, ht(f, h) ? P = null : m !== null && ht(f, m) && (s.flags |= 32), Lp(i, s), jt(i, s, P, u), s.child;
      case 6:
        return i === null && Md(s), null;
      case 13:
        return Ip(i, s, u);
      case 4:
        return Ud(s, s.stateNode.containerInfo), f = s.pendingProps, i === null ? s.child = Ss(s, null, f, u) : jt(i, s, f, u), s.child;
      case 11:
        return f = s.type, h = s.pendingProps, h = s.elementType === f ? h : Un(f, h), Np(i, s, f, h, u);
      case 7:
        return jt(i, s, s.pendingProps, u), s.child;
      case 8:
        return jt(i, s, s.pendingProps.children, u), s.child;
      case 12:
        return jt(i, s, s.pendingProps.children, u), s.child;
      case 10:
        e: {
          if (f = s.type._context, h = s.pendingProps, m = s.memoizedProps, P = h.value, X1(s, f, P), m !== null) if (zn(m.value, P)) {
            if (m.children === h.children && !Qt.current) {
              s = _r(i, s, u);
              break e;
            }
          } else for (m = s.child, m !== null && (m.return = s); m !== null; ) {
            var O = m.dependencies;
            if (O !== null) {
              P = m.child;
              for (var U = O.firstContext; U !== null; ) {
                if (U.context === f) {
                  if (m.tag === 1) {
                    U = vr(-1, u & -u), U.tag = 2;
                    var Y = m.updateQueue;
                    if (Y !== null) {
                      Y = Y.shared;
                      var oe = Y.pending;
                      oe === null ? U.next = U : (U.next = oe.next, oe.next = U), Y.pending = U;
                    }
                  }
                  m.lanes |= u, U = m.alternate, U !== null && (U.lanes |= u), Id(m.return, u, s), O.lanes |= u;
                  break;
                }
                U = U.next;
              }
            } else if (m.tag === 10) P = m.type === s.type ? null : m.child;
            else if (m.tag === 18) {
              if (P = m.return, P === null) throw Error(a(341));
              P.lanes |= u, O = P.alternate, O !== null && (O.lanes |= u), Id(P, u, s), P = m.sibling;
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
          jt(i, s, h.children, u), s = s.child;
        }
        return s;
      case 9:
        return h = s.type, f = s.pendingProps.children, xs(s, u), h = Sn(h), f = f(h), s.flags |= 1, jt(i, s, f, u), s.child;
      case 14:
        return f = s.type, h = Un(f, s.pendingProps), h = Un(f.type, h), Rp(i, s, f, h, u);
      case 15:
        return Fp(i, s, s.type, s.pendingProps, u);
      case 17:
        return f = s.type, h = s.pendingProps, h = s.elementType === f ? h : Un(f, h), ya(i, s), s.tag = 1, qt(f) ? (i = !0, $l(s)) : i = !1, xs(s, u), wp(s, f, h), Zd(s, f, h, u), nf(null, s, f, !0, i, u);
      case 19:
        return Gp(i, s, u);
      case 22:
        return Mp(i, s, u);
    }
    throw Error(a(156, s.tag));
  };
  function ag(i, s) {
    return kd(i, s);
  }
  function C5(i, s, u, f) {
    this.tag = i, this.key = u, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = s, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = f, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function kn(i, s, u, f) {
    return new C5(i, s, u, f);
  }
  function Tf(i) {
    return i = i.prototype, !(!i || !i.isReactComponent);
  }
  function k5(i) {
    if (typeof i == "function") return Tf(i) ? 1 : 0;
    if (i != null) {
      if (i = i.$$typeof, i === E) return 11;
      if (i === w) return 14;
    }
    return 2;
  }
  function $r(i, s) {
    var u = i.alternate;
    return u === null ? (u = kn(i.tag, s, i.key, i.mode), u.elementType = i.elementType, u.type = i.type, u.stateNode = i.stateNode, u.alternate = i, i.alternate = u) : (u.pendingProps = s, u.type = i.type, u.flags = 0, u.subtreeFlags = 0, u.deletions = null), u.flags = i.flags & 14680064, u.childLanes = i.childLanes, u.lanes = i.lanes, u.child = i.child, u.memoizedProps = i.memoizedProps, u.memoizedState = i.memoizedState, u.updateQueue = i.updateQueue, s = i.dependencies, u.dependencies = s === null ? null : { lanes: s.lanes, firstContext: s.firstContext }, u.sibling = i.sibling, u.index = i.index, u.ref = i.ref, u;
  }
  function Da(i, s, u, f, h, m) {
    var P = 2;
    if (f = i, typeof i == "function") Tf(i) && (P = 1);
    else if (typeof i == "string") P = 5;
    else e: switch (i) {
      case y:
        return zi(u.children, h, m, s);
      case C:
        P = 8, h |= 8;
        break;
      case S:
        return i = kn(12, u, s, h | 2), i.elementType = S, i.lanes = m, i;
      case N:
        return i = kn(13, u, s, h), i.elementType = N, i.lanes = m, i;
      case k:
        return i = kn(19, u, s, h), i.elementType = k, i.lanes = m, i;
      case _:
        return Ia(u, h, m, s);
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
            P = 16, f = null;
            break e;
        }
        throw Error(a(130, i == null ? i : typeof i, ""));
    }
    return s = kn(P, u, s, h), s.elementType = i, s.type = f, s.lanes = m, s;
  }
  function zi(i, s, u, f) {
    return i = kn(7, i, f, s), i.lanes = u, i;
  }
  function Ia(i, s, u, f) {
    return i = kn(22, i, f, s), i.elementType = _, i.lanes = u, i.stateNode = { isHidden: !1 }, i;
  }
  function Nf(i, s, u) {
    return i = kn(6, i, null, s), i.lanes = u, i;
  }
  function Rf(i, s, u) {
    return s = kn(4, i.children !== null ? i.children : [], i.key, s), s.lanes = u, s.stateNode = { containerInfo: i.containerInfo, pendingChildren: null, implementation: i.implementation }, s;
  }
  function E5(i, s, u, f, h) {
    this.tag = s, this.containerInfo = i, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = ae, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = xd(0), this.expirationTimes = xd(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = xd(0), this.identifierPrefix = f, this.onRecoverableError = h, xe && (this.mutableSourceEagerHydrationData = null);
  }
  function ug(i, s, u, f, h, m, P, O, U) {
    return i = new E5(i, s, u, O, U), s === 1 ? (s = 1, m === !0 && (s |= 8)) : s = 0, m = kn(3, null, null, s), i.current = m, m.stateNode = i, m.memoizedState = { element: f, isDehydrated: u, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Gd(m), i;
  }
  function cg(i) {
    if (!i) return Vr;
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
            if (qt(s.type)) {
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
      if (qt(u)) return A1(i, u, s);
    }
    return s;
  }
  function dg(i) {
    var s = i._reactInternals;
    if (s === void 0)
      throw typeof i.render == "function" ? Error(a(188)) : (i = Object.keys(i).join(","), Error(a(268, i)));
    return i = H(s), i === null ? null : i.stateNode;
  }
  function fg(i, s) {
    if (i = i.memoizedState, i !== null && i.dehydrated !== null) {
      var u = i.retryLane;
      i.retryLane = u !== 0 && u < s ? u : s;
    }
  }
  function za(i, s) {
    fg(i, s), (i = i.alternate) && fg(i, s);
  }
  function P5(i) {
    return i = H(i), i === null ? null : i.stateNode;
  }
  function T5() {
    return null;
  }
  return n.attemptContinuousHydration = function(i) {
    if (i.tag === 13) {
      var s = tr(i, 134217728);
      if (s !== null) {
        var u = It();
        Cn(s, i, 134217728, u);
      }
      za(i, 134217728);
    }
  }, n.attemptDiscreteHydration = function(i) {
    if (i.tag === 13) {
      var s = tr(i, 1);
      if (s !== null) {
        var u = It();
        Cn(s, i, 1, u);
      }
      za(i, 1);
    }
  }, n.attemptHydrationAtCurrentPriority = function(i) {
    if (i.tag === 13) {
      var s = Yr(i), u = tr(i, s);
      if (u !== null) {
        var f = It();
        Cn(u, i, s, f);
      }
      za(i, s);
    }
  }, n.attemptSynchronousHydration = function(i) {
    switch (i.tag) {
      case 3:
        var s = i.stateNode;
        if (s.current.memoizedState.isDehydrated) {
          var u = So(s.pendingLanes);
          u !== 0 && (Cd(s, u | 1), Jt(s, wt()), !(Ce & 6) && (Ns(), er()));
        }
        break;
      case 13:
        eg(function() {
          var f = tr(i, 1);
          if (f !== null) {
            var h = It();
            Cn(f, i, 1, h);
          }
        }), za(i, 1);
    }
  }, n.batchedUpdates = function(i, s) {
    var u = Ce;
    Ce |= 1;
    try {
      return i(s);
    } finally {
      Ce = u, Ce === 0 && (Ns(), Jl && er());
    }
  }, n.createComponentSelector = function(i) {
    return { $$typeof: xa, value: i };
  }, n.createContainer = function(i, s, u, f, h, m, P) {
    return ug(i, s, !1, null, u, f, h, m, P);
  }, n.createHasPseudoClassSelector = function(i) {
    return { $$typeof: Ca, value: i };
  }, n.createHydrationContainer = function(i, s, u, f, h, m, P, O, U) {
    return i = ug(u, f, !0, i, h, m, P, O, U), i.context = cg(null), u = i.current, f = It(), h = Yr(u), m = vr(f, h), m.callback = s ?? null, Hr(u, m, h), i.current.lanes = h, wo(i, h, f), Jt(i, f), i;
  }, n.createPortal = function(i, s, u) {
    var f = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: g, key: f == null ? null : "" + f, children: i, containerInfo: s, implementation: u };
  }, n.createRoleSelector = function(i) {
    return { $$typeof: ka, value: i };
  }, n.createTestNameSelector = function(i) {
    return { $$typeof: Ea, value: i };
  }, n.createTextSelector = function(i) {
    return { $$typeof: Pa, value: i };
  }, n.deferredUpdates = function(i) {
    var s = Fe, u = lt.transition;
    try {
      return lt.transition = null, Fe = 16, i();
    } finally {
      Fe = s, lt.transition = u;
    }
  }, n.discreteUpdates = function(i, s, u, f, h) {
    var m = Fe, P = lt.transition;
    try {
      return lt.transition = null, Fe = 1, i(s, u, f, h);
    } finally {
      Fe = m, lt.transition = P, Ce === 0 && Ns();
    }
  }, n.findAllNodes = mf, n.findBoundingRects = function(i, s) {
    if (!Pi) throw Error(a(363));
    s = mf(i, s), i = [];
    for (var u = 0; u < s.length; u++) i.push(ad(s[u]));
    for (s = i.length - 1; 0 < s; s--) {
      u = i[s];
      for (var f = u.x, h = f + u.width, m = u.y, P = m + u.height, O = s - 1; 0 <= O; O--) if (s !== O) {
        var U = i[O], Y = U.x, oe = Y + U.width, me = U.y, ee = me + U.height;
        if (f >= Y && m >= me && h <= oe && P <= ee) {
          i.splice(s, 1);
          break;
        } else if (f !== Y || u.width !== U.width || ee < m || me > P) {
          if (!(m !== me || u.height !== U.height || oe < f || Y > h)) {
            Y > f && (U.width += Y - f, U.x = f), oe < h && (U.width = h - Y), i.splice(s, 1);
            break;
          }
        } else {
          me > m && (U.height += me - m, U.y = m), ee < P && (U.height = P - me), i.splice(s, 1);
          break;
        }
      }
    }
    return i;
  }, n.findHostInstance = dg, n.findHostInstanceWithNoPortals = function(i) {
    return i = B(i), i = i !== null ? J(i) : null, i === null ? null : i.stateNode;
  }, n.findHostInstanceWithWarning = function(i) {
    return dg(i);
  }, n.flushControlled = function(i) {
    var s = Ce;
    Ce |= 1;
    var u = lt.transition, f = Fe;
    try {
      lt.transition = null, Fe = 1, i();
    } finally {
      Fe = f, lt.transition = u, Ce = s, Ce === 0 && (Ns(), er());
    }
  }, n.flushPassiveEffects = Ii, n.flushSync = eg, n.focusWithin = function(i, s) {
    if (!Pi) throw Error(a(363));
    for (i = hf(i), s = bp(i, s), s = Array.from(s), i = 0; i < s.length; ) {
      var u = s[i++];
      if (!Ti(u)) {
        if (u.tag === 5 && Wl(u.stateNode)) return !0;
        for (u = u.child; u !== null; ) s.push(u), u = u.sibling;
      }
    }
    return !1;
  }, n.getCurrentUpdatePriority = function() {
    return Fe;
  }, n.getFindAllNodesFailureDescription = function(i, s) {
    if (!Pi) throw Error(a(363));
    var u = 0, f = [];
    i = [hf(i), 0];
    for (var h = 0; h < i.length; ) {
      var m = i[h++], P = i[h++], O = s[P];
      if ((m.tag !== 5 || !Ti(m)) && (pf(m, O) && (f.push(gf(O)), P++, P > u && (u = P)), P < s.length)) for (m = m.child; m !== null; ) i.push(m, P), m = m.sibling;
    }
    if (u < s.length) {
      for (i = []; u < s.length; u++) i.push(gf(s[u]));
      return `findAllNodes was able to match part of the selector:
  ` + (f.join(" > ") + `

No matching component was found for:
  `) + i.join(" > ");
    }
    return null;
  }, n.getPublicRootInstance = function(i) {
    if (i = i.current, !i.child) return null;
    switch (i.child.tag) {
      case 5:
        return he(i.child.stateNode);
      default:
        return i.child.stateNode;
    }
  }, n.injectIntoDevTools = function(i) {
    if (i = { bundleType: i.bundleType, version: i.version, rendererPackageName: i.rendererPackageName, rendererConfig: i.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: c.ReactCurrentDispatcher, findHostInstanceByFiber: P5, findFiberByHostInstance: i.findFiberByHostInstance || T5, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1" }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u") i = !1;
    else {
      var s = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (s.isDisabled || !s.supportsFiber) i = !0;
      else {
        try {
          Zl = s.inject(i), Jn = s;
        } catch {
        }
        i = !!s.checkDCE;
      }
    }
    return i;
  }, n.isAlreadyRendering = function() {
    return !1;
  }, n.observeVisibleRects = function(i, s, u, f) {
    if (!Pi) throw Error(a(363));
    i = mf(i, s);
    var h = dd(i, u, f).disconnect;
    return { disconnect: function() {
      h();
    } };
  }, n.registerMutableSourceForHydration = function(i, s) {
    var u = s._getVersion;
    u = u(s._source), i.mutableSourceEagerHydrationData == null ? i.mutableSourceEagerHydrationData = [s, u] : i.mutableSourceEagerHydrationData.push(s, u);
  }, n.runWithPriority = function(i, s) {
    var u = Fe;
    try {
      return Fe = i, s();
    } finally {
      Fe = u;
    }
  }, n.shouldError = function() {
    return null;
  }, n.shouldSuspend = function() {
    return !1;
  }, n.updateContainer = function(i, s, u, f) {
    var h = s.current, m = It(), P = Yr(h);
    return u = cg(u), s.context === null ? s.context = u : s.pendingContext = u, s = vr(m, P), s.payload = { element: i }, f = f === void 0 ? null : f, f !== null && (s.callback = f), i = Hr(h, s, P), i !== null && (Cn(i, h, P, m), la(i, h, P)), P;
  }, n;
};
ly.exports = nS;
var rS = ly.exports;
const iS = /* @__PURE__ */ Zu(rS);
var ay = { exports: {} }, ds = {};
/**
 * @license React
 * react-reconciler-constants.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
ds.ConcurrentRoot = 1;
ds.ContinuousEventPriority = 4;
ds.DefaultEventPriority = 16;
ds.DiscreteEventPriority = 1;
ds.IdleEventPriority = 536870912;
ds.LegacyRoot = 0;
ay.exports = ds;
var uy = ay.exports;
const tm = {
  children: !0,
  ref: !0,
  key: !0,
  style: !0,
  forwardedRef: !0,
  unstable_applyCache: !0,
  unstable_applyDrawHitFromCache: !0
};
let nm = !1, rm = !1;
const P1 = ".react-konva-event", sS = `ReactKonva: You have a Konva node with draggable = true and position defined but no onDragMove or onDragEnd events are handled.
Position of a node will be changed during drag&drop, so you should update state of the react app as well.
Consider to add onDragMove or onDragEnd events.
For more info see: https://github.com/konvajs/react-konva/issues/256
`, oS = `ReactKonva: You are using "zIndex" attribute for a Konva node.
react-konva may get confused with ordering. Just define correct order of elements in your render function of a component.
For more info see: https://github.com/konvajs/react-konva/issues/194
`, lS = {};
function od(t, e, n = lS) {
  if (!nm && "zIndex" in e && (console.warn(oS), nm = !0), !rm && e.draggable) {
    var r = e.x !== void 0 || e.y !== void 0, o = e.onDragEnd || e.onDragMove;
    r && !o && (console.warn(sS), rm = !0);
  }
  for (var l in n)
    if (!tm[l]) {
      var a = l.slice(0, 2) === "on", c = n[l] !== e[l];
      if (a && c) {
        var d = l.substr(2).toLowerCase();
        d.substr(0, 7) === "content" && (d = "content" + d.substr(7, 1).toUpperCase() + d.substr(8)), t.off(d, n[l]);
      }
      var g = !e.hasOwnProperty(l);
      g && t.setAttr(l, void 0);
    }
  var y = e._useStrictMode, C = {}, S = !1;
  const x = {};
  for (var l in e)
    if (!tm[l]) {
      var a = l.slice(0, 2) === "on", v = n[l] !== e[l];
      if (a && v) {
        var d = l.substr(2).toLowerCase();
        d.substr(0, 7) === "content" && (d = "content" + d.substr(7, 1).toUpperCase() + d.substr(8)), e[l] && (x[d] = e[l]);
      }
      !a && (e[l] !== n[l] || y && e[l] !== t.getAttr(l)) && (S = !0, C[l] = e[l]);
    }
  S && (t.setAttrs(C), Ei(t));
  for (var d in x)
    t.on(d + P1, x[d]);
}
function Ei(t) {
  if (!we.Konva.autoDrawEnabled) {
    var e = t.getLayer() || t.getStage();
    e && e.batchDraw();
  }
}
const cy = {}, aS = {};
Ll.Node.prototype._applyProps = od;
function uS(t, e) {
  if (typeof e == "string") {
    console.error(`Do not use plain text as child of Konva.Node. You are using text: ${e}`);
    return;
  }
  t.add(e), Ei(t);
}
function cS(t, e, n) {
  let r = Ll[t];
  r || (console.error(`Konva has no node with the type ${t}. Group will be used instead. If you use minimal version of react-konva, just import required nodes into Konva: "import "konva/lib/shapes/${t}"  If you want to render DOM elements as part of canvas tree take a look into this demo: https://konvajs.github.io/docs/react/DOM_Portal.html`), r = Ll.Group);
  const o = {}, l = {};
  for (var a in e) {
    var c = a.slice(0, 2) === "on";
    c ? l[a] = e[a] : o[a] = e[a];
  }
  const d = new r(o);
  return od(d, l), d;
}
function dS(t, e, n) {
  console.error(`Text components are not supported for now in ReactKonva. Your text is: "${t}"`);
}
function fS(t, e, n) {
  return !1;
}
function hS(t) {
  return t;
}
function pS() {
  return null;
}
function gS() {
  return null;
}
function mS(t, e, n, r) {
  return aS;
}
function yS() {
}
function vS(t) {
}
function _S(t, e) {
  return !1;
}
function SS() {
  return cy;
}
function wS() {
  return cy;
}
const xS = setTimeout, CS = clearTimeout, kS = -1;
function ES(t, e) {
  return !1;
}
const PS = !1, TS = !0, NS = !0;
function RS(t, e) {
  e.parent === t ? e.moveToTop() : t.add(e), Ei(t);
}
function FS(t, e) {
  e.parent === t ? e.moveToTop() : t.add(e), Ei(t);
}
function dy(t, e, n) {
  e._remove(), t.add(e), e.setZIndex(n.getZIndex()), Ei(t);
}
function MS(t, e, n) {
  dy(t, e, n);
}
function LS(t, e) {
  e.destroy(), e.off(P1), Ei(t);
}
function AS(t, e) {
  e.destroy(), e.off(P1), Ei(t);
}
function OS(t, e, n) {
  console.error(`Text components are not yet supported in ReactKonva. You text is: "${n}"`);
}
function DS(t, e, n) {
}
function IS(t, e, n, r, o) {
  od(t, o, r);
}
function zS(t) {
  t.hide(), Ei(t);
}
function GS(t) {
}
function US(t, e) {
  (e.visible == null || e.visible) && t.show();
}
function BS(t, e) {
}
function VS(t) {
}
function jS() {
}
const HS = () => uy.DefaultEventPriority, WS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  appendChild: RS,
  appendChildToContainer: FS,
  appendInitialChild: uS,
  cancelTimeout: CS,
  clearContainer: VS,
  commitMount: DS,
  commitTextUpdate: OS,
  commitUpdate: IS,
  createInstance: cS,
  createTextInstance: dS,
  detachDeletedInstance: jS,
  finalizeInitialChildren: fS,
  getChildHostContext: wS,
  getCurrentEventPriority: HS,
  getPublicInstance: hS,
  getRootHostContext: SS,
  hideInstance: zS,
  hideTextInstance: GS,
  idlePriority: nl.unstable_IdlePriority,
  insertBefore: dy,
  insertInContainerBefore: MS,
  isPrimaryRenderer: PS,
  noTimeout: kS,
  now: nl.unstable_now,
  prepareForCommit: pS,
  preparePortalMount: gS,
  prepareUpdate: mS,
  removeChild: LS,
  removeChildFromContainer: AS,
  resetAfterCommit: yS,
  resetTextContent: vS,
  run: nl.unstable_runWithPriority,
  scheduleTimeout: xS,
  shouldDeprioritizeSubtree: _S,
  shouldSetTextContent: ES,
  supportsMutation: NS,
  unhideInstance: US,
  unhideTextInstance: BS,
  warnsIfNotActing: TS
}, Symbol.toStringTag, { value: "Module" }));
var KS = Object.defineProperty, YS = Object.defineProperties, XS = Object.getOwnPropertyDescriptors, im = Object.getOwnPropertySymbols, $S = Object.prototype.hasOwnProperty, QS = Object.prototype.propertyIsEnumerable, sm = (t, e, n) => e in t ? KS(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, om = (t, e) => {
  for (var n in e || (e = {}))
    $S.call(e, n) && sm(t, n, e[n]);
  if (im)
    for (var n of im(e))
      QS.call(e, n) && sm(t, n, e[n]);
  return t;
}, qS = (t, e) => YS(t, XS(e)), lm, am;
typeof window < "u" && ((lm = window.document) != null && lm.createElement || ((am = window.navigator) == null ? void 0 : am.product) === "ReactNative") ? le.useLayoutEffect : le.useEffect;
function fy(t, e, n) {
  if (!t)
    return;
  if (n(t) === !0)
    return t;
  let r = t.child;
  for (; r; ) {
    const o = fy(r, e, n);
    if (o)
      return o;
    r = r.sibling;
  }
}
function hy(t) {
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
const um = console.error;
console.error = function() {
  const t = [...arguments].join("");
  if (t != null && t.startsWith("Warning:") && t.includes("useContext")) {
    console.error = um;
    return;
  }
  return um.apply(this, arguments);
};
const T1 = hy(le.createContext(null));
class py extends le.Component {
  render() {
    return /* @__PURE__ */ le.createElement(T1.Provider, {
      value: this._reactInternals
    }, this.props.children);
  }
}
function bS() {
  const t = le.useContext(T1);
  if (t === null)
    throw new Error("its-fine: useFiber must be called within a <FiberProvider />!");
  const e = le.useId();
  return le.useMemo(() => {
    for (const r of [t, t == null ? void 0 : t.alternate]) {
      if (!r)
        continue;
      const o = fy(r, !1, (l) => {
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
  const t = bS(), [e] = le.useState(() => /* @__PURE__ */ new Map());
  e.clear();
  let n = t;
  for (; n; ) {
    if (n.type && typeof n.type == "object") {
      const o = n.type._context === void 0 && n.type.Provider === n.type ? n.type : n.type._context;
      o && o !== T1 && !e.has(o) && e.set(o, le.useContext(hy(o)));
    }
    n = n.return;
  }
  return e;
}
function JS() {
  const t = ZS();
  return le.useMemo(
    () => Array.from(t.keys()).reduce(
      (e, n) => (r) => /* @__PURE__ */ le.createElement(e, null, /* @__PURE__ */ le.createElement(n.Provider, qS(om({}, r), {
        value: t.get(n)
      }))),
      (e) => /* @__PURE__ */ le.createElement(py, om({}, e))
    ),
    [t]
  );
}
function ew(t) {
  const e = Wt.useRef({});
  return Wt.useLayoutEffect(() => {
    e.current = t;
  }), Wt.useLayoutEffect(() => () => {
    e.current = {};
  }, []), e.current;
}
const tw = (t) => {
  const e = Wt.useRef(null), n = Wt.useRef(null), r = Wt.useRef(null), o = ew(t), l = JS(), a = (c) => {
    const { forwardedRef: d } = t;
    d && (typeof d == "function" ? d(c) : d.current = c);
  };
  return Wt.useLayoutEffect(() => (n.current = new Ll.Stage({
    width: t.width,
    height: t.height,
    container: e.current
  }), a(n.current), r.current = tl.createContainer(n.current, uy.LegacyRoot, !1, null), tl.updateContainer(Wt.createElement(l, {}, t.children), r.current), () => {
    Ll.isBrowser && (a(null), tl.updateContainer(null, r.current, null), n.current.destroy());
  }), []), Wt.useLayoutEffect(() => {
    a(n.current), od(n.current, t, o), tl.updateContainer(Wt.createElement(l, {}, t.children), r.current, null);
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
}, cm = "Layer", hh = "Group", Xi = "Rect", gy = "Circle", fl = "Line", nw = "Image", rw = "Transformer", tl = iS(WS);
tl.injectIntoDevTools({
  // @ts-ignore
  findHostInstanceByFiber: () => null,
  bundleType: 0,
  version: Wt.version,
  rendererPackageName: "react-konva"
});
const iw = Wt.forwardRef((t, e) => Wt.createElement(py, {}, Wt.createElement(tw, { ...t, forwardedRef: e })));
var Ui = le, sw = function(e, n, r) {
  const o = Ui.useRef("loading"), l = Ui.useRef(), [a, c] = Ui.useState(0), d = Ui.useRef(), g = Ui.useRef(), y = Ui.useRef();
  return (d.current !== e || g.current !== n || y.current !== r) && (o.current = "loading", l.current = void 0, d.current = e, g.current = n, y.current = r), Ui.useLayoutEffect(
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
const ow = /* @__PURE__ */ Zu(sw);
function my(t = "") {
  return { version: "konva-1", background: t, objects: [] };
}
function Qo(t) {
  return JSON.parse(JSON.stringify(t));
}
function Bi() {
  return `obj_${Math.random().toString(36).slice(2, 10)}_${Date.now().toString(36)}`;
}
function ph(t) {
  return !t || !Array.isArray(t.objects) ? my((t == null ? void 0 : t.background) ?? "") : {
    version: t.version || "konva-1",
    background: t.background ?? "",
    objects: t.objects.filter(Boolean)
  };
}
function qo(t, e) {
  return {
    scale: 1,
    x: t / 2,
    y: e / 2,
    rotation: 0
  };
}
const lw = 0.25, aw = 8, ou = 1.15, dm = 15, lu = "rgba(0, 0, 0, 0.45)";
function uw(t, e, n, r) {
  return {
    x: Math.min(t, t + n),
    y: Math.min(e, e + r),
    width: Math.abs(n),
    height: Math.abs(r)
  };
}
const cw = ({
  bounds: t,
  canvasWidth: e,
  canvasHeight: n
}) => {
  const { x: r, y: o, width: l, height: a } = t;
  if (l < 1 || a < 1) return null;
  const c = r + l, d = o + a;
  return /* @__PURE__ */ ve.jsxs(ve.Fragment, { children: [
    /* @__PURE__ */ ve.jsx(
      Xi,
      {
        x: 0,
        y: 0,
        width: e,
        height: o,
        fill: lu,
        listening: !1
      }
    ),
    /* @__PURE__ */ ve.jsx(
      Xi,
      {
        x: 0,
        y: d,
        width: e,
        height: Math.max(0, n - d),
        fill: lu,
        listening: !1
      }
    ),
    /* @__PURE__ */ ve.jsx(
      Xi,
      {
        x: 0,
        y: o,
        width: r,
        height: a,
        fill: lu,
        listening: !1
      }
    ),
    /* @__PURE__ */ ve.jsx(
      Xi,
      {
        x: c,
        y: o,
        width: Math.max(0, e - c),
        height: a,
        fill: lu,
        listening: !1
      }
    )
  ] });
};
function fm(t) {
  if (!t) return null;
  const e = t.getPointerPosition();
  if (!e) return null;
  const n = t.getAbsoluteTransform().copy().invert(), r = t.findOne("#viewport-content");
  return r ? r.getAbsoluteTransform().copy().invert().point(e) : n.point(e);
}
const dw = ({
  fillColor: t,
  strokeWidth: e,
  strokeColor: n,
  backgroundColor: r,
  backgroundImageURL: o,
  realtimeUpdateStreamlit: l,
  canvasHeight: a,
  canvasWidth: c,
  drawingMode: d,
  initialDrawing: g,
  displayToolbar: y,
  displayRadius: C,
  enableViewportControls: S,
  setStateValue: x
}) => {
  const v = le.useRef(null), E = le.useRef(null), N = le.useRef(null), k = le.useRef(null), w = le.useRef(null), p = le.useRef(null), _ = le.useRef(
    `${r}|${o ?? ""}`
  ), T = le.useRef(!1), F = le.useRef(null), [M, R] = le.useState(
    () => ph(g)
  ), [G, L] = le.useState([
    ph(g)
  ]), [B, H] = le.useState(0), [I, J] = le.useState(null), [$, he] = le.useState(null), [_e, j] = le.useState(
    () => qo(c, a)
  ), [Q] = ow(o ?? "", "anonymous"), X = le.useMemo(
    () => JSON.stringify((g == null ? void 0 : g.objects) ?? []),
    [g]
  );
  le.useEffect(() => {
    j(qo(c, a));
  }, [c, a]), le.useEffect(() => {
    const b = ph(g), Z = `${r}|${o ?? ""}`, ue = _.current !== Z;
    _.current = Z, R((ne) => {
      if (!(ue || b.objects.length > 0 || ne.objects.length === 0))
        return { ...ne, background: r };
      const $t = {
        ...b,
        background: r
      };
      return L([Qo($t)]), H(0), he(null), J(null), j(qo(c, a)), $t;
    });
  }, [
    X,
    r,
    o,
    g,
    c,
    a
  ]), le.useEffect(() => {
    var ze, $t, An;
    const b = w.current, Z = v.current;
    if (!b || !Z) return;
    const ue = M.objects.find((On) => On.type === "crop");
    if (d === "rect_crop" && ue && !I) {
      const On = Z.findOne(`#${ue.id}`);
      On && (p.current = On, b.nodes([On]), (ze = b.getLayer()) == null || ze.batchDraw());
      return;
    }
    if (d !== "transform" || !$) {
      b.nodes([]), p.current = null, ($t = b.getLayer()) == null || $t.batchDraw();
      return;
    }
    const ne = Z.findOne(`#${$}`);
    ne && (p.current = ne, b.nodes([ne]), (An = b.getLayer()) == null || An.batchDraw());
  }, [$, d, M.objects, I]);
  const q = le.useCallback(
    (b) => {
      L((Z) => [...Z.slice(0, B + 1), Qo(b)]), H((Z) => Z + 1);
    },
    [B]
  ), se = le.useCallback(
    (b) => {
      const Z = E.current, ue = N.current;
      !Z || !ue || requestAnimationFrame(() => {
        const ne = {
          x: ue.x(),
          y: ue.y(),
          scaleX: ue.scaleX(),
          scaleY: ue.scaleY(),
          rotation: ue.rotation()
        }, ze = qo(c, a);
        ue.position({ x: ze.x, y: ze.y }), ue.scale({ x: ze.scale, y: ze.scale }), ue.rotation(ze.rotation);
        const $t = ue.findOne("#crop-chrome"), An = [];
        $t && (An.push($t), $t.visible(!1));
        for (const Ur of M.objects) {
          if (Ur.type !== "crop") continue;
          const Dn = ue.findOne(`#${Ur.id}`);
          Dn && (An.push(Dn), Dn.visible(!1));
        }
        Z.batchDraw();
        const On = Z.toDataURL({
          pixelRatio: 1,
          mimeType: "image/png",
          x: 0,
          y: 0,
          width: c,
          height: a
        });
        ue.position({ x: ne.x, y: ne.y }), ue.scale({ x: ne.scaleX, y: ne.scaleY }), ue.rotation(ne.rotation);
        for (const Ur of An)
          Ur.visible(!0);
        Z.batchDraw(), x("image_data_url", On), x("json_data", b);
      });
    },
    [a, c, M.objects, x]
  ), ge = le.useCallback(
    (b, Z) => {
      const ue = Qo(b);
      R(ue), q(ue), ((Z == null ? void 0 : Z.emit) ?? l) && se(ue);
    },
    [se, q, l]
  ), ft = le.useCallback(() => {
    if (B <= 0) return;
    const b = B - 1, Z = Qo(G[b]);
    H(b), R(Z), he(null), l && se(Z);
  }, [se, G, B, l]), ht = le.useCallback(() => {
    if (B >= G.length - 1) return;
    const b = B + 1, Z = Qo(G[b]);
    H(b), R(Z), he(null), l && se(Z);
  }, [se, G, B, l]), Ue = le.useCallback(() => {
    const b = my(r);
    ge(b, { emit: !0 }), he(null), J(null);
  }, [r, ge]), A = le.useCallback(() => {
    se(M);
  }, [se, M]), W = le.useCallback(() => {
    j(qo(c, a));
  }, [a, c]), ae = le.useCallback(
    (b, Z) => {
      j((ue) => {
        const ne = Math.min(
          aw,
          Math.max(lw, ue.scale * b)
        );
        if (!Z)
          return { ...ue, scale: ne };
        const ze = N.current;
        if (!ze)
          return { ...ue, scale: ne };
        const An = ze.getAbsoluteTransform().copy().invert().point(Z), On = c / 2, Ur = a / 2, Dn = Math.cos(ue.rotation * Math.PI / 180), fs = Math.sin(ue.rotation * Math.PI / 180), hs = An.x - On, ps = An.y - Ur, fd = ue.x + ue.scale * (Dn * hs - fs * ps), hd = ue.y + ue.scale * (fs * hs + Dn * ps), pd = fd - ne * (Dn * hs - fs * ps), Kl = hd - ne * (fs * hs + Dn * ps);
        return { ...ue, scale: ne, x: pd, y: Kl };
      });
    },
    [a, c]
  ), Re = le.useCallback((b) => {
    j((Z) => ({
      ...Z,
      rotation: Z.rotation + b
    }));
  }, []), de = le.useCallback(
    (b) => {
      ge({
        ...M,
        background: r,
        objects: [...M.objects, b]
      });
    },
    [r, ge, M]
  ), Oe = le.useCallback(
    (b) => {
      const Z = M.objects.filter((ue) => ue.type !== "crop");
      ge({
        ...M,
        background: r,
        objects: [...Z, { ...b, type: "crop" }]
      }), he(b.id);
    },
    [r, ge, M]
  ), xe = le.useMemo(
    () => M.objects.find((b) => b.type === "crop") ?? null,
    [M.objects]
  ), ln = le.useMemo(() => {
    if ((I == null ? void 0 : I.kind) === "rect" && d === "rect_crop") {
      const b = uw(
        I.x,
        I.y,
        I.width,
        I.height
      );
      return b.width > 0 && b.height > 0 ? b : null;
    }
    return xe ? {
      x: xe.x ?? 0,
      y: xe.y ?? 0,
      width: xe.width ?? 0,
      height: xe.height ?? 0
    } : null;
  }, [xe, I, d]), De = le.useCallback(
    (b) => {
      if (!S) return;
      b.evt.preventDefault();
      const Z = v.current;
      if (!Z) return;
      const ue = Z.getPointerPosition();
      if (!ue) return;
      const ne = b.evt.deltaY > 0 ? 1 / ou : ou;
      ae(ne, ue);
    },
    [S, ae]
  ), Zn = le.useCallback(
    (b) => {
      const Z = v.current;
      if (S && (d === "pan" || b.evt.button === 1 || b.evt.altKey || b.evt.buttons === 4)) {
        T.current = !0, F.current = { x: b.evt.clientX, y: b.evt.clientY };
        return;
      }
      const ne = fm(Z);
      if (ne) {
        if (d === "transform") {
          (b.target === Z || b.target.id() === "viewport-content") && he(null);
          return;
        }
        if (d !== "pan") {
          if (d === "point") {
            de({
              id: Bi(),
              type: "point",
              x: ne.x,
              y: ne.y,
              radius: C,
              fill: n,
              stroke: n,
              strokeWidth: 1
            });
            return;
          }
          if (d === "polygon") {
            J((ze) => (ze == null ? void 0 : ze.kind) === "polygon" ? { kind: "polygon", points: [...ze.points, ne.x, ne.y] } : { kind: "polygon", points: [ne.x, ne.y] });
            return;
          }
          if (d === "freedraw") {
            J({ kind: "freedraw", points: [ne.x, ne.y] });
            return;
          }
          if (d === "line") {
            J({ kind: "line", x1: ne.x, y1: ne.y, x2: ne.x, y2: ne.y });
            return;
          }
          if (d === "rect") {
            J({ kind: "rect", x: ne.x, y: ne.y, width: 0, height: 0 });
            return;
          }
          if (d === "rect_crop") {
            const ze = M.objects.find(($t) => $t.type === "crop");
            if (ze && b.target.id() === ze.id) {
              he(ze.id);
              return;
            }
            he(null), J({ kind: "rect", x: ne.x, y: ne.y, width: 0, height: 0 });
            return;
          }
          d === "circle" && J({ kind: "circle", x: ne.x, y: ne.y, radius: 0 });
        }
      }
    },
    [
      de,
      C,
      d,
      S,
      M.objects,
      n
    ]
  ), an = le.useCallback(
    (b) => {
      if (T.current && F.current) {
        const ue = b.evt.clientX - F.current.x, ne = b.evt.clientY - F.current.y;
        F.current = { x: b.evt.clientX, y: b.evt.clientY }, j((ze) => ({
          ...ze,
          x: ze.x + ue,
          y: ze.y + ne
        }));
        return;
      }
      const Z = fm(v.current);
      if (!(!Z || !I)) {
        if (I.kind === "freedraw") {
          J({ kind: "freedraw", points: [...I.points, Z.x, Z.y] });
          return;
        }
        if (I.kind === "line") {
          J({ ...I, x2: Z.x, y2: Z.y });
          return;
        }
        if (I.kind === "rect") {
          J({
            ...I,
            width: Z.x - I.x,
            height: Z.y - I.y
          });
          return;
        }
        if (I.kind === "circle") {
          const ue = Z.x - I.x, ne = Z.y - I.y;
          J({ ...I, radius: Math.sqrt(ue * ue + ne * ne) });
        }
      }
    },
    [I]
  ), Ln = le.useCallback(() => {
    if (I) {
      if (I.kind === "freedraw" && I.points.length >= 4)
        de({
          id: Bi(),
          type: "freedraw",
          points: I.points,
          stroke: n,
          strokeWidth: e,
          fill: ""
        });
      else if (I.kind === "line")
        de({
          id: Bi(),
          type: "line",
          points: [I.x1, I.y1, I.x2, I.y2],
          stroke: n,
          strokeWidth: e
        });
      else if (I.kind === "rect") {
        const b = Math.min(I.x, I.x + I.width), Z = Math.min(I.y, I.y + I.height), ue = Math.abs(I.width), ne = Math.abs(I.height);
        ue > 1 && ne > 1 && (d === "rect_crop" ? Oe({
          id: (xe == null ? void 0 : xe.id) ?? Bi(),
          type: "crop",
          x: b,
          y: Z,
          width: ue,
          height: ne,
          stroke: n,
          strokeWidth: e,
          fill: "transparent"
        }) : de({
          id: Bi(),
          type: "rect",
          x: b,
          y: Z,
          width: ue,
          height: ne,
          stroke: n,
          strokeWidth: e,
          fill: t
        }));
      } else I.kind === "circle" && I.radius > 1 && de({
        id: Bi(),
        type: "circle",
        x: I.x,
        y: I.y,
        radius: I.radius,
        stroke: n,
        strokeWidth: e,
        fill: t
      });
      I.kind !== "polygon" && J(null);
    }
  }, [
    de,
    xe,
    I,
    d,
    t,
    Oe,
    n,
    e
  ]), Hl = le.useCallback(() => {
    if (T.current) {
      T.current = !1, F.current = null;
      return;
    }
    d === "polygon" || d === "transform" || d === "pan" || Ln();
  }, [d, Ln]), Pi = le.useCallback(
    (b) => {
      if (b.evt.preventDefault(), !(d !== "polygon" || (I == null ? void 0 : I.kind) !== "polygon")) {
        if (I.points.length < 6) {
          J(null);
          return;
        }
        de({
          id: Bi(),
          type: "polygon",
          points: I.points,
          stroke: n,
          strokeWidth: e,
          fill: t
        }), J(null);
      }
    },
    [de, I, d, t, n, e]
  ), ld = le.useCallback(() => {
    if (d === "polygon" && (I == null ? void 0 : I.kind) === "polygon") {
      I.points.length <= 2 ? J(null) : J({
        kind: "polygon",
        points: I.points.slice(0, -2)
      });
      return;
    }
    if (d === "transform" && $) {
      ge({
        ...M,
        objects: M.objects.filter((b) => b.id !== $)
      }), he(null);
      return;
    }
    d === "rect_crop" && xe && (ge({
      ...M,
      objects: M.objects.filter((b) => b.type !== "crop")
    }), he(null));
  }, [ge, xe, I, d, M, $]), ad = le.useCallback(
    (b) => {
      d !== "transform" && d !== "rect_crop" || he(b);
    },
    [d]
  ), ud = le.useCallback(
    (b, Z) => {
      const ue = M.objects.map((ne) => ne.id !== b ? ne : {
        ...ne,
        x: Z.x(),
        y: Z.y(),
        rotation: Z.rotation(),
        scaleX: Z.scaleX(),
        scaleY: Z.scaleY(),
        ...ne.type === "rect" || ne.type === "crop" ? {
          width: Math.max(1, (ne.width ?? 0) * Z.scaleX()),
          height: Math.max(1, (ne.height ?? 0) * Z.scaleY()),
          scaleX: 1,
          scaleY: 1
        } : {},
        ...ne.type === "circle" || ne.type === "point" ? {
          radius: Math.max(
            1,
            (ne.radius ?? 1) * Math.max(Z.scaleX(), Z.scaleY())
          ),
          scaleX: 1,
          scaleY: 1
        } : {}
      });
      (Z.getClassName() === "Rect" || Z.getClassName() === "Circle") && (Z.scaleX(1), Z.scaleY(1)), ge({ ...M, objects: ue });
    },
    [ge, M]
  ), Ti = le.useCallback(
    (b, Z) => {
      const ue = M.objects.map(
        (ne) => ne.id === b ? { ...ne, x: Z.x(), y: Z.y() } : ne
      );
      ge({ ...M, objects: ue });
    },
    [ge, M]
  ), cd = {
    background: r || "transparent",
    border: "1px solid var(--st-gray-color, #ddd)",
    display: "block",
    cursor: d === "pan" || T.current ? "grab" : "crosshair"
  }, Wl = {
    id: "viewport-content",
    x: _e.x,
    y: _e.y,
    scaleX: _e.scale,
    scaleY: _e.scale,
    rotation: _e.rotation,
    offsetX: c / 2,
    offsetY: a / 2
  }, dd = Math.round(_e.scale * 100);
  return /* @__PURE__ */ ve.jsxs(
    "div",
    {
      style: { fontFamily: "var(--st-font, sans-serif)", width: c },
      children: [
        y && /* @__PURE__ */ ve.jsxs(
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
              /* @__PURE__ */ ve.jsx("button", { type: "button", onClick: ft, disabled: B <= 0, children: "Undo" }),
              /* @__PURE__ */ ve.jsx(
                "button",
                {
                  type: "button",
                  onClick: ht,
                  disabled: B >= G.length - 1,
                  children: "Redo"
                }
              ),
              /* @__PURE__ */ ve.jsx("button", { type: "button", onClick: Ue, children: "Clear" }),
              !l && /* @__PURE__ */ ve.jsx("button", { type: "button", onClick: A, children: "Send to Streamlit" }),
              S && /* @__PURE__ */ ve.jsxs(ve.Fragment, { children: [
                /* @__PURE__ */ ve.jsx("button", { type: "button", onClick: () => ae(ou), children: "Zoom +" }),
                /* @__PURE__ */ ve.jsx("button", { type: "button", onClick: () => ae(1 / ou), children: "Zoom −" }),
                /* @__PURE__ */ ve.jsx("button", { type: "button", onClick: () => Re(-dm), children: "Tilt ↶" }),
                /* @__PURE__ */ ve.jsx("button", { type: "button", onClick: () => Re(dm), children: "Tilt ↷" }),
                /* @__PURE__ */ ve.jsx("button", { type: "button", onClick: W, children: "Reset view" }),
                /* @__PURE__ */ ve.jsxs("span", { style: { fontSize: 12, opacity: 0.75 }, children: [
                  dd,
                  "% · ",
                  Math.round(_e.rotation),
                  "°"
                ] })
              ] }),
              /* @__PURE__ */ ve.jsxs("span", { style: { marginLeft: "auto", fontSize: 12, opacity: 0.7 }, children: [
                "mode: ",
                d
              ] })
            ]
          }
        ),
        /* @__PURE__ */ ve.jsxs(
          iw,
          {
            width: c,
            height: a,
            ref: v,
            style: cd,
            onMouseDown: Zn,
            onMousemove: an,
            onMouseup: Hl,
            onMouseLeave: Hl,
            onContextMenu: Pi,
            onDblClick: ld,
            onWheel: De,
            children: [
              /* @__PURE__ */ ve.jsx(cm, { listening: !1, children: /* @__PURE__ */ ve.jsx(hh, { ref: k, ...Wl, id: "viewport-bg", children: Q && /* @__PURE__ */ ve.jsx(
                nw,
                {
                  image: Q,
                  width: c,
                  height: a,
                  listening: !1
                }
              ) }) }),
              /* @__PURE__ */ ve.jsx(cm, { ref: E, children: /* @__PURE__ */ ve.jsxs(hh, { ref: N, ...Wl, children: [
                !Q && !!r && /* @__PURE__ */ ve.jsx(
                  Xi,
                  {
                    x: 0,
                    y: 0,
                    width: c,
                    height: a,
                    fill: r,
                    listening: !1
                  }
                ),
                ln && (d === "rect_crop" || xe) && /* @__PURE__ */ ve.jsx(hh, { id: "crop-chrome", listening: !1, children: /* @__PURE__ */ ve.jsx(
                  cw,
                  {
                    bounds: ln,
                    canvasWidth: c,
                    canvasHeight: a
                  }
                ) }),
                M.objects.map((b) => /* @__PURE__ */ ve.jsx(
                  fw,
                  {
                    obj: b,
                    draggable: d === "transform" || d === "rect_crop" && b.type === "crop",
                    onSelect: () => ad(b.id),
                    onDragEnd: (Z) => Ti(b.id, Z),
                    onTransformEnd: (Z) => ud(b.id, Z)
                  },
                  b.id
                )),
                (I == null ? void 0 : I.kind) === "freedraw" && /* @__PURE__ */ ve.jsx(
                  fl,
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
                (I == null ? void 0 : I.kind) === "line" && /* @__PURE__ */ ve.jsx(
                  fl,
                  {
                    points: [I.x1, I.y1, I.x2, I.y2],
                    stroke: n,
                    strokeWidth: e,
                    listening: !1
                  }
                ),
                (I == null ? void 0 : I.kind) === "rect" && /* @__PURE__ */ ve.jsx(
                  Xi,
                  {
                    x: Math.min(I.x, I.x + I.width),
                    y: Math.min(I.y, I.y + I.height),
                    width: Math.abs(I.width),
                    height: Math.abs(I.height),
                    stroke: n,
                    strokeWidth: e,
                    fill: d === "rect_crop" ? "transparent" : t,
                    dash: d === "rect_crop" ? [8, 4] : void 0,
                    listening: !1
                  }
                ),
                (I == null ? void 0 : I.kind) === "circle" && /* @__PURE__ */ ve.jsx(
                  gy,
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
                (I == null ? void 0 : I.kind) === "polygon" && I.points.length >= 2 && /* @__PURE__ */ ve.jsx(
                  fl,
                  {
                    points: I.points,
                    stroke: n,
                    strokeWidth: e,
                    fill: t,
                    closed: !1,
                    listening: !1
                  }
                ),
                (d === "transform" || d === "rect_crop") && /* @__PURE__ */ ve.jsx(
                  rw,
                  {
                    ref: w,
                    rotateEnabled: d === "transform",
                    enabledAnchors: [
                      "top-left",
                      "top-right",
                      "bottom-left",
                      "bottom-right",
                      "middle-left",
                      "middle-right",
                      "top-center",
                      "bottom-center"
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
}, fw = ({
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
  return t.type === "rect" || t.type === "crop" ? /* @__PURE__ */ ve.jsx(
    Xi,
    {
      ...l,
      x: t.x ?? 0,
      y: t.y ?? 0,
      width: t.width ?? 0,
      height: t.height ?? 0,
      stroke: t.stroke,
      strokeWidth: t.strokeWidth,
      fill: t.fill,
      dash: t.type === "crop" ? [8, 4] : void 0
    }
  ) : t.type === "circle" || t.type === "point" ? /* @__PURE__ */ ve.jsx(
    gy,
    {
      ...l,
      x: t.x ?? 0,
      y: t.y ?? 0,
      radius: t.radius ?? 3,
      stroke: t.stroke,
      strokeWidth: t.strokeWidth,
      fill: t.fill
    }
  ) : t.type === "line" || t.type === "freedraw" ? /* @__PURE__ */ ve.jsx(
    fl,
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
  ) : t.type === "polygon" ? /* @__PURE__ */ ve.jsx(
    fl,
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
}, au = /* @__PURE__ */ new WeakMap(), _w = (t) => {
  const { data: e, parentElement: n, setStateValue: r } = t, o = n.querySelector(".react-root");
  if (!o)
    throw new Error("Unexpected: React root element not found");
  let l = au.get(n);
  return l || (l = E4(o), au.set(n, l)), l.render(
    /* @__PURE__ */ ve.jsx(le.StrictMode, { children: /* @__PURE__ */ ve.jsx(
      dw,
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
    const a = au.get(n);
    a && (a.unmount(), au.delete(n));
  };
};
export {
  _w as default
};
