var n="id",e="value",t="class",r="type",u="style",o="text",i="radio",c="checkbox",f="id",w="type",a="className",s="value",d="checked",l="disabled",p="blur",h="change",m="click",g="dblclick",v="drag",b="dragend",y="dragenter",k="dragexit",x="dragleave",q="dragover",E="dragstart",j="drop",z="focus",A="input",L="keydown",N="keypress",B="keyup",C="load",D="mousedown",F="mouseenter",G="mouseleave",H="mousemove",I="mouseover",J="mouseup",K="pause",M="play",O="progress",P="resize",Q="scroll",R="touchcancel",S="touchend",T="touchmove",U="touchstart",V="transitioncancel",W="transitionend",X="transitionrun",Y="transitionstart",Z="wheel",$=function(){function n(n){this.dom=document.createElement(n)}return n.prototype.append=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var r=e.length;r--;)e[r]instanceof n&&(e[r]=e[r].dom);return this.dom.append.apply(this.dom,e),this},n.prototype.attrs=function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];for(var t=0;t<n.length;++t)this.dom.setAttribute(n[t],n[++t]);return this},n.prototype.props=function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];for(var t=0;t<n.length;++t)this.dom[n[t]]=n[++t];return this},n.prototype.events=function(n,e,t){return this.dom.addEventListener(n,e,t),this},n}();function _(){return new $("a")}function nn(){return new $("abbr")}function en(){return new $("address")}function tn(){return new $("area")}function rn(){return new $("article")}function un(){return new $("aside")}function on(){return new $("audio")}function cn(){return new $("b")}function fn(){return new $("bdi")}function wn(){return new $("bdo")}function an(){return new $("blockquote")}function sn(){return new $("br")}function dn(){return new $("button")}function ln(){return new $("canvas")}function pn(){return new $("caption")}function hn(){return new $("cite")}function mn(){return new $("code")}function gn(){return new $("col")}function vn(){return new $("colgroup")}function bn(){return new $("data")}function yn(){return new $("datalist")}function kn(){return new $("dd")}function xn(){return new $("del")}function qn(){return new $("details")}function En(){return new $("dfn")}function jn(){return new $("dialog")}function zn(){return new $("div")}function An(){return new $("dl")}function Ln(){return new $("dt")}function Nn(){return new $("em")}function Bn(){return new $("embed")}function Cn(){return new $("fieldset")}function Dn(){return new $("figcaption")}function Fn(){return new $("figure")}function Gn(){return new $("footer")}function Hn(){return new $("form")}function In(){return new $("h1")}function Jn(){return new $("h2")}function Kn(){return new $("h3")}function Mn(){return new $("h4")}function On(){return new $("h5")}function Pn(){return new $("h6")}function Qn(){return new $("header")}function Rn(){return new $("hr")}function Sn(){return new $("i")}function Tn(){return new $("iframe")}function Un(){return new $("img")}function Vn(){return new $("input")}function Wn(){return new $("ins")}function Xn(){return new $("kbd")}function Yn(){return new $("label")}function Zn(){return new $("legend")}function $n(){return new $("li")}function _n(){return new $("link")}function ne(){return new $("main")}function ee(){return new $("map")}function te(){return new $("mark")}function re(){return new $("meter")}function ue(){return new $("nav")}function oe(){return new $("object")}function ie(){return new $("ol")}function ce(){return new $("optgroup")}function fe(){return new $("option")}function we(){return new $("output")}function ae(){return new $("p")}function se(){return new $("param")}function de(){return new $("picture")}function le(){return new $("pre")}function pe(){return new $("progress")}function he(){return new $("q")}function me(){return new $("samp")}function ge(){return new $("section")}function ve(){return new $("select")}function be(){return new $("small")}function ye(){return new $("source")}function ke(){return new $("span")}function xe(){return new $("strong")}function qe(){return new $("sub")}function Ee(){return new $("textarea")}function je(){return new $("table")}function ze(){return new $("thead")}function Ae(){return new $("tbody")}function Le(){return new $("tfoot")}function Ne(){return new $("th")}function Be(){return new $("tr")}function Ce(){return new $("td")}function De(){return new $("time")}function Fe(){return new $("track")}function Ge(){return new $("ul")}function He(){return new $("var")}function Ie(){return new $("video")}export{t as ATTR_CLASS,n as ATTR_ID,u as ATTR_STYLE,r as ATTR_TYPE,e as ATTR_VALUE,p as EVENT_TYPE_BLUR,h as EVENT_TYPE_CHANGE,m as EVENT_TYPE_CLICK,g as EVENT_TYPE_DBLCLICK,v as EVENT_TYPE_DRAG,b as EVENT_TYPE_DRAGEND,y as EVENT_TYPE_DRAGENTER,k as EVENT_TYPE_DRAGEXIT,x as EVENT_TYPE_DRAGLEAVE,q as EVENT_TYPE_DRAGOVER,E as EVENT_TYPE_DRAGSTART,j as EVENT_TYPE_DROP,z as EVENT_TYPE_FOCUS,A as EVENT_TYPE_INPUT,L as EVENT_TYPE_KEYDOWN,N as EVENT_TYPE_KEYPRESS,B as EVENT_TYPE_KEYUP,C as EVENT_TYPE_LOAD,D as EVENT_TYPE_MOUSEDOWN,F as EVENT_TYPE_MOUSEENTER,G as EVENT_TYPE_MOUSELEAVE,H as EVENT_TYPE_MOUSEMOVE,I as EVENT_TYPE_MOUSEOVER,J as EVENT_TYPE_MOUSEUP,K as EVENT_TYPE_PAUSE,M as EVENT_TYPE_PLAY,O as EVENT_TYPE_PROGRESS,P as EVENT_TYPE_RESIZE,Q as EVENT_TYPE_SCROLL,R as EVENT_TYPE_TOUCHCANCEL,S as EVENT_TYPE_TOUCHEND,T as EVENT_TYPE_TOUCHMOVE,U as EVENT_TYPE_TOUCHSTART,V as EVENT_TYPE_TRANSITIONCANCEL,W as EVENT_TYPE_TRANSITIONEND,X as EVENT_TYPE_TRANSITIONRUN,Y as EVENT_TYPE_TRANSITIONSTART,Z as EVENT_TYPE_WHEEL,c as INPUT_TYPE_CHECKBOX,i as INPUT_TYPE_RADIO,o as INPUT_TYPE_TEXT,d as PROP_CHECKED,a as PROP_CLASS,l as PROP_DISABLED,f as PROP_ID,w as PROP_TYPE,s as PROP_VALUE,nn as createAbbr,en as createAddress,_ as createAnchor,tn as createArea,rn as createArticle,un as createAside,on as createAudio,fn as createBdi,wn as createBdo,an as createBlockQuote,cn as createBold,sn as createBr,dn as createButton,ln as createCanvas,pn as createCaption,hn as createCite,mn as createCode,gn as createCol,vn as createColGroup,bn as createData,yn as createDataList,kn as createDd,xn as createDel,qn as createDetails,En as createDfn,jn as createDialog,zn as createDiv,An as createDl,Ln as createDt,Nn as createEm,Bn as createEmbed,Cn as createFieldSet,Dn as createFigCaption,Fn as createFigure,Gn as createFooter,Hn as createForm,In as createH1,Jn as createH2,Kn as createH3,Mn as createH4,On as createH5,Pn as createH6,Qn as createHeader,Rn as createHr,Tn as createIframe,Un as createImg,Vn as createInput,Wn as createIns,Sn as createItalic,Xn as createKbd,Yn as createLabel,Zn as createLegend,$n as createLi,_n as createLink,ne as createMain,ee as createMap,te as createMark,re as createMeter,ue as createNav,oe as createObject,ie as createOl,ce as createOptGroup,fe as createOption,we as createOutput,ae as createParagraph,se as createParam,de as createPicture,le as createPre,pe as createProgress,he as createQuote,me as createSamp,ge as createSection,ve as createSelect,be as createSmall,ye as createSource,ke as createSpan,xe as createStrong,qe as createSub,je as createTable,Ae as createTbody,Ce as createTd,Ee as createTextArea,Le as createTfoot,Ne as createTh,ze as createThead,De as createTime,Be as createTr,Fe as createTrack,Ge as createUl,He as createVar,Ie as createVideo};
