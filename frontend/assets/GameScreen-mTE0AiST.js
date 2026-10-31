import{a as e,n as t,t as n}from"./jsx-runtime-Wy9s6hX0.js";import{S as r,T as i,d as a,f as o,h as s,l as c,o as l,p as u,r as d,u as f,v as p,x as m}from"./index-BMG9sYTX.js";import{$ as h,A as g,B as _,C as v,D as y,E as b,F as x,G as S,H as C,I as w,J as T,K as E,L as D,M as ee,N as te,O as ne,P as re,Q as ie,R as O,S as ae,T as oe,U as se,V as ce,W as le,X as ue,Y as de,Z as fe,_ as pe,_t as me,a as he,at as ge,b as _e,bt as ve,c as ye,ct as be,d as xe,dt as Se,et as k,f as A,ft as Ce,g as we,gt as Te,h as Ee,ht as De,i as Oe,it as ke,j as Ae,k as j,l as je,lt as Me,m as Ne,mt as Pe,n as Fe,nt as Ie,o as Le,ot as Re,p as ze,pt as Be,q as Ve,r as He,rt as Ue,s as We,st as Ge,t as Ke,tt as qe,u as Je,ut as Ye,v as Xe,vt as M,w as Ze,x as Qe,y as $e,yt as N,z as et}from"./World-DXNp8RLJ.js";import{_ as tt,c as nt,d as rt,h as it,i as at,l as ot,p as st,r as ct,s as lt,t as ut,u as dt,x as ft}from"./src-DE3_FASc.js";import{c as P,d as pt,f as mt,l as F,o as ht,s as I,u as L}from"./WargaCard-DAg_WMBR.js";import{i as gt}from"./online-yk1VEkxG.js";import{c as R,d as _t,o as vt,s as yt,u as bt}from"./acts-CboX-Iv4.js";import{t as z}from"./format-3Fr9x_g4.js";import{a as xt,c as St,d as B,i as Ct,l as wt,n as Tt,o as Et,s as Dt,t as Ot,u as kt}from"./CardReveal-D8LNgMi5.js";import{n as V,t as H}from"./PawnPortrait-BoGevCOK.js";import{t as At}from"./ErrorToast-xWFU1KSd.js";import{n as jt}from"./RuleFields-DT5Hki6w.js";var U=e(t()),Mt=0,Nt=p(e=>(T.onStart=(t,n,r)=>{e({active:!0,item:t,loaded:n,total:r,progress:(n-Mt)/(r-Mt)*100})},T.onLoad=()=>{e({active:!1})},T.onError=t=>e(e=>({errors:[...e.errors,t]})),T.onProgress=(t,n,r)=>{n===r&&(Mt=r),e({active:!0,item:t,loaded:n,total:r,progress:(n-Mt)/(r-Mt)*100||100})},{errors:[],active:!1,progress:0,item:``,loaded:0,total:0})),Pt=Object.defineProperty,Ft=(e,t,n)=>t in e?Pt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,It=(e,t,n)=>(Ft(e,typeof t==`symbol`?t:t+``,n),n),Lt=class{constructor(){It(this,`_listeners`)}addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let n=this._listeners[e];if(n!==void 0){let e=n.indexOf(t);e!==-1&&n.splice(e,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let n=t.slice(0);for(let t=0,r=n.length;t<r;t++)n[t].call(this,e);e.target=null}}},Rt=Object.defineProperty,zt=(e,t,n)=>t in e?Rt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,W=(e,t,n)=>(zt(e,typeof t==`symbol`?t:t+``,n),n),Bt=new Me,Vt=new ge,Ht=Math.cos(Math.PI/180*70),Ut=(e,t)=>(e%t+t)%t,Wt=class extends Lt{constructor(e,t){super(),W(this,`object`),W(this,`domElement`),W(this,`enabled`,!0),W(this,`target`,new N),W(this,`minDistance`,0),W(this,`maxDistance`,1/0),W(this,`minZoom`,0),W(this,`maxZoom`,1/0),W(this,`minPolarAngle`,0),W(this,`maxPolarAngle`,Math.PI),W(this,`minAzimuthAngle`,-1/0),W(this,`maxAzimuthAngle`,1/0),W(this,`enableDamping`,!1),W(this,`dampingFactor`,.05),W(this,`enableZoom`,!0),W(this,`zoomSpeed`,1),W(this,`enableRotate`,!0),W(this,`rotateSpeed`,1),W(this,`enablePan`,!0),W(this,`panSpeed`,1),W(this,`screenSpacePanning`,!0),W(this,`keyPanSpeed`,7),W(this,`zoomToCursor`,!1),W(this,`autoRotate`,!1),W(this,`autoRotateSpeed`,2),W(this,`reverseOrbit`,!1),W(this,`reverseHorizontalOrbit`,!1),W(this,`reverseVerticalOrbit`,!1),W(this,`keys`,{LEFT:`ArrowLeft`,UP:`ArrowUp`,RIGHT:`ArrowRight`,BOTTOM:`ArrowDown`}),W(this,`mouseButtons`,{LEFT:ue.ROTATE,MIDDLE:ue.DOLLY,RIGHT:ue.PAN}),W(this,`touches`,{ONE:Te.ROTATE,TWO:Te.DOLLY_PAN}),W(this,`target0`),W(this,`position0`),W(this,`zoom0`),W(this,`_domElementKeyEvents`,null),W(this,`getPolarAngle`),W(this,`getAzimuthalAngle`),W(this,`setPolarAngle`),W(this,`setAzimuthalAngle`),W(this,`getDistance`),W(this,`getZoomScale`),W(this,`listenToKeyEvents`),W(this,`stopListenToKeyEvents`),W(this,`saveState`),W(this,`reset`),W(this,`update`),W(this,`connect`),W(this,`dispose`),W(this,`dollyIn`),W(this,`dollyOut`),W(this,`getScale`),W(this,`setScale`),this.object=e,this.domElement=t,this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.getPolarAngle=()=>l.phi,this.getAzimuthalAngle=()=>l.theta,this.setPolarAngle=e=>{let t=Ut(e,2*Math.PI),r=l.phi;r<0&&(r+=2*Math.PI),t<0&&(t+=2*Math.PI);let i=Math.abs(t-r);2*Math.PI-i<i&&(t<r?t+=2*Math.PI:r+=2*Math.PI),u.phi=t-r,n.update()},this.setAzimuthalAngle=e=>{let t=Ut(e,2*Math.PI),r=l.theta;r<0&&(r+=2*Math.PI),t<0&&(t+=2*Math.PI);let i=Math.abs(t-r);2*Math.PI-i<i&&(t<r?t+=2*Math.PI:r+=2*Math.PI),u.theta=t-r,n.update()},this.getDistance=()=>n.object.position.distanceTo(n.target),this.listenToKeyEvents=e=>{e.addEventListener(`keydown`,Le),this._domElementKeyEvents=e},this.stopListenToKeyEvents=()=>{this._domElementKeyEvents.removeEventListener(`keydown`,Le),this._domElementKeyEvents=null},this.saveState=()=>{n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=()=>{n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(r),n.update(),s=o.NONE},this.update=(()=>{let t=new N,i=new N(0,1,0),a=new be().setFromUnitVectors(e.up,i),p=a.clone().invert(),m=new N,h=new be,g=2*Math.PI;return function(){let _=n.object.position;a.setFromUnitVectors(e.up,i),p.copy(a).invert(),t.copy(_).sub(n.target),t.applyQuaternion(a),l.setFromVector3(t),n.autoRotate&&s===o.NONE&&te(D()),n.enableDamping?(l.theta+=u.theta*n.dampingFactor,l.phi+=u.phi*n.dampingFactor):(l.theta+=u.theta,l.phi+=u.phi);let v=n.minAzimuthAngle,y=n.maxAzimuthAngle;isFinite(v)&&isFinite(y)&&(v<-Math.PI?v+=g:v>Math.PI&&(v-=g),y<-Math.PI?y+=g:y>Math.PI&&(y-=g),v<=y?l.theta=Math.max(v,Math.min(y,l.theta)):l.theta=l.theta>(v+y)/2?Math.max(v,l.theta):Math.min(y,l.theta)),l.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,l.phi)),l.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(f,n.dampingFactor):n.target.add(f),n.zoomToCursor&&w||n.object.isOrthographicCamera?l.radius=le(l.radius):l.radius=le(l.radius*d),t.setFromSpherical(l),t.applyQuaternion(p),_.copy(n.target).add(t),n.object.matrixAutoUpdate||n.object.updateMatrix(),n.object.lookAt(n.target),n.enableDamping===!0?(u.theta*=1-n.dampingFactor,u.phi*=1-n.dampingFactor,f.multiplyScalar(1-n.dampingFactor)):(u.set(0,0,0),f.set(0,0,0));let b=!1;if(n.zoomToCursor&&w){let r=null;if(n.object instanceof ke&&n.object.isPerspectiveCamera){let e=t.length();r=le(e*d);let i=e-r;n.object.position.addScaledVector(S,i),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){let e=new N(C.x,C.y,0);e.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/d)),n.object.updateProjectionMatrix(),b=!0;let i=new N(C.x,C.y,0);i.unproject(n.object),n.object.position.sub(i).add(e),n.object.updateMatrixWorld(),r=t.length()}else console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled.`),n.zoomToCursor=!1;r!==null&&(n.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(r).add(n.object.position):(Bt.origin.copy(n.object.position),Bt.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Bt.direction))<Ht?e.lookAt(n.target):(Vt.setFromNormalAndCoplanarPoint(n.object.up,n.target),Bt.intersectPlane(Vt,n.target))))}else n.object instanceof Ie&&n.object.isOrthographicCamera&&(b=d!==1,b&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/d)),n.object.updateProjectionMatrix()));return d=1,w=!1,b||m.distanceToSquared(n.object.position)>c||8*(1-h.dot(n.object.quaternion))>c?(n.dispatchEvent(r),m.copy(n.object.position),h.copy(n.object.quaternion),b=!1,!0):!1}})(),this.connect=e=>{n.domElement=e,n.domElement.style.touchAction=`none`,n.domElement.addEventListener(`contextmenu`,Be),n.domElement.addEventListener(`pointerdown`,Ae),n.domElement.addEventListener(`pointercancel`,je),n.domElement.addEventListener(`wheel`,Fe)},this.dispose=()=>{var e,t,r,i,a,o;n.domElement&&(n.domElement.style.touchAction=`auto`),(e=n.domElement)==null||e.removeEventListener(`contextmenu`,Be),(t=n.domElement)==null||t.removeEventListener(`pointerdown`,Ae),(r=n.domElement)==null||r.removeEventListener(`pointercancel`,je),(i=n.domElement)==null||i.removeEventListener(`wheel`,Fe),(a=n.domElement)==null||a.ownerDocument.removeEventListener(`pointermove`,j),(o=n.domElement)==null||o.ownerDocument.removeEventListener(`pointerup`,je),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener(`keydown`,Le)};let n=this,r={type:`change`},i={type:`start`},a={type:`end`},o={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},s=o.NONE,c=1e-6,l=new Pe,u=new Pe,d=1,f=new N,p=new M,m=new M,h=new M,g=new M,_=new M,v=new M,y=new M,b=new M,x=new M,S=new N,C=new M,w=!1,T=[],E={};function D(){return 2*Math.PI/60/60*n.autoRotateSpeed}function ee(){return .95**n.zoomSpeed}function te(e){n.reverseOrbit||n.reverseHorizontalOrbit?u.theta+=e:u.theta-=e}function ne(e){n.reverseOrbit||n.reverseVerticalOrbit?u.phi+=e:u.phi-=e}let re=(()=>{let e=new N;return function(t,n){e.setFromMatrixColumn(n,0),e.multiplyScalar(-t),f.add(e)}})(),ie=(()=>{let e=new N;return function(t,r){n.screenSpacePanning===!0?e.setFromMatrixColumn(r,1):(e.setFromMatrixColumn(r,0),e.crossVectors(n.object.up,e)),e.multiplyScalar(t),f.add(e)}})(),O=(()=>{let e=new N;return function(t,r){let i=n.domElement;if(i&&n.object instanceof ke&&n.object.isPerspectiveCamera){let a=n.object.position;e.copy(a).sub(n.target);let o=e.length();o*=Math.tan(n.object.fov/2*Math.PI/180),re(2*t*o/i.clientHeight,n.object.matrix),ie(2*r*o/i.clientHeight,n.object.matrix)}else i&&n.object instanceof Ie&&n.object.isOrthographicCamera?(re(t*(n.object.right-n.object.left)/n.object.zoom/i.clientWidth,n.object.matrix),ie(r*(n.object.top-n.object.bottom)/n.object.zoom/i.clientHeight,n.object.matrix)):(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.`),n.enablePan=!1)}})();function ae(e){n.object instanceof ke&&n.object.isPerspectiveCamera||n.object instanceof Ie&&n.object.isOrthographicCamera?d=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),n.enableZoom=!1)}function oe(e){ae(d/e)}function se(e){ae(d*e)}function ce(e){if(!n.zoomToCursor||!n.domElement)return;w=!0;let t=n.domElement.getBoundingClientRect(),r=e.clientX-t.left,i=e.clientY-t.top,a=t.width,o=t.height;C.x=r/a*2-1,C.y=-(i/o)*2+1,S.set(C.x,C.y,1).unproject(n.object).sub(n.object.position).normalize()}function le(e){return Math.max(n.minDistance,Math.min(n.maxDistance,e))}function de(e){p.set(e.clientX,e.clientY)}function fe(e){ce(e),y.set(e.clientX,e.clientY)}function pe(e){g.set(e.clientX,e.clientY)}function me(e){m.set(e.clientX,e.clientY),h.subVectors(m,p).multiplyScalar(n.rotateSpeed);let t=n.domElement;t&&(te(2*Math.PI*h.x/t.clientHeight),ne(2*Math.PI*h.y/t.clientHeight)),p.copy(m),n.update()}function he(e){b.set(e.clientX,e.clientY),x.subVectors(b,y),x.y>0?oe(ee()):x.y<0&&se(ee()),y.copy(b),n.update()}function ge(e){_.set(e.clientX,e.clientY),v.subVectors(_,g).multiplyScalar(n.panSpeed),O(v.x,v.y),g.copy(_),n.update()}function _e(e){ce(e),e.deltaY<0?se(ee()):e.deltaY>0&&oe(ee()),n.update()}function ve(e){let t=!1;switch(e.code){case n.keys.UP:O(0,n.keyPanSpeed),t=!0;break;case n.keys.BOTTOM:O(0,-n.keyPanSpeed),t=!0;break;case n.keys.LEFT:O(n.keyPanSpeed,0),t=!0;break;case n.keys.RIGHT:O(-n.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),n.update())}function ye(){if(T.length==1)p.set(T[0].pageX,T[0].pageY);else{let e=.5*(T[0].pageX+T[1].pageX),t=.5*(T[0].pageY+T[1].pageY);p.set(e,t)}}function xe(){if(T.length==1)g.set(T[0].pageX,T[0].pageY);else{let e=.5*(T[0].pageX+T[1].pageX),t=.5*(T[0].pageY+T[1].pageY);g.set(e,t)}}function Se(){let e=T[0].pageX-T[1].pageX,t=T[0].pageY-T[1].pageY,n=Math.sqrt(e*e+t*t);y.set(0,n)}function k(){n.enableZoom&&Se(),n.enablePan&&xe()}function A(){n.enableZoom&&Se(),n.enableRotate&&ye()}function Ce(e){if(T.length==1)m.set(e.pageX,e.pageY);else{let t=We(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);m.set(n,r)}h.subVectors(m,p).multiplyScalar(n.rotateSpeed);let t=n.domElement;t&&(te(2*Math.PI*h.x/t.clientHeight),ne(2*Math.PI*h.y/t.clientHeight)),p.copy(m)}function we(e){if(T.length==1)_.set(e.pageX,e.pageY);else{let t=We(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);_.set(n,r)}v.subVectors(_,g).multiplyScalar(n.panSpeed),O(v.x,v.y),g.copy(_)}function Ee(e){let t=We(e),r=e.pageX-t.x,i=e.pageY-t.y,a=Math.sqrt(r*r+i*i);b.set(0,a),x.set(0,(b.y/y.y)**+n.zoomSpeed),oe(x.y),y.copy(b)}function De(e){n.enableZoom&&Ee(e),n.enablePan&&we(e)}function Oe(e){n.enableZoom&&Ee(e),n.enableRotate&&Ce(e)}function Ae(e){var t,r;n.enabled!==!1&&(T.length===0&&((t=n.domElement)==null||t.ownerDocument.addEventListener(`pointermove`,j),(r=n.domElement)==null||r.ownerDocument.addEventListener(`pointerup`,je)),Ve(e),e.pointerType===`touch`?Re(e):Me(e))}function j(e){n.enabled!==!1&&(e.pointerType===`touch`?ze(e):Ne(e))}function je(e){var t,r,i;He(e),T.length===0&&((t=n.domElement)==null||t.releasePointerCapture(e.pointerId),(r=n.domElement)==null||r.ownerDocument.removeEventListener(`pointermove`,j),(i=n.domElement)==null||i.ownerDocument.removeEventListener(`pointerup`,je)),n.dispatchEvent(a),s=o.NONE}function Me(e){let t;switch(e.button){case 0:t=n.mouseButtons.LEFT;break;case 1:t=n.mouseButtons.MIDDLE;break;case 2:t=n.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ue.DOLLY:if(n.enableZoom===!1)return;fe(e),s=o.DOLLY;break;case ue.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(n.enablePan===!1)return;pe(e),s=o.PAN}else{if(n.enableRotate===!1)return;de(e),s=o.ROTATE}break;case ue.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(n.enableRotate===!1)return;de(e),s=o.ROTATE}else{if(n.enablePan===!1)return;pe(e),s=o.PAN}break;default:s=o.NONE}s!==o.NONE&&n.dispatchEvent(i)}function Ne(e){if(n.enabled!==!1)switch(s){case o.ROTATE:if(n.enableRotate===!1)return;me(e);break;case o.DOLLY:if(n.enableZoom===!1)return;he(e);break;case o.PAN:if(n.enablePan===!1)return;ge(e)}}function Fe(e){n.enabled===!1||n.enableZoom===!1||s!==o.NONE&&s!==o.ROTATE||(e.preventDefault(),n.dispatchEvent(i),_e(e),n.dispatchEvent(a))}function Le(e){n.enabled!==!1&&n.enablePan!==!1&&ve(e)}function Re(e){switch(Ue(e),T.length){case 1:switch(n.touches.ONE){case Te.ROTATE:if(n.enableRotate===!1)return;ye(),s=o.TOUCH_ROTATE;break;case Te.PAN:if(n.enablePan===!1)return;xe(),s=o.TOUCH_PAN;break;default:s=o.NONE}break;case 2:switch(n.touches.TWO){case Te.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;k(),s=o.TOUCH_DOLLY_PAN;break;case Te.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;A(),s=o.TOUCH_DOLLY_ROTATE;break;default:s=o.NONE}break;default:s=o.NONE}s!==o.NONE&&n.dispatchEvent(i)}function ze(e){switch(Ue(e),s){case o.TOUCH_ROTATE:if(n.enableRotate===!1)return;Ce(e),n.update();break;case o.TOUCH_PAN:if(n.enablePan===!1)return;we(e),n.update();break;case o.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;De(e),n.update();break;case o.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Oe(e),n.update();break;default:s=o.NONE}}function Be(e){n.enabled!==!1&&e.preventDefault()}function Ve(e){T.push(e)}function He(e){delete E[e.pointerId];for(let t=0;t<T.length;t++)if(T[t].pointerId==e.pointerId){T.splice(t,1);return}}function Ue(e){let t=E[e.pointerId];t===void 0&&(t=new M,E[e.pointerId]=t),t.set(e.pageX,e.pageY)}function We(e){let t=e.pointerId===T[0].pointerId?T[1]:T[0];return E[t.pointerId]}this.dollyIn=(e=ee())=>{se(e),n.update()},this.dollyOut=(e=ee())=>{oe(e),n.update()},this.getScale=()=>d,this.setScale=e=>{ae(e),n.update()},this.getZoomScale=()=>ee(),t!==void 0&&this.connect(t),this.update()}},Gt=U.forwardRef(({makeDefault:e,camera:t,regress:n,domElement:r,enableDamping:i=!0,keyEvents:a=!1,onChange:o,onStart:s,onEnd:c,...l},u)=>{let d=O(e=>e.invalidate),f=O(e=>e.camera),p=O(e=>e.gl),m=O(e=>e.events),h=O(e=>e.setEvents),g=O(e=>e.set),_=O(e=>e.get),v=O(e=>e.performance),y=t||f,b=r||m.connected||p.domElement,x=U.useMemo(()=>new Wt(y),[y]);return D(()=>{x.enabled&&x.update()},-1),U.useEffect(()=>(a&&x.connect(a===!0?b:a),x.connect(b),()=>void x.dispose()),[a,b,n,x,d]),U.useEffect(()=>{let e=e=>{d(),n&&v.regress(),o&&o(e)},t=e=>{s&&s(e)},r=e=>{c&&c(e)};return x.addEventListener(`change`,e),x.addEventListener(`start`,t),x.addEventListener(`end`,r),()=>{x.removeEventListener(`start`,t),x.removeEventListener(`end`,r),x.removeEventListener(`change`,e)}},[o,s,c,x,d,h]),U.useEffect(()=>{if(e){let e=_().controls;return g({controls:x}),()=>g({controls:e})}},[e,x]),U.createElement(`primitive`,ve({ref:u,object:x,enableDamping:i},l))}),Kt=(0,U.createContext)(null);function qt({iterations:e=10,ms:t=250,threshold:n=.75,step:r=.1,factor:i=.5,flipflops:a=1/0,bounds:o=e=>e>100?[60,100]:[40,60],onIncline:s,onDecline:c,onChange:l,onFallback:u,children:d}){let[f,p]=(0,U.useState)(()=>({fps:0,index:0,factor:i,flipped:0,refreshrate:0,fallback:!1,frames:[],averages:[],subscriptions:new Map,subscribe:e=>{let t=Symbol();return f.subscriptions.set(t,e.current),()=>void f.subscriptions.delete(t)}})),m=0;return D(()=>{let{frames:i,averages:d}=f;if(!f.fallback&&d.length<e){i.push(performance.now());let p=i[i.length-1]-i[0];if(p>=t){if(f.fps=Math.round(i.length/p*1e3*1)/1,f.refreshrate=Math.max(f.refreshrate,f.fps),d[f.index++%e]=f.fps,d.length===e){let[t,i]=o(f.refreshrate),p=d.filter(e=>e>=i),h=d.filter(e=>e<t);p.length>e*n&&(f.factor=Math.min(1,f.factor+r),f.flipped++,s&&s(f),f.subscriptions.forEach(e=>e.onIncline&&e.onIncline(f))),h.length>e*n&&(f.factor=Math.max(0,f.factor-r),f.flipped++,c&&c(f),f.subscriptions.forEach(e=>e.onDecline&&e.onDecline(f))),m!==f.factor&&(m=f.factor,l&&l(f),f.subscriptions.forEach(e=>e.onChange&&e.onChange(f))),f.flipped>a&&!f.fallback&&(f.fallback=!0,u&&u(f),f.subscriptions.forEach(e=>e.onFallback&&e.onFallback(f))),f.averages=[]}f.frames=[]}}}),U.createElement(Kt.Provider,{value:f},d)}var G=n(),Jt=new S(`#A9DDF5`),Yt=new S(`#93A1AB`);function Xt({crisis:e,shadows:t}){let n=te(e),r=(0,U.useRef)({background:null,fog:null}),i=(0,U.useRef)(-1);return D(()=>{if(i.current===n.current)return;i.current=n.current;let e=ee(n.current);r.current.background?.lerpColors(Jt,Yt,e),r.current.fog?.color.lerpColors(Jt,Yt,e)}),(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(`color`,{ref:e=>{r.current.background=e},attach:`background`,args:[Jt]}),(0,G.jsx)(`fog`,{ref:e=>{r.current.fog=e},attach:`fog`,args:[Jt,90,260]}),(0,G.jsx)(`hemisphereLight`,{args:[`#E3F4FC`,`#7BB661`,1.1]}),(0,G.jsx)(`directionalLight`,{castShadow:t,position:[18,40,24],intensity:2.4,color:`#FFF5E6`,"shadow-mapSize":[2048,2048],"shadow-camera-left":-30,"shadow-camera-right":30,"shadow-camera-top":30,"shadow-camera-bottom":-30,"shadow-camera-far":120,"shadow-bias":-5e-4})]})}var Zt=7.5,Qt=10,$t=6,en=[0,1.5,0],tn=new N(0,22.5,30).normalize(),nn=1.6,rn=.4,an=2.4,on=.3,sn=1.4,cn=.15,ln={province:{margin:1.3,lift:.6},seize:{margin:1.2,lift:.2},trade:{margin:1.2,lift:.2},gift:{margin:1.4,lift:.5}},un=e=>e in ln,dn=8.5,fn=.12,pn=.6,mn=.7,hn=4.5,gn=new N(0,1,0),_n={build:{point:[0,_e+cn,Qe],radius:sn},elite:{point:[0,_e+.45,Qe],radius:1.6},collapse:{point:[0,_e+cn,Qe],radius:sn},owner:{point:[0,_e+cn,Qe],radius:sn},toll:{point:[0,_e+cn,0],radius:sn},rent:{point:[0,.3,Qe/2],radius:1.2},jail:{point:[.22,.45,.22],radius:1.7},raid:{point:[0,.25,0],radius:1.5},bankrupt:{point:[.15,.25,.05],radius:1.3},pinjol:{point:[0,1.15,.05],radius:1.6},tax:{point:[0,.25,-.2],radius:1.2},tollPay:{point:[.1,.3,.3],radius:1.3},parking:{point:[.25,.4,.3],radius:1.3},bail:{point:[0,.35,-.2],radius:1.5},debt:{point:[.2,.2,.2],radius:1.3}};function vn(e,t,n,r){if(n.kind===`pulse`)return;if(n.kind===`crisis`||n.kind===`rentRise`){r.target.set(...en),r.distance=bn(t,dn);return}let i=n.tiles.flatMap(t=>{let n=e.getObjectByName(b(t));return n?(n.updateWorldMatrix(!0,!1),[n.matrixWorld]):[]});if(i.length===0)return;if(un(n.kind)){let{margin:e,lift:a}=ln[n.kind],o=i.map(e=>new N().applyMatrix4(e));r.target.set(0,0,0);for(let e of o)r.target.add(e);r.target.divideScalar(o.length);let s=Math.max(...o.map(e=>e.distanceTo(r.target)));r.target.y+=a,r.distance=bn(t,s+e);return}let a=_n[n.kind];r.target.set(...a.point).applyMatrix4(i[0]),r.distance=bn(t,a.radius)}function yn(e,t){let n=Math.tan(fe.degToRad(e.fov/2));return Math.max($t,Qt/(n*Math.min(1,t)))}function bn(e,t){return t/(Math.tan(fe.degToRad(e.fov/2))*Math.min(1,e.aspect))}function xn(e){let t=e?.target;if(!t)return;let{target:n,object:r}=t,i=fe.clamp(n.x,-7.5,Zt)-n.x,a=fe.clamp(n.z,-7.5,Zt)-n.z;(i!==0||a!==0)&&(n.x+=i,n.z+=a,r.position.x+=i,r.position.z+=a)}function Sn(e){let t=(0,U.useRef)(null),n=(0,U.useRef)(null),r=(0,U.useRef)(new N),i=(0,U.useRef)({target:new N,distance:0,until:-1,yaw:0}),a=(0,U.useRef)({target:new N,position:new N,view:new N}),o=(0,U.useRef)({id:0,start:0});return D(({clock:s,scene:c},l)=>{let u=t.current;if(!u)return;let d=s.elapsedTime,{current:f,focus:p}=P.getState(),m=i.current,{shots:h,reveals:g,moves:_,playingShot:v,playShot:y,finishShot:b}=L.getState(),x=g.length===0&&_.length===0?h[0]:void 0;if(we.active)m.target.copy(we.position).setY(we.position.y+on),m.distance=bn(e,an),m.yaw=0,m.until=d+mn;else if(p&&f&&!f.landed)m.target.set(p[0],p[1]+rn,p[2]),m.distance=bn(e,nn),m.yaw=0,m.until=d+mn;else if(x){o.current.id!==x.id&&(o.current={id:x.id,start:d});let t=d-o.current.start,n=R[x.kind];t>=n.change&&v!==x.id&&y(x.id),t>=n.end&&b(x.id),x.kind!==`pulse`&&(vn(c,e,x,m),m.yaw=x.kind===`crisis`?t*fn:0,m.until=d+mn)}let S=1-Math.exp(-l*hn),{target:C,position:w}=a.current;if(d<m.until){n.current||(n.current={position:e.position.clone(),target:u.target.clone()},r.current.copy(e.position).sub(u.target).normalize(),r.current.y=Math.max(r.current.y,pn),r.current.normalize(),u.enabled=!1),C.copy(m.target);let t=a.current.view.copy(r.current).applyAxisAngle(gn,m.yaw);w.copy(C).addScaledVector(t,m.distance)}else if(n.current){if(C.copy(n.current.target),w.copy(n.current.position),e.position.distanceToSquared(w)<.001&&u.target.distanceToSquared(C)<.001){e.position.copy(w),u.target.copy(C),n.current=null,u.enabled=!0;return}}else return;u.target.lerp(C,S),e.position.lerp(w,S),e.lookAt(u.target)}),t}function Cn(){let e=O(e=>e.camera),t=O(e=>e.size.width/e.size.height),n=yn(e,t),r=Sn(e);return(0,U.useLayoutEffect)(()=>{e.position.set(...en).addScaledVector(tn,yn(e,t))},[e]),(0,G.jsx)(Gt,{ref:r,target:en,minDistance:$t,maxDistance:n,maxPolarAngle:1.35,screenSpacePanning:!1,enableDamping:!0,onChange:xn})}var wn=.62,Tn=.9,En=.37,Dn=.22,On=.5,kn=2.75,An=.08,jn={takdir:`#2BB3A0`,musibah:`#E5383B`,krisis:`#161412`,simpanan:`#8E5BD9`},Mn=new Map;function Nn(e){let t=Mn.get(e);return t||(t=A(248,360,t=>{t.fillStyle=jn[e],t.strokeStyle=`#161412`,t.lineWidth=10,t.beginPath(),t.roundRect(5,5,238,350,26),t.fill(),t.stroke(),t.lineWidth=6,t.beginPath(),t.roundRect(24,24,200,312,16),t.stroke(),t.fillStyle=`#FFF8E8`,t.beginPath(),t.arc(124,160,52,0,Math.PI*2),t.fill(),t.stroke(),t.beginPath(),t.roundRect(54,232,140,44,8),t.fill(),t.stroke(),t.fillStyle=`#161412`,t.font=`bold 28px sans-serif`,t.textAlign=`center`,t.textBaseline=`middle`,t.fillText(Ct[e],124,255,128),t.font=`bold 60px sans-serif`,t.fillText(`?`,124,162)}),Mn.set(e,t)),t}var Pn=new Re(wn,Tn),Fn=new be().setFromAxisAngle(new N(1,0,0),-Math.PI/2),In=e=>e*e*(3-2*e),Ln={lifted:new N,target:new N,face:new be};function Rn(e,t,n,r,i){if(!e)return;let{lifted:a,target:o,face:s}=Ln;if(a.copy(r.position).setY(r.position.y+On),i<Dn){let t=1-(1-i/Dn)**2;e.position.lerpVectors(r.position,a,t),e.quaternion.copy(r.quaternion)}else{let t=In(Math.min(1,(i-Dn)/(yt-Dn)));n.getWorldDirection(o),o.multiplyScalar(kn).add(n.position),e.position.lerpVectors(a,o,t),s.copy(n.quaternion),e.quaternion.slerpQuaternions(r.quaternion,s,t)}t.opacity=Math.max(0,Math.min(1,(yt-i)/An))}function zn({deck:e,cardId:t}){let{nodes:n}=x(j),r=O(e=>e.camera),i=(0,U.useRef)(null),a=(0,U.useRef)(null),[o]=(0,U.useState)(()=>new h({map:Nn(ct(t).deck),side:2,transparent:!0,depthTest:!1,depthWrite:!1}));(0,U.useEffect)(()=>()=>o.dispose(),[o]);let s=(0,U.useMemo)(()=>{let t=n[e===`takdir`?`Deck_Takdir`:`Deck_Musibah`];return t?.updateWorldMatrix(!0,!1),{position:t?new N(0,En,0).applyMatrix4(t.matrixWorld):new N,quaternion:(t?.getWorldQuaternion(new be)??new be).multiply(Fn)}},[n,e]);return D(({clock:e})=>{a.current??=e.elapsedTime,Rn(i.current,o,r,s,e.elapsedTime-a.current)}),(0,G.jsx)(`mesh`,{ref:i,geometry:Pn,material:o,position:s.position,quaternion:s.quaternion,renderOrder:20})}function Bn({at:[e,t],appear:n,fade:r,children:i}){let{nodes:a}=x(j),o=(0,U.useMemo)(()=>Ne(a.Island,e,t),[a,e,t]),s=(0,U.useRef)(null);return(0,U.useLayoutEffect)(()=>{let e=s.current;if(!e)return;e.scale.setScalar(1),e.updateMatrixWorld(!0);let t=je(e);return e.scale.setScalar(0),t},[]),D(()=>{Ee(s.current,r.current,n)&&y()}),(0,G.jsx)(`group`,{ref:s,position:o,rotation:[0,ze(e,t),0],scale:0,children:i})}var Vn={at:[-.4,-10.2],appear:.05},Hn={at:[11,-2.2],appear:.12},Un={at:[-10.8,4.5],appear:.19},Wn=`#161412`,Gn=A(512,288,e=>{e.fillStyle=`#FFF8E8`,e.fillRect(0,0,512,288),e.strokeStyle=`#D8D0BE`,e.lineWidth=2;for(let t=90;t<280;t+=45)e.beginPath(),e.moveTo(24,t),e.lineTo(488,t),e.stroke();e.fillStyle=Wn,e.font=`bold 34px sans-serif`,e.fillText(`EKONOMI +62`,24,52),e.fillStyle=`#E5383B`,e.textAlign=`right`,e.font=`bold 48px sans-serif`,e.fillText(`-62%`,488,56);let t=[[30,100],[100,92],[150,130],[210,115],[270,170],[330,160],[390,225],[450,252]];e.strokeStyle=`#E5383B`,e.lineWidth=10,e.lineJoin=`round`,e.beginPath();for(let[n,r]of t)e.lineTo(n,r);e.stroke(),e.fillStyle=`#E5383B`,e.beginPath(),e.moveTo(492,270),e.lineTo(430,270),e.lineTo(480,220),e.closePath(),e.fill()}),Kn=A(512,128,e=>{e.fillStyle=`#C62828`,e.fillRect(0,0,512,128),e.fillStyle=`#FFF8E8`,e.font=`bold 54px sans-serif`,e.textAlign=`center`,e.textBaseline=`middle`,e.fillText(`TURUNKAN HARGA!`,256,68,480)}),qn=A(64,64,e=>{let t=e.createRadialGradient(32,32,0,32,32,32);t.addColorStop(0,`rgba(255, 255, 255, 1)`),t.addColorStop(.6,`rgba(255, 255, 255, 0.5)`),t.addColorStop(1,`rgba(255, 255, 255, 0)`),e.fillStyle=t,e.fillRect(0,0,64,64)}),Jn=new k({color:`#5B3A1E`,roughness:.9}),Yn=new k({color:`#2B2B2B`,roughness:.8}),Xn=new k({color:`#1E1E1E`,roughness:.95}),Zn=new k({color:`#C9A24A`,roughness:.8}),Qn=new h({map:Gn}),$n=new k({map:Kn,side:2,roughness:.9}),[er,tr]=[`#FF8A1F`,`#FFD23F`].map(e=>new h({color:e})),nr=[{at:[0,.95,0],material:er},{at:[.12,.95,.06],material:er},{at:[-.06,.95,-.1],material:tr}],rr=new _(.1,2.2,.1),ir=new _(2.9,1.7,.08),ar=new Re(2.75,1.55),or=new me(.34,.14,8,16).rotateX(Math.PI/2),sr=new E(.16,.5,6).translate(0,.25,0),cr=new Ve(.04,.04,1.9,6),lr=new Re(2.4,.6,16,1),ur=Float32Array.from(lr.getAttribute(`position`).array),dr=14,fr=3.5,pr=Array.from({length:dr},()=>new De({map:qn,color:`#3A3A3A`,transparent:!0,opacity:0,depthWrite:!1}));function mr({crisis:e}){let t=te(e),n=(0,U.useRef)([]),r=(0,U.useRef)([]),i=(0,U.useRef)(null);return D(({clock:e})=>{let a=t.current;if(a===0)return;let o=e.elapsedTime;n.current.forEach((e,t)=>e?.scale.set(1,.8+.45*Math.abs(Math.sin(o*9+t*2.1)),1)),r.current.forEach((e,t)=>{if(!e)return;let n=(o+t/dr*fr)%fr;e.position.set(Math.sin(n*1.3+t)*.25+n*.35,1.1+n*1.1,Math.cos(n*1.1+t)*.2),e.scale.setScalar(.5+n*.55),pr[t].opacity=.65*(1-n/fr)*Math.min(1,n/.3)*a});let s=i.current?.geometry.getAttribute(`position`);if(s){for(let e=0;e<s.count;e++){let t=ur[e*3],n=1-(t/1.2)**2;s.setZ(e,Math.sin(t*2.5+o*3)*.07*n)}s.needsUpdate=!0}}),(0,G.jsxs)(G.Fragment,{children:[(0,G.jsxs)(Bn,{...Vn,fade:t,children:[[-1.3,1.3].map(e=>(0,G.jsx)(`mesh`,{geometry:rr,material:Jn,position:[e,1.1,0],castShadow:!0},e)),(0,G.jsx)(`mesh`,{geometry:ir,material:Yn,position:[0,2.2,0],castShadow:!0}),(0,G.jsx)(`mesh`,{geometry:ar,material:Qn,position:[0,2.2,.045]})]}),(0,G.jsxs)(Bn,{...Hn,fade:t,children:[[0,1,2,3].map(e=>(0,G.jsx)(`mesh`,{geometry:or,material:Xn,position:[Math.sin(e*2.4)*.05,.14+e*.24,Math.cos(e*2.4)*.05],rotation:[.08*Math.sin(e),e*.7,.06*Math.cos(e)],castShadow:!0},e)),nr.map(({at:e,material:t},r)=>(0,G.jsx)(`mesh`,{ref:e=>{n.current[r]=e},geometry:sr,material:t,position:e},r)),pr.map((e,t)=>(0,G.jsx)(`sprite`,{ref:e=>{r.current[t]=e},material:e},t))]}),(0,G.jsxs)(Bn,{...Un,fade:t,children:[[-1.25,1.25].map(e=>(0,G.jsx)(`mesh`,{geometry:cr,material:Zn,position:[e,.95,0],castShadow:!0},e)),(0,G.jsx)(`mesh`,{ref:i,geometry:lr,material:$n,position:[0,1.55,0]})]})]})}var K=(e,t)=>e+Math.random()*(t-e),hr=[[0,0,0],[-.9,.1,-.8],[.9,-.05,-.85],[-1.7,.2,-1.6]],gr=1.3,_r=[5,6.5],vr=6.5,yr=24,br=[8,15],xr=1.5,Sr=10,Cr=5,wr=[11,14],Tr=[2.8,4.2],Er=[.18,.28],Dr=[7,10],Or=[1.2,2.6],kr=.5,Ar=new k({color:`#1C1C20`,roughness:.8}),jr=new k({color:`#1C1C20`,roughness:.8,side:2}),Mr=new k({color:`#4A4A4A`}),Nr=new Be(1,8,6),Pr=new E(.03,.1,4).rotateX(Math.PI/2),Fr=new _(.14,.02,.16),Ir=e=>new Re(.55,.22).rotateX(-Math.PI/2).translate(e*.275,0,-.02),Lr=[Ir(-1),Ir(1)];function Rr({crisis:e}){let t=te(e),n=(0,U.useRef)(null),r=(0,U.useRef)([]),i=(0,U.useRef)({born:-1,next:-1,angle:0,side:0,height:0});return D(({clock:e})=>{let a=n.current;if(!a)return;let o=e.elapsedTime,s=i.current;if(t.current<1){a.visible=!1,s.born=-1,s.next=-1;return}s.next<0&&(s.next=o+xr),s.born<0&&o>=s.next&&(s.born=o,s.angle=K(0,Math.PI*2),s.side=K(-5,5),s.height=K(..._r));let c=o-s.born,l=c*vr-yr;if(s.born<0||l>yr){s.born>=0&&(s.next=o+K(...br)),s.born=-1,a.visible=!1;return}a.visible=!0;let u=Math.sin(s.angle),d=Math.cos(s.angle);a.position.set(u*l+d*s.side,s.height+Math.sin(c*1.5)*.2,d*l-u*s.side),a.rotation.y=s.angle,r.current.forEach((e,t)=>{e&&(e.rotation.z=(t%2?-1:1)*Math.sin(o*Sr+Math.floor(t/2))*.55)})}),(0,G.jsx)(`group`,{ref:n,visible:!1,children:hr.map((e,t)=>(0,G.jsxs)(`group`,{position:e,scale:gr,children:[(0,G.jsx)(`mesh`,{geometry:Nr,material:Ar,scale:[.1,.08,.26]}),(0,G.jsx)(`mesh`,{geometry:Nr,material:Ar,position:[0,.03,.26],scale:.075}),(0,G.jsx)(`mesh`,{geometry:Pr,material:Mr,position:[0,.02,.36]}),(0,G.jsx)(`mesh`,{geometry:Fr,material:Ar,position:[0,0,-.3]}),Lr.map((e,n)=>(0,G.jsx)(`group`,{ref:e=>{r.current[t*2+n]=e},position:[n?.06:-.06,.02,0],children:(0,G.jsx)(`mesh`,{geometry:e,material:jr})},n))]},t))})}var zr=()=>({born:-1,life:0,angle:0,speed:0,radius:0,height:0,phase:0,spin:[0,0,0]}),Br=new qe;function Vr(e,t,n,r){for(let i=0;i<Cr;i++){let a=e[n+i],o=r-a.born;if(a.born<0||o>a.life)a.born=-1,Br.scale.setScalar(0);else{let e=a.angle+a.speed*o;Br.position.set(Math.sin(e)*a.radius,a.height+Math.sin(o*2.6+a.phase)*.35,Math.cos(e)*a.radius),Br.rotation.set(a.spin[0]*o,a.spin[1]*o+a.phase,a.spin[2]*o),Br.scale.setScalar(Math.min(1,o/kr,(a.life-o)/kr))}Br.updateMatrix(),t.setMatrixAt(i,Br.matrix)}t.instanceMatrix.needsUpdate=!0}function Hr({crisis:e}){let{bill:t,bills:n}=ye(),r=te(e),i=(0,U.useRef)([]),a=(0,U.useRef)(Array.from({length:10},zr)),o=(0,U.useRef)(0);return(0,U.useLayoutEffect)(()=>{i.current.forEach((e,t)=>e&&Vr(a.current,e,t*Cr,0))},[]),D(({clock:e})=>{let t=e.elapsedTime;if(r.current===1&&t>=o.current){let e=a.current.findIndex(e=>e.born<0);e>=0&&(a.current[e]={born:t,life:K(...Dr),angle:K(0,Math.PI*2),speed:K(...Er),radius:K(...wr),height:K(...Tr),phase:K(0,Math.PI*2),spin:[K(-3,3),K(-1.5,1.5),K(-3,3)]}),o.current=t+K(...Or)}i.current.forEach((e,n)=>e&&Vr(a.current,e,n*Cr,t))}),n.map((e,n)=>(0,G.jsx)(`instancedMesh`,{ref:e=>{i.current[n]=e},args:[t,e,Cr],frustumCulled:!1},n))}function Ur({crisis:e}){let[t]=(0,U.useState)(()=>window.matchMedia(`(prefers-reduced-motion: reduce)`).matches);return(0,G.jsxs)(G.Fragment,{children:[!t&&(0,G.jsx)(Rr,{crisis:e}),!t&&(0,G.jsx)(Hr,{crisis:e})]})}var Wr=.6,Gr=.05,Kr=2.1,qr=new N(0,1,0),Jr={perfect:`FX_Perfect`,biasa:`FX_Biasa`,cupu:`FX_Cupu`},Yr={perfect:{height:3.4,bounces:3,travel:6.5,spins:3.5,duration:1.9,hold:.35},biasa:{height:1.8,bounces:2,travel:4,spins:2,duration:1.35,hold:.25},cupu:{height:.45,bounces:1,travel:1.1,spins:.5,duration:.85,hold:.3}},Xr=e=>1-(1-e)**3,Zr=e=>(Math.random()*2-1)*e;function Qr(e,t,n,r,i,a){let o=Yr[t]||Yr.biasa,s=new N(i.position.x,0,i.position.z);s.lengthSq()<1e-6&&s.set(0,0,1),s.normalize();let c=new N(1,0,1).normalize(),l=e=>e.clone().multiplyScalar(Kr).setY(a).project(i).x,u=l(c)>=l(c.clone().negate())?c:c.negate(),d=new N(-u.z,0,u.x),f=u.clone().multiplyScalar(Kr+Zr(.2)).addScaledVector(d,(n-(r-1)/2)*.8+Zr(.12));f.y=a;let p=s.clone().negate();p.applyAxisAngle(qr,Zr(.25));let m=f.clone().addScaledVector(p,-o.travel*(1+Zr(.1))),h=new be().setFromAxisAngle(qr,Math.random()*Math.PI*2).multiply(new be().setFromUnitVectors(e,qr)),g=new N().crossVectors(qr,p).add(new N(Zr(.3),Zr(.3),Zr(.3))).normalize(),_=[o.height*(1+Zr(.1))];for(let e=1;e<=o.bounces;e++)_.push(_[0]*.32**e);let v=_.map((e,t)=>Math.sqrt(e)*(t===0?1:2)),y=v.reduce((e,t)=>e+t,0),b=0,x=_.map((e,t)=>(b+=v[t]/y*.85,{height:e,until:b,drop:t===0}));return{start:m,end:f,final:h,spinAxis:g,spinAngle:o.spins*Math.PI*2*(1+Zr(.15)),hops:x,duration:o.duration}}function $r(e,t){let n=0;for(let r of e.hops){if(t<r.until){let e=(t-n)/(r.until-n);return r.drop?r.height*(1-e*e):r.height*4*e*(1-e)}n=r.until}return 0}function ei({template:e,plan:t,hold:n,onSettled:r,onLanded:i}){let o=(0,U.useMemo)(()=>{let t=e.clone();return t.traverse(e=>{e.castShadow=!0,e.receiveShadow=!0}),t},[e]),s=(0,U.useRef)(null),c=(0,U.useRef)(null),l=(0,U.useRef)(!1),u=(0,U.useRef)(!1),d=(0,U.useRef)(new be),f=(0,U.useRef)(0);return D(({clock:e})=>{let o=s.current;if(!o)return;c.current??=e.elapsedTime;let p=e.elapsedTime-c.current,m=Math.min(1,p/t.duration),h=Xr(m);for(o.position.lerpVectors(t.start,t.end,h),o.position.y=t.end.y+$r(t,m),d.current.setFromAxisAngle(t.spinAxis,t.spinAngle*(1-h)),o.quaternion.multiplyQuaternions(d.current,t.final);f.current<t.hops.length&&m>=t.hops[f.current].until;)a(`dadu-pantul`,.65**f.current),f.current++;!l.current&&m>=1&&(l.current=!0,r?.()),!u.current&&y(),!u.current&&p>t.duration+n&&(u.current=!0,i?.())}),(0,G.jsx)(`primitive`,{ref:s,object:o,position:t.start})}function ti(){let{scene:e,animations:t}=x(g),n=(0,U.useRef)(null),r=(0,U.useRef)(null),i=P(e=>e.current),a=P(e=>e.focus),o=(0,U.useMemo)(()=>Object.keys(Jr).flatMap(t=>{let n=e.getObjectByName(Jr[t]);return n?[{level:t,root:n}]:[]}),[e]),s=i?.settled?i.level:null;return D((e,t)=>r.current?.update(t)),(0,U.useEffect)(()=>{let e=t.find(e=>e.name===Jr[s??`biasa`]);if(!s||!e||!n.current)return;r.current??=new et(n.current);let i=r.current.clipAction(e);return i.reset().setLoop(de,1),i.clampWhenFinished=!0,i.play(),()=>{i.stop()}},[i?.id,s]),(0,G.jsx)(`group`,{ref:n,position:a??void 0,children:o.map(({level:e,root:t})=>(0,G.jsx)(`primitive`,{object:t,visible:s===e},e))})}function ni(){let e=P(e=>e.current),t=P(e=>e.settle),n=P(e=>e.land),r=P(e=>e.setFocus),i=O(e=>e.camera),{nodes:a}=x(j),{scene:o}=x(g),s=(0,U.useMemo)(()=>o.getObjectByName(`Die`),[o]),c=(0,U.useMemo)(()=>JSON.parse(s.userData.faces),[s]),l=(a.Board?.position.y??0)+Gr,u=(0,U.useMemo)(()=>e?e.values.map((t,n)=>Qr(new N(...c[t]),e.level,n,e.values.length,i,l+Wr/2)):[],[e?.id]);return(0,U.useEffect)(()=>{if(!e||u.length===0)return;let t=u.reduce((e,t)=>e.add(t.end),new N).divideScalar(u.length);r(e.id,[t.x,l,t.z])},[u]),(0,G.jsxs)(G.Fragment,{children:[e&&u.map((r,i)=>(0,G.jsx)(ei,{template:s,plan:r,hold:(Yr[e.level]||Yr.biasa).hold,onSettled:i===0?()=>t(e.id):void 0,onLanded:i===0?()=>n(e.id):void 0},`${e.id}:${i}`)),(0,G.jsx)(ti,{})]})}x.preload(g);var ri=(e,t)=>e+Math.random()*(t-e),ii=A(32,32,e=>{let t=e.createRadialGradient(16,16,0,16,16,16);t.addColorStop(0,`#fff`),t.addColorStop(1,`rgba(255, 255, 255, 0)`),e.fillStyle=t,e.fillRect(0,0,32,32)}),ai=(e,t)=>new Ge({color:e,size:t,map:ii,transparent:!0,opacity:0,depthWrite:!1});function oi(e,t,n){let r=new Float32Array(e*3),i=Array.from({length:e},()=>ri(...n));for(let n=0;n<e;n++)r[n*3]=ri(-.5,.5)*t.width,r[n*3+1]=ri(0,t.height),r[n*3+2]=ri(-.5,.5)*t.depth;let a=new C;return a.setAttribute(`position`,new ce(r,3)),{geometry:a,speeds:i}}function si(e,t,n,r){let i=e.getAttribute(`position`);for(let e=0;e<t.length;e++){let a=i.getY(e)+t[e]*r;i.setY(e,a>n?0:a)}i.needsUpdate=!0}var ci=`#FFB627`,li=30,ui={width:.8,depth:.35,height:1},di=[.5,1.1],fi=.18,pi=[{at:[-.26,.4,.06],size:.3},{at:[.24,.5,-.04],size:.36},{at:[.02,.7,.08],size:.28},{at:[-.1,.56,-.1],size:.24},{at:[.34,.34,.1],size:.24},{at:[-.34,.66,-.02],size:.22}],mi=.7,hi=.35,gi=.3,_i=.5,vi=R.elite.end-R.elite.change,yi=A(64,64,e=>{let t=e.createRadialGradient(32,32,0,32,32,18);t.addColorStop(0,`rgba(255, 255, 255, 0.9)`),t.addColorStop(1,`rgba(255, 255, 255, 0)`),e.fillStyle=t,e.fillRect(0,0,64,64),e.fillStyle=`#fff`,e.beginPath(),e.moveTo(32,2),e.quadraticCurveTo(35,29,62,32),e.quadraticCurveTo(35,35,32,62),e.quadraticCurveTo(29,35,2,32),e.quadraticCurveTo(29,29,32,2),e.fill()}),bi=ai(ci,.12),xi=new De({map:yi,color:ci,transparent:!0,opacity:0,depthWrite:!1});function Si({tile:e}){let{nodes:t}=x(j),n=(0,U.useRef)(null),r=(0,U.useRef)([]),[i]=(0,U.useState)(()=>oi(li,ui,di));(0,U.useEffect)(()=>()=>i.geometry.dispose(),[i]);let a=(0,U.useMemo)(()=>{let n=t[b(e)];return n?(n.updateWorldMatrix(!0,!1),n.matrixWorld.clone().multiply(new ie().makeTranslation(0,_e,Qe))):null},[t,e]);return D(({clock:e},t)=>{n.current??=e.elapsedTime;let a=e.elapsedTime-n.current-hi,o=Math.max(0,Math.min(1,a/gi,(vi-hi-a)/_i));bi.opacity=o,xi.opacity=o,xi.rotation=a*1.5,r.current.forEach((e,t)=>{let n=(a/mi+t/pi.length)%1;e?.scale.setScalar(pi[t].size*Math.max(0,Math.sin(n*Math.PI))**2)}),si(i.geometry,i.speeds,ui.height,Math.min(t,1/30))}),a?(0,G.jsxs)(`group`,{matrix:a,matrixAutoUpdate:!1,children:[(0,G.jsx)(`points`,{geometry:i.geometry,material:bi,"position-y":fi}),pi.map(({at:e},t)=>(0,G.jsx)(`sprite`,{ref:e=>{r.current[t]=e},material:xi,position:e,scale:0},t))]}):null}var Ci={toll:1.6,jail:1.7},wi=1.35,Ti=.75,Ei=.35,Di=.7,Oi=.15,ki=new N;function Ai(e){for(let t of e){let e=t.hinge.parent;if(!e?.visible)continue;e.getWorldPosition(ki);let n=we.active&&Math.hypot(we.position.x-ki.x,we.position.z-ki.z)<Ci[t.kind];if(n===t.open)continue;t.open=n;let r={...n?{duration:Ei,ease:`back.out(1.6)`}:{duration:Di,delay:Oi,ease:`bounce.out`},overwrite:!0,onUpdate:y};t.kind===`toll`?Ae.to(t.hinge.rotation,{x:n?wi:0,...r}):Ae.to(t.hinge.position,{y:n?Ti:0,...r})}}function ji({overrides:e}){let{scene:t}=x(j),n=(0,U.useRef)([]),r=Object.keys(e).join();return(0,U.useLayoutEffect)(()=>{let e=[];return t.traverse(t=>{let n=t.userData.gate;n&&e.push({hinge:t,kind:n,open:!1})}),n.current=e,()=>{for(let{hinge:t,kind:n}of e)Ae.killTweensOf([t.rotation,t.position]),n===`toll`?t.rotation.x=0:t.position.y=0}},[t,r]),D(()=>Ai(n.current)),null}var Mi=.66,Ni=[0,.016,-.05],Pi={polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4},Fi=-.22,Ii=2.2,Li=.18,Ri=.35,zi=.9,Bi=.5;function Vi(e,t){return A(320,150,n=>{n.fillStyle=`rgba(255, 248, 232, 0.7)`,n.beginPath(),n.roundRect(8,8,304,134,16),n.fill(),n.strokeStyle=t,n.fillStyle=t,n.lineWidth=10,n.beginPath(),n.roundRect(8,8,304,134,16),n.stroke(),n.lineWidth=4,n.beginPath(),n.roundRect(22,22,276,106,10),n.stroke(),n.font=`bold 64px sans-serif`,n.textAlign=`center`,n.textBaseline=`middle`,n.fillText(e,160,78,250),n.globalCompositeOperation=`destination-out`;for(let e=0;e<90;e++)n.globalAlpha=.2+Math.random()*.4,n.beginPath(),n.arc(Math.random()*320,Math.random()*150,1+Math.random()*3,0,Math.PI*2),n.fill()})}var Hi=new Re(Mi,Mi*150/320).rotateX(-Math.PI/2),Ui={mortgaged:Vi(`DIGADAI`,`#C62828`),paid:Vi(`LUNAS`,`#2E7D32`)};function Wi(e,t){let n=e[b(t)];return n?(n.updateWorldMatrix(!0,!1),n.matrixWorld.clone()):null}function Gi({matrix:e,kind:t,slam:n,onDone:r}){let i=(0,U.useRef)(null),[a]=(0,U.useState)(()=>new h({map:Ui[t],transparent:!0,depthWrite:!1,opacity:+!n,...Pi})),o=(0,U.useMemo)(()=>e.clone().multiply(new ie().makeTranslation(...Ni)),[e]);return(0,U.useLayoutEffect)(()=>{let e=i.current;if(!e)return;let o=Ae.timeline();return n&&(o.fromTo(e.scale,{x:Ii,y:Ii,z:Ii},{x:1,y:1,z:1,duration:Li,ease:`power3.in`},0),o.fromTo(a,{opacity:0},{opacity:1,duration:Li,ease:`power1.in`},0),o.to(e.scale,{keyframes:{x:[.94,1],z:[.94,1]},duration:.16})),t===`paid`&&o.to(a,{opacity:0,duration:Bi,delay:zi,onComplete:r}),()=>{o.kill()}},[]),(0,U.useLayoutEffect)(()=>()=>a.dispose(),[a]),(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(`group`,{matrix:e,matrixAutoUpdate:!1,children:(0,G.jsx)(`mesh`,{ref:i,geometry:Hi,material:a,position:Ni,"rotation-y":Fi})}),n&&(0,G.jsx)(Xe,{matrix:o,delay:Li})]})}function Ki({matrix:e,onDone:t}){let[n]=(0,U.useState)(()=>new h({map:Ui.mortgaged,transparent:!0,depthWrite:!1,...Pi})),r=(0,U.useRef)(null);return(0,U.useLayoutEffect)(()=>{let e=r.current;if(!e)return;let i=Ae.timeline({onComplete:t}).to(n,{opacity:0,duration:Ri},0).to(e.scale,{x:1.15,z:1.15,duration:Ri},0);return()=>{i.kill(),n.dispose()}},[]),(0,G.jsx)(`group`,{matrix:e,matrixAutoUpdate:!1,children:(0,G.jsx)(`mesh`,{ref:r,geometry:Hi,material:n,position:Ni,"rotation-y":Fi})})}function qi({properties:e}){let{nodes:t}=x(j),n=it.filter(t=>e[t]?.mortgaged),[r,i]=(0,U.useState)(()=>new Set(n)),[a,o]=(0,U.useState)(e),[s,c]=(0,U.useState)([]),[l,u]=(0,U.useState)(0);if(a!==e){let t=it.filter(t=>a[t]?.mortgaged&&!e[t]?.mortgaged);o(e),t.length>0&&(u(l+t.length),i(new Set([...r].filter(e=>!t.includes(e)))),c([...s,...t.map((t,n)=>({id:`${t}:${l+n}`,tile:t,paid:e[t]?.owner!==void 0&&e[t]?.owner===a[t]?.owner}))]))}let d=e=>c(t=>t.filter(t=>t.id!==e));return(0,G.jsxs)(G.Fragment,{children:[n.flatMap(e=>{let n=Wi(t,e);return n?[(0,G.jsx)(Gi,{matrix:n,kind:`mortgaged`,slam:!r.has(e)},`gadai:${e}`)]:[]}),s.flatMap(({id:e,tile:n,paid:r})=>{let i=Wi(t,n);return i?[(0,G.jsx)(Ki,{matrix:i,onDone:r?void 0:()=>d(e)},`lepas:${e}`),r&&(0,G.jsx)(Gi,{matrix:i,kind:`paid`,slam:!0,onDone:()=>d(e)},`lunas:${e}`)]:[]})]})}var Ji=.94,Yi=1.54,Xi=.08,Zi=.012;function Qi(e,t,n){return e.moveTo(-t/2,-n/2),e.lineTo(t/2,-n/2),e.lineTo(t/2,n/2),e.lineTo(-t/2,n/2),e.closePath(),e}var $i=Qi(new Se,Ji,Yi);$i.holes.push(Qi(new Ue,Ji-2*Xi,Yi-2*Xi));var[ea,ta]=[$i,Qi(new Se,Ji-2*Xi,Yi-2*Xi)].map(e=>new Ce(e).rotateX(-Math.PI/2).translate(0,Zi,0)),na=.12,ra=vt+.55,ia=.45,aa=.45,oa=3;function sa(e,t,n){e.tiles.forEach((r,i)=>{let a=n-_t(e,r),o=Math.max(0,Math.min(1,a/na,(ra+ia-a)/ia)),s=a<.7?.6+.4*Math.abs(Math.cos(Math.PI*oa*a/vt)):1,[c,l]=t[i];c.opacity=o*s,l.opacity=o*s*aa})}function ca({shot:e,colors:t}){let{nodes:n}=x(j),r=(0,U.useRef)(null),[i]=(0,U.useState)(()=>e.tiles.map((e,n)=>[0,1].map(()=>new h({color:t[n],transparent:!0,opacity:0,depthWrite:!1,side:2}))));return(0,U.useEffect)(()=>()=>{for(let e of i)for(let t of e)t.dispose()},[i]),D(({clock:t})=>{r.current??=t.elapsedTime,sa(e,i,t.elapsedTime-r.current)}),e.tiles.flatMap((e,t)=>{let r=n[b(e)];if(!r)return[];r.updateWorldMatrix(!0,!1);let[a,o]=i[t];return[(0,G.jsxs)(`group`,{matrix:r.matrixWorld.clone(),matrixAutoUpdate:!1,children:[(0,G.jsx)(`mesh`,{geometry:ea,material:a}),(0,G.jsx)(`mesh`,{geometry:ta,material:o})]},e)]})}function la({onSample:e}){let t=O(e=>e.gl),n=O(e=>e.viewport.dpr),r=(0,U.useRef)(0),i=(0,U.useRef)(0);return D(()=>{let a=performance.now();i.current===0&&(i.current=a),r.current+=1,!(a-i.current<1e3)&&(e({fps:Math.round(r.current*1e3/(a-i.current)),calls:t.info.render.calls,triangles:t.info.render.triangles,dpr:n}),r.current=0,i.current=a)}),null}var ua=[`Tagihanmu JATUH TEMPO hari ini!`,`Denda Rp62 rb per jam berjalan`,`Kontak daruratmu sudah dihubungi`,`BAYAR SEKARANG!!!`,`Semua tanahmu disita Negara`],da=1.15,fa=144/512*da,pa=.95,ma=.34,ha=.1,ga=.38,_a=.22,va=.45,ya=.3,ba=R.pinjol.end-R.pinjol.change,xa=`#161412`,Sa=`#E5383B`;function Ca(e,t){return A(512,144,n=>{n.fillStyle=t?`#FFE3E0`:`#FFFFFF`,n.strokeStyle=xa,n.lineWidth=6,n.beginPath(),n.roundRect(4,4,504,136,24),n.fill(),n.stroke(),n.fillStyle=Sa,n.beginPath(),n.roundRect(22,30,84,84,18),n.fill(),n.fillStyle=`#FFFFFF`,n.font=`bold 60px sans-serif`,n.textAlign=`center`,n.textBaseline=`middle`,n.fillText(`P`,64,75),n.textAlign=`left`,n.fillStyle=`#6B6B6B`,n.font=`bold 24px sans-serif`,n.fillText(`PINJOL KILAT · sekarang`,126,46),n.fillStyle=t?Sa:xa,n.font=`bold 32px sans-serif`,n.fillText(e,126,96,366)})}var wa=ua.map((e,t)=>new De({map:Ca(e,t===3),transparent:!0,opacity:0,depthTest:!1})),Ta=e=>1+2.7*(e-1)**3+1.7*(e-1)**2;function Ea(e,t){let n=Math.max(0,Math.min(1,(ba-t)/ya));e.forEach((e,r)=>{if(!e)return;let i=t-r*ga,a=i<=0?0:Ta(Math.min(1,i/_a));e.scale.set(da*a,fa*a,1);let o=(r%2?1:-1)*ha,s=i>0&&i<va?Math.sin(i*90)*.025:0;e.position.set(o+s,pa+r*ma,0),wa[r].opacity=+(i>0)*n})}function Da({tile:e}){let{nodes:t}=x(j),n=(0,U.useRef)([]),r=(0,U.useRef)(null),i=(0,U.useMemo)(()=>{let n=t[b(e)];return n?(n.updateWorldMatrix(!0,!1),new N(0,0,.05).applyMatrix4(n.matrixWorld)):null},[t,e]);return D(({clock:e})=>{r.current??=e.elapsedTime,Ea(n.current,e.elapsedTime-r.current)}),i?(0,G.jsx)(`group`,{position:i,children:wa.map((e,t)=>(0,G.jsx)(`sprite`,{ref:e=>{n.current[t]=e},material:e,scale:0,renderOrder:10+t},t))}):null}var Oa=`#FFD23F`,ka=`#FFB627`,Aa=1,ja=.75,Ma=.5,Na=.15,Pa=.25,Fa=.6,Ia=16,La=[.6,1.4],Ra=R.province.end-R.province.change,za=new Ve(Math.SQRT1_2,Math.SQRT1_2,Aa,4,1,!0).rotateY(Math.PI/4).translate(0,Aa/2,0).scale(Ji*.96,1,Yi*.96),Ba=A(4,64,e=>{let t=e.createLinearGradient(0,0,0,64);t.addColorStop(0,`#000`),t.addColorStop(1,`#fff`),e.fillStyle=t,e.fillRect(0,0,4,64)});Ba.colorSpace=``;var Va=new h({color:ka,alphaMap:Ba,transparent:!0,opacity:0,depthWrite:!1,side:2}),[Ha,Ua]=[0,1].map(()=>new h({color:Oa,transparent:!0,opacity:0,depthWrite:!1,side:2})),Wa=ai(ka,.09),Ga={width:Ji*.8,depth:Yi*.8,height:Aa},Ka=e=>1-(1-Math.min(1,Math.max(0,e)))**3;function qa({tiles:e}){let{nodes:t}=x(j),n=(0,U.useRef)(null),r=(0,U.useRef)([]),[i]=(0,U.useState)(()=>e.map(()=>oi(Ia,Ga,La)));return(0,U.useEffect)(()=>()=>{for(let{geometry:e}of i)e.dispose()},[i]),D(({clock:e},t)=>{n.current??=e.elapsedTime;let a=e.elapsedTime-n.current,o=Math.max(0,Math.min(1,a/Pa,(Ra-a)/Fa));Ha.opacity=o,Ua.opacity=o*(.2+.08*Math.sin(a*6)),Va.opacity=o*ja,Wa.opacity=o,r.current.forEach((e,t)=>e?.scale.setY(Math.max(.001,Ka((a-t*Na)/Ma))));let s=Math.min(t,1/30);for(let{geometry:e,speeds:t}of i)si(e,t,Aa,s)}),e.flatMap((e,n)=>{let a=t[b(e)];return a?(a.updateWorldMatrix(!0,!1),[(0,G.jsxs)(`group`,{matrix:a.matrixWorld.clone(),matrixAutoUpdate:!1,children:[(0,G.jsx)(`mesh`,{geometry:ea,material:Ha}),(0,G.jsx)(`mesh`,{geometry:ta,material:Ua}),(0,G.jsx)(`mesh`,{ref:e=>{r.current[n]=e},geometry:za,material:Va,"scale-y":.001}),(0,G.jsx)(`points`,{geometry:i[n].geometry,material:Wa})]},e)]):[]})}var Ja=1.15,Ya=1.2,Xa=.5,Za=.6,Qa=.2,$a=.5,eo=R.rentRise.end-R.rentRise.change,to=`#E5383B`,no=`#161412`;function ro(e){return A(128,160,t=>{t.fillStyle=to,t.strokeStyle=no,t.lineWidth=6,t.lineJoin=`round`,t.beginPath(),t.moveTo(64,6),t.lineTo(118,62),t.lineTo(86,62),t.lineTo(86,104),t.lineTo(42,104),t.lineTo(42,62),t.lineTo(10,62),t.closePath(),t.fill(),t.stroke(),t.font=`bold 40px sans-serif`,t.textAlign=`center`,t.textBaseline=`middle`,t.lineWidth=8,t.strokeStyle=`#FFF8E8`,t.strokeText(`+${e}%`,64,136),t.fillStyle=to,t.fillText(`+${e}%`,64,136)})}function io(e,t,n){let r=Za/Math.max(1,e.length);t.opacity=Math.max(0,Math.min(1,(eo-n)/$a)),e.forEach((e,t)=>{if(!e)return;let i=Math.max(0,n-t*r),a=Math.min(1,i/(eo-Za)),o=Math.min(1,i/Qa);e.position.y=Xa+Ya*(1-(1-a)**2),e.scale.set(Ja*.8*o,Ja*o,1)})}function ao({tiles:e,percent:t}){let{nodes:n}=x(j),r=(0,U.useRef)([]),i=(0,U.useRef)(null),a=(0,U.useMemo)(()=>new De({map:ro(t),transparent:!0,depthWrite:!1}),[t]);(0,U.useEffect)(()=>()=>{a.map?.dispose(),a.dispose()},[a]);let o=(0,U.useMemo)(()=>e.flatMap(e=>{let t=n[b(e)];return t?(t.updateWorldMatrix(!0,!1),[new N(0,_e,Qe).applyMatrix4(t.matrixWorld)]):[]}),[n,e]);return D(({clock:e})=>{i.current??=e.elapsedTime,io(r.current,a,e.elapsedTime-i.current)}),o.map((e,t)=>(0,G.jsx)(`group`,{position:e,children:(0,G.jsx)(`sprite`,{ref:e=>{r.current[t]=e},material:a,scale:0})},t))}var oo=`#161412`,so=`#FFF8E8`,co=`#C62828`,lo={mangkrak:{at:[-8.5,-9.2],appear:.26},pinjol:{at:[8.6,-11],appear:.33},kopdes:{at:[-4.8,-11.6],appear:.4},spbu:{at:[-11.8,-1.6],appear:.47},tikus:{at:[8.8,9.6],appear:.54},rumah:{at:[3.7,-10.2],appear:.61},ompreng:{at:[-11.2,7.6],appear:.68}};function uo(e,t,n=512,r=288){return A(n,r,i=>{i.fillStyle=e,i.fillRect(0,0,n,r),i.strokeStyle=oo,i.lineWidth=10,i.strokeRect(5,5,n-10,r-10),i.textAlign=`center`,i.textBaseline=`middle`;let a=t.reduce((e,[,t])=>e+t*1.25,0),o=r/2-a/2;for(let[e,r,a]of t)o+=r*1.25/2,i.font=`bold ${r}px sans-serif`,i.fillStyle=a,i.fillText(e,n/2,o,n-40),o+=r*1.25/2})}var fo={mangkrak:uo(so,[[`PROYEK MANGKRAK`,54,oo],[`Anggaran Rp62 M`,42,co],[`Progres: 3%`,42,oo]]),pinjol:uo(`#16A34A`,[[`PINJOL`,104,so],[`CAIR 5 MENIT!`,54,`#FFD23F`],[`*syarat & teror berlaku`,28,so]],512,256),kopdes:uo(co,[[`KOPDES MERAH PUTIH`,58,so]],512,120),buka:uo(so,[[`SEGERA BUKA`,44,co]],256,122),spbu:uo(so,[[`HARI INI: GANJIL`,54,co],[`Motor maks 3 liter`,40,oo],[`Mobil maks 20 liter`,40,oo]]),tikus:uo(`#E9D9B0`,[[`Rp`,60,oo]],128,80),rumah:uo(so,[[`RUMAH SUBSIDI`,52,oo],[`18 m²`,76,co],[`Cicilan 20 tahun`,36,oo]]),ompreng:uo(so,[[`GRATIS*`,96,`#16A34A`],[`*dibayar pajakmu`,40,oo]])},po=A(64,64,e=>{e.fillStyle=`#9AA0A6`,e.fillRect(0,0,64,64),e.fillStyle=`#7C8288`;for(let t=0;t<64;t+=8)e.fillRect(0,t,64,2)});po.wrapS=po.wrapT=Ye,po.repeat.set(1,3);var q=e=>new k({color:e,roughness:.85}),J={concrete:q(`#A39E95`),brick:q(`#B5523B`),rust:q(`#8A4B2A`),wood:q(`#5B3A1E`),board:q(`#2B2B2B`),metal:q(`#7A7F87`),red:q(`#D62828`),white:q(`#F4F1EA`),yellow:q(`#F2C230`),blue:q(`#1E5FB8`),burlap:q(`#B58B4C`),rat:q(`#7D7D85`),pink:q(`#E8A0A8`),black:q(`#1B1B1F`),wall:q(`#F1E6C8`),roof:q(`#A8432E`),dirt:q(`#B79B6B`),glass:q(`#8EC3E6`),rice:q(`#FAF7EE`),greens:q(`#3F8F3A`),yolk:q(`#F5B700`),steel:new k({color:`#C9CED6`,roughness:.35})},mo=new _(1,1,1),ho=new Re(1,1),go=new Be(1,12,10),_o=new Be(1,12,6,0,Math.PI*2,0,Math.PI/2),vo=new Ve(1,1,1,8),yo=new E(1,1,4).rotateY(Math.PI/4),bo=new E(1,1,8).rotateX(Math.PI/2),xo=new E(1,1,4).rotateZ(Math.PI),So=new me(.22,.025,5,12,Math.PI);function Co({at:[e,t],post:n,width:r,height:i,texture:a}){let o=n+i/2;return(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(`mesh`,{geometry:mo,material:J.wood,position:[e,n/2,t-.03],scale:[.05,n,.05],castShadow:!0}),(0,G.jsx)(`mesh`,{geometry:mo,material:J.board,position:[e,o,t-.03],scale:[r+.06,i+.06,.03],castShadow:!0}),(0,G.jsx)(`mesh`,{geometry:ho,position:[e,o,t],scale:[r,i,1],children:(0,G.jsx)(`meshBasicMaterial`,{map:a})})]})}function Y({geometry:e=mo,material:t,at:n,size:r,turn:i}){return(0,G.jsx)(`mesh`,{geometry:e,material:t,position:n,scale:r,rotation:i,castShadow:!0})}function wo(){let e=[[-.85,-.65],[.85,-.65],[-.85,.65],[.85,.65]];return(0,G.jsxs)(G.Fragment,{children:[e.map(([e,t])=>(0,G.jsx)(Y,{material:J.concrete,at:[e,1.15,t],size:[.18,2.3,.18]},`${e}${t}`)),(0,G.jsx)(Y,{material:J.concrete,at:[0,1.25,0],size:[2,.12,1.6]}),(0,G.jsx)(Y,{material:J.brick,at:[-.35,.25,-.65],size:[1,.5,.1]}),e.flatMap(([e,t])=>[-.04,.04].map(n=>(0,G.jsx)(Y,{geometry:vo,material:J.rust,at:[e+n,2.5,t],size:[.015,.42,.015],turn:[0,0,n*4]},`${e}${t}${n}`))),(0,G.jsx)(Co,{at:[.6,1.05],post:.6,width:1,height:.56,texture:fo.mangkrak})]})}function To(){return(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(Y,{geometry:vo,material:J.metal,at:[0,1.25,0],size:[.06,2.5,.06]}),(0,G.jsx)(Y,{material:J.board,at:[0,2.45,-.01],size:[1.9,1,.06]}),(0,G.jsx)(`mesh`,{geometry:ho,position:[0,2.45,.025],scale:[1.8,.9,1],children:(0,G.jsx)(`meshBasicMaterial`,{map:fo.pinjol})})]})}function Eo(){return(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(Y,{material:J.white,at:[0,.225,0],size:[1.2,.45,.8]}),(0,G.jsx)(Y,{material:J.red,at:[0,.675,0],size:[1.2,.45,.8]}),(0,G.jsx)(Y,{material:J.roof,at:[0,.94,0],size:[1.4,.08,1]}),(0,G.jsx)(`mesh`,{geometry:ho,position:[0,.42,.405],scale:[1,.72,1],children:(0,G.jsx)(`meshStandardMaterial`,{map:po,roughness:.6})}),(0,G.jsx)(Y,{material:J.board,at:[0,1.13,.4],size:[1.25,.32,.04]}),(0,G.jsx)(`mesh`,{geometry:ho,position:[0,1.13,.425],scale:[1.2,.28,1],children:(0,G.jsx)(`meshBasicMaterial`,{map:fo.kopdes})}),(0,G.jsx)(`mesh`,{geometry:ho,position:[.18,.46,.41],rotation:[0,0,.08],scale:[.42,.2,1],children:(0,G.jsx)(`meshBasicMaterial`,{map:fo.buka})})]})}function Do(){return(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(Y,{material:J.concrete,at:[0,.04,0],size:[.8,.08,.6]}),(0,G.jsx)(Y,{material:J.red,at:[0,.58,0],size:[.45,1,.32]}),(0,G.jsx)(Y,{material:J.white,at:[0,1.2,0],size:[.47,.26,.34]}),(0,G.jsx)(Y,{geometry:vo,material:J.black,at:[.27,.65,.05],size:[.025,.6,.025],turn:[0,0,.2]}),(0,G.jsx)(Co,{at:[.75,.1],post:.75,width:.95,height:.6,texture:fo.spbu}),Array.from({length:6},(e,t)=>(0,G.jsxs)(`group`,{position:[-.6-t*.34,0,.25+Math.sin(t*1.7)*.06],rotation:[0,Math.sin(t*2.3)*.3,0],children:[(0,G.jsx)(Y,{material:J.yellow,at:[0,.14,0],size:[.2,.28,.14]}),(0,G.jsx)(Y,{geometry:vo,material:J.blue,at:[.05,.3,0],size:[.03,.05,.03]}),(0,G.jsx)(Y,{material:J.yellow,at:[-.04,.3,0],size:[.08,.04,.03]})]},t))]})}function Oo(){let{bill:e,bills:t}=ye(),n=[[-.26,.24,.02],[.26,.24,.06],[0,.26,-.28]];return(0,G.jsxs)(G.Fragment,{children:[n.map(([e,t,n])=>(0,G.jsxs)(`group`,{children:[(0,G.jsx)(Y,{geometry:go,material:J.burlap,at:[e,t,n],size:[.28,.24,.28]}),(0,G.jsx)(Y,{geometry:vo,material:J.burlap,at:[e,t+.26,n],size:[.07,.12,.07]})]},`${e}${n}`)),n.slice(0,2).map(([e,t,n])=>(0,G.jsx)(`mesh`,{geometry:ho,position:[e,t,n+.285],scale:[.2,.13,1],children:(0,G.jsx)(`meshBasicMaterial`,{map:fo.tikus})},`rp${e}`)),(0,G.jsx)(Y,{geometry:go,material:J.rat,at:[0,.78,0],size:[.23,.29,.2]}),(0,G.jsx)(Y,{geometry:go,material:J.rat,at:[0,1.1,.06],size:[.16,.15,.16]}),(0,G.jsx)(Y,{geometry:bo,material:J.rat,at:[0,1.07,.26],size:[.075,.075,.18]}),(0,G.jsx)(Y,{geometry:go,material:J.pink,at:[0,1.07,.35],size:[.03,.03,.03]}),[-1,1].map(e=>(0,G.jsxs)(`group`,{children:[(0,G.jsx)(Y,{geometry:vo,material:J.pink,at:[e*.12,1.23,.03],size:[.075,.02,.075],turn:[Math.PI/2,0,0]}),(0,G.jsx)(Y,{geometry:go,material:J.black,at:[e*.065,1.14,.2],size:[.022,.022,.022]})]},e)),(0,G.jsx)(`mesh`,{geometry:So,material:J.pink,position:[.08,.62,-.22],rotation:[Math.PI/2,0,.4],castShadow:!0}),(0,G.jsx)(Y,{material:J.red,at:[0,.97,.19],size:[.07,.05,.03]}),(0,G.jsx)(Y,{geometry:xo,material:J.red,at:[0,.8,.2],size:[.055,.3,.02]}),[[.6,.35,.4],[-.55,.38,-.7]].map(([n,r,i],a)=>(0,G.jsx)(`mesh`,{geometry:e,material:t[a],position:[n,.01,r],rotation:[0,i,0]},a))]})}function ko(){return(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(Y,{material:J.dirt,at:[0,.015,0],size:[.75,.03,.75]}),(0,G.jsx)(Y,{material:J.wall,at:[0,.2,0],size:[.42,.36,.42]}),(0,G.jsx)(Y,{geometry:yo,material:J.roof,at:[0,.51,0],size:[.36,.26,.36]}),(0,G.jsx)(Y,{material:J.board,at:[0,.12,.212],size:[.1,.2,.01]}),(0,G.jsx)(Y,{material:J.glass,at:[.12,.25,.212],size:[.09,.08,.01]}),(0,G.jsx)(Co,{at:[.65,.3],post:.45,width:.8,height:.45,texture:fo.rumah})]})}function Ao(){return(0,G.jsxs)(G.Fragment,{children:[(0,G.jsxs)(`group`,{position:[0,.3,0],rotation:[-.45,0,0],children:[(0,G.jsx)(Y,{material:J.steel,at:[0,0,0],size:[1.3,.05,.85]}),[[0,-.425,1.3,.03],[0,.425,1.3,.03],[-.65,0,.03,.85],[.65,0,.03,.85],[-.1,0,.03,.85],[.28,0,.75,.03]].map(([e,t,n,r],i)=>(0,G.jsx)(Y,{material:J.steel,at:[e,.05,t],size:[n,.08,r]},i)),(0,G.jsx)(Y,{geometry:_o,material:J.rice,at:[-.38,.02,0],size:[.22,.14,.3]}),(0,G.jsx)(Y,{material:J.greens,at:[.28,.06,-.21],size:[.3,.06,.14]}),(0,G.jsx)(Y,{geometry:go,material:J.rice,at:[.28,.05,.2],size:[.13,.05,.1]}),(0,G.jsx)(Y,{geometry:go,material:J.yolk,at:[.28,.09,.2],size:[.05,.03,.05]})]}),(0,G.jsx)(Co,{at:[.95,.35],post:.5,width:.85,height:.5,texture:fo.ompreng})]})}function jo({crisis:e}){let t=te(e);return(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(Bn,{...lo.mangkrak,fade:t,children:(0,G.jsx)(wo,{})}),(0,G.jsx)(Bn,{...lo.pinjol,fade:t,children:(0,G.jsx)(To,{})}),(0,G.jsx)(Bn,{...lo.kopdes,fade:t,children:(0,G.jsx)(Eo,{})}),(0,G.jsx)(Bn,{...lo.spbu,fade:t,children:(0,G.jsx)(Do,{})}),(0,G.jsx)(Bn,{...lo.tikus,fade:t,children:(0,G.jsx)(Oo,{})}),(0,G.jsx)(Bn,{...lo.rumah,fade:t,children:(0,G.jsx)(ko,{})}),(0,G.jsx)(Bn,{...lo.ompreng,fade:t,children:(0,G.jsx)(Ao,{})})]})}var Mo=new S(`#FF2D2D`),No=new S(`#2F6BFF`),Po=new S(`#5A1414`),Fo=new S(`#14245A`),Io=.6,Lo=.15,Ro=.35,zo={jail:{bar:[.22,.65,.22],lights:[[.13,.68,.22],[.31,.68,.22]],wash:[1,1,1],duration:R.jail.end-R.jail.change},raid:{lights:[[-.085,.1,.3],[.085,.1,.3]],wash:[.6,1,.9],duration:R.raid.end-R.raid.change}},Bo=(()=>{let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(32,32,0,32,32,32);return n.addColorStop(0,`rgba(255, 255, 255, 1)`),n.addColorStop(.35,`rgba(255, 255, 255, 0.6)`),n.addColorStop(1,`rgba(255, 255, 255, 0)`),t.fillStyle=n,t.fillRect(0,0,64,64),new se(e)})(),Vo=new _(.34,.06,.12),Ho=new Be(.055,16,8,0,Math.PI*2,0,Math.PI/2),Uo=new le(1,40).rotateX(-Math.PI/2),Wo=new k({color:`#26262B`,roughness:.6}),[Go,Ko]=[Po,Fo].map(e=>new h({color:e.clone()})),[qo,Jo]=[Mo,No].map(e=>new De({map:Bo,color:e,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1})),Yo=new h({map:Bo,color:Mo.clone(),transparent:!0,opacity:0,depthWrite:!1});function Xo(e,t){let n=(e/Io+t)%1;return+(n<.1||n>=.17&&n<.27)}function Zo({kind:e,tile:t}){let{nodes:n}=x(j),r=(0,U.useRef)(null),{bar:i,lights:a,wash:o,duration:s}=zo[e];D(({clock:e})=>{r.current??=e.elapsedTime;let t=e.elapsedTime-r.current,n=Math.max(0,Math.min(1,t/Lo,(s-t)/Ro)),i=Xo(t,0)*n,a=Xo(t,.5)*n;Go.color.lerpColors(Po,Mo,i),Ko.color.lerpColors(Fo,No,a),qo.opacity=i*.9,Jo.opacity=a*.9,Yo.color.copy(i>=a?Mo:No),Yo.opacity=Math.max(i,a)*.55});let c=n[b(t)];return c?(c.updateWorldMatrix(!0,!1),(0,G.jsxs)(`group`,{matrix:c.matrixWorld.clone(),matrixAutoUpdate:!1,children:[i&&(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(`mesh`,{geometry:Vo,material:Wo,position:i,castShadow:!0}),(0,G.jsx)(`mesh`,{geometry:Ho,material:Go,position:a[0]}),(0,G.jsx)(`mesh`,{geometry:Ho,material:Ko,position:a[1]})]}),(0,G.jsx)(`sprite`,{material:qo,position:a[0],scale:.9}),(0,G.jsx)(`sprite`,{material:Jo,position:a[1],scale:.9}),(0,G.jsx)(`mesh`,{geometry:Uo,material:Yo,position:[0,.015,0],scale:o})]})):null}var Qo=`Tile_20`,$o=.55,es=.8;function ts({overrides:e}){let{nodes:t}=x(j),n=Object.keys(e).join(),r=(0,U.useRef)(new Map);return(0,U.useLayoutEffect)(()=>{let n=t[Qo];if(!n)return;let i=Object.keys(e).flatMap(e=>{let i=t[b(Number(e))];if(!i?.parent)return[];let a=n.clone();a.name=`${i.name}_Toll`,a.position.copy(i.position),a.quaternion.copy(i.quaternion),a.userData={...i.userData,tile_kind:`toll`},a.traverse(e=>{e.visible=!0,e.castShadow=!0,e.receiveShadow=!0}),i.visible=!1,i.parent.add(a);let o=performance.now()/1e3,s=r.current.get(e)??o;if(r.current.set(e,s),o-s<es){let{y:e}=a.position,{z:t}=a.rotation;Ae.timeline({onUpdate:y}).fromTo(a.rotation,{z:t+Math.PI/2},{z:t,duration:es,ease:`back.out(1.4)`},0).fromTo(a.position,{y:e+$o},{y:e,duration:es,ease:`bounce.out`},0).fromTo(a.scale,{x:.4,y:.4,z:.4},{x:1,y:1,z:1,duration:es*.6,ease:`power2.out`},0).seek(o-s)}return[{city:i,toll:a}]});return()=>{for(let{city:e,toll:t}of i)Ae.killTweensOf([t.scale,t.rotation,t.position]),t.removeFromParent(),e.visible=!0;y()}},[t,n]),null}var ns=`#FFD23F`,rs=3,is=.35,[as,os]=[0,1].map(()=>new h({color:ns,transparent:!0,opacity:0,depthWrite:!1,side:2}));function ss({tiles:e}){let{nodes:t}=x(j),n=(0,U.useRef)(null);return D(({clock:e})=>{n.current??=e.elapsedTime;let t=e.elapsedTime-n.current,r=R.pulse.end,i=t<r?Math.abs(Math.sin(Math.PI*rs*t/r)):0;as.opacity=i,os.opacity=i*is}),e.flatMap(e=>{let n=t[b(e)];return n?(n.updateWorldMatrix(!0,!1),[(0,G.jsxs)(`group`,{matrix:n.matrixWorld.clone(),matrixAutoUpdate:!1,children:[(0,G.jsx)(`mesh`,{geometry:ea,material:as}),(0,G.jsx)(`mesh`,{geometry:ta,material:os})]},e)]):[]})}var cs={rent:[0,.3,Qe],parking:[.52,.78,.5],tollPay:Ze,tax:oe(v),bail:oe($e)},ls={tax:v,bail:$e},us=new Set([`tax`,`bail`,`tollPay`]),ds=Math.min(window.devicePixelRatio,2),fs=Math.min(ds,1.5);function ps({tileOverrides:e,pawns:t,walk:n,onWalkDone:r,stickers:i,properties:a,ownerColors:o,shot:s,drawing:c,crisis:l,onPerf:u}){let d=re(e=>e.quality),f=d===`ringan`,[p,m]=(0,U.useState)(fs);return(0,G.jsxs)(w,{shadows:!f,gl:{antialias:!f},flat:!0,dpr:f?1:p,camera:{position:[0,24,30],fov:40,near:.1,far:600},children:[!f&&(0,G.jsx)(qt,{onDecline:()=>m(1),onIncline:()=>m(ds),onFallback:()=>m(1),flipflops:3}),(0,G.jsx)(Xt,{crisis:l,shadows:!f}),(0,G.jsxs)(U.Suspense,{fallback:null,children:[(0,G.jsx)(Ke,{hidden:e,crisis:l}),(0,G.jsx)(mr,{crisis:l}),(0,G.jsx)(jo,{crisis:l}),(0,G.jsx)(Ur,{crisis:l}),(0,G.jsx)(ts,{overrides:e}),(0,G.jsx)(ji,{overrides:e}),(0,G.jsx)(Je,{hidden:e}),(0,G.jsx)(pe,{properties:a,colors:o,hidden:e,shot:s}),(0,G.jsx)(qi,{properties:a}),s?.kind===`pulse`&&(0,G.jsx)(ss,{tiles:s.tiles},s.id),s?.kind===`province`&&(0,G.jsx)(qa,{tiles:s.tiles},s.id),s?.kind===`elite`&&(0,G.jsx)(Si,{tile:s.tiles[0]},s.id),(s?.kind===`seize`||s?.kind===`trade`)&&(0,G.jsx)(ca,{shot:s,colors:s.tiles.map(e=>o[a[e]?.owner??`state`])},s.id),s?.kind===`pinjol`&&(0,G.jsx)(Da,{tile:s.tiles[0]},s.id),(s?.kind===`rent`||s?.kind===`tax`||s?.kind===`parking`||s?.kind===`tollPay`||s?.kind===`bail`)&&(0,G.jsx)(Le,{tile:s.tiles[0],amount:s.amount??0,to:cs[s.kind],spread:us.has(s.kind)?.03:.12},s.id),s?.kind===`gift`&&(0,G.jsx)(Le,{tile:s.tiles[0],toTile:s.tiles[1],amount:s.amount??0,to:ae},s.id),s?.kind===`rentRise`&&(0,G.jsx)(ao,{tiles:s.tiles,percent:s.amount??0},s.id),(s?.kind===`tax`||s?.kind===`bail`)&&(0,G.jsx)(We,{tile:s.tiles[0],at:ls[s.kind],seconds:R[s.kind].end-R[s.kind].change},`${s.id}:kas`),(s?.kind===`jail`||s?.kind===`raid`)&&(0,G.jsx)(Zo,{kind:s.kind,tile:s.tiles[0]},s.id),(0,G.jsx)(Fe,{placements:t,walk:n,onWalkDone:r,stickers:i}),c&&(0,G.jsx)(zn,{deck:c.deck,cardId:c.cardId},c.id),(0,G.jsx)(ni,{})]}),(0,G.jsx)(Cn,{}),!f&&(0,G.jsx)(ms,{}),u&&(0,G.jsx)(la,{onSample:u})]},d)}function ms(){return ne(),null}function hs(e,t=e){let n=(0,U.useRef)(void 0);(0,U.useEffect)(()=>{e&&n.current!==t&&(n.current=t,mt(e))},[e,t])}var gs=i();function X({title:e,onClose:t,children:n,closable:r=!0,wide:i=!1,noHeader:h=!1,className:k="",stripeColor:sc}){
  let a=(0,U.useRef)(null),o=(0,U.useId)();
  (0,U.useEffect)(()=>{
    try{u(`popup-buka`)}catch(_){}
    let el=a.current;
    if(el){
      try{
        if(!el.open) el.showModal();
      }catch(_){
        el.setAttribute(`open`,``);
      }
    }
  },[]);
  return (0,gs.createPortal)((0,G.jsxs)(`dialog`,{
    ref:a,
    onClose:t,
    onCancel:e=>{r||e.preventDefault()},
    "aria-labelledby":o,
    className:`property-modal ${i===`2xl`?`modal-2xl`:i?`modal-wide`:`modal-default`} pointer-events-auto m-auto overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-0 text-slate-800 shadow-2xl backdrop:bg-slate-900/50 max-sm:mb-0 max-sm:max-h-[92dvh] max-sm:w-full max-sm:max-w-none max-sm:overflow-y-auto max-sm:animate-sheet-in max-sm:rounded-b-none max-sm:border-x-0 max-sm:border-b-0 max-sm:pb-[max(1rem,env(safe-area-inset-bottom))] ${k}`,
    children:[
      sc&&(0,G.jsx)(`div`,{className:`h-2 w-full shrink-0`,style:{background:sc?`linear-gradient(90deg, ${sc}, ${sc}dd)`:`linear-gradient(90deg, #ec4899, #f43f5e)`}}),
      !h&&(0,G.jsxs)(`div`,{
        className:`flex items-center justify-between gap-3 p-4 pb-0`,
        children:[
          (0,G.jsx)(`h2`,{id:o,className:`font-display text-xl leading-tight`,children:e}),
          r&&(0,G.jsx)(V,{variant:`secondary`,size:`sm`,className:`shrink-0`,onClick:()=>a.current?.close(),children:`Tutup`})
        ]
      }),
      (0,G.jsx)(`div`,{className:h?`p-3 sm:p-4`:!e?`p-4`:`mt-3 p-4 pt-0`,children:n})
    ]
  }),document.body)
}var _s=[1e5,5e5,1e6,2e6];function vs({label:e,value:t,onChange:n,max:r,min:i=0,step:a=1e5}){let o=e=>Math.max(i,Math.min(r,e)),s=`brut-press grid size-11 place-items-center rounded-md border-3 border-ink bg-white font-display text-lg shadow-brut-sm disabled:opacity-40 disabled:shadow-none`;return(0,G.jsxs)(`fieldset`,{children:[(0,G.jsx)(`legend`,{className:`mb-2 text-sm font-bold`,children:e}),(0,G.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,G.jsx)(`button`,{type:`button`,"aria-label":`Kurangi`,className:s,disabled:t<=i,onClick:()=>n(o(t-a)),children:`−`}),(0,G.jsx)(`output`,{className:`flex-1 rounded-md border-3 border-ink bg-white px-3 py-2 text-center font-display text-lg tabular-nums`,children:z(t)}),(0,G.jsx)(`button`,{type:`button`,"aria-label":`Tambah`,className:s,disabled:t>=r,onClick:()=>n(o(t+a)),children:`+`})]}),(0,G.jsx)(`div`,{className:`mt-2 flex flex-wrap gap-2`,children:_s.filter(e=>e<=r&&e>=i).map(e=>(0,G.jsx)(`button`,{type:`button`,onClick:()=>n(e),className:`rounded-md border-2 border-ink px-2 py-1 text-xs font-bold ${e===t?`bg-ink text-sun`:`bg-white`}`,children:z(e)},e))})]})}function ys({game:e,tile:t,extra:n,showOwner:r=!1,upgradeTo:i}){let a=St(t),o=e.properties[t],s=[a?.name,o&&Dt(o.level),o?.mortgaged&&`digadai`,r&&o?.owner&&B(e,o.owner),!o?.owner&&a&&z(a.price)].filter(Boolean);return(0,G.jsxs)(`span`,{className:`flex min-w-0 flex-1 items-center gap-2.5 text-left`,children:[(0,G.jsx)(`span`,{className:`h-9 w-2.5 shrink-0 rounded-sm border-2 border-ink`,style:{backgroundColor:a?.color}}),(0,G.jsxs)(`span`,{className:`min-w-0 flex-1 leading-tight`,children:[(0,G.jsx)(`span`,{className:`block truncate font-bold`,children:wt(t)}),(0,G.jsxs)(`span`,{className:`block text-xs text-muted ${i===void 0?`truncate`:`text-pretty`}`,children:[s.join(` · `),i!==void 0&&(0,G.jsxs)(G.Fragment,{children:[` → `,(0,G.jsx)(`b`,{className:`font-bold text-ink`,children:Dt(i)})]})]})]}),n&&(0,G.jsx)(`span`,{className:`shrink-0 text-sm font-bold tabular-nums`,children:n})]})}function Z({children:e}){return(0,G.jsx)(`p`,{className:`text-sm font-medium`,children:e})}function Q({children:e}){return(0,G.jsx)(`div`,{className:`flex flex-wrap gap-2 [&>*]:flex-1`,children:e})}var bs=[{step:`liquidate`,label:`Jual aset`},{step:`loan`,label:`Ngutang`},{step:`pinjol`,label:`Pinjol`},{step:`bankrupt`,label:`Bangkrut`}],xs=1e5,Ss=e=>Math.ceil(e/xs)*xs;function Cs({game:e,player:t,act:n,busy:r}){hs(`gali-lubang`),u(`gali-lubang`);let i=e.pending,a=i?.kind===`debt`&&i.loanTried,o=ot(e,t,a),s=-t.cash,c=e.turnOrder.map(t=>e.players[t]).filter(e=>e.id!==t.id&&!e.bankrupt&&e.cash>0),l=Math.max(0,...c.map(e=>e.cash)),[d,f]=(0,U.useState)(Math.min(Ss(s),l)),p=Math.min(lt.max,s);return(0,G.jsxs)(`div`,{className:`space-y-3`,children:[(0,G.jsxs)(Z,{children:[`Kas minus `,(0,G.jsx)(`b`,{className:`text-merah`,children:z(s)}),`. Tutup dulu sebelum giliran berlanjut.`]}),(0,G.jsx)(`ol`,{className:`flex gap-1 text-[0.65rem] font-bold uppercase`,children:bs.map(({step:e,label:t})=>(0,G.jsx)(`li`,{className:`flex-1 rounded border-2 border-ink px-1 py-1 text-center ${e===o?`bg-merah text-paper`:`bg-white text-muted`}`,children:t},e))}),o===`liquidate`&&(0,G.jsxs)(`ul`,{className:`space-y-2`,children:[rt(e,t).map(t=>{let i=Math.floor((St(t)?.upgrade_cost??0)*.5);return(0,G.jsxs)(`li`,{className:`flex items-center gap-2`,children:[(0,G.jsx)(ys,{game:e,tile:t}),(0,G.jsxs)(V,{variant:`secondary`,size:`sm`,className:`shrink-0`,disabled:r,onClick:()=>n({type:`SELL_BUILDING`,tile:t}),children:[`Jual +`,z(i)]})]},`sell-${t}`)}),dt(e,t).map(t=>{let i=Math.floor((St(t)?.price??0)*.5);return(0,G.jsxs)(`li`,{className:`flex items-center gap-2`,children:[(0,G.jsx)(ys,{game:e,tile:t}),(0,G.jsxs)(V,{variant:`secondary`,size:`sm`,className:`shrink-0`,disabled:r,onClick:()=>n({type:`MORTGAGE`,tile:t}),children:[`Gadai +`,z(i)]})]},`mortgage-${t}`)})]}),o===`loan`&&(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(vs,{label:`Pinjam ke pemain lain`,value:d,onChange:f,min:xs,max:l}),(0,G.jsxs)(Q,{children:[(0,G.jsx)(V,{variant:`secondary`,disabled:r,onClick:()=>n({type:`DECLINE_LOANS`}),children:`Lewati`}),(0,G.jsx)(V,{disabled:r||d<=0,onClick:()=>n({type:`REQUEST_LOAN`,amount:d}),children:`Minta pinjaman`})]})]}),o===`pinjol`&&(0,G.jsxs)(G.Fragment,{children:[(0,G.jsxs)(`p`,{className:`rounded-lg border-3 border-ink bg-white p-3 text-sm`,children:[`Pinjol cair `,z(p),`, bunga `,lt.interestPercent,`%, jatuh tempo `,lt.turns,` giliran. Telat bayar: semua tanahmu disita Negara. Hanya sekali per permainan.`]}),(0,G.jsxs)(Q,{children:[(0,G.jsx)(V,{variant:`danger`,disabled:r,onClick:()=>n({type:`DECLARE_BANKRUPTCY`}),children:`Bangkrut saja`}),(0,G.jsx)(V,{disabled:r,onClick:()=>n({type:`TAKE_PINJOL`}),children:`Ambil Pinjol`})]})]})]})}var ws=[0,10,25,50];function Ts({game:e,busy:t}){let n=L(e=>e.act),r=L(e=>e.seat),[i,a]=(0,U.useState)({}),o=e.pending;if(o?.kind!==`loan`)return null;let s=e.currentPlayer,c=r===null||r===s,l=e=>r===null||r===e,u=e.turnOrder.map(t=>e.players[t]).filter(e=>e.id!==s&&!e.bankrupt&&e.cash>=o.amount).filter(e=>c||e.id===r),d=e=>Math.round(o.amount*(1+e/100)),f=`${z(o.amount)}, lunas dalam 3 giliran`;return(0,G.jsxs)(`div`,{className:`space-y-3`,children:[(0,G.jsx)(Z,{children:r===null?`Butuh pinjaman ${f}. Persilakan pemain yang mau meminjamkan menawarkan bunga.`:c?`Butuh pinjaman ${f}. Pemain lain menawarkan bunga dari perangkat masing-masing.`:`${e.players[s].name} butuh pinjaman ${f}. Tawarkan bunga kalau mau meminjamkan.`}),(0,G.jsx)(`ul`,{className:`space-y-2`,children:u.map(e=>{let r=o.offers.find(t=>t.lender===e.id),u=i[e.id]??r?.interestPercent??10;return(0,G.jsxs)(`li`,{className:`space-y-2 rounded-lg border-3 border-ink bg-white p-2`,children:[(0,G.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,G.jsx)(H,{pawn:e.pawn,size:32}),(0,G.jsx)(`span`,{className:`flex-1 truncate text-sm font-bold`,children:e.name}),r&&c&&(0,G.jsxs)(V,{size:`sm`,disabled:t,onClick:()=>n(s,{type:`ACCEPT_LOAN`,lender:e.id}),children:[`Terima `,r.interestPercent,`%`]})]}),r?(0,G.jsxs)(`p`,{className:`text-xs`,children:[`Bayar balik `,z(d(r.interestPercent)),`.`]}):!l(e.id)&&(0,G.jsx)(`p`,{className:`text-xs text-muted`,children:`Belum menawarkan.`}),l(e.id)&&(0,G.jsxs)(`div`,{className:`flex items-center gap-1.5`,children:[ws.map(t=>(0,G.jsxs)(`button`,{type:`button`,"aria-pressed":u===t,onClick:()=>a(n=>({...n,[e.id]:t})),className:`flex-1 rounded-md border-2 border-ink py-1 text-xs font-bold ${u===t?`bg-ink text-sun`:`bg-paper`}`,children:[t,`%`]},t)),(0,G.jsx)(V,{variant:`secondary`,size:`xs`,disabled:t,onClick:()=>n(e.id,{type:`OFFER_LOAN`,interestPercent:u}),children:r?`Ubah`:`Tawarkan`})]})]},e.id)})}),c&&(0,G.jsx)(V,{variant:`secondary`,className:`w-full`,disabled:t,onClick:()=>n(s,{type:`DECLINE_LOANS`}),children:`Tidak jadi, lanjut ke Pinjol`})]})}function Es({tile:e}){let t=ft.tiles[e],n=St(e);if(t?.kind!==`city`||!n)return null;let r=xe.cities.find(e=>e.city===t.city)?.landmark;return(0,G.jsxs)(`figure`,{children:[(0,G.jsxs)(`div`,{className:`overflow-hidden rounded-lg border-3 border-ink shadow-brut-sm`,children:[(0,G.jsx)(`div`,{className:`h-2.5 border-b-3 border-ink`,style:{backgroundColor:n.color}}),(0,G.jsx)(`img`,{src:`/cities/${t.city}.webp`,alt:r?`${r}, ${t.name}`:t.name,width:960,height:640,className:`aspect-video w-full bg-sand object-cover max-sm:aspect-[2/1]`})]}),r&&(0,G.jsx)(`figcaption`,{className:`mt-1 truncate text-xs text-muted`,children:r})]})}function Ds({game:e,pending:t,act:n}){
  let r=e.players[e.currentPlayer],{tile:i,price:a}=t,o=ft.tiles[i],s=St(i);
  if(o?.kind!==`city`||!s)return null;

  let [selTier,setSelTier]=(0,U.useState)(0),
      [simMono,setSimMono]=(0,U.useState)(!1),
      c=ft.tiles.flatMap((e,t)=>e.kind===`city`&&e.province===s.id?[t]:[]),
      baseMultiplier=e.rules?.rentMultiplier??1,
      multiplier=simMono?baseMultiplier*2:baseMultiplier,
      u=Math.floor(a/2),
      d=r.keepCards?.includes(`flash-sale`),
      upgradeCost=s.upgrade_cost||Math.round(a/2),
      landmark=(xe?.cities?xe.cities.find(e=>e.city===o.city)?.landmark:null)||o.name,
      ownedCount=c.filter(t=>e.properties[t]?.owner===r.id).length+1,
      tiers=[
        {name:`Kavling`,rent:Math.round(s.rent[0]*multiplier),cost:a,sub:`Termasuk Beli`,desc:`Beli Kavling`},
        {name:`1 KPR`,rent:Math.round(s.rent[1]*multiplier),cost:a+upgradeCost,sub:`+${z(upgradeCost)}`,desc:`Kavling + 1 KPR`},
        {name:`2 KPR`,rent:Math.round(s.rent[2]*multiplier),cost:a+upgradeCost*2,sub:`+${z(upgradeCost)}`,desc:`Kavling + 2 KPR`},
        {name:`Elit`,rent:Math.round(s.rent[3]*multiplier),cost:a+upgradeCost*4,sub:`+${z(upgradeCost*2)}`,desc:`Full Upgrade Elit`}
      ],
      curTier=tiers[selTier]||tiers[0],
      roi=Math.round((curTier.rent/curTier.cost)*100),
      bep=Math.ceil(curTier.cost/curTier.rent),
      costSelected=selTier===0?a:curTier.cost,
      rem=r.cash-costSelected,
      pctCost=Math.max(1,Math.min(100,Math.round((costSelected/Math.max(1,r.cash))*100))),
      pctRem=Math.max(0,Math.min(100,100-pctCost));

  /* Lucide Vector Line SVG Icons (Zero emojis/emoticons) */
  let iconBuilding2=(0,G.jsxs)(`svg`,{className:`size-4 sm:size-5 shrink-0`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,G.jsx)(`path`,{d:`M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z`}),(0,G.jsx)(`path`,{d:`M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2`}),(0,G.jsx)(`path`,{d:`M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2`}),(0,G.jsx)(`path`,{d:`M10 6h4`}),(0,G.jsx)(`path`,{d:`M10 10h4`}),(0,G.jsx)(`path`,{d:`M10 14h4`}),(0,G.jsx)(`path`,{d:`M10 18h4`})]}),
      iconShieldCheck=(0,G.jsxs)(`svg`,{className:`size-3.5 shrink-0 text-slate-500`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,G.jsx)(`path`,{d:`M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z`}),(0,G.jsx)(`path`,{d:`m9 12 2 2 4-4`})]}),
      iconTrendingUp=(0,G.jsxs)(`svg`,{className:`size-3.5 shrink-0 text-emerald-600`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,G.jsx)(`polyline`,{points:`22 7 13.5 15.5 8.5 10.5 2 17`}),(0,G.jsx)(`polyline`,{points:`16 7 22 7 22 13`})]}),
      iconLandmark=(0,G.jsxs)(`svg`,{className:`size-3 shrink-0 text-amber-300`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,G.jsx)(`line`,{x1:`3`,y1:`21`,x2:`21`,y2:`21`}),(0,G.jsx)(`line`,{x1:`6`,y1:`21`,x2:`6`,y2:`9`}),(0,G.jsx)(`line`,{x1:`18`,y1:`21`,x2:`18`,y2:`9`}),(0,G.jsx)(`path`,{d:`M4 9h16l-8-5-8 5z`})]}),
      iconBarChart3=(0,G.jsxs)(`svg`,{className:`size-3.5 shrink-0 text-indigo-600`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,G.jsx)(`path`,{d:`M3 3v18h18`}),(0,G.jsx)(`path`,{d:`M18 17V9`}),(0,G.jsx)(`path`,{d:`M13 17V5`}),(0,G.jsx)(`path`,{d:`M8 17v-3`})]}),
      iconWallet=(0,G.jsxs)(`svg`,{className:`size-3.5 shrink-0 text-blue-500`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,G.jsx)(`path`,{d:`M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1`}),(0,G.jsx)(`path`,{d:`M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4`})]}),
      iconShoppingBag=(0,G.jsxs)(`svg`,{className:`size-3.5 shrink-0 stroke-[2.5]`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.5`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,G.jsx)(`path`,{d:`M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z`}),(0,G.jsx)(`path`,{d:`M3 6h18`}),(0,G.jsx)(`path`,{d:`M16 10a4 4 0 0 1-8 0`})]}),
      iconCheck=(0,G.jsx)(`svg`,{className:`size-2.5 shrink-0 stroke-[3]`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`3`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,G.jsx)(`polyline`,{points:`20 6 9 17 4 12`})}),
      iconPin=(0,G.jsxs)(`svg`,{className:`size-2.5 shrink-0 stroke-[2.5]`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.5`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,G.jsx)(`path`,{d:`M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z`}),(0,G.jsx)(`circle`,{cx:`12`,cy:`10`,r:`3`})]}),
      iconLockOpen=(0,G.jsxs)(`svg`,{className:`size-2.5 shrink-0`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,G.jsx)(`rect`,{width:`18`,height:`11`,x:`3`,y:`11`,rx:`2`,ry:`2`}),(0,G.jsx)(`path`,{d:`M7 11V7a5 5 0 0 1 9.9-1`})]}),
      iconSparkles=(0,G.jsx)(`svg`,{className:`size-3 shrink-0 text-amber-500`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,G.jsx)(`path`,{d:`m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z`})}),
      iconZap=(0,G.jsx)(`svg`,{className:`size-3 shrink-0 text-purple-600`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,G.jsx)(`polygon`,{points:`13 2 3 14 12 14 11 22 21 10 12 10 13 2`})}),
      iconHome=(0,G.jsxs)(`svg`,{className:`size-3 shrink-0`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,G.jsx)(`path`,{d:`m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z`}),(0,G.jsx)(`polyline`,{points:`9 22 9 12 15 12 15 22`})]}),
      iconBuilding=(0,G.jsxs)(`svg`,{className:`size-3 shrink-0`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,G.jsx)(`rect`,{width:`16`,height:`20`,x:`4`,y:`2`,rx:`2`,ry:`2`}),(0,G.jsx)(`path`,{d:`M9 22v-4h6v4`}),(0,G.jsx)(`path`,{d:`M8 6h.01`}),(0,G.jsx)(`path`,{d:`M16 6h.01`}),(0,G.jsx)(`path`,{d:`M12 6h.01`}),(0,G.jsx)(`path`,{d:`M12 10h.01`}),(0,G.jsx)(`path`,{d:`M12 14h.01`}),(0,G.jsx)(`path`,{d:`M16 10h.01`}),(0,G.jsx)(`path`,{d:`M16 14h.01`}),(0,G.jsx)(`path`,{d:`M8 10h.01`}),(0,G.jsx)(`path`,{d:`M8 14h.01`})]});

  return (0,G.jsxs)(X,{
    title:`Peluang Investasi Properti`,
    onClose:()=>{},
    closable:!1,
    wide:`2xl`,
    noHeader:!0,
    stripeColor:s.color,
    children:[
      /* Compact Modal Header Bar */
      (0,G.jsxs)(`div`,{
        className:`px-4 py-2.5 flex items-center justify-between border-b border-slate-100 bg-slate-50/70 -mx-3 sm:-mx-4 -mt-3 sm:-mt-4 mb-3`,
        children:[
          (0,G.jsxs)(`div`,{
            className:`flex items-center gap-2.5`,
            children:[
              (0,G.jsx)(`div`,{
                className:`w-8 h-8 rounded-lg flex items-center justify-center shrink-0`,
                style:{backgroundColor:`${s.color}18`,border:`1px solid ${s.color}35`,color:s.color},
                children:iconBuilding2
              }),
              (0,G.jsxs)(`div`,{
                children:[
                  (0,G.jsxs)(`div`,{
                    className:`flex items-center gap-1.5`,
                    children:[
                      (0,G.jsx)(`h1`,{className:`text-xs sm:text-sm font-extrabold text-slate-800 tracking-tight leading-none`,children:`Peluang Investasi Properti`}),
                      (0,G.jsx)(`span`,{className:`text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded`,style:{backgroundColor:`${s.color}20`,color:s.color},children:s.name})
                    ]
                  }),
                  (0,G.jsxs)(`p`,{className:`text-[11px] font-medium text-slate-400 mt-0.5`,children:[`Giliran `,(0,G.jsx)(`strong`,{className:`text-slate-700`,children:r.name}),` mendarat di petak kosong`]})
                ]
              })
            ]
          }),
          (0,G.jsxs)(`div`,{
            className:`hidden sm:flex items-center gap-2`,
            children:[
              (0,G.jsxs)(`div`,{
                className:`bg-slate-100 border border-slate-200/80 px-2.5 py-1 rounded-lg flex items-center gap-1.5`,
                children:[iconShieldCheck,(0,G.jsxs)(`span`,{className:`text-[11px] font-semibold text-slate-600`,children:[`Agunan: `,(0,G.jsx)(`strong`,{className:`text-slate-800`,children:z(u)})]})]
              }),
              (0,G.jsxs)(`div`,{
                className:`bg-emerald-50 border border-emerald-200/80 px-2.5 py-1 rounded-lg flex items-center gap-1.5`,
                children:[iconTrendingUp,(0,G.jsxs)(`span`,{className:`text-[11px] font-bold text-emerald-700`,children:[`BEP: ~`,bep,`x Sewa`]})]
              })
            ]
          })
        ]
      }),

      /* 2-Column Grid Body */
      (0,G.jsxs)(`div`,{
        className:`property-modal-grid grid grid-cols-1 md:grid-cols-12 gap-3 items-start`,
        children:[
          /* LEFT COLUMN (5 Cols): Landmark + Province Set */
          (0,G.jsxs)(`div`,{
            className:`md:col-span-5 flex flex-col gap-2.5`,
            children:[
              /* 1. HERO LANDMARK BANNER (Full Bleed Image Header with Absolute Overlays) */
              (0,G.jsxs)(`div`,{
                className:`relative h-44 sm:h-52 w-full overflow-hidden rounded-xl border border-slate-200/90 shadow-2xs bg-slate-900 group`,
                children:[
                  (0,G.jsx)(`img`,{
                    src:`/cities/${o.city}.webp`,
                    alt:landmark,
                    className:`w-full h-full object-cover brightness-95 contrast-105 transform group-hover:scale-105 transition-transform duration-700 pointer-events-none`
                  }),
                  /* Dark Vignette Overlay for Text Readability */
                  (0,G.jsx)(`div`,{className:`absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/35 to-black/25 z-1 pointer-events-none`}),
                  /* Top Floating Badges: Landmark & Set */
                  (0,G.jsxs)(`div`,{
                    className:`absolute top-2.5 inset-x-3 flex items-center justify-between z-10 pointer-events-none`,
                    children:[
                      (0,G.jsxs)(`div`,{
                        className:`flex items-center gap-1.5 bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-lg border border-white/15 shadow-sm`,
                        children:[iconLandmark,(0,G.jsx)(`span`,{className:`truncate max-w-40 sm:max-w-48`,children:landmark})]
                      }),
                      (0,G.jsx)(`span`,{
                        className:`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded text-white shadow-sm tracking-wider`,
                        style:{backgroundColor:s.color},
                        children:s.name
                      })
                    ]
                  }),
                  /* Bottom Floating Title: City Name & Price */
                  (0,G.jsxs)(`div`,{
                    className:`absolute bottom-2.5 inset-x-3 flex items-end justify-between z-10 pointer-events-none`,
                    children:[
                      (0,G.jsxs)(`div`,{
                        children:[
                          (0,G.jsx)(`span`,{className:`text-[9px] font-extrabold uppercase tracking-widest text-slate-300 block mb-0.5 drop-shadow`,children:`Kota Madya`}),
                          (0,G.jsx)(`h2`,{className:`banner-city-title text-lg sm:text-2xl font-black text-white tracking-tight drop-shadow-md leading-none`,children:o.name})
                        ]
                      }),
                      (0,G.jsxs)(`div`,{
                        className:`text-right bg-slate-900/85 backdrop-blur-md border border-white/20 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xl shadow-lg`,
                        children:[
                          (0,G.jsx)(`span`,{className:`block text-[8px] font-bold uppercase tracking-wider text-amber-400`,children:`Harga Beli`}),
                          (0,G.jsx)(`span`,{className:`text-sm sm:text-lg font-black text-white tracking-tight tabular-nums`,children:z(a)})
                        ]
                      })
                    ]
                  })
                ]
              }),

              /* 2. SET PROVINSI & STATUS MONOPOLI */
              (0,G.jsxs)(`div`,{
                className:`rounded-xl p-2 sm:p-2.5 border`,
                style:{backgroundColor:`${s.color}0c`,borderColor:`${s.color}35`},
                children:[
                  (0,G.jsxs)(`div`,{
                    className:`flex items-center justify-between mb-1.5`,
                    children:[
                      (0,G.jsxs)(`div`,{
                        className:`flex items-center gap-1.5`,
                        children:[
                          (0,G.jsx)(`span`,{className:`w-2 h-2 rounded-full`,style:{backgroundColor:s.color}}),
                          (0,G.jsxs)(`h3`,{
                            className:`text-[11px] font-extrabold text-slate-800`,
                            children:[`Set `,s.name,` `,(0,G.jsxs)(`span`,{style:{color:s.color},className:`font-black ml-0.5`,children:[`(${ownedCount}/${c.length})`]})]
                          })
                        ]
                      }),
                      (0,G.jsxs)(`button`,{
                        type:`button`,
                        onClick:()=>setSimMono(!simMono),
                        className:`text-[9px] font-bold px-1.5 py-0.5 rounded border transition-all flex items-center gap-1 cursor-pointer ${simMono?`bg-amber-500 text-slate-950 border-amber-500 shadow-2xs`:`bg-white text-slate-700 border-slate-300 hover:border-slate-400`}`,
                        children:[iconSparkles,(0,G.jsx)(`span`,{children:simMono?`Monopoli x2`:`Simulasi x2`})]
                      })
                    ]
                  }),
                  (0,G.jsx)(`div`,{
                    className:`property-province-grid grid grid-cols-3 gap-1.5`,
                    children:c.map(t=>{
                      let ownerId=e.properties[t]?.owner,
                          isTarget=t===i,
                          isMine=ownerId===r.id||isTarget,
                          targetName=wt(t);
                      return (0,G.jsxs)(`div`,{
                        className:`rounded-lg p-1.5 flex items-center gap-1 border ${isTarget?`bg-amber-500/15 border border-amber-500`:(isMine||simMono)?`bg-emerald-500/10 border-emerald-500/30`:`bg-white/90 border-slate-200`}`,
                        children:[
                          (0,G.jsx)(`div`,{
                            className:`w-3.5 h-3.5 rounded-full flex items-center justify-center shrink-0 ${isTarget?`bg-amber-500 text-slate-950`:(isMine||simMono)?`bg-emerald-500 text-white`:`bg-slate-200 text-slate-500`}`,
                            children:isTarget?iconPin:(isMine||simMono)?iconCheck:iconLockOpen
                          }),
                          (0,G.jsxs)(`div`,{
                            className:`min-w-0 flex-1 leading-none`,
                            children:[
                              (0,G.jsx)(`div`,{className:`text-[10px] font-bold text-slate-800 truncate`,children:targetName}),
                              (0,G.jsx)(`div`,{
                                className:`text-[8px] font-semibold truncate mt-0.5 ${isTarget?`text-amber-800 font-bold`:(isMine||simMono)?`text-emerald-700`:ownerId?`text-rose-600`:`text-slate-400`}`,
                                children:isTarget?`Target`:(isMine||simMono)?`Milikmu`:ownerId?B(e,ownerId):`Kosong`
                              })
                            ]
                          })
                        ]
                      },t);
                    })
                  })
                ]
              })
            ]
          }),

          /* RIGHT COLUMN (7 Cols): Tiers + Cash Calculator + CTA Buttons */
          (0,G.jsxs)(`div`,{
            className:`md:col-span-7 flex flex-col gap-2.5`,
            children:[
              /* 3. SKEMA SEWA PASIF & TIER PENGEMBANGAN */
              (0,G.jsxs)(`div`,{
                className:`bg-slate-50 rounded-xl p-2.5 sm:p-3 border border-slate-200/90`,
                children:[
                  (0,G.jsxs)(`div`,{
                    className:`flex items-center justify-between mb-1.5`,
                    children:[
                      (0,G.jsxs)(`div`,{
                        className:`flex items-center gap-1`,
                        children:[iconBarChart3,(0,G.jsx)(`h3`,{className:`text-[11px] font-extrabold text-slate-800 uppercase tracking-wide`,children:`Sewa Pasif & Bangun`})]
                      }),
                      (0,G.jsxs)(`span`,{
                        className:`text-[10px] font-bold text-indigo-700 bg-indigo-50 border border-indigo-200 px-1.5 py-0.2 rounded`,
                        children:[`ROI: `,roi,`% / sewa`]
                      })
                    ]
                  }),
                  (0,G.jsx)(`div`,{
                    className:`property-tiers-grid grid grid-cols-4 gap-1.5`,
                    children:tiers.map((tier,idx)=>{
                      let isSel=idx===selTier,
                          tierIcon=idx===0?iconPin:idx===1?iconHome:idx===2?iconBuilding:iconSparkles;
                      return (0,G.jsxs)(`button`,{
                        type:`button`,
                        onClick:()=>setSelTier(idx),
                        className:`tier-card cursor-pointer relative text-left rounded-lg p-1.5 sm:p-2 flex flex-col justify-between border transition-all ${isSel?`bg-amber-50/90 border-2 border-amber-500 shadow-xs`:`bg-white border-slate-200 hover:border-slate-300`}`,
                        children:[
                          isSel&&(0,G.jsx)(`span`,{
                            className:`absolute -top-2 left-1/2 -translate-x-1/2 bg-amber-500 text-slate-950 text-[8px] font-extrabold px-1.5 py-0.2 rounded uppercase tracking-wider whitespace-nowrap shadow-2xs`,
                            children:idx===0?`Saat Beli`:`Pilihan`
                          }),
                          (0,G.jsxs)(`div`,{
                            className:`mt-0.5`,
                            children:[
                              (0,G.jsxs)(`div`,{
                                className:`text-[10px] font-bold flex items-center gap-1 ${isSel?`text-slate-800`:`text-slate-600`}`,
                                children:[tierIcon,tier.name]
                              }),
                              (0,G.jsx)(`div`,{
                                className:`text-xs sm:text-sm font-black text-slate-900 mt-0.5 tabular-nums`,
                                children:z(tier.rent)
                              })
                            ]
                          }),
                          (0,G.jsxs)(`div`,{
                            className:`mt-1.5 pt-1 border-t text-[9px] font-medium leading-tight ${isSel?`border-amber-200/80 text-amber-900`:`border-slate-100 text-slate-500`}`,
                            children:[`Biaya: `,(0,G.jsx)(`span`,{className:`font-bold`,children:tier.sub})]
                          })
                        ]
                      },idx);
                    })
                  }),
                  (0,G.jsxs)(`div`,{
                    className:`mt-1.5 bg-white rounded-lg px-2.5 py-1 border border-slate-200/80 flex items-center justify-between text-[11px]`,
                    children:[
                      (0,G.jsxs)(`span`,{
                        className:`text-slate-600`,
                        children:[`Total: `,(0,G.jsx)(`strong`,{className:`text-slate-900`,children:z(curTier.cost)}),` (${curTier.desc})`]
                      }),
                      (0,G.jsxs)(`span`,{
                        className:`font-bold text-emerald-600`,
                        children:[`Sewa `,z(curTier.rent),` / lawan`]
                      })
                    ]
                  })
                ]
              }),

              /* 4. KALKULATOR KESEHATAN KAS */
              (0,G.jsxs)(`div`,{
                className:`bg-white rounded-xl p-2.5 sm:p-3 border border-slate-200 shadow-2xs`,
                children:[
                  (0,G.jsxs)(`div`,{
                    className:`flex items-center justify-between text-[11px] mb-1`,
                    children:[
                      (0,G.jsxs)(`span`,{
                        className:`font-semibold text-slate-500 flex items-center gap-1`,
                        children:[iconWallet,` Kas `,r.name,`: `,(0,G.jsx)(`strong`,{className:`text-slate-800`,children:z(r.cash)})]
                      }),
                      (0,G.jsxs)(`span`,{
                        className:`font-bold text-rose-600`,
                        children:[`Biaya: -`,z(costSelected),` (${pctCost}%)`]
                      })
                    ]
                  }),
                  (0,G.jsxs)(`div`,{
                    className:`h-2.5 w-full bg-slate-100 rounded-full overflow-hidden flex p-0.5 border border-slate-200/60`,
                    children:[
                      (0,G.jsx)(`div`,{className:`h-full bg-emerald-500 rounded-l-full transition-all duration-300`,style:{width:`${pctRem}%`}}),
                      (0,G.jsx)(`div`,{className:`h-full bg-rose-500 rounded-r-full transition-all duration-300`,style:{width:`${pctCost}%`}})
                    ]
                  }),
                  (0,G.jsxs)(`div`,{
                    className:`flex items-center justify-between mt-1.5 pt-1 border-t border-slate-100`,
                    children:[
                      (0,G.jsx)(`span`,{className:`text-[10px] font-medium text-slate-500`,children:`Estimasi Sisa Kas:`}),
                      (0,G.jsxs)(`div`,{
                        className:`flex items-center gap-1.5`,
                        children:[
                          (0,G.jsx)(`span`,{className:`text-xs sm:text-sm font-black text-slate-900 tabular-nums`,children:z(rem)}),
                          (0,G.jsxs)(`span`,{
                            className:`inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.2 rounded-full ${rem>=4000000?`bg-emerald-50 text-emerald-700 border border-emerald-200`:rem>=1500000?`bg-amber-50 text-amber-700 border border-amber-200`:`bg-rose-50 text-rose-700 border border-rose-200`}`,
                            children:[
                              (0,G.jsx)(`span`,{className:`w-1.5 h-1.5 rounded-full ${rem>=4000000?`bg-emerald-500`:rem>=1500000?`bg-amber-500`:`bg-rose-500`}`}),
                              rem>=4000000?`Sangat Aman`:rem>=1500000?`Cukup Aman`:`Kritis!`
                            ]
                          })
                        ]
                      })
                    ]
                  })
                ]
              }),

              /* 5. ACTION BUTTONS */
              (0,G.jsxs)(`div`,{
                className:`property-actions-grid grid grid-cols-2 gap-2.5 w-full`,
                children:[
                  (0,G.jsxs)(`button`,{
                    type:`button`,
                    onClick:()=>n({type:`BUY`,accept:!1}),
                    className:`col-span-1 w-full py-2.5 px-3 rounded-xl border-2 border-slate-200 bg-white hover:bg-slate-50 active:scale-[0.99] text-slate-700 font-extrabold text-xs uppercase tracking-wider transition flex flex-col items-center justify-center cursor-pointer shadow-2xs min-h-[52px]`,
                    children:[
                      (0,G.jsx)(`span`,{children:`Lewati Giliran`}),
                      (0,G.jsx)(`span`,{className:`text-[9px] font-medium text-slate-400 normal-case mt-0.5`,children:`Kembali ke Papan`})
                    ]
                  }),
                  (0,G.jsxs)(`button`,{
                    type:`button`,
                    onClick:()=>n({type:`BUY`,accept:!0}),
                    className:`col-span-1 w-full py-2.5 px-3 rounded-xl bg-gradient-to-b from-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-600 active:scale-[0.99] text-slate-950 shadow-[0_6px_20px_-4px_rgba(245,158,11,0.6)] border border-amber-300 transition flex items-center justify-between group cursor-pointer min-h-[52px]`,
                    children:[
                      (0,G.jsxs)(`div`,{
                        className:`text-left min-w-0 pr-1`,
                        children:[
                          (0,G.jsxs)(`div`,{
                            className:`text-xs sm:text-sm font-black uppercase tracking-wider flex items-center gap-1`,
                            children:[iconShoppingBag,(0,G.jsx)(`span`,{children:`Beli Sekarang`})]
                          }),
                          (0,G.jsxs)(`div`,{
                            className:`text-[9px] font-bold text-amber-950/80 mt-0.5 truncate`,
                            children:[`Aset `,r.name]
                          })
                        ]
                      }),
                      (0,G.jsx)(`div`,{
                        className:`bg-slate-950/10 group-hover:bg-slate-950/15 px-2.5 py-1 rounded-lg text-xs sm:text-sm font-black tracking-tight whitespace-nowrap tabular-nums shrink-0`,
                        children:z(a)
                      })
                    ]
                  })
                ]
              }),
              d&&(0,G.jsxs)(`button`,{
                type:`button`,
                disabled:r.cash<u,
                onClick:()=>n({type:`USE_KEEP_CARD`,cardId:`flash-sale`}),
                className:`w-full rounded-lg border border-purple-300 bg-purple-50 hover:bg-purple-100 p-1.5 text-xs font-bold text-purple-700 transition-all cursor-pointer flex items-center justify-center gap-1.5`,
                children:[iconZap,` Flash Sale: Beli 50% (${z(u)})`]
              })
            ]
          })
        ]
      })
    ]
  });
}var Os={takdir:`bg-takdir text-ink`,musibah:`bg-merah text-paper`,krisis:`bg-ink text-sun`,simpanan:`bg-simpanan text-paper`},ks={baik:`Untung`,buruk:`Apes`,campur:`Untung-untungan`};function As({cardId:e}){let t=ct(e);return(0,G.jsxs)(`div`,{className:`overflow-hidden rounded-xl border-3 border-ink bg-paper shadow-brut`,children:[(0,G.jsxs)(`div`,{className:`flex items-center justify-between gap-2 px-3 py-1.5 font-display text-xs tracking-wide uppercase ${Os[t.deck]}`,children:[(0,G.jsx)(`span`,{children:Ct[t.deck]}),`tone`in t&&(0,G.jsx)(`span`,{children:ks[t.tone]})]}),(0,G.jsxs)(`div`,{className:`flex gap-3 p-2.5`,children:[(0,G.jsx)(Tt,{cardId:e,className:`size-20 shrink-0 rounded-lg border-3 border-ink`},e),(0,G.jsxs)(`div`,{className:`min-w-0 self-center`,children:[(0,G.jsx)(`h3`,{className:`font-display text-base leading-tight`,children:t.title}),(0,G.jsx)(`p`,{className:`mt-1 text-sm font-medium text-pretty`,children:t.text})]})]})]})}function js({game:e,pending:t,act:n}){let r=e.players[e.currentPlayer],i=e.players[t.owner],{tile:a,price:o}=t,s=ft.tiles[a],c=St(a),l=e.properties[a];return s?.kind!==`city`||!c||!i||!l?null:(0,G.jsxs)(X,{title:`Ambil alih kota?`,onClose:()=>{},closable:!1,children:[(0,G.jsx)(Es,{tile:a}),(0,G.jsxs)(`div`,{className:`mt-3 flex items-end justify-between gap-3`,children:[(0,G.jsxs)(`div`,{className:`min-w-0`,children:[(0,G.jsx)(`p`,{className:`text-xs font-bold text-muted uppercase`,children:c.name}),(0,G.jsx)(`h3`,{className:`truncate font-display text-2xl leading-none sm:text-3xl`,children:s.name})]}),(0,G.jsx)(`p`,{className:`shrink-0 font-display text-xl leading-none sm:text-2xl`,children:z(o)})]}),(0,G.jsxs)(`div`,{className:`mt-3 flex items-center gap-2 rounded-md border-2 border-ink bg-white px-2 py-1.5`,children:[(0,G.jsx)(H,{pawn:i.pawn,size:36}),(0,G.jsxs)(`p`,{className:`min-w-0 text-sm leading-tight`,children:[`Milik `,(0,G.jsx)(`b`,{children:i.name}),(0,G.jsxs)(`span`,{className:`block text-xs text-muted`,children:[Dt(l.level),`, sewa sekarang`,` `,z(st(e,a))]})]})]}),(0,G.jsxs)(`p`,{className:`mt-1 text-xs text-muted`,children:[`Harganya `,2,`x nilai tanah dan bangunannya, dibayar ke`,` `,i.name,`. Pemilik tidak bisa menolak, dan bangunannya ikut jadi milikmu.`]}),(0,G.jsxs)(`p`,{className:`mt-3 text-sm`,children:[`Kasmu `,z(r.cash),`, sisa`,` `,(0,G.jsx)(`b`,{children:z(r.cash-o)}),` kalau ambil alih.`]}),(0,G.jsx)(`div`,{className:`mt-3`,children:(0,G.jsxs)(Q,{children:[(0,G.jsx)(V,{variant:`secondary`,onClick:()=>n({type:`TAKEOVER`,accept:!1}),children:`Lewati`}),(0,G.jsxs)(V,{onClick:()=>n({type:`TAKEOVER`,accept:!0}),children:[`Ambil alih `,z(o)]})]})})]})}var Ms=ft.tiles.length,Ns=ft.tile_rules.toll;function Ps(e){return L(t=>{let n=t.log.findLastIndex(({event:e})=>e.type===`TURN`),r=t.log.slice(n+1).map(e=>e.event),i=r.some(t=>t.type===`KEEP_USED`&&t.playerId===e&&t.cardId===`voucher-tol`),a=r.findLast(t=>t.type===`MONEY`&&t.reason===`toll`&&t.from===e);return i?0:a?.type===`MONEY`?a.amount:null})}function Fs({game:e,options:t,act:n}){let r=e.players[e.currentPlayer],i=Ps(r.id)??(e.crisisActive?Ns.crisis_fee:Ns.fee),a=r.position;return(0,G.jsxs)(X,{title:`Masuk ${kt(a)}`,onClose:()=>{},closable:!1,children:[(0,G.jsx)(`p`,{className:`rounded-lg border-3 border-ink bg-sun px-3 py-2 text-sm font-bold`,children:i===0?`Gratis pakai Voucher Tol.`:`Kamu bayar tol ${z(i)} ke Negara.`}),(0,G.jsx)(`p`,{className:`mt-4 text-sm font-medium`,children:`Pilih gerbang tol tujuan. Lewat START tidak dapat gaji.`}),(0,G.jsx)(`ul`,{className:`mt-3 space-y-2`,children:t.map(e=>{let t=(e-a+Ms)%Ms,r=St(e);return(0,G.jsx)(`li`,{children:(0,G.jsxs)(`button`,{type:`button`,onClick:()=>n({type:`PICK_TOLL`,tile:e}),className:`brut-press flex w-full items-center gap-3 rounded-lg border-3 border-ink bg-white p-2.5 text-left shadow-brut-sm`,children:[(0,G.jsx)(`span`,{className:`h-10 w-2.5 shrink-0 rounded-sm border-2 border-ink`,style:{backgroundColor:r?.color??`#BFC3C7`}}),(0,G.jsxs)(`span`,{className:`min-w-0 flex-1 leading-tight`,children:[(0,G.jsx)(`span`,{className:`block truncate font-bold`,children:kt(e)}),(0,G.jsx)(`span`,{className:`block text-xs text-muted`,children:r?`Bekas kota ${wt(e)}, digusur jadi tol`:`Gerbang tol asli`})]}),(0,G.jsxs)(`span`,{className:`shrink-0 text-xs font-bold`,children:[t,` petak ke depan`]})]})},e)})})]})}function Is({player:e}){return(0,G.jsxs)(`p`,{className:`mb-3 flex items-center gap-2 text-sm font-bold`,children:[(0,G.jsx)(H,{pawn:e.pawn,size:28}),e.name]})}function Ls({game:e}){let t=L(e=>e.act),n=e.players[e.currentPlayer],r=e=>t(n.id,e),{pending:i}=e,a=(t,r)=>(0,G.jsxs)(X,{title:t,onClose:()=>{},closable:!1,children:[(0,G.jsx)(Is,{player:n}),r]},e.phase);switch(e.phase){case`awaiting_buy`:return i?.kind===`buy`?(0,G.jsx)(Ds,{game:e,pending:i,act:r}):null;case`awaiting_takeover`:return i?.kind===`takeover`?(0,G.jsx)(js,{game:e,pending:i,act:r}):null;case`awaiting_toll`:return i?.kind===`toll`?(0,G.jsx)(Fs,{game:e,options:i.options,act:r}):null;case`awaiting_upgrade`:return i?.kind===`upgrade`?a(`Gajian`,(0,G.jsx)(Rs,{game:e,player:n,tiles:i.tiles,act:r})):null;case`awaiting_choice`:return i?.kind!==`card`||i.step!==`choice`?null:a(`Kartu ${Ct[ct(i.cardId).deck]}`,(0,G.jsxs)(`div`,{className:`space-y-3`,children:[(0,G.jsx)(As,{cardId:i.cardId}),(0,G.jsx)(`div`,{className:`grid gap-2`,children:xt(i.cardId,i.options).map((e,t)=>(0,G.jsx)(V,{variant:t===0?`primary`:`secondary`,onClick:()=>r({type:`CHOOSE`,option:t}),children:e},e))})]}));case`awaiting_pick`:return i?.kind===`card`?a(`Pilih sasaran`,(0,G.jsx)(zs,{game:e,pending:i,act:r})):null;case`awaiting_keep`:return i?.kind===`keep`?a(i.window===`after_draw`?`Kartu Simpanan`:`Joki Dadu`,(0,G.jsx)(Vs,{pending:i,act:r})):null;case`debt`:return a(`Gali lubang`,(0,G.jsx)(Cs,{game:e,player:n,act:r,busy:!1}));case`awaiting_loan`:return a(`Cari pinjaman`,(0,G.jsx)(Ts,{game:e,busy:!1}));default:return null}}function Rs({game:e,player:t,tiles:n,act:r}){let[i,a]=(0,U.useState)([]),o=e=>St(e)?.upgrade_cost??0,s=i.reduce((e,t)=>e+o(t),0),c=e=>a(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e]);return(0,G.jsxs)(`div`,{className:`space-y-3`,children:[(0,G.jsx)(Z,{children:`Naikkan bangunan satu tingkat per kota, selama uangnya cukup.`}),(0,G.jsx)(`ul`,{className:`space-y-2`,children:n.map(t=>{let n=e.properties[t].level,r=i.includes(t);return(0,G.jsx)(`li`,{children:(0,G.jsxs)(`label`,{className:`flex cursor-pointer items-center gap-2 rounded-lg border-3 border-ink p-2 ${r?`bg-sun shadow-brut-sm`:`bg-white`}`,children:[(0,G.jsx)(`input`,{type:`checkbox`,className:`size-5 accent-ink`,checked:r,onChange:()=>c(t)}),(0,G.jsx)(ys,{game:e,tile:t,extra:z(o(t)),upgradeTo:n+1})]})},t)})}),(0,G.jsxs)(Q,{children:[(0,G.jsx)(V,{variant:`secondary`,onClick:()=>r({type:`UPGRADE`,tiles:[]}),children:`Lewati`}),(0,G.jsx)(V,{disabled:i.length===0||s>t.cash,onClick:()=>r({type:`UPGRADE`,tiles:i}),children:i.length===0?`Pilih kota`:`Bangun ${z(s)}`})]}),s>t.cash&&(0,G.jsx)(`p`,{className:`text-xs font-bold text-merah`,children:`Uangmu tidak cukup.`})]})}function zs({game:e,pending:t,act:n}){return(0,G.jsxs)(`div`,{className:`space-y-3`,children:[(0,G.jsx)(As,{cardId:t.cardId}),t.step===`pick_tile`&&(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(Z,{children:`Pilih kota.`}),(0,G.jsx)(`ul`,{className:`space-y-2`,children:t.options.map(t=>(0,G.jsx)(`li`,{children:(0,G.jsx)(`button`,{type:`button`,onClick:()=>n({type:`PICK_TILE`,tile:t}),className:`brut-press flex w-full items-center rounded-lg border-3 border-ink bg-white p-2 shadow-brut-sm`,children:(0,G.jsx)(ys,{game:e,tile:t,showOwner:!0})})},t))}),t.skippable&&(0,G.jsx)(V,{variant:`secondary`,className:`w-full`,onClick:()=>n({type:`PICK_TILE`,tile:null}),children:`Lewati`})]}),t.step===`pick_player`&&(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(Z,{children:`Pilih pemain.`}),(0,G.jsx)(`ul`,{className:`grid grid-cols-2 gap-2`,children:t.options.map(t=>{let r=e.players[t];return(0,G.jsx)(`li`,{children:(0,G.jsxs)(`button`,{type:`button`,onClick:()=>n({type:`PICK_PLAYER`,playerId:t}),className:`brut-press flex w-full items-center gap-2 rounded-lg border-3 border-ink bg-white p-2 text-left shadow-brut-sm`,children:[(0,G.jsx)(H,{pawn:r.pawn,size:36}),(0,G.jsxs)(`span`,{className:`min-w-0 leading-tight`,children:[(0,G.jsx)(`span`,{className:`block truncate text-sm font-bold`,children:r.name}),(0,G.jsx)(`span`,{className:`text-xs`,children:z(r.cash)})]})]})},t)})})]})]})}var Bs={"restu-ibu":`Pakai Restu Ibu: batalkan kartu ini`,asuransi:`Pakai Asuransi: batalkan kerugian uangnya`};function Vs({pending:e,act:t}){let[n,r]=(0,U.useState)(0),[i,a]=(0,U.useState)(6),o=(0,G.jsx)(V,{variant:`secondary`,onClick:()=>t({type:`SKIP_KEEP_CARD`}),children:e.window===`after_draw`?`Tidak usah`:`Biarkan`});if(e.window===`after_draw`)return(0,G.jsxs)(`div`,{className:`space-y-3`,children:[(0,G.jsx)(As,{cardId:e.cardId}),(0,G.jsx)(Z,{children:`Kamu punya kartu Simpanan yang bisa dipakai sekarang.`}),(0,G.jsxs)(`div`,{className:`grid gap-2`,children:[e.options.map(e=>(0,G.jsx)(V,{onClick:()=>t({type:`USE_KEEP_CARD`,cardId:e}),children:Bs[e]??`Pakai ${ct(e).title}`},e)),o]})]});let s=[...e.dice];return s[n]=i,(0,G.jsxs)(`div`,{className:`space-y-3`,children:[(0,G.jsxs)(Z,{children:[`Lemparanmu `,e.dice[0],` dan `,e.dice[1],`. Ganti satu dadu?`]}),(0,G.jsxs)(`fieldset`,{children:[(0,G.jsx)(`legend`,{className:`mb-2 text-sm font-bold`,children:`Dadu yang diganti`}),(0,G.jsx)(Q,{children:e.dice.map((e,t)=>(0,G.jsxs)(`button`,{type:`button`,"aria-pressed":n===t,onClick:()=>r(t),className:`rounded-lg border-3 border-ink px-3 py-2 font-display ${n===t?`bg-ink text-sun`:`bg-white`}`,children:[`Dadu `,t+1,`: `,e]},t))})]}),(0,G.jsxs)(`fieldset`,{children:[(0,G.jsx)(`legend`,{className:`mb-2 text-sm font-bold`,children:`Angka baru`}),(0,G.jsx)(`div`,{className:`grid grid-cols-6 gap-1.5`,children:[1,2,3,4,5,6].map(e=>(0,G.jsx)(`button`,{type:`button`,"aria-pressed":i===e,onClick:()=>a(e),className:`rounded-md border-3 border-ink py-2 font-display ${i===e?`bg-sun shadow-brut-sm`:`bg-white`}`,children:e},e))})]}),(0,G.jsxs)(Q,{children:[o,(0,G.jsxs)(V,{onClick:()=>t({type:`USE_KEEP_CARD`,cardId:`joki-dadu`,die:n,value:i}),children:[`Jalan `,s[0]+s[1],` petak`]})]})]})}function Hs(e){switch(e.type){case`go_jail`:return`Masuk Lapas`;case`pay`:return`Denda ${z(e.amount)}`;case`pay_percent`:return`${e.percent}% kas disita`;case`gain`:return`Terima ${z(e.amount)}`;case`sequence`:return e.effects.map(Hs).join(`, `);case`none`:return`Tidak terjadi apa-apa`;default:return`Lihat kartu`}}function Us({game:e,onReady:t}){let n=L(e=>e.act),r=e.players[e.currentPlayer],i=e=>n(r.id,e),{pending:a}=e,o=L(e=>e.nextLogId);if(hs(a?.kind===`dice`&&a.source===`raid`?`razia`:null,o),u(a?.kind===`dice`&&a.source===`court`?`pengadilan`:null,o),a?.kind!==`dice`&&a?.kind!==`card`)return null;let s=a.kind===`card`?ct(a.cardId):null,c=a.kind===`dice`&&a.source===`court`,l=s?`Kartu ${Ct[s.deck]}`:c?`Pengadilan`:`Razia`,d=a.kind===`dice`&&a.effect.type===`dice_table`?Object.entries(a.effect.table):[],f=a.kind===`dice`&&a.best,p=e=>r.keepCards.includes(e);return(0,G.jsxs)(X,{title:l,onClose:()=>{},closable:!1,children:[(0,G.jsxs)(`p`,{className:`mb-3 flex items-center gap-2 text-sm font-bold`,children:[(0,G.jsx)(H,{pawn:r.pawn,size:28}),r.name]}),s?(0,G.jsx)(As,{cardId:s.id}):(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(Z,{children:c?f?`Pengacara Kenalan sudah siap: dadu dilempar dua kali, diambil yang terbaik.`:`Kamu disidang. Satu lemparan dadu menentukan vonismu.`:`Kena razia di jalan. Satu lemparan dadu menentukan nasibmu.`}),(0,G.jsx)(`dl`,{className:`mt-3 divide-y-2 divide-ink/15 rounded-lg border-3 border-ink bg-white text-sm`,children:d.map(([e,t])=>(0,G.jsxs)(`div`,{className:`flex items-baseline gap-3 px-3 py-2`,children:[(0,G.jsx)(`dt`,{className:`w-10 shrink-0 font-display tabular-nums`,children:e.replace(`-`,`–`)}),(0,G.jsx)(`dd`,{className:`font-medium`,children:Hs(t)})]},e))})]}),(0,G.jsxs)(`div`,{className:`mt-4 grid gap-2`,children:[c&&p(`pengacara`)&&!f&&(0,G.jsx)(V,{variant:`secondary`,onClick:()=>i({type:`USE_KEEP_CARD`,cardId:`pengacara`}),children:`Pakai Pengacara Kenalan`}),c&&p(`orang-dalam`)&&(0,G.jsx)(V,{variant:`secondary`,onClick:()=>i({type:`USE_KEEP_CARD`,cardId:`orang-dalam`}),children:`Pakai Orang Dalam: batalkan perkara`}),(0,G.jsx)(V,{onClick:t,children:`Kocok dadu sekarang`})]})]},l)}function Ws({game:e,onClose:t}){let n=L(e=>e.log).slice(-120).reverse().flatMap(({id:t,event:n})=>{let r=Et(e,n);return r?[{id:t,text:r,turn:n.type===`TURN`}]:[]});return(0,G.jsx)(X,{title:`Log kejadian`,onClose:t,children:n.length===0?(0,G.jsx)(`p`,{className:`text-sm text-muted`,children:`Belum ada kejadian.`}):(0,G.jsx)(`ol`,{className:`space-y-1.5 text-sm`,children:n.map(({id:e,text:t,turn:n})=>(0,G.jsx)(`li`,{className:n?`mt-3 rounded-md border-2 border-ink bg-sun px-2 py-1 font-bold first:mt-0`:`border-l-3 border-ink/20 pl-2`,children:t},e))})})}var Gs=`brut brut-press rounded-lg bg-paper px-4 py-3 text-center font-display text-sm tracking-wide uppercase`;function Ks(){
  return (0,G.jsxs)(`a`,{
    href:`/cara-main`,
    target:`_blank`,
    rel:`noopener noreferrer`,
    className:`px-3 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-extrabold text-xs flex items-center justify-center gap-1.5 transition cursor-pointer border border-slate-200/90 uppercase tracking-wide`,
    children:[
      (0,G.jsx)(`svg`,{className:`size-4 text-slate-600 shrink-0`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,G.jsx)(`circle`,{cx:`12`,cy:`12`,r:`10`}),(0,G.jsx)(`path`,{d:`M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3`}),(0,G.jsx)(`path`,{d:`M12 17h.01`})]}),
      `Cara Main ↗`
    ]
  });
}
var qs=[{value:`normal`,label:`Normal`},{value:`ringan`,label:`Ringan`}],
    Js=[{value:`normal`,label:`Normal`},{value:`pelan`,label:`Pelan`},{value:`mati`,label:`Mati`}];

function Ys(){
  let e=re(e=>e.quality),
      t=re(e=>e.setQuality),
      n=s(e=>e.voice),
      r=s(e=>e.setVoice),
      i=s(e=>e.music),
      a=s(e=>e.setMusic),
      o=s(e=>e.sfx),
      c=s(e=>e.setSfx);

  return (0,G.jsxs)(`div`,{
    className:`mt-4 pt-3.5 border-t border-slate-200 space-y-3.5`,
    children:[
      (0,G.jsxs)(`div`,{
        className:`flex items-center gap-1.5 text-[11px] font-black uppercase tracking-wider text-slate-500 mb-1`,
        children:[
          (0,G.jsx)(`svg`,{className:`size-3.5 text-slate-500 shrink-0`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.5`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,G.jsx)(`line`,{x1:`4`,x2:`20`,y1:`21`,y2:`21`}),(0,G.jsx)(`line`,{x1:`4`,x2:`20`,y1:`14`,y2:`14`}),(0,G.jsx)(`line`,{x1:`4`,x2:`20`,y1:`7`,y2:`7`}),(0,G.jsx)(`circle`,{cx:`14`,cy:`21`,r:`2`}),(0,G.jsx)(`circle`,{cx:`8`,cy:`14`,r:`2`}),(0,G.jsx)(`circle`,{cx:`16`,cy:`7`,r:`2`})]}),
          `Pengaturan Suara & Grafis`
        ]
      }),
      (0,G.jsx)(jt,{legend:`Musik`,options:Js,value:i,onChange:a}),
      (0,G.jsx)(jt,{legend:`Efek Suara`,options:Js,value:o,onChange:c}),
      (0,G.jsx)(jt,{legend:`Voice Over`,options:Js,value:n,onChange:r}),
      (0,G.jsxs)(`div`,{
        children:[
          (0,G.jsx)(jt,{legend:`Kualitas Grafis`,options:qs,value:e,onChange:t}),
          (0,G.jsx)(`p`,{className:`mt-1.5 text-[11px] font-medium text-slate-500 leading-normal`,children:`Mode Ringan mematikan bayangan 3D dan menurunkan resolusi agar gameplay lebih mulus di HP / laptop hemat baterai.`})
        ]
      })
    ]
  });
}

function Xs({onClose:e}){
  let t=(0,U.useRef)(null);
  u(`popup-buka`);
  let n=L(e=>e.quit),
      r=L(e=>e.seat!==null),
      [i,a]=(0,U.useState)(!1);

  (0,U.useEffect)(()=>{t.current?.showModal()},[]);

  return (0,G.jsx)(`dialog`,{
    ref:t,
    onClose:e,
    "aria-labelledby":`game-menu-title`,
    style:{width:`min(28rem,calc(100vw-2rem))`},
    className:`game-menu-dialog pointer-events-auto m-auto rounded-2xl bg-white text-slate-900 shadow-2xl border border-slate-200/90 max-h-[92vh] overflow-y-auto backdrop:bg-slate-950/60 backdrop:backdrop-blur-xs`,
    children:(0,G.jsxs)(`div`,{
      className:`p-5 sm:p-6 w-full box-border flex flex-col`,
      children:[
        /* Header: Title + Close Icon Button */
        (0,G.jsxs)(`div`,{
          className:`flex items-center justify-between pb-3.5 border-b border-slate-100`,
          children:[
            (0,G.jsxs)(`div`,{
              className:`flex items-center gap-2.5`,
              children:[
                (0,G.jsx)(`div`,{
                  className:`w-8 h-8 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-600 shrink-0`,
                  children:(0,G.jsxs)(`svg`,{className:`size-4`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`3`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,G.jsx)(`line`,{x1:`10`,x2:`10`,y1:`5`,y2:`19`}),(0,G.jsx)(`line`,{x1:`14`,x2:`14`,y1:`5`,y2:`19`})]})
                }),
                (0,G.jsx)(`h2`,{id:`game-menu-title`,className:`font-black text-lg text-slate-900 tracking-tight`,children:r?`Menu Room`:`Jeda Permainan`})
              ]
            }),
            (0,G.jsx)(`button`,{
              type:`button`,
              onClick:e,
              "aria-label":`Tutup menu`,
              className:`w-8 h-8 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 flex items-center justify-center transition cursor-pointer`,
              children:(0,G.jsxs)(`svg`,{className:`size-4`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.5`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,G.jsx)(`line`,{x1:`18`,x2:`6`,y1:`6`,y2:`18`}),(0,G.jsx)(`line`,{x1:`6`,x2:`18`,y1:`6`,y2:`18`})]})
            })
          ]
        }),
        /* Body Content */
        r?(0,G.jsx)(Zs,{onClose:()=>t.current?.close()}):i?(0,G.jsxs)(`div`,{
          className:`mt-4 p-4 rounded-xl bg-rose-50 border border-rose-200`,
          children:[
            (0,G.jsxs)(`div`,{
              className:`flex items-center gap-2 text-rose-800 font-black text-xs uppercase tracking-wide`,
              children:[
                (0,G.jsx)(`svg`,{className:`size-4 text-rose-600 shrink-0`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.5`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,G.jsx)(`circle`,{cx:`12`,cy:`12`,r:`10`}),(0,G.jsx)(`line`,{x1:`12`,x2:`12`,y1:`8`,y2:`12`}),(0,G.jsx)(`line`,{x1:`12`,x2:`12.01`,y1:`16`,y2:`16`})]}),
                `Konfirmasi Akhiri Permainan`
              ]
            }),
            (0,G.jsx)(`p`,{className:`mt-2 text-xs font-semibold text-rose-700 leading-relaxed`,children:`Permainan ini akan dihapus dari browser ini dan seluruh progress tidak bisa dilanjutkan lagi.`}),
            (0,G.jsxs)(`div`,{
              className:`mt-4 flex gap-2`,
              children:[
                (0,G.jsx)(`button`,{type:`button`,className:`flex-1 py-2.5 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 font-extrabold text-xs transition cursor-pointer`,onClick:()=>a(!1),children:`Batal`}),
                (0,G.jsx)(`button`,{type:`button`,className:`flex-1 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-black text-xs transition cursor-pointer shadow-sm`,onClick:n,children:`Ya, Akhiri`})
              ]
            })
          ]
        }):(0,G.jsxs)(`div`,{
          className:`mt-4 grid gap-2.5`,
          children:[
            /* Resume Button */
            (0,G.jsxs)(`button`,{
              type:`button`,
              onClick:e,
              className:`w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-black text-sm uppercase tracking-wide flex items-center justify-center gap-2 shadow-md transition active:scale-[0.98] cursor-pointer`,
              children:[
                (0,G.jsx)(`svg`,{className:`size-4 shrink-0`,viewBox:`0 0 24 24`,fill:`currentColor`,stroke:`none`,children:(0,G.jsx)(`polygon`,{points:`5 3 19 12 5 21 5 3`})}),
                `Lanjut Main`
              ]
            }),
            /* Nav Row: Cara Main + Ke Beranda */
            (0,G.jsxs)(`div`,{
              className:`grid grid-cols-2 gap-2`,
              children:[
                (0,G.jsx)(Ks,{}),
                (0,G.jsxs)(m,{
                  to:`/`,
                  className:`px-3 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-extrabold text-xs flex items-center justify-center gap-1.5 transition cursor-pointer border border-slate-200/90 uppercase tracking-wide`,
                  children:[
                    (0,G.jsx)(`svg`,{className:`size-4 text-slate-600 shrink-0`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,G.jsx)(`path`,{d:`m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z`}),(0,G.jsx)(`polyline`,{points:`9 22 9 12 15 12 15 22`})]}),
                    `Ke Beranda`
                  ]
                })
              ]
            }),
            /* Auto-save helper notice */
            (0,G.jsxs)(`div`,{
              className:`flex items-center justify-center gap-1.5 py-1 text-[11px] font-bold text-slate-400`,
              children:[
                (0,G.jsx)(`svg`,{className:`size-3.5 text-emerald-500 shrink-0`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.5`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,G.jsx)(`polyline`,{points:`20 6 9 17 4 12`})}),
                `Permainan tersimpan otomatis di browser ini.`
              ]
            }),
            /* Danger: Akhiri Permainan */
            (0,G.jsxs)(`button`,{
              type:`button`,
              onClick:()=>a(!0),
              className:`w-full py-2.5 px-4 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-600 hover:text-rose-700 border border-rose-200/80 font-black text-xs uppercase tracking-wide flex items-center justify-center gap-2 transition cursor-pointer`,
              children:[
                (0,G.jsx)(`svg`,{className:`size-3.5 shrink-0 text-rose-500`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.5`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,G.jsx)(`path`,{d:`M18.36 6.64a9 9 0 1 1-12.73 0`}),(0,G.jsx)(`line`,{x1:`12`,x2:`12`,y1:`2`,y2:`12`})]}),
                `Akhiri Permainan`
              ]
            })
          ]
        }),
        /* Settings Panel */
        !i&&(0,G.jsx)(Ys,{})
      ]
    })
  });
}
function Zs({onClose:e}){
  let t=r(),
      n=I(e=>e.leave),
      i=L(e=>e.game?.phase===`game_over`),
      [a,o]=(0,U.useState)(!1),
      s=async()=>{await n(),t(`/`)};

  return a?(0,G.jsxs)(`div`,{
    className:`mt-4 p-4 rounded-xl bg-rose-50 border border-rose-200`,
    children:[
      (0,G.jsxs)(`div`,{
        className:`flex items-center gap-2 text-rose-800 font-black text-xs uppercase tracking-wide`,
        children:[
          (0,G.jsx)(`svg`,{className:`size-4 text-rose-600 shrink-0`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.5`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,G.jsx)(`circle`,{cx:`12`,cy:`12`,r:`10`}),(0,G.jsx)(`line`,{x1:`12`,x2:`12`,y1:`8`,y2:`12`}),(0,G.jsx)(`line`,{x1:`12`,x2:`12.01`,y1:`16`,y2:`16`})]}),
          `Peringatan Menyerah`
        ]
      }),
      (0,G.jsx)(`p`,{className:`mt-2 text-xs font-semibold text-rose-700 leading-relaxed`,children:`Kamu akan dianggap menyerah: seluruh uang dan aset tanahmu disita Negara. Pemain lain tetap lanjut.`}),
      (0,G.jsxs)(`div`,{
        className:`mt-4 flex gap-2`,
        children:[
          (0,G.jsx)(`button`,{type:`button`,className:`flex-1 py-2.5 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 font-extrabold text-xs transition cursor-pointer`,onClick:()=>o(!1),children:`Batal`}),
          (0,G.jsx)(`button`,{type:`button`,className:`flex-1 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-black text-xs transition cursor-pointer shadow-sm`,onClick:s,children:`Ya, Keluar`})
        ]
      })
    ]
  }):(0,G.jsxs)(`div`,{
    className:`mt-4 grid gap-2.5`,
    children:[
      (0,G.jsxs)(`button`,{
        type:`button`,
        onClick:e,
        className:`w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-black text-sm uppercase tracking-wide flex items-center justify-center gap-2 shadow-md transition active:scale-[0.98] cursor-pointer`,
        children:[
          (0,G.jsx)(`svg`,{className:`size-4 shrink-0`,viewBox:`0 0 24 24`,fill:`currentColor`,stroke:`none`,children:(0,G.jsx)(`polygon`,{points:`5 3 19 12 5 21 5 3`})}),
          `Lanjut Main`
        ]
      }),
      (0,G.jsx)(Ks,{}),
      (0,G.jsxs)(`button`,{
        type:`button`,
        onClick:()=>i?void s():o(!0),
        className:`w-full py-2.5 px-4 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-600 hover:text-rose-700 border border-rose-200/80 font-black text-xs uppercase tracking-wide flex items-center justify-center gap-2 transition cursor-pointer`,
        children:[
          (0,G.jsx)(`svg`,{className:`size-3.5 shrink-0 text-rose-500`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.5`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,G.jsx)(`path`,{d:`M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4`}),(0,G.jsx)(`polyline`,{points:`16 17 21 12 16 7`}),(0,G.jsx)(`line`,{x1:`21`,x2:`9`,y1:`12`,y2:`12`})]}),
          `Keluar Dari Room`
        ]
      })
    ]
  });
}
var Qs=()=>Date.now(),$s=[{tray:`lines`,label:`Kalimat cepat`},{tray:`stickers`,label:`Stiker`}];function ec({className:e=``}){let t=F(e=>e.unread),n=F(e=>e.setOpen);return(0,G.jsxs)(V,{variant:`secondary`,size:`xs`,className:`relative ${e}`,"aria-label":t>0?`Chat, ${t} pesan baru`:`Chat`,onClick:()=>n(!0),children:[`Chat`,t>0&&(0,G.jsx)(`span`,{"aria-hidden":!0,className:`absolute -top-2 -right-2 grid h-5 min-w-5 place-items-center rounded-full border-2 border-ink bg-merah px-1 font-sans text-[11px] leading-none font-bold text-paper`,children:t>9?`9+`:t})]})}function tc({entry:e,mine:t}){return(0,G.jsxs)(`li`,{className:`flex items-end gap-2 ${t?`flex-row-reverse`:``}`,children:[(0,G.jsx)(H,{pawn:e.pawn,size:28}),(0,G.jsxs)(`div`,{className:`flex max-w-[78%] flex-col gap-1 ${t?`items-end`:`items-start`}`,children:[(0,G.jsx)(`span`,{className:`text-xs font-bold text-muted`,children:t?`Kamu`:e.name}),`sticker`in e?(0,G.jsx)(`span`,{className:`py-1`,children:(0,G.jsx)(He,{sticker:e.sticker})}):(0,G.jsx)(`p`,{className:`rounded-lg border-2 border-ink px-2.5 py-1.5 text-sm break-words ${t?`bg-sun`:`bg-white`}`,children:e.text})]})]})}function nc({onClose:e}){let t=F(e=>e.messages),n=I(e=>e.me),r=I(e=>e.send),[i,a]=(0,U.useState)(`lines`),[o,s]=(0,U.useState)(``),c=(0,U.useRef)(null),l=F(e=>e.sentAt),u=F(e=>e.record),[d,f]=(0,U.useState)(Qs),p=l.filter(e=>d-e<5e3),m=p.length>=4?p[0]+5e3:0,h=m>0;(0,U.useEffect)(()=>{if(!m)return;let e=setTimeout(()=>f(Qs()),Math.max(0,m-Qs()));return()=>clearTimeout(e)},[m]);let g=e=>{if(h)return!1;let t=Qs();return f(t),u(t),r(`chat`,e),!0};return(0,U.useEffect)(()=>{c.current?.scrollTo({top:c.current.scrollHeight})},[t.length]),(0,G.jsxs)(X,{title:`Chat meja`,onClose:e,children:[(0,G.jsx)(`ol`,{ref:c,role:`log`,"aria-label":`Pesan`,className:`-mx-1 max-h-[38dvh] min-h-20 space-y-3 overflow-y-auto overscroll-contain px-1 py-1`,children:t.length===0?(0,G.jsx)(`li`,{className:`text-sm text-muted`,children:`Belum ada obrolan. Sapa meja dulu.`}):t.map(e=>(0,G.jsx)(tc,{entry:e,mine:e.from===n},e.id))}),(0,G.jsx)(`div`,{role:`tablist`,className:`mt-3 flex gap-1.5 border-t-2 border-ink/15 pt-3`,children:$s.map(({tray:e,label:t})=>(0,G.jsx)(`button`,{role:`tab`,"aria-selected":i===e,onClick:()=>a(e),className:`rounded-lg border-2 border-ink px-2.5 py-1 text-sm font-bold ${i===e?`bg-ink text-paper`:`bg-paper`}`,children:t},e))}),(0,G.jsx)(`div`,{role:`tabpanel`,className:`mt-2`,children:i===`lines`?(0,G.jsx)(`div`,{className:`flex flex-wrap gap-1.5`,children:Oe.map(e=>(0,G.jsx)(`button`,{disabled:h,onClick:()=>g({text:e}),className:`brut-press rounded-full border-2 border-ink bg-white px-3 py-1.5 text-sm font-medium disabled:opacity-45`,children:e},e))}):(0,G.jsx)(`div`,{className:`flex flex-wrap justify-center gap-x-2 gap-y-3 py-1`,children:gt.map(t=>(0,G.jsx)(`button`,{"aria-label":`Kirim stiker ${he[t].text}`,disabled:h,onClick:()=>{g({sticker:t})&&e()},className:`brut-press rounded-lg px-0.5 py-1 disabled:opacity-45`,children:(0,G.jsx)(He,{sticker:t})},t))})}),(0,G.jsxs)(`form`,{onSubmit:e=>{e.preventDefault();let t=o.trim();t&&g({text:t})&&s(``)},className:`mt-3 flex gap-2`,children:[(0,G.jsx)(`input`,{value:o,onChange:e=>s(e.target.value),maxLength:120,enterKeyHint:`send`,autoComplete:`off`,placeholder:`Tulis pesan…`,"aria-label":`Tulis pesan`,className:`brut min-w-0 flex-1 rounded-lg bg-white px-3 py-2 text-base`}),(0,G.jsx)(V,{type:`submit`,size:`sm`,disabled:!o.trim()||h,children:`Kirim`})]}),h&&(0,G.jsx)(`p`,{role:`status`,className:`mt-2 text-sm font-medium text-merah`,children:`Pelan-pelan, Bos. Tunggu sebentar lagi.`})]})}function rc(){let e=F(e=>e.toast),t=F(e=>e.setOpen);return!e||!(`text`in e)?null:(0,G.jsxs)(`button`,{onClick:()=>t(!0),className:`pointer-events-auto absolute top-[max(3.25rem,calc(env(safe-area-inset-top)+2.75rem))] right-3 flex max-w-[min(18rem,calc(100vw-1.5rem))] animate-pop-in items-start gap-2 rounded-lg border-3 border-ink bg-paper px-2 py-1.5 text-left shadow-brut-sm`,children:[(0,G.jsx)(H,{pawn:e.pawn,size:24}),(0,G.jsxs)(`span`,{className:`line-clamp-2 text-sm`,children:[(0,G.jsxs)(`b`,{children:[e.name,`:`]}),` `,e.text]})]},e.id)}var ic=[`#FFD23F`,`#E5383B`,`#3FB56B`,`#2BB3A0`,`#8E5BD9`,`#FFF8E8`],ac=[`#E5383B`,`#1E88E5`],oc=`#161412`,sc=.32,cc=.985,lc=700,$=(e,t)=>e+Math.random()*(t-e),uc=e=>e[Math.floor(Math.random()*e.length)];function dc(e,t,n){return Array.from({length:70},()=>{let r=Math.random()<.3;return{x:e?$(-10,20):$(t-20,t+10),y:$(n*.75,n*.95),vx:(e?1:-1)*$(3,10)*Math.min(1,t/700+.4),vy:-$(11,19)*Math.min(1,n/800+.35),angle:$(0,Math.PI*2),spin:$(-.2,.2),flip:$(0,Math.PI*2),flipSpeed:$(.08,.22),w:r?22:$(6,10),h:r?11:$(10,16),color:uc(r?ac:ic),bill:r}})}function fc(e,t){return Array.from({length:28},()=>({x:$(0,e),y:$(-t*.6,-20),vx:$(-.6,.6),vy:$(.5,2),angle:$(0,Math.PI*2),spin:$(-.05,.05),flip:$(0,Math.PI*2),flipSpeed:$(.04,.1),w:26,h:13,color:uc(ac),bill:!0}))}function pc(e,t){e.save(),e.translate(t.x,t.y),e.rotate(t.angle),e.scale(1,Math.cos(t.flip)),e.fillStyle=t.color,e.fillRect(-t.w/2,-t.h/2,t.w,t.h),t.bill&&(e.strokeStyle=oc,e.lineWidth=1.5,e.strokeRect(-t.w/2,-t.h/2,t.w,t.h),e.fillStyle=`rgba(255, 248, 232, 0.85)`,e.beginPath(),e.arc(0,0,t.h*.28,0,Math.PI*2),e.fill()),e.restore()}function mc({delay:e=0,duration:t=4500}){let n=(0,U.useRef)(null);return(0,U.useEffect)(()=>{let r=n.current,i=r?.getContext(`2d`);if(!r||!i||matchMedia(`(prefers-reduced-motion: reduce)`).matches)return;let a=Math.min(devicePixelRatio,2),o=0,s=0,c=[],l=0,u=0,d=0,f=e=>{let n=Math.min(3,(e-d)/(1e3/60));d=e;let r=e-u;i.setTransform(a,0,0,a,0,0),i.clearRect(0,0,o,s),i.globalAlpha=Math.min(1,(t-r)/lc);for(let e of c){let t=e.bill?.965:cc;e.vy=(e.vy+sc*(e.bill?.45:1)*n)*t**n,e.vx*=t**n,e.x+=(e.vx+(e.bill?Math.sin(e.flip)*.8:0))*n,e.y+=e.vy*n,e.angle+=e.spin*n,e.flip+=e.flipSpeed*n,e.y<s+40&&pc(i,e)}c=c.filter(e=>e.y<s+40),r<t&&c.length>0?l=requestAnimationFrame(f):i.clearRect(0,0,o,s)},p=setTimeout(()=>{o=r.clientWidth,s=r.clientHeight,r.width=o*a,r.height=s*a,c=[...dc(!0,o,s),...dc(!1,o,s),...fc(o,s)],u=d=performance.now(),l=requestAnimationFrame(f)},e);return()=>{clearTimeout(p),cancelAnimationFrame(l)}},[e,t]),(0,G.jsx)(`canvas`,{ref:n,"aria-hidden":!0,className:`pointer-events-none absolute inset-0 size-full`})}var hc={rent:`sewa`,tax:`pajak tahunan`,toll:`tol`,parking:`parkir liar`,fine:`denda`,card:`gara-gara kartu`,pungli:`pungli`,collect:`tagihan utang yang telat`};function gc(e,t){let n=e.tileOverrides[t.tile]?kt(t.tile):wt(t.tile),r=e.players[t.to]?` ke ${B(e,t.to)}`:``;return`Bayar ${hc[t.reason]??`denda`} ${z(t.amount)}${r} di ${n}, ronde ${t.round}.`}function _c(e,t){let n=null;for(let[r,i]of Object.entries(e))t(i)>(n?.value??0)&&(n={id:r,value:t(i)});return n}function vc({title:e,game:t,playerId:n,delay:r,children:i}){let a=t.players[n];return(0,G.jsxs)(`li`,{style:{animationDelay:`${r}ms`},className:`animate-rise rounded-lg border-3 border-ink bg-white p-2.5`,children:[(0,G.jsx)(`p`,{className:`text-xs font-bold text-muted`,children:e}),(0,G.jsxs)(`p`,{className:`mt-1 flex items-center gap-2 font-bold`,children:[a&&(0,G.jsx)(H,{pawn:a.pawn,size:24}),B(t,n)]}),(0,G.jsx)(`p`,{className:`mt-1 text-sm`,children:i})]})}var yc=300,bc=700,xc=970,Sc=1100,Cc=120,wc=()=>matchMedia(`(prefers-reduced-motion: reduce)`).matches;function Tc(e,t,n=1400){let[r,i]=(0,U.useState)(()=>wc()?e:0);return(0,U.useEffect)(()=>{if(wc())return;let r=0,a=performance.now()+t,o=t=>{let s=Math.min(1,Math.max(0,(t-a)/n));i(Math.round(e*(1-(1-s)**3))),s<1&&(r=requestAnimationFrame(o))};return r=requestAnimationFrame(o),()=>cancelAnimationFrame(r)},[e,t,n]),r}function Ec({className:e}){return(0,G.jsx)(`svg`,{viewBox:`0 0 32 20`,"aria-hidden":!0,className:e,children:(0,G.jsx)(`path`,{d:`M2 18 4 5l7 6 5-9 5 9 7-6 2 13Z`,fill:`var(--color-sun)`,stroke:`var(--color-ink)`,strokeWidth:`2.5`,strokeLinejoin:`round`})})}var Dc=e=>({animationDelay:`${e}ms`});function Oc({game:e}){let t=L(e=>e.start),n=L(e=>e.quit),r=L(e=>e.lastSetup),i=L(e=>e.stats),o=L(e=>e.seat!==null),s=(0,U.useRef)(null),c=(0,U.useRef)(null),l=(0,U.useId)(),u=Tc(e.stateTreasury,yc);hs(`selesai`),(0,U.useEffect)(()=>{s.current?.showModal(),c.current?.focus()},[]),(0,U.useEffect)(()=>{let e=(e,t)=>setTimeout(t,e),t=[...wc()?[]:[e(yc,()=>a(`kas-hitung`))],e(xc,()=>a(`stempel-menang`)),e(1030,()=>a(`konfeti`))];return()=>t.forEach(clearTimeout)},[]);let f=_c(i,e=>e.paidToState),p=_c(i,e=>e.rentReceived),m=_c(i,e=>e.jailed),h=_c(i,e=>e.worst?.amount??0),g=h&&i[h.id]?.worst,_=e.settings.mode===`rounds`,v=Sc+e.ranking.length*Cc+200,y=0,b=()=>v+y++*90;return(0,gs.createPortal)((0,G.jsxs)(`dialog`,{ref:s,onCancel:e=>e.preventDefault(),"aria-labelledby":l,className:`pointer-events-auto m-0 h-dvh max-h-none w-full max-w-none overflow-hidden bg-transparent p-0 text-ink backdrop:bg-ink/70`,children:[(0,G.jsx)(`div`,{className:`grid size-full place-items-center p-3 pt-[max(0.75rem,env(safe-area-inset-top))] pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:p-6`,children:(0,G.jsx)(`div`,{className:`flex max-h-full w-full max-w-xl animate-pop-in flex-col`,children:(0,G.jsxs)(`div`,{style:Dc(xc),className:`flex min-h-0 animate-impact flex-col overflow-hidden rounded-xl border-3 border-ink bg-paper shadow-brut-lg`,children:[(0,G.jsxs)(`div`,{className:`overflow-y-auto overscroll-contain p-4 sm:p-5`,children:[(0,G.jsx)(`h2`,{ref:c,id:l,tabIndex:-1,className:`font-display text-3xl leading-none outline-none sm:text-4xl`,children:`Permainan selesai`}),(0,G.jsx)(`p`,{className:`mt-1.5 text-sm text-muted`,children:_?`Mode Ronde, ${e.settings.maxRounds} ronde.`:`Survival, berakhir di ronde ${e.round}.`}),(0,G.jsxs)(`section`,{className:`relative mt-4 overflow-hidden rounded-xl border-3 border-ink bg-merah p-4 pt-6 text-paper shadow-brut`,children:[(0,G.jsx)(`div`,{"aria-hidden":!0,className:`absolute top-1/2 left-12 size-[48rem] -translate-1/2 animate-rays bg-[repeating-conic-gradient(var(--color-sun)_0deg_8deg,transparent_8deg_20deg)] opacity-25`}),(0,G.jsxs)(`div`,{className:`relative flex items-center gap-4 pr-24 sm:pr-32`,children:[(0,G.jsxs)(`span`,{className:`relative grid size-16 shrink-0 place-items-center rounded-lg border-3 border-ink bg-ink font-display text-2xl text-sun`,children:[`Rp`,(0,G.jsx)(Ec,{className:`absolute -top-5 left-1/2 w-10 -translate-x-1/2 -rotate-6`})]}),(0,G.jsxs)(`span`,{className:`min-w-0 leading-tight`,children:[(0,G.jsx)(`span`,{className:`block text-xs font-bold tracking-wide uppercase`,children:`Juara 1`}),(0,G.jsx)(`span`,{className:`block font-display text-3xl`,children:`Negara`}),(0,G.jsxs)(`span`,{className:`mt-0.5 block text-sm`,children:[`Kas Negara`,` `,(0,G.jsx)(`b`,{className:`tabular-nums`,children:z(u)})]})]})]}),(0,G.jsxs)(`p`,{style:Dc(bc),className:`absolute top-1/2 right-3 -translate-y-1/2 animate-slam rounded-md border-[5px] border-double border-sun px-2 py-1 text-center font-display text-sm leading-tight text-sun uppercase sm:text-lg`,children:[`Menang`,(0,G.jsx)(`br`,{}),`lagi`]})]}),(0,G.jsx)(`ol`,{className:`mt-3 space-y-2`,children:e.ranking.map((t,n)=>{let r=e.players[t];return(0,G.jsxs)(`li`,{style:Dc(Sc+n*Cc),className:`flex animate-rise items-center gap-3 rounded-lg border-3 border-ink p-2 ${n===0?`bg-sun shadow-brut-sm`:`bg-white`}`,children:[(0,G.jsx)(`span`,{className:`w-6 text-center font-display text-xl`,children:n+2}),(0,G.jsx)(H,{pawn:r.pawn,size:40,className:r.bankrupt?`grayscale`:``}),(0,G.jsxs)(`span`,{className:`min-w-0 flex-1 leading-tight`,children:[(0,G.jsx)(`span`,{className:`block truncate font-bold`,children:r.name}),(0,G.jsx)(`span`,{className:`text-sm`,children:r.bankrupt?r.bankruptRound?`Bangkrut di ronde ${r.bankruptRound}`:`Bangkrut`:`Bertahan, kekayaan bersih ${z(at(e,t))}`})]})]},t)})}),(f||p||m||g)&&(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(`h3`,{style:Dc(v),className:`mt-6 animate-rise font-display text-lg`,children:`Catatan permainan`}),(0,G.jsxs)(`ul`,{className:`mt-2 grid gap-2 sm:grid-cols-2`,children:[h&&g&&(0,G.jsx)(vc,{title:`Momen paling apes`,game:e,playerId:h.id,delay:b(),children:gc(e,g)}),f&&(0,G.jsxs)(vc,{title:`Penyumbang terbesar Negara`,game:e,playerId:f.id,delay:b(),children:[z(f.value),` masuk ke Kas Negara.`]}),p&&(0,G.jsxs)(vc,{title:`Juragan sewa`,game:e,playerId:p.id,delay:b(),children:[`Terima sewa `,z(p.value),`.`]}),m&&(0,G.jsxs)(vc,{title:`Langganan Lapas`,game:e,playerId:m.id,delay:b(),children:[m.value,` kali masuk Lapas.`]})]})]})]}),(0,G.jsx)(`div`,{className:`border-t-3 border-ink bg-paper p-4`,children:o?(0,G.jsx)(kc,{}):(0,G.jsxs)(Q,{children:[(0,G.jsx)(V,{variant:`secondary`,onClick:n,children:`Setup baru`}),r&&(0,G.jsx)(V,{onClick:()=>t(r),children:`Main lagi`})]})})]})})}),(0,G.jsx)(mc,{delay:xc})]}),document.body)}function kc(){let e=r(),t=I(e=>e.me!==null&&e.me===e.lobby?.hostId),n=I(e=>(e.lobby?.players.length??0)>=2),i=I(e=>e.send),a=I(e=>e.leave);return(0,G.jsxs)(G.Fragment,{children:[(!t||!n)&&(0,G.jsx)(`p`,{className:`mb-2 text-sm font-bold`,children:t?`Main lagi butuh minimal 2 pemain di room.`:`Menunggu host memulai lagi…`}),(0,G.jsxs)(Q,{children:[(0,G.jsx)(V,{variant:`secondary`,onClick:async()=>{await a(),e(`/`)},children:`Keluar`}),t&&(0,G.jsx)(V,{disabled:!n,onClick:()=>i(`start`),children:`Main lagi`})]})]})}var Ac=28;function jc(){let e=(0,U.useRef)(null),[t,n]=(0,U.useState)({start:!0,end:!0});(0,U.useEffect)(()=>{let t=e.current;if(!t)return;let r=0,i=0,a=!1,o=!1,s=()=>n({start:t.scrollLeft<=1,end:t.scrollLeft+t.clientWidth>=t.scrollWidth-1}),c=e=>{e.pointerType===`mouse`&&e.button===0&&(a=!0,o=!1,r=e.clientX,i=t.scrollLeft)},l=e=>{if(!a)return;let n=e.clientX-r;Math.abs(n)>4&&(o=!0),o&&(t.scrollLeft=i-n,t.style.cursor=`grabbing`)},u=()=>{a=!1,t.style.cursor=``},d=e=>{o&&=(e.stopPropagation(),e.preventDefault(),!1)},f=e=>{t.scrollWidth<=t.clientWidth||Math.abs(e.deltaY)<=Math.abs(e.deltaX)||(t.scrollLeft+=e.deltaY,e.preventDefault())};s();let p=new ResizeObserver(s);return p.observe(t),t.addEventListener(`scroll`,s,{passive:!0}),t.addEventListener(`pointerdown`,c),t.addEventListener(`click`,d,!0),t.addEventListener(`wheel`,f,{passive:!1}),window.addEventListener(`pointermove`,l),window.addEventListener(`pointerup`,u),()=>{p.disconnect(),t.removeEventListener(`scroll`,s),t.removeEventListener(`pointerdown`,c),t.removeEventListener(`click`,d,!0),t.removeEventListener(`wheel`,f),window.removeEventListener(`pointermove`,l),window.removeEventListener(`pointerup`,u)}},[]);let r=!t.start&&!t.end?`linear-gradient(to right, transparent, black ${Ac}px, black calc(100% - ${Ac}px), transparent)`:t.end?t.start?void 0:`linear-gradient(to right, transparent, black ${Ac}px)`:`linear-gradient(to right, black calc(100% - ${Ac}px), transparent)`;return{ref:e,scrollable:!(t.start&&t.end),style:{maskImage:r,WebkitMaskImage:r}}}function Mc({floats:e,onDone:t}){return e.length===0?null:(0,G.jsx)(`div`,{"aria-hidden":!0,className:`pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 z-30 flex flex-col items-end gap-1.5`,children:e.map(e=>(0,G.jsxs)(`div`,{onAnimationEnd:()=>t(e.key),className:`animate-money-float flex items-center gap-1 rounded-xl px-2.5 py-1 text-xs sm:text-sm font-black tracking-tight whitespace-nowrap tabular-nums shadow-lg border ${e.amount>0?`bg-emerald-600 text-white border-emerald-400/80 shadow-emerald-600/40`:`bg-rose-600 text-white border-rose-400/80 shadow-rose-600/40`}`,children:[(0,G.jsx)(`span`,{className:`text-xs font-black`,children:e.amount>0?`+`:`−`}),z(Math.abs(e.amount))]},e.key))})}var Nc=[{tab:`give`,label:`Kasih duit`},{tab:`ask`,label:`Minta duit`},{tab:`trade`,label:`Tukar tanah`},{tab:`redeem`,label:`Tebus gadai`},{tab:`repay`,label:`Bayar utang`}],Pc=(e,t)=>Object.entries(e.properties).filter(([,e])=>e.owner===t).map(([e])=>Number(e));function Fc({game:e,onClose:t}){let[n,r]=(0,U.useState)(`give`),{ref:i,style:a,scrollable:o}=jc(),s=e.players[e.currentPlayer];return(0,G.jsxs)(X,{title:`Aksi lain`,onClose:t,children:[(0,G.jsx)(`div`,{ref:i,role:`tablist`,style:a,className:`-mx-1 flex gap-1.5 overflow-x-auto overscroll-x-contain px-1 pb-2 select-none [scrollbar-width:none] ${o?`cursor-grab`:``}`,children:Nc.map(({tab:e,label:t})=>(0,G.jsx)(`button`,{type:`button`,role:`tab`,"aria-selected":n===e,onClick:t=>{r(e),t.currentTarget.scrollIntoView({behavior:`smooth`,block:`nearest`,inline:`nearest`})},className:`shrink-0 rounded-md border-2 border-ink px-2.5 py-1.5 text-sm font-bold ${n===e?`bg-ink text-sun`:`bg-white`}`,children:t},e))}),(0,G.jsxs)(`div`,{className:`mt-3`,children:[(n===`give`||n===`ask`)&&(0,G.jsx)(Lc,{game:e,me:s,mode:n,onDone:t},n),n===`trade`&&(0,G.jsx)(zc,{game:e,me:s,onDone:t}),n===`redeem`&&(0,G.jsx)(Bc,{game:e,me:s}),n===`repay`&&(0,G.jsx)(Vc,{game:e,me:s})]})]})}function Ic({game:e,me:t,value:n,onChange:r}){let i=e.turnOrder.map(t=>e.players[t]).filter(e=>e.id!==t.id&&!e.bankrupt);return(0,G.jsxs)(`fieldset`,{children:[(0,G.jsx)(`legend`,{className:`mb-2 text-sm font-bold`,children:`Ke siapa`}),(0,G.jsx)(`div`,{className:`grid grid-cols-2 gap-2`,children:i.map(e=>(0,G.jsxs)(`button`,{type:`button`,"aria-pressed":n===e.id,onClick:()=>r(e.id),className:`flex items-center gap-2 rounded-lg border-3 border-ink p-1.5 text-left ${n===e.id?`bg-sun shadow-brut-sm`:`bg-white`}`,children:[(0,G.jsx)(H,{pawn:e.pawn,size:32}),(0,G.jsxs)(`span`,{className:`min-w-0 leading-tight`,children:[(0,G.jsx)(`span`,{className:`block truncate text-sm font-bold`,children:e.name}),(0,G.jsx)(`span`,{className:`text-xs`,children:z(e.cash)})]})]},e.id))})]})}function Lc({game:e,me:t,mode:n,onDone:r}){let i=L(e=>e.act),[a,o]=(0,U.useState)(null),[s,c]=(0,U.useState)(1e5),l=a?e.players[a]:void 0,u=n===`give`?t.cash:l?.cash??0,d=e.moneyRequests.some(e=>e.to===a);return(0,G.jsxs)(`div`,{className:`space-y-4`,children:[(0,G.jsx)(Z,{children:n===`give`?`Uang langsung berpindah. Tidak bisa ditarik lagi.`:`Pemain itu bisa mengabulkan atau menolak. Permintaan hangus saat giliranmu selesai.`}),(0,G.jsx)(Ic,{game:e,me:t,value:a,onChange:o}),(0,G.jsx)(vs,{label:`Jumlah`,value:Math.min(s,Math.max(u,0)),onChange:c,min:1e5,max:Math.max(u,1e5)}),(0,G.jsx)(V,{className:`w-full`,disabled:!a||s>u||d,onClick:()=>{a&&i(t.id,{type:n===`give`?`TRANSFER`:`REQUEST_MONEY`,to:a,amount:s})&&r()},children:d?`Masih ada permintaan ke pemain ini`:n===`give`?`Kasih ${z(s)}`:`Minta ${z(s)}`})]})}function Rc({game:e,tiles:t,picked:n,onToggle:r,empty:i}){return t.length===0?(0,G.jsx)(`p`,{className:`text-xs text-muted`,children:i}):(0,G.jsx)(`ul`,{className:`space-y-1.5`,children:t.map(t=>(0,G.jsx)(`li`,{children:(0,G.jsxs)(`label`,{className:`flex cursor-pointer items-center gap-2 rounded-lg border-2 border-ink p-1.5 ${n.includes(t)?`bg-sun`:`bg-white`}`,children:[(0,G.jsx)(`input`,{type:`checkbox`,className:`size-4 accent-ink`,checked:n.includes(t),onChange:()=>r(t)}),(0,G.jsx)(ys,{game:e,tile:t})]})},t))})}function zc({game:e,me:t,onDone:n}){let r=L(e=>e.act),[i,a]=(0,U.useState)(null),[o,s]=(0,U.useState)([]),[c,l]=(0,U.useState)([]),[u,d]=(0,U.useState)(0),[f,p]=(0,U.useState)(0),m=i?e.players[i]:void 0,h=e=>t=>e(e=>e.includes(t)?e.filter(e=>e!==t):[...e,t]);return(0,G.jsxs)(`div`,{className:`space-y-4`,children:[(0,G.jsx)(Z,{children:`Tawarkan tanah dan uang. Bangunannya ikut pindah. Tawaran hangus saat giliranmu selesai.`}),(0,G.jsx)(Ic,{game:e,me:t,value:i,onChange:e=>{a(e),l([]),p(0)}}),(0,G.jsxs)(`section`,{className:`space-y-2`,children:[(0,G.jsx)(`h3`,{className:`text-sm font-bold`,children:`Kamu kasih`}),(0,G.jsx)(Rc,{game:e,tiles:Pc(e,t.id),picked:o,onToggle:h(s),empty:`Kamu belum punya tanah.`}),(0,G.jsx)(vs,{label:`Plus uang`,value:u,onChange:d,max:Math.max(0,t.cash)})]}),m&&(0,G.jsxs)(`section`,{className:`space-y-2`,children:[(0,G.jsxs)(`h3`,{className:`text-sm font-bold`,children:[`Kamu minta dari `,m.name]}),(0,G.jsx)(Rc,{game:e,tiles:Pc(e,m.id),picked:c,onToggle:h(l),empty:`${m.name} belum punya tanah.`}),(0,G.jsx)(vs,{label:`Plus uang`,value:f,onChange:p,max:Math.max(0,m.cash)})]}),(0,G.jsx)(V,{className:`w-full`,disabled:!i||o.length+c.length===0,onClick:()=>{i&&r(t.id,{type:`TRADE_PROPOSE`,to:i,give:{tiles:o,cash:u},get:{tiles:c,cash:f}})&&n()},children:`Kirim tawaran`})]})}function Bc({game:e,me:t}){let n=L(e=>e.act),r=Pc(e,t.id).filter(t=>e.properties[t].mortgaged);return r.length===0?(0,G.jsx)(Z,{children:`Tidak ada tanahmu yang sedang digadai.`}):(0,G.jsx)(`ul`,{className:`space-y-2`,children:r.map(r=>{let i=Math.floor(tt(r).price*nt);return(0,G.jsxs)(`li`,{className:`flex items-center gap-2`,children:[(0,G.jsx)(ys,{game:e,tile:r}),(0,G.jsxs)(V,{variant:`secondary`,size:`sm`,className:`shrink-0`,disabled:t.cash<i,onClick:()=>n(t.id,{type:`REDEEM`,tile:r}),children:[`Tebus `,z(i)]})]},r)})})}function Vc({game:e,me:t}){let n=L(e=>e.act),r=e.loans.filter(e=>e.borrower===t.id);return r.length===0?(0,G.jsx)(Z,{children:`Kamu tidak punya utang.`}):(0,G.jsx)(`ul`,{className:`space-y-3`,children:r.map(r=>{let i=Math.min(r.owed,t.cash);return(0,G.jsxs)(`li`,{className:`space-y-2 rounded-lg border-3 border-ink bg-white p-2`,children:[(0,G.jsxs)(`p`,{className:`text-sm`,children:[`Utang ke `,(0,G.jsx)(`b`,{children:B(e,r.lender)}),`:`,` `,(0,G.jsx)(`b`,{children:z(r.owed)}),r.turnsLeft>0?`, jatuh tempo ${r.turnsLeft} giliran lagi`:`, jatuh tempo giliran ini`]}),(0,G.jsx)(V,{variant:`secondary`,className:`w-full`,disabled:i<=0,onClick:()=>n(t.id,{type:`REPAY_LOAN`,loanId:r.id,amount:i}),children:i>=r.owed?`Lunasi ${z(r.owed)}`:`Cicil ${z(i)}`})]},r.id)})})}var{bail:Hc}=ft.tile_rules.jail,Uc=`brut-press rounded-md border-2 border-ink px-1 py-1.5 text-[0.7rem] leading-tight font-bold text-balance disabled:opacity-40`;function Wc({game:e,player:t,className:n=``}){
  let r=L(e=>e.act),
      i=e=>r(t.id,e),
      [a,o]=(0,U.useState)(!1),
      s=t.jailTurns!==null;
  return (0,G.jsxs)(`div`,{
    className:`grid grid-cols-2 gap-1.5 ${n}`,
    children:[
      (0,G.jsxs)(`button`,{
        type:`button`,
        className:`flex items-center justify-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-[11px] font-black tracking-wide shadow-xs transition active:scale-95 cursor-pointer`,
        onClick:()=>o(!0),
        children:[
          (0,G.jsx)(`svg`,{className:`size-3 shrink-0`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.5`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,G.jsx)(`circle`,{cx:`12`,cy:`12`,r:`1`}),(0,G.jsx)(`circle`,{cx:`19`,cy:`12`,r:`1`}),(0,G.jsx)(`circle`,{cx:`5`,cy:`12`,r:`1`})]}),
          `Aksi Lain`
        ]
      }),
      s&&(0,G.jsxs)(`button`,{
        type:`button`,
        className:`flex items-center justify-center gap-1 px-2 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-700 text-white text-[11px] font-black tracking-wide shadow-xs transition active:scale-95 cursor-pointer disabled:opacity-50`,
        disabled:t.cash<Hc,
        onClick:()=>i({type:`PAY_BAIL`}),
        children:[`Tebus `,z(Hc)]
      }),
      s&&t.keepCards.includes(`orang-dalam`)&&(0,G.jsx)(`button`,{
        type:`button`,
        className:`flex items-center justify-center gap-1 px-2 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 text-[11px] font-black tracking-wide shadow-xs transition active:scale-95 cursor-pointer`,
        onClick:()=>i({type:`USE_KEEP_CARD`,cardId:`orang-dalam`}),
        children:`Orang Dalam`
      }),
      a&&(0,G.jsx)(Fc,{game:e,onClose:()=>o(!1)})
    ]
  });
}function Gc(e){let t={state:e.stateTreasury};for(let n of Object.values(e.players))t[n.id]=n.cash;return t}function Kc(e){let[t,n]=(0,U.useState)(e),[r,i]=(0,U.useState)({next:1,list:[]});if(e!==t){n(e);let r=e.round<t.round||e.turnOrder.join()!==t.turnOrder.join(),a=Gc(t),o=Gc(e),s=r?[]:Object.keys(o).filter(e=>a[e]!==void 0&&o[e]!==a[e]);s.length>0&&i(e=>({next:e.next+s.length,list:[...e.list,...s.map((t,n)=>({key:e.next+n,owner:t,amount:o[t]-a[t]}))]}))}let o=(0,U.useRef)(r.next);return(0,U.useEffect)(()=>{let e=r.list.filter(e=>e.key>=o.current&&e.owner!==`state`);o.current=r.next,e.some(e=>e.amount>0)&&a(`uang-masuk`),e.some(e=>e.amount<0)&&a(`uang-keluar`)},[r]),{of:e=>r.list.filter(t=>t.owner===e),done:e=>i(t=>({...t,list:t.list.filter(t=>t.key!==e)}))}}var qc=`rounded px-1 text-[0.65rem] font-bold`;function Jc({game:e,idle:t}){
  let n=(0,U.useRef)(null),
      r=L(e=>e.seat),
      i=I(e=>e.lobby),
      a=Kc(e),
      {ref:o,style:s}=jc();

  (0,U.useEffect)(()=>{
    n.current?.scrollIntoView({block:`nearest`,inline:`nearest`})
  },[e.currentPlayer]);

  let PAWN_PALETTE = {
    ojol: {
      bg: `#eff6ff`,
      border: `#93c5fd`,
      accentBg: `#2563eb`,
      subText: `#1e40af`,
      badgeBg: `#dbeafe`,
      glow: `rgba(37, 99, 235, 0.45)`
    },
    emak: {
      bg: `#fff1f2`,
      border: `#fda4af`,
      accentBg: `#e11d48`,
      subText: `#9f1239`,
      badgeBg: `#ffe4e6`,
      glow: `rgba(225, 29, 72, 0.45)`
    },
    jukir: {
      bg: `#f0fdf4`,
      border: `#86efac`,
      accentBg: `#16a34a`,
      subText: `#166534`,
      badgeBg: `#dcfce7`,
      glow: `rgba(22, 163, 74, 0.45)`
    },
    rt: {
      bg: `#fefce8`,
      border: `#fde047`,
      accentBg: `#ca8a04`,
      subText: `#854d0e`,
      badgeBg: `#fef9c3`,
      glow: `rgba(202, 138, 4, 0.45)`
    },
    pejabat: {
      bg: `#faf5ff`,
      border: `#d8b4fe`,
      accentBg: `#9333ea`,
      subText: `#6b21a8`,
      badgeBg: `#f3e8ff`,
      glow: `rgba(147, 51, 234, 0.45)`
    },
    sultan: {
      bg: `#fff7ed`,
      border: `#fdba74`,
      accentBg: `#ea580c`,
      subText: `#9a3412`,
      badgeBg: `#ffedd5`,
      glow: `rgba(234, 88, 12, 0.45)`
    },
    'debt-collector': {
      bg: `#ecfeff`,
      border: `#67e8f9`,
      accentBg: `#0891b2`,
      subText: `#155e75`,
      badgeBg: `#cffafe`,
      glow: `rgba(8, 145, 178, 0.45)`
    },
    selebgram: {
      bg: `#fdf2f8`,
      border: `#f472b6`,
      accentBg: `#db2777`,
      subText: `#9d174d`,
      badgeBg: `#fce7f3`,
      glow: `rgba(219, 39, 119, 0.45)`
    }
  };

  return (0,G.jsx)(`ol`,{
    ref:o,
    style:s,
    className:`pointer-events-none flex gap-3 [scrollbar-width:none] max-sm:-mx-3 max-sm:overflow-x-auto max-sm:px-3 max-sm:pt-2 max-sm:pb-9 sm:max-h-[calc(100dvh-15rem)] sm:w-max sm:flex-col sm:overflow-y-auto sm:pr-8 sm:pb-2`,
    children:e.turnOrder.map(o=>{
      let s=e.players[o],
          c=o===e.currentPlayer&&e.phase!==`game_over`,
          lobbyP=i?.players.find(e=>e.id===o),
          awayTag=!i||s.bankrupt?null:lobbyP?lobbyP.connected?null:`Terputus`:`Keluar`,
          cityCount=Object.values(e.properties).filter(p=>p.owner===s.id).length,
          pawnInfo=l(s.pawn),
          pal=PAWN_PALETTE[s.pawn]||{
            bg:`#f8fafc`,
            border:`#cbd5e1`,
            accentBg:pawnInfo?.color||`#2563eb`,
            subText:`#1e293b`,
            badgeBg:`#e2e8f0`,
            glow:`rgba(37, 99, 235, 0.45)`
          };

      return (0,G.jsxs)(`li`,{
        ref:c?n:void 0,
        "aria-current":c?`true`:void 0,
        style:{
          backgroundColor:pal.bg,
          borderLeft:`6px solid ${pal.accentBg}`,
          borderTop:`2px solid ${c?pal.accentBg:pal.border}`,
          borderRight:`2px solid ${c?pal.accentBg:pal.border}`,
          borderBottom:`2px solid ${c?pal.accentBg:pal.border}`,
          boxShadow:c?`0 14px 30px -4px ${pal.glow}, 0 0 0 2px ${pal.accentBg}`:`0 4px 14px -2px rgba(15, 23, 42, 0.09)`
        },
        className:`pointer-events-auto relative shrink-0 self-start rounded-2xl p-3 transition-all sm:w-64 overflow-visible ${c?`active-player-glow sm:translate-x-1`:``} ${s.bankrupt?`opacity-50`:``}`,
        children:[
          /* Active Turn Ribbon (Solid Vibrant Character Color) */
          c&&(0,G.jsxs)(`div`,{
            className:`flex items-center justify-between mb-2 pb-1.5 border-b border-black/10`,
            children:[
              (0,G.jsxs)(`span`,{
                style:{backgroundColor:pal.accentBg},
                className:`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md shadow-xs`,
                children:[
                  (0,G.jsx)(`span`,{className:`w-2 h-2 rounded-full bg-white animate-ping shrink-0`}),
                  (0,G.jsx)(`strong`,{className:`text-white text-[10px] font-black uppercase tracking-wider`,children:`Sedang Jalan`})
                ]
              }),
              o===r&&(0,G.jsx)(`span`,{
                className:`text-[10px] font-black text-slate-900 bg-white border border-slate-300 px-2 py-0.5 rounded-md uppercase shadow-xs`,
                children:`Kamu`
              })
            ]
          }),
          /* Main Info Row: Avatar + Name + Cash */
          (0,G.jsxs)(`div`,{
            className:`flex items-center gap-2.5`,
            children:[
              (0,G.jsx)(`div`,{
                className:`w-11 h-11 rounded-xl p-0.5 shrink-0 flex items-center justify-center overflow-hidden shadow-xs`,
                style:{backgroundColor:pal.badgeBg,border:`2px solid ${pal.accentBg}`},
                children:(0,G.jsx)(H,{pawn:s.pawn,size:38})
              }),
              (0,G.jsxs)(`div`,{
                className:`min-w-0 flex-1 leading-tight`,
                children:[
                  (0,G.jsxs)(`div`,{
                    className:`flex items-center justify-between gap-1`,
                    children:[
                      (0,G.jsx)(`h3`,{className:`truncate text-xs sm:text-sm font-black text-slate-950`,children:s.name}),
                      !c&&o===r&&(0,G.jsx)(`span`,{className:`text-[9px] font-black text-slate-900 bg-white border border-slate-300 px-1 rounded uppercase`,children:`Kamu`})
                    ]
                  }),
                  (0,G.jsx)(`div`,{
                    className:`text-[10px] font-black uppercase tracking-wide mt-0.5`,
                    style:{color:pal.subText},
                    children:pawnInfo?.name||s.name
                  }),
                  (0,G.jsx)(`div`,{
                    className:`text-base sm:text-lg font-black text-slate-950 tabular-nums tracking-tight mt-0.5`,
                    children:z(s.cash)
                  })
                ]
              })
            ]
          }),
          /* Micro-stats / Asset Bar: Kota Count + Lapas/Away + Timer */
          (0,G.jsxs)(`div`,{
            className:`mt-2 pt-2 border-t border-black/10 flex items-center justify-between text-[11px] font-bold`,
            children:[
              (0,G.jsxs)(`span`,{
                className:`bg-white/95 text-slate-900 px-2 py-0.5 rounded-md border border-slate-300 flex items-center gap-1 shadow-xs`,
                children:[
                  (0,G.jsxs)(`svg`,{className:`size-3 text-slate-600 shrink-0`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,G.jsx)(`path`,{d:`m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z`}),(0,G.jsx)(`polyline`,{points:`9 22 9 12 15 12 15 22`})]}),
                  `${cityCount} Kota`
                ]
              }),
              awayTag&&(0,G.jsx)(`span`,{className:`text-[10px] font-black px-1.5 py-0.5 rounded bg-rose-600 text-white uppercase shadow-xs`,children:awayTag}),
              s.jailTurns!==null&&(0,G.jsx)(`span`,{className:`text-[10px] font-black px-1.5 py-0.5 rounded bg-slate-900 text-white uppercase shadow-xs`,children:`Lapas`}),
              s.bankrupt&&(0,G.jsx)(`span`,{className:`text-[10px] font-black px-1.5 py-0.5 rounded bg-rose-600 text-white uppercase shadow-xs`,children:`Bangkrut`}),
              c&&i&&(0,G.jsx)(Yc,{mine:o===r})
            ]
          }),
          /* In-turn Pre-roll Actions */
          c&&t&&e.phase===`pre_roll`&&(0,G.jsx)(Wc,{game:e,player:s,className:`mt-2`}),
          /* Floating transaction number */
          (0,G.jsx)(Mc,{floats:a.of(o),onDone:a.done})
        ]
      },o);
    })
  });
}function Yc({mine:e}){let t=I(e=>e.lobby),n=I(e=>e.offset),[,r]=(0,U.useState)(0);(0,U.useEffect)(()=>{let e=setInterval(()=>r(e=>e+1),500);return()=>clearInterval(e)},[]);let i=ht(t,n);if(hs(e&&i!==null&&i>0&&i<=10?`waktu`:null,t?.deadline),u(e&&i!==null&&i>0&&i<=10?`timer-detak`:null,`${t?.deadline}:${i}`),u(e&&i===0?`timer-habis`:null,t?.deadline),i===null)return null;let a=i<=15;return(0,G.jsxs)(`div`,{className:`mt-1 flex items-center gap-1.5 pl-1`,"aria-hidden":!0,children:[(0,G.jsx)(`span`,{className:`h-1.5 flex-1 overflow-hidden rounded-full border border-ink bg-paper`,children:(0,G.jsx)(`span`,{className:`block h-full transition-[width] duration-500 ease-linear ${a?`bg-merah`:`bg-ink`}`,style:{width:`${Math.min(1,i/60)*100}%`}})}),a&&(0,G.jsx)(`span`,{className:`text-xs font-bold text-merah tabular-nums`,children:i})]})}function Xc({player:e,away:t}){return e.bankrupt?(0,G.jsx)(`p`,{className:`text-[0.65rem] font-bold text-merah sm:text-xs`,children:`Bangkrut`}):(0,G.jsxs)(`p`,{className:`flex items-center gap-x-1 text-xs whitespace-nowrap tabular-nums sm:flex-wrap sm:gap-x-1.5 sm:text-sm`,children:[(0,G.jsx)(`span`,{className:e.cash<0?`font-bold text-merah`:``,children:z(e.cash)}),t&&(0,G.jsx)(`span`,{className:`${qc} bg-merah text-paper`,children:t}),e.jailTurns!==null&&(0,G.jsx)(`span`,{className:`${qc} bg-ink text-paper`,children:`Lapas`}),e.keepCards.length>0&&(0,G.jsxs)(`span`,{className:`${qc} bg-simpanan text-paper`,title:`Kartu Simpanan: ${e.keepCards.length}`,children:[e.keepCards.length,(0,G.jsx)(`span`,{className:`max-sm:sr-only`,children:` Simpanan`})]})]})}var Zc=e=>[...e.tiles.map(wt),e.cash>0&&z(e.cash)].filter(Boolean).join(`, `)||`tidak ada`;function Qc({game:e,to:t}){let n=e.players[t];return(0,G.jsxs)(`p`,{className:`mb-3 flex items-center gap-2 rounded-lg border-3 border-ink bg-sun p-2 text-sm font-bold`,children:[(0,G.jsx)(H,{pawn:n.pawn,size:32}),`Giliran `,n.name,` menjawab`]})}function $c({game:e}){let t=L(e=>e.act),n=L(e=>e.seat),r=e=>n===null||n===e,i=e.moneyRequests.find(e=>r(e.to)),a=e.trade&&r(e.trade.to)?e.trade:null,o=n===null;if(i){let n=e.players[i.to];return(0,G.jsxs)(X,{title:`Permintaan uang`,onClose:()=>{},closable:!1,children:[o&&(0,G.jsx)(Qc,{game:e,to:i.to}),(0,G.jsxs)(`p`,{className:`text-sm`,children:[(0,G.jsx)(`b`,{children:B(e,i.from)}),` minta`,` `,(0,G.jsx)(`b`,{children:z(i.amount)}),` ke kamu. Kasmu`,` `,z(n.cash),`.`]}),(0,G.jsx)(`div`,{className:`mt-4`,children:(0,G.jsxs)(Q,{children:[(0,G.jsx)(V,{variant:`secondary`,onClick:()=>t(i.to,{type:`RESPOND_MONEY_REQUEST`,requestId:i.id,accept:!1}),children:`Tolak`}),(0,G.jsxs)(V,{disabled:n.cash<i.amount,onClick:()=>t(i.to,{type:`RESPOND_MONEY_REQUEST`,requestId:i.id,accept:!0}),children:[`Kasih `,z(i.amount)]})]})})]},`request-${i.id}`)}return a?(0,G.jsxs)(X,{title:`Tawaran tukar tanah`,onClose:()=>{},closable:!1,children:[o&&(0,G.jsx)(Qc,{game:e,to:a.to}),(0,G.jsxs)(`dl`,{className:`grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 rounded-lg border-3 border-ink bg-white p-3 text-sm`,children:[(0,G.jsxs)(`dt`,{className:`font-bold`,children:[B(e,a.from),` kasih`]}),(0,G.jsx)(`dd`,{children:Zc(a.give)}),(0,G.jsx)(`dt`,{className:`font-bold`,children:`Kamu kasih`}),(0,G.jsx)(`dd`,{children:Zc(a.get)})]}),(0,G.jsxs)(`div`,{className:`mt-4 space-y-2`,children:[(0,G.jsxs)(Q,{children:[(0,G.jsx)(V,{variant:`secondary`,onClick:()=>t(a.to,{type:`TRADE_RESPOND`,accept:!1}),children:`Tolak`}),(0,G.jsx)(V,{onClick:()=>t(a.to,{type:`TRADE_RESPOND`,accept:!0}),children:`Terima`})]}),o&&(0,G.jsxs)(`button`,{type:`button`,onClick:()=>t(a.from,{type:`TRADE_CANCEL`}),className:`w-full text-center text-sm font-bold underline decoration-2 underline-offset-4`,children:[B(e,a.from),` batal menawarkan`]})]})]},`trade`):n===e.currentPlayer?(0,G.jsx)(el,{game:e}):null}function el({game:e}){let t=L(e=>e.act),{trade:n}=e;return(0,G.jsxs)(X,{title:`Menunggu jawaban`,onClose:()=>{},closable:!1,children:[(0,G.jsxs)(`ul`,{className:`space-y-2 text-sm`,children:[e.moneyRequests.map(t=>(0,G.jsxs)(`li`,{className:`rounded-lg border-3 border-ink bg-white p-2`,children:[`Minta `,z(t.amount),` ke `,(0,G.jsx)(`b`,{children:B(e,t.to)}),`.`]},t.id)),n&&(0,G.jsxs)(`li`,{className:`rounded-lg border-3 border-ink bg-white p-2`,children:[`Tukar tanah dengan `,(0,G.jsx)(`b`,{children:B(e,n.to)}),`: kamu kasih`,` `,Zc(n.give),`, minta `,Zc(n.get),`.`]})]}),(0,G.jsx)(`p`,{className:`mt-3 text-xs text-muted`,children:`Kalau tidak dijawab sampai waktunya habis, dianggap menolak.`}),n&&(0,G.jsx)(V,{variant:`secondary`,className:`mt-4 w-full`,onClick:()=>t(n.from,{type:`TRADE_CANCEL`}),children:`Batalkan tawaran`})]},`waiting`)}function tl(e,t){switch(t.kind){case`card`:return`${B(e,t.playerId)} menarik kartu`;case`keep`:return`${B(e,t.playerId)} dapat kartu Simpanan`;case`keep_used`:return`${B(e,t.playerId)} memakai kartu Simpanan`;case`crisis`:return`Fase Krisis dimulai`;case`bankrupt`:return`${B(e,t.playerId)} bangkrut`}}function nl(e){switch(e.kind){case`card`:{let{deck:t}=ct(e.cardId);return t===`simpanan`?null:`kartu-${t}`}case`keep_used`:return`simpanan-${e.cardId}`;case`crisis`:return`krisis-mulai`;case`bankrupt`:return`bangkrut`;case`keep`:return null}}var rl={crisis:`krisis`,bankrupt:`bangkrut`,keep_used:`kartu-pakai`},il={baik:`kartu-untung`,buruk:`kartu-apes`};function al({game:e,reveal:t}){let n=L(e=>e.dismissReveal),r=()=>n(t.id);hs(nl(t),t.id),u(rl[t.kind]??null,t.id);let[i]=(0,U.useState)(()=>window.matchMedia(`(prefers-reduced-motion: reduce)`).matches),[o,s]=(0,U.useState)(null),c=t.kind===`card`&&!i&&o!==t.id;return(0,U.useEffect)(()=>{if(!c)return;let e=setTimeout(()=>s(t.id),yt*1e3);return()=>clearTimeout(e)},[c,t.id]),c?null:t.kind===`card`||t.kind===`keep`||t.kind===`keep_used`?(0,G.jsx)(Ot,{cardId:t.cardId,caption:tl(e,t),pawn:e.players[t.playerId]?.pawn,note:t.kind===`keep`?t.kept?`Disimpan untuk dipakai nanti.`:`Tangan sudah penuh (maksimal 3), kartu ini dibuang.`:void 0,onFlip:()=>{if(t.kind===`keep`&&t.kept&&a(`kartu-simpan`),t.kind!==`card`)return;let e=ct(t.cardId);e.deck!==`simpanan`&&e.tone!==`campur`&&mt(il[e.tone])},onClose:r},t.id):(0,G.jsxs)(X,{title:tl(e,t),onClose:r,closable:!1,children:[(0,G.jsxs)(`div`,{className:`animate-card-in`,children:[t.kind===`crisis`&&(0,G.jsxs)(`div`,{className:`rounded-xl border-3 border-ink bg-ink p-4 text-paper shadow-brut`,children:[(0,G.jsx)(`p`,{className:`font-display text-2xl text-sun`,children:`Ekonomi goyang.`}),(0,G.jsxs)(`ul`,{className:`mt-3 list-disc space-y-1 pl-5 text-sm font-medium`,children:[(0,G.jsxs)(`li`,{children:[`Sewa semua tanah naik `,ft.crisis.rent_escalation_percent,`% setiap kali pemain terdepan menyelesaikan satu putaran.`]}),(0,G.jsx)(`li`,{children:`Kartu Krisis dikocok masuk ke dek Musibah.`}),(0,G.jsx)(`li`,{children:`Pajak tahunan dan tarif tol lebih mahal.`})]})]}),t.kind===`bankrupt`&&(0,G.jsxs)(`div`,{className:`flex items-center gap-4 rounded-xl border-3 border-ink bg-white p-4 shadow-brut`,children:[(0,G.jsx)(H,{pawn:e.players[t.playerId]?.pawn??`emak`,size:72,className:`grayscale`}),(0,G.jsx)(`p`,{className:`font-medium`,children:`Semua tanahnya disita Negara. Utang dan piutangnya hangus.`})]})]}),(0,G.jsx)(V,{className:`mt-5 w-full`,onClick:r,children:`Lanjut`})]},t.id)}var ol=[{to:.4,level:`cupu`,label:`Cupu`},{to:.75,level:`biasa`,label:`Biasa Aja`},{to:1,level:`perfect`,label:`Perfect`}],sl={cupu:`bg-rose-500 text-white font-black`,biasa:`bg-amber-400 text-slate-950 font-black`,perfect:`bg-emerald-500 text-white font-black`},cl=1400,ll=e=>ol.find(t=>e<=t.to)?.level??`perfect`;function ul({disabled:e,onThrow:t}){
  let n=(0,U.useRef)(null),
      r=(0,U.useRef)(0),
      i=(0,U.useRef)(0),
      o=(0,U.useRef)(0),
      s=(0,U.useRef)(!1),
      [c,l]=(0,U.useState)(!1),
      u=(0,U.useRef)(null);

  (0,U.useEffect)(()=>()=>{cancelAnimationFrame(r.current),u.current?.stop()},[]);

  let d=e=>{
    let t=(e-i.current)/cl%1;
    o.current=t<.5?t*2:2-t*2,
    n.current?.style.setProperty(`left`,`${o.current*100}%`),
    u.current?.setVolume(.4+o.current*.6),
    r.current=requestAnimationFrame(d)
  },
  p=()=>{
    e||s.current||(s.current=!0,l(!0),o.current=0,i.current=performance.now(),u.current=f(`dadu-kocok`),r.current=requestAnimationFrame(d))
  },
  m=(e=!1)=>{
    s.current&&(s.current=!1,cancelAnimationFrame(r.current),u.current?.stop(),u.current=null,l(!1),!e&&(a(`dadu-lempar`),t(ll(o.current))))
  },
  h=(e,t)=>{
    e.key===`Enter`&&(e.preventDefault(),t&&!e.repeat&&p(),t||m())
  },
  g=(0,U.useEffectEvent)((e,t)=>{
    e.code===`Space`&&(e.target?.closest(`input, textarea, select, [contenteditable]`)||document.querySelector(`dialog[open]`)||(e.preventDefault(),t&&!e.repeat&&p(),t||m()))
  });

  (0,U.useEffect)(()=>{
    let e=e=>g(e,!0),t=e=>g(e,!1);
    return window.addEventListener(`keydown`,e),window.addEventListener(`keyup`,t),()=>{window.removeEventListener(`keydown`,e),window.removeEventListener(`keyup`,t)}
  },[]);

  return (0,G.jsxs)(`div`,{
    className:`w-full`,
    children:[
      /* Meter Bar (Lengthened, Proportions: 40% Cupu, 35% Biasa, 25% Perfect) */
      (0,G.jsxs)(`div`,{
        className:`relative w-full`,
        "aria-hidden":!0,
        children:[
          (0,G.jsx)(`div`,{
            className:`flex h-8 sm:h-9 overflow-hidden rounded-xl border border-slate-300 shadow-inner`,
            children:ol.map((e,t)=>(0,G.jsx)(`div`,{
              style:{width:`${(e.to-(ol[t-1]?.to??0))*100}%`},
              className:`grid place-items-center text-xs font-black uppercase tracking-wider not-first:border-l border-black/15 select-none ${sl[e.level]}`,
              children:e.label
            },t))
          }),
          (0,G.jsx)(`div`,{
            ref:n,
            className:`absolute -top-1.5 -bottom-1.5 left-0 w-2.5 -translate-x-1/2 rounded-full border-2 border-white bg-slate-900 shadow-md pointer-events-none`
          })
        ]
      }),
      /* Primary Throw Button (Wider, tactile, vibrant) */
      (0,G.jsxs)(`button`,{
        type:`button`,
        disabled:e,
        "aria-label":`Kocok dadu: tahan, lalu lepas untuk melempar`,
        "data-sfx":`none`,
        onClick:()=>{!s.current&&(p(),setTimeout(()=>m(),80))},
        onPointerDown:e=>{e.currentTarget.setPointerCapture(e.pointerId),p()},
        onPointerUp:()=>m(),
        onPointerCancel:()=>m(!0),
        onKeyDown:e=>h(e,!0),
        onKeyUp:e=>h(e,!1),
        onContextMenu:e=>e.preventDefault(),
        className:`mt-2.5 w-full touch-none rounded-xl px-4 py-3 sm:py-3.5 font-black text-sm sm:text-base tracking-wider uppercase select-none transition cursor-pointer disabled:cursor-not-allowed disabled:opacity-40 shadow-lg active:scale-[0.99] ${c?`animate-shake bg-slate-900 text-amber-300 shadow-none`:`bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950`}`,
        children:[
          (0,G.jsx)(`svg`,{className:`size-5 inline-block mr-2 -mt-0.5`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.5`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,G.jsx)(`rect`,{width:`18`,height:`18`,x:`3`,y:`3`,rx:`4`}),(0,G.jsx)(`circle`,{cx:`8.5`,cy:`8.5`,r:`1.5`,fill:`currentColor`}),(0,G.jsx)(`circle`,{cx:`15.5`,cy:`8.5`,r:`1.5`,fill:`currentColor`}),(0,G.jsx)(`circle`,{cx:`15.5`,cy:`15.5`,r:`1.5`,fill:`currentColor`}),(0,G.jsx)(`circle`,{cx:`8.5`,cy:`15.5`,r:`1.5`,fill:`currentColor`}),(0,G.jsx)(`circle`,{cx:`12`,cy:`12`,r:`1.5`,fill:`currentColor`})]}),
          c?`Lepas untuk lempar!`:`Tahan untuk kocok`
        ]
      }),
      /* Keyboard Helper */
      (0,G.jsxs)(`p`,{
        className:`mt-2 hidden text-center text-xs text-slate-500 font-semibold pointer-fine:block`,
        children:[
          `Keyboard: tahan `,
          (0,G.jsx)(`kbd`,{className:`rounded-md border border-slate-300 bg-slate-100 px-1.5 py-0.5 font-bold text-slate-800 shadow-xs text-[11px]`,children:`Spasi`}),
          `, lepas untuk melempar.`
        ]
      })
    ]
  });
}var {max_turns:dl}=ft.tile_rules.jail;function fl(e){let t=e.players[e.currentPlayer],{pending:n}=e;return e.phase===`pre_roll`?t.jailTurns===null?null:`Di Lapas, percobaan ${t.jailTurns+1} dari ${dl}: keluar kalau dadunya kembar.`:n?.kind===`card`?`${Ct[ct(n.cardId).deck]}: lempar satu dadu.`:n?.kind===`dice`?n.source===`raid`?`Razia: lempar satu dadu.`:n.best?`Pengadilan: dua lemparan, diambil yang terbaik.`:`Pengadilan: lempar satu dadu.`:null}function pl({game:e}){
  let t=L(e=>e.act),
      n=L(e=>e.send!==null),
      r=P(e=>e.throwDice),
      i=e.players[e.currentPlayer],
      a=fl(e),
      curTile=wt(i.position);

  return (0,G.jsxs)(`section`,{
    "aria-label":`Lempar dadu, giliran ${i.name}`,
    className:`pointer-events-auto flex flex-col items-center gap-2 bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-3xl shadow-[0_20px_45px_-10px_rgba(0,0,0,0.35)] border border-slate-200/90 w-full max-w-[580px] [body:has(dialog[open])_&]:hidden`,
    children:[
      /* Petak Saat Ini Bar */
      (0,G.jsxs)(`div`,{
        className:`w-full flex items-center justify-between pb-1.5 border-b border-slate-100 text-xs`,
        children:[
          (0,G.jsx)(`span`,{className:`text-[10px] font-bold uppercase tracking-wider text-slate-500`,children:`Petak Saat Ini:`}),
          (0,G.jsxs)(`strong`,{
            className:`font-extrabold text-slate-900 flex items-center gap-1`,
            children:[
              (0,G.jsxs)(`svg`,{className:`size-3 text-rose-500 shrink-0`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.5`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,G.jsx)(`path`,{d:`M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z`}),(0,G.jsx)(`circle`,{cx:`12`,cy:`10`,r:`3`})]}),
              curTile
            ]
          })
        ]
      }),
      e.phase===`pre_roll`&&(0,G.jsx)(Wc,{game:e,player:i,className:`mb-1 sm:hidden w-full`}),
      a&&(0,G.jsx)(`p`,{className:`text-xs font-semibold text-slate-600 text-center text-pretty`,children:a}),
      (0,G.jsx)(ul,{
        onThrow:a=>{
          let o={type:`ROLL`};
          if(n)return t(i.id,o,a);
          let s=ut(e,i.id,o),c=`error`in s?void 0:s.events.find(e=>e.type===`DICE`);
          c?.type===`DICE`?r({values:c.values,level:a,onLand:()=>t(i.id,o)}):t(i.id,o);
        }
      },`${e.round}:${e.currentPlayer}`)
    ]
  });
}var ml={perfect:{title:`Perfect!`,color:`bg-daun`},biasa:{title:`Biasa aja`,color:`bg-sun`},cupu:{title:`Cupu`,color:`bg-merah text-paper`}},hl={perfect:[`Tangan dewa. Dadunya tetap tidak peduli.`,`Mulus kayak proyek yang sudah dikondisikan.`,`Lemparan sempurna, hasil tetap takdir.`],biasa:[`Standar warga. Tidak istimewa, tidak malu-maluin.`,`Biasa aja, kayak kenaikan gaji tahun ini.`,`Lemparan kelas menengah. Pas-pasan.`],cupu:[`Kurang gizi. Dadunya cuma geser sedikit.`,`Lemparan cupu. Tenang, angkanya tetap acak.`,`Ngocoknya kayak nunggu pencairan bansos.`]};function gl(){let e=P(e=>e.current),t=e?.level;hs(t===`perfect`?`dadu-perfect`:t===`cupu`?`dadu-cupu`:null,e?.id);let n=e?.values??[],r=`angka-${n.reduce((e,t)=>e+t,0)}`,i=n.length===2&&n[0]===n[1];if(hs(e?.settled?i?[r,`angka-double`]:r:null,e?.id),!e)return null;let{title:a,color:o}=ml[e.level],s=hl[e.level];return(0,G.jsx)(`div`,{role:`status`,className:`pointer-events-none absolute inset-x-0 top-[22%] flex animate-stamp justify-center px-4 opacity-0`,children:(0,G.jsxs)(`p`,{className:`brut max-w-xs rounded-lg px-3 py-1.5 text-center sm:px-4 sm:py-2 ${o}`,children:[(0,G.jsx)(`span`,{className:`block font-display text-xl leading-none uppercase sm:text-2xl`,children:a}),(0,G.jsx)(`span`,{className:`mt-1 block text-[0.7rem] font-bold text-balance sm:text-xs`,children:s[e.id%s.length]})]})},e.id)}var _l=`brut rounded-lg px-2 py-1 text-xs font-bold shadow-brut-sm sm:px-2.5 sm:py-1.5 sm:text-sm`,vl=`shadow-brut-sm sm:px-3 sm:text-sm`;function formatGameNotification(e,t,n){if(!t||!e)return null;switch(t.type){case`BUY`:{let r=e.players?.[t.playerId],i=typeof t.tile===`number`?wt(t.tile):`Properti`;return{id:n,type:`BUY`,badge:`Beli Properti`,badgeBg:`bg-emerald-500 text-slate-950 font-black`,glow:`border-emerald-500/60 shadow-emerald-500/10`,title:`${r?.name||`Pemain`} Membeli ${i}`,sub:`Hak milik kota resmi diperoleh`,pawn:r?.pawn}}case`BUILD`:{let r=typeof t.tile===`number`?wt(t.tile):`Properti`,i=typeof t.level===`number`?Dt(t.level):`Rumah`,a=e.properties?.[t.tile]?.owner,o=a?e.players?.[a]:e.players?.[e.currentPlayer],s=t.level===3;return{id:n,type:`BUILD`,badge:s?`Hotel Mewah`:`Bangun Rumah`,badgeBg:s?`bg-amber-400 text-slate-950 font-black`:`bg-teal-500 text-slate-950 font-black`,glow:s?`border-amber-400/70 shadow-amber-500/20`:`border-teal-400/60 shadow-teal-500/10`,title:`${o?.name||`Pemain`} Bangun ${i}`,sub:`di kota ${r} (Sewa naik!)`,pawn:o?.pawn}}case`TAKEOVER`:{let r=e.players?.[t.playerId],i=e.players?.[t.from],a=typeof t.tile===`number`?wt(t.tile):`Properti`;return{id:n,type:`TAKEOVER`,badge:`Ambil Alih`,badgeBg:`bg-indigo-500 text-white font-black`,glow:`border-indigo-400/60 shadow-indigo-500/15`,title:`${r?.name||`Pemain`} Mengambil Alih ${a}`,sub:`dari ${i?.name||`pemilik lama`}`,pawn:r?.pawn}}case`MONEY`:{let r=z(t.amount);if(t.reason===`rent`){let i=e.players?.[t.from],a=e.players?.[t.to];return{id:n,type:`RENT`,badge:`Bayar Sewa`,badgeBg:`bg-amber-400 text-slate-950 font-black`,glow:`border-amber-400/60 shadow-amber-500/15`,title:`${i?.name||`Pemain`} Bayar Sewa ${r}`,sub:`ke ${a?.name||`pemilik tanah`}`,pawn:i?.pawn}}if(t.reason===`tax`){let i=e.players?.[t.from];return{id:n,type:`TAX`,badge:`Bayar Pajak`,badgeBg:`bg-rose-500 text-white font-black`,glow:`border-rose-400/60 shadow-rose-500/15`,title:`${i?.name||`Pemain`} Bayar Pajak ${r}`,sub:`masuk ke Kas Negara`,pawn:i?.pawn}}if(t.reason===`toll`){let i=e.players?.[t.from];return{id:n,type:`TOLL`,badge:`Tarif Tol`,badgeBg:`bg-cyan-500 text-slate-950 font-black`,glow:`border-cyan-400/60 shadow-cyan-500/15`,title:`${i?.name||`Pemain`} Bayar Tol ${r}`,sub:`biaya jalan tol`,pawn:i?.pawn}}if(t.reason===`bail`){let i=e.players?.[t.from];return{id:n,type:`BAIL`,badge:`Tebusan Lapas`,badgeBg:`bg-slate-700 text-white font-black`,glow:`border-slate-500/60`,title:`${i?.name||`Pemain`} Bayar Tebusan ${r}`,sub:`uang jaminan bebas bersyarat`,pawn:i?.pawn}}return null}case`JAIL`:{let r=e.players?.[t.playerId];return{id:n,type:`JAIL`,badge:`Masuk Lapas`,badgeBg:`bg-rose-600 text-white font-black`,glow:`border-rose-500/70 shadow-rose-500/20`,title:`${r?.name||`Pemain`} Dijebloskan ke Lapas!`,sub:`tertangkap & mendekam di tahanan`,pawn:r?.pawn}}case`RELEASE`:{let r=e.players?.[t.playerId],i=t.via===`doubles`?`dadu kembar`:t.via===`bail`?`uang tebusan`:`kartu sakti`;return{id:n,type:`RELEASE`,badge:`Bebas Lapas`,badgeBg:`bg-emerald-500 text-slate-950 font-black`,glow:`border-emerald-400/60 shadow-emerald-500/10`,title:`${r?.name||`Pemain`} Bebas dari Lapas`,sub:`bebas lewat ${i}`,pawn:r?.pawn}}case`CARD`:{let r=e.players?.[t.playerId],i=t.deck===`takdir`,a=i?`Takdir`:`Musibah`,o=Et(e,t);return{id:n,type:`CARD`,badge:`Kartu ${a}`,badgeBg:i?`bg-cyan-500 text-slate-950 font-black`:`bg-rose-500 text-white font-black`,glow:i?`border-cyan-400/60 shadow-cyan-500/15`:`border-rose-400/60 shadow-rose-500/15`,title:`${r?.name||`Pemain`} Tarik Kartu ${a}`,sub:o||`Efek kartu langsung berlaku`,pawn:r?.pawn}}case`KEEP_USED`:{let r=e.players?.[t.playerId],i=Et(e,t);return{id:n,type:`KEEP_USED`,badge:`Pakai Kartu`,badgeBg:`bg-purple-500 text-white font-black`,glow:`border-purple-400/60 shadow-purple-500/15`,title:`${r?.name||`Pemain`} Memakai Kartu`,sub:i||`Kartu simpanan diaktifkan`,pawn:r?.pawn}}case`BANKRUPT`:{let r=e.players?.[t.playerId];return{id:n,type:`BANKRUPT`,badge:`Bangkrut!`,badgeBg:`bg-rose-950 text-rose-300 font-black border border-rose-500`,glow:`border-rose-600 shadow-rose-600/30`,title:`Gawat! ${r?.name||`Pemain`} Bangkrut`,sub:`seluruh aset disita dan gugur dari game`,pawn:r?.pawn}}case`SEIZE`:{let r=e.players?.[t.from],i=typeof t.tile===`number`?wt(t.tile):`Properti`;return{id:n,type:`SEIZE`,badge:`Sita Negara`,badgeBg:`bg-rose-800 text-white font-black`,glow:`border-rose-600/70 shadow-rose-800/20`,title:`${i} Disita Negara!`,sub:`milik ${r?.name||`pemain`} disita pemerintah`,pawn:r?.pawn}}case`LOAN`:{let r=e.players?.[t.loan?.borrower],i=t.loan?.lender===`pinjol`?`Pinjol Ilegal`:(e.players?.[t.loan?.lender]?.name||`Kreditur`),a=z(t.loan?.owed||0);return{id:n,type:`LOAN`,badge:`Pinjol / Utang`,badgeBg:`bg-amber-500 text-slate-950 font-black`,glow:`border-amber-400/60`,title:`${r?.name||`Pemain`} Ambil Utang ${a}`,sub:`pinjaman dari ${i}`,pawn:r?.pawn}}case`SALARY`:{let r=e.players?.[t.playerId],i=z(t.amount);return{id:n,type:`SALARY`,badge:`Gajian`,badgeBg:`bg-emerald-500 text-slate-950 font-black`,glow:`border-emerald-400/60 shadow-emerald-500/10`,title:`${r?.name||`Pemain`} Gajian ${i}`,sub:`melewati petak Mulai`,pawn:r?.pawn}}default:return null}}function GameNotifications({game:e}){let[t,n]=(0,U.useState)([]),r=(0,U.useRef)(null),i=L(e=>e.log);(0,U.useEffect)(()=>{if(r.current===null){r.current=i.length>0?i[i.length-1].id:0;return}let a=i.filter(e=>e.id>r.current);if(a.length===0)return;r.current=a[a.length-1].id;let o=[];for(let r of a){let i=formatGameNotification(e,r.event,r.id);i&&o.push(i)}o.length>0&&n(e=>[...e,...o].slice(-3))},[i,e]);(0,U.useEffect)(()=>{if(t.length===0)return;let e=setTimeout(()=>{n(e=>e.slice(1))},4500);return()=>clearTimeout(e)},[t]);if(t.length===0)return null;return(0,G.jsx)(`div`,{className:`pointer-events-none fixed top-14 sm:top-16 inset-x-0 mx-auto max-w-md px-3 z-40 flex flex-col items-center gap-2`,children:t.map(e=>(0,G.jsxs)(`div`,{key:e.id,className:`game-notif-card pointer-events-auto w-full rounded-2xl bg-slate-900/95 text-white backdrop-blur-md shadow-2xl border ${e.glow||`border-slate-700/80`} p-2.5 sm:p-3 flex items-center gap-2.5 sm:gap-3 animate-notif-slide-down cursor-pointer select-none`,onClick:()=>n(t=>t.filter(t=>t.id!==e.id)),role:`alert`,children:[(0,G.jsxs)(`div`,{className:`relative shrink-0`,children:[(0,G.jsx)(`div`,{className:`w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-slate-800 border border-slate-700/80 flex items-center justify-center overflow-hidden shadow-inner`,children:e.pawn?(0,G.jsx)(H,{pawn:e.pawn,size:36}):(0,G.jsx)(`span`,{className:`font-black text-amber-400 text-sm`,children:`!`})}),(0,G.jsx)(`div`,{className:`absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full border-2 border-slate-900 ${e.badgeBg.split(` `)[0]} shadow-xs`})]}),(0,G.jsxs)(`div`,{className:`flex-1 min-w-0 pr-1`,children:[(0,G.jsxs)(`div`,{className:`flex items-center gap-1.5 mb-0.5`,children:[(0,G.jsx)(`span`,{className:`px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] uppercase tracking-wider ${e.badgeBg} shadow-xs`,children:e.badge}),(0,G.jsx)(`span`,{className:`text-[10px] font-bold text-slate-400`,children:`baru saja`})]}),(0,G.jsx)(`div`,{className:`text-xs sm:text-sm font-extrabold text-white leading-snug truncate`,children:e.title}),(0,G.jsx)(`div`,{className:`text-[11px] font-medium text-slate-300 leading-tight truncate`,children:e.sub})]}),(0,G.jsx)(`button`,{type:`button`,onClick:t=>{t.stopPropagation(),n(t=>t.filter(t=>t.id!==e.id))},className:`shrink-0 p-1 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition cursor-pointer`,"aria-label":`Tutup notifikasi`,children:(0,G.jsxs)(`svg`,{className:`size-4`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.5`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,G.jsx)(`line`,{x1:`18`,y1:`6`,x2:`6`,y2:`18`}),(0,G.jsx)(`line`,{x1:`6`,y1:`6`,x2:`18`,y2:`18`})]})})]}))})}function yl({game:e,walking:t}){
  let [n,r]=(0,U.useState)(!1),
      [i,a]=(0,U.useState)(!1),
      o=L(e=>t?void 0:e.reveals[0]),
      s=P(e=>e.current?.landed===!1),
      c=L(e=>e.shots.length>0),
      l=!s&&!t&&!c&&!o,
      u=e.phase===`game_over`,
      d=L(e=>e.seat),
      f=F(e=>e.open),
      p=F(e=>e.setOpen),
      m=d===null||d===e.currentPlayer,
      h=L(e=>e.nextLogId),
      g=e.phase===`awaiting_dice`?`dice:${h}`:null,
      [_,v]=(0,U.useState)(null),
      y=g!==null&&_===g,
      b=e.phase===`pre_roll`||y||(e.phase===`awaiting_dice`&&(!e.pending||(e.pending.kind!==`dice`&&e.pending.kind!==`card`))),
      x=e.moneyRequests.length>0||e.trade!==null,
      activePlayerName=e.players[e.currentPlayer]?.name||`Pemain`,netStatus=I(e=>e.status),ping=I(e=>e.ping),lagging=I(e=>e.lagging),autoHealing=I(e=>e.autoHealing);(0,U.useEffect)(()=>{if(m&&!u&&(!l||!b)){let tm=setTimeout(()=>{try{console.warn('[AutoSync] Giliran aktif tertahan, sinkronkan ulang...');I.getState().resync?.()||(L.getState().resync?.()||(L.setState({moves:[],view:null,shots:[],reveals:[],playingShot:null,arrived:{}}),P.setState({current:null,focus:null})),I.getState().send?.('hello'))}catch(_){}},2200);return()=>clearTimeout(tm)}},[m,u,l,b,e.round,e.currentPlayer]);

  return (0,G.jsxs)(`div`,{
    className:`pointer-events-none absolute inset-0 p-3 pt-[max(0.75rem,env(safe-area-inset-top))] pb-[max(0.75rem,env(safe-area-inset-bottom))]`,
    children:[
      (0,G.jsxs)(`div`,{
        className:`flex h-full flex-col`,
        children:[
          /* REDESIGNED TOP HUD BAR (3 Split Solid Islands) */
          (0,G.jsxs)(`header`,{
            className:`pointer-events-none flex items-center justify-between gap-2`,
            children:[
              /* 1. TOP-LEFT ISLAND: Solid Slate Dark Pill (Never faint/washed out!) */
              (0,G.jsxs)(`div`,{
                style:{backgroundColor:`#0f172a`,color:`#ffffff`},
                className:`top-island-dark pointer-events-auto flex items-center gap-2 p-1.5 pr-3.5 sm:pr-4 rounded-2xl shadow-2xl border border-slate-700/80`,
                children:[
                  (0,G.jsxs)(`div`,{
                    className:`bg-gradient-to-br from-amber-400 to-amber-500 text-slate-950 px-2.5 sm:px-3 py-1.5 rounded-xl font-black text-xs tracking-wide uppercase flex items-center gap-1.5 shadow-sm`,
                    children:[
                      (0,G.jsxs)(`svg`,{className:`size-3.5 stroke-[2.5] shrink-0 text-slate-950`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.5`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,G.jsx)(`circle`,{cx:`12`,cy:`12`,r:`10`}),(0,G.jsx)(`polygon`,{points:`16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76`})]}),
                      `Ronde `,e.round,
                      e.settings.mode===`rounds`&&(0,G.jsxs)(`span`,{className:`text-slate-950/70 font-black`,children:[`/ `,e.settings.maxRounds]}),
                      e.crisisActive&&(0,G.jsx)(`span`,{className:`ml-1 text-[9px] bg-rose-600 text-white px-1.5 py-0.5 rounded font-black uppercase`,children:`Krisis`})
                    ]
                  }),
                  (0,G.jsxs)(`div`,{
                    className:`flex items-center gap-2 pl-1`,
                    children:[
                      (0,G.jsxs)(`span`,{
                        className:`relative flex h-2.5 w-2.5 shrink-0`,
                        children:[
                          (0,G.jsx)(`span`,{className:`animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75`}),
                          (0,G.jsx)(`span`,{className:`relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500`})
                        ]
                      }),
                      (0,G.jsxs)(`div`,{
                        className:`text-xs truncate max-w-28 sm:max-w-44 text-slate-200`,
                        children:[
                          (0,G.jsx)(`span`,{className:`text-slate-400 font-bold`,children:`Giliran: `}),
                          (0,G.jsx)(`strong`,{className:`text-amber-300 font-black ml-0.5`,children:activePlayerName})
                        ]
                      })
                    ]
                  })
                ]
              }),

              /* 2. TOP-CENTER ISLAND: Kas Negara Solid Pot */
              (0,G.jsx)(`div`,{
                className:`pointer-events-auto flex items-center`,
                children:(0,G.jsxs)(`div`,{
                  className:`bg-gradient-to-r from-rose-600 to-red-600 text-white p-1.5 pr-3.5 sm:pr-4 rounded-2xl shadow-xl border border-rose-400/50 flex items-center gap-2 sm:gap-2.5`,
                  children:[
                    (0,G.jsx)(`div`,{
                      className:`w-8 h-8 rounded-xl bg-black/30 border border-white/20 flex items-center justify-center font-black text-xs text-amber-300 shadow-inner`,
                      children:`Rp`
                    }),
                    (0,G.jsxs)(`div`,{
                      children:[
                        (0,G.jsxs)(`div`,{
                          className:`flex items-center gap-1.5`,
                          children:[
                            (0,G.jsx)(`span`,{className:`text-[10px] font-extrabold uppercase tracking-wider text-rose-100`,children:`Kas Negara`}),
                            (0,G.jsx)(`span`,{className:`text-[9px] bg-black/25 px-1.5 py-0.2 rounded text-amber-300 font-bold`,children:`Pajak & Denda`})
                          ]
                        }),
                        (0,G.jsx)(`div`,{
                          className:`text-sm font-black tracking-tight leading-none mt-0.5 tabular-nums text-white`,
                          children:z(e.stateTreasury)
                        })
                      ]
                    })
                  ]
                })
              }),

              /* 3. TOP-RIGHT ISLAND: Chat (if seat), Log, Menu */
              (0,G.jsxs)(`div`,{
                style:{backgroundColor:`#ffffff`},
                className:`pointer-events-auto flex items-center gap-1.5 sm:gap-2 p-1.5 rounded-2xl shadow-xl border border-slate-200/90`,
                children:[
                  d&&(0,G.jsx)(ec,{className:`${vl}`}),
                  (0,G.jsxs)(`button`,{
                    type:`button`,
                    onClick:()=>a(!0),
                    className:`px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-black text-xs flex items-center gap-1.5 transition cursor-pointer`,
                    children:[
                      (0,G.jsx)(`svg`,{className:`size-3.5 text-slate-700 shrink-0`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,G.jsx)(`path`,{d:`M15 12h-5`}),(0,G.jsx)(`path`,{d:`M15 8h-5`}),(0,G.jsx)(`path`,{d:`M19 17V5a2 2 0 0 0-2-2H4`}),(0,G.jsx)(`path`,{d:`M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 0 1-2 2z`}),(0,G.jsx)(`path`,{d:`M4 19a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2`})]}),
                      `LOG`
                    ]
                  }),
                  (0,G.jsxs)(`div`,{
                    title:`Latensi jaringan: ${ping||0}ms${netStatus==='reconnecting'?' (Terputus - Menghubungkan ulang)':''}`,
                    onClick:()=>{
                      try{
                        I.getState().resync?.()||(
                          L.getState().resync?.()||(
                            L.setState({moves:[],view:null,shots:[],reveals:[],playingShot:null,arrived:{}}),
                            P.setState({current:null,focus:null})
                          ),
                          I.getState().send?.("hello")
                        );
                      }catch(_){}
                    },
                    className:`px-2.5 py-1.5 rounded-xl border flex items-center gap-1.5 font-mono text-[11px] font-black cursor-pointer transition select-none ${
                      netStatus===`reconnecting`
                        ? `bg-rose-500/10 border-rose-500/40 text-rose-600 animate-pulse`
                        : autoHealing
                        ? `bg-amber-400/20 border-amber-500/40 text-amber-800`
                        : ping>300
                        ? `bg-rose-50 border-rose-300 text-rose-700`
                        : ping>120
                        ? `bg-amber-50 border-amber-300 text-amber-700`
                        : `bg-emerald-50 border-emerald-300 text-emerald-700`
                    }`,
                    children:[
                      (0,G.jsx)(`span`,{
                        className:`size-2 rounded-full ${
                          netStatus===`reconnecting`
                            ? `bg-rose-500 animate-ping`
                            : autoHealing
                            ? `bg-amber-500 animate-spin`
                            : ping>300
                            ? `bg-rose-500 animate-pulse`
                            : ping>120
                            ? `bg-amber-500`
                            : `bg-emerald-500`
                        }`
                      }),
                      netStatus===`reconnecting`
                        ? `Putus`
                        : autoHealing
                        ? `Sync...`
                        : ping ? `${ping}ms` : `--`
                    ]
                  }),
                  (0,G.jsxs)(`button`,{
                    type:`button`,
                    title:`Sinkronkan ulang permainan jika tombol giliran macet`,
                    onClick:()=>{
                      try{
                        I.getState().resync?.()||(
                          L.getState().resync?.()||(
                            L.setState({moves:[],view:null,shots:[],reveals:[],playingShot:null,arrived:{}}),
                            P.setState({current:null,focus:null})
                          ),
                          I.getState().send?.("hello")
                        );
                      }catch(err){console.error(err)}
                    },
                    className:`px-2.5 sm:px-3 py-1.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs flex items-center gap-1.5 transition cursor-pointer active:scale-95 shadow-sm`,
                    children:[
                      (0,G.jsx)(`svg`,{className:`size-3.5 shrink-0 animate-[spin_4s_linear_infinite]`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.5`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,G.jsx)(`path`,{d:`M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67`})]}),
                      `SINKRON`
                    ]
                  }),
                  (0,G.jsxs)(`button`,{
                    type:`button`,
                    onClick:()=>r(!0),
                    className:`px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-black text-xs flex items-center gap-1.5 transition cursor-pointer`,
                    children:[
                      (0,G.jsx)(`svg`,{className:`size-3.5 shrink-0`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,G.jsx)(`line`,{x1:`4`,x2:`20`,y1:`12`,y2:`12`}),(0,G.jsx)(`line`,{x1:`4`,x2:`20`,y1:`6`,y2:`6`}),(0,G.jsx)(`line`,{x1:`4`,x2:`20`,y1:`18`,y2:`18`})]}),
                      `MENU`
                    ]
                  })
                ]
              })
            ]
          }),

          /* LEFT HUD: PLAYER LEADERBOARD (Jc) */
          (0,G.jsx)(`div`,{
            className:`mt-2 sm:mt-3`,
            children:(0,G.jsx)(Jc,{game:e,idle:l&&!x&&m})
          }),

          /* BOTTOM ACTION CONSOLE (pl) */
          (0,G.jsx)(`div`,{
            className:`mt-auto flex justify-center`,
            children:!u&&l&&b&&!x&&m&&(0,G.jsx)(pl,{game:e})
          })
        ]
      }),
      (0,G.jsx)(GameNotifications,{game:e}),
      autoHealing&&(0,G.jsx)(`div`,{
        className:`pointer-events-none fixed top-16 inset-x-0 mx-auto max-w-sm px-4 z-50 flex items-center justify-center animate-bounce`,
        children:(0,G.jsxs)(`div`,{
          className:`rounded-xl bg-amber-400 text-slate-950 font-black text-xs px-3.5 py-2 shadow-2xl border-2 border-slate-900 flex items-center gap-2`,
          children:[
            (0,G.jsx)(`svg`,{className:`size-4 animate-spin shrink-0`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.5`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,G.jsx)(`path`,{d:`M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67`})]}),
            `Terdeteksi jeda, memulihkan data game otomatis...`
          ]
        })
      }),
      (0,G.jsx)(gl,{}),
      !u&&(0,G.jsx)(xl,{game:e,ready:!c}),
      l&&!u&&x&&(0,G.jsx)($c,{game:e}),
      l&&!u&&g&&!y&&!x&&m&&(0,G.jsx)(Us,{game:e,onReady:()=>v(g)}),
      l&&!u&&!b&&!g&&m&&(0,G.jsx)(Ls,{game:e}),
      l&&!m&&d&&e.phase===`awaiting_loan`&&(0,G.jsx)(bl,{game:e,seat:d}),
      l&&u&&(0,G.jsx)(Oc,{game:e}),
      o&&(0,G.jsx)(al,{game:e,reveal:o}),
      i&&(0,G.jsx)(Ws,{game:e,onClose:()=>a(!1)}),
      n&&(0,G.jsx)(Xs,{onClose:()=>r(!1)}),
      d&&f&&(0,G.jsx)(nc,{onClose:()=>p(!1)}),
      d&&!f&&(0,G.jsx)(rc,{}),
      (0,G.jsx)(At,{})
    ]
  });
}function bl({game:e,seat:t}){let[n,r]=(0,U.useState)(!1),{pending:i}=e,a=e.players[t],o=e.players[e.currentPlayer];return n||i?.kind!==`loan`||!a||a.bankrupt||a.cash<i.amount?null:(0,G.jsx)(X,{title:`Pinjaman untuk ${o.name}`,onClose:()=>r(!0),children:(0,G.jsx)(Ts,{game:e,busy:!1})})}function xl({game:e,ready:t}){let n=e.players[e.currentPlayer],r=L(t=>t.seat===e.currentPlayer),i=L(e=>e.seat!==null),a=`${e.round}:${e.currentPlayer}`,[o,s]=(0,U.useState)(null);t&&o!==a&&s(a);let c=o===a;return hs(c?i?r?`giliranmu`:null:`giliran-${n.pawn}`:null,a),c?(0,G.jsx)(`div`,{"aria-live":`polite`,className:`pointer-events-none absolute inset-x-0 top-1/3 flex animate-turn-banner justify-center px-4 opacity-0`,children:(0,G.jsxs)(`p`,{className:`brut flex items-center gap-2.5 rounded-xl bg-sun px-3 py-2 shadow-brut sm:gap-3 sm:px-5 sm:py-3 sm:shadow-brut-lg`,children:[(0,G.jsx)(H,{pawn:n.pawn,size:48,className:`max-sm:size-9!`}),(0,G.jsxs)(`span`,{children:[(0,G.jsx)(`span`,{className:`block text-xs font-bold`,children:r?`Giliranmu`:`Giliran`}),(0,G.jsx)(`span`,{className:`font-display text-lg leading-none sm:text-2xl`,children:n.name})]})]})},a):null}var Sl=new URLSearchParams(location.search).has(`fps`);function Cl(){let[e,t]=(0,U.useState)(null),n=L(e=>e.game),r=L(e=>e.view),i=L(e=>e.moves),a=L(e=>e.arrived),s=L(e=>e.finishMove),u=L(e=>e.reveals),d=L(e=>e.shots),f=L(e=>e.playingShot),{active:rawP,progress:m}=Nt();let p=rawP,h=r??n,g=i[0]&&!(u[0]&&u[0].seq<i[0].seq)?i[0]:void 0,_=h?.crisisActive===!0||u.some(e=>e.kind===`crisis`);c(h?.phase===`game_over`?`victory`:_?`kritis`:`ingame`),(0,U.useEffect)(()=>{p||(pt(),o())},[p]);let v=(0,U.useMemo)(()=>h?h.turnOrder.flatMap(e=>{let t=h.players[e];if(e===g?.playerId)return[];let n=t=>d.some(n=>n.kind===t&&n.player===e&&n.id!==f);if(t.bankrupt){let n=d.find(t=>t.kind===`bankrupt`&&t.player===e);return n?[{pawn:t.pawn,tile:n.tiles[0],falling:n.id===f}]:[]}return[{pawn:t.pawn,tile:a[e]??t.position,debt:t.cash<0&&!n(`debt`),active:e===h.currentPlayer&&h.phase!==`game_over`}]}):[],[h,g,a,d,f]),y=(0,U.useMemo)(()=>{let e=g&&h?.players[g.playerId];return!g||!e?null:{id:g.id,pawn:e.pawn,from:a[g.playerId]??e.position,path:g.path,mode:g.mode,salary:g.salary,bail:g.bail}},[g,h,a]),[b]=(0,U.useState)(()=>window.matchMedia(`(prefers-reduced-motion: reduce)`).matches),x=g?void 0:u[0],S=x?.kind===`card`&&!b?{id:x.id,deck:x.deck,cardId:x.cardId}:null,C=F(e=>e.bubbles),w=(0,U.useMemo)(()=>Object.fromEntries(Object.entries(C).flatMap(([e,t])=>{let n=h?.players[e]?.pawn;return n?[[n,t]]:[]})),[C,h?.players]),T=(0,U.useMemo)(()=>h&&bt(h,d,f),[h,d,f]),E=d[0]?.id===f?d[0]:null,D=(0,U.useMemo)(()=>({state:`#2B2B2B`,...Object.fromEntries(Object.values(h?.players??{}).map(e=>[e.id,l(e.pawn).color]))}),[h?.players]);return!h||!T?null:(0,G.jsxs)(`main`,{className:`relative h-dvh w-full overflow-hidden bg-sky`,children:[(0,G.jsx)(ps,{tileOverrides:T.tileOverrides,pawns:v,walk:y,onWalkDone:s,stickers:w,properties:T.properties,ownerColors:D,shot:E,drawing:S,crisis:h.crisisActive,onPerf:Sl?t:void 0}),(0,G.jsx)(`div`,{"aria-hidden":!0,className:`pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgb(120_30_10/0.35)_100%)] transition-opacity duration-[2500ms] ${h.crisisActive?`opacity-100`:`opacity-0`}`}),e&&(0,G.jsxs)(`output`,{className:`pointer-events-none absolute right-2 bottom-2 z-10 rounded bg-ink/80 px-2 py-1 font-mono text-xs text-paper tabular-nums`,children:[e.fps,` fps · `,e.calls,` draw ·`,` `,Math.round(e.triangles/1e3),`k tri · dpr `,e.dpr.toFixed(2)]}),p?(0,G.jsx)(`p`,{className:`absolute inset-0 grid place-items-center`,children:(0,G.jsxs)(`span`,{className:`brut rounded-lg bg-paper px-4 py-2 font-bold`,children:[`Memuat pulau… `,Math.round(m),`%`]})}):(0,G.jsx)(yl,{game:h,walking:!!g})]})}export{Cl as default};