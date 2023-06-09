! function (t, e) {
	"object" == typeof exports && "undefined" != typeof module ? e(require("@firebase/app")) : "function" == typeof define && define.amd ?
		define(["@firebase/app"], e) : e((t = t || self).firebase)
}(this, function (Wh) {
	"use strict";
	try {
		(function () {
			Wh = Wh && Wh.hasOwnProperty("default") ? Wh.default : Wh,
				function () {
					var t, o = "function" == typeof Object.defineProperties ? Object.defineProperty : function (t, e, n) {
							t != Array.prototype && t != Object.prototype && (t[e] = n.value)
						},
						a = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this;

					function c(t) {
						var e, n, i = "undefined" != typeof Symbol && Symbol.iterator && t[Symbol.iterator];
						return i ? i.call(t) : {
							next: (e = t, n = 0, function () {
								return n < e.length ? {
									done: !1,
									value: e[n++]
								} : {
									done: !0
								}
							})
						}
					}! function (t, e) {
						if (e) {
							var n = a;
							t = t.split(".");
							for (var i = 0; i < t.length - 1; i++) {
								var r = t[i];
								r in n || (n[r] = {}), n = n[r]
							}(e = e(i = n[t = t[t.length - 1]])) != i && null != e && o(n, t, {
								configurable: !0,
								writable: !0,
								value: e
							})
						}
					}("Promise", function (t) {
						function s(t) {
							this.b = 0, this.c = void 0, this.a = [];
							var e = this.f();
							try {
								t(e.resolve, e.reject)
							} catch (t) {
								e.reject(t)
							}
						}

						function e() {
							this.a = null
						}

						function u(e) {
							return e instanceof s ? e : new s(function (t) {
								t(e)
							})
						}
						if (t) return t;
						e.prototype.b = function (t) {
							if (null == this.a) {
								this.a = [];
								var e = this;
								this.c(function () {
									e.g()
								})
							}
							this.a.push(t)
						};
						var n = a.setTimeout;
						e.prototype.c = function (t) {
							n(t, 0)
						}, e.prototype.g = function () {
							for (; this.a && this.a.length;) {
								var t = this.a;
								this.a = [];
								for (var e = 0; e < t.length; ++e) {
									var n = t[e];
									t[e] = null;
									try {
										n()
									} catch (t) {
										this.f(t)
									}
								}
							}
							this.a = null
						}, e.prototype.f = function (t) {
							this.c(function () {
								throw t
							})
						}, s.prototype.f = function () {
							function t(e) {
								return function (t) {
									i || (i = !0, e.call(n, t))
								}
							}
							var n = this,
								i = !1;
							return {
								resolve: t(this.o),
								reject: t(this.g)
							}
						}, s.prototype.o = function (t) {
							if (t === this) this.g(new TypeError("A Promise cannot resolve to itself"));
							else if (t instanceof s) this.u(t);
							else {
								t: switch (typeof t) {
								case "object":
									var e = null != t;
									break t;
								case "function":
									e = !0;
									break t;
								default:
									e = !1
								}
								e ? this.l(t) : this.h(t)
							}
						}, s.prototype.l = function (t) {
							var e = void 0;
							try {
								e = t.then
							} catch (t) {
								return void this.g(t)
							}
							"function" == typeof e ? this.v(e, t) : this.h(t)
						}, s.prototype.g = function (t) {
							this.i(2, t)
						}, s.prototype.h = function (t) {
							this.i(1, t)
						}, s.prototype.i = function (t, e) {
							if (0 != this.b) throw Error("Cannot settle(" + t + ", " + e + "): Promise already settled in state" + this.b);
							this.b = t, this.c = e, this.m()
						}, s.prototype.m = function () {
							if (null != this.a) {
								for (var t = 0; t < this.a.length; ++t) r.b(this.a[t]);
								this.a = null
							}
						};
						var r = new e;
						return s.prototype.u = function (t) {
							var e = this.f();
							t.Ja(e.resolve, e.reject)
						}, s.prototype.v = function (t, e) {
							var n = this.f();
							try {
								t.call(e, n.resolve, n.reject)
							} catch (t) {
								n.reject(t)
							}
						}, s.prototype.then = function (t, e) {
							function n(e, t) {
								return "function" == typeof e ? function (t) {
									try {
										i(e(t))
									} catch (t) {
										r(t)
									}
								} : t
							}
							var i, r, o = new s(function (t, e) {
								i = t, r = e
							});
							return this.Ja(n(t, i), n(e, r)), o
						}, s.prototype.catch = function (t) {
							return this.then(void 0, t)
						}, s.prototype.Ja = function (t, e) {
							function n() {
								switch (i.b) {
								case 1:
									t(i.c);
									break;
								case 2:
									e(i.c);
									break;
								default:
									throw Error("Unexpected state: " + i.b)
								}
							}
							var i = this;
							null == this.a ? r.b(n) : this.a.push(n)
						}, s.resolve = u, s.reject = function (n) {
							return new s(function (t, e) {
								e(n)
							})
						}, s.race = function (r) {
							return new s(function (t, e) {
								for (var n = c(r), i = n.next(); !i.done; i = n.next()) u(i.value).Ja(t, e)
							})
						}, s.all = function (t) {
							var o = c(t),
								a = o.next();
							return a.done ? u([]) : new s(function (n, t) {
								function e(e) {
									return function (t) {
										i[e] = t, 0 == --r && n(i)
									}
								}
								for (var i = [], r = 0; i.push(void 0), r++, u(a.value).Ja(e(i.length - 1), t), !(a = o.next()).done;);
							})
						}, s
					});
					var u = u || {},
						l = this;

					function h(t) {
						return "string" == typeof t
					}

					function n(t) {
						return "boolean" == typeof t
					}
					var f = /^[\w+/_-]+[=]{0,2}$/,
						d = null;

					function s() {}

					function p(t) {
						var e = typeof t;
						if ("object" == e) {
							if (!t) return "null";
							if (t instanceof Array) return "array";
							if (t instanceof Object) return e;
							var n = Object.prototype.toString.call(t);
							if ("[object Window]" == n) return "object";
							if ("[object Array]" == n || "number" == typeof t.length && void 0 !== t.splice && void 0 !== t.propertyIsEnumerable && !t.propertyIsEnumerable(
									"splice")) return "array";
							if ("[object Function]" == n || void 0 !== t.call && void 0 !== t.propertyIsEnumerable && !t.propertyIsEnumerable("call")) return "function"
						} else if ("function" == e && void 0 === t.call) return "object";
						return e
					}

					function i(t) {
						return null === t
					}

					function v(t) {
						return "array" == p(t)
					}

					function m(t) {
						var e = p(t);
						return "array" == e || "object" == e && "number" == typeof t.length
					}

					function g(t) {
						return "function" == p(t)
					}

					function b(t) {
						var e = typeof t;
						return "object" == e && null != t || "function" == e
					}
					var e = "closure_uid_" + (1e9 * Math.random() >>> 0),
						r = 0;

					function y(t, e, n) {
						return t.call.apply(t.bind, arguments)
					}

					function w(e, n, t) {
						if (!e) throw Error();
						if (2 < arguments.length) {
							var i = Array.prototype.slice.call(arguments, 2);
							return function () {
								var t = Array.prototype.slice.call(arguments);
								return Array.prototype.unshift.apply(t, i), e.apply(n, t)
							}
						}
						return function () {
							return e.apply(n, arguments)
						}
					}

					function I(t, e, n) {
						return (I = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? y : w).apply(null,
							arguments)
					}

					function T(e, t) {
						var n = Array.prototype.slice.call(arguments, 1);
						return function () {
							var t = n.slice();
							return t.push.apply(t, arguments), e.apply(this, t)
						}
					}
					var k = Date.now || function () {
						return +new Date
					};

					function E(t, o) {
						function e() {}
						e.prototype = o.prototype, t.qb = o.prototype, t.prototype = new e, (t.prototype.constructor = t).cd = function (t, e, n) {
							for (var i = Array(arguments.length - 2), r = 2; r < arguments.length; r++) i[r - 2] = arguments[r];
							return o.prototype[e].apply(t, i)
						}
					}

					function S(t) {
						if (!t) return !1;
						try {
							return !!t.$goog_Thenable
						} catch (t) {
							return !1
						}
					}

					function A(t) {
						if (Error.captureStackTrace) Error.captureStackTrace(this, A);
						else {
							var e = Error().stack;
							e && (this.stack = e)
						}
						t && (this.message = String(t))
					}

					function N(t, e) {
						for (var n = "", i = (t = t.split("%s")).length - 1, r = 0; r < i; r++) n += t[r] + (r < e.length ? e[r] : "%s");
						A.call(this, n + t[i])
					}

					function O(t, e) {
						throw new N("Failure" + (t ? ": " + t : ""), Array.prototype.slice.call(arguments, 1))
					}

					function _(t, e) {
						this.c = t, this.f = e, this.b = 0, this.a = null
					}

					function P(t, e) {
						t.f(e), t.b < 100 && (t.b++, e.next = t.a, t.a = e)
					}

					function C() {
						this.b = this.a = null
					}
					E(A, Error), A.prototype.name = "CustomError", E(N, A), N.prototype.name = "AssertionError", _.prototype.get = function () {
						if (0 < this.b) {
							this.b--;
							var t = this.a;
							this.a = t.next, t.next = null
						} else t = this.c();
						return t
					};
					var R = new _(function () {
						return new D
					}, function (t) {
						t.reset()
					});

					function D() {
						this.next = this.b = this.a = null
					}
					C.prototype.add = function (t, e) {
						var n = R.get();
						n.set(t, e), this.b ? this.b.next = n : this.a = n, this.b = n
					}, D.prototype.set = function (t, e) {
						this.a = t, this.b = e, this.next = null
					}, D.prototype.reset = function () {
						this.next = this.b = this.a = null
					};
					var L = Array.prototype.indexOf ? function (t, e) {
							return Array.prototype.indexOf.call(t, e, void 0)
						} : function (t, e) {
							if (h(t)) return h(e) && 1 == e.length ? t.indexOf(e, 0) : -1;
							for (var n = 0; n < t.length; n++)
								if (n in t && t[n] === e) return n;
							return -1
						},
						x = Array.prototype.forEach ? function (t, e, n) {
							Array.prototype.forEach.call(t, e, n)
						} : function (t, e, n) {
							for (var i = t.length, r = h(t) ? t.split("") : t, o = 0; o < i; o++) o in r && e.call(n, r[o], o, t)
						};
					var M = Array.prototype.map ? function (t, e) {
							return Array.prototype.map.call(t, e, void 0)
						} : function (t, e) {
							for (var n = t.length, i = Array(n), r = h(t) ? t.split("") : t, o = 0; o < n; o++) o in r && (i[o] = e.call(void 0, r[o], o, t));
							return i
						},
						j = Array.prototype.some ? function (t, e) {
							return Array.prototype.some.call(t, e, void 0)
						} : function (t, e) {
							for (var n = t.length, i = h(t) ? t.split("") : t, r = 0; r < n; r++)
								if (r in i && e.call(void 0, i[r], r, t)) return !0;
							return !1
						};

					function U(t, e) {
						return 0 <= L(t, e)
					}

					function V(t, e) {
						var n;
						return (n = 0 <= (e = L(t, e))) && Array.prototype.splice.call(t, e, 1), n
					}

					function K(n, i) {
						! function (t, e) {
							for (var n = h(t) ? t.split("") : t, i = t.length - 1; 0 <= i; --i) i in n && e.call(void 0, n[i], i, t)
						}(n, function (t, e) {
							i.call(void 0, t, e, n) && 1 == Array.prototype.splice.call(n, e, 1).length && 0
						})
					}

					function F(t) {
						return Array.prototype.concat.apply([], arguments)
					}

					function q(t) {
						var e = t.length;
						if (0 < e) {
							for (var n = Array(e), i = 0; i < e; i++) n[i] = t[i];
							return n
						}
						return []
					}
					var H, B = String.prototype.trim ? function (t) {
							return t.trim()
						} : function (t) {
							return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]
						},
						G = /&/g,
						W = /</g,
						X = />/g,
						J = /"/g,
						z = /'/g,
						Y = /\x00/g,
						$ = /[\x00&<>"']/;

					function Z(t, e) {
						return -1 != t.indexOf(e)
					}

					function Q(t, e) {
						return t < e ? -1 : e < t ? 1 : 0
					}
					t: {
						var tt = l.navigator;
						if (tt) {
							var et = tt.userAgent;
							if (et) {
								H = et;
								break t
							}
						}
						H = ""
					}

					function nt(t) {
						return Z(H, t)
					}

					function it(t, e) {
						for (var n in t) e.call(void 0, t[n], n, t)
					}

					function rt(t) {
						for (var e in t) return !1;
						return !0
					}

					function ot(t) {
						var e, n = {};
						for (e in t) n[e] = t[e];
						return n
					}
					var at, st, ut = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

					function ct(t, e) {
						for (var n, i, r = 1; r < arguments.length; r++) {
							for (n in i = arguments[r]) t[n] = i[n];
							for (var o = 0; o < ut.length; o++) n = ut[o], Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
						}
					}

					function ht(t, e) {
						for (var n = t.split("%s"), i = "", r = Array.prototype.slice.call(arguments, 1); r.length && 1 < n.length;) i += n.shift() + r.shift();
						return i + n.join("%s")
					}

					function lt(t) {
						return $.test(t) && (-1 != t.indexOf("&") && (t = t.replace(G, "&amp;")), -1 != t.indexOf("<") && (t = t.replace(W, "&lt;")), -1 !=
							t.indexOf(">") && (t = t.replace(X, "&gt;")), -1 != t.indexOf('"') && (t = t.replace(J, "&quot;")), -1 != t.indexOf("'") && (t =
								t.replace(z, "&#39;")), -1 != t.indexOf("\0") && (t = t.replace(Y, "&#0;"))), t
					}

					function ft(t) {
						l.setTimeout(function () {
							throw t
						}, 0)
					}

					function dt(t, e) {
						st || function () {
							if (l.Promise && l.Promise.resolve) {
								var t = l.Promise.resolve(void 0);
								st = function () {
									t.then(mt)
								}
							} else st = function () {
								var t = mt;
								!g(l.setImmediate) || l.Window && l.Window.prototype && !nt("Edge") && l.Window.prototype.setImmediate == l.setImmediate ? (at ||
									(at = function () {
										var t = l.MessageChannel;
										if (void 0 === t && "undefined" != typeof window && window.postMessage && window.addEventListener && !nt("Presto") && (t =
												function () {
													var t = document.createElement("IFRAME");
													t.style.display = "none", t.src = "", document.documentElement.appendChild(t);
													var e = t.contentWindow;
													(t = e.document).open(), t.write(""), t.close();
													var n = "callImmediate" + Math.random(),
														i = "file:" == e.location.protocol ? "*" : e.location.protocol + "//" + e.location.host;
													t = I(function (t) {
														"*" != i && t.origin != i || t.data != n || this.port1.onmessage()
													}, this), e.addEventListener("message", t, !1), this.port1 = {}, this.port2 = {
														postMessage: function () {
															e.postMessage(n, i)
														}
													}
												}), void 0 === t || nt("Trident") || nt("MSIE")) return "undefined" != typeof document && "onreadystatechange" in
											document.createElement("SCRIPT") ? function (t) {
												var e = document.createElement("SCRIPT");
												e.onreadystatechange = function () {
													e.onreadystatechange = null, e.parentNode.removeChild(e), e = null, t(), t = null
												}, document.documentElement.appendChild(e)
											} : function (t) {
												l.setTimeout(t, 0)
											};
										var e = new t,
											n = {},
											i = n;
										return e.port1.onmessage = function () {
												if (void 0 !== n.next) {
													var t = (n = n.next).yb;
													n.yb = null, t()
												}
											},
											function (t) {
												i.next = {
													yb: t
												}, i = i.next, e.port2.postMessage(0)
											}
									}()), at(t)) : l.setImmediate(t)
							}
						}(), pt || (st(), pt = !0), vt.add(t, e)
					}
					var pt = !1,
						vt = new C;

					function mt() {
						for (var t; n = e = void 0, n = null, (e = vt).a && (n = e.a, e.a = e.a.next, e.a || (e.b = null), n.next = null), t = n;) {
							try {
								t.a.call(t.b)
							} catch (t) {
								ft(t)
							}
							P(R, t)
						}
						var e, n;
						pt = !1
					}

					function gt(t, e) {
						if (this.a = bt, this.i = void 0, this.f = this.b = this.c = null, this.g = this.h = !1, t != s) try {
							var n = this;
							t.call(e, function (t) {
								Pt(n, yt, t)
							}, function (t) {
								if (!(t instanceof jt)) try {
									if (t instanceof Error) throw t;
									throw Error("Promise rejected.")
								} catch (t) {}
								Pt(n, wt, t)
							})
						} catch (t) {
							Pt(this, wt, t)
						}
					}
					var bt = 0,
						yt = 2,
						wt = 3;

					function It() {
						this.next = this.f = this.b = this.g = this.a = null, this.c = !1
					}
					It.prototype.reset = function () {
						this.f = this.b = this.g = this.a = null, this.c = !1
					};
					var Tt = new _(function () {
						return new It
					}, function (t) {
						t.reset()
					});

					function kt(t, e, n) {
						var i = Tt.get();
						return i.g = t, i.b = e, i.f = n, i
					}

					function Et(t) {
						if (t instanceof gt) return t;
						var e = new gt(s);
						return Pt(e, yt, t), e
					}

					function St(n) {
						return new gt(function (t, e) {
							e(n)
						})
					}

					function At(t, e, n) {
						Ct(t, e, n, null) || dt(T(e, t))
					}

					function Nt(n) {
						return new gt(function (i) {
							var r = n.length,
								o = [];
							if (r)
								for (var t = function (t, e, n) {
										r--, o[t] = e ? {
											Eb: !0,
											value: n
										} : {
											Eb: !1,
											reason: n
										}, 0 == r && i(o)
									}, e = 0; e < n.length; e++) At(n[e], T(t, e, !0), T(t, e, !1));
							else i(o)
						})
					}

					function Ot(t, e) {
						t.b || t.a != yt && t.a != wt || Rt(t), t.f ? t.f.next = e : t.b = e, t.f = e
					}

					function _t(t, r, o, a) {
						var e = kt(null, null, null);
						return e.a = new gt(function (n, i) {
							e.g = r ? function (t) {
								try {
									var e = r.call(a, t);
									n(e)
								} catch (t) {
									i(t)
								}
							} : n, e.b = o ? function (t) {
								try {
									var e = o.call(a, t);
									void 0 === e && t instanceof jt ? i(t) : n(e)
								} catch (t) {
									i(t)
								}
							} : i
						}), Ot(e.a.c = t, e), e.a
					}

					function Pt(t, e, n) {
						var i, r;
						t.a == bt && (t === n && (e = wt, n = new TypeError("Promise cannot resolve to itself")), t.a = 1, Ct(n, t.Lc, t.Mc, t) || (t.i = n,
							t.a = e, t.c = null, Rt(t), e != wt || n instanceof jt || (r = n, (i = t).g = !0, dt(function () {
								i.g && Mt.call(null, r)
							}))))
					}

					function Ct(t, e, n, i) {
						if (t instanceof gt) return Ot(t, kt(e || s, n || null, i)), !0;
						if (S(t)) return t.then(e, n, i), !0;
						if (b(t)) try {
							var r = t.then;
							if (g(r)) return function (t, e, n, i, r) {
								function o(t) {
									a || (a = !0, i.call(r, t))
								}
								var a = !1;
								try {
									e.call(t, function (t) {
										a || (a = !0, n.call(r, t))
									}, o)
								} catch (t) {
									o(t)
								}
							}(t, r, e, n, i), !0
						} catch (t) {
							return n.call(i, t), !0
						}
						return !1
					}

					function Rt(t) {
						t.h || (t.h = !0, dt(t.Xb, t))
					}

					function Dt(t) {
						var e = null;
						return t.b && (e = t.b, t.b = e.next, e.next = null), t.b || (t.f = null), e
					}

					function Lt(t, e, n, i) {
						if (n == wt && e.b && !e.c)
							for (; t && t.g; t = t.c) t.g = !1;
						if (e.a) e.a.c = null, xt(e, n, i);
						else try {
							e.c ? e.g.call(e.f) : xt(e, n, i)
						} catch (t) {
							Mt.call(null, t)
						}
						P(Tt, e)
					}

					function xt(t, e, n) {
						e == yt ? t.g.call(t.f, n) : t.b && t.b.call(t.f, n)
					}
					gt.prototype.then = function (t, e, n) {
						return _t(this, g(t) ? t : null, g(e) ? e : null, n)
					}, gt.prototype.$goog_Thenable = !0, (t = gt.prototype).ia = function (t, e) {
						return (t = kt(t, t, e)).c = !0, Ot(this, t), this
					}, t.s = function (t, e) {
						return _t(this, null, t, e)
					}, t.cancel = function (t) {
						this.a == bt && dt(function () {
							! function t(e, n) {
								if (e.a == bt)
									if (e.c) {
										var i = e.c;
										if (i.b) {
											for (var r = 0, o = null, a = null, s = i.b; s && (s.c || (r++, s.a == e && (o = s), !(o && 1 < r))); s = s.next) o || (a =
												s);
											o && (i.a == bt && 1 == r ? t(i, n) : (a ? ((r = a).next == i.f && (i.f = r), r.next = r.next.next) : Dt(i), Lt(i, o, wt, n)))
										}
										e.c = null
									} else Pt(e, wt, n)
							}(this, new jt(t))
						}, this)
					}, t.Lc = function (t) {
						this.a = bt, Pt(this, yt, t)
					}, t.Mc = function (t) {
						this.a = bt, Pt(this, wt, t)
					}, t.Xb = function () {
						for (var t; t = Dt(this);) Lt(this, t, this.a, this.i);
						this.h = !1
					};
					var Mt = ft;

					function jt(t) {
						A.call(this, t)
					}

					function Ut() {
						this.qa = this.qa, this.ja = this.ja
					}
					E(jt, A);
					var Vt = 0;

					function Kt(t) {
						if (!t.qa && (t.qa = !0, t.va(), 0 != Vt)) t[e] || (t[e] = ++r)
					}

					function Ft(t) {
						return Ft[" "](t), t
					}
					Ut.prototype.qa = !(jt.prototype.name = "cancel"), Ut.prototype.va = function () {
						if (this.ja)
							for (; this.ja.length;) this.ja.shift()()
					}, Ft[" "] = s;
					var qt, Ht, Bt = nt("Opera"),
						Gt = nt("Trident") || nt("MSIE"),
						Wt = nt("Edge"),
						Xt = Wt || Gt,
						Jt = nt("Gecko") && !(Z(H.toLowerCase(), "webkit") && !nt("Edge")) && !(nt("Trident") || nt("MSIE")) && !nt("Edge"),
						zt = Z(H.toLowerCase(), "webkit") && !nt("Edge");

					function Yt() {
						var t = l.document;
						return t ? t.documentMode : void 0
					}
					t: {
						var $t = "",
							Zt = (Ht = H, Jt ? /rv:([^\);]+)(\)|;)/.exec(Ht) : Wt ? /Edge\/([\d\.]+)/.exec(Ht) : Gt ? /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(
								Ht) : zt ? /WebKit\/(\S+)/.exec(Ht) : Bt ? /(?:Version)[ \/]?(\S+)/.exec(Ht) : void 0);
						if (Zt && ($t = Zt ? Zt[1] : ""), Gt) {
							var Qt = Yt();
							if (null != Qt && Qt > parseFloat($t)) {
								qt = String(Qt);
								break t
							}
						}
						qt = $t
					}
					var te, ee = {};

					function ne(s) {
						return t = s, e = function () {
							for (var t = 0, e = B(String(qt)).split("."), n = B(String(s)).split("."), i = Math.max(e.length, n.length), r = 0; 0 == t && r <
								i; r++) {
								var o = e[r] || "",
									a = n[r] || "";
								do {
									if (o = /(\d*)(\D*)(.*)/.exec(o) || ["", "", "", ""], a = /(\d*)(\D*)(.*)/.exec(a) || ["", "", "", ""], 0 == o[0].length && 0 ==
										a[0].length) break;
									t = Q(0 == o[1].length ? 0 : parseInt(o[1], 10), 0 == a[1].length ? 0 : parseInt(a[1], 10)) || Q(0 == o[2].length, 0 == a[2].length) ||
										Q(o[2], a[2]), o = o[3], a = a[3]
								} while (0 == t)
							}
							return 0 <= t
						}, n = ee, Object.prototype.hasOwnProperty.call(n, t) ? n[t] : n[t] = e(t);
						var t, e, n
					}
					var ie = l.document;
					te = ie && Gt ? Yt() || ("CSS1Compat" == ie.compatMode ? parseInt(qt, 10) : 5) : void 0;
					var re = Object.freeze || function (t) {
							return t
						},
						oe = !Gt || 9 <= Number(te),
						ae = Gt && !ne("9"),
						se = function () {
							if (!l.addEventListener || !Object.defineProperty) return !1;
							var t = !1,
								e = Object.defineProperty({}, "passive", {
									get: function () {
										t = !0
									}
								});
							try {
								l.addEventListener("test", s, e), l.removeEventListener("test", s, e)
							} catch (t) {}
							return t
						}();

					function ue(t, e) {
						this.type = t, this.b = this.target = e, this.Kb = !0
					}

					function ce(t, e) {
						if (ue.call(this, t ? t.type : ""), this.relatedTarget = this.b = this.target = null, this.button = this.screenY = this.screenX =
							this.clientY = this.clientX = 0, this.key = "", this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1, this.pointerId = 0,
							this.pointerType = "", this.a = null, t) {
							var n = this.type = t.type,
								i = t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : null;
							if (this.target = t.target || t.srcElement, this.b = e, e = t.relatedTarget) {
								if (Jt) {
									t: {
										try {
											Ft(e.nodeName);
											var r = !0;
											break t
										} catch (t) {}
										r = !1
									}
									r || (e = null)
								}
							} else "mouseover" == n ? e = t.fromElement : "mouseout" == n && (e = t.toElement);
							this.relatedTarget = e, this.screenY = i ? (this.clientX = void 0 !== i.clientX ? i.clientX : i.pageX, this.clientY = void 0 !== i
									.clientY ? i.clientY : i.pageY, this.screenX = i.screenX || 0, i.screenY || 0) : (this.clientX = void 0 !== t.clientX ? t.clientX :
									t.pageX, this.clientY = void 0 !== t.clientY ? t.clientY : t.pageY, this.screenX = t.screenX || 0, t.screenY || 0), this.button =
								t.button, this.key = t.key || "", this.ctrlKey = t.ctrlKey, this.altKey = t.altKey, this.shiftKey = t.shiftKey, this.metaKey = t.metaKey,
								this.pointerId = t.pointerId || 0, this.pointerType = h(t.pointerType) ? t.pointerType : he[t.pointerType] || "", (this.a = t).defaultPrevented &&
								this.preventDefault()
						}
					}
					ue.prototype.preventDefault = function () {
						this.Kb = !1
					}, E(ce, ue);
					var he = re({
						2: "touch",
						3: "pen",
						4: "mouse"
					});
					ce.prototype.preventDefault = function () {
						ce.qb.preventDefault.call(this);
						var t = this.a;
						if (t.preventDefault) t.preventDefault();
						else if (t.returnValue = !1, ae) try {
							(t.ctrlKey || 112 <= t.keyCode && t.keyCode <= 123) && (t.keyCode = -1)
						} catch (t) {}
					}, ce.prototype.f = function () {
						return this.a
					};
					var le = "closure_listenable_" + (1e6 * Math.random() | 0),
						fe = 0;

					function de(t, e, n, i, r) {
						this.listener = t, this.proxy = null, this.src = e, this.type = n, this.capture = !!i, this.Na = r, this.key = ++fe, this.oa = this
							.Ia = !1
					}

					function pe(t) {
						t.oa = !0, t.listener = null, t.proxy = null, t.src = null, t.Na = null
					}

					function ve(t) {
						this.src = t, this.a = {}, this.b = 0
					}

					function me(t, e) {
						var n = e.type;
						n in t.a && V(t.a[n], e) && (pe(e), 0 == t.a[n].length && (delete t.a[n], t.b--))
					}

					function ge(t, e, n, i) {
						for (var r = 0; r < t.length; ++r) {
							var o = t[r];
							if (!o.oa && o.listener == e && o.capture == !!n && o.Na == i) return r
						}
						return -1
					}
					ve.prototype.add = function (t, e, n, i, r) {
						var o = t.toString();
						(t = this.a[o]) || (t = this.a[o] = [], this.b++);
						var a = ge(t, e, i, r);
						return -1 < a ? (e = t[a], n || (e.Ia = !1)) : ((e = new de(e, this.src, o, !!i, r)).Ia = n, t.push(e)), e
					};
					var be = "closure_lm_" + (1e6 * Math.random() | 0),
						ye = {};

					function we(t, e, n, i, r) {
						if (i && i.once) Te(t, e, n, i, r);
						else if (v(e))
							for (var o = 0; o < e.length; o++) we(t, e[o], n, i, r);
						else n = Ce(n), t && t[le] ? De(t, e, n, b(i) ? !!i.capture : !!i, r) : Ie(t, e, n, !1, i, r)
					}

					function Ie(t, e, n, i, r, o) {
						if (!e) throw Error("Invalid event type");
						var a, s, u = b(r) ? !!r.capture : !!r,
							c = _e(t);
						if (c || (t[be] = c = new ve(t)), !(n = c.add(e, n, i, u, o)).proxy)
							if (a = Oe, i = s = oe ? function (t) {
									return a.call(s.src, s.listener, t)
								} : function (t) {
									if (!(t = a.call(s.src, s.listener, t))) return t
								}, (n.proxy = i).src = t, i.listener = n, t.addEventListener) se || (r = u), void 0 === r && (r = !1), t.addEventListener(e.toString(),
								i, r);
							else if (t.attachEvent) t.attachEvent(Se(e.toString()), i);
						else {
							if (!t.addListener || !t.removeListener) throw Error("addEventListener and attachEvent are unavailable.");
							t.addListener(i)
						}
					}

					function Te(t, e, n, i, r) {
						if (v(e))
							for (var o = 0; o < e.length; o++) Te(t, e[o], n, i, r);
						else n = Ce(n), t && t[le] ? Le(t, e, n, b(i) ? !!i.capture : !!i, r) : Ie(t, e, n, !0, i, r)
					}

					function ke(t, e, n, i, r) {
						if (v(e))
							for (var o = 0; o < e.length; o++) ke(t, e[o], n, i, r);
						else i = b(i) ? !!i.capture : !!i, n = Ce(n), t && t[le] ? (t = t.m, (e = String(e).toString()) in t.a && (-1 < (n = ge(o = t.a[e],
							n, i, r)) && (pe(o[n]), Array.prototype.splice.call(o, n, 1), 0 == o.length && (delete t.a[e], t.b--)))) : t && (t = _e(t)) && (e =
							t.a[e.toString()], t = -1, e && (t = ge(e, n, i, r)), (n = -1 < t ? e[t] : null) && Ee(n))
					}

					function Ee(t) {
						if ("number" != typeof t && t && !t.oa) {
							var e = t.src;
							if (e && e[le]) me(e.m, t);
							else {
								var n = t.type,
									i = t.proxy;
								e.removeEventListener ? e.removeEventListener(n, i, t.capture) : e.detachEvent ? e.detachEvent(Se(n), i) : e.addListener && e.removeListener &&
									e.removeListener(i), (n = _e(e)) ? (me(n, t), 0 == n.b && (n.src = null, e[be] = null)) : pe(t)
							}
						}
					}

					function Se(t) {
						return t in ye ? ye[t] : ye[t] = "on" + t
					}

					function Ae(t, e, n, i) {
						var r = !0;
						if ((t = _e(t)) && (e = t.a[e.toString()]))
							for (e = e.concat(), t = 0; t < e.length; t++) {
								var o = e[t];
								o && o.capture == n && !o.oa && (o = Ne(o, i), r = r && !1 !== o)
							}
						return r
					}

					function Ne(t, e) {
						var n = t.listener,
							i = t.Na || t.src;
						return t.Ia && Ee(t), n.call(i, e)
					}

					function Oe(t, e) {
						if (t.oa) return !0;
						if (oe) return Ne(t, new ce(e, this));
						if (!e) t: {
							e = ["window", "event"];
							for (var n = l, i = 0; i < e.length; i++)
								if (null == (n = n[e[i]])) {
									e = null;
									break t
								}
							e = n
						}
						if (e = new ce(i = e, this), n = !0, !(i.keyCode < 0 || null != i.returnValue)) {
							t: {
								var r = !1;
								if (0 == i.keyCode) try {
									i.keyCode = -1;
									break t
								} catch (t) {
									r = !0
								}(r || null == i.returnValue) && (i.returnValue = !0)
							}
							for (i = [], r = e.b; r; r = r.parentNode) i.push(r);
							for (t = t.type, r = i.length - 1; 0 <= r; r--) {
								e.b = i[r];
								var o = Ae(i[r], t, !0, e);
								n = n && o
							}
							for (r = 0; r < i.length; r++) e.b = i[r],
							o = Ae(i[r], t, !1, e),
							n = n && o
						}
						return n
					}

					function _e(t) {
						return (t = t[be]) instanceof ve ? t : null
					}
					var Pe = "__closure_events_fn_" + (1e9 * Math.random() >>> 0);

					function Ce(e) {
						return g(e) ? e : (e[Pe] || (e[Pe] = function (t) {
							return e.handleEvent(t)
						}), e[Pe])
					}

					function Re() {
						Ut.call(this), this.m = new ve(this), (this.Qb = this).Va = null
					}

					function De(t, e, n, i, r) {
						t.m.add(String(e), n, !1, i, r)
					}

					function Le(t, e, n, i, r) {
						t.m.add(String(e), n, !0, i, r)
					}

					function xe(t, e, n, i) {
						if (!(e = t.m.a[String(e)])) return !0;
						e = e.concat();
						for (var r = !0, o = 0; o < e.length; ++o) {
							var a = e[o];
							if (a && !a.oa && a.capture == n) {
								var s = a.listener,
									u = a.Na || a.src;
								a.Ia && me(t.m, a), r = !1 !== s.call(u, i) && r
							}
						}
						return r && 0 != i.Kb
					}

					function Me(t, e, n) {
						if (g(t)) n && (t = I(t, n));
						else {
							if (!t || "function" != typeof t.handleEvent) throw Error("Invalid listener argument");
							t = I(t.handleEvent, t)
						}
						return 2147483647 < Number(e) ? -1 : l.setTimeout(t, e || 0)
					}

					function je(n) {
						var i = null;
						return new gt(function (t, e) {
							-1 == (i = Me(function () {
								t(void 0)
							}, n)) && e(Error("Failed to schedule timer."))
						}).s(function (t) {
							throw l.clearTimeout(i), t
						})
					}

					function Ue(t) {
						if (t.S && "function" == typeof t.S) return t.S();
						if (h(t)) return t.split("");
						if (m(t)) {
							for (var e = [], n = t.length, i = 0; i < n; i++) e.push(t[i]);
							return e
						}
						for (i in e = [], n = 0, t) e[n++] = t[i];
						return e
					}

					function Ve(t) {
						if (t.U && "function" == typeof t.U) return t.U();
						if (!t.S || "function" != typeof t.S) {
							if (m(t) || h(t)) {
								var e = [];
								t = t.length;
								for (var n = 0; n < t; n++) e.push(n);
								return e
							}
							for (var i in e = [], n = 0, t) e[n++] = i;
							return e
						}
					}

					function Ke(t, e) {
						this.b = {}, this.a = [], this.c = 0;
						var n = arguments.length;
						if (1 < n) {
							if (n % 2) throw Error("Uneven number of arguments");
							for (var i = 0; i < n; i += 2) this.set(arguments[i], arguments[i + 1])
						} else if (t)
							if (t instanceof Ke)
								for (n = t.U(), i = 0; i < n.length; i++) this.set(n[i], t.get(n[i]));
							else
								for (i in t) this.set(i, t[i])
					}

					function Fe(t) {
						if (t.c != t.a.length) {
							for (var e = 0, n = 0; e < t.a.length;) {
								var i = t.a[e];
								qe(t.b, i) && (t.a[n++] = i), e++
							}
							t.a.length = n
						}
						if (t.c != t.a.length) {
							var r = {};
							for (n = e = 0; e < t.a.length;) qe(r, i = t.a[e]) || (r[t.a[n++] = i] = 1), e++;
							t.a.length = n
						}
					}

					function qe(t, e) {
						return Object.prototype.hasOwnProperty.call(t, e)
					}
					E(Re, Ut), Re.prototype[le] = !0, Re.prototype.addEventListener = function (t, e, n, i) {
						we(this, t, e, n, i)
					}, Re.prototype.removeEventListener = function (t, e, n, i) {
						ke(this, t, e, n, i)
					}, Re.prototype.dispatchEvent = function (t) {
						var e, n = this.Va;
						if (n)
							for (e = []; n; n = n.Va) e.push(n);
						n = this.Qb;
						var i = t.type || t;
						if (h(t)) t = new ue(t, n);
						else if (t instanceof ue) t.target = t.target || n;
						else {
							var r = t;
							ct(t = new ue(i, n), r)
						}
						if (r = !0, e)
							for (var o = e.length - 1; 0 <= o; o--) {
								var a = t.b = e[o];
								r = xe(a, i, !0, t) && r
							}
						if (r = xe(a = t.b = n, i, !0, t) && r, r = xe(a, i, !1, t) && r, e)
							for (o = 0; o < e.length; o++) r = xe(a = t.b = e[o], i, !1, t) && r;
						return r
					}, Re.prototype.va = function () {
						if (Re.qb.va.call(this), this.m) {
							var t, e = this.m;
							for (t in e.a) {
								for (var n = e.a[t], i = 0; i < n.length; i++) pe(n[i]);
								delete e.a[t], e.b--
							}
						}
						this.Va = null
					}, (t = Ke.prototype).S = function () {
						Fe(this);
						for (var t = [], e = 0; e < this.a.length; e++) t.push(this.b[this.a[e]]);
						return t
					}, t.U = function () {
						return Fe(this), this.a.concat()
					}, t.clear = function () {
						this.b = {}, this.c = this.a.length = 0
					}, t.get = function (t, e) {
						return qe(this.b, t) ? this.b[t] : e
					}, t.set = function (t, e) {
						qe(this.b, t) || (this.c++, this.a.push(t)), this.b[t] = e
					}, t.forEach = function (t, e) {
						for (var n = this.U(), i = 0; i < n.length; i++) {
							var r = n[i],
								o = this.get(r);
							t.call(e, o, r, this)
						}
					};
					var He = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;

					function Be(t, e) {
						var n;
						this.b = this.i = this.f = "", this.m = null, this.g = this.c = "", this.h = !1, t instanceof Be ? (this.h = void 0 !== e ? e : t.h,
							Ge(this, t.f), this.i = t.i, this.b = t.b, We(this, t.m), this.c = t.c, Xe(this, dn(t.a)), this.g = t.g) : t && (n = String(t).match(
							He)) ? (this.h = !!e, Ge(this, n[1] || "", !0), this.i = Ze(n[2] || ""), this.b = Ze(n[3] || "", !0), We(this, n[4]), this.c = Ze(
							n[5] || "", !0), Xe(this, n[6] || "", !0), this.g = Ze(n[7] || "")) : (this.h = !!e, this.a = new sn(null, this.h))
					}

					function Ge(t, e, n) {
						t.f = n ? Ze(e, !0) : e, t.f && (t.f = t.f.replace(/:$/, ""))
					}

					function We(t, e) {
						if (e) {
							if (e = Number(e), isNaN(e) || e < 0) throw Error("Bad port number " + e);
							t.m = e
						} else t.m = null
					}

					function Xe(t, e, n) {
						var i, r;
						e instanceof sn ? (t.a = e, i = t.a, (r = t.h) && !i.f && (un(i), i.c = null, i.a.forEach(function (t, e) {
							var n = e.toLowerCase();
							e != n && (hn(this, e), fn(this, n, t))
						}, i)), i.f = r) : (n || (e = Qe(e, on)), t.a = new sn(e, t.h))
					}

					function Je(t, e, n) {
						t.a.set(e, n)
					}

					function ze(t, e) {
						return t.a.get(e)
					}

					function Ye(t) {
						return t instanceof Be ? new Be(t) : new Be(t, void 0)
					}

					function $e(t, e) {
						var n = new Be(null, void 0);
						return Ge(n, "https"), t && (n.b = t), e && (n.c = e), n
					}

					function Ze(t, e) {
						return t ? e ? decodeURI(t.replace(/%25/g, "%2525")) : decodeURIComponent(t) : ""
					}

					function Qe(t, e, n) {
						return h(t) ? (t = encodeURI(t).replace(e, tn), n && (t = t.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), t) : null
					}

					function tn(t) {
						return "%" + ((t = t.charCodeAt(0)) >> 4 & 15).toString(16) + (15 & t).toString(16)
					}
					Be.prototype.toString = function () {
						var t = [],
							e = this.f;
						e && t.push(Qe(e, en, !0), ":");
						var n = this.b;
						return (n || "file" == e) && (t.push("//"), (e = this.i) && t.push(Qe(e, en, !0), "@"), t.push(encodeURIComponent(String(n)).replace(
							/%25([0-9a-fA-F]{2})/g, "%$1")), null != (n = this.m) && t.push(":", String(n))), (n = this.c) && (this.b && "/" != n.charAt(0) &&
							t.push("/"), t.push(Qe(n, "/" == n.charAt(0) ? rn : nn, !0))), (n = this.a.toString()) && t.push("?", n), (n = this.g) && t.push(
							"#", Qe(n, an)), t.join("")
					}, Be.prototype.resolve = function (t) {
						var e = new Be(this),
							n = !!t.f;
						n ? Ge(e, t.f) : n = !!t.i, n ? e.i = t.i : n = !!t.b, n ? e.b = t.b : n = null != t.m;
						var i = t.c;
						if (n) We(e, t.m);
						else if (n = !!t.c) {
							if ("/" != i.charAt(0))
								if (this.b && !this.c) i = "/" + i;
								else {
									var r = e.c.lastIndexOf("/"); - 1 != r && (i = e.c.substr(0, r + 1) + i)
								}
							if (".." == (r = i) || "." == r) i = "";
							else if (Z(r, "./") || Z(r, "/.")) {
								i = 0 == r.lastIndexOf("/", 0), r = r.split("/");
								for (var o = [], a = 0; a < r.length;) {
									var s = r[a++];
									"." == s ? i && a == r.length && o.push("") : ".." == s ? ((1 < o.length || 1 == o.length && "" != o[0]) && o.pop(), i && a ==
										r.length && o.push("")) : (o.push(s), i = !0)
								}
								i = o.join("/")
							} else i = r
						}
						return n ? e.c = i : n = "" !== t.a.toString(), n ? Xe(e, dn(t.a)) : n = !!t.g, n && (e.g = t.g), e
					};
					var en = /[#\/\?@]/g,
						nn = /[#\?:]/g,
						rn = /[#\?]/g,
						on = /[#\?@]/g,
						an = /#/g;

					function sn(t, e) {
						this.b = this.a = null, this.c = t || null, this.f = !!e
					}

					function un(n) {
						n.a || (n.a = new Ke, n.b = 0, n.c && function (t, e) {
							if (t) {
								t = t.split("&");
								for (var n = 0; n < t.length; n++) {
									var i = t[n].indexOf("="),
										r = null;
									if (0 <= i) {
										var o = t[n].substring(0, i);
										r = t[n].substring(i + 1)
									} else o = t[n];
									e(o, r ? decodeURIComponent(r.replace(/\+/g, " ")) : "")
								}
							}
						}(n.c, function (t, e) {
							n.add(decodeURIComponent(t.replace(/\+/g, " ")), e)
						}))
					}

					function cn(t) {
						var e = Ve(t);
						if (void 0 === e) throw Error("Keys are undefined");
						var n = new sn(null, void 0);
						t = Ue(t);
						for (var i = 0; i < e.length; i++) {
							var r = e[i],
								o = t[i];
							v(o) ? fn(n, r, o) : n.add(r, o)
						}
						return n
					}

					function hn(t, e) {
						un(t), e = pn(t, e), qe(t.a.b, e) && (t.c = null, t.b -= t.a.get(e).length, qe((t = t.a).b, e) && (delete t.b[e], t.c--, t.a.length >
							2 * t.c && Fe(t)))
					}

					function ln(t, e) {
						return un(t), e = pn(t, e), qe(t.a.b, e)
					}

					function fn(t, e, n) {
						hn(t, e), 0 < n.length && (t.c = null, t.a.set(pn(t, e), q(n)), t.b += n.length)
					}

					function dn(t) {
						var e = new sn;
						return e.c = t.c, t.a && (e.a = new Ke(t.a), e.b = t.b), e
					}

					function pn(t, e) {
						return e = String(e), t.f && (e = e.toLowerCase()), e
					}(t = sn.prototype).add = function (t, e) {
						un(this), this.c = null, t = pn(this, t);
						var n = this.a.get(t);
						return n || this.a.set(t, n = []), n.push(e), this.b += 1, this
					}, t.clear = function () {
						this.a = this.c = null, this.b = 0
					}, t.forEach = function (n, i) {
						un(this), this.a.forEach(function (t, e) {
							x(t, function (t) {
								n.call(i, t, e, this)
							}, this)
						}, this)
					}, t.U = function () {
						un(this);
						for (var t = this.a.S(), e = this.a.U(), n = [], i = 0; i < e.length; i++)
							for (var r = t[i], o = 0; o < r.length; o++) n.push(e[i]);
						return n
					}, t.S = function (t) {
						un(this);
						var e = [];
						if (h(t)) ln(this, t) && (e = F(e, this.a.get(pn(this, t))));
						else {
							t = this.a.S();
							for (var n = 0; n < t.length; n++) e = F(e, t[n])
						}
						return e
					}, t.set = function (t, e) {
						return un(this), this.c = null, ln(this, t = pn(this, t)) && (this.b -= this.a.get(t).length), this.a.set(t, [e]), this.b += 1,
							this
					}, t.get = function (t, e) {
						return t && 0 < (t = this.S(t)).length ? String(t[0]) : e
					}, t.toString = function () {
						if (this.c) return this.c;
						if (!this.a) return "";
						for (var t = [], e = this.a.U(), n = 0; n < e.length; n++) {
							var i = e[n],
								r = encodeURIComponent(String(i));
							i = this.S(i);
							for (var o = 0; o < i.length; o++) {
								var a = r;
								"" !== i[o] && (a += "=" + encodeURIComponent(String(i[o]))), t.push(a)
							}
						}
						return this.c = t.join("&")
					};
					var vn = !Gt || 9 <= Number(te);

					function mn(t, e) {
						this.a = t === yn && e || "", this.b = bn
					}

					function gn(t) {
						return t instanceof mn && t.constructor === mn && t.b === bn ? t.a : (O("expected object of type Const, got '" + t + "'"),
							"type_error:Const")
					}
					mn.prototype.na = !0, mn.prototype.ma = function () {
						return this.a
					}, mn.prototype.toString = function () {
						return "Const{" + this.a + "}"
					};
					var bn = {},
						yn = {};

					function wn() {
						this.a = "", this.b = Sn
					}

					function In(t) {
						return t instanceof wn && t.constructor === wn && t.b === Sn ? t.a : (O("expected object of type TrustedResourceUrl, got '" + t +
							"' of type " + p(t)), "type_error:TrustedResourceUrl")
					}

					function Tn(t, n) {
						var e, i, r = gn(t);
						if (!En.test(r)) throw Error("Invalid TrustedResourceUrl format: " + r);
						return t = r.replace(kn, function (t, e) {
							if (!Object.prototype.hasOwnProperty.call(n, e)) throw Error('Found marker, "' + e + '", in format string, "' + r +
								'", but no valid label mapping found in args: ' + JSON.stringify(n));
							return (t = n[e]) instanceof mn ? gn(t) : encodeURIComponent(String(t))
						}), e = t, (i = new wn).a = e, i
					}
					wn.prototype.na = !0, wn.prototype.ma = function () {
						return this.a.toString()
					}, wn.prototype.toString = function () {
						return "TrustedResourceUrl{" + this.a + "}"
					};
					var kn = /%{(\w+)}/g,
						En = /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i,
						Sn = {};

					function An() {
						this.a = "", this.b = Pn
					}

					function Nn(t) {
						return t instanceof An && t.constructor === An && t.b === Pn ? t.a : (O("expected object of type SafeUrl, got '" + t + "' of type " +
							p(t)), "type_error:SafeUrl")
					}
					An.prototype.na = !0, An.prototype.ma = function () {
						return this.a.toString()
					}, An.prototype.toString = function () {
						return "SafeUrl{" + this.a + "}"
					};
					var On = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;

					function _n(t) {
						return t instanceof An ? t : (t = "object" == typeof t && t.na ? t.ma() : String(t), On.test(t) || (t = "about:invalid#zClosurez"),
							Cn(t))
					}
					var Pn = {};

					function Cn(t) {
						var e = new An;
						return e.a = t, e
					}

					function Rn() {
						this.a = "", this.b = Dn
					}
					Cn("about:blank"), Rn.prototype.na = !0, Rn.prototype.ma = function () {
						return this.a.toString()
					}, Rn.prototype.toString = function () {
						return "SafeHtml{" + this.a + "}"
					};
					var Dn = {};

					function Ln(t) {
						var e = new Rn;
						return e.a = t, e
					}

					function xn(t) {
						var e = document;
						return h(t) ? e.getElementById(t) : t
					}

					function Mn(n, t) {
						it(t, function (t, e) {
							t && "object" == typeof t && t.na && (t = t.ma()), "style" == e ? n.style.cssText = t : "class" == e ? n.className = t : "for" ==
								e ? n.htmlFor = t : jn.hasOwnProperty(e) ? n.setAttribute(jn[e], t) : 0 == e.lastIndexOf("aria-", 0) || 0 == e.lastIndexOf(
									"data-", 0) ? n.setAttribute(e, t) : n[e] = t
						})
					}
					Ln("<!DOCTYPE html>"), Ln(""), Ln("<br>");
					var jn = {
						cellpadding: "cellPadding",
						cellspacing: "cellSpacing",
						colspan: "colSpan",
						frameborder: "frameBorder",
						height: "height",
						maxlength: "maxLength",
						nonce: "nonce",
						role: "role",
						rowspan: "rowSpan",
						type: "type",
						usemap: "useMap",
						valign: "vAlign",
						width: "width"
					};

					function Un(t, e, n) {
						var i = arguments,
							r = document,
							o = String(i[0]),
							a = i[1];
						if (!vn && a && (a.name || a.type)) {
							if (o = ["<", o], a.name && o.push(' name="', lt(a.name), '"'), a.type) {
								o.push(' type="', lt(a.type), '"');
								var s = {};
								ct(s, a), delete s.type, a = s
							}
							o.push(">"), o = o.join("")
						}
						return o = r.createElement(o), a && (h(a) ? o.className = a : v(a) ? o.className = a.join(" ") : Mn(o, a)), 2 < i.length &&
							function (e, n, t) {
								function i(t) {
									t && n.appendChild(h(t) ? e.createTextNode(t) : t)
								}
								for (var r = 2; r < t.length; r++) {
									var o = t[r];
									!m(o) || b(o) && 0 < o.nodeType ? i(o) : x(Vn(o) ? q(o) : o, i)
								}
							}(r, o, i), o
					}

					function Vn(t) {
						if (t && "number" == typeof t.length) {
							if (b(t)) return "function" == typeof t.item || "string" == typeof t.item;
							if (g(t)) return "function" == typeof t.item
						}
						return !1
					}

					function Kn(t) {
						var e = [];
						return function t(e, n, i) {
							if (null == n) i.push("null");
							else {
								if ("object" == typeof n) {
									if (v(n)) {
										var r = n;
										n = r.length, i.push("[");
										for (var o = "", a = 0; a < n; a++) i.push(o), t(e, r[a], i), o = ",";
										return void i.push("]")
									}
									if (!(n instanceof String || n instanceof Number || n instanceof Boolean)) {
										for (r in i.push("{"), o = "", n) Object.prototype.hasOwnProperty.call(n, r) && ("function" != typeof (a = n[r]) && (i.push(o),
											Bn(r, i), i.push(":"), t(e, a, i), o = ","));
										return void i.push("}")
									}
									n = n.valueOf()
								}
								switch (typeof n) {
								case "string":
									Bn(n, i);
									break;
								case "number":
									i.push(isFinite(n) && !isNaN(n) ? String(n) : "null");
									break;
								case "boolean":
									i.push(String(n));
									break;
								case "function":
									i.push("null");
									break;
								default:
									throw Error("Unknown type: " + typeof n)
								}
							}
						}(new Fn, t, e), e.join("")
					}

					function Fn() {}
					var qn = {
							'"': '\\"',
							"\\": "\\\\",
							"/": "\\/",
							"\b": "\\b",
							"\f": "\\f",
							"\n": "\\n",
							"\r": "\\r",
							"\t": "\\t",
							"\v": "\\u000b"
						},
						Hn = /\uffff/.test("￿") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g;

					function Bn(t, e) {
						e.push('"', t.replace(Hn, function (t) {
							var e = qn[t];
							return e || (e = "\\u" + (65536 | t.charCodeAt(0)).toString(16).substr(1), qn[t] = e), e
						}), '"')
					}

					function Gn() {
						var t = hi();
						return Gt && !!te && 11 == te || /Edge\/\d+/.test(t)
					}

					function Wn() {
						return l.window && l.window.location.href || self && self.location && self.location.href || ""
					}

					function Xn(t, e) {
						e = e || l.window;
						var n = "about:blank";
						t && (n = Nn(_n(t)).toString()), e.location.href = n
					}

					function Jn(t) {
						return !!((t = (t || hi()).toLowerCase()).match(/android/) || t.match(/webos/) || t.match(/iphone|ipad|ipod/) || t.match(
							/blackberry/) || t.match(/windows phone/) || t.match(/iemobile/))
					}

					function zn(t) {
						t = t || l.window;
						try {
							t.close()
						} catch (t) {}
					}

					function Yn(t, e, n) {
						var i = Math.floor(1e9 * Math.random()).toString();
						e = e || 500, n = n || 600;
						var r = (window.screen.availHeight - n) / 2,
							o = (window.screen.availWidth - e) / 2;
						for (s in e = {
								width: e,
								height: n,
								top: 0 < r ? r : 0,
								left: 0 < o ? o : 0,
								location: !0,
								resizable: !0,
								statusbar: !0,
								toolbar: !1
							}, n = hi().toLowerCase(), i && (e.target = i, Z(n, "crios/") && (e.target = "_blank")), si(hi()) == oi && (t = t ||
								"http://localhost", e.scrollbars = !0), n = t || "", (t = e) || (t = {}), i = window, e = n instanceof An ? n : _n(void 0 !== n.href ?
								n.href : String(n)), n = t.target || n.target, r = [], t) switch (s) {
						case "width":
						case "height":
						case "top":
						case "left":
							r.push(s + "=" + t[s]);
							break;
						case "target":
						case "noopener":
						case "noreferrer":
							break;
						default:
							r.push(s + "=" + (t[s] ? 1 : 0))
						}
						var a, s = r.join(",");
						if ((nt("iPhone") && !nt("iPod") && !nt("iPad") || nt("iPad") || nt("iPod")) && i.navigator && i.navigator.standalone && n &&
							"_self" != n ? (s = i.document.createElement("A"), e instanceof An || e instanceof An || (e = "object" == typeof e && e.na ? e.ma() :
									String(e), On.test(e) || (e = "about:invalid#zClosurez"), e = Cn(e)), s.href = Nn(e), s.setAttribute("target", n), t.noreferrer &&
								s.setAttribute("rel", "noreferrer"), (t = document.createEvent("MouseEvent")).initMouseEvent("click", !0, !0, i, 1), s.dispatchEvent(
									t), s = {}) : t.noreferrer ? (s = i.open("", n, s), t = Nn(e).toString(), s && (Xt && Z(t, ";") && (t = "'" + t.replace(/'/g,
								"%27") + "'"), s.opener = null, t = Ln(
								'<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url=' + lt(t) + '">'), s.document.write((a =
								t) instanceof Rn && a.constructor === Rn && a.b === Dn ? a.a : (O("expected object of type SafeHtml, got '" + a + "' of type " +
								p(a)), "type_error:SafeHtml")), s.document.close())) : (s = i.open(Nn(e).toString(), n, s)) && t.noopener && (s.opener = null), s
						) try {
							s.focus()
						} catch (t) {}
						return s
					}
					var $n = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
						Zn = /^[^@]+@[^@]+$/;

					function Qn() {
						var e = null;
						return new gt(function (t) {
							"complete" == l.document.readyState ? t() : (e = function () {
								t()
							}, Te(window, "load", e))
						}).s(function (t) {
							throw ke(window, "load", e), t
						})
					}

					function ti(t) {
						return t = t || hi(), !("file:" !== vi() || !t.toLowerCase().match(/iphone|ipad|ipod|android/))
					}

					function ei() {
						var t = l.window;
						try {
							return !(!t || t == t.top)
						} catch (t) {
							return !1
						}
					}

					function ni() {
						return void 0 !== l.WorkerGlobalScope && "function" == typeof l.importScripts
					}

					function ii() {
						return Wh.INTERNAL.hasOwnProperty("reactNative") ? "ReactNative" : Wh.INTERNAL.hasOwnProperty("node") ? "Node" : ni() ? "Worker" :
							"Browser"
					}

					function ri() {
						var t = ii();
						return "ReactNative" === t || "Node" === t
					}
					var oi = "Firefox",
						ai = "Chrome";

					function si(t) {
						var e = t.toLowerCase();
						return Z(e, "opera/") || Z(e, "opr/") || Z(e, "opios/") ? "Opera" : Z(e, "iemobile") ? "IEMobile" : Z(e, "msie") || Z(e, "trident/") ?
							"IE" : Z(e, "edge/") ? "Edge" : Z(e, "firefox/") ? oi : Z(e, "silk/") ? "Silk" : Z(e, "blackberry") ? "Blackberry" : Z(e, "webos") ?
							"Webos" : !Z(e, "safari/") || Z(e, "chrome/") || Z(e, "crios/") || Z(e, "android") ? !Z(e, "chrome/") && !Z(e, "crios/") || Z(e,
								"edge/") ? Z(e, "android") ? "Android" : (t = t.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/)) && 2 == t.length ? t[1] : "Other" : ai :
							"Safari"
					}
					var ui = {
						Sc: "FirebaseCore-web",
						Uc: "FirebaseUI-web"
					};

					function ci(t, e) {
						e = e || [];
						var n, i = [],
							r = {};
						for (n in ui) r[ui[n]] = !0;
						for (n = 0; n < e.length; n++) void 0 !== r[e[n]] && (delete r[e[n]], i.push(e[n]));
						return i.sort(), (e = i).length || (e = ["FirebaseCore-web"]), "Browser" === (i = ii()) ? i = si(r = hi()) : "Worker" === i && (i =
							si(r = hi()) + "-" + i), i + "/JsCore/" + t + "/" + e.join(",")
					}

					function hi() {
						return l.navigator && l.navigator.userAgent || ""
					}

					function li(t, e) {
						t = t.split("."), e = e || l;
						for (var n = 0; n < t.length && "object" == typeof e && null != e; n++) e = e[t[n]];
						return n != t.length && (e = void 0), e
					}

					function fi() {
						try {
							var t = l.localStorage,
								e = wi();
							if (t) return t.setItem(e, "1"), t.removeItem(e), !Gn() || !!l.indexedDB
						} catch (t) {
							return ni() && !!l.indexedDB
						}
						return !1
					}

					function di() {
						return (pi() || "chrome-extension:" === vi() || ti()) && !ri() && fi() && !ni()
					}

					function pi() {
						return "http:" === vi() || "https:" === vi()
					}

					function vi() {
						return l.location && l.location.protocol || null
					}

					function mi(t) {
						return !Jn(t = t || hi()) && si(t) != oi
					}

					function gi(t) {
						return void 0 === t ? null : Kn(t)
					}

					function bi(t) {
						var e, n = {};
						for (e in t) t.hasOwnProperty(e) && null !== t[e] && void 0 !== t[e] && (n[e] = t[e]);
						return n
					}

					function yi(t) {
						if (null !== t) return JSON.parse(t)
					}

					function wi(t) {
						return t || Math.floor(1e9 * Math.random()).toString()
					}

					function Ii(t) {
						return "Safari" != si(t = t || hi()) && !t.toLowerCase().match(/iphone|ipad|ipod/)
					}

					function Ti() {
						var t = l.___jsl;
						if (t && t.H)
							for (var e in t.H)
								if (t.H[e].r = t.H[e].r || [], t.H[e].L = t.H[e].L || [], t.H[e].r = t.H[e].L.concat(), t.CP)
									for (var n = 0; n < t.CP.length; n++) t.CP[n] = null
					}

					function ki(t, e) {
						if (e < t) throw Error("Short delay should be less than long delay!");
						this.a = t, this.c = e, t = hi(), e = ii(), this.b = Jn(t) || "ReactNative" === e
					}

					function Ei() {
						var t = l.document;
						return !t || void 0 === t.visibilityState || "visible" == t.visibilityState
					}

					function Si(t) {
						try {
							var e = new Date(parseInt(t, 10));
							if (!isNaN(e.getTime()) && !/[^0-9]/.test(t)) return e.toUTCString()
						} catch (t) {}
						return null
					}

					function Ai() {
						return !(!li("fireauth.oauthhelper", l) && !li("fireauth.iframe", l))
					}
					ki.prototype.get = function () {
						var t = l.navigator;
						return !t || "boolean" != typeof t.onLine || !pi() && "chrome-extension:" !== vi() && void 0 === t.connection || t.onLine ? this.b ?
							this.c : this.a : Math.min(5e3, this.a)
					};
					var Ni, Oi = {};

					function _i(t) {
						Oi[t] || (Oi[t] = !0, "undefined" != typeof console && "function" == typeof console.warn && console.warn(t))
					}
					try {
						var Pi = {};
						Object.defineProperty(Pi, "abcd", {
							configurable: !0,
							enumerable: !0,
							value: 1
						}), Object.defineProperty(Pi, "abcd", {
							configurable: !0,
							enumerable: !0,
							value: 2
						}), Ni = 2 == Pi.abcd
					} catch (t) {
						Ni = !1
					}

					function Ci(t, e, n) {
						Ni ? Object.defineProperty(t, e, {
							configurable: !0,
							enumerable: !0,
							value: n
						}) : t[e] = n
					}

					function Ri(t, e) {
						if (e)
							for (var n in e) e.hasOwnProperty(n) && Ci(t, n, e[n])
					}

					function Di(t) {
						var e = {};
						return Ri(e, t), e
					}

					function Li(t) {
						var e = t;
						if ("object" == typeof t && null != t)
							for (var n in e = "length" in t ? [] : {}, t) Ci(e, n, Li(t[n]));
						return e
					}

					function xi(t) {
						var e = {},
							n = t[ji],
							i = t[Ui];
						if (!(t = t[Vi]) || t != Mi && !n) throw Error("Invalid provider user info!");
						e[Fi] = i || null, e[Ki] = n || null, Ci(this, Hi, t), Ci(this, qi, Li(e))
					}
					var Mi = "EMAIL_SIGNIN",
						ji = "email",
						Ui = "newEmail",
						Vi = "requestType",
						Ki = "email",
						Fi = "fromEmail",
						qi = "data",
						Hi = "operation";

					function Bi(t, e) {
						this.code = Wi + t, this.message = e || Xi[t] || ""
					}

					function Gi(t) {
						var e = t && t.code;
						return e ? new Bi(e.substring(Wi.length), t.message) : null
					}
					E(Bi, Error), Bi.prototype.w = function () {
						return {
							code: this.code,
							message: this.message
						}
					}, Bi.prototype.toJSON = function () {
						return this.w()
					};
					var Wi = "auth/",
						Xi = {
							"admin-restricted-operation": "This operation is restricted to administrators only.",
							"argument-error": "",
							"app-not-authorized": "This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",
							"app-not-installed": "The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",
							"captcha-check-failed": "The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",
							"code-expired": "The SMS code has expired. Please re-send the verification code to try again.",
							"cordova-not-ready": "Cordova framework is not ready.",
							"cors-unsupported": "This browser is not supported.",
							"credential-already-in-use": "This credential is already associated with a different user account.",
							"custom-token-mismatch": "The custom token corresponds to a different audience.",
							"requires-recent-login": "This operation is sensitive and requires recent authentication. Log in again before retrying this request.",
							"dynamic-link-not-activated": "Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",
							"email-already-in-use": "The email address is already in use by another account.",
							"expired-action-code": "The action code has expired. ",
							"cancelled-popup-request": "This operation has been cancelled due to another conflicting popup being opened.",
							"internal-error": "An internal error has occurred.",
							"invalid-app-credential": "The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",
							"invalid-app-id": "The mobile app identifier is not registed for the current project.",
							"invalid-user-token": "This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",
							"invalid-auth-event": "An internal error has occurred.",
							"invalid-verification-code": "The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure use the verification code provided by the user.",
							"invalid-continue-uri": "The continue URL provided in the request is invalid.",
							"invalid-cordova-configuration": "The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",
							"invalid-custom-token": "The custom token format is incorrect. Please check the documentation.",
							"invalid-dynamic-link-domain": "The provided dynamic link domain is not configured or authorized for the current project.",
							"invalid-email": "The email address is badly formatted.",
							"invalid-api-key": "Your API key is invalid, please check you have copied it correctly.",
							"invalid-cert-hash": "The SHA-1 certificate hash provided is invalid.",
							"invalid-credential": "The supplied auth credential is malformed or has expired.",
							"invalid-message-payload": "The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",
							"invalid-oauth-provider": "EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",
							"invalid-oauth-client-id": "The OAuth client ID provided is either invalid or does not match the specified API key.",
							"unauthorized-domain": "This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",
							"invalid-action-code": "The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",
							"wrong-password": "The password is invalid or the user does not have a password.",
							"invalid-persistence-type": "The specified persistence type is invalid. It can only be local, session or none.",
							"invalid-phone-number": "The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",
							"invalid-provider-id": "The specified provider ID is invalid.",
							"invalid-recipient-email": "The email corresponding to this action failed to send as the provided recipient email address is invalid.",
							"invalid-sender": "The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",
							"invalid-verification-id": "The verification ID used to create the phone auth credential is invalid.",
							"missing-android-pkg-name": "An Android Package Name must be provided if the Android App is required to be installed.",
							"auth-domain-config-required": "Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",
							"missing-app-credential": "The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",
							"missing-verification-code": "The phone auth credential was created with an empty SMS verification code.",
							"missing-continue-uri": "A continue URL must be provided in the request.",
							"missing-iframe-start": "An internal error has occurred.",
							"missing-ios-bundle-id": "An iOS Bundle ID must be provided if an App Store ID is provided.",
							"missing-or-invalid-nonce": "The OIDC ID token requires a valid unhashed nonce.",
							"missing-phone-number": "To send verification codes, provide a phone number for the recipient.",
							"missing-verification-id": "The phone auth credential was created with an empty verification ID.",
							"app-deleted": "This instance of FirebaseApp has been deleted.",
							"account-exists-with-different-credential": "An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",
							"network-request-failed": "A network error (such as timeout, interrupted connection or unreachable host) has occurred.",
							"no-auth-event": "An internal error has occurred.",
							"no-such-provider": "User was not linked to an account with the given provider.",
							"null-user": "A null user object was provided as the argument for an operation which requires a non-null user object.",
							"operation-not-allowed": "The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",
							"operation-not-supported-in-this-environment": 'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',
							"popup-blocked": "Unable to establish a connection with the popup. It may have been blocked by the browser.",
							"popup-closed-by-user": "The popup has been closed by the user before finalizing the operation.",
							"provider-already-linked": "User can only be linked to one identity for the given provider.",
							"quota-exceeded": "The project's quota for this operation has been exceeded.",
							"redirect-cancelled-by-user": "The redirect operation has been cancelled by the user before finalizing.",
							"redirect-operation-pending": "A redirect sign-in operation is already pending.",
							"rejected-credential": "The request contains malformed or mismatching credentials.",
							timeout: "The operation has timed out.",
							"user-token-expired": "The user's credential is no longer valid. The user must sign in again.",
							"too-many-requests": "We have blocked all requests from this device due to unusual activity. Try again later.",
							"unauthorized-continue-uri": "The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",
							"unsupported-persistence-type": "The current environment does not support the specified persistence type.",
							"user-cancelled": "User did not grant your application the permissions it requested.",
							"user-not-found": "There is no user record corresponding to this identifier. The user may have been deleted.",
							"user-disabled": "The user account has been disabled by an administrator.",
							"user-mismatch": "The supplied credentials do not correspond to the previously signed in user.",
							"user-signed-out": "",
							"weak-password": "The password must be 6 characters long or more.",
							"web-storage-unsupported": "This browser is not supported or 3rd party cookies and data may be disabled."
						};

					function Ji(t) {
						var e = t[Qi];
						if (void 0 === e) throw new Bi("missing-continue-uri");
						if ("string" != typeof e || "string" == typeof e && !e.length) throw new Bi("invalid-continue-uri");
						this.h = e, this.b = this.a = null, this.g = !1;
						var n = t[zi];
						if (n && "object" == typeof n) {
							e = n[nr];
							var i = n[tr];
							if (n = n[er], "string" == typeof e && e.length) {
								if (this.a = e, void 0 !== i && "boolean" != typeof i) throw new Bi("argument-error", tr +
									" property must be a boolean when specified.");
								if (this.g = !!i, void 0 !== n && ("string" != typeof n || "string" == typeof n && !n.length)) throw new Bi("argument-error", er +
									" property must be a non empty string when specified.");
								this.b = n || null
							} else {
								if (void 0 !== e) throw new Bi("argument-error", nr + " property must be a non empty string when specified.");
								if (void 0 !== i || void 0 !== n) throw new Bi("missing-android-pkg-name")
							}
						} else if (void 0 !== n) throw new Bi("argument-error", zi + " property must be a non null object when specified.");
						if (this.f = null, (e = t[Zi]) && "object" == typeof e) {
							if ("string" == typeof (e = e[ir]) && e.length) this.f = e;
							else if (void 0 !== e) throw new Bi("argument-error", ir + " property must be a non empty string when specified.")
						} else if (void 0 !== e) throw new Bi("argument-error", Zi + " property must be a non null object when specified.");
						if (void 0 !== (e = t[$i]) && "boolean" != typeof e) throw new Bi("argument-error", $i +
							" property must be a boolean when specified.");
						if (this.c = !!e, void 0 !== (t = t[Yi]) && ("string" != typeof t || "string" == typeof t && !t.length)) throw new Bi(
							"argument-error", Yi + " property must be a non empty string when specified.");
						this.i = t || null
					}
					var zi = "android",
						Yi = "dynamicLinkDomain",
						$i = "handleCodeInApp",
						Zi = "iOS",
						Qi = "url",
						tr = "installApp",
						er = "minimumVersion",
						nr = "packageName",
						ir = "bundleId";

					function rr(t) {
						var e = {};
						for (var n in e.continueUrl = t.h, e.canHandleCodeInApp = t.c, (e.androidPackageName = t.a) && (e.androidMinimumVersion = t.b, e.androidInstallApp =
								t.g), e.iOSBundleId = t.f, e.dynamicLinkDomain = t.i, e) null === e[n] && delete e[n];
						return e
					}
					var or = null,
						ar = null;

					function sr(t) {
						var e = "";
						return function (i, t) {
							function e(t) {
								for (; r < i.length;) {
									var e = i.charAt(r++),
										n = ar[e];
									if (null != n) return n;
									if (!/^[\s\xa0]*$/.test(e)) throw Error("Unknown base64 encoding at char: " + e)
								}
								return t
							}! function () {
								if (!or) {
									or = {}, ar = {};
									for (var t = 0; t < 65; t++) or[t] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(t), 62 <= (ar[
										or[t]] = t) && (ar["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(t)] = t)
								}
							}();
							for (var r = 0;;) {
								var n = e(-1),
									o = e(0),
									a = e(64),
									s = e(64);
								if (64 === s && -1 === n) break;
								t(n << 2 | o >> 4), 64 != a && (t(o << 4 & 240 | a >> 2), 64 != s && t(a << 6 & 192 | s))
							}
						}(t, function (t) {
							e += String.fromCharCode(t)
						}), e
					}

					function ur(t) {
						this.c = t.sub, this.a = t.provider_id || t.firebase && t.firebase.sign_in_provider || null, this.b = !!t.is_anonymous ||
							"anonymous" == this.a
					}

					function cr(t) {
						return (t = hr(t)) && t.sub && t.iss && t.aud && t.exp ? new ur(t) : null
					}

					function hr(t) {
						if (!t) return null;
						if (3 != (t = t.split(".")).length) return null;
						for (var e = (4 - (t = t[1]).length % 4) % 4, n = 0; n < e; n++) t += ".";
						try {
							return JSON.parse(sr(t))
						} catch (t) {}
						return null
					}
					ur.prototype.f = function () {
						return this.b
					};
					var lr, fr = {
						Yc: {
							ab: "https://www.googleapis.com/identitytoolkit/v3/relyingparty/",
							ib: "https://securetoken.googleapis.com/v1/token",
							id: "p"
						},
						$c: {
							ab: "https://staging-www.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/",
							ib: "https://staging-securetoken.sandbox.googleapis.com/v1/token",
							id: "s"
						},
						ad: {
							ab: "https://www-googleapis-test.sandbox.google.com/identitytoolkit/v3/relyingparty/",
							ib: "https://test-securetoken.sandbox.googleapis.com/v1/token",
							id: "t"
						}
					};

					function dr(t) {
						for (var e in fr)
							if (fr[e].id === t) return {
								firebaseEndpoint: (t = fr[e]).ab,
								secureTokenEndpoint: t.ib
							};
						return null
					}
					lr = dr("__EID__") ? "__EID__" : void 0;
					var pr = "oauth_consumer_key oauth_nonce oauth_signature oauth_signature_method oauth_timestamp oauth_token oauth_version".split(" "),
						vr = ["client_id", "response_type", "scope", "redirect_uri", "state"],
						mr = {
							Tc: {
								Oa: "locale",
								Ba: 500,
								Aa: 600,
								Pa: "facebook.com",
								hb: vr
							},
							Vc: {
								Oa: null,
								Ba: 500,
								Aa: 620,
								Pa: "github.com",
								hb: vr
							},
							Wc: {
								Oa: "hl",
								Ba: 515,
								Aa: 680,
								Pa: "google.com",
								hb: vr
							},
							bd: {
								Oa: "lang",
								Ba: 485,
								Aa: 705,
								Pa: "twitter.com",
								hb: pr
							}
						};

					function gr(t) {
						for (var e in mr)
							if (mr[e].Pa == t) return mr[e];
						return null
					}

					function br(t) {
						var e = {};
						e["facebook.com"] = kr, e["google.com"] = Sr, e["github.com"] = Er, e["twitter.com"] = Ar;
						var n = t && t[wr];
						try {
							if (n) return e[n] ? new e[n](t) : new Tr(t);
							if (void 0 !== t[yr]) return new Ir(t)
						} catch (t) {}
						return null
					}
					var yr = "idToken",
						wr = "providerId";

					function Ir(t) {
						var e = t[wr];
						if (!e && t[yr]) {
							var n = cr(t[yr]);
							n && n.a && (e = n.a)
						}
						if (!e) throw Error("Invalid additional user info!");
						"anonymous" != e && "custom" != e || (e = null), n = !1, void 0 !== t.isNewUser ? n = !!t.isNewUser :
							"identitytoolkit#SignupNewUserResponse" === t.kind && (n = !0), Ci(this, "providerId", e), Ci(this, "isNewUser", n)
					}

					function Tr(t) {
						Ir.call(this, t), Ci(this, "profile", Li((t = yi(t.rawUserInfo || "{}")) || {}))
					}

					function kr(t) {
						if (Tr.call(this, t), "facebook.com" != this.providerId) throw Error("Invalid provider ID!")
					}

					function Er(t) {
						if (Tr.call(this, t), "github.com" != this.providerId) throw Error("Invalid provider ID!");
						Ci(this, "username", this.profile && this.profile.login || null)
					}

					function Sr(t) {
						if (Tr.call(this, t), "google.com" != this.providerId) throw Error("Invalid provider ID!")
					}

					function Ar(t) {
						if (Tr.call(this, t), "twitter.com" != this.providerId) throw Error("Invalid provider ID!");
						Ci(this, "username", t.screenName || null)
					}

					function Nr(t) {
						this.a = Ye(t)
					}

					function Or(t) {
						var e = Ye(t),
							n = ze(e, "link"),
							i = ze(Ye(n), "link");
						return ze(Ye(e = ze(e, "deep_link_id")), "link") || e || i || n || t
					}

					function _r() {}

					function Pr(t, n) {
						return t.then(function (t) {
							if (t[ya]) {
								var e = cr(t[ya]);
								if (!e || n != e.c) throw new Bi("user-mismatch");
								return t
							}
							throw new Bi("user-mismatch")
						}).s(function (t) {
							throw t && t.code && t.code == Wi + "user-not-found" ? new Bi("user-mismatch") : t
						})
					}

					function Cr(t, e) {
						if (!e) throw new Bi("internal-error", "failed to construct a credential");
						this.a = e, Ci(this, "providerId", t), Ci(this, "signInMethod", t)
					}

					function Rr(t) {
						return {
							pendingToken: t.a,
							requestUri: "http://localhost"
						}
					}

					function Dr(t) {
						if (t && t.providerId && t.signInMethod && 0 == t.providerId.indexOf("saml.") && t.pendingToken) try {
							return new Cr(t.providerId, t.pendingToken)
						} catch (t) {}
						return null
					}

					function Lr(t, e, n) {
						if (this.a = null, e.idToken || e.accessToken) e.idToken && Ci(this, "idToken", e.idToken), e.accessToken && Ci(this, "accessToken",
							e.accessToken), e.nonce && !e.pendingToken && Ci(this, "nonce", e.nonce), e.pendingToken && (this.a = e.pendingToken);
						else {
							if (!e.oauthToken || !e.oauthTokenSecret) throw new Bi("internal-error", "failed to construct a credential");
							Ci(this, "accessToken", e.oauthToken), Ci(this, "secret", e.oauthTokenSecret)
						}
						Ci(this, "providerId", t), Ci(this, "signInMethod", n)
					}

					function xr(t) {
						var e = {};
						return t.idToken && (e.id_token = t.idToken), t.accessToken && (e.access_token = t.accessToken), t.secret && (e.oauth_token_secret =
							t.secret), e.providerId = t.providerId, t.nonce && !t.a && (e.nonce = t.nonce), e = {
							postBody: cn(e).toString(),
							requestUri: "http://localhost"
						}, t.a && (delete e.postBody, e.pendingToken = t.a), e
					}

					function Mr(t) {
						if (t && t.providerId && t.signInMethod) {
							var e = {
								idToken: t.oauthIdToken,
								accessToken: t.oauthTokenSecret ? null : t.oauthAccessToken,
								oauthTokenSecret: t.oauthTokenSecret,
								oauthToken: t.oauthTokenSecret && t.oauthAccessToken,
								nonce: t.nonce,
								pendingToken: t.pendingToken
							};
							try {
								return new Lr(t.providerId, e, t.signInMethod)
							} catch (t) {}
						}
						return null
					}

					function jr(t, e) {
						this.Dc = e || [], Ri(this, {
							providerId: t,
							isOAuthProvider: !0
						}), this.zb = {}, this.cb = (gr(t) || {}).Oa || null, this.$a = null
					}

					function Ur(t) {
						if ("string" != typeof t || 0 != t.indexOf("saml.")) throw new Bi("argument-error",
							'SAML provider IDs must be prefixed with "saml."');
						jr.call(this, t, [])
					}

					function Vr(t) {
						jr.call(this, t, vr), this.a = []
					}

					function Kr() {
						Vr.call(this, "facebook.com")
					}

					function Fr(t) {
						if (!t) throw new Bi("argument-error", "credential failed: expected 1 argument (the OAuth access token).");
						var e = t;
						return b(t) && (e = t.accessToken), (new Kr).credential({
							accessToken: e
						})
					}

					function qr() {
						Vr.call(this, "github.com")
					}

					function Hr(t) {
						if (!t) throw new Bi("argument-error", "credential failed: expected 1 argument (the OAuth access token).");
						var e = t;
						return b(t) && (e = t.accessToken), (new qr).credential({
							accessToken: e
						})
					}

					function Br() {
						Vr.call(this, "google.com"), this.ua("profile")
					}

					function Gr(t, e) {
						var n = t;
						return b(t) && (n = t.idToken, e = t.accessToken), (new Br).credential({
							idToken: n,
							accessToken: e
						})
					}

					function Wr() {
						jr.call(this, "twitter.com", pr)
					}

					function Xr(t, e) {
						var n = t;
						if (b(n) || (n = {
								oauthToken: t,
								oauthTokenSecret: e
							}), !n.oauthToken || !n.oauthTokenSecret) throw new Bi("argument-error",
							"credential failed: expected 2 arguments (the OAuth access token and secret).");
						return new Lr("twitter.com", n, "twitter.com")
					}

					function Jr(t, e, n) {
						this.a = t, this.c = e, Ci(this, "providerId", "password"), Ci(this, "signInMethod", n === Yr.EMAIL_LINK_SIGN_IN_METHOD ? Yr.EMAIL_LINK_SIGN_IN_METHOD :
							Yr.EMAIL_PASSWORD_SIGN_IN_METHOD)
					}

					function zr(t) {
						return t && t.email && t.password ? new Jr(t.email, t.password, t.signInMethod) : null
					}

					function Yr() {
						Ri(this, {
							providerId: "password",
							isOAuthProvider: !1
						})
					}

					function $r(t, e) {
						if (!(e = Zr(e))) throw new Bi("argument-error", "Invalid email link!");
						return new Jr(t, e, Yr.EMAIL_LINK_SIGN_IN_METHOD)
					}

					function Zr(t) {
						var e = ze((t = new Nr(t = Or(t))).a, "oobCode") || null;
						return "signIn" === (ze(t.a, "mode") || null) && e ? e : null
					}

					function Qr(t) {
						if (!(t.Ta && t.Sa || t.Fa && t.$)) throw new Bi("internal-error");
						this.a = t, Ci(this, "providerId", "phone"), Ci(this, "signInMethod", "phone")
					}

					function to(e) {
						if (e && "phone" === e.providerId && (e.verificationId && e.verificationCode || e.temporaryProof && e.phoneNumber)) {
							var n = {};
							return x(["verificationId", "verificationCode", "temporaryProof", "phoneNumber"], function (t) {
								e[t] && (n[t] = e[t])
							}), new Qr(n)
						}
						return null
					}

					function eo(t) {
						return t.a.Fa && t.a.$ ? {
							temporaryProof: t.a.Fa,
							phoneNumber: t.a.$
						} : {
							sessionInfo: t.a.Ta,
							code: t.a.Sa
						}
					}

					function no(t) {
						try {
							this.a = t || Wh.auth()
						} catch (t) {
							throw new Bi("argument-error",
								"Either an instance of firebase.auth.Auth must be passed as an argument to the firebase.auth.PhoneAuthProvider constructor, or the default firebase App instance must be initialized via firebase.initializeApp()."
							)
						}
						Ri(this, {
							providerId: "phone",
							isOAuthProvider: !1
						})
					}

					function io(t, e) {
						if (!t) throw new Bi("missing-verification-id");
						if (!e) throw new Bi("missing-verification-code");
						return new Qr({
							Ta: t,
							Sa: e
						})
					}

					function ro(t) {
						if (t.temporaryProof && t.phoneNumber) return new Qr({
							Fa: t.temporaryProof,
							$: t.phoneNumber
						});
						var e = t && t.providerId;
						if (!e || "password" === e) return null;
						var n = t && t.oauthAccessToken,
							i = t && t.oauthTokenSecret,
							r = t && t.nonce,
							o = t && t.oauthIdToken,
							a = t && t.pendingToken;
						try {
							switch (e) {
							case "google.com":
								return Gr(o, n);
							case "facebook.com":
								return Fr(n);
							case "github.com":
								return Hr(n);
							case "twitter.com":
								return Xr(n, i);
							default:
								return n || i || o || a ? a ? 0 == e.indexOf("saml.") ? new Cr(e, a) : new Lr(e, {
									pendingToken: a,
									idToken: t.oauthIdToken,
									accessToken: t.oauthAccessToken
								}, e) : new Vr(e).credential({
									idToken: o,
									accessToken: n,
									rawNonce: r
								}) : null
							}
						} catch (t) {
							return null
						}
					}

					function oo(t) {
						if (!t.isOAuthProvider) throw new Bi("invalid-oauth-provider")
					}

					function ao(t, e, n, i, r, o) {
						if (this.c = t, this.b = e || null, this.g = n || null, this.f = i || null, this.h = o || null, this.a = r || null, !this.g && !
							this.a) throw new Bi("invalid-auth-event");
						if (this.g && this.a) throw new Bi("invalid-auth-event");
						if (this.g && !this.f) throw new Bi("invalid-auth-event")
					}

					function so(t) {
						return (t = t || {}).type ? new ao(t.type, t.eventId, t.urlResponse, t.sessionId, t.error && Gi(t.error), t.postBody) : null
					}

					function uo() {
						this.b = null, this.a = []
					}
					E(Tr, Ir), E(kr, Tr), E(Er, Tr), E(Sr, Tr), E(Ar, Tr), Cr.prototype.la = function (t) {
						return ja(t, Rr(this))
					}, Cr.prototype.b = function (t, e) {
						var n = Rr(this);
						return n.idToken = e, Ua(t, n)
					}, Cr.prototype.f = function (t, e) {
						return Pr(Va(t, Rr(this)), e)
					}, Cr.prototype.w = function () {
						return {
							providerId: this.providerId,
							signInMethod: this.signInMethod,
							pendingToken: this.a
						}
					}, Lr.prototype.la = function (t) {
						return ja(t, xr(this))
					}, Lr.prototype.b = function (t, e) {
						var n = xr(this);
						return n.idToken = e, Ua(t, n)
					}, Lr.prototype.f = function (t, e) {
						return Pr(Va(t, xr(this)), e)
					}, Lr.prototype.w = function () {
						var t = {
							providerId: this.providerId,
							signInMethod: this.signInMethod
						};
						return this.idToken && (t.oauthIdToken = this.idToken), this.accessToken && (t.oauthAccessToken = this.accessToken), this.secret &&
							(t.oauthTokenSecret = this.secret), this.nonce && (t.nonce = this.nonce), this.a && (t.pendingToken = this.a), t
					}, jr.prototype.Da = function (t) {
						return this.zb = ot(t), this
					}, E(Ur, jr), E(Vr, jr), Vr.prototype.ua = function (t) {
						return U(this.a, t) || this.a.push(t), this
					}, Vr.prototype.Fb = function () {
						return q(this.a)
					}, Vr.prototype.credential = function (t, e) {
						var n;
						if (!(n = b(t) ? {
								idToken: t.idToken || null,
								accessToken: t.accessToken || null,
								nonce: t.rawNonce || null
							} : {
								idToken: t || null,
								accessToken: e || null
							}).idToken && !n.accessToken) throw new Bi("argument-error",
							"credential failed: must provide the ID token and/or the access token.");
						return new Lr(this.providerId, n, this.providerId)
					}, E(Kr, Vr), Ci(Kr, "PROVIDER_ID", "facebook.com"), Ci(Kr, "FACEBOOK_SIGN_IN_METHOD", "facebook.com"), E(qr, Vr), Ci(qr,
						"PROVIDER_ID", "github.com"), Ci(qr, "GITHUB_SIGN_IN_METHOD", "github.com"), E(Br, Vr), Ci(Br, "PROVIDER_ID", "google.com"), Ci(Br,
						"GOOGLE_SIGN_IN_METHOD", "google.com"), E(Wr, jr), Ci(Wr, "PROVIDER_ID", "twitter.com"), Ci(Wr, "TWITTER_SIGN_IN_METHOD",
						"twitter.com"), Jr.prototype.la = function (t) {
						return this.signInMethod == Yr.EMAIL_LINK_SIGN_IN_METHOD ? ps(t, Xa, {
							email: this.a,
							oobCode: this.c
						}) : ps(t, hs, {
							email: this.a,
							password: this.c
						})
					}, Jr.prototype.b = function (t, e) {
						return this.signInMethod == Yr.EMAIL_LINK_SIGN_IN_METHOD ? ps(t, Ja, {
							idToken: e,
							email: this.a,
							oobCode: this.c
						}) : ps(t, rs, {
							idToken: e,
							email: this.a,
							password: this.c
						})
					}, Jr.prototype.f = function (t, e) {
						return Pr(this.la(t), e)
					}, Jr.prototype.w = function () {
						return {
							email: this.a,
							password: this.c,
							signInMethod: this.signInMethod
						}
					}, Ri(Yr, {
						PROVIDER_ID: "password"
					}), Ri(Yr, {
						EMAIL_LINK_SIGN_IN_METHOD: "emailLink"
					}), Ri(Yr, {
						EMAIL_PASSWORD_SIGN_IN_METHOD: "password"
					}), Qr.prototype.la = function (t) {
						return t.Ua(eo(this))
					}, Qr.prototype.b = function (t, e) {
						var n = eo(this);
						return n.idToken = e, ps(t, fs, n)
					}, Qr.prototype.f = function (t, e) {
						var n = eo(this);
						return n.operation = "REAUTH", Pr(t = ps(t, ds, n), e)
					}, Qr.prototype.w = function () {
						var t = {
							providerId: "phone"
						};
						return this.a.Ta && (t.verificationId = this.a.Ta), this.a.Sa && (t.verificationCode = this.a.Sa), this.a.Fa && (t.temporaryProof =
							this.a.Fa), this.a.$ && (t.phoneNumber = this.a.$), t
					}, no.prototype.Ua = function (i, r) {
						var o = this.a.c;
						return Et(r.verify()).then(function (t) {
							if (!h(t)) throw new Bi("argument-error",
								"An implementation of firebase.auth.ApplicationVerifier.prototype.verify() must return a firebase.Promise that resolves with a string."
							);
							switch (r.type) {
							case "recaptcha":
								return (e = o, n = {
									phoneNumber: i,
									recaptchaToken: t
								}, ps(e, ns, n)).then(function (t) {
									return "function" == typeof r.reset && r.reset(), t
								}, function (t) {
									throw "function" == typeof r.reset && r.reset(), t
								});
							default:
								throw new Bi("argument-error", 'Only firebase.auth.ApplicationVerifiers with type="recaptcha" are currently supported.')
							}
							var e, n
						})
					}, Ri(no, {
						PROVIDER_ID: "phone"
					}), Ri(no, {
						PHONE_SIGN_IN_METHOD: "phone"
					}), ao.prototype.getUid = function () {
						var t = [];
						return t.push(this.c), this.b && t.push(this.b), this.f && t.push(this.f), this.i && t.push(this.i), t.join("-")
					}, ao.prototype.w = function () {
						return {
							type: this.c,
							eventId: this.b,
							urlResponse: this.g,
							sessionId: this.f,
							postBody: this.h,
							error: this.a && this.a.w()
						}
					};
					var co, ho = null;

					function lo(t) {
						var e = "unauthorized-domain",
							n = void 0,
							i = Ye(t);
						t = i.b, "chrome-extension" == (i = i.f) ? n = ht(
							"This chrome extension ID (chrome-extension://%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.",
							t) : "http" == i || "https" == i ? n = ht(
							"This domain (%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.",
							t) : e = "operation-not-supported-in-this-environment", Bi.call(this, e, n)
					}

					function fo(t, e, n) {
						Bi.call(this, t, n), (t = e || {}).Ab && Ci(this, "email", t.Ab), t.$ && Ci(this, "phoneNumber", t.$), t.credential && Ci(this,
							"credential", t.credential)
					}

					function po(t) {
						if (t.code) {
							var e = t.code || "";
							0 == e.indexOf(Wi) && (e = e.substring(Wi.length));
							var n = {
								credential: ro(t)
							};
							if (t.email) n.Ab = t.email;
							else if (t.phoneNumber) n.$ = t.phoneNumber;
							else if (!n.credential) return new Bi(e, t.message || void 0);
							return new fo(e, n, t.message)
						}
						return null
					}

					function vo() {}

					function mo(t) {
						return t.c || (t.c = t.b())
					}

					function go() {}

					function bo(t) {
						if (t.f || "undefined" != typeof XMLHttpRequest || "undefined" == typeof ActiveXObject) return t.f;
						for (var e = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], n = 0; n < e.length; n++) {
							var i = e[n];
							try {
								return new ActiveXObject(i), t.f = i
							} catch (t) {}
						}
						throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed")
					}

					function yo() {}

					function wo() {
						this.a = new XDomainRequest, this.readyState = 0, this.onreadystatechange = null, this.responseType = this.responseText = this.response =
							"", this.status = -1, this.statusText = "", this.a.onload = I(this.dc, this), this.a.onerror = I(this.Gb, this), this.a.onprogress =
							I(this.ec, this), this.a.ontimeout = I(this.ic, this)
					}

					function Io(t, e) {
						t.readyState = e, t.onreadystatechange && t.onreadystatechange()
					}

					function To(t, e, n) {
						this.reset(t, e, n, void 0, void 0)
					}

					function ko(t) {
						this.f = t, this.b = this.c = this.a = null
					}

					function Eo(t, e) {
						this.name = t, this.value = e
					}
					uo.prototype.subscribe = function (t) {
						var n = this;
						this.a.push(t), this.b || (this.b = function (t) {
							for (var e = 0; e < n.a.length; e++) n.a[e](t)
						}, "function" == typeof (t = li("universalLinks.subscribe", l)) && t(null, this.b))
					}, uo.prototype.unsubscribe = function (e) {
						K(this.a, function (t) {
							return t == e
						})
					}, E(lo, Bi), E(fo, Bi), fo.prototype.w = function () {
						var t = {
							code: this.code,
							message: this.message
						};
						this.email && (t.email = this.email), this.phoneNumber && (t.phoneNumber = this.phoneNumber);
						var e = this.credential && this.credential.w();
						return e && ct(t, e), t
					}, fo.prototype.toJSON = function () {
						return this.w()
					}, vo.prototype.c = null, E(go, vo), go.prototype.a = function () {
						var t = bo(this);
						return t ? new ActiveXObject(t) : new XMLHttpRequest
					}, go.prototype.b = function () {
						var t = {};
						return bo(this) && (t[0] = !0, t[1] = !0), t
					}, co = new go, E(yo, vo), yo.prototype.a = function () {
						var t = new XMLHttpRequest;
						if ("withCredentials" in t) return t;
						if ("undefined" != typeof XDomainRequest) return new wo;
						throw Error("Unsupported browser")
					}, yo.prototype.b = function () {
						return {}
					}, (t = wo.prototype).open = function (t, e, n) {
						if (null != n && !n) throw Error("Only async requests are supported.");
						this.a.open(t, e)
					}, t.send = function (t) {
						if (t) {
							if ("string" != typeof t) throw Error("Only string data is supported");
							this.a.send(t)
						} else this.a.send()
					}, t.abort = function () {
						this.a.abort()
					}, t.setRequestHeader = function () {}, t.getResponseHeader = function (t) {
						return "content-type" == t.toLowerCase() ? this.a.contentType : ""
					}, t.dc = function () {
						this.status = 200, this.response = this.responseText = this.a.responseText, Io(this, 4)
					}, t.Gb = function () {
						this.status = 500, this.response = this.responseText = "", Io(this, 4)
					}, t.ic = function () {
						this.Gb()
					}, t.ec = function () {
						this.status = 200, Io(this, 1)
					}, t.getAllResponseHeaders = function () {
						return "content-type: " + this.a.contentType
					}, To.prototype.a = null, To.prototype.reset = function (t, e, n, i, r) {
						delete this.a
					}, Eo.prototype.toString = function () {
						return this.name
					};
					var So = new Eo("SEVERE", 1e3),
						Ao = new Eo("WARNING", 900),
						No = new Eo("CONFIG", 700),
						Oo = new Eo("FINE", 500);
					ko.prototype.log = function (t, e, n) {
						if (t.value >= function t(e) {
								return e.c ? e.c : e.a ? t(e.a) : (O("Root logger has no level set."), null)
							}(this).value)
							for (g(e) && (e = e()), t = new To(t, String(e), this.f), n && (t.a = n), n = this; n;) n = n.a
					};
					var _o, Po = {},
						Co = null;

					function Ro(t) {
						var e;
						if (Co || (Co = new ko(""), (Po[""] = Co).c = No), !(e = Po[t])) {
							e = new ko(t);
							var n = t.lastIndexOf("."),
								i = t.substr(n + 1);
							(n = Ro(t.substr(0, n))).b || (n.b = {}), (n.b[i] = e).a = n, Po[t] = e
						}
						return e
					}

					function Do(t, e) {
						t && t.log(Oo, e, void 0)
					}

					function Lo(t) {
						this.f = t
					}

					function xo(t) {
						Re.call(this), this.u = t, this.readyState = Mo, this.status = 0, this.responseType = this.responseText = this.response = this.statusText =
							"", this.onreadystatechange = null, this.i = new Headers, this.b = null, this.o = "GET", this.g = "", this.a = !1, this.h = Ro(
								"goog.net.FetchXmlHttp"), this.l = this.c = this.f = null
					}
					E(Lo, vo), Lo.prototype.a = function () {
						return new xo(this.f)
					}, Lo.prototype.b = (_o = {}, function () {
						return _o
					}), E(xo, Re);
					var Mo = 0;

					function jo(t) {
						t.c.read().then(t.cc.bind(t)).catch(t.Ma.bind(t))
					}

					function Uo(t, e) {
						e && t.f && (t.status = t.f.status, t.statusText = t.f.statusText), t.readyState = 4, t.f = null, t.c = null, t.l = null, Vo(t)
					}

					function Vo(t) {
						t.onreadystatechange && t.onreadystatechange.call(t)
					}

					function Ko(t) {
						Re.call(this), this.headers = new Ke, this.D = t || null, this.c = !1, this.A = this.a = null, this.h = this.N = this.l = "", this.f =
							this.I = this.i = this.G = !1, this.g = 0, this.u = null, this.o = Fo, this.v = this.O = !1
					}(t = xo.prototype).open = function (t, e) {
						if (this.readyState != Mo) throw this.abort(), Error("Error reopening a connection");
						this.o = t, this.g = e, this.readyState = 1, Vo(this)
					}, t.send = function (t) {
						if (1 != this.readyState) throw this.abort(), Error("need to call open() first. ");
						this.a = !0;
						var e = {
							headers: this.i,
							method: this.o,
							credentials: void 0,
							cache: void 0
						};
						t && (e.body = t), this.u.fetch(new Request(this.g, e)).then(this.hc.bind(this), this.Ma.bind(this))
					}, t.abort = function () {
						this.response = this.responseText = "", this.i = new Headers, this.status = 0, this.c && this.c.cancel("Request was aborted."), 1 <=
							this.readyState && this.a && 4 != this.readyState && (this.a = !1, Uo(this, !1)), this.readyState = Mo
					}, t.hc = function (t) {
						this.a && (this.f = t, this.b || (this.b = t.headers, this.readyState = 2, Vo(this)), this.a && (this.readyState = 3, Vo(this),
							this.a && ("arraybuffer" === this.responseType ? t.arrayBuffer().then(this.fc.bind(this), this.Ma.bind(this)) : void 0 !== l.ReadableStream &&
								"body" in t ? (this.response = this.responseText = "", this.c = t.body.getReader(), this.l = new TextDecoder, jo(this)) : t.text()
								.then(this.gc.bind(this), this.Ma.bind(this)))))
					}, t.cc = function (t) {
						if (this.a) {
							var e = this.l.decode(t.value ? t.value : new Uint8Array(0), {
								stream: !t.done
							});
							e && (this.response = this.responseText += e), t.done ? Uo(this, !0) : Vo(this), 3 == this.readyState && jo(this)
						}
					}, t.gc = function (t) {
						this.a && (this.response = this.responseText = t, Uo(this, !0))
					}, t.fc = function (t) {
						this.a && (this.response = t, Uo(this, !0))
					}, t.Ma = function (t) {
						var e = this.h;
						e && e.log(Ao, "Failed to fetch url " + this.g, t instanceof Error ? t : Error(t)), this.a && Uo(this, !0)
					}, t.setRequestHeader = function (t, e) {
						this.i.append(t, e)
					}, t.getResponseHeader = function (t) {
						return this.b ? this.b.get(t.toLowerCase()) || "" : ((t = this.h) && t.log(Ao,
							"Attempting to get response header but no headers have been received for url: " + this.g, void 0), "")
					}, t.getAllResponseHeaders = function () {
						if (!this.b) {
							var t = this.h;
							return t && t.log(Ao, "Attempting to get all response headers but no headers have been received for url: " + this.g, void 0), ""
						}
						t = [];
						for (var e = this.b.entries(), n = e.next(); !n.done;) n = n.value, t.push(n[0] + ": " + n[1]), n = e.next();
						return t.join("\r\n")
					}, E(Ko, Re);
					var Fo = "";
					Ko.prototype.b = Ro("goog.net.XhrIo");
					var qo = /^https?$/i,
						Ho = ["POST", "PUT"];

					function Bo(e, t, n, i, r) {
						if (e.a) throw Error("[goog.net.XhrIo] Object is active with another request=" + e.l + "; newUri=" + t);
						n = n ? n.toUpperCase() : "GET", e.l = t, e.h = "", e.N = n, e.G = !1, e.c = !0, e.a = e.D ? e.D.a() : co.a(), e.A = e.D ? mo(e.D) :
							mo(co), e.a.onreadystatechange = I(e.Jb, e);
						try {
							Do(e.b, Qo(e, "Opening Xhr")), e.I = !0, e.a.open(n, String(t), !0), e.I = !1
						} catch (t) {
							return Do(e.b, Qo(e, "Error opening Xhr: " + t.message)), void Wo(e, t)
						}
						t = i || "";
						var o, a = new Ke(e.headers);
						r && function (t, e) {
							if (t.forEach && "function" == typeof t.forEach) t.forEach(e, void 0);
							else if (m(t) || h(t)) x(t, e, void 0);
							else
								for (var n = Ve(t), i = Ue(t), r = i.length, o = 0; o < r; o++) e.call(void 0, i[o], n && n[o], t)
						}(r, function (t, e) {
							a.set(e, t)
						}), r = function (t) {
							t: {
								for (var e = Go, n = t.length, i = h(t) ? t.split("") : t, r = 0; r < n; r++)
									if (r in i && e.call(void 0, i[r], r, t)) {
										e = r;
										break t
									}
								e = -1
							}
							return e < 0 ? null : h(t) ? t.charAt(e) : t[e]
						}(a.U()), i = l.FormData && t instanceof l.FormData, !U(Ho, n) || r || i || a.set("Content-Type",
							"application/x-www-form-urlencoded;charset=utf-8"), a.forEach(function (t, e) {
							this.a.setRequestHeader(e, t)
						}, e), e.o && (e.a.responseType = e.o), "withCredentials" in e.a && e.a.withCredentials !== e.O && (e.a.withCredentials = e.O);
						try {
							Yo(e), 0 < e.g && (e.v = (o = e.a, Gt && ne(9) && "number" == typeof o.timeout && void 0 !== o.ontimeout), Do(e.b, Qo(e,
								"Will abort after " + e.g + "ms if incomplete, xhr2 " + e.v)), e.v ? (e.a.timeout = e.g, e.a.ontimeout = I(e.Ga, e)) : e.u = Me(
								e.Ga, e.g, e)), Do(e.b, Qo(e, "Sending request")), e.i = !0, e.a.send(t), e.i = !1
						} catch (t) {
							Do(e.b, Qo(e, "Send error: " + t.message)), Wo(e, t)
						}
					}

					function Go(t) {
						return "content-type" == t.toLowerCase()
					}

					function Wo(t, e) {
						t.c = !1, t.a && (t.f = !0, t.a.abort(), t.f = !1), t.h = e, Xo(t), zo(t)
					}

					function Xo(t) {
						t.G || (t.G = !0, t.dispatchEvent("complete"), t.dispatchEvent("error"))
					}

					function Jo(e) {
						if (e.c && void 0 !== u)
							if (e.A[1] && 4 == $o(e) && 2 == Zo(e)) Do(e.b, Qo(e, "Local request error detected and ignored"));
							else if (e.i && 4 == $o(e)) Me(e.Jb, 0, e);
						else if (e.dispatchEvent("readystatechange"), 4 == $o(e)) {
							Do(e.b, Qo(e, "Request complete")), e.c = !1;
							try {
								var t, n = Zo(e);
								t: switch (n) {
								case 200:
								case 201:
								case 202:
								case 204:
								case 206:
								case 304:
								case 1223:
									var i = !0;
									break t;
								default:
									i = !1
								}
								if (!(t = i)) {
									var r;
									if (r = 0 === n) {
										var o = String(e.l).match(He)[1] || null;
										if (!o && l.self && l.self.location) {
											var a = l.self.location.protocol;
											o = a.substr(0, a.length - 1)
										}
										r = !qo.test(o ? o.toLowerCase() : "")
									}
									t = r
								}
								if (t) e.dispatchEvent("complete"), e.dispatchEvent("success");
								else {
									try {
										var s = 2 < $o(e) ? e.a.statusText : ""
									} catch (t) {
										Do(e.b, "Can not get status: " + t.message), s = ""
									}
									e.h = s + " [" + Zo(e) + "]", Xo(e)
								}
							} finally {
								zo(e)
							}
						}
					}

					function zo(e, t) {
						if (e.a) {
							Yo(e);
							var n = e.a,
								i = e.A[0] ? s : null;
							e.a = null, e.A = null, t || e.dispatchEvent("ready");
							try {
								n.onreadystatechange = i
							} catch (t) {
								(e = e.b) && e.log(So, "Problem encountered resetting onreadystatechange: " + t.message, void 0)
							}
						}
					}

					function Yo(t) {
						t.a && t.v && (t.a.ontimeout = null), t.u && (l.clearTimeout(t.u), t.u = null)
					}

					function $o(t) {
						return t.a ? t.a.readyState : 0
					}

					function Zo(t) {
						try {
							return 2 < $o(t) ? t.a.status : -1
						} catch (t) {
							return -1
						}
					}

					function Qo(t, e) {
						return e + " [" + t.N + " " + t.l + " " + Zo(t) + "]"
					}

					function ta(t) {
						var e = la;
						this.g = [], this.v = e, this.u = t || null, this.f = this.a = !1, this.c = void 0, this.l = this.A = this.i = !1, this.h = 0, this
							.b = null, this.m = 0
					}

					function ea(t, e, n) {
						t.a = !0, t.c = n, t.f = !e, oa(t)
					}

					function na(t) {
						if (t.a) {
							if (!t.l) throw new aa(t);
							t.l = !1
						}
					}

					function ia(t, e, n, i) {
						t.g.push([e, n, i]), t.a && oa(t)
					}

					function ra(t) {
						return j(t.g, function (t) {
							return g(t[1])
						})
					}

					function oa(e) {
						if (e.h && e.a && ra(e)) {
							var n = e.h,
								i = ca[n];
							i && (l.clearTimeout(i.a), delete ca[n]), e.h = 0
						}
						e.b && (e.b.m--, delete e.b), n = e.c;
						for (var t = i = !1; e.g.length && !e.i;) {
							var r = e.g.shift(),
								o = r[0],
								a = r[1];
							if (r = r[2], o = e.f ? a : o) try {
								var s = o.call(r || e.u, n);
								void 0 !== s && (e.f = e.f && (s == n || s instanceof Error), e.c = n = s), (S(n) || "function" == typeof l.Promise && n instanceof l
									.Promise) && (t = !0, e.i = !0)
							} catch (t) {
								n = t, e.f = !0, ra(e) || (i = !0)
							}
						}
						e.c = n, t && (s = I(e.o, e, !0), t = I(e.o, e, !1), n instanceof ta ? (ia(n, s, t), n.A = !0) : n.then(s, t)), i && (n = new ua(n),
							ca[n.a] = n, e.h = n.a)
					}

					function aa() {
						A.call(this)
					}

					function sa() {
						A.call(this)
					}

					function ua(t) {
						this.a = l.setTimeout(I(this.c, this), 0), this.b = t
					}(t = Ko.prototype).Ga = function () {
							void 0 !== u && this.a && (this.h = "Timed out after " + this.g + "ms, aborting", Do(this.b, Qo(this, this.h)), this.dispatchEvent(
								"timeout"), this.abort(8))
						}, t.abort = function () {
							this.a && this.c && (Do(this.b, Qo(this, "Aborting")), this.c = !1, this.f = !0, this.a.abort(), this.f = !1, this.dispatchEvent(
								"complete"), this.dispatchEvent("abort"), zo(this))
						}, t.va = function () {
							this.a && (this.c && (this.c = !1, this.f = !0, this.a.abort(), this.f = !1), zo(this, !0)), Ko.qb.va.call(this)
						}, t.Jb = function () {
							this.qa || (this.I || this.i || this.f ? Jo(this) : this.wc())
						}, t.wc = function () {
							Jo(this)
						}, t.getResponse = function () {
							try {
								if (!this.a) return null;
								if ("response" in this.a) return this.a.response;
								switch (this.o) {
								case Fo:
								case "text":
									return this.a.responseText;
								case "arraybuffer":
									if ("mozResponseArrayBuffer" in this.a) return this.a.mozResponseArrayBuffer
								}
								var t = this.b;
								return t && t.log(So, "Response type " + this.o + " is not supported on this browser", void 0), null
							} catch (t) {
								return Do(this.b, "Can not get response: " + t.message), null
							}
						}, ta.prototype.cancel = function (t) {
							if (this.a) this.c instanceof ta && this.c.cancel();
							else {
								if (this.b) {
									var e = this.b;
									delete this.b, t ? e.cancel(t) : (e.m--, e.m <= 0 && e.cancel())
								}
								this.v ? this.v.call(this.u, this) : this.l = !0, this.a || (t = new sa(this), na(this), ea(this, !1, t))
							}
						}, ta.prototype.o = function (t, e) {
							this.i = !1, ea(this, t, e)
						}, ta.prototype.then = function (t, e, n) {
							var i, r, o = new gt(function (t, e) {
								i = t, r = e
							});
							return ia(this, i, function (t) {
								t instanceof sa ? o.cancel() : r(t)
							}), o.then(t, e, n)
						}, ta.prototype.$goog_Thenable = !0, E(aa, A), aa.prototype.message = "Deferred has already fired", aa.prototype.name =
						"AlreadyCalledError", E(sa, A), sa.prototype.message = "Deferred was canceled", sa.prototype.name = "CanceledError", ua.prototype.c =
						function () {
							throw delete ca[this.a], this.b
						};
					var ca = {};

					function ha(t) {
						var e, n, i, r, o, a = document,
							s = In(t).toString(),
							u = document.createElement("SCRIPT"),
							c = {
								Lb: u,
								Ga: void 0
							},
							h = new ta(c);
						return e = window.setTimeout(function () {
							fa(u, !0);
							var t = new va(pa, "Timeout reached for loading script " + s);
							na(h), ea(h, !1, t)
						}, 5e3), c.Ga = e, u.onload = u.onreadystatechange = function () {
							u.readyState && "loaded" != u.readyState && "complete" != u.readyState || (fa(u, !1, e), na(h), ea(h, !0, null))
						}, u.onerror = function () {
							fa(u, !0, e);
							var t = new va(da, "Error while loading script " + s);
							na(h), ea(h, !1, t)
						}, ct(c = {}, {
							type: "text/javascript",
							charset: "UTF-8"
						}), Mn(u, c), i = t, (n = u).src = In(i), null === d && (d = (i = (i = l.document).querySelector && i.querySelector(
							"script[nonce]")) && (i = i.nonce || i.getAttribute("nonce")) && f.test(i) ? i : ""), (i = d) && n.setAttribute("nonce", i), (r =
							a, (o = (r || document).getElementsByTagName("HEAD")) && 0 != o.length ? o[0] : r.documentElement).appendChild(u), h
					}

					function la() {
						if (this && this.Lb) {
							var t = this.Lb;
							t && "SCRIPT" == t.tagName && fa(t, !0, this.Ga)
						}
					}

					function fa(t, e, n) {
						null != n && l.clearTimeout(n), t.onload = s, t.onerror = s, t.onreadystatechange = s, e && window.setTimeout(function () {
							t && t.parentNode && t.parentNode.removeChild(t)
						}, 0)
					}
					var da = 0,
						pa = 1;

					function va(t, e) {
						var n = "Jsloader error (code #" + t + ")";
						e && (n += ": " + e), A.call(this, n), this.code = t
					}

					function ma(t) {
						this.f = t
					}

					function ga(t, e, n) {
						if (this.b = t, t = e || {}, this.i = t.secureTokenEndpoint || "https://securetoken.googleapis.com/v1/token", this.m = t.secureTokenTimeout ||
							wa, this.f = ot(t.secureTokenHeaders || Ia), this.g = t.firebaseEndpoint ||
							"https://www.googleapis.com/identitytoolkit/v3/relyingparty/", this.h = t.firebaseTimeout || Ta, this.a = ot(t.firebaseHeaders ||
								ka), n && (this.a["X-Client-Version"] = n, this.f["X-Client-Version"] = n), n = "Node" == ii(), !(n = l.XMLHttpRequest || n && Wh
								.INTERNAL.node && Wh.INTERNAL.node.XMLHttpRequest) && !ni()) throw new Bi("internal-error",
							"The XMLHttpRequest compatibility library was not found.");
						this.c = void 0, ni() ? this.c = new Lo(self) : ri() ? this.c = new ma(n) : this.c = new yo
					}
					E(va, A), E(ma, vo), ma.prototype.a = function () {
						return new this.f
					}, ma.prototype.b = function () {
						return {}
					};
					var ba, ya = "idToken",
						wa = new ki(3e4, 6e4),
						Ia = {
							"Content-Type": "application/x-www-form-urlencoded"
						},
						Ta = new ki(3e4, 6e4),
						ka = {
							"Content-Type": "application/json"
						};

					function Ea(t, e) {
						e ? t.a["X-Firebase-Locale"] = e : delete t.a["X-Firebase-Locale"]
					}

					function Sa(t, e) {
						e ? (t.a["X-Client-Version"] = e, t.f["X-Client-Version"] = e) : (delete t.a["X-Client-Version"], delete t.f["X-Client-Version"])
					}

					function Aa(t, e, n, i, r, o, a) {
						var s;
						(t = !((s = si(s = hi()) != ai ? null : (s = s.match(/\sChrome\/(\d+)/i)) && 2 == s.length ? parseInt(s[1], 10) : null) && s < 30 ||
							Gt && te && !(9 < te)) || ni() ? I(t.o, t) : (ba || (ba = new gt(function (t, e) {
							! function (t, e) {
								if (((window.gapi || {}).client || {}).request) t();
								else {
									l[Oa] = function () {
										((window.gapi || {}).client || {}).request ? t() : e(Error("CORS_UNSUPPORTED"))
									};
									var n = Tn(Na, {
										onload: Oa
									});
									ia(ha(n), null, function () {
										e(Error("CORS_UNSUPPORTED"))
									}, void 0)
								}
							}(t, e)
						})), I(t.l, t)))(e, n, i, r, o, a)
					}
					ga.prototype.o = function (t, n, e, i, r, o) {
						if (ni() && (void 0 === l.fetch || void 0 === l.Headers || void 0 === l.Request)) throw new Bi(
							"operation-not-supported-in-this-environment",
							"fetch, Headers and Request native APIs or equivalent Polyfills must be available to support HTTP requests from a Worker environment."
						);
						var a = new Ko(this.c);
						if (o) {
							a.g = Math.max(0, o);
							var s = setTimeout(function () {
								a.dispatchEvent("timeout")
							}, o)
						}
						De(a, "complete", function () {
							s && clearTimeout(s);
							var e = null;
							try {
								e = JSON.parse(function (e) {
									try {
										return e.a ? e.a.responseText : ""
									} catch (t) {
										return Do(e.b, "Can not get responseText: " + t.message), ""
									}
								}(this)) || null
							} catch (t) {
								e = null
							}
							n && n(e)
						}), Le(a, "ready", function () {
							s && clearTimeout(s), Kt(this)
						}), Le(a, "timeout", function () {
							s && clearTimeout(s), Kt(this), n && n(null)
						}), Bo(a, t, e, i, r)
					};
					var Na = new mn(yn, "https://apis.google.com/js/client.js?onload=%{onload}"),
						Oa = "__fcb" + Math.floor(1e6 * Math.random()).toString();

					function _a(t) {
						if (!h(t = t.email) || !Zn.test(t)) throw new Bi("invalid-email")
					}

					function Pa(t) {
						"email" in t && _a(t)
					}

					function Ca(t) {
						if (!t[ya]) throw new Bi("internal-error")
					}

					function Ra(t) {
						if (t.phoneNumber || t.temporaryProof) {
							if (!t.phoneNumber || !t.temporaryProof) throw new Bi("internal-error")
						} else {
							if (!t.sessionInfo) throw new Bi("missing-verification-id");
							if (!t.code) throw new Bi("missing-verification-code")
						}
					}
					ga.prototype.l = function (t, n, i, r, o) {
						var a = this;
						ba.then(function () {
							window.gapi.client.setApiKey(a.b);
							var e = window.gapi.auth.getToken();
							window.gapi.auth.setToken(null), window.gapi.client.request({
								path: t,
								method: i,
								body: r,
								headers: o,
								authType: "none",
								callback: function (t) {
									window.gapi.auth.setToken(e), n && n(t)
								}
							})
						}).s(function (t) {
							n && n({
								error: {
									message: t && t.message || "CORS_UNSUPPORTED"
								}
							})
						})
					}, ga.prototype.ob = function () {
						return ps(this, os, {})
					}, ga.prototype.rb = function (t, e) {
						return ps(this, is, {
							idToken: t,
							email: e
						})
					}, ga.prototype.sb = function (t, e) {
						return ps(this, rs, {
							idToken: t,
							password: e
						})
					};
					var Da = {
						displayName: "DISPLAY_NAME",
						photoUrl: "PHOTO_URL"
					};

					function La(t) {
						if (!t.requestUri || !t.sessionId && !t.postBody && !t.pendingToken) throw new Bi("internal-error")
					}

					function xa(t, e) {
						return e.oauthIdToken && e.providerId && 0 == e.providerId.indexOf("oidc.") && !e.pendingToken && (t.sessionId ? e.nonce = t.sessionId :
							t.postBody && (ln(t = new sn(t.postBody), "nonce") && (e.nonce = t.get("nonce")))), e
					}

					function Ma(t) {
						var e = null;
						if (t.needConfirmation ? (t.code = "account-exists-with-different-credential", e = po(t)) : "FEDERATED_USER_ID_ALREADY_LINKED" == t
							.errorMessage ? (t.code = "credential-already-in-use", e = po(t)) : "EMAIL_EXISTS" == t.errorMessage ? (t.code =
								"email-already-in-use", e = po(t)) : t.errorMessage && (e = vs(t.errorMessage)), e) throw e;
						if (!t[ya]) throw new Bi("internal-error")
					}

					function ja(t, e) {
						return e.returnIdpCredential = !0, ps(t, as, e)
					}

					function Ua(t, e) {
						return e.returnIdpCredential = !0, ps(t, us, e)
					}

					function Va(t, e) {
						return e.returnIdpCredential = !0, e.autoCreate = !1, ps(t, ss, e)
					}

					function Ka(t) {
						if (!t.oobCode) throw new Bi("invalid-action-code")
					}(t = ga.prototype).tb = function (t, i) {
						var r = {
								idToken: t
							},
							o = [];
						return it(Da, function (t, e) {
							var n = i[e];
							null === n ? o.push(t) : e in i && (r[e] = n)
						}), o.length && (r.deleteAttribute = o), ps(this, is, r)
					}, t.kb = function (t, e) {
						return ct(t = {
							requestType: "PASSWORD_RESET",
							email: t
						}, e), ps(this, Za, t)
					}, t.lb = function (t, e) {
						return ct(t = {
							requestType: "EMAIL_SIGNIN",
							email: t
						}, e), ps(this, Ya, t)
					}, t.jb = function (t, e) {
						return ct(t = {
							requestType: "VERIFY_EMAIL",
							idToken: t
						}, e), ps(this, $a, t)
					}, t.Ua = function (t) {
						return ps(this, ls, t)
					}, t.Za = function (t, e) {
						return ps(this, es, {
							oobCode: t,
							newPassword: e
						})
					}, t.Ka = function (t) {
						return ps(this, qa, {
							oobCode: t
						})
					}, t.Wa = function (t) {
						return ps(this, Fa, {
							oobCode: t
						})
					};
					var Fa = {
							endpoint: "setAccountInfo",
							C: Ka,
							da: "email"
						},
						qa = {
							endpoint: "resetPassword",
							C: Ka,
							J: function (t) {
								var e = t.requestType;
								if (!e || !t.email && "EMAIL_SIGNIN" != e) throw new Bi("internal-error")
							}
						},
						Ha = {
							endpoint: "signupNewUser",
							C: function (t) {
								if (_a(t), !t.password) throw new Bi("weak-password")
							},
							J: Ca,
							R: !0
						},
						Ba = {
							endpoint: "createAuthUri"
						},
						Ga = {
							endpoint: "deleteAccount",
							T: ["idToken"]
						},
						Wa = {
							endpoint: "setAccountInfo",
							T: ["idToken", "deleteProvider"],
							C: function (t) {
								if (!v(t.deleteProvider)) throw new Bi("internal-error")
							}
						},
						Xa = {
							endpoint: "emailLinkSignin",
							T: ["email", "oobCode"],
							C: _a,
							J: Ca,
							R: !0
						},
						Ja = {
							endpoint: "emailLinkSignin",
							T: ["idToken", "email", "oobCode"],
							C: _a,
							J: Ca,
							R: !0
						},
						za = {
							endpoint: "getAccountInfo"
						},
						Ya = {
							endpoint: "getOobConfirmationCode",
							T: ["requestType"],
							C: function (t) {
								if ("EMAIL_SIGNIN" != t.requestType) throw new Bi("internal-error");
								_a(t)
							},
							da: "email"
						},
						$a = {
							endpoint: "getOobConfirmationCode",
							T: ["idToken", "requestType"],
							C: function (t) {
								if ("VERIFY_EMAIL" != t.requestType) throw new Bi("internal-error")
							},
							da: "email"
						},
						Za = {
							endpoint: "getOobConfirmationCode",
							T: ["requestType"],
							C: function (t) {
								if ("PASSWORD_RESET" != t.requestType) throw new Bi("internal-error");
								_a(t)
							},
							da: "email"
						},
						Qa = {
							wb: !0,
							endpoint: "getProjectConfig",
							Ib: "GET"
						},
						ts = {
							wb: !0,
							endpoint: "getRecaptchaParam",
							Ib: "GET",
							J: function (t) {
								if (!t.recaptchaSiteKey) throw new Bi("internal-error")
							}
						},
						es = {
							endpoint: "resetPassword",
							C: Ka,
							da: "email"
						},
						ns = {
							endpoint: "sendVerificationCode",
							T: ["phoneNumber", "recaptchaToken"],
							da: "sessionInfo"
						},
						is = {
							endpoint: "setAccountInfo",
							T: ["idToken"],
							C: Pa,
							R: !0
						},
						rs = {
							endpoint: "setAccountInfo",
							T: ["idToken"],
							C: function (t) {
								if (Pa(t), !t.password) throw new Bi("weak-password")
							},
							J: Ca,
							R: !0
						},
						os = {
							endpoint: "signupNewUser",
							J: Ca,
							R: !0
						},
						as = {
							endpoint: "verifyAssertion",
							C: La,
							Qa: xa,
							J: Ma,
							R: !0
						},
						ss = {
							endpoint: "verifyAssertion",
							C: La,
							Qa: xa,
							J: function (t) {
								if (t.errorMessage && "USER_NOT_FOUND" == t.errorMessage) throw new Bi("user-not-found");
								if (t.errorMessage) throw vs(t.errorMessage);
								if (!t[ya]) throw new Bi("internal-error")
							},
							R: !0
						},
						us = {
							endpoint: "verifyAssertion",
							C: function (t) {
								if (La(t), !t.idToken) throw new Bi("internal-error")
							},
							Qa: xa,
							J: Ma,
							R: !0
						},
						cs = {
							endpoint: "verifyCustomToken",
							C: function (t) {
								if (!t.token) throw new Bi("invalid-custom-token")
							},
							J: Ca,
							R: !0
						},
						hs = {
							endpoint: "verifyPassword",
							C: function (t) {
								if (_a(t), !t.password) throw new Bi("wrong-password")
							},
							J: Ca,
							R: !0
						},
						ls = {
							endpoint: "verifyPhoneNumber",
							C: Ra,
							J: Ca
						},
						fs = {
							endpoint: "verifyPhoneNumber",
							C: function (t) {
								if (!t.idToken) throw new Bi("internal-error");
								Ra(t)
							},
							J: function (t) {
								if (t.temporaryProof) throw t.code = "credential-already-in-use", po(t);
								Ca(t)
							}
						},
						ds = {
							Wb: {
								USER_NOT_FOUND: "user-not-found"
							},
							endpoint: "verifyPhoneNumber",
							C: Ra,
							J: Ca
						};

					function ps(t, e, n) {
						if (! function (t, e) {
								if (!e || !e.length) return !0;
								if (!t) return !1;
								for (var n = 0; n < e.length; n++) {
									var i = t[e[n]];
									if (null == i || "" === i) return !1
								}
								return !0
							}(n, e.T)) return St(new Bi("internal-error"));
						var i, r = e.Ib || "POST";
						return Et(n).then(e.C).then(function () {
							return e.R && (n.returnSecureToken = !0),
								function (t, e, i, r, o, n) {
									var a = Ye(t.g + e);
									Je(a, "key", t.b), n && Je(a, "cb", k().toString());
									var s = "GET" == i;
									if (s)
										for (var u in r) r.hasOwnProperty(u) && Je(a, u, r[u]);
									return new gt(function (e, n) {
										Aa(t, a.toString(), function (t) {
											t ? t.error ? n(ms(t, o || {})) : e(t) : n(new Bi("network-request-failed"))
										}, i, s ? void 0 : Kn(bi(r)), t.a, t.h.get())
									})
								}(t, e.endpoint, r, n, e.Wb, e.wb || !1)
						}).then(function (t) {
							return i = t, e.Qa ? e.Qa(n, i) : i
						}).then(e.J).then(function () {
							if (!e.da) return i;
							if (!(e.da in i)) throw new Bi("internal-error");
							return i[e.da]
						})
					}

					function vs(t) {
						return ms({
							error: {
								errors: [{
									message: t
								}],
								code: 400,
								message: t
							}
						})
					}

					function ms(t, e) {
						var n = (t.error && t.error.errors && t.error.errors[0] || {}).reason || "",
							i = {
								keyInvalid: "invalid-api-key",
								ipRefererBlocked: "app-not-authorized"
							};
						if (n = i[n] ? new Bi(i[n]) : null) return n;
						for (var r in n = t.error && t.error.message || "", ct(i = {
								INVALID_CUSTOM_TOKEN: "invalid-custom-token",
								CREDENTIAL_MISMATCH: "custom-token-mismatch",
								MISSING_CUSTOM_TOKEN: "internal-error",
								INVALID_IDENTIFIER: "invalid-email",
								MISSING_CONTINUE_URI: "internal-error",
								INVALID_EMAIL: "invalid-email",
								INVALID_PASSWORD: "wrong-password",
								USER_DISABLED: "user-disabled",
								MISSING_PASSWORD: "internal-error",
								EMAIL_EXISTS: "email-already-in-use",
								PASSWORD_LOGIN_DISABLED: "operation-not-allowed",
								INVALID_IDP_RESPONSE: "invalid-credential",
								INVALID_PENDING_TOKEN: "invalid-credential",
								FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use",
								MISSING_OR_INVALID_NONCE: "missing-or-invalid-nonce",
								INVALID_MESSAGE_PAYLOAD: "invalid-message-payload",
								INVALID_RECIPIENT_EMAIL: "invalid-recipient-email",
								INVALID_SENDER: "invalid-sender",
								EMAIL_NOT_FOUND: "user-not-found",
								RESET_PASSWORD_EXCEED_LIMIT: "too-many-requests",
								EXPIRED_OOB_CODE: "expired-action-code",
								INVALID_OOB_CODE: "invalid-action-code",
								MISSING_OOB_CODE: "internal-error",
								INVALID_PROVIDER_ID: "invalid-provider-id",
								CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login",
								INVALID_ID_TOKEN: "invalid-user-token",
								TOKEN_EXPIRED: "user-token-expired",
								USER_NOT_FOUND: "user-token-expired",
								CORS_UNSUPPORTED: "cors-unsupported",
								DYNAMIC_LINK_NOT_ACTIVATED: "dynamic-link-not-activated",
								INVALID_APP_ID: "invalid-app-id",
								TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests",
								WEAK_PASSWORD: "weak-password",
								OPERATION_NOT_ALLOWED: "operation-not-allowed",
								USER_CANCELLED: "user-cancelled",
								CAPTCHA_CHECK_FAILED: "captcha-check-failed",
								INVALID_APP_CREDENTIAL: "invalid-app-credential",
								INVALID_CODE: "invalid-verification-code",
								INVALID_PHONE_NUMBER: "invalid-phone-number",
								INVALID_SESSION_INFO: "invalid-verification-id",
								INVALID_TEMPORARY_PROOF: "invalid-credential",
								MISSING_APP_CREDENTIAL: "missing-app-credential",
								MISSING_CODE: "missing-verification-code",
								MISSING_PHONE_NUMBER: "missing-phone-number",
								MISSING_SESSION_INFO: "missing-verification-id",
								QUOTA_EXCEEDED: "quota-exceeded",
								SESSION_EXPIRED: "code-expired",
								REJECTED_CREDENTIAL: "rejected-credential",
								INVALID_CONTINUE_URI: "invalid-continue-uri",
								MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name",
								MISSING_IOS_BUNDLE_ID: "missing-ios-bundle-id",
								UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri",
								INVALID_DYNAMIC_LINK_DOMAIN: "invalid-dynamic-link-domain",
								INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id",
								INVALID_CERT_HASH: "invalid-cert-hash",
								ADMIN_ONLY_OPERATION: "admin-restricted-operation"
							}, e || {}), e = (e = n.match(/^[^\s]+\s*:\s*(.*)$/)) && 1 < e.length ? e[1] : void 0, i)
							if (0 === n.indexOf(r)) return new Bi(i[r], e);
						return !e && t && (e = gi(t)), new Bi("internal-error", e)
					}

					function gs(t) {
						var o;
						this.b = t, this.a = null, this.fb = (o = this, (Is || (Is = new gt(function (t, e) {
							function n() {
								Ti(), li("gapi.load")("gapi.iframes", {
									callback: t,
									ontimeout: function () {
										Ti(), e(Error("Network Error"))
									},
									timeout: ys.get()
								})
							}
							if (li("gapi.iframes.Iframe")) t();
							else if (li("gapi.load")) n();
							else {
								var i = "__iframefcb" + Math.floor(1e6 * Math.random()).toString();
								l[i] = function () {
									li("gapi.load") ? n() : e(Error("Network Error"))
								}, Et(ha(i = Tn(bs, {
									onload: i
								}))).s(function () {
									e(Error("Network Error"))
								})
							}
						}).s(function (t) {
							throw Is = null, t
						}))).then(function () {
							return new gt(function (i, r) {
								li("gapi.iframes.getContext")().open({
									where: document.body,
									url: o.b,
									messageHandlersFilter: li("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"),
									attributes: {
										style: {
											position: "absolute",
											top: "-100px",
											width: "1px",
											height: "1px"
										}
									},
									dontclear: !0
								}, function (t) {
									function e() {
										clearTimeout(n), i()
									}
									o.a = t, o.a.restyle({
										setHideOnLeave: !1
									});
									var n = setTimeout(function () {
										r(Error("Network Error"))
									}, ws.get());
									t.ping(e).then(e, function () {
										r(Error("Network Error"))
									})
								})
							})
						}))
					}
					var bs = new mn(yn, "https://apis.google.com/js/api.js?onload=%{onload}"),
						ys = new ki(3e4, 6e4),
						ws = new ki(5e3, 15e3),
						Is = null;

					function Ts(t, e, n) {
						this.i = t, this.g = e, this.h = n, this.f = null, this.a = $e(this.i, "/__/auth/iframe"), Je(this.a, "apiKey", this.g), Je(this.a,
							"appName", this.h), this.b = null, this.c = []
					}

					function ks(t, e, n, i, r) {
						this.o = t, this.l = e, this.c = n, this.m = i, this.h = this.g = this.i = null, this.a = r, this.f = null
					}

					function Es(t) {
						try {
							return Wh.app(t).auth().ya()
						} catch (t) {
							return []
						}
					}

					function Ss(t, e, n, i, r) {
						this.l = t, this.f = e, this.b = n, this.c = i || null, this.h = r || null, this.o = this.u = this.v = null, this.g = [], this.m =
							this.a = null
					}

					function As(t) {
						var e, s = Wn();
						return (e = t, ps(e, Qa, {}).then(function (t) {
							return t.authorizedDomains || []
						})).then(function (t) {
							t: {
								var e = Ye(s),
									n = e.f;e = e.b;
								for (var i = 0; i < t.length; i++) {
									var r = t[i],
										o = e,
										a = n;
									if (o = 0 == r.indexOf("chrome-extension://") ? Ye(r).b == o && "chrome-extension" == a : ("http" == a || "https" == a) && ($n
											.test(r) ? o == r : (r = r.split(".").join("\\."), new RegExp("^(.+\\." + r + "|" + r + ")$", "i").test(o)))) {
										t = !0;
										break t
									}
								}
								t = !1
							}
							if (!t) throw new lo(Wn())
						})
					}

					function Ns(r) {
						return r.m || (r.m = Qn().then(function () {
							if (!r.u) {
								var t = r.c,
									e = r.h,
									n = Es(r.b),
									i = new Ts(r.l, r.f, r.b);
								i.f = t, i.b = e, i.c = q(n || []), r.u = i.toString()
							}
							r.i = new gs(r.u),
								function (i) {
									if (!i.i) throw Error("IfcHandler must be initialized!");
									t = i.i, e = function (t) {
										var e = {};
										if (t && t.authEvent) {
											var n = !1;
											for (t = so(t.authEvent), e = 0; e < i.g.length; e++) n = i.g[e](t) || n;
											return (e = {}).status = n ? "ACK" : "ERROR", Et(e)
										}
										return e.status = "ERROR", Et(e)
									}, t.fb.then(function () {
										t.a.register("authEvent", e, li("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))
									});
									var t, e
								}(r)
						})), r.m
					}

					function Os(t) {
						return t.o || (t.v = t.c ? ci(t.c, Es(t.b)) : null, t.o = new ga(t.f, dr(t.h), t.v)), t.o
					}

					function _s(t, e, n, i, r, o, a, s, u, c) {
						return (t = new ks(t, e, n, i, r)).i = o, t.g = a, t.h = s, t.b = ot(u || null), t.f = c, t.toString()
					}

					function Ps(t) {
						if (this.a = t || Wh.INTERNAL.reactNative && Wh.INTERNAL.reactNative.AsyncStorage, !this.a) throw new Bi("internal-error",
							"The React Native compatibility library was not found.");
						this.type = "asyncStorage"
					}

					function Cs(t) {
						this.b = t, this.a = {}, this.c = I(this.f, this)
					}
					Ts.prototype.toString = function () {
						return this.f ? Je(this.a, "v", this.f) : hn(this.a.a, "v"), this.b ? Je(this.a, "eid", this.b) : hn(this.a.a, "eid"), this.c.length ?
							Je(this.a, "fw", this.c.join(",")) : hn(this.a.a, "fw"), this.a.toString()
					}, ks.prototype.toString = function () {
						var t = $e(this.o, "/__/auth/handler");
						if (Je(t, "apiKey", this.l), Je(t, "appName", this.c), Je(t, "authType", this.m), this.a.isOAuthProvider) {
							var e = this.a;
							try {
								var n = Wh.app(this.c).auth().ea()
							} catch (t) {
								n = null
							}
							for (var i in e.$a = n, Je(t, "providerId", this.a.providerId), n = bi((e = this.a).zb)) n[i] = n[i].toString();
							i = e.Dc, n = ot(n);
							for (var r = 0; r < i.length; r++) {
								var o = i[r];
								o in n && delete n[o]
							}
							e.cb && e.$a && !n[e.cb] && (n[e.cb] = e.$a), rt(n) || Je(t, "customParameters", gi(n))
						}
						if ("function" == typeof this.a.Fb && ((e = this.a.Fb()).length && Je(t, "scopes", e.join(","))), this.i ? Je(t, "redirectUrl",
								this.i) : hn(t.a, "redirectUrl"), this.g ? Je(t, "eventId", this.g) : hn(t.a, "eventId"), this.h ? Je(t, "v", this.h) : hn(t.a,
								"v"), this.b)
							for (var a in this.b) this.b.hasOwnProperty(a) && !ze(t, a) && Je(t, a, this.b[a]);
						return this.f ? Je(t, "eid", this.f) : hn(t.a, "eid"), (a = Es(this.c)).length && Je(t, "fw", a.join(",")), t.toString()
					}, (t = Ss.prototype).Ea = function (e, n, t) {
						var i = new Bi("popup-closed-by-user"),
							r = new Bi("web-storage-unsupported"),
							o = this,
							a = !1;
						return this.ga().then(function () {
							var t, i;
							(t = o, i = {
								type: "webStorageSupport"
							}, Ns(t).then(function () {
								return e = t.i, n = i, e.fb.then(function () {
									return new gt(function (t) {
										e.a.send(n.type, n, t, li("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))
									})
								});
								var e, n
							}).then(function (t) {
								if (t && t.length && void 0 !== t[0].webStorageSupport) return t[0].webStorageSupport;
								throw Error()
							})).then(function (t) {
								t || (e && zn(e), n(r), a = !0)
							})
						}).s(function () {}).then(function () {
							if (!a) return n = e, new gt(function (e) {
								return function t() {
									je(2e3).then(function () {
										if (n && !n.closed) return t();
										e()
									})
								}()
							});
							var n
						}).then(function () {
							if (!a) return je(t).then(function () {
								n(i)
							})
						})
					}, t.Mb = function () {
						var t = hi();
						return !mi(t) && !Ii(t)
					}, t.Hb = function () {
						return !1
					}, t.Db = function (e, t, n, i, r, o, a) {
						if (!e) return St(new Bi("popup-blocked"));
						if (a && !mi()) return this.ga().s(function (t) {
							zn(e), r(t)
						}), i(), Et();
						this.a || (this.a = As(Os(this)));
						var s = this;
						return this.a.then(function () {
							var t = s.ga().s(function (t) {
								throw zn(e), r(t), t
							});
							return i(), t
						}).then(function () {
							(oo(n), a) || Xn(_s(s.l, s.f, s.b, t, n, null, o, s.c, void 0, s.h), e)
						}).s(function (t) {
							throw "auth/network-request-failed" == t.code && (s.a = null), t
						})
					}, t.Ca = function (t, e, n) {
						this.a || (this.a = As(Os(this)));
						var i = this;
						return this.a.then(function () {
							oo(e), Xn(_s(i.l, i.f, i.b, t, e, Wn(), n, i.c, void 0, i.h))
						}).s(function (t) {
							throw "auth/network-request-failed" == t.code && (i.a = null), t
						})
					}, t.ga = function () {
						var t = this;
						return Ns(this).then(function () {
							return t.i.fb
						}).s(function () {
							throw t.a = null, new Bi("network-request-failed")
						})
					}, t.Pb = function () {
						return !0
					}, t.wa = function (t) {
						this.g.push(t)
					}, t.La = function (e) {
						K(this.g, function (t) {
							return t == e
						})
					}, (t = Ps.prototype).get = function (t) {
						return Et(this.a.getItem(t)).then(function (t) {
							return t && yi(t)
						})
					}, t.set = function (t, e) {
						return Et(this.a.setItem(t, gi(e)))
					}, t.P = function (t) {
						return Et(this.a.removeItem(t))
					}, t.Y = function () {}, t.ca = function () {};
					var Rs, Ds = [];

					function Ls(t) {
						this.a = t
					}

					function xs(t) {
						this.c = t, this.b = !1, this.a = []
					}

					function Ms(i, t, e, n) {
						var r, o, a, s, u = e || {},
							c = null;
						if (i.b) return St(Error("connection_unavailable"));
						var h = n ? 800 : 50,
							l = "undefined" != typeof MessageChannel ? new MessageChannel : null;
						return new gt(function (e, n) {
							l ? (r = Math.floor(Math.random() * Math.pow(10, 20)).toString(), l.port1.start(), a = setTimeout(function () {
								n(Error("unsupported_event"))
							}, h), c = {
								messageChannel: l,
								onMessage: o = function (t) {
									t.data.eventId === r && ("ack" === t.data.status ? (clearTimeout(a), s = setTimeout(function () {
										n(Error("timeout"))
									}, 3e3)) : "done" === t.data.status ? (clearTimeout(s), void 0 !== t.data.response ? e(t.data.response) : n(Error(
										"unknown_error"))) : (clearTimeout(a), clearTimeout(s), n(Error("invalid_response"))))
								}
							}, i.a.push(c), l.port1.addEventListener("message", o), i.c.postMessage({
								eventType: t,
								eventId: r,
								data: u
							}, [l.port2])) : n(Error("connection_unavailable"))
						}).then(function (t) {
							return js(i, c), t
						}).s(function (t) {
							throw js(i, c), t
						})
					}

					function js(t, e) {
						if (e) {
							var n = e.messageChannel,
								i = e.onMessage;
							n && (n.port1.removeEventListener("message", i), n.port1.close()), K(t.a, function (t) {
								return t == e
							})
						}
					}

					function Us() {
						if (!Fs()) throw new Bi("web-storage-unsupported");
						this.c = {}, this.a = [], this.b = 0, this.l = l.indexedDB, this.type = "indexedDB", this.g = this.m = this.f = this.i = null, this
							.u = !1, this.h = null;
						var t, i = this;
						ni() && self ? (this.m = function () {
							var e = ni() ? self : null;
							if (x(Ds, function (t) {
									t.b == e && (n = t)
								}), !n) {
								var n = new Cs(e);
								Ds.push(n)
							}
							return n
						}(), this.m.subscribe("keyChanged", function (t, n) {
							return Ws(i).then(function (e) {
								return 0 < e.length && x(i.a, function (t) {
									t(e)
								}), {
									keyProcessed: U(e, n.key)
								}
							})
						}), this.m.subscribe("ping", function () {
							return Et(["keyChanged"])
						})) : (t = l.navigator, t && t.serviceWorker ? Et().then(function () {
							return t.serviceWorker.ready
						}).then(function (t) {
							return t.active || null
						}).s(function () {
							return null
						}) : Et(null)).then(function (t) {
							(i.h = t) && (i.g = new xs(new Ls(t)), Ms(i.g, "ping", null, !0).then(function (t) {
								t[0].fulfilled && U(t[0].value, "keyChanged") && (i.u = !0)
							}).s(function () {}))
						})
					}

					function Vs(r) {
						return new gt(function (e, n) {
							var t = r.l.open("firebaseLocalStorageDb", 1);
							t.onerror = function (t) {
								try {
									t.preventDefault()
								} catch (t) {}
								n(Error(t.target.error))
							}, t.onupgradeneeded = function (t) {
								t = t.target.result;
								try {
									t.createObjectStore("firebaseLocalStorage", {
										keyPath: "fbase_key"
									})
								} catch (t) {
									n(t)
								}
							}, t.onsuccess = function (t) {
								var i;
								(t = t.target.result).objectStoreNames.contains("firebaseLocalStorage") ? e(t) : (i = r, new gt(function (t, e) {
									var n = i.l.deleteDatabase("firebaseLocalStorageDb");
									n.onsuccess = function () {
										t()
									}, n.onerror = function (t) {
										e(Error(t.target.error))
									}
								})).then(function () {
									return Vs(r)
								}).then(function (t) {
									e(t)
								}).s(function (t) {
									n(t)
								})
							}
						})
					}

					function Ks(t) {
						return t.o || (t.o = Vs(t)), t.o
					}

					function Fs() {
						try {
							return !!l.indexedDB
						} catch (t) {
							return !1
						}
					}

					function qs(t) {
						return t.objectStore("firebaseLocalStorage")
					}

					function Hs(t, e) {
						return t.transaction(["firebaseLocalStorage"], e ? "readwrite" : "readonly")
					}

					function Bs(t) {
						return new gt(function (e, n) {
							t.onsuccess = function (t) {
								t && t.target ? e(t.target.result) : e()
							}, t.onerror = function (t) {
								n(t.target.error)
							}
						})
					}

					function Gs(t, e) {
						return t.g && t.h && ((n = l.navigator) && n.serviceWorker && n.serviceWorker.controller || null) === t.h ? Ms(t.g, "keyChanged", {
							key: e
						}, t.u).then(function () {}).s(function () {}) : Et();
						var n
					}

					function Ws(i) {
						return Ks(i).then(function (t) {
							var r = qs(Hs(t, !1));
							return r.getAll ? Bs(r.getAll()) : new gt(function (e, n) {
								var i = [],
									t = r.openCursor();
								t.onsuccess = function (t) {
									(t = t.target.result) ? (i.push(t.value), t.continue()) : e(i)
								}, t.onerror = function (t) {
									n(t.target.error)
								}
							})
						}).then(function (t) {
							var e = {},
								n = [];
							if (0 == i.b) {
								for (n = 0; n < t.length; n++) e[t[n].fbase_key] = t[n].value;
								n = function t(e, n) {
									var i, r = [];
									for (i in e) i in n ? typeof e[i] != typeof n[i] ? r.push(i) : "object" == typeof e[i] && null != e[i] && null != n[i] ? 0 <
										t(e[i], n[i]).length && r.push(i) : e[i] !== n[i] && r.push(i) : r.push(i);
									for (i in n) i in e || r.push(i);
									return r
								}(i.c, e), i.c = e
							}
							return n
						})
					}

					function Xs(t) {
						t.i && t.i.cancel("STOP_EVENT"), t.f && (clearTimeout(t.f), t.f = null)
					}

					function Js(t) {
						var i = this,
							r = null;
						this.a = [], this.type = "indexedDB", this.c = t, this.b = Et().then(function () {
							if (Fs()) {
								var e = wi(),
									n = "__sak" + e;
								return Rs || (Rs = new Us), (r = Rs).set(n, e).then(function () {
									return r.get(n)
								}).then(function (t) {
									if (t !== e) throw Error("indexedDB not supported!");
									return r.P(n)
								}).then(function () {
									return r
								}).s(function () {
									return i.c
								})
							}
							return i.c
						}).then(function (t) {
							return i.type = t.type, t.Y(function (e) {
								x(i.a, function (t) {
									t(e)
								})
							}), t
						})
					}

					function zs() {
						this.a = {}, this.type = "inMemory"
					}

					function Ys() {
						if (! function () {
								var t = "Node" == ii();
								if (!(t = $s() || t && Wh.INTERNAL.node && Wh.INTERNAL.node.localStorage)) return !1;
								try {
									return t.setItem("__sak", "1"), t.removeItem("__sak"), !0
								} catch (t) {
									return !1
								}
							}()) {
							if ("Node" == ii()) throw new Bi("internal-error", "The LocalStorage compatibility library was not found.");
							throw new Bi("web-storage-unsupported")
						}
						this.a = $s() || Wh.INTERNAL.node.localStorage, this.type = "localStorage"
					}

					function $s() {
						try {
							var t = l.localStorage,
								e = wi();
							return t && (t.setItem(e, "1"), t.removeItem(e)), t
						} catch (t) {
							return null
						}
					}

					function Zs() {
						this.type = "nullStorage"
					}

					function Qs() {
						if (! function () {
								var t = "Node" == ii();
								if (!(t = tu() || t && Wh.INTERNAL.node && Wh.INTERNAL.node.sessionStorage)) return !1;
								try {
									return t.setItem("__sak", "1"), t.removeItem("__sak"), !0
								} catch (t) {
									return !1
								}
							}()) {
							if ("Node" == ii()) throw new Bi("internal-error", "The SessionStorage compatibility library was not found.");
							throw new Bi("web-storage-unsupported")
						}
						this.a = tu() || Wh.INTERNAL.node.sessionStorage, this.type = "sessionStorage"
					}

					function tu() {
						try {
							var t = l.sessionStorage,
								e = wi();
							return t && (t.setItem(e, "1"), t.removeItem(e)), t
						} catch (t) {
							return null
						}
					}

					function eu() {
						var t = {};
						t.Browser = ru, t.Node = ou, t.ReactNative = au, t.Worker = su, this.a = t[ii()]
					}
					Cs.prototype.f = function (n) {
						var i = n.data.eventType,
							r = n.data.eventId,
							t = this.a[i];
						if (t && 0 < t.length) {
							n.ports[0].postMessage({
								status: "ack",
								eventId: r,
								eventType: i,
								response: null
							});
							var e = [];
							x(t, function (t) {
								e.push(Et().then(function () {
									return t(n.origin, n.data.data)
								}))
							}), Nt(e).then(function (t) {
								var e = [];
								x(t, function (t) {
									e.push({
										fulfilled: t.Eb,
										value: t.value,
										reason: t.reason ? t.reason.message : void 0
									})
								}), x(e, function (t) {
									for (var e in t) void 0 === t[e] && delete t[e]
								}), n.ports[0].postMessage({
									status: "done",
									eventId: r,
									eventType: i,
									response: e
								})
							})
						}
					}, Cs.prototype.subscribe = function (t, e) {
						rt(this.a) && this.b.addEventListener("message", this.c), void 0 === this.a[t] && (this.a[t] = []), this.a[t].push(e)
					}, Cs.prototype.unsubscribe = function (t, e) {
						void 0 !== this.a[t] && e ? (K(this.a[t], function (t) {
							return t == e
						}), 0 == this.a[t].length && delete this.a[t]) : e || delete this.a[t], rt(this.a) && this.b.removeEventListener("message", this.c)
					}, Ls.prototype.postMessage = function (t, e) {
						this.a.postMessage(t, e)
					}, xs.prototype.close = function () {
						for (; 0 < this.a.length;) js(this, this.a[0]);
						this.b = !0
					}, (t = Us.prototype).set = function (n, i) {
						var r, o = !1,
							a = this;
						return Ks(this).then(function (t) {
							return Bs((t = qs(Hs(r = t, !0))).get(n))
						}).then(function (t) {
							var e = qs(Hs(r, !0));
							return t ? (t.value = i, Bs(e.put(t))) : (a.b++, o = !0, (t = {}).fbase_key = n, t.value = i, Bs(e.add(t)))
						}).then(function () {
							return a.c[n] = i, Gs(a, n)
						}).ia(function () {
							o && a.b--
						})
					}, t.get = function (e) {
						return Ks(this).then(function (t) {
							return Bs(qs(Hs(t, !1)).get(e))
						}).then(function (t) {
							return t && t.value
						})
					}, t.P = function (e) {
						var n = !1,
							i = this;
						return Ks(this).then(function (t) {
							return n = !0, i.b++, Bs(qs(Hs(t, !0)).delete(e))
						}).then(function () {
							return delete i.c[e], Gs(i, e)
						}).ia(function () {
							n && i.b--
						})
					}, t.Y = function (t) {
						var n;
						0 == this.a.length && (Xs(n = this), function e() {
							n.f = setTimeout(function () {
								n.i = Ws(n).then(function (e) {
									0 < e.length && x(n.a, function (t) {
										t(e)
									})
								}).then(function () {
									e()
								}).s(function (t) {
									"STOP_EVENT" != t.message && e()
								})
							}, 800)
						}()), this.a.push(t)
					}, t.ca = function (e) {
						K(this.a, function (t) {
							return t == e
						}), 0 == this.a.length && Xs(this)
					}, (t = Js.prototype).get = function (e) {
						return this.b.then(function (t) {
							return t.get(e)
						})
					}, t.set = function (e, n) {
						return this.b.then(function (t) {
							return t.set(e, n)
						})
					}, t.P = function (e) {
						return this.b.then(function (t) {
							return t.P(e)
						})
					}, t.Y = function (t) {
						this.a.push(t)
					}, t.ca = function (e) {
						K(this.a, function (t) {
							return t == e
						})
					}, (t = zs.prototype).get = function (t) {
						return Et(this.a[t])
					}, t.set = function (t, e) {
						return this.a[t] = e, Et()
					}, t.P = function (t) {
						return delete this.a[t], Et()
					}, t.Y = function () {}, t.ca = function () {}, (t = Ys.prototype).get = function (t) {
						var e = this;
						return Et().then(function () {
							return yi(e.a.getItem(t))
						})
					}, t.set = function (e, n) {
						var i = this;
						return Et().then(function () {
							var t = gi(n);
							null === t ? i.P(e) : i.a.setItem(e, t)
						})
					}, t.P = function (t) {
						var e = this;
						return Et().then(function () {
							e.a.removeItem(t)
						})
					}, t.Y = function (t) {
						l.window && we(l.window, "storage", t)
					}, t.ca = function (t) {
						l.window && ke(l.window, "storage", t)
					}, (t = Zs.prototype).get = function () {
						return Et(null)
					}, t.set = function () {
						return Et()
					}, t.P = function () {
						return Et()
					}, t.Y = function () {}, t.ca = function () {}, (t = Qs.prototype).get = function (t) {
						var e = this;
						return Et().then(function () {
							return yi(e.a.getItem(t))
						})
					}, t.set = function (e, n) {
						var i = this;
						return Et().then(function () {
							var t = gi(n);
							null === t ? i.P(e) : i.a.setItem(e, t)
						})
					}, t.P = function (t) {
						var e = this;
						return Et().then(function () {
							e.a.removeItem(t)
						})
					}, t.Y = function () {}, t.ca = function () {};
					var nu, iu, ru = {
							B: Ys,
							Ra: Qs
						},
						ou = {
							B: Ys,
							Ra: Qs
						},
						au = {
							B: Ps,
							Ra: Zs
						},
						su = {
							B: Ys,
							Ra: Zs
						},
						uu = {
							Xc: "local",
							NONE: "none",
							Zc: "session"
						};

					function cu() {
						var t = !(Ii(hi()) || !ei()),
							e = mi(),
							n = fi();
						this.o = t, this.h = e, this.m = n, this.a = {}, nu || (nu = new eu), t = nu;
						try {
							this.g = !Gn() && Ai() || !l.indexedDB ? new t.a.B : new Js(ni() ? new zs : new t.a.B)
						} catch (t) {
							this.g = new zs, this.h = !0
						}
						try {
							this.i = new t.a.Ra
						} catch (t) {
							this.i = new zs
						}
						this.l = new zs, this.f = I(this.Ob, this), this.b = {}
					}

					function hu() {
						return iu || (iu = new cu), iu
					}

					function lu(t, e) {
						switch (e) {
						case "session":
							return t.i;
						case "none":
							return t.l;
						default:
							return t.g
						}
					}

					function fu(t, e) {
						return "firebase:" + t.name + (e ? ":" + e : "")
					}

					function du(t, e, n) {
						return n = fu(e, n), "local" == e.B && (t.b[n] = null), lu(t, e.B).P(n)
					}

					function pu(t) {
						t.c && (clearInterval(t.c), t.c = null)
					}

					function vu(t) {
						this.a = t, this.b = hu()
					}(t = cu.prototype).get = function (t, e) {
						return lu(this, t.B).get(fu(t, e))
					}, t.set = function (e, t, n) {
						var i = fu(e, n),
							r = this,
							o = lu(this, e.B);
						return o.set(i, t).then(function () {
							return o.get(i)
						}).then(function (t) {
							"local" == e.B && (r.b[i] = t)
						})
					}, t.addListener = function (t, e, n) {
						var i;
						t = fu(t, e), this.m && (this.b[t] = l.localStorage.getItem(t)), rt(this.a) && (lu(this, "local").Y(this.f), this.h || (Gn() || !
							Ai()) && l.indexedDB || !this.m || (pu(i = this), i.c = setInterval(function () {
							for (var t in i.a) {
								var e = l.localStorage.getItem(t),
									n = i.b[t];
								e != n && (i.b[t] = e, e = new ce({
									type: "storage",
									key: t,
									target: window,
									oldValue: n,
									newValue: e,
									a: !0
								}), i.Ob(e))
							}
						}, 1e3))), this.a[t] || (this.a[t] = []), this.a[t].push(n)
					}, t.removeListener = function (t, e, n) {
						t = fu(t, e), this.a[t] && (K(this.a[t], function (t) {
							return t == n
						}), 0 == this.a[t].length && delete this.a[t]), rt(this.a) && (lu(this, "local").ca(this.f), pu(this))
					}, t.Ob = function (t) {
						if (t && t.f) {
							var e = t.a.key;
							if (null == e)
								for (var n in this.a) {
									var i = this.b[n];
									void 0 === i && (i = null);
									var r = l.localStorage.getItem(n);
									r !== i && (this.b[n] = r, this.Xa(n))
								} else if (0 == e.indexOf("firebase:") && this.a[e]) {
									if (void 0 !== t.a.a ? lu(this, "local").ca(this.f) : pu(this), this.o)
										if (n = l.localStorage.getItem(e), (i = t.a.newValue) !== n) null !== i ? l.localStorage.setItem(e, i) : l.localStorage.removeItem(
											e);
										else if (this.b[e] === i && void 0 === t.a.a) return;
									var o = this;
									n = function () {
										void 0 === t.a.a && o.b[e] === l.localStorage.getItem(e) || (o.b[e] = l.localStorage.getItem(e), o.Xa(e))
									}, Gt && te && 10 == te && l.localStorage.getItem(e) !== t.a.newValue && t.a.newValue !== t.a.oldValue ? setTimeout(n, 10) : n()
								}
						} else x(t, I(this.Xa, this))
					}, t.Xa = function (t) {
						this.a[t] && x(this.a[t], function (t) {
							t()
						})
					};
					var mu, gu = {
						name: "authEvent",
						B: "local"
					};

					function bu() {
						this.a = hu()
					}

					function yu(t, e) {
						this.b = wu, this.f = l.Uint8Array ? new Uint8Array(this.b) : Array(this.b), this.g = this.c = 0, this.a = [], this.i = t, this.h =
							e, this.m = l.Int32Array ? new Int32Array(64) : Array(64), void 0 !== mu || (mu = l.Int32Array ? new Int32Array(Nu) : Nu), this.reset()
					}
					E(yu, function () {
						this.b = -1
					});
					for (var wu = 64, Iu = wu - 1, Tu = [], ku = 0; ku < Iu; ku++) Tu[ku] = 0;
					var Eu = F(128, Tu);

					function Su(t) {
						for (var e = t.f, n = t.m, i = 0, r = 0; r < e.length;) n[i++] = e[r] << 24 | e[r + 1] << 16 | e[r + 2] << 8 | e[r + 3], r = 4 * i;
						for (e = 16; e < 64; e++) {
							r = 0 | n[e - 15], i = 0 | n[e - 2];
							var o = (0 | n[e - 16]) + ((r >>> 7 | r << 25) ^ (r >>> 18 | r << 14) ^ r >>> 3) | 0,
								a = (0 | n[e - 7]) + ((i >>> 17 | i << 15) ^ (i >>> 19 | i << 13) ^ i >>> 10) | 0;
							n[e] = o + a | 0
						}
						i = 0 | t.a[0], r = 0 | t.a[1];
						var s = 0 | t.a[2],
							u = 0 | t.a[3],
							c = 0 | t.a[4],
							h = 0 | t.a[5],
							l = 0 | t.a[6];
						for (o = 0 | t.a[7], e = 0; e < 64; e++) {
							var f = ((i >>> 2 | i << 30) ^ (i >>> 13 | i << 19) ^ (i >>> 22 | i << 10)) + (i & r ^ i & s ^ r & s) | 0;
							a = (o = o + ((c >>> 6 | c << 26) ^ (c >>> 11 | c << 21) ^ (c >>> 25 | c << 7)) | 0) + ((a = (a = c & h ^ ~c & l) + (0 | mu[e]) |
								0) + (0 | n[e]) | 0) | 0, o = l, l = h, h = c, c = u + a | 0, u = s, s = r, r = i, i = a + f | 0
						}
						t.a[0] = t.a[0] + i | 0, t.a[1] = t.a[1] + r | 0, t.a[2] = t.a[2] + s | 0, t.a[3] = t.a[3] + u | 0, t.a[4] = t.a[4] + c | 0, t.a[5] =
							t.a[5] + h | 0, t.a[6] = t.a[6] + l | 0, t.a[7] = t.a[7] + o | 0
					}

					function Au(t, e, n) {
						void 0 === n && (n = e.length);
						var i = 0,
							r = t.c;
						if (h(e))
							for (; i < n;) t.f[r++] = e.charCodeAt(i++), r == t.b && (Su(t), r = 0);
						else {
							if (!m(e)) throw Error("message must be string or array");
							for (; i < n;) {
								var o = e[i++];
								if (!("number" == typeof o && 0 <= o && o <= 255 && o == (0 | o))) throw Error("message must be a byte array");
								t.f[r++] = o, r == t.b && (Su(t), r = 0)
							}
						}
						t.c = r, t.g += n
					}
					yu.prototype.reset = function () {
						this.g = this.c = 0, this.a = l.Int32Array ? new Int32Array(this.h) : q(this.h)
					};
					var Nu = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401,
						607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983,
						1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895,
						666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800,
						3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218,
						1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298
					];

					function Ou() {
						yu.call(this, 8, _u)
					}
					E(Ou, yu);
					var _u = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225];

					function Pu(t, e, n, i, r) {
						this.l = t, this.i = e, this.m = n, this.o = i || null, this.u = r || null, this.h = e + ":" + n, this.v = new bu, this.g = new vu(
							this.h), this.f = null, this.b = [], this.a = this.c = null
					}

					function Cu(t) {
						return new Bi("invalid-cordova-configuration", t)
					}

					function Ru(t) {
						var e = new Ou;
						Au(e, t), t = [];
						var n = 8 * e.g;
						e.c < 56 ? Au(e, Eu, 56 - e.c) : Au(e, Eu, e.b - (e.c - 56));
						for (var i = 63; 56 <= i; i--) e.f[i] = 255 & n, n /= 256;
						for (Su(e), i = n = 0; i < e.i; i++)
							for (var r = 24; 0 <= r; r -= 8) t[n++] = e.a[i] >> r & 255;
						return M(t, function (t) {
							return 1 < (t = t.toString(16)).length ? t : "0" + t
						}).join("")
					}

					function Du(t, e) {
						for (var n = 0; n < t.b.length; n++) try {
							t.b[n](e)
						} catch (t) {}
					}

					function Lu(i) {
						return i.f || (i.f = i.ga().then(function () {
							return new gt(function (n) {
								i.wa(function t(e) {
										return n(e), i.La(t), !1
									}),
									function (r) {
										function e(i) {
											t = !0, n && n.cancel(), xu(r).then(function (t) {
												var e = o;
												if (t && i && i.url) {
													var n = null; - 1 != (e = Or(i.url)).indexOf("/__/auth/callback") && (n = (n = "object" == typeof (n = yi(ze(n = Ye(e),
															"firebaseError") || null)) ? Gi(n) : null) ? new ao(t.c, t.b, null, null, n) : new ao(t.c, t.b, e, t.f)), e = n ||
														o
												}
												Du(r, e)
											})
										}
										var o = new ao("unknown", null, null, null, new Bi("no-auth-event")),
											t = !1,
											n = je(500).then(function () {
												return xu(r).then(function () {
													t || Du(r, o)
												})
											}),
											i = l.handleOpenURL;
										l.handleOpenURL = function (t) {
											if (0 == t.toLowerCase().indexOf(li("BuildInfo.packageName", l).toLowerCase() + "://") && e({
													url: t
												}), "function" == typeof i) try {
												i(t)
											} catch (t) {
												console.error(t)
											}
										}, ho || (ho = new uo), ho.subscribe(e)
									}(i)
							})
						})), i.f
					}

					function xu(e) {
						var t, n = null;
						return (t = e.g, t.b.get(gu, t.a).then(function (t) {
							return so(t)
						})).then(function (t) {
							return n = t, du((t = e.g).b, gu, t.a)
						}).then(function () {
							return n
						})
					}

					function Mu(t) {
						this.a = t, this.b = hu()
					}(t = Pu.prototype).ga = function () {
						return this.za ? this.za : this.za = (ti(void 0) ? Qn().then(function () {
							return new gt(function (t, e) {
								var n = l.document,
									i = setTimeout(function () {
										e(Error("Cordova framework is not ready."))
									}, 1e3);
								n.addEventListener("deviceready", function () {
									clearTimeout(i), t()
								}, !1)
							})
						}) : St(Error("Cordova must run in an Android or iOS file scheme."))).then(function () {
							if ("function" != typeof li("universalLinks.subscribe", l)) throw Cu("cordova-universal-links-plugin-fix is not installed");
							if (void 0 === li("BuildInfo.packageName", l)) throw Cu("cordova-plugin-buildinfo is not installed");
							if ("function" != typeof li("cordova.plugins.browsertab.openUrl", l)) throw Cu("cordova-plugin-browsertab is not installed");
							if ("function" != typeof li("cordova.InAppBrowser.open", l)) throw Cu("cordova-plugin-inappbrowser is not installed")
						}, function () {
							throw new Bi("cordova-not-ready")
						})
					}, t.Ea = function (t, e) {
						return e(new Bi("operation-not-supported-in-this-environment")), Et()
					}, t.Db = function () {
						return St(new Bi("operation-not-supported-in-this-environment"))
					}, t.Pb = function () {
						return !1
					}, t.Mb = function () {
						return !0
					}, t.Hb = function () {
						return !0
					}, t.Ca = function (t, e, n) {
						if (this.c) return St(new Bi("redirect-operation-pending"));
						var i = this,
							r = l.document,
							o = null,
							a = null,
							s = null,
							u = null;
						return this.c = Et().then(function () {
							return oo(e), Lu(i)
						}).then(function () {
							return function (n, t, e, i) {
								var r = function () {
										for (var t = 20, e = []; 0 < t;) e.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(
											62 * Math.random()))), t--;
										return e.join("")
									}(),
									o = new ao(t, i, null, r, new Bi("no-auth-event")),
									a = li("BuildInfo.packageName", l);
								if ("string" != typeof a) throw new Bi("invalid-cordova-configuration");
								var s = li("BuildInfo.displayName", l),
									u = {};
								if (hi().toLowerCase().match(/iphone|ipad|ipod/)) u.ibi = a;
								else {
									if (!hi().toLowerCase().match(/android/)) return St(new Bi("operation-not-supported-in-this-environment"));
									u.apn = a
								}
								s && (u.appDisplayName = s), r = Ru(r), u.sessionId = r;
								var c = _s(n.l, n.i, n.m, t, e, null, i, n.o, u, n.u);
								return n.ga().then(function () {
									var t = n.h;
									return n.v.a.set(gu, o.w(), t)
								}).then(function () {
									var t = li("cordova.plugins.browsertab.isAvailable", l);
									if ("function" != typeof t) throw new Bi("invalid-cordova-configuration");
									var e = null;
									t(function (t) {
										if (t) {
											if ("function" != typeof (e = li("cordova.plugins.browsertab.openUrl", l))) throw new Bi(
												"invalid-cordova-configuration");
											e(c)
										} else {
											if ("function" != typeof (e = li("cordova.InAppBrowser.open", l))) throw new Bi("invalid-cordova-configuration");
											t = hi(), n.a = e(c, t.match(/(iPad|iPhone|iPod).*OS 7_\d/i) || t.match(/(iPad|iPhone|iPod).*OS 8_\d/i) ? "_blank" :
												"_system", "location=yes")
										}
									})
								})
							}(i, t, e, n)
						}).then(function () {
							return new gt(function (e, t) {
								a = function () {
									var t = li("cordova.plugins.browsertab.close", l);
									return e(), "function" == typeof t && t(), i.a && "function" == typeof i.a.close && (i.a.close(), i.a = null), !1
								}, i.wa(a), s = function () {
									o || (o = je(2e3).then(function () {
										t(new Bi("redirect-cancelled-by-user"))
									}))
								}, u = function () {
									Ei() && s()
								}, r.addEventListener("resume", s, !1), hi().toLowerCase().match(/android/) || r.addEventListener("visibilitychange", u, !1)
							}).s(function (t) {
								return xu(i).then(function () {
									throw t
								})
							})
						}).ia(function () {
							s && r.removeEventListener("resume", s, !1), u && r.removeEventListener("visibilitychange", u, !1), o && o.cancel(), a && i.La(
								a), i.c = null
						})
					}, t.wa = function (e) {
						this.b.push(e), Lu(this).s(function (t) {
							"auth/invalid-cordova-configuration" === t.code && (t = new ao("unknown", null, null, null, new Bi("no-auth-event")), e(t))
						})
					}, t.La = function (e) {
						K(this.b, function (t) {
							return t == e
						})
					};
					var ju = {
						name: "pendingRedirect",
						B: "session"
					};

					function Uu(t) {
						return du(t.b, ju, t.a)
					}

					function Vu(t, e, n) {
						this.i = {}, this.u = 0, this.A = t, this.l = e, this.o = n, this.h = [], this.f = !1, this.m = I(this.bb, this), this.b = new zu,
							this.v = new Qu, this.g = new Mu(this.l + ":" + this.o), this.c = {}, this.c.unknown = this.b, this.c.signInViaRedirect = this.b,
							this.c.linkViaRedirect = this.b, this.c.reauthViaRedirect = this.b, this.c.signInViaPopup = this.v, this.c.linkViaPopup = this.v,
							this.c.reauthViaPopup = this.v, this.a = Ku(this.A, this.l, this.o, lr)
					}

					function Ku(t, e, n, i) {
						var r = Wh.SDK_VERSION || null;
						return ti() ? new Pu(t, e, n, r, i) : new Ss(t, e, n, r, i)
					}

					function Fu(e) {
						e.f || (e.f = !0, e.a.wa(e.m));
						var n = e.a;
						return e.a.ga().s(function (t) {
							throw e.a == n && e.reset(), t
						})
					}

					function qu(n) {
						n.a.Mb() && Fu(n).s(function (t) {
							var e = new ao("unknown", null, null, null, new Bi("operation-not-supported-in-this-environment"));
							Wu(t) && n.bb(e)
						}), n.a.Hb() || Yu(n.b)
					}(t = Vu.prototype).reset = function () {
						this.f = !1, this.a.La(this.m), this.a = Ku(this.A, this.l, this.o), this.i = {}
					}, t.Ya = function () {
						this.b.Ya()
					}, t.subscribe = function (t) {
						if (U(this.h, t) || this.h.push(t), !this.f) {
							var n = this;
							(e = this.g, e.b.get(ju, e.a).then(function (t) {
								return "pending" == t
							})).then(function (t) {
								t ? Uu(n.g).then(function () {
									Fu(n).s(function (t) {
										var e = new ao("unknown", null, null, null, new Bi("operation-not-supported-in-this-environment"));
										Wu(t) && n.bb(e)
									})
								}) : qu(n)
							}).s(function () {
								qu(n)
							})
						}
						var e
					}, t.unsubscribe = function (e) {
						K(this.h, function (t) {
							return t == e
						})
					}, t.bb = function (t) {
						if (!t) throw new Bi("invalid-auth-event");
						if (6e5 <= k() - this.u && (this.i = {}, this.u = 0), t && t.getUid() && this.i.hasOwnProperty(t.getUid())) return !1;
						for (var e = !1, n = 0; n < this.h.length; n++) {
							var i = this.h[n];
							if (i.xb(t.c, t.b)) {
								(e = this.c[t.c]) && (e.h(t, i), t && (t.f || t.b) && (this.i[t.getUid()] = !0, this.u = k())), e = !0;
								break
							}
						}
						return Yu(this.b), e
					};
					var Hu = new ki(2e3, 1e4),
						Bu = new ki(3e4, 6e4);

					function Gu(t, e, n, i, r, o) {
						return t.a.Db(e, n, i, function () {
							t.f || (t.f = !0, t.a.wa(t.m))
						}, function () {
							t.reset()
						}, r, o)
					}

					function Wu(t) {
						return !(!t || "auth/cordova-not-ready" != t.code)
					}
					Vu.prototype.fa = function () {
						return this.b.fa()
					}, Vu.prototype.Ca = function (t, e, n) {
						var i, r, o = this;
						return (r = this.g, r.b.set(ju, "pending", r.a)).then(function () {
							return o.a.Ca(t, e, n).s(function (t) {
								if (Wu(t)) throw new Bi("operation-not-supported-in-this-environment");
								return i = t, Uu(o.g).then(function () {
									throw i
								})
							}).then(function () {
								return o.a.Pb() ? new gt(function () {}) : Uu(o.g).then(function () {
									return o.fa()
								}).then(function () {}).s(function () {})
							})
						})
					}, Vu.prototype.Ea = function (e, n, t, i) {
						return this.a.Ea(t, function (t) {
							e.ha(n, null, t, i)
						}, Hu.get())
					};
					var Xu = {};

					function Ju(t, e, n) {
						var i = e + ":" + n;
						return Xu[i] || (Xu[i] = new Vu(t, e, n)), Xu[i]
					}

					function zu() {
						this.b = null, this.f = [], this.c = [], this.a = null, this.i = this.g = !1
					}

					function Yu(t) {
						t.g || (t.g = !0, Zu(t, !1, null, null))
					}

					function $u(t, e) {
						if (t.b = function () {
								return Et(e)
							}, t.f.length)
							for (var n = 0; n < t.f.length; n++) t.f[n](e)
					}

					function Zu(t, e, n, i) {
						e ? i ? function (t, e) {
							if (t.b = function () {
									return St(e)
								}, t.c.length)
								for (var n = 0; n < t.c.length; n++) t.c[n](e)
						}(t, i) : $u(t, n) : $u(t, {
							user: null
						}), t.f = [], t.c = []
					}

					function Qu() {}

					function tc() {
						this.ub = !1, Object.defineProperty(this, "appVerificationDisabled", {
							get: function () {
								return this.ub
							},
							set: function (t) {
								this.ub = t
							},
							enumerable: !1
						})
					}

					function ec(t, e) {
						this.a = e, Ci(this, "verificationId", t)
					}

					function nc(t, e, n, i) {
						return new no(t).Ua(e, n).then(function (t) {
							return new ec(t, i)
						})
					}

					function ic(t) {
						var e = hr(t);
						if (!(e && e.exp && e.auth_time && e.iat)) throw new Bi("internal-error",
							"An internal error occurred. The token obtained by Firebase appears to be malformed. Please retry the operation.");
						Ri(this, {
							token: t,
							expirationTime: Si(1e3 * e.exp),
							authTime: Si(1e3 * e.auth_time),
							issuedAtTime: Si(1e3 * e.iat),
							signInProvider: e.firebase && e.firebase.sign_in_provider ? e.firebase.sign_in_provider : null,
							claims: e
						})
					}

					function rc(t, e, n) {
						if (this.h = t, this.i = e, this.g = n, this.c = 3e4, this.f = 96e4, this.b = null, this.a = this.c, this.f < this.c) throw Error(
							"Proactive refresh lower bound greater than upper bound!")
					}

					function oc(t, e) {
						return e ? (t.a = t.c, t.g()) : (e = t.a, t.a *= 2, t.a > t.f && (t.a = t.f), e)
					}

					function ac(t) {
						this.f = t, this.b = this.a = null, this.c = 0
					}

					function sc(t, e) {
						var n = e[ya],
							i = e.refreshToken;
						e = uc(e.expiresIn), t.b = n, t.c = e, t.a = i
					}

					function uc(t) {
						return k() + 1e3 * parseInt(t, 10)
					}

					function cc(e, t) {
						return (i = e.f, r = t, new gt(function (e, n) {
							"refresh_token" == r.grant_type && r.refresh_token || "authorization_code" == r.grant_type && r.code ? Aa(i, i.i + "?key=" +
								encodeURIComponent(i.b),
								function (t) {
									t ? t.error ? n(ms(t)) : t.access_token && t.refresh_token ? e(t) : n(new Bi("internal-error")) : n(new Bi(
										"network-request-failed"))
								}, "POST", cn(r).toString(), i.f, i.m.get()) : n(new Bi("internal-error"))
						})).then(function (t) {
							return e.b = t.access_token, e.c = uc(t.expires_in), e.a = t.refresh_token, {
								accessToken: e.b,
								expirationTime: e.c,
								refreshToken: e.a
							}
						}).s(function (t) {
							throw "auth/user-token-expired" == t.code && (e.a = null), t
						});
						var i, r
					}

					function hc(t, e) {
						this.a = t || null, this.b = e || null, Ri(this, {
							lastSignInTime: Si(e || null),
							creationTime: Si(t || null)
						})
					}

					function lc(t, e, n, i, r, o) {
						Ri(this, {
							uid: t,
							displayName: i || null,
							photoURL: r || null,
							email: n || null,
							phoneNumber: o || null,
							providerId: e
						})
					}

					function fc(t, e) {
						for (var n in ue.call(this, t), e) this[n] = e[n]
					}

					function dc(t, e, n) {
						var i;
						this.G = [], this.l = t.apiKey, this.o = t.appName, this.u = t.authDomain || null, t = Wh.SDK_VERSION ? ci(Wh.SDK_VERSION) : null,
							this.c = new ga(this.l, dr(lr), t), this.h = new ac(this.c), wc(this, e[ya]), sc(this.h, e), Ci(this, "refreshToken", this.h.a),
							kc(this, n || {}), Re.call(this), this.I = !1, this.u && di() && (this.a = Ju(this.u, this.l, this.o)), this.N = [], this.i = null,
							this.A = (i = this, new rc(function () {
								return i.F(!0)
							}, function (t) {
								return !(!t || "auth/network-request-failed" != t.code)
							}, function () {
								var t = i.h.c - k() - 3e5;
								return 0 < t ? t : 0
							})), this.V = I(this.Ha, this);
						var r = this;
						this.ka = null, this.ta = function (t) {
							r.pa(t.g)
						}, this.X = null, this.O = [], this.sa = function (t) {
							vc(r, t.c)
						}, this.W = null
					}

					function pc(t, e) {
						t.X && ke(t.X, "languageCodeChanged", t.ta), (t.X = e) && we(e, "languageCodeChanged", t.ta)
					}

					function vc(t, e) {
						t.O = e, Sa(t.c, Wh.SDK_VERSION ? ci(Wh.SDK_VERSION, t.O) : null)
					}

					function mc(t, e) {
						t.W && ke(t.W, "frameworkChanged", t.sa), (t.W = e) && we(e, "frameworkChanged", t.sa)
					}

					function gc(e) {
						try {
							return Wh.app(e.o).auth()
						} catch (t) {
							throw new Bi("internal-error", "No firebase.auth.Auth instance is available for the Firebase App '" + e.o + "'!")
						}
					}

					function bc(t) {
						t.D || t.A.b || (t.A.start(), ke(t, "tokenChanged", t.V), we(t, "tokenChanged", t.V))
					}

					function yc(t) {
						ke(t, "tokenChanged", t.V), t.A.stop()
					}

					function wc(t, e) {
						t.ra = e, Ci(t, "_lat", e)
					}

					function Ic(t) {
						for (var e = [], n = 0; n < t.N.length; n++) e.push(t.N[n](t));
						return Nt(e).then(function () {
							return t
						})
					}

					function Tc(t) {
						t.a && !t.I && (t.I = !0, t.a.subscribe(t))
					}

					function kc(t, e) {
						Ri(t, {
							uid: e.uid,
							displayName: e.displayName || null,
							photoURL: e.photoURL || null,
							email: e.email || null,
							emailVerified: e.emailVerified || !1,
							phoneNumber: e.phoneNumber || null,
							isAnonymous: e.isAnonymous || !1,
							metadata: new hc(e.createdAt, e.lastLoginAt),
							providerData: []
						})
					}

					function Ec() {}

					function Sc(t) {
						return Et().then(function () {
							if (t.D) throw new Bi("app-deleted")
						})
					}

					function Ac(t) {
						return M(t.providerData, function (t) {
							return t.providerId
						})
					}

					function Nc(t, e) {
						e && (Oc(t, e.providerId), t.providerData.push(e))
					}

					function Oc(t, e) {
						K(t.providerData, function (t) {
							return t.providerId == e
						})
					}

					function _c(t, e, n) {
						("uid" != e || n) && t.hasOwnProperty(e) && Ci(t, e, n)
					}

					function Pc(e, t) {
						var n, i, r;
						e != t && (Ri(e, {
							uid: t.uid,
							displayName: t.displayName,
							photoURL: t.photoURL,
							email: t.email,
							emailVerified: t.emailVerified,
							phoneNumber: t.phoneNumber,
							isAnonymous: t.isAnonymous,
							providerData: []
						}), t.metadata ? Ci(e, "metadata", new hc((r = t.metadata).a, r.b)) : Ci(e, "metadata", new hc), x(t.providerData, function (t) {
							Nc(e, t)
						}), n = e.h, i = t.h, n.b = i.b, n.a = i.a, n.c = i.c, Ci(e, "refreshToken", e.h.a))
					}

					function Cc(r) {
						return r.F().then(function (t) {
							var e, n, i = r.isAnonymous;
							return (e = r, n = t, ps(e.c, za, {
								idToken: n
							}).then(I(e.xc, e))).then(function () {
								return i || _c(r, "isAnonymous", !1), t
							})
						})
					}

					function Rc(t, e) {
						e[ya] && t.ra != e[ya] && (sc(t.h, e), t.dispatchEvent(new fc("tokenChanged")), wc(t, e[ya]), _c(t, "refreshToken", t.h.a))
					}

					function Dc(t, e) {
						return Cc(t).then(function () {
							if (U(Ac(t), e)) return Ic(t).then(function () {
								throw new Bi("provider-already-linked")
							})
						})
					}

					function Lc(t, e, n) {
						return Di({
							user: t,
							credential: ro(e),
							additionalUserInfo: e = br(e),
							operationType: n
						})
					}

					function xc(t, e) {
						return Rc(t, e), t.reload().then(function () {
							return t
						})
					}

					function Mc(n, i, t, e, r) {
						if (!di()) return St(new Bi("operation-not-supported-in-this-environment"));
						if (n.i && !r) return St(n.i);
						var o = gr(t.providerId),
							a = wi(n.uid + ":::"),
							s = null;
						(!mi() || ei()) && n.u && t.isOAuthProvider && (s = _s(n.u, n.l, n.o, i, t, null, a, Wh.SDK_VERSION || null));
						var u = Yn(s, o && o.Ba, o && o.Aa);
						return e = e().then(function () {
							if (Uc(n), !r) return n.F().then(function () {})
						}).then(function () {
							return Gu(n.a, u, i, t, a, !!s)
						}).then(function () {
							return new gt(function (t, e) {
								n.ha(i, null, new Bi("cancelled-popup-request"), n.g || null), n.f = t, n.v = e, n.g = a, n.b = n.a.Ea(n, i, u, a)
							})
						}).then(function (t) {
							return u && zn(u), t ? Di(t) : null
						}).s(function (t) {
							throw u && zn(u), t
						}), Vc(n, e, r)
					}

					function jc(e, t, n, i, r) {
						if (!di()) return St(new Bi("operation-not-supported-in-this-environment"));
						if (e.i && !r) return St(e.i);
						var o = null,
							a = wi(e.uid + ":::");
						return i = i().then(function () {
							if (Uc(e), !r) return e.F().then(function () {})
						}).then(function () {
							return e.aa = a, Ic(e)
						}).then(function (t) {
							return e.ba && (t = (t = e.ba).b.set(qc, e.w(), t.a)), t
						}).then(function () {
							return e.a.Ca(t, n, a)
						}).s(function (t) {
							if (o = t, e.ba) return Hc(e.ba);
							throw o
						}).then(function () {
							if (o) throw o
						}), Vc(e, i, r)
					}

					function Uc(t) {
						if (!t.a || !t.I) {
							if (t.a && !t.I) throw new Bi("internal-error");
							throw new Bi("auth-domain-config-required")
						}
					}

					function Vc(t, e, n) {
						var i, r, o, a = (r = e, o = n, (i = t).i && !o ? (r.cancel(), St(i.i)) : r.s(function (t) {
							throw !t || "auth/user-disabled" != t.code && "auth/user-token-expired" != t.code || (i.i || i.dispatchEvent(new fc(
								"userInvalidated")), i.i = t), t
						}));
						return t.G.push(a), a.ia(function () {
							V(t.G, a)
						}), a
					}

					function Kc(t) {
						if (!t.apiKey) return null;
						var e = {
								apiKey: t.apiKey,
								authDomain: t.authDomain,
								appName: t.appName
							},
							n = {};
						if (!(t.stsTokenManager && t.stsTokenManager.accessToken && t.stsTokenManager.expirationTime)) return null;
						n[ya] = t.stsTokenManager.accessToken, n.refreshToken = t.stsTokenManager.refreshToken || null, n.expiresIn = (t.stsTokenManager.expirationTime -
							k()) / 1e3;
						var i = new dc(e, n, t);
						return t.providerData && x(t.providerData, function (t) {
							t && Nc(i, Di(t))
						}), t.redirectEventId && (i.aa = t.redirectEventId), i
					}

					function Fc(t) {
						this.a = t, this.b = hu()
					}
					zu.prototype.reset = function () {
						this.b = null, this.a && (this.a.cancel(), this.a = null)
					}, zu.prototype.h = function (t, e) {
						if (t) {
							this.reset(), this.g = !0;
							var n = t.c,
								i = t.b,
								r = t.a && "auth/web-storage-unsupported" == t.a.code,
								o = t.a && "auth/operation-not-supported-in-this-environment" == t.a.code;
							this.i = !(!r && !o), "unknown" != n || r || o ? t.a ? (Zu(this, !0, null, t.a), Et()) : e.xa(n, i) ? function (e, t, n) {
								n = n.xa(t.c, t.b);
								var i = t.g,
									r = t.f,
									o = t.h,
									a = !!t.c.match(/Redirect$/);
								n(i, r, o).then(function (t) {
									Zu(e, a, t, null)
								}).s(function (t) {
									Zu(e, a, null, t)
								})
							}(this, t, e) : St(new Bi("invalid-auth-event")) : (Zu(this, !1, null, null), Et())
						} else St(new Bi("invalid-auth-event"))
					}, zu.prototype.Ya = function () {
						this.g && !this.i && Zu(this, !1, null, null)
					}, zu.prototype.fa = function () {
						var r = this;
						return new gt(function (t, e) {
							var n, i;
							r.b ? r.b().then(t, e) : (r.f.push(t), r.c.push(e), n = r, i = new Bi("timeout"), n.a && n.a.cancel(), n.a = je(Bu.get()).then(
								function () {
									n.b || (n.g = !0, Zu(n, !0, null, i))
								}))
						})
					}, Qu.prototype.h = function (t, e) {
						if (t) {
							var n = t.c,
								i = t.b;
							t.a ? (e.ha(t.c, null, t.a, t.b), Et()) : e.xa(n, i) ? (o = e, a = (r = t).b, s = r.c, o.xa(s, a)(r.g, r.f, r.h).then(function (t) {
								o.ha(s, t, null, a)
							}).s(function (t) {
								o.ha(s, null, t, a)
							})) : St(new Bi("invalid-auth-event"))
						} else St(new Bi("invalid-auth-event"));
						var r, o, a, s
					}, ec.prototype.confirm = function (t) {
						return t = io(this.verificationId, t), this.a(t)
					}, rc.prototype.start = function () {
						this.a = this.c,
							function e(n, t) {
								n.stop();
								n.b = je(oc(n, t)).then(function () {
									return e = l.document, n = null, Ei() || !e ? Et() : new gt(function (t) {
										n = function () {
											Ei() && (e.removeEventListener("visibilitychange", n, !1), t())
										}, e.addEventListener("visibilitychange", n, !1)
									}).s(function (t) {
										throw e.removeEventListener("visibilitychange", n, !1), t
									});
									var e, n
								}).then(function () {
									return n.h()
								}).then(function () {
									e(n, !0)
								}).s(function (t) {
									n.i(t) && e(n, !1)
								})
							}(this, !0)
					}, rc.prototype.stop = function () {
						this.b && (this.b.cancel(), this.b = null)
					}, ac.prototype.w = function () {
						return {
							apiKey: this.f.b,
							refreshToken: this.a,
							accessToken: this.b,
							expirationTime: this.c
						}
					}, ac.prototype.getToken = function (t) {
						return t = !!t, this.b && !this.a ? St(new Bi("user-token-expired")) : t || !this.b || k() > this.c - 3e4 ? this.a ? cc(this, {
							grant_type: "refresh_token",
							refresh_token: this.a
						}) : Et(null) : Et({
							accessToken: this.b,
							expirationTime: this.c,
							refreshToken: this.a
						})
					}, hc.prototype.w = function () {
						return {
							lastLoginAt: this.b,
							createdAt: this.a
						}
					}, E(fc, ue), E(dc, Re), dc.prototype.pa = function (t) {
						this.ka = t, Ea(this.c, t)
					}, dc.prototype.ea = function () {
						return this.ka
					}, dc.prototype.ya = function () {
						return q(this.O)
					}, dc.prototype.Ha = function () {
						this.A.b && (this.A.stop(), this.A.start())
					}, Ci(dc.prototype, "providerId", "firebase"), (t = dc.prototype).reload = function () {
						var t = this;
						return Vc(this, Sc(this).then(function () {
							return Cc(t).then(function () {
								return Ic(t)
							}).then(Ec)
						}))
					}, t.bc = function (t) {
						return this.F(t).then(function (t) {
							return new ic(t)
						})
					}, t.F = function (t) {
						var e = this;
						return Vc(this, Sc(this).then(function () {
							return e.h.getToken(t)
						}).then(function (t) {
							if (!t) throw new Bi("internal-error");
							return t.accessToken != e.ra && (wc(e, t.accessToken), e.dispatchEvent(new fc("tokenChanged"))), _c(e, "refreshToken", t.refreshToken),
								t.accessToken
						}))
					}, t.xc = function (t) {
						if (!(t = t.users) || !t.length) throw new Bi("internal-error");
						kc(this, {
							uid: (t = t[0]).localId,
							displayName: t.displayName,
							photoURL: t.photoUrl,
							email: t.email,
							emailVerified: !!t.emailVerified,
							phoneNumber: t.phoneNumber,
							lastLoginAt: t.lastLoginAt,
							createdAt: t.createdAt
						});
						for (var e = (i = (i = t).providerUserInfo) && i.length ? M(i, function (t) {
								return new lc(t.rawId, t.providerId, t.email, t.displayName, t.photoUrl, t.phoneNumber)
							}) : [], n = 0; n < e.length; n++) Nc(this, e[n]);
						var i;
						_c(this, "isAnonymous", !(this.email && t.passwordHash || this.providerData && this.providerData.length))
					}, t.yc = function (t) {
						return _i(
							"firebase.User.prototype.reauthenticateAndRetrieveDataWithCredential is deprecated. Please use firebase.User.prototype.reauthenticateWithCredential instead."
						), this.gb(t)
					}, t.gb = function (t) {
						var e = this,
							n = null;
						return Vc(this, t.f(this.c, this.uid).then(function (t) {
							return Rc(e, t), n = Lc(e, t, "reauthenticate"), e.i = null, e.reload()
						}).then(function () {
							return n
						}), !0)
					}, t.pc = function (t) {
						return _i(
							"firebase.User.prototype.linkAndRetrieveDataWithCredential is deprecated. Please use firebase.User.prototype.linkWithCredential instead."
						), this.eb(t)
					}, t.eb = function (e) {
						var n = this,
							i = null;
						return Vc(this, Dc(this, e.providerId).then(function () {
							return n.F()
						}).then(function (t) {
							return e.b(n.c, t)
						}).then(function (t) {
							return i = Lc(n, t, "link"), xc(n, t)
						}).then(function () {
							return i
						}))
					}, t.qc = function (t, e) {
						var n = this;
						return Vc(this, Dc(this, "phone").then(function () {
							return nc(gc(n), t, e, I(n.eb, n))
						}))
					}, t.zc = function (t, e) {
						var n = this;
						return Vc(this, Et().then(function () {
							return nc(gc(n), t, e, I(n.gb, n))
						}), !0)
					}, t.rb = function (e) {
						var n = this;
						return Vc(this, this.F().then(function (t) {
							return n.c.rb(t, e)
						}).then(function (t) {
							return Rc(n, t), n.reload()
						}))
					}, t.Pc = function (e) {
						var n = this;
						return Vc(this, this.F().then(function (t) {
							return e.b(n.c, t)
						}).then(function (t) {
							return Rc(n, t), n.reload()
						}))
					}, t.sb = function (e) {
						var n = this;
						return Vc(this, this.F().then(function (t) {
							return n.c.sb(t, e)
						}).then(function (t) {
							return Rc(n, t), n.reload()
						}))
					}, t.tb = function (e) {
						if (void 0 === e.displayName && void 0 === e.photoURL) return Sc(this);
						var n = this;
						return Vc(this, this.F().then(function (t) {
							return n.c.tb(t, {
								displayName: e.displayName,
								photoUrl: e.photoURL
							})
						}).then(function (t) {
							return Rc(n, t), _c(n, "displayName", t.displayName || null), _c(n, "photoURL", t.photoUrl || null), x(n.providerData,
								function (t) {
									"password" === t.providerId && (Ci(t, "displayName", n.displayName), Ci(t, "photoURL", n.photoURL))
								}), Ic(n)
						}).then(Ec))
					}, t.Nc = function (r) {
						var o = this;
						return Vc(this, Cc(this).then(function (t) {
							return U(Ac(o), r) ? (e = o.c, n = t, i = [r], ps(e, Wa, {
								idToken: n,
								deleteProvider: i
							})).then(function (t) {
								var e = {};
								return x(t.providerUserInfo || [], function (t) {
									e[t.providerId] = !0
								}), x(Ac(o), function (t) {
									e[t] || Oc(o, t)
								}), e[no.PROVIDER_ID] || Ci(o, "phoneNumber", null), Ic(o)
							}) : Ic(o).then(function () {
								throw new Bi("no-such-provider")
							});
							var e, n, i
						}))
					}, t.delete = function () {
						var e = this;
						return Vc(this, this.F().then(function (t) {
							return ps(e.c, Ga, {
								idToken: t
							})
						}).then(function () {
							e.dispatchEvent(new fc("userDeleted"))
						})).then(function () {
							for (var t = 0; t < e.G.length; t++) e.G[t].cancel("app-deleted");
							pc(e, null), mc(e, null), e.G = [], e.D = !0, yc(e), Ci(e, "refreshToken", null), e.a && e.a.unsubscribe(e)
						})
					}, t.xb = function (t, e) {
						return !!("linkViaPopup" == t && (this.g || null) == e && this.f || "reauthViaPopup" == t && (this.g || null) == e && this.f ||
							"linkViaRedirect" == t && (this.aa || null) == e || "reauthViaRedirect" == t && (this.aa || null) == e)
					}, t.ha = function (t, e, n, i) {
						"linkViaPopup" != t && "reauthViaPopup" != t || i != (this.g || null) || (n && this.v ? this.v(n) : e && !n && this.f && this.f(e),
							this.b && (this.b.cancel(), this.b = null), delete this.f, delete this.v)
					}, t.xa = function (t, e) {
						return "linkViaPopup" == t && e == (this.g || null) ? I(this.Bb, this) : "reauthViaPopup" == t && e == (this.g || null) ? I(this.Cb,
								this) : "linkViaRedirect" == t && (this.aa || null) == e ? I(this.Bb, this) : "reauthViaRedirect" == t && (this.aa || null) == e ?
							I(this.Cb, this) : null
					}, t.rc = function (t) {
						var e = this;
						return Mc(this, "linkViaPopup", t, function () {
							return Dc(e, t.providerId).then(function () {
								return Ic(e)
							})
						}, !1)
					}, t.Ac = function (t) {
						return Mc(this, "reauthViaPopup", t, function () {
							return Et()
						}, !0)
					}, t.sc = function (t) {
						var e = this;
						return jc(this, "linkViaRedirect", t, function () {
							return Dc(e, t.providerId)
						}, !1)
					}, t.Bc = function (t) {
						return jc(this, "reauthViaRedirect", t, function () {
							return Et()
						}, !0)
					}, t.Bb = function (e, n, i) {
						var r = this;
						this.b && (this.b.cancel(), this.b = null);
						var o = null;
						return Vc(this, this.F().then(function (t) {
							return Ua(r.c, {
								requestUri: e,
								postBody: i,
								sessionId: n,
								idToken: t
							})
						}).then(function (t) {
							return o = Lc(r, t, "link"), xc(r, t)
						}).then(function () {
							return o
						}))
					}, t.Cb = function (t, e, n) {
						var i = this;
						this.b && (this.b.cancel(), this.b = null);
						var r = null;
						return Vc(this, Et().then(function () {
							return Pr(Va(i.c, {
								requestUri: t,
								sessionId: e,
								postBody: n
							}), i.uid)
						}).then(function (t) {
							return r = Lc(i, t, "reauthenticate"), Rc(i, t), i.i = null, i.reload()
						}).then(function () {
							return r
						}), !0)
					}, t.jb = function (e) {
						var n = this,
							i = null;
						return Vc(this, this.F().then(function (t) {
							return i = t, void 0 === e || rt(e) ? {} : rr(new Ji(e))
						}).then(function (t) {
							return n.c.jb(i, t)
						}).then(function (t) {
							if (n.email != t) return n.reload()
						}).then(function () {}))
					}, t.toJSON = function () {
						return this.w()
					}, t.w = function () {
						var e = {
							uid: this.uid,
							displayName: this.displayName,
							photoURL: this.photoURL,
							email: this.email,
							emailVerified: this.emailVerified,
							phoneNumber: this.phoneNumber,
							isAnonymous: this.isAnonymous,
							providerData: [],
							apiKey: this.l,
							appName: this.o,
							authDomain: this.u,
							stsTokenManager: this.h.w(),
							redirectEventId: this.aa || null
						};
						return this.metadata && ct(e, this.metadata.w()), x(this.providerData, function (t) {
							e.providerData.push(function (t) {
								var e, n = {};
								for (e in t) t.hasOwnProperty(e) && (n[e] = t[e]);
								return n
							}(t))
						}), e
					};
					var qc = {
						name: "redirectUser",
						B: "session"
					};

					function Hc(t) {
						return du(t.b, qc, t.a)
					}

					function Bc(t) {
						var e, n, i, r, o, a, s, u, c;
						this.a = t, this.b = hu(), this.c = null, this.f = (e = this, n = Xc("local"), i = Xc("session"), r = Xc("none"), (o = e.b, a = n,
							s = e.a, u = fu(a, s), c = lu(o, a.B), o.get(a, s).then(function (t) {
								var e = null;
								try {
									e = yi(l.localStorage.getItem(u))
								} catch (t) {}
								if (e && !t) return l.localStorage.removeItem(u), o.set(a, e, s);
								e && t && "localStorage" != c.type && l.localStorage.removeItem(u)
							})).then(function () {
							return e.b.get(i, e.a)
						}).then(function (t) {
							return t ? i : e.b.get(r, e.a).then(function (t) {
								return t ? r : e.b.get(n, e.a).then(function (t) {
									return t ? n : e.b.get(Wc, e.a).then(function (t) {
										return t ? Xc(t) : n
									})
								})
							})
						}).then(function (t) {
							return e.c = t, Gc(e, t.B)
						}).s(function () {
							e.c || (e.c = n)
						})), this.b.addListener(Xc("local"), this.a, I(this.g, this))
					}

					function Gc(t, e) {
						var n, s, i = [];
						for (n in uu) uu[n] !== e && i.push(du(t.b, Xc(uu[n]), t.a));
						return i.push(du(t.b, Wc, t.a)), s = i, new gt(function (n, e) {
							var i = s.length,
								r = [];
							if (i)
								for (var t = function (t, e) {
										i--, r[t] = e, 0 == i && n(r)
									}, o = function (t) {
										e(t)
									}, a = 0; a < s.length; a++) At(s[a], T(t, a), o);
							else n(r)
						})
					}
					Bc.prototype.g = function () {
						var e = this,
							n = Xc("local");
						$c(this, function () {
							return Et().then(function () {
								return e.c && "local" != e.c.B ? e.b.get(n, e.a) : null
							}).then(function (t) {
								if (t) return Gc(e, "local").then(function () {
									e.c = n
								})
							})
						})
					};
					var Wc = {
						name: "persistence",
						B: "session"
					};

					function Xc(t) {
						return {
							name: "authUser",
							B: t
						}
					}

					function Jc(t, e) {
						return $c(t, function () {
							return t.b.set(t.c, e.w(), t.a)
						})
					}

					function zc(t) {
						return $c(t, function () {
							return du(t.b, t.c, t.a)
						})
					}

					function Yc(t, e) {
						return $c(t, function () {
							return t.b.get(t.c, t.a).then(function (t) {
								return t && e && (t.authDomain = e), Kc(t || {})
							})
						})
					}

					function $c(t, e) {
						return t.f = t.f.then(e, e), t.f
					}

					function Zc(t) {
						if (this.l = !1, Ci(this, "settings", new tc), Ci(this, "app", t), !oh(this).options || !oh(this).options.apiKey) throw new Bi(
							"invalid-api-key");
						var n, e, i, r, o, a, s, u, c, h, l, f;
						t = Wh.SDK_VERSION ? ci(Wh.SDK_VERSION) : null, this.c = new ga(oh(this).options && oh(this).options.apiKey, dr(lr), t), this.N = [],
							this.o = [], this.I = [], this.Sb = Wh.INTERNAL.createSubscribe(I(this.mc, this)), this.O = void 0, this.Tb = Wh.INTERNAL.createSubscribe(
								I(this.nc, this)), ih(this, null), this.h = new Bc(oh(this).options.apiKey + ":" + oh(this).name), this.A = new Fc(oh(this).options
								.apiKey + ":" + oh(this).name), this.V = ch(this, (e = oh(n = this).options.authDomain, i = (r = n, o = (a = r.A, s = oh(r).options
								.authDomain, a.b.get(qc, a.a).then(function (t) {
									return t && s && (t.authDomain = s), Kc(t || {})
								})).then(function (t) {
								return (r.D = t) && (t.ba = r.A), Hc(r.A)
							}), ch(r, o)).then(function () {
								return Yc(n.h, e)
							}).then(function (e) {
								return e ? (e.ba = n.A, n.D && (n.D.aa || null) == (e.aa || null) ? e : e.reload().then(function () {
									return Jc(n.h, e).then(function () {
										return e
									})
								}).s(function (t) {
									return "auth/network-request-failed" == t.code ? e : zc(n.h)
								})) : null
							}).then(function (t) {
								ih(n, t || null)
							}), ch(n, i))), this.i = ch(this, (u = this).V.then(function () {
								return u.fa()
							}).s(function () {}).then(function () {
								if (!u.l) return u.ka()
							}).s(function () {}).then(function () {
								if (!u.l) {
									u.X = !0;
									var t = u.h;
									t.b.addListener(Xc("local"), t.a, u.ka)
								}
							})), this.X = !1, this.ka = I(this.Kc, this), this.Ha = I(this.Z, this), this.ra = I(this.$b, this), this.sa = I(this.jc, this),
							this.ta = I(this.kc, this), h = oh(c = this).options.authDomain, l = oh(c).options.apiKey, h && di() && (c.Rb = c.V.then(function () {
								if (!c.l) {
									if (c.a = Ju(h, l, oh(c).name), c.a.subscribe(c), ah(c) && Tc(ah(c)), c.D) {
										Tc(c.D);
										var t = c.D;
										t.pa(c.ea()), pc(t, c), vc(t = c.D, c.G), mc(t, c), c.D = null
									}
									return c.a
								}
							})), this.INTERNAL = {}, this.INTERNAL.delete = I(this.delete, this), this.INTERNAL.logFramework = I(this.tc, this), this.u = 0,
							Re.call(this), f = this, Object.defineProperty(f, "lc", {
								get: function () {
									return this.ea()
								},
								set: function (t) {
									this.pa(t)
								},
								enumerable: !1
							}), f.W = null, this.G = []
					}

					function Qc(t) {
						ue.call(this, "languageCodeChanged"), this.g = t
					}

					function th(t) {
						ue.call(this, "frameworkChanged"), this.c = t
					}

					function eh(t) {
						return t.Rb || St(new Bi("auth-domain-config-required"))
					}

					function nh(o, a) {
						var s = {};
						return s.apiKey = oh(o).options.apiKey, s.authDomain = oh(o).options.authDomain, s.appName = oh(o).name, o.V.then(function () {
							return t = s, e = a, n = o.A, i = o.ya(), r = new dc(t, e), n && (r.ba = n), i && vc(r, i), r.reload().then(function () {
								return r
							});
							var t, e, n, i, r
						}).then(function (t) {
							return ah(o) && t.uid == ah(o).uid ? Pc(ah(o), t) : (ih(o, t), Tc(t)), o.Z(t)
						}).then(function () {
							uh(o)
						})
					}

					function ih(t, e) {
						var n, i;
						ah(t) && (n = ah(t), i = t.Ha, K(n.N, function (t) {
							return t == i
						}), ke(ah(t), "tokenChanged", t.ra), ke(ah(t), "userDeleted", t.sa), ke(ah(t), "userInvalidated", t.ta), yc(ah(t))), e && (e.N.push(
							t.Ha), we(e, "tokenChanged", t.ra), we(e, "userDeleted", t.sa), we(e, "userInvalidated", t.ta), 0 < t.u && bc(e)), Ci(t,
							"currentUser", e), e && (e.pa(t.ea()), pc(e, t), vc(e, t.G), mc(e, t))
					}

					function rh(e, t) {
						var n = null,
							i = null;
						return ch(e, t.then(function (t) {
							return n = ro(t), i = br(t), nh(e, t)
						}).then(function () {
							return Di({
								user: ah(e),
								credential: n,
								additionalUserInfo: i,
								operationType: "signIn"
							})
						}))
					}

					function oh(t) {
						return t.app
					}

					function ah(t) {
						return t.currentUser
					}

					function sh(t) {
						return ah(t) && ah(t)._lat || null
					}

					function uh(t) {
						if (t.X) {
							for (var e = 0; e < t.o.length; e++) t.o[e] && t.o[e](sh(t));
							if (t.O !== t.getUid() && t.I.length)
								for (t.O = t.getUid(), e = 0; e < t.I.length; e++) t.I[e] && t.I[e](sh(t))
						}
					}

					function ch(t, e) {
						return t.N.push(e), e.ia(function () {
							V(t.N, e)
						}), e
					}

					function hh() {}

					function lh() {
						this.a = {}, this.b = 1e12
					}
					Bc.prototype.mb = function (e) {
							var n = null,
								i = this;
							return function (t) {
								var e = new Bi("invalid-persistence-type"),
									n = new Bi("unsupported-persistence-type");
								t: {
									for (i in uu)
										if (uu[i] == t) {
											var i = !0;
											break t
										}
									i = !1
								}
								if (!i || "string" != typeof t) throw e;
								switch (ii()) {
								case "ReactNative":
									if ("session" === t) throw n;
									break;
								case "Node":
									if ("none" !== t) throw n;
									break;
								default:
									if (!fi() && "none" !== t) throw n
								}
							}(e), $c(this, function () {
								return e != i.c.B ? i.b.get(i.c, i.a).then(function (t) {
									return n = t, Gc(i, e)
								}).then(function () {
									if (i.c = Xc(e), n) return i.b.set(i.c, n, i.a)
								}) : Et()
							})
						}, E(Zc, Re), E(Qc, ue), E(th, ue), (t = Zc.prototype).mb = function (t) {
							return ch(this, t = this.h.mb(t))
						}, t.pa = function (t) {
							this.W === t || this.l || (this.W = t, Ea(this.c, this.W), this.dispatchEvent(new Qc(this.ea())))
						}, t.ea = function () {
							return this.W
						}, t.Qc = function () {
							var t = l.navigator;
							this.pa(t && (t.languages && t.languages[0] || t.language || t.userLanguage) || null)
						}, t.tc = function (t) {
							this.G.push(t), Sa(this.c, Wh.SDK_VERSION ? ci(Wh.SDK_VERSION, this.G) : null), this.dispatchEvent(new th(this.G))
						}, t.ya = function () {
							return q(this.G)
						}, t.toJSON = function () {
							return {
								apiKey: oh(this).options.apiKey,
								authDomain: oh(this).options.authDomain,
								appName: oh(this).name,
								currentUser: ah(this) && ah(this).w()
							}
						}, t.xb = function (t, e) {
							switch (t) {
							case "unknown":
							case "signInViaRedirect":
								return !0;
							case "signInViaPopup":
								return this.g == e && !!this.f;
							default:
								return !1
							}
						}, t.ha = function (t, e, n, i) {
							"signInViaPopup" == t && this.g == i && (n && this.v ? this.v(n) : e && !n && this.f && this.f(e), this.b && (this.b.cancel(),
								this.b = null), delete this.f, delete this.v)
						}, t.xa = function (t, e) {
							return "signInViaRedirect" == t || "signInViaPopup" == t && this.g == e && this.f ? I(this.Zb, this) : null
						}, t.Zb = function (t, e, n) {
							var i = this;
							t = {
								requestUri: t,
								postBody: n,
								sessionId: e
							}, this.b && (this.b.cancel(), this.b = null);
							var r = null,
								o = null,
								a = ja(i.c, t).then(function (t) {
									return r = ro(t), o = br(t), t
								});
							return ch(this, t = i.V.then(function () {
								return a
							}).then(function (t) {
								return nh(i, t)
							}).then(function () {
								return Di({
									user: ah(i),
									credential: r,
									additionalUserInfo: o,
									operationType: "signIn"
								})
							}))
						}, t.Ic = function (e) {
							if (!di()) return St(new Bi("operation-not-supported-in-this-environment"));
							var n = this,
								t = gr(e.providerId),
								i = wi(),
								r = null;
							(!mi() || ei()) && oh(this).options.authDomain && e.isOAuthProvider && (r = _s(oh(this).options.authDomain, oh(this).options.apiKey,
								oh(this).name, "signInViaPopup", e, null, i, Wh.SDK_VERSION || null));
							var o = Yn(r, t && t.Ba, t && t.Aa);
							return ch(this, t = eh(this).then(function (t) {
								return Gu(t, o, "signInViaPopup", e, i, !!r)
							}).then(function () {
								return new gt(function (t, e) {
									n.ha("signInViaPopup", null, new Bi("cancelled-popup-request"), n.g), n.f = t, n.v = e, n.g = i, n.b = n.a.Ea(n,
										"signInViaPopup", o, i)
								})
							}).then(function (t) {
								return o && zn(o), t ? Di(t) : null
							}).s(function (t) {
								throw o && zn(o), t
							}))
						}, t.Jc = function (t) {
							if (!di()) return St(new Bi("operation-not-supported-in-this-environment"));
							var e = this;
							return ch(this, eh(this).then(function () {
								return $c(t = e.h, function () {
									return t.b.set(Wc, t.c.B, t.a)
								});
								var t
							}).then(function () {
								return e.a.Ca("signInViaRedirect", t)
							}))
						}, t.fa = function () {
							if (!di()) return St(new Bi("operation-not-supported-in-this-environment"));
							var t = this;
							return ch(this, eh(this).then(function () {
								return t.a.fa()
							}).then(function (t) {
								return t ? Di(t) : null
							}))
						}, t.Oc = function (t) {
							if (!t) return St(new Bi("null-user"));
							var e = this,
								n = {};
							n.apiKey = oh(this).options.apiKey, n.authDomain = oh(this).options.authDomain, n.appName = oh(this).name;
							var i = function (t, e, n, i) {
								e = e || {
									apiKey: t.l,
									authDomain: t.u,
									appName: t.o
								};
								var r = t.h,
									o = {};
								return o[ya] = r.b, o.refreshToken = r.a, o.expiresIn = (r.c - k()) / 1e3, e = new dc(e, o), n && (e.ba = n), i && vc(e, i), Pc(
									e, t), e
							}(t, n, e.A, e.ya());
							return ch(this, this.i.then(function () {
								if (oh(e).options.apiKey != t.l) return i.reload()
							}).then(function () {
								return ah(e) && t.uid == ah(e).uid ? (Pc(ah(e), t), e.Z(t)) : (ih(e, i), Tc(i), e.Z(i))
							}).then(function () {
								uh(e)
							}))
						}, t.pb = function () {
							var t = this;
							return ch(this, this.i.then(function () {
								return ah(t) ? (ih(t, null), zc(t.h).then(function () {
									uh(t)
								})) : Et()
							}))
						}, t.Kc = function () {
							var i = this;
							return Yc(this.h, oh(this).options.authDomain).then(function (t) {
								if (!i.l) {
									var e;
									if (e = ah(i) && t) {
										e = ah(i).uid;
										var n = t.uid;
										e = null != e && "" !== e && null != n && "" !== n && e == n
									}
									if (e) return Pc(ah(i), t), ah(i).F();
									(ah(i) || t) && (ih(i, t), t && (Tc(t), t.ba = i.A), i.a && i.a.subscribe(i), uh(i))
								}
							})
						}, t.Z = function (t) {
							return Jc(this.h, t)
						}, t.$b = function () {
							uh(this), this.Z(ah(this))
						}, t.jc = function () {
							this.pb()
						}, t.kc = function () {
							this.pb()
						}, t.mc = function (t) {
							var e = this;
							this.addAuthTokenListener(function () {
								t.next(ah(e))
							})
						}, t.nc = function (t) {
							var e, n, i = this;
							n = function () {
								t.next(ah(i))
							}, (e = this).I.push(n), ch(e, e.i.then(function () {
								!e.l && U(e.I, n) && e.O !== e.getUid() && (e.O = e.getUid(), n(sh(e)))
							}))
						}, t.vc = function (t, e, n) {
							var i = this;
							return this.X && Promise.resolve().then(function () {
								g(t) ? t(ah(i)) : g(t.next) && t.next(ah(i))
							}), this.Sb(t, e, n)
						}, t.uc = function (t, e, n) {
							var i = this;
							return this.X && Promise.resolve().then(function () {
								i.O = i.getUid(), g(t) ? t(ah(i)) : g(t.next) && t.next(ah(i))
							}), this.Tb(t, e, n)
						}, t.ac = function (t) {
							var e = this;
							return ch(this, this.i.then(function () {
								return ah(e) ? ah(e).F(t).then(function (t) {
									return {
										accessToken: t
									}
								}) : null
							}))
						}, t.Ec = function (t) {
							var n = this;
							return this.i.then(function () {
								return rh(n, ps(n.c, cs, {
									token: t
								}))
							}).then(function (t) {
								var e = t.user;
								return _c(e, "isAnonymous", !1), n.Z(e), t
							})
						}, t.Fc = function (t, e) {
							var n = this;
							return this.i.then(function () {
								return rh(n, ps(n.c, hs, {
									email: t,
									password: e
								}))
							})
						}, t.Vb = function (t, e) {
							var n = this;
							return this.i.then(function () {
								return rh(n, ps(n.c, Ha, {
									email: t,
									password: e
								}))
							})
						}, t.Nb = function (t) {
							var e = this;
							return this.i.then(function () {
								return rh(e, t.la(e.c))
							})
						}, t.nb = function (t) {
							return _i(
								"firebase.auth.Auth.prototype.signInAndRetrieveDataWithCredential is deprecated. Please use firebase.auth.Auth.prototype.signInWithCredential instead."
							), this.Nb(t)
						}, t.ob = function () {
							var n = this;
							return this.i.then(function () {
								var t = ah(n);
								return t && t.isAnonymous ? Di({
									user: t,
									credential: null,
									additionalUserInfo: Di({
										providerId: null,
										isNewUser: !1
									}),
									operationType: "signIn"
								}) : rh(n, n.c.ob()).then(function (t) {
									var e = t.user;
									return _c(e, "isAnonymous", !0), n.Z(e), t
								})
							})
						}, t.getUid = function () {
							return ah(this) && ah(this).uid || null
						}, t.Ub = function (t) {
							this.addAuthTokenListener(t), this.u++, 0 < this.u && ah(this) && bc(ah(this))
						}, t.Cc = function (e) {
							var n = this;
							x(this.o, function (t) {
								t == e && n.u--
							}), this.u < 0 && (this.u = 0), 0 == this.u && ah(this) && yc(ah(this)), this.removeAuthTokenListener(e)
						}, t.addAuthTokenListener = function (t) {
							var e = this;
							this.o.push(t), ch(this, this.i.then(function () {
								e.l || U(e.o, t) && t(sh(e))
							}))
						}, t.removeAuthTokenListener = function (e) {
							K(this.o, function (t) {
								return t == e
							})
						}, t.delete = function () {
							this.l = !0;
							for (var t = 0; t < this.N.length; t++) this.N[t].cancel("app-deleted");
							return this.N = [], this.h && (t = this.h).b.removeListener(Xc("local"), t.a, this.ka), this.a && (this.a.unsubscribe(this), this.a
								.Ya()), Promise.resolve()
						}, t.Yb = function (t) {
							return ch(this, ps(this.c, Ba, {
								identifier: t,
								continueUri: pi() ? Wn() : "http://localhost"
							}).then(function (t) {
								return t.signinMethods || []
							}))
						}, t.oc = function (t) {
							return !!Zr(t)
						}, t.lb = function (e, n) {
							var i = this;
							return ch(this, Et().then(function () {
								var t = new Ji(n);
								if (!t.c) throw new Bi("argument-error", $i + " must be true when sending sign in link to email");
								return rr(t)
							}).then(function (t) {
								return i.c.lb(e, t)
							}).then(function () {}))
						}, t.Rc = function (t) {
							return this.Ka(t).then(function (t) {
								return t.data.email
							})
						}, t.Za = function (t, e) {
							return ch(this, this.c.Za(t, e).then(function () {}))
						}, t.Ka = function (t) {
							return ch(this, this.c.Ka(t).then(function (t) {
								return new xi(t)
							}))
						}, t.Wa = function (t) {
							return ch(this, this.c.Wa(t).then(function () {}))
						}, t.kb = function (e, t) {
							var n = this;
							return ch(this, Et().then(function () {
								return void 0 === t || rt(t) ? {} : rr(new Ji(t))
							}).then(function (t) {
								return n.c.kb(e, t)
							}).then(function () {}))
						}, t.Hc = function (t, e) {
							return ch(this, nc(this, t, e, I(this.nb, this)))
						}, t.Gc = function (e, n) {
							var i = this;
							return ch(this, Et().then(function () {
								var t = $r(e, n || Wn());
								return i.nb(t)
							}))
						}, hh.prototype.render = function () {}, hh.prototype.reset = function () {}, hh.prototype.getResponse = function () {}, hh.prototype
						.execute = function () {};
					var fh = null;

					function dh(t, e) {
						return (e = ph(e)) && t.a[e] || null
					}

					function ph(t) {
						return (t = void 0 === t ? 1e12 : t) ? t.toString() : null
					}

					function vh(t, e) {
						this.g = !1, this.c = e, this.a = this.b = null, this.h = "invisible" !== this.c.size, this.f = xn(t);
						var n = this;
						this.i = function () {
							n.execute()
						}, this.h ? this.execute() : we(this.f, "click", this.i)
					}

					function mh(t) {
						if (t.g) throw Error("reCAPTCHA mock was already deleted!")
					}

					function gh() {}
					lh.prototype.render = function (t, e) {
						return this.a[this.b.toString()] = new vh(t, e), this.b++
					}, lh.prototype.reset = function (t) {
						var e = dh(this, t);
						t = ph(t), e && t && (e.delete(), delete this.a[t])
					}, lh.prototype.getResponse = function (t) {
						return (t = dh(this, t)) ? t.getResponse() : null
					}, lh.prototype.execute = function (t) {
						(t = dh(this, t)) && t.execute()
					}, vh.prototype.getResponse = function () {
						return mh(this), this.b
					}, vh.prototype.execute = function () {
						mh(this);
						var n = this;
						this.a || (this.a = setTimeout(function () {
							n.b = function () {
								for (var t = 50, e = []; 0 < t;) e.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(
									62 * Math.random()))), t--;
								return e.join("")
							}();
							var t = n.c.callback,
								e = n.c["expired-callback"];
							if (t) try {
								t(n.b)
							} catch (t) {}
							n.a = setTimeout(function () {
								if (n.a = null, n.b = null, e) try {
									e()
								} catch (t) {}
								n.h && n.execute()
							}, 6e4)
						}, 500))
					}, vh.prototype.delete = function () {
						mh(this), this.g = !0, clearTimeout(this.a), this.a = null, ke(this.f, "click", this.i)
					}, gh.prototype.g = function () {
						return fh || (fh = new lh), Et(fh)
					}, gh.prototype.c = function () {};
					var bh = null;

					function yh() {
						this.b = l.grecaptcha ? 1 / 0 : 0, this.f = null, this.a = "__rcb" + Math.floor(1e6 * Math.random()).toString()
					}
					var wh = new mn(yn, "https://www.google.com/recaptcha/api.js?onload=%{onload}&render=explicit&hl=%{hl}"),
						Ih = new ki(3e4, 6e4);
					yh.prototype.g = function (r) {
						var o = this;
						return new gt(function (t, e) {
							var i = setTimeout(function () {
								e(new Bi("network-request-failed"))
							}, Ih.get());
							!l.grecaptcha || r !== o.f && !o.b ? (l[o.a] = function () {
								if (l.grecaptcha) {
									o.f = r;
									var n = l.grecaptcha.render;
									l.grecaptcha.render = function (t, e) {
										return t = n(t, e), o.b++, t
									}, clearTimeout(i), t(l.grecaptcha)
								} else clearTimeout(i), e(new Bi("internal-error"));
								delete l[o.a]
							}, Et(ha(Tn(wh, {
								onload: o.a,
								hl: r || ""
							}))).s(function () {
								clearTimeout(i), e(new Bi("internal-error", "Unable to load external reCAPTCHA dependencies!"))
							})) : (clearTimeout(i), t(l.grecaptcha))
						})
					}, yh.prototype.c = function () {
						this.b--
					};
					var Th = null;

					function kh(t, e, n, i, r, o, a) {
						if (Ci(this, "type", "recaptcha"), this.c = this.f = null, this.D = !1, this.l = e, this.g = null, a = a ? (bh || (bh = new gh), bh) :
							(Th || (Th = new yh), Th), this.o = a, this.a = n || {
								theme: "light",
								type: "image"
							}, this.h = [], this.a[Ah]) throw new Bi("argument-error",
							"sitekey should not be provided for reCAPTCHA as one is automatically provisioned for the current project.");
						if (this.i = "invisible" === this.a[Nh], !l.document) throw new Bi("operation-not-supported-in-this-environment",
							"RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment with DOM support.");
						if (!xn(e) || !this.i && xn(e).hasChildNodes()) throw new Bi("argument-error",
							"reCAPTCHA container is either not found or already contains inner elements!");
						this.u = new ga(t, o || null, r || null), this.v = i || function () {
							return null
						};
						var s = this;
						this.m = [];
						var u = this.a[Eh];
						this.a[Eh] = function (t) {
							if (Oh(s, t), "function" == typeof u) u(t);
							else if ("string" == typeof u) {
								var e = li(u, l);
								"function" == typeof e && e(t)
							}
						};
						var c = this.a[Sh];
						this.a[Sh] = function () {
							if (Oh(s, null), "function" == typeof c) c();
							else if ("string" == typeof c) {
								var t = li(c, l);
								"function" == typeof t && t()
							}
						}
					}
					var Eh = "callback",
						Sh = "expired-callback",
						Ah = "sitekey",
						Nh = "size";

					function Oh(t, e) {
						for (var n = 0; n < t.m.length; n++) try {
							t.m[n](e)
						} catch (t) {}
					}

					function _h(t, e) {
						return t.h.push(e), e.ia(function () {
							V(t.h, e)
						}), e
					}

					function Ph(t) {
						if (t.D) throw new Bi("internal-error", "RecaptchaVerifier instance has been destroyed.")
					}

					function Ch(t, e, n) {
						var i = !1;
						try {
							this.b = n || Wh.app()
						} catch (t) {
							throw new Bi("argument-error", "No firebase.app.App instance is currently initialized.")
						}
						if (!this.b.options || !this.b.options.apiKey) throw new Bi("invalid-api-key");
						n = this.b.options.apiKey;
						var r = this,
							o = null;
						try {
							o = this.b.auth().ya()
						} catch (t) {}
						try {
							i = this.b.auth().settings.appVerificationDisabledForTesting
						} catch (t) {}
						o = Wh.SDK_VERSION ? ci(Wh.SDK_VERSION, o) : null, kh.call(this, n, t, e, function () {
							try {
								var e = r.b.auth().ea()
							} catch (t) {
								e = null
							}
							return e
						}, o, dr(lr), i)
					}

					function Rh(t, e, n, i) {
						t: {
							n = Array.prototype.slice.call(n);
							for (var r = 0, o = !1, a = 0; a < e.length; a++)
								if (e[a].optional) o = !0;
								else {
									if (o) throw new Bi("internal-error", "Argument validator encountered a required argument after an optional argument.");
									r++
								}
							if (o = e.length, n.length < r || o < n.length) i = "Expected " + (r == o ? 1 == r ? "1 argument" : r + " arguments" : r + "-" + o +
								" arguments") + " but got " + n.length + ".";
							else {
								for (r = 0; r < n.length; r++)
									if (o = e[r].optional && void 0 === n[r], !e[r].M(n[r]) && !o) {
										if (e = e[r], r < 0 || r >= Dh.length) throw new Bi("internal-error",
											"Argument validator received an unsupported number of arguments.");
										n = Dh[r], i = (i ? "" : n + " argument ") + (e.name ? '"' + e.name + '" ' : "") + "must be " + e.K + ".";
										break t
									}
								i = null
							}
						}
						if (i) throw new Bi("argument-error", t + " failed: " + i)
					}(t = kh.prototype).za = function () {
						var e = this;
						return this.f ? this.f : this.f = _h(this, Et().then(function () {
							if (pi() && !ni()) return Qn();
							throw new Bi("operation-not-supported-in-this-environment",
								"RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment.")
						}).then(function () {
							return e.o.g(e.v())
						}).then(function (t) {
							return e.g = t, ps(e.u, ts, {})
						}).then(function (t) {
							e.a[Ah] = t.recaptchaSiteKey
						}).s(function (t) {
							throw e.f = null, t
						}))
					}, t.render = function () {
						Ph(this);
						var n = this;
						return _h(this, this.za().then(function () {
							if (null === n.c) {
								var t = n.l;
								if (!n.i) {
									var e = xn(t);
									t = Un("DIV"), e.appendChild(t)
								}
								n.c = n.g.render(t, n.a)
							}
							return n.c
						}))
					}, t.verify = function () {
						Ph(this);
						var r = this;
						return _h(this, this.render().then(function (e) {
							return new gt(function (n) {
								var t = r.g.getResponse(e);
								if (t) n(t);
								else {
									var i = function (t) {
										var e;
										t && (e = i, K(r.m, function (t) {
											return t == e
										}), n(t))
									};
									r.m.push(i), r.i && r.g.execute(r.c)
								}
							})
						}))
					}, t.reset = function () {
						Ph(this), null !== this.c && this.g.reset(this.c)
					}, t.clear = function () {
						Ph(this), this.D = !0, this.o.c();
						for (var t = 0; t < this.h.length; t++) this.h[t].cancel("RecaptchaVerifier instance has been destroyed.");
						if (!this.i) {
							t = xn(this.l);
							for (var e; e = t.firstChild;) t.removeChild(e)
						}
					}, E(Ch, kh);
					var Dh = "First Second Third Fourth Fifth Sixth Seventh Eighth Ninth".split(" ");

					function Lh(t, e) {
						return {
							name: t || "",
							K: "a valid string",
							optional: !!e,
							M: h
						}
					}

					function xh(t, e) {
						return {
							name: t || "",
							K: "a boolean",
							optional: !!e,
							M: n
						}
					}

					function Mh(t, e) {
						return {
							name: t || "",
							K: "a valid object",
							optional: !!e,
							M: b
						}
					}

					function jh(t, e) {
						return {
							name: t || "",
							K: "a function",
							optional: !!e,
							M: g
						}
					}

					function Uh(t, e) {
						return {
							name: t || "",
							K: "null",
							optional: !!e,
							M: i
						}
					}

					function Vh(n) {
						return {
							name: n ? n + "Credential" : "credential",
							K: n ? "a valid " + n + " credential" : "a valid credential",
							optional: !1,
							M: function (t) {
								if (!t) return !1;
								var e = !n || t.providerId === n;
								return !(!t.la || !e)
							}
						}
					}

					function Kh() {
						return {
							name: "applicationVerifier",
							K: "an implementation of firebase.auth.ApplicationVerifier",
							optional: !1,
							M: function (t) {
								return !!(t && h(t.type) && g(t.verify))
							}
						}
					}

					function Fh(e, n, t, i) {
						return {
							name: t || "",
							K: e.K + " or " + n.K,
							optional: !!i,
							M: function (t) {
								return e.M(t) || n.M(t)
							}
						}
					}

					function qh(t, e) {
						for (var n in e) {
							var i = e[n].name;
							t[i] = Gh(i, t[n], e[n].j)
						}
					}

					function Hh(t, e) {
						for (var n in e) {
							var i = e[n].name;
							i !== n && Object.defineProperty(t, i, {
								get: T(function (t) {
									return this[t]
								}, n),
								set: T(function (t, e, n, i) {
									Rh(t, [n], [i], !0), this[e] = i
								}, i, n, e[n].vb),
								enumerable: !0
							})
						}
					}

					function Bh(t, e, n, i) {
						t[e] = Gh(e, n, i)
					}

					function Gh(t, e, n) {
						function i() {
							var t = Array.prototype.slice.call(arguments);
							return Rh(a, n, t), e.apply(this, t)
						}
						if (!n) return e;
						var r, o, a = (o = (o = t).split("."))[o.length - 1];
						for (r in e) i[r] = e[r];
						for (r in e.prototype) i.prototype[r] = e.prototype[r];
						return i
					}
					qh(Zc.prototype, {
							Wa: {
								name: "applyActionCode",
								j: [Lh("code")]
							},
							Ka: {
								name: "checkActionCode",
								j: [Lh("code")]
							},
							Za: {
								name: "confirmPasswordReset",
								j: [Lh("code"), Lh("newPassword")]
							},
							Vb: {
								name: "createUserWithEmailAndPassword",
								j: [Lh("email"), Lh("password")]
							},
							Yb: {
								name: "fetchSignInMethodsForEmail",
								j: [Lh("email")]
							},
							fa: {
								name: "getRedirectResult",
								j: []
							},
							oc: {
								name: "isSignInWithEmailLink",
								j: [Lh("emailLink")]
							},
							uc: {
								name: "onAuthStateChanged",
								j: [Fh(Mh(), jh(), "nextOrObserver"), jh("opt_error", !0), jh("opt_completed", !0)]
							},
							vc: {
								name: "onIdTokenChanged",
								j: [Fh(Mh(), jh(), "nextOrObserver"), jh("opt_error", !0), jh("opt_completed", !0)]
							},
							kb: {
								name: "sendPasswordResetEmail",
								j: [Lh("email"), Fh(Mh("opt_actionCodeSettings", !0), Uh(null, !0), "opt_actionCodeSettings", !0)]
							},
							lb: {
								name: "sendSignInLinkToEmail",
								j: [Lh("email"), Mh("actionCodeSettings")]
							},
							mb: {
								name: "setPersistence",
								j: [Lh("persistence")]
							},
							nb: {
								name: "signInAndRetrieveDataWithCredential",
								j: [Vh()]
							},
							ob: {
								name: "signInAnonymously",
								j: []
							},
							Nb: {
								name: "signInWithCredential",
								j: [Vh()]
							},
							Ec: {
								name: "signInWithCustomToken",
								j: [Lh("token")]
							},
							Fc: {
								name: "signInWithEmailAndPassword",
								j: [Lh("email"), Lh("password")]
							},
							Gc: {
								name: "signInWithEmailLink",
								j: [Lh("email"), Lh("emailLink", !0)]
							},
							Hc: {
								name: "signInWithPhoneNumber",
								j: [Lh("phoneNumber"), Kh()]
							},
							Ic: {
								name: "signInWithPopup",
								j: [{
									name: "authProvider",
									K: "a valid Auth provider",
									optional: !1,
									M: function (t) {
										return !!(t && t.providerId && t.hasOwnProperty && t.hasOwnProperty("isOAuthProvider"))
									}
								}]
							},
							Jc: {
								name: "signInWithRedirect",
								j: [{
									name: "authProvider",
									K: "a valid Auth provider",
									optional: !1,
									M: function (t) {
										return !!(t && t.providerId && t.hasOwnProperty && t.hasOwnProperty("isOAuthProvider"))
									}
								}]
							},
							Oc: {
								name: "updateCurrentUser",
								j: [Fh({
									name: "user",
									K: "an instance of Firebase User",
									optional: !1,
									M: function (t) {
										return !!(t && t instanceof dc)
									}
								}, Uh(), "user")]
							},
							pb: {
								name: "signOut",
								j: []
							},
							toJSON: {
								name: "toJSON",
								j: [Lh(null, !0)]
							},
							Qc: {
								name: "useDeviceLanguage",
								j: []
							},
							Rc: {
								name: "verifyPasswordResetCode",
								j: [Lh("code")]
							}
						}), Hh(Zc.prototype, {
							lc: {
								name: "languageCode",
								vb: Fh(Lh(), Uh(), "languageCode")
							}
						}), (Zc.Persistence = uu).LOCAL = "local", Zc.Persistence.SESSION = "session", Zc.Persistence.NONE = "none", qh(dc.prototype, {
							delete: {
								name: "delete",
								j: []
							},
							bc: {
								name: "getIdTokenResult",
								j: [xh("opt_forceRefresh", !0)]
							},
							F: {
								name: "getIdToken",
								j: [xh("opt_forceRefresh", !0)]
							},
							pc: {
								name: "linkAndRetrieveDataWithCredential",
								j: [Vh()]
							},
							eb: {
								name: "linkWithCredential",
								j: [Vh()]
							},
							qc: {
								name: "linkWithPhoneNumber",
								j: [Lh("phoneNumber"), Kh()]
							},
							rc: {
								name: "linkWithPopup",
								j: [{
									name: "authProvider",
									K: "a valid Auth provider",
									optional: !1,
									M: function (t) {
										return !!(t && t.providerId && t.hasOwnProperty && t.hasOwnProperty("isOAuthProvider"))
									}
								}]
							},
							sc: {
								name: "linkWithRedirect",
								j: [{
									name: "authProvider",
									K: "a valid Auth provider",
									optional: !1,
									M: function (t) {
										return !!(t && t.providerId && t.hasOwnProperty && t.hasOwnProperty("isOAuthProvider"))
									}
								}]
							},
							yc: {
								name: "reauthenticateAndRetrieveDataWithCredential",
								j: [Vh()]
							},
							gb: {
								name: "reauthenticateWithCredential",
								j: [Vh()]
							},
							zc: {
								name: "reauthenticateWithPhoneNumber",
								j: [Lh("phoneNumber"), Kh()]
							},
							Ac: {
								name: "reauthenticateWithPopup",
								j: [{
									name: "authProvider",
									K: "a valid Auth provider",
									optional: !1,
									M: function (t) {
										return !!(t && t.providerId && t.hasOwnProperty && t.hasOwnProperty("isOAuthProvider"))
									}
								}]
							},
							Bc: {
								name: "reauthenticateWithRedirect",
								j: [{
									name: "authProvider",
									K: "a valid Auth provider",
									optional: !1,
									M: function (t) {
										return !!(t && t.providerId && t.hasOwnProperty && t.hasOwnProperty("isOAuthProvider"))
									}
								}]
							},
							reload: {
								name: "reload",
								j: []
							},
							jb: {
								name: "sendEmailVerification",
								j: [Fh(Mh("opt_actionCodeSettings", !0), Uh(null, !0), "opt_actionCodeSettings", !0)]
							},
							toJSON: {
								name: "toJSON",
								j: [Lh(null, !0)]
							},
							Nc: {
								name: "unlink",
								j: [Lh("provider")]
							},
							rb: {
								name: "updateEmail",
								j: [Lh("email")]
							},
							sb: {
								name: "updatePassword",
								j: [Lh("password")]
							},
							Pc: {
								name: "updatePhoneNumber",
								j: [Vh("phone")]
							},
							tb: {
								name: "updateProfile",
								j: [Mh("profile")]
							}
						}), qh(lh.prototype, {
							execute: {
								name: "execute"
							},
							render: {
								name: "render"
							},
							reset: {
								name: "reset"
							},
							getResponse: {
								name: "getResponse"
							}
						}), qh(hh.prototype, {
							execute: {
								name: "execute"
							},
							render: {
								name: "render"
							},
							reset: {
								name: "reset"
							},
							getResponse: {
								name: "getResponse"
							}
						}), qh(gt.prototype, {
							ia: {
								name: "finally"
							},
							s: {
								name: "catch"
							},
							then: {
								name: "then"
							}
						}), Hh(tc.prototype, {
							appVerificationDisabled: {
								name: "appVerificationDisabledForTesting",
								vb: xh("appVerificationDisabledForTesting")
							}
						}), qh(ec.prototype, {
							confirm: {
								name: "confirm",
								j: [Lh("verificationCode")]
							}
						}), Bh(_r, "fromJSON", function (t) {
							t = h(t) ? JSON.parse(t) : t;
							for (var e, n = [Mr, zr, to, Dr], i = 0; i < n.length; i++)
								if (e = n[i](t)) return e;
							return null
						}, [Fh(Lh(), Mh(), "json")]), Bh(Yr, "credential", function (t, e) {
							return new Jr(t, e)
						}, [Lh("email"), Lh("password")]), qh(Jr.prototype, {
							w: {
								name: "toJSON",
								j: [Lh(null, !0)]
							}
						}), qh(Kr.prototype, {
							ua: {
								name: "addScope",
								j: [Lh("scope")]
							},
							Da: {
								name: "setCustomParameters",
								j: [Mh("customOAuthParameters")]
							}
						}), Bh(Kr, "credential", Fr, [Fh(Lh(), Mh(), "token")]), Bh(Yr, "credentialWithLink", $r, [Lh("email"), Lh("emailLink")]), qh(qr.prototype, {
							ua: {
								name: "addScope",
								j: [Lh("scope")]
							},
							Da: {
								name: "setCustomParameters",
								j: [Mh("customOAuthParameters")]
							}
						}), Bh(qr, "credential", Hr, [Fh(Lh(), Mh(), "token")]), qh(Br.prototype, {
							ua: {
								name: "addScope",
								j: [Lh("scope")]
							},
							Da: {
								name: "setCustomParameters",
								j: [Mh("customOAuthParameters")]
							}
						}), Bh(Br, "credential", Gr, [Fh(Lh(), Fh(Mh(), Uh()), "idToken"), Fh(Lh(), Uh(), "accessToken", !0)]), qh(Wr.prototype, {
							Da: {
								name: "setCustomParameters",
								j: [Mh("customOAuthParameters")]
							}
						}), Bh(Wr, "credential", Xr, [Fh(Lh(), Mh(), "token"), Lh("secret", !0)]), qh(Vr.prototype, {
							ua: {
								name: "addScope",
								j: [Lh("scope")]
							},
							credential: {
								name: "credential",
								j: [Fh(Lh(), Fh(Mh(), Uh()), "optionsOrIdToken"), Fh(Lh(), Uh(), "accessToken", !0)]
							},
							Da: {
								name: "setCustomParameters",
								j: [Mh("customOAuthParameters")]
							}
						}), qh(Lr.prototype, {
							w: {
								name: "toJSON",
								j: [Lh(null, !0)]
							}
						}), qh(Cr.prototype, {
							w: {
								name: "toJSON",
								j: [Lh(null, !0)]
							}
						}), Bh(no, "credential", io, [Lh("verificationId"), Lh("verificationCode")]), qh(no.prototype, {
							Ua: {
								name: "verifyPhoneNumber",
								j: [Lh("phoneNumber"), Kh()]
							}
						}), qh(Qr.prototype, {
							w: {
								name: "toJSON",
								j: [Lh(null, !0)]
							}
						}), qh(Bi.prototype, {
							toJSON: {
								name: "toJSON",
								j: [Lh(null, !0)]
							}
						}), qh(fo.prototype, {
							toJSON: {
								name: "toJSON",
								j: [Lh(null, !0)]
							}
						}), qh(lo.prototype, {
							toJSON: {
								name: "toJSON",
								j: [Lh(null, !0)]
							}
						}), qh(Ch.prototype, {
							clear: {
								name: "clear",
								j: []
							},
							render: {
								name: "render",
								j: []
							},
							verify: {
								name: "verify",
								j: []
							}
						}),
						function () {
							if (void 0 === Wh || !Wh.INTERNAL || !Wh.INTERNAL.registerService) throw Error(
								"Cannot find the firebase namespace; be sure to include firebase-app.js before this library.");
							var t = {
								Auth: Zc,
								AuthCredential: _r,
								Error: Bi
							};
							Bh(t, "EmailAuthProvider", Yr, []), Bh(t, "FacebookAuthProvider", Kr, []), Bh(t, "GithubAuthProvider", qr, []), Bh(t,
								"GoogleAuthProvider", Br, []), Bh(t, "TwitterAuthProvider", Wr, []), Bh(t, "OAuthProvider", Vr, [Lh("providerId")]), Bh(t,
								"SAMLAuthProvider", Ur, [Lh("providerId")]), Bh(t, "PhoneAuthProvider", no, [{
								name: "auth",
								K: "an instance of Firebase Auth",
								optional: !0,
								M: function (t) {
									return !!(t && t instanceof Zc)
								}
							}]), Bh(t, "RecaptchaVerifier", Ch, [Fh(Lh(), {
								name: "",
								K: "an HTML element",
								optional: !1,
								M: function (t) {
									return !!(t && t instanceof Element)
								}
							}, "recaptchaContainer"), Mh("recaptchaParameters", !0), {
								name: "app",
								K: "an instance of Firebase App",
								optional: !0,
								M: function (t) {
									return !!(t && t instanceof Wh.app.App)
								}
							}]), Wh.INTERNAL.registerService("auth", function (t, e) {
								return e({
									INTERNAL: {
										getUid: I((t = new Zc(t)).getUid, t),
										getToken: I(t.ac, t),
										addAuthTokenListener: I(t.Ub, t),
										removeAuthTokenListener: I(t.Cc, t)
									}
								}), t
							}, t, function (t, e) {
								if ("create" === t) try {
									e.auth()
								} catch (t) {}
							}), Wh.INTERNAL.extendNamespace({
								User: dc
							})
						}()
				}.apply("undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
		}).apply(this, arguments)
	} catch (t) {
		throw console.error(t), new Error("Cannot instantiate firebase-auth - be sure to load firebase-app.js first.")
	}
});