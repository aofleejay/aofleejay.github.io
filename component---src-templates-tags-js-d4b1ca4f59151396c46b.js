(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{181:function(t,e,a){"use strict";a.r(e),a.d(e,"query",function(){return s});a(17);var n=a(7),r=(a(0),a(185)),o=a(187),i=a(188),c=a(190),s="2618906207";e.default=function(t){var e=t.data;return Object(n.b)(i.a,null,Object(n.b)(c.a,null),e.allMarkdownRemark.edges.map(function(t){var e=t.node;return Object(n.b)("div",{key:e.id},Object(n.b)(r.a,{to:e.fields.slug,style:{textDecoration:"none",color:"inherit"}},Object(n.b)("h3",{style:{marginBottom:Object(o.a)(.25)}},e.frontmatter.title," ",Object(n.b)("p",{style:{color:"#bbb",fontSize:Object(o.a)(.5)}},e.frontmatter.date),e.frontmatter.tags.map(function(t){return Object(n.b)(r.a,{to:"/tags/"+t,style:{textDecoration:"none",color:"inherit"}},Object(n.b)("span",{style:{marginRight:5,color:"#bbb",fontSize:Object(o.a)(.5)}},t))})),e.frontmatter.cover&&Object(n.b)("img",{src:e.frontmatter.cover.publicURL,alt:e.frontmatter.cover.name}),Object(n.b)("p",null,e.excerpt)))}))}},185:function(t,e,a){"use strict";a.d(e,"b",function(){return b});var n=a(7),r=a(0),o=a.n(r),i=a(13),c=a.n(i),s=a(63),l=a.n(s);a.d(e,"a",function(){return l.a});a(186);var u=o.a.createContext({});function d(t){var e=t.staticQueryData,a=t.data,r=t.query,i=t.render,c=a?a.data:e[r]&&e[r].data;return Object(n.b)(o.a.Fragment,null,c&&i(c),!c&&Object(n.b)("div",null,"Loading (StaticQuery)"))}var b=function(t){var e=t.data,a=t.query,r=t.render,o=t.children;return Object(n.b)(u.Consumer,null,function(t){return Object(n.b)(d,{data:e,query:a,render:r||o,staticQueryData:t})})};b.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},186:function(t,e,a){var n;t.exports=(n=a(189))&&n.default||n},187:function(t,e,a){"use strict";a.d(e,"a",function(){return i});var n=a(192),r=["-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Oxygen-Sans","Ubuntu","Cantarell","Helvetica Neue","Helvetica","Arial","sans-serif"],o=new(a.n(n).a)({headerFontFamily:r,bodyFontFamily:r}),i=o.rhythm},188:function(t,e,a){"use strict";var n=a(7),r=a(0),o=a.n(r),i=a(185),c=a(187),s={name:"5r7xba",styles:"background-color:salmon;"},l={name:"4c3m2r",styles:"color:#ffffff;text-decoration:none;"},u={name:"nqxf1o",styles:"float:right;@media only screen and (max-width:320px){float:none;}"},d={name:"4c3m2r",styles:"color:#ffffff;text-decoration:none;"},b={name:"4c3m2r",styles:"color:#ffffff;text-decoration:none;"};e.a=function(t){var e=t.children;return Object(n.b)(o.a.Fragment,null,Object(n.b)("div",{className:"asdasdasd",css:s},Object(n.b)("div",{css:Object(n.a)("margin:0 auto;max-width:700px;padding:",Object(c.a)(1),";")},Object(n.b)(i.a,{css:l,to:"/"},"HOME"),Object(n.b)("div",{css:u},Object(n.b)("a",{css:d,href:"https://medium.com/@aofleejay/latest",target:"_blank",rel:"noopener noreferrer"},"SOFTWARE DEVELOPMENT"),Object(n.b)("span",{css:Object(n.a)("padding:0 ",Object(c.a)(.5),";color:#ffffff;")},"|"),Object(n.b)(i.a,{to:"/about/",css:b},"ABOUT")))),Object(n.b)("div",null,Object(n.b)("div",{css:Object(n.a)("margin:0 auto;max-width:700px;padding:",Object(c.a)(2)," ",Object(c.a)(1),";")},e)))}},189:function(t,e,a){"use strict";a.r(e);a(19);var n=a(0),r=a.n(n),o=a(13),i=a.n(o),c=a(88),s=function(t){var e=t.location,a=t.pageResources;return a?r.a.createElement(c.a,Object.assign({location:e,pageResources:a},a.json)):null};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},e.default=s},190:function(t,e,a){"use strict";var n=a(7),r=a(191),o=(a(0),a(13)),i=a.n(o),c=a(193),s=a.n(c),l=a(185);function u(t){var e=t.description,a=t.lang,o=t.meta,i=t.keywords,c=t.title;return Object(n.b)(l.b,{query:d,render:function(t){var r=e||t.site.siteMetadata.description;return Object(n.b)(s.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s - "+t.site.siteMetadata.title,defaultTitle:t.site.siteMetadata.title+" - "+t.site.siteMetadata.description,meta:[{name:"description",content:r},{property:"og:title",content:c},{property:"og:description",content:r},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:r}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(o)})},data:r})}u.defaultProps={description:void 0,lang:"th",meta:[],keywords:[],title:void 0},u.propTypes={description:i.a.string,lang:i.a.string,meta:i.a.array,keywords:i.a.arrayOf(i.a.string),title:i.a.string},e.a=u;var d="1025518380"},191:function(t){t.exports={data:{site:{siteMetadata:{title:"aofleejay",description:"เล่าโค้ด | เล่าหนังสือ | เล่าเกม",author:"Kunapot Pairat"}}}}}}]);
//# sourceMappingURL=component---src-templates-tags-js-d4b1ca4f59151396c46b.js.map