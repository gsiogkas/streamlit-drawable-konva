var Vp = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Lu(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var B2 = { exports: {} }, Au = {}, V2 = { exports: {} }, we = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vl = Symbol.for("react.element"), ky = Symbol.for("react.portal"), Ey = Symbol.for("react.fragment"), Py = Symbol.for("react.strict_mode"), Ty = Symbol.for("react.profiler"), Ny = Symbol.for("react.provider"), Ry = Symbol.for("react.context"), Fy = Symbol.for("react.forward_ref"), My = Symbol.for("react.suspense"), Ly = Symbol.for("react.memo"), Ay = Symbol.for("react.lazy"), Hp = Symbol.iterator;
function Oy(t) {
  return t === null || typeof t != "object" ? null : (t = Hp && t[Hp] || t["@@iterator"], typeof t == "function" ? t : null);
}
var H2 = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, j2 = Object.assign, W2 = {};
function Ys(t, e, n) {
  this.props = t, this.context = e, this.refs = W2, this.updater = n || H2;
}
Ys.prototype.isReactComponent = {};
Ys.prototype.setState = function(t, e) {
  if (typeof t != "object" && typeof t != "function" && t != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, t, e, "setState");
};
Ys.prototype.forceUpdate = function(t) {
  this.updater.enqueueForceUpdate(this, t, "forceUpdate");
};
function K2() {
}
K2.prototype = Ys.prototype;
function jh(t, e, n) {
  this.props = t, this.context = e, this.refs = W2, this.updater = n || H2;
}
var Wh = jh.prototype = new K2();
Wh.constructor = jh;
j2(Wh, Ys.prototype);
Wh.isPureReactComponent = !0;
var jp = Array.isArray, Y2 = Object.prototype.hasOwnProperty, Kh = { current: null }, X2 = { key: !0, ref: !0, __self: !0, __source: !0 };
function Q2(t, e, n) {
  var r, o = {}, l = null, a = null;
  if (e != null) for (r in e.ref !== void 0 && (a = e.ref), e.key !== void 0 && (l = "" + e.key), e) Y2.call(e, r) && !X2.hasOwnProperty(r) && (o[r] = e[r]);
  var c = arguments.length - 2;
  if (c === 1) o.children = n;
  else if (1 < c) {
    for (var f = Array(c), g = 0; g < c; g++) f[g] = arguments[g + 2];
    o.children = f;
  }
  if (t && t.defaultProps) for (r in c = t.defaultProps, c) o[r] === void 0 && (o[r] = c[r]);
  return { $$typeof: vl, type: t, key: l, ref: a, props: o, _owner: Kh.current };
}
function Dy(t, e) {
  return { $$typeof: vl, type: t.type, key: e, ref: t.ref, props: t.props, _owner: t._owner };
}
function Yh(t) {
  return typeof t == "object" && t !== null && t.$$typeof === vl;
}
function Iy(t) {
  var e = { "=": "=0", ":": "=2" };
  return "$" + t.replace(/[=:]/g, function(n) {
    return e[n];
  });
}
var Wp = /\/+/g;
function tf(t, e) {
  return typeof t == "object" && t !== null && t.key != null ? Iy("" + t.key) : e.toString(36);
}
function ja(t, e, n, r, o) {
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
        case vl:
        case ky:
          a = !0;
      }
  }
  if (a) return a = t, o = o(a), t = r === "" ? "." + tf(a, 0) : r, jp(o) ? (n = "", t != null && (n = t.replace(Wp, "$&/") + "/"), ja(o, e, n, "", function(g) {
    return g;
  })) : o != null && (Yh(o) && (o = Dy(o, n + (!o.key || a && a.key === o.key ? "" : ("" + o.key).replace(Wp, "$&/") + "/") + t)), e.push(o)), 1;
  if (a = 0, r = r === "" ? "." : r + ":", jp(t)) for (var c = 0; c < t.length; c++) {
    l = t[c];
    var f = r + tf(l, c);
    a += ja(l, e, n, f, o);
  }
  else if (f = Oy(t), typeof f == "function") for (t = f.call(t), c = 0; !(l = t.next()).done; ) l = l.value, f = r + tf(l, c++), a += ja(l, e, n, f, o);
  else if (l === "object") throw e = String(t), Error("Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead.");
  return a;
}
function Sa(t, e, n) {
  if (t == null) return t;
  var r = [], o = 0;
  return ja(t, r, "", "", function(l) {
    return e.call(n, l, o++);
  }), r;
}
function zy(t) {
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
var Ht = { current: null }, Wa = { transition: null }, Uy = { ReactCurrentDispatcher: Ht, ReactCurrentBatchConfig: Wa, ReactCurrentOwner: Kh };
function $2() {
  throw Error("act(...) is not supported in production builds of React.");
}
we.Children = { map: Sa, forEach: function(t, e, n) {
  Sa(t, function() {
    e.apply(this, arguments);
  }, n);
}, count: function(t) {
  var e = 0;
  return Sa(t, function() {
    e++;
  }), e;
}, toArray: function(t) {
  return Sa(t, function(e) {
    return e;
  }) || [];
}, only: function(t) {
  if (!Yh(t)) throw Error("React.Children.only expected to receive a single React element child.");
  return t;
} };
we.Component = Ys;
we.Fragment = Ey;
we.Profiler = Ty;
we.PureComponent = jh;
we.StrictMode = Py;
we.Suspense = My;
we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Uy;
we.act = $2;
we.cloneElement = function(t, e, n) {
  if (t == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + t + ".");
  var r = j2({}, t.props), o = t.key, l = t.ref, a = t._owner;
  if (e != null) {
    if (e.ref !== void 0 && (l = e.ref, a = Kh.current), e.key !== void 0 && (o = "" + e.key), t.type && t.type.defaultProps) var c = t.type.defaultProps;
    for (f in e) Y2.call(e, f) && !X2.hasOwnProperty(f) && (r[f] = e[f] === void 0 && c !== void 0 ? c[f] : e[f]);
  }
  var f = arguments.length - 2;
  if (f === 1) r.children = n;
  else if (1 < f) {
    c = Array(f);
    for (var g = 0; g < f; g++) c[g] = arguments[g + 2];
    r.children = c;
  }
  return { $$typeof: vl, type: t.type, key: o, ref: l, props: r, _owner: a };
};
we.createContext = function(t) {
  return t = { $$typeof: Ry, _currentValue: t, _currentValue2: t, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, t.Provider = { $$typeof: Ny, _context: t }, t.Consumer = t;
};
we.createElement = Q2;
we.createFactory = function(t) {
  var e = Q2.bind(null, t);
  return e.type = t, e;
};
we.createRef = function() {
  return { current: null };
};
we.forwardRef = function(t) {
  return { $$typeof: Fy, render: t };
};
we.isValidElement = Yh;
we.lazy = function(t) {
  return { $$typeof: Ay, _payload: { _status: -1, _result: t }, _init: zy };
};
we.memo = function(t, e) {
  return { $$typeof: Ly, type: t, compare: e === void 0 ? null : e };
};
we.startTransition = function(t) {
  var e = Wa.transition;
  Wa.transition = {};
  try {
    t();
  } finally {
    Wa.transition = e;
  }
};
we.unstable_act = $2;
we.useCallback = function(t, e) {
  return Ht.current.useCallback(t, e);
};
we.useContext = function(t) {
  return Ht.current.useContext(t);
};
we.useDebugValue = function() {
};
we.useDeferredValue = function(t) {
  return Ht.current.useDeferredValue(t);
};
we.useEffect = function(t, e) {
  return Ht.current.useEffect(t, e);
};
we.useId = function() {
  return Ht.current.useId();
};
we.useImperativeHandle = function(t, e, n) {
  return Ht.current.useImperativeHandle(t, e, n);
};
we.useInsertionEffect = function(t, e) {
  return Ht.current.useInsertionEffect(t, e);
};
we.useLayoutEffect = function(t, e) {
  return Ht.current.useLayoutEffect(t, e);
};
we.useMemo = function(t, e) {
  return Ht.current.useMemo(t, e);
};
we.useReducer = function(t, e, n) {
  return Ht.current.useReducer(t, e, n);
};
we.useRef = function(t) {
  return Ht.current.useRef(t);
};
we.useState = function(t) {
  return Ht.current.useState(t);
};
we.useSyncExternalStore = function(t, e, n) {
  return Ht.current.useSyncExternalStore(t, e, n);
};
we.useTransition = function() {
  return Ht.current.useTransition();
};
we.version = "18.3.1";
V2.exports = we;
var ce = V2.exports;
const Bt = /* @__PURE__ */ Lu(ce);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gy = ce, By = Symbol.for("react.element"), Vy = Symbol.for("react.fragment"), Hy = Object.prototype.hasOwnProperty, jy = Gy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Wy = { key: !0, ref: !0, __self: !0, __source: !0 };
function q2(t, e, n) {
  var r, o = {}, l = null, a = null;
  n !== void 0 && (l = "" + n), e.key !== void 0 && (l = "" + e.key), e.ref !== void 0 && (a = e.ref);
  for (r in e) Hy.call(e, r) && !Wy.hasOwnProperty(r) && (o[r] = e[r]);
  if (t && t.defaultProps) for (r in e = t.defaultProps, e) o[r] === void 0 && (o[r] = e[r]);
  return { $$typeof: By, type: t, key: l, ref: a, props: o, _owner: jy.current };
}
Au.Fragment = Vy;
Au.jsx = q2;
Au.jsxs = q2;
B2.exports = Au;
var He = B2.exports, J2 = { exports: {} }, un = {}, Z2 = { exports: {} }, b2 = {};
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
  function e(V, J) {
    var X = V.length;
    V.push(J);
    e: for (; 0 < X; ) {
      var Y = X - 1 >>> 1, se = V[Y];
      if (0 < o(se, J)) V[Y] = J, V[X] = se, X = Y;
      else break e;
    }
  }
  function n(V) {
    return V.length === 0 ? null : V[0];
  }
  function r(V) {
    if (V.length === 0) return null;
    var J = V[0], X = V.pop();
    if (X !== J) {
      V[0] = X;
      e: for (var Y = 0, se = V.length, Ee = se >>> 1; Y < Ee; ) {
        var ot = 2 * (Y + 1) - 1, ut = V[ot], Oe = ot + 1, A = V[Oe];
        if (0 > o(ut, X)) Oe < se && 0 > o(A, ut) ? (V[Y] = A, V[Oe] = X, Y = Oe) : (V[Y] = ut, V[ot] = X, Y = ot);
        else if (Oe < se && 0 > o(A, X)) V[Y] = A, V[Oe] = X, Y = Oe;
        else break e;
      }
    }
    return J;
  }
  function o(V, J) {
    var X = V.sortIndex - J.sortIndex;
    return X !== 0 ? X : V.id - J.id;
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
  var f = [], g = [], y = 1, x = null, S = 3, C = !1, v = !1, P = !1, R = typeof setTimeout == "function" ? setTimeout : null, k = typeof clearTimeout == "function" ? clearTimeout : null, w = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(V) {
    for (var J = n(g); J !== null; ) {
      if (J.callback === null) r(g);
      else if (J.startTime <= V) r(g), J.sortIndex = J.expirationTime, e(f, J);
      else break;
      J = n(g);
    }
  }
  function _(V) {
    if (P = !1, p(V), !v) if (n(f) !== null) v = !0, fe(N);
    else {
      var J = n(g);
      J !== null && Ce(_, J.startTime - V);
    }
  }
  function N(V, J) {
    v = !1, P && (P = !1, k(E), E = -1), C = !0;
    var X = S;
    try {
      for (p(J), x = n(f); x !== null && (!(x.expirationTime > J) || V && !B()); ) {
        var Y = x.callback;
        if (typeof Y == "function") {
          x.callback = null, S = x.priorityLevel;
          var se = Y(x.expirationTime <= J);
          J = t.unstable_now(), typeof se == "function" ? x.callback = se : x === n(f) && r(f), p(J);
        } else r(f);
        x = n(f);
      }
      if (x !== null) var Ee = !0;
      else {
        var ot = n(g);
        ot !== null && Ce(_, ot.startTime - J), Ee = !1;
      }
      return Ee;
    } finally {
      x = null, S = X, C = !1;
    }
  }
  var F = !1, L = null, E = -1, I = 5, M = -1;
  function B() {
    return !(t.unstable_now() - M < I);
  }
  function H() {
    if (L !== null) {
      var V = t.unstable_now();
      M = V;
      var J = !0;
      try {
        J = L(!0, V);
      } finally {
        J ? q() : (F = !1, L = null);
      }
    } else F = !1;
  }
  var q;
  if (typeof w == "function") q = function() {
    w(H);
  };
  else if (typeof MessageChannel < "u") {
    var ie = new MessageChannel(), Q = ie.port2;
    ie.port1.onmessage = H, q = function() {
      Q.postMessage(null);
    };
  } else q = function() {
    R(H, 0);
  };
  function fe(V) {
    L = V, F || (F = !0, q());
  }
  function Ce(V, J) {
    E = R(function() {
      V(t.unstable_now());
    }, J);
  }
  t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(V) {
    V.callback = null;
  }, t.unstable_continueExecution = function() {
    v || C || (v = !0, fe(N));
  }, t.unstable_forceFrameRate = function(V) {
    0 > V || 125 < V ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : I = 0 < V ? Math.floor(1e3 / V) : 5;
  }, t.unstable_getCurrentPriorityLevel = function() {
    return S;
  }, t.unstable_getFirstCallbackNode = function() {
    return n(f);
  }, t.unstable_next = function(V) {
    switch (S) {
      case 1:
      case 2:
      case 3:
        var J = 3;
        break;
      default:
        J = S;
    }
    var X = S;
    S = J;
    try {
      return V();
    } finally {
      S = X;
    }
  }, t.unstable_pauseExecution = function() {
  }, t.unstable_requestPaint = function() {
  }, t.unstable_runWithPriority = function(V, J) {
    switch (V) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        V = 3;
    }
    var X = S;
    S = V;
    try {
      return J();
    } finally {
      S = X;
    }
  }, t.unstable_scheduleCallback = function(V, J, X) {
    var Y = t.unstable_now();
    switch (typeof X == "object" && X !== null ? (X = X.delay, X = typeof X == "number" && 0 < X ? Y + X : Y) : X = Y, V) {
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
    return se = X + se, V = { id: y++, callback: J, priorityLevel: V, startTime: X, expirationTime: se, sortIndex: -1 }, X > Y ? (V.sortIndex = X, e(g, V), n(f) === null && V === n(g) && (P ? (k(E), E = -1) : P = !0, Ce(_, X - Y))) : (V.sortIndex = se, e(f, V), v || C || (v = !0, fe(N))), V;
  }, t.unstable_shouldYield = B, t.unstable_wrapCallback = function(V) {
    var J = S;
    return function() {
      var X = S;
      S = J;
      try {
        return V.apply(this, arguments);
      } finally {
        S = X;
      }
    };
  };
})(b2);
Z2.exports = b2;
var Vo = Z2.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ky = ce, an = Vo;
function W(t) {
  for (var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, n = 1; n < arguments.length; n++) e += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var em = /* @__PURE__ */ new Set(), Zo = {};
function Vi(t, e) {
  Is(t, e), Is(t + "Capture", e);
}
function Is(t, e) {
  for (Zo[t] = e, t = 0; t < e.length; t++) em.add(e[t]);
}
var Sr = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Bf = Object.prototype.hasOwnProperty, Yy = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Kp = {}, Yp = {};
function Xy(t) {
  return Bf.call(Yp, t) ? !0 : Bf.call(Kp, t) ? !1 : Yy.test(t) ? Yp[t] = !0 : (Kp[t] = !0, !1);
}
function Qy(t, e, n, r) {
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
function $y(t, e, n, r) {
  if (e === null || typeof e > "u" || Qy(t, e, n, r)) return !0;
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
function jt(t, e, n, r, o, l, a) {
  this.acceptsBooleans = e === 2 || e === 3 || e === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = t, this.type = e, this.sanitizeURL = l, this.removeEmptyString = a;
}
var Tt = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t) {
  Tt[t] = new jt(t, 0, !1, t, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(t) {
  var e = t[0];
  Tt[e] = new jt(e, 1, !1, t[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(t) {
  Tt[t] = new jt(t, 2, !1, t.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(t) {
  Tt[t] = new jt(t, 2, !1, t, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t) {
  Tt[t] = new jt(t, 3, !1, t.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(t) {
  Tt[t] = new jt(t, 3, !0, t, null, !1, !1);
});
["capture", "download"].forEach(function(t) {
  Tt[t] = new jt(t, 4, !1, t, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(t) {
  Tt[t] = new jt(t, 6, !1, t, null, !1, !1);
});
["rowSpan", "start"].forEach(function(t) {
  Tt[t] = new jt(t, 5, !1, t.toLowerCase(), null, !1, !1);
});
var Xh = /[\-:]([a-z])/g;
function Qh(t) {
  return t[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t) {
  var e = t.replace(
    Xh,
    Qh
  );
  Tt[e] = new jt(e, 1, !1, t, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t) {
  var e = t.replace(Xh, Qh);
  Tt[e] = new jt(e, 1, !1, t, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(t) {
  var e = t.replace(Xh, Qh);
  Tt[e] = new jt(e, 1, !1, t, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(t) {
  Tt[t] = new jt(t, 1, !1, t.toLowerCase(), null, !1, !1);
});
Tt.xlinkHref = new jt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(t) {
  Tt[t] = new jt(t, 1, !1, t.toLowerCase(), null, !0, !0);
});
function $h(t, e, n, r) {
  var o = Tt.hasOwnProperty(e) ? Tt[e] : null;
  (o !== null ? o.type !== 0 : r || !(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N") && ($y(e, n, o, r) && (n = null), r || o === null ? Xy(e) && (n === null ? t.removeAttribute(e) : t.setAttribute(e, "" + n)) : o.mustUseProperty ? t[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (e = o.attributeName, r = o.attributeNamespace, n === null ? t.removeAttribute(e) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? t.setAttributeNS(r, e, n) : t.setAttribute(e, n))));
}
var kr = Ky.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, wa = Symbol.for("react.element"), vs = Symbol.for("react.portal"), _s = Symbol.for("react.fragment"), qh = Symbol.for("react.strict_mode"), Vf = Symbol.for("react.profiler"), tm = Symbol.for("react.provider"), nm = Symbol.for("react.context"), Jh = Symbol.for("react.forward_ref"), Hf = Symbol.for("react.suspense"), jf = Symbol.for("react.suspense_list"), Zh = Symbol.for("react.memo"), jr = Symbol.for("react.lazy"), rm = Symbol.for("react.offscreen"), Xp = Symbol.iterator;
function ko(t) {
  return t === null || typeof t != "object" ? null : (t = Xp && t[Xp] || t["@@iterator"], typeof t == "function" ? t : null);
}
var Ze = Object.assign, nf;
function Io(t) {
  if (nf === void 0) try {
    throw Error();
  } catch (n) {
    var e = n.stack.trim().match(/\n( *(at )?)/);
    nf = e && e[1] || "";
  }
  return `
` + nf + t;
}
var rf = !1;
function sf(t, e) {
  if (!t || rf) return "";
  rf = !0;
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
    rf = !1, Error.prepareStackTrace = n;
  }
  return (t = t ? t.displayName || t.name : "") ? Io(t) : "";
}
function qy(t) {
  switch (t.tag) {
    case 5:
      return Io(t.type);
    case 16:
      return Io("Lazy");
    case 13:
      return Io("Suspense");
    case 19:
      return Io("SuspenseList");
    case 0:
    case 2:
    case 15:
      return t = sf(t.type, !1), t;
    case 11:
      return t = sf(t.type.render, !1), t;
    case 1:
      return t = sf(t.type, !0), t;
    default:
      return "";
  }
}
function Wf(t) {
  if (t == null) return null;
  if (typeof t == "function") return t.displayName || t.name || null;
  if (typeof t == "string") return t;
  switch (t) {
    case _s:
      return "Fragment";
    case vs:
      return "Portal";
    case Vf:
      return "Profiler";
    case qh:
      return "StrictMode";
    case Hf:
      return "Suspense";
    case jf:
      return "SuspenseList";
  }
  if (typeof t == "object") switch (t.$$typeof) {
    case nm:
      return (t.displayName || "Context") + ".Consumer";
    case tm:
      return (t._context.displayName || "Context") + ".Provider";
    case Jh:
      var e = t.render;
      return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
    case Zh:
      return e = t.displayName || null, e !== null ? e : Wf(t.type) || "Memo";
    case jr:
      e = t._payload, t = t._init;
      try {
        return Wf(t(e));
      } catch {
      }
  }
  return null;
}
function Jy(t) {
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
      return Wf(e);
    case 8:
      return e === qh ? "StrictMode" : "Mode";
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
function ri(t) {
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
function im(t) {
  var e = t.type;
  return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
}
function Zy(t) {
  var e = im(t) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e), r = "" + t[e];
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
function Ca(t) {
  t._valueTracker || (t._valueTracker = Zy(t));
}
function sm(t) {
  if (!t) return !1;
  var e = t._valueTracker;
  if (!e) return !0;
  var n = e.getValue(), r = "";
  return t && (r = im(t) ? t.checked ? "true" : "false" : t.value), t = r, t !== n ? (e.setValue(t), !0) : !1;
}
function ru(t) {
  if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
  try {
    return t.activeElement || t.body;
  } catch {
    return t.body;
  }
}
function Kf(t, e) {
  var n = e.checked;
  return Ze({}, e, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? t._wrapperState.initialChecked });
}
function Qp(t, e) {
  var n = e.defaultValue == null ? "" : e.defaultValue, r = e.checked != null ? e.checked : e.defaultChecked;
  n = ri(e.value != null ? e.value : n), t._wrapperState = { initialChecked: r, initialValue: n, controlled: e.type === "checkbox" || e.type === "radio" ? e.checked != null : e.value != null };
}
function om(t, e) {
  e = e.checked, e != null && $h(t, "checked", e, !1);
}
function Yf(t, e) {
  om(t, e);
  var n = ri(e.value), r = e.type;
  if (n != null) r === "number" ? (n === 0 && t.value === "" || t.value != n) && (t.value = "" + n) : t.value !== "" + n && (t.value = "" + n);
  else if (r === "submit" || r === "reset") {
    t.removeAttribute("value");
    return;
  }
  e.hasOwnProperty("value") ? Xf(t, e.type, n) : e.hasOwnProperty("defaultValue") && Xf(t, e.type, ri(e.defaultValue)), e.checked == null && e.defaultChecked != null && (t.defaultChecked = !!e.defaultChecked);
}
function $p(t, e, n) {
  if (e.hasOwnProperty("value") || e.hasOwnProperty("defaultValue")) {
    var r = e.type;
    if (!(r !== "submit" && r !== "reset" || e.value !== void 0 && e.value !== null)) return;
    e = "" + t._wrapperState.initialValue, n || e === t.value || (t.value = e), t.defaultValue = e;
  }
  n = t.name, n !== "" && (t.name = ""), t.defaultChecked = !!t._wrapperState.initialChecked, n !== "" && (t.name = n);
}
function Xf(t, e, n) {
  (e !== "number" || ru(t.ownerDocument) !== t) && (n == null ? t.defaultValue = "" + t._wrapperState.initialValue : t.defaultValue !== "" + n && (t.defaultValue = "" + n));
}
var zo = Array.isArray;
function Fs(t, e, n, r) {
  if (t = t.options, e) {
    e = {};
    for (var o = 0; o < n.length; o++) e["$" + n[o]] = !0;
    for (n = 0; n < t.length; n++) o = e.hasOwnProperty("$" + t[n].value), t[n].selected !== o && (t[n].selected = o), o && r && (t[n].defaultSelected = !0);
  } else {
    for (n = "" + ri(n), e = null, o = 0; o < t.length; o++) {
      if (t[o].value === n) {
        t[o].selected = !0, r && (t[o].defaultSelected = !0);
        return;
      }
      e !== null || t[o].disabled || (e = t[o]);
    }
    e !== null && (e.selected = !0);
  }
}
function Qf(t, e) {
  if (e.dangerouslySetInnerHTML != null) throw Error(W(91));
  return Ze({}, e, { value: void 0, defaultValue: void 0, children: "" + t._wrapperState.initialValue });
}
function qp(t, e) {
  var n = e.value;
  if (n == null) {
    if (n = e.children, e = e.defaultValue, n != null) {
      if (e != null) throw Error(W(92));
      if (zo(n)) {
        if (1 < n.length) throw Error(W(93));
        n = n[0];
      }
      e = n;
    }
    e == null && (e = ""), n = e;
  }
  t._wrapperState = { initialValue: ri(n) };
}
function lm(t, e) {
  var n = ri(e.value), r = ri(e.defaultValue);
  n != null && (n = "" + n, n !== t.value && (t.value = n), e.defaultValue == null && t.defaultValue !== n && (t.defaultValue = n)), r != null && (t.defaultValue = "" + r);
}
function Jp(t) {
  var e = t.textContent;
  e === t._wrapperState.initialValue && e !== "" && e !== null && (t.value = e);
}
function am(t) {
  switch (t) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function $f(t, e) {
  return t == null || t === "http://www.w3.org/1999/xhtml" ? am(e) : t === "http://www.w3.org/2000/svg" && e === "foreignObject" ? "http://www.w3.org/1999/xhtml" : t;
}
var xa, um = function(t) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(e, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return t(e, n, r, o);
    });
  } : t;
}(function(t, e) {
  if (t.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in t) t.innerHTML = e;
  else {
    for (xa = xa || document.createElement("div"), xa.innerHTML = "<svg>" + e.valueOf().toString() + "</svg>", e = xa.firstChild; t.firstChild; ) t.removeChild(t.firstChild);
    for (; e.firstChild; ) t.appendChild(e.firstChild);
  }
});
function bo(t, e) {
  if (e) {
    var n = t.firstChild;
    if (n && n === t.lastChild && n.nodeType === 3) {
      n.nodeValue = e;
      return;
    }
  }
  t.textContent = e;
}
var Ho = {
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
}, by = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ho).forEach(function(t) {
  by.forEach(function(e) {
    e = e + t.charAt(0).toUpperCase() + t.substring(1), Ho[e] = Ho[t];
  });
});
function cm(t, e, n) {
  return e == null || typeof e == "boolean" || e === "" ? "" : n || typeof e != "number" || e === 0 || Ho.hasOwnProperty(t) && Ho[t] ? ("" + e).trim() : e + "px";
}
function dm(t, e) {
  t = t.style;
  for (var n in e) if (e.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, o = cm(n, e[n], r);
    n === "float" && (n = "cssFloat"), r ? t.setProperty(n, o) : t[n] = o;
  }
}
var ev = Ze({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function qf(t, e) {
  if (e) {
    if (ev[t] && (e.children != null || e.dangerouslySetInnerHTML != null)) throw Error(W(137, t));
    if (e.dangerouslySetInnerHTML != null) {
      if (e.children != null) throw Error(W(60));
      if (typeof e.dangerouslySetInnerHTML != "object" || !("__html" in e.dangerouslySetInnerHTML)) throw Error(W(61));
    }
    if (e.style != null && typeof e.style != "object") throw Error(W(62));
  }
}
function Jf(t, e) {
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
var Zf = null;
function bh(t) {
  return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
}
var bf = null, Ms = null, Ls = null;
function Zp(t) {
  if (t = wl(t)) {
    if (typeof bf != "function") throw Error(W(280));
    var e = t.stateNode;
    e && (e = Uu(e), bf(t.stateNode, t.type, e));
  }
}
function fm(t) {
  Ms ? Ls ? Ls.push(t) : Ls = [t] : Ms = t;
}
function hm() {
  if (Ms) {
    var t = Ms, e = Ls;
    if (Ls = Ms = null, Zp(t), e) for (t = 0; t < e.length; t++) Zp(e[t]);
  }
}
function pm(t, e) {
  return t(e);
}
function gm() {
}
var of = !1;
function mm(t, e, n) {
  if (of) return t(e, n);
  of = !0;
  try {
    return pm(t, e, n);
  } finally {
    of = !1, (Ms !== null || Ls !== null) && (gm(), hm());
  }
}
function el(t, e) {
  var n = t.stateNode;
  if (n === null) return null;
  var r = Uu(n);
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
  if (n && typeof n != "function") throw Error(W(231, e, typeof n));
  return n;
}
var eh = !1;
if (Sr) try {
  var Eo = {};
  Object.defineProperty(Eo, "passive", { get: function() {
    eh = !0;
  } }), window.addEventListener("test", Eo, Eo), window.removeEventListener("test", Eo, Eo);
} catch {
  eh = !1;
}
function tv(t, e, n, r, o, l, a, c, f) {
  var g = Array.prototype.slice.call(arguments, 3);
  try {
    e.apply(n, g);
  } catch (y) {
    this.onError(y);
  }
}
var jo = !1, iu = null, su = !1, th = null, nv = { onError: function(t) {
  jo = !0, iu = t;
} };
function rv(t, e, n, r, o, l, a, c, f) {
  jo = !1, iu = null, tv.apply(nv, arguments);
}
function iv(t, e, n, r, o, l, a, c, f) {
  if (rv.apply(this, arguments), jo) {
    if (jo) {
      var g = iu;
      jo = !1, iu = null;
    } else throw Error(W(198));
    su || (su = !0, th = g);
  }
}
function Hi(t) {
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
function ym(t) {
  if (t.tag === 13) {
    var e = t.memoizedState;
    if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
  }
  return null;
}
function bp(t) {
  if (Hi(t) !== t) throw Error(W(188));
}
function sv(t) {
  var e = t.alternate;
  if (!e) {
    if (e = Hi(t), e === null) throw Error(W(188));
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
        if (l === n) return bp(o), t;
        if (l === r) return bp(o), e;
        l = l.sibling;
      }
      throw Error(W(188));
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
        if (!a) throw Error(W(189));
      }
    }
    if (n.alternate !== r) throw Error(W(190));
  }
  if (n.tag !== 3) throw Error(W(188));
  return n.stateNode.current === n ? t : e;
}
function vm(t) {
  return t = sv(t), t !== null ? _m(t) : null;
}
function _m(t) {
  if (t.tag === 5 || t.tag === 6) return t;
  for (t = t.child; t !== null; ) {
    var e = _m(t);
    if (e !== null) return e;
    t = t.sibling;
  }
  return null;
}
var Sm = an.unstable_scheduleCallback, eg = an.unstable_cancelCallback, ov = an.unstable_shouldYield, lv = an.unstable_requestPaint, it = an.unstable_now, av = an.unstable_getCurrentPriorityLevel, e0 = an.unstable_ImmediatePriority, wm = an.unstable_UserBlockingPriority, ou = an.unstable_NormalPriority, uv = an.unstable_LowPriority, Cm = an.unstable_IdlePriority, Ou = null, tr = null;
function cv(t) {
  if (tr && typeof tr.onCommitFiberRoot == "function") try {
    tr.onCommitFiberRoot(Ou, t, void 0, (t.current.flags & 128) === 128);
  } catch {
  }
}
var Un = Math.clz32 ? Math.clz32 : hv, dv = Math.log, fv = Math.LN2;
function hv(t) {
  return t >>>= 0, t === 0 ? 32 : 31 - (dv(t) / fv | 0) | 0;
}
var ka = 64, Ea = 4194304;
function Uo(t) {
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
function lu(t, e) {
  var n = t.pendingLanes;
  if (n === 0) return 0;
  var r = 0, o = t.suspendedLanes, l = t.pingedLanes, a = n & 268435455;
  if (a !== 0) {
    var c = a & ~o;
    c !== 0 ? r = Uo(c) : (l &= a, l !== 0 && (r = Uo(l)));
  } else a = n & ~o, a !== 0 ? r = Uo(a) : l !== 0 && (r = Uo(l));
  if (r === 0) return 0;
  if (e !== 0 && e !== r && !(e & o) && (o = r & -r, l = e & -e, o >= l || o === 16 && (l & 4194240) !== 0)) return e;
  if (r & 4 && (r |= n & 16), e = t.entangledLanes, e !== 0) for (t = t.entanglements, e &= r; 0 < e; ) n = 31 - Un(e), o = 1 << n, r |= t[n], e &= ~o;
  return r;
}
function pv(t, e) {
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
function gv(t, e) {
  for (var n = t.suspendedLanes, r = t.pingedLanes, o = t.expirationTimes, l = t.pendingLanes; 0 < l; ) {
    var a = 31 - Un(l), c = 1 << a, f = o[a];
    f === -1 ? (!(c & n) || c & r) && (o[a] = pv(c, e)) : f <= e && (t.expiredLanes |= c), l &= ~c;
  }
}
function nh(t) {
  return t = t.pendingLanes & -1073741825, t !== 0 ? t : t & 1073741824 ? 1073741824 : 0;
}
function xm() {
  var t = ka;
  return ka <<= 1, !(ka & 4194240) && (ka = 64), t;
}
function lf(t) {
  for (var e = [], n = 0; 31 > n; n++) e.push(t);
  return e;
}
function _l(t, e, n) {
  t.pendingLanes |= e, e !== 536870912 && (t.suspendedLanes = 0, t.pingedLanes = 0), t = t.eventTimes, e = 31 - Un(e), t[e] = n;
}
function mv(t, e) {
  var n = t.pendingLanes & ~e;
  t.pendingLanes = e, t.suspendedLanes = 0, t.pingedLanes = 0, t.expiredLanes &= e, t.mutableReadLanes &= e, t.entangledLanes &= e, e = t.entanglements;
  var r = t.eventTimes;
  for (t = t.expirationTimes; 0 < n; ) {
    var o = 31 - Un(n), l = 1 << o;
    e[o] = 0, r[o] = -1, t[o] = -1, n &= ~l;
  }
}
function t0(t, e) {
  var n = t.entangledLanes |= e;
  for (t = t.entanglements; n; ) {
    var r = 31 - Un(n), o = 1 << r;
    o & e | t[r] & e && (t[r] |= e), n &= ~o;
  }
}
var Le = 0;
function km(t) {
  return t &= -t, 1 < t ? 4 < t ? t & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Em, n0, Pm, Tm, Nm, rh = !1, Pa = [], $r = null, qr = null, Jr = null, tl = /* @__PURE__ */ new Map(), nl = /* @__PURE__ */ new Map(), Kr = [], yv = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function tg(t, e) {
  switch (t) {
    case "focusin":
    case "focusout":
      $r = null;
      break;
    case "dragenter":
    case "dragleave":
      qr = null;
      break;
    case "mouseover":
    case "mouseout":
      Jr = null;
      break;
    case "pointerover":
    case "pointerout":
      tl.delete(e.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      nl.delete(e.pointerId);
  }
}
function Po(t, e, n, r, o, l) {
  return t === null || t.nativeEvent !== l ? (t = { blockedOn: e, domEventName: n, eventSystemFlags: r, nativeEvent: l, targetContainers: [o] }, e !== null && (e = wl(e), e !== null && n0(e)), t) : (t.eventSystemFlags |= r, e = t.targetContainers, o !== null && e.indexOf(o) === -1 && e.push(o), t);
}
function vv(t, e, n, r, o) {
  switch (e) {
    case "focusin":
      return $r = Po($r, t, e, n, r, o), !0;
    case "dragenter":
      return qr = Po(qr, t, e, n, r, o), !0;
    case "mouseover":
      return Jr = Po(Jr, t, e, n, r, o), !0;
    case "pointerover":
      var l = o.pointerId;
      return tl.set(l, Po(tl.get(l) || null, t, e, n, r, o)), !0;
    case "gotpointercapture":
      return l = o.pointerId, nl.set(l, Po(nl.get(l) || null, t, e, n, r, o)), !0;
  }
  return !1;
}
function Rm(t) {
  var e = Mi(t.target);
  if (e !== null) {
    var n = Hi(e);
    if (n !== null) {
      if (e = n.tag, e === 13) {
        if (e = ym(n), e !== null) {
          t.blockedOn = e, Nm(t.priority, function() {
            Pm(n);
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
function Ka(t) {
  if (t.blockedOn !== null) return !1;
  for (var e = t.targetContainers; 0 < e.length; ) {
    var n = ih(t.domEventName, t.eventSystemFlags, e[0], t.nativeEvent);
    if (n === null) {
      n = t.nativeEvent;
      var r = new n.constructor(n.type, n);
      Zf = r, n.target.dispatchEvent(r), Zf = null;
    } else return e = wl(n), e !== null && n0(e), t.blockedOn = n, !1;
    e.shift();
  }
  return !0;
}
function ng(t, e, n) {
  Ka(t) && n.delete(e);
}
function _v() {
  rh = !1, $r !== null && Ka($r) && ($r = null), qr !== null && Ka(qr) && (qr = null), Jr !== null && Ka(Jr) && (Jr = null), tl.forEach(ng), nl.forEach(ng);
}
function To(t, e) {
  t.blockedOn === e && (t.blockedOn = null, rh || (rh = !0, an.unstable_scheduleCallback(an.unstable_NormalPriority, _v)));
}
function rl(t) {
  function e(o) {
    return To(o, t);
  }
  if (0 < Pa.length) {
    To(Pa[0], t);
    for (var n = 1; n < Pa.length; n++) {
      var r = Pa[n];
      r.blockedOn === t && (r.blockedOn = null);
    }
  }
  for ($r !== null && To($r, t), qr !== null && To(qr, t), Jr !== null && To(Jr, t), tl.forEach(e), nl.forEach(e), n = 0; n < Kr.length; n++) r = Kr[n], r.blockedOn === t && (r.blockedOn = null);
  for (; 0 < Kr.length && (n = Kr[0], n.blockedOn === null); ) Rm(n), n.blockedOn === null && Kr.shift();
}
var As = kr.ReactCurrentBatchConfig, au = !0;
function Sv(t, e, n, r) {
  var o = Le, l = As.transition;
  As.transition = null;
  try {
    Le = 1, r0(t, e, n, r);
  } finally {
    Le = o, As.transition = l;
  }
}
function wv(t, e, n, r) {
  var o = Le, l = As.transition;
  As.transition = null;
  try {
    Le = 4, r0(t, e, n, r);
  } finally {
    Le = o, As.transition = l;
  }
}
function r0(t, e, n, r) {
  if (au) {
    var o = ih(t, e, n, r);
    if (o === null) yf(t, e, r, uu, n), tg(t, r);
    else if (vv(o, t, e, n, r)) r.stopPropagation();
    else if (tg(t, r), e & 4 && -1 < yv.indexOf(t)) {
      for (; o !== null; ) {
        var l = wl(o);
        if (l !== null && Em(l), l = ih(t, e, n, r), l === null && yf(t, e, r, uu, n), l === o) break;
        o = l;
      }
      o !== null && r.stopPropagation();
    } else yf(t, e, r, null, n);
  }
}
var uu = null;
function ih(t, e, n, r) {
  if (uu = null, t = bh(r), t = Mi(t), t !== null) if (e = Hi(t), e === null) t = null;
  else if (n = e.tag, n === 13) {
    if (t = ym(e), t !== null) return t;
    t = null;
  } else if (n === 3) {
    if (e.stateNode.current.memoizedState.isDehydrated) return e.tag === 3 ? e.stateNode.containerInfo : null;
    t = null;
  } else e !== t && (t = null);
  return uu = t, null;
}
function Fm(t) {
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
      switch (av()) {
        case e0:
          return 1;
        case wm:
          return 4;
        case ou:
        case uv:
          return 16;
        case Cm:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Xr = null, i0 = null, Ya = null;
function Mm() {
  if (Ya) return Ya;
  var t, e = i0, n = e.length, r, o = "value" in Xr ? Xr.value : Xr.textContent, l = o.length;
  for (t = 0; t < n && e[t] === o[t]; t++) ;
  var a = n - t;
  for (r = 1; r <= a && e[n - r] === o[l - r]; r++) ;
  return Ya = o.slice(t, 1 < r ? 1 - r : void 0);
}
function Xa(t) {
  var e = t.keyCode;
  return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
}
function Ta() {
  return !0;
}
function rg() {
  return !1;
}
function cn(t) {
  function e(n, r, o, l, a) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = l, this.target = a, this.currentTarget = null;
    for (var c in t) t.hasOwnProperty(c) && (n = t[c], this[c] = n ? n(l) : l[c]);
    return this.isDefaultPrevented = (l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1) ? Ta : rg, this.isPropagationStopped = rg, this;
  }
  return Ze(e.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Ta);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Ta);
  }, persist: function() {
  }, isPersistent: Ta }), e;
}
var Xs = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(t) {
  return t.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, s0 = cn(Xs), Sl = Ze({}, Xs, { view: 0, detail: 0 }), Cv = cn(Sl), af, uf, No, Du = Ze({}, Sl, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: o0, button: 0, buttons: 0, relatedTarget: function(t) {
  return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
}, movementX: function(t) {
  return "movementX" in t ? t.movementX : (t !== No && (No && t.type === "mousemove" ? (af = t.screenX - No.screenX, uf = t.screenY - No.screenY) : uf = af = 0, No = t), af);
}, movementY: function(t) {
  return "movementY" in t ? t.movementY : uf;
} }), ig = cn(Du), xv = Ze({}, Du, { dataTransfer: 0 }), kv = cn(xv), Ev = Ze({}, Sl, { relatedTarget: 0 }), cf = cn(Ev), Pv = Ze({}, Xs, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Tv = cn(Pv), Nv = Ze({}, Xs, { clipboardData: function(t) {
  return "clipboardData" in t ? t.clipboardData : window.clipboardData;
} }), Rv = cn(Nv), Fv = Ze({}, Xs, { data: 0 }), sg = cn(Fv), Mv = {
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
}, Lv = {
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
}, Av = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Ov(t) {
  var e = this.nativeEvent;
  return e.getModifierState ? e.getModifierState(t) : (t = Av[t]) ? !!e[t] : !1;
}
function o0() {
  return Ov;
}
var Dv = Ze({}, Sl, { key: function(t) {
  if (t.key) {
    var e = Mv[t.key] || t.key;
    if (e !== "Unidentified") return e;
  }
  return t.type === "keypress" ? (t = Xa(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? Lv[t.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: o0, charCode: function(t) {
  return t.type === "keypress" ? Xa(t) : 0;
}, keyCode: function(t) {
  return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
}, which: function(t) {
  return t.type === "keypress" ? Xa(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
} }), Iv = cn(Dv), zv = Ze({}, Du, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), og = cn(zv), Uv = Ze({}, Sl, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: o0 }), Gv = cn(Uv), Bv = Ze({}, Xs, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Vv = cn(Bv), Hv = Ze({}, Du, {
  deltaX: function(t) {
    return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
  },
  deltaY: function(t) {
    return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), jv = cn(Hv), Wv = [9, 13, 27, 32], l0 = Sr && "CompositionEvent" in window, Wo = null;
Sr && "documentMode" in document && (Wo = document.documentMode);
var Kv = Sr && "TextEvent" in window && !Wo, Lm = Sr && (!l0 || Wo && 8 < Wo && 11 >= Wo), lg = " ", ag = !1;
function Am(t, e) {
  switch (t) {
    case "keyup":
      return Wv.indexOf(e.keyCode) !== -1;
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
function Om(t) {
  return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
}
var Ss = !1;
function Yv(t, e) {
  switch (t) {
    case "compositionend":
      return Om(e);
    case "keypress":
      return e.which !== 32 ? null : (ag = !0, lg);
    case "textInput":
      return t = e.data, t === lg && ag ? null : t;
    default:
      return null;
  }
}
function Xv(t, e) {
  if (Ss) return t === "compositionend" || !l0 && Am(t, e) ? (t = Mm(), Ya = i0 = Xr = null, Ss = !1, t) : null;
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
      return Lm && e.locale !== "ko" ? null : e.data;
    default:
      return null;
  }
}
var Qv = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function ug(t) {
  var e = t && t.nodeName && t.nodeName.toLowerCase();
  return e === "input" ? !!Qv[t.type] : e === "textarea";
}
function Dm(t, e, n, r) {
  fm(r), e = cu(e, "onChange"), 0 < e.length && (n = new s0("onChange", "change", null, n, r), t.push({ event: n, listeners: e }));
}
var Ko = null, il = null;
function $v(t) {
  Ym(t, 0);
}
function Iu(t) {
  var e = xs(t);
  if (sm(e)) return t;
}
function qv(t, e) {
  if (t === "change") return e;
}
var Im = !1;
if (Sr) {
  var df;
  if (Sr) {
    var ff = "oninput" in document;
    if (!ff) {
      var cg = document.createElement("div");
      cg.setAttribute("oninput", "return;"), ff = typeof cg.oninput == "function";
    }
    df = ff;
  } else df = !1;
  Im = df && (!document.documentMode || 9 < document.documentMode);
}
function dg() {
  Ko && (Ko.detachEvent("onpropertychange", zm), il = Ko = null);
}
function zm(t) {
  if (t.propertyName === "value" && Iu(il)) {
    var e = [];
    Dm(e, il, t, bh(t)), mm($v, e);
  }
}
function Jv(t, e, n) {
  t === "focusin" ? (dg(), Ko = e, il = n, Ko.attachEvent("onpropertychange", zm)) : t === "focusout" && dg();
}
function Zv(t) {
  if (t === "selectionchange" || t === "keyup" || t === "keydown") return Iu(il);
}
function bv(t, e) {
  if (t === "click") return Iu(e);
}
function e6(t, e) {
  if (t === "input" || t === "change") return Iu(e);
}
function t6(t, e) {
  return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
}
var Vn = typeof Object.is == "function" ? Object.is : t6;
function sl(t, e) {
  if (Vn(t, e)) return !0;
  if (typeof t != "object" || t === null || typeof e != "object" || e === null) return !1;
  var n = Object.keys(t), r = Object.keys(e);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Bf.call(e, o) || !Vn(t[o], e[o])) return !1;
  }
  return !0;
}
function fg(t) {
  for (; t && t.firstChild; ) t = t.firstChild;
  return t;
}
function hg(t, e) {
  var n = fg(t);
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
    n = fg(n);
  }
}
function Um(t, e) {
  return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? Um(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1;
}
function Gm() {
  for (var t = window, e = ru(); e instanceof t.HTMLIFrameElement; ) {
    try {
      var n = typeof e.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) t = e.contentWindow;
    else break;
    e = ru(t.document);
  }
  return e;
}
function a0(t) {
  var e = t && t.nodeName && t.nodeName.toLowerCase();
  return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
}
function n6(t) {
  var e = Gm(), n = t.focusedElem, r = t.selectionRange;
  if (e !== n && n && n.ownerDocument && Um(n.ownerDocument.documentElement, n)) {
    if (r !== null && a0(n)) {
      if (e = r.start, t = r.end, t === void 0 && (t = e), "selectionStart" in n) n.selectionStart = e, n.selectionEnd = Math.min(t, n.value.length);
      else if (t = (e = n.ownerDocument || document) && e.defaultView || window, t.getSelection) {
        t = t.getSelection();
        var o = n.textContent.length, l = Math.min(r.start, o);
        r = r.end === void 0 ? l : Math.min(r.end, o), !t.extend && l > r && (o = r, r = l, l = o), o = hg(n, l);
        var a = hg(
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
var r6 = Sr && "documentMode" in document && 11 >= document.documentMode, ws = null, sh = null, Yo = null, oh = !1;
function pg(t, e, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  oh || ws == null || ws !== ru(r) || (r = ws, "selectionStart" in r && a0(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Yo && sl(Yo, r) || (Yo = r, r = cu(sh, "onSelect"), 0 < r.length && (e = new s0("onSelect", "select", null, e, n), t.push({ event: e, listeners: r }), e.target = ws)));
}
function Na(t, e) {
  var n = {};
  return n[t.toLowerCase()] = e.toLowerCase(), n["Webkit" + t] = "webkit" + e, n["Moz" + t] = "moz" + e, n;
}
var Cs = { animationend: Na("Animation", "AnimationEnd"), animationiteration: Na("Animation", "AnimationIteration"), animationstart: Na("Animation", "AnimationStart"), transitionend: Na("Transition", "TransitionEnd") }, hf = {}, Bm = {};
Sr && (Bm = document.createElement("div").style, "AnimationEvent" in window || (delete Cs.animationend.animation, delete Cs.animationiteration.animation, delete Cs.animationstart.animation), "TransitionEvent" in window || delete Cs.transitionend.transition);
function zu(t) {
  if (hf[t]) return hf[t];
  if (!Cs[t]) return t;
  var e = Cs[t], n;
  for (n in e) if (e.hasOwnProperty(n) && n in Bm) return hf[t] = e[n];
  return t;
}
var Vm = zu("animationend"), Hm = zu("animationiteration"), jm = zu("animationstart"), Wm = zu("transitionend"), Km = /* @__PURE__ */ new Map(), gg = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function oi(t, e) {
  Km.set(t, e), Vi(e, [t]);
}
for (var pf = 0; pf < gg.length; pf++) {
  var gf = gg[pf], i6 = gf.toLowerCase(), s6 = gf[0].toUpperCase() + gf.slice(1);
  oi(i6, "on" + s6);
}
oi(Vm, "onAnimationEnd");
oi(Hm, "onAnimationIteration");
oi(jm, "onAnimationStart");
oi("dblclick", "onDoubleClick");
oi("focusin", "onFocus");
oi("focusout", "onBlur");
oi(Wm, "onTransitionEnd");
Is("onMouseEnter", ["mouseout", "mouseover"]);
Is("onMouseLeave", ["mouseout", "mouseover"]);
Is("onPointerEnter", ["pointerout", "pointerover"]);
Is("onPointerLeave", ["pointerout", "pointerover"]);
Vi("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Vi("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Vi("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Vi("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Vi("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Vi("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Go = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), o6 = new Set("cancel close invalid load scroll toggle".split(" ").concat(Go));
function mg(t, e, n) {
  var r = t.type || "unknown-event";
  t.currentTarget = n, iv(r, e, void 0, t), t.currentTarget = null;
}
function Ym(t, e) {
  e = (e & 4) !== 0;
  for (var n = 0; n < t.length; n++) {
    var r = t[n], o = r.event;
    r = r.listeners;
    e: {
      var l = void 0;
      if (e) for (var a = r.length - 1; 0 <= a; a--) {
        var c = r[a], f = c.instance, g = c.currentTarget;
        if (c = c.listener, f !== l && o.isPropagationStopped()) break e;
        mg(o, c, g), l = f;
      }
      else for (a = 0; a < r.length; a++) {
        if (c = r[a], f = c.instance, g = c.currentTarget, c = c.listener, f !== l && o.isPropagationStopped()) break e;
        mg(o, c, g), l = f;
      }
    }
  }
  if (su) throw t = th, su = !1, th = null, t;
}
function Ve(t, e) {
  var n = e[dh];
  n === void 0 && (n = e[dh] = /* @__PURE__ */ new Set());
  var r = t + "__bubble";
  n.has(r) || (Xm(e, t, 2, !1), n.add(r));
}
function mf(t, e, n) {
  var r = 0;
  e && (r |= 4), Xm(n, t, r, e);
}
var Ra = "_reactListening" + Math.random().toString(36).slice(2);
function ol(t) {
  if (!t[Ra]) {
    t[Ra] = !0, em.forEach(function(n) {
      n !== "selectionchange" && (o6.has(n) || mf(n, !1, t), mf(n, !0, t));
    });
    var e = t.nodeType === 9 ? t : t.ownerDocument;
    e === null || e[Ra] || (e[Ra] = !0, mf("selectionchange", !1, e));
  }
}
function Xm(t, e, n, r) {
  switch (Fm(e)) {
    case 1:
      var o = Sv;
      break;
    case 4:
      o = wv;
      break;
    default:
      o = r0;
  }
  n = o.bind(null, e, n, t), o = void 0, !eh || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (o = !0), r ? o !== void 0 ? t.addEventListener(e, n, { capture: !0, passive: o }) : t.addEventListener(e, n, !0) : o !== void 0 ? t.addEventListener(e, n, { passive: o }) : t.addEventListener(e, n, !1);
}
function yf(t, e, n, r, o) {
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
        if (a = Mi(c), a === null) return;
        if (f = a.tag, f === 5 || f === 6) {
          r = l = a;
          continue e;
        }
        c = c.parentNode;
      }
    }
    r = r.return;
  }
  mm(function() {
    var g = l, y = bh(n), x = [];
    e: {
      var S = Km.get(t);
      if (S !== void 0) {
        var C = s0, v = t;
        switch (t) {
          case "keypress":
            if (Xa(n) === 0) break e;
          case "keydown":
          case "keyup":
            C = Iv;
            break;
          case "focusin":
            v = "focus", C = cf;
            break;
          case "focusout":
            v = "blur", C = cf;
            break;
          case "beforeblur":
          case "afterblur":
            C = cf;
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
            C = ig;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            C = kv;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            C = Gv;
            break;
          case Vm:
          case Hm:
          case jm:
            C = Tv;
            break;
          case Wm:
            C = Vv;
            break;
          case "scroll":
            C = Cv;
            break;
          case "wheel":
            C = jv;
            break;
          case "copy":
          case "cut":
          case "paste":
            C = Rv;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            C = og;
        }
        var P = (e & 4) !== 0, R = !P && t === "scroll", k = P ? S !== null ? S + "Capture" : null : S;
        P = [];
        for (var w = g, p; w !== null; ) {
          p = w;
          var _ = p.stateNode;
          if (p.tag === 5 && _ !== null && (p = _, k !== null && (_ = el(w, k), _ != null && P.push(ll(w, _, p)))), R) break;
          w = w.return;
        }
        0 < P.length && (S = new C(S, v, null, n, y), x.push({ event: S, listeners: P }));
      }
    }
    if (!(e & 7)) {
      e: {
        if (S = t === "mouseover" || t === "pointerover", C = t === "mouseout" || t === "pointerout", S && n !== Zf && (v = n.relatedTarget || n.fromElement) && (Mi(v) || v[wr])) break e;
        if ((C || S) && (S = y.window === y ? y : (S = y.ownerDocument) ? S.defaultView || S.parentWindow : window, C ? (v = n.relatedTarget || n.toElement, C = g, v = v ? Mi(v) : null, v !== null && (R = Hi(v), v !== R || v.tag !== 5 && v.tag !== 6) && (v = null)) : (C = null, v = g), C !== v)) {
          if (P = ig, _ = "onMouseLeave", k = "onMouseEnter", w = "mouse", (t === "pointerout" || t === "pointerover") && (P = og, _ = "onPointerLeave", k = "onPointerEnter", w = "pointer"), R = C == null ? S : xs(C), p = v == null ? S : xs(v), S = new P(_, w + "leave", C, n, y), S.target = R, S.relatedTarget = p, _ = null, Mi(y) === g && (P = new P(k, w + "enter", v, n, y), P.target = p, P.relatedTarget = R, _ = P), R = _, C && v) t: {
            for (P = C, k = v, w = 0, p = P; p; p = fs(p)) w++;
            for (p = 0, _ = k; _; _ = fs(_)) p++;
            for (; 0 < w - p; ) P = fs(P), w--;
            for (; 0 < p - w; ) k = fs(k), p--;
            for (; w--; ) {
              if (P === k || k !== null && P === k.alternate) break t;
              P = fs(P), k = fs(k);
            }
            P = null;
          }
          else P = null;
          C !== null && yg(x, S, C, P, !1), v !== null && R !== null && yg(x, R, v, P, !0);
        }
      }
      e: {
        if (S = g ? xs(g) : window, C = S.nodeName && S.nodeName.toLowerCase(), C === "select" || C === "input" && S.type === "file") var N = qv;
        else if (ug(S)) if (Im) N = e6;
        else {
          N = Zv;
          var F = Jv;
        }
        else (C = S.nodeName) && C.toLowerCase() === "input" && (S.type === "checkbox" || S.type === "radio") && (N = bv);
        if (N && (N = N(t, g))) {
          Dm(x, N, n, y);
          break e;
        }
        F && F(t, S, g), t === "focusout" && (F = S._wrapperState) && F.controlled && S.type === "number" && Xf(S, "number", S.value);
      }
      switch (F = g ? xs(g) : window, t) {
        case "focusin":
          (ug(F) || F.contentEditable === "true") && (ws = F, sh = g, Yo = null);
          break;
        case "focusout":
          Yo = sh = ws = null;
          break;
        case "mousedown":
          oh = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          oh = !1, pg(x, n, y);
          break;
        case "selectionchange":
          if (r6) break;
        case "keydown":
        case "keyup":
          pg(x, n, y);
      }
      var L;
      if (l0) e: {
        switch (t) {
          case "compositionstart":
            var E = "onCompositionStart";
            break e;
          case "compositionend":
            E = "onCompositionEnd";
            break e;
          case "compositionupdate":
            E = "onCompositionUpdate";
            break e;
        }
        E = void 0;
      }
      else Ss ? Am(t, n) && (E = "onCompositionEnd") : t === "keydown" && n.keyCode === 229 && (E = "onCompositionStart");
      E && (Lm && n.locale !== "ko" && (Ss || E !== "onCompositionStart" ? E === "onCompositionEnd" && Ss && (L = Mm()) : (Xr = y, i0 = "value" in Xr ? Xr.value : Xr.textContent, Ss = !0)), F = cu(g, E), 0 < F.length && (E = new sg(E, t, null, n, y), x.push({ event: E, listeners: F }), L ? E.data = L : (L = Om(n), L !== null && (E.data = L)))), (L = Kv ? Yv(t, n) : Xv(t, n)) && (g = cu(g, "onBeforeInput"), 0 < g.length && (y = new sg("onBeforeInput", "beforeinput", null, n, y), x.push({ event: y, listeners: g }), y.data = L));
    }
    Ym(x, e);
  });
}
function ll(t, e, n) {
  return { instance: t, listener: e, currentTarget: n };
}
function cu(t, e) {
  for (var n = e + "Capture", r = []; t !== null; ) {
    var o = t, l = o.stateNode;
    o.tag === 5 && l !== null && (o = l, l = el(t, n), l != null && r.unshift(ll(t, l, o)), l = el(t, e), l != null && r.push(ll(t, l, o))), t = t.return;
  }
  return r;
}
function fs(t) {
  if (t === null) return null;
  do
    t = t.return;
  while (t && t.tag !== 5);
  return t || null;
}
function yg(t, e, n, r, o) {
  for (var l = e._reactName, a = []; n !== null && n !== r; ) {
    var c = n, f = c.alternate, g = c.stateNode;
    if (f !== null && f === r) break;
    c.tag === 5 && g !== null && (c = g, o ? (f = el(n, l), f != null && a.unshift(ll(n, f, c))) : o || (f = el(n, l), f != null && a.push(ll(n, f, c)))), n = n.return;
  }
  a.length !== 0 && t.push({ event: e, listeners: a });
}
var l6 = /\r\n?/g, a6 = /\u0000|\uFFFD/g;
function vg(t) {
  return (typeof t == "string" ? t : "" + t).replace(l6, `
`).replace(a6, "");
}
function Fa(t, e, n) {
  if (e = vg(e), vg(t) !== e && n) throw Error(W(425));
}
function du() {
}
var lh = null, ah = null;
function uh(t, e) {
  return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
}
var ch = typeof setTimeout == "function" ? setTimeout : void 0, u6 = typeof clearTimeout == "function" ? clearTimeout : void 0, _g = typeof Promise == "function" ? Promise : void 0, c6 = typeof queueMicrotask == "function" ? queueMicrotask : typeof _g < "u" ? function(t) {
  return _g.resolve(null).then(t).catch(d6);
} : ch;
function d6(t) {
  setTimeout(function() {
    throw t;
  });
}
function vf(t, e) {
  var n = e, r = 0;
  do {
    var o = n.nextSibling;
    if (t.removeChild(n), o && o.nodeType === 8) if (n = o.data, n === "/$") {
      if (r === 0) {
        t.removeChild(o), rl(e);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
  } while (n);
  rl(e);
}
function Zr(t) {
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
function Sg(t) {
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
var Qs = Math.random().toString(36).slice(2), bn = "__reactFiber$" + Qs, al = "__reactProps$" + Qs, wr = "__reactContainer$" + Qs, dh = "__reactEvents$" + Qs, f6 = "__reactListeners$" + Qs, h6 = "__reactHandles$" + Qs;
function Mi(t) {
  var e = t[bn];
  if (e) return e;
  for (var n = t.parentNode; n; ) {
    if (e = n[wr] || n[bn]) {
      if (n = e.alternate, e.child !== null || n !== null && n.child !== null) for (t = Sg(t); t !== null; ) {
        if (n = t[bn]) return n;
        t = Sg(t);
      }
      return e;
    }
    t = n, n = t.parentNode;
  }
  return null;
}
function wl(t) {
  return t = t[bn] || t[wr], !t || t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3 ? null : t;
}
function xs(t) {
  if (t.tag === 5 || t.tag === 6) return t.stateNode;
  throw Error(W(33));
}
function Uu(t) {
  return t[al] || null;
}
var fh = [], ks = -1;
function li(t) {
  return { current: t };
}
function je(t) {
  0 > ks || (t.current = fh[ks], fh[ks] = null, ks--);
}
function Ue(t, e) {
  ks++, fh[ks] = t.current, t.current = e;
}
var ii = {}, It = li(ii), bt = li(!1), Ii = ii;
function zs(t, e) {
  var n = t.type.contextTypes;
  if (!n) return ii;
  var r = t.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === e) return r.__reactInternalMemoizedMaskedChildContext;
  var o = {}, l;
  for (l in n) o[l] = e[l];
  return r && (t = t.stateNode, t.__reactInternalMemoizedUnmaskedChildContext = e, t.__reactInternalMemoizedMaskedChildContext = o), o;
}
function en(t) {
  return t = t.childContextTypes, t != null;
}
function fu() {
  je(bt), je(It);
}
function wg(t, e, n) {
  if (It.current !== ii) throw Error(W(168));
  Ue(It, e), Ue(bt, n);
}
function Qm(t, e, n) {
  var r = t.stateNode;
  if (e = e.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in e)) throw Error(W(108, Jy(t) || "Unknown", o));
  return Ze({}, n, r);
}
function hu(t) {
  return t = (t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext || ii, Ii = It.current, Ue(It, t), Ue(bt, bt.current), !0;
}
function Cg(t, e, n) {
  var r = t.stateNode;
  if (!r) throw Error(W(169));
  n ? (t = Qm(t, e, Ii), r.__reactInternalMemoizedMergedChildContext = t, je(bt), je(It), Ue(It, t)) : je(bt), Ue(bt, n);
}
var gr = null, Gu = !1, _f = !1;
function $m(t) {
  gr === null ? gr = [t] : gr.push(t);
}
function p6(t) {
  Gu = !0, $m(t);
}
function ai() {
  if (!_f && gr !== null) {
    _f = !0;
    var t = 0, e = Le;
    try {
      var n = gr;
      for (Le = 1; t < n.length; t++) {
        var r = n[t];
        do
          r = r(!0);
        while (r !== null);
      }
      gr = null, Gu = !1;
    } catch (o) {
      throw gr !== null && (gr = gr.slice(t + 1)), Sm(e0, ai), o;
    } finally {
      Le = e, _f = !1;
    }
  }
  return null;
}
var Es = [], Ps = 0, pu = null, gu = 0, wn = [], Cn = 0, zi = null, mr = 1, yr = "";
function Ni(t, e) {
  Es[Ps++] = gu, Es[Ps++] = pu, pu = t, gu = e;
}
function qm(t, e, n) {
  wn[Cn++] = mr, wn[Cn++] = yr, wn[Cn++] = zi, zi = t;
  var r = mr;
  t = yr;
  var o = 32 - Un(r) - 1;
  r &= ~(1 << o), n += 1;
  var l = 32 - Un(e) + o;
  if (30 < l) {
    var a = o - o % 5;
    l = (r & (1 << a) - 1).toString(32), r >>= a, o -= a, mr = 1 << 32 - Un(e) + o | n << o | r, yr = l + t;
  } else mr = 1 << l | n << o | r, yr = t;
}
function u0(t) {
  t.return !== null && (Ni(t, 1), qm(t, 1, 0));
}
function c0(t) {
  for (; t === pu; ) pu = Es[--Ps], Es[Ps] = null, gu = Es[--Ps], Es[Ps] = null;
  for (; t === zi; ) zi = wn[--Cn], wn[Cn] = null, yr = wn[--Cn], wn[Cn] = null, mr = wn[--Cn], wn[Cn] = null;
}
var ln = null, on = null, Ye = !1, zn = null;
function Jm(t, e) {
  var n = xn(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = e, n.return = t, e = t.deletions, e === null ? (t.deletions = [n], t.flags |= 16) : e.push(n);
}
function xg(t, e) {
  switch (t.tag) {
    case 5:
      var n = t.type;
      return e = e.nodeType !== 1 || n.toLowerCase() !== e.nodeName.toLowerCase() ? null : e, e !== null ? (t.stateNode = e, ln = t, on = Zr(e.firstChild), !0) : !1;
    case 6:
      return e = t.pendingProps === "" || e.nodeType !== 3 ? null : e, e !== null ? (t.stateNode = e, ln = t, on = null, !0) : !1;
    case 13:
      return e = e.nodeType !== 8 ? null : e, e !== null ? (n = zi !== null ? { id: mr, overflow: yr } : null, t.memoizedState = { dehydrated: e, treeContext: n, retryLane: 1073741824 }, n = xn(18, null, null, 0), n.stateNode = e, n.return = t, t.child = n, ln = t, on = null, !0) : !1;
    default:
      return !1;
  }
}
function hh(t) {
  return (t.mode & 1) !== 0 && (t.flags & 128) === 0;
}
function ph(t) {
  if (Ye) {
    var e = on;
    if (e) {
      var n = e;
      if (!xg(t, e)) {
        if (hh(t)) throw Error(W(418));
        e = Zr(n.nextSibling);
        var r = ln;
        e && xg(t, e) ? Jm(r, n) : (t.flags = t.flags & -4097 | 2, Ye = !1, ln = t);
      }
    } else {
      if (hh(t)) throw Error(W(418));
      t.flags = t.flags & -4097 | 2, Ye = !1, ln = t;
    }
  }
}
function kg(t) {
  for (t = t.return; t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13; ) t = t.return;
  ln = t;
}
function Ma(t) {
  if (t !== ln) return !1;
  if (!Ye) return kg(t), Ye = !0, !1;
  var e;
  if ((e = t.tag !== 3) && !(e = t.tag !== 5) && (e = t.type, e = e !== "head" && e !== "body" && !uh(t.type, t.memoizedProps)), e && (e = on)) {
    if (hh(t)) throw Zm(), Error(W(418));
    for (; e; ) Jm(t, e), e = Zr(e.nextSibling);
  }
  if (kg(t), t.tag === 13) {
    if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(W(317));
    e: {
      for (t = t.nextSibling, e = 0; t; ) {
        if (t.nodeType === 8) {
          var n = t.data;
          if (n === "/$") {
            if (e === 0) {
              on = Zr(t.nextSibling);
              break e;
            }
            e--;
          } else n !== "$" && n !== "$!" && n !== "$?" || e++;
        }
        t = t.nextSibling;
      }
      on = null;
    }
  } else on = ln ? Zr(t.stateNode.nextSibling) : null;
  return !0;
}
function Zm() {
  for (var t = on; t; ) t = Zr(t.nextSibling);
}
function Us() {
  on = ln = null, Ye = !1;
}
function d0(t) {
  zn === null ? zn = [t] : zn.push(t);
}
var g6 = kr.ReactCurrentBatchConfig;
function Ro(t, e, n) {
  if (t = n.ref, t !== null && typeof t != "function" && typeof t != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(W(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(W(147, t));
      var o = r, l = "" + t;
      return e !== null && e.ref !== null && typeof e.ref == "function" && e.ref._stringRef === l ? e.ref : (e = function(a) {
        var c = o.refs;
        a === null ? delete c[l] : c[l] = a;
      }, e._stringRef = l, e);
    }
    if (typeof t != "string") throw Error(W(284));
    if (!n._owner) throw Error(W(290, t));
  }
  return t;
}
function La(t, e) {
  throw t = Object.prototype.toString.call(e), Error(W(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t));
}
function Eg(t) {
  var e = t._init;
  return e(t._payload);
}
function bm(t) {
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
    return k = ni(k, w), k.index = 0, k.sibling = null, k;
  }
  function l(k, w, p) {
    return k.index = p, t ? (p = k.alternate, p !== null ? (p = p.index, p < w ? (k.flags |= 2, w) : p) : (k.flags |= 2, w)) : (k.flags |= 1048576, w);
  }
  function a(k) {
    return t && k.alternate === null && (k.flags |= 2), k;
  }
  function c(k, w, p, _) {
    return w === null || w.tag !== 6 ? (w = Pf(p, k.mode, _), w.return = k, w) : (w = o(w, p), w.return = k, w);
  }
  function f(k, w, p, _) {
    var N = p.type;
    return N === _s ? y(k, w, p.props.children, _, p.key) : w !== null && (w.elementType === N || typeof N == "object" && N !== null && N.$$typeof === jr && Eg(N) === w.type) ? (_ = o(w, p.props), _.ref = Ro(k, w, p), _.return = k, _) : (_ = eu(p.type, p.key, p.props, null, k.mode, _), _.ref = Ro(k, w, p), _.return = k, _);
  }
  function g(k, w, p, _) {
    return w === null || w.tag !== 4 || w.stateNode.containerInfo !== p.containerInfo || w.stateNode.implementation !== p.implementation ? (w = Tf(p, k.mode, _), w.return = k, w) : (w = o(w, p.children || []), w.return = k, w);
  }
  function y(k, w, p, _, N) {
    return w === null || w.tag !== 7 ? (w = Di(p, k.mode, _, N), w.return = k, w) : (w = o(w, p), w.return = k, w);
  }
  function x(k, w, p) {
    if (typeof w == "string" && w !== "" || typeof w == "number") return w = Pf("" + w, k.mode, p), w.return = k, w;
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case wa:
          return p = eu(w.type, w.key, w.props, null, k.mode, p), p.ref = Ro(k, null, w), p.return = k, p;
        case vs:
          return w = Tf(w, k.mode, p), w.return = k, w;
        case jr:
          var _ = w._init;
          return x(k, _(w._payload), p);
      }
      if (zo(w) || ko(w)) return w = Di(w, k.mode, p, null), w.return = k, w;
      La(k, w);
    }
    return null;
  }
  function S(k, w, p, _) {
    var N = w !== null ? w.key : null;
    if (typeof p == "string" && p !== "" || typeof p == "number") return N !== null ? null : c(k, w, "" + p, _);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case wa:
          return p.key === N ? f(k, w, p, _) : null;
        case vs:
          return p.key === N ? g(k, w, p, _) : null;
        case jr:
          return N = p._init, S(
            k,
            w,
            N(p._payload),
            _
          );
      }
      if (zo(p) || ko(p)) return N !== null ? null : y(k, w, p, _, null);
      La(k, p);
    }
    return null;
  }
  function C(k, w, p, _, N) {
    if (typeof _ == "string" && _ !== "" || typeof _ == "number") return k = k.get(p) || null, c(w, k, "" + _, N);
    if (typeof _ == "object" && _ !== null) {
      switch (_.$$typeof) {
        case wa:
          return k = k.get(_.key === null ? p : _.key) || null, f(w, k, _, N);
        case vs:
          return k = k.get(_.key === null ? p : _.key) || null, g(w, k, _, N);
        case jr:
          var F = _._init;
          return C(k, w, p, F(_._payload), N);
      }
      if (zo(_) || ko(_)) return k = k.get(p) || null, y(w, k, _, N, null);
      La(w, _);
    }
    return null;
  }
  function v(k, w, p, _) {
    for (var N = null, F = null, L = w, E = w = 0, I = null; L !== null && E < p.length; E++) {
      L.index > E ? (I = L, L = null) : I = L.sibling;
      var M = S(k, L, p[E], _);
      if (M === null) {
        L === null && (L = I);
        break;
      }
      t && L && M.alternate === null && e(k, L), w = l(M, w, E), F === null ? N = M : F.sibling = M, F = M, L = I;
    }
    if (E === p.length) return n(k, L), Ye && Ni(k, E), N;
    if (L === null) {
      for (; E < p.length; E++) L = x(k, p[E], _), L !== null && (w = l(L, w, E), F === null ? N = L : F.sibling = L, F = L);
      return Ye && Ni(k, E), N;
    }
    for (L = r(k, L); E < p.length; E++) I = C(L, k, E, p[E], _), I !== null && (t && I.alternate !== null && L.delete(I.key === null ? E : I.key), w = l(I, w, E), F === null ? N = I : F.sibling = I, F = I);
    return t && L.forEach(function(B) {
      return e(k, B);
    }), Ye && Ni(k, E), N;
  }
  function P(k, w, p, _) {
    var N = ko(p);
    if (typeof N != "function") throw Error(W(150));
    if (p = N.call(p), p == null) throw Error(W(151));
    for (var F = N = null, L = w, E = w = 0, I = null, M = p.next(); L !== null && !M.done; E++, M = p.next()) {
      L.index > E ? (I = L, L = null) : I = L.sibling;
      var B = S(k, L, M.value, _);
      if (B === null) {
        L === null && (L = I);
        break;
      }
      t && L && B.alternate === null && e(k, L), w = l(B, w, E), F === null ? N = B : F.sibling = B, F = B, L = I;
    }
    if (M.done) return n(
      k,
      L
    ), Ye && Ni(k, E), N;
    if (L === null) {
      for (; !M.done; E++, M = p.next()) M = x(k, M.value, _), M !== null && (w = l(M, w, E), F === null ? N = M : F.sibling = M, F = M);
      return Ye && Ni(k, E), N;
    }
    for (L = r(k, L); !M.done; E++, M = p.next()) M = C(L, k, E, M.value, _), M !== null && (t && M.alternate !== null && L.delete(M.key === null ? E : M.key), w = l(M, w, E), F === null ? N = M : F.sibling = M, F = M);
    return t && L.forEach(function(H) {
      return e(k, H);
    }), Ye && Ni(k, E), N;
  }
  function R(k, w, p, _) {
    if (typeof p == "object" && p !== null && p.type === _s && p.key === null && (p = p.props.children), typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case wa:
          e: {
            for (var N = p.key, F = w; F !== null; ) {
              if (F.key === N) {
                if (N = p.type, N === _s) {
                  if (F.tag === 7) {
                    n(k, F.sibling), w = o(F, p.props.children), w.return = k, k = w;
                    break e;
                  }
                } else if (F.elementType === N || typeof N == "object" && N !== null && N.$$typeof === jr && Eg(N) === F.type) {
                  n(k, F.sibling), w = o(F, p.props), w.ref = Ro(k, F, p), w.return = k, k = w;
                  break e;
                }
                n(k, F);
                break;
              } else e(k, F);
              F = F.sibling;
            }
            p.type === _s ? (w = Di(p.props.children, k.mode, _, p.key), w.return = k, k = w) : (_ = eu(p.type, p.key, p.props, null, k.mode, _), _.ref = Ro(k, w, p), _.return = k, k = _);
          }
          return a(k);
        case vs:
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
            w = Tf(p, k.mode, _), w.return = k, k = w;
          }
          return a(k);
        case jr:
          return F = p._init, R(k, w, F(p._payload), _);
      }
      if (zo(p)) return v(k, w, p, _);
      if (ko(p)) return P(k, w, p, _);
      La(k, p);
    }
    return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p, w !== null && w.tag === 6 ? (n(k, w.sibling), w = o(w, p), w.return = k, k = w) : (n(k, w), w = Pf(p, k.mode, _), w.return = k, k = w), a(k)) : n(k, w);
  }
  return R;
}
var Gs = bm(!0), e3 = bm(!1), mu = li(null), yu = null, Ts = null, f0 = null;
function h0() {
  f0 = Ts = yu = null;
}
function p0(t) {
  var e = mu.current;
  je(mu), t._currentValue = e;
}
function gh(t, e, n) {
  for (; t !== null; ) {
    var r = t.alternate;
    if ((t.childLanes & e) !== e ? (t.childLanes |= e, r !== null && (r.childLanes |= e)) : r !== null && (r.childLanes & e) !== e && (r.childLanes |= e), t === n) break;
    t = t.return;
  }
}
function Os(t, e) {
  yu = t, f0 = Ts = null, t = t.dependencies, t !== null && t.firstContext !== null && (t.lanes & e && (Zt = !0), t.firstContext = null);
}
function En(t) {
  var e = t._currentValue;
  if (f0 !== t) if (t = { context: t, memoizedValue: e, next: null }, Ts === null) {
    if (yu === null) throw Error(W(308));
    Ts = t, yu.dependencies = { lanes: 0, firstContext: t };
  } else Ts = Ts.next = t;
  return e;
}
var Li = null;
function g0(t) {
  Li === null ? Li = [t] : Li.push(t);
}
function t3(t, e, n, r) {
  var o = e.interleaved;
  return o === null ? (n.next = n, g0(e)) : (n.next = o.next, o.next = n), e.interleaved = n, Cr(t, r);
}
function Cr(t, e) {
  t.lanes |= e;
  var n = t.alternate;
  for (n !== null && (n.lanes |= e), n = t, t = t.return; t !== null; ) t.childLanes |= e, n = t.alternate, n !== null && (n.childLanes |= e), n = t, t = t.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Wr = !1;
function m0(t) {
  t.updateQueue = { baseState: t.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function n3(t, e) {
  t = t.updateQueue, e.updateQueue === t && (e.updateQueue = { baseState: t.baseState, firstBaseUpdate: t.firstBaseUpdate, lastBaseUpdate: t.lastBaseUpdate, shared: t.shared, effects: t.effects });
}
function vr(t, e) {
  return { eventTime: t, lane: e, tag: 0, payload: null, callback: null, next: null };
}
function br(t, e, n) {
  var r = t.updateQueue;
  if (r === null) return null;
  if (r = r.shared, Pe & 2) {
    var o = r.pending;
    return o === null ? e.next = e : (e.next = o.next, o.next = e), r.pending = e, Cr(t, n);
  }
  return o = r.interleaved, o === null ? (e.next = e, g0(r)) : (e.next = o.next, o.next = e), r.interleaved = e, Cr(t, n);
}
function Qa(t, e, n) {
  if (e = e.updateQueue, e !== null && (e = e.shared, (n & 4194240) !== 0)) {
    var r = e.lanes;
    r &= t.pendingLanes, n |= r, e.lanes = n, t0(t, n);
  }
}
function Pg(t, e) {
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
function vu(t, e, n, r) {
  var o = t.updateQueue;
  Wr = !1;
  var l = o.firstBaseUpdate, a = o.lastBaseUpdate, c = o.shared.pending;
  if (c !== null) {
    o.shared.pending = null;
    var f = c, g = f.next;
    f.next = null, a === null ? l = g : a.next = g, a = f;
    var y = t.alternate;
    y !== null && (y = y.updateQueue, c = y.lastBaseUpdate, c !== a && (c === null ? y.firstBaseUpdate = g : c.next = g, y.lastBaseUpdate = f));
  }
  if (l !== null) {
    var x = o.baseState;
    a = 0, y = g = f = null, c = l;
    do {
      var S = c.lane, C = c.eventTime;
      if ((r & S) === S) {
        y !== null && (y = y.next = {
          eventTime: C,
          lane: 0,
          tag: c.tag,
          payload: c.payload,
          callback: c.callback,
          next: null
        });
        e: {
          var v = t, P = c;
          switch (S = e, C = n, P.tag) {
            case 1:
              if (v = P.payload, typeof v == "function") {
                x = v.call(C, x, S);
                break e;
              }
              x = v;
              break e;
            case 3:
              v.flags = v.flags & -65537 | 128;
            case 0:
              if (v = P.payload, S = typeof v == "function" ? v.call(C, x, S) : v, S == null) break e;
              x = Ze({}, x, S);
              break e;
            case 2:
              Wr = !0;
          }
        }
        c.callback !== null && c.lane !== 0 && (t.flags |= 64, S = o.effects, S === null ? o.effects = [c] : S.push(c));
      } else C = { eventTime: C, lane: S, tag: c.tag, payload: c.payload, callback: c.callback, next: null }, y === null ? (g = y = C, f = x) : y = y.next = C, a |= S;
      if (c = c.next, c === null) {
        if (c = o.shared.pending, c === null) break;
        S = c, c = S.next, S.next = null, o.lastBaseUpdate = S, o.shared.pending = null;
      }
    } while (!0);
    if (y === null && (f = x), o.baseState = f, o.firstBaseUpdate = g, o.lastBaseUpdate = y, e = o.shared.interleaved, e !== null) {
      o = e;
      do
        a |= o.lane, o = o.next;
      while (o !== e);
    } else l === null && (o.shared.lanes = 0);
    Gi |= a, t.lanes = a, t.memoizedState = x;
  }
}
function Tg(t, e, n) {
  if (t = e.effects, e.effects = null, t !== null) for (e = 0; e < t.length; e++) {
    var r = t[e], o = r.callback;
    if (o !== null) {
      if (r.callback = null, r = n, typeof o != "function") throw Error(W(191, o));
      o.call(r);
    }
  }
}
var Cl = {}, nr = li(Cl), ul = li(Cl), cl = li(Cl);
function Ai(t) {
  if (t === Cl) throw Error(W(174));
  return t;
}
function y0(t, e) {
  switch (Ue(cl, e), Ue(ul, t), Ue(nr, Cl), t = e.nodeType, t) {
    case 9:
    case 11:
      e = (e = e.documentElement) ? e.namespaceURI : $f(null, "");
      break;
    default:
      t = t === 8 ? e.parentNode : e, e = t.namespaceURI || null, t = t.tagName, e = $f(e, t);
  }
  je(nr), Ue(nr, e);
}
function Bs() {
  je(nr), je(ul), je(cl);
}
function r3(t) {
  Ai(cl.current);
  var e = Ai(nr.current), n = $f(e, t.type);
  e !== n && (Ue(ul, t), Ue(nr, n));
}
function v0(t) {
  ul.current === t && (je(nr), je(ul));
}
var qe = li(0);
function _u(t) {
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
var Sf = [];
function _0() {
  for (var t = 0; t < Sf.length; t++) Sf[t]._workInProgressVersionPrimary = null;
  Sf.length = 0;
}
var $a = kr.ReactCurrentDispatcher, wf = kr.ReactCurrentBatchConfig, Ui = 0, Je = null, ht = null, wt = null, Su = !1, Xo = !1, dl = 0, m6 = 0;
function At() {
  throw Error(W(321));
}
function S0(t, e) {
  if (e === null) return !1;
  for (var n = 0; n < e.length && n < t.length; n++) if (!Vn(t[n], e[n])) return !1;
  return !0;
}
function w0(t, e, n, r, o, l) {
  if (Ui = l, Je = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, $a.current = t === null || t.memoizedState === null ? S6 : w6, t = n(r, o), Xo) {
    l = 0;
    do {
      if (Xo = !1, dl = 0, 25 <= l) throw Error(W(301));
      l += 1, wt = ht = null, e.updateQueue = null, $a.current = C6, t = n(r, o);
    } while (Xo);
  }
  if ($a.current = wu, e = ht !== null && ht.next !== null, Ui = 0, wt = ht = Je = null, Su = !1, e) throw Error(W(300));
  return t;
}
function C0() {
  var t = dl !== 0;
  return dl = 0, t;
}
function Zn() {
  var t = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return wt === null ? Je.memoizedState = wt = t : wt = wt.next = t, wt;
}
function Pn() {
  if (ht === null) {
    var t = Je.alternate;
    t = t !== null ? t.memoizedState : null;
  } else t = ht.next;
  var e = wt === null ? Je.memoizedState : wt.next;
  if (e !== null) wt = e, ht = t;
  else {
    if (t === null) throw Error(W(310));
    ht = t, t = { memoizedState: ht.memoizedState, baseState: ht.baseState, baseQueue: ht.baseQueue, queue: ht.queue, next: null }, wt === null ? Je.memoizedState = wt = t : wt = wt.next = t;
  }
  return wt;
}
function fl(t, e) {
  return typeof e == "function" ? e(t) : e;
}
function Cf(t) {
  var e = Pn(), n = e.queue;
  if (n === null) throw Error(W(311));
  n.lastRenderedReducer = t;
  var r = ht, o = r.baseQueue, l = n.pending;
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
      if ((Ui & y) === y) f !== null && (f = f.next = { lane: 0, action: g.action, hasEagerState: g.hasEagerState, eagerState: g.eagerState, next: null }), r = g.hasEagerState ? g.eagerState : t(r, g.action);
      else {
        var x = {
          lane: y,
          action: g.action,
          hasEagerState: g.hasEagerState,
          eagerState: g.eagerState,
          next: null
        };
        f === null ? (c = f = x, a = r) : f = f.next = x, Je.lanes |= y, Gi |= y;
      }
      g = g.next;
    } while (g !== null && g !== l);
    f === null ? a = r : f.next = c, Vn(r, e.memoizedState) || (Zt = !0), e.memoizedState = r, e.baseState = a, e.baseQueue = f, n.lastRenderedState = r;
  }
  if (t = n.interleaved, t !== null) {
    o = t;
    do
      l = o.lane, Je.lanes |= l, Gi |= l, o = o.next;
    while (o !== t);
  } else o === null && (n.lanes = 0);
  return [e.memoizedState, n.dispatch];
}
function xf(t) {
  var e = Pn(), n = e.queue;
  if (n === null) throw Error(W(311));
  n.lastRenderedReducer = t;
  var r = n.dispatch, o = n.pending, l = e.memoizedState;
  if (o !== null) {
    n.pending = null;
    var a = o = o.next;
    do
      l = t(l, a.action), a = a.next;
    while (a !== o);
    Vn(l, e.memoizedState) || (Zt = !0), e.memoizedState = l, e.baseQueue === null && (e.baseState = l), n.lastRenderedState = l;
  }
  return [l, r];
}
function i3() {
}
function s3(t, e) {
  var n = Je, r = Pn(), o = e(), l = !Vn(r.memoizedState, o);
  if (l && (r.memoizedState = o, Zt = !0), r = r.queue, x0(a3.bind(null, n, r, t), [t]), r.getSnapshot !== e || l || wt !== null && wt.memoizedState.tag & 1) {
    if (n.flags |= 2048, hl(9, l3.bind(null, n, r, o, e), void 0, null), Ct === null) throw Error(W(349));
    Ui & 30 || o3(n, e, o);
  }
  return o;
}
function o3(t, e, n) {
  t.flags |= 16384, t = { getSnapshot: e, value: n }, e = Je.updateQueue, e === null ? (e = { lastEffect: null, stores: null }, Je.updateQueue = e, e.stores = [t]) : (n = e.stores, n === null ? e.stores = [t] : n.push(t));
}
function l3(t, e, n, r) {
  e.value = n, e.getSnapshot = r, u3(e) && c3(t);
}
function a3(t, e, n) {
  return n(function() {
    u3(e) && c3(t);
  });
}
function u3(t) {
  var e = t.getSnapshot;
  t = t.value;
  try {
    var n = e();
    return !Vn(t, n);
  } catch {
    return !0;
  }
}
function c3(t) {
  var e = Cr(t, 1);
  e !== null && Gn(e, t, 1, -1);
}
function Ng(t) {
  var e = Zn();
  return typeof t == "function" && (t = t()), e.memoizedState = e.baseState = t, t = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: fl, lastRenderedState: t }, e.queue = t, t = t.dispatch = _6.bind(null, Je, t), [e.memoizedState, t];
}
function hl(t, e, n, r) {
  return t = { tag: t, create: e, destroy: n, deps: r, next: null }, e = Je.updateQueue, e === null ? (e = { lastEffect: null, stores: null }, Je.updateQueue = e, e.lastEffect = t.next = t) : (n = e.lastEffect, n === null ? e.lastEffect = t.next = t : (r = n.next, n.next = t, t.next = r, e.lastEffect = t)), t;
}
function d3() {
  return Pn().memoizedState;
}
function qa(t, e, n, r) {
  var o = Zn();
  Je.flags |= t, o.memoizedState = hl(1 | e, n, void 0, r === void 0 ? null : r);
}
function Bu(t, e, n, r) {
  var o = Pn();
  r = r === void 0 ? null : r;
  var l = void 0;
  if (ht !== null) {
    var a = ht.memoizedState;
    if (l = a.destroy, r !== null && S0(r, a.deps)) {
      o.memoizedState = hl(e, n, l, r);
      return;
    }
  }
  Je.flags |= t, o.memoizedState = hl(1 | e, n, l, r);
}
function Rg(t, e) {
  return qa(8390656, 8, t, e);
}
function x0(t, e) {
  return Bu(2048, 8, t, e);
}
function f3(t, e) {
  return Bu(4, 2, t, e);
}
function h3(t, e) {
  return Bu(4, 4, t, e);
}
function p3(t, e) {
  if (typeof e == "function") return t = t(), e(t), function() {
    e(null);
  };
  if (e != null) return t = t(), e.current = t, function() {
    e.current = null;
  };
}
function g3(t, e, n) {
  return n = n != null ? n.concat([t]) : null, Bu(4, 4, p3.bind(null, e, t), n);
}
function k0() {
}
function m3(t, e) {
  var n = Pn();
  e = e === void 0 ? null : e;
  var r = n.memoizedState;
  return r !== null && e !== null && S0(e, r[1]) ? r[0] : (n.memoizedState = [t, e], t);
}
function y3(t, e) {
  var n = Pn();
  e = e === void 0 ? null : e;
  var r = n.memoizedState;
  return r !== null && e !== null && S0(e, r[1]) ? r[0] : (t = t(), n.memoizedState = [t, e], t);
}
function v3(t, e, n) {
  return Ui & 21 ? (Vn(n, e) || (n = xm(), Je.lanes |= n, Gi |= n, t.baseState = !0), e) : (t.baseState && (t.baseState = !1, Zt = !0), t.memoizedState = n);
}
function y6(t, e) {
  var n = Le;
  Le = n !== 0 && 4 > n ? n : 4, t(!0);
  var r = wf.transition;
  wf.transition = {};
  try {
    t(!1), e();
  } finally {
    Le = n, wf.transition = r;
  }
}
function _3() {
  return Pn().memoizedState;
}
function v6(t, e, n) {
  var r = ti(t);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, S3(t)) w3(e, n);
  else if (n = t3(t, e, n, r), n !== null) {
    var o = Vt();
    Gn(n, t, r, o), C3(n, e, r);
  }
}
function _6(t, e, n) {
  var r = ti(t), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (S3(t)) w3(e, o);
  else {
    var l = t.alternate;
    if (t.lanes === 0 && (l === null || l.lanes === 0) && (l = e.lastRenderedReducer, l !== null)) try {
      var a = e.lastRenderedState, c = l(a, n);
      if (o.hasEagerState = !0, o.eagerState = c, Vn(c, a)) {
        var f = e.interleaved;
        f === null ? (o.next = o, g0(e)) : (o.next = f.next, f.next = o), e.interleaved = o;
        return;
      }
    } catch {
    } finally {
    }
    n = t3(t, e, o, r), n !== null && (o = Vt(), Gn(n, t, r, o), C3(n, e, r));
  }
}
function S3(t) {
  var e = t.alternate;
  return t === Je || e !== null && e === Je;
}
function w3(t, e) {
  Xo = Su = !0;
  var n = t.pending;
  n === null ? e.next = e : (e.next = n.next, n.next = e), t.pending = e;
}
function C3(t, e, n) {
  if (n & 4194240) {
    var r = e.lanes;
    r &= t.pendingLanes, n |= r, e.lanes = n, t0(t, n);
  }
}
var wu = { readContext: En, useCallback: At, useContext: At, useEffect: At, useImperativeHandle: At, useInsertionEffect: At, useLayoutEffect: At, useMemo: At, useReducer: At, useRef: At, useState: At, useDebugValue: At, useDeferredValue: At, useTransition: At, useMutableSource: At, useSyncExternalStore: At, useId: At, unstable_isNewReconciler: !1 }, S6 = { readContext: En, useCallback: function(t, e) {
  return Zn().memoizedState = [t, e === void 0 ? null : e], t;
}, useContext: En, useEffect: Rg, useImperativeHandle: function(t, e, n) {
  return n = n != null ? n.concat([t]) : null, qa(
    4194308,
    4,
    p3.bind(null, e, t),
    n
  );
}, useLayoutEffect: function(t, e) {
  return qa(4194308, 4, t, e);
}, useInsertionEffect: function(t, e) {
  return qa(4, 2, t, e);
}, useMemo: function(t, e) {
  var n = Zn();
  return e = e === void 0 ? null : e, t = t(), n.memoizedState = [t, e], t;
}, useReducer: function(t, e, n) {
  var r = Zn();
  return e = n !== void 0 ? n(e) : e, r.memoizedState = r.baseState = e, t = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: t, lastRenderedState: e }, r.queue = t, t = t.dispatch = v6.bind(null, Je, t), [r.memoizedState, t];
}, useRef: function(t) {
  var e = Zn();
  return t = { current: t }, e.memoizedState = t;
}, useState: Ng, useDebugValue: k0, useDeferredValue: function(t) {
  return Zn().memoizedState = t;
}, useTransition: function() {
  var t = Ng(!1), e = t[0];
  return t = y6.bind(null, t[1]), Zn().memoizedState = t, [e, t];
}, useMutableSource: function() {
}, useSyncExternalStore: function(t, e, n) {
  var r = Je, o = Zn();
  if (Ye) {
    if (n === void 0) throw Error(W(407));
    n = n();
  } else {
    if (n = e(), Ct === null) throw Error(W(349));
    Ui & 30 || o3(r, e, n);
  }
  o.memoizedState = n;
  var l = { value: n, getSnapshot: e };
  return o.queue = l, Rg(a3.bind(
    null,
    r,
    l,
    t
  ), [t]), r.flags |= 2048, hl(9, l3.bind(null, r, l, n, e), void 0, null), n;
}, useId: function() {
  var t = Zn(), e = Ct.identifierPrefix;
  if (Ye) {
    var n = yr, r = mr;
    n = (r & ~(1 << 32 - Un(r) - 1)).toString(32) + n, e = ":" + e + "R" + n, n = dl++, 0 < n && (e += "H" + n.toString(32)), e += ":";
  } else n = m6++, e = ":" + e + "r" + n.toString(32) + ":";
  return t.memoizedState = e;
}, unstable_isNewReconciler: !1 }, w6 = {
  readContext: En,
  useCallback: m3,
  useContext: En,
  useEffect: x0,
  useImperativeHandle: g3,
  useInsertionEffect: f3,
  useLayoutEffect: h3,
  useMemo: y3,
  useReducer: Cf,
  useRef: d3,
  useState: function() {
    return Cf(fl);
  },
  useDebugValue: k0,
  useDeferredValue: function(t) {
    var e = Pn();
    return v3(e, ht.memoizedState, t);
  },
  useTransition: function() {
    var t = Cf(fl)[0], e = Pn().memoizedState;
    return [t, e];
  },
  useMutableSource: i3,
  useSyncExternalStore: s3,
  useId: _3,
  unstable_isNewReconciler: !1
}, C6 = { readContext: En, useCallback: m3, useContext: En, useEffect: x0, useImperativeHandle: g3, useInsertionEffect: f3, useLayoutEffect: h3, useMemo: y3, useReducer: xf, useRef: d3, useState: function() {
  return xf(fl);
}, useDebugValue: k0, useDeferredValue: function(t) {
  var e = Pn();
  return ht === null ? e.memoizedState = t : v3(e, ht.memoizedState, t);
}, useTransition: function() {
  var t = xf(fl)[0], e = Pn().memoizedState;
  return [t, e];
}, useMutableSource: i3, useSyncExternalStore: s3, useId: _3, unstable_isNewReconciler: !1 };
function Dn(t, e) {
  if (t && t.defaultProps) {
    e = Ze({}, e), t = t.defaultProps;
    for (var n in t) e[n] === void 0 && (e[n] = t[n]);
    return e;
  }
  return e;
}
function mh(t, e, n, r) {
  e = t.memoizedState, n = n(r, e), n = n == null ? e : Ze({}, e, n), t.memoizedState = n, t.lanes === 0 && (t.updateQueue.baseState = n);
}
var Vu = { isMounted: function(t) {
  return (t = t._reactInternals) ? Hi(t) === t : !1;
}, enqueueSetState: function(t, e, n) {
  t = t._reactInternals;
  var r = Vt(), o = ti(t), l = vr(r, o);
  l.payload = e, n != null && (l.callback = n), e = br(t, l, o), e !== null && (Gn(e, t, o, r), Qa(e, t, o));
}, enqueueReplaceState: function(t, e, n) {
  t = t._reactInternals;
  var r = Vt(), o = ti(t), l = vr(r, o);
  l.tag = 1, l.payload = e, n != null && (l.callback = n), e = br(t, l, o), e !== null && (Gn(e, t, o, r), Qa(e, t, o));
}, enqueueForceUpdate: function(t, e) {
  t = t._reactInternals;
  var n = Vt(), r = ti(t), o = vr(n, r);
  o.tag = 2, e != null && (o.callback = e), e = br(t, o, r), e !== null && (Gn(e, t, r, n), Qa(e, t, r));
} };
function Fg(t, e, n, r, o, l, a) {
  return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(r, l, a) : e.prototype && e.prototype.isPureReactComponent ? !sl(n, r) || !sl(o, l) : !0;
}
function x3(t, e, n) {
  var r = !1, o = ii, l = e.contextType;
  return typeof l == "object" && l !== null ? l = En(l) : (o = en(e) ? Ii : It.current, r = e.contextTypes, l = (r = r != null) ? zs(t, o) : ii), e = new e(n, l), t.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null, e.updater = Vu, t.stateNode = e, e._reactInternals = t, r && (t = t.stateNode, t.__reactInternalMemoizedUnmaskedChildContext = o, t.__reactInternalMemoizedMaskedChildContext = l), e;
}
function Mg(t, e, n, r) {
  t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(n, r), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(n, r), e.state !== t && Vu.enqueueReplaceState(e, e.state, null);
}
function yh(t, e, n, r) {
  var o = t.stateNode;
  o.props = n, o.state = t.memoizedState, o.refs = {}, m0(t);
  var l = e.contextType;
  typeof l == "object" && l !== null ? o.context = En(l) : (l = en(e) ? Ii : It.current, o.context = zs(t, l)), o.state = t.memoizedState, l = e.getDerivedStateFromProps, typeof l == "function" && (mh(t, e, l, n), o.state = t.memoizedState), typeof e.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (e = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), e !== o.state && Vu.enqueueReplaceState(o, o.state, null), vu(t, n, o, r), o.state = t.memoizedState), typeof o.componentDidMount == "function" && (t.flags |= 4194308);
}
function Vs(t, e) {
  try {
    var n = "", r = e;
    do
      n += qy(r), r = r.return;
    while (r);
    var o = n;
  } catch (l) {
    o = `
Error generating stack: ` + l.message + `
` + l.stack;
  }
  return { value: t, source: e, stack: o, digest: null };
}
function kf(t, e, n) {
  return { value: t, source: null, stack: n ?? null, digest: e ?? null };
}
function vh(t, e) {
  try {
    console.error(e.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var x6 = typeof WeakMap == "function" ? WeakMap : Map;
function k3(t, e, n) {
  n = vr(-1, n), n.tag = 3, n.payload = { element: null };
  var r = e.value;
  return n.callback = function() {
    xu || (xu = !0, Nh = r), vh(t, e);
  }, n;
}
function E3(t, e, n) {
  n = vr(-1, n), n.tag = 3;
  var r = t.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = e.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      vh(t, e);
    };
  }
  var l = t.stateNode;
  return l !== null && typeof l.componentDidCatch == "function" && (n.callback = function() {
    vh(t, e), typeof r != "function" && (ei === null ? ei = /* @__PURE__ */ new Set([this]) : ei.add(this));
    var a = e.stack;
    this.componentDidCatch(e.value, { componentStack: a !== null ? a : "" });
  }), n;
}
function Lg(t, e, n) {
  var r = t.pingCache;
  if (r === null) {
    r = t.pingCache = new x6();
    var o = /* @__PURE__ */ new Set();
    r.set(e, o);
  } else o = r.get(e), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(e, o));
  o.has(n) || (o.add(n), t = z6.bind(null, t, e, n), e.then(t, t));
}
function Ag(t) {
  do {
    var e;
    if ((e = t.tag === 13) && (e = t.memoizedState, e = e !== null ? e.dehydrated !== null : !0), e) return t;
    t = t.return;
  } while (t !== null);
  return null;
}
function Og(t, e, n, r, o) {
  return t.mode & 1 ? (t.flags |= 65536, t.lanes = o, t) : (t === e ? t.flags |= 65536 : (t.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (e = vr(-1, 1), e.tag = 2, br(n, e, 1))), n.lanes |= 1), t);
}
var k6 = kr.ReactCurrentOwner, Zt = !1;
function Gt(t, e, n, r) {
  e.child = t === null ? e3(e, null, n, r) : Gs(e, t.child, n, r);
}
function Dg(t, e, n, r, o) {
  n = n.render;
  var l = e.ref;
  return Os(e, o), r = w0(t, e, n, r, l, o), n = C0(), t !== null && !Zt ? (e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~o, xr(t, e, o)) : (Ye && n && u0(e), e.flags |= 1, Gt(t, e, r, o), e.child);
}
function Ig(t, e, n, r, o) {
  if (t === null) {
    var l = n.type;
    return typeof l == "function" && !L0(l) && l.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (e.tag = 15, e.type = l, P3(t, e, l, r, o)) : (t = eu(n.type, null, r, e, e.mode, o), t.ref = e.ref, t.return = e, e.child = t);
  }
  if (l = t.child, !(t.lanes & o)) {
    var a = l.memoizedProps;
    if (n = n.compare, n = n !== null ? n : sl, n(a, r) && t.ref === e.ref) return xr(t, e, o);
  }
  return e.flags |= 1, t = ni(l, r), t.ref = e.ref, t.return = e, e.child = t;
}
function P3(t, e, n, r, o) {
  if (t !== null) {
    var l = t.memoizedProps;
    if (sl(l, r) && t.ref === e.ref) if (Zt = !1, e.pendingProps = r = l, (t.lanes & o) !== 0) t.flags & 131072 && (Zt = !0);
    else return e.lanes = t.lanes, xr(t, e, o);
  }
  return _h(t, e, n, r, o);
}
function T3(t, e, n) {
  var r = e.pendingProps, o = r.children, l = t !== null ? t.memoizedState : null;
  if (r.mode === "hidden") if (!(e.mode & 1)) e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Ue(Rs, sn), sn |= n;
  else {
    if (!(n & 1073741824)) return t = l !== null ? l.baseLanes | n : n, e.lanes = e.childLanes = 1073741824, e.memoizedState = { baseLanes: t, cachePool: null, transitions: null }, e.updateQueue = null, Ue(Rs, sn), sn |= t, null;
    e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = l !== null ? l.baseLanes : n, Ue(Rs, sn), sn |= r;
  }
  else l !== null ? (r = l.baseLanes | n, e.memoizedState = null) : r = n, Ue(Rs, sn), sn |= r;
  return Gt(t, e, o, n), e.child;
}
function N3(t, e) {
  var n = e.ref;
  (t === null && n !== null || t !== null && t.ref !== n) && (e.flags |= 512, e.flags |= 2097152);
}
function _h(t, e, n, r, o) {
  var l = en(n) ? Ii : It.current;
  return l = zs(e, l), Os(e, o), n = w0(t, e, n, r, l, o), r = C0(), t !== null && !Zt ? (e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~o, xr(t, e, o)) : (Ye && r && u0(e), e.flags |= 1, Gt(t, e, n, o), e.child);
}
function zg(t, e, n, r, o) {
  if (en(n)) {
    var l = !0;
    hu(e);
  } else l = !1;
  if (Os(e, o), e.stateNode === null) Ja(t, e), x3(e, n, r), yh(e, n, r, o), r = !0;
  else if (t === null) {
    var a = e.stateNode, c = e.memoizedProps;
    a.props = c;
    var f = a.context, g = n.contextType;
    typeof g == "object" && g !== null ? g = En(g) : (g = en(n) ? Ii : It.current, g = zs(e, g));
    var y = n.getDerivedStateFromProps, x = typeof y == "function" || typeof a.getSnapshotBeforeUpdate == "function";
    x || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (c !== r || f !== g) && Mg(e, a, r, g), Wr = !1;
    var S = e.memoizedState;
    a.state = S, vu(e, r, a, o), f = e.memoizedState, c !== r || S !== f || bt.current || Wr ? (typeof y == "function" && (mh(e, n, y, r), f = e.memoizedState), (c = Wr || Fg(e, n, c, r, S, f, g)) ? (x || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = r, e.memoizedState = f), a.props = r, a.state = f, a.context = g, r = c) : (typeof a.componentDidMount == "function" && (e.flags |= 4194308), r = !1);
  } else {
    a = e.stateNode, n3(t, e), c = e.memoizedProps, g = e.type === e.elementType ? c : Dn(e.type, c), a.props = g, x = e.pendingProps, S = a.context, f = n.contextType, typeof f == "object" && f !== null ? f = En(f) : (f = en(n) ? Ii : It.current, f = zs(e, f));
    var C = n.getDerivedStateFromProps;
    (y = typeof C == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (c !== x || S !== f) && Mg(e, a, r, f), Wr = !1, S = e.memoizedState, a.state = S, vu(e, r, a, o);
    var v = e.memoizedState;
    c !== x || S !== v || bt.current || Wr ? (typeof C == "function" && (mh(e, n, C, r), v = e.memoizedState), (g = Wr || Fg(e, n, g, r, S, v, f) || !1) ? (y || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(r, v, f), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(r, v, f)), typeof a.componentDidUpdate == "function" && (e.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || c === t.memoizedProps && S === t.memoizedState || (e.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || c === t.memoizedProps && S === t.memoizedState || (e.flags |= 1024), e.memoizedProps = r, e.memoizedState = v), a.props = r, a.state = v, a.context = f, r = g) : (typeof a.componentDidUpdate != "function" || c === t.memoizedProps && S === t.memoizedState || (e.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || c === t.memoizedProps && S === t.memoizedState || (e.flags |= 1024), r = !1);
  }
  return Sh(t, e, n, r, l, o);
}
function Sh(t, e, n, r, o, l) {
  N3(t, e);
  var a = (e.flags & 128) !== 0;
  if (!r && !a) return o && Cg(e, n, !1), xr(t, e, l);
  r = e.stateNode, k6.current = e;
  var c = a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return e.flags |= 1, t !== null && a ? (e.child = Gs(e, t.child, null, l), e.child = Gs(e, null, c, l)) : Gt(t, e, c, l), e.memoizedState = r.state, o && Cg(e, n, !0), e.child;
}
function R3(t) {
  var e = t.stateNode;
  e.pendingContext ? wg(t, e.pendingContext, e.pendingContext !== e.context) : e.context && wg(t, e.context, !1), y0(t, e.containerInfo);
}
function Ug(t, e, n, r, o) {
  return Us(), d0(o), e.flags |= 256, Gt(t, e, n, r), e.child;
}
var wh = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ch(t) {
  return { baseLanes: t, cachePool: null, transitions: null };
}
function F3(t, e, n) {
  var r = e.pendingProps, o = qe.current, l = !1, a = (e.flags & 128) !== 0, c;
  if ((c = a) || (c = t !== null && t.memoizedState === null ? !1 : (o & 2) !== 0), c ? (l = !0, e.flags &= -129) : (t === null || t.memoizedState !== null) && (o |= 1), Ue(qe, o & 1), t === null)
    return ph(e), t = e.memoizedState, t !== null && (t = t.dehydrated, t !== null) ? (e.mode & 1 ? t.data === "$!" ? e.lanes = 8 : e.lanes = 1073741824 : e.lanes = 1, null) : (a = r.children, t = r.fallback, l ? (r = e.mode, l = e.child, a = { mode: "hidden", children: a }, !(r & 1) && l !== null ? (l.childLanes = 0, l.pendingProps = a) : l = Wu(a, r, 0, null), t = Di(t, r, n, null), l.return = e, t.return = e, l.sibling = t, e.child = l, e.child.memoizedState = Ch(n), e.memoizedState = wh, t) : E0(e, a));
  if (o = t.memoizedState, o !== null && (c = o.dehydrated, c !== null)) return E6(t, e, a, r, c, o, n);
  if (l) {
    l = r.fallback, a = e.mode, o = t.child, c = o.sibling;
    var f = { mode: "hidden", children: r.children };
    return !(a & 1) && e.child !== o ? (r = e.child, r.childLanes = 0, r.pendingProps = f, e.deletions = null) : (r = ni(o, f), r.subtreeFlags = o.subtreeFlags & 14680064), c !== null ? l = ni(c, l) : (l = Di(l, a, n, null), l.flags |= 2), l.return = e, r.return = e, r.sibling = l, e.child = r, r = l, l = e.child, a = t.child.memoizedState, a = a === null ? Ch(n) : { baseLanes: a.baseLanes | n, cachePool: null, transitions: a.transitions }, l.memoizedState = a, l.childLanes = t.childLanes & ~n, e.memoizedState = wh, r;
  }
  return l = t.child, t = l.sibling, r = ni(l, { mode: "visible", children: r.children }), !(e.mode & 1) && (r.lanes = n), r.return = e, r.sibling = null, t !== null && (n = e.deletions, n === null ? (e.deletions = [t], e.flags |= 16) : n.push(t)), e.child = r, e.memoizedState = null, r;
}
function E0(t, e) {
  return e = Wu({ mode: "visible", children: e }, t.mode, 0, null), e.return = t, t.child = e;
}
function Aa(t, e, n, r) {
  return r !== null && d0(r), Gs(e, t.child, null, n), t = E0(e, e.pendingProps.children), t.flags |= 2, e.memoizedState = null, t;
}
function E6(t, e, n, r, o, l, a) {
  if (n)
    return e.flags & 256 ? (e.flags &= -257, r = kf(Error(W(422))), Aa(t, e, a, r)) : e.memoizedState !== null ? (e.child = t.child, e.flags |= 128, null) : (l = r.fallback, o = e.mode, r = Wu({ mode: "visible", children: r.children }, o, 0, null), l = Di(l, o, a, null), l.flags |= 2, r.return = e, l.return = e, r.sibling = l, e.child = r, e.mode & 1 && Gs(e, t.child, null, a), e.child.memoizedState = Ch(a), e.memoizedState = wh, l);
  if (!(e.mode & 1)) return Aa(t, e, a, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r) var c = r.dgst;
    return r = c, l = Error(W(419)), r = kf(l, r, void 0), Aa(t, e, a, r);
  }
  if (c = (a & t.childLanes) !== 0, Zt || c) {
    if (r = Ct, r !== null) {
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
      o = o & (r.suspendedLanes | a) ? 0 : o, o !== 0 && o !== l.retryLane && (l.retryLane = o, Cr(t, o), Gn(r, t, o, -1));
    }
    return M0(), r = kf(Error(W(421))), Aa(t, e, a, r);
  }
  return o.data === "$?" ? (e.flags |= 128, e.child = t.child, e = U6.bind(null, t), o._reactRetry = e, null) : (t = l.treeContext, on = Zr(o.nextSibling), ln = e, Ye = !0, zn = null, t !== null && (wn[Cn++] = mr, wn[Cn++] = yr, wn[Cn++] = zi, mr = t.id, yr = t.overflow, zi = e), e = E0(e, r.children), e.flags |= 4096, e);
}
function Gg(t, e, n) {
  t.lanes |= e;
  var r = t.alternate;
  r !== null && (r.lanes |= e), gh(t.return, e, n);
}
function Ef(t, e, n, r, o) {
  var l = t.memoizedState;
  l === null ? t.memoizedState = { isBackwards: e, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (l.isBackwards = e, l.rendering = null, l.renderingStartTime = 0, l.last = r, l.tail = n, l.tailMode = o);
}
function M3(t, e, n) {
  var r = e.pendingProps, o = r.revealOrder, l = r.tail;
  if (Gt(t, e, r.children, n), r = qe.current, r & 2) r = r & 1 | 2, e.flags |= 128;
  else {
    if (t !== null && t.flags & 128) e: for (t = e.child; t !== null; ) {
      if (t.tag === 13) t.memoizedState !== null && Gg(t, n, e);
      else if (t.tag === 19) Gg(t, n, e);
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
  if (Ue(qe, r), !(e.mode & 1)) e.memoizedState = null;
  else switch (o) {
    case "forwards":
      for (n = e.child, o = null; n !== null; ) t = n.alternate, t !== null && _u(t) === null && (o = n), n = n.sibling;
      n = o, n === null ? (o = e.child, e.child = null) : (o = n.sibling, n.sibling = null), Ef(e, !1, o, n, l);
      break;
    case "backwards":
      for (n = null, o = e.child, e.child = null; o !== null; ) {
        if (t = o.alternate, t !== null && _u(t) === null) {
          e.child = o;
          break;
        }
        t = o.sibling, o.sibling = n, n = o, o = t;
      }
      Ef(e, !0, n, null, l);
      break;
    case "together":
      Ef(e, !1, null, null, void 0);
      break;
    default:
      e.memoizedState = null;
  }
  return e.child;
}
function Ja(t, e) {
  !(e.mode & 1) && t !== null && (t.alternate = null, e.alternate = null, e.flags |= 2);
}
function xr(t, e, n) {
  if (t !== null && (e.dependencies = t.dependencies), Gi |= e.lanes, !(n & e.childLanes)) return null;
  if (t !== null && e.child !== t.child) throw Error(W(153));
  if (e.child !== null) {
    for (t = e.child, n = ni(t, t.pendingProps), e.child = n, n.return = e; t.sibling !== null; ) t = t.sibling, n = n.sibling = ni(t, t.pendingProps), n.return = e;
    n.sibling = null;
  }
  return e.child;
}
function P6(t, e, n) {
  switch (e.tag) {
    case 3:
      R3(e), Us();
      break;
    case 5:
      r3(e);
      break;
    case 1:
      en(e.type) && hu(e);
      break;
    case 4:
      y0(e, e.stateNode.containerInfo);
      break;
    case 10:
      var r = e.type._context, o = e.memoizedProps.value;
      Ue(mu, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = e.memoizedState, r !== null)
        return r.dehydrated !== null ? (Ue(qe, qe.current & 1), e.flags |= 128, null) : n & e.child.childLanes ? F3(t, e, n) : (Ue(qe, qe.current & 1), t = xr(t, e, n), t !== null ? t.sibling : null);
      Ue(qe, qe.current & 1);
      break;
    case 19:
      if (r = (n & e.childLanes) !== 0, t.flags & 128) {
        if (r) return M3(t, e, n);
        e.flags |= 128;
      }
      if (o = e.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), Ue(qe, qe.current), r) break;
      return null;
    case 22:
    case 23:
      return e.lanes = 0, T3(t, e, n);
  }
  return xr(t, e, n);
}
var L3, xh, A3, O3;
L3 = function(t, e) {
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
xh = function() {
};
A3 = function(t, e, n, r) {
  var o = t.memoizedProps;
  if (o !== r) {
    t = e.stateNode, Ai(nr.current);
    var l = null;
    switch (n) {
      case "input":
        o = Kf(t, o), r = Kf(t, r), l = [];
        break;
      case "select":
        o = Ze({}, o, { value: void 0 }), r = Ze({}, r, { value: void 0 }), l = [];
        break;
      case "textarea":
        o = Qf(t, o), r = Qf(t, r), l = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (t.onclick = du);
    }
    qf(n, r);
    var a;
    n = null;
    for (g in o) if (!r.hasOwnProperty(g) && o.hasOwnProperty(g) && o[g] != null) if (g === "style") {
      var c = o[g];
      for (a in c) c.hasOwnProperty(a) && (n || (n = {}), n[a] = "");
    } else g !== "dangerouslySetInnerHTML" && g !== "children" && g !== "suppressContentEditableWarning" && g !== "suppressHydrationWarning" && g !== "autoFocus" && (Zo.hasOwnProperty(g) ? l || (l = []) : (l = l || []).push(g, null));
    for (g in r) {
      var f = r[g];
      if (c = o != null ? o[g] : void 0, r.hasOwnProperty(g) && f !== c && (f != null || c != null)) if (g === "style") if (c) {
        for (a in c) !c.hasOwnProperty(a) || f && f.hasOwnProperty(a) || (n || (n = {}), n[a] = "");
        for (a in f) f.hasOwnProperty(a) && c[a] !== f[a] && (n || (n = {}), n[a] = f[a]);
      } else n || (l || (l = []), l.push(
        g,
        n
      )), n = f;
      else g === "dangerouslySetInnerHTML" ? (f = f ? f.__html : void 0, c = c ? c.__html : void 0, f != null && c !== f && (l = l || []).push(g, f)) : g === "children" ? typeof f != "string" && typeof f != "number" || (l = l || []).push(g, "" + f) : g !== "suppressContentEditableWarning" && g !== "suppressHydrationWarning" && (Zo.hasOwnProperty(g) ? (f != null && g === "onScroll" && Ve("scroll", t), l || c === f || (l = [])) : (l = l || []).push(g, f));
    }
    n && (l = l || []).push("style", n);
    var g = l;
    (e.updateQueue = g) && (e.flags |= 4);
  }
};
O3 = function(t, e, n, r) {
  n !== r && (e.flags |= 4);
};
function Fo(t, e) {
  if (!Ye) switch (t.tailMode) {
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
function Ot(t) {
  var e = t.alternate !== null && t.alternate.child === t.child, n = 0, r = 0;
  if (e) for (var o = t.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = t, o = o.sibling;
  else for (o = t.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = t, o = o.sibling;
  return t.subtreeFlags |= r, t.childLanes = n, e;
}
function T6(t, e, n) {
  var r = e.pendingProps;
  switch (c0(e), e.tag) {
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
      return Ot(e), null;
    case 1:
      return en(e.type) && fu(), Ot(e), null;
    case 3:
      return r = e.stateNode, Bs(), je(bt), je(It), _0(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (t === null || t.child === null) && (Ma(e) ? e.flags |= 4 : t === null || t.memoizedState.isDehydrated && !(e.flags & 256) || (e.flags |= 1024, zn !== null && (Mh(zn), zn = null))), xh(t, e), Ot(e), null;
    case 5:
      v0(e);
      var o = Ai(cl.current);
      if (n = e.type, t !== null && e.stateNode != null) A3(t, e, n, r, o), t.ref !== e.ref && (e.flags |= 512, e.flags |= 2097152);
      else {
        if (!r) {
          if (e.stateNode === null) throw Error(W(166));
          return Ot(e), null;
        }
        if (t = Ai(nr.current), Ma(e)) {
          r = e.stateNode, n = e.type;
          var l = e.memoizedProps;
          switch (r[bn] = e, r[al] = l, t = (e.mode & 1) !== 0, n) {
            case "dialog":
              Ve("cancel", r), Ve("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              Ve("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Go.length; o++) Ve(Go[o], r);
              break;
            case "source":
              Ve("error", r);
              break;
            case "img":
            case "image":
            case "link":
              Ve(
                "error",
                r
              ), Ve("load", r);
              break;
            case "details":
              Ve("toggle", r);
              break;
            case "input":
              Qp(r, l), Ve("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!l.multiple }, Ve("invalid", r);
              break;
            case "textarea":
              qp(r, l), Ve("invalid", r);
          }
          qf(n, l), o = null;
          for (var a in l) if (l.hasOwnProperty(a)) {
            var c = l[a];
            a === "children" ? typeof c == "string" ? r.textContent !== c && (l.suppressHydrationWarning !== !0 && Fa(r.textContent, c, t), o = ["children", c]) : typeof c == "number" && r.textContent !== "" + c && (l.suppressHydrationWarning !== !0 && Fa(
              r.textContent,
              c,
              t
            ), o = ["children", "" + c]) : Zo.hasOwnProperty(a) && c != null && a === "onScroll" && Ve("scroll", r);
          }
          switch (n) {
            case "input":
              Ca(r), $p(r, l, !0);
              break;
            case "textarea":
              Ca(r), Jp(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof l.onClick == "function" && (r.onclick = du);
          }
          r = o, e.updateQueue = r, r !== null && (e.flags |= 4);
        } else {
          a = o.nodeType === 9 ? o : o.ownerDocument, t === "http://www.w3.org/1999/xhtml" && (t = am(n)), t === "http://www.w3.org/1999/xhtml" ? n === "script" ? (t = a.createElement("div"), t.innerHTML = "<script><\/script>", t = t.removeChild(t.firstChild)) : typeof r.is == "string" ? t = a.createElement(n, { is: r.is }) : (t = a.createElement(n), n === "select" && (a = t, r.multiple ? a.multiple = !0 : r.size && (a.size = r.size))) : t = a.createElementNS(t, n), t[bn] = e, t[al] = r, L3(t, e, !1, !1), e.stateNode = t;
          e: {
            switch (a = Jf(n, r), n) {
              case "dialog":
                Ve("cancel", t), Ve("close", t), o = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                Ve("load", t), o = r;
                break;
              case "video":
              case "audio":
                for (o = 0; o < Go.length; o++) Ve(Go[o], t);
                o = r;
                break;
              case "source":
                Ve("error", t), o = r;
                break;
              case "img":
              case "image":
              case "link":
                Ve(
                  "error",
                  t
                ), Ve("load", t), o = r;
                break;
              case "details":
                Ve("toggle", t), o = r;
                break;
              case "input":
                Qp(t, r), o = Kf(t, r), Ve("invalid", t);
                break;
              case "option":
                o = r;
                break;
              case "select":
                t._wrapperState = { wasMultiple: !!r.multiple }, o = Ze({}, r, { value: void 0 }), Ve("invalid", t);
                break;
              case "textarea":
                qp(t, r), o = Qf(t, r), Ve("invalid", t);
                break;
              default:
                o = r;
            }
            qf(n, o), c = o;
            for (l in c) if (c.hasOwnProperty(l)) {
              var f = c[l];
              l === "style" ? dm(t, f) : l === "dangerouslySetInnerHTML" ? (f = f ? f.__html : void 0, f != null && um(t, f)) : l === "children" ? typeof f == "string" ? (n !== "textarea" || f !== "") && bo(t, f) : typeof f == "number" && bo(t, "" + f) : l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && l !== "autoFocus" && (Zo.hasOwnProperty(l) ? f != null && l === "onScroll" && Ve("scroll", t) : f != null && $h(t, l, f, a));
            }
            switch (n) {
              case "input":
                Ca(t), $p(t, r, !1);
                break;
              case "textarea":
                Ca(t), Jp(t);
                break;
              case "option":
                r.value != null && t.setAttribute("value", "" + ri(r.value));
                break;
              case "select":
                t.multiple = !!r.multiple, l = r.value, l != null ? Fs(t, !!r.multiple, l, !1) : r.defaultValue != null && Fs(
                  t,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof o.onClick == "function" && (t.onclick = du);
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
      return Ot(e), null;
    case 6:
      if (t && e.stateNode != null) O3(t, e, t.memoizedProps, r);
      else {
        if (typeof r != "string" && e.stateNode === null) throw Error(W(166));
        if (n = Ai(cl.current), Ai(nr.current), Ma(e)) {
          if (r = e.stateNode, n = e.memoizedProps, r[bn] = e, (l = r.nodeValue !== n) && (t = ln, t !== null)) switch (t.tag) {
            case 3:
              Fa(r.nodeValue, n, (t.mode & 1) !== 0);
              break;
            case 5:
              t.memoizedProps.suppressHydrationWarning !== !0 && Fa(r.nodeValue, n, (t.mode & 1) !== 0);
          }
          l && (e.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[bn] = e, e.stateNode = r;
      }
      return Ot(e), null;
    case 13:
      if (je(qe), r = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
        if (Ye && on !== null && e.mode & 1 && !(e.flags & 128)) Zm(), Us(), e.flags |= 98560, l = !1;
        else if (l = Ma(e), r !== null && r.dehydrated !== null) {
          if (t === null) {
            if (!l) throw Error(W(318));
            if (l = e.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(W(317));
            l[bn] = e;
          } else Us(), !(e.flags & 128) && (e.memoizedState = null), e.flags |= 4;
          Ot(e), l = !1;
        } else zn !== null && (Mh(zn), zn = null), l = !0;
        if (!l) return e.flags & 65536 ? e : null;
      }
      return e.flags & 128 ? (e.lanes = n, e) : (r = r !== null, r !== (t !== null && t.memoizedState !== null) && r && (e.child.flags |= 8192, e.mode & 1 && (t === null || qe.current & 1 ? pt === 0 && (pt = 3) : M0())), e.updateQueue !== null && (e.flags |= 4), Ot(e), null);
    case 4:
      return Bs(), xh(t, e), t === null && ol(e.stateNode.containerInfo), Ot(e), null;
    case 10:
      return p0(e.type._context), Ot(e), null;
    case 17:
      return en(e.type) && fu(), Ot(e), null;
    case 19:
      if (je(qe), l = e.memoizedState, l === null) return Ot(e), null;
      if (r = (e.flags & 128) !== 0, a = l.rendering, a === null) if (r) Fo(l, !1);
      else {
        if (pt !== 0 || t !== null && t.flags & 128) for (t = e.child; t !== null; ) {
          if (a = _u(t), a !== null) {
            for (e.flags |= 128, Fo(l, !1), r = a.updateQueue, r !== null && (e.updateQueue = r, e.flags |= 4), e.subtreeFlags = 0, r = n, n = e.child; n !== null; ) l = n, t = r, l.flags &= 14680066, a = l.alternate, a === null ? (l.childLanes = 0, l.lanes = t, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = a.childLanes, l.lanes = a.lanes, l.child = a.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = a.memoizedProps, l.memoizedState = a.memoizedState, l.updateQueue = a.updateQueue, l.type = a.type, t = a.dependencies, l.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }), n = n.sibling;
            return Ue(qe, qe.current & 1 | 2), e.child;
          }
          t = t.sibling;
        }
        l.tail !== null && it() > Hs && (e.flags |= 128, r = !0, Fo(l, !1), e.lanes = 4194304);
      }
      else {
        if (!r) if (t = _u(a), t !== null) {
          if (e.flags |= 128, r = !0, n = t.updateQueue, n !== null && (e.updateQueue = n, e.flags |= 4), Fo(l, !0), l.tail === null && l.tailMode === "hidden" && !a.alternate && !Ye) return Ot(e), null;
        } else 2 * it() - l.renderingStartTime > Hs && n !== 1073741824 && (e.flags |= 128, r = !0, Fo(l, !1), e.lanes = 4194304);
        l.isBackwards ? (a.sibling = e.child, e.child = a) : (n = l.last, n !== null ? n.sibling = a : e.child = a, l.last = a);
      }
      return l.tail !== null ? (e = l.tail, l.rendering = e, l.tail = e.sibling, l.renderingStartTime = it(), e.sibling = null, n = qe.current, Ue(qe, r ? n & 1 | 2 : n & 1), e) : (Ot(e), null);
    case 22:
    case 23:
      return F0(), r = e.memoizedState !== null, t !== null && t.memoizedState !== null !== r && (e.flags |= 8192), r && e.mode & 1 ? sn & 1073741824 && (Ot(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : Ot(e), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(W(156, e.tag));
}
function N6(t, e) {
  switch (c0(e), e.tag) {
    case 1:
      return en(e.type) && fu(), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
    case 3:
      return Bs(), je(bt), je(It), _0(), t = e.flags, t & 65536 && !(t & 128) ? (e.flags = t & -65537 | 128, e) : null;
    case 5:
      return v0(e), null;
    case 13:
      if (je(qe), t = e.memoizedState, t !== null && t.dehydrated !== null) {
        if (e.alternate === null) throw Error(W(340));
        Us();
      }
      return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
    case 19:
      return je(qe), null;
    case 4:
      return Bs(), null;
    case 10:
      return p0(e.type._context), null;
    case 22:
    case 23:
      return F0(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Oa = !1, Dt = !1, R6 = typeof WeakSet == "function" ? WeakSet : Set, ne = null;
function Ns(t, e) {
  var n = t.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    et(t, e, r);
  }
  else n.current = null;
}
function kh(t, e, n) {
  try {
    n();
  } catch (r) {
    et(t, e, r);
  }
}
var Bg = !1;
function F6(t, e) {
  if (lh = au, t = Gm(), a0(t)) {
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
        var a = 0, c = -1, f = -1, g = 0, y = 0, x = t, S = null;
        t: for (; ; ) {
          for (var C; x !== n || o !== 0 && x.nodeType !== 3 || (c = a + o), x !== l || r !== 0 && x.nodeType !== 3 || (f = a + r), x.nodeType === 3 && (a += x.nodeValue.length), (C = x.firstChild) !== null; )
            S = x, x = C;
          for (; ; ) {
            if (x === t) break t;
            if (S === n && ++g === o && (c = a), S === l && ++y === r && (f = a), (C = x.nextSibling) !== null) break;
            x = S, S = x.parentNode;
          }
          x = C;
        }
        n = c === -1 || f === -1 ? null : { start: c, end: f };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (ah = { focusedElem: t, selectionRange: n }, au = !1, ne = e; ne !== null; ) if (e = ne, t = e.child, (e.subtreeFlags & 1028) !== 0 && t !== null) t.return = e, ne = t;
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
            var P = v.memoizedProps, R = v.memoizedState, k = e.stateNode, w = k.getSnapshotBeforeUpdate(e.elementType === e.type ? P : Dn(e.type, P), R);
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
          throw Error(W(163));
      }
    } catch (_) {
      et(e, e.return, _);
    }
    if (t = e.sibling, t !== null) {
      t.return = e.return, ne = t;
      break;
    }
    ne = e.return;
  }
  return v = Bg, Bg = !1, v;
}
function Qo(t, e, n) {
  var r = e.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & t) === t) {
        var l = o.destroy;
        o.destroy = void 0, l !== void 0 && kh(e, n, l);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Hu(t, e) {
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
function Eh(t) {
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
function D3(t) {
  var e = t.alternate;
  e !== null && (t.alternate = null, D3(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && (delete e[bn], delete e[al], delete e[dh], delete e[f6], delete e[h6])), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
}
function I3(t) {
  return t.tag === 5 || t.tag === 3 || t.tag === 4;
}
function Vg(t) {
  e: for (; ; ) {
    for (; t.sibling === null; ) {
      if (t.return === null || I3(t.return)) return null;
      t = t.return;
    }
    for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
      if (t.flags & 2 || t.child === null || t.tag === 4) continue e;
      t.child.return = t, t = t.child;
    }
    if (!(t.flags & 2)) return t.stateNode;
  }
}
function Ph(t, e, n) {
  var r = t.tag;
  if (r === 5 || r === 6) t = t.stateNode, e ? n.nodeType === 8 ? n.parentNode.insertBefore(t, e) : n.insertBefore(t, e) : (n.nodeType === 8 ? (e = n.parentNode, e.insertBefore(t, n)) : (e = n, e.appendChild(t)), n = n._reactRootContainer, n != null || e.onclick !== null || (e.onclick = du));
  else if (r !== 4 && (t = t.child, t !== null)) for (Ph(t, e, n), t = t.sibling; t !== null; ) Ph(t, e, n), t = t.sibling;
}
function Th(t, e, n) {
  var r = t.tag;
  if (r === 5 || r === 6) t = t.stateNode, e ? n.insertBefore(t, e) : n.appendChild(t);
  else if (r !== 4 && (t = t.child, t !== null)) for (Th(t, e, n), t = t.sibling; t !== null; ) Th(t, e, n), t = t.sibling;
}
var Et = null, In = !1;
function Br(t, e, n) {
  for (n = n.child; n !== null; ) z3(t, e, n), n = n.sibling;
}
function z3(t, e, n) {
  if (tr && typeof tr.onCommitFiberUnmount == "function") try {
    tr.onCommitFiberUnmount(Ou, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      Dt || Ns(n, e);
    case 6:
      var r = Et, o = In;
      Et = null, Br(t, e, n), Et = r, In = o, Et !== null && (In ? (t = Et, n = n.stateNode, t.nodeType === 8 ? t.parentNode.removeChild(n) : t.removeChild(n)) : Et.removeChild(n.stateNode));
      break;
    case 18:
      Et !== null && (In ? (t = Et, n = n.stateNode, t.nodeType === 8 ? vf(t.parentNode, n) : t.nodeType === 1 && vf(t, n), rl(t)) : vf(Et, n.stateNode));
      break;
    case 4:
      r = Et, o = In, Et = n.stateNode.containerInfo, In = !0, Br(t, e, n), Et = r, In = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Dt && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var l = o, a = l.destroy;
          l = l.tag, a !== void 0 && (l & 2 || l & 4) && kh(n, e, a), o = o.next;
        } while (o !== r);
      }
      Br(t, e, n);
      break;
    case 1:
      if (!Dt && (Ns(n, e), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (c) {
        et(n, e, c);
      }
      Br(t, e, n);
      break;
    case 21:
      Br(t, e, n);
      break;
    case 22:
      n.mode & 1 ? (Dt = (r = Dt) || n.memoizedState !== null, Br(t, e, n), Dt = r) : Br(t, e, n);
      break;
    default:
      Br(t, e, n);
  }
}
function Hg(t) {
  var e = t.updateQueue;
  if (e !== null) {
    t.updateQueue = null;
    var n = t.stateNode;
    n === null && (n = t.stateNode = new R6()), e.forEach(function(r) {
      var o = G6.bind(null, t, r);
      n.has(r) || (n.add(r), r.then(o, o));
    });
  }
}
function An(t, e) {
  var n = e.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var o = n[r];
    try {
      var l = t, a = e, c = a;
      e: for (; c !== null; ) {
        switch (c.tag) {
          case 5:
            Et = c.stateNode, In = !1;
            break e;
          case 3:
            Et = c.stateNode.containerInfo, In = !0;
            break e;
          case 4:
            Et = c.stateNode.containerInfo, In = !0;
            break e;
        }
        c = c.return;
      }
      if (Et === null) throw Error(W(160));
      z3(l, a, o), Et = null, In = !1;
      var f = o.alternate;
      f !== null && (f.return = null), o.return = null;
    } catch (g) {
      et(o, e, g);
    }
  }
  if (e.subtreeFlags & 12854) for (e = e.child; e !== null; ) U3(e, t), e = e.sibling;
}
function U3(t, e) {
  var n = t.alternate, r = t.flags;
  switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (An(e, t), Jn(t), r & 4) {
        try {
          Qo(3, t, t.return), Hu(3, t);
        } catch (P) {
          et(t, t.return, P);
        }
        try {
          Qo(5, t, t.return);
        } catch (P) {
          et(t, t.return, P);
        }
      }
      break;
    case 1:
      An(e, t), Jn(t), r & 512 && n !== null && Ns(n, n.return);
      break;
    case 5:
      if (An(e, t), Jn(t), r & 512 && n !== null && Ns(n, n.return), t.flags & 32) {
        var o = t.stateNode;
        try {
          bo(o, "");
        } catch (P) {
          et(t, t.return, P);
        }
      }
      if (r & 4 && (o = t.stateNode, o != null)) {
        var l = t.memoizedProps, a = n !== null ? n.memoizedProps : l, c = t.type, f = t.updateQueue;
        if (t.updateQueue = null, f !== null) try {
          c === "input" && l.type === "radio" && l.name != null && om(o, l), Jf(c, a);
          var g = Jf(c, l);
          for (a = 0; a < f.length; a += 2) {
            var y = f[a], x = f[a + 1];
            y === "style" ? dm(o, x) : y === "dangerouslySetInnerHTML" ? um(o, x) : y === "children" ? bo(o, x) : $h(o, y, x, g);
          }
          switch (c) {
            case "input":
              Yf(o, l);
              break;
            case "textarea":
              lm(o, l);
              break;
            case "select":
              var S = o._wrapperState.wasMultiple;
              o._wrapperState.wasMultiple = !!l.multiple;
              var C = l.value;
              C != null ? Fs(o, !!l.multiple, C, !1) : S !== !!l.multiple && (l.defaultValue != null ? Fs(
                o,
                !!l.multiple,
                l.defaultValue,
                !0
              ) : Fs(o, !!l.multiple, l.multiple ? [] : "", !1));
          }
          o[al] = l;
        } catch (P) {
          et(t, t.return, P);
        }
      }
      break;
    case 6:
      if (An(e, t), Jn(t), r & 4) {
        if (t.stateNode === null) throw Error(W(162));
        o = t.stateNode, l = t.memoizedProps;
        try {
          o.nodeValue = l;
        } catch (P) {
          et(t, t.return, P);
        }
      }
      break;
    case 3:
      if (An(e, t), Jn(t), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        rl(e.containerInfo);
      } catch (P) {
        et(t, t.return, P);
      }
      break;
    case 4:
      An(e, t), Jn(t);
      break;
    case 13:
      An(e, t), Jn(t), o = t.child, o.flags & 8192 && (l = o.memoizedState !== null, o.stateNode.isHidden = l, !l || o.alternate !== null && o.alternate.memoizedState !== null || (N0 = it())), r & 4 && Hg(t);
      break;
    case 22:
      if (y = n !== null && n.memoizedState !== null, t.mode & 1 ? (Dt = (g = Dt) || y, An(e, t), Dt = g) : An(e, t), Jn(t), r & 8192) {
        if (g = t.memoizedState !== null, (t.stateNode.isHidden = g) && !y && t.mode & 1) for (ne = t, y = t.child; y !== null; ) {
          for (x = ne = y; ne !== null; ) {
            switch (S = ne, C = S.child, S.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Qo(4, S, S.return);
                break;
              case 1:
                Ns(S, S.return);
                var v = S.stateNode;
                if (typeof v.componentWillUnmount == "function") {
                  r = S, n = S.return;
                  try {
                    e = r, v.props = e.memoizedProps, v.state = e.memoizedState, v.componentWillUnmount();
                  } catch (P) {
                    et(r, n, P);
                  }
                }
                break;
              case 5:
                Ns(S, S.return);
                break;
              case 22:
                if (S.memoizedState !== null) {
                  Wg(x);
                  continue;
                }
            }
            C !== null ? (C.return = S, ne = C) : Wg(x);
          }
          y = y.sibling;
        }
        e: for (y = null, x = t; ; ) {
          if (x.tag === 5) {
            if (y === null) {
              y = x;
              try {
                o = x.stateNode, g ? (l = o.style, typeof l.setProperty == "function" ? l.setProperty("display", "none", "important") : l.display = "none") : (c = x.stateNode, f = x.memoizedProps.style, a = f != null && f.hasOwnProperty("display") ? f.display : null, c.style.display = cm("display", a));
              } catch (P) {
                et(t, t.return, P);
              }
            }
          } else if (x.tag === 6) {
            if (y === null) try {
              x.stateNode.nodeValue = g ? "" : x.memoizedProps;
            } catch (P) {
              et(t, t.return, P);
            }
          } else if ((x.tag !== 22 && x.tag !== 23 || x.memoizedState === null || x === t) && x.child !== null) {
            x.child.return = x, x = x.child;
            continue;
          }
          if (x === t) break e;
          for (; x.sibling === null; ) {
            if (x.return === null || x.return === t) break e;
            y === x && (y = null), x = x.return;
          }
          y === x && (y = null), x.sibling.return = x.return, x = x.sibling;
        }
      }
      break;
    case 19:
      An(e, t), Jn(t), r & 4 && Hg(t);
      break;
    case 21:
      break;
    default:
      An(
        e,
        t
      ), Jn(t);
  }
}
function Jn(t) {
  var e = t.flags;
  if (e & 2) {
    try {
      e: {
        for (var n = t.return; n !== null; ) {
          if (I3(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(W(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (bo(o, ""), r.flags &= -33);
          var l = Vg(t);
          Th(t, l, o);
          break;
        case 3:
        case 4:
          var a = r.stateNode.containerInfo, c = Vg(t);
          Ph(t, c, a);
          break;
        default:
          throw Error(W(161));
      }
    } catch (f) {
      et(t, t.return, f);
    }
    t.flags &= -3;
  }
  e & 4096 && (t.flags &= -4097);
}
function M6(t, e, n) {
  ne = t, G3(t);
}
function G3(t, e, n) {
  for (var r = (t.mode & 1) !== 0; ne !== null; ) {
    var o = ne, l = o.child;
    if (o.tag === 22 && r) {
      var a = o.memoizedState !== null || Oa;
      if (!a) {
        var c = o.alternate, f = c !== null && c.memoizedState !== null || Dt;
        c = Oa;
        var g = Dt;
        if (Oa = a, (Dt = f) && !g) for (ne = o; ne !== null; ) a = ne, f = a.child, a.tag === 22 && a.memoizedState !== null ? Kg(o) : f !== null ? (f.return = a, ne = f) : Kg(o);
        for (; l !== null; ) ne = l, G3(l), l = l.sibling;
        ne = o, Oa = c, Dt = g;
      }
      jg(t);
    } else o.subtreeFlags & 8772 && l !== null ? (l.return = o, ne = l) : jg(t);
  }
}
function jg(t) {
  for (; ne !== null; ) {
    var e = ne;
    if (e.flags & 8772) {
      var n = e.alternate;
      try {
        if (e.flags & 8772) switch (e.tag) {
          case 0:
          case 11:
          case 15:
            Dt || Hu(5, e);
            break;
          case 1:
            var r = e.stateNode;
            if (e.flags & 4 && !Dt) if (n === null) r.componentDidMount();
            else {
              var o = e.elementType === e.type ? n.memoizedProps : Dn(e.type, n.memoizedProps);
              r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var l = e.updateQueue;
            l !== null && Tg(e, l, r);
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
              Tg(e, a, n);
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
                  var x = y.dehydrated;
                  x !== null && rl(x);
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
            throw Error(W(163));
        }
        Dt || e.flags & 512 && Eh(e);
      } catch (S) {
        et(e, e.return, S);
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
function Wg(t) {
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
function Kg(t) {
  for (; ne !== null; ) {
    var e = ne;
    try {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          var n = e.return;
          try {
            Hu(4, e);
          } catch (f) {
            et(e, n, f);
          }
          break;
        case 1:
          var r = e.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = e.return;
            try {
              r.componentDidMount();
            } catch (f) {
              et(e, o, f);
            }
          }
          var l = e.return;
          try {
            Eh(e);
          } catch (f) {
            et(e, l, f);
          }
          break;
        case 5:
          var a = e.return;
          try {
            Eh(e);
          } catch (f) {
            et(e, a, f);
          }
      }
    } catch (f) {
      et(e, e.return, f);
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
var L6 = Math.ceil, Cu = kr.ReactCurrentDispatcher, P0 = kr.ReactCurrentOwner, kn = kr.ReactCurrentBatchConfig, Pe = 0, Ct = null, at = null, Pt = 0, sn = 0, Rs = li(0), pt = 0, pl = null, Gi = 0, ju = 0, T0 = 0, $o = null, Jt = null, N0 = 0, Hs = 1 / 0, pr = null, xu = !1, Nh = null, ei = null, Da = !1, Qr = null, ku = 0, qo = 0, Rh = null, Za = -1, ba = 0;
function Vt() {
  return Pe & 6 ? it() : Za !== -1 ? Za : Za = it();
}
function ti(t) {
  return t.mode & 1 ? Pe & 2 && Pt !== 0 ? Pt & -Pt : g6.transition !== null ? (ba === 0 && (ba = xm()), ba) : (t = Le, t !== 0 || (t = window.event, t = t === void 0 ? 16 : Fm(t.type)), t) : 1;
}
function Gn(t, e, n, r) {
  if (50 < qo) throw qo = 0, Rh = null, Error(W(185));
  _l(t, n, r), (!(Pe & 2) || t !== Ct) && (t === Ct && (!(Pe & 2) && (ju |= n), pt === 4 && Yr(t, Pt)), tn(t, r), n === 1 && Pe === 0 && !(e.mode & 1) && (Hs = it() + 500, Gu && ai()));
}
function tn(t, e) {
  var n = t.callbackNode;
  gv(t, e);
  var r = lu(t, t === Ct ? Pt : 0);
  if (r === 0) n !== null && eg(n), t.callbackNode = null, t.callbackPriority = 0;
  else if (e = r & -r, t.callbackPriority !== e) {
    if (n != null && eg(n), e === 1) t.tag === 0 ? p6(Yg.bind(null, t)) : $m(Yg.bind(null, t)), c6(function() {
      !(Pe & 6) && ai();
    }), n = null;
    else {
      switch (km(r)) {
        case 1:
          n = e0;
          break;
        case 4:
          n = wm;
          break;
        case 16:
          n = ou;
          break;
        case 536870912:
          n = Cm;
          break;
        default:
          n = ou;
      }
      n = X3(n, B3.bind(null, t));
    }
    t.callbackPriority = e, t.callbackNode = n;
  }
}
function B3(t, e) {
  if (Za = -1, ba = 0, Pe & 6) throw Error(W(327));
  var n = t.callbackNode;
  if (Ds() && t.callbackNode !== n) return null;
  var r = lu(t, t === Ct ? Pt : 0);
  if (r === 0) return null;
  if (r & 30 || r & t.expiredLanes || e) e = Eu(t, r);
  else {
    e = r;
    var o = Pe;
    Pe |= 2;
    var l = H3();
    (Ct !== t || Pt !== e) && (pr = null, Hs = it() + 500, Oi(t, e));
    do
      try {
        D6();
        break;
      } catch (c) {
        V3(t, c);
      }
    while (!0);
    h0(), Cu.current = l, Pe = o, at !== null ? e = 0 : (Ct = null, Pt = 0, e = pt);
  }
  if (e !== 0) {
    if (e === 2 && (o = nh(t), o !== 0 && (r = o, e = Fh(t, o))), e === 1) throw n = pl, Oi(t, 0), Yr(t, r), tn(t, it()), n;
    if (e === 6) Yr(t, r);
    else {
      if (o = t.current.alternate, !(r & 30) && !A6(o) && (e = Eu(t, r), e === 2 && (l = nh(t), l !== 0 && (r = l, e = Fh(t, l))), e === 1)) throw n = pl, Oi(t, 0), Yr(t, r), tn(t, it()), n;
      switch (t.finishedWork = o, t.finishedLanes = r, e) {
        case 0:
        case 1:
          throw Error(W(345));
        case 2:
          Ri(t, Jt, pr);
          break;
        case 3:
          if (Yr(t, r), (r & 130023424) === r && (e = N0 + 500 - it(), 10 < e)) {
            if (lu(t, 0) !== 0) break;
            if (o = t.suspendedLanes, (o & r) !== r) {
              Vt(), t.pingedLanes |= t.suspendedLanes & o;
              break;
            }
            t.timeoutHandle = ch(Ri.bind(null, t, Jt, pr), e);
            break;
          }
          Ri(t, Jt, pr);
          break;
        case 4:
          if (Yr(t, r), (r & 4194240) === r) break;
          for (e = t.eventTimes, o = -1; 0 < r; ) {
            var a = 31 - Un(r);
            l = 1 << a, a = e[a], a > o && (o = a), r &= ~l;
          }
          if (r = o, r = it() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * L6(r / 1960)) - r, 10 < r) {
            t.timeoutHandle = ch(Ri.bind(null, t, Jt, pr), r);
            break;
          }
          Ri(t, Jt, pr);
          break;
        case 5:
          Ri(t, Jt, pr);
          break;
        default:
          throw Error(W(329));
      }
    }
  }
  return tn(t, it()), t.callbackNode === n ? B3.bind(null, t) : null;
}
function Fh(t, e) {
  var n = $o;
  return t.current.memoizedState.isDehydrated && (Oi(t, e).flags |= 256), t = Eu(t, e), t !== 2 && (e = Jt, Jt = n, e !== null && Mh(e)), t;
}
function Mh(t) {
  Jt === null ? Jt = t : Jt.push.apply(Jt, t);
}
function A6(t) {
  for (var e = t; ; ) {
    if (e.flags & 16384) {
      var n = e.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var o = n[r], l = o.getSnapshot;
        o = o.value;
        try {
          if (!Vn(l(), o)) return !1;
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
function Yr(t, e) {
  for (e &= ~T0, e &= ~ju, t.suspendedLanes |= e, t.pingedLanes &= ~e, t = t.expirationTimes; 0 < e; ) {
    var n = 31 - Un(e), r = 1 << n;
    t[n] = -1, e &= ~r;
  }
}
function Yg(t) {
  if (Pe & 6) throw Error(W(327));
  Ds();
  var e = lu(t, 0);
  if (!(e & 1)) return tn(t, it()), null;
  var n = Eu(t, e);
  if (t.tag !== 0 && n === 2) {
    var r = nh(t);
    r !== 0 && (e = r, n = Fh(t, r));
  }
  if (n === 1) throw n = pl, Oi(t, 0), Yr(t, e), tn(t, it()), n;
  if (n === 6) throw Error(W(345));
  return t.finishedWork = t.current.alternate, t.finishedLanes = e, Ri(t, Jt, pr), tn(t, it()), null;
}
function R0(t, e) {
  var n = Pe;
  Pe |= 1;
  try {
    return t(e);
  } finally {
    Pe = n, Pe === 0 && (Hs = it() + 500, Gu && ai());
  }
}
function Bi(t) {
  Qr !== null && Qr.tag === 0 && !(Pe & 6) && Ds();
  var e = Pe;
  Pe |= 1;
  var n = kn.transition, r = Le;
  try {
    if (kn.transition = null, Le = 1, t) return t();
  } finally {
    Le = r, kn.transition = n, Pe = e, !(Pe & 6) && ai();
  }
}
function F0() {
  sn = Rs.current, je(Rs);
}
function Oi(t, e) {
  t.finishedWork = null, t.finishedLanes = 0;
  var n = t.timeoutHandle;
  if (n !== -1 && (t.timeoutHandle = -1, u6(n)), at !== null) for (n = at.return; n !== null; ) {
    var r = n;
    switch (c0(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && fu();
        break;
      case 3:
        Bs(), je(bt), je(It), _0();
        break;
      case 5:
        v0(r);
        break;
      case 4:
        Bs();
        break;
      case 13:
        je(qe);
        break;
      case 19:
        je(qe);
        break;
      case 10:
        p0(r.type._context);
        break;
      case 22:
      case 23:
        F0();
    }
    n = n.return;
  }
  if (Ct = t, at = t = ni(t.current, null), Pt = sn = e, pt = 0, pl = null, T0 = ju = Gi = 0, Jt = $o = null, Li !== null) {
    for (e = 0; e < Li.length; e++) if (n = Li[e], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var o = r.next, l = n.pending;
      if (l !== null) {
        var a = l.next;
        l.next = o, r.next = a;
      }
      n.pending = r;
    }
    Li = null;
  }
  return t;
}
function V3(t, e) {
  do {
    var n = at;
    try {
      if (h0(), $a.current = wu, Su) {
        for (var r = Je.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        Su = !1;
      }
      if (Ui = 0, wt = ht = Je = null, Xo = !1, dl = 0, P0.current = null, n === null || n.return === null) {
        pt = 1, pl = e, at = null;
        break;
      }
      e: {
        var l = t, a = n.return, c = n, f = e;
        if (e = Pt, c.flags |= 32768, f !== null && typeof f == "object" && typeof f.then == "function") {
          var g = f, y = c, x = y.tag;
          if (!(y.mode & 1) && (x === 0 || x === 11 || x === 15)) {
            var S = y.alternate;
            S ? (y.updateQueue = S.updateQueue, y.memoizedState = S.memoizedState, y.lanes = S.lanes) : (y.updateQueue = null, y.memoizedState = null);
          }
          var C = Ag(a);
          if (C !== null) {
            C.flags &= -257, Og(C, a, c, l, e), C.mode & 1 && Lg(l, g, e), e = C, f = g;
            var v = e.updateQueue;
            if (v === null) {
              var P = /* @__PURE__ */ new Set();
              P.add(f), e.updateQueue = P;
            } else v.add(f);
            break e;
          } else {
            if (!(e & 1)) {
              Lg(l, g, e), M0();
              break e;
            }
            f = Error(W(426));
          }
        } else if (Ye && c.mode & 1) {
          var R = Ag(a);
          if (R !== null) {
            !(R.flags & 65536) && (R.flags |= 256), Og(R, a, c, l, e), d0(Vs(f, c));
            break e;
          }
        }
        l = f = Vs(f, c), pt !== 4 && (pt = 2), $o === null ? $o = [l] : $o.push(l), l = a;
        do {
          switch (l.tag) {
            case 3:
              l.flags |= 65536, e &= -e, l.lanes |= e;
              var k = k3(l, f, e);
              Pg(l, k);
              break e;
            case 1:
              c = f;
              var w = l.type, p = l.stateNode;
              if (!(l.flags & 128) && (typeof w.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (ei === null || !ei.has(p)))) {
                l.flags |= 65536, e &= -e, l.lanes |= e;
                var _ = E3(l, c, e);
                Pg(l, _);
                break e;
              }
          }
          l = l.return;
        } while (l !== null);
      }
      W3(n);
    } catch (N) {
      e = N, at === n && n !== null && (at = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function H3() {
  var t = Cu.current;
  return Cu.current = wu, t === null ? wu : t;
}
function M0() {
  (pt === 0 || pt === 3 || pt === 2) && (pt = 4), Ct === null || !(Gi & 268435455) && !(ju & 268435455) || Yr(Ct, Pt);
}
function Eu(t, e) {
  var n = Pe;
  Pe |= 2;
  var r = H3();
  (Ct !== t || Pt !== e) && (pr = null, Oi(t, e));
  do
    try {
      O6();
      break;
    } catch (o) {
      V3(t, o);
    }
  while (!0);
  if (h0(), Pe = n, Cu.current = r, at !== null) throw Error(W(261));
  return Ct = null, Pt = 0, pt;
}
function O6() {
  for (; at !== null; ) j3(at);
}
function D6() {
  for (; at !== null && !ov(); ) j3(at);
}
function j3(t) {
  var e = Y3(t.alternate, t, sn);
  t.memoizedProps = t.pendingProps, e === null ? W3(t) : at = e, P0.current = null;
}
function W3(t) {
  var e = t;
  do {
    var n = e.alternate;
    if (t = e.return, e.flags & 32768) {
      if (n = N6(n, e), n !== null) {
        n.flags &= 32767, at = n;
        return;
      }
      if (t !== null) t.flags |= 32768, t.subtreeFlags = 0, t.deletions = null;
      else {
        pt = 6, at = null;
        return;
      }
    } else if (n = T6(n, e, sn), n !== null) {
      at = n;
      return;
    }
    if (e = e.sibling, e !== null) {
      at = e;
      return;
    }
    at = e = t;
  } while (e !== null);
  pt === 0 && (pt = 5);
}
function Ri(t, e, n) {
  var r = Le, o = kn.transition;
  try {
    kn.transition = null, Le = 1, I6(t, e, n, r);
  } finally {
    kn.transition = o, Le = r;
  }
  return null;
}
function I6(t, e, n, r) {
  do
    Ds();
  while (Qr !== null);
  if (Pe & 6) throw Error(W(327));
  n = t.finishedWork;
  var o = t.finishedLanes;
  if (n === null) return null;
  if (t.finishedWork = null, t.finishedLanes = 0, n === t.current) throw Error(W(177));
  t.callbackNode = null, t.callbackPriority = 0;
  var l = n.lanes | n.childLanes;
  if (mv(t, l), t === Ct && (at = Ct = null, Pt = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Da || (Da = !0, X3(ou, function() {
    return Ds(), null;
  })), l = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || l) {
    l = kn.transition, kn.transition = null;
    var a = Le;
    Le = 1;
    var c = Pe;
    Pe |= 4, P0.current = null, F6(t, n), U3(n, t), n6(ah), au = !!lh, ah = lh = null, t.current = n, M6(n), lv(), Pe = c, Le = a, kn.transition = l;
  } else t.current = n;
  if (Da && (Da = !1, Qr = t, ku = o), l = t.pendingLanes, l === 0 && (ei = null), cv(n.stateNode), tn(t, it()), e !== null) for (r = t.onRecoverableError, n = 0; n < e.length; n++) o = e[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (xu) throw xu = !1, t = Nh, Nh = null, t;
  return ku & 1 && t.tag !== 0 && Ds(), l = t.pendingLanes, l & 1 ? t === Rh ? qo++ : (qo = 0, Rh = t) : qo = 0, ai(), null;
}
function Ds() {
  if (Qr !== null) {
    var t = km(ku), e = kn.transition, n = Le;
    try {
      if (kn.transition = null, Le = 16 > t ? 16 : t, Qr === null) var r = !1;
      else {
        if (t = Qr, Qr = null, ku = 0, Pe & 6) throw Error(W(331));
        var o = Pe;
        for (Pe |= 4, ne = t.current; ne !== null; ) {
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
                      Qo(8, y, l);
                  }
                  var x = y.child;
                  if (x !== null) x.return = y, ne = x;
                  else for (; ne !== null; ) {
                    y = ne;
                    var S = y.sibling, C = y.return;
                    if (D3(y), y === g) {
                      ne = null;
                      break;
                    }
                    if (S !== null) {
                      S.return = C, ne = S;
                      break;
                    }
                    ne = C;
                  }
                }
              }
              var v = l.alternate;
              if (v !== null) {
                var P = v.child;
                if (P !== null) {
                  v.child = null;
                  do {
                    var R = P.sibling;
                    P.sibling = null, P = R;
                  } while (P !== null);
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
                Qo(9, l, l.return);
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
                  Hu(9, c);
              }
            } catch (N) {
              et(c, c.return, N);
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
        if (Pe = o, ai(), tr && typeof tr.onPostCommitFiberRoot == "function") try {
          tr.onPostCommitFiberRoot(Ou, t);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      Le = n, kn.transition = e;
    }
  }
  return !1;
}
function Xg(t, e, n) {
  e = Vs(n, e), e = k3(t, e, 1), t = br(t, e, 1), e = Vt(), t !== null && (_l(t, 1, e), tn(t, e));
}
function et(t, e, n) {
  if (t.tag === 3) Xg(t, t, n);
  else for (; e !== null; ) {
    if (e.tag === 3) {
      Xg(e, t, n);
      break;
    } else if (e.tag === 1) {
      var r = e.stateNode;
      if (typeof e.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (ei === null || !ei.has(r))) {
        t = Vs(n, t), t = E3(e, t, 1), e = br(e, t, 1), t = Vt(), e !== null && (_l(e, 1, t), tn(e, t));
        break;
      }
    }
    e = e.return;
  }
}
function z6(t, e, n) {
  var r = t.pingCache;
  r !== null && r.delete(e), e = Vt(), t.pingedLanes |= t.suspendedLanes & n, Ct === t && (Pt & n) === n && (pt === 4 || pt === 3 && (Pt & 130023424) === Pt && 500 > it() - N0 ? Oi(t, 0) : T0 |= n), tn(t, e);
}
function K3(t, e) {
  e === 0 && (t.mode & 1 ? (e = Ea, Ea <<= 1, !(Ea & 130023424) && (Ea = 4194304)) : e = 1);
  var n = Vt();
  t = Cr(t, e), t !== null && (_l(t, e, n), tn(t, n));
}
function U6(t) {
  var e = t.memoizedState, n = 0;
  e !== null && (n = e.retryLane), K3(t, n);
}
function G6(t, e) {
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
      throw Error(W(314));
  }
  r !== null && r.delete(e), K3(t, n);
}
var Y3;
Y3 = function(t, e, n) {
  if (t !== null) if (t.memoizedProps !== e.pendingProps || bt.current) Zt = !0;
  else {
    if (!(t.lanes & n) && !(e.flags & 128)) return Zt = !1, P6(t, e, n);
    Zt = !!(t.flags & 131072);
  }
  else Zt = !1, Ye && e.flags & 1048576 && qm(e, gu, e.index);
  switch (e.lanes = 0, e.tag) {
    case 2:
      var r = e.type;
      Ja(t, e), t = e.pendingProps;
      var o = zs(e, It.current);
      Os(e, n), o = w0(null, e, r, t, o, n);
      var l = C0();
      return e.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (e.tag = 1, e.memoizedState = null, e.updateQueue = null, en(r) ? (l = !0, hu(e)) : l = !1, e.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, m0(e), o.updater = Vu, e.stateNode = o, o._reactInternals = e, yh(e, r, t, n), e = Sh(null, e, r, !0, l, n)) : (e.tag = 0, Ye && l && u0(e), Gt(null, e, o, n), e = e.child), e;
    case 16:
      r = e.elementType;
      e: {
        switch (Ja(t, e), t = e.pendingProps, o = r._init, r = o(r._payload), e.type = r, o = e.tag = V6(r), t = Dn(r, t), o) {
          case 0:
            e = _h(null, e, r, t, n);
            break e;
          case 1:
            e = zg(null, e, r, t, n);
            break e;
          case 11:
            e = Dg(null, e, r, t, n);
            break e;
          case 14:
            e = Ig(null, e, r, Dn(r.type, t), n);
            break e;
        }
        throw Error(W(
          306,
          r,
          ""
        ));
      }
      return e;
    case 0:
      return r = e.type, o = e.pendingProps, o = e.elementType === r ? o : Dn(r, o), _h(t, e, r, o, n);
    case 1:
      return r = e.type, o = e.pendingProps, o = e.elementType === r ? o : Dn(r, o), zg(t, e, r, o, n);
    case 3:
      e: {
        if (R3(e), t === null) throw Error(W(387));
        r = e.pendingProps, l = e.memoizedState, o = l.element, n3(t, e), vu(e, r, null, n);
        var a = e.memoizedState;
        if (r = a.element, l.isDehydrated) if (l = { element: r, isDehydrated: !1, cache: a.cache, pendingSuspenseBoundaries: a.pendingSuspenseBoundaries, transitions: a.transitions }, e.updateQueue.baseState = l, e.memoizedState = l, e.flags & 256) {
          o = Vs(Error(W(423)), e), e = Ug(t, e, r, n, o);
          break e;
        } else if (r !== o) {
          o = Vs(Error(W(424)), e), e = Ug(t, e, r, n, o);
          break e;
        } else for (on = Zr(e.stateNode.containerInfo.firstChild), ln = e, Ye = !0, zn = null, n = e3(e, null, r, n), e.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Us(), r === o) {
            e = xr(t, e, n);
            break e;
          }
          Gt(t, e, r, n);
        }
        e = e.child;
      }
      return e;
    case 5:
      return r3(e), t === null && ph(e), r = e.type, o = e.pendingProps, l = t !== null ? t.memoizedProps : null, a = o.children, uh(r, o) ? a = null : l !== null && uh(r, l) && (e.flags |= 32), N3(t, e), Gt(t, e, a, n), e.child;
    case 6:
      return t === null && ph(e), null;
    case 13:
      return F3(t, e, n);
    case 4:
      return y0(e, e.stateNode.containerInfo), r = e.pendingProps, t === null ? e.child = Gs(e, null, r, n) : Gt(t, e, r, n), e.child;
    case 11:
      return r = e.type, o = e.pendingProps, o = e.elementType === r ? o : Dn(r, o), Dg(t, e, r, o, n);
    case 7:
      return Gt(t, e, e.pendingProps, n), e.child;
    case 8:
      return Gt(t, e, e.pendingProps.children, n), e.child;
    case 12:
      return Gt(t, e, e.pendingProps.children, n), e.child;
    case 10:
      e: {
        if (r = e.type._context, o = e.pendingProps, l = e.memoizedProps, a = o.value, Ue(mu, r._currentValue), r._currentValue = a, l !== null) if (Vn(l.value, a)) {
          if (l.children === o.children && !bt.current) {
            e = xr(t, e, n);
            break e;
          }
        } else for (l = e.child, l !== null && (l.return = e); l !== null; ) {
          var c = l.dependencies;
          if (c !== null) {
            a = l.child;
            for (var f = c.firstContext; f !== null; ) {
              if (f.context === r) {
                if (l.tag === 1) {
                  f = vr(-1, n & -n), f.tag = 2;
                  var g = l.updateQueue;
                  if (g !== null) {
                    g = g.shared;
                    var y = g.pending;
                    y === null ? f.next = f : (f.next = y.next, y.next = f), g.pending = f;
                  }
                }
                l.lanes |= n, f = l.alternate, f !== null && (f.lanes |= n), gh(
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
            if (a = l.return, a === null) throw Error(W(341));
            a.lanes |= n, c = a.alternate, c !== null && (c.lanes |= n), gh(a, n, e), a = l.sibling;
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
        Gt(t, e, o.children, n), e = e.child;
      }
      return e;
    case 9:
      return o = e.type, r = e.pendingProps.children, Os(e, n), o = En(o), r = r(o), e.flags |= 1, Gt(t, e, r, n), e.child;
    case 14:
      return r = e.type, o = Dn(r, e.pendingProps), o = Dn(r.type, o), Ig(t, e, r, o, n);
    case 15:
      return P3(t, e, e.type, e.pendingProps, n);
    case 17:
      return r = e.type, o = e.pendingProps, o = e.elementType === r ? o : Dn(r, o), Ja(t, e), e.tag = 1, en(r) ? (t = !0, hu(e)) : t = !1, Os(e, n), x3(e, r, o), yh(e, r, o, n), Sh(null, e, r, !0, t, n);
    case 19:
      return M3(t, e, n);
    case 22:
      return T3(t, e, n);
  }
  throw Error(W(156, e.tag));
};
function X3(t, e) {
  return Sm(t, e);
}
function B6(t, e, n, r) {
  this.tag = t, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function xn(t, e, n, r) {
  return new B6(t, e, n, r);
}
function L0(t) {
  return t = t.prototype, !(!t || !t.isReactComponent);
}
function V6(t) {
  if (typeof t == "function") return L0(t) ? 1 : 0;
  if (t != null) {
    if (t = t.$$typeof, t === Jh) return 11;
    if (t === Zh) return 14;
  }
  return 2;
}
function ni(t, e) {
  var n = t.alternate;
  return n === null ? (n = xn(t.tag, e, t.key, t.mode), n.elementType = t.elementType, n.type = t.type, n.stateNode = t.stateNode, n.alternate = t, t.alternate = n) : (n.pendingProps = e, n.type = t.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = t.flags & 14680064, n.childLanes = t.childLanes, n.lanes = t.lanes, n.child = t.child, n.memoizedProps = t.memoizedProps, n.memoizedState = t.memoizedState, n.updateQueue = t.updateQueue, e = t.dependencies, n.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }, n.sibling = t.sibling, n.index = t.index, n.ref = t.ref, n;
}
function eu(t, e, n, r, o, l) {
  var a = 2;
  if (r = t, typeof t == "function") L0(t) && (a = 1);
  else if (typeof t == "string") a = 5;
  else e: switch (t) {
    case _s:
      return Di(n.children, o, l, e);
    case qh:
      a = 8, o |= 8;
      break;
    case Vf:
      return t = xn(12, n, e, o | 2), t.elementType = Vf, t.lanes = l, t;
    case Hf:
      return t = xn(13, n, e, o), t.elementType = Hf, t.lanes = l, t;
    case jf:
      return t = xn(19, n, e, o), t.elementType = jf, t.lanes = l, t;
    case rm:
      return Wu(n, o, l, e);
    default:
      if (typeof t == "object" && t !== null) switch (t.$$typeof) {
        case tm:
          a = 10;
          break e;
        case nm:
          a = 9;
          break e;
        case Jh:
          a = 11;
          break e;
        case Zh:
          a = 14;
          break e;
        case jr:
          a = 16, r = null;
          break e;
      }
      throw Error(W(130, t == null ? t : typeof t, ""));
  }
  return e = xn(a, n, e, o), e.elementType = t, e.type = r, e.lanes = l, e;
}
function Di(t, e, n, r) {
  return t = xn(7, t, r, e), t.lanes = n, t;
}
function Wu(t, e, n, r) {
  return t = xn(22, t, r, e), t.elementType = rm, t.lanes = n, t.stateNode = { isHidden: !1 }, t;
}
function Pf(t, e, n) {
  return t = xn(6, t, null, e), t.lanes = n, t;
}
function Tf(t, e, n) {
  return e = xn(4, t.children !== null ? t.children : [], t.key, e), e.lanes = n, e.stateNode = { containerInfo: t.containerInfo, pendingChildren: null, implementation: t.implementation }, e;
}
function H6(t, e, n, r, o) {
  this.tag = e, this.containerInfo = t, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = lf(0), this.expirationTimes = lf(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = lf(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function A0(t, e, n, r, o, l, a, c, f) {
  return t = new H6(t, e, n, c, f), e === 1 ? (e = 1, l === !0 && (e |= 8)) : e = 0, l = xn(3, null, null, e), t.current = l, l.stateNode = t, l.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, m0(l), t;
}
function j6(t, e, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: vs, key: r == null ? null : "" + r, children: t, containerInfo: e, implementation: n };
}
function Q3(t) {
  if (!t) return ii;
  t = t._reactInternals;
  e: {
    if (Hi(t) !== t || t.tag !== 1) throw Error(W(170));
    var e = t;
    do {
      switch (e.tag) {
        case 3:
          e = e.stateNode.context;
          break e;
        case 1:
          if (en(e.type)) {
            e = e.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      e = e.return;
    } while (e !== null);
    throw Error(W(171));
  }
  if (t.tag === 1) {
    var n = t.type;
    if (en(n)) return Qm(t, n, e);
  }
  return e;
}
function $3(t, e, n, r, o, l, a, c, f) {
  return t = A0(n, r, !0, t, o, l, a, c, f), t.context = Q3(null), n = t.current, r = Vt(), o = ti(n), l = vr(r, o), l.callback = e ?? null, br(n, l, o), t.current.lanes = o, _l(t, o, r), tn(t, r), t;
}
function Ku(t, e, n, r) {
  var o = e.current, l = Vt(), a = ti(o);
  return n = Q3(n), e.context === null ? e.context = n : e.pendingContext = n, e = vr(l, a), e.payload = { element: t }, r = r === void 0 ? null : r, r !== null && (e.callback = r), t = br(o, e, a), t !== null && (Gn(t, o, a, l), Qa(t, o, a)), a;
}
function Pu(t) {
  if (t = t.current, !t.child) return null;
  switch (t.child.tag) {
    case 5:
      return t.child.stateNode;
    default:
      return t.child.stateNode;
  }
}
function Qg(t, e) {
  if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
    var n = t.retryLane;
    t.retryLane = n !== 0 && n < e ? n : e;
  }
}
function O0(t, e) {
  Qg(t, e), (t = t.alternate) && Qg(t, e);
}
function W6() {
  return null;
}
var q3 = typeof reportError == "function" ? reportError : function(t) {
  console.error(t);
};
function D0(t) {
  this._internalRoot = t;
}
Yu.prototype.render = D0.prototype.render = function(t) {
  var e = this._internalRoot;
  if (e === null) throw Error(W(409));
  Ku(t, e, null, null);
};
Yu.prototype.unmount = D0.prototype.unmount = function() {
  var t = this._internalRoot;
  if (t !== null) {
    this._internalRoot = null;
    var e = t.containerInfo;
    Bi(function() {
      Ku(null, t, null, null);
    }), e[wr] = null;
  }
};
function Yu(t) {
  this._internalRoot = t;
}
Yu.prototype.unstable_scheduleHydration = function(t) {
  if (t) {
    var e = Tm();
    t = { blockedOn: null, target: t, priority: e };
    for (var n = 0; n < Kr.length && e !== 0 && e < Kr[n].priority; n++) ;
    Kr.splice(n, 0, t), n === 0 && Rm(t);
  }
};
function I0(t) {
  return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
}
function Xu(t) {
  return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11 && (t.nodeType !== 8 || t.nodeValue !== " react-mount-point-unstable "));
}
function $g() {
}
function K6(t, e, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var l = r;
      r = function() {
        var g = Pu(a);
        l.call(g);
      };
    }
    var a = $3(e, r, t, 0, null, !1, !1, "", $g);
    return t._reactRootContainer = a, t[wr] = a.current, ol(t.nodeType === 8 ? t.parentNode : t), Bi(), a;
  }
  for (; o = t.lastChild; ) t.removeChild(o);
  if (typeof r == "function") {
    var c = r;
    r = function() {
      var g = Pu(f);
      c.call(g);
    };
  }
  var f = A0(t, 0, !1, null, null, !1, !1, "", $g);
  return t._reactRootContainer = f, t[wr] = f.current, ol(t.nodeType === 8 ? t.parentNode : t), Bi(function() {
    Ku(e, f, n, r);
  }), f;
}
function Qu(t, e, n, r, o) {
  var l = n._reactRootContainer;
  if (l) {
    var a = l;
    if (typeof o == "function") {
      var c = o;
      o = function() {
        var f = Pu(a);
        c.call(f);
      };
    }
    Ku(e, a, t, o);
  } else a = K6(n, e, t, o, r);
  return Pu(a);
}
Em = function(t) {
  switch (t.tag) {
    case 3:
      var e = t.stateNode;
      if (e.current.memoizedState.isDehydrated) {
        var n = Uo(e.pendingLanes);
        n !== 0 && (t0(e, n | 1), tn(e, it()), !(Pe & 6) && (Hs = it() + 500, ai()));
      }
      break;
    case 13:
      Bi(function() {
        var r = Cr(t, 1);
        if (r !== null) {
          var o = Vt();
          Gn(r, t, 1, o);
        }
      }), O0(t, 1);
  }
};
n0 = function(t) {
  if (t.tag === 13) {
    var e = Cr(t, 134217728);
    if (e !== null) {
      var n = Vt();
      Gn(e, t, 134217728, n);
    }
    O0(t, 134217728);
  }
};
Pm = function(t) {
  if (t.tag === 13) {
    var e = ti(t), n = Cr(t, e);
    if (n !== null) {
      var r = Vt();
      Gn(n, t, e, r);
    }
    O0(t, e);
  }
};
Tm = function() {
  return Le;
};
Nm = function(t, e) {
  var n = Le;
  try {
    return Le = t, e();
  } finally {
    Le = n;
  }
};
bf = function(t, e, n) {
  switch (e) {
    case "input":
      if (Yf(t, n), e = n.name, n.type === "radio" && e != null) {
        for (n = t; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + e) + '][type="radio"]'), e = 0; e < n.length; e++) {
          var r = n[e];
          if (r !== t && r.form === t.form) {
            var o = Uu(r);
            if (!o) throw Error(W(90));
            sm(r), Yf(r, o);
          }
        }
      }
      break;
    case "textarea":
      lm(t, n);
      break;
    case "select":
      e = n.value, e != null && Fs(t, !!n.multiple, e, !1);
  }
};
pm = R0;
gm = Bi;
var Y6 = { usingClientEntryPoint: !1, Events: [wl, xs, Uu, fm, hm, R0] }, Mo = { findFiberByHostInstance: Mi, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, X6 = { bundleType: Mo.bundleType, version: Mo.version, rendererPackageName: Mo.rendererPackageName, rendererConfig: Mo.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: kr.ReactCurrentDispatcher, findHostInstanceByFiber: function(t) {
  return t = vm(t), t === null ? null : t.stateNode;
}, findFiberByHostInstance: Mo.findFiberByHostInstance || W6, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ia = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ia.isDisabled && Ia.supportsFiber) try {
    Ou = Ia.inject(X6), tr = Ia;
  } catch {
  }
}
un.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Y6;
un.createPortal = function(t, e) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!I0(e)) throw Error(W(200));
  return j6(t, e, null, n);
};
un.createRoot = function(t, e) {
  if (!I0(t)) throw Error(W(299));
  var n = !1, r = "", o = q3;
  return e != null && (e.unstable_strictMode === !0 && (n = !0), e.identifierPrefix !== void 0 && (r = e.identifierPrefix), e.onRecoverableError !== void 0 && (o = e.onRecoverableError)), e = A0(t, 1, !1, null, null, n, !1, r, o), t[wr] = e.current, ol(t.nodeType === 8 ? t.parentNode : t), new D0(e);
};
un.findDOMNode = function(t) {
  if (t == null) return null;
  if (t.nodeType === 1) return t;
  var e = t._reactInternals;
  if (e === void 0)
    throw typeof t.render == "function" ? Error(W(188)) : (t = Object.keys(t).join(","), Error(W(268, t)));
  return t = vm(e), t = t === null ? null : t.stateNode, t;
};
un.flushSync = function(t) {
  return Bi(t);
};
un.hydrate = function(t, e, n) {
  if (!Xu(e)) throw Error(W(200));
  return Qu(null, t, e, !0, n);
};
un.hydrateRoot = function(t, e, n) {
  if (!I0(t)) throw Error(W(405));
  var r = n != null && n.hydratedSources || null, o = !1, l = "", a = q3;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (l = n.identifierPrefix), n.onRecoverableError !== void 0 && (a = n.onRecoverableError)), e = $3(e, null, t, 1, n ?? null, o, !1, l, a), t[wr] = e.current, ol(t), r) for (t = 0; t < r.length; t++) n = r[t], o = n._getVersion, o = o(n._source), e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [n, o] : e.mutableSourceEagerHydrationData.push(
    n,
    o
  );
  return new Yu(e);
};
un.render = function(t, e, n) {
  if (!Xu(e)) throw Error(W(200));
  return Qu(null, t, e, !1, n);
};
un.unmountComponentAtNode = function(t) {
  if (!Xu(t)) throw Error(W(40));
  return t._reactRootContainer ? (Bi(function() {
    Qu(null, null, t, !1, function() {
      t._reactRootContainer = null, t[wr] = null;
    });
  }), !0) : !1;
};
un.unstable_batchedUpdates = R0;
un.unstable_renderSubtreeIntoContainer = function(t, e, n, r) {
  if (!Xu(n)) throw Error(W(200));
  if (t == null || t._reactInternals === void 0) throw Error(W(38));
  return Qu(t, e, n, !1, r);
};
un.version = "18.3.1-next-f1338f8080-20240426";
function J3() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(J3);
    } catch (t) {
      console.error(t);
    }
}
J3(), J2.exports = un;
var Q6 = J2.exports, Z3, qg = Q6;
Z3 = qg.createRoot, qg.hydrateRoot;
var b3 = { exports: {} }, $u = {}, Tu = {}, ve = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t._registerNode = t.Konva = t.glob = void 0;
  const e = Math.PI / 180;
  function n() {
    return typeof window < "u" && ({}.toString.call(window) === "[object Window]" || {}.toString.call(window) === "[object global]");
  }
  t.glob = typeof Vp < "u" ? Vp : typeof window < "u" ? window : typeof WorkerGlobalScope < "u" ? self : {}, t.Konva = {
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
})(ve);
var be = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.Util = t.Transform = void 0;
  const e = ve;
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
      const N = this.m;
      return {
        x: N[0] * _.x + N[2] * _.y + N[4],
        y: N[1] * _.x + N[3] * _.y + N[5]
      };
    }
    translate(_, N) {
      return this.m[4] += this.m[0] * _ + this.m[2] * N, this.m[5] += this.m[1] * _ + this.m[3] * N, this;
    }
    scale(_, N) {
      return this.m[0] *= _, this.m[1] *= _, this.m[2] *= N, this.m[3] *= N, this;
    }
    rotate(_) {
      const N = Math.cos(_), F = Math.sin(_), L = this.m[0] * N + this.m[2] * F, E = this.m[1] * N + this.m[3] * F, I = this.m[0] * -F + this.m[2] * N, M = this.m[1] * -F + this.m[3] * N;
      return this.m[0] = L, this.m[1] = E, this.m[2] = I, this.m[3] = M, this;
    }
    getTranslation() {
      return {
        x: this.m[4],
        y: this.m[5]
      };
    }
    skew(_, N) {
      const F = this.m[0] + this.m[2] * N, L = this.m[1] + this.m[3] * N, E = this.m[2] + this.m[0] * _, I = this.m[3] + this.m[1] * _;
      return this.m[0] = F, this.m[1] = L, this.m[2] = E, this.m[3] = I, this;
    }
    multiply(_) {
      const N = this.m[0] * _.m[0] + this.m[2] * _.m[1], F = this.m[1] * _.m[0] + this.m[3] * _.m[1], L = this.m[0] * _.m[2] + this.m[2] * _.m[3], E = this.m[1] * _.m[2] + this.m[3] * _.m[3], I = this.m[0] * _.m[4] + this.m[2] * _.m[5] + this.m[4], M = this.m[1] * _.m[4] + this.m[3] * _.m[5] + this.m[5];
      return this.m[0] = N, this.m[1] = F, this.m[2] = L, this.m[3] = E, this.m[4] = I, this.m[5] = M, this;
    }
    invert() {
      const _ = 1 / (this.m[0] * this.m[3] - this.m[1] * this.m[2]), N = this.m[3] * _, F = -this.m[1] * _, L = -this.m[2] * _, E = this.m[0] * _, I = _ * (this.m[2] * this.m[5] - this.m[3] * this.m[4]), M = _ * (this.m[1] * this.m[4] - this.m[0] * this.m[5]);
      return this.m[0] = N, this.m[1] = F, this.m[2] = L, this.m[3] = E, this.m[4] = I, this.m[5] = M, this;
    }
    getMatrix() {
      return this.m;
    }
    decompose() {
      const _ = this.m[0], N = this.m[1], F = this.m[2], L = this.m[3], E = this.m[4], I = this.m[5], M = _ * L - N * F, B = {
        x: E,
        y: I,
        rotation: 0,
        scaleX: 0,
        scaleY: 0,
        skewX: 0,
        skewY: 0
      };
      if (_ != 0 || N != 0) {
        const H = Math.sqrt(_ * _ + N * N);
        B.rotation = N > 0 ? Math.acos(_ / H) : -Math.acos(_ / H), B.scaleX = H, B.scaleY = M / H, B.skewX = (_ * F + N * L) / M, B.skewY = 0;
      } else if (F != 0 || L != 0) {
        const H = Math.sqrt(F * F + L * L);
        B.rotation = Math.PI / 2 - (L > 0 ? Math.acos(-F / H) : -Math.acos(F / H)), B.scaleX = M / H, B.scaleY = H, B.skewX = 0, B.skewY = (_ * F + N * L) / M;
      }
      return B.rotation = t.Util._getRotation(B.rotation), B;
    }
  }
  t.Transform = n;
  const r = "[object Array]", o = "[object Number]", l = "[object String]", a = "[object Boolean]", c = Math.PI / 180, f = 180 / Math.PI, g = "#", y = "", x = "0", S = "Konva warning: ", C = "Konva error: ", v = "rgb(", P = {
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
        k = [], _.forEach(function(N) {
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
    _urlToImage(p, _) {
      const N = t.Util.createImageElement();
      N.onload = function() {
        _(N);
      }, N.src = p;
    },
    _rgbToHex(p, _, N) {
      return ((1 << 24) + (p << 16) + (_ << 8) + N).toString(16).slice(1);
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
        p = x + p;
      return g + p;
    },
    getRGB(p) {
      let _;
      return p in P ? (_ = P[p], {
        r: _[0],
        g: _[1],
        b: _[2]
      }) : p[0] === g ? this._hexToRgb(p.substring(1)) : p.substr(0, 4) === v ? (_ = R.exec(p.replace(/ /g, "")), {
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
      const _ = P[p.toLowerCase()];
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
        const _ = p.split(/ *, */).map((N, F) => N.slice(-1) === "%" ? F === 3 ? parseInt(N) / 100 : parseInt(N) / 100 * 255 : Number(N));
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
        const [_, ...N] = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(p), F = Number(N[0]) / 360, L = Number(N[1]) / 100, E = Number(N[2]) / 100;
        let I, M, B;
        if (L === 0)
          return B = E * 255, {
            r: Math.round(B),
            g: Math.round(B),
            b: Math.round(B),
            a: 1
          };
        E < 0.5 ? I = E * (1 + L) : I = E + L - E * L;
        const H = 2 * E - I, q = [0, 0, 0];
        for (let ie = 0; ie < 3; ie++)
          M = F + 1 / 3 * -(ie - 1), M < 0 && M++, M > 1 && M--, 6 * M < 1 ? B = H + (I - H) * 6 * M : 2 * M < 1 ? B = I : 3 * M < 2 ? B = H + (I - H) * (2 / 3 - M) * 6 : B = H, q[ie] = B * 255;
        return {
          r: Math.round(q[0]),
          g: Math.round(q[1]),
          b: Math.round(q[2]),
          a: 1
        };
      }
    },
    haveIntersection(p, _) {
      return !(_.x > p.x + p.width || _.x + _.width < p.x || _.y > p.y + p.height || _.y + _.height < p.y);
    },
    cloneObject(p) {
      const _ = {};
      for (const N in p)
        this._isPlainObject(p[N]) ? _[N] = this.cloneObject(p[N]) : this._isArray(p[N]) ? _[N] = this.cloneArray(p[N]) : _[N] = p[N];
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
      throw new Error(C + p);
    },
    error(p) {
      console.error(C + p);
    },
    warn(p) {
      e.Konva.showWarnings && console.warn(S + p);
    },
    each(p, _) {
      for (const N in p)
        _(N, p[N]);
    },
    _inRange(p, _, N) {
      return _ <= p && p < N;
    },
    _getProjectionToSegment(p, _, N, F, L, E) {
      let I, M, B;
      const H = (p - N) * (p - N) + (_ - F) * (_ - F);
      if (H == 0)
        I = p, M = _, B = (L - N) * (L - N) + (E - F) * (E - F);
      else {
        const q = ((L - p) * (N - p) + (E - _) * (F - _)) / H;
        q < 0 ? (I = p, M = _, B = (p - L) * (p - L) + (_ - E) * (_ - E)) : q > 1 ? (I = N, M = F, B = (N - L) * (N - L) + (F - E) * (F - E)) : (I = p + q * (N - p), M = _ + q * (F - _), B = (I - L) * (I - L) + (M - E) * (M - E));
      }
      return [I, M, B];
    },
    _getProjectionToLine(p, _, N) {
      const F = t.Util.cloneObject(p);
      let L = Number.MAX_VALUE;
      return _.forEach(function(E, I) {
        if (!N && I === _.length - 1)
          return;
        const M = _[(I + 1) % _.length], B = t.Util._getProjectionToSegment(E.x, E.y, M.x, M.y, p.x, p.y), H = B[0], q = B[1], ie = B[2];
        ie < L && (F.x = H, F.y = q, L = ie);
      }), F;
    },
    _prepareArrayForTween(p, _, N) {
      const F = [], L = [];
      if (p.length > _.length) {
        const I = _;
        _ = p, p = I;
      }
      for (let I = 0; I < p.length; I += 2)
        F.push({
          x: p[I],
          y: p[I + 1]
        });
      for (let I = 0; I < _.length; I += 2)
        L.push({
          x: _[I],
          y: _[I + 1]
        });
      const E = [];
      return L.forEach(function(I) {
        const M = t.Util._getProjectionToLine(I, F, N);
        E.push(M.x), E.push(M.y);
      }), E;
    },
    _prepareToStringify(p) {
      let _;
      p.visitedByCircularReferenceRemoval = !0;
      for (const N in p)
        if (p.hasOwnProperty(N) && p[N] && typeof p[N] == "object") {
          if (_ = Object.getOwnPropertyDescriptor(p, N), p[N].visitedByCircularReferenceRemoval || t.Util._isElement(p[N]))
            if (_.configurable)
              delete p[N];
            else
              return null;
          else if (t.Util._prepareToStringify(p[N]) === null)
            if (_.configurable)
              delete p[N];
            else
              return null;
        }
      return delete p.visitedByCircularReferenceRemoval, p;
    },
    _assign(p, _) {
      for (const N in _)
        p[N] = _[N];
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
    drawRoundedRectPath(p, _, N, F) {
      let L = 0, E = 0, I = 0, M = 0;
      typeof F == "number" ? L = E = I = M = Math.min(F, _ / 2, N / 2) : (L = Math.min(F[0] || 0, _ / 2, N / 2), E = Math.min(F[1] || 0, _ / 2, N / 2), M = Math.min(F[2] || 0, _ / 2, N / 2), I = Math.min(F[3] || 0, _ / 2, N / 2)), p.moveTo(L, 0), p.lineTo(_ - E, 0), p.arc(_ - E, E, E, Math.PI * 3 / 2, 0, !1), p.lineTo(_, N - M), p.arc(_ - M, N - M, M, 0, Math.PI / 2, !1), p.lineTo(I, N), p.arc(I, N - I, I, Math.PI / 2, Math.PI, !1), p.lineTo(0, L), p.arc(L, L, L, Math.PI, Math.PI * 3 / 2, !1);
    }
  };
})(be);
var Xe = {}, Bn = {}, _r = {};
Object.defineProperty(_r, "__esModule", { value: !0 });
_r.HitContext = _r.SceneContext = _r.Context = void 0;
const e4 = be, $6 = ve;
function q6(t) {
  const e = [], n = t.length, r = e4.Util;
  for (let o = 0; o < n; o++) {
    let l = t[o];
    r._isNumber(l) ? l = Math.round(l * 1e3) / 1e3 : r._isString(l) || (l = l + ""), e.push(l);
  }
  return e;
}
const Jg = ",", J6 = "(", Z6 = ")", b6 = "([", e8 = "])", t8 = ";", n8 = "()", r8 = "=", Zg = [
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
], i8 = [
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
], s8 = 100;
class qu {
  constructor(e) {
    this.canvas = e, $6.Konva.enableTrace && (this.traceArr = [], this._enableTrace());
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
      c = r[a], f = c.method, f ? (g = c.args, l += f, e ? l += n8 : e4.Util._isArray(g[0]) ? l += b6 + g.join(Jg) + e8 : (n && (g = g.map((y) => typeof y == "number" ? Math.floor(y) : y)), l += J6 + g.join(Jg) + Z6)) : (l += c.property, e || (l += r8 + c.val)), l += t8;
    return l;
  }
  clearTrace() {
    this.traceArr = [];
  }
  _trace(e) {
    let n = this.traceArr, r;
    n.push(e), r = n.length, r >= s8 && n.shift();
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
    const y = arguments, x = this._context;
    y.length === 3 ? x.drawImage(e, n, r) : y.length === 5 ? x.drawImage(e, n, r, o, l) : y.length === 9 && x.drawImage(e, n, r, o, l, a, c, f, g);
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
    let e = this, n = Zg.length, r = this.setAttr, o, l;
    const a = function(c) {
      let f = e[c], g;
      e[c] = function() {
        return l = q6(Array.prototype.slice.call(arguments, 0)), g = f.apply(e, arguments), e._trace({
          method: c,
          args: l
        }), g;
      };
    };
    for (o = 0; o < n; o++)
      a(Zg[o]);
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
_r.Context = qu;
i8.forEach(function(t) {
  Object.defineProperty(qu.prototype, t, {
    get() {
      return this._context[t];
    },
    set(e) {
      this._context[t] = e;
    }
  });
});
class o8 extends qu {
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
    }, f = e.getAbsoluteScale(), g = this.canvas.getPixelRatio(), y = f.x * g, x = f.y * g;
    this.setAttr("shadowColor", l), this.setAttr("shadowBlur", a * Math.min(Math.abs(y), Math.abs(x))), this.setAttr("shadowOffsetX", c.x * y), this.setAttr("shadowOffsetY", c.y * x);
  }
}
_r.SceneContext = o8;
class l8 extends qu {
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
_r.HitContext = l8;
Object.defineProperty(Bn, "__esModule", { value: !0 });
Bn.HitCanvas = Bn.SceneCanvas = Bn.Canvas = void 0;
const Nu = be, t4 = _r, n4 = ve;
let za;
function a8() {
  if (za)
    return za;
  const t = Nu.Util.createCanvasElement(), e = t.getContext("2d");
  return za = function() {
    const n = n4.Konva._global.devicePixelRatio || 1, r = e.webkitBackingStorePixelRatio || e.mozBackingStorePixelRatio || e.msBackingStorePixelRatio || e.oBackingStorePixelRatio || e.backingStorePixelRatio || 1;
    return n / r;
  }(), Nu.Util.releaseCanvas(t), za;
}
class z0 {
  constructor(e) {
    this.pixelRatio = 1, this.width = 0, this.height = 0, this.isCache = !1;
    const r = (e || {}).pixelRatio || n4.Konva.pixelRatio || a8();
    this.pixelRatio = r, this._canvas = Nu.Util.createCanvasElement(), this._canvas.style.padding = "0", this._canvas.style.margin = "0", this._canvas.style.border = "0", this._canvas.style.background = "transparent", this._canvas.style.position = "absolute", this._canvas.style.top = "0", this._canvas.style.left = "0";
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
        return Nu.Util.error("Unable to get data URL. " + o.message + " For more info read https://konvajs.org/docs/posts/Tainted_Canvas.html."), "";
      }
    }
  }
}
Bn.Canvas = z0;
class u8 extends z0 {
  constructor(e = { width: 0, height: 0, willReadFrequently: !1 }) {
    super(e), this.context = new t4.SceneContext(this, {
      willReadFrequently: e.willReadFrequently
    }), this.setSize(e.width, e.height);
  }
}
Bn.SceneCanvas = u8;
class c8 extends z0 {
  constructor(e = { width: 0, height: 0 }) {
    super(e), this.hitCanvas = !0, this.context = new t4.HitContext(this), this.setSize(e.width, e.height);
  }
}
Bn.HitCanvas = c8;
var Ju = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.DD = void 0;
  const e = ve, n = be;
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
})(Ju);
var Se = {}, de = {};
Object.defineProperty(de, "__esModule", { value: !0 });
de.RGBComponent = d8;
de.alphaComponent = f8;
de.getNumberValidator = h8;
de.getNumberOrArrayOfNumbersValidator = p8;
de.getNumberOrAutoValidator = g8;
de.getStringValidator = m8;
de.getStringOrGradientValidator = y8;
de.getFunctionValidator = v8;
de.getNumberArrayValidator = _8;
de.getBooleanValidator = S8;
de.getComponentValidator = w8;
const Er = ve, tt = be;
function Pr(t) {
  return tt.Util._isString(t) ? '"' + t + '"' : Object.prototype.toString.call(t) === "[object Number]" || tt.Util._isBoolean(t) ? t : Object.prototype.toString.call(t);
}
function d8(t) {
  return t > 255 ? 255 : t < 0 ? 0 : Math.round(t);
}
function f8(t) {
  return t > 1 ? 1 : t < 1e-4 ? 1e-4 : t;
}
function h8() {
  if (Er.Konva.isUnminified)
    return function(t, e) {
      return tt.Util._isNumber(t) || tt.Util.warn(Pr(t) + ' is a not valid value for "' + e + '" attribute. The value should be a number.'), t;
    };
}
function p8(t) {
  if (Er.Konva.isUnminified)
    return function(e, n) {
      let r = tt.Util._isNumber(e), o = tt.Util._isArray(e) && e.length == t;
      return !r && !o && tt.Util.warn(Pr(e) + ' is a not valid value for "' + n + '" attribute. The value should be a number or Array<number>(' + t + ")"), e;
    };
}
function g8() {
  if (Er.Konva.isUnminified)
    return function(t, e) {
      return tt.Util._isNumber(t) || t === "auto" || tt.Util.warn(Pr(t) + ' is a not valid value for "' + e + '" attribute. The value should be a number or "auto".'), t;
    };
}
function m8() {
  if (Er.Konva.isUnminified)
    return function(t, e) {
      return tt.Util._isString(t) || tt.Util.warn(Pr(t) + ' is a not valid value for "' + e + '" attribute. The value should be a string.'), t;
    };
}
function y8() {
  if (Er.Konva.isUnminified)
    return function(t, e) {
      const n = tt.Util._isString(t), r = Object.prototype.toString.call(t) === "[object CanvasGradient]" || t && t.addColorStop;
      return n || r || tt.Util.warn(Pr(t) + ' is a not valid value for "' + e + '" attribute. The value should be a string or a native gradient.'), t;
    };
}
function v8() {
  if (Er.Konva.isUnminified)
    return function(t, e) {
      return tt.Util._isFunction(t) || tt.Util.warn(Pr(t) + ' is a not valid value for "' + e + '" attribute. The value should be a function.'), t;
    };
}
function _8() {
  if (Er.Konva.isUnminified)
    return function(t, e) {
      const n = Int8Array ? Object.getPrototypeOf(Int8Array) : null;
      return n && t instanceof n || (tt.Util._isArray(t) ? t.forEach(function(r) {
        tt.Util._isNumber(r) || tt.Util.warn('"' + e + '" attribute has non numeric element ' + r + ". Make sure that all elements are numbers.");
      }) : tt.Util.warn(Pr(t) + ' is a not valid value for "' + e + '" attribute. The value should be a array of numbers.')), t;
    };
}
function S8() {
  if (Er.Konva.isUnminified)
    return function(t, e) {
      return t === !0 || t === !1 || tt.Util.warn(Pr(t) + ' is a not valid value for "' + e + '" attribute. The value should be a boolean.'), t;
    };
}
function w8(t) {
  if (Er.Konva.isUnminified)
    return function(e, n) {
      return e == null || tt.Util.isObject(e) || tt.Util.warn(Pr(e) + ' is a not valid value for "' + n + '" attribute. The value should be an object with properties ' + t), e;
    };
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.Factory = void 0;
  const e = be, n = de, r = "get", o = "set";
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
      const y = c.length, x = e.Util._capitalize, S = r + x(a), C = o + x(a);
      l.prototype[S] = function() {
        const P = {};
        for (let R = 0; R < y; R++) {
          const k = c[R];
          P[k] = this.getAttr(a + x(k));
        }
        return P;
      };
      const v = (0, n.getComponentValidator)(c);
      l.prototype[C] = function(P) {
        const R = this.attrs[a];
        f && (P = f.call(this, P, a)), v && v.call(this, P, a);
        for (const k in P)
          P.hasOwnProperty(k) && this._setAttr(a + x(k), P[k]);
        return P || c.forEach((k) => {
          this._setAttr(a + x(k), void 0);
        }), this._fireChangeEvent(a, R, P), g && g.call(this), this;
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
        const x = this.attrs[a];
        return x === void 0 ? c : x;
      }, t.Factory.addSetter(l, a, f, function() {
        e.Util.error(y);
      }), t.Factory.addOverloadedGetterSetter(l, a);
    },
    backCompat(l, a) {
      e.Util.each(a, function(c, f) {
        const g = l.prototype[f], y = r + e.Util._capitalize(c), x = o + e.Util._capitalize(c);
        function S() {
          g.apply(this, arguments), e.Util.error('"' + c + '" method is deprecated and will be removed soon. Use ""' + f + '" instead.');
        }
        l.prototype[c] = S, l.prototype[y] = S, l.prototype[x] = S;
      });
    },
    afterSetFilter() {
      this._filterUpToDate = !1;
    }
  };
})(Se);
Object.defineProperty(Xe, "__esModule", { value: !0 });
Xe.Node = void 0;
const hs = Bn, Sn = Ju, xl = Se, Vr = ve, xe = be, st = de, tu = "absoluteOpacity", Ua = "allEventListeners", hr = "absoluteTransform", bg = "absoluteScale", Pi = "canvas", C8 = "Change", x8 = "children", k8 = "konva", Lh = "listening", E8 = "mouseenter", P8 = "mouseleave", T8 = "pointerenter", N8 = "pointerleave", R8 = "touchenter", F8 = "touchleave", e2 = "set", t2 = "Shape", nu = " ", n2 = "stage", Hr = "transform", M8 = "Stage", Ah = "visible", L8 = [
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
].join(nu);
let A8 = 1;
class he {
  constructor(e) {
    this._id = A8++, this.eventListeners = {}, this.attrs = {}, this.index = 0, this._allEventListeners = null, this.parent = null, this._cache = /* @__PURE__ */ new Map(), this._attachedDepsListeners = /* @__PURE__ */ new Map(), this._lastPos = null, this._batchingTransformChange = !1, this._needClearTransformCache = !1, this._filterUpToDate = !1, this._isUnderCache = !1, this._dragEventId = null, this._shouldFireChangeEvents = !1, this.setAttrs(e), this._shouldFireChangeEvents = !0;
  }
  hasChildren() {
    return !1;
  }
  _clearCache(e) {
    (e === Hr || e === hr) && this._cache.get(e) ? this._cache.get(e).dirty = !0 : e ? this._cache.delete(e) : this._cache.clear();
  }
  _getCache(e, n) {
    let r = this._cache.get(e);
    return (r === void 0 || (e === Hr || e === hr) && r.dirty === !0) && (r = n.call(this), this._cache.set(e, r)), r;
  }
  _calculate(e, n, r) {
    if (!this._attachedDepsListeners.get(e)) {
      const o = n.map((l) => l + "Change.konva").join(nu);
      this.on(o, () => {
        this._clearCache(e);
      }), this._attachedDepsListeners.set(e, !0);
    }
    return this._getCache(e, r);
  }
  _getCanvasCache() {
    return this._cache.get(Pi);
  }
  _clearSelfAndDescendantCache(e) {
    this._clearCache(e), e === hr && this.fire("absoluteTransformChange");
  }
  clearCache() {
    if (this._cache.has(Pi)) {
      const { scene: e, filter: n, hit: r, buffer: o } = this._cache.get(Pi);
      xe.Util.releaseCanvas(e, n, r, o), this._cache.delete(Pi);
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
    let o = Math.ceil(n.width || r.width), l = Math.ceil(n.height || r.height), a = n.pixelRatio, c = n.x === void 0 ? Math.floor(r.x) : n.x, f = n.y === void 0 ? Math.floor(r.y) : n.y, g = n.offset || 0, y = n.drawBorder || !1, x = n.hitCanvasPixelRatio || 1;
    if (!o || !l) {
      xe.Util.error("Can not cache the node. Width or height of the node equals 0. Caching is skipped.");
      return;
    }
    const S = Math.abs(Math.round(r.x) - c) > 0.5 ? 1 : 0, C = Math.abs(Math.round(r.y) - f) > 0.5 ? 1 : 0;
    o += g * 2 + S, l += g * 2 + C, c -= g, f -= g;
    const v = new hs.SceneCanvas({
      pixelRatio: a,
      width: o,
      height: l
    }), P = new hs.SceneCanvas({
      pixelRatio: a,
      width: 0,
      height: 0,
      willReadFrequently: !0
    }), R = new hs.HitCanvas({
      pixelRatio: x,
      width: o,
      height: l
    }), k = v.getContext(), w = R.getContext(), p = new hs.SceneCanvas({
      width: v.width / v.pixelRatio + Math.abs(c),
      height: v.height / v.pixelRatio + Math.abs(f),
      pixelRatio: v.pixelRatio
    }), _ = p.getContext();
    return R.isCache = !0, v.isCache = !0, this._cache.delete(Pi), this._filterUpToDate = !1, n.imageSmoothingEnabled === !1 && (v.getContext()._context.imageSmoothingEnabled = !1, P.getContext()._context.imageSmoothingEnabled = !1), k.save(), w.save(), _.save(), k.translate(-c, -f), w.translate(-c, -f), _.translate(-c, -f), p.x = c, p.y = f, this._isUnderCache = !0, this._clearSelfAndDescendantCache(tu), this._clearSelfAndDescendantCache(bg), this.drawScene(v, this, p), this.drawHit(R, this), this._isUnderCache = !1, k.restore(), w.restore(), y && (k.save(), k.beginPath(), k.rect(0, 0, o, l), k.closePath(), k.setAttr("strokeStyle", "red"), k.setAttr("lineWidth", 5), k.stroke(), k.restore()), this._cache.set(Pi, {
      scene: v,
      filter: P,
      hit: R,
      buffer: p,
      x: c,
      y: f
    }), this._requestDraw(), this;
  }
  isCached() {
    return this._cache.has(Pi);
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
              xe.Util.error("Filter should be type of function, but got " + typeof g + " instead. Please check correct filters");
              continue;
            }
            g.call(this, c), l.putImageData(c, 0, 0);
          }
        } catch (x) {
          xe.Util.error("Unable to apply filter. " + x.message + " This post my help you https://konvajs.org/docs/posts/Tainted_Canvas.html.");
        }
        this._filterUpToDate = !0;
      }
      return o;
    }
    return r;
  }
  on(e, n) {
    if (this._cache && this._cache.delete(Ua), arguments.length === 3)
      return this._delegate.apply(this, arguments);
    const r = e.split(nu);
    for (let o = 0; o < r.length; o++) {
      const a = r[o].split("."), c = a[0], f = a[1] || "";
      this.eventListeners[c] || (this.eventListeners[c] = []), this.eventListeners[c].push({ name: f, handler: n });
    }
    return this;
  }
  off(e, n) {
    let r = (e || "").split(nu), o = r.length, l, a, c, f, g, y;
    if (this._cache && this._cache.delete(Ua), !e)
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
        l = xe.Util.cloneObject(l), l.currentTarget = a[c], r.call(a[c], l);
    });
  }
  remove() {
    return this.isDragging() && this.stopDrag(), Sn.DD._dragElements.delete(this._id), this._remove(), this;
  }
  _clearCaches() {
    this._clearSelfAndDescendantCache(hr), this._clearSelfAndDescendantCache(tu), this._clearSelfAndDescendantCache(bg), this._clearSelfAndDescendantCache(n2), this._clearSelfAndDescendantCache(Ah), this._clearSelfAndDescendantCache(Lh);
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
    const n = "get" + xe.Util._capitalize(e);
    return xe.Util._isFunction(this[n]) ? this[n]() : this.attrs[e];
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
        n !== x8 && (r = e2 + xe.Util._capitalize(n), xe.Util._isFunction(this[r]) ? this[r](e[n]) : this._setAttr(n, e[n]));
    }), this;
  }
  isListening() {
    return this._getCache(Lh, this._isListening);
  }
  _isListening(e) {
    if (!this.listening())
      return !1;
    const r = this.getParent();
    return r && r !== e && this !== e ? r._isListening(e) : !0;
  }
  isVisible() {
    return this._getCache(Ah, this._isVisible);
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
    Sn.DD._dragElements.forEach((a) => {
      a.dragStatus === "dragging" && (a.node.nodeType === "Stage" || a.node.getLayer() === r) && (o = !0);
    });
    const l = !n && !Vr.Konva.hitOnDragEnabled && (o || Vr.Konva.isTransforming());
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
        c = y[a], r++, c.nodeType !== t2 && (o = o.concat(c.getChildren().slice())), c._id === n._id && (a = l);
      o.length > 0 && o[0].getDepth() <= e && f(o);
    }
    const g = this.getStage();
    return n.nodeType !== M8 && g && f(g.getChildren()), r;
  }
  getDepth() {
    let e = 0, n = this.parent;
    for (; n; )
      e++, n = n.parent;
    return e;
  }
  _batchTransformChanges(e) {
    this._batchingTransformChange = !0, e(), this._batchingTransformChange = !1, this._needClearTransformCache && (this._clearCache(Hr), this._clearSelfAndDescendantCache(hr)), this._needClearTransformCache = !1;
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
    const o = this.getAbsoluteTransform(e).getMatrix(), l = new xe.Transform(), a = this.offset();
    return l.m = o.slice(), l.translate(a.x, a.y), l.getTranslation();
  }
  setAbsolutePosition(e) {
    const { x: n, y: r, ...o } = this._clearTransform();
    this.attrs.x = n, this.attrs.y = r, this._clearCache(Hr);
    const l = this._getAbsoluteTransform().copy();
    return l.invert(), l.translate(e.x, e.y), e = {
      x: this.attrs.x + l.getTranslation().x,
      y: this.attrs.y + l.getTranslation().y
    }, this._setTransform(o), this.setPosition({ x: e.x, y: e.y }), this._clearCache(Hr), this._clearSelfAndDescendantCache(hr), this;
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
      return xe.Util.warn("Node has no parent. moveToTop function is ignored."), !1;
    const e = this.index, n = this.parent.getChildren().length;
    return e < n - 1 ? (this.parent.children.splice(e, 1), this.parent.children.push(this), this.parent._setChildrenIndices(), !0) : !1;
  }
  moveUp() {
    if (!this.parent)
      return xe.Util.warn("Node has no parent. moveUp function is ignored."), !1;
    const e = this.index, n = this.parent.getChildren().length;
    return e < n - 1 ? (this.parent.children.splice(e, 1), this.parent.children.splice(e + 1, 0, this), this.parent._setChildrenIndices(), !0) : !1;
  }
  moveDown() {
    if (!this.parent)
      return xe.Util.warn("Node has no parent. moveDown function is ignored."), !1;
    const e = this.index;
    return e > 0 ? (this.parent.children.splice(e, 1), this.parent.children.splice(e - 1, 0, this), this.parent._setChildrenIndices(), !0) : !1;
  }
  moveToBottom() {
    if (!this.parent)
      return xe.Util.warn("Node has no parent. moveToBottom function is ignored."), !1;
    const e = this.index;
    return e > 0 ? (this.parent.children.splice(e, 1), this.parent.children.unshift(this), this.parent._setChildrenIndices(), !0) : !1;
  }
  setZIndex(e) {
    if (!this.parent)
      return xe.Util.warn("Node has no parent. zIndex parameter is ignored."), this;
    (e < 0 || e >= this.parent.children.length) && xe.Util.warn("Unexpected value " + e + " for zIndex property. zIndex is just index of a node in children of its parent. Expected value is from 0 to " + (this.parent.children.length - 1) + ".");
    const n = this.index;
    return this.parent.children.splice(n, 1), this.parent.children.splice(e, 0, this), this.parent._setChildrenIndices(), this;
  }
  getAbsoluteOpacity() {
    return this._getCache(tu, this._getAbsoluteOpacity);
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
      r = e[n], a = xe.Util.isObject(r) && !xe.Util._isPlainObject(r) && !xe.Util._isArray(r), !a && (o = typeof this[n] == "function" && this[n], delete e[n], l = o ? o.call(this) : null, e[n] = r, l !== r && (c.attrs[n] = r));
    return xe.Util._prepareToStringify(c);
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
      if (l = n[o], xe.Util.isValidSelector(l) || (xe.Util.warn('Selector "' + l + '" is invalid. Allowed selectors examples are "#foo", ".bar" or "Group".'), xe.Util.warn('If you have a custom shape with such className, please change it to start with upper letter like "Triangle".'), xe.Util.warn("Konva is awesome, right?")), l.charAt(0) === "#") {
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
    return this._getCache(n2, this._getStage);
  }
  _getStage() {
    const e = this.getParent();
    return e ? e.getStage() : null;
  }
  fire(e, n = {}, r) {
    return n.target = n.target || this, r ? this._fireAndBubble(e, n) : this._fire(e, n), this;
  }
  getAbsoluteTransform(e) {
    return e ? this._getAbsoluteTransform(e) : this._getCache(hr, this._getAbsoluteTransform);
  }
  _getAbsoluteTransform(e) {
    let n;
    if (e)
      return n = new xe.Transform(), this._eachAncestorReverse(function(r) {
        const o = r.transformsEnabled();
        o === "all" ? n.multiply(r.getTransform()) : o === "position" && n.translate(r.x() - r.offsetX(), r.y() - r.offsetY());
      }, e), n;
    {
      n = this._cache.get(hr) || new xe.Transform(), this.parent ? this.parent.getAbsoluteTransform().copyInto(n) : n.reset();
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
    return this._getCache(Hr, this._getTransform);
  }
  _getTransform() {
    var e, n;
    const r = this._cache.get(Hr) || new xe.Transform();
    r.reset();
    const o = this.x(), l = this.y(), a = Vr.Konva.getAngle(this.rotation()), c = (e = this.attrs.scaleX) !== null && e !== void 0 ? e : 1, f = (n = this.attrs.scaleY) !== null && n !== void 0 ? n : 1, g = this.attrs.skewX || 0, y = this.attrs.skewY || 0, x = this.attrs.offsetX || 0, S = this.attrs.offsetY || 0;
    return (o !== 0 || l !== 0) && r.translate(o, l), a !== 0 && r.rotate(a), (g !== 0 || y !== 0) && r.skew(g, y), (c !== 1 || f !== 1) && r.scale(c, f), (x !== 0 || S !== 0) && r.translate(-1 * x, -1 * S), r.dirty = !1, r;
  }
  clone(e) {
    let n = xe.Util.cloneObject(this.attrs), r, o, l, a, c;
    for (r in e)
      n[r] = e[r];
    const f = new this.constructor(n);
    for (r in this.eventListeners)
      for (o = this.eventListeners[r], l = o.length, a = 0; a < l; a++)
        c = o[a], c.name.indexOf(k8) < 0 && (f.eventListeners[r] || (f.eventListeners[r] = []), f.eventListeners[r].push(c));
    return f;
  }
  _toKonvaCanvas(e) {
    e = e || {};
    const n = this.getClientRect(), r = this.getStage(), o = e.x !== void 0 ? e.x : Math.floor(n.x), l = e.y !== void 0 ? e.y : Math.floor(n.y), a = e.pixelRatio || 1, c = new hs.SceneCanvas({
      width: e.width || Math.ceil(n.width) || (r ? r.width() : 0),
      height: e.height || Math.ceil(n.height) || (r ? r.height() : 0),
      pixelRatio: a
    }), f = c.getContext(), g = new hs.SceneCanvas({
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
        o && delete e.callback, xe.Util._urlToImage(this.toDataURL(e), function(l) {
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
    return this.attrs.dragDistance !== void 0 ? this.attrs.dragDistance : this.parent ? this.parent.getDragDistance() : Vr.Konva.dragDistance;
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
    this._fire(e + C8, {
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
    const r = this[e2 + xe.Util._capitalize(e)];
    return xe.Util._isFunction(r) ? r.call(this, n) : this._setAttr(e, n), this;
  }
  _requestDraw() {
    if (Vr.Konva.autoDrawEnabled) {
      const e = this.getLayer() || this.getStage();
      e == null || e.batchDraw();
    }
  }
  _setAttr(e, n) {
    const r = this.attrs[e];
    r === n && !xe.Util.isObject(n) || (n == null ? delete this.attrs[e] : this.attrs[e] = n, this._shouldFireChangeEvents && this._fireChangeEvent(e, r, n), this._requestDraw());
  }
  _setComponentAttr(e, n, r) {
    let o;
    r !== void 0 && (o = this.attrs[e], o || (this.attrs[e] = this.getAttr(e)), this.attrs[e][n] = r, this._fireChangeEvent(e, o, r));
  }
  _fireAndBubble(e, n, r) {
    n && this.nodeType === t2 && (n.target = this);
    const o = [
      E8,
      P8,
      T8,
      N8,
      R8,
      F8
    ];
    if (!(o.indexOf(e) !== -1 && (r && (this === r || this.isAncestorOf && this.isAncestorOf(r)) || this.nodeType === "Stage" && !r))) {
      this._fire(e, n);
      const a = o.indexOf(e) !== -1 && r && r.isAncestorOf && r.isAncestorOf(this) && !r.isAncestorOf(this.parent);
      (n && !n.cancelBubble || !n) && this.parent && this.parent.isListening() && !a && (r && r.parent ? this._fireAndBubble.call(this.parent, e, n, r) : this._fireAndBubble.call(this.parent, e, n));
    }
  }
  _getProtoListeners(e) {
    var n, r, o;
    const l = (n = this._cache.get(Ua)) !== null && n !== void 0 ? n : {};
    let a = l == null ? void 0 : l[e];
    if (a === void 0) {
      a = [];
      let c = Object.getPrototypeOf(this);
      for (; c; ) {
        const f = (o = (r = c.eventListeners) === null || r === void 0 ? void 0 : r[e]) !== null && o !== void 0 ? o : [];
        a.push(...f), c = Object.getPrototypeOf(c);
      }
      l[e] = a, this._cache.set(Ua, l);
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
    Sn.DD._dragElements.set(this._id, {
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
    Sn.DD._dragElements.has(this._id) || this._createDragElement(e);
    const r = Sn.DD._dragElements.get(this._id);
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
      a ? o = a : xe.Util.warn("dragBoundFunc did not return any value. That is unexpected behavior. You must return new absolute position from dragBoundFunc.");
    }
    (!this._lastPos || this._lastPos.x !== o.x || this._lastPos.y !== o.y) && (this.setAbsolutePosition(o), this._requestDraw()), this._lastPos = o;
  }
  stopDrag(e) {
    const n = Sn.DD._dragElements.get(this._id);
    n && (n.dragStatus = "stopped"), Sn.DD._endDragBefore(e), Sn.DD._endDragAfter(e);
  }
  setDraggable(e) {
    this._setAttr("draggable", e), this._dragChange();
  }
  isDragging() {
    const e = Sn.DD._dragElements.get(this._id);
    return e ? e.dragStatus === "dragging" : !1;
  }
  _listenDrag() {
    this._dragCleanup(), this.on("mousedown.konva touchstart.konva", function(e) {
      if (!(!(e.evt.button !== void 0) || Vr.Konva.dragButtons.indexOf(e.evt.button) >= 0) || this.isDragging())
        return;
      let o = !1;
      Sn.DD._dragElements.forEach((l) => {
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
      const n = Sn.DD._dragElements.get(this._id), r = n && n.dragStatus === "dragging", o = n && n.dragStatus === "ready";
      r ? this.stopDrag() : o && Sn.DD._dragElements.delete(this._id);
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
    return xe.Util.haveIntersection(r, this.getClientRect());
  }
  static create(e, n) {
    return xe.Util._isString(e) && (e = JSON.parse(e)), this._createNode(e, n);
  }
  static _createNode(e, n) {
    let r = he.prototype.getClassName.call(e), o = e.children, l, a, c;
    n && (e.attrs.container = n), Vr.Konva[r] || (xe.Util.warn('Can not find a node with class name "' + r + '". Fallback to "Shape".'), r = "Shape");
    const f = Vr.Konva[r];
    if (l = new f(e.attrs), o)
      for (a = o.length, c = 0; c < a; c++)
        l.add(he._createNode(o[c]));
    return l;
  }
}
Xe.Node = he;
he.prototype.nodeType = "Node";
he.prototype._attrsAffectingSize = [];
he.prototype.eventListeners = {};
he.prototype.on.call(he.prototype, L8, function() {
  if (this._batchingTransformChange) {
    this._needClearTransformCache = !0;
    return;
  }
  this._clearCache(Hr), this._clearSelfAndDescendantCache(hr);
});
he.prototype.on.call(he.prototype, "visibleChange.konva", function() {
  this._clearSelfAndDescendantCache(Ah);
});
he.prototype.on.call(he.prototype, "listeningChange.konva", function() {
  this._clearSelfAndDescendantCache(Lh);
});
he.prototype.on.call(he.prototype, "opacityChange.konva", function() {
  this._clearSelfAndDescendantCache(tu);
});
const Ie = xl.Factory.addGetterSetter;
Ie(he, "zIndex");
Ie(he, "absolutePosition");
Ie(he, "position");
Ie(he, "x", 0, (0, st.getNumberValidator)());
Ie(he, "y", 0, (0, st.getNumberValidator)());
Ie(he, "globalCompositeOperation", "source-over", (0, st.getStringValidator)());
Ie(he, "opacity", 1, (0, st.getNumberValidator)());
Ie(he, "name", "", (0, st.getStringValidator)());
Ie(he, "id", "", (0, st.getStringValidator)());
Ie(he, "rotation", 0, (0, st.getNumberValidator)());
xl.Factory.addComponentsGetterSetter(he, "scale", ["x", "y"]);
Ie(he, "scaleX", 1, (0, st.getNumberValidator)());
Ie(he, "scaleY", 1, (0, st.getNumberValidator)());
xl.Factory.addComponentsGetterSetter(he, "skew", ["x", "y"]);
Ie(he, "skewX", 0, (0, st.getNumberValidator)());
Ie(he, "skewY", 0, (0, st.getNumberValidator)());
xl.Factory.addComponentsGetterSetter(he, "offset", ["x", "y"]);
Ie(he, "offsetX", 0, (0, st.getNumberValidator)());
Ie(he, "offsetY", 0, (0, st.getNumberValidator)());
Ie(he, "dragDistance", void 0, (0, st.getNumberValidator)());
Ie(he, "width", 0, (0, st.getNumberValidator)());
Ie(he, "height", 0, (0, st.getNumberValidator)());
Ie(he, "listening", !0, (0, st.getBooleanValidator)());
Ie(he, "preventDefault", !0, (0, st.getBooleanValidator)());
Ie(he, "filters", void 0, function(t) {
  return this._filterUpToDate = !1, t;
});
Ie(he, "visible", !0, (0, st.getBooleanValidator)());
Ie(he, "transformsEnabled", "all", (0, st.getStringValidator)());
Ie(he, "size");
Ie(he, "dragBoundFunc");
Ie(he, "draggable", !1, (0, st.getBooleanValidator)());
xl.Factory.backCompat(he, {
  rotateDeg: "rotate",
  setRotationDeg: "setRotation",
  getRotationDeg: "getRotation"
});
var ji = {};
Object.defineProperty(ji, "__esModule", { value: !0 });
ji.Container = void 0;
const $s = Se, Nf = Xe, Zu = de;
class Wi extends Nf.Node {
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
    const e = Nf.Node.prototype.toObject.call(this);
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
    const n = Nf.Node.prototype.clone.call(this, e);
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
    const a = n && n.getContext(), c = this.clipWidth(), f = this.clipHeight(), g = this.clipFunc(), y = typeof c == "number" && typeof f == "number" || g, x = r === this;
    if (y) {
      a.save();
      const C = this.getAbsoluteTransform(r);
      let v = C.getMatrix();
      a.transform(v[0], v[1], v[2], v[3], v[4], v[5]), a.beginPath();
      let P;
      if (g)
        P = g.call(this, a, this);
      else {
        const R = this.clipX(), k = this.clipY();
        a.rect(R || 0, k || 0, c, f);
      }
      a.clip.apply(a, P), v = C.copy().invert().getMatrix(), a.transform(v[0], v[1], v[2], v[3], v[4], v[5]);
    }
    const S = !x && this.globalCompositeOperation() !== "source-over" && e === "drawScene";
    S && (a.save(), a._applyGlobalCompositeOperation(this)), (l = this.children) === null || l === void 0 || l.forEach(function(C) {
      C[e](n, r, o);
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
    (n = this.children) === null || n === void 0 || n.forEach(function(C) {
      if (!C.visible())
        return;
      const v = C.getClientRect({
        relativeTo: y,
        skipShadow: e.skipShadow,
        skipStroke: e.skipStroke
      });
      v.width === 0 && v.height === 0 || (l === void 0 ? (l = v.x, a = v.y, c = v.x + v.width, f = v.y + v.height) : (l = Math.min(l, v.x), a = Math.min(a, v.y), c = Math.max(c, v.x + v.width), f = Math.max(f, v.y + v.height)));
    });
    const x = this.find("Shape");
    let S = !1;
    for (let C = 0; C < x.length; C++)
      if (x[C]._isVisible(this)) {
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
ji.Container = Wi;
$s.Factory.addComponentsGetterSetter(Wi, "clip", [
  "x",
  "y",
  "width",
  "height"
]);
$s.Factory.addGetterSetter(Wi, "clipX", void 0, (0, Zu.getNumberValidator)());
$s.Factory.addGetterSetter(Wi, "clipY", void 0, (0, Zu.getNumberValidator)());
$s.Factory.addGetterSetter(Wi, "clipWidth", void 0, (0, Zu.getNumberValidator)());
$s.Factory.addGetterSetter(Wi, "clipHeight", void 0, (0, Zu.getNumberValidator)());
$s.Factory.addGetterSetter(Wi, "clipFunc");
var r4 = {}, ui = {};
Object.defineProperty(ui, "__esModule", { value: !0 });
ui.getCapturedShape = D8;
ui.createEvent = U0;
ui.hasPointerCapture = I8;
ui.setPointerCapture = z8;
ui.releaseCapture = s4;
const O8 = ve, gl = /* @__PURE__ */ new Map(), i4 = O8.Konva._global.PointerEvent !== void 0;
function D8(t) {
  return gl.get(t);
}
function U0(t) {
  return {
    evt: t,
    pointerId: t.pointerId
  };
}
function I8(t, e) {
  return gl.get(t) === e;
}
function z8(t, e) {
  s4(t), e.getStage() && (gl.set(t, e), i4 && e._fire("gotpointercapture", U0(new PointerEvent("gotpointercapture"))));
}
function s4(t, e) {
  const n = gl.get(t);
  if (!n)
    return;
  const r = n.getStage();
  r && r.content, gl.delete(t), i4 && n._fire("lostpointercapture", U0(new PointerEvent("lostpointercapture")));
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.Stage = t.stages = void 0;
  const e = be, n = Se, r = ji, o = ve, l = Bn, a = Ju, c = ve, f = ui, g = "Stage", y = "string", x = "px", S = "mouseout", C = "mouseleave", v = "mouseover", P = "mouseenter", R = "mousemove", k = "mousedown", w = "mouseup", p = "pointermove", _ = "pointerdown", N = "pointerup", F = "pointercancel", L = "lostpointercapture", E = "pointerout", I = "pointerleave", M = "pointerover", B = "pointerenter", H = "contextmenu", q = "touchstart", ie = "touchend", Q = "touchmove", fe = "touchcancel", Ce = "wheel", V = 5, J = [
    [P, "_pointerenter"],
    [k, "_pointerdown"],
    [R, "_pointermove"],
    [w, "_pointerup"],
    [C, "_pointerleave"],
    [q, "_pointerdown"],
    [Q, "_pointermove"],
    [ie, "_pointerup"],
    [fe, "_pointercancel"],
    [v, "_pointerover"],
    [Ce, "_wheel"],
    [H, "_contextmenu"],
    [_, "_pointerdown"],
    [p, "_pointermove"],
    [N, "_pointerup"],
    [F, "_pointercancel"],
    [I, "_pointerleave"],
    [L, "_lostpointercapture"]
  ], X = {
    mouse: {
      [E]: S,
      [I]: C,
      [M]: v,
      [B]: P,
      [p]: R,
      [_]: k,
      [N]: w,
      [F]: "mousecancel",
      pointerclick: "click",
      pointerdblclick: "dblclick"
    },
    touch: {
      [E]: "touchout",
      [I]: "touchleave",
      [M]: "touchover",
      [B]: "touchenter",
      [p]: Q,
      [_]: q,
      [N]: ie,
      [F]: fe,
      pointerclick: "tap",
      pointerdblclick: "dbltap"
    },
    pointer: {
      [E]: E,
      [I]: I,
      [M]: M,
      [B]: B,
      [p]: p,
      [_]: _,
      [N]: N,
      [F]: F,
      pointerclick: "pointerclick",
      pointerdblclick: "pointerdblclick"
    }
  }, Y = (Oe) => Oe.indexOf("pointer") >= 0 ? "pointer" : Oe.indexOf("touch") >= 0 ? "touch" : "mouse", se = (Oe) => {
    const A = Y(Oe);
    if (A === "pointer")
      return o.Konva.pointerEventsEnabled && X.pointer;
    if (A === "touch")
      return X.touch;
    if (A === "mouse")
      return X.mouse;
  };
  function Ee(Oe = {}) {
    return (Oe.clipFunc || Oe.clipWidth || Oe.clipHeight) && e.Util.warn("Stage does not support clipping. Please use clip for Layers or Groups."), Oe;
  }
  const ot = "Pointer position is missing and not registered by the stage. Looks like it is outside of the stage container. You can set it manually from event: stage.setPointersPositions(event);";
  t.stages = [];
  class ut extends r.Container {
    constructor(A) {
      super(Ee(A)), this._pointerPositions = [], this._changedPointerPositions = [], this._buildDOM(), this._bindContentEvents(), t.stages.push(this), this.on("widthChange.konva heightChange.konva", this._resizeDOM), this.on("visibleChange.konva", this._checkVisibility), this.on("clipWidthChange.konva clipHeightChange.konva clipFuncChange.konva", () => {
        Ee(this.attrs);
      }), this._checkVisibility();
    }
    _validateAdd(A) {
      const j = A.getType() === "Layer", oe = A.getType() === "FastLayer";
      j || oe || e.Util.throw("You may only add layers to the stage.");
    }
    _checkVisibility() {
      if (!this.content)
        return;
      const A = this.visible() ? "" : "none";
      this.content.style.display = A;
    }
    setContainer(A) {
      if (typeof A === y) {
        let j;
        if (A.charAt(0) === ".") {
          const oe = A.slice(1);
          A = document.getElementsByClassName(oe)[0];
        } else
          A.charAt(0) !== "#" ? j = A : j = A.slice(1), A = document.getElementById(j);
        if (!A)
          throw "Can not find container in document with id " + j;
      }
      return this._setAttr("container", A), this.content && (this.content.parentElement && this.content.parentElement.removeChild(this.content), A.appendChild(this.content)), this;
    }
    shouldDrawHit() {
      return !0;
    }
    clear() {
      const A = this.children, j = A.length;
      for (let oe = 0; oe < j; oe++)
        A[oe].clear();
      return this;
    }
    clone(A) {
      return A || (A = {}), A.container = typeof document < "u" && document.createElement("div"), r.Container.prototype.clone.call(this, A);
    }
    destroy() {
      super.destroy();
      const A = this.content;
      A && e.Util._isInDocument(A) && this.container().removeChild(A);
      const j = t.stages.indexOf(this);
      return j > -1 && t.stages.splice(j, 1), e.Util.releaseCanvas(this.bufferCanvas._canvas, this.bufferHitCanvas._canvas), this;
    }
    getPointerPosition() {
      const A = this._pointerPositions[0] || this._changedPointerPositions[0];
      return A ? {
        x: A.x,
        y: A.y
      } : (e.Util.warn(ot), null);
    }
    _getPointerById(A) {
      return this._pointerPositions.find((j) => j.id === A);
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
      const j = new l.SceneCanvas({
        width: A.width,
        height: A.height,
        pixelRatio: A.pixelRatio || 1
      }), oe = j.getContext()._context, Fe = this.children;
      return (A.x || A.y) && oe.translate(-1 * A.x, -1 * A.y), Fe.forEach(function(pe) {
        if (!pe.isVisible())
          return;
        const $ = pe._toKonvaCanvas(A);
        oe.drawImage($._canvas, A.x, A.y, $.getWidth() / $.getPixelRatio(), $.getHeight() / $.getPixelRatio());
      }), j;
    }
    getIntersection(A) {
      if (!A)
        return null;
      const j = this.children, oe = j.length, Fe = oe - 1;
      for (let pe = Fe; pe >= 0; pe--) {
        const $ = j[pe].getIntersection(A);
        if ($)
          return $;
      }
      return null;
    }
    _resizeDOM() {
      const A = this.width(), j = this.height();
      this.content && (this.content.style.width = A + x, this.content.style.height = j + x), this.bufferCanvas.setSize(A, j), this.bufferHitCanvas.setSize(A, j), this.children.forEach((oe) => {
        oe.setSize({ width: A, height: j }), oe.draw();
      });
    }
    add(A, ...j) {
      if (arguments.length > 1) {
        for (let Fe = 0; Fe < arguments.length; Fe++)
          this.add(arguments[Fe]);
        return this;
      }
      super.add(A);
      const oe = this.children.length;
      return oe > V && e.Util.warn("The stage has " + oe + " layers. Recommended maximum number of layers is 3-5. Adding more layers into the stage may drop the performance. Rethink your tree structure, you can use Konva.Group."), A.setSize({ width: this.width(), height: this.height() }), A.draw(), o.Konva.isBrowser && this.content.appendChild(A.canvas._canvas), this;
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
      o.Konva.isBrowser && J.forEach(([A, j]) => {
        this.content.addEventListener(A, (oe) => {
          this[j](oe);
        }, { passive: !1 });
      });
    }
    _pointerenter(A) {
      this.setPointersPositions(A);
      const j = se(A.type);
      j && this._fire(j.pointerenter, {
        evt: A,
        target: this,
        currentTarget: this
      });
    }
    _pointerover(A) {
      this.setPointersPositions(A);
      const j = se(A.type);
      j && this._fire(j.pointerover, {
        evt: A,
        target: this,
        currentTarget: this
      });
    }
    _getTargetShape(A) {
      let j = this[A + "targetShape"];
      return j && !j.getStage() && (j = null), j;
    }
    _pointerleave(A) {
      const j = se(A.type), oe = Y(A.type);
      if (!j)
        return;
      this.setPointersPositions(A);
      const Fe = this._getTargetShape(oe), pe = !(o.Konva.isDragging() || o.Konva.isTransforming()) || o.Konva.hitOnDragEnabled;
      Fe && pe ? (Fe._fireAndBubble(j.pointerout, { evt: A }), Fe._fireAndBubble(j.pointerleave, { evt: A }), this._fire(j.pointerleave, {
        evt: A,
        target: this,
        currentTarget: this
      }), this[oe + "targetShape"] = null) : pe && (this._fire(j.pointerleave, {
        evt: A,
        target: this,
        currentTarget: this
      }), this._fire(j.pointerout, {
        evt: A,
        target: this,
        currentTarget: this
      })), this.pointerPos = null, this._pointerPositions = [];
    }
    _pointerdown(A) {
      const j = se(A.type), oe = Y(A.type);
      if (!j)
        return;
      this.setPointersPositions(A);
      let Fe = !1;
      this._changedPointerPositions.forEach((pe) => {
        const $ = this.getIntersection(pe);
        if (a.DD.justDragged = !1, o.Konva["_" + oe + "ListenClick"] = !0, !$ || !$.isListening()) {
          this[oe + "ClickStartShape"] = void 0;
          return;
        }
        o.Konva.capturePointerEventsEnabled && $.setPointerCapture(pe.id), this[oe + "ClickStartShape"] = $, $._fireAndBubble(j.pointerdown, {
          evt: A,
          pointerId: pe.id
        }), Fe = !0;
        const Z = A.type.indexOf("touch") >= 0;
        $.preventDefault() && A.cancelable && Z && A.preventDefault();
      }), Fe || this._fire(j.pointerdown, {
        evt: A,
        target: this,
        currentTarget: this,
        pointerId: this._pointerPositions[0].id
      });
    }
    _pointermove(A) {
      const j = se(A.type), oe = Y(A.type);
      if (!j || (o.Konva.isDragging() && a.DD.node.preventDefault() && A.cancelable && A.preventDefault(), this.setPointersPositions(A), !(!(o.Konva.isDragging() || o.Konva.isTransforming()) || o.Konva.hitOnDragEnabled)))
        return;
      const pe = {};
      let $ = !1;
      const Z = this._getTargetShape(oe);
      this._changedPointerPositions.forEach((ue) => {
        const le = f.getCapturedShape(ue.id) || this.getIntersection(ue), dn = ue.id, Wt = { evt: A, pointerId: dn }, Rr = Z !== le;
        if (Rr && Z && (Z._fireAndBubble(j.pointerout, { ...Wt }, le), Z._fireAndBubble(j.pointerleave, { ...Wt }, le)), le) {
          if (pe[le._id])
            return;
          pe[le._id] = !0;
        }
        le && le.isListening() ? ($ = !0, Rr && (le._fireAndBubble(j.pointerover, { ...Wt }, Z), le._fireAndBubble(j.pointerenter, { ...Wt }, Z), this[oe + "targetShape"] = le), le._fireAndBubble(j.pointermove, { ...Wt })) : Z && (this._fire(j.pointerover, {
          evt: A,
          target: this,
          currentTarget: this,
          pointerId: dn
        }), this[oe + "targetShape"] = null);
      }), $ || this._fire(j.pointermove, {
        evt: A,
        target: this,
        currentTarget: this,
        pointerId: this._changedPointerPositions[0].id
      });
    }
    _pointerup(A) {
      const j = se(A.type), oe = Y(A.type);
      if (!j)
        return;
      this.setPointersPositions(A);
      const Fe = this[oe + "ClickStartShape"], pe = this[oe + "ClickEndShape"], $ = {};
      let Z = !1;
      this._changedPointerPositions.forEach((ue) => {
        const le = f.getCapturedShape(ue.id) || this.getIntersection(ue);
        if (le) {
          if (le.releaseCapture(ue.id), $[le._id])
            return;
          $[le._id] = !0;
        }
        const dn = ue.id, Wt = { evt: A, pointerId: dn };
        let Rr = !1;
        o.Konva["_" + oe + "InDblClickWindow"] ? (Rr = !0, clearTimeout(this[oe + "DblTimeout"])) : a.DD.justDragged || (o.Konva["_" + oe + "InDblClickWindow"] = !0, clearTimeout(this[oe + "DblTimeout"])), this[oe + "DblTimeout"] = setTimeout(function() {
          o.Konva["_" + oe + "InDblClickWindow"] = !1;
        }, o.Konva.dblClickWindow), le && le.isListening() ? (Z = !0, this[oe + "ClickEndShape"] = le, le._fireAndBubble(j.pointerup, { ...Wt }), o.Konva["_" + oe + "ListenClick"] && Fe && Fe === le && (le._fireAndBubble(j.pointerclick, { ...Wt }), Rr && pe && pe === le && le._fireAndBubble(j.pointerdblclick, { ...Wt }))) : (this[oe + "ClickEndShape"] = null, o.Konva["_" + oe + "ListenClick"] && this._fire(j.pointerclick, {
          evt: A,
          target: this,
          currentTarget: this,
          pointerId: dn
        }), Rr && this._fire(j.pointerdblclick, {
          evt: A,
          target: this,
          currentTarget: this,
          pointerId: dn
        }));
      }), Z || this._fire(j.pointerup, {
        evt: A,
        target: this,
        currentTarget: this,
        pointerId: this._changedPointerPositions[0].id
      }), o.Konva["_" + oe + "ListenClick"] = !1, A.cancelable && oe !== "touch" && oe !== "pointer" && A.preventDefault();
    }
    _contextmenu(A) {
      this.setPointersPositions(A);
      const j = this.getIntersection(this.getPointerPosition());
      j && j.isListening() ? j._fireAndBubble(H, { evt: A }) : this._fire(H, {
        evt: A,
        target: this,
        currentTarget: this
      });
    }
    _wheel(A) {
      this.setPointersPositions(A);
      const j = this.getIntersection(this.getPointerPosition());
      j && j.isListening() ? j._fireAndBubble(Ce, { evt: A }) : this._fire(Ce, {
        evt: A,
        target: this,
        currentTarget: this
      });
    }
    _pointercancel(A) {
      this.setPointersPositions(A);
      const j = f.getCapturedShape(A.pointerId) || this.getIntersection(this.getPointerPosition());
      j && j._fireAndBubble(N, f.createEvent(A)), f.releaseCapture(A.pointerId);
    }
    _lostpointercapture(A) {
      f.releaseCapture(A.pointerId);
    }
    setPointersPositions(A) {
      const j = this._getContentPosition();
      let oe = null, Fe = null;
      A = A || window.event, A.touches !== void 0 ? (this._pointerPositions = [], this._changedPointerPositions = [], Array.prototype.forEach.call(A.touches, (pe) => {
        this._pointerPositions.push({
          id: pe.identifier,
          x: (pe.clientX - j.left) / j.scaleX,
          y: (pe.clientY - j.top) / j.scaleY
        });
      }), Array.prototype.forEach.call(A.changedTouches || A.touches, (pe) => {
        this._changedPointerPositions.push({
          id: pe.identifier,
          x: (pe.clientX - j.left) / j.scaleX,
          y: (pe.clientY - j.top) / j.scaleY
        });
      })) : (oe = (A.clientX - j.left) / j.scaleX, Fe = (A.clientY - j.top) / j.scaleY, this.pointerPos = {
        x: oe,
        y: Fe
      }, this._pointerPositions = [{ x: oe, y: Fe, id: e.Util._getFirstPointerId(A) }], this._changedPointerPositions = [
        { x: oe, y: Fe, id: e.Util._getFirstPointerId(A) }
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
  t.Stage = ut, ut.prototype.nodeType = g, (0, c._registerNode)(ut), n.Factory.addGetterSetter(ut, "container"), o.Konva.isBrowser && document.addEventListener("visibilitychange", () => {
    t.stages.forEach((Oe) => {
      Oe.batchDraw();
    });
  });
})(r4);
var kl = {}, gt = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.Shape = t.shapes = void 0;
  const e = ve, n = be, r = Se, o = Xe, l = de, a = ve, c = ui, f = "hasShadow", g = "shadowRGBA", y = "patternImage", x = "linearGradient", S = "radialGradient";
  let C;
  function v() {
    return C || (C = n.Util.createCanvasElement().getContext("2d"), C);
  }
  t.shapes = {};
  function P(I) {
    const M = this.attrs.fillRule;
    M ? I.fill(M) : I.fill();
  }
  function R(I) {
    I.stroke();
  }
  function k(I) {
    const M = this.attrs.fillRule;
    M ? I.fill(M) : I.fill();
  }
  function w(I) {
    I.stroke();
  }
  function p() {
    this._clearCache(f);
  }
  function _() {
    this._clearCache(g);
  }
  function N() {
    this._clearCache(y);
  }
  function F() {
    this._clearCache(x);
  }
  function L() {
    this._clearCache(S);
  }
  class E extends o.Node {
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
          const H = new n.Transform();
          H.translate(this.fillPatternX(), this.fillPatternY()), H.rotate(e.Konva.getAngle(this.fillPatternRotation())), H.scale(this.fillPatternScaleX(), this.fillPatternScaleY()), H.translate(-1 * this.fillPatternOffsetX(), -1 * this.fillPatternOffsetY());
          const q = H.getMatrix(), ie = typeof DOMMatrix > "u" ? {
            a: q[0],
            b: q[1],
            c: q[2],
            d: q[3],
            e: q[4],
            f: q[5]
          } : new DOMMatrix(q);
          B.setTransform(ie);
        }
        return B;
      }
    }
    _getLinearGradient() {
      return this._getCache(x, this.__getLinearGradient);
    }
    __getLinearGradient() {
      const M = this.fillLinearGradientColorStops();
      if (M) {
        const B = v(), H = this.fillLinearGradientStartPoint(), q = this.fillLinearGradientEndPoint(), ie = B.createLinearGradient(H.x, H.y, q.x, q.y);
        for (let Q = 0; Q < M.length; Q += 2)
          ie.addColorStop(M[Q], M[Q + 1]);
        return ie;
      }
    }
    _getRadialGradient() {
      return this._getCache(S, this.__getRadialGradient);
    }
    __getRadialGradient() {
      const M = this.fillRadialGradientColorStops();
      if (M) {
        const B = v(), H = this.fillRadialGradientStartPoint(), q = this.fillRadialGradientEndPoint(), ie = B.createRadialGradient(H.x, H.y, this.fillRadialGradientStartRadius(), q.x, q.y, this.fillRadialGradientEndRadius());
        for (let Q = 0; Q < M.length; Q += 2)
          ie.addColorStop(M[Q], M[Q + 1]);
        return ie;
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
      const H = B.bufferHitCanvas;
      return H.getContext().clear(), this.drawHit(H, void 0, !0), H.context.getImageData(Math.round(M.x), Math.round(M.y), 1, 1).data[3] > 0;
    }
    destroy() {
      return o.Node.prototype.destroy.call(this), delete t.shapes[this.colorKey], delete this.colorKey, this;
    }
    _useBufferCanvas(M) {
      var B;
      if (!((B = this.attrs.perfectDrawEnabled) !== null && B !== void 0 ? B : !0))
        return !1;
      const q = M || this.hasFill(), ie = this.hasStroke(), Q = this.getAbsoluteOpacity() !== 1;
      if (q && ie && Q)
        return !0;
      const fe = this.hasShadow(), Ce = this.shadowForStrokeEnabled();
      return !!(q && ie && fe && Ce);
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
      let B = !1, H = this.getParent();
      for (; H; ) {
        if (H.isCached()) {
          B = !0;
          break;
        }
        H = H.getParent();
      }
      const q = M.skipTransform, ie = M.relativeTo || B && this.getStage() || void 0, Q = this.getSelfRect(), Ce = !M.skipStroke && this.hasStroke() && this.strokeWidth() || 0, V = Q.width + Ce, J = Q.height + Ce, X = !M.skipShadow && this.hasShadow(), Y = X ? this.shadowOffsetX() : 0, se = X ? this.shadowOffsetY() : 0, Ee = V + Math.abs(Y), ot = J + Math.abs(se), ut = X && this.shadowBlur() || 0, Oe = Ee + ut * 2, A = ot + ut * 2, j = {
        width: Oe,
        height: A,
        x: -(Ce / 2 + ut) + Math.min(Y, 0) + Q.x,
        y: -(Ce / 2 + ut) + Math.min(se, 0) + Q.y
      };
      return q ? j : this._transformedRect(j, ie);
    }
    drawScene(M, B, H) {
      const q = this.getLayer(), ie = M || q.getCanvas(), Q = ie.getContext(), fe = this._getCanvasCache(), Ce = this.getSceneFunc(), V = this.hasShadow();
      let J;
      const X = B === this;
      if (!this.isVisible() && !X)
        return this;
      if (fe) {
        Q.save();
        const Y = this.getAbsoluteTransform(B).getMatrix();
        return Q.transform(Y[0], Y[1], Y[2], Y[3], Y[4], Y[5]), this._drawCachedSceneCanvas(Q), Q.restore(), this;
      }
      if (!Ce)
        return this;
      if (Q.save(), this._useBufferCanvas()) {
        J = this.getStage();
        const Y = H || J.bufferCanvas, se = Y.getContext();
        se.clear(), se.save(), se._applyLineJoin(this);
        const Ee = this.getAbsoluteTransform(B).getMatrix();
        se.transform(Ee[0], Ee[1], Ee[2], Ee[3], Ee[4], Ee[5]), Ce.call(this, se, this), se.restore();
        const ot = Y.pixelRatio;
        V && Q._applyShadow(this), Q._applyOpacity(this), Q._applyGlobalCompositeOperation(this), Q.drawImage(Y._canvas, Y.x || 0, Y.y || 0, Y.width / ot, Y.height / ot);
      } else {
        if (Q._applyLineJoin(this), !X) {
          const Y = this.getAbsoluteTransform(B).getMatrix();
          Q.transform(Y[0], Y[1], Y[2], Y[3], Y[4], Y[5]), Q._applyOpacity(this), Q._applyGlobalCompositeOperation(this);
        }
        V && Q._applyShadow(this), Ce.call(this, Q, this);
      }
      return Q.restore(), this;
    }
    drawHit(M, B, H = !1) {
      if (!this.shouldDrawHit(B, H))
        return this;
      const q = this.getLayer(), ie = M || q.hitCanvas, Q = ie && ie.getContext(), fe = this.hitFunc() || this.sceneFunc(), Ce = this._getCanvasCache(), V = Ce && Ce.hit;
      if (this.colorKey || n.Util.warn("Looks like your canvas has a destroyed shape in it. Do not reuse shape after you destroyed it. If you want to reuse shape you should call remove() instead of destroy()"), V) {
        Q.save();
        const X = this.getAbsoluteTransform(B).getMatrix();
        return Q.transform(X[0], X[1], X[2], X[3], X[4], X[5]), this._drawCachedHitCanvas(Q), Q.restore(), this;
      }
      if (!fe)
        return this;
      if (Q.save(), Q._applyLineJoin(this), !(this === B)) {
        const X = this.getAbsoluteTransform(B).getMatrix();
        Q.transform(X[0], X[1], X[2], X[3], X[4], X[5]);
      }
      return fe.call(this, Q, this), Q.restore(), this;
    }
    drawHitFromCache(M = 0) {
      const B = this._getCanvasCache(), H = this._getCachedSceneCanvas(), q = B.hit, ie = q.getContext(), Q = q.getWidth(), fe = q.getHeight();
      ie.clear(), ie.drawImage(H._canvas, 0, 0, Q, fe);
      try {
        const Ce = ie.getImageData(0, 0, Q, fe), V = Ce.data, J = V.length, X = n.Util._hexToRgb(this.colorKey);
        for (let Y = 0; Y < J; Y += 4)
          V[Y + 3] > M ? (V[Y] = X.r, V[Y + 1] = X.g, V[Y + 2] = X.b, V[Y + 3] = 255) : V[Y + 3] = 0;
        ie.putImageData(Ce, 0, 0);
      } catch (Ce) {
        n.Util.error("Unable to draw hit graph from cached scene canvas. " + Ce.message);
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
  t.Shape = E, E.prototype._fillFunc = P, E.prototype._strokeFunc = R, E.prototype._fillFuncHit = k, E.prototype._strokeFuncHit = w, E.prototype._centroid = !1, E.prototype.nodeType = "Shape", (0, a._registerNode)(E), E.prototype.eventListeners = {}, E.prototype.on.call(E.prototype, "shadowColorChange.konva shadowBlurChange.konva shadowOffsetChange.konva shadowOpacityChange.konva shadowEnabledChange.konva", p), E.prototype.on.call(E.prototype, "shadowColorChange.konva shadowOpacityChange.konva shadowEnabledChange.konva", _), E.prototype.on.call(E.prototype, "fillPriorityChange.konva fillPatternImageChange.konva fillPatternRepeatChange.konva fillPatternScaleXChange.konva fillPatternScaleYChange.konva fillPatternOffsetXChange.konva fillPatternOffsetYChange.konva fillPatternXChange.konva fillPatternYChange.konva fillPatternRotationChange.konva", N), E.prototype.on.call(E.prototype, "fillPriorityChange.konva fillLinearGradientColorStopsChange.konva fillLinearGradientStartPointXChange.konva fillLinearGradientStartPointYChange.konva fillLinearGradientEndPointXChange.konva fillLinearGradientEndPointYChange.konva", F), E.prototype.on.call(E.prototype, "fillPriorityChange.konva fillRadialGradientColorStopsChange.konva fillRadialGradientStartPointXChange.konva fillRadialGradientStartPointYChange.konva fillRadialGradientEndPointXChange.konva fillRadialGradientEndPointYChange.konva fillRadialGradientStartRadiusChange.konva fillRadialGradientEndRadiusChange.konva", L), r.Factory.addGetterSetter(E, "stroke", void 0, (0, l.getStringOrGradientValidator)()), r.Factory.addGetterSetter(E, "strokeWidth", 2, (0, l.getNumberValidator)()), r.Factory.addGetterSetter(E, "fillAfterStrokeEnabled", !1), r.Factory.addGetterSetter(E, "hitStrokeWidth", "auto", (0, l.getNumberOrAutoValidator)()), r.Factory.addGetterSetter(E, "strokeHitEnabled", !0, (0, l.getBooleanValidator)()), r.Factory.addGetterSetter(E, "perfectDrawEnabled", !0, (0, l.getBooleanValidator)()), r.Factory.addGetterSetter(E, "shadowForStrokeEnabled", !0, (0, l.getBooleanValidator)()), r.Factory.addGetterSetter(E, "lineJoin"), r.Factory.addGetterSetter(E, "lineCap"), r.Factory.addGetterSetter(E, "sceneFunc"), r.Factory.addGetterSetter(E, "hitFunc"), r.Factory.addGetterSetter(E, "dash"), r.Factory.addGetterSetter(E, "dashOffset", 0, (0, l.getNumberValidator)()), r.Factory.addGetterSetter(E, "shadowColor", void 0, (0, l.getStringValidator)()), r.Factory.addGetterSetter(E, "shadowBlur", 0, (0, l.getNumberValidator)()), r.Factory.addGetterSetter(E, "shadowOpacity", 1, (0, l.getNumberValidator)()), r.Factory.addComponentsGetterSetter(E, "shadowOffset", ["x", "y"]), r.Factory.addGetterSetter(E, "shadowOffsetX", 0, (0, l.getNumberValidator)()), r.Factory.addGetterSetter(E, "shadowOffsetY", 0, (0, l.getNumberValidator)()), r.Factory.addGetterSetter(E, "fillPatternImage"), r.Factory.addGetterSetter(E, "fill", void 0, (0, l.getStringOrGradientValidator)()), r.Factory.addGetterSetter(E, "fillPatternX", 0, (0, l.getNumberValidator)()), r.Factory.addGetterSetter(E, "fillPatternY", 0, (0, l.getNumberValidator)()), r.Factory.addGetterSetter(E, "fillLinearGradientColorStops"), r.Factory.addGetterSetter(E, "strokeLinearGradientColorStops"), r.Factory.addGetterSetter(E, "fillRadialGradientStartRadius", 0), r.Factory.addGetterSetter(E, "fillRadialGradientEndRadius", 0), r.Factory.addGetterSetter(E, "fillRadialGradientColorStops"), r.Factory.addGetterSetter(E, "fillPatternRepeat", "repeat"), r.Factory.addGetterSetter(E, "fillEnabled", !0), r.Factory.addGetterSetter(E, "strokeEnabled", !0), r.Factory.addGetterSetter(E, "shadowEnabled", !0), r.Factory.addGetterSetter(E, "dashEnabled", !0), r.Factory.addGetterSetter(E, "strokeScaleEnabled", !0), r.Factory.addGetterSetter(E, "fillPriority", "color"), r.Factory.addComponentsGetterSetter(E, "fillPatternOffset", ["x", "y"]), r.Factory.addGetterSetter(E, "fillPatternOffsetX", 0, (0, l.getNumberValidator)()), r.Factory.addGetterSetter(E, "fillPatternOffsetY", 0, (0, l.getNumberValidator)()), r.Factory.addComponentsGetterSetter(E, "fillPatternScale", ["x", "y"]), r.Factory.addGetterSetter(E, "fillPatternScaleX", 1, (0, l.getNumberValidator)()), r.Factory.addGetterSetter(E, "fillPatternScaleY", 1, (0, l.getNumberValidator)()), r.Factory.addComponentsGetterSetter(E, "fillLinearGradientStartPoint", [
    "x",
    "y"
  ]), r.Factory.addComponentsGetterSetter(E, "strokeLinearGradientStartPoint", [
    "x",
    "y"
  ]), r.Factory.addGetterSetter(E, "fillLinearGradientStartPointX", 0), r.Factory.addGetterSetter(E, "strokeLinearGradientStartPointX", 0), r.Factory.addGetterSetter(E, "fillLinearGradientStartPointY", 0), r.Factory.addGetterSetter(E, "strokeLinearGradientStartPointY", 0), r.Factory.addComponentsGetterSetter(E, "fillLinearGradientEndPoint", [
    "x",
    "y"
  ]), r.Factory.addComponentsGetterSetter(E, "strokeLinearGradientEndPoint", [
    "x",
    "y"
  ]), r.Factory.addGetterSetter(E, "fillLinearGradientEndPointX", 0), r.Factory.addGetterSetter(E, "strokeLinearGradientEndPointX", 0), r.Factory.addGetterSetter(E, "fillLinearGradientEndPointY", 0), r.Factory.addGetterSetter(E, "strokeLinearGradientEndPointY", 0), r.Factory.addComponentsGetterSetter(E, "fillRadialGradientStartPoint", [
    "x",
    "y"
  ]), r.Factory.addGetterSetter(E, "fillRadialGradientStartPointX", 0), r.Factory.addGetterSetter(E, "fillRadialGradientStartPointY", 0), r.Factory.addComponentsGetterSetter(E, "fillRadialGradientEndPoint", [
    "x",
    "y"
  ]), r.Factory.addGetterSetter(E, "fillRadialGradientEndPointX", 0), r.Factory.addGetterSetter(E, "fillRadialGradientEndPointY", 0), r.Factory.addGetterSetter(E, "fillPatternRotation", 0), r.Factory.addGetterSetter(E, "fillRule", void 0, (0, l.getStringValidator)()), r.Factory.backCompat(E, {
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
})(gt);
Object.defineProperty(kl, "__esModule", { value: !0 });
kl.Layer = void 0;
const fr = be, Rf = ji, ps = Xe, G0 = Se, r2 = Bn, U8 = de, G8 = gt, B8 = ve, V8 = "#", H8 = "beforeDraw", j8 = "draw", o4 = [
  { x: 0, y: 0 },
  { x: -1, y: -1 },
  { x: 1, y: -1 },
  { x: 1, y: 1 },
  { x: -1, y: 1 }
], W8 = o4.length;
let qs = class extends Rf.Container {
  constructor(e) {
    super(e), this.canvas = new r2.SceneCanvas(), this.hitCanvas = new r2.HitCanvas({
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
    ps.Node.prototype.moveToTop.call(this);
    const e = this.getStage();
    return e && e.content && (e.content.removeChild(this.getNativeCanvasElement()), e.content.appendChild(this.getNativeCanvasElement())), !0;
  }
  moveUp() {
    if (!ps.Node.prototype.moveUp.call(this))
      return !1;
    const n = this.getStage();
    return !n || !n.content ? !1 : (n.content.removeChild(this.getNativeCanvasElement()), this.index < n.children.length - 1 ? n.content.insertBefore(this.getNativeCanvasElement(), n.children[this.index + 1].getCanvas()._canvas) : n.content.appendChild(this.getNativeCanvasElement()), !0);
  }
  moveDown() {
    if (ps.Node.prototype.moveDown.call(this)) {
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
    if (ps.Node.prototype.moveToBottom.call(this)) {
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
    return ps.Node.prototype.remove.call(this), e && e.parentNode && fr.Util._isInDocument(e) && e.parentNode.removeChild(e), this;
  }
  getStage() {
    return this.parent;
  }
  setSize({ width: e, height: n }) {
    return this.canvas.setSize(e, n), this.hitCanvas.setSize(e, n), this._setSmoothEnabled(), this;
  }
  _validateAdd(e) {
    const n = e.getType();
    n !== "Group" && n !== "Shape" && fr.Util.throw("You may only add groups and shapes to a layer.");
  }
  _toKonvaCanvas(e) {
    return e = e || {}, e.width = e.width || this.getWidth(), e.height = e.height || this.getHeight(), e.x = e.x !== void 0 ? e.x : this.x(), e.y = e.y !== void 0 ? e.y : this.y(), ps.Node.prototype._toKonvaCanvas.call(this, e);
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
    fr.Util.warn('Can not change width of layer. Use "stage.width(value)" function instead.');
  }
  getHeight() {
    if (this.parent)
      return this.parent.height();
  }
  setHeight() {
    fr.Util.warn('Can not change height of layer. Use "stage.height(value)" function instead.');
  }
  batchDraw() {
    return this._waitingForDraw || (this._waitingForDraw = !0, fr.Util.requestAnimFrame(() => {
      this.draw(), this._waitingForDraw = !1;
    })), this;
  }
  getIntersection(e) {
    if (!this.isListening() || !this.isVisible())
      return null;
    let n = 1, r = !1;
    for (; ; ) {
      for (let o = 0; o < W8; o++) {
        const l = o4[o], a = this._getIntersection({
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
      const l = fr.Util._rgbToHex(r[0], r[1], r[2]), a = G8.shapes[V8 + l];
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
    return this._fire(H8, {
      node: this
    }), this.clearBeforeDraw() && l.getContext().clear(), Rf.Container.prototype.drawScene.call(this, l, n, r), this._fire(j8, {
      node: this
    }), this;
  }
  drawHit(e, n) {
    const r = this.getLayer(), o = e || r && r.hitCanvas;
    return r && r.clearBeforeDraw() && r.getHitCanvas().getContext().clear(), Rf.Container.prototype.drawHit.call(this, o, n), this;
  }
  enableHitGraph() {
    return this.hitGraphEnabled(!0), this;
  }
  disableHitGraph() {
    return this.hitGraphEnabled(!1), this;
  }
  setHitGraphEnabled(e) {
    fr.Util.warn("hitGraphEnabled method is deprecated. Please use layer.listening() instead."), this.listening(e);
  }
  getHitGraphEnabled(e) {
    return fr.Util.warn("hitGraphEnabled method is deprecated. Please use layer.listening() instead."), this.listening();
  }
  toggleHitCanvas() {
    if (!this.parent || !this.parent.content)
      return;
    const e = this.parent;
    !!this.hitCanvas._canvas.parentNode ? e.content.removeChild(this.hitCanvas._canvas) : e.content.appendChild(this.hitCanvas._canvas);
  }
  destroy() {
    return fr.Util.releaseCanvas(this.getNativeCanvasElement(), this.getHitCanvas()._canvas), super.destroy();
  }
};
kl.Layer = qs;
qs.prototype.nodeType = "Layer";
(0, B8._registerNode)(qs);
G0.Factory.addGetterSetter(qs, "imageSmoothingEnabled", !0);
G0.Factory.addGetterSetter(qs, "clearBeforeDraw", !0);
G0.Factory.addGetterSetter(qs, "hitGraphEnabled", !0, (0, U8.getBooleanValidator)());
var bu = {};
Object.defineProperty(bu, "__esModule", { value: !0 });
bu.FastLayer = void 0;
const K8 = be, Y8 = kl, X8 = ve;
class B0 extends Y8.Layer {
  constructor(e) {
    super(e), this.listening(!1), K8.Util.warn('Konva.Fast layer is deprecated. Please use "new Konva.Layer({ listening: false })" instead.');
  }
}
bu.FastLayer = B0;
B0.prototype.nodeType = "FastLayer";
(0, X8._registerNode)(B0);
var Js = {};
Object.defineProperty(Js, "__esModule", { value: !0 });
Js.Group = void 0;
const Q8 = be, $8 = ji, q8 = ve;
class V0 extends $8.Container {
  _validateAdd(e) {
    const n = e.getType();
    n !== "Group" && n !== "Shape" && Q8.Util.throw("You may only add groups and shapes to groups.");
  }
}
Js.Group = V0;
V0.prototype.nodeType = "Group";
(0, q8._registerNode)(V0);
var Zs = {};
Object.defineProperty(Zs, "__esModule", { value: !0 });
Zs.Animation = void 0;
const Ff = ve, i2 = be, Mf = function() {
  return Ff.glob.performance && Ff.glob.performance.now ? function() {
    return Ff.glob.performance.now();
  } : function() {
    return (/* @__PURE__ */ new Date()).getTime();
  };
}();
class er {
  constructor(e, n) {
    this.id = er.animIdCounter++, this.frame = {
      time: 0,
      timeDiff: 0,
      lastTime: Mf(),
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
    const n = er.animations, r = n.length;
    for (let o = 0; o < r; o++)
      if (n[o].id === this.id)
        return !0;
    return !1;
  }
  start() {
    return this.stop(), this.frame.timeDiff = 0, this.frame.lastTime = Mf(), er._addAnimation(this), this;
  }
  stop() {
    return er._removeAnimation(this), this;
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
      o._updateFrameObject(Mf());
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
    const e = er;
    e.animations.length ? (e._runFrames(), i2.Util.requestAnimFrame(e._animationLoop)) : e.animRunning = !1;
  }
  static _handleAnimation() {
    this.animRunning || (this.animRunning = !0, i2.Util.requestAnimFrame(this._animationLoop));
  }
}
Zs.Animation = er;
er.animations = [];
er.animIdCounter = 0;
er.animRunning = !1;
var l4 = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.Easings = t.Tween = void 0;
  const e = be, n = Zs, r = Xe, o = ve, l = {
    node: 1,
    duration: 1,
    easing: 1,
    onFinish: 1,
    yoyo: 1
  }, a = 1, c = 2, f = 3, g = ["fill", "stroke", "shadowColor"];
  let y = 0;
  class x {
    constructor(v, P, R, k, w, p, _) {
      this.prop = v, this.propFunc = P, this.begin = k, this._pos = k, this.duration = p, this._change = 0, this.prevPos = 0, this.yoyo = _, this._time = 0, this._position = 0, this._startTime = 0, this._finish = 0, this.func = R, this._change = w - this.begin, this.pause();
    }
    fire(v) {
      const P = this[v];
      P && P();
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
      const P = this, R = v.node, k = R._id, w = v.easing || t.Easings.Linear, p = !!v.yoyo;
      let _, N;
      typeof v.duration > "u" ? _ = 0.3 : v.duration === 0 ? _ = 1e-3 : _ = v.duration, this.node = R, this._id = y++;
      const F = R.getLayer() || (R instanceof o.Konva.Stage ? R.getLayers() : null);
      F || e.Util.error("Tween constructor have `node` that is not in a layer. Please add node into layer first."), this.anim = new n.Animation(function() {
        P.tween.onEnterFrame();
      }, F), this.tween = new x(N, function(L) {
        P._tweenFunc(L);
      }, w, 0, 1, _ * 1e3, p), this._addListeners(), S.attrs[k] || (S.attrs[k] = {}), S.attrs[k][this._id] || (S.attrs[k][this._id] = {}), S.tweens[k] || (S.tweens[k] = {});
      for (N in v)
        l[N] === void 0 && this._addAttr(N, v[N]);
      this.reset(), this.onFinish = v.onFinish, this.onReset = v.onReset, this.onUpdate = v.onUpdate;
    }
    _addAttr(v, P) {
      const R = this.node, k = R._id;
      let w, p, _, N, F;
      const L = S.tweens[k][v];
      L && delete S.attrs[k][L][v];
      let E = R.getAttr(v);
      if (e.Util._isArray(P))
        if (w = [], p = Math.max(P.length, E.length), v === "points" && P.length !== E.length && (P.length > E.length ? (N = E, E = e.Util._prepareArrayForTween(E, P, R.closed())) : (_ = P, P = e.Util._prepareArrayForTween(P, E, R.closed()))), v.indexOf("fill") === 0)
          for (let I = 0; I < p; I++)
            if (I % 2 === 0)
              w.push(P[I] - E[I]);
            else {
              const M = e.Util.colorToRGBA(E[I]);
              F = e.Util.colorToRGBA(P[I]), E[I] = M, w.push({
                r: F.r - M.r,
                g: F.g - M.g,
                b: F.b - M.b,
                a: F.a - M.a
              });
            }
        else
          for (let I = 0; I < p; I++)
            w.push(P[I] - E[I]);
      else g.indexOf(v) !== -1 ? (E = e.Util.colorToRGBA(E), F = e.Util.colorToRGBA(P), w = {
        r: F.r - E.r,
        g: F.g - E.g,
        b: F.b - E.b,
        a: F.a - E.a
      }) : w = P - E;
      S.attrs[k][this._id][v] = {
        start: E,
        diff: w,
        end: P,
        trueEnd: _,
        trueStart: N
      }, S.tweens[k][v] = this._id;
    }
    _tweenFunc(v) {
      const P = this.node, R = S.attrs[P._id][this._id];
      let k, w, p, _, N, F, L, E;
      for (k in R) {
        if (w = R[k], p = w.start, _ = w.diff, E = w.end, e.Util._isArray(p))
          if (N = [], L = Math.max(p.length, E.length), k.indexOf("fill") === 0)
            for (F = 0; F < L; F++)
              F % 2 === 0 ? N.push((p[F] || 0) + _[F] * v) : N.push("rgba(" + Math.round(p[F].r + _[F].r * v) + "," + Math.round(p[F].g + _[F].g * v) + "," + Math.round(p[F].b + _[F].b * v) + "," + (p[F].a + _[F].a * v) + ")");
          else
            for (F = 0; F < L; F++)
              N.push((p[F] || 0) + _[F] * v);
        else g.indexOf(k) !== -1 ? N = "rgba(" + Math.round(p.r + _.r * v) + "," + Math.round(p.g + _.g * v) + "," + Math.round(p.b + _.b * v) + "," + (p.a + _.a * v) + ")" : N = p + _ * v;
        P.setAttr(k, N);
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
        const v = this.node, P = S.attrs[v._id][this._id];
        P.points && P.points.trueEnd && v.setAttr("points", P.points.trueEnd), this.onFinish && this.onFinish.call(this);
      }, this.tween.onReset = () => {
        const v = this.node, P = S.attrs[v._id][this._id];
        P.points && P.points.trueStart && v.points(P.points.trueStart), this.onReset && this.onReset();
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
      const v = this.node._id, P = this._id, R = S.tweens[v];
      this.pause(), this.anim && this.anim.stop();
      for (const k in R)
        delete S.tweens[v][k];
      delete S.attrs[v][P], S.tweens[v] && (Object.keys(S.tweens[v]).length === 0 && delete S.tweens[v], Object.keys(S.attrs[v]).length === 0 && delete S.attrs[v]);
    }
  }
  t.Tween = S, S.attrs = {}, S.tweens = {}, r.Node.prototype.to = function(C) {
    const v = C.onFinish;
    C.node = this, C.onFinish = function() {
      this.destroy(), v && v();
    }, new S(C).play();
  }, t.Easings = {
    BackEaseIn(C, v, P, R) {
      return P * (C /= R) * C * ((1.70158 + 1) * C - 1.70158) + v;
    },
    BackEaseOut(C, v, P, R) {
      return P * ((C = C / R - 1) * C * ((1.70158 + 1) * C + 1.70158) + 1) + v;
    },
    BackEaseInOut(C, v, P, R) {
      let k = 1.70158;
      return (C /= R / 2) < 1 ? P / 2 * (C * C * (((k *= 1.525) + 1) * C - k)) + v : P / 2 * ((C -= 2) * C * (((k *= 1.525) + 1) * C + k) + 2) + v;
    },
    ElasticEaseIn(C, v, P, R, k, w) {
      let p = 0;
      return C === 0 ? v : (C /= R) === 1 ? v + P : (w || (w = R * 0.3), !k || k < Math.abs(P) ? (k = P, p = w / 4) : p = w / (2 * Math.PI) * Math.asin(P / k), -(k * Math.pow(2, 10 * (C -= 1)) * Math.sin((C * R - p) * (2 * Math.PI) / w)) + v);
    },
    ElasticEaseOut(C, v, P, R, k, w) {
      let p = 0;
      return C === 0 ? v : (C /= R) === 1 ? v + P : (w || (w = R * 0.3), !k || k < Math.abs(P) ? (k = P, p = w / 4) : p = w / (2 * Math.PI) * Math.asin(P / k), k * Math.pow(2, -10 * C) * Math.sin((C * R - p) * (2 * Math.PI) / w) + P + v);
    },
    ElasticEaseInOut(C, v, P, R, k, w) {
      let p = 0;
      return C === 0 ? v : (C /= R / 2) === 2 ? v + P : (w || (w = R * (0.3 * 1.5)), !k || k < Math.abs(P) ? (k = P, p = w / 4) : p = w / (2 * Math.PI) * Math.asin(P / k), C < 1 ? -0.5 * (k * Math.pow(2, 10 * (C -= 1)) * Math.sin((C * R - p) * (2 * Math.PI) / w)) + v : k * Math.pow(2, -10 * (C -= 1)) * Math.sin((C * R - p) * (2 * Math.PI) / w) * 0.5 + P + v);
    },
    BounceEaseOut(C, v, P, R) {
      return (C /= R) < 1 / 2.75 ? P * (7.5625 * C * C) + v : C < 2 / 2.75 ? P * (7.5625 * (C -= 1.5 / 2.75) * C + 0.75) + v : C < 2.5 / 2.75 ? P * (7.5625 * (C -= 2.25 / 2.75) * C + 0.9375) + v : P * (7.5625 * (C -= 2.625 / 2.75) * C + 0.984375) + v;
    },
    BounceEaseIn(C, v, P, R) {
      return P - t.Easings.BounceEaseOut(R - C, 0, P, R) + v;
    },
    BounceEaseInOut(C, v, P, R) {
      return C < R / 2 ? t.Easings.BounceEaseIn(C * 2, 0, P, R) * 0.5 + v : t.Easings.BounceEaseOut(C * 2 - R, 0, P, R) * 0.5 + P * 0.5 + v;
    },
    EaseIn(C, v, P, R) {
      return P * (C /= R) * C + v;
    },
    EaseOut(C, v, P, R) {
      return -P * (C /= R) * (C - 2) + v;
    },
    EaseInOut(C, v, P, R) {
      return (C /= R / 2) < 1 ? P / 2 * C * C + v : -P / 2 * (--C * (C - 2) - 1) + v;
    },
    StrongEaseIn(C, v, P, R) {
      return P * (C /= R) * C * C * C * C + v;
    },
    StrongEaseOut(C, v, P, R) {
      return P * ((C = C / R - 1) * C * C * C * C + 1) + v;
    },
    StrongEaseInOut(C, v, P, R) {
      return (C /= R / 2) < 1 ? P / 2 * C * C * C * C * C + v : P / 2 * ((C -= 2) * C * C * C * C + 2) + v;
    },
    Linear(C, v, P, R) {
      return P * C / R + v;
    }
  };
})(l4);
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.Konva = void 0;
  const e = ve, n = be, r = Xe, o = ji, l = r4, a = kl, c = bu, f = Js, g = Ju, y = gt, x = Zs, S = l4, C = _r, v = Bn;
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
    Animation: x.Animation,
    Tween: S.Tween,
    Easings: S.Easings,
    Context: C.Context,
    Canvas: v.Canvas
  }), t.default = t.Konva;
})(Tu);
var ec = {};
Object.defineProperty(ec, "__esModule", { value: !0 });
ec.Arc = void 0;
const tc = Se, J8 = gt, s2 = ve, nc = de, Z8 = ve;
class Tr extends J8.Shape {
  _sceneFunc(e) {
    const n = s2.Konva.getAngle(this.angle()), r = this.clockwise();
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
    const e = this.innerRadius(), n = this.outerRadius(), r = this.clockwise(), o = s2.Konva.getAngle(r ? 360 - this.angle() : this.angle()), l = Math.cos(Math.min(o, Math.PI)), a = 1, c = Math.sin(Math.min(Math.max(Math.PI, o), 3 * Math.PI / 2)), f = Math.sin(Math.min(o, Math.PI / 2)), g = l * (l > 0 ? e : n), y = a * n, x = c * (c > 0 ? e : n), S = f * (f > 0 ? n : e);
    return {
      x: g,
      y: r ? -1 * S : x,
      width: y - g,
      height: S - x
    };
  }
}
ec.Arc = Tr;
Tr.prototype._centroid = !0;
Tr.prototype.className = "Arc";
Tr.prototype._attrsAffectingSize = [
  "innerRadius",
  "outerRadius",
  "angle",
  "clockwise"
];
(0, Z8._registerNode)(Tr);
tc.Factory.addGetterSetter(Tr, "innerRadius", 0, (0, nc.getNumberValidator)());
tc.Factory.addGetterSetter(Tr, "outerRadius", 0, (0, nc.getNumberValidator)());
tc.Factory.addGetterSetter(Tr, "angle", 0, (0, nc.getNumberValidator)());
tc.Factory.addGetterSetter(Tr, "clockwise", !1, (0, nc.getBooleanValidator)());
var rc = {}, El = {};
Object.defineProperty(El, "__esModule", { value: !0 });
El.Line = void 0;
const ic = Se, b8 = ve, e9 = gt, a4 = de;
function Oh(t, e, n, r, o, l, a) {
  const c = Math.sqrt(Math.pow(n - t, 2) + Math.pow(r - e, 2)), f = Math.sqrt(Math.pow(o - n, 2) + Math.pow(l - r, 2)), g = a * c / (c + f), y = a * f / (c + f), x = n - g * (o - t), S = r - g * (l - e), C = n + y * (o - t), v = r + y * (l - e);
  return [x, S, C, v];
}
function o2(t, e) {
  const n = t.length, r = [];
  for (let o = 2; o < n - 2; o += 2) {
    const l = Oh(t[o - 2], t[o - 1], t[o], t[o + 1], t[o + 2], t[o + 3], e);
    isNaN(l[0]) || (r.push(l[0]), r.push(l[1]), r.push(t[o]), r.push(t[o + 1]), r.push(l[2]), r.push(l[3]));
  }
  return r;
}
let ci = class extends e9.Shape {
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
    return this.closed() ? this._getTensionPointsClosed() : o2(this.points(), this.tension());
  }
  _getTensionPointsClosed() {
    const e = this.points(), n = e.length, r = this.tension(), o = Oh(e[n - 2], e[n - 1], e[0], e[1], e[2], e[3], r), l = Oh(e[n - 4], e[n - 3], e[n - 2], e[n - 1], e[0], e[1], r), a = o2(e, r);
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
El.Line = ci;
ci.prototype.className = "Line";
ci.prototype._attrsAffectingSize = ["points", "bezier", "tension"];
(0, b8._registerNode)(ci);
ic.Factory.addGetterSetter(ci, "closed", !1);
ic.Factory.addGetterSetter(ci, "bezier", !1);
ic.Factory.addGetterSetter(ci, "tension", 0, (0, a4.getNumberValidator)());
ic.Factory.addGetterSetter(ci, "points", [], (0, a4.getNumberArrayValidator)());
var bs = {}, u4 = {};
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
    for (let C = 0; C < 20; C++)
      y = S * t.tValues[20][C] + S, g += t.cValues[20][C] * r(a, c, y);
    return S * g;
  };
  t.getCubicArcLength = e;
  const n = (a, c, f) => {
    f === void 0 && (f = 1);
    const g = a[0] - 2 * a[1] + a[2], y = c[0] - 2 * c[1] + c[2], x = 2 * a[1] - 2 * a[0], S = 2 * c[1] - 2 * c[0], C = 4 * (g * g + y * y), v = 4 * (g * x + y * S), P = x * x + S * S;
    if (C === 0)
      return f * Math.sqrt(Math.pow(a[2] - a[0], 2) + Math.pow(c[2] - c[0], 2));
    const R = v / (2 * C), k = P / C, w = f + R, p = k - R * R, _ = w * w + p > 0 ? Math.sqrt(w * w + p) : 0, N = R * R + p > 0 ? Math.sqrt(R * R + p) : 0, F = R + Math.sqrt(R * R + p) !== 0 ? p * Math.log(Math.abs((w + _) / (R + N))) : 0;
    return Math.sqrt(C) / 2 * (w * _ - R * N + F);
  };
  t.getQuadraticArcLength = n;
  function r(a, c, f) {
    const g = o(1, f, a), y = o(1, f, c), x = g * g + y * y;
    return Math.sqrt(x);
  }
  const o = (a, c, f) => {
    const g = f.length - 1;
    let y, x;
    if (g === 0)
      return 0;
    if (a === 0) {
      x = 0;
      for (let S = 0; S <= g; S++)
        x += t.binomialCoefficients[g][S] * Math.pow(1 - c, g - S) * Math.pow(c, S) * f[S];
      return x;
    } else {
      y = new Array(g);
      for (let S = 0; S < g; S++)
        y[S] = g * (f[S + 1] - f[S]);
      return o(a - 1, c, y);
    }
  }, l = (a, c, f) => {
    let g = 1, y = a / c, x = (a - f(y)) / c, S = 0;
    for (; g > 1e-3; ) {
      const C = f(y + x), v = Math.abs(a - C) / c;
      if (v < g)
        g = v, y += x;
      else {
        const P = f(y - x), R = Math.abs(a - P) / c;
        R < g ? (g = R, y -= x) : x /= 2;
      }
      if (S++, S > 500)
        break;
    }
    return y;
  };
  t.t2length = l;
})(u4);
Object.defineProperty(bs, "__esModule", { value: !0 });
bs.Path = void 0;
const t9 = Se, n9 = ve, r9 = gt, gs = u4;
class ft extends r9.Shape {
  constructor(e) {
    super(e), this.dataArray = [], this.pathLength = 0, this._readDataAttribute(), this.on("dataChange.konva", function() {
      this._readDataAttribute();
    });
  }
  _readDataAttribute() {
    this.dataArray = ft.parsePathData(this.data()), this.pathLength = ft.getPathLength(this.dataArray);
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
          const c = a[0], f = a[1], g = a[2], y = a[3], x = a[4], S = a[5], C = a[6], v = a[7], P = g > y ? g : y, R = g > y ? 1 : g / y, k = g > y ? y / g : 1;
          e.translate(c, f), e.rotate(C), e.scale(R, k), e.arc(0, 0, P, x, x + S, 1 - v), e.scale(1 / R, 1 / k), e.rotate(-C), e.translate(-c, -f);
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
        const g = f.points[4], y = f.points[5], x = f.points[4] + y;
        let S = Math.PI / 180;
        if (Math.abs(g - x) < S && (S = Math.abs(g - x)), y < 0)
          for (let C = g - S; C > x; C -= S) {
            const v = ft.getPointOnEllipticalArc(f.points[0], f.points[1], f.points[2], f.points[3], C, 0);
            e.push(v.x, v.y);
          }
        else
          for (let C = g + S; C < x; C += S) {
            const v = ft.getPointOnEllipticalArc(f.points[0], f.points[1], f.points[2], f.points[3], C, 0);
            e.push(v.x, v.y);
          }
      } else if (f.command === "C")
        for (let g = 0; g <= 1; g += 0.01) {
          const y = ft.getPointOnCubicBezier(g, f.start.x, f.start.y, f.points[0], f.points[1], f.points[2], f.points[3], f.points[4], f.points[5]);
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
    return ft.getPointAtLengthOfDataArray(e, this.dataArray);
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
        return ft.getPointOnLine(e, a.start.x, a.start.y, c[0], c[1]);
      case "C":
        return ft.getPointOnCubicBezier((0, gs.t2length)(e, ft.getPathLength(n), (P) => (0, gs.getCubicArcLength)([a.start.x, c[0], c[2], c[4]], [a.start.y, c[1], c[3], c[5]], P)), a.start.x, a.start.y, c[0], c[1], c[2], c[3], c[4], c[5]);
      case "Q":
        return ft.getPointOnQuadraticBezier((0, gs.t2length)(e, ft.getPathLength(n), (P) => (0, gs.getQuadraticArcLength)([a.start.x, c[0], c[2]], [a.start.y, c[1], c[3]], P)), a.start.x, a.start.y, c[0], c[1], c[2], c[3]);
      case "A":
        const f = c[0], g = c[1], y = c[2], x = c[3], S = c[5], C = c[6];
        let v = c[4];
        return v += S * e / a.pathLength, ft.getPointOnEllipticalArc(f, g, y, x, v, C);
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
    const g = (l - r) / (o - n), y = Math.sqrt(e * e / (1 + g * g)) * (o < n ? -1 : 1), x = g * y;
    if (Math.abs(c - r - g * (a - n)) < 1e-10)
      return { x: a + y, y: c + x };
    const S = ((a - n) * (o - n) + (c - r) * (l - r)) / (f * f), C = n + S * (o - n), v = r + S * (l - r), P = this.getLineLength(a, c, C, v), R = Math.sqrt(e * e - P * P), k = Math.sqrt(R * R / (1 + g * g)) * (o < n ? -1 : 1), w = g * k;
    return { x: C + k, y: v + w };
  }
  static getPointOnCubicBezier(e, n, r, o, l, a, c, f, g) {
    function y(R) {
      return R * R * R;
    }
    function x(R) {
      return 3 * R * R * (1 - R);
    }
    function S(R) {
      return 3 * R * (1 - R) * (1 - R);
    }
    function C(R) {
      return (1 - R) * (1 - R) * (1 - R);
    }
    const v = f * y(e) + a * x(e) + o * S(e) + n * C(e), P = g * y(e) + c * x(e) + l * S(e) + r * C(e);
    return { x: v, y: P };
  }
  static getPointOnQuadraticBezier(e, n, r, o, l, a, c) {
    function f(C) {
      return C * C;
    }
    function g(C) {
      return 2 * C * (1 - C);
    }
    function y(C) {
      return (1 - C) * (1 - C);
    }
    const x = a * f(e) + o * g(e) + n * y(e), S = c * f(e) + l * g(e) + r * y(e);
    return { x, y: S };
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
    for (let x = 0; x < r.length; x++)
      n = n.replace(new RegExp(r[x], "g"), "|" + r[x]);
    const o = n.split("|"), l = [], a = [];
    let c = 0, f = 0;
    const g = /([-+]?((\d+\.\d+)|((\d+)|(\.\d+)))(?:e[-+]?\d+)?)/gi;
    let y;
    for (let x = 1; x < o.length; x++) {
      let S = o[x], C = S.charAt(0);
      for (S = S.slice(1), a.length = 0; y = g.exec(S); )
        a.push(y[0]);
      const v = [];
      for (let P = 0, R = a.length; P < R; P++) {
        if (a[P] === "00") {
          v.push(0, 0);
          continue;
        }
        const k = parseFloat(a[P]);
        isNaN(k) ? v.push(0) : v.push(k);
      }
      for (; v.length > 0 && !isNaN(v[0]); ) {
        let P = "", R = [];
        const k = c, w = f;
        let p, _, N, F, L, E, I, M, B, H;
        switch (C) {
          case "l":
            c += v.shift(), f += v.shift(), P = "L", R.push(c, f);
            break;
          case "L":
            c = v.shift(), f = v.shift(), R.push(c, f);
            break;
          case "m":
            const q = v.shift(), ie = v.shift();
            if (c += q, f += ie, P = "M", l.length > 2 && l[l.length - 1].command === "z") {
              for (let Q = l.length - 2; Q >= 0; Q--)
                if (l[Q].command === "M") {
                  c = l[Q].points[0] + q, f = l[Q].points[1] + ie;
                  break;
                }
            }
            R.push(c, f), C = "l";
            break;
          case "M":
            c = v.shift(), f = v.shift(), P = "M", R.push(c, f), C = "L";
            break;
          case "h":
            c += v.shift(), P = "L", R.push(c, f);
            break;
          case "H":
            c = v.shift(), P = "L", R.push(c, f);
            break;
          case "v":
            f += v.shift(), P = "L", R.push(c, f);
            break;
          case "V":
            f = v.shift(), P = "L", R.push(c, f);
            break;
          case "C":
            R.push(v.shift(), v.shift(), v.shift(), v.shift()), c = v.shift(), f = v.shift(), R.push(c, f);
            break;
          case "c":
            R.push(c + v.shift(), f + v.shift(), c + v.shift(), f + v.shift()), c += v.shift(), f += v.shift(), P = "C", R.push(c, f);
            break;
          case "S":
            _ = c, N = f, p = l[l.length - 1], p.command === "C" && (_ = c + (c - p.points[2]), N = f + (f - p.points[3])), R.push(_, N, v.shift(), v.shift()), c = v.shift(), f = v.shift(), P = "C", R.push(c, f);
            break;
          case "s":
            _ = c, N = f, p = l[l.length - 1], p.command === "C" && (_ = c + (c - p.points[2]), N = f + (f - p.points[3])), R.push(_, N, c + v.shift(), f + v.shift()), c += v.shift(), f += v.shift(), P = "C", R.push(c, f);
            break;
          case "Q":
            R.push(v.shift(), v.shift()), c = v.shift(), f = v.shift(), R.push(c, f);
            break;
          case "q":
            R.push(c + v.shift(), f + v.shift()), c += v.shift(), f += v.shift(), P = "Q", R.push(c, f);
            break;
          case "T":
            _ = c, N = f, p = l[l.length - 1], p.command === "Q" && (_ = c + (c - p.points[0]), N = f + (f - p.points[1])), c = v.shift(), f = v.shift(), P = "Q", R.push(_, N, c, f);
            break;
          case "t":
            _ = c, N = f, p = l[l.length - 1], p.command === "Q" && (_ = c + (c - p.points[0]), N = f + (f - p.points[1])), c += v.shift(), f += v.shift(), P = "Q", R.push(_, N, c, f);
            break;
          case "A":
            F = v.shift(), L = v.shift(), E = v.shift(), I = v.shift(), M = v.shift(), B = c, H = f, c = v.shift(), f = v.shift(), P = "A", R = this.convertEndpointToCenterParameterization(B, H, c, f, I, M, F, L, E);
            break;
          case "a":
            F = v.shift(), L = v.shift(), E = v.shift(), I = v.shift(), M = v.shift(), B = c, H = f, c += v.shift(), f += v.shift(), P = "A", R = this.convertEndpointToCenterParameterization(B, H, c, f, I, M, F, L, E);
            break;
        }
        l.push({
          command: P || C,
          points: R,
          start: {
            x: k,
            y: w
          },
          pathLength: this.calcLength(k, w, P || C, R)
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
    let l, a, c, f;
    const g = ft;
    switch (r) {
      case "L":
        return g.getLineLength(e, n, o[0], o[1]);
      case "C":
        return (0, gs.getCubicArcLength)([e, o[0], o[2], o[4]], [n, o[1], o[3], o[5]], 1);
      case "Q":
        return (0, gs.getQuadraticArcLength)([e, o[0], o[2]], [n, o[1], o[3]], 1);
      case "A":
        l = 0;
        const y = o[4], x = o[5], S = o[4] + x;
        let C = Math.PI / 180;
        if (Math.abs(y - S) < C && (C = Math.abs(y - S)), a = g.getPointOnEllipticalArc(o[0], o[1], o[2], o[3], y, 0), x < 0)
          for (f = y - C; f > S; f -= C)
            c = g.getPointOnEllipticalArc(o[0], o[1], o[2], o[3], f, 0), l += g.getLineLength(a.x, a.y, c.x, c.y), a = c;
        else
          for (f = y + C; f < S; f += C)
            c = g.getPointOnEllipticalArc(o[0], o[1], o[2], o[3], f, 0), l += g.getLineLength(a.x, a.y, c.x, c.y), a = c;
        return c = g.getPointOnEllipticalArc(o[0], o[1], o[2], o[3], S, 0), l += g.getLineLength(a.x, a.y, c.x, c.y), l;
    }
    return 0;
  }
  static convertEndpointToCenterParameterization(e, n, r, o, l, a, c, f, g) {
    const y = g * (Math.PI / 180), x = Math.cos(y) * (e - r) / 2 + Math.sin(y) * (n - o) / 2, S = -1 * Math.sin(y) * (e - r) / 2 + Math.cos(y) * (n - o) / 2, C = x * x / (c * c) + S * S / (f * f);
    C > 1 && (c *= Math.sqrt(C), f *= Math.sqrt(C));
    let v = Math.sqrt((c * c * (f * f) - c * c * (S * S) - f * f * (x * x)) / (c * c * (S * S) + f * f * (x * x)));
    l === a && (v *= -1), isNaN(v) && (v = 0);
    const P = v * c * S / f, R = v * -f * x / c, k = (e + r) / 2 + Math.cos(y) * P - Math.sin(y) * R, w = (n + o) / 2 + Math.sin(y) * P + Math.cos(y) * R, p = function(M) {
      return Math.sqrt(M[0] * M[0] + M[1] * M[1]);
    }, _ = function(M, B) {
      return (M[0] * B[0] + M[1] * B[1]) / (p(M) * p(B));
    }, N = function(M, B) {
      return (M[0] * B[1] < M[1] * B[0] ? -1 : 1) * Math.acos(_(M, B));
    }, F = N([1, 0], [(x - P) / c, (S - R) / f]), L = [(x - P) / c, (S - R) / f], E = [(-1 * x - P) / c, (-1 * S - R) / f];
    let I = N(L, E);
    return _(L, E) <= -1 && (I = Math.PI), _(L, E) >= 1 && (I = 0), a === 0 && I > 0 && (I = I - 2 * Math.PI), a === 1 && I < 0 && (I = I + 2 * Math.PI), [k, w, c, f, F, I, y, a];
  }
}
bs.Path = ft;
ft.prototype.className = "Path";
ft.prototype._attrsAffectingSize = ["data"];
(0, n9._registerNode)(ft);
t9.Factory.addGetterSetter(ft, "data");
Object.defineProperty(rc, "__esModule", { value: !0 });
rc.Arrow = void 0;
const sc = Se, i9 = El, c4 = de, s9 = ve, l2 = bs;
class Ki extends i9.Line {
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
      ], C = l2.Path.calcLength(o[o.length - 4], o[o.length - 3], "C", S), v = l2.Path.getPointOnQuadraticBezier(Math.min(1, 1 - a / C), S[0], S[1], S[2], S[3], S[4], S[5]);
      f = r[c - 2] - v.x, g = r[c - 1] - v.y;
    } else
      f = r[c - 2] - r[c - 4], g = r[c - 1] - r[c - 3];
    const y = (Math.atan2(g, f) + n) % n, x = this.pointerWidth();
    this.pointerAtEnding() && (e.save(), e.beginPath(), e.translate(r[c - 2], r[c - 1]), e.rotate(y), e.moveTo(0, 0), e.lineTo(-a, x / 2), e.lineTo(-a, -x / 2), e.closePath(), e.restore(), this.__fillStroke(e)), this.pointerAtBeginning() && (e.save(), e.beginPath(), e.translate(r[0], r[1]), l ? (f = (o[0] + o[2]) / 2 - r[0], g = (o[1] + o[3]) / 2 - r[1]) : (f = r[2] - r[0], g = r[3] - r[1]), e.rotate((Math.atan2(-g, -f) + n) % n), e.moveTo(0, 0), e.lineTo(-a, x / 2), e.lineTo(-a, -x / 2), e.closePath(), e.restore(), this.__fillStroke(e));
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
rc.Arrow = Ki;
Ki.prototype.className = "Arrow";
(0, s9._registerNode)(Ki);
sc.Factory.addGetterSetter(Ki, "pointerLength", 10, (0, c4.getNumberValidator)());
sc.Factory.addGetterSetter(Ki, "pointerWidth", 10, (0, c4.getNumberValidator)());
sc.Factory.addGetterSetter(Ki, "pointerAtBeginning", !1);
sc.Factory.addGetterSetter(Ki, "pointerAtEnding", !0);
var oc = {};
Object.defineProperty(oc, "__esModule", { value: !0 });
oc.Circle = void 0;
const o9 = Se, l9 = gt, a9 = de, u9 = ve;
let eo = class extends l9.Shape {
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
oc.Circle = eo;
eo.prototype._centroid = !0;
eo.prototype.className = "Circle";
eo.prototype._attrsAffectingSize = ["radius"];
(0, u9._registerNode)(eo);
o9.Factory.addGetterSetter(eo, "radius", 0, (0, a9.getNumberValidator)());
var lc = {};
Object.defineProperty(lc, "__esModule", { value: !0 });
lc.Ellipse = void 0;
const H0 = Se, c9 = gt, d4 = de, d9 = ve;
class di extends c9.Shape {
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
lc.Ellipse = di;
di.prototype.className = "Ellipse";
di.prototype._centroid = !0;
di.prototype._attrsAffectingSize = ["radiusX", "radiusY"];
(0, d9._registerNode)(di);
H0.Factory.addComponentsGetterSetter(di, "radius", ["x", "y"]);
H0.Factory.addGetterSetter(di, "radiusX", 0, (0, d4.getNumberValidator)());
H0.Factory.addGetterSetter(di, "radiusY", 0, (0, d4.getNumberValidator)());
var ac = {};
Object.defineProperty(ac, "__esModule", { value: !0 });
ac.Image = void 0;
const Lf = be, Yi = Se, f9 = gt, h9 = ve, Pl = de;
let rr = class f4 extends f9.Shape {
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
    (this.hasFill() || this.hasStroke() || o) && (e.beginPath(), o ? Lf.Util.drawRoundedRectPath(e, n, r, o) : e.rect(0, 0, n, r), e.closePath(), e.fillStrokeShape(this)), l && (o && e.clip(), e.drawImage.apply(e, a));
  }
  _hitFunc(e) {
    const n = this.width(), r = this.height(), o = this.cornerRadius();
    e.beginPath(), o ? Lf.Util.drawRoundedRectPath(e, n, r, o) : e.rect(0, 0, n, r), e.closePath(), e.fillStrokeShape(this);
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
    const o = Lf.Util.createImageElement();
    o.onload = function() {
      const l = new f4({
        image: o
      });
      n(l);
    }, o.onerror = r, o.crossOrigin = "Anonymous", o.src = e;
  }
};
ac.Image = rr;
rr.prototype.className = "Image";
(0, h9._registerNode)(rr);
Yi.Factory.addGetterSetter(rr, "cornerRadius", 0, (0, Pl.getNumberOrArrayOfNumbersValidator)(4));
Yi.Factory.addGetterSetter(rr, "image");
Yi.Factory.addComponentsGetterSetter(rr, "crop", ["x", "y", "width", "height"]);
Yi.Factory.addGetterSetter(rr, "cropX", 0, (0, Pl.getNumberValidator)());
Yi.Factory.addGetterSetter(rr, "cropY", 0, (0, Pl.getNumberValidator)());
Yi.Factory.addGetterSetter(rr, "cropWidth", 0, (0, Pl.getNumberValidator)());
Yi.Factory.addGetterSetter(rr, "cropHeight", 0, (0, Pl.getNumberValidator)());
var js = {};
Object.defineProperty(js, "__esModule", { value: !0 });
js.Tag = js.Label = void 0;
const uc = Se, p9 = gt, g9 = Js, j0 = de, h4 = ve, p4 = [
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
], m9 = "Change.konva", y9 = "none", Dh = "up", Ih = "right", zh = "down", Uh = "left", v9 = p4.length;
class W0 extends g9.Group {
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
    for (r = 0; r < v9; r++)
      e.on(p4[r] + m9, o);
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
        case Dh:
          c = r / 2, f = -1 * g;
          break;
        case Ih:
          c = r + a, f = o / 2;
          break;
        case zh:
          c = r / 2, f = o + g;
          break;
        case Uh:
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
js.Label = W0;
W0.prototype.className = "Label";
(0, h4._registerNode)(W0);
class Xi extends p9.Shape {
  _sceneFunc(e) {
    const n = this.width(), r = this.height(), o = this.pointerDirection(), l = this.pointerWidth(), a = this.pointerHeight(), c = this.cornerRadius();
    let f = 0, g = 0, y = 0, x = 0;
    typeof c == "number" ? f = g = y = x = Math.min(c, n / 2, r / 2) : (f = Math.min(c[0] || 0, n / 2, r / 2), g = Math.min(c[1] || 0, n / 2, r / 2), x = Math.min(c[2] || 0, n / 2, r / 2), y = Math.min(c[3] || 0, n / 2, r / 2)), e.beginPath(), e.moveTo(f, 0), o === Dh && (e.lineTo((n - l) / 2, 0), e.lineTo(n / 2, -1 * a), e.lineTo((n + l) / 2, 0)), e.lineTo(n - g, 0), e.arc(n - g, g, g, Math.PI * 3 / 2, 0, !1), o === Ih && (e.lineTo(n, (r - a) / 2), e.lineTo(n + l, r / 2), e.lineTo(n, (r + a) / 2)), e.lineTo(n, r - x), e.arc(n - x, r - x, x, 0, Math.PI / 2, !1), o === zh && (e.lineTo((n + l) / 2, r), e.lineTo(n / 2, r + a), e.lineTo((n - l) / 2, r)), e.lineTo(y, r), e.arc(y, r - y, y, Math.PI / 2, Math.PI, !1), o === Uh && (e.lineTo(0, (r + a) / 2), e.lineTo(-1 * l, r / 2), e.lineTo(0, (r - a) / 2)), e.lineTo(0, f), e.arc(f, f, f, Math.PI, Math.PI * 3 / 2, !1), e.closePath(), e.fillStrokeShape(this);
  }
  getSelfRect() {
    let e = 0, n = 0, r = this.pointerWidth(), o = this.pointerHeight(), l = this.pointerDirection(), a = this.width(), c = this.height();
    return l === Dh ? (n -= o, c += o) : l === zh ? c += o : l === Uh ? (e -= r * 1.5, a += r) : l === Ih && (a += r * 1.5), {
      x: e,
      y: n,
      width: a,
      height: c
    };
  }
}
js.Tag = Xi;
Xi.prototype.className = "Tag";
(0, h4._registerNode)(Xi);
uc.Factory.addGetterSetter(Xi, "pointerDirection", y9);
uc.Factory.addGetterSetter(Xi, "pointerWidth", 0, (0, j0.getNumberValidator)());
uc.Factory.addGetterSetter(Xi, "pointerHeight", 0, (0, j0.getNumberValidator)());
uc.Factory.addGetterSetter(Xi, "cornerRadius", 0, (0, j0.getNumberOrArrayOfNumbersValidator)(4));
var Tl = {};
Object.defineProperty(Tl, "__esModule", { value: !0 });
Tl.Rect = void 0;
const _9 = Se, S9 = gt, w9 = ve, C9 = be, x9 = de;
let cc = class extends S9.Shape {
  _sceneFunc(e) {
    const n = this.cornerRadius(), r = this.width(), o = this.height();
    e.beginPath(), n ? C9.Util.drawRoundedRectPath(e, r, o, n) : e.rect(0, 0, r, o), e.closePath(), e.fillStrokeShape(this);
  }
};
Tl.Rect = cc;
cc.prototype.className = "Rect";
(0, w9._registerNode)(cc);
_9.Factory.addGetterSetter(cc, "cornerRadius", 0, (0, x9.getNumberOrArrayOfNumbersValidator)(4));
var dc = {};
Object.defineProperty(dc, "__esModule", { value: !0 });
dc.RegularPolygon = void 0;
const g4 = Se, k9 = gt, m4 = de, E9 = ve;
class Qi extends k9.Shape {
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
dc.RegularPolygon = Qi;
Qi.prototype.className = "RegularPolygon";
Qi.prototype._centroid = !0;
Qi.prototype._attrsAffectingSize = ["radius"];
(0, E9._registerNode)(Qi);
g4.Factory.addGetterSetter(Qi, "radius", 0, (0, m4.getNumberValidator)());
g4.Factory.addGetterSetter(Qi, "sides", 0, (0, m4.getNumberValidator)());
var fc = {};
Object.defineProperty(fc, "__esModule", { value: !0 });
fc.Ring = void 0;
const y4 = Se, P9 = gt, v4 = de, T9 = ve, a2 = Math.PI * 2;
class $i extends P9.Shape {
  _sceneFunc(e) {
    e.beginPath(), e.arc(0, 0, this.innerRadius(), 0, a2, !1), e.moveTo(this.outerRadius(), 0), e.arc(0, 0, this.outerRadius(), a2, 0, !0), e.closePath(), e.fillStrokeShape(this);
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
fc.Ring = $i;
$i.prototype.className = "Ring";
$i.prototype._centroid = !0;
$i.prototype._attrsAffectingSize = ["innerRadius", "outerRadius"];
(0, T9._registerNode)($i);
y4.Factory.addGetterSetter($i, "innerRadius", 0, (0, v4.getNumberValidator)());
y4.Factory.addGetterSetter($i, "outerRadius", 0, (0, v4.getNumberValidator)());
var hc = {};
Object.defineProperty(hc, "__esModule", { value: !0 });
hc.Sprite = void 0;
const qi = Se, N9 = gt, R9 = Zs, _4 = de, F9 = ve;
class ir extends N9.Shape {
  constructor(e) {
    super(e), this._updated = !0, this.anim = new R9.Animation(() => {
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
    const n = this.animation(), r = this.frameIndex(), o = r * 4, l = this.animations()[n], a = this.frameOffsets(), c = l[o + 0], f = l[o + 1], g = l[o + 2], y = l[o + 3], x = this.image();
    if ((this.hasFill() || this.hasStroke()) && (e.beginPath(), e.rect(0, 0, g, y), e.closePath(), e.fillStrokeShape(this)), x)
      if (a) {
        const S = a[n], C = r * 2;
        e.drawImage(x, c, f, g, y, S[C + 0], S[C + 1], g, y);
      } else
        e.drawImage(x, c, f, g, y, 0, 0, g, y);
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
hc.Sprite = ir;
ir.prototype.className = "Sprite";
(0, F9._registerNode)(ir);
qi.Factory.addGetterSetter(ir, "animation");
qi.Factory.addGetterSetter(ir, "animations");
qi.Factory.addGetterSetter(ir, "frameOffsets");
qi.Factory.addGetterSetter(ir, "image");
qi.Factory.addGetterSetter(ir, "frameIndex", 0, (0, _4.getNumberValidator)());
qi.Factory.addGetterSetter(ir, "frameRate", 17, (0, _4.getNumberValidator)());
qi.Factory.backCompat(ir, {
  index: "frameIndex",
  getIndex: "getFrameIndex",
  setIndex: "setFrameIndex"
});
var pc = {};
Object.defineProperty(pc, "__esModule", { value: !0 });
pc.Star = void 0;
const K0 = Se, M9 = gt, Y0 = de, L9 = ve;
class fi extends M9.Shape {
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
pc.Star = fi;
fi.prototype.className = "Star";
fi.prototype._centroid = !0;
fi.prototype._attrsAffectingSize = ["innerRadius", "outerRadius"];
(0, L9._registerNode)(fi);
K0.Factory.addGetterSetter(fi, "numPoints", 5, (0, Y0.getNumberValidator)());
K0.Factory.addGetterSetter(fi, "innerRadius", 0, (0, Y0.getNumberValidator)());
K0.Factory.addGetterSetter(fi, "outerRadius", 0, (0, Y0.getNumberValidator)());
var to = {};
Object.defineProperty(to, "__esModule", { value: !0 });
to.Text = void 0;
to.stringToArray = Fi;
const Gh = be, zt = Se, A9 = gt, Af = ve, hi = de, O9 = ve;
function Fi(t) {
  return [...t].reduce((e, n, r, o) => {
    if (new RegExp("\\p{Emoji}", "u").test(n)) {
      const l = o[r + 1];
      l && new RegExp("\\p{Emoji_Modifier}|\\u200D", "u").test(l) ? (e.push(n + l), o[r + 1] = "") : e.push(n);
    } else new RegExp("\\p{Regional_Indicator}{2}", "u").test(n + (o[r + 1] || "")) ? e.push(n + o[r + 1]) : r > 0 && new RegExp("\\p{Mn}|\\p{Me}|\\p{Mc}", "u").test(n) ? e[e.length - 1] += n : n && e.push(n);
    return e;
  }, []);
}
const ms = "auto", D9 = "center", S4 = "inherit", Lo = "justify", I9 = "Change.konva", z9 = "2d", u2 = "-", w4 = "left", U9 = "text", G9 = "Text", B9 = "top", V9 = "bottom", c2 = "middle", C4 = "normal", H9 = "px ", Ga = " ", j9 = "right", d2 = "rtl", W9 = "word", K9 = "char", f2 = "none", Of = "…", x4 = [
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
], Y9 = x4.length;
function X9(t) {
  return t.split(",").map((e) => {
    e = e.trim();
    const n = e.indexOf(" ") >= 0, r = e.indexOf('"') >= 0 || e.indexOf("'") >= 0;
    return n && !r && (e = `"${e}"`), e;
  }).join(", ");
}
let Ba;
function Df() {
  return Ba || (Ba = Gh.Util.createCanvasElement().getContext(z9), Ba);
}
function Q9(t) {
  t.fillText(this._partialText, this._partialTextX, this._partialTextY);
}
function $9(t) {
  t.setAttr("miterLimit", 2), t.strokeText(this._partialText, this._partialTextX, this._partialTextY);
}
function q9(t) {
  return t = t || {}, !t.fillLinearGradientColorStops && !t.fillRadialGradientColorStops && !t.fillPatternImage && (t.fill = t.fill || "black"), t;
}
class nt extends A9.Shape {
  constructor(e) {
    super(q9(e)), this._partialTextX = 0, this._partialTextY = 0;
    for (let n = 0; n < Y9; n++)
      this.on(x4[n] + I9, this._setTextData);
    this._setTextData();
  }
  _sceneFunc(e) {
    const n = this.textArr, r = n.length;
    if (!this.text())
      return;
    let o = this.padding(), l = this.fontSize(), a = this.lineHeight() * l, c = this.verticalAlign(), f = this.direction(), g = 0, y = this.align(), x = this.getWidth(), S = this.letterSpacing(), C = this.fill(), v = this.textDecoration(), P = v.indexOf("underline") !== -1, R = v.indexOf("line-through") !== -1, k;
    f = f === S4 ? e.direction : f;
    let w = a / 2, p = c2;
    if (Af.Konva._fixTextRendering) {
      const _ = this.measureSize("M");
      p = "alphabetic", w = (_.fontBoundingBoxAscent - _.fontBoundingBoxDescent) / 2 + a / 2;
    }
    for (f === d2 && e.setAttr("direction", f), e.setAttr("font", this._getContextFont()), e.setAttr("textBaseline", p), e.setAttr("textAlign", w4), c === c2 ? g = (this.getHeight() - r * a - o * 2) / 2 : c === V9 && (g = this.getHeight() - r * a - o * 2), e.translate(o, g + o), k = 0; k < r; k++) {
      let _ = 0, N = 0;
      const F = n[k], L = F.text, E = F.width, I = F.lastInParagraph;
      if (e.save(), y === j9 ? _ += x - E - o * 2 : y === D9 && (_ += (x - E - o * 2) / 2), P) {
        e.save(), e.beginPath();
        const M = Af.Konva._fixTextRendering ? Math.round(l / 4) : Math.round(l / 2), B = _, H = w + N + M;
        e.moveTo(B, H);
        const q = y === Lo && !I ? x - o * 2 : E;
        e.lineTo(B + Math.round(q), H), e.lineWidth = l / 15;
        const ie = this._getLinearGradient();
        e.strokeStyle = ie || C, e.stroke(), e.restore();
      }
      if (R) {
        e.save(), e.beginPath();
        const M = Af.Konva._fixTextRendering ? -Math.round(l / 4) : 0;
        e.moveTo(_, w + N + M);
        const B = y === Lo && !I ? x - o * 2 : E;
        e.lineTo(_ + Math.round(B), w + N + M), e.lineWidth = l / 15;
        const H = this._getLinearGradient();
        e.strokeStyle = H || C, e.stroke(), e.restore();
      }
      if (f !== d2 && (S !== 0 || y === Lo)) {
        const M = L.split(" ").length - 1, B = Fi(L);
        for (let H = 0; H < B.length; H++) {
          const q = B[H];
          q === " " && !I && y === Lo && (_ += (x - o * 2 - E) / M), this._partialTextX = _, this._partialTextY = w + N, this._partialText = q, e.fillStrokeShape(this), _ += this.measureSize(q).width + S;
        }
      } else
        S !== 0 && e.setAttr("letterSpacing", `${S}px`), this._partialTextX = _, this._partialTextY = w + N, this._partialText = L, e.fillStrokeShape(this);
      e.restore(), r > 1 && (w += a);
    }
  }
  _hitFunc(e) {
    const n = this.getWidth(), r = this.getHeight();
    e.beginPath(), e.rect(0, 0, n, r), e.closePath(), e.fillStrokeShape(this);
  }
  setText(e) {
    const n = Gh.Util._isString(e) ? e : e == null ? "" : e + "";
    return this._setAttr(U9, n), this;
  }
  getWidth() {
    return this.attrs.width === ms || this.attrs.width === void 0 ? this.getTextWidth() + this.padding() * 2 : this.attrs.width;
  }
  getHeight() {
    return this.attrs.height === ms || this.attrs.height === void 0 ? this.fontSize() * this.textArr.length * this.lineHeight() + this.padding() * 2 : this.attrs.height;
  }
  getTextWidth() {
    return this.textWidth;
  }
  getTextHeight() {
    return Gh.Util.warn("text.getTextHeight() method is deprecated. Use text.height() - for full height and text.fontSize() - for one line height."), this.textHeight;
  }
  measureSize(e) {
    var n, r, o, l, a, c, f, g, y, x, S;
    let C = Df(), v = this.fontSize(), P;
    C.save(), C.font = this._getContextFont(), P = C.measureText(e), C.restore();
    const R = v / 100;
    return {
      actualBoundingBoxAscent: (n = P.actualBoundingBoxAscent) !== null && n !== void 0 ? n : 71.58203125 * R,
      actualBoundingBoxDescent: (r = P.actualBoundingBoxDescent) !== null && r !== void 0 ? r : 0,
      actualBoundingBoxLeft: (o = P.actualBoundingBoxLeft) !== null && o !== void 0 ? o : -7.421875 * R,
      actualBoundingBoxRight: (l = P.actualBoundingBoxRight) !== null && l !== void 0 ? l : 75.732421875 * R,
      alphabeticBaseline: (a = P.alphabeticBaseline) !== null && a !== void 0 ? a : 0,
      emHeightAscent: (c = P.emHeightAscent) !== null && c !== void 0 ? c : 100 * R,
      emHeightDescent: (f = P.emHeightDescent) !== null && f !== void 0 ? f : -20 * R,
      fontBoundingBoxAscent: (g = P.fontBoundingBoxAscent) !== null && g !== void 0 ? g : 91 * R,
      fontBoundingBoxDescent: (y = P.fontBoundingBoxDescent) !== null && y !== void 0 ? y : 21 * R,
      hangingBaseline: (x = P.hangingBaseline) !== null && x !== void 0 ? x : 72.80000305175781 * R,
      ideographicBaseline: (S = P.ideographicBaseline) !== null && S !== void 0 ? S : -21 * R,
      width: P.width,
      height: v
    };
  }
  _getContextFont() {
    return this.fontStyle() + Ga + this.fontVariant() + Ga + (this.fontSize() + H9) + X9(this.fontFamily());
  }
  _addTextLine(e) {
    this.align() === Lo && (e = e.trim());
    const r = this._getTextWidth(e);
    return this.textArr.push({
      text: e,
      width: r,
      lastInParagraph: !1
    });
  }
  _getTextWidth(e) {
    const n = this.letterSpacing(), r = e.length;
    return Df().measureText(e).width + n * r;
  }
  _setTextData() {
    let e = this.text().split(`
`), n = +this.fontSize(), r = 0, o = this.lineHeight() * n, l = this.attrs.width, a = this.attrs.height, c = l !== ms && l !== void 0, f = a !== ms && a !== void 0, g = this.padding(), y = l - g * 2, x = a - g * 2, S = 0, C = this.wrap(), v = C !== f2, P = C !== K9 && v, R = this.ellipsis();
    this.textArr = [], Df().font = this._getContextFont();
    const k = R ? this._getTextWidth(Of) : 0;
    for (let w = 0, p = e.length; w < p; ++w) {
      let _ = e[w], N = this._getTextWidth(_);
      if (c && N > y)
        for (; _.length > 0; ) {
          let F = 0, L = Fi(_).length, E = "", I = 0;
          for (; F < L; ) {
            const M = F + L >>> 1, B = Fi(_), H = B.slice(0, M + 1).join(""), q = this._getTextWidth(H);
            (R && f && S + o > x ? q + k : q) <= y ? (F = M + 1, E = H, I = q) : L = M;
          }
          if (E) {
            if (P) {
              const H = Fi(_), q = Fi(E), ie = H[q.length], Q = ie === Ga || ie === u2;
              let fe;
              if (Q && I <= y)
                fe = q.length;
              else {
                const Ce = q.lastIndexOf(Ga), V = q.lastIndexOf(u2);
                fe = Math.max(Ce, V) + 1;
              }
              fe > 0 && (F = fe, E = H.slice(0, F).join(""), I = this._getTextWidth(E));
            }
            if (E = E.trimRight(), this._addTextLine(E), r = Math.max(r, I), S += o, this._shouldHandleEllipsis(S)) {
              this._tryToAddEllipsisToLastLine();
              break;
            }
            if (_ = Fi(_).slice(F).join("").trimLeft(), _.length > 0 && (N = this._getTextWidth(_), N <= y)) {
              this._addTextLine(_), S += o, r = Math.max(r, N);
              break;
            }
          } else
            break;
        }
      else
        this._addTextLine(_), S += o, r = Math.max(r, N), this._shouldHandleEllipsis(S) && w < p - 1 && this._tryToAddEllipsisToLastLine();
      if (this.textArr[this.textArr.length - 1] && (this.textArr[this.textArr.length - 1].lastInParagraph = !0), f && S + o > x)
        break;
    }
    this.textHeight = n, this.textWidth = r;
  }
  _shouldHandleEllipsis(e) {
    const n = +this.fontSize(), r = this.lineHeight() * n, o = this.attrs.height, l = o !== ms && o !== void 0, a = this.padding(), c = o - a * 2;
    return !(this.wrap() !== f2) || l && e + r > c;
  }
  _tryToAddEllipsisToLastLine() {
    const e = this.attrs.width, n = e !== ms && e !== void 0, r = this.padding(), o = e - r * 2, l = this.ellipsis(), a = this.textArr[this.textArr.length - 1];
    !a || !l || (n && (this._getTextWidth(a.text + Of) < o || (a.text = a.text.slice(0, a.text.length - 3))), this.textArr.splice(this.textArr.length - 1, 1), this._addTextLine(a.text + Of));
  }
  getStrokeScaleEnabled() {
    return !0;
  }
  _useBufferCanvas() {
    const e = this.textDecoration().indexOf("underline") !== -1 || this.textDecoration().indexOf("line-through") !== -1, n = this.hasShadow();
    return e && n ? !0 : super._useBufferCanvas();
  }
}
to.Text = nt;
nt.prototype._fillFunc = Q9;
nt.prototype._strokeFunc = $9;
nt.prototype.className = G9;
nt.prototype._attrsAffectingSize = [
  "text",
  "fontSize",
  "padding",
  "wrap",
  "lineHeight",
  "letterSpacing"
];
(0, O9._registerNode)(nt);
zt.Factory.overWriteSetter(nt, "width", (0, hi.getNumberOrAutoValidator)());
zt.Factory.overWriteSetter(nt, "height", (0, hi.getNumberOrAutoValidator)());
zt.Factory.addGetterSetter(nt, "direction", S4);
zt.Factory.addGetterSetter(nt, "fontFamily", "Arial");
zt.Factory.addGetterSetter(nt, "fontSize", 12, (0, hi.getNumberValidator)());
zt.Factory.addGetterSetter(nt, "fontStyle", C4);
zt.Factory.addGetterSetter(nt, "fontVariant", C4);
zt.Factory.addGetterSetter(nt, "padding", 0, (0, hi.getNumberValidator)());
zt.Factory.addGetterSetter(nt, "align", w4);
zt.Factory.addGetterSetter(nt, "verticalAlign", B9);
zt.Factory.addGetterSetter(nt, "lineHeight", 1, (0, hi.getNumberValidator)());
zt.Factory.addGetterSetter(nt, "wrap", W9);
zt.Factory.addGetterSetter(nt, "ellipsis", !1, (0, hi.getBooleanValidator)());
zt.Factory.addGetterSetter(nt, "letterSpacing", 0, (0, hi.getNumberValidator)());
zt.Factory.addGetterSetter(nt, "text", "", (0, hi.getStringValidator)());
zt.Factory.addGetterSetter(nt, "textDecoration", "");
var gc = {};
Object.defineProperty(gc, "__esModule", { value: !0 });
gc.TextPath = void 0;
const If = be, Hn = Se, J9 = gt, Ao = bs, zf = to, k4 = de, Z9 = ve, b9 = "", E4 = "normal";
function P4(t) {
  t.fillText(this.partialText, 0, 0);
}
function T4(t) {
  t.strokeText(this.partialText, 0, 0);
}
class mt extends J9.Shape {
  constructor(e) {
    super(e), this.dummyCanvas = If.Util.createCanvasElement(), this.dataArray = [], this._readDataAttribute(), this.on("dataChange.konva", function() {
      this._readDataAttribute(), this._setTextData();
    }), this.on("textChange.konva alignChange.konva letterSpacingChange.konva kerningFuncChange.konva fontSizeChange.konva fontFamilyChange.konva", this._setTextData), this._setTextData();
  }
  _getTextPathLength() {
    return Ao.Path.getPathLength(this.dataArray);
  }
  _getPointAtLength(e) {
    if (!this.attrs.data)
      return null;
    const n = this.pathLength;
    return e - 1 > n ? null : Ao.Path.getPointAtLengthOfDataArray(e, this.dataArray);
  }
  _readDataAttribute() {
    this.dataArray = Ao.Path.parsePathData(this.attrs.data), this.pathLength = this._getTextPathLength();
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
    return If.Util.warn("text.getTextHeight() method is deprecated. Use text.height() - for full height and text.fontSize() - for one line height."), this.textHeight;
  }
  setText(e) {
    return zf.Text.prototype.setText.call(this, e);
  }
  _getContextFont() {
    return zf.Text.prototype._getContextFont.call(this);
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
    const f = (0, zf.stringToArray)(this.text());
    let g = c;
    for (let y = 0; y < f.length; y++) {
      const x = this._getPointAtLength(g);
      if (!x)
        return;
      let S = this._getTextSize(f[y]).width + r;
      if (f[y] === " " && o === "justify") {
        const w = this.text().split(" ").length - 1;
        S += (this.pathLength - a) / w;
      }
      const C = this._getPointAtLength(g + S);
      if (!C)
        return;
      const v = Ao.Path.getLineLength(x.x, x.y, C.x, C.y);
      let P = 0;
      if (l)
        try {
          P = l(f[y - 1], f[y]) * this.fontSize();
        } catch {
          P = 0;
        }
      x.x += P, C.x += P, this.textWidth += P;
      const R = Ao.Path.getPointOnLine(P + v / 2, x.x, x.y, C.x, C.y), k = Math.atan2(C.y - x.y, C.x - x.x);
      this.glyphInfo.push({
        transposeX: R.x,
        transposeY: R.y,
        text: f[y],
        rotation: k,
        p0: x,
        p1: C
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
    return If.Util.releaseCanvas(this.dummyCanvas), super.destroy();
  }
}
gc.TextPath = mt;
mt.prototype._fillFunc = P4;
mt.prototype._strokeFunc = T4;
mt.prototype._fillFuncHit = P4;
mt.prototype._strokeFuncHit = T4;
mt.prototype.className = "TextPath";
mt.prototype._attrsAffectingSize = ["text", "fontSize", "data"];
(0, Z9._registerNode)(mt);
Hn.Factory.addGetterSetter(mt, "data");
Hn.Factory.addGetterSetter(mt, "fontFamily", "Arial");
Hn.Factory.addGetterSetter(mt, "fontSize", 12, (0, k4.getNumberValidator)());
Hn.Factory.addGetterSetter(mt, "fontStyle", E4);
Hn.Factory.addGetterSetter(mt, "align", "left");
Hn.Factory.addGetterSetter(mt, "letterSpacing", 0, (0, k4.getNumberValidator)());
Hn.Factory.addGetterSetter(mt, "textBaseline", "middle");
Hn.Factory.addGetterSetter(mt, "fontVariant", E4);
Hn.Factory.addGetterSetter(mt, "text", b9);
Hn.Factory.addGetterSetter(mt, "textDecoration", "");
Hn.Factory.addGetterSetter(mt, "kerningFunc", void 0);
var mc = {};
Object.defineProperty(mc, "__esModule", { value: !0 });
mc.Transformer = void 0;
const Ae = be, Me = Se, h2 = Xe, e7 = gt, t7 = Tl, p2 = Js, On = ve, pi = de, n7 = ve, N4 = "tr-konva", r7 = [
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
].map((t) => t + `.${N4}`).join(" "), g2 = "nodesRect", i7 = [
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
], s7 = {
  "top-left": -45,
  "top-center": 0,
  "top-right": 45,
  "middle-right": -90,
  "middle-left": 90,
  "bottom-left": -135,
  "bottom-center": 180,
  "bottom-right": 135
}, o7 = "ontouchstart" in On.Konva._global;
function l7(t, e, n) {
  if (t === "rotater")
    return n;
  e += Ae.Util.degToRad(s7[t] || 0);
  const r = (Ae.Util.radToDeg(e) % 360 + 360) % 360;
  return Ae.Util._inRange(r, 315 + 22.5, 360) || Ae.Util._inRange(r, 0, 22.5) ? "ns-resize" : Ae.Util._inRange(r, 45 - 22.5, 45 + 22.5) ? "nesw-resize" : Ae.Util._inRange(r, 90 - 22.5, 90 + 22.5) ? "ew-resize" : Ae.Util._inRange(r, 135 - 22.5, 135 + 22.5) ? "nwse-resize" : Ae.Util._inRange(r, 180 - 22.5, 180 + 22.5) ? "ns-resize" : Ae.Util._inRange(r, 225 - 22.5, 225 + 22.5) ? "nesw-resize" : Ae.Util._inRange(r, 270 - 22.5, 270 + 22.5) ? "ew-resize" : Ae.Util._inRange(r, 315 - 22.5, 315 + 22.5) ? "nwse-resize" : (Ae.Util.error("Transformer has unknown angle for cursor detection: " + r), "pointer");
}
const Ru = [
  "top-left",
  "top-center",
  "top-right",
  "middle-right",
  "middle-left",
  "bottom-left",
  "bottom-center",
  "bottom-right"
];
function a7(t) {
  return {
    x: t.x + t.width / 2 * Math.cos(t.rotation) + t.height / 2 * Math.sin(-t.rotation),
    y: t.y + t.height / 2 * Math.cos(t.rotation) + t.width / 2 * Math.sin(t.rotation)
  };
}
function R4(t, e, n) {
  const r = n.x + (t.x - n.x) * Math.cos(e) - (t.y - n.y) * Math.sin(e), o = n.y + (t.x - n.x) * Math.sin(e) + (t.y - n.y) * Math.cos(e);
  return {
    ...t,
    rotation: t.rotation + e,
    x: r,
    y: o
  };
}
function u7(t, e) {
  const n = a7(t);
  return R4(t, e, n);
}
function c7(t, e, n) {
  let r = e;
  for (let o = 0; o < t.length; o++) {
    const l = On.Konva.getAngle(t[o]), a = Math.abs(l - e) % (Math.PI * 2);
    Math.min(a, Math.PI * 2 - a) < n && (r = l);
  }
  return r;
}
let Bh = 0, ke = class extends p2.Group {
  constructor(e) {
    super(e), this._movingAnchorName = null, this._transforming = !1, this._createElements(), this._handleMouseMove = this._handleMouseMove.bind(this), this._handleMouseUp = this._handleMouseUp.bind(this), this.update = this.update.bind(this), this.on(r7, this.update), this.getNode() && this.update();
  }
  attachTo(e) {
    return this.setNode(e), this;
  }
  setNode(e) {
    return Ae.Util.warn("tr.setNode(shape), tr.node(shape) and tr.attachTo(shape) methods are deprecated. Please use tr.nodes(nodesArray) instead."), this.setNodes([e]);
  }
  getNode() {
    return this._nodes && this._nodes[0];
  }
  _getEventNamespace() {
    return N4 + this._id;
  }
  setNodes(e = []) {
    this._nodes && this._nodes.length && this.detach();
    const n = e.filter((o) => o.isAncestorOf(this) ? (Ae.Util.error("Konva.Transformer cannot be an a child of the node you are trying to attach"), !1) : !0);
    return this._nodes = e = n, e.length === 1 && this.useSingleNodeRotation() ? this.rotation(e[0].getAbsoluteRotation()) : this.rotation(0), this._nodes.forEach((o) => {
      const l = () => {
        this.nodes().length === 1 && this.useSingleNodeRotation() && this.rotation(this.nodes()[0].getAbsoluteRotation()), this._resetTransformCache(), !this._transforming && !this.isDragging() && this.update();
      };
      if (o._attrsAffectingSize.length) {
        const a = o._attrsAffectingSize.map((c) => c + "Change." + this._getEventNamespace()).join(" ");
        o.on(a, l);
      }
      o.on(i7.map((a) => a + `.${this._getEventNamespace()}`).join(" "), l), o.on(`absoluteTransformChange.${this._getEventNamespace()}`, l), this._proxyDrag(o);
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
    this._clearCache(g2), this._clearCache("transform"), this._clearSelfAndDescendantCache("absoluteTransform");
  }
  _getNodeRect() {
    return this._getCache(g2, this.__getNodeRect);
  }
  __getNodeShape(e, n = this.rotation(), r) {
    const o = e.getClientRect({
      skipTransform: !0,
      skipShadow: !0,
      skipStroke: this.ignoreStroke()
    }), l = e.getAbsoluteScale(r), a = e.getAbsolutePosition(r), c = o.x * l.x - e.offsetX() * l.x, f = o.y * l.y - e.offsetY() * l.y, g = (On.Konva.getAngle(e.getAbsoluteRotation()) + Math.PI * 2) % (Math.PI * 2), y = {
      x: a.x + c * Math.cos(g) + f * Math.sin(-g),
      y: a.y + f * Math.cos(g) + c * Math.sin(g),
      width: o.width * l.x,
      height: o.height * l.y,
      rotation: g
    };
    return R4(y, -On.Konva.getAngle(n), {
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
      }), x = [
        { x: y.x, y: y.y },
        { x: y.x + y.width, y: y.y },
        { x: y.x + y.width, y: y.y + y.height },
        { x: y.x, y: y.y + y.height }
      ], S = g.getAbsoluteTransform();
      x.forEach(function(C) {
        const v = S.point(C);
        n.push(v);
      });
    });
    const r = new Ae.Transform();
    r.rotate(-On.Konva.getAngle(this.rotation()));
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
      rotation: On.Konva.getAngle(this.rotation())
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
    this._createBack(), Ru.forEach((e) => {
      this._createAnchor(e);
    }), this._createAnchor("rotater");
  }
  _createAnchor(e) {
    const n = new t7.Rect({
      stroke: "rgb(0, 161, 255)",
      fill: "white",
      strokeWidth: 1,
      name: e + " _anchor",
      dragDistance: 0,
      draggable: !0,
      hitStrokeWidth: o7 ? 10 : "auto"
    }), r = this;
    n.on("mousedown touchstart", function(o) {
      r._handleMouseDown(o);
    }), n.on("dragstart", (o) => {
      n.stopDrag(), o.cancelBubble = !0;
    }), n.on("dragend", (o) => {
      o.cancelBubble = !0;
    }), n.on("mouseenter", () => {
      const o = On.Konva.getAngle(this.rotation()), l = this.rotateAnchorCursor(), a = l7(e, o, l);
      n.getStage().content && (n.getStage().content.style.cursor = a), this._cursorChange = !0;
    }), n.on("mouseout", () => {
      n.getStage().content && (n.getStage().content.style.cursor = ""), this._cursorChange = !1;
    }), this.add(n);
  }
  _createBack() {
    const e = new e7.Shape({
      name: "back",
      width: 0,
      height: 0,
      draggable: !0,
      sceneFunc(n, r) {
        const o = r.getParent(), l = o.padding();
        n.beginPath(), n.rect(-l, -l, r.width() + l * 2, r.height() + l * 2), n.moveTo(r.width() / 2, -l), o.rotateEnabled() && o.rotateLineVisible() && n.lineTo(r.width() / 2, -o.rotateAnchorOffset() * Ae.Util._sign(r.height()) - l), n.fillStrokeShape(r);
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
    }, Bh++, this._fire("transformstart", { evt: e.evt, target: this.getNode() }), this._nodes.forEach((f) => {
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
      const N = On.Konva.getAngle(this.rotation()) + p, F = On.Konva.getAngle(this.rotationSnapTolerance()), E = c7(this.rotationSnaps(), N, F) - w.rotation, I = u7(w, E);
      this._fitNodesInto(I, e);
      return;
    }
    const x = this.shiftBehavior();
    let S;
    x === "inverted" ? S = this.keepRatio() && !e.shiftKey : x === "none" ? S = this.keepRatio() : S = this.keepRatio() || e.shiftKey;
    let C = this.centeredScaling() || e.altKey;
    if (this._movingAnchorName === "top-left") {
      if (S) {
        const w = C ? {
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
        const w = C ? {
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
        const w = C ? {
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
        const w = C ? {
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
    if (C = this.centeredScaling() || e.altKey, C) {
      const w = this.findOne(".top-left"), p = this.findOne(".bottom-right"), _ = w.x(), N = w.y(), F = this.getWidth() - p.x(), L = this.getHeight() - p.y();
      p.move({
        x: -_,
        y: -N
      }), w.move({
        x: F,
        y: L
      });
    }
    const P = this.findOne(".top-left").getAbsolutePosition();
    n = P.x, r = P.y;
    const R = this.findOne(".bottom-right").x() - this.findOne(".top-left").x(), k = this.findOne(".bottom-right").y() - this.findOne(".top-left").y();
    this._fitNodesInto({
      x: n,
      y: r,
      width: R,
      height: k,
      rotation: On.Konva.getAngle(this.rotation())
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
      Bh--, this._fire("transformend", { evt: e, target: r }), (n = this.getLayer()) === null || n === void 0 || n.batchDraw(), r && this._nodes.forEach((o) => {
        var l;
        o._fire("transformend", { evt: e, target: o }), (l = o.getLayer()) === null || l === void 0 || l.batchDraw();
      }), this._movingAnchorName = null;
    }
  }
  _fitNodesInto(e, n) {
    const r = this._getNodeRect(), o = 1;
    if (Ae.Util._inRange(e.width, -this.padding() * 2 - o, o)) {
      this.update();
      return;
    }
    if (Ae.Util._inRange(e.height, -this.padding() * 2 - o, o)) {
      this.update();
      return;
    }
    const l = new Ae.Transform();
    if (l.rotate(On.Konva.getAngle(this.rotation())), this._movingAnchorName && e.width < 0 && this._movingAnchorName.indexOf("left") >= 0) {
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
      S ? e = S : Ae.Util.warn("boundBoxFunc returned falsy. You should return new bound rect from it!");
    }
    const a = 1e7, c = new Ae.Transform();
    c.translate(r.x, r.y), c.rotate(r.rotation), c.scale(r.width / a, r.height / a);
    const f = new Ae.Transform(), g = e.width / a, y = e.height / a;
    this.flipEnabled() === !1 ? (f.translate(e.x, e.y), f.rotate(e.rotation), f.translate(e.width < 0 ? e.width : 0, e.height < 0 ? e.height : 0), f.scale(Math.abs(g), Math.abs(y))) : (f.translate(e.x, e.y), f.rotate(e.rotation), f.scale(g, y));
    const x = f.multiply(c.invert());
    this._nodes.forEach((S) => {
      var C;
      const v = S.getParent().getAbsoluteTransform(), P = S.getTransform().copy();
      P.translate(S.offsetX(), S.offsetY());
      const R = new Ae.Transform();
      R.multiply(v.copy().invert()).multiply(x).multiply(v).multiply(P);
      const k = R.decompose();
      S.setAttrs(k), (C = S.getLayer()) === null || C === void 0 || C.batchDraw();
    }), this.rotation(Ae.Util._getRotation(e.rotation)), this._nodes.forEach((S) => {
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
    this.rotation(Ae.Util._getRotation(n.rotation));
    const r = n.width, o = n.height, l = this.enabledAnchors(), a = this.resizeEnabled(), c = this.padding(), f = this.anchorSize(), g = this.find("._anchor");
    g.forEach((x) => {
      x.setAttrs({
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
      y: -this.rotateAnchorOffset() * Ae.Util._sign(o) - c,
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
    y && g.forEach((x) => {
      y(x);
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
    return this.getStage() && this._cursorChange && this.getStage().content && (this.getStage().content.style.cursor = ""), p2.Group.prototype.destroy.call(this), this.detach(), this._removeEvents(), this;
  }
  toObject() {
    return h2.Node.prototype.toObject.call(this);
  }
  clone(e) {
    return h2.Node.prototype.clone.call(this, e);
  }
  getClientRect() {
    return this.nodes().length > 0 ? super.getClientRect() : { x: 0, y: 0, width: 0, height: 0 };
  }
};
mc.Transformer = ke;
ke.isTransforming = () => Bh > 0;
function d7(t) {
  return t instanceof Array || Ae.Util.warn("enabledAnchors value should be an array"), t instanceof Array && t.forEach(function(e) {
    Ru.indexOf(e) === -1 && Ae.Util.warn("Unknown anchor name: " + e + ". Available names are: " + Ru.join(", "));
  }), t || [];
}
ke.prototype.className = "Transformer";
(0, n7._registerNode)(ke);
Me.Factory.addGetterSetter(ke, "enabledAnchors", Ru, d7);
Me.Factory.addGetterSetter(ke, "flipEnabled", !0, (0, pi.getBooleanValidator)());
Me.Factory.addGetterSetter(ke, "resizeEnabled", !0);
Me.Factory.addGetterSetter(ke, "anchorSize", 10, (0, pi.getNumberValidator)());
Me.Factory.addGetterSetter(ke, "rotateEnabled", !0);
Me.Factory.addGetterSetter(ke, "rotateLineVisible", !0);
Me.Factory.addGetterSetter(ke, "rotationSnaps", []);
Me.Factory.addGetterSetter(ke, "rotateAnchorOffset", 50, (0, pi.getNumberValidator)());
Me.Factory.addGetterSetter(ke, "rotateAnchorCursor", "crosshair");
Me.Factory.addGetterSetter(ke, "rotationSnapTolerance", 5, (0, pi.getNumberValidator)());
Me.Factory.addGetterSetter(ke, "borderEnabled", !0);
Me.Factory.addGetterSetter(ke, "anchorStroke", "rgb(0, 161, 255)");
Me.Factory.addGetterSetter(ke, "anchorStrokeWidth", 1, (0, pi.getNumberValidator)());
Me.Factory.addGetterSetter(ke, "anchorFill", "white");
Me.Factory.addGetterSetter(ke, "anchorCornerRadius", 0, (0, pi.getNumberValidator)());
Me.Factory.addGetterSetter(ke, "borderStroke", "rgb(0, 161, 255)");
Me.Factory.addGetterSetter(ke, "borderStrokeWidth", 1, (0, pi.getNumberValidator)());
Me.Factory.addGetterSetter(ke, "borderDash");
Me.Factory.addGetterSetter(ke, "keepRatio", !0);
Me.Factory.addGetterSetter(ke, "shiftBehavior", "default");
Me.Factory.addGetterSetter(ke, "centeredScaling", !1);
Me.Factory.addGetterSetter(ke, "ignoreStroke", !1);
Me.Factory.addGetterSetter(ke, "padding", 0, (0, pi.getNumberValidator)());
Me.Factory.addGetterSetter(ke, "nodes");
Me.Factory.addGetterSetter(ke, "node");
Me.Factory.addGetterSetter(ke, "boundBoxFunc");
Me.Factory.addGetterSetter(ke, "anchorDragBoundFunc");
Me.Factory.addGetterSetter(ke, "anchorStyleFunc");
Me.Factory.addGetterSetter(ke, "shouldOverdrawWholeArea", !1);
Me.Factory.addGetterSetter(ke, "useSingleNodeRotation", !0);
Me.Factory.backCompat(ke, {
  lineEnabled: "borderEnabled",
  rotateHandlerOffset: "rotateAnchorOffset",
  enabledHandlers: "enabledAnchors"
});
var yc = {};
Object.defineProperty(yc, "__esModule", { value: !0 });
yc.Wedge = void 0;
const vc = Se, f7 = gt, h7 = ve, F4 = de, p7 = ve;
class Nr extends f7.Shape {
  _sceneFunc(e) {
    e.beginPath(), e.arc(0, 0, this.radius(), 0, h7.Konva.getAngle(this.angle()), this.clockwise()), e.lineTo(0, 0), e.closePath(), e.fillStrokeShape(this);
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
yc.Wedge = Nr;
Nr.prototype.className = "Wedge";
Nr.prototype._centroid = !0;
Nr.prototype._attrsAffectingSize = ["radius"];
(0, p7._registerNode)(Nr);
vc.Factory.addGetterSetter(Nr, "radius", 0, (0, F4.getNumberValidator)());
vc.Factory.addGetterSetter(Nr, "angle", 0, (0, F4.getNumberValidator)());
vc.Factory.addGetterSetter(Nr, "clockwise", !1);
vc.Factory.backCompat(Nr, {
  angleDeg: "angle",
  getAngleDeg: "getAngle",
  setAngleDeg: "setAngle"
});
var _c = {};
Object.defineProperty(_c, "__esModule", { value: !0 });
_c.Blur = void 0;
const m2 = Se, g7 = Xe, m7 = de;
function y2() {
  this.r = 0, this.g = 0, this.b = 0, this.a = 0, this.next = null;
}
const y7 = [
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
], v7 = [
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
function _7(t, e) {
  const n = t.data, r = t.width, o = t.height;
  let l, a, c, f, g, y, x, S, C, v, P, R, k, w, p, _, N, F, L, E;
  const I = e + e + 1, M = r - 1, B = o - 1, H = e + 1, q = H * (H + 1) / 2, ie = new y2(), Q = y7[e], fe = v7[e];
  let Ce = null, V = ie, J = null, X = null;
  for (let Y = 1; Y < I; Y++)
    V = V.next = new y2(), Y === H && (Ce = V);
  V.next = ie, c = a = 0;
  for (let Y = 0; Y < o; Y++) {
    R = k = w = p = f = g = y = x = 0, S = H * (_ = n[a]), C = H * (N = n[a + 1]), v = H * (F = n[a + 2]), P = H * (L = n[a + 3]), f += q * _, g += q * N, y += q * F, x += q * L, V = ie;
    for (let se = 0; se < H; se++)
      V.r = _, V.g = N, V.b = F, V.a = L, V = V.next;
    for (let se = 1; se < H; se++)
      l = a + ((M < se ? M : se) << 2), f += (V.r = _ = n[l]) * (E = H - se), g += (V.g = N = n[l + 1]) * E, y += (V.b = F = n[l + 2]) * E, x += (V.a = L = n[l + 3]) * E, R += _, k += N, w += F, p += L, V = V.next;
    J = ie, X = Ce;
    for (let se = 0; se < r; se++)
      n[a + 3] = L = x * Q >> fe, L !== 0 ? (L = 255 / L, n[a] = (f * Q >> fe) * L, n[a + 1] = (g * Q >> fe) * L, n[a + 2] = (y * Q >> fe) * L) : n[a] = n[a + 1] = n[a + 2] = 0, f -= S, g -= C, y -= v, x -= P, S -= J.r, C -= J.g, v -= J.b, P -= J.a, l = c + ((l = se + e + 1) < M ? l : M) << 2, R += J.r = n[l], k += J.g = n[l + 1], w += J.b = n[l + 2], p += J.a = n[l + 3], f += R, g += k, y += w, x += p, J = J.next, S += _ = X.r, C += N = X.g, v += F = X.b, P += L = X.a, R -= _, k -= N, w -= F, p -= L, X = X.next, a += 4;
    c += r;
  }
  for (let Y = 0; Y < r; Y++) {
    k = w = p = R = g = y = x = f = 0, a = Y << 2, S = H * (_ = n[a]), C = H * (N = n[a + 1]), v = H * (F = n[a + 2]), P = H * (L = n[a + 3]), f += q * _, g += q * N, y += q * F, x += q * L, V = ie;
    for (let Ee = 0; Ee < H; Ee++)
      V.r = _, V.g = N, V.b = F, V.a = L, V = V.next;
    let se = r;
    for (let Ee = 1; Ee <= e; Ee++)
      a = se + Y << 2, f += (V.r = _ = n[a]) * (E = H - Ee), g += (V.g = N = n[a + 1]) * E, y += (V.b = F = n[a + 2]) * E, x += (V.a = L = n[a + 3]) * E, R += _, k += N, w += F, p += L, V = V.next, Ee < B && (se += r);
    a = Y, J = ie, X = Ce;
    for (let Ee = 0; Ee < o; Ee++)
      l = a << 2, n[l + 3] = L = x * Q >> fe, L > 0 ? (L = 255 / L, n[l] = (f * Q >> fe) * L, n[l + 1] = (g * Q >> fe) * L, n[l + 2] = (y * Q >> fe) * L) : n[l] = n[l + 1] = n[l + 2] = 0, f -= S, g -= C, y -= v, x -= P, S -= J.r, C -= J.g, v -= J.b, P -= J.a, l = Y + ((l = Ee + H) < B ? l : B) * r << 2, f += R += J.r = n[l], g += k += J.g = n[l + 1], y += w += J.b = n[l + 2], x += p += J.a = n[l + 3], J = J.next, S += _ = X.r, C += N = X.g, v += F = X.b, P += L = X.a, R -= _, k -= N, w -= F, p -= L, X = X.next, a += r;
  }
}
const S7 = function(e) {
  const n = Math.round(this.blurRadius());
  n > 0 && _7(e, n);
};
_c.Blur = S7;
m2.Factory.addGetterSetter(g7.Node, "blurRadius", 0, (0, m7.getNumberValidator)(), m2.Factory.afterSetFilter);
var Sc = {};
Object.defineProperty(Sc, "__esModule", { value: !0 });
Sc.Brighten = void 0;
const v2 = Se, w7 = Xe, C7 = de, x7 = function(t) {
  const e = this.brightness() * 255, n = t.data, r = n.length;
  for (let o = 0; o < r; o += 4)
    n[o] += e, n[o + 1] += e, n[o + 2] += e;
};
Sc.Brighten = x7;
v2.Factory.addGetterSetter(w7.Node, "brightness", 0, (0, C7.getNumberValidator)(), v2.Factory.afterSetFilter);
var wc = {};
Object.defineProperty(wc, "__esModule", { value: !0 });
wc.Contrast = void 0;
const _2 = Se, k7 = Xe, E7 = de, P7 = function(t) {
  const e = Math.pow((this.contrast() + 100) / 100, 2), n = t.data, r = n.length;
  let o = 150, l = 150, a = 150;
  for (let c = 0; c < r; c += 4)
    o = n[c], l = n[c + 1], a = n[c + 2], o /= 255, o -= 0.5, o *= e, o += 0.5, o *= 255, l /= 255, l -= 0.5, l *= e, l += 0.5, l *= 255, a /= 255, a -= 0.5, a *= e, a += 0.5, a *= 255, o = o < 0 ? 0 : o > 255 ? 255 : o, l = l < 0 ? 0 : l > 255 ? 255 : l, a = a < 0 ? 0 : a > 255 ? 255 : a, n[c] = o, n[c + 1] = l, n[c + 2] = a;
};
wc.Contrast = P7;
_2.Factory.addGetterSetter(k7.Node, "contrast", 0, (0, E7.getNumberValidator)(), _2.Factory.afterSetFilter);
var Cc = {};
Object.defineProperty(Cc, "__esModule", { value: !0 });
Cc.Emboss = void 0;
const si = Se, xc = Xe, T7 = be, M4 = de, N7 = function(t) {
  const e = this.embossStrength() * 10, n = this.embossWhiteLevel() * 255, r = this.embossDirection(), o = this.embossBlend(), l = t.data, a = t.width, c = t.height, f = a * 4;
  let g = 0, y = 0, x = c;
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
      T7.Util.error("Unknown emboss direction: " + r);
  }
  do {
    const S = (x - 1) * f;
    let C = g;
    x + C < 1 && (C = 0), x + C > c && (C = 0);
    const v = (x - 1 + C) * a * 4;
    let P = a;
    do {
      const R = S + (P - 1) * 4;
      let k = y;
      P + k < 1 && (k = 0), P + k > a && (k = 0);
      const w = v + (P - 1 + k) * 4, p = l[R] - l[w], _ = l[R + 1] - l[w + 1], N = l[R + 2] - l[w + 2];
      let F = p;
      const L = F > 0 ? F : -F, E = _ > 0 ? _ : -_, I = N > 0 ? N : -N;
      if (E > L && (F = _), I > L && (F = N), F *= e, o) {
        const M = l[R] + F, B = l[R + 1] + F, H = l[R + 2] + F;
        l[R] = M > 255 ? 255 : M < 0 ? 0 : M, l[R + 1] = B > 255 ? 255 : B < 0 ? 0 : B, l[R + 2] = H > 255 ? 255 : H < 0 ? 0 : H;
      } else {
        let M = n - F;
        M < 0 ? M = 0 : M > 255 && (M = 255), l[R] = l[R + 1] = l[R + 2] = M;
      }
    } while (--P);
  } while (--x);
};
Cc.Emboss = N7;
si.Factory.addGetterSetter(xc.Node, "embossStrength", 0.5, (0, M4.getNumberValidator)(), si.Factory.afterSetFilter);
si.Factory.addGetterSetter(xc.Node, "embossWhiteLevel", 0.5, (0, M4.getNumberValidator)(), si.Factory.afterSetFilter);
si.Factory.addGetterSetter(xc.Node, "embossDirection", "top-left", void 0, si.Factory.afterSetFilter);
si.Factory.addGetterSetter(xc.Node, "embossBlend", !1, void 0, si.Factory.afterSetFilter);
var kc = {};
Object.defineProperty(kc, "__esModule", { value: !0 });
kc.Enhance = void 0;
const S2 = Se, R7 = Xe, F7 = de;
function Uf(t, e, n, r, o) {
  const l = n - e, a = o - r;
  if (l === 0)
    return r + a / 2;
  if (a === 0)
    return r;
  let c = (t - e) / l;
  return c = a * c + r, c;
}
const M7 = function(t) {
  const e = t.data, n = e.length;
  let r = e[0], o = r, l, a = e[1], c = a, f, g = e[2], y = g, x;
  const S = this.enhance();
  if (S === 0)
    return;
  for (let p = 0; p < n; p += 4)
    l = e[p + 0], l < r ? r = l : l > o && (o = l), f = e[p + 1], f < a ? a = f : f > c && (c = f), x = e[p + 2], x < g ? g = x : x > y && (y = x);
  o === r && (o = 255, r = 0), c === a && (c = 255, a = 0), y === g && (y = 255, g = 0);
  let C, v, P, R, k, w;
  if (S > 0)
    C = o + S * (255 - o), v = r - S * (r - 0), P = c + S * (255 - c), R = a - S * (a - 0), k = y + S * (255 - y), w = g - S * (g - 0);
  else {
    const p = (o + r) * 0.5;
    C = o + S * (o - p), v = r + S * (r - p);
    const _ = (c + a) * 0.5;
    P = c + S * (c - _), R = a + S * (a - _);
    const N = (y + g) * 0.5;
    k = y + S * (y - N), w = g + S * (g - N);
  }
  for (let p = 0; p < n; p += 4)
    e[p + 0] = Uf(e[p + 0], r, o, v, C), e[p + 1] = Uf(e[p + 1], a, c, R, P), e[p + 2] = Uf(e[p + 2], g, y, w, k);
};
kc.Enhance = M7;
S2.Factory.addGetterSetter(R7.Node, "enhance", 0, (0, F7.getNumberValidator)(), S2.Factory.afterSetFilter);
var Ec = {};
Object.defineProperty(Ec, "__esModule", { value: !0 });
Ec.Grayscale = void 0;
const L7 = function(t) {
  const e = t.data, n = e.length;
  for (let r = 0; r < n; r += 4) {
    const o = 0.34 * e[r] + 0.5 * e[r + 1] + 0.16 * e[r + 2];
    e[r] = o, e[r + 1] = o, e[r + 2] = o;
  }
};
Ec.Grayscale = L7;
var Pc = {};
Object.defineProperty(Pc, "__esModule", { value: !0 });
Pc.HSL = void 0;
const Ws = Se, X0 = Xe, Q0 = de;
Ws.Factory.addGetterSetter(X0.Node, "hue", 0, (0, Q0.getNumberValidator)(), Ws.Factory.afterSetFilter);
Ws.Factory.addGetterSetter(X0.Node, "saturation", 0, (0, Q0.getNumberValidator)(), Ws.Factory.afterSetFilter);
Ws.Factory.addGetterSetter(X0.Node, "luminance", 0, (0, Q0.getNumberValidator)(), Ws.Factory.afterSetFilter);
const A7 = function(t) {
  const e = t.data, n = e.length, r = 1, o = Math.pow(2, this.saturation()), l = Math.abs(this.hue() + 360) % 360, a = this.luminance() * 127, c = r * o * Math.cos(l * Math.PI / 180), f = r * o * Math.sin(l * Math.PI / 180), g = 0.299 * r + 0.701 * c + 0.167 * f, y = 0.587 * r - 0.587 * c + 0.33 * f, x = 0.114 * r - 0.114 * c - 0.497 * f, S = 0.299 * r - 0.299 * c - 0.328 * f, C = 0.587 * r + 0.413 * c + 0.035 * f, v = 0.114 * r - 0.114 * c + 0.293 * f, P = 0.299 * r - 0.3 * c + 1.25 * f, R = 0.587 * r - 0.586 * c - 1.05 * f, k = 0.114 * r + 0.886 * c - 0.2 * f;
  let w, p, _, N;
  for (let F = 0; F < n; F += 4)
    w = e[F + 0], p = e[F + 1], _ = e[F + 2], N = e[F + 3], e[F + 0] = g * w + y * p + x * _ + a, e[F + 1] = S * w + C * p + v * _ + a, e[F + 2] = P * w + R * p + k * _ + a, e[F + 3] = N;
};
Pc.HSL = A7;
var Tc = {};
Object.defineProperty(Tc, "__esModule", { value: !0 });
Tc.HSV = void 0;
const Ks = Se, $0 = Xe, q0 = de, O7 = function(t) {
  const e = t.data, n = e.length, r = Math.pow(2, this.value()), o = Math.pow(2, this.saturation()), l = Math.abs(this.hue() + 360) % 360, a = r * o * Math.cos(l * Math.PI / 180), c = r * o * Math.sin(l * Math.PI / 180), f = 0.299 * r + 0.701 * a + 0.167 * c, g = 0.587 * r - 0.587 * a + 0.33 * c, y = 0.114 * r - 0.114 * a - 0.497 * c, x = 0.299 * r - 0.299 * a - 0.328 * c, S = 0.587 * r + 0.413 * a + 0.035 * c, C = 0.114 * r - 0.114 * a + 0.293 * c, v = 0.299 * r - 0.3 * a + 1.25 * c, P = 0.587 * r - 0.586 * a - 1.05 * c, R = 0.114 * r + 0.886 * a - 0.2 * c;
  for (let k = 0; k < n; k += 4) {
    const w = e[k + 0], p = e[k + 1], _ = e[k + 2], N = e[k + 3];
    e[k + 0] = f * w + g * p + y * _, e[k + 1] = x * w + S * p + C * _, e[k + 2] = v * w + P * p + R * _, e[k + 3] = N;
  }
};
Tc.HSV = O7;
Ks.Factory.addGetterSetter($0.Node, "hue", 0, (0, q0.getNumberValidator)(), Ks.Factory.afterSetFilter);
Ks.Factory.addGetterSetter($0.Node, "saturation", 0, (0, q0.getNumberValidator)(), Ks.Factory.afterSetFilter);
Ks.Factory.addGetterSetter($0.Node, "value", 0, (0, q0.getNumberValidator)(), Ks.Factory.afterSetFilter);
var Nc = {};
Object.defineProperty(Nc, "__esModule", { value: !0 });
Nc.Invert = void 0;
const D7 = function(t) {
  const e = t.data, n = e.length;
  for (let r = 0; r < n; r += 4)
    e[r] = 255 - e[r], e[r + 1] = 255 - e[r + 1], e[r + 2] = 255 - e[r + 2];
};
Nc.Invert = D7;
var Rc = {};
Object.defineProperty(Rc, "__esModule", { value: !0 });
Rc.Kaleidoscope = void 0;
const Fu = Se, L4 = Xe, w2 = be, A4 = de, I7 = function(t, e, n) {
  const r = t.data, o = e.data, l = t.width, a = t.height, c = n.polarCenterX || l / 2, f = n.polarCenterY || a / 2;
  let g = Math.sqrt(c * c + f * f), y = l - c, x = a - f;
  const S = Math.sqrt(y * y + x * x);
  g = S > g ? S : g;
  const C = a, v = l, P = 360 / v * Math.PI / 180;
  for (let R = 0; R < v; R += 1) {
    const k = Math.sin(R * P), w = Math.cos(R * P);
    for (let p = 0; p < C; p += 1) {
      y = Math.floor(c + g * p / C * w), x = Math.floor(f + g * p / C * k);
      let _ = (x * l + y) * 4;
      const N = r[_ + 0], F = r[_ + 1], L = r[_ + 2], E = r[_ + 3];
      _ = (R + p * l) * 4, o[_ + 0] = N, o[_ + 1] = F, o[_ + 2] = L, o[_ + 3] = E;
    }
  }
}, z7 = function(t, e, n) {
  const r = t.data, o = e.data, l = t.width, a = t.height, c = n.polarCenterX || l / 2, f = n.polarCenterY || a / 2;
  let g = Math.sqrt(c * c + f * f), y = l - c, x = a - f;
  const S = Math.sqrt(y * y + x * x);
  g = S > g ? S : g;
  const C = a, v = l, P = 0;
  let R, k;
  for (y = 0; y < l; y += 1)
    for (x = 0; x < a; x += 1) {
      const w = y - c, p = x - f, _ = Math.sqrt(w * w + p * p) * C / g;
      let N = (Math.atan2(p, w) * 180 / Math.PI + 360 + P) % 360;
      N = N * v / 360, R = Math.floor(N), k = Math.floor(_);
      let F = (k * l + R) * 4;
      const L = r[F + 0], E = r[F + 1], I = r[F + 2], M = r[F + 3];
      F = (x * l + y) * 4, o[F + 0] = L, o[F + 1] = E, o[F + 2] = I, o[F + 3] = M;
    }
}, U7 = function(t) {
  const e = t.width, n = t.height;
  let r, o, l, a, c, f, g, y, x, S, C = Math.round(this.kaleidoscopePower());
  const v = Math.round(this.kaleidoscopeAngle()), P = Math.floor(e * (v % 360) / 360);
  if (C < 1)
    return;
  const R = w2.Util.createCanvasElement();
  R.width = e, R.height = n;
  const k = R.getContext("2d").getImageData(0, 0, e, n);
  w2.Util.releaseCanvas(R), I7(t, k, {
    polarCenterX: e / 2,
    polarCenterY: n / 2
  });
  let w = e / Math.pow(2, C);
  for (; w <= 8; )
    w = w * 2, C -= 1;
  w = Math.ceil(w);
  let p = w, _ = 0, N = p, F = 1;
  for (P + w > e && (_ = p, N = 0, F = -1), o = 0; o < n; o += 1)
    for (r = _; r !== N; r += F)
      l = Math.round(r + P) % e, x = (e * o + l) * 4, c = k.data[x + 0], f = k.data[x + 1], g = k.data[x + 2], y = k.data[x + 3], S = (e * o + r) * 4, k.data[S + 0] = c, k.data[S + 1] = f, k.data[S + 2] = g, k.data[S + 3] = y;
  for (o = 0; o < n; o += 1)
    for (p = Math.floor(w), a = 0; a < C; a += 1) {
      for (r = 0; r < p + 1; r += 1)
        x = (e * o + r) * 4, c = k.data[x + 0], f = k.data[x + 1], g = k.data[x + 2], y = k.data[x + 3], S = (e * o + p * 2 - r - 1) * 4, k.data[S + 0] = c, k.data[S + 1] = f, k.data[S + 2] = g, k.data[S + 3] = y;
      p *= 2;
    }
  z7(k, t, {});
};
Rc.Kaleidoscope = U7;
Fu.Factory.addGetterSetter(L4.Node, "kaleidoscopePower", 2, (0, A4.getNumberValidator)(), Fu.Factory.afterSetFilter);
Fu.Factory.addGetterSetter(L4.Node, "kaleidoscopeAngle", 0, (0, A4.getNumberValidator)(), Fu.Factory.afterSetFilter);
var Fc = {};
Object.defineProperty(Fc, "__esModule", { value: !0 });
Fc.Mask = void 0;
const C2 = Se, G7 = Xe, B7 = de;
function Va(t, e, n) {
  let r = (n * t.width + e) * 4;
  const o = [];
  return o.push(t.data[r++], t.data[r++], t.data[r++], t.data[r++]), o;
}
function Oo(t, e) {
  return Math.sqrt(Math.pow(t[0] - e[0], 2) + Math.pow(t[1] - e[1], 2) + Math.pow(t[2] - e[2], 2));
}
function V7(t) {
  const e = [0, 0, 0];
  for (let n = 0; n < t.length; n++)
    e[0] += t[n][0], e[1] += t[n][1], e[2] += t[n][2];
  return e[0] /= t.length, e[1] /= t.length, e[2] /= t.length, e;
}
function H7(t, e) {
  const n = Va(t, 0, 0), r = Va(t, t.width - 1, 0), o = Va(t, 0, t.height - 1), l = Va(t, t.width - 1, t.height - 1), a = e || 10;
  if (Oo(n, r) < a && Oo(r, l) < a && Oo(l, o) < a && Oo(o, n) < a) {
    const c = V7([r, n, l, o]), f = [];
    for (let g = 0; g < t.width * t.height; g++) {
      const y = Oo(c, [
        t.data[g * 4],
        t.data[g * 4 + 1],
        t.data[g * 4 + 2]
      ]);
      f[g] = y < a ? 0 : 255;
    }
    return f;
  }
}
function j7(t, e) {
  for (let n = 0; n < t.width * t.height; n++)
    t.data[4 * n + 3] = e[n];
}
function W7(t, e, n) {
  const r = [1, 1, 1, 1, 0, 1, 1, 1, 1], o = Math.round(Math.sqrt(r.length)), l = Math.floor(o / 2), a = [];
  for (let c = 0; c < n; c++)
    for (let f = 0; f < e; f++) {
      const g = c * e + f;
      let y = 0;
      for (let x = 0; x < o; x++)
        for (let S = 0; S < o; S++) {
          const C = c + x - l, v = f + S - l;
          if (C >= 0 && C < n && v >= 0 && v < e) {
            const P = C * e + v, R = r[x * o + S];
            y += t[P] * R;
          }
        }
      a[g] = y === 255 * 8 ? 255 : 0;
    }
  return a;
}
function K7(t, e, n) {
  const r = [1, 1, 1, 1, 1, 1, 1, 1, 1], o = Math.round(Math.sqrt(r.length)), l = Math.floor(o / 2), a = [];
  for (let c = 0; c < n; c++)
    for (let f = 0; f < e; f++) {
      const g = c * e + f;
      let y = 0;
      for (let x = 0; x < o; x++)
        for (let S = 0; S < o; S++) {
          const C = c + x - l, v = f + S - l;
          if (C >= 0 && C < n && v >= 0 && v < e) {
            const P = C * e + v, R = r[x * o + S];
            y += t[P] * R;
          }
        }
      a[g] = y >= 255 * 4 ? 255 : 0;
    }
  return a;
}
function Y7(t, e, n) {
  const r = [0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111], o = Math.round(Math.sqrt(r.length)), l = Math.floor(o / 2), a = [];
  for (let c = 0; c < n; c++)
    for (let f = 0; f < e; f++) {
      const g = c * e + f;
      let y = 0;
      for (let x = 0; x < o; x++)
        for (let S = 0; S < o; S++) {
          const C = c + x - l, v = f + S - l;
          if (C >= 0 && C < n && v >= 0 && v < e) {
            const P = C * e + v, R = r[x * o + S];
            y += t[P] * R;
          }
        }
      a[g] = y;
    }
  return a;
}
const X7 = function(t) {
  const e = this.threshold();
  let n = H7(t, e);
  return n && (n = W7(n, t.width, t.height), n = K7(n, t.width, t.height), n = Y7(n, t.width, t.height), j7(t, n)), t;
};
Fc.Mask = X7;
C2.Factory.addGetterSetter(G7.Node, "threshold", 0, (0, B7.getNumberValidator)(), C2.Factory.afterSetFilter);
var Mc = {};
Object.defineProperty(Mc, "__esModule", { value: !0 });
Mc.Noise = void 0;
const x2 = Se, Q7 = Xe, $7 = de, q7 = function(t) {
  const e = this.noise() * 255, n = t.data, r = n.length, o = e / 2;
  for (let l = 0; l < r; l += 4)
    n[l + 0] += o - 2 * o * Math.random(), n[l + 1] += o - 2 * o * Math.random(), n[l + 2] += o - 2 * o * Math.random();
};
Mc.Noise = q7;
x2.Factory.addGetterSetter(Q7.Node, "noise", 0.2, (0, $7.getNumberValidator)(), x2.Factory.afterSetFilter);
var Lc = {};
Object.defineProperty(Lc, "__esModule", { value: !0 });
Lc.Pixelate = void 0;
const k2 = Se, J7 = be, Z7 = Xe, b7 = de, e_ = function(t) {
  let e = Math.ceil(this.pixelSize()), n = t.width, r = t.height, o = Math.ceil(n / e), l = Math.ceil(r / e), a = t.data;
  if (e <= 0) {
    J7.Util.error("pixelSize value can not be <= 0");
    return;
  }
  for (let c = 0; c < o; c += 1)
    for (let f = 0; f < l; f += 1) {
      let g = 0, y = 0, x = 0, S = 0;
      const C = c * e, v = C + e, P = f * e, R = P + e;
      let k = 0;
      for (let w = C; w < v; w += 1)
        if (!(w >= n))
          for (let p = P; p < R; p += 1) {
            if (p >= r)
              continue;
            const _ = (n * p + w) * 4;
            g += a[_ + 0], y += a[_ + 1], x += a[_ + 2], S += a[_ + 3], k += 1;
          }
      g = g / k, y = y / k, x = x / k, S = S / k;
      for (let w = C; w < v; w += 1)
        if (!(w >= n))
          for (let p = P; p < R; p += 1) {
            if (p >= r)
              continue;
            const _ = (n * p + w) * 4;
            a[_ + 0] = g, a[_ + 1] = y, a[_ + 2] = x, a[_ + 3] = S;
          }
    }
};
Lc.Pixelate = e_;
k2.Factory.addGetterSetter(Z7.Node, "pixelSize", 8, (0, b7.getNumberValidator)(), k2.Factory.afterSetFilter);
var Ac = {};
Object.defineProperty(Ac, "__esModule", { value: !0 });
Ac.Posterize = void 0;
const E2 = Se, t_ = Xe, n_ = de, r_ = function(t) {
  const e = Math.round(this.levels() * 254) + 1, n = t.data, r = n.length, o = 255 / e;
  for (let l = 0; l < r; l += 1)
    n[l] = Math.floor(n[l] / o) * o;
};
Ac.Posterize = r_;
E2.Factory.addGetterSetter(t_.Node, "levels", 0.5, (0, n_.getNumberValidator)(), E2.Factory.afterSetFilter);
var Oc = {};
Object.defineProperty(Oc, "__esModule", { value: !0 });
Oc.RGB = void 0;
const Mu = Se, J0 = Xe, i_ = de, s_ = function(t) {
  const e = t.data, n = e.length, r = this.red(), o = this.green(), l = this.blue();
  for (let a = 0; a < n; a += 4) {
    const c = (0.34 * e[a] + 0.5 * e[a + 1] + 0.16 * e[a + 2]) / 255;
    e[a] = c * r, e[a + 1] = c * o, e[a + 2] = c * l, e[a + 3] = e[a + 3];
  }
};
Oc.RGB = s_;
Mu.Factory.addGetterSetter(J0.Node, "red", 0, function(t) {
  return this._filterUpToDate = !1, t > 255 ? 255 : t < 0 ? 0 : Math.round(t);
});
Mu.Factory.addGetterSetter(J0.Node, "green", 0, function(t) {
  return this._filterUpToDate = !1, t > 255 ? 255 : t < 0 ? 0 : Math.round(t);
});
Mu.Factory.addGetterSetter(J0.Node, "blue", 0, i_.RGBComponent, Mu.Factory.afterSetFilter);
var Dc = {};
Object.defineProperty(Dc, "__esModule", { value: !0 });
Dc.RGBA = void 0;
const ml = Se, Ic = Xe, o_ = de, l_ = function(t) {
  const e = t.data, n = e.length, r = this.red(), o = this.green(), l = this.blue(), a = this.alpha();
  for (let c = 0; c < n; c += 4) {
    const f = 1 - a;
    e[c] = r * a + e[c] * f, e[c + 1] = o * a + e[c + 1] * f, e[c + 2] = l * a + e[c + 2] * f;
  }
};
Dc.RGBA = l_;
ml.Factory.addGetterSetter(Ic.Node, "red", 0, function(t) {
  return this._filterUpToDate = !1, t > 255 ? 255 : t < 0 ? 0 : Math.round(t);
});
ml.Factory.addGetterSetter(Ic.Node, "green", 0, function(t) {
  return this._filterUpToDate = !1, t > 255 ? 255 : t < 0 ? 0 : Math.round(t);
});
ml.Factory.addGetterSetter(Ic.Node, "blue", 0, o_.RGBComponent, ml.Factory.afterSetFilter);
ml.Factory.addGetterSetter(Ic.Node, "alpha", 1, function(t) {
  return this._filterUpToDate = !1, t > 1 ? 1 : t < 0 ? 0 : t;
});
var zc = {};
Object.defineProperty(zc, "__esModule", { value: !0 });
zc.Sepia = void 0;
const a_ = function(t) {
  const e = t.data, n = e.length;
  for (let r = 0; r < n; r += 4) {
    const o = e[r + 0], l = e[r + 1], a = e[r + 2];
    e[r + 0] = Math.min(255, o * 0.393 + l * 0.769 + a * 0.189), e[r + 1] = Math.min(255, o * 0.349 + l * 0.686 + a * 0.168), e[r + 2] = Math.min(255, o * 0.272 + l * 0.534 + a * 0.131);
  }
};
zc.Sepia = a_;
var Uc = {};
Object.defineProperty(Uc, "__esModule", { value: !0 });
Uc.Solarize = void 0;
const u_ = function(t) {
  const e = t.data, n = t.width, r = t.height, o = n * 4;
  let l = r;
  do {
    const a = (l - 1) * o;
    let c = n;
    do {
      const f = a + (c - 1) * 4;
      let g = e[f], y = e[f + 1], x = e[f + 2];
      g > 127 && (g = 255 - g), y > 127 && (y = 255 - y), x > 127 && (x = 255 - x), e[f] = g, e[f + 1] = y, e[f + 2] = x;
    } while (--c);
  } while (--l);
};
Uc.Solarize = u_;
var Gc = {};
Object.defineProperty(Gc, "__esModule", { value: !0 });
Gc.Threshold = void 0;
const P2 = Se, c_ = Xe, d_ = de, f_ = function(t) {
  const e = this.threshold() * 255, n = t.data, r = n.length;
  for (let o = 0; o < r; o += 1)
    n[o] = n[o] < e ? 0 : 255;
};
Gc.Threshold = f_;
P2.Factory.addGetterSetter(c_.Node, "threshold", 0.5, (0, d_.getNumberValidator)(), P2.Factory.afterSetFilter);
Object.defineProperty($u, "__esModule", { value: !0 });
$u.Konva = void 0;
const T2 = Tu, h_ = ec, p_ = rc, g_ = oc, m_ = lc, y_ = ac, N2 = js, v_ = El, __ = bs, S_ = Tl, w_ = dc, C_ = fc, x_ = hc, k_ = pc, E_ = to, P_ = gc, T_ = mc, N_ = yc, R_ = _c, F_ = Sc, M_ = wc, L_ = Cc, A_ = kc, O_ = Ec, D_ = Pc, I_ = Tc, z_ = Nc, U_ = Rc, G_ = Fc, B_ = Mc, V_ = Lc, H_ = Ac, j_ = Oc, W_ = Dc, K_ = zc, Y_ = Uc, X_ = Gc;
$u.Konva = T2.Konva.Util._assign(T2.Konva, {
  Arc: h_.Arc,
  Arrow: p_.Arrow,
  Circle: g_.Circle,
  Ellipse: m_.Ellipse,
  Image: y_.Image,
  Label: N2.Label,
  Tag: N2.Tag,
  Line: v_.Line,
  Path: __.Path,
  Rect: S_.Rect,
  RegularPolygon: w_.RegularPolygon,
  Ring: C_.Ring,
  Sprite: x_.Sprite,
  Star: k_.Star,
  Text: E_.Text,
  TextPath: P_.TextPath,
  Transformer: T_.Transformer,
  Wedge: N_.Wedge,
  Filters: {
    Blur: R_.Blur,
    Brighten: F_.Brighten,
    Contrast: M_.Contrast,
    Emboss: L_.Emboss,
    Enhance: A_.Enhance,
    Grayscale: O_.Grayscale,
    HSL: D_.HSL,
    HSV: I_.HSV,
    Invert: z_.Invert,
    Kaleidoscope: U_.Kaleidoscope,
    Mask: G_.Mask,
    Noise: B_.Noise,
    Pixelate: V_.Pixelate,
    Posterize: H_.Posterize,
    RGB: j_.RGB,
    RGBA: W_.RGBA,
    Sepia: K_.Sepia,
    Solarize: Y_.Solarize,
    Threshold: X_.Threshold
  }
});
var Q_ = b3.exports;
Object.defineProperty(Q_, "__esModule", { value: !0 });
const $_ = $u;
b3.exports = $_.Konva;
var Vh = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.Konva = void 0;
  var n = Tu;
  Object.defineProperty(e, "Konva", { enumerable: !0, get: function() {
    return n.Konva;
  } });
  const r = Tu;
  t.exports = r.Konva;
})(Vh, Vh.exports);
var q_ = Vh.exports;
const yl = /* @__PURE__ */ Lu(q_);
var O4 = { exports: {} };
/**
 * @license React
 * react-reconciler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var J_ = function(e) {
  var n = {}, r = ce, o = Vo, l = Object.assign;
  function a(i) {
    for (var s = "https://reactjs.org/docs/error-decoder.html?invariant=" + i, u = 1; u < arguments.length; u++) s += "&args[]=" + encodeURIComponent(arguments[u]);
    return "Minified React error #" + i + "; visit " + s + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var c = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, f = Symbol.for("react.element"), g = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), x = Symbol.for("react.strict_mode"), S = Symbol.for("react.profiler"), C = Symbol.for("react.provider"), v = Symbol.for("react.context"), P = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), k = Symbol.for("react.suspense_list"), w = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), _ = Symbol.for("react.offscreen"), N = Symbol.iterator;
  function F(i) {
    return i === null || typeof i != "object" ? null : (i = N && i[N] || i["@@iterator"], typeof i == "function" ? i : null);
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
      case x:
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
      case P:
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
  function E(i) {
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
        return s === x ? "StrictMode" : "Mode";
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
  function I(i) {
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
    if (I(i) !== i) throw Error(a(188));
  }
  function B(i) {
    var s = i.alternate;
    if (!s) {
      if (s = I(i), s === null) throw Error(a(188));
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
        for (var T = !1, O = h.child; O; ) {
          if (O === u) {
            T = !0, u = h, d = m;
            break;
          }
          if (O === d) {
            T = !0, d = h, u = m;
            break;
          }
          O = O.sibling;
        }
        if (!T) {
          for (O = m.child; O; ) {
            if (O === u) {
              T = !0, u = m, d = h;
              break;
            }
            if (O === d) {
              T = !0, d = m, u = h;
              break;
            }
            O = O.sibling;
          }
          if (!T) throw Error(a(189));
        }
      }
      if (u.alternate !== d) throw Error(a(190));
    }
    if (u.tag !== 3) throw Error(a(188));
    return u.stateNode.current === u ? i : s;
  }
  function H(i) {
    return i = B(i), i !== null ? q(i) : null;
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
  function ie(i) {
    if (i.tag === 5 || i.tag === 6) return i;
    for (i = i.child; i !== null; ) {
      if (i.tag !== 4) {
        var s = ie(i);
        if (s !== null) return s;
      }
      i = i.sibling;
    }
    return null;
  }
  var Q = Array.isArray, fe = e.getPublicInstance, Ce = e.getRootHostContext, V = e.getChildHostContext, J = e.prepareForCommit, X = e.resetAfterCommit, Y = e.createInstance, se = e.appendInitialChild, Ee = e.finalizeInitialChildren, ot = e.prepareUpdate, ut = e.shouldSetTextContent, Oe = e.createTextInstance, A = e.scheduleTimeout, j = e.cancelTimeout, oe = e.noTimeout, Fe = e.isPrimaryRenderer, pe = e.supportsMutation, $ = e.supportsPersistence, Z = e.supportsHydration, ue = e.getInstanceFromNode, le = e.preparePortalMount, dn = e.getCurrentEventPriority, Wt = e.detachDeletedInstance, Rr = e.supportsMicrotasks, W4 = e.scheduleMicrotask, no = e.supportsTestSelectors, K4 = e.findFiberRoot, Y4 = e.getBoundingRect, X4 = e.getTextContent, ro = e.isHiddenSubtree, Q4 = e.matchAccessibilityRole, $4 = e.setFocusIfFocusable, q4 = e.setupIntersectionObserver, J4 = e.appendChild, Z4 = e.appendChildToContainer, b4 = e.commitTextUpdate, e5 = e.commitMount, t5 = e.commitUpdate, n5 = e.insertBefore, r5 = e.insertInContainerBefore, i5 = e.removeChild, s5 = e.removeChildFromContainer, e1 = e.resetTextContent, o5 = e.hideInstance, l5 = e.hideTextInstance, a5 = e.unhideInstance, u5 = e.unhideTextInstance, c5 = e.clearContainer, d5 = e.cloneInstance, t1 = e.createContainerChildSet, n1 = e.appendChildToContainerChildSet, f5 = e.finalizeContainerChildren, Vc = e.replaceContainerChildren, r1 = e.cloneHiddenInstance, i1 = e.cloneHiddenTextInstance, h5 = e.canHydrateInstance, p5 = e.canHydrateTextInstance, g5 = e.canHydrateSuspenseInstance, s1 = e.isSuspenseInstancePending, Hc = e.isSuspenseInstanceFallback, m5 = e.getSuspenseInstanceFallbackErrorDetails, y5 = e.registerSuspenseInstanceRetry, Nl = e.getNextHydratableSibling, v5 = e.getFirstHydratableChild, _5 = e.getFirstHydratableChildWithinContainer, S5 = e.getFirstHydratableChildWithinSuspenseInstance, w5 = e.hydrateInstance, C5 = e.hydrateTextInstance, x5 = e.hydrateSuspenseInstance, k5 = e.getNextHydratableInstanceAfterSuspenseInstance, E5 = e.commitHydratedContainer, P5 = e.commitHydratedSuspenseInstance, T5 = e.clearSuspenseBoundary, N5 = e.clearSuspenseBoundaryFromContainer, R5 = e.shouldDeleteUnhydratedTailInstances, F5 = e.didNotMatchHydratedContainerTextInstance, M5 = e.didNotMatchHydratedTextInstance, jc;
  function io(i) {
    if (jc === void 0) try {
      throw Error();
    } catch (u) {
      var s = u.stack.trim().match(/\n( *(at )?)/);
      jc = s && s[1] || "";
    }
    return `
` + jc + i;
  }
  var Wc = !1;
  function Kc(i, s) {
    if (!i || Wc) return "";
    Wc = !0;
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
        } catch (K) {
          var d = K;
        }
        Reflect.construct(i, [], s);
      } else {
        try {
          s.call();
        } catch (K) {
          d = K;
        }
        i.call(s.prototype);
      }
      else {
        try {
          throw Error();
        } catch (K) {
          d = K;
        }
        i();
      }
    } catch (K) {
      if (K && d && typeof K.stack == "string") {
        for (var h = K.stack.split(`
`), m = d.stack.split(`
`), T = h.length - 1, O = m.length - 1; 1 <= T && 0 <= O && h[T] !== m[O]; ) O--;
        for (; 1 <= T && 0 <= O; T--, O--) if (h[T] !== m[O]) {
          if (T !== 1 || O !== 1)
            do
              if (T--, O--, 0 > O || h[T] !== m[O]) {
                var U = `
` + h[T].replace(" at new ", " at ");
                return i.displayName && U.includes("<anonymous>") && (U = U.replace("<anonymous>", i.displayName)), U;
              }
            while (1 <= T && 0 <= O);
          break;
        }
      }
    } finally {
      Wc = !1, Error.prepareStackTrace = u;
    }
    return (i = i ? i.displayName || i.name : "") ? io(i) : "";
  }
  var L5 = Object.prototype.hasOwnProperty, Yc = [], Zi = -1;
  function Fr(i) {
    return { current: i };
  }
  function Ge(i) {
    0 > Zi || (i.current = Yc[Zi], Yc[Zi] = null, Zi--);
  }
  function ze(i, s) {
    Zi++, Yc[Zi] = i.current, i.current = s;
  }
  var Mr = {}, Nt = Fr(Mr), Kt = Fr(!1), mi = Mr;
  function bi(i, s) {
    var u = i.type.contextTypes;
    if (!u) return Mr;
    var d = i.stateNode;
    if (d && d.__reactInternalMemoizedUnmaskedChildContext === s) return d.__reactInternalMemoizedMaskedChildContext;
    var h = {}, m;
    for (m in u) h[m] = s[m];
    return d && (i = i.stateNode, i.__reactInternalMemoizedUnmaskedChildContext = s, i.__reactInternalMemoizedMaskedChildContext = h), h;
  }
  function Yt(i) {
    return i = i.childContextTypes, i != null;
  }
  function Rl() {
    Ge(Kt), Ge(Nt);
  }
  function o1(i, s, u) {
    if (Nt.current !== Mr) throw Error(a(168));
    ze(Nt, s), ze(Kt, u);
  }
  function l1(i, s, u) {
    var d = i.stateNode;
    if (s = s.childContextTypes, typeof d.getChildContext != "function") return u;
    d = d.getChildContext();
    for (var h in d) if (!(h in s)) throw Error(a(108, E(i) || "Unknown", h));
    return l({}, u, d);
  }
  function Fl(i) {
    return i = (i = i.stateNode) && i.__reactInternalMemoizedMergedChildContext || Mr, mi = Nt.current, ze(Nt, i), ze(Kt, Kt.current), !0;
  }
  function a1(i, s, u) {
    var d = i.stateNode;
    if (!d) throw Error(a(169));
    u ? (i = l1(i, s, mi), d.__reactInternalMemoizedMergedChildContext = i, Ge(Kt), Ge(Nt), ze(Nt, i)) : Ge(Kt), ze(Kt, u);
  }
  var Tn = Math.clz32 ? Math.clz32 : D5, A5 = Math.log, O5 = Math.LN2;
  function D5(i) {
    return i >>>= 0, i === 0 ? 32 : 31 - (A5(i) / O5 | 0) | 0;
  }
  var Ml = 64, Ll = 4194304;
  function so(i) {
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
  function Al(i, s) {
    var u = i.pendingLanes;
    if (u === 0) return 0;
    var d = 0, h = i.suspendedLanes, m = i.pingedLanes, T = u & 268435455;
    if (T !== 0) {
      var O = T & ~h;
      O !== 0 ? d = so(O) : (m &= T, m !== 0 && (d = so(m)));
    } else T = u & ~h, T !== 0 ? d = so(T) : m !== 0 && (d = so(m));
    if (d === 0) return 0;
    if (s !== 0 && s !== d && !(s & h) && (h = d & -d, m = s & -s, h >= m || h === 16 && (m & 4194240) !== 0)) return s;
    if (d & 4 && (d |= u & 16), s = i.entangledLanes, s !== 0) for (i = i.entanglements, s &= d; 0 < s; ) u = 31 - Tn(s), h = 1 << u, d |= i[u], s &= ~h;
    return d;
  }
  function I5(i, s) {
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
  function z5(i, s) {
    for (var u = i.suspendedLanes, d = i.pingedLanes, h = i.expirationTimes, m = i.pendingLanes; 0 < m; ) {
      var T = 31 - Tn(m), O = 1 << T, U = h[T];
      U === -1 ? (!(O & u) || O & d) && (h[T] = I5(O, s)) : U <= s && (i.expiredLanes |= O), m &= ~O;
    }
  }
  function Xc(i) {
    return i = i.pendingLanes & -1073741825, i !== 0 ? i : i & 1073741824 ? 1073741824 : 0;
  }
  function u1() {
    var i = Ml;
    return Ml <<= 1, !(Ml & 4194240) && (Ml = 64), i;
  }
  function Qc(i) {
    for (var s = [], u = 0; 31 > u; u++) s.push(i);
    return s;
  }
  function oo(i, s, u) {
    i.pendingLanes |= s, s !== 536870912 && (i.suspendedLanes = 0, i.pingedLanes = 0), i = i.eventTimes, s = 31 - Tn(s), i[s] = u;
  }
  function U5(i, s) {
    var u = i.pendingLanes & ~s;
    i.pendingLanes = s, i.suspendedLanes = 0, i.pingedLanes = 0, i.expiredLanes &= s, i.mutableReadLanes &= s, i.entangledLanes &= s, s = i.entanglements;
    var d = i.eventTimes;
    for (i = i.expirationTimes; 0 < u; ) {
      var h = 31 - Tn(u), m = 1 << h;
      s[h] = 0, d[h] = -1, i[h] = -1, u &= ~m;
    }
  }
  function $c(i, s) {
    var u = i.entangledLanes |= s;
    for (i = i.entanglements; u; ) {
      var d = 31 - Tn(u), h = 1 << d;
      h & s | i[d] & s && (i[d] |= s), u &= ~h;
    }
  }
  var Te = 0;
  function c1(i) {
    return i &= -i, 1 < i ? 4 < i ? i & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var qc = o.unstable_scheduleCallback, d1 = o.unstable_cancelCallback, G5 = o.unstable_shouldYield, B5 = o.unstable_requestPaint, yt = o.unstable_now, Jc = o.unstable_ImmediatePriority, V5 = o.unstable_UserBlockingPriority, Zc = o.unstable_NormalPriority, H5 = o.unstable_IdlePriority, Ol = null, jn = null;
  function j5(i) {
    if (jn && typeof jn.onCommitFiberRoot == "function") try {
      jn.onCommitFiberRoot(Ol, i, void 0, (i.current.flags & 128) === 128);
    } catch {
    }
  }
  function W5(i, s) {
    return i === s && (i !== 0 || 1 / i === 1 / s) || i !== i && s !== s;
  }
  var Nn = typeof Object.is == "function" ? Object.is : W5, sr = null, Dl = !1, bc = !1;
  function f1(i) {
    sr === null ? sr = [i] : sr.push(i);
  }
  function K5(i) {
    Dl = !0, f1(i);
  }
  function Wn() {
    if (!bc && sr !== null) {
      bc = !0;
      var i = 0, s = Te;
      try {
        var u = sr;
        for (Te = 1; i < u.length; i++) {
          var d = u[i];
          do
            d = d(!0);
          while (d !== null);
        }
        sr = null, Dl = !1;
      } catch (h) {
        throw sr !== null && (sr = sr.slice(i + 1)), qc(Jc, Wn), h;
      } finally {
        Te = s, bc = !1;
      }
    }
    return null;
  }
  var es = [], ts = 0, Il = null, zl = 0, fn = [], hn = 0, yi = null, or = 1, lr = "";
  function vi(i, s) {
    es[ts++] = zl, es[ts++] = Il, Il = i, zl = s;
  }
  function h1(i, s, u) {
    fn[hn++] = or, fn[hn++] = lr, fn[hn++] = yi, yi = i;
    var d = or;
    i = lr;
    var h = 32 - Tn(d) - 1;
    d &= ~(1 << h), u += 1;
    var m = 32 - Tn(s) + h;
    if (30 < m) {
      var T = h - h % 5;
      m = (d & (1 << T) - 1).toString(32), d >>= T, h -= T, or = 1 << 32 - Tn(s) + h | u << h | d, lr = m + i;
    } else or = 1 << m | u << h | d, lr = i;
  }
  function ed(i) {
    i.return !== null && (vi(i, 1), h1(i, 1, 0));
  }
  function td(i) {
    for (; i === Il; ) Il = es[--ts], es[ts] = null, zl = es[--ts], es[ts] = null;
    for (; i === yi; ) yi = fn[--hn], fn[hn] = null, lr = fn[--hn], fn[hn] = null, or = fn[--hn], fn[hn] = null;
  }
  var nn = null, pn = null, We = !1, lo = !1, Rn = null;
  function p1(i, s) {
    var u = _n(5, null, null, 0);
    u.elementType = "DELETED", u.stateNode = s, u.return = i, s = i.deletions, s === null ? (i.deletions = [u], i.flags |= 16) : s.push(u);
  }
  function g1(i, s) {
    switch (i.tag) {
      case 5:
        return s = h5(s, i.type, i.pendingProps), s !== null ? (i.stateNode = s, nn = i, pn = v5(s), !0) : !1;
      case 6:
        return s = p5(s, i.pendingProps), s !== null ? (i.stateNode = s, nn = i, pn = null, !0) : !1;
      case 13:
        if (s = g5(s), s !== null) {
          var u = yi !== null ? { id: or, overflow: lr } : null;
          return i.memoizedState = { dehydrated: s, treeContext: u, retryLane: 1073741824 }, u = _n(18, null, null, 0), u.stateNode = s, u.return = i, i.child = u, nn = i, pn = null, !0;
        }
        return !1;
      default:
        return !1;
    }
  }
  function nd(i) {
    return (i.mode & 1) !== 0 && (i.flags & 128) === 0;
  }
  function rd(i) {
    if (We) {
      var s = pn;
      if (s) {
        var u = s;
        if (!g1(i, s)) {
          if (nd(i)) throw Error(a(418));
          s = Nl(u);
          var d = nn;
          s && g1(i, s) ? p1(d, u) : (i.flags = i.flags & -4097 | 2, We = !1, nn = i);
        }
      } else {
        if (nd(i)) throw Error(a(418));
        i.flags = i.flags & -4097 | 2, We = !1, nn = i;
      }
    }
  }
  function m1(i) {
    for (i = i.return; i !== null && i.tag !== 5 && i.tag !== 3 && i.tag !== 13; ) i = i.return;
    nn = i;
  }
  function Ul(i) {
    if (!Z || i !== nn) return !1;
    if (!We) return m1(i), We = !0, !1;
    if (i.tag !== 3 && (i.tag !== 5 || R5(i.type) && !ut(i.type, i.memoizedProps))) {
      var s = pn;
      if (s) {
        if (nd(i)) throw y1(), Error(a(418));
        for (; s; ) p1(i, s), s = Nl(s);
      }
    }
    if (m1(i), i.tag === 13) {
      if (!Z) throw Error(a(316));
      if (i = i.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(a(317));
      pn = k5(i);
    } else pn = nn ? Nl(i.stateNode) : null;
    return !0;
  }
  function y1() {
    for (var i = pn; i; ) i = Nl(i);
  }
  function ns() {
    Z && (pn = nn = null, lo = We = !1);
  }
  function id(i) {
    Rn === null ? Rn = [i] : Rn.push(i);
  }
  var Y5 = c.ReactCurrentBatchConfig;
  function Gl(i, s) {
    if (Nn(i, s)) return !0;
    if (typeof i != "object" || i === null || typeof s != "object" || s === null) return !1;
    var u = Object.keys(i), d = Object.keys(s);
    if (u.length !== d.length) return !1;
    for (d = 0; d < u.length; d++) {
      var h = u[d];
      if (!L5.call(s, h) || !Nn(i[h], s[h])) return !1;
    }
    return !0;
  }
  function X5(i) {
    switch (i.tag) {
      case 5:
        return io(i.type);
      case 16:
        return io("Lazy");
      case 13:
        return io("Suspense");
      case 19:
        return io("SuspenseList");
      case 0:
      case 2:
      case 15:
        return i = Kc(i.type, !1), i;
      case 11:
        return i = Kc(i.type.render, !1), i;
      case 1:
        return i = Kc(i.type, !0), i;
      default:
        return "";
    }
  }
  function ao(i, s, u) {
    if (i = u.ref, i !== null && typeof i != "function" && typeof i != "object") {
      if (u._owner) {
        if (u = u._owner, u) {
          if (u.tag !== 1) throw Error(a(309));
          var d = u.stateNode;
        }
        if (!d) throw Error(a(147, i));
        var h = d, m = "" + i;
        return s !== null && s.ref !== null && typeof s.ref == "function" && s.ref._stringRef === m ? s.ref : (s = function(T) {
          var O = h.refs;
          T === null ? delete O[m] : O[m] = T;
        }, s._stringRef = m, s);
      }
      if (typeof i != "string") throw Error(a(284));
      if (!u._owner) throw Error(a(290, i));
    }
    return i;
  }
  function Bl(i, s) {
    throw i = Object.prototype.toString.call(s), Error(a(31, i === "[object Object]" ? "object with keys {" + Object.keys(s).join(", ") + "}" : i));
  }
  function v1(i) {
    var s = i._init;
    return s(i._payload);
  }
  function _1(i) {
    function s(z, D) {
      if (i) {
        var G = z.deletions;
        G === null ? (z.deletions = [D], z.flags |= 16) : G.push(D);
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
      return z = Ur(z, D), z.index = 0, z.sibling = null, z;
    }
    function m(z, D, G) {
      return z.index = G, i ? (G = z.alternate, G !== null ? (G = G.index, G < D ? (z.flags |= 2, D) : G) : (z.flags |= 2, D)) : (z.flags |= 1048576, D);
    }
    function T(z) {
      return i && z.alternate === null && (z.flags |= 2), z;
    }
    function O(z, D, G, ee) {
      return D === null || D.tag !== 6 ? (D = bd(G, z.mode, ee), D.return = z, D) : (D = h(D, G), D.return = z, D);
    }
    function U(z, D, G, ee) {
      var ae = G.type;
      return ae === y ? re(z, D, G.props.children, ee, G.key) : D !== null && (D.elementType === ae || typeof ae == "object" && ae !== null && ae.$$typeof === p && v1(ae) === D.type) ? (ee = h(D, G.props), ee.ref = ao(z, D, G), ee.return = z, ee) : (ee = ya(G.type, G.key, G.props, null, z.mode, ee), ee.ref = ao(z, D, G), ee.return = z, ee);
    }
    function K(z, D, G, ee) {
      return D === null || D.tag !== 4 || D.stateNode.containerInfo !== G.containerInfo || D.stateNode.implementation !== G.implementation ? (D = ef(G, z.mode, ee), D.return = z, D) : (D = h(D, G.children || []), D.return = z, D);
    }
    function re(z, D, G, ee, ae) {
      return D === null || D.tag !== 7 ? (D = Ei(G, z.mode, ee, ae), D.return = z, D) : (D = h(D, G), D.return = z, D);
    }
    function ge(z, D, G) {
      if (typeof D == "string" && D !== "" || typeof D == "number") return D = bd("" + D, z.mode, G), D.return = z, D;
      if (typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case f:
            return G = ya(D.type, D.key, D.props, null, z.mode, G), G.ref = ao(z, null, D), G.return = z, G;
          case g:
            return D = ef(D, z.mode, G), D.return = z, D;
          case p:
            var ee = D._init;
            return ge(z, ee(D._payload), G);
        }
        if (Q(D) || F(D)) return D = Ei(D, z.mode, G, null), D.return = z, D;
        Bl(z, D);
      }
      return null;
    }
    function b(z, D, G, ee) {
      var ae = D !== null ? D.key : null;
      if (typeof G == "string" && G !== "" || typeof G == "number") return ae !== null ? null : O(z, D, "" + G, ee);
      if (typeof G == "object" && G !== null) {
        switch (G.$$typeof) {
          case f:
            return G.key === ae ? U(z, D, G, ee) : null;
          case g:
            return G.key === ae ? K(z, D, G, ee) : null;
          case p:
            return ae = G._init, b(
              z,
              D,
              ae(G._payload),
              ee
            );
        }
        if (Q(G) || F(G)) return ae !== null ? null : re(z, D, G, ee, null);
        Bl(z, G);
      }
      return null;
    }
    function Be(z, D, G, ee, ae) {
      if (typeof ee == "string" && ee !== "" || typeof ee == "number") return z = z.get(G) || null, O(D, z, "" + ee, ae);
      if (typeof ee == "object" && ee !== null) {
        switch (ee.$$typeof) {
          case f:
            return z = z.get(ee.key === null ? G : ee.key) || null, U(D, z, ee, ae);
          case g:
            return z = z.get(ee.key === null ? G : ee.key) || null, K(D, z, ee, ae);
          case p:
            var ye = ee._init;
            return Be(z, D, G, ye(ee._payload), ae);
        }
        if (Q(ee) || F(ee)) return z = z.get(G) || null, re(D, z, ee, ae, null);
        Bl(D, ee);
      }
      return null;
    }
    function De(z, D, G, ee) {
      for (var ae = null, ye = null, me = D, Ne = D = 0, St = null; me !== null && Ne < G.length; Ne++) {
        me.index > Ne ? (St = me, me = null) : St = me.sibling;
        var Re = b(z, me, G[Ne], ee);
        if (Re === null) {
          me === null && (me = St);
          break;
        }
        i && me && Re.alternate === null && s(z, me), D = m(Re, D, Ne), ye === null ? ae = Re : ye.sibling = Re, ye = Re, me = St;
      }
      if (Ne === G.length) return u(z, me), We && vi(z, Ne), ae;
      if (me === null) {
        for (; Ne < G.length; Ne++) me = ge(z, G[Ne], ee), me !== null && (D = m(me, D, Ne), ye === null ? ae = me : ye.sibling = me, ye = me);
        return We && vi(z, Ne), ae;
      }
      for (me = d(z, me); Ne < G.length; Ne++) St = Be(me, z, Ne, G[Ne], ee), St !== null && (i && St.alternate !== null && me.delete(St.key === null ? Ne : St.key), D = m(St, D, Ne), ye === null ? ae = St : ye.sibling = St, ye = St);
      return i && me.forEach(function(Gr) {
        return s(z, Gr);
      }), We && vi(z, Ne), ae;
    }
    function qt(z, D, G, ee) {
      var ae = F(G);
      if (typeof ae != "function") throw Error(a(150));
      if (G = ae.call(G), G == null) throw Error(a(151));
      for (var ye = ae = null, me = D, Ne = D = 0, St = null, Re = G.next(); me !== null && !Re.done; Ne++, Re = G.next()) {
        me.index > Ne ? (St = me, me = null) : St = me.sibling;
        var Gr = b(z, me, Re.value, ee);
        if (Gr === null) {
          me === null && (me = St);
          break;
        }
        i && me && Gr.alternate === null && s(z, me), D = m(Gr, D, Ne), ye === null ? ae = Gr : ye.sibling = Gr, ye = Gr, me = St;
      }
      if (Re.done) return u(
        z,
        me
      ), We && vi(z, Ne), ae;
      if (me === null) {
        for (; !Re.done; Ne++, Re = G.next()) Re = ge(z, Re.value, ee), Re !== null && (D = m(Re, D, Ne), ye === null ? ae = Re : ye.sibling = Re, ye = Re);
        return We && vi(z, Ne), ae;
      }
      for (me = d(z, me); !Re.done; Ne++, Re = G.next()) Re = Be(me, z, Ne, Re.value, ee), Re !== null && (i && Re.alternate !== null && me.delete(Re.key === null ? Ne : Re.key), D = m(Re, D, Ne), ye === null ? ae = Re : ye.sibling = Re, ye = Re);
      return i && me.forEach(function(xy) {
        return s(z, xy);
      }), We && vi(z, Ne), ae;
    }
    function dr(z, D, G, ee) {
      if (typeof G == "object" && G !== null && G.type === y && G.key === null && (G = G.props.children), typeof G == "object" && G !== null) {
        switch (G.$$typeof) {
          case f:
            e: {
              for (var ae = G.key, ye = D; ye !== null; ) {
                if (ye.key === ae) {
                  if (ae = G.type, ae === y) {
                    if (ye.tag === 7) {
                      u(z, ye.sibling), D = h(ye, G.props.children), D.return = z, z = D;
                      break e;
                    }
                  } else if (ye.elementType === ae || typeof ae == "object" && ae !== null && ae.$$typeof === p && v1(ae) === ye.type) {
                    u(z, ye.sibling), D = h(ye, G.props), D.ref = ao(z, ye, G), D.return = z, z = D;
                    break e;
                  }
                  u(z, ye);
                  break;
                } else s(z, ye);
                ye = ye.sibling;
              }
              G.type === y ? (D = Ei(G.props.children, z.mode, ee, G.key), D.return = z, z = D) : (ee = ya(G.type, G.key, G.props, null, z.mode, ee), ee.ref = ao(z, D, G), ee.return = z, z = ee);
            }
            return T(z);
          case g:
            e: {
              for (ye = G.key; D !== null; ) {
                if (D.key === ye) if (D.tag === 4 && D.stateNode.containerInfo === G.containerInfo && D.stateNode.implementation === G.implementation) {
                  u(z, D.sibling), D = h(D, G.children || []), D.return = z, z = D;
                  break e;
                } else {
                  u(z, D);
                  break;
                }
                else s(z, D);
                D = D.sibling;
              }
              D = ef(G, z.mode, ee), D.return = z, z = D;
            }
            return T(z);
          case p:
            return ye = G._init, dr(z, D, ye(G._payload), ee);
        }
        if (Q(G)) return De(z, D, G, ee);
        if (F(G)) return qt(z, D, G, ee);
        Bl(z, G);
      }
      return typeof G == "string" && G !== "" || typeof G == "number" ? (G = "" + G, D !== null && D.tag === 6 ? (u(z, D.sibling), D = h(D, G), D.return = z, z = D) : (u(z, D), D = bd(G, z.mode, ee), D.return = z, z = D), T(z)) : u(z, D);
    }
    return dr;
  }
  var rs = _1(!0), S1 = _1(!1), Vl = Fr(null), Hl = null, is = null, sd = null;
  function od() {
    sd = is = Hl = null;
  }
  function w1(i, s, u) {
    Fe ? (ze(Vl, s._currentValue), s._currentValue = u) : (ze(Vl, s._currentValue2), s._currentValue2 = u);
  }
  function ld(i) {
    var s = Vl.current;
    Ge(Vl), Fe ? i._currentValue = s : i._currentValue2 = s;
  }
  function ad(i, s, u) {
    for (; i !== null; ) {
      var d = i.alternate;
      if ((i.childLanes & s) !== s ? (i.childLanes |= s, d !== null && (d.childLanes |= s)) : d !== null && (d.childLanes & s) !== s && (d.childLanes |= s), i === u) break;
      i = i.return;
    }
  }
  function ss(i, s) {
    Hl = i, sd = is = null, i = i.dependencies, i !== null && i.firstContext !== null && (i.lanes & s && (Xt = !0), i.firstContext = null);
  }
  function gn(i) {
    var s = Fe ? i._currentValue : i._currentValue2;
    if (sd !== i) if (i = { context: i, memoizedValue: s, next: null }, is === null) {
      if (Hl === null) throw Error(a(308));
      is = i, Hl.dependencies = { lanes: 0, firstContext: i };
    } else is = is.next = i;
    return s;
  }
  var _i = null;
  function ud(i) {
    _i === null ? _i = [i] : _i.push(i);
  }
  function C1(i, s, u, d) {
    var h = s.interleaved;
    return h === null ? (u.next = u, ud(s)) : (u.next = h.next, h.next = u), s.interleaved = u, Kn(i, d);
  }
  function Kn(i, s) {
    i.lanes |= s;
    var u = i.alternate;
    for (u !== null && (u.lanes |= s), u = i, i = i.return; i !== null; ) i.childLanes |= s, u = i.alternate, u !== null && (u.childLanes |= s), u = i, i = i.return;
    return u.tag === 3 ? u.stateNode : null;
  }
  var Lr = !1;
  function cd(i) {
    i.updateQueue = { baseState: i.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function x1(i, s) {
    i = i.updateQueue, s.updateQueue === i && (s.updateQueue = { baseState: i.baseState, firstBaseUpdate: i.firstBaseUpdate, lastBaseUpdate: i.lastBaseUpdate, shared: i.shared, effects: i.effects });
  }
  function ar(i, s) {
    return { eventTime: i, lane: s, tag: 0, payload: null, callback: null, next: null };
  }
  function Ar(i, s, u) {
    var d = i.updateQueue;
    if (d === null) return null;
    if (d = d.shared, _e & 2) {
      var h = d.pending;
      return h === null ? s.next = s : (s.next = h.next, h.next = s), d.pending = s, Kn(i, u);
    }
    return h = d.interleaved, h === null ? (s.next = s, ud(d)) : (s.next = h.next, h.next = s), d.interleaved = s, Kn(i, u);
  }
  function jl(i, s, u) {
    if (s = s.updateQueue, s !== null && (s = s.shared, (u & 4194240) !== 0)) {
      var d = s.lanes;
      d &= i.pendingLanes, u |= d, s.lanes = u, $c(i, u);
    }
  }
  function k1(i, s) {
    var u = i.updateQueue, d = i.alternate;
    if (d !== null && (d = d.updateQueue, u === d)) {
      var h = null, m = null;
      if (u = u.firstBaseUpdate, u !== null) {
        do {
          var T = { eventTime: u.eventTime, lane: u.lane, tag: u.tag, payload: u.payload, callback: u.callback, next: null };
          m === null ? h = m = T : m = m.next = T, u = u.next;
        } while (u !== null);
        m === null ? h = m = s : m = m.next = s;
      } else h = m = s;
      u = { baseState: d.baseState, firstBaseUpdate: h, lastBaseUpdate: m, shared: d.shared, effects: d.effects }, i.updateQueue = u;
      return;
    }
    i = u.lastBaseUpdate, i === null ? u.firstBaseUpdate = s : i.next = s, u.lastBaseUpdate = s;
  }
  function Wl(i, s, u, d) {
    var h = i.updateQueue;
    Lr = !1;
    var m = h.firstBaseUpdate, T = h.lastBaseUpdate, O = h.shared.pending;
    if (O !== null) {
      h.shared.pending = null;
      var U = O, K = U.next;
      U.next = null, T === null ? m = K : T.next = K, T = U;
      var re = i.alternate;
      re !== null && (re = re.updateQueue, O = re.lastBaseUpdate, O !== T && (O === null ? re.firstBaseUpdate = K : O.next = K, re.lastBaseUpdate = U));
    }
    if (m !== null) {
      var ge = h.baseState;
      T = 0, re = K = U = null, O = m;
      do {
        var b = O.lane, Be = O.eventTime;
        if ((d & b) === b) {
          re !== null && (re = re.next = {
            eventTime: Be,
            lane: 0,
            tag: O.tag,
            payload: O.payload,
            callback: O.callback,
            next: null
          });
          e: {
            var De = i, qt = O;
            switch (b = s, Be = u, qt.tag) {
              case 1:
                if (De = qt.payload, typeof De == "function") {
                  ge = De.call(Be, ge, b);
                  break e;
                }
                ge = De;
                break e;
              case 3:
                De.flags = De.flags & -65537 | 128;
              case 0:
                if (De = qt.payload, b = typeof De == "function" ? De.call(Be, ge, b) : De, b == null) break e;
                ge = l({}, ge, b);
                break e;
              case 2:
                Lr = !0;
            }
          }
          O.callback !== null && O.lane !== 0 && (i.flags |= 64, b = h.effects, b === null ? h.effects = [O] : b.push(O));
        } else Be = { eventTime: Be, lane: b, tag: O.tag, payload: O.payload, callback: O.callback, next: null }, re === null ? (K = re = Be, U = ge) : re = re.next = Be, T |= b;
        if (O = O.next, O === null) {
          if (O = h.shared.pending, O === null) break;
          b = O, O = b.next, b.next = null, h.lastBaseUpdate = b, h.shared.pending = null;
        }
      } while (!0);
      if (re === null && (U = ge), h.baseState = U, h.firstBaseUpdate = K, h.lastBaseUpdate = re, s = h.shared.interleaved, s !== null) {
        h = s;
        do
          T |= h.lane, h = h.next;
        while (h !== s);
      } else m === null && (h.shared.lanes = 0);
      wi |= T, i.lanes = T, i.memoizedState = ge;
    }
  }
  function E1(i, s, u) {
    if (i = s.effects, s.effects = null, i !== null) for (s = 0; s < i.length; s++) {
      var d = i[s], h = d.callback;
      if (h !== null) {
        if (d.callback = null, d = u, typeof h != "function") throw Error(a(191, h));
        h.call(d);
      }
    }
  }
  var uo = {}, mn = Fr(uo), co = Fr(uo), os = Fr(uo);
  function Yn(i) {
    if (i === uo) throw Error(a(174));
    return i;
  }
  function dd(i, s) {
    ze(os, s), ze(co, i), ze(mn, uo), i = Ce(s), Ge(mn), ze(mn, i);
  }
  function ls() {
    Ge(mn), Ge(co), Ge(os);
  }
  function P1(i) {
    var s = Yn(os.current), u = Yn(mn.current);
    s = V(u, i.type, s), u !== s && (ze(co, i), ze(mn, s));
  }
  function fd(i) {
    co.current === i && (Ge(mn), Ge(co));
  }
  var Qe = Fr(0);
  function Kl(i) {
    for (var s = i; s !== null; ) {
      if (s.tag === 13) {
        var u = s.memoizedState;
        if (u !== null && (u = u.dehydrated, u === null || s1(u) || Hc(u))) return s;
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
  var hd = [];
  function pd() {
    for (var i = 0; i < hd.length; i++) {
      var s = hd[i];
      Fe ? s._workInProgressVersionPrimary = null : s._workInProgressVersionSecondary = null;
    }
    hd.length = 0;
  }
  var Yl = c.ReactCurrentDispatcher, gd = c.ReactCurrentBatchConfig, Si = 0, $e = null, ct = null, vt = null, Xl = !1, fo = !1, ho = 0, Q5 = 0;
  function Rt() {
    throw Error(a(321));
  }
  function md(i, s) {
    if (s === null) return !1;
    for (var u = 0; u < s.length && u < i.length; u++) if (!Nn(i[u], s[u])) return !1;
    return !0;
  }
  function yd(i, s, u, d, h, m) {
    if (Si = m, $e = s, s.memoizedState = null, s.updateQueue = null, s.lanes = 0, Yl.current = i === null || i.memoizedState === null ? Z5 : b5, i = u(d, h), fo) {
      m = 0;
      do {
        if (fo = !1, ho = 0, 25 <= m) throw Error(a(301));
        m += 1, vt = ct = null, s.updateQueue = null, Yl.current = ey, i = u(d, h);
      } while (fo);
    }
    if (Yl.current = ql, s = ct !== null && ct.next !== null, Si = 0, vt = ct = $e = null, Xl = !1, s) throw Error(a(300));
    return i;
  }
  function vd() {
    var i = ho !== 0;
    return ho = 0, i;
  }
  function Xn() {
    var i = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return vt === null ? $e.memoizedState = vt = i : vt = vt.next = i, vt;
  }
  function yn() {
    if (ct === null) {
      var i = $e.alternate;
      i = i !== null ? i.memoizedState : null;
    } else i = ct.next;
    var s = vt === null ? $e.memoizedState : vt.next;
    if (s !== null) vt = s, ct = i;
    else {
      if (i === null) throw Error(a(310));
      ct = i, i = { memoizedState: ct.memoizedState, baseState: ct.baseState, baseQueue: ct.baseQueue, queue: ct.queue, next: null }, vt === null ? $e.memoizedState = vt = i : vt = vt.next = i;
    }
    return vt;
  }
  function po(i, s) {
    return typeof s == "function" ? s(i) : s;
  }
  function _d(i) {
    var s = yn(), u = s.queue;
    if (u === null) throw Error(a(311));
    u.lastRenderedReducer = i;
    var d = ct, h = d.baseQueue, m = u.pending;
    if (m !== null) {
      if (h !== null) {
        var T = h.next;
        h.next = m.next, m.next = T;
      }
      d.baseQueue = h = m, u.pending = null;
    }
    if (h !== null) {
      m = h.next, d = d.baseState;
      var O = T = null, U = null, K = m;
      do {
        var re = K.lane;
        if ((Si & re) === re) U !== null && (U = U.next = { lane: 0, action: K.action, hasEagerState: K.hasEagerState, eagerState: K.eagerState, next: null }), d = K.hasEagerState ? K.eagerState : i(d, K.action);
        else {
          var ge = {
            lane: re,
            action: K.action,
            hasEagerState: K.hasEagerState,
            eagerState: K.eagerState,
            next: null
          };
          U === null ? (O = U = ge, T = d) : U = U.next = ge, $e.lanes |= re, wi |= re;
        }
        K = K.next;
      } while (K !== null && K !== m);
      U === null ? T = d : U.next = O, Nn(d, s.memoizedState) || (Xt = !0), s.memoizedState = d, s.baseState = T, s.baseQueue = U, u.lastRenderedState = d;
    }
    if (i = u.interleaved, i !== null) {
      h = i;
      do
        m = h.lane, $e.lanes |= m, wi |= m, h = h.next;
      while (h !== i);
    } else h === null && (u.lanes = 0);
    return [s.memoizedState, u.dispatch];
  }
  function Sd(i) {
    var s = yn(), u = s.queue;
    if (u === null) throw Error(a(311));
    u.lastRenderedReducer = i;
    var d = u.dispatch, h = u.pending, m = s.memoizedState;
    if (h !== null) {
      u.pending = null;
      var T = h = h.next;
      do
        m = i(m, T.action), T = T.next;
      while (T !== h);
      Nn(m, s.memoizedState) || (Xt = !0), s.memoizedState = m, s.baseQueue === null && (s.baseState = m), u.lastRenderedState = m;
    }
    return [m, d];
  }
  function T1() {
  }
  function N1(i, s) {
    var u = $e, d = yn(), h = s(), m = !Nn(d.memoizedState, h);
    if (m && (d.memoizedState = h, Xt = !0), d = d.queue, wd(M1.bind(null, u, d, i), [i]), d.getSnapshot !== s || m || vt !== null && vt.memoizedState.tag & 1) {
      if (u.flags |= 2048, go(9, F1.bind(null, u, d, h, s), void 0, null), _t === null) throw Error(a(349));
      Si & 30 || R1(u, s, h);
    }
    return h;
  }
  function R1(i, s, u) {
    i.flags |= 16384, i = { getSnapshot: s, value: u }, s = $e.updateQueue, s === null ? (s = { lastEffect: null, stores: null }, $e.updateQueue = s, s.stores = [i]) : (u = s.stores, u === null ? s.stores = [i] : u.push(i));
  }
  function F1(i, s, u, d) {
    s.value = u, s.getSnapshot = d, L1(s) && A1(i);
  }
  function M1(i, s, u) {
    return u(function() {
      L1(s) && A1(i);
    });
  }
  function L1(i) {
    var s = i.getSnapshot;
    i = i.value;
    try {
      var u = s();
      return !Nn(i, u);
    } catch {
      return !0;
    }
  }
  function A1(i) {
    var s = Kn(i, 1);
    s !== null && vn(s, i, 1, -1);
  }
  function O1(i) {
    var s = Xn();
    return typeof i == "function" && (i = i()), s.memoizedState = s.baseState = i, i = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: po, lastRenderedState: i }, s.queue = i, i = i.dispatch = J5.bind(null, $e, i), [s.memoizedState, i];
  }
  function go(i, s, u, d) {
    return i = { tag: i, create: s, destroy: u, deps: d, next: null }, s = $e.updateQueue, s === null ? (s = { lastEffect: null, stores: null }, $e.updateQueue = s, s.lastEffect = i.next = i) : (u = s.lastEffect, u === null ? s.lastEffect = i.next = i : (d = u.next, u.next = i, i.next = d, s.lastEffect = i)), i;
  }
  function D1() {
    return yn().memoizedState;
  }
  function Ql(i, s, u, d) {
    var h = Xn();
    $e.flags |= i, h.memoizedState = go(1 | s, u, void 0, d === void 0 ? null : d);
  }
  function $l(i, s, u, d) {
    var h = yn();
    d = d === void 0 ? null : d;
    var m = void 0;
    if (ct !== null) {
      var T = ct.memoizedState;
      if (m = T.destroy, d !== null && md(d, T.deps)) {
        h.memoizedState = go(s, u, m, d);
        return;
      }
    }
    $e.flags |= i, h.memoizedState = go(1 | s, u, m, d);
  }
  function I1(i, s) {
    return Ql(8390656, 8, i, s);
  }
  function wd(i, s) {
    return $l(2048, 8, i, s);
  }
  function z1(i, s) {
    return $l(4, 2, i, s);
  }
  function U1(i, s) {
    return $l(4, 4, i, s);
  }
  function G1(i, s) {
    if (typeof s == "function") return i = i(), s(i), function() {
      s(null);
    };
    if (s != null) return i = i(), s.current = i, function() {
      s.current = null;
    };
  }
  function B1(i, s, u) {
    return u = u != null ? u.concat([i]) : null, $l(4, 4, G1.bind(null, s, i), u);
  }
  function Cd() {
  }
  function V1(i, s) {
    var u = yn();
    s = s === void 0 ? null : s;
    var d = u.memoizedState;
    return d !== null && s !== null && md(s, d[1]) ? d[0] : (u.memoizedState = [i, s], i);
  }
  function H1(i, s) {
    var u = yn();
    s = s === void 0 ? null : s;
    var d = u.memoizedState;
    return d !== null && s !== null && md(s, d[1]) ? d[0] : (i = i(), u.memoizedState = [i, s], i);
  }
  function j1(i, s, u) {
    return Si & 21 ? (Nn(u, s) || (u = u1(), $e.lanes |= u, wi |= u, i.baseState = !0), s) : (i.baseState && (i.baseState = !1, Xt = !0), i.memoizedState = u);
  }
  function $5(i, s) {
    var u = Te;
    Te = u !== 0 && 4 > u ? u : 4, i(!0);
    var d = gd.transition;
    gd.transition = {};
    try {
      i(!1), s();
    } finally {
      Te = u, gd.transition = d;
    }
  }
  function W1() {
    return yn().memoizedState;
  }
  function q5(i, s, u) {
    var d = Ir(i);
    if (u = { lane: d, action: u, hasEagerState: !1, eagerState: null, next: null }, K1(i)) Y1(s, u);
    else if (u = C1(i, s, u, d), u !== null) {
      var h = Lt();
      vn(u, i, d, h), X1(u, s, d);
    }
  }
  function J5(i, s, u) {
    var d = Ir(i), h = { lane: d, action: u, hasEagerState: !1, eagerState: null, next: null };
    if (K1(i)) Y1(s, h);
    else {
      var m = i.alternate;
      if (i.lanes === 0 && (m === null || m.lanes === 0) && (m = s.lastRenderedReducer, m !== null)) try {
        var T = s.lastRenderedState, O = m(T, u);
        if (h.hasEagerState = !0, h.eagerState = O, Nn(O, T)) {
          var U = s.interleaved;
          U === null ? (h.next = h, ud(s)) : (h.next = U.next, U.next = h), s.interleaved = h;
          return;
        }
      } catch {
      } finally {
      }
      u = C1(i, s, h, d), u !== null && (h = Lt(), vn(u, i, d, h), X1(u, s, d));
    }
  }
  function K1(i) {
    var s = i.alternate;
    return i === $e || s !== null && s === $e;
  }
  function Y1(i, s) {
    fo = Xl = !0;
    var u = i.pending;
    u === null ? s.next = s : (s.next = u.next, u.next = s), i.pending = s;
  }
  function X1(i, s, u) {
    if (u & 4194240) {
      var d = s.lanes;
      d &= i.pendingLanes, u |= d, s.lanes = u, $c(i, u);
    }
  }
  var ql = { readContext: gn, useCallback: Rt, useContext: Rt, useEffect: Rt, useImperativeHandle: Rt, useInsertionEffect: Rt, useLayoutEffect: Rt, useMemo: Rt, useReducer: Rt, useRef: Rt, useState: Rt, useDebugValue: Rt, useDeferredValue: Rt, useTransition: Rt, useMutableSource: Rt, useSyncExternalStore: Rt, useId: Rt, unstable_isNewReconciler: !1 }, Z5 = { readContext: gn, useCallback: function(i, s) {
    return Xn().memoizedState = [i, s === void 0 ? null : s], i;
  }, useContext: gn, useEffect: I1, useImperativeHandle: function(i, s, u) {
    return u = u != null ? u.concat([i]) : null, Ql(
      4194308,
      4,
      G1.bind(null, s, i),
      u
    );
  }, useLayoutEffect: function(i, s) {
    return Ql(4194308, 4, i, s);
  }, useInsertionEffect: function(i, s) {
    return Ql(4, 2, i, s);
  }, useMemo: function(i, s) {
    var u = Xn();
    return s = s === void 0 ? null : s, i = i(), u.memoizedState = [i, s], i;
  }, useReducer: function(i, s, u) {
    var d = Xn();
    return s = u !== void 0 ? u(s) : s, d.memoizedState = d.baseState = s, i = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: i, lastRenderedState: s }, d.queue = i, i = i.dispatch = q5.bind(null, $e, i), [d.memoizedState, i];
  }, useRef: function(i) {
    var s = Xn();
    return i = { current: i }, s.memoizedState = i;
  }, useState: O1, useDebugValue: Cd, useDeferredValue: function(i) {
    return Xn().memoizedState = i;
  }, useTransition: function() {
    var i = O1(!1), s = i[0];
    return i = $5.bind(null, i[1]), Xn().memoizedState = i, [s, i];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(i, s, u) {
    var d = $e, h = Xn();
    if (We) {
      if (u === void 0) throw Error(a(407));
      u = u();
    } else {
      if (u = s(), _t === null) throw Error(a(349));
      Si & 30 || R1(d, s, u);
    }
    h.memoizedState = u;
    var m = { value: u, getSnapshot: s };
    return h.queue = m, I1(M1.bind(
      null,
      d,
      m,
      i
    ), [i]), d.flags |= 2048, go(9, F1.bind(null, d, m, u, s), void 0, null), u;
  }, useId: function() {
    var i = Xn(), s = _t.identifierPrefix;
    if (We) {
      var u = lr, d = or;
      u = (d & ~(1 << 32 - Tn(d) - 1)).toString(32) + u, s = ":" + s + "R" + u, u = ho++, 0 < u && (s += "H" + u.toString(32)), s += ":";
    } else u = Q5++, s = ":" + s + "r" + u.toString(32) + ":";
    return i.memoizedState = s;
  }, unstable_isNewReconciler: !1 }, b5 = {
    readContext: gn,
    useCallback: V1,
    useContext: gn,
    useEffect: wd,
    useImperativeHandle: B1,
    useInsertionEffect: z1,
    useLayoutEffect: U1,
    useMemo: H1,
    useReducer: _d,
    useRef: D1,
    useState: function() {
      return _d(po);
    },
    useDebugValue: Cd,
    useDeferredValue: function(i) {
      var s = yn();
      return j1(s, ct.memoizedState, i);
    },
    useTransition: function() {
      var i = _d(po)[0], s = yn().memoizedState;
      return [i, s];
    },
    useMutableSource: T1,
    useSyncExternalStore: N1,
    useId: W1,
    unstable_isNewReconciler: !1
  }, ey = { readContext: gn, useCallback: V1, useContext: gn, useEffect: wd, useImperativeHandle: B1, useInsertionEffect: z1, useLayoutEffect: U1, useMemo: H1, useReducer: Sd, useRef: D1, useState: function() {
    return Sd(po);
  }, useDebugValue: Cd, useDeferredValue: function(i) {
    var s = yn();
    return ct === null ? s.memoizedState = i : j1(s, ct.memoizedState, i);
  }, useTransition: function() {
    var i = Sd(po)[0], s = yn().memoizedState;
    return [i, s];
  }, useMutableSource: T1, useSyncExternalStore: N1, useId: W1, unstable_isNewReconciler: !1 };
  function Fn(i, s) {
    if (i && i.defaultProps) {
      s = l({}, s), i = i.defaultProps;
      for (var u in i) s[u] === void 0 && (s[u] = i[u]);
      return s;
    }
    return s;
  }
  function xd(i, s, u, d) {
    s = i.memoizedState, u = u(d, s), u = u == null ? s : l({}, s, u), i.memoizedState = u, i.lanes === 0 && (i.updateQueue.baseState = u);
  }
  var Jl = { isMounted: function(i) {
    return (i = i._reactInternals) ? I(i) === i : !1;
  }, enqueueSetState: function(i, s, u) {
    i = i._reactInternals;
    var d = Lt(), h = Ir(i), m = ar(d, h);
    m.payload = s, u != null && (m.callback = u), s = Ar(i, m, h), s !== null && (vn(s, i, h, d), jl(s, i, h));
  }, enqueueReplaceState: function(i, s, u) {
    i = i._reactInternals;
    var d = Lt(), h = Ir(i), m = ar(d, h);
    m.tag = 1, m.payload = s, u != null && (m.callback = u), s = Ar(i, m, h), s !== null && (vn(s, i, h, d), jl(s, i, h));
  }, enqueueForceUpdate: function(i, s) {
    i = i._reactInternals;
    var u = Lt(), d = Ir(i), h = ar(u, d);
    h.tag = 2, s != null && (h.callback = s), s = Ar(i, h, d), s !== null && (vn(s, i, d, u), jl(s, i, d));
  } };
  function Q1(i, s, u, d, h, m, T) {
    return i = i.stateNode, typeof i.shouldComponentUpdate == "function" ? i.shouldComponentUpdate(d, m, T) : s.prototype && s.prototype.isPureReactComponent ? !Gl(u, d) || !Gl(h, m) : !0;
  }
  function $1(i, s, u) {
    var d = !1, h = Mr, m = s.contextType;
    return typeof m == "object" && m !== null ? m = gn(m) : (h = Yt(s) ? mi : Nt.current, d = s.contextTypes, m = (d = d != null) ? bi(i, h) : Mr), s = new s(u, m), i.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null, s.updater = Jl, i.stateNode = s, s._reactInternals = i, d && (i = i.stateNode, i.__reactInternalMemoizedUnmaskedChildContext = h, i.__reactInternalMemoizedMaskedChildContext = m), s;
  }
  function q1(i, s, u, d) {
    i = s.state, typeof s.componentWillReceiveProps == "function" && s.componentWillReceiveProps(u, d), typeof s.UNSAFE_componentWillReceiveProps == "function" && s.UNSAFE_componentWillReceiveProps(u, d), s.state !== i && Jl.enqueueReplaceState(s, s.state, null);
  }
  function kd(i, s, u, d) {
    var h = i.stateNode;
    h.props = u, h.state = i.memoizedState, h.refs = {}, cd(i);
    var m = s.contextType;
    typeof m == "object" && m !== null ? h.context = gn(m) : (m = Yt(s) ? mi : Nt.current, h.context = bi(i, m)), h.state = i.memoizedState, m = s.getDerivedStateFromProps, typeof m == "function" && (xd(i, s, m, u), h.state = i.memoizedState), typeof s.getDerivedStateFromProps == "function" || typeof h.getSnapshotBeforeUpdate == "function" || typeof h.UNSAFE_componentWillMount != "function" && typeof h.componentWillMount != "function" || (s = h.state, typeof h.componentWillMount == "function" && h.componentWillMount(), typeof h.UNSAFE_componentWillMount == "function" && h.UNSAFE_componentWillMount(), s !== h.state && Jl.enqueueReplaceState(h, h.state, null), Wl(i, u, h, d), h.state = i.memoizedState), typeof h.componentDidMount == "function" && (i.flags |= 4194308);
  }
  function as(i, s) {
    try {
      var u = "", d = s;
      do
        u += X5(d), d = d.return;
      while (d);
      var h = u;
    } catch (m) {
      h = `
Error generating stack: ` + m.message + `
` + m.stack;
    }
    return { value: i, source: s, stack: h, digest: null };
  }
  function Ed(i, s, u) {
    return { value: i, source: null, stack: u ?? null, digest: s ?? null };
  }
  function Pd(i, s) {
    try {
      console.error(s.value);
    } catch (u) {
      setTimeout(function() {
        throw u;
      });
    }
  }
  var ty = typeof WeakMap == "function" ? WeakMap : Map;
  function J1(i, s, u) {
    u = ar(-1, u), u.tag = 3, u.payload = { element: null };
    var d = s.value;
    return u.callback = function() {
      da || (da = !0, Yd = d), Pd(i, s);
    }, u;
  }
  function Z1(i, s, u) {
    u = ar(-1, u), u.tag = 3;
    var d = i.type.getDerivedStateFromError;
    if (typeof d == "function") {
      var h = s.value;
      u.payload = function() {
        return d(h);
      }, u.callback = function() {
        Pd(i, s);
      };
    }
    var m = i.stateNode;
    return m !== null && typeof m.componentDidCatch == "function" && (u.callback = function() {
      Pd(i, s), typeof d != "function" && (Or === null ? Or = /* @__PURE__ */ new Set([this]) : Or.add(this));
      var T = s.stack;
      this.componentDidCatch(s.value, { componentStack: T !== null ? T : "" });
    }), u;
  }
  function b1(i, s, u) {
    var d = i.pingCache;
    if (d === null) {
      d = i.pingCache = new ty();
      var h = /* @__PURE__ */ new Set();
      d.set(s, h);
    } else h = d.get(s), h === void 0 && (h = /* @__PURE__ */ new Set(), d.set(s, h));
    h.has(u) || (h.add(u), i = gy.bind(null, i, s, u), s.then(i, i));
  }
  function ep(i) {
    do {
      var s;
      if ((s = i.tag === 13) && (s = i.memoizedState, s = s !== null ? s.dehydrated !== null : !0), s) return i;
      i = i.return;
    } while (i !== null);
    return null;
  }
  function tp(i, s, u, d, h) {
    return i.mode & 1 ? (i.flags |= 65536, i.lanes = h, i) : (i === s ? i.flags |= 65536 : (i.flags |= 128, u.flags |= 131072, u.flags &= -52805, u.tag === 1 && (u.alternate === null ? u.tag = 17 : (s = ar(-1, 1), s.tag = 2, Ar(u, s, 1))), u.lanes |= 1), i);
  }
  var ny = c.ReactCurrentOwner, Xt = !1;
  function Ut(i, s, u, d) {
    s.child = i === null ? S1(s, null, u, d) : rs(s, i.child, u, d);
  }
  function np(i, s, u, d, h) {
    u = u.render;
    var m = s.ref;
    return ss(s, h), d = yd(i, s, u, d, m, h), u = vd(), i !== null && !Xt ? (s.updateQueue = i.updateQueue, s.flags &= -2053, i.lanes &= ~h, ur(i, s, h)) : (We && u && ed(s), s.flags |= 1, Ut(i, s, d, h), s.child);
  }
  function rp(i, s, u, d, h) {
    if (i === null) {
      var m = u.type;
      return typeof m == "function" && !Zd(m) && m.defaultProps === void 0 && u.compare === null && u.defaultProps === void 0 ? (s.tag = 15, s.type = m, ip(i, s, m, d, h)) : (i = ya(u.type, null, d, s, s.mode, h), i.ref = s.ref, i.return = s, s.child = i);
    }
    if (m = i.child, !(i.lanes & h)) {
      var T = m.memoizedProps;
      if (u = u.compare, u = u !== null ? u : Gl, u(T, d) && i.ref === s.ref) return ur(i, s, h);
    }
    return s.flags |= 1, i = Ur(m, d), i.ref = s.ref, i.return = s, s.child = i;
  }
  function ip(i, s, u, d, h) {
    if (i !== null) {
      var m = i.memoizedProps;
      if (Gl(m, d) && i.ref === s.ref) if (Xt = !1, s.pendingProps = d = m, (i.lanes & h) !== 0) i.flags & 131072 && (Xt = !0);
      else return s.lanes = i.lanes, ur(i, s, h);
    }
    return Td(i, s, u, d, h);
  }
  function sp(i, s, u) {
    var d = s.pendingProps, h = d.children, m = i !== null ? i.memoizedState : null;
    if (d.mode === "hidden") if (!(s.mode & 1)) s.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, ze(cs, rn), rn |= u;
    else {
      if (!(u & 1073741824)) return i = m !== null ? m.baseLanes | u : u, s.lanes = s.childLanes = 1073741824, s.memoizedState = { baseLanes: i, cachePool: null, transitions: null }, s.updateQueue = null, ze(cs, rn), rn |= i, null;
      s.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, d = m !== null ? m.baseLanes : u, ze(cs, rn), rn |= d;
    }
    else m !== null ? (d = m.baseLanes | u, s.memoizedState = null) : d = u, ze(cs, rn), rn |= d;
    return Ut(i, s, h, u), s.child;
  }
  function op(i, s) {
    var u = s.ref;
    (i === null && u !== null || i !== null && i.ref !== u) && (s.flags |= 512, s.flags |= 2097152);
  }
  function Td(i, s, u, d, h) {
    var m = Yt(u) ? mi : Nt.current;
    return m = bi(s, m), ss(s, h), u = yd(i, s, u, d, m, h), d = vd(), i !== null && !Xt ? (s.updateQueue = i.updateQueue, s.flags &= -2053, i.lanes &= ~h, ur(i, s, h)) : (We && d && ed(s), s.flags |= 1, Ut(i, s, u, h), s.child);
  }
  function lp(i, s, u, d, h) {
    if (Yt(u)) {
      var m = !0;
      Fl(s);
    } else m = !1;
    if (ss(s, h), s.stateNode === null) bl(i, s), $1(s, u, d), kd(s, u, d, h), d = !0;
    else if (i === null) {
      var T = s.stateNode, O = s.memoizedProps;
      T.props = O;
      var U = T.context, K = u.contextType;
      typeof K == "object" && K !== null ? K = gn(K) : (K = Yt(u) ? mi : Nt.current, K = bi(s, K));
      var re = u.getDerivedStateFromProps, ge = typeof re == "function" || typeof T.getSnapshotBeforeUpdate == "function";
      ge || typeof T.UNSAFE_componentWillReceiveProps != "function" && typeof T.componentWillReceiveProps != "function" || (O !== d || U !== K) && q1(s, T, d, K), Lr = !1;
      var b = s.memoizedState;
      T.state = b, Wl(s, d, T, h), U = s.memoizedState, O !== d || b !== U || Kt.current || Lr ? (typeof re == "function" && (xd(s, u, re, d), U = s.memoizedState), (O = Lr || Q1(s, u, O, d, b, U, K)) ? (ge || typeof T.UNSAFE_componentWillMount != "function" && typeof T.componentWillMount != "function" || (typeof T.componentWillMount == "function" && T.componentWillMount(), typeof T.UNSAFE_componentWillMount == "function" && T.UNSAFE_componentWillMount()), typeof T.componentDidMount == "function" && (s.flags |= 4194308)) : (typeof T.componentDidMount == "function" && (s.flags |= 4194308), s.memoizedProps = d, s.memoizedState = U), T.props = d, T.state = U, T.context = K, d = O) : (typeof T.componentDidMount == "function" && (s.flags |= 4194308), d = !1);
    } else {
      T = s.stateNode, x1(i, s), O = s.memoizedProps, K = s.type === s.elementType ? O : Fn(s.type, O), T.props = K, ge = s.pendingProps, b = T.context, U = u.contextType, typeof U == "object" && U !== null ? U = gn(U) : (U = Yt(u) ? mi : Nt.current, U = bi(s, U));
      var Be = u.getDerivedStateFromProps;
      (re = typeof Be == "function" || typeof T.getSnapshotBeforeUpdate == "function") || typeof T.UNSAFE_componentWillReceiveProps != "function" && typeof T.componentWillReceiveProps != "function" || (O !== ge || b !== U) && q1(s, T, d, U), Lr = !1, b = s.memoizedState, T.state = b, Wl(s, d, T, h);
      var De = s.memoizedState;
      O !== ge || b !== De || Kt.current || Lr ? (typeof Be == "function" && (xd(s, u, Be, d), De = s.memoizedState), (K = Lr || Q1(s, u, K, d, b, De, U) || !1) ? (re || typeof T.UNSAFE_componentWillUpdate != "function" && typeof T.componentWillUpdate != "function" || (typeof T.componentWillUpdate == "function" && T.componentWillUpdate(d, De, U), typeof T.UNSAFE_componentWillUpdate == "function" && T.UNSAFE_componentWillUpdate(d, De, U)), typeof T.componentDidUpdate == "function" && (s.flags |= 4), typeof T.getSnapshotBeforeUpdate == "function" && (s.flags |= 1024)) : (typeof T.componentDidUpdate != "function" || O === i.memoizedProps && b === i.memoizedState || (s.flags |= 4), typeof T.getSnapshotBeforeUpdate != "function" || O === i.memoizedProps && b === i.memoizedState || (s.flags |= 1024), s.memoizedProps = d, s.memoizedState = De), T.props = d, T.state = De, T.context = U, d = K) : (typeof T.componentDidUpdate != "function" || O === i.memoizedProps && b === i.memoizedState || (s.flags |= 4), typeof T.getSnapshotBeforeUpdate != "function" || O === i.memoizedProps && b === i.memoizedState || (s.flags |= 1024), d = !1);
    }
    return Nd(i, s, u, d, m, h);
  }
  function Nd(i, s, u, d, h, m) {
    op(i, s);
    var T = (s.flags & 128) !== 0;
    if (!d && !T) return h && a1(s, u, !1), ur(i, s, m);
    d = s.stateNode, ny.current = s;
    var O = T && typeof u.getDerivedStateFromError != "function" ? null : d.render();
    return s.flags |= 1, i !== null && T ? (s.child = rs(s, i.child, null, m), s.child = rs(s, null, O, m)) : Ut(i, s, O, m), s.memoizedState = d.state, h && a1(s, u, !0), s.child;
  }
  function ap(i) {
    var s = i.stateNode;
    s.pendingContext ? o1(i, s.pendingContext, s.pendingContext !== s.context) : s.context && o1(i, s.context, !1), dd(i, s.containerInfo);
  }
  function up(i, s, u, d, h) {
    return ns(), id(h), s.flags |= 256, Ut(i, s, u, d), s.child;
  }
  var Rd = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Fd(i) {
    return { baseLanes: i, cachePool: null, transitions: null };
  }
  function cp(i, s, u) {
    var d = s.pendingProps, h = Qe.current, m = !1, T = (s.flags & 128) !== 0, O;
    if ((O = T) || (O = i !== null && i.memoizedState === null ? !1 : (h & 2) !== 0), O ? (m = !0, s.flags &= -129) : (i === null || i.memoizedState !== null) && (h |= 1), ze(Qe, h & 1), i === null)
      return rd(s), i = s.memoizedState, i !== null && (i = i.dehydrated, i !== null) ? (s.mode & 1 ? Hc(i) ? s.lanes = 8 : s.lanes = 1073741824 : s.lanes = 1, null) : (T = d.children, i = d.fallback, m ? (d = s.mode, m = s.child, T = { mode: "hidden", children: T }, !(d & 1) && m !== null ? (m.childLanes = 0, m.pendingProps = T) : m = va(T, d, 0, null), i = Ei(i, d, u, null), m.return = s, i.return = s, m.sibling = i, s.child = m, s.child.memoizedState = Fd(u), s.memoizedState = Rd, i) : Md(s, T));
    if (h = i.memoizedState, h !== null && (O = h.dehydrated, O !== null)) return ry(i, s, T, d, O, h, u);
    if (m) {
      m = d.fallback, T = s.mode, h = i.child, O = h.sibling;
      var U = { mode: "hidden", children: d.children };
      return !(T & 1) && s.child !== h ? (d = s.child, d.childLanes = 0, d.pendingProps = U, s.deletions = null) : (d = Ur(h, U), d.subtreeFlags = h.subtreeFlags & 14680064), O !== null ? m = Ur(O, m) : (m = Ei(m, T, u, null), m.flags |= 2), m.return = s, d.return = s, d.sibling = m, s.child = d, d = m, m = s.child, T = i.child.memoizedState, T = T === null ? Fd(u) : { baseLanes: T.baseLanes | u, cachePool: null, transitions: T.transitions }, m.memoizedState = T, m.childLanes = i.childLanes & ~u, s.memoizedState = Rd, d;
    }
    return m = i.child, i = m.sibling, d = Ur(m, { mode: "visible", children: d.children }), !(s.mode & 1) && (d.lanes = u), d.return = s, d.sibling = null, i !== null && (u = s.deletions, u === null ? (s.deletions = [i], s.flags |= 16) : u.push(i)), s.child = d, s.memoizedState = null, d;
  }
  function Md(i, s) {
    return s = va({ mode: "visible", children: s }, i.mode, 0, null), s.return = i, i.child = s;
  }
  function Zl(i, s, u, d) {
    return d !== null && id(d), rs(s, i.child, null, u), i = Md(s, s.pendingProps.children), i.flags |= 2, s.memoizedState = null, i;
  }
  function ry(i, s, u, d, h, m, T) {
    if (u)
      return s.flags & 256 ? (s.flags &= -257, d = Ed(Error(a(422))), Zl(i, s, T, d)) : s.memoizedState !== null ? (s.child = i.child, s.flags |= 128, null) : (m = d.fallback, h = s.mode, d = va({ mode: "visible", children: d.children }, h, 0, null), m = Ei(m, h, T, null), m.flags |= 2, d.return = s, m.return = s, d.sibling = m, s.child = d, s.mode & 1 && rs(s, i.child, null, T), s.child.memoizedState = Fd(T), s.memoizedState = Rd, m);
    if (!(s.mode & 1)) return Zl(i, s, T, null);
    if (Hc(h)) return d = m5(h).digest, m = Error(a(419)), d = Ed(
      m,
      d,
      void 0
    ), Zl(i, s, T, d);
    if (u = (T & i.childLanes) !== 0, Xt || u) {
      if (d = _t, d !== null) {
        switch (T & -T) {
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
        h = h & (d.suspendedLanes | T) ? 0 : h, h !== 0 && h !== m.retryLane && (m.retryLane = h, Kn(i, h), vn(
          d,
          i,
          h,
          -1
        ));
      }
      return Jd(), d = Ed(Error(a(421))), Zl(i, s, T, d);
    }
    return s1(h) ? (s.flags |= 128, s.child = i.child, s = my.bind(null, i), y5(h, s), null) : (i = m.treeContext, Z && (pn = S5(h), nn = s, We = !0, Rn = null, lo = !1, i !== null && (fn[hn++] = or, fn[hn++] = lr, fn[hn++] = yi, or = i.id, lr = i.overflow, yi = s)), s = Md(s, d.children), s.flags |= 4096, s);
  }
  function dp(i, s, u) {
    i.lanes |= s;
    var d = i.alternate;
    d !== null && (d.lanes |= s), ad(i.return, s, u);
  }
  function Ld(i, s, u, d, h) {
    var m = i.memoizedState;
    m === null ? i.memoizedState = { isBackwards: s, rendering: null, renderingStartTime: 0, last: d, tail: u, tailMode: h } : (m.isBackwards = s, m.rendering = null, m.renderingStartTime = 0, m.last = d, m.tail = u, m.tailMode = h);
  }
  function fp(i, s, u) {
    var d = s.pendingProps, h = d.revealOrder, m = d.tail;
    if (Ut(i, s, d.children, u), d = Qe.current, d & 2) d = d & 1 | 2, s.flags |= 128;
    else {
      if (i !== null && i.flags & 128) e: for (i = s.child; i !== null; ) {
        if (i.tag === 13) i.memoizedState !== null && dp(i, u, s);
        else if (i.tag === 19) dp(i, u, s);
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
    if (ze(Qe, d), !(s.mode & 1)) s.memoizedState = null;
    else switch (h) {
      case "forwards":
        for (u = s.child, h = null; u !== null; ) i = u.alternate, i !== null && Kl(i) === null && (h = u), u = u.sibling;
        u = h, u === null ? (h = s.child, s.child = null) : (h = u.sibling, u.sibling = null), Ld(s, !1, h, u, m);
        break;
      case "backwards":
        for (u = null, h = s.child, s.child = null; h !== null; ) {
          if (i = h.alternate, i !== null && Kl(i) === null) {
            s.child = h;
            break;
          }
          i = h.sibling, h.sibling = u, u = h, h = i;
        }
        Ld(s, !0, u, null, m);
        break;
      case "together":
        Ld(s, !1, null, null, void 0);
        break;
      default:
        s.memoizedState = null;
    }
    return s.child;
  }
  function bl(i, s) {
    !(s.mode & 1) && i !== null && (i.alternate = null, s.alternate = null, s.flags |= 2);
  }
  function ur(i, s, u) {
    if (i !== null && (s.dependencies = i.dependencies), wi |= s.lanes, !(u & s.childLanes)) return null;
    if (i !== null && s.child !== i.child) throw Error(a(153));
    if (s.child !== null) {
      for (i = s.child, u = Ur(i, i.pendingProps), s.child = u, u.return = s; i.sibling !== null; ) i = i.sibling, u = u.sibling = Ur(i, i.pendingProps), u.return = s;
      u.sibling = null;
    }
    return s.child;
  }
  function iy(i, s, u) {
    switch (s.tag) {
      case 3:
        ap(s), ns();
        break;
      case 5:
        P1(s);
        break;
      case 1:
        Yt(s.type) && Fl(s);
        break;
      case 4:
        dd(s, s.stateNode.containerInfo);
        break;
      case 10:
        w1(s, s.type._context, s.memoizedProps.value);
        break;
      case 13:
        var d = s.memoizedState;
        if (d !== null)
          return d.dehydrated !== null ? (ze(Qe, Qe.current & 1), s.flags |= 128, null) : u & s.child.childLanes ? cp(i, s, u) : (ze(Qe, Qe.current & 1), i = ur(i, s, u), i !== null ? i.sibling : null);
        ze(Qe, Qe.current & 1);
        break;
      case 19:
        if (d = (u & s.childLanes) !== 0, i.flags & 128) {
          if (d) return fp(
            i,
            s,
            u
          );
          s.flags |= 128;
        }
        var h = s.memoizedState;
        if (h !== null && (h.rendering = null, h.tail = null, h.lastEffect = null), ze(Qe, Qe.current), d) break;
        return null;
      case 22:
      case 23:
        return s.lanes = 0, sp(i, s, u);
    }
    return ur(i, s, u);
  }
  function Qn(i) {
    i.flags |= 4;
  }
  function hp(i, s) {
    if (i !== null && i.child === s.child) return !0;
    if (s.flags & 16) return !1;
    for (i = s.child; i !== null; ) {
      if (i.flags & 12854 || i.subtreeFlags & 12854) return !1;
      i = i.sibling;
    }
    return !0;
  }
  var mo, yo, ea, ta;
  if (pe) mo = function(i, s) {
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
  }, yo = function() {
  }, ea = function(i, s, u, d, h) {
    if (i = i.memoizedProps, i !== d) {
      var m = s.stateNode, T = Yn(mn.current);
      u = ot(m, u, i, d, h, T), (s.updateQueue = u) && Qn(s);
    }
  }, ta = function(i, s, u, d) {
    u !== d && Qn(s);
  };
  else if ($) {
    mo = function(i, s, u, d) {
      for (var h = s.child; h !== null; ) {
        if (h.tag === 5) {
          var m = h.stateNode;
          u && d && (m = r1(m, h.type, h.memoizedProps, h)), se(i, m);
        } else if (h.tag === 6) m = h.stateNode, u && d && (m = i1(m, h.memoizedProps, h)), se(i, m);
        else if (h.tag !== 4) {
          if (h.tag === 22 && h.memoizedState !== null) m = h.child, m !== null && (m.return = h), mo(i, h, !0, !0);
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
    var pp = function(i, s, u, d) {
      for (var h = s.child; h !== null; ) {
        if (h.tag === 5) {
          var m = h.stateNode;
          u && d && (m = r1(m, h.type, h.memoizedProps, h)), n1(i, m);
        } else if (h.tag === 6) m = h.stateNode, u && d && (m = i1(m, h.memoizedProps, h)), n1(i, m);
        else if (h.tag !== 4) {
          if (h.tag === 22 && h.memoizedState !== null) m = h.child, m !== null && (m.return = h), pp(i, h, !0, !0);
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
    yo = function(i, s) {
      var u = s.stateNode;
      if (!hp(i, s)) {
        i = u.containerInfo;
        var d = t1(i);
        pp(d, s, !1, !1), u.pendingChildren = d, Qn(s), f5(i, d);
      }
    }, ea = function(i, s, u, d, h) {
      var m = i.stateNode, T = i.memoizedProps;
      if ((i = hp(i, s)) && T === d) s.stateNode = m;
      else {
        var O = s.stateNode, U = Yn(mn.current), K = null;
        T !== d && (K = ot(O, u, T, d, h, U)), i && K === null ? s.stateNode = m : (m = d5(m, K, u, T, d, s, i, O), Ee(m, u, d, h, U) && Qn(s), s.stateNode = m, i ? Qn(s) : mo(m, s, !1, !1));
      }
    }, ta = function(i, s, u, d) {
      u !== d ? (i = Yn(os.current), u = Yn(mn.current), s.stateNode = Oe(d, i, u, s), Qn(s)) : s.stateNode = i.stateNode;
    };
  } else yo = function() {
  }, ea = function() {
  }, ta = function() {
  };
  function vo(i, s) {
    if (!We) switch (i.tailMode) {
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
  function Ft(i) {
    var s = i.alternate !== null && i.alternate.child === i.child, u = 0, d = 0;
    if (s) for (var h = i.child; h !== null; ) u |= h.lanes | h.childLanes, d |= h.subtreeFlags & 14680064, d |= h.flags & 14680064, h.return = i, h = h.sibling;
    else for (h = i.child; h !== null; ) u |= h.lanes | h.childLanes, d |= h.subtreeFlags, d |= h.flags, h.return = i, h = h.sibling;
    return i.subtreeFlags |= d, i.childLanes = u, s;
  }
  function sy(i, s, u) {
    var d = s.pendingProps;
    switch (td(s), s.tag) {
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
        return Ft(s), null;
      case 1:
        return Yt(s.type) && Rl(), Ft(s), null;
      case 3:
        return u = s.stateNode, ls(), Ge(Kt), Ge(Nt), pd(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (i === null || i.child === null) && (Ul(s) ? Qn(s) : i === null || i.memoizedState.isDehydrated && !(s.flags & 256) || (s.flags |= 1024, Rn !== null && ($d(Rn), Rn = null))), yo(i, s), Ft(s), null;
      case 5:
        fd(s), u = Yn(os.current);
        var h = s.type;
        if (i !== null && s.stateNode != null) ea(i, s, h, d, u), i.ref !== s.ref && (s.flags |= 512, s.flags |= 2097152);
        else {
          if (!d) {
            if (s.stateNode === null) throw Error(a(166));
            return Ft(s), null;
          }
          if (i = Yn(mn.current), Ul(s)) {
            if (!Z) throw Error(a(175));
            i = w5(s.stateNode, s.type, s.memoizedProps, u, i, s, !lo), s.updateQueue = i, i !== null && Qn(s);
          } else {
            var m = Y(h, d, u, i, s);
            mo(m, s, !1, !1), s.stateNode = m, Ee(m, h, d, u, i) && Qn(s);
          }
          s.ref !== null && (s.flags |= 512, s.flags |= 2097152);
        }
        return Ft(s), null;
      case 6:
        if (i && s.stateNode != null) ta(i, s, i.memoizedProps, d);
        else {
          if (typeof d != "string" && s.stateNode === null) throw Error(a(166));
          if (i = Yn(os.current), u = Yn(mn.current), Ul(s)) {
            if (!Z) throw Error(a(176));
            if (i = s.stateNode, u = s.memoizedProps, (d = C5(i, u, s, !lo)) && (h = nn, h !== null)) switch (h.tag) {
              case 3:
                F5(h.stateNode.containerInfo, i, u, (h.mode & 1) !== 0);
                break;
              case 5:
                M5(h.type, h.memoizedProps, h.stateNode, i, u, (h.mode & 1) !== 0);
            }
            d && Qn(s);
          } else s.stateNode = Oe(d, i, u, s);
        }
        return Ft(s), null;
      case 13:
        if (Ge(Qe), d = s.memoizedState, i === null || i.memoizedState !== null && i.memoizedState.dehydrated !== null) {
          if (We && pn !== null && s.mode & 1 && !(s.flags & 128)) y1(), ns(), s.flags |= 98560, h = !1;
          else if (h = Ul(s), d !== null && d.dehydrated !== null) {
            if (i === null) {
              if (!h) throw Error(a(318));
              if (!Z) throw Error(a(344));
              if (h = s.memoizedState, h = h !== null ? h.dehydrated : null, !h) throw Error(a(317));
              x5(h, s);
            } else ns(), !(s.flags & 128) && (s.memoizedState = null), s.flags |= 4;
            Ft(s), h = !1;
          } else Rn !== null && ($d(Rn), Rn = null), h = !0;
          if (!h) return s.flags & 65536 ? s : null;
        }
        return s.flags & 128 ? (s.lanes = u, s) : (u = d !== null, u !== (i !== null && i.memoizedState !== null) && u && (s.child.flags |= 8192, s.mode & 1 && (i === null || Qe.current & 1 ? dt === 0 && (dt = 3) : Jd())), s.updateQueue !== null && (s.flags |= 4), Ft(s), null);
      case 4:
        return ls(), yo(i, s), i === null && le(s.stateNode.containerInfo), Ft(s), null;
      case 10:
        return ld(s.type._context), Ft(s), null;
      case 17:
        return Yt(s.type) && Rl(), Ft(s), null;
      case 19:
        if (Ge(Qe), h = s.memoizedState, h === null) return Ft(s), null;
        if (d = (s.flags & 128) !== 0, m = h.rendering, m === null) if (d) vo(h, !1);
        else {
          if (dt !== 0 || i !== null && i.flags & 128) for (i = s.child; i !== null; ) {
            if (m = Kl(i), m !== null) {
              for (s.flags |= 128, vo(h, !1), i = m.updateQueue, i !== null && (s.updateQueue = i, s.flags |= 4), s.subtreeFlags = 0, i = u, u = s.child; u !== null; ) d = u, h = i, d.flags &= 14680066, m = d.alternate, m === null ? (d.childLanes = 0, d.lanes = h, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = m.childLanes, d.lanes = m.lanes, d.child = m.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = m.memoizedProps, d.memoizedState = m.memoizedState, d.updateQueue = m.updateQueue, d.type = m.type, h = m.dependencies, d.dependencies = h === null ? null : { lanes: h.lanes, firstContext: h.firstContext }), u = u.sibling;
              return ze(Qe, Qe.current & 1 | 2), s.child;
            }
            i = i.sibling;
          }
          h.tail !== null && yt() > Kd && (s.flags |= 128, d = !0, vo(h, !1), s.lanes = 4194304);
        }
        else {
          if (!d) if (i = Kl(m), i !== null) {
            if (s.flags |= 128, d = !0, i = i.updateQueue, i !== null && (s.updateQueue = i, s.flags |= 4), vo(h, !0), h.tail === null && h.tailMode === "hidden" && !m.alternate && !We) return Ft(s), null;
          } else 2 * yt() - h.renderingStartTime > Kd && u !== 1073741824 && (s.flags |= 128, d = !0, vo(h, !1), s.lanes = 4194304);
          h.isBackwards ? (m.sibling = s.child, s.child = m) : (i = h.last, i !== null ? i.sibling = m : s.child = m, h.last = m);
        }
        return h.tail !== null ? (s = h.tail, h.rendering = s, h.tail = s.sibling, h.renderingStartTime = yt(), s.sibling = null, i = Qe.current, ze(Qe, d ? i & 1 | 2 : i & 1), s) : (Ft(s), null);
      case 22:
      case 23:
        return qd(), u = s.memoizedState !== null, i !== null && i.memoizedState !== null !== u && (s.flags |= 8192), u && s.mode & 1 ? rn & 1073741824 && (Ft(s), pe && s.subtreeFlags & 6 && (s.flags |= 8192)) : Ft(s), null;
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
  function oy(i, s) {
    switch (td(s), s.tag) {
      case 1:
        return Yt(s.type) && Rl(), i = s.flags, i & 65536 ? (s.flags = i & -65537 | 128, s) : null;
      case 3:
        return ls(), Ge(Kt), Ge(Nt), pd(), i = s.flags, i & 65536 && !(i & 128) ? (s.flags = i & -65537 | 128, s) : null;
      case 5:
        return fd(s), null;
      case 13:
        if (Ge(Qe), i = s.memoizedState, i !== null && i.dehydrated !== null) {
          if (s.alternate === null) throw Error(a(340));
          ns();
        }
        return i = s.flags, i & 65536 ? (s.flags = i & -65537 | 128, s) : null;
      case 19:
        return Ge(Qe), null;
      case 4:
        return ls(), null;
      case 10:
        return ld(s.type._context), null;
      case 22:
      case 23:
        return qd(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var na = !1, Mt = !1, ly = typeof WeakSet == "function" ? WeakSet : Set, te = null;
  function us(i, s) {
    var u = i.ref;
    if (u !== null) if (typeof u == "function") try {
      u(null);
    } catch (d) {
      Ke(i, s, d);
    }
    else u.current = null;
  }
  function Ad(i, s, u) {
    try {
      u();
    } catch (d) {
      Ke(i, s, d);
    }
  }
  var gp = !1;
  function ay(i, s) {
    for (J(i.containerInfo), te = s; te !== null; ) if (i = te, s = i.child, (i.subtreeFlags & 1028) !== 0 && s !== null) s.return = i, te = s;
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
              var d = u.memoizedProps, h = u.memoizedState, m = i.stateNode, T = m.getSnapshotBeforeUpdate(i.elementType === i.type ? d : Fn(i.type, d), h);
              m.__reactInternalSnapshotBeforeUpdate = T;
            }
            break;
          case 3:
            pe && c5(i.stateNode.containerInfo);
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
        Ke(i, i.return, O);
      }
      if (s = i.sibling, s !== null) {
        s.return = i.return, te = s;
        break;
      }
      te = i.return;
    }
    return u = gp, gp = !1, u;
  }
  function _o(i, s, u) {
    var d = s.updateQueue;
    if (d = d !== null ? d.lastEffect : null, d !== null) {
      var h = d = d.next;
      do {
        if ((h.tag & i) === i) {
          var m = h.destroy;
          h.destroy = void 0, m !== void 0 && Ad(s, u, m);
        }
        h = h.next;
      } while (h !== d);
    }
  }
  function ra(i, s) {
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
  function Od(i) {
    var s = i.ref;
    if (s !== null) {
      var u = i.stateNode;
      switch (i.tag) {
        case 5:
          i = fe(u);
          break;
        default:
          i = u;
      }
      typeof s == "function" ? s(i) : s.current = i;
    }
  }
  function mp(i) {
    var s = i.alternate;
    s !== null && (i.alternate = null, mp(s)), i.child = null, i.deletions = null, i.sibling = null, i.tag === 5 && (s = i.stateNode, s !== null && Wt(s)), i.stateNode = null, i.return = null, i.dependencies = null, i.memoizedProps = null, i.memoizedState = null, i.pendingProps = null, i.stateNode = null, i.updateQueue = null;
  }
  function yp(i) {
    return i.tag === 5 || i.tag === 3 || i.tag === 4;
  }
  function vp(i) {
    e: for (; ; ) {
      for (; i.sibling === null; ) {
        if (i.return === null || yp(i.return)) return null;
        i = i.return;
      }
      for (i.sibling.return = i.return, i = i.sibling; i.tag !== 5 && i.tag !== 6 && i.tag !== 18; ) {
        if (i.flags & 2 || i.child === null || i.tag === 4) continue e;
        i.child.return = i, i = i.child;
      }
      if (!(i.flags & 2)) return i.stateNode;
    }
  }
  function Dd(i, s, u) {
    var d = i.tag;
    if (d === 5 || d === 6) i = i.stateNode, s ? r5(u, i, s) : Z4(u, i);
    else if (d !== 4 && (i = i.child, i !== null)) for (Dd(i, s, u), i = i.sibling; i !== null; ) Dd(i, s, u), i = i.sibling;
  }
  function Id(i, s, u) {
    var d = i.tag;
    if (d === 5 || d === 6) i = i.stateNode, s ? n5(u, i, s) : J4(u, i);
    else if (d !== 4 && (i = i.child, i !== null)) for (Id(i, s, u), i = i.sibling; i !== null; ) Id(i, s, u), i = i.sibling;
  }
  var xt = null, Mn = !1;
  function $n(i, s, u) {
    for (u = u.child; u !== null; ) zd(i, s, u), u = u.sibling;
  }
  function zd(i, s, u) {
    if (jn && typeof jn.onCommitFiberUnmount == "function") try {
      jn.onCommitFiberUnmount(Ol, u);
    } catch {
    }
    switch (u.tag) {
      case 5:
        Mt || us(u, s);
      case 6:
        if (pe) {
          var d = xt, h = Mn;
          xt = null, $n(i, s, u), xt = d, Mn = h, xt !== null && (Mn ? s5(xt, u.stateNode) : i5(xt, u.stateNode));
        } else $n(i, s, u);
        break;
      case 18:
        pe && xt !== null && (Mn ? N5(xt, u.stateNode) : T5(xt, u.stateNode));
        break;
      case 4:
        pe ? (d = xt, h = Mn, xt = u.stateNode.containerInfo, Mn = !0, $n(i, s, u), xt = d, Mn = h) : ($ && (d = u.stateNode.containerInfo, h = t1(d), Vc(d, h)), $n(i, s, u));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Mt && (d = u.updateQueue, d !== null && (d = d.lastEffect, d !== null))) {
          h = d = d.next;
          do {
            var m = h, T = m.destroy;
            m = m.tag, T !== void 0 && (m & 2 || m & 4) && Ad(u, s, T), h = h.next;
          } while (h !== d);
        }
        $n(i, s, u);
        break;
      case 1:
        if (!Mt && (us(u, s), d = u.stateNode, typeof d.componentWillUnmount == "function")) try {
          d.props = u.memoizedProps, d.state = u.memoizedState, d.componentWillUnmount();
        } catch (O) {
          Ke(u, s, O);
        }
        $n(i, s, u);
        break;
      case 21:
        $n(i, s, u);
        break;
      case 22:
        u.mode & 1 ? (Mt = (d = Mt) || u.memoizedState !== null, $n(i, s, u), Mt = d) : $n(i, s, u);
        break;
      default:
        $n(
          i,
          s,
          u
        );
    }
  }
  function _p(i) {
    var s = i.updateQueue;
    if (s !== null) {
      i.updateQueue = null;
      var u = i.stateNode;
      u === null && (u = i.stateNode = new ly()), s.forEach(function(d) {
        var h = yy.bind(null, i, d);
        u.has(d) || (u.add(d), d.then(h, h));
      });
    }
  }
  function Ln(i, s) {
    var u = s.deletions;
    if (u !== null) for (var d = 0; d < u.length; d++) {
      var h = u[d];
      try {
        var m = i, T = s;
        if (pe) {
          var O = T;
          e: for (; O !== null; ) {
            switch (O.tag) {
              case 5:
                xt = O.stateNode, Mn = !1;
                break e;
              case 3:
                xt = O.stateNode.containerInfo, Mn = !0;
                break e;
              case 4:
                xt = O.stateNode.containerInfo, Mn = !0;
                break e;
            }
            O = O.return;
          }
          if (xt === null) throw Error(a(160));
          zd(m, T, h), xt = null, Mn = !1;
        } else zd(m, T, h);
        var U = h.alternate;
        U !== null && (U.return = null), h.return = null;
      } catch (K) {
        Ke(h, s, K);
      }
    }
    if (s.subtreeFlags & 12854) for (s = s.child; s !== null; ) Sp(s, i), s = s.sibling;
  }
  function Sp(i, s) {
    var u = i.alternate, d = i.flags;
    switch (i.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (Ln(s, i), qn(i), d & 4) {
          try {
            _o(3, i, i.return), ra(3, i);
          } catch (b) {
            Ke(i, i.return, b);
          }
          try {
            _o(5, i, i.return);
          } catch (b) {
            Ke(i, i.return, b);
          }
        }
        break;
      case 1:
        Ln(s, i), qn(i), d & 512 && u !== null && us(u, u.return);
        break;
      case 5:
        if (Ln(s, i), qn(i), d & 512 && u !== null && us(u, u.return), pe) {
          if (i.flags & 32) {
            var h = i.stateNode;
            try {
              e1(h);
            } catch (b) {
              Ke(i, i.return, b);
            }
          }
          if (d & 4 && (h = i.stateNode, h != null)) {
            var m = i.memoizedProps;
            if (u = u !== null ? u.memoizedProps : m, d = i.type, s = i.updateQueue, i.updateQueue = null, s !== null) try {
              t5(h, s, d, u, m, i);
            } catch (b) {
              Ke(i, i.return, b);
            }
          }
        }
        break;
      case 6:
        if (Ln(s, i), qn(i), d & 4 && pe) {
          if (i.stateNode === null) throw Error(a(162));
          h = i.stateNode, m = i.memoizedProps, u = u !== null ? u.memoizedProps : m;
          try {
            b4(h, u, m);
          } catch (b) {
            Ke(i, i.return, b);
          }
        }
        break;
      case 3:
        if (Ln(s, i), qn(i), d & 4) {
          if (pe && Z && u !== null && u.memoizedState.isDehydrated) try {
            E5(s.containerInfo);
          } catch (b) {
            Ke(i, i.return, b);
          }
          if ($) {
            h = s.containerInfo, m = s.pendingChildren;
            try {
              Vc(h, m);
            } catch (b) {
              Ke(i, i.return, b);
            }
          }
        }
        break;
      case 4:
        if (Ln(
          s,
          i
        ), qn(i), d & 4 && $) {
          m = i.stateNode, h = m.containerInfo, m = m.pendingChildren;
          try {
            Vc(h, m);
          } catch (b) {
            Ke(i, i.return, b);
          }
        }
        break;
      case 13:
        Ln(s, i), qn(i), h = i.child, h.flags & 8192 && (m = h.memoizedState !== null, h.stateNode.isHidden = m, !m || h.alternate !== null && h.alternate.memoizedState !== null || (Wd = yt())), d & 4 && _p(i);
        break;
      case 22:
        var T = u !== null && u.memoizedState !== null;
        if (i.mode & 1 ? (Mt = (u = Mt) || T, Ln(s, i), Mt = u) : Ln(s, i), qn(i), d & 8192) {
          if (u = i.memoizedState !== null, (i.stateNode.isHidden = u) && !T && i.mode & 1) for (te = i, d = i.child; d !== null; ) {
            for (s = te = d; te !== null; ) {
              T = te;
              var O = T.child;
              switch (T.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  _o(4, T, T.return);
                  break;
                case 1:
                  us(T, T.return);
                  var U = T.stateNode;
                  if (typeof U.componentWillUnmount == "function") {
                    var K = T, re = T.return;
                    try {
                      var ge = K;
                      U.props = ge.memoizedProps, U.state = ge.memoizedState, U.componentWillUnmount();
                    } catch (b) {
                      Ke(K, re, b);
                    }
                  }
                  break;
                case 5:
                  us(T, T.return);
                  break;
                case 22:
                  if (T.memoizedState !== null) {
                    xp(s);
                    continue;
                  }
              }
              O !== null ? (O.return = T, te = O) : xp(s);
            }
            d = d.sibling;
          }
          if (pe) {
            e: if (d = null, pe) for (s = i; ; ) {
              if (s.tag === 5) {
                if (d === null) {
                  d = s;
                  try {
                    h = s.stateNode, u ? o5(h) : a5(s.stateNode, s.memoizedProps);
                  } catch (b) {
                    Ke(i, i.return, b);
                  }
                }
              } else if (s.tag === 6) {
                if (d === null) try {
                  m = s.stateNode, u ? l5(m) : u5(m, s.memoizedProps);
                } catch (b) {
                  Ke(i, i.return, b);
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
        Ln(s, i), qn(i), d & 4 && _p(i);
        break;
      case 21:
        break;
      default:
        Ln(s, i), qn(i);
    }
  }
  function qn(i) {
    var s = i.flags;
    if (s & 2) {
      try {
        if (pe) {
          e: {
            for (var u = i.return; u !== null; ) {
              if (yp(u)) {
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
              d.flags & 32 && (e1(h), d.flags &= -33);
              var m = vp(i);
              Id(i, m, h);
              break;
            case 3:
            case 4:
              var T = d.stateNode.containerInfo, O = vp(i);
              Dd(i, O, T);
              break;
            default:
              throw Error(a(161));
          }
        }
      } catch (U) {
        Ke(i, i.return, U);
      }
      i.flags &= -3;
    }
    s & 4096 && (i.flags &= -4097);
  }
  function uy(i, s, u) {
    te = i, wp(i);
  }
  function wp(i, s, u) {
    for (var d = (i.mode & 1) !== 0; te !== null; ) {
      var h = te, m = h.child;
      if (h.tag === 22 && d) {
        var T = h.memoizedState !== null || na;
        if (!T) {
          var O = h.alternate, U = O !== null && O.memoizedState !== null || Mt;
          O = na;
          var K = Mt;
          if (na = T, (Mt = U) && !K) for (te = h; te !== null; ) T = te, U = T.child, T.tag === 22 && T.memoizedState !== null ? kp(h) : U !== null ? (U.return = T, te = U) : kp(h);
          for (; m !== null; ) te = m, wp(m), m = m.sibling;
          te = h, na = O, Mt = K;
        }
        Cp(i);
      } else h.subtreeFlags & 8772 && m !== null ? (m.return = h, te = m) : Cp(i);
    }
  }
  function Cp(i) {
    for (; te !== null; ) {
      var s = te;
      if (s.flags & 8772) {
        var u = s.alternate;
        try {
          if (s.flags & 8772) switch (s.tag) {
            case 0:
            case 11:
            case 15:
              Mt || ra(5, s);
              break;
            case 1:
              var d = s.stateNode;
              if (s.flags & 4 && !Mt) if (u === null) d.componentDidMount();
              else {
                var h = s.elementType === s.type ? u.memoizedProps : Fn(s.type, u.memoizedProps);
                d.componentDidUpdate(h, u.memoizedState, d.__reactInternalSnapshotBeforeUpdate);
              }
              var m = s.updateQueue;
              m !== null && E1(s, m, d);
              break;
            case 3:
              var T = s.updateQueue;
              if (T !== null) {
                if (u = null, s.child !== null) switch (s.child.tag) {
                  case 5:
                    u = fe(s.child.stateNode);
                    break;
                  case 1:
                    u = s.child.stateNode;
                }
                E1(s, T, u);
              }
              break;
            case 5:
              var O = s.stateNode;
              u === null && s.flags & 4 && e5(O, s.type, s.memoizedProps, s);
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (Z && s.memoizedState === null) {
                var U = s.alternate;
                if (U !== null) {
                  var K = U.memoizedState;
                  if (K !== null) {
                    var re = K.dehydrated;
                    re !== null && P5(re);
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
          Mt || s.flags & 512 && Od(s);
        } catch (ge) {
          Ke(s, s.return, ge);
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
  function xp(i) {
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
  function kp(i) {
    for (; te !== null; ) {
      var s = te;
      try {
        switch (s.tag) {
          case 0:
          case 11:
          case 15:
            var u = s.return;
            try {
              ra(4, s);
            } catch (U) {
              Ke(s, u, U);
            }
            break;
          case 1:
            var d = s.stateNode;
            if (typeof d.componentDidMount == "function") {
              var h = s.return;
              try {
                d.componentDidMount();
              } catch (U) {
                Ke(s, h, U);
              }
            }
            var m = s.return;
            try {
              Od(s);
            } catch (U) {
              Ke(s, m, U);
            }
            break;
          case 5:
            var T = s.return;
            try {
              Od(s);
            } catch (U) {
              Ke(s, T, U);
            }
        }
      } catch (U) {
        Ke(s, s.return, U);
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
  var ia = 0, sa = 1, oa = 2, la = 3, aa = 4;
  if (typeof Symbol == "function" && Symbol.for) {
    var So = Symbol.for;
    ia = So("selector.component"), sa = So("selector.has_pseudo_class"), oa = So("selector.role"), la = So("selector.test_id"), aa = So("selector.text");
  }
  function Ud(i) {
    var s = ue(i);
    if (s != null) {
      if (typeof s.memoizedProps["data-testname"] != "string") throw Error(a(364));
      return s;
    }
    if (i = K4(i), i === null) throw Error(a(362));
    return i.stateNode.current;
  }
  function Gd(i, s) {
    switch (s.$$typeof) {
      case ia:
        if (i.type === s.value) return !0;
        break;
      case sa:
        e: {
          s = s.value, i = [i, 0];
          for (var u = 0; u < i.length; ) {
            var d = i[u++], h = i[u++], m = s[h];
            if (d.tag !== 5 || !ro(d)) {
              for (; m != null && Gd(d, m); ) h++, m = s[h];
              if (h === s.length) {
                s = !0;
                break e;
              } else for (d = d.child; d !== null; ) i.push(d, h), d = d.sibling;
            }
          }
          s = !1;
        }
        return s;
      case oa:
        if (i.tag === 5 && Q4(i.stateNode, s.value)) return !0;
        break;
      case aa:
        if ((i.tag === 5 || i.tag === 6) && (i = X4(i), i !== null && 0 <= i.indexOf(s.value))) return !0;
        break;
      case la:
        if (i.tag === 5 && (i = i.memoizedProps["data-testname"], typeof i == "string" && i.toLowerCase() === s.value.toLowerCase())) return !0;
        break;
      default:
        throw Error(a(365));
    }
    return !1;
  }
  function Bd(i) {
    switch (i.$$typeof) {
      case ia:
        return "<" + (L(i.value) || "Unknown") + ">";
      case sa:
        return ":has(" + (Bd(i) || "") + ")";
      case oa:
        return '[role="' + i.value + '"]';
      case aa:
        return '"' + i.value + '"';
      case la:
        return '[data-testname="' + i.value + '"]';
      default:
        throw Error(a(365));
    }
  }
  function Ep(i, s) {
    var u = [];
    i = [i, 0];
    for (var d = 0; d < i.length; ) {
      var h = i[d++], m = i[d++], T = s[m];
      if (h.tag !== 5 || !ro(h)) {
        for (; T != null && Gd(h, T); ) m++, T = s[m];
        if (m === s.length) u.push(h);
        else for (h = h.child; h !== null; ) i.push(h, m), h = h.sibling;
      }
    }
    return u;
  }
  function Vd(i, s) {
    if (!no) throw Error(a(363));
    i = Ud(i), i = Ep(i, s), s = [], i = Array.from(i);
    for (var u = 0; u < i.length; ) {
      var d = i[u++];
      if (d.tag === 5) ro(d) || s.push(d.stateNode);
      else for (d = d.child; d !== null; ) i.push(d), d = d.sibling;
    }
    return s;
  }
  var cy = Math.ceil, ua = c.ReactCurrentDispatcher, Hd = c.ReactCurrentOwner, rt = c.ReactCurrentBatchConfig, _e = 0, _t = null, lt = null, kt = 0, rn = 0, cs = Fr(0), dt = 0, wo = null, wi = 0, ca = 0, jd = 0, Co = null, Qt = null, Wd = 0, Kd = 1 / 0, cr = null;
  function ds() {
    Kd = yt() + 500;
  }
  var da = !1, Yd = null, Or = null, fa = !1, Dr = null, ha = 0, xo = 0, Xd = null, pa = -1, ga = 0;
  function Lt() {
    return _e & 6 ? yt() : pa !== -1 ? pa : pa = yt();
  }
  function Ir(i) {
    return i.mode & 1 ? _e & 2 && kt !== 0 ? kt & -kt : Y5.transition !== null ? (ga === 0 && (ga = u1()), ga) : (i = Te, i !== 0 ? i : dn()) : 1;
  }
  function vn(i, s, u, d) {
    if (50 < xo) throw xo = 0, Xd = null, Error(a(185));
    oo(i, u, d), (!(_e & 2) || i !== _t) && (i === _t && (!(_e & 2) && (ca |= u), dt === 4 && zr(i, kt)), $t(i, d), u === 1 && _e === 0 && !(s.mode & 1) && (ds(), Dl && Wn()));
  }
  function $t(i, s) {
    var u = i.callbackNode;
    z5(i, s);
    var d = Al(i, i === _t ? kt : 0);
    if (d === 0) u !== null && d1(u), i.callbackNode = null, i.callbackPriority = 0;
    else if (s = d & -d, i.callbackPriority !== s) {
      if (u != null && d1(u), s === 1) i.tag === 0 ? K5(Tp.bind(null, i)) : f1(Tp.bind(null, i)), Rr ? W4(function() {
        !(_e & 6) && Wn();
      }) : qc(Jc, Wn), u = null;
      else {
        switch (c1(d)) {
          case 1:
            u = Jc;
            break;
          case 4:
            u = V5;
            break;
          case 16:
            u = Zc;
            break;
          case 536870912:
            u = H5;
            break;
          default:
            u = Zc;
        }
        u = Ip(u, Pp.bind(null, i));
      }
      i.callbackPriority = s, i.callbackNode = u;
    }
  }
  function Pp(i, s) {
    if (pa = -1, ga = 0, _e & 6) throw Error(a(327));
    var u = i.callbackNode;
    if (ki() && i.callbackNode !== u) return null;
    var d = Al(i, i === _t ? kt : 0);
    if (d === 0) return null;
    if (d & 30 || d & i.expiredLanes || s) s = ma(i, d);
    else {
      s = d;
      var h = _e;
      _e |= 2;
      var m = Fp();
      (_t !== i || kt !== s) && (cr = null, ds(), Ci(i, s));
      do
        try {
          hy();
          break;
        } catch (O) {
          Rp(i, O);
        }
      while (!0);
      od(), ua.current = m, _e = h, lt !== null ? s = 0 : (_t = null, kt = 0, s = dt);
    }
    if (s !== 0) {
      if (s === 2 && (h = Xc(i), h !== 0 && (d = h, s = Qd(i, h))), s === 1) throw u = wo, Ci(i, 0), zr(i, d), $t(i, yt()), u;
      if (s === 6) zr(i, d);
      else {
        if (h = i.current.alternate, !(d & 30) && !dy(h) && (s = ma(i, d), s === 2 && (m = Xc(i), m !== 0 && (d = m, s = Qd(i, m))), s === 1)) throw u = wo, Ci(i, 0), zr(i, d), $t(i, yt()), u;
        switch (i.finishedWork = h, i.finishedLanes = d, s) {
          case 0:
          case 1:
            throw Error(a(345));
          case 2:
            xi(i, Qt, cr);
            break;
          case 3:
            if (zr(i, d), (d & 130023424) === d && (s = Wd + 500 - yt(), 10 < s)) {
              if (Al(i, 0) !== 0) break;
              if (h = i.suspendedLanes, (h & d) !== d) {
                Lt(), i.pingedLanes |= i.suspendedLanes & h;
                break;
              }
              i.timeoutHandle = A(xi.bind(null, i, Qt, cr), s);
              break;
            }
            xi(i, Qt, cr);
            break;
          case 4:
            if (zr(i, d), (d & 4194240) === d) break;
            for (s = i.eventTimes, h = -1; 0 < d; ) {
              var T = 31 - Tn(d);
              m = 1 << T, T = s[T], T > h && (h = T), d &= ~m;
            }
            if (d = h, d = yt() - d, d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3e3 > d ? 3e3 : 4320 > d ? 4320 : 1960 * cy(d / 1960)) - d, 10 < d) {
              i.timeoutHandle = A(xi.bind(null, i, Qt, cr), d);
              break;
            }
            xi(i, Qt, cr);
            break;
          case 5:
            xi(i, Qt, cr);
            break;
          default:
            throw Error(a(329));
        }
      }
    }
    return $t(i, yt()), i.callbackNode === u ? Pp.bind(null, i) : null;
  }
  function Qd(i, s) {
    var u = Co;
    return i.current.memoizedState.isDehydrated && (Ci(i, s).flags |= 256), i = ma(i, s), i !== 2 && (s = Qt, Qt = u, s !== null && $d(s)), i;
  }
  function $d(i) {
    Qt === null ? Qt = i : Qt.push.apply(Qt, i);
  }
  function dy(i) {
    for (var s = i; ; ) {
      if (s.flags & 16384) {
        var u = s.updateQueue;
        if (u !== null && (u = u.stores, u !== null)) for (var d = 0; d < u.length; d++) {
          var h = u[d], m = h.getSnapshot;
          h = h.value;
          try {
            if (!Nn(m(), h)) return !1;
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
  function zr(i, s) {
    for (s &= ~jd, s &= ~ca, i.suspendedLanes |= s, i.pingedLanes &= ~s, i = i.expirationTimes; 0 < s; ) {
      var u = 31 - Tn(s), d = 1 << u;
      i[u] = -1, s &= ~d;
    }
  }
  function Tp(i) {
    if (_e & 6) throw Error(a(327));
    ki();
    var s = Al(i, 0);
    if (!(s & 1)) return $t(i, yt()), null;
    var u = ma(i, s);
    if (i.tag !== 0 && u === 2) {
      var d = Xc(i);
      d !== 0 && (s = d, u = Qd(i, d));
    }
    if (u === 1) throw u = wo, Ci(i, 0), zr(i, s), $t(i, yt()), u;
    if (u === 6) throw Error(a(345));
    return i.finishedWork = i.current.alternate, i.finishedLanes = s, xi(i, Qt, cr), $t(i, yt()), null;
  }
  function Np(i) {
    Dr !== null && Dr.tag === 0 && !(_e & 6) && ki();
    var s = _e;
    _e |= 1;
    var u = rt.transition, d = Te;
    try {
      if (rt.transition = null, Te = 1, i) return i();
    } finally {
      Te = d, rt.transition = u, _e = s, !(_e & 6) && Wn();
    }
  }
  function qd() {
    rn = cs.current, Ge(cs);
  }
  function Ci(i, s) {
    i.finishedWork = null, i.finishedLanes = 0;
    var u = i.timeoutHandle;
    if (u !== oe && (i.timeoutHandle = oe, j(u)), lt !== null) for (u = lt.return; u !== null; ) {
      var d = u;
      switch (td(d), d.tag) {
        case 1:
          d = d.type.childContextTypes, d != null && Rl();
          break;
        case 3:
          ls(), Ge(Kt), Ge(Nt), pd();
          break;
        case 5:
          fd(d);
          break;
        case 4:
          ls();
          break;
        case 13:
          Ge(Qe);
          break;
        case 19:
          Ge(Qe);
          break;
        case 10:
          ld(d.type._context);
          break;
        case 22:
        case 23:
          qd();
      }
      u = u.return;
    }
    if (_t = i, lt = i = Ur(i.current, null), kt = rn = s, dt = 0, wo = null, jd = ca = wi = 0, Qt = Co = null, _i !== null) {
      for (s = 0; s < _i.length; s++) if (u = _i[s], d = u.interleaved, d !== null) {
        u.interleaved = null;
        var h = d.next, m = u.pending;
        if (m !== null) {
          var T = m.next;
          m.next = h, d.next = T;
        }
        u.pending = d;
      }
      _i = null;
    }
    return i;
  }
  function Rp(i, s) {
    do {
      var u = lt;
      try {
        if (od(), Yl.current = ql, Xl) {
          for (var d = $e.memoizedState; d !== null; ) {
            var h = d.queue;
            h !== null && (h.pending = null), d = d.next;
          }
          Xl = !1;
        }
        if (Si = 0, vt = ct = $e = null, fo = !1, ho = 0, Hd.current = null, u === null || u.return === null) {
          dt = 1, wo = s, lt = null;
          break;
        }
        e: {
          var m = i, T = u.return, O = u, U = s;
          if (s = kt, O.flags |= 32768, U !== null && typeof U == "object" && typeof U.then == "function") {
            var K = U, re = O, ge = re.tag;
            if (!(re.mode & 1) && (ge === 0 || ge === 11 || ge === 15)) {
              var b = re.alternate;
              b ? (re.updateQueue = b.updateQueue, re.memoizedState = b.memoizedState, re.lanes = b.lanes) : (re.updateQueue = null, re.memoizedState = null);
            }
            var Be = ep(T);
            if (Be !== null) {
              Be.flags &= -257, tp(Be, T, O, m, s), Be.mode & 1 && b1(m, K, s), s = Be, U = K;
              var De = s.updateQueue;
              if (De === null) {
                var qt = /* @__PURE__ */ new Set();
                qt.add(U), s.updateQueue = qt;
              } else De.add(U);
              break e;
            } else {
              if (!(s & 1)) {
                b1(m, K, s), Jd();
                break e;
              }
              U = Error(a(426));
            }
          } else if (We && O.mode & 1) {
            var dr = ep(T);
            if (dr !== null) {
              !(dr.flags & 65536) && (dr.flags |= 256), tp(dr, T, O, m, s), id(as(U, O));
              break e;
            }
          }
          m = U = as(U, O), dt !== 4 && (dt = 2), Co === null ? Co = [m] : Co.push(m), m = T;
          do {
            switch (m.tag) {
              case 3:
                m.flags |= 65536, s &= -s, m.lanes |= s;
                var z = J1(m, U, s);
                k1(m, z);
                break e;
              case 1:
                O = U;
                var D = m.type, G = m.stateNode;
                if (!(m.flags & 128) && (typeof D.getDerivedStateFromError == "function" || G !== null && typeof G.componentDidCatch == "function" && (Or === null || !Or.has(G)))) {
                  m.flags |= 65536, s &= -s, m.lanes |= s;
                  var ee = Z1(m, O, s);
                  k1(m, ee);
                  break e;
                }
            }
            m = m.return;
          } while (m !== null);
        }
        Lp(u);
      } catch (ae) {
        s = ae, lt === u && u !== null && (lt = u = u.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Fp() {
    var i = ua.current;
    return ua.current = ql, i === null ? ql : i;
  }
  function Jd() {
    (dt === 0 || dt === 3 || dt === 2) && (dt = 4), _t === null || !(wi & 268435455) && !(ca & 268435455) || zr(_t, kt);
  }
  function ma(i, s) {
    var u = _e;
    _e |= 2;
    var d = Fp();
    (_t !== i || kt !== s) && (cr = null, Ci(i, s));
    do
      try {
        fy();
        break;
      } catch (h) {
        Rp(i, h);
      }
    while (!0);
    if (od(), _e = u, ua.current = d, lt !== null) throw Error(a(261));
    return _t = null, kt = 0, dt;
  }
  function fy() {
    for (; lt !== null; ) Mp(lt);
  }
  function hy() {
    for (; lt !== null && !G5(); ) Mp(lt);
  }
  function Mp(i) {
    var s = Dp(i.alternate, i, rn);
    i.memoizedProps = i.pendingProps, s === null ? Lp(i) : lt = s, Hd.current = null;
  }
  function Lp(i) {
    var s = i;
    do {
      var u = s.alternate;
      if (i = s.return, s.flags & 32768) {
        if (u = oy(u, s), u !== null) {
          u.flags &= 32767, lt = u;
          return;
        }
        if (i !== null) i.flags |= 32768, i.subtreeFlags = 0, i.deletions = null;
        else {
          dt = 6, lt = null;
          return;
        }
      } else if (u = sy(u, s, rn), u !== null) {
        lt = u;
        return;
      }
      if (s = s.sibling, s !== null) {
        lt = s;
        return;
      }
      lt = s = i;
    } while (s !== null);
    dt === 0 && (dt = 5);
  }
  function xi(i, s, u) {
    var d = Te, h = rt.transition;
    try {
      rt.transition = null, Te = 1, py(i, s, u, d);
    } finally {
      rt.transition = h, Te = d;
    }
    return null;
  }
  function py(i, s, u, d) {
    do
      ki();
    while (Dr !== null);
    if (_e & 6) throw Error(a(327));
    u = i.finishedWork;
    var h = i.finishedLanes;
    if (u === null) return null;
    if (i.finishedWork = null, i.finishedLanes = 0, u === i.current) throw Error(a(177));
    i.callbackNode = null, i.callbackPriority = 0;
    var m = u.lanes | u.childLanes;
    if (U5(i, m), i === _t && (lt = _t = null, kt = 0), !(u.subtreeFlags & 2064) && !(u.flags & 2064) || fa || (fa = !0, Ip(Zc, function() {
      return ki(), null;
    })), m = (u.flags & 15990) !== 0, u.subtreeFlags & 15990 || m) {
      m = rt.transition, rt.transition = null;
      var T = Te;
      Te = 1;
      var O = _e;
      _e |= 4, Hd.current = null, ay(i, u), Sp(u, i), X(i.containerInfo), i.current = u, uy(u), B5(), _e = O, Te = T, rt.transition = m;
    } else i.current = u;
    if (fa && (fa = !1, Dr = i, ha = h), m = i.pendingLanes, m === 0 && (Or = null), j5(u.stateNode), $t(i, yt()), s !== null) for (d = i.onRecoverableError, u = 0; u < s.length; u++) h = s[u], d(h.value, { componentStack: h.stack, digest: h.digest });
    if (da) throw da = !1, i = Yd, Yd = null, i;
    return ha & 1 && i.tag !== 0 && ki(), m = i.pendingLanes, m & 1 ? i === Xd ? xo++ : (xo = 0, Xd = i) : xo = 0, Wn(), null;
  }
  function ki() {
    if (Dr !== null) {
      var i = c1(ha), s = rt.transition, u = Te;
      try {
        if (rt.transition = null, Te = 16 > i ? 16 : i, Dr === null) var d = !1;
        else {
          if (i = Dr, Dr = null, ha = 0, _e & 6) throw Error(a(331));
          var h = _e;
          for (_e |= 4, te = i.current; te !== null; ) {
            var m = te, T = m.child;
            if (te.flags & 16) {
              var O = m.deletions;
              if (O !== null) {
                for (var U = 0; U < O.length; U++) {
                  var K = O[U];
                  for (te = K; te !== null; ) {
                    var re = te;
                    switch (re.tag) {
                      case 0:
                      case 11:
                      case 15:
                        _o(8, re, m);
                    }
                    var ge = re.child;
                    if (ge !== null) ge.return = re, te = ge;
                    else for (; te !== null; ) {
                      re = te;
                      var b = re.sibling, Be = re.return;
                      if (mp(re), re === K) {
                        te = null;
                        break;
                      }
                      if (b !== null) {
                        b.return = Be, te = b;
                        break;
                      }
                      te = Be;
                    }
                  }
                }
                var De = m.alternate;
                if (De !== null) {
                  var qt = De.child;
                  if (qt !== null) {
                    De.child = null;
                    do {
                      var dr = qt.sibling;
                      qt.sibling = null, qt = dr;
                    } while (qt !== null);
                  }
                }
                te = m;
              }
            }
            if (m.subtreeFlags & 2064 && T !== null) T.return = m, te = T;
            else e: for (; te !== null; ) {
              if (m = te, m.flags & 2048) switch (m.tag) {
                case 0:
                case 11:
                case 15:
                  _o(9, m, m.return);
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
            T = te;
            var G = T.child;
            if (T.subtreeFlags & 2064 && G !== null) G.return = T, te = G;
            else e: for (T = D; te !== null; ) {
              if (O = te, O.flags & 2048) try {
                switch (O.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ra(9, O);
                }
              } catch (ae) {
                Ke(O, O.return, ae);
              }
              if (O === T) {
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
          if (_e = h, Wn(), jn && typeof jn.onPostCommitFiberRoot == "function") try {
            jn.onPostCommitFiberRoot(Ol, i);
          } catch {
          }
          d = !0;
        }
        return d;
      } finally {
        Te = u, rt.transition = s;
      }
    }
    return !1;
  }
  function Ap(i, s, u) {
    s = as(u, s), s = J1(i, s, 1), i = Ar(i, s, 1), s = Lt(), i !== null && (oo(i, 1, s), $t(i, s));
  }
  function Ke(i, s, u) {
    if (i.tag === 3) Ap(i, i, u);
    else for (; s !== null; ) {
      if (s.tag === 3) {
        Ap(s, i, u);
        break;
      } else if (s.tag === 1) {
        var d = s.stateNode;
        if (typeof s.type.getDerivedStateFromError == "function" || typeof d.componentDidCatch == "function" && (Or === null || !Or.has(d))) {
          i = as(u, i), i = Z1(s, i, 1), s = Ar(s, i, 1), i = Lt(), s !== null && (oo(s, 1, i), $t(s, i));
          break;
        }
      }
      s = s.return;
    }
  }
  function gy(i, s, u) {
    var d = i.pingCache;
    d !== null && d.delete(s), s = Lt(), i.pingedLanes |= i.suspendedLanes & u, _t === i && (kt & u) === u && (dt === 4 || dt === 3 && (kt & 130023424) === kt && 500 > yt() - Wd ? Ci(i, 0) : jd |= u), $t(i, s);
  }
  function Op(i, s) {
    s === 0 && (i.mode & 1 ? (s = Ll, Ll <<= 1, !(Ll & 130023424) && (Ll = 4194304)) : s = 1);
    var u = Lt();
    i = Kn(i, s), i !== null && (oo(i, s, u), $t(i, u));
  }
  function my(i) {
    var s = i.memoizedState, u = 0;
    s !== null && (u = s.retryLane), Op(i, u);
  }
  function yy(i, s) {
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
    d !== null && d.delete(s), Op(i, u);
  }
  var Dp;
  Dp = function(i, s, u) {
    if (i !== null) if (i.memoizedProps !== s.pendingProps || Kt.current) Xt = !0;
    else {
      if (!(i.lanes & u) && !(s.flags & 128)) return Xt = !1, iy(i, s, u);
      Xt = !!(i.flags & 131072);
    }
    else Xt = !1, We && s.flags & 1048576 && h1(s, zl, s.index);
    switch (s.lanes = 0, s.tag) {
      case 2:
        var d = s.type;
        bl(i, s), i = s.pendingProps;
        var h = bi(s, Nt.current);
        ss(s, u), h = yd(null, s, d, i, h, u);
        var m = vd();
        return s.flags |= 1, typeof h == "object" && h !== null && typeof h.render == "function" && h.$$typeof === void 0 ? (s.tag = 1, s.memoizedState = null, s.updateQueue = null, Yt(d) ? (m = !0, Fl(s)) : m = !1, s.memoizedState = h.state !== null && h.state !== void 0 ? h.state : null, cd(s), h.updater = Jl, s.stateNode = h, h._reactInternals = s, kd(s, d, i, u), s = Nd(null, s, d, !0, m, u)) : (s.tag = 0, We && m && ed(s), Ut(null, s, h, u), s = s.child), s;
      case 16:
        d = s.elementType;
        e: {
          switch (bl(i, s), i = s.pendingProps, h = d._init, d = h(d._payload), s.type = d, h = s.tag = _y(d), i = Fn(d, i), h) {
            case 0:
              s = Td(null, s, d, i, u);
              break e;
            case 1:
              s = lp(null, s, d, i, u);
              break e;
            case 11:
              s = np(null, s, d, i, u);
              break e;
            case 14:
              s = rp(null, s, d, Fn(d.type, i), u);
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
        return d = s.type, h = s.pendingProps, h = s.elementType === d ? h : Fn(d, h), Td(i, s, d, h, u);
      case 1:
        return d = s.type, h = s.pendingProps, h = s.elementType === d ? h : Fn(d, h), lp(i, s, d, h, u);
      case 3:
        e: {
          if (ap(s), i === null) throw Error(a(387));
          d = s.pendingProps, m = s.memoizedState, h = m.element, x1(i, s), Wl(s, d, null, u);
          var T = s.memoizedState;
          if (d = T.element, Z && m.isDehydrated) if (m = { element: d, isDehydrated: !1, cache: T.cache, pendingSuspenseBoundaries: T.pendingSuspenseBoundaries, transitions: T.transitions }, s.updateQueue.baseState = m, s.memoizedState = m, s.flags & 256) {
            h = as(Error(a(423)), s), s = up(i, s, d, u, h);
            break e;
          } else if (d !== h) {
            h = as(Error(a(424)), s), s = up(i, s, d, u, h);
            break e;
          } else for (Z && (pn = _5(s.stateNode.containerInfo), nn = s, We = !0, Rn = null, lo = !1), u = S1(s, null, d, u), s.child = u; u; ) u.flags = u.flags & -3 | 4096, u = u.sibling;
          else {
            if (ns(), d === h) {
              s = ur(i, s, u);
              break e;
            }
            Ut(i, s, d, u);
          }
          s = s.child;
        }
        return s;
      case 5:
        return P1(s), i === null && rd(s), d = s.type, h = s.pendingProps, m = i !== null ? i.memoizedProps : null, T = h.children, ut(d, h) ? T = null : m !== null && ut(d, m) && (s.flags |= 32), op(i, s), Ut(i, s, T, u), s.child;
      case 6:
        return i === null && rd(s), null;
      case 13:
        return cp(i, s, u);
      case 4:
        return dd(s, s.stateNode.containerInfo), d = s.pendingProps, i === null ? s.child = rs(s, null, d, u) : Ut(i, s, d, u), s.child;
      case 11:
        return d = s.type, h = s.pendingProps, h = s.elementType === d ? h : Fn(d, h), np(i, s, d, h, u);
      case 7:
        return Ut(i, s, s.pendingProps, u), s.child;
      case 8:
        return Ut(i, s, s.pendingProps.children, u), s.child;
      case 12:
        return Ut(i, s, s.pendingProps.children, u), s.child;
      case 10:
        e: {
          if (d = s.type._context, h = s.pendingProps, m = s.memoizedProps, T = h.value, w1(s, d, T), m !== null) if (Nn(m.value, T)) {
            if (m.children === h.children && !Kt.current) {
              s = ur(i, s, u);
              break e;
            }
          } else for (m = s.child, m !== null && (m.return = s); m !== null; ) {
            var O = m.dependencies;
            if (O !== null) {
              T = m.child;
              for (var U = O.firstContext; U !== null; ) {
                if (U.context === d) {
                  if (m.tag === 1) {
                    U = ar(-1, u & -u), U.tag = 2;
                    var K = m.updateQueue;
                    if (K !== null) {
                      K = K.shared;
                      var re = K.pending;
                      re === null ? U.next = U : (U.next = re.next, re.next = U), K.pending = U;
                    }
                  }
                  m.lanes |= u, U = m.alternate, U !== null && (U.lanes |= u), ad(m.return, u, s), O.lanes |= u;
                  break;
                }
                U = U.next;
              }
            } else if (m.tag === 10) T = m.type === s.type ? null : m.child;
            else if (m.tag === 18) {
              if (T = m.return, T === null) throw Error(a(341));
              T.lanes |= u, O = T.alternate, O !== null && (O.lanes |= u), ad(T, u, s), T = m.sibling;
            } else T = m.child;
            if (T !== null) T.return = m;
            else for (T = m; T !== null; ) {
              if (T === s) {
                T = null;
                break;
              }
              if (m = T.sibling, m !== null) {
                m.return = T.return, T = m;
                break;
              }
              T = T.return;
            }
            m = T;
          }
          Ut(i, s, h.children, u), s = s.child;
        }
        return s;
      case 9:
        return h = s.type, d = s.pendingProps.children, ss(s, u), h = gn(h), d = d(h), s.flags |= 1, Ut(i, s, d, u), s.child;
      case 14:
        return d = s.type, h = Fn(d, s.pendingProps), h = Fn(d.type, h), rp(i, s, d, h, u);
      case 15:
        return ip(i, s, s.type, s.pendingProps, u);
      case 17:
        return d = s.type, h = s.pendingProps, h = s.elementType === d ? h : Fn(d, h), bl(i, s), s.tag = 1, Yt(d) ? (i = !0, Fl(s)) : i = !1, ss(s, u), $1(s, d, h), kd(s, d, h, u), Nd(null, s, d, !0, i, u);
      case 19:
        return fp(i, s, u);
      case 22:
        return sp(i, s, u);
    }
    throw Error(a(156, s.tag));
  };
  function Ip(i, s) {
    return qc(i, s);
  }
  function vy(i, s, u, d) {
    this.tag = i, this.key = u, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = s, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = d, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function _n(i, s, u, d) {
    return new vy(i, s, u, d);
  }
  function Zd(i) {
    return i = i.prototype, !(!i || !i.isReactComponent);
  }
  function _y(i) {
    if (typeof i == "function") return Zd(i) ? 1 : 0;
    if (i != null) {
      if (i = i.$$typeof, i === P) return 11;
      if (i === w) return 14;
    }
    return 2;
  }
  function Ur(i, s) {
    var u = i.alternate;
    return u === null ? (u = _n(i.tag, s, i.key, i.mode), u.elementType = i.elementType, u.type = i.type, u.stateNode = i.stateNode, u.alternate = i, i.alternate = u) : (u.pendingProps = s, u.type = i.type, u.flags = 0, u.subtreeFlags = 0, u.deletions = null), u.flags = i.flags & 14680064, u.childLanes = i.childLanes, u.lanes = i.lanes, u.child = i.child, u.memoizedProps = i.memoizedProps, u.memoizedState = i.memoizedState, u.updateQueue = i.updateQueue, s = i.dependencies, u.dependencies = s === null ? null : { lanes: s.lanes, firstContext: s.firstContext }, u.sibling = i.sibling, u.index = i.index, u.ref = i.ref, u;
  }
  function ya(i, s, u, d, h, m) {
    var T = 2;
    if (d = i, typeof i == "function") Zd(i) && (T = 1);
    else if (typeof i == "string") T = 5;
    else e: switch (i) {
      case y:
        return Ei(u.children, h, m, s);
      case x:
        T = 8, h |= 8;
        break;
      case S:
        return i = _n(12, u, s, h | 2), i.elementType = S, i.lanes = m, i;
      case R:
        return i = _n(13, u, s, h), i.elementType = R, i.lanes = m, i;
      case k:
        return i = _n(19, u, s, h), i.elementType = k, i.lanes = m, i;
      case _:
        return va(u, h, m, s);
      default:
        if (typeof i == "object" && i !== null) switch (i.$$typeof) {
          case C:
            T = 10;
            break e;
          case v:
            T = 9;
            break e;
          case P:
            T = 11;
            break e;
          case w:
            T = 14;
            break e;
          case p:
            T = 16, d = null;
            break e;
        }
        throw Error(a(130, i == null ? i : typeof i, ""));
    }
    return s = _n(T, u, s, h), s.elementType = i, s.type = d, s.lanes = m, s;
  }
  function Ei(i, s, u, d) {
    return i = _n(7, i, d, s), i.lanes = u, i;
  }
  function va(i, s, u, d) {
    return i = _n(22, i, d, s), i.elementType = _, i.lanes = u, i.stateNode = { isHidden: !1 }, i;
  }
  function bd(i, s, u) {
    return i = _n(6, i, null, s), i.lanes = u, i;
  }
  function ef(i, s, u) {
    return s = _n(4, i.children !== null ? i.children : [], i.key, s), s.lanes = u, s.stateNode = { containerInfo: i.containerInfo, pendingChildren: null, implementation: i.implementation }, s;
  }
  function Sy(i, s, u, d, h) {
    this.tag = s, this.containerInfo = i, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = oe, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Qc(0), this.expirationTimes = Qc(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Qc(0), this.identifierPrefix = d, this.onRecoverableError = h, Z && (this.mutableSourceEagerHydrationData = null);
  }
  function zp(i, s, u, d, h, m, T, O, U) {
    return i = new Sy(i, s, u, O, U), s === 1 ? (s = 1, m === !0 && (s |= 8)) : s = 0, m = _n(3, null, null, s), i.current = m, m.stateNode = i, m.memoizedState = { element: d, isDehydrated: u, cache: null, transitions: null, pendingSuspenseBoundaries: null }, cd(m), i;
  }
  function Up(i) {
    if (!i) return Mr;
    i = i._reactInternals;
    e: {
      if (I(i) !== i || i.tag !== 1) throw Error(a(170));
      var s = i;
      do {
        switch (s.tag) {
          case 3:
            s = s.stateNode.context;
            break e;
          case 1:
            if (Yt(s.type)) {
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
      if (Yt(u)) return l1(i, u, s);
    }
    return s;
  }
  function Gp(i) {
    var s = i._reactInternals;
    if (s === void 0)
      throw typeof i.render == "function" ? Error(a(188)) : (i = Object.keys(i).join(","), Error(a(268, i)));
    return i = H(s), i === null ? null : i.stateNode;
  }
  function Bp(i, s) {
    if (i = i.memoizedState, i !== null && i.dehydrated !== null) {
      var u = i.retryLane;
      i.retryLane = u !== 0 && u < s ? u : s;
    }
  }
  function _a(i, s) {
    Bp(i, s), (i = i.alternate) && Bp(i, s);
  }
  function wy(i) {
    return i = H(i), i === null ? null : i.stateNode;
  }
  function Cy() {
    return null;
  }
  return n.attemptContinuousHydration = function(i) {
    if (i.tag === 13) {
      var s = Kn(i, 134217728);
      if (s !== null) {
        var u = Lt();
        vn(s, i, 134217728, u);
      }
      _a(i, 134217728);
    }
  }, n.attemptDiscreteHydration = function(i) {
    if (i.tag === 13) {
      var s = Kn(i, 1);
      if (s !== null) {
        var u = Lt();
        vn(s, i, 1, u);
      }
      _a(i, 1);
    }
  }, n.attemptHydrationAtCurrentPriority = function(i) {
    if (i.tag === 13) {
      var s = Ir(i), u = Kn(i, s);
      if (u !== null) {
        var d = Lt();
        vn(u, i, s, d);
      }
      _a(i, s);
    }
  }, n.attemptSynchronousHydration = function(i) {
    switch (i.tag) {
      case 3:
        var s = i.stateNode;
        if (s.current.memoizedState.isDehydrated) {
          var u = so(s.pendingLanes);
          u !== 0 && ($c(s, u | 1), $t(s, yt()), !(_e & 6) && (ds(), Wn()));
        }
        break;
      case 13:
        Np(function() {
          var d = Kn(i, 1);
          if (d !== null) {
            var h = Lt();
            vn(d, i, 1, h);
          }
        }), _a(i, 1);
    }
  }, n.batchedUpdates = function(i, s) {
    var u = _e;
    _e |= 1;
    try {
      return i(s);
    } finally {
      _e = u, _e === 0 && (ds(), Dl && Wn());
    }
  }, n.createComponentSelector = function(i) {
    return { $$typeof: ia, value: i };
  }, n.createContainer = function(i, s, u, d, h, m, T) {
    return zp(i, s, !1, null, u, d, h, m, T);
  }, n.createHasPseudoClassSelector = function(i) {
    return { $$typeof: sa, value: i };
  }, n.createHydrationContainer = function(i, s, u, d, h, m, T, O, U) {
    return i = zp(u, d, !0, i, h, m, T, O, U), i.context = Up(null), u = i.current, d = Lt(), h = Ir(u), m = ar(d, h), m.callback = s ?? null, Ar(u, m, h), i.current.lanes = h, oo(i, h, d), $t(i, d), i;
  }, n.createPortal = function(i, s, u) {
    var d = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: g, key: d == null ? null : "" + d, children: i, containerInfo: s, implementation: u };
  }, n.createRoleSelector = function(i) {
    return { $$typeof: oa, value: i };
  }, n.createTestNameSelector = function(i) {
    return { $$typeof: la, value: i };
  }, n.createTextSelector = function(i) {
    return { $$typeof: aa, value: i };
  }, n.deferredUpdates = function(i) {
    var s = Te, u = rt.transition;
    try {
      return rt.transition = null, Te = 16, i();
    } finally {
      Te = s, rt.transition = u;
    }
  }, n.discreteUpdates = function(i, s, u, d, h) {
    var m = Te, T = rt.transition;
    try {
      return rt.transition = null, Te = 1, i(s, u, d, h);
    } finally {
      Te = m, rt.transition = T, _e === 0 && ds();
    }
  }, n.findAllNodes = Vd, n.findBoundingRects = function(i, s) {
    if (!no) throw Error(a(363));
    s = Vd(i, s), i = [];
    for (var u = 0; u < s.length; u++) i.push(Y4(s[u]));
    for (s = i.length - 1; 0 < s; s--) {
      u = i[s];
      for (var d = u.x, h = d + u.width, m = u.y, T = m + u.height, O = s - 1; 0 <= O; O--) if (s !== O) {
        var U = i[O], K = U.x, re = K + U.width, ge = U.y, b = ge + U.height;
        if (d >= K && m >= ge && h <= re && T <= b) {
          i.splice(s, 1);
          break;
        } else if (d !== K || u.width !== U.width || b < m || ge > T) {
          if (!(m !== ge || u.height !== U.height || re < d || K > h)) {
            K > d && (U.width += K - d, U.x = d), re < h && (U.width = h - K), i.splice(s, 1);
            break;
          }
        } else {
          ge > m && (U.height += ge - m, U.y = m), b < T && (U.height = T - ge), i.splice(s, 1);
          break;
        }
      }
    }
    return i;
  }, n.findHostInstance = Gp, n.findHostInstanceWithNoPortals = function(i) {
    return i = B(i), i = i !== null ? ie(i) : null, i === null ? null : i.stateNode;
  }, n.findHostInstanceWithWarning = function(i) {
    return Gp(i);
  }, n.flushControlled = function(i) {
    var s = _e;
    _e |= 1;
    var u = rt.transition, d = Te;
    try {
      rt.transition = null, Te = 1, i();
    } finally {
      Te = d, rt.transition = u, _e = s, _e === 0 && (ds(), Wn());
    }
  }, n.flushPassiveEffects = ki, n.flushSync = Np, n.focusWithin = function(i, s) {
    if (!no) throw Error(a(363));
    for (i = Ud(i), s = Ep(i, s), s = Array.from(s), i = 0; i < s.length; ) {
      var u = s[i++];
      if (!ro(u)) {
        if (u.tag === 5 && $4(u.stateNode)) return !0;
        for (u = u.child; u !== null; ) s.push(u), u = u.sibling;
      }
    }
    return !1;
  }, n.getCurrentUpdatePriority = function() {
    return Te;
  }, n.getFindAllNodesFailureDescription = function(i, s) {
    if (!no) throw Error(a(363));
    var u = 0, d = [];
    i = [Ud(i), 0];
    for (var h = 0; h < i.length; ) {
      var m = i[h++], T = i[h++], O = s[T];
      if ((m.tag !== 5 || !ro(m)) && (Gd(m, O) && (d.push(Bd(O)), T++, T > u && (u = T)), T < s.length)) for (m = m.child; m !== null; ) i.push(m, T), m = m.sibling;
    }
    if (u < s.length) {
      for (i = []; u < s.length; u++) i.push(Bd(s[u]));
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
        return fe(i.child.stateNode);
      default:
        return i.child.stateNode;
    }
  }, n.injectIntoDevTools = function(i) {
    if (i = { bundleType: i.bundleType, version: i.version, rendererPackageName: i.rendererPackageName, rendererConfig: i.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: c.ReactCurrentDispatcher, findHostInstanceByFiber: wy, findFiberByHostInstance: i.findFiberByHostInstance || Cy, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1" }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u") i = !1;
    else {
      var s = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (s.isDisabled || !s.supportsFiber) i = !0;
      else {
        try {
          Ol = s.inject(i), jn = s;
        } catch {
        }
        i = !!s.checkDCE;
      }
    }
    return i;
  }, n.isAlreadyRendering = function() {
    return !1;
  }, n.observeVisibleRects = function(i, s, u, d) {
    if (!no) throw Error(a(363));
    i = Vd(i, s);
    var h = q4(i, u, d).disconnect;
    return { disconnect: function() {
      h();
    } };
  }, n.registerMutableSourceForHydration = function(i, s) {
    var u = s._getVersion;
    u = u(s._source), i.mutableSourceEagerHydrationData == null ? i.mutableSourceEagerHydrationData = [s, u] : i.mutableSourceEagerHydrationData.push(s, u);
  }, n.runWithPriority = function(i, s) {
    var u = Te;
    try {
      return Te = i, s();
    } finally {
      Te = u;
    }
  }, n.shouldError = function() {
    return null;
  }, n.shouldSuspend = function() {
    return !1;
  }, n.updateContainer = function(i, s, u, d) {
    var h = s.current, m = Lt(), T = Ir(h);
    return u = Up(u), s.context === null ? s.context = u : s.pendingContext = u, s = ar(m, T), s.payload = { element: i }, d = d === void 0 ? null : d, d !== null && (s.callback = d), i = Ar(h, s, T), i !== null && (vn(i, h, T, m), jl(i, h, T)), T;
  }, n;
};
O4.exports = J_;
var Z_ = O4.exports;
const b_ = /* @__PURE__ */ Lu(Z_);
var D4 = { exports: {} }, Ji = {};
/**
 * @license React
 * react-reconciler-constants.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Ji.ConcurrentRoot = 1;
Ji.ContinuousEventPriority = 4;
Ji.DefaultEventPriority = 16;
Ji.DiscreteEventPriority = 1;
Ji.IdleEventPriority = 536870912;
Ji.LegacyRoot = 0;
D4.exports = Ji;
var I4 = D4.exports;
const R2 = {
  children: !0,
  ref: !0,
  key: !0,
  style: !0,
  forwardedRef: !0,
  unstable_applyCache: !0,
  unstable_applyDrawHitFromCache: !0
};
let F2 = !1, M2 = !1;
const Z0 = ".react-konva-event", eS = `ReactKonva: You have a Konva node with draggable = true and position defined but no onDragMove or onDragEnd events are handled.
Position of a node will be changed during drag&drop, so you should update state of the react app as well.
Consider to add onDragMove or onDragEnd events.
For more info see: https://github.com/konvajs/react-konva/issues/256
`, tS = `ReactKonva: You are using "zIndex" attribute for a Konva node.
react-konva may get confused with ordering. Just define correct order of elements in your render function of a component.
For more info see: https://github.com/konvajs/react-konva/issues/194
`, nS = {};
function Bc(t, e, n = nS) {
  if (!F2 && "zIndex" in e && (console.warn(tS), F2 = !0), !M2 && e.draggable) {
    var r = e.x !== void 0 || e.y !== void 0, o = e.onDragEnd || e.onDragMove;
    r && !o && (console.warn(eS), M2 = !0);
  }
  for (var l in n)
    if (!R2[l]) {
      var a = l.slice(0, 2) === "on", c = n[l] !== e[l];
      if (a && c) {
        var f = l.substr(2).toLowerCase();
        f.substr(0, 7) === "content" && (f = "content" + f.substr(7, 1).toUpperCase() + f.substr(8)), t.off(f, n[l]);
      }
      var g = !e.hasOwnProperty(l);
      g && t.setAttr(l, void 0);
    }
  var y = e._useStrictMode, x = {}, S = !1;
  const C = {};
  for (var l in e)
    if (!R2[l]) {
      var a = l.slice(0, 2) === "on", v = n[l] !== e[l];
      if (a && v) {
        var f = l.substr(2).toLowerCase();
        f.substr(0, 7) === "content" && (f = "content" + f.substr(7, 1).toUpperCase() + f.substr(8)), e[l] && (C[f] = e[l]);
      }
      !a && (e[l] !== n[l] || y && e[l] !== t.getAttr(l)) && (S = !0, x[l] = e[l]);
    }
  S && (t.setAttrs(x), gi(t));
  for (var f in C)
    t.on(f + Z0, C[f]);
}
function gi(t) {
  if (!ve.Konva.autoDrawEnabled) {
    var e = t.getLayer() || t.getStage();
    e && e.batchDraw();
  }
}
const z4 = {}, rS = {};
yl.Node.prototype._applyProps = Bc;
function iS(t, e) {
  if (typeof e == "string") {
    console.error(`Do not use plain text as child of Konva.Node. You are using text: ${e}`);
    return;
  }
  t.add(e), gi(t);
}
function sS(t, e, n) {
  let r = yl[t];
  r || (console.error(`Konva has no node with the type ${t}. Group will be used instead. If you use minimal version of react-konva, just import required nodes into Konva: "import "konva/lib/shapes/${t}"  If you want to render DOM elements as part of canvas tree take a look into this demo: https://konvajs.github.io/docs/react/DOM_Portal.html`), r = yl.Group);
  const o = {}, l = {};
  for (var a in e) {
    var c = a.slice(0, 2) === "on";
    c ? l[a] = e[a] : o[a] = e[a];
  }
  const f = new r(o);
  return Bc(f, l), f;
}
function oS(t, e, n) {
  console.error(`Text components are not supported for now in ReactKonva. Your text is: "${t}"`);
}
function lS(t, e, n) {
  return !1;
}
function aS(t) {
  return t;
}
function uS() {
  return null;
}
function cS() {
  return null;
}
function dS(t, e, n, r) {
  return rS;
}
function fS() {
}
function hS(t) {
}
function pS(t, e) {
  return !1;
}
function gS() {
  return z4;
}
function mS() {
  return z4;
}
const yS = setTimeout, vS = clearTimeout, _S = -1;
function SS(t, e) {
  return !1;
}
const wS = !1, CS = !0, xS = !0;
function kS(t, e) {
  e.parent === t ? e.moveToTop() : t.add(e), gi(t);
}
function ES(t, e) {
  e.parent === t ? e.moveToTop() : t.add(e), gi(t);
}
function U4(t, e, n) {
  e._remove(), t.add(e), e.setZIndex(n.getZIndex()), gi(t);
}
function PS(t, e, n) {
  U4(t, e, n);
}
function TS(t, e) {
  e.destroy(), e.off(Z0), gi(t);
}
function NS(t, e) {
  e.destroy(), e.off(Z0), gi(t);
}
function RS(t, e, n) {
  console.error(`Text components are not yet supported in ReactKonva. You text is: "${n}"`);
}
function FS(t, e, n) {
}
function MS(t, e, n, r, o) {
  Bc(t, o, r);
}
function LS(t) {
  t.hide(), gi(t);
}
function AS(t) {
}
function OS(t, e) {
  (e.visible == null || e.visible) && t.show();
}
function DS(t, e) {
}
function IS(t) {
}
function zS() {
}
const US = () => I4.DefaultEventPriority, GS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  appendChild: kS,
  appendChildToContainer: ES,
  appendInitialChild: iS,
  cancelTimeout: vS,
  clearContainer: IS,
  commitMount: FS,
  commitTextUpdate: RS,
  commitUpdate: MS,
  createInstance: sS,
  createTextInstance: oS,
  detachDeletedInstance: zS,
  finalizeInitialChildren: lS,
  getChildHostContext: mS,
  getCurrentEventPriority: US,
  getPublicInstance: aS,
  getRootHostContext: gS,
  hideInstance: LS,
  hideTextInstance: AS,
  idlePriority: Vo.unstable_IdlePriority,
  insertBefore: U4,
  insertInContainerBefore: PS,
  isPrimaryRenderer: wS,
  noTimeout: _S,
  now: Vo.unstable_now,
  prepareForCommit: uS,
  preparePortalMount: cS,
  prepareUpdate: dS,
  removeChild: TS,
  removeChildFromContainer: NS,
  resetAfterCommit: fS,
  resetTextContent: hS,
  run: Vo.unstable_runWithPriority,
  scheduleTimeout: yS,
  shouldDeprioritizeSubtree: pS,
  shouldSetTextContent: SS,
  supportsMutation: xS,
  unhideInstance: OS,
  unhideTextInstance: DS,
  warnsIfNotActing: CS
}, Symbol.toStringTag, { value: "Module" }));
var BS = Object.defineProperty, VS = Object.defineProperties, HS = Object.getOwnPropertyDescriptors, L2 = Object.getOwnPropertySymbols, jS = Object.prototype.hasOwnProperty, WS = Object.prototype.propertyIsEnumerable, A2 = (t, e, n) => e in t ? BS(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, O2 = (t, e) => {
  for (var n in e || (e = {}))
    jS.call(e, n) && A2(t, n, e[n]);
  if (L2)
    for (var n of L2(e))
      WS.call(e, n) && A2(t, n, e[n]);
  return t;
}, KS = (t, e) => VS(t, HS(e)), D2, I2;
typeof window < "u" && ((D2 = window.document) != null && D2.createElement || ((I2 = window.navigator) == null ? void 0 : I2.product) === "ReactNative") ? ce.useLayoutEffect : ce.useEffect;
function G4(t, e, n) {
  if (!t)
    return;
  if (n(t) === !0)
    return t;
  let r = t.child;
  for (; r; ) {
    const o = G4(r, e, n);
    if (o)
      return o;
    r = r.sibling;
  }
}
function B4(t) {
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
const z2 = console.error;
console.error = function() {
  const t = [...arguments].join("");
  if (t != null && t.startsWith("Warning:") && t.includes("useContext")) {
    console.error = z2;
    return;
  }
  return z2.apply(this, arguments);
};
const b0 = B4(ce.createContext(null));
class V4 extends ce.Component {
  render() {
    return /* @__PURE__ */ ce.createElement(b0.Provider, {
      value: this._reactInternals
    }, this.props.children);
  }
}
function YS() {
  const t = ce.useContext(b0);
  if (t === null)
    throw new Error("its-fine: useFiber must be called within a <FiberProvider />!");
  const e = ce.useId();
  return ce.useMemo(() => {
    for (const r of [t, t == null ? void 0 : t.alternate]) {
      if (!r)
        continue;
      const o = G4(r, !1, (l) => {
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
function XS() {
  const t = YS(), [e] = ce.useState(() => /* @__PURE__ */ new Map());
  e.clear();
  let n = t;
  for (; n; ) {
    if (n.type && typeof n.type == "object") {
      const o = n.type._context === void 0 && n.type.Provider === n.type ? n.type : n.type._context;
      o && o !== b0 && !e.has(o) && e.set(o, ce.useContext(B4(o)));
    }
    n = n.return;
  }
  return e;
}
function QS() {
  const t = XS();
  return ce.useMemo(
    () => Array.from(t.keys()).reduce(
      (e, n) => (r) => /* @__PURE__ */ ce.createElement(e, null, /* @__PURE__ */ ce.createElement(n.Provider, KS(O2({}, r), {
        value: t.get(n)
      }))),
      (e) => /* @__PURE__ */ ce.createElement(V4, O2({}, e))
    ),
    [t]
  );
}
function $S(t) {
  const e = Bt.useRef({});
  return Bt.useLayoutEffect(() => {
    e.current = t;
  }), Bt.useLayoutEffect(() => () => {
    e.current = {};
  }, []), e.current;
}
const qS = (t) => {
  const e = Bt.useRef(null), n = Bt.useRef(null), r = Bt.useRef(null), o = $S(t), l = QS(), a = (c) => {
    const { forwardedRef: f } = t;
    f && (typeof f == "function" ? f(c) : f.current = c);
  };
  return Bt.useLayoutEffect(() => (n.current = new yl.Stage({
    width: t.width,
    height: t.height,
    container: e.current
  }), a(n.current), r.current = Bo.createContainer(n.current, I4.LegacyRoot, !1, null), Bo.updateContainer(Bt.createElement(l, {}, t.children), r.current), () => {
    yl.isBrowser && (a(null), Bo.updateContainer(null, r.current, null), n.current.destroy());
  }), []), Bt.useLayoutEffect(() => {
    a(n.current), Bc(n.current, t, o), Bo.updateContainer(Bt.createElement(l, {}, t.children), r.current, null);
  }), Bt.createElement("div", {
    ref: e,
    id: t.id,
    accessKey: t.accessKey,
    className: t.className,
    role: t.role,
    style: t.style,
    tabIndex: t.tabIndex,
    title: t.title
  });
}, U2 = "Layer", Hh = "Rect", H4 = "Circle", Jo = "Line", JS = "Image", ZS = "Transformer", Bo = b_(GS);
Bo.injectIntoDevTools({
  // @ts-ignore
  findHostInstanceByFiber: () => null,
  bundleType: 0,
  version: Bt.version,
  rendererPackageName: "react-konva"
});
const bS = Bt.forwardRef((t, e) => Bt.createElement(V4, {}, Bt.createElement(qS, { ...t, forwardedRef: e })));
var Ti = ce, ew = function(e, n, r) {
  const o = Ti.useRef("loading"), l = Ti.useRef(), [a, c] = Ti.useState(0), f = Ti.useRef(), g = Ti.useRef(), y = Ti.useRef();
  return (f.current !== e || g.current !== n || y.current !== r) && (o.current = "loading", l.current = void 0, f.current = e, g.current = n, y.current = r), Ti.useLayoutEffect(
    function() {
      if (!e) return;
      var x = document.createElement("img");
      function S() {
        x.decode().catch(() => {
        }).finally(() => {
          o.current = "loaded", l.current = x, c(Math.random());
        });
      }
      function C() {
        o.current = "failed", l.current = void 0, c(Math.random());
      }
      return x.addEventListener("load", S), x.addEventListener("error", C), n && (x.crossOrigin = n), r && (x.referrerPolicy = r), x.src = e, function() {
        x.removeEventListener("load", S), x.removeEventListener("error", C);
      };
    },
    [e, n, r]
  ), [l.current, o.current];
};
const tw = /* @__PURE__ */ Lu(ew);
function j4(t = "") {
  return { version: "konva-1", background: t, objects: [] };
}
function Do(t) {
  return JSON.parse(JSON.stringify(t));
}
function ys() {
  return `obj_${Math.random().toString(36).slice(2, 10)}_${Date.now().toString(36)}`;
}
function Gf(t) {
  return !t || !Array.isArray(t.objects) ? j4((t == null ? void 0 : t.background) ?? "") : {
    version: t.version || "konva-1",
    background: t.background ?? "",
    objects: t.objects.filter(Boolean)
  };
}
function G2(t) {
  if (!t) return null;
  const e = t.getPointerPosition();
  return e ? { x: e.x, y: e.y } : null;
}
const nw = ({
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
  displayRadius: x,
  setStateValue: S
}) => {
  const C = ce.useRef(null), v = ce.useRef(null), P = ce.useRef(null), R = ce.useRef(null), k = ce.useRef(
    `${r}|${o ?? ""}`
  ), [w, p] = ce.useState(
    () => Gf(g)
  ), [_, N] = ce.useState([
    Gf(g)
  ]), [F, L] = ce.useState(0), [E, I] = ce.useState(null), [M, B] = ce.useState(null), [H] = tw(o ?? "", "anonymous"), q = ce.useMemo(
    () => JSON.stringify((g == null ? void 0 : g.objects) ?? []),
    [g]
  );
  ce.useEffect(() => {
    const $ = Gf(g), Z = `${r}|${o ?? ""}`, ue = k.current !== Z;
    k.current = Z, p((le) => {
      if (!(ue || $.objects.length > 0 || le.objects.length === 0))
        return { ...le, background: r };
      const Wt = {
        ...$,
        background: r
      };
      return N([Do(Wt)]), L(0), B(null), I(null), Wt;
    });
  }, [q, r, o, g]), ce.useEffect(() => {
    var le, dn;
    const $ = P.current, Z = C.current;
    if (!$ || !Z) return;
    if (f !== "transform" || !M) {
      $.nodes([]), R.current = null, (le = $.getLayer()) == null || le.batchDraw();
      return;
    }
    const ue = Z.findOne(`#${M}`);
    ue && (R.current = ue, $.nodes([ue]), (dn = $.getLayer()) == null || dn.batchDraw());
  }, [M, f, w.objects]);
  const ie = ce.useCallback(($) => {
    N((Z) => [...Z.slice(0, F + 1), Do($)]), L((Z) => Z + 1);
  }, [F]), Q = ce.useCallback(
    ($) => {
      const Z = v.current;
      Z && requestAnimationFrame(() => {
        const ue = Z.toDataURL({
          pixelRatio: 1,
          mimeType: "image/png"
        });
        S("image_data_url", ue), S("json_data", $);
      });
    },
    [S]
  ), fe = ce.useCallback(
    ($, Z) => {
      const ue = Do($);
      p(ue), ie(ue), ((Z == null ? void 0 : Z.emit) ?? l) && Q(ue);
    },
    [Q, ie, l]
  ), Ce = ce.useCallback(() => {
    if (F <= 0) return;
    const $ = F - 1, Z = Do(_[$]);
    L($), p(Z), B(null), l && Q(Z);
  }, [Q, _, F, l]), V = ce.useCallback(() => {
    if (F >= _.length - 1) return;
    const $ = F + 1, Z = Do(_[$]);
    L($), p(Z), B(null), l && Q(Z);
  }, [Q, _, F, l]), J = ce.useCallback(() => {
    const $ = j4(r);
    fe($, { emit: !0 }), B(null), I(null);
  }, [r, fe]), X = ce.useCallback(() => {
    Q(w);
  }, [Q, w]), Y = ce.useCallback(
    ($) => {
      fe({
        ...w,
        background: r,
        objects: [...w.objects, $]
      });
    },
    [r, fe, w]
  ), se = ce.useCallback(
    ($) => {
      const Z = C.current, ue = G2(Z);
      if (ue) {
        if (f === "transform") {
          $.target === Z && B(null);
          return;
        }
        if (f === "point") {
          Y({
            id: ys(),
            type: "point",
            x: ue.x,
            y: ue.y,
            radius: x,
            fill: n,
            stroke: n,
            strokeWidth: 1
          });
          return;
        }
        if (f === "polygon") {
          I((le) => (le == null ? void 0 : le.kind) === "polygon" ? { kind: "polygon", points: [...le.points, ue.x, ue.y] } : { kind: "polygon", points: [ue.x, ue.y] });
          return;
        }
        if (f === "freedraw") {
          I({ kind: "freedraw", points: [ue.x, ue.y] });
          return;
        }
        if (f === "line") {
          I({ kind: "line", x1: ue.x, y1: ue.y, x2: ue.x, y2: ue.y });
          return;
        }
        if (f === "rect") {
          I({ kind: "rect", x: ue.x, y: ue.y, width: 0, height: 0 });
          return;
        }
        f === "circle" && I({ kind: "circle", x: ue.x, y: ue.y, radius: 0 });
      }
    },
    [Y, x, f, n]
  ), Ee = ce.useCallback(() => {
    const $ = G2(C.current);
    if (!(!$ || !E)) {
      if (E.kind === "freedraw") {
        I({ kind: "freedraw", points: [...E.points, $.x, $.y] });
        return;
      }
      if (E.kind === "line") {
        I({ ...E, x2: $.x, y2: $.y });
        return;
      }
      if (E.kind === "rect") {
        I({
          ...E,
          width: $.x - E.x,
          height: $.y - E.y
        });
        return;
      }
      if (E.kind === "circle") {
        const Z = $.x - E.x, ue = $.y - E.y;
        I({ ...E, radius: Math.sqrt(Z * Z + ue * ue) });
      }
    }
  }, [E]), ot = ce.useCallback(() => {
    if (E) {
      if (E.kind === "freedraw" && E.points.length >= 4)
        Y({
          id: ys(),
          type: "freedraw",
          points: E.points,
          stroke: n,
          strokeWidth: e,
          fill: ""
        });
      else if (E.kind === "line")
        Y({
          id: ys(),
          type: "line",
          points: [E.x1, E.y1, E.x2, E.y2],
          stroke: n,
          strokeWidth: e
        });
      else if (E.kind === "rect") {
        const $ = Math.min(E.x, E.x + E.width), Z = Math.min(E.y, E.y + E.height), ue = Math.abs(E.width), le = Math.abs(E.height);
        ue > 1 && le > 1 && Y({
          id: ys(),
          type: "rect",
          x: $,
          y: Z,
          width: ue,
          height: le,
          stroke: n,
          strokeWidth: e,
          fill: t
        });
      } else E.kind === "circle" && E.radius > 1 && Y({
        id: ys(),
        type: "circle",
        x: E.x,
        y: E.y,
        radius: E.radius,
        stroke: n,
        strokeWidth: e,
        fill: t
      });
      E.kind !== "polygon" && I(null);
    }
  }, [Y, E, t, n, e]), ut = ce.useCallback(() => {
    f === "polygon" || f === "transform" || ot();
  }, [f, ot]), Oe = ce.useCallback(
    ($) => {
      if ($.evt.preventDefault(), !(f !== "polygon" || (E == null ? void 0 : E.kind) !== "polygon")) {
        if (E.points.length < 6) {
          I(null);
          return;
        }
        Y({
          id: ys(),
          type: "polygon",
          points: E.points,
          stroke: n,
          strokeWidth: e,
          fill: t
        }), I(null);
      }
    },
    [Y, E, f, t, n, e]
  ), A = ce.useCallback(() => {
    if (f === "polygon" && (E == null ? void 0 : E.kind) === "polygon") {
      E.points.length <= 2 ? I(null) : I({
        kind: "polygon",
        points: E.points.slice(0, -2)
      });
      return;
    }
    f === "transform" && M && (fe({
      ...w,
      objects: w.objects.filter(($) => $.id !== M)
    }), B(null));
  }, [fe, E, f, w, M]), j = ce.useCallback(
    ($) => {
      f === "transform" && B($);
    },
    [f]
  ), oe = ce.useCallback(
    ($, Z) => {
      const ue = w.objects.map((le) => le.id !== $ ? le : {
        ...le,
        x: Z.x(),
        y: Z.y(),
        rotation: Z.rotation(),
        scaleX: Z.scaleX(),
        scaleY: Z.scaleY(),
        ...le.type === "rect" ? {
          width: Math.max(1, (le.width ?? 0) * Z.scaleX()),
          height: Math.max(1, (le.height ?? 0) * Z.scaleY()),
          scaleX: 1,
          scaleY: 1
        } : {},
        ...le.type === "circle" || le.type === "point" ? {
          radius: Math.max(
            1,
            (le.radius ?? 1) * Math.max(Z.scaleX(), Z.scaleY())
          ),
          scaleX: 1,
          scaleY: 1
        } : {}
      });
      (Z.getClassName() === "Rect" || Z.getClassName() === "Circle") && (Z.scaleX(1), Z.scaleY(1)), fe({ ...w, objects: ue });
    },
    [fe, w]
  ), Fe = ce.useCallback(
    ($, Z) => {
      const ue = w.objects.map(
        (le) => le.id === $ ? { ...le, x: Z.x(), y: Z.y() } : le
      );
      fe({ ...w, objects: ue });
    },
    [fe, w]
  ), pe = {
    background: r || "transparent",
    border: "1px solid var(--st-gray-color, #ddd)",
    display: "block"
  };
  return /* @__PURE__ */ He.jsxs("div", { style: { fontFamily: "var(--st-font, sans-serif)", width: c }, children: [
    y && /* @__PURE__ */ He.jsxs(
      "div",
      {
        style: {
          display: "flex",
          gap: 8,
          marginBottom: 8,
          alignItems: "center"
        },
        children: [
          /* @__PURE__ */ He.jsx("button", { type: "button", onClick: Ce, disabled: F <= 0, children: "Undo" }),
          /* @__PURE__ */ He.jsx(
            "button",
            {
              type: "button",
              onClick: V,
              disabled: F >= _.length - 1,
              children: "Redo"
            }
          ),
          /* @__PURE__ */ He.jsx("button", { type: "button", onClick: J, children: "Clear" }),
          !l && /* @__PURE__ */ He.jsx("button", { type: "button", onClick: X, children: "Send to Streamlit" }),
          /* @__PURE__ */ He.jsxs("span", { style: { marginLeft: "auto", fontSize: 12, opacity: 0.7 }, children: [
            "mode: ",
            f
          ] })
        ]
      }
    ),
    /* @__PURE__ */ He.jsxs(
      bS,
      {
        width: c,
        height: a,
        ref: C,
        style: pe,
        onMouseDown: se,
        onMousemove: Ee,
        onMouseup: ut,
        onContextMenu: Oe,
        onDblClick: A,
        children: [
          /* @__PURE__ */ He.jsx(U2, { listening: !1, children: H && /* @__PURE__ */ He.jsx(
            JS,
            {
              image: H,
              width: c,
              height: a,
              listening: !1
            }
          ) }),
          /* @__PURE__ */ He.jsxs(U2, { ref: v, children: [
            !H && !!r && /* @__PURE__ */ He.jsx(
              Hh,
              {
                x: 0,
                y: 0,
                width: c,
                height: a,
                fill: r,
                listening: !1
              }
            ),
            w.objects.map(($) => /* @__PURE__ */ He.jsx(
              rw,
              {
                obj: $,
                draggable: f === "transform",
                onSelect: () => j($.id),
                onDragEnd: (Z) => Fe($.id, Z),
                onTransformEnd: (Z) => oe($.id, Z)
              },
              $.id
            )),
            (E == null ? void 0 : E.kind) === "freedraw" && /* @__PURE__ */ He.jsx(
              Jo,
              {
                points: E.points,
                stroke: n,
                strokeWidth: e,
                tension: 0.5,
                lineCap: "round",
                lineJoin: "round",
                listening: !1
              }
            ),
            (E == null ? void 0 : E.kind) === "line" && /* @__PURE__ */ He.jsx(
              Jo,
              {
                points: [E.x1, E.y1, E.x2, E.y2],
                stroke: n,
                strokeWidth: e,
                listening: !1
              }
            ),
            (E == null ? void 0 : E.kind) === "rect" && /* @__PURE__ */ He.jsx(
              Hh,
              {
                x: Math.min(E.x, E.x + E.width),
                y: Math.min(E.y, E.y + E.height),
                width: Math.abs(E.width),
                height: Math.abs(E.height),
                stroke: n,
                strokeWidth: e,
                fill: t,
                listening: !1
              }
            ),
            (E == null ? void 0 : E.kind) === "circle" && /* @__PURE__ */ He.jsx(
              H4,
              {
                x: E.x,
                y: E.y,
                radius: E.radius,
                stroke: n,
                strokeWidth: e,
                fill: t,
                listening: !1
              }
            ),
            (E == null ? void 0 : E.kind) === "polygon" && E.points.length >= 2 && /* @__PURE__ */ He.jsx(
              Jo,
              {
                points: E.points,
                stroke: n,
                strokeWidth: e,
                fill: t,
                closed: !1,
                listening: !1
              }
            ),
            f === "transform" && /* @__PURE__ */ He.jsx(
              ZS,
              {
                ref: P,
                rotateEnabled: !0,
                enabledAnchors: [
                  "top-left",
                  "top-right",
                  "bottom-left",
                  "bottom-right"
                ]
              }
            )
          ] })
        ]
      }
    )
  ] });
}, rw = ({
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
  return t.type === "rect" ? /* @__PURE__ */ He.jsx(
    Hh,
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
  ) : t.type === "circle" || t.type === "point" ? /* @__PURE__ */ He.jsx(
    H4,
    {
      ...l,
      x: t.x ?? 0,
      y: t.y ?? 0,
      radius: t.radius ?? 3,
      stroke: t.stroke,
      strokeWidth: t.strokeWidth,
      fill: t.fill
    }
  ) : t.type === "line" || t.type === "freedraw" ? /* @__PURE__ */ He.jsx(
    Jo,
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
  ) : t.type === "polygon" ? /* @__PURE__ */ He.jsx(
    Jo,
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
}, Ha = /* @__PURE__ */ new WeakMap(), uw = (t) => {
  const { data: e, parentElement: n, setStateValue: r } = t, o = n.querySelector(".react-root");
  if (!o)
    throw new Error("Unexpected: React root element not found");
  let l = Ha.get(n);
  return l || (l = Z3(o), Ha.set(n, l)), l.render(
    /* @__PURE__ */ He.jsx(ce.StrictMode, { children: /* @__PURE__ */ He.jsx(
      nw,
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
        setStateValue: r
      }
    ) })
  ), () => {
    const a = Ha.get(n);
    a && (a.unmount(), Ha.delete(n));
  };
};
export {
  uw as default
};
