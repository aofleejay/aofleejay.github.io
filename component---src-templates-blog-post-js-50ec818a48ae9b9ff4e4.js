(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{180:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return s});n(19);var r=n(7),o=(n(0),n(205)),i=n(188),a=n(194),s="2036618949";t.default=function(e){var t=e.data,n=t.markdownRemark;return Object(r.b)(i.a,null,Object(r.b)(a.a,{title:n.frontmatter.title,description:n.frontmatter.description,keywords:n.frontmatter.tags,image:n.frontmatter.cover.publicURL,slug:n.fields.slug,article:!0}),Object(r.b)("div",null,Object(r.b)("h1",null,n.frontmatter.title),n.frontmatter.cover&&Object(r.b)("img",{src:n.frontmatter.cover.publicURL,alt:n.frontmatter.cover.name}),Object(r.b)("div",{dangerouslySetInnerHTML:{__html:n.html}}),Object(r.b)(o.DiscussionEmbed,{shortname:t.site.siteMetadata.title,config:{identifier:n.fields.slug,title:n.frontmatter.title}})))}},185:function(e,t,n){"use strict";n.d(t,"b",function(){return f});var r=n(7),o=n(0),i=n.n(o),a=n(13),s=n.n(a),c=n(63),u=n.n(c);n.d(t,"a",function(){return u.a});n(186);var l=i.a.createContext({});function d(e){var t=e.staticQueryData,n=e.data,o=e.query,a=e.render,s=n?n.data:t[o]&&t[o].data;return Object(r.b)(i.a.Fragment,null,s&&a(s),!s&&Object(r.b)("div",null,"Loading (StaticQuery)"))}var f=function(e){var t=e.data,n=e.query,o=e.render,i=e.children;return Object(r.b)(l.Consumer,null,function(e){return Object(r.b)(d,{data:t,query:n,render:o||i,staticQueryData:e})})};f.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},186:function(e,t,n){var r;e.exports=(r=n(190))&&r.default||r},187:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r=n(197),o=["-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Oxygen-Sans","Ubuntu","Cantarell","Helvetica Neue","Helvetica","Arial","sans-serif"],i=new(n.n(r).a)({headerFontFamily:o,bodyFontFamily:o}),a=i.rhythm},188:function(e,t,n){"use strict";var r=n(7),o=n(189),i=n(0),a=n.n(i),s=n(185),c=n(196),u=n(187),l=n(191),d=n.n(l),f=n(192),p=n.n(f),m=n(193),b=n.n(m),h={name:"1pqqjfx",styles:"width:25px;vertical-align:bottom;margin-bottom:0;border-radius:50%;border:1px solid grey;"};t.a=function(e){var t=e.children;return Object(r.b)(s.b,{query:"32839212",render:function(e){var n=e.site.siteMetadata.social,o=n.medium,i=n.github;return Object(r.b)(c.ThemeToggler,null,function(e){var n=e.theme,c=e.toggleTheme;return Object(r.b)(a.a.Fragment,null,Object(r.b)("div",{css:Object(r.a)("margin:0 auto;max-width:700px;padding:",Object(u.a)(1),";text-align:right;")},Object(r.b)(s.a,{css:Object(r.a)("text-decoration:none;margin-left:",Object(u.a)(.5),";"),to:"/"},"Home"),Object(r.b)("a",{css:Object(r.a)("text-decoration:none;margin-left:",Object(u.a)(.5),";"),href:o,target:"_blank",rel:"noopener noreferrer"},"Medium"),Object(r.b)("a",{css:Object(r.a)("text-decoration:none;margin-left:",Object(u.a)(.5),";"),href:i,target:"_blank",rel:"noopener noreferrer"},"GitHub"),Object(r.b)(s.a,{to:"/about/",css:Object(r.a)("text-decoration:none;margin-left:",Object(u.a)(.5),";")},Object(r.b)("img",{src:b.a,css:h})),Object(r.b)("img",{src:"dark"===n?p.a:d.a,css:Object(r.a)("display:inline-block;cursor:pointer;width:25px;vertical-align:bottom;margin-bottom:0;margin-left:",Object(u.a)(.5),";"),onClick:function(){return c("dark"===n?"light":"dark")}})),Object(r.b)("div",{css:Object(r.a)("margin:0 auto;max-width:700px;padding:",Object(u.a)(2)," ",Object(u.a)(1),";")},t))})},data:o})}},189:function(e){e.exports={data:{site:{siteMetadata:{social:{github:"https://github.com/aofleejay",medium:"https://medium.com/@aofleejay/latest"}}}}}},190:function(e,t,n){"use strict";n.r(t);n(18);var r=n(0),o=n.n(r),i=n(13),a=n.n(i),s=n(88),c=function(e){var t=e.location,n=e.pageResources;return n?o.a.createElement(s.a,Object.assign({location:t,pageResources:n},n.json)):null};c.propTypes={location:a.a.shape({pathname:a.a.string.isRequired}).isRequired},t.default=c},191:function(e,t,n){e.exports=n.p+"static/moon-e69b44d409556483a5b36e82531126ec.svg"},192:function(e,t,n){e.exports=n.p+"static/cloudy-1259b6d43da52a09b23caf706893e3f8.svg"},193:function(e,t,n){e.exports=n.p+"static/profile-befb6be9201f7a8d55c330958e5c5820.jpeg"},194:function(e,t,n){"use strict";var r=n(7),o=n(195),i=(n(0),n(199)),a=n.n(i),s=n(185),c=function(e){return Object(r.b)(s.b,{query:u,render:function(t){var n=e.title||t.site.siteMetadata.description,o=e.description||t.site.siteMetadata.description,i=e.author||t.site.siteMetadata.author,s=e.keywords||t.site.siteMetadata.keywords,c=e.slug||"/";return Object(r.b)(a.a,{title:n+" - "+t.site.siteMetadata.title},Object(r.b)("meta",{name:"description",content:o}),Object(r.b)("meta",{name:"author",content:i}),Object(r.b)("meta",{name:"keywords",content:s.join()}),Object(r.b)("meta",{property:"og:url",content:""+t.site.siteMetadata.siteUrl+c}),Object(r.b)("meta",{property:"og:title",content:n}),Object(r.b)("meta",{property:"og:description",content:o}),e.article&&Object(r.b)("meta",{property:"og:type",content:"article"}),e.image&&Object(r.b)("meta",{property:"og:image",content:""+t.site.siteMetadata.siteUrl+e.image}),Object(r.b)("meta",{property:"og:locale",content:"th_TH"}),Object(r.b)("meta",{property:"fb:app_id",content:t.site.siteMetadata.facebookAppID}))},data:o})};c.defaultProps={title:null,description:null,author:null,keywords:null,image:null,article:!1,slug:null};var u="1964596324";t.a=c},195:function(e){e.exports={data:{site:{siteMetadata:{title:"aofleejay",description:"เล่าหนังสือ | เล่าเกม",author:"Kunapot Pairat",keywords:["เล่าหนังสือ","เล่าเกม"],siteUrl:"https://aofleejay.com",facebookAppID:"489184495212718"}}}}},201:function(e,t,n){"use strict";n(19),n(66),n(48),n(46),n(26),n(20),n(8),n(49),n(92),Object.defineProperty(t,"__esModule",{value:!0}),t.insertScript=function(e,t,n){var r=window.document.createElement("script");return r.async=!0,r.src=e,r.id=t,n.appendChild(r),r},t.removeScript=function(e,t){var n=window.document.getElementById(e);n&&t.removeChild(n)},t.debounce=function(e,t,n){var r=void 0;return function(){var o=this,i=arguments,a=n&&!r;window.clearTimeout(r),r=setTimeout(function(){r=null,n||e.apply(o,i)},t),a&&e.apply(o,i)}},t.isReactElement=a,t.shallowComparison=function(e,t){var n=new Set(Object.keys(e),Object.keys(t)),r=!0,o=!1,i=void 0;try{for(var s,c=n[Symbol.iterator]();!(r=(s=c.next()).done);r=!0){var u=s.value;if(e[u]!==t[u]&&!a(e[u]))return!0}}catch(l){o=!0,i=l}finally{try{!r&&c.return&&c.return()}finally{if(o)throw i}}return!1};var r,o=n(0),i=(r=o)&&r.__esModule?r:{default:r};function a(e){return!!i.default.isValidElement(e)||!!Array.isArray(e)&&e.some(function(e){return i.default.isValidElement(e)})}},205:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=t.CommentEmbed=t.CommentCount=void 0;var r=n(206),o=n(207),i=n(211);t.CommentCount=r.CommentCount,t.CommentEmbed=o.CommentEmbed,t.DiscussionEmbed=i.DiscussionEmbed;var a={CommentCount:r.CommentCount,CommentEmbed:o.CommentEmbed,DiscussionEmbed:i.DiscussionEmbed};t.default=a},206:function(e,t,n){"use strict";n(123),Object.defineProperty(t,"__esModule",{value:!0}),t.CommentCount=void 0;var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(0),a=(r=i)&&r.__esModule?r:{default:r},s=n(201);var c=(0,s.debounce)(function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})},300,!1);t.CommentCount=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.Component),o(t,[{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){return this.props!==e&&(0,s.shallowComparison)(this.props,e)}},{key:"componentWillUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance()}},{key:"componentDidUpdate",value:function(){this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;e.getElementById("dsq-count-scr")?c():(0,s.insertScript)("https://"+this.props.shortname+".disqus.com/count.js","dsq-count-scr",e.body)}},{key:"cleanInstance",value:function(){var e=window.document.body;(0,s.removeScript)("dsq-count-scr",e),window.DISQUSWIDGETS=void 0}},{key:"render",value:function(){return a.default.createElement("span",{className:"disqus-comment-count","data-disqus-identifier":this.props.config.identifier,"data-disqus-url":this.props.config.url},this.props.children)}}]),t}()},207:function(e,t,n){"use strict";n(208),n(47),n(8),n(123),Object.defineProperty(t,"__esModule",{value:!0}),t.CommentEmbed=void 0;var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(0),a=(r=i)&&r.__esModule?r:{default:r};(t.CommentEmbed=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.Component),o(t,[{key:"getSrc",value:function(){return"https://embed.disqus.com/p/"+Number(this.props.commentId).toString(36)+"?p="+(this.props.showParentComment?"1":"0")+"&m="+(this.props.showMedia?"1":"0")}},{key:"render",value:function(){return a.default.createElement("iframe",{src:this.getSrc(),width:this.props.width,height:this.props.height,seamless:"seamless",scrolling:"no",frameBorder:"0"})}}]),t}()).defaultProps={showMedia:!0,showParentComment:!0,width:420,height:320}},208:function(e,t,n){"use strict";var r=n(3),o=n(22),i=n(33),a=n(91),s=n(64),c=n(9),u=n(68).f,l=n(89).f,d=n(15).f,f=n(209).trim,p=r.Number,m=p,b=p.prototype,h="Number"==i(n(67)(b)),y="trim"in String.prototype,g=function(e){var t=s(e,!1);if("string"==typeof t&&t.length>2){var n,r,o,i=(t=y?t.trim():f(t,3)).charCodeAt(0);if(43===i||45===i){if(88===(n=t.charCodeAt(2))||120===n)return NaN}else if(48===i){switch(t.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+t}for(var a,c=t.slice(2),u=0,l=c.length;u<l;u++)if((a=c.charCodeAt(u))<48||a>o)return NaN;return parseInt(c,r)}}return+t};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof p&&(h?c(function(){b.valueOf.call(n)}):"Number"!=i(n))?a(new m(g(t)),n,p):g(t)};for(var v,w=n(10)?u(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),j=0;w.length>j;j++)o(m,v=w[j])&&!o(p,v)&&d(p,v,l(m,v));p.prototype=b,b.constructor=p,n(16)(r,"Number",p)}},209:function(e,t,n){var r=n(6),o=n(37),i=n(9),a=n(210),s="["+a+"]",c=RegExp("^"+s+s+"*"),u=RegExp(s+s+"*$"),l=function(e,t,n){var o={},s=i(function(){return!!a[e]()||"​"!="​"[e]()}),c=o[e]=s?t(d):a[e];n&&(o[n]=c),r(r.P+r.F*s,"String",o)},d=l.trim=function(e,t){return e=String(o(e)),1&t&&(e=e.replace(c,"")),2&t&&(e=e.replace(u,"")),e};e.exports=l},210:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},211:function(e,t,n){"use strict";n(123),Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=void 0;var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(0),a=(r=i)&&r.__esModule?r:{default:r},s=n(201);t.DiscussionEmbed=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.Component),o(t,[{key:"componentWillMount",value:function(){"undefined"!=typeof window&&window.disqus_shortname&&window.disqus_shortname!==this.props.shortname&&this.cleanInstance()}},{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){return this.props!==e&&(0,s.shallowComparison)(this.props,e)}},{key:"componentWillUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance()}},{key:"componentDidUpdate",value:function(){this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;window&&window.DISQUS&&e.getElementById("dsq-embed-scr")?window.DISQUS.reset({reload:!0,config:this.getDisqusConfig(this.props.config)}):(window.disqus_config=this.getDisqusConfig(this.props.config),window.disqus_shortname=this.props.shortname,(0,s.insertScript)("https://"+this.props.shortname+".disqus.com/embed.js","dsq-embed-scr",e.body))}},{key:"cleanInstance",value:function(){var e=window.document;(0,s.removeScript)("dsq-embed-scr",e.body),window&&window.DISQUS&&window.DISQUS.reset({});try{delete window.DISQUS}catch(n){window.DISQUS=void 0}var t=e.getElementById("disqus_thread");if(t)for(;t.hasChildNodes();)t.removeChild(t.firstChild)}},{key:"getDisqusConfig",value:function(e){return function(){this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.callbacks.onNewComment=[e.onNewComment]}}},{key:"render",value:function(){return a.default.createElement("div",{id:"disqus_thread"})}}]),t}()}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-50ec818a48ae9b9ff4e4.js.map