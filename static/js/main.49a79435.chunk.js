(this["webpackJsonpopen-react-template"]=this["webpackJsonpopen-react-template"]||[]).push([[0],{21:function(e,t,a){e.exports=a(41)},31:function(e,t,a){e.exports=a.p+"static/media/gitpics.170f2e5d.png"},32:function(e,t,a){e.exports=a.p+"static/media/icons8-python.36972298.svg"},33:function(e,t,a){e.exports=a.p+"static/media/icons8-javascript.4ad94aa8.svg"},34:function(e,t,a){e.exports=a.p+"static/media/icons8-django.65c8a00f.svg"},35:function(e,t,a){e.exports=a.p+"static/media/icons8-react-native.05493d0b.svg"},36:function(e,t,a){e.exports=a.p+"static/media/deezisoft.96f337a0.png"},37:function(e,t,a){e.exports=a.p+"static/media/decux.8828f41b.JPG"},38:function(e,t,a){e.exports=a.p+"static/media/flix.8f43e1c3.png"},39:function(e,t,a){e.exports=a.p+"static/media/dip.68d5e75c.PNG"},40:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var r=a(0),i=a.n(r),n=a(18),l=a.n(n),s=a(42),o=a(7),c=a(3),m=function(e){var t=e.component,a=e.layout,r=Object(c.a)(e,["component","layout"]);return a=void 0===a?function(e){return i.a.createElement(i.a.Fragment,null,e.children)}:a,i.a.createElement(s.b,Object.assign({},r,{render:function(e){return i.a.createElement(a,null,i.a.createElement(t,e))}}))},d=a(8),v=a(2),u=a.n(v),p=a(12),b=i.a.forwardRef((function(e,t){var a=Object(r.useState)(window.innerHeight),n=Object(d.a)(a,2),l=n[0],s=n[1],o=Object(r.useState)([]),c=Object(d.a)(o,2),m=c[0],v=c[1],u=function(){return m.length<=document.querySelectorAll("[class*=reveal-].is-revealed").length},b=function(){if(!u())for(var e=function(e){var t=m[e],a=t.getAttribute("data-reveal-delay"),r=t.getAttribute("data-reveal-offset")?t.getAttribute("data-reveal-offset"):"200";(function(e,t){return e.getBoundingClientRect().top<=l-t})(t.getAttribute("data-reveal-container")?t.closest(t.getAttribute("data-reveal-container")):t,r)&&!t.classList.contains("is-revealed")&&(a&&0!==a?setTimeout((function(){t.classList.add("is-revealed")}),a):t.classList.add("is-revealed"))},t=0;t<m.length;t++)e(t)};Object(r.useImperativeHandle)(t,(function(){return{init:function(){v(document.querySelectorAll("[class*=reveal-]"))}}})),Object(r.useEffect)((function(){"undefined"!==typeof m&&m.length>0&&(u()||(window.addEventListener("scroll",h),window.addEventListener("resize",g)),b())}),[m]);var f=function(){u()&&(window.removeEventListener("scroll",h),window.removeEventListener("resize",g))},h=Object(p.throttle)((function(){f(),b()}),30),g=Object(p.throttle)((function(){s(window.innerHeight)}),30);return Object(r.useEffect)((function(){f(),b()}),[l]),i.a.createElement(i.a.Fragment,null,e.children())}));b.propTypes={children:u.a.func.isRequired};var f=b,h=a(9),g=function(e){var t=e.children;return i.a.createElement(i.a.Fragment,null,i.a.createElement("main",{className:"site-content"},t))},E=a(4),N=a(1),w=a.n(N),O={types:{topOuterDivider:u.a.bool,bottomOuterDivider:u.a.bool,topDivider:u.a.bool,bottomDivider:u.a.bool,hasBgColor:u.a.bool,invertColor:u.a.bool},defaults:{topOuterDivider:!1,bottomOuterDivider:!1,topDivider:!1,bottomDivider:!1,hasBgColor:!1,invertColor:!1}},x={types:Object(E.a)({},O.types),defaults:Object(E.a)({},O.defaults)},y={types:Object(E.a)(Object(E.a)({},O.types),{},{invertMobile:u.a.bool,invertDesktop:u.a.bool,alignTop:u.a.bool,imageFill:u.a.bool}),defaults:Object(E.a)(Object(E.a)({},O.defaults),{},{invertMobile:!1,invertDesktop:!1,alignTop:!1,imageFill:!1})},D={types:Object(E.a)(Object(E.a)({},O.types),{},{pushLeft:u.a.bool}),defaults:Object(E.a)(Object(E.a)({},O.defaults),{},{pushLeft:!1})},j=function(e){var t=e.className,a=e.src,n=e.width,l=e.height,s=e.alt,o=Object(c.a)(e,["className","src","width","height","alt"]),m=Object(r.useState)(!1),v=Object(d.a)(m,2),u=v[0],p=v[1],b=Object(r.useRef)(null);Object(r.useEffect)((function(){f(b.current)}),[]);var f=function(e){var t,a,r=document.createElement("img");u||(e.style.display="none",e.before(r),r.src=(t=e.getAttribute("width")||0,a=e.getAttribute("height")||0,'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '.concat(t," ").concat(a,'"%3E%3C/svg%3E')),r.width=e.getAttribute("width"),r.height=e.getAttribute("height"),r.style.opacity="0",e.className&&r.classList.add(e.className),r.remove(),e.style.display="")};return i.a.createElement("img",Object.assign({},o,{ref:b,className:t,src:a,width:n,height:l,alt:s,onLoad:function(){p(!0)}}))};j.defaultProps={src:void 0,width:void 0,height:void 0,alt:void 0};var C=j,k=Object(E.a)({},x.defaults),A=function(e){var t=e.className,r=e.topOuterDivider,n=e.bottomOuterDivider,l=e.topDivider,s=e.bottomDivider,o=e.hasBgColor,m=e.invertColor,d=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor"]),v=w()("hero section center-content",r&&"has-top-divider",n&&"has-bottom-divider",o&&"has-bg-color",m&&"invert-color",t),u=w()("hero-inner section-inner",l&&"has-top-divider",s&&"has-bottom-divider");return i.a.createElement("section",Object.assign({},d,{className:v}),i.a.createElement("div",{className:"container-sm"},i.a.createElement("div",{className:u},i.a.createElement("div",{className:"hero-content"},i.a.createElement("h1",{className:"mt-0 mb-16 reveal-from-bottom","data-reveal-delay":"200"},"Hi, I'm ",i.a.createElement("span",{className:"text-color-primary"},"David.")),i.a.createElement("div",{className:"container-xs"},i.a.createElement("p",{className:"m-0 mb-32 reveal-from-bottom","data-reveal-delay":"400"},"I build software stuff"))),i.a.createElement("div",{className:"hero-figure reveal-from-bottom illustration-element-01","data-reveal-value":"20px","data-reveal-delay":"800"},i.a.createElement(C,{className:"has-shadow",src:a(31),alt:"..."})))))};A.defaultProps=k;var P=A,F=function(e){var t=e.className,a=e.data,r=e.children,n=e.tag,l=Object(c.a)(e,["className","data","children","tag"]),s=w()("section-header",t),o=n;return i.a.createElement(i.a.Fragment,null,(a.title||a.paragraph)&&i.a.createElement("div",Object.assign({},l,{className:s}),i.a.createElement("div",{className:"container-xs"},r,a.title&&i.a.createElement(o,{className:w()("mt-0",a.paragraph?"mb-16":"mb-0")},a.title),a.paragraph&&i.a.createElement("p",{className:"m-0"},a.paragraph))))};F.defaultProps={children:null,tag:"h2"};var L=F,R=Object(E.a)({},D.defaults),B=function(e){var t=e.className,r=e.topOuterDivider,n=e.bottomOuterDivider,l=e.topDivider,s=e.bottomDivider,o=e.hasBgColor,m=e.invertColor,d=e.pushLeft,v=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"]),u=w()("features-tiles section",r&&"has-top-divider",n&&"has-bottom-divider",o&&"has-bg-color",m&&"invert-color",t),p=w()("features-tiles-inner section-inner pt-0",l&&"has-top-divider",s&&"has-bottom-divider"),b=w()("tiles-wrap center-content",d&&"push-left");return i.a.createElement("section",Object.assign({},v,{className:u}),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:p},i.a.createElement(L,{data:{title:"Top Skills",paragraph:"I know a few things and use a bunch of technologies. Here are the ones i use often:"},className:"center-content"}),i.a.createElement("div",{className:b},i.a.createElement("div",{className:"tiles-item reveal-from-bottom"},i.a.createElement("div",{className:"tiles-item-inner"},i.a.createElement("div",{className:"features-tiles-item-header"},i.a.createElement("div",{className:"features-tiles-item-image mb-16"},i.a.createElement(C,{src:a(32),alt:"Features tile icon 01",width:64,height:64}))),i.a.createElement("div",{className:"features-tiles-item-content"},i.a.createElement("h4",{className:"mt-0 mb-8"},"Python")))),i.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"200"},i.a.createElement("div",{className:"tiles-item-inner"},i.a.createElement("div",{className:"features-tiles-item-header"},i.a.createElement("div",{className:"features-tiles-item-image mb-16"},i.a.createElement(C,{src:a(33),alt:"Features tile icon 02",width:64,height:64}))),i.a.createElement("div",{className:"features-tiles-item-content"},i.a.createElement("h4",{className:"mt-0 mb-8"},"Javascript")))),i.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"400"},i.a.createElement("div",{className:"tiles-item-inner"},i.a.createElement("div",{className:"features-tiles-item-header"},i.a.createElement("div",{className:"features-tiles-item-image mb-16"},i.a.createElement(C,{src:a(34),alt:"Features tile icon 03",width:64,height:64}))),i.a.createElement("div",{className:"features-tiles-item-content"},i.a.createElement("h4",{className:"mt-0 mb-8"},"Django")))),i.a.createElement("div",{className:"tiles-item reveal-from-bottom"},i.a.createElement("div",{className:"tiles-item-inner"},i.a.createElement("div",{className:"features-tiles-item-header"},i.a.createElement("div",{className:"features-tiles-item-image mb-16"},i.a.createElement(C,{src:a(35),alt:"Features tile icon 04",width:64,height:64}))),i.a.createElement("div",{className:"features-tiles-item-content"},i.a.createElement("h4",{className:"mt-0 mb-8"},"React"))))))))};B.defaultProps=R;var H=B,T=Object(E.a)({},y.defaults),S=function(e){var t=e.className,r=e.topOuterDivider,n=e.bottomOuterDivider,l=e.topDivider,s=e.bottomDivider,o=e.hasBgColor,m=e.invertColor,d=e.invertMobile,v=e.invertDesktop,u=e.alignTop,p=e.imageFill,b=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","invertMobile","invertDesktop","alignTop","imageFill"]),f=w()("features-split section",r&&"has-top-divider",n&&"has-bottom-divider",o&&"has-bg-color",m&&"invert-color",t),h=w()("features-split-inner section-inner",l&&"has-top-divider",s&&"has-bottom-divider"),g=w()("split-wrap",d&&"invert-mobile",v&&"invert-desktop",u&&"align-top");return i.a.createElement("section",Object.assign({},b,{className:f}),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:h},i.a.createElement(L,{data:{title:"Some products I've built",paragraph:"Here are some"},className:"center-content"}),i.a.createElement("div",{className:g},i.a.createElement("div",{className:"split-item"},i.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},i.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"Deezisoft Company website"),i.a.createElement("h3",{className:"mt-0 mb-12"},"Python-Django-Javascript-React"),i.a.createElement("p",{className:"m-0"},"A company website, with react front-end and python backend, using django and the rest framework to implent api for core front-end functionality of contact form and company blog."),i.a.createElement("p",null)),i.a.createElement("div",{className:w()("split-item-image center-content-mobile reveal-from-bottom",p&&"split-item-image-fill"),"data-reveal-container":".split-item"},i.a.createElement(C,{src:a(36),alt:"Features split 01",width:528,height:396}),i.a.createElement("a",{className:"text-xxs text-color-primary text-center fw-600 tt-u mb-8",style:{color:"#03a9f4",textAlign:"center"},href:"https://deezisoft.com/",target:"_blank",rel:"noopener noreferrer"}," View "))),i.a.createElement("div",{className:"split-item"},i.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},i.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"customer management app"),i.a.createElement("h3",{className:"mt-0 mb-12"},"Python,Django, Bootstrap, heroku, AWS,postgres"),i.a.createElement("p",{className:"m-0"},"A customer management app that, can be integrated into any webapp built with django, for user management. mainly E-commerce for taking care of orders and stuff."),i.a.createElement("p",null)),i.a.createElement("div",{className:w()("split-item-image center-content-mobile reveal-from-bottom",p&&"split-item-image-fill"),"data-reveal-container":".split-item"},i.a.createElement(C,{src:a(37),alt:"Features split 01",width:528,height:396}),i.a.createElement("a",{className:"text-xxs text-color-primary text-center fw-600 tt-u mb-8",style:{color:"#03a9f4",textAlign:"center"},href:"https://decux.herokuapp.com/",target:"_blank",rel:"noopener noreferrer"}," View "))),i.a.createElement("div",{className:"split-item"},i.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-right","data-reveal-container":".split-item"},i.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"REIT web application"),i.a.createElement("h3",{className:"mt-0 mb-12"},"Python-Django-Javascript-React"),i.a.createElement("p",{className:"m-0"},"A REIT webapp that allows users buy REITs. with Dashboard and user management. using python as backend and django framework with Rest framework to implent api for core various React front-end functionality.")),i.a.createElement("div",{className:w()("split-item-image center-content-mobile reveal-from-bottom",p&&"split-item-image-fill"),"data-reveal-container":".split-item"},i.a.createElement(C,{src:a(38),alt:"Features split 02",width:528,height:396}),i.a.createElement("a",{className:"text-xxs text-color-primary text-center fw-600 tt-u mb-8",style:{color:"#03a9f4",textAlign:"center"},href:"https://fix2flipproperties.com/",target:"_blank",rel:"noopener noreferrer"}," View "))),i.a.createElement("div",{className:"split-item"},i.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},i.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"Crypto web application"),i.a.createElement("h3",{className:"mt-0 mb-12"},"Python-Django-Javascript-React"),i.a.createElement("p",{className:"m-0"},"A web app for managing, buying and investing in crypto assets. with Dashboard and user management. using python as backend and django framework with Rest framework to implent api for core various React front-end functionality.")),i.a.createElement("div",{className:w()("split-item-image center-content-mobile reveal-from-bottom",p&&"split-item-image-fill"),"data-reveal-container":".split-item"},i.a.createElement(C,{src:a(39),alt:"Features split 03",width:528,height:396}),i.a.createElement("a",{className:"text-xxs text-color-primary text-center fw-600 tt-u mb-8",style:{color:"#03a9f4",textAlign:"center"},href:"https://dippace.com/",target:"_blank",rel:"noopener noreferrer"}," View ")))))))};S.defaultProps=T;var _=S,I=Object(E.a)({},D.defaults),z=function(e){var t=e.className,a=e.topOuterDivider,r=e.bottomOuterDivider,n=e.topDivider,l=e.bottomDivider,s=e.hasBgColor,o=e.invertColor,m=e.pushLeft,d=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"]),v=w()("testimonial section",a&&"has-top-divider",r&&"has-bottom-divider",s&&"has-bg-color",o&&"invert-color",t),u=w()("testimonial-inner section-inner",n&&"has-top-divider",l&&"has-bottom-divider"),p=w()("tiles-wrap",m&&"push-left");return i.a.createElement("section",Object.assign({},d,{className:v}),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:u},i.a.createElement("div",{className:"container-xs"},i.a.createElement("p",{className:"center-content m-0"},"I've done and still woring on some stuffs on ",i.a.createElement("a",{className:"text-xxs text-color-primary fw-600 tt-u mb-8",style:{color:"#03a9f4"},href:"https://github.com/Epicdavid",target:"_blank",rel:"noopener noreferrer"}," Github "))),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement(L,{data:{title:"Like my work?"},className:"center-content"}),i.a.createElement("p",{className:"center-content m-0"},"Please Consider Hiring ",i.a.createElement("a",{href:"mailto:amuhdavid@gmail.com"},"me")),i.a.createElement("div",{className:p},i.a.createElement("div",{className:"tiles-item reveal-from-right","data-reveal-delay":"200"})))))};z.defaultProps=I;var G=z,J=function(e){var t=e.className,a=e.children,r=e.labelHidden,n=e.id,l=Object(c.a)(e,["className","children","labelHidden","id"]),s=w()("form-label",r&&"screen-reader",t);return i.a.createElement("label",Object.assign({},l,{className:s,htmlFor:n}),a)};J.defaultProps={children:null,labelHidden:!1,id:null};var M=J,W=function(e){var t=e.children,a=e.className,r=e.status,n=Object(c.a)(e,["children","className","status"]),l=w()("form-hint",r&&"text-color-".concat(r),a);return i.a.createElement("div",Object.assign({},n,{className:l}),t)};W.defaultProps={children:null,status:!1};var V=W,q=function(e){var t=e.className,a=e.children,r=e.label,n=e.labelHidden,l=e.type,s=e.name,o=e.status,m=e.disabled,d=e.value,v=e.formGroup,u=e.hasIcon,p=e.size,b=e.placeholder,f=e.rows,h=e.hint,g=Object(c.a)(e,["className","children","label","labelHidden","type","name","status","disabled","value","formGroup","hasIcon","size","placeholder","rows","hint"]),E=w()(v&&""!==v&&("desktop"===v?"form-group-desktop":"form-group"),u&&""!==u&&"has-icon-"+u),N=w()("form-input",p&&"form-input-".concat(p),o&&"form-".concat(o),t),O="textarea"===l?"textarea":"input";return i.a.createElement(i.a.Fragment,null,r&&i.a.createElement(M,{labelHidden:n,id:g.id},r),i.a.createElement("div",{className:E},i.a.createElement(O,Object.assign({},g,{type:"textarea"!==l?l:null,className:N,name:s,disabled:m,value:d,placeholder:b,rows:"textarea"===l?f:null})),a),h&&i.a.createElement(V,{status:o},h))};q.defaultProps={children:null,label:"",labelHidden:!1,type:"text",name:void 0,status:"",disabled:!1,value:void 0,formGroup:null,hasIcon:null,size:"",placeholder:"",rows:3,hint:null};var K=q,U=Object(E.a)(Object(E.a)({},x.defaults),{},{split:!1}),Y=function(e){var t=e.className,a=e.topOuterDivider,r=e.bottomOuterDivider,n=e.topDivider,l=e.bottomDivider,s=e.hasBgColor,o=e.invertColor,m=e.split,d=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","split"]),v=w()("cta section center-content-mobile reveal-from-bottom",a&&"has-top-divider",r&&"has-bottom-divider",s&&"has-bg-color",o&&"invert-color",t),u=w()("cta-inner section-inner",n&&"has-top-divider",l&&"has-bottom-divider",m&&"cta-split");return i.a.createElement("section",Object.assign({},d,{className:v}),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:u},i.a.createElement("div",{className:"cta-slogan"},i.a.createElement("h3",{className:"m-0"},"For previewing layouts and visual?")),i.a.createElement("div",{className:"cta-action"},i.a.createElement(K,{id:"newsletter",type:"email",label:"Subscribe",labelHidden:!0,hasIcon:"right",placeholder:"Your best email"},i.a.createElement("svg",{width:"16",height:"12",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("path",{d:"M9 5H1c-.6 0-1 .4-1 1s.4 1 1 1h8v5l7-6-7-6v5z",fill:"#376DF9"})))))))};Y.defaultProps=U;var $=Y,Q=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(P,{className:"illustration-section-01"}),i.a.createElement(H,null),i.a.createElement(_,{invertMobile:!0,topDivider:!0,imageFill:!0,className:"illustration-section-02"}),i.a.createElement(G,{topDivider:!0}),i.a.createElement($,{split:!0}))};h.a.initialize(Object({NODE_ENV:"production",PUBLIC_URL:"/mine",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_GA_CODE);var X=function(){var e=Object(r.useRef)(),t=Object(s.e)();return Object(r.useEffect)((function(){var a=t.pathname;document.body.classList.add("is-loaded"),e.current.init(),function(e){h.a.set({page:e}),h.a.pageview(e)}(a)}),[t]),i.a.createElement(f,{ref:e,children:function(){return i.a.createElement(s.d,null,i.a.createElement(m,{exact:!0,path:"/",component:Q,layout:g}),i.a.createElement(s.a,{to:"/"}))}})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(40);var Z=Object(o.a)();l.a.render(i.a.createElement(s.c,{history:Z},i.a.createElement(X,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[21,1,2]]]);
//# sourceMappingURL=main.49a79435.chunk.js.map