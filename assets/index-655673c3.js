var yt=Object.defineProperty;var bt=(e,t,n)=>t in e?yt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var R=(e,t,n)=>(bt(e,typeof t!="symbol"?t+"":t,n),n),Le=(e,t,n)=>{if(!t.has(e))throw TypeError("Cannot "+n)};var p=(e,t,n)=>(Le(e,t,"read from private field"),n?n.call(e):t.get(e)),x=(e,t,n)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,n)},G=(e,t,n,r)=>(Le(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const _ of o)if(_.type==="childList")for(const u of _.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const _={};return o.integrity&&(_.integrity=o.integrity),o.referrerPolicy&&(_.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?_.credentials="include":o.crossOrigin==="anonymous"?_.credentials="omit":_.credentials="same-origin",_}function r(o){if(o.ep)return;o.ep=!0;const _=n(o);fetch(o.href,_)}})();var K,s,Xe,H,De,Ze,pe,Ye,Z={},Ke=[],Et=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,ae=Array.isArray;function $(e,t){for(var n in t)e[n]=t[n];return e}function Je(e){var t=e.parentNode;t&&t.removeChild(e)}function A(e,t,n){var r,o,_,u={};for(_ in t)_=="key"?r=t[_]:_=="ref"?o=t[_]:u[_]=t[_];if(arguments.length>2&&(u.children=arguments.length>3?K.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(_ in e.defaultProps)u[_]===void 0&&(u[_]=e.defaultProps[_]);return X(e,u,r,o,null)}function X(e,t,n,r,o){var _={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:o??++Xe,__i:-1,__u:0};return o==null&&s.vnode!=null&&s.vnode(_),_}function gt(){return{current:null}}function S(e){return e.children}function N(e,t){this.props=e,this.context=t}function B(e,t){if(t==null)return e.__?B(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?B(e):null}function Qe(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return Qe(e)}}function he(e){(!e.__d&&(e.__d=!0)&&H.push(e)&&!_e.__r++||De!==s.debounceRendering)&&((De=s.debounceRendering)||Ze)(_e)}function _e(){var e,t,n,r,o,_,u,a,c;for(H.sort(pe);e=H.shift();)e.__d&&(t=H.length,r=void 0,_=(o=(n=e).__v).__e,a=[],c=[],(u=n.__P)&&((r=$({},o)).__v=o.__v+1,Ee(u,r,o,n.__n,u.ownerSVGElement!==void 0,32&o.__u?[_]:null,a,_??B(o),!!(32&o.__u),c),r.__.__k[r.__i]=r,nt(a,r,c),r.__e!=_&&Qe(r)),H.length>t&&H.sort(pe));_e.__r=0}function et(e,t,n,r,o,_,u,a,c,l,d){var i,h,f,b,D,E=r&&r.__k||Ke,y=t.length;for(n.__d=c,wt(n,t,E),c=n.__d,i=0;i<y;i++)(f=n.__k[i])!=null&&typeof f!="boolean"&&typeof f!="function"&&(h=f.__i===-1?Z:E[f.__i]||Z,f.__i=i,Ee(e,f,h,o,_,u,a,c,l,d),b=f.__e,f.ref&&h.ref!=f.ref&&(h.ref&&ge(h.ref,null,f),d.push(f.ref,f.__c||b,f)),D==null&&b!=null&&(D=b),65536&f.__u||h.__k===f.__k?c=tt(f,c,e):typeof f.type=="function"&&f.__d!==void 0?c=f.__d:b&&(c=b.nextSibling),f.__d=void 0,f.__u&=-196609);n.__d=c,n.__e=D}function wt(e,t,n){var r,o,_,u,a,c=t.length,l=n.length,d=l,i=0;for(e.__k=[],r=0;r<c;r++)(o=e.__k[r]=(o=t[r])==null||typeof o=="boolean"||typeof o=="function"?null:typeof o=="string"||typeof o=="number"||typeof o=="bigint"||o.constructor==String?X(null,o,null,null,o):ae(o)?X(S,{children:o},null,null,null):o.__b>0?X(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o)!=null?(o.__=e,o.__b=e.__b+1,a=Rt(o,n,u=r+i,d),o.__i=a,_=null,a!==-1&&(d--,(_=n[a])&&(_.__u|=131072)),_==null||_.__v===null?(a==-1&&i--,typeof o.type!="function"&&(o.__u|=65536)):a!==u&&(a===u+1?i++:a>u?d>c-u?i+=a-u:i--:i=a<u&&a==u-1?a-u:0,a!==r+i&&(o.__u|=65536))):(_=n[r])&&_.key==null&&_.__e&&(_.__e==e.__d&&(e.__d=B(_)),ve(_,_,!1),n[r]=null,d--);if(d)for(r=0;r<l;r++)(_=n[r])!=null&&!(131072&_.__u)&&(_.__e==e.__d&&(e.__d=B(_)),ve(_,_))}function tt(e,t,n){var r,o;if(typeof e.type=="function"){for(r=e.__k,o=0;r&&o<r.length;o++)r[o]&&(r[o].__=e,t=tt(r[o],t,n));return t}return e.__e!=t&&(n.insertBefore(e.__e,t||null),t=e.__e),t&&t.nextSibling}function U(e,t){return t=t||[],e==null||typeof e=="boolean"||(ae(e)?e.some(function(n){U(n,t)}):t.push(e)),t}function Rt(e,t,n,r){var o=e.key,_=e.type,u=n-1,a=n+1,c=t[n];if(c===null||c&&o==c.key&&_===c.type)return n;if(r>(c!=null&&!(131072&c.__u)?1:0))for(;u>=0||a<t.length;){if(u>=0){if((c=t[u])&&!(131072&c.__u)&&o==c.key&&_===c.type)return u;u--}if(a<t.length){if((c=t[a])&&!(131072&c.__u)&&o==c.key&&_===c.type)return a;a++}}return-1}function Ne(e,t,n){t[0]==="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||Et.test(t)?n:n+"px"}function te(e,t,n,r,o){var _;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||Ne(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||Ne(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")_=t!==(t=t.replace(/(PointerCapture)$|Capture$/,"$1")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+_]=n,n?r?n.u=r.u:(n.u=Date.now(),e.addEventListener(t,_?$e:Oe,_)):e.removeEventListener(t,_?$e:Oe,_);else{if(o)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="width"&&t!=="height"&&t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t!=="rowSpan"&&t!=="colSpan"&&t!=="role"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&t[4]!=="-"?e.removeAttribute(t):e.setAttribute(t,n))}}function Oe(e){var t=this.l[e.type+!1];if(e.t){if(e.t<=t.u)return}else e.t=Date.now();return t(s.event?s.event(e):e)}function $e(e){return this.l[e.type+!0](s.event?s.event(e):e)}function Ee(e,t,n,r,o,_,u,a,c,l){var d,i,h,f,b,D,E,y,g,P,J,z,Ce,Q,se,L=t.type;if(t.constructor!==void 0)return null;128&n.__u&&(c=!!(32&n.__u),_=[a=t.__e=n.__e]),(d=s.__b)&&d(t);e:if(typeof L=="function")try{if(y=t.props,g=(d=L.contextType)&&r[d.__c],P=d?g?g.props.value:d.__:r,n.__c?E=(i=t.__c=n.__c).__=i.__E:("prototype"in L&&L.prototype.render?t.__c=i=new L(y,P):(t.__c=i=new N(y,P),i.constructor=L,i.render=Ct),g&&g.sub(i),i.props=y,i.state||(i.state={}),i.context=P,i.__n=r,h=i.__d=!0,i.__h=[],i._sb=[]),i.__s==null&&(i.__s=i.state),L.getDerivedStateFromProps!=null&&(i.__s==i.state&&(i.__s=$({},i.__s)),$(i.__s,L.getDerivedStateFromProps(y,i.__s))),f=i.props,b=i.state,i.__v=t,h)L.getDerivedStateFromProps==null&&i.componentWillMount!=null&&i.componentWillMount(),i.componentDidMount!=null&&i.__h.push(i.componentDidMount);else{if(L.getDerivedStateFromProps==null&&y!==f&&i.componentWillReceiveProps!=null&&i.componentWillReceiveProps(y,P),!i.__e&&(i.shouldComponentUpdate!=null&&i.shouldComponentUpdate(y,i.__s,P)===!1||t.__v===n.__v)){for(t.__v!==n.__v&&(i.props=y,i.state=i.__s,i.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(ee){ee&&(ee.__=t)}),J=0;J<i._sb.length;J++)i.__h.push(i._sb[J]);i._sb=[],i.__h.length&&u.push(i);break e}i.componentWillUpdate!=null&&i.componentWillUpdate(y,i.__s,P),i.componentDidUpdate!=null&&i.__h.push(function(){i.componentDidUpdate(f,b,D)})}if(i.context=P,i.props=y,i.__P=e,i.__e=!1,z=s.__r,Ce=0,"prototype"in L&&L.prototype.render){for(i.state=i.__s,i.__d=!1,z&&z(t),d=i.render(i.props,i.state,i.context),Q=0;Q<i._sb.length;Q++)i.__h.push(i._sb[Q]);i._sb=[]}else do i.__d=!1,z&&z(t),d=i.render(i.props,i.state,i.context),i.state=i.__s;while(i.__d&&++Ce<25);i.state=i.__s,i.getChildContext!=null&&(r=$($({},r),i.getChildContext())),h||i.getSnapshotBeforeUpdate==null||(D=i.getSnapshotBeforeUpdate(f,b)),et(e,ae(se=d!=null&&d.type===S&&d.key==null?d.props.children:d)?se:[se],t,n,r,o,_,u,a,c,l),i.base=t.__e,t.__u&=-161,i.__h.length&&u.push(i),E&&(i.__E=i.__=null)}catch(ee){t.__v=null,c||_!=null?(t.__e=a,t.__u|=c?160:32,_[_.indexOf(a)]=null):(t.__e=n.__e,t.__k=n.__k),s.__e(ee,t,n)}else _==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=kt(n.__e,t,n,r,o,_,u,c,l);(d=s.diffed)&&d(t)}function nt(e,t,n){t.__d=void 0;for(var r=0;r<n.length;r++)ge(n[r],n[++r],n[++r]);s.__c&&s.__c(t,e),e.some(function(o){try{e=o.__h,o.__h=[],e.some(function(_){_.call(o)})}catch(_){s.__e(_,o.__v)}})}function kt(e,t,n,r,o,_,u,a,c){var l,d,i,h,f,b,D,E=n.props,y=t.props,g=t.type;if(g==="svg"&&(o=!0),_!=null){for(l=0;l<_.length;l++)if((f=_[l])&&"setAttribute"in f==!!g&&(g?f.localName===g:f.nodeType===3)){e=f,_[l]=null;break}}if(e==null){if(g===null)return document.createTextNode(y);e=o?document.createElementNS("http://www.w3.org/2000/svg",g):document.createElement(g,y.is&&y),_=null,a=!1}if(g===null)E===y||a&&e.data===y||(e.data=y);else{if(_=_&&K.call(e.childNodes),E=n.props||Z,!a&&_!=null)for(E={},l=0;l<e.attributes.length;l++)E[(f=e.attributes[l]).name]=f.value;for(l in E)f=E[l],l=="children"||(l=="dangerouslySetInnerHTML"?i=f:l==="key"||l in y||te(e,l,null,f,o));for(l in y)f=y[l],l=="children"?h=f:l=="dangerouslySetInnerHTML"?d=f:l=="value"?b=f:l=="checked"?D=f:l==="key"||a&&typeof f!="function"||E[l]===f||te(e,l,f,E[l],o);if(d)a||i&&(d.__html===i.__html||d.__html===e.innerHTML)||(e.innerHTML=d.__html),t.__k=[];else if(i&&(e.innerHTML=""),et(e,ae(h)?h:[h],t,n,r,o&&g!=="foreignObject",_,u,_?_[0]:n.__k&&B(n,0),a,c),_!=null)for(l=_.length;l--;)_[l]!=null&&Je(_[l]);a||(l="value",b!==void 0&&(b!==e[l]||g==="progress"&&!b||g==="option"&&b!==E[l])&&te(e,l,b,E[l],!1),l="checked",D!==void 0&&D!==e[l]&&te(e,l,D,E[l],!1))}return e}function ge(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(r){s.__e(r,n)}}function ve(e,t,n){var r,o;if(s.unmount&&s.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||ge(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(_){s.__e(_,t)}r.base=r.__P=null,e.__c=void 0}if(r=e.__k)for(o=0;o<r.length;o++)r[o]&&ve(r[o],t,n||typeof e.type!="function");n||e.__e==null||Je(e.__e),e.__=e.__e=e.__d=void 0}function Ct(e,t,n){return this.constructor(e,n)}function Y(e,t,n){var r,o,_,u;s.__&&s.__(e,t),o=(r=typeof n=="function")?null:n&&n.__k||t.__k,_=[],u=[],Ee(t,e=(!r&&n||t).__k=A(S,null,[e]),o||Z,Z,t.ownerSVGElement!==void 0,!r&&n?[n]:o?null:t.firstChild?K.call(t.childNodes):null,_,!r&&n?n:o?o.__e:t.firstChild,r,u),nt(_,e,u)}function rt(e,t){Y(e,t,rt)}function Lt(e,t,n){var r,o,_,u,a=$({},e.props);for(_ in e.type&&e.type.defaultProps&&(u=e.type.defaultProps),t)_=="key"?r=t[_]:_=="ref"?o=t[_]:a[_]=t[_]===void 0&&u!==void 0?u[_]:t[_];return arguments.length>2&&(a.children=arguments.length>3?K.call(arguments,2):n),X(e.type,a,r||e.key,o||e.ref,null)}function Dt(e,t){var n={__c:t="__cC"+Ye++,__:e,Consumer:function(r,o){return r.children(o)},Provider:function(r){var o,_;return this.getChildContext||(o=[],(_={})[t]=this,this.getChildContext=function(){return _},this.shouldComponentUpdate=function(u){this.props.value!==u.value&&o.some(function(a){a.__e=!0,he(a)})},this.sub=function(u){o.push(u);var a=u.componentWillUnmount;u.componentWillUnmount=function(){o.splice(o.indexOf(u),1),a&&a.call(u)}}),r.children}};return n.Provider.__=n.Consumer.contextType=n}K=Ke.slice,s={__e:function(e,t,n,r){for(var o,_,u;t=t.__;)if((o=t.__c)&&!o.__)try{if((_=o.constructor)&&_.getDerivedStateFromError!=null&&(o.setState(_.getDerivedStateFromError(e)),u=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(e,r||{}),u=o.__d),u)return o.__E=o}catch(a){e=a}throw e}},Xe=0,N.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=$({},this.state),typeof e=="function"&&(e=e($({},n),this.props)),e&&$(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),he(this))},N.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),he(this))},N.prototype.render=S,H=[],Ze=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,pe=function(e,t){return e.__v.__b-t.__v.__b},_e.__r=0,Ye=0;var Nt=0;function w(e,t,n,r,o,_){var u,a,c={};for(a in t)a=="ref"?u=t[a]:c[a]=t[a];var l={type:e,props:c,key:n,ref:u,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--Nt,__i:-1,__u:0,__source:o,__self:_};if(typeof e=="function"&&(u=e.defaultProps))for(a in u)c[a]===void 0&&(c[a]=u[a]);return s.vnode&&s.vnode(l),l}var T,m,fe,Ue,F=0,ot=[],ne=[],Ae=s.__b,Se=s.__r,Pe=s.diffed,xe=s.__c,Ie=s.unmount;function j(e,t){s.__h&&s.__h(m,e,F||t),F=0;var n=m.__H||(m.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({__V:ne}),n.__[e]}function V(e){return F=1,_t(ut,e)}function _t(e,t,n){var r=j(T++,2);if(r.t=e,!r.__c&&(r.__=[n?n(t):ut(void 0,t),function(a){var c=r.__N?r.__N[0]:r.__[0],l=r.t(c,a);c!==l&&(r.__N=[l,r.__[1]],r.__c.setState({}))}],r.__c=m,!m.u)){var o=function(a,c,l){if(!r.__c.__H)return!0;var d=r.__c.__H.__.filter(function(h){return h.__c});if(d.every(function(h){return!h.__N}))return!_||_.call(this,a,c,l);var i=!1;return d.forEach(function(h){if(h.__N){var f=h.__[0];h.__=h.__N,h.__N=void 0,f!==h.__[0]&&(i=!0)}}),!(!i&&r.__c.props===a)&&(!_||_.call(this,a,c,l))};m.u=!0;var _=m.shouldComponentUpdate,u=m.componentWillUpdate;m.componentWillUpdate=function(a,c,l){if(this.__e){var d=_;_=void 0,o(a,c,l),_=d}u&&u.call(this,a,c,l)},m.shouldComponentUpdate=o}return r.__N||r.__}function ie(e,t){var n=j(T++,3);!s.__s&&Re(n.__H,t)&&(n.__=e,n.i=t,m.__H.__h.push(n))}function ce(e,t){var n=j(T++,4);!s.__s&&Re(n.__H,t)&&(n.__=e,n.i=t,m.__h.push(n))}function it(e){return F=5,we(function(){return{current:e}},[])}function Ot(e,t,n){F=6,ce(function(){return typeof e=="function"?(e(t()),function(){return e(null)}):e?(e.current=t(),function(){return e.current=null}):void 0},n==null?n:n.concat(e))}function we(e,t){var n=j(T++,7);return Re(n.__H,t)?(n.__V=e(),n.i=t,n.__h=e,n.__V):n.__}function $t(e,t){return F=8,we(function(){return e},t)}function Ut(e){var t=m.context[e.__c],n=j(T++,9);return n.c=e,t?(n.__==null&&(n.__=!0,t.sub(m)),t.props.value):e.__}function At(e,t){s.useDebugValue&&s.useDebugValue(t?t(e):e)}function St(){var e=j(T++,11);if(!e.__){for(var t=m.__v;t!==null&&!t.__m&&t.__!==null;)t=t.__;var n=t.__m||(t.__m=[0,0]);e.__="P"+n[0]+"-"+n[1]++}return e.__}function Pt(){for(var e;e=ot.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(re),e.__H.__h.forEach(me),e.__H.__h=[]}catch(t){e.__H.__h=[],s.__e(t,e.__v)}}s.__b=function(e){m=null,Ae&&Ae(e)},s.__r=function(e){Se&&Se(e),T=0;var t=(m=e.__c).__H;t&&(fe===m?(t.__h=[],m.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=ne,n.__N=n.i=void 0})):(t.__h.forEach(re),t.__h.forEach(me),t.__h=[],T=0)),fe=m},s.diffed=function(e){Pe&&Pe(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(ot.push(t)!==1&&Ue===s.requestAnimationFrame||((Ue=s.requestAnimationFrame)||xt)(Pt)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==ne&&(n.__=n.__V),n.i=void 0,n.__V=ne})),fe=m=null},s.__c=function(e,t){t.some(function(n){try{n.__h.forEach(re),n.__h=n.__h.filter(function(r){return!r.__||me(r)})}catch(r){t.some(function(o){o.__h&&(o.__h=[])}),t=[],s.__e(r,n.__v)}}),xe&&xe(e,t)},s.unmount=function(e){Ie&&Ie(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{re(r)}catch(o){t=o}}),n.__H=void 0,t&&s.__e(t,n.__v))};var Te=typeof requestAnimationFrame=="function";function xt(e){var t,n=function(){clearTimeout(r),Te&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,100);Te&&(t=requestAnimationFrame(n))}function re(e){var t=m,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),m=t}function me(e){var t=m;e.__c=e.__(),m=t}function Re(e,t){return!e||e.length!==t.length||t.some(function(n,r){return n!==e[r]})}function ut(e,t){return typeof t=="function"?t(e):t}function at(e,t){for(var n in t)e[n]=t[n];return e}function ye(e,t){for(var n in e)if(n!=="__source"&&!(n in t))return!0;for(var r in t)if(r!=="__source"&&e[r]!==t[r])return!0;return!1}function be(e){this.props=e}function It(e,t){function n(o){var _=this.props.ref,u=_==o.ref;return!u&&_&&(_.call?_(null):_.current=null),t?!t(this.props,o)||!u:ye(this.props,o)}function r(o){return this.shouldComponentUpdate=n,A(e,o)}return r.displayName="Memo("+(e.displayName||e.name)+")",r.prototype.isReactComponent=!0,r.__f=!0,r}(be.prototype=new N).isPureReactComponent=!0,be.prototype.shouldComponentUpdate=function(e,t){return ye(this.props,e)||ye(this.state,t)};var He=s.__b;s.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),He&&He(e)};var Tt=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function Ht(e){function t(n){var r=at({},n);return delete r.ref,e(r,n.ref||null)}return t.$$typeof=Tt,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(e.displayName||e.name)+")",t}var Me=function(e,t){return e==null?null:U(U(e).map(t))},Mt={map:Me,forEach:Me,count:function(e){return e?U(e).length:0},only:function(e){var t=U(e);if(t.length!==1)throw"Children.only";return t[0]},toArray:U},Wt=s.__e;s.__e=function(e,t,n,r){if(e.then){for(var o,_=t;_=_.__;)if((o=_.__c)&&o.__c)return t.__e==null&&(t.__e=n.__e,t.__k=n.__k),o.__c(e,t)}Wt(e,t,n,r)};var We=s.unmount;function ct(e,t,n){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach(function(r){typeof r.__c=="function"&&r.__c()}),e.__c.__H=null),(e=at({},e)).__c!=null&&(e.__c.__P===n&&(e.__c.__P=t),e.__c=null),e.__k=e.__k&&e.__k.map(function(r){return ct(r,t,n)})),e}function lt(e,t,n){return e&&n&&(e.__v=null,e.__k=e.__k&&e.__k.map(function(r){return lt(r,t,n)}),e.__c&&e.__c.__P===t&&(e.__e&&n.appendChild(e.__e),e.__c.__e=!0,e.__c.__P=n)),e}function oe(){this.__u=0,this.t=null,this.__b=null}function st(e){var t=e.__.__c;return t&&t.__a&&t.__a(e)}function Vt(e){var t,n,r;function o(_){if(t||(t=e()).then(function(u){n=u.default||u},function(u){r=u}),r)throw r;if(!n)throw t;return A(n,_)}return o.displayName="Lazy",o.__f=!0,o}function q(){this.u=null,this.o=null}s.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&32&e.__u&&(e.type=null),We&&We(e)},(oe.prototype=new N).__c=function(e,t){var n=t.__c,r=this;r.t==null&&(r.t=[]),r.t.push(n);var o=st(r.__v),_=!1,u=function(){_||(_=!0,n.__R=null,o?o(a):a())};n.__R=u;var a=function(){if(!--r.__u){if(r.state.__a){var c=r.state.__a;r.__v.__k[0]=lt(c,c.__c.__P,c.__c.__O)}var l;for(r.setState({__a:r.__b=null});l=r.t.pop();)l.forceUpdate()}};r.__u++||32&t.__u||r.setState({__a:r.__b=r.__v.__k[0]}),e.then(u,u)},oe.prototype.componentWillUnmount=function(){this.t=[]},oe.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=ct(this.__b,n,r.__O=r.__P)}this.__b=null}var o=t.__a&&A(S,null,e.fallback);return o&&(o.__u&=-33),[A(S,null,t.__a?null:e.children),o]};var Ve=function(e,t,n){if(++n[1]===n[0]&&e.o.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.o.size))for(n=e.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.u=n=n[2]}};function Bt(e){return this.getChildContext=function(){return e.context},e.children}function Ft(e){var t=this,n=e.i;t.componentWillUnmount=function(){Y(null,t.l),t.l=null,t.i=null},t.i&&t.i!==n&&t.componentWillUnmount(),t.l||(t.i=n,t.l={nodeType:1,parentNode:n,childNodes:[],appendChild:function(r){this.childNodes.push(r),t.i.appendChild(r)},insertBefore:function(r,o){this.childNodes.push(r),t.i.appendChild(r)},removeChild:function(r){this.childNodes.splice(this.childNodes.indexOf(r)>>>1,1),t.i.removeChild(r)}}),Y(A(Bt,{context:t.context},e.__v),t.l)}function jt(e,t){var n=A(Ft,{__v:e,i:t});return n.containerInfo=t,n}(q.prototype=new N).__a=function(e){var t=this,n=st(t.__v),r=t.o.get(e);return r[0]++,function(o){var _=function(){t.props.revealOrder?(r.push(o),Ve(t,e,r)):o()};n?n(_):_()}},q.prototype.render=function(e){this.u=null,this.o=new Map;var t=U(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var n=t.length;n--;)this.o.set(t[n],this.u=[1,0,this.u]);return e.children},q.prototype.componentDidUpdate=q.prototype.componentDidMount=function(){var e=this;this.o.forEach(function(t,n){Ve(e,n,t)})};var ft=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,zt=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,Gt=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,qt=/[A-Z0-9]/g,Xt=typeof document<"u",Zt=function(e){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(e)};function dt(e,t,n){return t.__k==null&&(t.textContent=""),Y(e,t),typeof n=="function"&&n(),e?e.__c:null}function pt(e,t,n){return rt(e,t),typeof n=="function"&&n(),e?e.__c:null}N.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(N.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var Be=s.event;function Yt(){}function Kt(){return this.cancelBubble}function Jt(){return this.defaultPrevented}s.event=function(e){return Be&&(e=Be(e)),e.persist=Yt,e.isPropagationStopped=Kt,e.isDefaultPrevented=Jt,e.nativeEvent=e};var ke,Qt={enumerable:!1,configurable:!0,get:function(){return this.class}},Fe=s.vnode;s.vnode=function(e){typeof e.type=="string"&&function(t){var n=t.props,r=t.type,o={};for(var _ in n){var u=n[_];if(!(_==="value"&&"defaultValue"in n&&u==null||Xt&&_==="children"&&r==="noscript"||_==="class"||_==="className")){var a=_.toLowerCase();_==="defaultValue"&&"value"in n&&n.value==null?_="value":_==="download"&&u===!0?u="":a==="ondoubleclick"?_="ondblclick":a!=="onchange"||r!=="input"&&r!=="textarea"||Zt(n.type)?a==="onfocus"?_="onfocusin":a==="onblur"?_="onfocusout":Gt.test(_)?_=a:r.indexOf("-")===-1&&zt.test(_)?_=_.replace(qt,"-$&").toLowerCase():u===null&&(u=void 0):a=_="oninput",a==="oninput"&&o[_=a]&&(_="oninputCapture"),o[_]=u}}r=="select"&&o.multiple&&Array.isArray(o.value)&&(o.value=U(n.children).forEach(function(c){c.props.selected=o.value.indexOf(c.props.value)!=-1})),r=="select"&&o.defaultValue!=null&&(o.value=U(n.children).forEach(function(c){c.props.selected=o.multiple?o.defaultValue.indexOf(c.props.value)!=-1:o.defaultValue==c.props.value})),n.class&&!n.className?(o.class=n.class,Object.defineProperty(o,"className",Qt)):(n.className&&!n.class||n.class&&n.className)&&(o.class=o.className=n.className),t.props=o}(e),e.$$typeof=ft,Fe&&Fe(e)};var je=s.__r;s.__r=function(e){je&&je(e),ke=e.__c};var ze=s.diffed;s.diffed=function(e){ze&&ze(e);var t=e.props,n=e.__e;n!=null&&e.type==="textarea"&&"value"in t&&t.value!==n.value&&(n.value=t.value==null?"":t.value),ke=null};var en={ReactCurrentDispatcher:{current:{readContext:function(e){return ke.__n[e.__c].props.value}}}};function tn(e){return A.bind(null,e)}function le(e){return!!e&&e.$$typeof===ft}function nn(e){return le(e)&&e.type===S}function rn(e){return le(e)?Lt.apply(null,arguments):e}function ht(e){return!!e.__k&&(Y(null,e),!0)}function on(e){return e&&(e.base||e.nodeType===1&&e)||null}var _n=function(e,t){return e(t)},un=function(e,t){return e(t)},an=S;function vt(e){e()}function cn(e){return e}function ln(){return[!1,vt]}var sn=ce,fn=le;function dn(e,t){var n=t(),r=V({h:{__:n,v:t}}),o=r[0].h,_=r[1];return ce(function(){o.__=n,o.v=t,de(o)&&_({h:o})},[e,n,t]),ie(function(){return de(o)&&_({h:o}),e(function(){de(o)&&_({h:o})})},[e]),n}function de(e){var t,n,r=e.v,o=e.__;try{var _=r();return!((t=o)===(n=_)&&(t!==0||1/t==1/n)||t!=t&&n!=n)}catch{return!0}}var pn={useState:V,useId:St,useReducer:_t,useEffect:ie,useLayoutEffect:ce,useInsertionEffect:sn,useTransition:ln,useDeferredValue:cn,useSyncExternalStore:dn,startTransition:vt,useRef:it,useImperativeHandle:Ot,useMemo:we,useCallback:$t,useContext:Ut,useDebugValue:At,version:"17.0.2",Children:Mt,render:dt,hydrate:pt,unmountComponentAtNode:ht,createPortal:jt,createElement:A,createContext:Dt,createFactory:tn,cloneElement:rn,createRef:gt,Fragment:S,isValidElement:le,isElement:fn,isFragment:nn,findDOMNode:on,Component:N,PureComponent:be,memo:It,forwardRef:Ht,flushSync:un,unstable_batchedUpdates:_n,StrictMode:an,Suspense:oe,SuspenseList:q,lazy:Vt,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:en};function mt(e){return{render(t){dt(t,e)},unmount(){ht(e)}}}function hn(e,t){return pt(t,e),mt(e)}const vn={createRoot:mt,hydrateRoot:hn},mn=(e,t)=>{const n=URL.createObjectURL(e),r=document.createElement("a");r.href=n,r.download=t,document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(n)},yn=(e,t,{fps:n=24,type:r="video/webm; codecs=h264"}={})=>new Promise(async o=>{const _=e.captureStream(n),u=new MediaRecorder(_),a=[];u.ondataavailable=c=>{a.push(c.data)},u.onstop=()=>{const c=new Blob(a,{type:r});o(c)},u.start(),await t(),u.stop()}),bn=e=>new Promise(t=>setTimeout(t,e)),En=async(e,{width:t=1024,height:n=960,fps:r=24,type:o="video/webm; codecs=h264"}={})=>{const _=document.createElement("canvas");_.width=t,_.height=n;const u=_.getContext("2d");if(!u)throw new Error;return yn(_,async()=>{for(const a of e)gn(u,a),await bn(1e3)},{fps:r,type:o})},gn=(e,t)=>{const{width:n,height:r}=e.canvas;e.clearRect(0,0,n,r),e.fillStyle="black",e.fillRect(0,0,n,r),e.fillStyle="white",e.font="30px Arial",wn(e,t,30)};function wn(e,t,n){const{width:r,height:o}=e.canvas,_=e.measureText(t).width,u=(r-_)/2,a=(o-n)/2+n;e.fillText(t,u,a)}var v;(function(e){e.LOAD="LOAD",e.EXEC="EXEC",e.WRITE_FILE="WRITE_FILE",e.READ_FILE="READ_FILE",e.DELETE_FILE="DELETE_FILE",e.RENAME="RENAME",e.CREATE_DIR="CREATE_DIR",e.LIST_DIR="LIST_DIR",e.DELETE_DIR="DELETE_DIR",e.ERROR="ERROR",e.DOWNLOAD="DOWNLOAD",e.PROGRESS="PROGRESS",e.LOG="LOG",e.MOUNT="MOUNT",e.UNMOUNT="UNMOUNT"})(v||(v={}));const Rn=(()=>{let e=0;return()=>e++})(),kn=new Error("ffmpeg is not loaded, call `await ffmpeg.load()` first"),Cn=new Error("called FFmpeg.terminate()");var C,I,O,M,W,ue,k;class Ln{constructor(){x(this,C,null);x(this,I,{});x(this,O,{});x(this,M,[]);x(this,W,[]);R(this,"loaded",!1);x(this,ue,()=>{p(this,C)&&(p(this,C).onmessage=({data:{id:t,type:n,data:r}})=>{switch(n){case v.LOAD:this.loaded=!0,p(this,I)[t](r);break;case v.MOUNT:case v.UNMOUNT:case v.EXEC:case v.WRITE_FILE:case v.READ_FILE:case v.DELETE_FILE:case v.RENAME:case v.CREATE_DIR:case v.LIST_DIR:case v.DELETE_DIR:p(this,I)[t](r);break;case v.LOG:p(this,M).forEach(o=>o(r));break;case v.PROGRESS:p(this,W).forEach(o=>o(r));break;case v.ERROR:p(this,O)[t](r);break}delete p(this,I)[t],delete p(this,O)[t]})});x(this,k,({type:t,data:n},r=[],o)=>p(this,C)?new Promise((_,u)=>{const a=Rn();p(this,C)&&p(this,C).postMessage({id:a,type:t,data:n},r),p(this,I)[a]=_,p(this,O)[a]=u,o==null||o.addEventListener("abort",()=>{u(new DOMException(`Message # ${a} was aborted`,"AbortError"))},{once:!0})}):Promise.reject(kn));R(this,"load",(t={},{signal:n}={})=>(p(this,C)||(G(this,C,new Worker(new URL("/message-recorder/assets/worker-1779ba70.js",self.location),{type:"module"})),p(this,ue).call(this)),p(this,k).call(this,{type:v.LOAD,data:t},void 0,n)));R(this,"exec",(t,n=-1,{signal:r}={})=>p(this,k).call(this,{type:v.EXEC,data:{args:t,timeout:n}},void 0,r));R(this,"terminate",()=>{const t=Object.keys(p(this,O));for(const n of t)p(this,O)[n](Cn),delete p(this,O)[n],delete p(this,I)[n];p(this,C)&&(p(this,C).terminate(),G(this,C,null),this.loaded=!1)});R(this,"writeFile",(t,n,{signal:r}={})=>{const o=[];return n instanceof Uint8Array&&o.push(n.buffer),p(this,k).call(this,{type:v.WRITE_FILE,data:{path:t,data:n}},o,r)});R(this,"mount",(t,n,r)=>{const o=[];return p(this,k).call(this,{type:v.MOUNT,data:{fsType:t,options:n,mountPoint:r}},o)});R(this,"unmount",t=>{const n=[];return p(this,k).call(this,{type:v.UNMOUNT,data:{mountPoint:t}},n)});R(this,"readFile",(t,n="binary",{signal:r}={})=>p(this,k).call(this,{type:v.READ_FILE,data:{path:t,encoding:n}},void 0,r));R(this,"deleteFile",(t,{signal:n}={})=>p(this,k).call(this,{type:v.DELETE_FILE,data:{path:t}},void 0,n));R(this,"rename",(t,n,{signal:r}={})=>p(this,k).call(this,{type:v.RENAME,data:{oldPath:t,newPath:n}},void 0,r));R(this,"createDir",(t,{signal:n}={})=>p(this,k).call(this,{type:v.CREATE_DIR,data:{path:t}},void 0,n));R(this,"listDir",(t,{signal:n}={})=>p(this,k).call(this,{type:v.LIST_DIR,data:{path:t}},void 0,n));R(this,"deleteDir",(t,{signal:n}={})=>p(this,k).call(this,{type:v.DELETE_DIR,data:{path:t}},void 0,n))}on(t,n){t==="log"?p(this,M).push(n):t==="progress"&&p(this,W).push(n)}off(t,n){t==="log"?G(this,M,p(this,M).filter(r=>r!==n)):t==="progress"&&G(this,W,p(this,W).filter(r=>r!==n))}}C=new WeakMap,I=new WeakMap,O=new WeakMap,M=new WeakMap,W=new WeakMap,ue=new WeakMap,k=new WeakMap;const Dn=new Error("failed to get response body reader"),Nn=new Error("failed to complete download"),On="Content-Length",$n=e=>new Promise((t,n)=>{const r=new FileReader;r.onload=()=>{const{result:o}=r;o instanceof ArrayBuffer?t(new Uint8Array(o)):t(new Uint8Array)},r.onerror=o=>{var _,u;n(Error(`File could not be read! Code=${((u=(_=o==null?void 0:o.target)==null?void 0:_.error)==null?void 0:u.code)||-1}`))},r.readAsArrayBuffer(e)}),Un=async e=>{let t;if(typeof e=="string")/data:_data\/([a-zA-Z]*);base64,([^"]*)/.test(e)?t=atob(e.split(",")[1]).split("").map(n=>n.charCodeAt(0)):t=await(await fetch(e)).arrayBuffer();else if(e instanceof URL)t=await(await fetch(e)).arrayBuffer();else if(e instanceof File||e instanceof Blob)t=await $n(e);else return new Uint8Array;return new Uint8Array(t)},An=async(e,t)=>{var o;const n=await fetch(e);let r;try{const _=parseInt(n.headers.get(On)||"-1"),u=(o=n.body)==null?void 0:o.getReader();if(!u)throw Dn;const a=[];let c=0;for(;;){const{done:i,value:h}=await u.read(),f=h?h.length:0;if(i){if(_!=-1&&_!==c)throw Nn;t&&t({url:e,total:_,received:c,delta:f,done:i});break}a.push(h),c+=f,t&&t({url:e,total:_,received:c,delta:f,done:i})}const l=new Uint8Array(c);let d=0;for(const i of a)l.set(i,d),d+=i.length;r=l.buffer}catch(_){console.log("failed to send download progress event: ",_),r=await n.arrayBuffer(),t&&t({url:e,total:r.byteLength,received:r.byteLength,delta:0,done:!0})}return r},Ge=async(e,t,n=!1,r)=>{const o=n?await An(e,r):await(await fetch(e)).arrayBuffer(),_=new Blob([o],{type:t});return URL.createObjectURL(_)},Sn=async()=>{const e="https://unpkg.com/@ffmpeg/core@0.12.4/dist/esm",t=new Ln;t.terminate(),t.on("log",({message:o})=>{console.log(o)});const n=await Ge(`${e}/ffmpeg-core.js`,"text/javascript"),r=await Ge(`${e}/ffmpeg-core.wasm`,"application/wasm");return await t.load({coreURL:n,wasmURL:r}),t},Pn=async e=>{const t=await Sn();console.log("load1"),await t.writeFile("input.webm",await Un(e)),await t.exec("-i input.webm -c:v libx264 -profile:v baseline -level 3.0 -pix_fmt yuv420p -ac 2 output.mp4".split(" ")),console.log("exec1");const n=await t.readFile("output.mp4");return console.log("data1"),t.terminate(),new Blob([n],{type:"video/mp4"})},xn=e=>{var t;return(t=[["webm","webm"],["matroska","mkv"],["mp4","mp4"]].find(([n])=>e.includes(n)))==null?void 0:t[1]};function qe({children:e}){const[t,n]=V(!1);return e(t,r=>n(r))}const In=()=>{const e=it(null),[t,n]=V([]),[r,o]=V(null),[_,u]=V(null);return ie(()=>{u(r)},[r]),ie(()=>{_&&e.current&&(e.current.src=URL.createObjectURL(_))},[_]),w("div",{className:"flex vertical",children:[w("h1",{children:"Record Messages*"}),w("textarea",{id:"textArray",placeholder:"Enter text lines separated by new lines",onChange:a=>{n(a.target.value.split(`
`))},rows:10,cols:50}),w("br",{}),w(qe,{children:(a,c)=>w("button",{className:a?"barberpole":"",onClick:async()=>{c(!0),o(null);const l=await En(t);o(l),c(!1)},children:"Generate Video"})}),w("div",{className:"horizontal",children:[r&&w("button",{className:_!=null&&_.type.includes("webm")?"border":"",onClick:()=>u(r),children:"WEBM"}),r&&w(qe,{children:(a,c)=>w("button",{className:(a?"barberpole":"")+" "+(_!=null&&_.type.includes("mp4")?"border":""),onClick:async()=>{c(!0),await Pn(r).then(u),c(!1)},children:"MP4"})})]}),_&&w(Tn,{videoBlob:_}),_&&w("video",{className:"fill100",ref:e,controls:!0})]})};function Tn({videoBlob:e}){return w("button",{onClick:()=>e&&mn(e,"record-messages."+(xn(e==null?void 0:e.type)??"webm")),disabled:!e,children:"Download Video"})}vn.createRoot(document.getElementById("root")).render(w(pn.StrictMode,{children:w(In,{})}));