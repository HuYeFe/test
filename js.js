function to() {
    //最上面TopNav
    document.getElementsByClassName("ShelfTopNav-root-eb3BX")[0].innerHTML = "";
    document.getElementsByClassName("ShelfTopNav-root-eb3BX")[0].style.boxShadow="none";
    document.getElementsByClassName("ShelfTopNav-root-eb3BX")[0].style.border="none";
    document.getElementsByClassName("ShelfTopNav-root-eb3BX")[0].style.backgroundColor="transparent";
   
    //app内打开
    document.getElementsByClassName("OpenInApp-root-jUnyS")[0].innerHTML = "";
    document.getElementsByClassName("OpenInApp-root-jUnyS")[0].style.backgroundColor="transparent";

    //最下面ToolBar
    document.getElementById("bottomToolBar").innerHTML="";

    //文本修改
    document.getElementsByClassName("WebPage-root-g7WXc")[0].style.width="80%";
    document.getElementsByClassName("WebPage-root-g7WXc")[0].style.backgroundColor="transparent";
    
   var parent= document.getElementById("manuscript");
   //parent.getElementsByTagName("P")[0].style.color='#ff0000';
   var xx= parent.getElementsByTagName("P");
   for (var i=0;i<xx.length;i++)
    { 
    //console.log(i);
    parent.getElementsByTagName("P")[i].style.color='#000000';
    }
}

to();


/*! For license information please see asyncSource.6840943701064385fe82.js.LICENSE.txt */ ! function() {
	var t = {
			51355: function() {
				function t(e) {
					return (t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
						return typeof t
					} : function(t) {
						return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol
							.prototype ? "symbol" : typeof t
					})(e)
				}! function(e) {
					"use strict";

					function n(t) {
						this.config = t = t || {}, this.util = Object.create(n.util), this._middlewares = [];
						var e = this;
						t.middlewares && t.middlewares.forEach((function(t) {
							e.use(t)
						}))
					}
					n.prototype = {
						constructor: n,
						use: function(t) {
							var e = n.plugins;
							return "function" == typeof t ? this._middlewares.push(t) : "string" ==
								typeof t && e[t] && this._middlewares.push(e[t]), this
						},
						load: function() {
							var t, e, n, r, o, i = this,
								s = Promise.resolve();
							for (e = 0, n = arguments.length; e < n; e++) r = new Promise((function(t) {
									o = t
								})), t = i._preprocess(arguments[e], r), s = function(t) {
									return s.then((function() {
										return i._load(t)
									}))
								}(t),
								function(t) {
									s.then(t)
								}(o);
							return s
						},
						_preprocess: function(t, e) {
							var n, r, o, i = this._middlewares,
								s = t;
							for (n = 0, r = i.length; n < r; n++) o = i[n], s = /Group$/.test(o.name) ? this
								._processGroup(o, s, e) : this._processSingle(o, s, e);
							return s
						},
						_processSingle: function(t, e, n) {
							var r = this;
							return Array.isArray(e) ? e.map((function(e) {
								return r._processSingle(t, e, n)
							})) : t.call(this, e, n)
						},
						_processGroup: function(t, e, n) {
							return Array.isArray(e) || (e = [e]), t.call(this, e, n)
						},
						_load: function(t) {
							var e = this;
							return new Promise((function(n) {
								var r = e.util;
								return Array.isArray(t) ? n(Promise.all(t.map((function(t) {
										return e._load(t)
									})))) : "function" == typeof t ? n(t()) : r.isThenable(t) ?
									n(t) : (t += "") ? void n(r.load(t)) : n()
							}))
						}
					}, n.plugins = {}, n.util = {
						load: function(t) {
							return new Promise((function(e, n) {
								var r = document.getElementsByTagName("script")[0],
									o = window.document.createElement("script");
								o.src = t, o.async = !0, o.onload = e, o.onerror = n, r
									.parentNode.insertBefore(o, r)
							}))
						},
						isThenable: function(e) {
							return !!e && "object" === t(e) && "function" == typeof e.then
						}
					}, e.URW = n
				}(this)
			}
		},
		e = {};

	function n(r) {
		var o = e[r];
		if (void 0 !== o) return o.exports;
		var i = e[r] = {
			exports: {}
		};
		return t[r].call(i.exports, i, i.exports, n), i.exports
	}
	n.n = function(t) {
			var e = t && t.__esModule ? function() {
				return t.default
			} : function() {
				return t
			};
			return n.d(e, {
				a: e
			}), e
		}, n.d = function(t, e) {
			for (var r in e) n.o(e, r) && !n.o(t, r) && Object.defineProperty(t, r, {
				enumerable: !0,
				get: e[r]
			})
		}, n.o = function(t, e) {
			return Object.prototype.hasOwnProperty.call(t, e)
		},
		function() {
			"use strict";
			var t, e, r, o, i, s = n(51355);
			"undefined" != typeof window && (t = document.getElementById("async-boot-config"), e = JSON.parse(t.dataset
					.stylesheets), r = JSON.parse(t.dataset.scripts), o = new s.URW, (i = new s.URW).util.load =
				function(t) {
					return new Promise((function(e, n) {
						var r = document.createElement("link");
						r.rel = "stylesheet", r.href = t, r.onload = e, r.onerror = n, document.head
							.appendChild(r)
					}))
				}, o.load.apply(o, r), i.load.apply(i, e))
		}()
}();
//# sourceMappingURL=asyncSource.6840943701064385fe82.js.map
