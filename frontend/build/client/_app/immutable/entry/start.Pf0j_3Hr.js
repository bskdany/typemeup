import{o as Se,t as ke}from"../chunks/scheduler.zQhsiUAY.js";import{S as ct,a as lt,b as ft,H as B,N as K,r as ne,o as Ae,P as Oe,f as Qe,g as Re,c as de,i as $e,s as Te,d as q,e as F,h as et,j as bt}from"../chunks/singletons.Z_Dh2hys.js";import{H as _e,S as Ce,R as tt}from"../chunks/control.pJ1mnnAb.js";new URL("sveltekit-internal://");function Et(e,r){return e==="/"||r==="ignore"?e:r==="never"?e.endsWith("/")?e.slice(0,-1):e:r==="always"&&!e.endsWith("/")?e+"/":e}function St(e){return e.split("%25").map(decodeURI).join("%25")}function kt(e){for(const r in e)e[r]=decodeURIComponent(e[r]);return e}function Ie({href:e}){return e.split("#")[0]}const At=["href","pathname","search","toString","toJSON"];function Ot(e,r,u){const o=new URL(e);Object.defineProperty(o,"searchParams",{value:new Proxy(o.searchParams,{get(f,l){if(l==="get"||l==="getAll"||l==="has")return c=>(u(c),f[l](c));r();const y=Reflect.get(f,l);return typeof y=="function"?y.bind(f):y}}),enumerable:!0,configurable:!0});for(const f of At)Object.defineProperty(o,f,{get(){return r(),e[f]},enumerable:!0,configurable:!0});return Rt(o),o}function Rt(e){Object.defineProperty(e,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const $t="/__data.json",It=".html__data.json";function Pt(e){return e.endsWith(".html")?e.replace(/\.html$/,It):e.replace(/\/$/,"")+$t}function jt(...e){let r=5381;for(const u of e)if(typeof u=="string"){let o=u.length;for(;o;)r=r*33^u.charCodeAt(--o)}else if(ArrayBuffer.isView(u)){const o=new Uint8Array(u.buffer,u.byteOffset,u.byteLength);let f=o.length;for(;f;)r=r*33^o[--f]}else throw new TypeError("value must be a string or TypedArray");return(r>>>0).toString(36)}const ut=window.fetch;window.fetch=(e,r)=>((e instanceof Request?e.method:r?.method||"GET")!=="GET"&&re.delete(De(e)),ut(e,r));const re=new Map;function xt(e){const r=atob(e),u=new Uint8Array(r.length);for(let o=0;o<r.length;o++)u[o]=r.charCodeAt(o);return u.buffer}function Lt(e,r){const u=De(e,r),o=document.querySelector(u);if(o?.textContent){let{body:f,...l}=JSON.parse(o.textContent);const y=o.getAttribute("data-ttl");return y&&re.set(u,{body:f,init:l,ttl:1e3*Number(y)}),o.getAttribute("data-b64")!==null&&(f=xt(f)),Promise.resolve(new Response(f,l))}return window.fetch(e,r)}function Nt(e,r,u){if(re.size>0){const o=De(e,u),f=re.get(o);if(f){if(performance.now()<f.ttl&&["default","force-cache","only-if-cached",void 0].includes(u?.cache))return new Response(f.body,f.init);re.delete(o)}}return window.fetch(r,u)}function De(e,r){let o=`script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;if(r?.headers||r?.body){const f=[];r.headers&&f.push([...new Headers(r.headers)].join(",")),r.body&&(typeof r.body=="string"||ArrayBuffer.isView(r.body))&&f.push(r.body),o+=`[data-hash="${jt(...f)}"]`}return o}const Ut=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Tt(e){const r=[];return{pattern:e==="/"?/^\/$/:new RegExp(`^${Dt(e).map(o=>{const f=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(o);if(f)return r.push({name:f[1],matcher:f[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const l=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(o);if(l)return r.push({name:l[1],matcher:l[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!o)return;const y=o.split(/\[(.+?)\](?!\])/);return"/"+y.map((_,s)=>{if(s%2){if(_.startsWith("x+"))return Pe(String.fromCharCode(parseInt(_.slice(2),16)));if(_.startsWith("u+"))return Pe(String.fromCharCode(..._.slice(2).split("-").map(R=>parseInt(R,16))));const h=Ut.exec(_);if(!h)throw new Error(`Invalid param: ${_}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,w,I,E,$]=h;return r.push({name:E,matcher:$,optional:!!w,rest:!!I,chained:I?s===1&&y[0]==="":!1}),I?"(.*?)":w?"([^/]*)?":"([^/]+?)"}return Pe(_)}).join("")}).join("")}/?$`),params:r}}function Ct(e){return!/^\([^)]+\)$/.test(e)}function Dt(e){return e.slice(1).split("/").filter(Ct)}function Mt(e,r,u){const o={},f=e.slice(1),l=f.filter(c=>c!==void 0);let y=0;for(let c=0;c<r.length;c+=1){const _=r[c];let s=f[c-y];if(_.chained&&_.rest&&y&&(s=f.slice(c-y,c+1).filter(h=>h).join("/"),y=0),s===void 0){_.rest&&(o[_.name]="");continue}if(!_.matcher||u[_.matcher](s)){o[_.name]=s;const h=r[c+1],w=f[c+1];h&&!h.rest&&h.optional&&w&&_.chained&&(y=0),!h&&!w&&Object.keys(o).length===l.length&&(y=0);continue}if(_.optional&&_.chained){y++;continue}return}if(!y)return o}function Pe(e){return e.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Ft({nodes:e,server_loads:r,dictionary:u,matchers:o}){const f=new Set(r);return Object.entries(u).map(([c,[_,s,h]])=>{const{pattern:w,params:I}=Tt(c),E={id:c,exec:$=>{const R=w.exec($);if(R)return Mt(R,I,o)},errors:[1,...h||[]].map($=>e[$]),layouts:[0,...s||[]].map(y),leaf:l(_)};return E.errors.length=E.layouts.length=Math.max(E.errors.length,E.layouts.length),E});function l(c){const _=c<0;return _&&(c=~c),[_,e[c]]}function y(c){return c===void 0?c:[f.has(c),e[c]]}}function Me(e,r=JSON.parse){try{return r(sessionStorage[e])}catch{}}function je(e,r,u=JSON.stringify){const o=u(r);try{sessionStorage[e]=o}catch{}}class xe extends Error{constructor(r,u){super(r),this.name="DevalueError",this.path=u.join("")}}function nt(e){return Object(e)!==e}const Ht=Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Vt(e){const r=Object.getPrototypeOf(e);return r===Object.prototype||r===null||Object.getOwnPropertyNames(r).sort().join("\0")===Ht}function Bt(e){return Object.prototype.toString.call(e).slice(8,-1)}function qt(e){switch(e){case'"':return'\\"';case"<":return"\\u003C";case"\\":return"\\\\";case`
`:return"\\n";case"\r":return"\\r";case"	":return"\\t";case"\b":return"\\b";case"\f":return"\\f";case"\u2028":return"\\u2028";case"\u2029":return"\\u2029";default:return e<" "?`\\u${e.charCodeAt(0).toString(16).padStart(4,"0")}`:""}}function X(e){let r="",u=0;const o=e.length;for(let f=0;f<o;f+=1){const l=e[f],y=qt(l);y&&(r+=e.slice(u,f)+y,u=f+1)}return`"${u===0?e:r+e.slice(u)}"`}const Fe=-1,dt=-2,pt=-3,ht=-4,_t=-5,He=-6;function Gt(e,r){return gt(JSON.parse(e),r)}function gt(e,r){if(typeof e=="number")return f(e,!0);if(!Array.isArray(e)||e.length===0)throw new Error("Invalid input");const u=e,o=Array(u.length);function f(l,y=!1){if(l===Fe)return;if(l===pt)return NaN;if(l===ht)return 1/0;if(l===_t)return-1/0;if(l===He)return-0;if(y)throw new Error("Invalid input");if(l in o)return o[l];const c=u[l];if(!c||typeof c!="object")o[l]=c;else if(Array.isArray(c))if(typeof c[0]=="string"){const _=c[0],s=r?.[_];if(s)return o[l]=s(f(c[1]));switch(_){case"Date":o[l]=new Date(c[1]);break;case"Set":const h=new Set;o[l]=h;for(let E=1;E<c.length;E+=1)h.add(f(c[E]));break;case"Map":const w=new Map;o[l]=w;for(let E=1;E<c.length;E+=2)w.set(f(c[E]),f(c[E+1]));break;case"RegExp":o[l]=new RegExp(c[1],c[2]);break;case"Object":o[l]=Object(c[1]);break;case"BigInt":o[l]=BigInt(c[1]);break;case"null":const I=Object.create(null);o[l]=I;for(let E=1;E<c.length;E+=2)I[c[E]]=f(c[E+1]);break;default:throw new Error(`Unknown type ${_}`)}}else{const _=new Array(c.length);o[l]=_;for(let s=0;s<c.length;s+=1){const h=c[s];h!==dt&&(_[s]=f(h))}}else{const _={};o[l]=_;for(const s in c){const h=c[s];_[s]=f(h)}}return o[l]}return f(0)}function Jt(e,r){const u=[],o=new Map,f=[];for(const s in r)f.push({key:s,fn:r[s]});const l=[];let y=0;function c(s){if(typeof s=="function")throw new xe("Cannot stringify a function",l);if(o.has(s))return o.get(s);if(s===void 0)return Fe;if(Number.isNaN(s))return pt;if(s===1/0)return ht;if(s===-1/0)return _t;if(s===0&&1/s<0)return He;const h=y++;o.set(s,h);for(const{key:I,fn:E}of f){const $=E(s);if($)return u[h]=`["${I}",${c($)}]`,h}let w="";if(nt(s))w=Le(s);else switch(Bt(s)){case"Number":case"String":case"Boolean":w=`["Object",${Le(s)}]`;break;case"BigInt":w=`["BigInt",${s}]`;break;case"Date":w=`["Date","${s.toISOString()}"]`;break;case"RegExp":const{source:E,flags:$}=s;w=$?`["RegExp",${X(E)},"${$}"]`:`["RegExp",${X(E)}]`;break;case"Array":w="[";for(let R=0;R<s.length;R+=1)R>0&&(w+=","),R in s?(l.push(`[${R}]`),w+=c(s[R]),l.pop()):w+=dt;w+="]";break;case"Set":w='["Set"';for(const R of s)w+=`,${c(R)}`;w+="]";break;case"Map":w='["Map"';for(const[R,D]of s)l.push(`.get(${nt(R)?Le(R):"..."})`),w+=`,${c(R)},${c(D)}`;w+="]";break;default:if(!Vt(s))throw new xe("Cannot stringify arbitrary non-POJOs",l);if(Object.getOwnPropertySymbols(s).length>0)throw new xe("Cannot stringify POJOs with symbolic keys",l);if(Object.getPrototypeOf(s)===null){w='["null"';for(const R in s)l.push(`.${R}`),w+=`,${X(R)},${c(s[R])}`,l.pop();w+="]"}else{w="{";let R=!1;for(const D in s)R&&(w+=","),R=!0,l.push(`.${D}`),w+=`${X(D)}:${c(s[D])}`,l.pop();w+="}"}}return u[h]=w,h}const _=c(e);return _<0?`${_}`:`[${u.join(",")}]`}function Le(e){const r=typeof e;return r==="string"?X(e):e instanceof String?X(e.toString()):e===void 0?Fe.toString():e===0&&1/e<0?He.toString():r==="bigint"?`["BigInt","${e}"]`:String(e)}const mt=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...mt];const Kt=new Set([...mt]);[...Kt];function Yt(e){return e.filter(r=>r!=null)}const zt="x-sveltekit-invalidated",Wt="x-sveltekit-trailing-slash";function pe(e){return e instanceof _e||e instanceof Ce?e.status:500}function Xt(e){return e instanceof Ce?e.text:"Internal Error"}const Y=Me(ct)??{},ae=Me(lt,Gt)??{},oe=Me(ft)??{},at=history.pushState,he=history.replaceState;function Ne(e){Y[e]=Te()}function rt(e,r){let u=e+1;for(;Y[u];)delete Y[u],u+=1;for(u=r+1;oe[u];)delete oe[u],u+=1}function W(e){return location.href=e.href,new Promise(()=>{})}function ot(){}function Zt(e,r){const u=Ft(e),o=e.nodes[0],f=e.nodes[1];o(),f();const l=document.documentElement,y=[],c=[];let _=null;const s={before_navigate:[],on_navigate:[],after_navigate:[]};let h={branch:[],error:null,url:null},w=!1,I=!1,E=!0,$=!1,R=!1,D=!1,Z=!1,se=!1,H,N=history.state?.[B],M=history.state?.[K];N||(N=M=Date.now(),he.call(history,{...history.state,[B]:N,[K]:M},"",location.href));const ge=Y[N];ge&&(history.scrollRestoration="manual",scrollTo(ge.x,ge.y));let x,z,me;async function Ve(){if(await(me||=Promise.resolve()),!me)return;me=null;const n=ee(h.url,!0);_=null;const t=z={},a=n&&await ve(n);t===z&&(a&&(a.type==="redirect"?await ie(new URL(a.location,h.url).href,{},1,t):(a.props.page!==void 0&&(x=a.props.page),H.$set(a.props))),y.length=0)}function Be(n){c.some(t=>t?.snapshot)&&(oe[n]=c.map(t=>t?.snapshot?.capture()))}function qe(n){oe[n]?.forEach((t,a)=>{c[a]?.snapshot?.restore(t)})}function Ge(){Ne(N),je(ct,Y),Be(M),je(ft,oe),je(lt,ae,Jt)}async function ie(n,t,a,i){return fe({type:"goto",url:ne(n),keepfocus:t.keepFocus,noscroll:t.noScroll,replace_state:t.replaceState,redirect_count:a,nav_token:i,accept:()=>{t.invalidateAll&&(se=!0)}})}async function Je(n){return _={id:n.id,promise:ve(n).then(t=>(t.type==="loaded"&&t.state.error&&(_=null),t))},_.promise}async function ce(n){const t=u.find(a=>a.exec(We(n)));t&&await Promise.all([...t.layouts,t.leaf].map(a=>a?.[1]()))}function Ke(n){h=n.state;const t=document.querySelector("style[data-sveltekit]");t&&t.remove(),x=n.props.page,H=new e.root({target:r,props:{...n.props,stores:q,components:c},hydrate:!0}),qe(M);const a={from:null,to:{params:h.params,route:{id:h.route?.id??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};s.after_navigate.forEach(i=>i(a)),I=!0}async function Q({url:n,params:t,branch:a,status:i,error:d,route:p,form:g}){let m="never";for(const O of a)O?.slash!==void 0&&(m=O.slash);n.pathname=Et(n.pathname,m),n.search=n.search;const S={type:"loaded",state:{url:n,params:t,branch:a,error:d,route:p},props:{constructors:Yt(a).map(O=>O.node.component),page:x}};g!==void 0&&(S.props.form=g);let v={},P=!x,L=0;for(let O=0;O<Math.max(a.length,h.branch.length);O+=1){const k=a[O],U=h.branch[O];k?.data!==U?.data&&(P=!0),k&&(v={...v,...k.data},P&&(S.props[`data_${L}`]=v),L+=1)}return(!h.url||n.href!==h.url.href||h.error!==d||g!==void 0&&g!==x.form||P)&&(S.props.page={error:d,params:t,route:{id:p?.id??null},state:{},status:i,url:new URL(n),form:g??null,data:P?v:x.data}),S}async function ye({loader:n,parent:t,url:a,params:i,route:d,server_data_node:p}){let g=null,m=!0;const S={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},v=await n();if(v.universal?.load){let P=function(...b){for(const O of b){const{href:k}=new URL(O,a);S.dependencies.add(k)}};const L={route:new Proxy(d,{get:(b,O)=>(m&&(S.route=!0),b[O])}),params:new Proxy(i,{get:(b,O)=>(m&&S.params.add(O),b[O])}),data:p?.data??null,url:Ot(a,()=>{m&&(S.url=!0)},b=>{m&&S.search_params.add(b)}),async fetch(b,O){let k;b instanceof Request?(k=b.url,O={body:b.method==="GET"||b.method==="HEAD"?void 0:await b.blob(),cache:b.cache,credentials:b.credentials,headers:b.headers,integrity:b.integrity,keepalive:b.keepalive,method:b.method,mode:b.mode,redirect:b.redirect,referrer:b.referrer,referrerPolicy:b.referrerPolicy,signal:b.signal,...O}):k=b;const U=new URL(k,a);return m&&P(U.href),U.origin===a.origin&&(k=U.href.slice(a.origin.length)),I?Nt(k,U.href,O):Lt(k,O)},setHeaders:()=>{},depends:P,parent(){return m&&(S.parent=!0),t()},untrack(b){m=!1;try{return b()}finally{m=!0}}};g=await v.universal.load.call(null,L)??null}return{node:v,loader:n,server:p,universal:v.universal?.load?{type:"data",data:g,uses:S}:null,data:g??p?.data??null,slash:F&&(a.pathname===F||a.pathname===F+"/")?"always":v.universal?.trailingSlash??p?.slash}}function Ye(n,t,a,i,d,p){if(se)return!0;if(!d)return!1;if(d.parent&&n||d.route&&t||d.url&&a)return!0;for(const g of d.search_params)if(i.has(g))return!0;for(const g of d.params)if(p[g]!==h.params[g])return!0;for(const g of d.dependencies)if(y.some(m=>m(new URL(g))))return!0;return!1}function we(n,t){return n?.type==="data"?n:n?.type==="skip"?t??null:null}function wt(n,t){if(!n)return new Set(t.searchParams.keys());const a=new Set([...n.searchParams.keys(),...t.searchParams.keys()]);for(const i of a){const d=n.searchParams.getAll(i),p=t.searchParams.getAll(i);d.every(g=>p.includes(g))&&p.every(g=>d.includes(g))&&a.delete(i)}return a}async function ve({id:n,invalidating:t,url:a,params:i,route:d}){if(_?.id===n)return _.promise;const{errors:p,layouts:g,leaf:m}=d,S=[...g,m];p.forEach(A=>A?.().catch(()=>{})),S.forEach(A=>A?.[1]().catch(()=>{}));let v=null;const P=h.url?n!==h.url.pathname+h.url.search:!1,L=h.route?d.id!==h.route.id:!1,b=wt(h.url,a);let O=!1;const k=S.map((A,j)=>{const T=h.branch[j],C=!!A?.[0]&&(T?.loader!==A[1]||Ye(O,L,P,b,T.server?.uses,i));return C&&(O=!0),C});if(k.some(Boolean)){try{v=await st(a,k)}catch(A){return le({status:pe(A),error:await te(A,{url:a,params:i,route:{id:d.id}}),url:a,route:d})}if(v.type==="redirect")return v}const U=v?.nodes;let V=!1;const G=S.map(async(A,j)=>{if(!A)return;const T=h.branch[j],C=U?.[j];if((!C||C.type==="skip")&&A[1]===T?.loader&&!Ye(V,L,P,b,T.universal?.uses,i))return T;if(V=!0,C?.type==="error")throw C;return ye({loader:A[1],url:a,params:i,route:d,parent:async()=>{const be={};for(let Ee=0;Ee<j;Ee+=1)Object.assign(be,(await G[Ee])?.data);return be},server_data_node:we(C===void 0&&A[0]?{type:"skip"}:C??null,A[0]?T?.server:void 0)})});for(const A of G)A.catch(()=>{});const J=[];for(let A=0;A<S.length;A+=1)if(S[A])try{J.push(await G[A])}catch(j){if(j instanceof tt)return{type:"redirect",location:j.location};let T=pe(j),C;if(U?.includes(j))T=j.status??T,C=j.error;else if(j instanceof _e)C=j.body;else{if(await q.updated.check())return await W(a);C=await te(j,{params:i,url:a,route:{id:d.id}})}const ue=await ze(A,J,p);return ue?await Q({url:a,params:i,branch:J.slice(0,ue.idx).concat(ue.node),status:T,error:C,route:d}):await Ze(a,{id:d.id},C,T)}else J.push(void 0);return await Q({url:a,params:i,branch:J,status:200,error:null,route:d,form:t?void 0:null})}async function ze(n,t,a){for(;n--;)if(a[n]){let i=n;for(;!t[i];)i-=1;try{return{idx:i+1,node:{node:await a[n](),loader:a[n],data:{},server:null,universal:null}}}catch{continue}}}async function le({status:n,error:t,url:a,route:i}){const d={};let p=null;if(e.server_loads[0]===0)try{const v=await st(a,[!0]);if(v.type!=="data"||v.nodes[0]&&v.nodes[0].type!=="data")throw 0;p=v.nodes[0]??null}catch{(a.origin!==Ae||a.pathname!==location.pathname||w)&&await W(a)}const m=await ye({loader:o,url:a,params:d,route:i,parent:()=>Promise.resolve({}),server_data_node:we(p)}),S={node:await f(),loader:f,universal:null,server:null,data:null};return await Q({url:a,params:d,branch:[m,S],status:n,error:t,route:null})}function ee(n,t){if($e(n,F))return;const a=We(n.pathname);for(const i of u){const d=i.exec(a);if(d)return{id:n.pathname+n.search,invalidating:t,route:i,params:kt(d),url:n}}}function We(n){return St(n.slice(F.length)||"/")}function Xe({url:n,type:t,intent:a,delta:i}){let d=!1;const p=it(h,a,n,t);i!==void 0&&(p.navigation.delta=i);const g={...p.navigation,cancel:()=>{d=!0,p.reject(new Error("navigation was cancelled"))}};return R||s.before_navigate.forEach(m=>m(g)),d?null:p}async function fe({type:n,url:t,popped:a,keepfocus:i,noscroll:d,replace_state:p,redirect_count:g=0,nav_token:m={},accept:S=ot,block:v=ot}){const P=ee(t,!1),L=Xe({url:t,type:n,delta:a?.delta,intent:P});if(!L){v();return}const b=N,O=M;S(),R=!0,I&&q.navigating.set(L.navigation),z=m;let k=P&&await ve(P);if(!k){if($e(t,F))return await W(t);k=await Ze(t,{id:null},await te(new Ce(404,"Not Found",`Not found: ${t.pathname}`),{url:t,params:{},route:{id:null}}),404)}if(t=P?.url||t,z!==m)return L.reject(new Error("navigation was aborted")),!1;if(k.type==="redirect")if(g>=20)k=await le({status:500,error:await te(new Error("Redirect loop"),{url:t,params:{},route:{id:null}}),url:t,route:{id:null}});else return ie(new URL(k.location,t).href,{},g+1,m),!1;else k.props.page.status>=400&&await q.updated.check()&&await W(t);y.length=0,se=!1,$=!0,Ne(b),Be(O),k.props.page.url.pathname!==t.pathname&&(t.pathname=k.props.page.url.pathname);const U=a?a.state:{};if(!a){const A=p?0:1,j={[B]:N+=A,[K]:M+=A};(p?he:at).call(history,j,"",t),p||rt(N,M)}if(ae[N]=U,_=null,k.props.page.state=U,I){h=k.state,k.props.page&&(k.props.page.url=t);const A=(await Promise.all(s.on_navigate.map(j=>j(L.navigation)))).filter(j=>typeof j=="function");if(A.length>0){let j=function(){s.after_navigate=s.after_navigate.filter(T=>!A.includes(T))};A.push(j),s.after_navigate.push(...A)}H.$set(k.props),Z=!0}else Ke(k);const{activeElement:V}=document;await ke();const G=a?a.scroll:d?Te():null;if(E){const A=t.hash&&document.getElementById(decodeURIComponent(t.hash.slice(1)));G?scrollTo(G.x,G.y):A?A.scrollIntoView():scrollTo(0,0)}const J=document.activeElement!==V&&document.activeElement!==document.body;!i&&!J&&Ue(),E=!0,k.props.page&&(x=k.props.page),R=!1,n==="popstate"&&qe(M),L.fulfil(void 0),s.after_navigate.forEach(A=>A(L.navigation)),q.navigating.set(null),$=!1}async function Ze(n,t,a,i){return n.origin===Ae&&n.pathname===location.pathname&&!w?await le({status:i,error:a,url:n,route:t}):await W(n)}function vt(){let n;l.addEventListener("mousemove",p=>{const g=p.target;clearTimeout(n),n=setTimeout(()=>{i(g,2)},20)});function t(p){i(p.composedPath()[0],1)}l.addEventListener("mousedown",t),l.addEventListener("touchstart",t,{passive:!0});const a=new IntersectionObserver(p=>{for(const g of p)g.isIntersecting&&(ce(g.target.href),a.unobserve(g.target))},{threshold:0});function i(p,g){const m=Qe(p,l);if(!m)return;const{url:S,external:v,download:P}=Re(m,F);if(v||P)return;const L=de(m);if(!L.reload)if(g<=L.preload_data){const b=ee(S,!1);b&&Je(b)}else g<=L.preload_code&&ce(S.pathname)}function d(){a.disconnect();for(const p of l.querySelectorAll("a")){const{url:g,external:m,download:S}=Re(p,F);if(m||S)continue;const v=de(p);v.reload||(v.preload_code===et.viewport&&a.observe(p),v.preload_code===et.eager&&ce(g.pathname))}}s.after_navigate.push(d),d()}function te(n,t){if(n instanceof _e)return n.body;const a=pe(n),i=Xt(n);return e.hooks.handleError({error:n,event:t,status:a,message:i})??{message:i}}return{after_navigate:n=>{Se(()=>(s.after_navigate.push(n),()=>{const t=s.after_navigate.indexOf(n);s.after_navigate.splice(t,1)}))},before_navigate:n=>{Se(()=>(s.before_navigate.push(n),()=>{const t=s.before_navigate.indexOf(n);s.before_navigate.splice(t,1)}))},on_navigate:n=>{Se(()=>(s.on_navigate.push(n),()=>{const t=s.on_navigate.indexOf(n);s.on_navigate.splice(t,1)}))},disable_scroll_handling:()=>{($||!I)&&(E=!1)},goto:(n,t={})=>(n=ne(n),n.origin!==Ae?Promise.reject(new Error("goto: invalid URL")):ie(n,t,0)),invalidate:n=>{if(typeof n=="function")y.push(n);else{const{href:t}=new URL(n,location.href);y.push(a=>a.href===t)}return Ve()},invalidate_all:()=>(se=!0,Ve()),preload_data:async n=>{const t=ne(n),a=ee(t,!1);if(!a)throw new Error(`Attempted to preload a URL that does not belong to this app: ${t}`);const i=await Je(a);if(i.type==="redirect")return{type:i.type,location:i.location};const{status:d,data:p}=i.props.page??x;return{type:i.type,status:d,data:p}},preload_code:n=>ce(n),push_state:(n,t)=>{const a={[B]:N+=1,[K]:M,[Oe]:x.url.href};at.call(history,a,"",ne(n)),x={...x,state:t},H.$set({page:x}),ae[N]=t,rt(N,M)},replace_state:(n,t)=>{const a={[B]:N,[K]:M,[Oe]:x.url.href};he.call(history,a,"",ne(n)),x={...x,state:t},H.$set({page:x}),ae[N]=t},apply_action:async n=>{if(n.type==="error"){const t=new URL(location.href),{branch:a,route:i}=h;if(!i)return;const d=await ze(h.branch.length,a,i.errors);if(d){const p=await Q({url:t,params:h.params,branch:a.slice(0,d.idx).concat(d.node),status:n.status??500,error:n.error,route:i});h=p.state,H.$set(p.props),ke().then(Ue)}}else n.type==="redirect"?ie(n.location,{invalidateAll:!0},0):(H.$set({form:null,page:{...x,form:n.data,status:n.status}}),await ke(),H.$set({form:n.data}),n.type==="success"&&Ue())},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",t=>{let a=!1;if(Ge(),!R){const i=it(h,void 0,null,"leave"),d={...i.navigation,cancel:()=>{a=!0,i.reject(new Error("navigation was cancelled"))}};s.before_navigate.forEach(p=>p(d))}a?(t.preventDefault(),t.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Ge()}),navigator.connection?.saveData||vt(),l.addEventListener("click",t=>{if(t.button||t.which!==1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.defaultPrevented)return;const a=Qe(t.composedPath()[0],l);if(!a)return;const{url:i,external:d,target:p,download:g}=Re(a,F);if(!i)return;if(p==="_parent"||p==="_top"){if(window.parent!==window)return}else if(p&&p!=="_self")return;const m=de(a);if(!(a instanceof SVGAElement)&&i.protocol!==location.protocol&&!(i.protocol==="https:"||i.protocol==="http:")||g)return;if(d||m.reload){Xe({url:i,type:"link"})?R=!0:t.preventDefault();return}const[v,P]=i.href.split("#");if(P!==void 0&&v===Ie(location)){if(h.url.hash===i.hash){t.preventDefault(),a.ownerDocument.getElementById(P)?.scrollIntoView();return}if(D=!0,Ne(N),n(i),!m.replace_state)return;D=!1}t.preventDefault(),fe({type:"link",url:i,keepfocus:m.keepfocus,noscroll:m.noscroll,replace_state:m.replace_state??i.href===location.href})}),l.addEventListener("submit",t=>{if(t.defaultPrevented)return;const a=HTMLFormElement.prototype.cloneNode.call(t.target),i=t.submitter;if((i?.formMethod||a.method)!=="get")return;const p=new URL(i?.hasAttribute("formaction")&&i?.formAction||a.action);if($e(p,F))return;const g=t.target,m=de(g);if(m.reload)return;t.preventDefault(),t.stopPropagation();const S=new FormData(g),v=i?.getAttribute("name");v&&S.append(v,i?.getAttribute("value")??""),p.search=new URLSearchParams(S).toString(),fe({type:"form",url:p,keepfocus:m.keepfocus,noscroll:m.noscroll,replace_state:m.replace_state??p.href===location.href})}),addEventListener("popstate",async t=>{if(t.state?.[B]){const a=t.state[B];if(z={},a===N)return;const i=Y[a],d=ae[a]??{},p=new URL(t.state[Oe]??location.href),g=t.state[K],m=Ie(location)===Ie(h.url);if(g===M&&(Z||m)){n(p),Y[N]=Te(),i&&scrollTo(i.x,i.y),d!==x.state&&(x={...x,state:d},H.$set({page:x})),N=a;return}const v=a-N;await fe({type:"popstate",url:p,popped:{state:d,scroll:i,delta:v},accept:()=>{N=a,M=g},block:()=>{history.go(-v)},nav_token:z})}else if(!D){const a=new URL(location.href);n(a)}}),addEventListener("hashchange",()=>{D&&(D=!1,he.call(history,{...history.state,[B]:++N,[K]:M},"",location.href))});for(const t of document.querySelectorAll("link"))t.rel==="icon"&&(t.href=t.href);addEventListener("pageshow",t=>{t.persisted&&q.navigating.set(null)});function n(t){h.url=t,q.page.set({...x,url:t}),q.page.notify()}},_hydrate:async({status:n=200,error:t,node_ids:a,params:i,route:d,data:p,form:g})=>{w=!0;const m=new URL(location.href);({params:i={},route:d={id:null}}=ee(m,!1)||{});let S;try{const v=a.map(async(b,O)=>{const k=p[O];return k?.uses&&(k.uses=yt(k.uses)),ye({loader:e.nodes[b],url:m,params:i,route:d,parent:async()=>{const U={};for(let V=0;V<O;V+=1)Object.assign(U,(await v[V]).data);return U},server_data_node:we(k)})}),P=await Promise.all(v),L=u.find(({id:b})=>b===d.id);if(L){const b=L.layouts;for(let O=0;O<b.length;O++)b[O]||P.splice(O,0,void 0)}S=await Q({url:m,params:i,branch:P,status:n,error:t,form:g,route:L??null})}catch(v){if(v instanceof tt){await W(new URL(v.location,location.href));return}S=await le({status:pe(v),error:await te(v,{url:m,params:i,route:d}),url:m,route:d})}S.props.page&&(S.props.page.state={}),Ke(S)}}}async function st(e,r){const u=new URL(e);u.pathname=Pt(e.pathname),e.pathname.endsWith("/")&&u.searchParams.append(Wt,"1"),u.searchParams.append(zt,r.map(f=>f?"1":"0").join(""));const o=await ut(u.href);if(!o.ok){let f;throw o.headers.get("content-type")?.includes("application/json")?f=await o.json():o.status===404?f="Not Found":o.status===500&&(f="Internal Error"),new _e(o.status,f)}return new Promise(async f=>{const l=new Map,y=o.body.getReader(),c=new TextDecoder;function _(h){return gt(h,{Promise:w=>new Promise((I,E)=>{l.set(w,{fulfil:I,reject:E})})})}let s="";for(;;){const{done:h,value:w}=await y.read();if(h&&!s)break;for(s+=!w&&s?`
`:c.decode(w);;){const I=s.indexOf(`
`);if(I===-1)break;const E=JSON.parse(s.slice(0,I));if(s=s.slice(I+1),E.type==="redirect")return f(E);if(E.type==="data")E.nodes?.forEach($=>{$?.type==="data"&&($.uses=yt($.uses),$.data=_($.data))}),f(E);else if(E.type==="chunk"){const{id:$,data:R,error:D}=E,Z=l.get($);l.delete($),D?Z.reject(_(D)):Z.fulfil(_(R))}}}})}function yt(e){return{dependencies:new Set(e?.dependencies??[]),params:new Set(e?.params??[]),parent:!!e?.parent,route:!!e?.route,url:!!e?.url,search_params:new Set(e?.search_params??[])}}function Ue(){const e=document.querySelector("[autofocus]");if(e)e.focus();else{const r=document.body,u=r.getAttribute("tabindex");r.tabIndex=-1,r.focus({preventScroll:!0,focusVisible:!1}),u!==null?r.setAttribute("tabindex",u):r.removeAttribute("tabindex");const o=getSelection();if(o&&o.type!=="None"){const f=[];for(let l=0;l<o.rangeCount;l+=1)f.push(o.getRangeAt(l));setTimeout(()=>{if(o.rangeCount===f.length){for(let l=0;l<o.rangeCount;l+=1){const y=f[l],c=o.getRangeAt(l);if(y.commonAncestorContainer!==c.commonAncestorContainer||y.startContainer!==c.startContainer||y.endContainer!==c.endContainer||y.startOffset!==c.startOffset||y.endOffset!==c.endOffset)return}o.removeAllRanges()}})}}}function it(e,r,u,o){let f,l;const y=new Promise((_,s)=>{f=_,l=s});return y.catch(()=>{}),{navigation:{from:{params:e.params,route:{id:e.route?.id??null},url:e.url},to:u&&{params:r?.params??null,route:{id:r?.route?.id??null},url:u},willUnload:!r,type:o,complete:y},fulfil:f,reject:l}}async function nn(e,r,u){const o=Zt(e,r);bt({client:o}),u?await o._hydrate(u):o.goto(location.href,{replaceState:!0}),o._start_router()}export{nn as start};
