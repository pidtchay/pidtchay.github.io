(window.webpackJsonppidtchay_project=window.webpackJsonppidtchay_project||[]).push([[42],{118:function(e,n,t){"use strict";e.exports=function(e){var n="string"==typeof e?e.charCodeAt(0):e;return n>=48&&n<=57}},160:function(e,n,t){"use strict";var r=t(531),i=t(532),o=t(118),s=t(533),a=t(534),l=t(535);e.exports=function(e,n){var t,o,s={};n||(n={});for(o in d)t=n[o],s[o]=null==t?d[o]:t;(s.position.indent||s.position.start)&&(s.indent=s.position.indent||[],s.position=s.position.start);return function(e,n){var t,o,s,d,b,y,k,w,x,A,C,H,O,T,z,_,N,P,E,S=n.additional,U=n.nonTerminated,L=n.text,R=n.reference,I=n.warning,M=n.textContext,B=n.referenceContext,D=n.warningContext,F=n.position,q=n.indent||[],$=e.length,J=0,K=-1,V=F.column||1,G=F.line||1,Q="",W=[];"string"==typeof S&&(S=S.charCodeAt(0));_=Y(),w=I?function(e,n){var t=Y();t.column+=n,t.offset+=n,I.call(D,j[e],t,e)}:f,J--,$++;for(;++J<$;)if(10===b&&(V=q[K]||1),38===(b=e.charCodeAt(J))){if(9===(k=e.charCodeAt(J+1))||10===k||12===k||32===k||38===k||60===k||k!=k||S&&k===S){Q+=u(b),V++;continue}for(H=O=J+1,E=O,35===k?(E=++H,88===(k=e.charCodeAt(E))||120===k?(T=h,E=++H):T="decimal"):T=p,t="",C="",d="",z=g[T],E--;++E<$&&(k=e.charCodeAt(E),z(k));)d+=u(k),T===p&&c.call(r,d)&&(t=d,C=r[d]);(s=59===e.charCodeAt(E))&&(E++,(o=T===p&&l(d))&&(t=d,C=o)),P=1+E-O,(s||U)&&(d?T===p?(s&&!C?w(5,1):(t!==d&&(E=H+t.length,P=1+E-H,s=!1),s||(x=t?1:3,n.attribute?61===(k=e.charCodeAt(E))?(w(x,P),C=null):a(k)?C=null:w(x,P):w(x,P))),y=C):(s||w(2,P),y=parseInt(d,m[T]),(X=y)>=55296&&X<=57343||X>1114111?(w(7,P),y=u(65533)):y in i?(w(6,P),y=i[y]):(A="",v(y)&&w(6,P),y>65535&&(A+=u((y-=65536)>>>10|55296),y=56320|1023&y),y=A+u(y))):T!==p&&w(4,P)),y?(Z(),_=Y(),J=E-1,V+=E-O+1,W.push(y),(N=Y()).offset++,R&&R.call(B,y,{start:_,end:N},e.slice(O-1,E)),_=N):(d=e.slice(O-1,E),Q+=d,V+=d.length,J=E-1)}else 10===b&&(G++,K++,V=0),b==b?(Q+=u(b),V++):Z();var X;return W.join("");function Y(){return{line:G,column:V,offset:J+(F.offset||0)}}function Z(){Q&&(W.push(Q),L&&L.call(M,Q,{start:_,end:Y()}),Q="")}}(e,s)};var c={}.hasOwnProperty,u=String.fromCharCode,f=Function.prototype,d={warning:null,reference:null,text:null,warningContext:null,referenceContext:null,textContext:null,position:{},additional:null,attribute:!1,nonTerminated:!0},p="named",h="hexadecimal",m={hexadecimal:16,decimal:10},g={};g[p]=a,g.decimal=o,g[h]=s;var j={};function v(e){return e>=1&&e<=8||11===e||e>=13&&e<=31||e>=127&&e<=159||e>=64976&&e<=65007||65535==(65535&e)||65534==(65535&e)}j[1]="Named character references must be terminated by a semicolon",j[2]="Numeric character references must be terminated by a semicolon",j[3]="Named character references cannot be empty",j[4]="Numeric character references cannot be empty",j[5]="Named character references must be known",j[6]="Numeric character references cannot be disallowed",j[7]="Numeric character references cannot be outside the permissible Unicode range"},346:function(e,n,t){(function(e){function t(e,n){for(var t=0,r=e.length-1;r>=0;r--){var i=e[r];"."===i?e.splice(r,1):".."===i?(e.splice(r,1),t++):t&&(e.splice(r,1),t--)}if(n)for(;t--;t)e.unshift("..");return e}function r(e,n){if(e.filter)return e.filter(n);for(var t=[],r=0;r<e.length;r++)n(e[r],r,e)&&t.push(e[r]);return t}n.resolve=function(){for(var n="",i=!1,o=arguments.length-1;o>=-1&&!i;o--){var s=o>=0?arguments[o]:e.cwd();if("string"!=typeof s)throw new TypeError("Arguments to path.resolve must be strings");s&&(n=s+"/"+n,i="/"===s.charAt(0))}return(i?"/":"")+(n=t(r(n.split("/"),(function(e){return!!e})),!i).join("/"))||"."},n.normalize=function(e){var o=n.isAbsolute(e),s="/"===i(e,-1);return(e=t(r(e.split("/"),(function(e){return!!e})),!o).join("/"))||o||(e="."),e&&s&&(e+="/"),(o?"/":"")+e},n.isAbsolute=function(e){return"/"===e.charAt(0)},n.join=function(){var e=Array.prototype.slice.call(arguments,0);return n.normalize(r(e,(function(e,n){if("string"!=typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))},n.relative=function(e,t){function r(e){for(var n=0;n<e.length&&""===e[n];n++);for(var t=e.length-1;t>=0&&""===e[t];t--);return n>t?[]:e.slice(n,t-n+1)}e=n.resolve(e).substr(1),t=n.resolve(t).substr(1);for(var i=r(e.split("/")),o=r(t.split("/")),s=Math.min(i.length,o.length),a=s,l=0;l<s;l++)if(i[l]!==o[l]){a=l;break}var c=[];for(l=a;l<i.length;l++)c.push("..");return(c=c.concat(o.slice(a))).join("/")},n.sep="/",n.delimiter=":",n.dirname=function(e){if("string"!=typeof e&&(e+=""),0===e.length)return".";for(var n=e.charCodeAt(0),t=47===n,r=-1,i=!0,o=e.length-1;o>=1;--o)if(47===(n=e.charCodeAt(o))){if(!i){r=o;break}}else i=!1;return-1===r?t?"/":".":t&&1===r?"/":e.slice(0,r)},n.basename=function(e,n){var t=function(e){"string"!=typeof e&&(e+="");var n,t=0,r=-1,i=!0;for(n=e.length-1;n>=0;--n)if(47===e.charCodeAt(n)){if(!i){t=n+1;break}}else-1===r&&(i=!1,r=n+1);return-1===r?"":e.slice(t,r)}(e);return n&&t.substr(-1*n.length)===n&&(t=t.substr(0,t.length-n.length)),t},n.extname=function(e){"string"!=typeof e&&(e+="");for(var n=-1,t=0,r=-1,i=!0,o=0,s=e.length-1;s>=0;--s){var a=e.charCodeAt(s);if(47!==a)-1===r&&(i=!1,r=s+1),46===a?-1===n?n=s:1!==o&&(o=1):-1!==n&&(o=-1);else if(!i){t=s+1;break}}return-1===n||-1===r||0===o||1===o&&n===r-1&&n===t+1?"":e.slice(n,r)};var i="b"==="ab".substr(-1)?function(e,n,t){return e.substr(n,t)}:function(e,n,t){return n<0&&(n=e.length+n),e.substr(n,t)}}).call(this,t(180))},347:function(e,n,t){"use strict";e.exports=function(e){var n="string"==typeof e?e.charCodeAt(0):e;return n>=97&&n<=122||n>=65&&n<=90}},35:function(e,n,t){"use strict";e.exports=function(e){return i.test("number"==typeof e?r(e):e.charAt(0))};var r=String.fromCharCode,i=/\s/},366:function(e,n,t){"use strict";function r(e){return function(e){if(Array.isArray(e)){for(var n=0,t=new Array(e.length);n<e.length;n++)t[n]=e[n];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var i=t(46),o=t(510),s=t(523),a=t(139),l=t(579),c=t(581),u=t(582),f=t(583),d=t(584),p=t(585),h=t(586),m=t(587),g=t(588),j=Object.keys(m),v=function(e){var n=e.source||e.children||"",t=e.parserOptions;if(e.allowedTypes&&e.disallowedTypes)throw new Error("Only one of `allowedTypes` and `disallowedTypes` should be defined");var r=i(m,e.renderers),a=[[s,t]].concat(e.plugins||[]).reduce(b,o()),h=a.parse(n),v=i(e,{renderers:r,definitions:p(h)}),y=function(e){var n=[d,l()],t=e.disallowedTypes;e.allowedTypes&&(t=j.filter((function(n){return"root"!==n&&-1===e.allowedTypes.indexOf(n)})));var r=e.unwrapDisallowed?"unwrap":"remove";t&&t.length>0&&n.push(u.ofType(t,r));e.allowNode&&n.push(u.ifNotMatch(e.allowNode,r));var i=!e.escapeHtml&&!e.skipHtml,o=(e.astPlugins||[]).some((function(e){return(Array.isArray(e)?e[0]:e).identity===g.HtmlParser}));i&&!o&&n.push(c);return e.astPlugins?n.concat(e.astPlugins):n}(e),k=a.runSync(h),w=y.reduce((function(e,n){return n(e,v)}),k);return f(w,v)};function b(e,n){return Array.isArray(n)?e.use.apply(e,r(n)):e.use(n)}v.defaultProps={renderers:{},escapeHtml:!0,skipHtml:!1,sourcePos:!1,rawSourcePos:!1,transformLinkUri:h,astPlugins:[],plugins:[],parserOptions:{}},v.propTypes={className:a.string,source:a.string,children:a.string,sourcePos:a.bool,rawSourcePos:a.bool,escapeHtml:a.bool,skipHtml:a.bool,allowNode:a.func,allowedTypes:a.arrayOf(a.oneOf(j)),disallowedTypes:a.arrayOf(a.oneOf(j)),transformLinkUri:a.oneOfType([a.func,a.bool]),linkTarget:a.oneOfType([a.func,a.string]),transformImageUri:a.func,astPlugins:a.arrayOf(a.func),unwrapDisallowed:a.bool,renderers:a.object,plugins:a.array,parserOptions:a.object},v.types=j,v.renderers=m,v.uriTransformer=h,e.exports=v},438:function(e,n,t){var r={"./af":182,"./af.js":182,"./ar":183,"./ar-dz":184,"./ar-dz.js":184,"./ar-kw":185,"./ar-kw.js":185,"./ar-ly":186,"./ar-ly.js":186,"./ar-ma":187,"./ar-ma.js":187,"./ar-sa":188,"./ar-sa.js":188,"./ar-tn":189,"./ar-tn.js":189,"./ar.js":183,"./az":190,"./az.js":190,"./be":191,"./be.js":191,"./bg":192,"./bg.js":192,"./bm":193,"./bm.js":193,"./bn":194,"./bn.js":194,"./bo":195,"./bo.js":195,"./br":196,"./br.js":196,"./bs":197,"./bs.js":197,"./ca":198,"./ca.js":198,"./cs":199,"./cs.js":199,"./cv":200,"./cv.js":200,"./cy":201,"./cy.js":201,"./da":202,"./da.js":202,"./de":203,"./de-at":204,"./de-at.js":204,"./de-ch":205,"./de-ch.js":205,"./de.js":203,"./dv":206,"./dv.js":206,"./el":207,"./el.js":207,"./en-au":208,"./en-au.js":208,"./en-ca":209,"./en-ca.js":209,"./en-gb":210,"./en-gb.js":210,"./en-ie":211,"./en-ie.js":211,"./en-il":212,"./en-il.js":212,"./en-in":213,"./en-in.js":213,"./en-nz":214,"./en-nz.js":214,"./en-sg":215,"./en-sg.js":215,"./eo":216,"./eo.js":216,"./es":217,"./es-do":218,"./es-do.js":218,"./es-us":219,"./es-us.js":219,"./es.js":217,"./et":220,"./et.js":220,"./eu":221,"./eu.js":221,"./fa":222,"./fa.js":222,"./fi":223,"./fi.js":223,"./fil":224,"./fil.js":224,"./fo":225,"./fo.js":225,"./fr":226,"./fr-ca":227,"./fr-ca.js":227,"./fr-ch":228,"./fr-ch.js":228,"./fr.js":226,"./fy":229,"./fy.js":229,"./ga":230,"./ga.js":230,"./gd":231,"./gd.js":231,"./gl":232,"./gl.js":232,"./gom-deva":233,"./gom-deva.js":233,"./gom-latn":234,"./gom-latn.js":234,"./gu":235,"./gu.js":235,"./he":236,"./he.js":236,"./hi":237,"./hi.js":237,"./hr":238,"./hr.js":238,"./hu":239,"./hu.js":239,"./hy-am":240,"./hy-am.js":240,"./id":241,"./id.js":241,"./is":242,"./is.js":242,"./it":243,"./it-ch":244,"./it-ch.js":244,"./it.js":243,"./ja":245,"./ja.js":245,"./jv":246,"./jv.js":246,"./ka":247,"./ka.js":247,"./kk":248,"./kk.js":248,"./km":249,"./km.js":249,"./kn":250,"./kn.js":250,"./ko":251,"./ko.js":251,"./ku":252,"./ku.js":252,"./ky":253,"./ky.js":253,"./lb":254,"./lb.js":254,"./lo":255,"./lo.js":255,"./lt":256,"./lt.js":256,"./lv":257,"./lv.js":257,"./me":258,"./me.js":258,"./mi":259,"./mi.js":259,"./mk":260,"./mk.js":260,"./ml":261,"./ml.js":261,"./mn":262,"./mn.js":262,"./mr":263,"./mr.js":263,"./ms":264,"./ms-my":265,"./ms-my.js":265,"./ms.js":264,"./mt":266,"./mt.js":266,"./my":267,"./my.js":267,"./nb":268,"./nb.js":268,"./ne":269,"./ne.js":269,"./nl":270,"./nl-be":271,"./nl-be.js":271,"./nl.js":270,"./nn":272,"./nn.js":272,"./oc-lnc":273,"./oc-lnc.js":273,"./pa-in":274,"./pa-in.js":274,"./pl":275,"./pl.js":275,"./pt":276,"./pt-br":277,"./pt-br.js":277,"./pt.js":276,"./ro":278,"./ro.js":278,"./ru":279,"./ru.js":279,"./sd":280,"./sd.js":280,"./se":281,"./se.js":281,"./si":282,"./si.js":282,"./sk":283,"./sk.js":283,"./sl":284,"./sl.js":284,"./sq":285,"./sq.js":285,"./sr":286,"./sr-cyrl":287,"./sr-cyrl.js":287,"./sr.js":286,"./ss":288,"./ss.js":288,"./sv":289,"./sv.js":289,"./sw":290,"./sw.js":290,"./ta":291,"./ta.js":291,"./te":292,"./te.js":292,"./tet":293,"./tet.js":293,"./tg":294,"./tg.js":294,"./th":295,"./th.js":295,"./tk":296,"./tk.js":296,"./tl-ph":297,"./tl-ph.js":297,"./tlh":298,"./tlh.js":298,"./tr":299,"./tr.js":299,"./tzl":300,"./tzl.js":300,"./tzm":301,"./tzm-latn":302,"./tzm-latn.js":302,"./tzm.js":301,"./ug-cn":303,"./ug-cn.js":303,"./uk":304,"./uk.js":304,"./ur":305,"./ur.js":305,"./uz":306,"./uz-latn":307,"./uz-latn.js":307,"./uz.js":306,"./vi":308,"./vi.js":308,"./x-pseudo":309,"./x-pseudo.js":309,"./yo":310,"./yo.js":310,"./zh-cn":311,"./zh-cn.js":311,"./zh-hk":312,"./zh-hk.js":312,"./zh-mo":313,"./zh-mo.js":313,"./zh-tw":314,"./zh-tw.js":314};function i(e){var n=o(e);return t(n)}function o(e){if(!t.o(r,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return r[e]}i.keys=function(){return Object.keys(r)},i.resolve=o,e.exports=i,i.id=438},518:function(e,n){function t(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
e.exports=function(e){return null!=e&&(t(e)||function(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&t(e.slice(0,0))}(e)||!!e._isBuffer)}},522:function(e,n,t){"use strict";var r=Object.prototype.toString;e.exports=function(e){var n;return"[object Object]"===r.call(e)&&(null===(n=Object.getPrototypeOf(e))||n===Object.getPrototypeOf({}))}},525:function(e,n){"function"==typeof Object.create?e.exports=function(e,n){n&&(e.super_=n,e.prototype=Object.create(n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}))}:e.exports=function(e,n){if(n){e.super_=n;var t=function(){};t.prototype=n.prototype,e.prototype=new t,e.prototype.constructor=e}}},533:function(e,n,t){"use strict";e.exports=function(e){var n="string"==typeof e?e.charCodeAt(0):e;return n>=97&&n<=102||n>=65&&n<=70||n>=48&&n<=57}},534:function(e,n,t){"use strict";var r=t(347),i=t(118);e.exports=function(e){return r(e)||i(e)}},535:function(e,n,t){"use strict";var r;e.exports=function(e){var n,t="&"+e+";";if((r=r||document.createElement("i")).innerHTML=t,59===(n=r.textContent).charCodeAt(n.length-1)&&"semi"!==e)return!1;return n!==t&&n}},538:function(e,n,t){"use strict";e.exports=s;var r=["\\","`","*","{","}","[","]","(",")","#","+","-",".","!","_",">"],i=r.concat(["~","|"]),o=i.concat(["\n",'"',"$","%","&","'",",","/",":",";","<","=","?","@","^"]);function s(e){var n=e||{};return n.commonmark?o:n.gfm?i:r}s.default=r,s.gfm=i,s.commonmark=o},570:function(e,n,t){"use strict";e.exports=function(e){return i.test("number"==typeof e?r(e):e.charAt(0))};var r=String.fromCharCode,i=/\w/},579:function(e,n,t){var r=t(580);e.exports=function(){return function(e){return r(e,"list",(function(e,n){var t,r,i=0;for(t=0,r=n.length;t<r;t++)"list"===n[t].type&&(i+=1);for(t=0,r=e.children.length;t<r;t++){var o=e.children[t];o.index=t,o.ordered=e.ordered}e.depth=i})),e}}},581:function(e,n,t){"use strict";var r=t(119),i=/^<(area|base|br|col|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)\s*\/?>$/i,o=/^<(\/?)([a-z]+)\s*>$/;e.exports=function(e){var n,t;return r(e,"html",(function(e,r,s){t!==s&&(n=[],t=s);var a=function(e){var n=e.value.match(i);return!!n&&n[1]}(e);if(a)return s.children.splice(r,1,{type:"virtualHtml",tag:a,position:e.position}),!0;var l=function(e,n){var t=e.value.match(o);return!!t&&{tag:t[2],opening:!t[1],node:e}}(e);if(!l)return!0;var c=function(e,n){var t=e.length;for(;t--;)if(e[t].tag===n)return e.splice(t,1)[0];return!1}(n,l.tag);return c?s.children.splice(r,0,function(e,n,t){var r=t.children.indexOf(e.node),i=t.children.indexOf(n.node),o=t.children.splice(r,i-r+1).slice(1,-1);return{type:"virtualHtml",children:o,tag:e.tag,position:{start:e.node.position.start,end:n.node.position.end,indent:[]}}}(l,c,s)):l.opening||n.push(l),!0}),!0),e}},582:function(e,n,t){"use strict";var r=t(119);function i(e,n,t,r){if("remove"===r)t.children.splice(n,1);else if("unwrap"===r){var i=[n,1];e.children&&(i=i.concat(e.children)),Array.prototype.splice.apply(t.children,i)}}n.ofType=function(e,n){return function(n){return e.forEach((function(e){return r(n,e,t,!0)})),n};function t(e,t,r){r&&i(e,t,r,n)}},n.ifNotMatch=function(e,n){return function(e){return r(e,t,!0),e};function t(t,r,o){o&&!e(t,r,o)&&i(t,r,o,n)}}},583:function(e,n,t){"use strict";var r=t(0),i=t(46),o=t(140),s={start:{line:1,column:1,offset:0},end:{line:1,column:1,offset:0}};function a(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,c=n.renderers[e.type];void 0===e.position&&(e.position=t.node&&t.node.position||s);var u=e.position.start,f=[e.type,u.line,u.column,i].join("-");if(!o.isValidElementType(c))throw new Error("Renderer for type `".concat(e.type,"` not defined or is not renderable"));var d=l(e,f,n,c,t,i);return r.createElement(c,d,d.children||p()||void 0);function p(){return e.children&&e.children.map((function(t,r){return a(t,n,{node:e,props:d},r)}))}}function l(e,n,t,o,s,l){var u,f={key:n},d="string"==typeof o;t.sourcePos&&e.position&&(f["data-sourcepos"]=[(u=e.position).start.line,":",u.start.column,"-",u.end.line,":",u.end.column].map(String).join("")),t.rawSourcePos&&!d&&(f.sourcePosition=e.position),t.includeNodeIndex&&s.node&&s.node.children&&!d&&(f.index=s.node.children.indexOf(e),f.parentChildCount=s.node.children.length);var p=null!==e.identifier&&void 0!==e.identifier?t.definitions[e.identifier]||{}:null;switch(e.type){case"root":c(f,{className:t.className});break;case"text":f.nodeKey=n,f.children=e.value;break;case"heading":f.level=e.depth;break;case"list":f.start=e.start,f.ordered=e.ordered,f.tight=!e.loose,f.depth=e.depth;break;case"listItem":f.checked=e.checked,f.tight=!e.loose,f.ordered=e.ordered,f.index=e.index,f.children=function(e,n){if(e.loose)return e.children;if(n.node&&e.index>0&&n.node.children[e.index-1].loose)return e.children;return function(e){return e.children.reduce((function(e,n){return e.concat("paragraph"===n.type?n.children||[]:[n])}),[])}(e)}(e,s).map((function(n,r){return a(n,t,{node:e,props:f},r)}));break;case"definition":c(f,{identifier:e.identifier,title:e.title,url:e.url});break;case"code":c(f,{language:e.lang&&e.lang.split(/\s/,1)[0]});break;case"inlineCode":f.children=e.value,f.inline=!0;break;case"link":c(f,{title:e.title||void 0,target:"function"==typeof t.linkTarget?t.linkTarget(e.url,e.children,e.title):t.linkTarget,href:t.transformLinkUri?t.transformLinkUri(e.url,e.children,e.title):e.url});break;case"image":c(f,{alt:e.alt||void 0,title:e.title||void 0,src:t.transformImageUri?t.transformImageUri(e.url,e.children,e.title,e.alt):e.url});break;case"linkReference":c(f,i(p,{href:t.transformLinkUri?t.transformLinkUri(p.href):p.href}));break;case"imageReference":c(f,{src:t.transformImageUri&&p.href?t.transformImageUri(p.href,e.children,p.title,e.alt):p.href,title:p.title||void 0,alt:e.alt||void 0});break;case"table":case"tableHead":case"tableBody":f.columnAlignment=e.align;break;case"tableRow":f.isHeader="tableHead"===s.node.type,f.columnAlignment=s.props.columnAlignment;break;case"tableCell":c(f,{isHeader:s.props.isHeader,align:s.props.columnAlignment[l]});break;case"virtualHtml":f.tag=e.tag;break;case"html":f.isBlock=e.position.start.line!==e.position.end.line,f.escapeHtml=t.escapeHtml,f.skipHtml=t.skipHtml;break;case"parsedHtml":var h;e.children&&(h=e.children.map((function(n,r){return a(n,t,{node:e,props:f},r)}))),f.escapeHtml=t.escapeHtml,f.skipHtml=t.skipHtml,f.element=function(e,n){var t=e.element;if(Array.isArray(t)){var i=r.Fragment||"div";return r.createElement(i,null,t)}if(t.props.children||n){var o=r.Children.toArray(t.props.children).concat(n);return r.cloneElement(t,null,o)}return r.cloneElement(t,null)}(e,h);break;default:c(f,i(e,{type:void 0,position:void 0,children:void 0}))}return!d&&e.value&&(f.value=e.value),f}function c(e,n){for(var t in n)void 0!==n[t]&&(e[t]=n[t])}e.exports=a},584:function(e,n,t){"use strict";var r=t(119);function i(e){var n=e.children;e.children=[{type:"tableHead",align:e.align,children:[n[0]],position:n[0].position}],n.length>1&&e.children.push({type:"tableBody",align:e.align,children:n.slice(1),position:{start:n[1].position.start,end:n[n.length-1].position.end}})}e.exports=function(e){return r(e,"table",i),e}},585:function(e,n,t){"use strict";e.exports=function e(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(n.children||[]).reduce((function(n,t){return"definition"===t.type&&(n[t.identifier]={href:t.url,title:t.title}),e(t,n)}),t)}},586:function(e,n,t){"use strict";var r=["http","https","mailto","tel"];e.exports=function(e){var n=(e||"").trim(),t=n.charAt(0);if("#"===t||"/"===t)return n;var i=n.indexOf(":");if(-1===i)return n;for(var o=r.length,s=-1;++s<o;){var a=r[s];if(i===a.length&&n.slice(0,a.length).toLowerCase()===a)return n}return-1!==(s=n.indexOf("?"))&&i>s||-1!==(s=n.indexOf("#"))&&i>s?n:"javascript:void(0)"}},587:function(e,n,t){"use strict";var r=t(46),i=t(0),o=parseInt((i.version||"16").slice(0,2),10)>=16,s=i.createElement;function a(e,n){return s(e,l(n),n.children)}function l(e){return e["data-sourcepos"]?{"data-sourcepos":e["data-sourcepos"]}:{}}e.exports={break:"br",paragraph:"p",emphasis:"em",strong:"strong",thematicBreak:"hr",blockquote:"blockquote",delete:"del",link:"a",image:"img",linkReference:"a",imageReference:"img",table:a.bind(null,"table"),tableHead:a.bind(null,"thead"),tableBody:a.bind(null,"tbody"),tableRow:a.bind(null,"tr"),tableCell:function(e){var n=e.align?{textAlign:e.align}:void 0,t=l(e);return s(e.isHeader?"th":"td",n?r({style:n},t):t,e.children)},root:function(e){var n=!e.className,t=n&&i.Fragment||"div";return s(t,n?null:e,e.children)},text:function(e){return o?e.children:s("span",null,e.children)},list:function(e){var n=l(e);null!==e.start&&1!==e.start&&void 0!==e.start&&(n.start=e.start.toString());return s(e.ordered?"ol":"ul",n,e.children)},listItem:function(e){var n=null;if(null!==e.checked&&void 0!==e.checked){var t=e.checked;n=s("input",{type:"checkbox",checked:t,readOnly:!0})}return s("li",l(e),n,e.children)},definition:function(){return null},heading:function(e){return s("h".concat(e.level),l(e),e.children)},inlineCode:function(e){return s("code",l(e),e.children)},code:function(e){var n=e.language&&"language-".concat(e.language),t=s("code",n?{className:n}:null,e.value);return s("pre",l(e),t)},html:function(e){if(e.skipHtml)return null;var n=e.isBlock?"div":"span";if(e.escapeHtml){var t=i.Fragment||n;return s(t,null,e.value)}var r={dangerouslySetInnerHTML:{__html:e.value}};return s(n,r)},virtualHtml:function(e){return s(e.tag,l(e),e.children)},parsedHtml:function(e){return e["data-sourcepos"]?i.cloneElement(e.element,{"data-sourcepos":e["data-sourcepos"]}):e.element}}},588:function(e,n,t){"use strict";n.HtmlParser="undefined"==typeof Symbol?"__RMD_HTML_PARSER__":Symbol("__RMD_HTML_PARSER__")}}]);