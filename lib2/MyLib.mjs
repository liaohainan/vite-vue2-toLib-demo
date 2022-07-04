import "vue";
var h = function() {
  var e = this, r = e.$createElement, i = e._self._c || r;
  return i("div", [i("h2", [e._v("Template Static Asset Reference")]), i("p", [e._v(e._s(e.msg))])]);
}, m = [];
function g(e, r, i, f, s, a, _, u) {
  var n = typeof e == "function" ? e.options : e;
  r && (n.render = r, n.staticRenderFns = i, n._compiled = !0), f && (n.functional = !0), a && (n._scopeId = "data-v-" + a);
  var o;
  if (_ ? (o = function(t) {
    t = t || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !t && typeof __VUE_SSR_CONTEXT__ < "u" && (t = __VUE_SSR_CONTEXT__), s && s.call(this, t), t && t._registeredComponents && t._registeredComponents.add(_);
  }, n._ssrRegister = o) : s && (o = u ? function() {
    s.call(this, (n.functional ? this.parent : this).$root.$options.shadowRoot);
  } : s), o)
    if (n.functional) {
      n._injectStyles = o;
      var p = n.render;
      n.render = function(v, c) {
        return o.call(c), p(v, c);
      };
    } else {
      var d = n.beforeCreate;
      n.beforeCreate = d ? [].concat(d, o) : [o];
    }
  return {
    exports: e,
    options: n
  };
}
module.exports = {
  name: "Index",
  data() {
    return {
      msg: "msg"
    };
  }
};
const C = {}, l = {};
var R = /* @__PURE__ */ g(C, h, m, !1, $, "64c29c72", null, null);
function $(e) {
  for (let r in l)
    this[r] = l[r];
}
const y = /* @__PURE__ */ function() {
  return R.exports;
}(), b = {
  install: function(e) {
    e.component("Index", y);
  }
};
export {
  b as default
};
