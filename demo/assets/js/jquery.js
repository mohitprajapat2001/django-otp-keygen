/* ! jQuery v3.7.1 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!(function (e, t) {
  "use strict"
  typeof module === "object" && typeof module.exports === "object"
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document) throw new Error("jQuery requires a window with a document")
            return t(e)
          })
    : t(e)
})(typeof window !== "undefined" ? window : this, function (ie, e) {
  "use strict"
  var oe = [],
    r = Object.getPrototypeOf,
    ae = oe.slice,
    g = oe.flat
      ? function (e) {
          return oe.flat.call(e)
        }
      : function (e) {
          return oe.concat.apply([], e)
        },
    s = oe.push,
    se = oe.indexOf,
    n = {},
    i = n.toString,
    ue = n.hasOwnProperty,
    o = ue.toString,
    a = o.call(Object),
    le = {},
    v = function (e) {
      return (
        typeof e === "function" &&
        typeof e.nodeType !== "number" &&
        typeof e.item !== "function"
      )
    },
    y = function (e) {
      return e != null && e === e.window
    },
    C = ie.document,
    u = {type: !0, src: !0, nonce: !0, noModule: !0}
  function m(e, t, n) {
    var r,
      i,
      o = (n = n || C).createElement("script")
    if (((o.text = e), t))
      for (r in u)
        (i = t[r] || (t.getAttribute && t.getAttribute(r))) && o.setAttribute(r, i)
    n.head.appendChild(o).parentNode.removeChild(o)
  }
  function x(e) {
    return e == null
      ? String(e)
      : typeof e === "object" || typeof e === "function"
      ? n[i.call(e)] || "object"
      : typeof e
  }
  var t = "3.7.1",
    l = /HTML$/i,
    ce = function (e, t) {
      return new ce.fn.init(e, t)
    }
  function c(e) {
    var t = Boolean(e) && "length" in e && e.length,
      n = x(e)
    return (
      !v(e) &&
      !y(e) &&
      (n === "array" || t === 0 || (typeof t === "number" && t > 0 && t - 1 in e))
    )
  }
  function fe(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
  }
  ;(ce.fn = ce.prototype =
    {
      jquery: t,
      constructor: ce,
      length: 0,
      toArray: function () {
        return ae.call(this)
      },
      get: function (e) {
        return e == null ? ae.call(this) : e < 0 ? this[e + this.length] : this[e]
      },
      pushStack: function (e) {
        var t = ce.merge(this.constructor(), e)
        return (t.prevObject = this), t
      },
      each: function (e) {
        return ce.each(this, e)
      },
      map: function (n) {
        return this.pushStack(
          ce.map(this, function (e, t) {
            return n.call(e, t, e)
          })
        )
      },
      slice: function () {
        return this.pushStack(ae.apply(this, arguments))
      },
      first: function () {
        return this.eq(0)
      },
      last: function () {
        return this.eq(-1)
      },
      even: function () {
        return this.pushStack(
          ce.grep(this, function (e, t) {
            return (t + 1) % 2
          })
        )
      },
      odd: function () {
        return this.pushStack(
          ce.grep(this, function (e, t) {
            return t % 2
          })
        )
      },
      eq: function (e) {
        var t = this.length,
          n = Number(e) + (e < 0 ? t : 0)
        return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
      },
      end: function () {
        return this.prevObject || this.constructor()
      },
      push: s,
      sort: oe.sort,
      splice: oe.splice,
    }),
    (ce.extend = ce.fn.extend =
      function () {
        var e,
          t,
          n,
          r,
          i,
          o,
          a = arguments[0] || {},
          s = 1,
          u = arguments.length,
          l = !1
        for (
          typeof a === "boolean" && ((l = a), (a = arguments[s] || {}), s++),
            typeof a === "object" || v(a) || (a = {}),
            s === u && ((a = this), s--);
          s < u;
          s++
        )
          if ((e = arguments[s]) != null)
            for (t in e)
              (r = e[t]),
                t !== "__proto__" &&
                  a !== r &&
                  (l && r && (ce.isPlainObject(r) || (i = Array.isArray(r)))
                    ? ((n = a[t]),
                      (o =
                        i && !Array.isArray(n)
                          ? []
                          : i || ce.isPlainObject(n)
                          ? n
                          : {}),
                      (i = !1),
                      (a[t] = ce.extend(l, o, r)))
                    : void 0 !== r && (a[t] = r))
        return a
      }),
    ce.extend({
      expando: "jQuery" + (t + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e)
      },
      noop: function () {},
      isPlainObject: function (e) {
        var t, n
        return (
          !(!e || i.call(e) !== "[object Object]") &&
          (!(t = r(e)) ||
            (typeof (n = ue.call(t, "constructor") && t.constructor) === "function" &&
              o.call(n) === a))
        )
      },
      isEmptyObject: function (e) {
        var t
        for (t in e) return !1
        return !0
      },
      globalEval: function (e, t, n) {
        m(e, {nonce: t && t.nonce}, n)
      },
      each: function (e, t) {
        var n,
          r = 0
        if (c(e)) {
          for (n = e.length; r < n; r++) if (!1 === t.call(e[r], r, e[r])) break
        } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break
        return e
      },
      text: function (e) {
        var t,
          n = "",
          r = 0,
          i = e.nodeType
        if (!i) while ((t = e[r++])) n += ce.text(t)
        return i === 1 || i === 11
          ? e.textContent
          : i === 9
          ? e.documentElement.textContent
          : i === 3 || i === 4
          ? e.nodeValue
          : n
      },
      makeArray: function (e, t) {
        var n = t || []
        return (
          e != null &&
            (c(Object(e))
              ? ce.merge(n, typeof e === "string" ? [e] : e)
              : s.call(n, e)),
          n
        )
      },
      inArray: function (e, t, n) {
        return t == null ? -1 : se.call(t, e, n)
      },
      isXMLDoc: function (e) {
        var t = e && e.namespaceURI,
          n = e && (e.ownerDocument || e).documentElement
        return !l.test(t || (n && n.nodeName) || "HTML")
      },
      merge: function (e, t) {
        for (var n = Number(t.length), r = 0, i = e.length; r < n; r++) e[i++] = t[r]
        return (e.length = i), e
      },
      grep: function (e, t, n) {
        for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
          !t(e[i], i) !== a && r.push(e[i])
        return r
      },
      map: function (e, t, n) {
        var r,
          i,
          o = 0,
          a = []
        if (c(e))
          for (r = e.length; o < r; o++) (i = t(e[o], o, n)) != null && a.push(i)
        else for (o in e) (i = t(e[o], o, n)) != null && a.push(i)
        return g(a)
      },
      guid: 1,
      support: le,
    }),
    typeof Symbol === "function" && (ce.fn[Symbol.iterator] = oe[Symbol.iterator]),
    ce.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
      function (e, t) {
        n["[object " + t + "]"] = t.toLowerCase()
      }
    )
  var pe = oe.pop,
    de = oe.sort,
    he = oe.splice,
    ge = "[\\x20\\t\\r\\n\\f]",
    ve = new RegExp("^" + ge + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ge + "+$", "g")
  ce.contains = function (e, t) {
    var n = t && t.parentNode
    return (
      e === n ||
      !(
        !n ||
        n.nodeType !== 1 ||
        !(e.contains
          ? e.contains(n)
          : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n))
      )
    )
  }
  var f = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g
  function p(e, t) {
    return t
      ? e === "\0"
        ? "\ufffd"
        : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " "
      : "\\" + e
  }
  ce.escapeSelector = function (e) {
    return String(e).replace(f, p)
  }
  var ye = C,
    me = s
  !(function () {
    var e,
      b,
      w,
      o,
      a,
      T,
      r,
      C,
      d,
      i,
      k = me,
      S = ce.expando,
      E = 0,
      n = 0,
      s = W(),
      c = W(),
      u = W(),
      h = W(),
      l = function (e, t) {
        return e === t && (a = !0), 0
      },
      f =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      t = "(?:\\\\[\\da-fA-F]{1,6}" + ge + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
      p =
        "\\[" +
        ge +
        "*(" +
        t +
        ")(?:" +
        ge +
        "*([*^$|!~]?=)" +
        ge +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        t +
        "))|)" +
        ge +
        "*\\]",
      g =
        ":(" +
        t +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        p +
        ")*)|.*)\\)|)",
      v = new RegExp(ge + "+", "g"),
      y = new RegExp("^" + ge + "*," + ge + "*"),
      m = new RegExp("^" + ge + "*([>+~]|" + ge + ")" + ge + "*"),
      x = new RegExp(ge + "|>"),
      j = new RegExp(g),
      A = new RegExp("^" + t + "$"),
      D = {
        ID: new RegExp("^#(" + t + ")"),
        CLASS: new RegExp("^\\.(" + t + ")"),
        TAG: new RegExp("^(" + t + "|[*])"),
        ATTR: new RegExp("^" + p),
        PSEUDO: new RegExp("^" + g),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            ge +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            ge +
            "*(?:([+-]|)" +
            ge +
            "*(\\d+)|))" +
            ge +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + f + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            ge +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            ge +
            "*((?:-\\d)?\\d*)" +
            ge +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      N = /^(?:input|select|textarea|button)$/i,
      q = /^h\d$/i,
      L = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      H = /[+~]/,
      O = new RegExp("\\\\[\\da-fA-F]{1,6}" + ge + "?|\\\\([^\\r\\n\\f])", "g"),
      P = function (e, t) {
        var n = "0x" + e.slice(1) - 65536
        return (
          t ||
          (n < 0
            ? String.fromCharCode(n + 65536)
            : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
        )
      },
      M = function () {
        V()
      },
      R = J(
        function (e) {
          return !0 === e.disabled && fe(e, "fieldset")
        },
        {dir: "parentNode", next: "legend"}
      )
    try {
      k.apply((oe = ae.call(ye.childNodes)), ye.childNodes),
        oe[ye.childNodes.length].nodeType
    } catch (e) {
      k = {
        apply: function (e, t) {
          me.apply(e, ae.call(t))
        },
        call: function (e) {
          me.apply(e, ae.call(arguments, 1))
        },
      }
    }
    function I(t, e, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f = e && e.ownerDocument,
        p = e ? e.nodeType : 9
      if (
        ((n = n || []), typeof t !== "string" || !t || (p !== 1 && p !== 9 && p !== 11))
      )
        return n
      if (!r && (V(e), (e = e || T), C)) {
        if (p !== 11 && (u = L.exec(t)))
          if ((i = u[1])) {
            if (p === 9) {
              if (!(a = e.getElementById(i))) return n
              if (a.id === i) return k.call(n, a), n
            } else if (f && (a = f.getElementById(i)) && I.contains(e, a) && a.id === i)
              return k.call(n, a), n
          } else {
            if (u[2]) return k.apply(n, e.getElementsByTagName(t)), n
            if ((i = u[3]) && e.getElementsByClassName)
              return k.apply(n, e.getElementsByClassName(i)), n
          }
        if (!(h[t + " "] || (d && d.test(t)))) {
          if (((c = t), (f = e), p === 1 && (x.test(t) || m.test(t)))) {
            ;((f = (H.test(t) && U(e.parentNode)) || e) == e && le.scope) ||
              ((s = e.getAttribute("id"))
                ? (s = ce.escapeSelector(s))
                : e.setAttribute("id", (s = S))),
              (o = (l = Y(t)).length)
            while (o--) l[o] = (s ? "#" + s : ":scope") + " " + Q(l[o])
            c = l.join(",")
          }
          try {
            return k.apply(n, f.querySelectorAll(c)), n
          } catch (e) {
            h(t, !0)
          } finally {
            s === S && e.removeAttribute("id")
          }
        }
      }
      return re(t.replace(ve, "$1"), e, n, r)
    }
    function W() {
      var r = []
      return function e(t, n) {
        return r.push(t + " ") > b.cacheLength && delete e[r.shift()], (e[t + " "] = n)
      }
    }
    function F(e) {
      return (e[S] = !0), e
    }
    function $(e) {
      var t = T.createElement("fieldset")
      try {
        return Boolean(e(t))
      } catch (e) {
        return !1
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null)
      }
    }
    function B(t) {
      return function (e) {
        return fe(e, "input") && e.type === t
      }
    }
    function _(t) {
      return function (e) {
        return (fe(e, "input") || fe(e, "button")) && e.type === t
      }
    }
    function z(t) {
      return function (e) {
        return "form" in e
          ? e.parentNode && !1 === e.disabled
            ? "label" in e
              ? "label" in e.parentNode
                ? e.parentNode.disabled === t
                : e.disabled === t
              : e.isDisabled === t || (e.isDisabled !== !t && R(e) === t)
            : e.disabled === t
          : "label" in e && e.disabled === t
      }
    }
    function X(a) {
      return F(function (o) {
        return (
          (o = Number(o)),
          F(function (e, t) {
            var n,
              r = a([], e.length, o),
              i = r.length
            while (i--) e[(n = r[i])] && (e[n] = !(t[n] = e[n]))
          })
        )
      })
    }
    function U(e) {
      return e && typeof e.getElementsByTagName !== "undefined" && e
    }
    function V(e) {
      var t,
        n = e ? e.ownerDocument || e : ye
      return (
        n != T &&
          n.nodeType === 9 &&
          n.documentElement &&
          ((r = (T = n).documentElement),
          (C = !ce.isXMLDoc(T)),
          (i = r.matches || r.webkitMatchesSelector || r.msMatchesSelector),
          r.msMatchesSelector &&
            ye != T &&
            (t = T.defaultView) &&
            t.top !== t &&
            t.addEventListener("unload", M),
          (le.getById = $(function (e) {
            return (
              (r.appendChild(e).id = ce.expando),
              !T.getElementsByName || !T.getElementsByName(ce.expando).length
            )
          })),
          (le.disconnectedMatch = $(function (e) {
            return i.call(e, "*")
          })),
          (le.scope = $(function () {
            return T.querySelectorAll(":scope")
          })),
          (le.cssHas = $(function () {
            try {
              return T.querySelector(":has(*,:jqfake)"), !1
            } catch (e) {
              return !0
            }
          })),
          le.getById
            ? ((b.filter.ID = function (e) {
                var t = e.replace(O, P)
                return function (e) {
                  return e.getAttribute("id") === t
                }
              }),
              (b.find.ID = function (e, t) {
                if (typeof t.getElementById !== "undefined" && C) {
                  var n = t.getElementById(e)
                  return n ? [n] : []
                }
              }))
            : ((b.filter.ID = function (e) {
                var n = e.replace(O, P)
                return function (e) {
                  var t =
                    typeof e.getAttributeNode !== "undefined" &&
                    e.getAttributeNode("id")
                  return t && t.value === n
                }
              }),
              (b.find.ID = function (e, t) {
                if (typeof t.getElementById !== "undefined" && C) {
                  var n,
                    r,
                    i,
                    o = t.getElementById(e)
                  if (o) {
                    if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                    ;(i = t.getElementsByName(e)), (r = 0)
                    while ((o = i[r++]))
                      if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                  }
                  return []
                }
              })),
          (b.find.TAG = function (e, t) {
            return typeof t.getElementsByTagName !== "undefined"
              ? t.getElementsByTagName(e)
              : t.querySelectorAll(e)
          }),
          (b.find.CLASS = function (e, t) {
            if (typeof t.getElementsByClassName !== "undefined" && C)
              return t.getElementsByClassName(e)
          }),
          (d = []),
          $(function (e) {
            var t
            ;(r.appendChild(e).innerHTML =
              "<a id='" +
              S +
              "' href='' disabled='disabled'></a><select id='" +
              S +
              "-\r\\' disabled='disabled'><option selected=''></option></select>"),
              e.querySelectorAll("[selected]").length ||
                d.push("\\[" + ge + "*(?:value|" + f + ")"),
              e.querySelectorAll("[id~=" + S + "-]").length || d.push("~="),
              e.querySelectorAll("a#" + S + "+*").length || d.push(".#.+[+~]"),
              e.querySelectorAll(":checked").length || d.push(":checked"),
              (t = T.createElement("input")).setAttribute("type", "hidden"),
              e.appendChild(t).setAttribute("name", "D"),
              (r.appendChild(e).disabled = !0),
              e.querySelectorAll(":disabled").length !== 2 &&
                d.push(":enabled", ":disabled"),
              (t = T.createElement("input")).setAttribute("name", ""),
              e.appendChild(t),
              e.querySelectorAll("[name='']").length ||
                d.push("\\[" + ge + "*name" + ge + "*=" + ge + "*(?:''|\"\")")
          }),
          le.cssHas || d.push(":has"),
          (d = d.length && new RegExp(d.join("|"))),
          (l = function (e, t) {
            if (e === t) return (a = !0), 0
            var n = !e.compareDocumentPosition - !t.compareDocumentPosition
            return (
              n ||
              (1 &
                (n =
                  (e.ownerDocument || e) == (t.ownerDocument || t)
                    ? e.compareDocumentPosition(t)
                    : 1) ||
              (!le.sortDetached && t.compareDocumentPosition(e) === n)
                ? e === T || (e.ownerDocument == ye && I.contains(ye, e))
                  ? -1
                  : t === T || (t.ownerDocument == ye && I.contains(ye, t))
                  ? 1
                  : o
                  ? se.call(o, e) - se.call(o, t)
                  : 0
                : 4 & n
                ? -1
                : 1)
            )
          })),
        T
      )
    }
    for (e in ((I.matches = function (e, t) {
      return I(e, null, null, t)
    }),
    (I.matchesSelector = function (e, t) {
      if ((V(e), C && !h[t + " "] && (!d || !d.test(t))))
        try {
          var n = i.call(e, t)
          if (n || le.disconnectedMatch || (e.document && e.document.nodeType !== 11))
            return n
        } catch (e) {
          h(t, !0)
        }
      return I(t, T, null, [e]).length > 0
    }),
    (I.contains = function (e, t) {
      return (e.ownerDocument || e) != T && V(e), ce.contains(e, t)
    }),
    (I.attr = function (e, t) {
      ;(e.ownerDocument || e) != T && V(e)
      var n = b.attrHandle[t.toLowerCase()],
        r = n && ue.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !C) : void 0
      return void 0 !== r ? r : e.getAttribute(t)
    }),
    (I.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e)
    }),
    (ce.uniqueSort = function (e) {
      var t,
        n = [],
        r = 0,
        i = 0
      if (
        ((a = !le.sortStable), (o = !le.sortStable && ae.call(e, 0)), de.call(e, l), a)
      ) {
        while ((t = e[i++])) t === e[i] && (r = n.push(i))
        while (r--) he.call(e, n[r], 1)
      }
      return (o = null), e
    }),
    (ce.fn.uniqueSort = function () {
      return this.pushStack(ce.uniqueSort(ae.apply(this)))
    }),
    ((b = ce.expr =
      {
        cacheLength: 50,
        createPseudo: F,
        match: D,
        attrHandle: {},
        find: {},
        relative: {
          ">": {dir: "parentNode", first: !0},
          " ": {dir: "parentNode"},
          "+": {dir: "previousSibling", first: !0},
          "~": {dir: "previousSibling"},
        },
        preFilter: {
          ATTR: function (e) {
            return (
              (e[1] = e[1].replace(O, P)),
              (e[3] = (e[3] || e[4] || e[5] || "").replace(O, P)),
              e[2] === "~=" && (e[3] = " " + e[3] + " "),
              e.slice(0, 4)
            )
          },
          CHILD: function (e) {
            return (
              (e[1] = e[1].toLowerCase()),
              e[1].slice(0, 3) === "nth"
                ? (e[3] || I.error(e[0]),
                  (e[4] = Number(
                    e[4] ? e[5] + (e[6] || 1) : 2 * (e[3] === "even" || e[3] === "odd")
                  )),
                  (e[5] = Number(e[7] + e[8] || e[3] === "odd")))
                : e[3] && I.error(e[0]),
              e
            )
          },
          PSEUDO: function (e) {
            var t,
              n = !e[6] && e[2]
            return D.CHILD.test(e[0])
              ? null
              : (e[3]
                  ? (e[2] = e[4] || e[5] || "")
                  : n &&
                    j.test(n) &&
                    (t = Y(n, !0)) &&
                    (t = n.indexOf(")", n.length - t) - n.length) &&
                    ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                e.slice(0, 3))
          },
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(O, P).toLowerCase()
            return e === "*"
              ? function () {
                  return !0
                }
              : function (e) {
                  return fe(e, t)
                }
          },
          CLASS: function (e) {
            var t = s[e + " "]
            return (
              t ||
              ((t = new RegExp("(^|" + ge + ")" + e + "(" + ge + "|$)")) &&
                s(e, function (e) {
                  return t.test(
                    (typeof e.className === "string" && e.className) ||
                      (typeof e.getAttribute !== "undefined" &&
                        e.getAttribute("class")) ||
                      ""
                  )
                }))
            )
          },
          ATTR: function (n, r, i) {
            return function (e) {
              var t = I.attr(e, n)
              return t == null
                ? r === "!="
                : !r ||
                    ((t = String(t)),
                    r === "="
                      ? t === i
                      : r === "!="
                      ? t !== i
                      : r === "^="
                      ? i && t.indexOf(i) === 0
                      : r === "*="
                      ? i && t.indexOf(i) > -1
                      : r === "$="
                      ? i && t.slice(-i.length) === i
                      : r === "~="
                      ? (" " + t.replace(v, " ") + " ").indexOf(i) > -1
                      : r === "|=" && (t === i || t.slice(0, i.length + 1) === i + "-"))
            }
          },
          CHILD: function (d, e, t, h, g) {
            var v = d.slice(0, 3) !== "nth",
              y = d.slice(-4) !== "last",
              m = e === "of-type"
            return h === 1 && g === 0
              ? function (e) {
                  return Boolean(e.parentNode)
                }
              : function (e, t, n) {
                  var r,
                    i,
                    o,
                    a,
                    s,
                    u = v !== y ? "nextSibling" : "previousSibling",
                    l = e.parentNode,
                    c = m && e.nodeName.toLowerCase(),
                    f = !n && !m,
                    p = !1
                  if (l) {
                    if (v) {
                      while (u) {
                        o = e
                        while ((o = o[u]))
                          if (m ? fe(o, c) : o.nodeType === 1) return !1
                        s = u = d === "only" && !s && "nextSibling"
                      }
                      return !0
                    }
                    if (((s = [y ? l.firstChild : l.lastChild]), y && f)) {
                      ;(p =
                        (a =
                          (r = (i = l[S] || (l[S] = {}))[d] || [])[0] === E && r[1]) &&
                        r[2]),
                        (o = a && l.childNodes[a])
                      while ((o = (++a && o && o[u]) || (p = a = 0) || s.pop()))
                        if (o.nodeType === 1 && ++p && o === e) {
                          i[d] = [E, a, p]
                          break
                        }
                    } else if (
                      (f &&
                        (p = a =
                          (r = (i = e[S] || (e[S] = {}))[d] || [])[0] === E && r[1]),
                      !1 === p)
                    )
                      while ((o = (++a && o && o[u]) || (p = a = 0) || s.pop()))
                        if (
                          (m ? fe(o, c) : o.nodeType === 1) &&
                          ++p &&
                          (f && ((i = o[S] || (o[S] = {}))[d] = [E, p]), o === e)
                        )
                          break
                    return (p -= g) === h || (p % h == 0 && p / h >= 0)
                  }
                }
          },
          PSEUDO: function (e, o) {
            var t,
              a =
                b.pseudos[e] ||
                b.setFilters[e.toLowerCase()] ||
                I.error("unsupported pseudo: " + e)
            return a[S]
              ? a(o)
              : a.length > 1
              ? ((t = [e, e, "", o]),
                b.setFilters.hasOwnProperty(e.toLowerCase())
                  ? F(function (e, t) {
                      var n,
                        r = a(e, o),
                        i = r.length
                      while (i--) e[(n = se.call(e, r[i]))] = !(t[n] = r[i])
                    })
                  : function (e) {
                      return a(e, 0, t)
                    })
              : a
          },
        },
        pseudos: {
          not: F(function (e) {
            var r = [],
              i = [],
              s = ne(e.replace(ve, "$1"))
            return s[S]
              ? F(function (e, t, n, r) {
                  var i,
                    o = s(e, null, r, []),
                    a = e.length
                  while (a--) (i = o[a]) && (e[a] = !(t[a] = i))
                })
              : function (e, t, n) {
                  return (r[0] = e), s(r, null, n, i), (r[0] = null), !i.pop()
                }
          }),
          has: F(function (t) {
            return function (e) {
              return I(t, e).length > 0
            }
          }),
          contains: F(function (t) {
            return (
              (t = t.replace(O, P)),
              function (e) {
                return (e.textContent || ce.text(e)).indexOf(t) > -1
              }
            )
          }),
          lang: F(function (n) {
            return (
              A.test(n || "") || I.error("unsupported lang: " + n),
              (n = n.replace(O, P).toLowerCase()),
              function (e) {
                var t
                do {
                  if (
                    (t = C
                      ? e.lang
                      : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                  )
                    return (t = t.toLowerCase()) === n || t.indexOf(n + "-") === 0
                } while ((e = e.parentNode) && e.nodeType === 1)
                return !1
              }
            )
          }),
          target: function (e) {
            var t = ie.location && ie.location.hash
            return t && t.slice(1) === e.id
          },
          root: function (e) {
            return e === r
          },
          focus: function (e) {
            return (
              e ===
                (function () {
                  try {
                    return T.activeElement
                  } catch (e) {}
                })() &&
              T.hasFocus() &&
              Boolean(e.type || e.href || ~e.tabIndex)
            )
          },
          enabled: z(!1),
          disabled: z(!0),
          checked: function (e) {
            return (
              (fe(e, "input") && Boolean(e.checked)) ||
              (fe(e, "option") && Boolean(e.selected))
            )
          },
          selected: function (e) {
            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1
            return !0
          },
          parent: function (e) {
            return !b.pseudos.empty(e)
          },
          header: function (e) {
            return q.test(e.nodeName)
          },
          input: function (e) {
            return N.test(e.nodeName)
          },
          button: function (e) {
            return (fe(e, "input") && e.type === "button") || fe(e, "button")
          },
          text: function (e) {
            var t
            return (
              fe(e, "input") &&
              e.type === "text" &&
              ((t = e.getAttribute("type")) == null || t.toLowerCase() === "text")
            )
          },
          first: X(function () {
            return [0]
          }),
          last: X(function (e, t) {
            return [t - 1]
          }),
          eq: X(function (e, t, n) {
            return [n < 0 ? n + t : n]
          }),
          even: X(function (e, t) {
            for (var n = 0; n < t; n += 2) e.push(n)
            return e
          }),
          odd: X(function (e, t) {
            for (var n = 1; n < t; n += 2) e.push(n)
            return e
          }),
          lt: X(function (e, t, n) {
            var r
            for (r = n < 0 ? n + t : t < n ? t : n; --r >= 0; ) e.push(r)
            return e
          }),
          gt: X(function (e, t, n) {
            for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r)
            return e
          }),
        },
      }).pseudos.nth = b.pseudos.eq),
    {radio: !0, checkbox: !0, file: !0, password: !0, image: !0}))
      b.pseudos[e] = B(e)
    for (e in {submit: !0, reset: !0}) b.pseudos[e] = _(e)
    function G() {}
    function Y(e, t) {
      var n,
        r,
        i,
        o,
        a,
        s,
        u,
        l = c[e + " "]
      if (l) return t ? 0 : l.slice(0)
      ;(a = e), (s = []), (u = b.preFilter)
      while (a) {
        for (o in ((n && !(r = y.exec(a))) ||
          (r && (a = a.slice(r[0].length) || a), s.push((i = []))),
        (n = !1),
        (r = m.exec(a)) &&
          ((n = r.shift()),
          i.push({value: n, type: r[0].replace(ve, " ")}),
          (a = a.slice(n.length))),
        b.filter))
          !(r = D[o].exec(a)) ||
            (u[o] && !(r = u[o](r))) ||
            ((n = r.shift()),
            i.push({value: n, type: o, matches: r}),
            (a = a.slice(n.length)))
        if (!n) break
      }
      return t ? a.length : a ? I.error(e) : c(e, s).slice(0)
    }
    function Q(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value
      return r
    }
    function J(a, e, t) {
      var s = e.dir,
        u = e.next,
        l = u || s,
        c = t && l === "parentNode",
        f = n++
      return e.first
        ? function (e, t, n) {
            while ((e = e[s])) if (e.nodeType === 1 || c) return a(e, t, n)
            return !1
          }
        : function (e, t, n) {
            var r,
              i,
              o = [E, f]
            if (n) {
              while ((e = e[s])) if ((e.nodeType === 1 || c) && a(e, t, n)) return !0
            } else
              while ((e = e[s]))
                if (e.nodeType === 1 || c)
                  if (((i = e[S] || (e[S] = {})), u && fe(e, u))) e = e[s] || e
                  else {
                    if ((r = i[l]) && r[0] === E && r[1] === f) return (o[2] = r[2])
                    if (((i[l] = o)[2] = a(e, t, n))) return !0
                  }
            return !1
          }
    }
    function K(i) {
      return i.length > 1
        ? function (e, t, n) {
            var r = i.length
            while (r--) if (!i[r](e, t, n)) return !1
            return !0
          }
        : i[0]
    }
    function Z(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = t != null; s < u; s++)
        (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)))
      return a
    }
    function ee(d, h, g, v, y, e) {
      return (
        v && !v[S] && (v = ee(v)),
        y && !y[S] && (y = ee(y, e)),
        F(function (e, t, n, r) {
          var i,
            o,
            a,
            s,
            u = [],
            l = [],
            c = t.length,
            f =
              e ||
              (function (e, t, n) {
                for (var r = 0, i = t.length; r < i; r++) I(e, t[r], n)
                return n
              })(h || "*", n.nodeType ? [n] : n, []),
            p = !d || (!e && h) ? f : Z(f, u, d, n, r)
          if ((g ? g(p, (s = y || (e ? d : c || v) ? [] : t), n, r) : (s = p), v)) {
            ;(i = Z(s, l)), v(i, [], n, r), (o = i.length)
            while (o--) (a = i[o]) && (s[l[o]] = !(p[l[o]] = a))
          }
          if (e) {
            if (y || d) {
              if (y) {
                ;(i = []), (o = s.length)
                while (o--) (a = s[o]) && i.push((p[o] = a))
                y(null, (s = []), i, r)
              }
              o = s.length
              while (o--)
                (a = s[o]) &&
                  (i = y ? se.call(e, a) : u[o]) > -1 &&
                  (e[i] = !(t[i] = a))
            }
          } else (s = Z(s === t ? s.splice(c, s.length) : s)), y ? y(null, t, s, r) : k.apply(t, s)
        })
      )
    }
    function te(e) {
      for (
        var i,
          t,
          n,
          r = e.length,
          o = b.relative[e[0].type],
          a = o || b.relative[" "],
          s = o ? 1 : 0,
          u = J(
            function (e) {
              return e === i
            },
            a,
            !0
          ),
          l = J(
            function (e) {
              return se.call(i, e) > -1
            },
            a,
            !0
          ),
          c = [
            function (e, t, n) {
              var r =
                (!o && (n || t != w)) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n))
              return (i = null), r
            },
          ];
        s < r;
        s++
      )
        if ((t = b.relative[e[s].type])) c = [J(K(c), t)]
        else {
          if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
            for (n = ++s; n < r; n++) if (b.relative[e[n].type]) break
            return ee(
              s > 1 && K(c),
              s > 1 &&
                Q(
                  e.slice(0, s - 1).concat({value: e[s - 2].type === " " ? "*" : ""})
                ).replace(ve, "$1"),
              t,
              s < n && te(e.slice(s, n)),
              n < r && te((e = e.slice(n))),
              n < r && Q(e)
            )
          }
          c.push(t)
        }
      return K(c)
    }
    function ne(e, t) {
      var n,
        v,
        y,
        m,
        x,
        r,
        i = [],
        o = [],
        a = u[e + " "]
      if (!a) {
        t || (t = Y(e)), (n = t.length)
        while (n--) (a = te(t[n]))[S] ? i.push(a) : o.push(a)
        ;(a = u(
          e,
          ((v = o),
          (m = (y = i).length > 0),
          (x = v.length > 0),
          (r = function (e, t, n, r, i) {
            var o,
              a,
              s,
              u = 0,
              l = "0",
              c = e && [],
              f = [],
              p = w,
              d = e || (x && b.find.TAG("*", i)),
              h = (E += p == null ? 1 : Math.random() || 0.1),
              g = d.length
            for (i && (w = t == T || t || i); l !== g && (o = d[l]) != null; l++) {
              if (x && o) {
                ;(a = 0), t || o.ownerDocument == T || (V(o), (n = !C))
                while ((s = v[a++]))
                  if (s(o, t || T, n)) {
                    k.call(r, o)
                    break
                  }
                i && (E = h)
              }
              m && ((o = !s && o) && u--, e && c.push(o))
            }
            if (((u += l), m && l !== u)) {
              a = 0
              while ((s = y[a++])) s(c, f, t, n)
              if (e) {
                if (u > 0) while (l--) c[l] || f[l] || (f[l] = pe.call(r))
                f = Z(f)
              }
              k.apply(r, f),
                i && !e && f.length > 0 && u + y.length > 1 && ce.uniqueSort(r)
            }
            return i && ((E = h), (w = p)), c
          }),
          m ? F(r) : r)
        )).selector = e
      }
      return a
    }
    function re(e, t, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l = typeof e === "function" && e,
        c = !r && Y((e = l.selector || e))
      if (((n = n || []), c.length === 1)) {
        if (
          (o = c[0] = c[0].slice(0)).length > 2 &&
          (a = o[0]).type === "ID" &&
          t.nodeType === 9 &&
          C &&
          b.relative[o[1].type]
        ) {
          if (!(t = (b.find.ID(a.matches[0].replace(O, P), t) || [])[0])) return n
          l && (t = t.parentNode), (e = e.slice(o.shift().value.length))
        }
        i = D.needsContext.test(e) ? 0 : o.length
        while (i--) {
          if (((a = o[i]), b.relative[(s = a.type)])) break
          if (
            (u = b.find[s]) &&
            (r = u(
              a.matches[0].replace(O, P),
              (H.test(o[0].type) && U(t.parentNode)) || t
            ))
          ) {
            if ((o.splice(i, 1), !(e = r.length && Q(o)))) return k.apply(n, r), n
            break
          }
        }
      }
      return (l || ne(e, c))(r, t, !C, n, !t || (H.test(e) && U(t.parentNode)) || t), n
    }
    ;(G.prototype = b.filters = b.pseudos),
      (b.setFilters = new G()),
      (le.sortStable = S.split("").sort(l).join("") === S),
      V(),
      (le.sortDetached = $(function (e) {
        return 1 & e.compareDocumentPosition(T.createElement("fieldset"))
      })),
      (ce.find = I),
      (ce.expr[":"] = ce.expr.pseudos),
      (ce.unique = ce.uniqueSort),
      (I.compile = ne),
      (I.select = re),
      (I.setDocument = V),
      (I.tokenize = Y),
      (I.escape = ce.escapeSelector),
      (I.getText = ce.text),
      (I.isXML = ce.isXMLDoc),
      (I.selectors = ce.expr),
      (I.support = ce.support),
      (I.uniqueSort = ce.uniqueSort)
  })()
  var d = function (e, t, n) {
      var r = [],
        i = void 0 !== n
      while ((e = e[t]) && e.nodeType !== 9)
        if (e.nodeType === 1) {
          if (i && ce(e).is(n)) break
          r.push(e)
        }
      return r
    },
    h = function (e, t) {
      for (var n = []; e; e = e.nextSibling) e.nodeType === 1 && e !== t && n.push(e)
      return n
    },
    b = ce.expr.match.needsContext,
    w = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i
  function T(e, n, r) {
    return v(n)
      ? ce.grep(e, function (e, t) {
          return Boolean(n.call(e, t, e)) !== r
        })
      : n.nodeType
      ? ce.grep(e, function (e) {
          return (e === n) !== r
        })
      : typeof n !== "string"
      ? ce.grep(e, function (e) {
          return se.call(n, e) > -1 !== r
        })
      : ce.filter(n, e, r)
  }
  ;(ce.filter = function (e, t, n) {
    var r = t[0]
    return (
      n && (e = ":not(" + e + ")"),
      t.length === 1 && r.nodeType === 1
        ? ce.find.matchesSelector(r, e)
          ? [r]
          : []
        : ce.find.matches(
            e,
            ce.grep(t, function (e) {
              return e.nodeType === 1
            })
          )
    )
  }),
    ce.fn.extend({
      find: function (e) {
        var t,
          n,
          r = this.length,
          i = this
        if (typeof e !== "string")
          return this.pushStack(
            ce(e).filter(function () {
              for (t = 0; t < r; t++) if (ce.contains(i[t], this)) return !0
            })
          )
        for (n = this.pushStack([]), t = 0; t < r; t++) ce.find(e, i[t], n)
        return r > 1 ? ce.uniqueSort(n) : n
      },
      filter: function (e) {
        return this.pushStack(T(this, e || [], !1))
      },
      not: function (e) {
        return this.pushStack(T(this, e || [], !0))
      },
      is: function (e) {
        return Boolean(
          T(this, typeof e === "string" && b.test(e) ? ce(e) : e || [], !1).length
        )
      },
    })
  var k,
    S = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/
  ;((ce.fn.init = function (e, t, n) {
    var r, i
    if (!e) return this
    if (((n = n || k), typeof e === "string")) {
      if (
        !(r =
          e[0] === "<" && e[e.length - 1] === ">" && e.length >= 3
            ? [null, e, null]
            : S.exec(e)) ||
        (!r[1] && t)
      )
        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e)
      if (r[1]) {
        if (
          ((t = t instanceof ce ? t[0] : t),
          ce.merge(
            this,
            ce.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : C, !0)
          ),
          w.test(r[1]) && ce.isPlainObject(t))
        )
          for (r in t) v(this[r]) ? this[r](t[r]) : this.attr(r, t[r])
        return this
      }
      return (i = C.getElementById(r[2])) && ((this[0] = i), (this.length = 1)), this
    }
    return e.nodeType
      ? ((this[0] = e), (this.length = 1), this)
      : v(e)
      ? void 0 !== n.ready
        ? n.ready(e)
        : e(ce)
      : ce.makeArray(e, this)
  }).prototype = ce.fn),
    (k = ce(C))
  var E = /^(?:parents|prev(?:Until|All))/,
    j = {children: !0, contents: !0, next: !0, prev: !0}
  function A(e, t) {
    while ((e = e[t]) && e.nodeType !== 1);
    return e
  }
  ce.fn.extend({
    has: function (e) {
      var t = ce(e, this),
        n = t.length
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (ce.contains(this, t[e])) return !0
      })
    },
    closest: function (e, t) {
      var n,
        r = 0,
        i = this.length,
        o = [],
        a = typeof e !== "string" && ce(e)
      if (!b.test(e))
        for (; r < i; r++)
          for (n = this[r]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (a ? a.index(n) > -1 : n.nodeType === 1 && ce.find.matchesSelector(n, e))
            ) {
              o.push(n)
              break
            }
      return this.pushStack(o.length > 1 ? ce.uniqueSort(o) : o)
    },
    index: function (e) {
      return e
        ? typeof e === "string"
          ? se.call(ce(e), this[0])
          : se.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1
    },
    add: function (e, t) {
      return this.pushStack(ce.uniqueSort(ce.merge(this.get(), ce(e, t))))
    },
    addBack: function (e) {
      return this.add(e == null ? this.prevObject : this.prevObject.filter(e))
    },
  }),
    ce.each(
      {
        parent: function (e) {
          var t = e.parentNode
          return t && t.nodeType !== 11 ? t : null
        },
        parents: function (e) {
          return d(e, "parentNode")
        },
        parentsUntil: function (e, t, n) {
          return d(e, "parentNode", n)
        },
        next: function (e) {
          return A(e, "nextSibling")
        },
        prev: function (e) {
          return A(e, "previousSibling")
        },
        nextAll: function (e) {
          return d(e, "nextSibling")
        },
        prevAll: function (e) {
          return d(e, "previousSibling")
        },
        nextUntil: function (e, t, n) {
          return d(e, "nextSibling", n)
        },
        prevUntil: function (e, t, n) {
          return d(e, "previousSibling", n)
        },
        siblings: function (e) {
          return h((e.parentNode || {}).firstChild, e)
        },
        children: function (e) {
          return h(e.firstChild)
        },
        contents: function (e) {
          return e.contentDocument != null && r(e.contentDocument)
            ? e.contentDocument
            : (fe(e, "template") && (e = e.content || e), ce.merge([], e.childNodes))
        },
      },
      function (r, i) {
        ce.fn[r] = function (e, t) {
          var n = ce.map(this, i, e)
          return (
            r.slice(-5) !== "Until" && (t = e),
            t && typeof t === "string" && (n = ce.filter(t, n)),
            this.length > 1 && (j[r] || ce.uniqueSort(n), E.test(r) && n.reverse()),
            this.pushStack(n)
          )
        }
      }
    )
  var D = /[^\x20\t\r\n\f]+/g
  function N(e) {
    return e
  }
  function q(e) {
    throw e
  }
  function L(e, t, n, r) {
    var i
    try {
      e && v((i = e.promise))
        ? i.call(e).done(t).fail(n)
        : e && v((i = e.then))
        ? i.call(e, t, n)
        : t.apply(void 0, [e].slice(r))
    } catch (e) {
      n.apply(void 0, [e])
    }
  }
  ;(ce.Callbacks = function (r) {
    var e, n
    r =
      typeof r === "string"
        ? ((e = r),
          (n = {}),
          ce.each(e.match(D) || [], function (e, t) {
            n[t] = !0
          }),
          n)
        : ce.extend({}, r)
    var i,
      t,
      o,
      a,
      s = [],
      u = [],
      l = -1,
      c = function () {
        for (a = a || r.once, o = i = !0; u.length; l = -1) {
          t = u.shift()
          while (++l < s.length)
            !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && ((l = s.length), (t = !1))
        }
        r.memory || (t = !1), (i = !1), a && (s = t ? [] : "")
      },
      f = {
        add: function () {
          return (
            s &&
              (t && !i && ((l = s.length - 1), u.push(t)),
              (function n(e) {
                ce.each(e, function (e, t) {
                  v(t)
                    ? (r.unique && f.has(t)) || s.push(t)
                    : t && t.length && x(t) !== "string" && n(t)
                })
              })(arguments),
              t && !i && c()),
            this
          )
        },
        remove: function () {
          return (
            ce.each(arguments, function (e, t) {
              var n
              while ((n = ce.inArray(t, s, n)) > -1) s.splice(n, 1), n <= l && l--
            }),
            this
          )
        },
        has: function (e) {
          return e ? ce.inArray(e, s) > -1 : s.length > 0
        },
        empty: function () {
          return s && (s = []), this
        },
        disable: function () {
          return (a = u = []), (s = t = ""), this
        },
        disabled: function () {
          return !s
        },
        lock: function () {
          return (a = u = []), t || i || (s = t = ""), this
        },
        locked: function () {
          return Boolean(a)
        },
        fireWith: function (e, t) {
          return (
            a || ((t = [e, (t = t || []).slice ? t.slice() : t]), u.push(t), i || c()),
            this
          )
        },
        fire: function () {
          return f.fireWith(this, arguments), this
        },
        fired: function () {
          return Boolean(o)
        },
      }
    return f
  }),
    ce.extend({
      Deferred: function (e) {
        var o = [
            ["notify", "progress", ce.Callbacks("memory"), ce.Callbacks("memory"), 2],
            [
              "resolve",
              "done",
              ce.Callbacks("once memory"),
              ce.Callbacks("once memory"),
              0,
              "resolved",
            ],
            [
              "reject",
              "fail",
              ce.Callbacks("once memory"),
              ce.Callbacks("once memory"),
              1,
              "rejected",
            ],
          ],
          i = "pending",
          a = {
            state: function () {
              return i
            },
            always: function () {
              return s.done(arguments).fail(arguments), this
            },
            catch: function (e) {
              return a.then(null, e)
            },
            pipe: function () {
              var i = arguments
              return ce
                .Deferred(function (r) {
                  ce.each(o, function (e, t) {
                    var n = v(i[t[4]]) && i[t[4]]
                    s[t[1]](function () {
                      var e = n && n.apply(this, arguments)
                      e && v(e.promise)
                        ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject)
                        : r[t[0] + "With"](this, n ? [e] : arguments)
                    })
                  }),
                    (i = null)
                })
                .promise()
            },
            then: function (t, n, r) {
              var u = 0
              function l(i, o, a, s) {
                return function () {
                  var n = this,
                    r = arguments,
                    e = function () {
                      var e, t
                      if (!(i < u)) {
                        if ((e = a.apply(n, r)) === o.promise())
                          throw new TypeError("Thenable self-resolution")
                        ;(t =
                          e &&
                          (typeof e === "object" || typeof e === "function") &&
                          e.then),
                          v(t)
                            ? s
                              ? t.call(e, l(u, o, N, s), l(u, o, q, s))
                              : (u++,
                                t.call(
                                  e,
                                  l(u, o, N, s),
                                  l(u, o, q, s),
                                  l(u, o, N, o.notifyWith)
                                ))
                            : (a !== N && ((n = void 0), (r = [e])),
                              (s || o.resolveWith)(n, r))
                      }
                    },
                    t = s
                      ? e
                      : function () {
                          try {
                            e()
                          } catch (e) {
                            ce.Deferred.exceptionHook &&
                              ce.Deferred.exceptionHook(e, t.error),
                              u <= i + 1 &&
                                (a !== q && ((n = void 0), (r = [e])),
                                o.rejectWith(n, r))
                          }
                        }
                  i
                    ? t()
                    : (ce.Deferred.getErrorHook
                        ? (t.error = ce.Deferred.getErrorHook())
                        : ce.Deferred.getStackHook &&
                          (t.error = ce.Deferred.getStackHook()),
                      ie.setTimeout(t))
                }
              }
              return ce
                .Deferred(function (e) {
                  o[0][3].add(l(0, e, v(r) ? r : N, e.notifyWith)),
                    o[1][3].add(l(0, e, v(t) ? t : N)),
                    o[2][3].add(l(0, e, v(n) ? n : q))
                })
                .promise()
            },
            promise: function (e) {
              return e != null ? ce.extend(e, a) : a
            },
          },
          s = {}
        return (
          ce.each(o, function (e, t) {
            var n = t[2],
              r = t[5]
            ;(a[t[1]] = n.add),
              r &&
                n.add(
                  function () {
                    i = r
                  },
                  o[3 - e][2].disable,
                  o[3 - e][3].disable,
                  o[0][2].lock,
                  o[0][3].lock
                ),
              n.add(t[3].fire),
              (s[t[0]] = function () {
                return s[t[0] + "With"](this === s ? void 0 : this, arguments), this
              }),
              (s[t[0] + "With"] = n.fireWith)
          }),
          a.promise(s),
          e && e.call(s, s),
          s
        )
      },
      when: function (e) {
        var n = arguments.length,
          t = n,
          r = Array(t),
          i = ae.call(arguments),
          o = ce.Deferred(),
          a = function (t) {
            return function (e) {
              ;(r[t] = this),
                (i[t] = arguments.length > 1 ? ae.call(arguments) : e),
                --n || o.resolveWith(r, i)
            }
          }
        if (
          n <= 1 &&
          (L(e, o.done(a(t)).resolve, o.reject, !n),
          o.state() === "pending" || v(i[t] && i[t].then))
        )
          return o.then()
        while (t--) L(i[t], a(t), o.reject)
        return o.promise()
      },
    })
  var H = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/
  ;(ce.Deferred.exceptionHook = function (e, t) {
    ie.console &&
      ie.console.warn &&
      e &&
      H.test(e.name) &&
      ie.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
  }),
    (ce.readyException = function (e) {
      ie.setTimeout(function () {
        throw e
      })
    })
  var O = ce.Deferred()
  function P() {
    C.removeEventListener("DOMContentLoaded", P),
      ie.removeEventListener("load", P),
      ce.ready()
  }
  ;(ce.fn.ready = function (e) {
    return (
      O.then(e).catch(function (e) {
        ce.readyException(e)
      }),
      this
    )
  }),
    ce.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        ;(!0 === e ? --ce.readyWait : ce.isReady) ||
          ((ce.isReady = !0) !== e && --ce.readyWait > 0) ||
          O.resolveWith(C, [ce])
      },
    }),
    (ce.ready.then = O.then),
    C.readyState === "complete" ||
    (C.readyState !== "loading" && !C.documentElement.doScroll)
      ? ie.setTimeout(ce.ready)
      : (C.addEventListener("DOMContentLoaded", P), ie.addEventListener("load", P))
  var M = function (e, t, n, r, i, o, a) {
      var s = 0,
        u = e.length,
        l = n == null
      if (x(n) === "object") for (s in ((i = !0), n)) M(e, t, s, n[s], !0, o, a)
      else if (
        void 0 !== r &&
        ((i = !0),
        v(r) || (a = !0),
        l &&
          (a
            ? (t.call(e, r), (t = null))
            : ((l = t),
              (t = function (e, t, n) {
                return l.call(ce(e), n)
              }))),
        t)
      )
        for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)))
      return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
    },
    R = /^-ms-/,
    I = /-([a-z])/g
  function W(e, t) {
    return t.toUpperCase()
  }
  function F(e) {
    return e.replace(R, "ms-").replace(I, W)
  }
  var $ = function (e) {
    return e.nodeType === 1 || e.nodeType === 9 || !Number(e.nodeType)
  }
  function B() {
    this.expando = ce.expando + B.uid++
  }
  ;(B.uid = 1),
    (B.prototype = {
      cache: function (e) {
        var t = e[this.expando]
        return (
          t ||
            ((t = {}),
            $(e) &&
              (e.nodeType
                ? (e[this.expando] = t)
                : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0,
                  }))),
          t
        )
      },
      set: function (e, t, n) {
        var r,
          i = this.cache(e)
        if (typeof t === "string") i[F(t)] = n
        else for (r in t) i[F(r)] = t[r]
        return i
      },
      get: function (e, t) {
        return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][F(t)]
      },
      access: function (e, t, n) {
        return void 0 === t || (t && typeof t === "string" && void 0 === n)
          ? this.get(e, t)
          : (this.set(e, t, n), void 0 !== n ? n : t)
      },
      remove: function (e, t) {
        var n,
          r = e[this.expando]
        if (void 0 !== r) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t)
              ? t.map(F)
              : (t = F(t)) in r
              ? [t]
              : t.match(D) || []).length
            while (n--) delete r[t[n]]
          }
          ;(void 0 === t || ce.isEmptyObject(r)) &&
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando])
        }
      },
      hasData: function (e) {
        var t = e[this.expando]
        return void 0 !== t && !ce.isEmptyObject(t)
      },
    })
  var _ = new B(),
    z = new B(),
    X = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    U = /[A-Z]/g
  function V(e, t, n) {
    var r, i
    if (void 0 === n && e.nodeType === 1)
      if (
        ((r = "data-" + t.replace(U, "-$&").toLowerCase()),
        typeof (n = e.getAttribute(r)) === "string")
      ) {
        try {
          n =
            (i = n) === "true" ||
            (i !== "false" &&
              (i === "null"
                ? null
                : i === String(Number(i))
                ? Number(i)
                : X.test(i)
                ? JSON.parse(i)
                : i))
        } catch (e) {}
        z.set(e, t, n)
      } else n = void 0
    return n
  }
  ce.extend({
    hasData: function (e) {
      return z.hasData(e) || _.hasData(e)
    },
    data: function (e, t, n) {
      return z.access(e, t, n)
    },
    removeData: function (e, t) {
      z.remove(e, t)
    },
    _data: function (e, t, n) {
      return _.access(e, t, n)
    },
    _removeData: function (e, t) {
      _.remove(e, t)
    },
  }),
    ce.fn.extend({
      data: function (n, e) {
        var t,
          r,
          i,
          o = this[0],
          a = o && o.attributes
        if (void 0 === n) {
          if (
            this.length &&
            ((i = z.get(o)), o.nodeType === 1 && !_.get(o, "hasDataAttrs"))
          ) {
            t = a.length
            while (t--)
              a[t] &&
                (r = a[t].name).indexOf("data-") === 0 &&
                ((r = F(r.slice(5))), V(o, r, i[r]))
            _.set(o, "hasDataAttrs", !0)
          }
          return i
        }
        return typeof n === "object"
          ? this.each(function () {
              z.set(this, n)
            })
          : M(
              this,
              function (e) {
                var t
                if (o && void 0 === e)
                  return void 0 !== (t = z.get(o, n))
                    ? t
                    : void 0 !== (t = V(o, n))
                    ? t
                    : void 0
                this.each(function () {
                  z.set(this, n, e)
                })
              },
              null,
              e,
              arguments.length > 1,
              null,
              !0
            )
      },
      removeData: function (e) {
        return this.each(function () {
          z.remove(this, e)
        })
      },
    }),
    ce.extend({
      queue: function (e, t, n) {
        var r
        if (e)
          return (
            (t = (t || "fx") + "queue"),
            (r = _.get(e, t)),
            n &&
              (!r || Array.isArray(n)
                ? (r = _.access(e, t, ce.makeArray(n)))
                : r.push(n)),
            r || []
          )
      },
      dequeue: function (e, t) {
        t = t || "fx"
        var n = ce.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = ce._queueHooks(e, t)
        i === "inprogress" && ((i = n.shift()), r--),
          i &&
            (t === "fx" && n.unshift("inprogress"),
            delete o.stop,
            i.call(
              e,
              function () {
                ce.dequeue(e, t)
              },
              o
            )),
          !r && o && o.empty.fire()
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks"
        return (
          _.get(e, n) ||
          _.access(e, n, {
            empty: ce.Callbacks("once memory").add(function () {
              _.remove(e, [t + "queue", n])
            }),
          })
        )
      },
    }),
    ce.fn.extend({
      queue: function (t, n) {
        var e = 2
        return (
          typeof t !== "string" && ((n = t), (t = "fx"), e--),
          arguments.length < e
            ? ce.queue(this[0], t)
            : void 0 === n
            ? this
            : this.each(function () {
                var e = ce.queue(this, t, n)
                ce._queueHooks(this, t),
                  t === "fx" && e[0] !== "inprogress" && ce.dequeue(this, t)
              })
        )
      },
      dequeue: function (e) {
        return this.each(function () {
          ce.dequeue(this, e)
        })
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", [])
      },
      promise: function (e, t) {
        var n,
          r = 1,
          i = ce.Deferred(),
          o = this,
          a = this.length,
          s = function () {
            --r || i.resolveWith(o, [o])
          }
        typeof e !== "string" && ((t = e), (e = void 0)), (e = e || "fx")
        while (a--)
          (n = _.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s))
        return s(), i.promise(t)
      },
    })
  var G = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    Y = new RegExp("^(?:([+-])=|)(" + G + ")([a-z%]*)$", "i"),
    Q = ["Top", "Right", "Bottom", "Left"],
    J = C.documentElement,
    K = function (e) {
      return ce.contains(e.ownerDocument, e)
    },
    Z = {composed: !0}
  J.getRootNode &&
    (K = function (e) {
      return ce.contains(e.ownerDocument, e) || e.getRootNode(Z) === e.ownerDocument
    })
  var ee = function (e, t) {
    return (
      (e = t || e).style.display === "none" ||
      (e.style.display === "" && K(e) && ce.css(e, "display") === "none")
    )
  }
  function te(e, t, n, r) {
    var i,
      o,
      a = 20,
      s = r
        ? function () {
            return r.cur()
          }
        : function () {
            return ce.css(e, t, "")
          },
      u = s(),
      l = (n && n[3]) || (ce.cssNumber[t] ? "" : "px"),
      c =
        e.nodeType &&
        (ce.cssNumber[t] || (l !== "px" && Number(u))) &&
        Y.exec(ce.css(e, t))
    if (c && c[3] !== l) {
      ;(u /= 2), (l = l || c[3]), (c = Number(u) || 1)
      while (a--)
        ce.style(e, t, c + l),
          (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0),
          (c /= o)
      ;(c *= 2), ce.style(e, t, c + l), (n = n || [])
    }
    return (
      n &&
        ((c = Number(c) || Number(u) || 0),
        (i = n[1] ? c + (n[1] + 1) * n[2] : Number(n[2])),
        r && ((r.unit = l), (r.start = c), (r.end = i))),
      i
    )
  }
  var ne = {}
  function re(e, t) {
    for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)
      (r = e[c]).style &&
        ((n = r.style.display),
        t
          ? (n === "none" &&
              ((l[c] = _.get(r, "display") || null), l[c] || (r.style.display = "")),
            r.style.display === "" &&
              ee(r) &&
              (l[c] =
                ((u = a = o = void 0),
                (a = (i = r).ownerDocument),
                (s = i.nodeName),
                (u = ne[s]) ||
                  ((o = a.body.appendChild(a.createElement(s))),
                  (u = ce.css(o, "display")),
                  o.parentNode.removeChild(o),
                  u === "none" && (u = "block"),
                  (ne[s] = u)))))
          : n !== "none" && ((l[c] = "none"), _.set(r, "display", n)))
    for (c = 0; c < f; c++) l[c] != null && (e[c].style.display = l[c])
    return e
  }
  ce.fn.extend({
    show: function () {
      return re(this, !0)
    },
    hide: function () {
      return re(this)
    },
    toggle: function (e) {
      return typeof e === "boolean"
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            ee(this) ? ce(this).show() : ce(this).hide()
          })
    },
  })
  var xe,
    be,
    we = /^(?:checkbox|radio)$/i,
    Te = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    Ce = /^$|^module$|\/(?:java|ecma)script/i
  ;(xe = C.createDocumentFragment().appendChild(C.createElement("div"))),
    (be = C.createElement("input")).setAttribute("type", "radio"),
    be.setAttribute("checked", "checked"),
    be.setAttribute("name", "t"),
    xe.appendChild(be),
    (le.checkClone = xe.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (xe.innerHTML = "<textarea>x</textarea>"),
    (le.noCloneChecked = Boolean(xe.cloneNode(!0).lastChild.defaultValue)),
    (xe.innerHTML = "<option></option>"),
    (le.option = Boolean(xe.lastChild))
  var ke = {
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""],
  }
  function Se(e, t) {
    var n
    return (
      (n =
        typeof e.getElementsByTagName !== "undefined"
          ? e.getElementsByTagName(t || "*")
          : typeof e.querySelectorAll !== "undefined"
          ? e.querySelectorAll(t || "*")
          : []),
      void 0 === t || (t && fe(e, t)) ? ce.merge([e], n) : n
    )
  }
  function Ee(e, t) {
    for (var n = 0, r = e.length; n < r; n++)
      _.set(e[n], "globalEval", !t || _.get(t[n], "globalEval"))
  }
  ;(ke.tbody = ke.tfoot = ke.colgroup = ke.caption = ke.thead),
    (ke.th = ke.td),
    le.option ||
      (ke.optgroup = ke.option = [1, "<select multiple='multiple'>", "</select>"])
  var je = /<|&#?\w+;/
  function Ae(e, t, n, r, i) {
    for (
      var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length;
      d < h;
      d++
    )
      if ((o = e[d]) || o === 0)
        if (x(o) === "object") ce.merge(p, o.nodeType ? [o] : o)
        else if (je.test(o)) {
          ;(a = a || f.appendChild(t.createElement("div"))),
            (s = (Te.exec(o) || ["", ""])[1].toLowerCase()),
            (u = ke[s] || ke._default),
            (a.innerHTML = u[1] + ce.htmlPrefilter(o) + u[2]),
            (c = u[0])
          while (c--) a = a.lastChild
          ce.merge(p, a.childNodes), ((a = f.firstChild).textContent = "")
        } else p.push(t.createTextNode(o))
    ;(f.textContent = ""), (d = 0)
    while ((o = p[d++]))
      if (r && ce.inArray(o, r) > -1) i && i.push(o)
      else if (((l = K(o)), (a = Se(f.appendChild(o), "script")), l && Ee(a), n)) {
        c = 0
        while ((o = a[c++])) Ce.test(o.type || "") && n.push(o)
      }
    return f
  }
  var De = /^([^.]*)(?:\.(.+)|)/
  function Ne() {
    return !0
  }
  function qe() {
    return !1
  }
  function Le(e, t, n, r, i, o) {
    var a, s
    if (typeof t === "object") {
      for (s in (typeof n !== "string" && ((r = r || n), (n = void 0)), t))
        Le(e, s, n, r, t[s], o)
      return e
    }
    if (
      (r == null && i == null
        ? ((i = n), (r = n = void 0))
        : i == null &&
          (typeof n === "string"
            ? ((i = r), (r = void 0))
            : ((i = r), (r = n), (n = void 0))),
      !1 === i)
    )
      i = qe
    else if (!i) return e
    return (
      o === 1 &&
        ((a = i),
        ((i = function (e) {
          return ce().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = ce.guid++))),
      e.each(function () {
        ce.event.add(this, t, i, r, n)
      })
    )
  }
  function He(e, r, t) {
    t
      ? (_.set(e, r, !1),
        ce.event.add(e, r, {
          namespace: !1,
          handler: function (e) {
            var t,
              n = _.get(this, r)
            if (1 & e.isTrigger && this[r]) {
              if (n) (ce.event.special[r] || {}).delegateType && e.stopPropagation()
              else if (
                ((n = ae.call(arguments)),
                _.set(this, r, n),
                this[r](),
                (t = _.get(this, r)),
                _.set(this, r, !1),
                n !== t)
              )
                return e.stopImmediatePropagation(), e.preventDefault(), t
            } else
              n &&
                (_.set(this, r, ce.event.trigger(n[0], n.slice(1), this)),
                e.stopPropagation(),
                (e.isImmediatePropagationStopped = Ne))
          },
        }))
      : void 0 === _.get(e, r) && ce.event.add(e, r, Ne)
  }
  ;(ce.event = {
    global: {},
    add: function (t, e, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = _.get(t)
      if ($(t)) {
        n.handler && ((n = (o = n).handler), (i = o.selector)),
          i && ce.find.matchesSelector(J, i),
          n.guid || (n.guid = ce.guid++),
          (u = v.events) || (u = v.events = Object.create(null)),
          (a = v.handle) ||
            (a = v.handle =
              function (e) {
                return typeof ce !== "undefined" && ce.event.triggered !== e.type
                  ? ce.event.dispatch.apply(t, arguments)
                  : void 0
              }),
          (l = (e = (e || "").match(D) || [""]).length)
        while (l--)
          (d = g = (s = De.exec(e[l]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            d &&
              ((f = ce.event.special[d] || {}),
              (d = (i ? f.delegateType : f.bindType) || d),
              (f = ce.event.special[d] || {}),
              (c = ce.extend(
                {
                  type: d,
                  origType: g,
                  data: r,
                  handler: n,
                  guid: n.guid,
                  selector: i,
                  needsContext: i && ce.expr.match.needsContext.test(i),
                  namespace: h.join("."),
                },
                o
              )),
              (p = u[d]) ||
                (((p = u[d] = []).delegateCount = 0),
                (f.setup && !1 !== f.setup.call(t, r, h, a)) ||
                  (t.addEventListener && t.addEventListener(d, a))),
              f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)),
              i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
              (ce.event.global[d] = !0))
      }
    },
    remove: function (e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = _.hasData(e) && _.get(e)
      if (v && (u = v.events)) {
        l = (t = (t || "").match(D) || [""]).length
        while (l--)
          if (
            ((d = g = (s = De.exec(t[l]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            d)
          ) {
            ;(f = ce.event.special[d] || {}),
              (p = u[(d = (r ? f.delegateType : f.bindType) || d)] || []),
              (s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")),
              (a = o = p.length)
            while (o--)
              (c = p[o]),
                (!i && g !== c.origType) ||
                  (n && n.guid !== c.guid) ||
                  (s && !s.test(c.namespace)) ||
                  (r && r !== c.selector && (r !== "**" || !c.selector)) ||
                  (p.splice(o, 1),
                  c.selector && p.delegateCount--,
                  f.remove && f.remove.call(e, c))
            a &&
              !p.length &&
              ((f.teardown && !1 !== f.teardown.call(e, h, v.handle)) ||
                ce.removeEvent(e, d, v.handle),
              delete u[d])
          } else for (d in u) ce.event.remove(e, d + t[l], n, r, !0)
        ce.isEmptyObject(u) && _.remove(e, "handle events")
      }
    },
    dispatch: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s = new Array(arguments.length),
        u = ce.event.fix(e),
        l = (_.get(this, "events") || Object.create(null))[u.type] || [],
        c = ce.event.special[u.type] || {}
      for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t]
      if (
        ((u.delegateTarget = this),
        !c.preDispatch || !1 !== c.preDispatch.call(this, u))
      ) {
        ;(a = ce.event.handlers.call(this, u, l)), (t = 0)
        while ((i = a[t++]) && !u.isPropagationStopped()) {
          ;(u.currentTarget = i.elem), (n = 0)
          while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped())
            (u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace)) ||
              ((u.handleObj = o),
              (u.data = o.data),
              void 0 !==
                (r = ((ce.event.special[o.origType] || {}).handle || o.handler).apply(
                  i.elem,
                  s
                )) &&
                !1 === (u.result = r) &&
                (u.preventDefault(), u.stopPropagation()))
        }
        return c.postDispatch && c.postDispatch.call(this, u), u.result
      }
    },
    handlers: function (e, t) {
      var n,
        r,
        i,
        o,
        a,
        s = [],
        u = t.delegateCount,
        l = e.target
      if (u && l.nodeType && !(e.type === "click" && e.button >= 1))
        for (; l !== this; l = l.parentNode || this)
          if (l.nodeType === 1 && (e.type !== "click" || !0 !== l.disabled)) {
            for (o = [], a = {}, n = 0; n < u; n++)
              void 0 === a[(i = (r = t[n]).selector + " ")] &&
                (a[i] = r.needsContext
                  ? ce(i, this).index(l) > -1
                  : ce.find(i, this, null, [l]).length),
                a[i] && o.push(r)
            o.length && s.push({elem: l, handlers: o})
          }
      return (l = this), u < t.length && s.push({elem: l, handlers: t.slice(u)}), s
    },
    addProp: function (t, e) {
      Object.defineProperty(ce.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: v(e)
          ? function () {
              if (this.originalEvent) return e(this.originalEvent)
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[t]
            },
        set: function (e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e,
          })
        },
      })
    },
    fix: function (e) {
      return e[ce.expando] ? e : new ce.Event(e)
    },
    special: {
      load: {noBubble: !0},
      click: {
        setup: function (e) {
          var t = this || e
          return we.test(t.type) && t.click && fe(t, "input") && He(t, "click", !0), !1
        },
        trigger: function (e) {
          var t = this || e
          return we.test(t.type) && t.click && fe(t, "input") && He(t, "click"), !0
        },
        _default: function (e) {
          var t = e.target
          return (
            (we.test(t.type) && t.click && fe(t, "input") && _.get(t, "click")) ||
            fe(t, "a")
          )
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result)
        },
      },
    },
  }),
    (ce.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n)
    }),
    (ce.Event = function (e, t) {
      if (!(this instanceof ce.Event)) return new ce.Event(e, t)
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
            (void 0 === e.defaultPrevented && !1 === e.returnValue)
              ? Ne
              : qe),
          (this.target =
            e.target && e.target.nodeType === 3 ? e.target.parentNode : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && ce.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[ce.expando] = !0)
    }),
    (ce.Event.prototype = {
      constructor: ce.Event,
      isDefaultPrevented: qe,
      isPropagationStopped: qe,
      isImmediatePropagationStopped: qe,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent
        ;(this.isDefaultPrevented = Ne), e && !this.isSimulated && e.preventDefault()
      },
      stopPropagation: function () {
        var e = this.originalEvent
        ;(this.isPropagationStopped = Ne), e && !this.isSimulated && e.stopPropagation()
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent
        ;(this.isImmediatePropagationStopped = Ne),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation()
      },
    }),
    ce.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0,
      },
      ce.event.addProp
    ),
    ce.each({focus: "focusin", blur: "focusout"}, function (r, i) {
      function o(e) {
        if (C.documentMode) {
          var t = _.get(this, "handle"),
            n = ce.event.fix(e)
          ;(n.type = e.type === "focusin" ? "focus" : "blur"),
            (n.isSimulated = !0),
            t(e),
            n.target === n.currentTarget && t(n)
        } else ce.event.simulate(i, e.target, ce.event.fix(e))
      }
      ;(ce.event.special[r] = {
        setup: function () {
          var e
          if ((He(this, r, !0), !C.documentMode)) return !1
          ;(e = _.get(this, i)) || this.addEventListener(i, o),
            _.set(this, i, (e || 0) + 1)
        },
        trigger: function () {
          return He(this, r), !0
        },
        teardown: function () {
          var e
          if (!C.documentMode) return !1
          ;(e = _.get(this, i) - 1)
            ? _.set(this, i, e)
            : (this.removeEventListener(i, o), _.remove(this, i))
        },
        _default: function (e) {
          return _.get(e.target, r)
        },
        delegateType: i,
      }),
        (ce.event.special[i] = {
          setup: function () {
            var e = this.ownerDocument || this.document || this,
              t = C.documentMode ? this : e,
              n = _.get(t, i)
            n ||
              (C.documentMode
                ? this.addEventListener(i, o)
                : e.addEventListener(r, o, !0)),
              _.set(t, i, (n || 0) + 1)
          },
          teardown: function () {
            var e = this.ownerDocument || this.document || this,
              t = C.documentMode ? this : e,
              n = _.get(t, i) - 1
            n
              ? _.set(t, i, n)
              : (C.documentMode
                  ? this.removeEventListener(i, o)
                  : e.removeEventListener(r, o, !0),
                _.remove(t, i))
          },
        })
    }),
    ce.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (e, i) {
        ce.event.special[e] = {
          delegateType: i,
          bindType: i,
          handle: function (e) {
            var t,
              n = e.relatedTarget,
              r = e.handleObj
            return (
              (n && (n === this || ce.contains(this, n))) ||
                ((e.type = r.origType),
                (t = r.handler.apply(this, arguments)),
                (e.type = i)),
              t
            )
          },
        }
      }
    ),
    ce.fn.extend({
      on: function (e, t, n, r) {
        return Le(this, e, t, n, r)
      },
      one: function (e, t, n, r) {
        return Le(this, e, t, n, r, 1)
      },
      off: function (e, t, n) {
        var r, i
        if (e && e.preventDefault && e.handleObj)
          return (
            (r = e.handleObj),
            ce(e.delegateTarget).off(
              r.namespace ? r.origType + "." + r.namespace : r.origType,
              r.selector,
              r.handler
            ),
            this
          )
        if (typeof e === "object") {
          for (i in e) this.off(i, t, e[i])
          return this
        }
        return (
          (!1 !== t && typeof t !== "function") || ((n = t), (t = void 0)),
          !1 === n && (n = qe),
          this.each(function () {
            ce.event.remove(this, e, n, t)
          })
        )
      },
    })
  var Oe = /<script|<style|<link/i,
    Pe = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Me = /^\s*<!\[CDATA\[|\]\]>\s*$/g
  function Re(e, t) {
    return (
      (fe(e, "table") &&
        fe(t.nodeType !== 11 ? t : t.firstChild, "tr") &&
        ce(e).children("tbody")[0]) ||
      e
    )
  }
  function Ie(e) {
    return (e.type = (e.getAttribute("type") !== null) + "/" + e.type), e
  }
  function We(e) {
    return (
      (e.type || "").slice(0, 5) === "true/"
        ? (e.type = e.type.slice(5))
        : e.removeAttribute("type"),
      e
    )
  }
  function Fe(e, t) {
    var n, r, i, o, a, s
    if (t.nodeType === 1) {
      if (_.hasData(e) && (s = _.get(e).events))
        for (i in (_.remove(t, "handle events"), s))
          for (n = 0, r = s[i].length; n < r; n++) ce.event.add(t, i, s[i][n])
      z.hasData(e) && ((o = z.access(e)), (a = ce.extend({}, o)), z.set(t, a))
    }
  }
  function $e(n, r, i, o) {
    r = g(r)
    var e,
      t,
      a,
      s,
      u,
      l,
      c = 0,
      f = n.length,
      p = f - 1,
      d = r[0],
      h = v(d)
    if (h || (f > 1 && typeof d === "string" && !le.checkClone && Pe.test(d)))
      return n.each(function (e) {
        var t = n.eq(e)
        h && (r[0] = d.call(this, e, t.html())), $e(t, r, i, o)
      })
    if (
      f &&
      ((t = (e = Ae(r, n[0].ownerDocument, !1, n, o)).firstChild),
      e.childNodes.length === 1 && (e = t),
      t || o)
    ) {
      for (s = (a = ce.map(Se(e, "script"), Ie)).length; c < f; c++)
        (u = e),
          c !== p && ((u = ce.clone(u, !0, !0)), s && ce.merge(a, Se(u, "script"))),
          i.call(n[c], u, c)
      if (s)
        for (l = a[a.length - 1].ownerDocument, ce.map(a, We), c = 0; c < s; c++)
          (u = a[c]),
            Ce.test(u.type || "") &&
              !_.access(u, "globalEval") &&
              ce.contains(l, u) &&
              (u.src && (u.type || "").toLowerCase() !== "module"
                ? ce._evalUrl &&
                  !u.noModule &&
                  ce._evalUrl(u.src, {nonce: u.nonce || u.getAttribute("nonce")}, l)
                : m(u.textContent.replace(Me, ""), u, l))
    }
    return n
  }
  function Be(e, t, n) {
    for (var r, i = t ? ce.filter(t, e) : e, o = 0; (r = i[o]) != null; o++)
      n || r.nodeType !== 1 || ce.cleanData(Se(r)),
        r.parentNode && (n && K(r) && Ee(Se(r, "script")), r.parentNode.removeChild(r))
    return e
  }
  ce.extend({
    htmlPrefilter: function (e) {
      return e
    },
    clone: function (e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        u,
        l,
        c = e.cloneNode(!0),
        f = K(e)
      if (
        !(
          le.noCloneChecked ||
          (e.nodeType !== 1 && e.nodeType !== 11) ||
          ce.isXMLDoc(e)
        )
      )
        for (a = Se(c), r = 0, i = (o = Se(e)).length; r < i; r++)
          (s = o[r]),
            (u = a[r]),
            void 0,
            (l = u.nodeName.toLowerCase()) === "input" && we.test(s.type)
              ? (u.checked = s.checked)
              : (l !== "input" && l !== "textarea") || (u.defaultValue = s.defaultValue)
      if (t)
        if (n)
          for (o = o || Se(e), a = a || Se(c), r = 0, i = o.length; r < i; r++)
            Fe(o[r], a[r])
        else Fe(e, c)
      return (a = Se(c, "script")).length > 0 && Ee(a, !f && Se(e, "script")), c
    },
    cleanData: function (e) {
      for (var t, n, r, i = ce.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if ($(n)) {
          if ((t = n[_.expando])) {
            if (t.events)
              for (r in t.events)
                i[r] ? ce.event.remove(n, r) : ce.removeEvent(n, r, t.handle)
            n[_.expando] = void 0
          }
          n[z.expando] && (n[z.expando] = void 0)
        }
    },
  }),
    ce.fn.extend({
      detach: function (e) {
        return Be(this, e, !0)
      },
      remove: function (e) {
        return Be(this, e)
      },
      text: function (e) {
        return M(
          this,
          function (e) {
            return void 0 === e
              ? ce.text(this)
              : this.empty().each(function () {
                  ;(this.nodeType !== 1 &&
                    this.nodeType !== 11 &&
                    this.nodeType !== 9) ||
                    (this.textContent = e)
                })
          },
          null,
          e,
          arguments.length
        )
      },
      append: function () {
        return $e(this, arguments, function (e) {
          ;(this.nodeType !== 1 && this.nodeType !== 11 && this.nodeType !== 9) ||
            Re(this, e).appendChild(e)
        })
      },
      prepend: function () {
        return $e(this, arguments, function (e) {
          if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
            var t = Re(this, e)
            t.insertBefore(e, t.firstChild)
          }
        })
      },
      before: function () {
        return $e(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this)
        })
      },
      after: function () {
        return $e(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
        })
      },
      empty: function () {
        for (var e, t = 0; (e = this[t]) != null; t++)
          e.nodeType === 1 && (ce.cleanData(Se(e, !1)), (e.textContent = ""))
        return this
      },
      clone: function (e, t) {
        return (
          (e = e != null && e),
          (t = t == null ? e : t),
          this.map(function () {
            return ce.clone(this, e, t)
          })
        )
      },
      html: function (e) {
        return M(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              r = this.length
            if (void 0 === e && t.nodeType === 1) return t.innerHTML
            if (
              typeof e === "string" &&
              !Oe.test(e) &&
              !ke[(Te.exec(e) || ["", ""])[1].toLowerCase()]
            ) {
              e = ce.htmlPrefilter(e)
              try {
                for (; n < r; n++)
                  (t = this[n] || {}).nodeType === 1 &&
                    (ce.cleanData(Se(t, !1)), (t.innerHTML = e))
                t = 0
              } catch (e) {}
            }
            t && this.empty().append(e)
          },
          null,
          e,
          arguments.length
        )
      },
      replaceWith: function () {
        var n = []
        return $e(
          this,
          arguments,
          function (e) {
            var t = this.parentNode
            ce.inArray(this, n) < 0 &&
              (ce.cleanData(Se(this)), t && t.replaceChild(e, this))
          },
          n
        )
      },
    }),
    ce.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, a) {
        ce.fn[e] = function (e) {
          for (var t, n = [], r = ce(e), i = r.length - 1, o = 0; o <= i; o++)
            (t = o === i ? this : this.clone(!0)), ce(r[o])[a](t), s.apply(n, t.get())
          return this.pushStack(n)
        }
      }
    )
  var _e = new RegExp("^(" + G + ")(?!px)[a-z%]+$", "i"),
    ze = /^--/,
    Xe = function (e) {
      var t = e.ownerDocument.defaultView
      return (t && t.opener) || (t = ie), t.getComputedStyle(e)
    },
    Ue = function (e, t, n) {
      var r,
        i,
        o = {}
      for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i])
      for (i in ((r = n.call(e)), t)) e.style[i] = o[i]
      return r
    },
    Ve = new RegExp(Q.join("|"), "i")
  function Ge(e, t, n) {
    var r,
      i,
      o,
      a,
      s = ze.test(t),
      u = e.style
    return (
      (n = n || Xe(e)) &&
        ((a = n.getPropertyValue(t) || n[t]),
        s && a && (a = a.replace(ve, "$1") || void 0),
        a !== "" || K(e) || (a = ce.style(e, t)),
        !le.pixelBoxStyles() &&
          _e.test(a) &&
          Ve.test(t) &&
          ((r = u.width),
          (i = u.minWidth),
          (o = u.maxWidth),
          (u.minWidth = u.maxWidth = u.width = a),
          (a = n.width),
          (u.width = r),
          (u.minWidth = i),
          (u.maxWidth = o))),
      void 0 !== a ? String(a) : a
    )
  }
  function Ye(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments)
        delete this.get
      },
    }
  }
  !(function () {
    function e() {
      if (l) {
        ;(u.style.cssText =
          "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
          (l.style.cssText =
            "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
          J.appendChild(u).appendChild(l)
        var e = ie.getComputedStyle(l)
        ;(n = e.top !== "1%"),
          (s = t(e.marginLeft) === 12),
          (l.style.right = "60%"),
          (o = t(e.right) === 36),
          (r = t(e.width) === 36),
          (l.style.position = "absolute"),
          (i = t(l.offsetWidth / 3) === 12),
          J.removeChild(u),
          (l = null)
      }
    }
    function t(e) {
      return Math.round(parseFloat(e))
    }
    var n,
      r,
      i,
      o,
      a,
      s,
      u = C.createElement("div"),
      l = C.createElement("div")
    l.style &&
      ((l.style.backgroundClip = "content-box"),
      (l.cloneNode(!0).style.backgroundClip = ""),
      (le.clearCloneStyle = l.style.backgroundClip === "content-box"),
      ce.extend(le, {
        boxSizingReliable: function () {
          return e(), r
        },
        pixelBoxStyles: function () {
          return e(), o
        },
        pixelPosition: function () {
          return e(), n
        },
        reliableMarginLeft: function () {
          return e(), s
        },
        scrollboxSize: function () {
          return e(), i
        },
        reliableTrDimensions: function () {
          var e, t, n, r
          return (
            a == null &&
              ((e = C.createElement("table")),
              (t = C.createElement("tr")),
              (n = C.createElement("div")),
              (e.style.cssText =
                "position:absolute;left:-11111px;border-collapse:separate"),
              (t.style.cssText = "box-sizing:content-box;border:1px solid"),
              (t.style.height = "1px"),
              (n.style.height = "9px"),
              (n.style.display = "block"),
              J.appendChild(e).appendChild(t).appendChild(n),
              (r = ie.getComputedStyle(t)),
              (a =
                parseInt(r.height, 10) +
                  parseInt(r.borderTopWidth, 10) +
                  parseInt(r.borderBottomWidth, 10) ===
                t.offsetHeight),
              J.removeChild(e)),
            a
          )
        },
      }))
  })()
  var Qe = ["Webkit", "Moz", "ms"],
    Je = C.createElement("div").style,
    Ke = {}
  function Ze(e) {
    var t = ce.cssProps[e] || Ke[e]
    return (
      t ||
      (e in Je
        ? e
        : (Ke[e] =
            (function (e) {
              var t = e[0].toUpperCase() + e.slice(1),
                n = Qe.length
              while (n--) if ((e = Qe[n] + t) in Je) return e
            })(e) || e))
    )
  }
  var et = /^(none|table(?!-c[ea]).+)/,
    tt = {position: "absolute", visibility: "hidden", display: "block"},
    nt = {letterSpacing: "0", fontWeight: "400"}
  function rt(e, t, n) {
    var r = Y.exec(t)
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
  }
  function it(e, t, n, r, i, o) {
    var a = t === "width" ? 1 : 0,
      s = 0,
      u = 0,
      l = 0
    if (n === (r ? "border" : "content")) return 0
    for (; a < 4; a += 2)
      n === "margin" && (l += ce.css(e, n + Q[a], !0, i)),
        r
          ? (n === "content" && (u -= ce.css(e, "padding" + Q[a], !0, i)),
            n !== "margin" && (u -= ce.css(e, "border" + Q[a] + "Width", !0, i)))
          : ((u += ce.css(e, "padding" + Q[a], !0, i)),
            n !== "padding"
              ? (u += ce.css(e, "border" + Q[a] + "Width", !0, i))
              : (s += ce.css(e, "border" + Q[a] + "Width", !0, i)))
    return (
      !r &&
        o >= 0 &&
        (u +=
          Math.max(
            0,
            Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5)
          ) || 0),
      u + l
    )
  }
  function ot(e, t, n) {
    var r = Xe(e),
      i =
        (!le.boxSizingReliable() || n) &&
        ce.css(e, "boxSizing", !1, r) === "border-box",
      o = i,
      a = Ge(e, t, r),
      s = "offset" + t[0].toUpperCase() + t.slice(1)
    if (_e.test(a)) {
      if (!n) return a
      a = "auto"
    }
    return (
      ((!le.boxSizingReliable() && i) ||
        (!le.reliableTrDimensions() && fe(e, "tr")) ||
        a === "auto" ||
        (!parseFloat(a) && ce.css(e, "display", !1, r) === "inline")) &&
        e.getClientRects().length &&
        ((i = ce.css(e, "boxSizing", !1, r) === "border-box"),
        (o = s in e) && (a = e[s])),
      (a = parseFloat(a) || 0) +
        it(e, t, n || (i ? "border" : "content"), o, r, a) +
        "px"
    )
  }
  function at(e, t, n, r, i) {
    return new at.prototype.init(e, t, n, r, i)
  }
  ce.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = Ge(e, "opacity")
            return n === "" ? "1" : n
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageSlice: !0,
      columnCount: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      scale: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
    },
    cssProps: {},
    style: function (e, t, n, r) {
      if (e && e.nodeType !== 3 && e.nodeType !== 8 && e.style) {
        var i,
          o,
          a,
          s = F(t),
          u = ze.test(t),
          l = e.style
        if ((u || (t = Ze(s)), (a = ce.cssHooks[t] || ce.cssHooks[s]), void 0 === n))
          return (
            a && "get" in a && void 0 !== (i = a.get(e, !1, r))
              ? i
              : l[t]((o = typeof n)) === "string" &&
                (i = Y.exec(n)) &&
                i[1] &&
                ((n = te(e, t, i)), (o = "number")),
            n != null &&
              n == n &&
              (o !== "number" ||
                u ||
                (n += (i && i[3]) || (ce.cssNumber[s] ? "" : "px")),
              le.clearCloneStyle ||
                n !== "" ||
                t.indexOf("background") !== 0 ||
                (l[t] = "inherit"),
              (a && "set" in a && void 0 === (n = a.set(e, n, r))) ||
                (u ? l.setProperty(t, n) : (l[t] = n)))
          )
      }
    },
    css: function (e, t, n, r) {
      var i,
        o,
        a,
        s = F(t)
      return (
        ze.test(t) || (t = Ze(s)),
        (a = ce.cssHooks[t] || ce.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)),
        void 0 === i && (i = Ge(e, t, r)),
        i === "normal" && t in nt && (i = nt[t]),
        n === "" || n ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i) : i
      )
    },
  }),
    ce.each(["height", "width"], function (e, u) {
      ce.cssHooks[u] = {
        get: function (e, t, n) {
          if (t)
            return !et.test(ce.css(e, "display")) ||
              (e.getClientRects().length && e.getBoundingClientRect().width)
              ? ot(e, u, n)
              : Ue(e, tt, function () {
                  return ot(e, u, n)
                })
        },
        set: function (e, t, n) {
          var r,
            i = Xe(e),
            o = !le.scrollboxSize() && i.position === "absolute",
            a = (o || n) && ce.css(e, "boxSizing", !1, i) === "border-box",
            s = n ? it(e, u, n, a, i) : 0
          return (
            a &&
              o &&
              (s -= Math.ceil(
                e["offset" + u[0].toUpperCase() + u.slice(1)] -
                  parseFloat(i[u]) -
                  it(e, u, "border", !1, i) -
                  0.5
              )),
            s &&
              (r = Y.exec(t)) &&
              (r[3] || "px") !== "px" &&
              ((e.style[u] = t), (t = ce.css(e, u))),
            rt(0, t, s)
          )
        },
      }
    }),
    (ce.cssHooks.marginLeft = Ye(le.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(Ge(e, "marginLeft")) ||
            e.getBoundingClientRect().left -
              Ue(e, {marginLeft: 0}, function () {
                return e.getBoundingClientRect().left
              })) + "px"
        )
    })),
    ce.each({margin: "", padding: "", border: "Width"}, function (i, o) {
      ;(ce.cssHooks[i + o] = {
        expand: function (e) {
          for (
            var t = 0, n = {}, r = typeof e === "string" ? e.split(" ") : [e];
            t < 4;
            t++
          )
            n[i + Q[t] + o] = r[t] || r[t - 2] || r[0]
          return n
        },
      }),
        i !== "margin" && (ce.cssHooks[i + o].set = rt)
    }),
    ce.fn.extend({
      css: function (e, t) {
        return M(
          this,
          function (e, t, n) {
            var r,
              i,
              o = {},
              a = 0
            if (Array.isArray(t)) {
              for (r = Xe(e), i = t.length; a < i; a++) o[t[a]] = ce.css(e, t[a], !1, r)
              return o
            }
            return void 0 !== n ? ce.style(e, t, n) : ce.css(e, t)
          },
          e,
          t,
          arguments.length > 1
        )
      },
    }),
    (((ce.Tween = at).prototype = {
      constructor: at,
      init: function (e, t, n, r, i, o) {
        ;(this.elem = e),
          (this.prop = n),
          (this.easing = i || ce.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = r),
          (this.unit = o || (ce.cssNumber[n] ? "" : "px"))
      },
      cur: function () {
        var e = at.propHooks[this.prop]
        return e && e.get ? e.get(this) : at.propHooks._default.get(this)
      },
      run: function (e) {
        var t,
          n = at.propHooks[this.prop]
        return (
          this.options.duration
            ? (this.pos = t =
                ce.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step && this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : at.propHooks._default.set(this),
          this
        )
      },
    }).init.prototype = at.prototype),
    ((at.propHooks = {
      _default: {
        get: function (e) {
          var t
          return e.elem.nodeType !== 1 ||
            (e.elem[e.prop] != null && e.elem.style[e.prop] == null)
            ? e.elem[e.prop]
            : (t = ce.css(e.elem, e.prop, "")) && t !== "auto"
            ? t
            : 0
        },
        set: function (e) {
          ce.fx.step[e.prop]
            ? ce.fx.step[e.prop](e)
            : e.elem.nodeType !== 1 ||
              (!ce.cssHooks[e.prop] && e.elem.style[Ze(e.prop)] == null)
            ? (e.elem[e.prop] = e.now)
            : ce.style(e.elem, e.prop, e.now + e.unit)
        },
      },
    }).scrollTop = at.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        },
      }),
    (ce.easing = {
      linear: function (e) {
        return e
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2
      },
      _default: "swing",
    }),
    (ce.fx = at.prototype.init),
    (ce.fx.step = {})
  var st,
    ut,
    lt,
    ct,
    ft = /^(?:toggle|show|hide)$/,
    pt = /queueHooks$/
  function dt() {
    ut &&
      (!1 === C.hidden && ie.requestAnimationFrame
        ? ie.requestAnimationFrame(dt)
        : ie.setTimeout(dt, ce.fx.interval),
      ce.fx.tick())
  }
  function ht() {
    return (
      ie.setTimeout(function () {
        st = void 0
      }),
      (st = Date.now())
    )
  }
  function gt(e, t) {
    var n,
      r = 0,
      i = {height: e}
    for (t = t ? 1 : 0; r < 4; r += 2 - t)
      i["margin" + (n = Q[r])] = i["padding" + n] = e
    return t && (i.opacity = i.width = e), i
  }
  function vt(e, t, n) {
    for (
      var r, i = (yt.tweeners[t] || []).concat(yt.tweeners["*"]), o = 0, a = i.length;
      o < a;
      o++
    )
      if ((r = i[o].call(n, t, e))) return r
  }
  function yt(o, e, t) {
    var n,
      a,
      r = 0,
      i = yt.prefilters.length,
      s = ce.Deferred().always(function () {
        delete u.elem
      }),
      u = function () {
        if (a) return !1
        for (
          var e = st || ht(),
            t = Math.max(0, l.startTime + l.duration - e),
            n = 1 - (t / l.duration || 0),
            r = 0,
            i = l.tweens.length;
          r < i;
          r++
        )
          l.tweens[r].run(n)
        return (
          s.notifyWith(o, [l, n, t]),
          n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
        )
      },
      l = s.promise({
        elem: o,
        props: ce.extend({}, e),
        opts: ce.extend(!0, {specialEasing: {}, easing: ce.easing._default}, t),
        originalProperties: e,
        originalOptions: t,
        startTime: st || ht(),
        duration: t.duration,
        tweens: [],
        createTween: function (e, t) {
          var n = ce.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing)
          return l.tweens.push(n), n
        },
        stop: function (e) {
          var t = 0,
            n = e ? l.tweens.length : 0
          if (a) return this
          for (a = !0; t < n; t++) l.tweens[t].run(1)
          return (
            e
              ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e]))
              : s.rejectWith(o, [l, e]),
            this
          )
        },
      }),
      c = l.props
    for (
      !(function (e, t) {
        var n, r, i, o, a
        for (n in e)
          if (
            ((i = t[(r = F(n))]),
            (o = e[n]),
            Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
            n !== r && ((e[r] = o), delete e[n]),
            (a = ce.cssHooks[r]) && ("expand" in a))
          )
            for (n in ((o = a.expand(o)), delete e[r], o))
              (n in e) || ((e[n] = o[n]), (t[n] = i))
          else t[r] = i
      })(c, l.opts.specialEasing);
      r < i;
      r++
    )
      if ((n = yt.prefilters[r].call(l, o, c, l.opts)))
        return (
          v(n.stop) && (ce._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n
        )
    return (
      ce.map(c, vt, l),
      v(l.opts.start) && l.opts.start.call(o, l),
      l
        .progress(l.opts.progress)
        .done(l.opts.done, l.opts.complete)
        .fail(l.opts.fail)
        .always(l.opts.always),
      ce.fx.timer(ce.extend(u, {elem: o, anim: l, queue: l.opts.queue})),
      l
    )
  }
  ;(ce.Animation = ce.extend(yt, {
    tweeners: {
      "*": [
        function (e, t) {
          var n = this.createTween(e, t)
          return te(n.elem, e, Y.exec(t), n), n
        },
      ],
    },
    tweener: function (e, t) {
      v(e) ? ((t = e), (e = ["*"])) : (e = e.match(D))
      for (var n, r = 0, i = e.length; r < i; r++)
        (n = e[r]), (yt.tweeners[n] = yt.tweeners[n] || []), yt.tweeners[n].unshift(t)
    },
    prefilters: [
      function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c,
          f = "width" in t || "height" in t,
          p = this,
          d = {},
          h = e.style,
          g = e.nodeType && ee(e),
          v = _.get(e, "fxshow")
        for (r in (n.queue ||
          ((a = ce._queueHooks(e, "fx")).unqueued == null &&
            ((a.unqueued = 0),
            (s = a.empty.fire),
            (a.empty.fire = function () {
              a.unqueued || s()
            })),
          a.unqueued++,
          p.always(function () {
            p.always(function () {
              a.unqueued--, ce.queue(e, "fx").length || a.empty.fire()
            })
          })),
        t))
          if (((i = t[r]), ft.test(i))) {
            if ((delete t[r], (o = o || i === "toggle"), i === (g ? "hide" : "show"))) {
              if (i !== "show" || !v || void 0 === v[r]) continue
              g = !0
            }
            d[r] = (v && v[r]) || ce.style(e, r)
          }
        if ((u = !ce.isEmptyObject(t)) || !ce.isEmptyObject(d))
          for (r in (f &&
            e.nodeType === 1 &&
            ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
            (l = v && v.display) == null && (l = _.get(e, "display")),
            (c = ce.css(e, "display")) === "none" &&
              (l
                ? (c = l)
                : (re([e], !0),
                  (l = e.style.display || l),
                  (c = ce.css(e, "display")),
                  re([e]))),
            (c === "inline" || (c === "inline-block" && l != null)) &&
              ce.css(e, "float") === "none" &&
              (u ||
                (p.done(function () {
                  h.display = l
                }),
                l == null && ((c = h.display), (l = c === "none" ? "" : c))),
              (h.display = "inline-block"))),
          n.overflow &&
            ((h.overflow = "hidden"),
            p.always(function () {
              ;(h.overflow = n.overflow[0]),
                (h.overflowX = n.overflow[1]),
                (h.overflowY = n.overflow[2])
            })),
          (u = !1),
          d))
            u ||
              (v
                ? "hidden" in v && (g = v.hidden)
                : (v = _.access(e, "fxshow", {display: l})),
              o && (v.hidden = !g),
              g && re([e], !0),
              p.done(function () {
                for (r in (g || re([e]), _.remove(e, "fxshow"), d)) ce.style(e, r, d[r])
              })),
              (u = vt(g ? v[r] : 0, r, p)),
              r in v || ((v[r] = u.start), g && ((u.end = u.start), (u.start = 0)))
      },
    ],
    prefilter: function (e, t) {
      t ? yt.prefilters.unshift(e) : yt.prefilters.push(e)
    },
  })),
    (ce.speed = function (e, t, n) {
      var r =
        e && typeof e === "object"
          ? ce.extend({}, e)
          : {
              complete: n || (!n && t) || (v(e) && e),
              duration: e,
              easing: (n && t) || (t && !v(t) && t),
            }
      return (
        ce.fx.off
          ? (r.duration = 0)
          : typeof r.duration !== "number" &&
            (r.duration in ce.fx.speeds
              ? (r.duration = ce.fx.speeds[r.duration])
              : (r.duration = ce.fx.speeds._default)),
        (r.queue != null && !0 !== r.queue) || (r.queue = "fx"),
        (r.old = r.complete),
        (r.complete = function () {
          v(r.old) && r.old.call(this), r.queue && ce.dequeue(this, r.queue)
        }),
        r
      )
    }),
    ce.fn.extend({
      fadeTo: function (e, t, n, r) {
        return this.filter(ee)
          .css("opacity", 0)
          .show()
          .end()
          .animate({opacity: t}, e, n, r)
      },
      animate: function (t, e, n, r) {
        var i = ce.isEmptyObject(t),
          o = ce.speed(e, n, r),
          a = function () {
            var e = yt(this, ce.extend({}, t), o)
            ;(i || _.get(this, "finish")) && e.stop(!0)
          }
        return (
          (a.finish = a), i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        )
      },
      stop: function (i, e, o) {
        var a = function (e) {
          var t = e.stop
          delete e.stop, t(o)
        }
        return (
          typeof i !== "string" && ((o = e), (e = i), (i = void 0)),
          e && this.queue(i || "fx", []),
          this.each(function () {
            var e = !0,
              t = i != null && i + "queueHooks",
              n = ce.timers,
              r = _.get(this)
            if (t) r[t] && r[t].stop && a(r[t])
            else for (t in r) r[t] && r[t].stop && pt.test(t) && a(r[t])
            for (t = n.length; t--; )
              n[t].elem !== this ||
                (i != null && n[t].queue !== i) ||
                (n[t].anim.stop(o), (e = !1), n.splice(t, 1))
            ;(!e && o) || ce.dequeue(this, i)
          })
        )
      },
      finish: function (a) {
        return (
          !1 !== a && (a = a || "fx"),
          this.each(function () {
            var e,
              t = _.get(this),
              n = t[a + "queue"],
              r = t[a + "queueHooks"],
              i = ce.timers,
              o = n ? n.length : 0
            for (
              t.finish = !0,
                ce.queue(this, a, []),
                r && r.stop && r.stop.call(this, !0),
                e = i.length;
              e--;

            )
              i[e].elem === this &&
                i[e].queue === a &&
                (i[e].anim.stop(!0), i.splice(e, 1))
            for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this)
            delete t.finish
          })
        )
      },
    }),
    ce.each(["toggle", "show", "hide"], function (e, r) {
      var i = ce.fn[r]
      ce.fn[r] = function (e, t, n) {
        return e == null || typeof e === "boolean"
          ? i.apply(this, arguments)
          : this.animate(gt(r, !0), e, t, n)
      }
    }),
    ce.each(
      {
        slideDown: gt("show"),
        slideUp: gt("hide"),
        slideToggle: gt("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"},
      },
      function (e, r) {
        ce.fn[e] = function (e, t, n) {
          return this.animate(r, e, t, n)
        }
      }
    ),
    (ce.timers = []),
    (ce.fx.tick = function () {
      var e,
        t = 0,
        n = ce.timers
      for (st = Date.now(); t < n.length; t++)
        (e = n[t])() || n[t] !== e || n.splice(t--, 1)
      n.length || ce.fx.stop(), (st = void 0)
    }),
    (ce.fx.timer = function (e) {
      ce.timers.push(e), ce.fx.start()
    }),
    (ce.fx.interval = 13),
    (ce.fx.start = function () {
      ut || ((ut = !0), dt())
    }),
    (ce.fx.stop = function () {
      ut = null
    }),
    (ce.fx.speeds = {slow: 600, fast: 200, _default: 400}),
    (ce.fn.delay = function (r, e) {
      return (
        (r = (ce.fx && ce.fx.speeds[r]) || r),
        (e = e || "fx"),
        this.queue(e, function (e, t) {
          var n = ie.setTimeout(e, r)
          t.stop = function () {
            ie.clearTimeout(n)
          }
        })
      )
    }),
    (lt = C.createElement("input")),
    (ct = C.createElement("select").appendChild(C.createElement("option"))),
    (lt.type = "checkbox"),
    (le.checkOn = lt.value !== ""),
    (le.optSelected = ct.selected),
    ((lt = C.createElement("input")).value = "t"),
    (lt.type = "radio"),
    (le.radioValue = lt.value === "t")
  var mt,
    xt = ce.expr.attrHandle
  ce.fn.extend({
    attr: function (e, t) {
      return M(this, ce.attr, e, t, arguments.length > 1)
    },
    removeAttr: function (e) {
      return this.each(function () {
        ce.removeAttr(this, e)
      })
    },
  }),
    ce.extend({
      attr: function (e, t, n) {
        var r,
          i,
          o = e.nodeType
        if (o !== 3 && o !== 8 && o !== 2)
          return typeof e.getAttribute === "undefined"
            ? ce.prop(e, t, n)
            : ((o === 1 && ce.isXMLDoc(e)) ||
                (i =
                  ce.attrHooks[t.toLowerCase()] ||
                  (ce.expr.match.bool.test(t) ? mt : void 0)),
              void 0 !== n
                ? n === null
                  ? void ce.removeAttr(e, t)
                  : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                  ? r
                  : (e.setAttribute(t, String(n)), n)
                : i && "get" in i && (r = i.get(e, t)) !== null
                ? r
                : (r = ce.find.attr(e, t)) == null
                ? void 0
                : r)
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!le.radioValue && t === "radio" && fe(e, "input")) {
              var n = e.value
              return e.setAttribute("type", t), n && (e.value = n), t
            }
          },
        },
      },
      removeAttr: function (e, t) {
        var n,
          r = 0,
          i = t && t.match(D)
        if (i && e.nodeType === 1) while ((n = i[r++])) e.removeAttribute(n)
      },
    }),
    (mt = {
      set: function (e, t, n) {
        return !1 === t ? ce.removeAttr(e, n) : e.setAttribute(n, n), n
      },
    }),
    ce.each(ce.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var a = xt[t] || ce.find.attr
      xt[t] = function (e, t, n) {
        var r,
          i,
          o = t.toLowerCase()
        return (
          n ||
            ((i = xt[o]),
            (xt[o] = r),
            (r = a(e, t, n) != null ? o : null),
            (xt[o] = i)),
          r
        )
      }
    })
  var bt = /^(?:input|select|textarea|button)$/i,
    wt = /^(?:a|area)$/i
  function Tt(e) {
    return (e.match(D) || []).join(" ")
  }
  function Ct(e) {
    return (e.getAttribute && e.getAttribute("class")) || ""
  }
  function kt(e) {
    return Array.isArray(e) ? e : (typeof e === "string" && e.match(D)) || []
  }
  ce.fn.extend({
    prop: function (e, t) {
      return M(this, ce.prop, e, t, arguments.length > 1)
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[ce.propFix[e] || e]
      })
    },
  }),
    ce.extend({
      prop: function (e, t, n) {
        var r,
          i,
          o = e.nodeType
        if (o !== 3 && o !== 8 && o !== 2)
          return (
            (o === 1 && ce.isXMLDoc(e)) ||
              ((t = ce.propFix[t] || t), (i = ce.propHooks[t])),
            void 0 !== n
              ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                ? r
                : (e[t] = n)
              : i && "get" in i && (r = i.get(e, t)) !== null
              ? r
              : e[t]
          )
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = ce.find.attr(e, "tabindex")
            return t
              ? parseInt(t, 10)
              : bt.test(e.nodeName) || (wt.test(e.nodeName) && e.href)
              ? 0
              : -1
          },
        },
      },
      propFix: {for: "htmlFor", class: "className"},
    }),
    le.optSelected ||
      (ce.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode
          return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function (e) {
          var t = e.parentNode
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        },
      }),
    ce.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        ce.propFix[this.toLowerCase()] = this
      }
    ),
    ce.fn.extend({
      addClass: function (t) {
        var e, n, r, i, o, a
        return v(t)
          ? this.each(function (e) {
              ce(this).addClass(t.call(this, e, Ct(this)))
            })
          : (e = kt(t)).length
          ? this.each(function () {
              if (((r = Ct(this)), (n = this.nodeType === 1 && " " + Tt(r) + " "))) {
                for (o = 0; o < e.length; o++)
                  (i = e[o]), n.indexOf(" " + i + " ") < 0 && (n += i + " ")
                ;(a = Tt(n)), r !== a && this.setAttribute("class", a)
              }
            })
          : this
      },
      removeClass: function (t) {
        var e, n, r, i, o, a
        return v(t)
          ? this.each(function (e) {
              ce(this).removeClass(t.call(this, e, Ct(this)))
            })
          : arguments.length
          ? (e = kt(t)).length
            ? this.each(function () {
                if (((r = Ct(this)), (n = this.nodeType === 1 && " " + Tt(r) + " "))) {
                  for (o = 0; o < e.length; o++) {
                    i = e[o]
                    while (n.indexOf(" " + i + " ") > -1)
                      n = n.replace(" " + i + " ", " ")
                  }
                  ;(a = Tt(n)), r !== a && this.setAttribute("class", a)
                }
              })
            : this
          : this.attr("class", "")
      },
      toggleClass: function (t, n) {
        var e,
          r,
          i,
          o,
          a = typeof t,
          s = a === "string" || Array.isArray(t)
        return v(t)
          ? this.each(function (e) {
              ce(this).toggleClass(t.call(this, e, Ct(this), n), n)
            })
          : typeof n === "boolean" && s
          ? n
            ? this.addClass(t)
            : this.removeClass(t)
          : ((e = kt(t)),
            this.each(function () {
              if (s)
                for (o = ce(this), i = 0; i < e.length; i++)
                  (r = e[i]), o.hasClass(r) ? o.removeClass(r) : o.addClass(r)
              else
                (void 0 !== t && a !== "boolean") ||
                  ((r = Ct(this)) && _.set(this, "__className__", r),
                  this.setAttribute &&
                    this.setAttribute(
                      "class",
                      r || !1 === t ? "" : _.get(this, "__className__") || ""
                    ))
            }))
      },
      hasClass: function (e) {
        var t,
          n,
          r = 0
        t = " " + e + " "
        while ((n = this[r++]))
          if (n.nodeType === 1 && (" " + Tt(Ct(n)) + " ").indexOf(t) > -1) return !0
        return !1
      },
    })
  var St = /\r/g
  ce.fn.extend({
    val: function (n) {
      var r,
        e,
        i,
        t = this[0]
      return arguments.length
        ? ((i = v(n)),
          this.each(function (e) {
            var t
            this.nodeType === 1 &&
              ((t = i ? n.call(this, e, ce(this).val()) : n) == null
                ? (t = "")
                : typeof t === "number"
                ? (t = String(t))
                : Array.isArray(t) &&
                  (t = ce.map(t, function (e) {
                    return e == null ? "" : String(e)
                  })),
              ((r =
                ce.valHooks[this.type] || ce.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in r &&
                void 0 !== r.set(this, t, "value")) ||
                (this.value = t))
          }))
        : t
        ? (r = ce.valHooks[t.type] || ce.valHooks[t.nodeName.toLowerCase()]) &&
          "get" in r &&
          void 0 !== (e = r.get(t, "value"))
          ? e
          : typeof (e = t.value) === "string"
          ? e.replace(St, "")
          : e == null
          ? ""
          : e
        : void 0
    },
  }),
    ce.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = ce.find.attr(e, "value")
            return t != null ? t : Tt(ce.text(e))
          },
        },
        select: {
          get: function (e) {
            var t,
              n,
              r,
              i = e.options,
              o = e.selectedIndex,
              a = e.type === "select-one",
              s = a ? null : [],
              u = a ? o + 1 : i.length
            for (r = o < 0 ? u : a ? o : 0; r < u; r++)
              if (
                ((n = i[r]).selected || r === o) &&
                !n.disabled &&
                (!n.parentNode.disabled || !fe(n.parentNode, "optgroup"))
              ) {
                if (((t = ce(n).val()), a)) return t
                s.push(t)
              }
            return s
          },
          set: function (e, t) {
            var n,
              r,
              i = e.options,
              o = ce.makeArray(t),
              a = i.length
            while (a--)
              ((r = i[a]).selected = ce.inArray(ce.valHooks.option.get(r), o) > -1) &&
                (n = !0)
            return n || (e.selectedIndex = -1), o
          },
        },
      },
    }),
    ce.each(["radio", "checkbox"], function () {
      ;(ce.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t)) return (e.checked = ce.inArray(ce(e).val(), t) > -1)
        },
      }),
        le.checkOn ||
          (ce.valHooks[this].get = function (e) {
            return e.getAttribute("value") === null ? "on" : e.value
          })
    })
  var Et = ie.location,
    jt = {guid: Date.now()},
    At = /\?/
  ce.parseXML = function (e) {
    var t, n
    if (!e || typeof e !== "string") return null
    try {
      t = new ie.DOMParser().parseFromString(e, "text/xml")
    } catch (e) {}
    return (
      (n = t && t.getElementsByTagName("parsererror")[0]),
      (t && !n) ||
        ce.error(
          "Invalid XML: " +
            (n
              ? ce
                  .map(n.childNodes, function (e) {
                    return e.textContent
                  })
                  .join("\n")
              : e)
        ),
      t
    )
  }
  var Dt = /^(?:focusinfocus|focusoutblur)$/,
    Nt = function (e) {
      e.stopPropagation()
    }
  ce.extend(ce.event, {
    trigger: function (e, t, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f,
        p = [n || C],
        d = ue.call(e, "type") ? e.type : e,
        h = ue.call(e, "namespace") ? e.namespace.split(".") : []
      if (
        ((o = f = a = n = n || C),
        n.nodeType !== 3 &&
          n.nodeType !== 8 &&
          !Dt.test(d + ce.event.triggered) &&
          (d.indexOf(".") > -1 && ((d = (h = d.split(".")).shift()), h.sort()),
          (u = d.indexOf(":") < 0 && "on" + d),
          ((e = e[ce.expando]
            ? e
            : new ce.Event(d, typeof e === "object" && e)).isTrigger = r ? 2 : 3),
          (e.namespace = h.join(".")),
          (e.rnamespace = e.namespace
            ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (e.result = void 0),
          e.target || (e.target = n),
          (t = t == null ? [e] : ce.makeArray(t, [e])),
          (c = ce.event.special[d] || {}),
          r || !c.trigger || !1 !== c.trigger.apply(n, t)))
      ) {
        if (!r && !c.noBubble && !y(n)) {
          for (
            s = c.delegateType || d, Dt.test(s + d) || (o = o.parentNode);
            o;
            o = o.parentNode
          )
            p.push(o), (a = o)
          a === (n.ownerDocument || C) && p.push(a.defaultView || a.parentWindow || ie)
        }
        i = 0
        while ((o = p[i++]) && !e.isPropagationStopped())
          (f = o),
            (e.type = i > 1 ? s : c.bindType || d),
            (l =
              (_.get(o, "events") || Object.create(null))[e.type] &&
              _.get(o, "handle")) && l.apply(o, t),
            (l = u && o[u]) &&
              l.apply &&
              $(o) &&
              ((e.result = l.apply(o, t)), !1 === e.result && e.preventDefault())
        return (
          (e.type = d),
          r ||
            e.isDefaultPrevented() ||
            (c._default && !1 !== c._default.apply(p.pop(), t)) ||
            !$(n) ||
            (u &&
              v(n[d]) &&
              !y(n) &&
              ((a = n[u]) && (n[u] = null),
              (ce.event.triggered = d),
              e.isPropagationStopped() && f.addEventListener(d, Nt),
              n[d](),
              e.isPropagationStopped() && f.removeEventListener(d, Nt),
              (ce.event.triggered = void 0),
              a && (n[u] = a))),
          e.result
        )
      }
    },
    simulate: function (e, t, n) {
      var r = ce.extend(new ce.Event(), n, {type: e, isSimulated: !0})
      ce.event.trigger(r, null, t)
    },
  }),
    ce.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          ce.event.trigger(e, t, this)
        })
      },
      triggerHandler: function (e, t) {
        var n = this[0]
        if (n) return ce.event.trigger(e, t, n, !0)
      },
    })
  var qt = /\[\]$/,
    Lt = /\r?\n/g,
    Ht = /^(?:submit|button|image|reset|file)$/i,
    Ot = /^(?:input|select|textarea|keygen)/i
  function Pt(n, e, r, i) {
    var t
    if (Array.isArray(e))
      ce.each(e, function (e, t) {
        r || qt.test(n)
          ? i(n, t)
          : Pt(n + "[" + (typeof t === "object" && t != null ? e : "") + "]", t, r, i)
      })
    else if (r || x(e) !== "object") i(n, e)
    else for (t in e) Pt(n + "[" + t + "]", e[t], r, i)
  }
  ;(ce.param = function (e, t) {
    var n,
      r = [],
      i = function (e, t) {
        var n = v(t) ? t() : t
        r[r.length] =
          encodeURIComponent(e) + "=" + encodeURIComponent(n == null ? "" : n)
      }
    if (e == null) return ""
    if (Array.isArray(e) || (e.jquery && !ce.isPlainObject(e)))
      ce.each(e, function () {
        i(this.name, this.value)
      })
    else for (n in e) Pt(n, e[n], t, i)
    return r.join("&")
  }),
    ce.fn.extend({
      serialize: function () {
        return ce.param(this.serializeArray())
      },
      serializeArray: function () {
        return this.map(function () {
          var e = ce.prop(this, "elements")
          return e ? ce.makeArray(e) : this
        })
          .filter(function () {
            var e = this.type
            return (
              this.name &&
              !ce(this).is(":disabled") &&
              Ot.test(this.nodeName) &&
              !Ht.test(e) &&
              (this.checked || !we.test(e))
            )
          })
          .map(function (e, t) {
            var n = ce(this).val()
            return n == null
              ? null
              : Array.isArray(n)
              ? ce.map(n, function (e) {
                  return {name: t.name, value: e.replace(Lt, "\r\n")}
                })
              : {name: t.name, value: n.replace(Lt, "\r\n")}
          })
          .get()
      },
    })
  var Mt = /%20/g,
    Rt = /#.*$/,
    It = /([?&])_=[^&]*/,
    Wt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Ft = /^(?:GET|HEAD)$/,
    $t = /^\/\//,
    Bt = {},
    _t = {},
    zt = "*/".concat("*"),
    Xt = C.createElement("a")
  function Ut(o) {
    return function (e, t) {
      typeof e !== "string" && ((t = e), (e = "*"))
      var n,
        r = 0,
        i = e.toLowerCase().match(D) || []
      if (v(t))
        while ((n = i[r++]))
          n[0] === "+"
            ? ((n = n.slice(1) || "*"), (o[n] = o[n] || []).unshift(t))
            : (o[n] = o[n] || []).push(t)
    }
  }
  function Vt(t, i, o, a) {
    var s = {},
      u = t === _t
    function l(e) {
      var r
      return (
        (s[e] = !0),
        ce.each(t[e] || [], function (e, t) {
          var n = t(i, o, a)
          return typeof n !== "string" || u || s[n]
            ? u
              ? !(r = n)
              : void 0
            : (i.dataTypes.unshift(n), l(n), !1)
        }),
        r
      )
    }
    return l(i.dataTypes[0]) || (!s["*"] && l("*"))
  }
  function Gt(e, t) {
    var n,
      r,
      i = ce.ajaxSettings.flatOptions || {}
    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n])
    return r && ce.extend(!0, e, r), e
  }
  ;(Xt.href = Et.href),
    ce.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: Et.href,
        type: "GET",
        isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
          Et.protocol
        ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": zt,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": ce.parseXML,
        },
        flatOptions: {url: !0, context: !0},
      },
      ajaxSetup: function (e, t) {
        return t ? Gt(Gt(e, ce.ajaxSettings), t) : Gt(ce.ajaxSettings, e)
      },
      ajaxPrefilter: Ut(Bt),
      ajaxTransport: Ut(_t),
      ajax: function (e, t) {
        typeof e === "object" && ((t = e), (e = void 0)), (t = t || {})
        var c,
          f,
          p,
          n,
          d,
          r,
          h,
          g,
          i,
          o,
          v = ce.ajaxSetup({}, t),
          y = v.context || v,
          m = v.context && (y.nodeType || y.jquery) ? ce(y) : ce.event,
          x = ce.Deferred(),
          b = ce.Callbacks("once memory"),
          w = v.statusCode || {},
          a = {},
          s = {},
          u = "canceled",
          T = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t
              if (h) {
                if (!n) {
                  n = {}
                  while ((t = Wt.exec(p)))
                    n[t[1].toLowerCase() + " "] = (
                      n[t[1].toLowerCase() + " "] || []
                    ).concat(t[2])
                }
                t = n[e.toLowerCase() + " "]
              }
              return t == null ? null : t.join(", ")
            },
            getAllResponseHeaders: function () {
              return h ? p : null
            },
            setRequestHeader: function (e, t) {
              return (
                h == null &&
                  ((e = s[e.toLowerCase()] = s[e.toLowerCase()] || e), (a[e] = t)),
                this
              )
            },
            overrideMimeType: function (e) {
              return h == null && (v.mimeType = e), this
            },
            statusCode: function (e) {
              var t
              if (e)
                if (h) T.always(e[T.status])
                else for (t in e) w[t] = [w[t], e[t]]
              return this
            },
            abort: function (e) {
              var t = e || u
              return c && c.abort(t), l(0, t), this
            },
          }
        if (
          (x.promise(T),
          (v.url = String(e || v.url || Et.href).replace($t, Et.protocol + "//")),
          (v.type = t.method || t.type || v.method || v.type),
          (v.dataTypes = (v.dataType || "*").toLowerCase().match(D) || [""]),
          v.crossDomain == null)
        ) {
          r = C.createElement("a")
          try {
            ;(r.href = v.url),
              (r.href = r.href),
              (v.crossDomain =
                Xt.protocol + "//" + Xt.host != r.protocol + "//" + r.host)
          } catch (e) {
            v.crossDomain = !0
          }
        }
        if (
          (v.data &&
            v.processData &&
            typeof v.data !== "string" &&
            (v.data = ce.param(v.data, v.traditional)),
          Vt(Bt, v, t, T),
          h)
        )
          return T
        for (i in ((g = ce.event && v.global) &&
          ce.active++ == 0 &&
          ce.event.trigger("ajaxStart"),
        (v.type = v.type.toUpperCase()),
        (v.hasContent = !Ft.test(v.type)),
        (f = v.url.replace(Rt, "")),
        v.hasContent
          ? v.data &&
            v.processData &&
            (v.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 &&
            (v.data = v.data.replace(Mt, "+"))
          : ((o = v.url.slice(f.length)),
            v.data &&
              (v.processData || typeof v.data === "string") &&
              ((f += (At.test(f) ? "&" : "?") + v.data), delete v.data),
            !1 === v.cache &&
              ((f = f.replace(It, "$1")),
              (o = (At.test(f) ? "&" : "?") + "_=" + jt.guid++ + o)),
            (v.url = f + o)),
        v.ifModified &&
          (ce.lastModified[f] &&
            T.setRequestHeader("If-Modified-Since", ce.lastModified[f]),
          ce.etag[f] && T.setRequestHeader("If-None-Match", ce.etag[f])),
        ((v.data && v.hasContent && !1 !== v.contentType) || t.contentType) &&
          T.setRequestHeader("Content-Type", v.contentType),
        T.setRequestHeader(
          "Accept",
          v.dataTypes[0] && v.accepts[v.dataTypes[0]]
            ? v.accepts[v.dataTypes[0]] +
                (v.dataTypes[0] !== "*" ? ", " + zt + "; q=0.01" : "")
            : v.accepts["*"]
        ),
        v.headers))
          T.setRequestHeader(i, v.headers[i])
        if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort()
        if (
          ((u = "abort"),
          b.add(v.complete),
          T.done(v.success),
          T.fail(v.error),
          (c = Vt(_t, v, t, T)))
        ) {
          if (((T.readyState = 1), g && m.trigger("ajaxSend", [T, v]), h)) return T
          v.async &&
            v.timeout > 0 &&
            (d = ie.setTimeout(function () {
              T.abort("timeout")
            }, v.timeout))
          try {
            ;(h = !1), c.send(a, l)
          } catch (e) {
            if (h) throw e
            l(-1, e)
          }
        } else l(-1, "No Transport")
        function l(e, t, n, r) {
          var i,
            o,
            a,
            s,
            u,
            l = t
          h ||
            ((h = !0),
            d && ie.clearTimeout(d),
            (c = void 0),
            (p = r || ""),
            (T.readyState = e > 0 ? 4 : 0),
            (i = (e >= 200 && e < 300) || e === 304),
            n &&
              (s = (function (e, t, n) {
                var r,
                  i,
                  o,
                  a,
                  s = e.contents,
                  u = e.dataTypes
                while (u[0] === "*")
                  u.shift(),
                    void 0 === r &&
                      (r = e.mimeType || t.getResponseHeader("Content-Type"))
                if (r)
                  for (i in s)
                    if (s[i] && s[i].test(r)) {
                      u.unshift(i)
                      break
                    }
                if (u[0] in n) o = u[0]
                else {
                  for (i in n) {
                    if (!u[0] || e.converters[i + " " + u[0]]) {
                      o = i
                      break
                    }
                    a || (a = i)
                  }
                  o = o || a
                }
                if (o) return o !== u[0] && u.unshift(o), n[o]
              })(v, T, n)),
            !i &&
              ce.inArray("script", v.dataTypes) > -1 &&
              ce.inArray("json", v.dataTypes) < 0 &&
              (v.converters["text script"] = function () {}),
            (s = (function (e, t, n, r) {
              var i,
                o,
                a,
                s,
                u,
                l = {},
                c = e.dataTypes.slice()
              if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a]
              o = c.shift()
              while (o)
                if (
                  (e.responseFields[o] && (n[e.responseFields[o]] = t),
                  !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                  (u = o),
                  (o = c.shift()))
                )
                  if (o === "*") o = u
                  else if (u !== "*" && u !== o) {
                    if (!(a = l[u + " " + o] || l["* " + o]))
                      for (i in l)
                        if (
                          (s = i.split(" "))[1] === o &&
                          (a = l[u + " " + s[0]] || l["* " + s[0]])
                        ) {
                          !0 === a
                            ? (a = l[i])
                            : !0 !== l[i] && ((o = s[0]), c.unshift(s[1]))
                          break
                        }
                    if (!0 !== a)
                      if (a && e.throws) t = a(t)
                      else
                        try {
                          t = a(t)
                        } catch (e) {
                          return {
                            state: "parsererror",
                            error: a ? e : "No conversion from " + u + " to " + o,
                          }
                        }
                  }
              return {state: "success", data: t}
            })(v, s, T, i)),
            i
              ? (v.ifModified &&
                  ((u = T.getResponseHeader("Last-Modified")) &&
                    (ce.lastModified[f] = u),
                  (u = T.getResponseHeader("etag")) && (ce.etag[f] = u)),
                e === 204 || v.type === "HEAD"
                  ? (l = "nocontent")
                  : e === 304
                  ? (l = "notmodified")
                  : ((l = s.state), (o = s.data), (i = !(a = s.error))))
              : ((a = l), (!e && l) || ((l = "error"), e < 0 && (e = 0))),
            (T.status = e),
            (T.statusText = String(t || l)),
            i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]),
            T.statusCode(w),
            (w = void 0),
            g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]),
            b.fireWith(y, [T, l]),
            g &&
              (m.trigger("ajaxComplete", [T, v]),
              --ce.active || ce.event.trigger("ajaxStop")))
        }
        return T
      },
      getJSON: function (e, t, n) {
        return ce.get(e, t, n, "json")
      },
      getScript: function (e, t) {
        return ce.get(e, void 0, t, "script")
      },
    }),
    ce.each(["get", "post"], function (e, i) {
      ce[i] = function (e, t, n, r) {
        return (
          v(t) && ((r = r || n), (n = t), (t = void 0)),
          ce.ajax(
            ce.extend(
              {url: e, type: i, dataType: r, data: t, success: n},
              ce.isPlainObject(e) && e
            )
          )
        )
      }
    }),
    ce.ajaxPrefilter(function (e) {
      var t
      for (t in e.headers)
        t.toLowerCase() === "content-type" && (e.contentType = e.headers[t] || "")
    }),
    (ce._evalUrl = function (e, t, n) {
      return ce.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        converters: {"text script": function () {}},
        dataFilter: function (e) {
          ce.globalEval(e, t, n)
        },
      })
    }),
    ce.fn.extend({
      wrapAll: function (e) {
        var t
        return (
          this[0] &&
            (v(e) && (e = e.call(this[0])),
            (t = ce(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                var e = this
                while (e.firstElementChild) e = e.firstElementChild
                return e
              })
              .append(this)),
          this
        )
      },
      wrapInner: function (n) {
        return v(n)
          ? this.each(function (e) {
              ce(this).wrapInner(n.call(this, e))
            })
          : this.each(function () {
              var e = ce(this),
                t = e.contents()
              t.length ? t.wrapAll(n) : e.append(n)
            })
      },
      wrap: function (t) {
        var n = v(t)
        return this.each(function (e) {
          ce(this).wrapAll(n ? t.call(this, e) : t)
        })
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not("body")
            .each(function () {
              ce(this).replaceWith(this.childNodes)
            }),
          this
        )
      },
    }),
    (ce.expr.pseudos.hidden = function (e) {
      return !ce.expr.pseudos.visible(e)
    }),
    (ce.expr.pseudos.visible = function (e) {
      return Boolean(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }),
    (ce.ajaxSettings.xhr = function () {
      try {
        return new ie.XMLHttpRequest()
      } catch (e) {}
    })
  var Yt = {0: 200, 1223: 204},
    Qt = ce.ajaxSettings.xhr()
  ;(le.cors = Boolean(Qt) && "withCredentials" in Qt),
    (le.ajax = Qt = Boolean(Qt)),
    ce.ajaxTransport(function (i) {
      var o, a
      if (le.cors || (Qt && !i.crossDomain))
        return {
          send: function (e, t) {
            var n,
              r = i.xhr()
            if ((r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields))
              for (n in i.xhrFields) r[n] = i.xhrFields[n]
            for (n in (i.mimeType &&
              r.overrideMimeType &&
              r.overrideMimeType(i.mimeType),
            i.crossDomain ||
              e["X-Requested-With"] ||
              (e["X-Requested-With"] = "XMLHttpRequest"),
            e))
              r.setRequestHeader(n, e[n])
            ;(o = function (e) {
              return function () {
                o &&
                  ((o =
                    a =
                    r.onload =
                    r.onerror =
                    r.onabort =
                    r.ontimeout =
                    r.onreadystatechange =
                      null),
                  e === "abort"
                    ? r.abort()
                    : e === "error"
                    ? typeof r.status !== "number"
                      ? t(0, "error")
                      : t(r.status, r.statusText)
                    : t(
                        Yt[r.status] || r.status,
                        r.statusText,
                        (r.responseType || "text") !== "text" ||
                          typeof r.responseText !== "string"
                          ? {binary: r.response}
                          : {text: r.responseText},
                        r.getAllResponseHeaders()
                      ))
              }
            }),
              (r.onload = o()),
              (a = r.onerror = r.ontimeout = o("error")),
              void 0 !== r.onabort
                ? (r.onabort = a)
                : (r.onreadystatechange = function () {
                    r.readyState === 4 &&
                      ie.setTimeout(function () {
                        o && a()
                      })
                  }),
              (o = o("abort"))
            try {
              r.send((i.hasContent && i.data) || null)
            } catch (e) {
              if (o) throw e
            }
          },
          abort: function () {
            o && o()
          },
        }
    }),
    ce.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1)
    }),
    ce.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: {script: /\b(?:java|ecma)script\b/},
      converters: {
        "text script": function (e) {
          return ce.globalEval(e), e
        },
      },
    }),
    ce.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }),
    ce.ajaxTransport("script", function (n) {
      var r, i
      if (n.crossDomain || n.scriptAttrs)
        return {
          send: function (e, t) {
            ;(r = ce("<script>")
              .attr(n.scriptAttrs || {})
              .prop({charset: n.scriptCharset, src: n.url})
              .on(
                "load error",
                (i = function (e) {
                  r.remove(), (i = null), e && t(e.type === "error" ? 404 : 200, e.type)
                })
              )),
              C.head.appendChild(r[0])
          },
          abort: function () {
            i && i()
          },
        }
    })
  var Jt,
    Kt = [],
    Zt = /(=)\?(?=&|$)|\?\?/
  ce.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = Kt.pop() || ce.expando + "_" + jt.guid++
      return (this[e] = !0), e
    },
  }),
    ce.ajaxPrefilter("json jsonp", function (e, t, n) {
      var r,
        i,
        o,
        a =
          !1 !== e.jsonp &&
          (Zt.test(e.url)
            ? "url"
            : typeof e.data === "string" &&
              (e.contentType || "").indexOf("application/x-www-form-urlencoded") ===
                0 &&
              Zt.test(e.data) &&
              "data")
      if (a || e.dataTypes[0] === "jsonp")
        return (
          (r = e.jsonpCallback =
            v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
          a
            ? (e[a] = e[a].replace(Zt, "$1" + r))
            : !1 !== e.jsonp &&
              (e.url += (At.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
          (e.converters["script json"] = function () {
            return o || ce.error(r + " was not called"), o[0]
          }),
          (e.dataTypes[0] = "json"),
          (i = ie[r]),
          (ie[r] = function () {
            o = arguments
          }),
          n.always(function () {
            void 0 === i ? ce(ie).removeProp(r) : (ie[r] = i),
              e[r] && ((e.jsonpCallback = t.jsonpCallback), Kt.push(r)),
              o && v(i) && i(o[0]),
              (o = i = void 0)
          }),
          "script"
        )
    }),
    (le.createHTMLDocument =
      (((Jt = C.implementation.createHTMLDocument("").body).innerHTML =
        "<form></form><form></form>"),
      Jt.childNodes.length === 2)),
    (ce.parseHTML = function (e, t, n) {
      return typeof e !== "string"
        ? []
        : (typeof t === "boolean" && ((n = t), (t = !1)),
          t ||
            (le.createHTMLDocument
              ? (((r = (t = C.implementation.createHTMLDocument("")).createElement(
                  "base"
                )).href = C.location.href),
                t.head.appendChild(r))
              : (t = C)),
          (o = !n && []),
          (i = w.exec(e))
            ? [t.createElement(i[1])]
            : ((i = Ae([e], t, o)),
              o && o.length && ce(o).remove(),
              ce.merge([], i.childNodes)))
      var r, i, o
    }),
    (ce.fn.load = function (e, t, n) {
      var r,
        i,
        o,
        a = this,
        s = e.indexOf(" ")
      return (
        s > -1 && ((r = Tt(e.slice(s))), (e = e.slice(0, s))),
        v(t) ? ((n = t), (t = void 0)) : t && typeof t === "object" && (i = "POST"),
        a.length > 0 &&
          ce
            .ajax({url: e, type: i || "GET", dataType: "html", data: t})
            .done(function (e) {
              ;(o = arguments),
                a.html(r ? ce("<div>").append(ce.parseHTML(e)).find(r) : e)
            })
            .always(
              n &&
                function (e, t) {
                  a.each(function () {
                    n.apply(this, o || [e.responseText, t, e])
                  })
                }
            ),
        this
      )
    }),
    (ce.expr.pseudos.animated = function (t) {
      return ce.grep(ce.timers, function (e) {
        return t === e.elem
      }).length
    }),
    (ce.offset = {
      setOffset: function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l = ce.css(e, "position"),
          c = ce(e),
          f = {}
        l === "static" && (e.style.position = "relative"),
          (s = c.offset()),
          (o = ce.css(e, "top")),
          (u = ce.css(e, "left")),
          (l === "absolute" || l === "fixed") && (o + u).indexOf("auto") > -1
            ? ((a = (r = c.position()).top), (i = r.left))
            : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
          v(t) && (t = t.call(e, n, ce.extend({}, s))),
          t.top != null && (f.top = t.top - s.top + a),
          t.left != null && (f.left = t.left - s.left + i),
          "using" in t ? t.using.call(e, f) : c.css(f)
      },
    }),
    ce.fn.extend({
      offset: function (t) {
        if (arguments.length)
          return void 0 === t
            ? this
            : this.each(function (e) {
                ce.offset.setOffset(this, t, e)
              })
        var e,
          n,
          r = this[0]
        return r
          ? r.getClientRects().length
            ? ((e = r.getBoundingClientRect()),
              (n = r.ownerDocument.defaultView),
              {top: e.top + n.pageYOffset, left: e.left + n.pageXOffset})
            : {top: 0, left: 0}
          : void 0
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n,
            r = this[0],
            i = {top: 0, left: 0}
          if (ce.css(r, "position") === "fixed") t = r.getBoundingClientRect()
          else {
            ;(t = this.offset()),
              (n = r.ownerDocument),
              (e = r.offsetParent || n.documentElement)
            while (
              e &&
              (e === n.body || e === n.documentElement) &&
              ce.css(e, "position") === "static"
            )
              e = e.parentNode
            e &&
              e !== r &&
              e.nodeType === 1 &&
              (((i = ce(e).offset()).top += ce.css(e, "borderTopWidth", !0)),
              (i.left += ce.css(e, "borderLeftWidth", !0)))
          }
          return {
            top: t.top - i.top - ce.css(r, "marginTop", !0),
            left: t.left - i.left - ce.css(r, "marginLeft", !0),
          }
        }
      },
      offsetParent: function () {
        return this.map(function () {
          var e = this.offsetParent
          while (e && ce.css(e, "position") === "static") e = e.offsetParent
          return e || J
        })
      },
    }),
    ce.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (t, i) {
      var o = i === "pageYOffset"
      ce.fn[t] = function (e) {
        return M(
          this,
          function (e, t, n) {
            var r
            if (
              (y(e) ? (r = e) : e.nodeType === 9 && (r = e.defaultView), void 0 === n)
            )
              return r ? r[i] : e[t]
            r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : (e[t] = n)
          },
          t,
          e,
          arguments.length
        )
      }
    }),
    ce.each(["top", "left"], function (e, n) {
      ce.cssHooks[n] = Ye(le.pixelPosition, function (e, t) {
        if (t) return (t = Ge(e, n)), _e.test(t) ? ce(e).position()[n] + "px" : t
      })
    }),
    ce.each({Height: "height", Width: "width"}, function (a, s) {
      ce.each({padding: "inner" + a, content: s, "": "outer" + a}, function (r, o) {
        ce.fn[o] = function (e, t) {
          var n = arguments.length && (r || typeof e !== "boolean"),
            i = r || (!0 === e || !0 === t ? "margin" : "border")
          return M(
            this,
            function (e, t, n) {
              var r
              return y(e)
                ? o.indexOf("outer") === 0
                  ? e["inner" + a]
                  : e.document.documentElement["client" + a]
                : e.nodeType === 9
                ? ((r = e.documentElement),
                  Math.max(
                    e.body["scroll" + a],
                    r["scroll" + a],
                    e.body["offset" + a],
                    r["offset" + a],
                    r["client" + a]
                  ))
                : void 0 === n
                ? ce.css(e, t, i)
                : ce.style(e, t, n, i)
            },
            s,
            n ? e : void 0,
            n
          )
        }
      })
    }),
    ce.each(
      ["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"],
      function (e, t) {
        ce.fn[t] = function (e) {
          return this.on(t, e)
        }
      }
    ),
    ce.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n)
      },
      unbind: function (e, t) {
        return this.off(e, null, t)
      },
      delegate: function (e, t, n, r) {
        return this.on(t, e, n, r)
      },
      undelegate: function (e, t, n) {
        return arguments.length === 1 ? this.off(e, "**") : this.off(t, e || "**", n)
      },
      hover: function (e, t) {
        return this.on("mouseenter", e).on("mouseleave", t || e)
      },
    }),
    ce.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function (e, n) {
        ce.fn[n] = function (e, t) {
          return arguments.length > 0 ? this.on(n, null, e, t) : this.trigger(n)
        }
      }
    )
  var en = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g
  ;(ce.proxy = function (e, t) {
    var n, r, i
    if ((typeof t === "string" && ((n = e[t]), (t = e), (e = n)), v(e)))
      return (
        (r = ae.call(arguments, 2)),
        ((i = function () {
          return e.apply(t || this, r.concat(ae.call(arguments)))
        }).guid = e.guid =
          e.guid || ce.guid++),
        i
      )
  }),
    (ce.holdReady = function (e) {
      e ? ce.readyWait++ : ce.ready(!0)
    }),
    (ce.isArray = Array.isArray),
    (ce.parseJSON = JSON.parse),
    (ce.nodeName = fe),
    (ce.isFunction = v),
    (ce.isWindow = y),
    (ce.camelCase = F),
    (ce.type = x),
    (ce.now = Date.now),
    (ce.isNumeric = function (e) {
      var t = ce.type(e)
      return (t === "number" || t === "string") && !isNaN(e - parseFloat(e))
    }),
    (ce.trim = function (e) {
      return e == null ? "" : String(e).replace(en, "$1")
    }),
    typeof define === "function" &&
      define.amd &&
      define("jquery", [], function () {
        return ce
      })
  var tn = ie.jQuery,
    nn = ie.$
  return (
    (ce.noConflict = function (e) {
      return ie.$ === ce && (ie.$ = nn), e && ie.jQuery === ce && (ie.jQuery = tn), ce
    }),
    typeof e === "undefined" && (ie.jQuery = ie.$ = ce),
    ce
  )
})
