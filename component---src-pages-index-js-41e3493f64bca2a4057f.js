(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{154:function(t,e,a){"use strict";a.r(e),a.d(e,"query",function(){return s});a(166);var n=a(0),r=a.n(n),i=a(156),o=a(158),c=a(159),l=a(161),s="2234444574";e.default=function(t){var e=t.data;return r.a.createElement(c.a,null,r.a.createElement(l.a,null),e.allMarkdownRemark.edges.map(function(t){var e=t.node;return r.a.createElement("div",{key:e.id},r.a.createElement(i.a,{to:e.fields.slug,style:{textDecoration:"none",color:"inherit"}},r.a.createElement("h3",{style:{marginBottom:Object(o.a)(.25)}},e.frontmatter.title," ",r.a.createElement("p",{style:{color:"#bbb",fontSize:Object(o.a)(.5)}},e.frontmatter.date)),e.frontmatter.cover&&r.a.createElement("img",{src:e.frontmatter.cover.publicURL,alt:e.frontmatter.cover.name}),r.a.createElement("p",null,e.excerpt)))}))}},156:function(t,e,a){"use strict";a.d(e,"b",function(){return u});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(32),l=a.n(c);a.d(e,"a",function(){return l.a});a(157);var s=r.a.createContext({}),u=function(t){return r.a.createElement(s.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},157:function(t,e,a){var n;t.exports=(n=a(160))&&n.default||n},158:function(t,e,a){"use strict";a.d(e,"a",function(){return l});var n=a(163),r=a.n(n),i=a(164),o=a.n(i),c=new r.a(o.a),l=c.rhythm},159:function(t,e,a){"use strict";var n=a(0),r=a.n(n),i=a(156),o=a(158);e.a=function(t){var e=t.children;return r.a.createElement("div",{style:{margin:"0 auto",maxWidth:700,padding:Object(o.a)(.75),paddingTop:Object(o.a)(1.5)}},r.a.createElement("header",{style:{display:"flex",justifyContent:"space-between",marginBottom:"1.5rem"}},r.a.createElement(i.a,{to:"/"},"Home"),r.a.createElement("div",{style:{display:"inline",textAlign:"right"}},r.a.createElement("a",{href:"https://medium.com/@aofleejay/latest",target:"_blank",rel:"noopener noreferrer"},"Software Engineering"),r.a.createElement(i.a,{to:"/about/",style:{marginLeft:20}},"About"))),e)}},160:function(t,e,a){"use strict";a.r(e);a(33);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(53),l=a(2),s=function(t){var e=t.location,a=l.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(c.a,Object.assign({location:e,pageResources:a},a.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=s},161:function(t,e,a){"use strict";var n=a(162),r=a(0),i=a.n(r),o=a(4),c=a.n(o),l=a(165),s=a.n(l),u=a(156);function d(t){var e=t.description,a=t.lang,r=t.meta,o=t.keywords,c=t.title;return i.a.createElement(u.b,{query:m,render:function(t){var n=e||t.site.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s - "+t.site.siteMetadata.title,defaultTitle:t.site.siteMetadata.title+" - "+t.site.siteMetadata.description,meta:[{name:"description",content:n},{property:"og:title",content:c},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:n}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:n})}d.defaultProps={description:void 0,lang:"th",meta:[],keywords:[],title:void 0},d.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string},e.a=d;var m="1025518380"},162:function(t){t.exports={data:{site:{siteMetadata:{title:"aofleejay",description:"My personal blog.",author:"Kunapot Pairat"}}}}},166:function(t,e,a){var n=a(24).f,r=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in r||a(17)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(t){return""}}})}}]);
//# sourceMappingURL=component---src-pages-index-js-41e3493f64bca2a4057f.js.map