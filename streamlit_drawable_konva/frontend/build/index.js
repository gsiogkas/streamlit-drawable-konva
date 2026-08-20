var mg = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function lc(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var _m = { exports: {} }, ac = {}, Sm = { exports: {} }, Ce = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ol = Symbol.for("react.element"), z5 = Symbol.for("react.portal"), G5 = Symbol.for("react.fragment"), U5 = Symbol.for("react.strict_mode"), B5 = Symbol.for("react.profiler"), V5 = Symbol.for("react.provider"), H5 = Symbol.for("react.context"), j5 = Symbol.for("react.forward_ref"), W5 = Symbol.for("react.suspense"), Y5 = Symbol.for("react.memo"), K5 = Symbol.for("react.lazy"), yg = Symbol.iterator;
function X5(t) {
  return t === null || typeof t != "object" ? null : (t = yg && t[yg] || t["@@iterator"], typeof t == "function" ? t : null);
}
var wm = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, xm = Object.assign, Cm = {};
function ao(t, e, n) {
  this.props = t, this.context = e, this.refs = Cm, this.updater = n || wm;
}
ao.prototype.isReactComponent = {};
ao.prototype.setState = function(t, e) {
  if (typeof t != "object" && typeof t != "function" && t != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, t, e, "setState");
};
ao.prototype.forceUpdate = function(t) {
  this.updater.enqueueForceUpdate(this, t, "forceUpdate");
};
function km() {
}
km.prototype = ao.prototype;
function C0(t, e, n) {
  this.props = t, this.context = e, this.refs = Cm, this.updater = n || wm;
}
var k0 = C0.prototype = new km();
k0.constructor = C0;
xm(k0, ao.prototype);
k0.isPureReactComponent = !0;
var vg = Array.isArray, Em = Object.prototype.hasOwnProperty, E0 = { current: null }, Pm = { key: !0, ref: !0, __self: !0, __source: !0 };
function Tm(t, e, n) {
  var r, o = {}, l = null, a = null;
  if (e != null) for (r in e.ref !== void 0 && (a = e.ref), e.key !== void 0 && (l = "" + e.key), e) Em.call(e, r) && !Pm.hasOwnProperty(r) && (o[r] = e[r]);
  var c = arguments.length - 2;
  if (c === 1) o.children = n;
  else if (1 < c) {
    for (var d = Array(c), g = 0; g < c; g++) d[g] = arguments[g + 2];
    o.children = d;
  }
  if (t && t.defaultProps) for (r in c = t.defaultProps, c) o[r] === void 0 && (o[r] = c[r]);
  return { $$typeof: Ol, type: t, key: l, ref: a, props: o, _owner: E0.current };
}
function $5(t, e) {
  return { $$typeof: Ol, type: t.type, key: e, ref: t.ref, props: t.props, _owner: t._owner };
}
function P0(t) {
  return typeof t == "object" && t !== null && t.$$typeof === Ol;
}
function Q5(t) {
  var e = { "=": "=0", ":": "=2" };
  return "$" + t.replace(/[=:]/g, function(n) {
    return e[n];
  });
}
var _g = /\/+/g;
function zf(t, e) {
  return typeof t == "object" && t !== null && t.key != null ? Q5("" + t.key) : e.toString(36);
}
function yu(t, e, n, r, o) {
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
        case Ol:
        case z5:
          a = !0;
      }
  }
  if (a) return a = t, o = o(a), t = r === "" ? "." + zf(a, 0) : r, vg(o) ? (n = "", t != null && (n = t.replace(_g, "$&/") + "/"), yu(o, e, n, "", function(g) {
    return g;
  })) : o != null && (P0(o) && (o = $5(o, n + (!o.key || a && a.key === o.key ? "" : ("" + o.key).replace(_g, "$&/") + "/") + t)), e.push(o)), 1;
  if (a = 0, r = r === "" ? "." : r + ":", vg(t)) for (var c = 0; c < t.length; c++) {
    l = t[c];
    var d = r + zf(l, c);
    a += yu(l, e, n, d, o);
  }
  else if (d = X5(t), typeof d == "function") for (t = d.call(t), c = 0; !(l = t.next()).done; ) l = l.value, d = r + zf(l, c++), a += yu(l, e, n, d, o);
  else if (l === "object") throw e = String(t), Error("Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead.");
  return a;
}
function Wa(t, e, n) {
  if (t == null) return t;
  var r = [], o = 0;
  return yu(t, r, "", "", function(l) {
    return e.call(n, l, o++);
  }), r;
}
function b5(t) {
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
var qt = { current: null }, vu = { transition: null }, q5 = { ReactCurrentDispatcher: qt, ReactCurrentBatchConfig: vu, ReactCurrentOwner: E0 };
function Nm() {
  throw Error("act(...) is not supported in production builds of React.");
}
Ce.Children = { map: Wa, forEach: function(t, e, n) {
  Wa(t, function() {
    e.apply(this, arguments);
  }, n);
}, count: function(t) {
  var e = 0;
  return Wa(t, function() {
    e++;
  }), e;
}, toArray: function(t) {
  return Wa(t, function(e) {
    return e;
  }) || [];
}, only: function(t) {
  if (!P0(t)) throw Error("React.Children.only expected to receive a single React element child.");
  return t;
} };
Ce.Component = ao;
Ce.Fragment = G5;
Ce.Profiler = B5;
Ce.PureComponent = C0;
Ce.StrictMode = U5;
Ce.Suspense = W5;
Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = q5;
Ce.act = Nm;
Ce.cloneElement = function(t, e, n) {
  if (t == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + t + ".");
  var r = xm({}, t.props), o = t.key, l = t.ref, a = t._owner;
  if (e != null) {
    if (e.ref !== void 0 && (l = e.ref, a = E0.current), e.key !== void 0 && (o = "" + e.key), t.type && t.type.defaultProps) var c = t.type.defaultProps;
    for (d in e) Em.call(e, d) && !Pm.hasOwnProperty(d) && (r[d] = e[d] === void 0 && c !== void 0 ? c[d] : e[d]);
  }
  var d = arguments.length - 2;
  if (d === 1) r.children = n;
  else if (1 < d) {
    c = Array(d);
    for (var g = 0; g < d; g++) c[g] = arguments[g + 2];
    r.children = c;
  }
  return { $$typeof: Ol, type: t.type, key: o, ref: l, props: r, _owner: a };
};
Ce.createContext = function(t) {
  return t = { $$typeof: H5, _currentValue: t, _currentValue2: t, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, t.Provider = { $$typeof: V5, _context: t }, t.Consumer = t;
};
Ce.createElement = Tm;
Ce.createFactory = function(t) {
  var e = Tm.bind(null, t);
  return e.type = t, e;
};
Ce.createRef = function() {
  return { current: null };
};
Ce.forwardRef = function(t) {
  return { $$typeof: j5, render: t };
};
Ce.isValidElement = P0;
Ce.lazy = function(t) {
  return { $$typeof: K5, _payload: { _status: -1, _result: t }, _init: b5 };
};
Ce.memo = function(t, e) {
  return { $$typeof: Y5, type: t, compare: e === void 0 ? null : e };
};
Ce.startTransition = function(t) {
  var e = vu.transition;
  vu.transition = {};
  try {
    t();
  } finally {
    vu.transition = e;
  }
};
Ce.unstable_act = Nm;
Ce.useCallback = function(t, e) {
  return qt.current.useCallback(t, e);
};
Ce.useContext = function(t) {
  return qt.current.useContext(t);
};
Ce.useDebugValue = function() {
};
Ce.useDeferredValue = function(t) {
  return qt.current.useDeferredValue(t);
};
Ce.useEffect = function(t, e) {
  return qt.current.useEffect(t, e);
};
Ce.useId = function() {
  return qt.current.useId();
};
Ce.useImperativeHandle = function(t, e, n) {
  return qt.current.useImperativeHandle(t, e, n);
};
Ce.useInsertionEffect = function(t, e) {
  return qt.current.useInsertionEffect(t, e);
};
Ce.useLayoutEffect = function(t, e) {
  return qt.current.useLayoutEffect(t, e);
};
Ce.useMemo = function(t, e) {
  return qt.current.useMemo(t, e);
};
Ce.useReducer = function(t, e, n) {
  return qt.current.useReducer(t, e, n);
};
Ce.useRef = function(t) {
  return qt.current.useRef(t);
};
Ce.useState = function(t) {
  return qt.current.useState(t);
};
Ce.useSyncExternalStore = function(t, e, n) {
  return qt.current.useSyncExternalStore(t, e, n);
};
Ce.useTransition = function() {
  return qt.current.useTransition();
};
Ce.version = "18.3.1";
Sm.exports = Ce;
var ie = Sm.exports;
const Qt = /* @__PURE__ */ lc(ie);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Z5 = ie, J5 = Symbol.for("react.element"), ev = Symbol.for("react.fragment"), tv = Object.prototype.hasOwnProperty, nv = Z5.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, rv = { key: !0, ref: !0, __self: !0, __source: !0 };
function Rm(t, e, n) {
  var r, o = {}, l = null, a = null;
  n !== void 0 && (l = "" + n), e.key !== void 0 && (l = "" + e.key), e.ref !== void 0 && (a = e.ref);
  for (r in e) tv.call(e, r) && !rv.hasOwnProperty(r) && (o[r] = e[r]);
  if (t && t.defaultProps) for (r in e = t.defaultProps, e) o[r] === void 0 && (o[r] = e[r]);
  return { $$typeof: J5, type: t, key: l, ref: a, props: o, _owner: nv.current };
}
ac.Fragment = ev;
ac.jsx = Rm;
ac.jsxs = Rm;
_m.exports = ac;
var ge = _m.exports, Mm = { exports: {} }, _n = {}, Fm = { exports: {} }, Lm = {};
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
  function e(H, Z) {
    var Q = H.length;
    H.push(Z);
    e: for (; 0 < Q; ) {
      var b = Q - 1 >>> 1, se = H[b];
      if (0 < o(se, Z)) H[b] = Z, H[Q] = se, Q = b;
      else break e;
    }
  }
  function n(H) {
    return H.length === 0 ? null : H[0];
  }
  function r(H) {
    if (H.length === 0) return null;
    var Z = H[0], Q = H.pop();
    if (Q !== Z) {
      H[0] = Q;
      e: for (var b = 0, se = H.length, Ne = se >>> 1; b < Ne; ) {
        var je = 2 * (b + 1) - 1, mt = H[je], ze = je + 1, L = H[ze];
        if (0 > o(mt, Q)) ze < se && 0 > o(L, mt) ? (H[b] = L, H[ze] = Q, b = ze) : (H[b] = mt, H[je] = Q, b = je);
        else if (ze < se && 0 > o(L, Q)) H[b] = L, H[ze] = Q, b = ze;
        else break e;
      }
    }
    return Z;
  }
  function o(H, Z) {
    var Q = H.sortIndex - Z.sortIndex;
    return Q !== 0 ? Q : H.id - Z.id;
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
  var d = [], g = [], y = 1, w = null, _ = 3, C = !1, v = !1, E = !1, R = typeof setTimeout == "function" ? setTimeout : null, k = typeof clearTimeout == "function" ? clearTimeout : null, x = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(H) {
    for (var Z = n(g); Z !== null; ) {
      if (Z.callback === null) r(g);
      else if (Z.startTime <= H) r(g), Z.sortIndex = Z.expirationTime, e(d, Z);
      else break;
      Z = n(g);
    }
  }
  function S(H) {
    if (E = !1, p(H), !v) if (n(d) !== null) v = !0, he(N);
    else {
      var Z = n(g);
      Z !== null && de(S, Z.startTime - H);
    }
  }
  function N(H, Z) {
    v = !1, E && (E = !1, k(T), T = -1), C = !0;
    var Q = _;
    try {
      for (p(Z), w = n(d); w !== null && (!(w.expirationTime > Z) || H && !V()); ) {
        var b = w.callback;
        if (typeof b == "function") {
          w.callback = null, _ = w.priorityLevel;
          var se = b(w.expirationTime <= Z);
          Z = t.unstable_now(), typeof se == "function" ? w.callback = se : w === n(d) && r(d), p(Z);
        } else r(d);
        w = n(d);
      }
      if (w !== null) var Ne = !0;
      else {
        var je = n(g);
        je !== null && de(S, je.startTime - Z), Ne = !1;
      }
      return Ne;
    } finally {
      w = null, _ = Q, C = !1;
    }
  }
  var M = !1, A = null, T = -1, G = 5, F = -1;
  function V() {
    return !(t.unstable_now() - F < G);
  }
  function j() {
    if (A !== null) {
      var H = t.unstable_now();
      F = H;
      var Z = !0;
      try {
        Z = A(!0, H);
      } finally {
        Z ? q() : (M = !1, A = null);
      }
    } else M = !1;
  }
  var q;
  if (typeof x == "function") q = function() {
    x(j);
  };
  else if (typeof MessageChannel < "u") {
    var D = new MessageChannel(), X = D.port2;
    D.port1.onmessage = j, q = function() {
      X.postMessage(null);
    };
  } else q = function() {
    R(j, 0);
  };
  function he(H) {
    A = H, M || (M = !0, q());
  }
  function de(H, Z) {
    T = R(function() {
      H(t.unstable_now());
    }, Z);
  }
  t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(H) {
    H.callback = null;
  }, t.unstable_continueExecution = function() {
    v || C || (v = !0, he(N));
  }, t.unstable_forceFrameRate = function(H) {
    0 > H || 125 < H ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : G = 0 < H ? Math.floor(1e3 / H) : 5;
  }, t.unstable_getCurrentPriorityLevel = function() {
    return _;
  }, t.unstable_getFirstCallbackNode = function() {
    return n(d);
  }, t.unstable_next = function(H) {
    switch (_) {
      case 1:
      case 2:
      case 3:
        var Z = 3;
        break;
      default:
        Z = _;
    }
    var Q = _;
    _ = Z;
    try {
      return H();
    } finally {
      _ = Q;
    }
  }, t.unstable_pauseExecution = function() {
  }, t.unstable_requestPaint = function() {
  }, t.unstable_runWithPriority = function(H, Z) {
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
    var Q = _;
    _ = H;
    try {
      return Z();
    } finally {
      _ = Q;
    }
  }, t.unstable_scheduleCallback = function(H, Z, Q) {
    var b = t.unstable_now();
    switch (typeof Q == "object" && Q !== null ? (Q = Q.delay, Q = typeof Q == "number" && 0 < Q ? b + Q : b) : Q = b, H) {
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
    return se = Q + se, H = { id: y++, callback: Z, priorityLevel: H, startTime: Q, expirationTime: se, sortIndex: -1 }, Q > b ? (H.sortIndex = Q, e(g, H), n(d) === null && H === n(g) && (E ? (k(T), T = -1) : E = !0, de(S, Q - b))) : (H.sortIndex = se, e(d, H), v || C || (v = !0, he(N))), H;
  }, t.unstable_shouldYield = V, t.unstable_wrapCallback = function(H) {
    var Z = _;
    return function() {
      var Q = _;
      _ = Z;
      try {
        return H.apply(this, arguments);
      } finally {
        _ = Q;
      }
    };
  };
})(Lm);
Fm.exports = Lm;
var rl = Fm.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var iv = ie, vn = rl;
function K(t) {
  for (var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, n = 1; n < arguments.length; n++) e += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Am = /* @__PURE__ */ new Set(), pl = {};
function rs(t, e) {
  Zs(t, e), Zs(t + "Capture", e);
}
function Zs(t, e) {
  for (pl[t] = e, t = 0; t < e.length; t++) Am.add(e[t]);
}
var Fr = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), wh = Object.prototype.hasOwnProperty, sv = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Sg = {}, wg = {};
function ov(t) {
  return wh.call(wg, t) ? !0 : wh.call(Sg, t) ? !1 : sv.test(t) ? wg[t] = !0 : (Sg[t] = !0, !1);
}
function lv(t, e, n, r) {
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
function av(t, e, n, r) {
  if (e === null || typeof e > "u" || lv(t, e, n, r)) return !0;
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
function Zt(t, e, n, r, o, l, a) {
  this.acceptsBooleans = e === 2 || e === 3 || e === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = t, this.type = e, this.sanitizeURL = l, this.removeEmptyString = a;
}
var It = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t) {
  It[t] = new Zt(t, 0, !1, t, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(t) {
  var e = t[0];
  It[e] = new Zt(e, 1, !1, t[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(t) {
  It[t] = new Zt(t, 2, !1, t.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(t) {
  It[t] = new Zt(t, 2, !1, t, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t) {
  It[t] = new Zt(t, 3, !1, t.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(t) {
  It[t] = new Zt(t, 3, !0, t, null, !1, !1);
});
["capture", "download"].forEach(function(t) {
  It[t] = new Zt(t, 4, !1, t, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(t) {
  It[t] = new Zt(t, 6, !1, t, null, !1, !1);
});
["rowSpan", "start"].forEach(function(t) {
  It[t] = new Zt(t, 5, !1, t.toLowerCase(), null, !1, !1);
});
var T0 = /[\-:]([a-z])/g;
function N0(t) {
  return t[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t) {
  var e = t.replace(
    T0,
    N0
  );
  It[e] = new Zt(e, 1, !1, t, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t) {
  var e = t.replace(T0, N0);
  It[e] = new Zt(e, 1, !1, t, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(t) {
  var e = t.replace(T0, N0);
  It[e] = new Zt(e, 1, !1, t, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(t) {
  It[t] = new Zt(t, 1, !1, t.toLowerCase(), null, !1, !1);
});
It.xlinkHref = new Zt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(t) {
  It[t] = new Zt(t, 1, !1, t.toLowerCase(), null, !0, !0);
});
function R0(t, e, n, r) {
  var o = It.hasOwnProperty(e) ? It[e] : null;
  (o !== null ? o.type !== 0 : r || !(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N") && (av(e, n, o, r) && (n = null), r || o === null ? ov(e) && (n === null ? t.removeAttribute(e) : t.setAttribute(e, "" + n)) : o.mustUseProperty ? t[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (e = o.attributeName, r = o.attributeNamespace, n === null ? t.removeAttribute(e) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? t.setAttributeNS(r, e, n) : t.setAttribute(e, n))));
}
var Ir = iv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Ya = Symbol.for("react.element"), Os = Symbol.for("react.portal"), Is = Symbol.for("react.fragment"), M0 = Symbol.for("react.strict_mode"), xh = Symbol.for("react.profiler"), Om = Symbol.for("react.provider"), Im = Symbol.for("react.context"), F0 = Symbol.for("react.forward_ref"), Ch = Symbol.for("react.suspense"), kh = Symbol.for("react.suspense_list"), L0 = Symbol.for("react.memo"), ei = Symbol.for("react.lazy"), Dm = Symbol.for("react.offscreen"), xg = Symbol.iterator;
function Uo(t) {
  return t === null || typeof t != "object" ? null : (t = xg && t[xg] || t["@@iterator"], typeof t == "function" ? t : null);
}
var it = Object.assign, Gf;
function Zo(t) {
  if (Gf === void 0) try {
    throw Error();
  } catch (n) {
    var e = n.stack.trim().match(/\n( *(at )?)/);
    Gf = e && e[1] || "";
  }
  return `
` + Gf + t;
}
var Uf = !1;
function Bf(t, e) {
  if (!t || Uf) return "";
  Uf = !0;
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
    Uf = !1, Error.prepareStackTrace = n;
  }
  return (t = t ? t.displayName || t.name : "") ? Zo(t) : "";
}
function uv(t) {
  switch (t.tag) {
    case 5:
      return Zo(t.type);
    case 16:
      return Zo("Lazy");
    case 13:
      return Zo("Suspense");
    case 19:
      return Zo("SuspenseList");
    case 0:
    case 2:
    case 15:
      return t = Bf(t.type, !1), t;
    case 11:
      return t = Bf(t.type.render, !1), t;
    case 1:
      return t = Bf(t.type, !0), t;
    default:
      return "";
  }
}
function Eh(t) {
  if (t == null) return null;
  if (typeof t == "function") return t.displayName || t.name || null;
  if (typeof t == "string") return t;
  switch (t) {
    case Is:
      return "Fragment";
    case Os:
      return "Portal";
    case xh:
      return "Profiler";
    case M0:
      return "StrictMode";
    case Ch:
      return "Suspense";
    case kh:
      return "SuspenseList";
  }
  if (typeof t == "object") switch (t.$$typeof) {
    case Im:
      return (t.displayName || "Context") + ".Consumer";
    case Om:
      return (t._context.displayName || "Context") + ".Provider";
    case F0:
      var e = t.render;
      return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
    case L0:
      return e = t.displayName || null, e !== null ? e : Eh(t.type) || "Memo";
    case ei:
      e = t._payload, t = t._init;
      try {
        return Eh(t(e));
      } catch {
      }
  }
  return null;
}
function cv(t) {
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
      return Eh(e);
    case 8:
      return e === M0 ? "StrictMode" : "Mode";
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
function pi(t) {
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
function zm(t) {
  var e = t.type;
  return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
}
function dv(t) {
  var e = zm(t) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e), r = "" + t[e];
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
function Ka(t) {
  t._valueTracker || (t._valueTracker = dv(t));
}
function Gm(t) {
  if (!t) return !1;
  var e = t._valueTracker;
  if (!e) return !0;
  var n = e.getValue(), r = "";
  return t && (r = zm(t) ? t.checked ? "true" : "false" : t.value), t = r, t !== n ? (e.setValue(t), !0) : !1;
}
function Lu(t) {
  if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
  try {
    return t.activeElement || t.body;
  } catch {
    return t.body;
  }
}
function Ph(t, e) {
  var n = e.checked;
  return it({}, e, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? t._wrapperState.initialChecked });
}
function Cg(t, e) {
  var n = e.defaultValue == null ? "" : e.defaultValue, r = e.checked != null ? e.checked : e.defaultChecked;
  n = pi(e.value != null ? e.value : n), t._wrapperState = { initialChecked: r, initialValue: n, controlled: e.type === "checkbox" || e.type === "radio" ? e.checked != null : e.value != null };
}
function Um(t, e) {
  e = e.checked, e != null && R0(t, "checked", e, !1);
}
function Th(t, e) {
  Um(t, e);
  var n = pi(e.value), r = e.type;
  if (n != null) r === "number" ? (n === 0 && t.value === "" || t.value != n) && (t.value = "" + n) : t.value !== "" + n && (t.value = "" + n);
  else if (r === "submit" || r === "reset") {
    t.removeAttribute("value");
    return;
  }
  e.hasOwnProperty("value") ? Nh(t, e.type, n) : e.hasOwnProperty("defaultValue") && Nh(t, e.type, pi(e.defaultValue)), e.checked == null && e.defaultChecked != null && (t.defaultChecked = !!e.defaultChecked);
}
function kg(t, e, n) {
  if (e.hasOwnProperty("value") || e.hasOwnProperty("defaultValue")) {
    var r = e.type;
    if (!(r !== "submit" && r !== "reset" || e.value !== void 0 && e.value !== null)) return;
    e = "" + t._wrapperState.initialValue, n || e === t.value || (t.value = e), t.defaultValue = e;
  }
  n = t.name, n !== "" && (t.name = ""), t.defaultChecked = !!t._wrapperState.initialChecked, n !== "" && (t.name = n);
}
function Nh(t, e, n) {
  (e !== "number" || Lu(t.ownerDocument) !== t) && (n == null ? t.defaultValue = "" + t._wrapperState.initialValue : t.defaultValue !== "" + n && (t.defaultValue = "" + n));
}
var Jo = Array.isArray;
function Ks(t, e, n, r) {
  if (t = t.options, e) {
    e = {};
    for (var o = 0; o < n.length; o++) e["$" + n[o]] = !0;
    for (n = 0; n < t.length; n++) o = e.hasOwnProperty("$" + t[n].value), t[n].selected !== o && (t[n].selected = o), o && r && (t[n].defaultSelected = !0);
  } else {
    for (n = "" + pi(n), e = null, o = 0; o < t.length; o++) {
      if (t[o].value === n) {
        t[o].selected = !0, r && (t[o].defaultSelected = !0);
        return;
      }
      e !== null || t[o].disabled || (e = t[o]);
    }
    e !== null && (e.selected = !0);
  }
}
function Rh(t, e) {
  if (e.dangerouslySetInnerHTML != null) throw Error(K(91));
  return it({}, e, { value: void 0, defaultValue: void 0, children: "" + t._wrapperState.initialValue });
}
function Eg(t, e) {
  var n = e.value;
  if (n == null) {
    if (n = e.children, e = e.defaultValue, n != null) {
      if (e != null) throw Error(K(92));
      if (Jo(n)) {
        if (1 < n.length) throw Error(K(93));
        n = n[0];
      }
      e = n;
    }
    e == null && (e = ""), n = e;
  }
  t._wrapperState = { initialValue: pi(n) };
}
function Bm(t, e) {
  var n = pi(e.value), r = pi(e.defaultValue);
  n != null && (n = "" + n, n !== t.value && (t.value = n), e.defaultValue == null && t.defaultValue !== n && (t.defaultValue = n)), r != null && (t.defaultValue = "" + r);
}
function Pg(t) {
  var e = t.textContent;
  e === t._wrapperState.initialValue && e !== "" && e !== null && (t.value = e);
}
function Vm(t) {
  switch (t) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Mh(t, e) {
  return t == null || t === "http://www.w3.org/1999/xhtml" ? Vm(e) : t === "http://www.w3.org/2000/svg" && e === "foreignObject" ? "http://www.w3.org/1999/xhtml" : t;
}
var Xa, Hm = function(t) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(e, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return t(e, n, r, o);
    });
  } : t;
}(function(t, e) {
  if (t.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in t) t.innerHTML = e;
  else {
    for (Xa = Xa || document.createElement("div"), Xa.innerHTML = "<svg>" + e.valueOf().toString() + "</svg>", e = Xa.firstChild; t.firstChild; ) t.removeChild(t.firstChild);
    for (; e.firstChild; ) t.appendChild(e.firstChild);
  }
});
function gl(t, e) {
  if (e) {
    var n = t.firstChild;
    if (n && n === t.lastChild && n.nodeType === 3) {
      n.nodeValue = e;
      return;
    }
  }
  t.textContent = e;
}
var il = {
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
}, fv = ["Webkit", "ms", "Moz", "O"];
Object.keys(il).forEach(function(t) {
  fv.forEach(function(e) {
    e = e + t.charAt(0).toUpperCase() + t.substring(1), il[e] = il[t];
  });
});
function jm(t, e, n) {
  return e == null || typeof e == "boolean" || e === "" ? "" : n || typeof e != "number" || e === 0 || il.hasOwnProperty(t) && il[t] ? ("" + e).trim() : e + "px";
}
function Wm(t, e) {
  t = t.style;
  for (var n in e) if (e.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, o = jm(n, e[n], r);
    n === "float" && (n = "cssFloat"), r ? t.setProperty(n, o) : t[n] = o;
  }
}
var hv = it({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Fh(t, e) {
  if (e) {
    if (hv[t] && (e.children != null || e.dangerouslySetInnerHTML != null)) throw Error(K(137, t));
    if (e.dangerouslySetInnerHTML != null) {
      if (e.children != null) throw Error(K(60));
      if (typeof e.dangerouslySetInnerHTML != "object" || !("__html" in e.dangerouslySetInnerHTML)) throw Error(K(61));
    }
    if (e.style != null && typeof e.style != "object") throw Error(K(62));
  }
}
function Lh(t, e) {
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
var Ah = null;
function A0(t) {
  return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
}
var Oh = null, Xs = null, $s = null;
function Tg(t) {
  if (t = zl(t)) {
    if (typeof Oh != "function") throw Error(K(280));
    var e = t.stateNode;
    e && (e = hc(e), Oh(t.stateNode, t.type, e));
  }
}
function Ym(t) {
  Xs ? $s ? $s.push(t) : $s = [t] : Xs = t;
}
function Km() {
  if (Xs) {
    var t = Xs, e = $s;
    if ($s = Xs = null, Tg(t), e) for (t = 0; t < e.length; t++) Tg(e[t]);
  }
}
function Xm(t, e) {
  return t(e);
}
function $m() {
}
var Vf = !1;
function Qm(t, e, n) {
  if (Vf) return t(e, n);
  Vf = !0;
  try {
    return Xm(t, e, n);
  } finally {
    Vf = !1, (Xs !== null || $s !== null) && ($m(), Km());
  }
}
function ml(t, e) {
  var n = t.stateNode;
  if (n === null) return null;
  var r = hc(n);
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
var Ih = !1;
if (Fr) try {
  var Bo = {};
  Object.defineProperty(Bo, "passive", { get: function() {
    Ih = !0;
  } }), window.addEventListener("test", Bo, Bo), window.removeEventListener("test", Bo, Bo);
} catch {
  Ih = !1;
}
function pv(t, e, n, r, o, l, a, c, d) {
  var g = Array.prototype.slice.call(arguments, 3);
  try {
    e.apply(n, g);
  } catch (y) {
    this.onError(y);
  }
}
var sl = !1, Au = null, Ou = !1, Dh = null, gv = { onError: function(t) {
  sl = !0, Au = t;
} };
function mv(t, e, n, r, o, l, a, c, d) {
  sl = !1, Au = null, pv.apply(gv, arguments);
}
function yv(t, e, n, r, o, l, a, c, d) {
  if (mv.apply(this, arguments), sl) {
    if (sl) {
      var g = Au;
      sl = !1, Au = null;
    } else throw Error(K(198));
    Ou || (Ou = !0, Dh = g);
  }
}
function is(t) {
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
function bm(t) {
  if (t.tag === 13) {
    var e = t.memoizedState;
    if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
  }
  return null;
}
function Ng(t) {
  if (is(t) !== t) throw Error(K(188));
}
function vv(t) {
  var e = t.alternate;
  if (!e) {
    if (e = is(t), e === null) throw Error(K(188));
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
        if (l === n) return Ng(o), t;
        if (l === r) return Ng(o), e;
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
function qm(t) {
  return t = vv(t), t !== null ? Zm(t) : null;
}
function Zm(t) {
  if (t.tag === 5 || t.tag === 6) return t;
  for (t = t.child; t !== null; ) {
    var e = Zm(t);
    if (e !== null) return e;
    t = t.sibling;
  }
  return null;
}
var Jm = vn.unstable_scheduleCallback, Rg = vn.unstable_cancelCallback, _v = vn.unstable_shouldYield, Sv = vn.unstable_requestPaint, dt = vn.unstable_now, wv = vn.unstable_getCurrentPriorityLevel, O0 = vn.unstable_ImmediatePriority, ey = vn.unstable_UserBlockingPriority, Iu = vn.unstable_NormalPriority, xv = vn.unstable_LowPriority, ty = vn.unstable_IdlePriority, uc = null, fr = null;
function Cv(t) {
  if (fr && typeof fr.onCommitFiberRoot == "function") try {
    fr.onCommitFiberRoot(uc, t, void 0, (t.current.flags & 128) === 128);
  } catch {
  }
}
var Qn = Math.clz32 ? Math.clz32 : Pv, kv = Math.log, Ev = Math.LN2;
function Pv(t) {
  return t >>>= 0, t === 0 ? 32 : 31 - (kv(t) / Ev | 0) | 0;
}
var $a = 64, Qa = 4194304;
function el(t) {
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
function Du(t, e) {
  var n = t.pendingLanes;
  if (n === 0) return 0;
  var r = 0, o = t.suspendedLanes, l = t.pingedLanes, a = n & 268435455;
  if (a !== 0) {
    var c = a & ~o;
    c !== 0 ? r = el(c) : (l &= a, l !== 0 && (r = el(l)));
  } else a = n & ~o, a !== 0 ? r = el(a) : l !== 0 && (r = el(l));
  if (r === 0) return 0;
  if (e !== 0 && e !== r && !(e & o) && (o = r & -r, l = e & -e, o >= l || o === 16 && (l & 4194240) !== 0)) return e;
  if (r & 4 && (r |= n & 16), e = t.entangledLanes, e !== 0) for (t = t.entanglements, e &= r; 0 < e; ) n = 31 - Qn(e), o = 1 << n, r |= t[n], e &= ~o;
  return r;
}
function Tv(t, e) {
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
function Nv(t, e) {
  for (var n = t.suspendedLanes, r = t.pingedLanes, o = t.expirationTimes, l = t.pendingLanes; 0 < l; ) {
    var a = 31 - Qn(l), c = 1 << a, d = o[a];
    d === -1 ? (!(c & n) || c & r) && (o[a] = Tv(c, e)) : d <= e && (t.expiredLanes |= c), l &= ~c;
  }
}
function zh(t) {
  return t = t.pendingLanes & -1073741825, t !== 0 ? t : t & 1073741824 ? 1073741824 : 0;
}
function ny() {
  var t = $a;
  return $a <<= 1, !($a & 4194240) && ($a = 64), t;
}
function Hf(t) {
  for (var e = [], n = 0; 31 > n; n++) e.push(t);
  return e;
}
function Il(t, e, n) {
  t.pendingLanes |= e, e !== 536870912 && (t.suspendedLanes = 0, t.pingedLanes = 0), t = t.eventTimes, e = 31 - Qn(e), t[e] = n;
}
function Rv(t, e) {
  var n = t.pendingLanes & ~e;
  t.pendingLanes = e, t.suspendedLanes = 0, t.pingedLanes = 0, t.expiredLanes &= e, t.mutableReadLanes &= e, t.entangledLanes &= e, e = t.entanglements;
  var r = t.eventTimes;
  for (t = t.expirationTimes; 0 < n; ) {
    var o = 31 - Qn(n), l = 1 << o;
    e[o] = 0, r[o] = -1, t[o] = -1, n &= ~l;
  }
}
function I0(t, e) {
  var n = t.entangledLanes |= e;
  for (t = t.entanglements; n; ) {
    var r = 31 - Qn(n), o = 1 << r;
    o & e | t[r] & e && (t[r] |= e), n &= ~o;
  }
}
var De = 0;
function ry(t) {
  return t &= -t, 1 < t ? 4 < t ? t & 268435455 ? 16 : 536870912 : 4 : 1;
}
var iy, D0, sy, oy, ly, Gh = !1, ba = [], oi = null, li = null, ai = null, yl = /* @__PURE__ */ new Map(), vl = /* @__PURE__ */ new Map(), ni = [], Mv = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Mg(t, e) {
  switch (t) {
    case "focusin":
    case "focusout":
      oi = null;
      break;
    case "dragenter":
    case "dragleave":
      li = null;
      break;
    case "mouseover":
    case "mouseout":
      ai = null;
      break;
    case "pointerover":
    case "pointerout":
      yl.delete(e.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      vl.delete(e.pointerId);
  }
}
function Vo(t, e, n, r, o, l) {
  return t === null || t.nativeEvent !== l ? (t = { blockedOn: e, domEventName: n, eventSystemFlags: r, nativeEvent: l, targetContainers: [o] }, e !== null && (e = zl(e), e !== null && D0(e)), t) : (t.eventSystemFlags |= r, e = t.targetContainers, o !== null && e.indexOf(o) === -1 && e.push(o), t);
}
function Fv(t, e, n, r, o) {
  switch (e) {
    case "focusin":
      return oi = Vo(oi, t, e, n, r, o), !0;
    case "dragenter":
      return li = Vo(li, t, e, n, r, o), !0;
    case "mouseover":
      return ai = Vo(ai, t, e, n, r, o), !0;
    case "pointerover":
      var l = o.pointerId;
      return yl.set(l, Vo(yl.get(l) || null, t, e, n, r, o)), !0;
    case "gotpointercapture":
      return l = o.pointerId, vl.set(l, Vo(vl.get(l) || null, t, e, n, r, o)), !0;
  }
  return !1;
}
function ay(t) {
  var e = Ki(t.target);
  if (e !== null) {
    var n = is(e);
    if (n !== null) {
      if (e = n.tag, e === 13) {
        if (e = bm(n), e !== null) {
          t.blockedOn = e, ly(t.priority, function() {
            sy(n);
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
function _u(t) {
  if (t.blockedOn !== null) return !1;
  for (var e = t.targetContainers; 0 < e.length; ) {
    var n = Uh(t.domEventName, t.eventSystemFlags, e[0], t.nativeEvent);
    if (n === null) {
      n = t.nativeEvent;
      var r = new n.constructor(n.type, n);
      Ah = r, n.target.dispatchEvent(r), Ah = null;
    } else return e = zl(n), e !== null && D0(e), t.blockedOn = n, !1;
    e.shift();
  }
  return !0;
}
function Fg(t, e, n) {
  _u(t) && n.delete(e);
}
function Lv() {
  Gh = !1, oi !== null && _u(oi) && (oi = null), li !== null && _u(li) && (li = null), ai !== null && _u(ai) && (ai = null), yl.forEach(Fg), vl.forEach(Fg);
}
function Ho(t, e) {
  t.blockedOn === e && (t.blockedOn = null, Gh || (Gh = !0, vn.unstable_scheduleCallback(vn.unstable_NormalPriority, Lv)));
}
function _l(t) {
  function e(o) {
    return Ho(o, t);
  }
  if (0 < ba.length) {
    Ho(ba[0], t);
    for (var n = 1; n < ba.length; n++) {
      var r = ba[n];
      r.blockedOn === t && (r.blockedOn = null);
    }
  }
  for (oi !== null && Ho(oi, t), li !== null && Ho(li, t), ai !== null && Ho(ai, t), yl.forEach(e), vl.forEach(e), n = 0; n < ni.length; n++) r = ni[n], r.blockedOn === t && (r.blockedOn = null);
  for (; 0 < ni.length && (n = ni[0], n.blockedOn === null); ) ay(n), n.blockedOn === null && ni.shift();
}
var Qs = Ir.ReactCurrentBatchConfig, zu = !0;
function Av(t, e, n, r) {
  var o = De, l = Qs.transition;
  Qs.transition = null;
  try {
    De = 1, z0(t, e, n, r);
  } finally {
    De = o, Qs.transition = l;
  }
}
function Ov(t, e, n, r) {
  var o = De, l = Qs.transition;
  Qs.transition = null;
  try {
    De = 4, z0(t, e, n, r);
  } finally {
    De = o, Qs.transition = l;
  }
}
function z0(t, e, n, r) {
  if (zu) {
    var o = Uh(t, e, n, r);
    if (o === null) Zf(t, e, r, Gu, n), Mg(t, r);
    else if (Fv(o, t, e, n, r)) r.stopPropagation();
    else if (Mg(t, r), e & 4 && -1 < Mv.indexOf(t)) {
      for (; o !== null; ) {
        var l = zl(o);
        if (l !== null && iy(l), l = Uh(t, e, n, r), l === null && Zf(t, e, r, Gu, n), l === o) break;
        o = l;
      }
      o !== null && r.stopPropagation();
    } else Zf(t, e, r, null, n);
  }
}
var Gu = null;
function Uh(t, e, n, r) {
  if (Gu = null, t = A0(r), t = Ki(t), t !== null) if (e = is(t), e === null) t = null;
  else if (n = e.tag, n === 13) {
    if (t = bm(e), t !== null) return t;
    t = null;
  } else if (n === 3) {
    if (e.stateNode.current.memoizedState.isDehydrated) return e.tag === 3 ? e.stateNode.containerInfo : null;
    t = null;
  } else e !== t && (t = null);
  return Gu = t, null;
}
function uy(t) {
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
      switch (wv()) {
        case O0:
          return 1;
        case ey:
          return 4;
        case Iu:
        case xv:
          return 16;
        case ty:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var ii = null, G0 = null, Su = null;
function cy() {
  if (Su) return Su;
  var t, e = G0, n = e.length, r, o = "value" in ii ? ii.value : ii.textContent, l = o.length;
  for (t = 0; t < n && e[t] === o[t]; t++) ;
  var a = n - t;
  for (r = 1; r <= a && e[n - r] === o[l - r]; r++) ;
  return Su = o.slice(t, 1 < r ? 1 - r : void 0);
}
function wu(t) {
  var e = t.keyCode;
  return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
}
function qa() {
  return !0;
}
function Lg() {
  return !1;
}
function Sn(t) {
  function e(n, r, o, l, a) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = l, this.target = a, this.currentTarget = null;
    for (var c in t) t.hasOwnProperty(c) && (n = t[c], this[c] = n ? n(l) : l[c]);
    return this.isDefaultPrevented = (l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1) ? qa : Lg, this.isPropagationStopped = Lg, this;
  }
  return it(e.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = qa);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = qa);
  }, persist: function() {
  }, isPersistent: qa }), e;
}
var uo = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(t) {
  return t.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, U0 = Sn(uo), Dl = it({}, uo, { view: 0, detail: 0 }), Iv = Sn(Dl), jf, Wf, jo, cc = it({}, Dl, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: B0, button: 0, buttons: 0, relatedTarget: function(t) {
  return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
}, movementX: function(t) {
  return "movementX" in t ? t.movementX : (t !== jo && (jo && t.type === "mousemove" ? (jf = t.screenX - jo.screenX, Wf = t.screenY - jo.screenY) : Wf = jf = 0, jo = t), jf);
}, movementY: function(t) {
  return "movementY" in t ? t.movementY : Wf;
} }), Ag = Sn(cc), Dv = it({}, cc, { dataTransfer: 0 }), zv = Sn(Dv), Gv = it({}, Dl, { relatedTarget: 0 }), Yf = Sn(Gv), Uv = it({}, uo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Bv = Sn(Uv), Vv = it({}, uo, { clipboardData: function(t) {
  return "clipboardData" in t ? t.clipboardData : window.clipboardData;
} }), Hv = Sn(Vv), jv = it({}, uo, { data: 0 }), Og = Sn(jv), Wv = {
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
}, Yv = {
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
}, Kv = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Xv(t) {
  var e = this.nativeEvent;
  return e.getModifierState ? e.getModifierState(t) : (t = Kv[t]) ? !!e[t] : !1;
}
function B0() {
  return Xv;
}
var $v = it({}, Dl, { key: function(t) {
  if (t.key) {
    var e = Wv[t.key] || t.key;
    if (e !== "Unidentified") return e;
  }
  return t.type === "keypress" ? (t = wu(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? Yv[t.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: B0, charCode: function(t) {
  return t.type === "keypress" ? wu(t) : 0;
}, keyCode: function(t) {
  return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
}, which: function(t) {
  return t.type === "keypress" ? wu(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
} }), Qv = Sn($v), bv = it({}, cc, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Ig = Sn(bv), qv = it({}, Dl, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: B0 }), Zv = Sn(qv), Jv = it({}, uo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), e6 = Sn(Jv), t6 = it({}, cc, {
  deltaX: function(t) {
    return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
  },
  deltaY: function(t) {
    return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), n6 = Sn(t6), r6 = [9, 13, 27, 32], V0 = Fr && "CompositionEvent" in window, ol = null;
Fr && "documentMode" in document && (ol = document.documentMode);
var i6 = Fr && "TextEvent" in window && !ol, dy = Fr && (!V0 || ol && 8 < ol && 11 >= ol), Dg = " ", zg = !1;
function fy(t, e) {
  switch (t) {
    case "keyup":
      return r6.indexOf(e.keyCode) !== -1;
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
function hy(t) {
  return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
}
var Ds = !1;
function s6(t, e) {
  switch (t) {
    case "compositionend":
      return hy(e);
    case "keypress":
      return e.which !== 32 ? null : (zg = !0, Dg);
    case "textInput":
      return t = e.data, t === Dg && zg ? null : t;
    default:
      return null;
  }
}
function o6(t, e) {
  if (Ds) return t === "compositionend" || !V0 && fy(t, e) ? (t = cy(), Su = G0 = ii = null, Ds = !1, t) : null;
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
      return dy && e.locale !== "ko" ? null : e.data;
    default:
      return null;
  }
}
var l6 = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Gg(t) {
  var e = t && t.nodeName && t.nodeName.toLowerCase();
  return e === "input" ? !!l6[t.type] : e === "textarea";
}
function py(t, e, n, r) {
  Ym(r), e = Uu(e, "onChange"), 0 < e.length && (n = new U0("onChange", "change", null, n, r), t.push({ event: n, listeners: e }));
}
var ll = null, Sl = null;
function a6(t) {
  Ey(t, 0);
}
function dc(t) {
  var e = Us(t);
  if (Gm(e)) return t;
}
function u6(t, e) {
  if (t === "change") return e;
}
var gy = !1;
if (Fr) {
  var Kf;
  if (Fr) {
    var Xf = "oninput" in document;
    if (!Xf) {
      var Ug = document.createElement("div");
      Ug.setAttribute("oninput", "return;"), Xf = typeof Ug.oninput == "function";
    }
    Kf = Xf;
  } else Kf = !1;
  gy = Kf && (!document.documentMode || 9 < document.documentMode);
}
function Bg() {
  ll && (ll.detachEvent("onpropertychange", my), Sl = ll = null);
}
function my(t) {
  if (t.propertyName === "value" && dc(Sl)) {
    var e = [];
    py(e, Sl, t, A0(t)), Qm(a6, e);
  }
}
function c6(t, e, n) {
  t === "focusin" ? (Bg(), ll = e, Sl = n, ll.attachEvent("onpropertychange", my)) : t === "focusout" && Bg();
}
function d6(t) {
  if (t === "selectionchange" || t === "keyup" || t === "keydown") return dc(Sl);
}
function f6(t, e) {
  if (t === "click") return dc(e);
}
function h6(t, e) {
  if (t === "input" || t === "change") return dc(e);
}
function p6(t, e) {
  return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
}
var Zn = typeof Object.is == "function" ? Object.is : p6;
function wl(t, e) {
  if (Zn(t, e)) return !0;
  if (typeof t != "object" || t === null || typeof e != "object" || e === null) return !1;
  var n = Object.keys(t), r = Object.keys(e);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!wh.call(e, o) || !Zn(t[o], e[o])) return !1;
  }
  return !0;
}
function Vg(t) {
  for (; t && t.firstChild; ) t = t.firstChild;
  return t;
}
function Hg(t, e) {
  var n = Vg(t);
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
    n = Vg(n);
  }
}
function yy(t, e) {
  return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? yy(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1;
}
function vy() {
  for (var t = window, e = Lu(); e instanceof t.HTMLIFrameElement; ) {
    try {
      var n = typeof e.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) t = e.contentWindow;
    else break;
    e = Lu(t.document);
  }
  return e;
}
function H0(t) {
  var e = t && t.nodeName && t.nodeName.toLowerCase();
  return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
}
function g6(t) {
  var e = vy(), n = t.focusedElem, r = t.selectionRange;
  if (e !== n && n && n.ownerDocument && yy(n.ownerDocument.documentElement, n)) {
    if (r !== null && H0(n)) {
      if (e = r.start, t = r.end, t === void 0 && (t = e), "selectionStart" in n) n.selectionStart = e, n.selectionEnd = Math.min(t, n.value.length);
      else if (t = (e = n.ownerDocument || document) && e.defaultView || window, t.getSelection) {
        t = t.getSelection();
        var o = n.textContent.length, l = Math.min(r.start, o);
        r = r.end === void 0 ? l : Math.min(r.end, o), !t.extend && l > r && (o = r, r = l, l = o), o = Hg(n, l);
        var a = Hg(
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
var m6 = Fr && "documentMode" in document && 11 >= document.documentMode, zs = null, Bh = null, al = null, Vh = !1;
function jg(t, e, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Vh || zs == null || zs !== Lu(r) || (r = zs, "selectionStart" in r && H0(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), al && wl(al, r) || (al = r, r = Uu(Bh, "onSelect"), 0 < r.length && (e = new U0("onSelect", "select", null, e, n), t.push({ event: e, listeners: r }), e.target = zs)));
}
function Za(t, e) {
  var n = {};
  return n[t.toLowerCase()] = e.toLowerCase(), n["Webkit" + t] = "webkit" + e, n["Moz" + t] = "moz" + e, n;
}
var Gs = { animationend: Za("Animation", "AnimationEnd"), animationiteration: Za("Animation", "AnimationIteration"), animationstart: Za("Animation", "AnimationStart"), transitionend: Za("Transition", "TransitionEnd") }, $f = {}, _y = {};
Fr && (_y = document.createElement("div").style, "AnimationEvent" in window || (delete Gs.animationend.animation, delete Gs.animationiteration.animation, delete Gs.animationstart.animation), "TransitionEvent" in window || delete Gs.transitionend.transition);
function fc(t) {
  if ($f[t]) return $f[t];
  if (!Gs[t]) return t;
  var e = Gs[t], n;
  for (n in e) if (e.hasOwnProperty(n) && n in _y) return $f[t] = e[n];
  return t;
}
var Sy = fc("animationend"), wy = fc("animationiteration"), xy = fc("animationstart"), Cy = fc("transitionend"), ky = /* @__PURE__ */ new Map(), Wg = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function yi(t, e) {
  ky.set(t, e), rs(e, [t]);
}
for (var Qf = 0; Qf < Wg.length; Qf++) {
  var bf = Wg[Qf], y6 = bf.toLowerCase(), v6 = bf[0].toUpperCase() + bf.slice(1);
  yi(y6, "on" + v6);
}
yi(Sy, "onAnimationEnd");
yi(wy, "onAnimationIteration");
yi(xy, "onAnimationStart");
yi("dblclick", "onDoubleClick");
yi("focusin", "onFocus");
yi("focusout", "onBlur");
yi(Cy, "onTransitionEnd");
Zs("onMouseEnter", ["mouseout", "mouseover"]);
Zs("onMouseLeave", ["mouseout", "mouseover"]);
Zs("onPointerEnter", ["pointerout", "pointerover"]);
Zs("onPointerLeave", ["pointerout", "pointerover"]);
rs("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
rs("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
rs("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
rs("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
rs("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
rs("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var tl = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), _6 = new Set("cancel close invalid load scroll toggle".split(" ").concat(tl));
function Yg(t, e, n) {
  var r = t.type || "unknown-event";
  t.currentTarget = n, yv(r, e, void 0, t), t.currentTarget = null;
}
function Ey(t, e) {
  e = (e & 4) !== 0;
  for (var n = 0; n < t.length; n++) {
    var r = t[n], o = r.event;
    r = r.listeners;
    e: {
      var l = void 0;
      if (e) for (var a = r.length - 1; 0 <= a; a--) {
        var c = r[a], d = c.instance, g = c.currentTarget;
        if (c = c.listener, d !== l && o.isPropagationStopped()) break e;
        Yg(o, c, g), l = d;
      }
      else for (a = 0; a < r.length; a++) {
        if (c = r[a], d = c.instance, g = c.currentTarget, c = c.listener, d !== l && o.isPropagationStopped()) break e;
        Yg(o, c, g), l = d;
      }
    }
  }
  if (Ou) throw t = Dh, Ou = !1, Dh = null, t;
}
function $e(t, e) {
  var n = e[Kh];
  n === void 0 && (n = e[Kh] = /* @__PURE__ */ new Set());
  var r = t + "__bubble";
  n.has(r) || (Py(e, t, 2, !1), n.add(r));
}
function qf(t, e, n) {
  var r = 0;
  e && (r |= 4), Py(n, t, r, e);
}
var Ja = "_reactListening" + Math.random().toString(36).slice(2);
function xl(t) {
  if (!t[Ja]) {
    t[Ja] = !0, Am.forEach(function(n) {
      n !== "selectionchange" && (_6.has(n) || qf(n, !1, t), qf(n, !0, t));
    });
    var e = t.nodeType === 9 ? t : t.ownerDocument;
    e === null || e[Ja] || (e[Ja] = !0, qf("selectionchange", !1, e));
  }
}
function Py(t, e, n, r) {
  switch (uy(e)) {
    case 1:
      var o = Av;
      break;
    case 4:
      o = Ov;
      break;
    default:
      o = z0;
  }
  n = o.bind(null, e, n, t), o = void 0, !Ih || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (o = !0), r ? o !== void 0 ? t.addEventListener(e, n, { capture: !0, passive: o }) : t.addEventListener(e, n, !0) : o !== void 0 ? t.addEventListener(e, n, { passive: o }) : t.addEventListener(e, n, !1);
}
function Zf(t, e, n, r, o) {
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
        if (a = Ki(c), a === null) return;
        if (d = a.tag, d === 5 || d === 6) {
          r = l = a;
          continue e;
        }
        c = c.parentNode;
      }
    }
    r = r.return;
  }
  Qm(function() {
    var g = l, y = A0(n), w = [];
    e: {
      var _ = ky.get(t);
      if (_ !== void 0) {
        var C = U0, v = t;
        switch (t) {
          case "keypress":
            if (wu(n) === 0) break e;
          case "keydown":
          case "keyup":
            C = Qv;
            break;
          case "focusin":
            v = "focus", C = Yf;
            break;
          case "focusout":
            v = "blur", C = Yf;
            break;
          case "beforeblur":
          case "afterblur":
            C = Yf;
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
            C = Ag;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            C = zv;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            C = Zv;
            break;
          case Sy:
          case wy:
          case xy:
            C = Bv;
            break;
          case Cy:
            C = e6;
            break;
          case "scroll":
            C = Iv;
            break;
          case "wheel":
            C = n6;
            break;
          case "copy":
          case "cut":
          case "paste":
            C = Hv;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            C = Ig;
        }
        var E = (e & 4) !== 0, R = !E && t === "scroll", k = E ? _ !== null ? _ + "Capture" : null : _;
        E = [];
        for (var x = g, p; x !== null; ) {
          p = x;
          var S = p.stateNode;
          if (p.tag === 5 && S !== null && (p = S, k !== null && (S = ml(x, k), S != null && E.push(Cl(x, S, p)))), R) break;
          x = x.return;
        }
        0 < E.length && (_ = new C(_, v, null, n, y), w.push({ event: _, listeners: E }));
      }
    }
    if (!(e & 7)) {
      e: {
        if (_ = t === "mouseover" || t === "pointerover", C = t === "mouseout" || t === "pointerout", _ && n !== Ah && (v = n.relatedTarget || n.fromElement) && (Ki(v) || v[Lr])) break e;
        if ((C || _) && (_ = y.window === y ? y : (_ = y.ownerDocument) ? _.defaultView || _.parentWindow : window, C ? (v = n.relatedTarget || n.toElement, C = g, v = v ? Ki(v) : null, v !== null && (R = is(v), v !== R || v.tag !== 5 && v.tag !== 6) && (v = null)) : (C = null, v = g), C !== v)) {
          if (E = Ag, S = "onMouseLeave", k = "onMouseEnter", x = "mouse", (t === "pointerout" || t === "pointerover") && (E = Ig, S = "onPointerLeave", k = "onPointerEnter", x = "pointer"), R = C == null ? _ : Us(C), p = v == null ? _ : Us(v), _ = new E(S, x + "leave", C, n, y), _.target = R, _.relatedTarget = p, S = null, Ki(y) === g && (E = new E(k, x + "enter", v, n, y), E.target = p, E.relatedTarget = R, S = E), R = S, C && v) t: {
            for (E = C, k = v, x = 0, p = E; p; p = Rs(p)) x++;
            for (p = 0, S = k; S; S = Rs(S)) p++;
            for (; 0 < x - p; ) E = Rs(E), x--;
            for (; 0 < p - x; ) k = Rs(k), p--;
            for (; x--; ) {
              if (E === k || k !== null && E === k.alternate) break t;
              E = Rs(E), k = Rs(k);
            }
            E = null;
          }
          else E = null;
          C !== null && Kg(w, _, C, E, !1), v !== null && R !== null && Kg(w, R, v, E, !0);
        }
      }
      e: {
        if (_ = g ? Us(g) : window, C = _.nodeName && _.nodeName.toLowerCase(), C === "select" || C === "input" && _.type === "file") var N = u6;
        else if (Gg(_)) if (gy) N = h6;
        else {
          N = d6;
          var M = c6;
        }
        else (C = _.nodeName) && C.toLowerCase() === "input" && (_.type === "checkbox" || _.type === "radio") && (N = f6);
        if (N && (N = N(t, g))) {
          py(w, N, n, y);
          break e;
        }
        M && M(t, _, g), t === "focusout" && (M = _._wrapperState) && M.controlled && _.type === "number" && Nh(_, "number", _.value);
      }
      switch (M = g ? Us(g) : window, t) {
        case "focusin":
          (Gg(M) || M.contentEditable === "true") && (zs = M, Bh = g, al = null);
          break;
        case "focusout":
          al = Bh = zs = null;
          break;
        case "mousedown":
          Vh = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Vh = !1, jg(w, n, y);
          break;
        case "selectionchange":
          if (m6) break;
        case "keydown":
        case "keyup":
          jg(w, n, y);
      }
      var A;
      if (V0) e: {
        switch (t) {
          case "compositionstart":
            var T = "onCompositionStart";
            break e;
          case "compositionend":
            T = "onCompositionEnd";
            break e;
          case "compositionupdate":
            T = "onCompositionUpdate";
            break e;
        }
        T = void 0;
      }
      else Ds ? fy(t, n) && (T = "onCompositionEnd") : t === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T && (dy && n.locale !== "ko" && (Ds || T !== "onCompositionStart" ? T === "onCompositionEnd" && Ds && (A = cy()) : (ii = y, G0 = "value" in ii ? ii.value : ii.textContent, Ds = !0)), M = Uu(g, T), 0 < M.length && (T = new Og(T, t, null, n, y), w.push({ event: T, listeners: M }), A ? T.data = A : (A = hy(n), A !== null && (T.data = A)))), (A = i6 ? s6(t, n) : o6(t, n)) && (g = Uu(g, "onBeforeInput"), 0 < g.length && (y = new Og("onBeforeInput", "beforeinput", null, n, y), w.push({ event: y, listeners: g }), y.data = A));
    }
    Ey(w, e);
  });
}
function Cl(t, e, n) {
  return { instance: t, listener: e, currentTarget: n };
}
function Uu(t, e) {
  for (var n = e + "Capture", r = []; t !== null; ) {
    var o = t, l = o.stateNode;
    o.tag === 5 && l !== null && (o = l, l = ml(t, n), l != null && r.unshift(Cl(t, l, o)), l = ml(t, e), l != null && r.push(Cl(t, l, o))), t = t.return;
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
function Kg(t, e, n, r, o) {
  for (var l = e._reactName, a = []; n !== null && n !== r; ) {
    var c = n, d = c.alternate, g = c.stateNode;
    if (d !== null && d === r) break;
    c.tag === 5 && g !== null && (c = g, o ? (d = ml(n, l), d != null && a.unshift(Cl(n, d, c))) : o || (d = ml(n, l), d != null && a.push(Cl(n, d, c)))), n = n.return;
  }
  a.length !== 0 && t.push({ event: e, listeners: a });
}
var S6 = /\r\n?/g, w6 = /\u0000|\uFFFD/g;
function Xg(t) {
  return (typeof t == "string" ? t : "" + t).replace(S6, `
`).replace(w6, "");
}
function eu(t, e, n) {
  if (e = Xg(e), Xg(t) !== e && n) throw Error(K(425));
}
function Bu() {
}
var Hh = null, jh = null;
function Wh(t, e) {
  return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
}
var Yh = typeof setTimeout == "function" ? setTimeout : void 0, x6 = typeof clearTimeout == "function" ? clearTimeout : void 0, $g = typeof Promise == "function" ? Promise : void 0, C6 = typeof queueMicrotask == "function" ? queueMicrotask : typeof $g < "u" ? function(t) {
  return $g.resolve(null).then(t).catch(k6);
} : Yh;
function k6(t) {
  setTimeout(function() {
    throw t;
  });
}
function Jf(t, e) {
  var n = e, r = 0;
  do {
    var o = n.nextSibling;
    if (t.removeChild(n), o && o.nodeType === 8) if (n = o.data, n === "/$") {
      if (r === 0) {
        t.removeChild(o), _l(e);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
  } while (n);
  _l(e);
}
function ui(t) {
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
function Qg(t) {
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
var co = Math.random().toString(36).slice(2), cr = "__reactFiber$" + co, kl = "__reactProps$" + co, Lr = "__reactContainer$" + co, Kh = "__reactEvents$" + co, E6 = "__reactListeners$" + co, P6 = "__reactHandles$" + co;
function Ki(t) {
  var e = t[cr];
  if (e) return e;
  for (var n = t.parentNode; n; ) {
    if (e = n[Lr] || n[cr]) {
      if (n = e.alternate, e.child !== null || n !== null && n.child !== null) for (t = Qg(t); t !== null; ) {
        if (n = t[cr]) return n;
        t = Qg(t);
      }
      return e;
    }
    t = n, n = t.parentNode;
  }
  return null;
}
function zl(t) {
  return t = t[cr] || t[Lr], !t || t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3 ? null : t;
}
function Us(t) {
  if (t.tag === 5 || t.tag === 6) return t.stateNode;
  throw Error(K(33));
}
function hc(t) {
  return t[kl] || null;
}
var Xh = [], Bs = -1;
function vi(t) {
  return { current: t };
}
function Qe(t) {
  0 > Bs || (t.current = Xh[Bs], Xh[Bs] = null, Bs--);
}
function Ye(t, e) {
  Bs++, Xh[Bs] = t.current, t.current = e;
}
var gi = {}, Wt = vi(gi), un = vi(!1), Zi = gi;
function Js(t, e) {
  var n = t.type.contextTypes;
  if (!n) return gi;
  var r = t.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === e) return r.__reactInternalMemoizedMaskedChildContext;
  var o = {}, l;
  for (l in n) o[l] = e[l];
  return r && (t = t.stateNode, t.__reactInternalMemoizedUnmaskedChildContext = e, t.__reactInternalMemoizedMaskedChildContext = o), o;
}
function cn(t) {
  return t = t.childContextTypes, t != null;
}
function Vu() {
  Qe(un), Qe(Wt);
}
function bg(t, e, n) {
  if (Wt.current !== gi) throw Error(K(168));
  Ye(Wt, e), Ye(un, n);
}
function Ty(t, e, n) {
  var r = t.stateNode;
  if (e = e.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in e)) throw Error(K(108, cv(t) || "Unknown", o));
  return it({}, n, r);
}
function Hu(t) {
  return t = (t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext || gi, Zi = Wt.current, Ye(Wt, t), Ye(un, un.current), !0;
}
function qg(t, e, n) {
  var r = t.stateNode;
  if (!r) throw Error(K(169));
  n ? (t = Ty(t, e, Zi), r.__reactInternalMemoizedMergedChildContext = t, Qe(un), Qe(Wt), Ye(Wt, t)) : Qe(un), Ye(un, n);
}
var Pr = null, pc = !1, eh = !1;
function Ny(t) {
  Pr === null ? Pr = [t] : Pr.push(t);
}
function T6(t) {
  pc = !0, Ny(t);
}
function _i() {
  if (!eh && Pr !== null) {
    eh = !0;
    var t = 0, e = De;
    try {
      var n = Pr;
      for (De = 1; t < n.length; t++) {
        var r = n[t];
        do
          r = r(!0);
        while (r !== null);
      }
      Pr = null, pc = !1;
    } catch (o) {
      throw Pr !== null && (Pr = Pr.slice(t + 1)), Jm(O0, _i), o;
    } finally {
      De = e, eh = !1;
    }
  }
  return null;
}
var Vs = [], Hs = 0, ju = null, Wu = 0, Mn = [], Fn = 0, Ji = null, Tr = 1, Nr = "";
function ji(t, e) {
  Vs[Hs++] = Wu, Vs[Hs++] = ju, ju = t, Wu = e;
}
function Ry(t, e, n) {
  Mn[Fn++] = Tr, Mn[Fn++] = Nr, Mn[Fn++] = Ji, Ji = t;
  var r = Tr;
  t = Nr;
  var o = 32 - Qn(r) - 1;
  r &= ~(1 << o), n += 1;
  var l = 32 - Qn(e) + o;
  if (30 < l) {
    var a = o - o % 5;
    l = (r & (1 << a) - 1).toString(32), r >>= a, o -= a, Tr = 1 << 32 - Qn(e) + o | n << o | r, Nr = l + t;
  } else Tr = 1 << l | n << o | r, Nr = t;
}
function j0(t) {
  t.return !== null && (ji(t, 1), Ry(t, 1, 0));
}
function W0(t) {
  for (; t === ju; ) ju = Vs[--Hs], Vs[Hs] = null, Wu = Vs[--Hs], Vs[Hs] = null;
  for (; t === Ji; ) Ji = Mn[--Fn], Mn[Fn] = null, Nr = Mn[--Fn], Mn[Fn] = null, Tr = Mn[--Fn], Mn[Fn] = null;
}
var yn = null, mn = null, Ze = !1, $n = null;
function My(t, e) {
  var n = Ln(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = e, n.return = t, e = t.deletions, e === null ? (t.deletions = [n], t.flags |= 16) : e.push(n);
}
function Zg(t, e) {
  switch (t.tag) {
    case 5:
      var n = t.type;
      return e = e.nodeType !== 1 || n.toLowerCase() !== e.nodeName.toLowerCase() ? null : e, e !== null ? (t.stateNode = e, yn = t, mn = ui(e.firstChild), !0) : !1;
    case 6:
      return e = t.pendingProps === "" || e.nodeType !== 3 ? null : e, e !== null ? (t.stateNode = e, yn = t, mn = null, !0) : !1;
    case 13:
      return e = e.nodeType !== 8 ? null : e, e !== null ? (n = Ji !== null ? { id: Tr, overflow: Nr } : null, t.memoizedState = { dehydrated: e, treeContext: n, retryLane: 1073741824 }, n = Ln(18, null, null, 0), n.stateNode = e, n.return = t, t.child = n, yn = t, mn = null, !0) : !1;
    default:
      return !1;
  }
}
function $h(t) {
  return (t.mode & 1) !== 0 && (t.flags & 128) === 0;
}
function Qh(t) {
  if (Ze) {
    var e = mn;
    if (e) {
      var n = e;
      if (!Zg(t, e)) {
        if ($h(t)) throw Error(K(418));
        e = ui(n.nextSibling);
        var r = yn;
        e && Zg(t, e) ? My(r, n) : (t.flags = t.flags & -4097 | 2, Ze = !1, yn = t);
      }
    } else {
      if ($h(t)) throw Error(K(418));
      t.flags = t.flags & -4097 | 2, Ze = !1, yn = t;
    }
  }
}
function Jg(t) {
  for (t = t.return; t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13; ) t = t.return;
  yn = t;
}
function tu(t) {
  if (t !== yn) return !1;
  if (!Ze) return Jg(t), Ze = !0, !1;
  var e;
  if ((e = t.tag !== 3) && !(e = t.tag !== 5) && (e = t.type, e = e !== "head" && e !== "body" && !Wh(t.type, t.memoizedProps)), e && (e = mn)) {
    if ($h(t)) throw Fy(), Error(K(418));
    for (; e; ) My(t, e), e = ui(e.nextSibling);
  }
  if (Jg(t), t.tag === 13) {
    if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(K(317));
    e: {
      for (t = t.nextSibling, e = 0; t; ) {
        if (t.nodeType === 8) {
          var n = t.data;
          if (n === "/$") {
            if (e === 0) {
              mn = ui(t.nextSibling);
              break e;
            }
            e--;
          } else n !== "$" && n !== "$!" && n !== "$?" || e++;
        }
        t = t.nextSibling;
      }
      mn = null;
    }
  } else mn = yn ? ui(t.stateNode.nextSibling) : null;
  return !0;
}
function Fy() {
  for (var t = mn; t; ) t = ui(t.nextSibling);
}
function eo() {
  mn = yn = null, Ze = !1;
}
function Y0(t) {
  $n === null ? $n = [t] : $n.push(t);
}
var N6 = Ir.ReactCurrentBatchConfig;
function Wo(t, e, n) {
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
function nu(t, e) {
  throw t = Object.prototype.toString.call(e), Error(K(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t));
}
function e2(t) {
  var e = t._init;
  return e(t._payload);
}
function Ly(t) {
  function e(k, x) {
    if (t) {
      var p = k.deletions;
      p === null ? (k.deletions = [x], k.flags |= 16) : p.push(x);
    }
  }
  function n(k, x) {
    if (!t) return null;
    for (; x !== null; ) e(k, x), x = x.sibling;
    return null;
  }
  function r(k, x) {
    for (k = /* @__PURE__ */ new Map(); x !== null; ) x.key !== null ? k.set(x.key, x) : k.set(x.index, x), x = x.sibling;
    return k;
  }
  function o(k, x) {
    return k = hi(k, x), k.index = 0, k.sibling = null, k;
  }
  function l(k, x, p) {
    return k.index = p, t ? (p = k.alternate, p !== null ? (p = p.index, p < x ? (k.flags |= 2, x) : p) : (k.flags |= 2, x)) : (k.flags |= 1048576, x);
  }
  function a(k) {
    return t && k.alternate === null && (k.flags |= 2), k;
  }
  function c(k, x, p, S) {
    return x === null || x.tag !== 6 ? (x = lh(p, k.mode, S), x.return = k, x) : (x = o(x, p), x.return = k, x);
  }
  function d(k, x, p, S) {
    var N = p.type;
    return N === Is ? y(k, x, p.props.children, S, p.key) : x !== null && (x.elementType === N || typeof N == "object" && N !== null && N.$$typeof === ei && e2(N) === x.type) ? (S = o(x, p.props), S.ref = Wo(k, x, p), S.return = k, S) : (S = Nu(p.type, p.key, p.props, null, k.mode, S), S.ref = Wo(k, x, p), S.return = k, S);
  }
  function g(k, x, p, S) {
    return x === null || x.tag !== 4 || x.stateNode.containerInfo !== p.containerInfo || x.stateNode.implementation !== p.implementation ? (x = ah(p, k.mode, S), x.return = k, x) : (x = o(x, p.children || []), x.return = k, x);
  }
  function y(k, x, p, S, N) {
    return x === null || x.tag !== 7 ? (x = qi(p, k.mode, S, N), x.return = k, x) : (x = o(x, p), x.return = k, x);
  }
  function w(k, x, p) {
    if (typeof x == "string" && x !== "" || typeof x == "number") return x = lh("" + x, k.mode, p), x.return = k, x;
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case Ya:
          return p = Nu(x.type, x.key, x.props, null, k.mode, p), p.ref = Wo(k, null, x), p.return = k, p;
        case Os:
          return x = ah(x, k.mode, p), x.return = k, x;
        case ei:
          var S = x._init;
          return w(k, S(x._payload), p);
      }
      if (Jo(x) || Uo(x)) return x = qi(x, k.mode, p, null), x.return = k, x;
      nu(k, x);
    }
    return null;
  }
  function _(k, x, p, S) {
    var N = x !== null ? x.key : null;
    if (typeof p == "string" && p !== "" || typeof p == "number") return N !== null ? null : c(k, x, "" + p, S);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Ya:
          return p.key === N ? d(k, x, p, S) : null;
        case Os:
          return p.key === N ? g(k, x, p, S) : null;
        case ei:
          return N = p._init, _(
            k,
            x,
            N(p._payload),
            S
          );
      }
      if (Jo(p) || Uo(p)) return N !== null ? null : y(k, x, p, S, null);
      nu(k, p);
    }
    return null;
  }
  function C(k, x, p, S, N) {
    if (typeof S == "string" && S !== "" || typeof S == "number") return k = k.get(p) || null, c(x, k, "" + S, N);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case Ya:
          return k = k.get(S.key === null ? p : S.key) || null, d(x, k, S, N);
        case Os:
          return k = k.get(S.key === null ? p : S.key) || null, g(x, k, S, N);
        case ei:
          var M = S._init;
          return C(k, x, p, M(S._payload), N);
      }
      if (Jo(S) || Uo(S)) return k = k.get(p) || null, y(x, k, S, N, null);
      nu(x, S);
    }
    return null;
  }
  function v(k, x, p, S) {
    for (var N = null, M = null, A = x, T = x = 0, G = null; A !== null && T < p.length; T++) {
      A.index > T ? (G = A, A = null) : G = A.sibling;
      var F = _(k, A, p[T], S);
      if (F === null) {
        A === null && (A = G);
        break;
      }
      t && A && F.alternate === null && e(k, A), x = l(F, x, T), M === null ? N = F : M.sibling = F, M = F, A = G;
    }
    if (T === p.length) return n(k, A), Ze && ji(k, T), N;
    if (A === null) {
      for (; T < p.length; T++) A = w(k, p[T], S), A !== null && (x = l(A, x, T), M === null ? N = A : M.sibling = A, M = A);
      return Ze && ji(k, T), N;
    }
    for (A = r(k, A); T < p.length; T++) G = C(A, k, T, p[T], S), G !== null && (t && G.alternate !== null && A.delete(G.key === null ? T : G.key), x = l(G, x, T), M === null ? N = G : M.sibling = G, M = G);
    return t && A.forEach(function(V) {
      return e(k, V);
    }), Ze && ji(k, T), N;
  }
  function E(k, x, p, S) {
    var N = Uo(p);
    if (typeof N != "function") throw Error(K(150));
    if (p = N.call(p), p == null) throw Error(K(151));
    for (var M = N = null, A = x, T = x = 0, G = null, F = p.next(); A !== null && !F.done; T++, F = p.next()) {
      A.index > T ? (G = A, A = null) : G = A.sibling;
      var V = _(k, A, F.value, S);
      if (V === null) {
        A === null && (A = G);
        break;
      }
      t && A && V.alternate === null && e(k, A), x = l(V, x, T), M === null ? N = V : M.sibling = V, M = V, A = G;
    }
    if (F.done) return n(
      k,
      A
    ), Ze && ji(k, T), N;
    if (A === null) {
      for (; !F.done; T++, F = p.next()) F = w(k, F.value, S), F !== null && (x = l(F, x, T), M === null ? N = F : M.sibling = F, M = F);
      return Ze && ji(k, T), N;
    }
    for (A = r(k, A); !F.done; T++, F = p.next()) F = C(A, k, T, F.value, S), F !== null && (t && F.alternate !== null && A.delete(F.key === null ? T : F.key), x = l(F, x, T), M === null ? N = F : M.sibling = F, M = F);
    return t && A.forEach(function(j) {
      return e(k, j);
    }), Ze && ji(k, T), N;
  }
  function R(k, x, p, S) {
    if (typeof p == "object" && p !== null && p.type === Is && p.key === null && (p = p.props.children), typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Ya:
          e: {
            for (var N = p.key, M = x; M !== null; ) {
              if (M.key === N) {
                if (N = p.type, N === Is) {
                  if (M.tag === 7) {
                    n(k, M.sibling), x = o(M, p.props.children), x.return = k, k = x;
                    break e;
                  }
                } else if (M.elementType === N || typeof N == "object" && N !== null && N.$$typeof === ei && e2(N) === M.type) {
                  n(k, M.sibling), x = o(M, p.props), x.ref = Wo(k, M, p), x.return = k, k = x;
                  break e;
                }
                n(k, M);
                break;
              } else e(k, M);
              M = M.sibling;
            }
            p.type === Is ? (x = qi(p.props.children, k.mode, S, p.key), x.return = k, k = x) : (S = Nu(p.type, p.key, p.props, null, k.mode, S), S.ref = Wo(k, x, p), S.return = k, k = S);
          }
          return a(k);
        case Os:
          e: {
            for (M = p.key; x !== null; ) {
              if (x.key === M) if (x.tag === 4 && x.stateNode.containerInfo === p.containerInfo && x.stateNode.implementation === p.implementation) {
                n(k, x.sibling), x = o(x, p.children || []), x.return = k, k = x;
                break e;
              } else {
                n(k, x);
                break;
              }
              else e(k, x);
              x = x.sibling;
            }
            x = ah(p, k.mode, S), x.return = k, k = x;
          }
          return a(k);
        case ei:
          return M = p._init, R(k, x, M(p._payload), S);
      }
      if (Jo(p)) return v(k, x, p, S);
      if (Uo(p)) return E(k, x, p, S);
      nu(k, p);
    }
    return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p, x !== null && x.tag === 6 ? (n(k, x.sibling), x = o(x, p), x.return = k, k = x) : (n(k, x), x = lh(p, k.mode, S), x.return = k, k = x), a(k)) : n(k, x);
  }
  return R;
}
var to = Ly(!0), Ay = Ly(!1), Yu = vi(null), Ku = null, js = null, K0 = null;
function X0() {
  K0 = js = Ku = null;
}
function $0(t) {
  var e = Yu.current;
  Qe(Yu), t._currentValue = e;
}
function bh(t, e, n) {
  for (; t !== null; ) {
    var r = t.alternate;
    if ((t.childLanes & e) !== e ? (t.childLanes |= e, r !== null && (r.childLanes |= e)) : r !== null && (r.childLanes & e) !== e && (r.childLanes |= e), t === n) break;
    t = t.return;
  }
}
function bs(t, e) {
  Ku = t, K0 = js = null, t = t.dependencies, t !== null && t.firstContext !== null && (t.lanes & e && (an = !0), t.firstContext = null);
}
function On(t) {
  var e = t._currentValue;
  if (K0 !== t) if (t = { context: t, memoizedValue: e, next: null }, js === null) {
    if (Ku === null) throw Error(K(308));
    js = t, Ku.dependencies = { lanes: 0, firstContext: t };
  } else js = js.next = t;
  return e;
}
var Xi = null;
function Q0(t) {
  Xi === null ? Xi = [t] : Xi.push(t);
}
function Oy(t, e, n, r) {
  var o = e.interleaved;
  return o === null ? (n.next = n, Q0(e)) : (n.next = o.next, o.next = n), e.interleaved = n, Ar(t, r);
}
function Ar(t, e) {
  t.lanes |= e;
  var n = t.alternate;
  for (n !== null && (n.lanes |= e), n = t, t = t.return; t !== null; ) t.childLanes |= e, n = t.alternate, n !== null && (n.childLanes |= e), n = t, t = t.return;
  return n.tag === 3 ? n.stateNode : null;
}
var ti = !1;
function b0(t) {
  t.updateQueue = { baseState: t.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Iy(t, e) {
  t = t.updateQueue, e.updateQueue === t && (e.updateQueue = { baseState: t.baseState, firstBaseUpdate: t.firstBaseUpdate, lastBaseUpdate: t.lastBaseUpdate, shared: t.shared, effects: t.effects });
}
function Rr(t, e) {
  return { eventTime: t, lane: e, tag: 0, payload: null, callback: null, next: null };
}
function ci(t, e, n) {
  var r = t.updateQueue;
  if (r === null) return null;
  if (r = r.shared, Re & 2) {
    var o = r.pending;
    return o === null ? e.next = e : (e.next = o.next, o.next = e), r.pending = e, Ar(t, n);
  }
  return o = r.interleaved, o === null ? (e.next = e, Q0(r)) : (e.next = o.next, o.next = e), r.interleaved = e, Ar(t, n);
}
function xu(t, e, n) {
  if (e = e.updateQueue, e !== null && (e = e.shared, (n & 4194240) !== 0)) {
    var r = e.lanes;
    r &= t.pendingLanes, n |= r, e.lanes = n, I0(t, n);
  }
}
function t2(t, e) {
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
function Xu(t, e, n, r) {
  var o = t.updateQueue;
  ti = !1;
  var l = o.firstBaseUpdate, a = o.lastBaseUpdate, c = o.shared.pending;
  if (c !== null) {
    o.shared.pending = null;
    var d = c, g = d.next;
    d.next = null, a === null ? l = g : a.next = g, a = d;
    var y = t.alternate;
    y !== null && (y = y.updateQueue, c = y.lastBaseUpdate, c !== a && (c === null ? y.firstBaseUpdate = g : c.next = g, y.lastBaseUpdate = d));
  }
  if (l !== null) {
    var w = o.baseState;
    a = 0, y = g = d = null, c = l;
    do {
      var _ = c.lane, C = c.eventTime;
      if ((r & _) === _) {
        y !== null && (y = y.next = {
          eventTime: C,
          lane: 0,
          tag: c.tag,
          payload: c.payload,
          callback: c.callback,
          next: null
        });
        e: {
          var v = t, E = c;
          switch (_ = e, C = n, E.tag) {
            case 1:
              if (v = E.payload, typeof v == "function") {
                w = v.call(C, w, _);
                break e;
              }
              w = v;
              break e;
            case 3:
              v.flags = v.flags & -65537 | 128;
            case 0:
              if (v = E.payload, _ = typeof v == "function" ? v.call(C, w, _) : v, _ == null) break e;
              w = it({}, w, _);
              break e;
            case 2:
              ti = !0;
          }
        }
        c.callback !== null && c.lane !== 0 && (t.flags |= 64, _ = o.effects, _ === null ? o.effects = [c] : _.push(c));
      } else C = { eventTime: C, lane: _, tag: c.tag, payload: c.payload, callback: c.callback, next: null }, y === null ? (g = y = C, d = w) : y = y.next = C, a |= _;
      if (c = c.next, c === null) {
        if (c = o.shared.pending, c === null) break;
        _ = c, c = _.next, _.next = null, o.lastBaseUpdate = _, o.shared.pending = null;
      }
    } while (!0);
    if (y === null && (d = w), o.baseState = d, o.firstBaseUpdate = g, o.lastBaseUpdate = y, e = o.shared.interleaved, e !== null) {
      o = e;
      do
        a |= o.lane, o = o.next;
      while (o !== e);
    } else l === null && (o.shared.lanes = 0);
    ts |= a, t.lanes = a, t.memoizedState = w;
  }
}
function n2(t, e, n) {
  if (t = e.effects, e.effects = null, t !== null) for (e = 0; e < t.length; e++) {
    var r = t[e], o = r.callback;
    if (o !== null) {
      if (r.callback = null, r = n, typeof o != "function") throw Error(K(191, o));
      o.call(r);
    }
  }
}
var Gl = {}, hr = vi(Gl), El = vi(Gl), Pl = vi(Gl);
function $i(t) {
  if (t === Gl) throw Error(K(174));
  return t;
}
function q0(t, e) {
  switch (Ye(Pl, e), Ye(El, t), Ye(hr, Gl), t = e.nodeType, t) {
    case 9:
    case 11:
      e = (e = e.documentElement) ? e.namespaceURI : Mh(null, "");
      break;
    default:
      t = t === 8 ? e.parentNode : e, e = t.namespaceURI || null, t = t.tagName, e = Mh(e, t);
  }
  Qe(hr), Ye(hr, e);
}
function no() {
  Qe(hr), Qe(El), Qe(Pl);
}
function Dy(t) {
  $i(Pl.current);
  var e = $i(hr.current), n = Mh(e, t.type);
  e !== n && (Ye(El, t), Ye(hr, n));
}
function Z0(t) {
  El.current === t && (Qe(hr), Qe(El));
}
var nt = vi(0);
function $u(t) {
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
var th = [];
function J0() {
  for (var t = 0; t < th.length; t++) th[t]._workInProgressVersionPrimary = null;
  th.length = 0;
}
var Cu = Ir.ReactCurrentDispatcher, nh = Ir.ReactCurrentBatchConfig, es = 0, rt = null, St = null, Rt = null, Qu = !1, ul = !1, Tl = 0, R6 = 0;
function Vt() {
  throw Error(K(321));
}
function e1(t, e) {
  if (e === null) return !1;
  for (var n = 0; n < e.length && n < t.length; n++) if (!Zn(t[n], e[n])) return !1;
  return !0;
}
function t1(t, e, n, r, o, l) {
  if (es = l, rt = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, Cu.current = t === null || t.memoizedState === null ? A6 : O6, t = n(r, o), ul) {
    l = 0;
    do {
      if (ul = !1, Tl = 0, 25 <= l) throw Error(K(301));
      l += 1, Rt = St = null, e.updateQueue = null, Cu.current = I6, t = n(r, o);
    } while (ul);
  }
  if (Cu.current = bu, e = St !== null && St.next !== null, es = 0, Rt = St = rt = null, Qu = !1, e) throw Error(K(300));
  return t;
}
function n1() {
  var t = Tl !== 0;
  return Tl = 0, t;
}
function ur() {
  var t = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Rt === null ? rt.memoizedState = Rt = t : Rt = Rt.next = t, Rt;
}
function In() {
  if (St === null) {
    var t = rt.alternate;
    t = t !== null ? t.memoizedState : null;
  } else t = St.next;
  var e = Rt === null ? rt.memoizedState : Rt.next;
  if (e !== null) Rt = e, St = t;
  else {
    if (t === null) throw Error(K(310));
    St = t, t = { memoizedState: St.memoizedState, baseState: St.baseState, baseQueue: St.baseQueue, queue: St.queue, next: null }, Rt === null ? rt.memoizedState = Rt = t : Rt = Rt.next = t;
  }
  return Rt;
}
function Nl(t, e) {
  return typeof e == "function" ? e(t) : e;
}
function rh(t) {
  var e = In(), n = e.queue;
  if (n === null) throw Error(K(311));
  n.lastRenderedReducer = t;
  var r = St, o = r.baseQueue, l = n.pending;
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
      if ((es & y) === y) d !== null && (d = d.next = { lane: 0, action: g.action, hasEagerState: g.hasEagerState, eagerState: g.eagerState, next: null }), r = g.hasEagerState ? g.eagerState : t(r, g.action);
      else {
        var w = {
          lane: y,
          action: g.action,
          hasEagerState: g.hasEagerState,
          eagerState: g.eagerState,
          next: null
        };
        d === null ? (c = d = w, a = r) : d = d.next = w, rt.lanes |= y, ts |= y;
      }
      g = g.next;
    } while (g !== null && g !== l);
    d === null ? a = r : d.next = c, Zn(r, e.memoizedState) || (an = !0), e.memoizedState = r, e.baseState = a, e.baseQueue = d, n.lastRenderedState = r;
  }
  if (t = n.interleaved, t !== null) {
    o = t;
    do
      l = o.lane, rt.lanes |= l, ts |= l, o = o.next;
    while (o !== t);
  } else o === null && (n.lanes = 0);
  return [e.memoizedState, n.dispatch];
}
function ih(t) {
  var e = In(), n = e.queue;
  if (n === null) throw Error(K(311));
  n.lastRenderedReducer = t;
  var r = n.dispatch, o = n.pending, l = e.memoizedState;
  if (o !== null) {
    n.pending = null;
    var a = o = o.next;
    do
      l = t(l, a.action), a = a.next;
    while (a !== o);
    Zn(l, e.memoizedState) || (an = !0), e.memoizedState = l, e.baseQueue === null && (e.baseState = l), n.lastRenderedState = l;
  }
  return [l, r];
}
function zy() {
}
function Gy(t, e) {
  var n = rt, r = In(), o = e(), l = !Zn(r.memoizedState, o);
  if (l && (r.memoizedState = o, an = !0), r = r.queue, r1(Vy.bind(null, n, r, t), [t]), r.getSnapshot !== e || l || Rt !== null && Rt.memoizedState.tag & 1) {
    if (n.flags |= 2048, Rl(9, By.bind(null, n, r, o, e), void 0, null), Mt === null) throw Error(K(349));
    es & 30 || Uy(n, e, o);
  }
  return o;
}
function Uy(t, e, n) {
  t.flags |= 16384, t = { getSnapshot: e, value: n }, e = rt.updateQueue, e === null ? (e = { lastEffect: null, stores: null }, rt.updateQueue = e, e.stores = [t]) : (n = e.stores, n === null ? e.stores = [t] : n.push(t));
}
function By(t, e, n, r) {
  e.value = n, e.getSnapshot = r, Hy(e) && jy(t);
}
function Vy(t, e, n) {
  return n(function() {
    Hy(e) && jy(t);
  });
}
function Hy(t) {
  var e = t.getSnapshot;
  t = t.value;
  try {
    var n = e();
    return !Zn(t, n);
  } catch {
    return !0;
  }
}
function jy(t) {
  var e = Ar(t, 1);
  e !== null && bn(e, t, 1, -1);
}
function r2(t) {
  var e = ur();
  return typeof t == "function" && (t = t()), e.memoizedState = e.baseState = t, t = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Nl, lastRenderedState: t }, e.queue = t, t = t.dispatch = L6.bind(null, rt, t), [e.memoizedState, t];
}
function Rl(t, e, n, r) {
  return t = { tag: t, create: e, destroy: n, deps: r, next: null }, e = rt.updateQueue, e === null ? (e = { lastEffect: null, stores: null }, rt.updateQueue = e, e.lastEffect = t.next = t) : (n = e.lastEffect, n === null ? e.lastEffect = t.next = t : (r = n.next, n.next = t, t.next = r, e.lastEffect = t)), t;
}
function Wy() {
  return In().memoizedState;
}
function ku(t, e, n, r) {
  var o = ur();
  rt.flags |= t, o.memoizedState = Rl(1 | e, n, void 0, r === void 0 ? null : r);
}
function gc(t, e, n, r) {
  var o = In();
  r = r === void 0 ? null : r;
  var l = void 0;
  if (St !== null) {
    var a = St.memoizedState;
    if (l = a.destroy, r !== null && e1(r, a.deps)) {
      o.memoizedState = Rl(e, n, l, r);
      return;
    }
  }
  rt.flags |= t, o.memoizedState = Rl(1 | e, n, l, r);
}
function i2(t, e) {
  return ku(8390656, 8, t, e);
}
function r1(t, e) {
  return gc(2048, 8, t, e);
}
function Yy(t, e) {
  return gc(4, 2, t, e);
}
function Ky(t, e) {
  return gc(4, 4, t, e);
}
function Xy(t, e) {
  if (typeof e == "function") return t = t(), e(t), function() {
    e(null);
  };
  if (e != null) return t = t(), e.current = t, function() {
    e.current = null;
  };
}
function $y(t, e, n) {
  return n = n != null ? n.concat([t]) : null, gc(4, 4, Xy.bind(null, e, t), n);
}
function i1() {
}
function Qy(t, e) {
  var n = In();
  e = e === void 0 ? null : e;
  var r = n.memoizedState;
  return r !== null && e !== null && e1(e, r[1]) ? r[0] : (n.memoizedState = [t, e], t);
}
function by(t, e) {
  var n = In();
  e = e === void 0 ? null : e;
  var r = n.memoizedState;
  return r !== null && e !== null && e1(e, r[1]) ? r[0] : (t = t(), n.memoizedState = [t, e], t);
}
function qy(t, e, n) {
  return es & 21 ? (Zn(n, e) || (n = ny(), rt.lanes |= n, ts |= n, t.baseState = !0), e) : (t.baseState && (t.baseState = !1, an = !0), t.memoizedState = n);
}
function M6(t, e) {
  var n = De;
  De = n !== 0 && 4 > n ? n : 4, t(!0);
  var r = nh.transition;
  nh.transition = {};
  try {
    t(!1), e();
  } finally {
    De = n, nh.transition = r;
  }
}
function Zy() {
  return In().memoizedState;
}
function F6(t, e, n) {
  var r = fi(t);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Jy(t)) e3(e, n);
  else if (n = Oy(t, e, n, r), n !== null) {
    var o = bt();
    bn(n, t, r, o), t3(n, e, r);
  }
}
function L6(t, e, n) {
  var r = fi(t), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Jy(t)) e3(e, o);
  else {
    var l = t.alternate;
    if (t.lanes === 0 && (l === null || l.lanes === 0) && (l = e.lastRenderedReducer, l !== null)) try {
      var a = e.lastRenderedState, c = l(a, n);
      if (o.hasEagerState = !0, o.eagerState = c, Zn(c, a)) {
        var d = e.interleaved;
        d === null ? (o.next = o, Q0(e)) : (o.next = d.next, d.next = o), e.interleaved = o;
        return;
      }
    } catch {
    } finally {
    }
    n = Oy(t, e, o, r), n !== null && (o = bt(), bn(n, t, r, o), t3(n, e, r));
  }
}
function Jy(t) {
  var e = t.alternate;
  return t === rt || e !== null && e === rt;
}
function e3(t, e) {
  ul = Qu = !0;
  var n = t.pending;
  n === null ? e.next = e : (e.next = n.next, n.next = e), t.pending = e;
}
function t3(t, e, n) {
  if (n & 4194240) {
    var r = e.lanes;
    r &= t.pendingLanes, n |= r, e.lanes = n, I0(t, n);
  }
}
var bu = { readContext: On, useCallback: Vt, useContext: Vt, useEffect: Vt, useImperativeHandle: Vt, useInsertionEffect: Vt, useLayoutEffect: Vt, useMemo: Vt, useReducer: Vt, useRef: Vt, useState: Vt, useDebugValue: Vt, useDeferredValue: Vt, useTransition: Vt, useMutableSource: Vt, useSyncExternalStore: Vt, useId: Vt, unstable_isNewReconciler: !1 }, A6 = { readContext: On, useCallback: function(t, e) {
  return ur().memoizedState = [t, e === void 0 ? null : e], t;
}, useContext: On, useEffect: i2, useImperativeHandle: function(t, e, n) {
  return n = n != null ? n.concat([t]) : null, ku(
    4194308,
    4,
    Xy.bind(null, e, t),
    n
  );
}, useLayoutEffect: function(t, e) {
  return ku(4194308, 4, t, e);
}, useInsertionEffect: function(t, e) {
  return ku(4, 2, t, e);
}, useMemo: function(t, e) {
  var n = ur();
  return e = e === void 0 ? null : e, t = t(), n.memoizedState = [t, e], t;
}, useReducer: function(t, e, n) {
  var r = ur();
  return e = n !== void 0 ? n(e) : e, r.memoizedState = r.baseState = e, t = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: t, lastRenderedState: e }, r.queue = t, t = t.dispatch = F6.bind(null, rt, t), [r.memoizedState, t];
}, useRef: function(t) {
  var e = ur();
  return t = { current: t }, e.memoizedState = t;
}, useState: r2, useDebugValue: i1, useDeferredValue: function(t) {
  return ur().memoizedState = t;
}, useTransition: function() {
  var t = r2(!1), e = t[0];
  return t = M6.bind(null, t[1]), ur().memoizedState = t, [e, t];
}, useMutableSource: function() {
}, useSyncExternalStore: function(t, e, n) {
  var r = rt, o = ur();
  if (Ze) {
    if (n === void 0) throw Error(K(407));
    n = n();
  } else {
    if (n = e(), Mt === null) throw Error(K(349));
    es & 30 || Uy(r, e, n);
  }
  o.memoizedState = n;
  var l = { value: n, getSnapshot: e };
  return o.queue = l, i2(Vy.bind(
    null,
    r,
    l,
    t
  ), [t]), r.flags |= 2048, Rl(9, By.bind(null, r, l, n, e), void 0, null), n;
}, useId: function() {
  var t = ur(), e = Mt.identifierPrefix;
  if (Ze) {
    var n = Nr, r = Tr;
    n = (r & ~(1 << 32 - Qn(r) - 1)).toString(32) + n, e = ":" + e + "R" + n, n = Tl++, 0 < n && (e += "H" + n.toString(32)), e += ":";
  } else n = R6++, e = ":" + e + "r" + n.toString(32) + ":";
  return t.memoizedState = e;
}, unstable_isNewReconciler: !1 }, O6 = {
  readContext: On,
  useCallback: Qy,
  useContext: On,
  useEffect: r1,
  useImperativeHandle: $y,
  useInsertionEffect: Yy,
  useLayoutEffect: Ky,
  useMemo: by,
  useReducer: rh,
  useRef: Wy,
  useState: function() {
    return rh(Nl);
  },
  useDebugValue: i1,
  useDeferredValue: function(t) {
    var e = In();
    return qy(e, St.memoizedState, t);
  },
  useTransition: function() {
    var t = rh(Nl)[0], e = In().memoizedState;
    return [t, e];
  },
  useMutableSource: zy,
  useSyncExternalStore: Gy,
  useId: Zy,
  unstable_isNewReconciler: !1
}, I6 = { readContext: On, useCallback: Qy, useContext: On, useEffect: r1, useImperativeHandle: $y, useInsertionEffect: Yy, useLayoutEffect: Ky, useMemo: by, useReducer: ih, useRef: Wy, useState: function() {
  return ih(Nl);
}, useDebugValue: i1, useDeferredValue: function(t) {
  var e = In();
  return St === null ? e.memoizedState = t : qy(e, St.memoizedState, t);
}, useTransition: function() {
  var t = ih(Nl)[0], e = In().memoizedState;
  return [t, e];
}, useMutableSource: zy, useSyncExternalStore: Gy, useId: Zy, unstable_isNewReconciler: !1 };
function Kn(t, e) {
  if (t && t.defaultProps) {
    e = it({}, e), t = t.defaultProps;
    for (var n in t) e[n] === void 0 && (e[n] = t[n]);
    return e;
  }
  return e;
}
function qh(t, e, n, r) {
  e = t.memoizedState, n = n(r, e), n = n == null ? e : it({}, e, n), t.memoizedState = n, t.lanes === 0 && (t.updateQueue.baseState = n);
}
var mc = { isMounted: function(t) {
  return (t = t._reactInternals) ? is(t) === t : !1;
}, enqueueSetState: function(t, e, n) {
  t = t._reactInternals;
  var r = bt(), o = fi(t), l = Rr(r, o);
  l.payload = e, n != null && (l.callback = n), e = ci(t, l, o), e !== null && (bn(e, t, o, r), xu(e, t, o));
}, enqueueReplaceState: function(t, e, n) {
  t = t._reactInternals;
  var r = bt(), o = fi(t), l = Rr(r, o);
  l.tag = 1, l.payload = e, n != null && (l.callback = n), e = ci(t, l, o), e !== null && (bn(e, t, o, r), xu(e, t, o));
}, enqueueForceUpdate: function(t, e) {
  t = t._reactInternals;
  var n = bt(), r = fi(t), o = Rr(n, r);
  o.tag = 2, e != null && (o.callback = e), e = ci(t, o, r), e !== null && (bn(e, t, r, n), xu(e, t, r));
} };
function s2(t, e, n, r, o, l, a) {
  return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(r, l, a) : e.prototype && e.prototype.isPureReactComponent ? !wl(n, r) || !wl(o, l) : !0;
}
function n3(t, e, n) {
  var r = !1, o = gi, l = e.contextType;
  return typeof l == "object" && l !== null ? l = On(l) : (o = cn(e) ? Zi : Wt.current, r = e.contextTypes, l = (r = r != null) ? Js(t, o) : gi), e = new e(n, l), t.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null, e.updater = mc, t.stateNode = e, e._reactInternals = t, r && (t = t.stateNode, t.__reactInternalMemoizedUnmaskedChildContext = o, t.__reactInternalMemoizedMaskedChildContext = l), e;
}
function o2(t, e, n, r) {
  t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(n, r), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(n, r), e.state !== t && mc.enqueueReplaceState(e, e.state, null);
}
function Zh(t, e, n, r) {
  var o = t.stateNode;
  o.props = n, o.state = t.memoizedState, o.refs = {}, b0(t);
  var l = e.contextType;
  typeof l == "object" && l !== null ? o.context = On(l) : (l = cn(e) ? Zi : Wt.current, o.context = Js(t, l)), o.state = t.memoizedState, l = e.getDerivedStateFromProps, typeof l == "function" && (qh(t, e, l, n), o.state = t.memoizedState), typeof e.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (e = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), e !== o.state && mc.enqueueReplaceState(o, o.state, null), Xu(t, n, o, r), o.state = t.memoizedState), typeof o.componentDidMount == "function" && (t.flags |= 4194308);
}
function ro(t, e) {
  try {
    var n = "", r = e;
    do
      n += uv(r), r = r.return;
    while (r);
    var o = n;
  } catch (l) {
    o = `
Error generating stack: ` + l.message + `
` + l.stack;
  }
  return { value: t, source: e, stack: o, digest: null };
}
function sh(t, e, n) {
  return { value: t, source: null, stack: n ?? null, digest: e ?? null };
}
function Jh(t, e) {
  try {
    console.error(e.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var D6 = typeof WeakMap == "function" ? WeakMap : Map;
function r3(t, e, n) {
  n = Rr(-1, n), n.tag = 3, n.payload = { element: null };
  var r = e.value;
  return n.callback = function() {
    Zu || (Zu = !0, u0 = r), Jh(t, e);
  }, n;
}
function i3(t, e, n) {
  n = Rr(-1, n), n.tag = 3;
  var r = t.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = e.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      Jh(t, e);
    };
  }
  var l = t.stateNode;
  return l !== null && typeof l.componentDidCatch == "function" && (n.callback = function() {
    Jh(t, e), typeof r != "function" && (di === null ? di = /* @__PURE__ */ new Set([this]) : di.add(this));
    var a = e.stack;
    this.componentDidCatch(e.value, { componentStack: a !== null ? a : "" });
  }), n;
}
function l2(t, e, n) {
  var r = t.pingCache;
  if (r === null) {
    r = t.pingCache = new D6();
    var o = /* @__PURE__ */ new Set();
    r.set(e, o);
  } else o = r.get(e), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(e, o));
  o.has(n) || (o.add(n), t = b6.bind(null, t, e, n), e.then(t, t));
}
function a2(t) {
  do {
    var e;
    if ((e = t.tag === 13) && (e = t.memoizedState, e = e !== null ? e.dehydrated !== null : !0), e) return t;
    t = t.return;
  } while (t !== null);
  return null;
}
function u2(t, e, n, r, o) {
  return t.mode & 1 ? (t.flags |= 65536, t.lanes = o, t) : (t === e ? t.flags |= 65536 : (t.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (e = Rr(-1, 1), e.tag = 2, ci(n, e, 1))), n.lanes |= 1), t);
}
var z6 = Ir.ReactCurrentOwner, an = !1;
function $t(t, e, n, r) {
  e.child = t === null ? Ay(e, null, n, r) : to(e, t.child, n, r);
}
function c2(t, e, n, r, o) {
  n = n.render;
  var l = e.ref;
  return bs(e, o), r = t1(t, e, n, r, l, o), n = n1(), t !== null && !an ? (e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~o, Or(t, e, o)) : (Ze && n && j0(e), e.flags |= 1, $t(t, e, r, o), e.child);
}
function d2(t, e, n, r, o) {
  if (t === null) {
    var l = n.type;
    return typeof l == "function" && !f1(l) && l.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (e.tag = 15, e.type = l, s3(t, e, l, r, o)) : (t = Nu(n.type, null, r, e, e.mode, o), t.ref = e.ref, t.return = e, e.child = t);
  }
  if (l = t.child, !(t.lanes & o)) {
    var a = l.memoizedProps;
    if (n = n.compare, n = n !== null ? n : wl, n(a, r) && t.ref === e.ref) return Or(t, e, o);
  }
  return e.flags |= 1, t = hi(l, r), t.ref = e.ref, t.return = e, e.child = t;
}
function s3(t, e, n, r, o) {
  if (t !== null) {
    var l = t.memoizedProps;
    if (wl(l, r) && t.ref === e.ref) if (an = !1, e.pendingProps = r = l, (t.lanes & o) !== 0) t.flags & 131072 && (an = !0);
    else return e.lanes = t.lanes, Or(t, e, o);
  }
  return e0(t, e, n, r, o);
}
function o3(t, e, n) {
  var r = e.pendingProps, o = r.children, l = t !== null ? t.memoizedState : null;
  if (r.mode === "hidden") if (!(e.mode & 1)) e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Ye(Ys, gn), gn |= n;
  else {
    if (!(n & 1073741824)) return t = l !== null ? l.baseLanes | n : n, e.lanes = e.childLanes = 1073741824, e.memoizedState = { baseLanes: t, cachePool: null, transitions: null }, e.updateQueue = null, Ye(Ys, gn), gn |= t, null;
    e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = l !== null ? l.baseLanes : n, Ye(Ys, gn), gn |= r;
  }
  else l !== null ? (r = l.baseLanes | n, e.memoizedState = null) : r = n, Ye(Ys, gn), gn |= r;
  return $t(t, e, o, n), e.child;
}
function l3(t, e) {
  var n = e.ref;
  (t === null && n !== null || t !== null && t.ref !== n) && (e.flags |= 512, e.flags |= 2097152);
}
function e0(t, e, n, r, o) {
  var l = cn(n) ? Zi : Wt.current;
  return l = Js(e, l), bs(e, o), n = t1(t, e, n, r, l, o), r = n1(), t !== null && !an ? (e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~o, Or(t, e, o)) : (Ze && r && j0(e), e.flags |= 1, $t(t, e, n, o), e.child);
}
function f2(t, e, n, r, o) {
  if (cn(n)) {
    var l = !0;
    Hu(e);
  } else l = !1;
  if (bs(e, o), e.stateNode === null) Eu(t, e), n3(e, n, r), Zh(e, n, r, o), r = !0;
  else if (t === null) {
    var a = e.stateNode, c = e.memoizedProps;
    a.props = c;
    var d = a.context, g = n.contextType;
    typeof g == "object" && g !== null ? g = On(g) : (g = cn(n) ? Zi : Wt.current, g = Js(e, g));
    var y = n.getDerivedStateFromProps, w = typeof y == "function" || typeof a.getSnapshotBeforeUpdate == "function";
    w || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (c !== r || d !== g) && o2(e, a, r, g), ti = !1;
    var _ = e.memoizedState;
    a.state = _, Xu(e, r, a, o), d = e.memoizedState, c !== r || _ !== d || un.current || ti ? (typeof y == "function" && (qh(e, n, y, r), d = e.memoizedState), (c = ti || s2(e, n, c, r, _, d, g)) ? (w || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = r, e.memoizedState = d), a.props = r, a.state = d, a.context = g, r = c) : (typeof a.componentDidMount == "function" && (e.flags |= 4194308), r = !1);
  } else {
    a = e.stateNode, Iy(t, e), c = e.memoizedProps, g = e.type === e.elementType ? c : Kn(e.type, c), a.props = g, w = e.pendingProps, _ = a.context, d = n.contextType, typeof d == "object" && d !== null ? d = On(d) : (d = cn(n) ? Zi : Wt.current, d = Js(e, d));
    var C = n.getDerivedStateFromProps;
    (y = typeof C == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (c !== w || _ !== d) && o2(e, a, r, d), ti = !1, _ = e.memoizedState, a.state = _, Xu(e, r, a, o);
    var v = e.memoizedState;
    c !== w || _ !== v || un.current || ti ? (typeof C == "function" && (qh(e, n, C, r), v = e.memoizedState), (g = ti || s2(e, n, g, r, _, v, d) || !1) ? (y || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(r, v, d), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(r, v, d)), typeof a.componentDidUpdate == "function" && (e.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || c === t.memoizedProps && _ === t.memoizedState || (e.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || c === t.memoizedProps && _ === t.memoizedState || (e.flags |= 1024), e.memoizedProps = r, e.memoizedState = v), a.props = r, a.state = v, a.context = d, r = g) : (typeof a.componentDidUpdate != "function" || c === t.memoizedProps && _ === t.memoizedState || (e.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || c === t.memoizedProps && _ === t.memoizedState || (e.flags |= 1024), r = !1);
  }
  return t0(t, e, n, r, l, o);
}
function t0(t, e, n, r, o, l) {
  l3(t, e);
  var a = (e.flags & 128) !== 0;
  if (!r && !a) return o && qg(e, n, !1), Or(t, e, l);
  r = e.stateNode, z6.current = e;
  var c = a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return e.flags |= 1, t !== null && a ? (e.child = to(e, t.child, null, l), e.child = to(e, null, c, l)) : $t(t, e, c, l), e.memoizedState = r.state, o && qg(e, n, !0), e.child;
}
function a3(t) {
  var e = t.stateNode;
  e.pendingContext ? bg(t, e.pendingContext, e.pendingContext !== e.context) : e.context && bg(t, e.context, !1), q0(t, e.containerInfo);
}
function h2(t, e, n, r, o) {
  return eo(), Y0(o), e.flags |= 256, $t(t, e, n, r), e.child;
}
var n0 = { dehydrated: null, treeContext: null, retryLane: 0 };
function r0(t) {
  return { baseLanes: t, cachePool: null, transitions: null };
}
function u3(t, e, n) {
  var r = e.pendingProps, o = nt.current, l = !1, a = (e.flags & 128) !== 0, c;
  if ((c = a) || (c = t !== null && t.memoizedState === null ? !1 : (o & 2) !== 0), c ? (l = !0, e.flags &= -129) : (t === null || t.memoizedState !== null) && (o |= 1), Ye(nt, o & 1), t === null)
    return Qh(e), t = e.memoizedState, t !== null && (t = t.dehydrated, t !== null) ? (e.mode & 1 ? t.data === "$!" ? e.lanes = 8 : e.lanes = 1073741824 : e.lanes = 1, null) : (a = r.children, t = r.fallback, l ? (r = e.mode, l = e.child, a = { mode: "hidden", children: a }, !(r & 1) && l !== null ? (l.childLanes = 0, l.pendingProps = a) : l = _c(a, r, 0, null), t = qi(t, r, n, null), l.return = e, t.return = e, l.sibling = t, e.child = l, e.child.memoizedState = r0(n), e.memoizedState = n0, t) : s1(e, a));
  if (o = t.memoizedState, o !== null && (c = o.dehydrated, c !== null)) return G6(t, e, a, r, c, o, n);
  if (l) {
    l = r.fallback, a = e.mode, o = t.child, c = o.sibling;
    var d = { mode: "hidden", children: r.children };
    return !(a & 1) && e.child !== o ? (r = e.child, r.childLanes = 0, r.pendingProps = d, e.deletions = null) : (r = hi(o, d), r.subtreeFlags = o.subtreeFlags & 14680064), c !== null ? l = hi(c, l) : (l = qi(l, a, n, null), l.flags |= 2), l.return = e, r.return = e, r.sibling = l, e.child = r, r = l, l = e.child, a = t.child.memoizedState, a = a === null ? r0(n) : { baseLanes: a.baseLanes | n, cachePool: null, transitions: a.transitions }, l.memoizedState = a, l.childLanes = t.childLanes & ~n, e.memoizedState = n0, r;
  }
  return l = t.child, t = l.sibling, r = hi(l, { mode: "visible", children: r.children }), !(e.mode & 1) && (r.lanes = n), r.return = e, r.sibling = null, t !== null && (n = e.deletions, n === null ? (e.deletions = [t], e.flags |= 16) : n.push(t)), e.child = r, e.memoizedState = null, r;
}
function s1(t, e) {
  return e = _c({ mode: "visible", children: e }, t.mode, 0, null), e.return = t, t.child = e;
}
function ru(t, e, n, r) {
  return r !== null && Y0(r), to(e, t.child, null, n), t = s1(e, e.pendingProps.children), t.flags |= 2, e.memoizedState = null, t;
}
function G6(t, e, n, r, o, l, a) {
  if (n)
    return e.flags & 256 ? (e.flags &= -257, r = sh(Error(K(422))), ru(t, e, a, r)) : e.memoizedState !== null ? (e.child = t.child, e.flags |= 128, null) : (l = r.fallback, o = e.mode, r = _c({ mode: "visible", children: r.children }, o, 0, null), l = qi(l, o, a, null), l.flags |= 2, r.return = e, l.return = e, r.sibling = l, e.child = r, e.mode & 1 && to(e, t.child, null, a), e.child.memoizedState = r0(a), e.memoizedState = n0, l);
  if (!(e.mode & 1)) return ru(t, e, a, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r) var c = r.dgst;
    return r = c, l = Error(K(419)), r = sh(l, r, void 0), ru(t, e, a, r);
  }
  if (c = (a & t.childLanes) !== 0, an || c) {
    if (r = Mt, r !== null) {
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
      o = o & (r.suspendedLanes | a) ? 0 : o, o !== 0 && o !== l.retryLane && (l.retryLane = o, Ar(t, o), bn(r, t, o, -1));
    }
    return d1(), r = sh(Error(K(421))), ru(t, e, a, r);
  }
  return o.data === "$?" ? (e.flags |= 128, e.child = t.child, e = q6.bind(null, t), o._reactRetry = e, null) : (t = l.treeContext, mn = ui(o.nextSibling), yn = e, Ze = !0, $n = null, t !== null && (Mn[Fn++] = Tr, Mn[Fn++] = Nr, Mn[Fn++] = Ji, Tr = t.id, Nr = t.overflow, Ji = e), e = s1(e, r.children), e.flags |= 4096, e);
}
function p2(t, e, n) {
  t.lanes |= e;
  var r = t.alternate;
  r !== null && (r.lanes |= e), bh(t.return, e, n);
}
function oh(t, e, n, r, o) {
  var l = t.memoizedState;
  l === null ? t.memoizedState = { isBackwards: e, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (l.isBackwards = e, l.rendering = null, l.renderingStartTime = 0, l.last = r, l.tail = n, l.tailMode = o);
}
function c3(t, e, n) {
  var r = e.pendingProps, o = r.revealOrder, l = r.tail;
  if ($t(t, e, r.children, n), r = nt.current, r & 2) r = r & 1 | 2, e.flags |= 128;
  else {
    if (t !== null && t.flags & 128) e: for (t = e.child; t !== null; ) {
      if (t.tag === 13) t.memoizedState !== null && p2(t, n, e);
      else if (t.tag === 19) p2(t, n, e);
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
  if (Ye(nt, r), !(e.mode & 1)) e.memoizedState = null;
  else switch (o) {
    case "forwards":
      for (n = e.child, o = null; n !== null; ) t = n.alternate, t !== null && $u(t) === null && (o = n), n = n.sibling;
      n = o, n === null ? (o = e.child, e.child = null) : (o = n.sibling, n.sibling = null), oh(e, !1, o, n, l);
      break;
    case "backwards":
      for (n = null, o = e.child, e.child = null; o !== null; ) {
        if (t = o.alternate, t !== null && $u(t) === null) {
          e.child = o;
          break;
        }
        t = o.sibling, o.sibling = n, n = o, o = t;
      }
      oh(e, !0, n, null, l);
      break;
    case "together":
      oh(e, !1, null, null, void 0);
      break;
    default:
      e.memoizedState = null;
  }
  return e.child;
}
function Eu(t, e) {
  !(e.mode & 1) && t !== null && (t.alternate = null, e.alternate = null, e.flags |= 2);
}
function Or(t, e, n) {
  if (t !== null && (e.dependencies = t.dependencies), ts |= e.lanes, !(n & e.childLanes)) return null;
  if (t !== null && e.child !== t.child) throw Error(K(153));
  if (e.child !== null) {
    for (t = e.child, n = hi(t, t.pendingProps), e.child = n, n.return = e; t.sibling !== null; ) t = t.sibling, n = n.sibling = hi(t, t.pendingProps), n.return = e;
    n.sibling = null;
  }
  return e.child;
}
function U6(t, e, n) {
  switch (e.tag) {
    case 3:
      a3(e), eo();
      break;
    case 5:
      Dy(e);
      break;
    case 1:
      cn(e.type) && Hu(e);
      break;
    case 4:
      q0(e, e.stateNode.containerInfo);
      break;
    case 10:
      var r = e.type._context, o = e.memoizedProps.value;
      Ye(Yu, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = e.memoizedState, r !== null)
        return r.dehydrated !== null ? (Ye(nt, nt.current & 1), e.flags |= 128, null) : n & e.child.childLanes ? u3(t, e, n) : (Ye(nt, nt.current & 1), t = Or(t, e, n), t !== null ? t.sibling : null);
      Ye(nt, nt.current & 1);
      break;
    case 19:
      if (r = (n & e.childLanes) !== 0, t.flags & 128) {
        if (r) return c3(t, e, n);
        e.flags |= 128;
      }
      if (o = e.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), Ye(nt, nt.current), r) break;
      return null;
    case 22:
    case 23:
      return e.lanes = 0, o3(t, e, n);
  }
  return Or(t, e, n);
}
var d3, i0, f3, h3;
d3 = function(t, e) {
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
i0 = function() {
};
f3 = function(t, e, n, r) {
  var o = t.memoizedProps;
  if (o !== r) {
    t = e.stateNode, $i(hr.current);
    var l = null;
    switch (n) {
      case "input":
        o = Ph(t, o), r = Ph(t, r), l = [];
        break;
      case "select":
        o = it({}, o, { value: void 0 }), r = it({}, r, { value: void 0 }), l = [];
        break;
      case "textarea":
        o = Rh(t, o), r = Rh(t, r), l = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (t.onclick = Bu);
    }
    Fh(n, r);
    var a;
    n = null;
    for (g in o) if (!r.hasOwnProperty(g) && o.hasOwnProperty(g) && o[g] != null) if (g === "style") {
      var c = o[g];
      for (a in c) c.hasOwnProperty(a) && (n || (n = {}), n[a] = "");
    } else g !== "dangerouslySetInnerHTML" && g !== "children" && g !== "suppressContentEditableWarning" && g !== "suppressHydrationWarning" && g !== "autoFocus" && (pl.hasOwnProperty(g) ? l || (l = []) : (l = l || []).push(g, null));
    for (g in r) {
      var d = r[g];
      if (c = o != null ? o[g] : void 0, r.hasOwnProperty(g) && d !== c && (d != null || c != null)) if (g === "style") if (c) {
        for (a in c) !c.hasOwnProperty(a) || d && d.hasOwnProperty(a) || (n || (n = {}), n[a] = "");
        for (a in d) d.hasOwnProperty(a) && c[a] !== d[a] && (n || (n = {}), n[a] = d[a]);
      } else n || (l || (l = []), l.push(
        g,
        n
      )), n = d;
      else g === "dangerouslySetInnerHTML" ? (d = d ? d.__html : void 0, c = c ? c.__html : void 0, d != null && c !== d && (l = l || []).push(g, d)) : g === "children" ? typeof d != "string" && typeof d != "number" || (l = l || []).push(g, "" + d) : g !== "suppressContentEditableWarning" && g !== "suppressHydrationWarning" && (pl.hasOwnProperty(g) ? (d != null && g === "onScroll" && $e("scroll", t), l || c === d || (l = [])) : (l = l || []).push(g, d));
    }
    n && (l = l || []).push("style", n);
    var g = l;
    (e.updateQueue = g) && (e.flags |= 4);
  }
};
h3 = function(t, e, n, r) {
  n !== r && (e.flags |= 4);
};
function Yo(t, e) {
  if (!Ze) switch (t.tailMode) {
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
function Ht(t) {
  var e = t.alternate !== null && t.alternate.child === t.child, n = 0, r = 0;
  if (e) for (var o = t.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = t, o = o.sibling;
  else for (o = t.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = t, o = o.sibling;
  return t.subtreeFlags |= r, t.childLanes = n, e;
}
function B6(t, e, n) {
  var r = e.pendingProps;
  switch (W0(e), e.tag) {
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
      return Ht(e), null;
    case 1:
      return cn(e.type) && Vu(), Ht(e), null;
    case 3:
      return r = e.stateNode, no(), Qe(un), Qe(Wt), J0(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (t === null || t.child === null) && (tu(e) ? e.flags |= 4 : t === null || t.memoizedState.isDehydrated && !(e.flags & 256) || (e.flags |= 1024, $n !== null && (f0($n), $n = null))), i0(t, e), Ht(e), null;
    case 5:
      Z0(e);
      var o = $i(Pl.current);
      if (n = e.type, t !== null && e.stateNode != null) f3(t, e, n, r, o), t.ref !== e.ref && (e.flags |= 512, e.flags |= 2097152);
      else {
        if (!r) {
          if (e.stateNode === null) throw Error(K(166));
          return Ht(e), null;
        }
        if (t = $i(hr.current), tu(e)) {
          r = e.stateNode, n = e.type;
          var l = e.memoizedProps;
          switch (r[cr] = e, r[kl] = l, t = (e.mode & 1) !== 0, n) {
            case "dialog":
              $e("cancel", r), $e("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              $e("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < tl.length; o++) $e(tl[o], r);
              break;
            case "source":
              $e("error", r);
              break;
            case "img":
            case "image":
            case "link":
              $e(
                "error",
                r
              ), $e("load", r);
              break;
            case "details":
              $e("toggle", r);
              break;
            case "input":
              Cg(r, l), $e("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!l.multiple }, $e("invalid", r);
              break;
            case "textarea":
              Eg(r, l), $e("invalid", r);
          }
          Fh(n, l), o = null;
          for (var a in l) if (l.hasOwnProperty(a)) {
            var c = l[a];
            a === "children" ? typeof c == "string" ? r.textContent !== c && (l.suppressHydrationWarning !== !0 && eu(r.textContent, c, t), o = ["children", c]) : typeof c == "number" && r.textContent !== "" + c && (l.suppressHydrationWarning !== !0 && eu(
              r.textContent,
              c,
              t
            ), o = ["children", "" + c]) : pl.hasOwnProperty(a) && c != null && a === "onScroll" && $e("scroll", r);
          }
          switch (n) {
            case "input":
              Ka(r), kg(r, l, !0);
              break;
            case "textarea":
              Ka(r), Pg(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof l.onClick == "function" && (r.onclick = Bu);
          }
          r = o, e.updateQueue = r, r !== null && (e.flags |= 4);
        } else {
          a = o.nodeType === 9 ? o : o.ownerDocument, t === "http://www.w3.org/1999/xhtml" && (t = Vm(n)), t === "http://www.w3.org/1999/xhtml" ? n === "script" ? (t = a.createElement("div"), t.innerHTML = "<script><\/script>", t = t.removeChild(t.firstChild)) : typeof r.is == "string" ? t = a.createElement(n, { is: r.is }) : (t = a.createElement(n), n === "select" && (a = t, r.multiple ? a.multiple = !0 : r.size && (a.size = r.size))) : t = a.createElementNS(t, n), t[cr] = e, t[kl] = r, d3(t, e, !1, !1), e.stateNode = t;
          e: {
            switch (a = Lh(n, r), n) {
              case "dialog":
                $e("cancel", t), $e("close", t), o = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                $e("load", t), o = r;
                break;
              case "video":
              case "audio":
                for (o = 0; o < tl.length; o++) $e(tl[o], t);
                o = r;
                break;
              case "source":
                $e("error", t), o = r;
                break;
              case "img":
              case "image":
              case "link":
                $e(
                  "error",
                  t
                ), $e("load", t), o = r;
                break;
              case "details":
                $e("toggle", t), o = r;
                break;
              case "input":
                Cg(t, r), o = Ph(t, r), $e("invalid", t);
                break;
              case "option":
                o = r;
                break;
              case "select":
                t._wrapperState = { wasMultiple: !!r.multiple }, o = it({}, r, { value: void 0 }), $e("invalid", t);
                break;
              case "textarea":
                Eg(t, r), o = Rh(t, r), $e("invalid", t);
                break;
              default:
                o = r;
            }
            Fh(n, o), c = o;
            for (l in c) if (c.hasOwnProperty(l)) {
              var d = c[l];
              l === "style" ? Wm(t, d) : l === "dangerouslySetInnerHTML" ? (d = d ? d.__html : void 0, d != null && Hm(t, d)) : l === "children" ? typeof d == "string" ? (n !== "textarea" || d !== "") && gl(t, d) : typeof d == "number" && gl(t, "" + d) : l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && l !== "autoFocus" && (pl.hasOwnProperty(l) ? d != null && l === "onScroll" && $e("scroll", t) : d != null && R0(t, l, d, a));
            }
            switch (n) {
              case "input":
                Ka(t), kg(t, r, !1);
                break;
              case "textarea":
                Ka(t), Pg(t);
                break;
              case "option":
                r.value != null && t.setAttribute("value", "" + pi(r.value));
                break;
              case "select":
                t.multiple = !!r.multiple, l = r.value, l != null ? Ks(t, !!r.multiple, l, !1) : r.defaultValue != null && Ks(
                  t,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof o.onClick == "function" && (t.onclick = Bu);
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
      return Ht(e), null;
    case 6:
      if (t && e.stateNode != null) h3(t, e, t.memoizedProps, r);
      else {
        if (typeof r != "string" && e.stateNode === null) throw Error(K(166));
        if (n = $i(Pl.current), $i(hr.current), tu(e)) {
          if (r = e.stateNode, n = e.memoizedProps, r[cr] = e, (l = r.nodeValue !== n) && (t = yn, t !== null)) switch (t.tag) {
            case 3:
              eu(r.nodeValue, n, (t.mode & 1) !== 0);
              break;
            case 5:
              t.memoizedProps.suppressHydrationWarning !== !0 && eu(r.nodeValue, n, (t.mode & 1) !== 0);
          }
          l && (e.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[cr] = e, e.stateNode = r;
      }
      return Ht(e), null;
    case 13:
      if (Qe(nt), r = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
        if (Ze && mn !== null && e.mode & 1 && !(e.flags & 128)) Fy(), eo(), e.flags |= 98560, l = !1;
        else if (l = tu(e), r !== null && r.dehydrated !== null) {
          if (t === null) {
            if (!l) throw Error(K(318));
            if (l = e.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(K(317));
            l[cr] = e;
          } else eo(), !(e.flags & 128) && (e.memoizedState = null), e.flags |= 4;
          Ht(e), l = !1;
        } else $n !== null && (f0($n), $n = null), l = !0;
        if (!l) return e.flags & 65536 ? e : null;
      }
      return e.flags & 128 ? (e.lanes = n, e) : (r = r !== null, r !== (t !== null && t.memoizedState !== null) && r && (e.child.flags |= 8192, e.mode & 1 && (t === null || nt.current & 1 ? wt === 0 && (wt = 3) : d1())), e.updateQueue !== null && (e.flags |= 4), Ht(e), null);
    case 4:
      return no(), i0(t, e), t === null && xl(e.stateNode.containerInfo), Ht(e), null;
    case 10:
      return $0(e.type._context), Ht(e), null;
    case 17:
      return cn(e.type) && Vu(), Ht(e), null;
    case 19:
      if (Qe(nt), l = e.memoizedState, l === null) return Ht(e), null;
      if (r = (e.flags & 128) !== 0, a = l.rendering, a === null) if (r) Yo(l, !1);
      else {
        if (wt !== 0 || t !== null && t.flags & 128) for (t = e.child; t !== null; ) {
          if (a = $u(t), a !== null) {
            for (e.flags |= 128, Yo(l, !1), r = a.updateQueue, r !== null && (e.updateQueue = r, e.flags |= 4), e.subtreeFlags = 0, r = n, n = e.child; n !== null; ) l = n, t = r, l.flags &= 14680066, a = l.alternate, a === null ? (l.childLanes = 0, l.lanes = t, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = a.childLanes, l.lanes = a.lanes, l.child = a.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = a.memoizedProps, l.memoizedState = a.memoizedState, l.updateQueue = a.updateQueue, l.type = a.type, t = a.dependencies, l.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }), n = n.sibling;
            return Ye(nt, nt.current & 1 | 2), e.child;
          }
          t = t.sibling;
        }
        l.tail !== null && dt() > io && (e.flags |= 128, r = !0, Yo(l, !1), e.lanes = 4194304);
      }
      else {
        if (!r) if (t = $u(a), t !== null) {
          if (e.flags |= 128, r = !0, n = t.updateQueue, n !== null && (e.updateQueue = n, e.flags |= 4), Yo(l, !0), l.tail === null && l.tailMode === "hidden" && !a.alternate && !Ze) return Ht(e), null;
        } else 2 * dt() - l.renderingStartTime > io && n !== 1073741824 && (e.flags |= 128, r = !0, Yo(l, !1), e.lanes = 4194304);
        l.isBackwards ? (a.sibling = e.child, e.child = a) : (n = l.last, n !== null ? n.sibling = a : e.child = a, l.last = a);
      }
      return l.tail !== null ? (e = l.tail, l.rendering = e, l.tail = e.sibling, l.renderingStartTime = dt(), e.sibling = null, n = nt.current, Ye(nt, r ? n & 1 | 2 : n & 1), e) : (Ht(e), null);
    case 22:
    case 23:
      return c1(), r = e.memoizedState !== null, t !== null && t.memoizedState !== null !== r && (e.flags |= 8192), r && e.mode & 1 ? gn & 1073741824 && (Ht(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : Ht(e), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(K(156, e.tag));
}
function V6(t, e) {
  switch (W0(e), e.tag) {
    case 1:
      return cn(e.type) && Vu(), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
    case 3:
      return no(), Qe(un), Qe(Wt), J0(), t = e.flags, t & 65536 && !(t & 128) ? (e.flags = t & -65537 | 128, e) : null;
    case 5:
      return Z0(e), null;
    case 13:
      if (Qe(nt), t = e.memoizedState, t !== null && t.dehydrated !== null) {
        if (e.alternate === null) throw Error(K(340));
        eo();
      }
      return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
    case 19:
      return Qe(nt), null;
    case 4:
      return no(), null;
    case 10:
      return $0(e.type._context), null;
    case 22:
    case 23:
      return c1(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var iu = !1, jt = !1, H6 = typeof WeakSet == "function" ? WeakSet : Set, le = null;
function Ws(t, e) {
  var n = t.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    lt(t, e, r);
  }
  else n.current = null;
}
function s0(t, e, n) {
  try {
    n();
  } catch (r) {
    lt(t, e, r);
  }
}
var g2 = !1;
function j6(t, e) {
  if (Hh = zu, t = vy(), H0(t)) {
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
        var a = 0, c = -1, d = -1, g = 0, y = 0, w = t, _ = null;
        t: for (; ; ) {
          for (var C; w !== n || o !== 0 && w.nodeType !== 3 || (c = a + o), w !== l || r !== 0 && w.nodeType !== 3 || (d = a + r), w.nodeType === 3 && (a += w.nodeValue.length), (C = w.firstChild) !== null; )
            _ = w, w = C;
          for (; ; ) {
            if (w === t) break t;
            if (_ === n && ++g === o && (c = a), _ === l && ++y === r && (d = a), (C = w.nextSibling) !== null) break;
            w = _, _ = w.parentNode;
          }
          w = C;
        }
        n = c === -1 || d === -1 ? null : { start: c, end: d };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (jh = { focusedElem: t, selectionRange: n }, zu = !1, le = e; le !== null; ) if (e = le, t = e.child, (e.subtreeFlags & 1028) !== 0 && t !== null) t.return = e, le = t;
  else for (; le !== null; ) {
    e = le;
    try {
      var v = e.alternate;
      if (e.flags & 1024) switch (e.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (v !== null) {
            var E = v.memoizedProps, R = v.memoizedState, k = e.stateNode, x = k.getSnapshotBeforeUpdate(e.elementType === e.type ? E : Kn(e.type, E), R);
            k.__reactInternalSnapshotBeforeUpdate = x;
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
    } catch (S) {
      lt(e, e.return, S);
    }
    if (t = e.sibling, t !== null) {
      t.return = e.return, le = t;
      break;
    }
    le = e.return;
  }
  return v = g2, g2 = !1, v;
}
function cl(t, e, n) {
  var r = e.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & t) === t) {
        var l = o.destroy;
        o.destroy = void 0, l !== void 0 && s0(e, n, l);
      }
      o = o.next;
    } while (o !== r);
  }
}
function yc(t, e) {
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
function o0(t) {
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
function p3(t) {
  var e = t.alternate;
  e !== null && (t.alternate = null, p3(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && (delete e[cr], delete e[kl], delete e[Kh], delete e[E6], delete e[P6])), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
}
function g3(t) {
  return t.tag === 5 || t.tag === 3 || t.tag === 4;
}
function m2(t) {
  e: for (; ; ) {
    for (; t.sibling === null; ) {
      if (t.return === null || g3(t.return)) return null;
      t = t.return;
    }
    for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
      if (t.flags & 2 || t.child === null || t.tag === 4) continue e;
      t.child.return = t, t = t.child;
    }
    if (!(t.flags & 2)) return t.stateNode;
  }
}
function l0(t, e, n) {
  var r = t.tag;
  if (r === 5 || r === 6) t = t.stateNode, e ? n.nodeType === 8 ? n.parentNode.insertBefore(t, e) : n.insertBefore(t, e) : (n.nodeType === 8 ? (e = n.parentNode, e.insertBefore(t, n)) : (e = n, e.appendChild(t)), n = n._reactRootContainer, n != null || e.onclick !== null || (e.onclick = Bu));
  else if (r !== 4 && (t = t.child, t !== null)) for (l0(t, e, n), t = t.sibling; t !== null; ) l0(t, e, n), t = t.sibling;
}
function a0(t, e, n) {
  var r = t.tag;
  if (r === 5 || r === 6) t = t.stateNode, e ? n.insertBefore(t, e) : n.appendChild(t);
  else if (r !== 4 && (t = t.child, t !== null)) for (a0(t, e, n), t = t.sibling; t !== null; ) a0(t, e, n), t = t.sibling;
}
var At = null, Xn = !1;
function qr(t, e, n) {
  for (n = n.child; n !== null; ) m3(t, e, n), n = n.sibling;
}
function m3(t, e, n) {
  if (fr && typeof fr.onCommitFiberUnmount == "function") try {
    fr.onCommitFiberUnmount(uc, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      jt || Ws(n, e);
    case 6:
      var r = At, o = Xn;
      At = null, qr(t, e, n), At = r, Xn = o, At !== null && (Xn ? (t = At, n = n.stateNode, t.nodeType === 8 ? t.parentNode.removeChild(n) : t.removeChild(n)) : At.removeChild(n.stateNode));
      break;
    case 18:
      At !== null && (Xn ? (t = At, n = n.stateNode, t.nodeType === 8 ? Jf(t.parentNode, n) : t.nodeType === 1 && Jf(t, n), _l(t)) : Jf(At, n.stateNode));
      break;
    case 4:
      r = At, o = Xn, At = n.stateNode.containerInfo, Xn = !0, qr(t, e, n), At = r, Xn = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!jt && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var l = o, a = l.destroy;
          l = l.tag, a !== void 0 && (l & 2 || l & 4) && s0(n, e, a), o = o.next;
        } while (o !== r);
      }
      qr(t, e, n);
      break;
    case 1:
      if (!jt && (Ws(n, e), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (c) {
        lt(n, e, c);
      }
      qr(t, e, n);
      break;
    case 21:
      qr(t, e, n);
      break;
    case 22:
      n.mode & 1 ? (jt = (r = jt) || n.memoizedState !== null, qr(t, e, n), jt = r) : qr(t, e, n);
      break;
    default:
      qr(t, e, n);
  }
}
function y2(t) {
  var e = t.updateQueue;
  if (e !== null) {
    t.updateQueue = null;
    var n = t.stateNode;
    n === null && (n = t.stateNode = new H6()), e.forEach(function(r) {
      var o = Z6.bind(null, t, r);
      n.has(r) || (n.add(r), r.then(o, o));
    });
  }
}
function Wn(t, e) {
  var n = e.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var o = n[r];
    try {
      var l = t, a = e, c = a;
      e: for (; c !== null; ) {
        switch (c.tag) {
          case 5:
            At = c.stateNode, Xn = !1;
            break e;
          case 3:
            At = c.stateNode.containerInfo, Xn = !0;
            break e;
          case 4:
            At = c.stateNode.containerInfo, Xn = !0;
            break e;
        }
        c = c.return;
      }
      if (At === null) throw Error(K(160));
      m3(l, a, o), At = null, Xn = !1;
      var d = o.alternate;
      d !== null && (d.return = null), o.return = null;
    } catch (g) {
      lt(o, e, g);
    }
  }
  if (e.subtreeFlags & 12854) for (e = e.child; e !== null; ) y3(e, t), e = e.sibling;
}
function y3(t, e) {
  var n = t.alternate, r = t.flags;
  switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Wn(e, t), ar(t), r & 4) {
        try {
          cl(3, t, t.return), yc(3, t);
        } catch (E) {
          lt(t, t.return, E);
        }
        try {
          cl(5, t, t.return);
        } catch (E) {
          lt(t, t.return, E);
        }
      }
      break;
    case 1:
      Wn(e, t), ar(t), r & 512 && n !== null && Ws(n, n.return);
      break;
    case 5:
      if (Wn(e, t), ar(t), r & 512 && n !== null && Ws(n, n.return), t.flags & 32) {
        var o = t.stateNode;
        try {
          gl(o, "");
        } catch (E) {
          lt(t, t.return, E);
        }
      }
      if (r & 4 && (o = t.stateNode, o != null)) {
        var l = t.memoizedProps, a = n !== null ? n.memoizedProps : l, c = t.type, d = t.updateQueue;
        if (t.updateQueue = null, d !== null) try {
          c === "input" && l.type === "radio" && l.name != null && Um(o, l), Lh(c, a);
          var g = Lh(c, l);
          for (a = 0; a < d.length; a += 2) {
            var y = d[a], w = d[a + 1];
            y === "style" ? Wm(o, w) : y === "dangerouslySetInnerHTML" ? Hm(o, w) : y === "children" ? gl(o, w) : R0(o, y, w, g);
          }
          switch (c) {
            case "input":
              Th(o, l);
              break;
            case "textarea":
              Bm(o, l);
              break;
            case "select":
              var _ = o._wrapperState.wasMultiple;
              o._wrapperState.wasMultiple = !!l.multiple;
              var C = l.value;
              C != null ? Ks(o, !!l.multiple, C, !1) : _ !== !!l.multiple && (l.defaultValue != null ? Ks(
                o,
                !!l.multiple,
                l.defaultValue,
                !0
              ) : Ks(o, !!l.multiple, l.multiple ? [] : "", !1));
          }
          o[kl] = l;
        } catch (E) {
          lt(t, t.return, E);
        }
      }
      break;
    case 6:
      if (Wn(e, t), ar(t), r & 4) {
        if (t.stateNode === null) throw Error(K(162));
        o = t.stateNode, l = t.memoizedProps;
        try {
          o.nodeValue = l;
        } catch (E) {
          lt(t, t.return, E);
        }
      }
      break;
    case 3:
      if (Wn(e, t), ar(t), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        _l(e.containerInfo);
      } catch (E) {
        lt(t, t.return, E);
      }
      break;
    case 4:
      Wn(e, t), ar(t);
      break;
    case 13:
      Wn(e, t), ar(t), o = t.child, o.flags & 8192 && (l = o.memoizedState !== null, o.stateNode.isHidden = l, !l || o.alternate !== null && o.alternate.memoizedState !== null || (a1 = dt())), r & 4 && y2(t);
      break;
    case 22:
      if (y = n !== null && n.memoizedState !== null, t.mode & 1 ? (jt = (g = jt) || y, Wn(e, t), jt = g) : Wn(e, t), ar(t), r & 8192) {
        if (g = t.memoizedState !== null, (t.stateNode.isHidden = g) && !y && t.mode & 1) for (le = t, y = t.child; y !== null; ) {
          for (w = le = y; le !== null; ) {
            switch (_ = le, C = _.child, _.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                cl(4, _, _.return);
                break;
              case 1:
                Ws(_, _.return);
                var v = _.stateNode;
                if (typeof v.componentWillUnmount == "function") {
                  r = _, n = _.return;
                  try {
                    e = r, v.props = e.memoizedProps, v.state = e.memoizedState, v.componentWillUnmount();
                  } catch (E) {
                    lt(r, n, E);
                  }
                }
                break;
              case 5:
                Ws(_, _.return);
                break;
              case 22:
                if (_.memoizedState !== null) {
                  _2(w);
                  continue;
                }
            }
            C !== null ? (C.return = _, le = C) : _2(w);
          }
          y = y.sibling;
        }
        e: for (y = null, w = t; ; ) {
          if (w.tag === 5) {
            if (y === null) {
              y = w;
              try {
                o = w.stateNode, g ? (l = o.style, typeof l.setProperty == "function" ? l.setProperty("display", "none", "important") : l.display = "none") : (c = w.stateNode, d = w.memoizedProps.style, a = d != null && d.hasOwnProperty("display") ? d.display : null, c.style.display = jm("display", a));
              } catch (E) {
                lt(t, t.return, E);
              }
            }
          } else if (w.tag === 6) {
            if (y === null) try {
              w.stateNode.nodeValue = g ? "" : w.memoizedProps;
            } catch (E) {
              lt(t, t.return, E);
            }
          } else if ((w.tag !== 22 && w.tag !== 23 || w.memoizedState === null || w === t) && w.child !== null) {
            w.child.return = w, w = w.child;
            continue;
          }
          if (w === t) break e;
          for (; w.sibling === null; ) {
            if (w.return === null || w.return === t) break e;
            y === w && (y = null), w = w.return;
          }
          y === w && (y = null), w.sibling.return = w.return, w = w.sibling;
        }
      }
      break;
    case 19:
      Wn(e, t), ar(t), r & 4 && y2(t);
      break;
    case 21:
      break;
    default:
      Wn(
        e,
        t
      ), ar(t);
  }
}
function ar(t) {
  var e = t.flags;
  if (e & 2) {
    try {
      e: {
        for (var n = t.return; n !== null; ) {
          if (g3(n)) {
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
          r.flags & 32 && (gl(o, ""), r.flags &= -33);
          var l = m2(t);
          a0(t, l, o);
          break;
        case 3:
        case 4:
          var a = r.stateNode.containerInfo, c = m2(t);
          l0(t, c, a);
          break;
        default:
          throw Error(K(161));
      }
    } catch (d) {
      lt(t, t.return, d);
    }
    t.flags &= -3;
  }
  e & 4096 && (t.flags &= -4097);
}
function W6(t, e, n) {
  le = t, v3(t);
}
function v3(t, e, n) {
  for (var r = (t.mode & 1) !== 0; le !== null; ) {
    var o = le, l = o.child;
    if (o.tag === 22 && r) {
      var a = o.memoizedState !== null || iu;
      if (!a) {
        var c = o.alternate, d = c !== null && c.memoizedState !== null || jt;
        c = iu;
        var g = jt;
        if (iu = a, (jt = d) && !g) for (le = o; le !== null; ) a = le, d = a.child, a.tag === 22 && a.memoizedState !== null ? S2(o) : d !== null ? (d.return = a, le = d) : S2(o);
        for (; l !== null; ) le = l, v3(l), l = l.sibling;
        le = o, iu = c, jt = g;
      }
      v2(t);
    } else o.subtreeFlags & 8772 && l !== null ? (l.return = o, le = l) : v2(t);
  }
}
function v2(t) {
  for (; le !== null; ) {
    var e = le;
    if (e.flags & 8772) {
      var n = e.alternate;
      try {
        if (e.flags & 8772) switch (e.tag) {
          case 0:
          case 11:
          case 15:
            jt || yc(5, e);
            break;
          case 1:
            var r = e.stateNode;
            if (e.flags & 4 && !jt) if (n === null) r.componentDidMount();
            else {
              var o = e.elementType === e.type ? n.memoizedProps : Kn(e.type, n.memoizedProps);
              r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var l = e.updateQueue;
            l !== null && n2(e, l, r);
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
              n2(e, a, n);
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
                  var w = y.dehydrated;
                  w !== null && _l(w);
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
        jt || e.flags & 512 && o0(e);
      } catch (_) {
        lt(e, e.return, _);
      }
    }
    if (e === t) {
      le = null;
      break;
    }
    if (n = e.sibling, n !== null) {
      n.return = e.return, le = n;
      break;
    }
    le = e.return;
  }
}
function _2(t) {
  for (; le !== null; ) {
    var e = le;
    if (e === t) {
      le = null;
      break;
    }
    var n = e.sibling;
    if (n !== null) {
      n.return = e.return, le = n;
      break;
    }
    le = e.return;
  }
}
function S2(t) {
  for (; le !== null; ) {
    var e = le;
    try {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          var n = e.return;
          try {
            yc(4, e);
          } catch (d) {
            lt(e, n, d);
          }
          break;
        case 1:
          var r = e.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = e.return;
            try {
              r.componentDidMount();
            } catch (d) {
              lt(e, o, d);
            }
          }
          var l = e.return;
          try {
            o0(e);
          } catch (d) {
            lt(e, l, d);
          }
          break;
        case 5:
          var a = e.return;
          try {
            o0(e);
          } catch (d) {
            lt(e, a, d);
          }
      }
    } catch (d) {
      lt(e, e.return, d);
    }
    if (e === t) {
      le = null;
      break;
    }
    var c = e.sibling;
    if (c !== null) {
      c.return = e.return, le = c;
      break;
    }
    le = e.return;
  }
}
var Y6 = Math.ceil, qu = Ir.ReactCurrentDispatcher, o1 = Ir.ReactCurrentOwner, An = Ir.ReactCurrentBatchConfig, Re = 0, Mt = null, gt = null, Ot = 0, gn = 0, Ys = vi(0), wt = 0, Ml = null, ts = 0, vc = 0, l1 = 0, dl = null, ln = null, a1 = 0, io = 1 / 0, Er = null, Zu = !1, u0 = null, di = null, su = !1, si = null, Ju = 0, fl = 0, c0 = null, Pu = -1, Tu = 0;
function bt() {
  return Re & 6 ? dt() : Pu !== -1 ? Pu : Pu = dt();
}
function fi(t) {
  return t.mode & 1 ? Re & 2 && Ot !== 0 ? Ot & -Ot : N6.transition !== null ? (Tu === 0 && (Tu = ny()), Tu) : (t = De, t !== 0 || (t = window.event, t = t === void 0 ? 16 : uy(t.type)), t) : 1;
}
function bn(t, e, n, r) {
  if (50 < fl) throw fl = 0, c0 = null, Error(K(185));
  Il(t, n, r), (!(Re & 2) || t !== Mt) && (t === Mt && (!(Re & 2) && (vc |= n), wt === 4 && ri(t, Ot)), dn(t, r), n === 1 && Re === 0 && !(e.mode & 1) && (io = dt() + 500, pc && _i()));
}
function dn(t, e) {
  var n = t.callbackNode;
  Nv(t, e);
  var r = Du(t, t === Mt ? Ot : 0);
  if (r === 0) n !== null && Rg(n), t.callbackNode = null, t.callbackPriority = 0;
  else if (e = r & -r, t.callbackPriority !== e) {
    if (n != null && Rg(n), e === 1) t.tag === 0 ? T6(w2.bind(null, t)) : Ny(w2.bind(null, t)), C6(function() {
      !(Re & 6) && _i();
    }), n = null;
    else {
      switch (ry(r)) {
        case 1:
          n = O0;
          break;
        case 4:
          n = ey;
          break;
        case 16:
          n = Iu;
          break;
        case 536870912:
          n = ty;
          break;
        default:
          n = Iu;
      }
      n = P3(n, _3.bind(null, t));
    }
    t.callbackPriority = e, t.callbackNode = n;
  }
}
function _3(t, e) {
  if (Pu = -1, Tu = 0, Re & 6) throw Error(K(327));
  var n = t.callbackNode;
  if (qs() && t.callbackNode !== n) return null;
  var r = Du(t, t === Mt ? Ot : 0);
  if (r === 0) return null;
  if (r & 30 || r & t.expiredLanes || e) e = ec(t, r);
  else {
    e = r;
    var o = Re;
    Re |= 2;
    var l = w3();
    (Mt !== t || Ot !== e) && (Er = null, io = dt() + 500, bi(t, e));
    do
      try {
        $6();
        break;
      } catch (c) {
        S3(t, c);
      }
    while (!0);
    X0(), qu.current = l, Re = o, gt !== null ? e = 0 : (Mt = null, Ot = 0, e = wt);
  }
  if (e !== 0) {
    if (e === 2 && (o = zh(t), o !== 0 && (r = o, e = d0(t, o))), e === 1) throw n = Ml, bi(t, 0), ri(t, r), dn(t, dt()), n;
    if (e === 6) ri(t, r);
    else {
      if (o = t.current.alternate, !(r & 30) && !K6(o) && (e = ec(t, r), e === 2 && (l = zh(t), l !== 0 && (r = l, e = d0(t, l))), e === 1)) throw n = Ml, bi(t, 0), ri(t, r), dn(t, dt()), n;
      switch (t.finishedWork = o, t.finishedLanes = r, e) {
        case 0:
        case 1:
          throw Error(K(345));
        case 2:
          Wi(t, ln, Er);
          break;
        case 3:
          if (ri(t, r), (r & 130023424) === r && (e = a1 + 500 - dt(), 10 < e)) {
            if (Du(t, 0) !== 0) break;
            if (o = t.suspendedLanes, (o & r) !== r) {
              bt(), t.pingedLanes |= t.suspendedLanes & o;
              break;
            }
            t.timeoutHandle = Yh(Wi.bind(null, t, ln, Er), e);
            break;
          }
          Wi(t, ln, Er);
          break;
        case 4:
          if (ri(t, r), (r & 4194240) === r) break;
          for (e = t.eventTimes, o = -1; 0 < r; ) {
            var a = 31 - Qn(r);
            l = 1 << a, a = e[a], a > o && (o = a), r &= ~l;
          }
          if (r = o, r = dt() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Y6(r / 1960)) - r, 10 < r) {
            t.timeoutHandle = Yh(Wi.bind(null, t, ln, Er), r);
            break;
          }
          Wi(t, ln, Er);
          break;
        case 5:
          Wi(t, ln, Er);
          break;
        default:
          throw Error(K(329));
      }
    }
  }
  return dn(t, dt()), t.callbackNode === n ? _3.bind(null, t) : null;
}
function d0(t, e) {
  var n = dl;
  return t.current.memoizedState.isDehydrated && (bi(t, e).flags |= 256), t = ec(t, e), t !== 2 && (e = ln, ln = n, e !== null && f0(e)), t;
}
function f0(t) {
  ln === null ? ln = t : ln.push.apply(ln, t);
}
function K6(t) {
  for (var e = t; ; ) {
    if (e.flags & 16384) {
      var n = e.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var o = n[r], l = o.getSnapshot;
        o = o.value;
        try {
          if (!Zn(l(), o)) return !1;
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
function ri(t, e) {
  for (e &= ~l1, e &= ~vc, t.suspendedLanes |= e, t.pingedLanes &= ~e, t = t.expirationTimes; 0 < e; ) {
    var n = 31 - Qn(e), r = 1 << n;
    t[n] = -1, e &= ~r;
  }
}
function w2(t) {
  if (Re & 6) throw Error(K(327));
  qs();
  var e = Du(t, 0);
  if (!(e & 1)) return dn(t, dt()), null;
  var n = ec(t, e);
  if (t.tag !== 0 && n === 2) {
    var r = zh(t);
    r !== 0 && (e = r, n = d0(t, r));
  }
  if (n === 1) throw n = Ml, bi(t, 0), ri(t, e), dn(t, dt()), n;
  if (n === 6) throw Error(K(345));
  return t.finishedWork = t.current.alternate, t.finishedLanes = e, Wi(t, ln, Er), dn(t, dt()), null;
}
function u1(t, e) {
  var n = Re;
  Re |= 1;
  try {
    return t(e);
  } finally {
    Re = n, Re === 0 && (io = dt() + 500, pc && _i());
  }
}
function ns(t) {
  si !== null && si.tag === 0 && !(Re & 6) && qs();
  var e = Re;
  Re |= 1;
  var n = An.transition, r = De;
  try {
    if (An.transition = null, De = 1, t) return t();
  } finally {
    De = r, An.transition = n, Re = e, !(Re & 6) && _i();
  }
}
function c1() {
  gn = Ys.current, Qe(Ys);
}
function bi(t, e) {
  t.finishedWork = null, t.finishedLanes = 0;
  var n = t.timeoutHandle;
  if (n !== -1 && (t.timeoutHandle = -1, x6(n)), gt !== null) for (n = gt.return; n !== null; ) {
    var r = n;
    switch (W0(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Vu();
        break;
      case 3:
        no(), Qe(un), Qe(Wt), J0();
        break;
      case 5:
        Z0(r);
        break;
      case 4:
        no();
        break;
      case 13:
        Qe(nt);
        break;
      case 19:
        Qe(nt);
        break;
      case 10:
        $0(r.type._context);
        break;
      case 22:
      case 23:
        c1();
    }
    n = n.return;
  }
  if (Mt = t, gt = t = hi(t.current, null), Ot = gn = e, wt = 0, Ml = null, l1 = vc = ts = 0, ln = dl = null, Xi !== null) {
    for (e = 0; e < Xi.length; e++) if (n = Xi[e], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var o = r.next, l = n.pending;
      if (l !== null) {
        var a = l.next;
        l.next = o, r.next = a;
      }
      n.pending = r;
    }
    Xi = null;
  }
  return t;
}
function S3(t, e) {
  do {
    var n = gt;
    try {
      if (X0(), Cu.current = bu, Qu) {
        for (var r = rt.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        Qu = !1;
      }
      if (es = 0, Rt = St = rt = null, ul = !1, Tl = 0, o1.current = null, n === null || n.return === null) {
        wt = 1, Ml = e, gt = null;
        break;
      }
      e: {
        var l = t, a = n.return, c = n, d = e;
        if (e = Ot, c.flags |= 32768, d !== null && typeof d == "object" && typeof d.then == "function") {
          var g = d, y = c, w = y.tag;
          if (!(y.mode & 1) && (w === 0 || w === 11 || w === 15)) {
            var _ = y.alternate;
            _ ? (y.updateQueue = _.updateQueue, y.memoizedState = _.memoizedState, y.lanes = _.lanes) : (y.updateQueue = null, y.memoizedState = null);
          }
          var C = a2(a);
          if (C !== null) {
            C.flags &= -257, u2(C, a, c, l, e), C.mode & 1 && l2(l, g, e), e = C, d = g;
            var v = e.updateQueue;
            if (v === null) {
              var E = /* @__PURE__ */ new Set();
              E.add(d), e.updateQueue = E;
            } else v.add(d);
            break e;
          } else {
            if (!(e & 1)) {
              l2(l, g, e), d1();
              break e;
            }
            d = Error(K(426));
          }
        } else if (Ze && c.mode & 1) {
          var R = a2(a);
          if (R !== null) {
            !(R.flags & 65536) && (R.flags |= 256), u2(R, a, c, l, e), Y0(ro(d, c));
            break e;
          }
        }
        l = d = ro(d, c), wt !== 4 && (wt = 2), dl === null ? dl = [l] : dl.push(l), l = a;
        do {
          switch (l.tag) {
            case 3:
              l.flags |= 65536, e &= -e, l.lanes |= e;
              var k = r3(l, d, e);
              t2(l, k);
              break e;
            case 1:
              c = d;
              var x = l.type, p = l.stateNode;
              if (!(l.flags & 128) && (typeof x.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (di === null || !di.has(p)))) {
                l.flags |= 65536, e &= -e, l.lanes |= e;
                var S = i3(l, c, e);
                t2(l, S);
                break e;
              }
          }
          l = l.return;
        } while (l !== null);
      }
      C3(n);
    } catch (N) {
      e = N, gt === n && n !== null && (gt = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function w3() {
  var t = qu.current;
  return qu.current = bu, t === null ? bu : t;
}
function d1() {
  (wt === 0 || wt === 3 || wt === 2) && (wt = 4), Mt === null || !(ts & 268435455) && !(vc & 268435455) || ri(Mt, Ot);
}
function ec(t, e) {
  var n = Re;
  Re |= 2;
  var r = w3();
  (Mt !== t || Ot !== e) && (Er = null, bi(t, e));
  do
    try {
      X6();
      break;
    } catch (o) {
      S3(t, o);
    }
  while (!0);
  if (X0(), Re = n, qu.current = r, gt !== null) throw Error(K(261));
  return Mt = null, Ot = 0, wt;
}
function X6() {
  for (; gt !== null; ) x3(gt);
}
function $6() {
  for (; gt !== null && !_v(); ) x3(gt);
}
function x3(t) {
  var e = E3(t.alternate, t, gn);
  t.memoizedProps = t.pendingProps, e === null ? C3(t) : gt = e, o1.current = null;
}
function C3(t) {
  var e = t;
  do {
    var n = e.alternate;
    if (t = e.return, e.flags & 32768) {
      if (n = V6(n, e), n !== null) {
        n.flags &= 32767, gt = n;
        return;
      }
      if (t !== null) t.flags |= 32768, t.subtreeFlags = 0, t.deletions = null;
      else {
        wt = 6, gt = null;
        return;
      }
    } else if (n = B6(n, e, gn), n !== null) {
      gt = n;
      return;
    }
    if (e = e.sibling, e !== null) {
      gt = e;
      return;
    }
    gt = e = t;
  } while (e !== null);
  wt === 0 && (wt = 5);
}
function Wi(t, e, n) {
  var r = De, o = An.transition;
  try {
    An.transition = null, De = 1, Q6(t, e, n, r);
  } finally {
    An.transition = o, De = r;
  }
  return null;
}
function Q6(t, e, n, r) {
  do
    qs();
  while (si !== null);
  if (Re & 6) throw Error(K(327));
  n = t.finishedWork;
  var o = t.finishedLanes;
  if (n === null) return null;
  if (t.finishedWork = null, t.finishedLanes = 0, n === t.current) throw Error(K(177));
  t.callbackNode = null, t.callbackPriority = 0;
  var l = n.lanes | n.childLanes;
  if (Rv(t, l), t === Mt && (gt = Mt = null, Ot = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || su || (su = !0, P3(Iu, function() {
    return qs(), null;
  })), l = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || l) {
    l = An.transition, An.transition = null;
    var a = De;
    De = 1;
    var c = Re;
    Re |= 4, o1.current = null, j6(t, n), y3(n, t), g6(jh), zu = !!Hh, jh = Hh = null, t.current = n, W6(n), Sv(), Re = c, De = a, An.transition = l;
  } else t.current = n;
  if (su && (su = !1, si = t, Ju = o), l = t.pendingLanes, l === 0 && (di = null), Cv(n.stateNode), dn(t, dt()), e !== null) for (r = t.onRecoverableError, n = 0; n < e.length; n++) o = e[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Zu) throw Zu = !1, t = u0, u0 = null, t;
  return Ju & 1 && t.tag !== 0 && qs(), l = t.pendingLanes, l & 1 ? t === c0 ? fl++ : (fl = 0, c0 = t) : fl = 0, _i(), null;
}
function qs() {
  if (si !== null) {
    var t = ry(Ju), e = An.transition, n = De;
    try {
      if (An.transition = null, De = 16 > t ? 16 : t, si === null) var r = !1;
      else {
        if (t = si, si = null, Ju = 0, Re & 6) throw Error(K(331));
        var o = Re;
        for (Re |= 4, le = t.current; le !== null; ) {
          var l = le, a = l.child;
          if (le.flags & 16) {
            var c = l.deletions;
            if (c !== null) {
              for (var d = 0; d < c.length; d++) {
                var g = c[d];
                for (le = g; le !== null; ) {
                  var y = le;
                  switch (y.tag) {
                    case 0:
                    case 11:
                    case 15:
                      cl(8, y, l);
                  }
                  var w = y.child;
                  if (w !== null) w.return = y, le = w;
                  else for (; le !== null; ) {
                    y = le;
                    var _ = y.sibling, C = y.return;
                    if (p3(y), y === g) {
                      le = null;
                      break;
                    }
                    if (_ !== null) {
                      _.return = C, le = _;
                      break;
                    }
                    le = C;
                  }
                }
              }
              var v = l.alternate;
              if (v !== null) {
                var E = v.child;
                if (E !== null) {
                  v.child = null;
                  do {
                    var R = E.sibling;
                    E.sibling = null, E = R;
                  } while (E !== null);
                }
              }
              le = l;
            }
          }
          if (l.subtreeFlags & 2064 && a !== null) a.return = l, le = a;
          else e: for (; le !== null; ) {
            if (l = le, l.flags & 2048) switch (l.tag) {
              case 0:
              case 11:
              case 15:
                cl(9, l, l.return);
            }
            var k = l.sibling;
            if (k !== null) {
              k.return = l.return, le = k;
              break e;
            }
            le = l.return;
          }
        }
        var x = t.current;
        for (le = x; le !== null; ) {
          a = le;
          var p = a.child;
          if (a.subtreeFlags & 2064 && p !== null) p.return = a, le = p;
          else e: for (a = x; le !== null; ) {
            if (c = le, c.flags & 2048) try {
              switch (c.tag) {
                case 0:
                case 11:
                case 15:
                  yc(9, c);
              }
            } catch (N) {
              lt(c, c.return, N);
            }
            if (c === a) {
              le = null;
              break e;
            }
            var S = c.sibling;
            if (S !== null) {
              S.return = c.return, le = S;
              break e;
            }
            le = c.return;
          }
        }
        if (Re = o, _i(), fr && typeof fr.onPostCommitFiberRoot == "function") try {
          fr.onPostCommitFiberRoot(uc, t);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      De = n, An.transition = e;
    }
  }
  return !1;
}
function x2(t, e, n) {
  e = ro(n, e), e = r3(t, e, 1), t = ci(t, e, 1), e = bt(), t !== null && (Il(t, 1, e), dn(t, e));
}
function lt(t, e, n) {
  if (t.tag === 3) x2(t, t, n);
  else for (; e !== null; ) {
    if (e.tag === 3) {
      x2(e, t, n);
      break;
    } else if (e.tag === 1) {
      var r = e.stateNode;
      if (typeof e.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (di === null || !di.has(r))) {
        t = ro(n, t), t = i3(e, t, 1), e = ci(e, t, 1), t = bt(), e !== null && (Il(e, 1, t), dn(e, t));
        break;
      }
    }
    e = e.return;
  }
}
function b6(t, e, n) {
  var r = t.pingCache;
  r !== null && r.delete(e), e = bt(), t.pingedLanes |= t.suspendedLanes & n, Mt === t && (Ot & n) === n && (wt === 4 || wt === 3 && (Ot & 130023424) === Ot && 500 > dt() - a1 ? bi(t, 0) : l1 |= n), dn(t, e);
}
function k3(t, e) {
  e === 0 && (t.mode & 1 ? (e = Qa, Qa <<= 1, !(Qa & 130023424) && (Qa = 4194304)) : e = 1);
  var n = bt();
  t = Ar(t, e), t !== null && (Il(t, e, n), dn(t, n));
}
function q6(t) {
  var e = t.memoizedState, n = 0;
  e !== null && (n = e.retryLane), k3(t, n);
}
function Z6(t, e) {
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
  r !== null && r.delete(e), k3(t, n);
}
var E3;
E3 = function(t, e, n) {
  if (t !== null) if (t.memoizedProps !== e.pendingProps || un.current) an = !0;
  else {
    if (!(t.lanes & n) && !(e.flags & 128)) return an = !1, U6(t, e, n);
    an = !!(t.flags & 131072);
  }
  else an = !1, Ze && e.flags & 1048576 && Ry(e, Wu, e.index);
  switch (e.lanes = 0, e.tag) {
    case 2:
      var r = e.type;
      Eu(t, e), t = e.pendingProps;
      var o = Js(e, Wt.current);
      bs(e, n), o = t1(null, e, r, t, o, n);
      var l = n1();
      return e.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (e.tag = 1, e.memoizedState = null, e.updateQueue = null, cn(r) ? (l = !0, Hu(e)) : l = !1, e.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, b0(e), o.updater = mc, e.stateNode = o, o._reactInternals = e, Zh(e, r, t, n), e = t0(null, e, r, !0, l, n)) : (e.tag = 0, Ze && l && j0(e), $t(null, e, o, n), e = e.child), e;
    case 16:
      r = e.elementType;
      e: {
        switch (Eu(t, e), t = e.pendingProps, o = r._init, r = o(r._payload), e.type = r, o = e.tag = e8(r), t = Kn(r, t), o) {
          case 0:
            e = e0(null, e, r, t, n);
            break e;
          case 1:
            e = f2(null, e, r, t, n);
            break e;
          case 11:
            e = c2(null, e, r, t, n);
            break e;
          case 14:
            e = d2(null, e, r, Kn(r.type, t), n);
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
      return r = e.type, o = e.pendingProps, o = e.elementType === r ? o : Kn(r, o), e0(t, e, r, o, n);
    case 1:
      return r = e.type, o = e.pendingProps, o = e.elementType === r ? o : Kn(r, o), f2(t, e, r, o, n);
    case 3:
      e: {
        if (a3(e), t === null) throw Error(K(387));
        r = e.pendingProps, l = e.memoizedState, o = l.element, Iy(t, e), Xu(e, r, null, n);
        var a = e.memoizedState;
        if (r = a.element, l.isDehydrated) if (l = { element: r, isDehydrated: !1, cache: a.cache, pendingSuspenseBoundaries: a.pendingSuspenseBoundaries, transitions: a.transitions }, e.updateQueue.baseState = l, e.memoizedState = l, e.flags & 256) {
          o = ro(Error(K(423)), e), e = h2(t, e, r, n, o);
          break e;
        } else if (r !== o) {
          o = ro(Error(K(424)), e), e = h2(t, e, r, n, o);
          break e;
        } else for (mn = ui(e.stateNode.containerInfo.firstChild), yn = e, Ze = !0, $n = null, n = Ay(e, null, r, n), e.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (eo(), r === o) {
            e = Or(t, e, n);
            break e;
          }
          $t(t, e, r, n);
        }
        e = e.child;
      }
      return e;
    case 5:
      return Dy(e), t === null && Qh(e), r = e.type, o = e.pendingProps, l = t !== null ? t.memoizedProps : null, a = o.children, Wh(r, o) ? a = null : l !== null && Wh(r, l) && (e.flags |= 32), l3(t, e), $t(t, e, a, n), e.child;
    case 6:
      return t === null && Qh(e), null;
    case 13:
      return u3(t, e, n);
    case 4:
      return q0(e, e.stateNode.containerInfo), r = e.pendingProps, t === null ? e.child = to(e, null, r, n) : $t(t, e, r, n), e.child;
    case 11:
      return r = e.type, o = e.pendingProps, o = e.elementType === r ? o : Kn(r, o), c2(t, e, r, o, n);
    case 7:
      return $t(t, e, e.pendingProps, n), e.child;
    case 8:
      return $t(t, e, e.pendingProps.children, n), e.child;
    case 12:
      return $t(t, e, e.pendingProps.children, n), e.child;
    case 10:
      e: {
        if (r = e.type._context, o = e.pendingProps, l = e.memoizedProps, a = o.value, Ye(Yu, r._currentValue), r._currentValue = a, l !== null) if (Zn(l.value, a)) {
          if (l.children === o.children && !un.current) {
            e = Or(t, e, n);
            break e;
          }
        } else for (l = e.child, l !== null && (l.return = e); l !== null; ) {
          var c = l.dependencies;
          if (c !== null) {
            a = l.child;
            for (var d = c.firstContext; d !== null; ) {
              if (d.context === r) {
                if (l.tag === 1) {
                  d = Rr(-1, n & -n), d.tag = 2;
                  var g = l.updateQueue;
                  if (g !== null) {
                    g = g.shared;
                    var y = g.pending;
                    y === null ? d.next = d : (d.next = y.next, y.next = d), g.pending = d;
                  }
                }
                l.lanes |= n, d = l.alternate, d !== null && (d.lanes |= n), bh(
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
            a.lanes |= n, c = a.alternate, c !== null && (c.lanes |= n), bh(a, n, e), a = l.sibling;
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
        $t(t, e, o.children, n), e = e.child;
      }
      return e;
    case 9:
      return o = e.type, r = e.pendingProps.children, bs(e, n), o = On(o), r = r(o), e.flags |= 1, $t(t, e, r, n), e.child;
    case 14:
      return r = e.type, o = Kn(r, e.pendingProps), o = Kn(r.type, o), d2(t, e, r, o, n);
    case 15:
      return s3(t, e, e.type, e.pendingProps, n);
    case 17:
      return r = e.type, o = e.pendingProps, o = e.elementType === r ? o : Kn(r, o), Eu(t, e), e.tag = 1, cn(r) ? (t = !0, Hu(e)) : t = !1, bs(e, n), n3(e, r, o), Zh(e, r, o, n), t0(null, e, r, !0, t, n);
    case 19:
      return c3(t, e, n);
    case 22:
      return o3(t, e, n);
  }
  throw Error(K(156, e.tag));
};
function P3(t, e) {
  return Jm(t, e);
}
function J6(t, e, n, r) {
  this.tag = t, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Ln(t, e, n, r) {
  return new J6(t, e, n, r);
}
function f1(t) {
  return t = t.prototype, !(!t || !t.isReactComponent);
}
function e8(t) {
  if (typeof t == "function") return f1(t) ? 1 : 0;
  if (t != null) {
    if (t = t.$$typeof, t === F0) return 11;
    if (t === L0) return 14;
  }
  return 2;
}
function hi(t, e) {
  var n = t.alternate;
  return n === null ? (n = Ln(t.tag, e, t.key, t.mode), n.elementType = t.elementType, n.type = t.type, n.stateNode = t.stateNode, n.alternate = t, t.alternate = n) : (n.pendingProps = e, n.type = t.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = t.flags & 14680064, n.childLanes = t.childLanes, n.lanes = t.lanes, n.child = t.child, n.memoizedProps = t.memoizedProps, n.memoizedState = t.memoizedState, n.updateQueue = t.updateQueue, e = t.dependencies, n.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }, n.sibling = t.sibling, n.index = t.index, n.ref = t.ref, n;
}
function Nu(t, e, n, r, o, l) {
  var a = 2;
  if (r = t, typeof t == "function") f1(t) && (a = 1);
  else if (typeof t == "string") a = 5;
  else e: switch (t) {
    case Is:
      return qi(n.children, o, l, e);
    case M0:
      a = 8, o |= 8;
      break;
    case xh:
      return t = Ln(12, n, e, o | 2), t.elementType = xh, t.lanes = l, t;
    case Ch:
      return t = Ln(13, n, e, o), t.elementType = Ch, t.lanes = l, t;
    case kh:
      return t = Ln(19, n, e, o), t.elementType = kh, t.lanes = l, t;
    case Dm:
      return _c(n, o, l, e);
    default:
      if (typeof t == "object" && t !== null) switch (t.$$typeof) {
        case Om:
          a = 10;
          break e;
        case Im:
          a = 9;
          break e;
        case F0:
          a = 11;
          break e;
        case L0:
          a = 14;
          break e;
        case ei:
          a = 16, r = null;
          break e;
      }
      throw Error(K(130, t == null ? t : typeof t, ""));
  }
  return e = Ln(a, n, e, o), e.elementType = t, e.type = r, e.lanes = l, e;
}
function qi(t, e, n, r) {
  return t = Ln(7, t, r, e), t.lanes = n, t;
}
function _c(t, e, n, r) {
  return t = Ln(22, t, r, e), t.elementType = Dm, t.lanes = n, t.stateNode = { isHidden: !1 }, t;
}
function lh(t, e, n) {
  return t = Ln(6, t, null, e), t.lanes = n, t;
}
function ah(t, e, n) {
  return e = Ln(4, t.children !== null ? t.children : [], t.key, e), e.lanes = n, e.stateNode = { containerInfo: t.containerInfo, pendingChildren: null, implementation: t.implementation }, e;
}
function t8(t, e, n, r, o) {
  this.tag = e, this.containerInfo = t, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Hf(0), this.expirationTimes = Hf(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Hf(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function h1(t, e, n, r, o, l, a, c, d) {
  return t = new t8(t, e, n, c, d), e === 1 ? (e = 1, l === !0 && (e |= 8)) : e = 0, l = Ln(3, null, null, e), t.current = l, l.stateNode = t, l.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, b0(l), t;
}
function n8(t, e, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Os, key: r == null ? null : "" + r, children: t, containerInfo: e, implementation: n };
}
function T3(t) {
  if (!t) return gi;
  t = t._reactInternals;
  e: {
    if (is(t) !== t || t.tag !== 1) throw Error(K(170));
    var e = t;
    do {
      switch (e.tag) {
        case 3:
          e = e.stateNode.context;
          break e;
        case 1:
          if (cn(e.type)) {
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
    if (cn(n)) return Ty(t, n, e);
  }
  return e;
}
function N3(t, e, n, r, o, l, a, c, d) {
  return t = h1(n, r, !0, t, o, l, a, c, d), t.context = T3(null), n = t.current, r = bt(), o = fi(n), l = Rr(r, o), l.callback = e ?? null, ci(n, l, o), t.current.lanes = o, Il(t, o, r), dn(t, r), t;
}
function Sc(t, e, n, r) {
  var o = e.current, l = bt(), a = fi(o);
  return n = T3(n), e.context === null ? e.context = n : e.pendingContext = n, e = Rr(l, a), e.payload = { element: t }, r = r === void 0 ? null : r, r !== null && (e.callback = r), t = ci(o, e, a), t !== null && (bn(t, o, a, l), xu(t, o, a)), a;
}
function tc(t) {
  if (t = t.current, !t.child) return null;
  switch (t.child.tag) {
    case 5:
      return t.child.stateNode;
    default:
      return t.child.stateNode;
  }
}
function C2(t, e) {
  if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
    var n = t.retryLane;
    t.retryLane = n !== 0 && n < e ? n : e;
  }
}
function p1(t, e) {
  C2(t, e), (t = t.alternate) && C2(t, e);
}
function r8() {
  return null;
}
var R3 = typeof reportError == "function" ? reportError : function(t) {
  console.error(t);
};
function g1(t) {
  this._internalRoot = t;
}
wc.prototype.render = g1.prototype.render = function(t) {
  var e = this._internalRoot;
  if (e === null) throw Error(K(409));
  Sc(t, e, null, null);
};
wc.prototype.unmount = g1.prototype.unmount = function() {
  var t = this._internalRoot;
  if (t !== null) {
    this._internalRoot = null;
    var e = t.containerInfo;
    ns(function() {
      Sc(null, t, null, null);
    }), e[Lr] = null;
  }
};
function wc(t) {
  this._internalRoot = t;
}
wc.prototype.unstable_scheduleHydration = function(t) {
  if (t) {
    var e = oy();
    t = { blockedOn: null, target: t, priority: e };
    for (var n = 0; n < ni.length && e !== 0 && e < ni[n].priority; n++) ;
    ni.splice(n, 0, t), n === 0 && ay(t);
  }
};
function m1(t) {
  return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
}
function xc(t) {
  return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11 && (t.nodeType !== 8 || t.nodeValue !== " react-mount-point-unstable "));
}
function k2() {
}
function i8(t, e, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var l = r;
      r = function() {
        var g = tc(a);
        l.call(g);
      };
    }
    var a = N3(e, r, t, 0, null, !1, !1, "", k2);
    return t._reactRootContainer = a, t[Lr] = a.current, xl(t.nodeType === 8 ? t.parentNode : t), ns(), a;
  }
  for (; o = t.lastChild; ) t.removeChild(o);
  if (typeof r == "function") {
    var c = r;
    r = function() {
      var g = tc(d);
      c.call(g);
    };
  }
  var d = h1(t, 0, !1, null, null, !1, !1, "", k2);
  return t._reactRootContainer = d, t[Lr] = d.current, xl(t.nodeType === 8 ? t.parentNode : t), ns(function() {
    Sc(e, d, n, r);
  }), d;
}
function Cc(t, e, n, r, o) {
  var l = n._reactRootContainer;
  if (l) {
    var a = l;
    if (typeof o == "function") {
      var c = o;
      o = function() {
        var d = tc(a);
        c.call(d);
      };
    }
    Sc(e, a, t, o);
  } else a = i8(n, e, t, o, r);
  return tc(a);
}
iy = function(t) {
  switch (t.tag) {
    case 3:
      var e = t.stateNode;
      if (e.current.memoizedState.isDehydrated) {
        var n = el(e.pendingLanes);
        n !== 0 && (I0(e, n | 1), dn(e, dt()), !(Re & 6) && (io = dt() + 500, _i()));
      }
      break;
    case 13:
      ns(function() {
        var r = Ar(t, 1);
        if (r !== null) {
          var o = bt();
          bn(r, t, 1, o);
        }
      }), p1(t, 1);
  }
};
D0 = function(t) {
  if (t.tag === 13) {
    var e = Ar(t, 134217728);
    if (e !== null) {
      var n = bt();
      bn(e, t, 134217728, n);
    }
    p1(t, 134217728);
  }
};
sy = function(t) {
  if (t.tag === 13) {
    var e = fi(t), n = Ar(t, e);
    if (n !== null) {
      var r = bt();
      bn(n, t, e, r);
    }
    p1(t, e);
  }
};
oy = function() {
  return De;
};
ly = function(t, e) {
  var n = De;
  try {
    return De = t, e();
  } finally {
    De = n;
  }
};
Oh = function(t, e, n) {
  switch (e) {
    case "input":
      if (Th(t, n), e = n.name, n.type === "radio" && e != null) {
        for (n = t; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + e) + '][type="radio"]'), e = 0; e < n.length; e++) {
          var r = n[e];
          if (r !== t && r.form === t.form) {
            var o = hc(r);
            if (!o) throw Error(K(90));
            Gm(r), Th(r, o);
          }
        }
      }
      break;
    case "textarea":
      Bm(t, n);
      break;
    case "select":
      e = n.value, e != null && Ks(t, !!n.multiple, e, !1);
  }
};
Xm = u1;
$m = ns;
var s8 = { usingClientEntryPoint: !1, Events: [zl, Us, hc, Ym, Km, u1] }, Ko = { findFiberByHostInstance: Ki, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, o8 = { bundleType: Ko.bundleType, version: Ko.version, rendererPackageName: Ko.rendererPackageName, rendererConfig: Ko.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Ir.ReactCurrentDispatcher, findHostInstanceByFiber: function(t) {
  return t = qm(t), t === null ? null : t.stateNode;
}, findFiberByHostInstance: Ko.findFiberByHostInstance || r8, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ou = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ou.isDisabled && ou.supportsFiber) try {
    uc = ou.inject(o8), fr = ou;
  } catch {
  }
}
_n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = s8;
_n.createPortal = function(t, e) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!m1(e)) throw Error(K(200));
  return n8(t, e, null, n);
};
_n.createRoot = function(t, e) {
  if (!m1(t)) throw Error(K(299));
  var n = !1, r = "", o = R3;
  return e != null && (e.unstable_strictMode === !0 && (n = !0), e.identifierPrefix !== void 0 && (r = e.identifierPrefix), e.onRecoverableError !== void 0 && (o = e.onRecoverableError)), e = h1(t, 1, !1, null, null, n, !1, r, o), t[Lr] = e.current, xl(t.nodeType === 8 ? t.parentNode : t), new g1(e);
};
_n.findDOMNode = function(t) {
  if (t == null) return null;
  if (t.nodeType === 1) return t;
  var e = t._reactInternals;
  if (e === void 0)
    throw typeof t.render == "function" ? Error(K(188)) : (t = Object.keys(t).join(","), Error(K(268, t)));
  return t = qm(e), t = t === null ? null : t.stateNode, t;
};
_n.flushSync = function(t) {
  return ns(t);
};
_n.hydrate = function(t, e, n) {
  if (!xc(e)) throw Error(K(200));
  return Cc(null, t, e, !0, n);
};
_n.hydrateRoot = function(t, e, n) {
  if (!m1(t)) throw Error(K(405));
  var r = n != null && n.hydratedSources || null, o = !1, l = "", a = R3;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (l = n.identifierPrefix), n.onRecoverableError !== void 0 && (a = n.onRecoverableError)), e = N3(e, null, t, 1, n ?? null, o, !1, l, a), t[Lr] = e.current, xl(t), r) for (t = 0; t < r.length; t++) n = r[t], o = n._getVersion, o = o(n._source), e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [n, o] : e.mutableSourceEagerHydrationData.push(
    n,
    o
  );
  return new wc(e);
};
_n.render = function(t, e, n) {
  if (!xc(e)) throw Error(K(200));
  return Cc(null, t, e, !1, n);
};
_n.unmountComponentAtNode = function(t) {
  if (!xc(t)) throw Error(K(40));
  return t._reactRootContainer ? (ns(function() {
    Cc(null, null, t, !1, function() {
      t._reactRootContainer = null, t[Lr] = null;
    });
  }), !0) : !1;
};
_n.unstable_batchedUpdates = u1;
_n.unstable_renderSubtreeIntoContainer = function(t, e, n, r) {
  if (!xc(n)) throw Error(K(200));
  if (t == null || t._reactInternals === void 0) throw Error(K(38));
  return Cc(t, e, n, !1, r);
};
_n.version = "18.3.1-next-f1338f8080-20240426";
function M3() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(M3);
    } catch (t) {
      console.error(t);
    }
}
M3(), Mm.exports = _n;
var l8 = Mm.exports, F3, E2 = l8;
F3 = E2.createRoot, E2.hydrateRoot;
var L3 = { exports: {} }, kc = {}, nc = {}, Se = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t._registerNode = t.Konva = t.glob = void 0;
  const e = Math.PI / 180;
  function n() {
    return typeof window < "u" && ({}.toString.call(window) === "[object Window]" || {}.toString.call(window) === "[object global]");
  }
  t.glob = typeof mg < "u" ? mg : typeof window < "u" ? window : typeof WorkerGlobalScope < "u" ? self : {}, t.Konva = {
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
var st = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.Util = t.Transform = void 0;
  const e = Se;
  class n {
    constructor(S = [1, 0, 0, 1, 0, 0]) {
      this.dirty = !1, this.m = S && S.slice() || [1, 0, 0, 1, 0, 0];
    }
    reset() {
      this.m[0] = 1, this.m[1] = 0, this.m[2] = 0, this.m[3] = 1, this.m[4] = 0, this.m[5] = 0;
    }
    copy() {
      return new n(this.m);
    }
    copyInto(S) {
      S.m[0] = this.m[0], S.m[1] = this.m[1], S.m[2] = this.m[2], S.m[3] = this.m[3], S.m[4] = this.m[4], S.m[5] = this.m[5];
    }
    point(S) {
      const N = this.m;
      return {
        x: N[0] * S.x + N[2] * S.y + N[4],
        y: N[1] * S.x + N[3] * S.y + N[5]
      };
    }
    translate(S, N) {
      return this.m[4] += this.m[0] * S + this.m[2] * N, this.m[5] += this.m[1] * S + this.m[3] * N, this;
    }
    scale(S, N) {
      return this.m[0] *= S, this.m[1] *= S, this.m[2] *= N, this.m[3] *= N, this;
    }
    rotate(S) {
      const N = Math.cos(S), M = Math.sin(S), A = this.m[0] * N + this.m[2] * M, T = this.m[1] * N + this.m[3] * M, G = this.m[0] * -M + this.m[2] * N, F = this.m[1] * -M + this.m[3] * N;
      return this.m[0] = A, this.m[1] = T, this.m[2] = G, this.m[3] = F, this;
    }
    getTranslation() {
      return {
        x: this.m[4],
        y: this.m[5]
      };
    }
    skew(S, N) {
      const M = this.m[0] + this.m[2] * N, A = this.m[1] + this.m[3] * N, T = this.m[2] + this.m[0] * S, G = this.m[3] + this.m[1] * S;
      return this.m[0] = M, this.m[1] = A, this.m[2] = T, this.m[3] = G, this;
    }
    multiply(S) {
      const N = this.m[0] * S.m[0] + this.m[2] * S.m[1], M = this.m[1] * S.m[0] + this.m[3] * S.m[1], A = this.m[0] * S.m[2] + this.m[2] * S.m[3], T = this.m[1] * S.m[2] + this.m[3] * S.m[3], G = this.m[0] * S.m[4] + this.m[2] * S.m[5] + this.m[4], F = this.m[1] * S.m[4] + this.m[3] * S.m[5] + this.m[5];
      return this.m[0] = N, this.m[1] = M, this.m[2] = A, this.m[3] = T, this.m[4] = G, this.m[5] = F, this;
    }
    invert() {
      const S = 1 / (this.m[0] * this.m[3] - this.m[1] * this.m[2]), N = this.m[3] * S, M = -this.m[1] * S, A = -this.m[2] * S, T = this.m[0] * S, G = S * (this.m[2] * this.m[5] - this.m[3] * this.m[4]), F = S * (this.m[1] * this.m[4] - this.m[0] * this.m[5]);
      return this.m[0] = N, this.m[1] = M, this.m[2] = A, this.m[3] = T, this.m[4] = G, this.m[5] = F, this;
    }
    getMatrix() {
      return this.m;
    }
    decompose() {
      const S = this.m[0], N = this.m[1], M = this.m[2], A = this.m[3], T = this.m[4], G = this.m[5], F = S * A - N * M, V = {
        x: T,
        y: G,
        rotation: 0,
        scaleX: 0,
        scaleY: 0,
        skewX: 0,
        skewY: 0
      };
      if (S != 0 || N != 0) {
        const j = Math.sqrt(S * S + N * N);
        V.rotation = N > 0 ? Math.acos(S / j) : -Math.acos(S / j), V.scaleX = j, V.scaleY = F / j, V.skewX = (S * M + N * A) / F, V.skewY = 0;
      } else if (M != 0 || A != 0) {
        const j = Math.sqrt(M * M + A * A);
        V.rotation = Math.PI / 2 - (A > 0 ? Math.acos(-M / j) : -Math.acos(M / j)), V.scaleX = F / j, V.scaleY = j, V.skewX = 0, V.skewY = (S * M + N * A) / F;
      }
      return V.rotation = t.Util._getRotation(V.rotation), V;
    }
  }
  t.Transform = n;
  const r = "[object Array]", o = "[object Number]", l = "[object String]", a = "[object Boolean]", c = Math.PI / 180, d = 180 / Math.PI, g = "#", y = "", w = "0", _ = "Konva warning: ", C = "Konva error: ", v = "rgb(", E = {
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
  }, R = /rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)/;
  let k = [];
  const x = typeof requestAnimationFrame < "u" && requestAnimationFrame || function(p) {
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
      const S = p[0];
      return S === "#" || S === "." || S === S.toUpperCase();
    },
    _sign(p) {
      return p === 0 || p > 0 ? 1 : -1;
    },
    requestAnimFrame(p) {
      k.push(p), k.length === 1 && x(function() {
        const S = k;
        k = [], S.forEach(function(N) {
          N();
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
    _urlToImage(p, S) {
      const N = t.Util.createImageElement();
      N.onload = function() {
        S(N);
      }, N.src = p;
    },
    _rgbToHex(p, S, N) {
      return ((1 << 24) + (p << 16) + (S << 8) + N).toString(16).slice(1);
    },
    _hexToRgb(p) {
      p = p.replace(g, y);
      const S = parseInt(p, 16);
      return {
        r: S >> 16 & 255,
        g: S >> 8 & 255,
        b: S & 255
      };
    },
    getRandomColor() {
      let p = (Math.random() * 16777215 << 0).toString(16);
      for (; p.length < 6; )
        p = w + p;
      return g + p;
    },
    getRGB(p) {
      let S;
      return p in E ? (S = E[p], {
        r: S[0],
        g: S[1],
        b: S[2]
      }) : p[0] === g ? this._hexToRgb(p.substring(1)) : p.substr(0, 4) === v ? (S = R.exec(p.replace(/ /g, "")), {
        r: parseInt(S[1], 10),
        g: parseInt(S[2], 10),
        b: parseInt(S[3], 10)
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
      const S = E[p.toLowerCase()];
      return S ? {
        r: S[0],
        g: S[1],
        b: S[2],
        a: 1
      } : null;
    },
    _rgbColorToRGBA(p) {
      if (p.indexOf("rgb(") === 0) {
        p = p.match(/rgb\(([^)]+)\)/)[1];
        const S = p.split(/ *, */).map(Number);
        return {
          r: S[0],
          g: S[1],
          b: S[2],
          a: 1
        };
      }
    },
    _rgbaColorToRGBA(p) {
      if (p.indexOf("rgba(") === 0) {
        p = p.match(/rgba\(([^)]+)\)/)[1];
        const S = p.split(/ *, */).map((N, M) => N.slice(-1) === "%" ? M === 3 ? parseInt(N) / 100 : parseInt(N) / 100 * 255 : Number(N));
        return {
          r: S[0],
          g: S[1],
          b: S[2],
          a: S[3]
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
        const [S, ...N] = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(p), M = Number(N[0]) / 360, A = Number(N[1]) / 100, T = Number(N[2]) / 100;
        let G, F, V;
        if (A === 0)
          return V = T * 255, {
            r: Math.round(V),
            g: Math.round(V),
            b: Math.round(V),
            a: 1
          };
        T < 0.5 ? G = T * (1 + A) : G = T + A - T * A;
        const j = 2 * T - G, q = [0, 0, 0];
        for (let D = 0; D < 3; D++)
          F = M + 1 / 3 * -(D - 1), F < 0 && F++, F > 1 && F--, 6 * F < 1 ? V = j + (G - j) * 6 * F : 2 * F < 1 ? V = G : 3 * F < 2 ? V = j + (G - j) * (2 / 3 - F) * 6 : V = j, q[D] = V * 255;
        return {
          r: Math.round(q[0]),
          g: Math.round(q[1]),
          b: Math.round(q[2]),
          a: 1
        };
      }
    },
    haveIntersection(p, S) {
      return !(S.x > p.x + p.width || S.x + S.width < p.x || S.y > p.y + p.height || S.y + S.height < p.y);
    },
    cloneObject(p) {
      const S = {};
      for (const N in p)
        this._isPlainObject(p[N]) ? S[N] = this.cloneObject(p[N]) : this._isArray(p[N]) ? S[N] = this.cloneArray(p[N]) : S[N] = p[N];
      return S;
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
      throw new Error(C + p);
    },
    error(p) {
      console.error(C + p);
    },
    warn(p) {
      e.Konva.showWarnings && console.warn(_ + p);
    },
    each(p, S) {
      for (const N in p)
        S(N, p[N]);
    },
    _inRange(p, S, N) {
      return S <= p && p < N;
    },
    _getProjectionToSegment(p, S, N, M, A, T) {
      let G, F, V;
      const j = (p - N) * (p - N) + (S - M) * (S - M);
      if (j == 0)
        G = p, F = S, V = (A - N) * (A - N) + (T - M) * (T - M);
      else {
        const q = ((A - p) * (N - p) + (T - S) * (M - S)) / j;
        q < 0 ? (G = p, F = S, V = (p - A) * (p - A) + (S - T) * (S - T)) : q > 1 ? (G = N, F = M, V = (N - A) * (N - A) + (M - T) * (M - T)) : (G = p + q * (N - p), F = S + q * (M - S), V = (G - A) * (G - A) + (F - T) * (F - T));
      }
      return [G, F, V];
    },
    _getProjectionToLine(p, S, N) {
      const M = t.Util.cloneObject(p);
      let A = Number.MAX_VALUE;
      return S.forEach(function(T, G) {
        if (!N && G === S.length - 1)
          return;
        const F = S[(G + 1) % S.length], V = t.Util._getProjectionToSegment(T.x, T.y, F.x, F.y, p.x, p.y), j = V[0], q = V[1], D = V[2];
        D < A && (M.x = j, M.y = q, A = D);
      }), M;
    },
    _prepareArrayForTween(p, S, N) {
      const M = [], A = [];
      if (p.length > S.length) {
        const G = S;
        S = p, p = G;
      }
      for (let G = 0; G < p.length; G += 2)
        M.push({
          x: p[G],
          y: p[G + 1]
        });
      for (let G = 0; G < S.length; G += 2)
        A.push({
          x: S[G],
          y: S[G + 1]
        });
      const T = [];
      return A.forEach(function(G) {
        const F = t.Util._getProjectionToLine(G, M, N);
        T.push(F.x), T.push(F.y);
      }), T;
    },
    _prepareToStringify(p) {
      let S;
      p.visitedByCircularReferenceRemoval = !0;
      for (const N in p)
        if (p.hasOwnProperty(N) && p[N] && typeof p[N] == "object") {
          if (S = Object.getOwnPropertyDescriptor(p, N), p[N].visitedByCircularReferenceRemoval || t.Util._isElement(p[N]))
            if (S.configurable)
              delete p[N];
            else
              return null;
          else if (t.Util._prepareToStringify(p[N]) === null)
            if (S.configurable)
              delete p[N];
            else
              return null;
        }
      return delete p.visitedByCircularReferenceRemoval, p;
    },
    _assign(p, S) {
      for (const N in S)
        p[N] = S[N];
      return p;
    },
    _getFirstPointerId(p) {
      return p.touches ? p.changedTouches[0].identifier : p.pointerId || 999;
    },
    releaseCanvas(...p) {
      e.Konva.releaseCanvasOnDestroy && p.forEach((S) => {
        S.width = 0, S.height = 0;
      });
    },
    drawRoundedRectPath(p, S, N, M) {
      let A = 0, T = 0, G = 0, F = 0;
      typeof M == "number" ? A = T = G = F = Math.min(M, S / 2, N / 2) : (A = Math.min(M[0] || 0, S / 2, N / 2), T = Math.min(M[1] || 0, S / 2, N / 2), F = Math.min(M[2] || 0, S / 2, N / 2), G = Math.min(M[3] || 0, S / 2, N / 2)), p.moveTo(A, 0), p.lineTo(S - T, 0), p.arc(S - T, T, T, Math.PI * 3 / 2, 0, !1), p.lineTo(S, N - F), p.arc(S - F, N - F, F, 0, Math.PI / 2, !1), p.lineTo(G, N), p.arc(G, N - G, G, Math.PI / 2, Math.PI, !1), p.lineTo(0, A), p.arc(A, A, A, Math.PI, Math.PI * 3 / 2, !1);
    }
  };
})(st);
var Je = {}, qn = {}, Mr = {};
Object.defineProperty(Mr, "__esModule", { value: !0 });
Mr.HitContext = Mr.SceneContext = Mr.Context = void 0;
const A3 = st, a8 = Se;
function u8(t) {
  const e = [], n = t.length, r = A3.Util;
  for (let o = 0; o < n; o++) {
    let l = t[o];
    r._isNumber(l) ? l = Math.round(l * 1e3) / 1e3 : r._isString(l) || (l = l + ""), e.push(l);
  }
  return e;
}
const P2 = ",", c8 = "(", d8 = ")", f8 = "([", h8 = "])", p8 = ";", g8 = "()", m8 = "=", T2 = [
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
], y8 = [
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
], v8 = 100;
class Ec {
  constructor(e) {
    this.canvas = e, a8.Konva.enableTrace && (this.traceArr = [], this._enableTrace());
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
      c = r[a], d = c.method, d ? (g = c.args, l += d, e ? l += g8 : A3.Util._isArray(g[0]) ? l += f8 + g.join(P2) + h8 : (n && (g = g.map((y) => typeof y == "number" ? Math.floor(y) : y)), l += c8 + g.join(P2) + d8)) : (l += c.property, e || (l += m8 + c.val)), l += p8;
    return l;
  }
  clearTrace() {
    this.traceArr = [];
  }
  _trace(e) {
    let n = this.traceArr, r;
    n.push(e), r = n.length, r >= v8 && n.shift();
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
    const y = arguments, w = this._context;
    y.length === 3 ? w.drawImage(e, n, r) : y.length === 5 ? w.drawImage(e, n, r, o, l) : y.length === 9 && w.drawImage(e, n, r, o, l, a, c, d, g);
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
    let e = this, n = T2.length, r = this.setAttr, o, l;
    const a = function(c) {
      let d = e[c], g;
      e[c] = function() {
        return l = u8(Array.prototype.slice.call(arguments, 0)), g = d.apply(e, arguments), e._trace({
          method: c,
          args: l
        }), g;
      };
    };
    for (o = 0; o < n; o++)
      a(T2[o]);
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
Mr.Context = Ec;
y8.forEach(function(t) {
  Object.defineProperty(Ec.prototype, t, {
    get() {
      return this._context[t];
    },
    set(e) {
      this._context[t] = e;
    }
  });
});
class _8 extends Ec {
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
    }, d = e.getAbsoluteScale(), g = this.canvas.getPixelRatio(), y = d.x * g, w = d.y * g;
    this.setAttr("shadowColor", l), this.setAttr("shadowBlur", a * Math.min(Math.abs(y), Math.abs(w))), this.setAttr("shadowOffsetX", c.x * y), this.setAttr("shadowOffsetY", c.y * w);
  }
}
Mr.SceneContext = _8;
class S8 extends Ec {
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
Mr.HitContext = S8;
Object.defineProperty(qn, "__esModule", { value: !0 });
qn.HitCanvas = qn.SceneCanvas = qn.Canvas = void 0;
const rc = st, O3 = Mr, I3 = Se;
let lu;
function w8() {
  if (lu)
    return lu;
  const t = rc.Util.createCanvasElement(), e = t.getContext("2d");
  return lu = function() {
    const n = I3.Konva._global.devicePixelRatio || 1, r = e.webkitBackingStorePixelRatio || e.mozBackingStorePixelRatio || e.msBackingStorePixelRatio || e.oBackingStorePixelRatio || e.backingStorePixelRatio || 1;
    return n / r;
  }(), rc.Util.releaseCanvas(t), lu;
}
class y1 {
  constructor(e) {
    this.pixelRatio = 1, this.width = 0, this.height = 0, this.isCache = !1;
    const r = (e || {}).pixelRatio || I3.Konva.pixelRatio || w8();
    this.pixelRatio = r, this._canvas = rc.Util.createCanvasElement(), this._canvas.style.padding = "0", this._canvas.style.margin = "0", this._canvas.style.border = "0", this._canvas.style.background = "transparent", this._canvas.style.position = "absolute", this._canvas.style.top = "0", this._canvas.style.left = "0";
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
        return rc.Util.error("Unable to get data URL. " + o.message + " For more info read https://konvajs.org/docs/posts/Tainted_Canvas.html."), "";
      }
    }
  }
}
qn.Canvas = y1;
class x8 extends y1 {
  constructor(e = { width: 0, height: 0, willReadFrequently: !1 }) {
    super(e), this.context = new O3.SceneContext(this, {
      willReadFrequently: e.willReadFrequently
    }), this.setSize(e.width, e.height);
  }
}
qn.SceneCanvas = x8;
class C8 extends y1 {
  constructor(e = { width: 0, height: 0 }) {
    super(e), this.hitCanvas = !0, this.context = new O3.HitContext(this), this.setSize(e.width, e.height);
  }
}
qn.HitCanvas = C8;
var Pc = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.DD = void 0;
  const e = Se, n = st;
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
})(Pc);
var xe = {}, fe = {};
Object.defineProperty(fe, "__esModule", { value: !0 });
fe.RGBComponent = k8;
fe.alphaComponent = E8;
fe.getNumberValidator = P8;
fe.getNumberOrArrayOfNumbersValidator = T8;
fe.getNumberOrAutoValidator = N8;
fe.getStringValidator = R8;
fe.getStringOrGradientValidator = M8;
fe.getFunctionValidator = F8;
fe.getNumberArrayValidator = L8;
fe.getBooleanValidator = A8;
fe.getComponentValidator = O8;
const Dr = Se, at = st;
function zr(t) {
  return at.Util._isString(t) ? '"' + t + '"' : Object.prototype.toString.call(t) === "[object Number]" || at.Util._isBoolean(t) ? t : Object.prototype.toString.call(t);
}
function k8(t) {
  return t > 255 ? 255 : t < 0 ? 0 : Math.round(t);
}
function E8(t) {
  return t > 1 ? 1 : t < 1e-4 ? 1e-4 : t;
}
function P8() {
  if (Dr.Konva.isUnminified)
    return function(t, e) {
      return at.Util._isNumber(t) || at.Util.warn(zr(t) + ' is a not valid value for "' + e + '" attribute. The value should be a number.'), t;
    };
}
function T8(t) {
  if (Dr.Konva.isUnminified)
    return function(e, n) {
      let r = at.Util._isNumber(e), o = at.Util._isArray(e) && e.length == t;
      return !r && !o && at.Util.warn(zr(e) + ' is a not valid value for "' + n + '" attribute. The value should be a number or Array<number>(' + t + ")"), e;
    };
}
function N8() {
  if (Dr.Konva.isUnminified)
    return function(t, e) {
      return at.Util._isNumber(t) || t === "auto" || at.Util.warn(zr(t) + ' is a not valid value for "' + e + '" attribute. The value should be a number or "auto".'), t;
    };
}
function R8() {
  if (Dr.Konva.isUnminified)
    return function(t, e) {
      return at.Util._isString(t) || at.Util.warn(zr(t) + ' is a not valid value for "' + e + '" attribute. The value should be a string.'), t;
    };
}
function M8() {
  if (Dr.Konva.isUnminified)
    return function(t, e) {
      const n = at.Util._isString(t), r = Object.prototype.toString.call(t) === "[object CanvasGradient]" || t && t.addColorStop;
      return n || r || at.Util.warn(zr(t) + ' is a not valid value for "' + e + '" attribute. The value should be a string or a native gradient.'), t;
    };
}
function F8() {
  if (Dr.Konva.isUnminified)
    return function(t, e) {
      return at.Util._isFunction(t) || at.Util.warn(zr(t) + ' is a not valid value for "' + e + '" attribute. The value should be a function.'), t;
    };
}
function L8() {
  if (Dr.Konva.isUnminified)
    return function(t, e) {
      const n = Int8Array ? Object.getPrototypeOf(Int8Array) : null;
      return n && t instanceof n || (at.Util._isArray(t) ? t.forEach(function(r) {
        at.Util._isNumber(r) || at.Util.warn('"' + e + '" attribute has non numeric element ' + r + ". Make sure that all elements are numbers.");
      }) : at.Util.warn(zr(t) + ' is a not valid value for "' + e + '" attribute. The value should be a array of numbers.')), t;
    };
}
function A8() {
  if (Dr.Konva.isUnminified)
    return function(t, e) {
      return t === !0 || t === !1 || at.Util.warn(zr(t) + ' is a not valid value for "' + e + '" attribute. The value should be a boolean.'), t;
    };
}
function O8(t) {
  if (Dr.Konva.isUnminified)
    return function(e, n) {
      return e == null || at.Util.isObject(e) || at.Util.warn(zr(e) + ' is a not valid value for "' + n + '" attribute. The value should be an object with properties ' + t), e;
    };
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.Factory = void 0;
  const e = st, n = fe, r = "get", o = "set";
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
      const y = c.length, w = e.Util._capitalize, _ = r + w(a), C = o + w(a);
      l.prototype[_] = function() {
        const E = {};
        for (let R = 0; R < y; R++) {
          const k = c[R];
          E[k] = this.getAttr(a + w(k));
        }
        return E;
      };
      const v = (0, n.getComponentValidator)(c);
      l.prototype[C] = function(E) {
        const R = this.attrs[a];
        d && (E = d.call(this, E, a)), v && v.call(this, E, a);
        for (const k in E)
          E.hasOwnProperty(k) && this._setAttr(a + w(k), E[k]);
        return E || c.forEach((k) => {
          this._setAttr(a + w(k), void 0);
        }), this._fireChangeEvent(a, R, E), g && g.call(this), this;
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
        const w = this.attrs[a];
        return w === void 0 ? c : w;
      }, t.Factory.addSetter(l, a, d, function() {
        e.Util.error(y);
      }), t.Factory.addOverloadedGetterSetter(l, a);
    },
    backCompat(l, a) {
      e.Util.each(a, function(c, d) {
        const g = l.prototype[d], y = r + e.Util._capitalize(c), w = o + e.Util._capitalize(c);
        function _() {
          g.apply(this, arguments), e.Util.error('"' + c + '" method is deprecated and will be removed soon. Use ""' + d + '" instead.');
        }
        l.prototype[c] = _, l.prototype[y] = _, l.prototype[w] = _;
      });
    },
    afterSetFilter() {
      this._filterUpToDate = !1;
    }
  };
})(xe);
Object.defineProperty(Je, "__esModule", { value: !0 });
Je.Node = void 0;
const Ms = qn, Rn = Pc, Ul = xe, Zr = Se, Ee = st, ft = fe, Ru = "absoluteOpacity", au = "allEventListeners", kr = "absoluteTransform", N2 = "absoluteScale", Bi = "canvas", I8 = "Change", D8 = "children", z8 = "konva", h0 = "listening", G8 = "mouseenter", U8 = "mouseleave", B8 = "pointerenter", V8 = "pointerleave", H8 = "touchenter", j8 = "touchleave", R2 = "set", M2 = "Shape", Mu = " ", F2 = "stage", Jr = "transform", W8 = "Stage", p0 = "visible", Y8 = [
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
].join(Mu);
let K8 = 1;
class pe {
  constructor(e) {
    this._id = K8++, this.eventListeners = {}, this.attrs = {}, this.index = 0, this._allEventListeners = null, this.parent = null, this._cache = /* @__PURE__ */ new Map(), this._attachedDepsListeners = /* @__PURE__ */ new Map(), this._lastPos = null, this._batchingTransformChange = !1, this._needClearTransformCache = !1, this._filterUpToDate = !1, this._isUnderCache = !1, this._dragEventId = null, this._shouldFireChangeEvents = !1, this.setAttrs(e), this._shouldFireChangeEvents = !0;
  }
  hasChildren() {
    return !1;
  }
  _clearCache(e) {
    (e === Jr || e === kr) && this._cache.get(e) ? this._cache.get(e).dirty = !0 : e ? this._cache.delete(e) : this._cache.clear();
  }
  _getCache(e, n) {
    let r = this._cache.get(e);
    return (r === void 0 || (e === Jr || e === kr) && r.dirty === !0) && (r = n.call(this), this._cache.set(e, r)), r;
  }
  _calculate(e, n, r) {
    if (!this._attachedDepsListeners.get(e)) {
      const o = n.map((l) => l + "Change.konva").join(Mu);
      this.on(o, () => {
        this._clearCache(e);
      }), this._attachedDepsListeners.set(e, !0);
    }
    return this._getCache(e, r);
  }
  _getCanvasCache() {
    return this._cache.get(Bi);
  }
  _clearSelfAndDescendantCache(e) {
    this._clearCache(e), e === kr && this.fire("absoluteTransformChange");
  }
  clearCache() {
    if (this._cache.has(Bi)) {
      const { scene: e, filter: n, hit: r, buffer: o } = this._cache.get(Bi);
      Ee.Util.releaseCanvas(e, n, r, o), this._cache.delete(Bi);
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
    let o = Math.ceil(n.width || r.width), l = Math.ceil(n.height || r.height), a = n.pixelRatio, c = n.x === void 0 ? Math.floor(r.x) : n.x, d = n.y === void 0 ? Math.floor(r.y) : n.y, g = n.offset || 0, y = n.drawBorder || !1, w = n.hitCanvasPixelRatio || 1;
    if (!o || !l) {
      Ee.Util.error("Can not cache the node. Width or height of the node equals 0. Caching is skipped.");
      return;
    }
    const _ = Math.abs(Math.round(r.x) - c) > 0.5 ? 1 : 0, C = Math.abs(Math.round(r.y) - d) > 0.5 ? 1 : 0;
    o += g * 2 + _, l += g * 2 + C, c -= g, d -= g;
    const v = new Ms.SceneCanvas({
      pixelRatio: a,
      width: o,
      height: l
    }), E = new Ms.SceneCanvas({
      pixelRatio: a,
      width: 0,
      height: 0,
      willReadFrequently: !0
    }), R = new Ms.HitCanvas({
      pixelRatio: w,
      width: o,
      height: l
    }), k = v.getContext(), x = R.getContext(), p = new Ms.SceneCanvas({
      width: v.width / v.pixelRatio + Math.abs(c),
      height: v.height / v.pixelRatio + Math.abs(d),
      pixelRatio: v.pixelRatio
    }), S = p.getContext();
    return R.isCache = !0, v.isCache = !0, this._cache.delete(Bi), this._filterUpToDate = !1, n.imageSmoothingEnabled === !1 && (v.getContext()._context.imageSmoothingEnabled = !1, E.getContext()._context.imageSmoothingEnabled = !1), k.save(), x.save(), S.save(), k.translate(-c, -d), x.translate(-c, -d), S.translate(-c, -d), p.x = c, p.y = d, this._isUnderCache = !0, this._clearSelfAndDescendantCache(Ru), this._clearSelfAndDescendantCache(N2), this.drawScene(v, this, p), this.drawHit(R, this), this._isUnderCache = !1, k.restore(), x.restore(), y && (k.save(), k.beginPath(), k.rect(0, 0, o, l), k.closePath(), k.setAttr("strokeStyle", "red"), k.setAttr("lineWidth", 5), k.stroke(), k.restore()), this._cache.set(Bi, {
      scene: v,
      filter: E,
      hit: R,
      buffer: p,
      x: c,
      y: d
    }), this._requestDraw(), this;
  }
  isCached() {
    return this._cache.has(Bi);
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
              Ee.Util.error("Filter should be type of function, but got " + typeof g + " instead. Please check correct filters");
              continue;
            }
            g.call(this, c), l.putImageData(c, 0, 0);
          }
        } catch (w) {
          Ee.Util.error("Unable to apply filter. " + w.message + " This post my help you https://konvajs.org/docs/posts/Tainted_Canvas.html.");
        }
        this._filterUpToDate = !0;
      }
      return o;
    }
    return r;
  }
  on(e, n) {
    if (this._cache && this._cache.delete(au), arguments.length === 3)
      return this._delegate.apply(this, arguments);
    const r = e.split(Mu);
    for (let o = 0; o < r.length; o++) {
      const a = r[o].split("."), c = a[0], d = a[1] || "";
      this.eventListeners[c] || (this.eventListeners[c] = []), this.eventListeners[c].push({ name: d, handler: n });
    }
    return this;
  }
  off(e, n) {
    let r = (e || "").split(Mu), o = r.length, l, a, c, d, g, y;
    if (this._cache && this._cache.delete(au), !e)
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
        l = Ee.Util.cloneObject(l), l.currentTarget = a[c], r.call(a[c], l);
    });
  }
  remove() {
    return this.isDragging() && this.stopDrag(), Rn.DD._dragElements.delete(this._id), this._remove(), this;
  }
  _clearCaches() {
    this._clearSelfAndDescendantCache(kr), this._clearSelfAndDescendantCache(Ru), this._clearSelfAndDescendantCache(N2), this._clearSelfAndDescendantCache(F2), this._clearSelfAndDescendantCache(p0), this._clearSelfAndDescendantCache(h0);
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
    const n = "get" + Ee.Util._capitalize(e);
    return Ee.Util._isFunction(this[n]) ? this[n]() : this.attrs[e];
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
        n !== D8 && (r = R2 + Ee.Util._capitalize(n), Ee.Util._isFunction(this[r]) ? this[r](e[n]) : this._setAttr(n, e[n]));
    }), this;
  }
  isListening() {
    return this._getCache(h0, this._isListening);
  }
  _isListening(e) {
    if (!this.listening())
      return !1;
    const r = this.getParent();
    return r && r !== e && this !== e ? r._isListening(e) : !0;
  }
  isVisible() {
    return this._getCache(p0, this._isVisible);
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
    Rn.DD._dragElements.forEach((a) => {
      a.dragStatus === "dragging" && (a.node.nodeType === "Stage" || a.node.getLayer() === r) && (o = !0);
    });
    const l = !n && !Zr.Konva.hitOnDragEnabled && (o || Zr.Konva.isTransforming());
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
        c = y[a], r++, c.nodeType !== M2 && (o = o.concat(c.getChildren().slice())), c._id === n._id && (a = l);
      o.length > 0 && o[0].getDepth() <= e && d(o);
    }
    const g = this.getStage();
    return n.nodeType !== W8 && g && d(g.getChildren()), r;
  }
  getDepth() {
    let e = 0, n = this.parent;
    for (; n; )
      e++, n = n.parent;
    return e;
  }
  _batchTransformChanges(e) {
    this._batchingTransformChange = !0, e(), this._batchingTransformChange = !1, this._needClearTransformCache && (this._clearCache(Jr), this._clearSelfAndDescendantCache(kr)), this._needClearTransformCache = !1;
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
    const o = this.getAbsoluteTransform(e).getMatrix(), l = new Ee.Transform(), a = this.offset();
    return l.m = o.slice(), l.translate(a.x, a.y), l.getTranslation();
  }
  setAbsolutePosition(e) {
    const { x: n, y: r, ...o } = this._clearTransform();
    this.attrs.x = n, this.attrs.y = r, this._clearCache(Jr);
    const l = this._getAbsoluteTransform().copy();
    return l.invert(), l.translate(e.x, e.y), e = {
      x: this.attrs.x + l.getTranslation().x,
      y: this.attrs.y + l.getTranslation().y
    }, this._setTransform(o), this.setPosition({ x: e.x, y: e.y }), this._clearCache(Jr), this._clearSelfAndDescendantCache(kr), this;
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
      return Ee.Util.warn("Node has no parent. moveToTop function is ignored."), !1;
    const e = this.index, n = this.parent.getChildren().length;
    return e < n - 1 ? (this.parent.children.splice(e, 1), this.parent.children.push(this), this.parent._setChildrenIndices(), !0) : !1;
  }
  moveUp() {
    if (!this.parent)
      return Ee.Util.warn("Node has no parent. moveUp function is ignored."), !1;
    const e = this.index, n = this.parent.getChildren().length;
    return e < n - 1 ? (this.parent.children.splice(e, 1), this.parent.children.splice(e + 1, 0, this), this.parent._setChildrenIndices(), !0) : !1;
  }
  moveDown() {
    if (!this.parent)
      return Ee.Util.warn("Node has no parent. moveDown function is ignored."), !1;
    const e = this.index;
    return e > 0 ? (this.parent.children.splice(e, 1), this.parent.children.splice(e - 1, 0, this), this.parent._setChildrenIndices(), !0) : !1;
  }
  moveToBottom() {
    if (!this.parent)
      return Ee.Util.warn("Node has no parent. moveToBottom function is ignored."), !1;
    const e = this.index;
    return e > 0 ? (this.parent.children.splice(e, 1), this.parent.children.unshift(this), this.parent._setChildrenIndices(), !0) : !1;
  }
  setZIndex(e) {
    if (!this.parent)
      return Ee.Util.warn("Node has no parent. zIndex parameter is ignored."), this;
    (e < 0 || e >= this.parent.children.length) && Ee.Util.warn("Unexpected value " + e + " for zIndex property. zIndex is just index of a node in children of its parent. Expected value is from 0 to " + (this.parent.children.length - 1) + ".");
    const n = this.index;
    return this.parent.children.splice(n, 1), this.parent.children.splice(e, 0, this), this.parent._setChildrenIndices(), this;
  }
  getAbsoluteOpacity() {
    return this._getCache(Ru, this._getAbsoluteOpacity);
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
      r = e[n], a = Ee.Util.isObject(r) && !Ee.Util._isPlainObject(r) && !Ee.Util._isArray(r), !a && (o = typeof this[n] == "function" && this[n], delete e[n], l = o ? o.call(this) : null, e[n] = r, l !== r && (c.attrs[n] = r));
    return Ee.Util._prepareToStringify(c);
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
      if (l = n[o], Ee.Util.isValidSelector(l) || (Ee.Util.warn('Selector "' + l + '" is invalid. Allowed selectors examples are "#foo", ".bar" or "Group".'), Ee.Util.warn('If you have a custom shape with such className, please change it to start with upper letter like "Triangle".'), Ee.Util.warn("Konva is awesome, right?")), l.charAt(0) === "#") {
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
    return this._getCache(F2, this._getStage);
  }
  _getStage() {
    const e = this.getParent();
    return e ? e.getStage() : null;
  }
  fire(e, n = {}, r) {
    return n.target = n.target || this, r ? this._fireAndBubble(e, n) : this._fire(e, n), this;
  }
  getAbsoluteTransform(e) {
    return e ? this._getAbsoluteTransform(e) : this._getCache(kr, this._getAbsoluteTransform);
  }
  _getAbsoluteTransform(e) {
    let n;
    if (e)
      return n = new Ee.Transform(), this._eachAncestorReverse(function(r) {
        const o = r.transformsEnabled();
        o === "all" ? n.multiply(r.getTransform()) : o === "position" && n.translate(r.x() - r.offsetX(), r.y() - r.offsetY());
      }, e), n;
    {
      n = this._cache.get(kr) || new Ee.Transform(), this.parent ? this.parent.getAbsoluteTransform().copyInto(n) : n.reset();
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
    return this._getCache(Jr, this._getTransform);
  }
  _getTransform() {
    var e, n;
    const r = this._cache.get(Jr) || new Ee.Transform();
    r.reset();
    const o = this.x(), l = this.y(), a = Zr.Konva.getAngle(this.rotation()), c = (e = this.attrs.scaleX) !== null && e !== void 0 ? e : 1, d = (n = this.attrs.scaleY) !== null && n !== void 0 ? n : 1, g = this.attrs.skewX || 0, y = this.attrs.skewY || 0, w = this.attrs.offsetX || 0, _ = this.attrs.offsetY || 0;
    return (o !== 0 || l !== 0) && r.translate(o, l), a !== 0 && r.rotate(a), (g !== 0 || y !== 0) && r.skew(g, y), (c !== 1 || d !== 1) && r.scale(c, d), (w !== 0 || _ !== 0) && r.translate(-1 * w, -1 * _), r.dirty = !1, r;
  }
  clone(e) {
    let n = Ee.Util.cloneObject(this.attrs), r, o, l, a, c;
    for (r in e)
      n[r] = e[r];
    const d = new this.constructor(n);
    for (r in this.eventListeners)
      for (o = this.eventListeners[r], l = o.length, a = 0; a < l; a++)
        c = o[a], c.name.indexOf(z8) < 0 && (d.eventListeners[r] || (d.eventListeners[r] = []), d.eventListeners[r].push(c));
    return d;
  }
  _toKonvaCanvas(e) {
    e = e || {};
    const n = this.getClientRect(), r = this.getStage(), o = e.x !== void 0 ? e.x : Math.floor(n.x), l = e.y !== void 0 ? e.y : Math.floor(n.y), a = e.pixelRatio || 1, c = new Ms.SceneCanvas({
      width: e.width || Math.ceil(n.width) || (r ? r.width() : 0),
      height: e.height || Math.ceil(n.height) || (r ? r.height() : 0),
      pixelRatio: a
    }), d = c.getContext(), g = new Ms.SceneCanvas({
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
        o && delete e.callback, Ee.Util._urlToImage(this.toDataURL(e), function(l) {
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
    return this.attrs.dragDistance !== void 0 ? this.attrs.dragDistance : this.parent ? this.parent.getDragDistance() : Zr.Konva.dragDistance;
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
    this._fire(e + I8, {
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
    const r = this[R2 + Ee.Util._capitalize(e)];
    return Ee.Util._isFunction(r) ? r.call(this, n) : this._setAttr(e, n), this;
  }
  _requestDraw() {
    if (Zr.Konva.autoDrawEnabled) {
      const e = this.getLayer() || this.getStage();
      e == null || e.batchDraw();
    }
  }
  _setAttr(e, n) {
    const r = this.attrs[e];
    r === n && !Ee.Util.isObject(n) || (n == null ? delete this.attrs[e] : this.attrs[e] = n, this._shouldFireChangeEvents && this._fireChangeEvent(e, r, n), this._requestDraw());
  }
  _setComponentAttr(e, n, r) {
    let o;
    r !== void 0 && (o = this.attrs[e], o || (this.attrs[e] = this.getAttr(e)), this.attrs[e][n] = r, this._fireChangeEvent(e, o, r));
  }
  _fireAndBubble(e, n, r) {
    n && this.nodeType === M2 && (n.target = this);
    const o = [
      G8,
      U8,
      B8,
      V8,
      H8,
      j8
    ];
    if (!(o.indexOf(e) !== -1 && (r && (this === r || this.isAncestorOf && this.isAncestorOf(r)) || this.nodeType === "Stage" && !r))) {
      this._fire(e, n);
      const a = o.indexOf(e) !== -1 && r && r.isAncestorOf && r.isAncestorOf(this) && !r.isAncestorOf(this.parent);
      (n && !n.cancelBubble || !n) && this.parent && this.parent.isListening() && !a && (r && r.parent ? this._fireAndBubble.call(this.parent, e, n, r) : this._fireAndBubble.call(this.parent, e, n));
    }
  }
  _getProtoListeners(e) {
    var n, r, o;
    const l = (n = this._cache.get(au)) !== null && n !== void 0 ? n : {};
    let a = l == null ? void 0 : l[e];
    if (a === void 0) {
      a = [];
      let c = Object.getPrototypeOf(this);
      for (; c; ) {
        const d = (o = (r = c.eventListeners) === null || r === void 0 ? void 0 : r[e]) !== null && o !== void 0 ? o : [];
        a.push(...d), c = Object.getPrototypeOf(c);
      }
      l[e] = a, this._cache.set(au, l);
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
    Rn.DD._dragElements.set(this._id, {
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
    Rn.DD._dragElements.has(this._id) || this._createDragElement(e);
    const r = Rn.DD._dragElements.get(this._id);
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
      a ? o = a : Ee.Util.warn("dragBoundFunc did not return any value. That is unexpected behavior. You must return new absolute position from dragBoundFunc.");
    }
    (!this._lastPos || this._lastPos.x !== o.x || this._lastPos.y !== o.y) && (this.setAbsolutePosition(o), this._requestDraw()), this._lastPos = o;
  }
  stopDrag(e) {
    const n = Rn.DD._dragElements.get(this._id);
    n && (n.dragStatus = "stopped"), Rn.DD._endDragBefore(e), Rn.DD._endDragAfter(e);
  }
  setDraggable(e) {
    this._setAttr("draggable", e), this._dragChange();
  }
  isDragging() {
    const e = Rn.DD._dragElements.get(this._id);
    return e ? e.dragStatus === "dragging" : !1;
  }
  _listenDrag() {
    this._dragCleanup(), this.on("mousedown.konva touchstart.konva", function(e) {
      if (!(!(e.evt.button !== void 0) || Zr.Konva.dragButtons.indexOf(e.evt.button) >= 0) || this.isDragging())
        return;
      let o = !1;
      Rn.DD._dragElements.forEach((l) => {
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
      const n = Rn.DD._dragElements.get(this._id), r = n && n.dragStatus === "dragging", o = n && n.dragStatus === "ready";
      r ? this.stopDrag() : o && Rn.DD._dragElements.delete(this._id);
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
    return Ee.Util.haveIntersection(r, this.getClientRect());
  }
  static create(e, n) {
    return Ee.Util._isString(e) && (e = JSON.parse(e)), this._createNode(e, n);
  }
  static _createNode(e, n) {
    let r = pe.prototype.getClassName.call(e), o = e.children, l, a, c;
    n && (e.attrs.container = n), Zr.Konva[r] || (Ee.Util.warn('Can not find a node with class name "' + r + '". Fallback to "Shape".'), r = "Shape");
    const d = Zr.Konva[r];
    if (l = new d(e.attrs), o)
      for (a = o.length, c = 0; c < a; c++)
        l.add(pe._createNode(o[c]));
    return l;
  }
}
Je.Node = pe;
pe.prototype.nodeType = "Node";
pe.prototype._attrsAffectingSize = [];
pe.prototype.eventListeners = {};
pe.prototype.on.call(pe.prototype, Y8, function() {
  if (this._batchingTransformChange) {
    this._needClearTransformCache = !0;
    return;
  }
  this._clearCache(Jr), this._clearSelfAndDescendantCache(kr);
});
pe.prototype.on.call(pe.prototype, "visibleChange.konva", function() {
  this._clearSelfAndDescendantCache(p0);
});
pe.prototype.on.call(pe.prototype, "listeningChange.konva", function() {
  this._clearSelfAndDescendantCache(h0);
});
pe.prototype.on.call(pe.prototype, "opacityChange.konva", function() {
  this._clearSelfAndDescendantCache(Ru);
});
const He = Ul.Factory.addGetterSetter;
He(pe, "zIndex");
He(pe, "absolutePosition");
He(pe, "position");
He(pe, "x", 0, (0, ft.getNumberValidator)());
He(pe, "y", 0, (0, ft.getNumberValidator)());
He(pe, "globalCompositeOperation", "source-over", (0, ft.getStringValidator)());
He(pe, "opacity", 1, (0, ft.getNumberValidator)());
He(pe, "name", "", (0, ft.getStringValidator)());
He(pe, "id", "", (0, ft.getStringValidator)());
He(pe, "rotation", 0, (0, ft.getNumberValidator)());
Ul.Factory.addComponentsGetterSetter(pe, "scale", ["x", "y"]);
He(pe, "scaleX", 1, (0, ft.getNumberValidator)());
He(pe, "scaleY", 1, (0, ft.getNumberValidator)());
Ul.Factory.addComponentsGetterSetter(pe, "skew", ["x", "y"]);
He(pe, "skewX", 0, (0, ft.getNumberValidator)());
He(pe, "skewY", 0, (0, ft.getNumberValidator)());
Ul.Factory.addComponentsGetterSetter(pe, "offset", ["x", "y"]);
He(pe, "offsetX", 0, (0, ft.getNumberValidator)());
He(pe, "offsetY", 0, (0, ft.getNumberValidator)());
He(pe, "dragDistance", void 0, (0, ft.getNumberValidator)());
He(pe, "width", 0, (0, ft.getNumberValidator)());
He(pe, "height", 0, (0, ft.getNumberValidator)());
He(pe, "listening", !0, (0, ft.getBooleanValidator)());
He(pe, "preventDefault", !0, (0, ft.getBooleanValidator)());
He(pe, "filters", void 0, function(t) {
  return this._filterUpToDate = !1, t;
});
He(pe, "visible", !0, (0, ft.getBooleanValidator)());
He(pe, "transformsEnabled", "all", (0, ft.getStringValidator)());
He(pe, "size");
He(pe, "dragBoundFunc");
He(pe, "draggable", !1, (0, ft.getBooleanValidator)());
Ul.Factory.backCompat(pe, {
  rotateDeg: "rotate",
  setRotationDeg: "setRotation",
  getRotationDeg: "getRotation"
});
var ss = {};
Object.defineProperty(ss, "__esModule", { value: !0 });
ss.Container = void 0;
const fo = xe, uh = Je, Tc = fe;
class os extends uh.Node {
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
    const e = uh.Node.prototype.toObject.call(this);
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
    const n = uh.Node.prototype.clone.call(this, e);
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
    const a = n && n.getContext(), c = this.clipWidth(), d = this.clipHeight(), g = this.clipFunc(), y = typeof c == "number" && typeof d == "number" || g, w = r === this;
    if (y) {
      a.save();
      const C = this.getAbsoluteTransform(r);
      let v = C.getMatrix();
      a.transform(v[0], v[1], v[2], v[3], v[4], v[5]), a.beginPath();
      let E;
      if (g)
        E = g.call(this, a, this);
      else {
        const R = this.clipX(), k = this.clipY();
        a.rect(R || 0, k || 0, c, d);
      }
      a.clip.apply(a, E), v = C.copy().invert().getMatrix(), a.transform(v[0], v[1], v[2], v[3], v[4], v[5]);
    }
    const _ = !w && this.globalCompositeOperation() !== "source-over" && e === "drawScene";
    _ && (a.save(), a._applyGlobalCompositeOperation(this)), (l = this.children) === null || l === void 0 || l.forEach(function(C) {
      C[e](n, r, o);
    }), _ && a.restore(), y && a.restore();
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
    (n = this.children) === null || n === void 0 || n.forEach(function(C) {
      if (!C.visible())
        return;
      const v = C.getClientRect({
        relativeTo: y,
        skipShadow: e.skipShadow,
        skipStroke: e.skipStroke
      });
      v.width === 0 && v.height === 0 || (l === void 0 ? (l = v.x, a = v.y, c = v.x + v.width, d = v.y + v.height) : (l = Math.min(l, v.x), a = Math.min(a, v.y), c = Math.max(c, v.x + v.width), d = Math.max(d, v.y + v.height)));
    });
    const w = this.find("Shape");
    let _ = !1;
    for (let C = 0; C < w.length; C++)
      if (w[C]._isVisible(this)) {
        _ = !0;
        break;
      }
    return _ && l !== void 0 ? g = {
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
ss.Container = os;
fo.Factory.addComponentsGetterSetter(os, "clip", [
  "x",
  "y",
  "width",
  "height"
]);
fo.Factory.addGetterSetter(os, "clipX", void 0, (0, Tc.getNumberValidator)());
fo.Factory.addGetterSetter(os, "clipY", void 0, (0, Tc.getNumberValidator)());
fo.Factory.addGetterSetter(os, "clipWidth", void 0, (0, Tc.getNumberValidator)());
fo.Factory.addGetterSetter(os, "clipHeight", void 0, (0, Tc.getNumberValidator)());
fo.Factory.addGetterSetter(os, "clipFunc");
var D3 = {}, Si = {};
Object.defineProperty(Si, "__esModule", { value: !0 });
Si.getCapturedShape = $8;
Si.createEvent = v1;
Si.hasPointerCapture = Q8;
Si.setPointerCapture = b8;
Si.releaseCapture = G3;
const X8 = Se, Fl = /* @__PURE__ */ new Map(), z3 = X8.Konva._global.PointerEvent !== void 0;
function $8(t) {
  return Fl.get(t);
}
function v1(t) {
  return {
    evt: t,
    pointerId: t.pointerId
  };
}
function Q8(t, e) {
  return Fl.get(t) === e;
}
function b8(t, e) {
  G3(t), e.getStage() && (Fl.set(t, e), z3 && e._fire("gotpointercapture", v1(new PointerEvent("gotpointercapture"))));
}
function G3(t, e) {
  const n = Fl.get(t);
  if (!n)
    return;
  const r = n.getStage();
  r && r.content, Fl.delete(t), z3 && n._fire("lostpointercapture", v1(new PointerEvent("lostpointercapture")));
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.Stage = t.stages = void 0;
  const e = st, n = xe, r = ss, o = Se, l = qn, a = Pc, c = Se, d = Si, g = "Stage", y = "string", w = "px", _ = "mouseout", C = "mouseleave", v = "mouseover", E = "mouseenter", R = "mousemove", k = "mousedown", x = "mouseup", p = "pointermove", S = "pointerdown", N = "pointerup", M = "pointercancel", A = "lostpointercapture", T = "pointerout", G = "pointerleave", F = "pointerover", V = "pointerenter", j = "contextmenu", q = "touchstart", D = "touchend", X = "touchmove", he = "touchcancel", de = "wheel", H = 5, Z = [
    [E, "_pointerenter"],
    [k, "_pointerdown"],
    [R, "_pointermove"],
    [x, "_pointerup"],
    [C, "_pointerleave"],
    [q, "_pointerdown"],
    [X, "_pointermove"],
    [D, "_pointerup"],
    [he, "_pointercancel"],
    [v, "_pointerover"],
    [de, "_wheel"],
    [j, "_contextmenu"],
    [S, "_pointerdown"],
    [p, "_pointermove"],
    [N, "_pointerup"],
    [M, "_pointercancel"],
    [G, "_pointerleave"],
    [A, "_lostpointercapture"]
  ], Q = {
    mouse: {
      [T]: _,
      [G]: C,
      [F]: v,
      [V]: E,
      [p]: R,
      [S]: k,
      [N]: x,
      [M]: "mousecancel",
      pointerclick: "click",
      pointerdblclick: "dblclick"
    },
    touch: {
      [T]: "touchout",
      [G]: "touchleave",
      [F]: "touchover",
      [V]: "touchenter",
      [p]: X,
      [S]: q,
      [N]: D,
      [M]: he,
      pointerclick: "tap",
      pointerdblclick: "dbltap"
    },
    pointer: {
      [T]: T,
      [G]: G,
      [F]: F,
      [V]: V,
      [p]: p,
      [S]: S,
      [N]: N,
      [M]: M,
      pointerclick: "pointerclick",
      pointerdblclick: "pointerdblclick"
    }
  }, b = (ze) => ze.indexOf("pointer") >= 0 ? "pointer" : ze.indexOf("touch") >= 0 ? "touch" : "mouse", se = (ze) => {
    const L = b(ze);
    if (L === "pointer")
      return o.Konva.pointerEventsEnabled && Q.pointer;
    if (L === "touch")
      return Q.touch;
    if (L === "mouse")
      return Q.mouse;
  };
  function Ne(ze = {}) {
    return (ze.clipFunc || ze.clipWidth || ze.clipHeight) && e.Util.warn("Stage does not support clipping. Please use clip for Layers or Groups."), ze;
  }
  const je = "Pointer position is missing and not registered by the stage. Looks like it is outside of the stage container. You can set it manually from event: stage.setPointersPositions(event);";
  t.stages = [];
  class mt extends r.Container {
    constructor(L) {
      super(Ne(L)), this._pointerPositions = [], this._changedPointerPositions = [], this._buildDOM(), this._bindContentEvents(), t.stages.push(this), this.on("widthChange.konva heightChange.konva", this._resizeDOM), this.on("visibleChange.konva", this._checkVisibility), this.on("clipWidthChange.konva clipHeightChange.konva clipFuncChange.konva", () => {
        Ne(this.attrs);
      }), this._checkVisibility();
    }
    _validateAdd(L) {
      const W = L.getType() === "Layer", ue = L.getType() === "FastLayer";
      W || ue || e.Util.throw("You may only add layers to the stage.");
    }
    _checkVisibility() {
      if (!this.content)
        return;
      const L = this.visible() ? "" : "none";
      this.content.style.display = L;
    }
    setContainer(L) {
      if (typeof L === y) {
        let W;
        if (L.charAt(0) === ".") {
          const ue = L.slice(1);
          L = document.getElementsByClassName(ue)[0];
        } else
          L.charAt(0) !== "#" ? W = L : W = L.slice(1), L = document.getElementById(W);
        if (!L)
          throw "Can not find container in document with id " + W;
      }
      return this._setAttr("container", L), this.content && (this.content.parentElement && this.content.parentElement.removeChild(this.content), L.appendChild(this.content)), this;
    }
    shouldDrawHit() {
      return !0;
    }
    clear() {
      const L = this.children, W = L.length;
      for (let ue = 0; ue < W; ue++)
        L[ue].clear();
      return this;
    }
    clone(L) {
      return L || (L = {}), L.container = typeof document < "u" && document.createElement("div"), r.Container.prototype.clone.call(this, L);
    }
    destroy() {
      super.destroy();
      const L = this.content;
      L && e.Util._isInDocument(L) && this.container().removeChild(L);
      const W = t.stages.indexOf(this);
      return W > -1 && t.stages.splice(W, 1), e.Util.releaseCanvas(this.bufferCanvas._canvas, this.bufferHitCanvas._canvas), this;
    }
    getPointerPosition() {
      const L = this._pointerPositions[0] || this._changedPointerPositions[0];
      return L ? {
        x: L.x,
        y: L.y
      } : (e.Util.warn(je), null);
    }
    _getPointerById(L) {
      return this._pointerPositions.find((W) => W.id === L);
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
    _toKonvaCanvas(L) {
      L = L || {}, L.x = L.x || 0, L.y = L.y || 0, L.width = L.width || this.width(), L.height = L.height || this.height();
      const W = new l.SceneCanvas({
        width: L.width,
        height: L.height,
        pixelRatio: L.pixelRatio || 1
      }), ue = W.getContext()._context, Ae = this.children;
      return (L.x || L.y) && ue.translate(-1 * L.x, -1 * L.y), Ae.forEach(function(me) {
        if (!me.isVisible())
          return;
        const Ge = me._toKonvaCanvas(L);
        ue.drawImage(Ge._canvas, L.x, L.y, Ge.getWidth() / Ge.getPixelRatio(), Ge.getHeight() / Ge.getPixelRatio());
      }), W;
    }
    getIntersection(L) {
      if (!L)
        return null;
      const W = this.children, ue = W.length, Ae = ue - 1;
      for (let me = Ae; me >= 0; me--) {
        const Ge = W[me].getIntersection(L);
        if (Ge)
          return Ge;
      }
      return null;
    }
    _resizeDOM() {
      const L = this.width(), W = this.height();
      this.content && (this.content.style.width = L + w, this.content.style.height = W + w), this.bufferCanvas.setSize(L, W), this.bufferHitCanvas.setSize(L, W), this.children.forEach((ue) => {
        ue.setSize({ width: L, height: W }), ue.draw();
      });
    }
    add(L, ...W) {
      if (arguments.length > 1) {
        for (let Ae = 0; Ae < arguments.length; Ae++)
          this.add(arguments[Ae]);
        return this;
      }
      super.add(L);
      const ue = this.children.length;
      return ue > H && e.Util.warn("The stage has " + ue + " layers. Recommended maximum number of layers is 3-5. Adding more layers into the stage may drop the performance. Rethink your tree structure, you can use Konva.Group."), L.setSize({ width: this.width(), height: this.height() }), L.draw(), o.Konva.isBrowser && this.content.appendChild(L.canvas._canvas), this;
    }
    getParent() {
      return null;
    }
    getLayer() {
      return null;
    }
    hasPointerCapture(L) {
      return d.hasPointerCapture(L, this);
    }
    setPointerCapture(L) {
      d.setPointerCapture(L, this);
    }
    releaseCapture(L) {
      d.releaseCapture(L, this);
    }
    getLayers() {
      return this.children;
    }
    _bindContentEvents() {
      o.Konva.isBrowser && Z.forEach(([L, W]) => {
        this.content.addEventListener(L, (ue) => {
          this[W](ue);
        }, { passive: !1 });
      });
    }
    _pointerenter(L) {
      this.setPointersPositions(L);
      const W = se(L.type);
      W && this._fire(W.pointerenter, {
        evt: L,
        target: this,
        currentTarget: this
      });
    }
    _pointerover(L) {
      this.setPointersPositions(L);
      const W = se(L.type);
      W && this._fire(W.pointerover, {
        evt: L,
        target: this,
        currentTarget: this
      });
    }
    _getTargetShape(L) {
      let W = this[L + "targetShape"];
      return W && !W.getStage() && (W = null), W;
    }
    _pointerleave(L) {
      const W = se(L.type), ue = b(L.type);
      if (!W)
        return;
      this.setPointersPositions(L);
      const Ae = this._getTargetShape(ue), me = !(o.Konva.isDragging() || o.Konva.isTransforming()) || o.Konva.hitOnDragEnabled;
      Ae && me ? (Ae._fireAndBubble(W.pointerout, { evt: L }), Ae._fireAndBubble(W.pointerleave, { evt: L }), this._fire(W.pointerleave, {
        evt: L,
        target: this,
        currentTarget: this
      }), this[ue + "targetShape"] = null) : me && (this._fire(W.pointerleave, {
        evt: L,
        target: this,
        currentTarget: this
      }), this._fire(W.pointerout, {
        evt: L,
        target: this,
        currentTarget: this
      })), this.pointerPos = null, this._pointerPositions = [];
    }
    _pointerdown(L) {
      const W = se(L.type), ue = b(L.type);
      if (!W)
        return;
      this.setPointersPositions(L);
      let Ae = !1;
      this._changedPointerPositions.forEach((me) => {
        const Ge = this.getIntersection(me);
        if (a.DD.justDragged = !1, o.Konva["_" + ue + "ListenClick"] = !0, !Ge || !Ge.isListening()) {
          this[ue + "ClickStartShape"] = void 0;
          return;
        }
        o.Konva.capturePointerEventsEnabled && Ge.setPointerCapture(me.id), this[ue + "ClickStartShape"] = Ge, Ge._fireAndBubble(W.pointerdown, {
          evt: L,
          pointerId: me.id
        }), Ae = !0;
        const Be = L.type.indexOf("touch") >= 0;
        Ge.preventDefault() && L.cancelable && Be && L.preventDefault();
      }), Ae || this._fire(W.pointerdown, {
        evt: L,
        target: this,
        currentTarget: this,
        pointerId: this._pointerPositions[0].id
      });
    }
    _pointermove(L) {
      const W = se(L.type), ue = b(L.type);
      if (!W || (o.Konva.isDragging() && a.DD.node.preventDefault() && L.cancelable && L.preventDefault(), this.setPointersPositions(L), !(!(o.Konva.isDragging() || o.Konva.isTransforming()) || o.Konva.hitOnDragEnabled)))
        return;
      const me = {};
      let Ge = !1;
      const Be = this._getTargetShape(ue);
      this._changedPointerPositions.forEach((Kt) => {
        const Ie = d.getCapturedShape(Kt.id) || this.getIntersection(Kt), kt = Kt.id, Jt = { evt: L, pointerId: kt }, ot = Be !== Ie;
        if (ot && Be && (Be._fireAndBubble(W.pointerout, { ...Jt }, Ie), Be._fireAndBubble(W.pointerleave, { ...Jt }, Ie)), Ie) {
          if (me[Ie._id])
            return;
          me[Ie._id] = !0;
        }
        Ie && Ie.isListening() ? (Ge = !0, ot && (Ie._fireAndBubble(W.pointerover, { ...Jt }, Be), Ie._fireAndBubble(W.pointerenter, { ...Jt }, Be), this[ue + "targetShape"] = Ie), Ie._fireAndBubble(W.pointermove, { ...Jt })) : Be && (this._fire(W.pointerover, {
          evt: L,
          target: this,
          currentTarget: this,
          pointerId: kt
        }), this[ue + "targetShape"] = null);
      }), Ge || this._fire(W.pointermove, {
        evt: L,
        target: this,
        currentTarget: this,
        pointerId: this._changedPointerPositions[0].id
      });
    }
    _pointerup(L) {
      const W = se(L.type), ue = b(L.type);
      if (!W)
        return;
      this.setPointersPositions(L);
      const Ae = this[ue + "ClickStartShape"], me = this[ue + "ClickEndShape"], Ge = {};
      let Be = !1;
      this._changedPointerPositions.forEach((Kt) => {
        const Ie = d.getCapturedShape(Kt.id) || this.getIntersection(Kt);
        if (Ie) {
          if (Ie.releaseCapture(Kt.id), Ge[Ie._id])
            return;
          Ge[Ie._id] = !0;
        }
        const kt = Kt.id, Jt = { evt: L, pointerId: kt };
        let ot = !1;
        o.Konva["_" + ue + "InDblClickWindow"] ? (ot = !0, clearTimeout(this[ue + "DblTimeout"])) : a.DD.justDragged || (o.Konva["_" + ue + "InDblClickWindow"] = !0, clearTimeout(this[ue + "DblTimeout"])), this[ue + "DblTimeout"] = setTimeout(function() {
          o.Konva["_" + ue + "InDblClickWindow"] = !1;
        }, o.Konva.dblClickWindow), Ie && Ie.isListening() ? (Be = !0, this[ue + "ClickEndShape"] = Ie, Ie._fireAndBubble(W.pointerup, { ...Jt }), o.Konva["_" + ue + "ListenClick"] && Ae && Ae === Ie && (Ie._fireAndBubble(W.pointerclick, { ...Jt }), ot && me && me === Ie && Ie._fireAndBubble(W.pointerdblclick, { ...Jt }))) : (this[ue + "ClickEndShape"] = null, o.Konva["_" + ue + "ListenClick"] && this._fire(W.pointerclick, {
          evt: L,
          target: this,
          currentTarget: this,
          pointerId: kt
        }), ot && this._fire(W.pointerdblclick, {
          evt: L,
          target: this,
          currentTarget: this,
          pointerId: kt
        }));
      }), Be || this._fire(W.pointerup, {
        evt: L,
        target: this,
        currentTarget: this,
        pointerId: this._changedPointerPositions[0].id
      }), o.Konva["_" + ue + "ListenClick"] = !1, L.cancelable && ue !== "touch" && ue !== "pointer" && L.preventDefault();
    }
    _contextmenu(L) {
      this.setPointersPositions(L);
      const W = this.getIntersection(this.getPointerPosition());
      W && W.isListening() ? W._fireAndBubble(j, { evt: L }) : this._fire(j, {
        evt: L,
        target: this,
        currentTarget: this
      });
    }
    _wheel(L) {
      this.setPointersPositions(L);
      const W = this.getIntersection(this.getPointerPosition());
      W && W.isListening() ? W._fireAndBubble(de, { evt: L }) : this._fire(de, {
        evt: L,
        target: this,
        currentTarget: this
      });
    }
    _pointercancel(L) {
      this.setPointersPositions(L);
      const W = d.getCapturedShape(L.pointerId) || this.getIntersection(this.getPointerPosition());
      W && W._fireAndBubble(N, d.createEvent(L)), d.releaseCapture(L.pointerId);
    }
    _lostpointercapture(L) {
      d.releaseCapture(L.pointerId);
    }
    setPointersPositions(L) {
      const W = this._getContentPosition();
      let ue = null, Ae = null;
      L = L || window.event, L.touches !== void 0 ? (this._pointerPositions = [], this._changedPointerPositions = [], Array.prototype.forEach.call(L.touches, (me) => {
        this._pointerPositions.push({
          id: me.identifier,
          x: (me.clientX - W.left) / W.scaleX,
          y: (me.clientY - W.top) / W.scaleY
        });
      }), Array.prototype.forEach.call(L.changedTouches || L.touches, (me) => {
        this._changedPointerPositions.push({
          id: me.identifier,
          x: (me.clientX - W.left) / W.scaleX,
          y: (me.clientY - W.top) / W.scaleY
        });
      })) : (ue = (L.clientX - W.left) / W.scaleX, Ae = (L.clientY - W.top) / W.scaleY, this.pointerPos = {
        x: ue,
        y: Ae
      }, this._pointerPositions = [{ x: ue, y: Ae, id: e.Util._getFirstPointerId(L) }], this._changedPointerPositions = [
        { x: ue, y: Ae, id: e.Util._getFirstPointerId(L) }
      ]);
    }
    _setPointerPosition(L) {
      e.Util.warn('Method _setPointerPosition is deprecated. Use "stage.setPointersPositions(event)" instead.'), this.setPointersPositions(L);
    }
    _getContentPosition() {
      if (!this.content || !this.content.getBoundingClientRect)
        return {
          top: 0,
          left: 0,
          scaleX: 1,
          scaleY: 1
        };
      const L = this.content.getBoundingClientRect();
      return {
        top: L.top,
        left: L.left,
        scaleX: L.width / this.content.clientWidth || 1,
        scaleY: L.height / this.content.clientHeight || 1
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
      const L = this.container();
      if (!L)
        throw "Stage has no container. A container is required.";
      L.innerHTML = "", this.content = document.createElement("div"), this.content.style.position = "relative", this.content.style.userSelect = "none", this.content.className = "konvajs-content", this.content.setAttribute("role", "presentation"), L.appendChild(this.content), this._resizeDOM();
    }
    cache() {
      return e.Util.warn("Cache function is not allowed for stage. You may use cache only for layers, groups and shapes."), this;
    }
    clearCache() {
      return this;
    }
    batchDraw() {
      return this.getChildren().forEach(function(L) {
        L.batchDraw();
      }), this;
    }
  }
  t.Stage = mt, mt.prototype.nodeType = g, (0, c._registerNode)(mt), n.Factory.addGetterSetter(mt, "container"), o.Konva.isBrowser && document.addEventListener("visibilitychange", () => {
    t.stages.forEach((ze) => {
      ze.batchDraw();
    });
  });
})(D3);
var Bl = {}, xt = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.Shape = t.shapes = void 0;
  const e = Se, n = st, r = xe, o = Je, l = fe, a = Se, c = Si, d = "hasShadow", g = "shadowRGBA", y = "patternImage", w = "linearGradient", _ = "radialGradient";
  let C;
  function v() {
    return C || (C = n.Util.createCanvasElement().getContext("2d"), C);
  }
  t.shapes = {};
  function E(G) {
    const F = this.attrs.fillRule;
    F ? G.fill(F) : G.fill();
  }
  function R(G) {
    G.stroke();
  }
  function k(G) {
    const F = this.attrs.fillRule;
    F ? G.fill(F) : G.fill();
  }
  function x(G) {
    G.stroke();
  }
  function p() {
    this._clearCache(d);
  }
  function S() {
    this._clearCache(g);
  }
  function N() {
    this._clearCache(y);
  }
  function M() {
    this._clearCache(w);
  }
  function A() {
    this._clearCache(_);
  }
  class T extends o.Node {
    constructor(F) {
      super(F);
      let V;
      for (; V = n.Util.getRandomColor(), !(V && !(V in t.shapes)); )
        ;
      this.colorKey = V, t.shapes[V] = this;
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
        const V = v().createPattern(this.fillPatternImage(), this.fillPatternRepeat() || "repeat");
        if (V && V.setTransform) {
          const j = new n.Transform();
          j.translate(this.fillPatternX(), this.fillPatternY()), j.rotate(e.Konva.getAngle(this.fillPatternRotation())), j.scale(this.fillPatternScaleX(), this.fillPatternScaleY()), j.translate(-1 * this.fillPatternOffsetX(), -1 * this.fillPatternOffsetY());
          const q = j.getMatrix(), D = typeof DOMMatrix > "u" ? {
            a: q[0],
            b: q[1],
            c: q[2],
            d: q[3],
            e: q[4],
            f: q[5]
          } : new DOMMatrix(q);
          V.setTransform(D);
        }
        return V;
      }
    }
    _getLinearGradient() {
      return this._getCache(w, this.__getLinearGradient);
    }
    __getLinearGradient() {
      const F = this.fillLinearGradientColorStops();
      if (F) {
        const V = v(), j = this.fillLinearGradientStartPoint(), q = this.fillLinearGradientEndPoint(), D = V.createLinearGradient(j.x, j.y, q.x, q.y);
        for (let X = 0; X < F.length; X += 2)
          D.addColorStop(F[X], F[X + 1]);
        return D;
      }
    }
    _getRadialGradient() {
      return this._getCache(_, this.__getRadialGradient);
    }
    __getRadialGradient() {
      const F = this.fillRadialGradientColorStops();
      if (F) {
        const V = v(), j = this.fillRadialGradientStartPoint(), q = this.fillRadialGradientEndPoint(), D = V.createRadialGradient(j.x, j.y, this.fillRadialGradientStartRadius(), q.x, q.y, this.fillRadialGradientEndRadius());
        for (let X = 0; X < F.length; X += 2)
          D.addColorStop(F[X], F[X + 1]);
        return D;
      }
    }
    getShadowRGBA() {
      return this._getCache(g, this._getShadowRGBA);
    }
    _getShadowRGBA() {
      if (!this.hasShadow())
        return;
      const F = n.Util.colorToRGBA(this.shadowColor());
      if (F)
        return "rgba(" + F.r + "," + F.g + "," + F.b + "," + F.a * (this.shadowOpacity() || 1) + ")";
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
      const F = this.hitStrokeWidth();
      return F === "auto" ? this.hasStroke() : this.strokeEnabled() && !!F;
    }
    intersects(F) {
      const V = this.getStage();
      if (!V)
        return !1;
      const j = V.bufferHitCanvas;
      return j.getContext().clear(), this.drawHit(j, void 0, !0), j.context.getImageData(Math.round(F.x), Math.round(F.y), 1, 1).data[3] > 0;
    }
    destroy() {
      return o.Node.prototype.destroy.call(this), delete t.shapes[this.colorKey], delete this.colorKey, this;
    }
    _useBufferCanvas(F) {
      var V;
      if (!((V = this.attrs.perfectDrawEnabled) !== null && V !== void 0 ? V : !0))
        return !1;
      const q = F || this.hasFill(), D = this.hasStroke(), X = this.getAbsoluteOpacity() !== 1;
      if (q && D && X)
        return !0;
      const he = this.hasShadow(), de = this.shadowForStrokeEnabled();
      return !!(q && D && he && de);
    }
    setStrokeHitEnabled(F) {
      n.Util.warn("strokeHitEnabled property is deprecated. Please use hitStrokeWidth instead."), F ? this.hitStrokeWidth("auto") : this.hitStrokeWidth(0);
    }
    getStrokeHitEnabled() {
      return this.hitStrokeWidth() !== 0;
    }
    getSelfRect() {
      const F = this.size();
      return {
        x: this._centroid ? -F.width / 2 : 0,
        y: this._centroid ? -F.height / 2 : 0,
        width: F.width,
        height: F.height
      };
    }
    getClientRect(F = {}) {
      let V = !1, j = this.getParent();
      for (; j; ) {
        if (j.isCached()) {
          V = !0;
          break;
        }
        j = j.getParent();
      }
      const q = F.skipTransform, D = F.relativeTo || V && this.getStage() || void 0, X = this.getSelfRect(), de = !F.skipStroke && this.hasStroke() && this.strokeWidth() || 0, H = X.width + de, Z = X.height + de, Q = !F.skipShadow && this.hasShadow(), b = Q ? this.shadowOffsetX() : 0, se = Q ? this.shadowOffsetY() : 0, Ne = H + Math.abs(b), je = Z + Math.abs(se), mt = Q && this.shadowBlur() || 0, ze = Ne + mt * 2, L = je + mt * 2, W = {
        width: ze,
        height: L,
        x: -(de / 2 + mt) + Math.min(b, 0) + X.x,
        y: -(de / 2 + mt) + Math.min(se, 0) + X.y
      };
      return q ? W : this._transformedRect(W, D);
    }
    drawScene(F, V, j) {
      const q = this.getLayer(), D = F || q.getCanvas(), X = D.getContext(), he = this._getCanvasCache(), de = this.getSceneFunc(), H = this.hasShadow();
      let Z;
      const Q = V === this;
      if (!this.isVisible() && !Q)
        return this;
      if (he) {
        X.save();
        const b = this.getAbsoluteTransform(V).getMatrix();
        return X.transform(b[0], b[1], b[2], b[3], b[4], b[5]), this._drawCachedSceneCanvas(X), X.restore(), this;
      }
      if (!de)
        return this;
      if (X.save(), this._useBufferCanvas()) {
        Z = this.getStage();
        const b = j || Z.bufferCanvas, se = b.getContext();
        se.clear(), se.save(), se._applyLineJoin(this);
        const Ne = this.getAbsoluteTransform(V).getMatrix();
        se.transform(Ne[0], Ne[1], Ne[2], Ne[3], Ne[4], Ne[5]), de.call(this, se, this), se.restore();
        const je = b.pixelRatio;
        H && X._applyShadow(this), X._applyOpacity(this), X._applyGlobalCompositeOperation(this), X.drawImage(b._canvas, b.x || 0, b.y || 0, b.width / je, b.height / je);
      } else {
        if (X._applyLineJoin(this), !Q) {
          const b = this.getAbsoluteTransform(V).getMatrix();
          X.transform(b[0], b[1], b[2], b[3], b[4], b[5]), X._applyOpacity(this), X._applyGlobalCompositeOperation(this);
        }
        H && X._applyShadow(this), de.call(this, X, this);
      }
      return X.restore(), this;
    }
    drawHit(F, V, j = !1) {
      if (!this.shouldDrawHit(V, j))
        return this;
      const q = this.getLayer(), D = F || q.hitCanvas, X = D && D.getContext(), he = this.hitFunc() || this.sceneFunc(), de = this._getCanvasCache(), H = de && de.hit;
      if (this.colorKey || n.Util.warn("Looks like your canvas has a destroyed shape in it. Do not reuse shape after you destroyed it. If you want to reuse shape you should call remove() instead of destroy()"), H) {
        X.save();
        const Q = this.getAbsoluteTransform(V).getMatrix();
        return X.transform(Q[0], Q[1], Q[2], Q[3], Q[4], Q[5]), this._drawCachedHitCanvas(X), X.restore(), this;
      }
      if (!he)
        return this;
      if (X.save(), X._applyLineJoin(this), !(this === V)) {
        const Q = this.getAbsoluteTransform(V).getMatrix();
        X.transform(Q[0], Q[1], Q[2], Q[3], Q[4], Q[5]);
      }
      return he.call(this, X, this), X.restore(), this;
    }
    drawHitFromCache(F = 0) {
      const V = this._getCanvasCache(), j = this._getCachedSceneCanvas(), q = V.hit, D = q.getContext(), X = q.getWidth(), he = q.getHeight();
      D.clear(), D.drawImage(j._canvas, 0, 0, X, he);
      try {
        const de = D.getImageData(0, 0, X, he), H = de.data, Z = H.length, Q = n.Util._hexToRgb(this.colorKey);
        for (let b = 0; b < Z; b += 4)
          H[b + 3] > F ? (H[b] = Q.r, H[b + 1] = Q.g, H[b + 2] = Q.b, H[b + 3] = 255) : H[b + 3] = 0;
        D.putImageData(de, 0, 0);
      } catch (de) {
        n.Util.error("Unable to draw hit graph from cached scene canvas. " + de.message);
      }
      return this;
    }
    hasPointerCapture(F) {
      return c.hasPointerCapture(F, this);
    }
    setPointerCapture(F) {
      c.setPointerCapture(F, this);
    }
    releaseCapture(F) {
      c.releaseCapture(F, this);
    }
  }
  t.Shape = T, T.prototype._fillFunc = E, T.prototype._strokeFunc = R, T.prototype._fillFuncHit = k, T.prototype._strokeFuncHit = x, T.prototype._centroid = !1, T.prototype.nodeType = "Shape", (0, a._registerNode)(T), T.prototype.eventListeners = {}, T.prototype.on.call(T.prototype, "shadowColorChange.konva shadowBlurChange.konva shadowOffsetChange.konva shadowOpacityChange.konva shadowEnabledChange.konva", p), T.prototype.on.call(T.prototype, "shadowColorChange.konva shadowOpacityChange.konva shadowEnabledChange.konva", S), T.prototype.on.call(T.prototype, "fillPriorityChange.konva fillPatternImageChange.konva fillPatternRepeatChange.konva fillPatternScaleXChange.konva fillPatternScaleYChange.konva fillPatternOffsetXChange.konva fillPatternOffsetYChange.konva fillPatternXChange.konva fillPatternYChange.konva fillPatternRotationChange.konva", N), T.prototype.on.call(T.prototype, "fillPriorityChange.konva fillLinearGradientColorStopsChange.konva fillLinearGradientStartPointXChange.konva fillLinearGradientStartPointYChange.konva fillLinearGradientEndPointXChange.konva fillLinearGradientEndPointYChange.konva", M), T.prototype.on.call(T.prototype, "fillPriorityChange.konva fillRadialGradientColorStopsChange.konva fillRadialGradientStartPointXChange.konva fillRadialGradientStartPointYChange.konva fillRadialGradientEndPointXChange.konva fillRadialGradientEndPointYChange.konva fillRadialGradientStartRadiusChange.konva fillRadialGradientEndRadiusChange.konva", A), r.Factory.addGetterSetter(T, "stroke", void 0, (0, l.getStringOrGradientValidator)()), r.Factory.addGetterSetter(T, "strokeWidth", 2, (0, l.getNumberValidator)()), r.Factory.addGetterSetter(T, "fillAfterStrokeEnabled", !1), r.Factory.addGetterSetter(T, "hitStrokeWidth", "auto", (0, l.getNumberOrAutoValidator)()), r.Factory.addGetterSetter(T, "strokeHitEnabled", !0, (0, l.getBooleanValidator)()), r.Factory.addGetterSetter(T, "perfectDrawEnabled", !0, (0, l.getBooleanValidator)()), r.Factory.addGetterSetter(T, "shadowForStrokeEnabled", !0, (0, l.getBooleanValidator)()), r.Factory.addGetterSetter(T, "lineJoin"), r.Factory.addGetterSetter(T, "lineCap"), r.Factory.addGetterSetter(T, "sceneFunc"), r.Factory.addGetterSetter(T, "hitFunc"), r.Factory.addGetterSetter(T, "dash"), r.Factory.addGetterSetter(T, "dashOffset", 0, (0, l.getNumberValidator)()), r.Factory.addGetterSetter(T, "shadowColor", void 0, (0, l.getStringValidator)()), r.Factory.addGetterSetter(T, "shadowBlur", 0, (0, l.getNumberValidator)()), r.Factory.addGetterSetter(T, "shadowOpacity", 1, (0, l.getNumberValidator)()), r.Factory.addComponentsGetterSetter(T, "shadowOffset", ["x", "y"]), r.Factory.addGetterSetter(T, "shadowOffsetX", 0, (0, l.getNumberValidator)()), r.Factory.addGetterSetter(T, "shadowOffsetY", 0, (0, l.getNumberValidator)()), r.Factory.addGetterSetter(T, "fillPatternImage"), r.Factory.addGetterSetter(T, "fill", void 0, (0, l.getStringOrGradientValidator)()), r.Factory.addGetterSetter(T, "fillPatternX", 0, (0, l.getNumberValidator)()), r.Factory.addGetterSetter(T, "fillPatternY", 0, (0, l.getNumberValidator)()), r.Factory.addGetterSetter(T, "fillLinearGradientColorStops"), r.Factory.addGetterSetter(T, "strokeLinearGradientColorStops"), r.Factory.addGetterSetter(T, "fillRadialGradientStartRadius", 0), r.Factory.addGetterSetter(T, "fillRadialGradientEndRadius", 0), r.Factory.addGetterSetter(T, "fillRadialGradientColorStops"), r.Factory.addGetterSetter(T, "fillPatternRepeat", "repeat"), r.Factory.addGetterSetter(T, "fillEnabled", !0), r.Factory.addGetterSetter(T, "strokeEnabled", !0), r.Factory.addGetterSetter(T, "shadowEnabled", !0), r.Factory.addGetterSetter(T, "dashEnabled", !0), r.Factory.addGetterSetter(T, "strokeScaleEnabled", !0), r.Factory.addGetterSetter(T, "fillPriority", "color"), r.Factory.addComponentsGetterSetter(T, "fillPatternOffset", ["x", "y"]), r.Factory.addGetterSetter(T, "fillPatternOffsetX", 0, (0, l.getNumberValidator)()), r.Factory.addGetterSetter(T, "fillPatternOffsetY", 0, (0, l.getNumberValidator)()), r.Factory.addComponentsGetterSetter(T, "fillPatternScale", ["x", "y"]), r.Factory.addGetterSetter(T, "fillPatternScaleX", 1, (0, l.getNumberValidator)()), r.Factory.addGetterSetter(T, "fillPatternScaleY", 1, (0, l.getNumberValidator)()), r.Factory.addComponentsGetterSetter(T, "fillLinearGradientStartPoint", [
    "x",
    "y"
  ]), r.Factory.addComponentsGetterSetter(T, "strokeLinearGradientStartPoint", [
    "x",
    "y"
  ]), r.Factory.addGetterSetter(T, "fillLinearGradientStartPointX", 0), r.Factory.addGetterSetter(T, "strokeLinearGradientStartPointX", 0), r.Factory.addGetterSetter(T, "fillLinearGradientStartPointY", 0), r.Factory.addGetterSetter(T, "strokeLinearGradientStartPointY", 0), r.Factory.addComponentsGetterSetter(T, "fillLinearGradientEndPoint", [
    "x",
    "y"
  ]), r.Factory.addComponentsGetterSetter(T, "strokeLinearGradientEndPoint", [
    "x",
    "y"
  ]), r.Factory.addGetterSetter(T, "fillLinearGradientEndPointX", 0), r.Factory.addGetterSetter(T, "strokeLinearGradientEndPointX", 0), r.Factory.addGetterSetter(T, "fillLinearGradientEndPointY", 0), r.Factory.addGetterSetter(T, "strokeLinearGradientEndPointY", 0), r.Factory.addComponentsGetterSetter(T, "fillRadialGradientStartPoint", [
    "x",
    "y"
  ]), r.Factory.addGetterSetter(T, "fillRadialGradientStartPointX", 0), r.Factory.addGetterSetter(T, "fillRadialGradientStartPointY", 0), r.Factory.addComponentsGetterSetter(T, "fillRadialGradientEndPoint", [
    "x",
    "y"
  ]), r.Factory.addGetterSetter(T, "fillRadialGradientEndPointX", 0), r.Factory.addGetterSetter(T, "fillRadialGradientEndPointY", 0), r.Factory.addGetterSetter(T, "fillPatternRotation", 0), r.Factory.addGetterSetter(T, "fillRule", void 0, (0, l.getStringValidator)()), r.Factory.backCompat(T, {
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
})(xt);
Object.defineProperty(Bl, "__esModule", { value: !0 });
Bl.Layer = void 0;
const Cr = st, ch = ss, Fs = Je, _1 = xe, L2 = qn, q8 = fe, Z8 = xt, J8 = Se, e9 = "#", t9 = "beforeDraw", n9 = "draw", U3 = [
  { x: 0, y: 0 },
  { x: -1, y: -1 },
  { x: 1, y: -1 },
  { x: 1, y: 1 },
  { x: -1, y: 1 }
], r9 = U3.length;
let ho = class extends ch.Container {
  constructor(e) {
    super(e), this.canvas = new L2.SceneCanvas(), this.hitCanvas = new L2.HitCanvas({
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
    Fs.Node.prototype.moveToTop.call(this);
    const e = this.getStage();
    return e && e.content && (e.content.removeChild(this.getNativeCanvasElement()), e.content.appendChild(this.getNativeCanvasElement())), !0;
  }
  moveUp() {
    if (!Fs.Node.prototype.moveUp.call(this))
      return !1;
    const n = this.getStage();
    return !n || !n.content ? !1 : (n.content.removeChild(this.getNativeCanvasElement()), this.index < n.children.length - 1 ? n.content.insertBefore(this.getNativeCanvasElement(), n.children[this.index + 1].getCanvas()._canvas) : n.content.appendChild(this.getNativeCanvasElement()), !0);
  }
  moveDown() {
    if (Fs.Node.prototype.moveDown.call(this)) {
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
    if (Fs.Node.prototype.moveToBottom.call(this)) {
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
    return Fs.Node.prototype.remove.call(this), e && e.parentNode && Cr.Util._isInDocument(e) && e.parentNode.removeChild(e), this;
  }
  getStage() {
    return this.parent;
  }
  setSize({ width: e, height: n }) {
    return this.canvas.setSize(e, n), this.hitCanvas.setSize(e, n), this._setSmoothEnabled(), this;
  }
  _validateAdd(e) {
    const n = e.getType();
    n !== "Group" && n !== "Shape" && Cr.Util.throw("You may only add groups and shapes to a layer.");
  }
  _toKonvaCanvas(e) {
    return e = e || {}, e.width = e.width || this.getWidth(), e.height = e.height || this.getHeight(), e.x = e.x !== void 0 ? e.x : this.x(), e.y = e.y !== void 0 ? e.y : this.y(), Fs.Node.prototype._toKonvaCanvas.call(this, e);
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
    Cr.Util.warn('Can not change width of layer. Use "stage.width(value)" function instead.');
  }
  getHeight() {
    if (this.parent)
      return this.parent.height();
  }
  setHeight() {
    Cr.Util.warn('Can not change height of layer. Use "stage.height(value)" function instead.');
  }
  batchDraw() {
    return this._waitingForDraw || (this._waitingForDraw = !0, Cr.Util.requestAnimFrame(() => {
      this.draw(), this._waitingForDraw = !1;
    })), this;
  }
  getIntersection(e) {
    if (!this.isListening() || !this.isVisible())
      return null;
    let n = 1, r = !1;
    for (; ; ) {
      for (let o = 0; o < r9; o++) {
        const l = U3[o], a = this._getIntersection({
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
      const l = Cr.Util._rgbToHex(r[0], r[1], r[2]), a = Z8.shapes[e9 + l];
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
    return this._fire(t9, {
      node: this
    }), this.clearBeforeDraw() && l.getContext().clear(), ch.Container.prototype.drawScene.call(this, l, n, r), this._fire(n9, {
      node: this
    }), this;
  }
  drawHit(e, n) {
    const r = this.getLayer(), o = e || r && r.hitCanvas;
    return r && r.clearBeforeDraw() && r.getHitCanvas().getContext().clear(), ch.Container.prototype.drawHit.call(this, o, n), this;
  }
  enableHitGraph() {
    return this.hitGraphEnabled(!0), this;
  }
  disableHitGraph() {
    return this.hitGraphEnabled(!1), this;
  }
  setHitGraphEnabled(e) {
    Cr.Util.warn("hitGraphEnabled method is deprecated. Please use layer.listening() instead."), this.listening(e);
  }
  getHitGraphEnabled(e) {
    return Cr.Util.warn("hitGraphEnabled method is deprecated. Please use layer.listening() instead."), this.listening();
  }
  toggleHitCanvas() {
    if (!this.parent || !this.parent.content)
      return;
    const e = this.parent;
    !!this.hitCanvas._canvas.parentNode ? e.content.removeChild(this.hitCanvas._canvas) : e.content.appendChild(this.hitCanvas._canvas);
  }
  destroy() {
    return Cr.Util.releaseCanvas(this.getNativeCanvasElement(), this.getHitCanvas()._canvas), super.destroy();
  }
};
Bl.Layer = ho;
ho.prototype.nodeType = "Layer";
(0, J8._registerNode)(ho);
_1.Factory.addGetterSetter(ho, "imageSmoothingEnabled", !0);
_1.Factory.addGetterSetter(ho, "clearBeforeDraw", !0);
_1.Factory.addGetterSetter(ho, "hitGraphEnabled", !0, (0, q8.getBooleanValidator)());
var Nc = {};
Object.defineProperty(Nc, "__esModule", { value: !0 });
Nc.FastLayer = void 0;
const i9 = st, s9 = Bl, o9 = Se;
class S1 extends s9.Layer {
  constructor(e) {
    super(e), this.listening(!1), i9.Util.warn('Konva.Fast layer is deprecated. Please use "new Konva.Layer({ listening: false })" instead.');
  }
}
Nc.FastLayer = S1;
S1.prototype.nodeType = "FastLayer";
(0, o9._registerNode)(S1);
var po = {};
Object.defineProperty(po, "__esModule", { value: !0 });
po.Group = void 0;
const l9 = st, a9 = ss, u9 = Se;
let w1 = class extends a9.Container {
  _validateAdd(e) {
    const n = e.getType();
    n !== "Group" && n !== "Shape" && l9.Util.throw("You may only add groups and shapes to groups.");
  }
};
po.Group = w1;
w1.prototype.nodeType = "Group";
(0, u9._registerNode)(w1);
var go = {};
Object.defineProperty(go, "__esModule", { value: !0 });
go.Animation = void 0;
const dh = Se, A2 = st, fh = function() {
  return dh.glob.performance && dh.glob.performance.now ? function() {
    return dh.glob.performance.now();
  } : function() {
    return (/* @__PURE__ */ new Date()).getTime();
  };
}();
class dr {
  constructor(e, n) {
    this.id = dr.animIdCounter++, this.frame = {
      time: 0,
      timeDiff: 0,
      lastTime: fh(),
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
    const n = dr.animations, r = n.length;
    for (let o = 0; o < r; o++)
      if (n[o].id === this.id)
        return !0;
    return !1;
  }
  start() {
    return this.stop(), this.frame.timeDiff = 0, this.frame.lastTime = fh(), dr._addAnimation(this), this;
  }
  stop() {
    return dr._removeAnimation(this), this;
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
      o._updateFrameObject(fh());
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
    const e = dr;
    e.animations.length ? (e._runFrames(), A2.Util.requestAnimFrame(e._animationLoop)) : e.animRunning = !1;
  }
  static _handleAnimation() {
    this.animRunning || (this.animRunning = !0, A2.Util.requestAnimFrame(this._animationLoop));
  }
}
go.Animation = dr;
dr.animations = [];
dr.animIdCounter = 0;
dr.animRunning = !1;
var B3 = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.Easings = t.Tween = void 0;
  const e = st, n = go, r = Je, o = Se, l = {
    node: 1,
    duration: 1,
    easing: 1,
    onFinish: 1,
    yoyo: 1
  }, a = 1, c = 2, d = 3, g = ["fill", "stroke", "shadowColor"];
  let y = 0;
  class w {
    constructor(v, E, R, k, x, p, S) {
      this.prop = v, this.propFunc = E, this.begin = k, this._pos = k, this.duration = p, this._change = 0, this.prevPos = 0, this.yoyo = S, this._time = 0, this._position = 0, this._startTime = 0, this._finish = 0, this.func = R, this._change = x - this.begin, this.pause();
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
  class _ {
    constructor(v) {
      const E = this, R = v.node, k = R._id, x = v.easing || t.Easings.Linear, p = !!v.yoyo;
      let S, N;
      typeof v.duration > "u" ? S = 0.3 : v.duration === 0 ? S = 1e-3 : S = v.duration, this.node = R, this._id = y++;
      const M = R.getLayer() || (R instanceof o.Konva.Stage ? R.getLayers() : null);
      M || e.Util.error("Tween constructor have `node` that is not in a layer. Please add node into layer first."), this.anim = new n.Animation(function() {
        E.tween.onEnterFrame();
      }, M), this.tween = new w(N, function(A) {
        E._tweenFunc(A);
      }, x, 0, 1, S * 1e3, p), this._addListeners(), _.attrs[k] || (_.attrs[k] = {}), _.attrs[k][this._id] || (_.attrs[k][this._id] = {}), _.tweens[k] || (_.tweens[k] = {});
      for (N in v)
        l[N] === void 0 && this._addAttr(N, v[N]);
      this.reset(), this.onFinish = v.onFinish, this.onReset = v.onReset, this.onUpdate = v.onUpdate;
    }
    _addAttr(v, E) {
      const R = this.node, k = R._id;
      let x, p, S, N, M;
      const A = _.tweens[k][v];
      A && delete _.attrs[k][A][v];
      let T = R.getAttr(v);
      if (e.Util._isArray(E))
        if (x = [], p = Math.max(E.length, T.length), v === "points" && E.length !== T.length && (E.length > T.length ? (N = T, T = e.Util._prepareArrayForTween(T, E, R.closed())) : (S = E, E = e.Util._prepareArrayForTween(E, T, R.closed()))), v.indexOf("fill") === 0)
          for (let G = 0; G < p; G++)
            if (G % 2 === 0)
              x.push(E[G] - T[G]);
            else {
              const F = e.Util.colorToRGBA(T[G]);
              M = e.Util.colorToRGBA(E[G]), T[G] = F, x.push({
                r: M.r - F.r,
                g: M.g - F.g,
                b: M.b - F.b,
                a: M.a - F.a
              });
            }
        else
          for (let G = 0; G < p; G++)
            x.push(E[G] - T[G]);
      else g.indexOf(v) !== -1 ? (T = e.Util.colorToRGBA(T), M = e.Util.colorToRGBA(E), x = {
        r: M.r - T.r,
        g: M.g - T.g,
        b: M.b - T.b,
        a: M.a - T.a
      }) : x = E - T;
      _.attrs[k][this._id][v] = {
        start: T,
        diff: x,
        end: E,
        trueEnd: S,
        trueStart: N
      }, _.tweens[k][v] = this._id;
    }
    _tweenFunc(v) {
      const E = this.node, R = _.attrs[E._id][this._id];
      let k, x, p, S, N, M, A, T;
      for (k in R) {
        if (x = R[k], p = x.start, S = x.diff, T = x.end, e.Util._isArray(p))
          if (N = [], A = Math.max(p.length, T.length), k.indexOf("fill") === 0)
            for (M = 0; M < A; M++)
              M % 2 === 0 ? N.push((p[M] || 0) + S[M] * v) : N.push("rgba(" + Math.round(p[M].r + S[M].r * v) + "," + Math.round(p[M].g + S[M].g * v) + "," + Math.round(p[M].b + S[M].b * v) + "," + (p[M].a + S[M].a * v) + ")");
          else
            for (M = 0; M < A; M++)
              N.push((p[M] || 0) + S[M] * v);
        else g.indexOf(k) !== -1 ? N = "rgba(" + Math.round(p.r + S.r * v) + "," + Math.round(p.g + S.g * v) + "," + Math.round(p.b + S.b * v) + "," + (p.a + S.a * v) + ")" : N = p + S * v;
        E.setAttr(k, N);
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
        const v = this.node, E = _.attrs[v._id][this._id];
        E.points && E.points.trueEnd && v.setAttr("points", E.points.trueEnd), this.onFinish && this.onFinish.call(this);
      }, this.tween.onReset = () => {
        const v = this.node, E = _.attrs[v._id][this._id];
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
      const v = this.node._id, E = this._id, R = _.tweens[v];
      this.pause(), this.anim && this.anim.stop();
      for (const k in R)
        delete _.tweens[v][k];
      delete _.attrs[v][E], _.tweens[v] && (Object.keys(_.tweens[v]).length === 0 && delete _.tweens[v], Object.keys(_.attrs[v]).length === 0 && delete _.attrs[v]);
    }
  }
  t.Tween = _, _.attrs = {}, _.tweens = {}, r.Node.prototype.to = function(C) {
    const v = C.onFinish;
    C.node = this, C.onFinish = function() {
      this.destroy(), v && v();
    }, new _(C).play();
  }, t.Easings = {
    BackEaseIn(C, v, E, R) {
      return E * (C /= R) * C * ((1.70158 + 1) * C - 1.70158) + v;
    },
    BackEaseOut(C, v, E, R) {
      return E * ((C = C / R - 1) * C * ((1.70158 + 1) * C + 1.70158) + 1) + v;
    },
    BackEaseInOut(C, v, E, R) {
      let k = 1.70158;
      return (C /= R / 2) < 1 ? E / 2 * (C * C * (((k *= 1.525) + 1) * C - k)) + v : E / 2 * ((C -= 2) * C * (((k *= 1.525) + 1) * C + k) + 2) + v;
    },
    ElasticEaseIn(C, v, E, R, k, x) {
      let p = 0;
      return C === 0 ? v : (C /= R) === 1 ? v + E : (x || (x = R * 0.3), !k || k < Math.abs(E) ? (k = E, p = x / 4) : p = x / (2 * Math.PI) * Math.asin(E / k), -(k * Math.pow(2, 10 * (C -= 1)) * Math.sin((C * R - p) * (2 * Math.PI) / x)) + v);
    },
    ElasticEaseOut(C, v, E, R, k, x) {
      let p = 0;
      return C === 0 ? v : (C /= R) === 1 ? v + E : (x || (x = R * 0.3), !k || k < Math.abs(E) ? (k = E, p = x / 4) : p = x / (2 * Math.PI) * Math.asin(E / k), k * Math.pow(2, -10 * C) * Math.sin((C * R - p) * (2 * Math.PI) / x) + E + v);
    },
    ElasticEaseInOut(C, v, E, R, k, x) {
      let p = 0;
      return C === 0 ? v : (C /= R / 2) === 2 ? v + E : (x || (x = R * (0.3 * 1.5)), !k || k < Math.abs(E) ? (k = E, p = x / 4) : p = x / (2 * Math.PI) * Math.asin(E / k), C < 1 ? -0.5 * (k * Math.pow(2, 10 * (C -= 1)) * Math.sin((C * R - p) * (2 * Math.PI) / x)) + v : k * Math.pow(2, -10 * (C -= 1)) * Math.sin((C * R - p) * (2 * Math.PI) / x) * 0.5 + E + v);
    },
    BounceEaseOut(C, v, E, R) {
      return (C /= R) < 1 / 2.75 ? E * (7.5625 * C * C) + v : C < 2 / 2.75 ? E * (7.5625 * (C -= 1.5 / 2.75) * C + 0.75) + v : C < 2.5 / 2.75 ? E * (7.5625 * (C -= 2.25 / 2.75) * C + 0.9375) + v : E * (7.5625 * (C -= 2.625 / 2.75) * C + 0.984375) + v;
    },
    BounceEaseIn(C, v, E, R) {
      return E - t.Easings.BounceEaseOut(R - C, 0, E, R) + v;
    },
    BounceEaseInOut(C, v, E, R) {
      return C < R / 2 ? t.Easings.BounceEaseIn(C * 2, 0, E, R) * 0.5 + v : t.Easings.BounceEaseOut(C * 2 - R, 0, E, R) * 0.5 + E * 0.5 + v;
    },
    EaseIn(C, v, E, R) {
      return E * (C /= R) * C + v;
    },
    EaseOut(C, v, E, R) {
      return -E * (C /= R) * (C - 2) + v;
    },
    EaseInOut(C, v, E, R) {
      return (C /= R / 2) < 1 ? E / 2 * C * C + v : -E / 2 * (--C * (C - 2) - 1) + v;
    },
    StrongEaseIn(C, v, E, R) {
      return E * (C /= R) * C * C * C * C + v;
    },
    StrongEaseOut(C, v, E, R) {
      return E * ((C = C / R - 1) * C * C * C * C + 1) + v;
    },
    StrongEaseInOut(C, v, E, R) {
      return (C /= R / 2) < 1 ? E / 2 * C * C * C * C * C + v : E / 2 * ((C -= 2) * C * C * C * C + 2) + v;
    },
    Linear(C, v, E, R) {
      return E * C / R + v;
    }
  };
})(B3);
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.Konva = void 0;
  const e = Se, n = st, r = Je, o = ss, l = D3, a = Bl, c = Nc, d = po, g = Pc, y = xt, w = go, _ = B3, C = Mr, v = qn;
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
    Animation: w.Animation,
    Tween: _.Tween,
    Easings: _.Easings,
    Context: C.Context,
    Canvas: v.Canvas
  }), t.default = t.Konva;
})(nc);
var Rc = {};
Object.defineProperty(Rc, "__esModule", { value: !0 });
Rc.Arc = void 0;
const Mc = xe, c9 = xt, O2 = Se, Fc = fe, d9 = Se;
class Gr extends c9.Shape {
  _sceneFunc(e) {
    const n = O2.Konva.getAngle(this.angle()), r = this.clockwise();
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
    const e = this.innerRadius(), n = this.outerRadius(), r = this.clockwise(), o = O2.Konva.getAngle(r ? 360 - this.angle() : this.angle()), l = Math.cos(Math.min(o, Math.PI)), a = 1, c = Math.sin(Math.min(Math.max(Math.PI, o), 3 * Math.PI / 2)), d = Math.sin(Math.min(o, Math.PI / 2)), g = l * (l > 0 ? e : n), y = a * n, w = c * (c > 0 ? e : n), _ = d * (d > 0 ? n : e);
    return {
      x: g,
      y: r ? -1 * _ : w,
      width: y - g,
      height: _ - w
    };
  }
}
Rc.Arc = Gr;
Gr.prototype._centroid = !0;
Gr.prototype.className = "Arc";
Gr.prototype._attrsAffectingSize = [
  "innerRadius",
  "outerRadius",
  "angle",
  "clockwise"
];
(0, d9._registerNode)(Gr);
Mc.Factory.addGetterSetter(Gr, "innerRadius", 0, (0, Fc.getNumberValidator)());
Mc.Factory.addGetterSetter(Gr, "outerRadius", 0, (0, Fc.getNumberValidator)());
Mc.Factory.addGetterSetter(Gr, "angle", 0, (0, Fc.getNumberValidator)());
Mc.Factory.addGetterSetter(Gr, "clockwise", !1, (0, Fc.getBooleanValidator)());
var Lc = {}, Vl = {};
Object.defineProperty(Vl, "__esModule", { value: !0 });
Vl.Line = void 0;
const Ac = xe, f9 = Se, h9 = xt, V3 = fe;
function g0(t, e, n, r, o, l, a) {
  const c = Math.sqrt(Math.pow(n - t, 2) + Math.pow(r - e, 2)), d = Math.sqrt(Math.pow(o - n, 2) + Math.pow(l - r, 2)), g = a * c / (c + d), y = a * d / (c + d), w = n - g * (o - t), _ = r - g * (l - e), C = n + y * (o - t), v = r + y * (l - e);
  return [w, _, C, v];
}
function I2(t, e) {
  const n = t.length, r = [];
  for (let o = 2; o < n - 2; o += 2) {
    const l = g0(t[o - 2], t[o - 1], t[o], t[o + 1], t[o + 2], t[o + 3], e);
    isNaN(l[0]) || (r.push(l[0]), r.push(l[1]), r.push(t[o]), r.push(t[o + 1]), r.push(l[2]), r.push(l[3]));
  }
  return r;
}
let wi = class extends h9.Shape {
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
    return this.closed() ? this._getTensionPointsClosed() : I2(this.points(), this.tension());
  }
  _getTensionPointsClosed() {
    const e = this.points(), n = e.length, r = this.tension(), o = g0(e[n - 2], e[n - 1], e[0], e[1], e[2], e[3], r), l = g0(e[n - 4], e[n - 3], e[n - 2], e[n - 1], e[0], e[1], r), a = I2(e, r);
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
Vl.Line = wi;
wi.prototype.className = "Line";
wi.prototype._attrsAffectingSize = ["points", "bezier", "tension"];
(0, f9._registerNode)(wi);
Ac.Factory.addGetterSetter(wi, "closed", !1);
Ac.Factory.addGetterSetter(wi, "bezier", !1);
Ac.Factory.addGetterSetter(wi, "tension", 0, (0, V3.getNumberValidator)());
Ac.Factory.addGetterSetter(wi, "points", [], (0, V3.getNumberArrayValidator)());
var mo = {}, H3 = {};
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
    const _ = d / 2;
    g = 0;
    for (let C = 0; C < 20; C++)
      y = _ * t.tValues[20][C] + _, g += t.cValues[20][C] * r(a, c, y);
    return _ * g;
  };
  t.getCubicArcLength = e;
  const n = (a, c, d) => {
    d === void 0 && (d = 1);
    const g = a[0] - 2 * a[1] + a[2], y = c[0] - 2 * c[1] + c[2], w = 2 * a[1] - 2 * a[0], _ = 2 * c[1] - 2 * c[0], C = 4 * (g * g + y * y), v = 4 * (g * w + y * _), E = w * w + _ * _;
    if (C === 0)
      return d * Math.sqrt(Math.pow(a[2] - a[0], 2) + Math.pow(c[2] - c[0], 2));
    const R = v / (2 * C), k = E / C, x = d + R, p = k - R * R, S = x * x + p > 0 ? Math.sqrt(x * x + p) : 0, N = R * R + p > 0 ? Math.sqrt(R * R + p) : 0, M = R + Math.sqrt(R * R + p) !== 0 ? p * Math.log(Math.abs((x + S) / (R + N))) : 0;
    return Math.sqrt(C) / 2 * (x * S - R * N + M);
  };
  t.getQuadraticArcLength = n;
  function r(a, c, d) {
    const g = o(1, d, a), y = o(1, d, c), w = g * g + y * y;
    return Math.sqrt(w);
  }
  const o = (a, c, d) => {
    const g = d.length - 1;
    let y, w;
    if (g === 0)
      return 0;
    if (a === 0) {
      w = 0;
      for (let _ = 0; _ <= g; _++)
        w += t.binomialCoefficients[g][_] * Math.pow(1 - c, g - _) * Math.pow(c, _) * d[_];
      return w;
    } else {
      y = new Array(g);
      for (let _ = 0; _ < g; _++)
        y[_] = g * (d[_ + 1] - d[_]);
      return o(a - 1, c, y);
    }
  }, l = (a, c, d) => {
    let g = 1, y = a / c, w = (a - d(y)) / c, _ = 0;
    for (; g > 1e-3; ) {
      const C = d(y + w), v = Math.abs(a - C) / c;
      if (v < g)
        g = v, y += w;
      else {
        const E = d(y - w), R = Math.abs(a - E) / c;
        R < g ? (g = R, y -= w) : w /= 2;
      }
      if (_++, _ > 500)
        break;
    }
    return y;
  };
  t.t2length = l;
})(H3);
Object.defineProperty(mo, "__esModule", { value: !0 });
mo.Path = void 0;
const p9 = xe, g9 = Se, m9 = xt, Ls = H3;
class _t extends m9.Shape {
  constructor(e) {
    super(e), this.dataArray = [], this.pathLength = 0, this._readDataAttribute(), this.on("dataChange.konva", function() {
      this._readDataAttribute();
    });
  }
  _readDataAttribute() {
    this.dataArray = _t.parsePathData(this.data()), this.pathLength = _t.getPathLength(this.dataArray);
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
          const c = a[0], d = a[1], g = a[2], y = a[3], w = a[4], _ = a[5], C = a[6], v = a[7], E = g > y ? g : y, R = g > y ? 1 : g / y, k = g > y ? y / g : 1;
          e.translate(c, d), e.rotate(C), e.scale(R, k), e.arc(0, 0, E, w, w + _, 1 - v), e.scale(1 / R, 1 / k), e.rotate(-C), e.translate(-c, -d);
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
        const g = d.points[4], y = d.points[5], w = d.points[4] + y;
        let _ = Math.PI / 180;
        if (Math.abs(g - w) < _ && (_ = Math.abs(g - w)), y < 0)
          for (let C = g - _; C > w; C -= _) {
            const v = _t.getPointOnEllipticalArc(d.points[0], d.points[1], d.points[2], d.points[3], C, 0);
            e.push(v.x, v.y);
          }
        else
          for (let C = g + _; C < w; C += _) {
            const v = _t.getPointOnEllipticalArc(d.points[0], d.points[1], d.points[2], d.points[3], C, 0);
            e.push(v.x, v.y);
          }
      } else if (d.command === "C")
        for (let g = 0; g <= 1; g += 0.01) {
          const y = _t.getPointOnCubicBezier(g, d.start.x, d.start.y, d.points[0], d.points[1], d.points[2], d.points[3], d.points[4], d.points[5]);
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
    return _t.getPointAtLengthOfDataArray(e, this.dataArray);
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
        return _t.getPointOnLine(e, a.start.x, a.start.y, c[0], c[1]);
      case "C":
        return _t.getPointOnCubicBezier((0, Ls.t2length)(e, _t.getPathLength(n), (E) => (0, Ls.getCubicArcLength)([a.start.x, c[0], c[2], c[4]], [a.start.y, c[1], c[3], c[5]], E)), a.start.x, a.start.y, c[0], c[1], c[2], c[3], c[4], c[5]);
      case "Q":
        return _t.getPointOnQuadraticBezier((0, Ls.t2length)(e, _t.getPathLength(n), (E) => (0, Ls.getQuadraticArcLength)([a.start.x, c[0], c[2]], [a.start.y, c[1], c[3]], E)), a.start.x, a.start.y, c[0], c[1], c[2], c[3]);
      case "A":
        const d = c[0], g = c[1], y = c[2], w = c[3], _ = c[5], C = c[6];
        let v = c[4];
        return v += _ * e / a.pathLength, _t.getPointOnEllipticalArc(d, g, y, w, v, C);
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
    const g = (l - r) / (o - n), y = Math.sqrt(e * e / (1 + g * g)) * (o < n ? -1 : 1), w = g * y;
    if (Math.abs(c - r - g * (a - n)) < 1e-10)
      return { x: a + y, y: c + w };
    const _ = ((a - n) * (o - n) + (c - r) * (l - r)) / (d * d), C = n + _ * (o - n), v = r + _ * (l - r), E = this.getLineLength(a, c, C, v), R = Math.sqrt(e * e - E * E), k = Math.sqrt(R * R / (1 + g * g)) * (o < n ? -1 : 1), x = g * k;
    return { x: C + k, y: v + x };
  }
  static getPointOnCubicBezier(e, n, r, o, l, a, c, d, g) {
    function y(R) {
      return R * R * R;
    }
    function w(R) {
      return 3 * R * R * (1 - R);
    }
    function _(R) {
      return 3 * R * (1 - R) * (1 - R);
    }
    function C(R) {
      return (1 - R) * (1 - R) * (1 - R);
    }
    const v = d * y(e) + a * w(e) + o * _(e) + n * C(e), E = g * y(e) + c * w(e) + l * _(e) + r * C(e);
    return { x: v, y: E };
  }
  static getPointOnQuadraticBezier(e, n, r, o, l, a, c) {
    function d(C) {
      return C * C;
    }
    function g(C) {
      return 2 * C * (1 - C);
    }
    function y(C) {
      return (1 - C) * (1 - C);
    }
    const w = a * d(e) + o * g(e) + n * y(e), _ = c * d(e) + l * g(e) + r * y(e);
    return { x: w, y: _ };
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
    for (let w = 0; w < r.length; w++)
      n = n.replace(new RegExp(r[w], "g"), "|" + r[w]);
    const o = n.split("|"), l = [], a = [];
    let c = 0, d = 0;
    const g = /([-+]?((\d+\.\d+)|((\d+)|(\.\d+)))(?:e[-+]?\d+)?)/gi;
    let y;
    for (let w = 1; w < o.length; w++) {
      let _ = o[w], C = _.charAt(0);
      for (_ = _.slice(1), a.length = 0; y = g.exec(_); )
        a.push(y[0]);
      const v = [];
      for (let E = 0, R = a.length; E < R; E++) {
        if (a[E] === "00") {
          v.push(0, 0);
          continue;
        }
        const k = parseFloat(a[E]);
        isNaN(k) ? v.push(0) : v.push(k);
      }
      for (; v.length > 0 && !isNaN(v[0]); ) {
        let E = "", R = [];
        const k = c, x = d;
        let p, S, N, M, A, T, G, F, V, j;
        switch (C) {
          case "l":
            c += v.shift(), d += v.shift(), E = "L", R.push(c, d);
            break;
          case "L":
            c = v.shift(), d = v.shift(), R.push(c, d);
            break;
          case "m":
            const q = v.shift(), D = v.shift();
            if (c += q, d += D, E = "M", l.length > 2 && l[l.length - 1].command === "z") {
              for (let X = l.length - 2; X >= 0; X--)
                if (l[X].command === "M") {
                  c = l[X].points[0] + q, d = l[X].points[1] + D;
                  break;
                }
            }
            R.push(c, d), C = "l";
            break;
          case "M":
            c = v.shift(), d = v.shift(), E = "M", R.push(c, d), C = "L";
            break;
          case "h":
            c += v.shift(), E = "L", R.push(c, d);
            break;
          case "H":
            c = v.shift(), E = "L", R.push(c, d);
            break;
          case "v":
            d += v.shift(), E = "L", R.push(c, d);
            break;
          case "V":
            d = v.shift(), E = "L", R.push(c, d);
            break;
          case "C":
            R.push(v.shift(), v.shift(), v.shift(), v.shift()), c = v.shift(), d = v.shift(), R.push(c, d);
            break;
          case "c":
            R.push(c + v.shift(), d + v.shift(), c + v.shift(), d + v.shift()), c += v.shift(), d += v.shift(), E = "C", R.push(c, d);
            break;
          case "S":
            S = c, N = d, p = l[l.length - 1], p.command === "C" && (S = c + (c - p.points[2]), N = d + (d - p.points[3])), R.push(S, N, v.shift(), v.shift()), c = v.shift(), d = v.shift(), E = "C", R.push(c, d);
            break;
          case "s":
            S = c, N = d, p = l[l.length - 1], p.command === "C" && (S = c + (c - p.points[2]), N = d + (d - p.points[3])), R.push(S, N, c + v.shift(), d + v.shift()), c += v.shift(), d += v.shift(), E = "C", R.push(c, d);
            break;
          case "Q":
            R.push(v.shift(), v.shift()), c = v.shift(), d = v.shift(), R.push(c, d);
            break;
          case "q":
            R.push(c + v.shift(), d + v.shift()), c += v.shift(), d += v.shift(), E = "Q", R.push(c, d);
            break;
          case "T":
            S = c, N = d, p = l[l.length - 1], p.command === "Q" && (S = c + (c - p.points[0]), N = d + (d - p.points[1])), c = v.shift(), d = v.shift(), E = "Q", R.push(S, N, c, d);
            break;
          case "t":
            S = c, N = d, p = l[l.length - 1], p.command === "Q" && (S = c + (c - p.points[0]), N = d + (d - p.points[1])), c += v.shift(), d += v.shift(), E = "Q", R.push(S, N, c, d);
            break;
          case "A":
            M = v.shift(), A = v.shift(), T = v.shift(), G = v.shift(), F = v.shift(), V = c, j = d, c = v.shift(), d = v.shift(), E = "A", R = this.convertEndpointToCenterParameterization(V, j, c, d, G, F, M, A, T);
            break;
          case "a":
            M = v.shift(), A = v.shift(), T = v.shift(), G = v.shift(), F = v.shift(), V = c, j = d, c += v.shift(), d += v.shift(), E = "A", R = this.convertEndpointToCenterParameterization(V, j, c, d, G, F, M, A, T);
            break;
        }
        l.push({
          command: E || C,
          points: R,
          start: {
            x: k,
            y: x
          },
          pathLength: this.calcLength(k, x, E || C, R)
        });
      }
      (C === "z" || C === "Z") && l.push({
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
    const g = _t;
    switch (r) {
      case "L":
        return g.getLineLength(e, n, o[0], o[1]);
      case "C":
        return (0, Ls.getCubicArcLength)([e, o[0], o[2], o[4]], [n, o[1], o[3], o[5]], 1);
      case "Q":
        return (0, Ls.getQuadraticArcLength)([e, o[0], o[2]], [n, o[1], o[3]], 1);
      case "A":
        l = 0;
        const y = o[4], w = o[5], _ = o[4] + w;
        let C = Math.PI / 180;
        if (Math.abs(y - _) < C && (C = Math.abs(y - _)), a = g.getPointOnEllipticalArc(o[0], o[1], o[2], o[3], y, 0), w < 0)
          for (d = y - C; d > _; d -= C)
            c = g.getPointOnEllipticalArc(o[0], o[1], o[2], o[3], d, 0), l += g.getLineLength(a.x, a.y, c.x, c.y), a = c;
        else
          for (d = y + C; d < _; d += C)
            c = g.getPointOnEllipticalArc(o[0], o[1], o[2], o[3], d, 0), l += g.getLineLength(a.x, a.y, c.x, c.y), a = c;
        return c = g.getPointOnEllipticalArc(o[0], o[1], o[2], o[3], _, 0), l += g.getLineLength(a.x, a.y, c.x, c.y), l;
    }
    return 0;
  }
  static convertEndpointToCenterParameterization(e, n, r, o, l, a, c, d, g) {
    const y = g * (Math.PI / 180), w = Math.cos(y) * (e - r) / 2 + Math.sin(y) * (n - o) / 2, _ = -1 * Math.sin(y) * (e - r) / 2 + Math.cos(y) * (n - o) / 2, C = w * w / (c * c) + _ * _ / (d * d);
    C > 1 && (c *= Math.sqrt(C), d *= Math.sqrt(C));
    let v = Math.sqrt((c * c * (d * d) - c * c * (_ * _) - d * d * (w * w)) / (c * c * (_ * _) + d * d * (w * w)));
    l === a && (v *= -1), isNaN(v) && (v = 0);
    const E = v * c * _ / d, R = v * -d * w / c, k = (e + r) / 2 + Math.cos(y) * E - Math.sin(y) * R, x = (n + o) / 2 + Math.sin(y) * E + Math.cos(y) * R, p = function(F) {
      return Math.sqrt(F[0] * F[0] + F[1] * F[1]);
    }, S = function(F, V) {
      return (F[0] * V[0] + F[1] * V[1]) / (p(F) * p(V));
    }, N = function(F, V) {
      return (F[0] * V[1] < F[1] * V[0] ? -1 : 1) * Math.acos(S(F, V));
    }, M = N([1, 0], [(w - E) / c, (_ - R) / d]), A = [(w - E) / c, (_ - R) / d], T = [(-1 * w - E) / c, (-1 * _ - R) / d];
    let G = N(A, T);
    return S(A, T) <= -1 && (G = Math.PI), S(A, T) >= 1 && (G = 0), a === 0 && G > 0 && (G = G - 2 * Math.PI), a === 1 && G < 0 && (G = G + 2 * Math.PI), [k, x, c, d, M, G, y, a];
  }
}
mo.Path = _t;
_t.prototype.className = "Path";
_t.prototype._attrsAffectingSize = ["data"];
(0, g9._registerNode)(_t);
p9.Factory.addGetterSetter(_t, "data");
Object.defineProperty(Lc, "__esModule", { value: !0 });
Lc.Arrow = void 0;
const Oc = xe, y9 = Vl, j3 = fe, v9 = Se, D2 = mo;
class ls extends y9.Line {
  _sceneFunc(e) {
    super._sceneFunc(e);
    const n = Math.PI * 2, r = this.points();
    let o = r;
    const l = this.tension() !== 0 && r.length > 4;
    l && (o = this.getTensionPoints());
    const a = this.pointerLength(), c = r.length;
    let d, g;
    if (l) {
      const _ = [
        o[o.length - 4],
        o[o.length - 3],
        o[o.length - 2],
        o[o.length - 1],
        r[c - 2],
        r[c - 1]
      ], C = D2.Path.calcLength(o[o.length - 4], o[o.length - 3], "C", _), v = D2.Path.getPointOnQuadraticBezier(Math.min(1, 1 - a / C), _[0], _[1], _[2], _[3], _[4], _[5]);
      d = r[c - 2] - v.x, g = r[c - 1] - v.y;
    } else
      d = r[c - 2] - r[c - 4], g = r[c - 1] - r[c - 3];
    const y = (Math.atan2(g, d) + n) % n, w = this.pointerWidth();
    this.pointerAtEnding() && (e.save(), e.beginPath(), e.translate(r[c - 2], r[c - 1]), e.rotate(y), e.moveTo(0, 0), e.lineTo(-a, w / 2), e.lineTo(-a, -w / 2), e.closePath(), e.restore(), this.__fillStroke(e)), this.pointerAtBeginning() && (e.save(), e.beginPath(), e.translate(r[0], r[1]), l ? (d = (o[0] + o[2]) / 2 - r[0], g = (o[1] + o[3]) / 2 - r[1]) : (d = r[2] - r[0], g = r[3] - r[1]), e.rotate((Math.atan2(-g, -d) + n) % n), e.moveTo(0, 0), e.lineTo(-a, w / 2), e.lineTo(-a, -w / 2), e.closePath(), e.restore(), this.__fillStroke(e));
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
Lc.Arrow = ls;
ls.prototype.className = "Arrow";
(0, v9._registerNode)(ls);
Oc.Factory.addGetterSetter(ls, "pointerLength", 10, (0, j3.getNumberValidator)());
Oc.Factory.addGetterSetter(ls, "pointerWidth", 10, (0, j3.getNumberValidator)());
Oc.Factory.addGetterSetter(ls, "pointerAtBeginning", !1);
Oc.Factory.addGetterSetter(ls, "pointerAtEnding", !0);
var Ic = {};
Object.defineProperty(Ic, "__esModule", { value: !0 });
Ic.Circle = void 0;
const _9 = xe, S9 = xt, w9 = fe, x9 = Se;
let yo = class extends S9.Shape {
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
Ic.Circle = yo;
yo.prototype._centroid = !0;
yo.prototype.className = "Circle";
yo.prototype._attrsAffectingSize = ["radius"];
(0, x9._registerNode)(yo);
_9.Factory.addGetterSetter(yo, "radius", 0, (0, w9.getNumberValidator)());
var Dc = {};
Object.defineProperty(Dc, "__esModule", { value: !0 });
Dc.Ellipse = void 0;
const x1 = xe, C9 = xt, W3 = fe, k9 = Se;
class xi extends C9.Shape {
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
Dc.Ellipse = xi;
xi.prototype.className = "Ellipse";
xi.prototype._centroid = !0;
xi.prototype._attrsAffectingSize = ["radiusX", "radiusY"];
(0, k9._registerNode)(xi);
x1.Factory.addComponentsGetterSetter(xi, "radius", ["x", "y"]);
x1.Factory.addGetterSetter(xi, "radiusX", 0, (0, W3.getNumberValidator)());
x1.Factory.addGetterSetter(xi, "radiusY", 0, (0, W3.getNumberValidator)());
var zc = {};
Object.defineProperty(zc, "__esModule", { value: !0 });
zc.Image = void 0;
const hh = st, as = xe, E9 = xt, P9 = Se, Hl = fe;
let pr = class Y3 extends E9.Shape {
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
    (this.hasFill() || this.hasStroke() || o) && (e.beginPath(), o ? hh.Util.drawRoundedRectPath(e, n, r, o) : e.rect(0, 0, n, r), e.closePath(), e.fillStrokeShape(this)), l && (o && e.clip(), e.drawImage.apply(e, a));
  }
  _hitFunc(e) {
    const n = this.width(), r = this.height(), o = this.cornerRadius();
    e.beginPath(), o ? hh.Util.drawRoundedRectPath(e, n, r, o) : e.rect(0, 0, n, r), e.closePath(), e.fillStrokeShape(this);
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
    const o = hh.Util.createImageElement();
    o.onload = function() {
      const l = new Y3({
        image: o
      });
      n(l);
    }, o.onerror = r, o.crossOrigin = "Anonymous", o.src = e;
  }
};
zc.Image = pr;
pr.prototype.className = "Image";
(0, P9._registerNode)(pr);
as.Factory.addGetterSetter(pr, "cornerRadius", 0, (0, Hl.getNumberOrArrayOfNumbersValidator)(4));
as.Factory.addGetterSetter(pr, "image");
as.Factory.addComponentsGetterSetter(pr, "crop", ["x", "y", "width", "height"]);
as.Factory.addGetterSetter(pr, "cropX", 0, (0, Hl.getNumberValidator)());
as.Factory.addGetterSetter(pr, "cropY", 0, (0, Hl.getNumberValidator)());
as.Factory.addGetterSetter(pr, "cropWidth", 0, (0, Hl.getNumberValidator)());
as.Factory.addGetterSetter(pr, "cropHeight", 0, (0, Hl.getNumberValidator)());
var so = {};
Object.defineProperty(so, "__esModule", { value: !0 });
so.Tag = so.Label = void 0;
const Gc = xe, T9 = xt, N9 = po, C1 = fe, K3 = Se, X3 = [
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
], R9 = "Change.konva", M9 = "none", m0 = "up", y0 = "right", v0 = "down", _0 = "left", F9 = X3.length;
class k1 extends N9.Group {
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
    for (r = 0; r < F9; r++)
      e.on(X3[r] + R9, o);
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
        case m0:
          c = r / 2, d = -1 * g;
          break;
        case y0:
          c = r + a, d = o / 2;
          break;
        case v0:
          c = r / 2, d = o + g;
          break;
        case _0:
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
so.Label = k1;
k1.prototype.className = "Label";
(0, K3._registerNode)(k1);
class us extends T9.Shape {
  _sceneFunc(e) {
    const n = this.width(), r = this.height(), o = this.pointerDirection(), l = this.pointerWidth(), a = this.pointerHeight(), c = this.cornerRadius();
    let d = 0, g = 0, y = 0, w = 0;
    typeof c == "number" ? d = g = y = w = Math.min(c, n / 2, r / 2) : (d = Math.min(c[0] || 0, n / 2, r / 2), g = Math.min(c[1] || 0, n / 2, r / 2), w = Math.min(c[2] || 0, n / 2, r / 2), y = Math.min(c[3] || 0, n / 2, r / 2)), e.beginPath(), e.moveTo(d, 0), o === m0 && (e.lineTo((n - l) / 2, 0), e.lineTo(n / 2, -1 * a), e.lineTo((n + l) / 2, 0)), e.lineTo(n - g, 0), e.arc(n - g, g, g, Math.PI * 3 / 2, 0, !1), o === y0 && (e.lineTo(n, (r - a) / 2), e.lineTo(n + l, r / 2), e.lineTo(n, (r + a) / 2)), e.lineTo(n, r - w), e.arc(n - w, r - w, w, 0, Math.PI / 2, !1), o === v0 && (e.lineTo((n + l) / 2, r), e.lineTo(n / 2, r + a), e.lineTo((n - l) / 2, r)), e.lineTo(y, r), e.arc(y, r - y, y, Math.PI / 2, Math.PI, !1), o === _0 && (e.lineTo(0, (r + a) / 2), e.lineTo(-1 * l, r / 2), e.lineTo(0, (r - a) / 2)), e.lineTo(0, d), e.arc(d, d, d, Math.PI, Math.PI * 3 / 2, !1), e.closePath(), e.fillStrokeShape(this);
  }
  getSelfRect() {
    let e = 0, n = 0, r = this.pointerWidth(), o = this.pointerHeight(), l = this.pointerDirection(), a = this.width(), c = this.height();
    return l === m0 ? (n -= o, c += o) : l === v0 ? c += o : l === _0 ? (e -= r * 1.5, a += r) : l === y0 && (a += r * 1.5), {
      x: e,
      y: n,
      width: a,
      height: c
    };
  }
}
so.Tag = us;
us.prototype.className = "Tag";
(0, K3._registerNode)(us);
Gc.Factory.addGetterSetter(us, "pointerDirection", M9);
Gc.Factory.addGetterSetter(us, "pointerWidth", 0, (0, C1.getNumberValidator)());
Gc.Factory.addGetterSetter(us, "pointerHeight", 0, (0, C1.getNumberValidator)());
Gc.Factory.addGetterSetter(us, "cornerRadius", 0, (0, C1.getNumberOrArrayOfNumbersValidator)(4));
var jl = {};
Object.defineProperty(jl, "__esModule", { value: !0 });
jl.Rect = void 0;
const L9 = xe, A9 = xt, O9 = Se, I9 = st, D9 = fe;
let Uc = class extends A9.Shape {
  _sceneFunc(e) {
    const n = this.cornerRadius(), r = this.width(), o = this.height();
    e.beginPath(), n ? I9.Util.drawRoundedRectPath(e, r, o, n) : e.rect(0, 0, r, o), e.closePath(), e.fillStrokeShape(this);
  }
};
jl.Rect = Uc;
Uc.prototype.className = "Rect";
(0, O9._registerNode)(Uc);
L9.Factory.addGetterSetter(Uc, "cornerRadius", 0, (0, D9.getNumberOrArrayOfNumbersValidator)(4));
var Bc = {};
Object.defineProperty(Bc, "__esModule", { value: !0 });
Bc.RegularPolygon = void 0;
const $3 = xe, z9 = xt, Q3 = fe, G9 = Se;
class cs extends z9.Shape {
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
Bc.RegularPolygon = cs;
cs.prototype.className = "RegularPolygon";
cs.prototype._centroid = !0;
cs.prototype._attrsAffectingSize = ["radius"];
(0, G9._registerNode)(cs);
$3.Factory.addGetterSetter(cs, "radius", 0, (0, Q3.getNumberValidator)());
$3.Factory.addGetterSetter(cs, "sides", 0, (0, Q3.getNumberValidator)());
var Vc = {};
Object.defineProperty(Vc, "__esModule", { value: !0 });
Vc.Ring = void 0;
const b3 = xe, U9 = xt, q3 = fe, B9 = Se, z2 = Math.PI * 2;
class ds extends U9.Shape {
  _sceneFunc(e) {
    e.beginPath(), e.arc(0, 0, this.innerRadius(), 0, z2, !1), e.moveTo(this.outerRadius(), 0), e.arc(0, 0, this.outerRadius(), z2, 0, !0), e.closePath(), e.fillStrokeShape(this);
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
Vc.Ring = ds;
ds.prototype.className = "Ring";
ds.prototype._centroid = !0;
ds.prototype._attrsAffectingSize = ["innerRadius", "outerRadius"];
(0, B9._registerNode)(ds);
b3.Factory.addGetterSetter(ds, "innerRadius", 0, (0, q3.getNumberValidator)());
b3.Factory.addGetterSetter(ds, "outerRadius", 0, (0, q3.getNumberValidator)());
var Hc = {};
Object.defineProperty(Hc, "__esModule", { value: !0 });
Hc.Sprite = void 0;
const fs = xe, V9 = xt, H9 = go, Z3 = fe, j9 = Se;
class gr extends V9.Shape {
  constructor(e) {
    super(e), this._updated = !0, this.anim = new H9.Animation(() => {
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
    const n = this.animation(), r = this.frameIndex(), o = r * 4, l = this.animations()[n], a = this.frameOffsets(), c = l[o + 0], d = l[o + 1], g = l[o + 2], y = l[o + 3], w = this.image();
    if ((this.hasFill() || this.hasStroke()) && (e.beginPath(), e.rect(0, 0, g, y), e.closePath(), e.fillStrokeShape(this)), w)
      if (a) {
        const _ = a[n], C = r * 2;
        e.drawImage(w, c, d, g, y, _[C + 0], _[C + 1], g, y);
      } else
        e.drawImage(w, c, d, g, y, 0, 0, g, y);
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
Hc.Sprite = gr;
gr.prototype.className = "Sprite";
(0, j9._registerNode)(gr);
fs.Factory.addGetterSetter(gr, "animation");
fs.Factory.addGetterSetter(gr, "animations");
fs.Factory.addGetterSetter(gr, "frameOffsets");
fs.Factory.addGetterSetter(gr, "image");
fs.Factory.addGetterSetter(gr, "frameIndex", 0, (0, Z3.getNumberValidator)());
fs.Factory.addGetterSetter(gr, "frameRate", 17, (0, Z3.getNumberValidator)());
fs.Factory.backCompat(gr, {
  index: "frameIndex",
  getIndex: "getFrameIndex",
  setIndex: "setFrameIndex"
});
var jc = {};
Object.defineProperty(jc, "__esModule", { value: !0 });
jc.Star = void 0;
const E1 = xe, W9 = xt, P1 = fe, Y9 = Se;
class Ci extends W9.Shape {
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
jc.Star = Ci;
Ci.prototype.className = "Star";
Ci.prototype._centroid = !0;
Ci.prototype._attrsAffectingSize = ["innerRadius", "outerRadius"];
(0, Y9._registerNode)(Ci);
E1.Factory.addGetterSetter(Ci, "numPoints", 5, (0, P1.getNumberValidator)());
E1.Factory.addGetterSetter(Ci, "innerRadius", 0, (0, P1.getNumberValidator)());
E1.Factory.addGetterSetter(Ci, "outerRadius", 0, (0, P1.getNumberValidator)());
var vo = {};
Object.defineProperty(vo, "__esModule", { value: !0 });
vo.Text = void 0;
vo.stringToArray = Yi;
const S0 = st, Yt = xe, K9 = xt, ph = Se, ki = fe, X9 = Se;
function Yi(t) {
  return [...t].reduce((e, n, r, o) => {
    if (new RegExp("\\p{Emoji}", "u").test(n)) {
      const l = o[r + 1];
      l && new RegExp("\\p{Emoji_Modifier}|\\u200D", "u").test(l) ? (e.push(n + l), o[r + 1] = "") : e.push(n);
    } else new RegExp("\\p{Regional_Indicator}{2}", "u").test(n + (o[r + 1] || "")) ? e.push(n + o[r + 1]) : r > 0 && new RegExp("\\p{Mn}|\\p{Me}|\\p{Mc}", "u").test(n) ? e[e.length - 1] += n : n && e.push(n);
    return e;
  }, []);
}
const As = "auto", $9 = "center", J3 = "inherit", Xo = "justify", Q9 = "Change.konva", b9 = "2d", G2 = "-", e4 = "left", q9 = "text", Z9 = "Text", J9 = "top", e7 = "bottom", U2 = "middle", t4 = "normal", t7 = "px ", uu = " ", n7 = "right", B2 = "rtl", r7 = "word", i7 = "char", V2 = "none", gh = "…", n4 = [
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
], s7 = n4.length;
function o7(t) {
  return t.split(",").map((e) => {
    e = e.trim();
    const n = e.indexOf(" ") >= 0, r = e.indexOf('"') >= 0 || e.indexOf("'") >= 0;
    return n && !r && (e = `"${e}"`), e;
  }).join(", ");
}
let cu;
function mh() {
  return cu || (cu = S0.Util.createCanvasElement().getContext(b9), cu);
}
function l7(t) {
  t.fillText(this._partialText, this._partialTextX, this._partialTextY);
}
function a7(t) {
  t.setAttr("miterLimit", 2), t.strokeText(this._partialText, this._partialTextX, this._partialTextY);
}
function u7(t) {
  return t = t || {}, !t.fillLinearGradientColorStops && !t.fillRadialGradientColorStops && !t.fillPatternImage && (t.fill = t.fill || "black"), t;
}
class ut extends K9.Shape {
  constructor(e) {
    super(u7(e)), this._partialTextX = 0, this._partialTextY = 0;
    for (let n = 0; n < s7; n++)
      this.on(n4[n] + Q9, this._setTextData);
    this._setTextData();
  }
  _sceneFunc(e) {
    const n = this.textArr, r = n.length;
    if (!this.text())
      return;
    let o = this.padding(), l = this.fontSize(), a = this.lineHeight() * l, c = this.verticalAlign(), d = this.direction(), g = 0, y = this.align(), w = this.getWidth(), _ = this.letterSpacing(), C = this.fill(), v = this.textDecoration(), E = v.indexOf("underline") !== -1, R = v.indexOf("line-through") !== -1, k;
    d = d === J3 ? e.direction : d;
    let x = a / 2, p = U2;
    if (ph.Konva._fixTextRendering) {
      const S = this.measureSize("M");
      p = "alphabetic", x = (S.fontBoundingBoxAscent - S.fontBoundingBoxDescent) / 2 + a / 2;
    }
    for (d === B2 && e.setAttr("direction", d), e.setAttr("font", this._getContextFont()), e.setAttr("textBaseline", p), e.setAttr("textAlign", e4), c === U2 ? g = (this.getHeight() - r * a - o * 2) / 2 : c === e7 && (g = this.getHeight() - r * a - o * 2), e.translate(o, g + o), k = 0; k < r; k++) {
      let S = 0, N = 0;
      const M = n[k], A = M.text, T = M.width, G = M.lastInParagraph;
      if (e.save(), y === n7 ? S += w - T - o * 2 : y === $9 && (S += (w - T - o * 2) / 2), E) {
        e.save(), e.beginPath();
        const F = ph.Konva._fixTextRendering ? Math.round(l / 4) : Math.round(l / 2), V = S, j = x + N + F;
        e.moveTo(V, j);
        const q = y === Xo && !G ? w - o * 2 : T;
        e.lineTo(V + Math.round(q), j), e.lineWidth = l / 15;
        const D = this._getLinearGradient();
        e.strokeStyle = D || C, e.stroke(), e.restore();
      }
      if (R) {
        e.save(), e.beginPath();
        const F = ph.Konva._fixTextRendering ? -Math.round(l / 4) : 0;
        e.moveTo(S, x + N + F);
        const V = y === Xo && !G ? w - o * 2 : T;
        e.lineTo(S + Math.round(V), x + N + F), e.lineWidth = l / 15;
        const j = this._getLinearGradient();
        e.strokeStyle = j || C, e.stroke(), e.restore();
      }
      if (d !== B2 && (_ !== 0 || y === Xo)) {
        const F = A.split(" ").length - 1, V = Yi(A);
        for (let j = 0; j < V.length; j++) {
          const q = V[j];
          q === " " && !G && y === Xo && (S += (w - o * 2 - T) / F), this._partialTextX = S, this._partialTextY = x + N, this._partialText = q, e.fillStrokeShape(this), S += this.measureSize(q).width + _;
        }
      } else
        _ !== 0 && e.setAttr("letterSpacing", `${_}px`), this._partialTextX = S, this._partialTextY = x + N, this._partialText = A, e.fillStrokeShape(this);
      e.restore(), r > 1 && (x += a);
    }
  }
  _hitFunc(e) {
    const n = this.getWidth(), r = this.getHeight();
    e.beginPath(), e.rect(0, 0, n, r), e.closePath(), e.fillStrokeShape(this);
  }
  setText(e) {
    const n = S0.Util._isString(e) ? e : e == null ? "" : e + "";
    return this._setAttr(q9, n), this;
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
    return S0.Util.warn("text.getTextHeight() method is deprecated. Use text.height() - for full height and text.fontSize() - for one line height."), this.textHeight;
  }
  measureSize(e) {
    var n, r, o, l, a, c, d, g, y, w, _;
    let C = mh(), v = this.fontSize(), E;
    C.save(), C.font = this._getContextFont(), E = C.measureText(e), C.restore();
    const R = v / 100;
    return {
      actualBoundingBoxAscent: (n = E.actualBoundingBoxAscent) !== null && n !== void 0 ? n : 71.58203125 * R,
      actualBoundingBoxDescent: (r = E.actualBoundingBoxDescent) !== null && r !== void 0 ? r : 0,
      actualBoundingBoxLeft: (o = E.actualBoundingBoxLeft) !== null && o !== void 0 ? o : -7.421875 * R,
      actualBoundingBoxRight: (l = E.actualBoundingBoxRight) !== null && l !== void 0 ? l : 75.732421875 * R,
      alphabeticBaseline: (a = E.alphabeticBaseline) !== null && a !== void 0 ? a : 0,
      emHeightAscent: (c = E.emHeightAscent) !== null && c !== void 0 ? c : 100 * R,
      emHeightDescent: (d = E.emHeightDescent) !== null && d !== void 0 ? d : -20 * R,
      fontBoundingBoxAscent: (g = E.fontBoundingBoxAscent) !== null && g !== void 0 ? g : 91 * R,
      fontBoundingBoxDescent: (y = E.fontBoundingBoxDescent) !== null && y !== void 0 ? y : 21 * R,
      hangingBaseline: (w = E.hangingBaseline) !== null && w !== void 0 ? w : 72.80000305175781 * R,
      ideographicBaseline: (_ = E.ideographicBaseline) !== null && _ !== void 0 ? _ : -21 * R,
      width: E.width,
      height: v
    };
  }
  _getContextFont() {
    return this.fontStyle() + uu + this.fontVariant() + uu + (this.fontSize() + t7) + o7(this.fontFamily());
  }
  _addTextLine(e) {
    this.align() === Xo && (e = e.trim());
    const r = this._getTextWidth(e);
    return this.textArr.push({
      text: e,
      width: r,
      lastInParagraph: !1
    });
  }
  _getTextWidth(e) {
    const n = this.letterSpacing(), r = e.length;
    return mh().measureText(e).width + n * r;
  }
  _setTextData() {
    let e = this.text().split(`
`), n = +this.fontSize(), r = 0, o = this.lineHeight() * n, l = this.attrs.width, a = this.attrs.height, c = l !== As && l !== void 0, d = a !== As && a !== void 0, g = this.padding(), y = l - g * 2, w = a - g * 2, _ = 0, C = this.wrap(), v = C !== V2, E = C !== i7 && v, R = this.ellipsis();
    this.textArr = [], mh().font = this._getContextFont();
    const k = R ? this._getTextWidth(gh) : 0;
    for (let x = 0, p = e.length; x < p; ++x) {
      let S = e[x], N = this._getTextWidth(S);
      if (c && N > y)
        for (; S.length > 0; ) {
          let M = 0, A = Yi(S).length, T = "", G = 0;
          for (; M < A; ) {
            const F = M + A >>> 1, V = Yi(S), j = V.slice(0, F + 1).join(""), q = this._getTextWidth(j);
            (R && d && _ + o > w ? q + k : q) <= y ? (M = F + 1, T = j, G = q) : A = F;
          }
          if (T) {
            if (E) {
              const j = Yi(S), q = Yi(T), D = j[q.length], X = D === uu || D === G2;
              let he;
              if (X && G <= y)
                he = q.length;
              else {
                const de = q.lastIndexOf(uu), H = q.lastIndexOf(G2);
                he = Math.max(de, H) + 1;
              }
              he > 0 && (M = he, T = j.slice(0, M).join(""), G = this._getTextWidth(T));
            }
            if (T = T.trimRight(), this._addTextLine(T), r = Math.max(r, G), _ += o, this._shouldHandleEllipsis(_)) {
              this._tryToAddEllipsisToLastLine();
              break;
            }
            if (S = Yi(S).slice(M).join("").trimLeft(), S.length > 0 && (N = this._getTextWidth(S), N <= y)) {
              this._addTextLine(S), _ += o, r = Math.max(r, N);
              break;
            }
          } else
            break;
        }
      else
        this._addTextLine(S), _ += o, r = Math.max(r, N), this._shouldHandleEllipsis(_) && x < p - 1 && this._tryToAddEllipsisToLastLine();
      if (this.textArr[this.textArr.length - 1] && (this.textArr[this.textArr.length - 1].lastInParagraph = !0), d && _ + o > w)
        break;
    }
    this.textHeight = n, this.textWidth = r;
  }
  _shouldHandleEllipsis(e) {
    const n = +this.fontSize(), r = this.lineHeight() * n, o = this.attrs.height, l = o !== As && o !== void 0, a = this.padding(), c = o - a * 2;
    return !(this.wrap() !== V2) || l && e + r > c;
  }
  _tryToAddEllipsisToLastLine() {
    const e = this.attrs.width, n = e !== As && e !== void 0, r = this.padding(), o = e - r * 2, l = this.ellipsis(), a = this.textArr[this.textArr.length - 1];
    !a || !l || (n && (this._getTextWidth(a.text + gh) < o || (a.text = a.text.slice(0, a.text.length - 3))), this.textArr.splice(this.textArr.length - 1, 1), this._addTextLine(a.text + gh));
  }
  getStrokeScaleEnabled() {
    return !0;
  }
  _useBufferCanvas() {
    const e = this.textDecoration().indexOf("underline") !== -1 || this.textDecoration().indexOf("line-through") !== -1, n = this.hasShadow();
    return e && n ? !0 : super._useBufferCanvas();
  }
}
vo.Text = ut;
ut.prototype._fillFunc = l7;
ut.prototype._strokeFunc = a7;
ut.prototype.className = Z9;
ut.prototype._attrsAffectingSize = [
  "text",
  "fontSize",
  "padding",
  "wrap",
  "lineHeight",
  "letterSpacing"
];
(0, X9._registerNode)(ut);
Yt.Factory.overWriteSetter(ut, "width", (0, ki.getNumberOrAutoValidator)());
Yt.Factory.overWriteSetter(ut, "height", (0, ki.getNumberOrAutoValidator)());
Yt.Factory.addGetterSetter(ut, "direction", J3);
Yt.Factory.addGetterSetter(ut, "fontFamily", "Arial");
Yt.Factory.addGetterSetter(ut, "fontSize", 12, (0, ki.getNumberValidator)());
Yt.Factory.addGetterSetter(ut, "fontStyle", t4);
Yt.Factory.addGetterSetter(ut, "fontVariant", t4);
Yt.Factory.addGetterSetter(ut, "padding", 0, (0, ki.getNumberValidator)());
Yt.Factory.addGetterSetter(ut, "align", e4);
Yt.Factory.addGetterSetter(ut, "verticalAlign", J9);
Yt.Factory.addGetterSetter(ut, "lineHeight", 1, (0, ki.getNumberValidator)());
Yt.Factory.addGetterSetter(ut, "wrap", r7);
Yt.Factory.addGetterSetter(ut, "ellipsis", !1, (0, ki.getBooleanValidator)());
Yt.Factory.addGetterSetter(ut, "letterSpacing", 0, (0, ki.getNumberValidator)());
Yt.Factory.addGetterSetter(ut, "text", "", (0, ki.getStringValidator)());
Yt.Factory.addGetterSetter(ut, "textDecoration", "");
var Wc = {};
Object.defineProperty(Wc, "__esModule", { value: !0 });
Wc.TextPath = void 0;
const yh = st, Jn = xe, c7 = xt, $o = mo, vh = vo, r4 = fe, d7 = Se, f7 = "", i4 = "normal";
function s4(t) {
  t.fillText(this.partialText, 0, 0);
}
function o4(t) {
  t.strokeText(this.partialText, 0, 0);
}
class Ct extends c7.Shape {
  constructor(e) {
    super(e), this.dummyCanvas = yh.Util.createCanvasElement(), this.dataArray = [], this._readDataAttribute(), this.on("dataChange.konva", function() {
      this._readDataAttribute(), this._setTextData();
    }), this.on("textChange.konva alignChange.konva letterSpacingChange.konva kerningFuncChange.konva fontSizeChange.konva fontFamilyChange.konva", this._setTextData), this._setTextData();
  }
  _getTextPathLength() {
    return $o.Path.getPathLength(this.dataArray);
  }
  _getPointAtLength(e) {
    if (!this.attrs.data)
      return null;
    const n = this.pathLength;
    return e - 1 > n ? null : $o.Path.getPointAtLengthOfDataArray(e, this.dataArray);
  }
  _readDataAttribute() {
    this.dataArray = $o.Path.parsePathData(this.attrs.data), this.pathLength = this._getTextPathLength();
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
    return yh.Util.warn("text.getTextHeight() method is deprecated. Use text.height() - for full height and text.fontSize() - for one line height."), this.textHeight;
  }
  setText(e) {
    return vh.Text.prototype.setText.call(this, e);
  }
  _getContextFont() {
    return vh.Text.prototype._getContextFont.call(this);
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
    const d = (0, vh.stringToArray)(this.text());
    let g = c;
    for (let y = 0; y < d.length; y++) {
      const w = this._getPointAtLength(g);
      if (!w)
        return;
      let _ = this._getTextSize(d[y]).width + r;
      if (d[y] === " " && o === "justify") {
        const x = this.text().split(" ").length - 1;
        _ += (this.pathLength - a) / x;
      }
      const C = this._getPointAtLength(g + _);
      if (!C)
        return;
      const v = $o.Path.getLineLength(w.x, w.y, C.x, C.y);
      let E = 0;
      if (l)
        try {
          E = l(d[y - 1], d[y]) * this.fontSize();
        } catch {
          E = 0;
        }
      w.x += E, C.x += E, this.textWidth += E;
      const R = $o.Path.getPointOnLine(E + v / 2, w.x, w.y, C.x, C.y), k = Math.atan2(C.y - w.y, C.x - w.x);
      this.glyphInfo.push({
        transposeX: R.x,
        transposeY: R.y,
        text: d[y],
        rotation: k,
        p0: w,
        p1: C
      }), g += _;
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
    return yh.Util.releaseCanvas(this.dummyCanvas), super.destroy();
  }
}
Wc.TextPath = Ct;
Ct.prototype._fillFunc = s4;
Ct.prototype._strokeFunc = o4;
Ct.prototype._fillFuncHit = s4;
Ct.prototype._strokeFuncHit = o4;
Ct.prototype.className = "TextPath";
Ct.prototype._attrsAffectingSize = ["text", "fontSize", "data"];
(0, d7._registerNode)(Ct);
Jn.Factory.addGetterSetter(Ct, "data");
Jn.Factory.addGetterSetter(Ct, "fontFamily", "Arial");
Jn.Factory.addGetterSetter(Ct, "fontSize", 12, (0, r4.getNumberValidator)());
Jn.Factory.addGetterSetter(Ct, "fontStyle", i4);
Jn.Factory.addGetterSetter(Ct, "align", "left");
Jn.Factory.addGetterSetter(Ct, "letterSpacing", 0, (0, r4.getNumberValidator)());
Jn.Factory.addGetterSetter(Ct, "textBaseline", "middle");
Jn.Factory.addGetterSetter(Ct, "fontVariant", i4);
Jn.Factory.addGetterSetter(Ct, "text", f7);
Jn.Factory.addGetterSetter(Ct, "textDecoration", "");
Jn.Factory.addGetterSetter(Ct, "kerningFunc", void 0);
var Yc = {};
Object.defineProperty(Yc, "__esModule", { value: !0 });
Yc.Transformer = void 0;
const Ue = st, Oe = xe, H2 = Je, h7 = xt, p7 = jl, j2 = po, Yn = Se, Ei = fe, g7 = Se, l4 = "tr-konva", m7 = [
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
].map((t) => t + `.${l4}`).join(" "), W2 = "nodesRect", y7 = [
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
], v7 = {
  "top-left": -45,
  "top-center": 0,
  "top-right": 45,
  "middle-right": -90,
  "middle-left": 90,
  "bottom-left": -135,
  "bottom-center": 180,
  "bottom-right": 135
}, _7 = "ontouchstart" in Yn.Konva._global;
function S7(t, e, n) {
  if (t === "rotater")
    return n;
  e += Ue.Util.degToRad(v7[t] || 0);
  const r = (Ue.Util.radToDeg(e) % 360 + 360) % 360;
  return Ue.Util._inRange(r, 315 + 22.5, 360) || Ue.Util._inRange(r, 0, 22.5) ? "ns-resize" : Ue.Util._inRange(r, 45 - 22.5, 45 + 22.5) ? "nesw-resize" : Ue.Util._inRange(r, 90 - 22.5, 90 + 22.5) ? "ew-resize" : Ue.Util._inRange(r, 135 - 22.5, 135 + 22.5) ? "nwse-resize" : Ue.Util._inRange(r, 180 - 22.5, 180 + 22.5) ? "ns-resize" : Ue.Util._inRange(r, 225 - 22.5, 225 + 22.5) ? "nesw-resize" : Ue.Util._inRange(r, 270 - 22.5, 270 + 22.5) ? "ew-resize" : Ue.Util._inRange(r, 315 - 22.5, 315 + 22.5) ? "nwse-resize" : (Ue.Util.error("Transformer has unknown angle for cursor detection: " + r), "pointer");
}
const ic = [
  "top-left",
  "top-center",
  "top-right",
  "middle-right",
  "middle-left",
  "bottom-left",
  "bottom-center",
  "bottom-right"
];
function w7(t) {
  return {
    x: t.x + t.width / 2 * Math.cos(t.rotation) + t.height / 2 * Math.sin(-t.rotation),
    y: t.y + t.height / 2 * Math.cos(t.rotation) + t.width / 2 * Math.sin(t.rotation)
  };
}
function a4(t, e, n) {
  const r = n.x + (t.x - n.x) * Math.cos(e) - (t.y - n.y) * Math.sin(e), o = n.y + (t.x - n.x) * Math.sin(e) + (t.y - n.y) * Math.cos(e);
  return {
    ...t,
    rotation: t.rotation + e,
    x: r,
    y: o
  };
}
function x7(t, e) {
  const n = w7(t);
  return a4(t, e, n);
}
function C7(t, e, n) {
  let r = e;
  for (let o = 0; o < t.length; o++) {
    const l = Yn.Konva.getAngle(t[o]), a = Math.abs(l - e) % (Math.PI * 2);
    Math.min(a, Math.PI * 2 - a) < n && (r = l);
  }
  return r;
}
let w0 = 0, Te = class extends j2.Group {
  constructor(e) {
    super(e), this._movingAnchorName = null, this._transforming = !1, this._createElements(), this._handleMouseMove = this._handleMouseMove.bind(this), this._handleMouseUp = this._handleMouseUp.bind(this), this.update = this.update.bind(this), this.on(m7, this.update), this.getNode() && this.update();
  }
  attachTo(e) {
    return this.setNode(e), this;
  }
  setNode(e) {
    return Ue.Util.warn("tr.setNode(shape), tr.node(shape) and tr.attachTo(shape) methods are deprecated. Please use tr.nodes(nodesArray) instead."), this.setNodes([e]);
  }
  getNode() {
    return this._nodes && this._nodes[0];
  }
  _getEventNamespace() {
    return l4 + this._id;
  }
  setNodes(e = []) {
    this._nodes && this._nodes.length && this.detach();
    const n = e.filter((o) => o.isAncestorOf(this) ? (Ue.Util.error("Konva.Transformer cannot be an a child of the node you are trying to attach"), !1) : !0);
    return this._nodes = e = n, e.length === 1 && this.useSingleNodeRotation() ? this.rotation(e[0].getAbsoluteRotation()) : this.rotation(0), this._nodes.forEach((o) => {
      const l = () => {
        this.nodes().length === 1 && this.useSingleNodeRotation() && this.rotation(this.nodes()[0].getAbsoluteRotation()), this._resetTransformCache(), !this._transforming && !this.isDragging() && this.update();
      };
      if (o._attrsAffectingSize.length) {
        const a = o._attrsAffectingSize.map((c) => c + "Change." + this._getEventNamespace()).join(" ");
        o.on(a, l);
      }
      o.on(y7.map((a) => a + `.${this._getEventNamespace()}`).join(" "), l), o.on(`absoluteTransformChange.${this._getEventNamespace()}`, l), this._proxyDrag(o);
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
    this._clearCache(W2), this._clearCache("transform"), this._clearSelfAndDescendantCache("absoluteTransform");
  }
  _getNodeRect() {
    return this._getCache(W2, this.__getNodeRect);
  }
  __getNodeShape(e, n = this.rotation(), r) {
    const o = e.getClientRect({
      skipTransform: !0,
      skipShadow: !0,
      skipStroke: this.ignoreStroke()
    }), l = e.getAbsoluteScale(r), a = e.getAbsolutePosition(r), c = o.x * l.x - e.offsetX() * l.x, d = o.y * l.y - e.offsetY() * l.y, g = (Yn.Konva.getAngle(e.getAbsoluteRotation()) + Math.PI * 2) % (Math.PI * 2), y = {
      x: a.x + c * Math.cos(g) + d * Math.sin(-g),
      y: a.y + d * Math.cos(g) + c * Math.sin(g),
      width: o.width * l.x,
      height: o.height * l.y,
      rotation: g
    };
    return a4(y, -Yn.Konva.getAngle(n), {
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
      }), w = [
        { x: y.x, y: y.y },
        { x: y.x + y.width, y: y.y },
        { x: y.x + y.width, y: y.y + y.height },
        { x: y.x, y: y.y + y.height }
      ], _ = g.getAbsoluteTransform();
      w.forEach(function(C) {
        const v = _.point(C);
        n.push(v);
      });
    });
    const r = new Ue.Transform();
    r.rotate(-Yn.Konva.getAngle(this.rotation()));
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
      rotation: Yn.Konva.getAngle(this.rotation())
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
    this._createBack(), ic.forEach((e) => {
      this._createAnchor(e);
    }), this._createAnchor("rotater");
  }
  _createAnchor(e) {
    const n = new p7.Rect({
      stroke: "rgb(0, 161, 255)",
      fill: "white",
      strokeWidth: 1,
      name: e + " _anchor",
      dragDistance: 0,
      draggable: !0,
      hitStrokeWidth: _7 ? 10 : "auto"
    }), r = this;
    n.on("mousedown touchstart", function(o) {
      r._handleMouseDown(o);
    }), n.on("dragstart", (o) => {
      n.stopDrag(), o.cancelBubble = !0;
    }), n.on("dragend", (o) => {
      o.cancelBubble = !0;
    }), n.on("mouseenter", () => {
      const o = Yn.Konva.getAngle(this.rotation()), l = this.rotateAnchorCursor(), a = S7(e, o, l);
      n.getStage().content && (n.getStage().content.style.cursor = a), this._cursorChange = !0;
    }), n.on("mouseout", () => {
      n.getStage().content && (n.getStage().content.style.cursor = ""), this._cursorChange = !1;
    }), this.add(n);
  }
  _createBack() {
    const e = new h7.Shape({
      name: "back",
      width: 0,
      height: 0,
      draggable: !0,
      sceneFunc(n, r) {
        const o = r.getParent(), l = o.padding();
        n.beginPath(), n.rect(-l, -l, r.width() + l * 2, r.height() + l * 2), n.moveTo(r.width() / 2, -l), o.rotateEnabled() && o.rotateLineVisible() && n.lineTo(r.width() / 2, -o.rotateAnchorOffset() * Ue.Util._sign(r.height()) - l), n.fillStrokeShape(r);
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
    }, w0++, this._fire("transformstart", { evt: e.evt, target: this.getNode() }), this._nodes.forEach((d) => {
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
      const x = this._getNodeRect();
      n = l.x() - x.width / 2, r = -l.y() + x.height / 2;
      let p = Math.atan2(-r, n) + Math.PI / 2;
      x.height < 0 && (p -= Math.PI);
      const N = Yn.Konva.getAngle(this.rotation()) + p, M = Yn.Konva.getAngle(this.rotationSnapTolerance()), T = C7(this.rotationSnaps(), N, M) - x.rotation, G = x7(x, T);
      this._fitNodesInto(G, e);
      return;
    }
    const w = this.shiftBehavior();
    let _;
    w === "inverted" ? _ = this.keepRatio() && !e.shiftKey : w === "none" ? _ = this.keepRatio() : _ = this.keepRatio() || e.shiftKey;
    let C = this.centeredScaling() || e.altKey;
    if (this._movingAnchorName === "top-left") {
      if (_) {
        const x = C ? {
          x: this.width() / 2,
          y: this.height() / 2
        } : {
          x: this.findOne(".bottom-right").x(),
          y: this.findOne(".bottom-right").y()
        };
        o = Math.sqrt(Math.pow(x.x - l.x(), 2) + Math.pow(x.y - l.y(), 2));
        const p = this.findOne(".top-left").x() > x.x ? -1 : 1, S = this.findOne(".top-left").y() > x.y ? -1 : 1;
        n = o * this.cos * p, r = o * this.sin * S, this.findOne(".top-left").x(x.x - n), this.findOne(".top-left").y(x.y - r);
      }
    } else if (this._movingAnchorName === "top-center")
      this.findOne(".top-left").y(l.y());
    else if (this._movingAnchorName === "top-right") {
      if (_) {
        const x = C ? {
          x: this.width() / 2,
          y: this.height() / 2
        } : {
          x: this.findOne(".bottom-left").x(),
          y: this.findOne(".bottom-left").y()
        };
        o = Math.sqrt(Math.pow(l.x() - x.x, 2) + Math.pow(x.y - l.y(), 2));
        const p = this.findOne(".top-right").x() < x.x ? -1 : 1, S = this.findOne(".top-right").y() > x.y ? -1 : 1;
        n = o * this.cos * p, r = o * this.sin * S, this.findOne(".top-right").x(x.x + n), this.findOne(".top-right").y(x.y - r);
      }
      var v = l.position();
      this.findOne(".top-left").y(v.y), this.findOne(".bottom-right").x(v.x);
    } else if (this._movingAnchorName === "middle-left")
      this.findOne(".top-left").x(l.x());
    else if (this._movingAnchorName === "middle-right")
      this.findOne(".bottom-right").x(l.x());
    else if (this._movingAnchorName === "bottom-left") {
      if (_) {
        const x = C ? {
          x: this.width() / 2,
          y: this.height() / 2
        } : {
          x: this.findOne(".top-right").x(),
          y: this.findOne(".top-right").y()
        };
        o = Math.sqrt(Math.pow(x.x - l.x(), 2) + Math.pow(l.y() - x.y, 2));
        const p = x.x < l.x() ? -1 : 1, S = l.y() < x.y ? -1 : 1;
        n = o * this.cos * p, r = o * this.sin * S, l.x(x.x - n), l.y(x.y + r);
      }
      v = l.position(), this.findOne(".top-left").x(v.x), this.findOne(".bottom-right").y(v.y);
    } else if (this._movingAnchorName === "bottom-center")
      this.findOne(".bottom-right").y(l.y());
    else if (this._movingAnchorName === "bottom-right") {
      if (_) {
        const x = C ? {
          x: this.width() / 2,
          y: this.height() / 2
        } : {
          x: this.findOne(".top-left").x(),
          y: this.findOne(".top-left").y()
        };
        o = Math.sqrt(Math.pow(l.x() - x.x, 2) + Math.pow(l.y() - x.y, 2));
        const p = this.findOne(".bottom-right").x() < x.x ? -1 : 1, S = this.findOne(".bottom-right").y() < x.y ? -1 : 1;
        n = o * this.cos * p, r = o * this.sin * S, this.findOne(".bottom-right").x(x.x + n), this.findOne(".bottom-right").y(x.y + r);
      }
    } else
      console.error(new Error("Wrong position argument of selection resizer: " + this._movingAnchorName));
    if (C = this.centeredScaling() || e.altKey, C) {
      const x = this.findOne(".top-left"), p = this.findOne(".bottom-right"), S = x.x(), N = x.y(), M = this.getWidth() - p.x(), A = this.getHeight() - p.y();
      p.move({
        x: -S,
        y: -N
      }), x.move({
        x: M,
        y: A
      });
    }
    const E = this.findOne(".top-left").getAbsolutePosition();
    n = E.x, r = E.y;
    const R = this.findOne(".bottom-right").x() - this.findOne(".top-left").x(), k = this.findOne(".bottom-right").y() - this.findOne(".top-left").y();
    this._fitNodesInto({
      x: n,
      y: r,
      width: R,
      height: k,
      rotation: Yn.Konva.getAngle(this.rotation())
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
      w0--, this._fire("transformend", { evt: e, target: r }), (n = this.getLayer()) === null || n === void 0 || n.batchDraw(), r && this._nodes.forEach((o) => {
        var l;
        o._fire("transformend", { evt: e, target: o }), (l = o.getLayer()) === null || l === void 0 || l.batchDraw();
      }), this._movingAnchorName = null;
    }
  }
  _fitNodesInto(e, n) {
    const r = this._getNodeRect(), o = 1;
    if (Ue.Util._inRange(e.width, -this.padding() * 2 - o, o)) {
      this.update();
      return;
    }
    if (Ue.Util._inRange(e.height, -this.padding() * 2 - o, o)) {
      this.update();
      return;
    }
    const l = new Ue.Transform();
    if (l.rotate(Yn.Konva.getAngle(this.rotation())), this._movingAnchorName && e.width < 0 && this._movingAnchorName.indexOf("left") >= 0) {
      const _ = l.point({
        x: -this.padding() * 2,
        y: 0
      });
      e.x += _.x, e.y += _.y, e.width += this.padding() * 2, this._movingAnchorName = this._movingAnchorName.replace("left", "right"), this._anchorDragOffset.x -= _.x, this._anchorDragOffset.y -= _.y;
    } else if (this._movingAnchorName && e.width < 0 && this._movingAnchorName.indexOf("right") >= 0) {
      const _ = l.point({
        x: this.padding() * 2,
        y: 0
      });
      this._movingAnchorName = this._movingAnchorName.replace("right", "left"), this._anchorDragOffset.x -= _.x, this._anchorDragOffset.y -= _.y, e.width += this.padding() * 2;
    }
    if (this._movingAnchorName && e.height < 0 && this._movingAnchorName.indexOf("top") >= 0) {
      const _ = l.point({
        x: 0,
        y: -this.padding() * 2
      });
      e.x += _.x, e.y += _.y, this._movingAnchorName = this._movingAnchorName.replace("top", "bottom"), this._anchorDragOffset.x -= _.x, this._anchorDragOffset.y -= _.y, e.height += this.padding() * 2;
    } else if (this._movingAnchorName && e.height < 0 && this._movingAnchorName.indexOf("bottom") >= 0) {
      const _ = l.point({
        x: 0,
        y: this.padding() * 2
      });
      this._movingAnchorName = this._movingAnchorName.replace("bottom", "top"), this._anchorDragOffset.x -= _.x, this._anchorDragOffset.y -= _.y, e.height += this.padding() * 2;
    }
    if (this.boundBoxFunc()) {
      const _ = this.boundBoxFunc()(r, e);
      _ ? e = _ : Ue.Util.warn("boundBoxFunc returned falsy. You should return new bound rect from it!");
    }
    const a = 1e7, c = new Ue.Transform();
    c.translate(r.x, r.y), c.rotate(r.rotation), c.scale(r.width / a, r.height / a);
    const d = new Ue.Transform(), g = e.width / a, y = e.height / a;
    this.flipEnabled() === !1 ? (d.translate(e.x, e.y), d.rotate(e.rotation), d.translate(e.width < 0 ? e.width : 0, e.height < 0 ? e.height : 0), d.scale(Math.abs(g), Math.abs(y))) : (d.translate(e.x, e.y), d.rotate(e.rotation), d.scale(g, y));
    const w = d.multiply(c.invert());
    this._nodes.forEach((_) => {
      var C;
      const v = _.getParent().getAbsoluteTransform(), E = _.getTransform().copy();
      E.translate(_.offsetX(), _.offsetY());
      const R = new Ue.Transform();
      R.multiply(v.copy().invert()).multiply(w).multiply(v).multiply(E);
      const k = R.decompose();
      _.setAttrs(k), (C = _.getLayer()) === null || C === void 0 || C.batchDraw();
    }), this.rotation(Ue.Util._getRotation(e.rotation)), this._nodes.forEach((_) => {
      this._fire("transform", { evt: n, target: _ }), _._fire("transform", { evt: n, target: _ });
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
    this.rotation(Ue.Util._getRotation(n.rotation));
    const r = n.width, o = n.height, l = this.enabledAnchors(), a = this.resizeEnabled(), c = this.padding(), d = this.anchorSize(), g = this.find("._anchor");
    g.forEach((w) => {
      w.setAttrs({
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
      y: -this.rotateAnchorOffset() * Ue.Util._sign(o) - c,
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
    y && g.forEach((w) => {
      y(w);
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
    return this.getStage() && this._cursorChange && this.getStage().content && (this.getStage().content.style.cursor = ""), j2.Group.prototype.destroy.call(this), this.detach(), this._removeEvents(), this;
  }
  toObject() {
    return H2.Node.prototype.toObject.call(this);
  }
  clone(e) {
    return H2.Node.prototype.clone.call(this, e);
  }
  getClientRect() {
    return this.nodes().length > 0 ? super.getClientRect() : { x: 0, y: 0, width: 0, height: 0 };
  }
};
Yc.Transformer = Te;
Te.isTransforming = () => w0 > 0;
function k7(t) {
  return t instanceof Array || Ue.Util.warn("enabledAnchors value should be an array"), t instanceof Array && t.forEach(function(e) {
    ic.indexOf(e) === -1 && Ue.Util.warn("Unknown anchor name: " + e + ". Available names are: " + ic.join(", "));
  }), t || [];
}
Te.prototype.className = "Transformer";
(0, g7._registerNode)(Te);
Oe.Factory.addGetterSetter(Te, "enabledAnchors", ic, k7);
Oe.Factory.addGetterSetter(Te, "flipEnabled", !0, (0, Ei.getBooleanValidator)());
Oe.Factory.addGetterSetter(Te, "resizeEnabled", !0);
Oe.Factory.addGetterSetter(Te, "anchorSize", 10, (0, Ei.getNumberValidator)());
Oe.Factory.addGetterSetter(Te, "rotateEnabled", !0);
Oe.Factory.addGetterSetter(Te, "rotateLineVisible", !0);
Oe.Factory.addGetterSetter(Te, "rotationSnaps", []);
Oe.Factory.addGetterSetter(Te, "rotateAnchorOffset", 50, (0, Ei.getNumberValidator)());
Oe.Factory.addGetterSetter(Te, "rotateAnchorCursor", "crosshair");
Oe.Factory.addGetterSetter(Te, "rotationSnapTolerance", 5, (0, Ei.getNumberValidator)());
Oe.Factory.addGetterSetter(Te, "borderEnabled", !0);
Oe.Factory.addGetterSetter(Te, "anchorStroke", "rgb(0, 161, 255)");
Oe.Factory.addGetterSetter(Te, "anchorStrokeWidth", 1, (0, Ei.getNumberValidator)());
Oe.Factory.addGetterSetter(Te, "anchorFill", "white");
Oe.Factory.addGetterSetter(Te, "anchorCornerRadius", 0, (0, Ei.getNumberValidator)());
Oe.Factory.addGetterSetter(Te, "borderStroke", "rgb(0, 161, 255)");
Oe.Factory.addGetterSetter(Te, "borderStrokeWidth", 1, (0, Ei.getNumberValidator)());
Oe.Factory.addGetterSetter(Te, "borderDash");
Oe.Factory.addGetterSetter(Te, "keepRatio", !0);
Oe.Factory.addGetterSetter(Te, "shiftBehavior", "default");
Oe.Factory.addGetterSetter(Te, "centeredScaling", !1);
Oe.Factory.addGetterSetter(Te, "ignoreStroke", !1);
Oe.Factory.addGetterSetter(Te, "padding", 0, (0, Ei.getNumberValidator)());
Oe.Factory.addGetterSetter(Te, "nodes");
Oe.Factory.addGetterSetter(Te, "node");
Oe.Factory.addGetterSetter(Te, "boundBoxFunc");
Oe.Factory.addGetterSetter(Te, "anchorDragBoundFunc");
Oe.Factory.addGetterSetter(Te, "anchorStyleFunc");
Oe.Factory.addGetterSetter(Te, "shouldOverdrawWholeArea", !1);
Oe.Factory.addGetterSetter(Te, "useSingleNodeRotation", !0);
Oe.Factory.backCompat(Te, {
  lineEnabled: "borderEnabled",
  rotateHandlerOffset: "rotateAnchorOffset",
  enabledHandlers: "enabledAnchors"
});
var Kc = {};
Object.defineProperty(Kc, "__esModule", { value: !0 });
Kc.Wedge = void 0;
const Xc = xe, E7 = xt, P7 = Se, u4 = fe, T7 = Se;
class Ur extends E7.Shape {
  _sceneFunc(e) {
    e.beginPath(), e.arc(0, 0, this.radius(), 0, P7.Konva.getAngle(this.angle()), this.clockwise()), e.lineTo(0, 0), e.closePath(), e.fillStrokeShape(this);
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
Kc.Wedge = Ur;
Ur.prototype.className = "Wedge";
Ur.prototype._centroid = !0;
Ur.prototype._attrsAffectingSize = ["radius"];
(0, T7._registerNode)(Ur);
Xc.Factory.addGetterSetter(Ur, "radius", 0, (0, u4.getNumberValidator)());
Xc.Factory.addGetterSetter(Ur, "angle", 0, (0, u4.getNumberValidator)());
Xc.Factory.addGetterSetter(Ur, "clockwise", !1);
Xc.Factory.backCompat(Ur, {
  angleDeg: "angle",
  getAngleDeg: "getAngle",
  setAngleDeg: "setAngle"
});
var $c = {};
Object.defineProperty($c, "__esModule", { value: !0 });
$c.Blur = void 0;
const Y2 = xe, N7 = Je, R7 = fe;
function K2() {
  this.r = 0, this.g = 0, this.b = 0, this.a = 0, this.next = null;
}
const M7 = [
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
], F7 = [
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
function L7(t, e) {
  const n = t.data, r = t.width, o = t.height;
  let l, a, c, d, g, y, w, _, C, v, E, R, k, x, p, S, N, M, A, T;
  const G = e + e + 1, F = r - 1, V = o - 1, j = e + 1, q = j * (j + 1) / 2, D = new K2(), X = M7[e], he = F7[e];
  let de = null, H = D, Z = null, Q = null;
  for (let b = 1; b < G; b++)
    H = H.next = new K2(), b === j && (de = H);
  H.next = D, c = a = 0;
  for (let b = 0; b < o; b++) {
    R = k = x = p = d = g = y = w = 0, _ = j * (S = n[a]), C = j * (N = n[a + 1]), v = j * (M = n[a + 2]), E = j * (A = n[a + 3]), d += q * S, g += q * N, y += q * M, w += q * A, H = D;
    for (let se = 0; se < j; se++)
      H.r = S, H.g = N, H.b = M, H.a = A, H = H.next;
    for (let se = 1; se < j; se++)
      l = a + ((F < se ? F : se) << 2), d += (H.r = S = n[l]) * (T = j - se), g += (H.g = N = n[l + 1]) * T, y += (H.b = M = n[l + 2]) * T, w += (H.a = A = n[l + 3]) * T, R += S, k += N, x += M, p += A, H = H.next;
    Z = D, Q = de;
    for (let se = 0; se < r; se++)
      n[a + 3] = A = w * X >> he, A !== 0 ? (A = 255 / A, n[a] = (d * X >> he) * A, n[a + 1] = (g * X >> he) * A, n[a + 2] = (y * X >> he) * A) : n[a] = n[a + 1] = n[a + 2] = 0, d -= _, g -= C, y -= v, w -= E, _ -= Z.r, C -= Z.g, v -= Z.b, E -= Z.a, l = c + ((l = se + e + 1) < F ? l : F) << 2, R += Z.r = n[l], k += Z.g = n[l + 1], x += Z.b = n[l + 2], p += Z.a = n[l + 3], d += R, g += k, y += x, w += p, Z = Z.next, _ += S = Q.r, C += N = Q.g, v += M = Q.b, E += A = Q.a, R -= S, k -= N, x -= M, p -= A, Q = Q.next, a += 4;
    c += r;
  }
  for (let b = 0; b < r; b++) {
    k = x = p = R = g = y = w = d = 0, a = b << 2, _ = j * (S = n[a]), C = j * (N = n[a + 1]), v = j * (M = n[a + 2]), E = j * (A = n[a + 3]), d += q * S, g += q * N, y += q * M, w += q * A, H = D;
    for (let Ne = 0; Ne < j; Ne++)
      H.r = S, H.g = N, H.b = M, H.a = A, H = H.next;
    let se = r;
    for (let Ne = 1; Ne <= e; Ne++)
      a = se + b << 2, d += (H.r = S = n[a]) * (T = j - Ne), g += (H.g = N = n[a + 1]) * T, y += (H.b = M = n[a + 2]) * T, w += (H.a = A = n[a + 3]) * T, R += S, k += N, x += M, p += A, H = H.next, Ne < V && (se += r);
    a = b, Z = D, Q = de;
    for (let Ne = 0; Ne < o; Ne++)
      l = a << 2, n[l + 3] = A = w * X >> he, A > 0 ? (A = 255 / A, n[l] = (d * X >> he) * A, n[l + 1] = (g * X >> he) * A, n[l + 2] = (y * X >> he) * A) : n[l] = n[l + 1] = n[l + 2] = 0, d -= _, g -= C, y -= v, w -= E, _ -= Z.r, C -= Z.g, v -= Z.b, E -= Z.a, l = b + ((l = Ne + j) < V ? l : V) * r << 2, d += R += Z.r = n[l], g += k += Z.g = n[l + 1], y += x += Z.b = n[l + 2], w += p += Z.a = n[l + 3], Z = Z.next, _ += S = Q.r, C += N = Q.g, v += M = Q.b, E += A = Q.a, R -= S, k -= N, x -= M, p -= A, Q = Q.next, a += r;
  }
}
const A7 = function(e) {
  const n = Math.round(this.blurRadius());
  n > 0 && L7(e, n);
};
$c.Blur = A7;
Y2.Factory.addGetterSetter(N7.Node, "blurRadius", 0, (0, R7.getNumberValidator)(), Y2.Factory.afterSetFilter);
var Qc = {};
Object.defineProperty(Qc, "__esModule", { value: !0 });
Qc.Brighten = void 0;
const X2 = xe, O7 = Je, I7 = fe, D7 = function(t) {
  const e = this.brightness() * 255, n = t.data, r = n.length;
  for (let o = 0; o < r; o += 4)
    n[o] += e, n[o + 1] += e, n[o + 2] += e;
};
Qc.Brighten = D7;
X2.Factory.addGetterSetter(O7.Node, "brightness", 0, (0, I7.getNumberValidator)(), X2.Factory.afterSetFilter);
var bc = {};
Object.defineProperty(bc, "__esModule", { value: !0 });
bc.Contrast = void 0;
const $2 = xe, z7 = Je, G7 = fe, U7 = function(t) {
  const e = Math.pow((this.contrast() + 100) / 100, 2), n = t.data, r = n.length;
  let o = 150, l = 150, a = 150;
  for (let c = 0; c < r; c += 4)
    o = n[c], l = n[c + 1], a = n[c + 2], o /= 255, o -= 0.5, o *= e, o += 0.5, o *= 255, l /= 255, l -= 0.5, l *= e, l += 0.5, l *= 255, a /= 255, a -= 0.5, a *= e, a += 0.5, a *= 255, o = o < 0 ? 0 : o > 255 ? 255 : o, l = l < 0 ? 0 : l > 255 ? 255 : l, a = a < 0 ? 0 : a > 255 ? 255 : a, n[c] = o, n[c + 1] = l, n[c + 2] = a;
};
bc.Contrast = U7;
$2.Factory.addGetterSetter(z7.Node, "contrast", 0, (0, G7.getNumberValidator)(), $2.Factory.afterSetFilter);
var qc = {};
Object.defineProperty(qc, "__esModule", { value: !0 });
qc.Emboss = void 0;
const mi = xe, Zc = Je, B7 = st, c4 = fe, V7 = function(t) {
  const e = this.embossStrength() * 10, n = this.embossWhiteLevel() * 255, r = this.embossDirection(), o = this.embossBlend(), l = t.data, a = t.width, c = t.height, d = a * 4;
  let g = 0, y = 0, w = c;
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
      B7.Util.error("Unknown emboss direction: " + r);
  }
  do {
    const _ = (w - 1) * d;
    let C = g;
    w + C < 1 && (C = 0), w + C > c && (C = 0);
    const v = (w - 1 + C) * a * 4;
    let E = a;
    do {
      const R = _ + (E - 1) * 4;
      let k = y;
      E + k < 1 && (k = 0), E + k > a && (k = 0);
      const x = v + (E - 1 + k) * 4, p = l[R] - l[x], S = l[R + 1] - l[x + 1], N = l[R + 2] - l[x + 2];
      let M = p;
      const A = M > 0 ? M : -M, T = S > 0 ? S : -S, G = N > 0 ? N : -N;
      if (T > A && (M = S), G > A && (M = N), M *= e, o) {
        const F = l[R] + M, V = l[R + 1] + M, j = l[R + 2] + M;
        l[R] = F > 255 ? 255 : F < 0 ? 0 : F, l[R + 1] = V > 255 ? 255 : V < 0 ? 0 : V, l[R + 2] = j > 255 ? 255 : j < 0 ? 0 : j;
      } else {
        let F = n - M;
        F < 0 ? F = 0 : F > 255 && (F = 255), l[R] = l[R + 1] = l[R + 2] = F;
      }
    } while (--E);
  } while (--w);
};
qc.Emboss = V7;
mi.Factory.addGetterSetter(Zc.Node, "embossStrength", 0.5, (0, c4.getNumberValidator)(), mi.Factory.afterSetFilter);
mi.Factory.addGetterSetter(Zc.Node, "embossWhiteLevel", 0.5, (0, c4.getNumberValidator)(), mi.Factory.afterSetFilter);
mi.Factory.addGetterSetter(Zc.Node, "embossDirection", "top-left", void 0, mi.Factory.afterSetFilter);
mi.Factory.addGetterSetter(Zc.Node, "embossBlend", !1, void 0, mi.Factory.afterSetFilter);
var Jc = {};
Object.defineProperty(Jc, "__esModule", { value: !0 });
Jc.Enhance = void 0;
const Q2 = xe, H7 = Je, j7 = fe;
function _h(t, e, n, r, o) {
  const l = n - e, a = o - r;
  if (l === 0)
    return r + a / 2;
  if (a === 0)
    return r;
  let c = (t - e) / l;
  return c = a * c + r, c;
}
const W7 = function(t) {
  const e = t.data, n = e.length;
  let r = e[0], o = r, l, a = e[1], c = a, d, g = e[2], y = g, w;
  const _ = this.enhance();
  if (_ === 0)
    return;
  for (let p = 0; p < n; p += 4)
    l = e[p + 0], l < r ? r = l : l > o && (o = l), d = e[p + 1], d < a ? a = d : d > c && (c = d), w = e[p + 2], w < g ? g = w : w > y && (y = w);
  o === r && (o = 255, r = 0), c === a && (c = 255, a = 0), y === g && (y = 255, g = 0);
  let C, v, E, R, k, x;
  if (_ > 0)
    C = o + _ * (255 - o), v = r - _ * (r - 0), E = c + _ * (255 - c), R = a - _ * (a - 0), k = y + _ * (255 - y), x = g - _ * (g - 0);
  else {
    const p = (o + r) * 0.5;
    C = o + _ * (o - p), v = r + _ * (r - p);
    const S = (c + a) * 0.5;
    E = c + _ * (c - S), R = a + _ * (a - S);
    const N = (y + g) * 0.5;
    k = y + _ * (y - N), x = g + _ * (g - N);
  }
  for (let p = 0; p < n; p += 4)
    e[p + 0] = _h(e[p + 0], r, o, v, C), e[p + 1] = _h(e[p + 1], a, c, R, E), e[p + 2] = _h(e[p + 2], g, y, x, k);
};
Jc.Enhance = W7;
Q2.Factory.addGetterSetter(H7.Node, "enhance", 0, (0, j7.getNumberValidator)(), Q2.Factory.afterSetFilter);
var ed = {};
Object.defineProperty(ed, "__esModule", { value: !0 });
ed.Grayscale = void 0;
const Y7 = function(t) {
  const e = t.data, n = e.length;
  for (let r = 0; r < n; r += 4) {
    const o = 0.34 * e[r] + 0.5 * e[r + 1] + 0.16 * e[r + 2];
    e[r] = o, e[r + 1] = o, e[r + 2] = o;
  }
};
ed.Grayscale = Y7;
var td = {};
Object.defineProperty(td, "__esModule", { value: !0 });
td.HSL = void 0;
const oo = xe, T1 = Je, N1 = fe;
oo.Factory.addGetterSetter(T1.Node, "hue", 0, (0, N1.getNumberValidator)(), oo.Factory.afterSetFilter);
oo.Factory.addGetterSetter(T1.Node, "saturation", 0, (0, N1.getNumberValidator)(), oo.Factory.afterSetFilter);
oo.Factory.addGetterSetter(T1.Node, "luminance", 0, (0, N1.getNumberValidator)(), oo.Factory.afterSetFilter);
const K7 = function(t) {
  const e = t.data, n = e.length, r = 1, o = Math.pow(2, this.saturation()), l = Math.abs(this.hue() + 360) % 360, a = this.luminance() * 127, c = r * o * Math.cos(l * Math.PI / 180), d = r * o * Math.sin(l * Math.PI / 180), g = 0.299 * r + 0.701 * c + 0.167 * d, y = 0.587 * r - 0.587 * c + 0.33 * d, w = 0.114 * r - 0.114 * c - 0.497 * d, _ = 0.299 * r - 0.299 * c - 0.328 * d, C = 0.587 * r + 0.413 * c + 0.035 * d, v = 0.114 * r - 0.114 * c + 0.293 * d, E = 0.299 * r - 0.3 * c + 1.25 * d, R = 0.587 * r - 0.586 * c - 1.05 * d, k = 0.114 * r + 0.886 * c - 0.2 * d;
  let x, p, S, N;
  for (let M = 0; M < n; M += 4)
    x = e[M + 0], p = e[M + 1], S = e[M + 2], N = e[M + 3], e[M + 0] = g * x + y * p + w * S + a, e[M + 1] = _ * x + C * p + v * S + a, e[M + 2] = E * x + R * p + k * S + a, e[M + 3] = N;
};
td.HSL = K7;
var nd = {};
Object.defineProperty(nd, "__esModule", { value: !0 });
nd.HSV = void 0;
const lo = xe, R1 = Je, M1 = fe, X7 = function(t) {
  const e = t.data, n = e.length, r = Math.pow(2, this.value()), o = Math.pow(2, this.saturation()), l = Math.abs(this.hue() + 360) % 360, a = r * o * Math.cos(l * Math.PI / 180), c = r * o * Math.sin(l * Math.PI / 180), d = 0.299 * r + 0.701 * a + 0.167 * c, g = 0.587 * r - 0.587 * a + 0.33 * c, y = 0.114 * r - 0.114 * a - 0.497 * c, w = 0.299 * r - 0.299 * a - 0.328 * c, _ = 0.587 * r + 0.413 * a + 0.035 * c, C = 0.114 * r - 0.114 * a + 0.293 * c, v = 0.299 * r - 0.3 * a + 1.25 * c, E = 0.587 * r - 0.586 * a - 1.05 * c, R = 0.114 * r + 0.886 * a - 0.2 * c;
  for (let k = 0; k < n; k += 4) {
    const x = e[k + 0], p = e[k + 1], S = e[k + 2], N = e[k + 3];
    e[k + 0] = d * x + g * p + y * S, e[k + 1] = w * x + _ * p + C * S, e[k + 2] = v * x + E * p + R * S, e[k + 3] = N;
  }
};
nd.HSV = X7;
lo.Factory.addGetterSetter(R1.Node, "hue", 0, (0, M1.getNumberValidator)(), lo.Factory.afterSetFilter);
lo.Factory.addGetterSetter(R1.Node, "saturation", 0, (0, M1.getNumberValidator)(), lo.Factory.afterSetFilter);
lo.Factory.addGetterSetter(R1.Node, "value", 0, (0, M1.getNumberValidator)(), lo.Factory.afterSetFilter);
var rd = {};
Object.defineProperty(rd, "__esModule", { value: !0 });
rd.Invert = void 0;
const $7 = function(t) {
  const e = t.data, n = e.length;
  for (let r = 0; r < n; r += 4)
    e[r] = 255 - e[r], e[r + 1] = 255 - e[r + 1], e[r + 2] = 255 - e[r + 2];
};
rd.Invert = $7;
var id = {};
Object.defineProperty(id, "__esModule", { value: !0 });
id.Kaleidoscope = void 0;
const sc = xe, d4 = Je, b2 = st, f4 = fe, Q7 = function(t, e, n) {
  const r = t.data, o = e.data, l = t.width, a = t.height, c = n.polarCenterX || l / 2, d = n.polarCenterY || a / 2;
  let g = Math.sqrt(c * c + d * d), y = l - c, w = a - d;
  const _ = Math.sqrt(y * y + w * w);
  g = _ > g ? _ : g;
  const C = a, v = l, E = 360 / v * Math.PI / 180;
  for (let R = 0; R < v; R += 1) {
    const k = Math.sin(R * E), x = Math.cos(R * E);
    for (let p = 0; p < C; p += 1) {
      y = Math.floor(c + g * p / C * x), w = Math.floor(d + g * p / C * k);
      let S = (w * l + y) * 4;
      const N = r[S + 0], M = r[S + 1], A = r[S + 2], T = r[S + 3];
      S = (R + p * l) * 4, o[S + 0] = N, o[S + 1] = M, o[S + 2] = A, o[S + 3] = T;
    }
  }
}, b7 = function(t, e, n) {
  const r = t.data, o = e.data, l = t.width, a = t.height, c = n.polarCenterX || l / 2, d = n.polarCenterY || a / 2;
  let g = Math.sqrt(c * c + d * d), y = l - c, w = a - d;
  const _ = Math.sqrt(y * y + w * w);
  g = _ > g ? _ : g;
  const C = a, v = l, E = 0;
  let R, k;
  for (y = 0; y < l; y += 1)
    for (w = 0; w < a; w += 1) {
      const x = y - c, p = w - d, S = Math.sqrt(x * x + p * p) * C / g;
      let N = (Math.atan2(p, x) * 180 / Math.PI + 360 + E) % 360;
      N = N * v / 360, R = Math.floor(N), k = Math.floor(S);
      let M = (k * l + R) * 4;
      const A = r[M + 0], T = r[M + 1], G = r[M + 2], F = r[M + 3];
      M = (w * l + y) * 4, o[M + 0] = A, o[M + 1] = T, o[M + 2] = G, o[M + 3] = F;
    }
}, q7 = function(t) {
  const e = t.width, n = t.height;
  let r, o, l, a, c, d, g, y, w, _, C = Math.round(this.kaleidoscopePower());
  const v = Math.round(this.kaleidoscopeAngle()), E = Math.floor(e * (v % 360) / 360);
  if (C < 1)
    return;
  const R = b2.Util.createCanvasElement();
  R.width = e, R.height = n;
  const k = R.getContext("2d").getImageData(0, 0, e, n);
  b2.Util.releaseCanvas(R), Q7(t, k, {
    polarCenterX: e / 2,
    polarCenterY: n / 2
  });
  let x = e / Math.pow(2, C);
  for (; x <= 8; )
    x = x * 2, C -= 1;
  x = Math.ceil(x);
  let p = x, S = 0, N = p, M = 1;
  for (E + x > e && (S = p, N = 0, M = -1), o = 0; o < n; o += 1)
    for (r = S; r !== N; r += M)
      l = Math.round(r + E) % e, w = (e * o + l) * 4, c = k.data[w + 0], d = k.data[w + 1], g = k.data[w + 2], y = k.data[w + 3], _ = (e * o + r) * 4, k.data[_ + 0] = c, k.data[_ + 1] = d, k.data[_ + 2] = g, k.data[_ + 3] = y;
  for (o = 0; o < n; o += 1)
    for (p = Math.floor(x), a = 0; a < C; a += 1) {
      for (r = 0; r < p + 1; r += 1)
        w = (e * o + r) * 4, c = k.data[w + 0], d = k.data[w + 1], g = k.data[w + 2], y = k.data[w + 3], _ = (e * o + p * 2 - r - 1) * 4, k.data[_ + 0] = c, k.data[_ + 1] = d, k.data[_ + 2] = g, k.data[_ + 3] = y;
      p *= 2;
    }
  b7(k, t, {});
};
id.Kaleidoscope = q7;
sc.Factory.addGetterSetter(d4.Node, "kaleidoscopePower", 2, (0, f4.getNumberValidator)(), sc.Factory.afterSetFilter);
sc.Factory.addGetterSetter(d4.Node, "kaleidoscopeAngle", 0, (0, f4.getNumberValidator)(), sc.Factory.afterSetFilter);
var sd = {};
Object.defineProperty(sd, "__esModule", { value: !0 });
sd.Mask = void 0;
const q2 = xe, Z7 = Je, J7 = fe;
function du(t, e, n) {
  let r = (n * t.width + e) * 4;
  const o = [];
  return o.push(t.data[r++], t.data[r++], t.data[r++], t.data[r++]), o;
}
function Qo(t, e) {
  return Math.sqrt(Math.pow(t[0] - e[0], 2) + Math.pow(t[1] - e[1], 2) + Math.pow(t[2] - e[2], 2));
}
function e_(t) {
  const e = [0, 0, 0];
  for (let n = 0; n < t.length; n++)
    e[0] += t[n][0], e[1] += t[n][1], e[2] += t[n][2];
  return e[0] /= t.length, e[1] /= t.length, e[2] /= t.length, e;
}
function t_(t, e) {
  const n = du(t, 0, 0), r = du(t, t.width - 1, 0), o = du(t, 0, t.height - 1), l = du(t, t.width - 1, t.height - 1), a = e || 10;
  if (Qo(n, r) < a && Qo(r, l) < a && Qo(l, o) < a && Qo(o, n) < a) {
    const c = e_([r, n, l, o]), d = [];
    for (let g = 0; g < t.width * t.height; g++) {
      const y = Qo(c, [
        t.data[g * 4],
        t.data[g * 4 + 1],
        t.data[g * 4 + 2]
      ]);
      d[g] = y < a ? 0 : 255;
    }
    return d;
  }
}
function n_(t, e) {
  for (let n = 0; n < t.width * t.height; n++)
    t.data[4 * n + 3] = e[n];
}
function r_(t, e, n) {
  const r = [1, 1, 1, 1, 0, 1, 1, 1, 1], o = Math.round(Math.sqrt(r.length)), l = Math.floor(o / 2), a = [];
  for (let c = 0; c < n; c++)
    for (let d = 0; d < e; d++) {
      const g = c * e + d;
      let y = 0;
      for (let w = 0; w < o; w++)
        for (let _ = 0; _ < o; _++) {
          const C = c + w - l, v = d + _ - l;
          if (C >= 0 && C < n && v >= 0 && v < e) {
            const E = C * e + v, R = r[w * o + _];
            y += t[E] * R;
          }
        }
      a[g] = y === 255 * 8 ? 255 : 0;
    }
  return a;
}
function i_(t, e, n) {
  const r = [1, 1, 1, 1, 1, 1, 1, 1, 1], o = Math.round(Math.sqrt(r.length)), l = Math.floor(o / 2), a = [];
  for (let c = 0; c < n; c++)
    for (let d = 0; d < e; d++) {
      const g = c * e + d;
      let y = 0;
      for (let w = 0; w < o; w++)
        for (let _ = 0; _ < o; _++) {
          const C = c + w - l, v = d + _ - l;
          if (C >= 0 && C < n && v >= 0 && v < e) {
            const E = C * e + v, R = r[w * o + _];
            y += t[E] * R;
          }
        }
      a[g] = y >= 255 * 4 ? 255 : 0;
    }
  return a;
}
function s_(t, e, n) {
  const r = [0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111], o = Math.round(Math.sqrt(r.length)), l = Math.floor(o / 2), a = [];
  for (let c = 0; c < n; c++)
    for (let d = 0; d < e; d++) {
      const g = c * e + d;
      let y = 0;
      for (let w = 0; w < o; w++)
        for (let _ = 0; _ < o; _++) {
          const C = c + w - l, v = d + _ - l;
          if (C >= 0 && C < n && v >= 0 && v < e) {
            const E = C * e + v, R = r[w * o + _];
            y += t[E] * R;
          }
        }
      a[g] = y;
    }
  return a;
}
const o_ = function(t) {
  const e = this.threshold();
  let n = t_(t, e);
  return n && (n = r_(n, t.width, t.height), n = i_(n, t.width, t.height), n = s_(n, t.width, t.height), n_(t, n)), t;
};
sd.Mask = o_;
q2.Factory.addGetterSetter(Z7.Node, "threshold", 0, (0, J7.getNumberValidator)(), q2.Factory.afterSetFilter);
var od = {};
Object.defineProperty(od, "__esModule", { value: !0 });
od.Noise = void 0;
const Z2 = xe, l_ = Je, a_ = fe, u_ = function(t) {
  const e = this.noise() * 255, n = t.data, r = n.length, o = e / 2;
  for (let l = 0; l < r; l += 4)
    n[l + 0] += o - 2 * o * Math.random(), n[l + 1] += o - 2 * o * Math.random(), n[l + 2] += o - 2 * o * Math.random();
};
od.Noise = u_;
Z2.Factory.addGetterSetter(l_.Node, "noise", 0.2, (0, a_.getNumberValidator)(), Z2.Factory.afterSetFilter);
var ld = {};
Object.defineProperty(ld, "__esModule", { value: !0 });
ld.Pixelate = void 0;
const J2 = xe, c_ = st, d_ = Je, f_ = fe, h_ = function(t) {
  let e = Math.ceil(this.pixelSize()), n = t.width, r = t.height, o = Math.ceil(n / e), l = Math.ceil(r / e), a = t.data;
  if (e <= 0) {
    c_.Util.error("pixelSize value can not be <= 0");
    return;
  }
  for (let c = 0; c < o; c += 1)
    for (let d = 0; d < l; d += 1) {
      let g = 0, y = 0, w = 0, _ = 0;
      const C = c * e, v = C + e, E = d * e, R = E + e;
      let k = 0;
      for (let x = C; x < v; x += 1)
        if (!(x >= n))
          for (let p = E; p < R; p += 1) {
            if (p >= r)
              continue;
            const S = (n * p + x) * 4;
            g += a[S + 0], y += a[S + 1], w += a[S + 2], _ += a[S + 3], k += 1;
          }
      g = g / k, y = y / k, w = w / k, _ = _ / k;
      for (let x = C; x < v; x += 1)
        if (!(x >= n))
          for (let p = E; p < R; p += 1) {
            if (p >= r)
              continue;
            const S = (n * p + x) * 4;
            a[S + 0] = g, a[S + 1] = y, a[S + 2] = w, a[S + 3] = _;
          }
    }
};
ld.Pixelate = h_;
J2.Factory.addGetterSetter(d_.Node, "pixelSize", 8, (0, f_.getNumberValidator)(), J2.Factory.afterSetFilter);
var ad = {};
Object.defineProperty(ad, "__esModule", { value: !0 });
ad.Posterize = void 0;
const em = xe, p_ = Je, g_ = fe, m_ = function(t) {
  const e = Math.round(this.levels() * 254) + 1, n = t.data, r = n.length, o = 255 / e;
  for (let l = 0; l < r; l += 1)
    n[l] = Math.floor(n[l] / o) * o;
};
ad.Posterize = m_;
em.Factory.addGetterSetter(p_.Node, "levels", 0.5, (0, g_.getNumberValidator)(), em.Factory.afterSetFilter);
var ud = {};
Object.defineProperty(ud, "__esModule", { value: !0 });
ud.RGB = void 0;
const oc = xe, F1 = Je, y_ = fe, v_ = function(t) {
  const e = t.data, n = e.length, r = this.red(), o = this.green(), l = this.blue();
  for (let a = 0; a < n; a += 4) {
    const c = (0.34 * e[a] + 0.5 * e[a + 1] + 0.16 * e[a + 2]) / 255;
    e[a] = c * r, e[a + 1] = c * o, e[a + 2] = c * l, e[a + 3] = e[a + 3];
  }
};
ud.RGB = v_;
oc.Factory.addGetterSetter(F1.Node, "red", 0, function(t) {
  return this._filterUpToDate = !1, t > 255 ? 255 : t < 0 ? 0 : Math.round(t);
});
oc.Factory.addGetterSetter(F1.Node, "green", 0, function(t) {
  return this._filterUpToDate = !1, t > 255 ? 255 : t < 0 ? 0 : Math.round(t);
});
oc.Factory.addGetterSetter(F1.Node, "blue", 0, y_.RGBComponent, oc.Factory.afterSetFilter);
var cd = {};
Object.defineProperty(cd, "__esModule", { value: !0 });
cd.RGBA = void 0;
const Ll = xe, dd = Je, __ = fe, S_ = function(t) {
  const e = t.data, n = e.length, r = this.red(), o = this.green(), l = this.blue(), a = this.alpha();
  for (let c = 0; c < n; c += 4) {
    const d = 1 - a;
    e[c] = r * a + e[c] * d, e[c + 1] = o * a + e[c + 1] * d, e[c + 2] = l * a + e[c + 2] * d;
  }
};
cd.RGBA = S_;
Ll.Factory.addGetterSetter(dd.Node, "red", 0, function(t) {
  return this._filterUpToDate = !1, t > 255 ? 255 : t < 0 ? 0 : Math.round(t);
});
Ll.Factory.addGetterSetter(dd.Node, "green", 0, function(t) {
  return this._filterUpToDate = !1, t > 255 ? 255 : t < 0 ? 0 : Math.round(t);
});
Ll.Factory.addGetterSetter(dd.Node, "blue", 0, __.RGBComponent, Ll.Factory.afterSetFilter);
Ll.Factory.addGetterSetter(dd.Node, "alpha", 1, function(t) {
  return this._filterUpToDate = !1, t > 1 ? 1 : t < 0 ? 0 : t;
});
var fd = {};
Object.defineProperty(fd, "__esModule", { value: !0 });
fd.Sepia = void 0;
const w_ = function(t) {
  const e = t.data, n = e.length;
  for (let r = 0; r < n; r += 4) {
    const o = e[r + 0], l = e[r + 1], a = e[r + 2];
    e[r + 0] = Math.min(255, o * 0.393 + l * 0.769 + a * 0.189), e[r + 1] = Math.min(255, o * 0.349 + l * 0.686 + a * 0.168), e[r + 2] = Math.min(255, o * 0.272 + l * 0.534 + a * 0.131);
  }
};
fd.Sepia = w_;
var hd = {};
Object.defineProperty(hd, "__esModule", { value: !0 });
hd.Solarize = void 0;
const x_ = function(t) {
  const e = t.data, n = t.width, r = t.height, o = n * 4;
  let l = r;
  do {
    const a = (l - 1) * o;
    let c = n;
    do {
      const d = a + (c - 1) * 4;
      let g = e[d], y = e[d + 1], w = e[d + 2];
      g > 127 && (g = 255 - g), y > 127 && (y = 255 - y), w > 127 && (w = 255 - w), e[d] = g, e[d + 1] = y, e[d + 2] = w;
    } while (--c);
  } while (--l);
};
hd.Solarize = x_;
var pd = {};
Object.defineProperty(pd, "__esModule", { value: !0 });
pd.Threshold = void 0;
const tm = xe, C_ = Je, k_ = fe, E_ = function(t) {
  const e = this.threshold() * 255, n = t.data, r = n.length;
  for (let o = 0; o < r; o += 1)
    n[o] = n[o] < e ? 0 : 255;
};
pd.Threshold = E_;
tm.Factory.addGetterSetter(C_.Node, "threshold", 0.5, (0, k_.getNumberValidator)(), tm.Factory.afterSetFilter);
Object.defineProperty(kc, "__esModule", { value: !0 });
kc.Konva = void 0;
const nm = nc, P_ = Rc, T_ = Lc, N_ = Ic, R_ = Dc, M_ = zc, rm = so, F_ = Vl, L_ = mo, A_ = jl, O_ = Bc, I_ = Vc, D_ = Hc, z_ = jc, G_ = vo, U_ = Wc, B_ = Yc, V_ = Kc, H_ = $c, j_ = Qc, W_ = bc, Y_ = qc, K_ = Jc, X_ = ed, $_ = td, Q_ = nd, b_ = rd, q_ = id, Z_ = sd, J_ = od, eS = ld, tS = ad, nS = ud, rS = cd, iS = fd, sS = hd, oS = pd;
kc.Konva = nm.Konva.Util._assign(nm.Konva, {
  Arc: P_.Arc,
  Arrow: T_.Arrow,
  Circle: N_.Circle,
  Ellipse: R_.Ellipse,
  Image: M_.Image,
  Label: rm.Label,
  Tag: rm.Tag,
  Line: F_.Line,
  Path: L_.Path,
  Rect: A_.Rect,
  RegularPolygon: O_.RegularPolygon,
  Ring: I_.Ring,
  Sprite: D_.Sprite,
  Star: z_.Star,
  Text: G_.Text,
  TextPath: U_.TextPath,
  Transformer: B_.Transformer,
  Wedge: V_.Wedge,
  Filters: {
    Blur: H_.Blur,
    Brighten: j_.Brighten,
    Contrast: W_.Contrast,
    Emboss: Y_.Emboss,
    Enhance: K_.Enhance,
    Grayscale: X_.Grayscale,
    HSL: $_.HSL,
    HSV: Q_.HSV,
    Invert: b_.Invert,
    Kaleidoscope: q_.Kaleidoscope,
    Mask: Z_.Mask,
    Noise: J_.Noise,
    Pixelate: eS.Pixelate,
    Posterize: tS.Posterize,
    RGB: nS.RGB,
    RGBA: rS.RGBA,
    Sepia: iS.Sepia,
    Solarize: sS.Solarize,
    Threshold: oS.Threshold
  }
});
var lS = L3.exports;
Object.defineProperty(lS, "__esModule", { value: !0 });
const aS = kc;
L3.exports = aS.Konva;
var x0 = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.Konva = void 0;
  var n = nc;
  Object.defineProperty(e, "Konva", { enumerable: !0, get: function() {
    return n.Konva;
  } });
  const r = nc;
  t.exports = r.Konva;
})(x0, x0.exports);
var uS = x0.exports;
const Al = /* @__PURE__ */ lc(uS);
var h4 = { exports: {} };
/**
 * @license React
 * react-reconciler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cS = function(e) {
  var n = {}, r = ie, o = rl, l = Object.assign;
  function a(i) {
    for (var s = "https://reactjs.org/docs/error-decoder.html?invariant=" + i, u = 1; u < arguments.length; u++) s += "&args[]=" + encodeURIComponent(arguments[u]);
    return "Minified React error #" + i + "; visit " + s + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var c = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, d = Symbol.for("react.element"), g = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), w = Symbol.for("react.strict_mode"), _ = Symbol.for("react.profiler"), C = Symbol.for("react.provider"), v = Symbol.for("react.context"), E = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), k = Symbol.for("react.suspense_list"), x = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), S = Symbol.for("react.offscreen"), N = Symbol.iterator;
  function M(i) {
    return i === null || typeof i != "object" ? null : (i = N && i[N] || i["@@iterator"], typeof i == "function" ? i : null);
  }
  function A(i) {
    if (i == null) return null;
    if (typeof i == "function") return i.displayName || i.name || null;
    if (typeof i == "string") return i;
    switch (i) {
      case y:
        return "Fragment";
      case g:
        return "Portal";
      case _:
        return "Profiler";
      case w:
        return "StrictMode";
      case R:
        return "Suspense";
      case k:
        return "SuspenseList";
    }
    if (typeof i == "object") switch (i.$$typeof) {
      case v:
        return (i.displayName || "Context") + ".Consumer";
      case C:
        return (i._context.displayName || "Context") + ".Provider";
      case E:
        var s = i.render;
        return i = i.displayName, i || (i = s.displayName || s.name || "", i = i !== "" ? "ForwardRef(" + i + ")" : "ForwardRef"), i;
      case x:
        return s = i.displayName || null, s !== null ? s : A(i.type) || "Memo";
      case p:
        s = i._payload, i = i._init;
        try {
          return A(i(s));
        } catch {
        }
    }
    return null;
  }
  function T(i) {
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
        return A(s);
      case 8:
        return s === w ? "StrictMode" : "Mode";
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
  function F(i) {
    if (G(i) !== i) throw Error(a(188));
  }
  function V(i) {
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
          if (m === u) return F(h), i;
          if (m === f) return F(h), s;
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
  function j(i) {
    return i = V(i), i !== null ? q(i) : null;
  }
  function q(i) {
    if (i.tag === 5 || i.tag === 6) return i;
    for (i = i.child; i !== null; ) {
      var s = q(i);
      if (s !== null) return s;
      i = i.sibling;
    }
    return null;
  }
  function D(i) {
    if (i.tag === 5 || i.tag === 6) return i;
    for (i = i.child; i !== null; ) {
      if (i.tag !== 4) {
        var s = D(i);
        if (s !== null) return s;
      }
      i = i.sibling;
    }
    return null;
  }
  var X = Array.isArray, he = e.getPublicInstance, de = e.getRootHostContext, H = e.getChildHostContext, Z = e.prepareForCommit, Q = e.resetAfterCommit, b = e.createInstance, se = e.appendInitialChild, Ne = e.finalizeInitialChildren, je = e.prepareUpdate, mt = e.shouldSetTextContent, ze = e.createTextInstance, L = e.scheduleTimeout, W = e.cancelTimeout, ue = e.noTimeout, Ae = e.isPrimaryRenderer, me = e.supportsMutation, Ge = e.supportsPersistence, Be = e.supportsHydration, Kt = e.getInstanceFromNode, Ie = e.preparePortalMount, kt = e.getCurrentEventPriority, Jt = e.detachDeletedInstance, ot = e.supportsMicrotasks, Wl = e.scheduleMicrotask, Ti = e.supportsTestSelectors, md = e.findFiberRoot, yd = e.getBoundingRect, Yl = e.getTextContent, Br = e.isHiddenSubtree, vd = e.matchAccessibilityRole, _d = e.setFocusIfFocusable, Kl = e.setupIntersectionObserver, Xl = e.appendChild, $l = e.appendChildToContainer, Sd = e.commitTextUpdate, Ql = e.commitMount, wd = e.commitUpdate, Y = e.insertBefore, J = e.insertInContainerBefore, ne = e.removeChild, ee = e.removeChildFromContainer, Pe = e.resetTextContent, ke = e.hideInstance, ht = e.hideTextInstance, Dn = e.unhideInstance, zn = e.unhideTextInstance, fn = e.clearContainer, ps = e.cloneInstance, Ni = e.createContainerChildSet, Ri = e.appendChildToContainerChildSet, xd = e.finalizeContainerChildren, _o = e.replaceContainerChildren, bl = e.cloneHiddenInstance, ql = e.cloneHiddenTextInstance, P4 = e.canHydrateInstance, T4 = e.canHydrateTextInstance, N4 = e.canHydrateSuspenseInstance, O1 = e.isSuspenseInstancePending, Cd = e.isSuspenseInstanceFallback, R4 = e.getSuspenseInstanceFallbackErrorDetails, M4 = e.registerSuspenseInstanceRetry, Zl = e.getNextHydratableSibling, F4 = e.getFirstHydratableChild, L4 = e.getFirstHydratableChildWithinContainer, A4 = e.getFirstHydratableChildWithinSuspenseInstance, O4 = e.hydrateInstance, I4 = e.hydrateTextInstance, D4 = e.hydrateSuspenseInstance, z4 = e.getNextHydratableInstanceAfterSuspenseInstance, G4 = e.commitHydratedContainer, U4 = e.commitHydratedSuspenseInstance, B4 = e.clearSuspenseBoundary, V4 = e.clearSuspenseBoundaryFromContainer, H4 = e.shouldDeleteUnhydratedTailInstances, j4 = e.didNotMatchHydratedContainerTextInstance, W4 = e.didNotMatchHydratedTextInstance, kd;
  function So(i) {
    if (kd === void 0) try {
      throw Error();
    } catch (u) {
      var s = u.stack.trim().match(/\n( *(at )?)/);
      kd = s && s[1] || "";
    }
    return `
` + kd + i;
  }
  var Ed = !1;
  function Pd(i, s) {
    if (!i || Ed) return "";
    Ed = !0;
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
        } catch ($) {
          var f = $;
        }
        Reflect.construct(i, [], s);
      } else {
        try {
          s.call();
        } catch ($) {
          f = $;
        }
        i.call(s.prototype);
      }
      else {
        try {
          throw Error();
        } catch ($) {
          f = $;
        }
        i();
      }
    } catch ($) {
      if ($ && f && typeof $.stack == "string") {
        for (var h = $.stack.split(`
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
      Ed = !1, Error.prepareStackTrace = u;
    }
    return (i = i ? i.displayName || i.name : "") ? So(i) : "";
  }
  var Y4 = Object.prototype.hasOwnProperty, Td = [], gs = -1;
  function Vr(i) {
    return { current: i };
  }
  function Ke(i) {
    0 > gs || (i.current = Td[gs], Td[gs] = null, gs--);
  }
  function We(i, s) {
    gs++, Td[gs] = i.current, i.current = s;
  }
  var Hr = {}, Dt = Vr(Hr), en = Vr(!1), Mi = Hr;
  function ms(i, s) {
    var u = i.type.contextTypes;
    if (!u) return Hr;
    var f = i.stateNode;
    if (f && f.__reactInternalMemoizedUnmaskedChildContext === s) return f.__reactInternalMemoizedMaskedChildContext;
    var h = {}, m;
    for (m in u) h[m] = s[m];
    return f && (i = i.stateNode, i.__reactInternalMemoizedUnmaskedChildContext = s, i.__reactInternalMemoizedMaskedChildContext = h), h;
  }
  function tn(i) {
    return i = i.childContextTypes, i != null;
  }
  function Jl() {
    Ke(en), Ke(Dt);
  }
  function I1(i, s, u) {
    if (Dt.current !== Hr) throw Error(a(168));
    We(Dt, s), We(en, u);
  }
  function D1(i, s, u) {
    var f = i.stateNode;
    if (s = s.childContextTypes, typeof f.getChildContext != "function") return u;
    f = f.getChildContext();
    for (var h in f) if (!(h in s)) throw Error(a(108, T(i) || "Unknown", h));
    return l({}, u, f);
  }
  function ea(i) {
    return i = (i = i.stateNode) && i.__reactInternalMemoizedMergedChildContext || Hr, Mi = Dt.current, We(Dt, i), We(en, en.current), !0;
  }
  function z1(i, s, u) {
    var f = i.stateNode;
    if (!f) throw Error(a(169));
    u ? (i = D1(i, s, Mi), f.__reactInternalMemoizedMergedChildContext = i, Ke(en), Ke(Dt), We(Dt, i)) : Ke(en), We(en, u);
  }
  var Gn = Math.clz32 ? Math.clz32 : $4, K4 = Math.log, X4 = Math.LN2;
  function $4(i) {
    return i >>>= 0, i === 0 ? 32 : 31 - (K4(i) / X4 | 0) | 0;
  }
  var ta = 64, na = 4194304;
  function wo(i) {
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
  function ra(i, s) {
    var u = i.pendingLanes;
    if (u === 0) return 0;
    var f = 0, h = i.suspendedLanes, m = i.pingedLanes, P = u & 268435455;
    if (P !== 0) {
      var O = P & ~h;
      O !== 0 ? f = wo(O) : (m &= P, m !== 0 && (f = wo(m)));
    } else P = u & ~h, P !== 0 ? f = wo(P) : m !== 0 && (f = wo(m));
    if (f === 0) return 0;
    if (s !== 0 && s !== f && !(s & h) && (h = f & -f, m = s & -s, h >= m || h === 16 && (m & 4194240) !== 0)) return s;
    if (f & 4 && (f |= u & 16), s = i.entangledLanes, s !== 0) for (i = i.entanglements, s &= f; 0 < s; ) u = 31 - Gn(s), h = 1 << u, f |= i[u], s &= ~h;
    return f;
  }
  function Q4(i, s) {
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
  function b4(i, s) {
    for (var u = i.suspendedLanes, f = i.pingedLanes, h = i.expirationTimes, m = i.pendingLanes; 0 < m; ) {
      var P = 31 - Gn(m), O = 1 << P, U = h[P];
      U === -1 ? (!(O & u) || O & f) && (h[P] = Q4(O, s)) : U <= s && (i.expiredLanes |= O), m &= ~O;
    }
  }
  function Nd(i) {
    return i = i.pendingLanes & -1073741825, i !== 0 ? i : i & 1073741824 ? 1073741824 : 0;
  }
  function G1() {
    var i = ta;
    return ta <<= 1, !(ta & 4194240) && (ta = 64), i;
  }
  function Rd(i) {
    for (var s = [], u = 0; 31 > u; u++) s.push(i);
    return s;
  }
  function xo(i, s, u) {
    i.pendingLanes |= s, s !== 536870912 && (i.suspendedLanes = 0, i.pingedLanes = 0), i = i.eventTimes, s = 31 - Gn(s), i[s] = u;
  }
  function q4(i, s) {
    var u = i.pendingLanes & ~s;
    i.pendingLanes = s, i.suspendedLanes = 0, i.pingedLanes = 0, i.expiredLanes &= s, i.mutableReadLanes &= s, i.entangledLanes &= s, s = i.entanglements;
    var f = i.eventTimes;
    for (i = i.expirationTimes; 0 < u; ) {
      var h = 31 - Gn(u), m = 1 << h;
      s[h] = 0, f[h] = -1, i[h] = -1, u &= ~m;
    }
  }
  function Md(i, s) {
    var u = i.entangledLanes |= s;
    for (i = i.entanglements; u; ) {
      var f = 31 - Gn(u), h = 1 << f;
      h & s | i[f] & s && (i[f] |= s), u &= ~h;
    }
  }
  var Me = 0;
  function U1(i) {
    return i &= -i, 1 < i ? 4 < i ? i & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Fd = o.unstable_scheduleCallback, B1 = o.unstable_cancelCallback, Z4 = o.unstable_shouldYield, J4 = o.unstable_requestPaint, Et = o.unstable_now, Ld = o.unstable_ImmediatePriority, e5 = o.unstable_UserBlockingPriority, Ad = o.unstable_NormalPriority, t5 = o.unstable_IdlePriority, ia = null, er = null;
  function n5(i) {
    if (er && typeof er.onCommitFiberRoot == "function") try {
      er.onCommitFiberRoot(ia, i, void 0, (i.current.flags & 128) === 128);
    } catch {
    }
  }
  function r5(i, s) {
    return i === s && (i !== 0 || 1 / i === 1 / s) || i !== i && s !== s;
  }
  var Un = typeof Object.is == "function" ? Object.is : r5, mr = null, sa = !1, Od = !1;
  function V1(i) {
    mr === null ? mr = [i] : mr.push(i);
  }
  function i5(i) {
    sa = !0, V1(i);
  }
  function tr() {
    if (!Od && mr !== null) {
      Od = !0;
      var i = 0, s = Me;
      try {
        var u = mr;
        for (Me = 1; i < u.length; i++) {
          var f = u[i];
          do
            f = f(!0);
          while (f !== null);
        }
        mr = null, sa = !1;
      } catch (h) {
        throw mr !== null && (mr = mr.slice(i + 1)), Fd(Ld, tr), h;
      } finally {
        Me = s, Od = !1;
      }
    }
    return null;
  }
  var ys = [], vs = 0, oa = null, la = 0, wn = [], xn = 0, Fi = null, yr = 1, vr = "";
  function Li(i, s) {
    ys[vs++] = la, ys[vs++] = oa, oa = i, la = s;
  }
  function H1(i, s, u) {
    wn[xn++] = yr, wn[xn++] = vr, wn[xn++] = Fi, Fi = i;
    var f = yr;
    i = vr;
    var h = 32 - Gn(f) - 1;
    f &= ~(1 << h), u += 1;
    var m = 32 - Gn(s) + h;
    if (30 < m) {
      var P = h - h % 5;
      m = (f & (1 << P) - 1).toString(32), f >>= P, h -= P, yr = 1 << 32 - Gn(s) + h | u << h | f, vr = m + i;
    } else yr = 1 << m | u << h | f, vr = i;
  }
  function Id(i) {
    i.return !== null && (Li(i, 1), H1(i, 1, 0));
  }
  function Dd(i) {
    for (; i === oa; ) oa = ys[--vs], ys[vs] = null, la = ys[--vs], ys[vs] = null;
    for (; i === Fi; ) Fi = wn[--xn], wn[xn] = null, vr = wn[--xn], wn[xn] = null, yr = wn[--xn], wn[xn] = null;
  }
  var hn = null, Cn = null, be = !1, Co = !1, Bn = null;
  function j1(i, s) {
    var u = Nn(5, null, null, 0);
    u.elementType = "DELETED", u.stateNode = s, u.return = i, s = i.deletions, s === null ? (i.deletions = [u], i.flags |= 16) : s.push(u);
  }
  function W1(i, s) {
    switch (i.tag) {
      case 5:
        return s = P4(s, i.type, i.pendingProps), s !== null ? (i.stateNode = s, hn = i, Cn = F4(s), !0) : !1;
      case 6:
        return s = T4(s, i.pendingProps), s !== null ? (i.stateNode = s, hn = i, Cn = null, !0) : !1;
      case 13:
        if (s = N4(s), s !== null) {
          var u = Fi !== null ? { id: yr, overflow: vr } : null;
          return i.memoizedState = { dehydrated: s, treeContext: u, retryLane: 1073741824 }, u = Nn(18, null, null, 0), u.stateNode = s, u.return = i, i.child = u, hn = i, Cn = null, !0;
        }
        return !1;
      default:
        return !1;
    }
  }
  function zd(i) {
    return (i.mode & 1) !== 0 && (i.flags & 128) === 0;
  }
  function Gd(i) {
    if (be) {
      var s = Cn;
      if (s) {
        var u = s;
        if (!W1(i, s)) {
          if (zd(i)) throw Error(a(418));
          s = Zl(u);
          var f = hn;
          s && W1(i, s) ? j1(f, u) : (i.flags = i.flags & -4097 | 2, be = !1, hn = i);
        }
      } else {
        if (zd(i)) throw Error(a(418));
        i.flags = i.flags & -4097 | 2, be = !1, hn = i;
      }
    }
  }
  function Y1(i) {
    for (i = i.return; i !== null && i.tag !== 5 && i.tag !== 3 && i.tag !== 13; ) i = i.return;
    hn = i;
  }
  function aa(i) {
    if (!Be || i !== hn) return !1;
    if (!be) return Y1(i), be = !0, !1;
    if (i.tag !== 3 && (i.tag !== 5 || H4(i.type) && !mt(i.type, i.memoizedProps))) {
      var s = Cn;
      if (s) {
        if (zd(i)) throw K1(), Error(a(418));
        for (; s; ) j1(i, s), s = Zl(s);
      }
    }
    if (Y1(i), i.tag === 13) {
      if (!Be) throw Error(a(316));
      if (i = i.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(a(317));
      Cn = z4(i);
    } else Cn = hn ? Zl(i.stateNode) : null;
    return !0;
  }
  function K1() {
    for (var i = Cn; i; ) i = Zl(i);
  }
  function _s() {
    Be && (Cn = hn = null, Co = be = !1);
  }
  function Ud(i) {
    Bn === null ? Bn = [i] : Bn.push(i);
  }
  var s5 = c.ReactCurrentBatchConfig;
  function ua(i, s) {
    if (Un(i, s)) return !0;
    if (typeof i != "object" || i === null || typeof s != "object" || s === null) return !1;
    var u = Object.keys(i), f = Object.keys(s);
    if (u.length !== f.length) return !1;
    for (f = 0; f < u.length; f++) {
      var h = u[f];
      if (!Y4.call(s, h) || !Un(i[h], s[h])) return !1;
    }
    return !0;
  }
  function o5(i) {
    switch (i.tag) {
      case 5:
        return So(i.type);
      case 16:
        return So("Lazy");
      case 13:
        return So("Suspense");
      case 19:
        return So("SuspenseList");
      case 0:
      case 2:
      case 15:
        return i = Pd(i.type, !1), i;
      case 11:
        return i = Pd(i.type.render, !1), i;
      case 1:
        return i = Pd(i.type, !0), i;
      default:
        return "";
    }
  }
  function ko(i, s, u) {
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
  function ca(i, s) {
    throw i = Object.prototype.toString.call(s), Error(a(31, i === "[object Object]" ? "object with keys {" + Object.keys(s).join(", ") + "}" : i));
  }
  function X1(i) {
    var s = i._init;
    return s(i._payload);
  }
  function $1(i) {
    function s(z, I) {
      if (i) {
        var B = z.deletions;
        B === null ? (z.deletions = [I], z.flags |= 16) : B.push(I);
      }
    }
    function u(z, I) {
      if (!i) return null;
      for (; I !== null; ) s(z, I), I = I.sibling;
      return null;
    }
    function f(z, I) {
      for (z = /* @__PURE__ */ new Map(); I !== null; ) I.key !== null ? z.set(I.key, I) : z.set(I.index, I), I = I.sibling;
      return z;
    }
    function h(z, I) {
      return z = Qr(z, I), z.index = 0, z.sibling = null, z;
    }
    function m(z, I, B) {
      return z.index = B, i ? (B = z.alternate, B !== null ? (B = B.index, B < I ? (z.flags |= 2, I) : B) : (z.flags |= 2, I)) : (z.flags |= 1048576, I);
    }
    function P(z) {
      return i && z.alternate === null && (z.flags |= 2), z;
    }
    function O(z, I, B, re) {
      return I === null || I.tag !== 6 ? (I = If(B, z.mode, re), I.return = z, I) : (I = h(I, B), I.return = z, I);
    }
    function U(z, I, B, re) {
      var ce = B.type;
      return ce === y ? ae(z, I, B.props.children, re, B.key) : I !== null && (I.elementType === ce || typeof ce == "object" && ce !== null && ce.$$typeof === p && X1(ce) === I.type) ? (re = h(I, B.props), re.ref = ko(z, I, B), re.return = z, re) : (re = Va(B.type, B.key, B.props, null, z.mode, re), re.ref = ko(z, I, B), re.return = z, re);
    }
    function $(z, I, B, re) {
      return I === null || I.tag !== 4 || I.stateNode.containerInfo !== B.containerInfo || I.stateNode.implementation !== B.implementation ? (I = Df(B, z.mode, re), I.return = z, I) : (I = h(I, B.children || []), I.return = z, I);
    }
    function ae(z, I, B, re, ce) {
      return I === null || I.tag !== 7 ? (I = Ui(B, z.mode, re, ce), I.return = z, I) : (I = h(I, B), I.return = z, I);
    }
    function ye(z, I, B) {
      if (typeof I == "string" && I !== "" || typeof I == "number") return I = If("" + I, z.mode, B), I.return = z, I;
      if (typeof I == "object" && I !== null) {
        switch (I.$$typeof) {
          case d:
            return B = Va(I.type, I.key, I.props, null, z.mode, B), B.ref = ko(z, null, I), B.return = z, B;
          case g:
            return I = Df(I, z.mode, B), I.return = z, I;
          case p:
            var re = I._init;
            return ye(z, re(I._payload), B);
        }
        if (X(I) || M(I)) return I = Ui(I, z.mode, B, null), I.return = z, I;
        ca(z, I);
      }
      return null;
    }
    function te(z, I, B, re) {
      var ce = I !== null ? I.key : null;
      if (typeof B == "string" && B !== "" || typeof B == "number") return ce !== null ? null : O(z, I, "" + B, re);
      if (typeof B == "object" && B !== null) {
        switch (B.$$typeof) {
          case d:
            return B.key === ce ? U(z, I, B, re) : null;
          case g:
            return B.key === ce ? $(z, I, B, re) : null;
          case p:
            return ce = B._init, te(
              z,
              I,
              ce(B._payload),
              re
            );
        }
        if (X(B) || M(B)) return ce !== null ? null : ae(z, I, B, re, null);
        ca(z, B);
      }
      return null;
    }
    function Xe(z, I, B, re, ce) {
      if (typeof re == "string" && re !== "" || typeof re == "number") return z = z.get(B) || null, O(I, z, "" + re, ce);
      if (typeof re == "object" && re !== null) {
        switch (re.$$typeof) {
          case d:
            return z = z.get(re.key === null ? B : re.key) || null, U(I, z, re, ce);
          case g:
            return z = z.get(re.key === null ? B : re.key) || null, $(I, z, re, ce);
          case p:
            var _e = re._init;
            return Xe(z, I, B, _e(re._payload), ce);
        }
        if (X(re) || M(re)) return z = z.get(B) || null, ae(I, z, re, ce, null);
        ca(I, re);
      }
      return null;
    }
    function Ve(z, I, B, re) {
      for (var ce = null, _e = null, ve = I, Fe = I = 0, Nt = null; ve !== null && Fe < B.length; Fe++) {
        ve.index > Fe ? (Nt = ve, ve = null) : Nt = ve.sibling;
        var Le = te(z, ve, B[Fe], re);
        if (Le === null) {
          ve === null && (ve = Nt);
          break;
        }
        i && ve && Le.alternate === null && s(z, ve), I = m(Le, I, Fe), _e === null ? ce = Le : _e.sibling = Le, _e = Le, ve = Nt;
      }
      if (Fe === B.length) return u(z, ve), be && Li(z, Fe), ce;
      if (ve === null) {
        for (; Fe < B.length; Fe++) ve = ye(z, B[Fe], re), ve !== null && (I = m(ve, I, Fe), _e === null ? ce = ve : _e.sibling = ve, _e = ve);
        return be && Li(z, Fe), ce;
      }
      for (ve = f(z, ve); Fe < B.length; Fe++) Nt = Xe(ve, z, Fe, B[Fe], re), Nt !== null && (i && Nt.alternate !== null && ve.delete(Nt.key === null ? Fe : Nt.key), I = m(Nt, I, Fe), _e === null ? ce = Nt : _e.sibling = Nt, _e = Nt);
      return i && ve.forEach(function(br) {
        return s(z, br);
      }), be && Li(z, Fe), ce;
    }
    function on(z, I, B, re) {
      var ce = M(B);
      if (typeof ce != "function") throw Error(a(150));
      if (B = ce.call(B), B == null) throw Error(a(151));
      for (var _e = ce = null, ve = I, Fe = I = 0, Nt = null, Le = B.next(); ve !== null && !Le.done; Fe++, Le = B.next()) {
        ve.index > Fe ? (Nt = ve, ve = null) : Nt = ve.sibling;
        var br = te(z, ve, Le.value, re);
        if (br === null) {
          ve === null && (ve = Nt);
          break;
        }
        i && ve && br.alternate === null && s(z, ve), I = m(br, I, Fe), _e === null ? ce = br : _e.sibling = br, _e = br, ve = Nt;
      }
      if (Le.done) return u(
        z,
        ve
      ), be && Li(z, Fe), ce;
      if (ve === null) {
        for (; !Le.done; Fe++, Le = B.next()) Le = ye(z, Le.value, re), Le !== null && (I = m(Le, I, Fe), _e === null ? ce = Le : _e.sibling = Le, _e = Le);
        return be && Li(z, Fe), ce;
      }
      for (ve = f(z, ve); !Le.done; Fe++, Le = B.next()) Le = Xe(ve, z, Fe, Le.value, re), Le !== null && (i && Le.alternate !== null && ve.delete(Le.key === null ? Fe : Le.key), I = m(Le, I, Fe), _e === null ? ce = Le : _e.sibling = Le, _e = Le);
      return i && ve.forEach(function(D5) {
        return s(z, D5);
      }), be && Li(z, Fe), ce;
    }
    function xr(z, I, B, re) {
      if (typeof B == "object" && B !== null && B.type === y && B.key === null && (B = B.props.children), typeof B == "object" && B !== null) {
        switch (B.$$typeof) {
          case d:
            e: {
              for (var ce = B.key, _e = I; _e !== null; ) {
                if (_e.key === ce) {
                  if (ce = B.type, ce === y) {
                    if (_e.tag === 7) {
                      u(z, _e.sibling), I = h(_e, B.props.children), I.return = z, z = I;
                      break e;
                    }
                  } else if (_e.elementType === ce || typeof ce == "object" && ce !== null && ce.$$typeof === p && X1(ce) === _e.type) {
                    u(z, _e.sibling), I = h(_e, B.props), I.ref = ko(z, _e, B), I.return = z, z = I;
                    break e;
                  }
                  u(z, _e);
                  break;
                } else s(z, _e);
                _e = _e.sibling;
              }
              B.type === y ? (I = Ui(B.props.children, z.mode, re, B.key), I.return = z, z = I) : (re = Va(B.type, B.key, B.props, null, z.mode, re), re.ref = ko(z, I, B), re.return = z, z = re);
            }
            return P(z);
          case g:
            e: {
              for (_e = B.key; I !== null; ) {
                if (I.key === _e) if (I.tag === 4 && I.stateNode.containerInfo === B.containerInfo && I.stateNode.implementation === B.implementation) {
                  u(z, I.sibling), I = h(I, B.children || []), I.return = z, z = I;
                  break e;
                } else {
                  u(z, I);
                  break;
                }
                else s(z, I);
                I = I.sibling;
              }
              I = Df(B, z.mode, re), I.return = z, z = I;
            }
            return P(z);
          case p:
            return _e = B._init, xr(z, I, _e(B._payload), re);
        }
        if (X(B)) return Ve(z, I, B, re);
        if (M(B)) return on(z, I, B, re);
        ca(z, B);
      }
      return typeof B == "string" && B !== "" || typeof B == "number" ? (B = "" + B, I !== null && I.tag === 6 ? (u(z, I.sibling), I = h(I, B), I.return = z, z = I) : (u(z, I), I = If(B, z.mode, re), I.return = z, z = I), P(z)) : u(z, I);
    }
    return xr;
  }
  var Ss = $1(!0), Q1 = $1(!1), da = Vr(null), fa = null, ws = null, Bd = null;
  function Vd() {
    Bd = ws = fa = null;
  }
  function b1(i, s, u) {
    Ae ? (We(da, s._currentValue), s._currentValue = u) : (We(da, s._currentValue2), s._currentValue2 = u);
  }
  function Hd(i) {
    var s = da.current;
    Ke(da), Ae ? i._currentValue = s : i._currentValue2 = s;
  }
  function jd(i, s, u) {
    for (; i !== null; ) {
      var f = i.alternate;
      if ((i.childLanes & s) !== s ? (i.childLanes |= s, f !== null && (f.childLanes |= s)) : f !== null && (f.childLanes & s) !== s && (f.childLanes |= s), i === u) break;
      i = i.return;
    }
  }
  function xs(i, s) {
    fa = i, Bd = ws = null, i = i.dependencies, i !== null && i.firstContext !== null && (i.lanes & s && (nn = !0), i.firstContext = null);
  }
  function kn(i) {
    var s = Ae ? i._currentValue : i._currentValue2;
    if (Bd !== i) if (i = { context: i, memoizedValue: s, next: null }, ws === null) {
      if (fa === null) throw Error(a(308));
      ws = i, fa.dependencies = { lanes: 0, firstContext: i };
    } else ws = ws.next = i;
    return s;
  }
  var Ai = null;
  function Wd(i) {
    Ai === null ? Ai = [i] : Ai.push(i);
  }
  function q1(i, s, u, f) {
    var h = s.interleaved;
    return h === null ? (u.next = u, Wd(s)) : (u.next = h.next, h.next = u), s.interleaved = u, nr(i, f);
  }
  function nr(i, s) {
    i.lanes |= s;
    var u = i.alternate;
    for (u !== null && (u.lanes |= s), u = i, i = i.return; i !== null; ) i.childLanes |= s, u = i.alternate, u !== null && (u.childLanes |= s), u = i, i = i.return;
    return u.tag === 3 ? u.stateNode : null;
  }
  var jr = !1;
  function Yd(i) {
    i.updateQueue = { baseState: i.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Z1(i, s) {
    i = i.updateQueue, s.updateQueue === i && (s.updateQueue = { baseState: i.baseState, firstBaseUpdate: i.firstBaseUpdate, lastBaseUpdate: i.lastBaseUpdate, shared: i.shared, effects: i.effects });
  }
  function _r(i, s) {
    return { eventTime: i, lane: s, tag: 0, payload: null, callback: null, next: null };
  }
  function Wr(i, s, u) {
    var f = i.updateQueue;
    if (f === null) return null;
    if (f = f.shared, we & 2) {
      var h = f.pending;
      return h === null ? s.next = s : (s.next = h.next, h.next = s), f.pending = s, nr(i, u);
    }
    return h = f.interleaved, h === null ? (s.next = s, Wd(f)) : (s.next = h.next, h.next = s), f.interleaved = s, nr(i, u);
  }
  function ha(i, s, u) {
    if (s = s.updateQueue, s !== null && (s = s.shared, (u & 4194240) !== 0)) {
      var f = s.lanes;
      f &= i.pendingLanes, u |= f, s.lanes = u, Md(i, u);
    }
  }
  function J1(i, s) {
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
  function pa(i, s, u, f) {
    var h = i.updateQueue;
    jr = !1;
    var m = h.firstBaseUpdate, P = h.lastBaseUpdate, O = h.shared.pending;
    if (O !== null) {
      h.shared.pending = null;
      var U = O, $ = U.next;
      U.next = null, P === null ? m = $ : P.next = $, P = U;
      var ae = i.alternate;
      ae !== null && (ae = ae.updateQueue, O = ae.lastBaseUpdate, O !== P && (O === null ? ae.firstBaseUpdate = $ : O.next = $, ae.lastBaseUpdate = U));
    }
    if (m !== null) {
      var ye = h.baseState;
      P = 0, ae = $ = U = null, O = m;
      do {
        var te = O.lane, Xe = O.eventTime;
        if ((f & te) === te) {
          ae !== null && (ae = ae.next = {
            eventTime: Xe,
            lane: 0,
            tag: O.tag,
            payload: O.payload,
            callback: O.callback,
            next: null
          });
          e: {
            var Ve = i, on = O;
            switch (te = s, Xe = u, on.tag) {
              case 1:
                if (Ve = on.payload, typeof Ve == "function") {
                  ye = Ve.call(Xe, ye, te);
                  break e;
                }
                ye = Ve;
                break e;
              case 3:
                Ve.flags = Ve.flags & -65537 | 128;
              case 0:
                if (Ve = on.payload, te = typeof Ve == "function" ? Ve.call(Xe, ye, te) : Ve, te == null) break e;
                ye = l({}, ye, te);
                break e;
              case 2:
                jr = !0;
            }
          }
          O.callback !== null && O.lane !== 0 && (i.flags |= 64, te = h.effects, te === null ? h.effects = [O] : te.push(O));
        } else Xe = { eventTime: Xe, lane: te, tag: O.tag, payload: O.payload, callback: O.callback, next: null }, ae === null ? ($ = ae = Xe, U = ye) : ae = ae.next = Xe, P |= te;
        if (O = O.next, O === null) {
          if (O = h.shared.pending, O === null) break;
          te = O, O = te.next, te.next = null, h.lastBaseUpdate = te, h.shared.pending = null;
        }
      } while (!0);
      if (ae === null && (U = ye), h.baseState = U, h.firstBaseUpdate = $, h.lastBaseUpdate = ae, s = h.shared.interleaved, s !== null) {
        h = s;
        do
          P |= h.lane, h = h.next;
        while (h !== s);
      } else m === null && (h.shared.lanes = 0);
      Ii |= P, i.lanes = P, i.memoizedState = ye;
    }
  }
  function ep(i, s, u) {
    if (i = s.effects, s.effects = null, i !== null) for (s = 0; s < i.length; s++) {
      var f = i[s], h = f.callback;
      if (h !== null) {
        if (f.callback = null, f = u, typeof h != "function") throw Error(a(191, h));
        h.call(f);
      }
    }
  }
  var Eo = {}, En = Vr(Eo), Po = Vr(Eo), Cs = Vr(Eo);
  function rr(i) {
    if (i === Eo) throw Error(a(174));
    return i;
  }
  function Kd(i, s) {
    We(Cs, s), We(Po, i), We(En, Eo), i = de(s), Ke(En), We(En, i);
  }
  function ks() {
    Ke(En), Ke(Po), Ke(Cs);
  }
  function tp(i) {
    var s = rr(Cs.current), u = rr(En.current);
    s = H(u, i.type, s), u !== s && (We(Po, i), We(En, s));
  }
  function Xd(i) {
    Po.current === i && (Ke(En), Ke(Po));
  }
  var et = Vr(0);
  function ga(i) {
    for (var s = i; s !== null; ) {
      if (s.tag === 13) {
        var u = s.memoizedState;
        if (u !== null && (u = u.dehydrated, u === null || O1(u) || Cd(u))) return s;
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
  var $d = [];
  function Qd() {
    for (var i = 0; i < $d.length; i++) {
      var s = $d[i];
      Ae ? s._workInProgressVersionPrimary = null : s._workInProgressVersionSecondary = null;
    }
    $d.length = 0;
  }
  var ma = c.ReactCurrentDispatcher, bd = c.ReactCurrentBatchConfig, Oi = 0, tt = null, yt = null, Pt = null, ya = !1, To = !1, No = 0, l5 = 0;
  function zt() {
    throw Error(a(321));
  }
  function qd(i, s) {
    if (s === null) return !1;
    for (var u = 0; u < s.length && u < i.length; u++) if (!Un(i[u], s[u])) return !1;
    return !0;
  }
  function Zd(i, s, u, f, h, m) {
    if (Oi = m, tt = s, s.memoizedState = null, s.updateQueue = null, s.lanes = 0, ma.current = i === null || i.memoizedState === null ? d5 : f5, i = u(f, h), To) {
      m = 0;
      do {
        if (To = !1, No = 0, 25 <= m) throw Error(a(301));
        m += 1, Pt = yt = null, s.updateQueue = null, ma.current = h5, i = u(f, h);
      } while (To);
    }
    if (ma.current = Sa, s = yt !== null && yt.next !== null, Oi = 0, Pt = yt = tt = null, ya = !1, s) throw Error(a(300));
    return i;
  }
  function Jd() {
    var i = No !== 0;
    return No = 0, i;
  }
  function ir() {
    var i = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Pt === null ? tt.memoizedState = Pt = i : Pt = Pt.next = i, Pt;
  }
  function Pn() {
    if (yt === null) {
      var i = tt.alternate;
      i = i !== null ? i.memoizedState : null;
    } else i = yt.next;
    var s = Pt === null ? tt.memoizedState : Pt.next;
    if (s !== null) Pt = s, yt = i;
    else {
      if (i === null) throw Error(a(310));
      yt = i, i = { memoizedState: yt.memoizedState, baseState: yt.baseState, baseQueue: yt.baseQueue, queue: yt.queue, next: null }, Pt === null ? tt.memoizedState = Pt = i : Pt = Pt.next = i;
    }
    return Pt;
  }
  function Ro(i, s) {
    return typeof s == "function" ? s(i) : s;
  }
  function ef(i) {
    var s = Pn(), u = s.queue;
    if (u === null) throw Error(a(311));
    u.lastRenderedReducer = i;
    var f = yt, h = f.baseQueue, m = u.pending;
    if (m !== null) {
      if (h !== null) {
        var P = h.next;
        h.next = m.next, m.next = P;
      }
      f.baseQueue = h = m, u.pending = null;
    }
    if (h !== null) {
      m = h.next, f = f.baseState;
      var O = P = null, U = null, $ = m;
      do {
        var ae = $.lane;
        if ((Oi & ae) === ae) U !== null && (U = U.next = { lane: 0, action: $.action, hasEagerState: $.hasEagerState, eagerState: $.eagerState, next: null }), f = $.hasEagerState ? $.eagerState : i(f, $.action);
        else {
          var ye = {
            lane: ae,
            action: $.action,
            hasEagerState: $.hasEagerState,
            eagerState: $.eagerState,
            next: null
          };
          U === null ? (O = U = ye, P = f) : U = U.next = ye, tt.lanes |= ae, Ii |= ae;
        }
        $ = $.next;
      } while ($ !== null && $ !== m);
      U === null ? P = f : U.next = O, Un(f, s.memoizedState) || (nn = !0), s.memoizedState = f, s.baseState = P, s.baseQueue = U, u.lastRenderedState = f;
    }
    if (i = u.interleaved, i !== null) {
      h = i;
      do
        m = h.lane, tt.lanes |= m, Ii |= m, h = h.next;
      while (h !== i);
    } else h === null && (u.lanes = 0);
    return [s.memoizedState, u.dispatch];
  }
  function tf(i) {
    var s = Pn(), u = s.queue;
    if (u === null) throw Error(a(311));
    u.lastRenderedReducer = i;
    var f = u.dispatch, h = u.pending, m = s.memoizedState;
    if (h !== null) {
      u.pending = null;
      var P = h = h.next;
      do
        m = i(m, P.action), P = P.next;
      while (P !== h);
      Un(m, s.memoizedState) || (nn = !0), s.memoizedState = m, s.baseQueue === null && (s.baseState = m), u.lastRenderedState = m;
    }
    return [m, f];
  }
  function np() {
  }
  function rp(i, s) {
    var u = tt, f = Pn(), h = s(), m = !Un(f.memoizedState, h);
    if (m && (f.memoizedState = h, nn = !0), f = f.queue, nf(op.bind(null, u, f, i), [i]), f.getSnapshot !== s || m || Pt !== null && Pt.memoizedState.tag & 1) {
      if (u.flags |= 2048, Mo(9, sp.bind(null, u, f, h, s), void 0, null), Tt === null) throw Error(a(349));
      Oi & 30 || ip(u, s, h);
    }
    return h;
  }
  function ip(i, s, u) {
    i.flags |= 16384, i = { getSnapshot: s, value: u }, s = tt.updateQueue, s === null ? (s = { lastEffect: null, stores: null }, tt.updateQueue = s, s.stores = [i]) : (u = s.stores, u === null ? s.stores = [i] : u.push(i));
  }
  function sp(i, s, u, f) {
    s.value = u, s.getSnapshot = f, lp(s) && ap(i);
  }
  function op(i, s, u) {
    return u(function() {
      lp(s) && ap(i);
    });
  }
  function lp(i) {
    var s = i.getSnapshot;
    i = i.value;
    try {
      var u = s();
      return !Un(i, u);
    } catch {
      return !0;
    }
  }
  function ap(i) {
    var s = nr(i, 1);
    s !== null && Tn(s, i, 1, -1);
  }
  function up(i) {
    var s = ir();
    return typeof i == "function" && (i = i()), s.memoizedState = s.baseState = i, i = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ro, lastRenderedState: i }, s.queue = i, i = i.dispatch = c5.bind(null, tt, i), [s.memoizedState, i];
  }
  function Mo(i, s, u, f) {
    return i = { tag: i, create: s, destroy: u, deps: f, next: null }, s = tt.updateQueue, s === null ? (s = { lastEffect: null, stores: null }, tt.updateQueue = s, s.lastEffect = i.next = i) : (u = s.lastEffect, u === null ? s.lastEffect = i.next = i : (f = u.next, u.next = i, i.next = f, s.lastEffect = i)), i;
  }
  function cp() {
    return Pn().memoizedState;
  }
  function va(i, s, u, f) {
    var h = ir();
    tt.flags |= i, h.memoizedState = Mo(1 | s, u, void 0, f === void 0 ? null : f);
  }
  function _a(i, s, u, f) {
    var h = Pn();
    f = f === void 0 ? null : f;
    var m = void 0;
    if (yt !== null) {
      var P = yt.memoizedState;
      if (m = P.destroy, f !== null && qd(f, P.deps)) {
        h.memoizedState = Mo(s, u, m, f);
        return;
      }
    }
    tt.flags |= i, h.memoizedState = Mo(1 | s, u, m, f);
  }
  function dp(i, s) {
    return va(8390656, 8, i, s);
  }
  function nf(i, s) {
    return _a(2048, 8, i, s);
  }
  function fp(i, s) {
    return _a(4, 2, i, s);
  }
  function hp(i, s) {
    return _a(4, 4, i, s);
  }
  function pp(i, s) {
    if (typeof s == "function") return i = i(), s(i), function() {
      s(null);
    };
    if (s != null) return i = i(), s.current = i, function() {
      s.current = null;
    };
  }
  function gp(i, s, u) {
    return u = u != null ? u.concat([i]) : null, _a(4, 4, pp.bind(null, s, i), u);
  }
  function rf() {
  }
  function mp(i, s) {
    var u = Pn();
    s = s === void 0 ? null : s;
    var f = u.memoizedState;
    return f !== null && s !== null && qd(s, f[1]) ? f[0] : (u.memoizedState = [i, s], i);
  }
  function yp(i, s) {
    var u = Pn();
    s = s === void 0 ? null : s;
    var f = u.memoizedState;
    return f !== null && s !== null && qd(s, f[1]) ? f[0] : (i = i(), u.memoizedState = [i, s], i);
  }
  function vp(i, s, u) {
    return Oi & 21 ? (Un(u, s) || (u = G1(), tt.lanes |= u, Ii |= u, i.baseState = !0), s) : (i.baseState && (i.baseState = !1, nn = !0), i.memoizedState = u);
  }
  function a5(i, s) {
    var u = Me;
    Me = u !== 0 && 4 > u ? u : 4, i(!0);
    var f = bd.transition;
    bd.transition = {};
    try {
      i(!1), s();
    } finally {
      Me = u, bd.transition = f;
    }
  }
  function _p() {
    return Pn().memoizedState;
  }
  function u5(i, s, u) {
    var f = Xr(i);
    if (u = { lane: f, action: u, hasEagerState: !1, eagerState: null, next: null }, Sp(i)) wp(s, u);
    else if (u = q1(i, s, u, f), u !== null) {
      var h = Bt();
      Tn(u, i, f, h), xp(u, s, f);
    }
  }
  function c5(i, s, u) {
    var f = Xr(i), h = { lane: f, action: u, hasEagerState: !1, eagerState: null, next: null };
    if (Sp(i)) wp(s, h);
    else {
      var m = i.alternate;
      if (i.lanes === 0 && (m === null || m.lanes === 0) && (m = s.lastRenderedReducer, m !== null)) try {
        var P = s.lastRenderedState, O = m(P, u);
        if (h.hasEagerState = !0, h.eagerState = O, Un(O, P)) {
          var U = s.interleaved;
          U === null ? (h.next = h, Wd(s)) : (h.next = U.next, U.next = h), s.interleaved = h;
          return;
        }
      } catch {
      } finally {
      }
      u = q1(i, s, h, f), u !== null && (h = Bt(), Tn(u, i, f, h), xp(u, s, f));
    }
  }
  function Sp(i) {
    var s = i.alternate;
    return i === tt || s !== null && s === tt;
  }
  function wp(i, s) {
    To = ya = !0;
    var u = i.pending;
    u === null ? s.next = s : (s.next = u.next, u.next = s), i.pending = s;
  }
  function xp(i, s, u) {
    if (u & 4194240) {
      var f = s.lanes;
      f &= i.pendingLanes, u |= f, s.lanes = u, Md(i, u);
    }
  }
  var Sa = { readContext: kn, useCallback: zt, useContext: zt, useEffect: zt, useImperativeHandle: zt, useInsertionEffect: zt, useLayoutEffect: zt, useMemo: zt, useReducer: zt, useRef: zt, useState: zt, useDebugValue: zt, useDeferredValue: zt, useTransition: zt, useMutableSource: zt, useSyncExternalStore: zt, useId: zt, unstable_isNewReconciler: !1 }, d5 = { readContext: kn, useCallback: function(i, s) {
    return ir().memoizedState = [i, s === void 0 ? null : s], i;
  }, useContext: kn, useEffect: dp, useImperativeHandle: function(i, s, u) {
    return u = u != null ? u.concat([i]) : null, va(
      4194308,
      4,
      pp.bind(null, s, i),
      u
    );
  }, useLayoutEffect: function(i, s) {
    return va(4194308, 4, i, s);
  }, useInsertionEffect: function(i, s) {
    return va(4, 2, i, s);
  }, useMemo: function(i, s) {
    var u = ir();
    return s = s === void 0 ? null : s, i = i(), u.memoizedState = [i, s], i;
  }, useReducer: function(i, s, u) {
    var f = ir();
    return s = u !== void 0 ? u(s) : s, f.memoizedState = f.baseState = s, i = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: i, lastRenderedState: s }, f.queue = i, i = i.dispatch = u5.bind(null, tt, i), [f.memoizedState, i];
  }, useRef: function(i) {
    var s = ir();
    return i = { current: i }, s.memoizedState = i;
  }, useState: up, useDebugValue: rf, useDeferredValue: function(i) {
    return ir().memoizedState = i;
  }, useTransition: function() {
    var i = up(!1), s = i[0];
    return i = a5.bind(null, i[1]), ir().memoizedState = i, [s, i];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(i, s, u) {
    var f = tt, h = ir();
    if (be) {
      if (u === void 0) throw Error(a(407));
      u = u();
    } else {
      if (u = s(), Tt === null) throw Error(a(349));
      Oi & 30 || ip(f, s, u);
    }
    h.memoizedState = u;
    var m = { value: u, getSnapshot: s };
    return h.queue = m, dp(op.bind(
      null,
      f,
      m,
      i
    ), [i]), f.flags |= 2048, Mo(9, sp.bind(null, f, m, u, s), void 0, null), u;
  }, useId: function() {
    var i = ir(), s = Tt.identifierPrefix;
    if (be) {
      var u = vr, f = yr;
      u = (f & ~(1 << 32 - Gn(f) - 1)).toString(32) + u, s = ":" + s + "R" + u, u = No++, 0 < u && (s += "H" + u.toString(32)), s += ":";
    } else u = l5++, s = ":" + s + "r" + u.toString(32) + ":";
    return i.memoizedState = s;
  }, unstable_isNewReconciler: !1 }, f5 = {
    readContext: kn,
    useCallback: mp,
    useContext: kn,
    useEffect: nf,
    useImperativeHandle: gp,
    useInsertionEffect: fp,
    useLayoutEffect: hp,
    useMemo: yp,
    useReducer: ef,
    useRef: cp,
    useState: function() {
      return ef(Ro);
    },
    useDebugValue: rf,
    useDeferredValue: function(i) {
      var s = Pn();
      return vp(s, yt.memoizedState, i);
    },
    useTransition: function() {
      var i = ef(Ro)[0], s = Pn().memoizedState;
      return [i, s];
    },
    useMutableSource: np,
    useSyncExternalStore: rp,
    useId: _p,
    unstable_isNewReconciler: !1
  }, h5 = { readContext: kn, useCallback: mp, useContext: kn, useEffect: nf, useImperativeHandle: gp, useInsertionEffect: fp, useLayoutEffect: hp, useMemo: yp, useReducer: tf, useRef: cp, useState: function() {
    return tf(Ro);
  }, useDebugValue: rf, useDeferredValue: function(i) {
    var s = Pn();
    return yt === null ? s.memoizedState = i : vp(s, yt.memoizedState, i);
  }, useTransition: function() {
    var i = tf(Ro)[0], s = Pn().memoizedState;
    return [i, s];
  }, useMutableSource: np, useSyncExternalStore: rp, useId: _p, unstable_isNewReconciler: !1 };
  function Vn(i, s) {
    if (i && i.defaultProps) {
      s = l({}, s), i = i.defaultProps;
      for (var u in i) s[u] === void 0 && (s[u] = i[u]);
      return s;
    }
    return s;
  }
  function sf(i, s, u, f) {
    s = i.memoizedState, u = u(f, s), u = u == null ? s : l({}, s, u), i.memoizedState = u, i.lanes === 0 && (i.updateQueue.baseState = u);
  }
  var wa = { isMounted: function(i) {
    return (i = i._reactInternals) ? G(i) === i : !1;
  }, enqueueSetState: function(i, s, u) {
    i = i._reactInternals;
    var f = Bt(), h = Xr(i), m = _r(f, h);
    m.payload = s, u != null && (m.callback = u), s = Wr(i, m, h), s !== null && (Tn(s, i, h, f), ha(s, i, h));
  }, enqueueReplaceState: function(i, s, u) {
    i = i._reactInternals;
    var f = Bt(), h = Xr(i), m = _r(f, h);
    m.tag = 1, m.payload = s, u != null && (m.callback = u), s = Wr(i, m, h), s !== null && (Tn(s, i, h, f), ha(s, i, h));
  }, enqueueForceUpdate: function(i, s) {
    i = i._reactInternals;
    var u = Bt(), f = Xr(i), h = _r(u, f);
    h.tag = 2, s != null && (h.callback = s), s = Wr(i, h, f), s !== null && (Tn(s, i, f, u), ha(s, i, f));
  } };
  function Cp(i, s, u, f, h, m, P) {
    return i = i.stateNode, typeof i.shouldComponentUpdate == "function" ? i.shouldComponentUpdate(f, m, P) : s.prototype && s.prototype.isPureReactComponent ? !ua(u, f) || !ua(h, m) : !0;
  }
  function kp(i, s, u) {
    var f = !1, h = Hr, m = s.contextType;
    return typeof m == "object" && m !== null ? m = kn(m) : (h = tn(s) ? Mi : Dt.current, f = s.contextTypes, m = (f = f != null) ? ms(i, h) : Hr), s = new s(u, m), i.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null, s.updater = wa, i.stateNode = s, s._reactInternals = i, f && (i = i.stateNode, i.__reactInternalMemoizedUnmaskedChildContext = h, i.__reactInternalMemoizedMaskedChildContext = m), s;
  }
  function Ep(i, s, u, f) {
    i = s.state, typeof s.componentWillReceiveProps == "function" && s.componentWillReceiveProps(u, f), typeof s.UNSAFE_componentWillReceiveProps == "function" && s.UNSAFE_componentWillReceiveProps(u, f), s.state !== i && wa.enqueueReplaceState(s, s.state, null);
  }
  function of(i, s, u, f) {
    var h = i.stateNode;
    h.props = u, h.state = i.memoizedState, h.refs = {}, Yd(i);
    var m = s.contextType;
    typeof m == "object" && m !== null ? h.context = kn(m) : (m = tn(s) ? Mi : Dt.current, h.context = ms(i, m)), h.state = i.memoizedState, m = s.getDerivedStateFromProps, typeof m == "function" && (sf(i, s, m, u), h.state = i.memoizedState), typeof s.getDerivedStateFromProps == "function" || typeof h.getSnapshotBeforeUpdate == "function" || typeof h.UNSAFE_componentWillMount != "function" && typeof h.componentWillMount != "function" || (s = h.state, typeof h.componentWillMount == "function" && h.componentWillMount(), typeof h.UNSAFE_componentWillMount == "function" && h.UNSAFE_componentWillMount(), s !== h.state && wa.enqueueReplaceState(h, h.state, null), pa(i, u, h, f), h.state = i.memoizedState), typeof h.componentDidMount == "function" && (i.flags |= 4194308);
  }
  function Es(i, s) {
    try {
      var u = "", f = s;
      do
        u += o5(f), f = f.return;
      while (f);
      var h = u;
    } catch (m) {
      h = `
Error generating stack: ` + m.message + `
` + m.stack;
    }
    return { value: i, source: s, stack: h, digest: null };
  }
  function lf(i, s, u) {
    return { value: i, source: null, stack: u ?? null, digest: s ?? null };
  }
  function af(i, s) {
    try {
      console.error(s.value);
    } catch (u) {
      setTimeout(function() {
        throw u;
      });
    }
  }
  var p5 = typeof WeakMap == "function" ? WeakMap : Map;
  function Pp(i, s, u) {
    u = _r(-1, u), u.tag = 3, u.payload = { element: null };
    var f = s.value;
    return u.callback = function() {
      Ia || (Ia = !0, Nf = f), af(i, s);
    }, u;
  }
  function Tp(i, s, u) {
    u = _r(-1, u), u.tag = 3;
    var f = i.type.getDerivedStateFromError;
    if (typeof f == "function") {
      var h = s.value;
      u.payload = function() {
        return f(h);
      }, u.callback = function() {
        af(i, s);
      };
    }
    var m = i.stateNode;
    return m !== null && typeof m.componentDidCatch == "function" && (u.callback = function() {
      af(i, s), typeof f != "function" && (Yr === null ? Yr = /* @__PURE__ */ new Set([this]) : Yr.add(this));
      var P = s.stack;
      this.componentDidCatch(s.value, { componentStack: P !== null ? P : "" });
    }), u;
  }
  function Np(i, s, u) {
    var f = i.pingCache;
    if (f === null) {
      f = i.pingCache = new p5();
      var h = /* @__PURE__ */ new Set();
      f.set(s, h);
    } else h = f.get(s), h === void 0 && (h = /* @__PURE__ */ new Set(), f.set(s, h));
    h.has(u) || (h.add(u), i = N5.bind(null, i, s, u), s.then(i, i));
  }
  function Rp(i) {
    do {
      var s;
      if ((s = i.tag === 13) && (s = i.memoizedState, s = s !== null ? s.dehydrated !== null : !0), s) return i;
      i = i.return;
    } while (i !== null);
    return null;
  }
  function Mp(i, s, u, f, h) {
    return i.mode & 1 ? (i.flags |= 65536, i.lanes = h, i) : (i === s ? i.flags |= 65536 : (i.flags |= 128, u.flags |= 131072, u.flags &= -52805, u.tag === 1 && (u.alternate === null ? u.tag = 17 : (s = _r(-1, 1), s.tag = 2, Wr(u, s, 1))), u.lanes |= 1), i);
  }
  var g5 = c.ReactCurrentOwner, nn = !1;
  function Xt(i, s, u, f) {
    s.child = i === null ? Q1(s, null, u, f) : Ss(s, i.child, u, f);
  }
  function Fp(i, s, u, f, h) {
    u = u.render;
    var m = s.ref;
    return xs(s, h), f = Zd(i, s, u, f, m, h), u = Jd(), i !== null && !nn ? (s.updateQueue = i.updateQueue, s.flags &= -2053, i.lanes &= ~h, Sr(i, s, h)) : (be && u && Id(s), s.flags |= 1, Xt(i, s, f, h), s.child);
  }
  function Lp(i, s, u, f, h) {
    if (i === null) {
      var m = u.type;
      return typeof m == "function" && !Of(m) && m.defaultProps === void 0 && u.compare === null && u.defaultProps === void 0 ? (s.tag = 15, s.type = m, Ap(i, s, m, f, h)) : (i = Va(u.type, null, f, s, s.mode, h), i.ref = s.ref, i.return = s, s.child = i);
    }
    if (m = i.child, !(i.lanes & h)) {
      var P = m.memoizedProps;
      if (u = u.compare, u = u !== null ? u : ua, u(P, f) && i.ref === s.ref) return Sr(i, s, h);
    }
    return s.flags |= 1, i = Qr(m, f), i.ref = s.ref, i.return = s, s.child = i;
  }
  function Ap(i, s, u, f, h) {
    if (i !== null) {
      var m = i.memoizedProps;
      if (ua(m, f) && i.ref === s.ref) if (nn = !1, s.pendingProps = f = m, (i.lanes & h) !== 0) i.flags & 131072 && (nn = !0);
      else return s.lanes = i.lanes, Sr(i, s, h);
    }
    return uf(i, s, u, f, h);
  }
  function Op(i, s, u) {
    var f = s.pendingProps, h = f.children, m = i !== null ? i.memoizedState : null;
    if (f.mode === "hidden") if (!(s.mode & 1)) s.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, We(Ts, pn), pn |= u;
    else {
      if (!(u & 1073741824)) return i = m !== null ? m.baseLanes | u : u, s.lanes = s.childLanes = 1073741824, s.memoizedState = { baseLanes: i, cachePool: null, transitions: null }, s.updateQueue = null, We(Ts, pn), pn |= i, null;
      s.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, f = m !== null ? m.baseLanes : u, We(Ts, pn), pn |= f;
    }
    else m !== null ? (f = m.baseLanes | u, s.memoizedState = null) : f = u, We(Ts, pn), pn |= f;
    return Xt(i, s, h, u), s.child;
  }
  function Ip(i, s) {
    var u = s.ref;
    (i === null && u !== null || i !== null && i.ref !== u) && (s.flags |= 512, s.flags |= 2097152);
  }
  function uf(i, s, u, f, h) {
    var m = tn(u) ? Mi : Dt.current;
    return m = ms(s, m), xs(s, h), u = Zd(i, s, u, f, m, h), f = Jd(), i !== null && !nn ? (s.updateQueue = i.updateQueue, s.flags &= -2053, i.lanes &= ~h, Sr(i, s, h)) : (be && f && Id(s), s.flags |= 1, Xt(i, s, u, h), s.child);
  }
  function Dp(i, s, u, f, h) {
    if (tn(u)) {
      var m = !0;
      ea(s);
    } else m = !1;
    if (xs(s, h), s.stateNode === null) Ca(i, s), kp(s, u, f), of(s, u, f, h), f = !0;
    else if (i === null) {
      var P = s.stateNode, O = s.memoizedProps;
      P.props = O;
      var U = P.context, $ = u.contextType;
      typeof $ == "object" && $ !== null ? $ = kn($) : ($ = tn(u) ? Mi : Dt.current, $ = ms(s, $));
      var ae = u.getDerivedStateFromProps, ye = typeof ae == "function" || typeof P.getSnapshotBeforeUpdate == "function";
      ye || typeof P.UNSAFE_componentWillReceiveProps != "function" && typeof P.componentWillReceiveProps != "function" || (O !== f || U !== $) && Ep(s, P, f, $), jr = !1;
      var te = s.memoizedState;
      P.state = te, pa(s, f, P, h), U = s.memoizedState, O !== f || te !== U || en.current || jr ? (typeof ae == "function" && (sf(s, u, ae, f), U = s.memoizedState), (O = jr || Cp(s, u, O, f, te, U, $)) ? (ye || typeof P.UNSAFE_componentWillMount != "function" && typeof P.componentWillMount != "function" || (typeof P.componentWillMount == "function" && P.componentWillMount(), typeof P.UNSAFE_componentWillMount == "function" && P.UNSAFE_componentWillMount()), typeof P.componentDidMount == "function" && (s.flags |= 4194308)) : (typeof P.componentDidMount == "function" && (s.flags |= 4194308), s.memoizedProps = f, s.memoizedState = U), P.props = f, P.state = U, P.context = $, f = O) : (typeof P.componentDidMount == "function" && (s.flags |= 4194308), f = !1);
    } else {
      P = s.stateNode, Z1(i, s), O = s.memoizedProps, $ = s.type === s.elementType ? O : Vn(s.type, O), P.props = $, ye = s.pendingProps, te = P.context, U = u.contextType, typeof U == "object" && U !== null ? U = kn(U) : (U = tn(u) ? Mi : Dt.current, U = ms(s, U));
      var Xe = u.getDerivedStateFromProps;
      (ae = typeof Xe == "function" || typeof P.getSnapshotBeforeUpdate == "function") || typeof P.UNSAFE_componentWillReceiveProps != "function" && typeof P.componentWillReceiveProps != "function" || (O !== ye || te !== U) && Ep(s, P, f, U), jr = !1, te = s.memoizedState, P.state = te, pa(s, f, P, h);
      var Ve = s.memoizedState;
      O !== ye || te !== Ve || en.current || jr ? (typeof Xe == "function" && (sf(s, u, Xe, f), Ve = s.memoizedState), ($ = jr || Cp(s, u, $, f, te, Ve, U) || !1) ? (ae || typeof P.UNSAFE_componentWillUpdate != "function" && typeof P.componentWillUpdate != "function" || (typeof P.componentWillUpdate == "function" && P.componentWillUpdate(f, Ve, U), typeof P.UNSAFE_componentWillUpdate == "function" && P.UNSAFE_componentWillUpdate(f, Ve, U)), typeof P.componentDidUpdate == "function" && (s.flags |= 4), typeof P.getSnapshotBeforeUpdate == "function" && (s.flags |= 1024)) : (typeof P.componentDidUpdate != "function" || O === i.memoizedProps && te === i.memoizedState || (s.flags |= 4), typeof P.getSnapshotBeforeUpdate != "function" || O === i.memoizedProps && te === i.memoizedState || (s.flags |= 1024), s.memoizedProps = f, s.memoizedState = Ve), P.props = f, P.state = Ve, P.context = U, f = $) : (typeof P.componentDidUpdate != "function" || O === i.memoizedProps && te === i.memoizedState || (s.flags |= 4), typeof P.getSnapshotBeforeUpdate != "function" || O === i.memoizedProps && te === i.memoizedState || (s.flags |= 1024), f = !1);
    }
    return cf(i, s, u, f, m, h);
  }
  function cf(i, s, u, f, h, m) {
    Ip(i, s);
    var P = (s.flags & 128) !== 0;
    if (!f && !P) return h && z1(s, u, !1), Sr(i, s, m);
    f = s.stateNode, g5.current = s;
    var O = P && typeof u.getDerivedStateFromError != "function" ? null : f.render();
    return s.flags |= 1, i !== null && P ? (s.child = Ss(s, i.child, null, m), s.child = Ss(s, null, O, m)) : Xt(i, s, O, m), s.memoizedState = f.state, h && z1(s, u, !0), s.child;
  }
  function zp(i) {
    var s = i.stateNode;
    s.pendingContext ? I1(i, s.pendingContext, s.pendingContext !== s.context) : s.context && I1(i, s.context, !1), Kd(i, s.containerInfo);
  }
  function Gp(i, s, u, f, h) {
    return _s(), Ud(h), s.flags |= 256, Xt(i, s, u, f), s.child;
  }
  var df = { dehydrated: null, treeContext: null, retryLane: 0 };
  function ff(i) {
    return { baseLanes: i, cachePool: null, transitions: null };
  }
  function Up(i, s, u) {
    var f = s.pendingProps, h = et.current, m = !1, P = (s.flags & 128) !== 0, O;
    if ((O = P) || (O = i !== null && i.memoizedState === null ? !1 : (h & 2) !== 0), O ? (m = !0, s.flags &= -129) : (i === null || i.memoizedState !== null) && (h |= 1), We(et, h & 1), i === null)
      return Gd(s), i = s.memoizedState, i !== null && (i = i.dehydrated, i !== null) ? (s.mode & 1 ? Cd(i) ? s.lanes = 8 : s.lanes = 1073741824 : s.lanes = 1, null) : (P = f.children, i = f.fallback, m ? (f = s.mode, m = s.child, P = { mode: "hidden", children: P }, !(f & 1) && m !== null ? (m.childLanes = 0, m.pendingProps = P) : m = Ha(P, f, 0, null), i = Ui(i, f, u, null), m.return = s, i.return = s, m.sibling = i, s.child = m, s.child.memoizedState = ff(u), s.memoizedState = df, i) : hf(s, P));
    if (h = i.memoizedState, h !== null && (O = h.dehydrated, O !== null)) return m5(i, s, P, f, O, h, u);
    if (m) {
      m = f.fallback, P = s.mode, h = i.child, O = h.sibling;
      var U = { mode: "hidden", children: f.children };
      return !(P & 1) && s.child !== h ? (f = s.child, f.childLanes = 0, f.pendingProps = U, s.deletions = null) : (f = Qr(h, U), f.subtreeFlags = h.subtreeFlags & 14680064), O !== null ? m = Qr(O, m) : (m = Ui(m, P, u, null), m.flags |= 2), m.return = s, f.return = s, f.sibling = m, s.child = f, f = m, m = s.child, P = i.child.memoizedState, P = P === null ? ff(u) : { baseLanes: P.baseLanes | u, cachePool: null, transitions: P.transitions }, m.memoizedState = P, m.childLanes = i.childLanes & ~u, s.memoizedState = df, f;
    }
    return m = i.child, i = m.sibling, f = Qr(m, { mode: "visible", children: f.children }), !(s.mode & 1) && (f.lanes = u), f.return = s, f.sibling = null, i !== null && (u = s.deletions, u === null ? (s.deletions = [i], s.flags |= 16) : u.push(i)), s.child = f, s.memoizedState = null, f;
  }
  function hf(i, s) {
    return s = Ha({ mode: "visible", children: s }, i.mode, 0, null), s.return = i, i.child = s;
  }
  function xa(i, s, u, f) {
    return f !== null && Ud(f), Ss(s, i.child, null, u), i = hf(s, s.pendingProps.children), i.flags |= 2, s.memoizedState = null, i;
  }
  function m5(i, s, u, f, h, m, P) {
    if (u)
      return s.flags & 256 ? (s.flags &= -257, f = lf(Error(a(422))), xa(i, s, P, f)) : s.memoizedState !== null ? (s.child = i.child, s.flags |= 128, null) : (m = f.fallback, h = s.mode, f = Ha({ mode: "visible", children: f.children }, h, 0, null), m = Ui(m, h, P, null), m.flags |= 2, f.return = s, m.return = s, f.sibling = m, s.child = f, s.mode & 1 && Ss(s, i.child, null, P), s.child.memoizedState = ff(P), s.memoizedState = df, m);
    if (!(s.mode & 1)) return xa(i, s, P, null);
    if (Cd(h)) return f = R4(h).digest, m = Error(a(419)), f = lf(
      m,
      f,
      void 0
    ), xa(i, s, P, f);
    if (u = (P & i.childLanes) !== 0, nn || u) {
      if (f = Tt, f !== null) {
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
        h = h & (f.suspendedLanes | P) ? 0 : h, h !== 0 && h !== m.retryLane && (m.retryLane = h, nr(i, h), Tn(
          f,
          i,
          h,
          -1
        ));
      }
      return Af(), f = lf(Error(a(421))), xa(i, s, P, f);
    }
    return O1(h) ? (s.flags |= 128, s.child = i.child, s = R5.bind(null, i), M4(h, s), null) : (i = m.treeContext, Be && (Cn = A4(h), hn = s, be = !0, Bn = null, Co = !1, i !== null && (wn[xn++] = yr, wn[xn++] = vr, wn[xn++] = Fi, yr = i.id, vr = i.overflow, Fi = s)), s = hf(s, f.children), s.flags |= 4096, s);
  }
  function Bp(i, s, u) {
    i.lanes |= s;
    var f = i.alternate;
    f !== null && (f.lanes |= s), jd(i.return, s, u);
  }
  function pf(i, s, u, f, h) {
    var m = i.memoizedState;
    m === null ? i.memoizedState = { isBackwards: s, rendering: null, renderingStartTime: 0, last: f, tail: u, tailMode: h } : (m.isBackwards = s, m.rendering = null, m.renderingStartTime = 0, m.last = f, m.tail = u, m.tailMode = h);
  }
  function Vp(i, s, u) {
    var f = s.pendingProps, h = f.revealOrder, m = f.tail;
    if (Xt(i, s, f.children, u), f = et.current, f & 2) f = f & 1 | 2, s.flags |= 128;
    else {
      if (i !== null && i.flags & 128) e: for (i = s.child; i !== null; ) {
        if (i.tag === 13) i.memoizedState !== null && Bp(i, u, s);
        else if (i.tag === 19) Bp(i, u, s);
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
    if (We(et, f), !(s.mode & 1)) s.memoizedState = null;
    else switch (h) {
      case "forwards":
        for (u = s.child, h = null; u !== null; ) i = u.alternate, i !== null && ga(i) === null && (h = u), u = u.sibling;
        u = h, u === null ? (h = s.child, s.child = null) : (h = u.sibling, u.sibling = null), pf(s, !1, h, u, m);
        break;
      case "backwards":
        for (u = null, h = s.child, s.child = null; h !== null; ) {
          if (i = h.alternate, i !== null && ga(i) === null) {
            s.child = h;
            break;
          }
          i = h.sibling, h.sibling = u, u = h, h = i;
        }
        pf(s, !0, u, null, m);
        break;
      case "together":
        pf(s, !1, null, null, void 0);
        break;
      default:
        s.memoizedState = null;
    }
    return s.child;
  }
  function Ca(i, s) {
    !(s.mode & 1) && i !== null && (i.alternate = null, s.alternate = null, s.flags |= 2);
  }
  function Sr(i, s, u) {
    if (i !== null && (s.dependencies = i.dependencies), Ii |= s.lanes, !(u & s.childLanes)) return null;
    if (i !== null && s.child !== i.child) throw Error(a(153));
    if (s.child !== null) {
      for (i = s.child, u = Qr(i, i.pendingProps), s.child = u, u.return = s; i.sibling !== null; ) i = i.sibling, u = u.sibling = Qr(i, i.pendingProps), u.return = s;
      u.sibling = null;
    }
    return s.child;
  }
  function y5(i, s, u) {
    switch (s.tag) {
      case 3:
        zp(s), _s();
        break;
      case 5:
        tp(s);
        break;
      case 1:
        tn(s.type) && ea(s);
        break;
      case 4:
        Kd(s, s.stateNode.containerInfo);
        break;
      case 10:
        b1(s, s.type._context, s.memoizedProps.value);
        break;
      case 13:
        var f = s.memoizedState;
        if (f !== null)
          return f.dehydrated !== null ? (We(et, et.current & 1), s.flags |= 128, null) : u & s.child.childLanes ? Up(i, s, u) : (We(et, et.current & 1), i = Sr(i, s, u), i !== null ? i.sibling : null);
        We(et, et.current & 1);
        break;
      case 19:
        if (f = (u & s.childLanes) !== 0, i.flags & 128) {
          if (f) return Vp(
            i,
            s,
            u
          );
          s.flags |= 128;
        }
        var h = s.memoizedState;
        if (h !== null && (h.rendering = null, h.tail = null, h.lastEffect = null), We(et, et.current), f) break;
        return null;
      case 22:
      case 23:
        return s.lanes = 0, Op(i, s, u);
    }
    return Sr(i, s, u);
  }
  function sr(i) {
    i.flags |= 4;
  }
  function Hp(i, s) {
    if (i !== null && i.child === s.child) return !0;
    if (s.flags & 16) return !1;
    for (i = s.child; i !== null; ) {
      if (i.flags & 12854 || i.subtreeFlags & 12854) return !1;
      i = i.sibling;
    }
    return !0;
  }
  var Fo, Lo, ka, Ea;
  if (me) Fo = function(i, s) {
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
  }, Lo = function() {
  }, ka = function(i, s, u, f, h) {
    if (i = i.memoizedProps, i !== f) {
      var m = s.stateNode, P = rr(En.current);
      u = je(m, u, i, f, h, P), (s.updateQueue = u) && sr(s);
    }
  }, Ea = function(i, s, u, f) {
    u !== f && sr(s);
  };
  else if (Ge) {
    Fo = function(i, s, u, f) {
      for (var h = s.child; h !== null; ) {
        if (h.tag === 5) {
          var m = h.stateNode;
          u && f && (m = bl(m, h.type, h.memoizedProps, h)), se(i, m);
        } else if (h.tag === 6) m = h.stateNode, u && f && (m = ql(m, h.memoizedProps, h)), se(i, m);
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
    var jp = function(i, s, u, f) {
      for (var h = s.child; h !== null; ) {
        if (h.tag === 5) {
          var m = h.stateNode;
          u && f && (m = bl(m, h.type, h.memoizedProps, h)), Ri(i, m);
        } else if (h.tag === 6) m = h.stateNode, u && f && (m = ql(m, h.memoizedProps, h)), Ri(i, m);
        else if (h.tag !== 4) {
          if (h.tag === 22 && h.memoizedState !== null) m = h.child, m !== null && (m.return = h), jp(i, h, !0, !0);
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
    Lo = function(i, s) {
      var u = s.stateNode;
      if (!Hp(i, s)) {
        i = u.containerInfo;
        var f = Ni(i);
        jp(f, s, !1, !1), u.pendingChildren = f, sr(s), xd(i, f);
      }
    }, ka = function(i, s, u, f, h) {
      var m = i.stateNode, P = i.memoizedProps;
      if ((i = Hp(i, s)) && P === f) s.stateNode = m;
      else {
        var O = s.stateNode, U = rr(En.current), $ = null;
        P !== f && ($ = je(O, u, P, f, h, U)), i && $ === null ? s.stateNode = m : (m = ps(m, $, u, P, f, s, i, O), Ne(m, u, f, h, U) && sr(s), s.stateNode = m, i ? sr(s) : Fo(m, s, !1, !1));
      }
    }, Ea = function(i, s, u, f) {
      u !== f ? (i = rr(Cs.current), u = rr(En.current), s.stateNode = ze(f, i, u, s), sr(s)) : s.stateNode = i.stateNode;
    };
  } else Lo = function() {
  }, ka = function() {
  }, Ea = function() {
  };
  function Ao(i, s) {
    if (!be) switch (i.tailMode) {
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
  function Gt(i) {
    var s = i.alternate !== null && i.alternate.child === i.child, u = 0, f = 0;
    if (s) for (var h = i.child; h !== null; ) u |= h.lanes | h.childLanes, f |= h.subtreeFlags & 14680064, f |= h.flags & 14680064, h.return = i, h = h.sibling;
    else for (h = i.child; h !== null; ) u |= h.lanes | h.childLanes, f |= h.subtreeFlags, f |= h.flags, h.return = i, h = h.sibling;
    return i.subtreeFlags |= f, i.childLanes = u, s;
  }
  function v5(i, s, u) {
    var f = s.pendingProps;
    switch (Dd(s), s.tag) {
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
        return Gt(s), null;
      case 1:
        return tn(s.type) && Jl(), Gt(s), null;
      case 3:
        return u = s.stateNode, ks(), Ke(en), Ke(Dt), Qd(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (i === null || i.child === null) && (aa(s) ? sr(s) : i === null || i.memoizedState.isDehydrated && !(s.flags & 256) || (s.flags |= 1024, Bn !== null && (Ff(Bn), Bn = null))), Lo(i, s), Gt(s), null;
      case 5:
        Xd(s), u = rr(Cs.current);
        var h = s.type;
        if (i !== null && s.stateNode != null) ka(i, s, h, f, u), i.ref !== s.ref && (s.flags |= 512, s.flags |= 2097152);
        else {
          if (!f) {
            if (s.stateNode === null) throw Error(a(166));
            return Gt(s), null;
          }
          if (i = rr(En.current), aa(s)) {
            if (!Be) throw Error(a(175));
            i = O4(s.stateNode, s.type, s.memoizedProps, u, i, s, !Co), s.updateQueue = i, i !== null && sr(s);
          } else {
            var m = b(h, f, u, i, s);
            Fo(m, s, !1, !1), s.stateNode = m, Ne(m, h, f, u, i) && sr(s);
          }
          s.ref !== null && (s.flags |= 512, s.flags |= 2097152);
        }
        return Gt(s), null;
      case 6:
        if (i && s.stateNode != null) Ea(i, s, i.memoizedProps, f);
        else {
          if (typeof f != "string" && s.stateNode === null) throw Error(a(166));
          if (i = rr(Cs.current), u = rr(En.current), aa(s)) {
            if (!Be) throw Error(a(176));
            if (i = s.stateNode, u = s.memoizedProps, (f = I4(i, u, s, !Co)) && (h = hn, h !== null)) switch (h.tag) {
              case 3:
                j4(h.stateNode.containerInfo, i, u, (h.mode & 1) !== 0);
                break;
              case 5:
                W4(h.type, h.memoizedProps, h.stateNode, i, u, (h.mode & 1) !== 0);
            }
            f && sr(s);
          } else s.stateNode = ze(f, i, u, s);
        }
        return Gt(s), null;
      case 13:
        if (Ke(et), f = s.memoizedState, i === null || i.memoizedState !== null && i.memoizedState.dehydrated !== null) {
          if (be && Cn !== null && s.mode & 1 && !(s.flags & 128)) K1(), _s(), s.flags |= 98560, h = !1;
          else if (h = aa(s), f !== null && f.dehydrated !== null) {
            if (i === null) {
              if (!h) throw Error(a(318));
              if (!Be) throw Error(a(344));
              if (h = s.memoizedState, h = h !== null ? h.dehydrated : null, !h) throw Error(a(317));
              D4(h, s);
            } else _s(), !(s.flags & 128) && (s.memoizedState = null), s.flags |= 4;
            Gt(s), h = !1;
          } else Bn !== null && (Ff(Bn), Bn = null), h = !0;
          if (!h) return s.flags & 65536 ? s : null;
        }
        return s.flags & 128 ? (s.lanes = u, s) : (u = f !== null, u !== (i !== null && i.memoizedState !== null) && u && (s.child.flags |= 8192, s.mode & 1 && (i === null || et.current & 1 ? vt === 0 && (vt = 3) : Af())), s.updateQueue !== null && (s.flags |= 4), Gt(s), null);
      case 4:
        return ks(), Lo(i, s), i === null && Ie(s.stateNode.containerInfo), Gt(s), null;
      case 10:
        return Hd(s.type._context), Gt(s), null;
      case 17:
        return tn(s.type) && Jl(), Gt(s), null;
      case 19:
        if (Ke(et), h = s.memoizedState, h === null) return Gt(s), null;
        if (f = (s.flags & 128) !== 0, m = h.rendering, m === null) if (f) Ao(h, !1);
        else {
          if (vt !== 0 || i !== null && i.flags & 128) for (i = s.child; i !== null; ) {
            if (m = ga(i), m !== null) {
              for (s.flags |= 128, Ao(h, !1), i = m.updateQueue, i !== null && (s.updateQueue = i, s.flags |= 4), s.subtreeFlags = 0, i = u, u = s.child; u !== null; ) f = u, h = i, f.flags &= 14680066, m = f.alternate, m === null ? (f.childLanes = 0, f.lanes = h, f.child = null, f.subtreeFlags = 0, f.memoizedProps = null, f.memoizedState = null, f.updateQueue = null, f.dependencies = null, f.stateNode = null) : (f.childLanes = m.childLanes, f.lanes = m.lanes, f.child = m.child, f.subtreeFlags = 0, f.deletions = null, f.memoizedProps = m.memoizedProps, f.memoizedState = m.memoizedState, f.updateQueue = m.updateQueue, f.type = m.type, h = m.dependencies, f.dependencies = h === null ? null : { lanes: h.lanes, firstContext: h.firstContext }), u = u.sibling;
              return We(et, et.current & 1 | 2), s.child;
            }
            i = i.sibling;
          }
          h.tail !== null && Et() > Tf && (s.flags |= 128, f = !0, Ao(h, !1), s.lanes = 4194304);
        }
        else {
          if (!f) if (i = ga(m), i !== null) {
            if (s.flags |= 128, f = !0, i = i.updateQueue, i !== null && (s.updateQueue = i, s.flags |= 4), Ao(h, !0), h.tail === null && h.tailMode === "hidden" && !m.alternate && !be) return Gt(s), null;
          } else 2 * Et() - h.renderingStartTime > Tf && u !== 1073741824 && (s.flags |= 128, f = !0, Ao(h, !1), s.lanes = 4194304);
          h.isBackwards ? (m.sibling = s.child, s.child = m) : (i = h.last, i !== null ? i.sibling = m : s.child = m, h.last = m);
        }
        return h.tail !== null ? (s = h.tail, h.rendering = s, h.tail = s.sibling, h.renderingStartTime = Et(), s.sibling = null, i = et.current, We(et, f ? i & 1 | 2 : i & 1), s) : (Gt(s), null);
      case 22:
      case 23:
        return Lf(), u = s.memoizedState !== null, i !== null && i.memoizedState !== null !== u && (s.flags |= 8192), u && s.mode & 1 ? pn & 1073741824 && (Gt(s), me && s.subtreeFlags & 6 && (s.flags |= 8192)) : Gt(s), null;
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
  function _5(i, s) {
    switch (Dd(s), s.tag) {
      case 1:
        return tn(s.type) && Jl(), i = s.flags, i & 65536 ? (s.flags = i & -65537 | 128, s) : null;
      case 3:
        return ks(), Ke(en), Ke(Dt), Qd(), i = s.flags, i & 65536 && !(i & 128) ? (s.flags = i & -65537 | 128, s) : null;
      case 5:
        return Xd(s), null;
      case 13:
        if (Ke(et), i = s.memoizedState, i !== null && i.dehydrated !== null) {
          if (s.alternate === null) throw Error(a(340));
          _s();
        }
        return i = s.flags, i & 65536 ? (s.flags = i & -65537 | 128, s) : null;
      case 19:
        return Ke(et), null;
      case 4:
        return ks(), null;
      case 10:
        return Hd(s.type._context), null;
      case 22:
      case 23:
        return Lf(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Pa = !1, Ut = !1, S5 = typeof WeakSet == "function" ? WeakSet : Set, oe = null;
  function Ps(i, s) {
    var u = i.ref;
    if (u !== null) if (typeof u == "function") try {
      u(null);
    } catch (f) {
      qe(i, s, f);
    }
    else u.current = null;
  }
  function gf(i, s, u) {
    try {
      u();
    } catch (f) {
      qe(i, s, f);
    }
  }
  var Wp = !1;
  function w5(i, s) {
    for (Z(i.containerInfo), oe = s; oe !== null; ) if (i = oe, s = i.child, (i.subtreeFlags & 1028) !== 0 && s !== null) s.return = i, oe = s;
    else for (; oe !== null; ) {
      i = oe;
      try {
        var u = i.alternate;
        if (i.flags & 1024) switch (i.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (u !== null) {
              var f = u.memoizedProps, h = u.memoizedState, m = i.stateNode, P = m.getSnapshotBeforeUpdate(i.elementType === i.type ? f : Vn(i.type, f), h);
              m.__reactInternalSnapshotBeforeUpdate = P;
            }
            break;
          case 3:
            me && fn(i.stateNode.containerInfo);
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
        qe(i, i.return, O);
      }
      if (s = i.sibling, s !== null) {
        s.return = i.return, oe = s;
        break;
      }
      oe = i.return;
    }
    return u = Wp, Wp = !1, u;
  }
  function Oo(i, s, u) {
    var f = s.updateQueue;
    if (f = f !== null ? f.lastEffect : null, f !== null) {
      var h = f = f.next;
      do {
        if ((h.tag & i) === i) {
          var m = h.destroy;
          h.destroy = void 0, m !== void 0 && gf(s, u, m);
        }
        h = h.next;
      } while (h !== f);
    }
  }
  function Ta(i, s) {
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
  function mf(i) {
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
  function Yp(i) {
    var s = i.alternate;
    s !== null && (i.alternate = null, Yp(s)), i.child = null, i.deletions = null, i.sibling = null, i.tag === 5 && (s = i.stateNode, s !== null && Jt(s)), i.stateNode = null, i.return = null, i.dependencies = null, i.memoizedProps = null, i.memoizedState = null, i.pendingProps = null, i.stateNode = null, i.updateQueue = null;
  }
  function Kp(i) {
    return i.tag === 5 || i.tag === 3 || i.tag === 4;
  }
  function Xp(i) {
    e: for (; ; ) {
      for (; i.sibling === null; ) {
        if (i.return === null || Kp(i.return)) return null;
        i = i.return;
      }
      for (i.sibling.return = i.return, i = i.sibling; i.tag !== 5 && i.tag !== 6 && i.tag !== 18; ) {
        if (i.flags & 2 || i.child === null || i.tag === 4) continue e;
        i.child.return = i, i = i.child;
      }
      if (!(i.flags & 2)) return i.stateNode;
    }
  }
  function yf(i, s, u) {
    var f = i.tag;
    if (f === 5 || f === 6) i = i.stateNode, s ? J(u, i, s) : $l(u, i);
    else if (f !== 4 && (i = i.child, i !== null)) for (yf(i, s, u), i = i.sibling; i !== null; ) yf(i, s, u), i = i.sibling;
  }
  function vf(i, s, u) {
    var f = i.tag;
    if (f === 5 || f === 6) i = i.stateNode, s ? Y(u, i, s) : Xl(u, i);
    else if (f !== 4 && (i = i.child, i !== null)) for (vf(i, s, u), i = i.sibling; i !== null; ) vf(i, s, u), i = i.sibling;
  }
  var Ft = null, Hn = !1;
  function or(i, s, u) {
    for (u = u.child; u !== null; ) _f(i, s, u), u = u.sibling;
  }
  function _f(i, s, u) {
    if (er && typeof er.onCommitFiberUnmount == "function") try {
      er.onCommitFiberUnmount(ia, u);
    } catch {
    }
    switch (u.tag) {
      case 5:
        Ut || Ps(u, s);
      case 6:
        if (me) {
          var f = Ft, h = Hn;
          Ft = null, or(i, s, u), Ft = f, Hn = h, Ft !== null && (Hn ? ee(Ft, u.stateNode) : ne(Ft, u.stateNode));
        } else or(i, s, u);
        break;
      case 18:
        me && Ft !== null && (Hn ? V4(Ft, u.stateNode) : B4(Ft, u.stateNode));
        break;
      case 4:
        me ? (f = Ft, h = Hn, Ft = u.stateNode.containerInfo, Hn = !0, or(i, s, u), Ft = f, Hn = h) : (Ge && (f = u.stateNode.containerInfo, h = Ni(f), _o(f, h)), or(i, s, u));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Ut && (f = u.updateQueue, f !== null && (f = f.lastEffect, f !== null))) {
          h = f = f.next;
          do {
            var m = h, P = m.destroy;
            m = m.tag, P !== void 0 && (m & 2 || m & 4) && gf(u, s, P), h = h.next;
          } while (h !== f);
        }
        or(i, s, u);
        break;
      case 1:
        if (!Ut && (Ps(u, s), f = u.stateNode, typeof f.componentWillUnmount == "function")) try {
          f.props = u.memoizedProps, f.state = u.memoizedState, f.componentWillUnmount();
        } catch (O) {
          qe(u, s, O);
        }
        or(i, s, u);
        break;
      case 21:
        or(i, s, u);
        break;
      case 22:
        u.mode & 1 ? (Ut = (f = Ut) || u.memoizedState !== null, or(i, s, u), Ut = f) : or(i, s, u);
        break;
      default:
        or(
          i,
          s,
          u
        );
    }
  }
  function $p(i) {
    var s = i.updateQueue;
    if (s !== null) {
      i.updateQueue = null;
      var u = i.stateNode;
      u === null && (u = i.stateNode = new S5()), s.forEach(function(f) {
        var h = M5.bind(null, i, f);
        u.has(f) || (u.add(f), f.then(h, h));
      });
    }
  }
  function jn(i, s) {
    var u = s.deletions;
    if (u !== null) for (var f = 0; f < u.length; f++) {
      var h = u[f];
      try {
        var m = i, P = s;
        if (me) {
          var O = P;
          e: for (; O !== null; ) {
            switch (O.tag) {
              case 5:
                Ft = O.stateNode, Hn = !1;
                break e;
              case 3:
                Ft = O.stateNode.containerInfo, Hn = !0;
                break e;
              case 4:
                Ft = O.stateNode.containerInfo, Hn = !0;
                break e;
            }
            O = O.return;
          }
          if (Ft === null) throw Error(a(160));
          _f(m, P, h), Ft = null, Hn = !1;
        } else _f(m, P, h);
        var U = h.alternate;
        U !== null && (U.return = null), h.return = null;
      } catch ($) {
        qe(h, s, $);
      }
    }
    if (s.subtreeFlags & 12854) for (s = s.child; s !== null; ) Qp(s, i), s = s.sibling;
  }
  function Qp(i, s) {
    var u = i.alternate, f = i.flags;
    switch (i.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (jn(s, i), lr(i), f & 4) {
          try {
            Oo(3, i, i.return), Ta(3, i);
          } catch (te) {
            qe(i, i.return, te);
          }
          try {
            Oo(5, i, i.return);
          } catch (te) {
            qe(i, i.return, te);
          }
        }
        break;
      case 1:
        jn(s, i), lr(i), f & 512 && u !== null && Ps(u, u.return);
        break;
      case 5:
        if (jn(s, i), lr(i), f & 512 && u !== null && Ps(u, u.return), me) {
          if (i.flags & 32) {
            var h = i.stateNode;
            try {
              Pe(h);
            } catch (te) {
              qe(i, i.return, te);
            }
          }
          if (f & 4 && (h = i.stateNode, h != null)) {
            var m = i.memoizedProps;
            if (u = u !== null ? u.memoizedProps : m, f = i.type, s = i.updateQueue, i.updateQueue = null, s !== null) try {
              wd(h, s, f, u, m, i);
            } catch (te) {
              qe(i, i.return, te);
            }
          }
        }
        break;
      case 6:
        if (jn(s, i), lr(i), f & 4 && me) {
          if (i.stateNode === null) throw Error(a(162));
          h = i.stateNode, m = i.memoizedProps, u = u !== null ? u.memoizedProps : m;
          try {
            Sd(h, u, m);
          } catch (te) {
            qe(i, i.return, te);
          }
        }
        break;
      case 3:
        if (jn(s, i), lr(i), f & 4) {
          if (me && Be && u !== null && u.memoizedState.isDehydrated) try {
            G4(s.containerInfo);
          } catch (te) {
            qe(i, i.return, te);
          }
          if (Ge) {
            h = s.containerInfo, m = s.pendingChildren;
            try {
              _o(h, m);
            } catch (te) {
              qe(i, i.return, te);
            }
          }
        }
        break;
      case 4:
        if (jn(
          s,
          i
        ), lr(i), f & 4 && Ge) {
          m = i.stateNode, h = m.containerInfo, m = m.pendingChildren;
          try {
            _o(h, m);
          } catch (te) {
            qe(i, i.return, te);
          }
        }
        break;
      case 13:
        jn(s, i), lr(i), h = i.child, h.flags & 8192 && (m = h.memoizedState !== null, h.stateNode.isHidden = m, !m || h.alternate !== null && h.alternate.memoizedState !== null || (Pf = Et())), f & 4 && $p(i);
        break;
      case 22:
        var P = u !== null && u.memoizedState !== null;
        if (i.mode & 1 ? (Ut = (u = Ut) || P, jn(s, i), Ut = u) : jn(s, i), lr(i), f & 8192) {
          if (u = i.memoizedState !== null, (i.stateNode.isHidden = u) && !P && i.mode & 1) for (oe = i, f = i.child; f !== null; ) {
            for (s = oe = f; oe !== null; ) {
              P = oe;
              var O = P.child;
              switch (P.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Oo(4, P, P.return);
                  break;
                case 1:
                  Ps(P, P.return);
                  var U = P.stateNode;
                  if (typeof U.componentWillUnmount == "function") {
                    var $ = P, ae = P.return;
                    try {
                      var ye = $;
                      U.props = ye.memoizedProps, U.state = ye.memoizedState, U.componentWillUnmount();
                    } catch (te) {
                      qe($, ae, te);
                    }
                  }
                  break;
                case 5:
                  Ps(P, P.return);
                  break;
                case 22:
                  if (P.memoizedState !== null) {
                    Zp(s);
                    continue;
                  }
              }
              O !== null ? (O.return = P, oe = O) : Zp(s);
            }
            f = f.sibling;
          }
          if (me) {
            e: if (f = null, me) for (s = i; ; ) {
              if (s.tag === 5) {
                if (f === null) {
                  f = s;
                  try {
                    h = s.stateNode, u ? ke(h) : Dn(s.stateNode, s.memoizedProps);
                  } catch (te) {
                    qe(i, i.return, te);
                  }
                }
              } else if (s.tag === 6) {
                if (f === null) try {
                  m = s.stateNode, u ? ht(m) : zn(m, s.memoizedProps);
                } catch (te) {
                  qe(i, i.return, te);
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
        jn(s, i), lr(i), f & 4 && $p(i);
        break;
      case 21:
        break;
      default:
        jn(s, i), lr(i);
    }
  }
  function lr(i) {
    var s = i.flags;
    if (s & 2) {
      try {
        if (me) {
          e: {
            for (var u = i.return; u !== null; ) {
              if (Kp(u)) {
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
              f.flags & 32 && (Pe(h), f.flags &= -33);
              var m = Xp(i);
              vf(i, m, h);
              break;
            case 3:
            case 4:
              var P = f.stateNode.containerInfo, O = Xp(i);
              yf(i, O, P);
              break;
            default:
              throw Error(a(161));
          }
        }
      } catch (U) {
        qe(i, i.return, U);
      }
      i.flags &= -3;
    }
    s & 4096 && (i.flags &= -4097);
  }
  function x5(i, s, u) {
    oe = i, bp(i);
  }
  function bp(i, s, u) {
    for (var f = (i.mode & 1) !== 0; oe !== null; ) {
      var h = oe, m = h.child;
      if (h.tag === 22 && f) {
        var P = h.memoizedState !== null || Pa;
        if (!P) {
          var O = h.alternate, U = O !== null && O.memoizedState !== null || Ut;
          O = Pa;
          var $ = Ut;
          if (Pa = P, (Ut = U) && !$) for (oe = h; oe !== null; ) P = oe, U = P.child, P.tag === 22 && P.memoizedState !== null ? Jp(h) : U !== null ? (U.return = P, oe = U) : Jp(h);
          for (; m !== null; ) oe = m, bp(m), m = m.sibling;
          oe = h, Pa = O, Ut = $;
        }
        qp(i);
      } else h.subtreeFlags & 8772 && m !== null ? (m.return = h, oe = m) : qp(i);
    }
  }
  function qp(i) {
    for (; oe !== null; ) {
      var s = oe;
      if (s.flags & 8772) {
        var u = s.alternate;
        try {
          if (s.flags & 8772) switch (s.tag) {
            case 0:
            case 11:
            case 15:
              Ut || Ta(5, s);
              break;
            case 1:
              var f = s.stateNode;
              if (s.flags & 4 && !Ut) if (u === null) f.componentDidMount();
              else {
                var h = s.elementType === s.type ? u.memoizedProps : Vn(s.type, u.memoizedProps);
                f.componentDidUpdate(h, u.memoizedState, f.__reactInternalSnapshotBeforeUpdate);
              }
              var m = s.updateQueue;
              m !== null && ep(s, m, f);
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
                ep(s, P, u);
              }
              break;
            case 5:
              var O = s.stateNode;
              u === null && s.flags & 4 && Ql(O, s.type, s.memoizedProps, s);
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (Be && s.memoizedState === null) {
                var U = s.alternate;
                if (U !== null) {
                  var $ = U.memoizedState;
                  if ($ !== null) {
                    var ae = $.dehydrated;
                    ae !== null && U4(ae);
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
          Ut || s.flags & 512 && mf(s);
        } catch (ye) {
          qe(s, s.return, ye);
        }
      }
      if (s === i) {
        oe = null;
        break;
      }
      if (u = s.sibling, u !== null) {
        u.return = s.return, oe = u;
        break;
      }
      oe = s.return;
    }
  }
  function Zp(i) {
    for (; oe !== null; ) {
      var s = oe;
      if (s === i) {
        oe = null;
        break;
      }
      var u = s.sibling;
      if (u !== null) {
        u.return = s.return, oe = u;
        break;
      }
      oe = s.return;
    }
  }
  function Jp(i) {
    for (; oe !== null; ) {
      var s = oe;
      try {
        switch (s.tag) {
          case 0:
          case 11:
          case 15:
            var u = s.return;
            try {
              Ta(4, s);
            } catch (U) {
              qe(s, u, U);
            }
            break;
          case 1:
            var f = s.stateNode;
            if (typeof f.componentDidMount == "function") {
              var h = s.return;
              try {
                f.componentDidMount();
              } catch (U) {
                qe(s, h, U);
              }
            }
            var m = s.return;
            try {
              mf(s);
            } catch (U) {
              qe(s, m, U);
            }
            break;
          case 5:
            var P = s.return;
            try {
              mf(s);
            } catch (U) {
              qe(s, P, U);
            }
        }
      } catch (U) {
        qe(s, s.return, U);
      }
      if (s === i) {
        oe = null;
        break;
      }
      var O = s.sibling;
      if (O !== null) {
        O.return = s.return, oe = O;
        break;
      }
      oe = s.return;
    }
  }
  var Na = 0, Ra = 1, Ma = 2, Fa = 3, La = 4;
  if (typeof Symbol == "function" && Symbol.for) {
    var Io = Symbol.for;
    Na = Io("selector.component"), Ra = Io("selector.has_pseudo_class"), Ma = Io("selector.role"), Fa = Io("selector.test_id"), La = Io("selector.text");
  }
  function Sf(i) {
    var s = Kt(i);
    if (s != null) {
      if (typeof s.memoizedProps["data-testname"] != "string") throw Error(a(364));
      return s;
    }
    if (i = md(i), i === null) throw Error(a(362));
    return i.stateNode.current;
  }
  function wf(i, s) {
    switch (s.$$typeof) {
      case Na:
        if (i.type === s.value) return !0;
        break;
      case Ra:
        e: {
          s = s.value, i = [i, 0];
          for (var u = 0; u < i.length; ) {
            var f = i[u++], h = i[u++], m = s[h];
            if (f.tag !== 5 || !Br(f)) {
              for (; m != null && wf(f, m); ) h++, m = s[h];
              if (h === s.length) {
                s = !0;
                break e;
              } else for (f = f.child; f !== null; ) i.push(f, h), f = f.sibling;
            }
          }
          s = !1;
        }
        return s;
      case Ma:
        if (i.tag === 5 && vd(i.stateNode, s.value)) return !0;
        break;
      case La:
        if ((i.tag === 5 || i.tag === 6) && (i = Yl(i), i !== null && 0 <= i.indexOf(s.value))) return !0;
        break;
      case Fa:
        if (i.tag === 5 && (i = i.memoizedProps["data-testname"], typeof i == "string" && i.toLowerCase() === s.value.toLowerCase())) return !0;
        break;
      default:
        throw Error(a(365));
    }
    return !1;
  }
  function xf(i) {
    switch (i.$$typeof) {
      case Na:
        return "<" + (A(i.value) || "Unknown") + ">";
      case Ra:
        return ":has(" + (xf(i) || "") + ")";
      case Ma:
        return '[role="' + i.value + '"]';
      case La:
        return '"' + i.value + '"';
      case Fa:
        return '[data-testname="' + i.value + '"]';
      default:
        throw Error(a(365));
    }
  }
  function eg(i, s) {
    var u = [];
    i = [i, 0];
    for (var f = 0; f < i.length; ) {
      var h = i[f++], m = i[f++], P = s[m];
      if (h.tag !== 5 || !Br(h)) {
        for (; P != null && wf(h, P); ) m++, P = s[m];
        if (m === s.length) u.push(h);
        else for (h = h.child; h !== null; ) i.push(h, m), h = h.sibling;
      }
    }
    return u;
  }
  function Cf(i, s) {
    if (!Ti) throw Error(a(363));
    i = Sf(i), i = eg(i, s), s = [], i = Array.from(i);
    for (var u = 0; u < i.length; ) {
      var f = i[u++];
      if (f.tag === 5) Br(f) || s.push(f.stateNode);
      else for (f = f.child; f !== null; ) i.push(f), f = f.sibling;
    }
    return s;
  }
  var C5 = Math.ceil, Aa = c.ReactCurrentDispatcher, kf = c.ReactCurrentOwner, ct = c.ReactCurrentBatchConfig, we = 0, Tt = null, pt = null, Lt = 0, pn = 0, Ts = Vr(0), vt = 0, Do = null, Ii = 0, Oa = 0, Ef = 0, zo = null, rn = null, Pf = 0, Tf = 1 / 0, wr = null;
  function Ns() {
    Tf = Et() + 500;
  }
  var Ia = !1, Nf = null, Yr = null, Da = !1, Kr = null, za = 0, Go = 0, Rf = null, Ga = -1, Ua = 0;
  function Bt() {
    return we & 6 ? Et() : Ga !== -1 ? Ga : Ga = Et();
  }
  function Xr(i) {
    return i.mode & 1 ? we & 2 && Lt !== 0 ? Lt & -Lt : s5.transition !== null ? (Ua === 0 && (Ua = G1()), Ua) : (i = Me, i !== 0 ? i : kt()) : 1;
  }
  function Tn(i, s, u, f) {
    if (50 < Go) throw Go = 0, Rf = null, Error(a(185));
    xo(i, u, f), (!(we & 2) || i !== Tt) && (i === Tt && (!(we & 2) && (Oa |= u), vt === 4 && $r(i, Lt)), sn(i, f), u === 1 && we === 0 && !(s.mode & 1) && (Ns(), sa && tr()));
  }
  function sn(i, s) {
    var u = i.callbackNode;
    b4(i, s);
    var f = ra(i, i === Tt ? Lt : 0);
    if (f === 0) u !== null && B1(u), i.callbackNode = null, i.callbackPriority = 0;
    else if (s = f & -f, i.callbackPriority !== s) {
      if (u != null && B1(u), s === 1) i.tag === 0 ? i5(ng.bind(null, i)) : V1(ng.bind(null, i)), ot ? Wl(function() {
        !(we & 6) && tr();
      }) : Fd(Ld, tr), u = null;
      else {
        switch (U1(f)) {
          case 1:
            u = Ld;
            break;
          case 4:
            u = e5;
            break;
          case 16:
            u = Ad;
            break;
          case 536870912:
            u = t5;
            break;
          default:
            u = Ad;
        }
        u = dg(u, tg.bind(null, i));
      }
      i.callbackPriority = s, i.callbackNode = u;
    }
  }
  function tg(i, s) {
    if (Ga = -1, Ua = 0, we & 6) throw Error(a(327));
    var u = i.callbackNode;
    if (Gi() && i.callbackNode !== u) return null;
    var f = ra(i, i === Tt ? Lt : 0);
    if (f === 0) return null;
    if (f & 30 || f & i.expiredLanes || s) s = Ba(i, f);
    else {
      s = f;
      var h = we;
      we |= 2;
      var m = sg();
      (Tt !== i || Lt !== s) && (wr = null, Ns(), Di(i, s));
      do
        try {
          P5();
          break;
        } catch (O) {
          ig(i, O);
        }
      while (!0);
      Vd(), Aa.current = m, we = h, pt !== null ? s = 0 : (Tt = null, Lt = 0, s = vt);
    }
    if (s !== 0) {
      if (s === 2 && (h = Nd(i), h !== 0 && (f = h, s = Mf(i, h))), s === 1) throw u = Do, Di(i, 0), $r(i, f), sn(i, Et()), u;
      if (s === 6) $r(i, f);
      else {
        if (h = i.current.alternate, !(f & 30) && !k5(h) && (s = Ba(i, f), s === 2 && (m = Nd(i), m !== 0 && (f = m, s = Mf(i, m))), s === 1)) throw u = Do, Di(i, 0), $r(i, f), sn(i, Et()), u;
        switch (i.finishedWork = h, i.finishedLanes = f, s) {
          case 0:
          case 1:
            throw Error(a(345));
          case 2:
            zi(i, rn, wr);
            break;
          case 3:
            if ($r(i, f), (f & 130023424) === f && (s = Pf + 500 - Et(), 10 < s)) {
              if (ra(i, 0) !== 0) break;
              if (h = i.suspendedLanes, (h & f) !== f) {
                Bt(), i.pingedLanes |= i.suspendedLanes & h;
                break;
              }
              i.timeoutHandle = L(zi.bind(null, i, rn, wr), s);
              break;
            }
            zi(i, rn, wr);
            break;
          case 4:
            if ($r(i, f), (f & 4194240) === f) break;
            for (s = i.eventTimes, h = -1; 0 < f; ) {
              var P = 31 - Gn(f);
              m = 1 << P, P = s[P], P > h && (h = P), f &= ~m;
            }
            if (f = h, f = Et() - f, f = (120 > f ? 120 : 480 > f ? 480 : 1080 > f ? 1080 : 1920 > f ? 1920 : 3e3 > f ? 3e3 : 4320 > f ? 4320 : 1960 * C5(f / 1960)) - f, 10 < f) {
              i.timeoutHandle = L(zi.bind(null, i, rn, wr), f);
              break;
            }
            zi(i, rn, wr);
            break;
          case 5:
            zi(i, rn, wr);
            break;
          default:
            throw Error(a(329));
        }
      }
    }
    return sn(i, Et()), i.callbackNode === u ? tg.bind(null, i) : null;
  }
  function Mf(i, s) {
    var u = zo;
    return i.current.memoizedState.isDehydrated && (Di(i, s).flags |= 256), i = Ba(i, s), i !== 2 && (s = rn, rn = u, s !== null && Ff(s)), i;
  }
  function Ff(i) {
    rn === null ? rn = i : rn.push.apply(rn, i);
  }
  function k5(i) {
    for (var s = i; ; ) {
      if (s.flags & 16384) {
        var u = s.updateQueue;
        if (u !== null && (u = u.stores, u !== null)) for (var f = 0; f < u.length; f++) {
          var h = u[f], m = h.getSnapshot;
          h = h.value;
          try {
            if (!Un(m(), h)) return !1;
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
  function $r(i, s) {
    for (s &= ~Ef, s &= ~Oa, i.suspendedLanes |= s, i.pingedLanes &= ~s, i = i.expirationTimes; 0 < s; ) {
      var u = 31 - Gn(s), f = 1 << u;
      i[u] = -1, s &= ~f;
    }
  }
  function ng(i) {
    if (we & 6) throw Error(a(327));
    Gi();
    var s = ra(i, 0);
    if (!(s & 1)) return sn(i, Et()), null;
    var u = Ba(i, s);
    if (i.tag !== 0 && u === 2) {
      var f = Nd(i);
      f !== 0 && (s = f, u = Mf(i, f));
    }
    if (u === 1) throw u = Do, Di(i, 0), $r(i, s), sn(i, Et()), u;
    if (u === 6) throw Error(a(345));
    return i.finishedWork = i.current.alternate, i.finishedLanes = s, zi(i, rn, wr), sn(i, Et()), null;
  }
  function rg(i) {
    Kr !== null && Kr.tag === 0 && !(we & 6) && Gi();
    var s = we;
    we |= 1;
    var u = ct.transition, f = Me;
    try {
      if (ct.transition = null, Me = 1, i) return i();
    } finally {
      Me = f, ct.transition = u, we = s, !(we & 6) && tr();
    }
  }
  function Lf() {
    pn = Ts.current, Ke(Ts);
  }
  function Di(i, s) {
    i.finishedWork = null, i.finishedLanes = 0;
    var u = i.timeoutHandle;
    if (u !== ue && (i.timeoutHandle = ue, W(u)), pt !== null) for (u = pt.return; u !== null; ) {
      var f = u;
      switch (Dd(f), f.tag) {
        case 1:
          f = f.type.childContextTypes, f != null && Jl();
          break;
        case 3:
          ks(), Ke(en), Ke(Dt), Qd();
          break;
        case 5:
          Xd(f);
          break;
        case 4:
          ks();
          break;
        case 13:
          Ke(et);
          break;
        case 19:
          Ke(et);
          break;
        case 10:
          Hd(f.type._context);
          break;
        case 22:
        case 23:
          Lf();
      }
      u = u.return;
    }
    if (Tt = i, pt = i = Qr(i.current, null), Lt = pn = s, vt = 0, Do = null, Ef = Oa = Ii = 0, rn = zo = null, Ai !== null) {
      for (s = 0; s < Ai.length; s++) if (u = Ai[s], f = u.interleaved, f !== null) {
        u.interleaved = null;
        var h = f.next, m = u.pending;
        if (m !== null) {
          var P = m.next;
          m.next = h, f.next = P;
        }
        u.pending = f;
      }
      Ai = null;
    }
    return i;
  }
  function ig(i, s) {
    do {
      var u = pt;
      try {
        if (Vd(), ma.current = Sa, ya) {
          for (var f = tt.memoizedState; f !== null; ) {
            var h = f.queue;
            h !== null && (h.pending = null), f = f.next;
          }
          ya = !1;
        }
        if (Oi = 0, Pt = yt = tt = null, To = !1, No = 0, kf.current = null, u === null || u.return === null) {
          vt = 1, Do = s, pt = null;
          break;
        }
        e: {
          var m = i, P = u.return, O = u, U = s;
          if (s = Lt, O.flags |= 32768, U !== null && typeof U == "object" && typeof U.then == "function") {
            var $ = U, ae = O, ye = ae.tag;
            if (!(ae.mode & 1) && (ye === 0 || ye === 11 || ye === 15)) {
              var te = ae.alternate;
              te ? (ae.updateQueue = te.updateQueue, ae.memoizedState = te.memoizedState, ae.lanes = te.lanes) : (ae.updateQueue = null, ae.memoizedState = null);
            }
            var Xe = Rp(P);
            if (Xe !== null) {
              Xe.flags &= -257, Mp(Xe, P, O, m, s), Xe.mode & 1 && Np(m, $, s), s = Xe, U = $;
              var Ve = s.updateQueue;
              if (Ve === null) {
                var on = /* @__PURE__ */ new Set();
                on.add(U), s.updateQueue = on;
              } else Ve.add(U);
              break e;
            } else {
              if (!(s & 1)) {
                Np(m, $, s), Af();
                break e;
              }
              U = Error(a(426));
            }
          } else if (be && O.mode & 1) {
            var xr = Rp(P);
            if (xr !== null) {
              !(xr.flags & 65536) && (xr.flags |= 256), Mp(xr, P, O, m, s), Ud(Es(U, O));
              break e;
            }
          }
          m = U = Es(U, O), vt !== 4 && (vt = 2), zo === null ? zo = [m] : zo.push(m), m = P;
          do {
            switch (m.tag) {
              case 3:
                m.flags |= 65536, s &= -s, m.lanes |= s;
                var z = Pp(m, U, s);
                J1(m, z);
                break e;
              case 1:
                O = U;
                var I = m.type, B = m.stateNode;
                if (!(m.flags & 128) && (typeof I.getDerivedStateFromError == "function" || B !== null && typeof B.componentDidCatch == "function" && (Yr === null || !Yr.has(B)))) {
                  m.flags |= 65536, s &= -s, m.lanes |= s;
                  var re = Tp(m, O, s);
                  J1(m, re);
                  break e;
                }
            }
            m = m.return;
          } while (m !== null);
        }
        lg(u);
      } catch (ce) {
        s = ce, pt === u && u !== null && (pt = u = u.return);
        continue;
      }
      break;
    } while (!0);
  }
  function sg() {
    var i = Aa.current;
    return Aa.current = Sa, i === null ? Sa : i;
  }
  function Af() {
    (vt === 0 || vt === 3 || vt === 2) && (vt = 4), Tt === null || !(Ii & 268435455) && !(Oa & 268435455) || $r(Tt, Lt);
  }
  function Ba(i, s) {
    var u = we;
    we |= 2;
    var f = sg();
    (Tt !== i || Lt !== s) && (wr = null, Di(i, s));
    do
      try {
        E5();
        break;
      } catch (h) {
        ig(i, h);
      }
    while (!0);
    if (Vd(), we = u, Aa.current = f, pt !== null) throw Error(a(261));
    return Tt = null, Lt = 0, vt;
  }
  function E5() {
    for (; pt !== null; ) og(pt);
  }
  function P5() {
    for (; pt !== null && !Z4(); ) og(pt);
  }
  function og(i) {
    var s = cg(i.alternate, i, pn);
    i.memoizedProps = i.pendingProps, s === null ? lg(i) : pt = s, kf.current = null;
  }
  function lg(i) {
    var s = i;
    do {
      var u = s.alternate;
      if (i = s.return, s.flags & 32768) {
        if (u = _5(u, s), u !== null) {
          u.flags &= 32767, pt = u;
          return;
        }
        if (i !== null) i.flags |= 32768, i.subtreeFlags = 0, i.deletions = null;
        else {
          vt = 6, pt = null;
          return;
        }
      } else if (u = v5(u, s, pn), u !== null) {
        pt = u;
        return;
      }
      if (s = s.sibling, s !== null) {
        pt = s;
        return;
      }
      pt = s = i;
    } while (s !== null);
    vt === 0 && (vt = 5);
  }
  function zi(i, s, u) {
    var f = Me, h = ct.transition;
    try {
      ct.transition = null, Me = 1, T5(i, s, u, f);
    } finally {
      ct.transition = h, Me = f;
    }
    return null;
  }
  function T5(i, s, u, f) {
    do
      Gi();
    while (Kr !== null);
    if (we & 6) throw Error(a(327));
    u = i.finishedWork;
    var h = i.finishedLanes;
    if (u === null) return null;
    if (i.finishedWork = null, i.finishedLanes = 0, u === i.current) throw Error(a(177));
    i.callbackNode = null, i.callbackPriority = 0;
    var m = u.lanes | u.childLanes;
    if (q4(i, m), i === Tt && (pt = Tt = null, Lt = 0), !(u.subtreeFlags & 2064) && !(u.flags & 2064) || Da || (Da = !0, dg(Ad, function() {
      return Gi(), null;
    })), m = (u.flags & 15990) !== 0, u.subtreeFlags & 15990 || m) {
      m = ct.transition, ct.transition = null;
      var P = Me;
      Me = 1;
      var O = we;
      we |= 4, kf.current = null, w5(i, u), Qp(u, i), Q(i.containerInfo), i.current = u, x5(u), J4(), we = O, Me = P, ct.transition = m;
    } else i.current = u;
    if (Da && (Da = !1, Kr = i, za = h), m = i.pendingLanes, m === 0 && (Yr = null), n5(u.stateNode), sn(i, Et()), s !== null) for (f = i.onRecoverableError, u = 0; u < s.length; u++) h = s[u], f(h.value, { componentStack: h.stack, digest: h.digest });
    if (Ia) throw Ia = !1, i = Nf, Nf = null, i;
    return za & 1 && i.tag !== 0 && Gi(), m = i.pendingLanes, m & 1 ? i === Rf ? Go++ : (Go = 0, Rf = i) : Go = 0, tr(), null;
  }
  function Gi() {
    if (Kr !== null) {
      var i = U1(za), s = ct.transition, u = Me;
      try {
        if (ct.transition = null, Me = 16 > i ? 16 : i, Kr === null) var f = !1;
        else {
          if (i = Kr, Kr = null, za = 0, we & 6) throw Error(a(331));
          var h = we;
          for (we |= 4, oe = i.current; oe !== null; ) {
            var m = oe, P = m.child;
            if (oe.flags & 16) {
              var O = m.deletions;
              if (O !== null) {
                for (var U = 0; U < O.length; U++) {
                  var $ = O[U];
                  for (oe = $; oe !== null; ) {
                    var ae = oe;
                    switch (ae.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Oo(8, ae, m);
                    }
                    var ye = ae.child;
                    if (ye !== null) ye.return = ae, oe = ye;
                    else for (; oe !== null; ) {
                      ae = oe;
                      var te = ae.sibling, Xe = ae.return;
                      if (Yp(ae), ae === $) {
                        oe = null;
                        break;
                      }
                      if (te !== null) {
                        te.return = Xe, oe = te;
                        break;
                      }
                      oe = Xe;
                    }
                  }
                }
                var Ve = m.alternate;
                if (Ve !== null) {
                  var on = Ve.child;
                  if (on !== null) {
                    Ve.child = null;
                    do {
                      var xr = on.sibling;
                      on.sibling = null, on = xr;
                    } while (on !== null);
                  }
                }
                oe = m;
              }
            }
            if (m.subtreeFlags & 2064 && P !== null) P.return = m, oe = P;
            else e: for (; oe !== null; ) {
              if (m = oe, m.flags & 2048) switch (m.tag) {
                case 0:
                case 11:
                case 15:
                  Oo(9, m, m.return);
              }
              var z = m.sibling;
              if (z !== null) {
                z.return = m.return, oe = z;
                break e;
              }
              oe = m.return;
            }
          }
          var I = i.current;
          for (oe = I; oe !== null; ) {
            P = oe;
            var B = P.child;
            if (P.subtreeFlags & 2064 && B !== null) B.return = P, oe = B;
            else e: for (P = I; oe !== null; ) {
              if (O = oe, O.flags & 2048) try {
                switch (O.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ta(9, O);
                }
              } catch (ce) {
                qe(O, O.return, ce);
              }
              if (O === P) {
                oe = null;
                break e;
              }
              var re = O.sibling;
              if (re !== null) {
                re.return = O.return, oe = re;
                break e;
              }
              oe = O.return;
            }
          }
          if (we = h, tr(), er && typeof er.onPostCommitFiberRoot == "function") try {
            er.onPostCommitFiberRoot(ia, i);
          } catch {
          }
          f = !0;
        }
        return f;
      } finally {
        Me = u, ct.transition = s;
      }
    }
    return !1;
  }
  function ag(i, s, u) {
    s = Es(u, s), s = Pp(i, s, 1), i = Wr(i, s, 1), s = Bt(), i !== null && (xo(i, 1, s), sn(i, s));
  }
  function qe(i, s, u) {
    if (i.tag === 3) ag(i, i, u);
    else for (; s !== null; ) {
      if (s.tag === 3) {
        ag(s, i, u);
        break;
      } else if (s.tag === 1) {
        var f = s.stateNode;
        if (typeof s.type.getDerivedStateFromError == "function" || typeof f.componentDidCatch == "function" && (Yr === null || !Yr.has(f))) {
          i = Es(u, i), i = Tp(s, i, 1), s = Wr(s, i, 1), i = Bt(), s !== null && (xo(s, 1, i), sn(s, i));
          break;
        }
      }
      s = s.return;
    }
  }
  function N5(i, s, u) {
    var f = i.pingCache;
    f !== null && f.delete(s), s = Bt(), i.pingedLanes |= i.suspendedLanes & u, Tt === i && (Lt & u) === u && (vt === 4 || vt === 3 && (Lt & 130023424) === Lt && 500 > Et() - Pf ? Di(i, 0) : Ef |= u), sn(i, s);
  }
  function ug(i, s) {
    s === 0 && (i.mode & 1 ? (s = na, na <<= 1, !(na & 130023424) && (na = 4194304)) : s = 1);
    var u = Bt();
    i = nr(i, s), i !== null && (xo(i, s, u), sn(i, u));
  }
  function R5(i) {
    var s = i.memoizedState, u = 0;
    s !== null && (u = s.retryLane), ug(i, u);
  }
  function M5(i, s) {
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
    f !== null && f.delete(s), ug(i, u);
  }
  var cg;
  cg = function(i, s, u) {
    if (i !== null) if (i.memoizedProps !== s.pendingProps || en.current) nn = !0;
    else {
      if (!(i.lanes & u) && !(s.flags & 128)) return nn = !1, y5(i, s, u);
      nn = !!(i.flags & 131072);
    }
    else nn = !1, be && s.flags & 1048576 && H1(s, la, s.index);
    switch (s.lanes = 0, s.tag) {
      case 2:
        var f = s.type;
        Ca(i, s), i = s.pendingProps;
        var h = ms(s, Dt.current);
        xs(s, u), h = Zd(null, s, f, i, h, u);
        var m = Jd();
        return s.flags |= 1, typeof h == "object" && h !== null && typeof h.render == "function" && h.$$typeof === void 0 ? (s.tag = 1, s.memoizedState = null, s.updateQueue = null, tn(f) ? (m = !0, ea(s)) : m = !1, s.memoizedState = h.state !== null && h.state !== void 0 ? h.state : null, Yd(s), h.updater = wa, s.stateNode = h, h._reactInternals = s, of(s, f, i, u), s = cf(null, s, f, !0, m, u)) : (s.tag = 0, be && m && Id(s), Xt(null, s, h, u), s = s.child), s;
      case 16:
        f = s.elementType;
        e: {
          switch (Ca(i, s), i = s.pendingProps, h = f._init, f = h(f._payload), s.type = f, h = s.tag = L5(f), i = Vn(f, i), h) {
            case 0:
              s = uf(null, s, f, i, u);
              break e;
            case 1:
              s = Dp(null, s, f, i, u);
              break e;
            case 11:
              s = Fp(null, s, f, i, u);
              break e;
            case 14:
              s = Lp(null, s, f, Vn(f.type, i), u);
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
        return f = s.type, h = s.pendingProps, h = s.elementType === f ? h : Vn(f, h), uf(i, s, f, h, u);
      case 1:
        return f = s.type, h = s.pendingProps, h = s.elementType === f ? h : Vn(f, h), Dp(i, s, f, h, u);
      case 3:
        e: {
          if (zp(s), i === null) throw Error(a(387));
          f = s.pendingProps, m = s.memoizedState, h = m.element, Z1(i, s), pa(s, f, null, u);
          var P = s.memoizedState;
          if (f = P.element, Be && m.isDehydrated) if (m = { element: f, isDehydrated: !1, cache: P.cache, pendingSuspenseBoundaries: P.pendingSuspenseBoundaries, transitions: P.transitions }, s.updateQueue.baseState = m, s.memoizedState = m, s.flags & 256) {
            h = Es(Error(a(423)), s), s = Gp(i, s, f, u, h);
            break e;
          } else if (f !== h) {
            h = Es(Error(a(424)), s), s = Gp(i, s, f, u, h);
            break e;
          } else for (Be && (Cn = L4(s.stateNode.containerInfo), hn = s, be = !0, Bn = null, Co = !1), u = Q1(s, null, f, u), s.child = u; u; ) u.flags = u.flags & -3 | 4096, u = u.sibling;
          else {
            if (_s(), f === h) {
              s = Sr(i, s, u);
              break e;
            }
            Xt(i, s, f, u);
          }
          s = s.child;
        }
        return s;
      case 5:
        return tp(s), i === null && Gd(s), f = s.type, h = s.pendingProps, m = i !== null ? i.memoizedProps : null, P = h.children, mt(f, h) ? P = null : m !== null && mt(f, m) && (s.flags |= 32), Ip(i, s), Xt(i, s, P, u), s.child;
      case 6:
        return i === null && Gd(s), null;
      case 13:
        return Up(i, s, u);
      case 4:
        return Kd(s, s.stateNode.containerInfo), f = s.pendingProps, i === null ? s.child = Ss(s, null, f, u) : Xt(i, s, f, u), s.child;
      case 11:
        return f = s.type, h = s.pendingProps, h = s.elementType === f ? h : Vn(f, h), Fp(i, s, f, h, u);
      case 7:
        return Xt(i, s, s.pendingProps, u), s.child;
      case 8:
        return Xt(i, s, s.pendingProps.children, u), s.child;
      case 12:
        return Xt(i, s, s.pendingProps.children, u), s.child;
      case 10:
        e: {
          if (f = s.type._context, h = s.pendingProps, m = s.memoizedProps, P = h.value, b1(s, f, P), m !== null) if (Un(m.value, P)) {
            if (m.children === h.children && !en.current) {
              s = Sr(i, s, u);
              break e;
            }
          } else for (m = s.child, m !== null && (m.return = s); m !== null; ) {
            var O = m.dependencies;
            if (O !== null) {
              P = m.child;
              for (var U = O.firstContext; U !== null; ) {
                if (U.context === f) {
                  if (m.tag === 1) {
                    U = _r(-1, u & -u), U.tag = 2;
                    var $ = m.updateQueue;
                    if ($ !== null) {
                      $ = $.shared;
                      var ae = $.pending;
                      ae === null ? U.next = U : (U.next = ae.next, ae.next = U), $.pending = U;
                    }
                  }
                  m.lanes |= u, U = m.alternate, U !== null && (U.lanes |= u), jd(m.return, u, s), O.lanes |= u;
                  break;
                }
                U = U.next;
              }
            } else if (m.tag === 10) P = m.type === s.type ? null : m.child;
            else if (m.tag === 18) {
              if (P = m.return, P === null) throw Error(a(341));
              P.lanes |= u, O = P.alternate, O !== null && (O.lanes |= u), jd(P, u, s), P = m.sibling;
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
          Xt(i, s, h.children, u), s = s.child;
        }
        return s;
      case 9:
        return h = s.type, f = s.pendingProps.children, xs(s, u), h = kn(h), f = f(h), s.flags |= 1, Xt(i, s, f, u), s.child;
      case 14:
        return f = s.type, h = Vn(f, s.pendingProps), h = Vn(f.type, h), Lp(i, s, f, h, u);
      case 15:
        return Ap(i, s, s.type, s.pendingProps, u);
      case 17:
        return f = s.type, h = s.pendingProps, h = s.elementType === f ? h : Vn(f, h), Ca(i, s), s.tag = 1, tn(f) ? (i = !0, ea(s)) : i = !1, xs(s, u), kp(s, f, h), of(s, f, h, u), cf(null, s, f, !0, i, u);
      case 19:
        return Vp(i, s, u);
      case 22:
        return Op(i, s, u);
    }
    throw Error(a(156, s.tag));
  };
  function dg(i, s) {
    return Fd(i, s);
  }
  function F5(i, s, u, f) {
    this.tag = i, this.key = u, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = s, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = f, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Nn(i, s, u, f) {
    return new F5(i, s, u, f);
  }
  function Of(i) {
    return i = i.prototype, !(!i || !i.isReactComponent);
  }
  function L5(i) {
    if (typeof i == "function") return Of(i) ? 1 : 0;
    if (i != null) {
      if (i = i.$$typeof, i === E) return 11;
      if (i === x) return 14;
    }
    return 2;
  }
  function Qr(i, s) {
    var u = i.alternate;
    return u === null ? (u = Nn(i.tag, s, i.key, i.mode), u.elementType = i.elementType, u.type = i.type, u.stateNode = i.stateNode, u.alternate = i, i.alternate = u) : (u.pendingProps = s, u.type = i.type, u.flags = 0, u.subtreeFlags = 0, u.deletions = null), u.flags = i.flags & 14680064, u.childLanes = i.childLanes, u.lanes = i.lanes, u.child = i.child, u.memoizedProps = i.memoizedProps, u.memoizedState = i.memoizedState, u.updateQueue = i.updateQueue, s = i.dependencies, u.dependencies = s === null ? null : { lanes: s.lanes, firstContext: s.firstContext }, u.sibling = i.sibling, u.index = i.index, u.ref = i.ref, u;
  }
  function Va(i, s, u, f, h, m) {
    var P = 2;
    if (f = i, typeof i == "function") Of(i) && (P = 1);
    else if (typeof i == "string") P = 5;
    else e: switch (i) {
      case y:
        return Ui(u.children, h, m, s);
      case w:
        P = 8, h |= 8;
        break;
      case _:
        return i = Nn(12, u, s, h | 2), i.elementType = _, i.lanes = m, i;
      case R:
        return i = Nn(13, u, s, h), i.elementType = R, i.lanes = m, i;
      case k:
        return i = Nn(19, u, s, h), i.elementType = k, i.lanes = m, i;
      case S:
        return Ha(u, h, m, s);
      default:
        if (typeof i == "object" && i !== null) switch (i.$$typeof) {
          case C:
            P = 10;
            break e;
          case v:
            P = 9;
            break e;
          case E:
            P = 11;
            break e;
          case x:
            P = 14;
            break e;
          case p:
            P = 16, f = null;
            break e;
        }
        throw Error(a(130, i == null ? i : typeof i, ""));
    }
    return s = Nn(P, u, s, h), s.elementType = i, s.type = f, s.lanes = m, s;
  }
  function Ui(i, s, u, f) {
    return i = Nn(7, i, f, s), i.lanes = u, i;
  }
  function Ha(i, s, u, f) {
    return i = Nn(22, i, f, s), i.elementType = S, i.lanes = u, i.stateNode = { isHidden: !1 }, i;
  }
  function If(i, s, u) {
    return i = Nn(6, i, null, s), i.lanes = u, i;
  }
  function Df(i, s, u) {
    return s = Nn(4, i.children !== null ? i.children : [], i.key, s), s.lanes = u, s.stateNode = { containerInfo: i.containerInfo, pendingChildren: null, implementation: i.implementation }, s;
  }
  function A5(i, s, u, f, h) {
    this.tag = s, this.containerInfo = i, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = ue, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Rd(0), this.expirationTimes = Rd(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Rd(0), this.identifierPrefix = f, this.onRecoverableError = h, Be && (this.mutableSourceEagerHydrationData = null);
  }
  function fg(i, s, u, f, h, m, P, O, U) {
    return i = new A5(i, s, u, O, U), s === 1 ? (s = 1, m === !0 && (s |= 8)) : s = 0, m = Nn(3, null, null, s), i.current = m, m.stateNode = i, m.memoizedState = { element: f, isDehydrated: u, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Yd(m), i;
  }
  function hg(i) {
    if (!i) return Hr;
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
            if (tn(s.type)) {
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
      if (tn(u)) return D1(i, u, s);
    }
    return s;
  }
  function pg(i) {
    var s = i._reactInternals;
    if (s === void 0)
      throw typeof i.render == "function" ? Error(a(188)) : (i = Object.keys(i).join(","), Error(a(268, i)));
    return i = j(s), i === null ? null : i.stateNode;
  }
  function gg(i, s) {
    if (i = i.memoizedState, i !== null && i.dehydrated !== null) {
      var u = i.retryLane;
      i.retryLane = u !== 0 && u < s ? u : s;
    }
  }
  function ja(i, s) {
    gg(i, s), (i = i.alternate) && gg(i, s);
  }
  function O5(i) {
    return i = j(i), i === null ? null : i.stateNode;
  }
  function I5() {
    return null;
  }
  return n.attemptContinuousHydration = function(i) {
    if (i.tag === 13) {
      var s = nr(i, 134217728);
      if (s !== null) {
        var u = Bt();
        Tn(s, i, 134217728, u);
      }
      ja(i, 134217728);
    }
  }, n.attemptDiscreteHydration = function(i) {
    if (i.tag === 13) {
      var s = nr(i, 1);
      if (s !== null) {
        var u = Bt();
        Tn(s, i, 1, u);
      }
      ja(i, 1);
    }
  }, n.attemptHydrationAtCurrentPriority = function(i) {
    if (i.tag === 13) {
      var s = Xr(i), u = nr(i, s);
      if (u !== null) {
        var f = Bt();
        Tn(u, i, s, f);
      }
      ja(i, s);
    }
  }, n.attemptSynchronousHydration = function(i) {
    switch (i.tag) {
      case 3:
        var s = i.stateNode;
        if (s.current.memoizedState.isDehydrated) {
          var u = wo(s.pendingLanes);
          u !== 0 && (Md(s, u | 1), sn(s, Et()), !(we & 6) && (Ns(), tr()));
        }
        break;
      case 13:
        rg(function() {
          var f = nr(i, 1);
          if (f !== null) {
            var h = Bt();
            Tn(f, i, 1, h);
          }
        }), ja(i, 1);
    }
  }, n.batchedUpdates = function(i, s) {
    var u = we;
    we |= 1;
    try {
      return i(s);
    } finally {
      we = u, we === 0 && (Ns(), sa && tr());
    }
  }, n.createComponentSelector = function(i) {
    return { $$typeof: Na, value: i };
  }, n.createContainer = function(i, s, u, f, h, m, P) {
    return fg(i, s, !1, null, u, f, h, m, P);
  }, n.createHasPseudoClassSelector = function(i) {
    return { $$typeof: Ra, value: i };
  }, n.createHydrationContainer = function(i, s, u, f, h, m, P, O, U) {
    return i = fg(u, f, !0, i, h, m, P, O, U), i.context = hg(null), u = i.current, f = Bt(), h = Xr(u), m = _r(f, h), m.callback = s ?? null, Wr(u, m, h), i.current.lanes = h, xo(i, h, f), sn(i, f), i;
  }, n.createPortal = function(i, s, u) {
    var f = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: g, key: f == null ? null : "" + f, children: i, containerInfo: s, implementation: u };
  }, n.createRoleSelector = function(i) {
    return { $$typeof: Ma, value: i };
  }, n.createTestNameSelector = function(i) {
    return { $$typeof: Fa, value: i };
  }, n.createTextSelector = function(i) {
    return { $$typeof: La, value: i };
  }, n.deferredUpdates = function(i) {
    var s = Me, u = ct.transition;
    try {
      return ct.transition = null, Me = 16, i();
    } finally {
      Me = s, ct.transition = u;
    }
  }, n.discreteUpdates = function(i, s, u, f, h) {
    var m = Me, P = ct.transition;
    try {
      return ct.transition = null, Me = 1, i(s, u, f, h);
    } finally {
      Me = m, ct.transition = P, we === 0 && Ns();
    }
  }, n.findAllNodes = Cf, n.findBoundingRects = function(i, s) {
    if (!Ti) throw Error(a(363));
    s = Cf(i, s), i = [];
    for (var u = 0; u < s.length; u++) i.push(yd(s[u]));
    for (s = i.length - 1; 0 < s; s--) {
      u = i[s];
      for (var f = u.x, h = f + u.width, m = u.y, P = m + u.height, O = s - 1; 0 <= O; O--) if (s !== O) {
        var U = i[O], $ = U.x, ae = $ + U.width, ye = U.y, te = ye + U.height;
        if (f >= $ && m >= ye && h <= ae && P <= te) {
          i.splice(s, 1);
          break;
        } else if (f !== $ || u.width !== U.width || te < m || ye > P) {
          if (!(m !== ye || u.height !== U.height || ae < f || $ > h)) {
            $ > f && (U.width += $ - f, U.x = f), ae < h && (U.width = h - $), i.splice(s, 1);
            break;
          }
        } else {
          ye > m && (U.height += ye - m, U.y = m), te < P && (U.height = P - ye), i.splice(s, 1);
          break;
        }
      }
    }
    return i;
  }, n.findHostInstance = pg, n.findHostInstanceWithNoPortals = function(i) {
    return i = V(i), i = i !== null ? D(i) : null, i === null ? null : i.stateNode;
  }, n.findHostInstanceWithWarning = function(i) {
    return pg(i);
  }, n.flushControlled = function(i) {
    var s = we;
    we |= 1;
    var u = ct.transition, f = Me;
    try {
      ct.transition = null, Me = 1, i();
    } finally {
      Me = f, ct.transition = u, we = s, we === 0 && (Ns(), tr());
    }
  }, n.flushPassiveEffects = Gi, n.flushSync = rg, n.focusWithin = function(i, s) {
    if (!Ti) throw Error(a(363));
    for (i = Sf(i), s = eg(i, s), s = Array.from(s), i = 0; i < s.length; ) {
      var u = s[i++];
      if (!Br(u)) {
        if (u.tag === 5 && _d(u.stateNode)) return !0;
        for (u = u.child; u !== null; ) s.push(u), u = u.sibling;
      }
    }
    return !1;
  }, n.getCurrentUpdatePriority = function() {
    return Me;
  }, n.getFindAllNodesFailureDescription = function(i, s) {
    if (!Ti) throw Error(a(363));
    var u = 0, f = [];
    i = [Sf(i), 0];
    for (var h = 0; h < i.length; ) {
      var m = i[h++], P = i[h++], O = s[P];
      if ((m.tag !== 5 || !Br(m)) && (wf(m, O) && (f.push(xf(O)), P++, P > u && (u = P)), P < s.length)) for (m = m.child; m !== null; ) i.push(m, P), m = m.sibling;
    }
    if (u < s.length) {
      for (i = []; u < s.length; u++) i.push(xf(s[u]));
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
    if (i = { bundleType: i.bundleType, version: i.version, rendererPackageName: i.rendererPackageName, rendererConfig: i.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: c.ReactCurrentDispatcher, findHostInstanceByFiber: O5, findFiberByHostInstance: i.findFiberByHostInstance || I5, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1" }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u") i = !1;
    else {
      var s = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (s.isDisabled || !s.supportsFiber) i = !0;
      else {
        try {
          ia = s.inject(i), er = s;
        } catch {
        }
        i = !!s.checkDCE;
      }
    }
    return i;
  }, n.isAlreadyRendering = function() {
    return !1;
  }, n.observeVisibleRects = function(i, s, u, f) {
    if (!Ti) throw Error(a(363));
    i = Cf(i, s);
    var h = Kl(i, u, f).disconnect;
    return { disconnect: function() {
      h();
    } };
  }, n.registerMutableSourceForHydration = function(i, s) {
    var u = s._getVersion;
    u = u(s._source), i.mutableSourceEagerHydrationData == null ? i.mutableSourceEagerHydrationData = [s, u] : i.mutableSourceEagerHydrationData.push(s, u);
  }, n.runWithPriority = function(i, s) {
    var u = Me;
    try {
      return Me = i, s();
    } finally {
      Me = u;
    }
  }, n.shouldError = function() {
    return null;
  }, n.shouldSuspend = function() {
    return !1;
  }, n.updateContainer = function(i, s, u, f) {
    var h = s.current, m = Bt(), P = Xr(h);
    return u = hg(u), s.context === null ? s.context = u : s.pendingContext = u, s = _r(m, P), s.payload = { element: i }, f = f === void 0 ? null : f, f !== null && (s.callback = f), i = Wr(h, s, P), i !== null && (Tn(i, h, P, m), ha(i, h, P)), P;
  }, n;
};
h4.exports = cS;
var dS = h4.exports;
const fS = /* @__PURE__ */ lc(dS);
var p4 = { exports: {} }, hs = {};
/**
 * @license React
 * react-reconciler-constants.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
hs.ConcurrentRoot = 1;
hs.ContinuousEventPriority = 4;
hs.DefaultEventPriority = 16;
hs.DiscreteEventPriority = 1;
hs.IdleEventPriority = 536870912;
hs.LegacyRoot = 0;
p4.exports = hs;
var g4 = p4.exports;
const im = {
  children: !0,
  ref: !0,
  key: !0,
  style: !0,
  forwardedRef: !0,
  unstable_applyCache: !0,
  unstable_applyDrawHitFromCache: !0
};
let sm = !1, om = !1;
const L1 = ".react-konva-event", hS = `ReactKonva: You have a Konva node with draggable = true and position defined but no onDragMove or onDragEnd events are handled.
Position of a node will be changed during drag&drop, so you should update state of the react app as well.
Consider to add onDragMove or onDragEnd events.
For more info see: https://github.com/konvajs/react-konva/issues/256
`, pS = `ReactKonva: You are using "zIndex" attribute for a Konva node.
react-konva may get confused with ordering. Just define correct order of elements in your render function of a component.
For more info see: https://github.com/konvajs/react-konva/issues/194
`, gS = {};
function gd(t, e, n = gS) {
  if (!sm && "zIndex" in e && (console.warn(pS), sm = !0), !om && e.draggable) {
    var r = e.x !== void 0 || e.y !== void 0, o = e.onDragEnd || e.onDragMove;
    r && !o && (console.warn(hS), om = !0);
  }
  for (var l in n)
    if (!im[l]) {
      var a = l.slice(0, 2) === "on", c = n[l] !== e[l];
      if (a && c) {
        var d = l.substr(2).toLowerCase();
        d.substr(0, 7) === "content" && (d = "content" + d.substr(7, 1).toUpperCase() + d.substr(8)), t.off(d, n[l]);
      }
      var g = !e.hasOwnProperty(l);
      g && t.setAttr(l, void 0);
    }
  var y = e._useStrictMode, w = {}, _ = !1;
  const C = {};
  for (var l in e)
    if (!im[l]) {
      var a = l.slice(0, 2) === "on", v = n[l] !== e[l];
      if (a && v) {
        var d = l.substr(2).toLowerCase();
        d.substr(0, 7) === "content" && (d = "content" + d.substr(7, 1).toUpperCase() + d.substr(8)), e[l] && (C[d] = e[l]);
      }
      !a && (e[l] !== n[l] || y && e[l] !== t.getAttr(l)) && (_ = !0, w[l] = e[l]);
    }
  _ && (t.setAttrs(w), Pi(t));
  for (var d in C)
    t.on(d + L1, C[d]);
}
function Pi(t) {
  if (!Se.Konva.autoDrawEnabled) {
    var e = t.getLayer() || t.getStage();
    e && e.batchDraw();
  }
}
const m4 = {}, mS = {};
Al.Node.prototype._applyProps = gd;
function yS(t, e) {
  if (typeof e == "string") {
    console.error(`Do not use plain text as child of Konva.Node. You are using text: ${e}`);
    return;
  }
  t.add(e), Pi(t);
}
function vS(t, e, n) {
  let r = Al[t];
  r || (console.error(`Konva has no node with the type ${t}. Group will be used instead. If you use minimal version of react-konva, just import required nodes into Konva: "import "konva/lib/shapes/${t}"  If you want to render DOM elements as part of canvas tree take a look into this demo: https://konvajs.github.io/docs/react/DOM_Portal.html`), r = Al.Group);
  const o = {}, l = {};
  for (var a in e) {
    var c = a.slice(0, 2) === "on";
    c ? l[a] = e[a] : o[a] = e[a];
  }
  const d = new r(o);
  return gd(d, l), d;
}
function _S(t, e, n) {
  console.error(`Text components are not supported for now in ReactKonva. Your text is: "${t}"`);
}
function SS(t, e, n) {
  return !1;
}
function wS(t) {
  return t;
}
function xS() {
  return null;
}
function CS() {
  return null;
}
function kS(t, e, n, r) {
  return mS;
}
function ES() {
}
function PS(t) {
}
function TS(t, e) {
  return !1;
}
function NS() {
  return m4;
}
function RS() {
  return m4;
}
const MS = setTimeout, FS = clearTimeout, LS = -1;
function AS(t, e) {
  return !1;
}
const OS = !1, IS = !0, DS = !0;
function zS(t, e) {
  e.parent === t ? e.moveToTop() : t.add(e), Pi(t);
}
function GS(t, e) {
  e.parent === t ? e.moveToTop() : t.add(e), Pi(t);
}
function y4(t, e, n) {
  e._remove(), t.add(e), e.setZIndex(n.getZIndex()), Pi(t);
}
function US(t, e, n) {
  y4(t, e, n);
}
function BS(t, e) {
  e.destroy(), e.off(L1), Pi(t);
}
function VS(t, e) {
  e.destroy(), e.off(L1), Pi(t);
}
function HS(t, e, n) {
  console.error(`Text components are not yet supported in ReactKonva. You text is: "${n}"`);
}
function jS(t, e, n) {
}
function WS(t, e, n, r, o) {
  gd(t, o, r);
}
function YS(t) {
  t.hide(), Pi(t);
}
function KS(t) {
}
function XS(t, e) {
  (e.visible == null || e.visible) && t.show();
}
function $S(t, e) {
}
function QS(t) {
}
function bS() {
}
const qS = () => g4.DefaultEventPriority, ZS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  appendChild: zS,
  appendChildToContainer: GS,
  appendInitialChild: yS,
  cancelTimeout: FS,
  clearContainer: QS,
  commitMount: jS,
  commitTextUpdate: HS,
  commitUpdate: WS,
  createInstance: vS,
  createTextInstance: _S,
  detachDeletedInstance: bS,
  finalizeInitialChildren: SS,
  getChildHostContext: RS,
  getCurrentEventPriority: qS,
  getPublicInstance: wS,
  getRootHostContext: NS,
  hideInstance: YS,
  hideTextInstance: KS,
  idlePriority: rl.unstable_IdlePriority,
  insertBefore: y4,
  insertInContainerBefore: US,
  isPrimaryRenderer: OS,
  noTimeout: LS,
  now: rl.unstable_now,
  prepareForCommit: xS,
  preparePortalMount: CS,
  prepareUpdate: kS,
  removeChild: BS,
  removeChildFromContainer: VS,
  resetAfterCommit: ES,
  resetTextContent: PS,
  run: rl.unstable_runWithPriority,
  scheduleTimeout: MS,
  shouldDeprioritizeSubtree: TS,
  shouldSetTextContent: AS,
  supportsMutation: DS,
  unhideInstance: XS,
  unhideTextInstance: $S,
  warnsIfNotActing: IS
}, Symbol.toStringTag, { value: "Module" }));
var JS = Object.defineProperty, ew = Object.defineProperties, tw = Object.getOwnPropertyDescriptors, lm = Object.getOwnPropertySymbols, nw = Object.prototype.hasOwnProperty, rw = Object.prototype.propertyIsEnumerable, am = (t, e, n) => e in t ? JS(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, um = (t, e) => {
  for (var n in e || (e = {}))
    nw.call(e, n) && am(t, n, e[n]);
  if (lm)
    for (var n of lm(e))
      rw.call(e, n) && am(t, n, e[n]);
  return t;
}, iw = (t, e) => ew(t, tw(e)), cm, dm;
typeof window < "u" && ((cm = window.document) != null && cm.createElement || ((dm = window.navigator) == null ? void 0 : dm.product) === "ReactNative") ? ie.useLayoutEffect : ie.useEffect;
function v4(t, e, n) {
  if (!t)
    return;
  if (n(t) === !0)
    return t;
  let r = t.child;
  for (; r; ) {
    const o = v4(r, e, n);
    if (o)
      return o;
    r = r.sibling;
  }
}
function _4(t) {
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
const fm = console.error;
console.error = function() {
  const t = [...arguments].join("");
  if (t != null && t.startsWith("Warning:") && t.includes("useContext")) {
    console.error = fm;
    return;
  }
  return fm.apply(this, arguments);
};
const A1 = _4(ie.createContext(null));
class S4 extends ie.Component {
  render() {
    return /* @__PURE__ */ ie.createElement(A1.Provider, {
      value: this._reactInternals
    }, this.props.children);
  }
}
function sw() {
  const t = ie.useContext(A1);
  if (t === null)
    throw new Error("its-fine: useFiber must be called within a <FiberProvider />!");
  const e = ie.useId();
  return ie.useMemo(() => {
    for (const r of [t, t == null ? void 0 : t.alternate]) {
      if (!r)
        continue;
      const o = v4(r, !1, (l) => {
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
function ow() {
  const t = sw(), [e] = ie.useState(() => /* @__PURE__ */ new Map());
  e.clear();
  let n = t;
  for (; n; ) {
    if (n.type && typeof n.type == "object") {
      const o = n.type._context === void 0 && n.type.Provider === n.type ? n.type : n.type._context;
      o && o !== A1 && !e.has(o) && e.set(o, ie.useContext(_4(o)));
    }
    n = n.return;
  }
  return e;
}
function lw() {
  const t = ow();
  return ie.useMemo(
    () => Array.from(t.keys()).reduce(
      (e, n) => (r) => /* @__PURE__ */ ie.createElement(e, null, /* @__PURE__ */ ie.createElement(n.Provider, iw(um({}, r), {
        value: t.get(n)
      }))),
      (e) => /* @__PURE__ */ ie.createElement(S4, um({}, e))
    ),
    [t]
  );
}
function aw(t) {
  const e = Qt.useRef({});
  return Qt.useLayoutEffect(() => {
    e.current = t;
  }), Qt.useLayoutEffect(() => () => {
    e.current = {};
  }, []), e.current;
}
const uw = (t) => {
  const e = Qt.useRef(null), n = Qt.useRef(null), r = Qt.useRef(null), o = aw(t), l = lw(), a = (c) => {
    const { forwardedRef: d } = t;
    d && (typeof d == "function" ? d(c) : d.current = c);
  };
  return Qt.useLayoutEffect(() => (n.current = new Al.Stage({
    width: t.width,
    height: t.height,
    container: e.current
  }), a(n.current), r.current = nl.createContainer(n.current, g4.LegacyRoot, !1, null), nl.updateContainer(Qt.createElement(l, {}, t.children), r.current), () => {
    Al.isBrowser && (a(null), nl.updateContainer(null, r.current, null), n.current.destroy());
  }), []), Qt.useLayoutEffect(() => {
    a(n.current), gd(n.current, t, o), nl.updateContainer(Qt.createElement(l, {}, t.children), r.current, null);
  }), Qt.createElement("div", {
    ref: e,
    id: t.id,
    accessKey: t.accessKey,
    className: t.className,
    role: t.role,
    style: t.style,
    tabIndex: t.tabIndex,
    title: t.title
  });
}, hm = "Layer", fu = "Group", Qi = "Rect", w4 = "Circle", hl = "Line", cw = "Image", dw = "Transformer", nl = fS(ZS);
nl.injectIntoDevTools({
  // @ts-ignore
  findHostInstanceByFiber: () => null,
  bundleType: 0,
  version: Qt.version,
  rendererPackageName: "react-konva"
});
const fw = Qt.forwardRef((t, e) => Qt.createElement(S4, {}, Qt.createElement(uw, { ...t, forwardedRef: e })));
var Vi = ie, hw = function(e, n, r) {
  const o = Vi.useRef("loading"), l = Vi.useRef(), [a, c] = Vi.useState(0), d = Vi.useRef(), g = Vi.useRef(), y = Vi.useRef();
  return (d.current !== e || g.current !== n || y.current !== r) && (o.current = "loading", l.current = void 0, d.current = e, g.current = n, y.current = r), Vi.useLayoutEffect(
    function() {
      if (!e) return;
      var w = document.createElement("img");
      function _() {
        w.decode().catch(() => {
        }).finally(() => {
          o.current = "loaded", l.current = w, c(Math.random());
        });
      }
      function C() {
        o.current = "failed", l.current = void 0, c(Math.random());
      }
      return w.addEventListener("load", _), w.addEventListener("error", C), n && (w.crossOrigin = n), r && (w.referrerPolicy = r), w.src = e, function() {
        w.removeEventListener("load", _), w.removeEventListener("error", C);
      };
    },
    [e, n, r]
  ), [l.current, o.current];
};
const pw = /* @__PURE__ */ lc(hw);
function x4(t = "") {
  return { version: "konva-1", background: t, objects: [] };
}
function bo(t) {
  return JSON.parse(JSON.stringify(t));
}
function Hi() {
  return `obj_${Math.random().toString(36).slice(2, 10)}_${Date.now().toString(36)}`;
}
function Sh(t) {
  return !t || !Array.isArray(t.objects) ? x4((t == null ? void 0 : t.background) ?? "") : {
    version: t.version || "konva-1",
    background: t.background ?? "",
    objects: t.objects.filter(Boolean),
    meta: t.meta ? { ...t.meta } : void 0
  };
}
const gw = {
  allow_select: !0,
  allow_drag: !0,
  allow_rotate: !0,
  allow_scale: !0,
  allow_delete: !0,
  respect_object_locks: !0
}, mw = [
  "top-left",
  "top-right",
  "bottom-left",
  "bottom-right",
  "middle-left",
  "middle-right",
  "top-center",
  "bottom-center"
];
function yw(t) {
  return t.objects.some(
    (e) => e.locked === !0 || e.groupId !== void 0 || e.type === "group" || e.draggable === !1 || e.selectable === !1 || e.scalable === !1 || e.rotatable === !1 || e.deletable === !1 || e.listening === !1 || e.dragConstraint !== void 0
  );
}
function vw(t, e) {
  const n = {
    ...gw,
    ...t ?? {}
  };
  return !t && !yw(e) ? { ...n, respect_object_locks: !1 } : n;
}
function _w(t, e) {
  return t === "transform" || t === "rect_crop" && e.type === "crop";
}
function Sw(t, e) {
  return t === "transform" || t === "rect_crop" && e.type === "crop";
}
function Fu(t, e, n) {
  if (t.type === "group")
    return {
      selectable: !1,
      draggable: !1,
      scalable: !1,
      rotatable: !1,
      deletable: !1,
      listening: !1
    };
  const r = n.respect_object_locks && t.locked === !0;
  let o = !r && t.selectable !== !1 && t.listening !== !1 && n.allow_select && _w(e, t);
  t.draggable === !1 && t.selectable !== !0 && (o = !1);
  const l = o && t.draggable !== !1 && n.allow_drag && Sw(e, t), a = o && t.scalable !== !1 && n.allow_scale, c = o && t.rotatable !== !1 && n.allow_rotate, d = o && t.deletable !== !1 && n.allow_delete, g = t.listening !== !1 && !r;
  return {
    selectable: o,
    draggable: l,
    scalable: a,
    rotatable: c,
    deletable: d,
    listening: g
  };
}
function ww(t) {
  const e = Math.hypot(t.x, t.y);
  return e < 1e-9 ? { x: 1, y: 0 } : { x: t.x / e, y: t.y / e };
}
function xw(t, e, n, r, o) {
  const l = ww(n), a = t.x - e.x, c = t.y - e.y;
  let d = a * l.x + c * l.y;
  return r != null && (d = Math.max(r, d)), o != null && (d = Math.min(o, d)), {
    x: e.x + d * l.x,
    y: e.y + d * l.y
  };
}
function C4(t, e) {
  return t.type === "group" || t.dragConstraint ? null : t.groupId ? t.groupId : null;
}
function k4(t) {
  const e = /* @__PURE__ */ new Map();
  for (const r of t.objects)
    r.type === "group" && e.set(r.id, r);
  const n = /* @__PURE__ */ new Map();
  for (const r of t.objects) {
    const o = C4(r);
    if (!o) continue;
    const l = n.get(o) ?? [];
    l.push(r), n.set(o, l);
  }
  return Array.from(n.entries()).map(([r, o]) => ({
    groupId: r,
    descriptor: e.get(r),
    members: o
  }));
}
function Cw(t) {
  const e = /* @__PURE__ */ new Set();
  for (const n of k4(t))
    for (const r of n.members)
      e.add(r.id);
  return t.objects.filter(
    (n) => n.type !== "group" && !e.has(n.id)
  );
}
function pm(t, e, n) {
  const r = t.descriptor, o = {
    id: t.groupId,
    type: "rect",
    locked: r == null ? void 0 : r.locked,
    draggable: r == null ? void 0 : r.draggable,
    selectable: r == null ? void 0 : r.selectable,
    listening: r == null ? void 0 : r.listening,
    scalable: (r == null ? void 0 : r.scalable) ?? !1,
    rotatable: r == null ? void 0 : r.rotatable,
    deletable: r == null ? void 0 : r.deletable
  };
  return Fu(o, e, n);
}
function E4(t) {
  return `group-wrap-${t}`;
}
function hu(t) {
  return t.startsWith("group-wrap-") ? t.slice(11) : null;
}
function kw(t, e) {
  const n = C4(t);
  return n ? E4(n) : t.id;
}
function Ew(t, e) {
  return {
    ...t,
    x: e.x(),
    y: e.y(),
    rotation: e.rotation(),
    width: Math.max(1, (t.width ?? 0) * e.scaleX()),
    height: Math.max(1, (t.height ?? 0) * e.scaleY()),
    scaleX: 1,
    scaleY: 1
  };
}
function Pw(t, e) {
  return {
    ...t,
    x: e.x(),
    y: e.y(),
    rotation: e.rotation(),
    radius: Math.max(1, (t.radius ?? 1) * Math.max(e.scaleX(), e.scaleY())),
    scaleX: 1,
    scaleY: 1
  };
}
function Tw(t, e, n, r, o) {
  const l = t.x ?? 0, a = t.y ?? 0, c = t.points ?? [], d = Math.cos(r * Math.PI / 180), g = Math.sin(r * Math.PI / 180), y = [];
  for (let w = 0; w < c.length; w += 2) {
    const _ = (c[w] ?? 0) + l, C = (c[w + 1] ?? 0) + a, v = _ * o, E = C * o, R = v * d - E * g + e, k = v * g + E * d + n;
    y.push(R, k);
  }
  return {
    ...t,
    x: 0,
    y: 0,
    points: y,
    rotation: 0,
    scaleX: 1,
    scaleY: 1
  };
}
function Nw(t, e, n, r = 0, o = 1) {
  if (t.type === "rect" || t.type === "crop") {
    const l = Math.max(1, (t.width ?? 0) * o), a = Math.max(1, (t.height ?? 0) * o);
    return {
      ...t,
      x: e,
      y: n,
      width: l,
      height: a,
      rotation: (t.rotation ?? 0) + r,
      scaleX: 1,
      scaleY: 1
    };
  }
  return t.type === "circle" || t.type === "point" ? {
    ...t,
    x: e,
    y: n,
    rotation: (t.rotation ?? 0) + r,
    radius: Math.max(1, (t.radius ?? 1) * o),
    scaleX: 1,
    scaleY: 1
  } : t.type === "line" || t.type === "polygon" || t.type === "freedraw" ? Tw(t, e, n, r, o) : { ...t, x: e, y: n, rotation: (t.rotation ?? 0) + r };
}
function Rw(t, e, n) {
  return t.objects.map((r) => n.get(r.id) ?? r);
}
const gm = ({
  obj: t,
  interaction: e,
  onSelect: n,
  onDragEnd: r,
  onTransformEnd: o
}) => {
  const l = ie.useRef(null);
  if (t.type === "group") return null;
  const a = {
    id: t.id,
    draggable: e.draggable,
    listening: e.listening,
    rotation: t.rotation ?? 0,
    scaleX: t.scaleX ?? 1,
    scaleY: t.scaleY ?? 1,
    onClick: e.selectable ? n : void 0,
    onTap: e.selectable ? n : void 0,
    onDragStart: (c) => {
      e.draggable && (l.current = { x: c.target.x(), y: c.target.y() });
    },
    onDragMove: (c) => {
      if (!e.draggable || !l.current) return;
      const d = t.dragConstraint;
      if (!d || d.type !== "axis" || !d.axis) return;
      const g = xw(
        { x: c.target.x(), y: c.target.y() },
        l.current,
        d.axis,
        d.min,
        d.max
      );
      c.target.position(g);
    },
    onDragEnd: (c) => {
      l.current = null, r(c.target);
    },
    onTransformEnd: (c) => o(c.target)
  };
  return t.type === "rect" || t.type === "crop" ? /* @__PURE__ */ ge.jsx(
    Qi,
    {
      ...a,
      x: t.x ?? 0,
      y: t.y ?? 0,
      width: t.width ?? 0,
      height: t.height ?? 0,
      stroke: t.stroke,
      strokeWidth: t.strokeWidth,
      fill: t.fill,
      dash: t.type === "crop" ? [8, 4] : void 0
    }
  ) : t.type === "circle" || t.type === "point" ? /* @__PURE__ */ ge.jsx(
    w4,
    {
      ...a,
      x: t.x ?? 0,
      y: t.y ?? 0,
      radius: t.radius ?? 3,
      stroke: t.stroke,
      strokeWidth: t.strokeWidth,
      fill: t.fill
    }
  ) : t.type === "line" || t.type === "freedraw" ? /* @__PURE__ */ ge.jsx(
    hl,
    {
      ...a,
      x: t.x ?? 0,
      y: t.y ?? 0,
      points: t.points ?? [],
      stroke: t.stroke,
      strokeWidth: t.strokeWidth,
      tension: t.type === "freedraw" ? 0.5 : 0,
      lineCap: "round",
      lineJoin: "round"
    }
  ) : t.type === "polygon" ? /* @__PURE__ */ ge.jsx(
    hl,
    {
      ...a,
      x: t.x ?? 0,
      y: t.y ?? 0,
      points: t.points ?? [],
      stroke: t.stroke,
      strokeWidth: t.strokeWidth,
      fill: t.fill,
      closed: !0
    }
  ) : null;
};
function Mw(t, e) {
  if ((e == null ? void 0 : e.originX) != null && (e == null ? void 0 : e.originY) != null)
    return { x: e.originX, y: e.originY };
  let n = 1 / 0, r = 1 / 0, o = -1 / 0, l = -1 / 0;
  for (const a of t)
    if (a.type === "rect" || a.type === "crop") {
      const c = a.x ?? 0, d = a.y ?? 0;
      n = Math.min(n, c), r = Math.min(r, d), o = Math.max(o, c + (a.width ?? 0)), l = Math.max(l, d + (a.height ?? 0));
    } else if (a.type === "circle" || a.type === "point") {
      const c = a.x ?? 0, d = a.y ?? 0, g = a.radius ?? 0;
      n = Math.min(n, c - g), r = Math.min(r, d - g), o = Math.max(o, c + g), l = Math.max(l, d + g);
    } else if (a.points && a.points.length >= 2) {
      const c = a.x ?? 0, d = a.y ?? 0;
      for (let g = 0; g < a.points.length; g += 2) {
        const y = c + (a.points[g] ?? 0), w = d + (a.points[g + 1] ?? 0);
        n = Math.min(n, y), r = Math.min(r, w), o = Math.max(o, y), l = Math.max(l, w);
      }
    }
  return Number.isFinite(n) ? { x: (n + o) / 2, y: (r + l) / 2 } : { x: 0, y: 0 };
}
function mm(t, e, n, r) {
  const l = r.getAbsoluteTransform().copy().invert(), a = /* @__PURE__ */ new Map();
  for (const c of e.members) {
    const d = n.findOne(`#${c.id}`);
    if (!d) continue;
    const y = d.getAbsoluteTransform().copy().multiply(l).decompose();
    a.set(
      c.id,
      Nw(
        c,
        y.x,
        y.y,
        y.rotation,
        Math.max(y.scaleX, y.scaleY)
      )
    );
  }
  return n.position({ x: 0, y: 0 }), n.rotation(0), n.scale({ x: 1, y: 1 }), n.offset({ x: 0, y: 0 }), Rw(t, e.groupId, a);
}
function Fw(t, e) {
  if (t.type === "rect" || t.type === "crop") {
    const n = Ew(t, e);
    return e.scaleX(1), e.scaleY(1), n;
  }
  if (t.type === "circle" || t.type === "point") {
    const n = Pw(t, e);
    return e.scaleX(1), e.scaleY(1), n;
  }
  return {
    ...t,
    x: e.x(),
    y: e.y(),
    rotation: e.rotation(),
    scaleX: e.scaleX(),
    scaleY: e.scaleY()
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
const Lw = 0.25, Aw = 8, pu = 1.15, ym = 15, gu = "rgba(0, 0, 0, 0.45)";
function Ow(t, e, n, r) {
  return {
    x: Math.min(t, t + n),
    y: Math.min(e, e + r),
    width: Math.abs(n),
    height: Math.abs(r)
  };
}
const Iw = ({
  bounds: t,
  canvasWidth: e,
  canvasHeight: n
}) => {
  const { x: r, y: o, width: l, height: a } = t;
  if (l < 1 || a < 1) return null;
  const c = r + l, d = o + a;
  return /* @__PURE__ */ ge.jsxs(ge.Fragment, { children: [
    /* @__PURE__ */ ge.jsx(
      Qi,
      {
        x: 0,
        y: 0,
        width: e,
        height: o,
        fill: gu,
        listening: !1
      }
    ),
    /* @__PURE__ */ ge.jsx(
      Qi,
      {
        x: 0,
        y: d,
        width: e,
        height: Math.max(0, n - d),
        fill: gu,
        listening: !1
      }
    ),
    /* @__PURE__ */ ge.jsx(
      Qi,
      {
        x: 0,
        y: o,
        width: r,
        height: a,
        fill: gu,
        listening: !1
      }
    ),
    /* @__PURE__ */ ge.jsx(
      Qi,
      {
        x: c,
        y: o,
        width: Math.max(0, e - c),
        height: a,
        fill: gu,
        listening: !1
      }
    )
  ] });
};
function vm(t) {
  if (!t) return null;
  const e = t.getPointerPosition();
  if (!e) return null;
  const n = t.getAbsoluteTransform().copy().invert(), r = t.findOne("#viewport-content");
  return r ? r.getAbsoluteTransform().copy().invert().point(e) : n.point(e);
}
const Dw = ({
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
  displayRadius: w,
  enableViewportControls: _,
  transformOptions: C,
  setStateValue: v
}) => {
  const E = ie.useRef(null), R = ie.useRef(null), k = ie.useRef(null), x = ie.useRef(null), p = ie.useRef(null), S = ie.useRef(null), N = ie.useRef(
    `${r}|${o ?? ""}`
  ), M = ie.useRef(!1), A = ie.useRef(null), [T, G] = ie.useState(
    () => Sh(g)
  ), [F, V] = ie.useState([
    Sh(g)
  ]), [j, q] = ie.useState(0), [D, X] = ie.useState(null), [he, de] = ie.useState(null), [H, Z] = ie.useState(
    () => qo(c, a)
  ), [Q] = pw(o ?? "", "anonymous"), b = ie.useMemo(
    () => vw(C, T),
    [C, T]
  ), se = ie.useMemo(() => k4(T), [T.objects]), Ne = ie.useMemo(() => Cw(T), [T.objects]), je = ie.useMemo(() => {
    if (!he) return null;
    const Y = hu(he);
    if (Y) {
      const ne = se.find((ee) => ee.groupId === Y);
      return ne ? pm(ne, d, b) : null;
    }
    const J = T.objects.find((ne) => ne.id === he);
    return J ? Fu(J, d, b) : null;
  }, [
    d,
    se,
    b,
    T.objects,
    he
  ]), mt = ie.useMemo(
    () => JSON.stringify((g == null ? void 0 : g.objects) ?? []),
    [g]
  );
  ie.useEffect(() => {
    Z(qo(c, a));
  }, [c, a]), ie.useEffect(() => {
    const Y = Sh(g), J = `${r}|${o ?? ""}`, ne = N.current !== J;
    N.current = J, G((ee) => {
      if (!(ne || Y.objects.length > 0 || ee.objects.length === 0))
        return { ...ee, background: r };
      const ke = {
        ...Y,
        background: r
      };
      return V([bo(ke)]), q(0), de(null), X(null), Z(qo(c, a)), ke;
    });
  }, [
    mt,
    r,
    o,
    g,
    c,
    a
  ]), ie.useEffect(() => {
    var ke;
    const Y = p.current, J = E.current;
    if (!Y || !J) return;
    const ne = (ht, Dn, zn) => {
      var fn;
      Y.rotateEnabled(Dn), Y.resizeEnabled(zn), Y.enabledAnchors(
        zn ? [...mw] : []
      ), S.current = ht, Y.nodes([ht]), (fn = Y.getLayer()) == null || fn.batchDraw();
    }, ee = T.objects.find((ht) => ht.type === "crop");
    if (d === "rect_crop" && ee && !D) {
      const ht = J.findOne(`#${ee.id}`);
      ht && ne(ht, !1, !0);
      return;
    }
    if (d !== "transform" || !he || !je) {
      Y.nodes([]), S.current = null, (ke = Y.getLayer()) == null || ke.batchDraw();
      return;
    }
    const Pe = J.findOne(`#${he}`);
    Pe && ne(
      Pe,
      je.rotatable,
      je.scalable
    );
  }, [
    he,
    je,
    d,
    T.objects,
    D
  ]);
  const ze = ie.useCallback(
    (Y) => {
      V((J) => [...J.slice(0, j + 1), bo(Y)]), q((J) => J + 1);
    },
    [j]
  ), L = ie.useCallback(
    (Y) => {
      const J = R.current, ne = k.current;
      !J || !ne || requestAnimationFrame(() => {
        const ee = {
          x: ne.x(),
          y: ne.y(),
          scaleX: ne.scaleX(),
          scaleY: ne.scaleY(),
          rotation: ne.rotation()
        }, Pe = qo(c, a);
        ne.position({ x: Pe.x, y: Pe.y }), ne.scale({ x: Pe.scale, y: Pe.scale }), ne.rotation(Pe.rotation);
        const ke = ne.findOne("#crop-chrome"), ht = [];
        ke && (ht.push(ke), ke.visible(!1));
        for (const zn of T.objects) {
          if (zn.type !== "crop") continue;
          const fn = ne.findOne(`#${zn.id}`);
          fn && (ht.push(fn), fn.visible(!1));
        }
        J.batchDraw();
        const Dn = J.toDataURL({
          pixelRatio: 1,
          mimeType: "image/png",
          x: 0,
          y: 0,
          width: c,
          height: a
        });
        ne.position({ x: ee.x, y: ee.y }), ne.scale({ x: ee.scaleX, y: ee.scaleY }), ne.rotation(ee.rotation);
        for (const zn of ht)
          zn.visible(!0);
        J.batchDraw(), v("image_data_url", Dn), v("json_data", Y);
      });
    },
    [a, c, T.objects, v]
  ), W = ie.useCallback(
    (Y, J) => {
      const ne = bo(Y);
      G(ne), ze(ne), ((J == null ? void 0 : J.emit) ?? l) && L(ne);
    },
    [L, ze, l]
  ), ue = ie.useCallback(() => {
    if (j <= 0) return;
    const Y = j - 1, J = bo(F[Y]);
    q(Y), G(J), de(null), l && L(J);
  }, [L, F, j, l]), Ae = ie.useCallback(() => {
    if (j >= F.length - 1) return;
    const Y = j + 1, J = bo(F[Y]);
    q(Y), G(J), de(null), l && L(J);
  }, [L, F, j, l]), me = ie.useCallback(() => {
    const Y = x4(r);
    W(Y, { emit: !0 }), de(null), X(null);
  }, [r, W]), Ge = ie.useCallback(() => {
    L(T);
  }, [L, T]), Be = ie.useCallback(() => {
    Z(qo(c, a));
  }, [a, c]), Kt = ie.useCallback(
    (Y, J) => {
      Z((ne) => {
        const ee = Math.min(
          Aw,
          Math.max(Lw, ne.scale * Y)
        );
        if (!J)
          return { ...ne, scale: ee };
        const Pe = k.current;
        if (!Pe)
          return { ...ne, scale: ee };
        const ht = Pe.getAbsoluteTransform().copy().invert().point(J), Dn = c / 2, zn = a / 2, fn = Math.cos(ne.rotation * Math.PI / 180), ps = Math.sin(ne.rotation * Math.PI / 180), Ni = ht.x - Dn, Ri = ht.y - zn, xd = ne.x + ne.scale * (fn * Ni - ps * Ri), _o = ne.y + ne.scale * (ps * Ni + fn * Ri), bl = xd - ee * (fn * Ni - ps * Ri), ql = _o - ee * (ps * Ni + fn * Ri);
        return { ...ne, scale: ee, x: bl, y: ql };
      });
    },
    [a, c]
  ), Ie = ie.useCallback((Y) => {
    Z((J) => ({
      ...J,
      rotation: J.rotation + Y
    }));
  }, []), kt = ie.useCallback(
    (Y) => {
      W({
        ...T,
        background: r,
        objects: [...T.objects, Y]
      });
    },
    [r, W, T]
  ), Jt = ie.useCallback(
    (Y) => {
      const J = T.objects.filter((ne) => ne.type !== "crop");
      W({
        ...T,
        background: r,
        objects: [...J, { ...Y, type: "crop" }]
      }), de(Y.id);
    },
    [r, W, T]
  ), ot = ie.useMemo(
    () => T.objects.find((Y) => Y.type === "crop") ?? null,
    [T.objects]
  ), Wl = ie.useMemo(() => {
    if ((D == null ? void 0 : D.kind) === "rect" && d === "rect_crop") {
      const Y = Ow(
        D.x,
        D.y,
        D.width,
        D.height
      );
      return Y.width > 0 && Y.height > 0 ? Y : null;
    }
    return ot ? {
      x: ot.x ?? 0,
      y: ot.y ?? 0,
      width: ot.width ?? 0,
      height: ot.height ?? 0
    } : null;
  }, [ot, D, d]), Ti = ie.useCallback(
    (Y) => {
      if (!_) return;
      Y.evt.preventDefault();
      const J = E.current;
      if (!J) return;
      const ne = J.getPointerPosition();
      if (!ne) return;
      const ee = Y.evt.deltaY > 0 ? 1 / pu : pu;
      Kt(ee, ne);
    },
    [_, Kt]
  ), md = ie.useCallback(
    (Y) => {
      const J = E.current;
      if (_ && (d === "pan" || Y.evt.button === 1 || Y.evt.altKey || Y.evt.buttons === 4)) {
        M.current = !0, A.current = { x: Y.evt.clientX, y: Y.evt.clientY };
        return;
      }
      const ee = vm(J);
      if (ee) {
        if (d === "transform") {
          (Y.target === J || Y.target.id() === "viewport-content") && de(null);
          return;
        }
        if (d !== "pan") {
          if (d === "point") {
            kt({
              id: Hi(),
              type: "point",
              x: ee.x,
              y: ee.y,
              radius: w,
              fill: n,
              stroke: n,
              strokeWidth: 1
            });
            return;
          }
          if (d === "polygon") {
            X((Pe) => (Pe == null ? void 0 : Pe.kind) === "polygon" ? { kind: "polygon", points: [...Pe.points, ee.x, ee.y] } : { kind: "polygon", points: [ee.x, ee.y] });
            return;
          }
          if (d === "freedraw") {
            X({ kind: "freedraw", points: [ee.x, ee.y] });
            return;
          }
          if (d === "line") {
            X({ kind: "line", x1: ee.x, y1: ee.y, x2: ee.x, y2: ee.y });
            return;
          }
          if (d === "rect") {
            X({ kind: "rect", x: ee.x, y: ee.y, width: 0, height: 0 });
            return;
          }
          if (d === "rect_crop") {
            const Pe = T.objects.find((ke) => ke.type === "crop");
            if (Pe && Y.target.id() === Pe.id) {
              de(Pe.id);
              return;
            }
            de(null), X({ kind: "rect", x: ee.x, y: ee.y, width: 0, height: 0 });
            return;
          }
          d === "circle" && X({ kind: "circle", x: ee.x, y: ee.y, radius: 0 });
        }
      }
    },
    [
      kt,
      w,
      d,
      _,
      T.objects,
      n
    ]
  ), yd = ie.useCallback(
    (Y) => {
      if (M.current && A.current) {
        const ne = Y.evt.clientX - A.current.x, ee = Y.evt.clientY - A.current.y;
        A.current = { x: Y.evt.clientX, y: Y.evt.clientY }, Z((Pe) => ({
          ...Pe,
          x: Pe.x + ne,
          y: Pe.y + ee
        }));
        return;
      }
      const J = vm(E.current);
      if (!(!J || !D)) {
        if (D.kind === "freedraw") {
          X({ kind: "freedraw", points: [...D.points, J.x, J.y] });
          return;
        }
        if (D.kind === "line") {
          X({ ...D, x2: J.x, y2: J.y });
          return;
        }
        if (D.kind === "rect") {
          X({
            ...D,
            width: J.x - D.x,
            height: J.y - D.y
          });
          return;
        }
        if (D.kind === "circle") {
          const ne = J.x - D.x, ee = J.y - D.y;
          X({ ...D, radius: Math.sqrt(ne * ne + ee * ee) });
        }
      }
    },
    [D]
  ), Yl = ie.useCallback(() => {
    if (D) {
      if (D.kind === "freedraw" && D.points.length >= 4)
        kt({
          id: Hi(),
          type: "freedraw",
          points: D.points,
          stroke: n,
          strokeWidth: e,
          fill: ""
        });
      else if (D.kind === "line")
        kt({
          id: Hi(),
          type: "line",
          points: [D.x1, D.y1, D.x2, D.y2],
          stroke: n,
          strokeWidth: e
        });
      else if (D.kind === "rect") {
        const Y = Math.min(D.x, D.x + D.width), J = Math.min(D.y, D.y + D.height), ne = Math.abs(D.width), ee = Math.abs(D.height);
        ne > 1 && ee > 1 && (d === "rect_crop" ? Jt({
          id: (ot == null ? void 0 : ot.id) ?? Hi(),
          type: "crop",
          x: Y,
          y: J,
          width: ne,
          height: ee,
          stroke: n,
          strokeWidth: e,
          fill: "transparent"
        }) : kt({
          id: Hi(),
          type: "rect",
          x: Y,
          y: J,
          width: ne,
          height: ee,
          stroke: n,
          strokeWidth: e,
          fill: t
        }));
      } else D.kind === "circle" && D.radius > 1 && kt({
        id: Hi(),
        type: "circle",
        x: D.x,
        y: D.y,
        radius: D.radius,
        stroke: n,
        strokeWidth: e,
        fill: t
      });
      D.kind !== "polygon" && X(null);
    }
  }, [
    kt,
    ot,
    D,
    d,
    t,
    Jt,
    n,
    e
  ]), Br = ie.useCallback(() => {
    if (M.current) {
      M.current = !1, A.current = null;
      return;
    }
    d === "polygon" || d === "transform" || d === "pan" || Yl();
  }, [d, Yl]), vd = ie.useCallback(
    (Y) => {
      if (Y.evt.preventDefault(), !(d !== "polygon" || (D == null ? void 0 : D.kind) !== "polygon")) {
        if (D.points.length < 6) {
          X(null);
          return;
        }
        kt({
          id: Hi(),
          type: "polygon",
          points: D.points,
          stroke: n,
          strokeWidth: e,
          fill: t
        }), X(null);
      }
    },
    [kt, D, d, t, n, e]
  ), _d = ie.useCallback(() => {
    if (d === "polygon" && (D == null ? void 0 : D.kind) === "polygon") {
      D.points.length <= 2 ? X(null) : X({
        kind: "polygon",
        points: D.points.slice(0, -2)
      });
      return;
    }
    if (d === "transform" && he) {
      if (!(je != null && je.deletable)) return;
      const Y = hu(he);
      if (Y) {
        const J = se.find((ee) => ee.groupId === Y);
        if (!J) return;
        const ne = new Set(J.members.map((ee) => ee.id));
        W({
          ...T,
          objects: T.objects.filter(
            (ee) => ee.id !== Y && !ne.has(ee.id)
          )
        });
      } else
        W({
          ...T,
          objects: T.objects.filter((J) => J.id !== he)
        });
      de(null);
      return;
    }
    d === "rect_crop" && ot && (W({
      ...T,
      objects: T.objects.filter((Y) => Y.type !== "crop")
    }), de(null));
  }, [
    W,
    ot,
    D,
    d,
    se,
    T,
    he,
    je
  ]), Kl = ie.useCallback(
    (Y) => {
      d !== "transform" && d !== "rect_crop" || !Fu(Y, d, b).selectable || de(kw(Y));
    },
    [d, b, T]
  ), Xl = ie.useCallback(
    (Y, J) => {
      const ne = hu(Y), ee = k.current;
      if (ne && ee) {
        const ke = se.find((Dn) => Dn.groupId === ne);
        if (!ke) return;
        const ht = mm(
          T,
          ke,
          J,
          ee
        );
        W({ ...T, objects: ht });
        return;
      }
      const Pe = T.objects.map((ke) => ke.id !== Y ? ke : Fw(ke, J));
      W({ ...T, objects: Pe });
    },
    [W, se, T]
  ), $l = ie.useCallback(
    (Y, J) => {
      const ne = hu(Y), ee = k.current;
      if (ne && ee) {
        const ke = se.find((Dn) => Dn.groupId === ne);
        if (!ke) return;
        const ht = mm(
          T,
          ke,
          J,
          ee
        );
        W({ ...T, objects: ht });
        return;
      }
      const Pe = T.objects.map(
        (ke) => ke.id === Y ? { ...ke, x: J.x(), y: J.y() } : ke
      );
      W({ ...T, objects: Pe });
    },
    [W, se, T]
  ), Sd = {
    background: r || "transparent",
    border: "1px solid var(--st-gray-color, #ddd)",
    display: "block",
    cursor: d === "pan" || M.current ? "grab" : "crosshair"
  }, Ql = {
    id: "viewport-content",
    x: H.x,
    y: H.y,
    scaleX: H.scale,
    scaleY: H.scale,
    rotation: H.rotation,
    offsetX: c / 2,
    offsetY: a / 2
  }, wd = Math.round(H.scale * 100);
  return /* @__PURE__ */ ge.jsxs(
    "div",
    {
      style: { fontFamily: "var(--st-font, sans-serif)", width: c },
      children: [
        y && /* @__PURE__ */ ge.jsxs(
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
              /* @__PURE__ */ ge.jsx("button", { type: "button", onClick: ue, disabled: j <= 0, children: "Undo" }),
              /* @__PURE__ */ ge.jsx(
                "button",
                {
                  type: "button",
                  onClick: Ae,
                  disabled: j >= F.length - 1,
                  children: "Redo"
                }
              ),
              /* @__PURE__ */ ge.jsx("button", { type: "button", onClick: me, children: "Clear" }),
              !l && /* @__PURE__ */ ge.jsx("button", { type: "button", onClick: Ge, children: "Send to Streamlit" }),
              _ && /* @__PURE__ */ ge.jsxs(ge.Fragment, { children: [
                /* @__PURE__ */ ge.jsx("button", { type: "button", onClick: () => Kt(pu), children: "Zoom +" }),
                /* @__PURE__ */ ge.jsx("button", { type: "button", onClick: () => Kt(1 / pu), children: "Zoom −" }),
                /* @__PURE__ */ ge.jsx("button", { type: "button", onClick: () => Ie(-ym), children: "Tilt ↶" }),
                /* @__PURE__ */ ge.jsx("button", { type: "button", onClick: () => Ie(ym), children: "Tilt ↷" }),
                /* @__PURE__ */ ge.jsx("button", { type: "button", onClick: Be, children: "Reset view" }),
                /* @__PURE__ */ ge.jsxs("span", { style: { fontSize: 12, opacity: 0.75 }, children: [
                  wd,
                  "% · ",
                  Math.round(H.rotation),
                  "°"
                ] })
              ] }),
              /* @__PURE__ */ ge.jsxs("span", { style: { marginLeft: "auto", fontSize: 12, opacity: 0.7 }, children: [
                "mode: ",
                d
              ] })
            ]
          }
        ),
        /* @__PURE__ */ ge.jsxs(
          fw,
          {
            width: c,
            height: a,
            ref: E,
            style: Sd,
            onMouseDown: md,
            onMousemove: yd,
            onMouseup: Br,
            onMouseLeave: Br,
            onContextMenu: vd,
            onDblClick: _d,
            onWheel: Ti,
            children: [
              /* @__PURE__ */ ge.jsx(hm, { listening: !1, children: /* @__PURE__ */ ge.jsx(fu, { ref: x, ...Ql, id: "viewport-bg", children: Q && /* @__PURE__ */ ge.jsx(
                cw,
                {
                  image: Q,
                  width: c,
                  height: a,
                  listening: !1
                }
              ) }) }),
              /* @__PURE__ */ ge.jsx(hm, { ref: R, children: /* @__PURE__ */ ge.jsxs(fu, { ref: k, ...Ql, children: [
                !Q && !!r && /* @__PURE__ */ ge.jsx(
                  Qi,
                  {
                    x: 0,
                    y: 0,
                    width: c,
                    height: a,
                    fill: r,
                    listening: !1
                  }
                ),
                Wl && (d === "rect_crop" || ot) && /* @__PURE__ */ ge.jsx(fu, { id: "crop-chrome", listening: !1, children: /* @__PURE__ */ ge.jsx(
                  Iw,
                  {
                    bounds: Wl,
                    canvasWidth: c,
                    canvasHeight: a
                  }
                ) }),
                Ne.map((Y) => /* @__PURE__ */ ge.jsx(
                  gm,
                  {
                    obj: Y,
                    interaction: Fu(
                      Y,
                      d,
                      b
                    ),
                    onSelect: () => Kl(Y),
                    onDragEnd: (J) => $l(Y.id, J),
                    onTransformEnd: (J) => Xl(Y.id, J)
                  },
                  Y.id
                )),
                se.map((Y) => {
                  const J = pm(
                    Y,
                    d,
                    b
                  ), ne = Mw(Y.members, Y.descriptor), ee = E4(Y.groupId), Pe = {
                    selectable: !0,
                    draggable: !1,
                    scalable: !1,
                    rotatable: !1,
                    deletable: !1,
                    listening: !0
                  };
                  return /* @__PURE__ */ ge.jsx(
                    fu,
                    {
                      id: ee,
                      x: ne.x,
                      y: ne.y,
                      offsetX: ne.x,
                      offsetY: ne.y,
                      draggable: J.draggable,
                      listening: J.listening || J.selectable,
                      onClick: () => {
                        J.selectable && de(ee);
                      },
                      onTap: () => {
                        J.selectable && de(ee);
                      },
                      onDragEnd: (ke) => $l(ee, ke.target),
                      onTransformEnd: (ke) => Xl(ee, ke.target),
                      children: Y.members.map((ke) => /* @__PURE__ */ ge.jsx(
                        gm,
                        {
                          obj: ke,
                          interaction: Pe,
                          onSelect: () => Kl(ke),
                          onDragEnd: () => {
                          },
                          onTransformEnd: () => {
                          }
                        },
                        ke.id
                      ))
                    },
                    Y.groupId
                  );
                }),
                (D == null ? void 0 : D.kind) === "freedraw" && /* @__PURE__ */ ge.jsx(
                  hl,
                  {
                    points: D.points,
                    stroke: n,
                    strokeWidth: e,
                    tension: 0.5,
                    lineCap: "round",
                    lineJoin: "round",
                    listening: !1
                  }
                ),
                (D == null ? void 0 : D.kind) === "line" && /* @__PURE__ */ ge.jsx(
                  hl,
                  {
                    points: [D.x1, D.y1, D.x2, D.y2],
                    stroke: n,
                    strokeWidth: e,
                    listening: !1
                  }
                ),
                (D == null ? void 0 : D.kind) === "rect" && /* @__PURE__ */ ge.jsx(
                  Qi,
                  {
                    x: Math.min(D.x, D.x + D.width),
                    y: Math.min(D.y, D.y + D.height),
                    width: Math.abs(D.width),
                    height: Math.abs(D.height),
                    stroke: n,
                    strokeWidth: e,
                    fill: d === "rect_crop" ? "transparent" : t,
                    dash: d === "rect_crop" ? [8, 4] : void 0,
                    listening: !1
                  }
                ),
                (D == null ? void 0 : D.kind) === "circle" && /* @__PURE__ */ ge.jsx(
                  w4,
                  {
                    x: D.x,
                    y: D.y,
                    radius: D.radius,
                    stroke: n,
                    strokeWidth: e,
                    fill: t,
                    listening: !1
                  }
                ),
                (D == null ? void 0 : D.kind) === "polygon" && D.points.length >= 2 && /* @__PURE__ */ ge.jsx(
                  hl,
                  {
                    points: D.points,
                    stroke: n,
                    strokeWidth: e,
                    fill: t,
                    closed: !1,
                    listening: !1
                  }
                ),
                (d === "transform" || d === "rect_crop") && /* @__PURE__ */ ge.jsx(dw, { ref: p })
              ] }) })
            ]
          }
        )
      ]
    }
  );
}, mu = /* @__PURE__ */ new WeakMap(), jw = (t) => {
  const { data: e, parentElement: n, setStateValue: r } = t, o = n.querySelector(".react-root");
  if (!o)
    throw new Error("Unexpected: React root element not found");
  let l = mu.get(n);
  return l || (l = F3(o), mu.set(n, l)), l.render(
    /* @__PURE__ */ ge.jsx(ie.StrictMode, { children: /* @__PURE__ */ ge.jsx(
      Dw,
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
        transformOptions: e.transformOptions ?? {},
        setStateValue: r
      }
    ) })
  ), () => {
    const a = mu.get(n);
    a && (a.unmount(), mu.delete(n));
  };
};
export {
  jw as default
};
