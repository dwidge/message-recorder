(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))_(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&_(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function _(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();var F,s,Ue,x,de,He,ne,Oe,D={},Ae=[],_t=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Y=Array.isArray;function C(e,t){for(var n in t)e[n]=t[n];return e}function Ve(e){var t=e.parentNode;t&&t.removeChild(e)}function E(e,t,n){var _,o,r,i={};for(r in t)r=="key"?_=t[r]:r=="ref"?o=t[r]:i[r]=t[r];if(arguments.length>2&&(i.children=arguments.length>3?F.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(r in e.defaultProps)i[r]===void 0&&(i[r]=e.defaultProps[r]);return A(e,i,_,o,null)}function A(e,t,n,_,o){var r={type:e,props:t,key:n,ref:_,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:o??++Ue,__i:-1,__u:0};return o==null&&s.vnode!=null&&s.vnode(r),r}function ot(){return{current:null}}function P(e){return e.children}function w(e,t){this.props=e,this.context=t}function M(e,t){if(t==null)return e.__?M(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?M(e):null}function De(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return De(e)}}function _e(e){(!e.__d&&(e.__d=!0)&&x.push(e)&&!K.__r++||de!==s.debounceRendering)&&((de=s.debounceRendering)||He)(K)}function K(){var e,t,n,_,o,r,i,l,c;for(x.sort(ne);e=x.shift();)e.__d&&(t=x.length,_=void 0,r=(o=(n=e).__v).__e,l=[],c=[],(i=n.__P)&&((_=C({},o)).__v=o.__v+1,le(i,_,o,n.__n,i.ownerSVGElement!==void 0,32&o.__u?[r]:null,l,r??M(o),!!(32&o.__u),c),_.__.__k[_.__i]=_,We(l,_,c),_.__e!=r&&De(_)),x.length>t&&x.sort(ne));K.__r=0}function Le(e,t,n,_,o,r,i,l,c,a,p){var u,d,f,m,$,y=_&&_.__k||Ae,v=t.length;for(n.__d=c,rt(n,t,y),c=n.__d,u=0;u<v;u++)(f=n.__k[u])!=null&&typeof f!="boolean"&&typeof f!="function"&&(d=f.__i===-1?D:y[f.__i]||D,f.__i=u,le(e,f,d,o,r,i,l,c,a,p),m=f.__e,f.ref&&d.ref!=f.ref&&(d.ref&&ce(d.ref,null,f),p.push(f.ref,f.__c||m,f)),$==null&&m!=null&&($=m),65536&f.__u||d.__k===f.__k?c=Fe(f,c,e):typeof f.type=="function"&&f.__d!==void 0?c=f.__d:m&&(c=m.nextSibling),f.__d=void 0,f.__u&=-196609);n.__d=c,n.__e=$}function rt(e,t,n){var _,o,r,i,l,c=t.length,a=n.length,p=a,u=0;for(e.__k=[],_=0;_<c;_++)(o=e.__k[_]=(o=t[_])==null||typeof o=="boolean"||typeof o=="function"?null:typeof o=="string"||typeof o=="number"||typeof o=="bigint"||o.constructor==String?A(null,o,null,null,o):Y(o)?A(P,{children:o},null,null,null):o.__b>0?A(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o)!=null?(o.__=e,o.__b=e.__b+1,l=it(o,n,i=_+u,p),o.__i=l,r=null,l!==-1&&(p--,(r=n[l])&&(r.__u|=131072)),r==null||r.__v===null?(l==-1&&u--,typeof o.type!="function"&&(o.__u|=65536)):l!==i&&(l===i+1?u++:l>i?p>c-i?u+=l-i:u--:u=l<i&&l==i-1?l-i:0,l!==_+u&&(o.__u|=65536))):(r=n[_])&&r.key==null&&r.__e&&(r.__e==e.__d&&(e.__d=M(r)),oe(r,r,!1),n[_]=null,p--);if(p)for(_=0;_<a;_++)(r=n[_])!=null&&!(131072&r.__u)&&(r.__e==e.__d&&(e.__d=M(r)),oe(r,r))}function Fe(e,t,n){var _,o;if(typeof e.type=="function"){for(_=e.__k,o=0;_&&o<_.length;o++)_[o]&&(_[o].__=e,t=Fe(_[o],t,n));return t}return e.__e!=t&&(n.insertBefore(e.__e,t||null),t=e.__e),t&&t.nextSibling}function S(e,t){return t=t||[],e==null||typeof e=="boolean"||(Y(e)?e.some(function(n){S(n,t)}):t.push(e)),t}function it(e,t,n,_){var o=e.key,r=e.type,i=n-1,l=n+1,c=t[n];if(c===null||c&&o==c.key&&r===c.type)return n;if(_>(c!=null&&!(131072&c.__u)?1:0))for(;i>=0||l<t.length;){if(i>=0){if((c=t[i])&&!(131072&c.__u)&&o==c.key&&r===c.type)return i;i--}if(l<t.length){if((c=t[l])&&!(131072&c.__u)&&o==c.key&&r===c.type)return l;l++}}return-1}function he(e,t,n){t[0]==="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||_t.test(t)?n:n+"px"}function j(e,t,n,_,o){var r;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof _=="string"&&(e.style.cssText=_=""),_)for(t in _)n&&t in n||he(e.style,t,"");if(n)for(t in n)_&&n[t]===_[t]||he(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")r=t!==(t=t.replace(/(PointerCapture)$|Capture$/,"$1")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+r]=n,n?_?n.u=_.u:(n.u=Date.now(),e.addEventListener(t,r?me:ve,r)):e.removeEventListener(t,r?me:ve,r);else{if(o)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="width"&&t!=="height"&&t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t!=="rowSpan"&&t!=="colSpan"&&t!=="role"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&t[4]!=="-"?e.removeAttribute(t):e.setAttribute(t,n))}}function ve(e){var t=this.l[e.type+!1];if(e.t){if(e.t<=t.u)return}else e.t=Date.now();return t(s.event?s.event(e):e)}function me(e){return this.l[e.type+!0](s.event?s.event(e):e)}function le(e,t,n,_,o,r,i,l,c,a){var p,u,d,f,m,$,y,v,g,N,W,H,pe,B,X,b=t.type;if(t.constructor!==void 0)return null;128&n.__u&&(c=!!(32&n.__u),r=[l=t.__e=n.__e]),(p=s.__b)&&p(t);e:if(typeof b=="function")try{if(v=t.props,g=(p=b.contextType)&&_[p.__c],N=p?g?g.props.value:p.__:_,n.__c?y=(u=t.__c=n.__c).__=u.__E:("prototype"in b&&b.prototype.render?t.__c=u=new b(v,N):(t.__c=u=new w(v,N),u.constructor=b,u.render=lt),g&&g.sub(u),u.props=v,u.state||(u.state={}),u.context=N,u.__n=_,d=u.__d=!0,u.__h=[],u._sb=[]),u.__s==null&&(u.__s=u.state),b.getDerivedStateFromProps!=null&&(u.__s==u.state&&(u.__s=C({},u.__s)),C(u.__s,b.getDerivedStateFromProps(v,u.__s))),f=u.props,m=u.state,u.__v=t,d)b.getDerivedStateFromProps==null&&u.componentWillMount!=null&&u.componentWillMount(),u.componentDidMount!=null&&u.__h.push(u.componentDidMount);else{if(b.getDerivedStateFromProps==null&&v!==f&&u.componentWillReceiveProps!=null&&u.componentWillReceiveProps(v,N),!u.__e&&(u.shouldComponentUpdate!=null&&u.shouldComponentUpdate(v,u.__s,N)===!1||t.__v===n.__v)){for(t.__v!==n.__v&&(u.props=v,u.state=u.__s,u.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(I){I&&(I.__=t)}),W=0;W<u._sb.length;W++)u.__h.push(u._sb[W]);u._sb=[],u.__h.length&&i.push(u);break e}u.componentWillUpdate!=null&&u.componentWillUpdate(v,u.__s,N),u.componentDidUpdate!=null&&u.__h.push(function(){u.componentDidUpdate(f,m,$)})}if(u.context=N,u.props=v,u.__P=e,u.__e=!1,H=s.__r,pe=0,"prototype"in b&&b.prototype.render){for(u.state=u.__s,u.__d=!1,H&&H(t),p=u.render(u.props,u.state,u.context),B=0;B<u._sb.length;B++)u.__h.push(u._sb[B]);u._sb=[]}else do u.__d=!1,H&&H(t),p=u.render(u.props,u.state,u.context),u.state=u.__s;while(u.__d&&++pe<25);u.state=u.__s,u.getChildContext!=null&&(_=C(C({},_),u.getChildContext())),d||u.getSnapshotBeforeUpdate==null||($=u.getSnapshotBeforeUpdate(f,m)),Le(e,Y(X=p!=null&&p.type===P&&p.key==null?p.props.children:p)?X:[X],t,n,_,o,r,i,l,c,a),u.base=t.__e,t.__u&=-161,u.__h.length&&i.push(u),y&&(u.__E=u.__=null)}catch(I){t.__v=null,c||r!=null?(t.__e=l,t.__u|=c?160:32,r[r.indexOf(l)]=null):(t.__e=n.__e,t.__k=n.__k),s.__e(I,t,n)}else r==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=ut(n.__e,t,n,_,o,r,i,c,a);(p=s.diffed)&&p(t)}function We(e,t,n){t.__d=void 0;for(var _=0;_<n.length;_++)ce(n[_],n[++_],n[++_]);s.__c&&s.__c(t,e),e.some(function(o){try{e=o.__h,o.__h=[],e.some(function(r){r.call(o)})}catch(r){s.__e(r,o.__v)}})}function ut(e,t,n,_,o,r,i,l,c){var a,p,u,d,f,m,$,y=n.props,v=t.props,g=t.type;if(g==="svg"&&(o=!0),r!=null){for(a=0;a<r.length;a++)if((f=r[a])&&"setAttribute"in f==!!g&&(g?f.localName===g:f.nodeType===3)){e=f,r[a]=null;break}}if(e==null){if(g===null)return document.createTextNode(v);e=o?document.createElementNS("http://www.w3.org/2000/svg",g):document.createElement(g,v.is&&v),r=null,l=!1}if(g===null)y===v||l&&e.data===v||(e.data=v);else{if(r=r&&F.call(e.childNodes),y=n.props||D,!l&&r!=null)for(y={},a=0;a<e.attributes.length;a++)y[(f=e.attributes[a]).name]=f.value;for(a in y)f=y[a],a=="children"||(a=="dangerouslySetInnerHTML"?u=f:a==="key"||a in v||j(e,a,null,f,o));for(a in v)f=v[a],a=="children"?d=f:a=="dangerouslySetInnerHTML"?p=f:a=="value"?m=f:a=="checked"?$=f:a==="key"||l&&typeof f!="function"||y[a]===f||j(e,a,f,y[a],o);if(p)l||u&&(p.__html===u.__html||p.__html===e.innerHTML)||(e.innerHTML=p.__html),t.__k=[];else if(u&&(e.innerHTML=""),Le(e,Y(d)?d:[d],t,n,_,o&&g!=="foreignObject",r,i,r?r[0]:n.__k&&M(n,0),l,c),r!=null)for(a=r.length;a--;)r[a]!=null&&Ve(r[a]);l||(a="value",m!==void 0&&(m!==e[a]||g==="progress"&&!m||g==="option"&&m!==y[a])&&j(e,a,m,y[a],!1),a="checked",$!==void 0&&$!==e[a]&&j(e,a,$,y[a],!1))}return e}function ce(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(_){s.__e(_,n)}}function oe(e,t,n){var _,o;if(s.unmount&&s.unmount(e),(_=e.ref)&&(_.current&&_.current!==e.__e||ce(_,null,t)),(_=e.__c)!=null){if(_.componentWillUnmount)try{_.componentWillUnmount()}catch(r){s.__e(r,t)}_.base=_.__P=null,e.__c=void 0}if(_=e.__k)for(o=0;o<_.length;o++)_[o]&&oe(_[o],t,n||typeof e.type!="function");n||e.__e==null||Ve(e.__e),e.__=e.__e=e.__d=void 0}function lt(e,t,n){return this.constructor(e,n)}function L(e,t,n){var _,o,r,i;s.__&&s.__(e,t),o=(_=typeof n=="function")?null:n&&n.__k||t.__k,r=[],i=[],le(t,e=(!_&&n||t).__k=E(P,null,[e]),o||D,D,t.ownerSVGElement!==void 0,!_&&n?[n]:o?null:t.firstChild?F.call(t.childNodes):null,r,!_&&n?n:o?o.__e:t.firstChild,_,i),We(r,e,i)}function Be(e,t){L(e,t,Be)}function ct(e,t,n){var _,o,r,i,l=C({},e.props);for(r in e.type&&e.type.defaultProps&&(i=e.type.defaultProps),t)r=="key"?_=t[r]:r=="ref"?o=t[r]:l[r]=t[r]===void 0&&i!==void 0?i[r]:t[r];return arguments.length>2&&(l.children=arguments.length>3?F.call(arguments,2):n),A(e.type,l,_||e.key,o||e.ref,null)}function at(e,t){var n={__c:t="__cC"+Oe++,__:e,Consumer:function(_,o){return _.children(o)},Provider:function(_){var o,r;return this.getChildContext||(o=[],(r={})[t]=this,this.getChildContext=function(){return r},this.shouldComponentUpdate=function(i){this.props.value!==i.value&&o.some(function(l){l.__e=!0,_e(l)})},this.sub=function(i){o.push(i);var l=i.componentWillUnmount;i.componentWillUnmount=function(){o.splice(o.indexOf(i),1),l&&l.call(i)}}),_.children}};return n.Provider.__=n.Consumer.contextType=n}F=Ae.slice,s={__e:function(e,t,n,_){for(var o,r,i;t=t.__;)if((o=t.__c)&&!o.__)try{if((r=o.constructor)&&r.getDerivedStateFromError!=null&&(o.setState(r.getDerivedStateFromError(e)),i=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(e,_||{}),i=o.__d),i)return o.__E=o}catch(l){e=l}throw e}},Ue=0,w.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=C({},this.state),typeof e=="function"&&(e=e(C({},n),this.props)),e&&C(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),_e(this))},w.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),_e(this))},w.prototype.render=P,x=[],He=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,ne=function(e,t){return e.__v.__b-t.__v.__b},K.__r=0,Oe=0;var st=0;function k(e,t,n,_,o,r){var i,l,c={};for(l in t)l=="ref"?i=t[l]:c[l]=t[l];var a={type:e,props:c,key:n,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--st,__i:-1,__u:0,__source:o,__self:r};if(typeof e=="function"&&(i=e.defaultProps))for(l in i)c[l]===void 0&&(c[l]=i[l]);return s.vnode&&s.vnode(a),a}var T,h,ee,ye,R=0,Ie=[],q=[],ge=s.__b,be=s.__r,ke=s.diffed,$e=s.__c,we=s.unmount;function U(e,t){s.__h&&s.__h(h,e,R||t),R=0;var n=h.__H||(h.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({__V:q}),n.__[e]}function V(e){return R=1,je(ze,e)}function je(e,t,n){var _=U(T++,2);if(_.t=e,!_.__c&&(_.__=[n?n(t):ze(void 0,t),function(l){var c=_.__N?_.__N[0]:_.__[0],a=_.t(c,l);c!==a&&(_.__N=[a,_.__[1]],_.__c.setState({}))}],_.__c=h,!h.u)){var o=function(l,c,a){if(!_.__c.__H)return!0;var p=_.__c.__H.__.filter(function(d){return d.__c});if(p.every(function(d){return!d.__N}))return!r||r.call(this,l,c,a);var u=!1;return p.forEach(function(d){if(d.__N){var f=d.__[0];d.__=d.__N,d.__N=void 0,f!==d.__[0]&&(u=!0)}}),!(!u&&_.__c.props===l)&&(!r||r.call(this,l,c,a))};h.u=!0;var r=h.shouldComponentUpdate,i=h.componentWillUpdate;h.componentWillUpdate=function(l,c,a){if(this.__e){var p=r;r=void 0,o(l,c,a),r=p}i&&i.call(this,l,c,a)},h.shouldComponentUpdate=o}return _.__N||_.__}function qe(e,t){var n=U(T++,3);!s.__s&&se(n.__H,t)&&(n.__=e,n.i=t,h.__H.__h.push(n))}function J(e,t){var n=U(T++,4);!s.__s&&se(n.__H,t)&&(n.__=e,n.i=t,h.__h.push(n))}function ft(e){return R=5,ae(function(){return{current:e}},[])}function pt(e,t,n){R=6,J(function(){return typeof e=="function"?(e(t()),function(){return e(null)}):e?(e.current=t(),function(){return e.current=null}):void 0},n==null?n:n.concat(e))}function ae(e,t){var n=U(T++,7);return se(n.__H,t)?(n.__V=e(),n.i=t,n.__h=e,n.__V):n.__}function dt(e,t){return R=8,ae(function(){return e},t)}function ht(e){var t=h.context[e.__c],n=U(T++,9);return n.c=e,t?(n.__==null&&(n.__=!0,t.sub(h)),t.props.value):e.__}function vt(e,t){s.useDebugValue&&s.useDebugValue(t?t(e):e)}function mt(){var e=U(T++,11);if(!e.__){for(var t=h.__v;t!==null&&!t.__m&&t.__!==null;)t=t.__;var n=t.__m||(t.__m=[0,0]);e.__="P"+n[0]+"-"+n[1]++}return e.__}function yt(){for(var e;e=Ie.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(z),e.__H.__h.forEach(re),e.__H.__h=[]}catch(t){e.__H.__h=[],s.__e(t,e.__v)}}s.__b=function(e){h=null,ge&&ge(e)},s.__r=function(e){be&&be(e),T=0;var t=(h=e.__c).__H;t&&(ee===h?(t.__h=[],h.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=q,n.__N=n.i=void 0})):(t.__h.forEach(z),t.__h.forEach(re),t.__h=[],T=0)),ee=h},s.diffed=function(e){ke&&ke(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Ie.push(t)!==1&&ye===s.requestAnimationFrame||((ye=s.requestAnimationFrame)||gt)(yt)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==q&&(n.__=n.__V),n.i=void 0,n.__V=q})),ee=h=null},s.__c=function(e,t){t.some(function(n){try{n.__h.forEach(z),n.__h=n.__h.filter(function(_){return!_.__||re(_)})}catch(_){t.some(function(o){o.__h&&(o.__h=[])}),t=[],s.__e(_,n.__v)}}),$e&&$e(e,t)},s.unmount=function(e){we&&we(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(_){try{z(_)}catch(o){t=o}}),n.__H=void 0,t&&s.__e(t,n.__v))};var Ce=typeof requestAnimationFrame=="function";function gt(e){var t,n=function(){clearTimeout(_),Ce&&cancelAnimationFrame(t),setTimeout(e)},_=setTimeout(n,100);Ce&&(t=requestAnimationFrame(n))}function z(e){var t=h,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),h=t}function re(e){var t=h;e.__c=e.__(),h=t}function se(e,t){return!e||e.length!==t.length||t.some(function(n,_){return n!==e[_]})}function ze(e,t){return typeof t=="function"?t(e):t}function Ge(e,t){for(var n in t)e[n]=t[n];return e}function ie(e,t){for(var n in e)if(n!=="__source"&&!(n in t))return!0;for(var _ in t)if(_!=="__source"&&e[_]!==t[_])return!0;return!1}function ue(e){this.props=e}function bt(e,t){function n(o){var r=this.props.ref,i=r==o.ref;return!i&&r&&(r.call?r(null):r.current=null),t?!t(this.props,o)||!i:ie(this.props,o)}function _(o){return this.shouldComponentUpdate=n,E(e,o)}return _.displayName="Memo("+(e.displayName||e.name)+")",_.prototype.isReactComponent=!0,_.__f=!0,_}(ue.prototype=new w).isPureReactComponent=!0,ue.prototype.shouldComponentUpdate=function(e,t){return ie(this.props,e)||ie(this.state,t)};var Se=s.__b;s.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),Se&&Se(e)};var kt=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function $t(e){function t(n){var _=Ge({},n);return delete _.ref,e(_,n.ref||null)}return t.$$typeof=kt,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(e.displayName||e.name)+")",t}var Ee=function(e,t){return e==null?null:S(S(e).map(t))},wt={map:Ee,forEach:Ee,count:function(e){return e?S(e).length:0},only:function(e){var t=S(e);if(t.length!==1)throw"Children.only";return t[0]},toArray:S},Ct=s.__e;s.__e=function(e,t,n,_){if(e.then){for(var o,r=t;r=r.__;)if((o=r.__c)&&o.__c)return t.__e==null&&(t.__e=n.__e,t.__k=n.__k),o.__c(e,t)}Ct(e,t,n,_)};var Pe=s.unmount;function Ze(e,t,n){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach(function(_){typeof _.__c=="function"&&_.__c()}),e.__c.__H=null),(e=Ge({},e)).__c!=null&&(e.__c.__P===n&&(e.__c.__P=t),e.__c=null),e.__k=e.__k&&e.__k.map(function(_){return Ze(_,t,n)})),e}function Ke(e,t,n){return e&&n&&(e.__v=null,e.__k=e.__k&&e.__k.map(function(_){return Ke(_,t,n)}),e.__c&&e.__c.__P===t&&(e.__e&&n.appendChild(e.__e),e.__c.__e=!0,e.__c.__P=n)),e}function G(){this.__u=0,this.t=null,this.__b=null}function Ye(e){var t=e.__.__c;return t&&t.__a&&t.__a(e)}function St(e){var t,n,_;function o(r){if(t||(t=e()).then(function(i){n=i.default||i},function(i){_=i}),_)throw _;if(!n)throw t;return E(n,r)}return o.displayName="Lazy",o.__f=!0,o}function O(){this.u=null,this.o=null}s.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&32&e.__u&&(e.type=null),Pe&&Pe(e)},(G.prototype=new w).__c=function(e,t){var n=t.__c,_=this;_.t==null&&(_.t=[]),_.t.push(n);var o=Ye(_.__v),r=!1,i=function(){r||(r=!0,n.__R=null,o?o(l):l())};n.__R=i;var l=function(){if(!--_.__u){if(_.state.__a){var c=_.state.__a;_.__v.__k[0]=Ke(c,c.__c.__P,c.__c.__O)}var a;for(_.setState({__a:_.__b=null});a=_.t.pop();)a.forceUpdate()}};_.__u++||32&t.__u||_.setState({__a:_.__b=_.__v.__k[0]}),e.then(i,i)},G.prototype.componentWillUnmount=function(){this.t=[]},G.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),_=this.__v.__k[0].__c;this.__v.__k[0]=Ze(this.__b,n,_.__O=_.__P)}this.__b=null}var o=t.__a&&E(P,null,e.fallback);return o&&(o.__u&=-33),[E(P,null,t.__a?null:e.children),o]};var Ne=function(e,t,n){if(++n[1]===n[0]&&e.o.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.o.size))for(n=e.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.u=n=n[2]}};function Et(e){return this.getChildContext=function(){return e.context},e.children}function Pt(e){var t=this,n=e.i;t.componentWillUnmount=function(){L(null,t.l),t.l=null,t.i=null},t.i&&t.i!==n&&t.componentWillUnmount(),t.l||(t.i=n,t.l={nodeType:1,parentNode:n,childNodes:[],appendChild:function(_){this.childNodes.push(_),t.i.appendChild(_)},insertBefore:function(_,o){this.childNodes.push(_),t.i.appendChild(_)},removeChild:function(_){this.childNodes.splice(this.childNodes.indexOf(_)>>>1,1),t.i.removeChild(_)}}),L(E(Et,{context:t.context},e.__v),t.l)}function Nt(e,t){var n=E(Pt,{__v:e,i:t});return n.containerInfo=t,n}(O.prototype=new w).__a=function(e){var t=this,n=Ye(t.__v),_=t.o.get(e);return _[0]++,function(o){var r=function(){t.props.revealOrder?(_.push(o),Ne(t,e,_)):o()};n?n(r):r()}},O.prototype.render=function(e){this.u=null,this.o=new Map;var t=S(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var n=t.length;n--;)this.o.set(t[n],this.u=[1,0,this.u]);return e.children},O.prototype.componentDidUpdate=O.prototype.componentDidMount=function(){var e=this;this.o.forEach(function(t,n){Ne(e,n,t)})};var Je=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,Tt=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,xt=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,Mt=/[A-Z0-9]/g,Rt=typeof document<"u",Ut=function(e){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(e)};function Qe(e,t,n){return t.__k==null&&(t.textContent=""),L(e,t),typeof n=="function"&&n(),e?e.__c:null}function Xe(e,t,n){return Be(e,t),typeof n=="function"&&n(),e?e.__c:null}w.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(w.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var Te=s.event;function Ht(){}function Ot(){return this.cancelBubble}function At(){return this.defaultPrevented}s.event=function(e){return Te&&(e=Te(e)),e.persist=Ht,e.isPropagationStopped=Ot,e.isDefaultPrevented=At,e.nativeEvent=e};var fe,Vt={enumerable:!1,configurable:!0,get:function(){return this.class}},xe=s.vnode;s.vnode=function(e){typeof e.type=="string"&&function(t){var n=t.props,_=t.type,o={};for(var r in n){var i=n[r];if(!(r==="value"&&"defaultValue"in n&&i==null||Rt&&r==="children"&&_==="noscript"||r==="class"||r==="className")){var l=r.toLowerCase();r==="defaultValue"&&"value"in n&&n.value==null?r="value":r==="download"&&i===!0?i="":l==="ondoubleclick"?r="ondblclick":l!=="onchange"||_!=="input"&&_!=="textarea"||Ut(n.type)?l==="onfocus"?r="onfocusin":l==="onblur"?r="onfocusout":xt.test(r)?r=l:_.indexOf("-")===-1&&Tt.test(r)?r=r.replace(Mt,"-$&").toLowerCase():i===null&&(i=void 0):l=r="oninput",l==="oninput"&&o[r=l]&&(r="oninputCapture"),o[r]=i}}_=="select"&&o.multiple&&Array.isArray(o.value)&&(o.value=S(n.children).forEach(function(c){c.props.selected=o.value.indexOf(c.props.value)!=-1})),_=="select"&&o.defaultValue!=null&&(o.value=S(n.children).forEach(function(c){c.props.selected=o.multiple?o.defaultValue.indexOf(c.props.value)!=-1:o.defaultValue==c.props.value})),n.class&&!n.className?(o.class=n.class,Object.defineProperty(o,"className",Vt)):(n.className&&!n.class||n.class&&n.className)&&(o.class=o.className=n.className),t.props=o}(e),e.$$typeof=Je,xe&&xe(e)};var Me=s.__r;s.__r=function(e){Me&&Me(e),fe=e.__c};var Re=s.diffed;s.diffed=function(e){Re&&Re(e);var t=e.props,n=e.__e;n!=null&&e.type==="textarea"&&"value"in t&&t.value!==n.value&&(n.value=t.value==null?"":t.value),fe=null};var Dt={ReactCurrentDispatcher:{current:{readContext:function(e){return fe.__n[e.__c].props.value}}}};function Lt(e){return E.bind(null,e)}function Q(e){return!!e&&e.$$typeof===Je}function Ft(e){return Q(e)&&e.type===P}function Wt(e){return Q(e)?ct.apply(null,arguments):e}function et(e){return!!e.__k&&(L(null,e),!0)}function Bt(e){return e&&(e.base||e.nodeType===1&&e)||null}var It=function(e,t){return e(t)},jt=function(e,t){return e(t)},qt=P;function tt(e){e()}function zt(e){return e}function Gt(){return[!1,tt]}var Zt=J,Kt=Q;function Yt(e,t){var n=t(),_=V({h:{__:n,v:t}}),o=_[0].h,r=_[1];return J(function(){o.__=n,o.v=t,te(o)&&r({h:o})},[e,n,t]),qe(function(){return te(o)&&r({h:o}),e(function(){te(o)&&r({h:o})})},[e]),n}function te(e){var t,n,_=e.v,o=e.__;try{var r=_();return!((t=o)===(n=r)&&(t!==0||1/t==1/n)||t!=t&&n!=n)}catch{return!0}}var Jt={useState:V,useId:mt,useReducer:je,useEffect:qe,useLayoutEffect:J,useInsertionEffect:Zt,useTransition:Gt,useDeferredValue:zt,useSyncExternalStore:Yt,startTransition:tt,useRef:ft,useImperativeHandle:pt,useMemo:ae,useCallback:dt,useContext:ht,useDebugValue:vt,version:"17.0.2",Children:wt,render:Qe,hydrate:Xe,unmountComponentAtNode:et,createPortal:Nt,createElement:E,createContext:at,createFactory:Lt,cloneElement:Wt,createRef:ot,Fragment:P,isValidElement:Q,isElement:Kt,isFragment:Ft,findDOMNode:Bt,Component:w,PureComponent:ue,memo:bt,forwardRef:$t,flushSync:jt,unstable_batchedUpdates:It,StrictMode:qt,Suspense:G,SuspenseList:O,lazy:St,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:Dt};function nt(e){return{render(t){Qe(t,e)},unmount(){et(e)}}}function Qt(e,t){return Xe(t,e),nt(e)}const Xt={createRoot:nt,hydrateRoot:Qt},en=(e,t)=>{const n=URL.createObjectURL(e),_=document.createElement("a");_.href=n,_.download=t,document.body.appendChild(_),_.click(),document.body.removeChild(_),URL.revokeObjectURL(n)},tn=(e,t,{fps:n=24,type:_="video/webm; codecs=h264"}={})=>new Promise(async o=>{const r=e.captureStream(n),i=new MediaRecorder(r),l=[];i.ondataavailable=c=>{l.push(c.data)},i.onstop=()=>{const c=new Blob(l,{type:_});o(c)},i.start(),await t(),i.stop()}),nn=e=>new Promise(t=>setTimeout(t,e)),_n=async(e,{width:t=1024,height:n=960,fps:_=24,type:o="video/webm; codecs=h264"}={})=>{const r=document.createElement("canvas");r.width=t,r.height=n;const i=r.getContext("2d");if(!i)throw new Error;return tn(r,async()=>{for(const l of e)on(i,l),await nn(1e3)},{fps:_,type:o})},on=(e,t)=>{const{width:n,height:_}=e.canvas;e.clearRect(0,0,n,_),e.fillStyle="black",e.fillRect(0,0,n,_),e.fillStyle="white",e.font="30px Arial",rn(e,t,30)};function rn(e,t,n){const{width:_,height:o}=e.canvas,r=e.measureText(t).width,i=(_-r)/2,l=(o-n)/2+n;e.fillText(t,i,l)}var Z={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.supportedAudioTypes=e.supportedVideoTypes=e.getSupportedMimeTypes=e.codecs=e.containers=e.medias=void 0,e.medias=["video","audio"],e.containers=["webm","ogg","mp3","mp4","x-matroska","3gpp","3gpp2","3gp2","quicktime","mpeg","aac","flac","x-flac","wave","wav","x-wav","x-pn-wav","not-supported"],e.codecs=["vp9","vp9.0","vp8","vp8.0","avc1","av1","av01","h265","h.265","h264","h.264","opus","vorbis","pcm","aac","mpeg","mp4a","rtx","red","ulpfec","g722","pcmu","pcma","cn","daala","telephone-event","not-supported"];function t(n,_,o){return[...new Set(_.flatMap(r=>n.flatMap(i=>[`${i}/${r}`]))),...new Set(_.flatMap(r=>o.flatMap(i=>n.flatMap(l=>[`${l}/${r};codecs=${i}`])))),...new Set(_.flatMap(r=>o.flatMap(i=>o.flatMap(l=>n.flatMap(c=>[`${c}/${r};codecs="${i}, ${l}"`])))))].filter(r=>MediaRecorder.isTypeSupported(r))}e.getSupportedMimeTypes=t,e.supportedVideoTypes=t(["video"],e.containers,e.codecs),e.supportedAudioTypes=t(["audio"],e.containers,e.codecs)})(Z);const un=e=>{var t;return(t=[["webm","webm"],["matroska","mkv"],["mp4","mp4"]].find(([n])=>e.includes(n)))==null?void 0:t[1]},ln=()=>{const[e,t]=V([]),[n,_]=V(null),[o,r]=V(Z.supportedVideoTypes[0]);return k("div",{children:[k("h1",{children:"Record Messages"}),k("textarea",{id:"textArray",placeholder:"Enter text lines separated by new lines",onChange:i=>{t(i.target.value.split(`
`))},rows:10,cols:50}),k("br",{}),k("button",{onClick:()=>{_(null),_n(e,{type:o}).then(_)},children:"Generate Video"}),k("button",{onClick:()=>n&&en(n,"record-messages."+(un(o)??"webm")),disabled:!n,children:"Download Video"}),k("select",{value:o,onChange:i=>r(i.target.value),children:Z.supportedVideoTypes.map(i=>k("option",{children:i}))}),k("h2",{children:"Supported types"}),k("textarea",{children:Z.supportedVideoTypes.join(`
`)})]})};Xt.createRoot(document.getElementById("root")).render(k(Jt.StrictMode,{children:k(ln,{})}));
