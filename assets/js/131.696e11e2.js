(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{418:function(a,t,e){"use strict";e.r(t);var r=e(10),s=Object(r.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("p",[a._v("前端资源也需要配置缓存策略，以提高网站的访问速度。由于网站的流量增大，我们需要合适的缓存策略才能让 CDN 发挥最大效果保证网站的访问速度。")]),a._v(" "),e("h2",{attrs:{id:"cache-control"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cache-control"}},[a._v("#")]),a._v(" Cache-Control")]),a._v(" "),e("p",[a._v("Cache-Control 用来设置资源的缓存策略，常见的的值有：no-store 、no-cache、public、private、max-age、immutable。")]),a._v(" "),e("h3",{attrs:{id:"no-store"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#no-store"}},[a._v("#")]),a._v(" no-store")]),a._v(" "),e("p",[a._v("不缓存资源，每次都需要重新请求。")]),a._v(" "),e("h3",{attrs:{id:"no-cache"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#no-cache"}},[a._v("#")]),a._v(" no-cache")]),a._v(" "),e("p",[a._v("需要先验证资源是否过期，如果没有过期，可以使用缓存。")]),a._v(" "),e("h3",{attrs:{id:"public"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#public"}},[a._v("#")]),a._v(" public")]),a._v(" "),e("p",[a._v("资源可以被所有的用户缓存，包括 CDN。")]),a._v(" "),e("h3",{attrs:{id:"private"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#private"}},[a._v("#")]),a._v(" private")]),a._v(" "),e("p",[a._v("资源只能被用户缓存，不能被 CDN 缓存。")]),a._v(" "),e("h3",{attrs:{id:"max-age"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#max-age"}},[a._v("#")]),a._v(" max-age")]),a._v(" "),e("p",[a._v("设置资源的最大缓存时间，单位是秒。")]),a._v(" "),e("h3",{attrs:{id:"immutable"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#immutable"}},[a._v("#")]),a._v(" immutable")]),a._v(" "),e("p",[a._v("资源不会改变，可以永久缓存。")]),a._v(" "),e("h2",{attrs:{id:"前端网站的缓存策略"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前端网站的缓存策略"}},[a._v("#")]),a._v(" 前端网站的缓存策略")]),a._v(" "),e("p",[a._v("现在的前端网站一般都是 SPA 或者 PWA，index.html 是一个入口文件，其他的资源都是通过 index.html 加载的。所以我们可以设置 index.html 的缓存策略为 no-store，保证每次都是最新的资源。")]),a._v(" "),e("p",[a._v("其他的都是静态资源，并且文件名包含 hash，所以我们可以设置这些资源的缓存策略为 immutable，保证这些资源不会改变，可以永久缓存。")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("\nCache-Control: no-store\n\nCache-Control: public, max-age"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("604800")]),a._v(", immutable\n\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br")])]),e("h2",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[a._v("#")]),a._v(" 总结")]),a._v(" "),e("p",[a._v("index.html 文件是网站入口，这个文件不能缓存，每次都需要重新请求，否则不能及时更新网站。不过这个文件一般也不大，所以不会影响网站的访问速度。其他的静态资源文件名包含 hash，所以这些资源不会改变，可以永久缓存，这样可以提高网站的访问速度。")]),a._v(" "),e("h2",{attrs:{id:"参考"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[a._v("#")]),a._v(" 参考")]),a._v(" "),e("p",[e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control",target:"_blank",rel:"noopener noreferrer"}},[a._v("MDN Cache-Control"),e("OutboundLink")],1)]),a._v(" "),e("p",[e("a",{attrs:{href:"https://web.dev/articles/http-cache",target:"_blank",rel:"noopener noreferrer"}},[a._v("Prevent unnecessary network requests with the HTTP Cache"),e("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=s.exports}}]);