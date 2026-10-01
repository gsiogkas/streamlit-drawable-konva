var $f = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function od(l) {
  return l && l.__esModule && Object.prototype.hasOwnProperty.call(l, "default") ? l.default : l;
}
var Hd = { exports: {} }, $a = {}, Wd = { exports: {} }, it = {};
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
function P1() {
  if (eh) return it;
  eh = 1;
  var l = Symbol.for("react.element"), d = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), L = Symbol.for("react.strict_mode"), M = Symbol.for("react.profiler"), k = Symbol.for("react.provider"), f = Symbol.for("react.context"), g = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), C = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), F = Symbol.iterator;
  function P(_) {
    return _ === null || typeof _ != "object" ? null : (_ = F && _[F] || _["@@iterator"], typeof _ == "function" ? _ : null);
  }
  var S = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, x = Object.assign, R = {};
  function A(_, K, b) {
    this.props = _, this.context = K, this.refs = R, this.updater = b || S;
  }
  A.prototype.isReactComponent = {}, A.prototype.setState = function(_, K) {
    if (typeof _ != "object" && typeof _ != "function" && _ != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, _, K, "setState");
  }, A.prototype.forceUpdate = function(_) {
    this.updater.enqueueForceUpdate(this, _, "forceUpdate");
  };
  function j() {
  }
  j.prototype = A.prototype;
  function w(_, K, b) {
    this.props = _, this.context = K, this.refs = R, this.updater = b || S;
  }
  var h = w.prototype = new j();
  h.constructor = w, x(h, A.prototype), h.isPureReactComponent = !0;
  var T = Array.isArray, I = Object.prototype.hasOwnProperty, H = { current: null }, J = { key: !0, ref: !0, __self: !0, __source: !0 };
  function z(_, K, b) {
    var ae, pe = {}, oe = null, q = null;
    if (K != null) for (ae in K.ref !== void 0 && (q = K.ref), K.key !== void 0 && (oe = "" + K.key), K) I.call(K, ae) && !J.hasOwnProperty(ae) && (pe[ae] = K[ae]);
    var ie = arguments.length - 2;
    if (ie === 1) pe.children = b;
    else if (1 < ie) {
      for (var ye = Array(ie), Ee = 0; Ee < ie; Ee++) ye[Ee] = arguments[Ee + 2];
      pe.children = ye;
    }
    if (_ && _.defaultProps) for (ae in ie = _.defaultProps, ie) pe[ae] === void 0 && (pe[ae] = ie[ae]);
    return { $$typeof: l, type: _, key: oe, ref: q, props: pe, _owner: H.current };
  }
  function G(_, K) {
    return { $$typeof: l, type: _.type, key: K, ref: _.ref, props: _.props, _owner: _._owner };
  }
  function V(_) {
    return typeof _ == "object" && _ !== null && _.$$typeof === l;
  }
  function Q(_) {
    var K = { "=": "=0", ":": "=2" };
    return "$" + _.replace(/[=:]/g, function(b) {
      return K[b];
    });
  }
  var Z = /\/+/g;
  function ee(_, K) {
    return typeof _ == "object" && _ !== null && _.key != null ? Q("" + _.key) : K.toString(36);
  }
  function re(_, K, b, ae, pe) {
    var oe = typeof _;
    (oe === "undefined" || oe === "boolean") && (_ = null);
    var q = !1;
    if (_ === null) q = !0;
    else switch (oe) {
      case "string":
      case "number":
        q = !0;
        break;
      case "object":
        switch (_.$$typeof) {
          case l:
          case d:
            q = !0;
        }
    }
    if (q) return q = _, pe = pe(q), _ = ae === "" ? "." + ee(q, 0) : ae, T(pe) ? (b = "", _ != null && (b = _.replace(Z, "$&/") + "/"), re(pe, K, b, "", function(Ee) {
      return Ee;
    })) : pe != null && (V(pe) && (pe = G(pe, b + (!pe.key || q && q.key === pe.key ? "" : ("" + pe.key).replace(Z, "$&/") + "/") + _)), K.push(pe)), 1;
    if (q = 0, ae = ae === "" ? "." : ae + ":", T(_)) for (var ie = 0; ie < _.length; ie++) {
      oe = _[ie];
      var ye = ae + ee(oe, ie);
      q += re(oe, K, b, ye, pe);
    }
    else if (ye = P(_), typeof ye == "function") for (_ = ye.call(_), ie = 0; !(oe = _.next()).done; ) oe = oe.value, ye = ae + ee(oe, ie++), q += re(oe, K, b, ye, pe);
    else if (oe === "object") throw K = String(_), Error("Objects are not valid as a React child (found: " + (K === "[object Object]" ? "object with keys {" + Object.keys(_).join(", ") + "}" : K) + "). If you meant to render a collection of children, use an array instead.");
    return q;
  }
  function X(_, K, b) {
    if (_ == null) return _;
    var ae = [], pe = 0;
    return re(_, ae, "", "", function(oe) {
      return K.call(b, oe, pe++);
    }), ae;
  }
  function me(_) {
    if (_._status === -1) {
      var K = _._result;
      K = K(), K.then(function(b) {
        (_._status === 0 || _._status === -1) && (_._status = 1, _._result = b);
      }, function(b) {
        (_._status === 0 || _._status === -1) && (_._status = 2, _._result = b);
      }), _._status === -1 && (_._status = 0, _._result = K);
    }
    if (_._status === 1) return _._result.default;
    throw _._result;
  }
  var N = { current: null }, D = { transition: null }, W = { ReactCurrentDispatcher: N, ReactCurrentBatchConfig: D, ReactCurrentOwner: H };
  function U() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return it.Children = { map: X, forEach: function(_, K, b) {
    X(_, function() {
      K.apply(this, arguments);
    }, b);
  }, count: function(_) {
    var K = 0;
    return X(_, function() {
      K++;
    }), K;
  }, toArray: function(_) {
    return X(_, function(K) {
      return K;
    }) || [];
  }, only: function(_) {
    if (!V(_)) throw Error("React.Children.only expected to receive a single React element child.");
    return _;
  } }, it.Component = A, it.Fragment = v, it.Profiler = M, it.PureComponent = w, it.StrictMode = L, it.Suspense = m, it.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W, it.act = U, it.cloneElement = function(_, K, b) {
    if (_ == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + _ + ".");
    var ae = x({}, _.props), pe = _.key, oe = _.ref, q = _._owner;
    if (K != null) {
      if (K.ref !== void 0 && (oe = K.ref, q = H.current), K.key !== void 0 && (pe = "" + K.key), _.type && _.type.defaultProps) var ie = _.type.defaultProps;
      for (ye in K) I.call(K, ye) && !J.hasOwnProperty(ye) && (ae[ye] = K[ye] === void 0 && ie !== void 0 ? ie[ye] : K[ye]);
    }
    var ye = arguments.length - 2;
    if (ye === 1) ae.children = b;
    else if (1 < ye) {
      ie = Array(ye);
      for (var Ee = 0; Ee < ye; Ee++) ie[Ee] = arguments[Ee + 2];
      ae.children = ie;
    }
    return { $$typeof: l, type: _.type, key: pe, ref: oe, props: ae, _owner: q };
  }, it.createContext = function(_) {
    return _ = { $$typeof: f, _currentValue: _, _currentValue2: _, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, _.Provider = { $$typeof: k, _context: _ }, _.Consumer = _;
  }, it.createElement = z, it.createFactory = function(_) {
    var K = z.bind(null, _);
    return K.type = _, K;
  }, it.createRef = function() {
    return { current: null };
  }, it.forwardRef = function(_) {
    return { $$typeof: g, render: _ };
  }, it.isValidElement = V, it.lazy = function(_) {
    return { $$typeof: E, _payload: { _status: -1, _result: _ }, _init: me };
  }, it.memo = function(_, K) {
    return { $$typeof: C, type: _, compare: K === void 0 ? null : K };
  }, it.startTransition = function(_) {
    var K = D.transition;
    D.transition = {};
    try {
      _();
    } finally {
      D.transition = K;
    }
  }, it.unstable_act = U, it.useCallback = function(_, K) {
    return N.current.useCallback(_, K);
  }, it.useContext = function(_) {
    return N.current.useContext(_);
  }, it.useDebugValue = function() {
  }, it.useDeferredValue = function(_) {
    return N.current.useDeferredValue(_);
  }, it.useEffect = function(_, K) {
    return N.current.useEffect(_, K);
  }, it.useId = function() {
    return N.current.useId();
  }, it.useImperativeHandle = function(_, K, b) {
    return N.current.useImperativeHandle(_, K, b);
  }, it.useInsertionEffect = function(_, K) {
    return N.current.useInsertionEffect(_, K);
  }, it.useLayoutEffect = function(_, K) {
    return N.current.useLayoutEffect(_, K);
  }, it.useMemo = function(_, K) {
    return N.current.useMemo(_, K);
  }, it.useReducer = function(_, K, b) {
    return N.current.useReducer(_, K, b);
  }, it.useRef = function(_) {
    return N.current.useRef(_);
  }, it.useState = function(_) {
    return N.current.useState(_);
  }, it.useSyncExternalStore = function(_, K, b) {
    return N.current.useSyncExternalStore(_, K, b);
  }, it.useTransition = function() {
    return N.current.useTransition();
  }, it.version = "18.3.1", it;
}
var th;
function Yu() {
  return th || (th = 1, Wd.exports = P1()), Wd.exports;
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
function R1() {
  if (nh) return $a;
  nh = 1;
  var l = Yu(), d = Symbol.for("react.element"), v = Symbol.for("react.fragment"), L = Object.prototype.hasOwnProperty, M = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, k = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(g, m, C) {
    var E, F = {}, P = null, S = null;
    C !== void 0 && (P = "" + C), m.key !== void 0 && (P = "" + m.key), m.ref !== void 0 && (S = m.ref);
    for (E in m) L.call(m, E) && !k.hasOwnProperty(E) && (F[E] = m[E]);
    if (g && g.defaultProps) for (E in m = g.defaultProps, m) F[E] === void 0 && (F[E] = m[E]);
    return { $$typeof: d, type: g, key: P, ref: S, props: F, _owner: M.current };
  }
  return $a.Fragment = v, $a.jsx = f, $a.jsxs = f, $a;
}
var rh;
function T1() {
  return rh || (rh = 1, Hd.exports = R1()), Hd.exports;
}
var ve = T1(), Ae = Yu();
const pr = /* @__PURE__ */ od(Ae);
var bc = {}, qd = { exports: {} }, Cr = {}, Kd = { exports: {} }, Yd = {};
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
function N1() {
  return ih || (ih = 1, (function(l) {
    function d(D, W) {
      var U = D.length;
      D.push(W);
      e: for (; 0 < U; ) {
        var _ = U - 1 >>> 1, K = D[_];
        if (0 < M(K, W)) D[_] = W, D[U] = K, U = _;
        else break e;
      }
    }
    function v(D) {
      return D.length === 0 ? null : D[0];
    }
    function L(D) {
      if (D.length === 0) return null;
      var W = D[0], U = D.pop();
      if (U !== W) {
        D[0] = U;
        e: for (var _ = 0, K = D.length, b = K >>> 1; _ < b; ) {
          var ae = 2 * (_ + 1) - 1, pe = D[ae], oe = ae + 1, q = D[oe];
          if (0 > M(pe, U)) oe < K && 0 > M(q, pe) ? (D[_] = q, D[oe] = U, _ = oe) : (D[_] = pe, D[ae] = U, _ = ae);
          else if (oe < K && 0 > M(q, U)) D[_] = q, D[oe] = U, _ = oe;
          else break e;
        }
      }
      return W;
    }
    function M(D, W) {
      var U = D.sortIndex - W.sortIndex;
      return U !== 0 ? U : D.id - W.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var k = performance;
      l.unstable_now = function() {
        return k.now();
      };
    } else {
      var f = Date, g = f.now();
      l.unstable_now = function() {
        return f.now() - g;
      };
    }
    var m = [], C = [], E = 1, F = null, P = 3, S = !1, x = !1, R = !1, A = typeof setTimeout == "function" ? setTimeout : null, j = typeof clearTimeout == "function" ? clearTimeout : null, w = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function h(D) {
      for (var W = v(C); W !== null; ) {
        if (W.callback === null) L(C);
        else if (W.startTime <= D) L(C), W.sortIndex = W.expirationTime, d(m, W);
        else break;
        W = v(C);
      }
    }
    function T(D) {
      if (R = !1, h(D), !x) if (v(m) !== null) x = !0, me(I);
      else {
        var W = v(C);
        W !== null && N(T, W.startTime - D);
      }
    }
    function I(D, W) {
      x = !1, R && (R = !1, j(z), z = -1), S = !0;
      var U = P;
      try {
        for (h(W), F = v(m); F !== null && (!(F.expirationTime > W) || D && !Q()); ) {
          var _ = F.callback;
          if (typeof _ == "function") {
            F.callback = null, P = F.priorityLevel;
            var K = _(F.expirationTime <= W);
            W = l.unstable_now(), typeof K == "function" ? F.callback = K : F === v(m) && L(m), h(W);
          } else L(m);
          F = v(m);
        }
        if (F !== null) var b = !0;
        else {
          var ae = v(C);
          ae !== null && N(T, ae.startTime - W), b = !1;
        }
        return b;
      } finally {
        F = null, P = U, S = !1;
      }
    }
    var H = !1, J = null, z = -1, G = 5, V = -1;
    function Q() {
      return !(l.unstable_now() - V < G);
    }
    function Z() {
      if (J !== null) {
        var D = l.unstable_now();
        V = D;
        var W = !0;
        try {
          W = J(!0, D);
        } finally {
          W ? ee() : (H = !1, J = null);
        }
      } else H = !1;
    }
    var ee;
    if (typeof w == "function") ee = function() {
      w(Z);
    };
    else if (typeof MessageChannel < "u") {
      var re = new MessageChannel(), X = re.port2;
      re.port1.onmessage = Z, ee = function() {
        X.postMessage(null);
      };
    } else ee = function() {
      A(Z, 0);
    };
    function me(D) {
      J = D, H || (H = !0, ee());
    }
    function N(D, W) {
      z = A(function() {
        D(l.unstable_now());
      }, W);
    }
    l.unstable_IdlePriority = 5, l.unstable_ImmediatePriority = 1, l.unstable_LowPriority = 4, l.unstable_NormalPriority = 3, l.unstable_Profiling = null, l.unstable_UserBlockingPriority = 2, l.unstable_cancelCallback = function(D) {
      D.callback = null;
    }, l.unstable_continueExecution = function() {
      x || S || (x = !0, me(I));
    }, l.unstable_forceFrameRate = function(D) {
      0 > D || 125 < D ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : G = 0 < D ? Math.floor(1e3 / D) : 5;
    }, l.unstable_getCurrentPriorityLevel = function() {
      return P;
    }, l.unstable_getFirstCallbackNode = function() {
      return v(m);
    }, l.unstable_next = function(D) {
      switch (P) {
        case 1:
        case 2:
        case 3:
          var W = 3;
          break;
        default:
          W = P;
      }
      var U = P;
      P = W;
      try {
        return D();
      } finally {
        P = U;
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
      var U = P;
      P = D;
      try {
        return W();
      } finally {
        P = U;
      }
    }, l.unstable_scheduleCallback = function(D, W, U) {
      var _ = l.unstable_now();
      switch (typeof U == "object" && U !== null ? (U = U.delay, U = typeof U == "number" && 0 < U ? _ + U : _) : U = _, D) {
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
      return K = U + K, D = { id: E++, callback: W, priorityLevel: D, startTime: U, expirationTime: K, sortIndex: -1 }, U > _ ? (D.sortIndex = U, d(C, D), v(m) === null && D === v(C) && (R ? (j(z), z = -1) : R = !0, N(T, U - _))) : (D.sortIndex = K, d(m, D), x || S || (x = !0, me(I))), D;
    }, l.unstable_shouldYield = Q, l.unstable_wrapCallback = function(D) {
      var W = P;
      return function() {
        var U = P;
        P = W;
        try {
          return D.apply(this, arguments);
        } finally {
          P = U;
        }
      };
    };
  })(Yd)), Yd;
}
var oh;
function gf() {
  return oh || (oh = 1, Kd.exports = N1()), Kd.exports;
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
function M1() {
  if (sh) return Cr;
  sh = 1;
  var l = Yu(), d = gf();
  function v(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, i = 1; i < arguments.length; i++) t += "&args[]=" + encodeURIComponent(arguments[i]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var L = /* @__PURE__ */ new Set(), M = {};
  function k(e, t) {
    f(e, t), f(e + "Capture", t);
  }
  function f(e, t) {
    for (M[e] = t, e = 0; e < t.length; e++) L.add(t[e]);
  }
  var g = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), m = Object.prototype.hasOwnProperty, C = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, E = {}, F = {};
  function P(e) {
    return m.call(F, e) ? !0 : m.call(E, e) ? !1 : C.test(e) ? F[e] = !0 : (E[e] = !0, !1);
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
  function x(e, t, i, s) {
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
  function R(e, t, i, s, u, p, O) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = s, this.attributeNamespace = u, this.mustUseProperty = i, this.propertyName = e, this.type = t, this.sanitizeURL = p, this.removeEmptyString = O;
  }
  var A = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    A[e] = new R(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    A[t] = new R(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    A[e] = new R(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    A[e] = new R(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    A[e] = new R(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    A[e] = new R(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    A[e] = new R(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    A[e] = new R(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    A[e] = new R(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var j = /[\-:]([a-z])/g;
  function w(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      j,
      w
    );
    A[t] = new R(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(j, w);
    A[t] = new R(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(j, w);
    A[t] = new R(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    A[e] = new R(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), A.xlinkHref = new R("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    A[e] = new R(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function h(e, t, i, s) {
    var u = A.hasOwnProperty(t) ? A[t] : null;
    (u !== null ? u.type !== 0 : s || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (x(t, i, u, s) && (i = null), s || u === null ? P(t) && (i === null ? e.removeAttribute(t) : e.setAttribute(t, "" + i)) : u.mustUseProperty ? e[u.propertyName] = i === null ? u.type === 3 ? !1 : "" : i : (t = u.attributeName, s = u.attributeNamespace, i === null ? e.removeAttribute(t) : (u = u.type, i = u === 3 || u === 4 && i === !0 ? "" : "" + i, s ? e.setAttributeNS(s, t, i) : e.setAttribute(t, i))));
  }
  var T = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, I = Symbol.for("react.element"), H = Symbol.for("react.portal"), J = Symbol.for("react.fragment"), z = Symbol.for("react.strict_mode"), G = Symbol.for("react.profiler"), V = Symbol.for("react.provider"), Q = Symbol.for("react.context"), Z = Symbol.for("react.forward_ref"), ee = Symbol.for("react.suspense"), re = Symbol.for("react.suspense_list"), X = Symbol.for("react.memo"), me = Symbol.for("react.lazy"), N = Symbol.for("react.offscreen"), D = Symbol.iterator;
  function W(e) {
    return e === null || typeof e != "object" ? null : (e = D && e[D] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var U = Object.assign, _;
  function K(e) {
    if (_ === void 0) try {
      throw Error();
    } catch (i) {
      var t = i.stack.trim().match(/\n( *(at )?)/);
      _ = t && t[1] || "";
    }
    return `
` + _ + e;
  }
  var b = !1;
  function ae(e, t) {
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
        for (var u = de.stack.split(`
`), p = s.stack.split(`
`), O = u.length - 1, Y = p.length - 1; 1 <= O && 0 <= Y && u[O] !== p[Y]; ) Y--;
        for (; 1 <= O && 0 <= Y; O--, Y--) if (u[O] !== p[Y]) {
          if (O !== 1 || Y !== 1)
            do
              if (O--, Y--, 0 > Y || u[O] !== p[Y]) {
                var $ = `
` + u[O].replace(" at new ", " at ");
                return e.displayName && $.includes("<anonymous>") && ($ = $.replace("<anonymous>", e.displayName)), $;
              }
            while (1 <= O && 0 <= Y);
          break;
        }
      }
    } finally {
      b = !1, Error.prepareStackTrace = i;
    }
    return (e = e ? e.displayName || e.name : "") ? K(e) : "";
  }
  function pe(e) {
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
        return e = ae(e.type, !1), e;
      case 11:
        return e = ae(e.type.render, !1), e;
      case 1:
        return e = ae(e.type, !0), e;
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
      case H:
        return "Portal";
      case G:
        return "Profiler";
      case z:
        return "StrictMode";
      case ee:
        return "Suspense";
      case re:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case Q:
        return (e.displayName || "Context") + ".Consumer";
      case V:
        return (e._context.displayName || "Context") + ".Provider";
      case Z:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case X:
        return t = e.displayName || null, t !== null ? t : oe(e.type) || "Memo";
      case me:
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
  function ie(e) {
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
  function ye(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Ee(e) {
    var t = ye(e) ? "checked" : "value", i = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), s = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof i < "u" && typeof i.get == "function" && typeof i.set == "function") {
      var u = i.get, p = i.set;
      return Object.defineProperty(e, t, { configurable: !0, get: function() {
        return u.call(this);
      }, set: function(O) {
        s = "" + O, p.call(this, O);
      } }), Object.defineProperty(e, t, { enumerable: i.enumerable }), { getValue: function() {
        return s;
      }, setValue: function(O) {
        s = "" + O;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[t];
      } };
    }
  }
  function Me(e) {
    e._valueTracker || (e._valueTracker = Ee(e));
  }
  function je(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var i = t.getValue(), s = "";
    return e && (s = ye(e) ? e.checked ? "true" : "false" : e.value), e = s, e !== i ? (t.setValue(e), !0) : !1;
  }
  function Ue(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function ot(e, t) {
    var i = t.checked;
    return U({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: i ?? e._wrapperState.initialChecked });
  }
  function we(e, t) {
    var i = t.defaultValue == null ? "" : t.defaultValue, s = t.checked != null ? t.checked : t.defaultChecked;
    i = ie(t.value != null ? t.value : i), e._wrapperState = { initialChecked: s, initialValue: i, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function Je(e, t) {
    t = t.checked, t != null && h(e, "checked", t, !1);
  }
  function Qe(e, t) {
    Je(e, t);
    var i = ie(t.value), s = t.type;
    if (i != null) s === "number" ? (i === 0 && e.value === "" || e.value != i) && (e.value = "" + i) : e.value !== "" + i && (e.value = "" + i);
    else if (s === "submit" || s === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? sn(e, t.type, i) : t.hasOwnProperty("defaultValue") && sn(e, t.type, ie(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function St(e, t, i) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var s = t.type;
      if (!(s !== "submit" && s !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, i || t === e.value || (e.value = t), e.defaultValue = t;
    }
    i = e.name, i !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, i !== "" && (e.name = i);
  }
  function sn(e, t, i) {
    (t !== "number" || Ue(e.ownerDocument) !== e) && (i == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + i && (e.defaultValue = "" + i));
  }
  var dt = Array.isArray;
  function qn(e, t, i, s) {
    if (e = e.options, t) {
      t = {};
      for (var u = 0; u < i.length; u++) t["$" + i[u]] = !0;
      for (i = 0; i < e.length; i++) u = t.hasOwnProperty("$" + e[i].value), e[i].selected !== u && (e[i].selected = u), u && s && (e[i].defaultSelected = !0);
    } else {
      for (i = "" + ie(i), t = null, u = 0; u < e.length; u++) {
        if (e[u].value === i) {
          e[u].selected = !0, s && (e[u].defaultSelected = !0);
          return;
        }
        t !== null || e[u].disabled || (t = e[u]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function et(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(v(91));
    return U({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function ln(e, t) {
    var i = t.value;
    if (i == null) {
      if (i = t.children, t = t.defaultValue, i != null) {
        if (t != null) throw Error(v(92));
        if (dt(i)) {
          if (1 < i.length) throw Error(v(93));
          i = i[0];
        }
        t = i;
      }
      t == null && (t = ""), i = t;
    }
    e._wrapperState = { initialValue: ie(i) };
  }
  function Ht(e, t) {
    var i = ie(t.value), s = ie(t.defaultValue);
    i != null && (i = "" + i, i !== e.value && (e.value = i), t.defaultValue == null && e.defaultValue !== i && (e.defaultValue = i)), s != null && (e.defaultValue = "" + s);
  }
  function bt(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function at(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Ln(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? at(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var Wt, An = (function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, i, s, u) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, i, s, u);
      });
    } : e;
  })(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (Wt = Wt || document.createElement("div"), Wt.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Wt.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function Dt(e, t) {
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
  }, br = ["Webkit", "ms", "Moz", "O"];
  Object.keys(zt).forEach(function(e) {
    br.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), zt[t] = zt[e];
    });
  });
  function Or(e, t, i) {
    return t == null || typeof t == "boolean" || t === "" ? "" : i || typeof t != "number" || t === 0 || zt.hasOwnProperty(e) && zt[e] ? ("" + t).trim() : t + "px";
  }
  function Ir(e, t) {
    e = e.style;
    for (var i in t) if (t.hasOwnProperty(i)) {
      var s = i.indexOf("--") === 0, u = Or(i, t[i], s);
      i === "float" && (i = "cssFloat"), s ? e.setProperty(i, u) : e[i] = u;
    }
  }
  var Kn = U({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function pi(e, t) {
    if (t) {
      if (Kn[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(v(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(v(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(v(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(v(62));
    }
  }
  function an(e, t) {
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
  function gs(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var ms = null, gi = null, Jr = null;
  function ys(e) {
    if (e = Us(e)) {
      if (typeof ms != "function") throw Error(v(280));
      var t = e.stateNode;
      t && (t = fn(t), ms(e.stateNode, e.type, t));
    }
  }
  function vs(e) {
    gi ? Jr ? Jr.push(e) : Jr = [e] : gi = e;
  }
  function _s() {
    if (gi) {
      var e = gi, t = Jr;
      if (Jr = gi = null, ys(e), t) for (e = 0; e < t.length; e++) ys(t[e]);
    }
  }
  function Ss(e, t) {
    return e(t);
  }
  function Vi() {
  }
  var ji = !1;
  function ws(e, t, i) {
    if (ji) return e(t, i);
    ji = !0;
    try {
      return Ss(e, t, i);
    } finally {
      ji = !1, (gi !== null || Jr !== null) && (Vi(), _s());
    }
  }
  function mi(e, t) {
    var i = e.stateNode;
    if (i === null) return null;
    var s = fn(i);
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
  var xs = !1;
  if (g) try {
    var ge = {};
    Object.defineProperty(ge, "passive", { get: function() {
      xs = !0;
    } }), window.addEventListener("test", ge, ge), window.removeEventListener("test", ge, ge);
  } catch {
    xs = !1;
  }
  function xe(e, t, i, s, u, p, O, Y, $) {
    var de = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(i, de);
    } catch (Se) {
      this.onError(Se);
    }
  }
  var Re = !1, Te = null, Xe = !1, $e = null, Et = { onError: function(e) {
    Re = !0, Te = e;
  } };
  function er(e, t, i, s, u, p, O, Y, $) {
    Re = !1, Te = null, xe.apply(Et, arguments);
  }
  function yi(e, t, i, s, u, p, O, Y, $) {
    if (er.apply(this, arguments), Re) {
      if (Re) {
        var de = Te;
        Re = !1, Te = null;
      } else throw Error(v(198));
      Xe || (Xe = !0, $e = de);
    }
  }
  function Ot(e) {
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
  function On(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function Hi(e) {
    if (Ot(e) !== e) throw Error(v(188));
  }
  function xo(e) {
    var t = e.alternate;
    if (!t) {
      if (t = Ot(e), t === null) throw Error(v(188));
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
          if (p === i) return Hi(u), e;
          if (p === s) return Hi(u), t;
          p = p.sibling;
        }
        throw Error(v(188));
      }
      if (i.return !== s.return) i = u, s = p;
      else {
        for (var O = !1, Y = u.child; Y; ) {
          if (Y === i) {
            O = !0, i = u, s = p;
            break;
          }
          if (Y === s) {
            O = !0, s = u, i = p;
            break;
          }
          Y = Y.sibling;
        }
        if (!O) {
          for (Y = p.child; Y; ) {
            if (Y === i) {
              O = !0, i = p, s = u;
              break;
            }
            if (Y === s) {
              O = !0, s = p, i = u;
              break;
            }
            Y = Y.sibling;
          }
          if (!O) throw Error(v(189));
        }
      }
      if (i.alternate !== s) throw Error(v(190));
    }
    if (i.tag !== 3) throw Error(v(188));
    return i.stateNode.current === i ? e : t;
  }
  function rl(e) {
    return e = xo(e), e !== null ? il(e) : null;
  }
  function il(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = il(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var ol = d.unstable_scheduleCallback, sl = d.unstable_cancelCallback, ud = d.unstable_shouldYield, cd = d.unstable_requestPaint, Bt = d.unstable_now, la = d.unstable_getCurrentPriorityLevel, Wi = d.unstable_ImmediatePriority, ll = d.unstable_UserBlockingPriority, Co = d.unstable_NormalPriority, dd = d.unstable_LowPriority, al = d.unstable_IdlePriority, Zr = null, gn = null;
  function Pt(e) {
    if (gn && typeof gn.onCommitFiberRoot == "function") try {
      gn.onCommitFiberRoot(Zr, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var nt = Math.clz32 ? Math.clz32 : Yn, vi = Math.log, xn = Math.LN2;
  function Yn(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (vi(e) / xn | 0) | 0;
  }
  var Dr = 64, $r = 4194304;
  function un(e) {
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
  function qi(e, t) {
    var i = e.pendingLanes;
    if (i === 0) return 0;
    var s = 0, u = e.suspendedLanes, p = e.pingedLanes, O = i & 268435455;
    if (O !== 0) {
      var Y = O & ~u;
      Y !== 0 ? s = un(Y) : (p &= O, p !== 0 && (s = un(p)));
    } else O = i & ~u, O !== 0 ? s = un(O) : p !== 0 && (s = un(p));
    if (s === 0) return 0;
    if (t !== 0 && t !== s && (t & u) === 0 && (u = s & -s, p = t & -t, u >= p || u === 16 && (p & 4194240) !== 0)) return t;
    if ((s & 4) !== 0 && (s |= i & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= s; 0 < t; ) i = 31 - nt(t), u = 1 << i, s |= e[i], t &= ~u;
    return s;
  }
  function Xu(e, t) {
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
  function Qu(e, t) {
    for (var i = e.suspendedLanes, s = e.pingedLanes, u = e.expirationTimes, p = e.pendingLanes; 0 < p; ) {
      var O = 31 - nt(p), Y = 1 << O, $ = u[O];
      $ === -1 ? ((Y & i) === 0 || (Y & s) !== 0) && (u[O] = Xu(Y, t)) : $ <= t && (e.expiredLanes |= Y), p &= ~Y;
    }
  }
  function ko(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function aa() {
    var e = Dr;
    return Dr <<= 1, (Dr & 4194240) === 0 && (Dr = 64), e;
  }
  function tr(e) {
    for (var t = [], i = 0; 31 > i; i++) t.push(e);
    return t;
  }
  function Cs(e, t, i) {
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
  function ua(e, t) {
    var i = e.entangledLanes |= t;
    for (e = e.entanglements; i; ) {
      var s = 31 - nt(i), u = 1 << s;
      u & t | e[s] & t && (e[s] |= t), i &= ~u;
    }
  }
  var ft = 0;
  function ks(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var Eo, Po, bu, Ju, ul, cl = !1, Ro = [], gr = null, _i = null, zr = null, rt = /* @__PURE__ */ new Map(), To = /* @__PURE__ */ new Map(), Gr = [], Zu = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function $u(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        gr = null;
        break;
      case "dragenter":
      case "dragleave":
        _i = null;
        break;
      case "mouseover":
      case "mouseout":
        zr = null;
        break;
      case "pointerover":
      case "pointerout":
        rt.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        To.delete(t.pointerId);
    }
  }
  function Es(e, t, i, s, u, p) {
    return e === null || e.nativeEvent !== p ? (e = { blockedOn: t, domEventName: i, eventSystemFlags: s, nativeEvent: p, targetContainers: [u] }, t !== null && (t = Us(t), t !== null && Po(t)), e) : (e.eventSystemFlags |= s, t = e.targetContainers, u !== null && t.indexOf(u) === -1 && t.push(u), e);
  }
  function cn(e, t, i, s, u) {
    switch (t) {
      case "focusin":
        return gr = Es(gr, e, t, i, s, u), !0;
      case "dragenter":
        return _i = Es(_i, e, t, i, s, u), !0;
      case "mouseover":
        return zr = Es(zr, e, t, i, s, u), !0;
      case "pointerover":
        var p = u.pointerId;
        return rt.set(p, Es(rt.get(p) || null, e, t, i, s, u)), !0;
      case "gotpointercapture":
        return p = u.pointerId, To.set(p, Es(To.get(p) || null, e, t, i, s, u)), !0;
    }
    return !1;
  }
  function dl(e) {
    var t = Ni(e.target);
    if (t !== null) {
      var i = Ot(t);
      if (i !== null) {
        if (t = i.tag, t === 13) {
          if (t = On(i), t !== null) {
            e.blockedOn = t, ul(e.priority, function() {
              bu(i);
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
  function fl(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var i = gl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (i === null) {
        i = e.nativeEvent;
        var s = new i.constructor(i.type, i);
        wo = s, i.target.dispatchEvent(s), wo = null;
      } else return t = Us(i), t !== null && Po(t), e.blockedOn = i, !1;
      t.shift();
    }
    return !0;
  }
  function hl(e, t, i) {
    fl(e) && i.delete(t);
  }
  function hd() {
    cl = !1, gr !== null && fl(gr) && (gr = null), _i !== null && fl(_i) && (_i = null), zr !== null && fl(zr) && (zr = null), rt.forEach(hl), To.forEach(hl);
  }
  function Si(e, t) {
    e.blockedOn === t && (e.blockedOn = null, cl || (cl = !0, d.unstable_scheduleCallback(d.unstable_NormalPriority, hd)));
  }
  function Xn(e) {
    function t(u) {
      return Si(u, e);
    }
    if (0 < Ro.length) {
      Si(Ro[0], e);
      for (var i = 1; i < Ro.length; i++) {
        var s = Ro[i];
        s.blockedOn === e && (s.blockedOn = null);
      }
    }
    for (gr !== null && Si(gr, e), _i !== null && Si(_i, e), zr !== null && Si(zr, e), rt.forEach(t), To.forEach(t), i = 0; i < Gr.length; i++) s = Gr[i], s.blockedOn === e && (s.blockedOn = null);
    for (; 0 < Gr.length && (i = Gr[0], i.blockedOn === null); ) dl(i), i.blockedOn === null && Gr.shift();
  }
  var No = T.ReactCurrentBatchConfig, pl = !0;
  function Pr(e, t, i, s) {
    var u = ft, p = No.transition;
    No.transition = null;
    try {
      ft = 1, Mo(e, t, i, s);
    } finally {
      ft = u, No.transition = p;
    }
  }
  function ei(e, t, i, s) {
    var u = ft, p = No.transition;
    No.transition = null;
    try {
      ft = 4, Mo(e, t, i, s);
    } finally {
      ft = u, No.transition = p;
    }
  }
  function Mo(e, t, i, s) {
    if (pl) {
      var u = gl(e, t, i, s);
      if (u === null) Fl(e, t, s, Fo, i), $u(e, s);
      else if (cn(u, e, t, i, s)) s.stopPropagation();
      else if ($u(e, s), t & 4 && -1 < Zu.indexOf(e)) {
        for (; u !== null; ) {
          var p = Us(u);
          if (p !== null && Eo(p), p = gl(e, t, i, s), p === null && Fl(e, t, s, Fo, i), p === u) break;
          u = p;
        }
        u !== null && s.stopPropagation();
      } else Fl(e, t, s, null, i);
    }
  }
  var Fo = null;
  function gl(e, t, i, s) {
    if (Fo = null, e = gs(s), e = Ni(e), e !== null) if (t = Ot(e), t === null) e = null;
    else if (i = t.tag, i === 13) {
      if (e = On(t), e !== null) return e;
      e = null;
    } else if (i === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return Fo = e, null;
  }
  function ec(e) {
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
        switch (la()) {
          case Wi:
            return 1;
          case ll:
            return 4;
          case Co:
          case dd:
            return 16;
          case al:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var mn = null, wi = null, ti = null;
  function Ps() {
    if (ti) return ti;
    var e, t = wi, i = t.length, s, u = "value" in mn ? mn.value : mn.textContent, p = u.length;
    for (e = 0; e < i && t[e] === u[e]; e++) ;
    var O = i - e;
    for (s = 1; s <= O && t[i - s] === u[p - s]; s++) ;
    return ti = u.slice(e, 1 < s ? 1 - s : void 0);
  }
  function Ki(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function In() {
    return !0;
  }
  function nr() {
    return !1;
  }
  function Jt(e) {
    function t(i, s, u, p, O) {
      this._reactName = i, this._targetInst = u, this.type = s, this.nativeEvent = p, this.target = O, this.currentTarget = null;
      for (var Y in e) e.hasOwnProperty(Y) && (i = e[Y], this[Y] = i ? i(p) : p[Y]);
      return this.isDefaultPrevented = (p.defaultPrevented != null ? p.defaultPrevented : p.returnValue === !1) ? In : nr, this.isPropagationStopped = nr, this;
    }
    return U(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var i = this.nativeEvent;
      i && (i.preventDefault ? i.preventDefault() : typeof i.returnValue != "unknown" && (i.returnValue = !1), this.isDefaultPrevented = In);
    }, stopPropagation: function() {
      var i = this.nativeEvent;
      i && (i.stopPropagation ? i.stopPropagation() : typeof i.cancelBubble != "unknown" && (i.cancelBubble = !0), this.isPropagationStopped = In);
    }, persist: function() {
    }, isPersistent: In }), t;
  }
  var Qn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Rr = Jt(Qn), Tr = U({}, Qn, { view: 0, detail: 0 }), tc = Jt(Tr), Rs, Ts, yn, Dn = U({}, Tr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Xi, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== yn && (yn && e.type === "mousemove" ? (Rs = e.screenX - yn.screenX, Ts = e.screenY - yn.screenY) : Ts = Rs = 0, yn = e), Rs);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : Ts;
  } }), Rt = Jt(Dn), Ns = U({}, Dn, { dataTransfer: 0 }), Nr = Jt(Ns), nc = U({}, Tr, { relatedTarget: 0 }), ml = Jt(nc), ca = U({}, Qn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), da = Jt(ca), rc = U({}, Qn, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), yl = Jt(rc), ic = U({}, Qn, { data: 0 }), Yi = Jt(ic), fa = {
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
  }, vl = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function gd(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = vl[e]) ? !!t[e] : !1;
  }
  function Xi() {
    return gd;
  }
  var _l = U({}, Tr, { key: function(e) {
    if (e.key) {
      var t = fa[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = Ki(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? pd[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Xi, charCode: function(e) {
    return e.type === "keypress" ? Ki(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Ki(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), oc = Jt(_l), sc = U({}, Dn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Qi = Jt(sc), lc = U({}, Tr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Xi }), Sl = Jt(lc), wl = U({}, Qn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Lo = Jt(wl), ha = U({}, Dn, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), pa = Jt(ha), ac = [9, 13, 27, 32], Ms = g && "CompositionEvent" in window, bi = null;
  g && "documentMode" in document && (bi = document.documentMode);
  var Ao = g && "TextEvent" in window && !bi, rr = g && (!Ms || bi && 8 < bi && 11 >= bi), xi = " ", xl = !1;
  function ga(e, t) {
    switch (e) {
      case "keyup":
        return ac.indexOf(t.keyCode) !== -1;
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
  function Mr(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var ir = !1;
  function ma(e, t) {
    switch (e) {
      case "compositionend":
        return Mr(t);
      case "keypress":
        return t.which !== 32 ? null : (xl = !0, xi);
      case "textInput":
        return e = t.data, e === xi && xl ? null : e;
      default:
        return null;
    }
  }
  function uc(e, t) {
    if (ir) return e === "compositionend" || !Ms && ga(e, t) ? (e = Ps(), ti = wi = mn = null, ir = !1, e) : null;
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
        return rr && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var ni = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function ri(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!ni[e.type] : t === "textarea";
  }
  function Fs(e, t, i, s) {
    vs(s), t = Ll(t, "onChange"), 0 < t.length && (i = new Rr("onChange", "change", null, i, s), e.push({ event: i, listeners: t }));
  }
  var Oo = null, Ci = null;
  function cc(e) {
    Ra(e, 0);
  }
  function ki(e) {
    var t = $t(e);
    if (je(t)) return e;
  }
  function mr(e, t) {
    if (e === "change") return t;
  }
  var Io = !1;
  if (g) {
    var Ei;
    if (g) {
      var yr = "oninput" in document;
      if (!yr) {
        var Cl = document.createElement("div");
        Cl.setAttribute("oninput", "return;"), yr = typeof Cl.oninput == "function";
      }
      Ei = yr;
    } else Ei = !1;
    Io = Ei && (!document.documentMode || 9 < document.documentMode);
  }
  function Ji() {
    Oo && (Oo.detachEvent("onpropertychange", ya), Ci = Oo = null);
  }
  function ya(e) {
    if (e.propertyName === "value" && ki(Ci)) {
      var t = [];
      Fs(t, Ci, e, gs(e)), ws(cc, t);
    }
  }
  function va(e, t, i) {
    e === "focusin" ? (Ji(), Oo = t, Ci = i, Oo.attachEvent("onpropertychange", ya)) : e === "focusout" && Ji();
  }
  function It(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return ki(Ci);
  }
  function kl(e, t) {
    if (e === "click") return ki(t);
  }
  function _a(e, t) {
    if (e === "input" || e === "change") return ki(t);
  }
  function Sa(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var bn = typeof Object.is == "function" ? Object.is : Sa;
  function Zi(e, t) {
    if (bn(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var i = Object.keys(e), s = Object.keys(t);
    if (i.length !== s.length) return !1;
    for (s = 0; s < i.length; s++) {
      var u = i[s];
      if (!m.call(t, u) || !bn(e[u], t[u])) return !1;
    }
    return !0;
  }
  function Pi(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Mt(e, t) {
    var i = Pi(e);
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
      i = Pi(i);
    }
  }
  function qt(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? qt(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Zt() {
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
  function Do(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function Ls(e) {
    var t = Zt(), i = e.focusedElem, s = e.selectionRange;
    if (t !== i && i && i.ownerDocument && qt(i.ownerDocument.documentElement, i)) {
      if (s !== null && Do(i)) {
        if (t = s.start, e = s.end, e === void 0 && (e = t), "selectionStart" in i) i.selectionStart = t, i.selectionEnd = Math.min(e, i.value.length);
        else if (e = (t = i.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var u = i.textContent.length, p = Math.min(s.start, u);
          s = s.end === void 0 ? p : Math.min(s.end, u), !e.extend && p > s && (u = s, s = p, p = u), u = Mt(i, p);
          var O = Mt(
            i,
            s
          );
          u && O && (e.rangeCount !== 1 || e.anchorNode !== u.node || e.anchorOffset !== u.offset || e.focusNode !== O.node || e.focusOffset !== O.offset) && (t = t.createRange(), t.setStart(u.node, u.offset), e.removeAllRanges(), p > s ? (e.addRange(t), e.extend(O.node, O.offset)) : (t.setEnd(O.node, O.offset), e.addRange(t)));
        }
      }
      for (t = [], e = i; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof i.focus == "function" && i.focus(), i = 0; i < t.length; i++) e = t[i], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var As = g && "documentMode" in document && 11 >= document.documentMode, zo = null, dn = null, $i = null, Os = !1;
  function El(e, t, i) {
    var s = i.window === i ? i.document : i.nodeType === 9 ? i : i.ownerDocument;
    Os || zo == null || zo !== Ue(s) || (s = zo, "selectionStart" in s && Do(s) ? s = { start: s.selectionStart, end: s.selectionEnd } : (s = (s.ownerDocument && s.ownerDocument.defaultView || window).getSelection(), s = { anchorNode: s.anchorNode, anchorOffset: s.anchorOffset, focusNode: s.focusNode, focusOffset: s.focusOffset }), $i && Zi($i, s) || ($i = s, s = Ll(dn, "onSelect"), 0 < s.length && (t = new Rr("onSelect", "select", null, t, i), e.push({ event: t, listeners: s }), t.target = zo)));
  }
  function or(e, t) {
    var i = {};
    return i[e.toLowerCase()] = t.toLowerCase(), i["Webkit" + e] = "webkit" + t, i["Moz" + e] = "moz" + t, i;
  }
  var vn = { animationend: or("Animation", "AnimationEnd"), animationiteration: or("Animation", "AnimationIteration"), animationstart: or("Animation", "AnimationStart"), transitionend: or("Transition", "TransitionEnd") }, eo = {}, Pl = {};
  g && (Pl = document.createElement("div").style, "AnimationEvent" in window || (delete vn.animationend.animation, delete vn.animationiteration.animation, delete vn.animationstart.animation), "TransitionEvent" in window || delete vn.transitionend.transition);
  function Go(e) {
    if (eo[e]) return eo[e];
    if (!vn[e]) return e;
    var t = vn[e], i;
    for (i in t) if (t.hasOwnProperty(i) && i in Pl) return eo[e] = t[i];
    return e;
  }
  var wa = Go("animationend"), xa = Go("animationiteration"), Ca = Go("animationstart"), ka = Go("transitionend"), Ea = /* @__PURE__ */ new Map(), Pa = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function ii(e, t) {
    Ea.set(e, t), k(t, [e]);
  }
  for (var Rl = 0; Rl < Pa.length; Rl++) {
    var to = Pa[Rl], dc = to.toLowerCase(), Tl = to[0].toUpperCase() + to.slice(1);
    ii(dc, "on" + Tl);
  }
  ii(wa, "onAnimationEnd"), ii(xa, "onAnimationIteration"), ii(Ca, "onAnimationStart"), ii("dblclick", "onDoubleClick"), ii("focusin", "onFocus"), ii("focusout", "onBlur"), ii(ka, "onTransitionEnd"), f("onMouseEnter", ["mouseout", "mouseover"]), f("onMouseLeave", ["mouseout", "mouseover"]), f("onPointerEnter", ["pointerout", "pointerover"]), f("onPointerLeave", ["pointerout", "pointerover"]), k("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), k("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), k("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), k("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), k("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), k("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Ri = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), fc = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ri));
  function Nl(e, t, i) {
    var s = e.type || "unknown-event";
    e.currentTarget = i, yi(s, t, void 0, e), e.currentTarget = null;
  }
  function Ra(e, t) {
    t = (t & 4) !== 0;
    for (var i = 0; i < e.length; i++) {
      var s = e[i], u = s.event;
      s = s.listeners;
      e: {
        var p = void 0;
        if (t) for (var O = s.length - 1; 0 <= O; O--) {
          var Y = s[O], $ = Y.instance, de = Y.currentTarget;
          if (Y = Y.listener, $ !== p && u.isPropagationStopped()) break e;
          Nl(u, Y, de), p = $;
        }
        else for (O = 0; O < s.length; O++) {
          if (Y = s[O], $ = Y.instance, de = Y.currentTarget, Y = Y.listener, $ !== p && u.isPropagationStopped()) break e;
          Nl(u, Y, de), p = $;
        }
      }
    }
    if (Xe) throw e = $e, Xe = !1, $e = null, e;
  }
  function wt(e, t) {
    var i = t[Ol];
    i === void 0 && (i = t[Ol] = /* @__PURE__ */ new Set());
    var s = e + "__bubble";
    i.has(s) || (Ta(t, e, 2, !1), i.add(s));
  }
  function Ml(e, t, i) {
    var s = 0;
    t && (s |= 4), Ta(i, e, s, t);
  }
  var Is = "_reactListening" + Math.random().toString(36).slice(2);
  function no(e) {
    if (!e[Is]) {
      e[Is] = !0, L.forEach(function(i) {
        i !== "selectionchange" && (fc.has(i) || Ml(i, !1, e), Ml(i, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Is] || (t[Is] = !0, Ml("selectionchange", !1, t));
    }
  }
  function Ta(e, t, i, s) {
    switch (ec(t)) {
      case 1:
        var u = Pr;
        break;
      case 4:
        u = ei;
        break;
      default:
        u = Mo;
    }
    i = u.bind(null, t, i, e), u = void 0, !xs || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (u = !0), s ? u !== void 0 ? e.addEventListener(t, i, { capture: !0, passive: u }) : e.addEventListener(t, i, !0) : u !== void 0 ? e.addEventListener(t, i, { passive: u }) : e.addEventListener(t, i, !1);
  }
  function Fl(e, t, i, s, u) {
    var p = s;
    if ((t & 1) === 0 && (t & 2) === 0 && s !== null) e: for (; ; ) {
      if (s === null) return;
      var O = s.tag;
      if (O === 3 || O === 4) {
        var Y = s.stateNode.containerInfo;
        if (Y === u || Y.nodeType === 8 && Y.parentNode === u) break;
        if (O === 4) for (O = s.return; O !== null; ) {
          var $ = O.tag;
          if (($ === 3 || $ === 4) && ($ = O.stateNode.containerInfo, $ === u || $.nodeType === 8 && $.parentNode === u)) return;
          O = O.return;
        }
        for (; Y !== null; ) {
          if (O = Ni(Y), O === null) return;
          if ($ = O.tag, $ === 5 || $ === 6) {
            s = p = O;
            continue e;
          }
          Y = Y.parentNode;
        }
      }
      s = s.return;
    }
    ws(function() {
      var de = p, Se = gs(i), Ce = [];
      e: {
        var _e = Ea.get(e);
        if (_e !== void 0) {
          var Oe = Rr, ze = e;
          switch (e) {
            case "keypress":
              if (Ki(i) === 0) break e;
            case "keydown":
            case "keyup":
              Oe = oc;
              break;
            case "focusin":
              ze = "focus", Oe = ml;
              break;
            case "focusout":
              ze = "blur", Oe = ml;
              break;
            case "beforeblur":
            case "afterblur":
              Oe = ml;
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
              Oe = Rt;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Oe = Nr;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Oe = Sl;
              break;
            case wa:
            case xa:
            case Ca:
              Oe = da;
              break;
            case ka:
              Oe = Lo;
              break;
            case "scroll":
              Oe = tc;
              break;
            case "wheel":
              Oe = pa;
              break;
            case "copy":
            case "cut":
            case "paste":
              Oe = yl;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Oe = Qi;
          }
          var Ge = (t & 4) !== 0, rn = !Ge && e === "scroll", le = Ge ? _e !== null ? _e + "Capture" : null : _e;
          Ge = [];
          for (var te = de, ue; te !== null; ) {
            ue = te;
            var Pe = ue.stateNode;
            if (ue.tag === 5 && Pe !== null && (ue = Pe, le !== null && (Pe = mi(te, le), Pe != null && Ge.push(Uo(te, Pe, ue)))), rn) break;
            te = te.return;
          }
          0 < Ge.length && (_e = new Oe(_e, ze, null, i, Se), Ce.push({ event: _e, listeners: Ge }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (_e = e === "mouseover" || e === "pointerover", Oe = e === "mouseout" || e === "pointerout", _e && i !== wo && (ze = i.relatedTarget || i.fromElement) && (Ni(ze) || ze[Br])) break e;
          if ((Oe || _e) && (_e = Se.window === Se ? Se : (_e = Se.ownerDocument) ? _e.defaultView || _e.parentWindow : window, Oe ? (ze = i.relatedTarget || i.toElement, Oe = de, ze = ze ? Ni(ze) : null, ze !== null && (rn = Ot(ze), ze !== rn || ze.tag !== 5 && ze.tag !== 6) && (ze = null)) : (Oe = null, ze = de), Oe !== ze)) {
            if (Ge = Rt, Pe = "onMouseLeave", le = "onMouseEnter", te = "mouse", (e === "pointerout" || e === "pointerover") && (Ge = Qi, Pe = "onPointerLeave", le = "onPointerEnter", te = "pointer"), rn = Oe == null ? _e : $t(Oe), ue = ze == null ? _e : $t(ze), _e = new Ge(Pe, te + "leave", Oe, i, Se), _e.target = rn, _e.relatedTarget = ue, Pe = null, Ni(Se) === de && (Ge = new Ge(le, te + "enter", ze, i, Se), Ge.target = ue, Ge.relatedTarget = rn, Pe = Ge), rn = Pe, Oe && ze) t: {
              for (Ge = Oe, le = ze, te = 0, ue = Ge; ue; ue = ro(ue)) te++;
              for (ue = 0, Pe = le; Pe; Pe = ro(Pe)) ue++;
              for (; 0 < te - ue; ) Ge = ro(Ge), te--;
              for (; 0 < ue - te; ) le = ro(le), ue--;
              for (; te--; ) {
                if (Ge === le || le !== null && Ge === le.alternate) break t;
                Ge = ro(Ge), le = ro(le);
              }
              Ge = null;
            }
            else Ge = null;
            Oe !== null && hc(Ce, _e, Oe, Ge, !1), ze !== null && rn !== null && hc(Ce, rn, ze, Ge, !0);
          }
        }
        e: {
          if (_e = de ? $t(de) : window, Oe = _e.nodeName && _e.nodeName.toLowerCase(), Oe === "select" || Oe === "input" && _e.type === "file") var Be = mr;
          else if (ri(_e)) if (Io) Be = _a;
          else {
            Be = It;
            var He = va;
          }
          else (Oe = _e.nodeName) && Oe.toLowerCase() === "input" && (_e.type === "checkbox" || _e.type === "radio") && (Be = kl);
          if (Be && (Be = Be(e, de))) {
            Fs(Ce, Be, i, Se);
            break e;
          }
          He && He(e, _e, de), e === "focusout" && (He = _e._wrapperState) && He.controlled && _e.type === "number" && sn(_e, "number", _e.value);
        }
        switch (He = de ? $t(de) : window, e) {
          case "focusin":
            (ri(He) || He.contentEditable === "true") && (zo = He, dn = de, $i = null);
            break;
          case "focusout":
            $i = dn = zo = null;
            break;
          case "mousedown":
            Os = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Os = !1, El(Ce, i, Se);
            break;
          case "selectionchange":
            if (As) break;
          case "keydown":
          case "keyup":
            El(Ce, i, Se);
        }
        var We;
        if (Ms) e: {
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
        else ir ? ga(e, i) && (qe = "onCompositionEnd") : e === "keydown" && i.keyCode === 229 && (qe = "onCompositionStart");
        qe && (rr && i.locale !== "ko" && (ir || qe !== "onCompositionStart" ? qe === "onCompositionEnd" && ir && (We = Ps()) : (mn = Se, wi = "value" in mn ? mn.value : mn.textContent, ir = !0)), He = Ll(de, qe), 0 < He.length && (qe = new Yi(qe, e, null, i, Se), Ce.push({ event: qe, listeners: He }), We ? qe.data = We : (We = Mr(i), We !== null && (qe.data = We)))), (We = Ao ? ma(e, i) : uc(e, i)) && (de = Ll(de, "onBeforeInput"), 0 < de.length && (Se = new Yi("onBeforeInput", "beforeinput", null, i, Se), Ce.push({ event: Se, listeners: de }), Se.data = We));
      }
      Ra(Ce, t);
    });
  }
  function Uo(e, t, i) {
    return { instance: e, listener: t, currentTarget: i };
  }
  function Ll(e, t) {
    for (var i = t + "Capture", s = []; e !== null; ) {
      var u = e, p = u.stateNode;
      u.tag === 5 && p !== null && (u = p, p = mi(e, i), p != null && s.unshift(Uo(e, p, u)), p = mi(e, t), p != null && s.push(Uo(e, p, u))), e = e.return;
    }
    return s;
  }
  function ro(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function hc(e, t, i, s, u) {
    for (var p = t._reactName, O = []; i !== null && i !== s; ) {
      var Y = i, $ = Y.alternate, de = Y.stateNode;
      if ($ !== null && $ === s) break;
      Y.tag === 5 && de !== null && (Y = de, u ? ($ = mi(i, p), $ != null && O.unshift(Uo(i, $, Y))) : u || ($ = mi(i, p), $ != null && O.push(Uo(i, $, Y)))), i = i.return;
    }
    O.length !== 0 && e.push({ event: t, listeners: O });
  }
  var md = /\r\n?/g, pc = /\u0000|\uFFFD/g;
  function Na(e) {
    return (typeof e == "string" ? e : "" + e).replace(md, `
`).replace(pc, "");
  }
  function Ds(e, t, i) {
    if (t = Na(t), Na(e) !== t && i) throw Error(v(425));
  }
  function io() {
  }
  var Ma = null, Fa = null;
  function La(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var sr = typeof setTimeout == "function" ? setTimeout : void 0, Aa = typeof clearTimeout == "function" ? clearTimeout : void 0, zs = typeof Promise == "function" ? Promise : void 0, gc = typeof queueMicrotask == "function" ? queueMicrotask : typeof zs < "u" ? function(e) {
    return zs.resolve(null).then(e).catch(mc);
  } : sr;
  function mc(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Al(e, t) {
    var i = t, s = 0;
    do {
      var u = i.nextSibling;
      if (e.removeChild(i), u && u.nodeType === 8) if (i = u.data, i === "/$") {
        if (s === 0) {
          e.removeChild(u), Xn(t);
          return;
        }
        s--;
      } else i !== "$" && i !== "$?" && i !== "$!" || s++;
      i = u;
    } while (i);
    Xn(t);
  }
  function Ur(e) {
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
  function oo(e) {
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
  var Ti = Math.random().toString(36).slice(2), vr = "__reactFiber$" + Ti, Gs = "__reactProps$" + Ti, Br = "__reactContainer$" + Ti, Ol = "__reactEvents$" + Ti, yc = "__reactListeners$" + Ti, vc = "__reactHandles$" + Ti;
  function Ni(e) {
    var t = e[vr];
    if (t) return t;
    for (var i = e.parentNode; i; ) {
      if (t = i[Br] || i[vr]) {
        if (i = t.alternate, t.child !== null || i !== null && i.child !== null) for (e = oo(e); e !== null; ) {
          if (i = e[vr]) return i;
          e = oo(e);
        }
        return t;
      }
      e = i, i = e.parentNode;
    }
    return null;
  }
  function Us(e) {
    return e = e[vr] || e[Br], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function $t(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(v(33));
  }
  function fn(e) {
    return e[Gs] || null;
  }
  var Il = [], so = -1;
  function oi(e) {
    return { current: e };
  }
  function xt(e) {
    0 > so || (e.current = Il[so], Il[so] = null, so--);
  }
  function vt(e, t) {
    so++, Il[so] = e.current, e.current = t;
  }
  var Vr = {}, _n = oi(Vr), Cn = oi(!1), Mi = Vr;
  function lo(e, t) {
    var i = e.type.contextTypes;
    if (!i) return Vr;
    var s = e.stateNode;
    if (s && s.__reactInternalMemoizedUnmaskedChildContext === t) return s.__reactInternalMemoizedMaskedChildContext;
    var u = {}, p;
    for (p in i) u[p] = t[p];
    return s && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = u), u;
  }
  function kn(e) {
    return e = e.childContextTypes, e != null;
  }
  function Bo() {
    xt(Cn), xt(_n);
  }
  function Oa(e, t, i) {
    if (_n.current !== Vr) throw Error(v(168));
    vt(_n, t), vt(Cn, i);
  }
  function Dl(e, t, i) {
    var s = e.stateNode;
    if (t = t.childContextTypes, typeof s.getChildContext != "function") return i;
    s = s.getChildContext();
    for (var u in s) if (!(u in t)) throw Error(v(108, q(e) || "Unknown", u));
    return U({}, i, s);
  }
  function ao(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Vr, Mi = _n.current, vt(_n, e), vt(Cn, Cn.current), !0;
  }
  function _c(e, t, i) {
    var s = e.stateNode;
    if (!s) throw Error(v(169));
    i ? (e = Dl(e, t, Mi), s.__reactInternalMemoizedMergedChildContext = e, xt(Cn), xt(_n), vt(_n, e)) : xt(Cn), vt(Cn, i);
  }
  var jr = null, Vo = !1, zl = !1;
  function Bs(e) {
    jr === null ? jr = [e] : jr.push(e);
  }
  function si(e) {
    Vo = !0, Bs(e);
  }
  function Fi() {
    if (!zl && jr !== null) {
      zl = !0;
      var e = 0, t = ft;
      try {
        var i = jr;
        for (ft = 1; e < i.length; e++) {
          var s = i[e];
          do
            s = s(!0);
          while (s !== null);
        }
        jr = null, Vo = !1;
      } catch (u) {
        throw jr !== null && (jr = jr.slice(e + 1)), ol(Wi, Fi), u;
      } finally {
        ft = t, zl = !1;
      }
    }
    return null;
  }
  var zn = [], uo = 0, Li = null, Ai = 0, Gn = [], Un = 0, Oi = null, lr = 1, Ft = "";
  function co(e, t) {
    zn[uo++] = Ai, zn[uo++] = Li, Li = e, Ai = t;
  }
  function Sc(e, t, i) {
    Gn[Un++] = lr, Gn[Un++] = Ft, Gn[Un++] = Oi, Oi = e;
    var s = lr;
    e = Ft;
    var u = 32 - nt(s) - 1;
    s &= ~(1 << u), i += 1;
    var p = 32 - nt(t) + u;
    if (30 < p) {
      var O = u - u % 5;
      p = (s & (1 << O) - 1).toString(32), s >>= O, u -= O, lr = 1 << 32 - nt(t) + u | i << u | s, Ft = p + e;
    } else lr = 1 << p | i << u | s, Ft = e;
  }
  function jo(e) {
    e.return !== null && (co(e, 1), Sc(e, 1, 0));
  }
  function hn(e) {
    for (; e === Li; ) Li = zn[--uo], zn[uo] = null, Ai = zn[--uo], zn[uo] = null;
    for (; e === Oi; ) Oi = Gn[--Un], Gn[Un] = null, Ft = Gn[--Un], Gn[Un] = null, lr = Gn[--Un], Gn[Un] = null;
  }
  var ar = null, Ne = null, gt = !1, ur = null;
  function Ia(e, t) {
    var i = Qr(5, null, null, 0);
    i.elementType = "DELETED", i.stateNode = t, i.return = e, t = e.deletions, t === null ? (e.deletions = [i], e.flags |= 16) : t.push(i);
  }
  function wc(e, t) {
    switch (e.tag) {
      case 5:
        var i = e.type;
        return t = t.nodeType !== 1 || i.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, ar = e, Ne = Ur(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, ar = e, Ne = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (i = Oi !== null ? { id: lr, overflow: Ft } : null, e.memoizedState = { dehydrated: t, treeContext: i, retryLane: 1073741824 }, i = Qr(18, null, null, 0), i.stateNode = t, i.return = e, e.child = i, ar = e, Ne = null, !0) : !1;
      default:
        return !1;
    }
  }
  function fo(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Ho(e) {
    if (gt) {
      var t = Ne;
      if (t) {
        var i = t;
        if (!wc(e, t)) {
          if (fo(e)) throw Error(v(418));
          t = Ur(i.nextSibling);
          var s = ar;
          t && wc(e, t) ? Ia(s, i) : (e.flags = e.flags & -4097 | 2, gt = !1, ar = e);
        }
      } else {
        if (fo(e)) throw Error(v(418));
        e.flags = e.flags & -4097 | 2, gt = !1, ar = e;
      }
    }
  }
  function Gl(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    ar = e;
  }
  function Vs(e) {
    if (e !== ar) return !1;
    if (!gt) return Gl(e), gt = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !La(e.type, e.memoizedProps)), t && (t = Ne)) {
      if (fo(e)) throw Da(), Error(v(418));
      for (; t; ) Ia(e, t), t = Ur(t.nextSibling);
    }
    if (Gl(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(v(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var i = e.data;
            if (i === "/$") {
              if (t === 0) {
                Ne = Ur(e.nextSibling);
                break e;
              }
              t--;
            } else i !== "$" && i !== "$!" && i !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        Ne = null;
      }
    } else Ne = ar ? Ur(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Da() {
    for (var e = Ne; e; ) e = Ur(e.nextSibling);
  }
  function ho() {
    Ne = ar = null, gt = !1;
  }
  function js(e) {
    ur === null ? ur = [e] : ur.push(e);
  }
  var za = T.ReactCurrentBatchConfig;
  function Vt(e, t, i) {
    if (e = i.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (i._owner) {
        if (i = i._owner, i) {
          if (i.tag !== 1) throw Error(v(309));
          var s = i.stateNode;
        }
        if (!s) throw Error(v(147, e));
        var u = s, p = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === p ? t.ref : (t = function(O) {
          var Y = u.refs;
          O === null ? delete Y[p] : Y[p] = O;
        }, t._stringRef = p, t);
      }
      if (typeof e != "string") throw Error(v(284));
      if (!i._owner) throw Error(v(290, e));
    }
    return e;
  }
  function Jn(e, t) {
    throw e = Object.prototype.toString.call(t), Error(v(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function Fr(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Ul(e) {
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
      return le = us(le, te), le.index = 0, le.sibling = null, le;
    }
    function p(le, te, ue) {
      return le.index = ue, e ? (ue = le.alternate, ue !== null ? (ue = ue.index, ue < te ? (le.flags |= 2, te) : ue) : (le.flags |= 2, te)) : (le.flags |= 1048576, te);
    }
    function O(le) {
      return e && le.alternate === null && (le.flags |= 2), le;
    }
    function Y(le, te, ue, Pe) {
      return te === null || te.tag !== 6 ? (te = zd(ue, le.mode, Pe), te.return = le, te) : (te = u(te, ue), te.return = le, te);
    }
    function $(le, te, ue, Pe) {
      var Be = ue.type;
      return Be === J ? Se(le, te, ue.props.children, Pe, ue.key) : te !== null && (te.elementType === Be || typeof Be == "object" && Be !== null && Be.$$typeof === me && Fr(Be) === te.type) ? (Pe = u(te, ue.props), Pe.ref = Vt(le, te, ue), Pe.return = le, Pe) : (Pe = jc(ue.type, ue.key, ue.props, null, le.mode, Pe), Pe.ref = Vt(le, te, ue), Pe.return = le, Pe);
    }
    function de(le, te, ue, Pe) {
      return te === null || te.tag !== 4 || te.stateNode.containerInfo !== ue.containerInfo || te.stateNode.implementation !== ue.implementation ? (te = Gd(ue, le.mode, Pe), te.return = le, te) : (te = u(te, ue.children || []), te.return = le, te);
    }
    function Se(le, te, ue, Pe, Be) {
      return te === null || te.tag !== 7 ? (te = $s(ue, le.mode, Pe, Be), te.return = le, te) : (te = u(te, ue), te.return = le, te);
    }
    function Ce(le, te, ue) {
      if (typeof te == "string" && te !== "" || typeof te == "number") return te = zd("" + te, le.mode, ue), te.return = le, te;
      if (typeof te == "object" && te !== null) {
        switch (te.$$typeof) {
          case I:
            return ue = jc(te.type, te.key, te.props, null, le.mode, ue), ue.ref = Vt(le, null, te), ue.return = le, ue;
          case H:
            return te = Gd(te, le.mode, ue), te.return = le, te;
          case me:
            var Pe = te._init;
            return Ce(le, Pe(te._payload), ue);
        }
        if (dt(te) || W(te)) return te = $s(te, le.mode, ue, null), te.return = le, te;
        Jn(le, te);
      }
      return null;
    }
    function _e(le, te, ue, Pe) {
      var Be = te !== null ? te.key : null;
      if (typeof ue == "string" && ue !== "" || typeof ue == "number") return Be !== null ? null : Y(le, te, "" + ue, Pe);
      if (typeof ue == "object" && ue !== null) {
        switch (ue.$$typeof) {
          case I:
            return ue.key === Be ? $(le, te, ue, Pe) : null;
          case H:
            return ue.key === Be ? de(le, te, ue, Pe) : null;
          case me:
            return Be = ue._init, _e(
              le,
              te,
              Be(ue._payload),
              Pe
            );
        }
        if (dt(ue) || W(ue)) return Be !== null ? null : Se(le, te, ue, Pe, null);
        Jn(le, ue);
      }
      return null;
    }
    function Oe(le, te, ue, Pe, Be) {
      if (typeof Pe == "string" && Pe !== "" || typeof Pe == "number") return le = le.get(ue) || null, Y(te, le, "" + Pe, Be);
      if (typeof Pe == "object" && Pe !== null) {
        switch (Pe.$$typeof) {
          case I:
            return le = le.get(Pe.key === null ? ue : Pe.key) || null, $(te, le, Pe, Be);
          case H:
            return le = le.get(Pe.key === null ? ue : Pe.key) || null, de(te, le, Pe, Be);
          case me:
            var He = Pe._init;
            return Oe(le, te, ue, He(Pe._payload), Be);
        }
        if (dt(Pe) || W(Pe)) return le = le.get(ue) || null, Se(te, le, Pe, Be, null);
        Jn(te, Pe);
      }
      return null;
    }
    function ze(le, te, ue, Pe) {
      for (var Be = null, He = null, We = te, qe = te = 0, Mn = null; We !== null && qe < ue.length; qe++) {
        We.index > qe ? (Mn = We, We = null) : Mn = We.sibling;
        var pt = _e(le, We, ue[qe], Pe);
        if (pt === null) {
          We === null && (We = Mn);
          break;
        }
        e && We && pt.alternate === null && t(le, We), te = p(pt, te, qe), He === null ? Be = pt : He.sibling = pt, He = pt, We = Mn;
      }
      if (qe === ue.length) return i(le, We), gt && co(le, qe), Be;
      if (We === null) {
        for (; qe < ue.length; qe++) We = Ce(le, ue[qe], Pe), We !== null && (te = p(We, te, qe), He === null ? Be = We : He.sibling = We, He = We);
        return gt && co(le, qe), Be;
      }
      for (We = s(le, We); qe < ue.length; qe++) Mn = Oe(We, le, qe, ue[qe], Pe), Mn !== null && (e && Mn.alternate !== null && We.delete(Mn.key === null ? qe : Mn.key), te = p(Mn, te, qe), He === null ? Be = Mn : He.sibling = Mn, He = Mn);
      return e && We.forEach(function(cs) {
        return t(le, cs);
      }), gt && co(le, qe), Be;
    }
    function Ge(le, te, ue, Pe) {
      var Be = W(ue);
      if (typeof Be != "function") throw Error(v(150));
      if (ue = Be.call(ue), ue == null) throw Error(v(151));
      for (var He = Be = null, We = te, qe = te = 0, Mn = null, pt = ue.next(); We !== null && !pt.done; qe++, pt = ue.next()) {
        We.index > qe ? (Mn = We, We = null) : Mn = We.sibling;
        var cs = _e(le, We, pt.value, Pe);
        if (cs === null) {
          We === null && (We = Mn);
          break;
        }
        e && We && cs.alternate === null && t(le, We), te = p(cs, te, qe), He === null ? Be = cs : He.sibling = cs, He = cs, We = Mn;
      }
      if (pt.done) return i(
        le,
        We
      ), gt && co(le, qe), Be;
      if (We === null) {
        for (; !pt.done; qe++, pt = ue.next()) pt = Ce(le, pt.value, Pe), pt !== null && (te = p(pt, te, qe), He === null ? Be = pt : He.sibling = pt, He = pt);
        return gt && co(le, qe), Be;
      }
      for (We = s(le, We); !pt.done; qe++, pt = ue.next()) pt = Oe(We, le, qe, pt.value, Pe), pt !== null && (e && pt.alternate !== null && We.delete(pt.key === null ? qe : pt.key), te = p(pt, te, qe), He === null ? Be = pt : He.sibling = pt, He = pt);
      return e && We.forEach(function(E1) {
        return t(le, E1);
      }), gt && co(le, qe), Be;
    }
    function rn(le, te, ue, Pe) {
      if (typeof ue == "object" && ue !== null && ue.type === J && ue.key === null && (ue = ue.props.children), typeof ue == "object" && ue !== null) {
        switch (ue.$$typeof) {
          case I:
            e: {
              for (var Be = ue.key, He = te; He !== null; ) {
                if (He.key === Be) {
                  if (Be = ue.type, Be === J) {
                    if (He.tag === 7) {
                      i(le, He.sibling), te = u(He, ue.props.children), te.return = le, le = te;
                      break e;
                    }
                  } else if (He.elementType === Be || typeof Be == "object" && Be !== null && Be.$$typeof === me && Fr(Be) === He.type) {
                    i(le, He.sibling), te = u(He, ue.props), te.ref = Vt(le, He, ue), te.return = le, le = te;
                    break e;
                  }
                  i(le, He);
                  break;
                } else t(le, He);
                He = He.sibling;
              }
              ue.type === J ? (te = $s(ue.props.children, le.mode, Pe, ue.key), te.return = le, le = te) : (Pe = jc(ue.type, ue.key, ue.props, null, le.mode, Pe), Pe.ref = Vt(le, te, ue), Pe.return = le, le = Pe);
            }
            return O(le);
          case H:
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
              te = Gd(ue, le.mode, Pe), te.return = le, le = te;
            }
            return O(le);
          case me:
            return He = ue._init, rn(le, te, He(ue._payload), Pe);
        }
        if (dt(ue)) return ze(le, te, ue, Pe);
        if (W(ue)) return Ge(le, te, ue, Pe);
        Jn(le, ue);
      }
      return typeof ue == "string" && ue !== "" || typeof ue == "number" ? (ue = "" + ue, te !== null && te.tag === 6 ? (i(le, te.sibling), te = u(te, ue), te.return = le, le = te) : (i(le, te), te = zd(ue, le.mode, Pe), te.return = le, le = te), O(le)) : i(le, te);
    }
    return rn;
  }
  var po = Ul(!0), _r = Ul(!1), Hs = oi(null), cr = null, Wo = null, Bl = null;
  function Vl() {
    Bl = Wo = cr = null;
  }
  function jl(e) {
    var t = Hs.current;
    xt(Hs), e._currentValue = t;
  }
  function Hl(e, t, i) {
    for (; e !== null; ) {
      var s = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, s !== null && (s.childLanes |= t)) : s !== null && (s.childLanes & t) !== t && (s.childLanes |= t), e === i) break;
      e = e.return;
    }
  }
  function li(e, t) {
    cr = e, Bl = Wo = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (y = !0), e.firstContext = null);
  }
  function Bn(e) {
    var t = e._currentValue;
    if (Bl !== e) if (e = { context: e, memoizedValue: t, next: null }, Wo === null) {
      if (cr === null) throw Error(v(308));
      Wo = e, cr.dependencies = { lanes: 0, firstContext: e };
    } else Wo = Wo.next = e;
    return t;
  }
  var Hr = null;
  function qo(e) {
    Hr === null ? Hr = [e] : Hr.push(e);
  }
  function Ws(e, t, i, s) {
    var u = t.interleaved;
    return u === null ? (i.next = i, qo(t)) : (i.next = u.next, u.next = i), t.interleaved = i, dr(e, s);
  }
  function dr(e, t) {
    e.lanes |= t;
    var i = e.alternate;
    for (i !== null && (i.lanes |= t), i = e, e = e.return; e !== null; ) e.childLanes |= t, i = e.alternate, i !== null && (i.childLanes |= t), i = e, e = e.return;
    return i.tag === 3 ? i.stateNode : null;
  }
  var Wr = !1;
  function qs(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Wl(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function qr(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Kr(e, t, i) {
    var s = e.updateQueue;
    if (s === null) return null;
    if (s = s.shared, (ht & 2) !== 0) {
      var u = s.pending;
      return u === null ? t.next = t : (t.next = u.next, u.next = t), s.pending = t, dr(e, i);
    }
    return u = s.interleaved, u === null ? (t.next = t, qo(s)) : (t.next = u.next, u.next = t), s.interleaved = t, dr(e, i);
  }
  function ql(e, t, i) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (i & 4194240) !== 0)) {
      var s = t.lanes;
      s &= e.pendingLanes, i |= s, t.lanes = i, ua(e, i);
    }
  }
  function Ks(e, t) {
    var i = e.updateQueue, s = e.alternate;
    if (s !== null && (s = s.updateQueue, i === s)) {
      var u = null, p = null;
      if (i = i.firstBaseUpdate, i !== null) {
        do {
          var O = { eventTime: i.eventTime, lane: i.lane, tag: i.tag, payload: i.payload, callback: i.callback, next: null };
          p === null ? u = p = O : p = p.next = O, i = i.next;
        } while (i !== null);
        p === null ? u = p = t : p = p.next = t;
      } else u = p = t;
      i = { baseState: s.baseState, firstBaseUpdate: u, lastBaseUpdate: p, shared: s.shared, effects: s.effects }, e.updateQueue = i;
      return;
    }
    e = i.lastBaseUpdate, e === null ? i.firstBaseUpdate = t : e.next = t, i.lastBaseUpdate = t;
  }
  function Ko(e, t, i, s) {
    var u = e.updateQueue;
    Wr = !1;
    var p = u.firstBaseUpdate, O = u.lastBaseUpdate, Y = u.shared.pending;
    if (Y !== null) {
      u.shared.pending = null;
      var $ = Y, de = $.next;
      $.next = null, O === null ? p = de : O.next = de, O = $;
      var Se = e.alternate;
      Se !== null && (Se = Se.updateQueue, Y = Se.lastBaseUpdate, Y !== O && (Y === null ? Se.firstBaseUpdate = de : Y.next = de, Se.lastBaseUpdate = $));
    }
    if (p !== null) {
      var Ce = u.baseState;
      O = 0, Se = de = $ = null, Y = p;
      do {
        var _e = Y.lane, Oe = Y.eventTime;
        if ((s & _e) === _e) {
          Se !== null && (Se = Se.next = {
            eventTime: Oe,
            lane: 0,
            tag: Y.tag,
            payload: Y.payload,
            callback: Y.callback,
            next: null
          });
          e: {
            var ze = e, Ge = Y;
            switch (_e = t, Oe = i, Ge.tag) {
              case 1:
                if (ze = Ge.payload, typeof ze == "function") {
                  Ce = ze.call(Oe, Ce, _e);
                  break e;
                }
                Ce = ze;
                break e;
              case 3:
                ze.flags = ze.flags & -65537 | 128;
              case 0:
                if (ze = Ge.payload, _e = typeof ze == "function" ? ze.call(Oe, Ce, _e) : ze, _e == null) break e;
                Ce = U({}, Ce, _e);
                break e;
              case 2:
                Wr = !0;
            }
          }
          Y.callback !== null && Y.lane !== 0 && (e.flags |= 64, _e = u.effects, _e === null ? u.effects = [Y] : _e.push(Y));
        } else Oe = { eventTime: Oe, lane: _e, tag: Y.tag, payload: Y.payload, callback: Y.callback, next: null }, Se === null ? (de = Se = Oe, $ = Ce) : Se = Se.next = Oe, O |= _e;
        if (Y = Y.next, Y === null) {
          if (Y = u.shared.pending, Y === null) break;
          _e = Y, Y = _e.next, _e.next = null, u.lastBaseUpdate = _e, u.shared.pending = null;
        }
      } while (!0);
      if (Se === null && ($ = Ce), u.baseState = $, u.firstBaseUpdate = de, u.lastBaseUpdate = Se, t = u.shared.interleaved, t !== null) {
        u = t;
        do
          O |= u.lane, u = u.next;
        while (u !== t);
      } else p === null && (u.shared.lanes = 0);
      Qs |= O, e.lanes = O, e.memoizedState = Ce;
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
  var be = {}, _t = oi(be), Lt = oi(be), jt = oi(be);
  function en(e) {
    if (e === be) throw Error(v(174));
    return e;
  }
  function Ii(e, t) {
    switch (vt(jt, t), vt(Lt, e), vt(_t, be), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Ln(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Ln(t, e);
    }
    xt(_t), vt(_t, t);
  }
  function At() {
    xt(_t), xt(Lt), xt(jt);
  }
  function Yo(e) {
    en(jt.current);
    var t = en(_t.current), i = Ln(t, e.type);
    t !== i && (vt(Lt, e), vt(_t, i));
  }
  function ai(e) {
    Lt.current === e && (xt(_t), xt(Lt));
  }
  var Ct = oi(0);
  function Xo(e) {
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
  var go = [];
  function En() {
    for (var e = 0; e < go.length; e++) go[e]._workInProgressVersionPrimary = null;
    go.length = 0;
  }
  var Qo = T.ReactCurrentDispatcher, Ys = T.ReactCurrentBatchConfig, Vn = 0, yt = null, Ut = null, Kt = null, Lr = !1, Di = !1, Sr = 0, Kl = 0;
  function Yt() {
    throw Error(v(321));
  }
  function Xs(e, t) {
    if (t === null) return !1;
    for (var i = 0; i < t.length && i < e.length; i++) if (!bn(e[i], t[i])) return !1;
    return !0;
  }
  function bo(e, t, i, s, u, p) {
    if (Vn = p, yt = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Qo.current = e === null || e.memoizedState === null ? vd : Ui, e = i(s, u), Di) {
      p = 0;
      do {
        if (Di = !1, Sr = 0, 25 <= p) throw Error(v(301));
        p += 1, Kt = Ut = null, t.updateQueue = null, Qo.current = Jl, e = i(s, u);
      } while (Di);
    }
    if (Qo.current = es, t = Ut !== null && Ut.next !== null, Vn = 0, Kt = Ut = yt = null, Lr = !1, t) throw Error(v(300));
    return e;
  }
  function Jo() {
    var e = Sr !== 0;
    return Sr = 0, e;
  }
  function Tt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Kt === null ? yt.memoizedState = Kt = e : Kt = Kt.next = e, Kt;
  }
  function tn() {
    if (Ut === null) {
      var e = yt.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ut.next;
    var t = Kt === null ? yt.memoizedState : Kt.next;
    if (t !== null) Kt = t, Ut = e;
    else {
      if (e === null) throw Error(v(310));
      Ut = e, e = { memoizedState: Ut.memoizedState, baseState: Ut.baseState, baseQueue: Ut.baseQueue, queue: Ut.queue, next: null }, Kt === null ? yt.memoizedState = Kt = e : Kt = Kt.next = e;
    }
    return Kt;
  }
  function Pn(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Rn(e) {
    var t = tn(), i = t.queue;
    if (i === null) throw Error(v(311));
    i.lastRenderedReducer = e;
    var s = Ut, u = s.baseQueue, p = i.pending;
    if (p !== null) {
      if (u !== null) {
        var O = u.next;
        u.next = p.next, p.next = O;
      }
      s.baseQueue = u = p, i.pending = null;
    }
    if (u !== null) {
      p = u.next, s = s.baseState;
      var Y = O = null, $ = null, de = p;
      do {
        var Se = de.lane;
        if ((Vn & Se) === Se) $ !== null && ($ = $.next = { lane: 0, action: de.action, hasEagerState: de.hasEagerState, eagerState: de.eagerState, next: null }), s = de.hasEagerState ? de.eagerState : e(s, de.action);
        else {
          var Ce = {
            lane: Se,
            action: de.action,
            hasEagerState: de.hasEagerState,
            eagerState: de.eagerState,
            next: null
          };
          $ === null ? (Y = $ = Ce, O = s) : $ = $.next = Ce, yt.lanes |= Se, Qs |= Se;
        }
        de = de.next;
      } while (de !== null && de !== p);
      $ === null ? O = s : $.next = Y, bn(s, t.memoizedState) || (y = !0), t.memoizedState = s, t.baseState = O, t.baseQueue = $, i.lastRenderedState = s;
    }
    if (e = i.interleaved, e !== null) {
      u = e;
      do
        p = u.lane, yt.lanes |= p, Qs |= p, u = u.next;
      while (u !== e);
    } else u === null && (i.lanes = 0);
    return [t.memoizedState, i.dispatch];
  }
  function Yl(e) {
    var t = tn(), i = t.queue;
    if (i === null) throw Error(v(311));
    i.lastRenderedReducer = e;
    var s = i.dispatch, u = i.pending, p = t.memoizedState;
    if (u !== null) {
      i.pending = null;
      var O = u = u.next;
      do
        p = e(p, O.action), O = O.next;
      while (O !== u);
      bn(p, t.memoizedState) || (y = !0), t.memoizedState = p, t.baseQueue === null && (t.baseState = p), i.lastRenderedState = p;
    }
    return [p, s];
  }
  function Xl() {
  }
  function Ql(e, t) {
    var i = yt, s = tn(), u = t(), p = !bn(s.memoizedState, u);
    if (p && (s.memoizedState = u, y = !0), s = s.queue, Va(Ga.bind(null, i, s, e), [e]), s.getSnapshot !== t || p || Kt !== null && Kt.memoizedState.tag & 1) {
      if (i.flags |= 2048, Zo(9, ui.bind(null, i, s, u, t), void 0, null), Nn === null) throw Error(v(349));
      (Vn & 30) !== 0 || xc(i, t, u);
    }
    return u;
  }
  function xc(e, t, i) {
    e.flags |= 16384, e = { getSnapshot: t, value: i }, t = yt.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, yt.updateQueue = t, t.stores = [e]) : (i = t.stores, i === null ? t.stores = [e] : i.push(e));
  }
  function ui(e, t, i, s) {
    t.value = i, t.getSnapshot = s, Ua(t) && bl(e);
  }
  function Ga(e, t, i) {
    return i(function() {
      Ua(t) && bl(e);
    });
  }
  function Ua(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var i = t();
      return !bn(e, i);
    } catch {
      return !0;
    }
  }
  function bl(e) {
    var t = dr(e, 1);
    t !== null && hi(t, e, 1, -1);
  }
  function zi(e) {
    var t = Tt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Pn, lastRenderedState: e }, t.queue = e, e = e.dispatch = Tc.bind(null, yt, e), [t.memoizedState, e];
  }
  function Zo(e, t, i, s) {
    return e = { tag: e, create: t, destroy: i, deps: s, next: null }, t = yt.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, yt.updateQueue = t, t.lastEffect = e.next = e) : (i = t.lastEffect, i === null ? t.lastEffect = e.next = e : (s = i.next, i.next = e, e.next = s, t.lastEffect = e)), e;
  }
  function Ba() {
    return tn().memoizedState;
  }
  function $o(e, t, i, s) {
    var u = Tt();
    yt.flags |= e, u.memoizedState = Zo(1 | t, i, void 0, s === void 0 ? null : s);
  }
  function mo(e, t, i, s) {
    var u = tn();
    s = s === void 0 ? null : s;
    var p = void 0;
    if (Ut !== null) {
      var O = Ut.memoizedState;
      if (p = O.destroy, s !== null && Xs(s, O.deps)) {
        u.memoizedState = Zo(t, i, p, s);
        return;
      }
    }
    yt.flags |= e, u.memoizedState = Zo(1 | t, i, p, s);
  }
  function Cc(e, t) {
    return $o(8390656, 8, e, t);
  }
  function Va(e, t) {
    return mo(2048, 8, e, t);
  }
  function ja(e, t) {
    return mo(4, 2, e, t);
  }
  function Ha(e, t) {
    return mo(4, 4, e, t);
  }
  function Gi(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function kc(e, t, i) {
    return i = i != null ? i.concat([e]) : null, mo(4, 4, Gi.bind(null, t, e), i);
  }
  function ci() {
  }
  function Wa(e, t) {
    var i = tn();
    t = t === void 0 ? null : t;
    var s = i.memoizedState;
    return s !== null && t !== null && Xs(t, s[1]) ? s[0] : (i.memoizedState = [e, t], e);
  }
  function Nt(e, t) {
    var i = tn();
    t = t === void 0 ? null : t;
    var s = i.memoizedState;
    return s !== null && t !== null && Xs(t, s[1]) ? s[0] : (e = e(), i.memoizedState = [e, t], e);
  }
  function Ec(e, t, i) {
    return (Vn & 21) === 0 ? (e.baseState && (e.baseState = !1, y = !0), e.memoizedState = i) : (bn(i, t) || (i = aa(), yt.lanes |= i, Qs |= i, e.baseState = !0), t);
  }
  function Pc(e, t) {
    var i = ft;
    ft = i !== 0 && 4 > i ? i : 4, e(!0);
    var s = Ys.transition;
    Ys.transition = {};
    try {
      e(!1), t();
    } finally {
      ft = i, Ys.transition = s;
    }
  }
  function Rc() {
    return tn().memoizedState;
  }
  function yd(e, t, i) {
    var s = ls(e);
    if (i = { lane: s, action: i, hasEagerState: !1, eagerState: null, next: null }, qa(e)) Nc(t, i);
    else if (i = Ws(e, t, i, s), i !== null) {
      var u = hr();
      hi(i, e, s, u), fr(i, t, s);
    }
  }
  function Tc(e, t, i) {
    var s = ls(e), u = { lane: s, action: i, hasEagerState: !1, eagerState: null, next: null };
    if (qa(e)) Nc(t, u);
    else {
      var p = e.alternate;
      if (e.lanes === 0 && (p === null || p.lanes === 0) && (p = t.lastRenderedReducer, p !== null)) try {
        var O = t.lastRenderedState, Y = p(O, i);
        if (u.hasEagerState = !0, u.eagerState = Y, bn(Y, O)) {
          var $ = t.interleaved;
          $ === null ? (u.next = u, qo(t)) : (u.next = $.next, $.next = u), t.interleaved = u;
          return;
        }
      } catch {
      } finally {
      }
      i = Ws(e, t, u, s), i !== null && (u = hr(), hi(i, e, s, u), fr(i, t, s));
    }
  }
  function qa(e) {
    var t = e.alternate;
    return e === yt || t !== null && t === yt;
  }
  function Nc(e, t) {
    Di = Lr = !0;
    var i = e.pending;
    i === null ? t.next = t : (t.next = i.next, i.next = t), e.pending = t;
  }
  function fr(e, t, i) {
    if ((i & 4194240) !== 0) {
      var s = t.lanes;
      s &= e.pendingLanes, i |= s, t.lanes = i, ua(e, i);
    }
  }
  var es = { readContext: Bn, useCallback: Yt, useContext: Yt, useEffect: Yt, useImperativeHandle: Yt, useInsertionEffect: Yt, useLayoutEffect: Yt, useMemo: Yt, useReducer: Yt, useRef: Yt, useState: Yt, useDebugValue: Yt, useDeferredValue: Yt, useTransition: Yt, useMutableSource: Yt, useSyncExternalStore: Yt, useId: Yt, unstable_isNewReconciler: !1 }, vd = { readContext: Bn, useCallback: function(e, t) {
    return Tt().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: Bn, useEffect: Cc, useImperativeHandle: function(e, t, i) {
    return i = i != null ? i.concat([e]) : null, $o(
      4194308,
      4,
      Gi.bind(null, t, e),
      i
    );
  }, useLayoutEffect: function(e, t) {
    return $o(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return $o(4, 2, e, t);
  }, useMemo: function(e, t) {
    var i = Tt();
    return t = t === void 0 ? null : t, e = e(), i.memoizedState = [e, t], e;
  }, useReducer: function(e, t, i) {
    var s = Tt();
    return t = i !== void 0 ? i(t) : t, s.memoizedState = s.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, s.queue = e, e = e.dispatch = yd.bind(null, yt, e), [s.memoizedState, e];
  }, useRef: function(e) {
    var t = Tt();
    return e = { current: e }, t.memoizedState = e;
  }, useState: zi, useDebugValue: ci, useDeferredValue: function(e) {
    return Tt().memoizedState = e;
  }, useTransition: function() {
    var e = zi(!1), t = e[0];
    return e = Pc.bind(null, e[1]), Tt().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, i) {
    var s = yt, u = Tt();
    if (gt) {
      if (i === void 0) throw Error(v(407));
      i = i();
    } else {
      if (i = t(), Nn === null) throw Error(v(349));
      (Vn & 30) !== 0 || xc(s, t, i);
    }
    u.memoizedState = i;
    var p = { value: i, getSnapshot: t };
    return u.queue = p, Cc(Ga.bind(
      null,
      s,
      p,
      e
    ), [e]), s.flags |= 2048, Zo(9, ui.bind(null, s, p, i, t), void 0, null), i;
  }, useId: function() {
    var e = Tt(), t = Nn.identifierPrefix;
    if (gt) {
      var i = Ft, s = lr;
      i = (s & ~(1 << 32 - nt(s) - 1)).toString(32) + i, t = ":" + t + "R" + i, i = Sr++, 0 < i && (t += "H" + i.toString(32)), t += ":";
    } else i = Kl++, t = ":" + t + "r" + i.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, Ui = {
    readContext: Bn,
    useCallback: Wa,
    useContext: Bn,
    useEffect: Va,
    useImperativeHandle: kc,
    useInsertionEffect: ja,
    useLayoutEffect: Ha,
    useMemo: Nt,
    useReducer: Rn,
    useRef: Ba,
    useState: function() {
      return Rn(Pn);
    },
    useDebugValue: ci,
    useDeferredValue: function(e) {
      var t = tn();
      return Ec(t, Ut.memoizedState, e);
    },
    useTransition: function() {
      var e = Rn(Pn)[0], t = tn().memoizedState;
      return [e, t];
    },
    useMutableSource: Xl,
    useSyncExternalStore: Ql,
    useId: Rc,
    unstable_isNewReconciler: !1
  }, Jl = { readContext: Bn, useCallback: Wa, useContext: Bn, useEffect: Va, useImperativeHandle: kc, useInsertionEffect: ja, useLayoutEffect: Ha, useMemo: Nt, useReducer: Yl, useRef: Ba, useState: function() {
    return Yl(Pn);
  }, useDebugValue: ci, useDeferredValue: function(e) {
    var t = tn();
    return Ut === null ? t.memoizedState = e : Ec(t, Ut.memoizedState, e);
  }, useTransition: function() {
    var e = Yl(Pn)[0], t = tn().memoizedState;
    return [e, t];
  }, useMutableSource: Xl, useSyncExternalStore: Ql, useId: Rc, unstable_isNewReconciler: !1 };
  function Sn(e, t) {
    if (e && e.defaultProps) {
      t = U({}, t), e = e.defaultProps;
      for (var i in e) t[i] === void 0 && (t[i] = e[i]);
      return t;
    }
    return t;
  }
  function ts(e, t, i, s) {
    t = e.memoizedState, i = i(s, t), i = i == null ? t : U({}, t, i), e.memoizedState = i, e.lanes === 0 && (e.updateQueue.baseState = i);
  }
  var ns = { isMounted: function(e) {
    return (e = e._reactInternals) ? Ot(e) === e : !1;
  }, enqueueSetState: function(e, t, i) {
    e = e._reactInternals;
    var s = hr(), u = ls(e), p = qr(s, u);
    p.payload = t, i != null && (p.callback = i), t = Kr(e, p, u), t !== null && (hi(t, e, u, s), ql(t, e, u));
  }, enqueueReplaceState: function(e, t, i) {
    e = e._reactInternals;
    var s = hr(), u = ls(e), p = qr(s, u);
    p.tag = 1, p.payload = t, i != null && (p.callback = i), t = Kr(e, p, u), t !== null && (hi(t, e, u, s), ql(t, e, u));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var i = hr(), s = ls(e), u = qr(i, s);
    u.tag = 2, t != null && (u.callback = t), t = Kr(e, u, s), t !== null && (hi(t, e, s, i), ql(t, e, s));
  } };
  function Zl(e, t, i, s, u, p, O) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(s, p, O) : t.prototype && t.prototype.isPureReactComponent ? !Zi(i, s) || !Zi(u, p) : !0;
  }
  function Mc(e, t, i) {
    var s = !1, u = Vr, p = t.contextType;
    return typeof p == "object" && p !== null ? p = Bn(p) : (u = kn(t) ? Mi : _n.current, s = t.contextTypes, p = (s = s != null) ? lo(e, u) : Vr), t = new t(i, p), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = ns, e.stateNode = t, t._reactInternals = e, s && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = u, e.__reactInternalMemoizedMaskedChildContext = p), t;
  }
  function Ka(e, t, i, s) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(i, s), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(i, s), t.state !== e && ns.enqueueReplaceState(t, t.state, null);
  }
  function $l(e, t, i, s) {
    var u = e.stateNode;
    u.props = i, u.state = e.memoizedState, u.refs = {}, qs(e);
    var p = t.contextType;
    typeof p == "object" && p !== null ? u.context = Bn(p) : (p = kn(t) ? Mi : _n.current, u.context = lo(e, p)), u.state = e.memoizedState, p = t.getDerivedStateFromProps, typeof p == "function" && (ts(e, t, p, i), u.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (t = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), t !== u.state && ns.enqueueReplaceState(u, u.state, null), Ko(e, i, u, s), u.state = e.memoizedState), typeof u.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function yo(e, t) {
    try {
      var i = "", s = t;
      do
        i += pe(s), s = s.return;
      while (s);
      var u = i;
    } catch (p) {
      u = `
Error generating stack: ` + p.message + `
` + p.stack;
    }
    return { value: e, source: t, stack: u, digest: null };
  }
  function ea(e, t, i) {
    return { value: e, source: null, stack: i ?? null, digest: t ?? null };
  }
  function rs(e, t) {
    try {
      console.error(t.value);
    } catch (i) {
      setTimeout(function() {
        throw i;
      });
    }
  }
  var _d = typeof WeakMap == "function" ? WeakMap : Map;
  function Fc(e, t, i) {
    i = qr(-1, i), i.tag = 3, i.payload = { element: null };
    var s = t.value;
    return i.callback = function() {
      Dc || (Dc = !0, Nd = s), rs(e, t);
    }, i;
  }
  function n(e, t, i) {
    i = qr(-1, i), i.tag = 3;
    var s = e.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var u = t.value;
      i.payload = function() {
        return s(u);
      }, i.callback = function() {
        rs(e, t);
      };
    }
    var p = e.stateNode;
    return p !== null && typeof p.componentDidCatch == "function" && (i.callback = function() {
      rs(e, t), typeof s != "function" && (os === null ? os = /* @__PURE__ */ new Set([this]) : os.add(this));
      var O = t.stack;
      this.componentDidCatch(t.value, { componentStack: O !== null ? O : "" });
    }), i;
  }
  function r(e, t, i) {
    var s = e.pingCache;
    if (s === null) {
      s = e.pingCache = new _d();
      var u = /* @__PURE__ */ new Set();
      s.set(t, u);
    } else u = s.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), s.set(t, u));
    u.has(i) || (u.add(i), e = p1.bind(null, e, t, i), t.then(e, e));
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
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, i.flags |= 131072, i.flags &= -52805, i.tag === 1 && (i.alternate === null ? i.tag = 17 : (t = qr(-1, 1), t.tag = 2, Kr(i, t, 1))), i.lanes |= 1), e) : (e.flags |= 65536, e.lanes = u, e);
  }
  var c = T.ReactCurrentOwner, y = !1;
  function B(e, t, i, s) {
    t.child = e === null ? _r(t, null, i, s) : po(t, e.child, i, s);
  }
  function ne(e, t, i, s, u) {
    i = i.render;
    var p = t.ref;
    return li(t, u), s = bo(e, t, i, s, p, u), i = Jo(), e !== null && !y ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~u, Tn(e, t, u)) : (gt && i && jo(t), t.flags |= 1, B(e, t, s, u), t.child);
  }
  function fe(e, t, i, s, u) {
    if (e === null) {
      var p = i.type;
      return typeof p == "function" && !Dd(p) && p.defaultProps === void 0 && i.compare === null && i.defaultProps === void 0 ? (t.tag = 15, t.type = p, ke(e, t, p, s, u)) : (e = jc(i.type, null, s, t, t.mode, u), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (p = e.child, (e.lanes & u) === 0) {
      var O = p.memoizedProps;
      if (i = i.compare, i = i !== null ? i : Zi, i(O, s) && e.ref === t.ref) return Tn(e, t, u);
    }
    return t.flags |= 1, e = us(p, s), e.ref = t.ref, e.return = t, t.child = e;
  }
  function ke(e, t, i, s, u) {
    if (e !== null) {
      var p = e.memoizedProps;
      if (Zi(p, s) && e.ref === t.ref) if (y = !1, t.pendingProps = s = p, (e.lanes & u) !== 0) (e.flags & 131072) !== 0 && (y = !0);
      else return t.lanes = e.lanes, Tn(e, t, u);
    }
    return Fe(e, t, i, s, u);
  }
  function Ie(e, t, i) {
    var s = t.pendingProps, u = s.children, p = e !== null ? e.memoizedState : null;
    if (s.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, vt(na, Ar), Ar |= i;
    else {
      if ((i & 1073741824) === 0) return e = p !== null ? p.baseLanes | i : i, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, vt(na, Ar), Ar |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, s = p !== null ? p.baseLanes : i, vt(na, Ar), Ar |= s;
    }
    else p !== null ? (s = p.baseLanes | i, t.memoizedState = null) : s = i, vt(na, Ar), Ar |= s;
    return B(e, t, u, i), t.child;
  }
  function Ke(e, t) {
    var i = t.ref;
    (e === null && i !== null || e !== null && e.ref !== i) && (t.flags |= 512, t.flags |= 2097152);
  }
  function Fe(e, t, i, s, u) {
    var p = kn(i) ? Mi : _n.current;
    return p = lo(t, p), li(t, u), i = bo(e, t, i, s, p, u), s = Jo(), e !== null && !y ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~u, Tn(e, t, u)) : (gt && s && jo(t), t.flags |= 1, B(e, t, i, u), t.child);
  }
  function kt(e, t, i, s, u) {
    if (kn(i)) {
      var p = !0;
      ao(t);
    } else p = !1;
    if (li(t, u), t.stateNode === null) st(e, t), Mc(t, i, s), $l(t, i, s, u), s = !0;
    else if (e === null) {
      var O = t.stateNode, Y = t.memoizedProps;
      O.props = Y;
      var $ = O.context, de = i.contextType;
      typeof de == "object" && de !== null ? de = Bn(de) : (de = kn(i) ? Mi : _n.current, de = lo(t, de));
      var Se = i.getDerivedStateFromProps, Ce = typeof Se == "function" || typeof O.getSnapshotBeforeUpdate == "function";
      Ce || typeof O.UNSAFE_componentWillReceiveProps != "function" && typeof O.componentWillReceiveProps != "function" || (Y !== s || $ !== de) && Ka(t, O, s, de), Wr = !1;
      var _e = t.memoizedState;
      O.state = _e, Ko(t, s, O, u), $ = t.memoizedState, Y !== s || _e !== $ || Cn.current || Wr ? (typeof Se == "function" && (ts(t, i, Se, s), $ = t.memoizedState), (Y = Wr || Zl(t, i, Y, s, _e, $, de)) ? (Ce || typeof O.UNSAFE_componentWillMount != "function" && typeof O.componentWillMount != "function" || (typeof O.componentWillMount == "function" && O.componentWillMount(), typeof O.UNSAFE_componentWillMount == "function" && O.UNSAFE_componentWillMount()), typeof O.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof O.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = s, t.memoizedState = $), O.props = s, O.state = $, O.context = de, s = Y) : (typeof O.componentDidMount == "function" && (t.flags |= 4194308), s = !1);
    } else {
      O = t.stateNode, Wl(e, t), Y = t.memoizedProps, de = t.type === t.elementType ? Y : Sn(t.type, Y), O.props = de, Ce = t.pendingProps, _e = O.context, $ = i.contextType, typeof $ == "object" && $ !== null ? $ = Bn($) : ($ = kn(i) ? Mi : _n.current, $ = lo(t, $));
      var Oe = i.getDerivedStateFromProps;
      (Se = typeof Oe == "function" || typeof O.getSnapshotBeforeUpdate == "function") || typeof O.UNSAFE_componentWillReceiveProps != "function" && typeof O.componentWillReceiveProps != "function" || (Y !== Ce || _e !== $) && Ka(t, O, s, $), Wr = !1, _e = t.memoizedState, O.state = _e, Ko(t, s, O, u);
      var ze = t.memoizedState;
      Y !== Ce || _e !== ze || Cn.current || Wr ? (typeof Oe == "function" && (ts(t, i, Oe, s), ze = t.memoizedState), (de = Wr || Zl(t, i, de, s, _e, ze, $) || !1) ? (Se || typeof O.UNSAFE_componentWillUpdate != "function" && typeof O.componentWillUpdate != "function" || (typeof O.componentWillUpdate == "function" && O.componentWillUpdate(s, ze, $), typeof O.UNSAFE_componentWillUpdate == "function" && O.UNSAFE_componentWillUpdate(s, ze, $)), typeof O.componentDidUpdate == "function" && (t.flags |= 4), typeof O.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof O.componentDidUpdate != "function" || Y === e.memoizedProps && _e === e.memoizedState || (t.flags |= 4), typeof O.getSnapshotBeforeUpdate != "function" || Y === e.memoizedProps && _e === e.memoizedState || (t.flags |= 1024), t.memoizedProps = s, t.memoizedState = ze), O.props = s, O.state = ze, O.context = $, s = de) : (typeof O.componentDidUpdate != "function" || Y === e.memoizedProps && _e === e.memoizedState || (t.flags |= 4), typeof O.getSnapshotBeforeUpdate != "function" || Y === e.memoizedProps && _e === e.memoizedState || (t.flags |= 1024), s = !1);
    }
    return mt(e, t, i, s, p, u);
  }
  function mt(e, t, i, s, u, p) {
    Ke(e, t);
    var O = (t.flags & 128) !== 0;
    if (!s && !O) return u && _c(t, i, !1), Tn(e, t, p);
    s = t.stateNode, c.current = t;
    var Y = O && typeof i.getDerivedStateFromError != "function" ? null : s.render();
    return t.flags |= 1, e !== null && O ? (t.child = po(t, e.child, null, p), t.child = po(t, null, Y, p)) : B(e, t, Y, p), t.memoizedState = s.state, u && _c(t, i, !0), t.child;
  }
  function jn(e) {
    var t = e.stateNode;
    t.pendingContext ? Oa(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Oa(e, t.context, !1), Ii(e, t.containerInfo);
  }
  function Yr(e, t, i, s, u) {
    return ho(), js(u), t.flags |= 256, B(e, t, i, s), t.child;
  }
  var ce = { dehydrated: null, treeContext: null, retryLane: 0 };
  function se(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function he(e, t, i) {
    var s = t.pendingProps, u = Ct.current, p = !1, O = (t.flags & 128) !== 0, Y;
    if ((Y = O) || (Y = e !== null && e.memoizedState === null ? !1 : (u & 2) !== 0), Y ? (p = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (u |= 1), vt(Ct, u & 1), e === null)
      return Ho(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (O = s.children, e = s.fallback, p ? (s = t.mode, p = t.child, O = { mode: "hidden", children: O }, (s & 1) === 0 && p !== null ? (p.childLanes = 0, p.pendingProps = O) : p = Hc(O, s, 0, null), e = $s(e, s, i, null), p.return = t, e.return = t, p.sibling = e, t.child = p, t.child.memoizedState = se(i), t.memoizedState = ce, e) : Le(t, O));
    if (u = e.memoizedState, u !== null && (Y = u.dehydrated, Y !== null)) return Ze(e, t, O, s, Y, u, i);
    if (p) {
      p = s.fallback, O = t.mode, u = e.child, Y = u.sibling;
      var $ = { mode: "hidden", children: s.children };
      return (O & 1) === 0 && t.child !== u ? (s = t.child, s.childLanes = 0, s.pendingProps = $, t.deletions = null) : (s = us(u, $), s.subtreeFlags = u.subtreeFlags & 14680064), Y !== null ? p = us(Y, p) : (p = $s(p, O, i, null), p.flags |= 2), p.return = t, s.return = t, s.sibling = p, t.child = s, s = p, p = t.child, O = e.child.memoizedState, O = O === null ? se(i) : { baseLanes: O.baseLanes | i, cachePool: null, transitions: O.transitions }, p.memoizedState = O, p.childLanes = e.childLanes & ~i, t.memoizedState = ce, s;
    }
    return p = e.child, e = p.sibling, s = us(p, { mode: "visible", children: s.children }), (t.mode & 1) === 0 && (s.lanes = i), s.return = t, s.sibling = null, e !== null && (i = t.deletions, i === null ? (t.deletions = [e], t.flags |= 16) : i.push(e)), t.child = s, t.memoizedState = null, s;
  }
  function Le(e, t) {
    return t = Hc({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function Ve(e, t, i, s) {
    return s !== null && js(s), po(t, e.child, null, i), e = Le(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function Ze(e, t, i, s, u, p, O) {
    if (i)
      return t.flags & 256 ? (t.flags &= -257, s = ea(Error(v(422))), Ve(e, t, O, s)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (p = s.fallback, u = t.mode, s = Hc({ mode: "visible", children: s.children }, u, 0, null), p = $s(p, u, O, null), p.flags |= 2, s.return = t, p.return = t, s.sibling = p, t.child = s, (t.mode & 1) !== 0 && po(t, e.child, null, O), t.child.memoizedState = se(O), t.memoizedState = ce, p);
    if ((t.mode & 1) === 0) return Ve(e, t, O, null);
    if (u.data === "$!") {
      if (s = u.nextSibling && u.nextSibling.dataset, s) var Y = s.dgst;
      return s = Y, p = Error(v(419)), s = ea(p, s, void 0), Ve(e, t, O, s);
    }
    if (Y = (O & e.childLanes) !== 0, y || Y) {
      if (s = Nn, s !== null) {
        switch (O & -O) {
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
        u = (u & (s.suspendedLanes | O)) !== 0 ? 0 : u, u !== 0 && u !== p.retryLane && (p.retryLane = u, dr(e, u), hi(s, e, u, -1));
      }
      return Id(), s = ea(Error(v(421))), Ve(e, t, O, s);
    }
    return u.data === "$?" ? (t.flags |= 128, t.child = e.child, t = g1.bind(null, e), u._reactRetry = t, null) : (e = p.treeContext, Ne = Ur(u.nextSibling), ar = t, gt = !0, ur = null, e !== null && (Gn[Un++] = lr, Gn[Un++] = Ft, Gn[Un++] = Oi, lr = e.id, Ft = e.overflow, Oi = t), t = Le(t, s.children), t.flags |= 4096, t);
  }
  function Ye(e, t, i) {
    e.lanes |= t;
    var s = e.alternate;
    s !== null && (s.lanes |= t), Hl(e.return, t, i);
  }
  function ut(e, t, i, s, u) {
    var p = e.memoizedState;
    p === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: s, tail: i, tailMode: u } : (p.isBackwards = t, p.rendering = null, p.renderingStartTime = 0, p.last = s, p.tail = i, p.tailMode = u);
  }
  function nn(e, t, i) {
    var s = t.pendingProps, u = s.revealOrder, p = s.tail;
    if (B(e, t, s.children, i), s = Ct.current, (s & 2) !== 0) s = s & 1 | 2, t.flags |= 128;
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
        for (i = t.child, u = null; i !== null; ) e = i.alternate, e !== null && Xo(e) === null && (u = i), i = i.sibling;
        i = u, i === null ? (u = t.child, t.child = null) : (u = i.sibling, i.sibling = null), ut(t, !1, u, i, p);
        break;
      case "backwards":
        for (i = null, u = t.child, t.child = null; u !== null; ) {
          if (e = u.alternate, e !== null && Xo(e) === null) {
            t.child = u;
            break;
          }
          e = u.sibling, u.sibling = i, i = u, u = e;
        }
        ut(t, !0, i, null, p);
        break;
      case "together":
        ut(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function st(e, t) {
    (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function Tn(e, t, i) {
    if (e !== null && (t.dependencies = e.dependencies), Qs |= t.lanes, (i & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(v(153));
    if (t.child !== null) {
      for (e = t.child, i = us(e, e.pendingProps), t.child = i, i.return = t; e.sibling !== null; ) e = e.sibling, i = i.sibling = us(e, e.pendingProps), i.return = t;
      i.sibling = null;
    }
    return t.child;
  }
  function Sd(e, t, i) {
    switch (t.tag) {
      case 3:
        jn(t), ho();
        break;
      case 5:
        Yo(t);
        break;
      case 1:
        kn(t.type) && ao(t);
        break;
      case 4:
        Ii(t, t.stateNode.containerInfo);
        break;
      case 10:
        var s = t.type._context, u = t.memoizedProps.value;
        vt(Hs, s._currentValue), s._currentValue = u;
        break;
      case 13:
        if (s = t.memoizedState, s !== null)
          return s.dehydrated !== null ? (vt(Ct, Ct.current & 1), t.flags |= 128, null) : (i & t.child.childLanes) !== 0 ? he(e, t, i) : (vt(Ct, Ct.current & 1), e = Tn(e, t, i), e !== null ? e.sibling : null);
        vt(Ct, Ct.current & 1);
        break;
      case 19:
        if (s = (i & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (s) return nn(e, t, i);
          t.flags |= 128;
        }
        if (u = t.memoizedState, u !== null && (u.rendering = null, u.tail = null, u.lastEffect = null), vt(Ct, Ct.current), s) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, Ie(e, t, i);
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
      e = t.stateNode, en(_t.current);
      var p = null;
      switch (i) {
        case "input":
          u = ot(e, u), s = ot(e, s), p = [];
          break;
        case "select":
          u = U({}, u, { value: void 0 }), s = U({}, s, { value: void 0 }), p = [];
          break;
        case "textarea":
          u = et(e, u), s = et(e, s), p = [];
          break;
        default:
          typeof u.onClick != "function" && typeof s.onClick == "function" && (e.onclick = io);
      }
      pi(i, s);
      var O;
      i = null;
      for (de in u) if (!s.hasOwnProperty(de) && u.hasOwnProperty(de) && u[de] != null) if (de === "style") {
        var Y = u[de];
        for (O in Y) Y.hasOwnProperty(O) && (i || (i = {}), i[O] = "");
      } else de !== "dangerouslySetInnerHTML" && de !== "children" && de !== "suppressContentEditableWarning" && de !== "suppressHydrationWarning" && de !== "autoFocus" && (M.hasOwnProperty(de) ? p || (p = []) : (p = p || []).push(de, null));
      for (de in s) {
        var $ = s[de];
        if (Y = u != null ? u[de] : void 0, s.hasOwnProperty(de) && $ !== Y && ($ != null || Y != null)) if (de === "style") if (Y) {
          for (O in Y) !Y.hasOwnProperty(O) || $ && $.hasOwnProperty(O) || (i || (i = {}), i[O] = "");
          for (O in $) $.hasOwnProperty(O) && Y[O] !== $[O] && (i || (i = {}), i[O] = $[O]);
        } else i || (p || (p = []), p.push(
          de,
          i
        )), i = $;
        else de === "dangerouslySetInnerHTML" ? ($ = $ ? $.__html : void 0, Y = Y ? Y.__html : void 0, $ != null && Y !== $ && (p = p || []).push(de, $)) : de === "children" ? typeof $ != "string" && typeof $ != "number" || (p = p || []).push(de, "" + $) : de !== "suppressContentEditableWarning" && de !== "suppressHydrationWarning" && (M.hasOwnProperty(de) ? ($ != null && de === "onScroll" && wt("scroll", e), p || Y === $ || (p = [])) : (p = p || []).push(de, $));
      }
      i && (p = p || []).push("style", i);
      var de = p;
      (t.updateQueue = de) && (t.flags |= 4);
    }
  }, Pf = function(e, t, i, s) {
    i !== s && (t.flags |= 4);
  };
  function Ya(e, t) {
    if (!gt) switch (e.tailMode) {
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
  function Zn(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, i = 0, s = 0;
    if (t) for (var u = e.child; u !== null; ) i |= u.lanes | u.childLanes, s |= u.subtreeFlags & 14680064, s |= u.flags & 14680064, u.return = e, u = u.sibling;
    else for (u = e.child; u !== null; ) i |= u.lanes | u.childLanes, s |= u.subtreeFlags, s |= u.flags, u.return = e, u = u.sibling;
    return e.subtreeFlags |= s, e.childLanes = i, t;
  }
  function i1(e, t, i) {
    var s = t.pendingProps;
    switch (hn(t), t.tag) {
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
        return Zn(t), null;
      case 1:
        return kn(t.type) && Bo(), Zn(t), null;
      case 3:
        return s = t.stateNode, At(), xt(Cn), xt(_n), En(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), (e === null || e.child === null) && (Vs(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, ur !== null && (Ld(ur), ur = null))), wd(e, t), Zn(t), null;
      case 5:
        ai(t);
        var u = en(jt.current);
        if (i = t.type, e !== null && t.stateNode != null) Ef(e, t, i, s, u), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!s) {
            if (t.stateNode === null) throw Error(v(166));
            return Zn(t), null;
          }
          if (e = en(_t.current), Vs(t)) {
            s = t.stateNode, i = t.type;
            var p = t.memoizedProps;
            switch (s[vr] = t, s[Gs] = p, e = (t.mode & 1) !== 0, i) {
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
                for (u = 0; u < Ri.length; u++) wt(Ri[u], s);
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
                we(s, p), wt("invalid", s);
                break;
              case "select":
                s._wrapperState = { wasMultiple: !!p.multiple }, wt("invalid", s);
                break;
              case "textarea":
                ln(s, p), wt("invalid", s);
            }
            pi(i, p), u = null;
            for (var O in p) if (p.hasOwnProperty(O)) {
              var Y = p[O];
              O === "children" ? typeof Y == "string" ? s.textContent !== Y && (p.suppressHydrationWarning !== !0 && Ds(s.textContent, Y, e), u = ["children", Y]) : typeof Y == "number" && s.textContent !== "" + Y && (p.suppressHydrationWarning !== !0 && Ds(
                s.textContent,
                Y,
                e
              ), u = ["children", "" + Y]) : M.hasOwnProperty(O) && Y != null && O === "onScroll" && wt("scroll", s);
            }
            switch (i) {
              case "input":
                Me(s), St(s, p, !0);
                break;
              case "textarea":
                Me(s), bt(s);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof p.onClick == "function" && (s.onclick = io);
            }
            s = u, t.updateQueue = s, s !== null && (t.flags |= 4);
          } else {
            O = u.nodeType === 9 ? u : u.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = at(i)), e === "http://www.w3.org/1999/xhtml" ? i === "script" ? (e = O.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof s.is == "string" ? e = O.createElement(i, { is: s.is }) : (e = O.createElement(i), i === "select" && (O = e, s.multiple ? O.multiple = !0 : s.size && (O.size = s.size))) : e = O.createElementNS(e, i), e[vr] = t, e[Gs] = s, kf(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (O = an(i, s), i) {
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
                  for (u = 0; u < Ri.length; u++) wt(Ri[u], e);
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
                  we(e, s), u = ot(e, s), wt("invalid", e);
                  break;
                case "option":
                  u = s;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!s.multiple }, u = U({}, s, { value: void 0 }), wt("invalid", e);
                  break;
                case "textarea":
                  ln(e, s), u = et(e, s), wt("invalid", e);
                  break;
                default:
                  u = s;
              }
              pi(i, u), Y = u;
              for (p in Y) if (Y.hasOwnProperty(p)) {
                var $ = Y[p];
                p === "style" ? Ir(e, $) : p === "dangerouslySetInnerHTML" ? ($ = $ ? $.__html : void 0, $ != null && An(e, $)) : p === "children" ? typeof $ == "string" ? (i !== "textarea" || $ !== "") && Dt(e, $) : typeof $ == "number" && Dt(e, "" + $) : p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && p !== "autoFocus" && (M.hasOwnProperty(p) ? $ != null && p === "onScroll" && wt("scroll", e) : $ != null && h(e, p, $, O));
              }
              switch (i) {
                case "input":
                  Me(e), St(e, s, !1);
                  break;
                case "textarea":
                  Me(e), bt(e);
                  break;
                case "option":
                  s.value != null && e.setAttribute("value", "" + ie(s.value));
                  break;
                case "select":
                  e.multiple = !!s.multiple, p = s.value, p != null ? qn(e, !!s.multiple, p, !1) : s.defaultValue != null && qn(
                    e,
                    !!s.multiple,
                    s.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof u.onClick == "function" && (e.onclick = io);
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
        return Zn(t), null;
      case 6:
        if (e && t.stateNode != null) Pf(e, t, e.memoizedProps, s);
        else {
          if (typeof s != "string" && t.stateNode === null) throw Error(v(166));
          if (i = en(jt.current), en(_t.current), Vs(t)) {
            if (s = t.stateNode, i = t.memoizedProps, s[vr] = t, (p = s.nodeValue !== i) && (e = ar, e !== null)) switch (e.tag) {
              case 3:
                Ds(s.nodeValue, i, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Ds(s.nodeValue, i, (e.mode & 1) !== 0);
            }
            p && (t.flags |= 4);
          } else s = (i.nodeType === 9 ? i : i.ownerDocument).createTextNode(s), s[vr] = t, t.stateNode = s;
        }
        return Zn(t), null;
      case 13:
        if (xt(Ct), s = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (gt && Ne !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) Da(), ho(), t.flags |= 98560, p = !1;
          else if (p = Vs(t), s !== null && s.dehydrated !== null) {
            if (e === null) {
              if (!p) throw Error(v(318));
              if (p = t.memoizedState, p = p !== null ? p.dehydrated : null, !p) throw Error(v(317));
              p[vr] = t;
            } else ho(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Zn(t), p = !1;
          } else ur !== null && (Ld(ur), ur = null), p = !0;
          if (!p) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = i, t) : (s = s !== null, s !== (e !== null && e.memoizedState !== null) && s && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (Ct.current & 1) !== 0 ? wn === 0 && (wn = 3) : Id())), t.updateQueue !== null && (t.flags |= 4), Zn(t), null);
      case 4:
        return At(), wd(e, t), e === null && no(t.stateNode.containerInfo), Zn(t), null;
      case 10:
        return jl(t.type._context), Zn(t), null;
      case 17:
        return kn(t.type) && Bo(), Zn(t), null;
      case 19:
        if (xt(Ct), p = t.memoizedState, p === null) return Zn(t), null;
        if (s = (t.flags & 128) !== 0, O = p.rendering, O === null) if (s) Ya(p, !1);
        else {
          if (wn !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (O = Xo(e), O !== null) {
              for (t.flags |= 128, Ya(p, !1), s = O.updateQueue, s !== null && (t.updateQueue = s, t.flags |= 4), t.subtreeFlags = 0, s = i, i = t.child; i !== null; ) p = i, e = s, p.flags &= 14680066, O = p.alternate, O === null ? (p.childLanes = 0, p.lanes = e, p.child = null, p.subtreeFlags = 0, p.memoizedProps = null, p.memoizedState = null, p.updateQueue = null, p.dependencies = null, p.stateNode = null) : (p.childLanes = O.childLanes, p.lanes = O.lanes, p.child = O.child, p.subtreeFlags = 0, p.deletions = null, p.memoizedProps = O.memoizedProps, p.memoizedState = O.memoizedState, p.updateQueue = O.updateQueue, p.type = O.type, e = O.dependencies, p.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), i = i.sibling;
              return vt(Ct, Ct.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          p.tail !== null && Bt() > ra && (t.flags |= 128, s = !0, Ya(p, !1), t.lanes = 4194304);
        }
        else {
          if (!s) if (e = Xo(O), e !== null) {
            if (t.flags |= 128, s = !0, i = e.updateQueue, i !== null && (t.updateQueue = i, t.flags |= 4), Ya(p, !0), p.tail === null && p.tailMode === "hidden" && !O.alternate && !gt) return Zn(t), null;
          } else 2 * Bt() - p.renderingStartTime > ra && i !== 1073741824 && (t.flags |= 128, s = !0, Ya(p, !1), t.lanes = 4194304);
          p.isBackwards ? (O.sibling = t.child, t.child = O) : (i = p.last, i !== null ? i.sibling = O : t.child = O, p.last = O);
        }
        return p.tail !== null ? (t = p.tail, p.rendering = t, p.tail = t.sibling, p.renderingStartTime = Bt(), t.sibling = null, i = Ct.current, vt(Ct, s ? i & 1 | 2 : i & 1), t) : (Zn(t), null);
      case 22:
      case 23:
        return Od(), s = t.memoizedState !== null, e !== null && e.memoizedState !== null !== s && (t.flags |= 8192), s && (t.mode & 1) !== 0 ? (Ar & 1073741824) !== 0 && (Zn(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Zn(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(v(156, t.tag));
  }
  function o1(e, t) {
    switch (hn(t), t.tag) {
      case 1:
        return kn(t.type) && Bo(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return At(), xt(Cn), xt(_n), En(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return ai(t), null;
      case 13:
        if (xt(Ct), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(v(340));
          ho();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return xt(Ct), null;
      case 4:
        return At(), null;
      case 10:
        return jl(t.type._context), null;
      case 22:
      case 23:
        return Od(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Lc = !1, $n = !1, s1 = typeof WeakSet == "function" ? WeakSet : Set, De = null;
  function ta(e, t) {
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
  function l1(e, t) {
    if (Ma = pl, e = Zt(), Do(e)) {
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
          var O = 0, Y = -1, $ = -1, de = 0, Se = 0, Ce = e, _e = null;
          t: for (; ; ) {
            for (var Oe; Ce !== i || u !== 0 && Ce.nodeType !== 3 || (Y = O + u), Ce !== p || s !== 0 && Ce.nodeType !== 3 || ($ = O + s), Ce.nodeType === 3 && (O += Ce.nodeValue.length), (Oe = Ce.firstChild) !== null; )
              _e = Ce, Ce = Oe;
            for (; ; ) {
              if (Ce === e) break t;
              if (_e === i && ++de === u && (Y = O), _e === p && ++Se === s && ($ = O), (Oe = Ce.nextSibling) !== null) break;
              Ce = _e, _e = Ce.parentNode;
            }
            Ce = Oe;
          }
          i = Y === -1 || $ === -1 ? null : { start: Y, end: $ };
        } else i = null;
      }
      i = i || { start: 0, end: 0 };
    } else i = null;
    for (Fa = { focusedElem: e, selectionRange: i }, pl = !1, De = t; De !== null; ) if (t = De, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, De = e;
    else for (; De !== null; ) {
      t = De;
      try {
        var ze = t.alternate;
        if ((t.flags & 1024) !== 0) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (ze !== null) {
              var Ge = ze.memoizedProps, rn = ze.memoizedState, le = t.stateNode, te = le.getSnapshotBeforeUpdate(t.elementType === t.type ? Ge : Sn(t.type, Ge), rn);
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
      } catch (Pe) {
        Xt(t, t.return, Pe);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, De = e;
        break;
      }
      De = t.return;
    }
    return ze = Rf, Rf = !1, ze;
  }
  function Xa(e, t, i) {
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
  function Ac(e, t) {
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
    t !== null && (e.alternate = null, Tf(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[vr], delete t[Gs], delete t[Ol], delete t[yc], delete t[vc])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
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
    if (s === 5 || s === 6) e = e.stateNode, t ? i.nodeType === 8 ? i.parentNode.insertBefore(e, t) : i.insertBefore(e, t) : (i.nodeType === 8 ? (t = i.parentNode, t.insertBefore(e, i)) : (t = i, t.appendChild(e)), i = i._reactRootContainer, i != null || t.onclick !== null || (t.onclick = io));
    else if (s !== 4 && (e = e.child, e !== null)) for (kd(e, t, i), e = e.sibling; e !== null; ) kd(e, t, i), e = e.sibling;
  }
  function Ed(e, t, i) {
    var s = e.tag;
    if (s === 5 || s === 6) e = e.stateNode, t ? i.insertBefore(e, t) : i.appendChild(e);
    else if (s !== 4 && (e = e.child, e !== null)) for (Ed(e, t, i), e = e.sibling; e !== null; ) Ed(e, t, i), e = e.sibling;
  }
  var Hn = null, di = !1;
  function is(e, t, i) {
    for (i = i.child; i !== null; ) Ff(e, t, i), i = i.sibling;
  }
  function Ff(e, t, i) {
    if (gn && typeof gn.onCommitFiberUnmount == "function") try {
      gn.onCommitFiberUnmount(Zr, i);
    } catch {
    }
    switch (i.tag) {
      case 5:
        $n || ta(i, t);
      case 6:
        var s = Hn, u = di;
        Hn = null, is(e, t, i), Hn = s, di = u, Hn !== null && (di ? (e = Hn, i = i.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(i) : e.removeChild(i)) : Hn.removeChild(i.stateNode));
        break;
      case 18:
        Hn !== null && (di ? (e = Hn, i = i.stateNode, e.nodeType === 8 ? Al(e.parentNode, i) : e.nodeType === 1 && Al(e, i), Xn(e)) : Al(Hn, i.stateNode));
        break;
      case 4:
        s = Hn, u = di, Hn = i.stateNode.containerInfo, di = !0, is(e, t, i), Hn = s, di = u;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!$n && (s = i.updateQueue, s !== null && (s = s.lastEffect, s !== null))) {
          u = s = s.next;
          do {
            var p = u, O = p.destroy;
            p = p.tag, O !== void 0 && ((p & 2) !== 0 || (p & 4) !== 0) && xd(i, t, O), u = u.next;
          } while (u !== s);
        }
        is(e, t, i);
        break;
      case 1:
        if (!$n && (ta(i, t), s = i.stateNode, typeof s.componentWillUnmount == "function")) try {
          s.props = i.memoizedProps, s.state = i.memoizedState, s.componentWillUnmount();
        } catch (Y) {
          Xt(i, t, Y);
        }
        is(e, t, i);
        break;
      case 21:
        is(e, t, i);
        break;
      case 22:
        i.mode & 1 ? ($n = (s = $n) || i.memoizedState !== null, is(e, t, i), $n = s) : is(e, t, i);
        break;
      default:
        is(e, t, i);
    }
  }
  function Lf(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var i = e.stateNode;
      i === null && (i = e.stateNode = new s1()), t.forEach(function(s) {
        var u = m1.bind(null, e, s);
        i.has(s) || (i.add(s), s.then(u, u));
      });
    }
  }
  function fi(e, t) {
    var i = t.deletions;
    if (i !== null) for (var s = 0; s < i.length; s++) {
      var u = i[s];
      try {
        var p = e, O = t, Y = O;
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
        Ff(p, O, u), Hn = null, di = !1;
        var $ = u.alternate;
        $ !== null && ($.return = null), u.return = null;
      } catch (de) {
        Xt(u, t, de);
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
        if (fi(t, e), Bi(e), s & 4) {
          try {
            Xa(3, e, e.return), Ac(3, e);
          } catch (Ge) {
            Xt(e, e.return, Ge);
          }
          try {
            Xa(5, e, e.return);
          } catch (Ge) {
            Xt(e, e.return, Ge);
          }
        }
        break;
      case 1:
        fi(t, e), Bi(e), s & 512 && i !== null && ta(i, i.return);
        break;
      case 5:
        if (fi(t, e), Bi(e), s & 512 && i !== null && ta(i, i.return), e.flags & 32) {
          var u = e.stateNode;
          try {
            Dt(u, "");
          } catch (Ge) {
            Xt(e, e.return, Ge);
          }
        }
        if (s & 4 && (u = e.stateNode, u != null)) {
          var p = e.memoizedProps, O = i !== null ? i.memoizedProps : p, Y = e.type, $ = e.updateQueue;
          if (e.updateQueue = null, $ !== null) try {
            Y === "input" && p.type === "radio" && p.name != null && Je(u, p), an(Y, O);
            var de = an(Y, p);
            for (O = 0; O < $.length; O += 2) {
              var Se = $[O], Ce = $[O + 1];
              Se === "style" ? Ir(u, Ce) : Se === "dangerouslySetInnerHTML" ? An(u, Ce) : Se === "children" ? Dt(u, Ce) : h(u, Se, Ce, de);
            }
            switch (Y) {
              case "input":
                Qe(u, p);
                break;
              case "textarea":
                Ht(u, p);
                break;
              case "select":
                var _e = u._wrapperState.wasMultiple;
                u._wrapperState.wasMultiple = !!p.multiple;
                var Oe = p.value;
                Oe != null ? qn(u, !!p.multiple, Oe, !1) : _e !== !!p.multiple && (p.defaultValue != null ? qn(
                  u,
                  !!p.multiple,
                  p.defaultValue,
                  !0
                ) : qn(u, !!p.multiple, p.multiple ? [] : "", !1));
            }
            u[Gs] = p;
          } catch (Ge) {
            Xt(e, e.return, Ge);
          }
        }
        break;
      case 6:
        if (fi(t, e), Bi(e), s & 4) {
          if (e.stateNode === null) throw Error(v(162));
          u = e.stateNode, p = e.memoizedProps;
          try {
            u.nodeValue = p;
          } catch (Ge) {
            Xt(e, e.return, Ge);
          }
        }
        break;
      case 3:
        if (fi(t, e), Bi(e), s & 4 && i !== null && i.memoizedState.isDehydrated) try {
          Xn(t.containerInfo);
        } catch (Ge) {
          Xt(e, e.return, Ge);
        }
        break;
      case 4:
        fi(t, e), Bi(e);
        break;
      case 13:
        fi(t, e), Bi(e), u = e.child, u.flags & 8192 && (p = u.memoizedState !== null, u.stateNode.isHidden = p, !p || u.alternate !== null && u.alternate.memoizedState !== null || (Td = Bt())), s & 4 && Lf(e);
        break;
      case 22:
        if (Se = i !== null && i.memoizedState !== null, e.mode & 1 ? ($n = (de = $n) || Se, fi(t, e), $n = de) : fi(t, e), Bi(e), s & 8192) {
          if (de = e.memoizedState !== null, (e.stateNode.isHidden = de) && !Se && (e.mode & 1) !== 0) for (De = e, Se = e.child; Se !== null; ) {
            for (Ce = De = Se; De !== null; ) {
              switch (_e = De, Oe = _e.child, _e.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Xa(4, _e, _e.return);
                  break;
                case 1:
                  ta(_e, _e.return);
                  var ze = _e.stateNode;
                  if (typeof ze.componentWillUnmount == "function") {
                    s = _e, i = _e.return;
                    try {
                      t = s, ze.props = t.memoizedProps, ze.state = t.memoizedState, ze.componentWillUnmount();
                    } catch (Ge) {
                      Xt(s, i, Ge);
                    }
                  }
                  break;
                case 5:
                  ta(_e, _e.return);
                  break;
                case 22:
                  if (_e.memoizedState !== null) {
                    Df(Ce);
                    continue;
                  }
              }
              Oe !== null ? (Oe.return = _e, De = Oe) : Df(Ce);
            }
            Se = Se.sibling;
          }
          e: for (Se = null, Ce = e; ; ) {
            if (Ce.tag === 5) {
              if (Se === null) {
                Se = Ce;
                try {
                  u = Ce.stateNode, de ? (p = u.style, typeof p.setProperty == "function" ? p.setProperty("display", "none", "important") : p.display = "none") : (Y = Ce.stateNode, $ = Ce.memoizedProps.style, O = $ != null && $.hasOwnProperty("display") ? $.display : null, Y.style.display = Or("display", O));
                } catch (Ge) {
                  Xt(e, e.return, Ge);
                }
              }
            } else if (Ce.tag === 6) {
              if (Se === null) try {
                Ce.stateNode.nodeValue = de ? "" : Ce.memoizedProps;
              } catch (Ge) {
                Xt(e, e.return, Ge);
              }
            } else if ((Ce.tag !== 22 && Ce.tag !== 23 || Ce.memoizedState === null || Ce === e) && Ce.child !== null) {
              Ce.child.return = Ce, Ce = Ce.child;
              continue;
            }
            if (Ce === e) break e;
            for (; Ce.sibling === null; ) {
              if (Ce.return === null || Ce.return === e) break e;
              Se === Ce && (Se = null), Ce = Ce.return;
            }
            Se === Ce && (Se = null), Ce.sibling.return = Ce.return, Ce = Ce.sibling;
          }
        }
        break;
      case 19:
        fi(t, e), Bi(e), s & 4 && Lf(e);
        break;
      case 21:
        break;
      default:
        fi(
          t,
          e
        ), Bi(e);
    }
  }
  function Bi(e) {
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
            s.flags & 32 && (Dt(u, ""), s.flags &= -33);
            var p = Mf(e);
            Ed(e, p, u);
            break;
          case 3:
          case 4:
            var O = s.stateNode.containerInfo, Y = Mf(e);
            kd(e, Y, O);
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
  function a1(e, t, i) {
    De = e, Of(e);
  }
  function Of(e, t, i) {
    for (var s = (e.mode & 1) !== 0; De !== null; ) {
      var u = De, p = u.child;
      if (u.tag === 22 && s) {
        var O = u.memoizedState !== null || Lc;
        if (!O) {
          var Y = u.alternate, $ = Y !== null && Y.memoizedState !== null || $n;
          Y = Lc;
          var de = $n;
          if (Lc = O, ($n = $) && !de) for (De = u; De !== null; ) O = De, $ = O.child, O.tag === 22 && O.memoizedState !== null ? zf(u) : $ !== null ? ($.return = O, De = $) : zf(u);
          for (; p !== null; ) De = p, Of(p), p = p.sibling;
          De = u, Lc = Y, $n = de;
        }
        If(e);
      } else (u.subtreeFlags & 8772) !== 0 && p !== null ? (p.return = u, De = p) : If(e);
    }
  }
  function If(e) {
    for (; De !== null; ) {
      var t = De;
      if ((t.flags & 8772) !== 0) {
        var i = t.alternate;
        try {
          if ((t.flags & 8772) !== 0) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              $n || Ac(5, t);
              break;
            case 1:
              var s = t.stateNode;
              if (t.flags & 4 && !$n) if (i === null) s.componentDidMount();
              else {
                var u = t.elementType === t.type ? i.memoizedProps : Sn(t.type, i.memoizedProps);
                s.componentDidUpdate(u, i.memoizedState, s.__reactInternalSnapshotBeforeUpdate);
              }
              var p = t.updateQueue;
              p !== null && Gt(t, p, s);
              break;
            case 3:
              var O = t.updateQueue;
              if (O !== null) {
                if (i = null, t.child !== null) switch (t.child.tag) {
                  case 5:
                    i = t.child.stateNode;
                    break;
                  case 1:
                    i = t.child.stateNode;
                }
                Gt(t, O, i);
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
                var de = t.alternate;
                if (de !== null) {
                  var Se = de.memoizedState;
                  if (Se !== null) {
                    var Ce = Se.dehydrated;
                    Ce !== null && Xn(Ce);
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
          $n || t.flags & 512 && Cd(t);
        } catch (_e) {
          Xt(t, t.return, _e);
        }
      }
      if (t === e) {
        De = null;
        break;
      }
      if (i = t.sibling, i !== null) {
        i.return = t.return, De = i;
        break;
      }
      De = t.return;
    }
  }
  function Df(e) {
    for (; De !== null; ) {
      var t = De;
      if (t === e) {
        De = null;
        break;
      }
      var i = t.sibling;
      if (i !== null) {
        i.return = t.return, De = i;
        break;
      }
      De = t.return;
    }
  }
  function zf(e) {
    for (; De !== null; ) {
      var t = De;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var i = t.return;
            try {
              Ac(4, t);
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
            var O = t.return;
            try {
              Cd(t);
            } catch ($) {
              Xt(t, O, $);
            }
        }
      } catch ($) {
        Xt(t, t.return, $);
      }
      if (t === e) {
        De = null;
        break;
      }
      var Y = t.sibling;
      if (Y !== null) {
        Y.return = t.return, De = Y;
        break;
      }
      De = t.return;
    }
  }
  var u1 = Math.ceil, Oc = T.ReactCurrentDispatcher, Pd = T.ReactCurrentOwner, Xr = T.ReactCurrentBatchConfig, ht = 0, Nn = null, pn = null, Wn = 0, Ar = 0, na = oi(0), wn = 0, Qa = null, Qs = 0, Ic = 0, Rd = 0, ba = null, wr = null, Td = 0, ra = 1 / 0, vo = null, Dc = !1, Nd = null, os = null, zc = !1, ss = null, Gc = 0, Ja = 0, Md = null, Uc = -1, Bc = 0;
  function hr() {
    return (ht & 6) !== 0 ? Bt() : Uc !== -1 ? Uc : Uc = Bt();
  }
  function ls(e) {
    return (e.mode & 1) === 0 ? 1 : (ht & 2) !== 0 && Wn !== 0 ? Wn & -Wn : za.transition !== null ? (Bc === 0 && (Bc = aa()), Bc) : (e = ft, e !== 0 || (e = window.event, e = e === void 0 ? 16 : ec(e.type)), e);
  }
  function hi(e, t, i, s) {
    if (50 < Ja) throw Ja = 0, Md = null, Error(v(185));
    Cs(e, i, s), ((ht & 2) === 0 || e !== Nn) && (e === Nn && ((ht & 2) === 0 && (Ic |= i), wn === 4 && as(e, Wn)), xr(e, s), i === 1 && ht === 0 && (t.mode & 1) === 0 && (ra = Bt() + 500, Vo && Fi()));
  }
  function xr(e, t) {
    var i = e.callbackNode;
    Qu(e, t);
    var s = qi(e, e === Nn ? Wn : 0);
    if (s === 0) i !== null && sl(i), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = s & -s, e.callbackPriority !== t) {
      if (i != null && sl(i), t === 1) e.tag === 0 ? si(Uf.bind(null, e)) : Bs(Uf.bind(null, e)), gc(function() {
        (ht & 6) === 0 && Fi();
      }), i = null;
      else {
        switch (ks(s)) {
          case 1:
            i = Wi;
            break;
          case 4:
            i = ll;
            break;
          case 16:
            i = Co;
            break;
          case 536870912:
            i = al;
            break;
          default:
            i = Co;
        }
        i = Yf(i, Gf.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = i;
    }
  }
  function Gf(e, t) {
    if (Uc = -1, Bc = 0, (ht & 6) !== 0) throw Error(v(327));
    var i = e.callbackNode;
    if (ia() && e.callbackNode !== i) return null;
    var s = qi(e, e === Nn ? Wn : 0);
    if (s === 0) return null;
    if ((s & 30) !== 0 || (s & e.expiredLanes) !== 0 || t) t = Vc(e, s);
    else {
      t = s;
      var u = ht;
      ht |= 2;
      var p = Vf();
      (Nn !== e || Wn !== t) && (vo = null, ra = Bt() + 500, Js(e, t));
      do
        try {
          f1();
          break;
        } catch (Y) {
          Bf(e, Y);
        }
      while (!0);
      Vl(), Oc.current = p, ht = u, pn !== null ? t = 0 : (Nn = null, Wn = 0, t = wn);
    }
    if (t !== 0) {
      if (t === 2 && (u = ko(e), u !== 0 && (s = u, t = Fd(e, u))), t === 1) throw i = Qa, Js(e, 0), as(e, s), xr(e, Bt()), i;
      if (t === 6) as(e, s);
      else {
        if (u = e.current.alternate, (s & 30) === 0 && !c1(u) && (t = Vc(e, s), t === 2 && (p = ko(e), p !== 0 && (s = p, t = Fd(e, p))), t === 1)) throw i = Qa, Js(e, 0), as(e, s), xr(e, Bt()), i;
        switch (e.finishedWork = u, e.finishedLanes = s, t) {
          case 0:
          case 1:
            throw Error(v(345));
          case 2:
            Zs(e, wr, vo);
            break;
          case 3:
            if (as(e, s), (s & 130023424) === s && (t = Td + 500 - Bt(), 10 < t)) {
              if (qi(e, 0) !== 0) break;
              if (u = e.suspendedLanes, (u & s) !== s) {
                hr(), e.pingedLanes |= e.suspendedLanes & u;
                break;
              }
              e.timeoutHandle = sr(Zs.bind(null, e, wr, vo), t);
              break;
            }
            Zs(e, wr, vo);
            break;
          case 4:
            if (as(e, s), (s & 4194240) === s) break;
            for (t = e.eventTimes, u = -1; 0 < s; ) {
              var O = 31 - nt(s);
              p = 1 << O, O = t[O], O > u && (u = O), s &= ~p;
            }
            if (s = u, s = Bt() - s, s = (120 > s ? 120 : 480 > s ? 480 : 1080 > s ? 1080 : 1920 > s ? 1920 : 3e3 > s ? 3e3 : 4320 > s ? 4320 : 1960 * u1(s / 1960)) - s, 10 < s) {
              e.timeoutHandle = sr(Zs.bind(null, e, wr, vo), s);
              break;
            }
            Zs(e, wr, vo);
            break;
          case 5:
            Zs(e, wr, vo);
            break;
          default:
            throw Error(v(329));
        }
      }
    }
    return xr(e, Bt()), e.callbackNode === i ? Gf.bind(null, e) : null;
  }
  function Fd(e, t) {
    var i = ba;
    return e.current.memoizedState.isDehydrated && (Js(e, t).flags |= 256), e = Vc(e, t), e !== 2 && (t = wr, wr = i, t !== null && Ld(t)), e;
  }
  function Ld(e) {
    wr === null ? wr = e : wr.push.apply(wr, e);
  }
  function c1(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var i = t.updateQueue;
        if (i !== null && (i = i.stores, i !== null)) for (var s = 0; s < i.length; s++) {
          var u = i[s], p = u.getSnapshot;
          u = u.value;
          try {
            if (!bn(p(), u)) return !1;
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
  function as(e, t) {
    for (t &= ~Rd, t &= ~Ic, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var i = 31 - nt(t), s = 1 << i;
      e[i] = -1, t &= ~s;
    }
  }
  function Uf(e) {
    if ((ht & 6) !== 0) throw Error(v(327));
    ia();
    var t = qi(e, 0);
    if ((t & 1) === 0) return xr(e, Bt()), null;
    var i = Vc(e, t);
    if (e.tag !== 0 && i === 2) {
      var s = ko(e);
      s !== 0 && (t = s, i = Fd(e, s));
    }
    if (i === 1) throw i = Qa, Js(e, 0), as(e, t), xr(e, Bt()), i;
    if (i === 6) throw Error(v(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Zs(e, wr, vo), xr(e, Bt()), null;
  }
  function Ad(e, t) {
    var i = ht;
    ht |= 1;
    try {
      return e(t);
    } finally {
      ht = i, ht === 0 && (ra = Bt() + 500, Vo && Fi());
    }
  }
  function bs(e) {
    ss !== null && ss.tag === 0 && (ht & 6) === 0 && ia();
    var t = ht;
    ht |= 1;
    var i = Xr.transition, s = ft;
    try {
      if (Xr.transition = null, ft = 1, e) return e();
    } finally {
      ft = s, Xr.transition = i, ht = t, (ht & 6) === 0 && Fi();
    }
  }
  function Od() {
    Ar = na.current, xt(na);
  }
  function Js(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var i = e.timeoutHandle;
    if (i !== -1 && (e.timeoutHandle = -1, Aa(i)), pn !== null) for (i = pn.return; i !== null; ) {
      var s = i;
      switch (hn(s), s.tag) {
        case 1:
          s = s.type.childContextTypes, s != null && Bo();
          break;
        case 3:
          At(), xt(Cn), xt(_n), En();
          break;
        case 5:
          ai(s);
          break;
        case 4:
          At();
          break;
        case 13:
          xt(Ct);
          break;
        case 19:
          xt(Ct);
          break;
        case 10:
          jl(s.type._context);
          break;
        case 22:
        case 23:
          Od();
      }
      i = i.return;
    }
    if (Nn = e, pn = e = us(e.current, null), Wn = Ar = t, wn = 0, Qa = null, Rd = Ic = Qs = 0, wr = ba = null, Hr !== null) {
      for (t = 0; t < Hr.length; t++) if (i = Hr[t], s = i.interleaved, s !== null) {
        i.interleaved = null;
        var u = s.next, p = i.pending;
        if (p !== null) {
          var O = p.next;
          p.next = u, s.next = O;
        }
        i.pending = s;
      }
      Hr = null;
    }
    return e;
  }
  function Bf(e, t) {
    do {
      var i = pn;
      try {
        if (Vl(), Qo.current = es, Lr) {
          for (var s = yt.memoizedState; s !== null; ) {
            var u = s.queue;
            u !== null && (u.pending = null), s = s.next;
          }
          Lr = !1;
        }
        if (Vn = 0, Kt = Ut = yt = null, Di = !1, Sr = 0, Pd.current = null, i === null || i.return === null) {
          wn = 1, Qa = t, pn = null;
          break;
        }
        e: {
          var p = e, O = i.return, Y = i, $ = t;
          if (t = Wn, Y.flags |= 32768, $ !== null && typeof $ == "object" && typeof $.then == "function") {
            var de = $, Se = Y, Ce = Se.tag;
            if ((Se.mode & 1) === 0 && (Ce === 0 || Ce === 11 || Ce === 15)) {
              var _e = Se.alternate;
              _e ? (Se.updateQueue = _e.updateQueue, Se.memoizedState = _e.memoizedState, Se.lanes = _e.lanes) : (Se.updateQueue = null, Se.memoizedState = null);
            }
            var Oe = o(O);
            if (Oe !== null) {
              Oe.flags &= -257, a(Oe, O, Y, p, t), Oe.mode & 1 && r(p, de, t), t = Oe, $ = de;
              var ze = t.updateQueue;
              if (ze === null) {
                var Ge = /* @__PURE__ */ new Set();
                Ge.add($), t.updateQueue = Ge;
              } else ze.add($);
              break e;
            } else {
              if ((t & 1) === 0) {
                r(p, de, t), Id();
                break e;
              }
              $ = Error(v(426));
            }
          } else if (gt && Y.mode & 1) {
            var rn = o(O);
            if (rn !== null) {
              (rn.flags & 65536) === 0 && (rn.flags |= 256), a(rn, O, Y, p, t), js(yo($, Y));
              break e;
            }
          }
          p = $ = yo($, Y), wn !== 4 && (wn = 2), ba === null ? ba = [p] : ba.push(p), p = O;
          do {
            switch (p.tag) {
              case 3:
                p.flags |= 65536, t &= -t, p.lanes |= t;
                var le = Fc(p, $, t);
                Ks(p, le);
                break e;
              case 1:
                Y = $;
                var te = p.type, ue = p.stateNode;
                if ((p.flags & 128) === 0 && (typeof te.getDerivedStateFromError == "function" || ue !== null && typeof ue.componentDidCatch == "function" && (os === null || !os.has(ue)))) {
                  p.flags |= 65536, t &= -t, p.lanes |= t;
                  var Pe = n(p, Y, t);
                  Ks(p, Pe);
                  break e;
                }
            }
            p = p.return;
          } while (p !== null);
        }
        Hf(i);
      } catch (Be) {
        t = Be, pn === i && i !== null && (pn = i = i.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Vf() {
    var e = Oc.current;
    return Oc.current = es, e === null ? es : e;
  }
  function Id() {
    (wn === 0 || wn === 3 || wn === 2) && (wn = 4), Nn === null || (Qs & 268435455) === 0 && (Ic & 268435455) === 0 || as(Nn, Wn);
  }
  function Vc(e, t) {
    var i = ht;
    ht |= 2;
    var s = Vf();
    (Nn !== e || Wn !== t) && (vo = null, Js(e, t));
    do
      try {
        d1();
        break;
      } catch (u) {
        Bf(e, u);
      }
    while (!0);
    if (Vl(), ht = i, Oc.current = s, pn !== null) throw Error(v(261));
    return Nn = null, Wn = 0, wn;
  }
  function d1() {
    for (; pn !== null; ) jf(pn);
  }
  function f1() {
    for (; pn !== null && !ud(); ) jf(pn);
  }
  function jf(e) {
    var t = Kf(e.alternate, e, Ar);
    e.memoizedProps = e.pendingProps, t === null ? Hf(e) : pn = t, Pd.current = null;
  }
  function Hf(e) {
    var t = e;
    do {
      var i = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (i = i1(i, t, Ar), i !== null) {
          pn = i;
          return;
        }
      } else {
        if (i = o1(i, t), i !== null) {
          i.flags &= 32767, pn = i;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          wn = 6, pn = null;
          return;
        }
      }
      if (t = t.sibling, t !== null) {
        pn = t;
        return;
      }
      pn = t = e;
    } while (t !== null);
    wn === 0 && (wn = 5);
  }
  function Zs(e, t, i) {
    var s = ft, u = Xr.transition;
    try {
      Xr.transition = null, ft = 1, h1(e, t, i, s);
    } finally {
      Xr.transition = u, ft = s;
    }
    return null;
  }
  function h1(e, t, i, s) {
    do
      ia();
    while (ss !== null);
    if ((ht & 6) !== 0) throw Error(v(327));
    i = e.finishedWork;
    var u = e.finishedLanes;
    if (i === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, i === e.current) throw Error(v(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var p = i.lanes | i.childLanes;
    if (fd(e, p), e === Nn && (pn = Nn = null, Wn = 0), (i.subtreeFlags & 2064) === 0 && (i.flags & 2064) === 0 || zc || (zc = !0, Yf(Co, function() {
      return ia(), null;
    })), p = (i.flags & 15990) !== 0, (i.subtreeFlags & 15990) !== 0 || p) {
      p = Xr.transition, Xr.transition = null;
      var O = ft;
      ft = 1;
      var Y = ht;
      ht |= 4, Pd.current = null, l1(e, i), Af(i, e), Ls(Fa), pl = !!Ma, Fa = Ma = null, e.current = i, a1(i), cd(), ht = Y, ft = O, Xr.transition = p;
    } else e.current = i;
    if (zc && (zc = !1, ss = e, Gc = u), p = e.pendingLanes, p === 0 && (os = null), Pt(i.stateNode), xr(e, Bt()), t !== null) for (s = e.onRecoverableError, i = 0; i < t.length; i++) u = t[i], s(u.value, { componentStack: u.stack, digest: u.digest });
    if (Dc) throw Dc = !1, e = Nd, Nd = null, e;
    return (Gc & 1) !== 0 && e.tag !== 0 && ia(), p = e.pendingLanes, (p & 1) !== 0 ? e === Md ? Ja++ : (Ja = 0, Md = e) : Ja = 0, Fi(), null;
  }
  function ia() {
    if (ss !== null) {
      var e = ks(Gc), t = Xr.transition, i = ft;
      try {
        if (Xr.transition = null, ft = 16 > e ? 16 : e, ss === null) var s = !1;
        else {
          if (e = ss, ss = null, Gc = 0, (ht & 6) !== 0) throw Error(v(331));
          var u = ht;
          for (ht |= 4, De = e.current; De !== null; ) {
            var p = De, O = p.child;
            if ((De.flags & 16) !== 0) {
              var Y = p.deletions;
              if (Y !== null) {
                for (var $ = 0; $ < Y.length; $++) {
                  var de = Y[$];
                  for (De = de; De !== null; ) {
                    var Se = De;
                    switch (Se.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Xa(8, Se, p);
                    }
                    var Ce = Se.child;
                    if (Ce !== null) Ce.return = Se, De = Ce;
                    else for (; De !== null; ) {
                      Se = De;
                      var _e = Se.sibling, Oe = Se.return;
                      if (Tf(Se), Se === de) {
                        De = null;
                        break;
                      }
                      if (_e !== null) {
                        _e.return = Oe, De = _e;
                        break;
                      }
                      De = Oe;
                    }
                  }
                }
                var ze = p.alternate;
                if (ze !== null) {
                  var Ge = ze.child;
                  if (Ge !== null) {
                    ze.child = null;
                    do {
                      var rn = Ge.sibling;
                      Ge.sibling = null, Ge = rn;
                    } while (Ge !== null);
                  }
                }
                De = p;
              }
            }
            if ((p.subtreeFlags & 2064) !== 0 && O !== null) O.return = p, De = O;
            else e: for (; De !== null; ) {
              if (p = De, (p.flags & 2048) !== 0) switch (p.tag) {
                case 0:
                case 11:
                case 15:
                  Xa(9, p, p.return);
              }
              var le = p.sibling;
              if (le !== null) {
                le.return = p.return, De = le;
                break e;
              }
              De = p.return;
            }
          }
          var te = e.current;
          for (De = te; De !== null; ) {
            O = De;
            var ue = O.child;
            if ((O.subtreeFlags & 2064) !== 0 && ue !== null) ue.return = O, De = ue;
            else e: for (O = te; De !== null; ) {
              if (Y = De, (Y.flags & 2048) !== 0) try {
                switch (Y.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ac(9, Y);
                }
              } catch (Be) {
                Xt(Y, Y.return, Be);
              }
              if (Y === O) {
                De = null;
                break e;
              }
              var Pe = Y.sibling;
              if (Pe !== null) {
                Pe.return = Y.return, De = Pe;
                break e;
              }
              De = Y.return;
            }
          }
          if (ht = u, Fi(), gn && typeof gn.onPostCommitFiberRoot == "function") try {
            gn.onPostCommitFiberRoot(Zr, e);
          } catch {
          }
          s = !0;
        }
        return s;
      } finally {
        ft = i, Xr.transition = t;
      }
    }
    return !1;
  }
  function Wf(e, t, i) {
    t = yo(i, t), t = Fc(e, t, 1), e = Kr(e, t, 1), t = hr(), e !== null && (Cs(e, 1, t), xr(e, t));
  }
  function Xt(e, t, i) {
    if (e.tag === 3) Wf(e, e, i);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        Wf(t, e, i);
        break;
      } else if (t.tag === 1) {
        var s = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && (os === null || !os.has(s))) {
          e = yo(i, e), e = n(t, e, 1), t = Kr(t, e, 1), e = hr(), t !== null && (Cs(t, 1, e), xr(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function p1(e, t, i) {
    var s = e.pingCache;
    s !== null && s.delete(t), t = hr(), e.pingedLanes |= e.suspendedLanes & i, Nn === e && (Wn & i) === i && (wn === 4 || wn === 3 && (Wn & 130023424) === Wn && 500 > Bt() - Td ? Js(e, 0) : Rd |= i), xr(e, t);
  }
  function qf(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = $r, $r <<= 1, ($r & 130023424) === 0 && ($r = 4194304)));
    var i = hr();
    e = dr(e, t), e !== null && (Cs(e, t, i), xr(e, i));
  }
  function g1(e) {
    var t = e.memoizedState, i = 0;
    t !== null && (i = t.retryLane), qf(e, i);
  }
  function m1(e, t) {
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
    else y = !1, gt && (t.flags & 1048576) !== 0 && Sc(t, Ai, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var s = t.type;
        st(e, t), e = t.pendingProps;
        var u = lo(t, _n.current);
        li(t, i), u = bo(null, t, s, e, u, i);
        var p = Jo();
        return t.flags |= 1, typeof u == "object" && u !== null && typeof u.render == "function" && u.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, kn(s) ? (p = !0, ao(t)) : p = !1, t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, qs(t), u.updater = ns, t.stateNode = u, u._reactInternals = t, $l(t, s, e, i), t = mt(null, t, s, !0, p, i)) : (t.tag = 0, gt && p && jo(t), B(null, t, u, i), t = t.child), t;
      case 16:
        s = t.elementType;
        e: {
          switch (st(e, t), e = t.pendingProps, u = s._init, s = u(s._payload), t.type = s, u = t.tag = v1(s), e = Sn(s, e), u) {
            case 0:
              t = Fe(null, t, s, e, i);
              break e;
            case 1:
              t = kt(null, t, s, e, i);
              break e;
            case 11:
              t = ne(null, t, s, e, i);
              break e;
            case 14:
              t = fe(null, t, s, Sn(s.type, e), i);
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
        return s = t.type, u = t.pendingProps, u = t.elementType === s ? u : Sn(s, u), Fe(e, t, s, u, i);
      case 1:
        return s = t.type, u = t.pendingProps, u = t.elementType === s ? u : Sn(s, u), kt(e, t, s, u, i);
      case 3:
        e: {
          if (jn(t), e === null) throw Error(v(387));
          s = t.pendingProps, p = t.memoizedState, u = p.element, Wl(e, t), Ko(t, s, null, i);
          var O = t.memoizedState;
          if (s = O.element, p.isDehydrated) if (p = { element: s, isDehydrated: !1, cache: O.cache, pendingSuspenseBoundaries: O.pendingSuspenseBoundaries, transitions: O.transitions }, t.updateQueue.baseState = p, t.memoizedState = p, t.flags & 256) {
            u = yo(Error(v(423)), t), t = Yr(e, t, s, i, u);
            break e;
          } else if (s !== u) {
            u = yo(Error(v(424)), t), t = Yr(e, t, s, i, u);
            break e;
          } else for (Ne = Ur(t.stateNode.containerInfo.firstChild), ar = t, gt = !0, ur = null, i = _r(t, null, s, i), t.child = i; i; ) i.flags = i.flags & -3 | 4096, i = i.sibling;
          else {
            if (ho(), s === u) {
              t = Tn(e, t, i);
              break e;
            }
            B(e, t, s, i);
          }
          t = t.child;
        }
        return t;
      case 5:
        return Yo(t), e === null && Ho(t), s = t.type, u = t.pendingProps, p = e !== null ? e.memoizedProps : null, O = u.children, La(s, u) ? O = null : p !== null && La(s, p) && (t.flags |= 32), Ke(e, t), B(e, t, O, i), t.child;
      case 6:
        return e === null && Ho(t), null;
      case 13:
        return he(e, t, i);
      case 4:
        return Ii(t, t.stateNode.containerInfo), s = t.pendingProps, e === null ? t.child = po(t, null, s, i) : B(e, t, s, i), t.child;
      case 11:
        return s = t.type, u = t.pendingProps, u = t.elementType === s ? u : Sn(s, u), ne(e, t, s, u, i);
      case 7:
        return B(e, t, t.pendingProps, i), t.child;
      case 8:
        return B(e, t, t.pendingProps.children, i), t.child;
      case 12:
        return B(e, t, t.pendingProps.children, i), t.child;
      case 10:
        e: {
          if (s = t.type._context, u = t.pendingProps, p = t.memoizedProps, O = u.value, vt(Hs, s._currentValue), s._currentValue = O, p !== null) if (bn(p.value, O)) {
            if (p.children === u.children && !Cn.current) {
              t = Tn(e, t, i);
              break e;
            }
          } else for (p = t.child, p !== null && (p.return = t); p !== null; ) {
            var Y = p.dependencies;
            if (Y !== null) {
              O = p.child;
              for (var $ = Y.firstContext; $ !== null; ) {
                if ($.context === s) {
                  if (p.tag === 1) {
                    $ = qr(-1, i & -i), $.tag = 2;
                    var de = p.updateQueue;
                    if (de !== null) {
                      de = de.shared;
                      var Se = de.pending;
                      Se === null ? $.next = $ : ($.next = Se.next, Se.next = $), de.pending = $;
                    }
                  }
                  p.lanes |= i, $ = p.alternate, $ !== null && ($.lanes |= i), Hl(
                    p.return,
                    i,
                    t
                  ), Y.lanes |= i;
                  break;
                }
                $ = $.next;
              }
            } else if (p.tag === 10) O = p.type === t.type ? null : p.child;
            else if (p.tag === 18) {
              if (O = p.return, O === null) throw Error(v(341));
              O.lanes |= i, Y = O.alternate, Y !== null && (Y.lanes |= i), Hl(O, i, t), O = p.sibling;
            } else O = p.child;
            if (O !== null) O.return = p;
            else for (O = p; O !== null; ) {
              if (O === t) {
                O = null;
                break;
              }
              if (p = O.sibling, p !== null) {
                p.return = O.return, O = p;
                break;
              }
              O = O.return;
            }
            p = O;
          }
          B(e, t, u.children, i), t = t.child;
        }
        return t;
      case 9:
        return u = t.type, s = t.pendingProps.children, li(t, i), u = Bn(u), s = s(u), t.flags |= 1, B(e, t, s, i), t.child;
      case 14:
        return s = t.type, u = Sn(s, t.pendingProps), u = Sn(s.type, u), fe(e, t, s, u, i);
      case 15:
        return ke(e, t, t.type, t.pendingProps, i);
      case 17:
        return s = t.type, u = t.pendingProps, u = t.elementType === s ? u : Sn(s, u), st(e, t), t.tag = 1, kn(s) ? (e = !0, ao(t)) : e = !1, li(t, i), Mc(t, s, u), $l(t, s, u, i), mt(null, t, s, !0, e, i);
      case 19:
        return nn(e, t, i);
      case 22:
        return Ie(e, t, i);
    }
    throw Error(v(156, t.tag));
  };
  function Yf(e, t) {
    return ol(e, t);
  }
  function y1(e, t, i, s) {
    this.tag = e, this.key = i, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = s, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Qr(e, t, i, s) {
    return new y1(e, t, i, s);
  }
  function Dd(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function v1(e) {
    if (typeof e == "function") return Dd(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === Z) return 11;
      if (e === X) return 14;
    }
    return 2;
  }
  function us(e, t) {
    var i = e.alternate;
    return i === null ? (i = Qr(e.tag, t, e.key, e.mode), i.elementType = e.elementType, i.type = e.type, i.stateNode = e.stateNode, i.alternate = e, e.alternate = i) : (i.pendingProps = t, i.type = e.type, i.flags = 0, i.subtreeFlags = 0, i.deletions = null), i.flags = e.flags & 14680064, i.childLanes = e.childLanes, i.lanes = e.lanes, i.child = e.child, i.memoizedProps = e.memoizedProps, i.memoizedState = e.memoizedState, i.updateQueue = e.updateQueue, t = e.dependencies, i.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, i.sibling = e.sibling, i.index = e.index, i.ref = e.ref, i;
  }
  function jc(e, t, i, s, u, p) {
    var O = 2;
    if (s = e, typeof e == "function") Dd(e) && (O = 1);
    else if (typeof e == "string") O = 5;
    else e: switch (e) {
      case J:
        return $s(i.children, u, p, t);
      case z:
        O = 8, u |= 8;
        break;
      case G:
        return e = Qr(12, i, t, u | 2), e.elementType = G, e.lanes = p, e;
      case ee:
        return e = Qr(13, i, t, u), e.elementType = ee, e.lanes = p, e;
      case re:
        return e = Qr(19, i, t, u), e.elementType = re, e.lanes = p, e;
      case N:
        return Hc(i, u, p, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case V:
            O = 10;
            break e;
          case Q:
            O = 9;
            break e;
          case Z:
            O = 11;
            break e;
          case X:
            O = 14;
            break e;
          case me:
            O = 16, s = null;
            break e;
        }
        throw Error(v(130, e == null ? e : typeof e, ""));
    }
    return t = Qr(O, i, t, u), t.elementType = e, t.type = s, t.lanes = p, t;
  }
  function $s(e, t, i, s) {
    return e = Qr(7, e, s, t), e.lanes = i, e;
  }
  function Hc(e, t, i, s) {
    return e = Qr(22, e, s, t), e.elementType = N, e.lanes = i, e.stateNode = { isHidden: !1 }, e;
  }
  function zd(e, t, i) {
    return e = Qr(6, e, null, t), e.lanes = i, e;
  }
  function Gd(e, t, i) {
    return t = Qr(4, e.children !== null ? e.children : [], e.key, t), t.lanes = i, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function _1(e, t, i, s, u) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = tr(0), this.expirationTimes = tr(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = tr(0), this.identifierPrefix = s, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null;
  }
  function Ud(e, t, i, s, u, p, O, Y, $) {
    return e = new _1(e, t, i, Y, $), t === 1 ? (t = 1, p === !0 && (t |= 8)) : t = 0, p = Qr(3, null, null, t), e.current = p, p.stateNode = e, p.memoizedState = { element: s, isDehydrated: i, cache: null, transitions: null, pendingSuspenseBoundaries: null }, qs(p), e;
  }
  function S1(e, t, i) {
    var s = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: H, key: s == null ? null : "" + s, children: e, containerInfo: t, implementation: i };
  }
  function Xf(e) {
    if (!e) return Vr;
    e = e._reactInternals;
    e: {
      if (Ot(e) !== e || e.tag !== 1) throw Error(v(170));
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
      if (kn(i)) return Dl(e, i, t);
    }
    return t;
  }
  function Qf(e, t, i, s, u, p, O, Y, $) {
    return e = Ud(i, s, !0, e, u, p, O, Y, $), e.context = Xf(null), i = e.current, s = hr(), u = ls(i), p = qr(s, u), p.callback = t ?? null, Kr(i, p, u), e.current.lanes = u, Cs(e, u, s), xr(e, s), e;
  }
  function Wc(e, t, i, s) {
    var u = t.current, p = hr(), O = ls(u);
    return i = Xf(i), t.context === null ? t.context = i : t.pendingContext = i, t = qr(p, O), t.payload = { element: e }, s = s === void 0 ? null : s, s !== null && (t.callback = s), e = Kr(u, t, O), e !== null && (hi(e, u, O, p), ql(e, u, O)), O;
  }
  function qc(e) {
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
  function w1() {
    return null;
  }
  var Jf = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function Vd(e) {
    this._internalRoot = e;
  }
  Kc.prototype.render = Vd.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(v(409));
    Wc(e, t, null, null);
  }, Kc.prototype.unmount = Vd.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      bs(function() {
        Wc(null, e, null, null);
      }), t[Br] = null;
    }
  };
  function Kc(e) {
    this._internalRoot = e;
  }
  Kc.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Ju();
      e = { blockedOn: null, target: e, priority: t };
      for (var i = 0; i < Gr.length && t !== 0 && t < Gr[i].priority; i++) ;
      Gr.splice(i, 0, e), i === 0 && dl(e);
    }
  };
  function jd(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function Yc(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function Zf() {
  }
  function x1(e, t, i, s, u) {
    if (u) {
      if (typeof s == "function") {
        var p = s;
        s = function() {
          var de = qc(O);
          p.call(de);
        };
      }
      var O = Qf(t, s, e, 0, null, !1, !1, "", Zf);
      return e._reactRootContainer = O, e[Br] = O.current, no(e.nodeType === 8 ? e.parentNode : e), bs(), O;
    }
    for (; u = e.lastChild; ) e.removeChild(u);
    if (typeof s == "function") {
      var Y = s;
      s = function() {
        var de = qc($);
        Y.call(de);
      };
    }
    var $ = Ud(e, 0, !1, null, null, !1, !1, "", Zf);
    return e._reactRootContainer = $, e[Br] = $.current, no(e.nodeType === 8 ? e.parentNode : e), bs(function() {
      Wc(t, $, i, s);
    }), $;
  }
  function Xc(e, t, i, s, u) {
    var p = i._reactRootContainer;
    if (p) {
      var O = p;
      if (typeof u == "function") {
        var Y = u;
        u = function() {
          var $ = qc(O);
          Y.call($);
        };
      }
      Wc(t, O, e, u);
    } else O = x1(i, t, e, u, s);
    return qc(O);
  }
  Eo = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var i = un(t.pendingLanes);
          i !== 0 && (ua(t, i | 1), xr(t, Bt()), (ht & 6) === 0 && (ra = Bt() + 500, Fi()));
        }
        break;
      case 13:
        bs(function() {
          var s = dr(e, 1);
          if (s !== null) {
            var u = hr();
            hi(s, e, 1, u);
          }
        }), Bd(e, 1);
    }
  }, Po = function(e) {
    if (e.tag === 13) {
      var t = dr(e, 134217728);
      if (t !== null) {
        var i = hr();
        hi(t, e, 134217728, i);
      }
      Bd(e, 134217728);
    }
  }, bu = function(e) {
    if (e.tag === 13) {
      var t = ls(e), i = dr(e, t);
      if (i !== null) {
        var s = hr();
        hi(i, e, t, s);
      }
      Bd(e, t);
    }
  }, Ju = function() {
    return ft;
  }, ul = function(e, t) {
    var i = ft;
    try {
      return ft = e, t();
    } finally {
      ft = i;
    }
  }, ms = function(e, t, i) {
    switch (t) {
      case "input":
        if (Qe(e, i), t = i.name, i.type === "radio" && t != null) {
          for (i = e; i.parentNode; ) i = i.parentNode;
          for (i = i.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < i.length; t++) {
            var s = i[t];
            if (s !== e && s.form === e.form) {
              var u = fn(s);
              if (!u) throw Error(v(90));
              je(s), Qe(s, u);
            }
          }
        }
        break;
      case "textarea":
        Ht(e, i);
        break;
      case "select":
        t = i.value, t != null && qn(e, !!i.multiple, t, !1);
    }
  }, Ss = Ad, Vi = bs;
  var C1 = { usingClientEntryPoint: !1, Events: [Us, $t, fn, vs, _s, Ad] }, Za = { findFiberByHostInstance: Ni, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, k1 = { bundleType: Za.bundleType, version: Za.version, rendererPackageName: Za.rendererPackageName, rendererConfig: Za.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: T.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = rl(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: Za.findFiberByHostInstance || w1, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Qc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Qc.isDisabled && Qc.supportsFiber) try {
      Zr = Qc.inject(k1), gn = Qc;
    } catch {
    }
  }
  return Cr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = C1, Cr.createPortal = function(e, t) {
    var i = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!jd(t)) throw Error(v(200));
    return S1(e, t, null, i);
  }, Cr.createRoot = function(e, t) {
    if (!jd(e)) throw Error(v(299));
    var i = !1, s = "", u = Jf;
    return t != null && (t.unstable_strictMode === !0 && (i = !0), t.identifierPrefix !== void 0 && (s = t.identifierPrefix), t.onRecoverableError !== void 0 && (u = t.onRecoverableError)), t = Ud(e, 1, !1, null, null, i, !1, s, u), e[Br] = t.current, no(e.nodeType === 8 ? e.parentNode : e), new Vd(t);
  }, Cr.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(v(188)) : (e = Object.keys(e).join(","), Error(v(268, e)));
    return e = rl(t), e = e === null ? null : e.stateNode, e;
  }, Cr.flushSync = function(e) {
    return bs(e);
  }, Cr.hydrate = function(e, t, i) {
    if (!Yc(t)) throw Error(v(200));
    return Xc(null, e, t, !0, i);
  }, Cr.hydrateRoot = function(e, t, i) {
    if (!jd(e)) throw Error(v(405));
    var s = i != null && i.hydratedSources || null, u = !1, p = "", O = Jf;
    if (i != null && (i.unstable_strictMode === !0 && (u = !0), i.identifierPrefix !== void 0 && (p = i.identifierPrefix), i.onRecoverableError !== void 0 && (O = i.onRecoverableError)), t = Qf(t, null, e, 1, i ?? null, u, !1, p, O), e[Br] = t.current, no(e), s) for (e = 0; e < s.length; e++) i = s[e], u = i._getVersion, u = u(i._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [i, u] : t.mutableSourceEagerHydrationData.push(
      i,
      u
    );
    return new Kc(t);
  }, Cr.render = function(e, t, i) {
    if (!Yc(t)) throw Error(v(200));
    return Xc(null, e, t, !1, i);
  }, Cr.unmountComponentAtNode = function(e) {
    if (!Yc(e)) throw Error(v(40));
    return e._reactRootContainer ? (bs(function() {
      Xc(null, null, e, !1, function() {
        e._reactRootContainer = null, e[Br] = null;
      });
    }), !0) : !1;
  }, Cr.unstable_batchedUpdates = Ad, Cr.unstable_renderSubtreeIntoContainer = function(e, t, i, s) {
    if (!Yc(i)) throw Error(v(200));
    if (e == null || e._reactInternals === void 0) throw Error(v(38));
    return Xc(e, t, i, !1, s);
  }, Cr.version = "18.3.1-next-f1338f8080-20240426", Cr;
}
var lh;
function F1() {
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
  return l(), qd.exports = M1(), qd.exports;
}
var ah;
function L1() {
  if (ah) return bc;
  ah = 1;
  var l = F1();
  return bc.createRoot = l.createRoot, bc.hydrateRoot = l.hydrateRoot, bc;
}
var A1 = L1(), rd = { exports: {} }, eu = {}, Xd = {}, Qd = {}, uh;
function tt() {
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
      isUnminified: /param/.test((function(M) {
      }).toString()),
      dblClickWindow: 400,
      getAngle(M) {
        return l.Konva.angleDeg ? M * d : M;
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
        var M;
        return (M = l.Konva.Transformer) === null || M === void 0 ? void 0 : M.isTransforming();
      },
      isDragReady() {
        return !!l.Konva.DD.node;
      },
      releaseCanvasOnDestroy: !0,
      document: l.glob.document,
      _injectGlobal(M) {
        l.glob.Konva = M;
      }
    };
    const L = (M) => {
      l.Konva[M.prototype.getClassName()] = M;
    };
    l._registerNode = L, l.Konva._injectGlobal(l.Konva);
  })(Qd)), Qd;
}
var bd = {}, ch;
function Qt() {
  return ch || (ch = 1, (function(l) {
    Object.defineProperty(l, "__esModule", { value: !0 }), l.Util = l.Transform = void 0;
    const d = tt();
    class v {
      constructor(T = [1, 0, 0, 1, 0, 0]) {
        this.dirty = !1, this.m = T && T.slice() || [1, 0, 0, 1, 0, 0];
      }
      reset() {
        this.m[0] = 1, this.m[1] = 0, this.m[2] = 0, this.m[3] = 1, this.m[4] = 0, this.m[5] = 0;
      }
      copy() {
        return new v(this.m);
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
        const I = Math.cos(T), H = Math.sin(T), J = this.m[0] * I + this.m[2] * H, z = this.m[1] * I + this.m[3] * H, G = this.m[0] * -H + this.m[2] * I, V = this.m[1] * -H + this.m[3] * I;
        return this.m[0] = J, this.m[1] = z, this.m[2] = G, this.m[3] = V, this;
      }
      getTranslation() {
        return {
          x: this.m[4],
          y: this.m[5]
        };
      }
      skew(T, I) {
        const H = this.m[0] + this.m[2] * I, J = this.m[1] + this.m[3] * I, z = this.m[2] + this.m[0] * T, G = this.m[3] + this.m[1] * T;
        return this.m[0] = H, this.m[1] = J, this.m[2] = z, this.m[3] = G, this;
      }
      multiply(T) {
        const I = this.m[0] * T.m[0] + this.m[2] * T.m[1], H = this.m[1] * T.m[0] + this.m[3] * T.m[1], J = this.m[0] * T.m[2] + this.m[2] * T.m[3], z = this.m[1] * T.m[2] + this.m[3] * T.m[3], G = this.m[0] * T.m[4] + this.m[2] * T.m[5] + this.m[4], V = this.m[1] * T.m[4] + this.m[3] * T.m[5] + this.m[5];
        return this.m[0] = I, this.m[1] = H, this.m[2] = J, this.m[3] = z, this.m[4] = G, this.m[5] = V, this;
      }
      invert() {
        const T = 1 / (this.m[0] * this.m[3] - this.m[1] * this.m[2]), I = this.m[3] * T, H = -this.m[1] * T, J = -this.m[2] * T, z = this.m[0] * T, G = T * (this.m[2] * this.m[5] - this.m[3] * this.m[4]), V = T * (this.m[1] * this.m[4] - this.m[0] * this.m[5]);
        return this.m[0] = I, this.m[1] = H, this.m[2] = J, this.m[3] = z, this.m[4] = G, this.m[5] = V, this;
      }
      getMatrix() {
        return this.m;
      }
      decompose() {
        const T = this.m[0], I = this.m[1], H = this.m[2], J = this.m[3], z = this.m[4], G = this.m[5], V = T * J - I * H, Q = {
          x: z,
          y: G,
          rotation: 0,
          scaleX: 0,
          scaleY: 0,
          skewX: 0,
          skewY: 0
        };
        if (T != 0 || I != 0) {
          const Z = Math.sqrt(T * T + I * I);
          Q.rotation = I > 0 ? Math.acos(T / Z) : -Math.acos(T / Z), Q.scaleX = Z, Q.scaleY = V / Z, Q.skewX = (T * H + I * J) / V, Q.skewY = 0;
        } else if (H != 0 || J != 0) {
          const Z = Math.sqrt(H * H + J * J);
          Q.rotation = Math.PI / 2 - (J > 0 ? Math.acos(-H / Z) : -Math.acos(H / Z)), Q.scaleX = V / Z, Q.scaleY = Z, Q.skewX = 0, Q.skewY = (T * H + I * J) / V;
        }
        return Q.rotation = l.Util._getRotation(Q.rotation), Q;
      }
    }
    l.Transform = v;
    const L = "[object Array]", M = "[object Number]", k = "[object String]", f = "[object Boolean]", g = Math.PI / 180, m = 180 / Math.PI, C = "#", E = "", F = "0", P = "Konva warning: ", S = "Konva error: ", x = "rgb(", R = {
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
    }, A = /rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)/;
    let j = [];
    const w = typeof requestAnimationFrame < "u" && requestAnimationFrame || function(h) {
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
        return Object.prototype.toString.call(h) === M && !isNaN(h) && isFinite(h);
      },
      _isString(h) {
        return Object.prototype.toString.call(h) === k;
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
        j.push(h), j.length === 1 && w(function() {
          const T = j;
          j = [], T.forEach(function(I) {
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
        h = h.replace(C, E);
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
        return C + h;
      },
      getRGB(h) {
        let T;
        return h in R ? (T = R[h], {
          r: T[0],
          g: T[1],
          b: T[2]
        }) : h[0] === C ? this._hexToRgb(h.substring(1)) : h.substr(0, 4) === x ? (T = A.exec(h.replace(/ /g, "")), {
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
          const T = h.split(/ *, */).map((I, H) => I.slice(-1) === "%" ? H === 3 ? parseInt(I) / 100 : parseInt(I) / 100 * 255 : Number(I));
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
          const [T, ...I] = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(h), H = Number(I[0]) / 360, J = Number(I[1]) / 100, z = Number(I[2]) / 100;
          let G, V, Q;
          if (J === 0)
            return Q = z * 255, {
              r: Math.round(Q),
              g: Math.round(Q),
              b: Math.round(Q),
              a: 1
            };
          z < 0.5 ? G = z * (1 + J) : G = z + J - z * J;
          const Z = 2 * z - G, ee = [0, 0, 0];
          for (let re = 0; re < 3; re++)
            V = H + 1 / 3 * -(re - 1), V < 0 && V++, V > 1 && V--, 6 * V < 1 ? Q = Z + (G - Z) * 6 * V : 2 * V < 1 ? Q = G : 3 * V < 2 ? Q = Z + (G - Z) * (2 / 3 - V) * 6 : Q = Z, ee[re] = Q * 255;
          return {
            r: Math.round(ee[0]),
            g: Math.round(ee[1]),
            b: Math.round(ee[2]),
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
        d.Konva.showWarnings && console.warn(P + h);
      },
      each(h, T) {
        for (const I in h)
          T(I, h[I]);
      },
      _inRange(h, T, I) {
        return T <= h && h < I;
      },
      _getProjectionToSegment(h, T, I, H, J, z) {
        let G, V, Q;
        const Z = (h - I) * (h - I) + (T - H) * (T - H);
        if (Z == 0)
          G = h, V = T, Q = (J - I) * (J - I) + (z - H) * (z - H);
        else {
          const ee = ((J - h) * (I - h) + (z - T) * (H - T)) / Z;
          ee < 0 ? (G = h, V = T, Q = (h - J) * (h - J) + (T - z) * (T - z)) : ee > 1 ? (G = I, V = H, Q = (I - J) * (I - J) + (H - z) * (H - z)) : (G = h + ee * (I - h), V = T + ee * (H - T), Q = (G - J) * (G - J) + (V - z) * (V - z));
        }
        return [G, V, Q];
      },
      _getProjectionToLine(h, T, I) {
        const H = l.Util.cloneObject(h);
        let J = Number.MAX_VALUE;
        return T.forEach(function(z, G) {
          if (!I && G === T.length - 1)
            return;
          const V = T[(G + 1) % T.length], Q = l.Util._getProjectionToSegment(z.x, z.y, V.x, V.y, h.x, h.y), Z = Q[0], ee = Q[1], re = Q[2];
          re < J && (H.x = Z, H.y = ee, J = re);
        }), H;
      },
      _prepareArrayForTween(h, T, I) {
        const H = [], J = [];
        if (h.length > T.length) {
          const G = T;
          T = h, h = G;
        }
        for (let G = 0; G < h.length; G += 2)
          H.push({
            x: h[G],
            y: h[G + 1]
          });
        for (let G = 0; G < T.length; G += 2)
          J.push({
            x: T[G],
            y: T[G + 1]
          });
        const z = [];
        return J.forEach(function(G) {
          const V = l.Util._getProjectionToLine(G, H, I);
          z.push(V.x), z.push(V.y);
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
      drawRoundedRectPath(h, T, I, H) {
        let J = 0, z = 0, G = 0, V = 0;
        typeof H == "number" ? J = z = G = V = Math.min(H, T / 2, I / 2) : (J = Math.min(H[0] || 0, T / 2, I / 2), z = Math.min(H[1] || 0, T / 2, I / 2), V = Math.min(H[2] || 0, T / 2, I / 2), G = Math.min(H[3] || 0, T / 2, I / 2)), h.moveTo(J, 0), h.lineTo(T - z, 0), h.arc(T - z, z, z, Math.PI * 3 / 2, 0, !1), h.lineTo(T, I - V), h.arc(T - V, I - V, V, 0, Math.PI / 2, !1), h.lineTo(G, I), h.arc(G, I - G, G, Math.PI / 2, Math.PI, !1), h.lineTo(0, J), h.arc(J, J, J, Math.PI, Math.PI * 3 / 2, !1);
      }
    };
  })(bd)), bd;
}
var tu = {}, _o = {}, So = {}, dh;
function U0() {
  if (dh) return So;
  dh = 1, Object.defineProperty(So, "__esModule", { value: !0 }), So.HitContext = So.SceneContext = So.Context = void 0;
  const l = Qt(), d = tt();
  function v(j) {
    const w = [], h = j.length, T = l.Util;
    for (let I = 0; I < h; I++) {
      let H = j[I];
      T._isNumber(H) ? H = Math.round(H * 1e3) / 1e3 : T._isString(H) || (H = H + ""), w.push(H);
    }
    return w;
  }
  const L = ",", M = "(", k = ")", f = "([", g = "])", m = ";", C = "()", E = "=", F = [
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
  ], P = [
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
  let x = class {
    constructor(w) {
      this.canvas = w, d.Konva.enableTrace && (this.traceArr = [], this._enableTrace());
    }
    fillShape(w) {
      w.fillEnabled() && this._fill(w);
    }
    _fill(w) {
    }
    strokeShape(w) {
      w.hasStroke() && this._stroke(w);
    }
    _stroke(w) {
    }
    fillStrokeShape(w) {
      w.attrs.fillAfterStrokeEnabled ? (this.strokeShape(w), this.fillShape(w)) : (this.fillShape(w), this.strokeShape(w));
    }
    getTrace(w, h) {
      let T = this.traceArr, I = T.length, H = "", J, z, G, V;
      for (J = 0; J < I; J++)
        z = T[J], G = z.method, G ? (V = z.args, H += G, w ? H += C : l.Util._isArray(V[0]) ? H += f + V.join(L) + g : (h && (V = V.map((Q) => typeof Q == "number" ? Math.floor(Q) : Q)), H += M + V.join(L) + k)) : (H += z.property, w || (H += E + z.val)), H += m;
      return H;
    }
    clearTrace() {
      this.traceArr = [];
    }
    _trace(w) {
      let h = this.traceArr, T;
      h.push(w), T = h.length, T >= S && h.shift();
    }
    reset() {
      const w = this.getCanvas().getPixelRatio();
      this.setTransform(1 * w, 0, 0, 1 * w, 0, 0);
    }
    getCanvas() {
      return this.canvas;
    }
    clear(w) {
      const h = this.getCanvas();
      w ? this.clearRect(w.x || 0, w.y || 0, w.width || 0, w.height || 0) : this.clearRect(0, 0, h.getWidth() / h.pixelRatio, h.getHeight() / h.pixelRatio);
    }
    _applyLineCap(w) {
      const h = w.attrs.lineCap;
      h && this.setAttr("lineCap", h);
    }
    _applyOpacity(w) {
      const h = w.getAbsoluteOpacity();
      h !== 1 && this.setAttr("globalAlpha", h);
    }
    _applyLineJoin(w) {
      const h = w.attrs.lineJoin;
      h && this.setAttr("lineJoin", h);
    }
    setAttr(w, h) {
      this._context[w] = h;
    }
    arc(w, h, T, I, H, J) {
      this._context.arc(w, h, T, I, H, J);
    }
    arcTo(w, h, T, I, H) {
      this._context.arcTo(w, h, T, I, H);
    }
    beginPath() {
      this._context.beginPath();
    }
    bezierCurveTo(w, h, T, I, H, J) {
      this._context.bezierCurveTo(w, h, T, I, H, J);
    }
    clearRect(w, h, T, I) {
      this._context.clearRect(w, h, T, I);
    }
    clip(...w) {
      this._context.clip.apply(this._context, w);
    }
    closePath() {
      this._context.closePath();
    }
    createImageData(w, h) {
      const T = arguments;
      if (T.length === 2)
        return this._context.createImageData(w, h);
      if (T.length === 1)
        return this._context.createImageData(w);
    }
    createLinearGradient(w, h, T, I) {
      return this._context.createLinearGradient(w, h, T, I);
    }
    createPattern(w, h) {
      return this._context.createPattern(w, h);
    }
    createRadialGradient(w, h, T, I, H, J) {
      return this._context.createRadialGradient(w, h, T, I, H, J);
    }
    drawImage(w, h, T, I, H, J, z, G, V) {
      const Q = arguments, Z = this._context;
      Q.length === 3 ? Z.drawImage(w, h, T) : Q.length === 5 ? Z.drawImage(w, h, T, I, H) : Q.length === 9 && Z.drawImage(w, h, T, I, H, J, z, G, V);
    }
    ellipse(w, h, T, I, H, J, z, G) {
      this._context.ellipse(w, h, T, I, H, J, z, G);
    }
    isPointInPath(w, h, T, I) {
      return T ? this._context.isPointInPath(T, w, h, I) : this._context.isPointInPath(w, h, I);
    }
    fill(...w) {
      this._context.fill.apply(this._context, w);
    }
    fillRect(w, h, T, I) {
      this._context.fillRect(w, h, T, I);
    }
    strokeRect(w, h, T, I) {
      this._context.strokeRect(w, h, T, I);
    }
    fillText(w, h, T, I) {
      I ? this._context.fillText(w, h, T, I) : this._context.fillText(w, h, T);
    }
    measureText(w) {
      return this._context.measureText(w);
    }
    getImageData(w, h, T, I) {
      return this._context.getImageData(w, h, T, I);
    }
    lineTo(w, h) {
      this._context.lineTo(w, h);
    }
    moveTo(w, h) {
      this._context.moveTo(w, h);
    }
    rect(w, h, T, I) {
      this._context.rect(w, h, T, I);
    }
    roundRect(w, h, T, I, H) {
      this._context.roundRect(w, h, T, I, H);
    }
    putImageData(w, h, T) {
      this._context.putImageData(w, h, T);
    }
    quadraticCurveTo(w, h, T, I) {
      this._context.quadraticCurveTo(w, h, T, I);
    }
    restore() {
      this._context.restore();
    }
    rotate(w) {
      this._context.rotate(w);
    }
    save() {
      this._context.save();
    }
    scale(w, h) {
      this._context.scale(w, h);
    }
    setLineDash(w) {
      this._context.setLineDash ? this._context.setLineDash(w) : "mozDash" in this._context ? this._context.mozDash = w : "webkitLineDash" in this._context && (this._context.webkitLineDash = w);
    }
    getLineDash() {
      return this._context.getLineDash();
    }
    setTransform(w, h, T, I, H, J) {
      this._context.setTransform(w, h, T, I, H, J);
    }
    stroke(w) {
      w ? this._context.stroke(w) : this._context.stroke();
    }
    strokeText(w, h, T, I) {
      this._context.strokeText(w, h, T, I);
    }
    transform(w, h, T, I, H, J) {
      this._context.transform(w, h, T, I, H, J);
    }
    translate(w, h) {
      this._context.translate(w, h);
    }
    _enableTrace() {
      let w = this, h = F.length, T = this.setAttr, I, H;
      const J = function(z) {
        let G = w[z], V;
        w[z] = function() {
          return H = v(Array.prototype.slice.call(arguments, 0)), V = G.apply(w, arguments), w._trace({
            method: z,
            args: H
          }), V;
        };
      };
      for (I = 0; I < h; I++)
        J(F[I]);
      w.setAttr = function() {
        T.apply(w, arguments);
        const z = arguments[0];
        let G = arguments[1];
        (z === "shadowOffsetX" || z === "shadowOffsetY" || z === "shadowBlur") && (G = G / this.canvas.getPixelRatio()), w._trace({
          property: z,
          val: G
        });
      };
    }
    _applyGlobalCompositeOperation(w) {
      const h = w.attrs.globalCompositeOperation;
      !h || h === "source-over" || this.setAttr("globalCompositeOperation", h);
    }
  };
  So.Context = x, P.forEach(function(j) {
    Object.defineProperty(x.prototype, j, {
      get() {
        return this._context[j];
      },
      set(w) {
        this._context[j] = w;
      }
    });
  });
  class R extends x {
    constructor(w, { willReadFrequently: h = !1 } = {}) {
      super(w), this._context = w._canvas.getContext("2d", {
        willReadFrequently: h
      });
    }
    _fillColor(w) {
      const h = w.fill();
      this.setAttr("fillStyle", h), w._fillFunc(this);
    }
    _fillPattern(w) {
      this.setAttr("fillStyle", w._getFillPattern()), w._fillFunc(this);
    }
    _fillLinearGradient(w) {
      const h = w._getLinearGradient();
      h && (this.setAttr("fillStyle", h), w._fillFunc(this));
    }
    _fillRadialGradient(w) {
      const h = w._getRadialGradient();
      h && (this.setAttr("fillStyle", h), w._fillFunc(this));
    }
    _fill(w) {
      const h = w.fill(), T = w.getFillPriority();
      if (h && T === "color") {
        this._fillColor(w);
        return;
      }
      const I = w.getFillPatternImage();
      if (I && T === "pattern") {
        this._fillPattern(w);
        return;
      }
      const H = w.getFillLinearGradientColorStops();
      if (H && T === "linear-gradient") {
        this._fillLinearGradient(w);
        return;
      }
      const J = w.getFillRadialGradientColorStops();
      if (J && T === "radial-gradient") {
        this._fillRadialGradient(w);
        return;
      }
      h ? this._fillColor(w) : I ? this._fillPattern(w) : H ? this._fillLinearGradient(w) : J && this._fillRadialGradient(w);
    }
    _strokeLinearGradient(w) {
      const h = w.getStrokeLinearGradientStartPoint(), T = w.getStrokeLinearGradientEndPoint(), I = w.getStrokeLinearGradientColorStops(), H = this.createLinearGradient(h.x, h.y, T.x, T.y);
      if (I) {
        for (let J = 0; J < I.length; J += 2)
          H.addColorStop(I[J], I[J + 1]);
        this.setAttr("strokeStyle", H);
      }
    }
    _stroke(w) {
      const h = w.dash(), T = w.getStrokeScaleEnabled();
      if (w.hasStroke()) {
        if (!T) {
          this.save();
          const H = this.getCanvas().getPixelRatio();
          this.setTransform(H, 0, 0, H, 0, 0);
        }
        this._applyLineCap(w), h && w.dashEnabled() && (this.setLineDash(h), this.setAttr("lineDashOffset", w.dashOffset())), this.setAttr("lineWidth", w.strokeWidth()), w.getShadowForStrokeEnabled() || this.setAttr("shadowColor", "rgba(0,0,0,0)"), w.getStrokeLinearGradientColorStops() ? this._strokeLinearGradient(w) : this.setAttr("strokeStyle", w.stroke()), w._strokeFunc(this), T || this.restore();
      }
    }
    _applyShadow(w) {
      var h, T, I;
      const H = (h = w.getShadowRGBA()) !== null && h !== void 0 ? h : "black", J = (T = w.getShadowBlur()) !== null && T !== void 0 ? T : 5, z = (I = w.getShadowOffset()) !== null && I !== void 0 ? I : {
        x: 0,
        y: 0
      }, G = w.getAbsoluteScale(), V = this.canvas.getPixelRatio(), Q = G.x * V, Z = G.y * V;
      this.setAttr("shadowColor", H), this.setAttr("shadowBlur", J * Math.min(Math.abs(Q), Math.abs(Z))), this.setAttr("shadowOffsetX", z.x * Q), this.setAttr("shadowOffsetY", z.y * Z);
    }
  }
  So.SceneContext = R;
  class A extends x {
    constructor(w) {
      super(w), this._context = w._canvas.getContext("2d", {
        willReadFrequently: !0
      });
    }
    _fill(w) {
      this.save(), this.setAttr("fillStyle", w.colorKey), w._fillFuncHit(this), this.restore();
    }
    strokeShape(w) {
      w.hasHitStroke() && this._stroke(w);
    }
    _stroke(w) {
      if (w.hasHitStroke()) {
        const h = w.getStrokeScaleEnabled();
        if (!h) {
          this.save();
          const H = this.getCanvas().getPixelRatio();
          this.setTransform(H, 0, 0, H, 0, 0);
        }
        this._applyLineCap(w);
        const T = w.hitStrokeWidth(), I = T === "auto" ? w.strokeWidth() : T;
        this.setAttr("lineWidth", I), this.setAttr("strokeStyle", w.colorKey), w._strokeFuncHit(this), h || this.restore();
      }
    }
  }
  return So.HitContext = A, So;
}
var fh;
function sd() {
  if (fh) return _o;
  fh = 1, Object.defineProperty(_o, "__esModule", { value: !0 }), _o.HitCanvas = _o.SceneCanvas = _o.Canvas = void 0;
  const l = Qt(), d = U0(), v = tt();
  let L;
  function M() {
    if (L)
      return L;
    const m = l.Util.createCanvasElement(), C = m.getContext("2d");
    return L = (function() {
      const E = v.Konva._global.devicePixelRatio || 1, F = C.webkitBackingStorePixelRatio || C.mozBackingStorePixelRatio || C.msBackingStorePixelRatio || C.oBackingStorePixelRatio || C.backingStorePixelRatio || 1;
      return E / F;
    })(), l.Util.releaseCanvas(m), L;
  }
  let k = class {
    constructor(C) {
      this.pixelRatio = 1, this.width = 0, this.height = 0, this.isCache = !1;
      const F = (C || {}).pixelRatio || v.Konva.pixelRatio || M();
      this.pixelRatio = F, this._canvas = l.Util.createCanvasElement(), this._canvas.style.padding = "0", this._canvas.style.margin = "0", this._canvas.style.border = "0", this._canvas.style.background = "transparent", this._canvas.style.position = "absolute", this._canvas.style.top = "0", this._canvas.style.left = "0";
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
        } catch (P) {
          return l.Util.error("Unable to get data URL. " + P.message + " For more info read https://konvajs.org/docs/posts/Tainted_Canvas.html."), "";
        }
      }
    }
  };
  _o.Canvas = k;
  class f extends k {
    constructor(C = { width: 0, height: 0, willReadFrequently: !1 }) {
      super(C), this.context = new d.SceneContext(this, {
        willReadFrequently: C.willReadFrequently
      }), this.setSize(C.width, C.height);
    }
  }
  _o.SceneCanvas = f;
  class g extends k {
    constructor(C = { width: 0, height: 0 }) {
      super(C), this.hitCanvas = !0, this.context = new d.HitContext(this), this.setSize(C.width, C.height);
    }
  }
  return _o.HitCanvas = g, _o;
}
var Jd = {}, hh;
function mf() {
  return hh || (hh = 1, (function(l) {
    Object.defineProperty(l, "__esModule", { value: !0 }), l.DD = void 0;
    const d = tt(), v = Qt();
    l.DD = {
      get isDragging() {
        let L = !1;
        return l.DD._dragElements.forEach((M) => {
          M.dragStatus === "dragging" && (L = !0);
        }), L;
      },
      justDragged: !1,
      get node() {
        let L;
        return l.DD._dragElements.forEach((M) => {
          L = M.node;
        }), L;
      },
      _dragElements: /* @__PURE__ */ new Map(),
      _drag(L) {
        const M = [];
        l.DD._dragElements.forEach((k, f) => {
          const { node: g } = k, m = g.getStage();
          m.setPointersPositions(L), k.pointerId === void 0 && (k.pointerId = v.Util._getFirstPointerId(L));
          const C = m._changedPointerPositions.find((E) => E.id === k.pointerId);
          if (C) {
            if (k.dragStatus !== "dragging") {
              const E = g.dragDistance();
              if (Math.max(Math.abs(C.x - k.startPointerPos.x), Math.abs(C.y - k.startPointerPos.y)) < E || (g.startDrag({ evt: L }), !g.isDragging()))
                return;
            }
            g._setDragPosition(L, k), M.push(g);
          }
        }), M.forEach((k) => {
          k.fire("dragmove", {
            type: "dragmove",
            target: k,
            evt: L
          }, !0);
        });
      },
      _endDragBefore(L) {
        const M = [];
        l.DD._dragElements.forEach((k) => {
          const { node: f } = k, g = f.getStage();
          if (L && g.setPointersPositions(L), !g._changedPointerPositions.find((E) => E.id === k.pointerId))
            return;
          (k.dragStatus === "dragging" || k.dragStatus === "stopped") && (l.DD.justDragged = !0, d.Konva._mouseListenClick = !1, d.Konva._touchListenClick = !1, d.Konva._pointerListenClick = !1, k.dragStatus = "stopped");
          const C = k.node.getLayer() || k.node instanceof d.Konva.Stage && k.node;
          C && M.indexOf(C) === -1 && M.push(C);
        }), M.forEach((k) => {
          k.draw();
        });
      },
      _endDragAfter(L) {
        l.DD._dragElements.forEach((M, k) => {
          M.dragStatus === "stopped" && M.node.fire("dragend", {
            type: "dragend",
            target: M.node,
            evt: L
          }, !0), M.dragStatus !== "dragging" && l.DD._dragElements.delete(k);
        });
      }
    }, d.Konva.isBrowser && (window.addEventListener("mouseup", l.DD._endDragBefore, !0), window.addEventListener("touchend", l.DD._endDragBefore, !0), window.addEventListener("touchcancel", l.DD._endDragBefore, !0), window.addEventListener("mousemove", l.DD._drag), window.addEventListener("touchmove", l.DD._drag), window.addEventListener("mouseup", l.DD._endDragAfter, !1), window.addEventListener("touchend", l.DD._endDragAfter, !1), window.addEventListener("touchcancel", l.DD._endDragAfter, !1));
  })(Jd)), Jd;
}
var Zd = {}, kr = {}, ph;
function ct() {
  if (ph) return kr;
  ph = 1, Object.defineProperty(kr, "__esModule", { value: !0 }), kr.RGBComponent = L, kr.alphaComponent = M, kr.getNumberValidator = k, kr.getNumberOrArrayOfNumbersValidator = f, kr.getNumberOrAutoValidator = g, kr.getStringValidator = m, kr.getStringOrGradientValidator = C, kr.getFunctionValidator = E, kr.getNumberArrayValidator = F, kr.getBooleanValidator = P, kr.getComponentValidator = S;
  const l = tt(), d = Qt();
  function v(x) {
    return d.Util._isString(x) ? '"' + x + '"' : Object.prototype.toString.call(x) === "[object Number]" || d.Util._isBoolean(x) ? x : Object.prototype.toString.call(x);
  }
  function L(x) {
    return x > 255 ? 255 : x < 0 ? 0 : Math.round(x);
  }
  function M(x) {
    return x > 1 ? 1 : x < 1e-4 ? 1e-4 : x;
  }
  function k() {
    if (l.Konva.isUnminified)
      return function(x, R) {
        return d.Util._isNumber(x) || d.Util.warn(v(x) + ' is a not valid value for "' + R + '" attribute. The value should be a number.'), x;
      };
  }
  function f(x) {
    if (l.Konva.isUnminified)
      return function(R, A) {
        let j = d.Util._isNumber(R), w = d.Util._isArray(R) && R.length == x;
        return !j && !w && d.Util.warn(v(R) + ' is a not valid value for "' + A + '" attribute. The value should be a number or Array<number>(' + x + ")"), R;
      };
  }
  function g() {
    if (l.Konva.isUnminified)
      return function(x, R) {
        return d.Util._isNumber(x) || x === "auto" || d.Util.warn(v(x) + ' is a not valid value for "' + R + '" attribute. The value should be a number or "auto".'), x;
      };
  }
  function m() {
    if (l.Konva.isUnminified)
      return function(x, R) {
        return d.Util._isString(x) || d.Util.warn(v(x) + ' is a not valid value for "' + R + '" attribute. The value should be a string.'), x;
      };
  }
  function C() {
    if (l.Konva.isUnminified)
      return function(x, R) {
        const A = d.Util._isString(x), j = Object.prototype.toString.call(x) === "[object CanvasGradient]" || x && x.addColorStop;
        return A || j || d.Util.warn(v(x) + ' is a not valid value for "' + R + '" attribute. The value should be a string or a native gradient.'), x;
      };
  }
  function E() {
    if (l.Konva.isUnminified)
      return function(x, R) {
        return d.Util._isFunction(x) || d.Util.warn(v(x) + ' is a not valid value for "' + R + '" attribute. The value should be a function.'), x;
      };
  }
  function F() {
    if (l.Konva.isUnminified)
      return function(x, R) {
        const A = Int8Array ? Object.getPrototypeOf(Int8Array) : null;
        return A && x instanceof A || (d.Util._isArray(x) ? x.forEach(function(j) {
          d.Util._isNumber(j) || d.Util.warn('"' + R + '" attribute has non numeric element ' + j + ". Make sure that all elements are numbers.");
        }) : d.Util.warn(v(x) + ' is a not valid value for "' + R + '" attribute. The value should be a array of numbers.')), x;
      };
  }
  function P() {
    if (l.Konva.isUnminified)
      return function(x, R) {
        return x === !0 || x === !1 || d.Util.warn(v(x) + ' is a not valid value for "' + R + '" attribute. The value should be a boolean.'), x;
      };
  }
  function S(x) {
    if (l.Konva.isUnminified)
      return function(R, A) {
        return R == null || d.Util.isObject(R) || d.Util.warn(v(R) + ' is a not valid value for "' + A + '" attribute. The value should be an object with properties ' + x), R;
      };
  }
  return kr;
}
var gh;
function lt() {
  return gh || (gh = 1, (function(l) {
    Object.defineProperty(l, "__esModule", { value: !0 }), l.Factory = void 0;
    const d = Qt(), v = ct(), L = "get", M = "set";
    l.Factory = {
      addGetterSetter(k, f, g, m, C) {
        l.Factory.addGetter(k, f, g), l.Factory.addSetter(k, f, m, C), l.Factory.addOverloadedGetterSetter(k, f);
      },
      addGetter(k, f, g) {
        const m = L + d.Util._capitalize(f);
        k.prototype[m] = k.prototype[m] || function() {
          const C = this.attrs[f];
          return C === void 0 ? g : C;
        };
      },
      addSetter(k, f, g, m) {
        const C = M + d.Util._capitalize(f);
        k.prototype[C] || l.Factory.overWriteSetter(k, f, g, m);
      },
      overWriteSetter(k, f, g, m) {
        const C = M + d.Util._capitalize(f);
        k.prototype[C] = function(E) {
          return g && E !== void 0 && E !== null && (E = g.call(this, E, f)), this._setAttr(f, E), m && m.call(this), this;
        };
      },
      addComponentsGetterSetter(k, f, g, m, C) {
        const E = g.length, F = d.Util._capitalize, P = L + F(f), S = M + F(f);
        k.prototype[P] = function() {
          const R = {};
          for (let A = 0; A < E; A++) {
            const j = g[A];
            R[j] = this.getAttr(f + F(j));
          }
          return R;
        };
        const x = (0, v.getComponentValidator)(g);
        k.prototype[S] = function(R) {
          const A = this.attrs[f];
          m && (R = m.call(this, R, f)), x && x.call(this, R, f);
          for (const j in R)
            R.hasOwnProperty(j) && this._setAttr(f + F(j), R[j]);
          return R || g.forEach((j) => {
            this._setAttr(f + F(j), void 0);
          }), this._fireChangeEvent(f, A, R), C && C.call(this), this;
        }, l.Factory.addOverloadedGetterSetter(k, f);
      },
      addOverloadedGetterSetter(k, f) {
        const g = d.Util._capitalize(f), m = M + g, C = L + g;
        k.prototype[f] = function() {
          return arguments.length ? (this[m](arguments[0]), this) : this[C]();
        };
      },
      addDeprecatedGetterSetter(k, f, g, m) {
        d.Util.error("Adding deprecated " + f);
        const C = L + d.Util._capitalize(f), E = f + " property is deprecated and will be removed soon. Look at Konva change log for more information.";
        k.prototype[C] = function() {
          d.Util.error(E);
          const F = this.attrs[f];
          return F === void 0 ? g : F;
        }, l.Factory.addSetter(k, f, m, function() {
          d.Util.error(E);
        }), l.Factory.addOverloadedGetterSetter(k, f);
      },
      backCompat(k, f) {
        d.Util.each(f, function(g, m) {
          const C = k.prototype[m], E = L + d.Util._capitalize(g), F = M + d.Util._capitalize(g);
          function P() {
            C.apply(this, arguments), d.Util.error('"' + g + '" method is deprecated and will be removed soon. Use ""' + m + '" instead.');
          }
          k.prototype[g] = P, k.prototype[E] = P, k.prototype[F] = P;
        });
      },
      afterSetFilter() {
        this._filterUpToDate = !1;
      }
    };
  })(Zd)), Zd;
}
var mh;
function on() {
  if (mh) return tu;
  mh = 1, Object.defineProperty(tu, "__esModule", { value: !0 }), tu.Node = void 0;
  const l = sd(), d = mf(), v = lt(), L = tt(), M = Qt(), k = ct(), f = "absoluteOpacity", g = "allEventListeners", m = "absoluteTransform", C = "absoluteScale", E = "canvas", F = "Change", P = "children", S = "konva", x = "listening", R = "mouseenter", A = "mouseleave", j = "pointerenter", w = "pointerleave", h = "touchenter", T = "touchleave", I = "set", H = "Shape", J = " ", z = "stage", G = "transform", V = "Stage", Q = "visible", Z = [
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
  let ee = 1, re = class cf {
    constructor(N) {
      this._id = ee++, this.eventListeners = {}, this.attrs = {}, this.index = 0, this._allEventListeners = null, this.parent = null, this._cache = /* @__PURE__ */ new Map(), this._attachedDepsListeners = /* @__PURE__ */ new Map(), this._lastPos = null, this._batchingTransformChange = !1, this._needClearTransformCache = !1, this._filterUpToDate = !1, this._isUnderCache = !1, this._dragEventId = null, this._shouldFireChangeEvents = !1, this.setAttrs(N), this._shouldFireChangeEvents = !0;
    }
    hasChildren() {
      return !1;
    }
    _clearCache(N) {
      (N === G || N === m) && this._cache.get(N) ? this._cache.get(N).dirty = !0 : N ? this._cache.delete(N) : this._cache.clear();
    }
    _getCache(N, D) {
      let W = this._cache.get(N);
      return (W === void 0 || (N === G || N === m) && W.dirty === !0) && (W = D.call(this), this._cache.set(N, W)), W;
    }
    _calculate(N, D, W) {
      if (!this._attachedDepsListeners.get(N)) {
        const U = D.map((_) => _ + "Change.konva").join(J);
        this.on(U, () => {
          this._clearCache(N);
        }), this._attachedDepsListeners.set(N, !0);
      }
      return this._getCache(N, W);
    }
    _getCanvasCache() {
      return this._cache.get(E);
    }
    _clearSelfAndDescendantCache(N) {
      this._clearCache(N), N === m && this.fire("absoluteTransformChange");
    }
    clearCache() {
      if (this._cache.has(E)) {
        const { scene: N, filter: D, hit: W, buffer: U } = this._cache.get(E);
        M.Util.releaseCanvas(N, D, W, U), this._cache.delete(E);
      }
      return this._clearSelfAndDescendantCache(), this._requestDraw(), this;
    }
    cache(N) {
      const D = N || {};
      let W = {};
      (D.x === void 0 || D.y === void 0 || D.width === void 0 || D.height === void 0) && (W = this.getClientRect({
        skipTransform: !0,
        relativeTo: this.getParent() || void 0
      }));
      let U = Math.ceil(D.width || W.width), _ = Math.ceil(D.height || W.height), K = D.pixelRatio, b = D.x === void 0 ? Math.floor(W.x) : D.x, ae = D.y === void 0 ? Math.floor(W.y) : D.y, pe = D.offset || 0, oe = D.drawBorder || !1, q = D.hitCanvasPixelRatio || 1;
      if (!U || !_) {
        M.Util.error("Can not cache the node. Width or height of the node equals 0. Caching is skipped.");
        return;
      }
      const ie = Math.abs(Math.round(W.x) - b) > 0.5 ? 1 : 0, ye = Math.abs(Math.round(W.y) - ae) > 0.5 ? 1 : 0;
      U += pe * 2 + ie, _ += pe * 2 + ye, b -= pe, ae -= pe;
      const Ee = new l.SceneCanvas({
        pixelRatio: K,
        width: U,
        height: _
      }), Me = new l.SceneCanvas({
        pixelRatio: K,
        width: 0,
        height: 0,
        willReadFrequently: !0
      }), je = new l.HitCanvas({
        pixelRatio: q,
        width: U,
        height: _
      }), Ue = Ee.getContext(), ot = je.getContext(), we = new l.SceneCanvas({
        width: Ee.width / Ee.pixelRatio + Math.abs(b),
        height: Ee.height / Ee.pixelRatio + Math.abs(ae),
        pixelRatio: Ee.pixelRatio
      }), Je = we.getContext();
      return je.isCache = !0, Ee.isCache = !0, this._cache.delete(E), this._filterUpToDate = !1, D.imageSmoothingEnabled === !1 && (Ee.getContext()._context.imageSmoothingEnabled = !1, Me.getContext()._context.imageSmoothingEnabled = !1), Ue.save(), ot.save(), Je.save(), Ue.translate(-b, -ae), ot.translate(-b, -ae), Je.translate(-b, -ae), we.x = b, we.y = ae, this._isUnderCache = !0, this._clearSelfAndDescendantCache(f), this._clearSelfAndDescendantCache(C), this.drawScene(Ee, this, we), this.drawHit(je, this), this._isUnderCache = !1, Ue.restore(), ot.restore(), oe && (Ue.save(), Ue.beginPath(), Ue.rect(0, 0, U, _), Ue.closePath(), Ue.setAttr("strokeStyle", "red"), Ue.setAttr("lineWidth", 5), Ue.stroke(), Ue.restore()), this._cache.set(E, {
        scene: Ee,
        filter: Me,
        hit: je,
        buffer: we,
        x: b,
        y: ae
      }), this._requestDraw(), this;
    }
    isCached() {
      return this._cache.has(E);
    }
    getClientRect(N) {
      throw new Error('abstract "getClientRect" method call');
    }
    _transformedRect(N, D) {
      const W = [
        { x: N.x, y: N.y },
        { x: N.x + N.width, y: N.y },
        { x: N.x + N.width, y: N.y + N.height },
        { x: N.x, y: N.y + N.height }
      ];
      let U = 1 / 0, _ = 1 / 0, K = -1 / 0, b = -1 / 0;
      const ae = this.getAbsoluteTransform(D);
      return W.forEach(function(pe) {
        const oe = ae.point(pe);
        U === void 0 && (U = K = oe.x, _ = b = oe.y), U = Math.min(U, oe.x), _ = Math.min(_, oe.y), K = Math.max(K, oe.x), b = Math.max(b, oe.y);
      }), {
        x: U,
        y: _,
        width: K - U,
        height: b - _
      };
    }
    _drawCachedSceneCanvas(N) {
      N.save(), N._applyOpacity(this), N._applyGlobalCompositeOperation(this);
      const D = this._getCanvasCache();
      N.translate(D.x, D.y);
      const W = this._getCachedSceneCanvas(), U = W.pixelRatio;
      N.drawImage(W._canvas, 0, 0, W.width / U, W.height / U), N.restore();
    }
    _drawCachedHitCanvas(N) {
      const D = this._getCanvasCache(), W = D.hit;
      N.save(), N.translate(D.x, D.y), N.drawImage(W._canvas, 0, 0, W.width / W.pixelRatio, W.height / W.pixelRatio), N.restore();
    }
    _getCachedSceneCanvas() {
      let N = this.filters(), D = this._getCanvasCache(), W = D.scene, U = D.filter, _ = U.getContext(), K, b, ae, pe;
      if (N) {
        if (!this._filterUpToDate) {
          const oe = W.pixelRatio;
          U.setSize(W.width / W.pixelRatio, W.height / W.pixelRatio);
          try {
            for (K = N.length, _.clear(), _.drawImage(W._canvas, 0, 0, W.getWidth() / oe, W.getHeight() / oe), b = _.getImageData(0, 0, U.getWidth(), U.getHeight()), ae = 0; ae < K; ae++) {
              if (pe = N[ae], typeof pe != "function") {
                M.Util.error("Filter should be type of function, but got " + typeof pe + " instead. Please check correct filters");
                continue;
              }
              pe.call(this, b), _.putImageData(b, 0, 0);
            }
          } catch (q) {
            M.Util.error("Unable to apply filter. " + q.message + " This post my help you https://konvajs.org/docs/posts/Tainted_Canvas.html.");
          }
          this._filterUpToDate = !0;
        }
        return U;
      }
      return W;
    }
    on(N, D) {
      if (this._cache && this._cache.delete(g), arguments.length === 3)
        return this._delegate.apply(this, arguments);
      const W = N.split(J);
      for (let U = 0; U < W.length; U++) {
        const K = W[U].split("."), b = K[0], ae = K[1] || "";
        this.eventListeners[b] || (this.eventListeners[b] = []), this.eventListeners[b].push({ name: ae, handler: D });
      }
      return this;
    }
    off(N, D) {
      let W = (N || "").split(J), U = W.length, _, K, b, ae, pe, oe;
      if (this._cache && this._cache.delete(g), !N)
        for (K in this.eventListeners)
          this._off(K);
      for (_ = 0; _ < U; _++)
        if (b = W[_], ae = b.split("."), pe = ae[0], oe = ae[1], pe)
          this.eventListeners[pe] && this._off(pe, oe, D);
        else
          for (K in this.eventListeners)
            this._off(K, oe, D);
      return this;
    }
    dispatchEvent(N) {
      const D = {
        target: this,
        type: N.type,
        evt: N
      };
      return this.fire(N.type, D), this;
    }
    addEventListener(N, D) {
      return this.on(N, function(W) {
        D.call(this, W.evt);
      }), this;
    }
    removeEventListener(N) {
      return this.off(N), this;
    }
    _delegate(N, D, W) {
      const U = this;
      this.on(N, function(_) {
        const K = _.target.findAncestors(D, !0, U);
        for (let b = 0; b < K.length; b++)
          _ = M.Util.cloneObject(_), _.currentTarget = K[b], W.call(K[b], _);
      });
    }
    remove() {
      return this.isDragging() && this.stopDrag(), d.DD._dragElements.delete(this._id), this._remove(), this;
    }
    _clearCaches() {
      this._clearSelfAndDescendantCache(m), this._clearSelfAndDescendantCache(f), this._clearSelfAndDescendantCache(C), this._clearSelfAndDescendantCache(z), this._clearSelfAndDescendantCache(Q), this._clearSelfAndDescendantCache(x);
    }
    _remove() {
      this._clearCaches();
      const N = this.getParent();
      N && N.children && (N.children.splice(this.index, 1), N._setChildrenIndices(), this.parent = null);
    }
    destroy() {
      return this.remove(), this.clearCache(), this;
    }
    getAttr(N) {
      const D = "get" + M.Util._capitalize(N);
      return M.Util._isFunction(this[D]) ? this[D]() : this.attrs[N];
    }
    getAncestors() {
      let N = this.getParent(), D = [];
      for (; N; )
        D.push(N), N = N.getParent();
      return D;
    }
    getAttrs() {
      return this.attrs || {};
    }
    setAttrs(N) {
      return this._batchTransformChanges(() => {
        let D, W;
        if (!N)
          return this;
        for (D in N)
          D !== P && (W = I + M.Util._capitalize(D), M.Util._isFunction(this[W]) ? this[W](N[D]) : this._setAttr(D, N[D]));
      }), this;
    }
    isListening() {
      return this._getCache(x, this._isListening);
    }
    _isListening(N) {
      if (!this.listening())
        return !1;
      const W = this.getParent();
      return W && W !== N && this !== N ? W._isListening(N) : !0;
    }
    isVisible() {
      return this._getCache(Q, this._isVisible);
    }
    _isVisible(N) {
      if (!this.visible())
        return !1;
      const W = this.getParent();
      return W && W !== N && this !== N ? W._isVisible(N) : !0;
    }
    shouldDrawHit(N, D = !1) {
      if (N)
        return this._isVisible(N) && this._isListening(N);
      const W = this.getLayer();
      let U = !1;
      d.DD._dragElements.forEach((K) => {
        K.dragStatus === "dragging" && (K.node.nodeType === "Stage" || K.node.getLayer() === W) && (U = !0);
      });
      const _ = !D && !L.Konva.hitOnDragEnabled && (U || L.Konva.isTransforming());
      return this.isListening() && this.isVisible() && !_;
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
      let N = this.getDepth(), D = this, W = 0, U, _, K, b;
      function ae(oe) {
        for (U = [], _ = oe.length, K = 0; K < _; K++)
          b = oe[K], W++, b.nodeType !== H && (U = U.concat(b.getChildren().slice())), b._id === D._id && (K = _);
        U.length > 0 && U[0].getDepth() <= N && ae(U);
      }
      const pe = this.getStage();
      return D.nodeType !== V && pe && ae(pe.getChildren()), W;
    }
    getDepth() {
      let N = 0, D = this.parent;
      for (; D; )
        N++, D = D.parent;
      return N;
    }
    _batchTransformChanges(N) {
      this._batchingTransformChange = !0, N(), this._batchingTransformChange = !1, this._needClearTransformCache && (this._clearCache(G), this._clearSelfAndDescendantCache(m)), this._needClearTransformCache = !1;
    }
    setPosition(N) {
      return this._batchTransformChanges(() => {
        this.x(N.x), this.y(N.y);
      }), this;
    }
    getPosition() {
      return {
        x: this.x(),
        y: this.y()
      };
    }
    getRelativePointerPosition() {
      const N = this.getStage();
      if (!N)
        return null;
      const D = N.getPointerPosition();
      if (!D)
        return null;
      const W = this.getAbsoluteTransform().copy();
      return W.invert(), W.point(D);
    }
    getAbsolutePosition(N) {
      let D = !1, W = this.parent;
      for (; W; ) {
        if (W.isCached()) {
          D = !0;
          break;
        }
        W = W.parent;
      }
      D && !N && (N = !0);
      const U = this.getAbsoluteTransform(N).getMatrix(), _ = new M.Transform(), K = this.offset();
      return _.m = U.slice(), _.translate(K.x, K.y), _.getTranslation();
    }
    setAbsolutePosition(N) {
      const { x: D, y: W, ...U } = this._clearTransform();
      this.attrs.x = D, this.attrs.y = W, this._clearCache(G);
      const _ = this._getAbsoluteTransform().copy();
      return _.invert(), _.translate(N.x, N.y), N = {
        x: this.attrs.x + _.getTranslation().x,
        y: this.attrs.y + _.getTranslation().y
      }, this._setTransform(U), this.setPosition({ x: N.x, y: N.y }), this._clearCache(G), this._clearSelfAndDescendantCache(m), this;
    }
    _setTransform(N) {
      let D;
      for (D in N)
        this.attrs[D] = N[D];
    }
    _clearTransform() {
      const N = {
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
      return this.attrs.x = 0, this.attrs.y = 0, this.attrs.rotation = 0, this.attrs.scaleX = 1, this.attrs.scaleY = 1, this.attrs.offsetX = 0, this.attrs.offsetY = 0, this.attrs.skewX = 0, this.attrs.skewY = 0, N;
    }
    move(N) {
      let D = N.x, W = N.y, U = this.x(), _ = this.y();
      return D !== void 0 && (U += D), W !== void 0 && (_ += W), this.setPosition({ x: U, y: _ }), this;
    }
    _eachAncestorReverse(N, D) {
      let W = [], U = this.getParent(), _, K;
      if (!(D && D._id === this._id)) {
        for (W.unshift(this); U && (!D || U._id !== D._id); )
          W.unshift(U), U = U.parent;
        for (_ = W.length, K = 0; K < _; K++)
          N(W[K]);
      }
    }
    rotate(N) {
      return this.rotation(this.rotation() + N), this;
    }
    moveToTop() {
      if (!this.parent)
        return M.Util.warn("Node has no parent. moveToTop function is ignored."), !1;
      const N = this.index, D = this.parent.getChildren().length;
      return N < D - 1 ? (this.parent.children.splice(N, 1), this.parent.children.push(this), this.parent._setChildrenIndices(), !0) : !1;
    }
    moveUp() {
      if (!this.parent)
        return M.Util.warn("Node has no parent. moveUp function is ignored."), !1;
      const N = this.index, D = this.parent.getChildren().length;
      return N < D - 1 ? (this.parent.children.splice(N, 1), this.parent.children.splice(N + 1, 0, this), this.parent._setChildrenIndices(), !0) : !1;
    }
    moveDown() {
      if (!this.parent)
        return M.Util.warn("Node has no parent. moveDown function is ignored."), !1;
      const N = this.index;
      return N > 0 ? (this.parent.children.splice(N, 1), this.parent.children.splice(N - 1, 0, this), this.parent._setChildrenIndices(), !0) : !1;
    }
    moveToBottom() {
      if (!this.parent)
        return M.Util.warn("Node has no parent. moveToBottom function is ignored."), !1;
      const N = this.index;
      return N > 0 ? (this.parent.children.splice(N, 1), this.parent.children.unshift(this), this.parent._setChildrenIndices(), !0) : !1;
    }
    setZIndex(N) {
      if (!this.parent)
        return M.Util.warn("Node has no parent. zIndex parameter is ignored."), this;
      (N < 0 || N >= this.parent.children.length) && M.Util.warn("Unexpected value " + N + " for zIndex property. zIndex is just index of a node in children of its parent. Expected value is from 0 to " + (this.parent.children.length - 1) + ".");
      const D = this.index;
      return this.parent.children.splice(D, 1), this.parent.children.splice(N, 0, this), this.parent._setChildrenIndices(), this;
    }
    getAbsoluteOpacity() {
      return this._getCache(f, this._getAbsoluteOpacity);
    }
    _getAbsoluteOpacity() {
      let N = this.opacity();
      const D = this.getParent();
      return D && !D._isUnderCache && (N *= D.getAbsoluteOpacity()), N;
    }
    moveTo(N) {
      return this.getParent() !== N && (this._remove(), N.add(this)), this;
    }
    toObject() {
      let N = this.getAttrs(), D, W, U, _, K;
      const b = {
        attrs: {},
        className: this.getClassName()
      };
      for (D in N)
        W = N[D], K = M.Util.isObject(W) && !M.Util._isPlainObject(W) && !M.Util._isArray(W), !K && (U = typeof this[D] == "function" && this[D], delete N[D], _ = U ? U.call(this) : null, N[D] = W, _ !== W && (b.attrs[D] = W));
      return M.Util._prepareToStringify(b);
    }
    toJSON() {
      return JSON.stringify(this.toObject());
    }
    getParent() {
      return this.parent;
    }
    findAncestors(N, D, W) {
      const U = [];
      D && this._isMatch(N) && U.push(this);
      let _ = this.parent;
      for (; _; ) {
        if (_ === W)
          return U;
        _._isMatch(N) && U.push(_), _ = _.parent;
      }
      return U;
    }
    isAncestorOf(N) {
      return !1;
    }
    findAncestor(N, D, W) {
      return this.findAncestors(N, D, W)[0];
    }
    _isMatch(N) {
      if (!N)
        return !1;
      if (typeof N == "function")
        return N(this);
      let D = N.replace(/ /g, "").split(","), W = D.length, U, _;
      for (U = 0; U < W; U++)
        if (_ = D[U], M.Util.isValidSelector(_) || (M.Util.warn('Selector "' + _ + '" is invalid. Allowed selectors examples are "#foo", ".bar" or "Group".'), M.Util.warn('If you have a custom shape with such className, please change it to start with upper letter like "Triangle".'), M.Util.warn("Konva is awesome, right?")), _.charAt(0) === "#") {
          if (this.id() === _.slice(1))
            return !0;
        } else if (_.charAt(0) === ".") {
          if (this.hasName(_.slice(1)))
            return !0;
        } else if (this.className === _ || this.nodeType === _)
          return !0;
      return !1;
    }
    getLayer() {
      const N = this.getParent();
      return N ? N.getLayer() : null;
    }
    getStage() {
      return this._getCache(z, this._getStage);
    }
    _getStage() {
      const N = this.getParent();
      return N ? N.getStage() : null;
    }
    fire(N, D = {}, W) {
      return D.target = D.target || this, W ? this._fireAndBubble(N, D) : this._fire(N, D), this;
    }
    getAbsoluteTransform(N) {
      return N ? this._getAbsoluteTransform(N) : this._getCache(m, this._getAbsoluteTransform);
    }
    _getAbsoluteTransform(N) {
      let D;
      if (N)
        return D = new M.Transform(), this._eachAncestorReverse(function(W) {
          const U = W.transformsEnabled();
          U === "all" ? D.multiply(W.getTransform()) : U === "position" && D.translate(W.x() - W.offsetX(), W.y() - W.offsetY());
        }, N), D;
      {
        D = this._cache.get(m) || new M.Transform(), this.parent ? this.parent.getAbsoluteTransform().copyInto(D) : D.reset();
        const W = this.transformsEnabled();
        if (W === "all")
          D.multiply(this.getTransform());
        else if (W === "position") {
          const U = this.attrs.x || 0, _ = this.attrs.y || 0, K = this.attrs.offsetX || 0, b = this.attrs.offsetY || 0;
          D.translate(U - K, _ - b);
        }
        return D.dirty = !1, D;
      }
    }
    getAbsoluteScale(N) {
      let D = this;
      for (; D; )
        D._isUnderCache && (N = D), D = D.getParent();
      const U = this.getAbsoluteTransform(N).decompose();
      return {
        x: U.scaleX,
        y: U.scaleY
      };
    }
    getAbsoluteRotation() {
      return this.getAbsoluteTransform().decompose().rotation;
    }
    getTransform() {
      return this._getCache(G, this._getTransform);
    }
    _getTransform() {
      var N, D;
      const W = this._cache.get(G) || new M.Transform();
      W.reset();
      const U = this.x(), _ = this.y(), K = L.Konva.getAngle(this.rotation()), b = (N = this.attrs.scaleX) !== null && N !== void 0 ? N : 1, ae = (D = this.attrs.scaleY) !== null && D !== void 0 ? D : 1, pe = this.attrs.skewX || 0, oe = this.attrs.skewY || 0, q = this.attrs.offsetX || 0, ie = this.attrs.offsetY || 0;
      return (U !== 0 || _ !== 0) && W.translate(U, _), K !== 0 && W.rotate(K), (pe !== 0 || oe !== 0) && W.skew(pe, oe), (b !== 1 || ae !== 1) && W.scale(b, ae), (q !== 0 || ie !== 0) && W.translate(-1 * q, -1 * ie), W.dirty = !1, W;
    }
    clone(N) {
      let D = M.Util.cloneObject(this.attrs), W, U, _, K, b;
      for (W in N)
        D[W] = N[W];
      const ae = new this.constructor(D);
      for (W in this.eventListeners)
        for (U = this.eventListeners[W], _ = U.length, K = 0; K < _; K++)
          b = U[K], b.name.indexOf(S) < 0 && (ae.eventListeners[W] || (ae.eventListeners[W] = []), ae.eventListeners[W].push(b));
      return ae;
    }
    _toKonvaCanvas(N) {
      N = N || {};
      const D = this.getClientRect(), W = this.getStage(), U = N.x !== void 0 ? N.x : Math.floor(D.x), _ = N.y !== void 0 ? N.y : Math.floor(D.y), K = N.pixelRatio || 1, b = new l.SceneCanvas({
        width: N.width || Math.ceil(D.width) || (W ? W.width() : 0),
        height: N.height || Math.ceil(D.height) || (W ? W.height() : 0),
        pixelRatio: K
      }), ae = b.getContext(), pe = new l.SceneCanvas({
        width: b.width / b.pixelRatio + Math.abs(U),
        height: b.height / b.pixelRatio + Math.abs(_),
        pixelRatio: b.pixelRatio
      });
      return N.imageSmoothingEnabled === !1 && (ae._context.imageSmoothingEnabled = !1), ae.save(), (U || _) && ae.translate(-1 * U, -1 * _), this.drawScene(b, void 0, pe), ae.restore(), b;
    }
    toCanvas(N) {
      return this._toKonvaCanvas(N)._canvas;
    }
    toDataURL(N) {
      N = N || {};
      const D = N.mimeType || null, W = N.quality || null, U = this._toKonvaCanvas(N).toDataURL(D, W);
      return N.callback && N.callback(U), U;
    }
    toImage(N) {
      return new Promise((D, W) => {
        try {
          const U = N == null ? void 0 : N.callback;
          U && delete N.callback, M.Util._urlToImage(this.toDataURL(N), function(_) {
            D(_), U == null || U(_);
          });
        } catch (U) {
          W(U);
        }
      });
    }
    toBlob(N) {
      return new Promise((D, W) => {
        try {
          const U = N == null ? void 0 : N.callback;
          U && delete N.callback, this.toCanvas(N).toBlob((_) => {
            D(_), U == null || U(_);
          }, N == null ? void 0 : N.mimeType, N == null ? void 0 : N.quality);
        } catch (U) {
          W(U);
        }
      });
    }
    setSize(N) {
      return this.width(N.width), this.height(N.height), this;
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
    _off(N, D, W) {
      let U = this.eventListeners[N], _, K, b;
      for (_ = 0; _ < U.length; _++)
        if (K = U[_].name, b = U[_].handler, (K !== "konva" || D === "konva") && (!D || K === D) && (!W || W === b)) {
          if (U.splice(_, 1), U.length === 0) {
            delete this.eventListeners[N];
            break;
          }
          _--;
        }
    }
    _fireChangeEvent(N, D, W) {
      this._fire(N + F, {
        oldVal: D,
        newVal: W
      });
    }
    addName(N) {
      if (!this.hasName(N)) {
        const D = this.name(), W = D ? D + " " + N : N;
        this.name(W);
      }
      return this;
    }
    hasName(N) {
      if (!N)
        return !1;
      const D = this.name();
      return D ? (D || "").split(/\s/g).indexOf(N) !== -1 : !1;
    }
    removeName(N) {
      const D = (this.name() || "").split(/\s/g), W = D.indexOf(N);
      return W !== -1 && (D.splice(W, 1), this.name(D.join(" "))), this;
    }
    setAttr(N, D) {
      const W = this[I + M.Util._capitalize(N)];
      return M.Util._isFunction(W) ? W.call(this, D) : this._setAttr(N, D), this;
    }
    _requestDraw() {
      if (L.Konva.autoDrawEnabled) {
        const N = this.getLayer() || this.getStage();
        N == null || N.batchDraw();
      }
    }
    _setAttr(N, D) {
      const W = this.attrs[N];
      W === D && !M.Util.isObject(D) || (D == null ? delete this.attrs[N] : this.attrs[N] = D, this._shouldFireChangeEvents && this._fireChangeEvent(N, W, D), this._requestDraw());
    }
    _setComponentAttr(N, D, W) {
      let U;
      W !== void 0 && (U = this.attrs[N], U || (this.attrs[N] = this.getAttr(N)), this.attrs[N][D] = W, this._fireChangeEvent(N, U, W));
    }
    _fireAndBubble(N, D, W) {
      D && this.nodeType === H && (D.target = this);
      const U = [
        R,
        A,
        j,
        w,
        h,
        T
      ];
      if (!(U.indexOf(N) !== -1 && (W && (this === W || this.isAncestorOf && this.isAncestorOf(W)) || this.nodeType === "Stage" && !W))) {
        this._fire(N, D);
        const K = U.indexOf(N) !== -1 && W && W.isAncestorOf && W.isAncestorOf(this) && !W.isAncestorOf(this.parent);
        (D && !D.cancelBubble || !D) && this.parent && this.parent.isListening() && !K && (W && W.parent ? this._fireAndBubble.call(this.parent, N, D, W) : this._fireAndBubble.call(this.parent, N, D));
      }
    }
    _getProtoListeners(N) {
      var D, W, U;
      const _ = (D = this._cache.get(g)) !== null && D !== void 0 ? D : {};
      let K = _ == null ? void 0 : _[N];
      if (K === void 0) {
        K = [];
        let b = Object.getPrototypeOf(this);
        for (; b; ) {
          const ae = (U = (W = b.eventListeners) === null || W === void 0 ? void 0 : W[N]) !== null && U !== void 0 ? U : [];
          K.push(...ae), b = Object.getPrototypeOf(b);
        }
        _[N] = K, this._cache.set(g, _);
      }
      return K;
    }
    _fire(N, D) {
      D = D || {}, D.currentTarget = this, D.type = N;
      const W = this._getProtoListeners(N);
      if (W)
        for (let _ = 0; _ < W.length; _++)
          W[_].handler.call(this, D);
      const U = this.eventListeners[N];
      if (U)
        for (let _ = 0; _ < U.length; _++)
          U[_].handler.call(this, D);
    }
    draw() {
      return this.drawScene(), this.drawHit(), this;
    }
    _createDragElement(N) {
      const D = N ? N.pointerId : void 0, W = this.getStage(), U = this.getAbsolutePosition();
      if (!W)
        return;
      const _ = W._getPointerById(D) || W._changedPointerPositions[0] || U;
      d.DD._dragElements.set(this._id, {
        node: this,
        startPointerPos: _,
        offset: {
          x: _.x - U.x,
          y: _.y - U.y
        },
        dragStatus: "ready",
        pointerId: D
      });
    }
    startDrag(N, D = !0) {
      d.DD._dragElements.has(this._id) || this._createDragElement(N);
      const W = d.DD._dragElements.get(this._id);
      W.dragStatus = "dragging", this.fire("dragstart", {
        type: "dragstart",
        target: this,
        evt: N && N.evt
      }, D);
    }
    _setDragPosition(N, D) {
      const W = this.getStage()._getPointerById(D.pointerId);
      if (!W)
        return;
      let U = {
        x: W.x - D.offset.x,
        y: W.y - D.offset.y
      };
      const _ = this.dragBoundFunc();
      if (_ !== void 0) {
        const K = _.call(this, U, N);
        K ? U = K : M.Util.warn("dragBoundFunc did not return any value. That is unexpected behavior. You must return new absolute position from dragBoundFunc.");
      }
      (!this._lastPos || this._lastPos.x !== U.x || this._lastPos.y !== U.y) && (this.setAbsolutePosition(U), this._requestDraw()), this._lastPos = U;
    }
    stopDrag(N) {
      const D = d.DD._dragElements.get(this._id);
      D && (D.dragStatus = "stopped"), d.DD._endDragBefore(N), d.DD._endDragAfter(N);
    }
    setDraggable(N) {
      this._setAttr("draggable", N), this._dragChange();
    }
    isDragging() {
      const N = d.DD._dragElements.get(this._id);
      return N ? N.dragStatus === "dragging" : !1;
    }
    _listenDrag() {
      this._dragCleanup(), this.on("mousedown.konva touchstart.konva", function(N) {
        if (!(!(N.evt.button !== void 0) || L.Konva.dragButtons.indexOf(N.evt.button) >= 0) || this.isDragging())
          return;
        let U = !1;
        d.DD._dragElements.forEach((_) => {
          this.isAncestorOf(_.node) && (U = !0);
        }), U || this._createDragElement(N);
      });
    }
    _dragChange() {
      if (this.attrs.draggable)
        this._listenDrag();
      else {
        if (this._dragCleanup(), !this.getStage())
          return;
        const D = d.DD._dragElements.get(this._id), W = D && D.dragStatus === "dragging", U = D && D.dragStatus === "ready";
        W ? this.stopDrag() : U && d.DD._dragElements.delete(this._id);
      }
    }
    _dragCleanup() {
      this.off("mousedown.konva"), this.off("touchstart.konva");
    }
    isClientRectOnScreen(N = { x: 0, y: 0 }) {
      const D = this.getStage();
      if (!D)
        return !1;
      const W = {
        x: -N.x,
        y: -N.y,
        width: D.width() + 2 * N.x,
        height: D.height() + 2 * N.y
      };
      return M.Util.haveIntersection(W, this.getClientRect());
    }
    static create(N, D) {
      return M.Util._isString(N) && (N = JSON.parse(N)), this._createNode(N, D);
    }
    static _createNode(N, D) {
      let W = cf.prototype.getClassName.call(N), U = N.children, _, K, b;
      D && (N.attrs.container = D), L.Konva[W] || (M.Util.warn('Can not find a node with class name "' + W + '". Fallback to "Shape".'), W = "Shape");
      const ae = L.Konva[W];
      if (_ = new ae(N.attrs), U)
        for (K = U.length, b = 0; b < K; b++)
          _.add(cf._createNode(U[b]));
      return _;
    }
  };
  tu.Node = re, re.prototype.nodeType = "Node", re.prototype._attrsAffectingSize = [], re.prototype.eventListeners = {}, re.prototype.on.call(re.prototype, Z, function() {
    if (this._batchingTransformChange) {
      this._needClearTransformCache = !0;
      return;
    }
    this._clearCache(G), this._clearSelfAndDescendantCache(m);
  }), re.prototype.on.call(re.prototype, "visibleChange.konva", function() {
    this._clearSelfAndDescendantCache(Q);
  }), re.prototype.on.call(re.prototype, "listeningChange.konva", function() {
    this._clearSelfAndDescendantCache(x);
  }), re.prototype.on.call(re.prototype, "opacityChange.konva", function() {
    this._clearSelfAndDescendantCache(f);
  });
  const X = v.Factory.addGetterSetter;
  return X(re, "zIndex"), X(re, "absolutePosition"), X(re, "position"), X(re, "x", 0, (0, k.getNumberValidator)()), X(re, "y", 0, (0, k.getNumberValidator)()), X(re, "globalCompositeOperation", "source-over", (0, k.getStringValidator)()), X(re, "opacity", 1, (0, k.getNumberValidator)()), X(re, "name", "", (0, k.getStringValidator)()), X(re, "id", "", (0, k.getStringValidator)()), X(re, "rotation", 0, (0, k.getNumberValidator)()), v.Factory.addComponentsGetterSetter(re, "scale", ["x", "y"]), X(re, "scaleX", 1, (0, k.getNumberValidator)()), X(re, "scaleY", 1, (0, k.getNumberValidator)()), v.Factory.addComponentsGetterSetter(re, "skew", ["x", "y"]), X(re, "skewX", 0, (0, k.getNumberValidator)()), X(re, "skewY", 0, (0, k.getNumberValidator)()), v.Factory.addComponentsGetterSetter(re, "offset", ["x", "y"]), X(re, "offsetX", 0, (0, k.getNumberValidator)()), X(re, "offsetY", 0, (0, k.getNumberValidator)()), X(re, "dragDistance", void 0, (0, k.getNumberValidator)()), X(re, "width", 0, (0, k.getNumberValidator)()), X(re, "height", 0, (0, k.getNumberValidator)()), X(re, "listening", !0, (0, k.getBooleanValidator)()), X(re, "preventDefault", !0, (0, k.getBooleanValidator)()), X(re, "filters", void 0, function(me) {
    return this._filterUpToDate = !1, me;
  }), X(re, "visible", !0, (0, k.getBooleanValidator)()), X(re, "transformsEnabled", "all", (0, k.getStringValidator)()), X(re, "size"), X(re, "dragBoundFunc"), X(re, "draggable", !1, (0, k.getBooleanValidator)()), v.Factory.backCompat(re, {
    rotateDeg: "rotate",
    setRotationDeg: "setRotation",
    getRotationDeg: "getRotation"
  }), tu;
}
var nu = {}, yh;
function ld() {
  if (yh) return nu;
  yh = 1, Object.defineProperty(nu, "__esModule", { value: !0 }), nu.Container = void 0;
  const l = lt(), d = on(), v = ct();
  let L = class extends d.Node {
    constructor() {
      super(...arguments), this.children = [];
    }
    getChildren(k) {
      const f = this.children || [];
      return k ? f.filter(k) : f;
    }
    hasChildren() {
      return this.getChildren().length > 0;
    }
    removeChildren() {
      return this.getChildren().forEach((k) => {
        k.parent = null, k.index = 0, k.remove();
      }), this.children = [], this._requestDraw(), this;
    }
    destroyChildren() {
      return this.getChildren().forEach((k) => {
        k.parent = null, k.index = 0, k.destroy();
      }), this.children = [], this._requestDraw(), this;
    }
    add(...k) {
      if (k.length === 0)
        return this;
      if (k.length > 1) {
        for (let g = 0; g < k.length; g++)
          this.add(k[g]);
        return this;
      }
      const f = k[0];
      return f.getParent() ? (f.moveTo(this), this) : (this._validateAdd(f), f.index = this.getChildren().length, f.parent = this, f._clearCaches(), this.getChildren().push(f), this._fire("add", {
        child: f
      }), this._requestDraw(), this);
    }
    destroy() {
      return this.hasChildren() && this.destroyChildren(), super.destroy(), this;
    }
    find(k) {
      return this._generalFind(k, !1);
    }
    findOne(k) {
      const f = this._generalFind(k, !0);
      return f.length > 0 ? f[0] : void 0;
    }
    _generalFind(k, f) {
      const g = [];
      return this._descendants((m) => {
        const C = m._isMatch(k);
        return C && g.push(m), !!(C && f);
      }), g;
    }
    _descendants(k) {
      let f = !1;
      const g = this.getChildren();
      for (const m of g) {
        if (f = k(m), f)
          return !0;
        if (m.hasChildren() && (f = m._descendants(k), f))
          return !0;
      }
      return !1;
    }
    toObject() {
      const k = d.Node.prototype.toObject.call(this);
      return k.children = [], this.getChildren().forEach((f) => {
        k.children.push(f.toObject());
      }), k;
    }
    isAncestorOf(k) {
      let f = k.getParent();
      for (; f; ) {
        if (f._id === this._id)
          return !0;
        f = f.getParent();
      }
      return !1;
    }
    clone(k) {
      const f = d.Node.prototype.clone.call(this, k);
      return this.getChildren().forEach(function(g) {
        f.add(g.clone());
      }), f;
    }
    getAllIntersections(k) {
      const f = [];
      return this.find("Shape").forEach((g) => {
        g.isVisible() && g.intersects(k) && f.push(g);
      }), f;
    }
    _clearSelfAndDescendantCache(k) {
      var f;
      super._clearSelfAndDescendantCache(k), !this.isCached() && ((f = this.children) === null || f === void 0 || f.forEach(function(g) {
        g._clearSelfAndDescendantCache(k);
      }));
    }
    _setChildrenIndices() {
      var k;
      (k = this.children) === null || k === void 0 || k.forEach(function(f, g) {
        f.index = g;
      }), this._requestDraw();
    }
    drawScene(k, f, g) {
      const m = this.getLayer(), C = k || m && m.getCanvas(), E = C && C.getContext(), F = this._getCanvasCache(), P = F && F.scene, S = C && C.isCache;
      if (!this.isVisible() && !S)
        return this;
      if (P) {
        E.save();
        const x = this.getAbsoluteTransform(f).getMatrix();
        E.transform(x[0], x[1], x[2], x[3], x[4], x[5]), this._drawCachedSceneCanvas(E), E.restore();
      } else
        this._drawChildren("drawScene", C, f, g);
      return this;
    }
    drawHit(k, f) {
      if (!this.shouldDrawHit(f))
        return this;
      const g = this.getLayer(), m = k || g && g.hitCanvas, C = m && m.getContext(), E = this._getCanvasCache();
      if (E && E.hit) {
        C.save();
        const P = this.getAbsoluteTransform(f).getMatrix();
        C.transform(P[0], P[1], P[2], P[3], P[4], P[5]), this._drawCachedHitCanvas(C), C.restore();
      } else
        this._drawChildren("drawHit", m, f);
      return this;
    }
    _drawChildren(k, f, g, m) {
      var C;
      const E = f && f.getContext(), F = this.clipWidth(), P = this.clipHeight(), S = this.clipFunc(), x = typeof F == "number" && typeof P == "number" || S, R = g === this;
      if (x) {
        E.save();
        const j = this.getAbsoluteTransform(g);
        let w = j.getMatrix();
        E.transform(w[0], w[1], w[2], w[3], w[4], w[5]), E.beginPath();
        let h;
        if (S)
          h = S.call(this, E, this);
        else {
          const T = this.clipX(), I = this.clipY();
          E.rect(T || 0, I || 0, F, P);
        }
        E.clip.apply(E, h), w = j.copy().invert().getMatrix(), E.transform(w[0], w[1], w[2], w[3], w[4], w[5]);
      }
      const A = !R && this.globalCompositeOperation() !== "source-over" && k === "drawScene";
      A && (E.save(), E._applyGlobalCompositeOperation(this)), (C = this.children) === null || C === void 0 || C.forEach(function(j) {
        j[k](f, g, m);
      }), A && E.restore(), x && E.restore();
    }
    getClientRect(k = {}) {
      var f;
      const g = k.skipTransform, m = k.relativeTo;
      let C, E, F, P, S = {
        x: 1 / 0,
        y: 1 / 0,
        width: 0,
        height: 0
      };
      const x = this;
      (f = this.children) === null || f === void 0 || f.forEach(function(j) {
        if (!j.visible())
          return;
        const w = j.getClientRect({
          relativeTo: x,
          skipShadow: k.skipShadow,
          skipStroke: k.skipStroke
        });
        w.width === 0 && w.height === 0 || (C === void 0 ? (C = w.x, E = w.y, F = w.x + w.width, P = w.y + w.height) : (C = Math.min(C, w.x), E = Math.min(E, w.y), F = Math.max(F, w.x + w.width), P = Math.max(P, w.y + w.height)));
      });
      const R = this.find("Shape");
      let A = !1;
      for (let j = 0; j < R.length; j++)
        if (R[j]._isVisible(this)) {
          A = !0;
          break;
        }
      return A && C !== void 0 ? S = {
        x: C,
        y: E,
        width: F - C,
        height: P - E
      } : S = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      }, g ? S : this._transformedRect(S, m);
    }
  };
  return nu.Container = L, l.Factory.addComponentsGetterSetter(L, "clip", [
    "x",
    "y",
    "width",
    "height"
  ]), l.Factory.addGetterSetter(L, "clipX", void 0, (0, v.getNumberValidator)()), l.Factory.addGetterSetter(L, "clipY", void 0, (0, v.getNumberValidator)()), l.Factory.addGetterSetter(L, "clipWidth", void 0, (0, v.getNumberValidator)()), l.Factory.addGetterSetter(L, "clipHeight", void 0, (0, v.getNumberValidator)()), l.Factory.addGetterSetter(L, "clipFunc"), nu;
}
var $d = {}, ds = {}, vh;
function B0() {
  if (vh) return ds;
  vh = 1, Object.defineProperty(ds, "__esModule", { value: !0 }), ds.getCapturedShape = L, ds.createEvent = M, ds.hasPointerCapture = k, ds.setPointerCapture = f, ds.releaseCapture = g;
  const l = tt(), d = /* @__PURE__ */ new Map(), v = l.Konva._global.PointerEvent !== void 0;
  function L(m) {
    return d.get(m);
  }
  function M(m) {
    return {
      evt: m,
      pointerId: m.pointerId
    };
  }
  function k(m, C) {
    return d.get(m) === C;
  }
  function f(m, C) {
    g(m), C.getStage() && (d.set(m, C), v && C._fire("gotpointercapture", M(new PointerEvent("gotpointercapture"))));
  }
  function g(m, C) {
    const E = d.get(m);
    if (!E)
      return;
    const F = E.getStage();
    F && F.content, d.delete(m), v && E._fire("lostpointercapture", M(new PointerEvent("lostpointercapture")));
  }
  return ds;
}
var _h;
function O1() {
  return _h || (_h = 1, (function(l) {
    Object.defineProperty(l, "__esModule", { value: !0 }), l.Stage = l.stages = void 0;
    const d = Qt(), v = lt(), L = ld(), M = tt(), k = sd(), f = mf(), g = tt(), m = B0(), C = "Stage", E = "string", F = "px", P = "mouseout", S = "mouseleave", x = "mouseover", R = "mouseenter", A = "mousemove", j = "mousedown", w = "mouseup", h = "pointermove", T = "pointerdown", I = "pointerup", H = "pointercancel", J = "lostpointercapture", z = "pointerout", G = "pointerleave", V = "pointerover", Q = "pointerenter", Z = "contextmenu", ee = "touchstart", re = "touchend", X = "touchmove", me = "touchcancel", N = "wheel", D = 5, W = [
      [R, "_pointerenter"],
      [j, "_pointerdown"],
      [A, "_pointermove"],
      [w, "_pointerup"],
      [S, "_pointerleave"],
      [ee, "_pointerdown"],
      [X, "_pointermove"],
      [re, "_pointerup"],
      [me, "_pointercancel"],
      [x, "_pointerover"],
      [N, "_wheel"],
      [Z, "_contextmenu"],
      [T, "_pointerdown"],
      [h, "_pointermove"],
      [I, "_pointerup"],
      [H, "_pointercancel"],
      [G, "_pointerleave"],
      [J, "_lostpointercapture"]
    ], U = {
      mouse: {
        [z]: P,
        [G]: S,
        [V]: x,
        [Q]: R,
        [h]: A,
        [T]: j,
        [I]: w,
        [H]: "mousecancel",
        pointerclick: "click",
        pointerdblclick: "dblclick"
      },
      touch: {
        [z]: "touchout",
        [G]: "touchleave",
        [V]: "touchover",
        [Q]: "touchenter",
        [h]: X,
        [T]: ee,
        [I]: re,
        [H]: me,
        pointerclick: "tap",
        pointerdblclick: "dbltap"
      },
      pointer: {
        [z]: z,
        [G]: G,
        [V]: V,
        [Q]: Q,
        [h]: h,
        [T]: T,
        [I]: I,
        [H]: H,
        pointerclick: "pointerclick",
        pointerdblclick: "pointerdblclick"
      }
    }, _ = (oe) => oe.indexOf("pointer") >= 0 ? "pointer" : oe.indexOf("touch") >= 0 ? "touch" : "mouse", K = (oe) => {
      const q = _(oe);
      if (q === "pointer")
        return M.Konva.pointerEventsEnabled && U.pointer;
      if (q === "touch")
        return U.touch;
      if (q === "mouse")
        return U.mouse;
    };
    function b(oe = {}) {
      return (oe.clipFunc || oe.clipWidth || oe.clipHeight) && d.Util.warn("Stage does not support clipping. Please use clip for Layers or Groups."), oe;
    }
    const ae = "Pointer position is missing and not registered by the stage. Looks like it is outside of the stage container. You can set it manually from event: stage.setPointersPositions(event);";
    l.stages = [];
    class pe extends L.Container {
      constructor(q) {
        super(b(q)), this._pointerPositions = [], this._changedPointerPositions = [], this._buildDOM(), this._bindContentEvents(), l.stages.push(this), this.on("widthChange.konva heightChange.konva", this._resizeDOM), this.on("visibleChange.konva", this._checkVisibility), this.on("clipWidthChange.konva clipHeightChange.konva clipFuncChange.konva", () => {
          b(this.attrs);
        }), this._checkVisibility();
      }
      _validateAdd(q) {
        const ie = q.getType() === "Layer", ye = q.getType() === "FastLayer";
        ie || ye || d.Util.throw("You may only add layers to the stage.");
      }
      _checkVisibility() {
        if (!this.content)
          return;
        const q = this.visible() ? "" : "none";
        this.content.style.display = q;
      }
      setContainer(q) {
        if (typeof q === E) {
          let ie;
          if (q.charAt(0) === ".") {
            const ye = q.slice(1);
            q = document.getElementsByClassName(ye)[0];
          } else
            q.charAt(0) !== "#" ? ie = q : ie = q.slice(1), q = document.getElementById(ie);
          if (!q)
            throw "Can not find container in document with id " + ie;
        }
        return this._setAttr("container", q), this.content && (this.content.parentElement && this.content.parentElement.removeChild(this.content), q.appendChild(this.content)), this;
      }
      shouldDrawHit() {
        return !0;
      }
      clear() {
        const q = this.children, ie = q.length;
        for (let ye = 0; ye < ie; ye++)
          q[ye].clear();
        return this;
      }
      clone(q) {
        return q || (q = {}), q.container = typeof document < "u" && document.createElement("div"), L.Container.prototype.clone.call(this, q);
      }
      destroy() {
        super.destroy();
        const q = this.content;
        q && d.Util._isInDocument(q) && this.container().removeChild(q);
        const ie = l.stages.indexOf(this);
        return ie > -1 && l.stages.splice(ie, 1), d.Util.releaseCanvas(this.bufferCanvas._canvas, this.bufferHitCanvas._canvas), this;
      }
      getPointerPosition() {
        const q = this._pointerPositions[0] || this._changedPointerPositions[0];
        return q ? {
          x: q.x,
          y: q.y
        } : (d.Util.warn(ae), null);
      }
      _getPointerById(q) {
        return this._pointerPositions.find((ie) => ie.id === q);
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
        const ie = new k.SceneCanvas({
          width: q.width,
          height: q.height,
          pixelRatio: q.pixelRatio || 1
        }), ye = ie.getContext()._context, Ee = this.children;
        return (q.x || q.y) && ye.translate(-1 * q.x, -1 * q.y), Ee.forEach(function(Me) {
          if (!Me.isVisible())
            return;
          const je = Me._toKonvaCanvas(q);
          ye.drawImage(je._canvas, q.x, q.y, je.getWidth() / je.getPixelRatio(), je.getHeight() / je.getPixelRatio());
        }), ie;
      }
      getIntersection(q) {
        if (!q)
          return null;
        const ie = this.children, ye = ie.length, Ee = ye - 1;
        for (let Me = Ee; Me >= 0; Me--) {
          const je = ie[Me].getIntersection(q);
          if (je)
            return je;
        }
        return null;
      }
      _resizeDOM() {
        const q = this.width(), ie = this.height();
        this.content && (this.content.style.width = q + F, this.content.style.height = ie + F), this.bufferCanvas.setSize(q, ie), this.bufferHitCanvas.setSize(q, ie), this.children.forEach((ye) => {
          ye.setSize({ width: q, height: ie }), ye.draw();
        });
      }
      add(q, ...ie) {
        if (arguments.length > 1) {
          for (let Ee = 0; Ee < arguments.length; Ee++)
            this.add(arguments[Ee]);
          return this;
        }
        super.add(q);
        const ye = this.children.length;
        return ye > D && d.Util.warn("The stage has " + ye + " layers. Recommended maximum number of layers is 3-5. Adding more layers into the stage may drop the performance. Rethink your tree structure, you can use Konva.Group."), q.setSize({ width: this.width(), height: this.height() }), q.draw(), M.Konva.isBrowser && this.content.appendChild(q.canvas._canvas), this;
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
        M.Konva.isBrowser && W.forEach(([q, ie]) => {
          this.content.addEventListener(q, (ye) => {
            this[ie](ye);
          }, { passive: !1 });
        });
      }
      _pointerenter(q) {
        this.setPointersPositions(q);
        const ie = K(q.type);
        ie && this._fire(ie.pointerenter, {
          evt: q,
          target: this,
          currentTarget: this
        });
      }
      _pointerover(q) {
        this.setPointersPositions(q);
        const ie = K(q.type);
        ie && this._fire(ie.pointerover, {
          evt: q,
          target: this,
          currentTarget: this
        });
      }
      _getTargetShape(q) {
        let ie = this[q + "targetShape"];
        return ie && !ie.getStage() && (ie = null), ie;
      }
      _pointerleave(q) {
        const ie = K(q.type), ye = _(q.type);
        if (!ie)
          return;
        this.setPointersPositions(q);
        const Ee = this._getTargetShape(ye), Me = !(M.Konva.isDragging() || M.Konva.isTransforming()) || M.Konva.hitOnDragEnabled;
        Ee && Me ? (Ee._fireAndBubble(ie.pointerout, { evt: q }), Ee._fireAndBubble(ie.pointerleave, { evt: q }), this._fire(ie.pointerleave, {
          evt: q,
          target: this,
          currentTarget: this
        }), this[ye + "targetShape"] = null) : Me && (this._fire(ie.pointerleave, {
          evt: q,
          target: this,
          currentTarget: this
        }), this._fire(ie.pointerout, {
          evt: q,
          target: this,
          currentTarget: this
        })), this.pointerPos = null, this._pointerPositions = [];
      }
      _pointerdown(q) {
        const ie = K(q.type), ye = _(q.type);
        if (!ie)
          return;
        this.setPointersPositions(q);
        let Ee = !1;
        this._changedPointerPositions.forEach((Me) => {
          const je = this.getIntersection(Me);
          if (f.DD.justDragged = !1, M.Konva["_" + ye + "ListenClick"] = !0, !je || !je.isListening()) {
            this[ye + "ClickStartShape"] = void 0;
            return;
          }
          M.Konva.capturePointerEventsEnabled && je.setPointerCapture(Me.id), this[ye + "ClickStartShape"] = je, je._fireAndBubble(ie.pointerdown, {
            evt: q,
            pointerId: Me.id
          }), Ee = !0;
          const Ue = q.type.indexOf("touch") >= 0;
          je.preventDefault() && q.cancelable && Ue && q.preventDefault();
        }), Ee || this._fire(ie.pointerdown, {
          evt: q,
          target: this,
          currentTarget: this,
          pointerId: this._pointerPositions[0].id
        });
      }
      _pointermove(q) {
        const ie = K(q.type), ye = _(q.type);
        if (!ie || (M.Konva.isDragging() && f.DD.node.preventDefault() && q.cancelable && q.preventDefault(), this.setPointersPositions(q), !(!(M.Konva.isDragging() || M.Konva.isTransforming()) || M.Konva.hitOnDragEnabled)))
          return;
        const Me = {};
        let je = !1;
        const Ue = this._getTargetShape(ye);
        this._changedPointerPositions.forEach((ot) => {
          const we = m.getCapturedShape(ot.id) || this.getIntersection(ot), Je = ot.id, Qe = { evt: q, pointerId: Je }, St = Ue !== we;
          if (St && Ue && (Ue._fireAndBubble(ie.pointerout, { ...Qe }, we), Ue._fireAndBubble(ie.pointerleave, { ...Qe }, we)), we) {
            if (Me[we._id])
              return;
            Me[we._id] = !0;
          }
          we && we.isListening() ? (je = !0, St && (we._fireAndBubble(ie.pointerover, { ...Qe }, Ue), we._fireAndBubble(ie.pointerenter, { ...Qe }, Ue), this[ye + "targetShape"] = we), we._fireAndBubble(ie.pointermove, { ...Qe })) : Ue && (this._fire(ie.pointerover, {
            evt: q,
            target: this,
            currentTarget: this,
            pointerId: Je
          }), this[ye + "targetShape"] = null);
        }), je || this._fire(ie.pointermove, {
          evt: q,
          target: this,
          currentTarget: this,
          pointerId: this._changedPointerPositions[0].id
        });
      }
      _pointerup(q) {
        const ie = K(q.type), ye = _(q.type);
        if (!ie)
          return;
        this.setPointersPositions(q);
        const Ee = this[ye + "ClickStartShape"], Me = this[ye + "ClickEndShape"], je = {};
        let Ue = !1;
        this._changedPointerPositions.forEach((ot) => {
          const we = m.getCapturedShape(ot.id) || this.getIntersection(ot);
          if (we) {
            if (we.releaseCapture(ot.id), je[we._id])
              return;
            je[we._id] = !0;
          }
          const Je = ot.id, Qe = { evt: q, pointerId: Je };
          let St = !1;
          M.Konva["_" + ye + "InDblClickWindow"] ? (St = !0, clearTimeout(this[ye + "DblTimeout"])) : f.DD.justDragged || (M.Konva["_" + ye + "InDblClickWindow"] = !0, clearTimeout(this[ye + "DblTimeout"])), this[ye + "DblTimeout"] = setTimeout(function() {
            M.Konva["_" + ye + "InDblClickWindow"] = !1;
          }, M.Konva.dblClickWindow), we && we.isListening() ? (Ue = !0, this[ye + "ClickEndShape"] = we, we._fireAndBubble(ie.pointerup, { ...Qe }), M.Konva["_" + ye + "ListenClick"] && Ee && Ee === we && (we._fireAndBubble(ie.pointerclick, { ...Qe }), St && Me && Me === we && we._fireAndBubble(ie.pointerdblclick, { ...Qe }))) : (this[ye + "ClickEndShape"] = null, M.Konva["_" + ye + "ListenClick"] && this._fire(ie.pointerclick, {
            evt: q,
            target: this,
            currentTarget: this,
            pointerId: Je
          }), St && this._fire(ie.pointerdblclick, {
            evt: q,
            target: this,
            currentTarget: this,
            pointerId: Je
          }));
        }), Ue || this._fire(ie.pointerup, {
          evt: q,
          target: this,
          currentTarget: this,
          pointerId: this._changedPointerPositions[0].id
        }), M.Konva["_" + ye + "ListenClick"] = !1, q.cancelable && ye !== "touch" && ye !== "pointer" && q.preventDefault();
      }
      _contextmenu(q) {
        this.setPointersPositions(q);
        const ie = this.getIntersection(this.getPointerPosition());
        ie && ie.isListening() ? ie._fireAndBubble(Z, { evt: q }) : this._fire(Z, {
          evt: q,
          target: this,
          currentTarget: this
        });
      }
      _wheel(q) {
        this.setPointersPositions(q);
        const ie = this.getIntersection(this.getPointerPosition());
        ie && ie.isListening() ? ie._fireAndBubble(N, { evt: q }) : this._fire(N, {
          evt: q,
          target: this,
          currentTarget: this
        });
      }
      _pointercancel(q) {
        this.setPointersPositions(q);
        const ie = m.getCapturedShape(q.pointerId) || this.getIntersection(this.getPointerPosition());
        ie && ie._fireAndBubble(I, m.createEvent(q)), m.releaseCapture(q.pointerId);
      }
      _lostpointercapture(q) {
        m.releaseCapture(q.pointerId);
      }
      setPointersPositions(q) {
        const ie = this._getContentPosition();
        let ye = null, Ee = null;
        q = q || window.event, q.touches !== void 0 ? (this._pointerPositions = [], this._changedPointerPositions = [], Array.prototype.forEach.call(q.touches, (Me) => {
          this._pointerPositions.push({
            id: Me.identifier,
            x: (Me.clientX - ie.left) / ie.scaleX,
            y: (Me.clientY - ie.top) / ie.scaleY
          });
        }), Array.prototype.forEach.call(q.changedTouches || q.touches, (Me) => {
          this._changedPointerPositions.push({
            id: Me.identifier,
            x: (Me.clientX - ie.left) / ie.scaleX,
            y: (Me.clientY - ie.top) / ie.scaleY
          });
        })) : (ye = (q.clientX - ie.left) / ie.scaleX, Ee = (q.clientY - ie.top) / ie.scaleY, this.pointerPos = {
          x: ye,
          y: Ee
        }, this._pointerPositions = [{ x: ye, y: Ee, id: d.Util._getFirstPointerId(q) }], this._changedPointerPositions = [
          { x: ye, y: Ee, id: d.Util._getFirstPointerId(q) }
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
        if (this.bufferCanvas = new k.SceneCanvas({
          width: this.width(),
          height: this.height()
        }), this.bufferHitCanvas = new k.HitCanvas({
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
    l.Stage = pe, pe.prototype.nodeType = C, (0, g._registerNode)(pe), v.Factory.addGetterSetter(pe, "container"), M.Konva.isBrowser && document.addEventListener("visibilitychange", () => {
      l.stages.forEach((oe) => {
        oe.batchDraw();
      });
    });
  })($d)), $d;
}
var ru = {}, ef = {}, Sh;
function Fn() {
  return Sh || (Sh = 1, (function(l) {
    Object.defineProperty(l, "__esModule", { value: !0 }), l.Shape = l.shapes = void 0;
    const d = tt(), v = Qt(), L = lt(), M = on(), k = ct(), f = tt(), g = B0(), m = "hasShadow", C = "shadowRGBA", E = "patternImage", F = "linearGradient", P = "radialGradient";
    let S;
    function x() {
      return S || (S = v.Util.createCanvasElement().getContext("2d"), S);
    }
    l.shapes = {};
    function R(G) {
      const V = this.attrs.fillRule;
      V ? G.fill(V) : G.fill();
    }
    function A(G) {
      G.stroke();
    }
    function j(G) {
      const V = this.attrs.fillRule;
      V ? G.fill(V) : G.fill();
    }
    function w(G) {
      G.stroke();
    }
    function h() {
      this._clearCache(m);
    }
    function T() {
      this._clearCache(C);
    }
    function I() {
      this._clearCache(E);
    }
    function H() {
      this._clearCache(F);
    }
    function J() {
      this._clearCache(P);
    }
    class z extends M.Node {
      constructor(V) {
        super(V);
        let Q;
        for (; Q = v.Util.getRandomColor(), !(Q && !(Q in l.shapes)); )
          ;
        this.colorKey = Q, l.shapes[Q] = this;
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
        return this._getCache(E, this.__getFillPattern);
      }
      __getFillPattern() {
        if (this.fillPatternImage()) {
          const Q = x().createPattern(this.fillPatternImage(), this.fillPatternRepeat() || "repeat");
          if (Q && Q.setTransform) {
            const Z = new v.Transform();
            Z.translate(this.fillPatternX(), this.fillPatternY()), Z.rotate(d.Konva.getAngle(this.fillPatternRotation())), Z.scale(this.fillPatternScaleX(), this.fillPatternScaleY()), Z.translate(-1 * this.fillPatternOffsetX(), -1 * this.fillPatternOffsetY());
            const ee = Z.getMatrix(), re = typeof DOMMatrix > "u" ? {
              a: ee[0],
              b: ee[1],
              c: ee[2],
              d: ee[3],
              e: ee[4],
              f: ee[5]
            } : new DOMMatrix(ee);
            Q.setTransform(re);
          }
          return Q;
        }
      }
      _getLinearGradient() {
        return this._getCache(F, this.__getLinearGradient);
      }
      __getLinearGradient() {
        const V = this.fillLinearGradientColorStops();
        if (V) {
          const Q = x(), Z = this.fillLinearGradientStartPoint(), ee = this.fillLinearGradientEndPoint(), re = Q.createLinearGradient(Z.x, Z.y, ee.x, ee.y);
          for (let X = 0; X < V.length; X += 2)
            re.addColorStop(V[X], V[X + 1]);
          return re;
        }
      }
      _getRadialGradient() {
        return this._getCache(P, this.__getRadialGradient);
      }
      __getRadialGradient() {
        const V = this.fillRadialGradientColorStops();
        if (V) {
          const Q = x(), Z = this.fillRadialGradientStartPoint(), ee = this.fillRadialGradientEndPoint(), re = Q.createRadialGradient(Z.x, Z.y, this.fillRadialGradientStartRadius(), ee.x, ee.y, this.fillRadialGradientEndRadius());
          for (let X = 0; X < V.length; X += 2)
            re.addColorStop(V[X], V[X + 1]);
          return re;
        }
      }
      getShadowRGBA() {
        return this._getCache(C, this._getShadowRGBA);
      }
      _getShadowRGBA() {
        if (!this.hasShadow())
          return;
        const V = v.Util.colorToRGBA(this.shadowColor());
        if (V)
          return "rgba(" + V.r + "," + V.g + "," + V.b + "," + V.a * (this.shadowOpacity() || 1) + ")";
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
        const V = this.hitStrokeWidth();
        return V === "auto" ? this.hasStroke() : this.strokeEnabled() && !!V;
      }
      intersects(V) {
        const Q = this.getStage();
        if (!Q)
          return !1;
        const Z = Q.bufferHitCanvas;
        return Z.getContext().clear(), this.drawHit(Z, void 0, !0), Z.context.getImageData(Math.round(V.x), Math.round(V.y), 1, 1).data[3] > 0;
      }
      destroy() {
        return M.Node.prototype.destroy.call(this), delete l.shapes[this.colorKey], delete this.colorKey, this;
      }
      _useBufferCanvas(V) {
        var Q;
        if (!((Q = this.attrs.perfectDrawEnabled) !== null && Q !== void 0 ? Q : !0))
          return !1;
        const ee = V || this.hasFill(), re = this.hasStroke(), X = this.getAbsoluteOpacity() !== 1;
        if (ee && re && X)
          return !0;
        const me = this.hasShadow(), N = this.shadowForStrokeEnabled();
        return !!(ee && re && me && N);
      }
      setStrokeHitEnabled(V) {
        v.Util.warn("strokeHitEnabled property is deprecated. Please use hitStrokeWidth instead."), V ? this.hitStrokeWidth("auto") : this.hitStrokeWidth(0);
      }
      getStrokeHitEnabled() {
        return this.hitStrokeWidth() !== 0;
      }
      getSelfRect() {
        const V = this.size();
        return {
          x: this._centroid ? -V.width / 2 : 0,
          y: this._centroid ? -V.height / 2 : 0,
          width: V.width,
          height: V.height
        };
      }
      getClientRect(V = {}) {
        let Q = !1, Z = this.getParent();
        for (; Z; ) {
          if (Z.isCached()) {
            Q = !0;
            break;
          }
          Z = Z.getParent();
        }
        const ee = V.skipTransform, re = V.relativeTo || Q && this.getStage() || void 0, X = this.getSelfRect(), N = !V.skipStroke && this.hasStroke() && this.strokeWidth() || 0, D = X.width + N, W = X.height + N, U = !V.skipShadow && this.hasShadow(), _ = U ? this.shadowOffsetX() : 0, K = U ? this.shadowOffsetY() : 0, b = D + Math.abs(_), ae = W + Math.abs(K), pe = U && this.shadowBlur() || 0, oe = b + pe * 2, q = ae + pe * 2, ie = {
          width: oe,
          height: q,
          x: -(N / 2 + pe) + Math.min(_, 0) + X.x,
          y: -(N / 2 + pe) + Math.min(K, 0) + X.y
        };
        return ee ? ie : this._transformedRect(ie, re);
      }
      drawScene(V, Q, Z) {
        const ee = this.getLayer(), re = V || ee.getCanvas(), X = re.getContext(), me = this._getCanvasCache(), N = this.getSceneFunc(), D = this.hasShadow();
        let W;
        const U = Q === this;
        if (!this.isVisible() && !U)
          return this;
        if (me) {
          X.save();
          const _ = this.getAbsoluteTransform(Q).getMatrix();
          return X.transform(_[0], _[1], _[2], _[3], _[4], _[5]), this._drawCachedSceneCanvas(X), X.restore(), this;
        }
        if (!N)
          return this;
        if (X.save(), this._useBufferCanvas()) {
          W = this.getStage();
          const _ = Z || W.bufferCanvas, K = _.getContext();
          K.clear(), K.save(), K._applyLineJoin(this);
          const b = this.getAbsoluteTransform(Q).getMatrix();
          K.transform(b[0], b[1], b[2], b[3], b[4], b[5]), N.call(this, K, this), K.restore();
          const ae = _.pixelRatio;
          D && X._applyShadow(this), X._applyOpacity(this), X._applyGlobalCompositeOperation(this), X.drawImage(_._canvas, _.x || 0, _.y || 0, _.width / ae, _.height / ae);
        } else {
          if (X._applyLineJoin(this), !U) {
            const _ = this.getAbsoluteTransform(Q).getMatrix();
            X.transform(_[0], _[1], _[2], _[3], _[4], _[5]), X._applyOpacity(this), X._applyGlobalCompositeOperation(this);
          }
          D && X._applyShadow(this), N.call(this, X, this);
        }
        return X.restore(), this;
      }
      drawHit(V, Q, Z = !1) {
        if (!this.shouldDrawHit(Q, Z))
          return this;
        const ee = this.getLayer(), re = V || ee.hitCanvas, X = re && re.getContext(), me = this.hitFunc() || this.sceneFunc(), N = this._getCanvasCache(), D = N && N.hit;
        if (this.colorKey || v.Util.warn("Looks like your canvas has a destroyed shape in it. Do not reuse shape after you destroyed it. If you want to reuse shape you should call remove() instead of destroy()"), D) {
          X.save();
          const U = this.getAbsoluteTransform(Q).getMatrix();
          return X.transform(U[0], U[1], U[2], U[3], U[4], U[5]), this._drawCachedHitCanvas(X), X.restore(), this;
        }
        if (!me)
          return this;
        if (X.save(), X._applyLineJoin(this), !(this === Q)) {
          const U = this.getAbsoluteTransform(Q).getMatrix();
          X.transform(U[0], U[1], U[2], U[3], U[4], U[5]);
        }
        return me.call(this, X, this), X.restore(), this;
      }
      drawHitFromCache(V = 0) {
        const Q = this._getCanvasCache(), Z = this._getCachedSceneCanvas(), ee = Q.hit, re = ee.getContext(), X = ee.getWidth(), me = ee.getHeight();
        re.clear(), re.drawImage(Z._canvas, 0, 0, X, me);
        try {
          const N = re.getImageData(0, 0, X, me), D = N.data, W = D.length, U = v.Util._hexToRgb(this.colorKey);
          for (let _ = 0; _ < W; _ += 4)
            D[_ + 3] > V ? (D[_] = U.r, D[_ + 1] = U.g, D[_ + 2] = U.b, D[_ + 3] = 255) : D[_ + 3] = 0;
          re.putImageData(N, 0, 0);
        } catch (N) {
          v.Util.error("Unable to draw hit graph from cached scene canvas. " + N.message);
        }
        return this;
      }
      hasPointerCapture(V) {
        return g.hasPointerCapture(V, this);
      }
      setPointerCapture(V) {
        g.setPointerCapture(V, this);
      }
      releaseCapture(V) {
        g.releaseCapture(V, this);
      }
    }
    l.Shape = z, z.prototype._fillFunc = R, z.prototype._strokeFunc = A, z.prototype._fillFuncHit = j, z.prototype._strokeFuncHit = w, z.prototype._centroid = !1, z.prototype.nodeType = "Shape", (0, f._registerNode)(z), z.prototype.eventListeners = {}, z.prototype.on.call(z.prototype, "shadowColorChange.konva shadowBlurChange.konva shadowOffsetChange.konva shadowOpacityChange.konva shadowEnabledChange.konva", h), z.prototype.on.call(z.prototype, "shadowColorChange.konva shadowOpacityChange.konva shadowEnabledChange.konva", T), z.prototype.on.call(z.prototype, "fillPriorityChange.konva fillPatternImageChange.konva fillPatternRepeatChange.konva fillPatternScaleXChange.konva fillPatternScaleYChange.konva fillPatternOffsetXChange.konva fillPatternOffsetYChange.konva fillPatternXChange.konva fillPatternYChange.konva fillPatternRotationChange.konva", I), z.prototype.on.call(z.prototype, "fillPriorityChange.konva fillLinearGradientColorStopsChange.konva fillLinearGradientStartPointXChange.konva fillLinearGradientStartPointYChange.konva fillLinearGradientEndPointXChange.konva fillLinearGradientEndPointYChange.konva", H), z.prototype.on.call(z.prototype, "fillPriorityChange.konva fillRadialGradientColorStopsChange.konva fillRadialGradientStartPointXChange.konva fillRadialGradientStartPointYChange.konva fillRadialGradientEndPointXChange.konva fillRadialGradientEndPointYChange.konva fillRadialGradientStartRadiusChange.konva fillRadialGradientEndRadiusChange.konva", J), L.Factory.addGetterSetter(z, "stroke", void 0, (0, k.getStringOrGradientValidator)()), L.Factory.addGetterSetter(z, "strokeWidth", 2, (0, k.getNumberValidator)()), L.Factory.addGetterSetter(z, "fillAfterStrokeEnabled", !1), L.Factory.addGetterSetter(z, "hitStrokeWidth", "auto", (0, k.getNumberOrAutoValidator)()), L.Factory.addGetterSetter(z, "strokeHitEnabled", !0, (0, k.getBooleanValidator)()), L.Factory.addGetterSetter(z, "perfectDrawEnabled", !0, (0, k.getBooleanValidator)()), L.Factory.addGetterSetter(z, "shadowForStrokeEnabled", !0, (0, k.getBooleanValidator)()), L.Factory.addGetterSetter(z, "lineJoin"), L.Factory.addGetterSetter(z, "lineCap"), L.Factory.addGetterSetter(z, "sceneFunc"), L.Factory.addGetterSetter(z, "hitFunc"), L.Factory.addGetterSetter(z, "dash"), L.Factory.addGetterSetter(z, "dashOffset", 0, (0, k.getNumberValidator)()), L.Factory.addGetterSetter(z, "shadowColor", void 0, (0, k.getStringValidator)()), L.Factory.addGetterSetter(z, "shadowBlur", 0, (0, k.getNumberValidator)()), L.Factory.addGetterSetter(z, "shadowOpacity", 1, (0, k.getNumberValidator)()), L.Factory.addComponentsGetterSetter(z, "shadowOffset", ["x", "y"]), L.Factory.addGetterSetter(z, "shadowOffsetX", 0, (0, k.getNumberValidator)()), L.Factory.addGetterSetter(z, "shadowOffsetY", 0, (0, k.getNumberValidator)()), L.Factory.addGetterSetter(z, "fillPatternImage"), L.Factory.addGetterSetter(z, "fill", void 0, (0, k.getStringOrGradientValidator)()), L.Factory.addGetterSetter(z, "fillPatternX", 0, (0, k.getNumberValidator)()), L.Factory.addGetterSetter(z, "fillPatternY", 0, (0, k.getNumberValidator)()), L.Factory.addGetterSetter(z, "fillLinearGradientColorStops"), L.Factory.addGetterSetter(z, "strokeLinearGradientColorStops"), L.Factory.addGetterSetter(z, "fillRadialGradientStartRadius", 0), L.Factory.addGetterSetter(z, "fillRadialGradientEndRadius", 0), L.Factory.addGetterSetter(z, "fillRadialGradientColorStops"), L.Factory.addGetterSetter(z, "fillPatternRepeat", "repeat"), L.Factory.addGetterSetter(z, "fillEnabled", !0), L.Factory.addGetterSetter(z, "strokeEnabled", !0), L.Factory.addGetterSetter(z, "shadowEnabled", !0), L.Factory.addGetterSetter(z, "dashEnabled", !0), L.Factory.addGetterSetter(z, "strokeScaleEnabled", !0), L.Factory.addGetterSetter(z, "fillPriority", "color"), L.Factory.addComponentsGetterSetter(z, "fillPatternOffset", ["x", "y"]), L.Factory.addGetterSetter(z, "fillPatternOffsetX", 0, (0, k.getNumberValidator)()), L.Factory.addGetterSetter(z, "fillPatternOffsetY", 0, (0, k.getNumberValidator)()), L.Factory.addComponentsGetterSetter(z, "fillPatternScale", ["x", "y"]), L.Factory.addGetterSetter(z, "fillPatternScaleX", 1, (0, k.getNumberValidator)()), L.Factory.addGetterSetter(z, "fillPatternScaleY", 1, (0, k.getNumberValidator)()), L.Factory.addComponentsGetterSetter(z, "fillLinearGradientStartPoint", [
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
    ]), L.Factory.addGetterSetter(z, "fillRadialGradientEndPointX", 0), L.Factory.addGetterSetter(z, "fillRadialGradientEndPointY", 0), L.Factory.addGetterSetter(z, "fillPatternRotation", 0), L.Factory.addGetterSetter(z, "fillRule", void 0, (0, k.getStringValidator)()), L.Factory.backCompat(z, {
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
function V0() {
  if (wh) return ru;
  wh = 1, Object.defineProperty(ru, "__esModule", { value: !0 }), ru.Layer = void 0;
  const l = Qt(), d = ld(), v = on(), L = lt(), M = sd(), k = ct(), f = Fn(), g = tt(), m = "#", C = "beforeDraw", E = "draw", F = [
    { x: 0, y: 0 },
    { x: -1, y: -1 },
    { x: 1, y: -1 },
    { x: 1, y: 1 },
    { x: -1, y: 1 }
  ], P = F.length;
  class S extends d.Container {
    constructor(R) {
      super(R), this.canvas = new M.SceneCanvas(), this.hitCanvas = new M.HitCanvas({
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
      const A = this.getStage();
      return A && A.content && (A.content.removeChild(this.getNativeCanvasElement()), R < A.children.length - 1 ? A.content.insertBefore(this.getNativeCanvasElement(), A.children[R + 1].getCanvas()._canvas) : A.content.appendChild(this.getNativeCanvasElement())), this;
    }
    moveToTop() {
      v.Node.prototype.moveToTop.call(this);
      const R = this.getStage();
      return R && R.content && (R.content.removeChild(this.getNativeCanvasElement()), R.content.appendChild(this.getNativeCanvasElement())), !0;
    }
    moveUp() {
      if (!v.Node.prototype.moveUp.call(this))
        return !1;
      const A = this.getStage();
      return !A || !A.content ? !1 : (A.content.removeChild(this.getNativeCanvasElement()), this.index < A.children.length - 1 ? A.content.insertBefore(this.getNativeCanvasElement(), A.children[this.index + 1].getCanvas()._canvas) : A.content.appendChild(this.getNativeCanvasElement()), !0);
    }
    moveDown() {
      if (v.Node.prototype.moveDown.call(this)) {
        const R = this.getStage();
        if (R) {
          const A = R.children;
          R.content && (R.content.removeChild(this.getNativeCanvasElement()), R.content.insertBefore(this.getNativeCanvasElement(), A[this.index + 1].getCanvas()._canvas));
        }
        return !0;
      }
      return !1;
    }
    moveToBottom() {
      if (v.Node.prototype.moveToBottom.call(this)) {
        const R = this.getStage();
        if (R) {
          const A = R.children;
          R.content && (R.content.removeChild(this.getNativeCanvasElement()), R.content.insertBefore(this.getNativeCanvasElement(), A[1].getCanvas()._canvas));
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
      return v.Node.prototype.remove.call(this), R && R.parentNode && l.Util._isInDocument(R) && R.parentNode.removeChild(R), this;
    }
    getStage() {
      return this.parent;
    }
    setSize({ width: R, height: A }) {
      return this.canvas.setSize(R, A), this.hitCanvas.setSize(R, A), this._setSmoothEnabled(), this;
    }
    _validateAdd(R) {
      const A = R.getType();
      A !== "Group" && A !== "Shape" && l.Util.throw("You may only add groups and shapes to a layer.");
    }
    _toKonvaCanvas(R) {
      return R = R || {}, R.width = R.width || this.getWidth(), R.height = R.height || this.getHeight(), R.x = R.x !== void 0 ? R.x : this.x(), R.y = R.y !== void 0 ? R.y : this.y(), v.Node.prototype._toKonvaCanvas.call(this, R);
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
      let A = 1, j = !1;
      for (; ; ) {
        for (let w = 0; w < P; w++) {
          const h = F[w], T = this._getIntersection({
            x: R.x + h.x * A,
            y: R.y + h.y * A
          }), I = T.shape;
          if (I)
            return I;
          if (j = !!T.antialiased, !T.antialiased)
            break;
        }
        if (j)
          A += 1;
        else
          return null;
      }
    }
    _getIntersection(R) {
      const A = this.hitCanvas.pixelRatio, j = this.hitCanvas.context.getImageData(Math.round(R.x * A), Math.round(R.y * A), 1, 1).data, w = j[3];
      if (w === 255) {
        const h = l.Util._rgbToHex(j[0], j[1], j[2]), T = f.shapes[m + h];
        return T ? {
          shape: T
        } : {
          antialiased: !0
        };
      } else if (w > 0)
        return {
          antialiased: !0
        };
      return {};
    }
    drawScene(R, A, j) {
      const w = this.getLayer(), h = R || w && w.getCanvas();
      return this._fire(C, {
        node: this
      }), this.clearBeforeDraw() && h.getContext().clear(), d.Container.prototype.drawScene.call(this, h, A, j), this._fire(E, {
        node: this
      }), this;
    }
    drawHit(R, A) {
      const j = this.getLayer(), w = R || j && j.hitCanvas;
      return j && j.clearBeforeDraw() && j.getHitCanvas().getContext().clear(), d.Container.prototype.drawHit.call(this, w, A), this;
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
  return ru.Layer = S, S.prototype.nodeType = "Layer", (0, g._registerNode)(S), L.Factory.addGetterSetter(S, "imageSmoothingEnabled", !0), L.Factory.addGetterSetter(S, "clearBeforeDraw", !0), L.Factory.addGetterSetter(S, "hitGraphEnabled", !0, (0, k.getBooleanValidator)()), ru;
}
var iu = {}, xh;
function I1() {
  if (xh) return iu;
  xh = 1, Object.defineProperty(iu, "__esModule", { value: !0 }), iu.FastLayer = void 0;
  const l = Qt(), d = V0(), v = tt();
  let L = class extends d.Layer {
    constructor(k) {
      super(k), this.listening(!1), l.Util.warn('Konva.Fast layer is deprecated. Please use "new Konva.Layer({ listening: false })" instead.');
    }
  };
  return iu.FastLayer = L, L.prototype.nodeType = "FastLayer", (0, v._registerNode)(L), iu;
}
var ou = {}, Ch;
function yf() {
  if (Ch) return ou;
  Ch = 1, Object.defineProperty(ou, "__esModule", { value: !0 }), ou.Group = void 0;
  const l = Qt(), d = ld(), v = tt();
  class L extends d.Container {
    _validateAdd(k) {
      const f = k.getType();
      f !== "Group" && f !== "Shape" && l.Util.throw("You may only add groups and shapes to groups.");
    }
  }
  return ou.Group = L, L.prototype.nodeType = "Group", (0, v._registerNode)(L), ou;
}
var su = {}, kh;
function vf() {
  if (kh) return su;
  kh = 1, Object.defineProperty(su, "__esModule", { value: !0 }), su.Animation = void 0;
  const l = tt(), d = Qt(), v = (function() {
    return l.glob.performance && l.glob.performance.now ? function() {
      return l.glob.performance.now();
    } : function() {
      return (/* @__PURE__ */ new Date()).getTime();
    };
  })();
  let L = class sa {
    constructor(k, f) {
      this.id = sa.animIdCounter++, this.frame = {
        time: 0,
        timeDiff: 0,
        lastTime: v(),
        frameRate: 0
      }, this.func = k, this.setLayers(f);
    }
    setLayers(k) {
      let f = [];
      return k && (f = Array.isArray(k) ? k : [k]), this.layers = f, this;
    }
    getLayers() {
      return this.layers;
    }
    addLayer(k) {
      const f = this.layers, g = f.length;
      for (let m = 0; m < g; m++)
        if (f[m]._id === k._id)
          return !1;
      return this.layers.push(k), !0;
    }
    isRunning() {
      const f = sa.animations, g = f.length;
      for (let m = 0; m < g; m++)
        if (f[m].id === this.id)
          return !0;
      return !1;
    }
    start() {
      return this.stop(), this.frame.timeDiff = 0, this.frame.lastTime = v(), sa._addAnimation(this), this;
    }
    stop() {
      return sa._removeAnimation(this), this;
    }
    _updateFrameObject(k) {
      this.frame.timeDiff = k - this.frame.lastTime, this.frame.lastTime = k, this.frame.time += this.frame.timeDiff, this.frame.frameRate = 1e3 / this.frame.timeDiff;
    }
    static _addAnimation(k) {
      this.animations.push(k), this._handleAnimation();
    }
    static _removeAnimation(k) {
      const f = k.id, g = this.animations, m = g.length;
      for (let C = 0; C < m; C++)
        if (g[C].id === f) {
          this.animations.splice(C, 1);
          break;
        }
    }
    static _runFrames() {
      const k = {}, f = this.animations;
      for (let g = 0; g < f.length; g++) {
        const m = f[g], C = m.layers, E = m.func;
        m._updateFrameObject(v());
        const F = C.length;
        let P;
        if (E ? P = E.call(m, m.frame) !== !1 : P = !0, !!P)
          for (let S = 0; S < F; S++) {
            const x = C[S];
            x._id !== void 0 && (k[x._id] = x);
          }
      }
      for (const g in k)
        k.hasOwnProperty(g) && k[g].batchDraw();
    }
    static _animationLoop() {
      const k = sa;
      k.animations.length ? (k._runFrames(), d.Util.requestAnimFrame(k._animationLoop)) : k.animRunning = !1;
    }
    static _handleAnimation() {
      this.animRunning || (this.animRunning = !0, d.Util.requestAnimFrame(this._animationLoop));
    }
  };
  return su.Animation = L, L.animations = [], L.animIdCounter = 0, L.animRunning = !1, su;
}
var tf = {}, Eh;
function D1() {
  return Eh || (Eh = 1, (function(l) {
    Object.defineProperty(l, "__esModule", { value: !0 }), l.Easings = l.Tween = void 0;
    const d = Qt(), v = vf(), L = on(), M = tt(), k = {
      node: 1,
      duration: 1,
      easing: 1,
      onFinish: 1,
      yoyo: 1
    }, f = 1, g = 2, m = 3, C = ["fill", "stroke", "shadowColor"];
    let E = 0;
    class F {
      constructor(x, R, A, j, w, h, T) {
        this.prop = x, this.propFunc = R, this.begin = j, this._pos = j, this.duration = h, this._change = 0, this.prevPos = 0, this.yoyo = T, this._time = 0, this._position = 0, this._startTime = 0, this._finish = 0, this.func = A, this._change = w - this.begin, this.pause();
      }
      fire(x) {
        const R = this[x];
        R && R();
      }
      setTime(x) {
        x > this.duration ? this.yoyo ? (this._time = this.duration, this.reverse()) : this.finish() : x < 0 ? this.yoyo ? (this._time = 0, this.play()) : this.reset() : (this._time = x, this.update());
      }
      getTime() {
        return this._time;
      }
      setPosition(x) {
        this.prevPos = this._pos, this.propFunc(x), this._pos = x;
      }
      getPosition(x) {
        return x === void 0 && (x = this._time), this.func(x, this.begin, this._change, this.duration);
      }
      play() {
        this.state = g, this._startTime = this.getTimer() - this._time, this.onEnterFrame(), this.fire("onPlay");
      }
      reverse() {
        this.state = m, this._time = this.duration - this._time, this._startTime = this.getTimer() - this._time, this.onEnterFrame(), this.fire("onReverse");
      }
      seek(x) {
        this.pause(), this._time = x, this.update(), this.fire("onSeek");
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
        const x = this.getTimer() - this._startTime;
        this.state === g ? this.setTime(x) : this.state === m && this.setTime(this.duration - x);
      }
      pause() {
        this.state = f, this.fire("onPause");
      }
      getTimer() {
        return (/* @__PURE__ */ new Date()).getTime();
      }
    }
    class P {
      constructor(x) {
        const R = this, A = x.node, j = A._id, w = x.easing || l.Easings.Linear, h = !!x.yoyo;
        let T, I;
        typeof x.duration > "u" ? T = 0.3 : x.duration === 0 ? T = 1e-3 : T = x.duration, this.node = A, this._id = E++;
        const H = A.getLayer() || (A instanceof M.Konva.Stage ? A.getLayers() : null);
        H || d.Util.error("Tween constructor have `node` that is not in a layer. Please add node into layer first."), this.anim = new v.Animation(function() {
          R.tween.onEnterFrame();
        }, H), this.tween = new F(I, function(J) {
          R._tweenFunc(J);
        }, w, 0, 1, T * 1e3, h), this._addListeners(), P.attrs[j] || (P.attrs[j] = {}), P.attrs[j][this._id] || (P.attrs[j][this._id] = {}), P.tweens[j] || (P.tweens[j] = {});
        for (I in x)
          k[I] === void 0 && this._addAttr(I, x[I]);
        this.reset(), this.onFinish = x.onFinish, this.onReset = x.onReset, this.onUpdate = x.onUpdate;
      }
      _addAttr(x, R) {
        const A = this.node, j = A._id;
        let w, h, T, I, H;
        const J = P.tweens[j][x];
        J && delete P.attrs[j][J][x];
        let z = A.getAttr(x);
        if (d.Util._isArray(R))
          if (w = [], h = Math.max(R.length, z.length), x === "points" && R.length !== z.length && (R.length > z.length ? (I = z, z = d.Util._prepareArrayForTween(z, R, A.closed())) : (T = R, R = d.Util._prepareArrayForTween(R, z, A.closed()))), x.indexOf("fill") === 0)
            for (let G = 0; G < h; G++)
              if (G % 2 === 0)
                w.push(R[G] - z[G]);
              else {
                const V = d.Util.colorToRGBA(z[G]);
                H = d.Util.colorToRGBA(R[G]), z[G] = V, w.push({
                  r: H.r - V.r,
                  g: H.g - V.g,
                  b: H.b - V.b,
                  a: H.a - V.a
                });
              }
          else
            for (let G = 0; G < h; G++)
              w.push(R[G] - z[G]);
        else C.indexOf(x) !== -1 ? (z = d.Util.colorToRGBA(z), H = d.Util.colorToRGBA(R), w = {
          r: H.r - z.r,
          g: H.g - z.g,
          b: H.b - z.b,
          a: H.a - z.a
        }) : w = R - z;
        P.attrs[j][this._id][x] = {
          start: z,
          diff: w,
          end: R,
          trueEnd: T,
          trueStart: I
        }, P.tweens[j][x] = this._id;
      }
      _tweenFunc(x) {
        const R = this.node, A = P.attrs[R._id][this._id];
        let j, w, h, T, I, H, J, z;
        for (j in A) {
          if (w = A[j], h = w.start, T = w.diff, z = w.end, d.Util._isArray(h))
            if (I = [], J = Math.max(h.length, z.length), j.indexOf("fill") === 0)
              for (H = 0; H < J; H++)
                H % 2 === 0 ? I.push((h[H] || 0) + T[H] * x) : I.push("rgba(" + Math.round(h[H].r + T[H].r * x) + "," + Math.round(h[H].g + T[H].g * x) + "," + Math.round(h[H].b + T[H].b * x) + "," + (h[H].a + T[H].a * x) + ")");
            else
              for (H = 0; H < J; H++)
                I.push((h[H] || 0) + T[H] * x);
          else C.indexOf(j) !== -1 ? I = "rgba(" + Math.round(h.r + T.r * x) + "," + Math.round(h.g + T.g * x) + "," + Math.round(h.b + T.b * x) + "," + (h.a + T.a * x) + ")" : I = h + T * x;
          R.setAttr(j, I);
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
          const x = this.node, R = P.attrs[x._id][this._id];
          R.points && R.points.trueEnd && x.setAttr("points", R.points.trueEnd), this.onFinish && this.onFinish.call(this);
        }, this.tween.onReset = () => {
          const x = this.node, R = P.attrs[x._id][this._id];
          R.points && R.points.trueStart && x.points(R.points.trueStart), this.onReset && this.onReset();
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
      seek(x) {
        return this.tween.seek(x * 1e3), this;
      }
      pause() {
        return this.tween.pause(), this;
      }
      finish() {
        return this.tween.finish(), this;
      }
      destroy() {
        const x = this.node._id, R = this._id, A = P.tweens[x];
        this.pause(), this.anim && this.anim.stop();
        for (const j in A)
          delete P.tweens[x][j];
        delete P.attrs[x][R], P.tweens[x] && (Object.keys(P.tweens[x]).length === 0 && delete P.tweens[x], Object.keys(P.attrs[x]).length === 0 && delete P.attrs[x]);
      }
    }
    l.Tween = P, P.attrs = {}, P.tweens = {}, L.Node.prototype.to = function(S) {
      const x = S.onFinish;
      S.node = this, S.onFinish = function() {
        this.destroy(), x && x();
      }, new P(S).play();
    }, l.Easings = {
      BackEaseIn(S, x, R, A) {
        return R * (S /= A) * S * ((1.70158 + 1) * S - 1.70158) + x;
      },
      BackEaseOut(S, x, R, A) {
        return R * ((S = S / A - 1) * S * ((1.70158 + 1) * S + 1.70158) + 1) + x;
      },
      BackEaseInOut(S, x, R, A) {
        let j = 1.70158;
        return (S /= A / 2) < 1 ? R / 2 * (S * S * (((j *= 1.525) + 1) * S - j)) + x : R / 2 * ((S -= 2) * S * (((j *= 1.525) + 1) * S + j) + 2) + x;
      },
      ElasticEaseIn(S, x, R, A, j, w) {
        let h = 0;
        return S === 0 ? x : (S /= A) === 1 ? x + R : (w || (w = A * 0.3), !j || j < Math.abs(R) ? (j = R, h = w / 4) : h = w / (2 * Math.PI) * Math.asin(R / j), -(j * Math.pow(2, 10 * (S -= 1)) * Math.sin((S * A - h) * (2 * Math.PI) / w)) + x);
      },
      ElasticEaseOut(S, x, R, A, j, w) {
        let h = 0;
        return S === 0 ? x : (S /= A) === 1 ? x + R : (w || (w = A * 0.3), !j || j < Math.abs(R) ? (j = R, h = w / 4) : h = w / (2 * Math.PI) * Math.asin(R / j), j * Math.pow(2, -10 * S) * Math.sin((S * A - h) * (2 * Math.PI) / w) + R + x);
      },
      ElasticEaseInOut(S, x, R, A, j, w) {
        let h = 0;
        return S === 0 ? x : (S /= A / 2) === 2 ? x + R : (w || (w = A * (0.3 * 1.5)), !j || j < Math.abs(R) ? (j = R, h = w / 4) : h = w / (2 * Math.PI) * Math.asin(R / j), S < 1 ? -0.5 * (j * Math.pow(2, 10 * (S -= 1)) * Math.sin((S * A - h) * (2 * Math.PI) / w)) + x : j * Math.pow(2, -10 * (S -= 1)) * Math.sin((S * A - h) * (2 * Math.PI) / w) * 0.5 + R + x);
      },
      BounceEaseOut(S, x, R, A) {
        return (S /= A) < 1 / 2.75 ? R * (7.5625 * S * S) + x : S < 2 / 2.75 ? R * (7.5625 * (S -= 1.5 / 2.75) * S + 0.75) + x : S < 2.5 / 2.75 ? R * (7.5625 * (S -= 2.25 / 2.75) * S + 0.9375) + x : R * (7.5625 * (S -= 2.625 / 2.75) * S + 0.984375) + x;
      },
      BounceEaseIn(S, x, R, A) {
        return R - l.Easings.BounceEaseOut(A - S, 0, R, A) + x;
      },
      BounceEaseInOut(S, x, R, A) {
        return S < A / 2 ? l.Easings.BounceEaseIn(S * 2, 0, R, A) * 0.5 + x : l.Easings.BounceEaseOut(S * 2 - A, 0, R, A) * 0.5 + R * 0.5 + x;
      },
      EaseIn(S, x, R, A) {
        return R * (S /= A) * S + x;
      },
      EaseOut(S, x, R, A) {
        return -R * (S /= A) * (S - 2) + x;
      },
      EaseInOut(S, x, R, A) {
        return (S /= A / 2) < 1 ? R / 2 * S * S + x : -R / 2 * (--S * (S - 2) - 1) + x;
      },
      StrongEaseIn(S, x, R, A) {
        return R * (S /= A) * S * S * S * S + x;
      },
      StrongEaseOut(S, x, R, A) {
        return R * ((S = S / A - 1) * S * S * S * S + 1) + x;
      },
      StrongEaseInOut(S, x, R, A) {
        return (S /= A / 2) < 1 ? R / 2 * S * S * S * S * S + x : R / 2 * ((S -= 2) * S * S * S * S + 2) + x;
      },
      Linear(S, x, R, A) {
        return R * S / A + x;
      }
    };
  })(tf)), tf;
}
var Ph;
function df() {
  return Ph || (Ph = 1, (function(l) {
    Object.defineProperty(l, "__esModule", { value: !0 }), l.Konva = void 0;
    const d = tt(), v = Qt(), L = on(), M = ld(), k = O1(), f = V0(), g = I1(), m = yf(), C = mf(), E = Fn(), F = vf(), P = D1(), S = U0(), x = sd();
    l.Konva = v.Util._assign(d.Konva, {
      Util: v.Util,
      Transform: v.Transform,
      Node: L.Node,
      Container: M.Container,
      Stage: k.Stage,
      stages: k.stages,
      Layer: f.Layer,
      FastLayer: g.FastLayer,
      Group: m.Group,
      DD: C.DD,
      Shape: E.Shape,
      shapes: E.shapes,
      Animation: F.Animation,
      Tween: P.Tween,
      Easings: P.Easings,
      Context: S.Context,
      Canvas: x.Canvas
    }), l.default = l.Konva;
  })(Xd)), Xd;
}
var lu = {}, Rh;
function z1() {
  if (Rh) return lu;
  Rh = 1, Object.defineProperty(lu, "__esModule", { value: !0 }), lu.Arc = void 0;
  const l = lt(), d = Fn(), v = tt(), L = ct(), M = tt();
  let k = class extends d.Shape {
    _sceneFunc(g) {
      const m = v.Konva.getAngle(this.angle()), C = this.clockwise();
      g.beginPath(), g.arc(0, 0, this.outerRadius(), 0, m, C), g.arc(0, 0, this.innerRadius(), m, 0, !C), g.closePath(), g.fillStrokeShape(this);
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
      const g = this.innerRadius(), m = this.outerRadius(), C = this.clockwise(), E = v.Konva.getAngle(C ? 360 - this.angle() : this.angle()), F = Math.cos(Math.min(E, Math.PI)), P = 1, S = Math.sin(Math.min(Math.max(Math.PI, E), 3 * Math.PI / 2)), x = Math.sin(Math.min(E, Math.PI / 2)), R = F * (F > 0 ? g : m), A = P * m, j = S * (S > 0 ? g : m), w = x * (x > 0 ? m : g);
      return {
        x: R,
        y: C ? -1 * w : j,
        width: A - R,
        height: w - j
      };
    }
  };
  return lu.Arc = k, k.prototype._centroid = !0, k.prototype.className = "Arc", k.prototype._attrsAffectingSize = [
    "innerRadius",
    "outerRadius",
    "angle",
    "clockwise"
  ], (0, M._registerNode)(k), l.Factory.addGetterSetter(k, "innerRadius", 0, (0, L.getNumberValidator)()), l.Factory.addGetterSetter(k, "outerRadius", 0, (0, L.getNumberValidator)()), l.Factory.addGetterSetter(k, "angle", 0, (0, L.getNumberValidator)()), l.Factory.addGetterSetter(k, "clockwise", !1, (0, L.getBooleanValidator)()), lu;
}
var au = {}, uu = {}, Th;
function j0() {
  if (Th) return uu;
  Th = 1, Object.defineProperty(uu, "__esModule", { value: !0 }), uu.Line = void 0;
  const l = lt(), d = tt(), v = Fn(), L = ct();
  function M(g, m, C, E, F, P, S) {
    const x = Math.sqrt(Math.pow(C - g, 2) + Math.pow(E - m, 2)), R = Math.sqrt(Math.pow(F - C, 2) + Math.pow(P - E, 2)), A = S * x / (x + R), j = S * R / (x + R), w = C - A * (F - g), h = E - A * (P - m), T = C + j * (F - g), I = E + j * (P - m);
    return [w, h, T, I];
  }
  function k(g, m) {
    const C = g.length, E = [];
    for (let F = 2; F < C - 2; F += 2) {
      const P = M(g[F - 2], g[F - 1], g[F], g[F + 1], g[F + 2], g[F + 3], m);
      isNaN(P[0]) || (E.push(P[0]), E.push(P[1]), E.push(g[F]), E.push(g[F + 1]), E.push(P[2]), E.push(P[3]));
    }
    return E;
  }
  class f extends v.Shape {
    constructor(m) {
      super(m), this.on("pointsChange.konva tensionChange.konva closedChange.konva bezierChange.konva", function() {
        this._clearCache("tensionPoints");
      });
    }
    _sceneFunc(m) {
      const C = this.points(), E = C.length, F = this.tension(), P = this.closed(), S = this.bezier();
      if (!E)
        return;
      let x = 0;
      if (m.beginPath(), m.moveTo(C[0], C[1]), F !== 0 && E > 4) {
        const R = this.getTensionPoints(), A = R.length;
        for (x = P ? 0 : 4, P || m.quadraticCurveTo(R[0], R[1], R[2], R[3]); x < A - 2; )
          m.bezierCurveTo(R[x++], R[x++], R[x++], R[x++], R[x++], R[x++]);
        P || m.quadraticCurveTo(R[A - 2], R[A - 1], C[E - 2], C[E - 1]);
      } else if (S)
        for (x = 2; x < E; )
          m.bezierCurveTo(C[x++], C[x++], C[x++], C[x++], C[x++], C[x++]);
      else
        for (x = 2; x < E; x += 2)
          m.lineTo(C[x], C[x + 1]);
      P ? (m.closePath(), m.fillStrokeShape(this)) : m.strokeShape(this);
    }
    getTensionPoints() {
      return this._getCache("tensionPoints", this._getTensionPoints);
    }
    _getTensionPoints() {
      return this.closed() ? this._getTensionPointsClosed() : k(this.points(), this.tension());
    }
    _getTensionPointsClosed() {
      const m = this.points(), C = m.length, E = this.tension(), F = M(m[C - 2], m[C - 1], m[0], m[1], m[2], m[3], E), P = M(m[C - 4], m[C - 3], m[C - 2], m[C - 1], m[0], m[1], E), S = k(m, E);
      return [F[2], F[3]].concat(S).concat([
        P[0],
        P[1],
        m[C - 2],
        m[C - 1],
        P[2],
        P[3],
        F[0],
        F[1],
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
      let C = m[0], E = m[0], F = m[1], P = m[1], S, x;
      for (let R = 0; R < m.length / 2; R++)
        S = m[R * 2], x = m[R * 2 + 1], C = Math.min(C, S), E = Math.max(E, S), F = Math.min(F, x), P = Math.max(P, x);
      return {
        x: C,
        y: F,
        width: E - C,
        height: P - F
      };
    }
  }
  return uu.Line = f, f.prototype.className = "Line", f.prototype._attrsAffectingSize = ["points", "bezier", "tension"], (0, d._registerNode)(f), l.Factory.addGetterSetter(f, "closed", !1), l.Factory.addGetterSetter(f, "bezier", !1), l.Factory.addGetterSetter(f, "tension", 0, (0, L.getNumberValidator)()), l.Factory.addGetterSetter(f, "points", [], (0, L.getNumberArrayValidator)()), uu;
}
var cu = {}, nf = {}, Nh;
function G1() {
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
      let C, E;
      const P = m / 2;
      C = 0;
      for (let S = 0; S < 20; S++)
        E = P * l.tValues[20][S] + P, C += l.cValues[20][S] * L(f, g, E);
      return P * C;
    };
    l.getCubicArcLength = d;
    const v = (f, g, m) => {
      m === void 0 && (m = 1);
      const C = f[0] - 2 * f[1] + f[2], E = g[0] - 2 * g[1] + g[2], F = 2 * f[1] - 2 * f[0], P = 2 * g[1] - 2 * g[0], S = 4 * (C * C + E * E), x = 4 * (C * F + E * P), R = F * F + P * P;
      if (S === 0)
        return m * Math.sqrt(Math.pow(f[2] - f[0], 2) + Math.pow(g[2] - g[0], 2));
      const A = x / (2 * S), j = R / S, w = m + A, h = j - A * A, T = w * w + h > 0 ? Math.sqrt(w * w + h) : 0, I = A * A + h > 0 ? Math.sqrt(A * A + h) : 0, H = A + Math.sqrt(A * A + h) !== 0 ? h * Math.log(Math.abs((w + T) / (A + I))) : 0;
      return Math.sqrt(S) / 2 * (w * T - A * I + H);
    };
    l.getQuadraticArcLength = v;
    function L(f, g, m) {
      const C = M(1, m, f), E = M(1, m, g), F = C * C + E * E;
      return Math.sqrt(F);
    }
    const M = (f, g, m) => {
      const C = m.length - 1;
      let E, F;
      if (C === 0)
        return 0;
      if (f === 0) {
        F = 0;
        for (let P = 0; P <= C; P++)
          F += l.binomialCoefficients[C][P] * Math.pow(1 - g, C - P) * Math.pow(g, P) * m[P];
        return F;
      } else {
        E = new Array(C);
        for (let P = 0; P < C; P++)
          E[P] = C * (m[P + 1] - m[P]);
        return M(f - 1, g, E);
      }
    }, k = (f, g, m) => {
      let C = 1, E = f / g, F = (f - m(E)) / g, P = 0;
      for (; C > 1e-3; ) {
        const S = m(E + F), x = Math.abs(f - S) / g;
        if (x < C)
          C = x, E += F;
        else {
          const R = m(E - F), A = Math.abs(f - R) / g;
          A < C ? (C = A, E -= F) : F /= 2;
        }
        if (P++, P > 500)
          break;
      }
      return E;
    };
    l.t2length = k;
  })(nf)), nf;
}
var Mh;
function _f() {
  if (Mh) return cu;
  Mh = 1, Object.defineProperty(cu, "__esModule", { value: !0 }), cu.Path = void 0;
  const l = lt(), d = tt(), v = Fn(), L = G1();
  let M = class Er extends v.Shape {
    constructor(f) {
      super(f), this.dataArray = [], this.pathLength = 0, this._readDataAttribute(), this.on("dataChange.konva", function() {
        this._readDataAttribute();
      });
    }
    _readDataAttribute() {
      this.dataArray = Er.parsePathData(this.data()), this.pathLength = Er.getPathLength(this.dataArray);
    }
    _sceneFunc(f) {
      const g = this.dataArray;
      f.beginPath();
      let m = !1;
      for (let C = 0; C < g.length; C++) {
        const E = g[C].command, F = g[C].points;
        switch (E) {
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
            const P = F[0], S = F[1], x = F[2], R = F[3], A = F[4], j = F[5], w = F[6], h = F[7], T = x > R ? x : R, I = x > R ? 1 : x / R, H = x > R ? R / x : 1;
            f.translate(P, S), f.rotate(w), f.scale(I, H), f.arc(0, 0, T, A, A + j, 1 - h), f.scale(1 / I, 1 / H), f.rotate(-w), f.translate(-P, -S);
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
          const x = S.points[4], R = S.points[5], A = S.points[4] + R;
          let j = Math.PI / 180;
          if (Math.abs(x - A) < j && (j = Math.abs(x - A)), R < 0)
            for (let w = x - j; w > A; w -= j) {
              const h = Er.getPointOnEllipticalArc(S.points[0], S.points[1], S.points[2], S.points[3], w, 0);
              f.push(h.x, h.y);
            }
          else
            for (let w = x + j; w < A; w += j) {
              const h = Er.getPointOnEllipticalArc(S.points[0], S.points[1], S.points[2], S.points[3], w, 0);
              f.push(h.x, h.y);
            }
        } else if (S.command === "C")
          for (let x = 0; x <= 1; x += 0.01) {
            const R = Er.getPointOnCubicBezier(x, S.start.x, S.start.y, S.points[0], S.points[1], S.points[2], S.points[3], S.points[4], S.points[5]);
            f.push(R.x, R.y);
          }
        else
          f = f.concat(S.points);
      });
      let g = f[0], m = f[0], C = f[1], E = f[1], F, P;
      for (let S = 0; S < f.length / 2; S++)
        F = f[S * 2], P = f[S * 2 + 1], isNaN(F) || (g = Math.min(g, F), m = Math.max(m, F)), isNaN(P) || (C = Math.min(C, P), E = Math.max(E, P));
      return {
        x: g,
        y: C,
        width: m - g,
        height: E - C
      };
    }
    getLength() {
      return this.pathLength;
    }
    getPointAtLength(f) {
      return Er.getPointAtLengthOfDataArray(f, this.dataArray);
    }
    static getLineLength(f, g, m, C) {
      return Math.sqrt((m - f) * (m - f) + (C - g) * (C - g));
    }
    static getPathLength(f) {
      let g = 0;
      for (let m = 0; m < f.length; ++m)
        g += f[m].pathLength;
      return g;
    }
    static getPointAtLengthOfDataArray(f, g) {
      let m, C = 0, E = g.length;
      if (!E)
        return null;
      for (; C < E && f > g[C].pathLength; )
        f -= g[C].pathLength, ++C;
      if (C === E)
        return m = g[C - 1].points.slice(-2), {
          x: m[0],
          y: m[1]
        };
      if (f < 0.01)
        return g[C].command === "M" ? (m = g[C].points.slice(0, 2), {
          x: m[0],
          y: m[1]
        }) : {
          x: g[C].start.x,
          y: g[C].start.y
        };
      const F = g[C], P = F.points;
      switch (F.command) {
        case "L":
          return Er.getPointOnLine(f, F.start.x, F.start.y, P[0], P[1]);
        case "C":
          return Er.getPointOnCubicBezier((0, L.t2length)(f, Er.getPathLength(g), (T) => (0, L.getCubicArcLength)([F.start.x, P[0], P[2], P[4]], [F.start.y, P[1], P[3], P[5]], T)), F.start.x, F.start.y, P[0], P[1], P[2], P[3], P[4], P[5]);
        case "Q":
          return Er.getPointOnQuadraticBezier((0, L.t2length)(f, Er.getPathLength(g), (T) => (0, L.getQuadraticArcLength)([F.start.x, P[0], P[2]], [F.start.y, P[1], P[3]], T)), F.start.x, F.start.y, P[0], P[1], P[2], P[3]);
        case "A":
          const S = P[0], x = P[1], R = P[2], A = P[3], j = P[5], w = P[6];
          let h = P[4];
          return h += j * f / F.pathLength, Er.getPointOnEllipticalArc(S, x, R, A, h, w);
      }
      return null;
    }
    static getPointOnLine(f, g, m, C, E, F, P) {
      F = F ?? g, P = P ?? m;
      const S = this.getLineLength(g, m, C, E);
      if (S < 1e-10)
        return { x: g, y: m };
      if (C === g)
        return { x: F, y: P + (E > m ? f : -f) };
      const x = (E - m) / (C - g), R = Math.sqrt(f * f / (1 + x * x)) * (C < g ? -1 : 1), A = x * R;
      if (Math.abs(P - m - x * (F - g)) < 1e-10)
        return { x: F + R, y: P + A };
      const j = ((F - g) * (C - g) + (P - m) * (E - m)) / (S * S), w = g + j * (C - g), h = m + j * (E - m), T = this.getLineLength(F, P, w, h), I = Math.sqrt(f * f - T * T), H = Math.sqrt(I * I / (1 + x * x)) * (C < g ? -1 : 1), J = x * H;
      return { x: w + H, y: h + J };
    }
    static getPointOnCubicBezier(f, g, m, C, E, F, P, S, x) {
      function R(I) {
        return I * I * I;
      }
      function A(I) {
        return 3 * I * I * (1 - I);
      }
      function j(I) {
        return 3 * I * (1 - I) * (1 - I);
      }
      function w(I) {
        return (1 - I) * (1 - I) * (1 - I);
      }
      const h = S * R(f) + F * A(f) + C * j(f) + g * w(f), T = x * R(f) + P * A(f) + E * j(f) + m * w(f);
      return { x: h, y: T };
    }
    static getPointOnQuadraticBezier(f, g, m, C, E, F, P) {
      function S(w) {
        return w * w;
      }
      function x(w) {
        return 2 * w * (1 - w);
      }
      function R(w) {
        return (1 - w) * (1 - w);
      }
      const A = F * S(f) + C * x(f) + g * R(f), j = P * S(f) + E * x(f) + m * R(f);
      return { x: A, y: j };
    }
    static getPointOnEllipticalArc(f, g, m, C, E, F) {
      const P = Math.cos(F), S = Math.sin(F), x = {
        x: m * Math.cos(E),
        y: C * Math.sin(E)
      };
      return {
        x: f + (x.x * P - x.y * S),
        y: g + (x.x * S + x.y * P)
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
      for (let A = 0; A < m.length; A++)
        g = g.replace(new RegExp(m[A], "g"), "|" + m[A]);
      const C = g.split("|"), E = [], F = [];
      let P = 0, S = 0;
      const x = /([-+]?((\d+\.\d+)|((\d+)|(\.\d+)))(?:e[-+]?\d+)?)/gi;
      let R;
      for (let A = 1; A < C.length; A++) {
        let j = C[A], w = j.charAt(0);
        for (j = j.slice(1), F.length = 0; R = x.exec(j); )
          F.push(R[0]);
        const h = [];
        for (let T = 0, I = F.length; T < I; T++) {
          if (F[T] === "00") {
            h.push(0, 0);
            continue;
          }
          const H = parseFloat(F[T]);
          isNaN(H) ? h.push(0) : h.push(H);
        }
        for (; h.length > 0 && !isNaN(h[0]); ) {
          let T = "", I = [];
          const H = P, J = S;
          let z, G, V, Q, Z, ee, re, X, me, N;
          switch (w) {
            case "l":
              P += h.shift(), S += h.shift(), T = "L", I.push(P, S);
              break;
            case "L":
              P = h.shift(), S = h.shift(), I.push(P, S);
              break;
            case "m":
              const D = h.shift(), W = h.shift();
              if (P += D, S += W, T = "M", E.length > 2 && E[E.length - 1].command === "z") {
                for (let U = E.length - 2; U >= 0; U--)
                  if (E[U].command === "M") {
                    P = E[U].points[0] + D, S = E[U].points[1] + W;
                    break;
                  }
              }
              I.push(P, S), w = "l";
              break;
            case "M":
              P = h.shift(), S = h.shift(), T = "M", I.push(P, S), w = "L";
              break;
            case "h":
              P += h.shift(), T = "L", I.push(P, S);
              break;
            case "H":
              P = h.shift(), T = "L", I.push(P, S);
              break;
            case "v":
              S += h.shift(), T = "L", I.push(P, S);
              break;
            case "V":
              S = h.shift(), T = "L", I.push(P, S);
              break;
            case "C":
              I.push(h.shift(), h.shift(), h.shift(), h.shift()), P = h.shift(), S = h.shift(), I.push(P, S);
              break;
            case "c":
              I.push(P + h.shift(), S + h.shift(), P + h.shift(), S + h.shift()), P += h.shift(), S += h.shift(), T = "C", I.push(P, S);
              break;
            case "S":
              G = P, V = S, z = E[E.length - 1], z.command === "C" && (G = P + (P - z.points[2]), V = S + (S - z.points[3])), I.push(G, V, h.shift(), h.shift()), P = h.shift(), S = h.shift(), T = "C", I.push(P, S);
              break;
            case "s":
              G = P, V = S, z = E[E.length - 1], z.command === "C" && (G = P + (P - z.points[2]), V = S + (S - z.points[3])), I.push(G, V, P + h.shift(), S + h.shift()), P += h.shift(), S += h.shift(), T = "C", I.push(P, S);
              break;
            case "Q":
              I.push(h.shift(), h.shift()), P = h.shift(), S = h.shift(), I.push(P, S);
              break;
            case "q":
              I.push(P + h.shift(), S + h.shift()), P += h.shift(), S += h.shift(), T = "Q", I.push(P, S);
              break;
            case "T":
              G = P, V = S, z = E[E.length - 1], z.command === "Q" && (G = P + (P - z.points[0]), V = S + (S - z.points[1])), P = h.shift(), S = h.shift(), T = "Q", I.push(G, V, P, S);
              break;
            case "t":
              G = P, V = S, z = E[E.length - 1], z.command === "Q" && (G = P + (P - z.points[0]), V = S + (S - z.points[1])), P += h.shift(), S += h.shift(), T = "Q", I.push(G, V, P, S);
              break;
            case "A":
              Q = h.shift(), Z = h.shift(), ee = h.shift(), re = h.shift(), X = h.shift(), me = P, N = S, P = h.shift(), S = h.shift(), T = "A", I = this.convertEndpointToCenterParameterization(me, N, P, S, re, X, Q, Z, ee);
              break;
            case "a":
              Q = h.shift(), Z = h.shift(), ee = h.shift(), re = h.shift(), X = h.shift(), me = P, N = S, P += h.shift(), S += h.shift(), T = "A", I = this.convertEndpointToCenterParameterization(me, N, P, S, re, X, Q, Z, ee);
              break;
          }
          E.push({
            command: T || w,
            points: I,
            start: {
              x: H,
              y: J
            },
            pathLength: this.calcLength(H, J, T || w, I)
          });
        }
        (w === "z" || w === "Z") && E.push({
          command: "z",
          points: [],
          start: void 0,
          pathLength: 0
        });
      }
      return E;
    }
    static calcLength(f, g, m, C) {
      let E, F, P, S;
      const x = Er;
      switch (m) {
        case "L":
          return x.getLineLength(f, g, C[0], C[1]);
        case "C":
          return (0, L.getCubicArcLength)([f, C[0], C[2], C[4]], [g, C[1], C[3], C[5]], 1);
        case "Q":
          return (0, L.getQuadraticArcLength)([f, C[0], C[2]], [g, C[1], C[3]], 1);
        case "A":
          E = 0;
          const R = C[4], A = C[5], j = C[4] + A;
          let w = Math.PI / 180;
          if (Math.abs(R - j) < w && (w = Math.abs(R - j)), F = x.getPointOnEllipticalArc(C[0], C[1], C[2], C[3], R, 0), A < 0)
            for (S = R - w; S > j; S -= w)
              P = x.getPointOnEllipticalArc(C[0], C[1], C[2], C[3], S, 0), E += x.getLineLength(F.x, F.y, P.x, P.y), F = P;
          else
            for (S = R + w; S < j; S += w)
              P = x.getPointOnEllipticalArc(C[0], C[1], C[2], C[3], S, 0), E += x.getLineLength(F.x, F.y, P.x, P.y), F = P;
          return P = x.getPointOnEllipticalArc(C[0], C[1], C[2], C[3], j, 0), E += x.getLineLength(F.x, F.y, P.x, P.y), E;
      }
      return 0;
    }
    static convertEndpointToCenterParameterization(f, g, m, C, E, F, P, S, x) {
      const R = x * (Math.PI / 180), A = Math.cos(R) * (f - m) / 2 + Math.sin(R) * (g - C) / 2, j = -1 * Math.sin(R) * (f - m) / 2 + Math.cos(R) * (g - C) / 2, w = A * A / (P * P) + j * j / (S * S);
      w > 1 && (P *= Math.sqrt(w), S *= Math.sqrt(w));
      let h = Math.sqrt((P * P * (S * S) - P * P * (j * j) - S * S * (A * A)) / (P * P * (j * j) + S * S * (A * A)));
      E === F && (h *= -1), isNaN(h) && (h = 0);
      const T = h * P * j / S, I = h * -S * A / P, H = (f + m) / 2 + Math.cos(R) * T - Math.sin(R) * I, J = (g + C) / 2 + Math.sin(R) * T + Math.cos(R) * I, z = function(X) {
        return Math.sqrt(X[0] * X[0] + X[1] * X[1]);
      }, G = function(X, me) {
        return (X[0] * me[0] + X[1] * me[1]) / (z(X) * z(me));
      }, V = function(X, me) {
        return (X[0] * me[1] < X[1] * me[0] ? -1 : 1) * Math.acos(G(X, me));
      }, Q = V([1, 0], [(A - T) / P, (j - I) / S]), Z = [(A - T) / P, (j - I) / S], ee = [(-1 * A - T) / P, (-1 * j - I) / S];
      let re = V(Z, ee);
      return G(Z, ee) <= -1 && (re = Math.PI), G(Z, ee) >= 1 && (re = 0), F === 0 && re > 0 && (re = re - 2 * Math.PI), F === 1 && re < 0 && (re = re + 2 * Math.PI), [H, J, P, S, Q, re, R, F];
    }
  };
  return cu.Path = M, M.prototype.className = "Path", M.prototype._attrsAffectingSize = ["data"], (0, d._registerNode)(M), l.Factory.addGetterSetter(M, "data"), cu;
}
var Fh;
function U1() {
  if (Fh) return au;
  Fh = 1, Object.defineProperty(au, "__esModule", { value: !0 }), au.Arrow = void 0;
  const l = lt(), d = j0(), v = ct(), L = tt(), M = _f();
  let k = class extends d.Line {
    _sceneFunc(g) {
      super._sceneFunc(g);
      const m = Math.PI * 2, C = this.points();
      let E = C;
      const F = this.tension() !== 0 && C.length > 4;
      F && (E = this.getTensionPoints());
      const P = this.pointerLength(), S = C.length;
      let x, R;
      if (F) {
        const w = [
          E[E.length - 4],
          E[E.length - 3],
          E[E.length - 2],
          E[E.length - 1],
          C[S - 2],
          C[S - 1]
        ], h = M.Path.calcLength(E[E.length - 4], E[E.length - 3], "C", w), T = M.Path.getPointOnQuadraticBezier(Math.min(1, 1 - P / h), w[0], w[1], w[2], w[3], w[4], w[5]);
        x = C[S - 2] - T.x, R = C[S - 1] - T.y;
      } else
        x = C[S - 2] - C[S - 4], R = C[S - 1] - C[S - 3];
      const A = (Math.atan2(R, x) + m) % m, j = this.pointerWidth();
      this.pointerAtEnding() && (g.save(), g.beginPath(), g.translate(C[S - 2], C[S - 1]), g.rotate(A), g.moveTo(0, 0), g.lineTo(-P, j / 2), g.lineTo(-P, -j / 2), g.closePath(), g.restore(), this.__fillStroke(g)), this.pointerAtBeginning() && (g.save(), g.beginPath(), g.translate(C[0], C[1]), F ? (x = (E[0] + E[2]) / 2 - C[0], R = (E[1] + E[3]) / 2 - C[1]) : (x = C[2] - C[0], R = C[3] - C[1]), g.rotate((Math.atan2(-R, -x) + m) % m), g.moveTo(0, 0), g.lineTo(-P, j / 2), g.lineTo(-P, -j / 2), g.closePath(), g.restore(), this.__fillStroke(g));
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
  return au.Arrow = k, k.prototype.className = "Arrow", (0, L._registerNode)(k), l.Factory.addGetterSetter(k, "pointerLength", 10, (0, v.getNumberValidator)()), l.Factory.addGetterSetter(k, "pointerWidth", 10, (0, v.getNumberValidator)()), l.Factory.addGetterSetter(k, "pointerAtBeginning", !1), l.Factory.addGetterSetter(k, "pointerAtEnding", !0), au;
}
var du = {}, Lh;
function B1() {
  if (Lh) return du;
  Lh = 1, Object.defineProperty(du, "__esModule", { value: !0 }), du.Circle = void 0;
  const l = lt(), d = Fn(), v = ct(), L = tt();
  class M extends d.Shape {
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
  return du.Circle = M, M.prototype._centroid = !0, M.prototype.className = "Circle", M.prototype._attrsAffectingSize = ["radius"], (0, L._registerNode)(M), l.Factory.addGetterSetter(M, "radius", 0, (0, v.getNumberValidator)()), du;
}
var fu = {}, Ah;
function V1() {
  if (Ah) return fu;
  Ah = 1, Object.defineProperty(fu, "__esModule", { value: !0 }), fu.Ellipse = void 0;
  const l = lt(), d = Fn(), v = ct(), L = tt();
  let M = class extends d.Shape {
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
  return fu.Ellipse = M, M.prototype.className = "Ellipse", M.prototype._centroid = !0, M.prototype._attrsAffectingSize = ["radiusX", "radiusY"], (0, L._registerNode)(M), l.Factory.addComponentsGetterSetter(M, "radius", ["x", "y"]), l.Factory.addGetterSetter(M, "radiusX", 0, (0, v.getNumberValidator)()), l.Factory.addGetterSetter(M, "radiusY", 0, (0, v.getNumberValidator)()), fu;
}
var hu = {}, Oh;
function j1() {
  if (Oh) return hu;
  Oh = 1, Object.defineProperty(hu, "__esModule", { value: !0 }), hu.Image = void 0;
  const l = Qt(), d = lt(), v = Fn(), L = tt(), M = ct();
  class k extends v.Shape {
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
      const m = this.getWidth(), C = this.getHeight(), E = this.cornerRadius(), F = this.attrs.image;
      let P;
      if (F) {
        const S = this.attrs.cropWidth, x = this.attrs.cropHeight;
        S && x ? P = [
          F,
          this.cropX(),
          this.cropY(),
          S,
          x,
          0,
          0,
          m,
          C
        ] : P = [F, 0, 0, m, C];
      }
      (this.hasFill() || this.hasStroke() || E) && (g.beginPath(), E ? l.Util.drawRoundedRectPath(g, m, C, E) : g.rect(0, 0, m, C), g.closePath(), g.fillStrokeShape(this)), F && (E && g.clip(), g.drawImage.apply(g, P));
    }
    _hitFunc(g) {
      const m = this.width(), C = this.height(), E = this.cornerRadius();
      g.beginPath(), E ? l.Util.drawRoundedRectPath(g, m, C, E) : g.rect(0, 0, m, C), g.closePath(), g.fillStrokeShape(this);
    }
    getWidth() {
      var g, m;
      return (g = this.attrs.width) !== null && g !== void 0 ? g : (m = this.image()) === null || m === void 0 ? void 0 : m.width;
    }
    getHeight() {
      var g, m;
      return (g = this.attrs.height) !== null && g !== void 0 ? g : (m = this.image()) === null || m === void 0 ? void 0 : m.height;
    }
    static fromURL(g, m, C = null) {
      const E = l.Util.createImageElement();
      E.onload = function() {
        const F = new k({
          image: E
        });
        m(F);
      }, E.onerror = C, E.crossOrigin = "Anonymous", E.src = g;
    }
  }
  return hu.Image = k, k.prototype.className = "Image", (0, L._registerNode)(k), d.Factory.addGetterSetter(k, "cornerRadius", 0, (0, M.getNumberOrArrayOfNumbersValidator)(4)), d.Factory.addGetterSetter(k, "image"), d.Factory.addComponentsGetterSetter(k, "crop", ["x", "y", "width", "height"]), d.Factory.addGetterSetter(k, "cropX", 0, (0, M.getNumberValidator)()), d.Factory.addGetterSetter(k, "cropY", 0, (0, M.getNumberValidator)()), d.Factory.addGetterSetter(k, "cropWidth", 0, (0, M.getNumberValidator)()), d.Factory.addGetterSetter(k, "cropHeight", 0, (0, M.getNumberValidator)()), hu;
}
var el = {}, Ih;
function H1() {
  if (Ih) return el;
  Ih = 1, Object.defineProperty(el, "__esModule", { value: !0 }), el.Tag = el.Label = void 0;
  const l = lt(), d = Fn(), v = yf(), L = ct(), M = tt(), k = [
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
  ], f = "Change.konva", g = "none", m = "up", C = "right", E = "down", F = "left", P = k.length;
  let S = class extends v.Group {
    constructor(A) {
      super(A), this.on("add.konva", function(j) {
        this._addListeners(j.child), this._sync();
      });
    }
    getText() {
      return this.find("Text")[0];
    }
    getTag() {
      return this.find("Tag")[0];
    }
    _addListeners(A) {
      let j = this, w;
      const h = function() {
        j._sync();
      };
      for (w = 0; w < P; w++)
        A.on(k[w] + f, h);
    }
    getWidth() {
      return this.getText().width();
    }
    getHeight() {
      return this.getText().height();
    }
    _sync() {
      let A = this.getText(), j = this.getTag(), w, h, T, I, H, J, z;
      if (A && j) {
        switch (w = A.width(), h = A.height(), T = j.pointerDirection(), I = j.pointerWidth(), z = j.pointerHeight(), H = 0, J = 0, T) {
          case m:
            H = w / 2, J = -1 * z;
            break;
          case C:
            H = w + I, J = h / 2;
            break;
          case E:
            H = w / 2, J = h + z;
            break;
          case F:
            H = -1 * I, J = h / 2;
            break;
        }
        j.setAttrs({
          x: -1 * H,
          y: -1 * J,
          width: w,
          height: h
        }), A.setAttrs({
          x: -1 * H,
          y: -1 * J
        });
      }
    }
  };
  el.Label = S, S.prototype.className = "Label", (0, M._registerNode)(S);
  class x extends d.Shape {
    _sceneFunc(A) {
      const j = this.width(), w = this.height(), h = this.pointerDirection(), T = this.pointerWidth(), I = this.pointerHeight(), H = this.cornerRadius();
      let J = 0, z = 0, G = 0, V = 0;
      typeof H == "number" ? J = z = G = V = Math.min(H, j / 2, w / 2) : (J = Math.min(H[0] || 0, j / 2, w / 2), z = Math.min(H[1] || 0, j / 2, w / 2), V = Math.min(H[2] || 0, j / 2, w / 2), G = Math.min(H[3] || 0, j / 2, w / 2)), A.beginPath(), A.moveTo(J, 0), h === m && (A.lineTo((j - T) / 2, 0), A.lineTo(j / 2, -1 * I), A.lineTo((j + T) / 2, 0)), A.lineTo(j - z, 0), A.arc(j - z, z, z, Math.PI * 3 / 2, 0, !1), h === C && (A.lineTo(j, (w - I) / 2), A.lineTo(j + T, w / 2), A.lineTo(j, (w + I) / 2)), A.lineTo(j, w - V), A.arc(j - V, w - V, V, 0, Math.PI / 2, !1), h === E && (A.lineTo((j + T) / 2, w), A.lineTo(j / 2, w + I), A.lineTo((j - T) / 2, w)), A.lineTo(G, w), A.arc(G, w - G, G, Math.PI / 2, Math.PI, !1), h === F && (A.lineTo(0, (w + I) / 2), A.lineTo(-1 * T, w / 2), A.lineTo(0, (w - I) / 2)), A.lineTo(0, J), A.arc(J, J, J, Math.PI, Math.PI * 3 / 2, !1), A.closePath(), A.fillStrokeShape(this);
    }
    getSelfRect() {
      let A = 0, j = 0, w = this.pointerWidth(), h = this.pointerHeight(), T = this.pointerDirection(), I = this.width(), H = this.height();
      return T === m ? (j -= h, H += h) : T === E ? H += h : T === F ? (A -= w * 1.5, I += w) : T === C && (I += w * 1.5), {
        x: A,
        y: j,
        width: I,
        height: H
      };
    }
  }
  return el.Tag = x, x.prototype.className = "Tag", (0, M._registerNode)(x), l.Factory.addGetterSetter(x, "pointerDirection", g), l.Factory.addGetterSetter(x, "pointerWidth", 0, (0, L.getNumberValidator)()), l.Factory.addGetterSetter(x, "pointerHeight", 0, (0, L.getNumberValidator)()), l.Factory.addGetterSetter(x, "cornerRadius", 0, (0, L.getNumberOrArrayOfNumbersValidator)(4)), el;
}
var pu = {}, Dh;
function H0() {
  if (Dh) return pu;
  Dh = 1, Object.defineProperty(pu, "__esModule", { value: !0 }), pu.Rect = void 0;
  const l = lt(), d = Fn(), v = tt(), L = Qt(), M = ct();
  class k extends d.Shape {
    _sceneFunc(g) {
      const m = this.cornerRadius(), C = this.width(), E = this.height();
      g.beginPath(), m ? L.Util.drawRoundedRectPath(g, C, E, m) : g.rect(0, 0, C, E), g.closePath(), g.fillStrokeShape(this);
    }
  }
  return pu.Rect = k, k.prototype.className = "Rect", (0, v._registerNode)(k), l.Factory.addGetterSetter(k, "cornerRadius", 0, (0, M.getNumberOrArrayOfNumbersValidator)(4)), pu;
}
var gu = {}, zh;
function W1() {
  if (zh) return gu;
  zh = 1, Object.defineProperty(gu, "__esModule", { value: !0 }), gu.RegularPolygon = void 0;
  const l = lt(), d = Fn(), v = ct(), L = tt();
  let M = class extends d.Shape {
    _sceneFunc(f) {
      const g = this._getPoints();
      f.beginPath(), f.moveTo(g[0].x, g[0].y);
      for (let m = 1; m < g.length; m++)
        f.lineTo(g[m].x, g[m].y);
      f.closePath(), f.fillStrokeShape(this);
    }
    _getPoints() {
      const f = this.attrs.sides, g = this.attrs.radius || 0, m = [];
      for (let C = 0; C < f; C++)
        m.push({
          x: g * Math.sin(C * 2 * Math.PI / f),
          y: -1 * g * Math.cos(C * 2 * Math.PI / f)
        });
      return m;
    }
    getSelfRect() {
      const f = this._getPoints();
      let g = f[0].x, m = f[0].y, C = f[0].x, E = f[0].y;
      return f.forEach((F) => {
        g = Math.min(g, F.x), m = Math.max(m, F.x), C = Math.min(C, F.y), E = Math.max(E, F.y);
      }), {
        x: g,
        y: C,
        width: m - g,
        height: E - C
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
  return gu.RegularPolygon = M, M.prototype.className = "RegularPolygon", M.prototype._centroid = !0, M.prototype._attrsAffectingSize = ["radius"], (0, L._registerNode)(M), l.Factory.addGetterSetter(M, "radius", 0, (0, v.getNumberValidator)()), l.Factory.addGetterSetter(M, "sides", 0, (0, v.getNumberValidator)()), gu;
}
var mu = {}, Gh;
function q1() {
  if (Gh) return mu;
  Gh = 1, Object.defineProperty(mu, "__esModule", { value: !0 }), mu.Ring = void 0;
  const l = lt(), d = Fn(), v = ct(), L = tt(), M = Math.PI * 2;
  let k = class extends d.Shape {
    _sceneFunc(g) {
      g.beginPath(), g.arc(0, 0, this.innerRadius(), 0, M, !1), g.moveTo(this.outerRadius(), 0), g.arc(0, 0, this.outerRadius(), M, 0, !0), g.closePath(), g.fillStrokeShape(this);
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
  return mu.Ring = k, k.prototype.className = "Ring", k.prototype._centroid = !0, k.prototype._attrsAffectingSize = ["innerRadius", "outerRadius"], (0, L._registerNode)(k), l.Factory.addGetterSetter(k, "innerRadius", 0, (0, v.getNumberValidator)()), l.Factory.addGetterSetter(k, "outerRadius", 0, (0, v.getNumberValidator)()), mu;
}
var yu = {}, Uh;
function K1() {
  if (Uh) return yu;
  Uh = 1, Object.defineProperty(yu, "__esModule", { value: !0 }), yu.Sprite = void 0;
  const l = lt(), d = Fn(), v = vf(), L = ct(), M = tt();
  let k = class extends d.Shape {
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
      const m = this.animation(), C = this.frameIndex(), E = C * 4, F = this.animations()[m], P = this.frameOffsets(), S = F[E + 0], x = F[E + 1], R = F[E + 2], A = F[E + 3], j = this.image();
      if ((this.hasFill() || this.hasStroke()) && (g.beginPath(), g.rect(0, 0, R, A), g.closePath(), g.fillStrokeShape(this)), j)
        if (P) {
          const w = P[m], h = C * 2;
          g.drawImage(j, S, x, R, A, w[h + 0], w[h + 1], R, A);
        } else
          g.drawImage(j, S, x, R, A, 0, 0, R, A);
    }
    _hitFunc(g) {
      const m = this.animation(), C = this.frameIndex(), E = C * 4, F = this.animations()[m], P = this.frameOffsets(), S = F[E + 2], x = F[E + 3];
      if (g.beginPath(), P) {
        const R = P[m], A = C * 2;
        g.rect(R[A + 0], R[A + 1], S, x);
      } else
        g.rect(0, 0, S, x);
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
      const g = this.frameIndex(), m = this.animation(), C = this.animations(), E = C[m], F = E.length / 4;
      g < F - 1 ? this.frameIndex(g + 1) : this.frameIndex(0);
    }
  };
  return yu.Sprite = k, k.prototype.className = "Sprite", (0, M._registerNode)(k), l.Factory.addGetterSetter(k, "animation"), l.Factory.addGetterSetter(k, "animations"), l.Factory.addGetterSetter(k, "frameOffsets"), l.Factory.addGetterSetter(k, "image"), l.Factory.addGetterSetter(k, "frameIndex", 0, (0, L.getNumberValidator)()), l.Factory.addGetterSetter(k, "frameRate", 17, (0, L.getNumberValidator)()), l.Factory.backCompat(k, {
    index: "frameIndex",
    getIndex: "getFrameIndex",
    setIndex: "setFrameIndex"
  }), yu;
}
var vu = {}, Bh;
function Y1() {
  if (Bh) return vu;
  Bh = 1, Object.defineProperty(vu, "__esModule", { value: !0 }), vu.Star = void 0;
  const l = lt(), d = Fn(), v = ct(), L = tt();
  let M = class extends d.Shape {
    _sceneFunc(f) {
      const g = this.innerRadius(), m = this.outerRadius(), C = this.numPoints();
      f.beginPath(), f.moveTo(0, 0 - m);
      for (let E = 1; E < C * 2; E++) {
        const F = E % 2 === 0 ? m : g, P = F * Math.sin(E * Math.PI / C), S = -1 * F * Math.cos(E * Math.PI / C);
        f.lineTo(P, S);
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
  return vu.Star = M, M.prototype.className = "Star", M.prototype._centroid = !0, M.prototype._attrsAffectingSize = ["innerRadius", "outerRadius"], (0, L._registerNode)(M), l.Factory.addGetterSetter(M, "numPoints", 5, (0, v.getNumberValidator)()), l.Factory.addGetterSetter(M, "innerRadius", 0, (0, v.getNumberValidator)()), l.Factory.addGetterSetter(M, "outerRadius", 0, (0, v.getNumberValidator)()), vu;
}
var oa = {}, Vh;
function W0() {
  if (Vh) return oa;
  Vh = 1, Object.defineProperty(oa, "__esModule", { value: !0 }), oa.Text = void 0, oa.stringToArray = f;
  const l = Qt(), d = lt(), v = Fn(), L = tt(), M = ct(), k = tt();
  function f(K) {
    return [...K].reduce((b, ae, pe, oe) => {
      if (new RegExp("\\p{Emoji}", "u").test(ae)) {
        const q = oe[pe + 1];
        q && new RegExp("\\p{Emoji_Modifier}|\\u200D", "u").test(q) ? (b.push(ae + q), oe[pe + 1] = "") : b.push(ae);
      } else new RegExp("\\p{Regional_Indicator}{2}", "u").test(ae + (oe[pe + 1] || "")) ? b.push(ae + oe[pe + 1]) : pe > 0 && new RegExp("\\p{Mn}|\\p{Me}|\\p{Mc}", "u").test(ae) ? b[b.length - 1] += ae : ae && b.push(ae);
      return b;
    }, []);
  }
  const g = "auto", m = "center", C = "inherit", E = "justify", F = "Change.konva", P = "2d", S = "-", x = "left", R = "text", A = "Text", j = "top", w = "bottom", h = "middle", T = "normal", I = "px ", H = " ", J = "right", z = "rtl", G = "word", V = "char", Q = "none", Z = "…", ee = [
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
  ], re = ee.length;
  function X(K) {
    return K.split(",").map((b) => {
      b = b.trim();
      const ae = b.indexOf(" ") >= 0, pe = b.indexOf('"') >= 0 || b.indexOf("'") >= 0;
      return ae && !pe && (b = `"${b}"`), b;
    }).join(", ");
  }
  let me;
  function N() {
    return me || (me = l.Util.createCanvasElement().getContext(P), me);
  }
  function D(K) {
    K.fillText(this._partialText, this._partialTextX, this._partialTextY);
  }
  function W(K) {
    K.setAttr("miterLimit", 2), K.strokeText(this._partialText, this._partialTextX, this._partialTextY);
  }
  function U(K) {
    return K = K || {}, !K.fillLinearGradientColorStops && !K.fillRadialGradientColorStops && !K.fillPatternImage && (K.fill = K.fill || "black"), K;
  }
  let _ = class extends v.Shape {
    constructor(b) {
      super(U(b)), this._partialTextX = 0, this._partialTextY = 0;
      for (let ae = 0; ae < re; ae++)
        this.on(ee[ae] + F, this._setTextData);
      this._setTextData();
    }
    _sceneFunc(b) {
      const ae = this.textArr, pe = ae.length;
      if (!this.text())
        return;
      let oe = this.padding(), q = this.fontSize(), ie = this.lineHeight() * q, ye = this.verticalAlign(), Ee = this.direction(), Me = 0, je = this.align(), Ue = this.getWidth(), ot = this.letterSpacing(), we = this.fill(), Je = this.textDecoration(), Qe = Je.indexOf("underline") !== -1, St = Je.indexOf("line-through") !== -1, sn;
      Ee = Ee === C ? b.direction : Ee;
      let dt = ie / 2, qn = h;
      if (L.Konva._fixTextRendering) {
        const et = this.measureSize("M");
        qn = "alphabetic", dt = (et.fontBoundingBoxAscent - et.fontBoundingBoxDescent) / 2 + ie / 2;
      }
      for (Ee === z && b.setAttr("direction", Ee), b.setAttr("font", this._getContextFont()), b.setAttr("textBaseline", qn), b.setAttr("textAlign", x), ye === h ? Me = (this.getHeight() - pe * ie - oe * 2) / 2 : ye === w && (Me = this.getHeight() - pe * ie - oe * 2), b.translate(oe, Me + oe), sn = 0; sn < pe; sn++) {
        let et = 0, ln = 0;
        const Ht = ae[sn], bt = Ht.text, at = Ht.width, Ln = Ht.lastInParagraph;
        if (b.save(), je === J ? et += Ue - at - oe * 2 : je === m && (et += (Ue - at - oe * 2) / 2), Qe) {
          b.save(), b.beginPath();
          const Wt = L.Konva._fixTextRendering ? Math.round(q / 4) : Math.round(q / 2), An = et, Dt = dt + ln + Wt;
          b.moveTo(An, Dt);
          const zt = je === E && !Ln ? Ue - oe * 2 : at;
          b.lineTo(An + Math.round(zt), Dt), b.lineWidth = q / 15;
          const br = this._getLinearGradient();
          b.strokeStyle = br || we, b.stroke(), b.restore();
        }
        if (St) {
          b.save(), b.beginPath();
          const Wt = L.Konva._fixTextRendering ? -Math.round(q / 4) : 0;
          b.moveTo(et, dt + ln + Wt);
          const An = je === E && !Ln ? Ue - oe * 2 : at;
          b.lineTo(et + Math.round(An), dt + ln + Wt), b.lineWidth = q / 15;
          const Dt = this._getLinearGradient();
          b.strokeStyle = Dt || we, b.stroke(), b.restore();
        }
        if (Ee !== z && (ot !== 0 || je === E)) {
          const Wt = bt.split(" ").length - 1, An = f(bt);
          for (let Dt = 0; Dt < An.length; Dt++) {
            const zt = An[Dt];
            zt === " " && !Ln && je === E && (et += (Ue - oe * 2 - at) / Wt), this._partialTextX = et, this._partialTextY = dt + ln, this._partialText = zt, b.fillStrokeShape(this), et += this.measureSize(zt).width + ot;
          }
        } else
          ot !== 0 && b.setAttr("letterSpacing", `${ot}px`), this._partialTextX = et, this._partialTextY = dt + ln, this._partialText = bt, b.fillStrokeShape(this);
        b.restore(), pe > 1 && (dt += ie);
      }
    }
    _hitFunc(b) {
      const ae = this.getWidth(), pe = this.getHeight();
      b.beginPath(), b.rect(0, 0, ae, pe), b.closePath(), b.fillStrokeShape(this);
    }
    setText(b) {
      const ae = l.Util._isString(b) ? b : b == null ? "" : b + "";
      return this._setAttr(R, ae), this;
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
      var ae, pe, oe, q, ie, ye, Ee, Me, je, Ue, ot;
      let we = N(), Je = this.fontSize(), Qe;
      we.save(), we.font = this._getContextFont(), Qe = we.measureText(b), we.restore();
      const St = Je / 100;
      return {
        actualBoundingBoxAscent: (ae = Qe.actualBoundingBoxAscent) !== null && ae !== void 0 ? ae : 71.58203125 * St,
        actualBoundingBoxDescent: (pe = Qe.actualBoundingBoxDescent) !== null && pe !== void 0 ? pe : 0,
        actualBoundingBoxLeft: (oe = Qe.actualBoundingBoxLeft) !== null && oe !== void 0 ? oe : -7.421875 * St,
        actualBoundingBoxRight: (q = Qe.actualBoundingBoxRight) !== null && q !== void 0 ? q : 75.732421875 * St,
        alphabeticBaseline: (ie = Qe.alphabeticBaseline) !== null && ie !== void 0 ? ie : 0,
        emHeightAscent: (ye = Qe.emHeightAscent) !== null && ye !== void 0 ? ye : 100 * St,
        emHeightDescent: (Ee = Qe.emHeightDescent) !== null && Ee !== void 0 ? Ee : -20 * St,
        fontBoundingBoxAscent: (Me = Qe.fontBoundingBoxAscent) !== null && Me !== void 0 ? Me : 91 * St,
        fontBoundingBoxDescent: (je = Qe.fontBoundingBoxDescent) !== null && je !== void 0 ? je : 21 * St,
        hangingBaseline: (Ue = Qe.hangingBaseline) !== null && Ue !== void 0 ? Ue : 72.80000305175781 * St,
        ideographicBaseline: (ot = Qe.ideographicBaseline) !== null && ot !== void 0 ? ot : -21 * St,
        width: Qe.width,
        height: Je
      };
    }
    _getContextFont() {
      return this.fontStyle() + H + this.fontVariant() + H + (this.fontSize() + I) + X(this.fontFamily());
    }
    _addTextLine(b) {
      this.align() === E && (b = b.trim());
      const pe = this._getTextWidth(b);
      return this.textArr.push({
        text: b,
        width: pe,
        lastInParagraph: !1
      });
    }
    _getTextWidth(b) {
      const ae = this.letterSpacing(), pe = b.length;
      return N().measureText(b).width + ae * pe;
    }
    _setTextData() {
      let b = this.text().split(`
`), ae = +this.fontSize(), pe = 0, oe = this.lineHeight() * ae, q = this.attrs.width, ie = this.attrs.height, ye = q !== g && q !== void 0, Ee = ie !== g && ie !== void 0, Me = this.padding(), je = q - Me * 2, Ue = ie - Me * 2, ot = 0, we = this.wrap(), Je = we !== Q, Qe = we !== V && Je, St = this.ellipsis();
      this.textArr = [], N().font = this._getContextFont();
      const sn = St ? this._getTextWidth(Z) : 0;
      for (let dt = 0, qn = b.length; dt < qn; ++dt) {
        let et = b[dt], ln = this._getTextWidth(et);
        if (ye && ln > je)
          for (; et.length > 0; ) {
            let Ht = 0, bt = f(et).length, at = "", Ln = 0;
            for (; Ht < bt; ) {
              const Wt = Ht + bt >>> 1, An = f(et), Dt = An.slice(0, Wt + 1).join(""), zt = this._getTextWidth(Dt);
              (St && Ee && ot + oe > Ue ? zt + sn : zt) <= je ? (Ht = Wt + 1, at = Dt, Ln = zt) : bt = Wt;
            }
            if (at) {
              if (Qe) {
                const Dt = f(et), zt = f(at), br = Dt[zt.length], Or = br === H || br === S;
                let Ir;
                if (Or && Ln <= je)
                  Ir = zt.length;
                else {
                  const Kn = zt.lastIndexOf(H), pi = zt.lastIndexOf(S);
                  Ir = Math.max(Kn, pi) + 1;
                }
                Ir > 0 && (Ht = Ir, at = Dt.slice(0, Ht).join(""), Ln = this._getTextWidth(at));
              }
              if (at = at.trimRight(), this._addTextLine(at), pe = Math.max(pe, Ln), ot += oe, this._shouldHandleEllipsis(ot)) {
                this._tryToAddEllipsisToLastLine();
                break;
              }
              if (et = f(et).slice(Ht).join("").trimLeft(), et.length > 0 && (ln = this._getTextWidth(et), ln <= je)) {
                this._addTextLine(et), ot += oe, pe = Math.max(pe, ln);
                break;
              }
            } else
              break;
          }
        else
          this._addTextLine(et), ot += oe, pe = Math.max(pe, ln), this._shouldHandleEllipsis(ot) && dt < qn - 1 && this._tryToAddEllipsisToLastLine();
        if (this.textArr[this.textArr.length - 1] && (this.textArr[this.textArr.length - 1].lastInParagraph = !0), Ee && ot + oe > Ue)
          break;
      }
      this.textHeight = ae, this.textWidth = pe;
    }
    _shouldHandleEllipsis(b) {
      const ae = +this.fontSize(), pe = this.lineHeight() * ae, oe = this.attrs.height, q = oe !== g && oe !== void 0, ie = this.padding(), ye = oe - ie * 2;
      return !(this.wrap() !== Q) || q && b + pe > ye;
    }
    _tryToAddEllipsisToLastLine() {
      const b = this.attrs.width, ae = b !== g && b !== void 0, pe = this.padding(), oe = b - pe * 2, q = this.ellipsis(), ie = this.textArr[this.textArr.length - 1];
      !ie || !q || (ae && (this._getTextWidth(ie.text + Z) < oe || (ie.text = ie.text.slice(0, ie.text.length - 3))), this.textArr.splice(this.textArr.length - 1, 1), this._addTextLine(ie.text + Z));
    }
    getStrokeScaleEnabled() {
      return !0;
    }
    _useBufferCanvas() {
      const b = this.textDecoration().indexOf("underline") !== -1 || this.textDecoration().indexOf("line-through") !== -1, ae = this.hasShadow();
      return b && ae ? !0 : super._useBufferCanvas();
    }
  };
  return oa.Text = _, _.prototype._fillFunc = D, _.prototype._strokeFunc = W, _.prototype.className = A, _.prototype._attrsAffectingSize = [
    "text",
    "fontSize",
    "padding",
    "wrap",
    "lineHeight",
    "letterSpacing"
  ], (0, k._registerNode)(_), d.Factory.overWriteSetter(_, "width", (0, M.getNumberOrAutoValidator)()), d.Factory.overWriteSetter(_, "height", (0, M.getNumberOrAutoValidator)()), d.Factory.addGetterSetter(_, "direction", C), d.Factory.addGetterSetter(_, "fontFamily", "Arial"), d.Factory.addGetterSetter(_, "fontSize", 12, (0, M.getNumberValidator)()), d.Factory.addGetterSetter(_, "fontStyle", T), d.Factory.addGetterSetter(_, "fontVariant", T), d.Factory.addGetterSetter(_, "padding", 0, (0, M.getNumberValidator)()), d.Factory.addGetterSetter(_, "align", x), d.Factory.addGetterSetter(_, "verticalAlign", j), d.Factory.addGetterSetter(_, "lineHeight", 1, (0, M.getNumberValidator)()), d.Factory.addGetterSetter(_, "wrap", G), d.Factory.addGetterSetter(_, "ellipsis", !1, (0, M.getBooleanValidator)()), d.Factory.addGetterSetter(_, "letterSpacing", 0, (0, M.getNumberValidator)()), d.Factory.addGetterSetter(_, "text", "", (0, M.getStringValidator)()), d.Factory.addGetterSetter(_, "textDecoration", ""), oa;
}
var _u = {}, jh;
function X1() {
  if (jh) return _u;
  jh = 1, Object.defineProperty(_u, "__esModule", { value: !0 }), _u.TextPath = void 0;
  const l = Qt(), d = lt(), v = Fn(), L = _f(), M = W0(), k = ct(), f = tt(), g = "", m = "normal";
  function C(P) {
    P.fillText(this.partialText, 0, 0);
  }
  function E(P) {
    P.strokeText(this.partialText, 0, 0);
  }
  let F = class extends v.Shape {
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
      const x = this.pathLength;
      return S - 1 > x ? null : L.Path.getPointAtLengthOfDataArray(S, this.dataArray);
    }
    _readDataAttribute() {
      this.dataArray = L.Path.parsePathData(this.attrs.data), this.pathLength = this._getTextPathLength();
    }
    _sceneFunc(S) {
      S.setAttr("font", this._getContextFont()), S.setAttr("textBaseline", this.textBaseline()), S.setAttr("textAlign", "left"), S.save();
      const x = this.textDecoration(), R = this.fill(), A = this.fontSize(), j = this.glyphInfo;
      x === "underline" && S.beginPath();
      for (let w = 0; w < j.length; w++) {
        S.save();
        const h = j[w].p0;
        S.translate(h.x, h.y), S.rotate(j[w].rotation), this.partialText = j[w].text, S.fillStrokeShape(this), x === "underline" && (w === 0 && S.moveTo(0, A / 2 + 1), S.lineTo(A, A / 2 + 1)), S.restore();
      }
      x === "underline" && (S.strokeStyle = R, S.lineWidth = A / 20, S.stroke()), S.restore();
    }
    _hitFunc(S) {
      S.beginPath();
      const x = this.glyphInfo;
      if (x.length >= 1) {
        const R = x[0].p0;
        S.moveTo(R.x, R.y);
      }
      for (let R = 0; R < x.length; R++) {
        const A = x[R].p1;
        S.lineTo(A.x, A.y);
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
      return M.Text.prototype.setText.call(this, S);
    }
    _getContextFont() {
      return M.Text.prototype._getContextFont.call(this);
    }
    _getTextSize(S) {
      const R = this.dummyCanvas.getContext("2d");
      R.save(), R.font = this._getContextFont();
      const A = R.measureText(S);
      return R.restore(), {
        width: A.width,
        height: parseInt(`${this.fontSize()}`, 10)
      };
    }
    _setTextData() {
      const { width: S, height: x } = this._getTextSize(this.attrs.text);
      if (this.textWidth = S, this.textHeight = x, this.glyphInfo = [], !this.attrs.data)
        return null;
      const R = this.letterSpacing(), A = this.align(), j = this.kerningFunc(), w = Math.max(this.textWidth + ((this.attrs.text || "").length - 1) * R, 0);
      let h = 0;
      A === "center" && (h = Math.max(0, this.pathLength / 2 - w / 2)), A === "right" && (h = Math.max(0, this.pathLength - w));
      const T = (0, M.stringToArray)(this.text());
      let I = h;
      for (let H = 0; H < T.length; H++) {
        const J = this._getPointAtLength(I);
        if (!J)
          return;
        let z = this._getTextSize(T[H]).width + R;
        if (T[H] === " " && A === "justify") {
          const re = this.text().split(" ").length - 1;
          z += (this.pathLength - w) / re;
        }
        const G = this._getPointAtLength(I + z);
        if (!G)
          return;
        const V = L.Path.getLineLength(J.x, J.y, G.x, G.y);
        let Q = 0;
        if (j)
          try {
            Q = j(T[H - 1], T[H]) * this.fontSize();
          } catch {
            Q = 0;
          }
        J.x += Q, G.x += Q, this.textWidth += Q;
        const Z = L.Path.getPointOnLine(Q + V / 2, J.x, J.y, G.x, G.y), ee = Math.atan2(G.y - J.y, G.x - J.x);
        this.glyphInfo.push({
          transposeX: Z.x,
          transposeY: Z.y,
          text: T[H],
          rotation: ee,
          p0: J,
          p1: G
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
      let x = S[0] || 0, R = S[0] || 0, A = S[1] || 0, j = S[1] || 0, w, h;
      for (let I = 0; I < S.length / 2; I++)
        w = S[I * 2], h = S[I * 2 + 1], x = Math.min(x, w), R = Math.max(R, w), A = Math.min(A, h), j = Math.max(j, h);
      const T = this.fontSize();
      return {
        x: x - T / 2,
        y: A - T / 2,
        width: R - x + T,
        height: j - A + T
      };
    }
    destroy() {
      return l.Util.releaseCanvas(this.dummyCanvas), super.destroy();
    }
  };
  return _u.TextPath = F, F.prototype._fillFunc = C, F.prototype._strokeFunc = E, F.prototype._fillFuncHit = C, F.prototype._strokeFuncHit = E, F.prototype.className = "TextPath", F.prototype._attrsAffectingSize = ["text", "fontSize", "data"], (0, f._registerNode)(F), d.Factory.addGetterSetter(F, "data"), d.Factory.addGetterSetter(F, "fontFamily", "Arial"), d.Factory.addGetterSetter(F, "fontSize", 12, (0, k.getNumberValidator)()), d.Factory.addGetterSetter(F, "fontStyle", m), d.Factory.addGetterSetter(F, "align", "left"), d.Factory.addGetterSetter(F, "letterSpacing", 0, (0, k.getNumberValidator)()), d.Factory.addGetterSetter(F, "textBaseline", "middle"), d.Factory.addGetterSetter(F, "fontVariant", m), d.Factory.addGetterSetter(F, "text", g), d.Factory.addGetterSetter(F, "textDecoration", ""), d.Factory.addGetterSetter(F, "kerningFunc", void 0), _u;
}
var Su = {}, Hh;
function Q1() {
  if (Hh) return Su;
  Hh = 1, Object.defineProperty(Su, "__esModule", { value: !0 }), Su.Transformer = void 0;
  const l = Qt(), d = lt(), v = on(), L = Fn(), M = H0(), k = yf(), f = tt(), g = ct(), m = tt(), C = "tr-konva", E = [
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
  ].map((z) => z + `.${C}`).join(" "), F = "nodesRect", P = [
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
  }, x = "ontouchstart" in f.Konva._global;
  function R(z, G, V) {
    if (z === "rotater")
      return V;
    G += l.Util.degToRad(S[z] || 0);
    const Q = (l.Util.radToDeg(G) % 360 + 360) % 360;
    return l.Util._inRange(Q, 315 + 22.5, 360) || l.Util._inRange(Q, 0, 22.5) ? "ns-resize" : l.Util._inRange(Q, 45 - 22.5, 45 + 22.5) ? "nesw-resize" : l.Util._inRange(Q, 90 - 22.5, 90 + 22.5) ? "ew-resize" : l.Util._inRange(Q, 135 - 22.5, 135 + 22.5) ? "nwse-resize" : l.Util._inRange(Q, 180 - 22.5, 180 + 22.5) ? "ns-resize" : l.Util._inRange(Q, 225 - 22.5, 225 + 22.5) ? "nesw-resize" : l.Util._inRange(Q, 270 - 22.5, 270 + 22.5) ? "ew-resize" : l.Util._inRange(Q, 315 - 22.5, 315 + 22.5) ? "nwse-resize" : (l.Util.error("Transformer has unknown angle for cursor detection: " + Q), "pointer");
  }
  const A = [
    "top-left",
    "top-center",
    "top-right",
    "middle-right",
    "middle-left",
    "bottom-left",
    "bottom-center",
    "bottom-right"
  ];
  function j(z) {
    return {
      x: z.x + z.width / 2 * Math.cos(z.rotation) + z.height / 2 * Math.sin(-z.rotation),
      y: z.y + z.height / 2 * Math.cos(z.rotation) + z.width / 2 * Math.sin(z.rotation)
    };
  }
  function w(z, G, V) {
    const Q = V.x + (z.x - V.x) * Math.cos(G) - (z.y - V.y) * Math.sin(G), Z = V.y + (z.x - V.x) * Math.sin(G) + (z.y - V.y) * Math.cos(G);
    return {
      ...z,
      rotation: z.rotation + G,
      x: Q,
      y: Z
    };
  }
  function h(z, G) {
    const V = j(z);
    return w(z, G, V);
  }
  function T(z, G, V) {
    let Q = G;
    for (let Z = 0; Z < z.length; Z++) {
      const ee = f.Konva.getAngle(z[Z]), re = Math.abs(ee - G) % (Math.PI * 2);
      Math.min(re, Math.PI * 2 - re) < V && (Q = ee);
    }
    return Q;
  }
  let I = 0;
  class H extends k.Group {
    constructor(G) {
      super(G), this._movingAnchorName = null, this._transforming = !1, this._createElements(), this._handleMouseMove = this._handleMouseMove.bind(this), this._handleMouseUp = this._handleMouseUp.bind(this), this.update = this.update.bind(this), this.on(E, this.update), this.getNode() && this.update();
    }
    attachTo(G) {
      return this.setNode(G), this;
    }
    setNode(G) {
      return l.Util.warn("tr.setNode(shape), tr.node(shape) and tr.attachTo(shape) methods are deprecated. Please use tr.nodes(nodesArray) instead."), this.setNodes([G]);
    }
    getNode() {
      return this._nodes && this._nodes[0];
    }
    _getEventNamespace() {
      return C + this._id;
    }
    setNodes(G = []) {
      this._nodes && this._nodes.length && this.detach();
      const V = G.filter((Z) => Z.isAncestorOf(this) ? (l.Util.error("Konva.Transformer cannot be an a child of the node you are trying to attach"), !1) : !0);
      return this._nodes = G = V, G.length === 1 && this.useSingleNodeRotation() ? this.rotation(G[0].getAbsoluteRotation()) : this.rotation(0), this._nodes.forEach((Z) => {
        const ee = () => {
          this.nodes().length === 1 && this.useSingleNodeRotation() && this.rotation(this.nodes()[0].getAbsoluteRotation()), this._resetTransformCache(), !this._transforming && !this.isDragging() && this.update();
        };
        if (Z._attrsAffectingSize.length) {
          const re = Z._attrsAffectingSize.map((X) => X + "Change." + this._getEventNamespace()).join(" ");
          Z.on(re, ee);
        }
        Z.on(P.map((re) => re + `.${this._getEventNamespace()}`).join(" "), ee), Z.on(`absoluteTransformChange.${this._getEventNamespace()}`, ee), this._proxyDrag(Z);
      }), this._resetTransformCache(), !!this.findOne(".top-left") && this.update(), this;
    }
    _proxyDrag(G) {
      let V;
      G.on(`dragstart.${this._getEventNamespace()}`, (Q) => {
        V = G.getAbsolutePosition(), !this.isDragging() && G !== this.findOne(".back") && this.startDrag(Q, !1);
      }), G.on(`dragmove.${this._getEventNamespace()}`, (Q) => {
        if (!V)
          return;
        const Z = G.getAbsolutePosition(), ee = Z.x - V.x, re = Z.y - V.y;
        this.nodes().forEach((X) => {
          if (X === G || X.isDragging())
            return;
          const me = X.getAbsolutePosition();
          X.setAbsolutePosition({
            x: me.x + ee,
            y: me.y + re
          }), X.startDrag(Q);
        }), V = null;
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
      this._clearCache(F), this._clearCache("transform"), this._clearSelfAndDescendantCache("absoluteTransform");
    }
    _getNodeRect() {
      return this._getCache(F, this.__getNodeRect);
    }
    __getNodeShape(G, V = this.rotation(), Q) {
      const Z = G.getClientRect({
        skipTransform: !0,
        skipShadow: !0,
        skipStroke: this.ignoreStroke()
      }), ee = G.getAbsoluteScale(Q), re = G.getAbsolutePosition(Q), X = Z.x * ee.x - G.offsetX() * ee.x, me = Z.y * ee.y - G.offsetY() * ee.y, N = (f.Konva.getAngle(G.getAbsoluteRotation()) + Math.PI * 2) % (Math.PI * 2), D = {
        x: re.x + X * Math.cos(N) + me * Math.sin(-N),
        y: re.y + me * Math.cos(N) + X * Math.sin(N),
        width: Z.width * ee.x,
        height: Z.height * ee.y,
        rotation: N
      };
      return w(D, -f.Konva.getAngle(V), {
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
      const V = [];
      this.nodes().map((N) => {
        const D = N.getClientRect({
          skipTransform: !0,
          skipShadow: !0,
          skipStroke: this.ignoreStroke()
        }), W = [
          { x: D.x, y: D.y },
          { x: D.x + D.width, y: D.y },
          { x: D.x + D.width, y: D.y + D.height },
          { x: D.x, y: D.y + D.height }
        ], U = N.getAbsoluteTransform();
        W.forEach(function(_) {
          const K = U.point(_);
          V.push(K);
        });
      });
      const Q = new l.Transform();
      Q.rotate(-f.Konva.getAngle(this.rotation()));
      let Z = 1 / 0, ee = 1 / 0, re = -1 / 0, X = -1 / 0;
      V.forEach(function(N) {
        const D = Q.point(N);
        Z === void 0 && (Z = re = D.x, ee = X = D.y), Z = Math.min(Z, D.x), ee = Math.min(ee, D.y), re = Math.max(re, D.x), X = Math.max(X, D.y);
      }), Q.invert();
      const me = Q.point({ x: Z, y: ee });
      return {
        x: me.x,
        y: me.y,
        width: re - Z,
        height: X - ee,
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
      this._createBack(), A.forEach((G) => {
        this._createAnchor(G);
      }), this._createAnchor("rotater");
    }
    _createAnchor(G) {
      const V = new M.Rect({
        stroke: "rgb(0, 161, 255)",
        fill: "white",
        strokeWidth: 1,
        name: G + " _anchor",
        dragDistance: 0,
        draggable: !0,
        hitStrokeWidth: x ? 10 : "auto"
      }), Q = this;
      V.on("mousedown touchstart", function(Z) {
        Q._handleMouseDown(Z);
      }), V.on("dragstart", (Z) => {
        V.stopDrag(), Z.cancelBubble = !0;
      }), V.on("dragend", (Z) => {
        Z.cancelBubble = !0;
      }), V.on("mouseenter", () => {
        const Z = f.Konva.getAngle(this.rotation()), ee = this.rotateAnchorCursor(), re = R(G, Z, ee);
        V.getStage().content && (V.getStage().content.style.cursor = re), this._cursorChange = !0;
      }), V.on("mouseout", () => {
        V.getStage().content && (V.getStage().content.style.cursor = ""), this._cursorChange = !1;
      }), this.add(V);
    }
    _createBack() {
      const G = new L.Shape({
        name: "back",
        width: 0,
        height: 0,
        draggable: !0,
        sceneFunc(V, Q) {
          const Z = Q.getParent(), ee = Z.padding();
          V.beginPath(), V.rect(-ee, -ee, Q.width() + ee * 2, Q.height() + ee * 2), V.moveTo(Q.width() / 2, -ee), Z.rotateEnabled() && Z.rotateLineVisible() && V.lineTo(Q.width() / 2, -Z.rotateAnchorOffset() * l.Util._sign(Q.height()) - ee), V.fillStrokeShape(Q);
        },
        hitFunc: (V, Q) => {
          if (!this.shouldOverdrawWholeArea())
            return;
          const Z = this.padding();
          V.beginPath(), V.rect(-Z, -Z, Q.width() + Z * 2, Q.height() + Z * 2), V.fillStrokeShape(Q);
        }
      });
      this.add(G), this._proxyDrag(G), G.on("dragstart", (V) => {
        V.cancelBubble = !0;
      }), G.on("dragmove", (V) => {
        V.cancelBubble = !0;
      }), G.on("dragend", (V) => {
        V.cancelBubble = !0;
      }), this.on("dragmove", (V) => {
        this.update();
      });
    }
    _handleMouseDown(G) {
      if (this._transforming)
        return;
      this._movingAnchorName = G.target.name().split(" ")[0];
      const V = this._getNodeRect(), Q = V.width, Z = V.height, ee = Math.sqrt(Math.pow(Q, 2) + Math.pow(Z, 2));
      this.sin = Math.abs(Z / ee), this.cos = Math.abs(Q / ee), typeof window < "u" && (window.addEventListener("mousemove", this._handleMouseMove), window.addEventListener("touchmove", this._handleMouseMove), window.addEventListener("mouseup", this._handleMouseUp, !0), window.addEventListener("touchend", this._handleMouseUp, !0)), this._transforming = !0;
      const re = G.target.getAbsolutePosition(), X = G.target.getStage().getPointerPosition();
      this._anchorDragOffset = {
        x: X.x - re.x,
        y: X.y - re.y
      }, I++, this._fire("transformstart", { evt: G.evt, target: this.getNode() }), this._nodes.forEach((me) => {
        me._fire("transformstart", { evt: G.evt, target: me });
      });
    }
    _handleMouseMove(G) {
      let V, Q, Z;
      const ee = this.findOne("." + this._movingAnchorName), re = ee.getStage();
      re.setPointersPositions(G);
      const X = re.getPointerPosition();
      let me = {
        x: X.x - this._anchorDragOffset.x,
        y: X.y - this._anchorDragOffset.y
      };
      const N = ee.getAbsolutePosition();
      this.anchorDragBoundFunc() && (me = this.anchorDragBoundFunc()(N, me, G)), ee.setAbsolutePosition(me);
      const D = ee.getAbsolutePosition();
      if (N.x === D.x && N.y === D.y)
        return;
      if (this._movingAnchorName === "rotater") {
        const oe = this._getNodeRect();
        V = ee.x() - oe.width / 2, Q = -ee.y() + oe.height / 2;
        let q = Math.atan2(-Q, V) + Math.PI / 2;
        oe.height < 0 && (q -= Math.PI);
        const ye = f.Konva.getAngle(this.rotation()) + q, Ee = f.Konva.getAngle(this.rotationSnapTolerance()), je = T(this.rotationSnaps(), ye, Ee) - oe.rotation, Ue = h(oe, je);
        this._fitNodesInto(Ue, G);
        return;
      }
      const W = this.shiftBehavior();
      let U;
      W === "inverted" ? U = this.keepRatio() && !G.shiftKey : W === "none" ? U = this.keepRatio() : U = this.keepRatio() || G.shiftKey;
      let _ = this.centeredScaling() || G.altKey;
      if (this._movingAnchorName === "top-left") {
        if (U) {
          const oe = _ ? {
            x: this.width() / 2,
            y: this.height() / 2
          } : {
            x: this.findOne(".bottom-right").x(),
            y: this.findOne(".bottom-right").y()
          };
          Z = Math.sqrt(Math.pow(oe.x - ee.x(), 2) + Math.pow(oe.y - ee.y(), 2));
          const q = this.findOne(".top-left").x() > oe.x ? -1 : 1, ie = this.findOne(".top-left").y() > oe.y ? -1 : 1;
          V = Z * this.cos * q, Q = Z * this.sin * ie, this.findOne(".top-left").x(oe.x - V), this.findOne(".top-left").y(oe.y - Q);
        }
      } else if (this._movingAnchorName === "top-center")
        this.findOne(".top-left").y(ee.y());
      else if (this._movingAnchorName === "top-right") {
        if (U) {
          const oe = _ ? {
            x: this.width() / 2,
            y: this.height() / 2
          } : {
            x: this.findOne(".bottom-left").x(),
            y: this.findOne(".bottom-left").y()
          };
          Z = Math.sqrt(Math.pow(ee.x() - oe.x, 2) + Math.pow(oe.y - ee.y(), 2));
          const q = this.findOne(".top-right").x() < oe.x ? -1 : 1, ie = this.findOne(".top-right").y() > oe.y ? -1 : 1;
          V = Z * this.cos * q, Q = Z * this.sin * ie, this.findOne(".top-right").x(oe.x + V), this.findOne(".top-right").y(oe.y - Q);
        }
        var K = ee.position();
        this.findOne(".top-left").y(K.y), this.findOne(".bottom-right").x(K.x);
      } else if (this._movingAnchorName === "middle-left")
        this.findOne(".top-left").x(ee.x());
      else if (this._movingAnchorName === "middle-right")
        this.findOne(".bottom-right").x(ee.x());
      else if (this._movingAnchorName === "bottom-left") {
        if (U) {
          const oe = _ ? {
            x: this.width() / 2,
            y: this.height() / 2
          } : {
            x: this.findOne(".top-right").x(),
            y: this.findOne(".top-right").y()
          };
          Z = Math.sqrt(Math.pow(oe.x - ee.x(), 2) + Math.pow(ee.y() - oe.y, 2));
          const q = oe.x < ee.x() ? -1 : 1, ie = ee.y() < oe.y ? -1 : 1;
          V = Z * this.cos * q, Q = Z * this.sin * ie, ee.x(oe.x - V), ee.y(oe.y + Q);
        }
        K = ee.position(), this.findOne(".top-left").x(K.x), this.findOne(".bottom-right").y(K.y);
      } else if (this._movingAnchorName === "bottom-center")
        this.findOne(".bottom-right").y(ee.y());
      else if (this._movingAnchorName === "bottom-right") {
        if (U) {
          const oe = _ ? {
            x: this.width() / 2,
            y: this.height() / 2
          } : {
            x: this.findOne(".top-left").x(),
            y: this.findOne(".top-left").y()
          };
          Z = Math.sqrt(Math.pow(ee.x() - oe.x, 2) + Math.pow(ee.y() - oe.y, 2));
          const q = this.findOne(".bottom-right").x() < oe.x ? -1 : 1, ie = this.findOne(".bottom-right").y() < oe.y ? -1 : 1;
          V = Z * this.cos * q, Q = Z * this.sin * ie, this.findOne(".bottom-right").x(oe.x + V), this.findOne(".bottom-right").y(oe.y + Q);
        }
      } else
        console.error(new Error("Wrong position argument of selection resizer: " + this._movingAnchorName));
      if (_ = this.centeredScaling() || G.altKey, _) {
        const oe = this.findOne(".top-left"), q = this.findOne(".bottom-right"), ie = oe.x(), ye = oe.y(), Ee = this.getWidth() - q.x(), Me = this.getHeight() - q.y();
        q.move({
          x: -ie,
          y: -ye
        }), oe.move({
          x: Ee,
          y: Me
        });
      }
      const b = this.findOne(".top-left").getAbsolutePosition();
      V = b.x, Q = b.y;
      const ae = this.findOne(".bottom-right").x() - this.findOne(".top-left").x(), pe = this.findOne(".bottom-right").y() - this.findOne(".top-left").y();
      this._fitNodesInto({
        x: V,
        y: Q,
        width: ae,
        height: pe,
        rotation: f.Konva.getAngle(this.rotation())
      }, G);
    }
    _handleMouseUp(G) {
      this._removeEvents(G);
    }
    getAbsoluteTransform() {
      return this.getTransform();
    }
    _removeEvents(G) {
      var V;
      if (this._transforming) {
        this._transforming = !1, typeof window < "u" && (window.removeEventListener("mousemove", this._handleMouseMove), window.removeEventListener("touchmove", this._handleMouseMove), window.removeEventListener("mouseup", this._handleMouseUp, !0), window.removeEventListener("touchend", this._handleMouseUp, !0));
        const Q = this.getNode();
        I--, this._fire("transformend", { evt: G, target: Q }), (V = this.getLayer()) === null || V === void 0 || V.batchDraw(), Q && this._nodes.forEach((Z) => {
          var ee;
          Z._fire("transformend", { evt: G, target: Z }), (ee = Z.getLayer()) === null || ee === void 0 || ee.batchDraw();
        }), this._movingAnchorName = null;
      }
    }
    _fitNodesInto(G, V) {
      const Q = this._getNodeRect(), Z = 1;
      if (l.Util._inRange(G.width, -this.padding() * 2 - Z, Z)) {
        this.update();
        return;
      }
      if (l.Util._inRange(G.height, -this.padding() * 2 - Z, Z)) {
        this.update();
        return;
      }
      const ee = new l.Transform();
      if (ee.rotate(f.Konva.getAngle(this.rotation())), this._movingAnchorName && G.width < 0 && this._movingAnchorName.indexOf("left") >= 0) {
        const U = ee.point({
          x: -this.padding() * 2,
          y: 0
        });
        G.x += U.x, G.y += U.y, G.width += this.padding() * 2, this._movingAnchorName = this._movingAnchorName.replace("left", "right"), this._anchorDragOffset.x -= U.x, this._anchorDragOffset.y -= U.y;
      } else if (this._movingAnchorName && G.width < 0 && this._movingAnchorName.indexOf("right") >= 0) {
        const U = ee.point({
          x: this.padding() * 2,
          y: 0
        });
        this._movingAnchorName = this._movingAnchorName.replace("right", "left"), this._anchorDragOffset.x -= U.x, this._anchorDragOffset.y -= U.y, G.width += this.padding() * 2;
      }
      if (this._movingAnchorName && G.height < 0 && this._movingAnchorName.indexOf("top") >= 0) {
        const U = ee.point({
          x: 0,
          y: -this.padding() * 2
        });
        G.x += U.x, G.y += U.y, this._movingAnchorName = this._movingAnchorName.replace("top", "bottom"), this._anchorDragOffset.x -= U.x, this._anchorDragOffset.y -= U.y, G.height += this.padding() * 2;
      } else if (this._movingAnchorName && G.height < 0 && this._movingAnchorName.indexOf("bottom") >= 0) {
        const U = ee.point({
          x: 0,
          y: this.padding() * 2
        });
        this._movingAnchorName = this._movingAnchorName.replace("bottom", "top"), this._anchorDragOffset.x -= U.x, this._anchorDragOffset.y -= U.y, G.height += this.padding() * 2;
      }
      if (this.boundBoxFunc()) {
        const U = this.boundBoxFunc()(Q, G);
        U ? G = U : l.Util.warn("boundBoxFunc returned falsy. You should return new bound rect from it!");
      }
      const re = 1e7, X = new l.Transform();
      X.translate(Q.x, Q.y), X.rotate(Q.rotation), X.scale(Q.width / re, Q.height / re);
      const me = new l.Transform(), N = G.width / re, D = G.height / re;
      this.flipEnabled() === !1 ? (me.translate(G.x, G.y), me.rotate(G.rotation), me.translate(G.width < 0 ? G.width : 0, G.height < 0 ? G.height : 0), me.scale(Math.abs(N), Math.abs(D))) : (me.translate(G.x, G.y), me.rotate(G.rotation), me.scale(N, D));
      const W = me.multiply(X.invert());
      this._nodes.forEach((U) => {
        var _;
        const K = U.getParent().getAbsoluteTransform(), b = U.getTransform().copy();
        b.translate(U.offsetX(), U.offsetY());
        const ae = new l.Transform();
        ae.multiply(K.copy().invert()).multiply(W).multiply(K).multiply(b);
        const pe = ae.decompose();
        U.setAttrs(pe), (_ = U.getLayer()) === null || _ === void 0 || _.batchDraw();
      }), this.rotation(l.Util._getRotation(G.rotation)), this._nodes.forEach((U) => {
        this._fire("transform", { evt: V, target: U }), U._fire("transform", { evt: V, target: U });
      }), this._resetTransformCache(), this.update(), this.getLayer().batchDraw();
    }
    forceUpdate() {
      this._resetTransformCache(), this.update();
    }
    _batchChangeChild(G, V) {
      this.findOne(G).setAttrs(V);
    }
    update() {
      var G;
      const V = this._getNodeRect();
      this.rotation(l.Util._getRotation(V.rotation));
      const Q = V.width, Z = V.height, ee = this.enabledAnchors(), re = this.resizeEnabled(), X = this.padding(), me = this.anchorSize(), N = this.find("._anchor");
      N.forEach((W) => {
        W.setAttrs({
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
        offsetX: me / 2 + X,
        offsetY: me / 2 + X,
        visible: re && ee.indexOf("top-left") >= 0
      }), this._batchChangeChild(".top-center", {
        x: Q / 2,
        y: 0,
        offsetY: me / 2 + X,
        visible: re && ee.indexOf("top-center") >= 0
      }), this._batchChangeChild(".top-right", {
        x: Q,
        y: 0,
        offsetX: me / 2 - X,
        offsetY: me / 2 + X,
        visible: re && ee.indexOf("top-right") >= 0
      }), this._batchChangeChild(".middle-left", {
        x: 0,
        y: Z / 2,
        offsetX: me / 2 + X,
        visible: re && ee.indexOf("middle-left") >= 0
      }), this._batchChangeChild(".middle-right", {
        x: Q,
        y: Z / 2,
        offsetX: me / 2 - X,
        visible: re && ee.indexOf("middle-right") >= 0
      }), this._batchChangeChild(".bottom-left", {
        x: 0,
        y: Z,
        offsetX: me / 2 + X,
        offsetY: me / 2 - X,
        visible: re && ee.indexOf("bottom-left") >= 0
      }), this._batchChangeChild(".bottom-center", {
        x: Q / 2,
        y: Z,
        offsetY: me / 2 - X,
        visible: re && ee.indexOf("bottom-center") >= 0
      }), this._batchChangeChild(".bottom-right", {
        x: Q,
        y: Z,
        offsetX: me / 2 - X,
        offsetY: me / 2 - X,
        visible: re && ee.indexOf("bottom-right") >= 0
      }), this._batchChangeChild(".rotater", {
        x: Q / 2,
        y: -this.rotateAnchorOffset() * l.Util._sign(Z) - X,
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
      const D = this.anchorStyleFunc();
      D && N.forEach((W) => {
        D(W);
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
      return this.getStage() && this._cursorChange && this.getStage().content && (this.getStage().content.style.cursor = ""), k.Group.prototype.destroy.call(this), this.detach(), this._removeEvents(), this;
    }
    toObject() {
      return v.Node.prototype.toObject.call(this);
    }
    clone(G) {
      return v.Node.prototype.clone.call(this, G);
    }
    getClientRect() {
      return this.nodes().length > 0 ? super.getClientRect() : { x: 0, y: 0, width: 0, height: 0 };
    }
  }
  Su.Transformer = H, H.isTransforming = () => I > 0;
  function J(z) {
    return z instanceof Array || l.Util.warn("enabledAnchors value should be an array"), z instanceof Array && z.forEach(function(G) {
      A.indexOf(G) === -1 && l.Util.warn("Unknown anchor name: " + G + ". Available names are: " + A.join(", "));
    }), z || [];
  }
  return H.prototype.className = "Transformer", (0, m._registerNode)(H), d.Factory.addGetterSetter(H, "enabledAnchors", A, J), d.Factory.addGetterSetter(H, "flipEnabled", !0, (0, g.getBooleanValidator)()), d.Factory.addGetterSetter(H, "resizeEnabled", !0), d.Factory.addGetterSetter(H, "anchorSize", 10, (0, g.getNumberValidator)()), d.Factory.addGetterSetter(H, "rotateEnabled", !0), d.Factory.addGetterSetter(H, "rotateLineVisible", !0), d.Factory.addGetterSetter(H, "rotationSnaps", []), d.Factory.addGetterSetter(H, "rotateAnchorOffset", 50, (0, g.getNumberValidator)()), d.Factory.addGetterSetter(H, "rotateAnchorCursor", "crosshair"), d.Factory.addGetterSetter(H, "rotationSnapTolerance", 5, (0, g.getNumberValidator)()), d.Factory.addGetterSetter(H, "borderEnabled", !0), d.Factory.addGetterSetter(H, "anchorStroke", "rgb(0, 161, 255)"), d.Factory.addGetterSetter(H, "anchorStrokeWidth", 1, (0, g.getNumberValidator)()), d.Factory.addGetterSetter(H, "anchorFill", "white"), d.Factory.addGetterSetter(H, "anchorCornerRadius", 0, (0, g.getNumberValidator)()), d.Factory.addGetterSetter(H, "borderStroke", "rgb(0, 161, 255)"), d.Factory.addGetterSetter(H, "borderStrokeWidth", 1, (0, g.getNumberValidator)()), d.Factory.addGetterSetter(H, "borderDash"), d.Factory.addGetterSetter(H, "keepRatio", !0), d.Factory.addGetterSetter(H, "shiftBehavior", "default"), d.Factory.addGetterSetter(H, "centeredScaling", !1), d.Factory.addGetterSetter(H, "ignoreStroke", !1), d.Factory.addGetterSetter(H, "padding", 0, (0, g.getNumberValidator)()), d.Factory.addGetterSetter(H, "nodes"), d.Factory.addGetterSetter(H, "node"), d.Factory.addGetterSetter(H, "boundBoxFunc"), d.Factory.addGetterSetter(H, "anchorDragBoundFunc"), d.Factory.addGetterSetter(H, "anchorStyleFunc"), d.Factory.addGetterSetter(H, "shouldOverdrawWholeArea", !1), d.Factory.addGetterSetter(H, "useSingleNodeRotation", !0), d.Factory.backCompat(H, {
    lineEnabled: "borderEnabled",
    rotateHandlerOffset: "rotateAnchorOffset",
    enabledHandlers: "enabledAnchors"
  }), Su;
}
var wu = {}, Wh;
function b1() {
  if (Wh) return wu;
  Wh = 1, Object.defineProperty(wu, "__esModule", { value: !0 }), wu.Wedge = void 0;
  const l = lt(), d = Fn(), v = tt(), L = ct(), M = tt();
  let k = class extends d.Shape {
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
  return wu.Wedge = k, k.prototype.className = "Wedge", k.prototype._centroid = !0, k.prototype._attrsAffectingSize = ["radius"], (0, M._registerNode)(k), l.Factory.addGetterSetter(k, "radius", 0, (0, L.getNumberValidator)()), l.Factory.addGetterSetter(k, "angle", 0, (0, L.getNumberValidator)()), l.Factory.addGetterSetter(k, "clockwise", !1), l.Factory.backCompat(k, {
    angleDeg: "angle",
    getAngleDeg: "getAngle",
    setAngleDeg: "setAngle"
  }), wu;
}
var xu = {}, qh;
function J1() {
  if (qh) return xu;
  qh = 1, Object.defineProperty(xu, "__esModule", { value: !0 }), xu.Blur = void 0;
  const l = lt(), d = on(), v = ct();
  function L() {
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
  ], k = [
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
  function f(m, C) {
    const E = m.data, F = m.width, P = m.height;
    let S, x, R, A, j, w, h, T, I, H, J, z, G, V, Q, Z, ee, re, X, me;
    const N = C + C + 1, D = F - 1, W = P - 1, U = C + 1, _ = U * (U + 1) / 2, K = new L(), b = M[C], ae = k[C];
    let pe = null, oe = K, q = null, ie = null;
    for (let ye = 1; ye < N; ye++)
      oe = oe.next = new L(), ye === U && (pe = oe);
    oe.next = K, R = x = 0;
    for (let ye = 0; ye < P; ye++) {
      z = G = V = Q = A = j = w = h = 0, T = U * (Z = E[x]), I = U * (ee = E[x + 1]), H = U * (re = E[x + 2]), J = U * (X = E[x + 3]), A += _ * Z, j += _ * ee, w += _ * re, h += _ * X, oe = K;
      for (let Ee = 0; Ee < U; Ee++)
        oe.r = Z, oe.g = ee, oe.b = re, oe.a = X, oe = oe.next;
      for (let Ee = 1; Ee < U; Ee++)
        S = x + ((D < Ee ? D : Ee) << 2), A += (oe.r = Z = E[S]) * (me = U - Ee), j += (oe.g = ee = E[S + 1]) * me, w += (oe.b = re = E[S + 2]) * me, h += (oe.a = X = E[S + 3]) * me, z += Z, G += ee, V += re, Q += X, oe = oe.next;
      q = K, ie = pe;
      for (let Ee = 0; Ee < F; Ee++)
        E[x + 3] = X = h * b >> ae, X !== 0 ? (X = 255 / X, E[x] = (A * b >> ae) * X, E[x + 1] = (j * b >> ae) * X, E[x + 2] = (w * b >> ae) * X) : E[x] = E[x + 1] = E[x + 2] = 0, A -= T, j -= I, w -= H, h -= J, T -= q.r, I -= q.g, H -= q.b, J -= q.a, S = R + ((S = Ee + C + 1) < D ? S : D) << 2, z += q.r = E[S], G += q.g = E[S + 1], V += q.b = E[S + 2], Q += q.a = E[S + 3], A += z, j += G, w += V, h += Q, q = q.next, T += Z = ie.r, I += ee = ie.g, H += re = ie.b, J += X = ie.a, z -= Z, G -= ee, V -= re, Q -= X, ie = ie.next, x += 4;
      R += F;
    }
    for (let ye = 0; ye < F; ye++) {
      G = V = Q = z = j = w = h = A = 0, x = ye << 2, T = U * (Z = E[x]), I = U * (ee = E[x + 1]), H = U * (re = E[x + 2]), J = U * (X = E[x + 3]), A += _ * Z, j += _ * ee, w += _ * re, h += _ * X, oe = K;
      for (let Me = 0; Me < U; Me++)
        oe.r = Z, oe.g = ee, oe.b = re, oe.a = X, oe = oe.next;
      let Ee = F;
      for (let Me = 1; Me <= C; Me++)
        x = Ee + ye << 2, A += (oe.r = Z = E[x]) * (me = U - Me), j += (oe.g = ee = E[x + 1]) * me, w += (oe.b = re = E[x + 2]) * me, h += (oe.a = X = E[x + 3]) * me, z += Z, G += ee, V += re, Q += X, oe = oe.next, Me < W && (Ee += F);
      x = ye, q = K, ie = pe;
      for (let Me = 0; Me < P; Me++)
        S = x << 2, E[S + 3] = X = h * b >> ae, X > 0 ? (X = 255 / X, E[S] = (A * b >> ae) * X, E[S + 1] = (j * b >> ae) * X, E[S + 2] = (w * b >> ae) * X) : E[S] = E[S + 1] = E[S + 2] = 0, A -= T, j -= I, w -= H, h -= J, T -= q.r, I -= q.g, H -= q.b, J -= q.a, S = ye + ((S = Me + U) < W ? S : W) * F << 2, A += z += q.r = E[S], j += G += q.g = E[S + 1], w += V += q.b = E[S + 2], h += Q += q.a = E[S + 3], q = q.next, T += Z = ie.r, I += ee = ie.g, H += re = ie.b, J += X = ie.a, z -= Z, G -= ee, V -= re, Q -= X, ie = ie.next, x += F;
    }
  }
  const g = function(C) {
    const E = Math.round(this.blurRadius());
    E > 0 && f(C, E);
  };
  return xu.Blur = g, l.Factory.addGetterSetter(d.Node, "blurRadius", 0, (0, v.getNumberValidator)(), l.Factory.afterSetFilter), xu;
}
var Cu = {}, Kh;
function Z1() {
  if (Kh) return Cu;
  Kh = 1, Object.defineProperty(Cu, "__esModule", { value: !0 }), Cu.Brighten = void 0;
  const l = lt(), d = on(), v = ct(), L = function(M) {
    const k = this.brightness() * 255, f = M.data, g = f.length;
    for (let m = 0; m < g; m += 4)
      f[m] += k, f[m + 1] += k, f[m + 2] += k;
  };
  return Cu.Brighten = L, l.Factory.addGetterSetter(d.Node, "brightness", 0, (0, v.getNumberValidator)(), l.Factory.afterSetFilter), Cu;
}
var ku = {}, Yh;
function $1() {
  if (Yh) return ku;
  Yh = 1, Object.defineProperty(ku, "__esModule", { value: !0 }), ku.Contrast = void 0;
  const l = lt(), d = on(), v = ct(), L = function(M) {
    const k = Math.pow((this.contrast() + 100) / 100, 2), f = M.data, g = f.length;
    let m = 150, C = 150, E = 150;
    for (let F = 0; F < g; F += 4)
      m = f[F], C = f[F + 1], E = f[F + 2], m /= 255, m -= 0.5, m *= k, m += 0.5, m *= 255, C /= 255, C -= 0.5, C *= k, C += 0.5, C *= 255, E /= 255, E -= 0.5, E *= k, E += 0.5, E *= 255, m = m < 0 ? 0 : m > 255 ? 255 : m, C = C < 0 ? 0 : C > 255 ? 255 : C, E = E < 0 ? 0 : E > 255 ? 255 : E, f[F] = m, f[F + 1] = C, f[F + 2] = E;
  };
  return ku.Contrast = L, l.Factory.addGetterSetter(d.Node, "contrast", 0, (0, v.getNumberValidator)(), l.Factory.afterSetFilter), ku;
}
var Eu = {}, Xh;
function ep() {
  if (Xh) return Eu;
  Xh = 1, Object.defineProperty(Eu, "__esModule", { value: !0 }), Eu.Emboss = void 0;
  const l = lt(), d = on(), v = Qt(), L = ct(), M = function(k) {
    const f = this.embossStrength() * 10, g = this.embossWhiteLevel() * 255, m = this.embossDirection(), C = this.embossBlend(), E = k.data, F = k.width, P = k.height, S = F * 4;
    let x = 0, R = 0, A = P;
    switch (m) {
      case "top-left":
        x = -1, R = -1;
        break;
      case "top":
        x = -1, R = 0;
        break;
      case "top-right":
        x = -1, R = 1;
        break;
      case "right":
        x = 0, R = 1;
        break;
      case "bottom-right":
        x = 1, R = 1;
        break;
      case "bottom":
        x = 1, R = 0;
        break;
      case "bottom-left":
        x = 1, R = -1;
        break;
      case "left":
        x = 0, R = -1;
        break;
      default:
        v.Util.error("Unknown emboss direction: " + m);
    }
    do {
      const j = (A - 1) * S;
      let w = x;
      A + w < 1 && (w = 0), A + w > P && (w = 0);
      const h = (A - 1 + w) * F * 4;
      let T = F;
      do {
        const I = j + (T - 1) * 4;
        let H = R;
        T + H < 1 && (H = 0), T + H > F && (H = 0);
        const J = h + (T - 1 + H) * 4, z = E[I] - E[J], G = E[I + 1] - E[J + 1], V = E[I + 2] - E[J + 2];
        let Q = z;
        const Z = Q > 0 ? Q : -Q, ee = G > 0 ? G : -G, re = V > 0 ? V : -V;
        if (ee > Z && (Q = G), re > Z && (Q = V), Q *= f, C) {
          const X = E[I] + Q, me = E[I + 1] + Q, N = E[I + 2] + Q;
          E[I] = X > 255 ? 255 : X < 0 ? 0 : X, E[I + 1] = me > 255 ? 255 : me < 0 ? 0 : me, E[I + 2] = N > 255 ? 255 : N < 0 ? 0 : N;
        } else {
          let X = g - Q;
          X < 0 ? X = 0 : X > 255 && (X = 255), E[I] = E[I + 1] = E[I + 2] = X;
        }
      } while (--T);
    } while (--A);
  };
  return Eu.Emboss = M, l.Factory.addGetterSetter(d.Node, "embossStrength", 0.5, (0, L.getNumberValidator)(), l.Factory.afterSetFilter), l.Factory.addGetterSetter(d.Node, "embossWhiteLevel", 0.5, (0, L.getNumberValidator)(), l.Factory.afterSetFilter), l.Factory.addGetterSetter(d.Node, "embossDirection", "top-left", void 0, l.Factory.afterSetFilter), l.Factory.addGetterSetter(d.Node, "embossBlend", !1, void 0, l.Factory.afterSetFilter), Eu;
}
var Pu = {}, Qh;
function tp() {
  if (Qh) return Pu;
  Qh = 1, Object.defineProperty(Pu, "__esModule", { value: !0 }), Pu.Enhance = void 0;
  const l = lt(), d = on(), v = ct();
  function L(k, f, g, m, C) {
    const E = g - f, F = C - m;
    if (E === 0)
      return m + F / 2;
    if (F === 0)
      return m;
    let P = (k - f) / E;
    return P = F * P + m, P;
  }
  const M = function(k) {
    const f = k.data, g = f.length;
    let m = f[0], C = m, E, F = f[1], P = F, S, x = f[2], R = x, A;
    const j = this.enhance();
    if (j === 0)
      return;
    for (let z = 0; z < g; z += 4)
      E = f[z + 0], E < m ? m = E : E > C && (C = E), S = f[z + 1], S < F ? F = S : S > P && (P = S), A = f[z + 2], A < x ? x = A : A > R && (R = A);
    C === m && (C = 255, m = 0), P === F && (P = 255, F = 0), R === x && (R = 255, x = 0);
    let w, h, T, I, H, J;
    if (j > 0)
      w = C + j * (255 - C), h = m - j * (m - 0), T = P + j * (255 - P), I = F - j * (F - 0), H = R + j * (255 - R), J = x - j * (x - 0);
    else {
      const z = (C + m) * 0.5;
      w = C + j * (C - z), h = m + j * (m - z);
      const G = (P + F) * 0.5;
      T = P + j * (P - G), I = F + j * (F - G);
      const V = (R + x) * 0.5;
      H = R + j * (R - V), J = x + j * (x - V);
    }
    for (let z = 0; z < g; z += 4)
      f[z + 0] = L(f[z + 0], m, C, h, w), f[z + 1] = L(f[z + 1], F, P, I, T), f[z + 2] = L(f[z + 2], x, R, J, H);
  };
  return Pu.Enhance = M, l.Factory.addGetterSetter(d.Node, "enhance", 0, (0, v.getNumberValidator)(), l.Factory.afterSetFilter), Pu;
}
var Ru = {}, bh;
function np() {
  if (bh) return Ru;
  bh = 1, Object.defineProperty(Ru, "__esModule", { value: !0 }), Ru.Grayscale = void 0;
  const l = function(d) {
    const v = d.data, L = v.length;
    for (let M = 0; M < L; M += 4) {
      const k = 0.34 * v[M] + 0.5 * v[M + 1] + 0.16 * v[M + 2];
      v[M] = k, v[M + 1] = k, v[M + 2] = k;
    }
  };
  return Ru.Grayscale = l, Ru;
}
var Tu = {}, Jh;
function rp() {
  if (Jh) return Tu;
  Jh = 1, Object.defineProperty(Tu, "__esModule", { value: !0 }), Tu.HSL = void 0;
  const l = lt(), d = on(), v = ct();
  l.Factory.addGetterSetter(d.Node, "hue", 0, (0, v.getNumberValidator)(), l.Factory.afterSetFilter), l.Factory.addGetterSetter(d.Node, "saturation", 0, (0, v.getNumberValidator)(), l.Factory.afterSetFilter), l.Factory.addGetterSetter(d.Node, "luminance", 0, (0, v.getNumberValidator)(), l.Factory.afterSetFilter);
  const L = function(M) {
    const k = M.data, f = k.length, g = 1, m = Math.pow(2, this.saturation()), C = Math.abs(this.hue() + 360) % 360, E = this.luminance() * 127, F = g * m * Math.cos(C * Math.PI / 180), P = g * m * Math.sin(C * Math.PI / 180), S = 0.299 * g + 0.701 * F + 0.167 * P, x = 0.587 * g - 0.587 * F + 0.33 * P, R = 0.114 * g - 0.114 * F - 0.497 * P, A = 0.299 * g - 0.299 * F - 0.328 * P, j = 0.587 * g + 0.413 * F + 0.035 * P, w = 0.114 * g - 0.114 * F + 0.293 * P, h = 0.299 * g - 0.3 * F + 1.25 * P, T = 0.587 * g - 0.586 * F - 1.05 * P, I = 0.114 * g + 0.886 * F - 0.2 * P;
    let H, J, z, G;
    for (let V = 0; V < f; V += 4)
      H = k[V + 0], J = k[V + 1], z = k[V + 2], G = k[V + 3], k[V + 0] = S * H + x * J + R * z + E, k[V + 1] = A * H + j * J + w * z + E, k[V + 2] = h * H + T * J + I * z + E, k[V + 3] = G;
  };
  return Tu.HSL = L, Tu;
}
var Nu = {}, Zh;
function ip() {
  if (Zh) return Nu;
  Zh = 1, Object.defineProperty(Nu, "__esModule", { value: !0 }), Nu.HSV = void 0;
  const l = lt(), d = on(), v = ct(), L = function(M) {
    const k = M.data, f = k.length, g = Math.pow(2, this.value()), m = Math.pow(2, this.saturation()), C = Math.abs(this.hue() + 360) % 360, E = g * m * Math.cos(C * Math.PI / 180), F = g * m * Math.sin(C * Math.PI / 180), P = 0.299 * g + 0.701 * E + 0.167 * F, S = 0.587 * g - 0.587 * E + 0.33 * F, x = 0.114 * g - 0.114 * E - 0.497 * F, R = 0.299 * g - 0.299 * E - 0.328 * F, A = 0.587 * g + 0.413 * E + 0.035 * F, j = 0.114 * g - 0.114 * E + 0.293 * F, w = 0.299 * g - 0.3 * E + 1.25 * F, h = 0.587 * g - 0.586 * E - 1.05 * F, T = 0.114 * g + 0.886 * E - 0.2 * F;
    for (let I = 0; I < f; I += 4) {
      const H = k[I + 0], J = k[I + 1], z = k[I + 2], G = k[I + 3];
      k[I + 0] = P * H + S * J + x * z, k[I + 1] = R * H + A * J + j * z, k[I + 2] = w * H + h * J + T * z, k[I + 3] = G;
    }
  };
  return Nu.HSV = L, l.Factory.addGetterSetter(d.Node, "hue", 0, (0, v.getNumberValidator)(), l.Factory.afterSetFilter), l.Factory.addGetterSetter(d.Node, "saturation", 0, (0, v.getNumberValidator)(), l.Factory.afterSetFilter), l.Factory.addGetterSetter(d.Node, "value", 0, (0, v.getNumberValidator)(), l.Factory.afterSetFilter), Nu;
}
var Mu = {}, $h;
function op() {
  if ($h) return Mu;
  $h = 1, Object.defineProperty(Mu, "__esModule", { value: !0 }), Mu.Invert = void 0;
  const l = function(d) {
    const v = d.data, L = v.length;
    for (let M = 0; M < L; M += 4)
      v[M] = 255 - v[M], v[M + 1] = 255 - v[M + 1], v[M + 2] = 255 - v[M + 2];
  };
  return Mu.Invert = l, Mu;
}
var Fu = {}, e0;
function sp() {
  if (e0) return Fu;
  e0 = 1, Object.defineProperty(Fu, "__esModule", { value: !0 }), Fu.Kaleidoscope = void 0;
  const l = lt(), d = on(), v = Qt(), L = ct(), M = function(g, m, C) {
    const E = g.data, F = m.data, P = g.width, S = g.height, x = C.polarCenterX || P / 2, R = C.polarCenterY || S / 2;
    let A = Math.sqrt(x * x + R * R), j = P - x, w = S - R;
    const h = Math.sqrt(j * j + w * w);
    A = h > A ? h : A;
    const T = S, I = P, H = 360 / I * Math.PI / 180;
    for (let J = 0; J < I; J += 1) {
      const z = Math.sin(J * H), G = Math.cos(J * H);
      for (let V = 0; V < T; V += 1) {
        j = Math.floor(x + A * V / T * G), w = Math.floor(R + A * V / T * z);
        let Q = (w * P + j) * 4;
        const Z = E[Q + 0], ee = E[Q + 1], re = E[Q + 2], X = E[Q + 3];
        Q = (J + V * P) * 4, F[Q + 0] = Z, F[Q + 1] = ee, F[Q + 2] = re, F[Q + 3] = X;
      }
    }
  }, k = function(g, m, C) {
    const E = g.data, F = m.data, P = g.width, S = g.height, x = C.polarCenterX || P / 2, R = C.polarCenterY || S / 2;
    let A = Math.sqrt(x * x + R * R), j = P - x, w = S - R;
    const h = Math.sqrt(j * j + w * w);
    A = h > A ? h : A;
    const T = S, I = P, H = 0;
    let J, z;
    for (j = 0; j < P; j += 1)
      for (w = 0; w < S; w += 1) {
        const G = j - x, V = w - R, Q = Math.sqrt(G * G + V * V) * T / A;
        let Z = (Math.atan2(V, G) * 180 / Math.PI + 360 + H) % 360;
        Z = Z * I / 360, J = Math.floor(Z), z = Math.floor(Q);
        let ee = (z * P + J) * 4;
        const re = E[ee + 0], X = E[ee + 1], me = E[ee + 2], N = E[ee + 3];
        ee = (w * P + j) * 4, F[ee + 0] = re, F[ee + 1] = X, F[ee + 2] = me, F[ee + 3] = N;
      }
  }, f = function(g) {
    const m = g.width, C = g.height;
    let E, F, P, S, x, R, A, j, w, h, T = Math.round(this.kaleidoscopePower());
    const I = Math.round(this.kaleidoscopeAngle()), H = Math.floor(m * (I % 360) / 360);
    if (T < 1)
      return;
    const J = v.Util.createCanvasElement();
    J.width = m, J.height = C;
    const z = J.getContext("2d").getImageData(0, 0, m, C);
    v.Util.releaseCanvas(J), M(g, z, {
      polarCenterX: m / 2,
      polarCenterY: C / 2
    });
    let G = m / Math.pow(2, T);
    for (; G <= 8; )
      G = G * 2, T -= 1;
    G = Math.ceil(G);
    let V = G, Q = 0, Z = V, ee = 1;
    for (H + G > m && (Q = V, Z = 0, ee = -1), F = 0; F < C; F += 1)
      for (E = Q; E !== Z; E += ee)
        P = Math.round(E + H) % m, w = (m * F + P) * 4, x = z.data[w + 0], R = z.data[w + 1], A = z.data[w + 2], j = z.data[w + 3], h = (m * F + E) * 4, z.data[h + 0] = x, z.data[h + 1] = R, z.data[h + 2] = A, z.data[h + 3] = j;
    for (F = 0; F < C; F += 1)
      for (V = Math.floor(G), S = 0; S < T; S += 1) {
        for (E = 0; E < V + 1; E += 1)
          w = (m * F + E) * 4, x = z.data[w + 0], R = z.data[w + 1], A = z.data[w + 2], j = z.data[w + 3], h = (m * F + V * 2 - E - 1) * 4, z.data[h + 0] = x, z.data[h + 1] = R, z.data[h + 2] = A, z.data[h + 3] = j;
        V *= 2;
      }
    k(z, g, {});
  };
  return Fu.Kaleidoscope = f, l.Factory.addGetterSetter(d.Node, "kaleidoscopePower", 2, (0, L.getNumberValidator)(), l.Factory.afterSetFilter), l.Factory.addGetterSetter(d.Node, "kaleidoscopeAngle", 0, (0, L.getNumberValidator)(), l.Factory.afterSetFilter), Fu;
}
var Lu = {}, t0;
function lp() {
  if (t0) return Lu;
  t0 = 1, Object.defineProperty(Lu, "__esModule", { value: !0 }), Lu.Mask = void 0;
  const l = lt(), d = on(), v = ct();
  function L(P, S, x) {
    let R = (x * P.width + S) * 4;
    const A = [];
    return A.push(P.data[R++], P.data[R++], P.data[R++], P.data[R++]), A;
  }
  function M(P, S) {
    return Math.sqrt(Math.pow(P[0] - S[0], 2) + Math.pow(P[1] - S[1], 2) + Math.pow(P[2] - S[2], 2));
  }
  function k(P) {
    const S = [0, 0, 0];
    for (let x = 0; x < P.length; x++)
      S[0] += P[x][0], S[1] += P[x][1], S[2] += P[x][2];
    return S[0] /= P.length, S[1] /= P.length, S[2] /= P.length, S;
  }
  function f(P, S) {
    const x = L(P, 0, 0), R = L(P, P.width - 1, 0), A = L(P, 0, P.height - 1), j = L(P, P.width - 1, P.height - 1), w = S || 10;
    if (M(x, R) < w && M(R, j) < w && M(j, A) < w && M(A, x) < w) {
      const h = k([R, x, j, A]), T = [];
      for (let I = 0; I < P.width * P.height; I++) {
        const H = M(h, [
          P.data[I * 4],
          P.data[I * 4 + 1],
          P.data[I * 4 + 2]
        ]);
        T[I] = H < w ? 0 : 255;
      }
      return T;
    }
  }
  function g(P, S) {
    for (let x = 0; x < P.width * P.height; x++)
      P.data[4 * x + 3] = S[x];
  }
  function m(P, S, x) {
    const R = [1, 1, 1, 1, 0, 1, 1, 1, 1], A = Math.round(Math.sqrt(R.length)), j = Math.floor(A / 2), w = [];
    for (let h = 0; h < x; h++)
      for (let T = 0; T < S; T++) {
        const I = h * S + T;
        let H = 0;
        for (let J = 0; J < A; J++)
          for (let z = 0; z < A; z++) {
            const G = h + J - j, V = T + z - j;
            if (G >= 0 && G < x && V >= 0 && V < S) {
              const Q = G * S + V, Z = R[J * A + z];
              H += P[Q] * Z;
            }
          }
        w[I] = H === 2040 ? 255 : 0;
      }
    return w;
  }
  function C(P, S, x) {
    const R = [1, 1, 1, 1, 1, 1, 1, 1, 1], A = Math.round(Math.sqrt(R.length)), j = Math.floor(A / 2), w = [];
    for (let h = 0; h < x; h++)
      for (let T = 0; T < S; T++) {
        const I = h * S + T;
        let H = 0;
        for (let J = 0; J < A; J++)
          for (let z = 0; z < A; z++) {
            const G = h + J - j, V = T + z - j;
            if (G >= 0 && G < x && V >= 0 && V < S) {
              const Q = G * S + V, Z = R[J * A + z];
              H += P[Q] * Z;
            }
          }
        w[I] = H >= 1020 ? 255 : 0;
      }
    return w;
  }
  function E(P, S, x) {
    const R = [0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111], A = Math.round(Math.sqrt(R.length)), j = Math.floor(A / 2), w = [];
    for (let h = 0; h < x; h++)
      for (let T = 0; T < S; T++) {
        const I = h * S + T;
        let H = 0;
        for (let J = 0; J < A; J++)
          for (let z = 0; z < A; z++) {
            const G = h + J - j, V = T + z - j;
            if (G >= 0 && G < x && V >= 0 && V < S) {
              const Q = G * S + V, Z = R[J * A + z];
              H += P[Q] * Z;
            }
          }
        w[I] = H;
      }
    return w;
  }
  const F = function(P) {
    const S = this.threshold();
    let x = f(P, S);
    return x && (x = m(x, P.width, P.height), x = C(x, P.width, P.height), x = E(x, P.width, P.height), g(P, x)), P;
  };
  return Lu.Mask = F, l.Factory.addGetterSetter(d.Node, "threshold", 0, (0, v.getNumberValidator)(), l.Factory.afterSetFilter), Lu;
}
var Au = {}, n0;
function ap() {
  if (n0) return Au;
  n0 = 1, Object.defineProperty(Au, "__esModule", { value: !0 }), Au.Noise = void 0;
  const l = lt(), d = on(), v = ct(), L = function(M) {
    const k = this.noise() * 255, f = M.data, g = f.length, m = k / 2;
    for (let C = 0; C < g; C += 4)
      f[C + 0] += m - 2 * m * Math.random(), f[C + 1] += m - 2 * m * Math.random(), f[C + 2] += m - 2 * m * Math.random();
  };
  return Au.Noise = L, l.Factory.addGetterSetter(d.Node, "noise", 0.2, (0, v.getNumberValidator)(), l.Factory.afterSetFilter), Au;
}
var Ou = {}, r0;
function up() {
  if (r0) return Ou;
  r0 = 1, Object.defineProperty(Ou, "__esModule", { value: !0 }), Ou.Pixelate = void 0;
  const l = lt(), d = Qt(), v = on(), L = ct(), M = function(k) {
    let f = Math.ceil(this.pixelSize()), g = k.width, m = k.height, C = Math.ceil(g / f), E = Math.ceil(m / f), F = k.data;
    if (f <= 0) {
      d.Util.error("pixelSize value can not be <= 0");
      return;
    }
    for (let P = 0; P < C; P += 1)
      for (let S = 0; S < E; S += 1) {
        let x = 0, R = 0, A = 0, j = 0;
        const w = P * f, h = w + f, T = S * f, I = T + f;
        let H = 0;
        for (let J = w; J < h; J += 1)
          if (!(J >= g))
            for (let z = T; z < I; z += 1) {
              if (z >= m)
                continue;
              const G = (g * z + J) * 4;
              x += F[G + 0], R += F[G + 1], A += F[G + 2], j += F[G + 3], H += 1;
            }
        x = x / H, R = R / H, A = A / H, j = j / H;
        for (let J = w; J < h; J += 1)
          if (!(J >= g))
            for (let z = T; z < I; z += 1) {
              if (z >= m)
                continue;
              const G = (g * z + J) * 4;
              F[G + 0] = x, F[G + 1] = R, F[G + 2] = A, F[G + 3] = j;
            }
      }
  };
  return Ou.Pixelate = M, l.Factory.addGetterSetter(v.Node, "pixelSize", 8, (0, L.getNumberValidator)(), l.Factory.afterSetFilter), Ou;
}
var Iu = {}, i0;
function cp() {
  if (i0) return Iu;
  i0 = 1, Object.defineProperty(Iu, "__esModule", { value: !0 }), Iu.Posterize = void 0;
  const l = lt(), d = on(), v = ct(), L = function(M) {
    const k = Math.round(this.levels() * 254) + 1, f = M.data, g = f.length, m = 255 / k;
    for (let C = 0; C < g; C += 1)
      f[C] = Math.floor(f[C] / m) * m;
  };
  return Iu.Posterize = L, l.Factory.addGetterSetter(d.Node, "levels", 0.5, (0, v.getNumberValidator)(), l.Factory.afterSetFilter), Iu;
}
var Du = {}, o0;
function dp() {
  if (o0) return Du;
  o0 = 1, Object.defineProperty(Du, "__esModule", { value: !0 }), Du.RGB = void 0;
  const l = lt(), d = on(), v = ct(), L = function(M) {
    const k = M.data, f = k.length, g = this.red(), m = this.green(), C = this.blue();
    for (let E = 0; E < f; E += 4) {
      const F = (0.34 * k[E] + 0.5 * k[E + 1] + 0.16 * k[E + 2]) / 255;
      k[E] = F * g, k[E + 1] = F * m, k[E + 2] = F * C, k[E + 3] = k[E + 3];
    }
  };
  return Du.RGB = L, l.Factory.addGetterSetter(d.Node, "red", 0, function(M) {
    return this._filterUpToDate = !1, M > 255 ? 255 : M < 0 ? 0 : Math.round(M);
  }), l.Factory.addGetterSetter(d.Node, "green", 0, function(M) {
    return this._filterUpToDate = !1, M > 255 ? 255 : M < 0 ? 0 : Math.round(M);
  }), l.Factory.addGetterSetter(d.Node, "blue", 0, v.RGBComponent, l.Factory.afterSetFilter), Du;
}
var zu = {}, s0;
function fp() {
  if (s0) return zu;
  s0 = 1, Object.defineProperty(zu, "__esModule", { value: !0 }), zu.RGBA = void 0;
  const l = lt(), d = on(), v = ct(), L = function(M) {
    const k = M.data, f = k.length, g = this.red(), m = this.green(), C = this.blue(), E = this.alpha();
    for (let F = 0; F < f; F += 4) {
      const P = 1 - E;
      k[F] = g * E + k[F] * P, k[F + 1] = m * E + k[F + 1] * P, k[F + 2] = C * E + k[F + 2] * P;
    }
  };
  return zu.RGBA = L, l.Factory.addGetterSetter(d.Node, "red", 0, function(M) {
    return this._filterUpToDate = !1, M > 255 ? 255 : M < 0 ? 0 : Math.round(M);
  }), l.Factory.addGetterSetter(d.Node, "green", 0, function(M) {
    return this._filterUpToDate = !1, M > 255 ? 255 : M < 0 ? 0 : Math.round(M);
  }), l.Factory.addGetterSetter(d.Node, "blue", 0, v.RGBComponent, l.Factory.afterSetFilter), l.Factory.addGetterSetter(d.Node, "alpha", 1, function(M) {
    return this._filterUpToDate = !1, M > 1 ? 1 : M < 0 ? 0 : M;
  }), zu;
}
var Gu = {}, l0;
function hp() {
  if (l0) return Gu;
  l0 = 1, Object.defineProperty(Gu, "__esModule", { value: !0 }), Gu.Sepia = void 0;
  const l = function(d) {
    const v = d.data, L = v.length;
    for (let M = 0; M < L; M += 4) {
      const k = v[M + 0], f = v[M + 1], g = v[M + 2];
      v[M + 0] = Math.min(255, k * 0.393 + f * 0.769 + g * 0.189), v[M + 1] = Math.min(255, k * 0.349 + f * 0.686 + g * 0.168), v[M + 2] = Math.min(255, k * 0.272 + f * 0.534 + g * 0.131);
    }
  };
  return Gu.Sepia = l, Gu;
}
var Uu = {}, a0;
function pp() {
  if (a0) return Uu;
  a0 = 1, Object.defineProperty(Uu, "__esModule", { value: !0 }), Uu.Solarize = void 0;
  const l = function(d) {
    const v = d.data, L = d.width, M = d.height, k = L * 4;
    let f = M;
    do {
      const g = (f - 1) * k;
      let m = L;
      do {
        const C = g + (m - 1) * 4;
        let E = v[C], F = v[C + 1], P = v[C + 2];
        E > 127 && (E = 255 - E), F > 127 && (F = 255 - F), P > 127 && (P = 255 - P), v[C] = E, v[C + 1] = F, v[C + 2] = P;
      } while (--m);
    } while (--f);
  };
  return Uu.Solarize = l, Uu;
}
var Bu = {}, u0;
function gp() {
  if (u0) return Bu;
  u0 = 1, Object.defineProperty(Bu, "__esModule", { value: !0 }), Bu.Threshold = void 0;
  const l = lt(), d = on(), v = ct(), L = function(M) {
    const k = this.threshold() * 255, f = M.data, g = f.length;
    for (let m = 0; m < g; m += 1)
      f[m] = f[m] < k ? 0 : 255;
  };
  return Bu.Threshold = L, l.Factory.addGetterSetter(d.Node, "threshold", 0.5, (0, v.getNumberValidator)(), l.Factory.afterSetFilter), Bu;
}
var c0;
function mp() {
  if (c0) return eu;
  c0 = 1, Object.defineProperty(eu, "__esModule", { value: !0 }), eu.Konva = void 0;
  const l = df(), d = z1(), v = U1(), L = B1(), M = V1(), k = j1(), f = H1(), g = j0(), m = _f(), C = H0(), E = W1(), F = q1(), P = K1(), S = Y1(), x = W0(), R = X1(), A = Q1(), j = b1(), w = J1(), h = Z1(), T = $1(), I = ep(), H = tp(), J = np(), z = rp(), G = ip(), V = op(), Q = sp(), Z = lp(), ee = ap(), re = up(), X = cp(), me = dp(), N = fp(), D = hp(), W = pp(), U = gp();
  return eu.Konva = l.Konva.Util._assign(l.Konva, {
    Arc: d.Arc,
    Arrow: v.Arrow,
    Circle: L.Circle,
    Ellipse: M.Ellipse,
    Image: k.Image,
    Label: f.Label,
    Tag: f.Tag,
    Line: g.Line,
    Path: m.Path,
    Rect: C.Rect,
    RegularPolygon: E.RegularPolygon,
    Ring: F.Ring,
    Sprite: P.Sprite,
    Star: S.Star,
    Text: x.Text,
    TextPath: R.TextPath,
    Transformer: A.Transformer,
    Wedge: j.Wedge,
    Filters: {
      Blur: w.Blur,
      Brighten: h.Brighten,
      Contrast: T.Contrast,
      Emboss: I.Emboss,
      Enhance: H.Enhance,
      Grayscale: J.Grayscale,
      HSL: z.HSL,
      HSV: G.HSV,
      Invert: V.Invert,
      Kaleidoscope: Q.Kaleidoscope,
      Mask: Z.Mask,
      Noise: ee.Noise,
      Pixelate: re.Pixelate,
      Posterize: X.Posterize,
      RGB: me.RGB,
      RGBA: N.RGBA,
      Sepia: D.Sepia,
      Solarize: W.Solarize,
      Threshold: U.Threshold
    }
  }), eu;
}
var yp = rd.exports, d0;
function vp() {
  if (d0) return rd.exports;
  d0 = 1, Object.defineProperty(yp, "__esModule", { value: !0 });
  const l = mp();
  return rd.exports = l.Konva, rd.exports;
}
vp();
var Jc = { exports: {} }, f0;
function _p() {
  return f0 || (f0 = 1, (function(l, d) {
    Object.defineProperty(d, "__esModule", { value: !0 }), d.Konva = void 0;
    var v = df();
    Object.defineProperty(d, "Konva", { enumerable: !0, get: function() {
      return v.Konva;
    } });
    const L = df();
    l.exports = L.Konva;
  })(Jc, Jc.exports)), Jc.exports;
}
var Sp = _p();
const Ku = /* @__PURE__ */ od(Sp);
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
function wp() {
  return h0 || (h0 = 1, of = function(d) {
    var v = {}, L = Yu(), M = gf(), k = Object.assign;
    function f(n) {
      for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, o = 1; o < arguments.length; o++) r += "&args[]=" + encodeURIComponent(arguments[o]);
      return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    var g = L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, m = Symbol.for("react.element"), C = Symbol.for("react.portal"), E = Symbol.for("react.fragment"), F = Symbol.for("react.strict_mode"), P = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), x = Symbol.for("react.context"), R = Symbol.for("react.forward_ref"), A = Symbol.for("react.suspense"), j = Symbol.for("react.suspense_list"), w = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), T = Symbol.for("react.offscreen"), I = Symbol.iterator;
    function H(n) {
      return n === null || typeof n != "object" ? null : (n = I && n[I] || n["@@iterator"], typeof n == "function" ? n : null);
    }
    function J(n) {
      if (n == null) return null;
      if (typeof n == "function") return n.displayName || n.name || null;
      if (typeof n == "string") return n;
      switch (n) {
        case E:
          return "Fragment";
        case C:
          return "Portal";
        case P:
          return "Profiler";
        case F:
          return "StrictMode";
        case A:
          return "Suspense";
        case j:
          return "SuspenseList";
      }
      if (typeof n == "object") switch (n.$$typeof) {
        case x:
          return (n.displayName || "Context") + ".Consumer";
        case S:
          return (n._context.displayName || "Context") + ".Provider";
        case R:
          var r = n.render;
          return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
        case w:
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
    function V(n) {
      if (G(n) !== n) throw Error(f(188));
    }
    function Q(n) {
      var r = n.alternate;
      if (!r) {
        if (r = G(n), r === null) throw Error(f(188));
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
            if (y === o) return V(c), n;
            if (y === a) return V(c), r;
            y = y.sibling;
          }
          throw Error(f(188));
        }
        if (o.return !== a.return) o = c, a = y;
        else {
          for (var B = !1, ne = c.child; ne; ) {
            if (ne === o) {
              B = !0, o = c, a = y;
              break;
            }
            if (ne === a) {
              B = !0, a = c, o = y;
              break;
            }
            ne = ne.sibling;
          }
          if (!B) {
            for (ne = y.child; ne; ) {
              if (ne === o) {
                B = !0, o = y, a = c;
                break;
              }
              if (ne === a) {
                B = !0, a = y, o = c;
                break;
              }
              ne = ne.sibling;
            }
            if (!B) throw Error(f(189));
          }
        }
        if (o.alternate !== a) throw Error(f(190));
      }
      if (o.tag !== 3) throw Error(f(188));
      return o.stateNode.current === o ? n : r;
    }
    function Z(n) {
      return n = Q(n), n !== null ? ee(n) : null;
    }
    function ee(n) {
      if (n.tag === 5 || n.tag === 6) return n;
      for (n = n.child; n !== null; ) {
        var r = ee(n);
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
    var X = Array.isArray, me = d.getPublicInstance, N = d.getRootHostContext, D = d.getChildHostContext, W = d.prepareForCommit, U = d.resetAfterCommit, _ = d.createInstance, K = d.appendInitialChild, b = d.finalizeInitialChildren, ae = d.prepareUpdate, pe = d.shouldSetTextContent, oe = d.createTextInstance, q = d.scheduleTimeout, ie = d.cancelTimeout, ye = d.noTimeout, Ee = d.isPrimaryRenderer, Me = d.supportsMutation, je = d.supportsPersistence, Ue = d.supportsHydration, ot = d.getInstanceFromNode, we = d.preparePortalMount, Je = d.getCurrentEventPriority, Qe = d.detachDeletedInstance, St = d.supportsMicrotasks, sn = d.scheduleMicrotask, dt = d.supportsTestSelectors, qn = d.findFiberRoot, et = d.getBoundingRect, ln = d.getTextContent, Ht = d.isHiddenSubtree, bt = d.matchAccessibilityRole, at = d.setFocusIfFocusable, Ln = d.setupIntersectionObserver, Wt = d.appendChild, An = d.appendChildToContainer, Dt = d.commitTextUpdate, zt = d.commitMount, br = d.commitUpdate, Or = d.insertBefore, Ir = d.insertInContainerBefore, Kn = d.removeChild, pi = d.removeChildFromContainer, an = d.resetTextContent, wo = d.hideInstance, gs = d.hideTextInstance, ms = d.unhideInstance, gi = d.unhideTextInstance, Jr = d.clearContainer, ys = d.cloneInstance, vs = d.createContainerChildSet, _s = d.appendChildToContainerChildSet, Ss = d.finalizeContainerChildren, Vi = d.replaceContainerChildren, ji = d.cloneHiddenInstance, ws = d.cloneHiddenTextInstance, mi = d.canHydrateInstance, xs = d.canHydrateTextInstance, ge = d.canHydrateSuspenseInstance, xe = d.isSuspenseInstancePending, Re = d.isSuspenseInstanceFallback, Te = d.getSuspenseInstanceFallbackErrorDetails, Xe = d.registerSuspenseInstanceRetry, $e = d.getNextHydratableSibling, Et = d.getFirstHydratableChild, er = d.getFirstHydratableChildWithinContainer, yi = d.getFirstHydratableChildWithinSuspenseInstance, Ot = d.hydrateInstance, On = d.hydrateTextInstance, Hi = d.hydrateSuspenseInstance, xo = d.getNextHydratableInstanceAfterSuspenseInstance, rl = d.commitHydratedContainer, il = d.commitHydratedSuspenseInstance, ol = d.clearSuspenseBoundary, sl = d.clearSuspenseBoundaryFromContainer, ud = d.shouldDeleteUnhydratedTailInstances, cd = d.didNotMatchHydratedContainerTextInstance, Bt = d.didNotMatchHydratedTextInstance, la;
    function Wi(n) {
      if (la === void 0) try {
        throw Error();
      } catch (o) {
        var r = o.stack.trim().match(/\n( *(at )?)/);
        la = r && r[1] || "";
      }
      return `
` + la + n;
    }
    var ll = !1;
    function Co(n, r) {
      if (!n || ll) return "";
      ll = !0;
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
          } catch (ke) {
            var a = ke;
          }
          Reflect.construct(n, [], r);
        } else {
          try {
            r.call();
          } catch (ke) {
            a = ke;
          }
          n.call(r.prototype);
        }
        else {
          try {
            throw Error();
          } catch (ke) {
            a = ke;
          }
          n();
        }
      } catch (ke) {
        if (ke && a && typeof ke.stack == "string") {
          for (var c = ke.stack.split(`
`), y = a.stack.split(`
`), B = c.length - 1, ne = y.length - 1; 1 <= B && 0 <= ne && c[B] !== y[ne]; ) ne--;
          for (; 1 <= B && 0 <= ne; B--, ne--) if (c[B] !== y[ne]) {
            if (B !== 1 || ne !== 1)
              do
                if (B--, ne--, 0 > ne || c[B] !== y[ne]) {
                  var fe = `
` + c[B].replace(" at new ", " at ");
                  return n.displayName && fe.includes("<anonymous>") && (fe = fe.replace("<anonymous>", n.displayName)), fe;
                }
              while (1 <= B && 0 <= ne);
            break;
          }
        }
      } finally {
        ll = !1, Error.prepareStackTrace = o;
      }
      return (n = n ? n.displayName || n.name : "") ? Wi(n) : "";
    }
    var dd = Object.prototype.hasOwnProperty, al = [], Zr = -1;
    function gn(n) {
      return { current: n };
    }
    function Pt(n) {
      0 > Zr || (n.current = al[Zr], al[Zr] = null, Zr--);
    }
    function nt(n, r) {
      Zr++, al[Zr] = n.current, n.current = r;
    }
    var vi = {}, xn = gn(vi), Yn = gn(!1), Dr = vi;
    function $r(n, r) {
      var o = n.type.contextTypes;
      if (!o) return vi;
      var a = n.stateNode;
      if (a && a.__reactInternalMemoizedUnmaskedChildContext === r) return a.__reactInternalMemoizedMaskedChildContext;
      var c = {}, y;
      for (y in o) c[y] = r[y];
      return a && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
    }
    function un(n) {
      return n = n.childContextTypes, n != null;
    }
    function qi() {
      Pt(Yn), Pt(xn);
    }
    function Xu(n, r, o) {
      if (xn.current !== vi) throw Error(f(168));
      nt(xn, r), nt(Yn, o);
    }
    function Qu(n, r, o) {
      var a = n.stateNode;
      if (r = r.childContextTypes, typeof a.getChildContext != "function") return o;
      a = a.getChildContext();
      for (var c in a) if (!(c in r)) throw Error(f(108, z(n) || "Unknown", c));
      return k({}, o, a);
    }
    function ko(n) {
      return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || vi, Dr = xn.current, nt(xn, n), nt(Yn, Yn.current), !0;
    }
    function aa(n, r, o) {
      var a = n.stateNode;
      if (!a) throw Error(f(169));
      o ? (n = Qu(n, r, Dr), a.__reactInternalMemoizedMergedChildContext = n, Pt(Yn), Pt(xn), nt(xn, n)) : Pt(Yn), nt(Yn, o);
    }
    var tr = Math.clz32 ? Math.clz32 : ua, Cs = Math.log, fd = Math.LN2;
    function ua(n) {
      return n >>>= 0, n === 0 ? 32 : 31 - (Cs(n) / fd | 0) | 0;
    }
    var ft = 64, ks = 4194304;
    function Eo(n) {
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
    function Po(n, r) {
      var o = n.pendingLanes;
      if (o === 0) return 0;
      var a = 0, c = n.suspendedLanes, y = n.pingedLanes, B = o & 268435455;
      if (B !== 0) {
        var ne = B & ~c;
        ne !== 0 ? a = Eo(ne) : (y &= B, y !== 0 && (a = Eo(y)));
      } else B = o & ~c, B !== 0 ? a = Eo(B) : y !== 0 && (a = Eo(y));
      if (a === 0) return 0;
      if (r !== 0 && r !== a && (r & c) === 0 && (c = a & -a, y = r & -r, c >= y || c === 16 && (y & 4194240) !== 0)) return r;
      if ((a & 4) !== 0 && (a |= o & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= a; 0 < r; ) o = 31 - tr(r), c = 1 << o, a |= n[o], r &= ~c;
      return a;
    }
    function bu(n, r) {
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
    function Ju(n, r) {
      for (var o = n.suspendedLanes, a = n.pingedLanes, c = n.expirationTimes, y = n.pendingLanes; 0 < y; ) {
        var B = 31 - tr(y), ne = 1 << B, fe = c[B];
        fe === -1 ? ((ne & o) === 0 || (ne & a) !== 0) && (c[B] = bu(ne, r)) : fe <= r && (n.expiredLanes |= ne), y &= ~ne;
      }
    }
    function ul(n) {
      return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
    }
    function cl() {
      var n = ft;
      return ft <<= 1, (ft & 4194240) === 0 && (ft = 64), n;
    }
    function Ro(n) {
      for (var r = [], o = 0; 31 > o; o++) r.push(n);
      return r;
    }
    function gr(n, r, o) {
      n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - tr(r), n[r] = o;
    }
    function _i(n, r) {
      var o = n.pendingLanes & ~r;
      n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
      var a = n.eventTimes;
      for (n = n.expirationTimes; 0 < o; ) {
        var c = 31 - tr(o), y = 1 << c;
        r[c] = 0, a[c] = -1, n[c] = -1, o &= ~y;
      }
    }
    function zr(n, r) {
      var o = n.entangledLanes |= r;
      for (n = n.entanglements; o; ) {
        var a = 31 - tr(o), c = 1 << a;
        c & r | n[a] & r && (n[a] |= r), o &= ~c;
      }
    }
    var rt = 0;
    function To(n) {
      return n &= -n, 1 < n ? 4 < n ? (n & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
    }
    var Gr = M.unstable_scheduleCallback, Zu = M.unstable_cancelCallback, $u = M.unstable_shouldYield, Es = M.unstable_requestPaint, cn = M.unstable_now, dl = M.unstable_ImmediatePriority, fl = M.unstable_UserBlockingPriority, hl = M.unstable_NormalPriority, hd = M.unstable_IdlePriority, Si = null, Xn = null;
    function No(n) {
      if (Xn && typeof Xn.onCommitFiberRoot == "function") try {
        Xn.onCommitFiberRoot(Si, n, void 0, (n.current.flags & 128) === 128);
      } catch {
      }
    }
    function pl(n, r) {
      return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
    }
    var Pr = typeof Object.is == "function" ? Object.is : pl, ei = null, Mo = !1, Fo = !1;
    function gl(n) {
      ei === null ? ei = [n] : ei.push(n);
    }
    function ec(n) {
      Mo = !0, gl(n);
    }
    function mn() {
      if (!Fo && ei !== null) {
        Fo = !0;
        var n = 0, r = rt;
        try {
          var o = ei;
          for (rt = 1; n < o.length; n++) {
            var a = o[n];
            do
              a = a(!0);
            while (a !== null);
          }
          ei = null, Mo = !1;
        } catch (c) {
          throw ei !== null && (ei = ei.slice(n + 1)), Gr(dl, mn), c;
        } finally {
          rt = r, Fo = !1;
        }
      }
      return null;
    }
    var wi = [], ti = 0, Ps = null, Ki = 0, In = [], nr = 0, Jt = null, Qn = 1, Rr = "";
    function Tr(n, r) {
      wi[ti++] = Ki, wi[ti++] = Ps, Ps = n, Ki = r;
    }
    function tc(n, r, o) {
      In[nr++] = Qn, In[nr++] = Rr, In[nr++] = Jt, Jt = n;
      var a = Qn;
      n = Rr;
      var c = 32 - tr(a) - 1;
      a &= ~(1 << c), o += 1;
      var y = 32 - tr(r) + c;
      if (30 < y) {
        var B = c - c % 5;
        y = (a & (1 << B) - 1).toString(32), a >>= B, c -= B, Qn = 1 << 32 - tr(r) + c | o << c | a, Rr = y + n;
      } else Qn = 1 << y | o << c | a, Rr = n;
    }
    function Rs(n) {
      n.return !== null && (Tr(n, 1), tc(n, 1, 0));
    }
    function Ts(n) {
      for (; n === Ps; ) Ps = wi[--ti], wi[ti] = null, Ki = wi[--ti], wi[ti] = null;
      for (; n === Jt; ) Jt = In[--nr], In[nr] = null, Rr = In[--nr], In[nr] = null, Qn = In[--nr], In[nr] = null;
    }
    var yn = null, Dn = null, Rt = !1, Ns = !1, Nr = null;
    function nc(n, r) {
      var o = fr(5, null, null, 0);
      o.elementType = "DELETED", o.stateNode = r, o.return = n, r = n.deletions, r === null ? (n.deletions = [o], n.flags |= 16) : r.push(o);
    }
    function ml(n, r) {
      switch (n.tag) {
        case 5:
          return r = mi(r, n.type, n.pendingProps), r !== null ? (n.stateNode = r, yn = n, Dn = Et(r), !0) : !1;
        case 6:
          return r = xs(r, n.pendingProps), r !== null ? (n.stateNode = r, yn = n, Dn = null, !0) : !1;
        case 13:
          if (r = ge(r), r !== null) {
            var o = Jt !== null ? { id: Qn, overflow: Rr } : null;
            return n.memoizedState = { dehydrated: r, treeContext: o, retryLane: 1073741824 }, o = fr(18, null, null, 0), o.stateNode = r, o.return = n, n.child = o, yn = n, Dn = null, !0;
          }
          return !1;
        default:
          return !1;
      }
    }
    function ca(n) {
      return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
    }
    function da(n) {
      if (Rt) {
        var r = Dn;
        if (r) {
          var o = r;
          if (!ml(n, r)) {
            if (ca(n)) throw Error(f(418));
            r = $e(o);
            var a = yn;
            r && ml(n, r) ? nc(a, o) : (n.flags = n.flags & -4097 | 2, Rt = !1, yn = n);
          }
        } else {
          if (ca(n)) throw Error(f(418));
          n.flags = n.flags & -4097 | 2, Rt = !1, yn = n;
        }
      }
    }
    function rc(n) {
      for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
      yn = n;
    }
    function yl(n) {
      if (!Ue || n !== yn) return !1;
      if (!Rt) return rc(n), Rt = !0, !1;
      if (n.tag !== 3 && (n.tag !== 5 || ud(n.type) && !pe(n.type, n.memoizedProps))) {
        var r = Dn;
        if (r) {
          if (ca(n)) throw ic(), Error(f(418));
          for (; r; ) nc(n, r), r = $e(r);
        }
      }
      if (rc(n), n.tag === 13) {
        if (!Ue) throw Error(f(316));
        if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(f(317));
        Dn = xo(n);
      } else Dn = yn ? $e(n.stateNode) : null;
      return !0;
    }
    function ic() {
      for (var n = Dn; n; ) n = $e(n);
    }
    function Yi() {
      Ue && (Dn = yn = null, Ns = Rt = !1);
    }
    function fa(n) {
      Nr === null ? Nr = [n] : Nr.push(n);
    }
    var pd = g.ReactCurrentBatchConfig;
    function vl(n, r) {
      if (Pr(n, r)) return !0;
      if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
      var o = Object.keys(n), a = Object.keys(r);
      if (o.length !== a.length) return !1;
      for (a = 0; a < o.length; a++) {
        var c = o[a];
        if (!dd.call(r, c) || !Pr(n[c], r[c])) return !1;
      }
      return !0;
    }
    function gd(n) {
      switch (n.tag) {
        case 5:
          return Wi(n.type);
        case 16:
          return Wi("Lazy");
        case 13:
          return Wi("Suspense");
        case 19:
          return Wi("SuspenseList");
        case 0:
        case 2:
        case 15:
          return n = Co(n.type, !1), n;
        case 11:
          return n = Co(n.type.render, !1), n;
        case 1:
          return n = Co(n.type, !0), n;
        default:
          return "";
      }
    }
    function Xi(n, r, o) {
      if (n = o.ref, n !== null && typeof n != "function" && typeof n != "object") {
        if (o._owner) {
          if (o = o._owner, o) {
            if (o.tag !== 1) throw Error(f(309));
            var a = o.stateNode;
          }
          if (!a) throw Error(f(147, n));
          var c = a, y = "" + n;
          return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === y ? r.ref : (r = function(B) {
            var ne = c.refs;
            B === null ? delete ne[y] : ne[y] = B;
          }, r._stringRef = y, r);
        }
        if (typeof n != "string") throw Error(f(284));
        if (!o._owner) throw Error(f(290, n));
      }
      return n;
    }
    function _l(n, r) {
      throw n = Object.prototype.toString.call(r), Error(f(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
    }
    function oc(n) {
      var r = n._init;
      return r(n._payload);
    }
    function sc(n) {
      function r(ce, se) {
        if (n) {
          var he = ce.deletions;
          he === null ? (ce.deletions = [se], ce.flags |= 16) : he.push(se);
        }
      }
      function o(ce, se) {
        if (!n) return null;
        for (; se !== null; ) r(ce, se), se = se.sibling;
        return null;
      }
      function a(ce, se) {
        for (ce = /* @__PURE__ */ new Map(); se !== null; ) se.key !== null ? ce.set(se.key, se) : ce.set(se.index, se), se = se.sibling;
        return ce;
      }
      function c(ce, se) {
        return ce = Ui(ce, se), ce.index = 0, ce.sibling = null, ce;
      }
      function y(ce, se, he) {
        return ce.index = he, n ? (he = ce.alternate, he !== null ? (he = he.index, he < se ? (ce.flags |= 2, se) : he) : (ce.flags |= 2, se)) : (ce.flags |= 1048576, se);
      }
      function B(ce) {
        return n && ce.alternate === null && (ce.flags |= 2), ce;
      }
      function ne(ce, se, he, Le) {
        return se === null || se.tag !== 6 ? (se = ns(he, ce.mode, Le), se.return = ce, se) : (se = c(se, he), se.return = ce, se);
      }
      function fe(ce, se, he, Le) {
        var Ve = he.type;
        return Ve === E ? Ie(ce, se, he.props.children, Le, he.key) : se !== null && (se.elementType === Ve || typeof Ve == "object" && Ve !== null && Ve.$$typeof === h && oc(Ve) === se.type) ? (Le = c(se, he.props), Le.ref = Xi(ce, se, he), Le.return = ce, Le) : (Le = Jl(he.type, he.key, he.props, null, ce.mode, Le), Le.ref = Xi(ce, se, he), Le.return = ce, Le);
      }
      function ke(ce, se, he, Le) {
        return se === null || se.tag !== 4 || se.stateNode.containerInfo !== he.containerInfo || se.stateNode.implementation !== he.implementation ? (se = Zl(he, ce.mode, Le), se.return = ce, se) : (se = c(se, he.children || []), se.return = ce, se);
      }
      function Ie(ce, se, he, Le, Ve) {
        return se === null || se.tag !== 7 ? (se = Sn(he, ce.mode, Le, Ve), se.return = ce, se) : (se = c(se, he), se.return = ce, se);
      }
      function Ke(ce, se, he) {
        if (typeof se == "string" && se !== "" || typeof se == "number") return se = ns("" + se, ce.mode, he), se.return = ce, se;
        if (typeof se == "object" && se !== null) {
          switch (se.$$typeof) {
            case m:
              return he = Jl(se.type, se.key, se.props, null, ce.mode, he), he.ref = Xi(ce, null, se), he.return = ce, he;
            case C:
              return se = Zl(se, ce.mode, he), se.return = ce, se;
            case h:
              var Le = se._init;
              return Ke(ce, Le(se._payload), he);
          }
          if (X(se) || H(se)) return se = Sn(se, ce.mode, he, null), se.return = ce, se;
          _l(ce, se);
        }
        return null;
      }
      function Fe(ce, se, he, Le) {
        var Ve = se !== null ? se.key : null;
        if (typeof he == "string" && he !== "" || typeof he == "number") return Ve !== null ? null : ne(ce, se, "" + he, Le);
        if (typeof he == "object" && he !== null) {
          switch (he.$$typeof) {
            case m:
              return he.key === Ve ? fe(ce, se, he, Le) : null;
            case C:
              return he.key === Ve ? ke(ce, se, he, Le) : null;
            case h:
              return Ve = he._init, Fe(
                ce,
                se,
                Ve(he._payload),
                Le
              );
          }
          if (X(he) || H(he)) return Ve !== null ? null : Ie(ce, se, he, Le, null);
          _l(ce, he);
        }
        return null;
      }
      function kt(ce, se, he, Le, Ve) {
        if (typeof Le == "string" && Le !== "" || typeof Le == "number") return ce = ce.get(he) || null, ne(se, ce, "" + Le, Ve);
        if (typeof Le == "object" && Le !== null) {
          switch (Le.$$typeof) {
            case m:
              return ce = ce.get(Le.key === null ? he : Le.key) || null, fe(se, ce, Le, Ve);
            case C:
              return ce = ce.get(Le.key === null ? he : Le.key) || null, ke(se, ce, Le, Ve);
            case h:
              var Ze = Le._init;
              return kt(ce, se, he, Ze(Le._payload), Ve);
          }
          if (X(Le) || H(Le)) return ce = ce.get(he) || null, Ie(se, ce, Le, Ve, null);
          _l(se, Le);
        }
        return null;
      }
      function mt(ce, se, he, Le) {
        for (var Ve = null, Ze = null, Ye = se, ut = se = 0, nn = null; Ye !== null && ut < he.length; ut++) {
          Ye.index > ut ? (nn = Ye, Ye = null) : nn = Ye.sibling;
          var st = Fe(ce, Ye, he[ut], Le);
          if (st === null) {
            Ye === null && (Ye = nn);
            break;
          }
          n && Ye && st.alternate === null && r(ce, Ye), se = y(st, se, ut), Ze === null ? Ve = st : Ze.sibling = st, Ze = st, Ye = nn;
        }
        if (ut === he.length) return o(ce, Ye), Rt && Tr(ce, ut), Ve;
        if (Ye === null) {
          for (; ut < he.length; ut++) Ye = Ke(ce, he[ut], Le), Ye !== null && (se = y(Ye, se, ut), Ze === null ? Ve = Ye : Ze.sibling = Ye, Ze = Ye);
          return Rt && Tr(ce, ut), Ve;
        }
        for (Ye = a(ce, Ye); ut < he.length; ut++) nn = kt(Ye, ce, ut, he[ut], Le), nn !== null && (n && nn.alternate !== null && Ye.delete(nn.key === null ? ut : nn.key), se = y(nn, se, ut), Ze === null ? Ve = nn : Ze.sibling = nn, Ze = nn);
        return n && Ye.forEach(function(Tn) {
          return r(ce, Tn);
        }), Rt && Tr(ce, ut), Ve;
      }
      function jn(ce, se, he, Le) {
        var Ve = H(he);
        if (typeof Ve != "function") throw Error(f(150));
        if (he = Ve.call(he), he == null) throw Error(f(151));
        for (var Ze = Ve = null, Ye = se, ut = se = 0, nn = null, st = he.next(); Ye !== null && !st.done; ut++, st = he.next()) {
          Ye.index > ut ? (nn = Ye, Ye = null) : nn = Ye.sibling;
          var Tn = Fe(ce, Ye, st.value, Le);
          if (Tn === null) {
            Ye === null && (Ye = nn);
            break;
          }
          n && Ye && Tn.alternate === null && r(ce, Ye), se = y(Tn, se, ut), Ze === null ? Ve = Tn : Ze.sibling = Tn, Ze = Tn, Ye = nn;
        }
        if (st.done) return o(
          ce,
          Ye
        ), Rt && Tr(ce, ut), Ve;
        if (Ye === null) {
          for (; !st.done; ut++, st = he.next()) st = Ke(ce, st.value, Le), st !== null && (se = y(st, se, ut), Ze === null ? Ve = st : Ze.sibling = st, Ze = st);
          return Rt && Tr(ce, ut), Ve;
        }
        for (Ye = a(ce, Ye); !st.done; ut++, st = he.next()) st = kt(Ye, ce, ut, st.value, Le), st !== null && (n && st.alternate !== null && Ye.delete(st.key === null ? ut : st.key), se = y(st, se, ut), Ze === null ? Ve = st : Ze.sibling = st, Ze = st);
        return n && Ye.forEach(function(Sd) {
          return r(ce, Sd);
        }), Rt && Tr(ce, ut), Ve;
      }
      function Yr(ce, se, he, Le) {
        if (typeof he == "object" && he !== null && he.type === E && he.key === null && (he = he.props.children), typeof he == "object" && he !== null) {
          switch (he.$$typeof) {
            case m:
              e: {
                for (var Ve = he.key, Ze = se; Ze !== null; ) {
                  if (Ze.key === Ve) {
                    if (Ve = he.type, Ve === E) {
                      if (Ze.tag === 7) {
                        o(ce, Ze.sibling), se = c(Ze, he.props.children), se.return = ce, ce = se;
                        break e;
                      }
                    } else if (Ze.elementType === Ve || typeof Ve == "object" && Ve !== null && Ve.$$typeof === h && oc(Ve) === Ze.type) {
                      o(ce, Ze.sibling), se = c(Ze, he.props), se.ref = Xi(ce, Ze, he), se.return = ce, ce = se;
                      break e;
                    }
                    o(ce, Ze);
                    break;
                  } else r(ce, Ze);
                  Ze = Ze.sibling;
                }
                he.type === E ? (se = Sn(he.props.children, ce.mode, Le, he.key), se.return = ce, ce = se) : (Le = Jl(he.type, he.key, he.props, null, ce.mode, Le), Le.ref = Xi(ce, se, he), Le.return = ce, ce = Le);
              }
              return B(ce);
            case C:
              e: {
                for (Ze = he.key; se !== null; ) {
                  if (se.key === Ze) if (se.tag === 4 && se.stateNode.containerInfo === he.containerInfo && se.stateNode.implementation === he.implementation) {
                    o(ce, se.sibling), se = c(se, he.children || []), se.return = ce, ce = se;
                    break e;
                  } else {
                    o(ce, se);
                    break;
                  }
                  else r(ce, se);
                  se = se.sibling;
                }
                se = Zl(he, ce.mode, Le), se.return = ce, ce = se;
              }
              return B(ce);
            case h:
              return Ze = he._init, Yr(ce, se, Ze(he._payload), Le);
          }
          if (X(he)) return mt(ce, se, he, Le);
          if (H(he)) return jn(ce, se, he, Le);
          _l(ce, he);
        }
        return typeof he == "string" && he !== "" || typeof he == "number" ? (he = "" + he, se !== null && se.tag === 6 ? (o(ce, se.sibling), se = c(se, he), se.return = ce, ce = se) : (o(ce, se), se = ns(he, ce.mode, Le), se.return = ce, ce = se), B(ce)) : o(ce, se);
      }
      return Yr;
    }
    var Qi = sc(!0), lc = sc(!1), Sl = gn(null), wl = null, Lo = null, ha = null;
    function pa() {
      ha = Lo = wl = null;
    }
    function ac(n, r, o) {
      Ee ? (nt(Sl, r._currentValue), r._currentValue = o) : (nt(Sl, r._currentValue2), r._currentValue2 = o);
    }
    function Ms(n) {
      var r = Sl.current;
      Pt(Sl), Ee ? n._currentValue = r : n._currentValue2 = r;
    }
    function bi(n, r, o) {
      for (; n !== null; ) {
        var a = n.alternate;
        if ((n.childLanes & r) !== r ? (n.childLanes |= r, a !== null && (a.childLanes |= r)) : a !== null && (a.childLanes & r) !== r && (a.childLanes |= r), n === o) break;
        n = n.return;
      }
    }
    function Ao(n, r) {
      wl = n, ha = Lo = null, n = n.dependencies, n !== null && n.firstContext !== null && ((n.lanes & r) !== 0 && ($t = !0), n.firstContext = null);
    }
    function rr(n) {
      var r = Ee ? n._currentValue : n._currentValue2;
      if (ha !== n) if (n = { context: n, memoizedValue: r, next: null }, Lo === null) {
        if (wl === null) throw Error(f(308));
        Lo = n, wl.dependencies = { lanes: 0, firstContext: n };
      } else Lo = Lo.next = n;
      return r;
    }
    var xi = null;
    function xl(n) {
      xi === null ? xi = [n] : xi.push(n);
    }
    function ga(n, r, o, a) {
      var c = r.interleaved;
      return c === null ? (o.next = o, xl(r)) : (o.next = c.next, c.next = o), r.interleaved = o, Mr(n, a);
    }
    function Mr(n, r) {
      n.lanes |= r;
      var o = n.alternate;
      for (o !== null && (o.lanes |= r), o = n, n = n.return; n !== null; ) n.childLanes |= r, o = n.alternate, o !== null && (o.childLanes |= r), o = n, n = n.return;
      return o.tag === 3 ? o.stateNode : null;
    }
    var ir = !1;
    function ma(n) {
      n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
    }
    function uc(n, r) {
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
        return c === null ? r.next = r : (r.next = c.next, c.next = r), a.pending = r, Mr(n, o);
      }
      return c = a.interleaved, c === null ? (r.next = r, xl(a)) : (r.next = c.next, c.next = r), a.interleaved = r, Mr(n, o);
    }
    function Fs(n, r, o) {
      if (r = r.updateQueue, r !== null && (r = r.shared, (o & 4194240) !== 0)) {
        var a = r.lanes;
        a &= n.pendingLanes, o |= a, r.lanes = o, zr(n, o);
      }
    }
    function Oo(n, r) {
      var o = n.updateQueue, a = n.alternate;
      if (a !== null && (a = a.updateQueue, o === a)) {
        var c = null, y = null;
        if (o = o.firstBaseUpdate, o !== null) {
          do {
            var B = { eventTime: o.eventTime, lane: o.lane, tag: o.tag, payload: o.payload, callback: o.callback, next: null };
            y === null ? c = y = B : y = y.next = B, o = o.next;
          } while (o !== null);
          y === null ? c = y = r : y = y.next = r;
        } else c = y = r;
        o = { baseState: a.baseState, firstBaseUpdate: c, lastBaseUpdate: y, shared: a.shared, effects: a.effects }, n.updateQueue = o;
        return;
      }
      n = o.lastBaseUpdate, n === null ? o.firstBaseUpdate = r : n.next = r, o.lastBaseUpdate = r;
    }
    function Ci(n, r, o, a) {
      var c = n.updateQueue;
      ir = !1;
      var y = c.firstBaseUpdate, B = c.lastBaseUpdate, ne = c.shared.pending;
      if (ne !== null) {
        c.shared.pending = null;
        var fe = ne, ke = fe.next;
        fe.next = null, B === null ? y = ke : B.next = ke, B = fe;
        var Ie = n.alternate;
        Ie !== null && (Ie = Ie.updateQueue, ne = Ie.lastBaseUpdate, ne !== B && (ne === null ? Ie.firstBaseUpdate = ke : ne.next = ke, Ie.lastBaseUpdate = fe));
      }
      if (y !== null) {
        var Ke = c.baseState;
        B = 0, Ie = ke = fe = null, ne = y;
        do {
          var Fe = ne.lane, kt = ne.eventTime;
          if ((a & Fe) === Fe) {
            Ie !== null && (Ie = Ie.next = {
              eventTime: kt,
              lane: 0,
              tag: ne.tag,
              payload: ne.payload,
              callback: ne.callback,
              next: null
            });
            e: {
              var mt = n, jn = ne;
              switch (Fe = r, kt = o, jn.tag) {
                case 1:
                  if (mt = jn.payload, typeof mt == "function") {
                    Ke = mt.call(kt, Ke, Fe);
                    break e;
                  }
                  Ke = mt;
                  break e;
                case 3:
                  mt.flags = mt.flags & -65537 | 128;
                case 0:
                  if (mt = jn.payload, Fe = typeof mt == "function" ? mt.call(kt, Ke, Fe) : mt, Fe == null) break e;
                  Ke = k({}, Ke, Fe);
                  break e;
                case 2:
                  ir = !0;
              }
            }
            ne.callback !== null && ne.lane !== 0 && (n.flags |= 64, Fe = c.effects, Fe === null ? c.effects = [ne] : Fe.push(ne));
          } else kt = { eventTime: kt, lane: Fe, tag: ne.tag, payload: ne.payload, callback: ne.callback, next: null }, Ie === null ? (ke = Ie = kt, fe = Ke) : Ie = Ie.next = kt, B |= Fe;
          if (ne = ne.next, ne === null) {
            if (ne = c.shared.pending, ne === null) break;
            Fe = ne, ne = Fe.next, Fe.next = null, c.lastBaseUpdate = Fe, c.shared.pending = null;
          }
        } while (!0);
        if (Ie === null && (fe = Ke), c.baseState = fe, c.firstBaseUpdate = ke, c.lastBaseUpdate = Ie, r = c.shared.interleaved, r !== null) {
          c = r;
          do
            B |= c.lane, c = c.next;
          while (c !== r);
        } else y === null && (c.shared.lanes = 0);
        ai |= B, n.lanes = B, n.memoizedState = Ke;
      }
    }
    function cc(n, r, o) {
      if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
        var a = n[r], c = a.callback;
        if (c !== null) {
          if (a.callback = null, a = o, typeof c != "function") throw Error(f(191, c));
          c.call(a);
        }
      }
    }
    var ki = {}, mr = gn(ki), Io = gn(ki), Ei = gn(ki);
    function yr(n) {
      if (n === ki) throw Error(f(174));
      return n;
    }
    function Cl(n, r) {
      nt(Ei, r), nt(Io, n), nt(mr, ki), n = N(r), Pt(mr), nt(mr, n);
    }
    function Ji() {
      Pt(mr), Pt(Io), Pt(Ei);
    }
    function ya(n) {
      var r = yr(Ei.current), o = yr(mr.current);
      r = D(o, n.type, r), o !== r && (nt(Io, n), nt(mr, r));
    }
    function va(n) {
      Io.current === n && (Pt(mr), Pt(Io));
    }
    var It = gn(0);
    function kl(n) {
      for (var r = n; r !== null; ) {
        if (r.tag === 13) {
          var o = r.memoizedState;
          if (o !== null && (o = o.dehydrated, o === null || xe(o) || Re(o))) return r;
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
    var _a = [];
    function Sa() {
      for (var n = 0; n < _a.length; n++) {
        var r = _a[n];
        Ee ? r._workInProgressVersionPrimary = null : r._workInProgressVersionSecondary = null;
      }
      _a.length = 0;
    }
    var bn = g.ReactCurrentDispatcher, Zi = g.ReactCurrentBatchConfig, Pi = 0, Mt = null, qt = null, Zt = null, Do = !1, Ls = !1, As = 0, zo = 0;
    function dn() {
      throw Error(f(321));
    }
    function $i(n, r) {
      if (r === null) return !1;
      for (var o = 0; o < r.length && o < n.length; o++) if (!Pr(n[o], r[o])) return !1;
      return !0;
    }
    function Os(n, r, o, a, c, y) {
      if (Pi = y, Mt = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, bn.current = n === null || n.memoizedState === null ? Ma : Fa, n = o(a, c), Ls) {
        y = 0;
        do {
          if (Ls = !1, As = 0, 25 <= y) throw Error(f(301));
          y += 1, Zt = qt = null, r.updateQueue = null, bn.current = La, n = o(a, c);
        } while (Ls);
      }
      if (bn.current = io, r = qt !== null && qt.next !== null, Pi = 0, Zt = qt = Mt = null, Do = !1, r) throw Error(f(300));
      return n;
    }
    function El() {
      var n = As !== 0;
      return As = 0, n;
    }
    function or() {
      var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
      return Zt === null ? Mt.memoizedState = Zt = n : Zt = Zt.next = n, Zt;
    }
    function vn() {
      if (qt === null) {
        var n = Mt.alternate;
        n = n !== null ? n.memoizedState : null;
      } else n = qt.next;
      var r = Zt === null ? Mt.memoizedState : Zt.next;
      if (r !== null) Zt = r, qt = n;
      else {
        if (n === null) throw Error(f(310));
        qt = n, n = { memoizedState: qt.memoizedState, baseState: qt.baseState, baseQueue: qt.baseQueue, queue: qt.queue, next: null }, Zt === null ? Mt.memoizedState = Zt = n : Zt = Zt.next = n;
      }
      return Zt;
    }
    function eo(n, r) {
      return typeof r == "function" ? r(n) : r;
    }
    function Pl(n) {
      var r = vn(), o = r.queue;
      if (o === null) throw Error(f(311));
      o.lastRenderedReducer = n;
      var a = qt, c = a.baseQueue, y = o.pending;
      if (y !== null) {
        if (c !== null) {
          var B = c.next;
          c.next = y.next, y.next = B;
        }
        a.baseQueue = c = y, o.pending = null;
      }
      if (c !== null) {
        y = c.next, a = a.baseState;
        var ne = B = null, fe = null, ke = y;
        do {
          var Ie = ke.lane;
          if ((Pi & Ie) === Ie) fe !== null && (fe = fe.next = { lane: 0, action: ke.action, hasEagerState: ke.hasEagerState, eagerState: ke.eagerState, next: null }), a = ke.hasEagerState ? ke.eagerState : n(a, ke.action);
          else {
            var Ke = {
              lane: Ie,
              action: ke.action,
              hasEagerState: ke.hasEagerState,
              eagerState: ke.eagerState,
              next: null
            };
            fe === null ? (ne = fe = Ke, B = a) : fe = fe.next = Ke, Mt.lanes |= Ie, ai |= Ie;
          }
          ke = ke.next;
        } while (ke !== null && ke !== y);
        fe === null ? B = a : fe.next = ne, Pr(a, r.memoizedState) || ($t = !0), r.memoizedState = a, r.baseState = B, r.baseQueue = fe, o.lastRenderedState = a;
      }
      if (n = o.interleaved, n !== null) {
        c = n;
        do
          y = c.lane, Mt.lanes |= y, ai |= y, c = c.next;
        while (c !== n);
      } else c === null && (o.lanes = 0);
      return [r.memoizedState, o.dispatch];
    }
    function Go(n) {
      var r = vn(), o = r.queue;
      if (o === null) throw Error(f(311));
      o.lastRenderedReducer = n;
      var a = o.dispatch, c = o.pending, y = r.memoizedState;
      if (c !== null) {
        o.pending = null;
        var B = c = c.next;
        do
          y = n(y, B.action), B = B.next;
        while (B !== c);
        Pr(y, r.memoizedState) || ($t = !0), r.memoizedState = y, r.baseQueue === null && (r.baseState = y), o.lastRenderedState = y;
      }
      return [y, a];
    }
    function wa() {
    }
    function xa(n, r) {
      var o = Mt, a = vn(), c = r(), y = !Pr(a.memoizedState, c);
      if (y && (a.memoizedState = c, $t = !0), a = a.queue, Nl(Ea.bind(null, o, a, n), [n]), a.getSnapshot !== r || y || Zt !== null && Zt.memoizedState.tag & 1) {
        if (o.flags |= 2048, to(9, ka.bind(null, o, a, c, r), void 0, null), _t === null) throw Error(f(349));
        (Pi & 30) !== 0 || Ca(o, r, c);
      }
      return c;
    }
    function Ca(n, r, o) {
      n.flags |= 16384, n = { getSnapshot: r, value: o }, r = Mt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Mt.updateQueue = r, r.stores = [n]) : (o = r.stores, o === null ? r.stores = [n] : o.push(n));
    }
    function ka(n, r, o, a) {
      r.value = o, r.getSnapshot = a, Pa(r) && ii(n);
    }
    function Ea(n, r, o) {
      return o(function() {
        Pa(r) && ii(n);
      });
    }
    function Pa(n) {
      var r = n.getSnapshot;
      n = n.value;
      try {
        var o = r();
        return !Pr(n, o);
      } catch {
        return !0;
      }
    }
    function ii(n) {
      var r = Mr(n, 1);
      r !== null && Pn(r, n, 1, -1);
    }
    function Rl(n) {
      var r = or();
      return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: eo, lastRenderedState: n }, r.queue = n, n = n.dispatch = md.bind(null, Mt, n), [r.memoizedState, n];
    }
    function to(n, r, o, a) {
      return n = { tag: n, create: r, destroy: o, deps: a, next: null }, r = Mt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Mt.updateQueue = r, r.lastEffect = n.next = n) : (o = r.lastEffect, o === null ? r.lastEffect = n.next = n : (a = o.next, o.next = n, n.next = a, r.lastEffect = n)), n;
    }
    function dc() {
      return vn().memoizedState;
    }
    function Tl(n, r, o, a) {
      var c = or();
      Mt.flags |= n, c.memoizedState = to(1 | r, o, void 0, a === void 0 ? null : a);
    }
    function Ri(n, r, o, a) {
      var c = vn();
      a = a === void 0 ? null : a;
      var y = void 0;
      if (qt !== null) {
        var B = qt.memoizedState;
        if (y = B.destroy, a !== null && $i(a, B.deps)) {
          c.memoizedState = to(r, o, y, a);
          return;
        }
      }
      Mt.flags |= n, c.memoizedState = to(1 | r, o, y, a);
    }
    function fc(n, r) {
      return Tl(8390656, 8, n, r);
    }
    function Nl(n, r) {
      return Ri(2048, 8, n, r);
    }
    function Ra(n, r) {
      return Ri(4, 2, n, r);
    }
    function wt(n, r) {
      return Ri(4, 4, n, r);
    }
    function Ml(n, r) {
      if (typeof r == "function") return n = n(), r(n), function() {
        r(null);
      };
      if (r != null) return n = n(), r.current = n, function() {
        r.current = null;
      };
    }
    function Is(n, r, o) {
      return o = o != null ? o.concat([n]) : null, Ri(4, 4, Ml.bind(null, r, n), o);
    }
    function no() {
    }
    function Ta(n, r) {
      var o = vn();
      r = r === void 0 ? null : r;
      var a = o.memoizedState;
      return a !== null && r !== null && $i(r, a[1]) ? a[0] : (o.memoizedState = [n, r], n);
    }
    function Fl(n, r) {
      var o = vn();
      r = r === void 0 ? null : r;
      var a = o.memoizedState;
      return a !== null && r !== null && $i(r, a[1]) ? a[0] : (n = n(), o.memoizedState = [n, r], n);
    }
    function Uo(n, r, o) {
      return (Pi & 21) === 0 ? (n.baseState && (n.baseState = !1, $t = !0), n.memoizedState = o) : (Pr(o, r) || (o = cl(), Mt.lanes |= o, ai |= o, n.baseState = !0), r);
    }
    function Ll(n, r) {
      var o = rt;
      rt = o !== 0 && 4 > o ? o : 4, n(!0);
      var a = Zi.transition;
      Zi.transition = {};
      try {
        n(!1), r();
      } finally {
        rt = o, Zi.transition = a;
      }
    }
    function ro() {
      return vn().memoizedState;
    }
    function hc(n, r, o) {
      var a = tn(n);
      if (o = { lane: a, action: o, hasEagerState: !1, eagerState: null, next: null }, pc(n)) Na(r, o);
      else if (o = ga(n, r, o, a), o !== null) {
        var c = Tt();
        Pn(o, n, a, c), Ds(o, r, a);
      }
    }
    function md(n, r, o) {
      var a = tn(n), c = { lane: a, action: o, hasEagerState: !1, eagerState: null, next: null };
      if (pc(n)) Na(r, c);
      else {
        var y = n.alternate;
        if (n.lanes === 0 && (y === null || y.lanes === 0) && (y = r.lastRenderedReducer, y !== null)) try {
          var B = r.lastRenderedState, ne = y(B, o);
          if (c.hasEagerState = !0, c.eagerState = ne, Pr(ne, B)) {
            var fe = r.interleaved;
            fe === null ? (c.next = c, xl(r)) : (c.next = fe.next, fe.next = c), r.interleaved = c;
            return;
          }
        } catch {
        } finally {
        }
        o = ga(n, r, c, a), o !== null && (c = Tt(), Pn(o, n, a, c), Ds(o, r, a));
      }
    }
    function pc(n) {
      var r = n.alternate;
      return n === Mt || r !== null && r === Mt;
    }
    function Na(n, r) {
      Ls = Do = !0;
      var o = n.pending;
      o === null ? r.next = r : (r.next = o.next, o.next = r), n.pending = r;
    }
    function Ds(n, r, o) {
      if ((o & 4194240) !== 0) {
        var a = r.lanes;
        a &= n.pendingLanes, o |= a, r.lanes = o, zr(n, o);
      }
    }
    var io = { readContext: rr, useCallback: dn, useContext: dn, useEffect: dn, useImperativeHandle: dn, useInsertionEffect: dn, useLayoutEffect: dn, useMemo: dn, useReducer: dn, useRef: dn, useState: dn, useDebugValue: dn, useDeferredValue: dn, useTransition: dn, useMutableSource: dn, useSyncExternalStore: dn, useId: dn, unstable_isNewReconciler: !1 }, Ma = { readContext: rr, useCallback: function(n, r) {
      return or().memoizedState = [n, r === void 0 ? null : r], n;
    }, useContext: rr, useEffect: fc, useImperativeHandle: function(n, r, o) {
      return o = o != null ? o.concat([n]) : null, Tl(
        4194308,
        4,
        Ml.bind(null, r, n),
        o
      );
    }, useLayoutEffect: function(n, r) {
      return Tl(4194308, 4, n, r);
    }, useInsertionEffect: function(n, r) {
      return Tl(4, 2, n, r);
    }, useMemo: function(n, r) {
      var o = or();
      return r = r === void 0 ? null : r, n = n(), o.memoizedState = [n, r], n;
    }, useReducer: function(n, r, o) {
      var a = or();
      return r = o !== void 0 ? o(r) : r, a.memoizedState = a.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, a.queue = n, n = n.dispatch = hc.bind(null, Mt, n), [a.memoizedState, n];
    }, useRef: function(n) {
      var r = or();
      return n = { current: n }, r.memoizedState = n;
    }, useState: Rl, useDebugValue: no, useDeferredValue: function(n) {
      return or().memoizedState = n;
    }, useTransition: function() {
      var n = Rl(!1), r = n[0];
      return n = Ll.bind(null, n[1]), or().memoizedState = n, [r, n];
    }, useMutableSource: function() {
    }, useSyncExternalStore: function(n, r, o) {
      var a = Mt, c = or();
      if (Rt) {
        if (o === void 0) throw Error(f(407));
        o = o();
      } else {
        if (o = r(), _t === null) throw Error(f(349));
        (Pi & 30) !== 0 || Ca(a, r, o);
      }
      c.memoizedState = o;
      var y = { value: o, getSnapshot: r };
      return c.queue = y, fc(Ea.bind(
        null,
        a,
        y,
        n
      ), [n]), a.flags |= 2048, to(9, ka.bind(null, a, y, o, r), void 0, null), o;
    }, useId: function() {
      var n = or(), r = _t.identifierPrefix;
      if (Rt) {
        var o = Rr, a = Qn;
        o = (a & ~(1 << 32 - tr(a) - 1)).toString(32) + o, r = ":" + r + "R" + o, o = As++, 0 < o && (r += "H" + o.toString(32)), r += ":";
      } else o = zo++, r = ":" + r + "r" + o.toString(32) + ":";
      return n.memoizedState = r;
    }, unstable_isNewReconciler: !1 }, Fa = {
      readContext: rr,
      useCallback: Ta,
      useContext: rr,
      useEffect: Nl,
      useImperativeHandle: Is,
      useInsertionEffect: Ra,
      useLayoutEffect: wt,
      useMemo: Fl,
      useReducer: Pl,
      useRef: dc,
      useState: function() {
        return Pl(eo);
      },
      useDebugValue: no,
      useDeferredValue: function(n) {
        var r = vn();
        return Uo(r, qt.memoizedState, n);
      },
      useTransition: function() {
        var n = Pl(eo)[0], r = vn().memoizedState;
        return [n, r];
      },
      useMutableSource: wa,
      useSyncExternalStore: xa,
      useId: ro,
      unstable_isNewReconciler: !1
    }, La = { readContext: rr, useCallback: Ta, useContext: rr, useEffect: Nl, useImperativeHandle: Is, useInsertionEffect: Ra, useLayoutEffect: wt, useMemo: Fl, useReducer: Go, useRef: dc, useState: function() {
      return Go(eo);
    }, useDebugValue: no, useDeferredValue: function(n) {
      var r = vn();
      return qt === null ? r.memoizedState = n : Uo(r, qt.memoizedState, n);
    }, useTransition: function() {
      var n = Go(eo)[0], r = vn().memoizedState;
      return [n, r];
    }, useMutableSource: wa, useSyncExternalStore: xa, useId: ro, unstable_isNewReconciler: !1 };
    function sr(n, r) {
      if (n && n.defaultProps) {
        r = k({}, r), n = n.defaultProps;
        for (var o in n) r[o] === void 0 && (r[o] = n[o]);
        return r;
      }
      return r;
    }
    function Aa(n, r, o, a) {
      r = n.memoizedState, o = o(a, r), o = o == null ? r : k({}, r, o), n.memoizedState = o, n.lanes === 0 && (n.updateQueue.baseState = o);
    }
    var zs = { isMounted: function(n) {
      return (n = n._reactInternals) ? G(n) === n : !1;
    }, enqueueSetState: function(n, r, o) {
      n = n._reactInternals;
      var a = Tt(), c = tn(n), y = ni(a, c);
      y.payload = r, o != null && (y.callback = o), r = ri(n, y, c), r !== null && (Pn(r, n, c, a), Fs(r, n, c));
    }, enqueueReplaceState: function(n, r, o) {
      n = n._reactInternals;
      var a = Tt(), c = tn(n), y = ni(a, c);
      y.tag = 1, y.payload = r, o != null && (y.callback = o), r = ri(n, y, c), r !== null && (Pn(r, n, c, a), Fs(r, n, c));
    }, enqueueForceUpdate: function(n, r) {
      n = n._reactInternals;
      var o = Tt(), a = tn(n), c = ni(o, a);
      c.tag = 2, r != null && (c.callback = r), r = ri(n, c, a), r !== null && (Pn(r, n, a, o), Fs(r, n, a));
    } };
    function gc(n, r, o, a, c, y, B) {
      return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(a, y, B) : r.prototype && r.prototype.isPureReactComponent ? !vl(o, a) || !vl(c, y) : !0;
    }
    function mc(n, r, o) {
      var a = !1, c = vi, y = r.contextType;
      return typeof y == "object" && y !== null ? y = rr(y) : (c = un(r) ? Dr : xn.current, a = r.contextTypes, y = (a = a != null) ? $r(n, c) : vi), r = new r(o, y), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = zs, n.stateNode = r, r._reactInternals = n, a && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = y), r;
    }
    function Al(n, r, o, a) {
      n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(o, a), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(o, a), r.state !== n && zs.enqueueReplaceState(r, r.state, null);
    }
    function Ur(n, r, o, a) {
      var c = n.stateNode;
      c.props = o, c.state = n.memoizedState, c.refs = {}, ma(n);
      var y = r.contextType;
      typeof y == "object" && y !== null ? c.context = rr(y) : (y = un(r) ? Dr : xn.current, c.context = $r(n, y)), c.state = n.memoizedState, y = r.getDerivedStateFromProps, typeof y == "function" && (Aa(n, r, y, o), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && zs.enqueueReplaceState(c, c.state, null), Ci(n, o, c, a), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
    }
    function oo(n, r) {
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
    function Ti(n, r, o) {
      return { value: n, source: null, stack: o ?? null, digest: r ?? null };
    }
    function vr(n, r) {
      try {
        console.error(r.value);
      } catch (o) {
        setTimeout(function() {
          throw o;
        });
      }
    }
    var Gs = typeof WeakMap == "function" ? WeakMap : Map;
    function Br(n, r, o) {
      o = ni(-1, o), o.tag = 3, o.payload = { element: null };
      var a = r.value;
      return o.callback = function() {
        Ut || (Ut = !0, Kt = a), vr(n, r);
      }, o;
    }
    function Ol(n, r, o) {
      o = ni(-1, o), o.tag = 3;
      var a = n.type.getDerivedStateFromError;
      if (typeof a == "function") {
        var c = r.value;
        o.payload = function() {
          return a(c);
        }, o.callback = function() {
          vr(n, r);
        };
      }
      var y = n.stateNode;
      return y !== null && typeof y.componentDidCatch == "function" && (o.callback = function() {
        vr(n, r), typeof a != "function" && (Lr === null ? Lr = /* @__PURE__ */ new Set([this]) : Lr.add(this));
        var B = r.stack;
        this.componentDidCatch(r.value, { componentStack: B !== null ? B : "" });
      }), o;
    }
    function yc(n, r, o) {
      var a = n.pingCache;
      if (a === null) {
        a = n.pingCache = new Gs();
        var c = /* @__PURE__ */ new Set();
        a.set(r, c);
      } else c = a.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), a.set(r, c));
      c.has(o) || (c.add(o), n = Ec.bind(null, n, r, o), r.then(n, n));
    }
    function vc(n) {
      do {
        var r;
        if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return n;
        n = n.return;
      } while (n !== null);
      return null;
    }
    function Ni(n, r, o, a, c) {
      return (n.mode & 1) === 0 ? (n === r ? n.flags |= 65536 : (n.flags |= 128, o.flags |= 131072, o.flags &= -52805, o.tag === 1 && (o.alternate === null ? o.tag = 17 : (r = ni(-1, 1), r.tag = 2, ri(o, r, 1))), o.lanes |= 1), n) : (n.flags |= 65536, n.lanes = c, n);
    }
    var Us = g.ReactCurrentOwner, $t = !1;
    function fn(n, r, o, a) {
      r.child = n === null ? lc(r, null, o, a) : Qi(r, n.child, o, a);
    }
    function Il(n, r, o, a, c) {
      o = o.render;
      var y = r.ref;
      return Ao(r, c), a = Os(n, r, o, a, y, c), o = El(), n !== null && !$t ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, si(n, r, c)) : (Rt && o && Rs(r), r.flags |= 1, fn(n, r, a, c), r.child);
    }
    function so(n, r, o, a, c) {
      if (n === null) {
        var y = o.type;
        return typeof y == "function" && !es(y) && y.defaultProps === void 0 && o.compare === null && o.defaultProps === void 0 ? (r.tag = 15, r.type = y, oi(n, r, y, a, c)) : (n = Jl(o.type, null, a, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
      }
      if (y = n.child, (n.lanes & c) === 0) {
        var B = y.memoizedProps;
        if (o = o.compare, o = o !== null ? o : vl, o(B, a) && n.ref === r.ref) return si(n, r, c);
      }
      return r.flags |= 1, n = Ui(y, a), n.ref = r.ref, n.return = r, r.child = n;
    }
    function oi(n, r, o, a, c) {
      if (n !== null) {
        var y = n.memoizedProps;
        if (vl(y, a) && n.ref === r.ref) if ($t = !1, r.pendingProps = a = y, (n.lanes & c) !== 0) (n.flags & 131072) !== 0 && ($t = !0);
        else return r.lanes = n.lanes, si(n, r, c);
      }
      return Vr(n, r, o, a, c);
    }
    function xt(n, r, o) {
      var a = r.pendingProps, c = a.children, y = n !== null ? n.memoizedState : null;
      if (a.mode === "hidden") if ((r.mode & 1) === 0) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, nt(Ii, en), en |= o;
      else {
        if ((o & 1073741824) === 0) return n = y !== null ? y.baseLanes | o : o, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, nt(Ii, en), en |= n, null;
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, a = y !== null ? y.baseLanes : o, nt(Ii, en), en |= a;
      }
      else y !== null ? (a = y.baseLanes | o, r.memoizedState = null) : a = o, nt(Ii, en), en |= a;
      return fn(n, r, c, o), r.child;
    }
    function vt(n, r) {
      var o = r.ref;
      (n === null && o !== null || n !== null && n.ref !== o) && (r.flags |= 512, r.flags |= 2097152);
    }
    function Vr(n, r, o, a, c) {
      var y = un(o) ? Dr : xn.current;
      return y = $r(r, y), Ao(r, c), o = Os(n, r, o, a, y, c), a = El(), n !== null && !$t ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, si(n, r, c)) : (Rt && a && Rs(r), r.flags |= 1, fn(n, r, o, c), r.child);
    }
    function _n(n, r, o, a, c) {
      if (un(o)) {
        var y = !0;
        ko(r);
      } else y = !1;
      if (Ao(r, c), r.stateNode === null) Bs(n, r), mc(r, o, a), Ur(r, o, a, c), a = !0;
      else if (n === null) {
        var B = r.stateNode, ne = r.memoizedProps;
        B.props = ne;
        var fe = B.context, ke = o.contextType;
        typeof ke == "object" && ke !== null ? ke = rr(ke) : (ke = un(o) ? Dr : xn.current, ke = $r(r, ke));
        var Ie = o.getDerivedStateFromProps, Ke = typeof Ie == "function" || typeof B.getSnapshotBeforeUpdate == "function";
        Ke || typeof B.UNSAFE_componentWillReceiveProps != "function" && typeof B.componentWillReceiveProps != "function" || (ne !== a || fe !== ke) && Al(r, B, a, ke), ir = !1;
        var Fe = r.memoizedState;
        B.state = Fe, Ci(r, a, B, c), fe = r.memoizedState, ne !== a || Fe !== fe || Yn.current || ir ? (typeof Ie == "function" && (Aa(r, o, Ie, a), fe = r.memoizedState), (ne = ir || gc(r, o, ne, a, Fe, fe, ke)) ? (Ke || typeof B.UNSAFE_componentWillMount != "function" && typeof B.componentWillMount != "function" || (typeof B.componentWillMount == "function" && B.componentWillMount(), typeof B.UNSAFE_componentWillMount == "function" && B.UNSAFE_componentWillMount()), typeof B.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof B.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = a, r.memoizedState = fe), B.props = a, B.state = fe, B.context = ke, a = ne) : (typeof B.componentDidMount == "function" && (r.flags |= 4194308), a = !1);
      } else {
        B = r.stateNode, uc(n, r), ne = r.memoizedProps, ke = r.type === r.elementType ? ne : sr(r.type, ne), B.props = ke, Ke = r.pendingProps, Fe = B.context, fe = o.contextType, typeof fe == "object" && fe !== null ? fe = rr(fe) : (fe = un(o) ? Dr : xn.current, fe = $r(r, fe));
        var kt = o.getDerivedStateFromProps;
        (Ie = typeof kt == "function" || typeof B.getSnapshotBeforeUpdate == "function") || typeof B.UNSAFE_componentWillReceiveProps != "function" && typeof B.componentWillReceiveProps != "function" || (ne !== Ke || Fe !== fe) && Al(r, B, a, fe), ir = !1, Fe = r.memoizedState, B.state = Fe, Ci(r, a, B, c);
        var mt = r.memoizedState;
        ne !== Ke || Fe !== mt || Yn.current || ir ? (typeof kt == "function" && (Aa(r, o, kt, a), mt = r.memoizedState), (ke = ir || gc(r, o, ke, a, Fe, mt, fe) || !1) ? (Ie || typeof B.UNSAFE_componentWillUpdate != "function" && typeof B.componentWillUpdate != "function" || (typeof B.componentWillUpdate == "function" && B.componentWillUpdate(a, mt, fe), typeof B.UNSAFE_componentWillUpdate == "function" && B.UNSAFE_componentWillUpdate(a, mt, fe)), typeof B.componentDidUpdate == "function" && (r.flags |= 4), typeof B.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof B.componentDidUpdate != "function" || ne === n.memoizedProps && Fe === n.memoizedState || (r.flags |= 4), typeof B.getSnapshotBeforeUpdate != "function" || ne === n.memoizedProps && Fe === n.memoizedState || (r.flags |= 1024), r.memoizedProps = a, r.memoizedState = mt), B.props = a, B.state = mt, B.context = fe, a = ke) : (typeof B.componentDidUpdate != "function" || ne === n.memoizedProps && Fe === n.memoizedState || (r.flags |= 4), typeof B.getSnapshotBeforeUpdate != "function" || ne === n.memoizedProps && Fe === n.memoizedState || (r.flags |= 1024), a = !1);
      }
      return Cn(n, r, o, a, y, c);
    }
    function Cn(n, r, o, a, c, y) {
      vt(n, r);
      var B = (r.flags & 128) !== 0;
      if (!a && !B) return c && aa(r, o, !1), si(n, r, y);
      a = r.stateNode, Us.current = r;
      var ne = B && typeof o.getDerivedStateFromError != "function" ? null : a.render();
      return r.flags |= 1, n !== null && B ? (r.child = Qi(r, n.child, null, y), r.child = Qi(r, null, ne, y)) : fn(n, r, ne, y), r.memoizedState = a.state, c && aa(r, o, !0), r.child;
    }
    function Mi(n) {
      var r = n.stateNode;
      r.pendingContext ? Xu(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Xu(n, r.context, !1), Cl(n, r.containerInfo);
    }
    function lo(n, r, o, a, c) {
      return Yi(), fa(c), r.flags |= 256, fn(n, r, o, a), r.child;
    }
    var kn = { dehydrated: null, treeContext: null, retryLane: 0 };
    function Bo(n) {
      return { baseLanes: n, cachePool: null, transitions: null };
    }
    function Oa(n, r, o) {
      var a = r.pendingProps, c = It.current, y = !1, B = (r.flags & 128) !== 0, ne;
      if ((ne = B) || (ne = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), ne ? (y = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), nt(It, c & 1), n === null)
        return da(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? ((r.mode & 1) === 0 ? r.lanes = 1 : Re(n) ? r.lanes = 8 : r.lanes = 1073741824, null) : (B = a.children, n = a.fallback, y ? (a = r.mode, y = r.child, B = { mode: "hidden", children: B }, (a & 1) === 0 && y !== null ? (y.childLanes = 0, y.pendingProps = B) : y = ts(B, a, 0, null), n = Sn(n, a, o, null), y.return = r, n.return = r, y.sibling = n, r.child = y, r.child.memoizedState = Bo(o), r.memoizedState = kn, n) : Dl(r, B));
      if (c = n.memoizedState, c !== null && (ne = c.dehydrated, ne !== null)) return _c(n, r, B, a, ne, c, o);
      if (y) {
        y = a.fallback, B = r.mode, c = n.child, ne = c.sibling;
        var fe = { mode: "hidden", children: a.children };
        return (B & 1) === 0 && r.child !== c ? (a = r.child, a.childLanes = 0, a.pendingProps = fe, r.deletions = null) : (a = Ui(c, fe), a.subtreeFlags = c.subtreeFlags & 14680064), ne !== null ? y = Ui(ne, y) : (y = Sn(y, B, o, null), y.flags |= 2), y.return = r, a.return = r, a.sibling = y, r.child = a, a = y, y = r.child, B = n.child.memoizedState, B = B === null ? Bo(o) : { baseLanes: B.baseLanes | o, cachePool: null, transitions: B.transitions }, y.memoizedState = B, y.childLanes = n.childLanes & ~o, r.memoizedState = kn, a;
      }
      return y = n.child, n = y.sibling, a = Ui(y, { mode: "visible", children: a.children }), (r.mode & 1) === 0 && (a.lanes = o), a.return = r, a.sibling = null, n !== null && (o = r.deletions, o === null ? (r.deletions = [n], r.flags |= 16) : o.push(n)), r.child = a, r.memoizedState = null, a;
    }
    function Dl(n, r) {
      return r = ts({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
    }
    function ao(n, r, o, a) {
      return a !== null && fa(a), Qi(r, n.child, null, o), n = Dl(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
    }
    function _c(n, r, o, a, c, y, B) {
      if (o)
        return r.flags & 256 ? (r.flags &= -257, a = Ti(Error(f(422))), ao(n, r, B, a)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (y = a.fallback, c = r.mode, a = ts({ mode: "visible", children: a.children }, c, 0, null), y = Sn(y, c, B, null), y.flags |= 2, a.return = r, y.return = r, a.sibling = y, r.child = a, (r.mode & 1) !== 0 && Qi(r, n.child, null, B), r.child.memoizedState = Bo(B), r.memoizedState = kn, y);
      if ((r.mode & 1) === 0) return ao(n, r, B, null);
      if (Re(c)) return a = Te(c).digest, y = Error(f(419)), a = Ti(
        y,
        a,
        void 0
      ), ao(n, r, B, a);
      if (o = (B & n.childLanes) !== 0, $t || o) {
        if (a = _t, a !== null) {
          switch (B & -B) {
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
          c = (c & (a.suspendedLanes | B)) !== 0 ? 0 : c, c !== 0 && c !== y.retryLane && (y.retryLane = c, Mr(n, c), Pn(
            a,
            n,
            c,
            -1
          ));
        }
        return $o(), a = Ti(Error(f(421))), ao(n, r, B, a);
      }
      return xe(c) ? (r.flags |= 128, r.child = n.child, r = Rc.bind(null, n), Xe(c, r), null) : (n = y.treeContext, Ue && (Dn = yi(c), yn = r, Rt = !0, Nr = null, Ns = !1, n !== null && (In[nr++] = Qn, In[nr++] = Rr, In[nr++] = Jt, Qn = n.id, Rr = n.overflow, Jt = r)), r = Dl(r, a.children), r.flags |= 4096, r);
    }
    function jr(n, r, o) {
      n.lanes |= r;
      var a = n.alternate;
      a !== null && (a.lanes |= r), bi(n.return, r, o);
    }
    function Vo(n, r, o, a, c) {
      var y = n.memoizedState;
      y === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: a, tail: o, tailMode: c } : (y.isBackwards = r, y.rendering = null, y.renderingStartTime = 0, y.last = a, y.tail = o, y.tailMode = c);
    }
    function zl(n, r, o) {
      var a = r.pendingProps, c = a.revealOrder, y = a.tail;
      if (fn(n, r, a.children, o), a = It.current, (a & 2) !== 0) a = a & 1 | 2, r.flags |= 128;
      else {
        if (n !== null && (n.flags & 128) !== 0) e: for (n = r.child; n !== null; ) {
          if (n.tag === 13) n.memoizedState !== null && jr(n, o, r);
          else if (n.tag === 19) jr(n, o, r);
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
      if (nt(It, a), (r.mode & 1) === 0) r.memoizedState = null;
      else switch (c) {
        case "forwards":
          for (o = r.child, c = null; o !== null; ) n = o.alternate, n !== null && kl(n) === null && (c = o), o = o.sibling;
          o = c, o === null ? (c = r.child, r.child = null) : (c = o.sibling, o.sibling = null), Vo(r, !1, c, o, y);
          break;
        case "backwards":
          for (o = null, c = r.child, r.child = null; c !== null; ) {
            if (n = c.alternate, n !== null && kl(n) === null) {
              r.child = c;
              break;
            }
            n = c.sibling, c.sibling = o, o = c, c = n;
          }
          Vo(r, !0, o, null, y);
          break;
        case "together":
          Vo(r, !1, null, null, void 0);
          break;
        default:
          r.memoizedState = null;
      }
      return r.child;
    }
    function Bs(n, r) {
      (r.mode & 1) === 0 && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
    }
    function si(n, r, o) {
      if (n !== null && (r.dependencies = n.dependencies), ai |= r.lanes, (o & r.childLanes) === 0) return null;
      if (n !== null && r.child !== n.child) throw Error(f(153));
      if (r.child !== null) {
        for (n = r.child, o = Ui(n, n.pendingProps), r.child = o, o.return = r; n.sibling !== null; ) n = n.sibling, o = o.sibling = Ui(n, n.pendingProps), o.return = r;
        o.sibling = null;
      }
      return r.child;
    }
    function Fi(n, r, o) {
      switch (r.tag) {
        case 3:
          Mi(r), Yi();
          break;
        case 5:
          ya(r);
          break;
        case 1:
          un(r.type) && ko(r);
          break;
        case 4:
          Cl(r, r.stateNode.containerInfo);
          break;
        case 10:
          ac(r, r.type._context, r.memoizedProps.value);
          break;
        case 13:
          var a = r.memoizedState;
          if (a !== null)
            return a.dehydrated !== null ? (nt(It, It.current & 1), r.flags |= 128, null) : (o & r.child.childLanes) !== 0 ? Oa(n, r, o) : (nt(It, It.current & 1), n = si(n, r, o), n !== null ? n.sibling : null);
          nt(It, It.current & 1);
          break;
        case 19:
          if (a = (o & r.childLanes) !== 0, (n.flags & 128) !== 0) {
            if (a) return zl(
              n,
              r,
              o
            );
            r.flags |= 128;
          }
          var c = r.memoizedState;
          if (c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), nt(It, It.current), a) break;
          return null;
        case 22:
        case 23:
          return r.lanes = 0, xt(n, r, o);
      }
      return si(n, r, o);
    }
    function zn(n) {
      n.flags |= 4;
    }
    function uo(n, r) {
      if (n !== null && n.child === r.child) return !0;
      if ((r.flags & 16) !== 0) return !1;
      for (n = r.child; n !== null; ) {
        if ((n.flags & 12854) !== 0 || (n.subtreeFlags & 12854) !== 0) return !1;
        n = n.sibling;
      }
      return !0;
    }
    var Li, Ai, Gn, Un;
    if (Me) Li = function(n, r) {
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
    }, Ai = function() {
    }, Gn = function(n, r, o, a, c) {
      if (n = n.memoizedProps, n !== a) {
        var y = r.stateNode, B = yr(mr.current);
        o = ae(y, o, n, a, c, B), (r.updateQueue = o) && zn(r);
      }
    }, Un = function(n, r, o, a) {
      o !== a && zn(r);
    };
    else if (je) {
      Li = function(n, r, o, a) {
        for (var c = r.child; c !== null; ) {
          if (c.tag === 5) {
            var y = c.stateNode;
            o && a && (y = ji(y, c.type, c.memoizedProps, c)), K(n, y);
          } else if (c.tag === 6) y = c.stateNode, o && a && (y = ws(y, c.memoizedProps, c)), K(n, y);
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
      var Oi = function(n, r, o, a) {
        for (var c = r.child; c !== null; ) {
          if (c.tag === 5) {
            var y = c.stateNode;
            o && a && (y = ji(y, c.type, c.memoizedProps, c)), _s(n, y);
          } else if (c.tag === 6) y = c.stateNode, o && a && (y = ws(y, c.memoizedProps, c)), _s(n, y);
          else if (c.tag !== 4) {
            if (c.tag === 22 && c.memoizedState !== null) y = c.child, y !== null && (y.return = c), Oi(n, c, !0, !0);
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
      Ai = function(n, r) {
        var o = r.stateNode;
        if (!uo(n, r)) {
          n = o.containerInfo;
          var a = vs(n);
          Oi(a, r, !1, !1), o.pendingChildren = a, zn(r), Ss(n, a);
        }
      }, Gn = function(n, r, o, a, c) {
        var y = n.stateNode, B = n.memoizedProps;
        if ((n = uo(n, r)) && B === a) r.stateNode = y;
        else {
          var ne = r.stateNode, fe = yr(mr.current), ke = null;
          B !== a && (ke = ae(ne, o, B, a, c, fe)), n && ke === null ? r.stateNode = y : (y = ys(y, ke, o, B, a, r, n, ne), b(y, o, a, c, fe) && zn(r), r.stateNode = y, n ? zn(r) : Li(y, r, !1, !1));
        }
      }, Un = function(n, r, o, a) {
        o !== a ? (n = yr(Ei.current), o = yr(mr.current), r.stateNode = oe(a, n, o, r), zn(r)) : r.stateNode = n.stateNode;
      };
    } else Ai = function() {
    }, Gn = function() {
    }, Un = function() {
    };
    function lr(n, r) {
      if (!Rt) switch (n.tailMode) {
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
    function Ft(n) {
      var r = n.alternate !== null && n.alternate.child === n.child, o = 0, a = 0;
      if (r) for (var c = n.child; c !== null; ) o |= c.lanes | c.childLanes, a |= c.subtreeFlags & 14680064, a |= c.flags & 14680064, c.return = n, c = c.sibling;
      else for (c = n.child; c !== null; ) o |= c.lanes | c.childLanes, a |= c.subtreeFlags, a |= c.flags, c.return = n, c = c.sibling;
      return n.subtreeFlags |= a, n.childLanes = o, r;
    }
    function co(n, r, o) {
      var a = r.pendingProps;
      switch (Ts(r), r.tag) {
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
          return un(r.type) && qi(), Ft(r), null;
        case 3:
          return o = r.stateNode, Ji(), Pt(Yn), Pt(xn), Sa(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (yl(r) ? zn(r) : n === null || n.memoizedState.isDehydrated && (r.flags & 256) === 0 || (r.flags |= 1024, Nr !== null && (Ql(Nr), Nr = null))), Ai(n, r), Ft(r), null;
        case 5:
          va(r), o = yr(Ei.current);
          var c = r.type;
          if (n !== null && r.stateNode != null) Gn(n, r, c, a, o), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
          else {
            if (!a) {
              if (r.stateNode === null) throw Error(f(166));
              return Ft(r), null;
            }
            if (n = yr(mr.current), yl(r)) {
              if (!Ue) throw Error(f(175));
              n = Ot(r.stateNode, r.type, r.memoizedProps, o, n, r, !Ns), r.updateQueue = n, n !== null && zn(r);
            } else {
              var y = _(c, a, o, n, r);
              Li(y, r, !1, !1), r.stateNode = y, b(y, c, a, o, n) && zn(r);
            }
            r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
          }
          return Ft(r), null;
        case 6:
          if (n && r.stateNode != null) Un(n, r, n.memoizedProps, a);
          else {
            if (typeof a != "string" && r.stateNode === null) throw Error(f(166));
            if (n = yr(Ei.current), o = yr(mr.current), yl(r)) {
              if (!Ue) throw Error(f(176));
              if (n = r.stateNode, o = r.memoizedProps, (a = On(n, o, r, !Ns)) && (c = yn, c !== null)) switch (c.tag) {
                case 3:
                  cd(c.stateNode.containerInfo, n, o, (c.mode & 1) !== 0);
                  break;
                case 5:
                  Bt(c.type, c.memoizedProps, c.stateNode, n, o, (c.mode & 1) !== 0);
              }
              a && zn(r);
            } else r.stateNode = oe(a, n, o, r);
          }
          return Ft(r), null;
        case 13:
          if (Pt(It), a = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
            if (Rt && Dn !== null && (r.mode & 1) !== 0 && (r.flags & 128) === 0) ic(), Yi(), r.flags |= 98560, c = !1;
            else if (c = yl(r), a !== null && a.dehydrated !== null) {
              if (n === null) {
                if (!c) throw Error(f(318));
                if (!Ue) throw Error(f(344));
                if (c = r.memoizedState, c = c !== null ? c.dehydrated : null, !c) throw Error(f(317));
                Hi(c, r);
              } else Yi(), (r.flags & 128) === 0 && (r.memoizedState = null), r.flags |= 4;
              Ft(r), c = !1;
            } else Nr !== null && (Ql(Nr), Nr = null), c = !0;
            if (!c) return r.flags & 65536 ? r : null;
          }
          return (r.flags & 128) !== 0 ? (r.lanes = o, r) : (o = a !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, (r.mode & 1) !== 0 && (n === null || (It.current & 1) !== 0 ? At === 0 && (At = 3) : $o())), r.updateQueue !== null && (r.flags |= 4), Ft(r), null);
        case 4:
          return Ji(), Ai(n, r), n === null && we(r.stateNode.containerInfo), Ft(r), null;
        case 10:
          return Ms(r.type._context), Ft(r), null;
        case 17:
          return un(r.type) && qi(), Ft(r), null;
        case 19:
          if (Pt(It), c = r.memoizedState, c === null) return Ft(r), null;
          if (a = (r.flags & 128) !== 0, y = c.rendering, y === null) if (a) lr(c, !1);
          else {
            if (At !== 0 || n !== null && (n.flags & 128) !== 0) for (n = r.child; n !== null; ) {
              if (y = kl(n), y !== null) {
                for (r.flags |= 128, lr(c, !1), n = y.updateQueue, n !== null && (r.updateQueue = n, r.flags |= 4), r.subtreeFlags = 0, n = o, o = r.child; o !== null; ) a = o, c = n, a.flags &= 14680066, y = a.alternate, y === null ? (a.childLanes = 0, a.lanes = c, a.child = null, a.subtreeFlags = 0, a.memoizedProps = null, a.memoizedState = null, a.updateQueue = null, a.dependencies = null, a.stateNode = null) : (a.childLanes = y.childLanes, a.lanes = y.lanes, a.child = y.child, a.subtreeFlags = 0, a.deletions = null, a.memoizedProps = y.memoizedProps, a.memoizedState = y.memoizedState, a.updateQueue = y.updateQueue, a.type = y.type, c = y.dependencies, a.dependencies = c === null ? null : { lanes: c.lanes, firstContext: c.firstContext }), o = o.sibling;
                return nt(It, It.current & 1 | 2), r.child;
              }
              n = n.sibling;
            }
            c.tail !== null && cn() > Ys && (r.flags |= 128, a = !0, lr(c, !1), r.lanes = 4194304);
          }
          else {
            if (!a) if (n = kl(y), n !== null) {
              if (r.flags |= 128, a = !0, n = n.updateQueue, n !== null && (r.updateQueue = n, r.flags |= 4), lr(c, !0), c.tail === null && c.tailMode === "hidden" && !y.alternate && !Rt) return Ft(r), null;
            } else 2 * cn() - c.renderingStartTime > Ys && o !== 1073741824 && (r.flags |= 128, a = !0, lr(c, !1), r.lanes = 4194304);
            c.isBackwards ? (y.sibling = r.child, r.child = y) : (n = c.last, n !== null ? n.sibling = y : r.child = y, c.last = y);
          }
          return c.tail !== null ? (r = c.tail, c.rendering = r, c.tail = r.sibling, c.renderingStartTime = cn(), r.sibling = null, n = It.current, nt(It, a ? n & 1 | 2 : n & 1), r) : (Ft(r), null);
        case 22:
        case 23:
          return bl(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && (r.mode & 1) !== 0 ? (en & 1073741824) !== 0 && (Ft(r), Me && r.subtreeFlags & 6 && (r.flags |= 8192)) : Ft(r), null;
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
    function Sc(n, r) {
      switch (Ts(r), r.tag) {
        case 1:
          return un(r.type) && qi(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
        case 3:
          return Ji(), Pt(Yn), Pt(xn), Sa(), n = r.flags, (n & 65536) !== 0 && (n & 128) === 0 ? (r.flags = n & -65537 | 128, r) : null;
        case 5:
          return va(r), null;
        case 13:
          if (Pt(It), n = r.memoizedState, n !== null && n.dehydrated !== null) {
            if (r.alternate === null) throw Error(f(340));
            Yi();
          }
          return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
        case 19:
          return Pt(It), null;
        case 4:
          return Ji(), null;
        case 10:
          return Ms(r.type._context), null;
        case 22:
        case 23:
          return bl(), null;
        case 24:
          return null;
        default:
          return null;
      }
    }
    var jo = !1, hn = !1, ar = typeof WeakSet == "function" ? WeakSet : Set, Ne = null;
    function gt(n, r) {
      var o = n.ref;
      if (o !== null) if (typeof o == "function") try {
        o(null);
      } catch (a) {
        Nt(n, r, a);
      }
      else o.current = null;
    }
    function ur(n, r, o) {
      try {
        o();
      } catch (a) {
        Nt(n, r, a);
      }
    }
    var Ia = !1;
    function wc(n, r) {
      for (W(n.containerInfo), Ne = r; Ne !== null; ) if (n = Ne, r = n.child, (n.subtreeFlags & 1028) !== 0 && r !== null) r.return = n, Ne = r;
      else for (; Ne !== null; ) {
        n = Ne;
        try {
          var o = n.alternate;
          if ((n.flags & 1024) !== 0) switch (n.tag) {
            case 0:
            case 11:
            case 15:
              break;
            case 1:
              if (o !== null) {
                var a = o.memoizedProps, c = o.memoizedState, y = n.stateNode, B = y.getSnapshotBeforeUpdate(n.elementType === n.type ? a : sr(n.type, a), c);
                y.__reactInternalSnapshotBeforeUpdate = B;
              }
              break;
            case 3:
              Me && Jr(n.stateNode.containerInfo);
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
          Nt(n, n.return, ne);
        }
        if (r = n.sibling, r !== null) {
          r.return = n.return, Ne = r;
          break;
        }
        Ne = n.return;
      }
      return o = Ia, Ia = !1, o;
    }
    function fo(n, r, o) {
      var a = r.updateQueue;
      if (a = a !== null ? a.lastEffect : null, a !== null) {
        var c = a = a.next;
        do {
          if ((c.tag & n) === n) {
            var y = c.destroy;
            c.destroy = void 0, y !== void 0 && ur(r, o, y);
          }
          c = c.next;
        } while (c !== a);
      }
    }
    function Ho(n, r) {
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
    function Gl(n) {
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
    function Vs(n) {
      var r = n.alternate;
      r !== null && (n.alternate = null, Vs(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && Qe(r)), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
    }
    function Da(n) {
      return n.tag === 5 || n.tag === 3 || n.tag === 4;
    }
    function ho(n) {
      e: for (; ; ) {
        for (; n.sibling === null; ) {
          if (n.return === null || Da(n.return)) return null;
          n = n.return;
        }
        for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
          if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
          n.child.return = n, n = n.child;
        }
        if (!(n.flags & 2)) return n.stateNode;
      }
    }
    function js(n, r, o) {
      var a = n.tag;
      if (a === 5 || a === 6) n = n.stateNode, r ? Ir(o, n, r) : An(o, n);
      else if (a !== 4 && (n = n.child, n !== null)) for (js(n, r, o), n = n.sibling; n !== null; ) js(n, r, o), n = n.sibling;
    }
    function za(n, r, o) {
      var a = n.tag;
      if (a === 5 || a === 6) n = n.stateNode, r ? Or(o, n, r) : Wt(o, n);
      else if (a !== 4 && (n = n.child, n !== null)) for (za(n, r, o), n = n.sibling; n !== null; ) za(n, r, o), n = n.sibling;
    }
    var Vt = null, Jn = !1;
    function Fr(n, r, o) {
      for (o = o.child; o !== null; ) Ul(n, r, o), o = o.sibling;
    }
    function Ul(n, r, o) {
      if (Xn && typeof Xn.onCommitFiberUnmount == "function") try {
        Xn.onCommitFiberUnmount(Si, o);
      } catch {
      }
      switch (o.tag) {
        case 5:
          hn || gt(o, r);
        case 6:
          if (Me) {
            var a = Vt, c = Jn;
            Vt = null, Fr(n, r, o), Vt = a, Jn = c, Vt !== null && (Jn ? pi(Vt, o.stateNode) : Kn(Vt, o.stateNode));
          } else Fr(n, r, o);
          break;
        case 18:
          Me && Vt !== null && (Jn ? sl(Vt, o.stateNode) : ol(Vt, o.stateNode));
          break;
        case 4:
          Me ? (a = Vt, c = Jn, Vt = o.stateNode.containerInfo, Jn = !0, Fr(n, r, o), Vt = a, Jn = c) : (je && (a = o.stateNode.containerInfo, c = vs(a), Vi(a, c)), Fr(n, r, o));
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          if (!hn && (a = o.updateQueue, a !== null && (a = a.lastEffect, a !== null))) {
            c = a = a.next;
            do {
              var y = c, B = y.destroy;
              y = y.tag, B !== void 0 && ((y & 2) !== 0 || (y & 4) !== 0) && ur(o, r, B), c = c.next;
            } while (c !== a);
          }
          Fr(n, r, o);
          break;
        case 1:
          if (!hn && (gt(o, r), a = o.stateNode, typeof a.componentWillUnmount == "function")) try {
            a.props = o.memoizedProps, a.state = o.memoizedState, a.componentWillUnmount();
          } catch (ne) {
            Nt(o, r, ne);
          }
          Fr(n, r, o);
          break;
        case 21:
          Fr(n, r, o);
          break;
        case 22:
          o.mode & 1 ? (hn = (a = hn) || o.memoizedState !== null, Fr(n, r, o), hn = a) : Fr(n, r, o);
          break;
        default:
          Fr(
            n,
            r,
            o
          );
      }
    }
    function po(n) {
      var r = n.updateQueue;
      if (r !== null) {
        n.updateQueue = null;
        var o = n.stateNode;
        o === null && (o = n.stateNode = new ar()), r.forEach(function(a) {
          var c = yd.bind(null, n, a);
          o.has(a) || (o.add(a), a.then(c, c));
        });
      }
    }
    function _r(n, r) {
      var o = r.deletions;
      if (o !== null) for (var a = 0; a < o.length; a++) {
        var c = o[a];
        try {
          var y = n, B = r;
          if (Me) {
            var ne = B;
            e: for (; ne !== null; ) {
              switch (ne.tag) {
                case 5:
                  Vt = ne.stateNode, Jn = !1;
                  break e;
                case 3:
                  Vt = ne.stateNode.containerInfo, Jn = !0;
                  break e;
                case 4:
                  Vt = ne.stateNode.containerInfo, Jn = !0;
                  break e;
              }
              ne = ne.return;
            }
            if (Vt === null) throw Error(f(160));
            Ul(y, B, c), Vt = null, Jn = !1;
          } else Ul(y, B, c);
          var fe = c.alternate;
          fe !== null && (fe.return = null), c.return = null;
        } catch (ke) {
          Nt(c, r, ke);
        }
      }
      if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) Hs(r, n), r = r.sibling;
    }
    function Hs(n, r) {
      var o = n.alternate, a = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          if (_r(r, n), cr(n), a & 4) {
            try {
              fo(3, n, n.return), Ho(3, n);
            } catch (Fe) {
              Nt(n, n.return, Fe);
            }
            try {
              fo(5, n, n.return);
            } catch (Fe) {
              Nt(n, n.return, Fe);
            }
          }
          break;
        case 1:
          _r(r, n), cr(n), a & 512 && o !== null && gt(o, o.return);
          break;
        case 5:
          if (_r(r, n), cr(n), a & 512 && o !== null && gt(o, o.return), Me) {
            if (n.flags & 32) {
              var c = n.stateNode;
              try {
                an(c);
              } catch (Fe) {
                Nt(n, n.return, Fe);
              }
            }
            if (a & 4 && (c = n.stateNode, c != null)) {
              var y = n.memoizedProps;
              if (o = o !== null ? o.memoizedProps : y, a = n.type, r = n.updateQueue, n.updateQueue = null, r !== null) try {
                br(c, r, a, o, y, n);
              } catch (Fe) {
                Nt(n, n.return, Fe);
              }
            }
          }
          break;
        case 6:
          if (_r(r, n), cr(n), a & 4 && Me) {
            if (n.stateNode === null) throw Error(f(162));
            c = n.stateNode, y = n.memoizedProps, o = o !== null ? o.memoizedProps : y;
            try {
              Dt(c, o, y);
            } catch (Fe) {
              Nt(n, n.return, Fe);
            }
          }
          break;
        case 3:
          if (_r(r, n), cr(n), a & 4) {
            if (Me && Ue && o !== null && o.memoizedState.isDehydrated) try {
              rl(r.containerInfo);
            } catch (Fe) {
              Nt(n, n.return, Fe);
            }
            if (je) {
              c = r.containerInfo, y = r.pendingChildren;
              try {
                Vi(c, y);
              } catch (Fe) {
                Nt(n, n.return, Fe);
              }
            }
          }
          break;
        case 4:
          if (_r(
            r,
            n
          ), cr(n), a & 4 && je) {
            y = n.stateNode, c = y.containerInfo, y = y.pendingChildren;
            try {
              Vi(c, y);
            } catch (Fe) {
              Nt(n, n.return, Fe);
            }
          }
          break;
        case 13:
          _r(r, n), cr(n), c = n.child, c.flags & 8192 && (y = c.memoizedState !== null, c.stateNode.isHidden = y, !y || c.alternate !== null && c.alternate.memoizedState !== null || (Qo = cn())), a & 4 && po(n);
          break;
        case 22:
          var B = o !== null && o.memoizedState !== null;
          if (n.mode & 1 ? (hn = (o = hn) || B, _r(r, n), hn = o) : _r(r, n), cr(n), a & 8192) {
            if (o = n.memoizedState !== null, (n.stateNode.isHidden = o) && !B && (n.mode & 1) !== 0) for (Ne = n, a = n.child; a !== null; ) {
              for (r = Ne = a; Ne !== null; ) {
                B = Ne;
                var ne = B.child;
                switch (B.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    fo(4, B, B.return);
                    break;
                  case 1:
                    gt(B, B.return);
                    var fe = B.stateNode;
                    if (typeof fe.componentWillUnmount == "function") {
                      var ke = B, Ie = B.return;
                      try {
                        var Ke = ke;
                        fe.props = Ke.memoizedProps, fe.state = Ke.memoizedState, fe.componentWillUnmount();
                      } catch (Fe) {
                        Nt(ke, Ie, Fe);
                      }
                    }
                    break;
                  case 5:
                    gt(B, B.return);
                    break;
                  case 22:
                    if (B.memoizedState !== null) {
                      jl(r);
                      continue;
                    }
                }
                ne !== null ? (ne.return = B, Ne = ne) : jl(r);
              }
              a = a.sibling;
            }
            if (Me) {
              e: if (a = null, Me) for (r = n; ; ) {
                if (r.tag === 5) {
                  if (a === null) {
                    a = r;
                    try {
                      c = r.stateNode, o ? wo(c) : ms(r.stateNode, r.memoizedProps);
                    } catch (Fe) {
                      Nt(n, n.return, Fe);
                    }
                  }
                } else if (r.tag === 6) {
                  if (a === null) try {
                    y = r.stateNode, o ? gs(y) : gi(y, r.memoizedProps);
                  } catch (Fe) {
                    Nt(n, n.return, Fe);
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
          _r(r, n), cr(n), a & 4 && po(n);
          break;
        case 21:
          break;
        default:
          _r(r, n), cr(n);
      }
    }
    function cr(n) {
      var r = n.flags;
      if (r & 2) {
        try {
          if (Me) {
            e: {
              for (var o = n.return; o !== null; ) {
                if (Da(o)) {
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
                a.flags & 32 && (an(c), a.flags &= -33);
                var y = ho(n);
                za(n, y, c);
                break;
              case 3:
              case 4:
                var B = a.stateNode.containerInfo, ne = ho(n);
                js(n, ne, B);
                break;
              default:
                throw Error(f(161));
            }
          }
        } catch (fe) {
          Nt(n, n.return, fe);
        }
        n.flags &= -3;
      }
      r & 4096 && (n.flags &= -4097);
    }
    function Wo(n, r, o) {
      Ne = n, Bl(n);
    }
    function Bl(n, r, o) {
      for (var a = (n.mode & 1) !== 0; Ne !== null; ) {
        var c = Ne, y = c.child;
        if (c.tag === 22 && a) {
          var B = c.memoizedState !== null || jo;
          if (!B) {
            var ne = c.alternate, fe = ne !== null && ne.memoizedState !== null || hn;
            ne = jo;
            var ke = hn;
            if (jo = B, (hn = fe) && !ke) for (Ne = c; Ne !== null; ) B = Ne, fe = B.child, B.tag === 22 && B.memoizedState !== null ? Hl(c) : fe !== null ? (fe.return = B, Ne = fe) : Hl(c);
            for (; y !== null; ) Ne = y, Bl(y), y = y.sibling;
            Ne = c, jo = ne, hn = ke;
          }
          Vl(n);
        } else (c.subtreeFlags & 8772) !== 0 && y !== null ? (y.return = c, Ne = y) : Vl(n);
      }
    }
    function Vl(n) {
      for (; Ne !== null; ) {
        var r = Ne;
        if ((r.flags & 8772) !== 0) {
          var o = r.alternate;
          try {
            if ((r.flags & 8772) !== 0) switch (r.tag) {
              case 0:
              case 11:
              case 15:
                hn || Ho(5, r);
                break;
              case 1:
                var a = r.stateNode;
                if (r.flags & 4 && !hn) if (o === null) a.componentDidMount();
                else {
                  var c = r.elementType === r.type ? o.memoizedProps : sr(r.type, o.memoizedProps);
                  a.componentDidUpdate(c, o.memoizedState, a.__reactInternalSnapshotBeforeUpdate);
                }
                var y = r.updateQueue;
                y !== null && cc(r, y, a);
                break;
              case 3:
                var B = r.updateQueue;
                if (B !== null) {
                  if (o = null, r.child !== null) switch (r.child.tag) {
                    case 5:
                      o = me(r.child.stateNode);
                      break;
                    case 1:
                      o = r.child.stateNode;
                  }
                  cc(r, B, o);
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
                  var fe = r.alternate;
                  if (fe !== null) {
                    var ke = fe.memoizedState;
                    if (ke !== null) {
                      var Ie = ke.dehydrated;
                      Ie !== null && il(Ie);
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
            hn || r.flags & 512 && Gl(r);
          } catch (Ke) {
            Nt(r, r.return, Ke);
          }
        }
        if (r === n) {
          Ne = null;
          break;
        }
        if (o = r.sibling, o !== null) {
          o.return = r.return, Ne = o;
          break;
        }
        Ne = r.return;
      }
    }
    function jl(n) {
      for (; Ne !== null; ) {
        var r = Ne;
        if (r === n) {
          Ne = null;
          break;
        }
        var o = r.sibling;
        if (o !== null) {
          o.return = r.return, Ne = o;
          break;
        }
        Ne = r.return;
      }
    }
    function Hl(n) {
      for (; Ne !== null; ) {
        var r = Ne;
        try {
          switch (r.tag) {
            case 0:
            case 11:
            case 15:
              var o = r.return;
              try {
                Ho(4, r);
              } catch (fe) {
                Nt(r, o, fe);
              }
              break;
            case 1:
              var a = r.stateNode;
              if (typeof a.componentDidMount == "function") {
                var c = r.return;
                try {
                  a.componentDidMount();
                } catch (fe) {
                  Nt(r, c, fe);
                }
              }
              var y = r.return;
              try {
                Gl(r);
              } catch (fe) {
                Nt(r, y, fe);
              }
              break;
            case 5:
              var B = r.return;
              try {
                Gl(r);
              } catch (fe) {
                Nt(r, B, fe);
              }
          }
        } catch (fe) {
          Nt(r, r.return, fe);
        }
        if (r === n) {
          Ne = null;
          break;
        }
        var ne = r.sibling;
        if (ne !== null) {
          ne.return = r.return, Ne = ne;
          break;
        }
        Ne = r.return;
      }
    }
    var li = 0, Bn = 1, Hr = 2, qo = 3, Ws = 4;
    if (typeof Symbol == "function" && Symbol.for) {
      var dr = Symbol.for;
      li = dr("selector.component"), Bn = dr("selector.has_pseudo_class"), Hr = dr("selector.role"), qo = dr("selector.test_id"), Ws = dr("selector.text");
    }
    function Wr(n) {
      var r = ot(n);
      if (r != null) {
        if (typeof r.memoizedProps["data-testname"] != "string") throw Error(f(364));
        return r;
      }
      if (n = qn(n), n === null) throw Error(f(362));
      return n.stateNode.current;
    }
    function qs(n, r) {
      switch (r.$$typeof) {
        case li:
          if (n.type === r.value) return !0;
          break;
        case Bn:
          e: {
            r = r.value, n = [n, 0];
            for (var o = 0; o < n.length; ) {
              var a = n[o++], c = n[o++], y = r[c];
              if (a.tag !== 5 || !Ht(a)) {
                for (; y != null && qs(a, y); ) c++, y = r[c];
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
          if (n.tag === 5 && bt(n.stateNode, r.value)) return !0;
          break;
        case Ws:
          if ((n.tag === 5 || n.tag === 6) && (n = ln(n), n !== null && 0 <= n.indexOf(r.value))) return !0;
          break;
        case qo:
          if (n.tag === 5 && (n = n.memoizedProps["data-testname"], typeof n == "string" && n.toLowerCase() === r.value.toLowerCase())) return !0;
          break;
        default:
          throw Error(f(365));
      }
      return !1;
    }
    function Wl(n) {
      switch (n.$$typeof) {
        case li:
          return "<" + (J(n.value) || "Unknown") + ">";
        case Bn:
          return ":has(" + (Wl(n) || "") + ")";
        case Hr:
          return '[role="' + n.value + '"]';
        case Ws:
          return '"' + n.value + '"';
        case qo:
          return '[data-testname="' + n.value + '"]';
        default:
          throw Error(f(365));
      }
    }
    function qr(n, r) {
      var o = [];
      n = [n, 0];
      for (var a = 0; a < n.length; ) {
        var c = n[a++], y = n[a++], B = r[y];
        if (c.tag !== 5 || !Ht(c)) {
          for (; B != null && qs(c, B); ) y++, B = r[y];
          if (y === r.length) o.push(c);
          else for (c = c.child; c !== null; ) n.push(c, y), c = c.sibling;
        }
      }
      return o;
    }
    function Kr(n, r) {
      if (!dt) throw Error(f(363));
      n = Wr(n), n = qr(n, r), r = [], n = Array.from(n);
      for (var o = 0; o < n.length; ) {
        var a = n[o++];
        if (a.tag === 5) Ht(a) || r.push(a.stateNode);
        else for (a = a.child; a !== null; ) n.push(a), a = a.sibling;
      }
      return r;
    }
    var ql = Math.ceil, Ks = g.ReactCurrentDispatcher, Ko = g.ReactCurrentOwner, Gt = g.ReactCurrentBatchConfig, be = 0, _t = null, Lt = null, jt = 0, en = 0, Ii = gn(0), At = 0, Yo = null, ai = 0, Ct = 0, Xo = 0, go = null, En = null, Qo = 0, Ys = 1 / 0, Vn = null;
    function yt() {
      Ys = cn() + 500;
    }
    var Ut = !1, Kt = null, Lr = null, Di = !1, Sr = null, Kl = 0, Yt = 0, Xs = null, bo = -1, Jo = 0;
    function Tt() {
      return (be & 6) !== 0 ? cn() : bo !== -1 ? bo : bo = cn();
    }
    function tn(n) {
      return (n.mode & 1) === 0 ? 1 : (be & 2) !== 0 && jt !== 0 ? jt & -jt : pd.transition !== null ? (Jo === 0 && (Jo = cl()), Jo) : (n = rt, n !== 0 ? n : Je());
    }
    function Pn(n, r, o, a) {
      if (50 < Yt) throw Yt = 0, Xs = null, Error(f(185));
      gr(n, o, a), ((be & 2) === 0 || n !== _t) && (n === _t && ((be & 2) === 0 && (Ct |= o), At === 4 && ui(n, jt)), Rn(n, a), o === 1 && be === 0 && (r.mode & 1) === 0 && (yt(), Mo && mn()));
    }
    function Rn(n, r) {
      var o = n.callbackNode;
      Ju(n, r);
      var a = Po(n, n === _t ? jt : 0);
      if (a === 0) o !== null && Zu(o), n.callbackNode = null, n.callbackPriority = 0;
      else if (r = a & -a, n.callbackPriority !== r) {
        if (o != null && Zu(o), r === 1) n.tag === 0 ? ec(Ga.bind(null, n)) : gl(Ga.bind(null, n)), St ? sn(function() {
          (be & 6) === 0 && mn();
        }) : Gr(dl, mn), o = null;
        else {
          switch (To(a)) {
            case 1:
              o = dl;
              break;
            case 4:
              o = fl;
              break;
            case 16:
              o = hl;
              break;
            case 536870912:
              o = hd;
              break;
            default:
              o = hl;
          }
          o = qa(o, Yl.bind(null, n));
        }
        n.callbackPriority = r, n.callbackNode = o;
      }
    }
    function Yl(n, r) {
      if (bo = -1, Jo = 0, (be & 6) !== 0) throw Error(f(327));
      var o = n.callbackNode;
      if (ci() && n.callbackNode !== o) return null;
      var a = Po(n, n === _t ? jt : 0);
      if (a === 0) return null;
      if ((a & 30) !== 0 || (a & n.expiredLanes) !== 0 || r) r = mo(n, a);
      else {
        r = a;
        var c = be;
        be |= 2;
        var y = Ba();
        (_t !== n || jt !== r) && (Vn = null, yt(), zi(n, r));
        do
          try {
            Va();
            break;
          } catch (ne) {
            Zo(n, ne);
          }
        while (!0);
        pa(), Ks.current = y, be = c, Lt !== null ? r = 0 : (_t = null, jt = 0, r = At);
      }
      if (r !== 0) {
        if (r === 2 && (c = ul(n), c !== 0 && (a = c, r = Xl(n, c))), r === 1) throw o = Yo, zi(n, 0), ui(n, a), Rn(n, cn()), o;
        if (r === 6) ui(n, a);
        else {
          if (c = n.current.alternate, (a & 30) === 0 && !xc(c) && (r = mo(n, a), r === 2 && (y = ul(n), y !== 0 && (a = y, r = Xl(n, y))), r === 1)) throw o = Yo, zi(n, 0), ui(n, a), Rn(n, cn()), o;
          switch (n.finishedWork = c, n.finishedLanes = a, r) {
            case 0:
            case 1:
              throw Error(f(345));
            case 2:
              Gi(n, En, Vn);
              break;
            case 3:
              if (ui(n, a), (a & 130023424) === a && (r = Qo + 500 - cn(), 10 < r)) {
                if (Po(n, 0) !== 0) break;
                if (c = n.suspendedLanes, (c & a) !== a) {
                  Tt(), n.pingedLanes |= n.suspendedLanes & c;
                  break;
                }
                n.timeoutHandle = q(Gi.bind(null, n, En, Vn), r);
                break;
              }
              Gi(n, En, Vn);
              break;
            case 4:
              if (ui(n, a), (a & 4194240) === a) break;
              for (r = n.eventTimes, c = -1; 0 < a; ) {
                var B = 31 - tr(a);
                y = 1 << B, B = r[B], B > c && (c = B), a &= ~y;
              }
              if (a = c, a = cn() - a, a = (120 > a ? 120 : 480 > a ? 480 : 1080 > a ? 1080 : 1920 > a ? 1920 : 3e3 > a ? 3e3 : 4320 > a ? 4320 : 1960 * ql(a / 1960)) - a, 10 < a) {
                n.timeoutHandle = q(Gi.bind(null, n, En, Vn), a);
                break;
              }
              Gi(n, En, Vn);
              break;
            case 5:
              Gi(n, En, Vn);
              break;
            default:
              throw Error(f(329));
          }
        }
      }
      return Rn(n, cn()), n.callbackNode === o ? Yl.bind(null, n) : null;
    }
    function Xl(n, r) {
      var o = go;
      return n.current.memoizedState.isDehydrated && (zi(n, r).flags |= 256), n = mo(n, r), n !== 2 && (r = En, En = o, r !== null && Ql(r)), n;
    }
    function Ql(n) {
      En === null ? En = n : En.push.apply(En, n);
    }
    function xc(n) {
      for (var r = n; ; ) {
        if (r.flags & 16384) {
          var o = r.updateQueue;
          if (o !== null && (o = o.stores, o !== null)) for (var a = 0; a < o.length; a++) {
            var c = o[a], y = c.getSnapshot;
            c = c.value;
            try {
              if (!Pr(y(), c)) return !1;
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
      for (r &= ~Xo, r &= ~Ct, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
        var o = 31 - tr(r), a = 1 << o;
        n[o] = -1, r &= ~a;
      }
    }
    function Ga(n) {
      if ((be & 6) !== 0) throw Error(f(327));
      ci();
      var r = Po(n, 0);
      if ((r & 1) === 0) return Rn(n, cn()), null;
      var o = mo(n, r);
      if (n.tag !== 0 && o === 2) {
        var a = ul(n);
        a !== 0 && (r = a, o = Xl(n, a));
      }
      if (o === 1) throw o = Yo, zi(n, 0), ui(n, r), Rn(n, cn()), o;
      if (o === 6) throw Error(f(345));
      return n.finishedWork = n.current.alternate, n.finishedLanes = r, Gi(n, En, Vn), Rn(n, cn()), null;
    }
    function Ua(n) {
      Sr !== null && Sr.tag === 0 && (be & 6) === 0 && ci();
      var r = be;
      be |= 1;
      var o = Gt.transition, a = rt;
      try {
        if (Gt.transition = null, rt = 1, n) return n();
      } finally {
        rt = a, Gt.transition = o, be = r, (be & 6) === 0 && mn();
      }
    }
    function bl() {
      en = Ii.current, Pt(Ii);
    }
    function zi(n, r) {
      n.finishedWork = null, n.finishedLanes = 0;
      var o = n.timeoutHandle;
      if (o !== ye && (n.timeoutHandle = ye, ie(o)), Lt !== null) for (o = Lt.return; o !== null; ) {
        var a = o;
        switch (Ts(a), a.tag) {
          case 1:
            a = a.type.childContextTypes, a != null && qi();
            break;
          case 3:
            Ji(), Pt(Yn), Pt(xn), Sa();
            break;
          case 5:
            va(a);
            break;
          case 4:
            Ji();
            break;
          case 13:
            Pt(It);
            break;
          case 19:
            Pt(It);
            break;
          case 10:
            Ms(a.type._context);
            break;
          case 22:
          case 23:
            bl();
        }
        o = o.return;
      }
      if (_t = n, Lt = n = Ui(n.current, null), jt = en = r, At = 0, Yo = null, Xo = Ct = ai = 0, En = go = null, xi !== null) {
        for (r = 0; r < xi.length; r++) if (o = xi[r], a = o.interleaved, a !== null) {
          o.interleaved = null;
          var c = a.next, y = o.pending;
          if (y !== null) {
            var B = y.next;
            y.next = c, a.next = B;
          }
          o.pending = a;
        }
        xi = null;
      }
      return n;
    }
    function Zo(n, r) {
      do {
        var o = Lt;
        try {
          if (pa(), bn.current = io, Do) {
            for (var a = Mt.memoizedState; a !== null; ) {
              var c = a.queue;
              c !== null && (c.pending = null), a = a.next;
            }
            Do = !1;
          }
          if (Pi = 0, Zt = qt = Mt = null, Ls = !1, As = 0, Ko.current = null, o === null || o.return === null) {
            At = 1, Yo = r, Lt = null;
            break;
          }
          e: {
            var y = n, B = o.return, ne = o, fe = r;
            if (r = jt, ne.flags |= 32768, fe !== null && typeof fe == "object" && typeof fe.then == "function") {
              var ke = fe, Ie = ne, Ke = Ie.tag;
              if ((Ie.mode & 1) === 0 && (Ke === 0 || Ke === 11 || Ke === 15)) {
                var Fe = Ie.alternate;
                Fe ? (Ie.updateQueue = Fe.updateQueue, Ie.memoizedState = Fe.memoizedState, Ie.lanes = Fe.lanes) : (Ie.updateQueue = null, Ie.memoizedState = null);
              }
              var kt = vc(B);
              if (kt !== null) {
                kt.flags &= -257, Ni(kt, B, ne, y, r), kt.mode & 1 && yc(y, ke, r), r = kt, fe = ke;
                var mt = r.updateQueue;
                if (mt === null) {
                  var jn = /* @__PURE__ */ new Set();
                  jn.add(fe), r.updateQueue = jn;
                } else mt.add(fe);
                break e;
              } else {
                if ((r & 1) === 0) {
                  yc(y, ke, r), $o();
                  break e;
                }
                fe = Error(f(426));
              }
            } else if (Rt && ne.mode & 1) {
              var Yr = vc(B);
              if (Yr !== null) {
                (Yr.flags & 65536) === 0 && (Yr.flags |= 256), Ni(Yr, B, ne, y, r), fa(oo(fe, ne));
                break e;
              }
            }
            y = fe = oo(fe, ne), At !== 4 && (At = 2), go === null ? go = [y] : go.push(y), y = B;
            do {
              switch (y.tag) {
                case 3:
                  y.flags |= 65536, r &= -r, y.lanes |= r;
                  var ce = Br(y, fe, r);
                  Oo(y, ce);
                  break e;
                case 1:
                  ne = fe;
                  var se = y.type, he = y.stateNode;
                  if ((y.flags & 128) === 0 && (typeof se.getDerivedStateFromError == "function" || he !== null && typeof he.componentDidCatch == "function" && (Lr === null || !Lr.has(he)))) {
                    y.flags |= 65536, r &= -r, y.lanes |= r;
                    var Le = Ol(y, ne, r);
                    Oo(y, Le);
                    break e;
                  }
              }
              y = y.return;
            } while (y !== null);
          }
          Ha(o);
        } catch (Ve) {
          r = Ve, Lt === o && o !== null && (Lt = o = o.return);
          continue;
        }
        break;
      } while (!0);
    }
    function Ba() {
      var n = Ks.current;
      return Ks.current = io, n === null ? io : n;
    }
    function $o() {
      (At === 0 || At === 3 || At === 2) && (At = 4), _t === null || (ai & 268435455) === 0 && (Ct & 268435455) === 0 || ui(_t, jt);
    }
    function mo(n, r) {
      var o = be;
      be |= 2;
      var a = Ba();
      (_t !== n || jt !== r) && (Vn = null, zi(n, r));
      do
        try {
          Cc();
          break;
        } catch (c) {
          Zo(n, c);
        }
      while (!0);
      if (pa(), be = o, Ks.current = a, Lt !== null) throw Error(f(261));
      return _t = null, jt = 0, At;
    }
    function Cc() {
      for (; Lt !== null; ) ja(Lt);
    }
    function Va() {
      for (; Lt !== null && !$u(); ) ja(Lt);
    }
    function ja(n) {
      var r = Tc(n.alternate, n, en);
      n.memoizedProps = n.pendingProps, r === null ? Ha(n) : Lt = r, Ko.current = null;
    }
    function Ha(n) {
      var r = n;
      do {
        var o = r.alternate;
        if (n = r.return, (r.flags & 32768) === 0) {
          if (o = co(o, r, en), o !== null) {
            Lt = o;
            return;
          }
        } else {
          if (o = Sc(o, r), o !== null) {
            o.flags &= 32767, Lt = o;
            return;
          }
          if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
          else {
            At = 6, Lt = null;
            return;
          }
        }
        if (r = r.sibling, r !== null) {
          Lt = r;
          return;
        }
        Lt = r = n;
      } while (r !== null);
      At === 0 && (At = 5);
    }
    function Gi(n, r, o) {
      var a = rt, c = Gt.transition;
      try {
        Gt.transition = null, rt = 1, kc(n, r, o, a);
      } finally {
        Gt.transition = c, rt = a;
      }
      return null;
    }
    function kc(n, r, o, a) {
      do
        ci();
      while (Sr !== null);
      if ((be & 6) !== 0) throw Error(f(327));
      o = n.finishedWork;
      var c = n.finishedLanes;
      if (o === null) return null;
      if (n.finishedWork = null, n.finishedLanes = 0, o === n.current) throw Error(f(177));
      n.callbackNode = null, n.callbackPriority = 0;
      var y = o.lanes | o.childLanes;
      if (_i(n, y), n === _t && (Lt = _t = null, jt = 0), (o.subtreeFlags & 2064) === 0 && (o.flags & 2064) === 0 || Di || (Di = !0, qa(hl, function() {
        return ci(), null;
      })), y = (o.flags & 15990) !== 0, (o.subtreeFlags & 15990) !== 0 || y) {
        y = Gt.transition, Gt.transition = null;
        var B = rt;
        rt = 1;
        var ne = be;
        be |= 4, Ko.current = null, wc(n, o), Hs(o, n), U(n.containerInfo), n.current = o, Wo(o), Es(), be = ne, rt = B, Gt.transition = y;
      } else n.current = o;
      if (Di && (Di = !1, Sr = n, Kl = c), y = n.pendingLanes, y === 0 && (Lr = null), No(o.stateNode), Rn(n, cn()), r !== null) for (a = n.onRecoverableError, o = 0; o < r.length; o++) c = r[o], a(c.value, { componentStack: c.stack, digest: c.digest });
      if (Ut) throw Ut = !1, n = Kt, Kt = null, n;
      return (Kl & 1) !== 0 && n.tag !== 0 && ci(), y = n.pendingLanes, (y & 1) !== 0 ? n === Xs ? Yt++ : (Yt = 0, Xs = n) : Yt = 0, mn(), null;
    }
    function ci() {
      if (Sr !== null) {
        var n = To(Kl), r = Gt.transition, o = rt;
        try {
          if (Gt.transition = null, rt = 16 > n ? 16 : n, Sr === null) var a = !1;
          else {
            if (n = Sr, Sr = null, Kl = 0, (be & 6) !== 0) throw Error(f(331));
            var c = be;
            for (be |= 4, Ne = n.current; Ne !== null; ) {
              var y = Ne, B = y.child;
              if ((Ne.flags & 16) !== 0) {
                var ne = y.deletions;
                if (ne !== null) {
                  for (var fe = 0; fe < ne.length; fe++) {
                    var ke = ne[fe];
                    for (Ne = ke; Ne !== null; ) {
                      var Ie = Ne;
                      switch (Ie.tag) {
                        case 0:
                        case 11:
                        case 15:
                          fo(8, Ie, y);
                      }
                      var Ke = Ie.child;
                      if (Ke !== null) Ke.return = Ie, Ne = Ke;
                      else for (; Ne !== null; ) {
                        Ie = Ne;
                        var Fe = Ie.sibling, kt = Ie.return;
                        if (Vs(Ie), Ie === ke) {
                          Ne = null;
                          break;
                        }
                        if (Fe !== null) {
                          Fe.return = kt, Ne = Fe;
                          break;
                        }
                        Ne = kt;
                      }
                    }
                  }
                  var mt = y.alternate;
                  if (mt !== null) {
                    var jn = mt.child;
                    if (jn !== null) {
                      mt.child = null;
                      do {
                        var Yr = jn.sibling;
                        jn.sibling = null, jn = Yr;
                      } while (jn !== null);
                    }
                  }
                  Ne = y;
                }
              }
              if ((y.subtreeFlags & 2064) !== 0 && B !== null) B.return = y, Ne = B;
              else e: for (; Ne !== null; ) {
                if (y = Ne, (y.flags & 2048) !== 0) switch (y.tag) {
                  case 0:
                  case 11:
                  case 15:
                    fo(9, y, y.return);
                }
                var ce = y.sibling;
                if (ce !== null) {
                  ce.return = y.return, Ne = ce;
                  break e;
                }
                Ne = y.return;
              }
            }
            var se = n.current;
            for (Ne = se; Ne !== null; ) {
              B = Ne;
              var he = B.child;
              if ((B.subtreeFlags & 2064) !== 0 && he !== null) he.return = B, Ne = he;
              else e: for (B = se; Ne !== null; ) {
                if (ne = Ne, (ne.flags & 2048) !== 0) try {
                  switch (ne.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ho(9, ne);
                  }
                } catch (Ve) {
                  Nt(ne, ne.return, Ve);
                }
                if (ne === B) {
                  Ne = null;
                  break e;
                }
                var Le = ne.sibling;
                if (Le !== null) {
                  Le.return = ne.return, Ne = Le;
                  break e;
                }
                Ne = ne.return;
              }
            }
            if (be = c, mn(), Xn && typeof Xn.onPostCommitFiberRoot == "function") try {
              Xn.onPostCommitFiberRoot(Si, n);
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
    function Wa(n, r, o) {
      r = oo(o, r), r = Br(n, r, 1), n = ri(n, r, 1), r = Tt(), n !== null && (gr(n, 1, r), Rn(n, r));
    }
    function Nt(n, r, o) {
      if (n.tag === 3) Wa(n, n, o);
      else for (; r !== null; ) {
        if (r.tag === 3) {
          Wa(r, n, o);
          break;
        } else if (r.tag === 1) {
          var a = r.stateNode;
          if (typeof r.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (Lr === null || !Lr.has(a))) {
            n = oo(o, n), n = Ol(r, n, 1), r = ri(r, n, 1), n = Tt(), r !== null && (gr(r, 1, n), Rn(r, n));
            break;
          }
        }
        r = r.return;
      }
    }
    function Ec(n, r, o) {
      var a = n.pingCache;
      a !== null && a.delete(r), r = Tt(), n.pingedLanes |= n.suspendedLanes & o, _t === n && (jt & o) === o && (At === 4 || At === 3 && (jt & 130023424) === jt && 500 > cn() - Qo ? zi(n, 0) : Xo |= o), Rn(n, r);
    }
    function Pc(n, r) {
      r === 0 && ((n.mode & 1) === 0 ? r = 1 : (r = ks, ks <<= 1, (ks & 130023424) === 0 && (ks = 4194304)));
      var o = Tt();
      n = Mr(n, r), n !== null && (gr(n, r, o), Rn(n, o));
    }
    function Rc(n) {
      var r = n.memoizedState, o = 0;
      r !== null && (o = r.retryLane), Pc(n, o);
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
      a !== null && a.delete(r), Pc(n, o);
    }
    var Tc;
    Tc = function(n, r, o) {
      if (n !== null) if (n.memoizedProps !== r.pendingProps || Yn.current) $t = !0;
      else {
        if ((n.lanes & o) === 0 && (r.flags & 128) === 0) return $t = !1, Fi(n, r, o);
        $t = (n.flags & 131072) !== 0;
      }
      else $t = !1, Rt && (r.flags & 1048576) !== 0 && tc(r, Ki, r.index);
      switch (r.lanes = 0, r.tag) {
        case 2:
          var a = r.type;
          Bs(n, r), n = r.pendingProps;
          var c = $r(r, xn.current);
          Ao(r, o), c = Os(null, r, a, n, c, o);
          var y = El();
          return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, un(a) ? (y = !0, ko(r)) : y = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, ma(r), c.updater = zs, r.stateNode = c, c._reactInternals = r, Ur(r, a, n, o), r = Cn(null, r, a, !0, y, o)) : (r.tag = 0, Rt && y && Rs(r), fn(null, r, c, o), r = r.child), r;
        case 16:
          a = r.elementType;
          e: {
            switch (Bs(n, r), n = r.pendingProps, c = a._init, a = c(a._payload), r.type = a, c = r.tag = vd(a), n = sr(a, n), c) {
              case 0:
                r = Vr(null, r, a, n, o);
                break e;
              case 1:
                r = _n(null, r, a, n, o);
                break e;
              case 11:
                r = Il(null, r, a, n, o);
                break e;
              case 14:
                r = so(null, r, a, sr(a.type, n), o);
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
          return a = r.type, c = r.pendingProps, c = r.elementType === a ? c : sr(a, c), Vr(n, r, a, c, o);
        case 1:
          return a = r.type, c = r.pendingProps, c = r.elementType === a ? c : sr(a, c), _n(n, r, a, c, o);
        case 3:
          e: {
            if (Mi(r), n === null) throw Error(f(387));
            a = r.pendingProps, y = r.memoizedState, c = y.element, uc(n, r), Ci(r, a, null, o);
            var B = r.memoizedState;
            if (a = B.element, Ue && y.isDehydrated) if (y = { element: a, isDehydrated: !1, cache: B.cache, pendingSuspenseBoundaries: B.pendingSuspenseBoundaries, transitions: B.transitions }, r.updateQueue.baseState = y, r.memoizedState = y, r.flags & 256) {
              c = oo(Error(f(423)), r), r = lo(n, r, a, o, c);
              break e;
            } else if (a !== c) {
              c = oo(Error(f(424)), r), r = lo(n, r, a, o, c);
              break e;
            } else for (Ue && (Dn = er(r.stateNode.containerInfo), yn = r, Rt = !0, Nr = null, Ns = !1), o = lc(r, null, a, o), r.child = o; o; ) o.flags = o.flags & -3 | 4096, o = o.sibling;
            else {
              if (Yi(), a === c) {
                r = si(n, r, o);
                break e;
              }
              fn(n, r, a, o);
            }
            r = r.child;
          }
          return r;
        case 5:
          return ya(r), n === null && da(r), a = r.type, c = r.pendingProps, y = n !== null ? n.memoizedProps : null, B = c.children, pe(a, c) ? B = null : y !== null && pe(a, y) && (r.flags |= 32), vt(n, r), fn(n, r, B, o), r.child;
        case 6:
          return n === null && da(r), null;
        case 13:
          return Oa(n, r, o);
        case 4:
          return Cl(r, r.stateNode.containerInfo), a = r.pendingProps, n === null ? r.child = Qi(r, null, a, o) : fn(n, r, a, o), r.child;
        case 11:
          return a = r.type, c = r.pendingProps, c = r.elementType === a ? c : sr(a, c), Il(n, r, a, c, o);
        case 7:
          return fn(n, r, r.pendingProps, o), r.child;
        case 8:
          return fn(n, r, r.pendingProps.children, o), r.child;
        case 12:
          return fn(n, r, r.pendingProps.children, o), r.child;
        case 10:
          e: {
            if (a = r.type._context, c = r.pendingProps, y = r.memoizedProps, B = c.value, ac(r, a, B), y !== null) if (Pr(y.value, B)) {
              if (y.children === c.children && !Yn.current) {
                r = si(n, r, o);
                break e;
              }
            } else for (y = r.child, y !== null && (y.return = r); y !== null; ) {
              var ne = y.dependencies;
              if (ne !== null) {
                B = y.child;
                for (var fe = ne.firstContext; fe !== null; ) {
                  if (fe.context === a) {
                    if (y.tag === 1) {
                      fe = ni(-1, o & -o), fe.tag = 2;
                      var ke = y.updateQueue;
                      if (ke !== null) {
                        ke = ke.shared;
                        var Ie = ke.pending;
                        Ie === null ? fe.next = fe : (fe.next = Ie.next, Ie.next = fe), ke.pending = fe;
                      }
                    }
                    y.lanes |= o, fe = y.alternate, fe !== null && (fe.lanes |= o), bi(y.return, o, r), ne.lanes |= o;
                    break;
                  }
                  fe = fe.next;
                }
              } else if (y.tag === 10) B = y.type === r.type ? null : y.child;
              else if (y.tag === 18) {
                if (B = y.return, B === null) throw Error(f(341));
                B.lanes |= o, ne = B.alternate, ne !== null && (ne.lanes |= o), bi(B, o, r), B = y.sibling;
              } else B = y.child;
              if (B !== null) B.return = y;
              else for (B = y; B !== null; ) {
                if (B === r) {
                  B = null;
                  break;
                }
                if (y = B.sibling, y !== null) {
                  y.return = B.return, B = y;
                  break;
                }
                B = B.return;
              }
              y = B;
            }
            fn(n, r, c.children, o), r = r.child;
          }
          return r;
        case 9:
          return c = r.type, a = r.pendingProps.children, Ao(r, o), c = rr(c), a = a(c), r.flags |= 1, fn(n, r, a, o), r.child;
        case 14:
          return a = r.type, c = sr(a, r.pendingProps), c = sr(a.type, c), so(n, r, a, c, o);
        case 15:
          return oi(n, r, r.type, r.pendingProps, o);
        case 17:
          return a = r.type, c = r.pendingProps, c = r.elementType === a ? c : sr(a, c), Bs(n, r), r.tag = 1, un(a) ? (n = !0, ko(r)) : n = !1, Ao(r, o), mc(r, a, c), Ur(r, a, c, o), Cn(null, r, a, !0, n, o);
        case 19:
          return zl(n, r, o);
        case 22:
          return xt(n, r, o);
      }
      throw Error(f(156, r.tag));
    };
    function qa(n, r) {
      return Gr(n, r);
    }
    function Nc(n, r, o, a) {
      this.tag = n, this.key = o, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
    }
    function fr(n, r, o, a) {
      return new Nc(n, r, o, a);
    }
    function es(n) {
      return n = n.prototype, !(!n || !n.isReactComponent);
    }
    function vd(n) {
      if (typeof n == "function") return es(n) ? 1 : 0;
      if (n != null) {
        if (n = n.$$typeof, n === R) return 11;
        if (n === w) return 14;
      }
      return 2;
    }
    function Ui(n, r) {
      var o = n.alternate;
      return o === null ? (o = fr(n.tag, r, n.key, n.mode), o.elementType = n.elementType, o.type = n.type, o.stateNode = n.stateNode, o.alternate = n, n.alternate = o) : (o.pendingProps = r, o.type = n.type, o.flags = 0, o.subtreeFlags = 0, o.deletions = null), o.flags = n.flags & 14680064, o.childLanes = n.childLanes, o.lanes = n.lanes, o.child = n.child, o.memoizedProps = n.memoizedProps, o.memoizedState = n.memoizedState, o.updateQueue = n.updateQueue, r = n.dependencies, o.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, o.sibling = n.sibling, o.index = n.index, o.ref = n.ref, o;
    }
    function Jl(n, r, o, a, c, y) {
      var B = 2;
      if (a = n, typeof n == "function") es(n) && (B = 1);
      else if (typeof n == "string") B = 5;
      else e: switch (n) {
        case E:
          return Sn(o.children, c, y, r);
        case F:
          B = 8, c |= 8;
          break;
        case P:
          return n = fr(12, o, r, c | 2), n.elementType = P, n.lanes = y, n;
        case A:
          return n = fr(13, o, r, c), n.elementType = A, n.lanes = y, n;
        case j:
          return n = fr(19, o, r, c), n.elementType = j, n.lanes = y, n;
        case T:
          return ts(o, c, y, r);
        default:
          if (typeof n == "object" && n !== null) switch (n.$$typeof) {
            case S:
              B = 10;
              break e;
            case x:
              B = 9;
              break e;
            case R:
              B = 11;
              break e;
            case w:
              B = 14;
              break e;
            case h:
              B = 16, a = null;
              break e;
          }
          throw Error(f(130, n == null ? n : typeof n, ""));
      }
      return r = fr(B, o, r, c), r.elementType = n, r.type = a, r.lanes = y, r;
    }
    function Sn(n, r, o, a) {
      return n = fr(7, n, a, r), n.lanes = o, n;
    }
    function ts(n, r, o, a) {
      return n = fr(22, n, a, r), n.elementType = T, n.lanes = o, n.stateNode = { isHidden: !1 }, n;
    }
    function ns(n, r, o) {
      return n = fr(6, n, null, r), n.lanes = o, n;
    }
    function Zl(n, r, o) {
      return r = fr(4, n.children !== null ? n.children : [], n.key, r), r.lanes = o, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
    }
    function Mc(n, r, o, a, c) {
      this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = ye, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ro(0), this.expirationTimes = Ro(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ro(0), this.identifierPrefix = a, this.onRecoverableError = c, Ue && (this.mutableSourceEagerHydrationData = null);
    }
    function Ka(n, r, o, a, c, y, B, ne, fe) {
      return n = new Mc(n, r, o, ne, fe), r === 1 ? (r = 1, y === !0 && (r |= 8)) : r = 0, y = fr(3, null, null, r), n.current = y, y.stateNode = n, y.memoizedState = { element: a, isDehydrated: o, cache: null, transitions: null, pendingSuspenseBoundaries: null }, ma(y), n;
    }
    function $l(n) {
      if (!n) return vi;
      n = n._reactInternals;
      e: {
        if (G(n) !== n || n.tag !== 1) throw Error(f(170));
        var r = n;
        do {
          switch (r.tag) {
            case 3:
              r = r.stateNode.context;
              break e;
            case 1:
              if (un(r.type)) {
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
        if (un(o)) return Qu(n, o, r);
      }
      return r;
    }
    function yo(n) {
      var r = n._reactInternals;
      if (r === void 0)
        throw typeof n.render == "function" ? Error(f(188)) : (n = Object.keys(n).join(","), Error(f(268, n)));
      return n = Z(r), n === null ? null : n.stateNode;
    }
    function ea(n, r) {
      if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
        var o = n.retryLane;
        n.retryLane = o !== 0 && o < r ? o : r;
      }
    }
    function rs(n, r) {
      ea(n, r), (n = n.alternate) && ea(n, r);
    }
    function _d(n) {
      return n = Z(n), n === null ? null : n.stateNode;
    }
    function Fc() {
      return null;
    }
    return v.attemptContinuousHydration = function(n) {
      if (n.tag === 13) {
        var r = Mr(n, 134217728);
        if (r !== null) {
          var o = Tt();
          Pn(r, n, 134217728, o);
        }
        rs(n, 134217728);
      }
    }, v.attemptDiscreteHydration = function(n) {
      if (n.tag === 13) {
        var r = Mr(n, 1);
        if (r !== null) {
          var o = Tt();
          Pn(r, n, 1, o);
        }
        rs(n, 1);
      }
    }, v.attemptHydrationAtCurrentPriority = function(n) {
      if (n.tag === 13) {
        var r = tn(n), o = Mr(n, r);
        if (o !== null) {
          var a = Tt();
          Pn(o, n, r, a);
        }
        rs(n, r);
      }
    }, v.attemptSynchronousHydration = function(n) {
      switch (n.tag) {
        case 3:
          var r = n.stateNode;
          if (r.current.memoizedState.isDehydrated) {
            var o = Eo(r.pendingLanes);
            o !== 0 && (zr(r, o | 1), Rn(r, cn()), (be & 6) === 0 && (yt(), mn()));
          }
          break;
        case 13:
          Ua(function() {
            var a = Mr(n, 1);
            if (a !== null) {
              var c = Tt();
              Pn(a, n, 1, c);
            }
          }), rs(n, 1);
      }
    }, v.batchedUpdates = function(n, r) {
      var o = be;
      be |= 1;
      try {
        return n(r);
      } finally {
        be = o, be === 0 && (yt(), Mo && mn());
      }
    }, v.createComponentSelector = function(n) {
      return { $$typeof: li, value: n };
    }, v.createContainer = function(n, r, o, a, c, y, B) {
      return Ka(n, r, !1, null, o, a, c, y, B);
    }, v.createHasPseudoClassSelector = function(n) {
      return { $$typeof: Bn, value: n };
    }, v.createHydrationContainer = function(n, r, o, a, c, y, B, ne, fe) {
      return n = Ka(o, a, !0, n, c, y, B, ne, fe), n.context = $l(null), o = n.current, a = Tt(), c = tn(o), y = ni(a, c), y.callback = r ?? null, ri(o, y, c), n.current.lanes = c, gr(n, c, a), Rn(n, a), n;
    }, v.createPortal = function(n, r, o) {
      var a = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return { $$typeof: C, key: a == null ? null : "" + a, children: n, containerInfo: r, implementation: o };
    }, v.createRoleSelector = function(n) {
      return { $$typeof: Hr, value: n };
    }, v.createTestNameSelector = function(n) {
      return { $$typeof: qo, value: n };
    }, v.createTextSelector = function(n) {
      return { $$typeof: Ws, value: n };
    }, v.deferredUpdates = function(n) {
      var r = rt, o = Gt.transition;
      try {
        return Gt.transition = null, rt = 16, n();
      } finally {
        rt = r, Gt.transition = o;
      }
    }, v.discreteUpdates = function(n, r, o, a, c) {
      var y = rt, B = Gt.transition;
      try {
        return Gt.transition = null, rt = 1, n(r, o, a, c);
      } finally {
        rt = y, Gt.transition = B, be === 0 && yt();
      }
    }, v.findAllNodes = Kr, v.findBoundingRects = function(n, r) {
      if (!dt) throw Error(f(363));
      r = Kr(n, r), n = [];
      for (var o = 0; o < r.length; o++) n.push(et(r[o]));
      for (r = n.length - 1; 0 < r; r--) {
        o = n[r];
        for (var a = o.x, c = a + o.width, y = o.y, B = y + o.height, ne = r - 1; 0 <= ne; ne--) if (r !== ne) {
          var fe = n[ne], ke = fe.x, Ie = ke + fe.width, Ke = fe.y, Fe = Ke + fe.height;
          if (a >= ke && y >= Ke && c <= Ie && B <= Fe) {
            n.splice(r, 1);
            break;
          } else if (a !== ke || o.width !== fe.width || Fe < y || Ke > B) {
            if (!(y !== Ke || o.height !== fe.height || Ie < a || ke > c)) {
              ke > a && (fe.width += ke - a, fe.x = a), Ie < c && (fe.width = c - ke), n.splice(r, 1);
              break;
            }
          } else {
            Ke > y && (fe.height += Ke - y, fe.y = y), Fe < B && (fe.height = B - Ke), n.splice(r, 1);
            break;
          }
        }
      }
      return n;
    }, v.findHostInstance = yo, v.findHostInstanceWithNoPortals = function(n) {
      return n = Q(n), n = n !== null ? re(n) : null, n === null ? null : n.stateNode;
    }, v.findHostInstanceWithWarning = function(n) {
      return yo(n);
    }, v.flushControlled = function(n) {
      var r = be;
      be |= 1;
      var o = Gt.transition, a = rt;
      try {
        Gt.transition = null, rt = 1, n();
      } finally {
        rt = a, Gt.transition = o, be = r, be === 0 && (yt(), mn());
      }
    }, v.flushPassiveEffects = ci, v.flushSync = Ua, v.focusWithin = function(n, r) {
      if (!dt) throw Error(f(363));
      for (n = Wr(n), r = qr(n, r), r = Array.from(r), n = 0; n < r.length; ) {
        var o = r[n++];
        if (!Ht(o)) {
          if (o.tag === 5 && at(o.stateNode)) return !0;
          for (o = o.child; o !== null; ) r.push(o), o = o.sibling;
        }
      }
      return !1;
    }, v.getCurrentUpdatePriority = function() {
      return rt;
    }, v.getFindAllNodesFailureDescription = function(n, r) {
      if (!dt) throw Error(f(363));
      var o = 0, a = [];
      n = [Wr(n), 0];
      for (var c = 0; c < n.length; ) {
        var y = n[c++], B = n[c++], ne = r[B];
        if ((y.tag !== 5 || !Ht(y)) && (qs(y, ne) && (a.push(Wl(ne)), B++, B > o && (o = B)), B < r.length)) for (y = y.child; y !== null; ) n.push(y, B), y = y.sibling;
      }
      if (o < r.length) {
        for (n = []; o < r.length; o++) n.push(Wl(r[o]));
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
      if (n = { bundleType: n.bundleType, version: n.version, rendererPackageName: n.rendererPackageName, rendererConfig: n.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: g.ReactCurrentDispatcher, findHostInstanceByFiber: _d, findFiberByHostInstance: n.findFiberByHostInstance || Fc, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1" }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u") n = !1;
      else {
        var r = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (r.isDisabled || !r.supportsFiber) n = !0;
        else {
          try {
            Si = r.inject(n), Xn = r;
          } catch {
          }
          n = !!r.checkDCE;
        }
      }
      return n;
    }, v.isAlreadyRendering = function() {
      return !1;
    }, v.observeVisibleRects = function(n, r, o, a) {
      if (!dt) throw Error(f(363));
      n = Kr(n, r);
      var c = Ln(n, o, a).disconnect;
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
      var c = r.current, y = Tt(), B = tn(c);
      return o = $l(o), r.context === null ? r.context = o : r.pendingContext = o, r = ni(y, B), r.payload = { element: n }, a = a === void 0 ? null : a, a !== null && (r.callback = a), n = ri(c, r, B), n !== null && (Pn(n, c, B, y), Fs(n, c, B)), B;
    }, v;
  }), of;
}
var p0;
function xp() {
  return p0 || (p0 = 1, rf.exports = wp()), rf.exports;
}
var Cp = xp();
const kp = /* @__PURE__ */ od(Cp);
var sf = { exports: {} }, fs = {};
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
function Ep() {
  return g0 || (g0 = 1, fs.ConcurrentRoot = 1, fs.ContinuousEventPriority = 4, fs.DefaultEventPriority = 16, fs.DiscreteEventPriority = 1, fs.IdleEventPriority = 536870912, fs.LegacyRoot = 0), fs;
}
var m0;
function Pp() {
  return m0 || (m0 = 1, sf.exports = Ep()), sf.exports;
}
var q0 = Pp(), Rp = tt();
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
const Sf = ".react-konva-event", Tp = `ReactKonva: You have a Konva node with draggable = true and position defined but no onDragMove or onDragEnd events are handled.
Position of a node will be changed during drag&drop, so you should update state of the react app as well.
Consider to add onDragMove or onDragEnd events.
For more info see: https://github.com/konvajs/react-konva/issues/256
`, Np = `ReactKonva: You are using "zIndex" attribute for a Konva node.
react-konva may get confused with ordering. Just define correct order of elements in your render function of a component.
For more info see: https://github.com/konvajs/react-konva/issues/194
`, Mp = {};
function ad(l, d, v = Mp) {
  if (!v0 && "zIndex" in d && (console.warn(Np), v0 = !0), !_0 && d.draggable) {
    var L = d.x !== void 0 || d.y !== void 0, M = d.onDragEnd || d.onDragMove;
    L && !M && (console.warn(Tp), _0 = !0);
  }
  for (var k in v)
    if (!y0[k]) {
      var f = k.slice(0, 2) === "on", g = v[k] !== d[k];
      if (f && g) {
        var m = k.substr(2).toLowerCase();
        m.substr(0, 7) === "content" && (m = "content" + m.substr(7, 1).toUpperCase() + m.substr(8)), l.off(m, v[k]);
      }
      var C = !d.hasOwnProperty(k);
      C && l.setAttr(k, void 0);
    }
  var E = d._useStrictMode, F = {}, P = !1;
  const S = {};
  for (var k in d)
    if (!y0[k]) {
      var f = k.slice(0, 2) === "on", x = v[k] !== d[k];
      if (f && x) {
        var m = k.substr(2).toLowerCase();
        m.substr(0, 7) === "content" && (m = "content" + m.substr(7, 1).toUpperCase() + m.substr(8)), d[k] && (S[m] = d[k]);
      }
      !f && (d[k] !== v[k] || E && d[k] !== l.getAttr(k)) && (P = !0, F[k] = d[k]);
    }
  P && (l.setAttrs(F), ps(l));
  for (var m in S)
    l.on(m + Sf, S[m]);
}
function ps(l) {
  if (!Rp.Konva.autoDrawEnabled) {
    var d = l.getLayer() || l.getStage();
    d && d.batchDraw();
  }
}
var lf = gf();
const K0 = {}, Fp = {};
Ku.Node.prototype._applyProps = ad;
function Lp(l, d) {
  if (typeof d == "string") {
    console.error(`Do not use plain text as child of Konva.Node. You are using text: ${d}`);
    return;
  }
  l.add(d), ps(l);
}
function Ap(l, d, v) {
  let L = Ku[l];
  L || (console.error(`Konva has no node with the type ${l}. Group will be used instead. If you use minimal version of react-konva, just import required nodes into Konva: "import "konva/lib/shapes/${l}"  If you want to render DOM elements as part of canvas tree take a look into this demo: https://konvajs.github.io/docs/react/DOM_Portal.html`), L = Ku.Group);
  const M = {}, k = {};
  for (var f in d) {
    var g = f.slice(0, 2) === "on";
    g ? k[f] = d[f] : M[f] = d[f];
  }
  const m = new L(M);
  return ad(m, k), m;
}
function Op(l, d, v) {
  console.error(`Text components are not supported for now in ReactKonva. Your text is: "${l}"`);
}
function Ip(l, d, v) {
  return !1;
}
function Dp(l) {
  return l;
}
function zp() {
  return null;
}
function Gp() {
  return null;
}
function Up(l, d, v, L) {
  return Fp;
}
function Bp() {
}
function Vp(l) {
}
function jp(l, d) {
  return !1;
}
function Hp() {
  return K0;
}
function Wp() {
  return K0;
}
const qp = setTimeout, Kp = clearTimeout, Yp = -1;
function Xp(l, d) {
  return !1;
}
const Qp = !1, bp = !0, Jp = !0;
function Zp(l, d) {
  d.parent === l ? d.moveToTop() : l.add(d), ps(l);
}
function $p(l, d) {
  d.parent === l ? d.moveToTop() : l.add(d), ps(l);
}
function Y0(l, d, v) {
  d._remove(), l.add(d), d.setZIndex(v.getZIndex()), ps(l);
}
function eg(l, d, v) {
  Y0(l, d, v);
}
function tg(l, d) {
  d.destroy(), d.off(Sf), ps(l);
}
function ng(l, d) {
  d.destroy(), d.off(Sf), ps(l);
}
function rg(l, d, v) {
  console.error(`Text components are not yet supported in ReactKonva. You text is: "${v}"`);
}
function ig(l, d, v) {
}
function og(l, d, v, L, M) {
  ad(l, M, L);
}
function sg(l) {
  l.hide(), ps(l);
}
function lg(l) {
}
function ag(l, d) {
  (d.visible == null || d.visible) && l.show();
}
function ug(l, d) {
}
function cg(l) {
}
function dg() {
}
const fg = () => q0.DefaultEventPriority, hg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  appendChild: Zp,
  appendChildToContainer: $p,
  appendInitialChild: Lp,
  cancelTimeout: Kp,
  clearContainer: cg,
  commitMount: ig,
  commitTextUpdate: rg,
  commitUpdate: og,
  createInstance: Ap,
  createTextInstance: Op,
  detachDeletedInstance: dg,
  finalizeInitialChildren: Ip,
  getChildHostContext: Wp,
  getCurrentEventPriority: fg,
  getPublicInstance: Dp,
  getRootHostContext: Hp,
  hideInstance: sg,
  hideTextInstance: lg,
  idlePriority: lf.unstable_IdlePriority,
  insertBefore: Y0,
  insertInContainerBefore: eg,
  isPrimaryRenderer: Qp,
  noTimeout: Yp,
  now: lf.unstable_now,
  prepareForCommit: zp,
  preparePortalMount: Gp,
  prepareUpdate: Up,
  removeChild: tg,
  removeChildFromContainer: ng,
  resetAfterCommit: Bp,
  resetTextContent: Vp,
  run: lf.unstable_runWithPriority,
  scheduleTimeout: qp,
  shouldDeprioritizeSubtree: jp,
  shouldSetTextContent: Xp,
  supportsMutation: Jp,
  unhideInstance: ag,
  unhideTextInstance: ug,
  warnsIfNotActing: bp
}, Symbol.toStringTag, { value: "Module" }));
var pg = Object.defineProperty, gg = Object.defineProperties, mg = Object.getOwnPropertyDescriptors, S0 = Object.getOwnPropertySymbols, yg = Object.prototype.hasOwnProperty, vg = Object.prototype.propertyIsEnumerable, w0 = (l, d, v) => d in l ? pg(l, d, { enumerable: !0, configurable: !0, writable: !0, value: v }) : l[d] = v, x0 = (l, d) => {
  for (var v in d || (d = {}))
    yg.call(d, v) && w0(l, v, d[v]);
  if (S0)
    for (var v of S0(d))
      vg.call(d, v) && w0(l, v, d[v]);
  return l;
}, _g = (l, d) => gg(l, mg(d)), C0, k0;
typeof window < "u" && ((C0 = window.document) != null && C0.createElement || ((k0 = window.navigator) == null ? void 0 : k0.product) === "ReactNative") ? Ae.useLayoutEffect : Ae.useEffect;
function X0(l, d, v) {
  if (!l)
    return;
  if (v(l) === !0)
    return l;
  let L = l.child;
  for (; L; ) {
    const M = X0(L, d, v);
    if (M)
      return M;
    L = L.sibling;
  }
}
function Q0(l) {
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
const wf = Q0(Ae.createContext(null));
class b0 extends Ae.Component {
  render() {
    return /* @__PURE__ */ Ae.createElement(wf.Provider, {
      value: this._reactInternals
    }, this.props.children);
  }
}
function Sg() {
  const l = Ae.useContext(wf);
  if (l === null)
    throw new Error("its-fine: useFiber must be called within a <FiberProvider />!");
  const d = Ae.useId();
  return Ae.useMemo(() => {
    for (const L of [l, l == null ? void 0 : l.alternate]) {
      if (!L)
        continue;
      const M = X0(L, !1, (k) => {
        let f = k.memoizedState;
        for (; f; ) {
          if (f.memoizedState === d)
            return !0;
          f = f.next;
        }
      });
      if (M)
        return M;
    }
  }, [l, d]);
}
function wg() {
  const l = Sg(), [d] = Ae.useState(() => /* @__PURE__ */ new Map());
  d.clear();
  let v = l;
  for (; v; ) {
    if (v.type && typeof v.type == "object") {
      const M = v.type._context === void 0 && v.type.Provider === v.type ? v.type : v.type._context;
      M && M !== wf && !d.has(M) && d.set(M, Ae.useContext(Q0(M)));
    }
    v = v.return;
  }
  return d;
}
function xg() {
  const l = wg();
  return Ae.useMemo(
    () => Array.from(l.keys()).reduce(
      (d, v) => (L) => /* @__PURE__ */ Ae.createElement(d, null, /* @__PURE__ */ Ae.createElement(v.Provider, _g(x0({}, L), {
        value: l.get(v)
      }))),
      (d) => /* @__PURE__ */ Ae.createElement(b0, x0({}, d))
    ),
    [l]
  );
}
function Cg(l) {
  const d = pr.useRef({});
  return pr.useLayoutEffect(() => {
    d.current = l;
  }), pr.useLayoutEffect(() => () => {
    d.current = {};
  }, []), d.current;
}
const kg = (l) => {
  const d = pr.useRef(null), v = pr.useRef(null), L = pr.useRef(null), M = Cg(l), k = xg(), f = (g) => {
    const { forwardedRef: m } = l;
    m && (typeof m == "function" ? m(g) : m.current = g);
  };
  return pr.useLayoutEffect(() => (v.current = new Ku.Stage({
    width: l.width,
    height: l.height,
    container: d.current
  }), f(v.current), L.current = Wu.createContainer(v.current, q0.LegacyRoot, !1, null), Wu.updateContainer(pr.createElement(k, {}, l.children), L.current), () => {
    Ku.isBrowser && (f(null), Wu.updateContainer(null, L.current, null), v.current.destroy());
  }), []), pr.useLayoutEffect(() => {
    f(v.current), ad(v.current, l, M), Wu.updateContainer(pr.createElement(k, {}, l.children), L.current, null);
  }), pr.createElement("div", {
    ref: d,
    id: l.id,
    accessKey: l.accessKey,
    className: l.className,
    role: l.role,
    style: l.style,
    tabIndex: l.tabIndex,
    title: l.title
  });
}, P0 = "Layer", Hu = "Group", tl = "Rect", xf = "Circle", nl = "Line", Eg = "Image", Pg = "Transformer", Wu = kp(hg);
Wu.injectIntoDevTools({
  // @ts-ignore
  findHostInstanceByFiber: () => null,
  bundleType: 0,
  version: pr.version,
  rendererPackageName: "react-konva"
});
const Rg = pr.forwardRef((l, d) => pr.createElement(b0, {}, pr.createElement(kg, { ...l, forwardedRef: d })));
var af, R0;
function Tg() {
  if (R0) return af;
  R0 = 1;
  var l = Yu();
  return af = function(v, L, M) {
    const k = l.useRef("loading"), f = l.useRef(), [g, m] = l.useState(0), C = l.useRef(), E = l.useRef(), F = l.useRef();
    return (C.current !== v || E.current !== L || F.current !== M) && (k.current = "loading", f.current = void 0, C.current = v, E.current = L, F.current = M), l.useLayoutEffect(
      function() {
        if (!v) return;
        var P = document.createElement("img");
        function S() {
          P.decode().catch(() => {
          }).finally(() => {
            k.current = "loaded", f.current = P, m(Math.random());
          });
        }
        function x() {
          k.current = "failed", f.current = void 0, m(Math.random());
        }
        return P.addEventListener("load", S), P.addEventListener("error", x), L && (P.crossOrigin = L), M && (P.referrerPolicy = M), P.src = v, function() {
          P.removeEventListener("load", S), P.removeEventListener("error", x);
        };
      },
      [v, L, M]
    ), [f.current, k.current];
  }, af;
}
var Ng = Tg();
const Mg = /* @__PURE__ */ od(Ng);
function Cf(l = "") {
  return { version: "konva-1", background: l, objects: [] };
}
function Vu(l) {
  return JSON.parse(JSON.stringify(l));
}
function hs() {
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
const Fg = {
  allow_select: !0,
  allow_drag: !0,
  allow_rotate: !0,
  allow_scale: !0,
  allow_delete: !0,
  respect_object_locks: !0
}, Lg = [
  "top-left",
  "top-right",
  "bottom-left",
  "bottom-right",
  "middle-left",
  "middle-right",
  "top-center",
  "bottom-center"
];
function Ag(l) {
  return l.objects.some(
    (d) => d.locked === !0 || d.groupId !== void 0 || d.type === "group" || d.draggable === !1 || d.selectable === !1 || d.scalable === !1 || d.rotatable === !1 || d.deletable === !1 || d.listening === !1 || d.dragConstraint !== void 0
  );
}
function Og(l, d) {
  const v = {
    ...Fg,
    ...l ?? {}
  };
  return !l && !Ag(d) ? { ...v, respect_object_locks: !1 } : v;
}
function Ig(l, d) {
  return l === "transform" || l === "rect_crop" && d.type === "crop";
}
function Dg(l, d) {
  return l === "transform" || l === "rect_crop" && d.type === "crop";
}
function id(l, d, v) {
  if (l.type === "group")
    return {
      selectable: !1,
      draggable: !1,
      scalable: !1,
      rotatable: !1,
      deletable: !1,
      listening: !1
    };
  const L = v.respect_object_locks && l.locked === !0;
  let M = !L && l.selectable !== !1 && l.listening !== !1 && v.allow_select && Ig(d, l);
  l.draggable === !1 && l.selectable !== !0 && (M = !1);
  const k = M && l.draggable !== !1 && v.allow_drag && Dg(d, l), f = M && l.scalable !== !1 && v.allow_scale, g = M && l.rotatable !== !1 && v.allow_rotate, m = M && l.deletable !== !1 && v.allow_delete, C = l.listening !== !1 && !L;
  return {
    selectable: M,
    draggable: k,
    scalable: f,
    rotatable: g,
    deletable: m,
    listening: C
  };
}
function zg(l) {
  const d = Math.hypot(l.x, l.y);
  return d < 1e-9 ? { x: 1, y: 0 } : { x: l.x / d, y: l.y / d };
}
function Gg(l, d, v, L, M) {
  const k = zg(v), f = l.x - d.x, g = l.y - d.y;
  let m = f * k.x + g * k.y;
  return L != null && (m = Math.max(L, m)), M != null && (m = Math.min(M, m)), {
    x: d.x + m * k.x,
    y: d.y + m * k.y
  };
}
function J0(l, d) {
  return l.type === "group" || l.dragConstraint ? null : l.groupId ? l.groupId : null;
}
function Z0(l) {
  const d = /* @__PURE__ */ new Map();
  for (const L of l.objects)
    L.type === "group" && d.set(L.id, L);
  const v = /* @__PURE__ */ new Map();
  for (const L of l.objects) {
    const M = J0(L);
    if (!M) continue;
    const k = v.get(M) ?? [];
    k.push(L), v.set(M, k);
  }
  return Array.from(v.entries()).map(([L, M]) => ({
    groupId: L,
    descriptor: d.get(L),
    members: M
  }));
}
function Ug(l) {
  const d = /* @__PURE__ */ new Set();
  for (const v of Z0(l))
    for (const L of v.members)
      d.add(L.id);
  return l.objects.filter(
    (v) => v.type !== "group" && !d.has(v.id)
  );
}
function T0(l, d, v) {
  const L = l.descriptor, M = {
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
  return id(M, d, v);
}
function $0(l) {
  return `group-wrap-${l}`;
}
function Zc(l) {
  return l.startsWith("group-wrap-") ? l.slice(11) : null;
}
function Bg(l, d) {
  const v = J0(l);
  return v ? $0(v) : l.id;
}
function Vg(l, d) {
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
function jg(l, d) {
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
function Hg(l, d, v, L, M) {
  const k = l.x ?? 0, f = l.y ?? 0, g = l.points ?? [], m = Math.cos(L * Math.PI / 180), C = Math.sin(L * Math.PI / 180), E = [];
  for (let F = 0; F < g.length; F += 2) {
    const P = (g[F] ?? 0) + k, S = (g[F + 1] ?? 0) + f, x = P * M, R = S * M, A = x * m - R * C + d, j = x * C + R * m + v;
    E.push(A, j);
  }
  return {
    ...l,
    x: 0,
    y: 0,
    points: E,
    rotation: 0,
    scaleX: 1,
    scaleY: 1
  };
}
function Wg(l, d, v, L = 0, M = 1) {
  if (l.type === "rect" || l.type === "crop") {
    const k = Math.max(1, (l.width ?? 0) * M), f = Math.max(1, (l.height ?? 0) * M);
    return {
      ...l,
      x: d,
      y: v,
      width: k,
      height: f,
      rotation: (l.rotation ?? 0) + L,
      scaleX: 1,
      scaleY: 1
    };
  }
  return l.type === "circle" || l.type === "point" ? {
    ...l,
    x: d,
    y: v,
    rotation: (l.rotation ?? 0) + L,
    radius: Math.max(1, (l.radius ?? 1) * M),
    scaleX: 1,
    scaleY: 1
  } : l.type === "line" || l.type === "polygon" || l.type === "freedraw" || l.type === "spline" ? Hg(l, d, v, L, M) : { ...l, x: d, y: v, rotation: (l.rotation ?? 0) + L };
}
function qg(l, d, v) {
  return l.objects.map((L) => v.get(L.id) ?? L);
}
function Kg(l) {
  let d = l;
  for (; d; ) {
    if (d.getClassName() === "Transformer") return !0;
    d = d.getParent();
  }
  return !1;
}
const ff = 0.5, Yg = 2;
function Xg(l) {
  return Math.floor(l.length / 2);
}
function Qg(l) {
  const d = [];
  for (let v = 0; v + 1 < l.length; v += 2)
    d.push([l[v] ?? 0, l[v + 1] ?? 0]);
  return d;
}
function bg(l) {
  return Xg(l) >= Yg;
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
function Jg(l, d) {
  return d.type !== "spline" ? !1 : l || d.showControlPoints === !0;
}
function Zg(l) {
  return `${l}__control-points`;
}
function F0(l) {
  return l.type === "freedraw" ? 0.5 : l.type === "spline" ? l.tension ?? ff : 0;
}
const e1 = ({
  points: l,
  offsetX: d = 0,
  offsetY: v = 0,
  stroke: L,
  radius: M,
  groupId: k
}) => {
  const f = Qg(l);
  return /* @__PURE__ */ ve.jsx(Hu, { id: k, listening: !1, children: f.map(([g, m], C) => /* @__PURE__ */ ve.jsx(
    xf,
    {
      x: d + g,
      y: v + m,
      radius: M,
      stroke: L,
      strokeWidth: 2,
      fill: "white",
      listening: !1
    },
    C
  )) });
}, t1 = "rgba(0,0,0,0.001)";
function $g(l) {
  return !l || l === "transparent" ? t1 : l;
}
function ju(l, d) {
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
  splineControlPointRadius: L,
  onSelect: M,
  onDragEnd: k,
  onTransformEnd: f
}) => {
  const g = Ae.useRef(null);
  if (l.type === "group") return null;
  const m = {
    id: l.id,
    draggable: d.draggable,
    listening: d.listening,
    rotation: l.rotation ?? 0,
    scaleX: l.scaleX ?? 1,
    scaleY: l.scaleY ?? 1,
    onClick: d.selectable ? M : void 0,
    onTap: d.selectable ? M : void 0,
    onDragStart: (C) => {
      d.draggable && (g.current = { x: C.target.x(), y: C.target.y() });
    },
    onDragMove: (C) => {
      if (!d.draggable || !g.current) return;
      const E = l.dragConstraint;
      if (!E || E.type !== "axis" || !E.axis) return;
      const F = Gg(
        { x: C.target.x(), y: C.target.y() },
        g.current,
        E.axis,
        E.min,
        E.max
      );
      C.target.position(F);
    },
    onDragEnd: (C) => {
      g.current = null, k(C.target);
    },
    onTransformEnd: (C) => f(C.target)
  };
  if (l.type === "rect" || l.type === "crop")
    return /* @__PURE__ */ ve.jsx(
      tl,
      {
        ...m,
        x: l.x ?? 0,
        y: l.y ?? 0,
        width: l.width ?? 0,
        height: l.height ?? 0,
        stroke: l.stroke,
        strokeWidth: l.strokeWidth,
        fill: l.type === "crop" ? $g(l.fill) : l.fill,
        dash: l.type === "crop" ? [8, 4] : void 0
      }
    );
  if (l.type === "circle" || l.type === "point")
    return /* @__PURE__ */ ve.jsx(
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
    const C = Jg(v, l);
    return /* @__PURE__ */ ve.jsxs(ve.Fragment, { children: [
      /* @__PURE__ */ ve.jsx(
        nl,
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
      C && /* @__PURE__ */ ve.jsx(
        e1,
        {
          points: l.points ?? [],
          offsetX: l.x ?? 0,
          offsetY: l.y ?? 0,
          stroke: l.stroke ?? "#000",
          radius: L,
          groupId: Zg(l.id)
        }
      )
    ] });
  }
  return l.type === "line" || l.type === "freedraw" ? /* @__PURE__ */ ve.jsx(
    nl,
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
  ) : l.type === "polygon" ? /* @__PURE__ */ ve.jsx(
    nl,
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
function e2(l, d) {
  if ((d == null ? void 0 : d.originX) != null && (d == null ? void 0 : d.originY) != null)
    return { x: d.originX, y: d.originY };
  let v = 1 / 0, L = 1 / 0, M = -1 / 0, k = -1 / 0;
  for (const f of l)
    if (f.type === "rect" || f.type === "crop") {
      const g = f.x ?? 0, m = f.y ?? 0;
      v = Math.min(v, g), L = Math.min(L, m), M = Math.max(M, g + (f.width ?? 0)), k = Math.max(k, m + (f.height ?? 0));
    } else if (f.type === "circle" || f.type === "point") {
      const g = f.x ?? 0, m = f.y ?? 0, C = f.radius ?? 0;
      v = Math.min(v, g - C), L = Math.min(L, m - C), M = Math.max(M, g + C), k = Math.max(k, m + C);
    } else if (f.points && f.points.length >= 2) {
      const g = f.x ?? 0, m = f.y ?? 0;
      for (let C = 0; C < f.points.length; C += 2) {
        const E = g + (f.points[C] ?? 0), F = m + (f.points[C + 1] ?? 0);
        v = Math.min(v, E), L = Math.min(L, F), M = Math.max(M, E), k = Math.max(k, F);
      }
    }
  return Number.isFinite(v) ? { x: (v + M) / 2, y: (L + k) / 2 } : { x: 0, y: 0 };
}
function A0(l, d, v, L) {
  const k = L.getAbsoluteTransform().copy().invert(), f = /* @__PURE__ */ new Map();
  for (const g of d.members) {
    const m = v.findOne(`#${g.id}`);
    if (!m) continue;
    const E = m.getAbsoluteTransform().copy().multiply(k).decompose();
    f.set(
      g.id,
      Wg(
        g,
        E.x,
        E.y,
        E.rotation,
        Math.max(E.scaleX, E.scaleY)
      )
    );
  }
  return v.position({ x: 0, y: 0 }), v.rotation(0), v.scale({ x: 1, y: 1 }), v.offset({ x: 0, y: 0 }), qg(l, d.groupId, f);
}
function t2(l, d) {
  if (l.type === "rect" || l.type === "crop") {
    const v = Vg(l, d);
    return d.scaleX(1), d.scaleY(1), v;
  }
  if (l.type === "circle" || l.type === "point") {
    const v = jg(l, d);
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
], n2 = new Set(pf), r2 = {
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
}, O0 = {
  freedraw: "Free draw",
  line: "Line",
  rect: "Rectangle",
  rect_crop: "Crop rectangle",
  circle: "Circle",
  point: "Point",
  polygon: "Polygon",
  spline: "Spline",
  transform: "Transform / select",
  pan: "Pan"
};
function n1(l) {
  return typeof l == "string" && n2.has(l);
}
function i2(l) {
  return l === "icons" ? "icons" : "labels";
}
function r1(l) {
  if (!l || l.length === 0)
    return [...pf];
  const d = l.filter(n1);
  return d.length > 0 ? d : [...pf];
}
function qu(l, d) {
  const v = r1(d);
  return n1(l) && v.includes(l) ? l : v[0] ?? "freedraw";
}
const o2 = (l, d) => ({
  width: l,
  height: l,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": !0,
  role: void 0
}), s2 = ({
  mode: l,
  size: d = 16
}) => {
  const v = o2(d);
  switch (l) {
    case "freedraw":
      return /* @__PURE__ */ ve.jsxs("svg", { ...v, children: [
        /* @__PURE__ */ ve.jsx("path", { d: "M4 20c4-2 6-8 8-12 1-2 3-4 6-4" }),
        /* @__PURE__ */ ve.jsx("path", { d: "M14 4l4 4" })
      ] });
    case "line":
      return /* @__PURE__ */ ve.jsx("svg", { ...v, children: /* @__PURE__ */ ve.jsx("path", { d: "M5 19L19 5" }) });
    case "rect":
      return /* @__PURE__ */ ve.jsx("svg", { ...v, children: /* @__PURE__ */ ve.jsx("rect", { x: "5", y: "6", width: "14", height: "12", rx: "1" }) });
    case "rect_crop":
      return /* @__PURE__ */ ve.jsxs("svg", { ...v, children: [
        /* @__PURE__ */ ve.jsx("path", { d: "M6 3v3H3" }),
        /* @__PURE__ */ ve.jsx("path", { d: "M18 3v3h3" }),
        /* @__PURE__ */ ve.jsx("path", { d: "M6 21v-3H3" }),
        /* @__PURE__ */ ve.jsx("path", { d: "M18 21v-3h3" }),
        /* @__PURE__ */ ve.jsx("rect", { x: "7", y: "7", width: "10", height: "10" })
      ] });
    case "circle":
      return /* @__PURE__ */ ve.jsx("svg", { ...v, children: /* @__PURE__ */ ve.jsx("circle", { cx: "12", cy: "12", r: "7" }) });
    case "point":
      return /* @__PURE__ */ ve.jsxs("svg", { ...v, children: [
        /* @__PURE__ */ ve.jsx("circle", { cx: "12", cy: "12", r: "3", fill: "currentColor", stroke: "none" }),
        /* @__PURE__ */ ve.jsx("circle", { cx: "12", cy: "12", r: "7" })
      ] });
    case "polygon":
      return /* @__PURE__ */ ve.jsx("svg", { ...v, children: /* @__PURE__ */ ve.jsx("path", { d: "M12 4l7 5v6l-7 5-7-5V9z" }) });
    case "spline":
      return /* @__PURE__ */ ve.jsxs("svg", { ...v, children: [
        /* @__PURE__ */ ve.jsx("path", { d: "M4 16c3-8 5 2 8-4s5 6 8 0" }),
        /* @__PURE__ */ ve.jsx("circle", { cx: "4", cy: "16", r: "1.5", fill: "currentColor", stroke: "none" }),
        /* @__PURE__ */ ve.jsx("circle", { cx: "12", cy: "12", r: "1.5", fill: "currentColor", stroke: "none" }),
        /* @__PURE__ */ ve.jsx("circle", { cx: "20", cy: "12", r: "1.5", fill: "currentColor", stroke: "none" })
      ] });
    case "transform":
      return /* @__PURE__ */ ve.jsxs("svg", { ...v, children: [
        /* @__PURE__ */ ve.jsx("path", { d: "M12 3v18" }),
        /* @__PURE__ */ ve.jsx("path", { d: "M3 12h18" }),
        /* @__PURE__ */ ve.jsx("path", { d: "M12 3l-3 3M12 3l3 3" }),
        /* @__PURE__ */ ve.jsx("path", { d: "M12 21l-3-3M12 21l3-3" }),
        /* @__PURE__ */ ve.jsx("path", { d: "M3 12l3-3M3 12l3 3" }),
        /* @__PURE__ */ ve.jsx("path", { d: "M21 12l-3-3M21 12l-3 3" })
      ] });
    case "pan":
      return /* @__PURE__ */ ve.jsxs("svg", { ...v, children: [
        /* @__PURE__ */ ve.jsx("path", { d: "M8 12V7a1.5 1.5 0 013 0v1" }),
        /* @__PURE__ */ ve.jsx("path", { d: "M11 8V6a1.5 1.5 0 013 0v4" }),
        /* @__PURE__ */ ve.jsx("path", { d: "M14 10V8a1.5 1.5 0 013 0v5" }),
        /* @__PURE__ */ ve.jsx("path", { d: "M8 12c0 0-1 1-1 3v2a3 3 0 003 3h5a3 3 0 003-3v-4a1.5 1.5 0 00-3 0" })
      ] });
    default:
      return /* @__PURE__ */ ve.jsx("svg", { ...v, children: /* @__PURE__ */ ve.jsx("circle", { cx: "12", cy: "12", r: "7" }) });
  }
}, l2 = 0.25, a2 = 8, $c = 1.15, I0 = 15, ed = "rgba(0, 0, 0, 0.45)";
function u2(l, d, v, L) {
  return {
    x: Math.min(l, l + v),
    y: Math.min(d, d + L),
    width: Math.abs(v),
    height: Math.abs(L)
  };
}
const c2 = ({
  bounds: l,
  canvasWidth: d,
  canvasHeight: v
}) => {
  const { x: L, y: M, width: k, height: f } = l;
  if (k < 1 || f < 1) return null;
  const g = L + k, m = M + f;
  return /* @__PURE__ */ ve.jsxs(ve.Fragment, { children: [
    /* @__PURE__ */ ve.jsx(
      tl,
      {
        x: 0,
        y: 0,
        width: d,
        height: M,
        fill: ed,
        listening: !1
      }
    ),
    /* @__PURE__ */ ve.jsx(
      tl,
      {
        x: 0,
        y: m,
        width: d,
        height: Math.max(0, v - m),
        fill: ed,
        listening: !1
      }
    ),
    /* @__PURE__ */ ve.jsx(
      tl,
      {
        x: 0,
        y: M,
        width: L,
        height: f,
        fill: ed,
        listening: !1
      }
    ),
    /* @__PURE__ */ ve.jsx(
      tl,
      {
        x: g,
        y: M,
        width: Math.max(0, d - g),
        height: f,
        fill: ed,
        listening: !1
      }
    )
  ] });
};
function D0(l, d = "#000000") {
  const v = (l || "").trim();
  if (/^#[0-9a-fA-F]{6}$/.test(v)) return v.toLowerCase();
  if (/^#[0-9a-fA-F]{3}$/.test(v)) {
    const M = v[1], k = v[2], f = v[3];
    return `#${M}${M}${k}${k}${f}${f}`.toLowerCase();
  }
  const L = v.match(
    /^rgba?\(\s*([0-9.]+)\s*,\s*([0-9.]+)\s*,\s*([0-9.]+)(?:\s*,\s*([0-9.]+))?\s*\)$/i
  );
  if (L) {
    const M = (k) => Math.max(0, Math.min(255, Math.round(Number(k)))).toString(16).padStart(2, "0");
    return `#${M(L[1])}${M(L[2])}${M(L[3])}`;
  }
  return d;
}
function d2(l, d) {
  const v = (l || "").match(
    /^rgba?\(\s*([0-9.]+)\s*,\s*([0-9.]+)\s*,\s*([0-9.]+)\s*,\s*([0-9.]+)\s*\)$/i
  );
  if (v) {
    const L = parseInt(d.slice(1, 3), 16), M = parseInt(d.slice(3, 5), 16), k = parseInt(d.slice(5, 7), 16);
    return `rgba(${L}, ${M}, ${k}, ${v[4]})`;
  }
  return d;
}
function z0(l) {
  if (!l) return null;
  const d = l.getPointerPosition();
  if (!d) return null;
  const v = l.getAbsoluteTransform().copy().invert(), L = l.findOne("#viewport-content");
  return L ? L.getAbsoluteTransform().copy().invert().point(d) : v.point(d);
}
const f2 = ({
  fillColor: l,
  strokeWidth: d,
  strokeColor: v,
  backgroundColor: L,
  backgroundImageURL: M,
  realtimeUpdateStreamlit: k,
  canvasHeight: f,
  canvasWidth: g,
  drawingMode: m,
  tools: C,
  displayToolPicker: E,
  toolPickerStyle: F,
  displayColorPickers: P,
  initialDrawing: S,
  displayToolbar: x,
  displayRadius: R,
  enableViewportControls: A,
  transformOptions: j,
  splineShowControlPoints: w,
  splineControlPointRadius: h,
  setStateValue: T
}) => {
  const I = Ae.useRef(null), H = Ae.useRef(null), J = Ae.useRef(null), z = Ae.useRef(null), G = Ae.useRef(null), V = Ae.useRef(null), Q = Ae.useRef(
    `${L}|${M ?? ""}`
  ), Z = Ae.useRef(null), ee = Ae.useRef(!1), re = Ae.useRef(null), [X, me] = Ae.useState(
    () => uf(S)
  ), [N, D] = Ae.useState([
    uf(S)
  ]), [W, U] = Ae.useState(0), [_, K] = Ae.useState(null), [b, ae] = Ae.useState(null), [pe, oe] = Ae.useState(
    () => ju(g, f)
  ), [q] = Mg(M ?? "", "anonymous"), [ie, ye] = Ae.useState(
    () => qu(m, C)
  ), [Ee, Me] = Ae.useState(v), [je, Ue] = Ae.useState(l), ot = C.join(",");
  Ae.useEffect(() => {
    ye(qu(m, C));
  }, [m, ot]), Ae.useEffect(() => {
    Me(v);
  }, [v]), Ae.useEffect(() => {
    Ue(l);
  }, [l]);
  const we = E ? ie : qu(m, C), Je = P ? Ee : v, Qe = P ? je : l, St = Ae.useCallback(
    (ge) => {
      ye(qu(ge, C)), K(null), ae(null);
    },
    [C]
  ), sn = Ae.useMemo(
    () => Og(j, X),
    [j, X]
  ), dt = Ae.useMemo(() => Z0(X), [X.objects]), qn = Ae.useMemo(() => Ug(X), [X.objects]), et = Ae.useMemo(() => {
    if (!b) return null;
    const ge = Zc(b);
    if (ge) {
      const Re = dt.find((Te) => Te.groupId === ge);
      return Re ? T0(Re, we, sn) : null;
    }
    const xe = X.objects.find((Re) => Re.id === b);
    return xe ? id(xe, we, sn) : null;
  }, [
    we,
    dt,
    sn,
    X.objects,
    b
  ]), ln = Ae.useMemo(
    () => JSON.stringify((S == null ? void 0 : S.objects) ?? []),
    [S]
  );
  Ae.useEffect(() => {
    oe(ju(g, f));
  }, [g, f]), Ae.useEffect(() => {
    const ge = uf(S), xe = `${L}|${M ?? ""}`, Re = Q.current !== xe;
    Q.current = xe;
    const Te = Z.current === null || Z.current !== ln;
    Z.current = ln, me((Xe) => {
      if (!(Re || Te))
        return { ...Xe, background: L };
      const Et = {
        ...ge,
        background: L
      };
      return D([Vu(Et)]), U(0), ae(null), K(null), oe(ju(g, f)), Et;
    });
  }, [
    ln,
    L,
    M,
    S,
    g,
    f
  ]), Ae.useEffect(() => {
    var $e;
    const ge = G.current, xe = I.current;
    if (!ge || !xe) return;
    const Re = (Et, er, yi) => {
      var Ot;
      ge.rotateEnabled(er), ge.resizeEnabled(yi), ge.enabledAnchors(
        yi ? [...Lg] : []
      ), V.current = Et, ge.nodes([Et]), (Ot = ge.getLayer()) == null || Ot.batchDraw();
    }, Te = X.objects.find((Et) => Et.type === "crop");
    if (we === "rect_crop" && Te && !_) {
      const Et = xe.findOne(`#${Te.id}`);
      Et && Re(Et, !1, !0);
      return;
    }
    if (we !== "transform" || !b || !et) {
      ge.nodes([]), V.current = null, ($e = ge.getLayer()) == null || $e.batchDraw();
      return;
    }
    const Xe = xe.findOne(`#${b}`);
    Xe && Re(
      Xe,
      et.rotatable,
      et.scalable
    );
  }, [
    b,
    et,
    we,
    X.objects,
    _
  ]);
  const Ht = Ae.useCallback(
    (ge) => {
      D((xe) => [...xe.slice(0, W + 1), Vu(ge)]), U((xe) => xe + 1);
    },
    [W]
  ), bt = Ae.useCallback(
    (ge) => {
      const xe = H.current, Re = J.current;
      !xe || !Re || requestAnimationFrame(() => {
        const Te = {
          x: Re.x(),
          y: Re.y(),
          scaleX: Re.scaleX(),
          scaleY: Re.scaleY(),
          rotation: Re.rotation()
        }, Xe = ju(g, f);
        Re.position({ x: Xe.x, y: Xe.y }), Re.scale({ x: Xe.scale, y: Xe.scale }), Re.rotation(Xe.rotation);
        const $e = Re.findOne("#crop-chrome"), Et = [];
        $e && (Et.push($e), $e.visible(!1));
        for (const Ot of X.objects) {
          if (Ot.type !== "crop") continue;
          const On = Re.findOne(`#${Ot.id}`);
          On && (Et.push(On), On.visible(!1));
        }
        for (const Ot of X.objects) {
          if (Ot.type !== "spline") continue;
          const On = Re.findOne(`#${Ot.id}__control-points`);
          On && (Et.push(On), On.visible(!1));
        }
        const er = Re.findOne("#draft-spline-control-points");
        er && (Et.push(er), er.visible(!1)), xe.batchDraw();
        const yi = xe.toDataURL({
          pixelRatio: 1,
          mimeType: "image/png",
          x: 0,
          y: 0,
          width: g,
          height: f
        });
        Re.position({ x: Te.x, y: Te.y }), Re.scale({ x: Te.scaleX, y: Te.scaleY }), Re.rotation(Te.rotation);
        for (const Ot of Et)
          Ot.visible(!0);
        xe.batchDraw(), T("image_data_url", yi), T("json_data", ge);
      });
    },
    [f, g, X.objects, T]
  ), at = Ae.useCallback(
    (ge, xe) => {
      const Re = Vu(ge);
      me(Re), Ht(Re), ((xe == null ? void 0 : xe.emit) ?? k) && bt(Re);
    },
    [bt, Ht, k]
  ), Ln = Ae.useCallback(() => hf(_) ? (K(M0(_)), !0) : !1, [_]), Wt = Ae.useCallback(() => {
    if (Ln() || W <= 0) return;
    const ge = W - 1, xe = Vu(N[ge]);
    U(ge), me(xe), ae(null), k && bt(xe);
  }, [bt, N, W, k, Ln]), An = Ae.useCallback(() => {
    if (W >= N.length - 1) return;
    const ge = W + 1, xe = Vu(N[ge]);
    U(ge), me(xe), ae(null), k && bt(xe);
  }, [bt, N, W, k]), Dt = Ae.useCallback(() => {
    const ge = Cf(L);
    at(ge, { emit: !0 }), ae(null), K(null);
  }, [L, at]), zt = Ae.useCallback(() => {
    bt(X);
  }, [bt, X]), br = Ae.useCallback(() => {
    oe(ju(g, f));
  }, [f, g]);
  Ae.useEffect(() => {
    const ge = (xe) => {
      const Re = xe.target;
      if (!(Re.tagName === "INPUT" || Re.tagName === "TEXTAREA")) {
        if (xe.key === "Backspace" && N0(_)) {
          xe.preventDefault(), hf(_) && K(M0(_));
          return;
        }
        xe.key === "z" && (xe.ctrlKey || xe.metaKey) && !xe.shiftKey && (xe.preventDefault(), Wt());
      }
    };
    return window.addEventListener("keydown", ge), () => window.removeEventListener("keydown", ge);
  }, [_, Wt]);
  const Or = Ae.useCallback(
    (ge, xe) => {
      oe((Re) => {
        const Te = Math.min(
          a2,
          Math.max(l2, Re.scale * ge)
        );
        if (!xe)
          return { ...Re, scale: Te };
        const Xe = J.current;
        if (!Xe)
          return { ...Re, scale: Te };
        const Et = Xe.getAbsoluteTransform().copy().invert().point(xe), er = g / 2, yi = f / 2, Ot = Math.cos(Re.rotation * Math.PI / 180), On = Math.sin(Re.rotation * Math.PI / 180), Hi = Et.x - er, xo = Et.y - yi, rl = Re.x + Re.scale * (Ot * Hi - On * xo), il = Re.y + Re.scale * (On * Hi + Ot * xo), ol = rl - Te * (Ot * Hi - On * xo), sl = il - Te * (On * Hi + Ot * xo);
        return { ...Re, scale: Te, x: ol, y: sl };
      });
    },
    [f, g]
  ), Ir = Ae.useCallback((ge) => {
    oe((xe) => ({
      ...xe,
      rotation: xe.rotation + ge
    }));
  }, []), Kn = Ae.useCallback(
    (ge) => {
      at(
        {
          ...X,
          background: L,
          objects: [...X.objects, ge]
        },
        { emit: !0 }
      );
    },
    [L, at, X]
  ), pi = Ae.useCallback(
    (ge) => {
      const xe = X.objects.filter((Re) => Re.type !== "crop");
      at({
        ...X,
        background: L,
        objects: [...xe, { ...ge, type: "crop" }]
      }), ae(ge.id);
    },
    [L, at, X]
  ), an = Ae.useMemo(
    () => X.objects.find((ge) => ge.type === "crop") ?? null,
    [X.objects]
  ), wo = Ae.useMemo(() => {
    if ((_ == null ? void 0 : _.kind) === "rect" && we === "rect_crop") {
      const ge = u2(
        _.x,
        _.y,
        _.width,
        _.height
      );
      return ge.width > 0 && ge.height > 0 ? ge : null;
    }
    return an ? {
      x: an.x ?? 0,
      y: an.y ?? 0,
      width: an.width ?? 0,
      height: an.height ?? 0
    } : null;
  }, [an, _, we]), gs = Ae.useCallback(
    (ge) => {
      if (!A) return;
      ge.evt.preventDefault();
      const xe = I.current;
      if (!xe) return;
      const Re = xe.getPointerPosition();
      if (!Re) return;
      const Te = ge.evt.deltaY > 0 ? 1 / $c : $c;
      Or(Te, Re);
    },
    [A, Or]
  ), ms = Ae.useCallback(
    (ge) => {
      const xe = I.current;
      if (A && (we === "pan" || ge.evt.button === 1 || ge.evt.altKey || ge.evt.buttons === 4)) {
        ee.current = !0, re.current = { x: ge.evt.clientX, y: ge.evt.clientY };
        return;
      }
      const Te = z0(xe);
      if (Te) {
        if (we === "transform") {
          (ge.target === xe || ge.target.id() === "viewport-content") && ae(null);
          return;
        }
        if (we !== "pan") {
          if (we === "point") {
            Kn({
              id: hs(),
              type: "point",
              x: Te.x,
              y: Te.y,
              radius: R,
              fill: Je,
              stroke: Je,
              strokeWidth: 1
            });
            return;
          }
          if (we === "polygon") {
            K((Xe) => (Xe == null ? void 0 : Xe.kind) === "polygon" ? { kind: "polygon", points: [...Xe.points, Te.x, Te.y] } : { kind: "polygon", points: [Te.x, Te.y] });
            return;
          }
          if (we === "spline") {
            K((Xe) => (Xe == null ? void 0 : Xe.kind) === "spline" ? { kind: "spline", points: [...Xe.points, Te.x, Te.y] } : { kind: "spline", points: [Te.x, Te.y] });
            return;
          }
          if (we === "freedraw") {
            K({ kind: "freedraw", points: [Te.x, Te.y] });
            return;
          }
          if (we === "line") {
            K({ kind: "line", x1: Te.x, y1: Te.y, x2: Te.x, y2: Te.y });
            return;
          }
          if (we === "rect") {
            K({ kind: "rect", x: Te.x, y: Te.y, width: 0, height: 0 });
            return;
          }
          if (we === "rect_crop") {
            if (Kg(ge.target))
              return;
            const Xe = X.objects.find(($e) => $e.type === "crop");
            if (Xe && ge.target.id() === Xe.id) {
              ae(Xe.id);
              return;
            }
            ae(null), K({ kind: "rect", x: Te.x, y: Te.y, width: 0, height: 0 });
            return;
          }
          we === "circle" && K({ kind: "circle", x: Te.x, y: Te.y, radius: 0 });
        }
      }
    },
    [
      Kn,
      R,
      we,
      A,
      X.objects,
      Je
    ]
  ), gi = Ae.useCallback(
    (ge) => {
      if (ee.current && re.current) {
        const Re = ge.evt.clientX - re.current.x, Te = ge.evt.clientY - re.current.y;
        re.current = { x: ge.evt.clientX, y: ge.evt.clientY }, oe((Xe) => ({
          ...Xe,
          x: Xe.x + Re,
          y: Xe.y + Te
        }));
        return;
      }
      const xe = z0(I.current);
      if (!(!xe || !_)) {
        if (_.kind === "freedraw") {
          K({ kind: "freedraw", points: [..._.points, xe.x, xe.y] });
          return;
        }
        if (_.kind === "line") {
          K({ ..._, x2: xe.x, y2: xe.y });
          return;
        }
        if (_.kind === "rect") {
          K({
            ..._,
            width: xe.x - _.x,
            height: xe.y - _.y
          });
          return;
        }
        if (_.kind === "circle") {
          const Re = xe.x - _.x, Te = xe.y - _.y;
          K({ ..._, radius: Math.sqrt(Re * Re + Te * Te) });
        }
      }
    },
    [_]
  ), Jr = Ae.useCallback(() => {
    if (_) {
      if (_.kind === "freedraw" && _.points.length >= 4)
        Kn({
          id: hs(),
          type: "freedraw",
          points: _.points,
          stroke: Je,
          strokeWidth: d,
          fill: ""
        });
      else if (_.kind === "line")
        Kn({
          id: hs(),
          type: "line",
          points: [_.x1, _.y1, _.x2, _.y2],
          stroke: Je,
          strokeWidth: d
        });
      else if (_.kind === "rect") {
        const ge = Math.min(_.x, _.x + _.width), xe = Math.min(_.y, _.y + _.height), Re = Math.abs(_.width), Te = Math.abs(_.height);
        Re > 1 && Te > 1 && (we === "rect_crop" ? pi({
          id: (an == null ? void 0 : an.id) ?? hs(),
          type: "crop",
          x: ge,
          y: xe,
          width: Re,
          height: Te,
          stroke: Je,
          strokeWidth: d,
          fill: t1
        }) : Kn({
          id: hs(),
          type: "rect",
          x: ge,
          y: xe,
          width: Re,
          height: Te,
          stroke: Je,
          strokeWidth: d,
          fill: Qe
        }));
      } else _.kind === "circle" && _.radius > 1 && Kn({
        id: hs(),
        type: "circle",
        x: _.x,
        y: _.y,
        radius: _.radius,
        stroke: Je,
        strokeWidth: d,
        fill: Qe
      });
      _.kind !== "polygon" && _.kind !== "spline" && K(null);
    }
  }, [
    Kn,
    an,
    _,
    we,
    Qe,
    pi,
    Je,
    d
  ]), ys = Ae.useCallback(() => {
    if (ee.current) {
      ee.current = !1, re.current = null;
      return;
    }
    we === "polygon" || we === "spline" || we === "transform" || we === "pan" || Jr();
  }, [we, Jr]), vs = Ae.useCallback(
    (ge) => {
      if (ge.evt.preventDefault(), we === "polygon" && (_ == null ? void 0 : _.kind) === "polygon") {
        if (_.points.length < 6) {
          K(null);
          return;
        }
        Kn({
          id: hs(),
          type: "polygon",
          points: _.points,
          stroke: Je,
          strokeWidth: d,
          fill: Qe
        }), K(null);
        return;
      }
      if (we === "spline" && (_ == null ? void 0 : _.kind) === "spline") {
        if (!bg(_.points)) {
          K(null);
          return;
        }
        Kn({
          id: hs(),
          type: "spline",
          points: _.points,
          tension: ff,
          stroke: Je,
          strokeWidth: d,
          fill: "",
          showControlPoints: w
        }), K(null);
      }
    },
    [Kn, _, we, Qe, w, Je, d]
  ), _s = Ae.useCallback(() => {
    if (we === "polygon" && (_ == null ? void 0 : _.kind) === "polygon") {
      _.points.length <= 2 ? K(null) : K({
        kind: "polygon",
        points: _.points.slice(0, -2)
      });
      return;
    }
    if (we === "spline" && (_ == null ? void 0 : _.kind) === "spline") {
      _.points.length <= 2 ? K(null) : K({
        kind: "spline",
        points: _.points.slice(0, -2)
      });
      return;
    }
    if (we === "transform" && b) {
      if (!(et != null && et.deletable)) return;
      const ge = Zc(b);
      if (ge) {
        const xe = dt.find((Te) => Te.groupId === ge);
        if (!xe) return;
        const Re = new Set(xe.members.map((Te) => Te.id));
        at({
          ...X,
          objects: X.objects.filter(
            (Te) => Te.id !== ge && !Re.has(Te.id)
          )
        });
      } else
        at({
          ...X,
          objects: X.objects.filter((xe) => xe.id !== b)
        });
      ae(null);
      return;
    }
    we === "rect_crop" && an && (at({
      ...X,
      objects: X.objects.filter((ge) => ge.type !== "crop")
    }), ae(null));
  }, [
    at,
    an,
    _,
    we,
    dt,
    X,
    b,
    et
  ]), Ss = Ae.useCallback(
    (ge) => {
      we !== "transform" && we !== "rect_crop" || !id(ge, we, sn).selectable || ae(Bg(ge));
    },
    [we, sn, X]
  ), Vi = Ae.useCallback(
    (ge, xe) => {
      const Re = Zc(ge), Te = J.current;
      if (Re && Te) {
        const $e = dt.find((er) => er.groupId === Re);
        if (!$e) return;
        const Et = A0(
          X,
          $e,
          xe,
          Te
        );
        at({ ...X, objects: Et });
        return;
      }
      const Xe = X.objects.map(($e) => $e.id !== ge ? $e : t2($e, xe));
      at({ ...X, objects: Xe });
    },
    [at, dt, X]
  ), ji = Ae.useCallback(
    (ge, xe) => {
      const Re = Zc(ge), Te = J.current;
      if (Re && Te) {
        const $e = dt.find((er) => er.groupId === Re);
        if (!$e) return;
        const Et = A0(
          X,
          $e,
          xe,
          Te
        );
        at({ ...X, objects: Et });
        return;
      }
      const Xe = X.objects.map(
        ($e) => $e.id === ge ? { ...$e, x: xe.x(), y: xe.y() } : $e
      );
      at({ ...X, objects: Xe });
    },
    [at, dt, X]
  ), ws = {
    background: L || "transparent",
    border: "1px solid var(--st-gray-color, #ddd)",
    display: "block",
    cursor: we === "pan" || ee.current ? "grab" : "crosshair"
  }, mi = {
    id: "viewport-content",
    x: pe.x,
    y: pe.y,
    scaleX: pe.scale,
    scaleY: pe.scale,
    rotation: pe.rotation,
    offsetX: g / 2,
    offsetY: f / 2
  }, xs = Math.round(pe.scale * 100);
  return /* @__PURE__ */ ve.jsxs(
    "div",
    {
      style: { fontFamily: "var(--st-font, sans-serif)", width: g },
      children: [
        (x || E || P) && /* @__PURE__ */ ve.jsxs(
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
              E && C.map((ge) => {
                const xe = ge === we, Re = F === "icons";
                return /* @__PURE__ */ ve.jsx(
                  "button",
                  {
                    type: "button",
                    title: O0[ge],
                    "aria-label": O0[ge],
                    "aria-pressed": xe,
                    onClick: () => St(ge),
                    style: {
                      fontWeight: xe ? 700 : 400,
                      outline: xe ? "2px solid currentColor" : void 0,
                      outlineOffset: 1,
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 4,
                      minWidth: Re ? 32 : void 0,
                      minHeight: Re ? 28 : void 0,
                      padding: Re ? "4px 6px" : void 0
                    },
                    children: Re ? /* @__PURE__ */ ve.jsx(s2, { mode: ge, size: 16 }) : r2[ge]
                  },
                  ge
                );
              }),
              P && /* @__PURE__ */ ve.jsxs(ve.Fragment, { children: [
                /* @__PURE__ */ ve.jsxs(
                  "label",
                  {
                    style: {
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 4,
                      fontSize: 12
                    },
                    title: "Stroke color",
                    children: [
                      /* @__PURE__ */ ve.jsx("span", { style: { opacity: 0.75 }, children: "Stroke" }),
                      /* @__PURE__ */ ve.jsx(
                        "input",
                        {
                          type: "color",
                          value: D0(Je, "#000000"),
                          onChange: (ge) => Me(ge.target.value),
                          "aria-label": "Stroke color",
                          style: {
                            width: 28,
                            height: 28,
                            padding: 0,
                            border: "1px solid #ccc",
                            background: "transparent",
                            cursor: "pointer"
                          }
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ ve.jsxs(
                  "label",
                  {
                    style: {
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 4,
                      fontSize: 12
                    },
                    title: "Fill color",
                    children: [
                      /* @__PURE__ */ ve.jsx("span", { style: { opacity: 0.75 }, children: "Fill" }),
                      /* @__PURE__ */ ve.jsx(
                        "input",
                        {
                          type: "color",
                          value: D0(Qe, "#eeeeee"),
                          onChange: (ge) => Ue(d2(Qe, ge.target.value)),
                          "aria-label": "Fill color",
                          style: {
                            width: 28,
                            height: 28,
                            padding: 0,
                            border: "1px solid #ccc",
                            background: "transparent",
                            cursor: "pointer"
                          }
                        }
                      )
                    ]
                  }
                )
              ] }),
              x && /* @__PURE__ */ ve.jsxs(ve.Fragment, { children: [
                /* @__PURE__ */ ve.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: Wt,
                    disabled: W <= 0 && !N0(_),
                    children: "Undo"
                  }
                ),
                /* @__PURE__ */ ve.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: An,
                    disabled: W >= N.length - 1,
                    children: "Redo"
                  }
                ),
                /* @__PURE__ */ ve.jsx("button", { type: "button", onClick: Dt, children: "Clear" }),
                !k && /* @__PURE__ */ ve.jsx("button", { type: "button", onClick: zt, children: "Send to Streamlit" }),
                A && /* @__PURE__ */ ve.jsxs(ve.Fragment, { children: [
                  /* @__PURE__ */ ve.jsx("button", { type: "button", onClick: () => Or($c), children: "Zoom +" }),
                  /* @__PURE__ */ ve.jsx("button", { type: "button", onClick: () => Or(1 / $c), children: "Zoom −" }),
                  /* @__PURE__ */ ve.jsx("button", { type: "button", onClick: () => Ir(-I0), children: "Tilt ↶" }),
                  /* @__PURE__ */ ve.jsx("button", { type: "button", onClick: () => Ir(I0), children: "Tilt ↷" }),
                  /* @__PURE__ */ ve.jsx("button", { type: "button", onClick: br, children: "Reset view" }),
                  /* @__PURE__ */ ve.jsxs("span", { style: { fontSize: 12, opacity: 0.75 }, children: [
                    xs,
                    "% · ",
                    Math.round(pe.rotation),
                    "°"
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ ve.jsxs("span", { style: { marginLeft: "auto", fontSize: 12, opacity: 0.7 }, children: [
                "mode: ",
                we
              ] })
            ]
          }
        ),
        /* @__PURE__ */ ve.jsxs(
          Rg,
          {
            width: g,
            height: f,
            ref: I,
            style: ws,
            onMouseDown: ms,
            onMousemove: gi,
            onMouseup: ys,
            onMouseLeave: ys,
            onContextMenu: vs,
            onDblClick: _s,
            onWheel: gs,
            children: [
              /* @__PURE__ */ ve.jsx(P0, { listening: !1, children: /* @__PURE__ */ ve.jsx(Hu, { ref: z, ...mi, id: "viewport-bg", children: q && /* @__PURE__ */ ve.jsx(
                Eg,
                {
                  image: q,
                  width: g,
                  height: f,
                  listening: !1
                }
              ) }) }),
              /* @__PURE__ */ ve.jsx(P0, { ref: H, children: /* @__PURE__ */ ve.jsxs(Hu, { ref: J, ...mi, children: [
                !q && !!L && /* @__PURE__ */ ve.jsx(
                  tl,
                  {
                    x: 0,
                    y: 0,
                    width: g,
                    height: f,
                    fill: L,
                    listening: !1
                  }
                ),
                wo && (we === "rect_crop" || an) && /* @__PURE__ */ ve.jsx(Hu, { id: "crop-chrome", listening: !1, children: /* @__PURE__ */ ve.jsx(
                  c2,
                  {
                    bounds: wo,
                    canvasWidth: g,
                    canvasHeight: f
                  }
                ) }),
                qn.map((ge) => /* @__PURE__ */ ve.jsx(
                  L0,
                  {
                    obj: ge,
                    interaction: id(
                      ge,
                      we,
                      sn
                    ),
                    splineShowControlPoints: w,
                    splineControlPointRadius: h,
                    onSelect: () => Ss(ge),
                    onDragEnd: (xe) => ji(ge.id, xe),
                    onTransformEnd: (xe) => Vi(ge.id, xe)
                  },
                  ge.id
                )),
                dt.map((ge) => {
                  const xe = T0(
                    ge,
                    we,
                    sn
                  ), Re = e2(ge.members, ge.descriptor), Te = $0(ge.groupId), Xe = {
                    selectable: !0,
                    draggable: !1,
                    scalable: !1,
                    rotatable: !1,
                    deletable: !1,
                    listening: !0
                  };
                  return /* @__PURE__ */ ve.jsx(
                    Hu,
                    {
                      id: Te,
                      x: Re.x,
                      y: Re.y,
                      offsetX: Re.x,
                      offsetY: Re.y,
                      draggable: xe.draggable,
                      listening: xe.listening || xe.selectable,
                      onClick: () => {
                        xe.selectable && ae(Te);
                      },
                      onTap: () => {
                        xe.selectable && ae(Te);
                      },
                      onDragEnd: ($e) => ji(Te, $e.target),
                      onTransformEnd: ($e) => Vi(Te, $e.target),
                      children: ge.members.map(($e) => /* @__PURE__ */ ve.jsx(
                        L0,
                        {
                          obj: $e,
                          interaction: Xe,
                          splineShowControlPoints: w,
                          splineControlPointRadius: h,
                          onSelect: () => Ss($e),
                          onDragEnd: () => {
                          },
                          onTransformEnd: () => {
                          }
                        },
                        $e.id
                      ))
                    },
                    ge.groupId
                  );
                }),
                (_ == null ? void 0 : _.kind) === "freedraw" && /* @__PURE__ */ ve.jsx(
                  nl,
                  {
                    points: _.points,
                    stroke: Je,
                    strokeWidth: d,
                    tension: 0.5,
                    lineCap: "round",
                    lineJoin: "round",
                    listening: !1
                  }
                ),
                (_ == null ? void 0 : _.kind) === "line" && /* @__PURE__ */ ve.jsx(
                  nl,
                  {
                    points: [_.x1, _.y1, _.x2, _.y2],
                    stroke: Je,
                    strokeWidth: d,
                    listening: !1
                  }
                ),
                (_ == null ? void 0 : _.kind) === "rect" && /* @__PURE__ */ ve.jsx(
                  tl,
                  {
                    x: Math.min(_.x, _.x + _.width),
                    y: Math.min(_.y, _.y + _.height),
                    width: Math.abs(_.width),
                    height: Math.abs(_.height),
                    stroke: Je,
                    strokeWidth: d,
                    fill: we === "rect_crop" ? "transparent" : Qe,
                    dash: we === "rect_crop" ? [8, 4] : void 0,
                    listening: !1
                  }
                ),
                (_ == null ? void 0 : _.kind) === "circle" && /* @__PURE__ */ ve.jsx(
                  xf,
                  {
                    x: _.x,
                    y: _.y,
                    radius: _.radius,
                    stroke: Je,
                    strokeWidth: d,
                    fill: Qe,
                    listening: !1
                  }
                ),
                (_ == null ? void 0 : _.kind) === "polygon" && _.points.length >= 2 && /* @__PURE__ */ ve.jsx(
                  nl,
                  {
                    points: _.points,
                    stroke: Je,
                    strokeWidth: d,
                    fill: Qe,
                    closed: !1,
                    listening: !1
                  }
                ),
                (_ == null ? void 0 : _.kind) === "spline" && /* @__PURE__ */ ve.jsxs(ve.Fragment, { children: [
                  _.points.length >= 4 && /* @__PURE__ */ ve.jsx(
                    nl,
                    {
                      points: _.points,
                      stroke: Je,
                      strokeWidth: d,
                      tension: ff,
                      lineCap: "round",
                      lineJoin: "round",
                      listening: !1
                    }
                  ),
                  w && _.points.length >= 2 && /* @__PURE__ */ ve.jsx(
                    e1,
                    {
                      points: _.points,
                      stroke: Je,
                      radius: h,
                      groupId: "draft-spline-control-points"
                    }
                  )
                ] }),
                (we === "transform" || we === "rect_crop") && /* @__PURE__ */ ve.jsx(Pg, { ref: G })
              ] }) })
            ]
          }
        )
      ]
    }
  );
};
function G0(l) {
  const d = r1(l == null ? void 0 : l.tools);
  return {
    fillColor: (l == null ? void 0 : l.fillColor) ?? "#eee",
    strokeWidth: (l == null ? void 0 : l.strokeWidth) ?? 20,
    strokeColor: (l == null ? void 0 : l.strokeColor) ?? "black",
    backgroundColor: (l == null ? void 0 : l.backgroundColor) ?? "",
    backgroundImageURL: (l == null ? void 0 : l.backgroundImageURL) ?? null,
    realtimeUpdateStreamlit: (l == null ? void 0 : l.realtimeUpdateStreamlit) ?? !0,
    canvasHeight: (l == null ? void 0 : l.canvasHeight) ?? 400,
    canvasWidth: (l == null ? void 0 : l.canvasWidth) ?? 600,
    drawingMode: qu((l == null ? void 0 : l.drawingMode) ?? "freedraw", d),
    tools: d,
    displayToolPicker: (l == null ? void 0 : l.displayToolPicker) ?? !1,
    toolPickerStyle: i2(l == null ? void 0 : l.toolPickerStyle),
    displayColorPickers: (l == null ? void 0 : l.displayColorPickers) ?? !1,
    initialDrawing: (l == null ? void 0 : l.initialDrawing) ?? Cf(),
    displayToolbar: (l == null ? void 0 : l.displayToolbar) ?? !0,
    displayRadius: (l == null ? void 0 : l.displayRadius) ?? 3,
    enableViewportControls: (l == null ? void 0 : l.enableViewportControls) ?? !0,
    transformOptions: (l == null ? void 0 : l.transformOptions) ?? {},
    splineShowControlPoints: (l == null ? void 0 : l.splineShowControlPoints) ?? !1,
    splineControlPointRadius: (l == null ? void 0 : l.splineControlPointRadius) ?? 5
  };
}
const td = /* @__PURE__ */ new WeakMap();
function h2(l, d, v) {
  let L = G0(d), M = {
    image_data_url: null,
    json_data: null
  };
  const k = (g, m) => {
    g === "image_data_url" ? M = {
      ...M,
      image_data_url: typeof m == "string" ? m : null
    } : M = {
      ...M,
      json_data: m ?? null
    }, v == null || v(M);
  }, f = () => {
    let g = td.get(l);
    g || (g = A1.createRoot(l), td.set(l, g)), g.render(
      /* @__PURE__ */ ve.jsx(Ae.StrictMode, { children: /* @__PURE__ */ ve.jsx(f2, { ...L, setStateValue: k }) })
    );
  };
  return f(), {
    update(g) {
      L = G0({ ...L, ...g }), f();
    },
    destroy() {
      const g = td.get(l);
      g && (g.unmount(), td.delete(l)), l instanceof HTMLElement && l.replaceChildren();
    }
  };
}
const nd = /* @__PURE__ */ new WeakMap(), N2 = (l) => {
  const { data: d, parentElement: v, setStateValue: L } = l, M = v.querySelector(".react-root");
  if (!M)
    throw new Error("Unexpected: React root element not found");
  let k = nd.get(v);
  if (k)
    k.setStateValue = L, k.controller.update(d);
  else {
    const f = {
      setStateValue: L,
      controller: null
    };
    f.controller = h2(M, d, (g) => {
      f.setStateValue("image_data_url", g.image_data_url), f.setStateValue("json_data", g.json_data);
    }), nd.set(v, f), k = f;
  }
  return () => {
    const f = nd.get(v);
    f && (f.controller.destroy(), nd.delete(v));
  };
};
export {
  N2 as default
};
